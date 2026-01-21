// TOEFL iBT 2026 Reading Questions - Expanded Pool
// Format: Complete the Words, Read in Daily Life, Academic Passages
// Difficulty levels: Easy, Medium, Hard for adaptive testing

// ==================== TYPE DEFINITIONS ====================

export interface CompleteWordsQuestion {
  id: string;
  taskType: "complete_words";
  difficulty: "easy" | "medium" | "hard";
  topic: string;
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
  difficulty: "easy" | "medium" | "hard";
  category: string;
  passage: string;
  questions: {
    questionType: "factual" | "inference" | "vocabulary" | "purpose";
    question: string;
    options: string[];
    correctAnswer: string;
    explanation: string;
  }[];
}

export interface AcademicPassage {
  id: string;
  taskType: "academic";
  difficulty: "easy" | "medium" | "hard";
  topic: string;
  discipline: string;
  title: string;
  passage: string;
  wordCount: number;
  questions: {
    questionType: "factual" | "inference" | "vocabulary" | "negative_factual" | "sentence_insertion" | "rhetorical_purpose" | "prose_summary";
    question: string;
    options: string[];
    correctAnswer: string;
    explanation: string;
  }[];
}

export type ReadingQuestion2026 = CompleteWordsQuestion | DailyLifeQuestion | AcademicPassage;

// ==================== COMPLETE THE WORDS ====================
// 10 passages with varied difficulty

export const completeWordsQuestions: CompleteWordsQuestion[] = [
  // EASY (3)
  {
    id: "CW_001",
    taskType: "complete_words",
    difficulty: "easy",
    topic: "Campus Registration",
    passage: "All new st_dents must complete their course reg_stration before the semester begins. The registrar's off_ce is located in the main administration bu_lding. Please bring your student ID and a copy of your acc_ptance letter.",
    blanks: [
      { position: 0, partialWord: "st_dents", answer: "students" },
      { position: 1, partialWord: "reg_stration", answer: "registration" },
      { position: 2, partialWord: "off_ce", answer: "office" },
      { position: 3, partialWord: "bu_lding", answer: "building" },
      { position: 4, partialWord: "acc_ptance", answer: "acceptance" }
    ]
  },
  {
    id: "CW_002",
    taskType: "complete_words",
    difficulty: "easy",
    topic: "Library Hours",
    passage: "The univ_rsity library is open seven days a week during the acad_mic year. Study rooms can be res_rved online up to one week in adv_nce. Food and bev_rages are only permitted in designated areas.",
    blanks: [
      { position: 0, partialWord: "univ_rsity", answer: "university" },
      { position: 1, partialWord: "acad_mic", answer: "academic" },
      { position: 2, partialWord: "res_rved", answer: "reserved" },
      { position: 3, partialWord: "adv_nce", answer: "advance" },
      { position: 4, partialWord: "bev_rages", answer: "beverages" }
    ]
  },
  {
    id: "CW_003",
    taskType: "complete_words",
    difficulty: "easy",
    topic: "Dining Services",
    passage: "The campus caf_teria serves breakfast, lunch, and dinner during reg_lar hours. Students with dietary restr_ctions can request special meals. Payment can be made using your student meal pl_n or cr_dit card.",
    blanks: [
      { position: 0, partialWord: "caf_teria", answer: "cafeteria" },
      { position: 1, partialWord: "reg_lar", answer: "regular" },
      { position: 2, partialWord: "restr_ctions", answer: "restrictions" },
      { position: 3, partialWord: "pl_n", answer: "plan" },
      { position: 4, partialWord: "cr_dit", answer: "credit" }
    ]
  },
  // MEDIUM (4)
  {
    id: "CW_004",
    taskType: "complete_words",
    difficulty: "medium",
    topic: "Research Requirements",
    passage: "Graduate students must complete a comp_ehensive literature review before beginning their diss_rtation research. The meth_dology section should clearly describe the exp_rimental procedures. All research involving human part_cipants requires ethical approval.",
    blanks: [
      { position: 0, partialWord: "comp_ehensive", answer: "comprehensive" },
      { position: 1, partialWord: "diss_rtation", answer: "dissertation" },
      { position: 2, partialWord: "meth_dology", answer: "methodology" },
      { position: 3, partialWord: "exp_rimental", answer: "experimental" },
      { position: 4, partialWord: "part_cipants", answer: "participants" }
    ]
  },
  {
    id: "CW_005",
    taskType: "complete_words",
    difficulty: "medium",
    topic: "Academic Integrity",
    passage: "The university takes plag_arism very seriously. All submitted work must be orig_nal and properly cited. Students found guilty of acad_mic dishonesty may face susp_nsion or exp_lsion from the institution.",
    blanks: [
      { position: 0, partialWord: "plag_arism", answer: "plagiarism" },
      { position: 1, partialWord: "orig_nal", answer: "original" },
      { position: 2, partialWord: "acad_mic", answer: "academic" },
      { position: 3, partialWord: "susp_nsion", answer: "suspension" },
      { position: 4, partialWord: "exp_lsion", answer: "expulsion" }
    ]
  },
  {
    id: "CW_006",
    taskType: "complete_words",
    difficulty: "medium",
    topic: "Laboratory Safety",
    passage: "All lab_ratory personnel must wear protective equ_pment at all times. Haz_rdous materials should be stored in designated cab_nets. Emergency proc_dures are posted near each exit for quick reference.",
    blanks: [
      { position: 0, partialWord: "lab_ratory", answer: "laboratory" },
      { position: 1, partialWord: "equ_pment", answer: "equipment" },
      { position: 2, partialWord: "Haz_rdous", answer: "Hazardous" },
      { position: 3, partialWord: "cab_nets", answer: "cabinets" },
      { position: 4, partialWord: "proc_dures", answer: "procedures" }
    ]
  },
  {
    id: "CW_007",
    taskType: "complete_words",
    difficulty: "medium",
    topic: "Financial Aid",
    passage: "Schol_rship applications must be submitted before the deadline. Students must dem_nstrate financial need through documentation. Ren_wal of funding depends on maintaining satisf_ctory academic progress throughout the acad_mic year.",
    blanks: [
      { position: 0, partialWord: "Schol_rship", answer: "Scholarship" },
      { position: 1, partialWord: "dem_nstrate", answer: "demonstrate" },
      { position: 2, partialWord: "Ren_wal", answer: "Renewal" },
      { position: 3, partialWord: "satisf_ctory", answer: "satisfactory" },
      { position: 4, partialWord: "acad_mic", answer: "academic" }
    ]
  },
  // HARD (3)
  {
    id: "CW_008",
    taskType: "complete_words",
    difficulty: "hard",
    topic: "Interdisciplinary Research",
    passage: "Interdisc_plinary collaboration requires researchers to synth_size knowledge from multiple domains. Epist_mological differences between fields can complicate commun_cation. Successful interd_sciplinary projects often require signif_cant time investment in building mutual underst_nding.",
    blanks: [
      { position: 0, partialWord: "Interdisc_plinary", answer: "Interdisciplinary" },
      { position: 1, partialWord: "synth_size", answer: "synthesize" },
      { position: 2, partialWord: "Epist_mological", answer: "Epistemological" },
      { position: 3, partialWord: "commun_cation", answer: "communication" },
      { position: 4, partialWord: "interd_sciplinary", answer: "interdisciplinary" },
      { position: 5, partialWord: "signif_cant", answer: "significant" },
      { position: 6, partialWord: "underst_nding", answer: "understanding" }
    ]
  },
  {
    id: "CW_009",
    taskType: "complete_words",
    difficulty: "hard",
    topic: "Cognitive Neuroscience",
    passage: "Neuros_ientists have identified specific brain regions assoc_ated with decl_rative memory formation. The hipp_campus plays a crucial role in consol_dating short-term memories into long-term storage. Neurod_generative diseases can severely impair these cog_itive processes.",
    blanks: [
      { position: 0, partialWord: "Neuros_ientists", answer: "Neuroscientists" },
      { position: 1, partialWord: "assoc_ated", answer: "associated" },
      { position: 2, partialWord: "decl_rative", answer: "declarative" },
      { position: 3, partialWord: "hipp_campus", answer: "hippocampus" },
      { position: 4, partialWord: "consol_dating", answer: "consolidating" },
      { position: 5, partialWord: "Neurod_generative", answer: "Neurodegenerative" },
      { position: 6, partialWord: "cog_itive", answer: "cognitive" }
    ]
  },
  {
    id: "CW_010",
    taskType: "complete_words",
    difficulty: "hard",
    topic: "Environmental Policy",
    passage: "Sust_inability initiatives require compreh_nsive environmental impact assess_ents. Biod_versity conservation efforts must balance ecol_gical preservation with economic dev_lopment. Interg_vernmental cooperation is essential for addressing transbou_dary environmental challenges.",
    blanks: [
      { position: 0, partialWord: "Sust_inability", answer: "Sustainability" },
      { position: 1, partialWord: "compreh_nsive", answer: "comprehensive" },
      { position: 2, partialWord: "assess_ents", answer: "assessments" },
      { position: 3, partialWord: "Biod_versity", answer: "Biodiversity" },
      { position: 4, partialWord: "ecol_gical", answer: "ecological" },
      { position: 5, partialWord: "dev_lopment", answer: "development" },
      { position: 6, partialWord: "Interg_vernmental", answer: "Intergovernmental" },
      { position: 7, partialWord: "transbou_dary", answer: "transboundary" }
    ]
  }
];

// ==================== READ IN DAILY LIFE ====================
// 10 passages with practical scenarios

