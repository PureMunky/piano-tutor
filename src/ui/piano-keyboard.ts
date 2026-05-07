import { noteDisplayName } from '../core/note-utils';

interface KeyInfo {
  note: string;    // e.g. "C4"
  isBlack: boolean;
}

function generateKeys88(): KeyInfo[] {
  const chromatic = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
  const keys: KeyInfo[] = [];

  // A0 = midi 21, C8 = midi 108
  for (let midi = 21; midi <= 108; midi++) {
    const octave = Math.floor((midi - 12) / 12);
    const noteIndex = midi % 12;
    const noteName = chromatic[noteIndex];
    keys.push({
      note: `${noteName}${octave}`,
      isBlack: noteName.includes('#'),
    });
  }
  return keys;
}

export class PianoKeyboard {
  private container: HTMLElement;
  private keyElements: Map<string, HTMLElement> = new Map();
  private allKeys: KeyInfo[];
  private viewportStart: string = 'C3';
  private viewportEnd: string = 'C6';
  private showLabels: boolean = true;
  private onPress?: (note: string) => void;
  private onRelease?: (note: string) => void;

  constructor(container: HTMLElement, options?: {
    viewportStart?: string;
    viewportEnd?: string;
    showLabels?: boolean;
    onPress?: (note: string) => void;
    onRelease?: (note: string) => void;
  }) {
    this.container = container;
    this.allKeys = generateKeys88();
    if (options?.viewportStart) this.viewportStart = options.viewportStart;
    if (options?.viewportEnd) this.viewportEnd = options.viewportEnd;
    if (options?.showLabels !== undefined) this.showLabels = options.showLabels;
    if (options?.onPress) this.onPress = options.onPress;
    if (options?.onRelease) this.onRelease = options.onRelease;
    this.render();
  }

  setViewport(start: string, end: string): void {
    this.viewportStart = start;
    this.viewportEnd = end;
    this.render();
  }

  private getVisibleKeys(): KeyInfo[] {
    const startIdx = this.allKeys.findIndex(k => k.note === this.viewportStart);
    const endIdx = this.allKeys.findIndex(k => k.note === this.viewportEnd);
    if (startIdx === -1 || endIdx === -1) return this.allKeys;
    return this.allKeys.slice(startIdx, endIdx + 1);
  }

  private render(): void {
    this.keyElements.clear();
    this.container.innerHTML = '';
    this.container.className = 'keyboard-container';

    const viewport = document.createElement('div');
    viewport.className = 'keyboard-viewport';

    const visibleKeys = this.getVisibleKeys();
    const whiteKeyWidth = 36;
    const blackKeyWidth = 24;
    const whiteKeyHeight = 160;
    const blackKeyHeight = 100;

    // First pass: count white keys and assign x positions
    const whitePositions: Map<string, number> = new Map();
    let whiteCount = 0;
    for (const keyInfo of visibleKeys) {
      if (!keyInfo.isBlack) {
        whitePositions.set(keyInfo.note, whiteCount * whiteKeyWidth);
        whiteCount++;
      }
    }

    // Set viewport size
    viewport.style.width = `${whiteCount * whiteKeyWidth}px`;
    viewport.style.height = `${whiteKeyHeight}px`;
    viewport.style.position = 'relative';

    // Second pass: render white keys first (so they're behind black keys in DOM, but z-index handles it)
    for (const keyInfo of visibleKeys) {
      if (keyInfo.isBlack) continue;

      const el = document.createElement('div');
      el.className = 'key white';
      el.dataset.note = keyInfo.note;
      el.style.position = 'absolute';
      el.style.left = `${whitePositions.get(keyInfo.note)}px`;
      el.style.top = '0';
      el.style.width = `${whiteKeyWidth}px`;
      el.style.height = `${whiteKeyHeight}px`;

      if (this.showLabels) {
        const display = noteDisplayName(keyInfo.note);
        if (display === 'C' || display === 'F') {
          const label = document.createElement('span');
          label.className = 'note-label';
          label.textContent = keyInfo.note;
          el.appendChild(label);
        }
      }

      this.addKeyListeners(el, keyInfo.note);
      this.keyElements.set(keyInfo.note, el);
      viewport.appendChild(el);
    }

    // Third pass: render black keys on top
    for (const keyInfo of visibleKeys) {
      if (!keyInfo.isBlack) continue;

      // Find the white key just before this black key to position relative to it
      const idx = visibleKeys.indexOf(keyInfo);
      let prevWhite: KeyInfo | null = null;
      for (let i = idx - 1; i >= 0; i--) {
        if (!visibleKeys[i].isBlack) {
          prevWhite = visibleKeys[i];
          break;
        }
      }

      if (!prevWhite) continue;
      const prevWhiteX = whitePositions.get(prevWhite.note);
      if (prevWhiteX === undefined) continue;

      const el = document.createElement('div');
      el.className = 'key black';
      el.dataset.note = keyInfo.note;
      el.style.position = 'absolute';
      el.style.left = `${prevWhiteX + whiteKeyWidth - blackKeyWidth / 2}px`;
      el.style.top = '0';
      el.style.width = `${blackKeyWidth}px`;
      el.style.height = `${blackKeyHeight}px`;

      this.addKeyListeners(el, keyInfo.note);
      this.keyElements.set(keyInfo.note, el);
      viewport.appendChild(el);
    }

    this.container.appendChild(viewport);
  }

  private addKeyListeners(el: HTMLElement, note: string): void {
    let pressed = false;

    const press = (e: Event) => {
      e.preventDefault();
      if (pressed) return;
      pressed = true;
      el.classList.add('active');
      this.onPress?.(note);

      const release = () => {
        if (!pressed) return;
        pressed = false;
        el.classList.remove('active');
        this.onRelease?.(note);
        document.removeEventListener('mouseup', release);
        document.removeEventListener('touchend', release);
        document.removeEventListener('touchcancel', release);
      };

      document.addEventListener('mouseup', release);
      document.addEventListener('touchend', release);
      document.addEventListener('touchcancel', release);
    };

    el.addEventListener('mousedown', press);
    el.addEventListener('touchstart', press, { passive: false });
  }

  highlightExpected(notes: string[]): void {
    this.clearHighlights();
    for (const note of notes) {
      const el = this.keyElements.get(note);
      if (el) el.classList.add('expected');
    }
  }

  highlightPlayed(note: string, correct: boolean): void {
    const el = this.keyElements.get(note);
    if (!el) return;
    el.classList.remove('expected');
    el.classList.add(correct ? 'correct' : 'wrong');
    setTimeout(() => {
      el.classList.remove('correct', 'wrong');
    }, 500);
  }

  showFingerNumber(note: string, finger: number): void {
    const el = this.keyElements.get(note);
    if (!el) return;
    const existing = el.querySelector('.finger-number');
    if (existing) existing.remove();

    const span = document.createElement('span');
    span.className = 'finger-number';
    span.textContent = String(finger);
    el.insertBefore(span, el.firstChild);
  }

  clearFingerNumbers(): void {
    this.keyElements.forEach(el => {
      const fn = el.querySelector('.finger-number');
      if (fn) fn.remove();
    });
  }

  clearHighlights(): void {
    this.keyElements.forEach(el => {
      el.classList.remove('expected', 'correct', 'wrong');
    });
  }

  scrollToNote(note: string): void {
    const el = this.keyElements.get(note);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }

  destroy(): void {
    this.container.innerHTML = '';
    this.keyElements.clear();
  }
}
