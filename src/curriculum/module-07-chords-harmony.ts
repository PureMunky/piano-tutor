import type { Module } from '../types';

const module07: Module = {
  id: 7,
  title: 'Chords & Harmony',
  description: 'Triads, I-IV-V progressions, and accompaniment patterns',
  lessons: [
    {
      id: '7.1',
      title: 'What is a Chord?',
      steps: [
        {
          type: 'instruction',
          title: 'Playing Notes Together',
          content: `
            <p>So far, you've been playing one note at a time. A <strong>chord</strong> is what happens when you play <strong>three or more notes at the same time</strong>.</p>
            <p>The most basic type of chord is called a <strong>triad</strong>, which has exactly three notes:</p>
            <ul>
              <li>The <strong>root</strong> — the note the chord is named after</li>
              <li>The <strong>third</strong> — two letter names above the root</li>
              <li>The <strong>fifth</strong> — four letter names above the root</li>
            </ul>
            <p>For example, a C major triad is made of C, E, and G. You play all three keys at the same time!</p>
          `,
        },
        {
          type: 'instruction',
          title: 'How Triads Are Built',
          content: `
            <p>A <strong>major triad</strong> is built by stacking two intervals:</p>
            <ul>
              <li>From the root to the third: <strong>4 half steps</strong> (a major third)</li>
              <li>From the third to the fifth: <strong>3 half steps</strong> (a minor third)</li>
            </ul>
            <p>In the key of C:</p>
            <ul>
              <li><strong>C</strong> (root) + 4 half steps = <strong>E</strong> (third) + 3 half steps = <strong>G</strong> (fifth)</li>
            </ul>
            <p>When you hear a major triad, it sounds <strong>bright and happy</strong>. You'll learn three major triads in this module: C, G, and F.</p>
          `,
        },
        {
          type: 'demo',
          title: 'Hear a Triad',
          description: 'Listen to the notes C, E, and G played separately, then together as a chord.',
          notes: [
            { keys: ['c/4'], duration: 'h', finger: [1] },
            { keys: ['e/4'], duration: 'h', finger: [3] },
            { keys: ['g/4'], duration: 'h', finger: [5] },
            { keys: ['c/4', 'e/4', 'g/4'], duration: 'w', finger: [1, 3, 5] },
          ],
          bpm: 70,
          timeSignature: [4, 4],
          clef: 'treble',
        },
      ],
    },
    {
      id: '7.2',
      title: 'C Major Triad',
      steps: [
        {
          type: 'instruction',
          title: 'The C Major Chord',
          content: `
            <p>The <strong>C major triad</strong> is the most fundamental chord in Western music. It consists of three notes:</p>
            <ul>
              <li><strong>C</strong> — the root (finger 1)</li>
              <li><strong>E</strong> — the third (finger 3)</li>
              <li><strong>G</strong> — the fifth (finger 5)</li>
            </ul>
            <p>Place your right hand with thumb on C, skip D, middle finger on E, skip F, pinky on G. Press all three keys down at the same time.</p>
            <p>This is called a <strong>blocked chord</strong> because you play all notes together as one block of sound.</p>
          `,
          diagram: 'keyboard-highlight',
          diagramData: {
            highlightNotes: ['C4', 'E4', 'G4'],
            viewportStart: 'C3',
            viewportEnd: 'C6',
            fingerNumbers: { 'C4': 1, 'E4': 3, 'G4': 5 },
          },
        },
        {
          type: 'demo',
          title: 'Hear the C Major Triad',
          description: 'Listen to the C major chord played four times as whole notes.',
          notes: [
            { keys: ['c/4', 'e/4', 'g/4'], duration: 'w', finger: [1, 3, 5] },
            { keys: ['c/4', 'e/4', 'g/4'], duration: 'w', finger: [1, 3, 5] },
            { keys: ['c/4', 'e/4', 'g/4'], duration: 'w', finger: [1, 3, 5] },
            { keys: ['c/4', 'e/4', 'g/4'], duration: 'w', finger: [1, 3, 5] },
          ],
          bpm: 60,
          timeSignature: [4, 4],
          clef: 'treble',
        },
        {
          type: 'exercise',
          title: 'Play the C Major Triad',
          instructions: 'Play the C major chord (C-E-G) four times. Press all three keys at the same time with fingers 1, 3, and 5. Keep your hand relaxed and curved.',
          notes: [
            { keys: ['c/4', 'e/4', 'g/4'], duration: 'w', finger: [1, 3, 5] },
            { keys: ['c/4', 'e/4', 'g/4'], duration: 'w', finger: [1, 3, 5] },
            { keys: ['c/4', 'e/4', 'g/4'], duration: 'w', finger: [1, 3, 5] },
            { keys: ['c/4', 'e/4', 'g/4'], duration: 'w', finger: [1, 3, 5] },
          ],
          clef: 'treble',
          bpm: 60,
          timeSignature: [4, 4],
          fingerNumbers: { 'C4': 1, 'E4': 3, 'G4': 5 },
          handsRequired: 'right',
          requireTiming: false,
        },
      ],
    },
    {
      id: '7.3',
      title: 'G Major Triad',
      steps: [
        {
          type: 'instruction',
          title: 'The G Major Chord',
          content: `
            <p>The <strong>G major triad</strong> is built the same way as C major, but starting on G:</p>
            <ul>
              <li><strong>G</strong> — the root (finger 1)</li>
              <li><strong>B</strong> — the third (finger 3)</li>
              <li><strong>D</strong> — the fifth (finger 5)</li>
            </ul>
            <p>Move your right hand up so your thumb is on G. Skip A, middle finger on B, skip C, pinky on D (the D above Middle C).</p>
            <p>Notice how the hand shape is exactly the same as for C major — you just moved up the keyboard.</p>
          `,
          diagram: 'keyboard-highlight',
          diagramData: {
            highlightNotes: ['G4', 'B4', 'D5'],
            viewportStart: 'C3',
            viewportEnd: 'C6',
            fingerNumbers: { 'G4': 1, 'B4': 3, 'D5': 5 },
          },
        },
        {
          type: 'demo',
          title: 'Hear the G Major Triad',
          description: 'Listen to the G major chord played four times.',
          notes: [
            { keys: ['g/4', 'b/4', 'd/5'], duration: 'w', finger: [1, 3, 5] },
            { keys: ['g/4', 'b/4', 'd/5'], duration: 'w', finger: [1, 3, 5] },
            { keys: ['g/4', 'b/4', 'd/5'], duration: 'w', finger: [1, 3, 5] },
            { keys: ['g/4', 'b/4', 'd/5'], duration: 'w', finger: [1, 3, 5] },
          ],
          bpm: 60,
          timeSignature: [4, 4],
          clef: 'treble',
        },
        {
          type: 'exercise',
          title: 'Play the G Major Triad',
          instructions: 'Play the G major chord (G-B-D) four times. Use fingers 1, 3, and 5. Make sure all three notes sound at the same time.',
          notes: [
            { keys: ['g/4', 'b/4', 'd/5'], duration: 'w', finger: [1, 3, 5] },
            { keys: ['g/4', 'b/4', 'd/5'], duration: 'w', finger: [1, 3, 5] },
            { keys: ['g/4', 'b/4', 'd/5'], duration: 'w', finger: [1, 3, 5] },
            { keys: ['g/4', 'b/4', 'd/5'], duration: 'w', finger: [1, 3, 5] },
          ],
          clef: 'treble',
          bpm: 60,
          timeSignature: [4, 4],
          fingerNumbers: { 'G4': 1, 'B4': 3, 'D5': 5 },
          handsRequired: 'right',
          requireTiming: false,
        },
      ],
    },
    {
      id: '7.4',
      title: 'F Major Triad',
      steps: [
        {
          type: 'instruction',
          title: 'The F Major Chord',
          content: `
            <p>The <strong>F major triad</strong> uses these three notes:</p>
            <ul>
              <li><strong>F</strong> — the root (finger 1)</li>
              <li><strong>A</strong> — the third (finger 3)</li>
              <li><strong>C</strong> — the fifth (finger 5)</li>
            </ul>
            <p>Place your thumb on F (just above Middle C's E). Skip G, middle finger on A, skip B, pinky on C5.</p>
            <p>You now know three major triads: C, F, and G. These are the three most important chords in the key of C major!</p>
          `,
          diagram: 'keyboard-highlight',
          diagramData: {
            highlightNotes: ['F4', 'A4', 'C5'],
            viewportStart: 'C3',
            viewportEnd: 'C6',
            fingerNumbers: { 'F4': 1, 'A4': 3, 'C5': 5 },
          },
        },
        {
          type: 'demo',
          title: 'Hear the F Major Triad',
          description: 'Listen to the F major chord played four times.',
          notes: [
            { keys: ['f/4', 'a/4', 'c/5'], duration: 'w', finger: [1, 3, 5] },
            { keys: ['f/4', 'a/4', 'c/5'], duration: 'w', finger: [1, 3, 5] },
            { keys: ['f/4', 'a/4', 'c/5'], duration: 'w', finger: [1, 3, 5] },
            { keys: ['f/4', 'a/4', 'c/5'], duration: 'w', finger: [1, 3, 5] },
          ],
          bpm: 60,
          timeSignature: [4, 4],
          clef: 'treble',
        },
        {
          type: 'exercise',
          title: 'Play the F Major Triad',
          instructions: 'Play the F major chord (F-A-C) four times. Use fingers 1, 3, and 5. Listen to how it sounds different from C major and G major.',
          notes: [
            { keys: ['f/4', 'a/4', 'c/5'], duration: 'w', finger: [1, 3, 5] },
            { keys: ['f/4', 'a/4', 'c/5'], duration: 'w', finger: [1, 3, 5] },
            { keys: ['f/4', 'a/4', 'c/5'], duration: 'w', finger: [1, 3, 5] },
            { keys: ['f/4', 'a/4', 'c/5'], duration: 'w', finger: [1, 3, 5] },
          ],
          clef: 'treble',
          bpm: 60,
          timeSignature: [4, 4],
          fingerNumbers: { 'F4': 1, 'A4': 3, 'C5': 5 },
          handsRequired: 'right',
          requireTiming: false,
        },
      ],
    },
    {
      id: '7.5',
      title: 'Broken Chords',
      steps: [
        {
          type: 'instruction',
          title: 'Breaking Up the Chord',
          content: `
            <p>Instead of playing all three notes at the same time (blocked chord), you can play them <strong>one at a time</strong>. This is called a <strong>broken chord</strong> or <strong>arpeggio</strong>.</p>
            <p>For a C major broken chord, you play:</p>
            <ul>
              <li><strong>C</strong> (finger 1), then <strong>E</strong> (finger 3), then <strong>G</strong> (finger 5)</li>
              <li>Then back down: <strong>E</strong> (finger 3), <strong>C</strong> (finger 1)</li>
            </ul>
            <p>Broken chords sound flowing and elegant. They are used constantly in piano music for accompaniment patterns.</p>
          `,
        },
        {
          type: 'demo',
          title: 'Hear a Broken Chord',
          description: 'Listen to the C major triad played as a broken chord: C-E-G-E-C.',
          notes: [
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['g/4'], duration: 'q', finger: [5] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['c/4'], duration: 'w', finger: [1] },
          ],
          bpm: 72,
          timeSignature: [4, 4],
          clef: 'treble',
        },
        {
          type: 'exercise',
          title: 'C Major Broken Chord',
          instructions: 'Play the C major broken chord: C-E-G-E-C. Use fingers 1-3-5-3-1. Keep a smooth, even rhythm as you move between the notes.',
          notes: [
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['g/4'], duration: 'q', finger: [5] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['c/4'], duration: 'w', finger: [1] },
          ],
          clef: 'treble',
          bpm: 72,
          timeSignature: [4, 4],
          fingerNumbers: { 'C4': 1, 'E4': 3, 'G4': 5 },
          handsRequired: 'right',
          requireTiming: false,
        },
        {
          type: 'exercise',
          title: 'Three Broken Chords',
          instructions: 'Play broken chords for C major, F major, and G major in sequence. C-E-G-E-C, then F-A-C-A-F, then G-B-D-B-G.',
          notes: [
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['g/4'], duration: 'q', finger: [5] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['f/4'], duration: 'q', finger: [1] },
            { keys: ['a/4'], duration: 'q', finger: [3] },
            { keys: ['c/5'], duration: 'q', finger: [5] },
            { keys: ['a/4'], duration: 'q', finger: [3] },
            { keys: ['f/4'], duration: 'q', finger: [1] },
            { keys: ['g/4'], duration: 'q', finger: [1] },
            { keys: ['b/4'], duration: 'q', finger: [3] },
            { keys: ['d/5'], duration: 'q', finger: [5] },
            { keys: ['b/4'], duration: 'q', finger: [3] },
            { keys: ['g/4'], duration: 'q', finger: [1] },
          ],
          clef: 'treble',
          bpm: 72,
          timeSignature: [4, 4],
          fingerNumbers: { 'C4': 1, 'E4': 3, 'F4': 1, 'A4': 3, 'C5': 5, 'G4': 1, 'B4': 3, 'D5': 5 },
          handsRequired: 'right',
          requireTiming: false,
        },
      ],
    },
    {
      id: '7.6',
      title: 'The I-IV-V Progression',
      steps: [
        {
          type: 'instruction',
          title: 'The Most Important Chord Progression',
          content: `
            <p>In music theory, chords in a key are given <strong>Roman numeral names</strong> based on which scale degree they start on:</p>
            <ul>
              <li><strong>I (one)</strong> = chord built on the 1st note = <strong>C major</strong> (C-E-G)</li>
              <li><strong>IV (four)</strong> = chord built on the 4th note = <strong>F major</strong> (F-A-C)</li>
              <li><strong>V (five)</strong> = chord built on the 5th note = <strong>G major</strong> (G-B-D)</li>
            </ul>
            <p>The <strong>I-IV-V</strong> progression is the foundation of countless songs in pop, rock, country, blues, and classical music. Learning it unlocks the ability to play along with hundreds of songs!</p>
          `,
        },
        {
          type: 'instruction',
          title: 'Why I-IV-V Works',
          content: `
            <p>These three chords are called the <strong>primary chords</strong> of the key. Together, they contain every note in the C major scale:</p>
            <ul>
              <li>C chord: <strong>C</strong>, <strong>E</strong>, <strong>G</strong></li>
              <li>F chord: <strong>F</strong>, <strong>A</strong>, C</li>
              <li>G chord: G, <strong>B</strong>, <strong>D</strong></li>
            </ul>
            <p>The V chord (G) creates <strong>tension</strong> that wants to resolve back to the I chord (C). This tension and resolution is what gives music its sense of movement and arrival.</p>
          `,
        },
        {
          type: 'demo',
          title: 'Hear the I-IV-V-I Progression',
          description: 'Listen to the classic chord progression: C major, F major, G major, back to C major.',
          notes: [
            { keys: ['c/4', 'e/4', 'g/4'], duration: 'w', finger: [1, 3, 5] },
            { keys: ['f/4', 'a/4', 'c/5'], duration: 'w', finger: [1, 3, 5] },
            { keys: ['g/4', 'b/4', 'd/5'], duration: 'w', finger: [1, 3, 5] },
            { keys: ['c/4', 'e/4', 'g/4'], duration: 'w', finger: [1, 3, 5] },
          ],
          bpm: 65,
          timeSignature: [4, 4],
          clef: 'treble',
        },
      ],
    },
    {
      id: '7.7',
      title: 'Chord Progression Exercise',
      steps: [
        {
          type: 'instruction',
          title: 'Playing Chords with the Left Hand',
          content: `
            <p>In most piano music, the <strong>left hand plays the chords</strong> while the right hand plays the melody. Let's practice the I-IV-V-I progression with your left hand.</p>
            <p>Left hand chord positions (octave 3):</p>
            <ul>
              <li><strong>C major:</strong> C3-E3-G3 (fingers 5-3-1)</li>
              <li><strong>F major:</strong> F3-A3-C4 (fingers 5-3-1)</li>
              <li><strong>G major:</strong> G3-B3-D4 (fingers 5-3-1)</li>
            </ul>
            <p>Notice that for left hand chords, the pinky (5) plays the root (lowest note) and the thumb (1) plays the top note.</p>
          `,
          diagram: 'keyboard-highlight',
          diagramData: {
            highlightNotes: ['C3', 'E3', 'G3'],
            viewportStart: 'C3',
            viewportEnd: 'C5',
            fingerNumbers: { 'C3': 5, 'E3': 3, 'G3': 1 },
          },
        },
        {
          type: 'exercise',
          title: 'Left Hand I-IV-V-I',
          instructions: 'Play the I-IV-V-I progression with your left hand: C major (C3-E3-G3), F major (F3-A3-C4), G major (G3-B3-D4), then back to C major. Use fingers 5-3-1 for each chord.',
          notes: [
            { keys: ['c/3', 'e/3', 'g/3'], duration: 'w', finger: [5, 3, 1] },
            { keys: ['f/3', 'a/3', 'c/4'], duration: 'w', finger: [5, 3, 1] },
            { keys: ['g/3', 'b/3', 'd/4'], duration: 'w', finger: [5, 3, 1] },
            { keys: ['c/3', 'e/3', 'g/3'], duration: 'w', finger: [5, 3, 1] },
          ],
          clef: 'bass',
          bpm: 60,
          timeSignature: [4, 4],
          fingerNumbers: { 'C3': 5, 'E3': 3, 'G3': 1, 'F3': 5, 'A3': 3, 'C4': 1, 'B3': 3, 'D4': 1 },
          handsRequired: 'left',
          requireTiming: false,
        },
        {
          type: 'exercise',
          title: 'I-IV-V-I Twice Through',
          instructions: 'Play the I-IV-V-I progression twice with your left hand. Try to make the chord changes smooth — prepare your fingers for the next chord as you lift from the current one.',
          notes: [
            { keys: ['c/3', 'e/3', 'g/3'], duration: 'w', finger: [5, 3, 1] },
            { keys: ['f/3', 'a/3', 'c/4'], duration: 'w', finger: [5, 3, 1] },
            { keys: ['g/3', 'b/3', 'd/4'], duration: 'w', finger: [5, 3, 1] },
            { keys: ['c/3', 'e/3', 'g/3'], duration: 'w', finger: [5, 3, 1] },
            { keys: ['c/3', 'e/3', 'g/3'], duration: 'w', finger: [5, 3, 1] },
            { keys: ['f/3', 'a/3', 'c/4'], duration: 'w', finger: [5, 3, 1] },
            { keys: ['g/3', 'b/3', 'd/4'], duration: 'w', finger: [5, 3, 1] },
            { keys: ['c/3', 'e/3', 'g/3'], duration: 'w', finger: [5, 3, 1] },
          ],
          clef: 'bass',
          bpm: 65,
          timeSignature: [4, 4],
          fingerNumbers: { 'C3': 5, 'E3': 3, 'G3': 1, 'F3': 5, 'A3': 3, 'C4': 1, 'B3': 3, 'D4': 1 },
          handsRequired: 'left',
          requireTiming: false,
        },
      ],
    },
    {
      id: '7.8',
      title: 'Melody with Chords',
      steps: [
        {
          type: 'instruction',
          title: 'Putting It Together',
          content: `
            <p>Now comes the exciting part: playing a <strong>melody with your right hand</strong> while your <strong>left hand holds chords</strong>.</p>
            <p>This is how most piano music works:</p>
            <ul>
              <li><strong>Right hand:</strong> plays the melody (treble clef)</li>
              <li><strong>Left hand:</strong> plays chords for harmony (bass clef)</li>
            </ul>
            <p>We'll start simple. The left hand will play whole-note chords (held for a full measure) while the right hand plays a basic melody.</p>
            <p>Start slowly! Coordinating both hands takes practice. It's normal for this to feel challenging at first.</p>
          `,
        },
        {
          type: 'demo',
          title: 'Hear Melody and Chords Together',
          description: 'Listen to a simple melody over left hand chords. The right hand plays C-D-E-C while the left hand holds a C major chord.',
          notes: [
            { keys: ['c/3', 'e/3', 'g/3'], duration: 'w', finger: [5, 3, 1] },
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['c/4'], duration: 'q', finger: [1] },
          ],
          bpm: 70,
          timeSignature: [4, 4],
          clef: 'grand',
        },
        {
          type: 'exercise',
          title: 'Simple Melody with C Chord',
          instructions: 'Right hand plays C-D-E-D over a left hand C major chord. Play the left hand chord first, then add the right hand melody. Take it very slowly.',
          notes: [
            { keys: ['c/3', 'e/3', 'g/3'], duration: 'w', finger: [5, 3, 1] },
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['c/3', 'e/3', 'g/3'], duration: 'w', finger: [5, 3, 1] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['c/4'], duration: 'h', finger: [1] },
          ],
          clef: 'grand',
          bpm: 65,
          timeSignature: [4, 4],
          fingerNumbers: { 'C3': 5, 'E3': 3, 'G3': 1, 'C4': 1, 'D4': 2, 'E4': 3 },
          handsRequired: 'both',
          requireTiming: false,
        },
        {
          type: 'exercise',
          title: 'Melody over Two Chords',
          instructions: 'Play a melody with two different chords: C major for the first measure, then G major for the second. Right hand plays quarter notes while the left hand holds each chord.',
          notes: [
            { keys: ['c/3', 'e/3', 'g/3'], duration: 'w', finger: [5, 3, 1] },
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['g/4'], duration: 'q', finger: [5] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['g/3', 'b/3', 'd/4'], duration: 'w', finger: [5, 3, 1] },
            { keys: ['g/4'], duration: 'q', finger: [5] },
            { keys: ['f/4'], duration: 'q', finger: [4] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['c/3', 'e/3', 'g/3'], duration: 'w', finger: [5, 3, 1] },
            { keys: ['c/4'], duration: 'w', finger: [1] },
          ],
          clef: 'grand',
          bpm: 65,
          timeSignature: [4, 4],
          fingerNumbers: { 'C3': 5, 'E3': 3, 'G3': 1, 'B3': 3, 'C4': 1, 'D4': 2, 'E4': 3, 'F4': 4, 'G4': 5 },
          handsRequired: 'both',
          requireTiming: false,
        },
      ],
    },
    {
      id: '7.9',
      title: 'Introduction to the Damper Pedal',
      steps: [
        {
          type: 'instruction',
          title: 'The Right Pedal',
          content: `
            <p>Most pianos have two or three pedals at the bottom. The <strong>rightmost pedal</strong> is the <strong>damper pedal</strong> (also called the sustain pedal). It's the most commonly used pedal.</p>
            <p>When you press the damper pedal:</p>
            <ul>
              <li>All the dampers lift off the strings</li>
              <li>Notes <strong>continue to ring</strong> after you release the keys</li>
              <li>The sound becomes richer and more connected</li>
            </ul>
            <p>Use your <strong>right foot</strong> to press the pedal. Keep your heel on the floor and press with the ball of your foot.</p>
          `,
        },
        {
          type: 'instruction',
          title: 'When to Use the Pedal',
          content: `
            <p>The damper pedal is wonderful, but it must be used carefully:</p>
            <ul>
              <li><strong>Too much pedal</strong> makes the sound muddy — all the notes blend together</li>
              <li><strong>Change the pedal</strong> when the chord changes, or the old and new chords will clash</li>
              <li>The technique is: press the new chord, <em>then</em> quickly lift and re-press the pedal</li>
            </ul>
            <p>For now, practice pressing and releasing the pedal while playing single chords. If you have an acoustic or digital piano with a pedal, try it out!</p>
            <p><em>Note: If your keyboard doesn't have a pedal, that's okay. You can still learn the concepts and add pedal technique later.</em></p>
          `,
        },
        {
          type: 'exercise',
          title: 'Chords with Pedal',
          instructions: 'Play each chord as a whole note. If you have a pedal, press it when you play each chord and release it just before the next chord. C major, F major, G major, C major.',
          notes: [
            { keys: ['c/3', 'e/3', 'g/3'], duration: 'w', finger: [5, 3, 1] },
            { keys: ['f/3', 'a/3', 'c/4'], duration: 'w', finger: [5, 3, 1] },
            { keys: ['g/3', 'b/3', 'd/4'], duration: 'w', finger: [5, 3, 1] },
            { keys: ['c/3', 'e/3', 'g/3'], duration: 'w', finger: [5, 3, 1] },
          ],
          clef: 'bass',
          bpm: 60,
          timeSignature: [4, 4],
          fingerNumbers: { 'C3': 5, 'E3': 3, 'G3': 1, 'F3': 5, 'A3': 3, 'C4': 1, 'B3': 3, 'D4': 1 },
          handsRequired: 'left',
          requireTiming: false,
        },
      ],
    },
    {
      id: '7.10',
      title: 'Module Review',
      steps: [
        {
          type: 'instruction',
          title: 'What You\'ve Learned',
          content: `
            <p>Congratulations! In this module you've learned some of the most important building blocks of piano playing:</p>
            <ul>
              <li><strong>Triads</strong> — three-note chords built on root, third, and fifth</li>
              <li><strong>C, F, and G major</strong> triads</li>
              <li><strong>Blocked chords</strong> (all notes together) and <strong>broken chords</strong> (notes one at a time)</li>
              <li>The <strong>I-IV-V progression</strong> — the foundation of countless songs</li>
              <li>Playing <strong>melody with chords</strong> — right hand melody, left hand harmony</li>
              <li>The <strong>damper pedal</strong> and how it sustains sound</li>
            </ul>
            <p>In the next module, you'll refine your musicianship with dotted rhythms, dynamics, phrasing, and an introduction to minor keys!</p>
          `,
        },
        {
          type: 'exercise',
          title: 'Combined Chord Review',
          instructions: 'Play through all three triads as blocked chords with your right hand (C-F-G-C), then play them as broken chords. This reviews everything from the module.',
          notes: [
            { keys: ['c/4', 'e/4', 'g/4'], duration: 'w', finger: [1, 3, 5] },
            { keys: ['f/4', 'a/4', 'c/5'], duration: 'w', finger: [1, 3, 5] },
            { keys: ['g/4', 'b/4', 'd/5'], duration: 'w', finger: [1, 3, 5] },
            { keys: ['c/4', 'e/4', 'g/4'], duration: 'w', finger: [1, 3, 5] },
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['g/4'], duration: 'q', finger: [5] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['f/4'], duration: 'q', finger: [1] },
            { keys: ['a/4'], duration: 'q', finger: [3] },
            { keys: ['c/5'], duration: 'q', finger: [5] },
            { keys: ['a/4'], duration: 'q', finger: [3] },
            { keys: ['g/4'], duration: 'q', finger: [1] },
            { keys: ['b/4'], duration: 'q', finger: [3] },
            { keys: ['d/5'], duration: 'q', finger: [5] },
            { keys: ['b/4'], duration: 'q', finger: [3] },
            { keys: ['c/4', 'e/4', 'g/4'], duration: 'w', finger: [1, 3, 5] },
          ],
          clef: 'treble',
          bpm: 72,
          timeSignature: [4, 4],
          fingerNumbers: { 'C4': 1, 'E4': 3, 'F4': 1, 'A4': 3, 'C5': 5, 'G4': 1, 'B4': 3, 'D5': 5 },
          handsRequired: 'right',
          requireTiming: false,
        },
        {
          type: 'exercise',
          title: 'Full Hands Review',
          instructions: 'Left hand plays I-IV-V-I as blocked chords while the right hand plays a scale pattern over each chord. This is the culmination of everything in this module!',
          notes: [
            { keys: ['c/3', 'e/3', 'g/3'], duration: 'w', finger: [5, 3, 1] },
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['g/4'], duration: 'q', finger: [5] },
            { keys: ['f/3', 'a/3', 'c/4'], duration: 'w', finger: [5, 3, 1] },
            { keys: ['f/4'], duration: 'q', finger: [4] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['g/3', 'b/3', 'd/4'], duration: 'w', finger: [5, 3, 1] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['f/4'], duration: 'q', finger: [4] },
            { keys: ['g/4'], duration: 'q', finger: [5] },
            { keys: ['c/3', 'e/3', 'g/3'], duration: 'w', finger: [5, 3, 1] },
            { keys: ['c/4'], duration: 'w', finger: [1] },
          ],
          clef: 'grand',
          bpm: 65,
          timeSignature: [4, 4],
          fingerNumbers: { 'C3': 5, 'E3': 3, 'G3': 1, 'F3': 5, 'A3': 3, 'B3': 3, 'C4': 1, 'D4': 2, 'E4': 3, 'F4': 4, 'G4': 5 },
          handsRequired: 'both',
          requireTiming: false,
        },
      ],
    },
  ],
};

export default module07;
