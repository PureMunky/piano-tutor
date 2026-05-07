import type { Module } from '../types';

const module06: Module = {
  id: 6,
  title: 'Scales & Keys',
  description: 'Major scales, key signatures, and thumb-under technique',
  lessons: [
    // ── Lesson 6.1: Half Steps and Whole Steps ──
    {
      id: '6.1',
      title: 'Half Steps and Whole Steps',
      steps: [
        {
          type: 'instruction',
          title: 'The Building Blocks of Scales',
          content: `
            <p>Before we learn scales, we need to understand two fundamental distances on the keyboard:</p>
            <ul>
              <li><strong>Half step</strong> — the smallest distance between two keys. Move to the very next key (including black keys). Examples: E to F, B to C, C to C#, F# to G.</li>
              <li><strong>Whole step</strong> — two half steps. Skip one key in between. Examples: C to D, D to E, F to G, A to B.</li>
            </ul>
            <p>Here's the key insight: most white keys are a <strong>whole step</strong> apart, but there are two exceptions:</p>
            <ul>
              <li><strong>E to F</strong> = half step (no black key between them)</li>
              <li><strong>B to C</strong> = half step (no black key between them)</li>
            </ul>
            <p>Look at your keyboard — wherever there's no black key between two white keys, that's a half step.</p>
          `,
          diagram: 'keyboard-highlight',
          diagramData: {
            highlightNotes: ['E4', 'F4', 'B4', 'C5'],
            viewportStart: 'C4',
            viewportEnd: 'C6',
          },
        },
        {
          type: 'demo',
          title: 'Hear Half Steps and Whole Steps',
          description: 'Listen to half steps (very close together) and whole steps (slightly wider). Half steps: E-F, B-C. Whole steps: C-D, F-G.',
          notes: [
            // half step: E to F
            { keys: ['e/4'], duration: 'h', finger: [3] },
            { keys: ['f/4'], duration: 'h', finger: [4] },
            // half step: B to C
            { keys: ['b/4'], duration: 'h', finger: [3] },
            { keys: ['c/5'], duration: 'h', finger: [4] },
            // whole step: C to D
            { keys: ['c/4'], duration: 'h', finger: [1] },
            { keys: ['d/4'], duration: 'h', finger: [2] },
            // whole step: F to G
            { keys: ['f/4'], duration: 'h', finger: [4] },
            { keys: ['g/4'], duration: 'h', finger: [5] },
          ],
          bpm: 66,
          timeSignature: [4, 4],
          clef: 'treble',
        },
        {
          type: 'exercise',
          title: 'Identify Half and Whole Steps',
          instructions: 'Play these pairs of notes. The first two pairs are half steps (E-F, B-C). The last two pairs are whole steps (C-D, G-A). Listen for how the half steps sound closer together.',
          notes: [
            { keys: ['e/4'], duration: 'h', finger: [3] },
            { keys: ['f/4'], duration: 'h', finger: [4] },
            { keys: ['b/4'], duration: 'h', finger: [3] },
            { keys: ['c/5'], duration: 'h', finger: [4] },
            { keys: ['c/4'], duration: 'h', finger: [1] },
            { keys: ['d/4'], duration: 'h', finger: [2] },
            { keys: ['g/4'], duration: 'h', finger: [1] },
            { keys: ['a/4'], duration: 'h', finger: [2] },
          ],
          clef: 'treble',
          bpm: 66,
          timeSignature: [4, 4],
          fingerNumbers: { 'C4': 1, 'D4': 2, 'E4': 3, 'F4': 4, 'G4': 1, 'A4': 2, 'B4': 3, 'C5': 4 },
          handsRequired: 'right',
          requireTiming: false,
        },
      ],
    },

    // ── Lesson 6.2: The C Major Scale ──
    {
      id: '6.2',
      title: 'The C Major Scale',
      steps: [
        {
          type: 'instruction',
          title: 'Your First Scale',
          content: `
            <p>A <strong>scale</strong> is a set of notes arranged in order from low to high (or high to low). The most common type is the <strong>major scale</strong>.</p>
            <p>The <strong>C major scale</strong> uses only white keys: <strong>C - D - E - F - G - A - B - C</strong>.</p>
            <p>The pattern of whole steps (W) and half steps (H) in every major scale is:</p>
            <p style="text-align: center; font-size: 1.2em;"><strong>W - W - H - W - W - W - H</strong></p>
            <p>In C major:</p>
            <ul>
              <li>C to D = whole step</li>
              <li>D to E = whole step</li>
              <li>E to F = <strong>half step</strong></li>
              <li>F to G = whole step</li>
              <li>G to A = whole step</li>
              <li>A to B = whole step</li>
              <li>B to C = <strong>half step</strong></li>
            </ul>
            <p>This W-W-H-W-W-W-H pattern is what makes a scale sound "major" — bright and happy.</p>
          `,
          diagram: 'keyboard-highlight',
          diagramData: {
            highlightNotes: ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5'],
            viewportStart: 'C4',
            viewportEnd: 'C6',
          },
        },
        {
          type: 'demo',
          title: 'Hear the C Major Scale',
          description: 'Listen to the C major scale ascending from C4 to C5. Notice how bright and familiar it sounds.',
          notes: [
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['f/4'], duration: 'q', finger: [1] },
            { keys: ['g/4'], duration: 'q', finger: [2] },
            { keys: ['a/4'], duration: 'q', finger: [3] },
            { keys: ['b/4'], duration: 'q', finger: [4] },
            { keys: ['c/5'], duration: 'h', finger: [5] },
          ],
          bpm: 72,
          timeSignature: [4, 4],
          clef: 'treble',
        },
        {
          type: 'instruction',
          title: 'Scale Fingering: The Thumb-Under Trick',
          content: `
            <p>A scale has 8 notes, but you only have 5 fingers. So how do you play it? The answer is the <strong>thumb-under</strong> technique.</p>
            <p>Right hand C major scale fingering:</p>
            <ul>
              <li>C = <strong>1</strong> (thumb)</li>
              <li>D = <strong>2</strong></li>
              <li>E = <strong>3</strong></li>
              <li>F = <strong>1</strong> (thumb crosses under fingers 2-3)</li>
              <li>G = <strong>2</strong></li>
              <li>A = <strong>3</strong></li>
              <li>B = <strong>4</strong></li>
              <li>C = <strong>5</strong></li>
            </ul>
            <p>The fingering is: <strong>1-2-3-1-2-3-4-5</strong>. After playing E with finger 3, your thumb tucks under to land on F. This lets you continue smoothly up the keyboard.</p>
          `,
        },
      ],
    },

    // ── Lesson 6.3: C Major Scale Exercise (Right Hand) ──
    {
      id: '6.3',
      title: 'C Major Scale Exercise (Right Hand)',
      steps: [
        {
          type: 'instruction',
          title: 'Playing the Full Scale',
          content: `
            <p>Let's play the C major scale with correct fingering. Remember:</p>
            <ul>
              <li><strong>Ascending:</strong> 1-2-3-1-2-3-4-5</li>
              <li><strong>Descending:</strong> 5-4-3-2-1-3-2-1</li>
            </ul>
            <p>Tips for a smooth scale:</p>
            <ul>
              <li>When the thumb crosses under (after finger 3 on E), keep your hand steady — don't let your wrist bob up and down</li>
              <li>Aim for even volume on every note</li>
              <li>Start slowly — speed comes with practice</li>
            </ul>
          `,
        },
        {
          type: 'exercise',
          title: 'C Major Scale Ascending',
          instructions: 'Play the C major scale going up: C-D-E-F-G-A-B-C. Use fingering 1-2-3-1-2-3-4-5. After E (finger 3), tuck your thumb under to reach F.',
          notes: [
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['f/4'], duration: 'q', finger: [1] },
            { keys: ['g/4'], duration: 'q', finger: [2] },
            { keys: ['a/4'], duration: 'q', finger: [3] },
            { keys: ['b/4'], duration: 'q', finger: [4] },
            { keys: ['c/5'], duration: 'h', finger: [5] },
          ],
          clef: 'treble',
          bpm: 66,
          timeSignature: [4, 4],
          fingerNumbers: { 'C4': 1, 'D4': 2, 'E4': 3, 'F4': 1, 'G4': 2, 'A4': 3, 'B4': 4, 'C5': 5 },
          handsRequired: 'right',
          requireTiming: false,
        },
        {
          type: 'exercise',
          title: 'C Major Scale Descending',
          instructions: 'Now play the scale coming down: C-B-A-G-F-E-D-C. Use fingering 5-4-3-2-1-3-2-1. After G (finger 2) and F (finger 1), cross finger 3 over to reach E.',
          notes: [
            { keys: ['c/5'], duration: 'q', finger: [5] },
            { keys: ['b/4'], duration: 'q', finger: [4] },
            { keys: ['a/4'], duration: 'q', finger: [3] },
            { keys: ['g/4'], duration: 'q', finger: [2] },
            { keys: ['f/4'], duration: 'q', finger: [1] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['c/4'], duration: 'h', finger: [1] },
          ],
          clef: 'treble',
          bpm: 66,
          timeSignature: [4, 4],
          fingerNumbers: { 'C5': 5, 'B4': 4, 'A4': 3, 'G4': 2, 'F4': 1, 'E4': 3, 'D4': 2, 'C4': 1 },
          handsRequired: 'right',
          requireTiming: false,
        },
        {
          type: 'exercise',
          title: 'C Major Scale Up and Down',
          instructions: 'Play the full C major scale ascending and descending without stopping. Keep a steady, even tempo.',
          notes: [
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['f/4'], duration: 'q', finger: [1] },
            { keys: ['g/4'], duration: 'q', finger: [2] },
            { keys: ['a/4'], duration: 'q', finger: [3] },
            { keys: ['b/4'], duration: 'q', finger: [4] },
            { keys: ['c/5'], duration: 'q', finger: [5] },
            { keys: ['b/4'], duration: 'q', finger: [4] },
            { keys: ['a/4'], duration: 'q', finger: [3] },
            { keys: ['g/4'], duration: 'q', finger: [2] },
            { keys: ['f/4'], duration: 'q', finger: [1] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['c/4'], duration: 'h', finger: [1] },
          ],
          clef: 'treble',
          bpm: 66,
          timeSignature: [4, 4],
          fingerNumbers: { 'C4': 1, 'D4': 2, 'E4': 3, 'F4': 1, 'G4': 2, 'A4': 3, 'B4': 4, 'C5': 5 },
          handsRequired: 'right',
          requireTiming: false,
        },
      ],
    },

    // ── Lesson 6.4: C Major Scale (Left Hand) ──
    {
      id: '6.4',
      title: 'C Major Scale (Left Hand)',
      steps: [
        {
          type: 'instruction',
          title: 'Left Hand Scale Fingering',
          content: `
            <p>The left hand uses a different fingering for the C major scale. Since the hand is mirrored, the thumb-under happens at a different point.</p>
            <p>Left hand C major scale (ascending C3 to C4):</p>
            <ul>
              <li>C = <strong>5</strong> (pinky)</li>
              <li>D = <strong>4</strong></li>
              <li>E = <strong>3</strong></li>
              <li>F = <strong>2</strong></li>
              <li>G = <strong>1</strong> (thumb)</li>
              <li>A = <strong>3</strong> (finger 3 crosses over thumb)</li>
              <li>B = <strong>2</strong></li>
              <li>C = <strong>1</strong></li>
            </ul>
            <p>The fingering is: <strong>5-4-3-2-1-3-2-1</strong>. After G (thumb), finger 3 crosses over to reach A.</p>
          `,
          diagram: 'keyboard-highlight',
          diagramData: {
            highlightNotes: ['C3', 'D3', 'E3', 'F3', 'G3', 'A3', 'B3', 'C4'],
            viewportStart: 'C3',
            viewportEnd: 'C5',
            fingerNumbers: { 'C3': 5, 'D3': 4, 'E3': 3, 'F3': 2, 'G3': 1, 'A3': 3, 'B3': 2, 'C4': 1 },
          },
        },
        {
          type: 'exercise',
          title: 'Left Hand C Scale Ascending',
          instructions: 'Play the C major scale with your left hand going up from C3 to C4. Fingering: 5-4-3-2-1-3-2-1. After G (thumb), cross finger 3 over to A.',
          notes: [
            { keys: ['c/3'], duration: 'q', finger: [5] },
            { keys: ['d/3'], duration: 'q', finger: [4] },
            { keys: ['e/3'], duration: 'q', finger: [3] },
            { keys: ['f/3'], duration: 'q', finger: [2] },
            { keys: ['g/3'], duration: 'q', finger: [1] },
            { keys: ['a/3'], duration: 'q', finger: [3] },
            { keys: ['b/3'], duration: 'q', finger: [2] },
            { keys: ['c/4'], duration: 'h', finger: [1] },
          ],
          clef: 'bass',
          bpm: 60,
          timeSignature: [4, 4],
          fingerNumbers: { 'C3': 5, 'D3': 4, 'E3': 3, 'F3': 2, 'G3': 1, 'A3': 3, 'B3': 2, 'C4': 1 },
          handsRequired: 'left',
          requireTiming: false,
        },
        {
          type: 'exercise',
          title: 'Left Hand C Scale Descending',
          instructions: 'Now play the scale going down from C4 to C3. Fingering: 1-2-3-1-2-3-4-5. After A (finger 3), tuck your thumb under to reach G.',
          notes: [
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['b/3'], duration: 'q', finger: [2] },
            { keys: ['a/3'], duration: 'q', finger: [3] },
            { keys: ['g/3'], duration: 'q', finger: [1] },
            { keys: ['f/3'], duration: 'q', finger: [2] },
            { keys: ['e/3'], duration: 'q', finger: [3] },
            { keys: ['d/3'], duration: 'q', finger: [4] },
            { keys: ['c/3'], duration: 'h', finger: [5] },
          ],
          clef: 'bass',
          bpm: 60,
          timeSignature: [4, 4],
          fingerNumbers: { 'C4': 1, 'B3': 2, 'A3': 3, 'G3': 1, 'F3': 2, 'E3': 3, 'D3': 4, 'C3': 5 },
          handsRequired: 'left',
          requireTiming: false,
        },
        {
          type: 'exercise',
          title: 'Left Hand C Scale Up and Down',
          instructions: 'Play the full left hand C major scale ascending and descending. Aim for smooth, even notes.',
          notes: [
            { keys: ['c/3'], duration: 'q', finger: [5] },
            { keys: ['d/3'], duration: 'q', finger: [4] },
            { keys: ['e/3'], duration: 'q', finger: [3] },
            { keys: ['f/3'], duration: 'q', finger: [2] },
            { keys: ['g/3'], duration: 'q', finger: [1] },
            { keys: ['a/3'], duration: 'q', finger: [3] },
            { keys: ['b/3'], duration: 'q', finger: [2] },
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['b/3'], duration: 'q', finger: [2] },
            { keys: ['a/3'], duration: 'q', finger: [3] },
            { keys: ['g/3'], duration: 'q', finger: [1] },
            { keys: ['f/3'], duration: 'q', finger: [2] },
            { keys: ['e/3'], duration: 'q', finger: [3] },
            { keys: ['d/3'], duration: 'q', finger: [4] },
            { keys: ['c/3'], duration: 'h', finger: [5] },
          ],
          clef: 'bass',
          bpm: 60,
          timeSignature: [4, 4],
          fingerNumbers: { 'C3': 5, 'D3': 4, 'E3': 3, 'F3': 2, 'G3': 1, 'A3': 3, 'B3': 2, 'C4': 1 },
          handsRequired: 'left',
          requireTiming: false,
        },
      ],
    },

    // ── Lesson 6.5: Thumb-Under Technique ──
    {
      id: '6.5',
      title: 'Thumb-Under Technique',
      steps: [
        {
          type: 'instruction',
          title: 'Mastering the Thumb Crossing',
          content: `
            <p>The <strong>thumb-under</strong> technique is essential for playing scales, arpeggios, and any passage that spans more than 5 notes.</p>
            <p>For the right hand:</p>
            <ol>
              <li>As fingers 1-2-3 play, the thumb begins to move under the hand</li>
              <li>The thumb should move <em>smoothly</em> — don't wait until the last moment</li>
              <li>Keep your wrist level and steady. Avoid twisting your hand or raising your wrist.</li>
              <li>The thumb lands softly on the next note at the same volume as the other fingers</li>
            </ol>
            <p>For the left hand, it's the opposite: finger 3 (or 4) crosses <em>over</em> the thumb when ascending.</p>
            <p>The most common mistake is bumping the volume on the thumb note. Practice until the crossover is invisible to the listener.</p>
          `,
        },
        {
          type: 'demo',
          title: 'Smooth Thumb Crossing',
          description: 'Listen carefully to the scale. The thumb crosses after E. Can you hear any bump? A good crossover should be seamless.',
          notes: [
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['f/4'], duration: 'q', finger: [1] },
            { keys: ['g/4'], duration: 'q', finger: [2] },
            { keys: ['a/4'], duration: 'q', finger: [3] },
            { keys: ['b/4'], duration: 'q', finger: [4] },
            { keys: ['c/5'], duration: 'q', finger: [5] },
          ],
          bpm: 72,
          timeSignature: [4, 4],
          clef: 'treble',
        },
        {
          type: 'exercise',
          title: 'Thumb-Under Drill',
          instructions: 'Focus on the crossover point. Play E-F-E-F repeatedly (finger 3 to thumb and back). Keep your wrist completely still and even.',
          notes: [
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['f/4'], duration: 'q', finger: [1] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['f/4'], duration: 'q', finger: [1] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['f/4'], duration: 'q', finger: [1] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['f/4'], duration: 'q', finger: [1] },
          ],
          clef: 'treble',
          bpm: 66,
          timeSignature: [4, 4],
          fingerNumbers: { 'E4': 3, 'F4': 1 },
          handsRequired: 'right',
          requireTiming: false,
        },
        {
          type: 'exercise',
          title: 'Extended Scale with Thumb-Under',
          instructions: 'Play from C4 up to C5 and back. Focus entirely on making the thumb crossover smooth and even. Go as slowly as you need.',
          notes: [
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['f/4'], duration: 'q', finger: [1] },
            { keys: ['g/4'], duration: 'q', finger: [2] },
            { keys: ['a/4'], duration: 'q', finger: [3] },
            { keys: ['b/4'], duration: 'q', finger: [4] },
            { keys: ['c/5'], duration: 'q', finger: [5] },
            { keys: ['b/4'], duration: 'q', finger: [4] },
            { keys: ['a/4'], duration: 'q', finger: [3] },
            { keys: ['g/4'], duration: 'q', finger: [2] },
            { keys: ['f/4'], duration: 'q', finger: [1] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['c/4'], duration: 'h', finger: [1] },
          ],
          clef: 'treble',
          bpm: 60,
          timeSignature: [4, 4],
          fingerNumbers: { 'C4': 1, 'D4': 2, 'E4': 3, 'F4': 1, 'G4': 2, 'A4': 3, 'B4': 4, 'C5': 5 },
          handsRequired: 'right',
          requireTiming: false,
        },
      ],
    },

    // ── Lesson 6.6: G Major Scale ──
    {
      id: '6.6',
      title: 'G Major Scale',
      steps: [
        {
          type: 'instruction',
          title: 'Your First Scale with a Sharp',
          content: `
            <p>The <strong>G major scale</strong> follows the same W-W-H-W-W-W-H pattern as C major, but it starts on G:</p>
            <p><strong>G - A - B - C - D - E - F# - G</strong></p>
            <p>Notice the <strong>F#</strong>! To keep the W-W-H-W-W-W-H pattern, the 7th note must be F# instead of F natural:</p>
            <ul>
              <li>G to A = whole step</li>
              <li>A to B = whole step</li>
              <li>B to C = half step</li>
              <li>C to D = whole step</li>
              <li>D to E = whole step</li>
              <li>E to F# = whole step</li>
              <li>F# to G = half step</li>
            </ul>
            <p>If you played F natural instead of F#, the scale would sound wrong — the pattern would be broken.</p>
          `,
          diagram: 'keyboard-highlight',
          diagramData: {
            highlightNotes: ['G4', 'A4', 'B4', 'C5', 'D5', 'E5', 'F#5', 'G5'],
            viewportStart: 'C4',
            viewportEnd: 'C6',
          },
        },
        {
          type: 'demo',
          title: 'Hear the G Major Scale',
          description: 'Listen to the G major scale. It has the same bright, happy quality as C major, just starting on a different note.',
          notes: [
            { keys: ['g/4'], duration: 'q', finger: [1] },
            { keys: ['a/4'], duration: 'q', finger: [2] },
            { keys: ['b/4'], duration: 'q', finger: [3] },
            { keys: ['c/5'], duration: 'q', finger: [1] },
            { keys: ['d/5'], duration: 'q', finger: [2] },
            { keys: ['e/5'], duration: 'q', finger: [3] },
            { keys: ['f#/5'], duration: 'q', finger: [4] },
            { keys: ['g/5'], duration: 'h', finger: [5] },
          ],
          bpm: 72,
          timeSignature: [4, 4],
          clef: 'treble',
        },
        {
          type: 'instruction',
          title: 'G Major Scale Fingering',
          content: `
            <p>The right hand fingering for G major is the same as C major:</p>
            <p><strong>Ascending: 1-2-3-1-2-3-4-5</strong></p>
            <ul>
              <li>G = 1, A = 2, B = 3 (thumb crosses under)</li>
              <li>C = 1, D = 2, E = 3, F# = 4, G = 5</li>
            </ul>
            <p><strong>Descending: 5-4-3-2-1-3-2-1</strong></p>
            <p>The thumb-under happens after B (finger 3), just like it happened after E in the C major scale. The only difference is that you play F# (the black key) with finger 4.</p>
          `,
        },
      ],
    },

    // ── Lesson 6.7: G Major Scale Exercise ──
    {
      id: '6.7',
      title: 'G Major Scale Exercise',
      steps: [
        {
          type: 'exercise',
          title: 'G Major Scale Ascending',
          instructions: 'Play the G major scale going up: G-A-B-C-D-E-F#-G. Fingering: 1-2-3-1-2-3-4-5. Remember to play F# (the black key to the right of F) with finger 4.',
          notes: [
            { keys: ['g/4'], duration: 'q', finger: [1] },
            { keys: ['a/4'], duration: 'q', finger: [2] },
            { keys: ['b/4'], duration: 'q', finger: [3] },
            { keys: ['c/5'], duration: 'q', finger: [1] },
            { keys: ['d/5'], duration: 'q', finger: [2] },
            { keys: ['e/5'], duration: 'q', finger: [3] },
            { keys: ['f#/5'], duration: 'q', finger: [4] },
            { keys: ['g/5'], duration: 'h', finger: [5] },
          ],
          clef: 'treble',
          bpm: 66,
          timeSignature: [4, 4],
          fingerNumbers: { 'G4': 1, 'A4': 2, 'B4': 3, 'C5': 1, 'D5': 2, 'E5': 3, 'F#5': 4, 'G5': 5 },
          handsRequired: 'right',
          requireTiming: false,
        },
        {
          type: 'exercise',
          title: 'G Major Scale Descending',
          instructions: 'Play the G major scale going down: G-F#-E-D-C-B-A-G. Fingering: 5-4-3-2-1-3-2-1. Finger 3 crosses over the thumb after C.',
          notes: [
            { keys: ['g/5'], duration: 'q', finger: [5] },
            { keys: ['f#/5'], duration: 'q', finger: [4] },
            { keys: ['e/5'], duration: 'q', finger: [3] },
            { keys: ['d/5'], duration: 'q', finger: [2] },
            { keys: ['c/5'], duration: 'q', finger: [1] },
            { keys: ['b/4'], duration: 'q', finger: [3] },
            { keys: ['a/4'], duration: 'q', finger: [2] },
            { keys: ['g/4'], duration: 'h', finger: [1] },
          ],
          clef: 'treble',
          bpm: 66,
          timeSignature: [4, 4],
          fingerNumbers: { 'G5': 5, 'F#5': 4, 'E5': 3, 'D5': 2, 'C5': 1, 'B4': 3, 'A4': 2, 'G4': 1 },
          handsRequired: 'right',
          requireTiming: false,
        },
        {
          type: 'exercise',
          title: 'G Major Scale Up and Down',
          instructions: 'Play the full G major scale ascending and descending. Keep a steady tempo and watch for that F#!',
          notes: [
            { keys: ['g/4'], duration: 'q', finger: [1] },
            { keys: ['a/4'], duration: 'q', finger: [2] },
            { keys: ['b/4'], duration: 'q', finger: [3] },
            { keys: ['c/5'], duration: 'q', finger: [1] },
            { keys: ['d/5'], duration: 'q', finger: [2] },
            { keys: ['e/5'], duration: 'q', finger: [3] },
            { keys: ['f#/5'], duration: 'q', finger: [4] },
            { keys: ['g/5'], duration: 'q', finger: [5] },
            { keys: ['f#/5'], duration: 'q', finger: [4] },
            { keys: ['e/5'], duration: 'q', finger: [3] },
            { keys: ['d/5'], duration: 'q', finger: [2] },
            { keys: ['c/5'], duration: 'q', finger: [1] },
            { keys: ['b/4'], duration: 'q', finger: [3] },
            { keys: ['a/4'], duration: 'q', finger: [2] },
            { keys: ['g/4'], duration: 'h', finger: [1] },
          ],
          clef: 'treble',
          bpm: 66,
          timeSignature: [4, 4],
          fingerNumbers: { 'G4': 1, 'A4': 2, 'B4': 3, 'C5': 1, 'D5': 2, 'E5': 3, 'F#5': 4, 'G5': 5 },
          handsRequired: 'right',
          requireTiming: false,
        },
      ],
    },

    // ── Lesson 6.8: F Major Scale ──
    {
      id: '6.8',
      title: 'F Major Scale',
      steps: [
        {
          type: 'instruction',
          title: 'Your First Scale with a Flat',
          content: `
            <p>The <strong>F major scale</strong> is built on the same W-W-H-W-W-W-H pattern, starting on F:</p>
            <p><strong>F - G - A - Bb - C - D - E - F</strong></p>
            <p>This time we need a <strong>Bb</strong> (B-flat) instead of B natural to maintain the pattern:</p>
            <ul>
              <li>F to G = whole step</li>
              <li>G to A = whole step</li>
              <li>A to Bb = half step</li>
              <li>Bb to C = whole step</li>
              <li>C to D = whole step</li>
              <li>D to E = whole step</li>
              <li>E to F = half step</li>
            </ul>
            <p>Bb is the black key just to the left of B. Without the flat, the third and fourth notes would be too far apart.</p>
          `,
          diagram: 'keyboard-highlight',
          diagramData: {
            highlightNotes: ['F4', 'G4', 'A4', 'Bb4', 'C5', 'D5', 'E5', 'F5'],
            viewportStart: 'C4',
            viewportEnd: 'C6',
          },
        },
        {
          type: 'demo',
          title: 'Hear the F Major Scale',
          description: 'Listen to the F major scale. It sounds just as bright as C and G major, with that characteristic major scale quality.',
          notes: [
            { keys: ['f/4'], duration: 'q', finger: [1] },
            { keys: ['g/4'], duration: 'q', finger: [2] },
            { keys: ['a/4'], duration: 'q', finger: [3] },
            { keys: ['bb/4'], duration: 'q', finger: [4] },
            { keys: ['c/5'], duration: 'q', finger: [1] },
            { keys: ['d/5'], duration: 'q', finger: [2] },
            { keys: ['e/5'], duration: 'q', finger: [3] },
            { keys: ['f/5'], duration: 'h', finger: [4] },
          ],
          bpm: 72,
          timeSignature: [4, 4],
          clef: 'treble',
        },
        {
          type: 'instruction',
          title: 'F Major Scale Fingering',
          content: `
            <p>The F major scale has a slightly different fingering because of the Bb:</p>
            <p><strong>Right hand ascending: 1-2-3-4-1-2-3-4</strong></p>
            <ul>
              <li>F = 1, G = 2, A = 3, Bb = 4 (thumb crosses under)</li>
              <li>C = 1, D = 2, E = 3, F = 4</li>
            </ul>
            <p><strong>Right hand descending: 4-3-2-1-4-3-2-1</strong></p>
            <p>Notice this is different from C and G major! The thumb goes under after finger 4 (on Bb) instead of after finger 3. This is because playing Bb with finger 4 sets up the hand naturally for the thumb to reach C.</p>
          `,
        },
        {
          type: 'exercise',
          title: 'F Major Scale Up and Down',
          instructions: 'Play the F major scale ascending and descending. Fingering: 1-2-3-4-1-2-3-4 going up, 4-3-2-1-4-3-2-1 going down. Watch for that Bb!',
          notes: [
            { keys: ['f/4'], duration: 'q', finger: [1] },
            { keys: ['g/4'], duration: 'q', finger: [2] },
            { keys: ['a/4'], duration: 'q', finger: [3] },
            { keys: ['bb/4'], duration: 'q', finger: [4] },
            { keys: ['c/5'], duration: 'q', finger: [1] },
            { keys: ['d/5'], duration: 'q', finger: [2] },
            { keys: ['e/5'], duration: 'q', finger: [3] },
            { keys: ['f/5'], duration: 'q', finger: [4] },
            { keys: ['e/5'], duration: 'q', finger: [3] },
            { keys: ['d/5'], duration: 'q', finger: [2] },
            { keys: ['c/5'], duration: 'q', finger: [1] },
            { keys: ['bb/4'], duration: 'q', finger: [4] },
            { keys: ['a/4'], duration: 'q', finger: [3] },
            { keys: ['g/4'], duration: 'q', finger: [2] },
            { keys: ['f/4'], duration: 'h', finger: [1] },
          ],
          clef: 'treble',
          bpm: 66,
          timeSignature: [4, 4],
          fingerNumbers: { 'F4': 1, 'G4': 2, 'A4': 3, 'Bb4': 4, 'C5': 1, 'D5': 2, 'E5': 3, 'F5': 4 },
          handsRequired: 'right',
          requireTiming: false,
        },
      ],
    },

    // ── Lesson 6.9: Key Signatures ──
    {
      id: '6.9',
      title: 'Key Signatures',
      steps: [
        {
          type: 'instruction',
          title: 'What is a Key Signature?',
          content: `
            <p>When a piece is in G major, every F in the piece is played as F#. Instead of writing a # symbol next to every single F, composers put the sharps or flats at the <strong>beginning of each line of music</strong>. This is called a <strong>key signature</strong>.</p>
            <p>Key signatures you've learned so far:</p>
            <ul>
              <li><strong>C major:</strong> No sharps or flats (all white keys)</li>
              <li><strong>G major:</strong> One sharp (F#)</li>
              <li><strong>F major:</strong> One flat (Bb)</li>
            </ul>
            <p>The key signature appears right after the clef symbol at the start of each staff line. It applies to <em>all</em> notes of that letter name, in <em>every</em> octave, for the entire piece (unless canceled by a natural sign).</p>
          `,
          diagram: 'staff-demo',
        },
        {
          type: 'instruction',
          title: 'Reading Key Signatures',
          content: `
            <p>When you see a key signature, here's what to do:</p>
            <ol>
              <li>Look at the sharps or flats right after the clef</li>
              <li>Remember which notes are affected</li>
              <li>Play those notes as sharps/flats throughout the entire piece</li>
            </ol>
            <p>Quick reference:</p>
            <ul>
              <li><strong>No sharps/flats</strong> = C major</li>
              <li><strong>1 sharp (F#)</strong> = G major</li>
              <li><strong>1 flat (Bb)</strong> = F major</li>
            </ul>
            <p>As you advance, you'll learn key signatures with more sharps and flats, but these three are a great start!</p>
            <p>A <strong>natural sign</strong> (looks like a square with lines) temporarily cancels a sharp or flat from the key signature for that measure.</p>
          `,
        },
        {
          type: 'exercise',
          title: 'Practice in G Major (Key Signature)',
          instructions: 'Play this short melody in G major. Remember: the key signature has one sharp (F#), so every F you see should be played as F#.',
          notes: [
            { keys: ['g/4'], duration: 'q', finger: [1] },
            { keys: ['a/4'], duration: 'q', finger: [2] },
            { keys: ['b/4'], duration: 'q', finger: [3] },
            { keys: ['c/5'], duration: 'q', finger: [1] },
            { keys: ['d/5'], duration: 'q', finger: [2] },
            { keys: ['b/4'], duration: 'q', finger: [3] },
            { keys: ['a/4'], duration: 'q', finger: [2] },
            { keys: ['g/4'], duration: 'q', finger: [1] },
            { keys: ['b/4'], duration: 'q', finger: [3] },
            { keys: ['d/5'], duration: 'q', finger: [2] },
            { keys: ['f#/5'], duration: 'q', finger: [4] },
            { keys: ['g/5'], duration: 'q', finger: [5] },
          ],
          clef: 'treble',
          bpm: 72,
          timeSignature: [4, 4],
          fingerNumbers: { 'G4': 1, 'A4': 2, 'B4': 3, 'C5': 1, 'D5': 2, 'F#5': 4, 'G5': 5 },
          handsRequired: 'right',
          requireTiming: false,
        },
        {
          type: 'exercise',
          title: 'Practice in F Major (Key Signature)',
          instructions: 'Now play this melody in F major. The key signature has one flat (Bb), so every B is played as Bb.',
          notes: [
            { keys: ['f/4'], duration: 'q', finger: [1] },
            { keys: ['g/4'], duration: 'q', finger: [2] },
            { keys: ['a/4'], duration: 'q', finger: [3] },
            { keys: ['bb/4'], duration: 'q', finger: [4] },
            { keys: ['c/5'], duration: 'q', finger: [1] },
            { keys: ['a/4'], duration: 'q', finger: [3] },
            { keys: ['bb/4'], duration: 'q', finger: [4] },
            { keys: ['g/4'], duration: 'q', finger: [2] },
            { keys: ['a/4'], duration: 'q', finger: [3] },
            { keys: ['f/4'], duration: 'q', finger: [1] },
            { keys: ['g/4'], duration: 'q', finger: [2] },
            { keys: ['f/4'], duration: 'q', finger: [1] },
          ],
          clef: 'treble',
          bpm: 72,
          timeSignature: [4, 4],
          fingerNumbers: { 'F4': 1, 'G4': 2, 'A4': 3, 'Bb4': 4, 'C5': 1 },
          handsRequired: 'right',
          requireTiming: false,
        },
      ],
    },

    // ── Lesson 6.10: Repeat Signs and Endings ──
    {
      id: '6.10',
      title: 'Repeat Signs and Endings',
      steps: [
        {
          type: 'instruction',
          title: 'Repeat Signs in Music',
          content: `
            <p><strong>Repeat signs</strong> tell you to go back and play a section again. This saves space and avoids writing the same notes twice.</p>
            <p>A repeat sign looks like a double bar line with two dots:</p>
            <ul>
              <li><strong>Left repeat sign</strong> — dots on the right side of the bar: marks the beginning of the repeated section</li>
              <li><strong>Right repeat sign</strong> — dots on the left side of the bar: marks the end — go back to the left repeat sign</li>
            </ul>
            <p>If there's no left repeat sign, go back to the very beginning of the piece.</p>
          `,
        },
        {
          type: 'instruction',
          title: 'First and Second Endings',
          content: `
            <p>Sometimes a repeated section has a <strong>different ending</strong> the second time. This is shown with numbered brackets:</p>
            <ul>
              <li><strong>1.</strong> (first ending) — play this ending the first time through</li>
              <li><strong>2.</strong> (second ending) — skip the first ending and play this ending the second time</li>
            </ul>
            <p>The process:</p>
            <ol>
              <li>Play through the section, including the "1." ending</li>
              <li>Go back to the repeat sign</li>
              <li>Play through again, but this time skip "1." and play the "2." ending instead</li>
            </ol>
            <p>Other common navigation markings:</p>
            <ul>
              <li><strong>D.C. (Da Capo)</strong> — go back to the beginning</li>
              <li><strong>D.S. (Dal Segno)</strong> — go back to the sign</li>
              <li><strong>Fine</strong> — the end (used with D.C. or D.S.)</li>
            </ul>
          `,
        },
        {
          type: 'exercise',
          title: 'Practice with Repeats',
          instructions: 'This exercise represents a repeated section. Play through it twice to simulate following a repeat sign. The notes are the same both times — in real sheet music the repeat sign would save writing them twice.',
          notes: [
            // First time through
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['g/4'], duration: 'q', finger: [5] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['f/4'], duration: 'q', finger: [4] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['c/4'], duration: 'h', finger: [1] },
            // Repeat (second time through)
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['g/4'], duration: 'q', finger: [5] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['f/4'], duration: 'q', finger: [4] },
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
        {
          type: 'instruction',
          title: 'Module 6 Complete!',
          content: `
            <p>Outstanding work! In this module you learned:</p>
            <ul>
              <li><strong>Half steps and whole steps</strong> — the building blocks of scales</li>
              <li><strong>C major scale</strong> — both right hand (1-2-3-1-2-3-4-5) and left hand (5-4-3-2-1-3-2-1)</li>
              <li><strong>Thumb-under technique</strong> — how to play beyond 5 notes smoothly</li>
              <li><strong>G major scale</strong> — your first scale with a sharp (F#)</li>
              <li><strong>F major scale</strong> — your first scale with a flat (Bb)</li>
              <li><strong>Key signatures</strong> — how sharps and flats at the start of music indicate the key</li>
              <li><strong>Repeat signs</strong> — how they direct you to replay sections</li>
            </ul>
            <p>You now have the foundation to play in three different keys! In the next module, you'll learn about chords and harmony.</p>
          `,
        },
      ],
    },
  ],
};

export default module06;
