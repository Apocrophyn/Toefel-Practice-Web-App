// 2026 TOEFL iBT Reading Questions
// Based on official ETS format effective January 21, 2026
// Three task types: Complete the Words, Read in Daily Life, Read an Academic Passage

export interface CompleteWordsQuestion {
  id: string;
  taskType: "complete_words";
  passage: string;
  blanks: {
    position: number;
    partialWord: string;
    answer: string;
  }[];
}

export interface DailyLifeQuestion {
  id: string;
  taskType: "daily_life";
  passage: string;
  questions: {
    question: string;
    options: string[];
    correctAnswer: string;
    explanation: string;
  }[];
}

export interface AcademicQuestion {
  id: string;
  taskType: "academic";
  title: string;
  passage: string;
  questions: {
    question: string;
    options: string[];
    correctAnswer: string;
    explanation: string;
  }[];
}

export type ReadingQuestion = CompleteWordsQuestion | DailyLifeQuestion | AcademicQuestion;

// Legacy interface for backward compatibility with existing components
export interface LegacyReadingQuestion {
  id: string;
  taskType: "complete_words" | "daily_life" | "academic";
  passage: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

// Complete the Words Questions (fill in missing letters)
export const completeWordsQuestions: CompleteWordsQuestion[] = [
  {
    id: "CW_001",
    taskType: "complete_words",
    passage: `We mi____ think th____ prehistoric peo____ concentrated on____ on ba____ survival. However, archaeological evidence suggests they also devoted considerable time to artistic expression. Cave paintings found in France and Spain demonstrate sophisticated techniques and a deep understanding of animal anatomy.`,
    blanks: [
      { position: 0, partialWord: "mi____", answer: "might" },
      { position: 1, partialWord: "th____", answer: "that" },
      { position: 2, partialWord: "peo____", answer: "people" },
      { position: 3, partialWord: "on____", answer: "only" },
      { position: 4, partialWord: "ba____", answer: "basic" },
    ],
  },
  {
    id: "CW_002",
    taskType: "complete_words",
    passage: `The human brain is a comp____ organ responsible for contr____ all bodily functions. The cerebral cor____ handles higher cognitive proc____ such as thinking and decision-making. Meanwhile, the brain____ connects to the spinal cord and regulates automatic functions like breathing.`,
    blanks: [
      { position: 0, partialWord: "comp____", answer: "complex" },
      { position: 1, partialWord: "contr____", answer: "controlling" },
      { position: 2, partialWord: "cor____", answer: "cortex" },
      { position: 3, partialWord: "proc____", answer: "processes" },
      { position: 4, partialWord: "brain____", answer: "brainstem" },
    ],
  },
  {
    id: "CW_003",
    taskType: "complete_words",
    passage: `Climate ch____ represents one of the most sig____ challenges facing humanity. Global temp____ have risen by approximately 1.1 degrees Celsius since pre-industrial times. Scientists att____ this warming primarily to human activ____ such as burning fossil fuels.`,
    blanks: [
      { position: 0, partialWord: "ch____", answer: "change" },
      { position: 1, partialWord: "sig____", answer: "significant" },
      { position: 2, partialWord: "temp____", answer: "temperatures" },
      { position: 3, partialWord: "att____", answer: "attribute" },
      { position: 4, partialWord: "activ____", answer: "activities" },
    ],
  },
  {
    id: "CW_004",
    taskType: "complete_words",
    passage: `The Renaissance marked a per____ of cultural rebirth in Europe. Art____ like Leonardo da Vinci and Michelangelo created master____ that continue to inspire today. This era also saw adv____ in science and philos____ that shaped modern thought.`,
    blanks: [
      { position: 0, partialWord: "per____", answer: "period" },
      { position: 1, partialWord: "Art____", answer: "Artists" },
      { position: 2, partialWord: "master____", answer: "masterpieces" },
      { position: 3, partialWord: "adv____", answer: "advances" },
      { position: 4, partialWord: "philos____", answer: "philosophy" },
    ],
  },
  {
    id: "CW_005",
    taskType: "complete_words",
    passage: `Water is ess____ for all known forms of life. It cov____ approximately 71 percent of Earth's sur____. Despite its abund____ on our planet, fresh water suitable for drink____ represents less than 3 percent of the total.`,
    blanks: [
      { position: 0, partialWord: "ess____", answer: "essential" },
      { position: 1, partialWord: "cov____", answer: "covers" },
      { position: 2, partialWord: "sur____", answer: "surface" },
      { position: 3, partialWord: "abund____", answer: "abundance" },
      { position: 4, partialWord: "drink____", answer: "drinking" },
    ],
  },
];

// Read in Daily Life Questions (emails, notices, announcements - 15-150 words)
export const dailyLifeQuestions: DailyLifeQuestion[] = [
  {
    id: "DL_001",
    taskType: "daily_life",
    passage: `From: Campus Bank
To: All Account Holders
Subject: Go Paperless Today

Dear Valued Customer,

We're pleased to offer paperless billing for all accounts. To enroll, simply log into our mobile app and select "Paperless Statements" in your account settings. You'll receive email notifications when new statements are available.

Benefits include faster delivery, reduced environmental impact, and secure online access to your statement history.

Questions? Visit any branch location or call our support line at 1-800-555-0123.`,
    questions: [
      {
        question: "What type of business sent this notice?",
        options: ["A university department", "A bank", "An insurance company", "A utility provider"],
        correctAnswer: "B",
        explanation: "The email is from 'Campus Bank' as indicated in the sender information.",
      },
      {
        question: "How can customers enroll in paperless billing?",
        options: ["Visit a branch in person", "Call the support line", "Through the mobile app", "Send a written request"],
        correctAnswer: "C",
        explanation: "The notice states 'log into our mobile app and select Paperless Statements in your account settings.'",
      },
    ],
  },
  {
    id: "DL_002",
    taskType: "daily_life",
    passage: `🌿 Valley Fresh Farmers Market 🌿

EVERY SATURDAY | 8 AM - 1 PM
Main Street Plaza

This week's featured vendor: Sarah's Organic Honey!
Award-winning local honey from our own Valley bees.
Try samples at her booth near the fountain.

NEW: Evening market starting next month!
Thursdays 4-8 PM. Live music included.

Free parking available on Oak Street.
Follow us @ValleyFreshMarket for weekly updates.`,
    questions: [
      {
        question: "What is the main purpose of this post?",
        options: ["To sell honey online", "To promote a farmers market", "To announce a music festival", "To advertise parking services"],
        correctAnswer: "B",
        explanation: "The post promotes the Valley Fresh Farmers Market, highlighting its schedule and featured vendor.",
      },
      {
        question: "Why is Sarah's Organic Honey mentioned specifically?",
        options: ["It's the only vendor", "It's the featured vendor this week", "It sponsors the market", "It offers free delivery"],
        correctAnswer: "B",
        explanation: "The post states 'This week's featured vendor: Sarah's Organic Honey!'",
      },
    ],
  },
  {
    id: "DL_003",
    taskType: "daily_life",
    passage: `Art Workshop Announcement

Join us for "Watercolor Basics" at the Community Arts Center!

Dates: Every Tuesday in March (4 sessions)
Time: 6:30 PM - 8:30 PM
Location: Room 204, Arts Building
Cost: $45 (includes all materials)

What to bring:
- Old clothes or an apron (paint can get messy!)
- Notebook for taking notes

Registration closes February 25th. Space is limited to 15 participants.
Register online at communityarts.org/workshops`,
    questions: [
      {
        question: "When does the workshop take place?",
        options: ["Every Monday in March", "Every Tuesday in March", "Every Wednesday in March", "Every weekend in March"],
        correctAnswer: "B",
        explanation: "The announcement clearly states 'Every Tuesday in March (4 sessions).'",
      },
      {
        question: "What must participants bring to the workshop?",
        options: ["Paint brushes and paper", "A camera", "Old clothes or an apron", "Their own watercolors"],
        correctAnswer: "C",
        explanation: "Under 'What to bring' the announcement lists 'Old clothes or an apron (paint can get messy!)'",
      },
    ],
  },
  {
    id: "DL_004",
    taskType: "daily_life",
    passage: `STUDENT HOUSING NOTICE

Maintenance Schedule - March 15-17

The following work will be performed in all dormitory buildings:
• Fire alarm system testing (March 15, 9 AM - 4 PM)
• HVAC filter replacement (March 16-17)

During fire alarm testing, brief alarms will sound periodically. No evacuation is required during scheduled tests.

Please ensure your room is accessible for HVAC maintenance. Residents may remain in rooms during this work.

Questions? Contact housing@university.edu`,
    questions: [
      {
        question: "What should students expect on March 15?",
        options: ["Power outages", "Water shut-off", "Brief alarm sounds", "Building evacuation"],
        correctAnswer: "C",
        explanation: "The notice states 'brief alarms will sound periodically' during fire alarm testing on March 15.",
      },
      {
        question: "What action is required from students during HVAC maintenance?",
        options: ["Leave the building", "Ensure room is accessible", "Turn off all appliances", "Open all windows"],
        correctAnswer: "B",
        explanation: "The notice states 'Please ensure your room is accessible for HVAC maintenance.'",
      },
    ],
  },
  {
    id: "DL_005",
    taskType: "daily_life",
    passage: `FROM: Professor Martinez
TO: Biology 201 Students
SUBJECT: Field Trip Reminder

Hi everyone,

Just a reminder about our wetlands field trip this Friday:

• Meet at the Science Building entrance at 7:45 AM
• Bus departs at 8:00 AM sharp - don't be late!
• Wear waterproof boots and bring sunscreen
• Lunch will be provided
• We return by 4:00 PM

If you haven't submitted your permission form, please do so by Wednesday.

See you there!
Prof. Martinez`,
    questions: [
      {
        question: "Where should students meet for the field trip?",
        options: ["At the wetlands", "At the bus station", "At the Science Building entrance", "At the campus center"],
        correctAnswer: "C",
        explanation: "The email states 'Meet at the Science Building entrance at 7:45 AM.'",
      },
      {
        question: "What deadline does the professor mention?",
        options: ["Friday for payment", "Wednesday for permission forms", "Thursday for lunch orders", "Tuesday for attendance"],
        correctAnswer: "B",
        explanation: "The professor states 'If you haven't submitted your permission form, please do so by Wednesday.'",
      },
    ],
  },
  {
    id: "DL_006",
    taskType: "daily_life",
    passage: `COFFEE CORNER CAFÉ
Weekly Specials - Valid Mon-Fri

☕ Morning Deal (7-9 AM)
Any large coffee + pastry = $5.50

🥗 Lunch Combo (11 AM - 2 PM)
Sandwich + soup + drink = $12.00

🎂 Student Discount
Show valid student ID for 10% off any purchase

NEW! Mobile ordering available
Skip the line - order through our app!

Located in the Student Union, Ground Floor
Hours: 7 AM - 8 PM weekdays | 9 AM - 5 PM weekends`,
    questions: [
      {
        question: "What time does the Morning Deal end?",
        options: ["8 AM", "9 AM", "10 AM", "11 AM"],
        correctAnswer: "B",
        explanation: "The Morning Deal hours are listed as '7-9 AM.'",
      },
      {
        question: "How much discount do students receive?",
        options: ["5%", "10%", "15%", "20%"],
        correctAnswer: "B",
        explanation: "The Student Discount section states 'Show valid student ID for 10% off any purchase.'",
      },
    ],
  },
];

// Import the massive collection of 400+ academic passages
import { massiveReadingQuestions } from "./reading-massive";

// Read an Academic Passage Questions (approximately 200 words with 5 questions)
// We now use the massive generated dataset instead of the small sample
// Cast to AcademicQuestion[] as we know the content type, even if the generic export is wider
export const academicQuestions: AcademicQuestion[] = massiveReadingQuestions as unknown as AcademicQuestion[];

// Convert to legacy format for backward compatibility
export const readingQuestions: LegacyReadingQuestion[] = [
  // Daily Life Questions
  ...dailyLifeQuestions.flatMap((dlq) =>
    dlq.questions.map((q, i) => ({
      id: `${dlq.id}_Q${i + 1}`,
      taskType: "daily_life" as const,
      passage: dlq.passage,
      question: q.question,
      options: q.options,
      correctAnswer: q.correctAnswer,
      explanation: q.explanation,
    }))
  ),
  // Academic Questions (from massive dataset)
  ...academicQuestions.flatMap((aq) =>
    (aq.questions || []).map((q, i) => ({
      id: `${aq.id}_Q${i + 1}`,
      taskType: "academic" as const,
      passage: `${aq.title}\n\n${aq.passage}`,
      question: q.question,
      options: q.options,
      correctAnswer: q.correctAnswer,
      explanation: q.explanation,
    }))
  ),
];

// All question types are already exported above with their definitions
