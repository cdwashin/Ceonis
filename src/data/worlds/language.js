export const LANGUAGE = {
  id: 'language',
  name: 'Language & Communication',
  subtitle: 'Words, Stories & Expression',
  color: '#C4A035',
  unlocked: true,
  subworlds: [
    {
      id: 'reading_foundations',
      name: 'Reading Foundations',
      subtitle: 'Letters, phonics, and early reading',
      unlocked: true,
      bgImage: '[SUBWORLD_BG: Open book with letters flying out into colorful worlds]',
      color: '#C4A035',
      lessons: [
        {
          id: 'alphabet',
          title: 'The Alphabet',
          objective: 'Know all 26 letters in uppercase and lowercase; understand that letters represent sounds',
          ageRange: '2-6', difficulty: 'foundation', xp: 60,
          heroImage: '[LESSON_HERO: Colorful alphabet letters arranged in arc with animals representing each letter]',
          narrator: {
            foundation: 'The alphabet is the set of letters we use to write English. There are 26 letters — A all the way to Z! Every word we read and write is built from these 26 letters. Each letter has a name and makes a special sound.',
            explore: 'Letters are symbols that represent sounds. English has 26 letters but 44 phonemes — distinct sounds. Some letters make multiple sounds (C says /k/ in cat and /s/ in city). Vowels (A, E, I, O, U) form the core of every syllable. Consonants shape the beginnings and endings of words.',
            mastery: 'Writing systems represent one of humanity\'s greatest inventions. The alphabet descends from Phoenician script through Greek and Roman adaptations. Unlike logographic systems (Chinese characters representing whole words) or syllabaries (Japanese hiragana representing syllables), alphabets represent individual phonemes — making them highly efficient for encoding the sounds of language.',
          },
          whyItMatters: 'The alphabet is the foundation of all reading and writing. Every book, message, and document is built from these 26 symbols.',
          vocabulary: [
            { word: 'alphabet', phonetic: 'AL-fah-bet', definition: 'The complete set of letters used in a writing system', example: 'The English alphabet has 26 letters from A to Z.', image: '[VOCAB_IMAGE: All 26 letters in colorful display]' },
            { word: 'vowel', phonetic: 'VOW-ul', definition: 'The letters A, E, I, O, U — they form the core sound of every syllable', example: 'Every word has at least one vowel sound.', image: '[VOCAB_IMAGE: AEIOU highlighted in alphabet]' },
            { word: 'consonant', phonetic: 'KON-suh-nunt', definition: 'Any letter that is not a vowel — makes sounds by shaping air with lips, teeth, or tongue', example: 'B, C, D, F, G are consonants.', image: '[VOCAB_IMAGE: consonant letters with mouth diagrams showing how each is formed]' },
          ],
          activities: [
            { id: 'abc_song', type: 'interact', title: 'Alphabet Song', instruction: 'Sing along and tap each letter as it appears.', placeholder: '[INTERACTIVE: Animated letters appear to ABC tune. Tap each to hear name and sound. Uppercase and lowercase shown]', ageRange: '2+' },
            { id: 'letter_match', type: 'match', title: 'Uppercase to Lowercase', instruction: 'Match each capital letter to its lowercase partner.', placeholder: '[MATCH GAME: 26 uppercase + 26 lowercase cards. Tap pairs. Correct = letter sound plays]', ageRange: '4+' },
            { id: 'phonics_builder', type: 'build', title: 'Sound It Out', instruction: 'Hear a sound. Find the letter that makes it.', placeholder: '[PHONICS: Letter sound plays, child taps correct letter from choice of 4. All 26 phonemes covered progressively]', ageRange: '4+' },
          ],
          assessment: {
            questions: [
              { type: 'multiple_choice', q: 'How many letters are in the English alphabet?', options: ['24', '25', '26', '28'], answer: '26', explanation: 'The English alphabet has exactly 26 letters, from A to Z. Different languages have different alphabets — Arabic has 28 letters, Hawaiian has 13.', level: 'knowledge' },
              { type: 'multiple_choice', q: 'Which of these is a vowel?', options: ['B', 'C', 'E', 'G'], answer: 'E', explanation: 'The vowels are A, E, I, O, U. Every other letter is a consonant. Vowels form the core sound of every syllable in English.', level: 'knowledge' },
            ],
          },
          mastery: { threshold: 80, badge: 'Letter Master', badgeImage: '[BADGE: Letter Master with alphabet design]', reward: 'Phonics and reading pathway unlocked', rewardImage: '[REWARD_IMAGE: reading adventure preview]' },
        },
        {
          id: 'phonics',
          title: 'Phonics: Sounds and Letters',
          objective: 'Decode words by applying letter-sound relationships; blend sounds to read simple words',
          ageRange: '4-7', difficulty: 'foundation', xp: 75,
          heroImage: '[LESSON_HERO: Child with phonics blocks spelling simple words, sounds shown as waves]',
          narrator: {
            foundation: 'Phonics means using letter sounds to read words. Every letter makes a sound. When you put letter sounds together — blend them — you can read any word! C-A-T. Say each sound: /k/ /a/ /t/. Now say them fast together: cat! You just read your first word with phonics.',
            explore: 'English phonics follows patterns. Short vowels (a in cat, e in bed, i in sit, o in hot, u in cup) appear in consonant-vowel-consonant words. Long vowels often have silent e (cake, bike, home). Digraphs are two letters making one sound: sh, ch, th, wh. Blends are two consonants whose sounds blend together: bl, cr, st. Learning these patterns unlocks independent reading.',
            mastery: 'Phonemic awareness — the ability to hear and manipulate sounds in words — is the strongest predictor of reading success. Systematic phonics instruction outperforms whole-language approaches for most learners. The English spelling system, while irregular, follows patterns that cover about 50% of words exactly and another 36% with one unexpected sound. True irregulars represent only about 4% of common words.',
          },
          whyItMatters: 'Phonics unlocks reading independence. Once you can decode letter sounds, you can attempt to read any word you encounter.',
          vocabulary: [
            { word: 'phonics', phonetic: 'FON-iks', definition: 'The method of reading by learning the sounds that letters and letter combinations make', example: 'Using phonics, we know that the letters "sh" make the /sh/ sound in "ship."', image: '[VOCAB_IMAGE: letter combinations with sound wave symbols showing phonics]' },
            { word: 'blend', phonetic: 'blend', definition: 'To combine individual letter sounds smoothly to say a complete word', example: 'Blend /d/ /o/ /g/ together quickly to say "dog."', image: '[VOCAB_IMAGE: three letters with arrow showing blending into word]' },
            { word: 'digraph', phonetic: 'DY-graf', definition: 'Two letters that together make one single sound', example: 'The letters "sh" are a digraph — together they make one /sh/ sound.', image: '[VOCAB_IMAGE: sh, ch, th, wh shown with their sounds]' },
          ],
          activities: [
            { id: 'word_builder', type: 'build', title: 'Word Builder', instruction: 'Put letter sounds together to build words. Slide the letters and hear them blend.', placeholder: '[INTERACTIVE: CVC word builder. Consonant-Vowel-Consonant slots. Child selects letters, hears each sound, then hears blended word. Adjustable difficulty: 2-letter to 6-letter words]', ageRange: '4+' },
            { id: 'phonics_stories', type: 'story', title: 'Decodable Mini-Stories', instruction: 'Read these simple stories using your phonics skills. Tap any word to hear it.', placeholder: '[DECODABLE READER: 10 short stories using controlled vocabulary (CVC words first, then blends, then digraphs). Tap word to hear pronunciation. Progress tracks reading fluency]', ageRange: '5+' },
          ],
          assessment: {
            questions: [
              { type: 'multiple_choice', q: 'What sound does "sh" make?', options: ['/s/ and /h/ separately', '/sh/ as in "ship"', '/sk/ as in "sky"', '/th/ as in "the"'], answer: '/sh/ as in "ship"', explanation: '"Sh" is a digraph — two letters that make one sound. The /sh/ sound appears in ship, shop, she, push, and fish. Your lips make a shushing shape when you say it.', level: 'knowledge' },
              { type: 'multiple_choice', q: 'Blend these sounds: /k/ /a/ /t/. What word do you get?', options: ['bat', 'cat', 'hat', 'sat'], answer: 'cat', explanation: 'Blending /k/ + /a/ + /t/ gives us "cat." This is phonics in action — combining individual sounds to decode a complete word.', level: 'application' },
            ],
          },
          mastery: { threshold: 80, badge: 'Phonics Reader', badgeImage: '[BADGE: Phonics Reader with sound waves and letters]', reward: 'Reading fluency and vocabulary pathways unlocked', rewardImage: '[REWARD_IMAGE: full reading world preview]' },
        },
      ],
    },
    {
      id: 'writing',
      name: 'Writing & Expression',
      subtitle: 'From sentences to stories to essays',
      unlocked: true,
      bgImage: '[SUBWORLD_BG: Quill pen writing glowing words that transform into illustrated scenes]',
      color: '#9B6AE0',
      lessons: [
        {
          id: 'sentences',
          title: 'Writing Complete Sentences',
          objective: 'Understand that a sentence expresses a complete thought; identify subject and predicate; write clear sentences',
          ageRange: '5-8', difficulty: 'foundation', xp: 70,
          heroImage: '[LESSON_HERO: Sentence diagram showing subject and predicate with friendly character labels]',
          narrator: {
            foundation: 'A sentence is a group of words that expresses a complete thought. Every sentence needs two things: who or what the sentence is about (the subject) and what that person or thing does or is (the predicate). "The cat sat" is a sentence. "The cat" is not — it does not tell us what the cat did. Sentences start with capital letters and end with punctuation.',
            explore: 'A complete sentence contains a subject (who or what) and a predicate (what the subject does, is, or has). Simple sentences have one independent clause. Compound sentences join two clauses with conjunctions (and, but, or). Complex sentences use subordinating conjunctions (because, although, when). Sentence variety makes writing more engaging and sophisticated.',
            mastery: 'Syntactic analysis reveals the deep structure of language. Phrase structure rules describe how sentences are assembled from noun phrases, verb phrases, and other constituents. Transformational grammar (Chomsky) proposed that surface sentences are generated from underlying deep structures through transformations. Understanding syntax is essential for grammar, writing, computational linguistics, and language acquisition research.',
          },
          whyItMatters: 'Writing clear sentences is the foundation of all communication — academic writing, professional emails, stories, and essays all depend on mastering the sentence.',
          vocabulary: [
            { word: 'sentence', phonetic: 'SEN-tents', definition: 'A group of words that expresses a complete thought, starting with a capital letter and ending with punctuation', example: 'The dog runs fast. (complete sentence)', image: '[VOCAB_IMAGE: sentence with start and end labeled, capital letter and period highlighted]' },
            { word: 'subject', phonetic: 'SUB-jekt', definition: 'The part of a sentence that tells who or what the sentence is about', example: 'In "The bird sang," "The bird" is the subject.', image: '[VOCAB_IMAGE: sentence with subject underlined and labeled]' },
            { word: 'predicate', phonetic: 'PRED-ih-kit', definition: 'The part of a sentence that tells what the subject does, is, or has', example: 'In "The bird sang sweetly," "sang sweetly" is the predicate.', image: '[VOCAB_IMAGE: sentence with predicate underlined and labeled]' },
          ],
          activities: [
            { id: 'sentence_builder', type: 'build', title: 'Sentence Builder', instruction: 'Combine a subject and predicate to make a complete sentence.', placeholder: '[INTERACTIVE: Subject cards (The dog, My teacher, Three stars) and predicate cards (runs fast, is funny, shine brightly). Child combines any subject + predicate. Sentence reads aloud. Challenge: write your own subject and predicate]', ageRange: '5+' },
            { id: 'complete_or_not', type: 'sort', title: 'Complete Sentence or Fragment?', instruction: 'Decide if each group of words is a complete sentence or a fragment.', placeholder: '[SORT: 12 examples — mix of complete sentences and fragments. Child drags to Complete Sentence or Fragment bin. Explanation reveals what is missing from each fragment]', ageRange: '6+' },
          ],
          assessment: {
            questions: [
              { type: 'multiple_choice', q: 'Which of these is a complete sentence?', options: ['The big brown dog.', 'Running in the park.', 'The cat sat on the mat.', 'Because it was raining.'], answer: 'The cat sat on the mat.', explanation: 'A complete sentence needs a subject and predicate. "The cat sat on the mat" has a subject (The cat) and a predicate (sat on the mat). The others are fragments — they are missing either a subject or a complete thought.', level: 'application' },
            ],
          },
          mastery: { threshold: 80, badge: 'Sentence Builder', badgeImage: '[BADGE: Sentence Builder with words connecting]', reward: 'Paragraph writing and storytelling unlocked', rewardImage: '[REWARD_IMAGE: writing world preview]' },
        },
      ],
    },
    {
      id: 'literature',
      name: 'Literature & Storytelling',
      subtitle: 'Stories, poems, and the power of words',
      unlocked: false,
      bgImage: '[SUBWORLD_BG: Open storybook with scenes leaping off pages into 3D illustrations]',
      color: '#C44898',
      lessons: [
        {
          id: 'story_elements',
          title: 'Elements of a Story',
          objective: 'Identify character, setting, plot, conflict, and theme in stories; analyze how these elements work together',
          ageRange: '6-14', difficulty: 'foundation', xp: 85,
          heroImage: '[LESSON_HERO: Story map showing character, setting, plot arc, conflict, resolution connected by illustrated paths]',
          narrator: {
            foundation: 'Every story has building blocks called story elements. Characters are the people or creatures in the story. The setting is where and when the story takes place. The plot is what happens — the sequence of events. Conflict is the main problem or challenge. And the theme is the big idea or message the author wants you to take away.',
            explore: 'Literary analysis examines how authors construct meaning through story elements. Character development reveals how characters change (dynamic) or stay the same (static) through conflict. Point of view (first person, third person limited, omniscient) determines what the reader knows and when. Foreshadowing hints at future events. Symbolism gives objects or characters deeper meaning. Theme is the universal human truth the story explores.',
            mastery: 'Narratology — the study of narrative structure — reveals universal patterns across human storytelling. Vladimir Propp identified 31 recurring functions in folktales. Joseph Campbell\'s monomyth describes a universal hero journey across cultures. Aristotle\'s Poetics described tragedy\'s essential elements 2,400 years ago. Understanding narrative structure enables both critical analysis of literature and skilled creative writing.',
          },
          whyItMatters: 'Understanding story structure helps us appreciate literature, write better stories, understand human psychology, and recognize narrative patterns in news, history, and everyday life.',
          vocabulary: [
            { word: 'character', phonetic: 'KAIR-ik-ter', definition: 'A person, animal, or creature in a story', example: 'Harry Potter is the main character of J.K. Rowling\'s series.', image: '[VOCAB_IMAGE: story map with character at center with traits radiating outward]' },
            { word: 'setting', phonetic: 'SET-ing', definition: 'The time and place where a story takes place', example: 'The setting of The Wizard of Oz is Kansas and the magical land of Oz.', image: '[VOCAB_IMAGE: story setting with time and place labeled — castle, medieval period]' },
            { word: 'conflict', phonetic: 'KON-flikt', definition: 'The main problem or struggle in a story that drives the plot forward', example: 'The conflict in Romeo and Juliet is that their families are enemies.', image: '[VOCAB_IMAGE: four types of conflict: character vs character, vs nature, vs society, vs self]' },
            { word: 'theme', phonetic: 'theem', definition: 'The central message or universal truth that a story explores', example: 'The theme of Charlotte\'s Web is the power of friendship and sacrifice.', image: '[VOCAB_IMAGE: story elements converging to reveal theme in center]' },
          ],
          activities: [
            { id: 'story_map', type: 'build', title: 'Story Map Builder', instruction: 'Read or listen to a short story, then fill in the story map.', placeholder: '[INTERACTIVE: After reading/listening to a provided story, child fills in: Characters (who), Setting (where/when), Problem (conflict), Events (plot), Solution (resolution), Theme (big idea). Age-adapted stories from simple picture-book level to chapter-book complexity]', ageRange: '6+' },
            { id: 'theme_hunter', type: 'explore', title: 'Theme Hunter', instruction: 'Read four story summaries. Match each story to its theme.', placeholder: '[MATCH ACTIVITY: 4 story summaries + 4 theme statements. Child reasons through each match. Themes: friendship, courage, honesty, perseverance. Discussion: Can a story have more than one theme?]', ageRange: '8+' },
          ],
          assessment: {
            questions: [
              { type: 'multiple_choice', q: 'What is the THEME of a story?', options: ['The main characters in the story', 'Where and when the story takes place', 'The central message or universal idea the story explores', 'The problem the main character faces'], answer: 'The central message or universal idea the story explores', explanation: 'Theme is the "so what?" of a story — the universal idea about human life that the author explores. It is different from the plot (what happens) and the subject (what the story is about). A theme is expressed as an insight about life, not just a topic.', level: 'understanding' },
            ],
          },
          mastery: { threshold: 80, badge: 'Story Analyst', badgeImage: '[BADGE: Story Analyst with open book and magnifying glass]', reward: 'Advanced literature and creative writing pathways unlocked', rewardImage: '[REWARD_IMAGE: literature world preview]' },
        },
      ],
    },
  ],
  worldMastery: {
    requirement: 'Complete all core language subworlds',
    badge: 'Language Master',
    badgeImage: '[BADGE: Language Master with quill and open book]',
    reward: 'Advanced writing, literature, and world languages pathways unlocked',
  },
}
