// ─── FOLKLORE & MYTHOLOGY — COMPLETE CURRICULUM ─────────────────

export const MYTHOLOGY = {
  id: 'mythology',
  name: 'Folklore & Mythology',
  subtitle: 'Stories, Legends & Cultural Wisdom',
  color: '#D4507A',
  bgGradient: 'linear-gradient(160deg, #1A0820 0%, #2D0A30 45%, #180615 100%)',
  unlocked: true,

  subworlds: [

    // ══════════════════════════════════════════════
    // SUBWORLD 1 — MYTHICAL CREATURES
    // ══════════════════════════════════════════════
    {
      id: 'mythical_creatures',
      name: 'Mythical Creatures',
      subtitle: 'Dragons, phoenixes, and legendary beings',
      unlocked: true,
      bgImage: '[SUBWORLD_BG: Mystical forest with glowing creatures — dragon silhouette, phoenix in sky]',
      color: '#D4507A',

      lessons: [
        {
          id: 'dragons',
          title: 'Dragons: Fire and Legend',
          objective: 'Discover how dragons appear in myths across cultures and what they represent',
          ageRange: '4-12',
          difficulty: 'foundation',
          xp: 75,
          heroImage: '[LESSON_HERO: Dragon from different cultures side by side — European dragon, Chinese dragon, Japanese dragon]',
          narrator: {
            foundation: 'Dragons are one of the most amazing creatures in all of human storytelling. Nearly every culture on Earth has a dragon story. In Europe, dragons breathe fire and guard treasure. In China, dragons bring good luck and control rain. In Japan, they live in rivers and seas. Even though dragons are not real animals, they teach us something amazing — people all around the world, who never met each other, imagined similar powerful creatures!',
            explore: 'The global appearance of dragon myths is fascinating to scholars. European dragons — like those in Beowulf or Saint George legends — typically represent chaos, danger, and hoarding. East Asian dragons are benevolent water deities associated with rain, rivers, and imperial power. Mesoamerican cultures like the Aztec worshipped Quetzalcoatl, a feathered serpent deity. The parallel evolution of dragon myths across unconnected cultures suggests they may represent primal fears — of large predators, storms, and natural forces.',
            mastery: 'Comparative mythology examines how similar archetypes emerge across cultures. The dragon archetype may originate from prehistoric human encounters with large reptiles, or from psychological archetypes described by Carl Jung. The Jungian interpretation sees the dragon as a symbol of the unconscious mind — the hero who slays the dragon represents the ego overcoming primal instincts. Studying dragon myths teaches us about the universal human experience of confronting fear, seeking power, and storytelling as a way of making sense of the natural world.',
          },
          whyItMatters: 'Dragon myths from every culture tell us that humans everywhere share the same imagination and fears. Studying them teaches cultural literacy, empathy, and critical thinking about how stories are created and shared.',
          vocabulary: [
            { word: 'mythology', phonetic: 'mih-THOL-oh-jee', definition: 'A collection of traditional stories that explain natural events, cultural values, or the origins of the world', example: 'Greek mythology includes stories about Zeus, Poseidon, and many other gods.', image: '[VOCAB_IMAGE: ancient scroll with mythological illustrations]' },
            { word: 'legend', phonetic: 'LEJ-end', definition: 'A traditional story about historical events that may be partly true and partly fictional', example: 'The legend of King Arthur may be based on a real historical leader.', image: '[VOCAB_IMAGE: medieval tapestry showing legendary scene]' },
            { word: 'archetype', phonetic: 'AR-kih-type', definition: 'A recurring symbol, character type, or theme that appears across many different cultures and stories', example: 'The dragon is an archetype that appears in myths from Europe to China to the Americas.', image: '[VOCAB_IMAGE: comparative diagram showing dragon images from 4 different cultures]' },
            { word: 'culture', phonetic: 'KUL-cher', definition: 'The shared beliefs, customs, arts, and practices of a group of people', example: 'Different cultures have very different stories about dragons.', image: '[VOCAB_IMAGE: collage of cultural symbols from around the world]' },
          ],
          activities: [
            { id: 'dragon_compare', type: 'compare', title: 'Dragon Culture Match', instruction: 'Match each dragon description to the culture it comes from.', placeholder: '[INTERACTIVE: 5 dragon descriptions, 5 culture cards — Chinese, European, Japanese, Norse, Aztec — match pairs]', ageRange: '5+' },
            { id: 'dragon_story', type: 'story', title: 'Choose Your Dragon Adventure', instruction: 'You discover a dragon. Is it dangerous or wise? Your choices shape the story.', placeholder: '[INTERACTIVE STORY: Branching narrative — meet dragon, choose to fight or talk, story branches based on choice, each path teaches a cultural lesson about dragons]', ageRange: '6+' },
            { id: 'dragon_draw', type: 'create', title: 'Design Your Dragon', instruction: 'Create your own dragon. What culture does it come from? What powers does it have?', placeholder: '[CREATIVE ACTIVITY: Dragon design worksheet with cultural choices, powers, and name — child documents their design, saved to portfolio]', ageRange: '4+' },
          ],
          assessment: {
            questions: [
              { type: 'multiple_choice', q: 'In Chinese mythology, dragons are seen as:', options: ['Dangerous fire-breathers to be slain', 'Lucky beings that bring rain and good fortune', 'Guardians of buried treasure', 'Creatures that cause earthquakes'], answer: 'Lucky beings that bring rain and good fortune', explanation: 'Chinese dragons (lóng) are benevolent and associated with water, rain, and good luck. They are symbols of imperial power and prosperity, very different from the threatening dragons of European mythology.', level: 'knowledge' },
              { type: 'multiple_choice', q: 'Why do dragon myths appear in cultures that never had contact with each other?', options: ['Dragons were real and everyone saw them', 'All cultures copied from the same ancient book', 'Humans everywhere share similar fears and use stories to explain powerful natural forces', 'It is just a coincidence'], answer: 'Humans everywhere share similar fears and use stories to explain powerful natural forces', explanation: 'Scholars believe parallel myths arise because humans everywhere experience the same natural phenomena — storms, floods, predators — and use storytelling to make sense of them. This is called the universality of mythology.', level: 'understanding' },
            ],
          },
          mastery: { threshold: 75, badge: 'Dragon Lore Scholar', badgeImage: '[BADGE_IMAGE: Dragon Lore Scholar badge with dragon silhouette design]', reward: 'Dragon mythology reference guide unlocked', rewardImage: '[REWARD_IMAGE: dragon mythology guide preview]' },
        },

        {
          id: 'phoenix',
          title: 'The Phoenix: Rebirth and Renewal',
          objective: 'Explore the phoenix myth across cultures and understand what it symbolizes about cycles of life',
          ageRange: '5-12',
          difficulty: 'foundation',
          xp: 70,
          heroImage: '[LESSON_HERO: Phoenix rising from flames — dramatic, colorful, fiery wings spread wide]',
          narrator: {
            foundation: 'The phoenix is a magical bird that lives for hundreds of years. When it is old, it builds a nest and catches fire — and from the ashes, a new phoenix is born! The phoenix appears in ancient Egyptian mythology as the Bennu bird, in Greek mythology as the Phoenix, and in Chinese mythology as the Fenghuang. Every culture that has this story uses it to teach the same beautiful idea: endings are also beginnings. After something ends, something new and beautiful can start.',
            explore: 'The phoenix myth carries profound philosophical meaning across cultures. In ancient Egypt, the Bennu bird was associated with the sun god Ra and the annual flooding of the Nile — destruction followed by rebirth and abundance. In Greek mythology, only one phoenix exists at a time, living 500 to 1,000 years before its renewal. Medieval Christians adopted the phoenix as a symbol of resurrection. The Fenghuang of Chinese mythology represents the union of yin and yang, and appears only during times of peace and good governance.',
            mastery: 'The phoenix archetype represents a universal human understanding of cyclical time. Unlike linear Western time concepts, many traditional cultures understood time as cyclical — seasons, generations, civilizations all following patterns of birth, growth, decline, and renewal. The phoenix myth also relates to the concept of entropy in physics: complex systems break down, but their components reorganize into new forms. Modern usage of "phoenix" metaphors — in organizational psychology, environmental restoration, and personal growth narratives — demonstrates the archetype\'s continued cultural power.',
          },
          whyItMatters: 'The phoenix teaches resilience — the idea that difficult endings can become beautiful beginnings. This is one of the most important life lessons humans across history have tried to pass down through stories.',
          vocabulary: [
            { word: 'symbol', phonetic: 'SIM-bul', definition: 'Something that represents or stands for something else', example: 'The phoenix is a symbol of hope and new beginnings.', image: '[VOCAB_IMAGE: phoenix symbol in different cultural art styles]' },
            { word: 'rebirth', phonetic: 'ree-BERTH', definition: 'A new beginning after an ending; a renewal or revival', example: 'The phoenix rising from ashes represents rebirth.', image: '[VOCAB_IMAGE: before and after — ashes transforming to a glowing bird]' },
            { word: 'resilience', phonetic: 'reh-ZIL-ee-ents', definition: 'The ability to recover from difficulty and keep going', example: 'The phoenix story teaches resilience — that we can rise again after hard times.', image: '[VOCAB_IMAGE: plant growing through cracked concrete — visual metaphor for resilience]' },
          ],
          activities: [
            { id: 'phoenix_cultures', type: 'explore', title: 'Phoenix Around the World', instruction: 'Discover how five different cultures tell the phoenix story.', placeholder: '[INTERACTIVE: World map with 5 marked locations. Tap each: Egypt (Bennu), Greece (Phoenix), China (Fenghuang), Russia (Zhar-Ptitsa), Arabia (Anqa). Each reveals cultural story and illustration placeholder]', ageRange: '6+' },
            { id: 'phoenix_reflect', type: 'create', title: 'Your Phoenix Moment', instruction: 'Think of a time something ended and something new began. Draw or write about your phoenix moment.', placeholder: '[REFLECTIVE ACTIVITY: Two panels — "The ending" and "The new beginning" — child draws or types their experience, creates personal phoenix story]', ageRange: '7+' },
          ],
          assessment: {
            questions: [
              { type: 'multiple_choice', q: 'What does the phoenix symbolize in most cultures?', options: ['Danger and destruction', 'Greed and treasure', 'Rebirth and new beginnings after endings', 'Strength in battle'], answer: 'Rebirth and new beginnings after endings', explanation: 'Across Egyptian, Greek, Chinese, and other mythologies, the phoenix consistently represents the cycle of endings leading to new beginnings — the idea that destruction is followed by renewal.', level: 'understanding' },
            ],
          },
          mastery: { threshold: 75, badge: 'Phoenix Scholar', badgeImage: '[BADGE_IMAGE: Phoenix Scholar badge with rising phoenix design]', reward: 'Phoenix animated profile decoration', rewardImage: '[REWARD_IMAGE: animated phoenix decoration preview]' },
        },

        {
          id: 'mythical_creatures_world',
          title: 'Creatures of Legend',
          objective: 'Identify and compare unicorns, mermaids, griffins, and other mythical beings across world cultures',
          ageRange: '4-11',
          difficulty: 'foundation',
          xp: 80,
          heroImage: '[LESSON_HERO: Gallery of mythical creatures — unicorn, mermaid, griffin, fairy, giant — illustrated in consistent storybook style]',
          narrator: {
            foundation: 'The world of mythology is filled with incredible creatures! Unicorns are horses with magic horns — they appear in ancient Greek writings, Scottish legends, and Chinese mythology. Mermaids live in the ocean — sailors in almost every seafaring culture told stories about them. Griffins have an eagle\'s head and a lion\'s body, guarding great treasures. Fairies are tiny magical beings in Celtic folklore. Giants appear in Norse mythology, in the Bible, and in folklore from every continent. These creatures reflect what humans found most magical, most powerful, and most mysterious about the world.',
            explore: 'Mythical creatures often embody natural phenomena or human values given animal form. The unicorn\'s horn — called an alicorn — was believed to have healing powers and was associated with purity and truth. Medieval Europeans believed a unicorn could only be tamed by someone with a pure heart. Mermaids reflect the mystery and danger of the sea — they appear in Assyrian mythology from 1000 BCE and in every seafaring culture. The griffin combined two apex predators, making it the ultimate guardian creature in Persian, Greek, and medieval European heraldry.',
          },
          whyItMatters: 'Learning about mythical creatures from different cultures builds cultural literacy, imaginative thinking, and respect for diverse traditions. It also teaches us how humans have always tried to explain and give form to things they found mysterious or powerful.',
          vocabulary: [
            { word: 'folklore', phonetic: 'FOHK-lor', definition: 'Traditional stories, customs, and beliefs of a community passed down through generations', example: 'Fairy tales are part of European folklore.', image: '[VOCAB_IMAGE: grandmother telling story to children around fire — oral tradition illustration]' },
            { word: 'mythical', phonetic: 'MITH-ih-kul', definition: 'Existing only in myths or legends; imaginary but culturally significant', example: 'Dragons are mythical creatures that appear in many cultures.', image: '[VOCAB_IMAGE: illustration showing "myth" vs "reality" side by side for same animal]' },
            { word: 'heraldry', phonetic: 'HAIR-ul-dree', definition: 'The practice of designing and displaying coats of arms, often featuring mythical creatures', example: 'The griffin appears in the heraldry of many European noble families.', image: '[VOCAB_IMAGE: European coat of arms featuring griffin, labeled parts]' },
          ],
          activities: [
            { id: 'creature_gallery', type: 'explore', title: 'Mythical Creature Gallery', instruction: 'Explore 12 mythical creatures. Tap each to discover its origin culture, powers, and what it represents.', placeholder: '[INTERACTIVE GALLERY: 12 creature cards — unicorn, mermaid, griffin, fairy, giant, centaur, sphinx, phoenix, kitsune (Japanese fox), kelpie (Scottish water horse), thunderbird (Native American), Baku (Japanese dream eater). Each: illustration placeholder, culture, story, symbolic meaning]', ageRange: '4+' },
            { id: 'creature_create', type: 'create', title: 'Create Your Own Mythical Creature', instruction: 'Design a mythical creature. What does it represent? What culture does it come from? What powers does it have?', placeholder: '[CREATIVE DESIGNER: Body parts selector (different animals), power selector, name field, cultural origin field, symbolic meaning field — child creates their own mythological creature with backstory]', ageRange: '5+' },
          ],
          assessment: {
            questions: [
              { type: 'multiple_choice', q: 'Why do so many cultures have stories about mythical creatures?', options: ['Because all the creatures were real', 'Humans everywhere used stories to explain mysteries and give form to values and fears', 'Because people copied each other\'s stories', 'Only a few cultures have mythical creature stories'], answer: 'Humans everywhere used stories to explain mysteries and give form to values and fears', explanation: 'Mythical creatures are how humans across history have personified natural phenomena (storms, ocean dangers), abstract values (purity, wisdom, strength), and existential fears. They appear independently in cultures worldwide because humans share the same basic experiences and needs.', level: 'understanding' },
            ],
          },
          mastery: { threshold: 75, badge: 'Creature Lore Master', badgeImage: '[BADGE_IMAGE: Creature Lore Master badge with griffin design]', reward: 'Mythical creature encyclopedia unlocked', rewardImage: '[REWARD_IMAGE: creature encyclopedia preview]' },
        },
      ], // end mythical_creatures lessons
    }, // end mythical_creatures subworld

    // ══════════════════════════════════════════════
    // SUBWORLD 2 — WORLD MYTHOLOGY
    // ══════════════════════════════════════════════
    {
      id: 'world_mythology',
      name: 'World Mythology',
      subtitle: 'Gods, heroes, and creation stories',
      unlocked: true,
      bgImage: '[SUBWORLD_BG: Montage of world mythology — Greek columns, Egyptian pyramids, Norse trees, Japanese torii gate]',
      color: '#9B6AE0',

      lessons: [
        {
          id: 'greek_mythology',
          title: 'Greek Mythology',
          objective: 'Identify major Greek gods, heroes, and myths and understand their cultural and historical significance',
          ageRange: '6-14',
          difficulty: 'foundation',
          xp: 90,
          heroImage: '[LESSON_HERO: Mount Olympus with Greek gods gathered — Zeus with lightning bolt, Athena with owl, Poseidon with trident]',
          narrator: {
            foundation: 'The ancient Greeks lived over 2,500 years ago, and they told the most incredible stories to explain the world around them. They believed in twelve great gods who lived on Mount Olympus — the highest mountain in Greece. Zeus was king of the gods and controlled lightning. Poseidon ruled the seas. Athena was the goddess of wisdom. Aphrodite was the goddess of love. Their stories, called myths, explained why the sun moves across the sky, why seasons change, and what happens after we die.',
            explore: 'Greek mythology is one of the most extensively documented ancient mythological systems. The twelve Olympians — Zeus, Hera, Poseidon, Demeter, Athena, Apollo, Artemis, Ares, Aphrodite, Hephaestus, Hermes, and Dionysus — each governed different aspects of the natural and human world. Greek myths served multiple purposes: explaining natural phenomena (Persephone\'s time in the underworld explained seasons), teaching moral lessons (Narcissus warned against vanity), and establishing cultural identity. Homer\'s Iliad and Odyssey preserve these myths in poetic form.',
            mastery: 'Greek mythology profoundly shaped Western civilization. Greek mythological characters and archetypes permeate literature, psychology (the Oedipus complex, Narcissism), astronomy (planets named for Roman equivalents of Greek gods), medicine (Hippocrates, the Asclepius staff), and philosophy. Joseph Campbell\'s Hero\'s Journey — derived largely from Greek mythology — identified a universal narrative structure present in myths worldwide. Understanding Greek mythology is essential for analyzing Western literature, art, architecture, and political philosophy.',
          },
          whyItMatters: 'Greek mythology shaped the literature, art, philosophy, and science of the Western world for 2,500 years and continues to influence language, psychology, and storytelling today.',
          vocabulary: [
            { word: 'deity', phonetic: 'DEE-ih-tee', definition: 'A god or goddess', example: 'Zeus was the chief deity of the Greek pantheon.', image: '[VOCAB_IMAGE: illustration of Zeus with lightning bolt and eagle]' },
            { word: 'pantheon', phonetic: 'PAN-thee-on', definition: 'All the gods of a particular mythology or religion', example: 'The Greek pantheon included twelve major Olympian gods.', image: '[VOCAB_IMAGE: Mount Olympus with all twelve Olympian gods arranged in tiers]' },
            { word: 'myth', phonetic: 'mith', definition: 'A traditional story that explains natural events or teaches cultural values — not meant as literal history', example: 'The myth of Persephone explains why we have seasons.', image: '[VOCAB_IMAGE: Persephone myth illustration — underground realm and above-ground world split]' },
            { word: 'hero', phonetic: 'HEER-oh', definition: 'In mythology, a person of extraordinary strength or courage who undertakes great challenges', example: 'Hercules was the greatest hero of Greek mythology.', image: '[VOCAB_IMAGE: Hercules with twelve labors depicted around him]' },
            { word: 'Olympus', phonetic: 'oh-LIM-pus', definition: 'The highest mountain in Greece, believed to be the home of the twelve major Greek gods', example: 'The gods lived on Mount Olympus, watching over humans below.', image: '[VOCAB_IMAGE: Mount Olympus dramatic landscape with clouds]' },
          ],
          activities: [
            { id: 'greek_gods_match', type: 'match', title: 'Greek Gods and Their Domains', instruction: 'Match each Greek god to what they ruled over.', placeholder: '[INTERACTIVE MATCH: 12 god cards with illustration placeholders, 12 domain cards — Zeus/thunder, Poseidon/sea, Athena/wisdom, Apollo/sun&arts, Artemis/moon&hunting, Ares/war, Aphrodite/love, Hermes/messages&travel, Hephaestus/fire&crafts, Demeter/harvest, Dionysus/wine, Hera/marriage]', ageRange: '7+' },
            { id: 'hero_journey', type: 'story', title: 'The Hero\'s Journey with Odysseus', instruction: 'Follow Odysseus on his 10-year journey home from Troy.', placeholder: '[INTERACTIVE STORY: Chapter-based retelling of The Odyssey — key episodes: Cyclops Polyphemus, the Sirens, Circe, Scylla and Charybdis, Penelope and the suitors. Each chapter: narration, vocabulary word, one choice for reader]', ageRange: '8+' },
            { id: 'myth_maker', type: 'create', title: 'Write a Greek Myth', instruction: 'Create your own myth that explains something in nature using Greek gods.', placeholder: '[CREATIVE WRITING TEMPLATE: "Why [natural phenomenon] happens" — child picks phenomenon, picks gods, writes 5-sentence myth following: setting, problem, god\'s action, consequence, lesson]', ageRange: '9+' },
          ],
          assessment: {
            questions: [
              { type: 'multiple_choice', q: 'Who was the king of the Greek gods?', options: ['Poseidon','Hades','Zeus','Apollo'], answer: 'Zeus', explanation: 'Zeus was the ruler of Mount Olympus and king of the Olympian gods, associated with lightning, thunder, and justice.', level: 'knowledge' },
              { type: 'multiple_choice', q: 'What was the main purpose of Greek mythology?', options: ['Pure entertainment only', 'To explain natural events, teach moral lessons, and express cultural identity', 'To record historical facts accurately', 'To teach science'], answer: 'To explain natural events, teach moral lessons, and express cultural identity', explanation: 'Greek myths served as ancient science (explaining seasons, storms), moral education (hubris myths warned against pride), and cultural cohesion (shared stories created community identity).', level: 'understanding' },
              { type: 'multiple_choice', q: 'Which goddess was associated with wisdom and strategic warfare?', options: ['Aphrodite','Artemis','Hera','Athena'], answer: 'Athena', explanation: 'Athena was the goddess of wisdom, craft, and strategic warfare. She was the patron deity of Athens, which was named in her honor.', level: 'knowledge' },
            ],
          },
          mastery: { threshold: 80, badge: 'Olympian Scholar', badgeImage: '[BADGE_IMAGE: Olympian Scholar badge with Greek column design]', reward: 'Greek mythology reference guide + Olympus background', rewardImage: '[REWARD_IMAGE: Mount Olympus animated background preview]' },
        },

        {
          id: 'egyptian_mythology',
          title: 'Egyptian Mythology',
          objective: 'Discover the gods, creation myths, and afterlife beliefs of ancient Egypt',
          ageRange: '7-14',
          difficulty: 'foundation',
          xp: 85,
          heroImage: '[LESSON_HERO: Egyptian gods on temple wall — Ra with sun disk, Anubis with jackal head, Thoth with ibis head, Isis with wings]',
          narrator: {
            foundation: 'Ancient Egypt is one of the oldest civilizations in human history — over 5,000 years old. The Egyptians had hundreds of gods, each with an animal head or feature. Ra was the god of the sun, and every day the Egyptians watched his chariot cross the sky. Anubis had the head of a jackal and guided the dead to the afterlife. The Egyptians believed that after death, your heart was weighed against a feather. If your heart was as light as a feather — because you had lived well — you entered paradise.',
            explore: 'Egyptian mythology is characterized by its complex relationship with death and the afterlife. The Book of the Dead contained spells and instructions to guide souls through the Duat (underworld). The weighing of the heart ceremony — in which the deceased\'s heart was measured against the feather of Ma\'at (truth and justice) — reflects sophisticated ethical philosophy. Egyptian creation myths centered on Heliopolis, Memphis, and Hermopolis, each city developing its own cosmological narrative. The Osiris myth — death, resurrection, and justice — became one of the most influential stories in human history.',
            mastery: 'Egyptian mythology influenced Greek, Roman, and early Christian religious thought. Osiris\'s death and resurrection directly parallel later religious narratives. The concept of Ma\'at — cosmic order, truth, and justice — represents one of humanity\'s earliest written ethical frameworks. Egyptian temples served as astronomical observatories aligned with solar events, merging mythology with sophisticated astronomical knowledge. Hieroglyphic writing, developed partly to record religious texts, was one of the world\'s first writing systems.',
          },
          whyItMatters: 'Egyptian mythology built one of history\'s first systematic ethical frameworks. The weighing of the heart ritual — live a good life, treat others fairly — is a concept that influenced every major ethical tradition that came after it.',
          vocabulary: [
            { word: 'hieroglyphics', phonetic: 'hy-er-oh-GLIF-iks', definition: 'The ancient Egyptian writing system using picture symbols to represent sounds and concepts', example: 'Hieroglyphics were carved into temple walls to tell stories of the gods.', image: '[VOCAB_IMAGE: hieroglyphic text with modern alphabet translation below]' },
            { word: 'pharaoh', phonetic: 'FAIR-oh', definition: 'The ruler of ancient Egypt, considered both king and a living god', example: 'The pharaoh was believed to be a representative of the gods on Earth.', image: '[VOCAB_IMAGE: pharaoh with crown and crook/flail — traditional symbols of power]' },
            { word: 'afterlife', phonetic: 'AF-ter-life', definition: 'Life or existence after death — many cultures have beliefs about what happens after we die', example: 'The Egyptians built elaborate tombs to prepare for the afterlife.', image: '[VOCAB_IMAGE: Egyptian paradise/Field of Reeds illustration alongside tomb entrance]' },
            { word: 'Ma\'at', phonetic: 'mah-AHT', definition: 'The Egyptian concept of truth, justice, and cosmic order — also a goddess depicted with a feather', example: 'Ma\'at represented the idea that the universe only works when everything is in balance.', image: '[VOCAB_IMAGE: scales of justice with heart on one side and feather on other — Egyptian style]' },
          ],
          activities: [
            { id: 'egyptian_gods', type: 'explore', title: 'Egyptian Gods Gallery', instruction: 'Meet 12 Egyptian gods and discover their roles.', placeholder: '[INTERACTIVE GALLERY: Ra (sun), Osiris (death/resurrection), Isis (magic/motherhood), Horus (sky/pharaoh), Anubis (death/embalming), Thoth (writing/wisdom), Set (chaos), Hathor (love/music), Bastet (protection/cats), Sekhmet (war/healing), Nephthys (mourning), Ma\'at (justice/truth). Each: illustration placeholder, role, animal feature, story]', ageRange: '7+' },
            { id: 'heart_scale', type: 'simulate', title: 'Weighing of the Heart', instruction: 'Experience the Egyptian afterlife ceremony. Anubis weighs your heart against the feather of Ma\'at.', placeholder: '[INTERACTIVE SIMULATION: Scale animation, questions about good deeds and values — based on answers, heart becomes lighter or heavier, outcome changes — educational about ethical values, not judgment of child]', ageRange: '8+' },
          ],
          assessment: {
            questions: [
              { type: 'multiple_choice', q: 'What did the weighing of the heart ceremony represent in Egyptian belief?', options: ['Physical fitness', 'Wealth and status', 'Whether a person had lived justly and truthfully', 'Intelligence and wisdom'], answer: 'Whether a person had lived justly and truthfully', explanation: 'In the weighing of the heart, the deceased\'s heart was measured against the feather of Ma\'at (truth and justice). A heart light as a feather — indicating a life lived well — allowed entry to paradise (the Field of Reeds).', level: 'understanding' },
            ],
          },
          mastery: { threshold: 80, badge: 'Egypt Scholar', badgeImage: '[BADGE_IMAGE: Egypt Scholar badge with ankh design]', reward: 'Egyptian temple animated background', rewardImage: '[REWARD_IMAGE: Egyptian temple background preview]' },
        },

        {
          id: 'norse_mythology',
          title: 'Norse Mythology',
          objective: 'Explore the Viking world of Norse gods, the World Tree, and the concept of Ragnarök',
          ageRange: '7-14',
          difficulty: 'foundation',
          xp: 85,
          heroImage: '[LESSON_HERO: Yggdrasil the World Tree with nine realms visible — Asgard at top, Midgard in middle, dramatic Norse art style]',
          narrator: {
            foundation: 'The Vikings of Scandinavia had some of the most dramatic myths ever told. Their chief god was Odin, who gave up one eye to gain wisdom. Thor was the god of thunder, carrying his magical hammer Mjolnir. Loki was a trickster who sometimes helped the gods and sometimes caused chaos. The Vikings believed the universe was a giant tree called Yggdrasil, with nine different worlds in its branches and roots. And they believed the world would end in a great battle called Ragnarök — but that a new world would rise from the ashes.',
            explore: 'Norse mythology is preserved in the Prose Edda and Poetic Edda, written down in Iceland in the 13th century. The Nine Realms of Yggdrasil include Asgard (gods), Midgard (humans), Jotunheim (giants), Helheim (the dead), Vanaheim, Alfheim, Dwarfheim, Muspelheim, and Niflheim. Norse mythology is notable for its cyclical cosmology — Ragnarök ends and recreates the world. The Norns (Fate goddesses) wove the destinies of gods and humans. Norse mythology strongly influenced J.R.R. Tolkien\'s Middle-earth.',
          },
          whyItMatters: 'Norse mythology introduced concepts of fate, courage in the face of inevitable endings, and the cyclical nature of existence that have shaped literature, philosophy, and culture from the Vikings to modern fantasy.',
          vocabulary: [
            { word: 'Yggdrasil', phonetic: 'IG-druh-sil', definition: 'The World Tree in Norse mythology — a massive ash tree connecting the nine realms of existence', example: 'Yggdrasil connects all nine worlds of Norse mythology from its roots to its crown.', image: '[VOCAB_IMAGE: Yggdrasil with nine realms labeled at different parts of the tree]' },
            { word: 'Ragnarök', phonetic: 'RAG-nuh-rok', definition: 'The prophesied end of the world in Norse mythology, followed by its rebirth', example: 'The gods knew Ragnarök would come, but they prepared to face it bravely anyway.', image: '[VOCAB_IMAGE: dramatic Norse battle scene with cosmic imagery]' },
            { word: 'rune', phonetic: 'roon', definition: 'Letters of the ancient Norse alphabet, also used for magic and divination', example: 'Odin hung from Yggdrasil for nine days to discover the secret of the runes.', image: '[VOCAB_IMAGE: runic alphabet with Norse carving examples]' },
          ],
          activities: [
            { id: 'nine_realms', type: 'explore', title: 'Journey Through Nine Realms', instruction: 'Travel through all nine realms of Yggdrasil. Tap each realm to discover who lives there.', placeholder: '[INTERACTIVE: Yggdrasil illustration, tap each realm: Asgard (gods, Valhalla), Midgard (humans), Jotunheim (giants), Helheim (the dead), Vanaheim (nature gods), Alfheim (elves), Svartalfheim (dwarves), Muspelheim (fire giants), Niflheim (ice). Each realm: description, notable inhabitants, illustration placeholder]', ageRange: '8+' },
            { id: 'viking_gods', type: 'match', title: 'Match the Norse Gods', instruction: 'Match each Norse god to their symbol and domain.', placeholder: '[MATCH GAME: Odin/ravens/wisdom, Thor/hammer/thunder, Loki/serpent/trickery, Freya/necklace/love&war, Tyr/sword/justice, Frigg/spindle/fate&family, Baldur/light/beauty&goodness]', ageRange: '7+' },
          ],
          assessment: {
            questions: [
              { type: 'multiple_choice', q: 'What is Yggdrasil in Norse mythology?', options: ['A powerful weapon', 'A giant serpent', 'The World Tree connecting nine realms', 'A type of Viking ship'], answer: 'The World Tree connecting nine realms', explanation: 'Yggdrasil is a massive ash tree that connects all nine realms of Norse cosmology. Its roots reach into three wells — the Well of Wisdom, the Well of Fate, and Hvergelmir — and its branches extend to the sky.', level: 'knowledge' },
            ],
          },
          mastery: { threshold: 80, badge: 'Norse Scholar', badgeImage: '[BADGE_IMAGE: Norse Scholar badge with Mjolnir design]', reward: 'Nine realms map unlocked', rewardImage: '[REWARD_IMAGE: Nine realms interactive map preview]' },
        },
      ], // end world_mythology lessons
    }, // end world_mythology subworld

    // ══════════════════════════════════════════════
    // SUBWORLD 3 — CRITICAL THINKING & CULTURAL LITERACY
    // ══════════════════════════════════════════════
    {
      id: 'critical_thinking',
      name: 'Myth vs Reality',
      subtitle: 'Thinking clearly about stories and evidence',
      unlocked: false,
      bgImage: '[SUBWORLD_BG: Split image — magical mythological world on one side, scientific observation on the other, meeting in the middle]',
      color: '#20C8E0',

      lessons: [
        {
          id: 'myth_vs_fact',
          title: 'Myth vs Legend vs History vs Science',
          objective: 'Distinguish between mythology, legend, folklore, historical evidence, and scientific evidence',
          ageRange: '8-16',
          difficulty: 'explore',
          xp: 100,
          heroImage: '[LESSON_HERO: Four quadrants — illustrated myth, tapestry legend, archaeological artifact, scientific diagram — showing different ways humans understand the world]',
          narrator: {
            foundation: 'There are different kinds of stories and different kinds of truth. A myth is a sacred story that explains the world through gods and magic — not meant to be taken literally. A legend is a story that might be based on a real person or event but has grown bigger over time. Folklore is traditional stories passed down in communities. History is what actually happened, supported by evidence. Science is how we investigate and understand the natural world through observation and testing. All of these are valuable — but they do different things and should not be confused.',
            explore: 'Critical thinking about sources requires understanding what type of claim is being made and what kind of evidence would support or refute it. Historical claims require primary sources, archaeology, and corroborating accounts. Scientific claims require reproducible experiments and peer review. Mythological claims are not meant to be evaluated as factual — their value lies in cultural, psychological, and philosophical meaning. The mistake many people make is applying the wrong standard to a type of claim — treating myths as science, or dismissing mythology because it is not empirically testable.',
            mastery: 'Epistemology — the study of knowledge — asks how we know what we know. Different knowledge domains have different standards of evidence: historical evidence (primary sources, material culture), scientific evidence (reproducibility, falsifiability), legal evidence (witness testimony, documentation), and cultural knowledge (oral tradition, lived experience). Sophisticated thinking requires knowing which type of knowledge you are dealing with and applying the appropriate analytical framework. This is essential for media literacy, scientific reasoning, and navigating information in the modern world.',
          },
          whyItMatters: 'In a world full of information, knowing how different types of knowledge work — and how to think clearly about evidence — is one of the most important skills a person can develop.',
          vocabulary: [
            { word: 'evidence', phonetic: 'EV-ih-dens', definition: 'Information that supports or disproves a claim', example: 'Archaeological evidence of ancient cities supports historical accounts of those civilizations.', image: '[VOCAB_IMAGE: archaeologist at dig site with artifacts and note-taking]' },
            { word: 'critical thinking', phonetic: 'KRIT-ih-kul THINK-ing', definition: 'Careful, logical analysis of information to form a well-reasoned judgment', example: 'Critical thinking helps us tell the difference between a myth and a scientific fact.', image: '[VOCAB_IMAGE: brain with question marks and checkmarks — analytical thinking illustration]' },
            { word: 'epistemology', phonetic: 'eh-pis-teh-MOL-oh-jee', definition: 'The branch of philosophy concerned with the nature and limits of knowledge', example: 'Epistemology asks: how do we know what we know, and how certain can we be?', image: '[VOCAB_IMAGE: philosopher with question "How do we know?" and different types of knowledge shown as branches]' },
          ],
          activities: [
            { id: 'sort_claims', type: 'sort', title: 'Sort the Claims', instruction: 'Decide whether each statement is a myth, legend, historical fact, or scientific fact.', placeholder: '[INTERACTIVE SORT: 12 statements to categorize. Examples: "The Earth orbits the Sun" (science), "Zeus controls lightning" (myth), "King Arthur ruled in Britain" (legend/disputed history), "The Roman Empire fell in 476 CE" (history), "Dragons could fly" (myth), "Humans evolved from earlier primates" (science). Drag to four labeled bins. Explanations reveal after each.]', ageRange: '9+' },
            { id: 'evidence_detective', type: 'explore', title: 'Evidence Detective', instruction: 'For each claim, decide what type of evidence you would need to support or challenge it.', placeholder: '[SCENARIO CARDS: 8 claims, each with 4 evidence options. Child selects which evidence type applies. Explanation follows. Builds systematic thinking about how different claims require different evidence.]', ageRange: '11+' },
          ],
          assessment: {
            questions: [
              { type: 'multiple_choice', q: 'What is the key difference between a myth and a historical fact?', options: ['Myths are more interesting', 'Historical facts are supported by evidence; myths are cultural stories not meant as literal history', 'Myths are always false', 'Historical facts are always true'], answer: 'Historical facts are supported by evidence; myths are cultural stories not meant as literal history', explanation: 'Myths serve cultural, psychological, and philosophical purposes — they are not intended as factual accounts. Historical facts are claims supported by evidence. This doesn\'t make myths worthless — it makes them different, and valuable in their own way.', level: 'understanding' },
              { type: 'multiple_choice', q: 'Why is it important to know what TYPE of knowledge something is?', options: ['It is not important', 'So you can apply the right kind of thinking and the right standard of evidence', 'So you can decide what to believe', 'Only scientists need to know this'], answer: 'So you can apply the right kind of thinking and the right standard of evidence', explanation: 'Different types of knowledge require different analytical approaches. Scientific claims need experimental evidence. Historical claims need primary sources. Mythological claims need cultural and philosophical analysis. Applying the wrong standard to any of these leads to confusion.', level: 'reasoning' },
            ],
          },
          mastery: { threshold: 85, badge: 'Critical Thinker', badgeImage: '[BADGE_IMAGE: Critical Thinker badge with scales and magnifying glass]', reward: 'Advanced folklore studies pathway unlocked', rewardImage: '[REWARD_IMAGE: advanced studies pathway preview]' },
        },
      ], // end critical_thinking lessons
    }, // end critical_thinking subworld
  ], // end all mythology subworlds

  worldMastery: {
    requirement: 'Complete all lessons in Mythical Creatures and World Mythology subworlds',
    badge: 'Master Mythologist',
    badgeImage: '[BADGE_IMAGE: Master Mythologist badge — phoenix, dragon, and globe combined design, gold border]',
    reward: 'Mythology world complete background + Folklore studies advanced pathway',
  },
}
