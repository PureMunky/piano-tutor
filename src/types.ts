// ── Module & Lesson Types ──

export interface Module {
  id: number;
  title: string;
  description: string;
  lessons: Lesson[];
}

export interface Lesson {
  id: string; // e.g. "1.3" (module.lesson)
  title: string;
  steps: LessonStep[];
}

export type LessonStep = InstructionStep | DemoStep | ExerciseStep;

export interface InstructionStep {
  type: 'instruction';
  title: string;
  content: string; // HTML string
  diagram?: 'keyboard-highlight' | 'hand-position' | 'staff-demo';
  diagramData?: Record<string, unknown>;
}

export interface DemoStep {
  type: 'demo';
  title: string;
  description: string;
  notes: NoteEvent[];
  bpm: number;
  timeSignature: [number, number];
  clef?: 'treble' | 'bass' | 'grand';
}

export interface ExerciseStep {
  type: 'exercise';
  title: string;
  instructions: string;
  notes: NoteEvent[];
  clef: 'treble' | 'bass' | 'grand';
  bpm: number;
  timeSignature: [number, number];
  fingerNumbers?: Record<string, number>; // "C4" → 1
  handsRequired: 'right' | 'left' | 'both';
  requireTiming: boolean;
  toleranceMs?: number; // default 500
}

export interface NoteEvent {
  keys: string[];     // VexFlow format: ["c/4", "e/4"]
  duration: string;   // VexFlow duration: "q", "h", "w", "8"
  finger?: number[];  // finger numbers parallel to keys
  rest?: boolean;
}

// ── Progress & Settings ──

export interface UserProgress {
  currentModuleId: number;
  currentLessonId: string;
  lessons: Record<string, LessonProgress>;
}

export interface LessonProgress {
  completed: boolean;
  exerciseScores: Record<number, ExerciseScore>; // step index → score
  lastAttempted: number; // timestamp
}

export interface ExerciseScore {
  bestAccuracy: number; // 0-100
  attempts: number;
  passed: boolean; // accuracy >= 80
}

export interface UserSettings {
  metronomeBpm: number;
  metronomeEnabled: boolean;
  audioPlaybackEnabled: boolean;
  micSensitivity: number; // clarity threshold 0.8-0.95
  showFingerNumbers: boolean;
  keyboardSize: 'compact' | 'full';
  tuningOffsetCents: number; // how many cents sharp (+) or flat (-) the piano is from A440
}
