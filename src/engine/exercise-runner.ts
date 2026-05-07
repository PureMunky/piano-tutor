import type { ExerciseStep, ExerciseScore } from '../types';
import { pitchDetector, type PitchEvent } from '../core/pitch-detector';
import { vexKeyToNoteName, notesEqual } from '../core/note-utils';
import { calculateScore } from './scoring';

export type ExerciseCallback = {
  onNoteCorrect: (index: number, note: string) => void;
  onNoteWrong: (expectedNote: string, playedNote: string) => void;
  onComplete: (score: ExerciseScore) => void;
  onNoteDetected: (note: string) => void;
  onHoldProgress: (index: number, progress: number) => void; // 0-1 progress through hold
  onNoteAdvance: (index: number) => void; // note fully held, moving to next
};

function durationToBeats(dur: string): number {
  switch (dur) {
    case 'w': return 4;
    case 'h': return 2;
    case 'q': return 1;
    case '8': return 0.5;
    case '16': return 0.25;
    // dotted variants
    case 'hd': return 3;
    case 'qd': return 1.5;
    default: return 1;
  }
}

function beatsToMs(beats: number, bpm: number): number {
  // One beat = 60000 / bpm milliseconds
  return (beats * 60000) / bpm;
}

export class ExerciseRunner {
  private exercise: ExerciseStep;
  private bpm: number;
  private cursor: number = 0;
  private correctCount: number = 0;
  private wrongCount: number = 0;
  private callbacks: ExerciseCallback;
  private unsubscribe: (() => void) | null = null;
  private active: boolean = false;

  // Hold tracking: once the right note is detected, we require it to be
  // held (i.e. continuously detected) for the note's full duration.
  private holdingCorrectNote: boolean = false;
  private holdStartTime: number = 0;
  private holdDurationMs: number = 0;
  private holdTimerId: number = 0;
  private holdCheckId: number = 0;
  private lastDetectedNote: string = '';
  private lastDetectedTime: number = 0;

  constructor(exercise: ExerciseStep, callbacks: ExerciseCallback, bpm: number) {
    this.exercise = exercise;
    this.callbacks = callbacks;
    this.bpm = bpm;
  }

  setBpm(bpm: number): void {
    this.bpm = bpm;
  }

  async start(): Promise<void> {
    this.cursor = 0;
    this.correctCount = 0;
    this.wrongCount = 0;
    this.active = true;
    this.holdingCorrectNote = false;

    // Skip leading rests
    this.skipRests();

    if (!pitchDetector.isListening()) {
      await pitchDetector.startListening();
    }

    this.unsubscribe = pitchDetector.onPitch(this.handlePitch);
  }

  stop(): void {
    this.active = false;
    this.cancelHold();
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = null;
    }
  }

  reset(): void {
    this.stop();
    this.cursor = 0;
    this.correctCount = 0;
    this.wrongCount = 0;
    this.holdingCorrectNote = false;
  }

  getCursor(): number {
    return this.cursor;
  }

  private skipRests(): void {
    while (this.cursor < this.exercise.notes.length && this.exercise.notes[this.cursor].rest) {
      this.cursor++;
    }
  }

  private cancelHold(): void {
    if (this.holdTimerId) {
      clearTimeout(this.holdTimerId);
      this.holdTimerId = 0;
    }
    if (this.holdCheckId) {
      cancelAnimationFrame(this.holdCheckId);
      this.holdCheckId = 0;
    }
    this.holdingCorrectNote = false;
  }

  private handlePitch = (event: PitchEvent): void => {
    if (!this.active) return;
    if (this.cursor >= this.exercise.notes.length) return;

    this.lastDetectedNote = event.note;
    this.lastDetectedTime = performance.now();

    this.callbacks.onNoteDetected(event.note);

    // If we're already holding the correct note, the hold-check loop handles progress.
    // A wrong note during a hold will cancel it (handled in the hold check).
    if (this.holdingCorrectNote) return;

    const expected = this.exercise.notes[this.cursor];
    const expectedNotes = expected.keys.map(k => vexKeyToNoteName(k));

    const isCorrect = expectedNotes.some(en => notesEqual(en, event.note));

    if (isCorrect) {
      // Start the hold period
      const beats = durationToBeats(expected.duration);
      this.holdDurationMs = beatsToMs(beats, this.bpm);

      // Minimum hold of 200ms even for very fast tempos, so it doesn't feel instant
      this.holdDurationMs = Math.max(this.holdDurationMs, 200);

      this.holdingCorrectNote = true;
      this.holdStartTime = performance.now();

      // Notify that the correct note was initially detected
      this.callbacks.onNoteCorrect(this.cursor, event.note);

      // Start hold progress reporting and completion timer
      this.startHoldCheck(expectedNotes);
    } else {
      this.wrongCount++;
      this.callbacks.onNoteWrong(expectedNotes[0], event.note);
    }
  };

  private startHoldCheck(expectedNotes: string[]): void {
    const checkHold = (): void => {
      if (!this.active || !this.holdingCorrectNote) return;

      const now = performance.now();
      const elapsed = now - this.holdStartTime;
      const progress = Math.min(elapsed / this.holdDurationMs, 1);

      // Check if the note is still being detected (within a tolerance window).
      // Piano notes ring out, so we allow a gap of up to 300ms without detection
      // before considering the note "dropped".
      const timeSinceLastDetection = now - this.lastDetectedTime;
      const stillHolding = timeSinceLastDetection < 300 &&
        expectedNotes.some(en => notesEqual(en, this.lastDetectedNote));

      if (!stillHolding && elapsed < this.holdDurationMs) {
        // Note was released or changed before the full duration — cancel hold
        this.cancelHold();
        // Don't count as wrong, just reset — they need to play it again
        this.callbacks.onHoldProgress(this.cursor, 0);
        return;
      }

      this.callbacks.onHoldProgress(this.cursor, progress);

      if (elapsed >= this.holdDurationMs) {
        // Note held for full duration — advance!
        this.holdingCorrectNote = false;
        this.correctCount++;
        this.callbacks.onNoteAdvance(this.cursor);
        this.cursor++;
        this.skipRests();

        // Check if exercise is complete
        if (this.cursor >= this.exercise.notes.length) {
          this.active = false;
          const score = calculateScore(
            this.exercise.notes.filter(n => !n.rest).length,
            this.correctCount,
            this.wrongCount
          );
          this.callbacks.onComplete(score);
        }
        return;
      }

      // Keep checking
      this.holdCheckId = requestAnimationFrame(checkHold);
    };

    this.holdCheckId = requestAnimationFrame(checkHold);
  }
}
