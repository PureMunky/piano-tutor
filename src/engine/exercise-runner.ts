import type { ExerciseStep, ExerciseScore } from '../types';
import { pitchDetector, type PitchEvent } from '../core/pitch-detector';
import { vexKeyToNoteName, notesEqual } from '../core/note-utils';
import { calculateScore } from './scoring';

export type ExerciseCallback = {
  onNoteCorrect: (index: number, note: string) => void;
  onNoteWrong: (expectedNote: string, playedNote: string) => void;
  onComplete: (score: ExerciseScore) => void;
  onNoteDetected: (note: string) => void;
};

export class ExerciseRunner {
  private exercise: ExerciseStep;
  private cursor: number = 0;
  private correctCount: number = 0;
  private wrongCount: number = 0;
  private callbacks: ExerciseCallback;
  private unsubscribe: (() => void) | null = null;
  private active: boolean = false;

  constructor(exercise: ExerciseStep, callbacks: ExerciseCallback) {
    this.exercise = exercise;
    this.callbacks = callbacks;
  }

  async start(): Promise<void> {
    this.cursor = 0;
    this.correctCount = 0;
    this.wrongCount = 0;
    this.active = true;

    if (!pitchDetector.isListening()) {
      await pitchDetector.startListening();
    }

    this.unsubscribe = pitchDetector.onPitch(this.handlePitch);
  }

  stop(): void {
    this.active = false;
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
  }

  getCursor(): number {
    return this.cursor;
  }

  private handlePitch = (event: PitchEvent): void => {
    if (!this.active) return;

    this.callbacks.onNoteDetected(event.note);

    // Skip rest notes in the sequence
    while (this.cursor < this.exercise.notes.length && this.exercise.notes[this.cursor].rest) {
      this.cursor++;
    }

    if (this.cursor >= this.exercise.notes.length) return;

    const expected = this.exercise.notes[this.cursor];
    const expectedNotes = expected.keys.map(k => vexKeyToNoteName(k));

    // Check if the played note matches any expected note
    const isCorrect = expectedNotes.some(en => notesEqual(en, event.note));

    if (isCorrect) {
      this.correctCount++;
      this.callbacks.onNoteCorrect(this.cursor, event.note);
      this.cursor++;

      // Skip any subsequent rests
      while (this.cursor < this.exercise.notes.length && this.exercise.notes[this.cursor].rest) {
        this.cursor++;
      }

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
    } else {
      this.wrongCount++;
      this.callbacks.onNoteWrong(expectedNotes[0], event.note);
    }
  };
}
