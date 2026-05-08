import './style.css';
import { initRouter, registerRoute, onBeforeNavigate } from './ui/router';
import { renderHomeView } from './ui/home-view';
import { renderModuleView } from './ui/module-view';
import { renderSettingsView } from './ui/settings-view';
import { stopPlayback } from './core/audio-player';
import { stopMetronome } from './core/metronome';
import { pitchDetector } from './core/pitch-detector';
import { loadSettings } from './core/settings-store';
import { setTuningOffset } from './core/note-utils';

// Apply saved tuning offset on startup
setTuningOffset(loadSettings().tuningOffsetCents);

// Global cleanup: stop all audio/mic on any route change
onBeforeNavigate(() => {
  stopPlayback();
  stopMetronome();
  pitchDetector.stopListening();
});

// Register routes
registerRoute('/', renderHomeView);
registerRoute('/module/:id', (container, params) => {
  renderModuleView(container, params);
});
registerRoute('/lesson/:id', async (container, params) => {
  const { renderLessonView } = await import('./ui/lesson-view');
  renderLessonView(container, params);
});
registerRoute('/settings', renderSettingsView);

// Initialize
const app = document.getElementById('app')!;
initRouter(app);
