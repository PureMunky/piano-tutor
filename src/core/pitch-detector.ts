import { PitchDetector as Pitchy } from 'pitchy';
import { frequencyToMidi, midiToNoteName } from './note-utils';

export interface PitchEvent {
  note: string;       // e.g. "C4"
  midi: number;
  frequency: number;
  clarity: number;
}

type PitchCallback = (event: PitchEvent) => void;

export class PitchDetector {
  private audioContext: AudioContext | null = null;
  private analyser: AnalyserNode | null = null;
  private stream: MediaStream | null = null;
  private detector: Pitchy<Float32Array<ArrayBuffer>> | null = null;
  private buffer: Float32Array<ArrayBuffer> | null = null;
  private rafId: number = 0;
  private listening: boolean = false;
  private clarityThreshold: number = 0.9;
  private callbacks: Set<PitchCallback> = new Set();
  private lastNote: string = '';
  private lastNoteTime: number = 0;
  private debounceMs: number = 50;

  setClarityThreshold(threshold: number): void {
    this.clarityThreshold = threshold;
  }

  onPitch(callback: PitchCallback): () => void {
    this.callbacks.add(callback);
    return () => this.callbacks.delete(callback);
  }

  async startListening(): Promise<void> {
    if (this.listening) return;

    try {
      this.stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: false,
          noiseSuppression: false,
          autoGainControl: false,
        },
      });

      this.audioContext = new AudioContext();
      const source = this.audioContext.createMediaStreamSource(this.stream);

      this.analyser = this.audioContext.createAnalyser();
      this.analyser.fftSize = 4096; // Better accuracy for piano
      source.connect(this.analyser);

      const bufferLength = this.analyser.fftSize;
      this.buffer = new Float32Array(bufferLength);
      this.detector = Pitchy.forFloat32Array(bufferLength);

      this.listening = true;
      this.detect();
    } catch (err) {
      console.error('Failed to access microphone:', err);
      throw err;
    }
  }

  stopListening(): void {
    this.listening = false;
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
      this.rafId = 0;
    }
    if (this.stream) {
      this.stream.getTracks().forEach(t => t.stop());
      this.stream = null;
    }
    if (this.audioContext) {
      this.audioContext.close();
      this.audioContext = null;
    }
    this.analyser = null;
    this.detector = null;
    this.buffer = null;
  }

  isListening(): boolean {
    return this.listening;
  }

  private detect = (): void => {
    if (!this.listening || !this.analyser || !this.buffer || !this.detector || !this.audioContext) return;

    (this.analyser.getFloatTimeDomainData as Function)(this.buffer);
    const [frequency, clarity] = this.detector.findPitch(this.buffer, this.audioContext.sampleRate);

    if (clarity >= this.clarityThreshold && frequency > 20 && frequency < 5000) {
      const midi = frequencyToMidi(frequency);
      const note = midiToNoteName(midi);
      const now = performance.now();

      // Debounce: don't fire same note rapidly
      if (note !== this.lastNote || now - this.lastNoteTime > this.debounceMs) {
        this.lastNote = note;
        this.lastNoteTime = now;

        const event: PitchEvent = { note, midi, frequency, clarity };
        this.callbacks.forEach(cb => cb(event));
      }
    }

    this.rafId = requestAnimationFrame(this.detect);
  };
}

// Singleton
export const pitchDetector = new PitchDetector();
