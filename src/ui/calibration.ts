import { PitchDetector as Pitchy } from 'pitchy';
import { setTuningOffset } from '../core/note-utils';
import { loadSettings, saveSettings } from '../core/settings-store';

/**
 * Calibration tool: listens for the user playing A4 multiple times,
 * collects raw frequency readings, computes the average offset in cents
 * from 440 Hz, and saves it to settings.
 */
export class CalibrationTool {
  private container: HTMLElement;
  private audioContext: AudioContext | null = null;
  private analyser: AnalyserNode | null = null;
  private stream: MediaStream | null = null;
  private detector: Pitchy<Float32Array<ArrayBuffer>> | null = null;
  private buffer: Float32Array<ArrayBuffer> | null = null;
  private rafId: number = 0;
  private listening: boolean = false;

  private samples: number[] = []; // raw frequency samples near A4
  private readonly REQUIRED_SAMPLES = 10;

  private statusEl: HTMLElement | null = null;
  private progressEl: HTMLElement | null = null;
  private resultEl: HTMLElement | null = null;
  private startBtn: HTMLButtonElement | null = null;
  private resetBtn: HTMLButtonElement | null = null;

  constructor(container: HTMLElement) {
    this.container = container;
    this.render();
  }

  private render(): void {
    const settings = loadSettings();
    const currentOffset = settings.tuningOffsetCents;
    const currentHz = 440 * Math.pow(2, currentOffset / 1200);

    this.container.innerHTML = `
      <div class="settings-section">
        <h3>Piano Tuning Calibration</h3>
        <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 12px;">
          If your piano is slightly out of tune, calibrate here so the app can still
          recognize your notes correctly. Play <strong>A4</strong> (the A above Middle C)
          ${this.REQUIRED_SAMPLES} times and the app will measure your piano's tuning.
        </p>
        <div class="setting-row">
          <label>Current calibration</label>
          <span id="cal-current">${currentOffset === 0 ? 'Standard A440' : `${currentOffset > 0 ? '+' : ''}${currentOffset.toFixed(1)} cents (${currentHz.toFixed(1)} Hz)`}</span>
        </div>
        <div style="margin: 12px 0;">
          <button class="btn primary" id="cal-start">Start Calibration</button>
          <button class="btn" id="cal-reset" style="margin-left: 8px; ${currentOffset === 0 ? 'display:none' : ''}">Reset to A440</button>
        </div>
        <div id="cal-status" style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 8px;"></div>
        <div id="cal-progress" style="margin-top: 8px; display: none;">
          <div class="progress-bar">
            <div class="progress-bar-fill" id="cal-progress-fill" style="width: 0%"></div>
          </div>
          <div style="font-size: 0.8rem; color: var(--text-secondary); margin-top: 4px;" id="cal-progress-label">0/${this.REQUIRED_SAMPLES} samples</div>
        </div>
        <div id="cal-result" style="margin-top: 12px; display: none; padding: 12px; background: #f0fdf4; border: 1px solid var(--success); border-radius: var(--radius);"></div>
      </div>
    `;

    this.statusEl = this.container.querySelector('#cal-status');
    this.progressEl = this.container.querySelector('#cal-progress');
    this.resultEl = this.container.querySelector('#cal-result');
    this.startBtn = this.container.querySelector('#cal-start');
    this.resetBtn = this.container.querySelector('#cal-reset');

    this.startBtn?.addEventListener('click', () => this.startCalibration());
    this.resetBtn?.addEventListener('click', () => this.resetCalibration());
  }

  private async startCalibration(): Promise<void> {
    this.samples = [];
    this.updateProgress();

    if (this.startBtn) {
      this.startBtn.textContent = 'Listening...';
      this.startBtn.disabled = true;
    }
    if (this.progressEl) this.progressEl.style.display = '';
    if (this.resultEl) this.resultEl.style.display = 'none';
    if (this.statusEl) this.statusEl.textContent = 'Play A4 (the A above Middle C) firmly and clearly...';

    try {
      await this.startListening();
    } catch {
      if (this.statusEl) this.statusEl.textContent = 'Could not access microphone.';
      this.resetButton();
    }
  }

