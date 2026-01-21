// 2026 TOEFL iBT Speaking Questions
// Based on official ETS format effective January 21, 2026
// Two main task types: Listen and Repeat (7 sentences), Take an Interview (4 questions, 45s each)
// Note: Integrated speaking tasks removed - new format emphasizes spontaneous responses

export interface ListenRepeatQuestion {
  id: string;
  taskType: "listen_repeat";
  context: string;
  sentences: string[];
  responseTimePerSentence: number;
}

export interface InterviewQuestion {
  id: string;
  taskType: "interview";
  topic: string;
  questions: {
    question: string;
    responseTime: number;
  }[];
  sampleResponses?: string[];
}

export type SpeakingQuestion2026 = ListenRepeatQuestion | InterviewQuestion;

// Legacy interface for backward compatibility
export interface SpeakingQuestion {
  id: string;
  type: "repeat" | "interview" | "integrated";
  prompt: string;
  prepTime: number;
  responseTime: number;
  audioTranscript?: string;
  readingPassage?: string;
  sampleResponse?: string;
  scoringCriteria: string[];
}

// Listen and Repeat Questions (7 sentences about campus/community locations)
export const listenRepeatQuestions: ListenRepeatQuestion[] = [
  {
    id: "LR_001",
    taskType: "listen_repeat",
    context: "Zoo Welcome",
    sentences: [
      "We have a variety of wildlife here at the zoo.",
      "Bears, wolves, and large cats are located to the right.",
      "The aquarium and reptile house are straight ahead.",
      "Our newest exhibit features tropical birds from South America.",
      "The café is near the main entrance if you need refreshments.",
      "A map is available at the visitor's center.",
      "The visitor's center, located near the front entrance, can give you more information."
    ],
    responseTimePerSentence: 8
  },
  {
    id: "LR_002",
    taskType: "listen_repeat",
    context: "Campus Gym Orientation",
    sentences: [
      "Welcome to our campus gym.",
      "Cardio machines are located near the entrance.",
      "Weight training equipment is on the lower level.",
      "The swimming pool is through the doors on your left.",
      "Lockers require a combination lock, which you can purchase at the front desk.",
      "Group fitness classes are held in the studio upstairs.",
      "If you have any questions, please seek assistance from the attendants at the help desk."
    ],
    responseTimePerSentence: 8
  },
  {
    id: "LR_003",
    taskType: "listen_repeat",
    context: "Hotel Welcome",
    sentences: [
      "Welcome to the Grandview Hotel, and thank you for choosing to stay with us.",
      "Your room is located on the fifth floor.",
      "The elevator is just around the corner to your right.",
      "Breakfast is served in the dining room from seven to ten in the morning.",
      "The fitness center is open twenty-four hours a day.",
      "Wi-Fi is complimentary throughout the hotel.",
      "If you need anything during your stay, please contact the front desk at any time."
    ],
    responseTimePerSentence: 8
  },
  {
    id: "LR_004",
    taskType: "listen_repeat",
    context: "University Library Orientation",
    sentences: [
      "Welcome to the university library.",
      "Please keep your voice low to respect other students studying here.",
      "Books can be borrowed for up to three weeks.",
      "Reference materials in the red section cannot be checked out.",
      "Study rooms can be reserved online for up to four hours.",
      "The computer lab is located on the second floor.",
      "Printing and copying services are located on the second floor."
    ],
    responseTimePerSentence: 8
  },
  {
    id: "LR_005",
    taskType: "listen_repeat",
    context: "Museum Tour Introduction",
    sentences: [
      "Good morning and welcome to the Natural History Museum.",
      "Our collection spans over four billion years of Earth's history.",
      "The dinosaur exhibit is our most popular attraction.",
      "Photography is permitted, but please do not use flash.",
      "The gift shop and café are located near the main exit.",
      "Tours begin every hour from the main lobby.",
      "Feel free to ask any of our staff members if you have questions."
    ],
    responseTimePerSentence: 8
  },
  {
    id: "LR_006",
    taskType: "listen_repeat",
    context: "Campus Health Center",
    sentences: [
      "The student health center is open Monday through Friday.",
      "Walk-in appointments are available in the morning.",
      "For emergencies, please call campus security immediately.",
      "Flu shots are available free of charge during October.",
      "Mental health counseling services are confidential.",
      "Prescriptions can be picked up at the pharmacy next door.",
      "Please bring your student identification card to all appointments."
    ],
    responseTimePerSentence: 8
  },
];

