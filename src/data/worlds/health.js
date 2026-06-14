export const HEALTH = {
  id: 'health',
  name: 'Health & Human Body',
  subtitle: 'Body Systems, Nutrition & Wellness',
  color: '#E86040',
  unlocked: true,
  subworlds: [
    {
      id: 'human_body',
      name: 'The Human Body',
      subtitle: 'Systems, organs, and how your body works',
      unlocked: true,
      bgImage: '[SUBWORLD_BG: Transparent human body showing glowing organ systems — heart pulsing, lungs breathing, brain lighting up]',
      color: '#E86040',
      lessons: [
        {
          id: 'body_systems',
          title: 'Your Amazing Body Systems',
          objective: 'Identify the major body systems and understand what each one does; understand how systems work together',
          ageRange: '5-12', difficulty: 'foundation', xp: 85,
          heroImage: '[LESSON_HERO: Illustrated human body with major systems labeled — skeletal, muscular, circulatory, respiratory, digestive, nervous highlighted in different colors]',
          narrator: {
            foundation: 'Your body is the most amazing machine ever created. Right now — without you thinking about it — your heart is pumping blood, your lungs are bringing in oxygen, your brain is processing everything you see and hear, and your immune system is protecting you from germs. Your body has many systems, and they all work together as a team. When they are all healthy, you feel great.',
            explore: 'The human body has 11 major organ systems: circulatory, respiratory, digestive, nervous, skeletal, muscular, endocrine, immune, reproductive, urinary, and integumentary (skin). Each system has specialized organs. Systems are interconnected: the digestive system provides nutrients that the circulatory system delivers to cells that the respiratory system supplies with oxygen. Homeostasis — maintaining stable internal conditions — requires constant coordination between systems.',
            mastery: 'Human physiology operates at multiple scales: organ systems, organs, tissues, cells, organelles, molecules. Feedback mechanisms maintain homeostasis — body temperature, blood glucose, blood pressure all regulated by sensor-effector loops. Disruption of these feedback loops underlies most disease. Personalized medicine uses genetic and molecular information to tailor treatment to individual patients. The Human Genome Project (completed 2003) sequenced all 3 billion DNA base pairs — enabling molecular medicine.',
          },
          whyItMatters: 'Understanding your own body empowers you to make healthy choices, understand medical care, recognize when something is wrong, and appreciate the extraordinary complexity and resilience of life.',
          vocabulary: [
            { word: 'organ', phonetic: 'OR-gun', definition: 'A body part made of tissues that performs a specific function', example: 'The heart is an organ that pumps blood; the lungs are organs that exchange oxygen and CO2.', image: '[VOCAB_IMAGE: human body outline with major organs labeled and color-coded]' },
            { word: 'system', phonetic: 'SIS-tem', definition: 'A group of organs working together to perform a major body function', example: 'The circulatory system includes the heart, blood vessels, and blood working together.', image: '[VOCAB_IMAGE: circulatory system diagram showing interconnected organs as a team]' },
            { word: 'cell', phonetic: 'sel', definition: 'The smallest unit of life — all body tissues and organs are made of trillions of cells', example: 'Your body contains about 37 trillion cells, each performing specific functions.', image: '[VOCAB_IMAGE: body → organ → tissue → cell zoom-in progression showing scale]' },
          ],
          activities: [
            { id: 'body_tour', type: 'explore', title: 'Body System Tour', instruction: 'Tap each organ system to explore what it does, which organs it includes, and fun facts.', placeholder: '[INTERACTIVE: Human body outline with 11 highlighted systems. Tap each: system name, organs included, function summary, interesting fact. Age adaptation: simple labels for age 5-6, detailed physiology for age 10+. 3D rotation to see front and back]', ageRange: '5+' },
            { id: 'heartbeat_journey', type: 'simulate', title: 'Follow the Blood', instruction: 'Travel with a red blood cell through the heart and circulatory system.', placeholder: '[SIMULATION: Animated journey of one red blood cell. Path: picks up oxygen in lungs → enters heart left side → pumped through aorta → travels through arteries → reaches body cells → delivers oxygen and picks up CO2 → returns through veins → enters heart right side → pumped back to lungs. Heartbeat sound synced to animation. Labels each part passed]', ageRange: '7+' },
          ],
          assessment: {
            questions: [
              { type: 'multiple_choice', q: 'What is the main job of the circulatory system?', options: ['To digest food', 'To transport blood, oxygen, and nutrients throughout the body', 'To control breathing', 'To fight infections'], answer: 'To transport blood, oxygen, and nutrients throughout the body', explanation: 'The circulatory system — heart, blood vessels, and blood — delivers oxygen and nutrients to every cell in the body and carries away waste products like carbon dioxide. The heart beats about 100,000 times per day to keep blood moving.', level: 'knowledge' },
              { type: 'multiple_choice', q: 'Why do body systems need to work together?', options: ['They do not need to work together', 'So you can run faster', 'Because each system depends on others — removing any one system would affect all others', 'Only two systems actually work together'], answer: 'Because each system depends on others — removing any one system would affect all others', explanation: 'Body systems are deeply interdependent. Muscles (muscular system) need oxygen delivered by blood (circulatory), brought in by lungs (respiratory), controlled by signals from the brain (nervous), fueled by nutrients absorbed through digestion — all happening simultaneously and continuously.', level: 'understanding' },
            ],
          },
          mastery: { threshold: 80, badge: 'Body Expert', badgeImage: '[BADGE: Body Expert with human body silhouette and systems labeled]', reward: 'Advanced physiology, nutrition, and mental health pathways unlocked', rewardImage: '[REWARD_IMAGE: health advanced preview]' },
        },
      ],
    },
    {
      id: 'nutrition_wellness',
      name: 'Nutrition & Wellness',
      subtitle: 'Food, exercise, sleep, and mental health',
      unlocked: true,
      bgImage: '[SUBWORLD_BG: Vibrant kitchen with healthy foods, exercise zone, sleep environment, mindfulness space all connected]',
      color: '#3A9E5A',
      lessons: [
        {
          id: 'nutrition',
          title: 'Nutrition: Food as Fuel',
          objective: 'Understand food groups and key nutrients; make informed food choices for energy and health',
          ageRange: '5-14', difficulty: 'foundation', xp: 80,
          heroImage: '[LESSON_HERO: Colorful plate with balanced meal — vegetables, protein, whole grains, fruit arranged visually with nutrient labels]',
          narrator: {
            foundation: 'Food is fuel for your body — like gasoline for a car, except much more interesting! Your body needs different kinds of nutrients to work well. Fruits and vegetables give you vitamins and minerals. Protein from eggs, beans, and meat builds your muscles. Whole grains give you steady energy. Dairy or fortified foods support your bones. And water keeps everything running. Every color on your plate does something different!',
            explore: 'Macronutrients provide energy: carbohydrates (4 calories/gram — primary energy source), proteins (4 cal/g — building and repair), fats (9 cal/g — brain function, hormones, fat-soluble vitamins). Micronutrients (vitamins and minerals) are needed in small amounts for hundreds of biochemical processes. The gut microbiome — trillions of bacteria in the digestive system — influences immunity, mental health, and metabolism. Dietary fiber feeds beneficial gut bacteria.',
            mastery: 'Nutritional science has evolved rapidly. The focus has shifted from macronutrient ratios to dietary patterns — whole foods diets consistently outperform any macronutrient-focused approach. Ultra-processed foods are associated with increased risk of obesity, cardiovascular disease, and mental health issues. The gut-brain axis — bidirectional communication between digestive system and brain — means diet directly affects mood and cognition. Food access and food desert disparities represent a major public health challenge.',
          },
          whyItMatters: 'Nutrition choices are among the highest-impact decisions we make every day. They affect energy, concentration, mood, physical performance, and long-term health outcomes.',
          vocabulary: [
            { word: 'nutrient', phonetic: 'NOO-tree-ent', definition: 'A substance in food that provides energy or materials the body needs to grow and function', example: 'Calcium is a nutrient found in dairy that helps build strong bones.', image: '[VOCAB_IMAGE: food items with their key nutrients labeled: egg=protein, banana=potassium, carrot=vitamin A]' },
            { word: 'protein', phonetic: 'PROH-teen', definition: 'A nutrient essential for building, repairing, and maintaining body tissues including muscles', example: 'Eggs, beans, meat, nuts, and tofu are all excellent sources of protein.', image: '[VOCAB_IMAGE: protein-rich foods with muscle-building arrows showing protein\'s role]' },
            { word: 'hydration', phonetic: 'hy-DRAY-shun', definition: 'Maintaining adequate water intake to support body functions', example: 'Drinking enough water improves concentration, physical performance, and mood.', image: '[VOCAB_IMAGE: glass of water with arrows showing body functions that depend on hydration: brain, muscles, digestion, temperature]' },
          ],
          activities: [
            { id: 'plate_builder', type: 'build', title: 'Build a Balanced Plate', instruction: 'Choose foods to fill your plate with a balance of all food groups.', placeholder: '[INTERACTIVE: Empty plate template. Food cards from all groups. Child fills plate. Analysis shows: vegetable coverage, protein, whole grains, dairy/alternatives, fruit. Feedback: "Great protein choice! Try adding more vegetables." Age-adapted portion guidance]', ageRange: '5+' },
            { id: 'food_detective', type: 'explore', title: 'Food Label Detective', instruction: 'Read food labels and compare products. Which is the healthier choice?', placeholder: '[ACTIVITY: Pairs of similar products with nutrition labels. Child compares: serving size, calories, sugar, sodium, fiber, ingredients list. Makes recommendation with reasoning. Includes real-world skills: understanding serving sizes, spotting hidden sugars in ingredient lists]', ageRange: '8+' },
          ],
          assessment: {
            questions: [
              { type: 'multiple_choice', q: 'Why does your body need protein?', options: ['Only for energy', 'For building and repairing body tissues including muscles', 'Only for brain function', 'To regulate blood sugar'], answer: 'For building and repairing body tissues including muscles', explanation: 'Protein is made of amino acids — the building blocks of all cells in your body. It is essential for muscle growth and repair, making enzymes and hormones, supporting immune function, and maintaining healthy skin, hair, and nails.', level: 'knowledge' },
            ],
          },
          mastery: { threshold: 80, badge: 'Nutrition Navigator', badgeImage: '[BADGE: Nutrition Navigator with balanced plate and body silhouette]', reward: 'Exercise science, mental health, and advanced wellness pathways unlocked', rewardImage: '[REWARD_IMAGE: wellness advanced preview]' },
        },
      ],
    },
    {
      id: 'mental_wellness',
      name: 'Mental Health & Wellness',
      subtitle: 'Emotions, stress, mindfulness, and wellbeing',
      unlocked: false,
      bgImage: '[SUBWORLD_BG: Calm mindfulness space with breathing animation, emotion wheel, and peaceful natural elements]',
      color: '#9B6AE0',
      lessons: [
        {
          id: 'understanding_emotions',
          title: 'Understanding Your Emotions',
          objective: 'Identify and name a range of emotions; understand that all emotions are valid; develop emotional regulation strategies',
          ageRange: '3-14', difficulty: 'foundation', xp: 75,
          heroImage: '[LESSON_HERO: Emotion wheel showing 8 core emotions with facial expressions and body sensations for each]',
          narrator: {
            foundation: 'Emotions are messages from your body and mind about what is happening around you and inside you. Happy, sad, angry, scared, excited, proud, embarrassed — all emotions give us important information. There are no bad emotions — every feeling is telling you something. The skill is learning to understand your emotions and respond to them in healthy ways.',
            explore: 'Psychologist Paul Ekman identified six basic universal emotions: happiness, sadness, fear, disgust, anger, and surprise. Robert Plutchik expanded this to eight primary emotions arranged in a wheel. Emotional intelligence — the ability to recognize, understand, and manage emotions — is a stronger predictor of life success than IQ in many domains. Emotional regulation strategies include: deep breathing (activates parasympathetic nervous system), cognitive reframing (changing how we think about a situation), and mindfulness.',
            mastery: 'Neuroscience of emotion involves the limbic system — particularly the amygdala (threat detection, emotional memory) and prefrontal cortex (regulation, perspective-taking). The amygdala can hijack rational thinking under threat (amygdala hijack). Emotional regulation literally changes brain chemistry: mindfulness practice reduces amygdala reactivity. Chronic unmanaged stress elevates cortisol, which impairs memory, immune function, and cardiovascular health.',
          },
          whyItMatters: 'Emotional intelligence and regulation are among the most important skills for wellbeing, relationships, and success. Understanding emotions helps us make better decisions and maintain mental health.',
          vocabulary: [
            { word: 'emotion', phonetic: 'ee-MOH-shun', definition: 'A feeling state that involves physical sensations, thoughts, and behavioral impulses', example: 'Fear is an emotion — it makes your heart race, makes you alert, and prepares you to respond to danger.', image: '[VOCAB_IMAGE: emotion wheel showing primary emotions with facial expressions and body sensation labels]' },
            { word: 'regulation', phonetic: 'reg-yoo-LAY-shun', definition: 'The ability to manage and respond to emotions in healthy, constructive ways', example: 'When she felt angry, she used deep breathing to regulate her emotion before responding.', image: '[VOCAB_IMAGE: emotion regulation strategies shown: breathing, counting, walking, journaling]' },
            { word: 'mindfulness', phonetic: 'MYND-ful-ness', definition: 'Paying attention to the present moment with openness and curiosity, without judgment', example: 'Mindfulness helped him notice when he was starting to feel anxious so he could respond calmly.', image: '[VOCAB_IMAGE: mindful person with awareness of present moment — senses, breath, thoughts observed without judgment]' },
          ],
          activities: [
            { id: 'emotion_wheel', type: 'explore', title: 'Emotion Explorer', instruction: 'Spin the emotion wheel and explore each feeling — what causes it, what it feels like in your body, and what helps.', placeholder: '[INTERACTIVE: Colorful emotion wheel. Spin or tap any emotion: animated face expression, body sensation map (where you feel it), common causes, 3 healthy response strategies. Include complex emotions: nostalgia, pride, jealousy, awe. Age-adapted language]', ageRange: '3+' },
            { id: 'breathing_exercise', type: 'interact', title: 'Calm Down Breathing', instruction: 'Try box breathing: breathe in for 4 counts, hold for 4, breathe out for 4, hold for 4.', placeholder: '[INTERACTIVE: Animated breathing guide — expanding and contracting shape synced to breathing phases. Timer for each phase. Guided audio option. Proven physiological technique for activating parasympathetic nervous system. Available whenever child needs it]', ageRange: '3+' },
          ],
          assessment: {
            questions: [
              { type: 'multiple_choice', q: 'When you feel angry, what is a healthy way to respond?', options: ['Yell at whoever made you angry', 'Pretend you do not feel angry', 'Take deep breaths and think before you respond', 'You should never feel angry'], answer: 'Take deep breaths and think before you respond', explanation: 'Anger is a normal, valid emotion — it tells us something feels unfair or threatening. The goal is not to eliminate anger but to regulate it. Deep breathing activates the calming parasympathetic nervous system, giving your prefrontal cortex time to think before reacting. All emotions are valid; how we respond to them is what matters.', level: 'application' },
            ],
          },
          mastery: { threshold: 80, badge: 'Wellness Champion', badgeImage: '[BADGE: Wellness Champion with mindfulness symbol and emotion wheel]', reward: 'Advanced mental health, stress management, and resilience pathways unlocked', rewardImage: '[REWARD_IMAGE: mental wellness advanced preview]' },
        },
      ],
    },
  ],
  worldMastery: {
    requirement: 'Complete all core Health subworlds',
    badge: 'Health Champion',
    badgeImage: '[BADGE: Health Champion with body, heart, brain, and wellness symbols]',
    reward: 'Advanced physiology, mental health, sports science, and medical pathways fully unlocked',
  },
}
