// TOEFL 2026 Writing Section - Production-Ready Content Bank
// Exact format matching official TOEFL iBT 2026 specifications
// 3 Task Types (12-23 minutes total):
//   1. Build a Sentence (5 min) - Rearrange scrambled words from casual conversations
//   2. Write an Email (8 min, 80-120 words) - Scenario-based functional writing  
//   3. Write for an Academic Discussion (10 min, 100+ words) - Critical thinking forum post

export type WritingTaskType = "build_sentence" | "email" | "academic_discussion";

// ==================== TASK 1: BUILD A SENTENCE ====================
// Rearrange scrambled words into grammatically correct sentences
// Time limit: 5 minutes total for 5-7 sentences

export interface BuildSentenceTask {
  id: string;
  type: "build_sentence";
  scrambledWords: string[];
  correctAnswer: string;
  context: string; // Context from everyday conversation
}

export const buildSentenceTasks: BuildSentenceTask[] = [
  {
    id: "BS_001",
    type: "build_sentence",
    scrambledWords: ["the", "is", "library", "open", "until", "midnight"],
    correctAnswer: "The library is open until midnight.",
    context: "Campus information"
  },
  {
    id: "BS_002",
    type: "build_sentence",
    scrambledWords: ["studying", "for", "I've", "been", "finals", "all", "week"],
    correctAnswer: "I've been studying for finals all week.",
    context: "Student conversation"
  },
  {
    id: "BS_003",
    type: "build_sentence",
    scrambledWords: ["professor", "the", "extended", "deadline", "the"],
    correctAnswer: "The professor extended the deadline.",
    context: "Classroom announcement"
  },
  {
    id: "BS_004",
    type: "build_sentence",
    scrambledWords: ["do", "you", "know", "when", "due", "is", "the", "assignment"],
    correctAnswer: "Do you know when the assignment is due?",
    context: "Student question"
  },
  {
    id: "BS_005",
    type: "build_sentence",
    scrambledWords: ["cafeteria", "serving", "the", "lunch", "is", "today"],
    correctAnswer: "The cafeteria is serving lunch today.",
    context: "Dining hall notice"
  },
  {
    id: "BS_006",
    type: "build_sentence",
    scrambledWords: ["need", "I", "to", "register", "classes", "for", "next", "semester"],
    correctAnswer: "I need to register for classes next semester.",
    context: "Registration reminder"
  },
  {
    id: "BS_007",
    type: "build_sentence",
    scrambledWords: ["roommate", "my", "always", "late", "arrives"],
    correctAnswer: "My roommate always arrives late.",
    context: "Dorm life"
  },
  {
    id: "BS_008",
    type: "build_sentence",
    scrambledWords: ["meeting", "canceled", "has", "been", "the"],
    correctAnswer: "The meeting has been canceled.",
    context: "Schedule update"
  },
  {
    id: "BS_009",
    type: "build_sentence",
    scrambledWords: ["can", "borrow", "I", "your", "notes", "from", "yesterday"],
    correctAnswer: "Can I borrow your notes from yesterday?",
    context: "Classmate request"
  },
  {
    id: "BS_010",
    type: "build_sentence",
    scrambledWords: ["gym", "closes", "the", "at", "ten", "PM"],
    correctAnswer: "The gym closes at ten PM.",
    context: "Facility hours"
  },
  {
    id: "BS_011",
    type: "build_sentence",
    scrambledWords: ["finished", "have", "you", "reading", "the", "assignment"],
    correctAnswer: "Have you finished reading the assignment?",
    context: "Study group"
  },
  {
    id: "BS_012",
    type: "build_sentence",
    scrambledWords: ["should", "we", "form", "study", "a", "group"],
    correctAnswer: "We should form a study group.",
    context: "Student suggestion"
  },
  {
    id: "BS_013",
    type: "build_sentence",
    scrambledWords: ["printing", "lab", "is", "the", "computer", "open", "tonight"],
    correctAnswer: "Is the computer lab open tonight?",
    context: "Campus facility inquiry"
  },
  {
    id: "BS_014",
    type: "build_sentence",
    scrambledWords: ["professor", "will", "hold", "the", "office", "hours", "tomorrow"],
    correctAnswer: "The professor will hold office hours tomorrow.",
    context: "Faculty schedule"
  },
  {
    id: "BS_015",
    type: "build_sentence",
    scrambledWords: ["prefer", "I", "studying", "in", "library", "the"],
    correctAnswer: "I prefer studying in the library.",
    context: "Personal preference"
  },
  {
    id: "BS_016",
    type: "build_sentence",
    scrambledWords: ["bus", "leaves", "the", "campus", "every", "hour"],
    correctAnswer: "The bus leaves campus every hour.",
    context: "Transportation schedule"
  },
  {
    id: "BS_017",
    type: "build_sentence",
    scrambledWords: ["has", "bookstore", "the", "sold", "out", "textbook", "of", "that"],
    correctAnswer: "The bookstore has sold out of that textbook.",
    context: "Course materials"
  },
  {
    id: "BS_018",
    type: "build_sentence",
    scrambledWords: ["need", "I", "talk", "to", "advisor", "my", "about", "changing", "majors"],
    correctAnswer: "I need to talk to my advisor about changing majors.",
    context: "Academic advising"
  },
  {
    id: "BS_019",
    type: "build_sentence",
    scrambledWords: ["weather", "is", "the", "supposed", "to", "improve", "this", "weekend"],
    correctAnswer: "The weather is supposed to improve this weekend.",
    context: "Weekend plans"
  },
  {
    id: "BS_020",
    type: "build_sentence",
    scrambledWords: ["laundry", "room", "the", "always", "is", "busy", "on", "Sundays"],
    correctAnswer: "The laundry room is always busy on Sundays.",
    context: "Dorm facilities"
  },
  {
    id: "BS_021",
    type: "build_sentence",
    scrambledWords: ["wants", "join", "who", "our", "to", "club"],
    correctAnswer: "Who wants to join our club?",
    context: "Student organization"
  },
  {
    id: "BS_022",
    type: "build_sentence",
    scrambledWords: ["have", "already", "I", "turned", "in", "my", "paper"],
    correctAnswer: "I have already turned in my paper.",
    context: "Assignment submission"
  },
  {
    id: "BS_023",
    type: "build_sentence",
    scrambledWords: ["shouldn't", "we", "noise", "make", "after", "eleven"],
    correctAnswer: "We shouldn't make noise after eleven.",
    context: "Dorm rules"
  },
  {
    id: "BS_024",
    type: "build_sentence",
    scrambledWords: ["parking", "lot", "is", "the", "full", "today"],
    correctAnswer: "The parking lot is full today.",
    context: "Campus parking"
  },
  {
    id: "BS_025",
    type: "build_sentence",
    scrambledWords: ["going", "I'm", "to", "drop", "this", "class"],
    correctAnswer: "I'm going to drop this class.",
    context: "Course decision"
  },
  {
    id: "BS_026",
    type: "build_sentence",
    scrambledWords: ["event", "starts", "the", "at", "seven", "tonight"],
    correctAnswer: "The event starts at seven tonight.",
    context: "Campus activity"
  },
  {
    id: "BS_027",
    type: "build_sentence",
    scrambledWords: ["found", "I", "wallet", "a", "in", "hallway", "the"],
    correctAnswer: "I found a wallet in the hallway.",
    context: "Lost and found"
  },
  {
    id: "BS_028",
    type: "build_sentence",
    scrambledWords: ["dining", "hall", "will", "the", "be", "closed", "next", "week"],
    correctAnswer: "The dining hall will be closed next week.",
    context: "Service announcement"
  },
  {
    id: "BS_029",
    type: "build_sentence",
    scrambledWords: ["forgot", "I", "bring", "to", "ID", "my", "card"],
    correctAnswer: "I forgot to bring my ID card.",
    context: "Common problem"
  },
  {
    id: "BS_030",
    type: "build_sentence",
    scrambledWords: ["has", "anyone", "seen", "backpack", "my"],
    correctAnswer: "Has anyone seen my backpack?",
    context: "Lost item"
  },
  {
    id: "BS_031",
    type: "build_sentence",
    scrambledWords: ["exam", "the", "was", "harder", "than", "I", "expected"],
    correctAnswer: "The exam was harder than I expected.",
    context: "Test reaction"
  },
  {
    id: "BS_032",
    type: "build_sentence",
    scrambledWords: ["would", "you", "like", "to", "join", "us", "for", "dinner"],
    correctAnswer: "Would you like to join us for dinner?",
    context: "Social invitation"
  },
  {
    id: "BS_033",
    type: "build_sentence",
    scrambledWords: ["internet", "the", "is", "down", "in", "building", "my"],
    correctAnswer: "The internet is down in my building.",
    context: "Technical issue"
  },
  {
    id: "BS_034",
    type: "build_sentence",
    scrambledWords: ["must", "we", "submit", "the", "form", "by", "Friday"],
    correctAnswer: "We must submit the form by Friday.",
    context: "Deadline reminder"
  },
  {
    id: "BS_035",
    type: "build_sentence",
    scrambledWords: ["spent", "I", "all", "day", "in", "library", "the"],
    correctAnswer: "I spent all day in the library.",
    context: "Study habits"
  },
  {
    id: "BS_036",
    type: "build_sentence",
    scrambledWords: ["presentation", "our", "went", "really", "well"],
    correctAnswer: "Our presentation went really well.",
    context: "Group project success"
  },
  {
    id: "BS_037",
    type: "build_sentence",
    scrambledWords: ["health", "center", "the", "provides", "free", "services"],
    correctAnswer: "The health center provides free services.",
    context: "Campus resources"
  },
  {
    id: "BS_038",
    type: "build_sentence",
    scrambledWords: ["might", "I", "take", "extra", "an", "course", "summer", "this"],
    correctAnswer: "I might take an extra course this summer.",
    context: "Future plans"
  },
  {
    id: "BS_039",
    type: "build_sentence",
    scrambledWords: ["everyone", "has", "already", "left", "campus", "for", "break"],
    correctAnswer: "Everyone has already left campus for break.",
    context: "Holiday period"
  },
  {
    id: "BS_040",
    type: "build_sentence",
    scrambledWords: ["works", "she", "part-time", "at", "bookstore", "the"],
    correctAnswer: "She works part-time at the bookstore.",
    context: "Student job"
  },
  {
    id: "BS_041",
    type: "build_sentence",
    scrambledWords: ["trying", "I'm", "to", "find", "quiet", "a", "place", "study", "to"],
    correctAnswer: "I'm trying to find a quiet place to study.",
    context: "Study environment"
  },
  {
    id: "BS_042",
    type: "build_sentence",
    scrambledWords: ["class", "this", "requires", "lot", "a", "of", "reading"],
    correctAnswer: "This class requires a lot of reading.",
    context: "Course workload"
  },
  {
    id: "BS_043",
    type: "build_sentence",
    scrambledWords: ["tutor", "need", "I", "a", "for", "math", "class", "my"],
    correctAnswer: "I need a tutor for my math class.",
    context: "Academic support"
  },
  {
    id: "BS_044",
    type: "build_sentence",
    scrambledWords: ["friend", "my", "transferred", "to", "another", "university"],
    correctAnswer: "My friend transferred to another university.",
    context: "Student life"
  },
  {
    id: "BS_045",
    type: "build_sentence",
    scrambledWords: ["recycling", "bins", "are", "located", "next", "to", "elevator", "the"],
    correctAnswer: "Recycling bins are located next to the elevator.",
    context: "Sustainability"
  },
  {
    id: "BS_046",
    type: "build_sentence",
    scrambledWords: ["application", "scholarship", "the", "deadline", "is", "approaching"],
    correctAnswer: "The scholarship application deadline is approaching.",
    context: "Financial aid"
  },
  {
    id: "BS_047",
    type: "build_sentence",
    scrambledWords: ["career", "fair", "will", "the", "be", "held", "next", "month"],
    correctAnswer: "The career fair will be held next month.",
    context: "Professional development"
  },
  {
    id: "BS_048",
    type: "build_sentence",
    scrambledWords: ["hasn't", "responded", "professor", "the", "to", "email", "my", "yet"],
    correctAnswer: "The professor hasn't responded to my email yet.",
    context: "Communication"
  },
  {
    id: "BS_049",
    type: "build_sentence",
    scrambledWords: ["practice", "team", "the", "every", "day", "after", "class"],
    correctAnswer: "The team practice every day after class.",
    context: "Sports/clubs"
  },
  {
    id: "BS_050",
    type: "build_sentence",
    scrambledWords: ["looking", "I'm", "for", "someone", "to", "share", "apartment", "an"],
    correctAnswer: "I'm looking for someone to share an apartment.",
    context: "Housing search"
  },
];