// Take an Interview Questions (4 questions on a topic, 45 seconds each, no prep time)
export const interviewQuestions: InterviewQuestion[] = [
  {
    id: "INT_001",
    taskType: "interview",
    topic: "Commuting and Transportation",
    questions: [
      { question: "How important is it for you to live close to your school or workplace?", responseTime: 45 },
      { question: "Do you prefer traveling by car or by public transportation? Why?", responseTime: 45 },
      { question: "What suggestions would you give someone to make their daily commute more enjoyable?", responseTime: 45 },
      { question: "How has technology changed the way people commute to work or school?", responseTime: 45 }
    ],
    sampleResponses: [
      "Living close to school is quite important to me because it saves time and reduces stress. When I don't have a long commute, I have more energy for studying and other activities.",
      "I prefer public transportation because it's more environmentally friendly and allows me to read or listen to podcasts during the journey. It's also more economical than owning a car.",
      "I would suggest listening to audiobooks or educational podcasts to make commuting productive. Also, leaving earlier can help avoid rush hour traffic and make the journey more pleasant.",
      "Technology has significantly changed commuting through navigation apps that find the fastest routes and ride-sharing services that provide flexible transportation options."
    ]
  },
  {
    id: "INT_002",
    taskType: "interview",
    topic: "Urban Life",
    questions: [
      { question: "Do you currently live in a city, a small town, or a village?", responseTime: 45 },
      { question: "How do you feel when you visit a large, crowded city?", responseTime: 45 },
      { question: "Do you think people who live in cities have more interesting lives? Why or why not?", responseTime: 45 },
      { question: "Should governments spend more money creating parks and green spaces in cities?", responseTime: 45 }
    ],
    sampleResponses: [
      "I currently live in a medium-sized city with about half a million people. It has good amenities but isn't as hectic as major metropolitan areas.",
      "When I visit large crowded cities, I feel both excited and overwhelmed. The energy is stimulating, but the noise and crowds can be exhausting after a while.",
      "I don't necessarily think city people have more interesting lives. While cities offer more entertainment options, people in smaller communities often have stronger social connections and unique experiences.",
      "Yes, I believe governments should invest in urban green spaces. Parks improve air quality, provide recreation areas, and benefit mental health for city residents."
    ]
  },
  {
    id: "INT_003",
    taskType: "interview",
    topic: "Shopping Habits",
    questions: [
      { question: "Do you enjoy shopping? Why or why not?", responseTime: 45 },
      { question: "Do you prefer shopping online or in physical stores?", responseTime: 45 },
      { question: "What factors do you consider most important when making a purchase decision?", responseTime: 45 },
      { question: "How have shopping habits changed in your country over the past ten years?", responseTime: 45 }
    ],
    sampleResponses: [
      "I enjoy shopping occasionally, especially when I have a specific item in mind. However, I don't like spending hours browsing without purpose.",
      "I prefer shopping online for convenience and price comparison, but I visit physical stores when I need to see the quality or try on clothing.",
      "Price, quality, and reviews from other customers are the most important factors for me. I also consider whether the product is environmentally sustainable.",
      "Shopping habits have shifted dramatically toward online platforms. Many traditional stores have closed while e-commerce companies have expanded rapidly."
    ]
  },
  {
    id: "INT_004",
    taskType: "interview",
    topic: "Language Learning",
    questions: [
      { question: "Besides your native language, what languages do you speak or are learning?", responseTime: 45 },
      { question: "What do you find most challenging about learning a new language?", responseTime: 45 },
      { question: "What methods or resources have been most helpful for your language learning?", responseTime: 45 },
      { question: "Do you think everyone should learn at least one foreign language? Why?", responseTime: 45 }
    ],
    sampleResponses: [
      "Besides my native language, I'm learning English and have basic knowledge of Spanish. I started English in elementary school and Spanish in university.",
      "The most challenging aspect for me is pronunciation and speaking naturally. Grammar rules can be memorized, but sounding like a native speaker requires extensive practice.",
      "Watching movies and TV shows in the target language has been most helpful. I also use language exchange apps to practice with native speakers.",
      "Yes, I believe learning a foreign language opens doors to different cultures and career opportunities. It also improves cognitive abilities and makes travel more enjoyable."
    ]
  },
  {
    id: "INT_005",
    taskType: "interview",
    topic: "Personal Finance",
    questions: [
      { question: "How do you typically manage your monthly budget?", responseTime: 45 },
      { question: "What do you think is the most important financial skill for young people to learn?", responseTime: 45 },
      { question: "Do you prefer saving money or spending it on experiences?", responseTime: 45 },
      { question: "How has technology affected the way people manage their money?", responseTime: 45 }
    ],
    sampleResponses: [
      "I track my expenses using a smartphone app and set aside a fixed percentage of my income for savings before spending on other things.",
      "I think understanding compound interest and the importance of starting to save early are crucial financial skills that schools should teach more.",
      "I try to balance both, but I lean toward spending on meaningful experiences. Research shows that experiences often bring more lasting happiness than material possessions.",
      "Technology has made managing money much easier with mobile banking, budgeting apps, and digital payments. However, it has also made impulsive spending more convenient."
    ]
  },
  {
    id: "INT_006",
    taskType: "interview",
    topic: "Health and Wellness",
    questions: [
      { question: "What do you typically do to stay healthy?", responseTime: 45 },
      { question: "How important is mental health compared to physical health?", responseTime: 45 },
      { question: "What advice would you give to someone who wants to improve their health habits?", responseTime: 45 },
      { question: "How has awareness about health and wellness changed in recent years?", responseTime: 45 }
    ],
    sampleResponses: [
      "I try to exercise three times a week, usually jogging or swimming. I also make an effort to eat balanced meals and get enough sleep.",
      "I believe mental and physical health are equally important and interconnected. Poor mental health can affect physical health, and vice versa.",
      "I would suggest starting small with achievable goals rather than making dramatic changes. Consistency is more important than intensity when building healthy habits.",
      "Awareness has increased significantly, especially regarding mental health. There's less stigma around seeking help, and more resources are available online."
    ]
  },
];

// Convert to legacy format for backward compatibility
export const speakingQuestions: SpeakingQuestion[] = [
  // Listen and Repeat Questions (convert each sentence to individual question)
  ...listenRepeatQuestions.flatMap((lr) =>
    lr.sentences.map((sentence, i) => ({
      id: `${lr.id}_S${i + 1}`,
      type: "repeat" as const,
      prompt: "Listen and repeat the following sentence.",
      prepTime: 0,
      responseTime: lr.responseTimePerSentence,
      audioTranscript: sentence,
      scoringCriteria: ["Pronunciation accuracy", "Fluency", "Intonation"]
    }))
  ),
  // Interview Questions
  ...interviewQuestions.flatMap((int) =>
    int.questions.map((q, i) => ({
      id: `${int.id}_Q${i + 1}`,
      type: "interview" as const,
      prompt: q.question,
      prepTime: 0, // 2026 format: no prep time for interview
      responseTime: q.responseTime,
      sampleResponse: int.sampleResponses?.[i],
      scoringCriteria: ["Relevance to topic", "Vocabulary range", "Grammar accuracy", "Fluency", "Coherence"]
    }))
  ),
];

// All question types are already exported above with their definitions
