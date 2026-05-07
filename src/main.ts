import './style.css';
import { initRouter, registerRoute } from './ui/router';
import { renderHomeView } from './ui/home-view';
import { renderModuleView } from './ui/module-view';
import { renderSettingsView } from './ui/settings-view';

// Register routes
registerRoute('/', renderHomeView);
registerRoute('/module/:id', (container, params) => {
  renderModuleView(container, params);
});
registerRoute('/lesson/:id', async (container, params) => {
  // Lazy-load lesson view to keep initial bundle small
  const { renderLessonView } = await import('./ui/lesson-view');
  renderLessonView(container, params);
});
registerRoute('/settings', renderSettingsView);

// Initialize
const app = document.getElementById('app')!;
initRouter(app);
