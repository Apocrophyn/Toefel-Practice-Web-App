// TOEFL iBT 2026 Writing Questions Bank
// 100+ questions following official format (no difficulty levels)
// Task Types: Build a Sentence, Write an Email, Academic Discussion

// ==================== TYPE DEFINITIONS ====================

export interface BuildSentenceQuestion {
  id: string;
  taskType: "build_sentence";
  grammarFocus: string;
  context: string;
  scrambledWords: string[];
  correctSentence: string;
  alternateCorrect?: string[];
  explanation: string;
}

export interface EmailQuestion {
  id: string;
  taskType: "email";
  category: string;
  scenario: string;
  requirements: string[];
  timeLimit: number;
  minWords: number;
  maxWords: number;
  sampleResponse: string;
  keyPoints: string[];
}

export interface DiscussionQuestion {
  id: string;
  taskType: "discussion";
  topic: string;
  professorPrompt: string;
  studentResponses: {
    name: string;
    response: string;
  }[];
  timeLimit: number;
  minWords: number;
  sampleResponse: string;
  keyPoints: string[];
}

export type WritingQuestion = BuildSentenceQuestion | EmailQuestion | DiscussionQuestion;

// ==================== BUILD A SENTENCE (60 questions) ====================

export const buildSentenceQuestions: BuildSentenceQuestion[] = [
  // Present Tense
  {
    id: "BS_001",
    taskType: "build_sentence",
    grammarFocus: "Simple Present",
    context: "Daily routine",
    scrambledWords: ["every", "the", "morning", "takes", "bus", "she", "to", "work"],
    correctSentence: "She takes the bus to work every morning.",
    alternateCorrect: ["Every morning she takes the bus to work."],
    explanation: "Simple present tense is used for habitual actions. 'Takes' agrees with the subject 'she.'"
  },
  {
    id: "BS_002",
    taskType: "build_sentence",
    grammarFocus: "Present Continuous",
    context: "Current action",
    scrambledWords: ["the", "students", "for", "studying", "are", "exam", "their", "final"],
    correctSentence: "The students are studying for their final exam.",
    explanation: "Present continuous (are + verb-ing) is used for actions happening now."
  },
  {
    id: "BS_003",
    taskType: "build_sentence",
    grammarFocus: "Present Perfect",
    context: "Life experience",
    scrambledWords: ["has", "never", "she", "to", "been", "Europe"],
    correctSentence: "She has never been to Europe.",
    explanation: "Present perfect with 'never' expresses an experience that hasn't happened in one's life."
  },
  {
    id: "BS_004",
    taskType: "build_sentence",
    grammarFocus: "Simple Present",
    context: "General truth",
    scrambledWords: ["rises", "the", "east", "in", "sun", "the"],
    correctSentence: "The sun rises in the east.",
    explanation: "Simple present is used for facts and general truths."
  },
  {
    id: "BS_005",
    taskType: "build_sentence",
    grammarFocus: "Present Perfect Continuous",
    context: "Duration of action",
    scrambledWords: ["have", "waiting", "been", "for", "we", "two", "hours"],
    correctSentence: "We have been waiting for two hours.",
    explanation: "Present perfect continuous emphasizes the duration of an ongoing action."
  },
  // Past Tense
  {
    id: "BS_006",
    taskType: "build_sentence",
    grammarFocus: "Simple Past",
    context: "Completed action",
    scrambledWords: ["yesterday", "finished", "report", "the", "he", "his"],
    correctSentence: "He finished his report yesterday.",
    alternateCorrect: ["Yesterday he finished his report."],
    explanation: "Simple past indicates a completed action at a specific time in the past."
  },
  {
    id: "BS_007",
    taskType: "build_sentence",
    grammarFocus: "Past Continuous",
    context: "Interrupted action",
    scrambledWords: ["was", "when", "sleeping", "phone", "rang", "the", "I"],
    correctSentence: "I was sleeping when the phone rang.",
    explanation: "Past continuous describes an ongoing action interrupted by another action."
  },
  {
    id: "BS_008",
    taskType: "build_sentence",
    grammarFocus: "Past Perfect",
    context: "Earlier past action",
    scrambledWords: ["had", "already", "they", "when", "left", "arrived", "we"],
    correctSentence: "They had already left when we arrived.",
    explanation: "Past perfect shows an action completed before another past action."
  },
  {
    id: "BS_009",
    taskType: "build_sentence",
    grammarFocus: "Simple Past",
    context: "Past event",
    scrambledWords: ["the", "last", "conference", "attended", "she", "month"],
    correctSentence: "She attended the conference last month.",
    explanation: "Simple past with a specific time marker (last month)."
  },
  {
    id: "BS_010",
    taskType: "build_sentence",
    grammarFocus: "Past Perfect Continuous",
    context: "Duration before past event",
    scrambledWords: ["for", "years", "had", "been", "working", "five", "he", "there"],
    correctSentence: "He had been working there for five years.",
    explanation: "Past perfect continuous emphasizes duration before a past point."
  },
  // Future Tense
  {
    id: "BS_011",
    taskType: "build_sentence",
    grammarFocus: "Simple Future",
    context: "Prediction",
    scrambledWords: ["tomorrow", "rain", "will", "probably", "it"],
    correctSentence: "It will probably rain tomorrow.",
    explanation: "Simple future with 'will' for predictions."
  },
  {
    id: "BS_012",
    taskType: "build_sentence",
    grammarFocus: "Future Continuous",
    context: "Future ongoing action",
    scrambledWords: ["this", "time", "tomorrow", "flying", "will", "be", "to", "Paris", "I"],
    correctSentence: "This time tomorrow I will be flying to Paris.",
    explanation: "Future continuous for an action in progress at a future time."
  },
  {
    id: "BS_013",
    taskType: "build_sentence",
    grammarFocus: "Going to Future",
    context: "Plan",
    scrambledWords: ["are", "going", "they", "new", "to", "a", "buy", "house"],
    correctSentence: "They are going to buy a new house.",
    explanation: "'Going to' is used for planned future actions."
  },
  {
    id: "BS_014",
    taskType: "build_sentence",
    grammarFocus: "Future Perfect",
    context: "Completed by future time",
    scrambledWords: ["will", "finished", "by", "have", "Friday", "I", "project", "the"],
    correctSentence: "I will have finished the project by Friday.",
    explanation: "Future perfect for actions completed before a future time."
  },
  {
    id: "BS_015",
    taskType: "build_sentence",
    grammarFocus: "Present Simple for Future",
    context: "Scheduled event",
    scrambledWords: ["at", "the", "train", "leaves", "9:00", "tomorrow"],
    correctSentence: "The train leaves at 9:00 tomorrow.",
    explanation: "Present simple can be used for scheduled future events."
  },
  // Conditionals
  {
    id: "BS_016",
    taskType: "build_sentence",
    grammarFocus: "First Conditional",
    context: "Real possibility",
    scrambledWords: ["if", "harder", "you", "will", "study", "pass", "you"],
    correctSentence: "If you study harder, you will pass.",
    explanation: "First conditional for real/possible situations."
  },
  {
    id: "BS_017",
    taskType: "build_sentence",
    grammarFocus: "Second Conditional",
    context: "Hypothetical situation",
    scrambledWords: ["if", "won", "I", "the", "lottery", "world", "travel", "I", "would", "the"],
    correctSentence: "If I won the lottery, I would travel the world.",
    explanation: "Second conditional for unlikely or hypothetical situations."
  },
  {
    id: "BS_018",
    taskType: "build_sentence",
    grammarFocus: "Third Conditional",
    context: "Unreal past",
    scrambledWords: ["if", "earlier", "had", "left", "we", "the", "missed", "not", "would", "have", "train"],
    correctSentence: "If we had left earlier, we would not have missed the train.",
    explanation: "Third conditional for unreal past situations."
  },
  {
    id: "BS_019",
    taskType: "build_sentence",
    grammarFocus: "Zero Conditional",
    context: "General truth",
    scrambledWords: ["if", "water", "heat", "boils", "it", "you"],
    correctSentence: "If you heat water, it boils.",
    explanation: "Zero conditional for facts and general truths."
  },
  {
    id: "BS_020",
    taskType: "build_sentence",
    grammarFocus: "Mixed Conditional",
    context: "Past condition, present result",
    scrambledWords: ["if", "studied", "had", "medicine", "she", "be", "a", "doctor", "now", "would"],
    correctSentence: "If she had studied medicine, she would be a doctor now.",
    explanation: "Mixed conditional combines past condition with present result."
  },
  // Passive Voice
  {
    id: "BS_021",
    taskType: "build_sentence",
    grammarFocus: "Passive Voice Present",
    context: "Process description",
    scrambledWords: ["in", "is", "coffee", "many", "grown", "countries"],
    correctSentence: "Coffee is grown in many countries.",
    explanation: "Passive voice when the action is more important than the doer."
  },
  {
    id: "BS_022",
    taskType: "build_sentence",
    grammarFocus: "Passive Voice Past",
    context: "Historical event",
    scrambledWords: ["was", "the", "Eiffel", "Tower", "in", "1889", "built"],
    correctSentence: "The Eiffel Tower was built in 1889.",
    explanation: "Passive voice past for historical facts."
  },
  {
    id: "BS_023",
    taskType: "build_sentence",
    grammarFocus: "Passive Voice Future",
    context: "Future plan",
    scrambledWords: ["will", "be", "new", "the", "opened", "next", "hospital", "year"],
    correctSentence: "The new hospital will be opened next year.",
    explanation: "Passive voice future for planned events."
  },
  {
    id: "BS_024",
    taskType: "build_sentence",
    grammarFocus: "Passive Voice Perfect",
    context: "Recent completion",
    scrambledWords: ["has", "been", "the", "project", "completed"],
    correctSentence: "The project has been completed.",
    explanation: "Present perfect passive for recently completed actions."
  },
  {
    id: "BS_025",
    taskType: "build_sentence",
    grammarFocus: "Passive with Modal",
    context: "Possibility",
    scrambledWords: ["might", "be", "the", "meeting", "postponed"],
    correctSentence: "The meeting might be postponed.",
    explanation: "Modal + be + past participle for passive with modals."
  },
  // Modals
  {
    id: "BS_026",
    taskType: "build_sentence",
    grammarFocus: "Modal - Ability",
    context: "Skill",
    scrambledWords: ["can", "languages", "speak", "she", "three"],
    correctSentence: "She can speak three languages.",
    explanation: "'Can' expresses ability or skill."
  },
  {
    id: "BS_027",
    taskType: "build_sentence",
    grammarFocus: "Modal - Obligation",
    context: "Requirement",
    scrambledWords: ["must", "students", "assignments", "submit", "their", "Friday", "by"],
    correctSentence: "Students must submit their assignments by Friday.",
    explanation: "'Must' expresses strong obligation or requirement."
  },
  {
    id: "BS_028",
    taskType: "build_sentence",
    grammarFocus: "Modal - Permission",
    context: "Request",
    scrambledWords: ["may", "I", "your", "borrow", "pen", "please"],
    correctSentence: "May I please borrow your pen?",
    alternateCorrect: ["May I borrow your pen, please?"],
    explanation: "'May' is used for formal permission requests."
  },
  {
    id: "BS_029",
    taskType: "build_sentence",
    grammarFocus: "Modal - Advice",
    context: "Suggestion",
    scrambledWords: ["should", "more", "exercise", "you", "regularly"],
    correctSentence: "You should exercise more regularly.",
    explanation: "'Should' is used for giving advice."
  },
  {
    id: "BS_030",
    taskType: "build_sentence",
    grammarFocus: "Modal - Possibility",
    context: "Uncertainty",
    scrambledWords: ["could", "traffic", "be", "late", "there", "heavy"],
    correctSentence: "There could be heavy traffic.",
    explanation: "'Could' expresses possibility."
  },
  // Relative Clauses
  {
    id: "BS_031",
    taskType: "build_sentence",
    grammarFocus: "Relative Clause - Who",
    context: "Defining people",
    scrambledWords: ["the", "woman", "who", "lives", "is", "next", "door", "a", "doctor"],
    correctSentence: "The woman who lives next door is a doctor.",
    explanation: "'Who' introduces a relative clause about people."
  },
  {
    id: "BS_032",
    taskType: "build_sentence",
    grammarFocus: "Relative Clause - Which",
    context: "Defining things",
    scrambledWords: ["the", "book", "which", "bought", "I", "very", "is", "interesting"],
    correctSentence: "The book which I bought is very interesting.",
    alternateCorrect: ["The book that I bought is very interesting."],
    explanation: "'Which' introduces a relative clause about things."
  },
  {
    id: "BS_033",
    taskType: "build_sentence",
    grammarFocus: "Relative Clause - Where",
    context: "Defining places",
    scrambledWords: ["this", "the", "is", "restaurant", "where", "first", "we", "met"],
    correctSentence: "This is the restaurant where we first met.",
    explanation: "'Where' introduces a relative clause about places."
  },
  {
    id: "BS_034",
    taskType: "build_sentence",
    grammarFocus: "Relative Clause - Whose",
    context: "Possession",
    scrambledWords: ["the", "student", "whose", "was", "project", "best", "won", "the", "prize"],
    correctSentence: "The student whose project was best won the prize.",
    explanation: "'Whose' shows possession in relative clauses."
  },
  {
    id: "BS_035",
    taskType: "build_sentence",
    grammarFocus: "Non-defining Relative Clause",
    context: "Additional information",
    scrambledWords: ["my", "brother", "who", "in", "lives", "London", "is", "visiting", "us"],
    correctSentence: "My brother, who lives in London, is visiting us.",
    explanation: "Non-defining relative clauses add extra information and use commas."
  },
  // Reported Speech
  {
    id: "BS_036",
    taskType: "build_sentence",
    grammarFocus: "Reported Speech - Statement",
    context: "Reporting what someone said",
    scrambledWords: ["said", "she", "that", "was", "she", "tired"],
    correctSentence: "She said that she was tired.",
    explanation: "Reported speech shifts tense back (is → was)."
  },
  {
    id: "BS_037",
    taskType: "build_sentence",
    grammarFocus: "Reported Speech - Question",
    context: "Reporting a question",
    scrambledWords: ["asked", "he", "where", "I", "lived"],
    correctSentence: "He asked where I lived.",
    explanation: "Reported questions use statement word order."
  },
  {
    id: "BS_038",
    taskType: "build_sentence",
    grammarFocus: "Reported Speech - Command",
    context: "Reporting an instruction",
    scrambledWords: ["told", "the", "teacher", "to", "students", "be", "the", "quiet"],
    correctSentence: "The teacher told the students to be quiet.",
    explanation: "Reported commands use 'tell/ask + object + to-infinitive.'"
  },
  {
    id: "BS_039",
    taskType: "build_sentence",
    grammarFocus: "Reported Speech - Yes/No Question",
    context: "Reporting yes/no question",
    scrambledWords: ["asked", "she", "if", "I", "coming", "was", "to", "party", "the"],
    correctSentence: "She asked if I was coming to the party.",
    explanation: "'If' or 'whether' is used to report yes/no questions."
  },
  {
    id: "BS_040",
    taskType: "build_sentence",
    grammarFocus: "Reported Speech - Suggestion",
    context: "Reporting a suggestion",
    scrambledWords: ["suggested", "he", "that", "we", "take", "a", "break"],
    correctSentence: "He suggested that we take a break.",
    explanation: "'Suggested that' is followed by base verb (subjunctive)."
  },
  // Comparatives and Superlatives
  {
    id: "BS_041",
    taskType: "build_sentence",
    grammarFocus: "Comparative",
    context: "Comparing two things",
    scrambledWords: ["is", "this", "book", "than", "more", "interesting", "that", "one"],
    correctSentence: "This book is more interesting than that one.",
    explanation: "Comparative form for comparing two items."
  },
  {
    id: "BS_042",
    taskType: "build_sentence",
    grammarFocus: "Superlative",
    context: "Highest degree",
    scrambledWords: ["is", "the", "tallest", "Mount", "Everest", "mountain", "world", "in", "the"],
    correctSentence: "Mount Everest is the tallest mountain in the world.",
    explanation: "Superlative form for the highest degree."
  },
  {
    id: "BS_043",
    taskType: "build_sentence",
    grammarFocus: "As...as",
    context: "Equal comparison",
    scrambledWords: ["is", "as", "she", "as", "tall", "her", "brother"],
    correctSentence: "She is as tall as her brother.",
    explanation: "'As...as' is used for equal comparisons."
  },
  {
    id: "BS_044",
    taskType: "build_sentence",
    grammarFocus: "Less...than",
    context: "Lesser comparison",
    scrambledWords: ["this", "is", "less", "movie", "than", "exciting", "I", "expected"],
    correctSentence: "This movie is less exciting than I expected.",
    explanation: "'Less...than' for negative comparisons."
  },
  {
    id: "BS_045",
    taskType: "build_sentence",
    grammarFocus: "The more...the more",
    context: "Parallel increase",
    scrambledWords: ["the", "more", "practice", "you", "the", "better", "get", "you"],
    correctSentence: "The more you practice, the better you get.",
    explanation: "'The more...the more' shows parallel change."
  },
  // Gerunds and Infinitives
  {
    id: "BS_046",
    taskType: "build_sentence",
    grammarFocus: "Gerund as Subject",
    context: "Activity as subject",
    scrambledWords: ["swimming", "is", "exercise", "great", "for", "health"],
    correctSentence: "Swimming is great exercise for health.",
    explanation: "Gerunds can function as the subject of a sentence."
  },
  {
    id: "BS_047",
    taskType: "build_sentence",
    grammarFocus: "Verb + Gerund",
    context: "Enjoy + verb-ing",
    scrambledWords: ["enjoys", "she", "classical", "music", "listening", "to"],
    correctSentence: "She enjoys listening to classical music.",
    explanation: "'Enjoy' is followed by a gerund, not an infinitive."
  },
  {
    id: "BS_048",
    taskType: "build_sentence",
    grammarFocus: "Verb + Infinitive",
    context: "Want + to-infinitive",
    scrambledWords: ["wants", "he", "to", "become", "an", "engineer"],
    correctSentence: "He wants to become an engineer.",
    explanation: "'Want' is followed by an infinitive."
  },
  {
    id: "BS_049",
    taskType: "build_sentence",
    grammarFocus: "Infinitive of Purpose",
    context: "Expressing purpose",
    scrambledWords: ["went", "she", "to", "the", "library", "to", "study"],
    correctSentence: "She went to the library to study.",
    explanation: "Infinitive can express purpose (why someone does something)."
  },
  {
    id: "BS_050",
    taskType: "build_sentence",
    grammarFocus: "Verb + Object + Infinitive",
    context: "Persuade pattern",
    scrambledWords: ["persuaded", "she", "him", "to", "apply", "for", "the", "job"],
    correctSentence: "She persuaded him to apply for the job.",
    explanation: "Some verbs take object + infinitive pattern."
  },
  // Phrasal Verbs
  {
    id: "BS_051",
    taskType: "build_sentence",
    grammarFocus: "Phrasal Verb - Separable",
    context: "Turn off",
    scrambledWords: ["please", "off", "turn", "the", "lights", "before", "leaving"],
    correctSentence: "Please turn off the lights before leaving.",
    alternateCorrect: ["Please turn the lights off before leaving."],
    explanation: "Separable phrasal verbs can have the object between or after."
  },
  {
    id: "BS_052",
    taskType: "build_sentence",
    grammarFocus: "Phrasal Verb - Inseparable",
    context: "Look after",
    scrambledWords: ["will", "after", "look", "who", "your", "plants", "while", "away", "are", "you"],
    correctSentence: "Who will look after your plants while you are away?",
    explanation: "Inseparable phrasal verbs keep the particles together."
  },
  {
    id: "BS_053",
    taskType: "build_sentence",
    grammarFocus: "Phrasal Verb - Three-word",
    context: "Look forward to",
    scrambledWords: ["looking", "I", "am", "forward", "to", "meeting", "you"],
    correctSentence: "I am looking forward to meeting you.",
    explanation: "'Look forward to' is followed by a gerund."
  },
  {
    id: "BS_054",
    taskType: "build_sentence",
    grammarFocus: "Phrasal Verb",
    context: "Give up",
    scrambledWords: ["finally", "gave", "he", "up", "trying", "to", "fix", "the", "car"],
    correctSentence: "He finally gave up trying to fix the car.",
    explanation: "'Give up' means to stop trying."
  },
  {
    id: "BS_055",
    taskType: "build_sentence",
    grammarFocus: "Phrasal Verb",
    context: "Put off",
    scrambledWords: ["keep", "don't", "putting", "off", "your", "homework"],
    correctSentence: "Don't keep putting off your homework.",
    explanation: "'Put off' means to postpone."
  },
  // Complex Structures
  {
    id: "BS_056",
    taskType: "build_sentence",
    grammarFocus: "Cleft Sentence",
    context: "Emphasis",
    scrambledWords: ["was", "it", "the", "rain", "that", "caused", "delay", "the"],
    correctSentence: "It was the rain that caused the delay.",
    explanation: "Cleft sentences emphasize a particular element."
  },
  {
    id: "BS_057",
    taskType: "build_sentence",
    grammarFocus: "Inversion",
    context: "Negative adverb",
    scrambledWords: ["never", "have", "I", "seen", "beautiful", "such", "a", "sunset"],
    correctSentence: "Never have I seen such a beautiful sunset.",
    explanation: "Inversion occurs after negative adverbs at the start."
  },
  {
    id: "BS_058",
    taskType: "build_sentence",
    grammarFocus: "Participle Clause",
    context: "Reduced relative clause",
    scrambledWords: ["the", "man", "standing", "at", "the", "door", "is", "my", "uncle"],
    correctSentence: "The man standing at the door is my uncle.",
    explanation: "Present participle can replace a relative clause."
  },
  {
    id: "BS_059",
    taskType: "build_sentence",
    grammarFocus: "Wish + Past",
    context: "Unreal present",
    scrambledWords: ["wish", "I", "had", "more", "time", "to", "travel"],
    correctSentence: "I wish I had more time to travel.",
    explanation: "'Wish + past tense' expresses unreal present situations."
  },
  {
    id: "BS_060",
    taskType: "build_sentence",
    grammarFocus: "Unless",
    context: "Negative condition",
    scrambledWords: ["unless", "you", "hurry", "will", "miss", "you", "the", "bus"],
    correctSentence: "Unless you hurry, you will miss the bus.",
    explanation: "'Unless' means 'if not' in conditional sentences."
  }
];

