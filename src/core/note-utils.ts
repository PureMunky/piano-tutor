const NOTE_NAMES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

// Piano key number (1-88) where A4=49
export function frequencyToMidi(freq: number): number {
  return Math.round(12 * Math.log2(freq / 440) + 69);
}

export function midiToFrequency(midi: number): number {
  return 440 * Math.pow(2, (midi - 69) / 12);
}

export function midiToNoteName(midi: number): string {
  const octave = Math.floor((midi - 12) / 12);
  const noteIndex = midi % 12;
  return `${NOTE_NAMES[noteIndex]}${octave}`;
}

export function noteNameToMidi(name: string): number {
  const match = name.match(/^([A-Ga-g])(#{0,2}|b{0,2})(\d)$/);
  if (!match) return -1;

  let note = match[1].toUpperCase();
  const accidental = match[2];
  const octave = parseInt(match[3]);

  let noteIndex = NOTE_NAMES.indexOf(note);
  if (noteIndex === -1) return -1;

  for (const char of accidental) {
    if (char === '#') noteIndex++;
    else if (char === 'b') noteIndex--;
  }

  noteIndex = ((noteIndex % 12) + 12) % 12;
  return (octave + 1) * 12 + noteIndex;
}

export function frequencyToNoteName(freq: number): string {
  const midi = frequencyToMidi(freq);
  return midiToNoteName(midi);
}

export function frequencyToCentsOff(freq: number): number {
  const midi = 12 * Math.log2(freq / 440) + 69;
  const nearestMidi = Math.round(midi);
  return (midi - nearestMidi) * 100;
}

// Convert VexFlow key format "c/4" to note name "C4"
export function vexKeyToNoteName(vexKey: string): string {
  const parts = vexKey.split('/');
  if (parts.length !== 2) return '';
  const note = parts[0].replace(/n$/, ''); // remove trailing 'n' if present
  const octave = parts[1];
  return `${note.toUpperCase()}${octave}`;
}

// Convert note name "C4" to VexFlow format "c/4"
export function noteNameToVexKey(name: string): string {
  const match = name.match(/^([A-Ga-g]#?b?)(\d)$/);
  if (!match) return '';
  return `${match[1].toLowerCase()}/${match[2]}`;
}

// Check if two note names refer to the same pitch (enharmonic equivalence)
export function notesEqual(a: string, b: string): boolean {
  return noteNameToMidi(a) === noteNameToMidi(b);
}

// Get display name without octave
export function noteDisplayName(name: string): string {
  return name.replace(/\d+$/, '');
}

// Is this note a black key?
export function isBlackKey(noteName: string): boolean {
  const display = noteDisplayName(noteName);
  return display.includes('#') || display.includes('b');
}

// Generate all 88 piano keys from A0 to C8
export function generatePianoKeys(): string[] {
  const keys: string[] = [];
  // Piano starts at A0 (MIDI 21) and ends at C8 (MIDI 108)
  for (let midi = 21; midi <= 108; midi++) {
    keys.push(midiToNoteName(midi));
  }
  return keys;
}
