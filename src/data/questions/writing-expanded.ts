// TOEFL iBT 2026 Writing Questions - Expanded Pool
// Format: Build a Sentence (6 min), Write an Email (7 min), Academic Discussion (10 min)
// Difficulty levels: Easy, Medium, Hard for varied practice

// ==================== TYPE DEFINITIONS ====================

export interface BuildSentenceQuestion {
  id: string;
  taskType: "build_sentence";
  difficulty: "easy" | "medium" | "hard";
  grammarFocus: string;
  context: string;
  scrambledWords: string[];
  correctSentence: string;
  explanation: string;
}

export interface EmailQuestion {
  id: string;
  taskType: "email";
  difficulty: "easy" | "medium" | "hard";
  category: string;
  scenario: string;
  requirements: string[];
  timeLimit: number;
  minWords: number;
  maxWords: number;
  sampleResponse: string;
  scoringCriteria: string[];
}

export interface DiscussionQuestion {
  id: string;
  taskType: "discussion";
  difficulty: "easy" | "medium" | "hard";
  topic: string;
  professorPrompt: string;
  studentResponses: {
    name: string;
    response: string;
  }[];
  timeLimit: number;
  minWords: number;
  sampleResponse: string;
  scoringCriteria: string[];
}

export type WritingQuestion2026 = BuildSentenceQuestion | EmailQuestion | DiscussionQuestion;

// ==================== BUILD A SENTENCE ====================
// 20 questions with varied difficulty and grammar focus

export const buildSentenceQuestions: BuildSentenceQuestion[] = [
  // EASY (7) - Basic structures
  {
    id: "BS_001",
    taskType: "build_sentence",
    difficulty: "easy",
    grammarFocus: "Simple past tense",
    context: "What did you do yesterday?",
    scrambledWords: ["to", "the", "I", "library", "went", "yesterday"],
    correctSentence: "I went to the library yesterday.",
    explanation: "Simple past tense with basic word order: Subject + Verb + Prepositional Phrase + Time."
  },
  {
    id: "BS_002",
    taskType: "build_sentence",
    difficulty: "easy",
    grammarFocus: "Present continuous",
    context: "What is happening in the classroom?",
    scrambledWords: ["the", "students", "for", "are", "preparing", "exam", "their"],
    correctSentence: "The students are preparing for their exam.",
    explanation: "Present continuous: Subject + be + verb-ing + object/prepositional phrase."
  },
  {
    id: "BS_003",
    taskType: "build_sentence",
    difficulty: "easy",
    grammarFocus: "Future with will",
    context: "What are your plans for tomorrow?",
    scrambledWords: ["I", "the", "attend", "tomorrow", "will", "conference"],
    correctSentence: "I will attend the conference tomorrow.",
    explanation: "Simple future with 'will': Subject + will + base verb + object + time."
  },
  {
    id: "BS_004",
    taskType: "build_sentence",
    difficulty: "easy",
    grammarFocus: "Comparative adjective",
    context: "How do the two coffee shops compare?",
    scrambledWords: ["downtown", "the", "one", "café", "is", "than", "bigger", "campus", "the"],
    correctSentence: "The downtown café is bigger than the campus one.",
    explanation: "Comparative structure: Subject + be + adjective-er + than + comparison."
  },
  {
    id: "BS_005",
    taskType: "build_sentence",
    difficulty: "easy",
    grammarFocus: "Modal verb (can)",
    context: "What can students do at the recreation center?",
    scrambledWords: ["use", "students", "the", "can", "gym", "free", "for"],
    correctSentence: "Students can use the gym for free.",
    explanation: "Modal verb structure: Subject + modal + base verb + object + adverbial."
  },
  {
    id: "BS_006",
    taskType: "build_sentence",
    difficulty: "easy",
    grammarFocus: "There is/are",
    context: "What's in the library?",
    scrambledWords: ["study", "are", "there", "on", "floor", "rooms", "the", "second", "many"],
    correctSentence: "There are many study rooms on the second floor.",
    explanation: "Existential 'there': There + be + noun + prepositional phrase."
  },
  {
    id: "BS_007",
    taskType: "build_sentence",
    difficulty: "easy",
    grammarFocus: "Because clause",
    context: "Why did you miss class?",
    scrambledWords: ["I", "was", "because", "missed", "class", "sick", "I"],
    correctSentence: "I missed class because I was sick.",
    explanation: "Cause-effect: Main clause + because + reason clause."
  },
  // MEDIUM (7) - Complex structures
  {
    id: "BS_008",
    taskType: "build_sentence",
    difficulty: "medium",
    grammarFocus: "Relative clause (who)",
    context: "Who is your favorite professor?",
    scrambledWords: ["the", "teaches", "professor", "chemistry", "who", "my", "is", "favorite"],
    correctSentence: "The professor who teaches chemistry is my favorite.",
    explanation: "Relative clause with 'who' modifying the subject: Noun + who + verb + complement."
  },
  {
    id: "BS_009",
    taskType: "build_sentence",
    difficulty: "medium",
    grammarFocus: "Indirect question",
    context: "You want to ask about the deadline.",
    scrambledWords: ["know", "could", "when", "deadline", "you", "me", "tell", "is", "the"],
    correctSentence: "Could you tell me when the deadline is?",
    explanation: "Embedded question: Polite opener + indirect question (statement word order)."
  },
  {
    id: "BS_010",
    taskType: "build_sentence",
    difficulty: "medium",
    grammarFocus: "Present perfect",
    context: "What is your experience with this software?",
    scrambledWords: ["this", "used", "program", "I", "years", "have", "for", "three"],
    correctSentence: "I have used this program for three years.",
    explanation: "Present perfect for duration: Subject + have + past participle + for + time period."
  },
  {
    id: "BS_011",
    taskType: "build_sentence",
    difficulty: "medium",
    grammarFocus: "Conditional (if)",
    context: "What will happen if you don't study?",
    scrambledWords: ["the", "you", "don't", "exam", "if", "study", "fail", "you", "will"],
    correctSentence: "If you don't study, you will fail the exam.",
    explanation: "First conditional: If + present simple, will + base verb."
  },
  {
    id: "BS_012",
    taskType: "build_sentence",
    difficulty: "medium",
    grammarFocus: "Passive voice",
    context: "When was the library built?",
    scrambledWords: ["the", "was", "library", "built", "in", "1985", "main"],
    correctSentence: "The main library was built in 1985.",
    explanation: "Passive voice: Subject + was/were + past participle + time expression."
  },
  {
    id: "BS_013",
    taskType: "build_sentence",
    difficulty: "medium",
    grammarFocus: "Although clause",
    context: "Despite the rain, what did you do?",
    scrambledWords: ["although", "raining", "it", "was", "went", "for", "we", "walk", "a"],
    correctSentence: "Although it was raining, we went for a walk.",
    explanation: "Concessive clause: Although + clause, main clause."
  },
  {
    id: "BS_014",
    taskType: "build_sentence",
    difficulty: "medium",
    grammarFocus: "Reported speech",
    context: "What did the professor say about the assignment?",
    scrambledWords: ["said", "the", "professor", "would", "be", "assignment", "due", "Friday", "the", "that"],
    correctSentence: "The professor said that the assignment would be due Friday.",
    explanation: "Reported speech: Subject + said + that + shifted tense clause."
  },
  // HARD (6) - Advanced structures
  {
    id: "BS_015",
    taskType: "build_sentence",
    difficulty: "hard",
    grammarFocus: "Past perfect",
    context: "Why was she prepared for the interview?",
    scrambledWords: ["prepared", "had", "the", "she", "thoroughly", "because", "confident", "interview", "was", "she", "for"],
    correctSentence: "She was confident because she had prepared thoroughly for the interview.",
    explanation: "Past perfect showing earlier action: Main clause + because + subject + had + past participle."
  },
  {
    id: "BS_016",
    taskType: "build_sentence",
    difficulty: "hard",
    grammarFocus: "Subjunctive (recommend)",
    context: "What did the advisor suggest?",
    scrambledWords: ["the", "advisor", "that", "take", "I", "recommended", "statistics", "course", "the"],
    correctSentence: "The advisor recommended that I take the statistics course.",
    explanation: "Subjunctive after 'recommend': Subject + recommend + that + subject + base verb."
  },
  {
    id: "BS_017",
    taskType: "build_sentence",
    difficulty: "hard",
    grammarFocus: "Reduced relative clause",
    context: "Who are the students working in the lab?",
    scrambledWords: ["the", "in", "students", "chemistry", "are", "majors", "working", "lab", "the"],
    correctSentence: "The students working in the lab are chemistry majors.",
    explanation: "Reduced relative: Noun + present participle phrase (instead of 'who are working')."
  },
  {
    id: "BS_018",
    taskType: "build_sentence",
    difficulty: "hard",
    grammarFocus: "Third conditional",
    context: "What would have happened if you had studied more?",
    scrambledWords: ["more", "I", "studied", "if", "the", "passed", "had", "have", "I", "would", "exam"],
    correctSentence: "If I had studied more, I would have passed the exam.",
    explanation: "Third conditional (unreal past): If + past perfect, would have + past participle."
  },
  {
    id: "BS_019",
    taskType: "build_sentence",
    difficulty: "hard",
    grammarFocus: "Noun clause as subject",
    context: "What surprised everyone at the meeting?",
    scrambledWords: ["what", "said", "the", "everyone", "surprised", "director"],
    correctSentence: "What the director said surprised everyone.",
    explanation: "Noun clause as subject: What + subject + verb serves as the sentence subject."
  },
  {
    id: "BS_020",
    taskType: "build_sentence",
    difficulty: "hard",
    grammarFocus: "Inversion for emphasis",
    context: "Express surprise about the complexity of the project.",
    scrambledWords: ["realized", "only", "we", "the", "later", "did", "project", "of", "complexity", "the"],
    correctSentence: "Only later did we realize the complexity of the project.",
    explanation: "Inversion after negative adverb: Only + adverb + auxiliary + subject + verb."
  }
];

