import type { ExerciseScore } from '../types';

export function calculateScore(
  totalNotes: number,
  correctNotes: number,
  wrongAttempts: number
): ExerciseScore {
  const accuracy = totalNotes > 0
    ? Math.round((correctNotes / (correctNotes + wrongAttempts)) * 100)
    : 0;

  return {
    bestAccuracy: accuracy,
    attempts: 1,
    passed: accuracy >= 80,
  };
}

export const PASS_THRESHOLD = 80;