// ==================== EMAIL QUESTIONS (25 questions) ====================

export const emailQuestions: EmailQuestion[] = [
  {
    id: "EM_001",
    taskType: "email",
    category: "Request",
    scenario: "You need to request an extension on a paper deadline from your professor. Your computer crashed and you lost some of your work. Write an email explaining the situation and asking for an extension.",
    requirements: [
      "Explain what happened to your computer",
      "Describe how much work you lost",
      "Request a specific extension period",
      "Express appreciation for consideration"
    ],
    timeLimit: 420,
    minWords: 80,
    maxWords: 120,
    sampleResponse: "Dear Professor Johnson,\n\nI am writing to request an extension for the research paper due this Friday. Unfortunately, my laptop crashed yesterday, and despite my efforts to recover the files, I lost approximately half of my completed draft.\n\nI have been working diligently on this assignment and had made significant progress before this technical issue occurred. I have already scheduled an appointment with IT services to attempt data recovery.\n\nWould it be possible to have an additional five days to complete and submit my paper? I assure you that I will use this time to produce quality work.\n\nThank you for understanding my situation. I greatly appreciate your consideration.\n\nSincerely,\n[Your name]",
    keyPoints: ["Clear explanation of the problem", "Specific extension request", "Professional tone", "Gratitude expressed"]
  },
  {
    id: "EM_002",
    taskType: "email",
    category: "Complaint",
    scenario: "The heating in your dormitory room has been broken for a week. You have contacted the maintenance department twice but no one has come to fix it. Write an email to the housing office expressing your concern.",
    requirements: [
      "Describe the problem with the heating",
      "Mention your previous attempts to get help",
      "Explain how this affects your daily life",
      "Request urgent action"
    ],
    timeLimit: 420,
    minWords: 80,
    maxWords: 120,
    sampleResponse: "Dear Housing Office,\n\nI am writing to express my concern about the heating system in my dormitory room (Room 312, Anderson Hall). The heating has been completely non-functional for over a week now.\n\nI have submitted two maintenance requests, on October 5th and October 8th, but no one has come to address the issue. With temperatures dropping below freezing at night, this situation has become unbearable. I am unable to study comfortably in my room, and I am concerned about getting sick.\n\nI kindly request that this matter be treated as urgent and that a technician be sent as soon as possible.\n\nThank you for your immediate attention to this matter.\n\nSincerely,\n[Your name]",
    keyPoints: ["Specific problem description", "Documentation of previous contact", "Impact on daily life", "Urgent action request"]
  },
  {
    id: "EM_003",
    taskType: "email",
    category: "Inquiry",
    scenario: "You are interested in joining a student research lab. Write an email to a professor whose work interests you, expressing your interest in joining their lab.",
    requirements: [
      "Introduce yourself and your background",
      "Explain why you are interested in their research",
      "Describe relevant skills or experience",
      "Ask about opportunities to join"
    ],
    timeLimit: 420,
    minWords: 80,
    maxWords: 120,
    sampleResponse: "Dear Dr. Williams,\n\nI am a second-year biology student at State University, and I am writing to express my strong interest in joining your research lab.\n\nYour recent publication on gene expression in marine organisms particularly caught my attention, as it aligns with my interest in molecular biology and environmental science. I have completed courses in genetics and biochemistry, and I have basic laboratory skills from my introductory biology lab course.\n\nI am eager to gain hands-on research experience and would welcome the opportunity to contribute to your team's work. Would it be possible to schedule a meeting to discuss any available positions in your lab?\n\nThank you for considering my request.\n\nBest regards,\n[Your name]",
    keyPoints: ["Clear self-introduction", "Specific interest in research", "Relevant qualifications", "Polite request for opportunity"]
  },
  {
    id: "EM_004",
    taskType: "email",
    category: "Apology",
    scenario: "You accidentally missed an important group project meeting. Your group members are upset because you had an important part to present. Write an email apologizing to your group.",
    requirements: [
      "Sincerely apologize for missing the meeting",
      "Explain what happened (briefly)",
      "Take responsibility for your absence",
      "Propose how to make up for it"
    ],
    timeLimit: 420,
    minWords: 80,
    maxWords: 120,
    sampleResponse: "Dear Team,\n\nI sincerely apologize for missing our group meeting yesterday. I understand you were counting on me to present the market analysis section, and my absence put everyone in a difficult position.\n\nDue to a family emergency, I had to leave campus unexpectedly and was unable to contact anyone in time. I take full responsibility for not having a backup plan in place.\n\nTo make up for this, I have prepared detailed notes on my section that I can share immediately. I am also willing to take on additional work for the next phase of our project. Could we schedule a brief meeting so I can catch up on what I missed?\n\nAgain, I am truly sorry for any inconvenience caused.\n\n[Your name]",
    keyPoints: ["Sincere apology", "Brief explanation", "Taking responsibility", "Concrete solution proposed"]
  },
  {
    id: "EM_005",
    taskType: "email",
    category: "Thank You",
    scenario: "A professor wrote you a recommendation letter for a graduate school application. Write a thank-you email expressing your gratitude.",
    requirements: [
      "Thank the professor specifically for the letter",
      "Mention the program you applied to",
      "Express how their support has helped you",
      "Offer to update them on the outcome"
    ],
    timeLimit: 420,
    minWords: 80,
    maxWords: 120,
    sampleResponse: "Dear Professor Chen,\n\nThank you so much for taking the time to write a recommendation letter for my application to the Master's program in Environmental Science at Stanford University.\n\nYour support throughout my undergraduate studies has been invaluable, and I am deeply grateful for your willingness to speak on my behalf. The research experience I gained in your lab and the guidance you provided have been instrumental in shaping my academic goals.\n\nI will be sure to let you know the outcome of my application as soon as I receive a decision. Thank you again for your generous support and mentorship.\n\nWith sincere gratitude,\n[Your name]",
    keyPoints: ["Specific thanks for the letter", "Mention of program", "Appreciation for support", "Promise to follow up"]
  },
  {
    id: "EM_006",
    taskType: "email",
    category: "Request",
    scenario: "You want to change from one section of a class to another due to a schedule conflict with your work hours. Write an email to the academic advisor requesting this change.",
    requirements: [
      "Explain which course sections you want to change",
      "Describe the scheduling conflict",
      "Show that you've checked the new section has space",
      "Request help with the process"
    ],
    timeLimit: 420,
    minWords: 80,
    maxWords: 120,
    sampleResponse: "Dear Academic Advisor,\n\nI am writing to request a section change for my Introduction to Psychology course (PSY 101). I am currently enrolled in Section A (MWF 2:00-3:00 PM) and would like to transfer to Section B (TTh 10:00-11:30 AM).\n\nMy employer recently changed my work schedule, and I now have shifts on Monday, Wednesday, and Friday afternoons, which conflict with my current class time. I have verified that Section B has available seats through the online registration system.\n\nCould you please assist me with making this change? I would greatly appreciate your help in resolving this scheduling conflict before the add/drop deadline.\n\nThank you for your assistance.\n\nBest regards,\n[Your name]",
    keyPoints: ["Clear section change request", "Valid reason", "Preparation shown", "Polite request for help"]
  },
  {
    id: "EM_007",
    taskType: "email",
    category: "Complaint",
    scenario: "You ordered textbooks online two weeks ago and they still haven't arrived. Your classes have already started. Write an email to the bookstore customer service.",
    requirements: [
      "Provide your order details",
      "Explain the timeline and delay",
      "Describe how this affects your studies",
      "Request a specific resolution"
    ],
    timeLimit: 420,
    minWords: 80,
    maxWords: 120,
    sampleResponse: "Dear Customer Service,\n\nI am writing regarding Order #12345, placed on January 5th for three textbooks required for my spring semester courses. Despite the estimated delivery date of January 10th, I have not yet received my order.\n\nMy classes began on January 15th, and I am now a week behind in my readings because I do not have the necessary materials. I have been unable to complete homework assignments and fully participate in class discussions.\n\nI request either expedited shipping of my order at no additional cost or a full refund so I can purchase the books locally. Please update me on the status of my order as soon as possible.\n\nThank you for your prompt attention.\n\n[Your name]",
    keyPoints: ["Order details provided", "Clear timeline", "Impact explained", "Specific resolution requested"]
  },
  {
    id: "EM_008",
    taskType: "email",
    category: "Inquiry",
    scenario: "You are a prospective student interested in visiting the campus. Write an email to the admissions office asking about campus tour options.",
    requirements: [
      "Express interest in the university",
      "Ask about tour dates and times",
      "Inquire about what the tour includes",
      "Ask about any special programs for visiting students"
    ],
    timeLimit: 420,
    minWords: 80,
    maxWords: 120,
    sampleResponse: "Dear Admissions Office,\n\nI am a high school senior interested in attending State University and would like to visit your campus before making my college decision.\n\nCould you please provide information about your campus tour options? Specifically, I would like to know:\n- What dates and times are tours available?\n- What locations and facilities are included in the tour?\n- Are there opportunities to sit in on a class or meet with current students?\n- Do you offer any overnight programs for prospective students?\n\nI am planning to visit during my spring break in March and hope to schedule a comprehensive visit.\n\nThank you for your help. I look forward to learning more about State University.\n\nBest regards,\n[Your name]",
    keyPoints: ["Clear interest expressed", "Specific questions asked", "Proposed timeline", "Professional closing"]
  },
  {
    id: "EM_009",
    taskType: "email",
    category: "Request",
    scenario: "You need to request your official transcript to be sent to a potential employer. Write an email to the registrar's office.",
    requirements: [
      "Request official transcript",
      "Provide your student information",
      "Specify where to send it",
      "Ask about processing time and fees"
    ],
    timeLimit: 420,
    minWords: 80,
    maxWords: 120,
    sampleResponse: "Dear Registrar's Office,\n\nI am writing to request that an official copy of my academic transcript be sent to a potential employer. My student ID is 123456789, and I graduated in May 2025 with a Bachelor's degree in Computer Science.\n\nPlease send the transcript to:\nTech Solutions Inc.\nAttn: Human Resources\n123 Innovation Drive\nSan Jose, CA 95110\n\nCould you please inform me of the processing fee and expected delivery time? The employer has requested this document as part of their hiring process, and I would like to ensure it arrives promptly.\n\nThank you for your assistance.\n\nSincerely,\n[Your name]",
    keyPoints: ["Clear request", "Complete student information", "Recipient address provided", "Timeline question"]
  },
  {
    id: "EM_010",
    taskType: "email",
    category: "Apology",
    scenario: "You need to cancel a tutoring appointment at the last minute due to an unexpected illness. Write an email to your tutor apologizing and requesting to reschedule.",
    requirements: [
      "Apologize for the late cancellation",
      "Briefly explain the reason",
      "Express understanding of any inconvenience",
      "Suggest alternative times to reschedule"
    ],
    timeLimit: 420,
    minWords: 80,
    maxWords: 120,
    sampleResponse: "Dear Alex,\n\nI am very sorry, but I need to cancel our tutoring session scheduled for today at 3:00 PM. I woke up this morning with a fever and have been advised to rest and avoid spreading any illness.\n\nI understand this is very short notice and apologize for any inconvenience this may cause to your schedule. I was looking forward to our session on calculus problems.\n\nWould it be possible to reschedule for later this week? I am available on Thursday or Friday afternoon, or any time on Saturday. Please let me know what works best for you.\n\nThank you for understanding, and I apologize again for the late notice.\n\nBest,\n[Your name]",
    keyPoints: ["Sincere apology", "Valid reason briefly stated", "Acknowledgment of inconvenience", "Alternative times offered"]
  },
  {
    id: "EM_011",
    taskType: "email",
    category: "Request",
    scenario: "You would like to use a classroom for a study group meeting outside of regular class hours. Write an email to the department office requesting permission.",
    requirements: [
      "Identify the room and time you need",
      "Explain the purpose of the meeting",
      "Mention how many people will attend",
      "Ask about the booking procedure"
    ],
    timeLimit: 420,
    minWords: 80,
    maxWords: 120,
    sampleResponse: "Dear Department Office,\n\nI am a student in Professor Miller's Organic Chemistry class, and I am writing to request permission to use classroom Chem 201 for a study group meeting.\n\nOur study group of approximately eight students would like to meet on Saturday, November 15th, from 2:00 PM to 5:00 PM to prepare for our upcoming midterm exam. We specifically need this classroom because it has the whiteboards and models that will help us review reaction mechanisms.\n\nCould you please let me know if this room is available and what the booking procedure involves? We will ensure the room is left clean and orderly.\n\nThank you for considering our request.\n\nBest regards,\n[Your name]",
    keyPoints: ["Specific room and time", "Clear purpose", "Group size mentioned", "Process inquiry"]
  },
  {
    id: "EM_012",
    taskType: "email",
    category: "Thank You",
    scenario: "You just completed an internship at a company. Write a thank-you email to your supervisor expressing appreciation for the experience.",
    requirements: [
      "Thank them for the opportunity",
      "Mention specific things you learned",
      "Express how the experience will help your career",
      "Offer to stay in touch"
    ],
    timeLimit: 420,
    minWords: 80,
    maxWords: 120,
    sampleResponse: "Dear Ms. Rodriguez,\n\nAs my internship at DataTech comes to an end, I wanted to express my sincere gratitude for the incredible opportunity to work with your team.\n\nOver the past three months, I have gained invaluable experience in data analysis and project management. Learning to use SQL for database queries and participating in client presentations were particularly valuable experiences that I know will serve me well in my future career.\n\nThank you for your mentorship and patience in guiding me through complex projects. I would love to stay in touch and hope our professional paths cross again.\n\nWith appreciation,\n[Your name]",
    keyPoints: ["Gratitude for opportunity", "Specific learning mentioned", "Career relevance", "Future connection offered"]
  },
  {
    id: "EM_013",
    taskType: "email",
    category: "Complaint",
    scenario: "Your noisy neighbors in the apartment next door have been playing loud music late at night, affecting your sleep and studies. Write an email to the building manager.",
    requirements: [
      "Describe the noise problem specifically",
      "Mention when it occurs",
      "Explain how it affects you",
      "Request the manager's intervention"
    ],
    timeLimit: 420,
    minWords: 80,
    maxWords: 120,
    sampleResponse: "Dear Building Manager,\n\nI am writing to report an ongoing noise disturbance from the apartment next to mine (Unit 5B). For the past two weeks, the residents have been playing extremely loud music almost every night, typically from 11:00 PM until 2:00 AM.\n\nAs a graduate student with early morning classes, this noise has severely affected my ability to sleep and concentrate on my studies. I have finals approaching and desperately need adequate rest.\n\nI attempted to speak with the neighbors directly, but there was no improvement. Could you please remind them of the building's quiet hours policy or take appropriate action to address this issue?\n\nThank you for your assistance.\n\nSincerely,\n[Your name]",
    keyPoints: ["Specific noise description", "Time pattern mentioned", "Personal impact explained", "Request for action"]
  },
  {
    id: "EM_014",
    taskType: "email",
    category: "Inquiry",
    scenario: "You want to know about study abroad programs for next semester. Write an email to the international programs office asking for information.",
    requirements: [
      "Express interest in studying abroad",
      "Ask about available programs in your field",
      "Inquire about application deadlines",
      "Ask about financial aid options"
    ],
    timeLimit: 420,
    minWords: 80,
    maxWords: 120,
    sampleResponse: "Dear International Programs Office,\n\nI am a junior majoring in International Business, and I am very interested in studying abroad next fall semester. I am writing to gather information about available programs.\n\nSpecifically, I would like to know:\n- What programs are available for business students?\n- Are there opportunities in countries where English is not the primary language?\n- What are the application deadlines for fall semester programs?\n- Are there scholarships or financial aid options available for study abroad?\n\nI believe studying abroad would greatly enhance my global perspective and language skills. I would appreciate any guidance you can provide.\n\nThank you for your time.\n\nBest regards,\n[Your name]",
    keyPoints: ["Clear interest stated", "Field-specific question", "Deadline inquiry", "Financial aid question"]
  },
  {
    id: "EM_015",
    taskType: "email",
    category: "Request",
    scenario: "You need to request time off from your part-time campus job to attend a required academic conference. Write an email to your supervisor.",
    requirements: [
      "State the dates you need off",
      "Explain the reason for the request",
      "Show you've considered coverage",
      "Express willingness to make up hours"
    ],
    timeLimit: 420,
    minWords: 80,
    maxWords: 120,
    sampleResponse: "Dear Mr. Thompson,\n\nI am writing to request time off from my shifts at the campus library from March 15th to 17th. I have been invited to present my research at the Regional Undergraduate Research Conference, which is a requirement for completing my honors thesis.\n\nI have already spoken with my colleague, Sarah, who has agreed to cover my Tuesday and Wednesday evening shifts during my absence. I am also willing to work extra hours before or after the conference to ensure all my responsibilities are met.\n\nThis conference is an important academic milestone for me, and I hope you can approve this request.\n\nThank you for considering my request.\n\nBest regards,\n[Your name]",
    keyPoints: ["Specific dates stated", "Academic reason explained", "Coverage arranged", "Flexibility shown"]
  },
  {
    id: "EM_016",
    taskType: "email",
    category: "Apology",
    scenario: "You accidentally damaged a library book that you borrowed. Write an email to the library explaining the situation.",
    requirements: [
      "Explain what happened to the book",
      "Apologize for the damage",
      "Ask about replacement procedures",
      "Offer to pay for replacement"
    ],
    timeLimit: 420,
    minWords: 80,
    maxWords: 120,
    sampleResponse: "Dear Library Staff,\n\nI am writing to report damage to a library book I borrowed and to sincerely apologize for the situation. The book is 'Introduction to Psychology' (ISBN: 978-0134240831), borrowed on my account on February 1st.\n\nUnfortunately, I accidentally spilled coffee on several pages of the book while studying. Despite my attempts to dry and clean the pages, there is permanent staining and some pages are warped.\n\nI understand I am responsible for this damage. Could you please inform me of the procedure for replacing the book? I am fully prepared to pay for a replacement copy.\n\nI apologize for any inconvenience this has caused.\n\nSincerely,\n[Your name]",
    keyPoints: ["Clear damage description", "Sincere apology", "Process inquiry", "Responsibility accepted"]
  },
  {
    id: "EM_017",
    taskType: "email",
    category: "Thank You",
    scenario: "An alumni mentor gave you valuable career advice during a networking event. Write a thank-you email expressing your appreciation.",
    requirements: [
      "Thank them for taking time to talk with you",
      "Mention specific advice that was helpful",
      "Describe how you plan to apply the advice",
      "Express interest in staying connected"
    ],
    timeLimit: 420,
    minWords: 80,
    maxWords: 120,
    sampleResponse: "Dear Mr. Patel,\n\nThank you so much for taking the time to speak with me at last week's Alumni Career Networking Event. Your insights about breaking into the marketing industry were incredibly valuable.\n\nI particularly appreciated your advice about building a portfolio of personal projects to showcase my skills. Following your suggestion, I have already started working on a mock social media campaign that I can present to potential employers.\n\nYour recommendation to seek informational interviews with professionals in the field is also something I plan to pursue this semester.\n\nI would love to stay in touch and keep you updated on my progress. Would it be alright to connect with you on LinkedIn?\n\nThank you again for your generosity and guidance.\n\nBest regards,\n[Your name]",
    keyPoints: ["Gratitude expressed", "Specific advice referenced", "Action plan described", "Connection request"]
  },
  {
    id: "EM_018",
    taskType: "email",
    category: "Inquiry",
    scenario: "You want to volunteer at a local nonprofit organization. Write an email inquiring about volunteer opportunities.",
    requirements: [
      "Introduce yourself and your interests",
      "Explain why you want to volunteer",
      "Ask about available positions",
      "Mention your availability"
    ],
    timeLimit: 420,
    minWords: 80,
    maxWords: 120,
    sampleResponse: "Dear Volunteer Coordinator,\n\nI am a college student interested in volunteering with the Community Food Bank. I have long admired your organization's work in addressing food insecurity in our community.\n\nI am passionate about community service and believe that helping others is essential. Volunteering at your organization would allow me to contribute to a cause I care deeply about while gaining valuable experience.\n\nCould you please provide information about current volunteer opportunities? I am available on weekends and Tuesday afternoons. I am open to any role, whether it involves food sorting, distribution, or administrative tasks.\n\nThank you for considering my interest. I look forward to hearing from you.\n\nSincerely,\n[Your name]",
    keyPoints: ["Self-introduction", "Motivation explained", "Positions inquiry", "Availability stated"]
  },
  {
    id: "EM_019",
    taskType: "email",
    category: "Complaint",
    scenario: "The vending machine in your dormitory took your money but didn't give you the item. Write an email to campus services reporting the issue.",
    requirements: [
      "Describe what happened",
      "Provide specific details (location, time, amount)",
      "Request a refund",
      "Ask for the machine to be fixed"
    ],
    timeLimit: 420,
    minWords: 80,
    maxWords: 120,
    sampleResponse: "Dear Campus Services,\n\nI am writing to report an issue with the vending machine located on the first floor of Morrison Hall. Yesterday evening at approximately 7:00 PM, I inserted $2.50 to purchase a bottle of water (selection A3), but the machine took my money without dispensing the product.\n\nThe machine displayed an error message briefly before returning to normal operation. I tried pressing the coin return button, but nothing happened.\n\nI would appreciate a refund of $2.50 and request that someone inspect and repair this machine to prevent similar issues for other students.\n\nPlease let me know how I can receive my refund.\n\nThank you for your attention to this matter.\n\nSincerely,\n[Your name]",
    keyPoints: ["Clear incident description", "Specific details provided", "Refund request", "Repair request"]
  },
  {
    id: "EM_020",
    taskType: "email",
    category: "Request",
    scenario: "You want to change your major and need to meet with your academic advisor. Write an email requesting an appointment.",
    requirements: [
      "State that you want to discuss changing majors",
      "Briefly explain your reason",
      "Suggest possible meeting times",
      "Ask what documents to bring"
    ],
    timeLimit: 420,
    minWords: 80,
    maxWords: 120,
    sampleResponse: "Dear Dr. Martinez,\n\nI am writing to request an appointment to discuss the possibility of changing my major from Biology to Environmental Science.\n\nAfter taking several courses in both departments this year, I have discovered that environmental science aligns more closely with my career interests in sustainability and conservation. I would like to discuss the requirements, timeline, and any implications for my graduation date.\n\nI am available for a meeting on Tuesday or Thursday afternoon next week. Please let me know what times work for you.\n\nAlso, should I bring any specific documents or forms to our meeting?\n\nThank you for your guidance.\n\nBest regards,\n[Your name]",
    keyPoints: ["Clear purpose stated", "Reason briefly explained", "Times suggested", "Preparation question"]
  },
  {
    id: "EM_021",
    taskType: "email",
    category: "Request",
    scenario: "You need special accommodations for an upcoming exam due to a medical condition. Write an email to the disability services office.",
    requirements: [
      "Explain your situation",
      "Describe the accommodations you need",
      "Provide relevant information about the exam",
      "Ask about the process"
    ],
    timeLimit: 420,
    minWords: 80,
    maxWords: 120,
    sampleResponse: "Dear Disability Services Office,\n\nI am writing to request exam accommodations for my upcoming Biology 201 midterm, scheduled for October 25th. I have a documented visual impairment that makes it difficult to complete exams within the standard time limit.\n\nI would like to request extended time (1.5x the standard duration) and a separate testing room with better lighting. My ophthalmologist, Dr. Sarah Lee, has provided documentation of my condition, which I submitted to your office at the beginning of the semester.\n\nCould you please confirm my accommodations and let me know the procedure for arranging the exam location?\n\nThank you for your assistance.\n\nSincerely,\n[Your name]",
    keyPoints: ["Situation explained", "Specific accommodations requested", "Exam details provided", "Process inquiry"]
  },
  {
    id: "EM_022",
    taskType: "email",
    category: "Inquiry",
    scenario: "You want to start a new student club on campus. Write an email to student activities asking about the process.",
    requirements: [
      "Describe the club you want to start",
      "Explain the purpose and activities",
      "Ask about requirements and procedures",
      "Express commitment to the project"
    ],
    timeLimit: 420,
    minWords: 80,
    maxWords: 120,
    sampleResponse: "Dear Student Activities Office,\n\nI am interested in starting a new student organization called the Sustainable Living Club and am writing to inquire about the registration process.\n\nThe club's purpose would be to promote environmentally friendly practices on campus through activities such as community gardens, recycling initiatives, and educational workshops. Several fellow students have already expressed interest in joining.\n\nCould you please provide information about:\n- The requirements for registering a new club\n- The minimum number of members needed\n- The timeline for approval\n\nI am fully committed to meeting all requirements and ensuring the club's success.\n\nThank you for your guidance.\n\nBest regards,\n[Your name]",
    keyPoints: ["Club description", "Purpose and activities", "Requirements inquiry", "Commitment shown"]
  },
  {
    id: "EM_023",
    taskType: "email",
    category: "Apology",
    scenario: "You accidentally returned the wrong book to a classmate who lent you their textbook. Write an email apologizing and explaining the situation.",
    requirements: [
      "Apologize for the mistake",
      "Explain what happened",
      "Assure them you still have their book",
      "Arrange to return the correct book"
    ],
    timeLimit: 420,
    minWords: 80,
    maxWords: 120,
    sampleResponse: "Dear Jennifer,\n\nI am so sorry for the confusion today! I just realized that I returned the wrong calculus textbook to you. The book I gave back is actually my own copy, not yours.\n\nI have two very similar editions of the textbook, and in my hurry between classes, I grabbed the wrong one from my bag. I discovered the mistake when I got home and found your book still on my desk.\n\nYour textbook is safe and in perfect condition. Could we meet before class tomorrow so I can return it and get my book back? I am very sorry for any inconvenience this has caused.\n\nThanks for understanding!\n\n[Your name]",
    keyPoints: ["Apology given", "Mistake explained", "Book is safe", "Solution proposed"]
  },
  {
    id: "EM_024",
    taskType: "email",
    category: "Thank You",
    scenario: "A guest speaker came to your class and gave an inspiring presentation. Write a thank-you email on behalf of the class.",
    requirements: [
      "Thank them for coming to speak",
      "Mention what students found valuable",
      "Share positive feedback from classmates",
      "Invite them to return in the future"
    ],
    timeLimit: 420,
    minWords: 80,
    maxWords: 120,
    sampleResponse: "Dear Ms. Thompson,\n\nOn behalf of our Entrepreneurship 101 class, I want to thank you for your inspiring presentation last week. Your insights into building a successful startup were incredibly valuable.\n\nMany students particularly appreciated your honest stories about the challenges you faced early in your career. Several classmates mentioned that your advice about seeking mentors has motivated them to actively build professional networks.\n\nYour presentation has sparked numerous discussions in our subsequent classes. Professor Johnson has received multiple requests for similar guest lectures.\n\nWe would be honored if you could visit our class again in the future. Thank you once again for generously sharing your time and expertise.\n\nWith gratitude,\n[Class representative name]",
    keyPoints: ["Thanks on behalf of class", "Valuable content mentioned", "Positive feedback shared", "Future invitation extended"]
  },
  {
    id: "EM_025",
    taskType: "email",
    category: "Complaint",
    scenario: "The parking situation on campus has become very difficult, making you late to classes. Write an email to campus administration expressing your concerns.",
    requirements: [
      "Describe the parking problem",
      "Explain how it affects students",
      "Suggest possible solutions",
      "Request action from administration"
    ],
    timeLimit: 420,
    minWords: 80,
    maxWords: 120,
    sampleResponse: "Dear Campus Administration,\n\nI am writing to express concern about the ongoing parking situation on campus. The parking lots have been consistently full by 8:00 AM, leaving many students unable to find spaces and causing them to be late to morning classes.\n\nThis semester, I have been late to my 9:00 AM class several times despite arriving 30 minutes early. Many other students share this frustration.\n\nI would like to suggest some solutions, such as adding overflow parking, improving shuttle service from remote lots, or implementing a reservation system during peak hours.\n\nI respectfully request that the administration address this issue to help students focus on their studies rather than parking concerns.\n\nThank you for your attention.\n\nSincerely,\n[Your name]",
    keyPoints: ["Problem described", "Student impact explained", "Solutions suggested", "Action requested"]
  }
];

