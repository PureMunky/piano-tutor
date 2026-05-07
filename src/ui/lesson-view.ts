import type { Lesson, LessonStep, InstructionStep, DemoStep, ExerciseStep } from '../types';
import { loadModule, MODULE_META } from '../curriculum';
import { PianoKeyboard } from './piano-keyboard';
import { SheetMusic } from './sheet-music';
import { ExerciseRunner } from '../engine/exercise-runner';
import { pitchDetector } from '../core/pitch-detector';
import { playSequence, playNote, startAudio, stopPlayback } from '../core/audio-player';
import { startMetronome, stopMetronome, setBpm, setTimeSignature } from '../core/metronome';
import { markLessonComplete, saveExerciseScore, updateCurrentPosition } from '../core/progress-store';
import { loadSettings } from '../core/settings-store';
import { vexKeyToNoteName } from '../core/note-utils';
import { navigate } from './router';

let activeRunner: ExerciseRunner | null = null;
let activeKeyboard: PianoKeyboard | null = null;
let activeSheetMusic: SheetMusic | null = null;

function cleanup(): void {
  activeRunner?.stop();
  activeRunner = null;
  activeKeyboard?.destroy();
  activeKeyboard = null;
  activeSheetMusic?.destroy();
  activeSheetMusic = null;
  stopMetronome();
  stopPlayback();
  pitchDetector.stopListening();
}

export async function renderLessonView(
  container: HTMLElement,
  params: Record<string, string>
): Promise<void> {
  cleanup();

  const lessonId = params.id;
  const moduleId = parseInt(lessonId.split('.')[0]);

  const loadedModule = await loadModule(moduleId);
  if (!loadedModule) {
    container.innerHTML = '<p>Module not found. <a href="#/">Go back</a></p>';
    return;
  }

  const foundLesson = loadedModule.lessons.find(l => l.id === lessonId);
  if (!foundLesson) {
    container.innerHTML = '<p>Lesson not found. <a href="#/">Go back</a></p>';
    return;
  }

  const mod: typeof loadedModule = loadedModule;
  const lesson: typeof foundLesson = foundLesson;

  updateCurrentPosition(moduleId, lessonId);

  const state = { currentStep: 0 };
  const wrapper = document.createElement('div');

  // Header
  const header = document.createElement('div');
  header.className = 'lesson-header';
  header.innerHTML = `
    <button class="back-btn">&larr; Back</button>
    <h2>${lesson.title}</h2>
    <span class="step-indicator">Step ${state.currentStep + 1}/${lesson.steps.length}</span>
  `;
  header.querySelector('.back-btn')!.addEventListener('click', () => {
    cleanup();
    navigate(`/module/${moduleId}`);
  });
  wrapper.appendChild(header);

  // Content area
  const contentArea = document.createElement('div');
  contentArea.id = 'lesson-content';
  wrapper.appendChild(contentArea);

  // Step dots
  const stepNav = document.createElement('div');
  stepNav.className = 'step-nav';
  stepNav.innerHTML = `
    <button class="btn" id="prev-step" disabled>&larr; Previous</button>
    <div class="step-dots">
      ${lesson.steps.map((_, i) =>
        `<div class="step-dot ${i === 0 ? 'active' : ''}" data-step="${i}"></div>`
      ).join('')}
    </div>
    <button class="btn primary" id="next-step">Next &rarr;</button>
  `;
  wrapper.appendChild(stepNav);

  container.innerHTML = '';
  container.appendChild(wrapper);

  // Navigation handlers
  const prevBtn = container.querySelector('#prev-step') as HTMLButtonElement;
  const nextBtn = container.querySelector('#next-step') as HTMLButtonElement;

  function updateStepIndicator(): void {
    const indicator = container.querySelector('.step-indicator');
    if (indicator) indicator.textContent = `Step ${state.currentStep + 1}/${lesson.steps.length}`;

    const dots = container.querySelectorAll('.step-dot');
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === state.currentStep);
      dot.classList.toggle('completed', i < state.currentStep);
    });

    prevBtn.disabled = state.currentStep === 0;

    if (state.currentStep === lesson.steps.length - 1) {
      nextBtn.textContent = 'Complete Lesson';
      nextBtn.onclick = () => {
        markLessonComplete(lessonId);
        cleanup();

        // Find next lesson
        const currentIndex = mod.lessons.findIndex(l => l.id === lessonId);
        if (currentIndex < mod.lessons.length - 1) {
          navigate(`/lesson/${mod.lessons[currentIndex + 1].id}`);
        } else {
          // Check next module
          const nextModuleMeta = MODULE_META.find(m => m.id === moduleId + 1);
          if (nextModuleMeta) {
            navigate(`/module/${moduleId + 1}`);
          } else {
            navigate('/');
          }
        }
      };
    } else {
      nextBtn.textContent = 'Next \u2192';
      nextBtn.onclick = () => {
        state.currentStep++;
        renderStep(lesson.steps[state.currentStep], contentArea, lesson);
        updateStepIndicator();
      };
    }
  }

  prevBtn.addEventListener('click', () => {
    if (state.currentStep > 0) {
      state.currentStep--;
      renderStep(lesson.steps[state.currentStep], contentArea, lesson);
      updateStepIndicator();
    }
  });

  // Render first step
  renderStep(lesson.steps[0], contentArea, lesson);
  updateStepIndicator();
}