// ==================== WRITE AN EMAIL ====================
// 12 questions with varied difficulty and scenarios

export const emailQuestions: EmailQuestion[] = [
  // EASY (4) - Straightforward requests
  {
    id: "EMAIL_001",
    taskType: "email",
    difficulty: "easy",
    category: "Information Request",
    scenario: "You want to join the university photography club but you're not sure about the meeting times and membership fee. Write an email to the club president to ask for information.",
    requirements: [
      "Introduce yourself briefly",
      "Express your interest in joining the club",
      "Ask about meeting times and membership fees"
    ],
    timeLimit: 420,
    minWords: 100,
    maxWords: 150,
    sampleResponse: `Dear Club President,

My name is Emily Chen, and I am a second-year student majoring in Communications. I am writing to express my interest in joining the Photography Club.

I have been interested in photography as a hobby for several years and would love to connect with other students who share this passion. I noticed the club's display in the student center and was impressed by the quality of the photographs.

Could you please tell me when the club meets and how often? I would also like to know if there is a membership fee and how to sign up.

Thank you for your time, and I look forward to hearing from you.

Best regards,
Emily Chen`,
    scoringCriteria: ["Clear introduction", "Interest expressed", "Specific questions asked", "Polite tone", "Appropriate length"]
  },
  {
    id: "EMAIL_002",
    taskType: "email",
    difficulty: "easy",
    category: "Appointment Request",
    scenario: "You need to meet with your academic advisor to discuss your course schedule for next semester. Write an email to request an appointment.",
    requirements: [
      "State the purpose of your meeting request",
      "Mention your availability",
      "Ask for confirmation"
    ],
    timeLimit: 420,
    minWords: 100,
    maxWords: 150,
    sampleResponse: `Dear Dr. Martinez,

I hope this email finds you well. I am writing to request an appointment to discuss my course schedule for the upcoming spring semester.

As I plan to register next week, I would like your guidance on which electives would best support my career goals in environmental science. I am particularly interested in discussing the field research option.

I am available Tuesday and Thursday afternoons after 2 PM, but I can adjust my schedule to meet your availability. Please let me know what time works best for you.

Thank you for your time, and I look forward to meeting with you.

Sincerely,
Robert Kim
Student ID: 20241892`,
    scoringCriteria: ["Purpose clearly stated", "Availability provided", "Polite request", "Professional tone", "Contact information included"]
  },
  {
    id: "EMAIL_003",
    taskType: "email",
    difficulty: "easy",
    category: "Thank You Email",
    scenario: "A local business owner spoke to your business class about entrepreneurship. Write a thank-you email expressing your appreciation for their time and insights.",
    requirements: [
      "Thank them for visiting the class",
      "Mention something specific you learned",
      "Express how it might help you"
    ],
    timeLimit: 420,
    minWords: 100,
    maxWords: 150,
    sampleResponse: `Dear Ms. Thompson,

Thank you so much for taking the time to speak to our Business 101 class yesterday about your experience as an entrepreneur.

I particularly appreciated your advice about starting small and testing ideas before investing heavily. Your story about how your bakery began as a farmers' market stall was both inspiring and practical. It showed me that successful businesses don't have to start with large investments.

Your insights have encouraged me to pursue my own business idea by starting with a smaller, lower-risk approach. I will definitely consider applying to the mentorship program you mentioned.

Thank you again for sharing your valuable experiences with us.

Best regards,
Amanda Lee`,
    scoringCriteria: ["Gratitude expressed", "Specific details mentioned", "Personal connection made", "Professional tone", "Appropriate closing"]
  },
  {
    id: "EMAIL_004",
    taskType: "email",
    difficulty: "easy",
    category: "Simple Complaint",
    scenario: "You purchased a meal from the campus cafeteria and found a hair in your food. Write an email to the cafeteria manager about this issue.",
    requirements: [
      "Describe what happened",
      "Express your concern politely",
      "Request a resolution"
    ],
    timeLimit: 420,
    minWords: 100,
    maxWords: 150,
    sampleResponse: `Dear Cafeteria Manager,

I am writing to report an unfortunate incident that occurred during my lunch at the campus cafeteria today.

While eating the chicken salad I purchased around noon, I discovered a hair in my food. This was quite unpleasant and caused me to lose my appetite. I had to throw away most of the meal.

I understand that accidents can happen, but I wanted to bring this to your attention so that food preparation standards can be reviewed. I would appreciate either a refund for my $8.50 purchase or a replacement meal coupon.

Thank you for addressing this matter. I hope this was an isolated incident.

Sincerely,
Daniel Park
Student ID: 20232156`,
    scoringCriteria: ["Incident clearly described", "Polite but firm tone", "Specific request made", "Reasonable expectation", "Professional closing"]
  },
  // MEDIUM (4) - Complex situations
  {
    id: "EMAIL_005",
    taskType: "email",
    difficulty: "medium",
    category: "Extension Request",
    scenario: "You have been ill for the past week and were unable to complete your research paper on time. Write an email to your professor requesting an extension. The paper was due today.",
    requirements: [
      "Explain your situation",
      "Apologize for the inconvenience",
      "Request a specific extension",
      "Offer to provide documentation if needed"
    ],
    timeLimit: 420,
    minWords: 130,
    maxWords: 180,
    sampleResponse: `Dear Professor Johnson,

I am writing regarding the research paper for History 302 that was due today. Unfortunately, I have been ill with the flu for the past week and was unable to complete the assignment on time.

I apologize sincerely for this situation. I had completed about two-thirds of the paper before becoming ill, but I was too unwell to finish the final sections and properly review my work. I did not want to submit a paper that did not reflect my best effort.

I am feeling better now and am confident I can complete the paper within the next three days. Would it be possible to have an extension until Friday? I am willing to accept a late penalty if necessary.

I can provide documentation from the Student Health Center if required. Please let me know how you would like me to proceed.

Thank you for your understanding.

Respectfully,
Sarah Mitchell`,
    scoringCriteria: ["Situation explained clearly", "Sincere apology", "Specific request", "Offer of documentation", "Professional tone"]
  },
  {
    id: "EMAIL_006",
    taskType: "email",
    difficulty: "medium",
    category: "Roommate Conflict",
    scenario: "Your roommate frequently has friends over late at night, which disrupts your sleep before early morning classes. You've tried talking to them, but the problem persists. Write an email to the Resident Advisor seeking guidance.",
    requirements: [
      "Describe the problem objectively",
      "Explain what you've already tried",
      "Ask for advice or intervention",
      "Show willingness to find a fair solution"
    ],
    timeLimit: 420,
    minWords: 130,
    maxWords: 180,
    sampleResponse: `Dear RA Thompson,

I am writing to seek your guidance regarding an ongoing issue with my roommate in Room 412, Baker Hall.

For the past three weeks, my roommate has been having friends over until 1 or 2 AM several nights a week. The noise makes it difficult for me to sleep, which is particularly challenging since I have 8 AM classes four days a week.

I have spoken to my roommate twice about this issue, asking if the gatherings could end by 11 PM on weeknights. While they agreed initially, the late-night visitors have continued. I want to maintain a positive living environment, so I haven't wanted to escalate the situation.

Could you suggest how to approach this constructively? I am open to finding a compromise, perhaps designating certain nights for socializing or establishing quiet hours. I would appreciate any advice you could offer, or assistance in mediating a conversation.

Thank you for your help.

Best,
Kevin Chen
Room 412, Baker Hall`,
    scoringCriteria: ["Objective description", "Prior efforts mentioned", "Reasonable request", "Willingness to compromise", "Professional tone"]
  },
  {
    id: "EMAIL_007",
    taskType: "email",
    difficulty: "medium",
    category: "Job Application Follow-up",
    scenario: "You applied for a campus library assistant position two weeks ago but haven't heard back. Write an email to the library's Human Resources office to follow up on your application.",
    requirements: [
      "Reference your application and the position",
      "Reaffirm your interest",
      "Ask about the status and timeline",
      "Offer to provide additional information"
    ],
    timeLimit: 420,
    minWords: 130,
    maxWords: 180,
    sampleResponse: `Dear Human Resources Team,

I am writing to follow up on my application for the Library Assistant position that I submitted on October 15th.

I remain very interested in this opportunity. The position aligns well with my organizational skills and my passion for helping students access academic resources. As a frequent library user myself, I understand how important effective assistance is for student success.

I understand that reviewing applications takes time, but I wanted to confirm that my materials were received and inquire about the anticipated timeline for the selection process. If possible, I would appreciate knowing when I might expect to hear about next steps.

If there is any additional information I can provide to support my application, please let me know. I would be happy to supply references or come in for an interview at your convenience.

Thank you for considering my application. I look forward to hearing from you.

Sincerely,
Jennifer Woods
Email: jwoods@university.edu
Phone: (555) 123-4567`,
    scoringCriteria: ["Application referenced", "Continued interest expressed", "Specific questions", "Offer of additional information", "Contact details provided"]
  },
  {
    id: "EMAIL_008",
    taskType: "email",
    difficulty: "medium",
    category: "Service Complaint",
    scenario: "You paid for express shipping for textbooks but they arrived a week late, after your classes had already started. Write an email to the online bookstore requesting a refund for the shipping charges.",
    requirements: [
      "Provide order details",
      "Explain what went wrong",
      "Describe the impact on you",
      "Request a specific resolution"
    ],
    timeLimit: 420,
    minWords: 130,
    maxWords: 180,
    sampleResponse: `Dear Customer Service,

I am writing regarding order #TB-2024-8847, placed on August 20th with express 2-day shipping.

Despite paying $24.99 for express delivery, my textbooks did not arrive until August 30th—eight days after I placed the order and one week after my classes began. The tracking information showed the package sat at a distribution center for five days before moving.

This delay significantly impacted my coursework. I missed the first week of assigned readings and fell behind in two classes. I had to rely on classmates for notes and could not complete homework that required textbook access.

Given that the express shipping service was not provided as promised, I am requesting a full refund of the $24.99 shipping charge. I believe this is a reasonable resolution since I paid for a service I did not receive.

Please let me know how to proceed with this refund request. I have kept all shipping documentation.

Thank you for your attention to this matter.

Sincerely,
Michael Torres`,
    scoringCriteria: ["Order details provided", "Problem clearly explained", "Impact described", "Specific request", "Documentation mentioned"]
  },
  // HARD (4) - Complex situations requiring diplomacy
  {
    id: "EMAIL_009",
    taskType: "email",
    difficulty: "hard",
    category: "Grade Appeal",
    scenario: "You received a grade on your final project that you believe is unfair. The rubric indicated that creativity and originality were valued, but you received low marks despite your innovative approach. Write an email to your professor requesting a review of your grade.",
    requirements: [
      "Respectfully explain your concern",
      "Reference specific rubric criteria",
      "Provide evidence supporting your position",
      "Request a meeting to discuss",
      "Acknowledge the professor's expertise"
    ],
    timeLimit: 420,
    minWords: 150,
    maxWords: 200,
    sampleResponse: `Dear Professor Williams,

I hope you are well. I am writing respectfully to request a review of my grade on the final marketing project for MKT 310.

I received 68/100 on the project, with the primary feedback indicating that my approach was "too unconventional." However, I noticed that the rubric allocated 30 points to "creativity and innovation," and I am uncertain how my unconventional approach was penalized rather than rewarded under this criterion.

For context, I chose to design a guerrilla marketing campaign targeting Gen Z consumers, incorporating meme culture and viral social media strategies. I researched current trends extensively and included data supporting the effectiveness of similar campaigns.

I absolutely respect your expertise in evaluating student work, and I recognize there may be aspects of my project I failed to execute properly. I would greatly appreciate the opportunity to meet with you to better understand where my project fell short and how I might improve.

Would you be available for a brief meeting during office hours next week? I am eager to learn from this experience.

Thank you for your time and consideration.

Respectfully,
Amanda Chen`,
    scoringCriteria: ["Respectful tone maintained", "Specific concerns with evidence", "Rubric referenced", "Meeting requested", "Growth mindset shown"]
  },
  {
    id: "EMAIL_010",
    taskType: "email",
    difficulty: "hard",
    category: "Internship Withdrawal",
    scenario: "You accepted an internship offer two weeks ago, but you have just received a better offer from your dream company. Write an email to the first company professionally withdrawing your acceptance.",
    requirements: [
      "Express genuine appreciation",
      "Explain your decision briefly",
      "Apologize for any inconvenience",
      "Offer to help with the transition",
      "Maintain a positive relationship"
    ],
    timeLimit: 420,
    minWords: 150,
    maxWords: 200,
    sampleResponse: `Dear Ms. Rodriguez,

I am writing with a heavy heart regarding my acceptance of the Marketing Intern position at ABC Corporation.

After careful consideration, I must respectfully withdraw my acceptance. I have received an unexpected offer from a company in the healthcare technology sector, which aligns more closely with my long-term career goal of working in health communications. This was not a decision I made lightly, and I sincerely apologize for any inconvenience this causes.

I want to express my genuine gratitude for the opportunity you offered me. The interview process was exceptionally professional, and I was impressed by the team's passion and vision. Under different circumstances, I would have been honored to contribute to ABC Corporation.

To help mitigate any disruption, I would be happy to recommend qualified peers who might be excellent fits for the position. I also want to assure you that I have not shared any confidential information from our discussions.

I hope this does not close the door on potential future opportunities, and I wish you and the team continued success.

With sincere apologies and gratitude,
Thomas Liu`,
    scoringCriteria: ["Genuine appreciation", "Brief honest explanation", "Sincere apology", "Offer to help", "Professional bridge-building"]
  },
  {
    id: "EMAIL_011",
    taskType: "email",
    difficulty: "hard",
    category: "Accommodation Request",
    scenario: "You have been diagnosed with anxiety that affects your ability to take exams in large, crowded rooms. Write an email to the Disability Services office requesting testing accommodations for the upcoming semester.",
    requirements: [
      "Explain your situation sensitively",
      "Specify the accommodations you need",
      "Mention you have documentation",
      "Ask about the process",
      "Express appreciation for confidentiality"
    ],
    timeLimit: 420,
    minWords: 150,
    maxWords: 200,
    sampleResponse: `Dear Disability Services Office,

I am writing to request testing accommodations for the spring semester due to a recently diagnosed anxiety disorder.

My condition significantly affects my ability to concentrate during exams in large lecture halls. I experience heightened anxiety when surrounded by many people during high-pressure situations, which impairs my performance on tests regardless of how well I have prepared.

I am requesting the following accommodations: a reduced-distraction testing environment (separate room or small group setting) and extended time (1.5x) to account for anxiety-related concentration difficulties. My therapist believes these modifications would allow me to demonstrate my actual knowledge.

I have documentation from both my psychiatrist and licensed therapist that I can provide. Please let me know what forms need to be completed and what the process entails for having accommodations approved before the semester begins on January 15th.

I appreciate the confidential nature of this process and the support your office provides to students with disabilities. Thank you for helping me succeed academically despite these challenges.

Sincerely,
Rachel Kim
Student ID: 20241789`,
    scoringCriteria: ["Sensitive explanation", "Specific accommodations requested", "Documentation mentioned", "Process inquiry", "Professional and dignified tone"]
  },
  {
    id: "EMAIL_012",
    taskType: "email",
    difficulty: "hard",
    category: "Research Collaboration",
    scenario: "You read a professor's research paper at another university and want to explore potential collaboration opportunities for your senior thesis. Write an email introducing yourself and proposing collaboration.",
    requirements: [
      "Reference their specific work",
      "Explain your background and interests",
      "Propose a specific collaboration idea",
      "Ask if they would be open to discussing",
      "Acknowledge their busy schedule"
    ],
    timeLimit: 420,
    minWords: 150,
    maxWords: 200,
    sampleResponse: `Dear Dr. Yamamoto,

I am a senior psychology student at State University, and I recently read your paper "Cognitive Load and Decision-Making Under Stress" published in the Journal of Behavioral Economics. Your findings on how information overload affects risk assessment particularly resonated with my research interests.

I am currently developing my senior thesis examining how social media multitasking affects financial decision-making among young adults. Your methodology for measuring cognitive load in real-time situations would be invaluable for my study design.

I am writing to explore whether you might be open to an informal advisory role or collaboration. Specifically, I am hoping to replicate aspects of your experimental design with my target population. I would greatly value your guidance on adapting your measurement instruments.

I understand you have many demands on your time, and I do not wish to impose. If you have even 15-20 minutes available for a video call to discuss feasibility, I would be deeply grateful.

I have attached my research proposal for your reference.

Thank you for considering this request.

Respectfully,
David Park
State University Psychology Department`,
    scoringCriteria: ["Specific work referenced", "Relevant background provided", "Clear proposal", "Respectful of time", "Professional academic tone"]
  }
];

