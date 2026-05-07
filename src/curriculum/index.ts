import type { Module } from '../types';

// Lazy-load modules to keep initial bundle small
const moduleLoaders: Record<number, () => Promise<{ default: Module }>> = {
  1: () => import('./module-01-getting-started'),
  2: () => import('./module-02-first-notes'),
  3: () => import('./module-03-five-finger'),
  4: () => import('./module-04-reading-music'),
  5: () => import('./module-05-expanding'),
  6: () => import('./module-06-scales-keys'),
  7: () => import('./module-07-chords-harmony'),
  8: () => import('./module-08-musicianship'),
  9: () => import('./module-09-fluency'),
  10: () => import('./module-10-early-intermediate'),
};

// Module metadata for the home screen (no need to load full curriculum)
export const MODULE_META: { id: number; title: string; description: string; lessonCount: number }[] = [
  { id: 1, title: 'Getting Started', description: 'Keyboard layout, posture, hand position, and finger numbering', lessonCount: 5 },
  { id: 2, title: 'First Notes', description: 'Middle C, your first melodies, and basic rhythm', lessonCount: 7 },
  { id: 3, title: 'Five-Finger Position', description: 'C position, 4/4 time, rests, and hands together', lessonCount: 8 },
  { id: 4, title: 'Reading Music', description: 'Treble and bass clefs, the grand staff, and sight-reading', lessonCount: 10 },
  { id: 5, title: 'Expanding the Keyboard', description: 'G position, sharps, flats, eighth notes, and dynamics', lessonCount: 10 },
  { id: 6, title: 'Scales & Keys', description: 'Major scales, key signatures, and thumb-under technique', lessonCount: 10 },
  { id: 7, title: 'Chords & Harmony', description: 'Triads, I-IV-V progressions, and accompaniment patterns', lessonCount: 10 },
  { id: 8, title: 'Musicianship', description: 'Dotted notes, dynamics, tempo, phrasing, and minor keys', lessonCount: 10 },
  { id: 9, title: 'Building Fluency', description: 'Advanced scales, inversions, complex rhythms, and sight-reading', lessonCount: 10 },
  { id: 10, title: 'Early Intermediate', description: 'Minor scales, arpeggios, pedal technique, and classical pieces', lessonCount: 20 },
];

const moduleCache: Map<number, Module> = new Map();

export async function loadModule(id: number): Promise<Module | null> {
  if (moduleCache.has(id)) return moduleCache.get(id)!;
  const loader = moduleLoaders[id];
  if (!loader) return null;
  try {
    const mod = await loader();
    moduleCache.set(id, mod.default);
    return mod.default;
  } catch {
    return null;
  }
}

export function getTotalLessonCount(): number {
  return MODULE_META.reduce((sum, m) => sum + m.lessonCount, 0);
}