export const dailyLifeQuestions: DailyLifeQuestion[] = [
  // EASY (3)
  {
    id: "DL_001",
    taskType: "daily_life",
    difficulty: "easy",
    category: "Campus Email",
    passage: `From: housing@university.edu
To: All Residents
Subject: Maintenance Schedule

Dear Residents,

The facilities team will conduct routine maintenance in all dormitory buildings next week. Water will be shut off on Tuesday from 9 AM to 12 PM for pipe inspections. Please store water for drinking and other essential uses.

Additionally, fire alarm testing will occur on Thursday between 2 PM and 4 PM. You do not need to evacuate during these tests, but please be prepared for brief alarm sounds.

If you have any concerns, contact the housing office at extension 2500.

Best regards,
Housing Services`,
    questions: [
      {
        questionType: "factual",
        question: "When will the water be shut off?",
        options: ["Monday morning", "Tuesday morning", "Wednesday afternoon", "Thursday afternoon"],
        correctAnswer: "Tuesday morning",
        explanation: "The email states 'Water will be shut off on Tuesday from 9 AM to 12 PM.'"
      },
      {
        questionType: "factual",
        question: "What should residents do during the fire alarm testing?",
        options: ["Evacuate immediately", "Stay in their rooms", "Go to the housing office", "Call extension 2500"],
        correctAnswer: "Stay in their rooms",
        explanation: "The email says 'You do not need to evacuate during these tests.'"
      },
      {
        questionType: "inference",
        question: "Why does the email suggest storing water?",
        options: ["To save money", "Because water will be unavailable", "For emergency use", "To test water quality"],
        correctAnswer: "Because water will be unavailable",
        explanation: "Since water will be shut off for three hours, residents need to store water for essential uses during that time."
      }
    ]
  },
  {
    id: "DL_002",
    taskType: "daily_life",
    difficulty: "easy",
    category: "Campus Notice",
    passage: `STUDENT CENTER HOURS - SPRING SEMESTER

Monday - Thursday: 7 AM - 11 PM
Friday: 7 AM - 12 AM (Midnight)
Saturday: 9 AM - 12 AM (Midnight)
Sunday: 10 AM - 10 PM

SPECIAL CLOSURES:
- Spring Break (March 15-22): Limited hours 10 AM - 6 PM
- Finals Week (May 5-12): Extended hours until 2 AM daily

The food court closes one hour before building closure.
Study rooms can be reserved at the information desk.

For questions, call 555-STUDENT or visit the main desk.`,
    questions: [
      {
        questionType: "factual",
        question: "What time does the Student Center open on Sundays?",
        options: ["7 AM", "9 AM", "10 AM", "11 AM"],
        correctAnswer: "10 AM",
        explanation: "According to the schedule, Sunday hours are '10 AM - 10 PM.'"
      },
      {
        questionType: "factual",
        question: "When does the food court close on a regular Friday?",
        options: ["10 PM", "11 PM", "12 AM", "1 AM"],
        correctAnswer: "11 PM",
        explanation: "The building closes at midnight on Friday, and 'The food court closes one hour before building closure.'"
      },
      {
        questionType: "inference",
        question: "Why are extended hours offered during Finals Week?",
        options: ["To accommodate more events", "To allow students more study time", "To serve more food", "To train new staff"],
        correctAnswer: "To allow students more study time",
        explanation: "Finals Week typically requires additional study time, which is why the center stays open until 2 AM."
      }
    ]
  },
  {
    id: "DL_003",
    taskType: "daily_life",
    difficulty: "easy",
    category: "Announcement",
    passage: `CAMPUS SHUTTLE SERVICE UPDATE

Starting January 15, the campus shuttle will operate on a new schedule to better serve student needs.

ROUTES:
- Blue Line: Main Campus to Downtown Station (Every 15 minutes, 6 AM - 10 PM)
- Red Line: Dormitories to Science Complex (Every 20 minutes, 7 AM - 9 PM)
- Green Line: Weekend Shopping Shuttle (Saturdays only, 10 AM - 6 PM)

All shuttles are free with valid student ID. Real-time tracking is available through the Campus Transit app.

Note: Service may be delayed during severe weather. Check the app for updates.`,
    questions: [
      {
        questionType: "factual",
        question: "How often does the Blue Line run?",
        options: ["Every 10 minutes", "Every 15 minutes", "Every 20 minutes", "Every 30 minutes"],
        correctAnswer: "Every 15 minutes",
        explanation: "The passage states the Blue Line runs 'Every 15 minutes, 6 AM - 10 PM.'"
      },
      {
        questionType: "factual",
        question: "When does the Green Line operate?",
        options: ["Every day", "Weekdays only", "Saturdays only", "Sundays only"],
        correctAnswer: "Saturdays only",
        explanation: "The Green Line is described as 'Weekend Shopping Shuttle (Saturdays only).'"
      },
      {
        questionType: "vocabulary",
        question: "In this context, what does 'valid' mean?",
        options: ["Expensive", "Current and acceptable", "Old", "Digital"],
        correctAnswer: "Current and acceptable",
        explanation: "A 'valid' student ID means one that is current and officially acceptable."
      }
    ]
  },
  // MEDIUM (4)
  {
    id: "DL_004",
    taskType: "daily_life",
    difficulty: "medium",
    category: "Academic Email",
    passage: `From: professor.chen@university.edu
To: BIO301-Fall2026@groups.university.edu
Subject: Midterm Exam Information and Study Resources

Dear Biology 301 Students,

As we approach the midterm examination scheduled for October 15, I wanted to provide you with essential information and resources.

EXAM DETAILS:
- Date: October 15, 2026
- Time: 10:00 AM - 12:00 PM
- Location: Science Hall 201
- Format: 50 multiple choice questions (2 points each) + 2 short essays (25 points each)

TOPICS COVERED:
Chapters 1-7 of the textbook, including all lecture material and assigned readings. Pay particular attention to cellular respiration, photosynthesis mechanisms, and enzyme kinetics.

STUDY RESOURCES:
- Practice exams are available on the course portal
- Review sessions: October 12 (2 PM) and October 13 (4 PM) in Room 305
- Office hours extended this week: Monday-Thursday, 3-5 PM

Please bring a #2 pencil and your student ID. Calculators are NOT permitted. Students with approved accommodations should contact the Disability Services office.

Best of luck with your studies,
Dr. Chen`,
    questions: [
      {
        questionType: "factual",
        question: "What is the total point value of the exam?",
        options: ["100 points", "125 points", "150 points", "175 points"],
        correctAnswer: "150 points",
        explanation: "50 multiple choice at 2 points each = 100 points, plus 2 essays at 25 points each = 50 points. Total = 150 points."
      },
      {
        questionType: "factual",
        question: "Which items are students NOT allowed to bring?",
        options: ["Student ID", "#2 pencils", "Calculators", "Textbooks"],
        correctAnswer: "Calculators",
        explanation: "The email explicitly states 'Calculators are NOT permitted.'"
      },
      {
        questionType: "inference",
        question: "Why might Dr. Chen have extended office hours this week?",
        options: ["To grade more papers", "To help students prepare for the midterm", "To meet with new students", "To plan future lectures"],
        correctAnswer: "To help students prepare for the midterm",
        explanation: "Extended office hours before the midterm suggests the professor wants to be more available for student questions about the upcoming exam."
      },
      {
        questionType: "vocabulary",
        question: "What does 'accommodations' refer to in this context?",
        options: ["Housing arrangements", "Special testing arrangements for students with disabilities", "Extra credit opportunities", "Parking permits"],
        correctAnswer: "Special testing arrangements for students with disabilities",
        explanation: "In academic contexts, 'accommodations' refers to modifications made for students with documented disabilities, as indicated by the mention of Disability Services."
      }
    ]
  },
  {
    id: "DL_005",
    taskType: "daily_life",
    difficulty: "medium",
    category: "Policy Notice",
    passage: `UPDATED PARKING REGULATIONS - EFFECTIVE FALL 2026

The university has revised its parking policies to address congestion and promote sustainable transportation options.

KEY CHANGES:

1. PERMIT PRICING
   - Faculty/Staff Annual: $450 (previously $400)
   - Student Annual: $300 (previously $250)
   - Motorcycle: $100 (unchanged)
   - Carpool permits (3+ people): 40% discount

2. NEW RESTRICTIONS
   - Central campus lots (A, B, C) now require Level 2 permits
   - First-year students may only park in Lot K (remote)
   - Free shuttle service from Lot K runs every 10 minutes

3. ENFORCEMENT
   - First violation: Warning
   - Second violation: $50 fine
   - Third+ violations: $100 fine plus potential permit revocation

4. ALTERNATIVE TRANSPORTATION INCENTIVES
   - Free bus pass with parking permit surrender
   - Bike storage units available at $50/year
   - Electric vehicle charging stations (free for first 2 hours)

Questions? Visit parking.university.edu or call 555-PARK.`,
    questions: [
      {
        questionType: "factual",
        question: "How much did student annual permits increase?",
        options: ["$25", "$50", "$75", "$100"],
        correctAnswer: "$50",
        explanation: "Student permits went from $250 to $300, an increase of $50."
      },
      {
        questionType: "factual",
        question: "What is the penalty for a third parking violation?",
        options: ["Warning only", "$50 fine", "$100 fine", "$100 fine plus potential permit revocation"],
        correctAnswer: "$100 fine plus potential permit revocation",
        explanation: "According to the enforcement section, 'Third+ violations: $100 fine plus potential permit revocation.'"
      },
      {
        questionType: "inference",
        question: "What is the main purpose of the carpool discount?",
        options: ["To increase university revenue", "To reduce the number of cars on campus", "To reward senior students", "To improve parking lot maintenance"],
        correctAnswer: "To reduce the number of cars on campus",
        explanation: "The 40% discount for carpooling encourages multiple people to share one vehicle, reducing overall traffic and congestion."
      },
      {
        questionType: "purpose",
        question: "Why might first-year students be restricted to Lot K?",
        options: ["Lot K has better security", "To reserve closer spots for faculty and upperclassmen", "First-year students don't have cars", "Lot K is under construction"],
        correctAnswer: "To reserve closer spots for faculty and upperclassmen",
        explanation: "Restricting newer students to remote lots while keeping central lots for higher permit levels suggests a priority system favoring more senior community members."
      }
    ]
  },
  {
    id: "DL_006",
    taskType: "daily_life",
    difficulty: "medium",
    category: "Event Announcement",
    passage: `INTERNATIONAL STUDENT WELCOME WEEK
August 20-26, 2026

The Office of Global Engagement invites all new international students to participate in our comprehensive orientation program.

SCHEDULE HIGHLIGHTS:

Monday, August 20 - Arrival Day
• Airport pickup service (register by Aug 15)
• Welcome packets distributed at International House
• Temporary housing check-in available

Tuesday, August 21 - Immigration Essentials
• Mandatory SEVIS check-in (9 AM - 5 PM)
• Immigration document review
• Social Security information session (for students with on-campus jobs)

Wednesday, August 22 - Campus Life
• Campus tour (10 AM and 2 PM)
• Student services orientation
• Library and technology resources workshop

Thursday, August 23 - Academic Preparation
• Academic integrity workshop (Required)
• Meeting with academic advisors
• Course registration assistance

Friday, August 24 - Cultural Exchange
• Welcome dinner featuring international cuisine (6 PM)
• Cultural performance showcase
• Student organization fair

Saturday-Sunday - Optional Activities
• City tours, shopping trips, outdoor excursions

IMPORTANT: Students on F-1 visas must complete SEVIS check-in within 15 days of arrival. Failure to do so may affect your immigration status.

Register at: globalengagement.university.edu/welcome`,
    questions: [
      {
        questionType: "factual",
        question: "By what date must students register for airport pickup?",
        options: ["August 15", "August 20", "August 21", "August 26"],
        correctAnswer: "August 15",
        explanation: "The announcement states 'Airport pickup service (register by Aug 15).'"
      },
      {
        questionType: "factual",
        question: "Which event is described as mandatory?",
        options: ["Campus tour", "Welcome dinner", "Academic integrity workshop", "City tours"],
        correctAnswer: "Academic integrity workshop",
        explanation: "The schedule shows 'Academic integrity workshop (Required)' on Thursday."
      },
      {
        questionType: "inference",
        question: "Why is the SEVIS check-in deadline emphasized as important?",
        options: ["It affects meal plan activation", "It affects housing assignment", "It affects immigration status", "It affects class registration"],
        correctAnswer: "It affects immigration status",
        explanation: "The notice warns that 'Failure to do so may affect your immigration status.'"
      },
      {
        questionType: "vocabulary",
        question: "What does 'comprehensive' mean in this context?",
        options: ["Expensive", "Thorough and complete", "Mandatory", "Confusing"],
        correctAnswer: "Thorough and complete",
        explanation: "A 'comprehensive' orientation covers all necessary aspects thoroughly."
      }
    ]
  },
  {
    id: "DL_007",
    taskType: "daily_life",
    difficulty: "medium",
    category: "Health Services",
    passage: `STUDENT HEALTH CENTER - FLU VACCINATION CLINIC

Protect yourself and your campus community this flu season!

FREE FLU SHOTS available to all enrolled students with valid ID.

CLINIC DATES AND LOCATIONS:
• October 1-5: Student Health Center (8 AM - 6 PM)
• October 8: Science Building Lobby (10 AM - 4 PM)
• October 9: Recreation Center (11 AM - 7 PM)
• October 10: Library Atrium (9 AM - 3 PM)

NO APPOINTMENT NECESSARY for standard flu vaccines.

IMPORTANT INFORMATION:
- Wear short sleeves or clothing allowing easy access to upper arm
- If you have had a severe allergic reaction to previous flu vaccines, consult with our medical staff first
- Students with egg allergies: egg-free vaccine options are available upon request
- Minor side effects (sore arm, mild fever) are normal and typically resolve within 48 hours

HIGH-DOSE VACCINES:
Available for students with certain chronic conditions. Requires appointment - call 555-HEALTH.

The CDC recommends vaccination before the end of October for optimal protection through flu season.

Questions? Visit studenthealth.university.edu or call 555-HEALTH.`,
    questions: [
      {
        questionType: "factual",
        question: "Where can students get vaccinated on October 9?",
        options: ["Student Health Center", "Science Building Lobby", "Recreation Center", "Library Atrium"],
        correctAnswer: "Recreation Center",
        explanation: "The schedule shows 'October 9: Recreation Center (11 AM - 7 PM).'"
      },
      {
        questionType: "factual",
        question: "What is required for students with egg allergies?",
        options: ["They cannot receive the vaccine", "They must request an egg-free vaccine", "They must get a doctor's note", "They must wait until November"],
        correctAnswer: "They must request an egg-free vaccine",
        explanation: "The notice states 'egg-free vaccine options are available upon request.'"
      },
      {
        questionType: "inference",
        question: "Why does the clinic suggest wearing short sleeves?",
        options: ["The clinic rooms are warm", "The injection is given in the upper arm", "To verify student identity", "To check for skin conditions"],
        correctAnswer: "The injection is given in the upper arm",
        explanation: "The advice to 'wear short sleeves or clothing allowing easy access to upper arm' implies that's where the injection is administered."
      },
      {
        questionType: "vocabulary",
        question: "What does 'optimal' mean in the phrase 'optimal protection'?",
        options: ["Minimum", "Best possible", "Average", "Acceptable"],
        correctAnswer: "Best possible",
        explanation: "'Optimal' means the best or most favorable outcome possible."
      }
    ]
  },
  // HARD (3)
  {
    id: "DL_008",
    taskType: "daily_life",
    difficulty: "hard",
    category: "Research Opportunity",
    passage: `UNDERGRADUATE RESEARCH FELLOWSHIP PROGRAM
Application Deadline: February 15, 2027

The Office of Undergraduate Research invites applications for the Summer Research Fellowship Program, offering exceptional students the opportunity to conduct mentored research alongside faculty investigators.

PROGRAM OVERVIEW:
The fellowship provides a $4,500 stipend for 10 weeks of full-time research (40 hours/week) during the summer term. Fellows are matched with faculty mentors based on research interests and are expected to produce a scholarly output such as a poster presentation, conference paper, or contribution to a peer-reviewed publication.

ELIGIBILITY REQUIREMENTS:
• Enrolled as a full-time undergraduate with at least sophomore standing
• Minimum cumulative GPA of 3.2
• Completed at least one research methods course or equivalent
• Available for full-time commitment from May 26 - August 1
• U.S. citizens, permanent residents, and international students on appropriate visas may apply

APPLICATION COMPONENTS:
1. Personal statement (500-750 words) describing research interests and career goals
2. Faculty mentor commitment letter
3. Preliminary research proposal (1,500-2,000 words)
4. Two letters of recommendation (at least one from a faculty member)
5. Official transcript

SELECTION CRITERIA:
Applications are evaluated holistically, considering academic achievement, quality of research proposal, faculty mentor's track record, and potential for project completion within the fellowship period. Particular consideration is given to students from underrepresented backgrounds in research fields.

Information sessions will be held on January 20 (2 PM, Research Commons) and January 25 (4 PM, virtual). RSVP at undergradresearch.university.edu.`,
    questions: [
      {
        questionType: "factual",
        question: "What is the weekly stipend equivalent for fellows?",
        options: ["$350", "$400", "$450", "$500"],
        correctAnswer: "$450",
        explanation: "$4,500 divided by 10 weeks equals $450 per week."
      },
      {
        questionType: "factual",
        question: "Which of the following is NOT an acceptable scholarly output?",
        options: ["Poster presentation", "Conference paper", "Blog post", "Peer-reviewed publication contribution"],
        correctAnswer: "Blog post",
        explanation: "The acceptable outputs listed are 'a poster presentation, conference paper, or contribution to a peer-reviewed publication.' Blog post is not mentioned."
      },
      {
        questionType: "inference",
        question: "Why might the program give 'particular consideration' to students from underrepresented backgrounds?",
        options: ["They typically have higher GPAs", "To promote diversity and equity in research fields", "They require less mentoring", "To reduce the number of applicants"],
        correctAnswer: "To promote diversity and equity in research fields",
        explanation: "Prioritizing underrepresented students helps address historical inequities and increases diversity in academic research."
      },
      {
        questionType: "vocabulary",
        question: "What does 'holistically' mean in the evaluation context?",
        options: ["Focusing only on grades", "Considering all aspects together", "Using a random selection process", "Prioritizing research experience"],
        correctAnswer: "Considering all aspects together",
        explanation: "A 'holistic' evaluation considers the whole picture - all components and qualities together rather than any single factor."
      },
      {
        questionType: "inference",
        question: "What can be inferred about faculty mentor involvement?",
        options: ["Mentors are randomly assigned", "Students must secure a mentor before applying", "Mentors apply separately", "Mentoring is optional"],
        correctAnswer: "Students must secure a mentor before applying",
        explanation: "The requirement of a 'Faculty mentor commitment letter' as an application component indicates students must already have mentor agreement."
      }
    ]
  },
  {
    id: "DL_009",
    taskType: "daily_life",
    difficulty: "hard",
    category: "Housing Policy",
    passage: `GRADUATE HOUSING ALLOCATION POLICY
Academic Year 2026-2027

Due to unprecedented demand and limited availability, the Office of Graduate Housing has implemented a revised allocation system to ensure equitable distribution of on-campus apartments.

PRIORITY CATEGORIES (in order of consideration):

Tier 1 - Highest Priority:
• Students with documented disabilities requiring proximity to campus facilities
• International students in their first year of study (within 90 days of initial arrival)
• Recipients of university fellowships with housing guarantees

Tier 2 - High Priority:
• Students in programs requiring laboratory access after standard business hours
• Graduate teaching assistants with early morning course assignments
• Students with dependent children (family housing units only)

Tier 3 - Standard Priority:
• Continuing students with current on-campus housing contracts
• New doctoral students
• New master's students

ALLOCATION PROCESS:
1. Applications open March 1 and close March 31
2. Priority calculations completed by April 15
3. Housing offers extended April 20-30
4. Students have 72 hours to accept or decline offers
5. Waitlist positions assigned for unplaced applicants

CONTRACT TERMS:
• Academic year contracts run August 15 - May 31
• Rent includes utilities, internet, and basic furnishings
• Early termination requires 60-day notice and forfeiture of security deposit
• Subletting is strictly prohibited without written authorization

Students not offered on-campus housing will receive assistance in locating off-campus alternatives through our community housing database. The housing office maintains partnerships with several apartment complexes offering discounted rates to university affiliates.

Appeals may be submitted within 14 days of allocation decisions. Include documentation supporting any extenuating circumstances.`,
    questions: [
      {
        questionType: "factual",
        question: "How long do students have to respond to housing offers?",
        options: ["24 hours", "48 hours", "72 hours", "One week"],
        correctAnswer: "72 hours",
        explanation: "The policy states 'Students have 72 hours to accept or decline offers.'"
      },
      {
        questionType: "factual",
        question: "Which group receives the highest priority for housing?",
        options: ["Graduate teaching assistants", "New doctoral students", "International students in their first year", "Students with dependent children"],
        correctAnswer: "International students in their first year",
        explanation: "International students in their first year are in Tier 1 (Highest Priority), while the other options are in Tier 2 or 3."
      },
      {
        questionType: "inference",
        question: "Why might laboratory access affect housing priority?",
        options: ["Labs are located far from off-campus housing", "Students may need to work at unusual hours requiring campus proximity", "Lab equipment is expensive", "Labs have limited capacity"],
        correctAnswer: "Students may need to work at unusual hours requiring campus proximity",
        explanation: "Programs 'requiring laboratory access after standard business hours' suggests these students need to be close to campus for late-night or early-morning work."
      },
      {
        questionType: "vocabulary",
        question: "What does 'extenuating circumstances' mean in the appeals context?",
        options: ["Common situations", "Special conditions that justify an exception", "Financial difficulties", "Academic achievements"],
        correctAnswer: "Special conditions that justify an exception",
        explanation: "'Extenuating circumstances' refers to unusual situations that may justify special consideration or exceptions to standard policies."
      },
      {
        questionType: "inference",
        question: "What can be concluded about on-campus graduate housing availability?",
        options: ["There is surplus housing available", "Housing is guaranteed for all graduate students", "Demand exceeds supply", "Only international students can live on campus"],
        correctAnswer: "Demand exceeds supply",
        explanation: "The mention of 'unprecedented demand and limited availability,' priority tiers, and waitlists all indicate that more students want housing than can be accommodated."
      }
    ]
  },
  {
    id: "DL_010",
    taskType: "daily_life",
    difficulty: "hard",
    category: "Academic Advising",
    passage: `DECLARATION OF MAJOR GUIDELINES
College of Arts and Sciences

Students entering their third semester must formally declare an academic major. This document outlines the process, considerations, and resources available to assist you in making this significant academic decision.

TIMELINE AND REQUIREMENTS:

Phase 1 - Exploration (Semesters 1-2):
Students are encouraged to complete general education requirements while exploring potential areas of interest through introductory courses. The Academic Advising Center offers career assessments and major exploration workshops.

Phase 2 - Declaration (By end of Semester 3):
Submit the Declaration of Major form through the student portal. Requirements include:
• Completion of at least 30 credit hours
• GPA of 2.0 or higher in courses within the intended major
• Approval signature from a faculty advisor in the declared department

Phase 3 - Confirmation and Planning (Semester 4):
Meet with your newly assigned major advisor to develop a four-year graduation plan. Students in competitive majors (those with enrollment caps) may need to complete additional gateway courses before full admission.

CHANGING YOUR MAJOR:
Students may change their major once without departmental approval. Subsequent changes require:
• Written justification explaining the reason for change
• Meeting with both current and prospective major advisors
• Approval from the Associate Dean of Academic Affairs

DOUBLE MAJORS AND MINORS:
Pursuing a double major is possible but requires careful planning to ensure timely graduation. Both majors must be declared simultaneously, and students must meet all requirements for each program independently. Minors require a minimum of 18 credits, with at least 9 credits at the 300-level or above.

UNDECLARED STATUS BEYOND SEMESTER 3:
Students who do not declare by the deadline will be placed on academic hold, preventing registration for subsequent semesters until a major is declared. Extensions may be granted through petition to the Advising Dean.

For advising appointments: advising.artsci.university.edu or call 555-MAJOR`,
    questions: [
      {
        questionType: "factual",
        question: "What GPA is required in major courses to declare?",
        options: ["1.5", "2.0", "2.5", "3.0"],
        correctAnswer: "2.0",
        explanation: "The requirements state 'GPA of 2.0 or higher in courses within the intended major.'"
      },
      {
        questionType: "factual",
        question: "How many credits are required for a minor?",
        options: ["12 credits", "15 credits", "18 credits", "21 credits"],
        correctAnswer: "18 credits",
        explanation: "The document states 'Minors require a minimum of 18 credits.'"
      },
      {
        questionType: "inference",
        question: "Why might some majors require 'gateway courses' before full admission?",
        options: ["To generate more tuition revenue", "To ensure students have adequate preparation for advanced coursework", "To reduce the number of faculty needed", "To simplify scheduling"],
        correctAnswer: "To ensure students have adequate preparation for advanced coursework",
        explanation: "Competitive majors with enrollment caps likely use gateway courses to verify students have the foundational knowledge and commitment needed for success in the program."
      },
      {
        questionType: "vocabulary",
        question: "What does 'academic hold' mean in this context?",
        options: ["Academic support services", "A restriction preventing enrollment", "A scholarship opportunity", "Extra advising meetings"],
        correctAnswer: "A restriction preventing enrollment",
        explanation: "The context clarifies that academic hold means 'preventing registration for subsequent semesters.'"
      },
      {
        questionType: "inference",
        question: "Why does the second major change require additional approvals?",
        options: ["To generate administrative fees", "To discourage frequent changes that may delay graduation", "To increase meeting requirements", "To punish indecisive students"],
        correctAnswer: "To discourage frequent changes that may delay graduation",
        explanation: "The additional requirements for subsequent changes serve to ensure students carefully consider their decisions, as frequent changes can extend time to graduation and waste academic resources."
      }
    ]
  }
];