// ==================== TASK 2: WRITE AN EMAIL ====================
/**
 * Write an Email — 1 item, 5 raw points, 7:00 on its own clock.
 *
 * The ETS prompt has three parts and all three are load-bearing:
 *   1. a situation of roughly 70-110 words that establishes the context,
 *   2. a NAMED recipient whose relationship to the test taker sets the register
 *      (a professor and a roommate are not written to the same way), and
 *   3. EXACTLY THREE bullet points, every one of which must be addressed for a
 *      response to score in the upper bands.
 *
 * The previous bank had none of that: a one-line label such as "Address noise
 * issue with roommate", a 30-word situation and no bullets at all. Practising
 * against it taught nothing about the thing the task actually measures, which is
 * covering three required points in a register that fits the reader, inside seven
 * minutes. ETS publishes no word count for this task, so minWords/maxWords are a
 * SOFT target shown as guidance and never enforced as a gate.
 *
 * Spec: WRITE_AN_EMAIL in src/data/toefl-2026-blueprint.ts
 */

export interface EmailTask {
  id: string;
  type: "email";
  /** Short internal label for menus and history rows. Never shown as the prompt. */
  scenario: string;
  /** Named recipient. The name and role are what set the register. */
  recipient: string;
  /** The relationship, spelled out, so the expected register is unambiguous. */
  recipientRole: string;
  /** Subject line shown in the email chrome. */
  subject: string;
  /** The situation the test taker reads. 70-110 words. */
  situation: string;
  /** Exactly three points. All three must be addressed to score well. */
  bullets: [string, string, string];
  /** Directions line, taken from the blueprint. */
  instructions: string;
  /** Seconds. 7:00, per the blueprint. */
  timeLimit: number;
  /** Soft guidance only - ETS publishes no word count for this task. */
  minWords: number;
  maxWords: number;
}

const EMAIL_DIRECTIONS =
  "Read the situation below and write an email in response. " +
  "Be sure to address all three of the points listed.";

/**
 * The full prompt as the test taker sees it, flattened to text.
 *
 * The AI evaluator needs the bullets, not just the situation: "addressed all
 * three points" is the single largest driver of the 0-5 score on this task, and
 * a grader that never sees the bullets cannot check it. Previously only a short
 * scenario string was sent.
 */
export function emailPromptText(task: EmailTask): string {
  return [
    task.situation,
    "",
    `Write an email to ${task.recipient} (${task.recipientRole}).`,
    "In your email, be sure to:",
    ...task.bullets.map((b) => `- ${b}`),
  ].join("\n");
}

