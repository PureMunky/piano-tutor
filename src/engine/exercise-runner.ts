import type { ExerciseStep, ExerciseScore } from '../types';
import { pitchDetector, type PitchEvent } from '../core/pitch-detector';
import { vexKeyToNoteName, notesEqual } from '../core/note-utils';
import { calculateScore } from './scoring';

export interface PlayedNote {
  note: string;
  expectedNote: string;
  expectedIndex: number;
  startMs: number;
  durationMs: number;
  expectedStartMs: number;
  expectedDurationMs: number;
  source: 'mic' | 'click';
}

export type ExerciseCallback = {
  onCursorAdvance: (index: number, expectedNote: string | null) => void;
  onNoteCorrect: (index: number, note: string) => void;
  onNoteWrong: (expectedNote: string, playedNote: string) => void;
  onNoteDetected: (note: string) => void;
  onSlotProgress: (index: number, progress: number) => void;
  onPlayedNote: (played: PlayedNote) => void;
  onMissed: (index: number, expectedNote: string) => void;
  onComplete: (score: ExerciseScore, played: PlayedNote[]) => void;
};

interface Slot {
  expectedNotes: string[];
  startMs: number;
  endMs: number;
  rest: boolean;
}

// How far before a slot boundary a note press is considered "early for the next slot"
// rather than "late for the current slot". This fixes the issue where hitting a note
// slightly before the beat counts against the current slot instead of the next one.
const EARLY_WINDOW_MS = 150;

const MIC_DETECTION_LATENCY_MS = 90;
const MIC_HOLD_TOLERANCE_MS = 180;

function durationToBeats(dur: string): number {
  switch (dur) {
    case 'w': return 4;
    case 'h': return 2;
    case 'q': return 1;
    case '8': return 0.5;
    case '16': return 0.25;
    case 'hd': return 3;
    case 'qd': return 1.5;
    default: return 1;
  }
}

function beatsToMs(beats: number, bpm: number): number {
  return (beats * 60000) / bpm;
}

export class ExerciseRunner {
  private exercise: ExerciseStep;
  private bpm: number;
  private callbacks: ExerciseCallback;

  private schedule: Slot[] = [];
  private totalMs: number = 0;

  private cursor: number = -1;
  private active: boolean = false;
  private startTime: number = 0;
  private rafId: number = 0;
  private unsubscribe: (() => void) | null = null;

  private slotAttempt: { startMs: number; releaseMs: number; note: string; source: 'mic' | 'click' } | null = null;
  // Buffer for notes that arrive early (before the next slot starts)
  private earlyAttempt: { note: string; source: 'mic' | 'click'; physicalTime: number } | null = null;
  private wrongCount: number = 0;
  private wrongNotesThisSlot: Set<string> = new Set();
  private playedNotes: PlayedNote[] = [];

  private heldNote: string | null = null;
  private lastDetectedNote: string = '';
  private lastDetectedTime: number = 0;
  private prevSlotNote: string | null = null;

  constructor(exercise: ExerciseStep, callbacks: ExerciseCallback, bpm: number) {
    this.exercise = exercise;
    this.callbacks = callbacks;
    this.bpm = bpm;
    this.buildSchedule();
  }

  setBpm(bpm: number): void {
    this.bpm = bpm;
    this.buildSchedule();
  }

  private buildSchedule(): void {
    this.schedule = [];
    let beatPos = 0;
    for (const n of this.exercise.notes) {
      const beats = durationToBeats(n.duration);
      const startMs = beatsToMs(beatPos, this.bpm);
      const endMs = beatsToMs(beatPos + beats, this.bpm);
      this.schedule.push({
        expectedNotes: n.keys.map(k => vexKeyToNoteName(k)),
        startMs,
        endMs,
        rest: !!n.rest,
      });
      beatPos += beats;
    }
    this.totalMs = beatsToMs(beatPos, this.bpm);
  }

