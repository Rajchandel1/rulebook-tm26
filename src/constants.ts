export interface Game {
  id: string;
  title: string;
  category: 'Tech' | 'Non-Tech';
  about: string;
  rules?: string[];
  rounds?: { title: string; content: string }[];
  teamSize?: string;
  fee?: string;
}

export const GAMES: Game[] = [
  {
    id: 'shan-e-technomantra',
    title: 'Shan-e-Technomantra',
    category: 'Tech',
    about: 'Shan-e-Technomantra is a dynamic competition that combines technical expertise with strong communication skills. The event tests participants on their analytical thinking, coding ability, and overall technical knowledge. The final round includes an interview, where participants are evaluated on their technical understanding, problem-solving approach, coding concepts, and communication skills.',
    rules: [
      'No electronic devices are allowed during the rounds.',
      'Any form of cheating, plagiarism, or misconduct will lead to disqualification.',
      'The judges’ decision will be final.'
    ],
    rounds: [
      { title: 'Round 1 – Aptitude (15 minutes)', content: 'Participants will be tested on problem-solving and analytical skills through aptitude-based questions.' },
      { title: 'Round 2 – Technical (20 minutes)', content: 'Participants will engage in competitive programming challenges to demonstrate coding skills and algorithmic thinking.' },
      { title: 'Round 3 – Interview (10-15 minutes)', content: 'Participants will face a personal interview to assess technical knowledge, problem-solving ability, and communication skills. Questions may include technical, coding, and behavioral aspects.' }
    ],
    fee: '₹40'
  },
  {
    id: 'it-prenuership',
    title: 'IT-Prenuership',
    category: 'Tech',
    about: 'IT-Prenuership is an innovation-driven competition designed to encourage students to present creative and technology-oriented business ideas. The event promotes entrepreneurial thinking, problem-solving ability, and the effective application of emerging technologies within the IT domain. Participants are encouraged to showcase innovative concepts that integrate modern technologies such as Artificial Intelligence, Blockchain, Internet of Things (IoT), or other emerging digital solutions.',
    rules: [
      'Participation is open to both individual participants and teams.',
      'Each presentation must clearly highlight the innovative use of technology.',
      'Participants may use visual aids such as slides, demos, or prototypes.',
      'Each presentation will be followed by a brief Q&A session conducted by the judges.',
      'Any form of plagiarism or misconduct will lead to disqualification.',
      'The decision of the judges will be final and binding'
    ],
    rounds: [
      { title: 'Round 1 – Preliminary Round (College Level)', content: 'Participants will present their IT-based business idea. Each presentation will have a duration of 10–15 minutes. Judges will evaluate ideas based on innovation, feasibility, technical depth, and presentation quality. This round will serve as the elimination round. Selected participants or teams will advance to Round 2 in the Senate Hall.' },
      { title: 'Round 2 – Final Round (Senate Hall)', content: 'Finalists will present their refined or expanded business ideas. Each presentation will have a duration of 10–15 minutes. A detailed Q&A session will follow each presentation. Final evaluation will determine the winner based on overall performance, innovation, and impact potential' }
    ],
    fee: '₹40 per person'
  },
  {
    id: 'bug-to-brain',
    title: 'Bug to Brain',
    category: 'Tech',
    about: 'Bug to Brain is an individual technical coding challenge that tests participants’ debugging, logical thinking, and programming skills. The game consists of multiple tasks that must be completed in sequence, where each task unlocks the next. Participants compete under time limits to solve problems accurately and efficiently.',
    rules: [
      'No collaboration',
      'No plagiarism',
      'Judges\' decision final',
      'Winner based on correctness & performance'
    ],
    rounds: [
      { title: 'Task 1: Debug the Code', content: 'Language: C. Identify and fix bugs. Run code successfully. Time Limit: 20 minutes' },
      { title: 'Task 2: Logical Key', content: 'Solve logical / technical question. Correct answer unlocks Task 3. Time Limit: 5 minutes' },
      { title: 'Task 3: Final Coding Challenge', content: 'Problem statement given. Any programming language allowed. Working solution required. Time Limit: 40 minutes' }
    ],
    fee: '₹40'
  },
  {
    id: 'bro-code',
    title: 'Bro Code',
    category: 'Tech',
    about: 'Two-players coding challenge, testing teamwork and coordination. Partners code in shifts without communication.',
    rules: [
      'Partners roles will be swapped after halftime.',
      'Judges’ decision will be final.',
      'One participant will write the initial code, and the other will continue from where the first one left it.',
      'No communication is allowed between partners.',
      'No internet or AI tools.',
      'Programming language - C'
    ],
    rounds: [
      { title: 'Round 1 - 15 mins (Elimination round)', content: 'Both participants together solves an aptitude puzzle.' },
      { title: 'Round 2 - 30 mins (Final round)', content: 'Partners have to solve a coding problem. Partner 1 - 15 mins, Partner 2 - 15 mins.' }
    ],
    fee: '₹40 only per person'
  },
  {
    id: 'ui-verse',
    title: 'UI-Verse',
    category: 'Tech',
    about: 'UIVERSE: The Frontend Challenge is a solo coding competition designed to test participants’ frontend development skills and creativity. In this event, participants create and replicate web designs using HTML, CSS, and JavaScript. The challenge focuses on how well developers can design modern user interfaces and write clean frontend code within a limited time.',
    rules: [
      'The event is solo, meaning each participant competes individually.',
      'Participants can use any code editor (like VS Code) and web browsers.',
      'Design tools such as Figma, Canva, or Photoshop are not allowed. All designs must be created using code only.',
      'In Round 1, AI tools can be used to assist in coding, but participants must understand and refine the generated code themselves.',
      'In Round 2, AI tools are strictly prohibited.',
      'Internet access is allowed for first round only',
    ],
    rounds: [
      { title: 'Round 1 – AI Companion (Creative Coding)', content: 'Participants must choose an existing brand and design a modern landing page concept for it using HTML and CSS. They can use AI tools as assistants to generate or improve code, but the final design should be customized and refined by the participant. Time Limit: 30 minutes.' },
      { title: 'Round 2 – Pixel Perfect Clone (Skill Test)', content: 'Participants are given a screenshot of a webpage and must recreate it as accurately as possible using HTML and CSS. This round tests attention to detail, coding accuracy, and frontend fundamentals. AI tools are not allowed in this round. Time Limit: 45 minutes.' }
    ],
    fee: '₹40 only'
  },
  {
    id: 'rang-e-tech',
    title: 'Rang-e-Tech',
    category: 'Non-Tech',
    about: 'Rang-e-Tech is a Technical Rangoli Competition where participants creatively blend traditional rangoli art with modern technological themes. Designs must reflect a specified technical concept.',
    rules: [
      'Participants must bring all materials required for rangoli creation.',
      'Rangoli designs must be original and created on the spot during the competition.',
      'Any violation of rules may lead to disqualification.',
      'The judges’ decision will be final.',
      'The rangoli must be created within the designated area (2 X 2 Feet) and time limit (2 hours).',
    ],
    fee: '₹40 only per person'
  },
  {
    id: 'tech-canvas',
    title: 'Tech Canvas',
    category: 'Tech',
    about: 'Tech Canvas is a creative poster-making competition conducted as part of our technical event. It provides a platform for students to visually showcase their technical ideas, innovations, and concepts in an engaging and impactful way. Participants can express their understanding of a predefined technical theme through posters that combine creativity with technical relevance. Posters may be hand-made or digitally designed using tools like Canva, allowing participants the freedom to present their ideas in their preferred format.',
    rules: [
      'Participation will be individual Only.',
      'All entries must be original and created solely by the participant.',
      'Posters may be hand-made or digitally designed using tools like Canva.',
      'Participants Can Use 60% AI Assistance for Digital Posters, but the final design must be customized and refined by the participant.',
      'Size requirement: Atleast A2 size (16.5 x 23.4 inches).',
      'All posters must be submitted before the specified deadline.',
      'The poster must maintain a professional appearance and be technically relevant to the given theme.',
      'A panel of judges will evaluate the posters based on the announced judging criteria.',
      'Participants are responsible for bringing all required materials for poster creation.',
      'Use of copied content, AI tools, or any unfair means will result in immediate disqualification.',
      'Any violation of rules will lead to disqualification of the individual by the management team.',
      'It is mandatory to submit the poster in A2 size. Any participant who does not follow the A2 size requirement will be disqualified.'
    ],
    fee: '₹40 only'
  },
  {
    id: 'tech-hunt',
    title: 'Tech Hunt',
    category: 'Tech',
    about: 'Tech Hunt Mania is an immersive, campus-wide treasure hunt designed to challenge participants through a series of interconnected, technology-inspired riddles. Teams must decode each clue to unlock the next location, navigating across the campus in pursuit of the final destination. The game tests logical reasoning, teamwork, problem-solving ability, observation skills, and time management. Every correct solution advances the team further along the digital trail. The competition unfolds as one continuous round, where strategy and speed determine success. Only the most efficient and coordinated team will complete the hunt and claim victory.',
    rules: [
      'Each team must consist of 3–4 participants (flexible as per registration guidelines).',
      'All teams will receive the starting clue simultaneously.',
      'Teams must solve the current riddle before proceeding to the next location.',
      'Clues must not be removed, damaged, or concealed.',
      'Sharing clues or answers with other teams is strictly prohibited.',
      'No external assistance or unfair means is allowed.',
      'Any form of misconduct will result in immediate disqualification.',
      'The decision of the judges and organizers will be final and binding.'
    ],
    rounds: [
      { title: 'Game Format – Continuous Hunt', content: 'The event will run for a fixed duration, as announced by the organizers. The hunt begins with an initial riddle at the starting point. Each solved riddle leads to a designated campus location. At each location, teams will receive the next clue. Clues must be solved sequentially; skipping stages is not permitted. The game continues in this manner until the final clue is discovered.' }
    ],
    fee: '₹40 only per person'
  },
  {
    id: 'tech-echo',
    title: 'Tech Echo',
    category: 'Tech',
    about: 'In this event, three participants will team up to answer computer science, programming, software, hardware, algorithms, and various technology fundamental based questions within a specific time frame. The objective of the game is to assess participants’ knowledge and proficiency in the field of technical and general knowledge.',
    rules: [
      'Each team consists of a maximum of 3 participants.',
      'Team members cannot be changed after registration.',
      'Participants are not allowed to use any kind of digital or electronic devices.',
      'Participants are required to raise their hands before answering any question in order to gain the points.',
      'The judge’s decision will be final, and no disputes will be entertained.'
    ],
    rounds: [
      { title: 'ROUND 1: ELIMINATION [20 MIN]', content: 'This will be The Elimination round with MCQs, where each team will get equal opportunity to answer. Each team can choose any one group member to sit for the MCQ round on behalf of the team. Teams with highest performance will get qualified for the next round.' },
      { title: 'ROUND 2: RAPID FIRE [2 MIN]', content: 'This will be The Rapid-fire round, where teams have to answer questions within a specified time frame. Points awarded based on correct answers.' },
      { title: 'ROUND 3: CLUE CASCADE [15 Minutes]', content: 'This round is a Hint-Based Quiz Round. Each team will be given a question along with progressive hints (3–5 hints per question). The hints will be revealed one by one, moving from difficult to easier clues. Teams can guess the answer after any hint is given. Points will be awarded based on how early the correct answer is guessed (fewer hints used = higher points). The team with the highest total points at the end of the round will lead the scoreboard' },
      { title: 'ROUND 4: BUZZER', content: 'This will be The Buzzer round, where first to buzz answers the question. Points awarded based on performance. TIE – BREAKER (IF NECESSARY) In case 2 or more teams tie, then a Tie-Breaker round will be initiated with sudden-death buzzer questions.' }
    ],
    fee: '₹40 only per person'
  },
  {
    id: 'sql-slayer',
    title: 'SQL Slayer',
    category: 'Tech',
    about: 'SQL Slayer is a thrilling, story-driven SQL battle where participants enter a fictional database warzone. Players solve narrative-based SQL challenges to earn points and prepare for the ultimate showdown. The competition unfolds in intense round — beginning in the College Arena. Participants will face a series of story-based database scenarios, where they must write SQL queries to solve problems and earn points. The participant with the highest score at the end of the round will be declared the winner. The game tests participants’ SQL skills, problem-solving ability, and strategic thinking under pressure.',
    rules: [
      'Participants must write valid and syntactically correct SQL queries.',
      'No electronic devices or external assistance is allowed.',
      'Any form of cheating or misconduct will lead to immediate disqualification.',
      'No retries once an answer is submitted.',
      'The judges’ decision will be final.'
    ],
    rounds: [
      { title: 'Round 1 – The Awakening (College Arena)', content: 'Duration: 45 Minutes. Participants will be given a story-based database scenario.' }
    ],
    fee: '₹40 only'
  },
  {
    id: 'pictionary',
    title: 'Pictionary',
    category: 'Non-Tech',
    about: 'Pictionary is a creative and engaging game that tests participants’ imagination and visual thinking skills. One participant draws a given word or phrase while the other guesses it within a limited time.',
    rules: [
      'Each team consists of 2 participants.',
      'Team members cannot be changed after registration.',
      'Letters, numbers, symbols, gestures, or verbal hints are not allowed.',
      'Any form of cheating or misconduct will lead to disqualification.',
      'The judges’ decision will be final.'
    ],
    rounds: [
      { title: 'Round 1 ( KS Auditorium )', content: 'Participants will perform the standard Pictionary task. One member will draw, and the other must guess the word within 1 minutes.' },
      { title: 'Round 2 ( Senate Hall )', content: 'Participants will perform the standard Pictionary task. One member will draw, and the other must guess the word within 1 minutes.' }
    ],
    fee: '₹50 only'
  },
  {
    id: 'reverse-charades',
    title: 'Reverse Charades',
    category: 'Non-Tech',
    about: 'Reverse Charades is a fun and interactive communication-based game. One player knows the action and verbally instructs another player to perform it. After performing, the player must guess the action. The game focuses on clarity, communication, and quick thinking.',
    rules: [
      'Minimum 2 players per round; can be played one-on-one.',
      'One player acts as the Instructor and is shown an action card secretly.',
      'The Instructor must keep hands folded or behind the back.',
      'Only verbal, step-by-step instructions are allowed; no gestures or acting.',
      'The Performer follows instructions and then guesses the action.',
      'Correct guess within the time limit earns a point.',
      'Any misconduct will lead to disqualification.',
      'The judges’ decision will be final.',
      'The team gets 1 minute to guess.'
    ],
    fee: '₹50 only per person'
  },
  {
    id: 'cook-without-fire',
    title: 'Cook Without Fire',
    category: 'Non-Tech',
    about: 'Welcome to the Cook Without Fire Challenge, a creative and culinary event where participants will showcase their cooking skills without the use of traditional heat sources. Participants aim to prepare delicious dishes without using any heat source or fire.',
    rules: [
      'Each participant will be provided with a designated preparation area.',
      'Participants must keep their workstations clean and tidy throughout the competition.',
      'Competition must complete the dish within the allocated time.',
      'Participants are allowed to bring basic tools and utensils (e.g., knives, cutting boards, mixing bowls).',
      'Participants must bring their own raw ingredients for the competition.',
      'Electrical appliances and heating devices are strictly prohibited.',
      'Dishes will be judged based on creativity, taste, and presentation.',
      'Participants must adhere to basic food safety and hygiene practices.',
      'Decisions of the judges are final.'
    ],
    teamSize: '2 participants',
    fee: '₹50 per person'
  },
  {
    id: 'say-it-right',
    title: 'Say It Right',
    category: 'Non-Tech',
    about: 'Say It Right is a fun and interactive game that tests participants’ communication, observation, and lip-reading skills. One participant lip-syncs a word or sentence while the other, wearing headphones with music, tries to guess it by reading their partner’s lips within a limited time.',
    rules: [
      'Each team consists of 2 participants.',
      'One participant wears headphones with music playing.',
      'The other participant will silently lip-sync the given word or sentence.',
      'The participant with headphones must guess by reading lips only.',
      'Each team gets 1 minute to guess as many correct answers as possible.',
      'No sign language, hand gestures, or signals are allowed.',
      'Any rule violation leads to disqualification.',
      'Judges’ decision will be final.'
    ],
    rounds: [
      { title: 'Round 1', content: 'Teams attempt to guess as many words or sentences as possible within 1 minute using lip-reading. The top performing teams qualify for Round 2.' },
      { title: 'Round 2', content: 'The same format continues but with more challenging words or sentences. This round will be conducted in the Senate Hall, and the best performing team will be declared the winner.' }
    ],
    fee: 'Rs 50 per person'
  },
  {
    id: 'beg-borrow-steal',
    title: 'Beg Borrow Steal',
    category: 'Non-Tech',
    about: 'Beg-Borrow-Steal Challenge is an exciting and strategic team-based hunt that tests participants’ resourcefulness, teamwork, and quick thinking. Teams must collect a list of items by begging, borrowing, or strategically stealing within a limited time.',
    rules: [
      'Teams must complete the assigned tasks within the given time limit for each round.',
      'Teams arriving late for a round will be eliminated.',
      'A list of items to be collected will be provided for each round.',
      'Vehicles are not allowed during the challenge.',
      'Teams are responsible for returning all items collected through begging, borrowing, or stealing.',
      'Judges’ decision will be final.'
    ],
    teamSize: '4 participants',
    rounds: [
      { title: 'Round 1: 20 minutes', content: 'The game will be conducted in 3 rounds, where teams must collect the given items within the allotted time. Teams that successfully complete the tasks move forward to the next round.' },
      { title: 'Round 2: 15 minutes', content: 'Teams that successfully complete the tasks move forward to the next round.' },
      { title: 'Round 3: 15 minutes', content: 'Final round.' }
    ],
    fee: '₹250'
  },
  {
    id: 'tug-of-war',
    title: 'Tug of War',
    category: 'Non-Tech',
    about: 'Both teams pull the rope, and the team that manages to pull their mark on the rope closest to the center line will be declared the winner.',
    rules: [
      'There would be 5 members required per team, and one girl is compulsory among them.',
      'The rope must be pulled underarm, and nobody’s elbow must go below the knee, otherwise a foul will be called.',
      'The team that is pulled by the opposition towards the center, whose mark goes over the center line, is declared the loser.'
    ],
    teamSize: '5 participants',
    fee: '₹250'
  },
  {
    id: 'bgmi',
    title: 'BGMI',
    category: 'Non-Tech',
    about: 'This is a BGMI (Mobile) competition. All players must register before the match starts. Players must join the match on time, and late entries are not allowed. The organizer’s decision will be final and binding.',
    rules: [
      'No team changes after registration.',
      'Sharing accounts is strictly prohibited.',
      'No hacking, cheating, scripts, or third-party apps are allowed.',
      'Use of glitches or bugs is not allowed.',
      'Any player caught cheating will be immediately disqualified.',
      'Teaming up with other teams is not allowed.',
      'Players must stay in the match until eliminated.',
      'Intentional disconnection may lead to disqualification.',
      'If a player faces genuine network issues, no rematch will be given (unless organizers decide otherwise).',
      'Prizes will be distributed after verification of results. Any rule violation may lead to forfeiture of prize money.',
      'No abusive language or toxic behaviour. Respect all players and organizers and maintain sportsmanship at all times.'
    ],
    teamSize: 'Squad',
    fee: '₹250 (Squad)'
  },
  {
    id: 'free-fire',
    title: 'Free Fire',
    category: 'Non-Tech',
    about: 'All matches will be played in custom rooms. Participants must join the lobby on time. Room ID and password will be shared before each match. Use of hacks, cheats, or unfair means will result in immediate disqualification. The organizers’ decision will be final in case of any dispute. The tournament will be conducted in two rounds, both played in custom rooms.',
    rules: [
      'All character skills are allowed in Round 1.',
      'Sonia and Dimitri cannot be used together in the same match.',
      'Revive Points: Enabled.',
      'Revival Cards: Disabled.',
      'Round 2: All character skills are disabled.',
      'Only headshots are allowed.',
      'The team winning 4 rounds first will be declared the Game Winner.'
    ],
    rounds: [
      { title: 'Round 1 – Battle Royale (Qualifying Round)', content: 'Map: Bermuda. Mode: Battle Royale (Squad). Each custom room will consist of 12 teams. The winning team from each room will qualify for the final round' },
      { title: 'Round 2 – Clash Squad (Final Round)', content: 'Mode: Clash Squad. Teams: 2. Best of 7 rounds. The team that wins 4 rounds first will be declared the winner' }
    ],
    fee: '₹250'
  },
  {
    id: 'reel-making',
    title: 'Reel Making',
    category: 'Non-Tech',
    about: 'The Reel Making competition invites students to showcase their creativity by creating an engaging reel based on the Technomantra theme. Participants can participate individually or in teams and use their creativity to promote the spirit, energy, and vibe of Technomantra through short-form video content.',
    rules: [
      'Participants may take part individually or in teams (up to 3 members).',
      'The reel must be created strictly on the theme “Technomantra.”',
      'Participants must use the official thumbnail and image provided by the organizers.',
      'The provided image containing sponsor names must be displayed at the end of the reel.',
      'Teams must upload their reels using the Google Form link shared by the organizers.',
      'All submitted reels will first be filtered and reviewed by the judges.',
      'Only shortlisted teams will be allowed to post their reels on Instagram.',
      'Participants must collaborate with the official Technomantra Instagram page while posting the reel.',
      'The reel with the highest reach and engagement will be declared the winner.',
      'Any content that is offensive, plagiarized, or irrelevant to the theme will be disqualified.',
      'The decision of the organizing committee will be final.'
    ],
    teamSize: 'Individual or up to 3 members'
  },
  {
    id: 'it-ramp-walk',
    title: 'IT Ramp Walk',
    category: 'Tech',
    about: 'Welcome to the IT Ramp Walk, where technology meets confidence and creativity. Participants will showcase IT-inspired outfits and presentations based on tech themes, trends, or innovations. The ramp walk tests your confidence, communication skills, creativity, and tech awareness—all in a stylish way.',
    rules: [
      'Each participant must prepare an IT/tech-based theme (e.g., AI, Cyber Security, Future Tech, Startups, Coding Culture, etc.).',
      'Time limit will be given for each participant on the ramp.',
      'Vulgar language, offensive content, or inappropriate outfits are strictly prohibited.',
      'Judging will be based on confidence, creativity, theme relevance, presentation, and overall impact.',
      'Late entries may lead to disqualification.'
    ],
    teamSize: '1 participant (Individual)'
  }
];