// ==================== ACADEMIC DISCUSSION (20 questions) ====================

export const discussionQuestions: DiscussionQuestion[] = [
  {
    id: "DIS_001",
    taskType: "discussion",
    topic: "Technology in Education",
    professorPrompt: "This week we're discussing how technology is changing education. Do you think online learning can replace traditional classroom instruction? What are the advantages and disadvantages of each approach?",
    studentResponses: [
      {
        name: "Alex",
        response: "I believe online learning offers great flexibility for students who work or have family responsibilities. You can study at your own pace and access materials anytime. However, I don't think it can fully replace in-person classes because you miss out on direct interaction with professors and classmates."
      },
      {
        name: "Maria",
        response: "Traditional classrooms are still essential, especially for subjects that require hands-on practice like science labs or art. While online courses are convenient, the lack of face-to-face interaction makes it harder to stay motivated and ask questions. I think a hybrid approach combining both would be ideal."
      }
    ],
    timeLimit: 600,
    minWords: 100,
    sampleResponse: "While I appreciate the flexibility that online learning provides, I believe traditional classroom instruction remains crucial for effective education. In my experience, the real-time feedback and spontaneous discussions in physical classrooms create deeper understanding than asynchronous online forums.\n\nHowever, I would add that the effectiveness largely depends on the subject matter. Theoretical courses might work well online, but anything requiring collaboration or hands-on skills benefits from in-person instruction. For example, my chemistry lab course would be impossible to replicate effectively online.\n\nThe ideal solution, as Maria suggests, is a hybrid model. This would allow students to watch lectures at their own pace while reserving classroom time for discussions, group work, and practical applications. This approach combines the convenience of technology with the irreplaceable human elements of traditional education.",
    keyPoints: ["Clear position stated", "Builds on classmates' ideas", "Personal example provided", "Solution proposed"]
  },
  {
    id: "DIS_002",
    taskType: "discussion",
    topic: "Social Media Impact",
    professorPrompt: "Let's discuss the impact of social media on society. Do you think social media has overall been beneficial or harmful to how we communicate and form relationships?",
    studentResponses: [
      {
        name: "James",
        response: "I think social media has been largely positive. It allows us to maintain relationships with friends and family regardless of distance. I've reconnected with childhood friends and stay in touch with relatives abroad through Facebook and WhatsApp."
      },
      {
        name: "Priya",
        response: "While social media connects us digitally, I'm concerned it's harming our ability to have meaningful face-to-face conversations. People spend more time on their phones than talking to the people right in front of them. It's also creating unrealistic expectations about life through filtered photos and curated content."
      }
    ],
    timeLimit: 600,
    minWords: 100,
    sampleResponse: "This is a nuanced issue where I find merit in both perspectives. Like James, I value how social media helps maintain long-distance relationships—I regularly video chat with my grandparents overseas, something impossible in previous generations.\n\nHowever, Priya raises valid concerns about the quality of our interactions. I've noticed in myself a tendency to reach for my phone during moments of boredom rather than engaging with my surroundings. The constant comparison to others' highlight reels can also negatively impact mental health.\n\nI believe the key is intentional use. Social media is a powerful tool when used to genuinely connect and share meaningful content, but it becomes harmful when it replaces in-person relationships or becomes a source of validation. Setting boundaries, such as designated phone-free times, can help us enjoy the benefits while minimizing the drawbacks.",
    keyPoints: ["Acknowledges complexity", "Agrees with valid points", "Adds personal observation", "Proposes balanced approach"]
  },
  {
    id: "DIS_003",
    taskType: "discussion",
    topic: "Environmental Responsibility",
    professorPrompt: "As we discuss environmental issues, consider this question: Should individuals or governments bear more responsibility for addressing climate change? How can both contribute effectively?",
    studentResponses: [
      {
        name: "Chen",
        response: "Governments need to take the lead because they have the power to create policies and invest in renewable energy infrastructure. Individual efforts like recycling are important but not enough to solve a global problem. We need systemic change through legislation."
      },
      {
        name: "Sophie",
        response: "I disagree slightly with Chen. While government action is crucial, individual choices collectively make a huge impact. Consumer demand drives corporate behavior—if we stop buying unsustainable products, companies will change. Everyone should take personal responsibility for their environmental footprint."
      }
    ],
    timeLimit: 600,
    minWords: 100,
    sampleResponse: "Both Chen and Sophie make compelling arguments, and I believe effective climate action requires a partnership between governments and individuals.\n\nChen correctly points out that systemic changes like transitioning to renewable energy require government investment and policy. Carbon taxes and environmental regulations create the framework for large-scale change that individual actions alone cannot achieve.\n\nHowever, Sophie's point about consumer power is equally valid. Our daily choices—from what we buy to how we commute—send market signals that influence corporate behavior. The rise of electric vehicles and plant-based food options demonstrates how consumer demand can accelerate industry change.\n\nI would add that governments should also make sustainable choices easier and more affordable for individuals through incentives like tax breaks for solar panels or improved public transportation. When government policy supports individual action, both levels work together to create meaningful environmental impact.",
    keyPoints: ["Synthesizes both views", "Specific examples given", "Additional insight added", "Integrative conclusion"]
  },
  {
    id: "DIS_004",
    taskType: "discussion",
    topic: "Work-Life Balance",
    professorPrompt: "Many professionals struggle to balance their careers with personal life. Is it possible to achieve work-life balance in today's competitive job market, or has technology made it impossible to truly disconnect from work?",
    studentResponses: [
      {
        name: "David",
        response: "Technology has definitely blurred the lines between work and personal life. With smartphones, we're expected to respond to emails at any hour. My father is an executive and he's never truly off work—he's always checking his phone during family dinners. I think work-life balance is becoming increasingly unrealistic."
      },
      {
        name: "Emma",
        response: "I think work-life balance is possible but requires intentional boundaries. Some companies are implementing 'right to disconnect' policies. It's ultimately about setting priorities and learning to say no. Technology can actually help by enabling remote work and flexible schedules."
      }
    ],
    timeLimit: 600,
    minWords: 100,
    sampleResponse: "This discussion resonates with me as I watch my parents navigate these exact challenges. While David's observation about technology enabling constant connectivity is accurate, I'm more optimistic like Emma about achieving balance.\n\nThe key distinction is between technology enabling work and technology requiring constant work. A smartphone can help me finish tasks from anywhere, potentially freeing up more personal time. The problem arises when workplace culture expects 24/7 availability—this is a human problem, not a technology problem.\n\nI believe the solution involves both individual boundaries and organizational culture change. Individuals should establish technology-free times and communicate boundaries clearly. Meanwhile, companies should respect employees' personal time and evaluate workers on output rather than hours online.\n\nThe pandemic demonstrated that many jobs can be performed flexibly without sacrificing productivity. This presents an opportunity to redefine work-life balance for a digital age that benefits both employers and employees.",
    keyPoints: ["Personal connection made", "Distinguishes cause from symptom", "Dual-level solution", "Current context considered"]
  },
  {
    id: "DIS_005",
    taskType: "discussion",
    topic: "Higher Education Value",
    professorPrompt: "With rising tuition costs and alternative career paths available, is a traditional four-year college degree still worth the investment? Consider the financial, social, and career implications.",
    studentResponses: [
      {
        name: "Kevin",
        response: "A college degree is still essential for most good careers. Studies show that college graduates earn significantly more over their lifetime. Beyond money, college provides networking opportunities and teaches critical thinking skills. The investment pays off in the long run."
      },
      {
        name: "Lisa",
        response: "I think the value depends on your career goals. For some fields like tech, certifications and practical experience can be just as valuable as a degree. Many successful entrepreneurs didn't finish college. With the huge debt graduates carry, we should seriously consider alternatives like trade schools or apprenticeships."
      }
    ],
    timeLimit: 600,
    minWords: 100,
    sampleResponse: "This question deeply concerns many students, including myself. Both Kevin and Lisa present valid perspectives that require careful consideration of individual circumstances.\n\nKevin's data about lifetime earnings is compelling, though I would note that this average may be inflated by high earners in fields where degrees are absolutely necessary, like medicine and law. For these careers, the degree is clearly worthwhile despite the cost.\n\nLisa makes an important point about alternative paths. In technology particularly, companies increasingly value demonstrated skills over credentials. My cousin works at a major tech company without a degree, having built an impressive portfolio through self-study and bootcamps.\n\nI believe the answer is highly personal. Students should honestly assess their career goals, financial situation, and learning style. For some, a four-year degree remains the best investment. For others, combining targeted certifications with work experience might be more efficient. The key is making an informed choice rather than following a default path.",
    keyPoints: ["Personal stake acknowledged", "Nuances data claims", "Concrete example provided", "Personalized conclusion"]
  },
  {
    id: "DIS_006",
    taskType: "discussion",
    topic: "Standardized Testing",
    professorPrompt: "Many universities are becoming 'test-optional' and not requiring SAT or ACT scores. Do you think standardized tests are a fair measure of student potential, or should colleges rely on other factors for admissions?",
    studentResponses: [
      {
        name: "Michael",
        response: "Standardized tests provide an objective way to compare students from different schools. Without them, admissions become too subjective and could favor students from privileged backgrounds with access to fancy extracurriculars. A fair test levels the playing field."
      },
      {
        name: "Aisha",
        response: "Standardized tests actually favor wealthy students who can afford expensive prep courses and tutors. They measure test-taking skills more than actual intelligence or potential. GPA, essays, and recommendations give a fuller picture of who a student really is."
      }
    ],
    timeLimit: 600,
    minWords: 100,
    sampleResponse: "Both Michael and Aisha identify real concerns about admissions fairness, but I find Aisha's critique more persuasive based on my observations.\n\nMichael's argument for objectivity has theoretical merit—a common measuring stick could help compare students from vastly different backgrounds. However, in practice, the advantage goes to those who can afford $5,000 test prep courses and multiple retakes. This undermines the very fairness the tests supposedly provide.\n\nAisha correctly points out that test preparation often teaches test-taking strategies rather than knowledge. A student's four-year academic record, teacher recommendations, and personal essays reveal far more about their potential and character than a four-hour exam.\n\nI support test-optional policies because they allow standardized scores to help students who perform well on tests while not penalizing those who don't. Combined with holistic review of other factors, this approach can create a more diverse and talented student body.",
    keyPoints: ["Evaluates both arguments", "Provides reasoning", "Specific evidence cited", "Clear stance taken"]
  },
  {
    id: "DIS_007",
    taskType: "discussion",
    topic: "Artificial Intelligence and Jobs",
    professorPrompt: "Artificial intelligence is increasingly capable of performing tasks once done by humans. Should we be concerned about AI replacing jobs, or will it create new opportunities?",
    studentResponses: [
      {
        name: "Ryan",
        response: "Throughout history, technology has replaced old jobs but created new ones. Cars replaced horses but created auto mechanics, drivers, and entire industries. AI will do the same. We should focus on education and training for the jobs of tomorrow rather than fearing change."
      },
      {
        name: "Yuki",
        response: "This time might be different because AI can learn and adapt. It's not just replacing manual labor but also cognitive work like legal research and medical diagnosis. Many people won't have the skills for new jobs, and the transition could be very painful for workers."
      }
    ],
    timeLimit: 600,
    minWords: 100,
    sampleResponse: "Ryan's historical optimism is reassuring, but Yuki raises important concerns that we shouldn't dismiss. I believe the truth lies somewhere between these positions.\n\nRyan is right that technological change has historically created more jobs than it destroyed. However, Yuki correctly notes that AI's ability to learn makes this transition potentially different. When machines can improve themselves, the pace of change may outstrip our ability to adapt.\n\nWhat concerns me most is not job loss itself but the speed of displacement. Previous transitions happened over decades, giving workers time to retrain. AI developments are happening much faster. Not everyone can quickly become a data scientist or AI trainer.\n\nI think society needs proactive policies: investing heavily in education, considering support for displaced workers, and ensuring AI benefits are widely shared. Rather than either fearing or blindly embracing AI, we should actively shape how it integrates into our economy to maximize benefits while minimizing disruption.",
    keyPoints: ["Balanced analysis", "Identifies key distinction", "Concern articulated", "Policy direction suggested"]
  },
  {
    id: "DIS_008",
    taskType: "discussion",
    topic: "Social Responsibility",
    professorPrompt: "Should successful corporations have an obligation to address social problems, or should their primary focus be maximizing shareholder value? Consider examples of corporate social responsibility.",
    studentResponses: [
      {
        name: "Tyler",
        response: "Businesses should focus on what they do best—making products, creating jobs, and generating wealth. When companies try to solve social problems, they often do it poorly or for publicity. Governments and nonprofits are better equipped for social issues."
      },
      {
        name: "Nina",
        response: "Large corporations have enormous resources and influence. They should use some of that power to give back to communities and address issues like inequality and climate change. Companies like Patagonia show that you can be profitable while having a positive social impact."
      }
    ],
    timeLimit: 600,
    minWords: 100,
    sampleResponse: "This debate touches on fundamental questions about the role of business in society. While I understand Tyler's concern about competence, I align more with Nina's view for several reasons.\n\nFirst, companies already impact society beyond their products—through employment practices, environmental footprint, and community relations. The question isn't whether to have social impact, but whether to manage it responsibly. Ignoring negative externalities isn't neutrality; it's a choice with consequences.\n\nSecond, consumers and employees increasingly expect social responsibility. Companies that neglect these concerns face reputational risks and struggle to attract talent. Far from distracting from shareholder value, thoughtful social responsibility can enhance it.\n\nThat said, Tyler has a point about competence. Companies should focus on areas connected to their expertise. A technology company might address digital literacy; a food company might tackle food insecurity. The most effective corporate social responsibility leverages company strengths rather than random charitable giving.",
    keyPoints: ["Deeper principle identified", "Reframes the question", "Business case made", "Partial agreement acknowledged"]
  },
  {
    id: "DIS_009",
    taskType: "discussion",
    topic: "Cultural Preservation",
    professorPrompt: "Globalization is making cultures more similar worldwide. Should communities actively work to preserve traditional customs and languages, or is cultural change a natural process we shouldn't resist?",
    studentResponses: [
      {
        name: "Ana",
        response: "Cultural diversity is humanity's heritage. Once a language dies, unique knowledge and perspectives are lost forever. Communities should definitely make efforts to preserve their traditions and teach younger generations. Museums, language programs, and cultural festivals help keep traditions alive."
      },
      {
        name: "Marco",
        response: "While I appreciate traditional cultures, forcing preservation can be problematic. Young people naturally adapt to the modern world. If a tradition doesn't appeal to new generations, maybe it's meant to evolve or fade. Culture has always been dynamic, not static."
      }
    ],
    timeLimit: 600,
    minWords: 100,
    sampleResponse: "Both Ana and Marco make thoughtful points about a genuinely complex issue. I believe we can find a middle ground that respects both cultural heritage and natural evolution.\n\nAna rightly emphasizes that cultural and linguistic diversity represents irreplaceable knowledge. Indigenous languages often contain ecological wisdom developed over centuries. When they disappear, humanity loses unique ways of understanding the world.\n\nHowever, Marco correctly observes that cultures have always evolved through contact and exchange. Attempting to freeze culture in a particular state ignores this historical reality. Forced preservation can also become oppressive, denying young people the choice to engage with the global community.\n\nI believe the key is creating opportunities without obligations. Communities should have resources to teach traditional languages and practices to those who want to learn. At the same time, individuals should be free to blend old and new in ways that feel authentic to them. Culture thrives when it's living and chosen, not mandated and static.",
    keyPoints: ["Values both perspectives", "Adds unique insight", "Distinguishes preservation from mandating", "Synthesizes balanced view"]
  },
  {
    id: "DIS_010",
    taskType: "discussion",
    topic: "Media Literacy",
    professorPrompt: "In the age of 'fake news' and misinformation, who bears responsibility for ensuring the public has accurate information—individuals, media companies, or the government?",
    studentResponses: [
      {
        name: "Chris",
        response: "People need to take responsibility for verifying information before sharing it. We all have access to multiple sources and fact-checking websites. Media literacy should be taught in schools so citizens can think critically about what they read online."
      },
      {
        name: "Diana",
        response: "It's unfair to put all the burden on individuals when tech companies design platforms that spread misinformation rapidly. Social media companies should do more to fact-check content and limit the spread of false information. They profit from engagement, so they should address the harms."
      }
    ],
    timeLimit: 600,
    minWords: 100,
    sampleResponse: "This is perhaps one of the most pressing issues of our time, and I believe it requires a multi-stakeholder approach rather than assigning blame to any single party.\n\nChris is right that individual responsibility matters. No matter what systems are in place, ultimately people decide what to believe and share. Educational institutions should prioritize teaching critical thinking and source evaluation skills for the digital age.\n\nDiana correctly identifies that platforms amplify misinformation through algorithms designed to maximize engagement, not accuracy. Companies that profit from attention should bear some responsibility for the quality of content they promote.\n\nHowever, neither mentioned government responsibility—which includes both funding quality journalism and being careful not to become arbiters of truth, which could enable censorship.\n\nI believe we need all three: individuals committed to verification, platforms that reduce algorithmic amplification of misinformation, and governments that support independent journalism while protecting free speech. This distributed responsibility matches the distributed nature of the problem.",
    keyPoints: ["Multi-stakeholder framing", "Validates both views", "Adds missing perspective", "Systemic solution proposed"]
  },
  {
    id: "DIS_011",
    taskType: "discussion",
    topic: "Healthcare Access",
    professorPrompt: "Access to healthcare varies greatly both within countries and globally. Is healthcare a basic human right that should be provided to all, or is it a service that individuals should secure for themselves?",
    studentResponses: [
      {
        name: "Rachel",
        response: "Healthcare should absolutely be a right. No one chooses to get sick, and people shouldn't go bankrupt because of medical bills. Countries with universal healthcare have better outcomes and happier citizens. The United States spends more than other countries but has worse results."
      },
      {
        name: "Brandon",
        response: "Nothing is truly 'free'—universal healthcare means higher taxes for everyone. Government-run healthcare often means long wait times and less innovation. The US leads the world in medical research partly because of our market-based system. People should have the freedom to choose their own coverage."
      }
    ],
    timeLimit: 600,
    minWords: 100,
    sampleResponse: "This debate reflects fundamental differences in values about the role of government and individual responsibility. While I lean toward Rachel's position, Brandon raises considerations worth addressing.\n\nRachel's point about outcomes is empirically supported—countries with universal coverage generally achieve better health outcomes at lower per-capita costs. The American system's innovation argument is undermined when many citizens can't access those innovations due to cost.\n\nBrandon's concern about wait times has some validity, though often exaggerated. Many universal systems offer choice among providers, and the US has its own access problems through insurance bureaucracy and hospital closures in rural areas.\n\nI believe healthcare differs fundamentally from typical consumer goods because demand is often urgent and involuntary. Markets work best when consumers can shop around; this breaks down when you're having a heart attack. A system ensuring universal basic coverage while allowing private options for those who want more could address concerns from both perspectives.",
    keyPoints: ["Values dimension acknowledged", "Empirical evidence cited", "Counter-argument addressed", "Hybrid solution offered"]
  },
  {
    id: "DIS_012",
    taskType: "discussion",
    topic: "Urban Development",
    professorPrompt: "Cities are growing rapidly worldwide. Should urban development prioritize expanding outward into suburbs, or should cities focus on building upward with more high-rise buildings and density?",
    studentResponses: [
      {
        name: "Jennifer",
        response: "Suburban expansion gives families more space and yards for children. Not everyone wants to live in a crowded high-rise. Americans have traditionally valued single-family homes, and there's plenty of land available. Cities can expand their transit systems to connect suburbs."
      },
      {
        name: "Akira",
        response: "Urban sprawl destroys natural habitats, increases car dependence, and contributes to climate change. Dense cities are more efficient—people can walk or take transit instead of driving. Tokyo shows that high-density living can still be comfortable and safe."
      }
    ],
    timeLimit: 600,
    minWords: 100,
    sampleResponse: "Both Jennifer and Akira make valid points about different values in urban planning. However, I find Akira's environmental argument particularly compelling given climate urgency.\n\nJennifer correctly notes that many families prefer suburban living with more space. This preference is real and shouldn't be dismissed. However, suburban preferences are partly shaped by policies that subsidized highways and home ownership while neglecting transit and urban investment.\n\nAkira's point about efficiency deserves emphasis. Urban sprawl requires more infrastructure per person—more roads, pipes, and power lines—making services more expensive. Dense development can support walking, cycling, and transit, reducing transportation costs and emissions.\n\nI believe the answer isn't exclusively one or the other but changing the balance. Currently, zoning laws often mandate low density even in areas where demand for dense housing exists. Allowing more mixed-use development near transit while preserving some suburban options would give people genuine choice rather than the current car-dependent default.",
    keyPoints: ["Acknowledges preference legitimacy", "Adds policy context", "Efficiency argument emphasized", "Policy reform suggested"]
  },
  {
    id: "DIS_013",
    taskType: "discussion",
    topic: "Student Loans",
    professorPrompt: "Many graduates face significant student debt that takes years to repay. Should the government forgive existing student loans, or would this be unfair to those who already paid or chose not to attend college?",
    studentResponses: [
      {
        name: "Nicole",
        response: "Student loan forgiveness is necessary because education costs have risen far faster than wages. Many borrowers will never be able to pay off their loans while also buying homes or saving for retirement. This debt crisis hurts the whole economy."
      },
      {
        name: "Jake",
        response: "Blanket forgiveness is unfair to people who worked multiple jobs to pay their way, or who chose trade schools to avoid debt. Why should taxpayers bail out people who made poor financial decisions? We should address the root cause of high tuition instead."
      }
    ],
    timeLimit: 600,
    minWords: 100,
    sampleResponse: "This is an emotionally charged topic where I can see merit on both sides. While I'm sympathetic to Nicole's concerns about debt burdens, Jake raises fairness questions that deserve serious consideration.\n\nNicole correctly identifies that education costs have outpaced inflation and wages, trapping many in debt for degrees that were supposed to improve their prospects. This affects not just individuals but the broader economy through reduced spending and delayed family formation.\n\nJake's fairness concern is legitimate—someone who sacrificed to avoid debt might reasonably question why others receive forgiveness. However, policy decisions often create winners and losers; we don't refuse to improve roads because earlier drivers endured worse conditions.\n\nA more targeted approach might address both concerns: forgiveness based on income or for those who were defrauded by predatory institutions, combined with reforms to reduce future costs. This helps those genuinely struggling while acknowledging that wholesale forgiveness of high-income borrowers is harder to justify.",
    keyPoints: ["Emotional dimension acknowledged", "Both concerns validated", "Analogy offered", "Nuanced policy proposed"]
  },
  {
    id: "DIS_014",
    taskType: "discussion",
    topic: "Sports and Ethics",
    professorPrompt: "Professional athletes are often role models for young people. Should athletes be expected to set a good example off the field, or should we separate their professional performance from their personal behavior?",
    studentResponses: [
      {
        name: "Marcus",
        response: "Athletes didn't sign up to be role models—they're paid to play a sport, not to be perfect people. We shouldn't hold them to higher standards than we hold ourselves. Their personal lives are their own business."
      },
      {
        name: "Tanya",
        response: "Professional athletes have huge platforms and influence, especially on children. With that influence comes responsibility. When athletes behave badly, they send a message that success justifies poor behavior. They should be held accountable."
      }
    ],
    timeLimit: 600,
    minWords: 100,
    sampleResponse: "This debate about fame and responsibility has no easy answers, but I find Tanya's argument more persuasive in an age where athletes are more visible than ever.\n\nMarcus has a point that athletes didn't choose to be moral exemplars—they trained to excel at a sport. However, when they accept endorsement deals and media attention, they implicitly accept a public role that extends beyond athletics.\n\nTanya correctly notes the outsized influence professional athletes have on young fans. Children don't distinguish between the athlete on the field and the person off it. When a beloved player faces domestic violence charges but continues to play without consequence, the implicit message to young viewers is troubling.\n\nI believe we should distinguish between privacy and accountability. Athletes deserve private lives and shouldn't be judged for minor personal choices. However, serious ethical violations—particularly violence or discrimination—warrant professional consequences because teams and leagues profit from their public image.",
    keyPoints: ["Acknowledges both views", "Notes changed media landscape", "Distinguishes privacy levels", "Clear principle articulated"]
  },
  {
    id: "DIS_015",
    taskType: "discussion",
    topic: "Immigration",
    professorPrompt: "Immigration is a contentious topic worldwide. What factors should countries consider when setting immigration policies, and how should they balance economic needs with cultural concerns?",
    studentResponses: [
      {
        name: "Ahmed",
        response: "Countries have the right to control their borders and prioritize their citizens. Rapid immigration can strain public services and change communities too quickly. Immigration should be managed carefully with preference for skilled workers who can contribute economically."
      },
      {
        name: "Elena",
        response: "Immigration has always enriched countries economically and culturally. Many countries have aging populations and need immigrants to sustain their economies. We should be welcoming, especially to refugees fleeing danger. Fear of cultural change often masks prejudice."
      }
    ],
    timeLimit: 600,
    minWords: 100,
    sampleResponse: "Immigration policy requires balancing multiple legitimate interests, and both Ahmed and Elena identify important considerations. I believe we can develop policies that address both perspectives.\n\nAhmed rightly notes that countries can reasonably manage immigration flows, particularly to ensure integration services are adequate. Overwhelming local schools or housing markets doesn't serve either newcomers or existing residents.\n\nHowever, Elena correctly points out immigration's benefits, both economic and cultural. Immigrants start businesses, fill labor shortages, and enrich communities with diverse perspectives and traditions. Countries with declining birthrates face particular demographic challenges that immigration can help address.\n\nI would caution against Ahmed's emphasis only on skilled workers—many economies need workers at all skill levels, and family reunification serves important humanitarian and integration goals.\n\nThe most successful immigration policies combine reasonable management with genuine welcome: clear pathways to residency and citizenship, investment in integration programs, and protection for refugees. Neither open borders nor closed doors serves a nation's true interests.",
    keyPoints: ["Legitimacy of both concerns acknowledged", "Economic benefits noted", "Expands skilled worker point", "Balanced policy elements listed"]
  },
  {
    id: "DIS_016",
    taskType: "discussion",
    topic: "Mental Health",
    professorPrompt: "Mental health issues among young people are increasing. What do you think is causing this trend, and what should be done about it—by individuals, families, schools, or society at large?",
    studentResponses: [
      {
        name: "Chloe",
        response: "I think social media is a huge factor. Constant comparison to others' highlight reels makes people feel inadequate. Cyberbullying follows students home. Young people need to learn healthier relationships with technology and practice self-care."
      },
      {
        name: "Daniel",
        response: "The causes are complex—economic uncertainty, climate anxiety, academic pressure, and more. We need systematic solutions: better mental health services in schools, reduced stigma around seeking help, and addressing the structural issues creating stress in young people's lives."
      }
    ],
    timeLimit: 600,
    minWords: 100,
    sampleResponse: "Mental health is a deeply personal topic for many students, including myself. Both Chloe and Daniel identify contributing factors, and I think a comprehensive response requires addressing multiple levels.\n\nChloe's focus on social media is well-supported by research showing correlations between heavy social media use and depression, particularly among teenage girls. The curated perfection on platforms creates unrealistic standards. However, I'd add that social media is both cause and symptom—people often turn to phones when already feeling lonely or anxious.\n\nDaniel importantly broadens the conversation beyond technology. Young people today face unprecedented pressures: climate change threatening their future, economic instability, and intense academic competition. These aren't problems individual coping skills can solve.\n\nI believe we need interventions at every level: individuals developing healthy habits and seeking help when needed, schools providing counseling and teaching emotional skills, and society addressing underlying stressors while increasing mental health resources. Blaming any single cause oversimplifies a complex crisis.",
    keyPoints: ["Personal connection acknowledged", "Research cited", "Cause and symptom distinguished", "Multi-level solution"]
  },
  {
    id: "DIS_017",
    taskType: "discussion",
    topic: "Privacy vs Security",
    professorPrompt: "Governments often justify surveillance programs as necessary for national security. How should society balance the need for security with the right to privacy?",
    studentResponses: [
      {
        name: "Raj",
        response: "Privacy is fundamental to freedom. History shows that surveillance powers get abused—they start with security threats but expand to target political opponents and minorities. We shouldn't trade essential freedoms for a false sense of security."
      },
      {
        name: "Megan",
        response: "In today's world of terrorism and cybercrime, security agencies need modern tools. If you're not doing anything wrong, you shouldn't worry about surveillance. The alternative—allowing attacks that could have been prevented—is unacceptable."
      }
    ],
    timeLimit: 600,
    minWords: 100,
    sampleResponse: "This debate about balancing liberty and security is as old as government itself, and the digital age makes it more urgent. While I understand Megan's security concerns, I find Raj's historical perspective more compelling.\n\nRaj rightly invokes the historical tendency of surveillance powers to expand beyond their original justification. From J. Edgar Hoover's FBI to more recent revelations about bulk data collection, we have ample evidence that 'just trust us' is insufficient oversight.\n\nMegan's 'nothing to hide' argument sounds reasonable but misunderstands privacy. Privacy isn't just about hiding wrongdoing—it's about the space to think, dissent, and develop ideas without government observation. A society where everyone is watched is fundamentally different from a free one.\n\nI believe the answer lies in strong oversight: surveillance programs should require judicial warrants based on specific suspicions, with meaningful consequences for abuse. Technology should be designed with privacy in mind. Security and privacy aren't necessarily opposed; we can have both with proper safeguards.",
    keyPoints: ["Historical perspective valued", "Reframes 'nothing to hide' argument", "Oversight mechanisms proposed", "Both goals achievable"]
  },
  {
    id: "DIS_018",
    taskType: "discussion",
    topic: "Animal Rights",
    professorPrompt: "As our understanding of animal cognition grows, should we change how we treat animals in areas like farming, entertainment, and research? What ethical framework should guide these decisions?",
    studentResponses: [
      {
        name: "Hannah",
        response: "Scientific evidence increasingly shows that animals feel pain and have complex emotions. Factory farming causes immense suffering for billions of animals. We should move toward more humane practices, even if it means higher food costs. Causing unnecessary suffering is wrong."
      },
      {
        name: "Steven",
        response: "While I agree we shouldn't be cruel, animals aren't equal to humans. Medical research using animals has saved countless human lives. And people need affordable protein sources. We should treat animals humanely, but human needs come first."
      }
    ],
    timeLimit: 600,
    minWords: 100,
    sampleResponse: "This philosophical question challenges us to examine our moral circle. Both Hannah and Steven raise important considerations that deserve integration rather than opposition.\n\nHannah correctly notes that scientific evidence undermines the old view of animals as unfeeling automatons. Pigs are as intelligent as dogs, yet we treat them very differently. This inconsistency suggests our practices are based more on tradition and convenience than ethical principles.\n\nSteven's point about medical research is important—many treatments depend on animal testing. However, 'human needs come first' shouldn't mean animal suffering is irrelevant, only that it must be weighed against significant human benefits.\n\nI believe we should apply a framework of proportionality: suffering is acceptable only when necessary for important purposes, not merely for convenience. This would eliminate many factory farming practices while permitting necessary research with strong welfare standards. The key question isn't whether we use animals, but whether we cause suffering thoughtlessly or minimize it wherever possible.",
    keyPoints: ["Philosophical framing", "Inconsistency noted", "Research value acknowledged", "Proportionality framework proposed"]
  },
  {
    id: "DIS_019",
    taskType: "discussion",
    topic: "Free Speech",
    professorPrompt: "Universities are often sites of controversy over free speech. Should campuses allow all speech, including views many find offensive, or are there limits to protect students from harmful ideas?",
    studentResponses: [
      {
        name: "Olivia",
        response: "Universities should be places where all ideas can be debated. Banning controversial speakers just makes them more attractive and prevents their ideas from being challenged. Students should learn to engage with viewpoints they disagree with—that's the point of education."
      },
      {
        name: "Justin",
        response: "Free speech doesn't mean freedom from consequences. Some speakers spread hate that makes marginalized students feel unsafe. Universities have an obligation to create an inclusive environment. Hosting certain speakers signals that the campus tolerates discrimination."
      }
    ],
    timeLimit: 600,
    minWords: 100,
    sampleResponse: "As a university student myself, this debate feels especially relevant. Both Olivia and Justin articulate important values—intellectual openness and inclusive community—that sometimes conflict.\n\nOlivia's defense of debate has merit; universities are indeed places to encounter challenging ideas. Students who only hear views they agree with are poorly prepared for a diverse world. The marketplace of ideas works best when all arguments can be heard and critiqued.\n\nHowever, Justin correctly notes that not all speech is equally valuable or harmless. There's a difference between controversial ideas and speech targeting students' identities. Requiring students to debate their own humanity creates an unequal burden.\n\nI believe the answer isn't banning speakers but providing context and response. Universities can invite speakers while also hosting counter-events, ensuring marginalized voices are equally amplified, and distinguishing between ideas we debate and harassment we don't tolerate. The goal should be expanding discourse, not restricting it, while remaining mindful of power dynamics.",
    keyPoints: ["Personal stake noted", "Both values articulated", "Key distinction made", "Constructive alternatives proposed"]
  },
  {
    id: "DIS_020",
    taskType: "discussion",
    topic: "Aging Society",
    professorPrompt: "Many developed countries are experiencing population aging, with more elderly citizens and fewer young workers. How should societies adapt to this demographic shift? Consider economic, social, and policy implications.",
    studentResponses: [
      {
        name: "Grace",
        response: "We need to rethink retirement. People are living longer and healthier lives—it doesn't make sense to stop working at 65. Encouraging older adults to stay in the workforce longer would help both the economy and seniors who want to remain active and purposeful."
      },
      {
        name: "William",
        response: "The solution is accepting more immigration. Young immigrants can fill workforce gaps and support pension systems. Countries like Japan that resist immigration are already struggling. We should also invest in automation to maintain productivity with fewer workers."
      }
    ],
    timeLimit: 600,
    minWords: 100,
    sampleResponse: "Population aging is one of the most significant challenges of this century, and both Grace and William offer partial solutions that work best in combination.\n\nGrace's point about rethinking retirement resonates with me. My grandmother is 72 and sharper than ever—forcing capable people out of work based on arbitrary age cutoffs wastes talent and accelerates the very dependency ratio we worry about. However, we must also respect those who genuinely need rest after decades of labor.\n\nWilliam correctly identifies immigration as a key tool, as Japan's struggles demonstrate. Younger immigrants can help balance the age structure while enriching society culturally. Automation is also crucial but creates its own challenges around job displacement.\n\nI would add that we need to value elder care as legitimate work, with fair wages and professional development. Many women leave the workforce to care for aging parents, losing income and career advancement. Valuing and compensating care work could help maintain both workforce participation and family support for seniors.",
    keyPoints: ["Significance established", "Personal example relevant", "Combined approach endorsed", "Care work added as dimension"]
  }
];

// Export counts and combined arrays
export const BUILD_SENTENCE_COUNT = buildSentenceQuestions.length;
export const EMAIL_COUNT = emailQuestions.length;
export const DISCUSSION_COUNT = discussionQuestions.length;

// Combined writing questions
export const allWritingQuestions: WritingQuestion[] = [
  ...buildSentenceQuestions,
  ...emailQuestions,
  ...discussionQuestions
];

// Calculate total question count
export const TOTAL_WRITING_QUESTIONS = BUILD_SENTENCE_COUNT + EMAIL_COUNT + DISCUSSION_COUNT;
