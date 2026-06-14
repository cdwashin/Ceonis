export const TECH = {
  id: 'tech',
  name: 'Technology & Innovation',
  subtitle: 'Code, Build, Engineer, and Invent',
  color: '#20C8E0',
  unlocked: true,
  subworlds: [
    {
      id: 'coding',
      name: 'Coding & Programming',
      subtitle: 'Algorithms, logic, and building with code',
      unlocked: true,
      bgImage: '[SUBWORLD_BG: Glowing code streams, block programming interface, robot building on one side]',
      color: '#20C8E0',
      lessons: [
        {
          id: 'what_is_coding',
          title: 'What Is Coding?',
          objective: 'Understand that code is instructions for computers; learn algorithmic thinking; write simple programs',
          ageRange: '5-14', difficulty: 'foundation', xp: 80,
          heroImage: '[LESSON_HERO: Friendly robot and child looking at code blocks together, translating instructions to actions]',
          narrator: {
            foundation: 'Computers cannot think for themselves — they need instructions. Coding is writing those instructions in a language computers understand. Every app, game, and website runs on code. When you use a calculator, play a video game, or search the internet — someone wrote code to make that possible. And you can learn to write code too!',
            explore: 'Programming languages translate human-readable instructions into machine code computers execute. High-level languages (Python, JavaScript, Scratch) are closer to human language. Compiled languages convert code to machine code before running; interpreted languages run line by line. Key programming concepts: variables (stored data), conditionals (if/else decisions), loops (repetition), functions (reusable code blocks). These concepts exist in every language.',
            mastery: 'Computer science is founded on formal mathematical principles. Algorithms are analyzed for time complexity (Big O notation) — how computation scales with input size. Data structures (arrays, linked lists, trees, graphs) organize information for efficient access. Computability theory (Turing, 1936) established what problems can and cannot be solved algorithmically. Cryptography, artificial intelligence, operating systems, and networking all build on these foundations.',
          },
          whyItMatters: 'Coding teaches logical thinking, problem decomposition, and debugging — skills that apply far beyond programming. And in a world where software touches everything, understanding how it works is increasingly essential.',
          vocabulary: [
            { word: 'algorithm', phonetic: 'AL-go-rith-um', definition: 'A precise, step-by-step set of instructions for solving a problem or completing a task', example: 'A recipe is an algorithm — it gives exact steps for making a dish.', image: '[VOCAB_IMAGE: flowchart showing algorithm steps with decision diamond and action boxes]' },
            { word: 'code', phonetic: 'kohd', definition: 'A set of instructions written in a programming language that a computer can execute', example: 'The code for a calculator tells the computer exactly how to add, subtract, multiply, and divide.', image: '[VOCAB_IMAGE: code block example in simple visual format with labels]' },
            { word: 'loop', phonetic: 'loop', definition: 'A programming instruction that repeats actions a specified number of times or until a condition is met', example: 'A loop can repeat "draw a square side" four times instead of writing the instruction four times.', image: '[VOCAB_IMAGE: loop diagram showing repeated action with counter or condition exit]' },
            { word: 'debug', phonetic: 'dee-BUG', definition: 'The process of finding and fixing errors (bugs) in code', example: 'After debugging for an hour, the programmer found a missing semicolon causing the crash.', image: '[VOCAB_IMAGE: magnifying glass over code with error highlighted, corrected version shown]' },
          ],
          activities: [
            { id: 'block_coding', type: 'build', title: 'Code a Maze', instruction: 'Drag code blocks to guide the character through the maze.', placeholder: '[BLOCK CODING: Drag-and-drop blocks — move forward, turn left, turn right, repeat. Character navigates grid maze. Increasingly complex mazes. Foundation: linear sequence. Intermediate: loops. Advanced: conditionals and nested loops]', ageRange: '5+' },
            { id: 'algorithm_design', type: 'create', title: 'Algorithm Designer', instruction: 'Write the exact step-by-step algorithm for making a peanut butter sandwich. Then follow your classmate\'s instructions literally.', placeholder: '[ACTIVITY: Child writes algorithm in precise steps. Key learning: computers do exactly what you say, nothing more. Common result: forgetting to open the jar, not specifying how much peanut butter, etc. Reveals why precision matters in programming]', ageRange: '7+' },
            { id: 'pattern_code', type: 'build', title: 'Code Art Patterns', instruction: 'Write code to draw geometric patterns using loops and colors.', placeholder: '[VISUAL CODING: Simple drawing commands with loops. Draw squares, circles, spirals. Change colors with variables. Nested loops create complex patterns from simple rules. Mathematical connection: pattern is a loop of loop]', ageRange: '8+' },
          ],
          assessment: {
            questions: [
              { type: 'multiple_choice', q: 'What is a loop in programming?', options: ['A type of error', 'An instruction that repeats actions a number of times', 'A kind of variable', 'A programming language'], answer: 'An instruction that repeats actions a number of times', explanation: 'Loops allow programmers to repeat instructions without writing them multiple times. Instead of writing "move forward" 100 times, you write a loop: "repeat 100 times: move forward." Loops are fundamental to almost every program.', level: 'knowledge' },
              { type: 'multiple_choice', q: 'Why is precise language important when writing code?', options: ['To make the code look neat', 'Because computers do exactly what the code says — nothing more, nothing less', 'To impress other programmers', 'Precise language is not actually important'], answer: 'Because computers do exactly what the code says — nothing more, nothing less', explanation: 'Computers have no common sense — they follow instructions exactly as written. If you write "pick up the cup" when you mean "pick up the cup, then drink from it," the computer will pick up the cup and stop. Precision is why programming requires careful, logical thinking.', level: 'understanding' },
            ],
          },
          mastery: { threshold: 80, badge: 'Junior Coder', badgeImage: '[BADGE: Junior Coder with code block and robot]', reward: 'Advanced programming, web development, and robotics pathways unlocked', rewardImage: '[REWARD_IMAGE: coding advanced preview]' },
        },
      ],
    },
    {
      id: 'engineering',
      name: 'Engineering & Design',
      subtitle: 'Problem solving through the design process',
      unlocked: true,
      bgImage: '[SUBWORLD_BG: Engineering lab with blueprints, 3D models, robots, bridges under construction]',
      color: '#E8A030',
      lessons: [
        {
          id: 'design_process',
          title: 'The Engineering Design Process',
          objective: 'Apply the engineering design process: define, research, brainstorm, prototype, test, iterate',
          ageRange: '7-16', difficulty: 'foundation', xp: 85,
          heroImage: '[LESSON_HERO: Engineering design process as circular diagram with prototype, test, improve arrows]',
          narrator: {
            foundation: 'Engineers solve problems — but they do not just jump to solutions. They follow a process. First: clearly define the problem. Then research what already exists. Brainstorm many ideas — the more the better. Choose the best idea and build a prototype — a test model. Test it and find what does not work. Then improve it. Repeat until it works well. This is how humanity builds everything from bridges to smartphones.',
            explore: 'Engineering design is iterative — designers expect to fail and improve. Edison reportedly made 1,000 unsuccessful attempts before the lightbulb worked. Constraints (limitations: cost, materials, time, size) and criteria (requirements: must hold 100 kg, must cost under $50) define the design space. Prototyping ranges from paper sketches to 3D-printed models to digital simulations. User testing reveals problems designers cannot see themselves.',
            mastery: 'Systems engineering applies to complex projects like spacecraft, power grids, and software platforms. Failure mode and effects analysis (FMEA) systematically identifies potential failure points before they occur. Human factors engineering (ergonomics) designs for how people actually behave, not how designers assume they will. The Tacoma Narrows Bridge collapse (1940) and Challenger disaster (1986) are studied in engineering education as lessons in the consequences of design flaws.',
          },
          whyItMatters: 'Engineering thinking is one of the most powerful frameworks for solving any problem — not just technical ones. Defining the problem clearly, testing ideas, and improving based on results applies to life, business, science, and art.',
          vocabulary: [
            { word: 'prototype', phonetic: 'PROH-toh-type', definition: 'An early model built to test a design idea before creating the final version', example: 'The engineering team built three prototypes of the bridge before settling on the final design.', image: '[VOCAB_IMAGE: progression from sketch to prototype to final product]' },
            { word: 'iteration', phonetic: 'it-er-AY-shun', definition: 'One cycle of building, testing, and improving — repeated until the design meets requirements', example: 'After five iterations, the robot could navigate the maze without hitting any walls.', image: '[VOCAB_IMAGE: circular iteration diagram: build → test → analyze → improve → repeat]' },
            { word: 'constraint', phonetic: 'kon-STRAYNT', definition: 'A limitation on a design — such as budget, materials, size, or time', example: 'Our bridge design had a constraint of $20 in materials and must span 30 centimeters.', image: '[VOCAB_IMAGE: design space diagram showing constraints limiting solution space]' },
          ],
          activities: [
            { id: 'bridge_challenge', type: 'build', title: 'Bridge Building Challenge', instruction: 'Design a bridge using limited materials. Test how much weight it holds. Improve and rebuild.', placeholder: '[ENGINEERING CHALLENGE: Materials: index cards, tape, straws — limited quantity. Design bridge to span gap between two desks. Test with weights. Record results. Three iteration rounds. Class comparison: analyze why some bridges hold more. Connect to real bridge engineering]', ageRange: '7+' },
            { id: 'egg_drop', type: 'build', title: 'Egg Drop Design Challenge', instruction: 'Design a container that will protect an egg dropped from 3 meters.', placeholder: '[CHALLENGE: Materials: newspaper, tape, cotton, straws, rubber bands — limited amounts. Design container around egg. Drop from increasing heights. Dissect what worked and why. Newton\'s laws of motion connection: impulse, impact force, cushioning]', ageRange: '9+' },
          ],
          assessment: {
            questions: [
              { type: 'multiple_choice', q: 'Why do engineers build prototypes before creating the final product?', options: ['To show off their skills', 'To waste materials', 'To test ideas, discover problems, and improve the design at low cost before full-scale production', 'Because it is required by law'], answer: 'To test ideas, discover problems, and improve the design at low cost before full-scale production', explanation: 'Prototypes allow engineers to test whether a design works in reality, discover unexpected problems, and make improvements while changes are still cheap. Discovering a design flaw at the prototype stage costs a fraction of discovering it after full production has begun.', level: 'understanding' },
            ],
          },
          mastery: { threshold: 80, badge: 'Design Engineer', badgeImage: '[BADGE: Design Engineer with gear and lightbulb]', reward: 'Robotics, circuits, and advanced engineering pathways unlocked', rewardImage: '[REWARD_IMAGE: engineering advanced preview]' },
        },
      ],
    },
  ],
  worldMastery: {
    requirement: 'Complete all core Technology subworlds',
    badge: 'Tech Innovator',
    badgeImage: '[BADGE: Tech Innovator with code, circuit, and lightbulb combined]',
    reward: 'Advanced programming, AI concepts, cybersecurity, and robotics pathways fully unlocked',
  },
}
