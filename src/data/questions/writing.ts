// 2026 TOEFL iBT Writing Questions
// Based on official ETS format effective January 21, 2026
// Three task types: Build a Sentence (~6 min), Write an Email (7 min), Academic Discussion (10 min)

export interface BuildSentenceQuestion {
  id: string;
  taskType: "build_sentence";
  context: string;
  scrambledWords: string[];
  correctSentence: string;
  explanation: string;
}

export interface EmailQuestion {
  id: string;
  taskType: "email";
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

// Legacy interface for backward compatibility
export interface WritingQuestion {
  id: string;
  type: "sentence" | "email" | "discussion";
  prompt: string;
  instructions: string;
  timeLimit: number;
  minWords: number;
  maxWords: number;
  context?: string;
  sampleResponse?: string;
  scoringCriteria: string[];
}

// Build a Sentence Questions (rearrange words to form correct sentence)
export const buildSentenceQuestions: BuildSentenceQuestion[] = [
  {
    id: "BS_001",
    taskType: "build_sentence",
    context: "What was the highlight of your trip?",
    scrambledWords: ["were", "the", "was", "old city", "showed us around", "who", "tour guides"],
    correctSentence: "The tour guides who showed us around the old city were fantastic.",
    explanation: "This requires forming a relative clause with 'who' to describe the tour guides."
  },
  {
    id: "BS_002",
    taskType: "build_sentence",
    context: "I heard Anna got a promotion.",
    scrambledWords: ["a different department", "if", "moving to", "know", "do", "you", "she will be"],
    correctSentence: "Do you know if she will be moving to a different department?",
    explanation: "This forms an indirect question with 'if' as the conjunction."
  },
  {
    id: "BS_003",
    taskType: "build_sentence",
    context: "We're planning a trip to the mountains next weekend.",
    scrambledWords: ["the cabins", "available", "whether", "can", "will be", "you", "tell me"],
    correctSentence: "Can you tell me whether the cabins will be available?",
    explanation: "This creates a polite indirect question using 'whether'."
  },
  {
    id: "BS_004",
    taskType: "build_sentence",
    context: "What did she ask about your future plans?",
    scrambledWords: ["she", "wanted", "to know", "which", "colleges", "I'm considering"],
    correctSentence: "She wanted to know which colleges I'm considering.",
    explanation: "This forms reported speech with an embedded question."
  },
  {
    id: "BS_005",
    taskType: "build_sentence",
    context: "How did you manage to finish the project early?",
    scrambledWords: ["the team", "worked", "overtime", "had", "for", "several", "weeks"],
    correctSentence: "The team had worked overtime for several weeks.",
    explanation: "This uses the past perfect to show completed action before another past event."
  },
  {
    id: "BS_006",
    taskType: "build_sentence",
    context: "Why did you decide to change your major?",
    scrambledWords: ["I", "realized", "that", "engineering", "wasn't", "the right", "fit for me"],
    correctSentence: "I realized that engineering wasn't the right fit for me.",
    explanation: "This forms a complex sentence with a noun clause as the object."
  },
  {
    id: "BS_007",
    taskType: "build_sentence",
    context: "What happened at the meeting yesterday?",
    scrambledWords: ["the manager", "announced", "would be", "that", "changes", "there", "major"],
    correctSentence: "The manager announced that there would be major changes.",
    explanation: "This creates reported speech using 'that' as a conjunction."
  },
  {
    id: "BS_008",
    taskType: "build_sentence",
    context: "How is the new coffee shop on campus?",
    scrambledWords: ["I've", "heard", "it's", "quite", "popular", "become", "has", "already"],
    correctSentence: "I've heard it has already become quite popular.",
    explanation: "This combines present perfect with a noun clause showing result."
  },
  {
    id: "BS_009",
    taskType: "build_sentence",
    context: "Did you get any feedback on your presentation?",
    scrambledWords: ["the professor", "said", "that", "my analysis", "was", "thorough", "particularly"],
    correctSentence: "The professor said that my analysis was particularly thorough.",
    explanation: "This forms reported speech praising specific aspect of work."
  },
];

// Write an Email Questions (respond to scenario, 7 minutes, 130+ words recommended)
export const emailQuestions: EmailQuestion[] = [
  {
    id: "EMAIL_001",
    taskType: "email",
    scenario: "You submitted the wrong draft of your essay to your professor. The essay is due tomorrow, and you need to submit the correct version. Write an email to your professor.",
    requirements: [
      "Explain what happened with the wrong submission",
      "Request that the professor accept the correct version",
      "Ask about the timeline for receiving a response"
    ],
    timeLimit: 420,
    minWords: 130,
    maxWords: 180,
    sampleResponse: `Dear Professor Williams,

I hope this email finds you well. I am writing regarding my essay submission for ENG 201 that was due today. I have just realized that I accidentally submitted an earlier draft of my paper instead of the final version.

I apologize sincerely for this error. The wrong draft was missing my revised conclusion and updated citations that I had worked on extensively. I have the correct, completed version ready to submit immediately.

Would it be possible for you to accept my final draft? I can send it right away, and I want to assure you that the work was completed before the deadline. I would also appreciate knowing when I might hear back from you, as I want to ensure this is resolved before grades are posted.

Thank you for your understanding.

Best regards,
Maria Chen`,
    scoringCriteria: ["Politeness and social conventions", "Cohesion and organization", "Completeness of required elements", "Grammar and vocabulary", "Appropriate tone"]
  },
  {
    id: "EMAIL_002",
    taskType: "email",
    scenario: "You are a student who wants to request a letter of recommendation from a professor for a summer internship. You took the professor's class last semester and received a good grade. Write an email to the professor.",
    requirements: [
      "Introduce yourself and remind the professor how they know you",
      "Explain why you need the recommendation letter",
      "Provide relevant details about the internship deadline"
    ],
    timeLimit: 420,
    minWords: 130,
    maxWords: 180,
    sampleResponse: `Dear Professor Thompson,

I hope you are having a good semester. My name is David Park, and I was a student in your Marketing Principles class last fall. I particularly enjoyed our discussions about consumer behavior and earned an A in the course.

I am writing to ask if you would be willing to write a letter of recommendation for me. I am applying for a summer marketing internship at a technology company, and I believe your perspective on my work would strengthen my application.

The internship application deadline is March 15th, so ideally I would need the letter submitted by March 10th to allow time for processing. I would be happy to provide my resume and any other materials that might be helpful.

Please let me know if you would be comfortable writing this recommendation. I understand you may be busy, and I appreciate your consideration.

Thank you for your time.

Sincerely,
David Park`,
    scoringCriteria: ["Professional tone", "Clear request", "Relevant context provided", "Deadline information", "Grammar accuracy"]
  },
  {
    id: "EMAIL_003",
    taskType: "email",
    scenario: "You live in a dormitory and there has been construction noise starting at 7 AM every morning for the past week. This is affecting your sleep and study. Write an email to the housing office.",
    requirements: [
      "Describe the problem you are experiencing",
      "Explain how it is affecting you",
      "Request a specific solution or action"
    ],
    timeLimit: 420,
    minWords: 130,
    maxWords: 180,
    sampleResponse: `Dear Housing Office,

I am writing to report a concern about ongoing construction noise in the Morrison Hall dormitory. For the past week, loud construction work has been starting at 7 AM every morning, directly outside our building.

This early noise has significantly impacted both my sleep quality and my ability to study effectively. As a student with morning classes and evening study sessions, I rely on the early morning hours for rest. Additionally, the continuous noise makes it difficult to concentrate on coursework during the day.

I understand that construction is sometimes necessary, but I would like to request that the work hours be adjusted to start at 9 AM instead, after most students have left for class. Alternatively, perhaps temporary housing accommodations could be offered to affected residents.

I appreciate your attention to this matter and look forward to your response.

Thank you,
Jennifer Adams
Morrison Hall, Room 305`,
    scoringCriteria: ["Problem clearly described", "Impact explained", "Reasonable solution proposed", "Polite but firm tone", "Well organized"]
  },
  {
    id: "EMAIL_004",
    taskType: "email",
    scenario: "You ordered a textbook online for your class, but you received the wrong edition. The correct edition is needed for your assignments. Write an email to the online bookstore's customer service.",
    requirements: [
      "Explain what you ordered versus what you received",
      "Describe why this is a problem",
      "State what resolution you expect"
    ],
    timeLimit: 420,
    minWords: 130,
    maxWords: 180,
    sampleResponse: `Dear Customer Service,

I am writing regarding order number #BK-2024-7892, which I placed on January 15th. I ordered the 8th edition of "Introduction to Psychology" by Myers, but I received the 6th edition instead.

This incorrect shipment presents a significant problem for my coursework. My professor has assigned readings and homework from the 8th edition, and the page numbers and some content differ substantially from the older version. I need the correct textbook to complete my assignments, which begin next week.

I would like to request an exchange for the correct 8th edition as soon as possible. I am willing to return the incorrect book at no additional cost. Given the urgency of my academic needs, I would appreciate expedited shipping for the replacement.

Please let me know the process for arranging this exchange. I have kept all original packaging and can ship the return immediately.

Thank you for your prompt attention.

Regards,
Michael Torres`,
    scoringCriteria: ["Order details provided", "Problem clearly explained", "Resolution clearly stated", "Professional tone", "Grammar and clarity"]
  },
];

// Academic Discussion Questions (respond to professor + classmates, 10 minutes, 120+ words)
export const discussionQuestions: DiscussionQuestion[] = [
  {
    id: "DISC_001",
    taskType: "discussion",
    professorPrompt: "This week, we're discussing corporate social responsibility. In your opinion, what is the most effective way for companies to positively impact society—through ethical business practices and sustainable operations, or through philanthropic donations and charitable activities? Explain your reasoning.",
    studentResponses: [
      {
        name: "Sarah",
        response: "I think how a company operates on a daily basis matters more than donations. If a business treats employees fairly, reduces environmental harm, and sources materials ethically, that creates consistent positive impact. Charitable giving can be inconsistent and sometimes is just for publicity."
      },
      {
        name: "John",
        response: "I disagree. Philanthropy allows companies to address urgent social issues directly. When disasters strike or communities need immediate help, donations provide essential resources that operational changes simply can't match. Companies have resources to make a real difference through giving."
      }
    ],
    timeLimit: 600,
    minWords: 120,
    sampleResponse: `While both Sarah and John make valid points, I believe charitable giving ultimately has a more direct and measurable positive impact on society.

Sarah argues that ethical operations create consistent impact, which is true to some extent. However, operational improvements primarily benefit stakeholders already connected to the company—employees, suppliers, and local communities. These changes, while important, have limited reach.

John correctly identifies that philanthropy can address urgent, widespread social issues. I would add that charitable donations allow companies to support causes completely unrelated to their business operations, such as medical research, education in underserved areas, or disaster relief. This flexibility means companies can respond to society's most pressing needs.

Furthermore, philanthropy can inspire other companies and individuals to contribute, creating a multiplier effect that operational changes cannot achieve. When large corporations publicize their charitable work, it raises awareness and encourages broader social responsibility.

That said, companies should ensure their giving is genuine rather than merely promotional.`,
    scoringCriteria: ["Engagement with discussion", "Clear position stated", "Supporting reasons", "Acknowledgment of other views", "Coherent organization", "Grammar and vocabulary"]
  },
  {
    id: "DISC_002",
    taskType: "discussion",
    professorPrompt: "Today we're examining government policies for public health. Some argue that governments should impose higher taxes on unhealthy products like sugary drinks and processed foods to reduce consumption. Others believe this approach is unfair and ineffective. What is your view?",
    studentResponses: [
      {
        name: "Mark",
        response: "I support taxing unhealthy products. Research shows that higher prices reduce consumption of harmful goods. Just like tobacco taxes helped decrease smoking rates, food taxes could improve public health and reduce healthcare costs for everyone."
      },
      {
        name: "Tanya",
        response: "I think such taxes are regressive and unfair. They disproportionately burden lower-income families who may have limited access to healthier, more expensive alternatives. Instead of punishing consumers, governments should focus on education and making healthy food more affordable."
      }
    ],
    timeLimit: 600,
    minWords: 120,
    sampleResponse: `Both Mark and Tanya raise important considerations, but I believe a balanced approach combining taxation with support programs would be most effective.

Mark is correct that price increases can reduce consumption—this principle is well-established in economics. However, Tanya rightfully points out that simply raising prices creates hardship for families with limited budgets.

I propose that governments implement health taxes while simultaneously using that revenue to subsidize healthier food options. This addresses Tanya's concern about unfairness while achieving Mark's goal of discouraging unhealthy consumption. For example, revenue from soda taxes could fund programs that make fresh fruits and vegetables more affordable in low-income neighborhoods.

Additionally, this approach sends a clear message about health priorities while providing practical alternatives. People are more likely to change behavior when healthy options are accessible, not just when unhealthy options become expensive.

Education alone, as Tanya suggests, has proven insufficient without structural changes. Combining financial incentives with information creates more lasting behavioral change.`,
    scoringCriteria: ["Synthesis of perspectives", "Original contribution", "Practical reasoning", "Clear organization", "Academic vocabulary"]
  },
  {
    id: "DISC_003",
    taskType: "discussion",
    professorPrompt: "Scientists now have the technology to bring back extinct species through genetic engineering—a process called de-extinction. Should we pursue this technology? Consider both the potential benefits and risks in your response.",
    studentResponses: [
      {
        name: "Elena",
        response: "I'm excited about de-extinction. Bringing back species like the woolly mammoth could help restore ecosystems and reverse damage humans have caused. It also advances our understanding of genetics and could lead to breakthroughs in medicine and conservation."
      },
      {
        name: "Ryan",
        response: "I have serious concerns. De-extinction diverts resources from protecting existing endangered species. Also, revived species might not survive in today's changed environments, and introducing them could disrupt current ecosystems in unpredictable ways."
      }
    ],
    timeLimit: 600,
    minWords: 120,
    sampleResponse: `This is a fascinating ethical and scientific question. While Elena's enthusiasm for technological progress is understandable, I largely agree with Ryan's concerns about prioritization and unintended consequences.

The primary issue is resource allocation. Conservation funding is already limited, and current endangered species face immediate extinction threats. Diverting significant resources toward reviving long-dead species when living animals need protection seems misguided. We should master protecting what exists before attempting to restore what we've lost.

Ryan's ecological concerns are also valid. Ecosystems have evolved since these species disappeared. A revived woolly mammoth, for instance, would face a dramatically different Arctic environment with no guarantee of survival or integration.

However, I don't think de-extinction research should stop entirely. Small-scale scientific studies could yield valuable genetic insights without large ecological releases. The technology might eventually help currently endangered species through genetic rescue techniques.

In summary, I support limited research while prioritizing conservation of existing biodiversity.`,
    scoringCriteria: ["Critical analysis", "Engagement with both views", "Original reasoning", "Coherent structure", "Academic register"]
  },
  {
    id: "DISC_004",
    taskType: "discussion",
    professorPrompt: "Remote work has become increasingly common. Some companies now allow employees to work entirely from home, while others require a return to office. What work arrangement do you think leads to greater productivity and job satisfaction?",
    studentResponses: [
      {
        name: "Lisa",
        response: "I prefer fully remote work. Without commuting, I have more time and energy. I can design my own workspace and schedule, which helps me focus better. Many studies show remote workers are actually more productive than office workers."
      },
      {
        name: "James",
        response: "I think offices are essential for collaboration and company culture. Face-to-face interaction sparks creativity and builds stronger team relationships. Working from home can feel isolating, and it's harder to separate work from personal life."
      }
    ],
    timeLimit: 600,
    minWords: 120,
    sampleResponse: `Both Lisa and James identify real benefits of their preferred arrangements, which suggests the optimal solution depends on individual roles and personalities.

Lisa correctly highlights practical advantages of remote work—eliminated commutes and personalized environments can significantly improve quality of life and focus. However, James raises valid concerns about collaboration and social connection that shouldn't be dismissed.

I believe hybrid arrangements offer the best balance for most workers. Having designated office days ensures regular face-to-face collaboration and maintains team bonds, while remote days allow focused individual work without distractions.

The key is flexibility within structure. Different tasks benefit from different environments—creative brainstorming and team planning often work better in person, while deep analytical work may be more effective at home. Companies should trust employees to make appropriate choices rather than mandating one rigid approach.

Additionally, success depends heavily on management practices. Clear communication expectations, proper technology support, and intentional efforts to include remote workers in discussions are essential regardless of the specific arrangement chosen.`,
    scoringCriteria: ["Balanced analysis", "Practical reasoning", "Clear position", "Good organization", "Appropriate language"]
  },
];

// Convert to legacy format for backward compatibility
export const writingQuestions: WritingQuestion[] = [
  // Build Sentence Questions
  ...buildSentenceQuestions.map((q) => ({
    id: q.id,
    type: "sentence" as const,
    prompt: `Rearrange these words to form a correct sentence: ${q.scrambledWords.join(" / ")}`,
    instructions: `Context: ${q.context}`,
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
    prompt: q.professorPrompt,
    instructions: "Read the professor's question and your classmates' responses. Write your own response contributing to the discussion.",
    context: q.studentResponses.map(s => `${s.name}: ${s.response}`).join("\n\n"),
    timeLimit: q.timeLimit,
    minWords: q.minWords,
    maxWords: 250,
    sampleResponse: q.sampleResponse,
    scoringCriteria: q.scoringCriteria
  })),
];

// All question types are already exported above with their definitions