// ==================== ACADEMIC PASSAGES ====================
// 12 passages (300-450 words) covering various disciplines

export const academicPassages: AcademicPassage[] = [
  // EASY (4)
  {
    id: "AC_001",
    taskType: "academic",
    difficulty: "easy",
    topic: "Plant Biology",
    discipline: "Biology",
    title: "How Plants Obtain Water",
    wordCount: 320,
    passage: `Plants have developed remarkable mechanisms to absorb and transport water from the soil to their leaves. This process is essential for photosynthesis, nutrient transport, and maintaining cell structure.

The primary entry point for water is through the plant's roots. Root hairs, which are tiny extensions of root cells, dramatically increase the surface area available for water absorption. These microscopic structures can number in the millions on a single plant, allowing for efficient water uptake even from relatively dry soil.

Once water enters the roots, it moves through the plant via a specialized tissue called xylem. Xylem consists of hollow, dead cells arranged end-to-end to form continuous tubes that extend from the roots to the leaves. Water moves through these tubes primarily through a process called transpiration pull.

Transpiration occurs when water evaporates from small openings on the leaf surface called stomata. As water molecules leave the stomata, they pull additional water molecules behind them due to the cohesive properties of water. This creates a continuous column of water that rises from the roots to the leaves, much like drinking through a straw.

The efficiency of this system is impressive. A large tree can move hundreds of gallons of water per day from its roots to its canopy, sometimes lifting water more than 300 feet against gravity. This occurs without any mechanical pumps or energy expenditure by the plant cells themselves.

Environmental factors significantly affect water uptake. Temperature, humidity, wind, and soil moisture all influence how quickly plants absorb and lose water. Plants in dry environments have developed various adaptations, such as deeper root systems, waxy leaf coatings, and the ability to close their stomata during the hottest parts of the day.`,
    questions: [
      {
        questionType: "factual",
        question: "What is the primary function of root hairs?",
        options: ["To anchor the plant in soil", "To increase surface area for water absorption", "To store nutrients", "To protect against insects"],
        correctAnswer: "To increase surface area for water absorption",
        explanation: "The passage states that root hairs 'dramatically increase the surface area available for water absorption.'"
      },
      {
        questionType: "vocabulary",
        question: "The word 'cohesive' in paragraph 4 is closest in meaning to:",
        options: ["Separating", "Sticking together", "Heating", "Expanding"],
        correctAnswer: "Sticking together",
        explanation: "'Cohesive properties of water' refers to water molecules' tendency to stick together, which enables the transpiration pull."
      },
      {
        questionType: "factual",
        question: "According to the passage, what creates the force that moves water upward in plants?",
        options: ["Root pressure", "Mechanical pumps", "Transpiration pull", "Gravity"],
        correctAnswer: "Transpiration pull",
        explanation: "The passage explains that 'Water moves through these tubes primarily through a process called transpiration pull.'"
      },
      {
        questionType: "inference",
        question: "What can be inferred about plants in humid environments?",
        options: ["They have no stomata", "They likely lose less water through transpiration", "They cannot perform photosynthesis", "They have deeper roots than desert plants"],
        correctAnswer: "They likely lose less water through transpiration",
        explanation: "Since humidity affects water loss and dry-environment plants have special adaptations to prevent water loss, humid-environment plants would naturally lose less water."
      },
      {
        questionType: "factual",
        question: "What are stomata?",
        options: ["Root extensions", "Small openings on leaf surfaces", "Water storage cells", "Xylem tubes"],
        correctAnswer: "Small openings on leaf surfaces",
        explanation: "The passage defines stomata as 'small openings on the leaf surface.'"
      }
    ]
  },
  {
    id: "AC_002",
    taskType: "academic",
    difficulty: "easy",
    topic: "The Water Cycle",
    discipline: "Earth Science",
    title: "Earth's Continuous Water Cycle",
    wordCount: 335,
    passage: `The water cycle, also known as the hydrological cycle, describes the continuous movement of water on, above, and below Earth's surface. This process has been recycling the same water molecules for billions of years, meaning the water you drink today may have once been consumed by dinosaurs.

The cycle begins with evaporation, the process by which water changes from liquid to vapor. The sun's energy heats water in oceans, lakes, and rivers, causing molecules to escape into the atmosphere. Plants also contribute to this process through transpiration, releasing water vapor through their leaves. Together, evaporation and transpiration add approximately 500,000 cubic kilometers of water to the atmosphere annually.

Once in the atmosphere, water vapor rises and cools, eventually condensing into tiny droplets that form clouds. This condensation occurs when air reaches its dew point, the temperature at which it can no longer hold all its moisture. Cloud droplets are incredibly small, about 20 micrometers in diameter, and remain suspended in the air until they combine with other droplets.

Precipitation occurs when water droplets in clouds grow heavy enough to fall to Earth's surface. This can take various forms including rain, snow, sleet, or hail, depending on atmospheric temperature conditions. Most precipitation falls directly into the oceans, which cover about 71% of Earth's surface.

Water that falls on land follows several paths. Some flows across the surface as runoff, eventually reaching streams, rivers, and ultimately the ocean. Some infiltrates the soil, becoming groundwater that may remain underground for thousands of years before emerging at springs or being pumped to the surface. Some is absorbed by plant roots and eventually returns to the atmosphere through transpiration.

The water cycle is crucial for distributing heat around the planet, supporting all life forms, and shaping Earth's landscapes through erosion and deposition. Understanding this cycle helps scientists predict weather patterns and manage water resources for human needs.`,
    questions: [
      {
        questionType: "factual",
        question: "How much water is added to the atmosphere annually through evaporation and transpiration?",
        options: ["50,000 cubic kilometers", "100,000 cubic kilometers", "500,000 cubic kilometers", "1,000,000 cubic kilometers"],
        correctAnswer: "500,000 cubic kilometers",
        explanation: "The passage states 'evaporation and transpiration add approximately 500,000 cubic kilometers of water to the atmosphere annually.'"
      },
      {
        questionType: "vocabulary",
        question: "The word 'infiltrates' in paragraph 5 is closest in meaning to:",
        options: ["Evaporates from", "Flows over", "Seeps into", "Bounces off"],
        correctAnswer: "Seeps into",
        explanation: "'Infiltrates' means to penetrate or pass through gradually, similar to 'seeps into.'"
      },
      {
        questionType: "factual",
        question: "What percentage of Earth's surface is covered by oceans?",
        options: ["51%", "61%", "71%", "81%"],
        correctAnswer: "71%",
        explanation: "The passage states 'the oceans, which cover about 71% of Earth's surface.'"
      },
      {
        questionType: "inference",
        question: "Why might groundwater remain underground for thousands of years?",
        options: ["It is chemically different from surface water", "Underground movement is extremely slow", "Plants cannot access it", "It is too cold to move"],
        correctAnswer: "Underground movement is extremely slow",
        explanation: "The fact that groundwater 'may remain underground for thousands of years' implies that water moves very slowly through underground rock and soil layers."
      },
      {
        questionType: "rhetorical_purpose",
        question: "Why does the author mention dinosaurs in the first paragraph?",
        options: ["To explain when the water cycle began", "To emphasize how long water has been recycled", "To discuss prehistoric climate conditions", "To introduce the concept of evaporation"],
        correctAnswer: "To emphasize how long water has been recycled",
        explanation: "The dinosaur reference illustrates that the same water molecules have been cycling for billions of years, emphasizing the continuous and ancient nature of the process."
      }
    ]
  },
  {
    id: "AC_003",
    taskType: "academic",
    difficulty: "easy",
    topic: "Sleep Science",
    discipline: "Health Science",
    title: "The Importance of Sleep",
    wordCount: 340,
    passage: `Sleep is a fundamental biological process that humans spend approximately one-third of their lives experiencing. Despite its apparent inactivity, sleep is a period of intense physiological activity during which the body performs essential maintenance and restoration functions.

The human sleep cycle consists of several stages that repeat throughout the night. The cycle begins with light sleep, during which heart rate and breathing slow. This transitions into deep sleep, when the body releases growth hormone and repairs tissues, muscles, and bones. The final stage, known as REM (Rapid Eye Movement) sleep, is when most dreaming occurs and the brain consolidates memories and processes emotions.

A complete sleep cycle lasts approximately 90 minutes, and a healthy adult typically experiences four to six cycles per night. However, the composition of these cycles changes throughout the night. Earlier cycles contain more deep sleep, while later cycles have longer REM periods. This is why sleeping late into the morning often produces more vivid dreams.

The consequences of insufficient sleep are well-documented. Short-term effects include impaired concentration, reduced reaction time, and increased emotional volatility. Long-term sleep deprivation has been linked to serious health conditions including obesity, diabetes, cardiovascular disease, and weakened immune function. Studies have shown that regularly sleeping less than six hours per night significantly increases mortality risk.

Sleep requirements vary by age. Newborns need 14-17 hours daily, while teenagers require 8-10 hours. Adults generally need 7-9 hours, though individual needs vary based on genetics and lifestyle factors. Interestingly, the belief that older adults need less sleep is largely a myth; rather, they often have more difficulty obtaining adequate sleep due to medical conditions and medication effects.

Modern life presents numerous challenges to healthy sleep. Electronic devices emit blue light that suppresses melatonin production, while busy schedules and stress make it difficult to maintain consistent sleep times. Sleep scientists recommend establishing a regular bedtime routine, keeping bedrooms cool and dark, and avoiding screens for at least an hour before bed.`,
    questions: [
      {
        questionType: "factual",
        question: "How long does a complete sleep cycle last?",
        options: ["60 minutes", "75 minutes", "90 minutes", "120 minutes"],
        correctAnswer: "90 minutes",
        explanation: "The passage states 'A complete sleep cycle lasts approximately 90 minutes.'"
      },
      {
        questionType: "factual",
        question: "During which sleep stage does the body release growth hormone?",
        options: ["Light sleep", "Deep sleep", "REM sleep", "All stages equally"],
        correctAnswer: "Deep sleep",
        explanation: "The passage explains that 'deep sleep' is 'when the body releases growth hormone and repairs tissues.'"
      },
      {
        questionType: "inference",
        question: "Why might dreams be more vivid in the morning?",
        options: ["Morning light stimulates brain activity", "Later sleep cycles have longer REM periods", "The body is more rested", "Dreams accumulate throughout the night"],
        correctAnswer: "Later sleep cycles have longer REM periods",
        explanation: "The passage explains that 'later cycles have longer REM periods' and REM is when dreaming occurs, so morning dreams during longer REM periods would be more vivid."
      },
      {
        questionType: "vocabulary",
        question: "The word 'volatility' in paragraph 4 is closest in meaning to:",
        options: ["Stability", "Unpredictability", "Depression", "Enthusiasm"],
        correctAnswer: "Unpredictability",
        explanation: "'Emotional volatility' refers to unpredictable or unstable emotions, which is a symptom of sleep deprivation."
      },
      {
        questionType: "negative_factual",
        question: "According to the passage, which of the following is NOT mentioned as a consequence of long-term sleep deprivation?",
        options: ["Obesity", "Diabetes", "Hearing loss", "Weakened immune function"],
        correctAnswer: "Hearing loss",
        explanation: "The passage lists obesity, diabetes, cardiovascular disease, and weakened immune function, but hearing loss is not mentioned."
      }
    ]
  },
  {
    id: "AC_004",
    taskType: "academic",
    difficulty: "easy",
    topic: "Animal Behavior",
    discipline: "Biology",
    title: "Migration in the Animal Kingdom",
    wordCount: 355,
    passage: `Migration is one of nature's most spectacular phenomena, involving the seasonal movement of animals between different habitats. This behavior has evolved independently in numerous species, from butterflies to whales, demonstrating its fundamental importance for survival.

The primary drivers of migration are resource availability and reproductive needs. Many birds travel thousands of miles to reach breeding grounds where food is abundant and competition is reduced. Arctic terns hold the record for the longest migration, traveling approximately 44,000 miles annually between Arctic and Antarctic regions. This remarkable journey allows them to experience two summers per year, maximizing their feeding opportunities.

Navigation during migration relies on multiple mechanisms. Many species use the Earth's magnetic field as a compass, possessing specialized cells containing magnetite crystals. Others navigate by the position of the sun and stars, while some follow geographic landmarks or even use their sense of smell to locate familiar areas. Remarkably, many young animals make their first migration without guidance from adults, suggesting that navigation abilities are at least partially innate.

The physical demands of migration are extraordinary. Before departing, migratory animals typically undergo significant physiological changes. Birds accumulate fat reserves that may double their body weight, while their flight muscles enlarge and their digestive organs shrink to reduce weight. These adaptations allow them to fly for days without eating, covering hundreds of miles between rest stops.

Migration patterns are increasingly disrupted by human activities. Climate change alters the timing of seasonal events, causing mismatches between migrating animals and their food sources. Habitat destruction eliminates crucial stopover sites where animals rest and refuel. Light pollution disorients nocturnal migrants, leading many birds to collide with illuminated buildings in urban areas.

Conservation efforts focus on protecting migration corridors and critical habitats. International cooperation is essential since migratory species cross national boundaries. Success stories include the recovery of some whale populations following international hunting bans and the establishment of protected flyways for migratory birds across multiple continents.`,
    questions: [
      {
        questionType: "factual",
        question: "How far do Arctic terns travel annually?",
        options: ["24,000 miles", "34,000 miles", "44,000 miles", "54,000 miles"],
        correctAnswer: "44,000 miles",
        explanation: "The passage states Arctic terns travel 'approximately 44,000 miles annually.'"
      },
      {
        questionType: "vocabulary",
        question: "The word 'innate' in paragraph 3 is closest in meaning to:",
        options: ["Learned from parents", "Acquired through practice", "Present from birth", "Developed over time"],
        correctAnswer: "Present from birth",
        explanation: "'Innate' means existing from birth, as opposed to learned or acquired later in life."
      },
      {
        questionType: "factual",
        question: "What physical change do birds undergo before migration?",
        options: ["Their feathers change color", "Their digestive organs enlarge", "Their fat reserves increase significantly", "Their bones become hollow"],
        correctAnswer: "Their fat reserves increase significantly",
        explanation: "The passage states that 'Birds accumulate fat reserves that may double their body weight.'"
      },
      {
        questionType: "inference",
        question: "Why might migration abilities be 'at least partially innate'?",
        options: ["Adult animals refuse to teach young ones", "Young animals migrate successfully without guidance", "All animals have identical migration routes", "Scientists have identified migration genes"],
        correctAnswer: "Young animals migrate successfully without guidance",
        explanation: "The passage notes that 'many young animals make their first migration without guidance from adults,' suggesting some navigation ability must be present from birth."
      },
      {
        questionType: "rhetorical_purpose",
        question: "Why does the author mention that Arctic terns experience 'two summers per year'?",
        options: ["To explain why they live so long", "To illustrate the benefit of their long migration", "To compare them with other bird species", "To argue against climate change"],
        correctAnswer: "To illustrate the benefit of their long migration",
        explanation: "The two summers explanation demonstrates why the extremely long migration is worthwhile - it maximizes feeding opportunities."
      }
    ]
  },
  // MEDIUM (4)
  {
    id: "AC_005",
    taskType: "academic",
    difficulty: "medium",
    topic: "Memory Formation",
    discipline: "Psychology",
    title: "The Science of Memory Formation",
    wordCount: 380,
    passage: `Memory formation is a complex neurological process that transforms fleeting experiences into lasting mental representations. Understanding how memories are created, stored, and retrieved has been a central goal of cognitive neuroscience for decades, with significant implications for education, therapy, and the treatment of memory disorders.

The initial stage of memory formation is encoding, during which sensory information is converted into a neural code that the brain can process. This encoding is heavily influenced by attention; information that receives focused attention is far more likely to be remembered than passively encountered stimuli. The emotional significance of an experience also affects encoding, with emotionally charged events typically creating stronger memory traces due to the involvement of the amygdala.

Following encoding, memories must be consolidated to become stable long-term representations. This process involves the gradual transfer of information from the hippocampus, which serves as a temporary holding area, to various regions of the cerebral cortex for permanent storage. Consolidation occurs primarily during sleep, particularly during slow-wave sleep, which is why sleep deprivation significantly impairs memory formation. Studies have shown that students who sleep after studying retain information substantially better than those who remain awake.

The storage of memories is distributed across multiple brain regions rather than localized in a single area. Memories of facts and events, known as declarative memories, depend heavily on the hippocampus and temporal lobe structures. In contrast, procedural memories—knowledge of how to perform skills—are stored primarily in the cerebellum and basal ganglia. This distributed storage system explains why damage to one brain region may impair some types of memory while leaving others intact.

Retrieval, the process of accessing stored memories, reconstructs rather than simply replays past experiences. Each time a memory is retrieved, it becomes temporarily unstable and must be reconsolidated, during which process it can be modified by current knowledge and emotional states. This reconstructive nature of memory explains why eyewitness testimony can be unreliable and why memories often change over time. It also presents therapeutic opportunities, as maladaptive memories associated with trauma may potentially be modified during reconsolidation.

Research into memory formation continues to yield practical applications, from evidence-based study techniques to interventions for Alzheimer's disease and post-traumatic stress disorder.`,
    questions: [
      {
        questionType: "factual",
        question: "According to the passage, where are declarative memories primarily stored?",
        options: ["Cerebellum", "Basal ganglia", "Hippocampus and temporal lobe", "Amygdala"],
        correctAnswer: "Hippocampus and temporal lobe",
        explanation: "The passage states that 'Memories of facts and events, known as declarative memories, depend heavily on the hippocampus and temporal lobe structures.'"
      },
      {
        questionType: "vocabulary",
        question: "The word 'maladaptive' in paragraph 5 is closest in meaning to:",
        options: ["Helpful", "Harmful or dysfunctional", "Forgotten", "Emotional"],
        correctAnswer: "Harmful or dysfunctional",
        explanation: "'Maladaptive' refers to something that is harmful or counterproductive to functioning, in this case referring to traumatic memories that interfere with well-being."
      },
      {
        questionType: "inference",
        question: "Why might emotionally charged events create stronger memories?",
        options: ["The hippocampus is larger during emotional experiences", "The amygdala enhances the encoding process", "Emotional events last longer than neutral events", "People pay more attention to boring events"],
        correctAnswer: "The amygdala enhances the encoding process",
        explanation: "The passage states that emotional significance affects encoding 'due to the involvement of the amygdala,' implying this brain structure strengthens memory formation for emotional events."
      },
      {
        questionType: "factual",
        question: "When does memory consolidation primarily occur?",
        options: ["During active thinking", "While exercising", "During sleep", "While eating"],
        correctAnswer: "During sleep",
        explanation: "The passage explicitly states 'Consolidation occurs primarily during sleep, particularly during slow-wave sleep.'"
      },
      {
        questionType: "inference",
        question: "What does the passage imply about eyewitness testimony?",
        options: ["It is always accurate", "It should be considered completely unreliable", "It may be altered by the reconstructive nature of memory", "Courts should never use it"],
        correctAnswer: "It may be altered by the reconstructive nature of memory",
        explanation: "The passage states that the 'reconstructive nature of memory explains why eyewitness testimony can be unreliable,' suggesting memories can change during retrieval."
      },
      {
        questionType: "rhetorical_purpose",
        question: "Why does the author mention students sleeping after studying?",
        options: ["To criticize students who stay up late", "To provide evidence that sleep aids memory consolidation", "To suggest that studying is tiring", "To compare different study methods"],
        correctAnswer: "To provide evidence that sleep aids memory consolidation",
        explanation: "The study about students is presented as evidence supporting the claim that consolidation occurs during sleep."
      }
    ]
  },
  {
    id: "AC_006",
    taskType: "academic",
    difficulty: "medium",
    topic: "Coral Reef Ecosystems",
    discipline: "Ecology",
    title: "The Complex World of Coral Reefs",
    wordCount: 395,
    passage: `Coral reefs are among Earth's most diverse and productive ecosystems, supporting an estimated 25% of all marine species despite covering less than 1% of the ocean floor. These underwater structures are built over thousands of years by tiny colonial animals called coral polyps, which secrete calcium carbonate to form their protective limestone skeletons.

The foundation of reef productivity lies in a remarkable symbiotic relationship between coral polyps and microscopic algae called zooxanthellae. These algae live within the coral tissues and perform photosynthesis, providing up to 90% of the coral's energy needs. In return, the coral provides the algae with shelter and access to carbon dioxide and nutrients. This mutually beneficial partnership is responsible for the vibrant colors of healthy coral reefs and enables corals to thrive in nutrient-poor tropical waters.

Coral reefs support complex food webs that sustain thousands of species. Small fish and invertebrates feed directly on coral, algae, and organic particles, while larger predators like sharks and groupers control these populations. The three-dimensional structure of reefs provides countless hiding places, enabling the coexistence of prey and predator species that would otherwise not survive together. This structural complexity also buffers coastlines against wave damage and provides nursery habitat for commercially important fish species.

However, coral reefs worldwide are experiencing unprecedented decline. Rising ocean temperatures cause coral bleaching, a stress response in which corals expel their zooxanthellae, turning white and often dying. Ocean acidification, resulting from increased atmospheric carbon dioxide, reduces the ability of corals to build their calcium carbonate skeletons. Additionally, local stressors including pollution, overfishing, and destructive fishing practices compound these global threats.

The loss of coral reefs would have cascading consequences. Approximately 500 million people depend on reefs for food, income, and coastal protection. The economic value of reef ecosystem services—including fisheries, tourism, and shoreline protection—is estimated at $375 billion annually. Many pharmaceutical compounds, including potential cancer treatments, have been derived from reef organisms.

Conservation efforts focus on reducing both global and local stressors. Marine protected areas can help reefs recover from local damage, while reducing greenhouse gas emissions is essential for addressing bleaching and acidification. Scientists are also exploring techniques such as coral gardening and selective breeding for heat tolerance, though these interventions cannot substitute for addressing the root causes of reef decline.`,
    questions: [
      {
        questionType: "factual",
        question: "What percentage of marine species do coral reefs support?",
        options: ["10%", "15%", "25%", "40%"],
        correctAnswer: "25%",
        explanation: "The passage states coral reefs support 'an estimated 25% of all marine species.'"
      },
      {
        questionType: "vocabulary",
        question: "The word 'symbiotic' in paragraph 2 is closest in meaning to:",
        options: ["Competitive", "Mutually beneficial", "Parasitic", "Temporary"],
        correctAnswer: "Mutually beneficial",
        explanation: "The passage describes the relationship as 'mutually beneficial,' defining the symbiotic nature of the coral-algae partnership."
      },
      {
        questionType: "factual",
        question: "What causes coral bleaching?",
        options: ["Chemical pollution", "Rising ocean temperatures", "Overfishing", "Ocean currents"],
        correctAnswer: "Rising ocean temperatures",
        explanation: "The passage explicitly states 'Rising ocean temperatures cause coral bleaching.'"
      },
      {
        questionType: "inference",
        question: "Why can corals thrive in nutrient-poor tropical waters?",
        options: ["They don't need nutrients", "They get nutrients from fish waste", "The zooxanthellae provide energy through photosynthesis", "Tropical waters are actually nutrient-rich"],
        correctAnswer: "The zooxanthellae provide energy through photosynthesis",
        explanation: "The passage explains that zooxanthellae provide 'up to 90% of the coral's energy needs' through photosynthesis, enabling corals to survive where nutrients are scarce."
      },
      {
        questionType: "negative_factual",
        question: "Which of the following is NOT mentioned as a local stressor affecting coral reefs?",
        options: ["Pollution", "Overfishing", "Invasive species", "Destructive fishing practices"],
        correctAnswer: "Invasive species",
        explanation: "The passage mentions pollution, overfishing, and destructive fishing practices as local stressors, but invasive species are not mentioned."
      },
      {
        questionType: "rhetorical_purpose",
        question: "Why does the author include the $375 billion figure?",
        options: ["To criticize tourism industry practices", "To emphasize the economic importance of reef conservation", "To compare reefs with other ecosystems", "To explain how reef research is funded"],
        correctAnswer: "To emphasize the economic importance of reef conservation",
        explanation: "The economic value figure supports the argument that losing coral reefs would have significant consequences, beyond just ecological impacts."
      }
    ]
  },
  {
    id: "AC_007",
    taskType: "academic",
    difficulty: "medium",
    topic: "Ancient Trade Routes",
    discipline: "Anthropology",
    title: "The Silk Road: Ancient Network of Exchange",
    wordCount: 405,
    passage: `The Silk Road was not a single route but rather a vast network of interconnected trade paths that linked the civilizations of Asia, the Middle East, and Europe for over 1,500 years. While the name suggests commerce in silk, this network facilitated the exchange of far more than luxury goods—it was a conduit for technologies, religions, artistic styles, and even diseases that shaped the development of human civilization.

Chinese silk was indeed a driving force behind early trade along these routes. The Han Dynasty (206 BCE – 220 CE) actively promoted westward expansion to secure trade relationships and protect against nomadic threats. Silk, produced through a closely guarded secret process involving silkworm cultivation, commanded enormous prices in Rome, where it was considered more valuable than gold by weight. This demand created powerful economic incentives for merchants willing to brave the dangerous journey.

Trade along the Silk Road was rarely conducted by single merchants traveling the entire distance. Instead, goods typically changed hands multiple times, with different groups controlling different segments of the route. Central Asian oasis towns like Samarkand and Bukhara emerged as crucial trading hubs where caravans rested, merchants negotiated, and goods were redistributed. These cities developed sophisticated banking systems, including early forms of credit and insurance, to facilitate long-distance commerce.

The cultural exchanges enabled by the Silk Road were perhaps more significant than the material trade. Buddhism spread from India to China, Japan, and Korea along these routes, fundamentally transforming East Asian culture. Islamic civilization later used the same networks to expand eastward. Technologies including papermaking, printing, gunpowder, and the compass traveled westward from China, eventually contributing to transformative changes in European society.

However, the Silk Road also facilitated the spread of disease. The Black Death, which killed an estimated one-third of Europe's population in the 14th century, likely traveled along trade routes from Central Asia. Plague-carrying fleas on rats and marmots found easy passage in grain shipments and on merchant caravans, demonstrating how increased connectivity can have devastating unintended consequences.

The Silk Road's importance declined after the 15th century as maritime trade routes proved faster and more economical for bulk goods. Nevertheless, its legacy persists in the cultural connections and technological transfers it enabled, and modern initiatives like China's Belt and Road Initiative consciously invoke its historical symbolism.`,
    questions: [
      {
        questionType: "factual",
        question: "During which dynasty did China actively promote westward expansion for trade?",
        options: ["Tang Dynasty", "Han Dynasty", "Ming Dynasty", "Qing Dynasty"],
        correctAnswer: "Han Dynasty",
        explanation: "The passage states 'The Han Dynasty (206 BCE – 220 CE) actively promoted westward expansion.'"
      },
      {
        questionType: "vocabulary",
        question: "The word 'conduit' in paragraph 1 is closest in meaning to:",
        options: ["Barrier", "Channel", "Product", "Factory"],
        correctAnswer: "Channel",
        explanation: "A 'conduit' is a means of transmitting or conveying something, similar to a channel."
      },
      {
        questionType: "factual",
        question: "According to the passage, how was most Silk Road trade conducted?",
        options: ["Single merchants traveled the entire distance", "Goods changed hands multiple times along the route", "Only government officials could trade", "Trade occurred only during certain seasons"],
        correctAnswer: "Goods changed hands multiple times along the route",
        explanation: "The passage states 'goods typically changed hands multiple times, with different groups controlling different segments.'"
      },
      {
        questionType: "inference",
        question: "Why might oasis towns have developed sophisticated banking systems?",
        options: ["They had more educated populations", "Long-distance trade required financial services to manage risk and credit", "Governments mandated banking services", "Silk production required capital investment"],
        correctAnswer: "Long-distance trade required financial services to manage risk and credit",
        explanation: "The passage mentions these cities developed 'early forms of credit and insurance, to facilitate long-distance commerce,' indicating banking evolved to meet trading needs."
      },
      {
        questionType: "negative_factual",
        question: "Which of the following is NOT mentioned as traveling along the Silk Road?",
        options: ["Buddhism", "Papermaking technology", "Coffee cultivation", "Diseases like the Black Death"],
        correctAnswer: "Coffee cultivation",
        explanation: "Buddhism, papermaking, and diseases are all mentioned as spreading via the Silk Road, but coffee cultivation is not discussed."
      },
      {
        questionType: "rhetorical_purpose",
        question: "Why does the author mention China's Belt and Road Initiative in the final paragraph?",
        options: ["To criticize modern Chinese foreign policy", "To show how the Silk Road's symbolism remains relevant today", "To explain why maritime trade declined", "To compare ancient and modern transportation technology"],
        correctAnswer: "To show how the Silk Road's symbolism remains relevant today",
        explanation: "The reference demonstrates the continuing cultural and symbolic significance of the Silk Road in contemporary initiatives."
      }
    ]
  },
  {
    id: "AC_008",
    taskType: "academic",
    difficulty: "medium",
    topic: "Renewable Energy",
    discipline: "Physics",
    title: "Solar Energy: Technology and Challenges",
    wordCount: 390,
    passage: `Solar energy represents one of the most promising pathways toward a sustainable energy future, offering the potential to generate electricity without the carbon emissions associated with fossil fuels. The sun delivers more energy to Earth's surface in one hour than humanity consumes in an entire year, making it an effectively inexhaustible resource if it can be efficiently captured.

The most common technology for converting sunlight into electricity is the photovoltaic (PV) cell. These devices utilize the photoelectric effect, first explained by Albert Einstein in 1905, whereby photons from sunlight dislodge electrons from semiconductor materials, creating an electrical current. Modern silicon-based solar cells can convert approximately 15-22% of incoming sunlight into electricity, with laboratory prototypes achieving efficiencies above 47% using multi-junction cells that capture different wavelengths of light.

The economics of solar power have improved dramatically in recent decades. The cost of solar panels has fallen by approximately 99% since the 1970s, making solar electricity cost-competitive with or cheaper than fossil fuels in many regions. This price reduction results from manufacturing improvements, economies of scale, and technological advances. China now produces over 70% of the world's solar panels, with production concentrated in massive factories that benefit from automation and inexpensive labor.

Despite these advances, solar energy faces significant challenges. The intermittent nature of sunshine—varying with weather, season, and time of day—creates difficulties for grid management. Energy storage technologies, particularly batteries, are essential for storing solar energy generated during peak sunlight hours for use during evenings and cloudy periods. While battery costs have also declined substantially, large-scale storage remains expensive and resource-intensive.

Land use presents another consideration. Large solar installations require significant areas, potentially competing with agriculture or natural habitats. A solar farm generating as much electricity as a nuclear power plant might require 75 times more land area. However, solar panels can be installed on rooftops, parking lots, and degraded land unsuitable for other purposes, reducing this competition.

The future of solar energy will likely involve distributed generation—millions of small installations rather than centralized power plants—combined with smart grid technologies that balance supply and demand across wide areas. Continued improvements in efficiency, storage, and grid management will determine how rapidly solar can displace fossil fuels in the global energy mix.`,
    questions: [
      {
        questionType: "factual",
        question: "What is the typical efficiency range of modern silicon-based solar cells?",
        options: ["5-10%", "15-22%", "30-40%", "50-60%"],
        correctAnswer: "15-22%",
        explanation: "The passage states 'Modern silicon-based solar cells can convert approximately 15-22% of incoming sunlight into electricity.'"
      },
      {
        questionType: "vocabulary",
        question: "The word 'intermittent' in paragraph 4 is closest in meaning to:",
        options: ["Constant", "Occurring at irregular intervals", "Intense", "Predictable"],
        correctAnswer: "Occurring at irregular intervals",
        explanation: "'Intermittent' means not continuous or steady, occurring at irregular intervals—in this case, referring to varying sunshine."
      },
      {
        questionType: "factual",
        question: "By how much has the cost of solar panels fallen since the 1970s?",
        options: ["50%", "75%", "90%", "99%"],
        correctAnswer: "99%",
        explanation: "The passage states 'The cost of solar panels has fallen by approximately 99% since the 1970s.'"
      },
      {
        questionType: "inference",
        question: "Why does the passage mention that China produces 70% of the world's solar panels?",
        options: ["To criticize Chinese environmental policies", "To explain a factor in cost reduction through economies of scale", "To argue against international trade", "To demonstrate Chinese technical superiority"],
        correctAnswer: "To explain a factor in cost reduction through economies of scale",
        explanation: "The China statistic supports the discussion of how 'economies of scale' and 'massive factories' have contributed to falling solar panel costs."
      },
      {
        questionType: "negative_factual",
        question: "Which of the following is NOT mentioned as a challenge for solar energy?",
        options: ["Intermittent sunshine", "Energy storage costs", "High manufacturing temperatures", "Land use requirements"],
        correctAnswer: "High manufacturing temperatures",
        explanation: "Intermittent sunshine, storage costs, and land use are all discussed as challenges, but manufacturing temperatures are not mentioned."
      },
      {
        questionType: "inference",
        question: "What does 'distributed generation' imply about the future of solar energy?",
        options: ["All solar panels will be manufactured in one location", "Power generation will be spread across many small installations rather than centralized plants", "Solar energy will be distributed only to wealthy neighborhoods", "Governments will control all solar installations"],
        correctAnswer: "Power generation will be spread across many small installations rather than centralized plants",
        explanation: "The passage defines distributed generation as 'millions of small installations rather than centralized power plants.'"
      }
    ]
  },
  // HARD (4)
  {
    id: "AC_009",
    taskType: "academic",
    difficulty: "hard",
    topic: "Cognitive Development",
    discipline: "Psychology",
    title: "Theory of Mind in Human Development",
    wordCount: 420,
    passage: `Theory of mind refers to the cognitive capacity to attribute mental states—beliefs, desires, intentions, and emotions—to oneself and others, and to understand that others may hold beliefs different from one's own. This fundamental aspect of human cognition emerges during early childhood and underlies much of our social interaction, communication, and moral reasoning.

The classic demonstration of theory of mind development is the false belief task, first developed by Wimmer and Perner in 1983. In this paradigm, children observe a scenario in which one character places an object in location A, then leaves the room. While absent, another character moves the object to location B. Children are asked where the first character will look for the object upon returning. Successfully answering "location A" requires understanding that the character holds a false belief about the object's location—that is, their mental representation differs from reality.

Research has consistently shown that most children pass false belief tasks around age four, though considerable individual variation exists. Before this age, children typically respond based on their own knowledge of the object's actual location, demonstrating that they cannot yet represent others' mental states as distinct from reality. This developmental milestone appears to be universal across cultures, though the precise timing may vary somewhat with social and linguistic experience.

The neural substrates of theory of mind have been extensively investigated using neuroimaging techniques. Studies consistently implicate a network of brain regions including the medial prefrontal cortex, temporoparietal junction, and posterior superior temporal sulcus. Damage to these areas can impair theory of mind abilities while leaving other cognitive functions intact, suggesting that mentalizing capacities depend on specialized neural machinery.

Autism spectrum disorder (ASD) has provided important insights into theory of mind deficits. Individuals with ASD often exhibit difficulties in attributing mental states to others and predicting behavior based on others' beliefs and intentions. However, the relationship between ASD and theory of mind is complex; many high-functioning individuals with autism can pass explicit theory of mind tasks while still struggling with the rapid, intuitive mentalizing required in everyday social interaction.

The development of theory of mind has significant implications for education, clinical intervention, and our understanding of human uniqueness. While some researchers have claimed that great apes and other species possess rudimentary theory of mind, the full-fledged capacity to reason about beliefs, particularly false beliefs, appears to be uniquely human—a cognitive innovation that enables the sophisticated social coordination underlying human culture and cooperation.`,
    questions: [
      {
        questionType: "factual",
        question: "At what age do most children pass false belief tasks?",
        options: ["Age two", "Age three", "Age four", "Age five"],
        correctAnswer: "Age four",
        explanation: "The passage states 'most children pass false belief tasks around age four.'"
      },
      {
        questionType: "vocabulary",
        question: "The word 'substrates' in paragraph 4 is closest in meaning to:",
        options: ["Substitutes", "Underlying foundations or bases", "Symptoms", "Measurements"],
        correctAnswer: "Underlying foundations or bases",
        explanation: "'Neural substrates' refers to the underlying brain structures or foundations that support a cognitive function."
      },
      {
        questionType: "factual",
        question: "Which brain region is NOT mentioned as being involved in theory of mind?",
        options: ["Medial prefrontal cortex", "Temporoparietal junction", "Hippocampus", "Posterior superior temporal sulcus"],
        correctAnswer: "Hippocampus",
        explanation: "The passage mentions medial prefrontal cortex, temporoparietal junction, and posterior superior temporal sulcus, but not the hippocampus."
      },
      {
        questionType: "inference",
        question: "Why do younger children fail the false belief task?",
        options: ["They don't understand the question", "They cannot distinguish others' beliefs from their own knowledge of reality", "They have poor memory", "They lack language skills"],
        correctAnswer: "They cannot distinguish others' beliefs from their own knowledge of reality",
        explanation: "The passage explains that young children 'respond based on their own knowledge of the object's actual location,' indicating they cannot represent others' mental states separately."
      },
      {
        questionType: "inference",
        question: "What does the passage suggest about the relationship between autism and theory of mind?",
        options: ["All individuals with autism completely lack theory of mind", "High-functioning individuals with autism have no theory of mind difficulties", "The relationship is more nuanced than simple presence or absence of theory of mind", "Theory of mind causes autism"],
        correctAnswer: "The relationship is more nuanced than simple presence or absence of theory of mind",
        explanation: "The passage notes that high-functioning individuals 'can pass explicit theory of mind tasks while still struggling with' intuitive mentalizing, indicating complexity rather than simple deficit."
      },
      {
        questionType: "rhetorical_purpose",
        question: "Why does the author describe the false belief task in detail?",
        options: ["To criticize the methodology of developmental psychology", "To illustrate how theory of mind is measured and what it entails", "To argue that all children should be tested", "To show that the task is too difficult"],
        correctAnswer: "To illustrate how theory of mind is measured and what it entails",
        explanation: "The detailed description of the false belief task helps readers understand what theory of mind actually involves and how its development is assessed."
      },
      {
        questionType: "prose_summary",
        question: "Which of the following best expresses the essential information in the passage?",
        options: [
          "Theory of mind is a uniquely human capacity that emerges around age four, is supported by specialized brain networks, and is impaired in autism spectrum disorder.",
          "False belief tasks were invented in 1983 and are used to study children's cognitive development around the world.",
          "Autism spectrum disorder prevents individuals from ever developing theory of mind abilities.",
          "Great apes have been proven to possess the same theory of mind capabilities as humans."
        ],
        correctAnswer: "Theory of mind is a uniquely human capacity that emerges around age four, is supported by specialized brain networks, and is impaired in autism spectrum disorder.",
        explanation: "This option captures the main points: the definition and developmental timeline, neural basis, clinical relevance, and species uniqueness of theory of mind."
      }
    ]
  },
  {
    id: "AC_010",
    taskType: "academic",
    difficulty: "hard",
    topic: "Language Evolution",
    discipline: "Linguistics",
    title: "The Origins of Human Language",
    wordCount: 435,
    passage: `The evolution of language represents one of the most significant yet poorly understood transitions in human prehistory. Unlike physical traits that leave fossil evidence, language behavior cannot be directly observed in the archaeological record, forcing researchers to rely on indirect evidence and comparative analysis to reconstruct this pivotal development.

Several lines of evidence suggest that full syntactic language emerged relatively recently in evolutionary terms, perhaps within the last 100,000 years. Anatomically modern humans appeared approximately 300,000 years ago, yet the archaeological record shows limited evidence of symbolic behavior—art, ritualized burial, personal ornamentation—until much later. Some researchers interpret this gap as indicating that language emerged gradually, reaching its modern form only when these symbolic behaviors proliferated during the Upper Paleolithic.

Comparative studies of primate communication have illuminated both the precursors to and the unique features of human language. Great apes can learn to use symbols referentially and even combine them in limited ways, yet they fail to acquire syntax—the combinatorial rules that allow humans to generate infinite meaningful expressions from finite elements. This generativity appears to require specific cognitive capacities, possibly related to hierarchical processing and recursive thought, that remain elusive in other species.

The genetic basis of language has been partially elucidated through the study of FOXP2, a gene implicated in the severe speech and language disorder affecting the KE family. While initial reports characterized FOXP2 as "the language gene," subsequent research revealed a more complex picture. FOXP2 influences the development of brain circuits involved in motor sequencing and is highly conserved across species, including songbirds. The human version differs from that of chimpanzees by only two amino acids, mutations that may have altered neural development in ways that facilitated language acquisition.

The relationship between language and other cognitive capacities remains contentious. Some theorists, following Noam Chomsky, argue that language constitutes a distinct cognitive module with its own innate principles. Others contend that language evolved through the co-optation of more general cognitive abilities—working memory, social cognition, and motor planning—that were gradually adapted for linguistic purposes. This debate has implications for understanding language disorders, educational approaches, and the potential for creating artificial systems with human-like linguistic capabilities.

Archaeological evidence for language includes the design complexity of stone tools, which may reflect the cognitive planning capacities also required for language, and the long-distance trade of materials, which suggests the coordination that language enables. However, such inferences remain speculative, and the precise timing and nature of language emergence continue to generate vigorous scholarly debate.`,
    questions: [
      {
        questionType: "factual",
        question: "When do some researchers believe full syntactic language emerged?",
        options: ["300,000 years ago", "Within the last 100,000 years", "500,000 years ago", "10,000 years ago"],
        correctAnswer: "Within the last 100,000 years",
        explanation: "The passage states 'full syntactic language emerged relatively recently in evolutionary terms, perhaps within the last 100,000 years.'"
      },
      {
        questionType: "vocabulary",
        question: "The word 'elucidated' in paragraph 4 is closest in meaning to:",
        options: ["Complicated", "Disproven", "Clarified", "Simplified"],
        correctAnswer: "Clarified",
        explanation: "'Elucidated' means made clear or explained, in this context referring to partial clarification of the genetic basis of language."
      },
      {
        questionType: "factual",
        question: "What unique feature of human language do great apes fail to acquire?",
        options: ["Symbolic reference", "Vocalization", "Syntax", "Gesture"],
        correctAnswer: "Syntax",
        explanation: "The passage states apes 'fail to acquire syntax—the combinatorial rules that allow humans to generate infinite meaningful expressions.'"
      },
      {
        questionType: "inference",
        question: "Why does the author mention that FOXP2 is 'highly conserved across species'?",
        options: ["To suggest language is universal", "To indicate the gene's importance predates language evolution", "To prove that all species have language", "To criticize language research methodology"],
        correctAnswer: "To indicate the gene's importance predates language evolution",
        explanation: "Conservation across species suggests the gene had important functions before human language evolved, complicating the view that it is simply 'the language gene.'"
      },
      {
        questionType: "negative_factual",
        question: "Which of the following is NOT mentioned as archaeological evidence potentially related to language?",
        options: ["Stone tool complexity", "Long-distance trade", "Cave paintings", "Coordination abilities"],
        correctAnswer: "Cave paintings",
        explanation: "The passage mentions tool complexity and trade as archaeological evidence, but does not specifically mention cave paintings in this context."
      },
      {
        questionType: "inference",
        question: "What does the passage imply about the 'language gene' characterization of FOXP2?",
        options: ["It is completely accurate", "It oversimplifies a complex reality", "It has been entirely disproven", "It only applies to the KE family"],
        correctAnswer: "It oversimplifies a complex reality",
        explanation: "The passage notes that 'initial reports characterized FOXP2 as \"the language gene,\" but 'subsequent research revealed a more complex picture,' indicating oversimplification."
      },
      {
        questionType: "rhetorical_purpose",
        question: "Why does the author present the debate between Chomsky's modularity view and the co-optation view?",
        options: ["To prove Chomsky wrong", "To show that the field has reached consensus", "To illustrate ongoing uncertainty about language evolution", "To argue for a specific position"],
        correctAnswer: "To illustrate ongoing uncertainty about language evolution",
        explanation: "The author presents both views without endorsing either, demonstrating the 'contentious' nature of the question and the ongoing scholarly debate."
      }
    ]
  },
  {
    id: "AC_011",
    taskType: "academic",
    difficulty: "hard",
    topic: "Economic Systems",
    discipline: "Sociology",
    title: "The Sharing Economy: Disruption and Consequences",
    wordCount: 430,
    passage: `The emergence of the sharing economy—digital platforms that facilitate peer-to-peer exchange of goods and services—has profoundly disrupted traditional business models while raising fundamental questions about labor, regulation, and the nature of economic transactions. Companies like Uber, Airbnb, and TaskRabbit have grown from startups to multinational corporations valued in the billions, yet their classification and societal impact remain contested.

Proponents argue that sharing economy platforms democratize access to economic opportunity, allowing anyone with a car, spare room, or skill to become a micro-entrepreneur. The platforms' rating systems create accountability through reputation mechanisms that theoretically substitute for traditional regulatory oversight. Additionally, these services often provide lower prices and greater convenience for consumers, while more efficiently utilizing underused assets—the average car, for instance, sits idle 95% of the time.

Critics counter that the sharing economy represents less a revolution in economic organization than a sophisticated form of labor exploitation and regulatory arbitrage. By classifying workers as independent contractors rather than employees, platforms avoid providing benefits, minimum wage guarantees, and workplace protections that decades of labor struggle achieved. The precarious nature of "gig work"—irregular hours, algorithm-determined pay rates, and lack of job security—shifts economic risk from corporations to individual workers who often lack the resources to absorb such uncertainty.

The regulatory challenges posed by sharing economy platforms have sparked intense debate. Traditional taxi services must obtain expensive medallions and carry commercial insurance, while Uber drivers initially faced few such requirements. Hotels must comply with safety codes and zoning laws that many Airbnb listings circumvent. While some argue these regulations are outdated barriers protecting incumbent industries, others note they exist to ensure safety, collect taxes, and maintain community standards. Cities worldwide have adopted widely varying approaches, from outright bans to accommodating regulatory frameworks.

The environmental implications of the sharing economy are similarly ambiguous. Car-sharing services may reduce overall vehicle ownership and associated emissions, yet some research suggests they primarily replace walking, biking, and public transit rather than private car use. Airbnb's impact on housing availability has contributed to rising rents and displacement of long-term residents in popular tourist destinations, gentrifying neighborhoods and altering the character of communities.

Understanding the sharing economy requires moving beyond simplistic narratives of either technological liberation or corporate exploitation. These platforms represent genuine innovations in coordination and trust-building, yet their benefits and costs are distributed unequally across society. The ultimate legacy of the sharing economy will depend on how societies choose to regulate these new forms of economic organization.`,
    questions: [
      {
        questionType: "factual",
        question: "According to the passage, what percentage of time does the average car sit idle?",
        options: ["75%", "85%", "95%", "99%"],
        correctAnswer: "95%",
        explanation: "The passage states 'the average car, for instance, sits idle 95% of the time.'"
      },
      {
        questionType: "vocabulary",
        question: "The word 'arbitrage' in paragraph 3 is closest in meaning to:",
        options: ["Negotiation between parties", "Exploiting differences in regulations", "Legal dispute resolution", "Corporate restructuring"],
        correctAnswer: "Exploiting differences in regulations",
        explanation: "'Regulatory arbitrage' refers to taking advantage of differences in regulations to gain competitive benefits—in this case, avoiding requirements that traditional businesses face."
      },
      {
        questionType: "factual",
        question: "What do critics argue about worker classification in the sharing economy?",
        options: ["Workers are overpaid", "Classifying workers as contractors allows platforms to avoid employee protections", "Workers prefer contractor status", "Classification doesn't matter"],
        correctAnswer: "Classifying workers as contractors allows platforms to avoid employee protections",
        explanation: "The passage states that platforms 'avoid providing benefits, minimum wage guarantees, and workplace protections' through contractor classification."
      },
      {
        questionType: "inference",
        question: "Why might traditional taxi services view Uber's original regulatory advantages as unfair?",
        options: ["Uber drivers were better trained", "Taxis had to comply with expensive requirements that Uber initially avoided", "Uber had better technology", "Taxis had lower insurance costs"],
        correctAnswer: "Taxis had to comply with expensive requirements that Uber initially avoided",
        explanation: "The passage notes that taxi services 'must obtain expensive medallions and carry commercial insurance' while Uber initially 'faced few such requirements,' creating an uneven playing field."
      },
      {
        questionType: "inference",
        question: "What does the passage suggest about car-sharing's environmental benefits?",
        options: ["They are proven and substantial", "They are more complex than proponents claim", "They are entirely fictional", "They only apply to electric vehicles"],
        correctAnswer: "They are more complex than proponents claim",
        explanation: "The passage notes environmental implications are 'ambiguous' and that car-sharing may 'primarily replace walking, biking, and public transit rather than private car use,' complicating the environmental narrative."
      },
      {
        questionType: "negative_factual",
        question: "Which of the following is NOT mentioned as a concern about Airbnb?",
        options: ["Rising rents", "Displacement of residents", "Noise complaints", "Neighborhood gentrification"],
        correctAnswer: "Noise complaints",
        explanation: "Rising rents, displacement, and gentrification are all mentioned, but noise complaints are not discussed in the passage."
      },
      {
        questionType: "rhetorical_purpose",
        question: "Why does the author state that understanding the sharing economy requires 'moving beyond simplistic narratives'?",
        options: ["To criticize previous researchers", "To suggest the issue is too complex to analyze", "To indicate that both positive and negative aspects must be considered", "To argue for more government intervention"],
        correctAnswer: "To indicate that both positive and negative aspects must be considered",
        explanation: "The author explicitly presents both 'technological liberation' and 'corporate exploitation' narratives, then argues for a more nuanced understanding that acknowledges the reality contains elements of both."
      }
    ]
  },
  {
    id: "AC_012",
    taskType: "academic",
    difficulty: "hard",
    topic: "Climate Science",
    discipline: "Earth Science",
    title: "Ocean Acidification and Marine Ecosystems",
    wordCount: 440,
    passage: `While global warming receives the majority of public attention regarding climate change, ocean acidification represents an equally significant but less publicized threat to Earth's ecosystems. Often called "global warming's evil twin," this phenomenon results from the same root cause—anthropogenic carbon dioxide emissions—but operates through a distinct chemical mechanism with its own cascade of ecological consequences.

The world's oceans absorb approximately 30% of atmospheric carbon dioxide, providing a critical buffer that moderates climate change. However, this absorption comes at a cost. When CO2 dissolves in seawater, it reacts with water molecules to form carbonic acid, which then dissociates to release hydrogen ions. This process has caused ocean surface pH to decline from approximately 8.2 to 8.1 since pre-industrial times—a change that, while seemingly small, represents a 30% increase in hydrogen ion concentration due to the logarithmic nature of the pH scale.

The increased acidity reduces the availability of carbonate ions, which marine organisms need to build calcium carbonate shells and skeletons. Corals, mollusks, sea urchins, and certain plankton species—calcifying organisms that form the foundation of many marine food webs—face particular vulnerability. Laboratory studies demonstrate that many calcifiers grow more slowly, produce weaker shells, and exhibit higher mortality under acidified conditions. Some species can partially compensate through increased energy expenditure on calcification, but this reallocation of metabolic resources may compromise growth, reproduction, and resistance to other stressors.

The ecological ramifications extend beyond calcifying organisms. Pteropods, small swimming snails that serve as food for salmon, herring, and whales, are highly sensitive to acidification. Their decline could propagate through food webs with unpredictable consequences. Meanwhile, some non-calcifying organisms may benefit from higher CO2 levels and reduced competition from calcifiers, leading to potentially dramatic shifts in ecosystem composition that could alter fisheries and coastal economies.

The geological record provides concerning precedents. During the Paleocene-Eocene Thermal Maximum approximately 56 million years ago, massive carbon release caused widespread ocean acidification and extinction of many deep-sea calcifying species. However, that event occurred over thousands of years, allowing some adaptation. Current acidification is proceeding at least ten times faster than any known past event, leaving less time for evolutionary response.

Regional variations in acidification intensity create complex patterns of vulnerability. Cold polar waters, which absorb more CO2 than tropical waters, are acidifying most rapidly. Upwelling zones, where deeper acidified waters rise to the surface, experience episodic extreme conditions. These geographic differences mean that some fisheries and coastal communities will experience impacts sooner and more severely than others, raising questions of environmental justice alongside ecological concern.`,
    questions: [
      {
        questionType: "factual",
        question: "What percentage of atmospheric CO2 do oceans absorb?",
        options: ["10%", "20%", "30%", "40%"],
        correctAnswer: "30%",
        explanation: "The passage states 'The world's oceans absorb approximately 30% of atmospheric carbon dioxide.'"
      },
      {
        questionType: "vocabulary",
        question: "The word 'propagate' in paragraph 4 is closest in meaning to:",
        options: ["Stop", "Spread or transmit", "Reverse", "Stabilize"],
        correctAnswer: "Spread or transmit",
        explanation: "In this context, 'propagate through food webs' means the effects would spread through the interconnected feeding relationships."
      },
      {
        questionType: "factual",
        question: "How much has ocean surface pH changed since pre-industrial times?",
        options: ["From 8.2 to 7.9", "From 8.2 to 8.1", "From 8.5 to 8.2", "From 7.8 to 7.5"],
        correctAnswer: "From 8.2 to 8.1",
        explanation: "The passage states pH 'declined from approximately 8.2 to 8.1 since pre-industrial times.'"
      },
      {
        questionType: "inference",
        question: "Why does the author call the pH change 'seemingly small' but significant?",
        options: ["Because pH doesn't really matter", "Because the logarithmic scale means 0.1 represents a 30% change in hydrogen ions", "Because only scientists care about pH", "Because the change will reverse itself"],
        correctAnswer: "Because the logarithmic scale means 0.1 represents a 30% change in hydrogen ions",
        explanation: "The passage explicitly explains that the 'seemingly small' change 'represents a 30% increase in hydrogen ion concentration due to the logarithmic nature of the pH scale.'"
      },
      {
        questionType: "inference",
        question: "Why does the Paleocene-Eocene Thermal Maximum provide a 'concerning precedent'?",
        options: ["It shows acidification has never happened before", "It demonstrates that mass extinctions can result from acidification", "It proves current changes are harmless", "It suggests oceans will recover quickly"],
        correctAnswer: "It demonstrates that mass extinctions can result from acidification",
        explanation: "The passage mentions 'widespread ocean acidification and extinction of many deep-sea calcifying species' during this event, providing a concerning historical example."
      },
      {
        questionType: "negative_factual",
        question: "Which of the following is NOT mentioned as particularly vulnerable to ocean acidification?",
        options: ["Corals", "Pteropods", "Sharks", "Sea urchins"],
        correctAnswer: "Sharks",
        explanation: "The passage mentions corals, pteropods, and sea urchins as vulnerable, but does not mention sharks."
      },
      {
        questionType: "inference",
        question: "Why might current acidification be more dangerous than the Paleocene-Eocene event?",
        options: ["More CO2 is being released", "Organisms had more time to adapt during the earlier event", "The earlier event affected different species", "The earlier event was not caused by carbon dioxide"],
        correctAnswer: "Organisms had more time to adapt during the earlier event",
        explanation: "The passage notes the earlier event 'occurred over thousands of years, allowing some adaptation' while 'current acidification is proceeding at least ten times faster,' leaving less time for evolutionary response."
      },
      {
        questionType: "rhetorical_purpose",
        question: "Why does the author mention 'environmental justice' in the final paragraph?",
        options: ["To criticize legal systems", "To suggest unequal distribution of impacts raises ethical concerns", "To argue for international law changes", "To compare different regions' policies"],
        correctAnswer: "To suggest unequal distribution of impacts raises ethical concerns",
        explanation: "The mention of environmental justice alongside the fact that 'some fisheries and coastal communities will experience impacts sooner and more severely than others' highlights the ethical dimension of unequal climate impacts."
      }
    ]
  }
];

