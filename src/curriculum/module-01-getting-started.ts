import type { Module } from '../types';

const module01: Module = {
  id: 1,
  title: 'Getting Started',
  description: 'Keyboard layout, posture, hand position, and finger numbering',
  lessons: [
    {
      id: '1.1',
      title: 'Welcome to the Piano',
      steps: [
        {
          type: 'instruction',
          title: 'Your Piano Journey Begins',
          content: `
            <p>Welcome! You're about to begin an exciting journey learning the piano. This app will guide you step by step from your very first note to playing real music.</p>
            <p>Here's what we'll cover in this first module:</p>
            <ul>
              <li>How the piano keyboard is organized</li>
              <li>How to sit and position your hands</li>
              <li>The finger numbering system</li>
              <li>Playing your first sounds</li>
            </ul>
            <p>Let's start by getting to know your keyboard!</p>
          `,
        },
        {
          type: 'instruction',
          title: 'The Black Key Pattern',
          content: `
            <p>Look at your piano keyboard. Notice how the <strong>black keys</strong> are arranged in a repeating pattern:</p>
            <ul>
              <li>A group of <strong>2 black keys</strong></li>
              <li>A group of <strong>3 black keys</strong></li>
              <li>This pattern repeats across the entire keyboard</li>
            </ul>
            <p>This pattern is your roadmap! It helps you find any note on the piano. The group of 2 black keys and the group of 3 black keys alternate all the way across.</p>
            <p>Take a moment to look at your piano and identify these groups. Can you find them?</p>
          `,
          diagram: 'keyboard-highlight',
          diagramData: {
            highlightNotes: ['C#4', 'D#4', 'F#4', 'G#4', 'A#4'],
            viewportStart: 'C3',
            viewportEnd: 'C6',
          },
        },
        {
          type: 'instruction',
          title: 'Finding White Key Names',
          content: `
            <p>Every white key has a letter name from <strong>A through G</strong>. After G, the pattern starts over at A.</p>
            <p>Here's the trick to finding any white key:</p>
            <ul>
              <li>The white key just to the <strong>left of the 2 black keys</strong> is always <strong>C</strong></li>
              <li>The white key just to the <strong>left of the 3 black keys</strong> is always <strong>F</strong></li>
            </ul>
            <p>From C, the notes go: <strong>C - D - E - F - G - A - B</strong>, then back to C.</p>
            <p>Try finding all the C keys on your piano — there should be several of them!</p>
          `,
          diagram: 'keyboard-highlight',
          diagramData: {
            highlightNotes: ['C3', 'C4', 'C5'],
            viewportStart: 'C3',
            viewportEnd: 'C6',
          },
        },
      ],
    },
    {
      id: '1.2',
      title: 'Middle C and Posture',
      steps: [
        {
          type: 'instruction',
          title: 'Finding Middle C',
          content: `
            <p><strong>Middle C</strong> is the most important note on the piano. It sits right in the center of the keyboard.</p>
            <p>To find it:</p>
            <ol>
              <li>Sit at the center of your piano bench</li>
              <li>Find the group of 2 black keys closest to the middle of the keyboard</li>
              <li>The white key just to the left of those 2 black keys is <strong>Middle C</strong></li>
            </ol>
            <p>Middle C is your home base. Almost everything you learn will start from here.</p>
          `,
          diagram: 'keyboard-highlight',
          diagramData: {
            highlightNotes: ['C4'],
            viewportStart: 'C3',
            viewportEnd: 'C6',
            fingerNumbers: { 'C4': 1 },
          },
        },
        {
          type: 'instruction',
          title: 'Sitting at the Piano',
          content: `
            <p>Good posture is essential for comfortable playing and avoiding injury. Here's how to sit:</p>
            <ul>
              <li><strong>Bench height:</strong> Your elbows should be roughly level with the keyboard, or slightly above</li>
              <li><strong>Distance:</strong> Sit at the front half of the bench, not pushed back</li>
              <li><strong>Feet:</strong> Flat on the floor</li>
              <li><strong>Back:</strong> Straight but relaxed — not rigid</li>
              <li><strong>Shoulders:</strong> Relaxed and down, not hunched up</li>
            </ul>
            <p>Take a moment to adjust your seating now. Comfort will help you play better and practice longer.</p>
          `,
        },
        {
          type: 'exercise',
          title: 'Find and Play Middle C',
          instructions: 'Find Middle C on your piano and play it 4 times. Use your right hand thumb (finger 1). Press the key gently — you don\'t need to press hard!',
          notes: [
            { keys: ['c/4'], duration: 'w', finger: [1] },
            { keys: ['c/4'], duration: 'w', finger: [1] },
            { keys: ['c/4'], duration: 'w', finger: [1] },
            { keys: ['c/4'], duration: 'w', finger: [1] },
          ],
          clef: 'treble',
          bpm: 60,
          timeSignature: [4, 4],
          fingerNumbers: { 'C4': 1 },
          handsRequired: 'right',
          requireTiming: false,
        },
      ],
    },
    {
      id: '1.3',
      title: 'Hand Position',
      steps: [
        {
          type: 'instruction',
          title: 'The Curved Hand Shape',
          content: `
            <p>Proper hand shape is one of the most important things to learn early. Here's how your hands should look:</p>
            <ul>
              <li><strong>Fingers curved</strong> — imagine holding a small ball or an orange</li>
              <li><strong>Fingertips</strong> touch the keys (not the finger pads)</li>
              <li><strong>Knuckles</strong> should be the highest point — never let them collapse inward</li>
              <li><strong>Thumb</strong> plays on its side corner, not flat</li>
              <li><strong>Wrist</strong> level with your forearm, relaxed and flexible</li>
            </ul>
            <p>The most common beginner mistake is playing with flat fingers. Always keep that gentle curve!</p>
          `,
        },
        {
          type: 'instruction',
          title: 'Common Mistakes to Avoid',
          content: `
            <p>Watch out for these common beginner habits:</p>
            <ul>
              <li><strong>Flat fingers:</strong> Keep them curved, like holding a ball</li>
              <li><strong>Collapsed knuckles:</strong> The first knuckle should arch upward</li>
              <li><strong>Raised shoulders:</strong> Drop your shoulders down and relax</li>
              <li><strong>Pressing too hard:</strong> The key only needs to go down — don't hammer it</li>
              <li><strong>Stiff wrists:</strong> Keep your wrists loose and flexible</li>
            </ul>
            <p>Check your posture right now. Are your shoulders relaxed? Fingers curved? Good!</p>
          `,
        },
      ],
    },
    {
      id: '1.4',
      title: 'Finger Numbers',
      steps: [
        {
          type: 'instruction',
          title: 'The Finger Numbering System',
          content: `
            <p>In piano, each finger has a number. This system is the same for both hands:</p>
            <ul>
              <li><strong>1</strong> = Thumb</li>
              <li><strong>2</strong> = Index finger</li>
              <li><strong>3</strong> = Middle finger</li>
              <li><strong>4</strong> = Ring finger</li>
              <li><strong>5</strong> = Pinky</li>
            </ul>
            <p>When you see a number above or below a note in sheet music, it tells you which finger to use.</p>
            <p>Notice that the thumbs (1) meet in the middle when your hands are on the keyboard, and the pinkies (5) are on the outside.</p>
          `,
          diagram: 'hand-position',
        },
        {
          type: 'instruction',
          title: 'Right Hand C Position',
          content: `
            <p>Place your right hand on the keyboard with:</p>
            <ul>
              <li><strong>Thumb (1)</strong> on <strong>C</strong> (Middle C)</li>
              <li><strong>Index (2)</strong> on <strong>D</strong></li>
              <li><strong>Middle (3)</strong> on <strong>E</strong></li>
              <li><strong>Ring (4)</strong> on <strong>F</strong></li>
              <li><strong>Pinky (5)</strong> on <strong>G</strong></li>
            </ul>
            <p>This is called the <strong>C position</strong>. You'll use it a lot in your first weeks of playing.</p>
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
          title: 'Play Each Finger',
          instructions: 'Place your right hand in C position. Play each note from C to G, one finger at a time. Thumb (1) on C, index (2) on D, middle (3) on E, ring (4) on F, pinky (5) on G.',
          notes: [
            { keys: ['c/4'], duration: 'w', finger: [1] },
            { keys: ['d/4'], duration: 'w', finger: [2] },
            { keys: ['e/4'], duration: 'w', finger: [3] },
            { keys: ['f/4'], duration: 'w', finger: [4] },
            { keys: ['g/4'], duration: 'w', finger: [5] },
          ],
          clef: 'treble',
          bpm: 60,
          timeSignature: [4, 4],
          fingerNumbers: { 'C4': 1, 'D4': 2, 'E4': 3, 'F4': 4, 'G4': 5 },
          handsRequired: 'right',
          requireTiming: false,
        },
      ],
    },
    {
      id: '1.5',
      title: 'Exploring the Keyboard',
      steps: [
        {
          type: 'instruction',
          title: 'High and Low Sounds',
          content: `
            <p>The piano keyboard goes from <strong>low</strong> sounds on the left to <strong>high</strong> sounds on the right.</p>
            <ul>
              <li>Keys to the <strong>left</strong> produce lower, deeper sounds</li>
              <li>Keys to the <strong>right</strong> produce higher, brighter sounds</li>
            </ul>
            <p>Try playing some keys at the far left of your piano, then some at the far right. Hear the difference?</p>
            <p>Each time the note names repeat (C to C), that's called an <strong>octave</strong>. Your piano has about 7 octaves.</p>
          `,
        },
        {
          type: 'exercise',
          title: 'Play C in Different Octaves',
          instructions: 'Play Middle C (C4), then the C one octave higher (C5), then back to Middle C. This helps you hear what an octave sounds like.',
          notes: [
            { keys: ['c/4'], duration: 'w', finger: [1] },
            { keys: ['c/5'], duration: 'w', finger: [1] },
            { keys: ['c/4'], duration: 'w', finger: [1] },
          ],
          clef: 'treble',
          bpm: 60,
          timeSignature: [4, 4],
          fingerNumbers: { 'C4': 1, 'C5': 1 },
          handsRequired: 'right',
          requireTiming: false,
        },
        {
          type: 'instruction',
          title: 'Module 1 Complete!',
          content: `
            <p>Great work! You've learned:</p>
            <ul>
              <li>The black key pattern (groups of 2 and 3)</li>
              <li>How to find any white key using black key landmarks</li>
              <li>Where Middle C is</li>
              <li>Proper sitting posture and hand shape</li>
              <li>The finger numbering system (1-5)</li>
              <li>The C position for your right hand</li>
            </ul>
            <p>In the next module, you'll learn your first real notes and play your first melody!</p>
          `,
        },
      ],
    },
  ],
};

export default module01;
