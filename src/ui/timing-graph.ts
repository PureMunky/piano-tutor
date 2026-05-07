import type { NoteEvent } from '../types';
import type { PlayedNote } from '../engine/exercise-runner';
import { vexKeyToNoteName } from '../core/note-utils';

function durationToBeats(dur: string): number {
  switch (dur) {
    case 'w': return 4;
    case 'h': return 2;
    case 'q': return 1;
    case '8': return 0.5;
    case '16': return 0.25;
    case 'hd': return 3;
    case 'qd': return 1.5;
    default: return 1;
  }
}

const ON_TIME_MS = 80;     // start within ±80ms is "on time"
const DURATION_TOL_MS = 150;  // duration within ±150ms is "good"

export class TimingGraph {
  private container: HTMLElement;
  private notes: NoteEvent[] = [];
  private bpm: number = 60;
  private beatsPerMeasure: number = 4;
  private playedNotes: PlayedNote[] = [];
  private missedIndices: Set<number> = new Set();
  private playheadMs: number = 0;
  private playing: boolean = false;
  private rafId: number = 0;
  private startTime: number = 0;

  constructor(container: HTMLElement) {
    this.container = container;
    this.container.classList.add('timing-graph');
  }

  setExercise(notes: NoteEvent[], bpm: number, beatsPerMeasure: number = 4): void {
    this.notes = notes;
    this.bpm = bpm;
    this.beatsPerMeasure = beatsPerMeasure;
    this.playedNotes = [];
    this.missedIndices = new Set();
    this.playheadMs = 0;
    this.render();
  }

  startPlayhead(): void {
    this.stopPlayhead();
    this.playing = true;
    this.startTime = performance.now();
    this.tick();
  }

  stopPlayhead(): void {
    this.playing = false;
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
      this.rafId = 0;
    }
  }

  addPlayedNote(p: PlayedNote): void {
    this.playedNotes.push(p);
    this.render();
  }

  addMissed(index: number): void {
    this.missedIndices.add(index);
    this.render();
  }

  setPlayedNotes(notes: PlayedNote[]): void {
    this.playedNotes = [...notes];
    this.render();
  }

  destroy(): void {
    this.stopPlayhead();
    this.container.innerHTML = '';
  }

  private tick = (): void => {
    if (!this.playing) return;
    this.playheadMs = performance.now() - this.startTime;
    this.updatePlayhead();
    this.rafId = requestAnimationFrame(this.tick);
  };

  private getTotals() {
    const totalBeats = this.notes.reduce((s, n) => s + durationToBeats(n.duration), 0);
    const totalMs = (totalBeats * 60000) / this.bpm;
    return { totalBeats, totalMs };
  }

  private updatePlayhead(): void {
    const head = this.container.querySelector('.timing-playhead') as HTMLElement | null;
    if (!head) return;
    const { totalMs } = this.getTotals();
    if (totalMs <= 0) return;
    const pct = Math.min(this.playheadMs / totalMs, 1) * 100;
    head.style.left = `${pct}%`;
    head.style.display = this.playheadMs > 0 && this.playheadMs <= totalMs ? '' : 'none';
  }

  private render(): void {
    if (this.notes.length === 0) {
      this.container.innerHTML = '';
      return;
    }

    const { totalBeats, totalMs } = this.getTotals();

    // Build ideal segments
    type Seg = { startMs: number; durationMs: number; rest: boolean; label: string };
    const ideal: Seg[] = [];
    let beatPos = 0;
    for (const n of this.notes) {
      const beats = durationToBeats(n.duration);
      const startMs = (beatPos * 60000) / this.bpm;
      const durationMs = (beats * 60000) / this.bpm;
      ideal.push({
        startMs,
        durationMs,
        rest: !!n.rest,
        label: n.rest ? '' : vexKeyToNoteName(n.keys[0] || ''),
      });
      beatPos += beats;
    }

    const pctStart = (ms: number) => (ms / totalMs) * 100;
    const pctWidth = (ms: number) => Math.max((ms / totalMs) * 100, 0.5);

    // Beat ticks
    const beatTicks: string[] = [];
    for (let beat = 0; beat <= totalBeats; beat++) {
      const left = pctStart((beat * 60000) / this.bpm);
      const isMeasure = beat % this.beatsPerMeasure === 0;
      beatTicks.push(
        `<div class="beat-tick ${isMeasure ? 'measure' : ''}" style="left:${left}%"></div>`
      );
      if (isMeasure) {
        beatTicks.push(
          `<div class="beat-label" style="left:${left}%">${Math.floor(beat / this.beatsPerMeasure) + 1}</div>`
        );
      }
    }

    // Ideal bars
    const idealBars = ideal.map(seg => {
      if (seg.rest) {
        return `<div class="bar rest" style="left:${pctStart(seg.startMs)}%;width:${pctWidth(seg.durationMs)}%"></div>`;
      }
      return `<div class="bar ideal" style="left:${pctStart(seg.startMs)}%;width:${pctWidth(seg.durationMs)}%">
                <span class="bar-label">${seg.label}</span>
              </div>`;
    }).join('');

    // Missed slots — only those the runner has explicitly reported as missed.
    const missedBars = ideal.map((seg, idx) => {
      if (seg.rest || !this.missedIndices.has(idx)) return '';
      return `<div class="bar missed" style="left:${pctStart(seg.startMs)}%;width:${pctWidth(seg.durationMs)}%">
                <span class="bar-label">miss</span>
              </div>`;
    }).join('');

    // Played bars + drift indicator
    const playedBars = this.playedNotes.map(p => {
      const startDiff = p.startMs - p.expectedStartMs;
      const durDiff = p.durationMs - p.expectedDurationMs;
      const startOff = Math.abs(startDiff) > ON_TIME_MS;
      const durOff = Math.abs(durDiff) > DURATION_TOL_MS;

      let cls = 'good';
      if (startOff || durOff) cls = 'off';

      const startMs = Math.max(0, p.startMs);
      const durationMs = Math.max(p.durationMs, 30);

      const drift = startDiff > 0 ? `+${Math.round(startDiff)}ms` : `${Math.round(startDiff)}ms`;
      return `<div class="bar played ${cls}" style="left:${pctStart(startMs)}%;width:${pctWidth(durationMs)}%"
                title="Started ${drift} from beat • held ${Math.round(p.durationMs)}ms (ideal ${Math.round(p.expectedDurationMs)}ms)">
                <span class="bar-label">${p.note}</span>
              </div>`;
    }).join('');

    this.container.innerHTML = `
      <div class="timing-graph-title">
        <span>Timing</span>
        <span class="timing-graph-legend">
          <span><i class="swatch ideal"></i>Ideal</span>
          <span><i class="swatch good"></i>On time</span>
          <span><i class="swatch off"></i>Off-beat</span>
          <span><i class="swatch missed"></i>Missed</span>
        </span>
      </div>
      <div class="timing-tracks">
        <div class="timing-track-label">Ideal</div>
        <div class="timing-track ideal-track">
          ${beatTicks.join('')}
          ${idealBars}
        </div>
        <div class="timing-track-label">You</div>
        <div class="timing-track played-track">
          ${beatTicks.join('')}
          ${missedBars}
          ${playedBars}
          <div class="timing-playhead" style="display:none"></div>
        </div>
      </div>
    `;

    if (this.playing) this.updatePlayhead();
  }
}
