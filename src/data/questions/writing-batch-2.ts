// Writing Batch 2 - Academic Discussion Tasks
// TOEFL iBT 2026 Format - 10 tasks per batch

import { AcademicDiscussionTask } from "./writing-2026";

export const writingBatch2: AcademicDiscussionTask[] = [
  {
    id: "WR_B2_001",
    type: "academic_discussion",
    topic: "Remote Work vs Office Culture",
    timeLimit: 600,
    professor: {
      name: "Dr. Stevens",
      message: "Today we're discussing remote work vs office culture. This is an important issue in organizational behavior. What are your thoughts on this topic? Please support your position with specific examples and reasoning."
    },
    students: [
      {
        name: "Student A",
        message: "I believe this is an important consideration. We need to think carefully about the implications and consider multiple perspectives before reaching a conclusion."
      },
      {
        name: "Student B",
        message: "I have a different view. While I understand the concerns, I think we should also consider the practical aspects and real-world applications of this issue."
      }
    ],
    prompt: "Your professor is teaching a class on organizational behavior. Write a post responding to the professor's question.\n\nIn your response, you should:\n- Express and support your opinion\n- Make a contribution to the discussion in your own words\n- An effective response will contain at least 100 words.",
    minWords: 100,
    maxWords: 200
  },
  {
    id: "WR_B2_002",
    type: "academic_discussion",
    topic: "Cryptocurrency Regulation",
    timeLimit: 600,
    professor: {
      name: "Prof. Kim",
      message: "Today we're discussing cryptocurrency regulation. This is an important issue in finance. What are your thoughts on this topic? Please support your position with specific examples and reasoning."
    },
    students: [
      {
        name: "Student A",
        message: "I believe this is an important consideration. We need to think carefully about the implications and consider multiple perspectives before reaching a conclusion."
      },
      {
        name: "Student B",
        message: "I have a different view. While I understand the concerns, I think we should also consider the practical aspects and real-world applications of this issue."
      }
    ],
    prompt: "Your professor is teaching a class on finance. Write a post responding to the professor's question.\n\nIn your response, you should:\n- Express and support your opinion\n- Make a contribution to the discussion in your own words\n- An effective response will contain at least 100 words.",
    minWords: 100,
    maxWords: 200
  },
  {
    id: "WR_B2_003",
    type: "academic_discussion",
    topic: "Space Exploration Funding",
    timeLimit: 600,
    professor: {
      name: "Dr. Patel",
      message: "Today we're discussing space exploration funding. This is an important issue in science policy. What are your thoughts on this topic? Please support your position with specific examples and reasoning."
    },
    students: [
      {
        name: "Student A",
        message: "I believe this is an important consideration. We need to think carefully about the implications and consider multiple perspectives before reaching a conclusion."
      },
      {
        name: "Student B",
        message: "I have a different view. While I understand the concerns, I think we should also consider the practical aspects and real-world applications of this issue."
      }
    ],
    prompt: "Your professor is teaching a class on science policy. Write a post responding to the professor's question.\n\nIn your response, you should:\n- Express and support your opinion\n- Make a contribution to the discussion in your own words\n- An effective response will contain at least 100 words.",
    minWords: 100,
    maxWords: 200
  },
  {
    id: "WR_B2_004",
    type: "academic_discussion",
    topic: "Homework Effectiveness",
    timeLimit: 600,
    professor: {
      name: "Prof. Brown",
      message: "Today we're discussing homework effectiveness. This is an important issue in education. What are your thoughts on this topic? Please support your position with specific examples and reasoning."
    },
    students: [
      {
        name: "Student A",
        message: "I believe this is an important consideration. We need to think carefully about the implications and consider multiple perspectives before reaching a conclusion."
      },
      {
        name: "Student B",
        message: "I have a different view. While I understand the concerns, I think we should also consider the practical aspects and real-world applications of this issue."
      }
    ],
    prompt: "Your professor is teaching a class on education. Write a post responding to the professor's question.\n\nIn your response, you should:\n- Express and support your opinion\n- Make a contribution to the discussion in your own words\n- An effective response will contain at least 100 words.",
    minWords: 100,
    maxWords: 200
  },
  {
    id: "WR_B2_005",
    type: "academic_discussion",
    topic: "Plastic Bag Bans",
    timeLimit: 600,
    professor: {
      name: "Dr. Green",
      message: "Today we're discussing plastic bag bans. This is an important issue in environmental policy. What are your thoughts on this topic? Please support your position with specific examples and reasoning."
    },
    students: [
      {
        name: "Student A",
        message: "I believe this is an important consideration. We need to think carefully about the implications and consider multiple perspectives before reaching a conclusion."
      },
      {
        name: "Student B",
        message: "I have a different view. While I understand the concerns, I think we should also consider the practical aspects and real-world applications of this issue."
      }
    ],
    prompt: "Your professor is teaching a class on environmental policy. Write a post responding to the professor's question.\n\nIn your response, you should:\n- Express and support your opinion\n- Make a contribution to the discussion in your own words\n- An effective response will contain at least 100 words.",
    minWords: 100,
    maxWords: 200
  },
  {
    id: "WR_B2_006",
    type: "academic_discussion",
    topic: "Gig Economy Worker Rights",
    timeLimit: 600,
    professor: {
      name: "Prof. Taylor",
      message: "Today we're discussing gig economy worker rights. This is an important issue in labor economics. What are your thoughts on this topic? Please support your position with specific examples and reasoning."
    },
    students: [
      {
        name: "Student A",
        message: "I believe this is an important consideration. We need to think carefully about the implications and consider multiple perspectives before reaching a conclusion."
      },
      {
        name: "Student B",
        message: "I have a different view. While I understand the concerns, I think we should also consider the practical aspects and real-world applications of this issue."
      }
    ],
    prompt: "Your professor is teaching a class on labor economics. Write a post responding to the professor's question.\n\nIn your response, you should:\n- Express and support your opinion\n- Make a contribution to the discussion in your own words\n- An effective response will contain at least 100 words.",
    minWords: 100,
    maxWords: 200
  },
  {
    id: "WR_B2_007",
    type: "academic_discussion",
    topic: "Bilingual Education",
    timeLimit: 600,
    professor: {
      name: "Dr. Nguyen",
      message: "Today we're discussing bilingual education. This is an important issue in linguistics. What are your thoughts on this topic? Please support your position with specific examples and reasoning."
    },
    students: [
      {
        name: "Student A",
        message: "I believe this is an important consideration. We need to think carefully about the implications and consider multiple perspectives before reaching a conclusion."
      },
      {
        name: "Student B",
        message: "I have a different view. While I understand the concerns, I think we should also consider the practical aspects and real-world applications of this issue."
      }
    ],
    prompt: "Your professor is teaching a class on linguistics. Write a post responding to the professor's question.\n\nIn your response, you should:\n- Express and support your opinion\n- Make a contribution to the discussion in your own words\n- An effective response will contain at least 100 words.",
    minWords: 100,
    maxWords: 200
  },
  {
    id: "WR_B2_008",
    type: "academic_discussion",
    topic: "Athlete Compensation",
    timeLimit: 600,
    professor: {
      name: "Prof. Miller",
      message: "Today we're discussing athlete compensation. This is an important issue in sports management. What are your thoughts on this topic? Please support your position with specific examples and reasoning."
    },
    students: [
      {
        name: "Student A",
        message: "I believe this is an important consideration. We need to think carefully about the implications and consider multiple perspectives before reaching a conclusion."
      },
      {
        name: "Student B",
        message: "I have a different view. While I understand the concerns, I think we should also consider the practical aspects and real-world applications of this issue."
      }
    ],
    prompt: "Your professor is teaching a class on sports management. Write a post responding to the professor's question.\n\nIn your response, you should:\n- Express and support your opinion\n- Make a contribution to the discussion in your own words\n- An effective response will contain at least 100 words.",
    minWords: 100,
    maxWords: 200
  },
  {
    id: "WR_B2_009",
    type: "academic_discussion",
    topic: "Autonomous Vehicles Safety",
    timeLimit: 600,
    professor: {
      name: "Dr. Wilson",
      message: "Today we're discussing autonomous vehicles safety. This is an important issue in technology and society. What are your thoughts on this topic? Please support your position with specific examples and reasoning."
    },
    students: [
      {
        name: "Student A",
        message: "I believe this is an important consideration. We need to think carefully about the implications and consider multiple perspectives before reaching a conclusion."
      },
      {
        name: "Student B",
        message: "I have a different view. While I understand the concerns, I think we should also consider the practical aspects and real-world applications of this issue."
      }
    ],
    prompt: "Your professor is teaching a class on technology and society. Write a post responding to the professor's question.\n\nIn your response, you should:\n- Express and support your opinion\n- Make a contribution to the discussion in your own words\n- An effective response will contain at least 100 words.",
    minWords: 100,
    maxWords: 200
  },
  {
    id: "WR_B2_010",
    type: "academic_discussion",
    topic: "Mental Health Days",
    timeLimit: 600,
    professor: {
      name: "Prof. Adams",
      message: "Today we're discussing mental health days. This is an important issue in workplace wellness. What are your thoughts on this topic? Please support your position with specific examples and reasoning."
    },
    students: [
      {
        name: "Student A",
        message: "I believe this is an important consideration. We need to think carefully about the implications and consider multiple perspectives before reaching a conclusion."
      },
      {
        name: "Student B",
        message: "I have a different view. While I understand the concerns, I think we should also consider the practical aspects and real-world applications of this issue."
      }
    ],
    prompt: "Your professor is teaching a class on workplace wellness. Write a post responding to the professor's question.\n\nIn your response, you should:\n- Express and support your opinion\n- Make a contribution to the discussion in your own words\n- An effective response will contain at least 100 words.",
    minWords: 100,
    maxWords: 200
  }
];
