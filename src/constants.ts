export interface Game {
  id: string;
  title: string;
  category: 'Tech' | 'Non-Tech';
  about: string;
  rules?: string[];
  rounds?: { title: string; content: string }[];
  teamSize?: string;
}

export const GAMES: Game[] = [
  {
    id: 'shan-e-technomantra',
    title: 'Shan-e-Technomantra',
    category: 'Tech',
    about: 'Shan-e-Technomantra is a dynamic competition that combines technical expertise with strong communication skills. The event tests participants on their analytical thinking, coding ability, and overall technical knowledge.',
    rules: [
      'No electronic devices are allowed during the rounds.',
      'Any form of cheating, plagiarism, or misconduct will lead to disqualification.',
      'The judges’ decision will be final.'
    ],
    rounds: [
      { title: 'Round 1 – Aptitude', content: '15 minutes. Participants will be tested on problem-solving and analytical skills through aptitude-based questions.' },
      { title: 'Round 2 – Technical', content: '20 minutes. Participants will engage in competitive programming challenges to demonstrate coding skills and algorithmic thinking.' },
      { title: 'Round 3 – Interview', content: '10–15 minutes. Participants will face a personal interview to assess technical knowledge, problem-solving ability, and communication skills.' }
    ]
  },
  {
    id: 'rang-e-tech',
    title: 'Rang-e-Tech',
    category: 'Tech',
    about: 'Rang-e-Tech is a Technical Rangoli Competition where participants creatively blend traditional rangoli art with modern technological themes. Designs must reflect a specified technical concept.',
    rules: [
      'Participants must bring all materials required for rangoli creation.',
      'Rangoli designs must be original and created on the spot during the competition.',
      'Any violation of rules may lead to disqualification.',
      'The judges’ decision will be final.'
    ]
  },
  {
    id: 'pictionary',
    title: 'Pictionary',
    category: 'Non-Tech',
    about: 'Pictionary is a creative and engaging game that tests participants’ imagination and visual thinking skills. One participant draws a given word or phrase while the other guesses it within a limited time.',
    teamSize: '2 participants',
    rounds: [
      { title: 'Round 1', content: 'Standard Pictionary task. One member will draw, and the other must guess the word within 2 minutes.' },
      { title: 'Round 2', content: 'Participants will be shown a broken, blurred, or partial image. They must correctly identify the picture (3 chances).' }
    ],
    rules: [
      'Team members cannot be changed after registration.',
      'Letters, numbers, symbols, gestures, or verbal hints are not allowed.',
      'The judges’ decision will be final.'
    ]
  },
  {
    id: 'say-it-right',
    title: 'Say It Right',
    category: 'Non-Tech',
    about: 'Say It Right is a fun and interactive game that tests participants’ communication, observation, and lip-reading skills.',
    teamSize: '2 participants',
    rules: [
      'One participant will wear headphones with music playing.',
      'The other participant will silently lip-sync the given word or sentence.',
      'The participant wearing the headphones must guess the word by reading lips.',
      'The team gets 1 minute to guess as many correct answers as possible.',
      'No sign language, hand gestures, or any kind of signals allowed.'
    ]
  },
  {
    id: 'reverse-charades',
    title: 'Reverse Charades',
    category: 'Non-Tech',
    about: 'Reverse Charades is a fun and interactive communication-based game. One player knows the action and verbally instructs another player to perform it.',
    rules: [
      'Minimum 2 players per round.',
      'Instructor must keep hands folded or behind the back.',
      'Only verbal, step-by-step instructions are allowed; no gestures.',
      'The team gets 2 minutes to guess.'
    ]
  },
  {
    id: 'tug-of-war',
    title: 'TUG OF WAR',
    category: 'Non-Tech',
    about: 'Both teams pull the rope, the team that manages to pull their mark on the rope closest to the centre line will be winner.',
    teamSize: '5 members (1 girl compulsory)',
    rules: [
      'The rope must be pulled underarm.',
      'Nobody’s elbow must go below the knee.',
      'Foul will be called for rule violations.'
    ]
  },
  {
    id: 'bgmi',
    title: 'BGMI',
    category: 'Non-Tech',
    about: 'Mobile battle royale competition. All players must register before the match starts.',
    teamSize: 'Squad (4 members)',
    rules: [
      'Map: Erangel, Mode: Classic.',
      'No hacking, scripts, or third-party apps.',
      'No abusive language or toxic behaviour.',
      'Organizer’s decision will be final.'
    ]
  },
  {
    id: 'free-fire',
    title: 'FREE FIRE',
    category: 'Non-Tech',
    about: 'Mobile battle royale competition played in custom rooms.',
    teamSize: 'Squad',
    rounds: [
      { title: 'Round 1 – Battle Royale', content: 'Map: Bermuda. Winning team from each room qualifies for finals.' },
      { title: 'Round 2 – Clash Squad', content: 'Best of 7 rounds. First to win 4 rounds wins.' }
    ],
    rules: [
      'No hacking or unfair means.',
      'Sonia and Dimitri cannot be used together.',
      'Clash Squad: All character skills disabled, only headshots allowed.'
    ]
  },
  {
    id: 'tech-echo',
    title: 'Tech Echo',
    category: 'Tech',
    about: 'A multi-round quiz assessing knowledge in computer science, programming, and general technology fundamentals.',
    teamSize: 'Max 3 participants',
    rounds: [
      { title: 'Round 1: Elimination', content: '20 min. MCQ round. Highest performing teams qualify.' },
      { title: 'Round 2: Rapid Fire', content: '2 min. Answer as many as possible.' },
      { title: 'Round 3: Clue Cascade', content: '15 min. Hint-based quiz (3-5 hints). Fewer hints = higher points.' },
      { title: 'Round 4: Buzzer', content: 'First to buzz answers.' }
    ],
    rules: [
      'No digital or electronic devices.',
      'Raise hands before answering.',
      'Tie-breaker: Sudden-death buzzer questions.'
    ]
  },
  {
    id: 'cook-without-fire',
    title: 'Cook Without Fire',
    category: 'Non-Tech',
    about: 'A creative culinary event where participants prepare delicious dishes without using any heat source or fire.',
    rules: [
      'Time limit: 30 minutes.',
      'Workstations must be kept clean.',
      'Electrical appliances and heating devices are strictly prohibited.',
      'Bring your own raw ingredients and basic tools.',
      'Judged on creativity, taste, and presentation.'
    ]
  },
  {
    id: 'bug-to-brain',
    title: 'BUG TO BRAIN',
    category: 'Tech',
    about: 'Individual technical coding game consisting of three progressive tasks.',
    rules: [
      'Individual participation.',
      'No collaboration or plagiarism.',
      'Time-based challenge.'
    ],
    rounds: [
      { title: 'Task 1: Debug the Code', content: '20 min. Language: C. Identify and fix bugs.' },
      { title: 'Task 2: Logical Key', content: '5 min. Solve logical/technical question to unlock Task 3.' },
      { title: 'Task 3: Final Coding', content: '40 min. Any language allowed. Working solution required.' }
    ]
  },
  {
    id: 'tech-canvas',
    title: 'Tech Canvas',
    category: 'Tech',
    about: 'Creative poster-making competition to visually showcase technical ideas and innovations.',
    rules: [
      'Individual participation.',
      'Hand-made or digital (Canva allowed).',
      'AI-generated content is strictly prohibited.',
      'Mandatory A3 size submission.',
      'Original work only.'
    ]
  },
  {
    id: 'beg-borrow-steel',
    title: 'Beg Borrow Steel',
    category: 'Non-Tech',
    about: 'An exhilarating strategic hunt that tests resourcefulness. Collect items through begging, borrowing, and strategic stealing.',
    teamSize: '4 participants',
    rules: [
      'Complete tasks within stipulated time.',
      'No vehicles allowed.',
      'Teams are responsible for returning all items.'
    ]
  },
  {
    id: 'it-ramp-walk',
    title: 'IT Ramp Walk',
    category: 'Non-Tech',
    about: 'Where technology meets confidence. Showcase IT-inspired outfits and presentations based on tech themes.',
    rules: [
      'Individual participation.',
      'Prepare an IT/tech-based theme (e.g., AI, Cyber Security).',
      'Briefly explain theme while walking.',
      'Judged on confidence, creativity, and theme relevance.'
    ]
  },
  {
    id: 'bro-code',
    title: 'Bro Code',
    category: 'Tech',
    about: 'Two-player coding challenge testing teamwork and coordination. Partners code in shifts without communication.',
    teamSize: '2 participants (Pair)',
    rules: [
      'Total time: 40 minutes.',
      'Partner 1: 15 mins. Partner 2: 25 mins.',
      'No communication allowed between partners.',
      'Any language (C, C++, Java, Python, etc.).',
      'No internet or AI tools.'
    ]
  },
  {
    id: 'reel-making',
    title: 'Reel Making',
    category: 'Non-Tech',
    about: 'Create an engaging reel based on the Technomantra theme to promote the spirit and energy of the event.',
    teamSize: 'Individual or up to 3 members',
    rules: [
      'Theme: Technomantra.',
      'Must use official thumbnail and sponsor image at the end.',
      'Collaborate with official Technomantra Instagram page.',
      'Winner based on reach and engagement.'
    ]
  },
  {
    id: 'uiverse',
    title: 'UIVERSE',
    category: 'Tech',
    about: 'Frontend challenge "Where Creativity Meets Code". A solo coding battle to prove your mettle as a developer.',
    rounds: [
      { title: 'Round 1: AI Co-Pilot', content: '30 min. Create a Landing Page Concept using AI as a companion. Redesign an existing brand.' },
      { title: 'Round 2: Pixel Perfect', content: '45 min. Recreate a provided webpage screenshot from scratch. No AI allowed.' }
    ],
    rules: [
      'Solo participation.',
      'No drag-and-drop or design tools (Figma/Canva).',
      'Pure HTML/CSS/JS only.'
    ]
  },
  {
    id: 'sql-battle',
    title: 'SQL Battle',
    category: 'Tech',
    about: 'Database management challenge solving complex queries to retrieve and manage data efficiently.',
    rules: [
      'Individual participation.',
      'Time limit: 45 minutes.',
      'Any SQL dialect (MySQL, PostgreSQL, etc.).',
      'No external help or internet access.'
    ]
  }
];