function renderStep(step: LessonStep, container: HTMLElement, lesson: Lesson): void {
  // Cleanup previous exercise state
  activeRunner?.stop();
  activeRunner = null;
  activeSheetMusic?.destroy();
  activeSheetMusic = null;
  stopMetronome();

  container.innerHTML = '';

  switch (step.type) {
    case 'instruction':
      renderInstructionStep(step, container);
      break;
    case 'demo':
      renderDemoStep(step, container);
      break;
    case 'exercise':
      renderExerciseStep(step, container, lesson);
      break;
  }
}

function renderInstructionStep(step: InstructionStep, container: HTMLElement): void {
  const panel = document.createElement('div');
  panel.className = 'instruction-panel';
  panel.innerHTML = `<h3>${step.title}</h3>${step.content}`;
  container.appendChild(panel);

  // Render optional diagrams
  if (step.diagram === 'keyboard-highlight' && step.diagramData) {
    const kbContainer = document.createElement('div');
    container.appendChild(kbContainer);

    const notes = step.diagramData.highlightNotes as string[] || [];
    const fingerMap = step.diagramData.fingerNumbers as Record<string, number> || {};
    const start = (step.diagramData.viewportStart as string) || 'C3';
    const end = (step.diagramData.viewportEnd as string) || 'C6';

    activeKeyboard = new PianoKeyboard(kbContainer, {
      viewportStart: start,
      viewportEnd: end,
      onClick: (note) => {
        startAudio().then(() => playNote(note, '4n'));
      },
    });
    activeKeyboard.highlightExpected(notes);

    // Show finger numbers
    for (const [note, finger] of Object.entries(fingerMap)) {
      activeKeyboard.showFingerNumber(note, finger);
    }
  }

  if (step.diagram === 'hand-position') {
    const diagram = document.createElement('div');
    diagram.className = 'hand-diagram';
    diagram.innerHTML = `
      <div class="hand">
        <h4>Left Hand</h4>
        <ul class="finger-list">
          <li><strong>5</strong> &mdash; Pinky</li>
          <li><strong>4</strong> &mdash; Ring</li>
          <li><strong>3</strong> &mdash; Middle</li>
          <li><strong>2</strong> &mdash; Index</li>
          <li><strong>1</strong> &mdash; Thumb</li>
        </ul>
      </div>
      <div class="hand">
        <h4>Right Hand</h4>
        <ul class="finger-list">
          <li><strong>1</strong> &mdash; Thumb</li>
          <li><strong>2</strong> &mdash; Index</li>
          <li><strong>3</strong> &mdash; Middle</li>
          <li><strong>4</strong> &mdash; Ring</li>
          <li><strong>5</strong> &mdash; Pinky</li>
        </ul>
      </div>
    `;
    container.appendChild(diagram);
  }
}

function renderDemoStep(step: DemoStep, container: HTMLElement): void {
  const panel = document.createElement('div');
  panel.className = 'instruction-panel';
  panel.innerHTML = `<h3>${step.title}</h3><p>${step.description}</p>`;
  container.appendChild(panel);

  // Sheet music
  const sheetContainer = document.createElement('div');
  sheetContainer.className = 'sheet-music-container';
  container.appendChild(sheetContainer);

  const settings = loadSettings();
  activeSheetMusic = new SheetMusic(sheetContainer, {
    clef: step.clef || 'treble',
    timeSignature: step.timeSignature,
    showFingerNumbers: settings.showFingerNumbers,
  });
  activeSheetMusic.render(step.notes);

  // Play button
  const controls = document.createElement('div');
  controls.className = 'controls-bar';
  controls.innerHTML = `<button class="btn primary" id="play-demo">Play</button>`;
  container.appendChild(controls);

  const playBtn = controls.querySelector('#play-demo') as HTMLButtonElement;
  playBtn.addEventListener('click', async () => {
    playBtn.disabled = true;
    playBtn.textContent = 'Playing...';
    try {
      await playSequence(step.notes, step.bpm, (index) => {
        activeSheetMusic?.clearHighlights();
        activeSheetMusic?.highlightNote(index, '#3b82f6');
      });
    } finally {
      playBtn.disabled = false;
      playBtn.textContent = 'Play';
      activeSheetMusic?.clearHighlights();
    }
  });

  // Also render keyboard
  const kbContainer = document.createElement('div');
  container.appendChild(kbContainer);

  activeKeyboard = new PianoKeyboard(kbContainer, {
    viewportStart: 'C3',
    viewportEnd: 'C6',
    onClick: (note) => {
      startAudio().then(() => playNote(note, '4n'));
    },
  });
}

