export const NATURE = {
  id: 'nature',
  name: 'Natural World',
  subtitle: 'Animals, Plants, Earth & Conservation',
  color: '#3A9E5A',
  unlocked: true,
  subworlds: [
    {
      id: 'animal_kingdom',
      name: 'Animal Kingdom',
      subtitle: 'Creatures, habitats, and the web of life',
      unlocked: true,
      bgImage: '[SUBWORLD_BG: Wildlife montage — savanna, ocean, rainforest animals together in vibrant scene]',
      color: '#3A9E5A',
      lessons: [
        {
          id: 'animal_classification',
          title: 'Classifying Animals',
          objective: 'Classify animals as mammals, birds, reptiles, amphibians, fish, or invertebrates based on shared characteristics',
          ageRange: '5-11', difficulty: 'foundation', xp: 80,
          heroImage: '[LESSON_HERO: Animal classification tree showing major groups with representative animals for each]',
          narrator: {
            foundation: 'Scientists organize animals into groups based on what they have in common. Mammals like dogs and whales have fur and feed milk to their babies. Birds have feathers and beaks. Fish breathe underwater through gills. Reptiles have scaly skin. Amphibians live both in water and on land. And invertebrates — like insects, spiders, and jellyfish — have no backbone at all.',
            explore: 'Animal classification is part of taxonomy — the science of organizing living things. The hierarchy goes: Domain → Kingdom → Phylum → Class → Order → Family → Genus → Species. Animals are Kingdom Animalia. Vertebrates (animals with backbones) include five classes: fish, amphibians, reptiles, birds, mammals. Invertebrates make up 97% of all animal species.',
            mastery: 'Taxonomy reflects evolutionary relationships. Cladistics groups organisms by shared derived characteristics (synapomorphies) rather than superficial similarity. Molecular phylogenetics uses DNA comparison to reveal evolutionary history. Surprising revelations: birds are technically dinosaurs (Avialae within Theropoda). Whales\' closest living relatives are hippos. Classification is not merely labeling — it reveals the tree of life.',
          },
          whyItMatters: 'Understanding animal classification reveals how life on Earth is organized by shared ancestry and reveals the extraordinary diversity of the natural world.',
          vocabulary: [
            { word: 'mammal', phonetic: 'MAM-ul', definition: 'A warm-blooded vertebrate with hair or fur that nurses young with milk', example: 'Whales are mammals — they breathe air and feed milk to their calves.', image: '[VOCAB_IMAGE: mammal characteristics labeled — warm-blooded, hair, milk-nursing]' },
            { word: 'habitat', phonetic: 'HAB-ih-tat', definition: 'The natural environment where an organism lives and finds everything it needs to survive', example: 'A clownfish\'s habitat is a coral reef in warm tropical waters.', image: '[VOCAB_IMAGE: world map with 6 habitat zones labeled and colored]' },
            { word: 'vertebrate', phonetic: 'VER-teh-brate', definition: 'An animal that has a backbone (spine)', example: 'All mammals, birds, reptiles, amphibians, and fish are vertebrates.', image: '[VOCAB_IMAGE: x-ray style image showing vertebral column in different animals]' },
            { word: 'invertebrate', phonetic: 'in-VER-teh-brate', definition: 'An animal without a backbone — makes up 97% of all animal species', example: 'Insects, spiders, crabs, and jellyfish are all invertebrates.', image: '[VOCAB_IMAGE: diverse invertebrates — insect, spider, crab, jellyfish, worm labeled]' },
          ],
          activities: [
            { id: 'animal_sort', type: 'sort', title: 'Sort the Animals', instruction: 'Sort 20 animals into their correct animal groups.', placeholder: '[INTERACTIVE SORT: 20 animal cards with images. Six labeled bins. Tricky cases: whale (mammal not fish), bat (mammal not bird), salamander (amphibian). Wrong sort shows explanation]', ageRange: '5+' },
            { id: 'habitat_explorer', type: 'explore', title: 'Habitat Explorer', instruction: 'Visit 6 habitats and discover which animals live there and why.', placeholder: '[INTERACTIVE MAP: Arctic, Rainforest, Ocean, Desert, Grassland, Coral Reef. Tap habitat: animated scene reveals 5 animals with adaptation explanations. Age-adapted: simple for 5-6, detailed ecology for 10+]', ageRange: '5+' },
          ],
          assessment: {
            questions: [
              { type: 'multiple_choice', q: 'A whale lives in the ocean but is classified as a mammal. Why?', options: ['Because it is large', 'Because it has fins', 'Because it breathes air, is warm-blooded, and nurses young with milk', 'Because it is endangered'], answer: 'Because it breathes air, is warm-blooded, and nurses young with milk', explanation: 'Classification is based on biological characteristics, not where an animal lives. Whales breathe air through blowholes, maintain constant body temperature, give birth to live young, and nurse with milk — all mammal characteristics.', level: 'understanding' },
            ],
          },
          mastery: { threshold: 80, badge: 'Wildlife Scout', badgeImage: '[BADGE: Wildlife Scout with paw print and binoculars]', reward: 'Ecosystem and food web pathways unlocked', rewardImage: '[REWARD_IMAGE: ecosystem explorer preview]' },
        },
      ],
    },
    {
      id: 'plants_ecology',
      name: 'Plants & Ecosystems',
      subtitle: 'Photosynthesis, food webs, and conservation',
      unlocked: true,
      bgImage: '[SUBWORLD_BG: Lush ecosystem showing plants, insects, birds, and soil layers interconnected]',
      color: '#2A8E4A',
      lessons: [
        {
          id: 'photosynthesis',
          title: 'How Plants Make Food',
          objective: 'Explain photosynthesis as the process by which plants convert sunlight, water, and CO2 into glucose and oxygen',
          ageRange: '6-12', difficulty: 'foundation', xp: 85,
          heroImage: '[LESSON_HERO: Plant cross-section showing sunlight entering leaves, CO2 arrows, oxygen releasing, glucose forming]',
          narrator: {
            foundation: 'Plants are incredible — they make their own food from sunlight! This process is called photosynthesis. A plant takes in water through its roots, absorbs carbon dioxide from the air through tiny pores in its leaves, and uses energy from sunlight to turn these ingredients into sugar. As a bonus, it releases oxygen — the air we breathe!',
            explore: 'Photosynthesis occurs in chloroplasts — organelles containing chlorophyll, the green pigment that absorbs light energy. The light-dependent reactions convert light energy to chemical energy (ATP and NADPH). The Calvin cycle uses this energy to fix CO2 into glucose. The overall equation: 6CO2 + 6H2O + light → C6H12O6 + 6O2. Plants are the foundation of virtually all food webs on Earth.',
            mastery: 'Photosynthesis is the most important chemical process on Earth — it is the foundation of the biosphere. Earth\'s atmosphere was originally without free oxygen. Photosynthetic cyanobacteria released oxygen 2.7 billion years ago — the Great Oxidation Event — transforming the planet and making complex life possible. C3, C4, and CAM photosynthesis are different adaptations that allow plants to photosynthesize efficiently in different environments.',
          },
          whyItMatters: 'Photosynthesis produces all the oxygen in Earth\'s atmosphere and forms the base of virtually every food chain. Without it, life as we know it could not exist.',
          vocabulary: [
            { word: 'photosynthesis', phonetic: 'foh-toh-SIN-theh-sis', definition: 'The process by which plants use sunlight, water, and CO2 to make glucose and oxygen', example: 'Through photosynthesis, a single tree can produce enough oxygen for two people to breathe.', image: '[VOCAB_IMAGE: photosynthesis equation with plant diagram showing inputs and outputs]' },
            { word: 'chlorophyll', phonetic: 'KLOR-oh-fil', definition: 'The green pigment in plant leaves that absorbs sunlight for photosynthesis', example: 'Chlorophyll makes leaves green and captures the light energy plants need to make food.', image: '[VOCAB_IMAGE: leaf cross-section showing chloroplasts with chlorophyll highlighted green]' },
            { word: 'glucose', phonetic: 'GLOO-kose', definition: 'A simple sugar that plants produce through photosynthesis and use as food for energy and growth', example: 'Plants store glucose as starch and use it to grow roots, leaves, and flowers.', image: '[VOCAB_IMAGE: glucose molecule with energy storage and plant growth arrows]' },
          ],
          activities: [
            { id: 'photosynthesis_sim', type: 'simulate', title: 'Photosynthesis Simulator', instruction: 'Control sunlight, water, and CO2 levels and watch the plant make food.', placeholder: '[SIMULATION: Virtual plant with three sliders: sunlight intensity, water level, CO2 concentration. Oxygen production and glucose output displayed in real time. Remove any ingredient: photosynthesis stops. Shows why plants need all three]', ageRange: '6+' },
            { id: 'food_web_builder', type: 'build', title: 'Build a Food Web', instruction: 'Place organisms in the food web — from plants to top predators.', placeholder: '[INTERACTIVE: Ecosystem cards (grass, rabbit, fox, hawk, decomposers, sun). Child arranges into food web with arrows showing energy flow. Remove one species: see how the whole web is affected]', ageRange: '8+' },
          ],
          assessment: {
            questions: [
              { type: 'multiple_choice', q: 'What are the THREE ingredients plants need for photosynthesis?', options: ['Soil, water, wind', 'Sunlight, water, carbon dioxide', 'Oxygen, glucose, minerals', 'Sunlight, oxygen, nitrogen'], answer: 'Sunlight, water, carbon dioxide', explanation: 'Photosynthesis requires: sunlight (energy source), water (from roots), and carbon dioxide (from air through stomata). These are converted into glucose (food) and oxygen (released as a byproduct).', level: 'knowledge' },
            ],
          },
          mastery: { threshold: 80, badge: 'Botanist', badgeImage: '[BADGE: Botanist with leaf and sun design]', reward: 'Ecology and conservation pathways unlocked', rewardImage: '[REWARD_IMAGE: ecosystem mastery preview]' },
        },
      ],
    },
    {
      id: 'earth_weather',
      name: 'Earth & Weather',
      subtitle: 'Our planet, its systems, and its climate',
      unlocked: false,
      bgImage: '[SUBWORLD_BG: Earth from space showing weather systems, continents, atmosphere layers]',
      color: '#3AB5D4',
      lessons: [
        {
          id: 'weather_climate',
          title: 'Weather vs Climate',
          objective: 'Distinguish between weather (short-term) and climate (long-term patterns); understand what drives weather systems',
          ageRange: '6-12', difficulty: 'foundation', xp: 80,
          heroImage: '[LESSON_HERO: Split screen — daily weather forecast on left, 30-year climate graph on right showing difference]',
          narrator: {
            foundation: 'Weather is what is happening outside right now — is it sunny? Rainy? Cold? Weather changes every day and even every hour. Climate is different — it is the average weather in a place over many, many years. London is known for its rainy climate. The Sahara has a hot, dry climate. As people say: climate is what you expect, weather is what you get.',
            explore: 'Weather is driven by energy from the Sun creating temperature differences that move air masses. High pressure systems (descending air) bring clear weather; low pressure (rising air) brings clouds and precipitation. The water cycle — evaporation, condensation, precipitation — drives weather globally. Climate is determined by latitude, altitude, proximity to oceans, and ocean current patterns.',
            mastery: 'Climate science uses paleoclimatology (ice cores, tree rings, sediment records) to reconstruct Earth\'s climate history spanning millions of years. Earth has experienced ice ages and warm periods throughout its history. The current period of rapid climate change is characterized by its speed — happening 10 times faster than any natural climate shift in Earth\'s history — and its cause: human greenhouse gas emissions increasing atmospheric CO2 from 280 ppm pre-industrial to over 420 ppm today.',
          },
          whyItMatters: 'Understanding weather and climate enables weather prediction, agricultural planning, disaster preparedness, and understanding of climate change — one of the most critical issues facing humanity.',
          vocabulary: [
            { word: 'weather', phonetic: 'WETH-er', definition: 'The short-term atmospheric conditions in a specific place — temperature, precipitation, wind', example: 'Today\'s weather is sunny and warm — very different from yesterday\'s rain.', image: '[VOCAB_IMAGE: weather symbols — sun, clouds, rain, snow, wind with temperature gauge]' },
            { word: 'climate', phonetic: 'KLY-met', definition: 'The average weather conditions in a region measured over 30 or more years', example: 'Seattle has a rainy climate — it receives about 150 days of rain per year on average.', image: '[VOCAB_IMAGE: world climate zones map with color-coded regions labeled]' },
            { word: 'atmosphere', phonetic: 'AT-moh-sfeer', definition: 'The layer of gases surrounding Earth that contains air, weather, and protects us from space', example: 'Earth\'s atmosphere extends about 10,000 km and is essential for all life.', image: '[VOCAB_IMAGE: atmosphere layers — troposphere, stratosphere, mesosphere, thermosphere]' },
          ],
          activities: [
            { id: 'weather_station', type: 'simulate', title: 'Weather Station', instruction: 'Read weather instruments and record daily data. After 7 days, look for patterns.', placeholder: '[SIMULATION: Weather instruments panel — thermometer, rain gauge, wind vane, barometer, cloud cover indicator. Read and record daily. Weekly data reveals patterns. Compare to real climate data for the region]', ageRange: '6+' },
          ],
          assessment: {
            questions: [
              { type: 'multiple_choice', q: 'What is the key difference between weather and climate?', options: ['Weather is more important', 'Weather is short-term daily conditions; climate is long-term average patterns', 'Climate changes every day', 'They are the same thing'], answer: 'Weather is short-term daily conditions; climate is long-term average patterns', explanation: 'Weather describes what is happening in the atmosphere right now or over days. Climate describes the typical patterns for a region averaged over decades. A single hot day is weather; a region being consistently hot year after year is climate.', level: 'understanding' },
            ],
          },
          mastery: { threshold: 80, badge: 'Earth Scientist', badgeImage: '[BADGE: Earth Scientist with globe and atmosphere layers]', reward: 'Climate science and conservation pathways unlocked', rewardImage: '[REWARD_IMAGE: earth science advanced preview]' },
        },
      ],
    },
  ],
  worldMastery: {
    requirement: 'Complete all core Nature subworlds',
    badge: 'Nature Master',
    badgeImage: '[BADGE: Nature Master with leaf, paw, and water droplet combined]',
    reward: 'Advanced ecology, conservation, and environmental science pathways unlocked',
  },
}