export const emailTasks: EmailTask[] = [
  {
    id: "EMAIL_001",
    type: "email",
    scenario: "Request a deadline extension from a professor",
    recipient: "Professor Martinez",
    recipientRole: "Your history professor — formal register",
    subject: "Research Paper Extension Request",
    situation:
      "You are taking History 240 with Professor Martinez. The final research paper is due tomorrow at nine in the morning, and it is worth thirty per cent of the course grade. You have had influenza for the past six days and spent two of them at the campus health centre, so roughly half the paper is still unwritten. Professor Martinez has said in class that extensions are possible but must be requested before the deadline, not after it. Write an email to Professor Martinez.",
    bullets: [
      "explain why you cannot meet the deadline",
      "ask for a specific new deadline",
      "say what you will do to make sure the work is finished by then",
    ],
    instructions: EMAIL_DIRECTIONS,
    timeLimit: 420,
    minWords: 80,
    maxWords: 120,
  },
  {
    id: "EMAIL_002",
    type: "email",
    scenario: "Join a campus club after missing the first meeting",
    recipient: "Nadia Osei, Photography Club president",
    recipientRole: "A fellow student you have not met — polite but not formal",
    subject: "Joining the Photography Club",
    situation:
      "The Photography Club held its first meeting of the term last Wednesday evening in the student centre. You were away at a family wedding and could not attend. A friend who went told you that the club assigned everyone to a project group and handed out a printed schedule of weekend shoots. You still want to join, and the club's page says new members are accepted for two more weeks. Write an email to Nadia Osei, the club president.",
    bullets: [
      "explain why you missed the first meeting",
      "ask what you need to do to join now",
      "ask about the materials that were handed out",
    ],
    instructions: EMAIL_DIRECTIONS,
    timeLimit: 420,
    minWords: 80,
    maxWords: 120,
  },
  {
    id: "EMAIL_003",
    type: "email",
    scenario: "Report a broken heating system in a residence hall",
    recipient: "Campus Housing Maintenance",
    recipientRole: "A university department — formal register",
    subject: "Heating Not Working — Room 304B",
    situation:
      "The heating in your residence hall room, 304B in Kestrel Hall, stopped working on Sunday night. It is the middle of winter and the temperature in the room has stayed near ten degrees. You filed a repair request through the housing website on Monday morning and received an automatic confirmation, but nobody has visited the room and nobody has contacted you. Your roommate has already moved temporarily to a friend's room. Write an email to Campus Housing Maintenance.",
    bullets: [
      "describe the problem and how long it has lasted",
      "mention the repair request you already submitted",
      "explain why this needs urgent attention",
    ],
    instructions: EMAIL_DIRECTIONS,
    timeLimit: 420,
    minWords: 80,
    maxWords: 120,
  },
  {
    id: "EMAIL_004",
    type: "email",
    scenario: "Reschedule an academic advising appointment",
    recipient: "Dr. Chen, your academic advisor",
    recipientRole: "A faculty advisor — formal register",
    subject: "Rescheduling Tuesday's Advising Appointment",
    situation:
      "You have an academic advising appointment with Dr. Chen next Tuesday at two in the afternoon to plan your courses for next term. Registration opens the following Monday, so the meeting cannot simply be dropped. This morning the campus clinic offered you a specialist appointment that has a three-month waiting list, and the only slot available is Tuesday at two. You are free most of Wednesday and on Thursday morning. Write an email to Dr. Chen.",
    bullets: [
      "explain why you need to move the appointment",
      "suggest specific alternative times",
      "confirm what you would like to discuss when you meet",
    ],
    instructions: EMAIL_DIRECTIONS,
    timeLimit: 420,
    minWords: 80,
    maxWords: 120,
  },
  {
    id: "EMAIL_005",
    type: "email",
    scenario: "Return a student identity card you found",
    recipient: "Library Lost and Found",
    recipientRole: "A university service desk — polite and businesslike",
    subject: "Found Student ID Card",
    situation:
      "While studying on the third floor of the main library yesterday evening, you found a student identity card wedged between the cushions of an armchair near the window. The card belongs to a student named Alex Johnson and it also works as a meal card and a door key for the residence halls, so losing it is a serious inconvenience. The library was closing and the service desk was already shut, so you took the card home for safekeeping. Write an email to the library's lost and found office.",
    bullets: [
      "explain what you found and where you found it",
      "explain why you still have the card",
      "ask how and when you should hand it in",
    ],
    instructions: EMAIL_DIRECTIONS,
    timeLimit: 420,
    minWords: 80,
    maxWords: 120,
  },
  {
    id: "EMAIL_006",
    type: "email",
    scenario: "Thank a professor for writing a recommendation letter",
    recipient: "Professor Williams",
    recipientRole: "A professor who did you a favour — warm but formal",
    subject: "Thank You for Your Recommendation",
    situation:
      "Professor Williams wrote you a recommendation letter for a competitive summer research scholarship at the national laboratory. She wrote it during examination week, at short notice, and she asked to see your project proposal first so that the letter could refer to it in detail. You heard this morning that you have been awarded the scholarship and will start in June. You have not yet told her the outcome. Write an email to Professor Williams.",
    bullets: [
      "tell her the outcome of your application",
      "thank her for the specific help she gave",
      "say how you plan to keep in touch during the summer",
    ],
    instructions: EMAIL_DIRECTIONS,
    timeLimit: 420,
    minWords: 80,
    maxWords: 120,
  },
  {
    id: "EMAIL_007",
    type: "email",
    scenario: "Ask a professor to clarify assignment instructions",
    recipient: "Professor Anderson",
    recipientRole: "Your course instructor — formal register",
    subject: "Question About the Group Project Requirements",
    situation:
      "The instructions for the group project in Professor Anderson's sociology course are posted on the course website, but two things are unclear. The instructions say the report should be 'substantial' without giving a page or word limit, and they refer to 'standard academic citation' without saying whether the department expects APA or MLA style. Your group has to submit in nine days and has already started drafting. Two other groups have told you they are equally unsure. Write an email to Professor Anderson.",
    bullets: [
      "identify exactly which points are unclear",
      "explain why your group needs an answer soon",
      "ask whether the answer applies to every group",
    ],
    instructions: EMAIL_DIRECTIONS,
    timeLimit: 420,
    minWords: 80,
    maxWords: 120,
  },
  {
    id: "EMAIL_008",
    type: "email",
    scenario: "Apply for a part-time job at the campus bookstore",
    recipient: "Ms. Okonjo, University Bookstore manager",
    recipientRole: "A prospective employer — formal register",
    subject: "Application for Part-Time Sales Assistant",
    situation:
      "The university bookstore has advertised two part-time sales assistant positions for next term, twelve hours a week, with a preference for students who can work during the busy first fortnight. You worked in a bookshop at home for two summers and you handled the till, stock deliveries and customer orders. Your class timetable next term leaves you free on Tuesday and Thursday afternoons and all day Saturday. The advertisement asks interested students to write to the manager directly. Write an email to Ms. Okonjo.",
    bullets: [
      "say which position you are applying for",
      "describe the relevant experience you have",
      "state clearly when you are available to work",
    ],
    instructions: EMAIL_DIRECTIONS,
    timeLimit: 420,
    minWords: 80,
    maxWords: 120,
  },
  {
    id: "EMAIL_009",
    type: "email",
    scenario: "Ask a roommate to reduce late-night noise",
    recipient: "Sam, your roommate",
    recipientRole: "A friend you live with — informal but tactful",
    subject: "Late nights",
    situation:
      "Your roommate Sam has started producing music in your shared room, usually between eleven at night and two in the morning, with the speakers on rather than headphones. You have an eight o'clock laboratory session four mornings a week and you have been arriving exhausted; last week you made a mistake that cost your lab partner an afternoon of work. Sam is easy to get on with and almost certainly has not realised there is a problem. You do not want to involve the residence advisor. Write an email to Sam.",
    bullets: [
      "describe the problem without blaming Sam",
      "explain how it is affecting you",
      "suggest a workable arrangement for both of you",
    ],
    instructions: EMAIL_DIRECTIONS,
    timeLimit: 420,
    minWords: 80,
    maxWords: 120,
  },
  {
    id: "EMAIL_010",
    type: "email",
    scenario: "Tell a study group you will miss a session",
    recipient: "Your economics study group",
    recipientRole: "Fellow students you work with — friendly and direct",
    subject: "Missing Thursday's session",
    situation:
      "Your economics study group meets every Thursday evening to work through the problem set before it is submitted on Friday. You agreed at the last meeting to prepare the answers for questions four to seven and to bring them for the group to check. Your sister is having surgery on Thursday and you will be at the hospital all day and evening. You have finished your questions and can send them in advance. Write an email to the group.",
    bullets: [
      "tell them you cannot attend and why",
      "explain what will happen to the work you agreed to do",
      "ask them for something you will need afterwards",
    ],
    instructions: EMAIL_DIRECTIONS,
    timeLimit: 420,
    minWords: 80,
    maxWords: 120,
  },
  {
    id: "EMAIL_011",
    type: "email",
    scenario: "Request access to a restricted library database",
    recipient: "Mr. Halloran, subject librarian",
    recipientRole: "A university librarian — formal register",
    subject: "Access to the Historical Newspapers Archive",
    situation:
      "Your dissertation compares newspaper coverage of two elections, and almost all the material you need is in the Historical Newspapers Archive. The archive is restricted to postgraduate students, and your undergraduate account cannot open it. Your supervisor, Dr. Ferreira, has agreed to sponsor an exception and has said she will confirm this if the library contacts her. Your dissertation is due at the end of the term, so you have about eleven weeks left. Write an email to the subject librarian.",
    bullets: [
      "explain what access you need and why",
      "mention that your supervisor supports the request",
      "ask what the library needs from you to approve it",
    ],
    instructions: EMAIL_DIRECTIONS,
    timeLimit: 420,
    minWords: 80,
    maxWords: 120,
  },
  {
    id: "EMAIL_012",
    type: "email",
    scenario: "Report a laptop left behind in a classroom",
    recipient: "Professor Taylor",
    recipientRole: "Your course instructor — formal register",
    subject: "Laptop Left in Room 118",
    situation:
      "After Professor Taylor's Tuesday lecture in Room 118 you went straight to a seminar across campus and left your laptop under the desk. When you returned an hour later the room was locked and the building office had closed for the day. The laptop holds the only complete draft of an essay due on Friday, and it is not backed up. The room is used for another class first thing tomorrow morning. Write an email to Professor Taylor.",
    bullets: [
      "explain what you left and where you left it",
      "explain why you cannot simply collect it yourself",
      "ask for the specific help you need before tomorrow",
    ],
    instructions: EMAIL_DIRECTIONS,
    timeLimit: 420,
    minWords: 80,
    maxWords: 120,
  },
  {
    id: "EMAIL_013",
    type: "email",
    scenario: "Volunteer to help at the university career fair",
    recipient: "Ms. Delgado, career fair coordinator",
    recipientRole: "A university staff organiser — formal register",
    subject: "Volunteering at the Spring Career Fair",
    situation:
      "The careers service has asked for student volunteers for the spring career fair, which runs over two days next month in the sports hall. Volunteers greet employers, direct visitors and help set up and clear the stands. You attended the fair last year as a visitor, you speak Mandarin and Spanish as well as English, and you are free all day on the second day and after two o'clock on the first. Write an email to the coordinator.",
    bullets: [
      "say that you want to volunteer and when you are free",
      "describe anything that makes you useful to the team",
      "ask what happens next and whether there is training",
    ],
    instructions: EMAIL_DIRECTIONS,
    timeLimit: 420,
    minWords: 80,
    maxWords: 120,
  },
  {
    id: "EMAIL_014",
    type: "email",
    scenario: "Report a problem with a meal plan card",
    recipient: "Dining Services",
    recipientRole: "A university department — formal register",
    subject: "Meal Plan Card Being Charged Twice",
    situation:
      "Your meal plan card has been deducting two meals instead of one every time you use it in the north dining hall. You noticed this on Monday, and by Thursday your balance had fallen by fourteen meals although you had eaten seven. The staff at the till told you the terminal has been unreliable since it was replaced but that they cannot adjust balances themselves. You have kept the printed receipts from every meal this week. Write an email to Dining Services.",
    bullets: [
      "describe the problem and when it started",
      "give the evidence you have",
      "say what you would like them to do about it",
    ],
    instructions: EMAIL_DIRECTIONS,
    timeLimit: 420,
    minWords: 80,
    maxWords: 120,
  },
  {
    id: "EMAIL_015",
    type: "email",
    scenario: "Ask to be added to a class that is full",
    recipient: "Registrar's Office",
    recipientRole: "A university office — formal register",
    subject: "Request to Enrol in Statistics 210, Section B",
    situation:
      "Statistics 210 is a prerequisite for every course in your major next year, and the only section that fits your timetable, Section B, filled within minutes of registration opening. The waiting list shows you in fourth place. The department has told you that the registrar, not the instructor, decides whether the cap can be raised. If you cannot take the course this term, you will not be able to take two required courses next year and your graduation date will move. Write an email to the Registrar's Office.",
    bullets: [
      "say exactly which course and section you need",
      "explain the consequences of not getting a place",
      "ask what options are open to you if the cap cannot be raised",
    ],
    instructions: EMAIL_DIRECTIONS,
    timeLimit: 420,
    minWords: 80,
    maxWords: 120,
  },
  {
    id: "EMAIL_016",
    type: "email",
    scenario: "Ask a professor to review an examination grade",
    recipient: "Professor Johnson",
    recipientRole: "Your course instructor — formal and careful register",
    subject: "Question About My Midterm Grade",
    situation:
      "Your midterm examination in Professor Johnson's chemistry course came back with sixty-one marks out of one hundred. When you added up the marks written beside each question, the total came to seventy-three, and question six appears to have no mark at all although you answered it in full on the reverse of the page. Grades are final two weeks after they are released and one week of that has already passed. You want the paper looked at again. Write an email to Professor Johnson.",
    bullets: [
      "describe the specific discrepancy you found",
      "ask for the paper to be checked again",
      "mention the deadline you are working against",
    ],
    instructions: EMAIL_DIRECTIONS,
    timeLimit: 420,
    minWords: 80,
    maxWords: 120,
  },
  {
    id: "EMAIL_017",
    type: "email",
    scenario: "Request a late withdrawal from a course",
    recipient: "Dean of Students Office",
    recipientRole: "A senior university office — formal register",
    subject: "Request for Late Withdrawal from Physics 305",
    situation:
      "The deadline to withdraw from Physics 305 passed three weeks ago. Since then your father has been in hospital and you have travelled home every weekend to help your family; you have missed four laboratory sessions that cannot be repeated, and you are certain to fail. Your other three courses are unaffected and you are passing all of them. The university allows late withdrawal for documented personal circumstances, and the hospital can provide a letter. Write an email to the Dean of Students Office.",
    bullets: [
      "state what you are asking for",
      "explain the circumstances behind the request",
      "offer the documentation you can provide",
    ],
    instructions: EMAIL_DIRECTIONS,
    timeLimit: 420,
    minWords: 80,
    maxWords: 120,
  },
  {
    id: "EMAIL_018",
    type: "email",
    scenario: "Appeal a financial aid decision",
    recipient: "Financial Aid Office",
    recipientRole: "A university office — formal register",
    subject: "Appeal of Aid Package for the Coming Year",
    situation:
      "Your financial aid package for next year has been reduced by roughly a third because it was calculated from your family's income two years ago. Since then your mother has lost her job and your family's income has fallen by more than half. With the reduced package you cannot cover tuition and housing, and you would have to interrupt your studies. Your mother can provide her redundancy letter and this year's tax documents. Write an email to the Financial Aid Office.",
    bullets: [
      "explain why the calculation no longer reflects your situation",
      "describe what the reduction would mean for you",
      "ask about the appeal process and what evidence is needed",
    ],
    instructions: EMAIL_DIRECTIONS,
    timeLimit: 420,
    minWords: 80,
    maxWords: 120,
  },
  {
    id: "EMAIL_019",
    type: "email",
    scenario: "Propose an independent study project",
    recipient: "Professor Greene",
    recipientRole: "A professor you have studied with — formal register",
    subject: "Proposal for an Independent Study Next Term",
    situation:
      "You took Professor Greene's course on urban water systems last term and wrote your final essay on rainwater harvesting in informal settlements. She wrote on the essay that the topic deserved more space than an essay allows. The department permits a one-term independent study of four credits if a faculty member agrees to supervise it, and the paperwork must be filed before the end of this month. You have drafted a reading list and a plan for a fieldwork visit. Write an email to Professor Greene.",
    bullets: [
      "remind her of the work that led to this idea",
      "describe what you want to study and how",
      "ask whether she will supervise it and mention the deadline",
    ],
    instructions: EMAIL_DIRECTIONS,
    timeLimit: 420,
    minWords: 80,
    maxWords: 120,
  },
  {
    id: "EMAIL_020",
    type: "email",
    scenario: "Arrange approved examination accommodations",
    recipient: "Professor Lee",
    recipientRole: "Your course instructor — formal and matter-of-fact register",
    subject: "Approved Exam Accommodations for This Course",
    situation:
      "The disability services office has approved you for extra time and a separate room for examinations, and it has sent the formal letter to your department. The office asks students to contact each instructor at least two weeks before an examination so that arrangements can be made. Professor Lee's midterm is in sixteen days. You have not discussed this with Professor Lee before and you would prefer the arrangement to be handled discreetly. Write an email to Professor Lee.",
    bullets: [
      "state which accommodations have been approved",
      "confirm that the official letter has been sent",
      "ask how the arrangements will be made for this exam",
    ],
    instructions: EMAIL_DIRECTIONS,
    timeLimit: 420,
    minWords: 80,
    maxWords: 120,
  },
  {
    id: "EMAIL_021",
    type: "email",
    scenario: "Raise unequal workload with a project partner",
    recipient: "Jordan, your project partner",
    recipientRole: "A classmate you must keep working with — direct but civil",
    subject: "Splitting the rest of the project",
    situation:
      "You and Jordan are writing a marketing report together, and it is due in six days. You have written the introduction, the market analysis and the survey section; Jordan agreed a fortnight ago to write the competitor analysis and the conclusion and has not sent anything or answered your last two messages. The grade is shared. You would rather resolve this between yourselves than raise it with the instructor, and you still have to work with Jordan for the presentation. Write an email to Jordan.",
    bullets: [
      "set out plainly what has and has not been done",
      "explain the consequence if nothing changes",
      "propose a clear plan with dates for the remaining work",
    ],
    instructions: EMAIL_DIRECTIONS,
    timeLimit: 420,
    minWords: 80,
    maxWords: 120,
  },
  {
    id: "EMAIL_022",
    type: "email",
    scenario: "Ask an advisor about changing your major",
    recipient: "Ms. Barros, your academic advisor",
    recipientRole: "Your academic advisor — formal register",
    subject: "Considering a Change of Major",
    situation:
      "You are in the second year of a biology degree and you have decided you want to change to environmental policy. You have already taken two policy courses as electives and did well in both. You do not know how many of your biology credits would transfer, whether the change would delay your graduation, or whether the scholarship you hold is tied to your current department. The deadline for changing majors for next term is in three weeks. Write an email to your advisor.",
    bullets: [
      "explain what change you are considering and why",
      "list the specific questions you need answered",
      "ask to meet before the deadline",
    ],
    instructions: EMAIL_DIRECTIONS,
    timeLimit: 420,
    minWords: 80,
    maxWords: 120,
  },
  {
    id: "EMAIL_023",
    type: "email",
    scenario: "Ask a former professor for a recommendation",
    recipient: "Professor Davis",
    recipientRole: "A professor who taught you two years ago — formal register",
    subject: "Request for a Recommendation Letter",
    situation:
      "You are applying to a master's programme in public health and the application asks for two academic references. Professor Davis taught you epidemiology in your second year and supervised the group project on vaccination campaigns for which you were the lead author. You have not been in touch since that course finished eighteen months ago. The application closes in five weeks and references are submitted through an online form that emails the referee a link. Write an email to Professor Davis.",
    bullets: [
      "remind her who you are and what you did in her course",
      "explain what you are applying for and why",
      "tell her what the process involves and when it closes",
    ],
    instructions: EMAIL_DIRECTIONS,
    timeLimit: 420,
    minWords: 80,
    maxWords: 120,
  },
  {
    id: "EMAIL_024",
    type: "email",
    scenario: "Appeal a parking citation",
    recipient: "Parking Services",
    recipientRole: "A university service — formal register",
    subject: "Appeal of Citation Number 48-2291",
    situation:
      "You received a ninety-dollar citation for parking in Lot C without a valid permit. You do hold a valid permit for Lot C; it was renewed in September and the payment has cleared. On the morning in question the permit had slipped off the windscreen onto the passenger seat, where the officer would not have seen it. You have the receipt, the permit number and a photograph of the permit taken that afternoon. Appeals must be filed within ten days and six have passed. Write an email to Parking Services.",
    bullets: [
      "identify the citation and say why you are appealing",
      "describe the evidence you can provide",
      "ask what the next step is and confirm the deadline",
    ],
    instructions: EMAIL_DIRECTIONS,
    timeLimit: 420,
    minWords: 80,
    maxWords: 120,
  },
  {
    id: "EMAIL_025",
    type: "email",
    scenario: "Report a safety concern on campus",
    recipient: "Campus Security",
    recipientRole: "A university service — formal and precise register",
    subject: "Broken Lighting on the Riverside Path",
    situation:
      "The lighting along the riverside path between the science building and the north residence halls has been out for at least two weeks. The path is the shortest route back from evening laboratory sessions and it is completely dark between the bridge and the car park. Two students in your class have said they now walk the long way round instead. Nothing appears to have been reported, and the university's own safety guidance asks students to report outages directly. Write an email to Campus Security.",
    bullets: [
      "describe the problem and its exact location",
      "explain why it matters and who is affected",
      "ask what will be done and by when",
    ],
    instructions: EMAIL_DIRECTIONS,
    timeLimit: 420,
    minWords: 80,
    maxWords: 120,
  },
  {
    id: "EMAIL_026",
    type: "email",
    scenario: "Request a change of laboratory section",
    recipient: "Professor Kim",
    recipientRole: "Your course instructor — formal register",
    subject: "Request to Move to the Wednesday Lab Section",
    situation:
      "You are enrolled in the Monday afternoon laboratory section of Professor Kim's biology course. The section runs from two until five, and you have just been offered a paid research assistantship in another department that requires Monday afternoons for the whole term. The Wednesday morning section has spaces and fits your timetable. The department says section changes in the first three weeks need the instructor's approval, and this is the third week. Write an email to Professor Kim.",
    bullets: [
      "say which section you are in and which you want",
      "explain why you need to change",
      "acknowledge the deadline and ask for approval",
    ],
    instructions: EMAIL_DIRECTIONS,
    timeLimit: 420,
    minWords: 80,
    maxWords: 120,
  },
  {
    id: "EMAIL_027",
    type: "email",
    scenario: "Tell a professor you will miss a class",
    recipient: "Professor Rodriguez",
    recipientRole: "Your course instructor — formal register",
    subject: "Absence from Thursday's Seminar",
    situation:
      "You will miss Thursday's seminar in Professor Rodriguez's literature course because you are presenting a poster at an undergraduate research conference in another city that day. Attendance in the seminar counts towards the grade, and Thursday is the session where the reading response for the week is discussed and collected. You found out about the conference acceptance only yesterday. You have already done the reading and drafted your response. Write an email to Professor Rodriguez.",
    bullets: [
      "say which class you will miss and why",
      "explain what you have already prepared",
      "ask how you should handle the work for that session",
    ],
    instructions: EMAIL_DIRECTIONS,
    timeLimit: 420,
    minWords: 80,
    maxWords: 120,
  },
  {
    id: "EMAIL_028",
    type: "email",
    scenario: "Ask for a gym membership to be extended",
    recipient: "Recreation Center",
    recipientRole: "A university service — polite and businesslike",
    subject: "Request to Extend My Membership",
    situation:
      "You paid for a six-month membership at the recreation centre in January. The centre closed for unplanned repairs for five weeks in March and April, and during that period the pool and the weights room were both unavailable. Your membership expires at the end of this month. The notice on the door at the time said members should contact the office about the closure, but no further information was ever sent. Write an email to the Recreation Center.",
    bullets: [
      "explain what you paid for and what you lost",
      "say what you would like the centre to do",
      "ask how long a decision will take",
    ],
    instructions: EMAIL_DIRECTIONS,
    timeLimit: 420,
    minWords: 80,
    maxWords: 120,
  },
  {
    id: "EMAIL_029",
    type: "email",
    scenario: "Report a vending machine that took payment",
    recipient: "Facilities Management",
    recipientRole: "A university department — polite and businesslike",
    subject: "Vending Machine on the Second Floor of Hartley Hall",
    situation:
      "The vending machine on the second floor of Hartley Hall took four dollars from your card on Tuesday and did not dispense anything. You tried the refund button and then the number printed on the machine, which rang out. A note taped to the front of the machine says it was serviced last month. Two other students were waiting behind you and the same thing happened to one of them. The machine is still in service. Write an email to Facilities Management.",
    bullets: [
      "describe what happened and when",
      "mention what you have already tried",
      "ask both for a refund and for the machine to be checked",
    ],
    instructions: EMAIL_DIRECTIONS,
    timeLimit: 420,
    minWords: 80,
    maxWords: 120,
  },
  {
    id: "EMAIL_030",
    type: "email",
    scenario: "Request an official transcript for a job application",
    recipient: "Registrar's Office",
    recipientRole: "A university office — formal register",
    subject: "Request for an Official Transcript",
    situation:
      "An employer has offered you a graduate position conditional on an official transcript reaching their human resources office by the fifteenth of next month. The registrar's website lists two options: an electronic transcript sent directly to an institution, and a sealed paper copy posted to an address. The employer's letter says either is acceptable but the envelope must be unopened. You have never requested a transcript before and you do not know the fee or how long it takes. Write an email to the Registrar's Office.",
    bullets: [
      "explain what you need and the deadline you must meet",
      "state which delivery option suits your situation",
      "ask about the cost and the processing time",
    ],
    instructions: EMAIL_DIRECTIONS,
    timeLimit: 420,
    minWords: 80,
    maxWords: 120,
  },
];

