import type { Module } from '../types';

const module08: Module = {
  id: 8,
  title: 'Musicianship',
  description: 'Dotted notes, dynamics, tempo, phrasing, and minor keys',
  lessons: [
    {
      id: '8.1',
      title: 'Dotted Half Notes',
      steps: [
        {
          type: 'instruction',
          title: 'What Does a Dot Do?',
          content: `
            <p>A <strong>dot</strong> placed after a note increases its duration by <strong>half of its original value</strong>.</p>
            <p>For a half note:</p>
            <ul>
              <li>A half note = <strong>2 beats</strong></li>
              <li>Half of 2 beats = <strong>1 beat</strong></li>
              <li>Dotted half note = 2 + 1 = <strong>3 beats</strong></li>
            </ul>
            <p>Dotted half notes are very common in <strong>3/4 time</strong> (waltz time), where they fill an entire measure. You'll also see them in 4/4 time followed by a quarter note to complete the measure.</p>
          `,
        },
        {
          type: 'demo',
          title: 'Hear Dotted Half Notes',
          description: 'Listen to a dotted half note (3 beats) followed by a quarter note (1 beat), repeated twice. Notice how the first note is held longer.',
          notes: [
            { keys: ['c/4'], duration: 'hd', finger: [1] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['e/4'], duration: 'hd', finger: [3] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
          ],
          bpm: 80,
          timeSignature: [4, 4],
          clef: 'treble',
        },
        {
          type: 'exercise',
          title: 'Play Dotted Half Notes',
          instructions: 'Play each dotted half note for 3 beats, then a quarter note for 1 beat. Count "1-2-3-4" where the dotted half lasts for beats 1-2-3 and the quarter note is on beat 4.',
          notes: [
            { keys: ['c/4'], duration: 'hd', finger: [1] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['e/4'], duration: 'hd', finger: [3] },
            { keys: ['f/4'], duration: 'q', finger: [4] },
            { keys: ['g/4'], duration: 'hd', finger: [5] },
            { keys: ['f/4'], duration: 'q', finger: [4] },
            { keys: ['e/4'], duration: 'hd', finger: [3] },
            { keys: ['c/4'], duration: 'q', finger: [1] },
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
      id: '8.2',
      title: 'Dotted Quarter Notes',
      steps: [
        {
          type: 'instruction',
          title: 'Dotted Quarter Notes',
          content: `
            <p>The same dot rule applies to quarter notes:</p>
            <ul>
              <li>A quarter note = <strong>1 beat</strong></li>
              <li>Half of 1 beat = <strong>0.5 beats</strong> (an eighth note)</li>
              <li>Dotted quarter note = 1 + 0.5 = <strong>1.5 beats</strong></li>
            </ul>
            <p>Dotted quarter notes are usually followed by an <strong>eighth note</strong>, creating a distinctive <strong>long-short</strong> rhythmic pattern. This rhythm appears constantly in folk songs, hymns, and popular music.</p>
            <p>Think of the rhythm of "Hum-pty Dump-ty" — that long-short feel is often written as a dotted quarter followed by an eighth note.</p>
          `,
        },
        {
          type: 'demo',
          title: 'Hear Dotted Quarter Notes',
          description: 'Listen to the long-short pattern of dotted quarter + eighth note pairs.',
          notes: [
            { keys: ['c/4'], duration: 'qd', finger: [1] },
            { keys: ['d/4'], duration: '8', finger: [2] },
            { keys: ['e/4'], duration: 'qd', finger: [3] },
            { keys: ['f/4'], duration: '8', finger: [4] },
            { keys: ['g/4'], duration: 'qd', finger: [5] },
            { keys: ['f/4'], duration: '8', finger: [4] },
            { keys: ['e/4'], duration: 'h', finger: [3] },
          ],
          bpm: 80,
          timeSignature: [4, 4],
          clef: 'treble',
        },
        {
          type: 'exercise',
          title: 'Dotted Quarter Practice',
          instructions: 'Play the dotted quarter + eighth note pattern. The dotted quarter is held for 1.5 beats and the eighth note gets 0.5 beats. Feel the "long-short" swing.',
          notes: [
            { keys: ['c/4'], duration: 'qd', finger: [1] },
            { keys: ['d/4'], duration: '8', finger: [2] },
            { keys: ['e/4'], duration: 'qd', finger: [3] },
            { keys: ['d/4'], duration: '8', finger: [2] },
            { keys: ['c/4'], duration: 'qd', finger: [1] },
            { keys: ['e/4'], duration: '8', finger: [3] },
            { keys: ['g/4'], duration: 'h', finger: [5] },
            { keys: ['g/4'], duration: 'qd', finger: [5] },
            { keys: ['f/4'], duration: '8', finger: [4] },
            { keys: ['e/4'], duration: 'qd', finger: [3] },
            { keys: ['d/4'], duration: '8', finger: [2] },
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
      id: '8.3',
      title: 'Intervals: Sixths',
      steps: [
        {
          type: 'instruction',
          title: 'What is a Sixth?',
          content: `
            <p>An <strong>interval</strong> is the distance between two notes. You already know some intervals:</p>
            <ul>
              <li><strong>Second</strong> — two adjacent notes (C to D)</li>
              <li><strong>Third</strong> — skip one note (C to E)</li>
              <li><strong>Fifth</strong> — skip three notes (C to G)</li>
            </ul>
            <p>A <strong>sixth</strong> spans six letter names. For example:</p>
            <ul>
              <li>C up to A = a sixth (C-D-E-F-G-A)</li>
              <li>D up to B = a sixth</li>
              <li>E up to C = a sixth</li>
            </ul>
            <p>Sixths have a warm, rich sound. They are one of the most pleasing intervals to the ear and are used frequently in melodies and harmonies.</p>
          `,
        },
        {
          type: 'demo',
          title: 'Hear Sixths',
          description: 'Listen to several sixths played melodically (one note after the other) and then harmonically (both notes together).',
          notes: [
            { keys: ['c/4'], duration: 'h', finger: [1] },
            { keys: ['a/4'], duration: 'h', finger: [5] },
            { keys: ['d/4'], duration: 'h', finger: [1] },
            { keys: ['b/4'], duration: 'h', finger: [5] },
            { keys: ['c/4', 'a/4'], duration: 'w', finger: [1, 5] },
            { keys: ['d/4', 'b/4'], duration: 'w', finger: [1, 5] },
          ],
          bpm: 72,
          timeSignature: [4, 4],
          clef: 'treble',
        },
        {
          type: 'exercise',
          title: 'Play Sixths',
          instructions: 'Play these sixths melodically: first the lower note, then the upper note. C to A, D to B, E to C. Use thumb (1) for the lower note and pinky (5) for the upper note.',
          notes: [
            { keys: ['c/4'], duration: 'h', finger: [1] },
            { keys: ['a/4'], duration: 'h', finger: [5] },
            { keys: ['d/4'], duration: 'h', finger: [1] },
            { keys: ['b/4'], duration: 'h', finger: [5] },
            { keys: ['e/4'], duration: 'h', finger: [1] },
            { keys: ['c/5'], duration: 'h', finger: [5] },
            { keys: ['c/4', 'a/4'], duration: 'w', finger: [1, 5] },
          ],
          clef: 'treble',
          bpm: 72,
          timeSignature: [4, 4],
          fingerNumbers: { 'C4': 1, 'A4': 5, 'D4': 1, 'B4': 5, 'E4': 1, 'C5': 5 },
          handsRequired: 'right',
          requireTiming: false,
        },
      ],
    },
    {
      id: '8.4',
      title: 'Intervals: Sevenths and Octaves',
      steps: [
        {
          type: 'instruction',
          title: 'Sevenths',
          content: `
            <p>A <strong>seventh</strong> spans seven letter names. For example:</p>
            <ul>
              <li>C up to B = a seventh (C-D-E-F-G-A-B)</li>
              <li>D up to C = a seventh</li>
            </ul>
            <p>Sevenths sound <strong>tense and dissonant</strong> — like they want to resolve. They are a key ingredient in jazz chords and create beautiful tension in classical music.</p>
          `,
        },
        {
          type: 'instruction',
          title: 'Octaves',
          content: `
            <p>An <strong>octave</strong> spans eight letter names — from one note to the next note with the same name:</p>
            <ul>
              <li>C4 up to C5 = an octave</li>
              <li>D4 up to D5 = an octave</li>
            </ul>
            <p>Octaves sound like the <strong>same note, just higher or lower</strong>. They create a bold, full sound when played together. Many pianists use octaves to add power to a melody.</p>
            <p>Playing octaves requires a wide hand stretch — thumb (1) on the lower note and pinky (5) on the upper note.</p>
          `,
        },
        {
          type: 'demo',
          title: 'Hear Sevenths and Octaves',
          description: 'Listen to a seventh (C to B) followed by an octave (C to C). Notice how the seventh sounds tense while the octave sounds resolved.',
          notes: [
            { keys: ['c/4'], duration: 'h', finger: [1] },
            { keys: ['b/4'], duration: 'h', finger: [5] },
            { keys: ['c/4', 'b/4'], duration: 'w', finger: [1, 5] },
            { keys: ['c/4'], duration: 'h', finger: [1] },
            { keys: ['c/5'], duration: 'h', finger: [5] },
            { keys: ['c/4', 'c/5'], duration: 'w', finger: [1, 5] },
          ],
          bpm: 72,
          timeSignature: [4, 4],
          clef: 'treble',
        },
        {
          type: 'exercise',
          title: 'Play Sevenths and Octaves',
          instructions: 'Play these intervals: first a seventh (C to B), then an octave (C to C5). Then try D to C5 (seventh) and D to D5 (octave). Use thumb (1) and pinky (5).',
          notes: [
            { keys: ['c/4'], duration: 'h', finger: [1] },
            { keys: ['b/4'], duration: 'h', finger: [5] },
            { keys: ['c/4'], duration: 'h', finger: [1] },
            { keys: ['c/5'], duration: 'h', finger: [5] },
            { keys: ['d/4'], duration: 'h', finger: [1] },
            { keys: ['c/5'], duration: 'h', finger: [5] },
            { keys: ['d/4'], duration: 'h', finger: [1] },
            { keys: ['d/5'], duration: 'h', finger: [5] },
            { keys: ['c/4', 'c/5'], duration: 'w', finger: [1, 5] },
          ],
          clef: 'treble',
          bpm: 72,
          timeSignature: [4, 4],
          fingerNumbers: { 'C4': 1, 'B4': 5, 'C5': 5, 'D4': 1, 'D5': 5 },
          handsRequired: 'right',
          requireTiming: false,
        },
      ],
    },
    {
      id: '8.5',
      title: 'Crescendo and Decrescendo',
      steps: [
        {
          type: 'instruction',
          title: 'Dynamics: Getting Louder and Softer',
          content: `
            <p><strong>Dynamics</strong> tell you how loud or soft to play. You've already seen markings like <em>p</em> (soft) and <em>f</em> (loud). Now we'll learn about <strong>gradual changes</strong> in volume.</p>
            <ul>
              <li><strong>Crescendo</strong> (cresc.) — gradually get <strong>louder</strong>. Shown as an opening hairpin: &lt;</li>
              <li><strong>Decrescendo</strong> (decresc.) or <strong>diminuendo</strong> (dim.) — gradually get <strong>softer</strong>. Shown as a closing hairpin: &gt;</li>
            </ul>
            <p>These markings add emotion and shape to music. Without dynamics, music sounds flat and mechanical. With dynamics, it comes alive!</p>
          `,
        },
        {
          type: 'instruction',
          title: 'How to Control Volume',
          content: `
            <p>On the piano, you control volume with <strong>how fast you press the keys</strong> (key velocity):</p>
            <ul>
              <li>Press keys <strong>quickly</strong> for a <strong>louder</strong> sound</li>
              <li>Press keys <strong>slowly and gently</strong> for a <strong>softer</strong> sound</li>
            </ul>
            <p>For a crescendo, gradually increase the speed/force of each successive note. For a decrescendo, gradually decrease it.</p>
            <p>Practice the following exercise by starting very softly and getting louder as you ascend, then getting softer as you descend.</p>
          `,
        },
        {
          type: 'exercise',
          title: 'Crescendo and Decrescendo',
          instructions: 'Play the ascending scale getting louder (crescendo), then play the descending scale getting softer (decrescendo). Start very softly on C and reach your loudest on high G, then fade back down.',
          notes: [
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['f/4'], duration: 'q', finger: [4] },
            { keys: ['g/4'], duration: 'h', finger: [5] },
            { keys: ['g/4'], duration: 'h', finger: [5] },
            { keys: ['f/4'], duration: 'q', finger: [4] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['c/4'], duration: 'q', finger: [1] },
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
      id: '8.6',
      title: 'Tempo Markings',
      steps: [
        {
          type: 'instruction',
          title: 'How Fast Should You Play?',
          content: `
            <p><strong>Tempo</strong> is the speed of the music. Composers use Italian words to indicate tempo at the beginning of a piece:</p>
            <ul>
              <li><strong>Andante</strong> — walking pace, about <strong>76 BPM</strong>. Relaxed and gentle.</li>
              <li><strong>Moderato</strong> — moderate speed, about <strong>108 BPM</strong>. Comfortable and natural.</li>
              <li><strong>Allegro</strong> — fast and lively, about <strong>132 BPM</strong>. Energetic and bright.</li>
            </ul>
            <p>BPM stands for "beats per minute." A metronome can help you feel these different speeds.</p>
          `,
        },
        {
          type: 'instruction',
          title: 'Other Common Tempo Markings',
          content: `
            <p>Here are more tempo markings you'll encounter, from slowest to fastest:</p>
            <ul>
              <li><strong>Largo</strong> — very slow and broad (~46 BPM)</li>
              <li><strong>Adagio</strong> — slow and expressive (~66 BPM)</li>
              <li><strong>Andante</strong> — walking pace (~76 BPM)</li>
              <li><strong>Moderato</strong> — moderate (~108 BPM)</li>
              <li><strong>Allegro</strong> — fast (~132 BPM)</li>
              <li><strong>Vivace</strong> — lively (~152 BPM)</li>
              <li><strong>Presto</strong> — very fast (~176 BPM)</li>
            </ul>
            <p>You may also see <strong>ritardando</strong> (rit.) meaning "gradually slow down" and <strong>accelerando</strong> (accel.) meaning "gradually speed up."</p>
          `,
        },
        {
          type: 'exercise',
          title: 'Andante Exercise',
          instructions: 'Play this simple melody at Andante tempo (76 BPM) — a comfortable walking pace. Focus on keeping a steady, relaxed rhythm.',
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
          bpm: 76,
          timeSignature: [4, 4],
          fingerNumbers: { 'C4': 1, 'D4': 2, 'E4': 3, 'F4': 4, 'G4': 5 },
          handsRequired: 'right',
          requireTiming: false,
        },
        {
          type: 'exercise',
          title: 'Moderato Exercise',
          instructions: 'Now play the same melody at Moderato tempo (100 BPM). Notice how the faster pace changes the feel of the music — it becomes more purposeful.',
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
          bpm: 100,
          timeSignature: [4, 4],
          fingerNumbers: { 'C4': 1, 'D4': 2, 'E4': 3, 'F4': 4, 'G4': 5 },
          handsRequired: 'right',
          requireTiming: false,
        },
      ],
    },
    {
      id: '8.7',
      title: 'Ties',
      steps: [
        {
          type: 'instruction',
          title: 'Connecting Notes with Ties',
          content: `
            <p>A <strong>tie</strong> is a curved line that connects two notes of the <strong>same pitch</strong>. When you see a tie:</p>
            <ul>
              <li>Play the first note</li>
              <li><strong>Hold it</strong> through the second note without re-striking</li>
              <li>The total duration = both notes combined</li>
            </ul>
            <p>For example, a half note tied to a quarter note = <strong>3 beats total</strong> (you hold one continuous sound for 3 beats).</p>
            <p>Ties are used when a note's duration needs to cross a bar line, or when you need a duration that can't be written as a single note.</p>
          `,
        },
        {
          type: 'demo',
          title: 'Hear Tied Notes',
          description: 'Listen to tied notes. The C is played once but held for the combined duration of both notes (a half note tied to a quarter note = 3 beats).',
          notes: [
            { keys: ['c/4'], duration: 'h', finger: [1] },
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['e/4'], duration: 'h', finger: [3] },
            { keys: ['e/4'], duration: 'h', finger: [3] },
          ],
          bpm: 80,
          timeSignature: [4, 4],
          clef: 'treble',
        },
        {
          type: 'exercise',
          title: 'Practice with Ties',
          instructions: 'Play this exercise with tied notes. When you see two notes of the same pitch connected, play the key once and hold for the total combined duration. Count carefully!',
          notes: [
            { keys: ['c/4'], duration: 'h', finger: [1] },
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['e/4'], duration: 'h', finger: [3] },
            { keys: ['e/4'], duration: 'h', finger: [3] },
            { keys: ['f/4'], duration: 'q', finger: [4] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['c/4'], duration: 'w', finger: [1] },
          ],
          clef: 'treble',
          bpm: 76,
          timeSignature: [4, 4],
          fingerNumbers: { 'C4': 1, 'D4': 2, 'E4': 3, 'F4': 4 },
          handsRequired: 'right',
          requireTiming: false,
        },
      ],
    },
    {
      id: '8.8',
      title: 'Slurs and Phrasing',
      steps: [
        {
          type: 'instruction',
          title: 'Slurs vs. Ties',
          content: `
            <p>A <strong>slur</strong> looks similar to a tie — it's a curved line over or under notes — but there's a key difference:</p>
            <ul>
              <li><strong>Tie:</strong> connects two notes of the <strong>same pitch</strong> — hold the note</li>
              <li><strong>Slur:</strong> connects notes of <strong>different pitches</strong> — play them <strong>smoothly connected</strong> (legato)</li>
            </ul>
            <p>When you see a slur, keep the notes flowing into each other without gaps. Lift your finger from one key just as (or slightly after) you press the next key.</p>
          `,
        },
        {
          type: 'instruction',
          title: 'Musical Phrasing',
          content: `
            <p>A <strong>phrase</strong> in music is like a sentence in speech. It's a musical idea with a beginning, middle, and end.</p>
            <p>Slur markings often indicate phrases. At the end of a phrase:</p>
            <ul>
              <li>Gently <strong>lift your wrist</strong> slightly (like a breath)</li>
              <li>Then begin the next phrase</li>
            </ul>
            <p>Good phrasing makes music sound expressive and natural, like someone speaking or singing. Without phrasing, music sounds choppy and mechanical.</p>
            <p>Think of each slurred group as one "breath" — connect all the notes within it, and take a tiny break between groups.</p>
          `,
        },
        {
          type: 'exercise',
          title: 'Legato Phrasing Exercise',
          instructions: 'Play this melody in two phrases. Connect the notes smoothly within each group. Lift your wrist gently between the two phrases (after the half note E). Think of it as two musical "sentences."',
          notes: [
            { keys: ['c/4'], duration: 'q', finger: [1] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['e/4'], duration: 'q', finger: [3] },
            { keys: ['d/4'], duration: 'q', finger: [2] },
            { keys: ['e/4'], duration: 'h', finger: [3] },
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
    {
      id: '8.9',
      title: 'Introduction to Minor Keys',
      steps: [
        {
          type: 'instruction',
          title: 'Major vs. Minor',
          content: `
            <p>So far you've been playing in <strong>major keys</strong>, which sound bright and happy. <strong>Minor keys</strong> have a completely different character — they sound <strong>sad, mysterious, or dramatic</strong>.</p>
            <p>Every major key has a <strong>relative minor</strong> that shares the same notes but starts on a different note:</p>
            <ul>
              <li><strong>C major:</strong> C-D-E-F-G-A-B-C (sounds happy)</li>
              <li><strong>A minor:</strong> A-B-C-D-E-F-G-A (sounds sad)</li>
            </ul>
            <p>Notice they use exactly the <strong>same white keys</strong>! The difference is which note feels like "home." In C major, C is home. In A minor, A is home.</p>
          `,
        },
        {
          type: 'instruction',
          title: 'The A Natural Minor Scale',
          content: `
            <p>The <strong>A natural minor scale</strong> is the simplest minor scale — all white keys, starting on A:</p>
            <p><strong>A - B - C - D - E - F - G - A</strong></p>
            <p>The pattern of whole steps (W) and half steps (H) is:</p>
            <p><strong>W - H - W - W - H - W - W</strong></p>
            <p>Compare this to the major scale pattern (W-W-H-W-W-W-H). The half steps are in different places, which is what creates the minor sound.</p>
            <p>Right hand fingering: <strong>1-2-3-1-2-3-4-5</strong> (thumb crosses under after the 3rd finger, just like the C major scale).</p>
          `,
          diagram: 'keyboard-highlight',
          diagramData: {
            highlightNotes: ['A3', 'B3', 'C4', 'D4', 'E4', 'F4', 'G4', 'A4'],
            viewportStart: 'C3',
            viewportEnd: 'C6',
            fingerNumbers: { 'A3': 1, 'B3': 2, 'C4': 3, 'D4': 1, 'E4': 2, 'F4': 3, 'G4': 4, 'A4': 5 },
          },
        },
        {
          type: 'demo',
          title: 'Hear the A Minor Scale',
          description: 'Listen to the A natural minor scale ascending and descending. Notice the darker, more serious mood compared to C major.',
          notes: [
            { keys: ['a/3'], duration: 'q', finger: [1] },
            { keys: ['b/3'], duration: 'q', finger: [2] },
            { keys: ['c/4'], duration: 'q', finger: [3] },
            { keys: ['d/4'], duration: 'q', finger: [1] },
            { keys: ['e/4'], duration: 'q', finger: [2] },
            { keys: ['f/4'], duration: 'q', finger: [3] },
            { keys: ['g/4'], duration: 'q', finger: [4] },
            { keys: ['a/4'], duration: 'q', finger: [5] },
            { keys: ['g/4'], duration: 'q', finger: [4] },
            { keys: ['f/4'], duration: 'q', finger: [3] },
            { keys: ['e/4'], duration: 'q', finger: [2] },
            { keys: ['d/4'], duration: 'q', finger: [1] },
            { keys: ['c/4'], duration: 'q', finger: [3] },
            { keys: ['b/3'], duration: 'q', finger: [2] },
            { keys: ['a/3'], duration: 'h', finger: [1] },
          ],
          bpm: 80,
          timeSignature: [4, 4],
          clef: 'treble',
        },
      ],
    },
    {
      id: '8.10',
      title: 'A Minor Scale Exercise',
      steps: [
        {
          type: 'instruction',
          title: 'Playing the A Minor Scale',
          content: `
            <p>Let's practice the <strong>A natural minor scale</strong> with proper fingering.</p>
            <p>Right hand ascending: <strong>1-2-3-1-2-3-4-5</strong></p>
            <ul>
              <li><strong>A</strong> (thumb, 1) - <strong>B</strong> (index, 2) - <strong>C</strong> (middle, 3)</li>
              <li>Thumb crosses under to <strong>D</strong> (thumb, 1)</li>
              <li><strong>E</strong> (index, 2) - <strong>F</strong> (middle, 3) - <strong>G</strong> (ring, 4) - <strong>A</strong> (pinky, 5)</li>
            </ul>
            <p>Coming back down, reverse the fingering: <strong>5-4-3-2-1-3-2-1</strong>.</p>
            <p>The thumb cross-under is the trickiest part. Practice the transition around C and D until it feels smooth.</p>
          `,
        },
        {
          type: 'exercise',
          title: 'A Minor Scale — Ascending',
          instructions: 'Play the A natural minor scale going up: A-B-C-D-E-F-G-A. Use fingering 1-2-3-1-2-3-4-5. Tuck your thumb under after finger 3 plays C.',
          notes: [
            { keys: ['a/3'], duration: 'q', finger: [1] },
            { keys: ['b/3'], duration: 'q', finger: [2] },
            { keys: ['c/4'], duration: 'q', finger: [3] },
            { keys: ['d/4'], duration: 'q', finger: [1] },
            { keys: ['e/4'], duration: 'q', finger: [2] },
            { keys: ['f/4'], duration: 'q', finger: [3] },
            { keys: ['g/4'], duration: 'q', finger: [4] },
            { keys: ['a/4'], duration: 'w', finger: [5] },
          ],
          clef: 'treble',
          bpm: 76,
          timeSignature: [4, 4],
          fingerNumbers: { 'A3': 1, 'B3': 2, 'C4': 3, 'D4': 1, 'E4': 2, 'F4': 3, 'G4': 4, 'A4': 5 },
          handsRequired: 'right',
          requireTiming: false,
        },
        {
          type: 'exercise',
          title: 'A Minor Scale — Up and Down',
          instructions: 'Play the complete A minor scale ascending and descending. Ascending: 1-2-3-1-2-3-4-5. Descending: 5-4-3-2-1-3-2-1. Keep a steady, even tempo throughout.',
          notes: [
            { keys: ['a/3'], duration: 'q', finger: [1] },
            { keys: ['b/3'], duration: 'q', finger: [2] },
            { keys: ['c/4'], duration: 'q', finger: [3] },
            { keys: ['d/4'], duration: 'q', finger: [1] },
            { keys: ['e/4'], duration: 'q', finger: [2] },
            { keys: ['f/4'], duration: 'q', finger: [3] },
            { keys: ['g/4'], duration: 'q', finger: [4] },
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
          bpm: 80,
          timeSignature: [4, 4],
          fingerNumbers: { 'A3': 1, 'B3': 2, 'C4': 3, 'D4': 1, 'E4': 2, 'F4': 3, 'G4': 4, 'A4': 5 },
          handsRequired: 'right',
          requireTiming: false,
        },
        {
          type: 'instruction',
          title: 'Module 8 Complete!',
          content: `
            <p>Well done! You've expanded your musical toolkit significantly. In this module you learned:</p>
            <ul>
              <li><strong>Dotted half notes</strong> (3 beats) and <strong>dotted quarter notes</strong> (1.5 beats)</li>
              <li>New intervals: <strong>sixths, sevenths, and octaves</strong></li>
              <li><strong>Crescendo</strong> and <strong>decrescendo</strong> — gradual volume changes</li>
              <li><strong>Tempo markings</strong> — Andante, Moderato, Allegro, and more</li>
              <li><strong>Ties</strong> — holding notes across beats or bar lines</li>
              <li><strong>Slurs and phrasing</strong> — shaping music into expressive sentences</li>
              <li><strong>Minor keys</strong> — the A natural minor scale and its darker sound</li>
            </ul>
            <p>You're becoming a true musician! In the next module, you'll build fluency by applying all these skills to more complex pieces and exercises.</p>
          `,
        },
      ],
    },
  ],
};

export default module08;
