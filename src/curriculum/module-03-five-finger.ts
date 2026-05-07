import type { Module } from '../types';

const module03: Module = {
  id: 3,
  title: 'Five-Finger Position',
  description: 'C position, 4/4 time, rests, and hands together',
  lessons: [
    {
      id: '3.1',
      title: 'Full C Position (Right Hand)',
      steps: [
        {
          type: 'instruction',
          title: 'All Five Fingers on C-D-E-F-G',
          content: `
            <p>In Module 2 you played with your first three fingers. Now it's time to use <strong>all five fingers</strong> of your right hand!</p>
            <p>Place your right hand in <strong>C position</strong>:</p>
            <ul>
              <li><strong>Thumb (1)</strong> on <strong>C</strong> (Middle C)</li>
              <li><strong>Index (2)</strong> on <strong>D</strong></li>
              <li><strong>Middle (3)</strong> on <strong>E</strong></li>
              <li><strong>Ring (4)</strong> on <strong>F</strong></li>
              <li><strong>Pinky (5)</strong> on <strong>G</strong></li>
            </ul>
            <p>Your ring finger (4) and pinky (5) may feel weaker at first. That's completely normal. These fingers get stronger with practice. Keep your hand relaxed and curved — don't flatten your fingers to reach.</p>
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
          type: 'demo',
          title: 'Hear All Five Notes',
          description: 'Listen to all five notes of the C position played ascending and then descending.',
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
          bpm: 80,
          timeSignature: [4, 4],
          clef: 'treble',
        },
        {
          type: 'exercise',
          title: 'Five-Finger Climb',
          instructions: 'Play all five notes ascending (C-D-E-F-G) and then descending (G-F-E-D-C). Keep each note even and steady. Focus on using the correct finger for each key.',
          notes: [
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['f/4'], duration: 'q', finger: [4] },
            { keys: ['g/4'], duration: 'h', finger: [5] },
            { keys: ['g/4'], duration: 'q', finger: [5] },
            { keys: ['f/4'], duration: 'q', finger: [4] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
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
        {
          type: 'exercise',
          title: 'Finger 4 and 5 Workout',
          instructions: 'Your ring finger (4) and pinky (5) need extra attention. This exercise focuses on strengthening them. Play each note clearly and evenly.',
          notes: [
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['f/4'], duration: 'q', finger: [4] },
            { keys: ['g/4'], duration: 'q', finger: [5] },
            { keys: ['f/4'], duration: 'q', finger: [4] },
            { keys: ['g/4'], duration: 'q', finger: [5] },
            { keys: ['f/4'], duration: 'q', finger: [4] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['f/4'], duration: 'q', finger: [4] },
            { keys: ['g/4'], duration: 'h', finger: [5] },
            { keys: ['c/4'], duration: 'h', finger: [1] },
          ],
          clef: 'treble',
          bpm: 72,
          timeSignature: [4, 4],
          fingerNumbers: { 'C4': 1, 'E4': 3, 'F4': 4, 'G4': 5 },
          handsRequired: 'right',
          requireTiming: false,
        },
      ],
    },
    {
      id: '3.2',
      title: 'Left Hand C Position',
      steps: [
        {
          type: 'instruction',
          title: 'Matching the Left Hand',
          content: `
            <p>Now let's set up your <strong>left hand</strong> in C position. You briefly tried this in Module 2, but now we'll practice it more thoroughly.</p>
            <p>Place your left hand so that:</p>
            <ul>
              <li><strong>Pinky (5)</strong> on <strong>C3</strong> (the C below Middle C)</li>
              <li><strong>Ring (4)</strong> on <strong>D3</strong></li>
              <li><strong>Middle (3)</strong> on <strong>E3</strong></li>
              <li><strong>Index (2)</strong> on <strong>F3</strong></li>
              <li><strong>Thumb (1)</strong> on <strong>G3</strong></li>
            </ul>
            <p>Notice that the left hand is a mirror image of the right hand. The thumb (1) is closest to the center of the keyboard for both hands, and the pinky (5) is on the outside.</p>
            <p>Left hand notes are written on the <strong>bass clef</strong> (the lower staff).</p>
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
          type: 'demo',
          title: 'Hear the Left Hand C Position',
          description: 'Listen to all five notes in the left hand C position, ascending and descending.',
          notes: [
            { keys: ['c/3'], duration: 'q', finger: [5] },
            { keys: ['d/3'], duration: 'q', finger: [4] },
            { keys: ['e/3'], duration: 'q', finger: [3] },
            { keys: ['f/3'], duration: 'q', finger: [2] },
            { keys: ['g/3'], duration: 'q', finger: [1] },
            { keys: ['f/3'], duration: 'q', finger: [2] },
            { keys: ['e/3'], duration: 'q', finger: [3] },
            { keys: ['d/3'], duration: 'q', finger: [4] },
            { keys: ['c/3'], duration: 'w', finger: [5] },
          ],
          bpm: 80,
          timeSignature: [4, 4],
          clef: 'bass',
        },
        {
          type: 'exercise',
          title: 'Left Hand Five-Finger Climb',
          instructions: 'Play C-D-E-F-G ascending and then G-F-E-D-C descending with your left hand. Remember: pinky (5) starts on C3 and thumb (1) is on G3.',
          notes: [
            { keys: ['c/3'], duration: 'q', finger: [5] },
            { keys: ['d/3'], duration: 'q', finger: [4] },
            { keys: ['e/3'], duration: 'q', finger: [3] },
            { keys: ['f/3'], duration: 'q', finger: [2] },
            { keys: ['g/3'], duration: 'h', finger: [1] },
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
        {
          type: 'exercise',
          title: 'Left Hand Pattern Practice',
          instructions: 'Play this short left hand pattern. It mixes steps and repeated notes to build coordination.',
          notes: [
            { keys: ['c/3'], duration: 'q', finger: [5] },
            { keys: ['c/3'], duration: 'q', finger: [5] },
            { keys: ['d/3'], duration: 'q', finger: [4] },
            { keys: ['e/3'], duration: 'q', finger: [3] },
            { keys: ['f/3'], duration: 'q', finger: [2] },
            { keys: ['f/3'], duration: 'q', finger: [2] },
            { keys: ['g/3'], duration: 'q', finger: [1] },
            { keys: ['g/3'], duration: 'q', finger: [1] },
            { keys: ['f/3'], duration: 'q', finger: [2] },
            { keys: ['e/3'], duration: 'q', finger: [3] },
            { keys: ['d/3'], duration: 'q', finger: [4] },
            { keys: ['c/3'], duration: 'w', finger: [5] },
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
      id: '3.3',
      title: 'Understanding 4/4 Time',
      steps: [
        {
          type: 'instruction',
          title: 'What is a Time Signature?',
          content: `
            <p>At the beginning of every piece of music, you'll see two numbers stacked on top of each other. This is the <strong>time signature</strong>.</p>
            <p>The most common time signature is <strong>4/4</strong>. Here's what each number means:</p>
            <ul>
              <li><strong>Top number (4):</strong> There are <strong>4 beats</strong> in each measure</li>
              <li><strong>Bottom number (4):</strong> A <strong>quarter note</strong> gets one beat</li>
            </ul>
            <p>A <strong>measure</strong> (also called a bar) is a group of beats. In 4/4 time, you count <strong>"1 - 2 - 3 - 4"</strong> for each measure, then start over at 1.</p>
            <p>4/4 time is so common that it's sometimes called <strong>"common time."</strong> Almost all pop, rock, and most classical music uses 4/4 time.</p>
          `,
        },
        {
          type: 'instruction',
          title: 'How Notes Fill a Measure',
          content: `
            <p>In 4/4 time, every measure must add up to exactly <strong>4 beats</strong>. Here are some ways to fill one measure:</p>
            <ul>
              <li><strong>1 whole note</strong> = 4 beats (fills the entire measure)</li>
              <li><strong>2 half notes</strong> = 2 + 2 = 4 beats</li>
              <li><strong>4 quarter notes</strong> = 1 + 1 + 1 + 1 = 4 beats</li>
              <li><strong>1 half note + 2 quarter notes</strong> = 2 + 1 + 1 = 4 beats</li>
            </ul>
            <p>You can mix and match note values in any order, as long as the total adds up to 4 beats per measure.</p>
          `,
        },
        {
          type: 'demo',
          title: 'Counting in 4/4',
          description: 'Listen to this example. Count "1-2-3-4" along with each measure. The first measure has 4 quarter notes, the second has 2 half notes, and the third is one whole note.',
          notes: [
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['f/4'], duration: 'q', finger: [4] },
            { keys: ['g/4'], duration: 'h', finger: [5] },
            { keys: ['e/4'], duration: 'h', finger: [3] },
            { keys: ['c/4'], duration: 'w', finger: [1] },
          ],
          bpm: 80,
          timeSignature: [4, 4],
          clef: 'treble',
        },
        {
          type: 'exercise',
          title: 'Fill the Measures',
          instructions: 'Play this exercise that uses different note lengths. The first measure has 4 quarter notes, the second has 2 half notes, the third has a mix. Try to count "1-2-3-4" in your head for each measure.',
          notes: [
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['f/4'], duration: 'q', finger: [4] },
            { keys: ['g/4'], duration: 'h', finger: [5] },
            { keys: ['e/4'], duration: 'h', finger: [3] },
            { keys: ['f/4'], duration: 'q', finger: [4] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['d/4'], duration: 'h', finger: [2] },
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
    {
      id: '3.4',
      title: 'Quarter Rests',
      steps: [
        {
          type: 'instruction',
          title: 'Silence in Music: Rests',
          content: `
            <p>Music isn't just about sound — <strong>silence</strong> is just as important! A <strong>rest</strong> tells you to be silent for a specific number of beats.</p>
            <p>Just as there are different note lengths, there are matching rest lengths:</p>
            <ul>
              <li><strong>Quarter rest</strong> = 1 beat of silence</li>
              <li><strong>Half rest</strong> = 2 beats of silence</li>
              <li><strong>Whole rest</strong> = 4 beats of silence (a full measure)</li>
            </ul>
            <p>When you see a rest, <strong>lift your fingers off the keys</strong> and count the beats silently. Rests give music breathing room and shape.</p>
            <p>For now, we'll focus on the <strong>quarter rest</strong>, which lasts for one beat.</p>
          `,
        },
        {
          type: 'demo',
          title: 'Hear the Rests',
          description: 'Listen carefully to this example. The quarter rests create gaps in the melody. Count "1-2-3-4" and notice where the silence falls.',
          notes: [
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['b/4'], duration: 'qr', rest: true },
            { keys: ['f/4'], duration: 'q', finger: [4] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['b/4'], duration: 'qr', rest: true },
            { keys: ['c/4'], duration: 'w', finger: [1] },
          ],
          bpm: 80,
          timeSignature: [4, 4],
          clef: 'treble',
        },
        {
          type: 'exercise',
          title: 'Playing with Quarter Rests',
          instructions: 'Play this exercise with quarter rests. When you see a rest, lift your finger and stay silent for one beat. The rests are marked in the notation — just skip those beats.',
          notes: [
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['b/4'], duration: 'qr', rest: true },
            { keys: ['f/4'], duration: 'q', finger: [4] },
            { keys: ['g/4'], duration: 'q', finger: [5] },
            { keys: ['b/4'], duration: 'qr', rest: true },
            { keys: ['g/4'], duration: 'q', finger: [5] },
            { keys: ['f/4'], duration: 'q', finger: [4] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['b/4'], duration: 'qr', rest: true },
            { keys: ['c/4'], duration: 'w', finger: [1] },
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
          title: 'Call and Response with Rests',
          instructions: 'This exercise uses a "call and response" pattern. You play two notes, rest, then two more notes, rest. It builds your sense of phrasing.',
          notes: [
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['b/4'], duration: 'qr', rest: true },
            { keys: ['b/4'], duration: 'qr', rest: true },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['f/4'], duration: 'q', finger: [4] },
            { keys: ['b/4'], duration: 'qr', rest: true },
            { keys: ['b/4'], duration: 'qr', rest: true },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['g/4'], duration: 'q', finger: [5] },
            { keys: ['b/4'], duration: 'qr', rest: true },
            { keys: ['b/4'], duration: 'qr', rest: true },
            { keys: ['c/4'], duration: 'w', finger: [1] },
          ],
          clef: 'treble',
          bpm: 76,
          timeSignature: [4, 4],
          fingerNumbers: { 'C4': 1, 'D4': 2, 'E4': 3, 'F4': 4, 'G4': 5 },
          handsRequired: 'right',
          requireTiming: false,
        },
      ],
    },
    {
      id: '3.5',
      title: 'Hands Together',
      steps: [
        {
          type: 'instruction',
          title: 'Playing with Both Hands',
          content: `
            <p>Until now, you've been playing with one hand at a time. Now it's time for an exciting step: playing with <strong>both hands together</strong>!</p>
            <p>We'll start simple. Both hands will play the <strong>same notes at the same time</strong>, one octave apart:</p>
            <ul>
              <li><strong>Right hand:</strong> C position starting at Middle C (C4)</li>
              <li><strong>Left hand:</strong> C position starting at C3 (one octave lower)</li>
            </ul>
            <p>The key to hands-together playing is to start <strong>very slowly</strong>. Your brain needs time to coordinate both hands. It might feel awkward at first — that's completely normal.</p>
            <p>Tips for success:</p>
            <ul>
              <li>Start extremely slowly — half the speed you think you need</li>
              <li>Make sure both notes sound at exactly the same time</li>
              <li>If it's too hard, practice each hand separately first</li>
            </ul>
          `,
          diagram: 'keyboard-highlight',
          diagramData: {
            highlightNotes: ['C3', 'D3', 'E3', 'F3', 'G3', 'C4', 'D4', 'E4', 'F4', 'G4'],
            viewportStart: 'C3',
            viewportEnd: 'C6',
            fingerNumbers: { 'C3': 5, 'D3': 4, 'E3': 3, 'F3': 2, 'G3': 1, 'C4': 1, 'D4': 2, 'E4': 3, 'F4': 4, 'G4': 5 },
          },
        },
        {
          type: 'exercise',
          title: 'Both Hands: C-D-E Together',
          instructions: 'Play C, D, and E with both hands at the same time. Right hand plays C4-D4-E4 (fingers 1-2-3), left hand plays C3-D3-E3 (fingers 5-4-3). Go very slowly and focus on both notes sounding together.',
          notes: [
            { keys: ['c/3', 'c/4'], duration: 'w', finger: [5, 1] },
            { keys: ['d/3', 'd/4'], duration: 'w', finger: [4, 2] },
            { keys: ['e/3', 'e/4'], duration: 'w', finger: [3, 3] },
            { keys: ['d/3', 'd/4'], duration: 'w', finger: [4, 2] },
            { keys: ['c/3', 'c/4'], duration: 'w', finger: [5, 1] },
          ],
          clef: 'grand',
          bpm: 72,
          timeSignature: [4, 4],
          fingerNumbers: { 'C3': 5, 'D3': 4, 'E3': 3, 'C4': 1, 'D4': 2, 'E4': 3 },
          handsRequired: 'both',
          requireTiming: false,
        },
        {
          type: 'exercise',
          title: 'Both Hands: Full Five-Finger Pattern',
          instructions: 'Now play all five notes with both hands together. Right hand C4-D4-E4-F4-G4 and left hand C3-D3-E3-F3-G3, ascending then descending. Take your time!',
          notes: [
            { keys: ['c/3', 'c/4'], duration: 'h', finger: [5, 1] },
            { keys: ['d/3', 'd/4'], duration: 'h', finger: [4, 2] },
            { keys: ['e/3', 'e/4'], duration: 'h', finger: [3, 3] },
            { keys: ['f/3', 'f/4'], duration: 'h', finger: [2, 4] },
            { keys: ['g/3', 'g/4'], duration: 'w', finger: [1, 5] },
            { keys: ['f/3', 'f/4'], duration: 'h', finger: [2, 4] },
            { keys: ['e/3', 'e/4'], duration: 'h', finger: [3, 3] },
            { keys: ['d/3', 'd/4'], duration: 'h', finger: [4, 2] },
            { keys: ['c/3', 'c/4'], duration: 'w', finger: [5, 1] },
          ],
          clef: 'grand',
          bpm: 72,
          timeSignature: [4, 4],
          fingerNumbers: { 'C3': 5, 'D3': 4, 'E3': 3, 'F3': 2, 'G3': 1, 'C4': 1, 'D4': 2, 'E4': 3, 'F4': 4, 'G4': 5 },
          handsRequired: 'both',
          requireTiming: false,
        },
      ],
    },
    {
      id: '3.6',
      title: 'Twinkle Twinkle Little Star',
      steps: [
        {
          type: 'instruction',
          title: 'A Melody Everyone Knows',
          content: `
            <p><strong>Twinkle Twinkle Little Star</strong> is one of the most famous melodies in the world. It was used by Mozart in a set of piano variations, and it uses all five notes in C position!</p>
            <p>The melody uses notes <strong>C, D, E, F, and G</strong>. Here's the pattern:</p>
            <ul>
              <li><strong>Line 1:</strong> C C G G A A G (hold)</li>
              <li><strong>Line 2:</strong> F F E E D D C (hold)</li>
              <li><strong>Line 3:</strong> G G F F E E D (hold)</li>
              <li><strong>Line 4:</strong> G G F F E E D (hold)</li>
              <li><strong>Line 5:</strong> C C G G A A G (hold)</li>
              <li><strong>Line 6:</strong> F F E E D D C (hold)</li>
            </ul>
            <p><strong>Wait — there's an A in there!</strong> You're right. The note A is just above G. For this song, you'll briefly stretch your pinky up to A, or you can play G and A with fingers 4 and 5. We'll keep it simple and use finger 5 for both G and A.</p>
          `,
          diagram: 'keyboard-highlight',
          diagramData: {
            highlightNotes: ['C4', 'D4', 'E4', 'F4', 'G4', 'A4'],
            viewportStart: 'C3',
            viewportEnd: 'C6',
            fingerNumbers: { 'C4': 1, 'D4': 2, 'E4': 3, 'F4': 4, 'G4': 5, 'A4': 5 },
          },
        },
        {
          type: 'demo',
          title: 'Hear Twinkle Twinkle Little Star',
          description: 'Listen to the full melody. Follow along and notice the pattern — the first and last lines are the same, and the two middle lines are the same.',
          notes: [
            // Line 1: C C G G A A G(half)
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['g/4'], duration: 'q', finger: [5] },
            { keys: ['g/4'], duration: 'q', finger: [5] },
            { keys: ['a/4'], duration: 'q', finger: [5] },
            { keys: ['a/4'], duration: 'q', finger: [5] },
            { keys: ['g/4'], duration: 'h', finger: [5] },
            // Line 2: F F E E D D C(half)
            { keys: ['f/4'], duration: 'q', finger: [4] },
            { keys: ['f/4'], duration: 'q', finger: [4] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['c/4'], duration: 'h', finger: [1] },
            // Line 3: G G F F E E D(half)
            { keys: ['g/4'], duration: 'q', finger: [5] },
            { keys: ['g/4'], duration: 'q', finger: [5] },
            { keys: ['f/4'], duration: 'q', finger: [4] },
            { keys: ['f/4'], duration: 'q', finger: [4] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['d/4'], duration: 'h', finger: [2] },
            // Line 4: G G F F E E D(half)
            { keys: ['g/4'], duration: 'q', finger: [5] },
            { keys: ['g/4'], duration: 'q', finger: [5] },
            { keys: ['f/4'], duration: 'q', finger: [4] },
            { keys: ['f/4'], duration: 'q', finger: [4] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['d/4'], duration: 'h', finger: [2] },
            // Line 5: C C G G A A G(half)
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['g/4'], duration: 'q', finger: [5] },
            { keys: ['g/4'], duration: 'q', finger: [5] },
            { keys: ['a/4'], duration: 'q', finger: [5] },
            { keys: ['a/4'], duration: 'q', finger: [5] },
            { keys: ['g/4'], duration: 'h', finger: [5] },
            // Line 6: F F E E D D C(whole)
            { keys: ['f/4'], duration: 'q', finger: [4] },
            { keys: ['f/4'], duration: 'q', finger: [4] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['c/4'], duration: 'w', finger: [1] },
          ],
          bpm: 96,
          timeSignature: [4, 4],
          clef: 'treble',
        },
        {
          type: 'exercise',
          title: 'Twinkle Twinkle (First Half)',
          instructions: 'Let\'s learn the first half of the song (lines 1-2). Play: C C G G A A G (hold), F F E E D D C (hold). Use finger 5 for both G and A.',
          notes: [
            // Line 1
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['g/4'], duration: 'q', finger: [5] },
            { keys: ['g/4'], duration: 'q', finger: [5] },
            { keys: ['a/4'], duration: 'q', finger: [5] },
            { keys: ['a/4'], duration: 'q', finger: [5] },
            { keys: ['g/4'], duration: 'h', finger: [5] },
            // Line 2
            { keys: ['f/4'], duration: 'q', finger: [4] },
            { keys: ['f/4'], duration: 'q', finger: [4] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['c/4'], duration: 'h', finger: [1] },
          ],
          clef: 'treble',
          bpm: 88,
          timeSignature: [4, 4],
          fingerNumbers: { 'C4': 1, 'D4': 2, 'E4': 3, 'F4': 4, 'G4': 5, 'A4': 5 },
          handsRequired: 'right',
          requireTiming: false,
        },
        {
          type: 'exercise',
          title: 'Twinkle Twinkle (Full Song)',
          instructions: 'Now play the complete melody! Remember the structure: lines 1-2 are the opening, lines 3-4 are the middle section (same pattern repeated), and lines 5-6 repeat the opening. The last note is a whole note — hold it for 4 full beats.',
          notes: [
            // Line 1: C C G G A A G(half)
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['g/4'], duration: 'q', finger: [5] },
            { keys: ['g/4'], duration: 'q', finger: [5] },
            { keys: ['a/4'], duration: 'q', finger: [5] },
            { keys: ['a/4'], duration: 'q', finger: [5] },
            { keys: ['g/4'], duration: 'h', finger: [5] },
            // Line 2: F F E E D D C(half)
            { keys: ['f/4'], duration: 'q', finger: [4] },
            { keys: ['f/4'], duration: 'q', finger: [4] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['c/4'], duration: 'h', finger: [1] },
            // Line 3: G G F F E E D(half)
            { keys: ['g/4'], duration: 'q', finger: [5] },
            { keys: ['g/4'], duration: 'q', finger: [5] },
            { keys: ['f/4'], duration: 'q', finger: [4] },
            { keys: ['f/4'], duration: 'q', finger: [4] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['d/4'], duration: 'h', finger: [2] },
            // Line 4: G G F F E E D(half)
            { keys: ['g/4'], duration: 'q', finger: [5] },
            { keys: ['g/4'], duration: 'q', finger: [5] },
            { keys: ['f/4'], duration: 'q', finger: [4] },
            { keys: ['f/4'], duration: 'q', finger: [4] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['d/4'], duration: 'h', finger: [2] },
            // Line 5: C C G G A A G(half)
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['g/4'], duration: 'q', finger: [5] },
            { keys: ['g/4'], duration: 'q', finger: [5] },
            { keys: ['a/4'], duration: 'q', finger: [5] },
            { keys: ['a/4'], duration: 'q', finger: [5] },
            { keys: ['g/4'], duration: 'h', finger: [5] },
            // Line 6: F F E E D D C(whole)
            { keys: ['f/4'], duration: 'q', finger: [4] },
            { keys: ['f/4'], duration: 'q', finger: [4] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['c/4'], duration: 'w', finger: [1] },
          ],
          clef: 'treble',
          bpm: 96,
          timeSignature: [4, 4],
          fingerNumbers: { 'C4': 1, 'D4': 2, 'E4': 3, 'F4': 4, 'G4': 5, 'A4': 5 },
          handsRequired: 'right',
          requireTiming: false,
        },
      ],
    },
    {
      id: '3.7',
      title: 'Ode to Joy',
      steps: [
        {
          type: 'instruction',
          title: 'Beethoven\'s Famous Theme',
          content: `
            <p><strong>Ode to Joy</strong> is one of the most recognizable melodies in all of classical music. It was written by <strong>Ludwig van Beethoven</strong> as part of his Ninth Symphony.</p>
            <p>The good news? This melody fits perfectly in our C position, using just the notes <strong>C, D, E, F, and G</strong>.</p>
            <p>The melody pattern:</p>
            <ul>
              <li><strong>Line 1:</strong> E E F G | G F E D</li>
              <li><strong>Line 2:</strong> C C D E | E D D (hold)</li>
              <li><strong>Line 3:</strong> E E F G | G F E D</li>
              <li><strong>Line 4:</strong> C C D E | D C C (hold)</li>
            </ul>
            <p>Notice that lines 1 and 3 are identical. Lines 2 and 4 are almost the same, but the ending is different. Pay attention to that difference!</p>
          `,
        },
        {
          type: 'demo',
          title: 'Hear Ode to Joy',
          description: 'Listen to the full melody. Pay attention to how lines 2 and 4 end differently.',
          notes: [
            // Line 1: E E F G | G F E D
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['f/4'], duration: 'q', finger: [4] },
            { keys: ['g/4'], duration: 'q', finger: [5] },
            { keys: ['g/4'], duration: 'q', finger: [5] },
            { keys: ['f/4'], duration: 'q', finger: [4] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            // Line 2: C C D E | E D D(half)
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['d/4'], duration: 'h', finger: [2] },
            // Line 3: E E F G | G F E D
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['f/4'], duration: 'q', finger: [4] },
            { keys: ['g/4'], duration: 'q', finger: [5] },
            { keys: ['g/4'], duration: 'q', finger: [5] },
            { keys: ['f/4'], duration: 'q', finger: [4] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            // Line 4: C C D E | D C C(half)
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['c/4'], duration: 'h', finger: [1] },
          ],
          bpm: 96,
          timeSignature: [4, 4],
          clef: 'treble',
        },
        {
          type: 'exercise',
          title: 'Ode to Joy (First Half)',
          instructions: 'Learn the first half (lines 1-2): E E F G, G F E D, C C D E, E D D (hold). Notice how it climbs up and then comes back down.',
          notes: [
            // Line 1: E E F G | G F E D
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['f/4'], duration: 'q', finger: [4] },
            { keys: ['g/4'], duration: 'q', finger: [5] },
            { keys: ['g/4'], duration: 'q', finger: [5] },
            { keys: ['f/4'], duration: 'q', finger: [4] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            // Line 2: C C D E | E D D(half)
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['d/4'], duration: 'h', finger: [2] },
          ],
          clef: 'treble',
          bpm: 88,
          timeSignature: [4, 4],
          fingerNumbers: { 'C4': 1, 'D4': 2, 'E4': 3, 'F4': 4, 'G4': 5 },
          handsRequired: 'right',
          requireTiming: false,
        },
        {
          type: 'exercise',
          title: 'Ode to Joy (Full Melody)',
          instructions: 'Now play the complete Ode to Joy! Lines 1 and 3 are identical. The tricky part is the ending: line 2 ends on D (hold), but line 4 ends on C (hold). Pay close attention to that difference.',
          notes: [
            // Line 1: E E F G | G F E D
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['f/4'], duration: 'q', finger: [4] },
            { keys: ['g/4'], duration: 'q', finger: [5] },
            { keys: ['g/4'], duration: 'q', finger: [5] },
            { keys: ['f/4'], duration: 'q', finger: [4] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            // Line 2: C C D E | E D D(half)
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['d/4'], duration: 'h', finger: [2] },
            // Line 3: E E F G | G F E D
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['f/4'], duration: 'q', finger: [4] },
            { keys: ['g/4'], duration: 'q', finger: [5] },
            { keys: ['g/4'], duration: 'q', finger: [5] },
            { keys: ['f/4'], duration: 'q', finger: [4] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            // Line 4: C C D E | D C C(half)
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['c/4'], duration: 'h', finger: [1] },
          ],
          clef: 'treble',
          bpm: 96,
          timeSignature: [4, 4],
          fingerNumbers: { 'C4': 1, 'D4': 2, 'E4': 3, 'F4': 4, 'G4': 5 },
          handsRequired: 'right',
          requireTiming: false,
        },
      ],
    },
    {
      id: '3.8',
      title: 'Module 3 Review',
      steps: [
        {
          type: 'instruction',
          title: 'What You\'ve Accomplished',
          content: `
            <p>Fantastic work! You've made huge progress in this module. Let's review everything you learned:</p>
            <ul>
              <li><strong>Full C position</strong> with all five fingers (C-D-E-F-G) in both hands</li>
              <li><strong>4/4 time signature:</strong> 4 beats per measure, quarter note gets one beat</li>
              <li><strong>Quarter rests:</strong> one beat of silence</li>
              <li><strong>Hands-together playing:</strong> both hands playing the same notes in unison</li>
              <li><strong>Twinkle Twinkle Little Star:</strong> a complete, recognizable melody</li>
              <li><strong>Ode to Joy:</strong> Beethoven's famous theme using just five notes</li>
            </ul>
            <p>You can now play two real songs! Keep practicing them until they feel smooth and natural. In the next module, you'll learn to <strong>read music notation</strong> on the staff.</p>
          `,
        },
        {
          type: 'exercise',
          title: 'Review: Five-Finger Patterns',
          instructions: 'Play this review exercise that tests your five-finger coordination. It includes ascending runs, descending runs, and some skips between notes.',
          notes: [
            // Ascending run
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['f/4'], duration: 'q', finger: [4] },
            { keys: ['g/4'], duration: 'h', finger: [5] },
            // Skip pattern
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['g/4'], duration: 'q', finger: [5] },
            // Descending run
            { keys: ['f/4'], duration: 'q', finger: [4] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['c/4'], duration: 'q', finger: [1] },
            // Skip pattern
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['g/4'], duration: 'q', finger: [5] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['c/4'], duration: 'h', finger: [1] },
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
          title: 'Review: Left Hand Confidence',
          instructions: 'Don\'t forget your left hand! Play this pattern in the left hand C position. Pinky (5) on C3, thumb (1) on G3.',
          notes: [
            { keys: ['c/3'], duration: 'q', finger: [5] },
            { keys: ['d/3'], duration: 'q', finger: [4] },
            { keys: ['e/3'], duration: 'q', finger: [3] },
            { keys: ['f/3'], duration: 'q', finger: [2] },
            { keys: ['g/3'], duration: 'h', finger: [1] },
            { keys: ['e/3'], duration: 'q', finger: [3] },
            { keys: ['c/3'], duration: 'q', finger: [5] },
            { keys: ['f/3'], duration: 'q', finger: [2] },
            { keys: ['d/3'], duration: 'q', finger: [4] },
            { keys: ['g/3'], duration: 'q', finger: [1] },
            { keys: ['e/3'], duration: 'q', finger: [3] },
            { keys: ['d/3'], duration: 'q', finger: [4] },
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
          type: 'exercise',
          title: 'Review: Hands Together',
          instructions: 'Finish the module with a hands-together exercise. Both hands play the same pattern one octave apart. Go slowly and make sure both hands sound together.',
          notes: [
            { keys: ['c/3', 'c/4'], duration: 'q', finger: [5, 1] },
            { keys: ['d/3', 'd/4'], duration: 'q', finger: [4, 2] },
            { keys: ['e/3', 'e/4'], duration: 'q', finger: [3, 3] },
            { keys: ['f/3', 'f/4'], duration: 'q', finger: [2, 4] },
            { keys: ['g/3', 'g/4'], duration: 'h', finger: [1, 5] },
            { keys: ['e/3', 'e/4'], duration: 'h', finger: [3, 3] },
            { keys: ['f/3', 'f/4'], duration: 'q', finger: [2, 4] },
            { keys: ['e/3', 'e/4'], duration: 'q', finger: [3, 3] },
            { keys: ['d/3', 'd/4'], duration: 'q', finger: [4, 2] },
            { keys: ['c/3', 'c/4'], duration: 'q', finger: [5, 1] },
            { keys: ['d/3', 'd/4'], duration: 'q', finger: [4, 2] },
            { keys: ['e/3', 'e/4'], duration: 'q', finger: [3, 3] },
            { keys: ['c/3', 'c/4'], duration: 'h', finger: [5, 1] },
            { keys: ['c/3', 'c/4'], duration: 'w', finger: [5, 1] },
          ],
          clef: 'grand',
          bpm: 76,
          timeSignature: [4, 4],
          fingerNumbers: { 'C3': 5, 'D3': 4, 'E3': 3, 'F3': 2, 'G3': 1, 'C4': 1, 'D4': 2, 'E4': 3, 'F4': 4, 'G4': 5 },
          handsRequired: 'both',
          requireTiming: false,
        },
      ],
    },
  ],
};

export default module03;