  async start(): Promise<void> {
    this.cursor = -1;
    this.wrongCount = 0;
    this.wrongNotesThisSlot.clear();
    this.playedNotes = [];
    this.slotAttempt = null;
    this.earlyAttempt = null;
    this.heldNote = null;
    this.prevSlotNote = null;
    this.active = true;
    this.startTime = performance.now();

    if (!pitchDetector.isListening()) {
      await pitchDetector.startListening();
    }
    this.unsubscribe = pitchDetector.onPitch(this.handlePitch);

    this.rafId = requestAnimationFrame(this.tick);
  }

  stop(): void {
    this.active = false;
    if (this.rafId) cancelAnimationFrame(this.rafId);
    this.rafId = 0;
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = null;
    }
  }

  reset(): void {
    this.stop();
    this.cursor = -1;
    this.wrongCount = 0;
    this.playedNotes = [];
    this.slotAttempt = null;
    this.earlyAttempt = null;
  }

  getCursor(): number {
    return this.cursor;
  }

  getPlayedNotes(): PlayedNote[] {
    return this.playedNotes;
  }

  noteOn(note: string): void {
    if (!this.active) return;
    this.heldNote = note;
    this.tryRecordAttempt(note, 'click', performance.now());
    this.callbacks.onNoteDetected(note);
  }

  noteOff(note: string): void {
    if (this.heldNote === note) {
      this.heldNote = null;
    }
  }

  private handlePitch = (event: PitchEvent): void => {
    if (!this.active) return;

    this.lastDetectedNote = event.note;
    this.lastDetectedTime = performance.now();
    this.callbacks.onNoteDetected(event.note);

    this.tryRecordAttempt(event.note, 'mic', performance.now() - MIC_DETECTION_LATENCY_MS);
  };

  private tryRecordAttempt(note: string, source: 'mic' | 'click', physicalTime: number): void {
    if (this.cursor < 0 || this.cursor >= this.schedule.length) return;
    const slot = this.schedule[this.cursor];
    if (slot.rest) return;

    const elapsed = physicalTime - this.startTime;
    const isCorrect = slot.expectedNotes.some(en => notesEqual(en, note));

    // Check if this note is actually early for the NEXT slot.
    // If we're near the end of the current slot and the note matches the next slot
    // (and doesn't match the current), buffer it for the next slot.
    const nextSlotIndex = this.cursor + 1;
    if (!isCorrect && nextSlotIndex < this.schedule.length) {
      const nextSlot = this.schedule[nextSlotIndex];
      const timeUntilNextSlot = nextSlot.startMs - elapsed;
      const matchesNext = !nextSlot.rest && nextSlot.expectedNotes.some(en => notesEqual(en, note));

      if (matchesNext && timeUntilNextSlot <= EARLY_WINDOW_MS && timeUntilNextSlot > 0) {
        // This note is early for the next slot — buffer it instead of counting as wrong
        this.earlyAttempt = { note, source, physicalTime };
        return;
      }
    }

    if (isCorrect) {
      // If user already played the right note for this slot, ignore repeated detections
      if (!this.slotAttempt) {
        const elapsedAtPress = physicalTime - this.startTime;
        this.slotAttempt = {
          startMs: elapsedAtPress,
          releaseMs: elapsedAtPress,
          note,
          source,
        };
        this.callbacks.onNoteCorrect(this.cursor, note);
      }
    } else {
      // Don't count wrong notes after the slot already has a correct attempt
      if (this.slotAttempt) return;
      // Suppress resonance from the previous slot's note
      if (source === 'mic' && this.prevSlotNote && notesEqual(note, this.prevSlotNote)) {
        return;
      }
      // Only count each unique wrong note once per slot
      const key = note.toUpperCase();
      if (this.wrongNotesThisSlot.has(key)) return;
      this.wrongNotesThisSlot.add(key);
      this.wrongCount++;
      this.callbacks.onNoteWrong(slot.expectedNotes[0] || '', note);
    }
  }

  private tick = (): void => {
    if (!this.active) return;

    const now = performance.now();
    const elapsed = now - this.startTime;

    // Determine which slot the timeline is currently in.
    let newCursor = -1;
    for (let i = 0; i < this.schedule.length; i++) {
      if (elapsed >= this.schedule[i].startMs) newCursor = i;
      else break;
    }

    // Update slotAttempt's release time while the note is still sounding.
    if (this.slotAttempt) {
      const heldByClick = this.heldNote !== null && notesEqual(this.heldNote, this.slotAttempt.note);
      const heldByMic = (now - this.lastDetectedTime) < MIC_HOLD_TOLERANCE_MS &&
        notesEqual(this.lastDetectedNote, this.slotAttempt.note);

      if (heldByClick) {
        this.slotAttempt.releaseMs = now - this.startTime;
      } else if (heldByMic) {
        this.slotAttempt.releaseMs = this.lastDetectedTime - this.startTime;
      }
    }

    // Advance the cursor in real time. Each crossing finalizes the slot we're leaving.
    while (this.cursor < newCursor) {
      if (this.cursor >= 0) {
        this.finalizeSlot(this.cursor);
      }
      this.cursor++;
      this.wrongNotesThisSlot.clear();
      const slot = this.schedule[this.cursor];
      if (slot) {
        this.callbacks.onCursorAdvance(this.cursor, slot.rest ? null : slot.expectedNotes[0] || null);
      }

      // Check if we have a buffered early attempt that matches this new slot
      if (this.earlyAttempt && this.cursor < this.schedule.length) {
        const currentSlot = this.schedule[this.cursor];
        if (!currentSlot.rest && currentSlot.expectedNotes.some(en => notesEqual(en, this.earlyAttempt!.note))) {
          const elapsedAtPress = this.earlyAttempt.physicalTime - this.startTime;
          this.slotAttempt = {
            startMs: elapsedAtPress,
            releaseMs: elapsedAtPress,
            note: this.earlyAttempt.note,
            source: this.earlyAttempt.source,
          };
          this.callbacks.onNoteCorrect(this.cursor, this.earlyAttempt.note);
        }
        this.earlyAttempt = null;
      }
    }

    // Slot progress (0..1 through the current slot)
    if (this.cursor >= 0 && this.cursor < this.schedule.length) {
      const slot = this.schedule[this.cursor];
      const slotDuration = slot.endMs - slot.startMs;
      const progress = slotDuration > 0
        ? Math.min(Math.max((elapsed - slot.startMs) / slotDuration, 0), 1)
        : 1;
      this.callbacks.onSlotProgress(this.cursor, progress);
    }

    // End of exercise.
    if (elapsed >= this.totalMs) {
      if (this.cursor >= 0 && this.cursor < this.schedule.length) {
        this.finalizeSlot(this.cursor);
      }
      this.complete();
      return;
    }

    this.rafId = requestAnimationFrame(this.tick);
  };

  private finalizeSlot(index: number): void {
    const slot = this.schedule[index];
    if (!slot) return;

    if (slot.rest) {
      this.slotAttempt = null;
      this.prevSlotNote = null;
      return;
    }

    if (this.slotAttempt) {
      const startMs = this.slotAttempt.startMs;
      const durationMs = Math.max(this.slotAttempt.releaseMs - this.slotAttempt.startMs, 30);
      const played: PlayedNote = {
        note: this.slotAttempt.note,
        expectedNote: slot.expectedNotes[0] || '',
        expectedIndex: index,
        startMs,
        durationMs,
        expectedStartMs: slot.startMs,
        expectedDurationMs: slot.endMs - slot.startMs,
        source: this.slotAttempt.source,
      };
      this.playedNotes.push(played);
      this.callbacks.onPlayedNote(played);
      this.prevSlotNote = this.slotAttempt.note;
    } else {
      this.callbacks.onMissed(index, slot.expectedNotes[0] || '');
      this.prevSlotNote = null;
    }

    this.slotAttempt = null;
  }

  private complete(): void {
    this.active = false;
    if (this.rafId) cancelAnimationFrame(this.rafId);
    this.rafId = 0;
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = null;
    }

    const totalNotes = this.exercise.notes.filter(n => !n.rest).length;
    const score = calculateScore(totalNotes, this.playedNotes, this.wrongCount);
    this.callbacks.onComplete(score, this.playedNotes);
  }
}
