// ─── SPACE & COSMOS — COMPLETE CURRICULUM ───────────────────────
// Reference world. Every other world follows this exact schema.

export const COSMOS = {
  id: 'cosmos',
  name: 'Space & Cosmos',
  subtitle: 'Planets, Stars & Beyond',
  color: '#7C6AE0',
  bgGradient: 'linear-gradient(160deg, #04021A 0%, #0A0630 45%, #100C40 100%)',
  ambientSound: 'space_ambient',
  unlocked: true,

  subworlds: [

    // ══════════════════════════════════════════════
    // SUBWORLD 1 — THE SOLAR SYSTEM
    // ══════════════════════════════════════════════
    {
      id: 'solar_system',
      name: 'The Solar System',
      subtitle: 'Our cosmic neighborhood',
      unlocked: true,
      bgImage: '[SUBWORLD_BG: solar system top-down view, Sun centered, planets in orbit]',
      ambientSound: 'solar_system_hum',
      color: '#FFD73C',

      lessons: [
        {
          id: 'what_is_solar_system',
          title: 'What Is the Solar System?',
          objective: 'Understand that the solar system is the Sun plus everything orbiting it, held together by gravity',
          ageRange: '4-8',
          difficulty: 'foundation',
          xp: 80,
          heroImage: '[LESSON_HERO: Animated solar system, all 8 planets orbiting the Sun]',
          characterImage: '[CHARACTER: Commander Nova — female astronaut, warm smile]',

          narrator: {
            foundation: 'This is our solar system! Right in the middle is a giant blazing star called the Sun. Eight planets travel around it in paths called orbits. We live on the third planet — Earth! Can you find it? It is the blue and green one. Let us meet all the planets together!',
            explore: 'Our solar system formed about 4.6 billion years ago from a giant cloud of gas and dust. Gravity pulled everything together. The Sun contains 99.8% of all the mass in the solar system. The eight planets are divided into rocky inner planets and gas or ice giants in the outer solar system. Each planet travels in an elliptical orbit — not a perfect circle but slightly oval-shaped.',
            mastery: 'The solar system occupies a region about 100 astronomical units across, but the heliosphere extends far beyond that. The planets follow orbits described by Kepler\'s three laws. The closer a planet is to the Sun, the faster it must travel to maintain its orbit — a consequence of the conservation of angular momentum. Our solar system sits in the Orion Arm of the Milky Way, about 26,000 light-years from the galactic center.',
          },

          whyItMatters: 'Understanding our solar system explains why we have day and night, seasons, tides, and eclipses. Every space mission ever launched depends on understanding how the solar system works.',

          vocabulary: [
            {
              word: 'solar system',
              phonetic: 'SO-lar SIS-tem',
              definition: 'The Sun and everything orbiting around it, including planets, moons, asteroids, and comets',
              example: 'Our solar system has eight planets, dozens of moons, and billions of smaller objects.',
              image: '[VOCAB_IMAGE: solar system diagram with labeled objects]',
            },
            {
              word: 'orbit',
              phonetic: 'OR-bit',
              definition: 'The curved path one object takes around another due to gravity',
              example: "Earth's orbit around the Sun takes 365 days to complete.",
              image: '[VOCAB_IMAGE: elliptical orbit diagram with planet and Sun]',
            },
            {
              word: 'planet',
              phonetic: 'PLAN-et',
              definition: 'A large round object that orbits a star and has cleared its orbital path',
              example: 'Mars is the fourth planet from the Sun.',
              image: '[VOCAB_IMAGE: eight planets lineup with labels]',
            },
            {
              word: 'gravity',
              phonetic: 'GRAV-ih-tee',
              definition: 'The invisible force that pulls objects toward each other',
              example: 'Gravity keeps the planets in orbit around the Sun.',
              image: '[VOCAB_IMAGE: gravity arrows pulling planet toward Sun]',
            },
            {
              word: 'star',
              phonetic: 'STAR',
              definition: 'A massive ball of hot gas producing light and heat through nuclear fusion',
              example: 'The Sun is our closest star, about 150 million kilometers away.',
              image: '[VOCAB_IMAGE: Sun with corona rays, size comparison to Earth]',
            },
            {
              word: 'astronomical unit',
              phonetic: 'as-TRON-oh-mih-cal YOO-nit',
              definition: 'The average distance from Earth to the Sun — about 150 million kilometers. Abbreviated AU.',
              example: 'Neptune is about 30 astronomical units from the Sun.',
              image: '[VOCAB_IMAGE: ruler diagram from Earth to Sun = 1 AU]',
            },
          ],

          activities: [
            {
              id: 'solar_flythrough',
              type: 'discover',
              title: 'Solar System Flythrough',
              instruction: 'Watch as we fly through the solar system. Tap any planet to hear its name and one amazing fact.',
              placeholder: '[INTERACTIVE: Animated camera flies through solar system — tap each planet for name + fact popup + sound effect]',
              ageRange: '3+',
            },
            {
              id: 'build_solar_system',
              type: 'drag_drop',
              title: 'Build the Solar System',
              instruction: 'Drag each planet into the correct orbit ring around the Sun, from closest to farthest.',
              placeholder: '[INTERACTIVE: 8 planet images scrambled, 8 orbit rings labeled 1-8 around Sun — snap to correct ring, wrong placement bounces back]',
              ageRange: '5+',
            },
            {
              id: 'planet_name_match',
              type: 'match',
              title: 'Planet Name Match',
              instruction: 'Tap a planet, then tap its name. Match all eight to complete the challenge.',
              placeholder: '[INTERACTIVE: 8 planet images on left, 8 name cards on right — tap pairs to match, correct = glow + chime, wrong = shake]',
              ageRange: '5+',
            },
            {
              id: 'inner_outer_sort',
              type: 'sort',
              title: 'Inner vs Outer Planets',
              instruction: 'Sort the eight planets into two groups: rocky inner planets and gas or ice outer planets.',
              placeholder: '[INTERACTIVE: Two bins labeled "Rocky Inner" and "Gas/Ice Outer" — drag 8 planets to correct bin]',
              ageRange: '7+',
            },
            {
              id: 'orbit_speed_sim',
              type: 'simulate',
              title: 'Orbit Speed Race',
              instruction: 'Move a planet closer to or farther from the Sun and watch how its orbital speed changes.',
              placeholder: '[SIMULATION: Slider changes planet distance, orbital speed indicator updates, Mercury vs Neptune speed comparison visible]',
              ageRange: '8+',
            },
          ],

          assessment: {
            questions: [
              {
                type: 'multiple_choice',
                q: 'How many planets are in our solar system?',
                options: ['6', '7', '8', '9'],
                answer: '8',
                explanation: 'In 2006, Pluto was reclassified as a dwarf planet, leaving eight planets: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune.',
                level: 'knowledge',
              },
              {
                type: 'multiple_choice',
                q: 'What is at the center of our solar system?',
                options: ['Earth', 'Moon', 'Jupiter', 'The Sun'],
                answer: 'The Sun',
                explanation: 'The Sun contains 99.8% of all the mass in the solar system and its gravity holds everything in orbit.',
                level: 'knowledge',
              },
              {
                type: 'multiple_choice',
                q: 'Why do planets orbit the Sun?',
                options: ['Because they are pushed by rockets', 'Because of gravity', 'Because the Sun spins', 'Because of the Moon'],
                answer: 'Because of gravity',
                explanation: "The Sun's massive gravity pulls planets toward it, while the planets' forward motion keeps them from falling in — creating a stable orbit.",
                level: 'understanding',
              },
              {
                type: 'multiple_choice',
                q: 'Mercury is much closer to the Sun than Neptune. Which planet moves faster in its orbit?',
                options: ['Mercury', 'Neptune', 'They move at the same speed', 'It changes every year'],
                answer: 'Mercury',
                explanation: "Kepler's Second Law tells us that planets closer to the Sun move faster. Mercury orbits at 47 km/s while Neptune moves at only 5 km/s.",
                level: 'reasoning',
              },
              {
                type: 'multiple_choice',
                q: 'Scientists discover a new planet between Earth and Mars. What planet number from the Sun would it be?',
                options: ['3rd', '4th', '5th', '6th'],
                answer: '4th',
                explanation: 'Earth is the 3rd planet and Mars is currently the 4th. A new planet between them would take the 4th position, pushing Mars to 5th.',
                level: 'application',
              },
            ],
          },

          mastery: {
            threshold: 80,
            badge: 'Solar Citizen',
            badgeImage: '[BADGE_IMAGE: circular badge with solar system icon, gold border, "Solar Citizen" text]',
            reward: 'Solar system animated background unlocked for your profile',
            rewardImage: '[REWARD_IMAGE: animated solar system profile background preview]',
          },
        },

        // ─── LESSON 2: THE SUN ──────────────────────────────────────
        {
          id: 'the_sun',
          title: 'The Sun: Our Star',
          objective: 'Understand the Sun as a main-sequence star powered by nuclear fusion with distinct internal layers',
          ageRange: '5-10',
          difficulty: 'foundation',
          xp: 90,
          heroImage: '[LESSON_HERO: Sun cross-section showing core, radiative zone, convective zone, photosphere, corona]',
          characterImage: '[CHARACTER: Commander Nova pointing at Sun diagram]',

          narrator: {
            foundation: 'The Sun is our very own star! It is a massive ball of hot gas — mostly hydrogen. At the Sun\'s core, temperatures reach 15 million degrees Celsius — hot enough to fuse hydrogen into helium. This process, called nuclear fusion, releases the light and heat that makes life on Earth possible. The Sun has been shining for 4.6 billion years and has another 5 billion years to go.',
            explore: 'The Sun is a G-type main-sequence star — what astronomers call a yellow dwarf. At its core, nuclear fusion converts 600 million tonnes of hydrogen into helium every second. The energy released takes a staggering 100,000 years to travel from the core to the surface — then just 8 minutes more to reach Earth. The Sun has five distinct layers: core, radiative zone, convective zone, photosphere, and corona.',
            mastery: 'The Sun converts mass to energy according to Einstein\'s E=mc². The tiny difference in mass between the hydrogen inputs and helium outputs of the proton-proton chain reaction releases enormous energy. The Sun is currently about halfway through its 10-billion-year main-sequence lifetime. In approximately 5 billion years it will expand into a red giant, then collapse into a white dwarf the size of Earth.',
          },

          whyItMatters: 'The Sun is the energy source for all life on Earth. Every food chain starts with photosynthesis powered by sunlight. Understanding the Sun also tells us how all stars work — and since stars create the heavy elements everything is made from, understanding the Sun helps explain our own existence.',

          vocabulary: [
            {
              word: 'nuclear fusion',
              phonetic: 'NOO-klee-ar FYOO-zhun',
              definition: 'The process where two atomic nuclei combine to form a heavier nucleus, releasing enormous energy',
              example: 'Nuclear fusion in the Sun\'s core converts hydrogen into helium and releases the energy that warms Earth.',
              image: '[VOCAB_IMAGE: diagram of proton-proton chain — two hydrogen atoms fusing, energy released as arrow]',
            },
            {
              word: 'photosphere',
              phonetic: 'FOH-toh-sfeer',
              definition: "The visible surface layer of the Sun — the light we see comes from this layer",
              example: 'The photosphere glows at about 5,500 degrees Celsius.',
              image: '[VOCAB_IMAGE: close-up of photosphere showing granulation pattern]',
            },
            {
              word: 'corona',
              phonetic: 'kuh-ROH-nah',
              definition: "The outermost layer of the Sun's atmosphere, visible during a total solar eclipse as wispy white rays",
              example: 'The corona is mysteriously hotter than the photosphere — over a million degrees Celsius.',
              image: '[VOCAB_IMAGE: total solar eclipse photograph showing white corona rays]',
            },
            {
              word: 'solar flare',
              phonetic: 'SO-lar flair',
              definition: "A sudden intense burst of energy from the Sun's surface",
              example: 'A powerful solar flare can disrupt satellite communications and power grids on Earth.',
              image: '[VOCAB_IMAGE: solar flare erupting from Sun surface, dramatic orange arc]',
            },
            {
              word: 'hydrogen',
              phonetic: 'HY-droh-jen',
              definition: 'The lightest and most abundant element in the universe — the fuel the Sun burns',
              example: 'The Sun is about 74% hydrogen by mass.',
              image: '[VOCAB_IMAGE: hydrogen atom diagram — 1 proton, 1 electron]',
            },
            {
              word: 'helium',
              phonetic: 'HEE-lee-um',
              definition: 'The second lightest element, produced when the Sun fuses hydrogen atoms together',
              example: 'The Sun converts hydrogen into helium — the same gas that makes balloons float.',
              image: '[VOCAB_IMAGE: helium atom diagram with 2 protons, 2 neutrons, 2 electrons]',
            },
          ],

          activities: [
            {
              id: 'sun_layers_reveal',
              type: 'explore',
              title: 'Sun Layers Reveal',
              instruction: 'Tap each layer of the Sun to highlight it, hear its name, and learn its temperature.',
              placeholder: '[INTERACTIVE: Animated cross-section of Sun with 5 labeled layers. Tap each: core (15M°C), radiative zone, convective zone, photosphere (5,500°C), corona (1M°C). Each tap = glow + narrator line + temperature display]',
              ageRange: '5+',
            },
            {
              id: 'fusion_lab',
              type: 'simulate',
              title: 'Nuclear Fusion Lab',
              instruction: 'Tap two hydrogen atoms together to trigger nuclear fusion. Watch the energy burst!',
              placeholder: '[SIMULATION: Two glowing hydrogen atoms on screen. Drag them together — on contact, flash animation, helium atom appears, energy particles burst outward, narrator says "Fusion! Energy released!"]',
              ageRange: '6+',
            },
            {
              id: 'solar_flare_watch',
              type: 'observe',
              title: 'Solar Flare Watch',
              instruction: 'Watch a solar flare erupt from the Sun\'s surface. Notice how far it reaches.',
              placeholder: '[ANIMATION: 30-second animated solar flare eruption. Scale indicator shows flare is larger than Earth. Narrator describes what is happening.]',
              ageRange: '5+',
            },
            {
              id: 'temperature_match',
              type: 'sort',
              title: 'Temperature Scale',
              instruction: 'Drag these temperatures into order from coldest to hottest.',
              placeholder: '[INTERACTIVE: Cards: "Ice cream -10°C", "Room temperature 22°C", "Boiling water 100°C", "Lava 1,200°C", "Sun surface 5,500°C", "Sun core 15,000,000°C" — drag into ascending order on a scale]',
              ageRange: '7+',
            },
            {
              id: 'label_the_sun',
              type: 'build',
              title: 'Label the Sun',
              instruction: 'Drag each layer name to its correct position on the Sun diagram.',
              placeholder: '[INTERACTIVE: Blank Sun cross-section diagram with 5 unlabeled layers. 5 label cards: Core, Radiative Zone, Convective Zone, Photosphere, Corona. Drag to match. Wrong position bounces back, correct = lock in + glow]',
              ageRange: '8+',
            },
          ],

          assessment: {
            questions: [
              {
                type: 'multiple_choice',
                q: 'What process produces the Sun\'s energy?',
                options: ['Burning coal', 'Nuclear fusion', 'Nuclear fission', 'Chemical combustion'],
                answer: 'Nuclear fusion',
                explanation: 'Nuclear fusion combines hydrogen atoms into helium, releasing enormous energy. This is different from nuclear fission (splitting atoms) used in nuclear power plants.',
                level: 'knowledge',
              },
              {
                type: 'multiple_choice',
                q: 'How long does light take to travel from the Sun to Earth?',
                options: ['8 seconds', '8 minutes', '8 hours', '8 days'],
                answer: '8 minutes',
                explanation: 'Light travels at 300,000 km/s but the Sun is 150 million km away. That works out to about 8 minutes and 20 seconds.',
                level: 'knowledge',
              },
              {
                type: 'multiple_choice',
                q: 'Why is the Sun important for life on Earth?',
                options: [
                  'It makes the sky blue',
                  'It provides light and heat that powers photosynthesis and warms the planet',
                  'It creates the Moon',
                  'It stops asteroids from hitting Earth',
                ],
                answer: 'It provides light and heat that powers photosynthesis and warms the planet',
                explanation: 'Photosynthesis converts sunlight into the chemical energy that powers almost every food chain on Earth. Without the Sun, life as we know it could not exist.',
                level: 'understanding',
              },
              {
                type: 'multiple_choice',
                q: 'The Sun is halfway through its life. What will eventually happen to it?',
                options: [
                  'It will explode as a supernova',
                  'It will expand into a red giant then become a white dwarf',
                  'It will become a black hole',
                  'Nothing — it will burn forever',
                ],
                answer: 'It will expand into a red giant then become a white dwarf',
                explanation: 'Stars like our Sun are not massive enough to create supernovae. They expand into red giants then gently shed their outer layers, leaving behind a dense white dwarf.',
                level: 'reasoning',
              },
              {
                type: 'multiple_choice',
                q: 'A solar flare erupts from the Sun today. When would its effects reach Earth?',
                options: ['Instantly', 'In about 8 minutes', 'In 1 to 3 days', 'In 1 year'],
                answer: 'In 1 to 3 days',
                explanation: 'The light from a solar flare arrives in 8 minutes, but the charged particles that disrupt electronics travel more slowly — arriving in 1 to 3 days, giving us time to prepare.',
                level: 'application',
              },
            ],
          },

          mastery: {
            threshold: 80,
            badge: 'Solar Scholar',
            badgeImage: '[BADGE_IMAGE: circular badge with Sun cross-section, "Solar Scholar" text, gold and orange border]',
            reward: 'Animated Sun decoration unlocked for profile',
            rewardImage: '[REWARD_IMAGE: animated Sun decoration preview]',
          },
        },

        // ─── LESSON 3: MERCURY ─────────────────────────────────────
        {
          id: 'mercury',
          title: 'Mercury: The Fastest Planet',
          objective: 'Describe Mercury\'s surface, extreme temperatures, lack of atmosphere, and its position as the fastest-orbiting planet',
          ageRange: '5-9',
          difficulty: 'foundation',
          xp: 70,
          heroImage: '[LESSON_HERO: Mercury close-up — grey, heavily cratered surface with Sun dominating the sky]',

          narrator: {
            foundation: 'Mercury is the smallest planet and the closest to the Sun. But here is a surprise — Mercury is not the hottest planet! That is Venus. Mercury has no atmosphere to hold heat in. In the daytime it reaches 430 degrees Celsius — hot enough to melt lead. At night it drops to minus 180 degrees. Mercury also moves faster than any other planet, zooming around the Sun in just 88 Earth days!',
            explore: 'Mercury\'s lack of atmosphere means no weather, no wind erosion, and no protection from impacts — which is why its surface is covered with ancient craters. A Mercurian day is longer than its year: Mercury rotates so slowly that one day lasts 59 Earth days, while its year is only 88 days. Mercury\'s large iron core — making up 85% of its radius — generates a weak but measurable magnetic field.',
            mastery: 'Mercury is a fascinating case study in planetary evolution. Its enormous iron core relative to its mantle suggests it may have been much larger and lost its outer layers in a giant impact. The MESSENGER spacecraft orbited Mercury from 2011 to 2015 and mapped its entire surface, discovering water ice in permanently shadowed craters near the poles despite Mercury\'s proximity to the Sun.',
          },

          whyItMatters: 'Mercury shows what a planet without an atmosphere looks like — extreme temperature swings, a cratered surface preserving billions of years of history, and no weather. Studying Mercury helps us understand why Earth\'s atmosphere is so precious.',

          vocabulary: [
            { word: 'atmosphere', phonetic: 'AT-moh-sfeer', definition: 'The layer of gases surrounding a planet, held by gravity', example: 'Mercury has no atmosphere, so heat escapes into space each night.', image: '[VOCAB_IMAGE: Earth with visible atmosphere layer vs Mercury with no atmosphere]' },
            { word: 'crater', phonetic: 'KRAY-ter', definition: 'A bowl-shaped depression formed by a meteorite impact', example: 'Mercury\'s surface is covered with ancient craters formed over billions of years.', image: '[VOCAB_IMAGE: aerial crater with bowl shape and raised rim labeled]' },
            { word: 'rotation', phonetic: 'roh-TAY-shun', definition: 'A planet spinning on its own axis — gives us day and night', example: 'Mercury\'s rotation is so slow that one day lasts 59 Earth days.', image: '[VOCAB_IMAGE: planet with rotation arrow, day/night side labeled]' },
            { word: 'revolution', phonetic: 'rev-oh-LOO-shun', definition: 'One complete trip around the Sun — the length of a year', example: 'Mercury\'s revolution around the Sun takes only 88 Earth days.', image: '[VOCAB_IMAGE: planet orbit with full circle = one revolution labeled]' },
          ],

          activities: [
            { id: 'mercury_temp', type: 'simulate', title: 'Day/Night Temperature Swing', instruction: 'Toggle between Mercury\'s day and night side. Watch the temperature gauge swing from +430°C to -180°C.', placeholder: '[SIMULATION: Split view of Mercury day/night. Toggle button. Temperature gauge animates dramatically between extremes. Narrator explains why.]', ageRange: '5+' },
            { id: 'crater_maker', type: 'build', title: 'Crater Creator', instruction: 'Drop meteorites of different sizes onto Mercury\'s surface and see what happens.', placeholder: '[INTERACTIVE: Mercury surface view. Drag meteorites (small/medium/large) and drop. Impact animation plays, crater forms proportional to size, sound effect plays]', ageRange: '5+' },
            { id: 'size_compare', type: 'compare', title: 'How Small Is Mercury?', instruction: 'Drag planets into size order from smallest to largest and see where Mercury fits.', placeholder: '[INTERACTIVE: 8 planets to size-sort on a ruler — Mercury is smallest planet, slightly larger than Moon for comparison]', ageRange: '6+' },
          ],

          assessment: {
            questions: [
              { type: 'multiple_choice', q: 'Why is Mercury NOT the hottest planet even though it is closest to the Sun?', options: ['It moves too fast', 'It has no atmosphere to trap heat', 'Its surface reflects all heat', 'The Sun is not that hot near Mercury'], answer: 'It has no atmosphere to trap heat', explanation: 'Venus is hotter because its thick CO₂ atmosphere traps heat. Mercury has no atmosphere so heat escapes into space each night.', level: 'understanding' },
              { type: 'multiple_choice', q: 'How long does Mercury take to orbit the Sun?', options: ['365 days', '88 days', '24 hours', '29 days'], answer: '88 days', explanation: 'Mercury is so close to the Sun that it completes its orbit in just 88 Earth days — the shortest year of any planet.', level: 'knowledge' },
              { type: 'multiple_choice', q: 'Why is Mercury covered in so many craters?', options: ['It was hit by asteroids recently', 'It has no atmosphere to burn up incoming rocks and no weather to erode craters', 'Its surface is very soft', 'The Sun throws rocks at it'], answer: 'It has no atmosphere to burn up incoming rocks and no weather to erode craters', explanation: 'On Earth, most meteorites burn up in the atmosphere and craters are eroded by weather over time. Mercury has neither protection, so craters survive for billions of years.', level: 'reasoning' },
            ],
          },

          mastery: { threshold: 75, badge: 'Mercury Scout', badgeImage: '[BADGE_IMAGE: Mercury Scout badge with crater design]', reward: 'Mercury crater profile background', rewardImage: '[REWARD_IMAGE: Mercury crater background preview]' },
        },

        // ─── LESSON 4: VENUS ────────────────────────────────────────
        {
          id: 'venus',
          title: 'Venus: The Hottest Planet',
          objective: 'Explain the greenhouse effect using Venus as the most extreme example in our solar system',
          ageRange: '6-10',
          difficulty: 'foundation',
          xp: 85,
          heroImage: '[LESSON_HERO: Venus — thick yellowish cloud cover from space, dramatic and mysterious]',

          narrator: {
            foundation: 'Venus looks beautiful from a distance — the brightest object in the night sky after the Moon. But Venus is actually a hellscape! Its thick atmosphere of carbon dioxide traps the Sun\'s heat like a blanket, making it hotter than an oven — 465 degrees Celsius every single day. This is called the greenhouse effect. Venus never cools down, not even at night.',
            explore: 'Venus demonstrates the greenhouse effect in its most extreme form. Its atmosphere is 96% carbon dioxide, creating a pressure 90 times greater than Earth\'s at its surface. The thick cloud cover reflects much sunlight away, yet the CO₂ traps enough heat to maintain constant 465°C temperatures — hotter than a pizza oven set to maximum. Venus also spins backwards compared to most planets.',
            mastery: 'Venus\'s runaway greenhouse effect is a profound warning. It likely had liquid water oceans billions of years ago, but as water evaporated it trapped more heat in a feedback loop until the oceans were gone completely. Understanding why Venus became uninhabitable is directly relevant to understanding climate change on Earth. Venus rotates retrograde and so slowly that its day is longer than its year.',
          },

          whyItMatters: 'Venus is Earth\'s twin in size but a nightmare in conditions. Understanding what went wrong on Venus — the runaway greenhouse effect — is one of the most important lessons for understanding climate science on Earth today.',

          vocabulary: [
            { word: 'greenhouse effect', phonetic: 'GREEN-hows eh-FEKT', definition: 'When a planet\'s atmosphere traps heat from the Sun, raising temperatures', example: 'Venus\'s extreme greenhouse effect makes it the hottest planet despite not being closest to the Sun.', image: '[VOCAB_IMAGE: greenhouse effect diagram — sunlight enters, heat trapped by CO₂ layer, arrows showing heat cannot escape]' },
            { word: 'carbon dioxide', phonetic: 'KAR-bon dy-OK-syd', definition: 'A gas made of carbon and oxygen atoms that traps heat in atmospheres', example: 'Venus\'s atmosphere is 96% carbon dioxide, which is why it is so hot.', image: '[VOCAB_IMAGE: CO₂ molecule diagram with C and 2 O atoms labeled]' },
            { word: 'retrograde', phonetic: 'REH-troh-grayd', definition: 'Rotating in the opposite direction from most planets — on Venus the Sun rises in the west', example: 'Venus has retrograde rotation, so if you stood on its surface the Sun would rise in the west.', image: '[VOCAB_IMAGE: two planets side by side — one spinning counter-clockwise (normal), one clockwise (retrograde)]' },
            { word: 'atmospheric pressure', phonetic: 'at-MOS-feer-ik PRESH-er', definition: 'The weight of the atmosphere pressing down on a surface', example: 'The atmospheric pressure on Venus is 90 times Earth\'s — like being 900 meters underwater.', image: '[VOCAB_IMAGE: pressure comparison — thin arrow for Earth, massive arrow for Venus, spaceship being crushed illustration]' },
          ],

          activities: [
            { id: 'greenhouse_builder', type: 'simulate', title: 'Build a Greenhouse Effect', instruction: 'Add CO₂ molecules to a planet\'s atmosphere using the slider. Watch the temperature rise.', placeholder: '[SIMULATION: Planet diagram, slider adds CO₂ molecules, temperature gauge rises as CO₂ increases, at max matches Venus conditions. Compare Earth, Mars, Venus levels.]', ageRange: '7+' },
            { id: 'temp_tournament', type: 'sort', title: 'Planet Temperature Tournament', instruction: 'Rank all 8 planets from hottest to coldest surface temperature. The answer will surprise you!', placeholder: '[INTERACTIVE: 8 planet cards with question marks on temperatures, drag to order hottest to coldest. Reveal answers: Venus hottest despite Mercury being closer to Sun]', ageRange: '8+' },
            { id: 'venus_from_earth', type: 'observe', title: 'Venus in the Night Sky', instruction: 'Watch Venus move across the sky over 6 weeks as the morning star and evening star.', placeholder: '[TIMELAPSE ANIMATION: Venus position over 6 weeks near the horizon at dawn and dusk. Narrator explains why it is so bright.]', ageRange: '6+' },
          ],

          assessment: {
            questions: [
              { type: 'multiple_choice', q: 'Why is Venus hotter than Mercury even though Mercury is closer to the Sun?', options: ['Venus is bigger', 'Venus has a thick CO₂ atmosphere that traps heat', 'Venus has more volcanoes', 'Mercury is actually hotter — you have the wrong answer'], answer: 'Venus has a thick CO₂ atmosphere that traps heat', explanation: 'The greenhouse effect caused by CO₂ in Venus\'s atmosphere traps heat so effectively that temperatures never drop — even on the night side.', level: 'understanding' },
              { type: 'multiple_choice', q: 'What is the greenhouse effect?', options: ['Growing plants in glass houses', 'When an atmosphere traps heat from the Sun', 'When a planet has no atmosphere', 'When a planet is very close to the Sun'], answer: 'When an atmosphere traps heat from the Sun', explanation: 'Greenhouse gases like CO₂ allow sunlight in but prevent heat from escaping, raising temperatures — like how the inside of a car gets hot in sunlight.', level: 'knowledge' },
              { type: 'multiple_choice', q: 'Why does studying Venus matter for Earth today?', options: ['It does not matter at all', 'It shows us how greenhouse gases can push a planet to uninhabitable temperatures', 'It helps us find water on other planets', 'It tells us about alien life'], answer: 'It shows us how greenhouse gases can push a planet to uninhabitable temperatures', explanation: 'Venus experienced a runaway greenhouse effect that destroyed its oceans and made it uninhabitable. Understanding this process helps climate scientists understand the risks of rising CO₂ on Earth.', level: 'application' },
            ],
          },

          mastery: { threshold: 80, badge: 'Greenhouse Explorer', badgeImage: '[BADGE_IMAGE: Greenhouse Explorer badge with Venus cloud swirl design]', reward: 'Climate science advanced pathway unlocked', rewardImage: '[REWARD_IMAGE: climate science pathway unlock animation]' },
        },

        // ─── LESSON 5: EARTH ────────────────────────────────────────
        {
          id: 'earth',
          title: 'Earth: Our Living Planet',
          objective: 'Identify the unique conditions that make Earth habitable — liquid water, oxygen, magnetic field, and position in the habitable zone',
          ageRange: '4-9',
          difficulty: 'foundation',
          xp: 80,
          heroImage: '[LESSON_HERO: Earth from space — the Blue Marble, full disk showing oceans, clouds, continents]',

          narrator: {
            foundation: 'From space, Earth looks like a beautiful blue marble — and it is the most special place we know of in the entire universe. Earth has liquid water covering 71% of its surface. It has oxygen in its atmosphere. It has a magnetic field that shields us from harmful radiation. And it sits at exactly the right distance from the Sun — not too hot, not too cold. Earth is in the habitable zone. And as far as we know, it is the only planet with life.',
            explore: 'Earth sits in the habitable zone — sometimes called the Goldilocks Zone — at just the right distance from the Sun for liquid water to exist. Its magnetic field, generated by a liquid iron outer core, deflects charged particles from the Sun. Its atmosphere of 78% nitrogen and 21% oxygen supports life and creates weather. Earth is also the only planet with active plate tectonics, which recycles carbon and regulates climate over millions of years.',
            mastery: 'The conditions for life — CHNOPS elements, liquid water as a biochemical solvent, an energy source, and a stable environment — define what astrobiologists call the requirements for habitability. Earth\'s large Moon stabilizes its axial tilt, preventing the wild climate swings Mars experiences. Earth\'s plate tectonics operate a carbon cycle that regulates long-term climate. Every one of these factors interacts — Earth is a system, not a collection of features.',
          },

          whyItMatters: 'Understanding what makes Earth special motivates environmental protection. It also drives the search for life elsewhere — every condition we identify as necessary for life on Earth becomes a target to search for on other worlds.',

          vocabulary: [
            { word: 'habitable zone', phonetic: 'HAB-ih-tah-bul zohn', definition: 'The region around a star where temperatures allow liquid water to exist on a planet\'s surface', example: 'Earth sits perfectly in the Sun\'s habitable zone.', image: '[VOCAB_IMAGE: star with three zones labeled — too hot (Venus), just right (Earth), too cold (Mars)]' },
            { word: 'magnetic field', phonetic: 'mag-NET-ik feeld', definition: "An invisible region of magnetic force around a planet, generated by its iron core", example: 'Earth\'s magnetic field deflects harmful charged particles from the Sun.', image: '[VOCAB_IMAGE: Earth with magnetic field lines shown deflecting solar wind particles]' },
            { word: 'plate tectonics', phonetic: 'playt tek-TON-iks', definition: 'The movement of large sections of Earth\'s outer crust, causing earthquakes, volcanoes, and mountain building', example: 'Plate tectonics created the Himalayas when India collided with Asia over millions of years.', image: '[VOCAB_IMAGE: map showing tectonic plate boundaries with arrows showing movement directions]' },
            { word: 'biodiversity', phonetic: 'by-oh-dih-VER-sih-tee', definition: 'The variety of life forms on Earth — millions of species of plants, animals, fungi, and microbes', example: 'A coral reef contains extraordinary biodiversity — thousands of species in a small area.', image: '[VOCAB_IMAGE: collage of diverse species — coral reef, rainforest, tundra, deep sea]' },
          ],

          activities: [
            { id: 'earth_layers', type: 'explore', title: 'Earth Layer Explorer', instruction: 'Tap each layer of Earth to learn its name, composition, and thickness.', placeholder: '[INTERACTIVE: Earth cross-section with 4 layers. Tap each: crust (5-70km, solid rock), mantle (2,900km, semi-molten), outer core (liquid iron/nickel), inner core (solid iron, 1,220km radius). Each tap = highlight + narrator line + temperature display]', ageRange: '6+' },
            { id: 'habitable_sim', type: 'simulate', title: 'Find the Habitable Zone', instruction: 'Drag a planet closer to or farther from a star and watch what happens to its water.', placeholder: '[SIMULATION: Adjustable star, planet on slider. Too close = water boils (steam animation). Just right = oceans appear. Too far = water freezes (ice animation). "Goldilocks Zone" label appears at correct distance]', ageRange: '7+' },
            { id: 'life_match', type: 'match', title: 'What Makes Earth Special?', instruction: 'Match each Earth feature to what it does for life.', placeholder: '[INTERACTIVE MATCH: Features: Liquid water, Oxygen, Magnetic field, Ozone layer, Plate tectonics. Match to roles: biochemistry/life processes, breathing/combustion, blocks solar radiation, blocks UV radiation, regulates carbon cycle]', ageRange: '8+' },
            { id: 'design_planet', type: 'create', title: 'Design an Earth-Like Planet', instruction: 'Choose your planet\'s distance from its star, atmosphere, and water level. Can life survive there?', placeholder: '[INTERACTIVE CREATOR: Sliders for distance from star (1-10), atmosphere thickness (none/thin/thick), water coverage (0-100%). Narrator evaluates: "Too hot for liquid water", "No oxygen for complex life", "This planet could support life!" etc.]', ageRange: '9+' },
          ],

          assessment: {
            questions: [
              { type: 'multiple_choice', q: 'What percentage of Earth\'s surface is covered by water?', options: ['30%', '50%', '71%', '90%'], answer: '71%', explanation: 'About 71% of Earth\'s surface is ocean. This is why Earth looks so blue from space and is sometimes called the Blue Planet.', level: 'knowledge' },
              { type: 'multiple_choice', q: 'What does Earth\'s magnetic field protect us from?', options: ['Earthquakes', 'Volcanic eruptions', 'Harmful charged particles from the Sun', 'Large meteorites'], answer: 'Harmful charged particles from the Sun', explanation: 'Earth\'s magnetic field acts like a shield, deflecting the solar wind — streams of charged particles from the Sun that would strip away our atmosphere and damage DNA over time.', level: 'knowledge' },
              { type: 'multiple_choice', q: 'What is the habitable zone?', options: ['Where plants can grow on Earth', 'The region around a star where liquid water can exist', 'The area of Earth with the best weather', 'Where the magnetic field is strongest'], answer: 'The region around a star where liquid water can exist', explanation: 'The habitable zone — also called the Goldilocks Zone — is where temperatures allow liquid water. Venus is too hot, Mars is too cold, and Earth is just right.', level: 'knowledge' },
              { type: 'multiple_choice', q: 'If Earth were moved twice as far from the Sun, what would most likely happen?', options: ['More water would evaporate', 'Temperatures would stay the same', 'Liquid water would freeze and life would struggle to survive', 'Water would disappear entirely'], answer: 'Liquid water would freeze and life would struggle to survive', explanation: 'Moving Earth twice as far from the Sun would reduce solar heating dramatically. Temperatures would drop far below freezing, liquid water would not exist at the surface, and most life could not survive.', level: 'application' },
            ],
          },

          mastery: { threshold: 80, badge: 'Earth Guardian', badgeImage: '[BADGE_IMAGE: Earth Guardian badge with Blue Marble design, green and blue border]', reward: 'Planetary life advanced pathway unlocked + Earth orbit animated background', rewardImage: '[REWARD_IMAGE: animated Earth from space background preview]' },
        },

        // ─── LESSONS 6-9: MARS, JUPITER, SATURN, ICE GIANTS ───────
        // (Following same schema — abbreviated for space)
        {
          id: 'mars',
          title: 'Mars: The Red Planet',
          objective: 'Describe Mars\'s key features, exploration history, and the evidence for ancient liquid water',
          ageRange: '6-10',
          difficulty: 'foundation',
          xp: 90,
          heroImage: '[LESSON_HERO: Mars surface with Perseverance rover in foreground, reddish rocky terrain, pale pink sky]',
          narrator: {
            foundation: 'Mars is called the Red Planet because its surface is covered with iron oxide — rust! It has the tallest volcano in the solar system, Olympus Mons, three times taller than Mount Everest. It has a canyon wider than the United States. And right now, a robot named Perseverance is driving across its rusty surface, collecting rock samples and searching for signs of ancient life. Mars once had liquid water. Ancient riverbeds and mineral deposits prove it.',
            explore: 'Mars once had liquid water flowing across its surface. Ancient valley networks, lake beds, and minerals that only form in water tell us Mars was once a warmer, wetter world about 3.5 billion years ago. Its magnetic field died early in Mars\'s history, allowing the solar wind to strip away its thick atmosphere. Today Mars has a thin CO₂ atmosphere at less than 1% of Earth\'s pressure. Its two moons, Phobos and Deimos, may be captured asteroids.',
            mastery: 'Mars colonization presents engineering challenges at every level. The thin atmosphere provides almost no radiation shielding. Average temperatures of -60°C require continuous heating. Dust storms can cover the planet for months. The 20-minute communication delay with Earth requires high autonomy. Water ice exists at the poles and underground, but extraction requires energy. In-situ resource utilization — using Martian materials for fuel, water, and oxygen — is central to all colonization plans.',
          },
          whyItMatters: 'Mars is the most likely next home for humans beyond Earth. Understanding its history, resources, and challenges is not abstract astronomy — it is preparation for one of the most important journeys humanity will ever take.',
          vocabulary: [
            { word: 'iron oxide', phonetic: 'EYE-ern OK-syd', definition: 'A compound of iron and oxygen atoms — commonly known as rust — covers Mars and gives it its red color', example: 'Mars gets its red color from iron oxide coating its rocks and soil.', image: '[VOCAB_IMAGE: rusty iron next to Mars photo — same reddish color comparison]' },
            { word: 'rover', phonetic: 'ROH-ver', definition: 'A robotic vehicle designed to move across the surface of another world and conduct scientific experiments', example: 'NASA\'s Perseverance rover has been exploring Mars since February 2021.', image: '[VOCAB_IMAGE: Perseverance rover on Mars surface, wheels and instruments labeled]' },
            { word: 'terraforming', phonetic: 'TAIR-uh-form-ing', definition: 'The hypothetical process of transforming a planet\'s environment to be more suitable for human life', example: 'Scientists debate whether terraforming Mars — thickening its atmosphere and warming its surface — is possible or ethical.', image: '[VOCAB_IMAGE: split image — Mars today (red/barren) vs terraformed Mars (blue oceans, green land)]' },
            { word: 'sol', phonetic: 'sol', definition: 'One Martian day — approximately 24 hours and 37 minutes', example: 'The Perseverance rover drove 150 meters in the last sol.', image: '[VOCAB_IMAGE: Earth clock vs Mars clock — Mars clock showing slightly longer day]' },
          ],
          activities: [
            { id: 'rover_drive', type: 'explore', title: 'Drive the Rover', instruction: 'Control the Perseverance rover across the Martian terrain. Photograph rocks and collect samples.', placeholder: '[INTERACTIVE: Top-down Mars terrain map. D-pad controls move rover. Tap rocks to "photograph" them. Collect 5 samples to complete mission. Distance counter, battery level display]', ageRange: '6+' },
            { id: 'mars_base', type: 'build', title: 'Design a Mars Base', instruction: 'Place habitat modules, solar panels, water extractors, and greenhouses to build a Mars colony.', placeholder: '[INTERACTIVE: Grid-based Mars surface. Component catalog: habitat dome, solar array, water drill, greenhouse, airlock, rover bay. Drag and place. Each component shows what it does. "Colony Viability" score updates]', ageRange: '8+' },
            { id: 'earth_mars_compare', type: 'compare', title: 'Earth vs Mars', instruction: 'Compare Earth and Mars side by side across six key measurements.', placeholder: '[INTERACTIVE COMPARISON: Side-by-side bars for: Temperature (Earth avg 15°C vs Mars avg -60°C), Atmosphere (thick vs thin), Gravity (1g vs 0.38g), Day length (24h vs 24h37m), Magnetic field (yes vs no), Moons (1 vs 2). Tap any row to learn more.]', ageRange: '8+' },
          ],
          assessment: {
            questions: [
              { type: 'multiple_choice', q: 'What gives Mars its red color?', options: ['Volcanic rock', 'Frozen CO₂', 'Iron oxide (rust)', 'Red sand blown from Earth'], answer: 'Iron oxide (rust)', explanation: 'Iron oxide — the same compound that forms rust on iron and steel — covers Mars\'s rocks and soil, giving the entire planet its characteristic red-orange color.', level: 'knowledge' },
              { type: 'multiple_choice', q: 'What evidence shows Mars once had liquid water?', options: ['Mars has oceans today', 'Ancient riverbeds, lake beds, and water-formed minerals have been found', 'Mars has polar ice caps', 'Mars currently has rain'], answer: 'Ancient riverbeds, lake beds, and water-formed minerals have been found', explanation: 'Orbital imaging and rover analysis have found ancient valley networks carved by flowing water, sedimentary rock layers formed in lakes, and minerals like clay and sulfates that only form in the presence of liquid water.', level: 'knowledge' },
              { type: 'multiple_choice', q: 'What is the biggest challenge for humans living on Mars?', options: ['The gravity is too strong', 'Thin atmosphere, radiation, extreme cold, and no liquid water at the surface', 'Too many volcanoes', 'The Sun looks too big from Mars'], answer: 'Thin atmosphere, radiation, extreme cold, and no liquid water at the surface', explanation: 'Mars colonization faces multiple simultaneous engineering challenges: radiation exposure without a magnetic field, temperatures averaging -60°C, atmospheric pressure too low to breathe or to keep liquid water, and dust storms that can last months.', level: 'reasoning' },
            ],
          },
          mastery: { threshold: 80, badge: 'Mars Explorer', badgeImage: '[BADGE_IMAGE: Mars Explorer badge with rover tracks design, red and orange border]', reward: 'Mars rover companion character + Mars landscape background', rewardImage: '[REWARD_IMAGE: Mars landscape animated background preview]' },
        },

        {
          id: 'jupiter',
          title: 'Jupiter: King of the Planets',
          objective: 'Understand Jupiter\'s size dominance, composition as a gas giant, the Great Red Spot, and its protective role in the solar system',
          ageRange: '6-10',
          difficulty: 'foundation',
          xp: 85,
          heroImage: '[LESSON_HERO: Jupiter full disk — cloud bands, Great Red Spot prominent, four Galilean moons visible]',
          narrator: {
            foundation: 'Jupiter is the largest planet in our solar system — so large that all other planets could fit inside it with room to spare. But Jupiter is not made of rock like Earth. It is made almost entirely of gas — mostly hydrogen and helium. If you tried to land on Jupiter, you would just sink right through! That giant red storm you can see — it has been swirling for over 350 years and it is bigger than our entire planet.',
            explore: 'Jupiter is a gas giant with no solid surface — its layers transition gradually from gas to liquid hydrogen to metallic hydrogen deep inside. The Great Red Spot is an anticyclonic storm rotating counterclockwise in the southern hemisphere. Galileo discovered Jupiter\'s four largest moons in 1610: Io (intensely volcanic), Europa (ocean under ice), Ganymede (largest moon in solar system), and Callisto (heavily cratered). Europa is considered one of the best candidates for finding extraterrestrial life.',
            mastery: 'Jupiter\'s gravitational dominance shaped the entire solar system. During the Grand Tack — a period of orbital migration early in solar system history — Jupiter\'s gravity swept through the inner solar system, clearing out most of the material that might have formed a fifth rocky planet. This is why the asteroid belt exists. Jupiter\'s rapid 10-hour rotation drives the most powerful electromagnetic fields of any planet, creating intense radiation belts that would be lethal to unshielded spacecraft.',
          },
          whyItMatters: 'Jupiter acts as a shield for the inner solar system, deflecting or capturing many asteroids and comets that would otherwise reach Earth. Without Jupiter, large impact events on Earth would be far more frequent. Understanding Jupiter also gives us a window into how giant planet systems work — and giant planets are common around other stars.',
          vocabulary: [
            { word: 'gas giant', phonetic: 'gas JY-ant', definition: 'A large planet composed mainly of hydrogen and helium with no solid surface', example: 'Jupiter and Saturn are gas giants — you cannot land on them.', image: '[VOCAB_IMAGE: gas giant cutaway showing gas-to-liquid-to-metallic hydrogen layers]' },
            { word: 'Great Red Spot', phonetic: 'grayt red spot', definition: 'A persistent anticyclonic storm on Jupiter, larger than Earth, that has lasted more than 350 years', example: 'The Great Red Spot is one of the most enduring weather systems in the solar system.', image: '[VOCAB_IMAGE: close-up of Great Red Spot with Earth to scale beside it]' },
            { word: 'Galilean moons', phonetic: 'gal-ih-LEE-un moonz', definition: 'The four largest moons of Jupiter — Io, Europa, Ganymede, and Callisto — discovered by Galileo in 1610', example: 'The Galilean moons were the first objects discovered orbiting something other than Earth or the Sun.', image: '[VOCAB_IMAGE: Jupiter with four Galilean moons labeled to scale]' },
            { word: 'metallic hydrogen', phonetic: 'meh-TAL-ik HY-droh-jen', definition: 'Hydrogen under such extreme pressure that it conducts electricity like a metal', example: 'Deep inside Jupiter, pressure is so intense that hydrogen behaves like a liquid metal.', image: '[VOCAB_IMAGE: depth diagram of Jupiter showing hydrogen gas → liquid hydrogen → metallic hydrogen layers]' },
          ],
          activities: [
            { id: 'fill_jupiter', type: 'scale', title: 'How Many Earths Fit Inside Jupiter?', instruction: 'Keep adding Earth-sized spheres to Jupiter until it is full. Count them!', placeholder: '[INTERACTIVE: Jupiter shown to scale. Tap to add Earth-sized spheres. Counter shows how many added. When full shows "1,321 Earths fit inside Jupiter!" with celebratory animation]', ageRange: '5+' },
            { id: 'moon_tour', type: 'explore', title: 'Galilean Moon Tour', instruction: 'Visit all four Galilean moons. Tap each one to discover what makes it unique.', placeholder: '[INTERACTIVE: Orbit view of Jupiter with four labeled moons. Tap each: Io (volcanic hellscape, hundreds of active volcanoes), Europa (ice shell, subsurface ocean, possible life), Ganymede (largest moon, bigger than Mercury), Callisto (ancient heavily cratered surface)]', ageRange: '7+' },
            { id: 'red_spot_probe', type: 'simulate', title: 'Storm Probe Mission', instruction: 'Send a probe into the Great Red Spot and measure the wind speeds at different depths.', placeholder: '[SIMULATION: Animated storm cutaway. Probe descends through layers. Wind speed meter reads: 500 km/h near surface, increasing with depth. Color intensity shows storm energy. Compare to Earth hurricanes (250 km/h max)]', ageRange: '8+' },
          ],
          assessment: {
            questions: [
              { type: 'multiple_choice', q: 'How many Earths could fit inside Jupiter?', options: ['100', '500', '1,321', '10,000'], answer: '1,321', explanation: 'Jupiter\'s volume is so enormous that approximately 1,321 Earth-sized spheres could fit inside it. Jupiter alone accounts for 71% of all planetary mass in the solar system.', level: 'knowledge' },
              { type: 'multiple_choice', q: 'What is the Great Red Spot?', options: ['A volcano', 'A sea of red liquid', 'A storm that has lasted over 350 years', 'A region of red rock'], answer: 'A storm that has lasted over 350 years', explanation: 'The Great Red Spot is an anticyclonic storm — rotating opposite to a cyclone — that has been observed for over 350 years. It is slowly shrinking but remains larger than Earth.', level: 'knowledge' },
              { type: 'multiple_choice', q: 'Which Galilean moon is most exciting for the search for life?', options: ['Io because of its volcanoes', 'Europa because of its subsurface ocean', 'Ganymede because it is largest', 'Callisto because it is oldest'], answer: 'Europa because of its subsurface ocean', explanation: 'Europa has a liquid water ocean under its icy crust, estimated to contain twice the water of all Earth\'s oceans. Liquid water plus a chemical energy source makes Europa a prime target for the search for extraterrestrial life.', level: 'reasoning' },
            ],
          },
          mastery: { threshold: 80, badge: 'Giant Tamer', badgeImage: '[BADGE_IMAGE: Giant Tamer badge with Jupiter storm design, purple and gold border]', reward: 'Jupiter storm animated profile background', rewardImage: '[REWARD_IMAGE: animated Jupiter storm background preview]' },
        },
      ], // end solar_system lessons
    }, // end solar_system subworld

    // ══════════════════════════════════════════════
    // SUBWORLD 2 — STARS & THE COSMOS
    // ══════════════════════════════════════════════
    {
      id: 'stars_cosmos',
      name: 'Stars & the Cosmos',
      subtitle: 'Birth, life, and death of stars',
      unlocked: true,
      bgImage: '[SUBWORLD_BG: Deep star field, Milky Way band visible, nebulae in background]',
      ambientSound: 'deep_space_ambient',
      color: '#3AB5D4',

      lessons: [
        {
          id: 'what_is_a_star',
          title: 'What Is a Star?',
          objective: 'Identify stars as massive plasma spheres powered by nuclear fusion, categorize by color and temperature',
          ageRange: '5-10',
          difficulty: 'foundation',
          xp: 80,
          heroImage: '[LESSON_HERO: Star types lineup — blue supergiant, white star, yellow dwarf (Sun), orange giant, red dwarf — all to scale]',
          narrator: {
            foundation: 'Every single point of light you see in the night sky is a star — a sun just like ours, but unimaginably far away. Stars are made of plasma — a superheated form of matter. They produce energy through nuclear fusion. Stars come in different sizes and colors. Blue stars are the hottest and most massive. Red stars are the coolest. Our Sun is a medium yellow star. The color of a star tells you its temperature.',
            explore: 'A star forms from a nebula — a giant cloud of gas and dust. Gravity pulls the cloud together until the center becomes so hot and dense that nuclear fusion ignites. A star spends most of its life on what astronomers call the main sequence — stably fusing hydrogen. The more massive a star, the hotter, brighter, and shorter-lived it is. A star like the Sun lasts 10 billion years. A massive blue star burns out in just a few million years.',
            mastery: 'The Hertzsprung-Russell diagram plots stars by luminosity versus surface temperature, revealing the main sequence, giant branches, and white dwarf region. Stars are classified by spectral type — O, B, A, F, G, K, M — from hottest blue to coolest red. Our Sun is a G2V star. The parallax method measures stellar distances up to about 1,000 light-years using apparent star movement as Earth orbits the Sun.',
          },
          whyItMatters: 'Stars are the fundamental building blocks of the universe. They created every element heavier than hydrogen and helium — including the carbon, oxygen, iron, and calcium in our bodies. Understanding stars is understanding where we came from.',
          vocabulary: [
            { word: 'plasma', phonetic: 'PLAZ-mah', definition: 'A superheated state of matter where electrons are stripped from atoms — makes up stars', example: 'Stars are not made of fire — they are made of plasma, a fourth state of matter beyond solid, liquid, and gas.', image: '[VOCAB_IMAGE: four states of matter: solid ice → liquid water → steam gas → glowing plasma star]' },
            { word: 'light-year', phonetic: 'lyte-year', definition: 'The distance light travels in one year — about 9.5 trillion kilometers', example: 'The nearest star to our Sun, Proxima Centauri, is 4.2 light-years away.', image: '[VOCAB_IMAGE: scale diagram — 1 light-year vs distance from Earth to Sun (1 AU) to scale]' },
            { word: 'luminosity', phonetic: 'loo-min-OS-ih-tee', definition: 'The total energy output of a star — how much light and heat it produces per second', example: 'The blue supergiant Rigel has a luminosity 120,000 times greater than the Sun.', image: '[VOCAB_IMAGE: dimmer switch analogy — low luminosity dim star vs high luminosity blazing star]' },
            { word: 'nebula', phonetic: 'NEB-yoo-lah', definition: 'A cloud of gas and dust in space — the birthplace of new stars', example: 'The Orion Nebula is a stellar nursery where hundreds of new stars are forming right now.', image: '[VOCAB_IMAGE: Orion Nebula photograph — colorful gas cloud with bright young stars forming inside]' },
            { word: 'main sequence', phonetic: 'mayn SEE-kwens', definition: 'The stable phase of a star\'s life when it fuses hydrogen in its core — where most stars spend most of their lives', example: 'Our Sun has been on the main sequence for 4.6 billion years and has about 5 billion years left.', image: '[VOCAB_IMAGE: H-R diagram with main sequence band highlighted, Sun\'s position marked]' },
          ],
          activities: [
            { id: 'star_color_sort', type: 'sort', title: 'Sort Stars by Temperature', instruction: 'Sort these 10 stars into temperature categories based on their color.', placeholder: '[INTERACTIVE: 10 star cards showing colors from deep red to brilliant blue. Sort into bins: Cool Red (under 4,000K), Warm Orange (4,000-5,000K), Yellow (5,000-6,000K), White (6,000-10,000K), Hot Blue (over 10,000K). Reveal actual star names after sorting.]', ageRange: '6+' },
            { id: 'star_factory', type: 'build', title: 'Star Factory', instruction: 'Compress a nebula cloud until nuclear fusion ignites and your star is born!', placeholder: '[SIMULATION: Gas cloud on screen. Pinch/drag gesture compresses it. Temperature meter rises. Gravity indicator grows. At critical density: flash animation, star ignites, narrator "Your star is born!" Show resulting star type based on how much mass was compressed]', ageRange: '7+' },
            { id: 'hr_diagram', type: 'explore', title: 'Hertzsprung-Russell Diagram', instruction: 'Explore the H-R diagram. Tap any star on the diagram to see its name, type, and stats.', placeholder: '[INTERACTIVE: Full H-R diagram with real star positions plotted. Tap zones: main sequence, red giants, white dwarfs. Each shows 3-4 example stars with name, temperature, luminosity, lifetime. Sun highlighted in yellow.]', ageRange: '9+' },
          ],
          assessment: {
            questions: [
              { type: 'multiple_choice', q: 'What color are the hottest stars?', options: ['Red', 'Yellow', 'White', 'Blue'], answer: 'Blue', explanation: 'Star color directly indicates surface temperature. Blue stars are hottest (over 30,000°C), white are very hot, yellow are medium like our Sun, orange are cooler, and red are the coolest (under 4,000°C).', level: 'knowledge' },
              { type: 'multiple_choice', q: 'What process powers a star?', options: ['Burning gas like a campfire', 'Nuclear fission', 'Nuclear fusion', 'Electrical charge'], answer: 'Nuclear fusion', explanation: 'Stars fuse light elements (primarily hydrogen) into heavier ones (helium), releasing enormous energy in the process. This is different from nuclear fission (splitting atoms) used in nuclear power plants.', level: 'knowledge' },
              { type: 'multiple_choice', q: 'A star 50 times more massive than the Sun — how does its lifetime compare?', options: ['It lives 50 times longer', 'It lives about the same length', 'It lives far shorter — burning out in millions instead of billions of years', 'It never dies'], answer: 'It lives far shorter — burning out in millions instead of billions of years', explanation: 'More massive stars fuse hydrogen far faster to support their larger size. The most massive stars burn through their fuel in just a few million years, while the Sun will last 10 billion years.', level: 'reasoning' },
            ],
          },
          mastery: { threshold: 80, badge: 'Star Scholar', badgeImage: '[BADGE_IMAGE: Star Scholar badge with constellation design, silver and blue border]', reward: 'Stellar spectral type reference guide + star field profile background', rewardImage: '[REWARD_IMAGE: animated star field background preview]' },
        },

        {
          id: 'star_lifecycle',
          title: 'The Life Cycle of a Star',
          objective: 'Trace the complete life cycle of stars from nebula to final state, with paths determined by initial mass',
          ageRange: '7-12',
          difficulty: 'foundation',
          xp: 95,
          heroImage: '[LESSON_HERO: Star life cycle infographic — nebula → protostar → main sequence → red giant → two paths: white dwarf or supernova → neutron star/black hole]',
          narrator: {
            foundation: 'Stars are born, live for millions or billions of years, and then die — and their death creates new beginnings. A star begins as a collapsing cloud of gas and dust. It ignites and burns steadily for billions of years. When fuel runs out, it swells into a red giant. A star like the Sun will eventually become a small dense object called a white dwarf. But a massive star ends in a spectacular explosion called a supernova — so bright it can outshine an entire galaxy for weeks.',
            explore: 'A star like the Sun follows this path: nebula → protostar → main sequence for 10 billion years → red giant → planetary nebula → white dwarf. A star much more massive than the Sun: nebula → massive main sequence star for a few million years → red supergiant → supernova → either a neutron star or, if massive enough, a black hole. The supernova explosion forges all elements heavier than iron — including gold, platinum, and uranium — and scatters them into space.',
            mastery: 'The mass of a star at birth determines everything. The Chandrasekhar limit — 1.4 solar masses — divides white dwarfs that cool quietly from those that can explode as Type Ia supernovae. Neutron stars collapse so densely that protons and electrons merge into neutrons, creating a sphere about 20 km across with the mass of the Sun. Some neutron stars pulse as pulsars — precise cosmic clocks emitting radio beams as they rotate. The most massive cores collapse into black holes.',
          },
          whyItMatters: 'The life cycle of stars is the story of where all the elements we are made of came from. Carbon, oxygen, nitrogen, iron — all created in stellar furnaces and scattered by stellar deaths. We are literally made of stardust from stars that died billions of years before our Sun was born.',
          vocabulary: [
            { word: 'supernova', phonetic: 'soo-per-NOH-vah', definition: 'The catastrophic explosion of a massive star at the end of its life, briefly outshining entire galaxies', example: 'The supernova of 1987 in the Large Magellanic Cloud was visible to the naked eye from Earth.', image: '[VOCAB_IMAGE: supernova remnant — expanding colorful shell of gas and dust, neutron star at center]' },
            { word: 'neutron star', phonetic: 'NOO-tron star', definition: 'The incredibly dense remnant of a supernova — 1.5 solar masses compressed into a sphere about 20 km across', example: 'A teaspoon of neutron star material would weigh about a billion tonnes on Earth.', image: '[VOCAB_IMAGE: neutron star to scale — tiny glowing sphere vs Earth and Sun for comparison]' },
            { word: 'white dwarf', phonetic: 'wite dworf', definition: 'The small, dense, cooling remnant of a medium star after it sheds its outer layers as a planetary nebula', example: 'Our Sun will become a white dwarf about the size of Earth in approximately 5 billion years.', image: '[VOCAB_IMAGE: white dwarf shown with surrounding planetary nebula, Earth to scale for size comparison]' },
            { word: 'red giant', phonetic: 'red JY-ant', definition: 'A late-stage star that has expanded enormously as hydrogen in its core runs out', example: 'When our Sun becomes a red giant, it will expand to engulf Mercury and Venus.', image: '[VOCAB_IMAGE: red giant with current Sun size shown as tiny dot for comparison, Mercury and Venus orbits inside the giant]' },
            { word: 'stardust', phonetic: 'STAR-dust', definition: 'The elements forged in stars and scattered through the universe by stellar winds and supernovae', example: 'Every atom of gold, iron, and calcium in your body is stardust from stars that exploded before our solar system formed.', image: '[VOCAB_IMAGE: human body silhouette with element names labeled — carbon, oxygen, iron, etc. with arrows to stars they came from]' },
          ],
          activities: [
            { id: 'lifecycle_order', type: 'sequence', title: 'Order the Life Cycle', instruction: 'Arrange these 8 stages of a star\'s life in the correct order for a Sun-like star.', placeholder: '[INTERACTIVE: 8 illustrated stage cards scrambled: Nebula, Protostar, Main Sequence Star, Red Giant, Planetary Nebula, White Dwarf, Black Dwarf, (and Supernova as distractor). Drag to order. Narrator confirms or corrects each placement.]', ageRange: '8+' },
            { id: 'choose_fate', type: 'simulate', title: 'Choose Your Star\'s Fate', instruction: 'Select a star mass on the slider — then watch its entire life unfold from birth to death.', placeholder: '[SIMULATION: Mass slider: 0.1 to 50 solar masses. At low mass: red dwarf, slow life, white dwarf end. At 1 solar mass: Sun-like life, planetary nebula, white dwarf. At 10+: massive star, spectacular life, supernova, neutron star. At 25+: supernova, black hole. Full animated life shown in timelapse.]', ageRange: '9+' },
            { id: 'we_are_stardust', type: 'story', title: 'We Are Stardust', instruction: 'Follow a single carbon atom through time — from inside an ancient star to inside you right now.', placeholder: '[NARRATIVE EXPERIENCE: Animated journey of a carbon atom. Chapter 1: Formed in a red giant 8 billion years ago. Chapter 2: Scattered in supernova explosion. Chapter 3: Drifted through space for 3 billion years. Chapter 4: Caught in cloud that formed our solar system. Chapter 5: Part of Earth\'s ocean. Chapter 6: Absorbed by a plant. Chapter 7: Part of you. "This atom is you. You are stardust."]', ageRange: '7+' },
          ],
          assessment: {
            questions: [
              { type: 'multiple_choice', q: 'What is the birthplace of stars?', options: ['Black holes', 'Supernovae', 'Nebulae', 'Galaxies'], answer: 'Nebulae', explanation: 'Stars form inside nebulae — giant clouds of gas (mostly hydrogen) and dust. Gravity causes regions of the cloud to collapse, heat up, and eventually ignite nuclear fusion.', level: 'knowledge' },
              { type: 'multiple_choice', q: 'What will the Sun become when it runs out of hydrogen fuel?', options: ['A black hole', 'A supernova then neutron star', 'A red giant, then eventually a white dwarf', 'It will simply go dark'], answer: 'A red giant, then eventually a white dwarf', explanation: 'The Sun is not massive enough to explode as a supernova. It will expand into a red giant, then gently shed its outer layers as a planetary nebula, leaving behind a white dwarf that will cool for billions of years.', level: 'knowledge' },
              { type: 'multiple_choice', q: 'Where did the carbon, iron, and calcium atoms in your body come from?', options: ['They formed on Earth', 'They were created in the Big Bang', 'They were forged inside stars and scattered by supernovae billions of years ago', 'They came to Earth on comets'], answer: 'They were forged inside stars and scattered by supernovae billions of years ago', explanation: 'Only hydrogen and helium formed in the Big Bang. All heavier elements — including every carbon atom in your DNA and every iron atom in your blood — were created by nuclear fusion inside stars and dispersed when those stars died.', level: 'understanding' },
              { type: 'multiple_choice', q: 'A star 30 times more massive than the Sun — what is its most likely final state?', options: ['A white dwarf', 'A red giant only', 'A neutron star or black hole after a supernova explosion', 'A new star'], answer: 'A neutron star or black hole after a supernova explosion', explanation: 'Stars over about 8 solar masses end in supernova explosions. The remnant core collapses — if 1.4-3 solar masses remain, it becomes a neutron star. If more than about 3 solar masses remain, gravity overwhelms all other forces and a black hole forms.', level: 'application' },
            ],
          },
          mastery: { threshold: 85, badge: 'Life Cycle Master', badgeImage: '[BADGE_IMAGE: Life Cycle Master badge with supernova spiral design, gold and white border]', reward: 'Supernova explosion animated badge + We Are Stardust interactive story unlocked', rewardImage: '[REWARD_IMAGE: supernova expansion animation preview]' },
        },

        {
          id: 'constellations',
          title: 'Constellations: Stories in the Stars',
          objective: 'Identify 8 major constellations, understand their cultural significance, and explain that they are patterns of perspective not physical groupings',
          ageRange: '4-10',
          difficulty: 'foundation',
          xp: 70,
          heroImage: '[LESSON_HERO: Clear night sky with Orion constellation lines drawn in gold, stars twinkling]',
          narrator: {
            foundation: 'Look up at the night sky and you will see patterns! For thousands of years, people everywhere looked at the same stars and imagined animals, heroes, and gods. These patterns are called constellations. There are 88 official constellations. The stars in a constellation look close together from Earth — but in reality they are billions of kilometers apart in space. Constellations exist only in our perspective from Earth.',
            explore: 'Constellations are officially defined regions of the sky — like countries on a map — not just the star patterns. The 88 modern constellations were formalized by the International Astronomical Union in 1930. Many come from ancient Greek and Roman mythology. Indigenous cultures worldwide developed their own rich constellation traditions — the Aboriginal Australians identified dark constellations in the Milky Way\'s dust clouds, not just bright stars.',
            mastery: 'The apparent positions of constellations change with the seasons as Earth orbits the Sun, and with latitude — constellations visible from Australia differ from those visible in Norway. Precession — the slow wobble of Earth\'s axis over a 26,000-year cycle — gradually shifts which stars are visible and was responsible for the ancient Egyptian alignment of pyramids to specific stars that are no longer in those positions.',
          },
          whyItMatters: 'Constellations connect astronomy to culture, history, navigation, and storytelling. They remind us that the night sky has been shared by every human who ever lived — from ancient Egyptians to modern city dwellers. Learning constellations is learning to read the oldest story humans ever told.',
          vocabulary: [
            { word: 'constellation', phonetic: 'kon-steh-LAY-shun', definition: 'An officially recognized pattern of stars in the night sky — also the region of sky containing that pattern', example: 'Orion is one of the most easily recognized constellations — visible from most of Earth in winter.', image: '[VOCAB_IMAGE: Orion constellation with lines connecting the stars, labels for Betelgeuse and Rigel]' },
            { word: 'asterism', phonetic: 'AS-ter-izm', definition: 'An unofficial star pattern — often a distinctive part of a larger constellation', example: 'The Big Dipper is an asterism — it is actually part of the larger constellation Ursa Major.', image: '[VOCAB_IMAGE: Ursa Major full constellation with Big Dipper asterism highlighted in different color]' },
            { word: 'mythology', phonetic: 'mih-THOL-oh-jee', definition: 'Traditional stories explaining natural events, cultural values, or origins through gods, heroes, and creatures', example: 'The constellation Orion is named after a great hunter from Greek mythology.', image: '[VOCAB_IMAGE: illustrated Orion the Hunter with stars of the constellation visible on his body]' },
            { word: 'navigation', phonetic: 'nav-ih-GAY-shun', definition: 'Finding direction or position — ancient sailors used constellations to navigate the oceans', example: 'Polynesian sailors navigated thousands of kilometers of open ocean using star positions, including constellations.', image: '[VOCAB_IMAGE: ancient ship at night with star map overlay, North Star labeled as navigation reference]' },
          ],
          activities: [
            { id: 'connect_stars', type: 'build', title: 'Connect the Stars', instruction: 'Connect the stars in the correct order to reveal 8 famous constellations.', placeholder: '[INTERACTIVE: Star field with numbered dots for each constellation. Tap stars in sequence to connect them. Each completed constellation: reveals name, mythology illustration, one key fact. Available: Orion, Big Dipper, Cassiopeia, Scorpius, Leo, Gemini, Aquarius, Taurus]', ageRange: '4+' },
            { id: 'myth_theatre', type: 'story', title: 'Constellation Myths Theatre', instruction: 'Watch three animated myth stories about the stars.', placeholder: '[ANIMATED STORIES: 3 x 90-second animations: 1) Orion the Hunter and the Scorpion (why Orion sets as Scorpius rises), 2) Ursa Major — the Great Bear (Callisto transformed into a bear), 3) Cassiopeia the Queen (boastful queen placed in the sky). Each story ends with "Look for this constellation in the night sky when..."]', ageRange: '5+' },
            { id: 'culture_match', type: 'match', title: 'The Same Stars, Different Stories', instruction: 'The same star pattern was seen differently by different cultures. Match each culture to their constellation story.', placeholder: '[INTERACTIVE MATCH: Show star pattern (Orion). 4 cultural cards: Greek (great hunter), Aboriginal Australian (fishing with a canoe), Chinese (white tiger), Inuit (lone hunter). Tap to match. Reveal how same stars inspired different stories worldwide]', ageRange: '7+' },
          ],
          assessment: {
            questions: [
              { type: 'multiple_choice', q: 'How many official constellations are there?', options: ['12', '48', '88', '360'], answer: '88', explanation: 'The International Astronomical Union formally defined 88 official constellations in 1930, dividing the entire celestial sphere into regions with defined boundaries.', level: 'knowledge' },
              { type: 'multiple_choice', q: 'Are the stars in a constellation physically close to each other in space?', options: ['Yes — they are in the same star cluster', 'No — they only appear close from Earth\'s perspective', 'Yes — they were once together and drifted apart', 'No — but they are made of the same material'], answer: 'No — they only appear close from Earth\'s perspective', explanation: 'Constellation patterns are a result of our viewing angle from Earth. The stars that form Orion\'s belt, for example, range from 800 to 1,300 light-years from Earth — separated by hundreds of light-years from each other in space.', level: 'understanding' },
              { type: 'multiple_choice', q: 'Why did ancient sailors rely on constellations?', options: ['For entertainment during long voyages', 'To navigate — star positions helped them find direction and latitude at sea', 'To predict weather', 'To count the days of the year'], answer: 'To navigate — star positions helped them find direction and latitude at sea', explanation: 'Before GPS and compasses were widely available, the positions of stars — especially Polaris (the North Star) and seasonal constellations — allowed sailors to determine their latitude and direction on the open ocean.', level: 'application' },
            ],
          },
          mastery: { threshold: 80, badge: 'Star Navigator', badgeImage: '[BADGE_IMAGE: Star Navigator badge with compass and constellation design, navy and gold border]', reward: 'Night sky animated profile background + constellation identification guide', rewardImage: '[REWARD_IMAGE: animated night sky with constellation lines background preview]' },
        },

        {
          id: 'galaxies',
          title: 'Galaxies: Cities of Stars',
          objective: 'Define galaxies, identify the three main types, locate our Milky Way, and comprehend the scale of the observable universe',
          ageRange: '6-12',
          difficulty: 'foundation',
          xp: 90,
          heroImage: '[LESSON_HERO: Milky Way galaxy from above — spiral arms clearly visible, our solar system location marked with arrow]',
          narrator: {
            foundation: 'Our solar system is just one tiny neighborhood in an enormous city of stars called a galaxy. Our galaxy — the Milky Way — contains about 300 billion stars, and our Sun is just one of them. On a clear dark night you can see part of the Milky Way as a faint band of light across the sky. That glow is millions of stars so far away they blur together. Beyond the Milky Way? There are more galaxies in the universe than grains of sand on all of Earth\'s beaches.',
            explore: 'Galaxies come in four main types: spiral, barred spiral, elliptical, and irregular. The Milky Way is a barred spiral galaxy with a central bar of stars from which four main spiral arms extend. Our solar system sits in the Orion Arm, about 26,000 light-years from the galactic center. The nearest major galaxy to ours is the Andromeda Galaxy — 2.5 million light-years away. In about 4.5 billion years, the Milky Way and Andromeda will collide and merge.',
            mastery: 'The observable universe contains approximately 2 trillion galaxies — a number that keeps increasing as our telescopes improve. Galaxies cluster into groups, clusters, and superclusters bound by gravity and dark matter. The Milky Way belongs to the Local Group of about 50 galaxies. Dark matter — invisible matter making up 27% of the universe — is what holds these structures together. Without dark matter, galaxies would spin apart.',
          },
          whyItMatters: 'Understanding galaxies reveals the true scale of the universe and our place within it. It connects to the deepest questions humans have ever asked: What is the universe made of? Where did it come from? Are there other civilizations in other galaxies right now?',
          vocabulary: [
            { word: 'galaxy', phonetic: 'GAL-ak-see', definition: 'A vast system of billions of stars, gas, dust, and dark matter held together by gravity', example: 'The Milky Way galaxy contains 200 to 400 billion stars including our Sun.', image: '[VOCAB_IMAGE: Andromeda galaxy actual photograph — spiral structure clearly visible]' },
            { word: 'Milky Way', phonetic: 'MIL-kee way', definition: 'The barred spiral galaxy containing our solar system — visible as a band of light across the night sky', example: 'From a dark location, you can see the Milky Way as a glowing river of light across the sky.', image: '[VOCAB_IMAGE: photograph of Milky Way from dark sky location — glowing band over landscape]' },
            { word: 'dark matter', phonetic: 'dark MAT-er', definition: 'Invisible matter that makes up 27% of the universe — detected through its gravitational effects on galaxies', example: 'Without dark matter, galaxies would spin too fast and fly apart — dark matter is the invisible glue holding them together.', image: '[VOCAB_IMAGE: galaxy rotation curve diagram showing predicted vs actual speeds, gap labeled as dark matter effect]' },
            { word: 'Local Group', phonetic: 'LOH-kul groop', definition: 'The cluster of about 50 galaxies that includes the Milky Way, Andromeda, and many smaller dwarf galaxies', example: 'The Milky Way and Andromeda are the two largest members of the Local Group.', image: '[VOCAB_IMAGE: map of Local Group — Milky Way and Andromeda labeled as dominant members, smaller galaxies shown]' },
          ],
          activities: [
            { id: 'galaxy_sorter', type: 'sort', title: 'Galaxy Shape Sorter', instruction: 'Categorize 12 galaxy images into spiral, elliptical, and irregular groups.', placeholder: '[INTERACTIVE: 12 real galaxy images (from NASA). Drag to 3 labeled bins: Spiral (clear arms), Elliptical (oval, no arms), Irregular (no clear shape). After sorting, reveal names: Milky Way (spiral), Andromeda (spiral), M87 (elliptical), Large Magellanic Cloud (irregular), etc.]', ageRange: '6+' },
            { id: 'milky_way_flythrough', type: 'explore', title: 'Fly Through the Milky Way', instruction: 'Journey outward from Earth all the way to the edge of the observable universe.', placeholder: '[ANIMATED JOURNEY: Earth → solar system → Orion Arm → Milky Way disk → Milky Way halo → Local Group → Virgo Supercluster → edge of observable universe. Scale indicators at each stage. "You are here" marker. Duration 90 seconds with narrator.]', ageRange: '7+' },
            { id: 'distance_scale', type: 'explore', title: 'Universe Distance Scale', instruction: 'Explore the logarithmic scale from Earth to the edge of the observable universe.', placeholder: '[INTERACTIVE: Logarithmic slider. Left: Earth. Move right through: Moon (1.3 light-seconds), Sun (8 light-minutes), nearest star Proxima Centauri (4.2 light-years), center of Milky Way (26,000 light-years), Andromeda (2.5 million light-years), edge of observable universe (46 billion light-years). Tap any stop for facts.]', ageRange: '9+' },
          ],
          assessment: {
            questions: [
              { type: 'multiple_choice', q: 'What type of galaxy is the Milky Way?', options: ['Elliptical', 'Irregular', 'Barred spiral', 'Ring galaxy'], answer: 'Barred spiral', explanation: 'The Milky Way is a barred spiral galaxy — it has a central bar-shaped region of stars from which two main spiral arms extend. We cannot see this shape directly because we are inside the galaxy.', level: 'knowledge' },
              { type: 'multiple_choice', q: 'The Andromeda Galaxy is 2.5 million light-years away. What does this mean about the light we see from it?', options: ['We see it in real time', 'The light left Andromeda 2.5 million years ago', 'It is very close to us', 'The light has traveled for 2.5 billion years'], answer: 'The light left Andromeda 2.5 million years ago', explanation: 'Light travels at 300,000 km per second, but the distances between galaxies are so vast that even at this speed, the light we see from Andromeda tonight left that galaxy 2.5 million years ago — before modern humans existed.', level: 'reasoning' },
              { type: 'multiple_choice', q: 'Approximately how many galaxies are in the observable universe?', options: ['10 thousand', '100 million', '2 trillion', 'Infinite'], answer: '2 trillion', explanation: 'The Hubble Space Telescope\'s deep field images revealed approximately 2 trillion galaxies in the observable universe — about 10 times more than previously estimated. The actual universe may extend far beyond what we can observe.', level: 'knowledge' },
            ],
          },
          mastery: { threshold: 85, badge: 'Galactic Explorer', badgeImage: '[BADGE_IMAGE: Galactic Explorer badge with spiral galaxy design, blue and silver border]', reward: 'Galaxy type encyclopedia + animated Milky Way profile background', rewardImage: '[REWARD_IMAGE: animated Milky Way galaxy rotation background preview]' },
        },

        {
          id: 'black_holes',
          title: 'Black Holes: Where Gravity Rules',
          objective: 'Explain how black holes form, define the event horizon, and understand how we detect objects we cannot see',
          ageRange: '8-14',
          difficulty: 'explore',
          xp: 100,
          heroImage: '[LESSON_HERO: Black hole with accretion disk — hot orange-red glowing gas spiraling in, gravitational lensing bending background stars into a ring]',
          narrator: {
            foundation: 'A black hole is one of the strangest objects in the universe. When a massive star dies in a supernova, the leftover core can collapse under its own gravity until it becomes incomprehensibly dense. The gravity becomes so strong that not even light can escape once it crosses the event horizon — the point of no return. We cannot see black holes directly. We know they exist because of what happens around them — stars orbit invisible points, light bends around them, gas heats to millions of degrees as it spirals in.',
            explore: 'The event horizon is the boundary of a black hole beyond which nothing can return. Once anything crosses it — matter, light, information — it is gone from our universe forever. The center of a black hole is called the singularity — a point where our current physics breaks down and density becomes theoretically infinite. In 2019, the Event Horizon Telescope used eight radio telescopes worldwide to capture the first direct image of a black hole\'s shadow — M87*, 6.5 billion times the mass of the Sun.',
            mastery: 'Black holes are described by Einstein\'s general relativity, which models gravity as curvature of spacetime. Near a black hole, time itself runs more slowly — gravitational time dilation. An infalling observer would notice nothing special crossing the event horizon, but an outside observer would watch them slow down and fade into red as they approach. Stephen Hawking proved theoretically that black holes emit thermal radiation and slowly evaporate over inconceivably long timescales — this Hawking radiation connects quantum mechanics with general relativity.',
          },
          whyItMatters: 'Black holes represent the absolute frontier of physics. They test Einstein\'s relativity in extreme conditions, raise profound questions about information and the nature of spacetime, and the supermassive black hole at the center of our galaxy contains 4 million solar masses. Understanding them is understanding the universe at its most extreme.',
          vocabulary: [
            { word: 'black hole', phonetic: 'blak hole', definition: 'A region of space where gravity is so strong that nothing — not even light — can escape once it crosses the event horizon', example: 'Sagittarius A* is the supermassive black hole at the center of the Milky Way galaxy, with 4 million times the mass of the Sun.', image: '[VOCAB_IMAGE: artist concept of black hole — dark center, bright accretion disk, distorted background stars]' },
            { word: 'event horizon', phonetic: 'ee-VENT huh-RY-zun', definition: 'The boundary around a black hole beyond which nothing can return — the point of no return', example: 'Once matter crosses the event horizon, it is cut off from the rest of the universe forever.', image: '[VOCAB_IMAGE: diagram showing event horizon as boundary sphere around black hole center, spacecraft shown being pulled toward it]' },
            { word: 'singularity', phonetic: 'sing-gyoo-LAIR-ih-tee', definition: 'The theoretical center of a black hole where density is infinite and current physics breaks down', example: 'The singularity is the point where our understanding of the universe reaches its current limit.', image: '[VOCAB_IMAGE: diagram of black hole layers — accretion disk, event horizon, singularity at center labeled]' },
            { word: 'gravitational lensing', phonetic: 'grav-ih-TAY-shun-ul LEN-sing', definition: 'The bending of light by massive objects — allows us to see objects behind black holes and measure dark matter', example: 'Gravitational lensing around a black hole creates a bright ring of distorted light called a photon sphere.', image: '[VOCAB_IMAGE: diagram showing light from distant star bending around black hole, observer seeing multiple images]' },
            { word: 'Hawking radiation', phonetic: 'HAW-king ray-dee-AY-shun', definition: 'Theoretical thermal radiation emitted by black holes near their event horizon — proposed by Stephen Hawking in 1974', example: 'Hawking radiation means black holes are not completely black — they slowly evaporate, though for stellar mass black holes this takes longer than the current age of the universe.', image: '[VOCAB_IMAGE: diagram showing virtual particle pairs forming near event horizon — one falls in, one escapes as radiation]' },
          ],
          activities: [
            { id: 'approach_horizon', type: 'simulate', title: 'Approach the Event Horizon', instruction: 'Pilot a spacecraft toward a black hole. Watch what happens to time, light, and communication as you get closer.', placeholder: '[SIMULATION: Spacecraft with controls. As you approach: stars begin to distort, blueshift ahead, redshift behind. Clock shows time running slower. Radio messages take longer to arrive. Warning at event horizon. Narrator explains each effect. Cannot cross but can approach safely.]', ageRange: '9+' },
            { id: 'eht_reveal', type: 'observe', title: 'First Image of a Black Hole', instruction: 'Discover how scientists used 8 telescopes worldwide to photograph a black hole for the first time.', placeholder: '[INTERACTIVE REVEAL: World map showing 8 EHT telescope locations. Narrative: data collected, hard drives flown to central location, scientists process data for 2 years. Final reveal: the 2019 image of M87*. Narrator: "This is what a black hole looks like." Annotations explaining bright ring, dark shadow, what each part means.]', ageRange: '8+' },
            { id: 'hawking_biography', type: 'story', title: 'Stephen Hawking: Facing the Impossible', instruction: 'Follow Stephen Hawking\'s life and his revolutionary discoveries about black holes.', placeholder: '[INTERACTIVE BIOGRAPHY: Chapters: 1) Brilliant student at Oxford. 2) Diagnosed with ALS at 21, given 2 years to live. 3) Proved black holes radiate — shocking everyone. 4) Wrote A Brief History of Time — bestseller for 4 years. 5) Survived 55 years with ALS. 6) Legacy: changed how we understand space and time. Each chapter has illustrated scenes, audio narration, key quotes.]', ageRange: '8+' },
          ],
          assessment: {
            questions: [
              { type: 'multiple_choice', q: 'What is the event horizon?', options: ['The center of a black hole', 'The point of no return around a black hole where not even light can escape', 'The edge of the galaxy', 'The boundary between space and time'], answer: 'The point of no return around a black hole where not even light can escape', explanation: 'The event horizon is the boundary — not a physical surface — that marks the point beyond which escape is impossible. Even light, the fastest thing in the universe, cannot reach escape velocity once inside the event horizon.', level: 'knowledge' },
              { type: 'multiple_choice', q: 'How do scientists detect black holes since they cannot be seen directly?', options: ['By listening for sounds with microphones', 'By observing their gravitational effects on surrounding matter and light', 'By sending spacecraft into them', 'By using special cameras that see darkness'], answer: 'By observing their gravitational effects on surrounding matter and light', explanation: 'Black holes reveal themselves through their effects: stars orbit them in unusual patterns, gas heats to extreme temperatures and glows as it spirals in, and light bends around them. These indirect observations allow precise measurements of black hole masses.', level: 'understanding' },
              { type: 'multiple_choice', q: 'What did Hawking radiation reveal about black holes?', options: ['They are completely invisible forever', 'They slowly emit thermal radiation and evaporate over extremely long times', 'They consume all matter and energy permanently', 'They are made of neutrons'], answer: 'They slowly emit thermal radiation and evaporate over extremely long times', explanation: 'Stephen Hawking calculated that quantum effects near the event horizon cause black holes to emit a very small amount of thermal radiation. Over extraordinarily long timescales, this would cause them to slowly lose mass and eventually evaporate completely.', level: 'knowledge' },
              { type: 'multiple_choice', q: 'The Milky Way has a supermassive black hole at its center. Why has it not consumed our solar system?', options: ['It is too full', 'Our solar system orbits at a safe distance, just as planets orbit the Sun', 'The event horizon is too small to affect us', 'It only consumes gas, not stars'], answer: 'Our solar system orbits at a safe distance, just as planets orbit the Sun', explanation: 'Black holes have the same gravitational effect as any other object of equal mass at the same distance. Our solar system is 26,000 light-years from Sagittarius A* and orbits it safely. If our Sun were replaced by a black hole of equal mass, Earth\'s orbit would not change.', level: 'application' },
            ],
          },
          mastery: { threshold: 85, badge: 'Horizon Crosser', badgeImage: '[BADGE_IMAGE: Horizon Crosser badge with black hole accretion disk design, deep purple and gold border]', reward: 'Black hole accretion animated badge + advanced astrophysics pathway unlocked', rewardImage: '[REWARD_IMAGE: animated black hole accretion disk background preview]' },
        },
      ], // end stars_cosmos lessons
    }, // end stars_cosmos subworld

    // ══════════════════════════════════════════════
    // SUBWORLD 3 — SPACE EXPLORATION
    // ══════════════════════════════════════════════
    {
      id: 'space_exploration',
      name: 'Space Exploration',
      subtitle: 'The history and future of human spaceflight',
      unlocked: true,
      bgImage: '[SUBWORLD_BG: ISS orbiting Earth, Earth visible below with terminator line, stars behind]',
      ambientSound: 'iss_ambient',
      color: '#3A9E5A',

      lessons: [
        {
          id: 'exploration_history',
          title: 'History of Space Exploration',
          objective: 'Trace the major milestones of human space exploration from Sputnik 1957 to today and understand the scientists, astronauts, and engineers who made it possible',
          ageRange: '6-12',
          difficulty: 'foundation',
          xp: 85,
          heroImage: '[LESSON_HERO: Timeline collage — Sputnik → Gagarin → Moon landing → Space Shuttle → ISS → Mars rover → Webb Telescope]',
          narrator: {
            foundation: 'For millions of years, humans could only dream about space. Then on October 4, 1957, a metal ball called Sputnik beeped its way into orbit and everything changed. Four years later, Yuri Gagarin became the first human in space. In 1969, Neil Armstrong and Buzz Aldrin walked on the Moon. Today, the James Webb Space Telescope shows us galaxies from the beginning of time, and a robot named Perseverance searches for ancient life on Mars. The story of space exploration is the story of human curiosity refusing to accept limits.',
            explore: 'Key milestones: Sputnik 1 (1957) — first satellite. Laika the dog (1957) — first animal in space. Yuri Gagarin (1961) — first human in space. Valentina Tereshkova (1963) — first woman in space. Apollo 11 (1969) — first humans on the Moon. Voyager 1 (1977) — now in interstellar space, the most distant human-made object. Hubble Space Telescope (1990). ISS construction (1998-2011). Curiosity rover on Mars (2012). SpaceX reusable rocket landing (2015). James Webb Space Telescope (2021).',
            mastery: 'The economics of space are transforming. SpaceX\'s reusable Falcon 9 reduced launch costs from $50,000 per kilogram to under $3,000. The Artemis program aims to return humans to the Moon by 2026. Commercial crew programs have ended American dependence on Russian Soyuz launches. NASA\'s Gateway lunar station will serve as a staging point for Mars missions. The next generation of space telescopes will directly image exoplanet atmospheres — searching for biosignatures.',
          },
          whyItMatters: 'Space exploration produced GPS, weather satellites, medical imaging, water purification, memory foam, and thousands of other technologies. More importantly, it answers our deepest questions — and inspires each generation to push the boundary of what is possible.',
          vocabulary: [
            { word: 'satellite', phonetic: 'SAT-eh-lyte', definition: 'An object in orbit around a planet — natural (moon) or artificial (spacecraft)', example: 'GPS navigation relies on a network of about 30 artificial satellites orbiting Earth.', image: '[VOCAB_IMAGE: Earth with multiple satellites in orbit at different altitudes, GPS, weather, and communication satellites labeled]' },
            { word: 'astronaut', phonetic: 'AS-troh-nawt', definition: 'A person trained to travel and work in space', example: 'NASA selects new astronauts from thousands of applicants — requiring advanced degrees, flight experience, and physical fitness.', image: '[VOCAB_IMAGE: astronaut in full EVA spacesuit outside ISS, Earth visible below]' },
            { word: 'reusable rocket', phonetic: 'ree-YOO-zah-bul ROK-et', definition: 'A rocket designed to return to Earth after launch and be used again — dramatically reducing the cost of reaching space', example: 'SpaceX\'s Falcon 9 first stage lands back on a drone ship in the ocean after every launch.', image: '[VOCAB_IMAGE: SpaceX Falcon 9 booster landing on ocean drone ship, rocket fire visible below legs]' },
            { word: 'space telescope', phonetic: 'spays TEL-eh-skohp', definition: 'A telescope placed in orbit above Earth\'s atmosphere to observe the universe without atmospheric interference', example: 'The James Webb Space Telescope can observe galaxies that formed just 300 million years after the Big Bang.', image: '[VOCAB_IMAGE: James Webb Space Telescope with gold mirror deployed in space, infrared imagery example beside it]' },
          ],
          activities: [
            { id: 'space_timeline', type: 'sequence', title: 'Space History Timeline', instruction: 'Place 12 major space milestones in the correct chronological order.', placeholder: '[INTERACTIVE: 12 event cards with images: Sputnik, Gagarin, first spacewalk, Moon landing, Viking Mars lander, Voyager launch, Hubble launch, ISS start, Mars Curiosity, SpaceX first landing, Webb telescope, Artemis I. Drag to timeline. Year labels reveal after correct placement.]', ageRange: '7+' },
            { id: 'pioneer_profiles', type: 'biography', title: 'Space Pioneer Profiles', instruction: 'Explore profiles of six space pioneers who changed history.', placeholder: '[INTERACTIVE PROFILES: Tap each portrait: 1) Yuri Gagarin — first human in space, died in jet crash at 34. 2) Valentina Tereshkova — first woman in space, selected from factory worker applicants. 3) Neil Armstrong — refused to write his autobiography for 38 years. 4) Sally Ride — first American woman in space, kept her personal life private for decades. 5) Mae Jemison — first African American woman in space, was inspired by Uhura from Star Trek. 6) Kalpana Chawla — first Indian-born woman in space, died in Columbia disaster. Each profile: photo placeholder, life story, significant achievement, quote, why they matter.]', ageRange: '7+' },
          ],
          assessment: {
            questions: [
              { type: 'multiple_choice', q: 'What was the name of the first artificial satellite?', options: ['Apollo 1', 'Explorer 1', 'Sputnik 1', 'Vostok 1'], answer: 'Sputnik 1', explanation: 'Sputnik 1 was launched by the Soviet Union on October 4, 1957 — the first human-made object to orbit Earth. It was a simple metal sphere that transmitted radio beeps, but it shocked the world and launched the Space Race.', level: 'knowledge' },
              { type: 'multiple_choice', q: 'Who was the first human to travel to space?', options: ['Neil Armstrong', 'Buzz Aldrin', 'Valentina Tereshkova', 'Yuri Gagarin'], answer: 'Yuri Gagarin', explanation: 'Soviet cosmonaut Yuri Gagarin orbited Earth once on April 12, 1961 in Vostok 1, completing one orbit in 108 minutes. He ejected from his capsule and parachuted to Earth separately.', level: 'knowledge' },
            ],
          },
          mastery: { threshold: 80, badge: 'Space History Scholar', badgeImage: '[BADGE_IMAGE: Space History Scholar badge with rocket timeline design, red white and blue border]', reward: 'Space exploration timeline gallery unlocked', rewardImage: '[REWARD_IMAGE: space exploration timeline interactive gallery preview]' },
        },

        {
          id: 'rockets',
          title: 'Rockets: How We Get to Space',
          objective: 'Explain how rockets work using Newton\'s Third Law, understand staging, and calculate basic launch requirements',
          ageRange: '7-12',
          difficulty: 'foundation',
          xp: 85,
          heroImage: '[LESSON_HERO: Saturn V rocket on launch pad at night, lit by powerful lights, steam billowing, scale comparison to people visible at base]',
          narrator: {
            foundation: 'To escape Earth\'s gravity, you need to reach about 28,000 kilometers per hour. A rocket achieves this by burning fuel to create hot gas that shoots out of its engines. Newton\'s Third Law: for every action there is an equal and opposite reaction. The gas goes one way — the rocket goes the other way. Because fuel is so heavy, most rockets shed empty fuel tanks as they climb. Each stage brings the payload closer to orbit before being jettisoned.',
            explore: 'Rocket staging is crucial for efficiency. The Saturn V that carried Apollo astronauts had three stages: Stage 1 got it off the ground, Stage 2 got it to near orbit, Stage 3 pushed it toward the Moon. When each stage ran dry, it was discarded — reducing the mass that needed to be accelerated. Modern reusable rockets like SpaceX\'s Falcon 9 brought the first stage back to land, fundamentally changing the economics of space access.',
            mastery: 'The rocket equation — derived by Konstantin Tsiolkovsky in 1903 — shows that the relationship between exhaust velocity and mass ratio determines achievable velocity change. Specific impulse measures rocket efficiency — a higher Isp means more thrust per unit of fuel. Ion drives have very high Isp but low thrust — ideal for deep space probes on long journeys. Chemical rockets have lower Isp but high thrust — essential for launching from Earth\'s surface.',
          },
          whyItMatters: 'Rockets are humanity\'s only current way to reach space. Understanding how they work connects Newton\'s laws, thermodynamics, and engineering in a real context. Every satellite, space station, and interplanetary probe began as a controlled explosion lifting off from Earth.',
          vocabulary: [
            { word: 'thrust', phonetic: 'thrust', definition: 'The force produced by a rocket engine, pushing the rocket in the opposite direction to the exhaust', example: 'Saturn V produced 35 million newtons of thrust at liftoff — more than 7.5 million pounds of force.', image: '[VOCAB_IMAGE: rocket with thrust arrow pointing up, exhaust arrow pointing down, Newton\'s 3rd law labeled]' },
            { word: 'escape velocity', phonetic: 'es-KAYP veh-LOS-ih-tee', definition: 'The minimum speed needed to escape a planet\'s gravity without further propulsion', example: 'Earth\'s escape velocity is 11.2 km/s — about 40,000 km/h. The Moon\'s is much lower at 2.4 km/s.', image: '[VOCAB_IMAGE: Earth with curved paths showing orbital velocity (28,000 km/h) and escape velocity (40,000 km/h)]' },
            { word: 'payload', phonetic: 'PAY-lohd', definition: 'The useful cargo carried by a rocket — astronauts, satellites, rovers, or scientific equipment', example: 'The Perseverance rover was the payload of the Atlas V rocket that launched it to Mars.', image: '[VOCAB_IMAGE: rocket cross-section with payload fairing at top labeled, showing satellite inside]' },
            { word: 'staging', phonetic: 'STAY-jing', definition: 'Dropping empty rocket stages during flight to reduce mass and improve efficiency', example: 'Saturn V had three stages — each jettisoned when its fuel ran out, making the remaining rocket lighter.', image: '[VOCAB_IMAGE: Saturn V with three stages labeled, arrows showing separation sequence during flight]' },
          ],
          activities: [
            { id: 'rocket_assembly', type: 'build', title: 'Assemble a Rocket', instruction: 'Drag rocket components into the correct assembly order. Then calculate if your rocket reaches orbit.', placeholder: '[INTERACTIVE: Component catalog with engine options, fuel tanks, fairings, guidance systems, payload. Drag to assemble in correct order (engine at base, fuel above, payload at top). Mass calculator shows dry mass vs fuel mass. "Orbit calculator" evaluates if selected configuration reaches required 7.8 km/s orbital velocity]', ageRange: '8+' },
            { id: 'launch_control', type: 'simulate', title: 'Launch Control Simulation', instruction: 'Conduct a complete rocket launch: manage fuel burn rate, stage separations, and orbit insertion.', placeholder: '[SIMULATION: Launch control dashboard. T-minus countdown. Engine ignition at T=0. Altitude, speed, fuel monitors. Manual stage separation buttons at correct altitudes. Too early = insufficient speed. Too late = wasted fuel. Successful orbit = celebration screen with orbital parameters]', ageRange: '9+' },
          ],
          assessment: {
            questions: [
              { type: 'multiple_choice', q: 'Which of Newton\'s Laws explains how rockets work?', options: ['First Law — objects stay at rest', 'Second Law — force equals mass times acceleration', 'Third Law — every action has an equal and opposite reaction', 'Law of Gravity'], answer: 'Third Law — every action has an equal and opposite reaction', explanation: 'When a rocket expels gas downward at high speed (action), an equal force pushes the rocket upward (reaction). No air or ground is needed for this — rockets work in the vacuum of space.', level: 'knowledge' },
              { type: 'multiple_choice', q: 'Why do rockets use multiple stages?', options: ['To carry more astronauts', 'To drop empty fuel tanks and reduce mass, making the remaining rocket more efficient', 'To use different fuels for different altitudes', 'To allow the crew to escape if needed'], answer: 'To drop empty fuel tanks and reduce mass, making the remaining rocket more efficient', explanation: 'Carrying empty metal tanks costs energy — staging drops dead weight at critical moments, dramatically improving the ratio of payload to total mass and making missions possible that would otherwise require impossibly large rockets.', level: 'understanding' },
            ],
          },
          mastery: { threshold: 80, badge: 'Mission Commander', badgeImage: '[BADGE_IMAGE: Mission Commander badge with rocket launch design, silver and orange border]', reward: 'Rocket design lab simulation unlocked', rewardImage: '[REWARD_IMAGE: rocket design lab interface preview]' },
        },

        {
          id: 'iss_life',
          title: 'Life on the International Space Station',
          objective: 'Describe daily life aboard the ISS, explain the effects of microgravity on the human body, and understand the ISS as a symbol of international cooperation',
          ageRange: '6-11',
          difficulty: 'foundation',
          xp: 80,
          heroImage: '[LESSON_HERO: ISS exterior with Earth visible below, solar panels extended, golden sunlight reflecting off modules]',
          narrator: {
            foundation: '400 kilometers above Earth, six astronauts from many countries live and work together on the International Space Station. They have been up there continuously since the year 2000. In microgravity, everything floats. Astronauts sleep in sleeping bags attached to the wall. They drink water from sealed pouches. They exercise two hours every day to prevent their muscles from weakening. Every 90 minutes, they complete one orbit of Earth — seeing 16 sunrises every single day!',
            explore: 'Microgravity — not weightlessness, but very low effective gravity — affects the body profoundly. Bones and muscles lose mass without the constant work of supporting body weight. Blood shifts toward the head, causing congestion and vision changes. Balance systems become confused. The ISS hosts hundreds of scientific experiments studying these effects. It has been visited by over 250 people from 20 countries, assembled from modules launched on separate rockets over 13 years.',
            mastery: 'Long-duration spaceflight presents serious physiological challenges for future Mars missions. The 6-9 month journey to Mars in microgravity would cause significant bone density loss, muscle atrophy, radiation exposure, and potential psychological effects from isolation and the 20-minute communication delay. Countermeasures include exercise protocols, pharmaceuticals, artificial gravity research, and habitat design. NASA and SpaceX are actively developing solutions for what will be humanity\'s most demanding journey.',
          },
          whyItMatters: 'The ISS is the greatest cooperative engineering achievement in human history — built by 15 nations at a cost of over $150 billion. It represents proof that rival nations can work together on something larger than politics. Its research is directly preparing us for human missions to Mars.',
          vocabulary: [
            { word: 'microgravity', phonetic: 'my-kroh-GRAV-ih-tee', definition: 'The condition of very low effective gravity experienced in orbit — objects in free-fall appear weightless', example: 'In microgravity, water forms perfect spheres and floats freely rather than falling.', image: '[VOCAB_IMAGE: ISS interior with astronaut floating horizontally, water sphere floating nearby]' },
            { word: 'spacewalk', phonetic: 'SPAYS-wawk', definition: 'Working outside a spacecraft in a pressurized spacesuit — officially called an EVA (Extra-Vehicular Activity)', example: 'Astronauts conduct spacewalks to install new equipment, repair solar panels, and conduct experiments outside the ISS.', image: '[VOCAB_IMAGE: astronaut in white EVA suit outside ISS, Earth visible below, tethered to station]' },
            { word: 'orbit', phonetic: 'OR-bit', definition: 'The path a spacecraft takes around a planet — the ISS orbits at 400 km altitude at 7.7 km/s', example: 'The ISS completes one orbit of Earth every 90 minutes, traveling at 28,000 km/h.', image: '[VOCAB_IMAGE: Earth with ISS orbit path shown, altitude labeled at 400km, arrow showing orbital direction]' },
          ],
          activities: [
            { id: 'iss_tour', type: 'explore', title: 'ISS Module Tour', instruction: 'Walk through every module of the ISS. Tap any object to learn what it is and what it does.', placeholder: '[INTERACTIVE: Cross-section diagram of all ISS modules — Zvezda (Russian quarters), Zarya (first module), Unity, Destiny (US lab), Columbus (European lab), Kibo (Japanese lab), Cupola (observation dome), Quest (airlock), BEAM (inflatable module). Tap any object: laptop → "Research computer: runs 50+ experiments simultaneously". Treadmill → "COLBERT treadmill — named after Stephen Colbert after he won a NASA naming contest". Toilet → "Uses airflow instead of gravity — costs $19 million."]', ageRange: '6+' },
            { id: 'astronaut_day', type: 'simulate', title: 'A Day on the ISS', instruction: 'Follow an astronaut through a complete day on the International Space Station.', placeholder: '[INTERACTIVE SCHEDULE: 6:00 Wake up (bags attached to wall, no pillow needed). 7:00 Exercise (2 hours mandatory). 9:00 Science experiments. 12:00 Lunch (food in sealed pouches, floating crumbs are dangerous). 14:00 Maintenance. 16:00 More experiments. 18:00 Communication with Earth (20-minute delay to Mars — show how this changes conversations). 20:00 Personal time. 21:30 Sleep. Each activity: brief animation + narrator explanation + comparison to Earth version]', ageRange: '7+' },
          ],
          assessment: {
            questions: [
              { type: 'multiple_choice', q: 'How often does the ISS orbit Earth?', options: ['Once per day', 'Every 90 minutes', 'Every 24 hours', 'Once per week'], answer: 'Every 90 minutes', explanation: 'The ISS orbits Earth at 400 km altitude, traveling at 7.7 km/s (28,000 km/h). At this speed, it completes one full orbit every 90 minutes — meaning astronauts see 16 sunrises and 16 sunsets every 24 hours.', level: 'knowledge' },
              { type: 'multiple_choice', q: 'Why do astronauts exercise 2 hours every day on the ISS?', options: ['Because there is nothing else to do', 'To prevent bone and muscle loss caused by microgravity', 'Because it is a NASA rule without scientific reason', 'To generate electricity'], answer: 'To prevent bone and muscle loss caused by microgravity', explanation: 'On Earth, your muscles and bones constantly work against gravity. In microgravity, this work stops — leading to rapid bone density loss (about 1% per month) and muscle atrophy. Vigorous daily exercise using resistance machines is the primary countermeasure.', level: 'understanding' },
            ],
          },
          mastery: { threshold: 80, badge: 'Space Station Resident', badgeImage: '[BADGE_IMAGE: Space Station Resident badge with ISS module design, blue and white border]', reward: 'ISS interior animated background unlocked', rewardImage: '[REWARD_IMAGE: ISS interior animated background preview with floating items]' },
        },
      ], // end space_exploration lessons
    }, // end space_exploration subworld

    // ══════════════════════════════════════════════
    // SUBWORLD 4 — THE MOON
    // ══════════════════════════════════════════════
    {
      id: 'the_moon',
      name: 'The Moon',
      subtitle: "Earth's closest companion",
      unlocked: true,
      bgImage: '[SUBWORLD_BG: Moon surface from Apollo perspective — grey regolith in foreground, Earth visible in black sky above horizon]',
      ambientSound: 'moon_surface_ambient',
      color: '#C4C4C4',

      lessons: [
        {
          id: 'moon_basics',
          title: "Earth's Moon",
          objective: "Describe the Moon's physical characteristics, phases, effect on tides, formation theory, and the Apollo missions",
          ageRange: '3-10',
          difficulty: 'foundation',
          xp: 80,
          heroImage: '[LESSON_HERO: Full Moon high resolution photograph — craters and mare clearly visible, slightly blue tinted]',
          narrator: {
            foundation: 'The Moon is Earth\'s closest companion in space — the only other world that humans have visited. It is about a quarter the size of Earth and orbits us every 27 days. The Moon does not make its own light — it reflects sunlight. As it travels around Earth, we see different amounts of the lit side, creating the phases: new moon, crescent, quarter, gibbous, and full moon. The Moon\'s gravity also creates Earth\'s tides, gently pulling the oceans as it passes.',
            explore: 'The Moon likely formed 4.5 billion years ago when a Mars-sized body called Theia collided with the early Earth. The debris from this impact coalesced into the Moon. The Moon is gradually moving away from Earth at about 3.8 centimeters per year. Tidal locking means the Moon rotates at exactly the same rate it orbits Earth — so we always see the same side. The far side of the Moon was not photographed until 1959 and looks dramatically different from the familiar near side.',
            mastery: 'The Moon\'s stabilizing effect on Earth\'s axial tilt may be critical to Earth\'s habitability. Without the Moon, Earth\'s tilt could vary chaotically from near 0° to over 85° over millions of years, causing extreme climate swings. Studying the Moon\'s surface also provides a record of the impact history of the inner solar system — the craters on the Moon correspond to a period of heavy bombardment about 4 billion years ago that also affected Earth.',
          },
          whyItMatters: 'The Moon affects Earth\'s tides, stabilizes our climate, and was the first step of human space exploration. Understanding the Moon also gives us a window into Earth\'s own early history — the Moon preserved impact records that Earth erased through geological activity.',
          vocabulary: [
            { word: 'lunar', phonetic: 'LOO-nar', definition: 'Relating to the Moon', example: 'The astronauts landed at the lunar south pole — the first time humans touched that part of the Moon.', image: '[VOCAB_IMAGE: Moon labeled "The Moon" with "lunar" as adjective examples: lunar surface, lunar module, lunar eclipse]' },
            { word: 'phases', phonetic: 'FAY-zez', definition: "The different shapes of the Moon as seen from Earth, based on how much of its sunlit side faces us as it orbits", example: 'The Moon goes through all eight phases in about 29.5 days.', image: '[VOCAB_IMAGE: circular diagram showing 8 Moon phases with names: New Moon, Waxing Crescent, First Quarter, Waxing Gibbous, Full Moon, Waning Gibbous, Third Quarter, Waning Crescent]' },
            { word: 'tides', phonetic: 'tydz', definition: "The regular rise and fall of ocean water levels, caused by the Moon's gravitational pull", example: "High tide and low tide occur because the Moon's gravity pulls differently on the ocean water closest to it versus the water farthest from it.", image: "[VOCAB_IMAGE: Earth from above with ocean tidal bulges shown pointing toward and away from Moon, Moon's position labeled]" },
            { word: 'mare', phonetic: 'MAH-ray', definition: "Dark flat plains on the Moon's surface formed by ancient volcanic lava flows billions of years ago", example: "The Apollo 11 landing site, the Sea of Tranquility (Mare Tranquillitatis), is a mare.", image: '[VOCAB_IMAGE: Moon photograph with several mare labeled — Mare Tranquillitatis, Mare Serenitatis, Oceanus Procellarum]' },
            { word: 'tidal locking', phonetic: 'TY-dul LOK-ing', definition: "When a moon's rotation period equals its orbital period, causing the same face to always point toward its planet", example: "The Moon is tidally locked to Earth — we always see the same side of the Moon from Earth.", image: '[VOCAB_IMAGE: diagram showing Moon orbiting Earth with near side always facing Earth, Moon rotation arrows matching orbital arrows]' },
          ],
          activities: [
            { id: 'moon_phases_sim', type: 'simulate', title: 'Moon Phase Calendar', instruction: "Animate the Moon's orbit and watch the phases change. Then predict what phase comes next.", placeholder: "[SIMULATION: Earth at center, Moon moves around it. Phase diagram updates as Moon moves. Speed controls. Calendar mode shows next 30 days of phases. Quiz mode: pause at random position, ask 'What phase is this?']", ageRange: '4+' },
            { id: 'lunar_explorer', type: 'explore', title: 'Lunar Surface Explorer', instruction: "Navigate the Moon's surface and discover craters, mountains, and ancient seas.", placeholder: "[INTERACTIVE: Map of the Moon. Tap labeled features: Tycho crater (youngest major crater, formed 108 million years ago), Mare Tranquillitatis (Apollo 11 landing site), Apollo 11 landing marker, South Pole-Aitken Basin (largest crater in solar system), Mount Malapert (potential future base site). Each: fact + image placeholder + narrator line]", ageRange: '5+' },
            { id: 'apollo_story', type: 'story', title: 'Apollo 11: First Steps', instruction: "Experience the complete Apollo 11 Moon landing — from launch to the first footstep.", placeholder: "[INTERACTIVE STORY: Chapter 1: Launch (July 16, 1969 — Saturn V lifts off, 600,000 people watching). Chapter 2: Journey (3 days to the Moon, Earth shrinking behind them). Chapter 3: Lunar Orbit (see the Moon close-up for the first time). Chapter 4: Eagle descends (alarm sounds, fuel almost gone, Armstrong lands manually with 25 seconds of fuel left). Chapter 5: First step (Armstrong: 'That's one small step for a man, one giant leap for mankind'). Chapter 6: 2 hours and 31 minutes on the surface. Chapter 7: Return and splashdown. Each chapter: illustrated scene + audio narration + real radio communication excerpts in narrated form]", ageRange: '6+' },
            { id: 'tide_tracker', type: 'simulate', title: 'Ocean Tide Simulator', instruction: "See how the Moon's position creates high and low tides around the Earth.", placeholder: "[SIMULATION: Earth with simplified ocean. Moon orbits at adjustable speed. Tidal bulge follows Moon's position. Show high tide and low tide at a specific coastline. Time display shows how tides change over 24 hours. New Moon vs Full Moon comparison — spring tides vs neap tides]", ageRange: '7+' },
          ],
          assessment: {
            questions: [
              { type: 'multiple_choice', q: "Why does the Moon appear to change shape during the month?", options: ['The Moon physically changes shape', 'We see different amounts of the sunlit side as the Moon orbits Earth', 'Clouds cover parts of the Moon', 'The Sun lights different sides of the Moon each day'], answer: 'We see different amounts of the sunlit side as the Moon orbits Earth', explanation: "The Moon is always half lit by the Sun. As it moves around Earth, we see varying proportions of the lit half — creating the lunar phases. There is no 'dark side of the Moon' — all sides receive sunlight over the course of a month.", level: 'understanding' },
              { type: 'multiple_choice', q: "What causes ocean tides on Earth?", options: ["Earth's rotation", "The Moon's gravity", "Solar winds", "Underwater earthquakes"], answer: "The Moon's gravity", explanation: "The Moon's gravity pulls on Earth's oceans differently depending on distance. The ocean facing the Moon is pulled most strongly, creating a tidal bulge. A corresponding bulge forms on the far side due to inertia. As Earth rotates, these bulges create the daily high and low tides.", level: 'knowledge' },
              { type: 'multiple_choice', q: "In what year did humans first walk on the Moon?", options: ['1957', '1961', '1969', '1972'], answer: '1969', explanation: 'Apollo 11 landed on the Moon on July 20, 1969. Neil Armstrong became the first human to walk on the Moon, followed 20 minutes later by Buzz Aldrin. Michael Collins orbited in the Command Module. They returned safely on July 24, 1969.', level: 'knowledge' },
              { type: 'multiple_choice', q: "Why do we always see the same side of the Moon from Earth?", options: ['The Moon does not rotate at all', 'The Moon rotates at exactly the same rate it orbits Earth — tidal locking', "Earth's gravity stops the Moon from turning", "The Moon is locked in place by Jupiter's gravity"], answer: "The Moon rotates at exactly the same rate it orbits Earth — tidal locking", explanation: "Tidal forces between Earth and the Moon over billions of years gradually slowed the Moon's rotation until it matched its orbital period — about 27 days. Now both are synchronized, keeping the same face always toward Earth. We have only seen the far side from spacecraft.", level: 'understanding' },
            ],
          },
          mastery: { threshold: 85, badge: 'Lunar Scholar', badgeImage: '[BADGE_IMAGE: Lunar Scholar badge with full Moon design, silver and grey border]', reward: 'Moon landing scene animated background + Lunar exploration advanced pathway', rewardImage: '[REWARD_IMAGE: animated Earth-rise over Moon surface background preview]' },
        },
      ], // end moon lessons
    }, // end the_moon subworld

    // ══════════════════════════════════════════════
    // SUBWORLD 5 — GENIUS PATHWAYS
    // ══════════════════════════════════════════════
    {
      id: 'genius_cosmos',
      name: 'Advanced: Genius Pathways',
      subtitle: 'For learners ready to go beyond',
      unlocked: false, // unlocked via Dev Mode or mastery of all other subworlds
      bgImage: '[SUBWORLD_BG: Abstract mathematical space — equations floating in a dark universe, light beams bending around objects]',
      ambientSound: 'contemplative_space_ambient',
      color: '#A090FF',

      lessons: [
        {
          id: 'orbital_mechanics',
          title: 'Orbital Mechanics',
          objective: "Apply Kepler's three laws to describe planetary motion, understand gravity assists, and calculate basic orbital parameters",
          ageRange: '12+',
          difficulty: 'genius',
          xp: 150,
          heroImage: "[LESSON_HERO: Orbital mechanics diagram — elliptical orbits with perihelion/aphelion labeled, Kepler's equal areas law illustrated]",
          narrator: {
            mastery: "Kepler's First Law: planets travel in elliptical orbits with the Sun at one focus — not the center. Kepler's Second Law: a planet sweeps equal areas of its ellipse in equal times — meaning it moves faster when closer to the Sun. Kepler's Third Law: the square of a planet's orbital period equals the cube of its average distance from the Sun — T² = a³. These three laws were discovered through pure mathematical analysis of Tycho Brahe's observations in 1609 — before Newton explained the gravitational force behind them.",
          },
          whyItMatters: 'Orbital mechanics is the foundation of all spaceflight. Every satellite launch, Mars mission, and gravity assist maneuver depends on laws discovered by a 17th-century mathematician. Understanding orbital mechanics means understanding the physics of everything in space.',
          vocabulary: [
            { word: "Kepler's Laws", phonetic: "KEP-lerz lawz", definition: "Three mathematical laws describing how planets and other objects orbit the Sun", example: "Mission planners use Kepler's Laws to calculate where a planet will be when a spacecraft arrives after a multi-year journey.", image: "[VOCAB_IMAGE: Kepler portrait with three law diagrams labeled]" },
            { word: 'perihelion', phonetic: 'pair-ee-HEE-lee-un', definition: "The point in an orbit closest to the Sun", example: "Earth reaches perihelion in early January — 147 million km from the Sun.", image: '[VOCAB_IMAGE: elliptical orbit with perihelion labeled at closest point, aphelion at farthest]' },
            { word: 'aphelion', phonetic: 'ay-FEE-lee-un', definition: "The point in an orbit farthest from the Sun", example: "Earth reaches aphelion in early July — 152 million km from the Sun.", image: '[VOCAB_IMAGE: same elliptical orbit with aphelion highlighted]' },
            { word: 'gravity assist', phonetic: 'GRAV-ih-tee ah-SIST', definition: "Using a planet's gravity to change a spacecraft's speed and direction without burning fuel", example: "Voyager 2 used gravity assists from Jupiter, Saturn, and Uranus to reach Neptune in just 12 years instead of the 30+ years a direct trajectory would require.", image: '[VOCAB_IMAGE: spacecraft trajectory curving around planet, speed vectors showing speed increase from gravity assist]' },
          ],
          activities: [
            { id: 'keplers_laws_viz', type: 'simulate', title: "Kepler's Laws Visualizer", instruction: "Interact with all three Kepler's Laws. Change orbit shapes and watch period and speed change.", placeholder: "[SIMULATION: Adjustable ellipse orbit. Law 1: See Sun at focus, not center. Law 2: Shaded area sweeps visible as planet moves — equal areas in equal times. Law 3: Change semi-major axis, watch orbital period change — shows T² = a³ relationship mathematically. Side panel shows equations updating in real time.]", ageRange: '12+' },
            { id: 'gravity_assist_planner', type: 'build', title: 'Gravity Assist Mission Planner', instruction: "Plan a mission to Pluto using gravity assists. Select which planets to fly past to maximize speed.", placeholder: "[MISSION PLANNER: Solar system map. Spacecraft with fuel budget. Select flyby planets in sequence. Each flyby: animation shows trajectory curve, speed increase calculated. Compare: direct trajectory (takes 45 years with current engines) vs optimized multi-flyby trajectory (9.5 years — how New Horizons actually did it). Scoring based on fuel efficiency and arrival time.]", ageRange: '13+' },
          ],
          assessment: {
            questions: [
              { type: 'multiple_choice', q: "According to Kepler's Second Law, when does a planet move fastest in its orbit?", options: ['At aphelion — farthest from the Sun', 'At perihelion — closest to the Sun', 'Always at the same speed', 'At the equinoxes'], answer: 'At perihelion — closest to the Sun', explanation: "Kepler's Second Law states that a planet sweeps equal areas in equal times. When a planet is close to the Sun, it must travel faster to sweep the same area as when it is far away. This is a consequence of the conservation of angular momentum.", level: 'knowledge' },
              { type: 'multiple_choice', q: 'What is a gravity assist?', options: ['Using rocket fuel to speed up near a planet', "Using a planet's gravity to change speed and direction without burning fuel", 'Escaping a planet\'s gravity', 'A type of orbit named after gravitation'], answer: "Using a planet's gravity to change speed and direction without burning fuel", explanation: "A gravity assist (or gravitational slingshot) works because a spacecraft borrows momentum from a planet. The spacecraft speeds up relative to the Sun while the planet slows down by an infinitesimal amount. Without gravity assists, many outer solar system missions would be impossible.", level: 'knowledge' },
            ],
          },
          mastery: { threshold: 85, badge: 'Orbital Mechanic', badgeImage: '[BADGE_IMAGE: Orbital Mechanic badge with elliptical orbit equation design, deep purple border]', reward: 'Advanced astrophysics full pathway unlocked', rewardImage: '[REWARD_IMAGE: advanced astrophysics pathway unlock animation]' },
        },

        {
          id: 'cosmology',
          title: 'Cosmology: The Origin and Fate of the Universe',
          objective: 'Describe the Big Bang, cosmic expansion, dark energy, and the main theories about the ultimate fate of the universe',
          ageRange: '12+',
          difficulty: 'genius',
          xp: 200,
          heroImage: '[LESSON_HERO: Cosmic timeline — Big Bang at left, galaxy formation, present day, future fate at right — logarithmic time scale]',
          narrator: {
            mastery: '13.8 billion years ago, all the matter and energy in the universe existed in an unimaginably hot, dense state. The Big Bang was not an explosion in space — it was an expansion of space itself. As the universe expanded, it cooled. Protons and electrons combined into hydrogen atoms. Gravity pulled hydrogen into clouds. Stars ignited. Galaxies formed. Here we are. The universe is still expanding today — and the expansion is accelerating, driven by a mysterious force called dark energy that makes up 68% of everything.',
          },
          whyItMatters: 'Cosmology addresses the deepest questions humans have ever asked: Where did everything come from? What is the universe made of? Where is it going? These questions drive the most fundamental physics research on Earth and in space.',
          vocabulary: [
            { word: 'Big Bang', phonetic: 'big bang', definition: 'The event 13.8 billion years ago when the universe began expanding from an extremely hot, dense state — not an explosion in space but an expansion of space itself', example: 'Evidence for the Big Bang includes the cosmic microwave background radiation — the afterglow of the original hot dense state.', image: '[VOCAB_IMAGE: Big Bang timeline diagram — dense point expanding into larger and larger universe with time labels]' },
            { word: 'dark energy', phonetic: 'dark EN-er-jee', definition: 'A mysterious force causing the expansion of the universe to accelerate — makes up 68% of the total mass-energy content of the universe', example: 'Dark energy was discovered in 1998 when two independent teams found that distant supernovae were dimmer than expected — proving the universe\'s expansion is speeding up.', image: '[VOCAB_IMAGE: pie chart of universe composition: 68% dark energy, 27% dark matter, 5% ordinary matter (atoms)]' },
            { word: 'cosmic microwave background', phonetic: 'KOZ-mik MY-kroh-wayv BAK-grownd', definition: 'The faint thermal radiation filling the entire universe — the afterglow of the Big Bang, now cooled to just 2.7 degrees above absolute zero', example: 'The cosmic microwave background is direct evidence of the Big Bang — a snapshot of the universe as it was 380,000 years after the Big Bang.', image: '[VOCAB_IMAGE: CMB temperature map of the universe — oval projection showing subtle temperature variations in colors]' },
          ],
          activities: [
            { id: 'universe_timeline', type: 'simulate', title: 'Universe Timeline Journey', instruction: "Travel through the 13.8 billion year history of the universe from the Big Bang to today — and into the far future.", placeholder: "[TIMELINE ANIMATION: Logarithmic time slider. Big Bang (t=0): pure energy. t=1 second: protons and neutrons form. t=3 minutes: helium nuclei form. t=380,000 years: atoms form, universe becomes transparent, CMB emitted. t=100-200 million years: first stars ignite. t=1 billion years: first galaxies form. t=4.6 billion years: our solar system forms. t=13.8 billion years (now): arrow shows 'YOU ARE HERE'. Future: Sun becomes red giant, Milky Way-Andromeda collision, heat death of universe. Each stage: animation + narrator + key facts]", ageRange: '12+' },
          ],
          assessment: {
            questions: [
              { type: 'multiple_choice', q: 'How old is the universe?', options: ['4.6 billion years', '6,000 years', '13.8 billion years', '100 billion years'], answer: '13.8 billion years', explanation: 'The age of the universe has been measured through multiple independent methods: the expansion rate (Hubble constant), the age of the oldest stars, and the temperature and pattern of the cosmic microwave background. All methods converge on approximately 13.8 billion years.', level: 'knowledge' },
              { type: 'multiple_choice', q: 'What is dark energy?', options: ['The energy inside black holes', 'The energy that powers stars', 'A mysterious force causing the accelerating expansion of the universe', 'Radiation from dark matter'], answer: 'A mysterious force causing the accelerating expansion of the universe', explanation: 'Dark energy is the name given to whatever is causing the universe\'s expansion to accelerate. It was discovered in 1998 and makes up about 68% of the total energy content of the universe. Its fundamental nature remains one of the greatest unsolved problems in physics.', level: 'knowledge' },
            ],
          },
          mastery: { threshold: 85, badge: 'Cosmologist', badgeImage: '[BADGE_IMAGE: Cosmologist badge with CMB map design, black and gold border with stars]', reward: 'Full Genius Pathway completion — Ceonis Cosmic Scholar title earned', rewardImage: '[REWARD_IMAGE: Cosmic Scholar title unlock ceremony animation]' },
        },
      ], // end genius lessons
    }, // end genius_cosmos subworld
  ], // end all subworlds

  // ══════════════════════════════════════════════
  // WORLD MASTERY
  // ══════════════════════════════════════════════
  worldMastery: {
    requirement: 'Complete all lessons in at least 4 of 5 subworlds, earn at least 15 of 20 badges, and score 80%+ on the World Mastery Assessment',
    badge: 'Cosmic Scholar',
    badgeImage: '[BADGE_IMAGE: Cosmic Scholar — master badge with full solar system, Milky Way spiral, and Einstein equation design, gold and purple border]',
    reward: 'Animated Milky Way home screen background + Cosmic Scholar profile title + All Genius Pathways fully unlocked',
    assessmentTopics: [
      'Solar system order and planet characteristics',
      'Sun properties and nuclear fusion',
      'Star types, colors, and temperatures',
      'Star life cycles and element formation',
      'Constellations and navigation',
      'Galaxies, the Milky Way, and scale of universe',
      'Black holes, event horizons, and detection',
      'Space exploration history and key milestones',
      'Rockets, Newton\'s Third Law, and staging',
      'Life on the ISS and effects of microgravity',
      'Moon phases, tides, and Apollo program',
      'Application: design a mission to a planet of your choice',
    ],
  },
}
