import type { Module } from '../types';

const module09: Module = {
  id: 9,
  title: 'Building Fluency',
  description: 'Advanced scales, inversions, complex rhythms, and sight-reading',
  lessons: [
    {
      id: '9.1',
      title: 'D Major Scale',
      steps: [
        {
          type: 'instruction',
          title: 'Introducing D Major',
          content: `
            <p>The <strong>D major scale</strong> has <strong>two sharps</strong>: F# and C#. The notes are:</p>
            <ul>
              <li><strong>D - E - F# - G - A - B - C# - D</strong></li>
            </ul>
            <p>The right hand fingering for D major is: <strong>1-2-3-1-2-3-4-5</strong>. Notice the thumb tuck after finger 3 on F# — your thumb crosses under to land on G.</p>
            <p>Remember to play the black keys (F# and C#) with the same curved finger shape you use for white keys.</p>
          `,
          diagram: 'keyboard-highlight',
          diagramData: {
            highlightNotes: ['D4', 'E4', 'F#4', 'G4', 'A4', 'B4', 'C#5', 'D5'],
            viewportStart: 'C4',
            viewportEnd: 'E5',
            fingerNumbers: { 'D4': 1, 'E4': 2, 'F#4': 3, 'G4': 1, 'A4': 2, 'B4': 3, 'C#5': 4, 'D5': 5 },
          },
        },
        {
          type: 'demo',
          title: 'Hear D Major Scale',
          description: 'Listen to the D major scale ascending and descending. Pay attention to how the two sharps (F# and C#) give this key its bright, warm character.',
          notes: [
            { keys: ['d/4'], duration: 'q', finger: [1] },
            { keys: ['e/4'], duration: 'q', finger: [2] },
            { keys: ['f#/4'], duration: 'q', finger: [3] },
            { keys: ['g/4'], duration: 'q', finger: [1] },
            { keys: ['a/4'], duration: 'q', finger: [2] },
            { keys: ['b/4'], duration: 'q', finger: [3] },
            { keys: ['c#/5'], duration: 'q', finger: [4] },
            { keys: ['d/5'], duration: 'q', finger: [5] },
            { keys: ['d/5'], duration: 'q', finger: [5] },
            { keys: ['c#/5'], duration: 'q', finger: [4] },
            { keys: ['b/4'], duration: 'q', finger: [3] },
            { keys: ['a/4'], duration: 'q', finger: [2] },
            { keys: ['g/4'], duration: 'q', finger: [1] },
            { keys: ['f#/4'], duration: 'q', finger: [3] },
            { keys: ['e/4'], duration: 'q', finger: [2] },
            { keys: ['d/4'], duration: 'q', finger: [1] },
          ],
          bpm: 80,
          timeSignature: [4, 4],
          clef: 'treble',
        },
        {
          type: 'exercise',
          title: 'Play D Major Scale',
          instructions: 'Play the D major scale ascending: D-E-F#-G-A-B-C#-D. Use fingering 1-2-3-1-2-3-4-5. Focus on the smooth thumb tuck under finger 3 when moving from F# to G.',
          notes: [
            { keys: ['d/4'], duration: 'q', finger: [1] },
            { keys: ['e/4'], duration: 'q', finger: [2] },
            { keys: ['f#/4'], duration: 'q', finger: [3] },
            { keys: ['g/4'], duration: 'q', finger: [1] },
            { keys: ['a/4'], duration: 'q', finger: [2] },
            { keys: ['b/4'], duration: 'q', finger: [3] },
            { keys: ['c#/5'], duration: 'q', finger: [4] },
            { keys: ['d/5'], duration: 'w', finger: [5] },
          ],
          clef: 'treble',
          bpm: 72,
          timeSignature: [4, 4],
          fingerNumbers: { 'D4': 1, 'E4': 2, 'F#4': 3, 'G4': 1, 'A4': 2, 'B4': 3, 'C#5': 4, 'D5': 5 },
          handsRequired: 'right',
          requireTiming: false,
        },
        {
          type: 'exercise',
          title: 'D Major Scale Up and Down',
          instructions: 'Now play the full D major scale ascending and descending. Keep a steady tempo and smooth thumb crossings.',
          notes: [
            { keys: ['d/4'], duration: 'q', finger: [1] },
            { keys: ['e/4'], duration: 'q', finger: [2] },
            { keys: ['f#/4'], duration: 'q', finger: [3] },
            { keys: ['g/4'], duration: 'q', finger: [1] },
            { keys: ['a/4'], duration: 'q', finger: [2] },
            { keys: ['b/4'], duration: 'q', finger: [3] },
            { keys: ['c#/5'], duration: 'q', finger: [4] },
            { keys: ['d/5'], duration: 'q', finger: [5] },
            { keys: ['d/5'], duration: 'q', finger: [5] },
            { keys: ['c#/5'], duration: 'q', finger: [4] },
            { keys: ['b/4'], duration: 'q', finger: [3] },
            { keys: ['a/4'], duration: 'q', finger: [2] },
            { keys: ['g/4'], duration: 'q', finger: [1] },
            { keys: ['f#/4'], duration: 'q', finger: [3] },
            { keys: ['e/4'], duration: 'q', finger: [2] },
            { keys: ['d/4'], duration: 'w', finger: [1] },
          ],
          clef: 'treble',
          bpm: 80,
          timeSignature: [4, 4],
          fingerNumbers: { 'D4': 1, 'E4': 2, 'F#4': 3, 'G4': 1, 'A4': 2, 'B4': 3, 'C#5': 4, 'D5': 5 },
          handsRequired: 'right',
          requireTiming: false,
        },
      ],
    },
    {
      id: '9.2',
      title: 'A Major Scale',
      steps: [
        {
          type: 'instruction',
          title: 'Introducing A Major',
          content: `
            <p>The <strong>A major scale</strong> has <strong>three sharps</strong>: F#, C#, and G#. The notes are:</p>
            <ul>
              <li><strong>A - B - C# - D - E - F# - G# - A</strong></li>
            </ul>
            <p>The right hand fingering is the same pattern: <strong>1-2-3-1-2-3-4-5</strong>. The thumb tuck happens after C# (finger 3), crossing under to D.</p>
            <p>Starting on A3 (below Middle C), you will cross through Middle C territory as you ascend.</p>
          `,
          diagram: 'keyboard-highlight',
          diagramData: {
            highlightNotes: ['A3', 'B3', 'C#4', 'D4', 'E4', 'F#4', 'G#4', 'A4'],
            viewportStart: 'A3',
            viewportEnd: 'C5',
            fingerNumbers: { 'A3': 1, 'B3': 2, 'C#4': 3, 'D4': 1, 'E4': 2, 'F#4': 3, 'G#4': 4, 'A4': 5 },
          },
        },
        {
          type: 'demo',
          title: 'Hear A Major Scale',
          description: 'Listen to the A major scale. With three sharps, it has a bright, open sound often used in pop and rock music.',
          notes: [
            { keys: ['a/3'], duration: 'q', finger: [1] },
            { keys: ['b/3'], duration: 'q', finger: [2] },
            { keys: ['c#/4'], duration: 'q', finger: [3] },
            { keys: ['d/4'], duration: 'q', finger: [1] },
            { keys: ['e/4'], duration: 'q', finger: [2] },
            { keys: ['f#/4'], duration: 'q', finger: [3] },
            { keys: ['g#/4'], duration: 'q', finger: [4] },
            { keys: ['a/4'], duration: 'q', finger: [5] },
            { keys: ['a/4'], duration: 'q', finger: [5] },
            { keys: ['g#/4'], duration: 'q', finger: [4] },
            { keys: ['f#/4'], duration: 'q', finger: [3] },
            { keys: ['e/4'], duration: 'q', finger: [2] },
            { keys: ['d/4'], duration: 'q', finger: [1] },
            { keys: ['c#/4'], duration: 'q', finger: [3] },
            { keys: ['b/3'], duration: 'q', finger: [2] },
            { keys: ['a/3'], duration: 'q', finger: [1] },
          ],
          bpm: 80,
          timeSignature: [4, 4],
          clef: 'treble',
        },
        {
          type: 'exercise',
          title: 'Play A Major Scale',
          instructions: 'Play the A major scale ascending and descending. Fingering: 1-2-3-1-2-3-4-5. Three sharps: F#, C#, G#. Make sure your thumb tuck after C# is smooth.',
          notes: [
            { keys: ['a/3'], duration: 'q', finger: [1] },
            { keys: ['b/3'], duration: 'q', finger: [2] },
            { keys: ['c#/4'], duration: 'q', finger: [3] },
            { keys: ['d/4'], duration: 'q', finger: [1] },
            { keys: ['e/4'], duration: 'q', finger: [2] },
            { keys: ['f#/4'], duration: 'q', finger: [3] },
            { keys: ['g#/4'], duration: 'q', finger: [4] },
            { keys: ['a/4'], duration: 'q', finger: [5] },
            { keys: ['a/4'], duration: 'q', finger: [5] },
            { keys: ['g#/4'], duration: 'q', finger: [4] },
            { keys: ['f#/4'], duration: 'q', finger: [3] },
            { keys: ['e/4'], duration: 'q', finger: [2] },
            { keys: ['d/4'], duration: 'q', finger: [1] },
            { keys: ['c#/4'], duration: 'q', finger: [3] },
            { keys: ['b/3'], duration: 'q', finger: [2] },
            { keys: ['a/3'], duration: 'w', finger: [1] },
          ],
          clef: 'treble',
          bpm: 76,
          timeSignature: [4, 4],
          fingerNumbers: { 'A3': 1, 'B3': 2, 'C#4': 3, 'D4': 1, 'E4': 2, 'F#4': 3, 'G#4': 4, 'A4': 5 },
          handsRequired: 'right',
          requireTiming: false,
        },
      ],
    },
    {
      id: '9.3',
      title: 'Bb Major Scale',
      steps: [
        {
          type: 'instruction',
          title: 'Introducing Bb Major',
          content: `
            <p>The <strong>Bb major scale</strong> has <strong>two flats</strong>: Bb and Eb. The notes are:</p>
            <ul>
              <li><strong>Bb - C - D - Eb - F - G - A - Bb</strong></li>
            </ul>
            <p>The right hand fingering for Bb major is unique: <strong>2-1-2-3-1-2-3-4</strong>. You start with finger 2 on Bb, then thumb on C. This avoids placing the thumb on a black key.</p>
            <p>Bb is the black key just to the left of B. Eb is the black key just to the left of E.</p>
          `,
          diagram: 'keyboard-highlight',
          diagramData: {
            highlightNotes: ['Bb3', 'C4', 'D4', 'Eb4', 'F4', 'G4', 'A4', 'Bb4'],
            viewportStart: 'A3',
            viewportEnd: 'C5',
            fingerNumbers: { 'Bb3': 2, 'C4': 1, 'D4': 2, 'Eb4': 3, 'F4': 1, 'G4': 2, 'A4': 3, 'Bb4': 4 },
          },
        },
        {
          type: 'demo',
          title: 'Hear Bb Major Scale',
          description: 'Listen to the Bb major scale. This key is very common in jazz and band music, with a warm, mellow character.',
          notes: [
            { keys: ['bb/3'], duration: 'q', finger: [2] },
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['eb/4'], duration: 'q', finger: [3] },
            { keys: ['f/4'], duration: 'q', finger: [1] },
            { keys: ['g/4'], duration: 'q', finger: [2] },
            { keys: ['a/4'], duration: 'q', finger: [3] },
            { keys: ['bb/4'], duration: 'q', finger: [4] },
            { keys: ['bb/4'], duration: 'q', finger: [4] },
            { keys: ['a/4'], duration: 'q', finger: [3] },
            { keys: ['g/4'], duration: 'q', finger: [2] },
            { keys: ['f/4'], duration: 'q', finger: [1] },
            { keys: ['eb/4'], duration: 'q', finger: [3] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['bb/3'], duration: 'q', finger: [2] },
          ],
          bpm: 76,
          timeSignature: [4, 4],
          clef: 'treble',
        },
        {
          type: 'exercise',
          title: 'Play Bb Major Scale',
          instructions: 'Play the Bb major scale ascending and descending. Fingering: 2-1-2-3-1-2-3-4. Notice the unusual start on finger 2. Take it slowly — the thumb tucks are in different places than other scales.',
          notes: [
            { keys: ['bb/3'], duration: 'q', finger: [2] },
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['eb/4'], duration: 'q', finger: [3] },
            { keys: ['f/4'], duration: 'q', finger: [1] },
            { keys: ['g/4'], duration: 'q', finger: [2] },
            { keys: ['a/4'], duration: 'q', finger: [3] },
            { keys: ['bb/4'], duration: 'q', finger: [4] },
            { keys: ['bb/4'], duration: 'q', finger: [4] },
            { keys: ['a/4'], duration: 'q', finger: [3] },
            { keys: ['g/4'], duration: 'q', finger: [2] },
            { keys: ['f/4'], duration: 'q', finger: [1] },
            { keys: ['eb/4'], duration: 'q', finger: [3] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['bb/3'], duration: 'w', finger: [2] },
          ],
          clef: 'treble',
          bpm: 72,
          timeSignature: [4, 4],
          fingerNumbers: { 'Bb3': 2, 'C4': 1, 'D4': 2, 'Eb4': 3, 'F4': 1, 'G4': 2, 'A4': 3, 'Bb4': 4 },
          handsRequired: 'right',
          requireTiming: false,
        },
      ],
    },
    {
      id: '9.4',
      title: 'Chord Inversions: First Inversion',
      steps: [
        {
          type: 'instruction',
          title: 'What Are Chord Inversions?',
          content: `
            <p>So far, you have played chords in <strong>root position</strong> — where the root note is on the bottom. For example, a C major chord in root position is <strong>C-E-G</strong>.</p>
            <p>An <strong>inversion</strong> rearranges the notes so a different note is on the bottom:</p>
            <ul>
              <li><strong>Root position:</strong> C - E - G (C on bottom)</li>
              <li><strong>First inversion:</strong> E - G - C (E on bottom)</li>
              <li><strong>Second inversion:</strong> G - C - E (G on bottom)</li>
            </ul>
            <p>Inversions let you move smoothly between chords without jumping around the keyboard. They are essential for fluid playing.</p>
          `,
        },
        {
          type: 'instruction',
          title: 'First Inversion',
          content: `
            <p>In <strong>first inversion</strong>, take the bottom note of the root position chord and move it up one octave:</p>
            <ul>
              <li>C major root position: <strong>C - E - G</strong></li>
              <li>C major first inversion: <strong>E - G - C</strong> (the C moved up)</li>
            </ul>
            <p>Play this with your right hand using fingers <strong>1-2-5</strong> (thumb on E, index on G, pinky on C).</p>
            <p>Notice how the chord sounds the same but feels different on the keyboard. The spacing between notes changes.</p>
          `,
          diagram: 'keyboard-highlight',
          diagramData: {
            highlightNotes: ['E4', 'G4', 'C5'],
            viewportStart: 'C4',
            viewportEnd: 'E5',
            fingerNumbers: { 'E4': 1, 'G4': 2, 'C5': 5 },
          },
        },
        {
          type: 'demo',
          title: 'Hear Root Position vs First Inversion',
          description: 'Listen to C major in root position (C-E-G) followed by first inversion (E-G-C). Same chord, different voicing.',
          notes: [
            { keys: ['c/4', 'e/4', 'g/4'], duration: 'h', finger: [1, 3, 5] },
            { keys: ['e/4', 'g/4', 'c/5'], duration: 'h', finger: [1, 2, 5] },
            { keys: ['c/4', 'e/4', 'g/4'], duration: 'h', finger: [1, 3, 5] },
            { keys: ['e/4', 'g/4', 'c/5'], duration: 'h', finger: [1, 2, 5] },
          ],
          bpm: 60,
          timeSignature: [4, 4],
          clef: 'treble',
        },
        {
          type: 'exercise',
          title: 'Play C Major First Inversion',
          instructions: 'Play C major in root position (C-E-G) then first inversion (E-G-C), alternating. Root position: fingers 1-3-5. First inversion: fingers 1-2-5.',
          notes: [
            { keys: ['c/4', 'e/4', 'g/4'], duration: 'h', finger: [1, 3, 5] },
            { keys: ['e/4', 'g/4', 'c/5'], duration: 'h', finger: [1, 2, 5] },
            { keys: ['c/4', 'e/4', 'g/4'], duration: 'h', finger: [1, 3, 5] },
            { keys: ['e/4', 'g/4', 'c/5'], duration: 'h', finger: [1, 2, 5] },
            { keys: ['c/4', 'e/4', 'g/4'], duration: 'h', finger: [1, 3, 5] },
            { keys: ['e/4', 'g/4', 'c/5'], duration: 'h', finger: [1, 2, 5] },
          ],
          clef: 'treble',
          bpm: 60,
          timeSignature: [4, 4],
          fingerNumbers: { 'C4': 1, 'E4': 1, 'G4': 2, 'C5': 5 },
          handsRequired: 'right',
          requireTiming: false,
        },
        {
          type: 'exercise',
          title: 'First Inversions: C, F, and G',
          instructions: 'Play the first inversion of C major (E-G-C), F major (A-C-F), and G major (B-D-G). Use fingers 1-2-5 for each.',
          notes: [
            { keys: ['e/4', 'g/4', 'c/5'], duration: 'h', finger: [1, 2, 5] },
            { keys: ['e/4', 'g/4', 'c/5'], duration: 'h', finger: [1, 2, 5] },
            { keys: ['a/4', 'c/5', 'f/5'], duration: 'h', finger: [1, 2, 5] },
            { keys: ['a/4', 'c/5', 'f/5'], duration: 'h', finger: [1, 2, 5] },
            { keys: ['b/4', 'd/5', 'g/5'], duration: 'h', finger: [1, 2, 5] },
            { keys: ['b/4', 'd/5', 'g/5'], duration: 'h', finger: [1, 2, 5] },
          ],
          clef: 'treble',
          bpm: 60,
          timeSignature: [4, 4],
          fingerNumbers: { 'E4': 1, 'G4': 2, 'C5': 5, 'A4': 1, 'B4': 1, 'D5': 2, 'F5': 5, 'G5': 5 },
          handsRequired: 'right',
          requireTiming: false,
        },
      ],
    },
    {
      id: '9.5',
      title: 'Chord Inversions: Second Inversion',
      steps: [
        {
          type: 'instruction',
          title: 'Second Inversion',
          content: `
            <p>In <strong>second inversion</strong>, the fifth of the chord is on the bottom:</p>
            <ul>
              <li>C major root position: <strong>C - E - G</strong></li>
              <li>C major first inversion: <strong>E - G - C</strong></li>
              <li>C major second inversion: <strong>G - C - E</strong></li>
            </ul>
            <p>Play second inversion with fingers <strong>1-3-5</strong> (thumb on G, middle on C, pinky on E).</p>
            <p>Now you know all three positions of a triad. Being able to move between them freely is a key skill for smooth chord playing.</p>
          `,
          diagram: 'keyboard-highlight',
          diagramData: {
            highlightNotes: ['G4', 'C5', 'E5'],
            viewportStart: 'C4',
            viewportEnd: 'F5',
            fingerNumbers: { 'G4': 1, 'C5': 3, 'E5': 5 },
          },
        },
        {
          type: 'demo',
          title: 'Hear All Three Positions',
          description: 'Listen to C major in root position, first inversion, then second inversion. Same three notes, three different arrangements.',
          notes: [
            { keys: ['c/4', 'e/4', 'g/4'], duration: 'h', finger: [1, 3, 5] },
            { keys: ['e/4', 'g/4', 'c/5'], duration: 'h', finger: [1, 2, 5] },
            { keys: ['g/4', 'c/5', 'e/5'], duration: 'h', finger: [1, 3, 5] },
            { keys: ['c/5', 'e/5', 'g/5'], duration: 'h', finger: [1, 3, 5] },
          ],
          bpm: 60,
          timeSignature: [4, 4],
          clef: 'treble',
        },
        {
          type: 'exercise',
          title: 'Play C Major Through All Inversions',
          instructions: 'Play C major in root position (C-E-G), first inversion (E-G-C), second inversion (G-C-E), and then root position one octave up (C-E-G). This walks the chord up the keyboard.',
          notes: [
            { keys: ['c/4', 'e/4', 'g/4'], duration: 'h', finger: [1, 3, 5] },
            { keys: ['e/4', 'g/4', 'c/5'], duration: 'h', finger: [1, 2, 5] },
            { keys: ['g/4', 'c/5', 'e/5'], duration: 'h', finger: [1, 3, 5] },
            { keys: ['c/5', 'e/5', 'g/5'], duration: 'h', finger: [1, 3, 5] },
            { keys: ['g/4', 'c/5', 'e/5'], duration: 'h', finger: [1, 3, 5] },
            { keys: ['e/4', 'g/4', 'c/5'], duration: 'h', finger: [1, 2, 5] },
            { keys: ['c/4', 'e/4', 'g/4'], duration: 'w', finger: [1, 3, 5] },
          ],
          clef: 'treble',
          bpm: 60,
          timeSignature: [4, 4],
          fingerNumbers: { 'C4': 1, 'E4': 1, 'G4': 1, 'C5': 1, 'E5': 5, 'G5': 5 },
          handsRequired: 'right',
          requireTiming: false,
        },
      ],
    },
    {
      id: '9.6',
      title: 'Syncopation',
      steps: [
        {
          type: 'instruction',
          title: 'What is Syncopation?',
          content: `
            <p><strong>Syncopation</strong> means accenting notes that fall on the <strong>off-beats</strong> — the "and" counts between the main beats.</p>
            <p>In 4/4 time, the main beats are 1, 2, 3, 4. The off-beats are the "ands":</p>
            <ul>
              <li><strong>1</strong> and <strong>2</strong> and <strong>3</strong> and <strong>4</strong> and</li>
            </ul>
            <p>When you accent the "ands" instead of the numbers, the rhythm feels pushed forward, creating a sense of swing and energy. Syncopation is fundamental to jazz, pop, rock, and many other styles.</p>
            <p>Try counting "1 AND 2 AND 3 AND 4 AND" out loud, emphasizing the AND. That is the feel of syncopation.</p>
          `,
        },
        {
          type: 'demo',
          title: 'Hear Syncopated vs Straight Rhythm',
          description: 'First you will hear a straight rhythm (notes on the beat), then a syncopated rhythm (notes on the off-beats). Listen for how the syncopated version feels more energetic.',
          notes: [
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['g/4'], duration: 'q', finger: [5] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['c/4'], duration: '8', finger: [1] },
            { keys: ['c/4'], duration: '8r', rest: true },
            { keys: ['e/4'], duration: '8', finger: [3] },
            { keys: ['e/4'], duration: '8r', rest: true },
            { keys: ['g/4'], duration: '8', finger: [5] },
            { keys: ['g/4'], duration: '8r', rest: true },
            { keys: ['e/4'], duration: '8', finger: [3] },
            { keys: ['e/4'], duration: '8r', rest: true },
          ],
          bpm: 80,
          timeSignature: [4, 4],
          clef: 'treble',
        },
        {
          type: 'exercise',
          title: 'Syncopation Exercise',
          instructions: 'Play this syncopated pattern on C, E, and G. Play short eighth notes on the off-beats. Count "1 AND 2 AND 3 AND 4 AND" and play on the ANDs.',
          notes: [
            { keys: ['c/4'], duration: '8r', rest: true },
            { keys: ['c/4'], duration: '8', finger: [1] },
            { keys: ['e/4'], duration: '8r', rest: true },
            { keys: ['e/4'], duration: '8', finger: [3] },
            { keys: ['g/4'], duration: '8r', rest: true },
            { keys: ['g/4'], duration: '8', finger: [5] },
            { keys: ['e/4'], duration: '8r', rest: true },
            { keys: ['e/4'], duration: '8', finger: [3] },
            { keys: ['c/4'], duration: '8r', rest: true },
            { keys: ['c/4'], duration: '8', finger: [1] },
            { keys: ['e/4'], duration: '8r', rest: true },
            { keys: ['e/4'], duration: '8', finger: [3] },
            { keys: ['g/4'], duration: '8r', rest: true },
            { keys: ['g/4'], duration: '8', finger: [5] },
            { keys: ['c/5'], duration: '8r', rest: true },
            { keys: ['c/5'], duration: '8', finger: [5] },
          ],
          clef: 'treble',
          bpm: 72,
          timeSignature: [4, 4],
          fingerNumbers: { 'C4': 1, 'E4': 3, 'G4': 5, 'C5': 5 },
          handsRequired: 'right',
          requireTiming: false,
        },
      ],
    },
    {
      id: '9.7',
      title: 'Hands Together: Parallel Motion',
      steps: [
        {
          type: 'instruction',
          title: 'Playing Hands Together',
          content: `
            <p>One of the biggest milestones in piano is playing with <strong>both hands at the same time</strong>. We will start with <strong>parallel motion</strong> — both hands play the same notes, moving in the same direction.</p>
            <p>In parallel motion with the C major scale:</p>
            <ul>
              <li>Right hand plays C4-D4-E4-F4-G4 going up</li>
              <li>Left hand plays C3-D3-E3-F3-G3 going up at the same time</li>
            </ul>
            <p>Both hands move up together, one octave apart. Start very slowly. The key is to play each pair of notes at exactly the same time.</p>
          `,
        },
        {
          type: 'demo',
          title: 'Hear Parallel Motion',
          description: 'Listen to both hands playing the C scale simultaneously, one octave apart. Each note sounds as a pair.',
          notes: [
            { keys: ['c/3', 'c/4'], duration: 'q', finger: [5, 1] },
            { keys: ['d/3', 'd/4'], duration: 'q', finger: [4, 2] },
            { keys: ['e/3', 'e/4'], duration: 'q', finger: [3, 3] },
            { keys: ['f/3', 'f/4'], duration: 'q', finger: [2, 4] },
            { keys: ['g/3', 'g/4'], duration: 'q', finger: [1, 5] },
            { keys: ['f/3', 'f/4'], duration: 'q', finger: [2, 4] },
            { keys: ['e/3', 'e/4'], duration: 'q', finger: [3, 3] },
            { keys: ['d/3', 'd/4'], duration: 'q', finger: [4, 2] },
            { keys: ['c/3', 'c/4'], duration: 'w', finger: [5, 1] },
          ],
          bpm: 60,
          timeSignature: [4, 4],
          clef: 'grand',
        },
        {
          type: 'exercise',
          title: 'Parallel Motion: C Scale',
          instructions: 'Play the C five-finger pattern with both hands simultaneously. Right hand: C4 to G4 (fingers 1-5). Left hand: C3 to G3 (fingers 5-1). Go up and then come back down. Play very slowly and focus on timing both hands together.',
          notes: [
            { keys: ['c/3', 'c/4'], duration: 'h', finger: [5, 1] },
            { keys: ['d/3', 'd/4'], duration: 'h', finger: [4, 2] },
            { keys: ['e/3', 'e/4'], duration: 'h', finger: [3, 3] },
            { keys: ['f/3', 'f/4'], duration: 'h', finger: [2, 4] },
            { keys: ['g/3', 'g/4'], duration: 'h', finger: [1, 5] },
            { keys: ['f/3', 'f/4'], duration: 'h', finger: [2, 4] },
            { keys: ['e/3', 'e/4'], duration: 'h', finger: [3, 3] },
            { keys: ['d/3', 'd/4'], duration: 'h', finger: [4, 2] },
            { keys: ['c/3', 'c/4'], duration: 'w', finger: [5, 1] },
          ],
          clef: 'grand',
          bpm: 60,
          timeSignature: [4, 4],
          fingerNumbers: { 'C3': 5, 'D3': 4, 'E3': 3, 'F3': 2, 'G3': 1, 'C4': 1, 'D4': 2, 'E4': 3, 'F4': 4, 'G4': 5 },
          handsRequired: 'both',
          requireTiming: false,
        },
      ],
    },
    {
      id: '9.8',
      title: 'Hands Together: Contrary Motion',
      steps: [
        {
          type: 'instruction',
          title: 'What is Contrary Motion?',
          content: `
            <p><strong>Contrary motion</strong> means the hands move in <strong>opposite directions</strong>. When the right hand goes up, the left hand goes down, and vice versa.</p>
            <p>Starting from Middle C with both thumbs:</p>
            <ul>
              <li>Right hand goes <strong>up</strong>: C4-D4-E4-F4-G4</li>
              <li>Left hand goes <strong>down</strong>: C4-B3-A3-G3-F3</li>
            </ul>
            <p>The hands mirror each other outward from the center. Contrary motion is a beautiful musical effect and an excellent coordination exercise.</p>
          `,
        },
        {
          type: 'demo',
          title: 'Hear Contrary Motion',
          description: 'Listen to both hands starting on Middle C and moving outward in opposite directions, then returning to center.',
          notes: [
            { keys: ['c/4', 'c/4'], duration: 'h', finger: [1, 1] },
            { keys: ['b/3', 'd/4'], duration: 'h', finger: [2, 2] },
            { keys: ['a/3', 'e/4'], duration: 'h', finger: [3, 3] },
            { keys: ['g/3', 'f/4'], duration: 'h', finger: [4, 4] },
            { keys: ['f/3', 'g/4'], duration: 'h', finger: [5, 5] },
            { keys: ['g/3', 'f/4'], duration: 'h', finger: [4, 4] },
            { keys: ['a/3', 'e/4'], duration: 'h', finger: [3, 3] },
            { keys: ['b/3', 'd/4'], duration: 'h', finger: [2, 2] },
            { keys: ['c/4', 'c/4'], duration: 'w', finger: [1, 1] },
          ],
          bpm: 60,
          timeSignature: [4, 4],
          clef: 'grand',
        },
        {
          type: 'exercise',
          title: 'Contrary Motion from Middle C',
          instructions: 'Place both thumbs on Middle C. Right hand moves up (C-D-E-F-G) while left hand moves down (C-B-A-G-F) simultaneously. Then reverse back to C. Go slowly — this takes coordination!',
          notes: [
            { keys: ['c/4', 'c/4'], duration: 'h', finger: [1, 1] },
            { keys: ['b/3', 'd/4'], duration: 'h', finger: [2, 2] },
            { keys: ['a/3', 'e/4'], duration: 'h', finger: [3, 3] },
            { keys: ['g/3', 'f/4'], duration: 'h', finger: [4, 4] },
            { keys: ['f/3', 'g/4'], duration: 'h', finger: [5, 5] },
            { keys: ['g/3', 'f/4'], duration: 'h', finger: [4, 4] },
            { keys: ['a/3', 'e/4'], duration: 'h', finger: [3, 3] },
            { keys: ['b/3', 'd/4'], duration: 'h', finger: [2, 2] },
            { keys: ['c/4', 'c/4'], duration: 'w', finger: [1, 1] },
          ],
          clef: 'grand',
          bpm: 60,
          timeSignature: [4, 4],
          fingerNumbers: { 'C4': 1, 'D4': 2, 'E4': 3, 'F4': 4, 'G4': 5, 'B3': 2, 'A3': 3, 'G3': 4, 'F3': 5 },
          handsRequired: 'both',
          requireTiming: false,
        },
      ],
    },
    {
      id: '9.9',
      title: 'Sight-Reading Practice',
      steps: [
        {
          type: 'instruction',
          title: 'Introduction to Sight-Reading',
          content: `
            <p><strong>Sight-reading</strong> is the ability to play a piece of music you have never seen before. It is one of the most valuable skills a musician can develop.</p>
            <p>Tips for good sight-reading:</p>
            <ul>
              <li><strong>Scan first:</strong> Look at the key signature, time signature, and general shape before you play</li>
              <li><strong>Look ahead:</strong> While playing one note, your eyes should already be on the next</li>
              <li><strong>Keep going:</strong> If you make a mistake, do not stop — keep the rhythm going</li>
              <li><strong>Start slow:</strong> Choose a tempo you can maintain without stopping</li>
            </ul>
            <p>The following short pieces are meant to be played at first sight. Try not to practice them — just read and play!</p>
          `,
        },
        {
          type: 'exercise',
          title: 'Sight-Reading: Piece 1',
          instructions: 'Scan this short piece quickly, then play it through without stopping. It uses C position (C-D-E-F-G) with quarter and half notes. Do not practice it first — just read and go!',
          notes: [
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['f/4'], duration: 'q', finger: [4] },
            { keys: ['g/4'], duration: 'h', finger: [5] },
            { keys: ['f/4'], duration: 'q', finger: [4] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['d/4'], duration: 'h', finger: [2] },
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['f/4'], duration: 'q', finger: [4] },
            { keys: ['g/4'], duration: 'q', finger: [5] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['c/4'], duration: 'h', finger: [1] },
          ],
          clef: 'treble',
          bpm: 72,
          timeSignature: [4, 4],
          fingerNumbers: { 'C4': 1, 'D4': 2, 'E4': 3, 'F4': 4, 'G4': 5 },
          handsRequired: 'right',
          requireTiming: false,
        },
        {
          type: 'exercise',
          title: 'Sight-Reading: Piece 2',
          instructions: 'Another short piece to sight-read. This one uses the G position (G-A-B-C-D). Scan it, then play straight through.',
          notes: [
            { keys: ['g/4'], duration: 'q', finger: [1] },
            { keys: ['a/4'], duration: 'q', finger: [2] },
            { keys: ['b/4'], duration: 'q', finger: [3] },
            { keys: ['a/4'], duration: 'q', finger: [2] },
            { keys: ['g/4'], duration: 'h', finger: [1] },
            { keys: ['b/4'], duration: 'h', finger: [3] },
            { keys: ['c/5'], duration: 'q', finger: [4] },
            { keys: ['d/5'], duration: 'q', finger: [5] },
            { keys: ['c/5'], duration: 'q', finger: [4] },
            { keys: ['b/4'], duration: 'q', finger: [3] },
            { keys: ['a/4'], duration: 'q', finger: [2] },
            { keys: ['b/4'], duration: 'q', finger: [3] },
            { keys: ['g/4'], duration: 'w', finger: [1] },
          ],
          clef: 'treble',
          bpm: 76,
          timeSignature: [4, 4],
          fingerNumbers: { 'G4': 1, 'A4': 2, 'B4': 3, 'C5': 4, 'D5': 5 },
          handsRequired: 'right',
          requireTiming: false,
        },
        {
          type: 'exercise',
          title: 'Sight-Reading: Piece 3 (Both Hands)',
          instructions: 'This short piece uses both hands. The right hand has a simple melody while the left hand plays whole notes. Scan first, then play through without stopping.',
          notes: [
            { keys: ['c/3', 'e/4'], duration: 'q', finger: [5, 3] },
            { keys: ['c/3', 'f/4'], duration: 'q', finger: [5, 4] },
            { keys: ['c/3', 'g/4'], duration: 'q', finger: [5, 5] },
            { keys: ['c/3', 'f/4'], duration: 'q', finger: [5, 4] },
            { keys: ['g/3', 'e/4'], duration: 'q', finger: [1, 3] },
            { keys: ['g/3', 'd/4'], duration: 'q', finger: [1, 2] },
            { keys: ['g/3', 'c/4'], duration: 'h', finger: [1, 1] },
            { keys: ['f/3', 'd/4'], duration: 'q', finger: [2, 2] },
            { keys: ['f/3', 'e/4'], duration: 'q', finger: [2, 3] },
            { keys: ['f/3', 'f/4'], duration: 'h', finger: [2, 4] },
            { keys: ['c/3', 'e/4'], duration: 'q', finger: [5, 3] },
            { keys: ['c/3', 'd/4'], duration: 'q', finger: [5, 2] },
            { keys: ['c/3', 'c/4'], duration: 'h', finger: [5, 1] },
          ],
          clef: 'grand',
          bpm: 66,
          timeSignature: [4, 4],
          fingerNumbers: { 'C3': 5, 'F3': 2, 'G3': 1, 'C4': 1, 'D4': 2, 'E4': 3, 'F4': 4, 'G4': 5 },
          handsRequired: 'both',
          requireTiming: false,
        },
      ],
    },
    {
      id: '9.10',
      title: 'Module Review',
      steps: [
        {
          type: 'instruction',
          title: 'Module 9 Review',
          content: `
            <p>Outstanding work! In this module you learned:</p>
            <ul>
              <li><strong>D major scale</strong> — two sharps (F#, C#)</li>
              <li><strong>A major scale</strong> — three sharps (F#, C#, G#)</li>
              <li><strong>Bb major scale</strong> — two flats (Bb, Eb) with unique fingering</li>
              <li><strong>First inversion</strong> — moving the root up an octave (e.g., E-G-C)</li>
              <li><strong>Second inversion</strong> — the fifth on the bottom (e.g., G-C-E)</li>
              <li><strong>Syncopation</strong> — accenting off-beats</li>
              <li><strong>Parallel motion</strong> — both hands moving in the same direction</li>
              <li><strong>Contrary motion</strong> — hands moving in opposite directions</li>
              <li><strong>Sight-reading</strong> — playing unfamiliar music at first sight</li>
            </ul>
            <p>Now let's put these skills together in a combined exercise.</p>
          `,
        },
        {
          type: 'exercise',
          title: 'Fluency Review: D Major Scale',
          instructions: 'Play the D major scale ascending and descending at a comfortable tempo. Fingering: 1-2-3-1-2-3-4-5.',
          notes: [
            { keys: ['d/4'], duration: 'q', finger: [1] },
            { keys: ['e/4'], duration: 'q', finger: [2] },
            { keys: ['f#/4'], duration: 'q', finger: [3] },
            { keys: ['g/4'], duration: 'q', finger: [1] },
            { keys: ['a/4'], duration: 'q', finger: [2] },
            { keys: ['b/4'], duration: 'q', finger: [3] },
            { keys: ['c#/5'], duration: 'q', finger: [4] },
            { keys: ['d/5'], duration: 'q', finger: [5] },
            { keys: ['d/5'], duration: 'q', finger: [5] },
            { keys: ['c#/5'], duration: 'q', finger: [4] },
            { keys: ['b/4'], duration: 'q', finger: [3] },
            { keys: ['a/4'], duration: 'q', finger: [2] },
            { keys: ['g/4'], duration: 'q', finger: [1] },
            { keys: ['f#/4'], duration: 'q', finger: [3] },
            { keys: ['e/4'], duration: 'q', finger: [2] },
            { keys: ['d/4'], duration: 'w', finger: [1] },
          ],
          clef: 'treble',
          bpm: 88,
          timeSignature: [4, 4],
          fingerNumbers: { 'D4': 1, 'E4': 2, 'F#4': 3, 'G4': 1, 'A4': 2, 'B4': 3, 'C#5': 4, 'D5': 5 },
          handsRequired: 'right',
          requireTiming: false,
        },
        {
          type: 'exercise',
          title: 'Fluency Review: Inversions',
          instructions: 'Play C major chord through all three positions: root (C-E-G), first inversion (E-G-C), second inversion (G-C-E), and back down.',
          notes: [
            { keys: ['c/4', 'e/4', 'g/4'], duration: 'h', finger: [1, 3, 5] },
            { keys: ['e/4', 'g/4', 'c/5'], duration: 'h', finger: [1, 2, 5] },
            { keys: ['g/4', 'c/5', 'e/5'], duration: 'h', finger: [1, 3, 5] },
            { keys: ['e/4', 'g/4', 'c/5'], duration: 'h', finger: [1, 2, 5] },
            { keys: ['c/4', 'e/4', 'g/4'], duration: 'w', finger: [1, 3, 5] },
          ],
          clef: 'treble',
          bpm: 66,
          timeSignature: [4, 4],
          fingerNumbers: { 'C4': 1, 'E4': 1, 'G4': 1, 'C5': 5, 'E5': 5 },
          handsRequired: 'right',
          requireTiming: false,
        },
        {
          type: 'exercise',
          title: 'Fluency Review: Hands Together',
          instructions: 'Play the C five-finger pattern with both hands in parallel motion, then contrary motion. First go up and down together, then start on C and move outward.',
          notes: [
            { keys: ['c/3', 'c/4'], duration: 'h', finger: [5, 1] },
            { keys: ['d/3', 'd/4'], duration: 'h', finger: [4, 2] },
            { keys: ['e/3', 'e/4'], duration: 'h', finger: [3, 3] },
            { keys: ['f/3', 'f/4'], duration: 'h', finger: [2, 4] },
            { keys: ['g/3', 'g/4'], duration: 'h', finger: [1, 5] },
            { keys: ['f/3', 'f/4'], duration: 'h', finger: [2, 4] },
            { keys: ['e/3', 'e/4'], duration: 'h', finger: [3, 3] },
            { keys: ['d/3', 'd/4'], duration: 'h', finger: [4, 2] },
            { keys: ['c/3', 'c/4'], duration: 'w', finger: [5, 1] },
          ],
          clef: 'grand',
          bpm: 66,
          timeSignature: [4, 4],
          fingerNumbers: { 'C3': 5, 'D3': 4, 'E3': 3, 'F3': 2, 'G3': 1, 'C4': 1, 'D4': 2, 'E4': 3, 'F4': 4, 'G4': 5 },
          handsRequired: 'both',
          requireTiming: false,
        },
        {
          type: 'instruction',
          title: 'Ready for the Next Level!',
          content: `
            <p>You have made tremendous progress. You can now play scales in multiple keys, use chord inversions, handle syncopated rhythms, coordinate both hands, and sight-read simple pieces.</p>
            <p>In <strong>Module 10: Early Intermediate</strong>, you will explore minor scales, arpeggios, pedal technique, classical pieces like Bach's Minuet in G, and much more. You are well on your way to becoming a capable pianist!</p>
          `,
        },
      ],
    },
  ],
};

export default module09;