// ==================== ACADEMIC DISCUSSION ====================
// 10 questions with varied difficulty and topics

export const discussionQuestions: DiscussionQuestion[] = [
  // EASY (3) - Clear topics with straightforward positions
  {
    id: "DISC_001",
    taskType: "discussion",
    difficulty: "easy",
    topic: "Technology in Education",
    professorPrompt: "This week we're discussing the role of technology in the classroom. Some educators believe students should have access to laptops and tablets during class for note-taking and research. Others argue that devices are distracting. What is your view on whether technology helps or hinders learning in the classroom?",
    studentResponses: [
      {
        name: "Maya",
        response: "I think technology definitely helps. I can type faster than I write, so I capture more information in my notes. I can also quickly look up concepts I don't understand during lecture, which helps me stay engaged instead of getting lost."
      },
      {
        name: "Chris",
        response: "I disagree. When I have my laptop open, I'm constantly tempted to check social media or email. Studies show that even seeing someone else's screen is distracting. Taking notes by hand forces me to actually process the information."
      }
    ],
    timeLimit: 600,
    minWords: 120,
    sampleResponse: `Both Maya and Chris raise valid points about technology in classrooms, but I believe the key factor they overlook is intentional use.

Maya correctly notes that technology can enhance engagement when used purposefully—quick lookups and efficient note-taking are genuine benefits. However, Chris's point about distraction temptation is equally valid; the presence of technology creates constant competing demands for attention.

I believe the solution lies in how technology is integrated, not whether it should exist. Professors could designate "screens down" periods for discussion while allowing devices during lecture portions. Apps that block distracting websites during class could address Chris's self-control concerns while preserving Maya's productivity benefits.

Ultimately, the responsibility falls on students to develop digital discipline. Rather than banning technology entirely, we should teach effective technology management as an essential modern skill. Students who learn to use devices productively in class will be better prepared for professional environments where similar discipline is expected.`,
    scoringCriteria: ["Clear position", "Engagement with both views", "Original solution proposed", "Well-organized", "Academic vocabulary"]
  },
  {
    id: "DISC_002",
    taskType: "discussion",
    difficulty: "easy",
    topic: "Group Projects",
    professorPrompt: "Many courses require group projects, but student opinions on this practice vary widely. Some students value the collaborative learning experience, while others prefer individual assignments. Should professors continue requiring group projects? Why or why not?",
    studentResponses: [
      {
        name: "Alex",
        response: "Group projects prepare us for real-world teamwork. In most careers, you have to collaborate with colleagues. Learning to divide tasks, communicate effectively, and resolve conflicts are essential skills that you only develop through practice."
      },
      {
        name: "Taylor",
        response: "But group projects rarely reflect real teamwork. Usually one or two people do most of the work while others contribute little. It's unfair when grades don't reflect individual effort, and scheduling meetings around everyone's availability is a nightmare."
      }
    ],
    timeLimit: 600,
    minWords: 120,
    sampleResponse: `Alex and Taylor both make compelling arguments about group projects, and I believe both perspectives have merit worth considering.

Alex is correct that workplace collaboration requires skills that individual assignments cannot teach. The ability to coordinate with others, manage interpersonal dynamics, and synthesize different perspectives is genuinely valuable for professional success.

However, Taylor's concerns about unequal contribution are equally valid. Traditional group project structures often enable "free-riding" and can penalize conscientious students who end up compensating for less engaged teammates.

I suggest professors could address both concerns by implementing structured accountability measures. For example, peer evaluations that affect individual grades would incentivize equal participation. Breaking projects into individually assessed components while requiring collaborative integration could preserve teamwork benefits while ensuring personal accountability.

Additionally, smaller groups of two or three students typically function better than larger teams, making coordination easier while still developing collaborative skills.

Group projects should continue, but with thoughtful design that addresses their common pitfalls.`,
    scoringCriteria: ["Both views addressed", "Clear position taken", "Practical suggestions", "Logical organization", "Appropriate academic register"]
  },
  {
    id: "DISC_003",
    taskType: "discussion",
    difficulty: "easy",
    topic: "Social Media Influence",
    professorPrompt: "Social media has become an integral part of daily life for most people. Do you think social media has a primarily positive or negative impact on society? Consider effects on communication, relationships, and access to information.",
    studentResponses: [
      {
        name: "Emma",
        response: "I think social media is mostly positive. It connects people across distances, helps movements for social change spread quickly, and gives everyone a platform to share their voice. My family stays close through group chats even though we live in different countries."
      },
      {
        name: "Jordan",
        response: "I'm more skeptical. Social media encourages comparison and damages self-esteem, especially for young people. The spread of misinformation is dangerous, and online interactions feel shallow compared to real friendships. We're losing the ability to have nuanced discussions."
      }
    ],
    timeLimit: 600,
    minWords: 120,
    sampleResponse: `This question about social media's impact defies a simple positive or negative categorization because, as Emma and Jordan demonstrate, its effects depend largely on how it's used.

Emma highlights genuine benefits: maintaining distant relationships, democratizing communication, and enabling social movements. These contributions to connectivity are real and valuable. Jordan's concerns about comparison culture, misinformation, and superficial interaction are equally valid observations about social media's potential harms.

I believe social media's impact is neutral by nature but becomes positive or negative based on user behavior and platform design. The same technology that enables Emma's family connections can foster Jordan's concerns about unhealthy comparison—it depends on which accounts you follow and how much time you spend.

The solution isn't abandoning social media but developing media literacy and healthy usage habits. Teaching people to curate feeds intentionally, recognize misinformation, and balance online and offline interaction could maximize benefits while minimizing harms.

Ultimately, we should treat social media as a tool whose value depends on how thoughtfully we use it.`,
    scoringCriteria: ["Nuanced position", "Acknowledgment of complexity", "Engagement with both views", "Practical insight", "Clear writing"]
  },
  // MEDIUM (4) - More complex topics requiring analysis
  {
    id: "DISC_004",
    taskType: "discussion",
    difficulty: "medium",
    topic: "Environmental Responsibility",
    professorPrompt: "As environmental concerns grow, questions arise about who should bear responsibility for addressing climate change. Some argue that individual choices (reducing consumption, recycling, choosing sustainable products) are most important. Others believe systemic changes by governments and corporations are essential. Where should the focus be?",
    studentResponses: [
      {
        name: "Nina",
        response: "Individual actions matter because they create market demand for sustainable products and normalize environmentally conscious behavior. When enough consumers make green choices, corporations have to respond. Change starts at the grassroots level."
      },
      {
        name: "Marcus",
        response: "Focusing on individual behavior distracts from the real culprits. Just 100 companies are responsible for 71% of global emissions. Personal choices are meaningless against that scale. We need regulations that force corporations to change, not guilt trips for consumers."
      }
    ],
    timeLimit: 600,
    minWords: 120,
    sampleResponse: `Nina and Marcus present this as an either/or choice, but effective environmental action requires both individual and systemic approaches working together.

Marcus's statistic about corporate emissions is striking and rightly challenges the notion that individual recycling alone can solve climate change. However, his dismissal of personal choices overlooks how individual behaviors shape collective expectations and political will.

Nina correctly notes that consumer demand influences corporate behavior, but she may overestimate how quickly market forces alone can drive necessary changes. Some environmental harms require regulation because they involve externalities that markets don't price appropriately.

I believe these approaches are complementary rather than competing. Individual choices build the cultural foundation that makes systemic change politically possible. When citizens adopt environmental values personally, they're more likely to support politicians who prioritize climate policy. Conversely, regulations make sustainable choices more accessible and affordable for individuals.

The "individual vs. systemic" framing may itself be a false dichotomy promoted by those who benefit from inaction. Meaningful progress requires citizens who both modify their own behavior and advocate for policy changes.`,
    scoringCriteria: ["Synthesis of perspectives", "Critical analysis", "Nuanced argument", "Original insight", "Academic vocabulary"]
  },
  {
    id: "DISC_005",
    taskType: "discussion",
    difficulty: "medium",
    topic: "Higher Education Value",
    professorPrompt: "With rising tuition costs and the growth of alternative education paths like coding bootcamps and online certifications, some question whether traditional four-year degrees remain worthwhile. Is a college degree still valuable in today's economy?",
    studentResponses: [
      {
        name: "Rachel",
        response: "College is absolutely worth it. Studies consistently show that degree holders earn more over their lifetimes. Beyond money, college teaches critical thinking, exposes you to diverse perspectives, and provides networking opportunities that are hard to replicate elsewhere."
      },
      {
        name: "Derek",
        response: "The value depends entirely on your field and goals. For careers in tech or trades, practical skills and certifications often matter more than degrees. Why go into massive debt for a degree when employers increasingly care about demonstrated abilities?"
      }
    ],
    timeLimit: 600,
    minWords: 120,
    sampleResponse: `Rachel and Derek both offer valid perspectives, but I think they're answering different questions. The value of a college degree depends heavily on individual circumstances, career goals, and how one uses the college experience.

Rachel's earnings data is accurate on average, but averages can be misleading. A chemical engineering degree offers different returns than a general humanities degree. The value proposition varies significantly by field, institution, and individual initiative.

Derek correctly identifies that some industries prioritize demonstrated skills over credentials. However, his argument may undervalue the less tangible benefits Rachel mentions—critical thinking development, exposure to diverse ideas, and personal growth. These benefits are difficult to quantify but meaningful.

I believe the question shouldn't be "Is college valuable?" but rather "Is college valuable for me, given my specific goals and circumstances?" For some careers and individuals, traditional degrees provide irreplaceable foundations. For others, alternative paths may be more efficient.

The best approach is informed decision-making: understanding what different paths offer, what specific careers require, and what type of learning environment suits one's needs.`,
    scoringCriteria: ["Critical evaluation", "Recognition of nuance", "Personal position clear", "Engagement with statistics", "Logical structure"]
  },
  {
    id: "DISC_006",
    taskType: "discussion",
    difficulty: "medium",
    topic: "Privacy vs. Security",
    professorPrompt: "Governments increasingly use surveillance technologies—cameras, data collection, monitoring—in the name of public safety. Some citizens support these measures as necessary for security, while others view them as invasions of privacy. How should we balance security needs with privacy rights?",
    studentResponses: [
      {
        name: "Lisa",
        response: "I value my safety over theoretical privacy concerns. Surveillance has helped prevent terrorist attacks and solve crimes. If you're not doing anything wrong, you shouldn't worry about cameras or data collection. The real threats are criminals, not the government."
      },
      {
        name: "Kai",
        response: "History shows that surveillance powers expand and get misused. Once you give governments these tools, they rarely give them back. Privacy isn't just about hiding wrongdoing—it's essential for free thought, dissent, and democracy itself. We shouldn't trade liberty for security."
      }
    ],
    timeLimit: 600,
    minWords: 120,
    sampleResponse: `Lisa and Kai represent classic positions in the security-privacy debate, and both raise important considerations that shouldn't be dismissed.

Lisa's desire for safety is understandable, and surveillance has indeed helped solve crimes and prevent attacks. However, her "nothing to hide" argument has limitations. Privacy protects not just wrongdoing but also legitimate activities like political organizing, journalism, and personal exploration that could be chilled by constant observation.

Kai's historical concerns about power expansion are well-founded. However, absolutist privacy positions may ignore genuine security threats that affect vulnerable populations disproportionately.

I believe the balance lies in robust oversight rather than choosing one value over the other. Surveillance programs should require judicial warrants, independent review, and sunset clauses requiring regular reauthorization. Collected data should have strict retention limits and access controls.

The key question isn't "surveillance or no surveillance" but "what accountability mechanisms ensure surveillance serves public safety rather than enabling abuse?" Democratic societies can have both security and privacy through thoughtful institutional design and active civic participation.`,
    scoringCriteria: ["Both perspectives engaged", "Historical awareness", "Nuanced solution", "Democratic values referenced", "Academic reasoning"]
  },
  {
    id: "DISC_007",
    taskType: "discussion",
    difficulty: "medium",
    topic: "Standardized Testing",
    professorPrompt: "Many universities have made standardized tests like the SAT and ACT optional for admissions. Supporters say these tests are biased and don't predict college success. Critics worry that removing objective measures will make admissions less fair. Should standardized tests remain part of college admissions?",
    studentResponses: [
      {
        name: "Olivia",
        response: "Standardized tests should be eliminated. They favor wealthy students who can afford prep courses and don't reflect actual intelligence or potential. GPA, essays, and extracurriculars give a better picture of a student's abilities and character."
      },
      {
        name: "Brandon",
        response: "Without standardized tests, admissions become more subjective and potentially more biased. A student from a poor school district might have lower grades due to limited resources but could demonstrate their ability through test scores. Tests provide a common measuring stick."
      }
    ],
    timeLimit: 600,
    minWords: 120,
    sampleResponse: `Both Olivia and Brandon identify genuine problems with different aspects of college admissions, but each overlooks complications with their preferred solution.

Olivia rightly notes that test prep advantages benefit wealthy students, creating inequity. However, her preferred alternatives—GPA, essays, and extracurriculars—are arguably more susceptible to wealth effects. Grade inflation varies by school, essay coaching is available to the privileged, and impressive extracurriculars often require resources.

Brandon correctly points out that tests can help students from under-resourced schools demonstrate ability. However, his "common measuring stick" argument assumes the tests measure something meaningful and equivalent across different backgrounds, which research disputes.

I believe the answer lies in contextual evaluation rather than eliminating or requiring any single measure. Admissions committees should consider multiple factors while explicitly accounting for applicant circumstances. Test scores from students without prep access might be weighted differently than identical scores from students with extensive preparation.

Perfect fairness may be impossible, but transparency about evaluation criteria and continuous refinement of processes can improve equity over time.`,
    scoringCriteria: ["Critical analysis of both views", "Recognition of complexity", "Alternative proposed", "Evidence referenced", "Coherent structure"]
  },
  // HARD (3) - Complex ethical and analytical topics
  {
    id: "DISC_008",
    taskType: "discussion",
    difficulty: "hard",
    topic: "AI and Employment",
    professorPrompt: "Artificial intelligence is increasingly capable of performing tasks once thought to require human intelligence—from driving vehicles to analyzing medical images to writing content. Some economists predict widespread job displacement, while others believe AI will create more jobs than it eliminates. How should society prepare for AI's impact on employment?",
    studentResponses: [
      {
        name: "Sophia",
        response: "History shows that technological change creates more jobs than it destroys. The industrial revolution displaced farm workers but created factory jobs; computers eliminated some clerical positions but created the entire tech industry. AI will be similar—we'll adapt."
      },
      {
        name: "Andre",
        response: "This time might be different. Previous technologies automated physical or routine tasks; AI automates cognitive work. When machines can do what makes humans economically valuable, we need new systems—maybe universal basic income—because there won't be enough traditional jobs."
      }
    ],
    timeLimit: 600,
    minWords: 120,
    sampleResponse: `Sophia and Andre present the classic "this time is the same/different" debate about technological unemployment, and I believe both perspectives contain partial truths that require synthesis.

Sophia's historical argument is valid—past technological revolutions did ultimately create more jobs than they destroyed. However, her conclusion that "we'll adapt" glosses over the severe disruption experienced by those displaced during transitions. Agricultural workers who lost livelihoods often didn't personally benefit from factory job creation.

Andre correctly identifies that AI's cognitive capabilities differ qualitatively from previous technologies. However, his assumption that machines will fully replicate human economic value may underestimate emerging needs we cannot yet anticipate.

I believe the critical issue is not whether jobs will exist but who will access them and how quickly transitions occur. Society should invest heavily in adaptive education systems that enable mid-career retraining. Safety net policies should support displaced workers during transitions regardless of whether "enough" new jobs eventually emerge.

Whether Andre's dramatic predictions prove accurate or Sophia's optimism prevails, proactive policy responses will minimize human suffering during the inevitable adjustments.`,
    scoringCriteria: ["Sophisticated historical analysis", "Critical evaluation", "Original synthesis", "Policy implications addressed", "Academic sophistication"]
  },
  {
    id: "DISC_009",
    taskType: "discussion",
    difficulty: "hard",
    topic: "Gene Editing Ethics",
    professorPrompt: "CRISPR technology now allows scientists to edit human genes, potentially eliminating hereditary diseases. However, the same technology could theoretically be used for 'enhancement'—making humans taller, smarter, or more athletic. Should genetic editing be permitted? If so, where should we draw the line?",
    studentResponses: [
      {
        name: "Dr. Patel",
        response: "Eliminating genetic diseases like Huntington's or cystic fibrosis is morally obligatory if we have the means. Parents already select against some conditions through prenatal testing. Gene editing is simply a more precise tool for the same goal—reducing suffering."
      },
      {
        name: "Marcus",
        response: "The slippery slope from disease prevention to enhancement is real. Once we accept editing for health, market forces will push toward 'designer babies.' This could create genetic classes—enhanced wealthy children and 'natural' poor ones. Some technologies shouldn't be developed."
      }
    ],
    timeLimit: 600,
    minWords: 120,
    sampleResponse: `This debate touches on fundamental questions about human nature, equality, and the appropriate limits of technological intervention. Both Dr. Patel and Marcus raise important concerns that deserve careful consideration.

Dr. Patel's argument for treating disease is compelling—if we can eliminate suffering from Huntington's disease, the moral case for doing so seems strong. His comparison to existing prenatal testing practices provides reasonable precedent.

However, Marcus raises a legitimate concern that the disease/enhancement distinction may be philosophically unstable. What counts as "disease" versus normal variation is partly socially constructed—is short stature a disease? At some point, treatment shades into enhancement.

I believe a workable framework might focus on three principles: consent (only modifications that cannot wait for the individual's own decision should be made), equity (access must not depend on wealth), and reversibility (prefer modifications that don't permanently alter the human germline when possible).

Complete prohibition may prove unenforceable as technology advances, but strong international governance could channel development toward therapeutic applications while limiting enhancement uses. The key is establishing ethical frameworks before capabilities outpace our ability to regulate responsibly.`,
    scoringCriteria: ["Sophisticated ethical reasoning", "Engagement with philosophical complexity", "Framework proposed", "Global perspective", "Academic register"]
  },
  {
    id: "DISC_010",
    taskType: "discussion",
    difficulty: "hard",
    topic: "Free Speech Boundaries",
    professorPrompt: "Universities have traditionally been spaces for free inquiry and the exchange of diverse ideas. Recently, debates have emerged about whether certain speakers should be disinvited from campuses or whether some speech should be restricted to protect student wellbeing. How should universities balance free expression with student safety and inclusion?",
    studentResponses: [
      {
        name: "Jamie",
        response: "Universities must protect free speech absolutely. The purpose of higher education is exposure to challenging ideas. Students who feel uncomfortable should engage intellectually with views they disagree with rather than silencing them. Restricting speech sets a dangerous precedent."
      },
      {
        name: "Priya",
        response: "Free speech has never been unlimited. Universities don't have to provide platforms for hate speech or misinformation. Some speech causes real harm to marginalized students, affecting their ability to learn. Inclusion requires some limits on what ideas are legitimized through institutional platforms."
      }
    ],
    timeLimit: 600,
    minWords: 120,
    sampleResponse: `Jamie and Priya represent positions that are often portrayed as incompatible, but I believe thoughtful analysis reveals more common ground than their debate suggests.

Jamie correctly identifies that exposure to challenging ideas is central to university education, and that discomfort alone shouldn't justify restriction. However, his absolutist position may not adequately distinguish between uncomfortable ideas and speech designed primarily to demean.

Priya rightly notes that platforms are finite resources and inviting speakers involves institutional choice. However, her emphasis on "harm" requires careful definition—subjective discomfort from encountering disagreeable ideas differs from targeted harassment.

I propose a framework distinguishing between three categories: (1) controversial ideas that should be freely debated regardless of discomfort, (2) speech patterns designed primarily to harass specific individuals or groups, which institutions need not platform, and (3) speech containing factual misinformation, which might warrant institutional response without censorship.

Universities should maintain strong presumptions toward open inquiry while acknowledging that platforming decisions involve judgment, not just rights. Students should develop resilience for category one while receiving protection from category two.`,
    scoringCriteria: ["Sophisticated balancing", "Framework development", "Recognition of competing values", "Practical distinctions made", "Academic nuance"]
  }
];