  private async startListening(): Promise<void> {
    this.stream = await navigator.mediaDevices.getUserMedia({
      audio: { echoCancellation: false, noiseSuppression: false, autoGainControl: false },
    });

    this.audioContext = new AudioContext();
    const source = this.audioContext.createMediaStreamSource(this.stream);

    // No low-pass filter for calibration — we need to detect A4 at 440Hz accurately
    this.analyser = this.audioContext.createAnalyser();
    this.analyser.fftSize = 4096;
    source.connect(this.analyser);

    const bufferLength = this.analyser.fftSize;
    this.buffer = new Float32Array(bufferLength);
    this.detector = Pitchy.forFloat32Array(bufferLength);

    this.listening = true;
    this.detect();
  }

  private detect = (): void => {
    if (!this.listening || !this.analyser || !this.buffer || !this.detector || !this.audioContext) return;

    (this.analyser.getFloatTimeDomainData as Function)(this.buffer);
    const [frequency, clarity] = this.detector.findPitch(this.buffer, this.audioContext.sampleRate);

    if (clarity >= 0.92 && frequency > 20) {
      // Check if this is near A4 (within ~100 cents = one semitone)
      // A4 at standard = 440 Hz, one semitone up = ~466, one semitone down = ~415
      const centsFromA4 = 1200 * Math.log2(frequency / 440);
      if (Math.abs(centsFromA4) < 100) {
        // Debounce: only add if it's been at least 300ms since last sample
        const now = performance.now();
        if (!this._lastSampleTime || now - this._lastSampleTime > 300) {
          this._lastSampleTime = now;
          this.samples.push(frequency);
          this.updateProgress();

          if (this.statusEl) {
            this.statusEl.textContent = `Heard ${frequency.toFixed(1)} Hz — ${this.samples.length}/${this.REQUIRED_SAMPLES}. Keep playing A4...`;
          }

          if (this.samples.length >= this.REQUIRED_SAMPLES) {
            this.finishCalibration();
            return;
          }
        }
      }
    }

    this.rafId = requestAnimationFrame(this.detect);
  };

  private _lastSampleTime: number = 0;

  private updateProgress(): void {
    const fill = this.container.querySelector('#cal-progress-fill') as HTMLElement;
    const label = this.container.querySelector('#cal-progress-label') as HTMLElement;
    if (fill) fill.style.width = `${(this.samples.length / this.REQUIRED_SAMPLES) * 100}%`;
    if (label) label.textContent = `${this.samples.length}/${this.REQUIRED_SAMPLES} samples`;
  }

  private finishCalibration(): void {
    this.stopListening();

    // Compute average frequency
    const avg = this.samples.reduce((a, b) => a + b, 0) / this.samples.length;

    // Compute cents offset from 440
    const offsetCents = 1200 * Math.log2(avg / 440);
    const rounded = Math.round(offsetCents * 10) / 10; // round to 0.1 cents

    // Save to settings
    const settings = loadSettings();
    settings.tuningOffsetCents = rounded;
    saveSettings(settings);
    setTuningOffset(rounded);

    // Update UI
    if (this.resultEl) {
      this.resultEl.style.display = '';
      this.resultEl.innerHTML = `
        <strong>Calibration complete!</strong><br>
        Your A4 averages <strong>${avg.toFixed(1)} Hz</strong>
        (${rounded > 0 ? '+' : ''}${rounded.toFixed(1)} cents from 440 Hz).<br>
        <span style="font-size: 0.8rem; color: var(--text-secondary);">
          The app will now account for this offset when detecting your notes.
        </span>
      `;
    }
    if (this.statusEl) this.statusEl.textContent = '';

    const currentEl = this.container.querySelector('#cal-current');
    if (currentEl) {
      currentEl.textContent = `${rounded > 0 ? '+' : ''}${rounded.toFixed(1)} cents (${avg.toFixed(1)} Hz)`;
    }

    this.resetButton();
    if (this.resetBtn) this.resetBtn.style.display = '';
  }

  private resetCalibration(): void {
    const settings = loadSettings();
    settings.tuningOffsetCents = 0;
    saveSettings(settings);
    setTuningOffset(0);
    this.render();
  }

  private resetButton(): void {
    if (this.startBtn) {
      this.startBtn.textContent = 'Start Calibration';
      this.startBtn.disabled = false;
    }
  }

  private stopListening(): void {
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

  destroy(): void {
    this.stopListening();
    this.container.innerHTML = '';
  }
}
