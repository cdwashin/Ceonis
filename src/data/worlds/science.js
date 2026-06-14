export const SCIENCE = {
  id: 'science',
  name: 'Science Laboratory',
  subtitle: 'Experiment, Discover, Understand',
  color: '#3AB5D4',
  unlocked: true,
  subworlds: [
    {
      id: 'scientific_method',
      name: 'Scientific Method',
      subtitle: 'Ask questions and find answers',
      unlocked: true,
      bgImage: '[SUBWORLD_BG: Science lab with colorful experiments]',
      color: '#3AB5D4',
      lessons: [
        {
          id: 'what_is_science',
          title: 'What Is Science?',
          objective: 'Understand science as a process of asking questions, forming hypotheses, and testing them through experiment',
          ageRange: '4-12',
          difficulty: 'foundation',
          xp: 80,
          heroImage: '[LESSON_HERO: Scientist with magnifying glass and notebook discovering something exciting]',
          narrator: {
            foundation: 'Science is not just facts in a book — it is a way of thinking! Scientists ask questions, make predictions, test them with experiments, and learn from what they find. Anyone can be a scientist. Every time you wonder why something happens and try to find out, you are doing science.',
            explore: 'The scientific method provides a structured way to investigate questions. A hypothesis is a testable prediction. A controlled experiment changes only one variable at a time. Data is collected through observation and measurement. Conclusions are drawn from evidence, not from what we hoped would happen.',
            mastery: 'Science is epistemologically unique — it is self-correcting. When evidence contradicts a theory, the theory is revised. Peer review, reproducibility, and falsifiability distinguish scientific knowledge from other ways of knowing. Understanding these distinctions is essential for science literacy in a complex information environment.',
          },
          whyItMatters: 'Scientific thinking helps us distinguish evidence from opinion and understand the world as it actually is, not just as we assume it to be.',
          vocabulary: [
            { word: 'hypothesis', phonetic: 'HY-poth-eh-sis', definition: 'A testable prediction about what will happen in an experiment', example: 'My hypothesis is that plants grow faster with more sunlight.', image: '[VOCAB_IMAGE: hypothesis diagram]' },
            { word: 'experiment', phonetic: 'ek-SPAIR-ih-ment', definition: 'A controlled test designed to prove or disprove a hypothesis', example: 'We designed an experiment to test which soil grows plants fastest.', image: '[VOCAB_IMAGE: experiment setup with labeled variables]' },
            { word: 'evidence', phonetic: 'EV-ih-dens', definition: 'Information collected through observation that supports or disproves a claim', example: 'The data from our experiment is evidence that light affects plant growth.', image: '[VOCAB_IMAGE: scientist recording data observations]' },
            { word: 'variable', phonetic: 'VAIR-ee-ah-bul', definition: 'Something that can change in an experiment', example: 'The amount of sunlight was the variable we changed in our plant experiment.', image: '[VOCAB_IMAGE: experiment with one variable highlighted, others labeled constant]' },
          ],
          activities: [
            { id: 'sci_method_order', type: 'sequence', title: 'Order the Scientific Method', instruction: 'Place the 6 steps of the scientific method in the correct order.', placeholder: '[INTERACTIVE: Step cards — Ask a Question, Research, Hypothesis, Experiment, Collect Data, Conclude — drag to sequence]', ageRange: '5+' },
            { id: 'design_experiment', type: 'build', title: 'Design Your Experiment', instruction: 'Choose a question and design an experiment to answer it.', placeholder: '[INTERACTIVE: Experiment designer — choose question, write hypothesis, select variables, predict results, run virtual experiment]', ageRange: '8+' },
          ],
          assessment: {
            questions: [
              { type: 'multiple_choice', q: 'What is a hypothesis?', options: ['A conclusion you have already reached', 'A testable prediction about what will happen', 'The equipment used in an experiment', 'A type of science lab'], answer: 'A testable prediction about what will happen', explanation: 'A hypothesis is a specific, testable prediction made before running an experiment. It is not a guess — it is based on prior knowledge and reasoning.', level: 'knowledge' },
              { type: 'multiple_choice', q: 'Why should you change only one variable at a time in an experiment?', options: ['To save time', 'So you know which variable caused any changes you observe', 'Because it is easier', 'Because multiple variables are not allowed'], answer: 'So you know which variable caused any changes you observe', explanation: 'Changing one variable at a time — while keeping all others constant — allows you to establish cause and effect. If you change multiple things, you cannot know which change caused the result.', level: 'understanding' },
            ],
          },
          mastery: { threshold: 80, badge: 'Junior Scientist', badgeImage: '[BADGE: Junior Scientist with microscope]', reward: 'Science laboratory experiments unlocked', rewardImage: '[REWARD_IMAGE: lab preview]' },
        },
      ],
    },
    {
      id: 'life_science',
      name: 'Life Science',
      subtitle: 'Cells, ecosystems, and living things',
      unlocked: true,
      bgImage: '[SUBWORLD_BG: Microscopic cell view transitioning to forest ecosystem]',
      color: '#3A9E5A',
      lessons: [
        {
          id: 'cells',
          title: 'Cells: The Building Blocks of Life',
          objective: 'Understand that all living things are made of cells; identify basic cell structures and functions',
          ageRange: '8-14',
          difficulty: 'foundation',
          xp: 90,
          heroImage: '[LESSON_HERO: Colorful animated cell with labeled organelles glowing]',
          narrator: {
            foundation: 'Every living thing — from a tiny bacterium to a blue whale — is made of cells. Cells are the smallest unit of life. Some organisms are just one cell. A human body has about 37 trillion cells, each doing a specific job. Every cell has a membrane that controls what enters and exits, cytoplasm that fills it, and DNA with instructions for everything the cell does.',
            explore: 'Cells are categorized as prokaryotic (no nucleus — bacteria and archaea) or eukaryotic (with nucleus — plants, animals, fungi). Animal cells have centrioles, mitochondria, and flexible membranes. Plant cells additionally have cell walls, chloroplasts for photosynthesis, and large central vacuoles. Each organelle has a specific function — mitochondria produce ATP energy, ribosomes make proteins, the Golgi apparatus packages and ships materials.',
            mastery: 'Cell biology is the foundation of molecular medicine. Cancer is fundamentally a disease of cell cycle dysregulation. Stem cells offer therapeutic potential because they are undifferentiated. CRISPR-Cas9 gene editing works at the molecular level within cells. Understanding cell signaling, membrane transport, and gene expression is essential for understanding virtually every biological process.',
          },
          whyItMatters: 'Virtually every medical advance — vaccines, cancer treatments, antibiotics, gene therapy — comes from understanding how cells work.',
          vocabulary: [
            { word: 'cell', phonetic: 'sel', definition: 'The smallest structural unit of life — all living things are made of one or more cells', example: 'Red blood cells carry oxygen throughout your body.', image: '[VOCAB_IMAGE: animal cell diagram with labeled organelles]' },
            { word: 'membrane', phonetic: 'MEM-brayn', definition: 'The flexible boundary surrounding a cell that controls what enters and exits', example: 'The cell membrane lets in nutrients and lets out waste products.', image: '[VOCAB_IMAGE: cell membrane cross-section with molecules passing through]' },
            { word: 'nucleus', phonetic: 'NOO-klee-us', definition: 'The control center of the cell — contains DNA with genetic instructions', example: 'The nucleus directs all cell activities using instructions encoded in DNA.', image: '[VOCAB_IMAGE: cell with nucleus highlighted and DNA inside]' },
            { word: 'mitochondria', phonetic: 'my-toh-KON-dree-ah', definition: 'Organelles that produce energy for the cell through cellular respiration', example: 'Muscle cells have many mitochondria because they need lots of energy.', image: '[VOCAB_IMAGE: mitochondria structure with energy output arrows]' },
          ],
          activities: [
            { id: 'cell_explorer', type: 'explore', title: 'Cell Explorer', instruction: 'Zoom into a cell and tap each organelle to learn its function.', placeholder: '[INTERACTIVE: 3D animated cell. Tap any organelle: nucleus (DNA, control center), mitochondria (energy factory), cell membrane (security gate), ribosomes (protein builders), vacuole (storage). Foundation: 4 organelles. Advanced: all 12+]', ageRange: '8+' },
            { id: 'plant_animal', type: 'compare', title: 'Plant vs Animal Cell', instruction: 'Compare plant and animal cells. What is the same? What is different?', placeholder: '[INTERACTIVE: Side-by-side cell diagrams. Drag labels to both cells (shared: nucleus, mitochondria, membrane). Drag unique labels (plant only: cell wall, chloroplasts; animal only: centrioles). Reveals why plants can make food but animals cannot]', ageRange: '9+' },
          ],
          assessment: {
            questions: [
              { type: 'multiple_choice', q: 'What is the function of the mitochondria?', options: ['To store genetic information', 'To produce energy for the cell', 'To control what enters the cell', 'To make proteins'], answer: 'To produce energy for the cell', explanation: 'Mitochondria perform cellular respiration, converting glucose and oxygen into ATP — the energy currency that powers all cell activities. That is why they are called the powerhouse of the cell.', level: 'knowledge' },
              { type: 'multiple_choice', q: 'Which structure is found in plant cells but NOT in animal cells?', options: ['Nucleus', 'Cell membrane', 'Mitochondria', 'Cell wall'], answer: 'Cell wall', explanation: 'Plant cells have a rigid cell wall made of cellulose outside the cell membrane. This gives plants their structure and allows them to stand upright. Animal cells have only the flexible cell membrane.', level: 'knowledge' },
            ],
          },
          mastery: { threshold: 80, badge: 'Cell Biologist', badgeImage: '[BADGE: Cell Biologist with cell diagram]', reward: 'Biology advanced pathway unlocked', rewardImage: '[REWARD_IMAGE: biology pathway preview]' },
        },
      ],
    },
    {
      id: 'physical_science',
      name: 'Physical Science',
      subtitle: 'Matter, energy, forces, and motion',
      unlocked: false,
      bgImage: '[SUBWORLD_BG: Physics lab with forces, motion trails, matter states]',
      color: '#9B6AE0',
      lessons: [
        {
          id: 'matter',
          title: 'Matter and Its States',
          objective: 'Define matter; identify solid, liquid, gas, and plasma states; understand particle behavior in each state',
          ageRange: '6-12',
          difficulty: 'foundation',
          xp: 80,
          heroImage: '[LESSON_HERO: Water shown in three states — ice cube, liquid water, steam — side by side]',
          narrator: {
            foundation: 'Matter is everything that takes up space and has mass — the chair you sit on, the air you breathe, even you. Matter exists in different states. In a solid, particles are packed tightly. In a liquid, they can flow. In a gas, they spread out freely. You can change the state of matter by adding or removing heat.',
            explore: 'The states of matter depend on the energy of particles. In solids, particles vibrate in fixed positions — giving solids definite shape and volume. In liquids, particles can flow past each other — giving liquids definite volume but no fixed shape. In gases, particles move freely — gases have neither fixed shape nor volume. Plasma, the fourth state, occurs at extreme temperatures when electrons separate from nuclei.',
            mastery: 'Phase transitions occur at specific temperatures depending on intermolecular forces. Water transitions between states at 0°C (melting/freezing) and 100°C (boiling/condensing) at sea level. Pressure affects phase transitions — this is why water boils at lower temperatures at high altitude. Sublimation (solid to gas without liquid phase) occurs in dry ice and explains frost formation.',
          },
          whyItMatters: 'Understanding states of matter is fundamental to chemistry, physics, cooking, meteorology, and materials science.',
          vocabulary: [
            { word: 'matter', phonetic: 'MAT-er', definition: 'Anything that has mass and takes up space', example: 'Air is matter — it has mass and takes up space, even though you cannot see it.', image: '[VOCAB_IMAGE: three states of matter — solid ice, liquid water, water vapor shown]' },
            { word: 'solid', phonetic: 'SOL-id', definition: 'A state of matter with definite shape and volume — particles are tightly packed', example: 'Ice is a solid — it keeps its shape unless you cut or melt it.', image: '[VOCAB_IMAGE: solid particle arrangement — tightly packed grid]' },
            { word: 'liquid', phonetic: 'LIK-wid', definition: 'A state of matter with definite volume but no fixed shape — particles flow', example: 'Water is a liquid — it takes the shape of whatever container it is in.', image: '[VOCAB_IMAGE: liquid particle arrangement — loosely packed, flowing]' },
            { word: 'gas', phonetic: 'gas', definition: 'A state of matter with no definite shape or volume — particles spread to fill container', example: 'Air is a gas — it spreads to fill any container completely.', image: '[VOCAB_IMAGE: gas particle arrangement — widely spread, moving freely]' },
          ],
          activities: [
            { id: 'states_sim', type: 'simulate', title: 'States of Matter Simulator', instruction: 'Add heat to ice and watch it change state. Remove heat from steam and watch it condense.', placeholder: '[SIMULATION: Container with particles shown as moving dots. Temperature slider. Cold: particles form solid grid. Warm: particles flow as liquid. Hot: particles fly as gas. Phase change animations at transition temperatures. Celsius and Kelvin displayed]', ageRange: '6+' },
            { id: 'matter_sort', type: 'sort', title: 'Sort by State', instruction: 'Sort 20 substances into solid, liquid, gas, or plasma categories.', placeholder: '[INTERACTIVE SORT: Substances appear — steel, milk, oxygen, glass, honey, steam, candle wax (trick: liquid when melted), lightning plasma, dry ice (trick: sublimes). Four category bins. Edge cases discussed]', ageRange: '7+' },
          ],
          assessment: {
            questions: [
              { type: 'multiple_choice', q: 'What happens to water particles when water freezes?', options: ['They speed up and spread apart', 'They slow down and lock into a fixed arrangement', 'They disappear', 'They become smaller'], answer: 'They slow down and lock into a fixed arrangement', explanation: 'When water freezes at 0°C, water molecules lose enough energy that they can no longer flow past each other. They arrange themselves into a crystalline structure — ice. Interestingly, ice is less dense than liquid water, which is why ice floats.', level: 'understanding' },
            ],
          },
          mastery: { threshold: 80, badge: 'Matter Master', badgeImage: '[BADGE: Matter Master with three states]', reward: 'Chemistry and physics pathways unlocked', rewardImage: '[REWARD_IMAGE: advanced science preview]' },
        },
      ],
    },
  ],
  worldMastery: {
    requirement: 'Complete all core subworlds and earn 80%+ on the Science World Assessment',
    badge: 'Master Scientist',
    badgeImage: '[BADGE: Master Scientist with lab flask and microscope]',
    reward: 'Advanced science and research pathways fully unlocked',
  },
}
