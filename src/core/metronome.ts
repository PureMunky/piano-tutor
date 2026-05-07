import * as Tone from 'tone';

let metronomeLoop: Tone.Loop | null = null;
let clickSynth: Tone.Synth | null = null;
let accentSynth: Tone.Synth | null = null;
let running = false;
let beatCount = 0;
let beatsPerMeasure = 4;

function ensureSynths(): void {
  if (!clickSynth) {
    clickSynth = new Tone.Synth({
      oscillator: { type: 'triangle' },
      envelope: { attack: 0.001, decay: 0.1, sustain: 0, release: 0.05 },
      volume: -10,
    }).toDestination();
  }
  if (!accentSynth) {
    accentSynth = new Tone.Synth({
      oscillator: { type: 'triangle' },
      envelope: { attack: 0.001, decay: 0.1, sustain: 0, release: 0.05 },
      volume: -6,
    }).toDestination();
  }
}

export function setBpm(bpm: number): void {
  Tone.getTransport().bpm.value = bpm;
}

export function setTimeSignature(beats: number): void {
  beatsPerMeasure = beats;
}

export function startMetronome(bpm?: number): void {
  if (running) return;
  ensureSynths();

  if (bpm) setBpm(bpm);
  beatCount = 0;

  metronomeLoop = new Tone.Loop((time) => {
    if (beatCount % beatsPerMeasure === 0) {
      accentSynth!.triggerAttackRelease('C6', '32n', time);
    } else {
      clickSynth!.triggerAttackRelease('G5', '32n', time);
    }
    beatCount++;
  }, '4n');

  metronomeLoop.start(0);
  Tone.getTransport().start();
  running = true;
}

export function stopMetronome(): void {
  if (!running) return;
  metronomeLoop?.stop();
  metronomeLoop?.dispose();
  metronomeLoop = null;
  Tone.getTransport().stop();
  Tone.getTransport().cancel();
  running = false;
  beatCount = 0;
}

export function toggleMetronome(bpm?: number): void {
  if (running) {
    stopMetronome();
  } else {
    startMetronome(bpm);
  }
}

export function isRunning(): boolean {
  return running;
}