// ==================== LEGACY FORMAT CONVERSION ====================

export interface LegacyWritingQuestion {
  id: string;
  type: "sentence" | "email" | "discussion";
  difficulty: "easy" | "medium" | "hard";
  prompt: string;
  instructions: string;
  timeLimit: number;
  minWords: number;
  maxWords: number;
  context?: string;
  sampleResponse?: string;
  scoringCriteria: string[];
}

// Convert to flat format for backward compatibility
export const legacyWritingQuestions: LegacyWritingQuestion[] = [
  // Build Sentence Questions
  ...buildSentenceQuestions.map((q) => ({
    id: q.id,
    type: "sentence" as const,
    difficulty: q.difficulty,
    prompt: `Rearrange these words to form a correct sentence: ${q.scrambledWords.join(" / ")}`,
    instructions: `Context: ${q.context}\nGrammar focus: ${q.grammarFocus}`,
    timeLimit: 60,
    minWords: 5,
    maxWords: 25,
    sampleResponse: q.correctSentence,
    scoringCriteria: ["Grammar accuracy", "Correct word order", "Sentence completeness"]
  })),
  // Email Questions
  ...emailQuestions.map((q) => ({
    id: q.id,
    type: "email" as const,
    difficulty: q.difficulty,
    prompt: q.scenario,
    instructions: `Include the following in your email:\n${q.requirements.map((r, i) => `${i + 1}. ${r}`).join("\n")}`,
    timeLimit: q.timeLimit,
    minWords: q.minWords,
    maxWords: q.maxWords,
    sampleResponse: q.sampleResponse,
    scoringCriteria: q.scoringCriteria
  })),
  // Discussion Questions
  ...discussionQuestions.map((q) => ({
    id: q.id,
    type: "discussion" as const,
    difficulty: q.difficulty,
    prompt: q.professorPrompt,
    instructions: "Read the professor's question and your classmates' responses. Write your own response contributing to the discussion.",
    context: q.studentResponses.map(s => `${s.name}: ${s.response}`).join("\n\n"),
    timeLimit: q.timeLimit,
    minWords: q.minWords,
    maxWords: 250,
    sampleResponse: q.sampleResponse,
    scoringCriteria: q.scoringCriteria
  }))
];

// Export all questions
export const allWritingQuestions2026 = {
  buildSentence: buildSentenceQuestions,
  email: emailQuestions,
  discussion: discussionQuestions
};

// Statistics helper
export const writingQuestionStats = {
  buildSentence: {
    total: buildSentenceQuestions.length,
    easy: buildSentenceQuestions.filter(q => q.difficulty === "easy").length,
    medium: buildSentenceQuestions.filter(q => q.difficulty === "medium").length,
    hard: buildSentenceQuestions.filter(q => q.difficulty === "hard").length
  },
  email: {
    total: emailQuestions.length,
    easy: emailQuestions.filter(q => q.difficulty === "easy").length,
    medium: emailQuestions.filter(q => q.difficulty === "medium").length,
    hard: emailQuestions.filter(q => q.difficulty === "hard").length
  },
  discussion: {
    total: discussionQuestions.length,
    easy: discussionQuestions.filter(q => q.difficulty === "easy").length,
    medium: discussionQuestions.filter(q => q.difficulty === "medium").length,
    hard: discussionQuestions.filter(q => q.difficulty === "hard").length
  }
};
