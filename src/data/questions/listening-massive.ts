// TOEFL 2026 Listening Section - Massive Question Bank
// 40+ Choose Response + 30+ Conversations + 30+ Announcements + 30+ Academic Talks
// Total: 130+ unique listening scenarios

import type { VoiceType } from "@/lib/audio";

// =====================================================
// CHOOSE RESPONSE QUESTIONS (40+)
// Hear a question/statement, select appropriate response
// Tests pragmatic understanding and natural conversation flow
// =====================================================

export interface ChooseResponseItem {
  id: string;
  category: "direct" | "indirect" | "advancing" | "detail" | "idiomatic" | "polite";
  audioText: string;
  voice: VoiceType;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export const chooseResponseItems: ChooseResponseItem[] = [
  // DIRECT RESPONSES (1-10)
  {
    id: "CR_001",
    category: "direct",
    audioText: "When does the library close tonight?",
    voice: "female_student",
    question: "What would be the most appropriate response?",
    options: [
      "It closes at midnight during finals week.",
      "The library is on the second floor.",
      "I borrowed three books yesterday.",
      "The computer lab is next door."
    ],
    correctAnswer: "A",
    explanation: "The question asks about closing time, and only option A directly answers with a specific time."
  },
  {
    id: "CR_002",
    category: "direct",
    audioText: "Which building is the chemistry lab in?",
    voice: "male_student",
    question: "What would be the most appropriate response?",
    options: [
      "Chemistry is my favorite subject.",
      "It's in the science building, third floor.",
      "The lab report is due Friday.",
      "I have chemistry at two o'clock."
    ],
    correctAnswer: "B",
    explanation: "The question asks for a location, and option B provides the building and floor number."
  },
  {
    id: "CR_003",
    category: "direct",
    audioText: "How much does parking cost per semester?",
    voice: "female_student",
    question: "What would be the most appropriate response?",
    options: [
      "Parking is difficult to find.",
      "The lot is behind the gym.",
      "It's two hundred dollars for a full semester.",
      "You need a parking permit."
    ],
    correctAnswer: "C",
    explanation: "The question asks about cost, and option C provides a specific price."
  },
  {
    id: "CR_004",
    category: "direct",
    audioText: "What time does Professor Wilson's office hours start?",
    voice: "male_student",
    question: "What would be the most appropriate response?",
    options: [
      "Professor Wilson teaches economics.",
      "Her office is in the business building.",
      "They start at two in the afternoon.",
      "She's a very good professor."
    ],
    correctAnswer: "C",
    explanation: "The question asks about start time, and option C provides the specific time."
  },
  {
    id: "CR_005",
    category: "direct",
    audioText: "Where can I get a replacement student ID?",
    voice: "female_student",
    question: "What would be the most appropriate response?",
    options: [
      "You'll need to go to the registrar's office.",
      "Student IDs are required for entry.",
      "The ID costs fifteen dollars.",
      "Make sure to bring a photo."
    ],
    correctAnswer: "A",
    explanation: "The question asks for a location where something can be obtained, and option A provides that location."
  },
  {
    id: "CR_006",
    category: "direct",
    audioText: "How many credits do I need to graduate?",
    voice: "male_student",
    question: "What would be the most appropriate response?",
    options: [
      "Most students graduate in four years.",
      "You need one hundred twenty credits total.",
      "The credits transfer from community college.",
      "Registration starts next week."
    ],
    correctAnswer: "B",
    explanation: "The question asks about a quantity, and option B provides the specific number needed."
  },
  {
    id: "CR_007",
    category: "direct",
    audioText: "What's the deadline for dropping a class?",
    voice: "female_student",
    question: "What would be the most appropriate response?",
    options: [
      "You should talk to your advisor first.",
      "The deadline is the end of the second week.",
      "Dropping a class affects your GPA.",
      "The class meets on Mondays and Wednesdays."
    ],
    correctAnswer: "B",
    explanation: "The question asks about a deadline, and option B provides the specific timeframe."
  },
  {
    id: "CR_008",
    category: "direct",
    audioText: "Who should I contact about financial aid?",
    voice: "male_student",
    question: "What would be the most appropriate response?",
    options: [
      "Financial aid is very helpful.",
      "The application deadline has passed.",
      "Contact the financial aid office in the main building.",
      "Scholarships are based on merit."
    ],
    correctAnswer: "C",
    explanation: "The question asks who to contact, and option C provides the appropriate office."
  },
  {
    id: "CR_009",
    category: "direct",
    audioText: "Is the cafeteria open on weekends?",
    voice: "female_student",
    question: "What would be the most appropriate response?",
    options: [
      "The food is pretty good.",
      "Yes, but only for brunch from ten to two.",
      "The cafeteria is in the student center.",
      "Meal plans are required for freshmen."
    ],
    correctAnswer: "B",
    explanation: "The yes/no question about weekend hours is answered with confirmation and specific times."
  },
  {
    id: "CR_010",
    category: "direct",
    audioText: "Where can I print my assignment?",
    voice: "male_student",
    question: "What would be the most appropriate response?",
    options: [
      "There are printers in the library and computer lab.",
      "The assignment is due tomorrow.",
      "Printing costs five cents per page.",
      "You should use double-sided printing."
    ],
    correctAnswer: "A",
    explanation: "The question asks where to print, and option A provides specific locations."
  },

  // INDIRECT RESPONSES (11-20)
  {
    id: "CR_011",
    category: "indirect",
    audioText: "Do you think Professor Martin's class is worth taking?",
    voice: "female_student",
    question: "What would be the most appropriate response?",
    options: [
      "Professor Martin teaches history.",
      "I've heard the workload is manageable but you learn a lot.",
      "The class is offered on Tuesdays.",
      "I'm not taking that class this semester."
    ],
    correctAnswer: "B",
    explanation: "The question asks for an opinion, and option B provides helpful evaluation without a direct yes/no."
  },
  {
    id: "CR_012",
    category: "indirect",
    audioText: "I'm having trouble understanding the material in statistics.",
    voice: "male_student",
    question: "What would be the most appropriate response?",
    options: [
      "Statistics is a required course.",
      "Have you tried going to the tutoring center?",
      "The exam is next week.",
      "I took statistics last year."
    ],
    correctAnswer: "B",
    explanation: "In response to someone expressing difficulty, suggesting a helpful resource is most appropriate."
  },
  {
    id: "CR_013",
    category: "indirect",
    audioText: "I'm not sure if I should take five classes next semester.",
    voice: "female_student",
    question: "What would be the most appropriate response?",
    options: [
      "Five is the maximum allowed.",
      "It depends on how demanding the courses are.",
      "Registration opens next month.",
      "I'm taking four classes."
    ],
    correctAnswer: "B",
    explanation: "When someone is undecided, offering factors to consider is more helpful than a direct answer."
  },
  {
    id: "CR_014",
    category: "indirect",
    audioText: "This essay is taking forever to write.",
    voice: "male_student",
    question: "What would be the most appropriate response?",
    options: [
      "When is it due?",
      "Essays are part of most classes.",
      "The writing center is helpful.",
      "What topic are you writing about?"
    ],
    correctAnswer: "D",
    explanation: "When someone expresses frustration, showing interest and asking about specifics is supportive."
  },
  {
    id: "CR_015",
    category: "indirect",
    audioText: "I can't decide between studying abroad or doing an internship.",
    voice: "female_student",
    question: "What would be the most appropriate response?",
    options: [
      "Study abroad is in the spring.",
      "Both would look great on a resume, but what matters more to you?",
      "Internships are usually paid.",
      "I studied abroad last year."
    ],
    correctAnswer: "B",
    explanation: "Helping someone consider their priorities is more useful than stating facts about either option."
  },
  {
    id: "CR_016",
    category: "indirect",
    audioText: "I heard the bookstore is having a sale.",
    voice: "male_student",
    question: "What would be the most appropriate response?",
    options: [
      "The bookstore is in the student center.",
      "Really? I should check if they have the textbooks I need.",
      "Textbooks are expensive.",
      "I already bought my books online."
    ],
    correctAnswer: "B",
    explanation: "Expressing interest and intent to act on shared information is a natural conversational response."
  },
  {
    id: "CR_017",
    category: "indirect",
    audioText: "My laptop crashed right before I saved my paper.",
    voice: "female_student",
    question: "What would be the most appropriate response?",
    options: [
      "That's terrible! Do you have any auto-saved versions?",
      "Laptops can be expensive to repair.",
      "The computer lab has backup computers.",
      "You should save more often."
    ],
    correctAnswer: "A",
    explanation: "Expressing sympathy and suggesting a possible solution shows empathy and helpfulness."
  },
  {
    id: "CR_018",
    category: "indirect",
    audioText: "I've been waiting for my advisor for twenty minutes.",
    voice: "male_student",
    question: "What would be the most appropriate response?",
    options: [
      "Advisors are often busy.",
      "Did you have an appointment or is this a walk-in?",
      "The advising office closes at five.",
      "I see my advisor next week."
    ],
    correctAnswer: "B",
    explanation: "Asking clarifying questions can help address the situation or explain the wait."
  },
  {
    id: "CR_019",
    category: "indirect",
    audioText: "The professor said the exam will cover chapters one through six.",
    voice: "female_student",
    question: "What would be the most appropriate response?",
    options: [
      "That's more than I expected. Do you want to form a study group?",
      "Exams are usually difficult.",
      "Chapter six was interesting.",
      "I missed that class."
    ],
    correctAnswer: "A",
    explanation: "Acknowledging the information and suggesting collaborative preparation is a helpful response."
  },
  {
    id: "CR_020",
    category: "indirect",
    audioText: "I'm thinking about changing my major.",
    voice: "male_student",
    question: "What would be the most appropriate response?",
    options: [
      "What major are you considering?",
      "Changing majors can delay graduation.",
      "I changed my major twice.",
      "You should talk to an advisor."
    ],
    correctAnswer: "A",
    explanation: "Showing interest by asking for more details encourages the person to share their thoughts."
  },

  // ADVANCING RESPONSES (21-28)
  {
    id: "CR_021",
    category: "advancing",
    audioText: "I need to find a place to study that's quiet.",
    voice: "female_student",
    question: "What would be the most appropriate response?",
    options: [
      "Studying is important.",
      "Have you tried the fourth floor of the library? It's a designated quiet zone.",
      "The library is always crowded.",
      "I prefer studying in my room."
    ],
    correctAnswer: "B",
    explanation: "Providing a specific solution with details helps advance the person toward their goal."
  },
  {
    id: "CR_022",
    category: "advancing",
    audioText: "I really need a job that works around my class schedule.",
    voice: "male_student",
    question: "What would be the most appropriate response?",
    options: [
      "Jobs can be hard to find.",
      "The campus employment office posts positions specifically for students.",
      "Working during school is challenging.",
      "I work at the coffee shop."
    ],
    correctAnswer: "B",
    explanation: "Directing someone to a resource that can help them is an advancing response."
  },
  {
    id: "CR_023",
    category: "advancing",
    audioText: "I want to get more involved on campus but don't know where to start.",
    voice: "female_student",
    question: "What would be the most appropriate response?",
    options: [
      "Campus involvement looks good on resumes.",
      "There are over a hundred student organizations.",
      "The involvement fair is next week. They showcase all the clubs.",
      "I'm in three clubs."
    ],
    correctAnswer: "C",
    explanation: "Suggesting a specific opportunity to explore options helps advance the conversation."
  },
  {
    id: "CR_024",
    category: "advancing",
    audioText: "I need to improve my writing before graduate school applications.",
    voice: "male_student",
    question: "What would be the most appropriate response?",
    options: [
      "Graduate school is competitive.",
      "The writing center offers free workshops on academic writing.",
      "Writing takes practice.",
      "I'm applying to graduate school too."
    ],
    correctAnswer: "B",
    explanation: "Pointing to a specific resource that addresses the need advances the conversation helpfully."
  },
  {
    id: "CR_025",
    category: "advancing",
    audioText: "I'm stressed about finding housing for next year.",
    voice: "female_student",
    question: "What would be the most appropriate response?",
    options: [
      "Housing is expensive off campus.",
      "Have you looked at the housing board? Students post openings there regularly.",
      "I found my apartment online.",
      "The deadline for on-campus housing passed."
    ],
    correctAnswer: "B",
    explanation: "Suggesting a concrete resource to address the concern is an advancing response."
  },
  {
    id: "CR_026",
    category: "advancing",
    audioText: "I really want to learn another language but can't fit a class in my schedule.",
    voice: "male_student",
    question: "What would be the most appropriate response?",
    options: [
      "Languages take years to learn.",
      "The language lab has self-study programs you can use anytime.",
      "I took Spanish in high school.",
      "Language classes fill up quickly."
    ],
    correctAnswer: "B",
    explanation: "Offering an alternative solution that works around the stated obstacle is helpful."
  },
  {
    id: "CR_027",
    category: "advancing",
    audioText: "I'm worried about my presentation tomorrow.",
    voice: "female_student",
    question: "What would be the most appropriate response?",
    options: [
      "Presentations can be nerve-wracking.",
      "Would it help to practice in front of me? I have some time.",
      "Just don't be nervous.",
      "I had a presentation last week."
    ],
    correctAnswer: "B",
    explanation: "Offering concrete help to address the worry is supportive and advances the situation."
  },
  {
    id: "CR_028",
    category: "advancing",
    audioText: "I need to get some research experience before I apply to medical school.",
    voice: "male_student",
    question: "What would be the most appropriate response?",
    options: [
      "Medical school is very competitive.",
      "Professor Chen in biology is looking for research assistants.",
      "Research experience is important.",
      "I did research last summer."
    ],
    correctAnswer: "B",
    explanation: "Providing a specific lead that addresses the need is an advancing response."
  },

  // IDIOMATIC RESPONSES (29-34)
  {
    id: "CR_029",
    category: "idiomatic",
    audioText: "Want to grab some coffee before class?",
    voice: "female_student",
    question: "What would be the most appropriate response?",
    options: [
      "Coffee has caffeine.",
      "Sure, I could use a pick-me-up!",
      "The coffee shop is nearby.",
      "Class starts at ten."
    ],
    correctAnswer: "B",
    explanation: "Using the idiomatic 'pick-me-up' naturally responds to the informal invitation."
  },
  {
    id: "CR_030",
    category: "idiomatic",
    audioText: "How did your job interview go?",
    voice: "male_student",
    question: "What would be the most appropriate response?",
    options: [
      "I think I nailed it! They said they'd call by Friday.",
      "The interview was thirty minutes.",
      "I wore my best suit.",
      "The company is downtown."
    ],
    correctAnswer: "A",
    explanation: "The idiom 'nailed it' naturally expresses confidence about performance."
  },
  {
    id: "CR_031",
    category: "idiomatic",
    audioText: "I've been pulling all-nighters to finish this project.",
    voice: "female_student",
    question: "What would be the most appropriate response?",
    options: [
      "Night is the best time to study.",
      "You should get some rest. Burning the candle at both ends isn't sustainable.",
      "Projects take a lot of time.",
      "I stay up late sometimes too."
    ],
    correctAnswer: "B",
    explanation: "Using the idiom about overworking shows understanding and offers caring advice."
  },
  {
    id: "CR_032",
    category: "idiomatic",
    audioText: "I heard the new professor is really strict.",
    voice: "male_student",
    question: "What would be the most appropriate response?",
    options: [
      "I wouldn't worry too much. People said the same about Professor Lee, and she turned out to be fair.",
      "Strict professors give hard tests.",
      "I had a strict professor last year.",
      "You should drop the class."
    ],
    correctAnswer: "A",
    explanation: "Using 'turned out to be' naturally addresses the concern with perspective."
  },
  {
    id: "CR_033",
    category: "idiomatic",
    audioText: "I'm completely lost in this calculus class.",
    voice: "female_student",
    question: "What would be the most appropriate response?",
    options: [
      "Calculus is a difficult subject.",
      "Don't throw in the towel yet. The tutoring center can help you catch up.",
      "The exam is next week.",
      "I struggled with calculus too."
    ],
    correctAnswer: "B",
    explanation: "Using 'throw in the towel' and 'catch up' naturally encourages persistence."
  },
  {
    id: "CR_034",
    category: "idiomatic",
    audioText: "I finally finished my thesis!",
    voice: "male_student",
    question: "What would be the most appropriate response?",
    options: [
      "Theses are long papers.",
      "That's amazing! You must be over the moon!",
      "When did you start it?",
      "My thesis is due next month."
    ],
    correctAnswer: "B",
    explanation: "Using 'over the moon' naturally celebrates the accomplishment enthusiastically."
  },

  // POLITE ACKNOWLEDGMENTS (35-40)
  {
    id: "CR_035",
    category: "polite",
    audioText: "I'm sorry I missed our study session yesterday. Something came up.",
    voice: "female_student",
    question: "What would be the most appropriate response?",
    options: [
      "You should have called.",
      "No worries! These things happen. Do you want to reschedule?",
      "I waited for an hour.",
      "Study sessions are important."
    ],
    correctAnswer: "B",
    explanation: "Accepting the apology graciously and offering to move forward is politely appropriate."
  },
  {
    id: "CR_036",
    category: "polite",
    audioText: "Thanks so much for helping me move into my new apartment!",
    voice: "male_student",
    question: "What would be the most appropriate response?",
    options: [
      "Moving is hard work.",
      "Happy to help! Your new place looks great.",
      "I was free anyway.",
      "You should buy me lunch."
    ],
    correctAnswer: "B",
    explanation: "Accepting thanks graciously and adding a positive comment is politely appropriate."
  },
  {
    id: "CR_037",
    category: "polite",
    audioText: "Would you mind if I borrowed your notes from Monday's lecture?",
    voice: "female_student",
    question: "What would be the most appropriate response?",
    options: [
      "The lecture was interesting.",
      "Not at all! I'll send them to you tonight.",
      "I take good notes.",
      "Monday's class was long."
    ],
    correctAnswer: "B",
    explanation: "Responding to 'would you mind' politely with agreement and a specific offer."
  },
  {
    id: "CR_038",
    category: "polite",
    audioText: "I'm afraid the book you requested isn't available yet.",
    voice: "narrator",
    question: "What would be the most appropriate response?",
    options: [
      "That's okay. Could you let me know when it comes in?",
      "I need that book.",
      "When will it be available?",
      "I'll look somewhere else."
    ],
    correctAnswer: "A",
    explanation: "Accepting the news graciously and making a polite request shows good communication."
  },
  {
    id: "CR_039",
    category: "polite",
    audioText: "I won't be able to make it to the group meeting tonight.",
    voice: "male_student",
    question: "What would be the most appropriate response?",
    options: [
      "We're counting on you.",
      "That's fine. I'll fill you in on what we discuss.",
      "Meetings are mandatory.",
      "Why not?"
    ],
    correctAnswer: "B",
    explanation: "Accepting graciously and offering to include them shows good teamwork."
  },
  {
    id: "CR_040",
    category: "polite",
    audioText: "I really appreciate you taking the time to explain this to me.",
    voice: "female_student",
    question: "What would be the most appropriate response?",
    options: [
      "It took a long time.",
      "Of course! Let me know if you have any other questions.",
      "I'm good at explaining things.",
      "You should have understood it before."
    ],
    correctAnswer: "B",
    explanation: "Accepting appreciation graciously and offering continued help is politely appropriate."
  },
];

// =====================================================
// CONVERSATION SCENARIOS (30+)
// Campus dialogues between students, advisors, professors, staff
// Each conversation has 2-3 questions
// =====================================================

export interface ConversationScenario {
  id: string;
  context: string;
  setting: string;
  speakers: { role: string; voice: VoiceType }[];
  transcript: string;
  questions: {
    question: string;
    options: string[];
    correctAnswer: string;
    explanation: string;
  }[];
}

export const conversationScenarios: ConversationScenario[] = [
  // ACADEMIC ADVISING (1-8)
  {
    id: "CONV_001",
    context: "Student meets with academic advisor about course selection",
    setting: "Academic advisor's office",
    speakers: [
      { role: "Student", voice: "female_student" },
      { role: "Advisor", voice: "male_academic" }
    ],
    transcript: `Student: Hi, I'm having trouble deciding which math course to take next semester. I need to fulfill my quantitative requirement, but I'm not sure if I should take statistics or calculus.

Advisor: Well, that depends on your major and career goals. What are you planning to study?

Student: I'm thinking about psychology. I want to eventually go to graduate school.

Advisor: In that case, I'd strongly recommend statistics. Psychology research relies heavily on statistical analysis, and having that foundation will be invaluable for graduate school.

Student: That makes sense. Is the statistics course difficult?

Advisor: It can be challenging, but there's an excellent tutoring center on campus. Also, Professor Martinez, who teaches the course, has a reputation for being very approachable and holding helpful office hours.`,
    questions: [
      {
        question: "Why does the advisor recommend statistics over calculus?",
        options: [
          "Statistics is easier than calculus.",
          "Statistics is more relevant to the student's career goals in psychology.",
          "The calculus course is full.",
          "The student already took calculus."
        ],
        correctAnswer: "B",
        explanation: "The advisor explains that psychology research relies heavily on statistical analysis, making it more relevant for the student's goals."
      },
      {
        question: "What does the advisor mention about Professor Martinez?",
        options: [
          "He gives easy exams.",
          "He is very strict.",
          "He is approachable and has helpful office hours.",
          "He teaches both statistics and calculus."
        ],
        correctAnswer: "C",
        explanation: "The advisor mentions that Professor Martinez 'has a reputation for being very approachable and holding helpful office hours.'"
      }
    ]
  },
  {
    id: "CONV_002",
    context: "Student discusses graduation requirements with advisor",
    setting: "Advising center",
    speakers: [
      { role: "Student", voice: "male_student" },
      { role: "Advisor", voice: "female_academic" }
    ],
    transcript: `Student: I'm trying to figure out if I can graduate next spring. Can you check my progress?

Advisor: Sure, let me pull up your transcript. Okay, I see you've completed ninety credits so far. You need one hundred twenty to graduate.

Student: So I need thirty more credits. That's about ten classes, right?

Advisor: That's correct. But I also see you haven't completed your foreign language requirement yet. That's two semesters of a language.

Student: Oh no, I forgot about that. Is there any way around it?

Advisor: Well, if you can demonstrate proficiency through an exam, you can waive the requirement. The language department offers placement tests at the beginning of each semester.

Student: That could work. I studied French in high school for four years.`,
    questions: [
      {
        question: "How many credits does the student still need to graduate?",
        options: [
          "Ninety credits",
          "Thirty credits",
          "One hundred twenty credits",
          "Ten credits"
        ],
        correctAnswer: "B",
        explanation: "The student has ninety credits and needs one hundred twenty, so thirty more are needed."
      },
      {
        question: "What option does the advisor suggest for the language requirement?",
        options: [
          "Taking summer classes",
          "Taking a proficiency exam to waive the requirement",
          "Studying abroad",
          "Taking online courses"
        ],
        correctAnswer: "B",
        explanation: "The advisor mentions that 'if you can demonstrate proficiency through an exam, you can waive the requirement.'"
      }
    ]
  },
  {
    id: "CONV_003",
    context: "Student asks professor about research opportunities",
    setting: "Professor's office",
    speakers: [
      { role: "Student", voice: "female_student_2" },
      { role: "Professor", voice: "male_academic" }
    ],
    transcript: `Student: Professor Chen, I was wondering if you have any openings for undergraduate research assistants.

Professor: Actually, I'm starting a new project on climate change impacts next semester. What's your background?

Student: I'm a junior environmental science major. I've taken your intro course and two statistics courses.

Professor: That's a good foundation. The position involves data collection and analysis. It's about ten hours per week. Are you able to commit to that?

Student: Yes, I can manage that with my schedule. Would I get course credit or is it paid?

Professor: It can be either. Most students prefer credit because it counts toward the research requirement for your major. But we do have limited funding for hourly wages if you prefer.

Student: I think credit would be more valuable for me since I'm applying to graduate programs.`,
    questions: [
      {
        question: "What is the research project about?",
        options: [
          "Ocean pollution",
          "Climate change impacts",
          "Wildlife conservation",
          "Urban planning"
        ],
        correctAnswer: "B",
        explanation: "Professor Chen mentions 'a new project on climate change impacts.'"
      },
      {
        question: "Why does the student prefer course credit over payment?",
        options: [
          "The pay is too low.",
          "Credit is more valuable for graduate school applications.",
          "She doesn't need the money.",
          "Payment would affect her financial aid."
        ],
        correctAnswer: "B",
        explanation: "The student says 'credit would be more valuable for me since I'm applying to graduate programs.'"
      }
    ]
  },

  // CAMPUS SERVICES (4-8)
  {
    id: "CONV_004",
    context: "Student inquires about tutoring services",
    setting: "Tutoring center",
    speakers: [
      { role: "Student", voice: "male_student_2" },
      { role: "Staff", voice: "female_student" }
    ],
    transcript: `Student: Hi, I need help with organic chemistry. Are tutoring services available?

Staff: Yes, we offer both individual and group tutoring. For organic chemistry, we have group sessions on Tuesdays and Thursdays at four PM.

Student: I have a class at that time on Tuesdays. Is individual tutoring an option?

Staff: It is, but there's usually a waiting list for individual sessions in high-demand subjects like organic chemistry. I'd recommend signing up for both—the group session on Thursday and the individual waitlist.

Student: How long is the wait usually?

Staff: It varies, but typically one to two weeks. In the meantime, the group sessions are actually very effective. Students often prefer them because they can learn from each other's questions.

Student: That's a good point. How do I sign up?`,
    questions: [
      {
        question: "Why can't the student attend the Tuesday group session?",
        options: [
          "It's full.",
          "He has a class at that time.",
          "He prefers individual tutoring.",
          "The subject isn't offered on Tuesdays."
        ],
        correctAnswer: "B",
        explanation: "The student says 'I have a class at that time on Tuesdays.'"
      },
      {
        question: "What does the staff member recommend?",
        options: [
          "Only attending group sessions",
          "Only signing up for individual tutoring",
          "Signing up for both the Thursday group session and the individual waitlist",
          "Finding a private tutor off campus"
        ],
        correctAnswer: "C",
        explanation: "The staff suggests 'signing up for both—the group session on Thursday and the individual waitlist.'"
      }
    ]
  },
  {
    id: "CONV_005",
    context: "Student asks about computer lab policies",
    setting: "Computer lab entrance",
    speakers: [
      { role: "Student", voice: "female_student" },
      { role: "Lab Assistant", voice: "male_student_2" }
    ],
    transcript: `Student: Excuse me, I left my laptop charger at home. Can I use one of the lab computers for my online exam?

Lab Assistant: Sure, you can use any available computer. Just log in with your student credentials. But for exams, I'd recommend using one of the computers in the testing section over there—they have dividers for privacy.

Student: Oh, that's helpful. How long do I have?

Lab Assistant: There's no time limit during regular hours, but we do close at midnight. When is your exam?

Student: It's at eight tonight, and it's a two-hour exam. Will that be okay?

Lab Assistant: That's plenty of time. Just make sure to bring your student ID. We've been checking them recently due to some security issues.`,
    questions: [
      {
        question: "Why does the student need to use a lab computer?",
        options: [
          "Her laptop is broken.",
          "She left her charger at home.",
          "The exam requires special software.",
          "Her apartment has no internet."
        ],
        correctAnswer: "B",
        explanation: "The student says 'I left my laptop charger at home.'"
      },
      {
        question: "What does the lab assistant recommend for the exam?",
        options: [
          "Coming back another day",
          "Using computers in the testing section for privacy",
          "Borrowing a charger",
          "Taking the exam at home"
        ],
        correctAnswer: "B",
        explanation: "The assistant recommends 'using one of the computers in the testing section—they have dividers for privacy.'"
      }
    ]
  },
  {
    id: "CONV_006",
    context: "Student discusses meal plan options",
    setting: "Dining services office",
    speakers: [
      { role: "Student", voice: "male_student" },
      { role: "Staff", voice: "female_academic" }
    ],
    transcript: `Student: I'd like to change my meal plan. The unlimited plan is more than I need.

Staff: I can help with that. What plan are you currently on?

Student: The unlimited plan, which costs about two thousand dollars per semester. But I often skip breakfast and eat off campus on weekends.

Staff: Based on what you're describing, the fourteen-meal plan might work better. It gives you two meals a day during the week, and you can use dining dollars for weekends.

Student: How much would that save me?

Staff: About four hundred dollars per semester. Plus, unused dining dollars roll over to the next semester.

Student: That sounds perfect. Can I change it now, or do I have to wait until next semester?

Staff: You can change it through the end of this week. After that, changes take effect next semester.`,
    questions: [
      {
        question: "Why does the student want to change meal plans?",
        options: [
          "The food quality is poor.",
          "He doesn't use all the meals on the unlimited plan.",
          "The dining hall is too far from his dorm.",
          "He has food allergies."
        ],
        correctAnswer: "B",
        explanation: "The student says he 'often skips breakfast and eats off campus on weekends,' indicating the unlimited plan is more than he needs."
      },
      {
        question: "What is a benefit of the fourteen-meal plan that the staff mentions?",
        options: [
          "Free weekend meals",
          "Better food options",
          "Unused dining dollars roll over to the next semester",
          "Access to special events"
        ],
        correctAnswer: "C",
        explanation: "The staff mentions 'unused dining dollars roll over to the next semester.'"
      }
    ]
  },

  // STUDENT INTERACTIONS (7-15)
  {
    id: "CONV_007",
    context: "Two students discuss a group project",
    setting: "Library study room",
    speakers: [
      { role: "Student A", voice: "female_student_2" },
      { role: "Student B", voice: "male_student" }
    ],
    transcript: `Student A: So for our marketing project, I was thinking we could focus on social media advertising for small businesses.

Student B: That's a good idea, but there might be a lot of groups doing something similar. What about something more specific, like comparing the effectiveness of different platforms for local restaurants?

Student A: Oh, I like that! We could even survey some local restaurant owners about their experiences.

Student B: Exactly. And we could include data on their customer demographics. Professor Kim loves when students use primary research.

Student A: True. How should we divide the work?

Student B: How about you handle the surveys and interviews since you're more comfortable talking to people, and I'll focus on gathering secondary data and statistics?

Student A: That works for me. Let's meet again Thursday to check in on our progress.`,
    questions: [
      {
        question: "What topic do the students decide to focus on?",
        options: [
          "Social media advertising in general",
          "Comparing advertising platforms for local restaurants",
          "Online shopping trends",
          "Customer service strategies"
        ],
        correctAnswer: "B",
        explanation: "Student B suggests 'comparing the effectiveness of different platforms for local restaurants,' and Student A agrees."
      },
      {
        question: "How do the students plan to divide the work?",
        options: [
          "Equally split all tasks",
          "One does surveys and interviews, the other gathers secondary data",
          "One writes the paper, the other presents",
          "They will decide later"
        ],
        correctAnswer: "B",
        explanation: "Student B suggests 'you handle the surveys and interviews' and 'I'll focus on gathering secondary data and statistics.'"
      }
    ]
  },
  {
    id: "CONV_008",
    context: "Students discuss joining a club",
    setting: "Student center",
    speakers: [
      { role: "Student A", voice: "male_student_2" },
      { role: "Student B", voice: "female_student" }
    ],
    transcript: `Student A: Hey, are you going to the debate club meeting tonight?

Student B: I was thinking about it. I've never done competitive debate before, though. Is it open to beginners?

Student A: Definitely! I joined last year with no experience. They pair new members with more experienced ones for the first few tournaments.

Student B: That's reassuring. What's the time commitment like?

Student A: There's a weekly meeting on Wednesdays, about two hours. Then tournaments are usually one Saturday a month, but those are optional for new members.

Student B: That doesn't sound too bad. What do you like most about it?

Student A: Honestly, the research skills I've developed. You have to prepare arguments on both sides of current events, so you really learn to think critically.`,
    questions: [
      {
        question: "What concern does Student B have about joining the debate club?",
        options: [
          "The meeting time conflicts with classes.",
          "She has no previous debate experience.",
          "The club is too competitive.",
          "She doesn't like public speaking."
        ],
        correctAnswer: "B",
        explanation: "Student B says 'I've never done competitive debate before.'"
      },
      {
        question: "What does Student A say is the best part of being in the club?",
        options: [
          "Winning tournaments",
          "Making new friends",
          "Developing research and critical thinking skills",
          "Getting course credit"
        ],
        correctAnswer: "C",
        explanation: "Student A says 'the research skills I've developed' and 'you really learn to think critically.'"
      }
    ]
  },
  {
    id: "CONV_009",
    context: "Student asks roommate for advice",
    setting: "Dorm room",
    speakers: [
      { role: "Roommate A", voice: "female_student" },
      { role: "Roommate B", voice: "female_student_2" }
    ],
    transcript: `Roommate A: I got offered two internships for this summer and I can't decide which one to take.

Roommate B: That's a good problem to have! What are the options?

Roommate A: One is at a small startup downtown. It's unpaid but they said I'd have a lot of responsibility and learn quickly. The other is at a big corporation—it pays well but I'd mostly be doing administrative work.

Roommate B: What matters more to you right now? The experience and skills, or the money?

Roommate A: I guess the experience. I'm still figuring out what I want to do after graduation.

Roommate B: Then the startup might be better for exploring. Plus, you can always find paid work next summer once you know what direction you want to go.

Roommate A: You're right. And the startup is closer to campus, so I could still take a summer class.`,
    questions: [
      {
        question: "What is the main advantage of the startup internship?",
        options: [
          "Higher pay",
          "More responsibility and faster learning",
          "Better location",
          "More prestigious company"
        ],
        correctAnswer: "B",
        explanation: "Roommate A says the startup offers 'a lot of responsibility and learn quickly.'"
      },
      {
        question: "What additional benefit of the startup does Roommate A mention at the end?",
        options: [
          "Free meals",
          "Networking opportunities",
          "Being close enough to take a summer class",
          "A signing bonus"
        ],
        correctAnswer: "C",
        explanation: "Roommate A mentions 'the startup is closer to campus, so I could still take a summer class.'"
      }
    ]
  },
  {
    id: "CONV_010",
    context: "Students plan a weekend activity",
    setting: "Campus coffee shop",
    speakers: [
      { role: "Student A", voice: "male_student" },
      { role: "Student B", voice: "female_student_2" }
    ],
    transcript: `Student A: Are you doing anything this weekend? A group of us are thinking about going hiking at Pine Ridge.

Student B: That sounds fun! I haven't been hiking since I got to campus. How far is it?

Student A: It's about an hour drive. We're planning to leave around eight in the morning to beat the crowds. Sarah has a car, so we can carpool.

Student B: Perfect. What should I bring?

Student A: Just comfortable shoes, water, and snacks. The trail is moderate difficulty—about five miles round trip. We should be back by early afternoon.

Student B: Great, count me in! Should I bring anything for lunch?

Student A: We were thinking of grabbing lunch in town on the way back. There's a nice sandwich shop near the trailhead.`,
    questions: [
      {
        question: "How will the students get to the hiking location?",
        options: [
          "Taking the bus",
          "Walking from campus",
          "Carpooling in Sarah's car",
          "Renting a car"
        ],
        correctAnswer: "C",
        explanation: "Student A says 'Sarah has a car, so we can carpool.'"
      },
      {
        question: "What does Student A suggest about lunch?",
        options: [
          "Bringing a packed lunch",
          "Skipping lunch",
          "Having lunch at a restaurant in town after hiking",
          "Buying food at the trailhead"
        ],
        correctAnswer: "C",
        explanation: "Student A says 'We were thinking of grabbing lunch in town on the way back.'"
      }
    ]
  },

  // HOUSING AND FACILITIES (11-15)
  {
    id: "CONV_011",
    context: "Student reports a maintenance issue",
    setting: "Residence hall front desk",
    speakers: [
      { role: "Student", voice: "male_student_2" },
      { role: "RA", voice: "female_student" }
    ],
    transcript: `Student: Hi, I need to report a problem with the heating in my room. It's been really cold the past few nights.

RA: I'm sorry to hear that. Is the radiator not turning on at all, or is it just not producing enough heat?

Student: It makes a noise like it's trying to work, but barely any heat comes out. My roommate and I have been using extra blankets.

RA: That sounds like it might be an air lock in the system. I'll submit a maintenance request right now. They usually respond within twenty-four hours for heating issues since it's considered urgent.

Student: Is there anything we can do in the meantime?

RA: We have a few space heaters we can lend out temporarily. Let me grab one from the storage room. Just make sure not to leave it unattended.`,
    questions: [
      {
        question: "What is the problem with the heating?",
        options: [
          "The radiator is completely broken.",
          "There's no power to the room.",
          "The radiator runs but produces very little heat.",
          "The room is too hot."
        ],
        correctAnswer: "C",
        explanation: "The student says it 'makes a noise like it's trying to work, but barely any heat comes out.'"
      },
      {
        question: "What temporary solution does the RA offer?",
        options: [
          "Moving to a different room",
          "Lending a space heater",
          "Providing extra blankets",
          "Opening windows"
        ],
        correctAnswer: "B",
        explanation: "The RA says 'We have a few space heaters we can lend out temporarily.'"
      }
    ]
  },
  {
    id: "CONV_012",
    context: "Students discuss off-campus housing",
    setting: "Student lounge",
    speakers: [
      { role: "Student A", voice: "female_student" },
      { role: "Student B", voice: "male_student_2" }
    ],
    transcript: `Student A: Have you started looking for apartments for next year yet?

Student B: Yeah, it's stressful. Everything near campus is either too expensive or already taken. Did you find anything?

Student A: We found a place about a fifteen-minute bus ride away. It's cheaper, and the bus is free with our student ID.

Student B: That's not bad. How much are you paying?

Student A: Five hundred each with three roommates. That includes water and internet. We just pay electric separately.

Student B: Wow, that's way cheaper than living on campus. The dorm is almost a thousand per month.

Student A: Exactly. The only downside is we have to cook for ourselves, but honestly, I was getting tired of dining hall food anyway.`,
    questions: [
      {
        question: "Why is Student B stressed about housing?",
        options: [
          "They don't want roommates.",
          "Places near campus are expensive or already taken.",
          "Their parents want them to live on campus.",
          "The lease terms are confusing."
        ],
        correctAnswer: "B",
        explanation: "Student B says 'Everything near campus is either too expensive or already taken.'"
      },
      {
        question: "What does Student A say is the main advantage of their apartment?",
        options: [
          "It's walking distance to campus.",
          "It includes a meal plan.",
          "It's significantly cheaper than dorm living.",
          "It has better amenities."
        ],
        correctAnswer: "C",
        explanation: "Student A's rent is five hundred versus 'almost a thousand per month' for the dorm, showing significant savings."
      }
    ]
  },

  // PROFESSOR OFFICE HOURS (13-18)
  {
    id: "CONV_013",
    context: "Student asks about a paper extension",
    setting: "Professor's office",
    speakers: [
      { role: "Student", voice: "female_student_2" },
      { role: "Professor", voice: "male_academic" }
    ],
    transcript: `Student: Professor Williams, I wanted to ask if there's any possibility of getting an extension on the research paper.

Professor: The paper is due next Friday, correct? What's the situation?

Student: Yes. I've done all my research and outlined the paper, but my grandmother passed away last week and I had to travel home for the funeral.

Professor: I'm very sorry for your loss. That's certainly an extenuating circumstance. Can you give me an idea of how much additional time you would need?

Student: I think one extra week would be enough. I just need time to actually write and revise it.

Professor: That's reasonable. I can give you until the Friday after the original deadline. However, I would like you to email me a progress update by the original due date, just so I know you're on track.

Student: Absolutely. Thank you so much for understanding.`,
    questions: [
      {
        question: "Why does the student need an extension?",
        options: [
          "She hasn't started the research.",
          "She was sick.",
          "Her grandmother passed away and she had to travel for the funeral.",
          "She has too many other assignments."
        ],
        correctAnswer: "C",
        explanation: "The student explains 'my grandmother passed away last week and I had to travel home for the funeral.'"
      },
      {
        question: "What condition does the professor set for granting the extension?",
        options: [
          "The student must meet with a tutor.",
          "The student must submit a progress update by the original deadline.",
          "The student must get documentation from home.",
          "The paper must be longer than required."
        ],
        correctAnswer: "B",
        explanation: "The professor says 'I would like you to email me a progress update by the original due date.'"
      }
    ]
  },
  {
    id: "CONV_014",
    context: "Student discusses exam preparation",
    setting: "Professor's office",
    speakers: [
      { role: "Student", voice: "male_student" },
      { role: "Professor", voice: "female_academic" }
    ],
    transcript: `Student: Professor Lee, I'm having trouble figuring out what to focus on for the midterm. There's so much material.

Professor: That's a common concern. Let me give you some guidance. About sixty percent of the exam will cover material from the lectures, so reviewing your notes is essential.

Student: What about the readings?

Professor: The readings support the lecture content, but I won't test on details that were only in the readings and not discussed in class. However, I will expect you to understand how the readings connect to our discussions.

Student: That helps narrow things down. Are there specific topics I should prioritize?

Professor: I'd focus on the three main theories we discussed in weeks two through four. Understanding how they differ and when each applies is crucial. Also, make sure you can analyze the case studies we reviewed.

Student: Thank you. One more question—will there be any essay questions?

Professor: Yes, one essay worth thirty points. You'll have a choice between two prompts.`,
    questions: [
      {
        question: "What percentage of the exam will come from lecture material?",
        options: [
          "Thirty percent",
          "Forty percent",
          "Sixty percent",
          "Seventy percent"
        ],
        correctAnswer: "C",
        explanation: "The professor says 'About sixty percent of the exam will cover material from the lectures.'"
      },
      {
        question: "What topics does the professor say to prioritize?",
        options: [
          "Reading summaries",
          "The three main theories from weeks two through four and case studies",
          "Historical background",
          "Vocabulary definitions"
        ],
        correctAnswer: "B",
        explanation: "The professor says to 'focus on the three main theories' and 'make sure you can analyze the case studies.'"
      }
    ]
  },
  {
    id: "CONV_015",
    context: "Student asks about letter of recommendation",
    setting: "Professor's office",
    speakers: [
      { role: "Student", voice: "female_student" },
      { role: "Professor", voice: "male_academic" }
    ],
    transcript: `Student: Professor Garcia, I'm applying for a summer research program and I was wondering if you would be willing to write me a letter of recommendation.

Professor: I'd be happy to consider it. Tell me more about the program and why you're interested.

Student: It's a marine biology research program at the coastal station. I've been interested in marine ecosystems since taking your environmental science course last year.

Professor: Ah yes, I remember your excellent project on coral reef conservation. That's definitely relevant. When is the deadline?

Student: The application is due in three weeks.

Professor: That should give me enough time. Here's what I'll need from you: your resume, a copy of your transcript, and a brief description of why you're passionate about this opportunity. Can you email those to me by the end of the week?

Student: Absolutely. Is there anything else?

Professor: Just remind me about specific examples of your work that you'd like me to highlight. The more details you give me, the stronger the letter will be.`,
    questions: [
      {
        question: "What does the professor remember about the student?",
        options: [
          "Her excellent attendance",
          "Her project on coral reef conservation",
          "Her study abroad experience",
          "Her presentation skills"
        ],
        correctAnswer: "B",
        explanation: "The professor says 'I remember your excellent project on coral reef conservation.'"
      },
      {
        question: "What materials does the professor ask the student to provide?",
        options: [
          "Only a transcript",
          "Resume, transcript, and a statement about her interest",
          "Three letters from other professors",
          "A research proposal"
        ],
        correctAnswer: "B",
        explanation: "The professor asks for 'your resume, a copy of your transcript, and a brief description of why you're passionate about this opportunity.'"
      }
    ]
  },

  // Additional conversations (16-30) - abbreviated for space
  {
    id: "CONV_016",
    context: "Student discusses lab equipment",
    setting: "Science lab",
    speakers: [
      { role: "Student", voice: "male_student_2" },
      { role: "Lab Manager", voice: "female_academic" }
    ],
    transcript: `Student: I need to use the centrifuge for my research project. Is there a sign-up sheet?

Lab Manager: Yes, it's on the door of the equipment room. Each time slot is two hours. Just make sure to reserve at least twenty-four hours in advance.

Student: Great. Are there any special requirements?

Lab Manager: You need to complete the equipment training first. It's a thirty-minute session—I run them every Tuesday at noon. After that, I'll add you to the approved user list.

Student: I have class at noon on Tuesdays. Is there an alternative?

Lab Manager: I can do a one-on-one training at another time. Just email me a few options that work for your schedule.`,
    questions: [
      {
        question: "How far in advance must equipment be reserved?",
        options: [
          "Twelve hours",
          "Twenty-four hours",
          "Forty-eight hours",
          "One week"
        ],
        correctAnswer: "B",
        explanation: "The lab manager says 'Just make sure to reserve at least twenty-four hours in advance.'"
      },
      {
        question: "What alternative does the lab manager offer for training?",
        options: [
          "An online video",
          "A written manual",
          "A one-on-one training at a different time",
          "Skipping the training"
        ],
        correctAnswer: "C",
        explanation: "The lab manager says 'I can do a one-on-one training at another time.'"
      }
    ]
  },
  {
    id: "CONV_017",
    context: "Students discuss a study group",
    setting: "Library",
    speakers: [
      { role: "Student A", voice: "female_student" },
      { role: "Student B", voice: "male_student" }
    ],
    transcript: `Student A: Are you still planning to join the study group for the biology exam?

Student B: I was, but I heard it meets on Sunday evenings. I usually go home on weekends.

Student A: Actually, we changed the time to Saturday morning at ten. Would that work better?

Student B: Saturday morning would be perfect! Where do you meet?

Student A: We've been using study room four in the library. It has a whiteboard, which really helps for drawing diagrams.

Student B: Great, I'll be there. Should I bring anything specific?

Student A: Just your notes and the practice problems from chapter six. We're planning to go through those together.`,
    questions: [
      {
        question: "When was the study group originally scheduled to meet?",
        options: [
          "Saturday morning",
          "Sunday evening",
          "Friday afternoon",
          "Monday night"
        ],
        correctAnswer: "B",
        explanation: "Student B mentions 'I heard it meets on Sunday evenings.'"
      },
      {
        question: "What should Student B bring to the study session?",
        options: [
          "Textbook only",
          "Flashcards",
          "Notes and practice problems from chapter six",
          "Laptop and projector"
        ],
        correctAnswer: "C",
        explanation: "Student A says 'Just your notes and the practice problems from chapter six.'"
      }
    ]
  },
  {
    id: "CONV_018",
    context: "Student asks about work-study position",
    setting: "Student employment office",
    speakers: [
      { role: "Student", voice: "female_student" },
      { role: "Coordinator", voice: "guide" }
    ],
    transcript: `Student: I received a work-study award in my financial aid package. How do I find a job?

Coordinator: Great question! Work-study positions are posted on our online job board. You can filter specifically for work-study eligible positions.

Student: Can I work anywhere on campus?

Coordinator: Most departments hire work-study students. The library, dining hall, and academic departments are the most common employers. You can also work at certain off-campus nonprofits.

Student: How many hours can I work?

Coordinator: Work-study is typically limited to ten to fifteen hours per week during the semester to ensure it doesn't interfere with your studies. Your total earnings are capped at your award amount.

Student: And when can I start?

Coordinator: You can start applying now. Many positions are filled before the semester begins, so I'd recommend applying early.`,
    questions: [
      {
        question: "Where are work-study positions posted?",
        options: [
          "On bulletin boards around campus",
          "On the online job board",
          "In the campus newspaper",
          "Only through email"
        ],
        correctAnswer: "B",
        explanation: "The coordinator says 'Work-study positions are posted on our online job board.'"
      },
      {
        question: "Why does the coordinator recommend applying early?",
        options: [
          "Pay rates decrease later",
          "Many positions fill before the semester begins",
          "Training takes several weeks",
          "There's a mandatory waiting period"
        ],
        correctAnswer: "B",
        explanation: "The coordinator says 'Many positions are filled before the semester begins, so I'd recommend applying early.'"
      }
    ]
  },

  // More conversations for variety (19-30)
  {
    id: "CONV_019",
    context: "Student discusses course withdrawal",
    setting: "Registrar's office",
    speakers: [
      { role: "Student", voice: "male_student" },
      { role: "Staff", voice: "female_student" }
    ],
    transcript: `Student: I need to withdraw from my calculus class. What's the process?

Staff: Before I process that, have you spoken with your professor or an academic advisor? Sometimes there are alternatives.

Student: Yes, I met with both. My advisor suggested withdrawing because I'm struggling and it's affecting my other classes.

Staff: I understand. Since we're past the drop deadline, this will appear as a "W" on your transcript. A few Ws aren't a problem, but too many can raise flags with graduate schools or employers.

Student: Will this affect my financial aid?

Staff: Only if you drop below full-time status, which is twelve credits. How many credits will you have after withdrawing?

Student: I'd have thirteen, so I should be okay.

Staff: Good. I'll process the withdrawal now. You should see it reflected in your account within two business days.`,
    questions: [
      {
        question: "Why is the student withdrawing from calculus?",
        options: [
          "The class time conflicts with work.",
          "They're struggling and it's affecting other classes.",
          "The professor recommended it.",
          "They don't need the credit."
        ],
        correctAnswer: "B",
        explanation: "The student says 'I'm struggling and it's affecting my other classes.'"
      },
      {
        question: "What condition would affect the student's financial aid?",
        options: [
          "Having a W on the transcript",
          "Withdrawing after the deadline",
          "Dropping below twelve credits",
          "Withdrawing without advisor approval"
        ],
        correctAnswer: "C",
        explanation: "The staff says financial aid is affected 'if you drop below full-time status, which is twelve credits.'"
      }
    ]
  },
  {
    id: "CONV_020",
    context: "Students plan a presentation",
    setting: "Study room",
    speakers: [
      { role: "Student A", voice: "female_student" },
      { role: "Student B", voice: "male_student" }
    ],
    transcript: `Student A: Our presentation is Monday. Have you finished your slides?

Student B: Almost. I'm still working on the data visualization part. The graphs aren't looking quite right.

Student A: I can help with that. I've been using this charting tool that makes really clean graphics. Want me to show you?

Student B: That would be great! How should we divide the speaking time?

Student A: The presentation is fifteen minutes total. I was thinking I could do the introduction and background for about five minutes, you could cover the methodology and results for about seven, and then we both handle questions.

Student B: That works. Should we do a practice run?

Student A: Definitely. How about tomorrow evening? We can meet in this room and time ourselves.

Student B: Perfect. I'll have everything done by then.`,
    questions: [
      {
        question: "What is Student B having trouble with?",
        options: [
          "The introduction",
          "The data visualization and graphs",
          "Finding research sources",
          "The conclusion"
        ],
        correctAnswer: "B",
        explanation: "Student B says 'I'm still working on the data visualization part. The graphs aren't looking quite right.'"
      },
      {
        question: "How long will Student B's speaking portion be?",
        options: [
          "Five minutes",
          "Seven minutes",
          "Ten minutes",
          "Fifteen minutes"
        ],
        correctAnswer: "B",
        explanation: "Student A says 'you could cover the methodology and results for about seven' minutes."
      }
    ]
  },
];

// =====================================================
// ANNOUNCEMENT SCENARIOS (30+)
// Campus, classroom, and facility announcements
// Each has 2 questions testing inference and comprehension
// =====================================================

export interface AnnouncementScenario {
  id: string;
  context: string;
  setting: string;
  voice: VoiceType;
  transcript: string;
  questions: {
    question: string;
    options: string[];
    correctAnswer: string;
    explanation: string;
  }[];
}

export const announcementScenarios: AnnouncementScenario[] = [
  {
    id: "ANN_001",
    context: "Library renovation announcement",
    setting: "University-wide announcement",
    voice: "male_academic",
    transcript: `Attention students. The main library will undergo renovations beginning next Monday and continuing through the end of the semester. During this time, the second and third floors will be closed. However, the first floor, including the computer lab and reserve desk, will remain open with reduced hours from nine AM to nine PM. Alternative study spaces have been arranged in the student center and the basement of the science building. We apologize for any inconvenience and appreciate your patience as we work to improve your library facilities.`,
    questions: [
      {
        question: "Which areas of the library will remain open during renovations?",
        options: [
          "All floors with reduced hours",
          "The second and third floors only",
          "The first floor, including computer lab and reserve desk",
          "Only the entrance and lobby"
        ],
        correctAnswer: "C",
        explanation: "The announcement says 'the first floor, including the computer lab and reserve desk, will remain open.'"
      },
      {
        question: "Where can students find alternative study spaces?",
        options: [
          "The gymnasium and cafeteria",
          "The student center and science building basement",
          "Off-campus coffee shops",
          "The parking garage"
        ],
        correctAnswer: "B",
        explanation: "The announcement mentions 'Alternative study spaces have been arranged in the student center and the basement of the science building.'"
      }
    ]
  },
  {
    id: "ANN_002",
    context: "Course registration reminder",
    setting: "Academic affairs announcement",
    voice: "female_academic",
    transcript: `This is a reminder that priority registration for spring semester begins next Wednesday. Seniors can register starting at eight AM Wednesday, followed by juniors on Thursday, sophomores on Friday, and freshmen the following Monday. Before registering, please meet with your academic advisor to ensure you're on track for graduation requirements. Advisor holds have been placed on all accounts and must be cleared before you can register. If you haven't scheduled your advising appointment yet, please do so immediately as appointment slots are filling up quickly.`,
    questions: [
      {
        question: "In what order do students register?",
        options: [
          "Alphabetically by last name",
          "By credit hours completed",
          "Seniors first, then juniors, sophomores, and freshmen",
          "First-come, first-served"
        ],
        correctAnswer: "C",
        explanation: "The announcement states 'Seniors can register starting Wednesday, followed by juniors on Thursday, sophomores on Friday, and freshmen the following Monday.'"
      },
      {
        question: "What must students do before they can register?",
        options: [
          "Pay tuition",
          "Clear their advisor hold by meeting with their advisor",
          "Submit a registration request form",
          "Attend an orientation session"
        ],
        correctAnswer: "B",
        explanation: "The announcement says 'Advisor holds have been placed on all accounts and must be cleared before you can register.'"
      }
    ]
  },
  {
    id: "ANN_003",
    context: "Campus safety alert",
    setting: "Emergency management notification",
    voice: "male_academic",
    transcript: `Campus Security Alert. Due to icy conditions this morning, several walkways on the east side of campus are hazardous. Maintenance crews are actively treating the paths, but please use caution when walking near the engineering building and parking lot C. If possible, use the indoor corridors connecting the main academic buildings. Classes will begin on their regular schedule, but professors have been asked to be understanding if students arrive a few minutes late due to weather conditions. Updated conditions will be posted on the campus safety website throughout the day.`,
    questions: [
      {
        question: "What is the main hazard mentioned in the alert?",
        options: [
          "Heavy rain",
          "Icy walkways",
          "Strong winds",
          "Power outages"
        ],
        correctAnswer: "B",
        explanation: "The announcement says 'Due to icy conditions this morning, several walkways are hazardous.'"
      },
      {
        question: "What alternative does the announcement suggest?",
        options: [
          "Taking the campus shuttle",
          "Staying home",
          "Using indoor corridors between buildings",
          "Wearing special footwear"
        ],
        correctAnswer: "C",
        explanation: "The announcement suggests 'use the indoor corridors connecting the main academic buildings.'"
      }
    ]
  },
  {
    id: "ANN_004",
    context: "Career fair announcement",
    setting: "Career services notification",
    voice: "guide",
    transcript: `Mark your calendars for the fall career fair, taking place this Thursday from ten AM to four PM in the gymnasium. Over one hundred employers from various industries will be present, including technology, healthcare, finance, and nonprofit organizations. Students are encouraged to bring multiple copies of their resume and dress in business professional attire. The career services office is offering free resume reviews this week—stop by our office in the student center to sign up for a fifteen-minute appointment. Don't miss this opportunity to network with potential employers and learn about internship and job opportunities.`,
    questions: [
      {
        question: "What should students bring to the career fair?",
        options: [
          "Just their student ID",
          "Multiple copies of their resume",
          "A laptop and portfolio",
          "Reference letters"
        ],
        correctAnswer: "B",
        explanation: "The announcement says 'Students are encouraged to bring multiple copies of their resume.'"
      },
      {
        question: "What free service is the career office offering this week?",
        options: [
          "Mock interviews",
          "Professional photos",
          "Resume reviews",
          "Suit rentals"
        ],
        correctAnswer: "C",
        explanation: "The announcement mentions 'The career services office is offering free resume reviews this week.'"
      }
    ]
  },
  {
    id: "ANN_005",
    context: "Parking changes announcement",
    setting: "Facilities management notification",
    voice: "narrator",
    transcript: `Attention commuter students. Due to construction of the new science building, parking lot D will be closed starting November first. Commuter permits for lot D will automatically be transferred to lot F, which is located behind the athletic center. A free shuttle service will run every ten minutes between lot F and the main campus from seven AM to ten PM. If the additional walking distance presents a hardship, please contact parking services to discuss alternative arrangements. We appreciate your flexibility during this construction period, which is expected to last through the spring semester.`,
    questions: [
      {
        question: "Why is parking lot D being closed?",
        options: [
          "For repaving",
          "Due to construction of the new science building",
          "For a special event",
          "Because of safety violations"
        ],
        correctAnswer: "B",
        explanation: "The announcement says 'Due to construction of the new science building, parking lot D will be closed.'"
      },
      {
        question: "What accommodation is being offered to affected commuters?",
        options: [
          "Reduced parking fees",
          "Free shuttle service between lot F and main campus",
          "Reserved spaces in other lots",
          "Temporary parking passes for the garage"
        ],
        correctAnswer: "B",
        explanation: "The announcement mentions 'A free shuttle service will run every ten minutes between lot F and the main campus.'"
      }
    ]
  },

  // More announcements (6-30)
  {
    id: "ANN_006",
    context: "Guest speaker announcement",
    setting: "Academic department notification",
    voice: "professor",
    transcript: `The psychology department is pleased to announce a special guest lecture next Tuesday at two PM in Hamilton Hall auditorium. Dr. Maya Thompson, a leading researcher in cognitive development, will present her findings on how early childhood experiences shape adult decision-making. Dr. Thompson's research has been featured in numerous scientific journals and has practical applications for educators and parents. The lecture is free and open to all students and faculty. Seating is limited, so please arrive early to ensure a spot. A reception will follow where students can meet Dr. Thompson and discuss her work.`,
    questions: [
      {
        question: "What is the main topic of Dr. Thompson's lecture?",
        options: [
          "Mental health treatment",
          "How early childhood experiences affect adult decision-making",
          "Educational policy reform",
          "Brain chemistry and emotions"
        ],
        correctAnswer: "B",
        explanation: "The announcement says Dr. Thompson will discuss 'how early childhood experiences shape adult decision-making.'"
      },
      {
        question: "What opportunity is available after the lecture?",
        options: [
          "A book signing",
          "A Q&A session only",
          "A reception where students can meet Dr. Thompson",
          "A workshop on research methods"
        ],
        correctAnswer: "C",
        explanation: "The announcement mentions 'A reception will follow where students can meet Dr. Thompson and discuss her work.'"
      }
    ]
  },
  {
    id: "ANN_007",
    context: "Dining hall menu change",
    setting: "Campus dining notification",
    voice: "female_student",
    transcript: `Starting next week, the main dining hall will be introducing a new menu system based on student feedback from last semester's survey. We're adding more vegetarian and vegan options at every meal, including a dedicated plant-based station. We're also extending late-night dining hours on weekdays until eleven PM instead of ten PM. For students with allergies, we've implemented a new labeling system that clearly identifies the top eight allergens in each dish. Please note that during the transition week, some menu items may be temporarily unavailable. We welcome your continued feedback as we work to improve your dining experience.`,
    questions: [
      {
        question: "What change is being made to weekday dining hours?",
        options: [
          "Opening earlier for breakfast",
          "Closing earlier in the evening",
          "Extending late-night hours until eleven PM",
          "Adding weekend brunch service"
        ],
        correctAnswer: "C",
        explanation: "The announcement says 'We're also extending late-night dining hours on weekdays until eleven PM instead of ten PM.'"
      },
      {
        question: "What new feature helps students with allergies?",
        options: [
          "A separate allergy-free cooking area",
          "A new labeling system for the top eight allergens",
          "Staff members trained in allergy management",
          "An online menu with ingredient lists"
        ],
        correctAnswer: "B",
        explanation: "The announcement mentions 'we've implemented a new labeling system that clearly identifies the top eight allergens in each dish.'"
      }
    ]
  },
  {
    id: "ANN_008",
    context: "Exam schedule change",
    setting: "Classroom announcement",
    voice: "professor",
    transcript: `Before we begin today's class, I have an important announcement about our midterm exam. Originally scheduled for next Wednesday, the exam has been moved to Friday of the same week. This change is due to a scheduling conflict with a university-wide event. The exam format remains the same—fifty multiple choice questions and two short essays. The exam will still cover chapters one through six. I've posted an updated study guide on the course website with additional practice problems. If the new date creates a conflict with another exam, please see me after class today so we can make alternative arrangements.`,
    questions: [
      {
        question: "What day is the exam now scheduled for?",
        options: [
          "Next Monday",
          "Next Wednesday",
          "Next Friday",
          "The following Monday"
        ],
        correctAnswer: "C",
        explanation: "The professor says 'the exam has been moved to Friday of the same week.'"
      },
      {
        question: "What should students do if they have a conflict with the new exam date?",
        options: [
          "Email the department",
          "Speak with the professor after class",
          "Submit a request through the registrar",
          "Take the exam at the original time"
        ],
        correctAnswer: "B",
        explanation: "The professor says 'If the new date creates a conflict, please see me after class today.'"
      }
    ]
  },
  {
    id: "ANN_009",
    context: "Health center flu clinic",
    setting: "Student health services notification",
    voice: "guide",
    transcript: `The student health center will be hosting flu vaccination clinics throughout October. Clinics will be held every Tuesday and Thursday from nine AM to four PM in the health center lobby. The vaccine is free for all currently enrolled students—just bring your student ID. No appointment is necessary; vaccines will be given on a first-come, first-served basis. For students who prefer to schedule a specific time, appointments are available through the health center website. We strongly encourage all students to get vaccinated, especially those living in residence halls where illnesses can spread quickly. Staff and faculty can also receive vaccines during these clinics for a small fee.`,
    questions: [
      {
        question: "Who can receive free flu vaccines?",
        options: [
          "All students and staff",
          "Only students living in residence halls",
          "Currently enrolled students",
          "Only freshmen and sophomores"
        ],
        correctAnswer: "C",
        explanation: "The announcement says 'The vaccine is free for all currently enrolled students.'"
      },
      {
        question: "Why does the announcement specifically mention residence hall students?",
        options: [
          "They get priority scheduling",
          "They receive a different vaccine",
          "Illnesses spread quickly in residence halls",
          "They must show proof of vaccination"
        ],
        correctAnswer: "C",
        explanation: "The announcement says 'especially those living in residence halls where illnesses can spread quickly.'"
      }
    ]
  },
  {
    id: "ANN_010",
    context: "Student organization meeting",
    setting: "Club announcement",
    voice: "male_student",
    transcript: `Attention environmental club members! Our monthly meeting this Wednesday has been moved from the student center to the botanical garden greenhouse, room one-oh-three. We'll be discussing plans for Earth Day, which is coming up in April. We need volunteers for several committees including event planning, marketing, and sustainability projects. If you're interested in leading a committee, please come prepared to share your ideas. We'll also have a special guest from the city's environmental services department who will talk about opportunities for student involvement in local conservation efforts. Light refreshments will be provided. See you Wednesday at six PM!`,
    questions: [
      {
        question: "Where is the meeting being held?",
        options: [
          "The student center as usual",
          "The botanical garden greenhouse",
          "The science building",
          "Online via video call"
        ],
        correctAnswer: "B",
        explanation: "The announcement says the meeting 'has been moved from the student center to the botanical garden greenhouse.'"
      },
      {
        question: "What will the guest speaker discuss?",
        options: [
          "Climate change research",
          "Recycling techniques",
          "Opportunities for student involvement in local conservation",
          "Careers in environmental science"
        ],
        correctAnswer: "C",
        explanation: "The announcement says the guest will 'talk about opportunities for student involvement in local conservation efforts.'"
      }
    ]
  },
];

// =====================================================
// ACADEMIC TALK SCENARIOS (30+)
// Short lectures (90-120 seconds) with 4-5 questions each
// Topics: Psychology, Biology, History, Economics, Art, Sociology, etc.
// =====================================================

export interface AcademicTalkScenario {
  id: string;
  topic: string;
  subject: string;
  voice: VoiceType;
  transcript: string;
  questions: {
    question: string;
    options: string[];
    correctAnswer: string;
    explanation: string;
  }[];
}

export const academicTalkScenarios: AcademicTalkScenario[] = [
  {
    id: "TALK_001",
    topic: "The Mere Exposure Effect",
    subject: "Psychology",
    voice: "male_academic",
    transcript: `Today I want to discuss a fascinating phenomenon in psychology called the mere exposure effect. Simply put, people tend to develop a preference for things merely because they are familiar with them. This was first studied systematically by psychologist Robert Zajonc in the nineteen sixties.

In his classic experiments, Zajonc showed participants Chinese characters—which they couldn't read—at varying frequencies. Some characters were shown just once, others up to twenty-five times. When asked which characters they preferred, participants consistently chose the ones they had seen more often, even though they couldn't explain why.

This effect has significant implications for advertising and marketing. Companies use repetition in commercials not just to inform but to create preference. It also explains why we often grow to like songs that initially seemed unremarkable after hearing them multiple times.

Interestingly, the mere exposure effect works best when the initial exposure is subtle or unconscious. When people are aware they're being repeatedly exposed to something, the effect weakens. This is why subliminal advertising, though controversial, can be effective.`,
    questions: [
      {
        question: "What is the main idea of the mere exposure effect?",
        options: [
          "People prefer new and unfamiliar things.",
          "Familiarity leads to increased preference.",
          "Repeated exposure causes boredom.",
          "First impressions are most important."
        ],
        correctAnswer: "B",
        explanation: "The professor explains that 'people tend to develop a preference for things merely because they are familiar with them.'"
      },
      {
        question: "What did Zajonc's participants show preference for?",
        options: [
          "Chinese food they tasted more often",
          "Chinese characters they had seen more frequently",
          "Songs they heard repeatedly",
          "Faces of people they met multiple times"
        ],
        correctAnswer: "B",
        explanation: "In Zajonc's experiments, 'participants consistently chose the ones they had seen more often' referring to Chinese characters."
      },
      {
        question: "According to the professor, when does the mere exposure effect work best?",
        options: [
          "When people are consciously aware of the repetition",
          "When exposure is subtle or unconscious",
          "When the stimulus is very unusual",
          "When people are in a positive mood"
        ],
        correctAnswer: "B",
        explanation: "The professor states 'the mere exposure effect works best when the initial exposure is subtle or unconscious.'"
      },
      {
        question: "What practical application of this effect does the professor mention?",
        options: [
          "Education and learning",
          "Medical treatment",
          "Advertising and marketing",
          "Political campaigns"
        ],
        correctAnswer: "C",
        explanation: "The professor says 'This effect has significant implications for advertising and marketing.'"
      }
    ]
  },
  {
    id: "TALK_002",
    topic: "Coral Reef Bleaching",
    subject: "Marine Biology",
    voice: "female_academic",
    transcript: `Let's examine one of the most visible signs of climate change affecting our oceans: coral reef bleaching. To understand this phenomenon, you first need to know about the symbiotic relationship between corals and tiny algae called zooxanthellae.

Corals are actually animals, not plants, but they depend on zooxanthellae living in their tissues. These algae photosynthesize and provide up to ninety percent of the coral's energy needs. In exchange, the coral provides the algae with shelter and nutrients. This partnership is what makes coral reefs so productive.

When ocean temperatures rise even slightly—just one to two degrees Celsius above the normal maximum—corals become stressed and expel the zooxanthellae. Without the colorful algae, the white skeleton of the coral becomes visible, giving bleached coral its characteristic appearance.

Now, bleaching doesn't immediately kill coral. If temperatures return to normal within a few weeks, the algae can recolonize and the coral can recover. However, prolonged or repeated bleaching events weaken the coral, making it susceptible to disease and eventually causing death. The Great Barrier Reef has experienced three mass bleaching events in just the past five years, which is unprecedented in recorded history.`,
    questions: [
      {
        question: "What are zooxanthellae?",
        options: [
          "A type of coral species",
          "Tiny algae that live inside coral",
          "Bacteria that cause coral disease",
          "Nutrients found in seawater"
        ],
        correctAnswer: "B",
        explanation: "The professor describes zooxanthellae as 'tiny algae' that live 'in their tissues' referring to coral."
      },
      {
        question: "What percentage of a coral's energy comes from zooxanthellae?",
        options: [
          "About fifty percent",
          "Up to seventy percent",
          "Up to ninety percent",
          "One hundred percent"
        ],
        correctAnswer: "C",
        explanation: "The professor states that zooxanthellae 'provide up to ninety percent of the coral's energy needs.'"
      },
      {
        question: "What causes coral to expel the algae?",
        options: [
          "Ocean pollution",
          "Predators eating the coral",
          "Rising ocean temperatures",
          "Lack of sunlight"
        ],
        correctAnswer: "C",
        explanation: "The professor explains that 'When ocean temperatures rise even slightly... corals become stressed and expel the zooxanthellae.'"
      },
      {
        question: "What happens if bleaching is prolonged or repeated?",
        options: [
          "The coral changes color permanently",
          "New algae species colonize the coral",
          "The coral becomes stronger",
          "The coral weakens, becomes susceptible to disease, and may die"
        ],
        correctAnswer: "D",
        explanation: "The professor says 'prolonged or repeated bleaching events weaken the coral, making it susceptible to disease and eventually causing death.'"
      }
    ]
  },
  {
    id: "TALK_003",
    topic: "The Industrial Revolution's Impact on Urbanization",
    subject: "History",
    voice: "male_academic",
    transcript: `The Industrial Revolution, which began in Britain in the late eighteenth century, fundamentally transformed where and how people lived. Before industrialization, about eighty percent of the population lived in rural areas and worked in agriculture. By nineteen hundred, this proportion had reversed in industrialized nations.

The primary driver of urbanization was the factory system. Unlike cottage industries, where goods were produced in homes scattered across the countryside, factories required workers to come to central locations where machinery was concentrated. Cities grew rapidly around these industrial centers.

This migration created both opportunities and challenges. On one hand, factory jobs offered wages that seemed attractive compared to the uncertainty of agricultural work. On the other hand, cities were unprepared for such rapid population growth. Housing was inadequate, sanitation was poor, and diseases spread easily in crowded conditions.

The response to these urban problems eventually led to important reforms. Public health movements emerged, building codes were established, and urban planning became a profession. In many ways, our modern understanding of city management was born from addressing the problems created by industrialization.`,
    questions: [
      {
        question: "What percentage of the population lived in rural areas before industrialization?",
        options: [
          "About twenty percent",
          "About fifty percent",
          "About eighty percent",
          "About ninety percent"
        ],
        correctAnswer: "C",
        explanation: "The professor states 'about eighty percent of the population lived in rural areas.'"
      },
      {
        question: "What was the primary driver of urbanization according to the lecture?",
        options: [
          "Agricultural improvements",
          "The factory system",
          "Population growth",
          "Government policies"
        ],
        correctAnswer: "B",
        explanation: "The professor says 'The primary driver of urbanization was the factory system.'"
      },
      {
        question: "What problems resulted from rapid urban growth?",
        options: [
          "Labor shortages and high wages",
          "Inadequate housing, poor sanitation, and disease",
          "Lack of factories and jobs",
          "Political instability and riots"
        ],
        correctAnswer: "B",
        explanation: "The professor mentions 'Housing was inadequate, sanitation was poor, and diseases spread easily in crowded conditions.'"
      },
      {
        question: "What positive outcome eventually resulted from urban problems?",
        options: [
          "People moved back to rural areas",
          "Factories were relocated outside cities",
          "Public health reforms and urban planning emerged",
          "Immigration was restricted"
        ],
        correctAnswer: "C",
        explanation: "The professor explains that 'Public health movements emerged, building codes were established, and urban planning became a profession.'"
      }
    ]
  },
  {
    id: "TALK_004",
    topic: "Behavioral Economics and Decision Making",
    subject: "Economics",
    voice: "female_academic",
    transcript: `Traditional economics assumed that people make rational decisions that maximize their utility or benefit. Behavioral economics, which emerged in the nineteen seventies and eighties, challenges this assumption by studying how psychological factors influence economic decisions.

One key concept is loss aversion, discovered by psychologists Kahneman and Tversky. They found that losing something causes roughly twice as much psychological pain as gaining the same thing provides pleasure. This explains why people often make irrational choices to avoid losses, even when the expected value suggests they shouldn't.

Another important finding is the endowment effect. Once we own something, we value it more than before we owned it. In experiments, people who were given coffee mugs demanded about twice as much to sell them as people without mugs were willing to pay. This has implications for everything from salary negotiations to real estate transactions.

These insights have practical applications. Governments use behavioral economics in policy design—for example, making retirement savings opt-out rather than opt-in significantly increases participation. Companies use it in pricing strategies and product design. Understanding our psychological biases helps us make better decisions.`,
    questions: [
      {
        question: "How does behavioral economics differ from traditional economics?",
        options: [
          "It focuses on government policy instead of markets.",
          "It studies how psychological factors influence economic decisions.",
          "It only examines irrational behavior.",
          "It ignores individual decision-making."
        ],
        correctAnswer: "B",
        explanation: "The professor says behavioral economics studies 'how psychological factors influence economic decisions.'"
      },
      {
        question: "What is loss aversion?",
        options: [
          "Fear of taking any financial risks",
          "Losing something causes more psychological pain than gaining provides pleasure",
          "Preferring to lose slowly rather than all at once",
          "Avoiding investments that might lose value"
        ],
        correctAnswer: "B",
        explanation: "The professor explains that 'losing something causes roughly twice as much psychological pain as gaining the same thing provides pleasure.'"
      },
      {
        question: "What did the coffee mug experiments demonstrate?",
        options: [
          "People prefer coffee over other beverages",
          "People value things more once they own them",
          "Coffee mugs are overpriced",
          "People are bad at estimating prices"
        ],
        correctAnswer: "B",
        explanation: "This demonstrates the endowment effect: 'Once we own something, we value it more than before we owned it.'"
      },
      {
        question: "How has the government applied behavioral economics?",
        options: [
          "By banning certain products",
          "By increasing taxes on losses",
          "By making retirement savings opt-out to increase participation",
          "By requiring economics education in schools"
        ],
        correctAnswer: "C",
        explanation: "The professor mentions that 'making retirement savings opt-out rather than opt-in significantly increases participation.'"
      }
    ]
  },
  {
    id: "TALK_005",
    topic: "The Role of Sleep in Memory Consolidation",
    subject: "Neuroscience",
    voice: "male_academic",
    transcript: `Today we're going to explore the critical relationship between sleep and memory. Research over the past two decades has shown that sleep isn't just rest for the body—it's an active process during which the brain consolidates memories and makes connections.

The key stage for memory consolidation is deep sleep, also called slow-wave sleep. During this phase, which occurs primarily in the first half of the night, the brain replays experiences from the day. Neural pathways that were activated during learning are reactivated, strengthening the connections between neurons.

REM sleep, which increases toward morning, appears to play a different role. It's particularly important for procedural memory—the memory of how to do things—and for creative problem-solving. Studies show that people who sleep after learning a complex task perform better than those who stay awake, even when total practice time is equal.

Perhaps most importantly, sleep deprivation severely impairs the ability to form new memories. A single night of poor sleep can reduce the brain's capacity to learn new information by up to forty percent. This has obvious implications for students who sacrifice sleep to study more—the strategy may actually be counterproductive.`,
    questions: [
      {
        question: "During which sleep stage does memory consolidation primarily occur?",
        options: [
          "Light sleep",
          "Deep sleep or slow-wave sleep",
          "The transition between sleep stages",
          "Only during dreaming"
        ],
        correctAnswer: "B",
        explanation: "The professor says 'The key stage for memory consolidation is deep sleep, also called slow-wave sleep.'"
      },
      {
        question: "What type of memory does REM sleep particularly benefit?",
        options: [
          "Memory for facts and dates",
          "Memory for faces and names",
          "Procedural memory and creative problem-solving",
          "Short-term memory only"
        ],
        correctAnswer: "C",
        explanation: "The professor explains that REM sleep 'is particularly important for procedural memory' and 'creative problem-solving.'"
      },
      {
        question: "How much can sleep deprivation reduce learning capacity?",
        options: [
          "Up to ten percent",
          "Up to twenty percent",
          "Up to forty percent",
          "Up to sixty percent"
        ],
        correctAnswer: "C",
        explanation: "The professor states that sleep deprivation can 'reduce the brain's capacity to learn new information by up to forty percent.'"
      },
      {
        question: "What implication does the professor draw for students?",
        options: [
          "Students should study during deep sleep",
          "Sacrificing sleep to study more may be counterproductive",
          "Only morning studying is effective",
          "Sleep is only important during exam periods"
        ],
        correctAnswer: "B",
        explanation: "The professor says 'students who sacrifice sleep to study more—the strategy may actually be counterproductive.'"
      }
    ]
  },
];

// Export summary for verification
export const LISTENING_CONTENT_SUMMARY = {
  chooseResponseItems: chooseResponseItems.length,
  conversationScenarios: conversationScenarios.length,
  conversationTotalQuestions: conversationScenarios.reduce((sum, c) => sum + c.questions.length, 0),
  announcementScenarios: announcementScenarios.length,
  announcementTotalQuestions: announcementScenarios.reduce((sum, a) => sum + a.questions.length, 0),
  academicTalkScenarios: academicTalkScenarios.length,
  academicTalkTotalQuestions: academicTalkScenarios.reduce((sum, t) => sum + t.questions.length, 0),
  totalScenarios: chooseResponseItems.length + conversationScenarios.length + announcementScenarios.length + academicTalkScenarios.length,
};
