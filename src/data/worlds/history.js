export const HISTORY = {
  id: 'history',
  name: 'History & Civilization',
  subtitle: 'Ancient Worlds, Timelines & Great Minds',
  color: '#E8A030',
  unlocked: true,
  subworlds: [
    {
      id: 'ancient_civilizations',
      name: 'Ancient Civilizations',
      subtitle: 'Egypt, Mesopotamia, Greece, Rome and more',
      unlocked: true,
      bgImage: '[SUBWORLD_BG: Collage of ancient wonders — pyramids, Parthenon, Colosseum, Great Wall — in golden light]',
      color: '#E8A030',
      lessons: [
        {
          id: 'what_is_history',
          title: 'What Is History?',
          objective: 'Understand history as the study of the past using evidence; distinguish primary and secondary sources',
          ageRange: '5-12', difficulty: 'foundation', xp: 70,
          heroImage: '[LESSON_HERO: Timeline stretching from ancient cave paintings to modern day with key events illustrated]',
          narrator: {
            foundation: 'History is the story of what happened in the past — what people did, what they built, what they believed, and how they treated each other. We learn about history from evidence left behind: written records, buildings, tools, artwork, and stories passed down through generations. Historians are like detectives — they gather clues and piece together what happened long ago.',
            explore: 'Historical inquiry uses primary sources (created at the time of events: letters, diaries, artifacts, official documents) and secondary sources (created after: history books, documentaries, analyses). Historians evaluate sources for bias, perspective, and reliability. Chronology organizes events in time. Causation examines why events happened. Historical thinking requires understanding context — events must be understood in their own time and place.',
            mastery: 'Historiography — the study of how history is written — reveals that historical accounts are always interpretive. Historians make choices about what to include, how to frame events, and whose perspectives to center. The same events can be narrated very differently. Post-colonial history, for example, has challenged Eurocentric narratives by centering previously marginalized perspectives. Understanding historiography is essential for critical engagement with any historical claim.',
          },
          whyItMatters: 'Understanding history helps us understand the present, avoid repeating mistakes, appreciate diverse cultures, and develop critical thinking about evidence and sources.',
          vocabulary: [
            { word: 'history', phonetic: 'HIS-toh-ree', definition: 'The study of past events, especially human affairs, using evidence and analysis', example: 'By studying history, we can learn lessons from what people did right and wrong in the past.', image: '[VOCAB_IMAGE: timeline with artifacts, documents, and buildings as sources of historical knowledge]' },
            { word: 'primary source', phonetic: 'PRY-mair-ee sors', definition: 'A document, artifact, or testimony created at the time of an event being studied', example: 'A letter written by Abraham Lincoln is a primary source about the Civil War era.', image: '[VOCAB_IMAGE: original document, photograph, artifact labeled as primary sources]' },
            { word: 'civilization', phonetic: 'siv-ih-lih-ZAY-shun', definition: 'A complex society with organized government, writing, cities, specialized labor, and cultural development', example: 'Ancient Egypt was a great civilization that lasted over 3,000 years.', image: '[VOCAB_IMAGE: characteristics of civilization labeled — writing, cities, government, arts, trade]' },
          ],
          activities: [
            { id: 'timeline_builder', type: 'build', title: 'World History Timeline', instruction: 'Place key events in chronological order on a world timeline.', placeholder: '[INTERACTIVE TIMELINE: 5,000 years of history. Drag event cards to correct positions. Events: cave paintings (40,000 BCE), pyramids (2,500 BCE), first alphabet (1,000 BCE), Roman Empire (27 BCE), printing press (1440 CE), Industrial Revolution (1760 CE), Moon landing (1969). Zoom in and out on timeline]', ageRange: '7+' },
            { id: 'source_detective', type: 'explore', title: 'History Detective', instruction: 'Examine three historical sources. Determine if each is primary or secondary and evaluate its reliability.', placeholder: '[ACTIVITY: Three sources presented — an original photograph, a history textbook entry, a diary from the period. Child identifies type, notes author perspective, evaluates bias. Builds critical source evaluation skills]', ageRange: '9+' },
          ],
          assessment: {
            questions: [
              { type: 'multiple_choice', q: 'A diary written by a soldier during World War II is an example of a:', options: ['Secondary source', 'Primary source', 'Tertiary source', 'Historical fiction'], answer: 'Primary source', explanation: 'A diary written by someone who was present during the events being studied is a primary source — it was created at the time and reflects a firsthand perspective. Secondary sources (like history books) analyze primary sources after the fact.', level: 'knowledge' },
            ],
          },
          mastery: { threshold: 80, badge: 'History Detective', badgeImage: '[BADGE: History Detective with magnifying glass over timeline]', reward: 'Ancient civilizations deep-dive pathways unlocked', rewardImage: '[REWARD_IMAGE: ancient world explorer preview]' },
        },
        {
          id: 'ancient_egypt',
          title: 'Ancient Egypt',
          objective: 'Describe the key features of ancient Egyptian civilization — pharaohs, pyramids, Nile, and hieroglyphics',
          ageRange: '6-14', difficulty: 'foundation', xp: 90,
          heroImage: '[LESSON_HERO: Great Pyramid of Giza at golden sunset with sphinx, Nile River, and hieroglyphics border]',
          narrator: {
            foundation: 'Over 5,000 years ago, one of the world\'s greatest civilizations grew along the Nile River in Africa. Ancient Egypt lasted for over 3,000 years — longer than the time from ancient Rome to today. The Egyptians built the pyramids without modern machines. They invented one of the world\'s first writing systems — hieroglyphics. And they were ruled by god-kings called pharaohs.',
            explore: 'Ancient Egyptian civilization emerged around 3100 BCE when Upper and Lower Egypt unified under Pharaoh Narmer. The Nile River was civilization\'s lifeline — annual inundations deposited nutrient-rich silt making the Nile Valley extraordinarily fertile. The pyramids served as royal tombs — the Great Pyramid of Giza (built ~2560 BCE) required 20,000+ workers over 20 years. Hieroglyphics combined logographic and phonetic elements — the Rosetta Stone (1799) enabled decipherment.',
            mastery: 'Egypt\'s geopolitical position made it a crossroads of ancient world influence. Egyptian religion, governance, and culture profoundly influenced Greek and Roman civilization. The mystery cults of Isis and Osiris spread through the Roman Empire. Egyptian mathematical papyri (Rhind, Moscow) reveal sophisticated arithmetic, geometry, and algebraic thinking 4,000 years ago. The Egyptian decimal system influenced later mathematical development.',
          },
          whyItMatters: 'Ancient Egypt was one of the longest-lasting civilizations in human history. Its innovations in writing, architecture, medicine, mathematics, and governance influenced every civilization that came after it.',
          vocabulary: [
            { word: 'pharaoh', phonetic: 'FAIR-oh', definition: 'The ruler of ancient Egypt, considered both a king and a living god', example: 'Pharaoh Ramesses II ruled Egypt for 66 years — one of the longest reigns in ancient history.', image: '[VOCAB_IMAGE: pharaoh in full royal regalia with double crown, crook, and flail labeled]' },
            { word: 'hieroglyphics', phonetic: 'hy-er-oh-GLIF-iks', definition: 'The ancient Egyptian writing system using picture symbols to represent sounds and words', example: 'Egyptian temples are covered in hieroglyphics that tell stories of the gods and pharaohs.', image: '[VOCAB_IMAGE: hieroglyphic text with modern English translation below selected words]' },
            { word: 'mummy', phonetic: 'MUM-ee', definition: 'A body preserved through ancient Egyptian embalming techniques for the afterlife', example: 'Egyptian mummies were wrapped in linen bandages and placed in elaborate coffins called sarcophagi.', image: '[VOCAB_IMAGE: mummification process illustrated in 5 steps]' },
          ],
          activities: [
            { id: 'pyramid_builder', type: 'simulate', title: 'Pyramid Builder', instruction: 'Plan and manage the construction of a pyramid. Solve engineering and logistics challenges.', placeholder: '[SIMULATION: Resource management game. Allocate workers, stone blocks, ramps, food supplies. Solve challenges: how to move 2.5-tonne stones, maintain worker health, achieve precise alignment with north star. Historical facts revealed as player solves each challenge]', ageRange: '8+' },
            { id: 'hieroglyphics_decoder', type: 'interact', title: 'Hieroglyphics Decoder', instruction: 'Learn to read and write your name in hieroglyphics.', placeholder: '[INTERACTIVE: Hieroglyphic alphabet with phonetic sounds. Child types name, app converts to hieroglyphic symbols. Decode hidden messages. Write simple words. Learn that hieroglyphics also included logograms (whole word symbols)]', ageRange: '6+' },
          ],
          assessment: {
            questions: [
              { type: 'multiple_choice', q: 'What was the primary purpose of the pyramids?', options: ['Astronomical observatories', 'Granaries for storing food', 'Royal tombs for pharaohs', 'Temples for religious worship'], answer: 'Royal tombs for pharaohs', explanation: 'The pyramids were elaborate tombs built to house the bodies of pharaohs for eternity. Egyptians believed the pharaoh became Osiris after death and needed to preserve the body for the afterlife journey. The pyramid shape may represent the primordial mound of creation or rays of sunlight.', level: 'knowledge' },
              { type: 'multiple_choice', q: 'Why was the Nile River essential to Egyptian civilization?', options: ['It was a natural border protecting Egypt', 'Its annual floods deposited rich soil enabling farming', 'It provided a route to trade with Europe', 'It was where pharaohs were buried'], answer: 'Its annual floods deposited rich soil enabling farming', explanation: 'The Nile\'s annual inundation left nutrient-rich silt on the floodplain, making Egypt\'s narrow river valley extraordinarily fertile in an otherwise desert region. This agricultural surplus supported a large population, specialized labor, and the monumental construction projects that defined Egyptian civilization.', level: 'understanding' },
            ],
          },
          mastery: { threshold: 80, badge: 'Egypt Scholar', badgeImage: '[BADGE: Egypt Scholar with pyramid and ankh design]', reward: 'Ancient world civilizations pathway + Egypt advanced modules unlocked', rewardImage: '[REWARD_IMAGE: ancient world map explorer preview]' },
        },
      ],
    },
    {
      id: 'great_minds',
      name: 'Great Minds Hall',
      subtitle: 'Scientists, artists, and visionaries who changed history',
      unlocked: true,
      bgImage: '[SUBWORLD_BG: Hall of portraits — scientists, artists, leaders — connected by glowing discovery timelines]',
      color: '#9B6AE0',
      lessons: [
        {
          id: 'marie_curie',
          title: 'Marie Curie: Twice a Pioneer',
          objective: 'Learn about Marie Curie\'s scientific discoveries and her role as a trailblazer for women in science',
          ageRange: '7-16', difficulty: 'foundation', xp: 90,
          heroImage: '[LESSON_HERO: Marie Curie in her laboratory, radioactive glow around her equipment, two Nobel Prize medals visible]',
          narrator: {
            foundation: 'Marie Curie was one of the greatest scientists who ever lived. She was the first woman to win a Nobel Prize — and then she won a second one in a different science! She discovered two new elements: polonium and radium. She pioneered the study of radioactivity — a word she invented. And she did all of this at a time when women were told they could not be scientists.',
            explore: 'Born Maria Sklodowska in Warsaw, Poland (1867), Curie studied in secret in Poland before moving to Paris. Working with her husband Pierre, she discovered polonium (named for Poland) and radium in 1898. She won the Nobel Prize in Physics (1903) and Chemistry (1911) — the first person to win in two different sciences. During WWI, she developed mobile X-ray units that saved thousands of lives. She died in 1934 from aplastic anemia caused by radiation exposure — the dangers were not yet known.',
            mastery: 'Curie\'s discovery of radioactivity fundamentally changed physics. Her work showed that atoms could change — transmuting from one element to another — overturning classical atomic theory. Radioactivity revealed that atoms had internal structure (later explained by Rutherford\'s nuclear model). Radioactive dating, nuclear medicine (cancer treatment), and nuclear power all trace their scientific lineage to Curie\'s work. Her insistence on keeping her research results public rather than patenting them benefited humanity enormously.',
          },
          whyItMatters: 'Marie Curie showed that barriers to science based on gender are wrong and that determination and curiosity can overcome them. Her discoveries changed medicine and our understanding of matter itself.',
          vocabulary: [
            { word: 'radioactivity', phonetic: 'ray-dee-oh-ak-TIV-ih-tee', definition: 'The spontaneous emission of energy or particles from unstable atomic nuclei — discovered by Marie Curie', example: 'Marie Curie coined the term radioactivity to describe the energy emitted by uranium and other elements.', image: '[VOCAB_IMAGE: atom with radiation waves emanating, radioactivity symbol]' },
            { word: 'element', phonetic: 'EL-eh-ment', definition: 'A substance made of only one kind of atom — cannot be broken into simpler substances by chemistry', example: 'Marie Curie discovered two new elements: polonium and radium.', image: '[VOCAB_IMAGE: periodic table with polonium and radium highlighted]' },
            { word: 'Nobel Prize', phonetic: 'NOH-bel pryz', definition: 'The most prestigious international awards for outstanding contributions to science, literature, and peace', example: 'Marie Curie won two Nobel Prizes — in Physics (1903) and Chemistry (1911).', image: '[VOCAB_IMAGE: Nobel Prize medal with Curie\'s portrait and two science categories labeled]' },
          ],
          activities: [
            { id: 'curie_timeline', type: 'explore', title: 'Marie Curie\'s Life and Discoveries', instruction: 'Follow Marie Curie\'s journey from Poland to two Nobel Prizes.', placeholder: '[INTERACTIVE BIOGRAPHY: Timeline with key moments — childhood in Warsaw, secret study groups, Paris university, meeting Pierre, discovery of polonium and radium, Nobel Prize ceremonies, WWI X-ray units, death and legacy. Each chapter: illustration placeholder, facts, key quote, connection to today]', ageRange: '7+' },
            { id: 'element_hunt', type: 'explore', title: 'Element Discovery Map', instruction: 'Discover how elements are found and added to the periodic table.', placeholder: '[INTERACTIVE PERIODIC TABLE: Click any element to see who discovered it, when, and how. Highlight Curie\'s discoveries. Show how the table grew over time as new elements were discovered. Connect to how scientists work today]', ageRange: '9+' },
          ],
          assessment: {
            questions: [
              { type: 'multiple_choice', q: 'What made Marie Curie\'s Nobel Prize wins historically unique?', options: ['She won both on the same day', 'She was the first person to win Nobel Prizes in two different scientific fields', 'She donated both prizes to charity', 'She shared both prizes with Pierre Curie'], answer: 'She was the first person to win Nobel Prizes in two different scientific fields', explanation: 'Marie Curie won the Nobel Prize in Physics (1903) for research on radioactivity and the Nobel Prize in Chemistry (1911) for discovering polonium and radium. She remains the only person to have won Nobel Prizes in two different sciences.', level: 'knowledge' },
            ],
          },
          mastery: { threshold: 80, badge: 'Science Pioneer', badgeImage: '[BADGE: Science Pioneer with atom and Nobel medal]', reward: 'Great Minds Hall additional biographies unlocked', rewardImage: '[REWARD_IMAGE: great minds full hall preview]' },
        },
      ],
    },
  ],
  worldMastery: {
    requirement: 'Complete all core History subworlds',
    badge: 'History Scholar',
    badgeImage: '[BADGE: History Scholar with scroll, globe, and timeline design]',
    reward: 'World civilizations deep dive, Great Minds advanced pathways, and historical research tools unlocked',
  },
}
