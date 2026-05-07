import { Renderer, Stave, StaveNote, Voice, Formatter, Annotation, Accidental, type RenderContext, StaveConnector } from 'vexflow';
import type { NoteEvent } from '../types';

export interface SheetMusicOptions {
  clef: 'treble' | 'bass' | 'grand';
  timeSignature: [number, number];
  showFingerNumbers: boolean;
}

export class SheetMusic {
  private container: HTMLElement;
  private renderedNotes: StaveNote[] = [];
  private options: SheetMusicOptions;

  constructor(container: HTMLElement, options: SheetMusicOptions) {
    this.container = container;
    this.options = options;
  }

  render(notes: NoteEvent[]): void {
    this.container.innerHTML = '';
    this.renderedNotes = [];

    if (notes.length === 0) return;

    const width = Math.max(this.container.clientWidth - 32, 400);

    const div = document.createElement('div');
    this.container.appendChild(div);

    const renderer = new Renderer(div, Renderer.Backends.SVG);

    if (this.options.clef === 'grand') {
      this.renderGrandStaff(renderer, notes, width);
    } else {
      this.renderSingleStaff(renderer, notes, width);
    }
  }

  private renderSingleStaff(renderer: Renderer, notes: NoteEvent[], width: number): void {
    const measuresNeeded = this.calculateMeasures(notes);
    const staveWidth = Math.min(width - 40, Math.max(300, measuresNeeded * 200));
    const height = 150;

    renderer.resize(staveWidth + 40, height);
    const context = renderer.getContext();

    const stave = new Stave(10, 20, staveWidth);
    stave.addClef(this.options.clef);
    stave.addTimeSignature(`${this.options.timeSignature[0]}/${this.options.timeSignature[1]}`);
    stave.setContext(context).draw();

    this.drawNotes(context, stave, notes);
  }

  private renderGrandStaff(renderer: Renderer, notes: NoteEvent[], width: number): void {
    const measuresNeeded = this.calculateMeasures(notes);
    const staveWidth = Math.min(width - 40, Math.max(300, measuresNeeded * 200));
    const height = 280;

    renderer.resize(staveWidth + 40, height);
    const context = renderer.getContext();

    // Treble staff
    const trebleStave = new Stave(10, 20, staveWidth);
    trebleStave.addClef('treble');
    trebleStave.addTimeSignature(`${this.options.timeSignature[0]}/${this.options.timeSignature[1]}`);
    trebleStave.setContext(context).draw();

    // Bass staff
    const bassStave = new Stave(10, 140, staveWidth);
    bassStave.addClef('bass');
    bassStave.addTimeSignature(`${this.options.timeSignature[0]}/${this.options.timeSignature[1]}`);
    bassStave.setContext(context).draw();

    // Connect with brace
    const brace = new StaveConnector(trebleStave, bassStave);
    brace.setType('brace');
    brace.setContext(context).draw();

    const lineLeft = new StaveConnector(trebleStave, bassStave);
    lineLeft.setType('singleLeft');
    lineLeft.setContext(context).draw();

    const lineRight = new StaveConnector(trebleStave, bassStave);
    lineRight.setType('singleRight');
    lineRight.setContext(context).draw();

    // For grand staff, put all notes on treble for now
    // A more sophisticated version would split by octave
    this.drawNotes(context, trebleStave, notes);
  }

  private drawNotes(context: RenderContext, stave: Stave, notes: NoteEvent[]): void {
    const vexNotes: StaveNote[] = [];

    for (const noteEvent of notes) {
      const clef = this.options.clef === 'grand' ? 'treble' : this.options.clef;
      const keys = noteEvent.rest ? [`${clef === 'bass' ? 'd/3' : 'b/4'}`] : noteEvent.keys;

      const durationStr = noteEvent.rest
        ? `${noteEvent.duration}r`
        : noteEvent.duration;

      const staveNote = new StaveNote({
        keys,
        duration: durationStr,
        clef,
      });

      // Add finger number annotations
      if (this.options.showFingerNumbers && noteEvent.finger) {
        noteEvent.finger.forEach((f, i) => {
          if (f > 0) {
            const annotation = new Annotation(String(f))
              .setVerticalJustification(Annotation.VerticalJustify.TOP);
            staveNote.addModifier(annotation, i);
          }
        });
      }

      // Add accidentals
      if (!noteEvent.rest) {
        noteEvent.keys.forEach((key, i) => {
          const notePart = key.split('/')[0];
          if (notePart.includes('#')) {
            staveNote.addModifier(new Accidental('#'), i);
          } else if (notePart.includes('b') && notePart !== 'b') {
            staveNote.addModifier(new Accidental('b'), i);
          }
        });
      }

      vexNotes.push(staveNote);
    }

    this.renderedNotes = vexNotes;

    if (vexNotes.length === 0) return;

    const totalBeats = notes.reduce((sum, n) => sum + this.durationToBeats(n.duration), 0);

    // Use SOFT voice mode to avoid strict beat count issues
    const voice = new Voice({
      numBeats: totalBeats,
      beatValue: this.options.timeSignature[1],
    }).setMode(Voice.Mode.SOFT);

    voice.addTickables(vexNotes);
    new Formatter().joinVoices([voice]).format([voice], stave.getWidth() - 80);
    voice.draw(context, stave);
  }

  highlightNote(index: number, color: string): void {
    if (index < 0 || index >= this.renderedNotes.length) return;
    const note = this.renderedNotes[index];
    note.setStyle({ fillStyle: color, strokeStyle: color });
    // Force re-render by accessing the SVG element
    const el = note.getSVGElement();
    if (el) {
      el.querySelectorAll('path, circle, rect').forEach(path => {
        (path as SVGElement).style.fill = color;
        (path as SVGElement).style.stroke = color;
      });
    }
  }

  clearHighlights(): void {
    this.renderedNotes.forEach(note => {
      note.setStyle({ fillStyle: '#000', strokeStyle: '#000' });
      const el = note.getSVGElement();
      if (el) {
        el.querySelectorAll('path, circle, rect').forEach(path => {
          (path as SVGElement).style.fill = '';
          (path as SVGElement).style.stroke = '';
        });
      }
    });
  }

  private calculateMeasures(notes: NoteEvent[]): number {
    const totalBeats = notes.reduce((sum, n) => sum + this.durationToBeats(n.duration), 0);
    return Math.ceil(totalBeats / this.options.timeSignature[0]);
  }

  private durationToBeats(dur: string): number {
    switch (dur) {
      case 'w': return 4;
      case 'h': return 2;
      case 'q': return 1;
      case '8': return 0.5;
      case '16': return 0.25;
      default: return 1;
    }
  }

  destroy(): void {
    this.container.innerHTML = '';
    this.renderedNotes = [];
  }
}