function renderExerciseStep(step: ExerciseStep, container: HTMLElement, lesson: Lesson): void {
  const settings = loadSettings();

  // Instructions
  const panel = document.createElement('div');
  panel.className = 'instruction-panel';
  panel.innerHTML = `<h3>${step.title}</h3><p>${step.instructions}</p>`;
  container.appendChild(panel);

  // Sheet music
  const sheetContainer = document.createElement('div');
  sheetContainer.className = 'sheet-music-container';
  container.appendChild(sheetContainer);

  activeSheetMusic = new SheetMusic(sheetContainer, {
    clef: step.clef,
    timeSignature: step.timeSignature,
    showFingerNumbers: settings.showFingerNumbers,
  });
  activeSheetMusic.render(step.notes);

  // Feedback area
  const feedback = document.createElement('div');
  feedback.className = 'exercise-feedback';
  feedback.innerHTML = `<span class="status-text">Press "Start" when ready, then play the notes shown above.</span>`;
  container.appendChild(feedback);

  // Piano keyboard
  const kbContainer = document.createElement('div');
  container.appendChild(kbContainer);

  const viewportStart = 'C3';
  const viewportEnd = 'C6';

  activeKeyboard = new PianoKeyboard(kbContainer, {
    viewportStart,
    viewportEnd,
    onClick: (note) => {
      startAudio().then(() => playNote(note, '4n'));
    },
  });

  // Show expected notes and finger numbers
  const firstNoteKeys = step.notes[0]?.keys.map(k => vexKeyToNoteName(k)) || [];
  activeKeyboard.highlightExpected(firstNoteKeys);

  if (settings.showFingerNumbers && step.fingerNumbers) {
    for (const [note, finger] of Object.entries(step.fingerNumbers)) {
      activeKeyboard.showFingerNumber(note, finger);
    }
  }

  // Controls
  const controls = document.createElement('div');
  controls.className = 'controls-bar';
  controls.innerHTML = `
    <div class="mic-status">
      <div class="mic-dot" id="mic-dot"></div>
      <span id="mic-label">Mic off</span>
    </div>
    <button class="btn primary" id="start-exercise">Start Exercise</button>
    <button class="btn" id="retry-exercise" style="display:none;">Retry</button>
    <div class="spacer"></div>
    <div class="metronome-widget">
      <button class="btn" id="metronome-toggle">Metronome</button>
      <input type="range" id="bpm-slider" min="40" max="180" value="${step.bpm}">
      <span class="bpm-display" id="bpm-display">${step.bpm} BPM</span>
    </div>
    <button class="btn" id="play-demo-ex">Hear It</button>
  `;
  container.appendChild(controls);

  // Wire controls
  const startBtn = controls.querySelector('#start-exercise') as HTMLButtonElement;
  const retryBtn = controls.querySelector('#retry-exercise') as HTMLButtonElement;
  const micDot = controls.querySelector('#mic-dot') as HTMLElement;
  const micLabel = controls.querySelector('#mic-label') as HTMLElement;
  const bpmSlider = controls.querySelector('#bpm-slider') as HTMLInputElement;
  const bpmDisplay = controls.querySelector('#bpm-display') as HTMLElement;
  const metronomeBtn = controls.querySelector('#metronome-toggle') as HTMLButtonElement;
  const hearItBtn = controls.querySelector('#play-demo-ex') as HTMLButtonElement;

  // BPM slider
  bpmSlider.addEventListener('input', () => {
    const bpm = parseInt(bpmSlider.value);
    bpmDisplay.textContent = `${bpm} BPM`;
    setBpm(bpm);
  });

  // Metronome toggle
  let metronomeRunning = false;
  metronomeBtn.addEventListener('click', async () => {
    await startAudio();
    metronomeRunning = !metronomeRunning;
    if (metronomeRunning) {
      setTimeSignature(step.timeSignature[0]);
      startMetronome(parseInt(bpmSlider.value));
      metronomeBtn.textContent = 'Stop Met.';
    } else {
      stopMetronome();
      metronomeBtn.textContent = 'Metronome';
    }
  });

  // Hear it button
  hearItBtn.addEventListener('click', async () => {
    hearItBtn.disabled = true;
    hearItBtn.textContent = 'Playing...';
    try {
      await playSequence(step.notes, parseInt(bpmSlider.value), (index) => {
        activeSheetMusic?.clearHighlights();
        activeSheetMusic?.highlightNote(index, '#3b82f6');
      });
    } finally {
      hearItBtn.disabled = false;
      hearItBtn.textContent = 'Hear It';
      activeSheetMusic?.clearHighlights();
      // Re-highlight current cursor position if exercise is active
      if (activeRunner) {
        activeSheetMusic?.highlightNote(activeRunner.getCursor(), '#3b82f6');
      }
    }
  });

  // Start exercise
  startBtn.addEventListener('click', async () => {
    try {
      startBtn.disabled = true;
      startBtn.textContent = 'Listening...';
      micDot.classList.add('listening');
      micLabel.textContent = 'Listening...';

      feedback.className = 'exercise-feedback';
      feedback.innerHTML = '<span class="status-text">Play the highlighted notes on your piano...</span>';

      // Highlight first note on sheet music
      activeSheetMusic?.clearHighlights();
      activeSheetMusic?.highlightNote(0, '#3b82f6');

      activeRunner = new ExerciseRunner(step, {
        onNoteDetected: (note) => {
          // Flash the detected note on keyboard
          activeKeyboard?.highlightPlayed(note, false);
        },
        onNoteCorrect: (index, note) => {
          activeKeyboard?.highlightPlayed(note, true);
          activeSheetMusic?.highlightNote(index, '#22c55e');

          // Highlight next expected note
          const nextIndex = index + 1;
          if (nextIndex < step.notes.length) {
            activeSheetMusic?.highlightNote(nextIndex, '#3b82f6');
            const nextNotes = step.notes[nextIndex].keys.map(k => vexKeyToNoteName(k));
            activeKeyboard?.clearHighlights();
            activeKeyboard?.highlightExpected(nextNotes);
          }

          const remaining = step.notes.filter(n => !n.rest).length - (index + 1);
          feedback.className = 'exercise-feedback correct';
          feedback.innerHTML = `<span class="status-text">Correct! ${remaining} notes remaining.</span>`;
        },
        onNoteWrong: (expected, played) => {
          activeKeyboard?.highlightPlayed(played, false);
          feedback.className = 'exercise-feedback wrong';
          feedback.innerHTML = `<span class="status-text">That was ${played} — try ${expected}</span>`;
        },
        onComplete: (score) => {
          micDot.classList.remove('listening');
          micLabel.textContent = 'Complete';
          startBtn.style.display = 'none';
          retryBtn.style.display = '';

          // Save score
          const stepIndex = lesson.steps.indexOf(step);
          if (stepIndex >= 0) {
            saveExerciseScore(lesson.id, stepIndex, score);
          }

          // Show score
          const scoreDiv = document.createElement('div');
          scoreDiv.className = `score-display ${score.passed ? 'passed' : 'failed'}`;
          scoreDiv.innerHTML = `
            <div class="score-value">${score.bestAccuracy}%</div>
            <div class="score-label">${score.passed ? 'Great job!' : 'Keep practicing — you need 80% to pass'}</div>
          `;
          container.insertBefore(scoreDiv, feedback);
          feedback.style.display = 'none';
        },
      });

      await activeRunner.start();
    } catch (err) {
      feedback.className = 'exercise-feedback wrong';
      feedback.innerHTML = `<span class="status-text">Could not access microphone. Please allow microphone access and try again.</span>`;
      startBtn.disabled = false;
      startBtn.textContent = 'Start Exercise';
      micDot.classList.remove('listening');
      micLabel.textContent = 'Mic error';
    }
  });

  // Retry
  retryBtn.addEventListener('click', () => {
    activeRunner?.reset();
    activeSheetMusic?.clearHighlights();
    activeKeyboard?.clearHighlights();

    // Remove score display
    const scoreDiv = container.querySelector('.score-display');
    if (scoreDiv) scoreDiv.remove();

    feedback.style.display = '';
    feedback.className = 'exercise-feedback';
    feedback.innerHTML = '<span class="status-text">Press "Start" when ready.</span>';

    startBtn.style.display = '';
    startBtn.disabled = false;
    startBtn.textContent = 'Start Exercise';
    retryBtn.style.display = 'none';

    micDot.classList.remove('listening');
    micLabel.textContent = 'Mic off';

    // Re-highlight first note
    const firstNotes = step.notes[0]?.keys.map(k => vexKeyToNoteName(k)) || [];
    activeKeyboard?.highlightExpected(firstNotes);
  });
}
