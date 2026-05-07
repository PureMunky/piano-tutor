import { loadSettings, saveSettings, resetSettings } from '../core/settings-store';
import { resetProgress } from '../core/progress-store';
import { navigate } from './router';

export function renderSettingsView(container: HTMLElement): void {
  const settings = loadSettings();
  const wrapper = document.createElement('div');

  const header = document.createElement('div');
  header.className = 'lesson-header';
  header.innerHTML = `
    <button class="back-btn">&larr; Back</button>
    <h2>Settings</h2>
  `;
  header.querySelector('.back-btn')!.addEventListener('click', () => navigate('/'));
  wrapper.appendChild(header);

  const sections = document.createElement('div');
  sections.innerHTML = `
    <div class="settings-section">
      <h3>Microphone</h3>
      <div class="setting-row">
        <label>Detection Sensitivity</label>
        <div style="display: flex; align-items: center; gap: 8px;">
          <input type="range" id="mic-sensitivity" min="0.7" max="0.98" step="0.01" value="${settings.micSensitivity}">
          <span id="mic-sensitivity-val">${Math.round(settings.micSensitivity * 100)}%</span>
        </div>
      </div>
    </div>

    <div class="settings-section">
      <h3>Metronome</h3>
      <div class="setting-row">
        <label>Default BPM</label>
        <div style="display: flex; align-items: center; gap: 8px;">
          <input type="range" id="default-bpm" min="40" max="180" step="2" value="${settings.metronomeBpm}">
          <span id="default-bpm-val">${settings.metronomeBpm}</span>
        </div>
      </div>
    </div>

    <div class="settings-section">
      <h3>Display</h3>
      <div class="setting-row">
        <label>Show Finger Numbers</label>
        <input type="checkbox" id="show-fingers" ${settings.showFingerNumbers ? 'checked' : ''}>
      </div>
      <div class="setting-row">
        <label>Keyboard Size</label>
        <select id="keyboard-size" style="padding: 4px 8px; border-radius: 4px; border: 1px solid var(--border);">
          <option value="compact" ${settings.keyboardSize === 'compact' ? 'selected' : ''}>Compact (3 octaves)</option>
          <option value="full" ${settings.keyboardSize === 'full' ? 'selected' : ''}>Full (7 octaves)</option>
        </select>
      </div>
    </div>

    <div class="settings-section">
      <h3>Audio</h3>
      <div class="setting-row">
        <label>Enable Audio Playback</label>
        <input type="checkbox" id="audio-enabled" ${settings.audioPlaybackEnabled ? 'checked' : ''}>
      </div>
    </div>

    <div class="settings-section">
      <h3>Progress</h3>
      <div class="setting-row">
        <label>Reset all progress</label>
        <button class="btn" id="reset-progress" style="color: var(--error); border-color: var(--error);">Reset Progress</button>
      </div>
    </div>
  `;
  wrapper.appendChild(sections);

  container.appendChild(wrapper);

  // Bind events
  const micSlider = container.querySelector('#mic-sensitivity') as HTMLInputElement;
  const micVal = container.querySelector('#mic-sensitivity-val')!;
  micSlider?.addEventListener('input', () => {
    const v = parseFloat(micSlider.value);
    micVal.textContent = `${Math.round(v * 100)}%`;
    settings.micSensitivity = v;
    saveSettings(settings);
  });

  const bpmSlider = container.querySelector('#default-bpm') as HTMLInputElement;
  const bpmVal = container.querySelector('#default-bpm-val')!;
  bpmSlider?.addEventListener('input', () => {
    const v = parseInt(bpmSlider.value);
    bpmVal.textContent = String(v);
    settings.metronomeBpm = v;
    saveSettings(settings);
  });

  const fingersCheck = container.querySelector('#show-fingers') as HTMLInputElement;
  fingersCheck?.addEventListener('change', () => {
    settings.showFingerNumbers = fingersCheck.checked;
    saveSettings(settings);
  });

  const kbSize = container.querySelector('#keyboard-size') as HTMLSelectElement;
  kbSize?.addEventListener('change', () => {
    settings.keyboardSize = kbSize.value as 'compact' | 'full';
    saveSettings(settings);
  });

  const audioCheck = container.querySelector('#audio-enabled') as HTMLInputElement;
  audioCheck?.addEventListener('change', () => {
    settings.audioPlaybackEnabled = audioCheck.checked;
    saveSettings(settings);
  });

  const resetBtn = container.querySelector('#reset-progress') as HTMLButtonElement;
  resetBtn?.addEventListener('click', () => {
    if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
      resetProgress();
      resetSettings();
      navigate('/');
    }
  });
}
