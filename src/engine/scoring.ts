import type { ExerciseScore } from '../types';
import type { PlayedNote } from './exercise-runner';

export const PASS_THRESHOLD = 80;

// How close to the beat start a note must be to count as "on time".
// 150ms is generous enough to account for mic latency + human reaction.
const TIMING_TOL_MS = 150;

// How close to the expected duration the held duration must be.
// 300ms allows for natural imprecision in release timing.
const DURATION_TOL_MS = 300;

const ON_TIME_CREDIT = 1.0;
const OFF_BEAT_CREDIT = 0.6;
const WRONG_PENALTY_PER_NOTE = 0.15;

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
