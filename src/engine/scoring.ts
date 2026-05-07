import type { ExerciseScore } from '../types';
import type { PlayedNote } from './exercise-runner';

export const PASS_THRESHOLD = 80;

const TIMING_TOL_MS = 80;
const DURATION_TOL_MS = 150;

const ON_TIME_CREDIT = 1.0;
const OFF_BEAT_CREDIT = 0.6;
const WRONG_PENALTY_PER_NOTE = 0.15; // each unique wrong note costs 15% of one note's worth

export function calculateScore(
  totalNotes: number,
  played: PlayedNote[],
  wrongUniqueAttempts: number
): ExerciseScore {
  if (totalNotes <= 0) {
    return { bestAccuracy: 0, attempts: 1, passed: false };
  }

  let credit = 0;
  for (const p of played) {
    const startOff = Math.abs(p.startMs - p.expectedStartMs);
    const durOff = Math.abs(p.durationMs - p.expectedDurationMs);
    const onTime = startOff <= TIMING_TOL_MS && durOff <= DURATION_TOL_MS;
    credit += onTime ? ON_TIME_CREDIT : OFF_BEAT_CREDIT;
  }

  const penalty = Math.min(wrongUniqueAttempts * WRONG_PENALTY_PER_NOTE, totalNotes * 0.3);
  const accuracy = Math.max(0, Math.round(((credit - penalty) / totalNotes) * 100));

  return {
    bestAccuracy: accuracy,
    attempts: 1,
    passed: accuracy >= PASS_THRESHOLD,
  };
}