// ==================== LEGACY FORMAT CONVERSION ====================

export interface LegacyReadingQuestion {
  id: string;
  taskType: "complete_words" | "daily_life" | "academic";
  difficulty: "easy" | "medium" | "hard";
  passage: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

// Convert to flat format for backward compatibility
export const legacyReadingQuestions: LegacyReadingQuestion[] = [
  // Convert Daily Life questions
  ...dailyLifeQuestions.flatMap((dl) =>
    dl.questions.map((q, i) => ({
      id: `${dl.id}_Q${i + 1}`,
      taskType: "daily_life" as const,
      difficulty: dl.difficulty,
      passage: dl.passage,
      question: q.question,
      options: q.options,
      correctAnswer: q.correctAnswer,
      explanation: q.explanation
    }))
  ),
  // Convert Academic questions
  ...academicPassages.flatMap((ap) =>
    ap.questions.map((q, i) => ({
      id: `${ap.id}_Q${i + 1}`,
      taskType: "academic" as const,
      difficulty: ap.difficulty,
      passage: ap.passage,
      question: q.question,
      options: q.options,
      correctAnswer: q.correctAnswer,
      explanation: q.explanation
    }))
  )
];

// Export all questions
export const allReadingQuestions2026 = {
  completeWords: completeWordsQuestions,
  dailyLife: dailyLifeQuestions,
  academic: academicPassages
};

// Statistics helper
export const readingQuestionStats = {
  completeWords: {
    total: completeWordsQuestions.length,
    easy: completeWordsQuestions.filter(q => q.difficulty === "easy").length,
    medium: completeWordsQuestions.filter(q => q.difficulty === "medium").length,
    hard: completeWordsQuestions.filter(q => q.difficulty === "hard").length
  },
  dailyLife: {
    total: dailyLifeQuestions.length,
    easy: dailyLifeQuestions.filter(q => q.difficulty === "easy").length,
    medium: dailyLifeQuestions.filter(q => q.difficulty === "medium").length,
    hard: dailyLifeQuestions.filter(q => q.difficulty === "hard").length,
    totalQuestions: dailyLifeQuestions.reduce((sum, q) => sum + q.questions.length, 0)
  },
  academic: {
    total: academicPassages.length,
    easy: academicPassages.filter(q => q.difficulty === "easy").length,
    medium: academicPassages.filter(q => q.difficulty === "medium").length,
    hard: academicPassages.filter(q => q.difficulty === "hard").length,
    totalQuestions: academicPassages.reduce((sum, p) => sum + p.questions.length, 0)
  }
};
