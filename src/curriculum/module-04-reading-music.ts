import type { Module } from '../types';

const module04: Module = {
  id: 4,
  title: 'Reading Music',
  description: 'Treble and bass clefs, the grand staff, and sight-reading',
  lessons: [
    {
      id: '4.1',
      title: 'Introduction to the Staff',
      steps: [
        {
          type: 'instruction',
          title: 'What is a Staff?',
          content: `
            <p>Until now, you've been learning notes by their letter names and finding them on the keyboard. But written music uses a special system called the <strong>staff</strong> (or stave).</p>
            <p>A staff is made of <strong>5 horizontal lines</strong> with <strong>4 spaces</strong> between them. Notes are placed either:</p>
            <ul>
              <li><strong>On a line</strong> — the line goes through the middle of the note</li>
              <li><strong>In a space</strong> — the note sits between two lines</li>
            </ul>
            <p>The higher a note sits on the staff, the higher it sounds. The lower it sits, the lower it sounds.</p>
          `,
          diagram: 'staff-demo',
          diagramData: {
            showEmptyStaff: true,
            clef: 'treble',
            labels: ['lines', 'spaces'],
          },
        },
        {
          type: 'instruction',
          title: 'Lines and Spaces',
          content: `
            <p>Let's count the lines and spaces from bottom to top:</p>
            <ul>
              <li><strong>Lines</strong> are numbered 1 through 5, from the bottom line up to the top line</li>
              <li><strong>Spaces</strong> are numbered 1 through 4, from the bottom space up to the top space</li>
            </ul>
            <p>Each line and each space represents a different note. The exact note depends on the <strong>clef</strong> — a symbol placed at the beginning of the staff that tells you which notes go where.</p>
            <p>In the next lesson, we'll learn the first clef: the <strong>treble clef</strong>.</p>
          `,
          diagram: 'staff-demo',
          diagramData: {
            showEmptyStaff: true,
            clef: 'treble',
            labels: ['line-numbers', 'space-numbers'],
          },
        },
        {
          type: 'instruction',
          title: 'Ledger Lines',
          content: `
            <p>Sometimes notes go higher or lower than the 5 lines of the staff. When that happens, we add short extra lines called <strong>ledger lines</strong>.</p>
            <p>Ledger lines extend the staff temporarily — just enough for that one note. You'll see ledger lines used for important notes like <strong>Middle C</strong>, which sits on a ledger line below the treble clef staff.</p>
            <p>Don't worry about memorizing ledger lines yet. We'll point them out as we encounter them.</p>
          `,
        },
      ],
    },
    {
      id: '4.2',
      title: 'The Treble Clef',
      steps: [
        {
          type: 'instruction',
          title: 'Meet the Treble Clef',
          content: `
            <p>The <strong>treble clef</strong> (also called the <strong>G clef</strong>) is the most common clef in music. It looks like an ornate, curly symbol at the start of the staff.</p>
            <p>It's called the G clef because the curl of the symbol wraps around the <strong>second line</strong> of the staff — and that line is the note <strong>G</strong>.</p>
            <p>The treble clef is used for:</p>
            <ul>
              <li>The <strong>right hand</strong> on the piano</li>
              <li>Higher-pitched instruments (flute, violin, trumpet)</li>
              <li>Most vocal parts</li>
            </ul>
          `,
          diagram: 'staff-demo',
          diagramData: {
            clef: 'treble',
            highlightNotes: ['g/4'],
            labels: ['G-line'],
          },
        },
        {
          type: 'instruction',
          title: 'Middle C in the Treble Clef',
          content: `
            <p>Your old friend <strong>Middle C</strong> sits on a <strong>ledger line just below</strong> the treble clef staff. This is a landmark note — when you see a note on that ledger line below the staff, it's always Middle C.</p>
            <p>From Middle C, the notes go up through the staff:</p>
            <ul>
              <li><strong>C</strong> — ledger line below the staff</li>
              <li><strong>D</strong> — just below the first line (hanging beneath the staff)</li>
              <li><strong>E</strong> — first line</li>
              <li><strong>F</strong> — first space</li>
              <li><strong>G</strong> — second line</li>
            </ul>
            <p>These are the same five notes you already know from C position!</p>
          `,
          diagram: 'staff-demo',
          diagramData: {
            clef: 'treble',
            notes: ['c/4', 'd/4', 'e/4', 'f/4', 'g/4'],
            highlightNotes: ['c/4'],
            labels: ['middle-c'],
          },
        },
        {
          type: 'demo',
          title: 'Hear the Notes on the Staff',
          description: 'Watch and listen as each note is played from Middle C up to G. Notice how each note moves one step higher on the staff.',
          notes: [
            { keys: ['c/4'], duration: 'h', finger: [1] },
            { keys: ['d/4'], duration: 'h', finger: [2] },
            { keys: ['e/4'], duration: 'h', finger: [3] },
            { keys: ['f/4'], duration: 'h', finger: [4] },
            { keys: ['g/4'], duration: 'h', finger: [5] },
          ],
          bpm: 72,
          timeSignature: [4, 4],
          clef: 'treble',
        },
      ],
    },
    {
      id: '4.3',
      title: 'Treble Clef Notes',
      steps: [
        {
          type: 'instruction',
          title: 'Notes on the Lines',
          content: `
            <p>The treble clef has 5 lines, and each one has a note name. From bottom to top, the <strong>line notes</strong> are:</p>
            <ul>
              <li><strong>E</strong> — first (bottom) line</li>
              <li><strong>G</strong> — second line</li>
              <li><strong>B</strong> — third line</li>
              <li><strong>D</strong> — fourth line</li>
              <li><strong>F</strong> — fifth (top) line</li>
            </ul>
            <p>The classic mnemonic to remember them is: <strong>"Every Good Boy Does Fine"</strong></p>
            <p>Say it a few times: E-G-B-D-F. Every Good Boy Does Fine.</p>
          `,
          diagram: 'staff-demo',
          diagramData: {
            clef: 'treble',
            notes: ['e/4', 'g/4', 'b/4', 'd/5', 'f/5'],
            labels: ['line-notes'],
          },
        },
        {
          type: 'instruction',
          title: 'Notes in the Spaces',
          content: `
            <p>The 4 spaces between the lines also have note names. From bottom to top, the <strong>space notes</strong> are:</p>
            <ul>
              <li><strong>F</strong> — first (bottom) space</li>
              <li><strong>A</strong> — second space</li>
              <li><strong>C</strong> — third space</li>
              <li><strong>E</strong> — fourth (top) space</li>
            </ul>
            <p>This one is easy to remember: they spell <strong>FACE</strong>!</p>
            <p>Together with the line notes, you can now read every note on the treble clef staff — from E on the bottom line all the way up to F on the top line.</p>
          `,
          diagram: 'staff-demo',
          diagramData: {
            clef: 'treble',
            notes: ['f/4', 'a/4', 'c/5', 'e/5'],
            labels: ['space-notes'],
          },
        },
        {
          type: 'instruction',
          title: 'Putting It All Together',
          content: `
            <p>Let's combine lines and spaces. Reading up from the bottom of the treble clef staff, the notes in order are:</p>
            <p><strong>E - F - G - A - B - C - D - E - F</strong></p>
            <p>Notice how lines and spaces alternate, just like the musical alphabet goes through each letter in order.</p>
            <p>Quick review:</p>
            <ul>
              <li><strong>Lines (bottom to top):</strong> E-G-B-D-F — "Every Good Boy Does Fine"</li>
              <li><strong>Spaces (bottom to top):</strong> F-A-C-E — "FACE"</li>
            </ul>
          `,
          diagram: 'staff-demo',
          diagramData: {
            clef: 'treble',
            notes: ['e/4', 'f/4', 'g/4', 'a/4', 'b/4', 'c/5', 'd/5', 'e/5', 'f/5'],
            labels: ['all-notes'],
          },
        },
      ],
    },
    {
      id: '4.4',
      title: 'Reading Exercise: Treble Clef',
      steps: [
        {
          type: 'instruction',
          title: 'Time to Read!',
          content: `
            <p>Now let's put your treble clef reading to the test. In the following exercises, you'll see notes on the staff and play them on the keyboard.</p>
            <p>Remember your C position:</p>
            <ul>
              <li><strong>Thumb (1)</strong> on Middle C (ledger line below the staff)</li>
              <li><strong>Index (2)</strong> on D (just below the first line)</li>
              <li><strong>Middle (3)</strong> on E (first line)</li>
              <li><strong>Ring (4)</strong> on F (first space)</li>
              <li><strong>Pinky (5)</strong> on G (second line)</li>
            </ul>
            <p>Look at each note's position on the staff and figure out which key to press. Take your time!</p>
          `,
          diagram: 'keyboard-highlight',
          diagramData: {
            highlightNotes: ['C4', 'D4', 'E4', 'F4', 'G4'],
            viewportStart: 'C3',
            viewportEnd: 'C6',
            fingerNumbers: { 'C4': 1, 'D4': 2, 'E4': 3, 'F4': 4, 'G4': 5 },
          },
        },
        {
          type: 'exercise',
          title: 'Read and Play: Stepping Up',
          instructions: 'Read these notes from the staff and play them. They step up from C to G. Look at each note\'s position before you play.',
          notes: [
            { keys: ['c/4'], duration: 'h', finger: [1] },
            { keys: ['d/4'], duration: 'h', finger: [2] },
            { keys: ['e/4'], duration: 'h', finger: [3] },
            { keys: ['f/4'], duration: 'h', finger: [4] },
            { keys: ['g/4'], duration: 'w', finger: [5] },
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
          title: 'Read and Play: Mixed Notes',
          instructions: 'Now the notes are mixed up. Read each note carefully on the staff before playing it. Remember: lines are E-G-B-D-F, spaces are F-A-C-E.',
          notes: [
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['g/4'], duration: 'q', finger: [5] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['f/4'], duration: 'q', finger: [4] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['c/4'], duration: 'q', finger: [1] },
          ],
          clef: 'treble',
          bpm: 76,
          timeSignature: [4, 4],
          fingerNumbers: { 'C4': 1, 'D4': 2, 'E4': 3, 'F4': 4, 'G4': 5 },
          handsRequired: 'right',
          requireTiming: false,
        },
        {
          type: 'exercise',
          title: 'Read and Play: Simple Melody',
          instructions: 'Read this short melody from the staff. Notice how some notes step up, some step down, and some repeat.',
          notes: [
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['g/4'], duration: 'q', finger: [5] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['f/4'], duration: 'q', finger: [4] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['c/4'], duration: 'h', finger: [1] },
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
    {
      id: '4.5',
      title: 'The Bass Clef',
      steps: [
        {
          type: 'instruction',
          title: 'Meet the Bass Clef',
          content: `
            <p>The <strong>bass clef</strong> (also called the <strong>F clef</strong>) is used for lower-pitched notes. It looks like a backwards C with two dots.</p>
            <p>It's called the F clef because the two dots surround the <strong>fourth line</strong> of the staff — and that line is the note <strong>F</strong>.</p>
            <p>The bass clef is used for:</p>
            <ul>
              <li>The <strong>left hand</strong> on the piano</li>
              <li>Lower-pitched instruments (cello, bassoon, tuba)</li>
              <li>Bass vocals</li>
            </ul>
          `,
          diagram: 'staff-demo',
          diagramData: {
            clef: 'bass',
            highlightNotes: ['f/3'],
            labels: ['F-line'],
          },
        },
        {
          type: 'instruction',
          title: 'Bass Clef Line Notes',
          content: `
            <p>The bass clef lines, from bottom to top, are:</p>
            <ul>
              <li><strong>G</strong> — first (bottom) line</li>
              <li><strong>B</strong> — second line</li>
              <li><strong>D</strong> — third line</li>
              <li><strong>F</strong> — fourth line</li>
              <li><strong>A</strong> — fifth (top) line</li>
            </ul>
            <p>The mnemonic is: <strong>"Good Boys Do Fine Always"</strong></p>
            <p>Some people also use: "Great Big Dogs Fight Animals" or "Good Burritos Don't Fall Apart" — pick whatever is memorable for you!</p>
          `,
          diagram: 'staff-demo',
          diagramData: {
            clef: 'bass',
            notes: ['g/2', 'b/2', 'd/3', 'f/3', 'a/3'],
            labels: ['line-notes'],
          },
        },
        {
          type: 'instruction',
          title: 'Bass Clef Space Notes',
          content: `
            <p>The bass clef spaces, from bottom to top, are:</p>
            <ul>
              <li><strong>A</strong> — first (bottom) space</li>
              <li><strong>C</strong> — second space</li>
              <li><strong>E</strong> — third space</li>
              <li><strong>G</strong> — fourth (top) space</li>
            </ul>
            <p>The mnemonic is: <strong>"All Cows Eat Grass"</strong></p>
            <p>Just like the treble clef, Middle C appears on a ledger line — but this time it's on a ledger line <strong>above</strong> the bass clef staff. The treble and bass clef share Middle C between them.</p>
          `,
          diagram: 'staff-demo',
          diagramData: {
            clef: 'bass',
            notes: ['a/2', 'c/3', 'e/3', 'g/3'],
            labels: ['space-notes'],
          },
        },
      ],
    },
    {
      id: '4.6',
      title: 'Reading Exercise: Bass Clef',
      steps: [
        {
          type: 'instruction',
          title: 'Bass Clef Reading',
          content: `
            <p>Now let's practice reading bass clef notes. Place your <strong>left hand</strong> in C position:</p>
            <ul>
              <li><strong>Pinky (5)</strong> on C3</li>
              <li><strong>Ring (4)</strong> on D3</li>
              <li><strong>Middle (3)</strong> on E3</li>
              <li><strong>Index (2)</strong> on F3</li>
              <li><strong>Thumb (1)</strong> on G3</li>
            </ul>
            <p>Remember the bass clef mnemonics:</p>
            <ul>
              <li><strong>Lines:</strong> G-B-D-F-A — "Good Boys Do Fine Always"</li>
              <li><strong>Spaces:</strong> A-C-E-G — "All Cows Eat Grass"</li>
            </ul>
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
          title: 'Read and Play: Bass Clef Stepping Up',
          instructions: 'Read these bass clef notes and play them with your left hand. They step up from C to G. Pinky (5) starts on C.',
          notes: [
            { keys: ['c/3'], duration: 'h', finger: [5] },
            { keys: ['d/3'], duration: 'h', finger: [4] },
            { keys: ['e/3'], duration: 'h', finger: [3] },
            { keys: ['f/3'], duration: 'h', finger: [2] },
            { keys: ['g/3'], duration: 'w', finger: [1] },
          ],
          clef: 'bass',
          bpm: 72,
          timeSignature: [4, 4],
          fingerNumbers: { 'C3': 5, 'D3': 4, 'E3': 3, 'F3': 2, 'G3': 1 },
          handsRequired: 'left',
          requireTiming: false,
        },
        {
          type: 'exercise',
          title: 'Read and Play: Bass Clef Mixed',
          instructions: 'These bass clef notes are mixed up. Read each one carefully. Remember: the second space is C, and the fourth line is F.',
          notes: [
            { keys: ['g/3'], duration: 'q', finger: [1] },
            { keys: ['e/3'], duration: 'q', finger: [3] },
            { keys: ['c/3'], duration: 'q', finger: [5] },
            { keys: ['f/3'], duration: 'q', finger: [2] },
            { keys: ['d/3'], duration: 'q', finger: [4] },
            { keys: ['e/3'], duration: 'q', finger: [3] },
            { keys: ['g/3'], duration: 'q', finger: [1] },
            { keys: ['c/3'], duration: 'q', finger: [5] },
          ],
          clef: 'bass',
          bpm: 76,
          timeSignature: [4, 4],
          fingerNumbers: { 'C3': 5, 'D3': 4, 'E3': 3, 'F3': 2, 'G3': 1 },
          handsRequired: 'left',
          requireTiming: false,
        },
        {
          type: 'exercise',
          title: 'Read and Play: Bass Clef Melody',
          instructions: 'Read this short left-hand melody from the bass clef staff. Take your time identifying each note before playing.',
          notes: [
            { keys: ['c/3'], duration: 'q', finger: [5] },
            { keys: ['e/3'], duration: 'q', finger: [3] },
            { keys: ['g/3'], duration: 'q', finger: [1] },
            { keys: ['f/3'], duration: 'q', finger: [2] },
            { keys: ['e/3'], duration: 'q', finger: [3] },
            { keys: ['d/3'], duration: 'q', finger: [4] },
            { keys: ['c/3'], duration: 'h', finger: [5] },
          ],
          clef: 'bass',
          bpm: 76,
          timeSignature: [4, 4],
          fingerNumbers: { 'C3': 5, 'D3': 4, 'E3': 3, 'F3': 2, 'G3': 1 },
          handsRequired: 'left',
          requireTiming: false,
        },
      ],
    },
    {
      id: '4.7',
      title: 'The Grand Staff',
      steps: [
        {
          type: 'instruction',
          title: 'Combining Both Clefs',
          content: `
            <p>Piano music uses both clefs at the same time, connected together into what's called the <strong>grand staff</strong>.</p>
            <p>The grand staff consists of:</p>
            <ul>
              <li>A <strong>treble clef staff</strong> on top (right hand)</li>
              <li>A <strong>bass clef staff</strong> on the bottom (left hand)</li>
              <li>A <strong>brace</strong> (curly bracket) on the left connecting them</li>
            </ul>
            <p>The two staves are read simultaneously — your right hand plays what's written on top, and your left hand plays what's on the bottom.</p>
          `,
          diagram: 'staff-demo',
          diagramData: {
            clef: 'grand',
            showEmptyStaff: true,
            labels: ['treble-top', 'bass-bottom', 'brace'],
          },
        },
        {
          type: 'instruction',
          title: 'Middle C Bridges the Gap',
          content: `
            <p><strong>Middle C</strong> is the note that connects the treble and bass clef staves. It sits between them:</p>
            <ul>
              <li>In the <strong>treble clef</strong>, Middle C is on a ledger line <strong>below</strong> the staff</li>
              <li>In the <strong>bass clef</strong>, Middle C is on a ledger line <strong>above</strong> the staff</li>
            </ul>
            <p>It's the same note either way! Middle C is the bridge between your two hands on the grand staff.</p>
            <p>When you see piano sheet music, you'll always see the grand staff. Now you know how to read both parts!</p>
          `,
          diagram: 'staff-demo',
          diagramData: {
            clef: 'grand',
            highlightNotes: ['c/4'],
            labels: ['middle-c-bridge'],
          },
        },
        {
          type: 'demo',
          title: 'Grand Staff in Action',
          description: 'Watch the grand staff as both hands play together. The right hand plays C-E-G while the left hand holds C.',
          notes: [
            { keys: ['c/3', 'c/4'], duration: 'h', finger: [5, 1] },
            { keys: ['c/3', 'e/4'], duration: 'h', finger: [5, 3] },
            { keys: ['c/3', 'g/4'], duration: 'h', finger: [5, 5] },
            { keys: ['c/3', 'e/4'], duration: 'h', finger: [5, 3] },
            { keys: ['c/3', 'c/4'], duration: 'w', finger: [5, 1] },
          ],
          bpm: 72,
          timeSignature: [4, 4],
          clef: 'grand',
        },
      ],
    },
    {
      id: '4.8',
      title: 'Steps and Skips',
      steps: [
        {
          type: 'instruction',
          title: 'What are Steps?',
          content: `
            <p>When reading music, you'll notice notes moving in two basic ways: <strong>steps</strong> and <strong>skips</strong>.</p>
            <p>A <strong>step</strong> is when a note moves to the very next note — from a line to the neighboring space, or from a space to the neighboring line. Steps are also called <strong>2nds</strong> (seconds).</p>
            <p>On the keyboard, a step means moving to the next white key (no keys skipped). Examples:</p>
            <ul>
              <li>C to D — a step up</li>
              <li>E to D — a step down</li>
              <li>F to G — a step up</li>
            </ul>
            <p>On the staff, steps look like they move from a line to the adjacent space, or from a space to the adjacent line.</p>
          `,
          diagram: 'staff-demo',
          diagramData: {
            clef: 'treble',
            notes: ['c/4', 'd/4', 'e/4', 'f/4', 'g/4'],
            labels: ['steps'],
          },
        },
        {
          type: 'instruction',
          title: 'What are Skips?',
          content: `
            <p>A <strong>skip</strong> is when a note jumps over one note to the next. Skips move from a line to the next line, or from a space to the next space. Skips are also called <strong>3rds</strong> (thirds).</p>
            <p>On the keyboard, a skip means jumping over one white key. Examples:</p>
            <ul>
              <li>C to E — a skip up (skips over D)</li>
              <li>G to E — a skip down (skips over F)</li>
              <li>F to D — a skip down (skips over E)</li>
            </ul>
            <p>On the staff, skips look like they move from one line to the next line, or from one space to the next space.</p>
            <p>Being able to quickly recognize steps and skips helps you read music much faster — you don't have to identify every note from scratch.</p>
          `,
          diagram: 'staff-demo',
          diagramData: {
            clef: 'treble',
            notes: ['c/4', 'e/4', 'g/4', 'e/4', 'c/4'],
            labels: ['skips'],
          },
        },
        {
          type: 'exercise',
          title: 'Steps and Skips Practice',
          instructions: 'Play this pattern that mixes steps and skips. C-D is a step, D-F is a skip, F-E is a step, E-G is a skip, then step back down.',
          notes: [
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['f/4'], duration: 'q', finger: [4] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['g/4'], duration: 'h', finger: [5] },
            { keys: ['f/4'], duration: 'q', finger: [4] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['c/4'], duration: 'h', finger: [1] },
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
    {
      id: '4.9',
      title: '3/4 Time Signature',
      steps: [
        {
          type: 'instruction',
          title: 'What is 3/4 Time?',
          content: `
            <p>So far, you've been playing in <strong>4/4 time</strong> — 4 beats per measure. Now let's learn a new time signature: <strong>3/4 time</strong>.</p>
            <p>In 3/4 time:</p>
            <ul>
              <li>There are <strong>3 beats per measure</strong> (not 4)</li>
              <li>The <strong>quarter note</strong> still gets one beat</li>
              <li>Each measure adds up to 3 beats</li>
            </ul>
            <p>3/4 time is called <strong>waltz time</strong> because it has a characteristic "ONE-two-three, ONE-two-three" feeling — like a waltz dance rhythm.</p>
            <p>A whole note won't fit in 3/4 time (it needs 4 beats). Instead, you'll use a <strong>dotted half note</strong> (3 beats) to fill a whole measure.</p>
          `,
        },
        {
          type: 'demo',
          title: 'Hear 3/4 Time',
          description: 'Listen to this melody in 3/4 time. Count "ONE-two-three" along with each measure. Notice how it feels different from 4/4.',
          notes: [
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['g/4'], duration: 'q', finger: [5] },
            { keys: ['f/4'], duration: 'q', finger: [4] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['f/4'], duration: 'q', finger: [4] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['c/4'], duration: 'q', finger: [1] },
          ],
          bpm: 90,
          timeSignature: [3, 4],
          clef: 'treble',
        },
        {
          type: 'exercise',
          title: 'Playing in 3/4 Time',
          instructions: 'Play this waltz-like melody in 3/4 time. Each measure has 3 beats. Count "ONE-two-three" as you play.',
          notes: [
            { keys: ['c/4'], duration: 'h', finger: [1] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['g/4'], duration: 'h', finger: [5] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['f/4'], duration: 'q', finger: [4] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['c/4'], duration: 'h', finger: [1] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['e/4'], duration: 'h', finger: [3] },
            { keys: ['c/4'], duration: 'q', finger: [1] },
          ],
          clef: 'treble',
          bpm: 84,
          timeSignature: [3, 4],
          fingerNumbers: { 'C4': 1, 'D4': 2, 'E4': 3, 'F4': 4, 'G4': 5 },
          handsRequired: 'right',
          requireTiming: false,
        },
        {
          type: 'exercise',
          title: 'Left Hand in 3/4',
          instructions: 'Now try 3/4 time with your left hand. Place your left hand in C position (pinky on C3). Count "ONE-two-three" for each measure.',
          notes: [
            { keys: ['c/3'], duration: 'h', finger: [5] },
            { keys: ['e/3'], duration: 'q', finger: [3] },
            { keys: ['g/3'], duration: 'h', finger: [1] },
            { keys: ['e/3'], duration: 'q', finger: [3] },
            { keys: ['f/3'], duration: 'q', finger: [2] },
            { keys: ['d/3'], duration: 'q', finger: [4] },
            { keys: ['e/3'], duration: 'q', finger: [3] },
            { keys: ['c/3'], duration: 'h', finger: [5] },
            { keys: ['c/3'], duration: 'q', finger: [5] },
          ],
          clef: 'bass',
          bpm: 80,
          timeSignature: [3, 4],
          fingerNumbers: { 'C3': 5, 'D3': 4, 'E3': 3, 'F3': 2, 'G3': 1 },
          handsRequired: 'left',
          requireTiming: false,
        },
      ],
    },
    {
      id: '4.10',
      title: 'Module Review',
      steps: [
        {
          type: 'instruction',
          title: 'What You\'ve Learned',
          content: `
            <p>Congratulations! You've completed Module 4 and now know how to read music notation. Here's what you learned:</p>
            <ul>
              <li>The <strong>staff</strong> has 5 lines and 4 spaces</li>
              <li>The <strong>treble clef</strong> (G clef) — used for right hand
                <ul>
                  <li>Lines: E-G-B-D-F — "Every Good Boy Does Fine"</li>
                  <li>Spaces: F-A-C-E — "FACE"</li>
                </ul>
              </li>
              <li>The <strong>bass clef</strong> (F clef) — used for left hand
                <ul>
                  <li>Lines: G-B-D-F-A — "Good Boys Do Fine Always"</li>
                  <li>Spaces: A-C-E-G — "All Cows Eat Grass"</li>
                </ul>
              </li>
              <li>The <strong>grand staff</strong> combines both clefs with Middle C bridging them</li>
              <li><strong>Steps</strong> (2nds) and <strong>skips</strong> (3rds) for reading intervals</li>
              <li><strong>3/4 time</strong> — waltz time with 3 beats per measure</li>
            </ul>
            <p>Now let's put it all together with a final reading exercise!</p>
          `,
        },
        {
          type: 'exercise',
          title: 'Review: Treble Clef Reading',
          instructions: 'Read and play this melody from the treble clef staff. Use your right hand in C position. Focus on identifying each note by its position on the staff.',
          notes: [
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['f/4'], duration: 'q', finger: [4] },
            { keys: ['g/4'], duration: 'q', finger: [5] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['e/4'], duration: 'h', finger: [3] },
            { keys: ['g/4'], duration: 'q', finger: [5] },
            { keys: ['f/4'], duration: 'q', finger: [4] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['c/4'], duration: 'w', finger: [1] },
          ],
          clef: 'treble',
          bpm: 84,
          timeSignature: [4, 4],
          fingerNumbers: { 'C4': 1, 'D4': 2, 'E4': 3, 'F4': 4, 'G4': 5 },
          handsRequired: 'right',
          requireTiming: false,
        },
        {
          type: 'exercise',
          title: 'Review: Bass Clef Reading',
          instructions: 'Now read and play this melody from the bass clef staff. Use your left hand in C position (pinky on C3).',
          notes: [
            { keys: ['c/3'], duration: 'q', finger: [5] },
            { keys: ['d/3'], duration: 'q', finger: [4] },
            { keys: ['e/3'], duration: 'q', finger: [3] },
            { keys: ['g/3'], duration: 'q', finger: [1] },
            { keys: ['f/3'], duration: 'q', finger: [2] },
            { keys: ['e/3'], duration: 'q', finger: [3] },
            { keys: ['d/3'], duration: 'h', finger: [4] },
            { keys: ['e/3'], duration: 'q', finger: [3] },
            { keys: ['f/3'], duration: 'q', finger: [2] },
            { keys: ['g/3'], duration: 'q', finger: [1] },
            { keys: ['e/3'], duration: 'q', finger: [3] },
            { keys: ['c/3'], duration: 'w', finger: [5] },
          ],
          clef: 'bass',
          bpm: 80,
          timeSignature: [4, 4],
          fingerNumbers: { 'C3': 5, 'D3': 4, 'E3': 3, 'F3': 2, 'G3': 1 },
          handsRequired: 'left',
          requireTiming: false,
        },
        {
          type: 'instruction',
          title: 'Module 4 Complete!',
          content: `
            <p>You can now read music! This is a huge milestone in your piano journey. Reading notation opens up thousands of pieces of sheet music for you to explore.</p>
            <p>Tips for continued improvement:</p>
            <ul>
              <li>Practice the mnemonics daily until they're second nature</li>
              <li>When you see a note, try to name it before playing it</li>
              <li>Look for steps and skips — they help you read faster</li>
              <li>Start with the treble clef and add bass clef gradually</li>
            </ul>
            <p>In the next module, you'll expand your range and learn more about dynamics and expression!</p>
          `,
        },
      ],
    },
  ],
};

export default module04;
