import type { Module } from '../types';

const module02: Module = {
  id: 2,
  title: 'First Notes',
  description: 'Middle C, your first melodies, and basic rhythm',
  lessons: [
    {
      id: '2.1',
      title: 'C, D, and E',
      steps: [
        {
          type: 'instruction',
          title: 'Your First Three Notes',
          content: `
            <p>Place your right hand in <strong>C position</strong>:</p>
            <ul>
              <li><strong>Thumb (1)</strong> on Middle C</li>
              <li><strong>Index finger (2)</strong> on D</li>
              <li><strong>Middle finger (3)</strong> on E</li>
            </ul>
            <p>These three notes — <strong>C, D, E</strong> — are enough to play many simple melodies. Let's start by getting comfortable playing them.</p>
          `,
          diagram: 'keyboard-highlight',
          diagramData: {
            highlightNotes: ['C4', 'D4', 'E4'],
            viewportStart: 'C3',
            viewportEnd: 'C6',
            fingerNumbers: { 'C4': 1, 'D4': 2, 'E4': 3 },
          },
        },
        {
          type: 'demo',
          title: 'Hear C, D, E',
          description: 'Listen to these three notes played one at a time. Press play to hear them.',
          notes: [
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['c/4'], duration: 'q', finger: [1] },
          ],
          bpm: 80,
          timeSignature: [4, 4],
          clef: 'treble',
        },
        {
          type: 'exercise',
          title: 'Play C, D, E and Back',
          instructions: 'Play C-D-E-E-D-C using fingers 1-2-3-3-2-1. Take your time — accuracy matters more than speed.',
          notes: [
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['c/4'], duration: 'q', finger: [1] },
          ],
          clef: 'treble',
          bpm: 72,
          timeSignature: [4, 4],
          fingerNumbers: { 'C4': 1, 'D4': 2, 'E4': 3 },
          handsRequired: 'right',
          requireTiming: false,
        },
      ],
    },
    {
      id: '2.2',
      title: 'Understanding Rhythm',
      steps: [
        {
          type: 'instruction',
          title: 'What is Rhythm?',
          content: `
            <p>Music has a steady <strong>beat</strong>, like a heartbeat or a clock ticking. Notes can be held for different lengths of time:</p>
            <ul>
              <li><strong>Whole note</strong> (w) = 4 beats — hold for a full measure</li>
              <li><strong>Half note</strong> (h) = 2 beats — hold for half a measure</li>
              <li><strong>Quarter note</strong> (q) = 1 beat — the basic "walking" pulse</li>
            </ul>
            <p>Think of quarter notes as your steady walking pace. Half notes are held twice as long, and whole notes four times as long.</p>
          `,
        },
        {
          type: 'demo',
          title: 'Hear the Difference',
          description: 'Listen to the same note (C) played as a whole note, two half notes, and four quarter notes.',
          notes: [
            { keys: ['c/4'], duration: 'w', finger: [1] },
            { keys: ['c/4'], duration: 'h', finger: [1] },
            { keys: ['c/4'], duration: 'h', finger: [1] },
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['c/4'], duration: 'q', finger: [1] },
          ],
          bpm: 72,
          timeSignature: [4, 4],
          clef: 'treble',
        },
        {
          type: 'exercise',
          title: 'Quarter Note Practice',
          instructions: 'Play these quarter notes on C and D. Each note gets one beat. Try to keep a steady rhythm — use the metronome if you like!',
          notes: [
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
          ],
          clef: 'treble',
          bpm: 72,
          timeSignature: [4, 4],
          fingerNumbers: { 'C4': 1, 'D4': 2 },
          handsRequired: 'right',
          requireTiming: false,
        },
      ],
    },
    {
      id: '2.3',
      title: 'Hot Cross Buns',
      steps: [
        {
          type: 'instruction',
          title: 'Your First Melody!',
          content: `
            <p><strong>Hot Cross Buns</strong> is traditionally one of the very first songs piano students learn. It uses just three notes: <strong>E, D, C</strong>.</p>
            <p>The melody goes:</p>
            <ul>
              <li><strong>E - D - C</strong> (rest)</li>
              <li><strong>E - D - C</strong> (rest)</li>
              <li><strong>C - C - D - D</strong></li>
              <li><strong>E - D - C</strong></li>
            </ul>
            <p>Notice it starts on E (finger 3) and goes <em>down</em> to C. Listen to the demo first, then try it yourself!</p>
          `,
        },
        {
          type: 'demo',
          title: 'Hear Hot Cross Buns',
          description: 'Listen to the full melody. Pay attention to which notes are longer and which are shorter.',
          notes: [
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['c/4'], duration: 'h', finger: [1] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['c/4'], duration: 'h', finger: [1] },
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['c/4'], duration: 'h', finger: [1] },
          ],
          bpm: 90,
          timeSignature: [4, 4],
          clef: 'treble',
        },
        {
          type: 'exercise',
          title: 'Play Hot Cross Buns',
          instructions: 'Play the melody using fingers 3 (E), 2 (D), and 1 (C). Don\'t worry about timing yet — just get the right notes in order.',
          notes: [
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['c/4'], duration: 'h', finger: [1] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['c/4'], duration: 'h', finger: [1] },
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['c/4'], duration: 'h', finger: [1] },
          ],
          clef: 'treble',
          bpm: 90,
          timeSignature: [4, 4],
          fingerNumbers: { 'C4': 1, 'D4': 2, 'E4': 3 },
          handsRequired: 'right',
          requireTiming: false,
        },
      ],
    },
    {
      id: '2.4',
      title: 'Left Hand Introduction',
      steps: [
        {
          type: 'instruction',
          title: 'Your Left Hand',
          content: `
            <p>Now it's time to introduce your <strong>left hand</strong>. The left hand typically plays lower notes on the piano.</p>
            <p>Place your left hand so that your <strong>pinky (5)</strong> is on the C below Middle C (called C3), with fingers spread across C-D-E-F-G:</p>
            <ul>
              <li><strong>Pinky (5)</strong> on C3</li>
              <li><strong>Ring (4)</strong> on D3</li>
              <li><strong>Middle (3)</strong> on E3</li>
              <li><strong>Index (2)</strong> on F3</li>
              <li><strong>Thumb (1)</strong> on G3</li>
            </ul>
            <p>Notice that the finger numbers are mirrored — the left hand pinky is 5 (just like the right hand), but it's on the opposite side.</p>
          `,
          diagram: 'keyboard-highlight',
          diagramData: {
            highlightNotes: ['C3', 'D3', 'E3', 'F3', 'G3'],
            viewportStart: 'C3',
            viewportEnd: 'C6',
            fingerNumbers: { 'C3': 5, 'D3': 4, 'E3': 3, 'F3': 2, 'G3': 1 },
          },
        },
        {
          type: 'exercise',
          title: 'Left Hand C-D-E',
          instructions: 'Play C-D-E with your left hand: pinky (5) on C3, ring (4) on D3, middle (3) on E3. Then come back down.',
          notes: [
            { keys: ['c/3'], duration: 'w', finger: [5] },
            { keys: ['d/3'], duration: 'w', finger: [4] },
            { keys: ['e/3'], duration: 'w', finger: [3] },
            { keys: ['e/3'], duration: 'w', finger: [3] },
            { keys: ['d/3'], duration: 'w', finger: [4] },
            { keys: ['c/3'], duration: 'w', finger: [5] },
          ],
          clef: 'bass',
          bpm: 60,
          timeSignature: [4, 4],
          fingerNumbers: { 'C3': 5, 'D3': 4, 'E3': 3 },
          handsRequired: 'left',
          requireTiming: false,
        },
      ],
    },
    {
      id: '2.5',
      title: 'Mary Had a Little Lamb',
      steps: [
        {
          type: 'instruction',
          title: 'A Classic Beginner Song',
          content: `
            <p><strong>Mary Had a Little Lamb</strong> uses four notes: <strong>E, D, C</strong>, and <strong>G</strong>. It's played with the right hand in C position.</p>
            <p>The melody pattern:</p>
            <ul>
              <li>E - D - C - D - E - E - E (rest)</li>
              <li>D - D - D (rest) E - G - G (rest)</li>
              <li>E - D - C - D - E - E - E - E</li>
              <li>D - D - E - D - C</li>
            </ul>
          `,
        },
        {
          type: 'demo',
          title: 'Hear Mary Had a Little Lamb',
          description: 'Listen to the melody. Notice how the notes step up and down.',
          notes: [
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['e/4'], duration: 'h', finger: [3] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['d/4'], duration: 'h', finger: [2] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['g/4'], duration: 'q', finger: [5] },
            { keys: ['g/4'], duration: 'h', finger: [5] },
          ],
          bpm: 100,
          timeSignature: [4, 4],
          clef: 'treble',
        },
        {
          type: 'exercise',
          title: 'Play Mary Had a Little Lamb (Part 1)',
          instructions: 'Play the first half of the melody. Use fingers 1 (C), 2 (D), 3 (E), and 5 (G).',
          notes: [
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['e/4'], duration: 'h', finger: [3] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['d/4'], duration: 'h', finger: [2] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['g/4'], duration: 'q', finger: [5] },
            { keys: ['g/4'], duration: 'h', finger: [5] },
          ],
          clef: 'treble',
          bpm: 100,
          timeSignature: [4, 4],
          fingerNumbers: { 'C4': 1, 'D4': 2, 'E4': 3, 'G4': 5 },
          handsRequired: 'right',
          requireTiming: false,
        },
      ],
    },
    {
      id: '2.6',
      title: 'Mary Had a Little Lamb (Full)',
      steps: [
        {
          type: 'exercise',
          title: 'Play the Full Melody',
          instructions: 'Now play the complete melody of Mary Had a Little Lamb. Remember: E-D-C-D-E-E-E, D-D-D, E-G-G, E-D-C-D-E-E-E-E, D-D-E-D-C.',
          notes: [
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['e/4'], duration: 'h', finger: [3] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['d/4'], duration: 'h', finger: [2] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['g/4'], duration: 'q', finger: [5] },
            { keys: ['g/4'], duration: 'h', finger: [5] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['c/4'], duration: 'w', finger: [1] },
          ],
          clef: 'treble',
          bpm: 100,
          timeSignature: [4, 4],
          fingerNumbers: { 'C4': 1, 'D4': 2, 'E4': 3, 'G4': 5 },
          handsRequired: 'right',
          requireTiming: false,
        },
      ],
    },
    {
      id: '2.7',
      title: 'Module 2 Review',
      steps: [
        {
          type: 'instruction',
          title: 'What You\'ve Learned',
          content: `
            <p>Excellent progress! In this module you learned:</p>
            <ul>
              <li>The notes <strong>C, D, E</strong> with your right hand</li>
              <li>Basic rhythm: <strong>whole notes</strong> (4 beats), <strong>half notes</strong> (2 beats), and <strong>quarter notes</strong> (1 beat)</li>
              <li>Your first song: <strong>Hot Cross Buns</strong></li>
              <li>Left hand C position (C3-G3)</li>
              <li>A more complex melody: <strong>Mary Had a Little Lamb</strong></li>
            </ul>
            <p>In the next module, you'll expand to all five fingers, learn about time signatures, and play more songs including Twinkle Twinkle Little Star!</p>
          `,
        },
        {
          type: 'exercise',
          title: 'Review Exercise: C Scale Up and Down',
          instructions: 'Play C-D-E-F-G-F-E-D-C with your right hand to review the C position.',
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
          bpm: 80,
          timeSignature: [4, 4],
          fingerNumbers: { 'C4': 1, 'D4': 2, 'E4': 3, 'F4': 4, 'G4': 5 },
          handsRequired: 'right',
          requireTiming: false,
        },
      ],
    },
  ],
};

export default module02;
