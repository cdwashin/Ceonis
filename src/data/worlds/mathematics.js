export const MATHEMATICS = {
  id: 'math',
  name: 'Mathematics',
  subtitle: 'Numbers, Patterns & Logic',
  color: '#9B6AE0',
  unlocked: true,

  subworlds: [
    {
      id: 'early_numbers',
      name: 'Early Numbers',
      subtitle: 'Counting, recognition, and number sense',
      unlocked: true,
      bgImage: '[SUBWORLD_BG: Colorful number blocks floating in warm light]',
      color: '#FFD73C',
      lessons: [
        {
          id: 'counting_1_10',
          title: 'Counting 1 to 10',
          objective: 'Count objects from 1 to 10 and match numbers to quantities',
          ageRange: '2-5',
          difficulty: 'foundation',
          xp: 50,
          heroImage: '[LESSON_HERO: Bright colorful number blocks 1-10 with matching animal groups]',
          narrator: {
            foundation: 'Let us count together! One elephant, two butterflies, three stars. Counting is how we find out how many things there are. Put your finger out and count with me: one, two, three, four, five, six, seven, eight, nine, ten!',
            explore: 'Numbers are symbols that represent quantities. When we count, we assign one number to each object â this is called one-to-one correspondence. Numbers have order â each number is one more than the one before it. Zero means none. After ten, we start using two digits to make bigger numbers.',
            mastery: 'The natural numbers form an infinite sequence starting at 1. Zero was a revolutionary mathematical concept â many ancient civilizations had no symbol for nothing. The number system we use today is called the Hindu-Arabic numeral system, developed over centuries across India and the Arab world.',
          },
          whyItMatters: 'Counting is the foundation of all mathematics. Every calculation, measurement, and pattern starts here.',
          vocabulary: [
            { word: 'number', phonetic: 'NUM-ber', definition: 'A symbol that represents a quantity or amount', example: 'The number 5 means there are five things.', image: '[VOCAB_IMAGE: number 5 next to 5 apples]' },
            { word: 'count', phonetic: 'kount', definition: 'To say numbers in order while pointing to each object once', example: 'I count the cookies: one, two, three â there are three cookies!', image: '[VOCAB_IMAGE: hand pointing to objects one by one with number appearing above each]' },
            { word: 'quantity', phonetic: 'KWON-tih-tee', definition: 'How many of something there are', example: 'The quantity of apples in the basket is six.', image: '[VOCAB_IMAGE: basket with 6 apples, number 6 labeled]' },
          ],
          activities: [
            { id: 'tap_count', type: 'interact', title: 'Tap and Count', instruction: 'Tap each animal as you count it. How many are there?', placeholder: '[INTERACTIVE: Groups of 1-10 animals appear. Child taps each one, number counter increases, final number displayed with celebration]', ageRange: '2+' },
            { id: 'number_match', type: 'match', title: 'Match Number to Group', instruction: 'Match each number card to the group of objects with the same amount.', placeholder: '[MATCH: Number cards 1-10 on left, groups of objects on right â drag to match]', ageRange: '3+' },
            { id: 'fill_ten_frame', type: 'build', title: 'Fill the Ten Frame', instruction: 'Place the right number of objects in the ten frame.', placeholder: '[INTERACTIVE: Ten-frame grid, number shown, child drags objects to fill correct number of squares]', ageRange: '4+' },
          ],
          assessment: {
            questions: [
              { type: 'multiple_choice', q: 'How many stars are shown?', options: ['3', '4', '5', '6'], answer: '5', explanation: 'Count each star one at a time: one, two, three, four, five. There are 5 stars.', level: 'knowledge' },
              { type: 'multiple_choice', q: 'Which number comes after 7?', options: ['6', '7', '8', '9'], answer: '8', explanation: 'When counting, after 7 comes 8. Each number is one more than the one before it.', level: 'knowledge' },
            ],
          },
          mastery: { threshold: 80, badge: 'Counter', badgeImage: '[BADGE: Counter with number 10]', reward: 'Number World unlocked', rewardImage: '[REWARD: colorful number parade]' },
        },
        {
          id: 'numbers_to_100',
          title: 'Numbers to 100',
          objective: 'Read, write, and order numbers from 1 to 100; understand place value of tens and ones',
          ageRange: '5-7',
          difficulty: 'foundation',
          xp: 70,
          heroImage: '[LESSON_HERO: Hundred chart with colorful pattern highlights showing skip counting]',
          narrator: {
            foundation: 'Now we can go all the way to one hundred! After ten comes eleven, twelve, thirteen â all the way to nineteen. Then twenty! Notice how the numbers work in groups of ten. Ten, twenty, thirty, forty, fifty, sixty, seventy, eighty, ninety, one hundred.',
            explore: 'Numbers beyond 10 use place value â the position of a digit tells us its value. In the number 47, the 4 is in the tens place (meaning 40) and the 7 is in the ones place (meaning 7). So 47 is 40 plus 7. This positional system makes it possible to write any number using just ten digits: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9.',
            mastery: 'The decimal system is base-10, meaning each place value is ten times the previous. This system, universal today, was revolutionary when it replaced systems like Roman numerals that had no place value concept. Understanding that 47 means "4 tens and 7 ones" is a conceptual leap that underpins all arithmetic.',
          },
          whyItMatters: 'Understanding numbers to 100 and place value is the gateway to all arithmetic. It\'s how we make sense of money, measurement, time, and data.',
          vocabulary: [
            { word: 'tens', phonetic: 'tenz', definition: 'Groups of ten â the second place value from the right in a number', example: 'In the number 63, the 6 is in the tens place, meaning 60.', image: '[VOCAB_IMAGE: 6 groups of 10 objects showing 60]' },
            { word: 'ones', phonetic: 'wunz', definition: 'Single units â the first place value from the right', example: 'In the number 63, the 3 is in the ones place, meaning 3 individual items.', image: '[VOCAB_IMAGE: 3 single objects labeled ones]' },
            { word: 'place value', phonetic: 'plays VAL-yoo', definition: 'The value of a digit based on its position in a number', example: 'The digit 5 means 5 ones in 35 but means 50 in 57.', image: '[VOCAB_IMAGE: place value chart showing hundreds, tens, ones columns]' },
          ],
          activities: [
            { id: 'hundred_chart', type: 'explore', title: 'Hundred Chart Explorer', instruction: 'Tap any number on the hundred chart. Watch patterns appear when you skip count by 2s, 5s, and 10s.', placeholder: '[INTERACTIVE: 10x10 hundred chart. Tap number to highlight. Pattern buttons: count by 2 (even pattern), by 5 (5/10 column), by 10 (column fills). Shows visual patterns in number system]', ageRange: '5+' },
            { id: 'place_value_blocks', type: 'build', title: 'Build a Number with Blocks', instruction: 'Use tens rods and ones cubes to build any number from 1 to 100.', placeholder: '[INTERACTIVE: Workspace with ten-rods (10 units) and single cubes. Drag to build numbers. Number display updates. Challenge: build the number 47 using rods and cubes]', ageRange: '6+' },
          ],
          assessment: {
            questions: [
              { type: 'multiple_choice', q: 'In the number 73, what does the 7 represent?', options: ['7 ones', '7 tens (70)', '7 hundreds', '7 twos'], answer: '7 tens (70)', explanation: 'In 73, the 7 is in the tens place. That means 7 groups of ten, which equals 70. The 3 is in the ones place, meaning 3.', level: 'understanding' },
              { type: 'multiple_choice', q: 'What number is 10 more than 45?', options: ['46', '54', '55', '56'], answer: '55', explanation: 'When we add 10 to any number, the tens digit increases by 1. 45 + 10 = 55.', level: 'application' },
            ],
          },
          mastery: { threshold: 80, badge: 'Place Value Pro', badgeImage: '[BADGE: Place Value Pro with tens and ones blocks]', reward: 'Number operations pathway unlocked', rewardImage: '[REWARD: arithmetic adventure preview]' },
        },
      ],
    },
    {
      id: 'operations',
      name: 'Addition & Subtraction',
      subtitle: 'Adding, taking away, and number bonds',
      unlocked: true,
      bgImage: '[SUBWORLD_BG: Math adventure â balance scales, number lines, friendly equations]',
      color: '#3AB5D4',
      lessons: [
        {
          id: 'addition_basics',
          title: 'What Is Addition?',
          objective: 'Understand addition as combining groups; solve addition problems within 20',
          ageRange: '5-7',
          difficulty: 'foundation',
          xp: 70,
          heroImage: '[LESSON_HERO: Two groups of fruit combining into one larger group with plus sign and equals sign]',
          narrator: {
            foundation: 'Addition means putting groups together to find how many in all. If you have 3 apples and I give you 2 more apples, how many do you have? Let us count: 3 apples, then 4, 5 â you have 5 apples! We write this as 3 plus 2 equals 5. The plus sign means we are adding things together.',
            explore: 'Addition has important properties. The commutative property says the order does not matter: 3 + 5 = 5 + 3. The identity property says adding zero does not change a number: 7 + 0 = 7. We can use number lines, counting on, or memorized math facts to add quickly. Breaking numbers apart â decomposing â helps us add larger numbers.',
            mastery: 'Addition is formally defined as a binary operation on numbers. The set of whole numbers forms a commutative monoid under addition, with 0 as the identity element. Understanding addition algorithmically â with carrying â requires deep understanding of place value. Mental math strategies like making tens (8 + 7 = 8 + 2 + 5 = 10 + 5 = 15) build numerical fluency.',
          },
          whyItMatters: 'Addition is used in every aspect of daily life â from counting change to calculating distances to understanding data. It is the building block of all arithmetic.',
          vocabulary: [
            { word: 'addition', phonetic: 'ah-DIH-shun', definition: 'The operation of combining two or more numbers to find the total', example: '3 + 4 = 7 is an addition problem.', image: '[VOCAB_IMAGE: 3 objects + 4 objects = 7 objects visual]' },
            { word: 'sum', phonetic: 'sum', definition: 'The answer when you add numbers together', example: 'In 4 + 3 = 7, the sum is 7.', image: '[VOCAB_IMAGE: addition equation with sum labeled and highlighted]' },
            { word: 'plus', phonetic: 'plus', definition: 'The symbol + used to show that numbers are being added', example: '5 plus 2 equals 7 is written as 5 + 2 = 7.', image: '[VOCAB_IMAGE: large + symbol with the word PLUS labeled]' },
          ],
          activities: [
            { id: 'counting_on', type: 'interact', title: 'Count On Game', instruction: 'Start at the first number and count on to find the sum.', placeholder: '[INTERACTIVE: Number line shown. First number highlighted. Child taps to jump forward the right number of steps. Landing spot shows sum. Satisfying click sound and animation]', ageRange: '5+' },
            { id: 'addition_stories', type: 'story', title: 'Addition Story Problems', instruction: 'Listen to the story and solve the addition problem.', placeholder: '[INTERACTIVE STORY: Animated scenarios â "3 birds on a branch, 2 more land, how many now?" Child inputs answer, narrator confirms]', ageRange: '5+' },
            { id: 'ten_friends', type: 'build', title: 'Friends of Ten', instruction: 'Find all the pairs of numbers that add up to 10.', placeholder: '[INTERACTIVE: Ten frame, child discovers all pairs: 1+9, 2+8, 3+7, 4+6, 5+5. Each discovery unlocks a star. Visual shows the symmetry of number bonds]', ageRange: '6+' },
          ],
          assessment: {
            questions: [
              { type: 'multiple_choice', q: '6 + 7 = ?', options: ['12', '13', '14', '15'], answer: '13', explanation: 'Count on from 6: 7, 8, 9, 10, 11, 12, 13. Or use making ten: 6 + 4 = 10, and 3 more = 13.', level: 'knowledge' },
              { type: 'multiple_choice', q: 'There are 8 ducks in a pond. 5 more arrive. How many ducks are there now?', options: ['11', '12', '13', '14'], answer: '13', explanation: '8 + 5 = 13. We can count on from 8: 9, 10, 11, 12, 13. Or use making ten: 8 + 2 = 10, then 3 more = 13.', level: 'application' },
            ],
          },
          mastery: { threshold: 80, badge: 'Addition Ace', badgeImage: '[BADGE: Addition Ace with plus symbol]', reward: 'Subtraction pathway unlocked', rewardImage: '[REWARD: subtraction adventure preview]' },
        },
      ],
    },
    {
      id: 'multiplication',
      name: 'Multiplication & Division',
      subtitle: 'Equal groups, arrays, and inverse operations',
      unlocked: false,
      bgImage: '[SUBWORLD_BG: Arrays of objects, multiplication grids, area models]',
      color: '#C44898',
      lessons: [
        {
          id: 'multiplication_intro',
          title: 'What Is Multiplication?',
          objective: 'Understand multiplication as repeated addition and equal groups; build multiplication tables through 12',
          ageRange: '7-9',
          difficulty: 'foundation',
          xp: 85,
          heroImage: '[LESSON_HERO: 4 groups of 3 apples arranged in rows, showing 4 Ã 3 = 12]',
          narrator: {
            foundation: 'Multiplication is a faster way to add equal groups. Instead of saying 3 plus 3 plus 3 plus 3, we can say 4 times 3. Four groups of three. The answer is twelve. Multiplication saves us time when we have many equal groups to count.',
            explore: 'Multiplication can be shown as repeated addition, equal groups, arrays (rows and columns), or area models. The multiplication table is a grid showing products of all single-digit numbers. Key properties: commutative (3 Ã 4 = 4 Ã 3), associative, distributive. Mastering multiplication facts to 12 Ã 12 builds the foundation for all future arithmetic.',
            mastery: 'Multiplication is a binary operation defined on the integers. It distributes over addition: a(b+c) = ab + ac. This distributive property is the foundation of algebra. Long multiplication algorithms work by applying the distributive property systematically. Multiplication\'s relationship with division â as inverse operations â mirrors the relationship between addition and subtraction.',
          },
          whyItMatters: 'Multiplication is used to calculate area, scale recipes, convert units, understand fractions, and solve problems in every field from science to finance.',
          vocabulary: [
            { word: 'multiplication', phonetic: 'mul-tih-plih-KAY-shun', definition: 'Repeated addition of equal groups', example: '4 Ã 3 means four groups of three, which equals 12.', image: '[VOCAB_IMAGE: 4 rows of 3 dots = 12 dots total, equation labeled]' },
            { word: 'product', phonetic: 'PROD-ukt', definition: 'The answer when you multiply numbers together', example: 'In 6 Ã 7 = 42, the product is 42.', image: '[VOCAB_IMAGE: multiplication equation with product highlighted]' },
            { word: 'factor', phonetic: 'FAK-ter', definition: 'The numbers being multiplied together', example: 'In 6 Ã 7 = 42, both 6 and 7 are factors.', image: '[VOCAB_IMAGE: factors labeled on both sides of multiplication sign]' },
            { word: 'array', phonetic: 'ah-RAY', definition: 'Objects arranged in equal rows and columns to show multiplication', example: 'A 3 Ã 4 array has 3 rows and 4 columns, showing 12 objects.', image: '[VOCAB_IMAGE: 3Ã4 array of dots with rows and columns labeled]' },
          ],
          activities: [
            { id: 'array_builder', type: 'build', title: 'Build an Array', instruction: 'Build arrays for multiplication facts. Set the rows and columns and count the total.', placeholder: '[INTERACTIVE: Grid builder with row/column sliders. Child adjusts to show any multiplication. Array fills with dots. Equation updates. Shows both a Ã b and b Ã a to demonstrate commutativity]', ageRange: '7+' },
            { id: 'times_table_race', type: 'practice', title: 'Times Table Challenge', instruction: 'Answer multiplication facts as fast as you can. Beat your own record!', placeholder: '[TIMED GAME: Random multiplication facts appear 1Ã1 through 12Ã12. Input answer. Timer counts. Personal best tracked. Stars awarded by speed and accuracy]', ageRange: '8+' },
          ],
          assessment: {
            questions: [
              { type: 'multiple_choice', q: '7 Ã 8 = ?', options: ['54', '56', '58', '63'], answer: '56', explanation: '7 Ã 8 = 56. This is one of the most important multiplication facts to memorize. 7 Ã 7 = 49, so 7 Ã 8 = 49 + 7 = 56.', level: 'knowledge' },
              { type: 'multiple_choice', q: 'A classroom has 6 rows of desks with 5 desks in each row. How many desks are there?', options: ['11', '25', '30', '56'], answer: '30', explanation: '6 rows Ã 5 desks per row = 30 desks. This is a real-world application of multiplication with equal groups.', level: 'application' },
            ],
          },
          mastery: { threshold: 80, badge: 'Multiplication Master', badgeImage: '[BADGE: Multiplication Master with times table grid]', reward: 'Division pathway + fraction foundations unlocked', rewardImage: '[REWARD: advanced math preview]' },
        },
      ],
    },
    {
      id: 'fractions',
      name: 'Fractions & Decimals',
      subtitle: 'Parts of wholes and the number line between integers',
      unlocked: false,
      bgImage: '[SUBWORLD_BG: Pizza slices, fraction bars, decimal points â colorful mathematics]',
      color: '#E8A030',
      lessons: [
        {
          id: 'fraction_intro',
          title: 'What Is a Fraction?',
          objective: 'Understand fractions as equal parts of a whole; identify numerator and denominator; compare simple fractions',
          ageRange: '7-10',
          difficulty: 'foundation',
          xp: 80,
          heroImage: '[LESSON_HERO: Circle divided into equal parts with fractions labeled: 1/2, 1/3, 1/4, showing shaded regions]',
          narrator: {
            foundation: 'A fraction is a part of a whole. If you cut a pizza into 4 equal slices and take 1 slice, you have one fourth of the pizza. We write this as 1 over 4. The bottom number tells us how many equal pieces the whole is cut into. The top number tells us how many pieces we have.',
            explore: 'Fractions have a numerator (top number â how many parts we have) and denominator (bottom number â how many equal parts the whole is divided into). Equivalent fractions represent the same value: 1/2 = 2/4 = 3/6. Fractions can be compared â when denominators are the same, larger numerator means larger fraction. Fractions can be placed on a number line between 0 and 1.',
            mastery: 'Fractions are rational numbers â numbers expressible as p/q where p and q are integers and q â  0. The set of rational numbers is dense â between any two rationals is another rational. Fractions underpin proportional reasoning, ratio, percentage, algebra, and calculus. Understanding that division and fractions are equivalent (3/4 = 3 Ã· 4) is a crucial conceptual bridge.',
          },
          whyItMatters: 'Fractions appear everywhere â in cooking measurements, musical rhythm, probability, science, and finance. They are the foundation of ratio, proportion, and algebra.',
          vocabulary: [
            { word: 'fraction', phonetic: 'FRAK-shun', definition: 'A number that represents a part of a whole, written as one number over another', example: '3/4 means 3 parts out of 4 equal parts.', image: '[VOCAB_IMAGE: rectangle divided into 4 equal parts with 3 shaded, 3/4 labeled]' },
            { word: 'numerator', phonetic: 'NOO-mer-ay-ter', definition: 'The top number of a fraction â how many parts we have', example: 'In 3/4, the numerator is 3.', image: '[VOCAB_IMAGE: fraction 3/4 with arrow pointing to 3 labeled numerator]' },
            { word: 'denominator', phonetic: 'deh-NOM-ih-nay-ter', definition: 'The bottom number of a fraction â how many equal parts the whole is divided into', example: 'In 3/4, the denominator is 4.', image: '[VOCAB_IMAGE: fraction 3/4 with arrow pointing to 4 labeled denominator]' },
          ],
          activities: [
            { id: 'fraction_builder', type: 'interact', title: 'Fraction Builder', instruction: 'Choose a shape and divide it into equal parts. Shade to show different fractions.', placeholder: '[INTERACTIVE: Choose circle, rectangle, or bar. Slider for denominator (2-12). Tap sections to shade as numerator. Fraction notation updates. Challenge mode: "Show me 3/5"]', ageRange: '7+' },
            { id: 'fraction_pizza', type: 'simulate', title: 'Pizza Fraction Kitchen', instruction: 'Cut the pizza into equal slices and serve the right fraction to each customer.', placeholder: '[SIMULATION: Pizza cutter tool. Customers request fractions: "I want 1/3 of the pizza." Child cuts and serves. Builds intuition for fraction sizes and equality]', ageRange: '7+' },
          ],
          assessment: {
            questions: [
              { type: 'multiple_choice', q: 'A cake is cut into 8 equal pieces. Maria eats 3 pieces. What fraction of the cake did she eat?', options: ['3/5', '8/3', '3/8', '5/8'], answer: '3/8', explanation: 'The cake is cut into 8 pieces (denominator = 8). Maria ate 3 pieces (numerator = 3). So she ate 3/8 of the cake.', level: 'application' },
              { type: 'multiple_choice', q: 'Which fraction is larger: 3/4 or 2/4?', options: ['3/4', '2/4', 'They are equal', 'Cannot tell'], answer: '3/4', explanation: 'When fractions have the same denominator, the one with the larger numerator is bigger. 3/4 > 2/4 because 3 > 2.', level: 'reasoning' },
            ],
          },
          mastery: { threshold: 80, badge: 'Fraction Expert', badgeImage: '[BADGE: Fraction Expert with pizza slice design]', reward: 'Decimal pathway + ratio preview unlocked', rewardImage: '[REWARD: decimal world preview]' },
        },
      ],
    },
    {
      id: 'algebra',
      name: 'Algebra & Patterns',
      subtitle: 'Variables, equations, and mathematical reasoning',
      unlocked: false,
      bgImage: '[SUBWORLD_BG: Equations floating in space, balance scales, pattern sequences]',
      color: '#7C6AE0',
      lessons: [
        {
          id: 'patterns_intro',
          title: 'Patterns and Sequences',
          objective: 'Identify, extend, and create patterns; understand rules that generate sequences',
          ageRange: '5-12',
          difficulty: 'foundation',
          xp: 75,
          heroImage: '[LESSON_HERO: Multiple pattern types â color pattern, shape pattern, number sequence, growing pattern]',
          narrator: {
            foundation: 'A pattern is something that repeats in a predictable way. Red, blue, red, blue, red â what comes next? Blue! Patterns are everywhere: in music, in nature, in numbers. When we find a pattern, we can predict what comes next. That is a superpower!',
            explore: 'Patterns can be repeating (ABAB), growing (1, 3, 5, 7...), or shrinking. Number patterns â called sequences â follow mathematical rules. The rule "add 3 each time" generates: 2, 5, 8, 11, 14. Finding the rule is the key to understanding and extending any sequence. Patterns in multiplication tables reveal mathematical structure.',
            mastery: 'Sequences are the foundation of algebra and calculus. An arithmetic sequence has a constant difference between terms (linear growth). A geometric sequence has a constant ratio (exponential growth). The Fibonacci sequence (1, 1, 2, 3, 5, 8, 13...) appears throughout nature. Recognizing and formalizing patterns as algebraic expressions is the transition from arithmetic to algebra.',
          },
          whyItMatters: 'Pattern recognition is one of the most fundamental cognitive skills in mathematics. It leads directly to algebra, functions, and the ability to model and predict real-world phenomena.',
          vocabulary: [
            { word: 'pattern', phonetic: 'PAT-ern', definition: 'A repeated arrangement of numbers, shapes, or colors that follows a rule', example: '1, 3, 5, 7, 9 is a pattern that increases by 2 each time.', image: '[VOCAB_IMAGE: visual examples of 4 different pattern types â color, shape, size, number]' },
            { word: 'sequence', phonetic: 'SEE-kwents', definition: 'A list of numbers or objects that follow a pattern or rule', example: 'The sequence 5, 10, 15, 20 increases by 5 each time.', image: '[VOCAB_IMAGE: number sequence with rule arrow showing +5 between each term]' },
            { word: 'rule', phonetic: 'rool', definition: 'The mathematical instruction that explains how a pattern works', example: 'The rule for 2, 4, 6, 8 is "add 2 each time."', image: '[VOCAB_IMAGE: input/output table showing rule applied to each number]' },
          ],
          activities: [
            { id: 'pattern_builder', type: 'build', title: 'Pattern Builder', instruction: 'Create your own pattern using shapes, colors, or numbers. Can your friend figure out the rule?', placeholder: '[INTERACTIVE: Palette of shapes/colors. Child creates pattern. Extension: guess the next element. Challenge mode: given partial sequence, find the rule and complete it]', ageRange: '5+' },
            { id: 'sequence_detective', type: 'explore', title: 'Sequence Detective', instruction: 'Find the rule for each sequence and fill in the missing numbers.', placeholder: '[PUZZLE: 12 sequences of increasing difficulty. Child finds rule, fills blanks. Ranges from simple (2,4,6,__) to complex (1,1,2,3,5,8,__) Fibonacci sequence]', ageRange: '8+' },
          ],
          assessment: {
            questions: [
              { type: 'multiple_choice', q: 'What is the next number in the sequence: 3, 6, 9, 12, ___?', options: ['13', '14', '15', '16'], answer: '15', explanation: 'The rule is add 3 each time. 12 + 3 = 15. This is the pattern of counting by 3s, also seen in the 3 times table.', level: 'knowledge' },
              { type: 'multiple_choice', q: 'What is the rule for this sequence: 2, 6, 18, 54?', options: ['Add 4', 'Multiply by 3', 'Add 16', 'Subtract 2'], answer: 'Multiply by 3', explanation: '2 Ã 3 = 6, 6 Ã 3 = 18, 18 Ã 3 = 54. This is a geometric sequence â each term is multiplied by 3.', level: 'reasoning' },
            ],
          },
          mastery: { threshold: 80, badge: 'Pattern Master', badgeImage: '[BADGE: Pattern Master with Fibonacci spiral]', reward: 'Equation Explorer pathway unlocked', rewardImage: '[REWARD: algebra world preview]' },
        },
      ],
    },
    {
      id: 'genius_math',
      name: 'Genius Mathematics',
      subtitle: 'Algebra, geometry, statistics, and calculus foundations',
      unlocked: false,
      bgImage: '[SUBWORLD_BG: Advanced mathematical notation, geometric proofs, calculus curves]',
      color: '#A090FF',
      lessons: [
        {
          id: 'algebra_intro',
          title: 'Introduction to Algebra',
          objective: 'Understand variables as unknown quantities; write and solve one-step equations',
          ageRange: '11-16',
          difficulty: 'advanced',
          xp: 120,
          heroImage: '[LESSON_HERO: Balance scale with x on one side and numbers on other â algebra as balance]',
          narrator: {
            mastery: 'Algebra introduces the variable â a symbol representing an unknown quantity. An equation is a mathematical statement that two expressions are equal, like x + 5 = 12. Solving an equation means finding the value of the variable that makes the equation true. We use inverse operations: to undo addition, we subtract. The goal is to isolate the variable on one side of the equation.',
          },
          whyItMatters: 'Algebra is the language of mathematics. Every advanced math topic â geometry, statistics, calculus, physics â requires algebraic thinking.',
          vocabulary: [
            { word: 'variable', phonetic: 'VAIR-ee-ah-bul', definition: 'A symbol, usually a letter, that represents an unknown or changing quantity', example: 'In x + 5 = 12, x is a variable representing the unknown number.', image: '[VOCAB_IMAGE: letter x on balance scale, representing unknown weight]' },
            { word: 'equation', phonetic: 'ih-KWAY-zhun', definition: 'A mathematical statement showing that two expressions are equal', example: '3x + 2 = 14 is an equation.', image: '[VOCAB_IMAGE: equation with equals sign as balance point]' },
          ],
          activities: [
            { id: 'balance_equation', type: 'simulate', title: 'Balance Scale Equations', instruction: 'Keep the scale balanced while solving for x.', placeholder: '[SIMULATION: Balance scale. x blocks on one side, number blocks on other. Child removes equal amounts from both sides. Scale stays balanced. x revealed when isolated]', ageRange: '11+' },
          ],
          assessment: {
            questions: [
              { type: 'multiple_choice', q: 'Solve: x + 7 = 15', options: ['x = 7', 'x = 8', 'x = 9', 'x = 22'], answer: 'x = 8', explanation: 'To solve x + 7 = 15, subtract 7 from both sides: x + 7 - 7 = 15 - 7, so x = 8. Check: 8 + 7 = 15 â', level: 'application' },
            ],
          },
          mastery: { threshold: 85, badge: 'Algebraist', badgeImage: '[BADGE: Algebraist with equation design]', reward: 'Full algebra and geometry pathways unlocked', rewardImage: '[REWARD: advanced math universe preview]' },
        },
      ],
    },
  ],

  worldMastery: {
    requirement: 'Complete all core subworlds and earn 80%+ on the Mathematics World Assessment',
    badge: 'Mathematical Mind',
    badgeImage: '[BADGE: Mathematical Mind â all operations combined design]',
    reward: 'Genius Mathematics full pathway + AP Calculus preview',
  },
}
