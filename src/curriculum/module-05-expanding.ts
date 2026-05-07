import type { Module } from '../types';

const module05: Module = {
  id: 5,
  title: 'Expanding the Keyboard',
  description: 'G position, sharps, flats, eighth notes, and dynamics',
  lessons: [
    // ── Lesson 5.1: G Position (Right Hand) ──
    {
      id: '5.1',
      title: 'G Position (Right Hand)',
      steps: [
        {
          type: 'instruction',
          title: 'A New Hand Position',
          content: `
            <p>So far you've been playing in <strong>C position</strong> (thumb on Middle C). Now it's time to learn a second position: <strong>G position</strong>.</p>
            <p>Move your right hand so that your <strong>thumb (1)</strong> is on <strong>G4</strong> (the G above Middle C):</p>
            <ul>
              <li><strong>Thumb (1)</strong> on G4</li>
              <li><strong>Index (2)</strong> on A4</li>
              <li><strong>Middle (3)</strong> on B4</li>
              <li><strong>Ring (4)</strong> on C5</li>
              <li><strong>Pinky (5)</strong> on D5</li>
            </ul>
            <p>This gives you access to five new notes higher on the keyboard. Notice that G position starts where C position's pinky was!</p>
          `,
          diagram: 'keyboard-highlight',
          diagramData: {
            highlightNotes: ['G4', 'A4', 'B4', 'C5', 'D5'],
            viewportStart: 'C4',
            viewportEnd: 'C6',
            fingerNumbers: { 'G4': 1, 'A4': 2, 'B4': 3, 'C5': 4, 'D5': 5 },
          },
        },
        {
          type: 'demo',
          title: 'Hear the G Position Notes',
          description: 'Listen to the five notes of G position played ascending and descending.',
          notes: [
            { keys: ['g/4'], duration: 'q', finger: [1] },
            { keys: ['a/4'], duration: 'q', finger: [2] },
            { keys: ['b/4'], duration: 'q', finger: [3] },
            { keys: ['c/5'], duration: 'q', finger: [4] },
            { keys: ['d/5'], duration: 'q', finger: [5] },
            { keys: ['d/5'], duration: 'q', finger: [5] },
            { keys: ['c/5'], duration: 'q', finger: [4] },
            { keys: ['b/4'], duration: 'q', finger: [3] },
            { keys: ['a/4'], duration: 'q', finger: [2] },
            { keys: ['g/4'], duration: 'h', finger: [1] },
          ],
          bpm: 80,
          timeSignature: [4, 4],
          clef: 'treble',
        },
        {
          type: 'exercise',
          title: 'Play G Position Up and Down',
          instructions: 'Place your right hand in G position (thumb on G4). Play G-A-B-C-D then back down D-C-B-A-G. Keep your fingers curved and relaxed.',
          notes: [
            { keys: ['g/4'], duration: 'q', finger: [1] },
            { keys: ['a/4'], duration: 'q', finger: [2] },
            { keys: ['b/4'], duration: 'q', finger: [3] },
            { keys: ['c/5'], duration: 'q', finger: [4] },
            { keys: ['d/5'], duration: 'q', finger: [5] },
            { keys: ['d/5'], duration: 'q', finger: [5] },
            { keys: ['c/5'], duration: 'q', finger: [4] },
            { keys: ['b/4'], duration: 'q', finger: [3] },
            { keys: ['a/4'], duration: 'q', finger: [2] },
            { keys: ['g/4'], duration: 'h', finger: [1] },
          ],
          clef: 'treble',
          bpm: 72,
          timeSignature: [4, 4],
          fingerNumbers: { 'G4': 1, 'A4': 2, 'B4': 3, 'C5': 4, 'D5': 5 },
          handsRequired: 'right',
          requireTiming: false,
        },
      ],
    },

    // ── Lesson 5.2: G Position Exercise ──
    {
      id: '5.2',
      title: 'G Position Exercise',
      steps: [
        {
          type: 'instruction',
          title: 'Simple Melodies in G Position',
          content: `
            <p>Now that you know where the G position notes are, let's play some simple melodies using them.</p>
            <p>Remember your finger assignments:</p>
            <ul>
              <li><strong>G4</strong> = Thumb (1)</li>
              <li><strong>A4</strong> = Index (2)</li>
              <li><strong>B4</strong> = Middle (3)</li>
              <li><strong>C5</strong> = Ring (4)</li>
              <li><strong>D5</strong> = Pinky (5)</li>
            </ul>
            <p>These exercises will help your fingers get comfortable in this new position.</p>
          `,
        },
        {
          type: 'demo',
          title: 'A Short G Position Melody',
          description: 'Listen to this simple melody in G position. Notice how it steps up and skips down.',
          notes: [
            { keys: ['g/4'], duration: 'q', finger: [1] },
            { keys: ['a/4'], duration: 'q', finger: [2] },
            { keys: ['b/4'], duration: 'q', finger: [3] },
            { keys: ['a/4'], duration: 'q', finger: [2] },
            { keys: ['g/4'], duration: 'q', finger: [1] },
            { keys: ['b/4'], duration: 'q', finger: [3] },
            { keys: ['d/5'], duration: 'h', finger: [5] },
            { keys: ['c/5'], duration: 'q', finger: [4] },
            { keys: ['b/4'], duration: 'q', finger: [3] },
            { keys: ['a/4'], duration: 'q', finger: [2] },
            { keys: ['g/4'], duration: 'q', finger: [1] },
          ],
          bpm: 80,
          timeSignature: [4, 4],
          clef: 'treble',
        },
        {
          type: 'exercise',
          title: 'G Position Melody 1',
          instructions: 'Play this melody in G position: G-A-B-A-G-B-D, then C-B-A-G. Focus on smooth finger movement.',
          notes: [
            { keys: ['g/4'], duration: 'q', finger: [1] },
            { keys: ['a/4'], duration: 'q', finger: [2] },
            { keys: ['b/4'], duration: 'q', finger: [3] },
            { keys: ['a/4'], duration: 'q', finger: [2] },
            { keys: ['g/4'], duration: 'q', finger: [1] },
            { keys: ['b/4'], duration: 'q', finger: [3] },
            { keys: ['d/5'], duration: 'h', finger: [5] },
            { keys: ['c/5'], duration: 'q', finger: [4] },
            { keys: ['b/4'], duration: 'q', finger: [3] },
            { keys: ['a/4'], duration: 'q', finger: [2] },
            { keys: ['g/4'], duration: 'q', finger: [1] },
          ],
          clef: 'treble',
          bpm: 72,
          timeSignature: [4, 4],
          fingerNumbers: { 'G4': 1, 'A4': 2, 'B4': 3, 'C5': 4, 'D5': 5 },
          handsRequired: 'right',
          requireTiming: false,
        },
        {
          type: 'exercise',
          title: 'G Position Melody 2',
          instructions: 'Try this second melody. It uses more skips between notes. Take it slowly.',
          notes: [
            { keys: ['g/4'], duration: 'q', finger: [1] },
            { keys: ['b/4'], duration: 'q', finger: [3] },
            { keys: ['d/5'], duration: 'q', finger: [5] },
            { keys: ['c/5'], duration: 'q', finger: [4] },
            { keys: ['b/4'], duration: 'q', finger: [3] },
            { keys: ['a/4'], duration: 'q', finger: [2] },
            { keys: ['g/4'], duration: 'h', finger: [1] },
            { keys: ['a/4'], duration: 'q', finger: [2] },
            { keys: ['c/5'], duration: 'q', finger: [4] },
            { keys: ['b/4'], duration: 'q', finger: [3] },
            { keys: ['a/4'], duration: 'q', finger: [2] },
            { keys: ['g/4'], duration: 'w', finger: [1] },
          ],
          clef: 'treble',
          bpm: 72,
          timeSignature: [4, 4],
          fingerNumbers: { 'G4': 1, 'A4': 2, 'B4': 3, 'C5': 4, 'D5': 5 },
          handsRequired: 'right',
          requireTiming: false,
        },
      ],
    },

    // ── Lesson 5.3: Position Shifts ──
    {
      id: '5.3',
      title: 'Position Shifts',
      steps: [
        {
          type: 'instruction',
          title: 'Moving Between C and G Positions',
          content: `
            <p>Real music requires you to move your hand to different positions. The most common early shift is between <strong>C position</strong> and <strong>G position</strong>.</p>
            <ul>
              <li><strong>C position:</strong> Thumb on C4, fingers on C-D-E-F-G</li>
              <li><strong>G position:</strong> Thumb on G4, fingers on G-A-B-C5-D5</li>
            </ul>
            <p>To shift smoothly:</p>
            <ol>
              <li>Finish the last note in your current position</li>
              <li>Lift your hand gently and move it to the new position</li>
              <li>Place your thumb on the new starting note</li>
              <li>Keep your wrist relaxed during the shift</li>
            </ol>
            <p>The key is to practice until the shift feels natural and doesn't interrupt the music.</p>
          `,
          diagram: 'keyboard-highlight',
          diagramData: {
            highlightNotes: ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5', 'D5'],
            viewportStart: 'C4',
            viewportEnd: 'C6',
            fingerNumbers: { 'C4': 1, 'G4': 1 },
          },
        },
        {
          type: 'demo',
          title: 'Hear a Position Shift',
          description: 'Listen to a melody that starts in C position and shifts to G position midway.',
          notes: [
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['f/4'], duration: 'q', finger: [4] },
            { keys: ['g/4'], duration: 'h', finger: [5] },
            // shift to G position
            { keys: ['g/4'], duration: 'q', finger: [1] },
            { keys: ['a/4'], duration: 'q', finger: [2] },
            { keys: ['b/4'], duration: 'q', finger: [3] },
            { keys: ['c/5'], duration: 'q', finger: [4] },
            { keys: ['d/5'], duration: 'h', finger: [5] },
          ],
          bpm: 72,
          timeSignature: [4, 4],
          clef: 'treble',
        },
        {
          type: 'exercise',
          title: 'Practice the Shift',
          instructions: 'Start in C position and play C-D-E-F-G. Then shift your thumb to G and play G-A-B-C-D in G position. Take a brief pause at the shift if needed.',
          notes: [
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['f/4'], duration: 'q', finger: [4] },
            { keys: ['g/4'], duration: 'h', finger: [5] },
            { keys: ['g/4'], duration: 'q', finger: [1] },
            { keys: ['a/4'], duration: 'q', finger: [2] },
            { keys: ['b/4'], duration: 'q', finger: [3] },
            { keys: ['c/5'], duration: 'q', finger: [4] },
            { keys: ['d/5'], duration: 'h', finger: [5] },
          ],
          clef: 'treble',
          bpm: 66,
          timeSignature: [4, 4],
          fingerNumbers: { 'C4': 1, 'D4': 2, 'E4': 3, 'F4': 4, 'G4': 1, 'A4': 2, 'B4': 3, 'C5': 4, 'D5': 5 },
          handsRequired: 'right',
          requireTiming: false,
        },
        {
          type: 'exercise',
          title: 'Shift and Return',
          instructions: 'Play ascending in C position, shift to G position, then shift back to C position. This practices moving in both directions.',
          notes: [
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['g/4'], duration: 'h', finger: [5] },
            // shift to G position
            { keys: ['g/4'], duration: 'q', finger: [1] },
            { keys: ['b/4'], duration: 'q', finger: [3] },
            { keys: ['d/5'], duration: 'h', finger: [5] },
            // shift back to C position
            { keys: ['c/5'], duration: 'q', finger: [4] },
            { keys: ['b/4'], duration: 'q', finger: [3] },
            { keys: ['a/4'], duration: 'q', finger: [2] },
            { keys: ['g/4'], duration: 'q', finger: [1] },
            // back in C position
            { keys: ['g/4'], duration: 'q', finger: [5] },
            { keys: ['f/4'], duration: 'q', finger: [4] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['c/4'], duration: 'w', finger: [1] },
          ],
          clef: 'treble',
          bpm: 66,
          timeSignature: [4, 4],
          fingerNumbers: { 'C4': 1, 'D4': 2, 'E4': 3, 'F4': 4, 'G4': 5 },
          handsRequired: 'right',
          requireTiming: false,
        },
      ],
    },

    // ── Lesson 5.4: Intervals: Fourths ──
    {
      id: '5.4',
      title: 'Intervals: Fourths',
      steps: [
        {
          type: 'instruction',
          title: 'What is an Interval?',
          content: `
            <p>An <strong>interval</strong> is the distance between two notes. You've already been playing intervals without knowing it:</p>
            <ul>
              <li>C to D is a <strong>second</strong> (2 notes apart)</li>
              <li>C to E is a <strong>third</strong> (3 notes apart)</li>
            </ul>
            <p>Now let's learn <strong>fourths</strong> — notes that are 4 steps apart. Count up 4 letter names including the starting note:</p>
            <ul>
              <li><strong>C to F</strong> — C(1), D(2), E(3), F(4)</li>
              <li><strong>D to G</strong> — D(1), E(2), F(3), G(4)</li>
              <li><strong>E to A</strong> — E(1), F(2), G(3), A(4)</li>
            </ul>
            <p>Fourths have a strong, open sound. You'll hear them at the start of many well-known melodies.</p>
          `,
        },
        {
          type: 'demo',
          title: 'Hear Some Fourths',
          description: 'Listen to several fourth intervals. Notice the wide, open quality of the sound.',
          notes: [
            { keys: ['c/4'], duration: 'h', finger: [1] },
            { keys: ['f/4'], duration: 'h', finger: [4] },
            { keys: ['d/4'], duration: 'h', finger: [1] },
            { keys: ['g/4'], duration: 'h', finger: [4] },
            { keys: ['e/4'], duration: 'h', finger: [1] },
            { keys: ['a/4'], duration: 'h', finger: [4] },
          ],
          bpm: 72,
          timeSignature: [4, 4],
          clef: 'treble',
        },
        {
          type: 'exercise',
          title: 'Play Fourths',
          instructions: 'Play these fourth intervals in C position. Jump from C to F, D to G, then E to A (shift your hand up for A). Listen for the characteristic open sound.',
          notes: [
            { keys: ['c/4'], duration: 'h', finger: [1] },
            { keys: ['f/4'], duration: 'h', finger: [4] },
            { keys: ['d/4'], duration: 'h', finger: [2] },
            { keys: ['g/4'], duration: 'h', finger: [5] },
            { keys: ['f/4'], duration: 'h', finger: [4] },
            { keys: ['c/4'], duration: 'h', finger: [1] },
            { keys: ['g/4'], duration: 'h', finger: [5] },
            { keys: ['d/4'], duration: 'h', finger: [2] },
          ],
          clef: 'treble',
          bpm: 66,
          timeSignature: [4, 4],
          fingerNumbers: { 'C4': 1, 'D4': 2, 'E4': 3, 'F4': 4, 'G4': 5 },
          handsRequired: 'right',
          requireTiming: false,
        },
      ],
    },

    // ── Lesson 5.5: Intervals: Fifths ──
    {
      id: '5.5',
      title: 'Intervals: Fifths',
      steps: [
        {
          type: 'instruction',
          title: 'The Fifth Interval',
          content: `
            <p>A <strong>fifth</strong> is a distance of 5 note names. Fifths have a powerful, resonant sound:</p>
            <ul>
              <li><strong>C to G</strong> — C(1), D(2), E(3), F(4), G(5)</li>
              <li><strong>D to A</strong> — D(1), E(2), F(3), G(4), A(5)</li>
              <li><strong>G to D</strong> — G(1), A(2), B(3), C(4), D(5)</li>
            </ul>
            <p>In C position, a fifth spans your entire hand — thumb (1) to pinky (5). Fifths are the foundation of many chords and harmonies in music.</p>
          `,
        },
        {
          type: 'demo',
          title: 'Hear Some Fifths',
          description: 'Listen to fifth intervals. They sound strong and stable.',
          notes: [
            { keys: ['c/4'], duration: 'h', finger: [1] },
            { keys: ['g/4'], duration: 'h', finger: [5] },
            { keys: ['d/4'], duration: 'h', finger: [1] },
            { keys: ['a/4'], duration: 'h', finger: [5] },
            { keys: ['g/4'], duration: 'h', finger: [1] },
            { keys: ['d/5'], duration: 'h', finger: [5] },
          ],
          bpm: 72,
          timeSignature: [4, 4],
          clef: 'treble',
        },
        {
          type: 'exercise',
          title: 'Play Fifths',
          instructions: 'Play these fifths: C to G, then G to D (in G position). Each pair is a fifth. Listen to how stable they sound.',
          notes: [
            { keys: ['c/4'], duration: 'h', finger: [1] },
            { keys: ['g/4'], duration: 'h', finger: [5] },
            { keys: ['g/4'], duration: 'h', finger: [5] },
            { keys: ['c/4'], duration: 'h', finger: [1] },
            // G position
            { keys: ['g/4'], duration: 'h', finger: [1] },
            { keys: ['d/5'], duration: 'h', finger: [5] },
            { keys: ['d/5'], duration: 'h', finger: [5] },
            { keys: ['g/4'], duration: 'h', finger: [1] },
          ],
          clef: 'treble',
          bpm: 66,
          timeSignature: [4, 4],
          fingerNumbers: { 'C4': 1, 'G4': 5, 'D5': 5 },
          handsRequired: 'right',
          requireTiming: false,
        },
        {
          type: 'exercise',
          title: 'Interval Mix: Fourths and Fifths',
          instructions: 'This exercise mixes fourths and fifths. Can you hear the difference? Fourths sound open; fifths sound strong and wide.',
          notes: [
            { keys: ['c/4'], duration: 'h', finger: [1] },
            { keys: ['f/4'], duration: 'h', finger: [4] },   // 4th
            { keys: ['c/4'], duration: 'h', finger: [1] },
            { keys: ['g/4'], duration: 'h', finger: [5] },   // 5th
            { keys: ['d/4'], duration: 'h', finger: [2] },
            { keys: ['g/4'], duration: 'h', finger: [5] },   // 4th
            { keys: ['d/4'], duration: 'h', finger: [1] },
            { keys: ['a/4'], duration: 'h', finger: [5] },   // 5th
          ],
          clef: 'treble',
          bpm: 66,
          timeSignature: [4, 4],
          fingerNumbers: { 'C4': 1, 'D4': 2, 'F4': 4, 'G4': 5 },
          handsRequired: 'right',
          requireTiming: false,
        },
      ],
    },

    // ── Lesson 5.6: Sharps ──
    {
      id: '5.6',
      title: 'Sharps',
      steps: [
        {
          type: 'instruction',
          title: 'What is a Sharp?',
          content: `
            <p>The <strong>sharp symbol (#)</strong> raises a note by one <strong>half step</strong> — the smallest distance on the keyboard.</p>
            <p>A half step means moving to the very next key, whether it's black or white:</p>
            <ul>
              <li><strong>C#</strong> — the black key just to the right of C</li>
              <li><strong>D#</strong> — the black key just to the right of D</li>
              <li><strong>F#</strong> — the black key just to the right of F</li>
              <li><strong>G#</strong> — the black key just to the right of G</li>
              <li><strong>A#</strong> — the black key just to the right of A</li>
            </ul>
            <p>Notice: <strong>E#</strong> is the same key as F (there's no black key between E and F), and <strong>B#</strong> is the same key as C.</p>
          `,
          diagram: 'keyboard-highlight',
          diagramData: {
            highlightNotes: ['C#4', 'D#4', 'F#4', 'G#4', 'A#4'],
            viewportStart: 'C4',
            viewportEnd: 'C6',
          },
        },
        {
          type: 'demo',
          title: 'Hear Sharps',
          description: 'Listen to each natural note followed by its sharp. Notice how the sharp sounds slightly higher.',
          notes: [
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['c#/4'], duration: 'q', finger: [1] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['d#/4'], duration: 'q', finger: [2] },
            { keys: ['f/4'], duration: 'q', finger: [4] },
            { keys: ['f#/4'], duration: 'q', finger: [4] },
            { keys: ['g/4'], duration: 'q', finger: [5] },
            { keys: ['g#/4'], duration: 'q', finger: [5] },
          ],
          bpm: 72,
          timeSignature: [4, 4],
          clef: 'treble',
        },
        {
          type: 'exercise',
          title: 'Play Some Sharps',
          instructions: 'Play each note then its sharp: C then C#, D then D#, F then F#. Use the same finger for the natural and sharp. Reach up to the black key with your fingertip.',
          notes: [
            { keys: ['c/4'], duration: 'h', finger: [1] },
            { keys: ['c#/4'], duration: 'h', finger: [1] },
            { keys: ['d/4'], duration: 'h', finger: [2] },
            { keys: ['d#/4'], duration: 'h', finger: [2] },
            { keys: ['f/4'], duration: 'h', finger: [4] },
            { keys: ['f#/4'], duration: 'h', finger: [4] },
            { keys: ['g/4'], duration: 'h', finger: [5] },
            { keys: ['g#/4'], duration: 'h', finger: [5] },
          ],
          clef: 'treble',
          bpm: 66,
          timeSignature: [4, 4],
          fingerNumbers: { 'C4': 1, 'D4': 2, 'F4': 4, 'G4': 5 },
          handsRequired: 'right',
          requireTiming: false,
        },
      ],
    },

    // ── Lesson 5.7: Flats ──
    {
      id: '5.7',
      title: 'Flats',
      steps: [
        {
          type: 'instruction',
          title: 'What is a Flat?',
          content: `
            <p>The <strong>flat symbol (b)</strong> lowers a note by one half step — the opposite of a sharp.</p>
            <p>A flat moves you to the very next key to the <em>left</em>:</p>
            <ul>
              <li><strong>Bb</strong> — the black key just to the left of B</li>
              <li><strong>Eb</strong> — the black key just to the left of E</li>
              <li><strong>Ab</strong> — the black key just to the left of A</li>
              <li><strong>Db</strong> — the black key just to the left of D</li>
              <li><strong>Gb</strong> — the black key just to the left of G</li>
            </ul>
            <p>Here's the interesting part: <strong>Bb and A#</strong> are the same key! Whether we call it a sharp or flat depends on the musical context. This is called an <strong>enharmonic</strong> equivalent.</p>
          `,
          diagram: 'keyboard-highlight',
          diagramData: {
            highlightNotes: ['Db4', 'Eb4', 'Gb4', 'Ab4', 'Bb4'],
            viewportStart: 'C4',
            viewportEnd: 'C6',
          },
        },
        {
          type: 'demo',
          title: 'Hear Flats',
          description: 'Listen to each natural note followed by its flat. The flat sounds slightly lower.',
          notes: [
            { keys: ['b/4'], duration: 'q', finger: [3] },
            { keys: ['bb/4'], duration: 'q', finger: [3] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['eb/4'], duration: 'q', finger: [3] },
            { keys: ['a/4'], duration: 'q', finger: [2] },
            { keys: ['ab/4'], duration: 'q', finger: [2] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['db/4'], duration: 'q', finger: [2] },
          ],
          bpm: 72,
          timeSignature: [4, 4],
          clef: 'treble',
        },
        {
          type: 'exercise',
          title: 'Play Some Flats',
          instructions: 'Play each note then its flat: B then Bb, E then Eb, A then Ab. The flat is always the key immediately to the left.',
          notes: [
            { keys: ['b/4'], duration: 'h', finger: [3] },
            { keys: ['bb/4'], duration: 'h', finger: [3] },
            { keys: ['e/4'], duration: 'h', finger: [3] },
            { keys: ['eb/4'], duration: 'h', finger: [3] },
            { keys: ['a/4'], duration: 'h', finger: [2] },
            { keys: ['ab/4'], duration: 'h', finger: [2] },
            { keys: ['d/4'], duration: 'h', finger: [2] },
            { keys: ['db/4'], duration: 'h', finger: [2] },
          ],
          clef: 'treble',
          bpm: 66,
          timeSignature: [4, 4],
          fingerNumbers: { 'B4': 3, 'E4': 3, 'A4': 2, 'D4': 2 },
          handsRequired: 'right',
          requireTiming: false,
        },
      ],
    },

    // ── Lesson 5.8: Eighth Notes ──
    {
      id: '5.8',
      title: 'Eighth Notes',
      steps: [
        {
          type: 'instruction',
          title: 'Faster Notes: Eighth Notes',
          content: `
            <p>So far you've learned whole notes (4 beats), half notes (2 beats), and quarter notes (1 beat). Now let's add <strong>eighth notes</strong>.</p>
            <p>An eighth note gets <strong>half a beat</strong>. That means:</p>
            <ul>
              <li><strong>Two eighth notes</strong> = one quarter note (1 beat)</li>
              <li><strong>Four eighth notes</strong> = one half note (2 beats)</li>
              <li><strong>Eight eighth notes</strong> = one whole note (4 beats)</li>
            </ul>
            <p>When counting eighth notes, we say: <strong>"1-and-2-and-3-and-4-and"</strong>. The "and" falls between the main beats.</p>
            <p>Eighth notes look like quarter notes with a <strong>flag</strong> on the stem. When grouped together, they're connected by a <strong>beam</strong> (a horizontal bar).</p>
          `,
        },
        {
          type: 'demo',
          title: 'Hear Eighth Notes',
          description: 'Listen to quarter notes first, then eighth notes at the same tempo. The eighth notes move twice as fast.',
          notes: [
            // quarter notes
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['f/4'], duration: 'q', finger: [4] },
            // eighth notes
            { keys: ['c/4'], duration: '8', finger: [1] },
            { keys: ['d/4'], duration: '8', finger: [2] },
            { keys: ['c/4'], duration: '8', finger: [1] },
            { keys: ['d/4'], duration: '8', finger: [2] },
            { keys: ['e/4'], duration: '8', finger: [3] },
            { keys: ['f/4'], duration: '8', finger: [4] },
            { keys: ['e/4'], duration: '8', finger: [3] },
            { keys: ['f/4'], duration: '8', finger: [4] },
          ],
          bpm: 80,
          timeSignature: [4, 4],
          clef: 'treble',
        },
        {
          type: 'exercise',
          title: 'Eighth Note Practice',
          instructions: 'Play pairs of eighth notes on C and D, then E and F. Count "1-and-2-and-3-and-4-and" to keep steady time. Two eighth notes fill one beat.',
          notes: [
            { keys: ['c/4'], duration: '8', finger: [1] },
            { keys: ['d/4'], duration: '8', finger: [2] },
            { keys: ['c/4'], duration: '8', finger: [1] },
            { keys: ['d/4'], duration: '8', finger: [2] },
            { keys: ['e/4'], duration: '8', finger: [3] },
            { keys: ['f/4'], duration: '8', finger: [4] },
            { keys: ['e/4'], duration: '8', finger: [3] },
            { keys: ['f/4'], duration: '8', finger: [4] },
            { keys: ['g/4'], duration: '8', finger: [5] },
            { keys: ['f/4'], duration: '8', finger: [4] },
            { keys: ['e/4'], duration: '8', finger: [3] },
            { keys: ['d/4'], duration: '8', finger: [2] },
            { keys: ['c/4'], duration: 'w', finger: [1] },
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
          title: 'Mixed Rhythm Practice',
          instructions: 'This exercise mixes quarter notes and eighth notes. Pay attention to which notes are fast (eighth) and which are regular (quarter).',
          notes: [
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['d/4'], duration: '8', finger: [2] },
            { keys: ['e/4'], duration: '8', finger: [3] },
            { keys: ['f/4'], duration: 'q', finger: [4] },
            { keys: ['g/4'], duration: 'q', finger: [5] },
            { keys: ['g/4'], duration: 'q', finger: [5] },
            { keys: ['f/4'], duration: '8', finger: [4] },
            { keys: ['e/4'], duration: '8', finger: [3] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['c/4'], duration: 'q', finger: [1] },
          ],
          clef: 'treble',
          bpm: 72,
          timeSignature: [4, 4],
          fingerNumbers: { 'C4': 1, 'D4': 2, 'E4': 3, 'F4': 4, 'G4': 5 },
          handsRequired: 'right',
          requireTiming: false,
        },
      ],
    },

    // ── Lesson 5.9: Dynamics: Piano and Forte ──
    {
      id: '5.9',
      title: 'Dynamics: Piano and Forte',
      steps: [
        {
          type: 'instruction',
          title: 'Playing Soft and Loud',
          content: `
            <p><strong>Dynamics</strong> tell you how loud or soft to play. They are one of the most important ways to make music expressive.</p>
            <p>The main dynamic markings are Italian words:</p>
            <ul>
              <li><strong>p</strong> (piano) = soft, gentle</li>
              <li><strong>mp</strong> (mezzo-piano) = medium soft</li>
              <li><strong>mf</strong> (mezzo-forte) = medium loud</li>
              <li><strong>f</strong> (forte) = loud, strong</li>
            </ul>
            <p>To play softer, use less weight from your arm and press the keys more gently. To play louder, use more arm weight (but don't tense up or pound!).</p>
            <p>Fun fact: The piano instrument is actually named "pianoforte" — meaning it can play both soft (piano) and loud (forte)!</p>
          `,
        },
        {
          type: 'demo',
          title: 'Hear Dynamic Contrast',
          description: 'Listen to the same melody played first softly (piano) then loudly (forte). Imagine the difference in volume.',
          notes: [
            // "soft" version
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['g/4'], duration: 'q', finger: [5] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            // "loud" version
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['g/4'], duration: 'q', finger: [5] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
          ],
          bpm: 80,
          timeSignature: [4, 4],
          clef: 'treble',
        },
        {
          type: 'exercise',
          title: 'Dynamics Practice',
          instructions: 'Play this melody twice. The first time, play it softly (p). The second time, play it strongly (f). Focus on controlling your touch — gentle for soft, firm for loud.',
          notes: [
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['f/4'], duration: 'q', finger: [4] },
            { keys: ['g/4'], duration: 'h', finger: [5] },
            { keys: ['e/4'], duration: 'h', finger: [3] },
            { keys: ['c/4'], duration: 'w', finger: [1] },
            // repeat
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['f/4'], duration: 'q', finger: [4] },
            { keys: ['g/4'], duration: 'h', finger: [5] },
            { keys: ['e/4'], duration: 'h', finger: [3] },
            { keys: ['c/4'], duration: 'w', finger: [1] },
          ],
          clef: 'treble',
          bpm: 72,
          timeSignature: [4, 4],
          fingerNumbers: { 'C4': 1, 'D4': 2, 'E4': 3, 'F4': 4, 'G4': 5 },
          handsRequired: 'right',
          requireTiming: false,
        },
      ],
    },

    // ── Lesson 5.10: Legato and Staccato ──
    {
      id: '5.10',
      title: 'Legato and Staccato',
      steps: [
        {
          type: 'instruction',
          title: 'Two Ways to Play Notes',
          content: `
            <p>Beyond loud and soft, you can also change <em>how</em> you play each note:</p>
            <ul>
              <li><strong>Legato</strong> = smooth and connected. Each note flows into the next with no gap. Hold each key until the next key is pressed. In sheet music, legato is shown by a curved line (slur) over or under the notes.</li>
              <li><strong>Staccato</strong> = short and detached. Each note is played briefly, with space between notes. In sheet music, staccato is shown by a dot above or below the note.</li>
            </ul>
            <p>Think of legato as singing a smooth phrase, and staccato as raindrops bouncing off a surface.</p>
          `,
        },
        {
          type: 'demo',
          title: 'Hear the Difference',
          description: 'Listen to the same notes played legato (smooth) then staccato (short and bouncy).',
          notes: [
            // Legato
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['f/4'], duration: 'q', finger: [4] },
            { keys: ['g/4'], duration: 'h', finger: [5] },
            // Staccato
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['f/4'], duration: 'q', finger: [4] },
            { keys: ['g/4'], duration: 'h', finger: [5] },
          ],
          bpm: 80,
          timeSignature: [4, 4],
          clef: 'treble',
        },
        {
          type: 'exercise',
          title: 'Legato Practice',
          instructions: 'Play this ascending and descending pattern as smoothly as possible. Hold each key until the very moment you press the next one — no gaps between notes.',
          notes: [
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['f/4'], duration: 'q', finger: [4] },
            { keys: ['g/4'], duration: 'q', finger: [5] },
            { keys: ['f/4'], duration: 'q', finger: [4] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['c/4'], duration: 'w', finger: [1] },
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
          title: 'Staccato Practice',
          instructions: 'Now play the same pattern staccato. Quickly release each key after pressing it. Your fingers should bounce off the keys like they are hot. Keep your hand relaxed!',
          notes: [
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['f/4'], duration: 'q', finger: [4] },
            { keys: ['g/4'], duration: 'q', finger: [5] },
            { keys: ['f/4'], duration: 'q', finger: [4] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['c/4'], duration: 'w', finger: [1] },
          ],
          clef: 'treble',
          bpm: 72,
          timeSignature: [4, 4],
          fingerNumbers: { 'C4': 1, 'D4': 2, 'E4': 3, 'F4': 4, 'G4': 5 },
          handsRequired: 'right',
          requireTiming: false,
        },
        {
          type: 'instruction',
          title: 'Module 5 Complete!',
          content: `
            <p>Fantastic work! In this module you learned:</p>
            <ul>
              <li><strong>G position</strong> — a new hand position starting on G4</li>
              <li><strong>Position shifts</strong> — moving between C and G positions</li>
              <li><strong>Intervals</strong> — fourths and fifths</li>
              <li><strong>Sharps (#)</strong> — raising a note by a half step</li>
              <li><strong>Flats (b)</strong> — lowering a note by a half step</li>
              <li><strong>Eighth notes</strong> — notes that last half a beat</li>
              <li><strong>Dynamics</strong> — piano (soft) and forte (loud)</li>
              <li><strong>Articulation</strong> — legato (smooth) and staccato (short)</li>
            </ul>
            <p>In the next module, you'll learn about scales, keys, and how to play beyond the five-finger position!</p>
          `,
        },
      ],
    },
  ],
};

export default module05;