// ==================== TASK 3: WRITE FOR AN ACADEMIC DISCUSSION ====================
// Critical thinking: Contribute to online classroom discussion forum
// Time limit: 10 minutes | Word count: 100+ words

export interface AcademicDiscussionTask {
  id: string;
  type: "academic_discussion";
  topic: string;
  professor: {
    name: string;
    message: string;
  };
  students: {
    name: string;
    message: string;
  }[];
  instructions: string;
  timeLimit: number;
  minWords: number;
  maxWords: number;
}

export const academicDiscussionTasks: AcademicDiscussionTask[] = [
  {
    id: "DISC_001",
    type: "academic_discussion",
    topic: "Online Learning Effectiveness",
    professor: {
      name: "Dr. Martinez",
      message: "We've been discussing different learning environments this week. Let's consider online education. Some argue that online classes offer flexibility and accessibility, while others believe in-person instruction is essential for deep learning. What's your perspective? Do you think online learning can be as effective as traditional classroom learning? Support your opinion with reasons or examples from your own experience."
    },
    students: [
      {
        name: "Jessica",
        message: "I believe online learning can be just as effective, especially for self-motivated students. I took an online coding course last summer and learned more than I did in some of my in-person classes because I could review lectures and work at my own pace. The flexibility allowed me to balance my part-time job while still mastering the material."
      },
      {
        name: "Marcus",
        message: "I respectfully disagree. While online classes offer convenience, they lack the spontaneous discussions and immediate feedback that happen in physical classrooms. When I took an online philosophy course, I missed the energy of debating ideas with classmates face-to-face. Those real-time interactions deepened my understanding in ways that forum posts couldn't replicate."
      }
    ],
    instructions: "Your professor is teaching a class on Education. Write a post responding to the professor's question. In your response, you should express and support your opinion and make a contribution to the discussion in your own words. An effective response will contain at least 100 words.",
    timeLimit: 600,
    minWords: 100,
    maxWords: 300
  },
  {
    id: "DISC_002",
    type: "academic_discussion",
    topic: "Social Media and Mental Health",
    professor: {
      name: "Prof. Chen",
      message: "In our psychology unit on technology and well-being, let's explore social media's impact. Research shows correlations between social media use and anxiety, but causation is complex. Some studies suggest social media helps people stay connected, while others link it to increased loneliness. Based on your understanding of psychological research and personal observations, do you think social media has a net positive or negative effect on young adults' mental health?"
    },
    students: [
      {
        name: "Aisha",
        message: "I think the negative effects outweigh the positives. Studies have shown that constant comparison to others' curated lives can lead to depression and low self-esteem. I've personally noticed that during weeks when I limit my Instagram use, I feel less anxious and more present. The dopamine feedback loop from likes and comments can become addictive and unhealthy."
      },
      {
        name: "David",
        message: "It's not the technology itself but how we use it. Social media has allowed me to maintain meaningful connections with friends who moved away and find communities of people with similar interests. The key is intentional use—following accounts that inspire rather than trigger comparison, and setting time limits. Used mindfully, it's a valuable tool for connection."
      }
    ],
    instructions: "Your professor is teaching a class on Psychology. Write a post responding to the professor's question. In your response, you should express and support your opinion and make a contribution to the discussion in your own words. An effective response will contain at least 100 words.",
    timeLimit: 600,
    minWords: 100,
    maxWords: 300
  },
  {
    id: "DISC_003",
    type: "academic_discussion",
    topic: "Renewable Energy Transition",
    professor: {
      name: "Dr. Patel",
      message: "Today's environmental science topic is the global transition to renewable energy. While solar and wind power are becoming cheaper, critics argue the infrastructure changes required are too expensive and disruptive. Proponents counter that climate change costs far exceed transition costs. From an economic and environmental perspective, should governments prioritize a rapid transition to renewable energy even if it causes short-term economic disruption?"
    },
    students: [
      {
        name: "Emma",
        message: "Absolutely yes. The economic argument against rapid transition ignores the massive costs of climate disasters we're already experiencing—wildfires, floods, hurricanes. California's wildfire damage alone costs billions annually. Investing in renewables creates jobs and positions countries as leaders in future energy markets. Short-term pain for long-term survival is a necessary trade-off."
      },
      {
        name: "James",
        message: "We need a more gradual approach. Many communities depend on fossil fuel jobs, and abruptly shutting down coal plants could devastate local economies. I think a phased transition with job retraining programs and support for affected workers is more realistic and humane. We can move toward renewables without leaving whole regions economically stranded."
      }
    ],
    instructions: "Your professor is teaching a class on Environmental Science. Write a post responding to the professor's question. In your response, you should express and support your opinion and make a contribution to the discussion in your own words. An effective response will contain at least 100 words.",
    timeLimit: 600,
    minWords: 100,
    maxWords: 300
  },
  {
    id: "DISC_004",
    type: "academic_discussion",
    topic: "Artificial Intelligence in the Workplace",
    professor: {
      name: "Prof. Anderson",
      message: "As we study technological disruption in business, let's consider AI's role in employment. Automation has historically eliminated some jobs while creating others. However, AI's rapid advancement worries many workers. Do you believe AI will ultimately create more opportunities than it destroys, or should we be concerned about widespread job displacement? Consider both historical patterns and unique aspects of AI technology."
    },
    students: [
      {
        name: "Sophie",
        message: "History shows that technological progress creates new types of work. The internet eliminated some jobs but created entire industries—social media management, app development, cybersecurity. AI will similarly create roles we can't yet imagine. The key is education systems adapting to teach skills that complement AI rather than compete with it, like creativity and emotional intelligence."
      },
      {
        name: "Ryan",
        message: "This time is different. Previous automation replaced physical labor, but AI can perform cognitive tasks too. Lawyers, radiologists, writers—jobs requiring years of education—are now at risk. The pace of AI development is faster than our ability to retrain workers. We could face unprecedented unemployment levels unless we implement policies like universal basic income to address this disruption."
      }
    ],
    instructions: "Your professor is teaching a class on Business and Technology. Write a post responding to the professor's question. In your response, you should express and support your opinion and make a contribution to the discussion in your own words. An effective response will contain at least 100 words.",
    timeLimit: 600,
    minWords: 100,
    maxWords: 300
  },
  {
    id: "DISC_005",
    type: "academic_discussion",
    topic: "Standardized Testing in Education",
    professor: {
      name: "Dr. Thompson",
      message: "Our education policy discussion today focuses on standardized testing. Tests like the SAT and ACT have been criticized for potential bias and for measuring test-taking skills rather than true ability. However, supporters argue they provide objective data for college admissions. Do standardized tests serve a valuable purpose in education, or should colleges move toward test-optional admissions? What would be the consequences of each approach?"
    },
    students: [
      {
        name: "Priya",
        message: "Standardized tests perpetuate inequality. Students from wealthy families can afford expensive test prep courses, while low-income students can't. Research shows that test scores correlate more strongly with family income than with academic potential. Test-optional policies allow admissions offices to evaluate students holistically through essays, recommendations, and achievements that better reflect their abilities."
      },
      {
        name: "Carlos",
        message: "While tests aren't perfect, they provide a common metric across different high schools with varying grading standards. Without them, admissions become more subjective and potentially more biased. A student from an unknown school might be overlooked without test scores to validate their grades. Instead of eliminating tests, we should invest in free test prep for disadvantaged students."
      }
    ],
    instructions: "Your professor is teaching a class on Education Policy. Write a post responding to the professor's question. In your response, you should express and support your opinion and make a contribution to the discussion in your own words. An effective response will contain at least 100 words.",
    timeLimit: 600,
    minWords: 100,
    maxWords: 300
  },
  {
    id: "DISC_006",
    type: "academic_discussion",
    topic: "Universal Basic Income",
    professor: {
      name: "Prof. Williams",
      message: "In our economics seminar, let's discuss universal basic income (UBI)—the idea of providing all citizens with regular, unconditional cash payments. Proponents argue it could reduce poverty and provide security in an automated economy. Critics worry about costs and potential reduction in work motivation. From an economic perspective, is UBI a viable policy solution for modern economies?"
    },
    students: [
      {
        name: "Maria",
        message: "UBI is essential for the future. As automation eliminates traditional jobs, people need a safety net. Pilot programs in Finland and Kenya showed that UBI recipients didn't stop working—instead, they started businesses, pursued education, and reported better mental health. The cost could be offset by eliminating bureaucratic welfare programs and taxing corporations that benefit from automation."
      },
      {
        name: "Tom",
        message: "The economics don't add up. Providing meaningful income to every citizen would cost trillions annually. Where does that money come from? Higher taxes could discourage business investment. Plus, I worry that guaranteed income might reduce people's motivation to develop skills and contribute to society. We should focus on job training and education instead."
      }
    ],
    instructions: "Your professor is teaching a class on Economics. Write a post responding to the professor's question. In your response, you should express and support your opinion and make a contribution to the discussion in your own words. An effective response will contain at least 100 words.",
    timeLimit: 600,
    minWords: 100,
    maxWords: 300
  },
  {
    id: "DISC_007",
    type: "academic_discussion",
    topic: "Space Exploration Funding",
    professor: {
      name: "Dr. Kumar",
      message: "Our astronomy unit raises questions about priorities. Space agencies spend billions on Mars missions and telescope projects while Earth faces urgent problems like poverty and climate change. Some argue space exploration drives technological innovation that benefits humanity. Others say we should solve Earth's problems first. How should societies balance space exploration with addressing immediate terrestrial challenges?"
    },
    students: [
      {
        name: "Lily",
        message: "Space exploration is an investment in our future. Many technologies we use daily—GPS, weather forecasting, medical imaging—originated from space programs. Studying other planets helps us understand Earth's climate. Plus, asteroid mining could provide resources, and establishing settlements on other worlds ensures human survival if Earth becomes uninhabitable. It's not either-or thinking."
      },
      {
        name: "Ahmed",
        message: "With millions dying from preventable diseases and lacking clean water, spending billions to photograph distant galaxies seems immoral. Yes, space research has produced spin-off technologies, but we could fund direct research into those same technologies for a fraction of the cost. We have one planet, and it's in crisis. That should be our absolute priority."
      }
    ],
    instructions: "Your professor is teaching a class on Science and Society. Write a post responding to the professor's question. In your response, you should express and support your opinion and make a contribution to the discussion in your own words. An effective response will contain at least 100 words.",
    timeLimit: 600,
    minWords: 100,
    maxWords: 300
  },
  {
    id: "DISC_008",
    type: "academic_discussion",
    topic: "College Degree Value",
    professor: {
      name: "Prof. Lee",
      message: "Let's examine higher education's changing role. College tuition has increased dramatically while some successful entrepreneurs and tech leaders never finished degrees. Meanwhile, data shows college graduates still earn significantly more over their lifetimes. Given rising costs and alternative learning paths, is a four-year college degree still worth the investment for most students?"
    },
    students: [
      {
        name: "Rachel",
        message: "The degree is becoming less important than skills. Many tech companies now hire based on portfolios and coding ability rather than degrees. Online courses and bootcamps teach practical skills faster and cheaper. I know several developers earning six figures who never attended college. The traditional degree model is outdated—employers want demonstrable skills, not expensive diplomas."
      },
      {
        name: "Kevin",
        message: "Statistics still favor degree holders. Yes, some exceptions exist, but most high-paying careers require degrees. Plus, college teaches critical thinking, writing, and complex problem-solving—skills you don't get from bootcamps. The networking opportunities and structured learning environment are valuable. The solution is making college affordable, not telling students to skip it."
      }
    ],
    instructions: "Your professor is teaching a class on Higher Education. Write a post responding to the professor's question. In your response, you should express and support your opinion and make a contribution to the discussion in your own words. An effective response will contain at least 100 words.",
    timeLimit: 600,
    minWords: 100,
    maxWords: 300
  },
  {
    id: "DISC_009",
    type: "academic_discussion",
    topic: "Privacy vs Security",
    professor: {
      name: "Dr. Rodriguez",
      message: "Our political science discussion today addresses the tension between privacy rights and national security. After terrorist attacks, governments often expand surveillance programs. Civil libertarians argue these measures erode fundamental freedoms, while security advocates claim they prevent attacks. Where should democratic societies draw the line between protecting citizens' privacy and ensuring their safety?"
    },
    students: [
      {
        name: "Nina",
        message: "Security must come first. If monitoring communications prevents even one terrorist attack, it's justified. Those worried about privacy often say 'I have nothing to hide'—and that's reasonable. Law-abiding citizens shouldn't fear surveillance. The government has prevented numerous plots through data analysis. Some privacy sacrifice is a small price for safety."
      },
      {
        name: "Alex",
        message: "This thinking is dangerous. History shows governments abuse surveillance powers—look at COINTELPRO or East Germany's Stasi. Mass surveillance creates a chilling effect on free speech and political dissent. Once we surrender privacy rights, regaining them is nearly impossible. We can have security through targeted, warrant-based surveillance without dragnet monitoring of innocent citizens."
      }
    ],
    instructions: "Your professor is teaching a class on Political Science. Write a post responding to the professor's question. In your response, you should express and support your opinion and make a contribution to the discussion in your own words. An effective response will contain at least 100 words.",
    timeLimit: 600,
    minWords: 100,
    maxWords: 300
  },
  {
    id: "DISC_010",
    type: "academic_discussion",
    topic: "Animal Testing in Medical Research",
    professor: {
      name: "Prof. Harrison",
      message: "Our bioethics unit examines the use of animals in medical research. Animal testing has contributed to major medical breakthroughs—vaccines, cancer treatments, surgical techniques. However, it raises ethical questions about causing suffering to sentient beings. Some alternatives exist, like computer modeling and cell cultures, but researchers argue they can't fully replace animal models. Is animal testing ethically justifiable given its role in medical advancement?"
    },
    students: [
      {
        name: "Zoe",
        message: "We must pursue alternatives vigorously. Animals experience pain and fear just as humans do. Using them as test subjects treats them as mere tools. Modern technology offers promising alternatives—organ-on-chip technology, advanced computer simulations, human tissue cultures. We should invest heavily in these methods rather than perpetuating animal suffering, even if it slows research temporarily."
      },
      {
        name: "Ethan",
        message: "I understand the ethical concerns, but animal research remains necessary. When my sister had leukemia, the treatments that saved her life were developed through animal testing. We can't ethically test new drugs on humans first, and alternatives can't yet replicate complex biological systems. The solution is minimizing animal use, ensuring humane treatment, and continuing to develop alternatives—not banning animal research entirely."
      }
    ],
    instructions: "Your professor is teaching a class on Bioethics. Write a post responding to the professor's question. In your response, you should express and support your opinion and make a contribution to the discussion in your own words. An effective response will contain at least 100 words.",
    timeLimit: 600,
    minWords: 100,
    maxWords: 300
  },
  {
    id: "DISC_011",
    type: "academic_discussion",
    topic: "Homework Effectiveness",
    professor: {
      name: "Dr. Foster",
      message: "In our education methods course, let's examine homework's role. Some research suggests homework improves academic performance and teaches responsibility. Other studies show it causes stress and reduces family time, with minimal learning benefits, especially for younger students. Based on educational research and your own experience, should schools assign less homework, more homework, or fundamentally rethink how homework functions?"
    },
    students: [
      {
        name: "Taylor",
        message: "Schools assign too much busywork. I spent hours on repetitive math problems that didn't deepen my understanding—I was just going through motions. Quality over quantity should be the principle. One challenging problem requiring critical thinking beats twenty drill exercises. Homework should be purposeful and limited, leaving students time for extracurriculars, family, and rest."
      },
      {
        name: "Jordan",
        message: "Homework taught me discipline and time management—skills I use in college daily. Without regular practice, I wouldn't have mastered complex concepts. The issue isn't homework itself but poorly designed assignments. Effective homework reinforces class lessons and prepares students for independence. Teachers should coordinate to prevent overload, but eliminating homework would leave students underprepared."
      }
    ],
    instructions: "Your professor is teaching a class on Education. Write a post responding to the professor's question. In your response, you should express and support your opinion and make a contribution to the discussion in your own words. An effective response will contain at least 100 words.",
    timeLimit: 600,
    minWords: 100,
    maxWords: 300
  },
  {
    id: "DISC_012",
    type: "academic_discussion",
    topic: "Fast Fashion Environmental Impact",
    professor: {
      name: "Prof. Green",
      message: "Our environmental studies discussion focuses on the fashion industry. Fast fashion—cheap, trendy clothing produced rapidly—has made fashion accessible but creates enormous environmental damage through water pollution, textile waste, and carbon emissions. Some propose taxing fast fashion or implementing strict regulations. Is government intervention in the fashion industry justified to address environmental concerns, or should change come through consumer choices?"
    },
    students: [
      {
        name: "Isabella",
        message: "Regulation is necessary. Individual consumer choice hasn't worked—fast fashion keeps growing despite awareness. Companies externalize environmental costs onto society. Taxes on cheap clothing and requirements for sustainable materials would force the industry to change. Yes, clothes would cost more, but that's the true price when environmental damage is factored in. We regulate polluting industries; fashion should be no exception."
      },
      {
        name: "Lucas",
        message: "Education and innovation, not regulation, are the answer. Taxing fast fashion punishes low-income consumers who rely on affordable clothing. Instead, we should invest in developing sustainable materials that are cost-competitive. As consumers become more environmentally conscious, market demand will shift companies toward sustainability. Government should incentivize green innovation, not make clothes unaffordable for working families."
      }
    ],
    instructions: "Your professor is teaching a class on Environmental Studies. Write a post responding to the professor's question. In your response, you should express and support your opinion and make a contribution to the discussion in your own words. An effective response will contain at least 100 words.",
    timeLimit: 600,
    minWords: 100,
    maxWords: 300
  },
  {
    id: "DISC_013",
    type: "academic_discussion",
    topic: "Gene Editing Technology",
    professor: {
      name: "Dr. Shah",
      message: "Our biotechnology ethics unit examines CRISPR and gene editing. The technology could eliminate genetic diseases, but it also raises concerns about designer babies and inequality. China recently announced gene-edited babies, sparking global debate. Should we permit gene editing for disease prevention, or does it open doors to dangerous genetic enhancement? Where should society draw ethical boundaries with this powerful technology?"
    },
    students: [
      {
        name: "Olivia",
        message: "We should permit editing to prevent severe diseases like Huntington's or cystic fibrosis—preventing suffering is a moral imperative. However, strict regulations must prevent enhancement for traits like intelligence or appearance, which would create genetic inequality. International treaties should establish clear boundaries: therapeutic editing yes, enhancement no. The technology exists; banning it won't work. Smart regulation is the answer."
      },
      {
        name: "Daniel",
        message: "The distinction between therapy and enhancement will blur, making regulation impossible. Once we start editing genes, where do we stop? Today it's disease prevention; tomorrow it's higher IQ or athletic ability. This creates a genetic divide between wealthy and poor. We're not wise enough to redesign the human genome. The risks—unintended consequences, inequality, loss of human diversity—outweigh potential benefits. A complete ban is necessary."
      }
    ],
    instructions: "Your professor is teaching a class on Bioethics. Write a post responding to the professor's question. In your response, you should express and support your opinion and make a contribution to the discussion in your own words. An effective response will contain at least 100 words.",
    timeLimit: 600,
    minWords: 100,
    maxWords: 300
  },
  {
    id: "DISC_014",
    type: "academic_discussion",
    topic: "Gig Economy Worker Rights",
    professor: {
      name: "Prof. Davis",
      message: "Today's labor economics topic is the gig economy. Companies like Uber and DoorDash classify workers as independent contractors rather than employees, avoiding benefits and protections. This offers flexibility but no healthcare, sick leave, or retirement benefits. Some jurisdictions have passed laws reclassifying gig workers as employees. Should gig workers receive employee benefits and protections, even if it reduces flexibility and increases costs?"
    },
    students: [
      {
        name: "Sophia",
        message: "These companies exploit legal loopholes to avoid providing basic protections. Gig workers need healthcare, minimum wage guarantees, and unemployment insurance. The 'flexibility' argument is misleading—many drivers work full-time hours with no benefits. California's AB5 law was a necessary step. Companies can still operate profitably while treating workers fairly; they simply want to maximize profits by pushing costs onto workers and society."
      },
      {
        name: "Miguel",
        message: "Mandating employment classification would destroy the flexibility that attracts people to gig work. I drive for Uber between classes—I set my own hours, which wouldn't be possible as a traditional employee. Many gig workers choose this precisely because it's not traditional employment. Instead of forcing companies into an outdated model, we should create a third category with some protections but preserved flexibility."
      }
    ],
    instructions: "Your professor is teaching a class on Labor Economics. Write a post responding to the professor's question. In your response, you should express and support your opinion and make a contribution to the discussion in your own words. An effective response will contain at least 100 words.",
    timeLimit: 600,
    minWords: 100,
    maxWords: 300
  },
  {
    id: "DISC_015",
    type: "academic_discussion",
    topic: "Cryptocurrency as Currency",
    professor: {
      name: "Dr. Walsh",
      message: "Our finance seminar examines cryptocurrency's role in the global economy. Bitcoin and other cryptocurrencies promise decentralized, borderless transactions without government control. Critics point to extreme volatility, use in illegal activities, and environmental costs of mining. Supporters see it as the future of money, free from government manipulation. Can cryptocurrencies function as legitimate currencies, or are they primarily speculative assets?"
    },
    students: [
      {
        name: "Hannah",
        message: "Cryptocurrency is a speculative bubble, not a currency. Real currencies need stable value—you can't have a functional economy when your money's worth fluctuates 20% daily. The energy consumption is absurd—Bitcoin mining uses more electricity than entire countries. Plus, lack of regulation enables fraud and money laundering. Blockchain technology has potential applications, but crypto as currency has failed the basic test: people don't use it for everyday transactions."
      },
      {
        name: "Chris",
        message: "Traditional currencies are manipulated by governments printing money, causing inflation that erodes savings. Cryptocurrency's fixed supply protects against this. Volatility will decrease as adoption grows—early internet stocks were volatile too. In countries with unstable currencies, crypto provides financial access and stability. El Salvador adopting Bitcoin shows its potential. This is a paradigm shift; of course there are growing pains."
      }
    ],
    instructions: "Your professor is teaching a class on Finance. Write a post responding to the professor's question. In your response, you should express and support your opinion and make a contribution to the discussion in your own words. An effective response will contain at least 100 words.",
    timeLimit: 600,
    minWords: 100,
    maxWords: 300
  },
  {
    id: "DISC_016",
    type: "academic_discussion",
    topic: "Cancel Culture and Free Speech",
    professor: {
      name: "Prof. Baker",
      message: "Our sociology course examines 'cancel culture'—public figures facing consequences for controversial statements or past actions. Some argue this holds people accountable for harmful behavior. Others claim it stifles free speech and prevents nuanced discussion. From a sociological perspective, does cancel culture serve a valuable social function, or does it create a climate of fear that damages public discourse?"
    },
    students: [
      {
        name: "Maya",
        message: "Cancel culture gives voice to marginalized groups who historically couldn't challenge powerful figures. When someone makes racist or sexist comments, facing consequences is appropriate. This isn't censorship—it's accountability. Free speech doesn't mean freedom from consequences. People are more careful about harmful rhetoric now, which is progress. The powerful calling it 'cancel culture' are simply uncomfortable being held responsible."
      },
      {
        name: "Ben",
        message: "The problem is mob justice with no nuance, due process, or room for growth. People lose careers over decade-old tweets or misunderstood comments. This creates a chilling effect where everyone self-censors to avoid outrage. Complex discussions about race, gender, or politics become impossible when one misstep ends your career. We should allow people to learn and change rather than destroying them permanently."
      }
    ],
    instructions: "Your professor is teaching a class on Sociology. Write a post responding to the professor's question. In your response, you should express and support your opinion and make a contribution to the discussion in your own words. An effective response will contain at least 100 words.",
    timeLimit: 600,
    minWords: 100,
    maxWords: 300
  },
  {
    id: "DISC_017",
    type: "academic_discussion",
    topic: "Nuclear Energy for Climate Change",
    professor: {
      name: "Dr. Peterson",
      message: "As we study climate solutions, let's consider nuclear power. It produces zero carbon emissions and provides reliable baseload power, unlike intermittent renewables. However, concerns about safety (Chernobyl, Fukushima), radioactive waste, and high costs make it controversial. Should nuclear energy be a major component of our strategy to combat climate change, or should we focus exclusively on renewable sources like solar and wind?"
    },
    students: [
      {
        name: "Grace",
        message: "Nuclear is essential for climate goals. Wind and solar can't provide consistent power for industrial society—we need baseload energy. Modern reactors are far safer than Chernobyl, and nuclear has actually caused fewer deaths per unit of energy than fossil fuels. France gets 70% of electricity from nuclear with no major incidents. Waste storage is a solved technical problem; the issue is political will. Climate change is the urgent threat; we can't afford to ignore nuclear."
      },
      {
        name: "Nathan",
        message: "Nuclear is too slow and expensive. Building a nuclear plant takes 10-15 years and billions of dollars—time and money better spent on renewables that can be deployed faster. Battery storage technology is advancing rapidly, solving the intermittency problem. Fukushima showed that 'safe' reactors can still fail catastrophically. We don't need nuclear; we need massive investment in solar, wind, and storage."
      }
    ],
    instructions: "Your professor is teaching a class on Environmental Science. Write a post responding to the professor's question. In your response, you should express and support your opinion and make a contribution to the discussion in your own words. An effective response will contain at least 100 words.",
    timeLimit: 600,
    minWords: 100,
    maxWords: 300
  },
  {
    id: "DISC_018",
    type: "academic_discussion",
    topic: "Minimum Wage Increase Effects",
    professor: {
      name: "Prof. Morrison",
      message: "In our labor economics discussion, let's examine minimum wage policy. Advocates argue raising it reduces poverty and stimulates the economy through increased consumer spending. Opponents claim it forces businesses to cut jobs and hours, ultimately hurting the workers it aims to help. Economic studies show mixed results. Based on economic theory and empirical evidence, would significantly raising the minimum wage help or harm low-income workers overall?"
    },
    students: [
      {
        name: "Emma",
        message: "Raising minimum wage helps workers. Full-time minimum wage workers live below the poverty line—that's unacceptable in a wealthy nation. Studies of cities that raised wages showed no significant job loss. Workers with more money spend more, stimulating local economies. Some businesses might hire fewer people, but those employed earn living wages. The current minimum wage hasn't kept pace with inflation or productivity—it's overdue for increase."
      },
      {
        name: "Tyler",
        message: "Basic economics: when labor costs rise, businesses use less labor. Small businesses especially can't absorb huge wage increases and will automate or cut staff. Seattle's minimum wage hike led to reduced hours for workers, resulting in lower overall earnings. Entry-level jobs help young people gain experience—pricing them out of the market hurts their long-term prospects. Better solution: expand earned income tax credits to supplement low wages without forcing business closures."
      }
    ],
    instructions: "Your professor is teaching a class on Economics. Write a post responding to the professor's question. In your response, you should express and support your opinion and make a contribution to the discussion in your own words. An effective response will contain at least 100 words.",
    timeLimit: 600,
    minWords: 100,
    maxWords: 300
  },
  {
    id: "DISC_019",
    type: "academic_discussion",
    topic: "Smartphone Addiction in Youth",
    professor: {
      name: "Dr. Collins",
      message: "Our developmental psychology unit examines technology's impact on young people. Research shows teenagers average 7+ hours daily on smartphones, correlating with increased anxiety and depression. However, smartphones also provide educational resources, social connection, and creative outlets. Should parents and schools impose strict limits on teenagers' smartphone use, or is this a moral panic about new technology similar to past concerns about television or video games?"
    },
    students: [
      {
        name: "Ava",
        message: "This is different from TV. Smartphones are designed to be addictive—companies employ psychologists to maximize engagement. I've watched my younger sister's grades drop and friendships deteriorate as she became glued to Instagram and TikTok. Her sleep schedule is destroyed. Brain development research shows excessive screen time literally changes young brains. Schools banning phones during the day and parents limiting evening use isn't overreaction; it's protecting children from products designed to exploit them."
      },
      {
        name: "Jake",
        message: "Every generation fears new technology. Our parents worried about us watching TV; their parents worried about radio. Smartphones are tools—the issue is how they're used. Mine helps me organize schoolwork, communicate with study groups, and access educational content. Bans and restrictions don't teach self-regulation. Better approach: educate young people about healthy tech use, teach digital literacy, and model balanced behavior. Prohibition has never worked; education does."
      }
    ],
    instructions: "Your professor is teaching a class on Psychology. Write a post responding to the professor's question. In your response, you should express and support your opinion and make a contribution to the discussion in your own words. An effective response will contain at least 100 words.",
    timeLimit: 600,
    minWords: 100,
    maxWords: 300
  },
  {
    id: "DISC_020",
    type: "academic_discussion",
    topic: "Globalization and Local Cultures",
    professor: {
      name: "Prof. Tanaka",
      message: "Our anthropology seminar explores globalization's cultural effects. Global communication and trade spread ideas, technologies, and practices worldwide. Some celebrate this as cultural exchange and progress. Others lament the loss of unique local traditions, languages, and practices as global brands and English language dominate. Does globalization enrich cultures through exchange and hybrid forms, or does it erase cultural diversity through homogenization?"
    },
    students: [
      {
        name: "Yuki",
        message: "Globalization destroys uniqueness. Indigenous languages are dying at alarming rates as English dominates. Small traditional communities abandon ancestral practices to adopt Western consumer culture. You can find the same chain stores in Tokyo, New York, and Mumbai—local character disappears. This isn't enrichment; it's cultural imperialism. Once these traditions are lost, they're gone forever. We should protect cultural diversity as vigorously as we protect biodiversity."
      },
      {
        name: "Marco",
        message: "Culture has always evolved through contact and exchange. Jazz emerged from mixing African and European musical traditions—globalization creates new art forms. Technology lets diaspora communities maintain cultural ties across distances. Korean culture spread globally through K-pop, not by isolation. Cultures aren't museums; they're living, changing things. The question isn't globalization versus tradition but ensuring exchange happens on equitable terms where all cultures are respected."
      }
    ],
    instructions: "Your professor is teaching a class on Anthropology. Write a post responding to the professor's question. In your response, you should express and support your opinion and make a contribution to the discussion in your own words. An effective response will contain at least 100 words.",
    timeLimit: 600,
    minWords: 100,
    maxWords: 300
  },
  {
    id: "DISC_021",
    type: "academic_discussion",
    topic: "Electoral College System",
    professor: {
      name: "Dr. Jackson",
      message: "Our political science course examines U.S. electoral systems. The Electoral College means presidential candidates who win the popular vote can still lose elections, as happened in 2000 and 2016. Defenders argue it protects small states and prevents urban areas from dominating. Critics call it undemocratic and a historical relic. Should the United States replace the Electoral College with a national popular vote for president?"
    },
    students: [
      {
        name: "Sarah",
        message: "Absolutely replace it. In a democracy, every vote should count equally. Why should a voter in Wyoming have three times the electoral power of a California voter? The current system means candidates ignore states that aren't competitive, focusing only on swing states. This makes no sense. Rural concerns won't be ignored under popular vote—candidates would need to appeal broadly. One person, one vote is the fundamental democratic principle. The Electoral College violates this."
      },
      {
        name: "Brandon",
        message: "The Electoral College ensures candidates must build geographically diverse coalitions. Without it, campaigns would focus entirely on major cities, ignoring rural America's distinct needs and concerns. Small states would have no voice. The system was designed to balance population with federalism—we're a union of states, not a pure democracy. Rather than abolishing it, we should focus on making individual states more competitive through addressing gerrymandering and voter access."
      }
    ],
    instructions: "Your professor is teaching a class on Political Science. Write a post responding to the professor's question. In your response, you should express and support your opinion and make a contribution to the discussion in your own words. An effective response will contain at least 100 words.",
    timeLimit: 600,
    minWords: 100,
    maxWords: 300
  },
  {
    id: "DISC_022",
    type: "academic_discussion",
    topic: "Video Games and Aggression",
    professor: {
      name: "Prof. Newman",
      message: "Our media psychology unit investigates violent video games' effects. Some research suggests a link between violent games and aggressive behavior, while other studies find no significant effect or even note games as stress relief. The debate has policy implications for game ratings and sales restrictions. Based on psychological research, should society be concerned about violent video game content, particularly for young people?"
    },
    students: [
      {
        name: "Liam",
        message: "The correlation is overblown. Millions play violent games without becoming violent. Japan has high game playing rates but very low violent crime. If games caused violence, we'd see epidemic levels. I've played combat games for years—they're stress relief after studying, not training for aggression. The research finding effects often involves laboratory measures of 'aggression' like loud noise blast tests, not real-world violence. Blaming games distracts from actual causes like poverty and mental health."
      },
      {
        name: "Ella",
        message: "While most players don't become violent, research does show games can increase aggressive thoughts and desensitize players to violence. Young people's brains are still developing—constant exposure to graphic violence as entertainment normalizes it. We restrict violent content in other media; games shouldn't be exempt. I'm not arguing for bans but age-appropriate restrictions. Just as young children shouldn't watch horror movies, they shouldn't play M-rated games designed for adults."
      }
    ],
    instructions: "Your professor is teaching a class on Media Psychology. Write a post responding to the professor's question. In your response, you should express and support your opinion and make a contribution to the discussion in your own words. An effective response will contain at least 100 words.",
    timeLimit: 600,
    minWords: 100,
    maxWords: 300
  },
  {
    id: "DISC_023",
    type: "academic_discussion",
    topic: "Mandatory Voting",
    professor: {
      name: "Dr. Foster",
      message: "Today's political philosophy topic is compulsory voting. Countries like Australia and Belgium require citizens to vote, with fines for non-participation. Proponents argue this increases civic engagement and makes elections more representative. Critics claim forcing people to vote violates freedom and results in uninformed voting. From a democratic theory perspective, should voting be mandatory, or is the right to abstain equally important as the right to vote?"
    },
    students: [
      {
        name: "Chloe",
        message: "Mandatory voting strengthens democracy. When only motivated citizens vote, elections skew toward extreme positions and don't represent the full population. Compulsory voting forces candidates to appeal broadly rather than just mobilizing their base. Australia's system works well—turnout exceeds 90%, and democracy is healthier. People have civic duties like jury service and paying taxes; voting should join that list. You can still cast a blank ballot if you truly have no preference."
      },
      {
        name: "Aaron",
        message: "Forcing uninterested, uninformed people to vote degrades democracy. Quality matters more than quantity in participation. Freedom includes the right not to participate—compulsion contradicts liberal democracy's core values. People abstaining may be expressing legitimate dissatisfaction with all candidates. Mandatory voting would lead to random selection or voting for name recognition. Instead of forcing participation, we should address why people feel disconnected from politics: make elections more responsive, reduce corruption, and improve civic education."
      }
    ],
    instructions: "Your professor is teaching a class on Political Science. Write a post responding to the professor's question. In your response, you should express and support your opinion and make a contribution to the discussion in your own words. An effective response will contain at least 100 words.",
    timeLimit: 600,
    minWords: 100,
    maxWords: 300
  },
  {
    id: "DISC_024",
    type: "academic_discussion",
    topic: "Cultural Appropriation vs. Appreciation",
    professor: {
      name: "Prof. Williams",
      message: "Our cultural studies seminar examines the distinction between cultural appropriation and appreciation. When dominant cultures adopt elements from marginalized cultures—hairstyles, clothing, music—is this harmful appropriation or respectful appreciation? Context, power dynamics, and intent all matter. Where should we draw the line, and who gets to make these judgments? How can cultural exchange occur ethically in a globalized world?"
    },
    students: [
      {
        name: "Jade",
        message: "Appropriation happens when dominant groups profit from cultural elements while the original culture faces discrimination for the same practices. Black women are told their natural hair is unprofessional, while white celebrities are praised for wearing the same styles. Fashion brands profit from indigenous designs without crediting or compensating origin communities. This isn't appreciation; it's exploitation. Real appreciation involves learning context, giving credit, and supporting the communities being celebrated."
      },
      {
        name: "Connor",
        message: "Culture naturally spreads and evolves—it's not intellectual property. Humans have always borrowed from each other. Pizza is now global, not just Italian. Rock music has African American roots but became universal. Policing who can wear, cook, or perform certain things based on ancestry creates segregation, not respect. Intent matters—if someone adopts practices respectfully, that's exchange. We can address exploitation without creating strict cultural ownership rules that prevent learning from each other."
      }
    ],
    instructions: "Your professor is teaching a class on Cultural Studies. Write a post responding to the professor's question. In your response, you should express and support your opinion and make a contribution to the discussion in your own words. An effective response will contain at least 100 words.",
    timeLimit: 600,
    minWords: 100,
    maxWords: 300
  },
  {
    id: "DISC_025",
    type: "academic_discussion",
    topic: "Income Inequality Solutions",
    professor: {
      name: "Dr. Robinson",
      message: "Our economics policy unit addresses growing income inequality in developed nations. The wealth gap has widened dramatically, with implications for social cohesion, economic mobility, and democracy itself. Proposed solutions range from wealth taxes and universal basic income to education investment and deregulation. What policy approaches would most effectively address income inequality while maintaining economic growth and innovation incentives?"
    },
    students: [
      {
        name: "Mia",
        message: "Wealth taxes and higher marginal tax rates on top earners are essential. Billionaires exist while workers can't afford healthcare—this is immoral and economically inefficient. Money concentrated at the top doesn't circulate in the economy. Redistributive policies like universal healthcare, free college, and robust social services create opportunity and security. Scandinavia proves you can have both equality and prosperity. The 'innovation incentive' argument fails—inventors and entrepreneurs aren't primarily motivated by becoming billionaires."
      },
      {
        name: "Derek",
        message: "Wealth redistribution kills innovation and investment. Why would entrepreneurs take risks if government confiscates success? Inequality itself isn't the problem—poverty is. We should focus on lifting the bottom through education, job training, and removing regulations that prevent small business formation. A thriving economy with jobs for everyone beats forced equality through taxes. Look at highly-taxed economies—growth stagnates. Better to have rising inequality with everyone improving than enforced equality through making everyone poorer."
      }
    ],
    instructions: "Your professor is teaching a class on Economics. Write a post responding to the professor's question. In your response, you should express and support your opinion and make a contribution to the discussion in your own words. An effective response will contain at least 100 words.",
    timeLimit: 600,
    minWords: 100,
    maxWords: 300
  },
  {
    id: "DISC_026",
    type: "academic_discussion",
    topic: "Prison System Reform",
    professor: {
      name: "Prof. Hayes",
      message: "Our criminal justice course examines the purpose of imprisonment. Should prisons prioritize punishment and deterrence, or rehabilitation and reintegration? The U.S. has the highest incarceration rate globally, with high recidivism. Nordic countries emphasize rehabilitation with far lower repeat offense rates but face criticism for being 'too soft' on crime. What should be the primary goal of the criminal justice system?"
    },
    students: [
      {
        name: "Riley",
        message: "Punishment-focused systems fail. U.S. prisons are warehouses that make people worse—inmates learn criminal skills and lose job prospects. Upon release, they face discrimination and return to crime. Norway's model treats prisoners humanely, provides education and job training, and achieves 20% recidivism versus America's 76%. This isn't being 'soft'—it's being smart. Rehabilitation protects society better than punishment. We should measure success by how many don't reoffend, not by how harsh conditions are."
      },
      {
        name: "Cameron",
        message: "Justice requires proportional punishment. Victims and their families deserve to see consequences for crimes. Making prisons comfortable sends the wrong message—crime should have real deterrent effect. While I support some rehabilitation programs, the primary purpose is punishment and incapacitation. Some people are dangers to society and shouldn't be released. The focus should be preventing crime through deterrence and keeping dangerous individuals separated from law-abiding citizens."
      }
    ],
    instructions: "Your professor is teaching a class on Criminal Justice. Write a post responding to the professor's question. In your response, you should express and support your opinion and make a contribution to the discussion in your own words. An effective response will contain at least 100 words.",
    timeLimit: 600,
    minWords: 100,
    maxWords: 300
  },
  {
    id: "DISC_027",
    type: "academic_discussion",
    topic: "Artificial Meat Technology",
    professor: {
      name: "Dr. Cooper",
      message: "Our food science and ethics unit explores lab-grown meat. Cultured meat could reduce animal suffering, decrease environmental damage from livestock, and provide protein sustainably. However, it faces consumer acceptance challenges, regulatory hurdles, and questions about naturalness. Should governments support lab-grown meat development and adoption as a solution to environmental and ethical issues with conventional meat production?"
    },
    students: [
      {
        name: "Victoria",
        message: "Absolutely support it. Animal agriculture is devastating—massive carbon emissions, deforestation, water pollution, and animal suffering. Lab meat could provide the taste and nutrition people want without the harm. Early cars seemed unnatural compared to horses too. Government should fund research, streamline approval processes, and educate consumers. This technology could be as transformative as the agricultural revolution itself. Environmental and ethical imperatives outweigh nostalgia for traditional farming."
      },
      {
        name: "Austin",
        message: "This is unnecessary technological intervention. We should eat less meat and support sustainable traditional farming, not create factory-produced synthetic meat. We don't fully understand long-term health effects. The technology benefits corporations, not small farmers who'll lose livelihoods. Plus, many consumers find it unappetizing—people want natural food. Resources should go toward improving sustainable agriculture, not lab meat. This is a false solution that creates new problems while claiming to solve old ones."
      }
    ],
    instructions: "Your professor is teaching a class on Food Science and Ethics. Write a post responding to the professor's question. In your response, you should express and support your opinion and make a contribution to the discussion in your own words. An effective response will contain at least 100 words.",
    timeLimit: 600,
    minWords: 100,
    maxWords: 300
  },
  {
    id: "DISC_028",
    type: "academic_discussion",
    topic: "Gap Years Before College",
    professor: {
      name: "Prof. Mitchell",
      message: "In our higher education seminar, let's discuss gap years—taking a year off between high school and college. Some argue this helps students mature, gain perspective, and enter college more focused. Others worry about losing academic momentum, postponing career preparation, and socioeconomic access issues. Should taking a gap year be encouraged, discouraged, or simply presented as a neutral option? What factors should students consider?"
    },
    students: [
      {
        name: "Lauren",
        message: "Gap years should be encouraged. I took one and it transformed me. I worked, traveled, and entered college knowing why I was there and what I wanted to study. Classmates who went straight from high school often seemed lost, choosing majors because they sounded interesting rather than from genuine passion. The maturity and perspective gained made my education far more valuable. Not everyone's ready for college at 18—and that's fine."
      },
      {
        name: "Jason",
        message: "Gap years are a luxury for wealthy students. Working-class kids can't afford to delay earning potential, accumulate more living expenses, or risk losing financial aid. Taking time off makes it harder to return to academic mindset—I've seen friends take gap years and never finish college. The system is designed for continuous progression. While gap years sound nice in theory, they increase dropout risk and widen socioeconomic gaps in education completion."
      }
    ],
    instructions: "Your professor is teaching a class on Higher Education. Write a post responding to the professor's question. In your response, you should express and support your opinion and make a contribution to the discussion in your own words. An effective response will contain at least 100 words.",
    timeLimit: 600,
    minWords: 100,
    maxWords: 300
  },
  {
    id: "DISC_029",
    type: "academic_discussion",
    topic: "Automation and Employment",
    professor: {
      name: "Dr. Stevens",
      message: "Our sociology course examines automation's societal effects. Self-checkout kiosks, autonomous vehicles, and AI systems are replacing jobs from retail to transportation to professional services. Some economists predict massive unemployment; others argue automation creates new job categories we can't yet imagine. How should society prepare for increasing automation? Should we embrace it, resist it, or something in between?"
    },
    students: [
      {
        name: "Peyton",
        message: "We need proactive policies now. Retraining programs alone won't work when millions of jobs disappear simultaneously. Universal basic income becomes necessary when there's insufficient paid work for everyone. We should also consider reduced work weeks—if machines do more work, humans should work less while maintaining living standards. This requires restructuring our economy and culture away from tying human worth to employment. It's a massive shift but inevitable."
      },
      {
        name: "Morgan",
        message: "This panic is overblown—automation has always created more jobs than it destroyed. ATMs didn't eliminate bank tellers; they freed them for complex customer service. New technologies create new industries. Programmers, data scientists, drone operators—these jobs didn't exist decades ago. Instead of guaranteed income making people dependent, we should invest in education and training so workers can fill emerging roles. Human creativity and adaptability will continue generating value machines can't replicate."
      }
    ],
    instructions: "Your professor is teaching a class on Sociology. Write a post responding to the professor's question. In your response, you should express and support your opinion and make a contribution to the discussion in your own words. An effective response will contain at least 100 words.",
    timeLimit: 600,
    minWords: 100,
    maxWords: 300
  },
  {
    id: "DISC_030",
    type: "academic_discussion",
    topic: "Zoos in Modern Society",
    professor: {
      name: "Prof. Reynolds",
      message: "Our environmental ethics discussion examines zoos' role today. Zoos argue they provide conservation, education, and species preservation. Critics contend keeping animals in captivity is inherently cruel regardless of conditions, and that resources should instead support habitat preservation. In an age when people can learn about animals through technology and conservation occurs primarily in the wild, do zoos serve a valuable purpose or should they be phased out?"
    },
    students: [
      {
        name: "Skylar",
        message: "Modern accredited zoos are vital for conservation. Many species exist only because zoos maintained breeding populations when wild populations collapsed. Zoos also fund field research and habitat protection. Seeing animals in person creates emotional connections that drive conservation support—documentaries alone don't achieve this. While roadside zoos with poor conditions should close, well-run facilities like the San Diego Zoo perform critical conservation and education work. We need zoos more than ever as biodiversity collapses."
      },
      {
        name: "Quinn",
        message: "No cage replicates natural habitat. Animals in zoos display abnormal behaviors from captivity stress. The conservation argument is weak—only a tiny fraction of species benefit from captive breeding, and reintroduction success rates are low. Money spent maintaining zoos could protect vastly more animals by preserving actual habitats. Zoos exist primarily for entertainment and profit, with conservation as post-hoc justification. As society evolves, keeping sentient beings confined for our viewing should become unacceptable."
      }
    ],
    instructions: "Your professor is teaching a class on Environmental Ethics. Write a post responding to the professor's question. In your response, you should express and support your opinion and make a contribution to the discussion in your own words. An effective response will contain at least 100 words.",
    timeLimit: 600,
    minWords: 100,
    maxWords: 300
  },
];

// Export all tasks combined
export const allWriting2026Tasks = [
  ...buildSentenceTasks,
  ...emailTasks,
  ...academicDiscussionTasks,
];

// Helper function to get tasks by type
export function getTasksByType(type: WritingTaskType) {
  if (type === "build_sentence") return buildSentenceTasks;
  if (type === "email") return emailTasks;
  if (type === "academic_discussion") return academicDiscussionTasks;
  return [];
}

// Task counts
export const writingTaskCounts = {
  buildSentence: buildSentenceTasks.length,
  email: emailTasks.length,
  academicDiscussion: academicDiscussionTasks.length,
  total: allWriting2026Tasks.length,
};

