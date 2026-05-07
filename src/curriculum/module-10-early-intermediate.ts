import type { Module } from '../types';

const module10: Module = {
  id: 10,
  title: 'Early Intermediate',
  description: 'Minor scales, arpeggios, pedal technique, and classical pieces',
  lessons: [
    {
      id: '10.1',
      title: 'Natural Minor Scale Review',
      steps: [
        {
          type: 'instruction',
          title: 'Review: Natural Minor Scales',
          content: `
            <p>You have already learned the <strong>A natural minor</strong> scale. Now let's review it and introduce two more natural minor scales: <strong>D minor</strong> and <strong>E minor</strong>.</p>
            <p>A natural minor scale follows the pattern: <strong>W-H-W-W-H-W-W</strong> (whole and half steps).</p>
            <ul>
              <li><strong>A minor:</strong> A-B-C-D-E-F-G-A (no sharps or flats)</li>
              <li><strong>D minor:</strong> D-E-F-G-A-Bb-C-D (one flat: Bb)</li>
              <li><strong>E minor:</strong> E-F#-G-A-B-C-D-E (one sharp: F#)</li>
            </ul>
            <p>Minor scales have a darker, more somber sound compared to major scales.</p>
          `,
        },
        {
          type: 'demo',
          title: 'Hear Three Natural Minor Scales',
          description: 'Listen to A minor, D minor, and E minor played one after the other. Notice the characteristic minor sound they share.',
          notes: [
            { keys: ['a/3'], duration: 'q', finger: [1] },
            { keys: ['b/3'], duration: 'q', finger: [2] },
            { keys: ['c/4'], duration: 'q', finger: [3] },
            { keys: ['d/4'], duration: 'q', finger: [1] },
            { keys: ['e/4'], duration: 'q', finger: [2] },
            { keys: ['f/4'], duration: 'q', finger: [3] },
            { keys: ['g/4'], duration: 'q', finger: [4] },
            { keys: ['a/4'], duration: 'q', finger: [5] },
            { keys: ['d/4'], duration: 'q', finger: [1] },
            { keys: ['e/4'], duration: 'q', finger: [2] },
            { keys: ['f/4'], duration: 'q', finger: [3] },
            { keys: ['g/4'], duration: 'q', finger: [1] },
            { keys: ['a/4'], duration: 'q', finger: [2] },
            { keys: ['bb/4'], duration: 'q', finger: [3] },
            { keys: ['c/5'], duration: 'q', finger: [4] },
            { keys: ['d/5'], duration: 'q', finger: [5] },
            { keys: ['e/4'], duration: 'q', finger: [1] },
            { keys: ['f#/4'], duration: 'q', finger: [2] },
            { keys: ['g/4'], duration: 'q', finger: [3] },
            { keys: ['a/4'], duration: 'q', finger: [1] },
            { keys: ['b/4'], duration: 'q', finger: [2] },
            { keys: ['c/5'], duration: 'q', finger: [3] },
            { keys: ['d/5'], duration: 'q', finger: [4] },
            { keys: ['e/5'], duration: 'q', finger: [5] },
          ],
          bpm: 88,
          timeSignature: [4, 4],
          clef: 'treble',
        },
        {
          type: 'exercise',
          title: 'Play D Minor Scale',
          instructions: 'Play the D natural minor scale ascending and descending. Notes: D-E-F-G-A-Bb-C-D. Fingering: 1-2-3-1-2-3-4-5. Watch for the Bb!',
          notes: [
            { keys: ['d/4'], duration: 'q', finger: [1] },
            { keys: ['e/4'], duration: 'q', finger: [2] },
            { keys: ['f/4'], duration: 'q', finger: [3] },
            { keys: ['g/4'], duration: 'q', finger: [1] },
            { keys: ['a/4'], duration: 'q', finger: [2] },
            { keys: ['bb/4'], duration: 'q', finger: [3] },
            { keys: ['c/5'], duration: 'q', finger: [4] },
            { keys: ['d/5'], duration: 'q', finger: [5] },
            { keys: ['d/5'], duration: 'q', finger: [5] },
            { keys: ['c/5'], duration: 'q', finger: [4] },
            { keys: ['bb/4'], duration: 'q', finger: [3] },
            { keys: ['a/4'], duration: 'q', finger: [2] },
            { keys: ['g/4'], duration: 'q', finger: [1] },
            { keys: ['f/4'], duration: 'q', finger: [3] },
            { keys: ['e/4'], duration: 'q', finger: [2] },
            { keys: ['d/4'], duration: 'w', finger: [1] },
          ],
          clef: 'treble',
          bpm: 76,
          timeSignature: [4, 4],
          fingerNumbers: { 'D4': 1, 'E4': 2, 'F4': 3, 'G4': 1, 'A4': 2, 'Bb4': 3, 'C5': 4, 'D5': 5 },
          handsRequired: 'right',
          requireTiming: false,
        },
        {
          type: 'exercise',
          title: 'Play E Minor Scale',
          instructions: 'Play the E natural minor scale ascending and descending. Notes: E-F#-G-A-B-C-D-E. Fingering: 1-2-3-1-2-3-4-5. Only one sharp: F#.',
          notes: [
            { keys: ['e/4'], duration: 'q', finger: [1] },
            { keys: ['f#/4'], duration: 'q', finger: [2] },
            { keys: ['g/4'], duration: 'q', finger: [3] },
            { keys: ['a/4'], duration: 'q', finger: [1] },
            { keys: ['b/4'], duration: 'q', finger: [2] },
            { keys: ['c/5'], duration: 'q', finger: [3] },
            { keys: ['d/5'], duration: 'q', finger: [4] },
            { keys: ['e/5'], duration: 'q', finger: [5] },
            { keys: ['e/5'], duration: 'q', finger: [5] },
            { keys: ['d/5'], duration: 'q', finger: [4] },
            { keys: ['c/5'], duration: 'q', finger: [3] },
            { keys: ['b/4'], duration: 'q', finger: [2] },
            { keys: ['a/4'], duration: 'q', finger: [1] },
            { keys: ['g/4'], duration: 'q', finger: [3] },
            { keys: ['f#/4'], duration: 'q', finger: [2] },
            { keys: ['e/4'], duration: 'w', finger: [1] },
          ],
          clef: 'treble',
          bpm: 76,
          timeSignature: [4, 4],
          fingerNumbers: { 'E4': 1, 'F#4': 2, 'G4': 3, 'A4': 1, 'B4': 2, 'C5': 3, 'D5': 4, 'E5': 5 },
          handsRequired: 'right',
          requireTiming: false,
        },
      ],
    },
    {
      id: '10.2',
      title: 'Harmonic Minor Scale',
      steps: [
        {
          type: 'instruction',
          title: 'The Harmonic Minor Scale',
          content: `
            <p>The <strong>harmonic minor scale</strong> is like the natural minor, but with the <strong>7th note raised by a half step</strong>. This creates a distinctive, dramatic sound.</p>
            <ul>
              <li><strong>A natural minor:</strong> A-B-C-D-E-F-<strong>G</strong>-A</li>
              <li><strong>A harmonic minor:</strong> A-B-C-D-E-F-<strong>G#</strong>-A</li>
            </ul>
            <p>The raised 7th creates a gap of three half steps between the 6th and 7th notes (F to G#). This gives the harmonic minor its exotic, almost Middle Eastern flavor.</p>
            <p>The raised 7th also creates a strong pull toward the root note (G# wants to resolve to A).</p>
          `,
        },
        {
          type: 'demo',
          title: 'Hear A Harmonic Minor',
          description: 'Listen to the A harmonic minor scale. Notice the dramatic gap between F and G# near the top.',
          notes: [
            { keys: ['a/3'], duration: 'q', finger: [1] },
            { keys: ['b/3'], duration: 'q', finger: [2] },
            { keys: ['c/4'], duration: 'q', finger: [3] },
            { keys: ['d/4'], duration: 'q', finger: [1] },
            { keys: ['e/4'], duration: 'q', finger: [2] },
            { keys: ['f/4'], duration: 'q', finger: [3] },
            { keys: ['g#/4'], duration: 'q', finger: [4] },
            { keys: ['a/4'], duration: 'q', finger: [5] },
            { keys: ['a/4'], duration: 'q', finger: [5] },
            { keys: ['g#/4'], duration: 'q', finger: [4] },
            { keys: ['f/4'], duration: 'q', finger: [3] },
            { keys: ['e/4'], duration: 'q', finger: [2] },
            { keys: ['d/4'], duration: 'q', finger: [1] },
            { keys: ['c/4'], duration: 'q', finger: [3] },
            { keys: ['b/3'], duration: 'q', finger: [2] },
            { keys: ['a/3'], duration: 'q', finger: [1] },
          ],
          bpm: 76,
          timeSignature: [4, 4],
          clef: 'treble',
        },
        {
          type: 'exercise',
          title: 'Play A Harmonic Minor Scale',
          instructions: 'Play the A harmonic minor scale ascending and descending. Notes: A-B-C-D-E-F-G#-A. The only difference from A natural minor is the G#. Fingering: 1-2-3-1-2-3-4-5.',
          notes: [
            { keys: ['a/3'], duration: 'q', finger: [1] },
            { keys: ['b/3'], duration: 'q', finger: [2] },
            { keys: ['c/4'], duration: 'q', finger: [3] },
            { keys: ['d/4'], duration: 'q', finger: [1] },
            { keys: ['e/4'], duration: 'q', finger: [2] },
            { keys: ['f/4'], duration: 'q', finger: [3] },
            { keys: ['g#/4'], duration: 'q', finger: [4] },
            { keys: ['a/4'], duration: 'q', finger: [5] },
            { keys: ['a/4'], duration: 'q', finger: [5] },
            { keys: ['g#/4'], duration: 'q', finger: [4] },
            { keys: ['f/4'], duration: 'q', finger: [3] },
            { keys: ['e/4'], duration: 'q', finger: [2] },
            { keys: ['d/4'], duration: 'q', finger: [1] },
            { keys: ['c/4'], duration: 'q', finger: [3] },
            { keys: ['b/3'], duration: 'q', finger: [2] },
            { keys: ['a/3'], duration: 'w', finger: [1] },
          ],
          clef: 'treble',
          bpm: 72,
          timeSignature: [4, 4],
          fingerNumbers: { 'A3': 1, 'B3': 2, 'C4': 3, 'D4': 1, 'E4': 2, 'F4': 3, 'G#4': 4, 'A4': 5 },
          handsRequired: 'right',
          requireTiming: false,
        },
      ],
    },
    {
      id: '10.3',
      title: 'Melodic Minor Scale',
      steps: [
        {
          type: 'instruction',
          title: 'The Melodic Minor Scale',
          content: `
            <p>The <strong>melodic minor scale</strong> is unique because it is <strong>different ascending and descending</strong>:</p>
            <ul>
              <li><strong>Ascending:</strong> Raise both the 6th and 7th notes (A-B-C-D-E-<strong>F#</strong>-<strong>G#</strong>-A)</li>
              <li><strong>Descending:</strong> Return to natural minor (A-G-F-E-D-C-B-A)</li>
            </ul>
            <p>The raised 6th and 7th going up smooth out the awkward gap found in harmonic minor. Coming back down, the scale reverts to natural minor because the pull toward the root is no longer needed.</p>
            <p>This is the most complex scale form you have encountered so far, but it creates the smoothest melodic line.</p>
          `,
        },
        {
          type: 'demo',
          title: 'Hear A Melodic Minor',
          description: 'Listen to the A melodic minor scale. Notice that the ascending version (with F# and G#) sounds different from the descending version (natural minor).',
          notes: [
            { keys: ['a/3'], duration: 'q', finger: [1] },
            { keys: ['b/3'], duration: 'q', finger: [2] },
            { keys: ['c/4'], duration: 'q', finger: [3] },
            { keys: ['d/4'], duration: 'q', finger: [1] },
            { keys: ['e/4'], duration: 'q', finger: [2] },
            { keys: ['f#/4'], duration: 'q', finger: [3] },
            { keys: ['g#/4'], duration: 'q', finger: [4] },
            { keys: ['a/4'], duration: 'q', finger: [5] },
            { keys: ['a/4'], duration: 'q', finger: [5] },
            { keys: ['g/4'], duration: 'q', finger: [4] },
            { keys: ['f/4'], duration: 'q', finger: [3] },
            { keys: ['e/4'], duration: 'q', finger: [2] },
            { keys: ['d/4'], duration: 'q', finger: [1] },
            { keys: ['c/4'], duration: 'q', finger: [3] },
            { keys: ['b/3'], duration: 'q', finger: [2] },
            { keys: ['a/3'], duration: 'q', finger: [1] },
          ],
          bpm: 76,
          timeSignature: [4, 4],
          clef: 'treble',
        },
        {
          type: 'exercise',
          title: 'Play A Melodic Minor Scale',
          instructions: 'Play the A melodic minor scale. Ascending: A-B-C-D-E-F#-G#-A (raise 6th and 7th). Descending: A-G-F-E-D-C-B-A (natural minor). Fingering: 1-2-3-1-2-3-4-5 both ways.',
          notes: [
            { keys: ['a/3'], duration: 'q', finger: [1] },
            { keys: ['b/3'], duration: 'q', finger: [2] },
            { keys: ['c/4'], duration: 'q', finger: [3] },
            { keys: ['d/4'], duration: 'q', finger: [1] },
            { keys: ['e/4'], duration: 'q', finger: [2] },
            { keys: ['f#/4'], duration: 'q', finger: [3] },
            { keys: ['g#/4'], duration: 'q', finger: [4] },
            { keys: ['a/4'], duration: 'q', finger: [5] },
            { keys: ['a/4'], duration: 'q', finger: [5] },
            { keys: ['g/4'], duration: 'q', finger: [4] },
            { keys: ['f/4'], duration: 'q', finger: [3] },
            { keys: ['e/4'], duration: 'q', finger: [2] },
            { keys: ['d/4'], duration: 'q', finger: [1] },
            { keys: ['c/4'], duration: 'q', finger: [3] },
            { keys: ['b/3'], duration: 'q', finger: [2] },
            { keys: ['a/3'], duration: 'w', finger: [1] },
          ],
          clef: 'treble',
          bpm: 72,
          timeSignature: [4, 4],
          fingerNumbers: { 'A3': 1, 'B3': 2, 'C4': 3, 'D4': 1, 'E4': 2, 'F#4': 3, 'G#4': 4, 'A4': 5, 'G4': 4, 'F4': 3 },
          handsRequired: 'right',
          requireTiming: false,
        },
      ],
    },
    {
      id: '10.4',
      title: '6/8 Time Signature',
      steps: [
        {
          type: 'instruction',
          title: 'Understanding 6/8 Time',
          content: `
            <p>The <strong>6/8 time signature</strong> means there are <strong>6 eighth notes per measure</strong>. But instead of feeling 6 individual beats, you feel the music in <strong>2 groups of 3</strong>:</p>
            <ul>
              <li>Group 1: <strong>1</strong> 2 3</li>
              <li>Group 2: <strong>4</strong> 5 6</li>
            </ul>
            <p>The emphasis falls on beats 1 and 4, giving 6/8 a lilting, swaying feel — like a waltz with a bounce. Many folk songs, lullabies, and Irish jigs use 6/8 time.</p>
            <p>Count it as: <strong>ONE</strong>-two-three-<strong>FOUR</strong>-five-six.</p>
          `,
        },
        {
          type: 'demo',
          title: 'Hear 6/8 Time',
          description: 'Listen to this melody in 6/8. Feel the two groups of three eighth notes. The emphasis is on beats 1 and 4.',
          notes: [
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['e/4'], duration: '8', finger: [3] },
            { keys: ['g/4'], duration: 'q', finger: [5] },
            { keys: ['e/4'], duration: '8', finger: [3] },
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['e/4'], duration: '8', finger: [3] },
            { keys: ['g/4'], duration: 'q', finger: [5] },
            { keys: ['e/4'], duration: '8', finger: [3] },
          ],
          bpm: 72,
          timeSignature: [6, 8],
          clef: 'treble',
        },
        {
          type: 'exercise',
          title: '6/8 Time Exercise',
          instructions: 'Play this melody in 6/8 time. Feel the two groups of three. The dotted quarter note gets the main beat (3 eighth notes long). Count: ONE-two-three-FOUR-five-six.',
          notes: [
            { keys: ['c/4'], duration: '8', finger: [1] },
            { keys: ['d/4'], duration: '8', finger: [2] },
            { keys: ['e/4'], duration: '8', finger: [3] },
            { keys: ['f/4'], duration: '8', finger: [4] },
            { keys: ['e/4'], duration: '8', finger: [3] },
            { keys: ['d/4'], duration: '8', finger: [2] },
            { keys: ['c/4'], duration: '8', finger: [1] },
            { keys: ['d/4'], duration: '8', finger: [2] },
            { keys: ['e/4'], duration: '8', finger: [3] },
            { keys: ['g/4'], duration: 'q', finger: [5] },
            { keys: ['e/4'], duration: '8', finger: [3] },
            { keys: ['f/4'], duration: '8', finger: [4] },
            { keys: ['e/4'], duration: '8', finger: [3] },
            { keys: ['d/4'], duration: '8', finger: [2] },
            { keys: ['e/4'], duration: '8', finger: [3] },
            { keys: ['d/4'], duration: '8', finger: [2] },
            { keys: ['c/4'], duration: '8', finger: [1] },
            { keys: ['c/4'], duration: 'q', finger: [1] },
          ],
          clef: 'treble',
          bpm: 66,
          timeSignature: [6, 8],
          fingerNumbers: { 'C4': 1, 'D4': 2, 'E4': 3, 'F4': 4, 'G4': 5 },
          handsRequired: 'right',
          requireTiming: false,
        },
      ],
    },
    {
      id: '10.5',
      title: 'Arpeggios: C Major',
      steps: [
        {
          type: 'instruction',
          title: 'What is an Arpeggio?',
          content: `
            <p>An <strong>arpeggio</strong> is a chord played one note at a time, rather than all together. The word comes from Italian "arpeggiare," meaning "to play on a harp."</p>
            <p>A <strong>C major arpeggio</strong> uses the notes of the C major chord — C, E, G — played in sequence across one or more octaves:</p>
            <ul>
              <li><strong>C - E - G - C - E - G - C</strong> (ascending across octaves)</li>
            </ul>
            <p>For a one-octave arpeggio, play: <strong>C4-E4-G4-C5</strong>. Fingering: <strong>1-2-3-5</strong>.</p>
            <p>Arpeggios train finger independence and are found everywhere in piano music, from classical to pop.</p>
          `,
          diagram: 'keyboard-highlight',
          diagramData: {
            highlightNotes: ['C4', 'E4', 'G4', 'C5'],
            viewportStart: 'C4',
            viewportEnd: 'D5',
            fingerNumbers: { 'C4': 1, 'E4': 2, 'G4': 3, 'C5': 5 },
          },
        },
        {
          type: 'demo',
          title: 'Hear C Major Arpeggio',
          description: 'Listen to the C major arpeggio ascending and descending over one octave.',
          notes: [
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['e/4'], duration: 'q', finger: [2] },
            { keys: ['g/4'], duration: 'q', finger: [3] },
            { keys: ['c/5'], duration: 'q', finger: [5] },
            { keys: ['c/5'], duration: 'q', finger: [5] },
            { keys: ['g/4'], duration: 'q', finger: [3] },
            { keys: ['e/4'], duration: 'q', finger: [2] },
            { keys: ['c/4'], duration: 'q', finger: [1] },
          ],
          bpm: 80,
          timeSignature: [4, 4],
          clef: 'treble',
        },
        {
          type: 'exercise',
          title: 'Play C Major Arpeggio',
          instructions: 'Play the C major arpeggio ascending and descending. Notes: C-E-G-C (up) and C-G-E-C (down). Fingering: 1-2-3-5 going up, 5-3-2-1 going down. Keep the notes smooth and even.',
          notes: [
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['e/4'], duration: 'q', finger: [2] },
            { keys: ['g/4'], duration: 'q', finger: [3] },
            { keys: ['c/5'], duration: 'q', finger: [5] },
            { keys: ['c/5'], duration: 'q', finger: [5] },
            { keys: ['g/4'], duration: 'q', finger: [3] },
            { keys: ['e/4'], duration: 'q', finger: [2] },
            { keys: ['c/4'], duration: 'w', finger: [1] },
          ],
          clef: 'treble',
          bpm: 72,
          timeSignature: [4, 4],
          fingerNumbers: { 'C4': 1, 'E4': 2, 'G4': 3, 'C5': 5 },
          handsRequired: 'right',
          requireTiming: false,
        },
      ],
    },
    {
      id: '10.6',
      title: 'Arpeggios: G Major and F Major',
      steps: [
        {
          type: 'instruction',
          title: 'G Major and F Major Arpeggios',
          content: `
            <p>Now let's practice arpeggios in two more keys:</p>
            <ul>
              <li><strong>G major arpeggio:</strong> G-B-D-G. Fingering: <strong>1-2-3-5</strong></li>
              <li><strong>F major arpeggio:</strong> F-A-C-F. Fingering: <strong>1-2-3-5</strong></li>
            </ul>
            <p>The fingering pattern (1-2-3-5) is the same for all one-octave major arpeggios starting on a white key. Once you learn the pattern, you can apply it to any key.</p>
          `,
        },
        {
          type: 'demo',
          title: 'Hear G Major and F Major Arpeggios',
          description: 'Listen to the G major arpeggio followed by the F major arpeggio, each ascending and descending.',
          notes: [
            { keys: ['g/4'], duration: 'q', finger: [1] },
            { keys: ['b/4'], duration: 'q', finger: [2] },
            { keys: ['d/5'], duration: 'q', finger: [3] },
            { keys: ['g/5'], duration: 'q', finger: [5] },
            { keys: ['d/5'], duration: 'q', finger: [3] },
            { keys: ['b/4'], duration: 'q', finger: [2] },
            { keys: ['g/4'], duration: 'h', finger: [1] },
            { keys: ['f/4'], duration: 'q', finger: [1] },
            { keys: ['a/4'], duration: 'q', finger: [2] },
            { keys: ['c/5'], duration: 'q', finger: [3] },
            { keys: ['f/5'], duration: 'q', finger: [5] },
            { keys: ['c/5'], duration: 'q', finger: [3] },
            { keys: ['a/4'], duration: 'q', finger: [2] },
            { keys: ['f/4'], duration: 'h', finger: [1] },
          ],
          bpm: 80,
          timeSignature: [4, 4],
          clef: 'treble',
        },
        {
          type: 'exercise',
          title: 'Play G Major Arpeggio',
          instructions: 'Play the G major arpeggio: G-B-D-G ascending and descending. Fingering: 1-2-3-5.',
          notes: [
            { keys: ['g/4'], duration: 'q', finger: [1] },
            { keys: ['b/4'], duration: 'q', finger: [2] },
            { keys: ['d/5'], duration: 'q', finger: [3] },
            { keys: ['g/5'], duration: 'q', finger: [5] },
            { keys: ['g/5'], duration: 'q', finger: [5] },
            { keys: ['d/5'], duration: 'q', finger: [3] },
            { keys: ['b/4'], duration: 'q', finger: [2] },
            { keys: ['g/4'], duration: 'w', finger: [1] },
          ],
          clef: 'treble',
          bpm: 72,
          timeSignature: [4, 4],
          fingerNumbers: { 'G4': 1, 'B4': 2, 'D5': 3, 'G5': 5 },
          handsRequired: 'right',
          requireTiming: false,
        },
        {
          type: 'exercise',
          title: 'Play F Major Arpeggio',
          instructions: 'Play the F major arpeggio: F-A-C-F ascending and descending. Fingering: 1-2-3-5.',
          notes: [
            { keys: ['f/4'], duration: 'q', finger: [1] },
            { keys: ['a/4'], duration: 'q', finger: [2] },
            { keys: ['c/5'], duration: 'q', finger: [3] },
            { keys: ['f/5'], duration: 'q', finger: [5] },
            { keys: ['f/5'], duration: 'q', finger: [5] },
            { keys: ['c/5'], duration: 'q', finger: [3] },
            { keys: ['a/4'], duration: 'q', finger: [2] },
            { keys: ['f/4'], duration: 'w', finger: [1] },
          ],
          clef: 'treble',
          bpm: 72,
          timeSignature: [4, 4],
          fingerNumbers: { 'F4': 1, 'A4': 2, 'C5': 3, 'F5': 5 },
          handsRequired: 'right',
          requireTiming: false,
        },
        {
          type: 'exercise',
          title: 'Arpeggio Chain: C, F, G',
          instructions: 'Play all three arpeggios in sequence: C major (C-E-G-C), F major (F-A-C-F), G major (G-B-D-G), then back to C major. This is similar to a I-IV-V-I chord progression.',
          notes: [
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['e/4'], duration: 'q', finger: [2] },
            { keys: ['g/4'], duration: 'q', finger: [3] },
            { keys: ['c/5'], duration: 'q', finger: [5] },
            { keys: ['f/4'], duration: 'q', finger: [1] },
            { keys: ['a/4'], duration: 'q', finger: [2] },
            { keys: ['c/5'], duration: 'q', finger: [3] },
            { keys: ['f/5'], duration: 'q', finger: [5] },
            { keys: ['g/4'], duration: 'q', finger: [1] },
            { keys: ['b/4'], duration: 'q', finger: [2] },
            { keys: ['d/5'], duration: 'q', finger: [3] },
            { keys: ['g/5'], duration: 'q', finger: [5] },
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['e/4'], duration: 'q', finger: [2] },
            { keys: ['g/4'], duration: 'q', finger: [3] },
            { keys: ['c/5'], duration: 'w', finger: [5] },
          ],
          clef: 'treble',
          bpm: 76,
          timeSignature: [4, 4],
          fingerNumbers: { 'C4': 1, 'E4': 2, 'G4': 1, 'C5': 5, 'F4': 1, 'A4': 2, 'B4': 2, 'D5': 3, 'F5': 5, 'G5': 5 },
          handsRequired: 'right',
          requireTiming: false,
        },
      ],
    },
    {
      id: '10.7',
      title: 'Overlapping Pedal Technique',
      steps: [
        {
          type: 'instruction',
          title: 'The Sustain Pedal',
          content: `
            <p>The <strong>sustain pedal</strong> (the rightmost pedal) keeps notes ringing after you release the keys. It creates a rich, connected sound.</p>
            <p>The most important pedal technique is called <strong>overlapping pedal</strong> (or "legato pedal"):</p>
            <ol>
              <li><strong>Play</strong> a note or chord</li>
              <li><strong>Press</strong> the pedal down (after playing, not before)</li>
              <li><strong>Play</strong> the next note or chord</li>
              <li><strong>Lift and immediately re-press</strong> the pedal</li>
              <li>Repeat steps 3-4</li>
            </ol>
            <p>The key is that you change the pedal <em>after</em> playing the new note. This allows the previous sound to sustain until the new note takes over, with no gap and no blur.</p>
          `,
        },
        {
          type: 'instruction',
          title: 'Common Pedal Mistakes',
          content: `
            <p>Watch out for these common mistakes:</p>
            <ul>
              <li><strong>Pressing pedal before playing:</strong> This catches the silence or previous note. Press after you play.</li>
              <li><strong>Holding pedal too long:</strong> This blurs different harmonies together into mud.</li>
              <li><strong>Stomping the pedal:</strong> Press and release smoothly. No banging!</li>
              <li><strong>Changing pedal too late:</strong> If you wait too long after playing the new note, you will hear a brief blur.</li>
            </ul>
            <p>If you have a sustain pedal connected, try the following exercise. If you do not have a pedal, you can still practice the notes and add pedaling later.</p>
          `,
        },
        {
          type: 'exercise',
          title: 'Overlapping Pedal Exercise',
          instructions: 'Play these chords slowly, changing the pedal with each new chord. The pattern: play chord, press pedal, play next chord, lift and re-press pedal. Each chord should ring cleanly into the next.',
          notes: [
            { keys: ['c/4', 'e/4', 'g/4'], duration: 'w', finger: [1, 3, 5] },
            { keys: ['f/4', 'a/4', 'c/5'], duration: 'w', finger: [1, 3, 5] },
            { keys: ['g/4', 'b/4', 'd/5'], duration: 'w', finger: [1, 3, 5] },
            { keys: ['c/4', 'e/4', 'g/4'], duration: 'w', finger: [1, 3, 5] },
          ],
          clef: 'treble',
          bpm: 60,
          timeSignature: [4, 4],
          fingerNumbers: { 'C4': 1, 'E4': 3, 'G4': 1, 'F4': 1, 'A4': 3, 'C5': 5, 'B4': 3, 'D5': 5 },
          handsRequired: 'right',
          requireTiming: false,
        },
      ],
    },
    {
      id: '10.8',
      title: 'The Chromatic Scale',
      steps: [
        {
          type: 'instruction',
          title: 'All 12 Notes',
          content: `
            <p>The <strong>chromatic scale</strong> includes all 12 notes — every white and black key — going up in <strong>half steps</strong>. It sounds like a smooth, continuous climb.</p>
            <p>Starting from C: <strong>C - C# - D - D# - E - F - F# - G - G# - A - A# - B - C</strong></p>
            <p>The standard fingering for the right hand chromatic scale uses a simple pattern:</p>
            <ul>
              <li>Use <strong>finger 1 (thumb)</strong> on all white keys</li>
              <li>Use <strong>finger 3 (middle)</strong> on all black keys</li>
              <li>Exception: use <strong>finger 2</strong> on E and B (white keys with no black key before them)</li>
            </ul>
            <p>The pattern: <strong>1-3-1-3-1-1-3-1-3-1-3-1-1</strong> (from C to C).</p>
          `,
        },
        {
          type: 'demo',
          title: 'Hear the Chromatic Scale',
          description: 'Listen to the chromatic scale ascending from C4 to C5. Every note is exactly one half step apart.',
          notes: [
            { keys: ['c/4'], duration: '8', finger: [1] },
            { keys: ['c#/4'], duration: '8', finger: [3] },
            { keys: ['d/4'], duration: '8', finger: [1] },
            { keys: ['d#/4'], duration: '8', finger: [3] },
            { keys: ['e/4'], duration: '8', finger: [1] },
            { keys: ['f/4'], duration: '8', finger: [1] },
            { keys: ['f#/4'], duration: '8', finger: [3] },
            { keys: ['g/4'], duration: '8', finger: [1] },
            { keys: ['g#/4'], duration: '8', finger: [3] },
            { keys: ['a/4'], duration: '8', finger: [1] },
            { keys: ['a#/4'], duration: '8', finger: [3] },
            { keys: ['b/4'], duration: '8', finger: [1] },
            { keys: ['c/5'], duration: 'q', finger: [1] },
          ],
          bpm: 80,
          timeSignature: [4, 4],
          clef: 'treble',
        },
        {
          type: 'exercise',
          title: 'Play the Chromatic Scale',
          instructions: 'Play the chromatic scale from C4 to C5. Use thumb (1) on white keys and middle finger (3) on black keys. Go slowly and make each half step even.',
          notes: [
            { keys: ['c/4'], duration: '8', finger: [1] },
            { keys: ['c#/4'], duration: '8', finger: [3] },
            { keys: ['d/4'], duration: '8', finger: [1] },
            { keys: ['d#/4'], duration: '8', finger: [3] },
            { keys: ['e/4'], duration: '8', finger: [1] },
            { keys: ['f/4'], duration: '8', finger: [1] },
            { keys: ['f#/4'], duration: '8', finger: [3] },
            { keys: ['g/4'], duration: '8', finger: [1] },
            { keys: ['g#/4'], duration: '8', finger: [3] },
            { keys: ['a/4'], duration: '8', finger: [1] },
            { keys: ['a#/4'], duration: '8', finger: [3] },
            { keys: ['b/4'], duration: '8', finger: [1] },
            { keys: ['c/5'], duration: 'q', finger: [1] },
          ],
          clef: 'treble',
          bpm: 66,
          timeSignature: [4, 4],
          fingerNumbers: { 'C4': 1, 'C#4': 3, 'D4': 1, 'D#4': 3, 'E4': 1, 'F4': 1, 'F#4': 3, 'G4': 1, 'G#4': 3, 'A4': 1, 'A#4': 3, 'B4': 1, 'C5': 1 },
          handsRequired: 'right',
          requireTiming: false,
        },
      ],
    },
    {
      id: '10.9',
      title: 'Eighth Note Triplets',
      steps: [
        {
          type: 'instruction',
          title: 'What Are Triplets?',
          content: `
            <p>An <strong>eighth note triplet</strong> divides one beat into <strong>3 equal notes</strong> instead of the usual 2. You fit 3 notes in the time of 2.</p>
            <p>Count triplets as: <strong>"tri-pl-et"</strong> or <strong>"1-and-a"</strong> for each beat.</p>
            <ul>
              <li>Regular eighth notes: 2 per beat (1-and, 2-and, 3-and, 4-and)</li>
              <li>Triplets: 3 per beat (1-and-a, 2-and-a, 3-and-a, 4-and-a)</li>
            </ul>
            <p>Triplets give music a rolling, flowing feel. They are common in blues, ballads, and many classical pieces.</p>
          `,
        },
        {
          type: 'demo',
          title: 'Hear Triplets vs Regular Eighth Notes',
          description: 'First, hear regular eighth notes (2 per beat), then triplets (3 per beat). Feel how the triplets have a rolling quality.',
          notes: [
            { keys: ['c/4'], duration: '8', finger: [1] },
            { keys: ['e/4'], duration: '8', finger: [3] },
            { keys: ['c/4'], duration: '8', finger: [1] },
            { keys: ['e/4'], duration: '8', finger: [3] },
            { keys: ['c/4'], duration: '8', finger: [1] },
            { keys: ['e/4'], duration: '8', finger: [3] },
            { keys: ['c/4'], duration: '8', finger: [1] },
            { keys: ['e/4'], duration: '8', finger: [3] },
            { keys: ['c/4'], duration: '8', finger: [1] },
            { keys: ['d/4'], duration: '8', finger: [2] },
            { keys: ['e/4'], duration: '8', finger: [3] },
            { keys: ['c/4'], duration: '8', finger: [1] },
            { keys: ['d/4'], duration: '8', finger: [2] },
            { keys: ['e/4'], duration: '8', finger: [3] },
            { keys: ['c/4'], duration: '8', finger: [1] },
            { keys: ['d/4'], duration: '8', finger: [2] },
            { keys: ['e/4'], duration: '8', finger: [3] },
            { keys: ['c/4'], duration: '8', finger: [1] },
            { keys: ['d/4'], duration: '8', finger: [2] },
            { keys: ['e/4'], duration: '8', finger: [3] },
          ],
          bpm: 72,
          timeSignature: [4, 4],
          clef: 'treble',
        },
        {
          type: 'exercise',
          title: 'Triplet Exercise',
          instructions: 'Play triplets on C-D-E, repeating the pattern for 4 beats. Each group of 3 notes fits into one beat. Count "1-and-a, 2-and-a, 3-and-a, 4-and-a." Keep all three notes in each group even.',
          notes: [
            { keys: ['c/4'], duration: '8', finger: [1] },
            { keys: ['d/4'], duration: '8', finger: [2] },
            { keys: ['e/4'], duration: '8', finger: [3] },
            { keys: ['c/4'], duration: '8', finger: [1] },
            { keys: ['d/4'], duration: '8', finger: [2] },
            { keys: ['e/4'], duration: '8', finger: [3] },
            { keys: ['c/4'], duration: '8', finger: [1] },
            { keys: ['d/4'], duration: '8', finger: [2] },
            { keys: ['e/4'], duration: '8', finger: [3] },
            { keys: ['c/4'], duration: '8', finger: [1] },
            { keys: ['d/4'], duration: '8', finger: [2] },
            { keys: ['e/4'], duration: '8', finger: [3] },
            { keys: ['e/4'], duration: '8', finger: [3] },
            { keys: ['d/4'], duration: '8', finger: [2] },
            { keys: ['c/4'], duration: '8', finger: [1] },
            { keys: ['e/4'], duration: '8', finger: [3] },
            { keys: ['d/4'], duration: '8', finger: [2] },
            { keys: ['c/4'], duration: '8', finger: [1] },
            { keys: ['e/4'], duration: '8', finger: [3] },
            { keys: ['d/4'], duration: '8', finger: [2] },
            { keys: ['c/4'], duration: '8', finger: [1] },
            { keys: ['e/4'], duration: '8', finger: [3] },
            { keys: ['d/4'], duration: '8', finger: [2] },
            { keys: ['c/4'], duration: 'q', finger: [1] },
          ],
          clef: 'treble',
          bpm: 66,
          timeSignature: [4, 4],
          fingerNumbers: { 'C4': 1, 'D4': 2, 'E4': 3 },
          handsRequired: 'right',
          requireTiming: false,
        },
      ],
    },
    {
      id: '10.10',
      title: 'Two-Part Writing',
      steps: [
        {
          type: 'instruction',
          title: 'Hands Playing Different Rhythms',
          content: `
            <p>Until now, when playing with both hands, your hands have mostly played the same rhythm. In real music, the hands often play <strong>different rhythms simultaneously</strong>.</p>
            <p>This is called <strong>two-part writing</strong> — each hand has its own independent "voice."</p>
            <p>For example:</p>
            <ul>
              <li>Right hand plays a melody in quarter notes</li>
              <li>Left hand holds whole notes or plays a different pattern</li>
            </ul>
            <p>The challenge is keeping each hand independent. Start by learning each hand separately, then combine them very slowly.</p>
          `,
        },
        {
          type: 'exercise',
          title: 'Two-Part Writing: Simple',
          instructions: 'Right hand plays a melody in quarter notes while the left hand holds half notes. Learn each hand separately first, then put them together slowly.',
          notes: [
            { keys: ['c/3', 'e/4'], duration: 'q', finger: [5, 3] },
            { keys: ['c/3', 'f/4'], duration: 'q', finger: [5, 4] },
            { keys: ['e/3', 'g/4'], duration: 'q', finger: [3, 5] },
            { keys: ['e/3', 'f/4'], duration: 'q', finger: [3, 4] },
            { keys: ['f/3', 'e/4'], duration: 'q', finger: [2, 3] },
            { keys: ['f/3', 'd/4'], duration: 'q', finger: [2, 2] },
            { keys: ['c/3', 'c/4'], duration: 'h', finger: [5, 1] },
          ],
          clef: 'grand',
          bpm: 60,
          timeSignature: [4, 4],
          fingerNumbers: { 'C3': 5, 'E3': 3, 'F3': 2, 'C4': 1, 'D4': 2, 'E4': 3, 'F4': 4, 'G4': 5 },
          handsRequired: 'both',
          requireTiming: false,
        },
        {
          type: 'exercise',
          title: 'Two-Part Writing: Melody and Bass',
          instructions: 'The right hand plays a singing melody while the left hand provides a bass line with a different rhythm. Go very slowly — independence between hands takes time.',
          notes: [
            { keys: ['c/3', 'g/4'], duration: 'q', finger: [5, 5] },
            { keys: ['g/3', 'e/4'], duration: 'q', finger: [1, 3] },
            { keys: ['c/3', 'f/4'], duration: 'q', finger: [5, 4] },
            { keys: ['g/3', 'e/4'], duration: 'q', finger: [1, 3] },
            { keys: ['f/3', 'd/4'], duration: 'q', finger: [2, 2] },
            { keys: ['c/3', 'e/4'], duration: 'q', finger: [5, 3] },
            { keys: ['g/3', 'd/4'], duration: 'q', finger: [1, 2] },
            { keys: ['c/3', 'c/4'], duration: 'q', finger: [5, 1] },
          ],
          clef: 'grand',
          bpm: 60,
          timeSignature: [4, 4],
          fingerNumbers: { 'C3': 5, 'F3': 2, 'G3': 1, 'C4': 1, 'D4': 2, 'E4': 3, 'F4': 4, 'G4': 5 },
          handsRequired: 'both',
          requireTiming: false,
        },
      ],
    },
    {
      id: '10.11',
      title: 'Minuet in G (Part 1)',
      steps: [
        {
          type: 'instruction',
          title: 'Bach/Petzold Minuet in G',
          content: `
            <p>The <strong>Minuet in G</strong> (BWV Anh. 114) is one of the most famous beginner classical pieces. Long attributed to J.S. Bach, it was actually composed by <strong>Christian Petzold</strong> and found in the Anna Magdalena Bach Notebook.</p>
            <p>A minuet is a stately dance in <strong>3/4 time</strong> (three beats per measure). This piece is in the key of G major (one sharp: F#).</p>
            <p>We will learn a simplified right hand melody first. The piece has two main sections — in this lesson we cover the first section (measures 1-8).</p>
          `,
        },
        {
          type: 'demo',
          title: 'Hear Minuet in G (First Section)',
          description: 'Listen to the first section of the Minuet in G — the right hand melody. This graceful dance is in 3/4 time.',
          notes: [
            { keys: ['g/4'], duration: 'q', finger: [1] },
            { keys: ['a/4'], duration: '8', finger: [2] },
            { keys: ['b/4'], duration: '8', finger: [3] },
            { keys: ['c/5'], duration: '8', finger: [4] },
            { keys: ['d/5'], duration: '8', finger: [5] },
            { keys: ['e/5'], duration: 'q', finger: [5] },
            { keys: ['c/5'], duration: 'q', finger: [3] },
            { keys: ['d/5'], duration: 'q', finger: [4] },
            { keys: ['g/4'], duration: 'q', finger: [1] },
            { keys: ['a/4'], duration: '8', finger: [2] },
            { keys: ['b/4'], duration: '8', finger: [3] },
            { keys: ['c/5'], duration: '8', finger: [4] },
            { keys: ['d/5'], duration: '8', finger: [5] },
            { keys: ['e/5'], duration: 'q', finger: [5] },
            { keys: ['c/5'], duration: 'q', finger: [3] },
            { keys: ['d/5'], duration: 'q', finger: [4] },
            { keys: ['g/4'], duration: 'q', finger: [1] },
            { keys: ['a/4'], duration: '8', finger: [2] },
            { keys: ['b/4'], duration: '8', finger: [3] },
            { keys: ['c/5'], duration: '8', finger: [4] },
            { keys: ['d/5'], duration: '8', finger: [5] },
            { keys: ['e/5'], duration: 'q', finger: [5] },
            { keys: ['d/5'], duration: 'q', finger: [4] },
            { keys: ['c/5'], duration: 'q', finger: [3] },
            { keys: ['b/4'], duration: 'q', finger: [2] },
            { keys: ['a/4'], duration: 'q', finger: [1] },
            { keys: ['g/4'], duration: 'h', finger: [1] },
          ],
          bpm: 80,
          timeSignature: [3, 4],
          clef: 'treble',
        },
        {
          type: 'exercise',
          title: 'Minuet in G: Measures 1-4',
          instructions: 'Learn the first 4 measures of the Minuet. Start slowly. The piece is in 3/4 time (3 beats per measure) and the key of G major (remember F#). Use the fingering shown.',
          notes: [
            { keys: ['g/4'], duration: 'q', finger: [1] },
            { keys: ['a/4'], duration: '8', finger: [2] },
            { keys: ['b/4'], duration: '8', finger: [3] },
            { keys: ['c/5'], duration: '8', finger: [4] },
            { keys: ['d/5'], duration: '8', finger: [5] },
            { keys: ['e/5'], duration: 'q', finger: [5] },
            { keys: ['c/5'], duration: 'q', finger: [3] },
            { keys: ['d/5'], duration: 'q', finger: [4] },
            { keys: ['g/4'], duration: 'q', finger: [1] },
            { keys: ['a/4'], duration: '8', finger: [2] },
            { keys: ['b/4'], duration: '8', finger: [3] },
            { keys: ['c/5'], duration: '8', finger: [4] },
            { keys: ['d/5'], duration: '8', finger: [5] },
          ],
          clef: 'treble',
          bpm: 66,
          timeSignature: [3, 4],
          fingerNumbers: { 'G4': 1, 'A4': 2, 'B4': 3, 'C5': 4, 'D5': 5, 'E5': 5 },
          handsRequired: 'right',
          requireTiming: false,
        },
        {
          type: 'exercise',
          title: 'Minuet in G: Measures 5-8',
          instructions: 'Now learn measures 5-8. This section leads back down to resolve on G. Practice slowly, then try connecting it to measures 1-4.',
          notes: [
            { keys: ['e/5'], duration: 'q', finger: [5] },
            { keys: ['c/5'], duration: 'q', finger: [3] },
            { keys: ['d/5'], duration: 'q', finger: [4] },
            { keys: ['g/4'], duration: 'q', finger: [1] },
            { keys: ['a/4'], duration: '8', finger: [2] },
            { keys: ['b/4'], duration: '8', finger: [3] },
            { keys: ['c/5'], duration: '8', finger: [4] },
            { keys: ['d/5'], duration: '8', finger: [5] },
            { keys: ['e/5'], duration: 'q', finger: [5] },
            { keys: ['d/5'], duration: 'q', finger: [4] },
            { keys: ['c/5'], duration: 'q', finger: [3] },
            { keys: ['b/4'], duration: 'q', finger: [2] },
            { keys: ['a/4'], duration: 'q', finger: [1] },
            { keys: ['g/4'], duration: 'h', finger: [1] },
          ],
          clef: 'treble',
          bpm: 66,
          timeSignature: [3, 4],
          fingerNumbers: { 'G4': 1, 'A4': 1, 'B4': 2, 'C5': 3, 'D5': 4, 'E5': 5 },
          handsRequired: 'right',
          requireTiming: false,
        },
      ],
    },
    {
      id: '10.12',
      title: 'Minuet in G (Part 2)',
      steps: [
        {
          type: 'instruction',
          title: 'Completing the Minuet',
          content: `
            <p>Now let's learn the <strong>second section</strong> of the Minuet in G. This section starts higher and features a gentle descent before returning to the opening theme.</p>
            <p>After learning this section, you will be able to play the complete simplified Minuet in G — a real classical piece!</p>
          `,
        },
        {
          type: 'demo',
          title: 'Hear Minuet in G (Second Section)',
          description: 'Listen to the second section of the Minuet. Notice how it starts higher and gradually winds back down.',
          notes: [
            { keys: ['b/4'], duration: 'q', finger: [3] },
            { keys: ['c/5'], duration: '8', finger: [4] },
            { keys: ['b/4'], duration: '8', finger: [3] },
            { keys: ['a/4'], duration: 'q', finger: [2] },
            { keys: ['b/4'], duration: 'q', finger: [3] },
            { keys: ['c/5'], duration: '8', finger: [4] },
            { keys: ['b/4'], duration: '8', finger: [3] },
            { keys: ['a/4'], duration: 'q', finger: [2] },
            { keys: ['g/4'], duration: 'q', finger: [1] },
            { keys: ['a/4'], duration: 'q', finger: [2] },
            { keys: ['b/4'], duration: 'q', finger: [3] },
            { keys: ['a/4'], duration: 'q', finger: [2] },
            { keys: ['g/4'], duration: 'q', finger: [1] },
            { keys: ['f#/4'], duration: 'q', finger: [1] },
            { keys: ['g/4'], duration: 'h', finger: [2] },
          ],
          bpm: 80,
          timeSignature: [3, 4],
          clef: 'treble',
        },
        {
          type: 'exercise',
          title: 'Minuet: Second Section',
          instructions: 'Play the second section of the Minuet. Notice the F# (the sharp in G major). Take it slowly and count the 3/4 time carefully.',
          notes: [
            { keys: ['b/4'], duration: 'q', finger: [3] },
            { keys: ['c/5'], duration: '8', finger: [4] },
            { keys: ['b/4'], duration: '8', finger: [3] },
            { keys: ['a/4'], duration: 'q', finger: [2] },
            { keys: ['b/4'], duration: 'q', finger: [3] },
            { keys: ['c/5'], duration: '8', finger: [4] },
            { keys: ['b/4'], duration: '8', finger: [3] },
            { keys: ['a/4'], duration: 'q', finger: [2] },
            { keys: ['g/4'], duration: 'q', finger: [1] },
            { keys: ['a/4'], duration: 'q', finger: [2] },
            { keys: ['b/4'], duration: 'q', finger: [3] },
            { keys: ['a/4'], duration: 'q', finger: [2] },
            { keys: ['g/4'], duration: 'q', finger: [1] },
            { keys: ['f#/4'], duration: 'q', finger: [1] },
            { keys: ['g/4'], duration: 'h', finger: [2] },
          ],
          clef: 'treble',
          bpm: 66,
          timeSignature: [3, 4],
          fingerNumbers: { 'F#4': 1, 'G4': 1, 'A4': 2, 'B4': 3, 'C5': 4 },
          handsRequired: 'right',
          requireTiming: false,
        },
        {
          type: 'exercise',
          title: 'Minuet in G: Full Piece',
          instructions: 'Now play the complete Minuet in G — both sections together. Take a comfortable tempo. This is your first complete classical piece!',
          notes: [
            { keys: ['g/4'], duration: 'q', finger: [1] },
            { keys: ['a/4'], duration: '8', finger: [2] },
            { keys: ['b/4'], duration: '8', finger: [3] },
            { keys: ['c/5'], duration: '8', finger: [4] },
            { keys: ['d/5'], duration: '8', finger: [5] },
            { keys: ['e/5'], duration: 'q', finger: [5] },
            { keys: ['c/5'], duration: 'q', finger: [3] },
            { keys: ['d/5'], duration: 'q', finger: [4] },
            { keys: ['g/4'], duration: 'q', finger: [1] },
            { keys: ['a/4'], duration: '8', finger: [2] },
            { keys: ['b/4'], duration: '8', finger: [3] },
            { keys: ['c/5'], duration: '8', finger: [4] },
            { keys: ['d/5'], duration: '8', finger: [5] },
            { keys: ['e/5'], duration: 'q', finger: [5] },
            { keys: ['c/5'], duration: 'q', finger: [3] },
            { keys: ['d/5'], duration: 'q', finger: [4] },
            { keys: ['g/4'], duration: 'q', finger: [1] },
            { keys: ['a/4'], duration: '8', finger: [2] },
            { keys: ['b/4'], duration: '8', finger: [3] },
            { keys: ['c/5'], duration: '8', finger: [4] },
            { keys: ['d/5'], duration: '8', finger: [5] },
            { keys: ['e/5'], duration: 'q', finger: [5] },
            { keys: ['d/5'], duration: 'q', finger: [4] },
            { keys: ['c/5'], duration: 'q', finger: [3] },
            { keys: ['b/4'], duration: 'q', finger: [2] },
            { keys: ['a/4'], duration: 'q', finger: [1] },
            { keys: ['g/4'], duration: 'h', finger: [1] },
            { keys: ['b/4'], duration: 'q', finger: [3] },
            { keys: ['c/5'], duration: '8', finger: [4] },
            { keys: ['b/4'], duration: '8', finger: [3] },
            { keys: ['a/4'], duration: 'q', finger: [2] },
            { keys: ['b/4'], duration: 'q', finger: [3] },
            { keys: ['c/5'], duration: '8', finger: [4] },
            { keys: ['b/4'], duration: '8', finger: [3] },
            { keys: ['a/4'], duration: 'q', finger: [2] },
            { keys: ['g/4'], duration: 'q', finger: [1] },
            { keys: ['a/4'], duration: 'q', finger: [2] },
            { keys: ['b/4'], duration: 'q', finger: [3] },
            { keys: ['a/4'], duration: 'q', finger: [2] },
            { keys: ['g/4'], duration: 'q', finger: [1] },
            { keys: ['f#/4'], duration: 'q', finger: [1] },
            { keys: ['g/4'], duration: 'h', finger: [2] },
          ],
          clef: 'treble',
          bpm: 72,
          timeSignature: [3, 4],
          fingerNumbers: { 'F#4': 1, 'G4': 1, 'A4': 2, 'B4': 3, 'C5': 4, 'D5': 5, 'E5': 5 },
          handsRequired: 'right',
          requireTiming: false,
        },
      ],
    },
    {
      id: '10.13',
      title: 'Simple Sonatina (Part 1)',
      steps: [
        {
          type: 'instruction',
          title: 'Introduction to the Sonatina',
          content: `
            <p>A <strong>sonatina</strong> is a short, simple sonata — a multi-section piece that was a staple of Classical-era teaching. Sonatinas typically have a lively, energetic character.</p>
            <p>We will learn a simplified sonatina-style piece in C major. It features:</p>
            <ul>
              <li>A clear melody in the right hand</li>
              <li>Simple accompaniment patterns</li>
              <li>Two contrasting sections: a bright opening theme and a gentler second theme</li>
            </ul>
            <p>In this lesson, we will learn the first theme (the exposition). It is energetic and uses the C major scale.</p>
          `,
        },
        {
          type: 'demo',
          title: 'Hear the First Theme',
          description: 'Listen to the first theme of our simple sonatina. Notice the energetic, scale-based melody.',
          notes: [
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['g/4'], duration: 'q', finger: [5] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['f/4'], duration: 'q', finger: [4] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['f/4'], duration: 'q', finger: [4] },
            { keys: ['g/4'], duration: 'q', finger: [5] },
            { keys: ['a/4'], duration: 'q', finger: [1] },
            { keys: ['g/4'], duration: 'q', finger: [5] },
            { keys: ['f/4'], duration: 'q', finger: [4] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['d/4'], duration: 'h', finger: [2] },
            { keys: ['c/4'], duration: 'h', finger: [1] },
          ],
          bpm: 88,
          timeSignature: [4, 4],
          clef: 'treble',
        },
        {
          type: 'exercise',
          title: 'Sonatina: First Theme (Part A)',
          instructions: 'Learn the first 8 notes of the sonatina theme. This uses the C position with an arpeggiated opening followed by stepwise motion.',
          notes: [
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['g/4'], duration: 'q', finger: [5] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['f/4'], duration: 'q', finger: [4] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['c/4'], duration: 'q', finger: [1] },
          ],
          clef: 'treble',
          bpm: 80,
          timeSignature: [4, 4],
          fingerNumbers: { 'C4': 1, 'D4': 2, 'E4': 3, 'F4': 4, 'G4': 5 },
          handsRequired: 'right',
          requireTiming: false,
        },
        {
          type: 'exercise',
          title: 'Sonatina: First Theme (Part B)',
          instructions: 'Now learn the ascending scale passage and the resolution. Then try connecting Part A and Part B together.',
          notes: [
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['f/4'], duration: 'q', finger: [4] },
            { keys: ['g/4'], duration: 'q', finger: [5] },
            { keys: ['a/4'], duration: 'q', finger: [1] },
            { keys: ['g/4'], duration: 'q', finger: [5] },
            { keys: ['f/4'], duration: 'q', finger: [4] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['d/4'], duration: 'h', finger: [2] },
            { keys: ['c/4'], duration: 'h', finger: [1] },
          ],
          clef: 'treble',
          bpm: 80,
          timeSignature: [4, 4],
          fingerNumbers: { 'C4': 1, 'D4': 2, 'E4': 3, 'F4': 4, 'G4': 5, 'A4': 1 },
          handsRequired: 'right',
          requireTiming: false,
        },
      ],
    },
    {
      id: '10.14',
      title: 'Simple Sonatina (Part 2)',
      steps: [
        {
          type: 'instruction',
          title: 'The Second Theme',
          content: `
            <p>In a sonatina, the <strong>second theme</strong> contrasts with the first. While our first theme was energetic and scale-based, the second theme is <strong>gentler and more lyrical</strong>.</p>
            <p>After the second theme, we return to a shortened version of the first theme to close the piece. This "return" gives the listener a satisfying sense of completeness.</p>
          `,
        },
        {
          type: 'demo',
          title: 'Hear the Second Theme',
          description: 'Listen to the gentler second theme, followed by the return of the opening material.',
          notes: [
            { keys: ['e/4'], duration: 'h', finger: [3] },
            { keys: ['g/4'], duration: 'h', finger: [5] },
            { keys: ['f/4'], duration: 'h', finger: [4] },
            { keys: ['e/4'], duration: 'h', finger: [3] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['f/4'], duration: 'q', finger: [4] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['g/4'], duration: 'q', finger: [5] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['d/4'], duration: 'h', finger: [2] },
            { keys: ['c/4'], duration: 'h', finger: [1] },
          ],
          bpm: 80,
          timeSignature: [4, 4],
          clef: 'treble',
        },
        {
          type: 'exercise',
          title: 'Sonatina: Second Theme',
          instructions: 'Play the lyrical second theme. Notice the half notes that give it a calmer feel compared to the first theme.',
          notes: [
            { keys: ['e/4'], duration: 'h', finger: [3] },
            { keys: ['g/4'], duration: 'h', finger: [5] },
            { keys: ['f/4'], duration: 'h', finger: [4] },
            { keys: ['e/4'], duration: 'h', finger: [3] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['f/4'], duration: 'q', finger: [4] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
          ],
          clef: 'treble',
          bpm: 76,
          timeSignature: [4, 4],
          fingerNumbers: { 'D4': 2, 'E4': 3, 'F4': 4, 'G4': 5 },
          handsRequired: 'right',
          requireTiming: false,
        },
        {
          type: 'exercise',
          title: 'Sonatina: Complete Piece',
          instructions: 'Play the complete sonatina: first theme, second theme, and return. This is a real musical form — congratulations on learning it!',
          notes: [
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['g/4'], duration: 'q', finger: [5] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['f/4'], duration: 'q', finger: [4] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['f/4'], duration: 'q', finger: [4] },
            { keys: ['g/4'], duration: 'q', finger: [5] },
            { keys: ['a/4'], duration: 'q', finger: [1] },
            { keys: ['g/4'], duration: 'q', finger: [5] },
            { keys: ['f/4'], duration: 'q', finger: [4] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['d/4'], duration: 'h', finger: [2] },
            { keys: ['c/4'], duration: 'h', finger: [1] },
            { keys: ['e/4'], duration: 'h', finger: [3] },
            { keys: ['g/4'], duration: 'h', finger: [5] },
            { keys: ['f/4'], duration: 'h', finger: [4] },
            { keys: ['e/4'], duration: 'h', finger: [3] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['f/4'], duration: 'q', finger: [4] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['g/4'], duration: 'q', finger: [5] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['d/4'], duration: 'h', finger: [2] },
            { keys: ['c/4'], duration: 'w', finger: [1] },
          ],
          clef: 'treble',
          bpm: 80,
          timeSignature: [4, 4],
          fingerNumbers: { 'C4': 1, 'D4': 2, 'E4': 3, 'F4': 4, 'G4': 5, 'A4': 1 },
          handsRequired: 'right',
          requireTiming: false,
        },
      ],
    },
    {
      id: '10.15',
      title: 'Eb Major Scale',
      steps: [
        {
          type: 'instruction',
          title: 'Introducing Eb Major',
          content: `
            <p>The <strong>Eb major scale</strong> has <strong>three flats</strong>: Bb, Eb, and Ab. The notes are:</p>
            <ul>
              <li><strong>Eb - F - G - Ab - Bb - C - D - Eb</strong></li>
            </ul>
            <p>The right hand fingering: <strong>2-1-2-3-4-1-2-3</strong>. Similar to Bb major, you start with finger 2 on the black key, then thumb crosses to the white key.</p>
            <p>Eb major has a rich, warm, "golden" quality and is one of the most common keys in classical and jazz music.</p>
          `,
          diagram: 'keyboard-highlight',
          diagramData: {
            highlightNotes: ['Eb4', 'F4', 'G4', 'Ab4', 'Bb4', 'C5', 'D5', 'Eb5'],
            viewportStart: 'D4',
            viewportEnd: 'F5',
            fingerNumbers: { 'Eb4': 2, 'F4': 1, 'G4': 2, 'Ab4': 3, 'Bb4': 4, 'C5': 1, 'D5': 2, 'Eb5': 3 },
          },
        },
        {
          type: 'demo',
          title: 'Hear Eb Major Scale',
          description: 'Listen to the Eb major scale ascending and descending. Notice its warm, rich sound.',
          notes: [
            { keys: ['eb/4'], duration: 'q', finger: [2] },
            { keys: ['f/4'], duration: 'q', finger: [1] },
            { keys: ['g/4'], duration: 'q', finger: [2] },
            { keys: ['ab/4'], duration: 'q', finger: [3] },
            { keys: ['bb/4'], duration: 'q', finger: [4] },
            { keys: ['c/5'], duration: 'q', finger: [1] },
            { keys: ['d/5'], duration: 'q', finger: [2] },
            { keys: ['eb/5'], duration: 'q', finger: [3] },
            { keys: ['eb/5'], duration: 'q', finger: [3] },
            { keys: ['d/5'], duration: 'q', finger: [2] },
            { keys: ['c/5'], duration: 'q', finger: [1] },
            { keys: ['bb/4'], duration: 'q', finger: [4] },
            { keys: ['ab/4'], duration: 'q', finger: [3] },
            { keys: ['g/4'], duration: 'q', finger: [2] },
            { keys: ['f/4'], duration: 'q', finger: [1] },
            { keys: ['eb/4'], duration: 'q', finger: [2] },
          ],
          bpm: 76,
          timeSignature: [4, 4],
          clef: 'treble',
        },
        {
          type: 'exercise',
          title: 'Play Eb Major Scale',
          instructions: 'Play the Eb major scale ascending and descending. Fingering: 2-1-2-3-4-1-2-3. Three flats: Eb, Ab, Bb. Focus on smooth thumb crossings.',
          notes: [
            { keys: ['eb/4'], duration: 'q', finger: [2] },
            { keys: ['f/4'], duration: 'q', finger: [1] },
            { keys: ['g/4'], duration: 'q', finger: [2] },
            { keys: ['ab/4'], duration: 'q', finger: [3] },
            { keys: ['bb/4'], duration: 'q', finger: [4] },
            { keys: ['c/5'], duration: 'q', finger: [1] },
            { keys: ['d/5'], duration: 'q', finger: [2] },
            { keys: ['eb/5'], duration: 'q', finger: [3] },
            { keys: ['eb/5'], duration: 'q', finger: [3] },
            { keys: ['d/5'], duration: 'q', finger: [2] },
            { keys: ['c/5'], duration: 'q', finger: [1] },
            { keys: ['bb/4'], duration: 'q', finger: [4] },
            { keys: ['ab/4'], duration: 'q', finger: [3] },
            { keys: ['g/4'], duration: 'q', finger: [2] },
            { keys: ['f/4'], duration: 'q', finger: [1] },
            { keys: ['eb/4'], duration: 'w', finger: [2] },
          ],
          clef: 'treble',
          bpm: 72,
          timeSignature: [4, 4],
          fingerNumbers: { 'Eb4': 2, 'F4': 1, 'G4': 2, 'Ab4': 3, 'Bb4': 4, 'C5': 1, 'D5': 2, 'Eb5': 3 },
          handsRequired: 'right',
          requireTiming: false,
        },
      ],
    },
    {
      id: '10.16',
      title: 'E Major Scale',
      steps: [
        {
          type: 'instruction',
          title: 'Introducing E Major',
          content: `
            <p>The <strong>E major scale</strong> has <strong>four sharps</strong>: F#, G#, C#, and D#. The notes are:</p>
            <ul>
              <li><strong>E - F# - G# - A - B - C# - D# - E</strong></li>
            </ul>
            <p>The right hand fingering: <strong>1-2-3-1-2-3-4-5</strong>. The familiar thumb-tuck pattern, with the tuck happening after G# (finger 3) to land on A.</p>
            <p>E major is a brilliant, sparkling key often used in guitar-friendly pop and rock music, as well as in classical repertoire.</p>
          `,
          diagram: 'keyboard-highlight',
          diagramData: {
            highlightNotes: ['E4', 'F#4', 'G#4', 'A4', 'B4', 'C#5', 'D#5', 'E5'],
            viewportStart: 'D4',
            viewportEnd: 'F5',
            fingerNumbers: { 'E4': 1, 'F#4': 2, 'G#4': 3, 'A4': 1, 'B4': 2, 'C#5': 3, 'D#5': 4, 'E5': 5 },
          },
        },
        {
          type: 'demo',
          title: 'Hear E Major Scale',
          description: 'Listen to the E major scale. With four sharps, it has a bright, ringing quality.',
          notes: [
            { keys: ['e/4'], duration: 'q', finger: [1] },
            { keys: ['f#/4'], duration: 'q', finger: [2] },
            { keys: ['g#/4'], duration: 'q', finger: [3] },
            { keys: ['a/4'], duration: 'q', finger: [1] },
            { keys: ['b/4'], duration: 'q', finger: [2] },
            { keys: ['c#/5'], duration: 'q', finger: [3] },
            { keys: ['d#/5'], duration: 'q', finger: [4] },
            { keys: ['e/5'], duration: 'q', finger: [5] },
            { keys: ['e/5'], duration: 'q', finger: [5] },
            { keys: ['d#/5'], duration: 'q', finger: [4] },
            { keys: ['c#/5'], duration: 'q', finger: [3] },
            { keys: ['b/4'], duration: 'q', finger: [2] },
            { keys: ['a/4'], duration: 'q', finger: [1] },
            { keys: ['g#/4'], duration: 'q', finger: [3] },
            { keys: ['f#/4'], duration: 'q', finger: [2] },
            { keys: ['e/4'], duration: 'q', finger: [1] },
          ],
          bpm: 76,
          timeSignature: [4, 4],
          clef: 'treble',
        },
        {
          type: 'exercise',
          title: 'Play E Major Scale',
          instructions: 'Play the E major scale ascending and descending. Fingering: 1-2-3-1-2-3-4-5. Four sharps: F#, G#, C#, D#. Many black keys here — keep your hand relaxed.',
          notes: [
            { keys: ['e/4'], duration: 'q', finger: [1] },
            { keys: ['f#/4'], duration: 'q', finger: [2] },
            { keys: ['g#/4'], duration: 'q', finger: [3] },
            { keys: ['a/4'], duration: 'q', finger: [1] },
            { keys: ['b/4'], duration: 'q', finger: [2] },
            { keys: ['c#/5'], duration: 'q', finger: [3] },
            { keys: ['d#/5'], duration: 'q', finger: [4] },
            { keys: ['e/5'], duration: 'q', finger: [5] },
            { keys: ['e/5'], duration: 'q', finger: [5] },
            { keys: ['d#/5'], duration: 'q', finger: [4] },
            { keys: ['c#/5'], duration: 'q', finger: [3] },
            { keys: ['b/4'], duration: 'q', finger: [2] },
            { keys: ['a/4'], duration: 'q', finger: [1] },
            { keys: ['g#/4'], duration: 'q', finger: [3] },
            { keys: ['f#/4'], duration: 'q', finger: [2] },
            { keys: ['e/4'], duration: 'w', finger: [1] },
          ],
          clef: 'treble',
          bpm: 72,
          timeSignature: [4, 4],
          fingerNumbers: { 'E4': 1, 'F#4': 2, 'G#4': 3, 'A4': 1, 'B4': 2, 'C#5': 3, 'D#5': 4, 'E5': 5 },
          handsRequired: 'right',
          requireTiming: false,
        },
      ],
    },
    {
      id: '10.17',
      title: 'Review: All Major Scales',
      steps: [
        {
          type: 'instruction',
          title: 'Major Scales You Have Learned',
          content: `
            <p>Over the course of this curriculum, you have learned the following <strong>major scales</strong>:</p>
            <ul>
              <li><strong>C major</strong> — no sharps or flats</li>
              <li><strong>G major</strong> — 1 sharp (F#)</li>
              <li><strong>F major</strong> — 1 flat (Bb)</li>
              <li><strong>D major</strong> — 2 sharps (F#, C#)</li>
              <li><strong>Bb major</strong> — 2 flats (Bb, Eb)</li>
              <li><strong>A major</strong> — 3 sharps (F#, C#, G#)</li>
              <li><strong>Eb major</strong> — 3 flats (Bb, Eb, Ab)</li>
              <li><strong>E major</strong> — 4 sharps (F#, G#, C#, D#)</li>
            </ul>
            <p>That is 8 of the 12 major scales! Let's do a quick review exercise through several of them.</p>
          `,
        },
        {
          type: 'exercise',
          title: 'Scale Review: C Major',
          instructions: 'Play the C major scale ascending and descending. No sharps or flats. Fingering: 1-2-3-1-2-3-4-5.',
          notes: [
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['f/4'], duration: 'q', finger: [1] },
            { keys: ['g/4'], duration: 'q', finger: [2] },
            { keys: ['a/4'], duration: 'q', finger: [3] },
            { keys: ['b/4'], duration: 'q', finger: [4] },
            { keys: ['c/5'], duration: 'q', finger: [5] },
            { keys: ['c/5'], duration: 'q', finger: [5] },
            { keys: ['b/4'], duration: 'q', finger: [4] },
            { keys: ['a/4'], duration: 'q', finger: [3] },
            { keys: ['g/4'], duration: 'q', finger: [2] },
            { keys: ['f/4'], duration: 'q', finger: [1] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['c/4'], duration: 'w', finger: [1] },
          ],
          clef: 'treble',
          bpm: 88,
          timeSignature: [4, 4],
          fingerNumbers: { 'C4': 1, 'D4': 2, 'E4': 3, 'F4': 1, 'G4': 2, 'A4': 3, 'B4': 4, 'C5': 5 },
          handsRequired: 'right',
          requireTiming: false,
        },
        {
          type: 'exercise',
          title: 'Scale Review: G and D Major',
          instructions: 'Play G major (1 sharp) then D major (2 sharps) back to back. Try to transition smoothly between scales.',
          notes: [
            { keys: ['g/4'], duration: 'q', finger: [1] },
            { keys: ['a/4'], duration: 'q', finger: [2] },
            { keys: ['b/4'], duration: 'q', finger: [3] },
            { keys: ['c/5'], duration: 'q', finger: [1] },
            { keys: ['d/5'], duration: 'q', finger: [2] },
            { keys: ['e/5'], duration: 'q', finger: [3] },
            { keys: ['f#/5'], duration: 'q', finger: [4] },
            { keys: ['g/5'], duration: 'q', finger: [5] },
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
          bpm: 84,
          timeSignature: [4, 4],
          fingerNumbers: { 'G4': 1, 'A4': 2, 'B4': 3, 'C5': 1, 'D5': 2, 'E5': 3, 'F#5': 4, 'G5': 5, 'D4': 1, 'E4': 2, 'F#4': 3, 'C#5': 4 },
          handsRequired: 'right',
          requireTiming: false,
        },
        {
          type: 'exercise',
          title: 'Scale Review: F and Bb Major',
          instructions: 'Play F major (1 flat) then Bb major (2 flats) back to back.',
          notes: [
            { keys: ['f/4'], duration: 'q', finger: [1] },
            { keys: ['g/4'], duration: 'q', finger: [2] },
            { keys: ['a/4'], duration: 'q', finger: [3] },
            { keys: ['bb/4'], duration: 'q', finger: [4] },
            { keys: ['c/5'], duration: 'q', finger: [1] },
            { keys: ['d/5'], duration: 'q', finger: [2] },
            { keys: ['e/5'], duration: 'q', finger: [3] },
            { keys: ['f/5'], duration: 'q', finger: [4] },
            { keys: ['bb/3'], duration: 'q', finger: [2] },
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['eb/4'], duration: 'q', finger: [3] },
            { keys: ['f/4'], duration: 'q', finger: [1] },
            { keys: ['g/4'], duration: 'q', finger: [2] },
            { keys: ['a/4'], duration: 'q', finger: [3] },
            { keys: ['bb/4'], duration: 'w', finger: [4] },
          ],
          clef: 'treble',
          bpm: 84,
          timeSignature: [4, 4],
          fingerNumbers: { 'F4': 1, 'G4': 2, 'A4': 3, 'Bb4': 4, 'C5': 1, 'D5': 2, 'E5': 3, 'F5': 4, 'Bb3': 2, 'C4': 1, 'D4': 2, 'Eb4': 3 },
          handsRequired: 'right',
          requireTiming: false,
        },
      ],
    },
    {
      id: '10.18',
      title: 'Expression and Interpretation',
      steps: [
        {
          type: 'instruction',
          title: 'Making Music Expressive',
          content: `
            <p>Playing the right notes at the right time is only the beginning. True musicianship comes from <strong>expression</strong> — making the music come alive.</p>
            <p>Three main tools for expression:</p>
            <ul>
              <li><strong>Dynamics:</strong> Playing louder (forte) and softer (piano) to create contrast and emotion</li>
              <li><strong>Tempo flexibility:</strong> Subtle speeding up (accelerando) and slowing down (ritardando) to shape phrases</li>
              <li><strong>Pedal:</strong> Using the sustain pedal to blend sounds and create a richer tone</li>
            </ul>
            <p>Think of a sentence spoken in a monotone versus one spoken with feeling. The notes are the words, but expression is the emotion.</p>
          `,
        },
        {
          type: 'instruction',
          title: 'Phrasing: The Musical Sentence',
          content: `
            <p>Music is organized into <strong>phrases</strong>, much like sentences in language. A musical phrase typically:</p>
            <ul>
              <li><strong>Builds</strong> toward a peak (get slightly louder)</li>
              <li><strong>Releases</strong> after the peak (get slightly softer)</li>
              <li><strong>Breathes</strong> at the end (tiny lift before the next phrase)</li>
            </ul>
            <p>When you play a melody, think about where the phrase peaks. Usually it is the highest note or the note with the most tension. Build your dynamics toward that peak, then taper off.</p>
            <p>This natural rise and fall of volume is what separates a musical performance from mere note-playing.</p>
          `,
        },
        {
          type: 'exercise',
          title: 'Expressive Playing Exercise',
          instructions: 'Play this melody with expression. Start soft (piano), gradually get louder toward the peak note (G), then taper back down to soft. Think of it as one musical phrase that breathes.',
          notes: [
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['f/4'], duration: 'q', finger: [4] },
            { keys: ['g/4'], duration: 'h', finger: [5] },
            { keys: ['f/4'], duration: 'q', finger: [4] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['c/4'], duration: 'h', finger: [1] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['g/4'], duration: 'h', finger: [5] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
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
    {
      id: '10.19',
      title: 'Building a Practice Routine',
      steps: [
        {
          type: 'instruction',
          title: 'Structuring Your Daily Practice',
          content: `
            <p>Now that you have many skills, it is important to practice <strong>efficiently</strong>. Here is a recommended practice routine structure:</p>
            <ol>
              <li><strong>Warm-up (5 minutes):</strong> Scales and arpeggios. Pick 2-3 different keys each day.</li>
              <li><strong>Technique (5-10 minutes):</strong> Exercises for your current challenge — inversions, hands together, etc.</li>
              <li><strong>Pieces (15-20 minutes):</strong> Work on your current piece. Break it into small sections.</li>
              <li><strong>Sight-reading (5 minutes):</strong> Play something new that you have never seen before.</li>
              <li><strong>Review (5 minutes):</strong> Play through a piece you already know for enjoyment.</li>
            </ol>
            <p>Total: 30-40 minutes per day. <strong>Consistency matters more than length.</strong> 30 minutes every day is far better than 3 hours once a week.</p>
          `,
        },
        {
          type: 'instruction',
          title: 'Practice Tips',
          content: `
            <p>Essential practice strategies:</p>
            <ul>
              <li><strong>Start slow:</strong> Always learn new passages slowly, then gradually increase speed</li>
              <li><strong>Isolate problems:</strong> When you stumble on a measure, practice just that measure 10 times before moving on</li>
              <li><strong>Hands separate:</strong> Learn each hand alone before combining</li>
              <li><strong>Small sections:</strong> Work on 2-4 measures at a time, not the whole piece</li>
              <li><strong>Use a metronome:</strong> Start at a slow tempo and increase by 4-8 BPM as you improve</li>
              <li><strong>Take breaks:</strong> Your brain processes music during rest. Take a 5-minute break every 20 minutes.</li>
              <li><strong>End on a success:</strong> Always finish practice by playing something you can do well</li>
            </ul>
          `,
        },
        {
          type: 'exercise',
          title: 'Warm-Up Routine',
          instructions: 'Here is a sample warm-up: play C major scale, then C major arpeggio, then a simple chord progression (C-F-G-C). This is something you can do at the start of every practice session.',
          notes: [
            { keys: ['c/4'], duration: '8', finger: [1] },
            { keys: ['d/4'], duration: '8', finger: [2] },
            { keys: ['e/4'], duration: '8', finger: [3] },
            { keys: ['f/4'], duration: '8', finger: [1] },
            { keys: ['g/4'], duration: '8', finger: [2] },
            { keys: ['a/4'], duration: '8', finger: [3] },
            { keys: ['b/4'], duration: '8', finger: [4] },
            { keys: ['c/5'], duration: '8', finger: [5] },
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['e/4'], duration: 'q', finger: [2] },
            { keys: ['g/4'], duration: 'q', finger: [3] },
            { keys: ['c/5'], duration: 'q', finger: [5] },
            { keys: ['c/4', 'e/4', 'g/4'], duration: 'h', finger: [1, 3, 5] },
            { keys: ['f/4', 'a/4', 'c/5'], duration: 'h', finger: [1, 3, 5] },
            { keys: ['g/4', 'b/4', 'd/5'], duration: 'h', finger: [1, 3, 5] },
            { keys: ['c/4', 'e/4', 'g/4'], duration: 'w', finger: [1, 3, 5] },
          ],
          clef: 'treble',
          bpm: 80,
          timeSignature: [4, 4],
          fingerNumbers: { 'C4': 1, 'D4': 2, 'E4': 3, 'F4': 1, 'G4': 1, 'A4': 3, 'B4': 4, 'C5': 5 },
          handsRequired: 'right',
          requireTiming: false,
        },
      ],
    },
    {
      id: '10.20',
      title: 'Graduation',
      steps: [
        {
          type: 'instruction',
          title: 'How Far You Have Come',
          content: `
            <p>Take a moment to appreciate everything you have accomplished. When you started, you did not even know where Middle C was. Now you can:</p>
            <ul>
              <li>Read music in treble and bass clef</li>
              <li>Play scales in 8 major keys and 3 minor keys</li>
              <li>Play harmonic and melodic minor scales</li>
              <li>Play chords, inversions, and arpeggios</li>
              <li>Use the sustain pedal</li>
              <li>Play with both hands together in parallel and contrary motion</li>
              <li>Handle various time signatures including 3/4 and 6/8</li>
              <li>Sight-read simple pieces</li>
              <li>Play classical pieces like the Minuet in G</li>
              <li>Express music through dynamics, phrasing, and tempo</li>
            </ul>
            <p>You are an <strong>early intermediate</strong> pianist. That is a real, meaningful achievement.</p>
          `,
        },
        {
          type: 'instruction',
          title: 'What Comes Next',
          content: `
            <p>Your piano journey is just beginning. Here are some directions you can explore:</p>
            <ul>
              <li><strong>More repertoire:</strong> Explore easy classical pieces, pop arrangements, or hymns</li>
              <li><strong>More scales and keys:</strong> Learn the remaining major and minor scales</li>
              <li><strong>Chord progressions:</strong> Learn common patterns like I-IV-V-I, ii-V-I, and 12-bar blues</li>
              <li><strong>Music theory:</strong> Deepen your understanding of harmony, intervals, and chord construction</li>
              <li><strong>A teacher:</strong> Consider lessons with a piano teacher who can give personalized feedback</li>
              <li><strong>Method books:</strong> Alfred's, Faber, or Bastien method books at the Level 2-3 range</li>
            </ul>
            <p>Most importantly, <strong>keep playing</strong>. Play music you enjoy. The best practice is practice you look forward to.</p>
          `,
        },
        {
          type: 'exercise',
          title: 'Final Exercise: Play Something You Love',
          instructions: 'For your graduation exercise, play through the complete Minuet in G one more time — or any melody you have learned in this course. Play it with expression, good hand shape, and musicality. You have earned this!',
          notes: [
            { keys: ['g/4'], duration: 'q', finger: [1] },
            { keys: ['a/4'], duration: '8', finger: [2] },
            { keys: ['b/4'], duration: '8', finger: [3] },
            { keys: ['c/5'], duration: '8', finger: [4] },
            { keys: ['d/5'], duration: '8', finger: [5] },
            { keys: ['e/5'], duration: 'q', finger: [5] },
            { keys: ['c/5'], duration: 'q', finger: [3] },
            { keys: ['d/5'], duration: 'q', finger: [4] },
            { keys: ['g/4'], duration: 'q', finger: [1] },
            { keys: ['a/4'], duration: '8', finger: [2] },
            { keys: ['b/4'], duration: '8', finger: [3] },
            { keys: ['c/5'], duration: '8', finger: [4] },
            { keys: ['d/5'], duration: '8', finger: [5] },
            { keys: ['e/5'], duration: 'q', finger: [5] },
            { keys: ['c/5'], duration: 'q', finger: [3] },
            { keys: ['d/5'], duration: 'q', finger: [4] },
            { keys: ['g/4'], duration: 'q', finger: [1] },
            { keys: ['a/4'], duration: '8', finger: [2] },
            { keys: ['b/4'], duration: '8', finger: [3] },
            { keys: ['c/5'], duration: '8', finger: [4] },
            { keys: ['d/5'], duration: '8', finger: [5] },
            { keys: ['e/5'], duration: 'q', finger: [5] },
            { keys: ['d/5'], duration: 'q', finger: [4] },
            { keys: ['c/5'], duration: 'q', finger: [3] },
            { keys: ['b/4'], duration: 'q', finger: [2] },
            { keys: ['a/4'], duration: 'q', finger: [1] },
            { keys: ['g/4'], duration: 'h', finger: [1] },
            { keys: ['b/4'], duration: 'q', finger: [3] },
            { keys: ['c/5'], duration: '8', finger: [4] },
            { keys: ['b/4'], duration: '8', finger: [3] },
            { keys: ['a/4'], duration: 'q', finger: [2] },
            { keys: ['b/4'], duration: 'q', finger: [3] },
            { keys: ['c/5'], duration: '8', finger: [4] },
            { keys: ['b/4'], duration: '8', finger: [3] },
            { keys: ['a/4'], duration: 'q', finger: [2] },
            { keys: ['g/4'], duration: 'q', finger: [1] },
            { keys: ['a/4'], duration: 'q', finger: [2] },
            { keys: ['b/4'], duration: 'q', finger: [3] },
            { keys: ['a/4'], duration: 'q', finger: [2] },
            { keys: ['g/4'], duration: 'q', finger: [1] },
            { keys: ['f#/4'], duration: 'q', finger: [1] },
            { keys: ['g/4'], duration: 'w', finger: [2] },
          ],
          clef: 'treble',
          bpm: 80,
          timeSignature: [3, 4],
          fingerNumbers: { 'F#4': 1, 'G4': 1, 'A4': 2, 'B4': 3, 'C5': 4, 'D5': 5, 'E5': 5 },
          handsRequired: 'right',
          requireTiming: false,
        },
        {
          type: 'instruction',
          title: 'Congratulations!',
          content: `
            <p><strong>You did it!</strong> You have completed the entire piano curriculum.</p>
            <p>You started as a complete beginner and have grown into an early intermediate pianist with real skills, real knowledge, and real music under your fingers.</p>
            <p>Remember:</p>
            <ul>
              <li>Practice consistently, even if only for short sessions</li>
              <li>Always warm up with scales and arpeggios</li>
              <li>Play music you enjoy — that is what keeps you going</li>
              <li>Be patient with yourself — every pianist was once a beginner</li>
            </ul>
            <p>Welcome to the world of piano. The music is yours now. Go play!</p>
          `,
        },
      ],
    },
  ],
};

export default module10;
