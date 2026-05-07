import { MODULE_META, getTotalLessonCount } from '../curriculum';
import { loadProgress, getModuleCompletionCount, isModuleCompleted } from '../core/progress-store';
import { navigate } from './router';

export function renderHomeView(container: HTMLElement): void {
  const progress = loadProgress();
  const totalLessons = getTotalLessonCount();

  // Count total completed lessons
  let totalCompleted = 0;
  for (const meta of MODULE_META) {
    totalCompleted += getModuleCompletionCount(meta.id, meta.lessonCount);
  }

  const percent = totalLessons > 0 ? Math.round((totalCompleted / totalLessons) * 100) : 0;

  const wrapper = document.createElement('div');

  // Progress bar
  wrapper.innerHTML = `
    <div class="progress-bar-container">
      <label>Overall Progress: ${totalCompleted}/${totalLessons} lessons (${percent}%)</label>
      <div class="progress-bar">
        <div class="progress-bar-fill" style="width: ${percent}%"></div>
      </div>
    </div>
    <div class="module-grid"></div>
  `;

  const grid = wrapper.querySelector('.module-grid')!;

  for (const meta of MODULE_META) {
    const completed = getModuleCompletionCount(meta.id, meta.lessonCount);
    const isComplete = isModuleCompleted(meta.id, meta.lessonCount);

    // A module is unlocked if it's module 1 OR the previous module is complete
    const isUnlocked = meta.id === 1 || isModuleCompleted(meta.id - 1, MODULE_META[meta.id - 2].lessonCount);
    const isCurrent = meta.id === progress.currentModuleId;

    const card = document.createElement('div');
    card.className = 'module-card';
    if (isComplete) card.classList.add('completed');
    if (!isUnlocked) card.classList.add('locked');
    if (isCurrent && !isComplete) card.classList.add('current');

    card.innerHTML = `
      <div class="module-number">${isComplete ? '&#10003;' : meta.id}</div>
      <div class="module-info">
        <h3>${meta.title}</h3>
        <p>${meta.description}</p>
      </div>
      <div class="module-progress">${completed}/${meta.lessonCount}</div>
    `;

    if (isUnlocked) {
      card.addEventListener('click', () => {
        navigate(`/module/${meta.id}`);
      });
    }

    grid.appendChild(card);
  }

  container.appendChild(wrapper);
}
