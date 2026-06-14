export const ARTS = {
  id: 'arts',
  name: 'Arts & Music Academy',
  subtitle: 'Create, Express, and Inspire',
  color: '#C44898',
  unlocked: true,
  subworlds: [
    {
      id: 'visual_arts',
      name: 'Visual Arts',
      subtitle: 'Drawing, color theory, and creative expression',
      unlocked: true,
      bgImage: '[SUBWORLD_BG: Art studio with colorful canvases, paint brushes, color wheel floating in creative space]',
      color: '#C44898',
      lessons: [
        {
          id: 'color_theory',
          title: 'Color Theory',
          objective: 'Understand the color wheel; identify primary, secondary, and complementary colors; understand how color creates emotion',
          ageRange: '4-14', difficulty: 'foundation', xp: 75,
          heroImage: '[LESSON_HERO: Vibrant color wheel with primary, secondary, tertiary colors labeled and emotion words around the outside]',
          narrator: {
            foundation: 'Color is one of an artist\'s most powerful tools. The color wheel shows how colors relate to each other. Red, blue, and yellow are primary colors â you cannot make them by mixing. Mix two primaries and you get secondary colors: orange, green, purple. Colors also create feelings: red feels exciting and energetic, blue feels calm and peaceful, yellow feels happy and bright.',
            explore: 'Color theory encompasses hue (the color itself), saturation (intensity), and value (lightness/darkness). Complementary colors are opposite on the color wheel â they create maximum contrast and make each other appear more vibrant. Analogous colors sit beside each other and create harmony. Warm colors (red, orange, yellow) advance visually; cool colors (blue, green, purple) recede. Artists use these principles intentionally.',
            mastery: 'Color theory has scientific foundations in light physics and human perception. Additive color mixing (light: RGB) differs from subtractive mixing (pigment: RYB or CMYK). The human eye has three types of cone cells responding to different wavelengths. Color blindness results from cone cell variation â about 8% of males have some form. Artists, designers, filmmakers, and marketers all apply color theory â it is both a science and an art.',
          },
          whyItMatters: 'Color theory is used in art, design, marketing, film, architecture, web design, and fashion. Understanding color gives you control over how your work looks and feels to others.',
          vocabulary: [
            { word: 'primary colors', phonetic: 'PRY-mair-ee KUL-erz', definition: 'The three colors that cannot be made by mixing other colors: red, blue, and yellow', example: 'You cannot make red by mixing other colors â it is a primary color.', image: '[VOCAB_IMAGE: color wheel with red, yellow, blue highlighted as primary colors]' },
            { word: 'secondary colors', phonetic: 'SEK-un-dair-ee KUL-erz', definition: 'Colors made by mixing two primary colors: orange, green, and purple', example: 'Mix red and yellow to get orange â a secondary color.', image: '[VOCAB_IMAGE: mixing diagram: red+yellow=orange, blue+yellow=green, red+blue=purple]' },
            { word: 'complementary colors', phonetic: 'kom-PLEH-men-tair-ee KUL-erz', definition: 'Colors directly opposite on the color wheel â create strong contrast when placed together', example: 'Red and green are complementary â that\'s why Christmas decorations are so eye-catching.', image: '[VOCAB_IMAGE: color wheel with complementary pairs connected: red-green, blue-orange, yellow-purple]' },
          ],
          activities: [
            { id: 'color_mixer', type: 'simulate', title: 'Digital Color Mixer', instruction: 'Mix paint colors and discover what you can make.', placeholder: '[INTERACTIVE: Digital paint blobs. Drag two colors together to mix. Discover primary â secondary â tertiary colors. Color wheel updates to show relationships. Free explore mode]', ageRange: '4+' },
            { id: 'color_emotions', type: 'explore', title: 'Color and Emotion Gallery', instruction: 'Look at six artworks with different color palettes. How does each one make you feel?', placeholder: '[GALLERY: 6 artwork reproductions with distinct color palettes â warm, cool, complementary, monochromatic, neutral, vibrant. Child rates emotions for each. Reveals how artists use color intentionally to affect viewer mood]', ageRange: '7+' },
            { id: 'color_wheel_build', type: 'build', title: 'Build the Color Wheel', instruction: 'Place all 12 colors in their correct position on the color wheel.', placeholder: '[INTERACTIVE: Blank color wheel template. 12 color swatches to place. Correct placement = color name appears. Complete wheel reveals relationships. Foundation: 6 colors. Advanced: all 12 including tertiary]', ageRange: '6+' },
          ],
          assessment: {
            questions: [
              { type: 'multiple_choice', q: 'What happens when you mix red and blue?', options: ['Orange', 'Green', 'Purple', 'Brown'], answer: 'Purple', explanation: 'Red + Blue = Purple (in traditional pigment/paint mixing). Purple is a secondary color. The three secondary colors are: orange (red+yellow), green (blue+yellow), and purple (red+blue).', level: 'knowledge' },
              { type: 'multiple_choice', q: 'You want your painting to feel calm and peaceful. Which colors should you use?', options: ['Red, orange, yellow', 'Blue, green, purple', 'Black and white only', 'Complementary colors'], answer: 'Blue, green, purple', explanation: 'Cool colors (blue, green, purple) are associated with calm, peace, and relaxation. Warm colors (red, orange, yellow) feel energetic and exciting. Artists choose colors deliberately to create emotional responses.', level: 'application' },
            ],
          },
          mastery: { threshold: 80, badge: 'Color Artist', badgeImage: '[BADGE: Color Artist with color wheel and paintbrush]', reward: 'Advanced art and design pathways unlocked', rewardImage: '[REWARD_IMAGE: art studio advanced preview]' },
        },
      ],
    },
    {
      id: 'music',
      name: 'Music Academy',
      subtitle: 'Rhythm, melody, and musical creation',
      unlocked: true,
      bgImage: '[SUBWORLD_BG: Concert hall with musical notes floating, instruments glowing, piano keys visible]',
      color: '#9B6AE0',
      lessons: [
        {
          id: 'rhythm_beat',
          title: 'Rhythm and Beat',
          objective: 'Understand beat and rhythm; identify tempo; clap and tap rhythms; recognize note values',
          ageRange: '3-12', difficulty: 'foundation', xp: 70,
          heroImage: '[LESSON_HERO: Animated music staff with notes bouncing to a beat, metronome ticking, colorful rhythm patterns]',
          narrator: {
            foundation: 'Music has a heartbeat called a beat. Feel it â boom, boom, boom, boom. Even when music gets more complicated, the beat stays steady underneath. Rhythm is the pattern of sounds that dances over the beat â some sounds are long, some are short, some are loud, some are soft. Together, beat and rhythm make music feel alive.',
            explore: 'Musical notation represents rhythm through note values: whole notes (4 beats), half notes (2 beats), quarter notes (1 beat), eighth notes (half beat). Time signatures tell us how many beats per measure (4/4, 3/4, 6/8). Tempo (speed) is measured in BPM (beats per minute). Syncopation places emphasis on unexpected beats â a key element of jazz, reggae, and funk.',
            mastery: 'Rhythm is mathematically precise â note values are fractions. A 4/4 measure can contain one whole note, two halves, four quarters, eight eighths, or any combination that adds up to 4 beats. Polyrhythm (two or more simultaneous rhythms) characterizes African drumming, Latin music, and contemporary classical compositions. Understanding rhythm requires mathematical thinking â it is one of music\'s deepest connections to mathematics.',
          },
          whyItMatters: 'Rhythm is found in music, poetry, language, dance, and nature. Developing rhythmic sense improves mathematical pattern recognition, language fluency, and physical coordination.',
          vocabulary: [
            { word: 'beat', phonetic: 'beet', definition: 'The steady, regular pulse that underlies music â like a musical heartbeat', example: 'You tap your foot to the beat when you listen to music.', image: '[VOCAB_IMAGE: heartbeat wave transforming into musical beat pattern, metronome shown]' },
            { word: 'rhythm', phonetic: 'RITH-um', definition: 'The pattern of long and short sounds that occur over the beat', example: 'The rhythm of "Happy Birthday" is: LONG short short LONG short LONG LONG.', image: '[VOCAB_IMAGE: rhythm pattern shown as long and short blocks above a steady beat line]' },
            { word: 'tempo', phonetic: 'TEM-poh', definition: 'The speed of the beat â how fast or slow the music moves', example: 'A lullaby has a slow tempo; a dance song has a fast tempo.', image: '[VOCAB_IMAGE: metronome dial showing slow (largo) to fast (presto) with musical terms labeled]' },
          ],
          activities: [
            { id: 'rhythm_clap', type: 'interact', title: 'Rhythm Echo', instruction: 'Listen to a rhythm pattern and tap it back. Each level gets more complex.', placeholder: '[INTERACTIVE: Rhythm pattern plays with visual display. Child taps screen to echo it. Visual timing feedback. Level 1: simple 4-beat patterns. Level 10: complex syncopated rhythms. Records accuracy score]', ageRange: '3+' },
            { id: 'virtual_piano', type: 'interact', title: 'Virtual Piano', instruction: 'Play the piano keyboard. Follow the lit keys to learn simple melodies.', placeholder: '[INTERACTIVE: 2-octave piano keyboard. Tap to play any key. Guided mode: keys light up in sequence for simple songs (Twinkle Twinkle, Mary Had a Little Lamb, Ode to Joy). Free play mode. Note names display]', ageRange: '4+' },
            { id: 'drum_pads', type: 'interact', title: 'Drum Pad Studio', instruction: 'Create your own beat using drum pads. Record and play back your rhythm.', placeholder: '[INTERACTIVE: 8 drum pads â kick, snare, hi-hat, clap, tom, rim, cowbell, shaker. Tap to play. Loop record mode. Playback. Layer different sounds to build complete drum beat]', ageRange: '4+' },
          ],
          assessment: {
            questions: [
              { type: 'multiple_choice', q: 'What is the BEAT in music?', options: ['The words of the song', 'The melody or tune', 'The steady regular pulse that underlies the music', 'How loud the music is'], answer: 'The steady regular pulse that underlies the music', explanation: 'The beat is the consistent pulse â what you tap your foot to. It is different from rhythm (the pattern of sounds over the beat) and melody (the tune). All three work together to create music.', level: 'knowledge' },
            ],
          },
          mastery: { threshold: 80, badge: 'Rhythm Keeper', badgeImage: '[BADGE: Rhythm Keeper with drum and musical notes]', reward: 'Music theory, composition, and instrument pathways unlocked', rewardImage: '[REWARD_IMAGE: music academy advanced preview]' },
        },
      ],
    },
  ],
  worldMastery: {
    requirement: 'Complete all core Arts & Music subworlds',
    badge: 'Creative Master',
    badgeImage: '[BADGE: Creative Master with palette, brush, and musical note combined]',
    reward: 'Advanced art history, music theory, composition, and performance pathways unlocked',
  },
}
