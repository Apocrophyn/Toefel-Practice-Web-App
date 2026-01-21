// 2026 TOEFL iBT Listening Questions
// Based on official ETS format effective January 21, 2026
// Four task types: Listen and Choose a Response, Conversation, Announcement, Academic Talk

export interface ChooseResponseQuestion {
  id: string;
  taskType: "choose_response";
  audioText: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export interface ConversationQuestion {
  id: string;
  taskType: "conversation";
  context: string;
  transcript: string;
  questions: {
    question: string;
    options: string[];
    correctAnswer: string;
    explanation: string;
  }[];
}

export interface AnnouncementQuestion {
  id: string;
  taskType: "announcement";
  context: string;
  transcript: string;
  questions: {
    question: string;
    options: string[];
    correctAnswer: string;
    explanation: string;
  }[];
}

export interface AcademicTalkQuestion {
  id: string;
  taskType: "academic_talk";
  topic: string;
  transcript: string;
  questions: {
    question: string;
    options: string[];
    correctAnswer: string;
    explanation: string;
  }[];
}

export type ListeningQuestion2026 = ChooseResponseQuestion | ConversationQuestion | AnnouncementQuestion | AcademicTalkQuestion;

// Legacy interface for backward compatibility
export interface ListeningQuestion {
  id: string;
  type: "conversation" | "lecture" | "announcement" | "choose_response";
  transcript: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

// Listen and Choose a Response (hear a question, choose appropriate reply)
export const chooseResponseQuestions: ChooseResponseQuestion[] = [
  {
    id: "CR_001",
    taskType: "choose_response",
    audioText: "Didn't I just see you in the library an hour ago?",
    question: "What would be the most appropriate response?",
    options: [
      "Yes, I was returning a book.",
      "It's in the reference section.",
      "I don't have enough time.",
      "I need to get there earlier."
    ],
    correctAnswer: "A",
    explanation: "This question asks about a past action. 'Yes, I was returning a book' directly addresses being at the library."
  },
  {
    id: "CR_002",
    taskType: "choose_response",
    audioText: "Where is the nearest bus stop?",
    question: "What would be the most appropriate response?",
    options: [
      "I missed the bus this morning.",
      "It comes every 30 minutes.",
      "I can help you find it.",
      "I prefer taking the subway."
    ],
    correctAnswer: "C",
    explanation: "The question asks for a location. 'I can help you find it' offers appropriate assistance for finding directions."
  },
  {
    id: "CR_003",
    taskType: "choose_response",
    audioText: "How do I contact customer service?",
    question: "What would be the most appropriate response?",
    options: [
      "That's allowed.",
      "You can use the chat feature on their website.",
      "I don't mind at all.",
      "They have good service."
    ],
    correctAnswer: "B",
    explanation: "The question asks how to do something. 'You can use the chat feature' provides a method to contact customer service."
  },
  {
    id: "CR_004",
    taskType: "choose_response",
    audioText: "I'm afraid I'm not available this evening.",
    question: "What would be the most appropriate response?",
    options: [
      "That's too early.",
      "How about tomorrow night instead?",
      "I arrived in the afternoon.",
      "That's not necessary."
    ],
    correctAnswer: "B",
    explanation: "When someone says they're unavailable, suggesting an alternative time is the appropriate response."
  },
  {
    id: "CR_005",
    taskType: "choose_response",
    audioText: "Isn't the post office open today?",
    question: "What would be the most appropriate response?",
    options: [
      "I need to mail my package.",
      "It's around the corner from here.",
      "I came home early.",
      "You should check their schedule online."
    ],
    correctAnswer: "D",
    explanation: "The question asks about operating hours. Suggesting to check the schedule addresses the uncertainty about opening hours."
  },
  {
    id: "CR_006",
    taskType: "choose_response",
    audioText: "Would you mind if I borrowed your notes from yesterday's lecture?",
    question: "What would be the most appropriate response?",
    options: [
      "The lecture was really interesting.",
      "Not at all, I'll send you a copy.",
      "I took notes yesterday.",
      "The professor speaks too fast."
    ],
    correctAnswer: "B",
    explanation: "'Would you mind' questions require a response to the request. 'Not at all' indicates agreement to share notes."
  },
  {
    id: "CR_007",
    taskType: "choose_response",
    audioText: "Do you know when the assignment is due?",
    question: "What would be the most appropriate response?",
    options: [
      "The assignment was difficult.",
      "I think it's due next Friday.",
      "I already submitted mine.",
      "We should study together."
    ],
    correctAnswer: "B",
    explanation: "The question asks about a deadline. Providing the due date directly answers the question."
  },
  {
    id: "CR_008",
    taskType: "choose_response",
    audioText: "I can't believe how expensive textbooks are this semester.",
    question: "What would be the most appropriate response?",
    options: [
      "I know, have you tried renting them instead?",
      "I'm taking five classes.",
      "The bookstore closes at six.",
      "I prefer digital books."
    ],
    correctAnswer: "A",
    explanation: "When someone expresses frustration about price, acknowledging it and offering a cheaper alternative is appropriate."
  },
];

// Listen to a Conversation (campus conversations)
export const conversationQuestions: ConversationQuestion[] = [
  {
    id: "CONV_001",
    taskType: "conversation",
    context: "A conversation between two students about dinner plans",
    transcript: `Student A: Hey, are you going to the dining hall for dinner tonight?
Student B: I was planning to, but I forgot the dining hall closes early on Fridays.
Student A: Oh right, it closes at 7 instead of 9. We should hurry.
Student B: Actually, I was thinking we could grab something at the campus café instead. They're open until 10.
Student A: That works for me. We could study there afterward too.`,
    questions: [
      {
        question: "What does the woman imply when she mentions forgetting about Friday hours?",
        options: [
          "She wants to go shopping instead.",
          "She needs to reconsider their plans.",
          "She prefers the café food.",
          "She has too much homework."
        ],
        correctAnswer: "B",
        explanation: "By mentioning she forgot about the early closing, she implies the original plan needs to change."
      },
      {
        question: "What does the man mean when he says 'We should hurry'?",
        options: [
          "He's late for a class.",
          "He forgot about the timing issue.",
          "They have limited time to eat at the dining hall.",
          "He wants to exercise before dinner."
        ],
        correctAnswer: "C",
        explanation: "He says they should hurry because the dining hall closes early, giving them limited time."
      },
    ],
  },
  {
    id: "CONV_002",
    taskType: "conversation",
    context: "A conversation about air conditioning in an office",
    transcript: `Employee A: Is it just me, or is it really warm in here?
Employee B: No, you're right. The air conditioning has been acting up all week.
Employee A: Did anyone call the maintenance team?
Employee B: They came yesterday but couldn't fix it. They're waiting for a part.
Employee A: Maybe we should take our break early and sit outside for a bit.
Employee B: Good idea. At least there's a breeze out there.`,
    questions: [
      {
        question: "Why was the maintenance technician called?",
        options: [
          "To fix the heating system.",
          "Because the room was too hot.",
          "To install new equipment.",
          "To check the electricity."
        ],
        correctAnswer: "B",
        explanation: "The air conditioning was not working properly, making the room warm."
      },
      {
        question: "What does the woman suggest they do?",
        options: [
          "Call maintenance again.",
          "Open the windows.",
          "Work from home.",
          "Take a break outside."
        ],
        correctAnswer: "D",
        explanation: "She suggests taking their break early and sitting outside where there's a breeze."
      },
    ],
  },
  {
    id: "CONV_003",
    taskType: "conversation",
    context: "A conversation about choosing a device",
    transcript: `Student A: I can't decide whether to get a smartphone or a tablet for school.
Student B: What would you mainly use it for?
Student A: Taking notes in class and reading textbooks.
Student B: In that case, I'd go with the tablet. The larger screen makes reading easier.
Student A: But wouldn't a smartphone be more portable?
Student B: True, but you probably already have a phone. A tablet would give you more screen space for studying on the go.`,
    questions: [
      {
        question: "What is the student trying to decide between?",
        options: [
          "A laptop and desktop computer.",
          "A smartphone and a tablet.",
          "Two different phone models.",
          "Buying or renting equipment."
        ],
        correctAnswer: "B",
        explanation: "The student says 'I can't decide whether to get a smartphone or a tablet.'"
      },
      {
        question: "Why does the woman recommend a tablet?",
        options: [
          "It's cheaper than a smartphone.",
          "The larger screen makes reading easier.",
          "It has better battery life.",
          "It's required for classes."
        ],
        correctAnswer: "B",
        explanation: "She says 'The larger screen makes reading easier' when recommending the tablet."
      },
    ],
  },
  {
    id: "CONV_004",
    taskType: "conversation",
    context: "A conversation between a student and a librarian",
    transcript: `Student: Excuse me, I'm having trouble accessing the online journal database.
Librarian: Are you getting an error message?
Student: Yes, it says my credentials aren't recognized.
Librarian: That sometimes happens at the start of the semester. Let me verify your student status.
Student: I just enrolled last week.
Librarian: Ah, there's usually a 48-hour delay before new students are in the system. You should have access by tomorrow.
Student: Is there any way to get temporary access today? I have a paper due Friday.
Librarian: I can give you a guest login that works for 24 hours.`,
    questions: [
      {
        question: "What problem is the student experiencing?",
        options: [
          "The library is closed.",
          "Cannot access the journal database.",
          "Lost library card.",
          "Cannot find a specific book."
        ],
        correctAnswer: "B",
        explanation: "The student says 'I'm having trouble accessing the online journal database.'"
      },
      {
        question: "How does the librarian solve the student's immediate problem?",
        options: [
          "Resets the password.",
          "Provides a guest login.",
          "Extends the library hours.",
          "Contacts technical support."
        ],
        correctAnswer: "B",
        explanation: "The librarian offers 'a guest login that works for 24 hours.'"
      },
    ],
  },
];

// Listen to an Announcement (campus or classroom announcements)
export const announcementQuestions: AnnouncementQuestion[] = [
  {
    id: "ANN_001",
    taskType: "announcement",
    context: "University announcement about a guest lecture",
    transcript: `Good afternoon, students. We're pleased to announce that Dr. Sarah Chen, a renowned marine biologist from Stanford University, will be giving a guest lecture next Tuesday at 3 PM in the Science Center Auditorium. Dr. Chen has spent twenty years studying coral reef ecosystems and recently published groundbreaking research on reef restoration techniques. This event is free and open to all students, but seating is limited. Given her popularity, I strongly recommend arriving at least fifteen minutes early to secure a seat. Light refreshments will be served after the lecture.`,
    questions: [
      {
        question: "What is the announcement mainly about?",
        options: [
          "A guest lecture.",
          "A new course offering.",
          "A research opportunity.",
          "A graduation ceremony."
        ],
        correctAnswer: "A",
        explanation: "The announcement is about Dr. Chen giving a guest lecture on marine biology."
      },
      {
        question: "Why does the speaker mention Dr. Chen's popularity?",
        options: [
          "To increase ticket prices.",
          "To encourage studying marine biology.",
          "To cancel the event.",
          "To explain why students should arrive early."
        ],
        correctAnswer: "D",
        explanation: "Given her popularity, the speaker recommends arriving early to secure a seat."
      },
    ],
  },
  {
    id: "ANN_002",
    taskType: "announcement",
    context: "Announcement about student lounge closure",
    transcript: `Attention all students. The main student lounge on the second floor will be closed for renovations starting Monday and continuing through the end of the month. During this time, students can use the alternative study spaces in the library's east wing or the common areas in the residence halls. The renovations will include new furniture, improved lighting, and additional power outlets for laptop charging. We apologize for any inconvenience and appreciate your patience during these improvements.`,
    questions: [
      {
        question: "What is the main purpose of this announcement?",
        options: [
          "To inform about a schedule change.",
          "To promote new facilities.",
          "To request student volunteers.",
          "To announce a library event."
        ],
        correctAnswer: "A",
        explanation: "The announcement informs students that the lounge will be closed and where they can go instead."
      },
      {
        question: "What should students do during the renovation period?",
        options: [
          "Stay home.",
          "Help with construction.",
          "Use alternate spaces like the library.",
          "Submit complaints."
        ],
        correctAnswer: "C",
        explanation: "Students can use alternative study spaces in the library's east wing or residence halls."
      },
    ],
  },
  {
    id: "ANN_003",
    taskType: "announcement",
    context: "Classroom announcement about exam schedule",
    transcript: `Before we begin today's lecture, I have an important announcement about the final exam. Due to a scheduling conflict with another departmental exam, our final has been moved from December 15th to December 18th. The exam will still be held in this classroom at the same time, 2 PM. I've also decided to make the exam open-book, which means you can bring your textbook and notes. However, electronic devices will not be permitted. Please make sure to update your calendars and let me know if this creates any conflicts for you.`,
    questions: [
      {
        question: "What change is being announced?",
        options: [
          "The exam location.",
          "The exam date.",
          "The course textbook.",
          "The class time."
        ],
        correctAnswer: "B",
        explanation: "The exam has been moved from December 15th to December 18th."
      },
      {
        question: "What will students be allowed to bring to the exam?",
        options: [
          "Only a pencil.",
          "Textbook and notes.",
          "Electronic devices.",
          "Nothing at all."
        ],
        correctAnswer: "B",
        explanation: "The professor says 'you can bring your textbook and notes' since it will be open-book."
      },
    ],
  },
];

// Listen to an Academic Talk (short lectures)
export const academicTalkQuestions: AcademicTalkQuestion[] = [
  {
    id: "TALK_001",
    taskType: "academic_talk",
    topic: "Two Types of Fascination in Psychology",
    transcript: `Today I want to discuss two types of fascination that psychologists have identified. The first is called hard fascination. This occurs when something dramatically captures our attention—like an action movie or a thrilling sports game. Your mind is completely absorbed, with no room for other thoughts.

The second type is soft fascination. This is a gentler form of attention, like watching clouds drift by or taking a walk in a park. Your mind can wander to other thoughts even while you observe. Interestingly, researchers have found that soft fascination activates what's called the Default Mode Network in the brain—the same system involved in creativity and self-reflection. This is why people often report having their best ideas while taking walks in nature.`,
    questions: [
      {
        question: "What is the lecture mainly about?",
        options: [
          "The history of psychology.",
          "How movies affect the brain.",
          "Two types of fascination.",
          "The benefits of exercise."
        ],
        correctAnswer: "C",
        explanation: "The professor discusses 'two types of fascination that psychologists have identified.'"
      },
      {
        question: "Why does the professor mention watching a movie?",
        options: [
          "To recommend a film.",
          "To introduce the concept of hard fascination.",
          "To criticize entertainment.",
          "To discuss film history."
        ],
        correctAnswer: "B",
        explanation: "An action movie is given as an example of hard fascination that completely absorbs attention."
      },
      {
        question: "What does the professor imply about walking in a park?",
        options: [
          "It's a form of exercise.",
          "It allows the mind to wander to other thoughts.",
          "It's only beneficial for athletes.",
          "It requires hard fascination."
        ],
        correctAnswer: "B",
        explanation: "Walking in a park exemplifies soft fascination where 'your mind can wander to other thoughts.'"
      },
      {
        question: "What is the Default Mode Network associated with?",
        options: [
          "Hard fascination only.",
          "Soft fascination, creativity, and self-reflection.",
          "Physical exercise.",
          "Watching television."
        ],
        correctAnswer: "B",
        explanation: "The Default Mode Network is 'involved in creativity and self-reflection' and activated during soft fascination."
      },
    ],
  },
  {
    id: "TALK_002",
    taskType: "academic_talk",
    topic: "Ecological Footprint",
    transcript: `Let's talk about the ecological footprint, a measure scientists use to calculate human impact on the environment. Simply put, it estimates how much land and water area a population needs to produce what it consumes and to absorb its waste.

Different countries have vastly different footprints. For example, if everyone lived like the average American, we would need about five Earths to sustain us. In contrast, the average person in India has a much smaller footprint. Comparing these figures helps us understand which lifestyles are sustainable and which are not.

One practical way to reduce your footprint is to eat locally produced food. When food doesn't travel thousands of miles to reach your plate, less fuel is burned for transportation. Next class, we'll discuss how policymakers can use footprint data to create environmental regulations.`,
    questions: [
      {
        question: "What is the main topic of this lecture?",
        options: [
          "American eating habits.",
          "A measure of environmental impact.",
          "Transportation regulations.",
          "Indian agricultural practices."
        ],
        correctAnswer: "B",
        explanation: "The lecture discusses ecological footprint as 'a measure scientists use to calculate human impact on the environment.'"
      },
      {
        question: "Why does the professor mention different countries?",
        options: [
          "To discuss politics.",
          "To plan a field trip.",
          "To illustrate differences in footprint size.",
          "To compare food prices."
        ],
        correctAnswer: "C",
        explanation: "Different countries are compared to show how 'vastly different footprints' exist between lifestyles."
      },
      {
        question: "What is one way to reduce ecological footprint mentioned in the lecture?",
        options: [
          "Driving more efficiently.",
          "Eating locally produced food.",
          "Using solar panels.",
          "Recycling plastic."
        ],
        correctAnswer: "B",
        explanation: "The professor says 'eat locally produced food' as a way to reduce footprint."
      },
      {
        question: "What will the next class probably discuss?",
        options: [
          "How policymakers can use footprint data.",
          "Different types of food.",
          "Travel destinations.",
          "History of environmentalism."
        ],
        correctAnswer: "A",
        explanation: "The professor says 'Next class, we'll discuss how policymakers can use footprint data.'"
      },
    ],
  },
  {
    id: "TALK_003",
    taskType: "academic_talk",
    topic: "The Sleep Cycle",
    transcript: `Today we're examining the structure of human sleep, which operates in cycles lasting about 90 minutes each. A typical night involves four to six of these cycles.

Each cycle progresses through several stages. Stages one and two are light sleep, where you can be easily awakened. Stages three and four are deep sleep, critical for physical restoration and immune function. Finally, REM sleep—that's Rapid Eye Movement—is when most dreaming occurs and is essential for memory consolidation.

Here's something interesting: the proportion of REM sleep increases with each cycle. So your longest dreams typically happen in the early morning hours. This is why people often remember dreams vividly when they wake up, but rarely recall ones from earlier in the night.`,
    questions: [
      {
        question: "How long is a typical sleep cycle?",
        options: [
          "About 30 minutes.",
          "About 60 minutes.",
          "About 90 minutes.",
          "About 120 minutes."
        ],
        correctAnswer: "C",
        explanation: "The professor states sleep 'operates in cycles lasting about 90 minutes each.'"
      },
      {
        question: "What is deep sleep important for?",
        options: [
          "Dreaming.",
          "Physical restoration and immune function.",
          "Memory consolidation.",
          "Rapid eye movement."
        ],
        correctAnswer: "B",
        explanation: "Stages three and four (deep sleep) are 'critical for physical restoration and immune function.'"
      },
      {
        question: "When do the longest dreams typically occur?",
        options: [
          "Right after falling asleep.",
          "In the middle of the night.",
          "In the early morning hours.",
          "During deep sleep."
        ],
        correctAnswer: "C",
        explanation: "The professor says 'your longest dreams typically happen in the early morning hours.'"
      },
      {
        question: "What happens during REM sleep?",
        options: [
          "Physical restoration.",
          "Light sleep begins.",
          "Most dreaming and memory consolidation.",
          "The body temperature drops."
        ],
        correctAnswer: "C",
        explanation: "REM sleep is 'when most dreaming occurs and is essential for memory consolidation.'"
      },
    ],
  },
];

// Convert to legacy format for backward compatibility
export const listeningQuestions: ListeningQuestion[] = [
  // Choose Response Questions
  ...chooseResponseQuestions.map((q) => ({
    id: q.id,
    type: "choose_response" as const,
    transcript: q.audioText,
    question: q.question,
    options: q.options,
    correctAnswer: q.correctAnswer,
    explanation: q.explanation,
  })),
  // Conversation Questions
  ...conversationQuestions.flatMap((conv) =>
    conv.questions.map((q, i) => ({
      id: `${conv.id}_Q${i + 1}`,
      type: "conversation" as const,
      transcript: conv.transcript,
      question: q.question,
      options: q.options,
      correctAnswer: q.correctAnswer,
      explanation: q.explanation,
    }))
  ),
  // Announcement Questions
  ...announcementQuestions.flatMap((ann) =>
    ann.questions.map((q, i) => ({
      id: `${ann.id}_Q${i + 1}`,
      type: "announcement" as const,
      transcript: ann.transcript,
      question: q.question,
      options: q.options,
      correctAnswer: q.correctAnswer,
      explanation: q.explanation,
    }))
  ),
  // Academic Talk Questions
  ...academicTalkQuestions.flatMap((talk) =>
    talk.questions.map((q, i) => ({
      id: `${talk.id}_Q${i + 1}`,
      type: "lecture" as const,
      transcript: talk.transcript,
      question: q.question,
      options: q.options,
      correctAnswer: q.correctAnswer,
      explanation: q.explanation,
    }))
  ),
];

// All question types are already exported above with their definitions
