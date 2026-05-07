import { MODULE_META, loadModule } from '../curriculum';
import { isLessonCompleted, loadProgress } from '../core/progress-store';
import { navigate } from './router';

export async function renderModuleView(
  container: HTMLElement,
  params: Record<string, string>
): Promise<void> {
  const moduleId = parseInt(params.id);
  const meta = MODULE_META.find(m => m.id === moduleId);
  if (!meta) {
    container.innerHTML = '<p>Module not found. <a href="#/">Go back</a></p>';
    return;
  }

  container.innerHTML = '<p style="color: var(--text-secondary)">Loading module...</p>';

  const module = await loadModule(moduleId);
  if (!module) {
    container.innerHTML = '<p>Failed to load module. <a href="#/">Go back</a></p>';
    return;
  }

  const progress = loadProgress();
  const wrapper = document.createElement('div');

  const backBtn = document.createElement('div');
  backBtn.className = 'lesson-header';
  backBtn.innerHTML = `
    <button class="back-btn">&larr; Back</button>
    <h2>Module ${module.id}: ${module.title}</h2>
  `;
  backBtn.querySelector('.back-btn')!.addEventListener('click', () => navigate('/'));
  wrapper.appendChild(backBtn);

  // Description
  const desc = document.createElement('p');
  desc.style.cssText = 'color: var(--text-secondary); margin-bottom: 16px; font-size: 0.9rem;';
  desc.textContent = module.description;
  wrapper.appendChild(desc);

  // Lesson list
  const list = document.createElement('ul');
  list.className = 'lesson-list';

  for (const lesson of module.lessons) {
    const completed = isLessonCompleted(lesson.id);
    const isCurrent = lesson.id === progress.currentLessonId;

    const item = document.createElement('li');
    item.className = 'lesson-item';

    let statusClass = '';
    let statusContent = '';
    if (completed) {
      statusClass = 'completed';
      statusContent = '&#10003;';
    } else if (isCurrent) {
      statusClass = 'current';
      statusContent = '&#9654;';
    }

    item.innerHTML = `
      <div class="lesson-status ${statusClass}">${statusContent}</div>
      <span class="lesson-title">${lesson.title}</span>
    `;

    item.addEventListener('click', () => {
      navigate(`/lesson/${lesson.id}`);
    });

    list.appendChild(item);
  }

  wrapper.appendChild(list);
  container.innerHTML = '';
  container.appendChild(wrapper);
}
