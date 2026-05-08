import type { UserSettings } from '../types';

const STORAGE_KEY = 'PIANO_LEARN_SETTINGS';

function defaultSettings(): UserSettings {
  return {
    metronomeBpm: 72,
    metronomeEnabled: false,
    audioPlaybackEnabled: true,
    micSensitivity: 0.9,
    showFingerNumbers: true,
    keyboardSize: 'compact',
    tuningOffsetCents: 0,
  };
}

export function loadSettings(): UserSettings {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultSettings();
    return { ...defaultSettings(), ...JSON.parse(raw) };
  } catch {
    return defaultSettings();
  }
}

export function saveSettings(settings: UserSettings): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
}

export function updateSetting<K extends keyof UserSettings>(
  key: K,
  value: UserSettings[K]
): void {
  const settings = loadSettings();
  settings[key] = value;
  saveSettings(settings);
}

export function resetSettings(): void {
  localStorage.removeItem(STORAGE_KEY);
}
