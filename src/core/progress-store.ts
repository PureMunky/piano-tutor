import type { UserProgress, LessonProgress, ExerciseScore } from '../types';

const STORAGE_KEY = 'PIANO_LEARN_PROGRESS';

function defaultProgress(): UserProgress {
  return {
    currentModuleId: 1,
    currentLessonId: '1.1',
    lessons: {},
  };
}

export function loadProgress(): UserProgress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultProgress();
    return { ...defaultProgress(), ...JSON.parse(raw) };
  } catch {
    return defaultProgress();
  }
}

export function saveProgress(progress: UserProgress): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

export function getLessonProgress(lessonId: string): LessonProgress | null {
  const progress = loadProgress();
  return progress.lessons[lessonId] || null;
}

export function isLessonCompleted(lessonId: string): boolean {
  const lp = getLessonProgress(lessonId);
  return lp?.completed ?? false;
}

export function markLessonComplete(lessonId: string): void {
  const progress = loadProgress();
  if (!progress.lessons[lessonId]) {
    progress.lessons[lessonId] = {
      completed: true,
      exerciseScores: {},
      lastAttempted: Date.now(),
    };
  } else {
    progress.lessons[lessonId].completed = true;
    progress.lessons[lessonId].lastAttempted = Date.now();
  }
  saveProgress(progress);
}

export function saveExerciseScore(
  lessonId: string,
  stepIndex: number,
  score: ExerciseScore
): void {
  const progress = loadProgress();
  if (!progress.lessons[lessonId]) {
    progress.lessons[lessonId] = {
      completed: false,
      exerciseScores: {},
      lastAttempted: Date.now(),
    };
  }
  const existing = progress.lessons[lessonId].exerciseScores[stepIndex];
  if (!existing || score.bestAccuracy > existing.bestAccuracy) {
    progress.lessons[lessonId].exerciseScores[stepIndex] = score;
  } else {
    existing.attempts += 1;
  }
  progress.lessons[lessonId].lastAttempted = Date.now();
  saveProgress(progress);
}

export function updateCurrentPosition(moduleId: number, lessonId: string): void {
  const progress = loadProgress();
  progress.currentModuleId = moduleId;
  progress.currentLessonId = lessonId;
  saveProgress(progress);
}

export function resetProgress(): void {
  localStorage.removeItem(STORAGE_KEY);
}

export function getModuleCompletionCount(moduleId: number, totalLessons: number): number {
  const progress = loadProgress();
  let count = 0;
  for (let i = 1; i <= totalLessons; i++) {
    const lessonId = `${moduleId}.${i}`;
    if (progress.lessons[lessonId]?.completed) count++;
  }
  return count;
}

export function isModuleCompleted(moduleId: number, totalLessons: number): boolean {
  return getModuleCompletionCount(moduleId, totalLessons) === totalLessons;
}
