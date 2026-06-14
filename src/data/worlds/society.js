export const SOCIETY = {
  id: 'society',
  name: 'Society & World',
  subtitle: 'Geography, Cultures, Life Skills & Leadership',
  color: '#3A80D4',
  unlocked: true,
  subworlds: [
    {
      id: 'geography',
      name: 'World Geography',
      subtitle: 'Countries, continents, landforms, and peoples',
      unlocked: true,
      bgImage: '[SUBWORLD_BG: Zoomable globe with countries highlighted, flags floating, cultural landmarks visible]',
      color: '#3A80D4',
      lessons: [
        {
          id: 'continents_oceans',
          title: 'Continents and Oceans',
          objective: 'Name and locate the 7 continents and 5 oceans; understand basic facts about each',
          ageRange: '4-10', difficulty: 'foundation', xp: 70,
          heroImage: '[LESSON_HERO: Beautiful globe view showing all 7 continents and 5 oceans labeled in vibrant colors]',
          narrator: {
            foundation: 'Our Earth is covered by huge land areas called continents and enormous bodies of water called oceans. There are seven continents: Africa, Antarctica, Asia, Australia, Europe, North America, and South America. The five oceans are the Pacific, Atlantic, Indian, Southern, and Arctic Oceans. Together, oceans cover more than 70% of Earth\'s surface.',
            explore: 'Continents differ dramatically in size: Asia is largest (44 million kmÂ²), Australia smallest (7.7 million kmÂ²). Continental plates are sections of Earth\'s crust that move â plate tectonics explains why continents have their current shapes and why earthquakes and volcanoes occur at plate boundaries. The Pacific Ocean alone covers more area than all of Earth\'s land combined. Ocean currents distribute heat globally, driving climate patterns.',
            mastery: 'Continental drift theory (Wegener, 1912) proposed that modern continents were once united in a supercontinent called Pangaea (~250 million years ago). Plate tectonics, confirmed by seafloor spreading evidence in the 1960s, explains not just the movement of continents but also mountain formation, ocean trench creation, volcanic activity, and earthquake distribution. Geologically, continents are still moving â the Atlantic Ocean widens by about 2.5 cm per year.',
          },
          whyItMatters: 'Geographic literacy is the foundation of understanding world events, cultures, economies, and environmental issues. Knowing where things are in the world helps us understand why they happen.',
          vocabulary: [
            { word: 'continent', phonetic: 'KON-tih-nent', definition: 'One of Earth\'s seven large landmasses', example: 'Asia is the largest continent, home to more than half of the world\'s population.', image: '[VOCAB_IMAGE: world map with all 7 continents labeled, colored differently]' },
            { word: 'ocean', phonetic: 'OH-shun', definition: 'One of the five vast bodies of salt water covering 71% of Earth\'s surface', example: 'The Pacific Ocean is so large that all of Earth\'s continents could fit inside it.', image: '[VOCAB_IMAGE: world map with 5 oceans labeled with relative sizes shown]' },
            { word: 'equator', phonetic: 'ee-KWAY-ter', definition: 'The imaginary line around Earth\'s middle dividing it into Northern and Southern hemispheres', example: 'Countries near the equator have hot climates because sunlight hits most directly there.', image: '[VOCAB_IMAGE: globe with equator, tropics, and poles labeled with temperature gradient]' },
          ],
          activities: [
            { id: 'world_map_explorer', type: 'explore', title: 'Interactive World Map', instruction: 'Tap any continent or ocean to discover its facts, countries, and features.', placeholder: '[INTERACTIVE: Zoomable world map. Tap continent: shows countries, population, notable features, cultural images. Tap ocean: depth, famous features, marine life. Child mode: simple facts with illustrations. Scholar mode: detailed geographical data]', ageRange: '4+' },
            { id: 'continent_puzzle', type: 'build', title: 'World Puzzle', instruction: 'Place the continents in their correct positions on a blank world map.', placeholder: '[PUZZLE: Blank world outline. Seven continent pieces. Drag to correct positions. Fit like puzzle pieces. Hint mode available. Reveals continent names and key facts when correctly placed]', ageRange: '5+' },
          ],
          assessment: {
            questions: [
              { type: 'multiple_choice', q: 'Which continent is the largest?', options: ['Africa', 'North America', 'Asia', 'Europe'], answer: 'Asia', explanation: 'Asia covers approximately 44 million square kilometers â about 30% of Earth\'s total land area. It is home to 48 countries and over 4.7 billion people â more than half the world\'s population.', level: 'knowledge' },
            ],
          },
          mastery: { threshold: 80, badge: 'World Explorer', badgeImage: '[BADGE: World Explorer with globe and compass]', reward: 'World cultures, countries, and geography deep-dive pathways unlocked', rewardImage: '[REWARD_IMAGE: geography advanced preview]' },
        },
      ],
    },
    {
      id: 'life_skills',
      name: 'Life Skills Village',
      subtitle: 'Real skills for real life â money, safety, and daily living',
      unlocked: true,
      bgImage: '[SUBWORLD_BG: Friendly village with shops, bank, kitchen, safety signs â all accessible and welcoming]',
      color: '#3A9E5A',
      lessons: [
        {
          id: 'money_basics',
          title: 'Understanding Money',
          objective: 'Identify coins and bills; understand earning, spending, saving; create a simple budget',
          ageRange: '4-12', difficulty: 'foundation', xp: 75,
          heroImage: '[LESSON_HERO: Friendly piggy bank scene with coins, bills, a store, and a savings chart all visible]',
          narrator: {
            foundation: 'Money is how we exchange value. Instead of trading a chicken for shoes, we use money that everyone agrees has value. Coins and bills are physical money. To use money wisely, we need to understand three things: earning (getting money through work), spending (using money to buy things), and saving (keeping money for later goals or emergencies).',
            explore: 'Personal finance encompasses income (money earned), expenses (money spent), savings (money set aside), and debt (money borrowed). Budgeting means planning how to allocate income across expenses and savings. The 50-30-20 rule: 50% needs, 30% wants, 20% savings. Compound interest means money saved grows over time â $100 saved at 7% annual return becomes $196 in 10 years without adding more. Starting early is the most powerful factor in building wealth.',
            mastery: 'Economics studies how individuals, businesses, and governments make decisions about scarce resources. Microeconomics examines individual decisions; macroeconomics studies national economies. Supply and demand determine prices. Inflation erodes purchasing power. Investment diversification reduces risk. Understanding compound interest, the time value of money, and risk-return trade-offs are foundations of financial literacy that affect lifelong economic outcomes.',
          },
          whyItMatters: 'Financial literacy is one of the most impactful skills anyone can develop. Understanding money, saving, and budgeting creates independence, reduces stress, and opens opportunities throughout life.',
          vocabulary: [
            { word: 'budget', phonetic: 'BUJ-et', definition: 'A plan for how you will earn and spend money over a period of time', example: 'She made a budget to save $5 per week until she had enough for new sneakers.', image: '[VOCAB_IMAGE: simple budget table showing income, expenses categories, and savings goal]' },
            { word: 'saving', phonetic: 'SAY-ving', definition: 'Setting money aside now to use later for a goal or emergency', example: 'By saving a little each week, he had enough for a bicycle in two months.', image: '[VOCAB_IMAGE: piggy bank filling over time with goal amount labeled and countdown shown]' },
            { word: 'earning', phonetic: 'ER-ning', definition: 'Receiving money in exchange for work, service, or providing value', example: 'She earned money by helping neighbors with yard work on weekends.', image: '[VOCAB_IMAGE: work scene with person completing task and receiving payment with smile]' },
          ],
          activities: [
            { id: 'budget_sim', type: 'simulate', title: 'Budget Simulator', instruction: 'You have a weekly allowance. Decide how to spend and save it. Can you reach your goal?', placeholder: '[SIMULATION: Child receives weekly allowance amount (age-adapted: $5, $10, $20). Choices appear each week: needs vs wants, saving opportunities. Track savings toward goal. Experience running out before week ends. Adjust strategy. See goal achieved]', ageRange: '5+' },
            { id: 'store_game', type: 'simulate', title: 'Shop Smart', instruction: 'You have $20 to buy groceries for a week. Make wise choices!', placeholder: '[SIMULATION: Virtual store with items and prices. Limited budget. Must buy enough food for the week. Choice challenges: buy name brand vs generic, fresh vs canned, on-sale items. Calculate totals. Budget feedback]', ageRange: '7+' },
          ],
          assessment: {
            questions: [
              { type: 'multiple_choice', q: 'Why is saving money important?', options: ['It is not really important', 'So you can buy things you want right now', 'To have money for future goals and unexpected emergencies', 'To impress your friends'], answer: 'To have money for future goals and unexpected emergencies', explanation: 'Saving serves two purposes: achieving goals (buying something you want later) and emergency fund (having money when unexpected things happen â illness, car repair, job loss). Financial experts recommend saving 3-6 months of expenses as an emergency fund.', level: 'understanding' },
            ],
          },
          mastery: { threshold: 80, badge: 'Money Wise', badgeImage: '[BADGE: Money Wise with coin and piggy bank design]', reward: 'Personal finance, entrepreneurship, and investing pathways unlocked', rewardImage: '[REWARD_IMAGE: finance world advanced preview]' },
        },
      ],
    },
    {
      id: 'leadership',
      name: 'Leadership & Character',
      subtitle: 'Empathy, integrity, and making a positive difference',
      unlocked: true,
      bgImage: '[SUBWORLD_BG: Community scene with diverse people working together, leadership symbols, helping hands]',
      color: '#C4A035',
      lessons: [
        {
          id: 'empathy',
          title: 'Empathy: Seeing Through Other Eyes',
          objective: 'Understand empathy as the ability to understand and share others\' feelings; practice perspective-taking',
          ageRange: '4-14', difficulty: 'foundation', xp: 75,
          heroImage: '[LESSON_HERO: Two children looking at the same scene from different positions â same event, different perspectives shown]',
          narrator: {
            foundation: 'Empathy is the ability to understand how someone else feels â to imagine the world through their eyes, even when their experience is very different from yours. Empathy does not mean you always agree with someone. It means you genuinely try to understand them. Empathy is what makes kindness possible. It is what helps us solve conflicts, build friendships, and work together.',
            explore: 'Empathy has two components: cognitive empathy (understanding what someone else is thinking or feeling) and affective empathy (actually feeling something similar yourself). Research shows empathy can be developed through practice â perspective-taking exercises, reading fiction, and exposure to diverse experiences all increase empathy. High-empathy leaders make better decisions because they consider more perspectives.',
            mastery: 'Empathy is the foundation of moral philosophy and social justice. Adam Smith\'s Theory of Moral Sentiments (1759) placed empathy at the center of human ethics. Neuroscience has identified mirror neurons that may underlie our capacity to feel others\' emotions. Cross-cultural empathy is particularly important â understanding that different cultures express and experience emotions differently prevents misunderstanding and conflict.',
          },
          whyItMatters: 'Empathy is the foundation of kindness, cooperation, justice, and effective leadership. Research consistently shows that higher empathy leads to better relationships, better mental health, and better leadership outcomes.',
          vocabulary: [
            { word: 'empathy', phonetic: 'EM-puh-thee', definition: 'The ability to understand and share the feelings of another person', example: 'When her friend lost his dog, she showed empathy by listening and sitting with him quietly.', image: '[VOCAB_IMAGE: person imagining another person\'s experience, thought bubble connection shown]' },
            { word: 'perspective', phonetic: 'per-SPEK-tiv', definition: 'A point of view shaped by someone\'s unique experiences, identity, and position', example: 'From the new student\'s perspective, the school felt overwhelming and lonely.', image: '[VOCAB_IMAGE: same scene viewed from two different angles â literally showing different perspectives]' },
            { word: 'compassion', phonetic: 'kom-PASH-un', definition: 'Empathy combined with the desire to help â caring about suffering and wanting to reduce it', example: 'Her compassion moved her to volunteer at the food bank after hearing about hunger in her community.', image: '[VOCAB_IMAGE: person extending helping hand to another, heart symbol, action arrows]' },
          ],
          activities: [
            { id: 'perspective_story', type: 'story', title: 'The Same Day, Different Eyes', instruction: 'Experience one school day from three very different perspectives.', placeholder: '[INTERACTIVE STORY: Same events described from three students\' viewpoints â one confident and happy, one anxious and struggling, one feeling excluded. Same cafeteria scene looks completely different depending on who you are. Child compares experiences. Discussion prompts: What did you notice? What could each student do to help the others?]', ageRange: '6+' },
            { id: 'empathy_journal', type: 'create', title: 'Empathy Journal', instruction: 'Think of someone in your life who might see things differently than you. Write about their perspective.', placeholder: '[CREATIVE JOURNAL: Guided prompts â Who is this person? What challenges do they face that you do not? What might a normal day feel like for them? What is one thing you could do to show empathy? Saved to personal journal]', ageRange: '7+' },
          ],
          assessment: {
            questions: [
              { type: 'multiple_choice', q: 'What does empathy mean?', options: ['Agreeing with everything someone says', 'Feeling sorry for someone', 'Understanding and sharing someone else\'s feelings and perspective', 'Being very generous with gifts'], answer: 'Understanding and sharing someone else\'s feelings and perspective', explanation: 'Empathy involves genuinely trying to understand how someone else experiences the world â not just feeling sorry for them (sympathy) or agreeing with them. True empathy requires imagining the world from their perspective, including understanding their feelings, concerns, and context.', level: 'understanding' },
            ],
          },
          mastery: { threshold: 80, badge: 'Empathy Champion', badgeImage: '[BADGE: Empathy Champion with connected hearts and diverse figures]', reward: 'Leadership, conflict resolution, and community pathways unlocked', rewardImage: '[REWARD_IMAGE: leadership world advanced preview]' },
        },
      ],
    },
  ],
  worldMastery: {
    requirement: 'Complete all core Society subworlds',
    badge: 'World Citizen',
    badgeImage: '[BADGE: World Citizen with globe, handshake, and community symbols]',
    reward: 'Advanced geography, economics, leadership, and social science pathways unlocked',
  },
}
