import * as Tone from 'tone';
import type { NoteEvent } from '../types';
import { vexKeyToNoteName } from './note-utils';

let sampler: Tone.Sampler | null = null;
let samplerReady = false;
let initPromise: Promise<void> | null = null;

const SALAMANDER_URL = 'https://tonejs.github.io/audio/salamander/';

async function ensureInit(): Promise<void> {
  if (samplerReady) return;
  if (initPromise) return initPromise;

  initPromise = new Promise<void>((resolve) => {
    sampler = new Tone.Sampler({
      urls: {
        A0: 'A0.mp3', C1: 'C1.mp3', 'D#1': 'Ds1.mp3', 'F#1': 'Fs1.mp3',
        A1: 'A1.mp3', C2: 'C2.mp3', 'D#2': 'Ds2.mp3', 'F#2': 'Fs2.mp3',
        A2: 'A2.mp3', C3: 'C3.mp3', 'D#3': 'Ds3.mp3', 'F#3': 'Fs3.mp3',
        A3: 'A3.mp3', C4: 'C4.mp3', 'D#4': 'Ds4.mp3', 'F#4': 'Fs4.mp3',
        A4: 'A4.mp3', C5: 'C5.mp3', 'D#5': 'Ds5.mp3', 'F#5': 'Fs5.mp3',
        A5: 'A5.mp3', C6: 'C6.mp3', 'D#6': 'Ds6.mp3', 'F#6': 'Fs6.mp3',
        A6: 'A6.mp3', C7: 'C7.mp3', 'D#7': 'Ds7.mp3',
        C8: 'C8.mp3',
      },
      baseUrl: SALAMANDER_URL,
      onload: () => {
        samplerReady = true;
        resolve();
      },
    }).toDestination();
  });

  return initPromise;
}

export async function startAudio(): Promise<void> {
  await Tone.start();
  await ensureInit();
}

export function playNote(note: string, duration: string = '4n'): void {
  if (!sampler || !samplerReady) return;
  sampler.triggerAttackRelease(note, duration);
}

export function triggerAttack(note: string): void {
  if (!sampler || !samplerReady) return;
  sampler.triggerAttack(note);
}

export function triggerRelease(note: string): void {
  if (!sampler || !samplerReady) return;
  sampler.triggerRelease(note);
}

export async function playSequence(
  notes: NoteEvent[],
  bpm: number,
  onNoteStart?: (index: number) => void
): Promise<void> {
  await startAudio();

  const transport = Tone.getTransport();
  transport.cancel();
  transport.bpm.value = bpm;
  transport.position = 0;

  const durationMap: Record<string, string> = {
    'w': '1n', 'h': '2n', 'q': '4n', '8': '8n', '16': '16n',
  };

  let time = 0;
  notes.forEach((noteEvent, index) => {
    if (noteEvent.rest) {
      // Just advance time for rests
    } else {
      const toneDuration = durationMap[noteEvent.duration] || '4n';
      for (const key of noteEvent.keys) {
        const noteName = vexKeyToNoteName(key);
        transport.schedule((t) => {
          sampler?.triggerAttackRelease(noteName, toneDuration, t);
          onNoteStart?.(index);
        }, `0:0:${time}`);
      }
    }

    // Advance time in quarter-note units
    const beats = durationToBeats(noteEvent.duration);
    time += beats * 4; // Convert to sixteenth notes for scheduling
  });

  const totalBeats = notes.reduce((sum, n) => sum + durationToBeats(n.duration), 0);

  return new Promise<void>((resolve) => {
    transport.schedule(() => {
      transport.stop();
      resolve();
    }, `0:0:${totalBeats * 4}`);

    transport.start();
  });
}

function durationToBeats(dur: string): number {
  switch (dur) {
    case 'w': return 4;
    case 'h': return 2;
    case 'q': return 1;
    case '8': return 0.5;
    case '16': return 0.25;
    default: return 1;
  }
}

export function stopPlayback(): void {
  Tone.getTransport().stop();
  Tone.getTransport().cancel();
}
