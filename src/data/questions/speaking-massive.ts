// TOEFL 2026 Speaking Section - Massive Question Bank
// 50+ Listen & Repeat Scenarios + 50+ Interview Topics
// Total: 100+ unique practice scenarios

import type { VoiceType } from "@/lib/audio";

// =====================================================
// LISTEN & REPEAT SCENARIOS (50+)
// Each scenario has 7 sentences that progressively get longer
// Context: Campus tours, facility orientations, procedure explanations
// =====================================================

export interface ListenRepeatScenario {
  id: string;
  context: string;
  description: string;
  imageDescription: string; // Description of visual context
  voice: VoiceType;
  sentences: string[];
}

export const listenRepeatScenarios: ListenRepeatScenario[] = [
  // CAMPUS TOUR SCENARIOS (1-10)
  {
    id: "LR_001",
    context: "University Library Tour",
    description: "A librarian welcomes students to the main library",
    imageDescription: "Interior of a modern university library with study areas and bookshelves",
    voice: "guide",
    sentences: [
      "Welcome to the university library.",
      "The library is open from seven AM to midnight.",
      "Study rooms are located on the second floor.",
      "You can borrow up to ten books at a time.",
      "Computer stations are available near the entrance.",
      "The quiet study zone is on the third floor.",
      "Please remember to return all borrowed materials before the due date."
    ]
  },
  {
    id: "LR_002",
    context: "Campus Fitness Center",
    description: "A staff member gives an orientation at the gym",
    imageDescription: "A modern gym facility with exercise equipment and workout areas",
    voice: "guide",
    sentences: [
      "Welcome to the fitness center.",
      "Please bring your student ID to enter.",
      "Cardio machines are on the first floor.",
      "Weight training equipment is downstairs.",
      "Towels are provided free of charge.",
      "Group fitness classes start every hour.",
      "Please wipe down the equipment after each use."
    ]
  },
  {
    id: "LR_003",
    context: "Student Health Center",
    description: "A receptionist explains health center services",
    imageDescription: "A clean medical reception area with waiting chairs",
    voice: "female_student",
    sentences: [
      "This is the student health center.",
      "We are open Monday through Friday.",
      "Walk-in appointments are available daily.",
      "Please bring your insurance card with you.",
      "Prescription services are in the back.",
      "Mental health counseling is on the second floor.",
      "For emergencies, please call campus security immediately."
    ]
  },
  {
    id: "LR_004",
    context: "Dining Hall Orientation",
    description: "A staff member explains dining hall procedures",
    imageDescription: "A busy university dining hall with food stations",
    voice: "narrator",
    sentences: [
      "Welcome to the main dining hall.",
      "Breakfast is served until ten AM.",
      "Lunch runs from eleven to two PM.",
      "Dinner service ends at eight PM.",
      "Please swipe your meal card at the entrance.",
      "Vegetarian options are available at every station.",
      "Feel free to ask our staff if you have any dietary restrictions."
    ]
  },
  {
    id: "LR_005",
    context: "Art Museum Tour",
    description: "A guide introduces visitors to the campus art museum",
    imageDescription: "An art gallery with paintings on white walls",
    voice: "guide",
    sentences: [
      "Welcome to our art museum.",
      "The collection spans five centuries.",
      "Photography is not permitted inside.",
      "Audio guides are available at the desk.",
      "The modern art wing is to your left.",
      "Special exhibitions change every three months.",
      "Please keep a safe distance from all artworks on display."
    ]
  },
  {
    id: "LR_006",
    context: "Science Building Tour",
    description: "A student guide shows the science facilities",
    imageDescription: "A modern science laboratory with equipment",
    voice: "male_student",
    sentences: [
      "This is the science building.",
      "Chemistry labs are on the ground floor.",
      "Biology research is conducted upstairs.",
      "Lab safety goggles are required at all times.",
      "The greenhouse is behind the main building.",
      "Research assistants are available for questions.",
      "All experiments must be supervised by a faculty member or teaching assistant."
    ]
  },
  {
    id: "LR_007",
    context: "Computer Lab Introduction",
    description: "A technician explains computer lab policies",
    imageDescription: "A computer lab with rows of desktop computers",
    voice: "narrator",
    sentences: [
      "Welcome to the computer lab.",
      "The lab is open twenty-four hours.",
      "Please log in with your student credentials.",
      "Printing costs five cents per page.",
      "Technical support is available during business hours.",
      "Food and drinks are not allowed inside.",
      "Please save your work frequently as computers restart automatically at midnight."
    ]
  },
  {
    id: "LR_008",
    context: "Campus Bookstore Tour",
    description: "A staff member welcomes students to the bookstore",
    imageDescription: "A university bookstore with textbooks and merchandise",
    voice: "female_student",
    sentences: [
      "Welcome to the campus bookstore.",
      "Textbooks are located on the left side.",
      "School merchandise is in the back.",
      "Used books are available at reduced prices.",
      "We offer textbook rentals each semester.",
      "Your student ID gives you a ten percent discount.",
      "You can order books online and pick them up at the service counter."
    ]
  },
  {
    id: "LR_009",
    context: "Residence Hall Move-In",
    description: "A resident advisor explains move-in procedures",
    imageDescription: "A college dormitory room with bed and desk",
    voice: "male_student",
    sentences: [
      "Welcome to your residence hall.",
      "Check-in is at the front desk.",
      "Your room key will be provided today.",
      "Common areas are on the ground floor.",
      "Quiet hours begin at ten PM.",
      "Laundry facilities are in the basement.",
      "Please report any maintenance issues to your resident advisor as soon as possible."
    ]
  },
  {
    id: "LR_010",
    context: "Career Services Center",
    description: "A counselor introduces career services",
    imageDescription: "An office with interview practice rooms",
    voice: "guide",
    sentences: [
      "Welcome to career services.",
      "We help students find internships.",
      "Resume reviews are available daily.",
      "Mock interviews can be scheduled online.",
      "Job fairs are held twice per semester.",
      "Career counselors are here to assist you.",
      "Please sign up for our newsletter to receive updates about upcoming opportunities."
    ]
  },

  // FACILITY ORIENTATIONS (11-20)
  {
    id: "LR_011",
    context: "Swimming Pool Orientation",
    description: "A lifeguard explains pool rules and facilities",
    imageDescription: "An indoor swimming pool with lanes",
    voice: "narrator",
    sentences: [
      "Welcome to the aquatic center.",
      "Lanes are divided by speed.",
      "Showering before swimming is required.",
      "Lifeguards are on duty at all times.",
      "Swimming caps are recommended but not required.",
      "The sauna and hot tub are near the locker rooms.",
      "Please check the schedule for lap swimming times and water aerobics classes."
    ]
  },
  {
    id: "LR_012",
    context: "Student Union Building",
    description: "A guide shows the student union facilities",
    imageDescription: "A busy student center with lounges and food courts",
    voice: "guide",
    sentences: [
      "This is the student union building.",
      "Food courts are on the main floor.",
      "Student organization offices are upstairs.",
      "The game room is in the basement.",
      "Meeting rooms can be reserved online.",
      "The information desk can answer your questions.",
      "Free entertainment events are held here every Friday evening during the semester."
    ]
  },
  {
    id: "LR_013",
    context: "Parking Services Orientation",
    description: "A staff member explains parking procedures",
    imageDescription: "A campus parking lot with permit signs",
    voice: "narrator",
    sentences: [
      "Welcome to parking services.",
      "Student permits are required for all lots.",
      "Visitor parking is available near the entrance.",
      "Permits must be displayed on your dashboard.",
      "Electric vehicle charging stations are available.",
      "Parking violations result in fines and tickets.",
      "You can appeal parking tickets within seven days of receiving them."
    ]
  },
  {
    id: "LR_014",
    context: "Campus Post Office",
    description: "A clerk explains mail services",
    imageDescription: "A post office counter with mailboxes",
    voice: "female_student",
    sentences: [
      "This is the campus post office.",
      "Each student has a mailbox number.",
      "Packages are held at the front counter.",
      "Stamps and shipping supplies are sold here.",
      "International shipping is available daily.",
      "You will receive an email when packages arrive.",
      "Please bring your student ID when picking up packages or certified mail."
    ]
  },
  {
    id: "LR_015",
    context: "Campus Security Office",
    description: "An officer explains safety services",
    imageDescription: "A security desk with monitors",
    voice: "narrator",
    sentences: [
      "Welcome to campus security.",
      "We are available twenty-four seven.",
      "Emergency phones are located across campus.",
      "Lost and found items are stored here.",
      "Escort services are available at night.",
      "Report any suspicious activity immediately.",
      "You can download our safety app to receive alerts and request assistance."
    ]
  },
  {
    id: "LR_016",
    context: "International Student Office",
    description: "An advisor welcomes international students",
    imageDescription: "An office with world flags and cultural displays",
    voice: "guide",
    sentences: [
      "Welcome to the international student office.",
      "We assist with visa documentation.",
      "Cultural events are held monthly.",
      "Language exchange programs are available.",
      "Immigration advisors have office hours daily.",
      "We help students adjust to campus life.",
      "Please make sure to keep your passport and visa documents updated at all times."
    ]
  },
  {
    id: "LR_017",
    context: "Writing Center Introduction",
    description: "A tutor explains writing center services",
    imageDescription: "A tutoring room with computers and whiteboards",
    voice: "female_student",
    sentences: [
      "Welcome to the writing center.",
      "We help with all types of writing.",
      "Appointments can be made online.",
      "Walk-ins are welcome when space is available.",
      "Tutors can review essays and reports.",
      "We also offer workshops on academic writing.",
      "Bring your assignment instructions so we can better assist you with your project."
    ]
  },
  {
    id: "LR_018",
    context: "Music Practice Rooms",
    description: "A staff member explains practice room policies",
    imageDescription: "A hallway with practice room doors and a piano visible",
    voice: "narrator",
    sentences: [
      "These are the music practice rooms.",
      "Rooms can be reserved for two hours.",
      "Please sign in at the front desk.",
      "Pianos are available in most rooms.",
      "Recording equipment can be borrowed.",
      "Quiet hours end at ten PM daily.",
      "Please leave the room in the same condition you found it when you arrived."
    ]
  },
  {
    id: "LR_019",
    context: "Tutoring Center Orientation",
    description: "A coordinator explains tutoring services",
    imageDescription: "A study area with tutors and students working together",
    voice: "guide",
    sentences: [
      "Welcome to the tutoring center.",
      "We offer free tutoring services.",
      "Subjects include math, science, and writing.",
      "Group study sessions are available weekly.",
      "Tutors are fellow students and professionals.",
      "Appointments guarantee dedicated assistance time.",
      "You can schedule appointments through the online portal using your student account."
    ]
  },
  {
    id: "LR_020",
    context: "Campus Shuttle Service",
    description: "A driver explains shuttle routes and schedules",
    imageDescription: "A campus shuttle bus at a stop",
    voice: "male_student",
    sentences: [
      "This is the campus shuttle service.",
      "Shuttles run every fifteen minutes.",
      "Routes connect all major buildings.",
      "The schedule is posted at each stop.",
      "Late night service operates until two AM.",
      "Shuttle tracking is available on the app.",
      "Please have your student ID ready when boarding the shuttle during peak hours."
    ]
  },

  // TOUR AND PROCEDURE SCENARIOS (21-35)
  {
    id: "LR_021",
    context: "Zoo Welcome Tour",
    description: "A zookeeper welcomes visitors",
    imageDescription: "Zoo entrance with animal direction signs",
    voice: "guide",
    sentences: [
      "Welcome to the city zoo.",
      "We have over three hundred species.",
      "The African exhibit is to your right.",
      "Feeding times are posted at each habitat.",
      "The gift shop is near the main exit.",
      "Strollers and wheelchairs can be rented.",
      "Please do not feed the animals unless directed by a staff member."
    ]
  },
  {
    id: "LR_022",
    context: "Hospital Visitor Information",
    description: "A receptionist explains visiting procedures",
    imageDescription: "A hospital reception area",
    voice: "female_student",
    sentences: [
      "Welcome to the medical center.",
      "Visiting hours are from nine to eight.",
      "Patient rooms are on floors two through six.",
      "The cafeteria is on the ground floor.",
      "Please use hand sanitizer when entering.",
      "Flowers are not allowed in intensive care.",
      "You can find the elevator banks on either side of the main lobby."
    ]
  },
  {
    id: "LR_023",
    context: "Airport Terminal Guide",
    description: "An announcement guides travelers through the terminal",
    imageDescription: "An airport terminal with gates and shops",
    voice: "narrator",
    sentences: [
      "Welcome to the international terminal.",
      "Check-in counters are to your left.",
      "Security screening is straight ahead.",
      "Gates A through D are on this level.",
      "Restaurants and shops are past security.",
      "Currency exchange is near gate B.",
      "Please arrive at your gate at least thirty minutes before your scheduled departure."
    ]
  },
  {
    id: "LR_024",
    context: "Hotel Check-In",
    description: "A receptionist welcomes hotel guests",
    imageDescription: "A hotel lobby with front desk",
    voice: "guide",
    sentences: [
      "Welcome to the Grand Hotel.",
      "Check-in begins at three PM.",
      "Your room is on the fifth floor.",
      "The elevator is around the corner.",
      "Breakfast is included with your stay.",
      "The pool is open until ten PM.",
      "Please contact the front desk if you need any additional towels or amenities."
    ]
  },
  {
    id: "LR_025",
    context: "Botanical Garden Tour",
    description: "A guide introduces the botanical gardens",
    imageDescription: "A beautiful garden with diverse plants and pathways",
    voice: "guide",
    sentences: [
      "Welcome to the botanical gardens.",
      "The gardens span over fifty acres.",
      "The rose garden is our most popular area.",
      "Guided tours start every hour.",
      "The butterfly conservatory requires tickets.",
      "Picnic areas are near the south entrance.",
      "Please stay on the designated paths to protect the delicate plant life."
    ]
  },
  {
    id: "LR_026",
    context: "Movie Theater Introduction",
    description: "A staff member explains theater policies",
    imageDescription: "A movie theater lobby with concession stand",
    voice: "narrator",
    sentences: [
      "Welcome to the cinema complex.",
      "Tickets can be purchased at the counter.",
      "Concessions are to your right.",
      "Theater numbers are displayed on screens.",
      "Please silence your phones during the film.",
      "Three-D glasses are provided at your theater.",
      "Outside food and beverages are not permitted in the screening rooms."
    ]
  },
  {
    id: "LR_027",
    context: "Grocery Store Orientation",
    description: "A staff member helps new customers navigate",
    imageDescription: "A grocery store with aisles and produce section",
    voice: "female_student",
    sentences: [
      "Welcome to Fresh Market.",
      "Fresh produce is in the front section.",
      "The bakery is at the back of the store.",
      "Dairy products are in aisle seven.",
      "Self-checkout is available near the exit.",
      "Store cards provide additional discounts.",
      "Please ask any staff member if you need help finding a specific item."
    ]
  },
  {
    id: "LR_028",
    context: "Bank Account Opening",
    description: "A banker explains account procedures",
    imageDescription: "A bank interior with teller windows",
    voice: "narrator",
    sentences: [
      "Welcome to First National Bank.",
      "Please take a number at the kiosk.",
      "Account opening requires identification.",
      "Our minimum deposit is twenty-five dollars.",
      "Mobile banking is available free of charge.",
      "A financial advisor can answer your questions.",
      "You will receive your debit card in the mail within five to seven business days."
    ]
  },
  {
    id: "LR_029",
    context: "Gym Class Introduction",
    description: "An instructor welcomes participants to a fitness class",
    imageDescription: "A fitness studio with exercise mats",
    voice: "guide",
    sentences: [
      "Welcome to today's yoga class.",
      "Please find a mat and get comfortable.",
      "Water bottles should be within reach.",
      "We will start with some light stretching.",
      "Let me know if you have any injuries.",
      "Modifications will be offered throughout class.",
      "Remember to listen to your body and take breaks whenever you need to."
    ]
  },
  {
    id: "LR_030",
    context: "Museum Guided Tour",
    description: "A docent begins a museum tour",
    imageDescription: "A natural history museum with dinosaur skeletons",
    voice: "guide",
    sentences: [
      "Welcome to the Natural History Museum.",
      "Our tour will last about one hour.",
      "Please stay with the group at all times.",
      "Photography without flash is permitted.",
      "The dinosaur hall is our first stop.",
      "Questions are welcome throughout the tour.",
      "Feel free to explore on your own after the guided portion concludes."
    ]
  },
  {
    id: "LR_031",
    context: "Coffee Shop Order",
    description: "A barista explains the ordering process",
    imageDescription: "A cozy coffee shop with menu board",
    voice: "female_student",
    sentences: [
      "Welcome to Campus Coffee.",
      "Our menu is displayed above.",
      "Specialty drinks take a few extra minutes.",
      "We offer dairy-free milk alternatives.",
      "Pastries are freshly baked every morning.",
      "Loyalty cards earn you free drinks.",
      "Your order will be called out when it is ready at the pickup counter."
    ]
  },
  {
    id: "LR_032",
    context: "Pharmacy Consultation",
    description: "A pharmacist explains prescription services",
    imageDescription: "A pharmacy counter with medicine shelves",
    voice: "narrator",
    sentences: [
      "Welcome to the pharmacy.",
      "Prescriptions can be dropped off here.",
      "Most orders are ready within an hour.",
      "Over-the-counter medications are in aisle three.",
      "Please bring your insurance information.",
      "Flu shots are available without appointment.",
      "Our pharmacist is happy to answer any questions about your medications."
    ]
  },
  {
    id: "LR_033",
    context: "Apartment Viewing",
    description: "A leasing agent shows an apartment",
    imageDescription: "A modern apartment living room",
    voice: "guide",
    sentences: [
      "Welcome to Parkview Apartments.",
      "This is a two-bedroom unit.",
      "The kitchen was recently renovated.",
      "Laundry facilities are in the building.",
      "Parking is included with your lease.",
      "Utilities are not included in rent.",
      "Applications can be submitted online and typically process within two business days."
    ]
  },
  {
    id: "LR_034",
    context: "Dental Office Visit",
    description: "A receptionist explains dental procedures",
    imageDescription: "A dental office waiting room",
    voice: "female_student",
    sentences: [
      "Welcome to Smile Dental Clinic.",
      "Please complete the patient forms.",
      "Your appointment will begin shortly.",
      "X-rays will be taken during your visit.",
      "The dentist will review your treatment options.",
      "We accept most insurance plans.",
      "Payment plans are available if you need help covering the cost of treatment."
    ]
  },
  {
    id: "LR_035",
    context: "Car Rental Pickup",
    description: "An agent explains rental procedures",
    imageDescription: "A car rental counter with keys",
    voice: "narrator",
    sentences: [
      "Welcome to Quick Car Rentals.",
      "Please present your driver's license.",
      "Your vehicle is ready in lot B.",
      "The gas tank is currently full.",
      "Please return it with a full tank.",
      "Insurance options are available at the counter.",
      "You will need to sign the rental agreement before taking the keys."
    ]
  },

  // ADDITIONAL CAMPUS AND COMMUNITY SCENARIOS (36-50)
  {
    id: "LR_036",
    context: "Laboratory Safety Briefing",
    description: "A supervisor explains lab safety protocols",
    imageDescription: "A chemistry lab with safety equipment",
    voice: "professor",
    sentences: [
      "Welcome to the chemistry laboratory.",
      "Safety goggles must be worn at all times.",
      "Emergency showers are by the door.",
      "All chemicals must be properly labeled.",
      "Dispose of waste in designated containers.",
      "Report any spills immediately to staff.",
      "Please familiarize yourself with the location of all safety equipment before beginning."
    ]
  },
  {
    id: "LR_037",
    context: "Theater Box Office",
    description: "A staff member explains ticket purchases",
    imageDescription: "A theater box office with show posters",
    voice: "guide",
    sentences: [
      "Welcome to the campus theater.",
      "Tonight's performance begins at eight.",
      "Student tickets are half price.",
      "Seating is assigned by row number.",
      "The doors open thirty minutes early.",
      "Latecomers will be seated at intermission.",
      "Photography and recording during the performance are strictly prohibited."
    ]
  },
  {
    id: "LR_038",
    context: "Study Abroad Office",
    description: "An advisor explains study abroad programs",
    imageDescription: "An office with travel brochures and world map",
    voice: "guide",
    sentences: [
      "Welcome to the study abroad office.",
      "We offer programs in thirty countries.",
      "Applications are due in the fall.",
      "Financial aid can be applied to programs.",
      "Language proficiency may be required.",
      "Advisors can help choose the right program.",
      "Attending an information session is the first step in the application process."
    ]
  },
  {
    id: "LR_039",
    context: "Campus Radio Station",
    description: "A DJ introduces the radio station",
    imageDescription: "A radio studio with microphones and equipment",
    voice: "male_student",
    sentences: [
      "Welcome to campus radio.",
      "We broadcast twenty-four hours a day.",
      "Students can host their own shows.",
      "Training sessions are held every month.",
      "The studio is located in the basement.",
      "Music requests can be made through our website.",
      "All new DJs must complete an orientation before going on air."
    ]
  },
  {
    id: "LR_040",
    context: "Volunteer Center",
    description: "A coordinator explains volunteer opportunities",
    imageDescription: "A community center with volunteer sign-up sheets",
    voice: "guide",
    sentences: [
      "Welcome to the volunteer center.",
      "We connect students with community service.",
      "Opportunities range from tutoring to cleanup.",
      "Sign-up sheets are on the bulletin board.",
      "Some positions require background checks.",
      "Volunteer hours can count toward course credit.",
      "Please attend an orientation session before beginning your first volunteer assignment."
    ]
  },
  {
    id: "LR_041",
    context: "Campus Newspaper Office",
    description: "An editor welcomes new writers",
    imageDescription: "A newsroom with computers and newspapers",
    voice: "female_student",
    sentences: [
      "Welcome to the campus newspaper.",
      "We publish articles every week.",
      "All students can submit stories.",
      "Meeting times are posted on the door.",
      "Editors review submissions before publication.",
      "Photography skills are also needed.",
      "Your first article will be reviewed by a senior editor before it goes to print."
    ]
  },
  {
    id: "LR_042",
    context: "Counseling Services",
    description: "A counselor explains mental health services",
    imageDescription: "A calm counseling office with comfortable chairs",
    voice: "guide",
    sentences: [
      "Welcome to counseling services.",
      "All sessions are completely confidential.",
      "We offer individual and group therapy.",
      "Crisis support is available after hours.",
      "Appointments can be made by phone or online.",
      "There is no charge for students.",
      "Your wellbeing is our priority, and we are here to support you."
    ]
  },
  {
    id: "LR_043",
    context: "Makerspace Introduction",
    description: "A technician explains the makerspace",
    imageDescription: "A creative workshop with 3D printers and tools",
    voice: "narrator",
    sentences: [
      "Welcome to the innovation makerspace.",
      "Three-D printers are available for student use.",
      "Laser cutting requires certification training.",
      "Basic tools can be borrowed at the desk.",
      "Safety training is mandatory for all equipment.",
      "Project materials can be purchased on site.",
      "Please reserve equipment time in advance during busy periods of the semester."
    ]
  },
  {
    id: "LR_044",
    context: "Campus Garden",
    description: "A coordinator introduces the community garden",
    imageDescription: "A campus vegetable garden with planting beds",
    voice: "guide",
    sentences: [
      "Welcome to the campus garden.",
      "Students can rent their own plot.",
      "Seeds and tools are provided free.",
      "Watering schedules are posted weekly.",
      "Harvested produce is yours to keep.",
      "Gardening workshops are held each month.",
      "Please remember to clean your tools and return them after each gardening session."
    ]
  },
  {
    id: "LR_045",
    context: "Financial Aid Office",
    description: "An advisor explains financial aid",
    imageDescription: "An office with scholarship posters",
    voice: "narrator",
    sentences: [
      "Welcome to the financial aid office.",
      "Applications open in January each year.",
      "Scholarships are awarded based on merit.",
      "Work-study positions are also available.",
      "Appeal forms are at the front desk.",
      "Advisors can help complete your application.",
      "Make sure to submit all required documents before the deadline to avoid delays."
    ]
  },
  {
    id: "LR_046",
    context: "Campus Observatory",
    description: "An astronomer welcomes visitors",
    imageDescription: "An observatory with telescopes",
    voice: "professor",
    sentences: [
      "Welcome to the campus observatory.",
      "We are open every clear Friday night.",
      "The main telescope is over a century old.",
      "Star charts are available at the entrance.",
      "Tonight we will observe Jupiter and Saturn.",
      "Please allow time for your eyes to adjust.",
      "Questions about astronomy are welcome throughout your visit this evening."
    ]
  },
  {
    id: "LR_047",
    context: "Recycling Center",
    description: "A staff member explains recycling procedures",
    imageDescription: "A recycling facility with sorting bins",
    voice: "narrator",
    sentences: [
      "Welcome to the recycling center.",
      "Bins are color-coded by material type.",
      "Paper products go in the blue bins.",
      "Plastic and glass are in the green bins.",
      "Electronics require special disposal.",
      "Compost bins are located near the garden.",
      "Please rinse all containers before placing them in the recycling bins."
    ]
  },
  {
    id: "LR_048",
    context: "Veteran Services Office",
    description: "A coordinator welcomes veteran students",
    imageDescription: "An office with American flag and military memorabilia",
    voice: "guide",
    sentences: [
      "Welcome to veteran services.",
      "We assist with GI Bill benefits.",
      "Academic support is available to all veterans.",
      "The lounge is open during business hours.",
      "Peer mentoring programs connect you with others.",
      "Counseling services understand military experience.",
      "Please bring your DD-214 form when applying for educational benefits."
    ]
  },
  {
    id: "LR_049",
    context: "Student Government Office",
    description: "A representative explains student government",
    imageDescription: "A meeting room with election posters",
    voice: "male_student",
    sentences: [
      "Welcome to student government.",
      "We represent the student body.",
      "Elections are held every spring semester.",
      "Committee meetings are open to everyone.",
      "Your feedback helps improve campus life.",
      "Budget requests can be submitted online.",
      "We encourage all students to participate in campus decision-making processes."
    ]
  },
  {
    id: "LR_050",
    context: "Alumni Center",
    description: "A director welcomes visitors to the alumni center",
    imageDescription: "A elegant room with university history displays",
    voice: "guide",
    sentences: [
      "Welcome to the alumni center.",
      "This building was donated by graduates.",
      "Networking events are held monthly.",
      "Career mentorship programs are available.",
      "The archives contain university history.",
      "Alumni can access campus facilities.",
      "Membership in the alumni association provides benefits throughout your professional career."
    ]
  },
];

// =====================================================
// INTERVIEW TOPICS (50+)
// Each topic has 4 questions, 45 seconds each, no prep time
// Pattern: Personal recollection -> Preference -> Stance -> Policy opinion
// =====================================================

export interface InterviewTopic {
  id: string;
  topic: string;
  description: string;
  questions: {
    type: "recollection" | "preference" | "stance" | "policy";
    question: string;
    followUp?: string;
  }[];
  sampleResponses?: string[];
}

export const interviewTopics: InterviewTopic[] = [
  // EDUCATION TOPICS (1-10)
  {
    id: "INT_001",
    topic: "Online Learning",
    description: "Questions about digital education experiences",
    questions: [
      { type: "recollection", question: "Describe a time when you learned something new through an online course or video tutorial." },
      { type: "preference", question: "Do you prefer learning in a traditional classroom or through online platforms? Explain why." },
      { type: "stance", question: "Some people believe online education is just as effective as in-person learning. Do you agree or disagree?" },
      { type: "policy", question: "Should universities offer more courses entirely online? What are the advantages and disadvantages?" }
    ],
    sampleResponses: [
      "Last year, I took an online programming course during the summer. I learned Python in about eight weeks by watching video lectures and completing coding exercises. What I liked most was being able to pause and rewatch difficult sections.",
      "I prefer traditional classrooms because I learn better through direct interaction with teachers and classmates. Online learning can feel isolating, and I find it harder to stay motivated without the structure of regular class meetings.",
      "I partially agree. Online education works well for motivated, self-disciplined learners, but it may not be as effective for subjects requiring hands-on practice or students who need more guidance.",
      "Universities should offer more online options, especially for theoretical courses. The advantages include flexibility and accessibility for working students. However, lab courses and subjects requiring group work should remain in person."
    ]
  },
  {
    id: "INT_002",
    topic: "Study Habits",
    description: "Questions about learning and productivity",
    questions: [
      { type: "recollection", question: "Tell me about a study technique that has helped you succeed academically." },
      { type: "preference", question: "Do you prefer studying alone or in groups? What are the benefits of your choice?" },
      { type: "stance", question: "Is it better to study a little every day or have longer study sessions less frequently?" },
      { type: "policy", question: "Should schools teach students specific study techniques as part of the curriculum?" }
    ],
    sampleResponses: [
      "The Pomodoro technique has been incredibly helpful for me. I study in twenty-five minute blocks with five minute breaks. This helps me maintain focus and avoid burnout during long study sessions.",
      "I prefer studying alone because I can concentrate better without distractions. When I study with others, conversations often go off-topic. However, I do form study groups before exams to quiz each other.",
      "I believe studying a little every day is more effective. Regular review helps information move into long-term memory, whereas cramming often leads to forgetting material shortly after the exam.",
      "Yes, schools should teach study techniques. Many students struggle not because of ability but because they don't know how to study effectively. Teaching time management, note-taking, and active recall would benefit everyone."
    ]
  },
  {
    id: "INT_003",
    topic: "Extracurricular Activities",
    description: "Questions about activities outside academics",
    questions: [
      { type: "recollection", question: "Describe an extracurricular activity that has been meaningful to you and explain why." },
      { type: "preference", question: "Would you rather participate in sports or join clubs and organizations? Why?" },
      { type: "stance", question: "Are extracurricular activities as important as academic performance for student development?" },
      { type: "policy", question: "Should participation in extracurricular activities be required for graduation?" }
    ]
  },
  {
    id: "INT_004",
    topic: "Language Learning",
    description: "Questions about learning languages",
    questions: [
      { type: "recollection", question: "Share an experience where knowing another language was helpful or important to you." },
      { type: "preference", question: "What method do you find most effective for learning a new language? Explain your choice." },
      { type: "stance", question: "Is it better to start learning a foreign language at a young age or as an adult?" },
      { type: "policy", question: "Should learning a second language be mandatory in all schools? Why or why not?" }
    ]
  },
  {
    id: "INT_005",
    topic: "Reading Habits",
    description: "Questions about reading and books",
    questions: [
      { type: "recollection", question: "Tell me about a book that has had a significant impact on you and why." },
      { type: "preference", question: "Do you prefer reading physical books or using e-readers and digital formats?" },
      { type: "stance", question: "In the age of video content, is reading still an essential skill? Defend your position." },
      { type: "policy", question: "Should schools require students to read a certain number of books each year outside of class?" }
    ]
  },
  {
    id: "INT_006",
    topic: "College Choice",
    description: "Questions about higher education decisions",
    questions: [
      { type: "recollection", question: "What factors did you consider when choosing where to study? Which was most important?" },
      { type: "preference", question: "Would you prefer attending a large university or a small college? Explain your reasoning." },
      { type: "stance", question: "Is the prestige of a university more important than the specific programs it offers?" },
      { type: "policy", question: "Should government provide free higher education for all citizens? What are the implications?" }
    ]
  },
  {
    id: "INT_007",
    topic: "Academic Pressure",
    description: "Questions about stress and expectations",
    questions: [
      { type: "recollection", question: "Describe a time when you felt overwhelmed by academic pressure. How did you handle it?" },
      { type: "preference", question: "Do you prefer frequent small assignments or fewer large projects? Explain why." },
      { type: "stance", question: "Does academic competition motivate students to perform better, or does it cause unnecessary stress?" },
      { type: "policy", question: "Should schools limit the amount of homework assigned to students? Justify your answer." }
    ]
  },
  {
    id: "INT_008",
    topic: "Classroom Technology",
    description: "Questions about technology in education",
    questions: [
      { type: "recollection", question: "How has technology changed the way you learn or study? Give a specific example." },
      { type: "preference", question: "Do you prefer taking notes on paper or using a laptop or tablet? Why?" },
      { type: "stance", question: "Should students be allowed to use smartphones during class for educational purposes?" },
      { type: "policy", question: "Should schools provide every student with a laptop or tablet for their studies?" }
    ]
  },
  {
    id: "INT_009",
    topic: "Teacher Qualities",
    description: "Questions about effective teaching",
    questions: [
      { type: "recollection", question: "Describe a teacher who had a positive influence on you. What made them effective?" },
      { type: "preference", question: "Do you learn better from strict teachers or those with a more relaxed approach?" },
      { type: "stance", question: "Is it more important for teachers to be knowledgeable experts or skilled communicators?" },
      { type: "policy", question: "Should students be able to evaluate their teachers, and should it affect teacher employment?" }
    ]
  },
  {
    id: "INT_010",
    topic: "Gap Year",
    description: "Questions about taking time off from education",
    questions: [
      { type: "recollection", question: "Have you or someone you know taken time off before or during college? What was the experience like?" },
      { type: "preference", question: "Would you prefer going directly to college or taking a gap year first? Explain your choice." },
      { type: "stance", question: "Does taking a gap year benefit or harm a student's academic and career prospects?" },
      { type: "policy", question: "Should universities encourage or support students taking gap years? How?" }
    ]
  },

  // TECHNOLOGY TOPICS (11-20)
  {
    id: "INT_011",
    topic: "Social Media",
    description: "Questions about social networking",
    questions: [
      { type: "recollection", question: "Describe how you typically use social media. What platforms do you use most?" },
      { type: "preference", question: "Do you prefer connecting with people online or meeting in person? Why?" },
      { type: "stance", question: "Has social media had a more positive or negative effect on society? Explain your view." },
      { type: "policy", question: "Should there be age restrictions for social media use? What age would be appropriate?" }
    ]
  },
  {
    id: "INT_012",
    topic: "Smartphone Use",
    description: "Questions about mobile phone habits",
    questions: [
      { type: "recollection", question: "Recall a time when your smartphone was particularly useful or important to you." },
      { type: "preference", question: "How do you feel about limiting your screen time? Do you think it's necessary?" },
      { type: "stance", question: "Do smartphones improve or diminish the quality of face-to-face interactions?" },
      { type: "policy", question: "Should schools and workplaces implement policies to encourage healthier phone habits?" }
    ]
  },
  {
    id: "INT_013",
    topic: "Artificial Intelligence",
    description: "Questions about AI technology",
    questions: [
      { type: "recollection", question: "Have you used AI tools like ChatGPT or voice assistants? Describe your experience." },
      { type: "preference", question: "Would you prefer interacting with AI customer service or human representatives?" },
      { type: "stance", question: "Will artificial intelligence create more jobs than it eliminates, or vice versa?" },
      { type: "policy", question: "Should there be regulations on how AI can be used in education and employment?" }
    ]
  },
  {
    id: "INT_014",
    topic: "Privacy and Technology",
    description: "Questions about digital privacy",
    questions: [
      { type: "recollection", question: "Have you ever been concerned about your online privacy? What happened?" },
      { type: "preference", question: "Are you willing to share personal data for more personalized services online?" },
      { type: "stance", question: "Is privacy a reasonable expectation in the digital age, or should people accept less privacy?" },
      { type: "policy", question: "What should governments do to protect citizens' digital privacy?" }
    ]
  },
  {
    id: "INT_015",
    topic: "E-commerce",
    description: "Questions about online shopping",
    questions: [
      { type: "recollection", question: "Describe a positive or negative experience you've had with online shopping." },
      { type: "preference", question: "Do you prefer shopping online or in physical stores? What influences your choice?" },
      { type: "stance", question: "Will online shopping eventually replace traditional retail stores?" },
      { type: "policy", question: "Should online retailers be required to have physical return locations?" }
    ]
  },
  {
    id: "INT_016",
    topic: "Video Games",
    description: "Questions about gaming",
    questions: [
      { type: "recollection", question: "If you play video games, describe what you enjoy about the experience." },
      { type: "preference", question: "Do you consider video games a good way to spend free time? Why or why not?" },
      { type: "stance", question: "Can video games be educational, or are they primarily entertainment?" },
      { type: "policy", question: "Should there be limits on how long young people can play video games?" }
    ]
  },
  {
    id: "INT_017",
    topic: "Digital Communication",
    description: "Questions about messaging and email",
    questions: [
      { type: "recollection", question: "Think of a time when digital communication led to a misunderstanding. What happened?" },
      { type: "preference", question: "For important conversations, do you prefer text, phone calls, or video chat?" },
      { type: "stance", question: "Has digital communication improved or weakened personal relationships?" },
      { type: "policy", question: "Should companies have policies about responding to work messages after hours?" }
    ]
  },
  {
    id: "INT_018",
    topic: "Streaming Services",
    description: "Questions about entertainment consumption",
    questions: [
      { type: "recollection", question: "How has streaming changed the way you watch movies or listen to music?" },
      { type: "preference", question: "Do you prefer streaming services or traditional TV and radio? Explain why." },
      { type: "stance", question: "Has the abundance of content from streaming services improved entertainment quality?" },
      { type: "policy", question: "Should there be regulations on how much original content streaming services must produce?" }
    ]
  },
  {
    id: "INT_019",
    topic: "Electric Vehicles",
    description: "Questions about transportation technology",
    questions: [
      { type: "recollection", question: "Have you had any experience with electric vehicles? What was your impression?" },
      { type: "preference", question: "Would you choose an electric car over a gasoline-powered vehicle? Why or why not?" },
      { type: "stance", question: "Will electric vehicles eventually replace traditional cars completely?" },
      { type: "policy", question: "Should governments offer incentives for people to buy electric vehicles?" }
    ]
  },
  {
    id: "INT_020",
    topic: "Remote Work",
    description: "Questions about working from home",
    questions: [
      { type: "recollection", question: "Have you or someone you know worked remotely? What was the experience like?" },
      { type: "preference", question: "Would you prefer working from home or in an office? What factors influence this?" },
      { type: "stance", question: "Is remote work better for productivity, or does office work have advantages?" },
      { type: "policy", question: "Should companies be required to offer remote work options when possible?" }
    ]
  },

  // LIFESTYLE TOPICS (21-30)
  {
    id: "INT_021",
    topic: "Health and Exercise",
    description: "Questions about fitness and wellbeing",
    questions: [
      { type: "recollection", question: "Describe your exercise routine or physical activities. How do they benefit you?" },
      { type: "preference", question: "Do you prefer exercising alone or with others? Why?" },
      { type: "stance", question: "Should maintaining physical fitness be considered a personal or social responsibility?" },
      { type: "policy", question: "Should employers provide gym memberships or fitness programs for employees?" }
    ]
  },
  {
    id: "INT_022",
    topic: "Diet and Nutrition",
    description: "Questions about eating habits",
    questions: [
      { type: "recollection", question: "Have you ever tried to change your eating habits? What was the result?" },
      { type: "preference", question: "Do you prefer home-cooked meals or eating out? What influences your choice?" },
      { type: "stance", question: "Is it the individual's responsibility or the government's to promote healthy eating?" },
      { type: "policy", question: "Should unhealthy foods be taxed more heavily to discourage consumption?" }
    ]
  },
  {
    id: "INT_023",
    topic: "Sleep Habits",
    description: "Questions about rest and sleep",
    questions: [
      { type: "recollection", question: "Describe your typical sleep schedule. Do you feel you get enough rest?" },
      { type: "preference", question: "Are you more productive in the morning or at night? How does this affect your routine?" },
      { type: "stance", question: "In our busy society, is getting adequate sleep a luxury or a necessity?" },
      { type: "policy", question: "Should schools start later in the morning to allow teenagers more sleep?" }
    ]
  },
  {
    id: "INT_024",
    topic: "Hobbies",
    description: "Questions about leisure activities",
    questions: [
      { type: "recollection", question: "What hobby or interest do you enjoy most? How did you develop this interest?" },
      { type: "preference", question: "Do you prefer hobbies that are active or relaxing? Explain your preference." },
      { type: "stance", question: "Are hobbies essential for a balanced life, or are they optional luxuries?" },
      { type: "policy", question: "Should schools dedicate more time to helping students discover and develop hobbies?" }
    ]
  },
  {
    id: "INT_025",
    topic: "Travel",
    description: "Questions about traveling experiences",
    questions: [
      { type: "recollection", question: "Describe a memorable travel experience. What made it special?" },
      { type: "preference", question: "Do you prefer traveling to familiar places or exploring new destinations?" },
      { type: "stance", question: "Is travel an important part of education and personal development?" },
      { type: "policy", question: "Should there be limits on tourism to protect popular destinations from overcrowding?" }
    ]
  },
  {
    id: "INT_026",
    topic: "Money Management",
    description: "Questions about personal finance",
    questions: [
      { type: "recollection", question: "How did you learn to manage money? Was it from family, school, or experience?" },
      { type: "preference", question: "Do you prefer saving money or spending on experiences? Explain why." },
      { type: "stance", question: "Is financial success primarily the result of hard work or circumstances?" },
      { type: "policy", question: "Should financial literacy be a required subject in schools?" }
    ]
  },
  {
    id: "INT_027",
    topic: "Time Management",
    description: "Questions about productivity and scheduling",
    questions: [
      { type: "recollection", question: "How do you typically organize your day? Do you use any specific tools or methods?" },
      { type: "preference", question: "Do you prefer having a structured schedule or a flexible routine?" },
      { type: "stance", question: "Is being busy a sign of success, or is it important to have leisure time?" },
      { type: "policy", question: "Should there be laws limiting how many hours people can work per week?" }
    ]
  },
  {
    id: "INT_028",
    topic: "Urban vs Rural Living",
    description: "Questions about living environments",
    questions: [
      { type: "recollection", question: "Describe the area where you grew up. What did you like or dislike about it?" },
      { type: "preference", question: "Would you prefer living in a busy city or a quiet rural area? Why?" },
      { type: "stance", question: "Does living in a city offer more advantages than living in the countryside?" },
      { type: "policy", question: "Should governments invest more in developing rural areas or improving cities?" }
    ]
  },
  {
    id: "INT_029",
    topic: "Pets",
    description: "Questions about animal companions",
    questions: [
      { type: "recollection", question: "Have you ever had a pet? Describe your experience with animals." },
      { type: "preference", question: "If you could have any pet, what would you choose and why?" },
      { type: "stance", question: "Do pets improve quality of life significantly, or are they optional?" },
      { type: "policy", question: "Should landlords be required to allow tenants to have pets?" }
    ]
  },
  {
    id: "INT_030",
    topic: "Fashion and Appearance",
    description: "Questions about personal style",
    questions: [
      { type: "recollection", question: "How would you describe your personal style? Has it changed over time?" },
      { type: "preference", question: "Do you prefer comfort or style when choosing what to wear?" },
      { type: "stance", question: "Does what we wear affect how others perceive us professionally?" },
      { type: "policy", question: "Should workplaces have dress codes, or should employees dress however they want?" }
    ]
  },

  // SOCIETY AND CULTURE TOPICS (31-40)
  {
    id: "INT_031",
    topic: "Cultural Traditions",
    description: "Questions about customs and heritage",
    questions: [
      { type: "recollection", question: "Describe a cultural tradition that is important to you or your family." },
      { type: "preference", question: "Do you prefer maintaining traditional customs or adopting modern practices?" },
      { type: "stance", question: "Is it important to preserve cultural traditions, even as society changes?" },
      { type: "policy", question: "Should governments fund programs to preserve endangered cultural practices?" }
    ]
  },
  {
    id: "INT_032",
    topic: "Volunteering",
    description: "Questions about community service",
    questions: [
      { type: "recollection", question: "Have you ever volunteered? Describe the experience and its impact on you." },
      { type: "preference", question: "What type of volunteer work appeals to you most? Why?" },
      { type: "stance", question: "Should volunteering be motivated by altruism, or is it acceptable to volunteer for personal benefits?" },
      { type: "policy", question: "Should volunteer work be a graduation requirement for students?" }
    ]
  },
  {
    id: "INT_033",
    topic: "News and Media",
    description: "Questions about information consumption",
    questions: [
      { type: "recollection", question: "How do you typically stay informed about current events?" },
      { type: "preference", question: "Do you prefer getting news from traditional sources or social media?" },
      { type: "stance", question: "Is it important for citizens to follow the news regularly? Why or why not?" },
      { type: "policy", question: "Should social media platforms be required to fact-check news content?" }
    ]
  },
  {
    id: "INT_034",
    topic: "Generational Differences",
    description: "Questions about age-related perspectives",
    questions: [
      { type: "recollection", question: "Have you noticed differences in values or attitudes between your generation and older ones?" },
      { type: "preference", question: "Do you enjoy spending time with people from different generations? Why?" },
      { type: "stance", question: "Are young people today less responsible than previous generations, or is this a misconception?" },
      { type: "policy", question: "Should workplaces create programs to bridge generational gaps between employees?" }
    ]
  },
  {
    id: "INT_035",
    topic: "Environmental Awareness",
    description: "Questions about environmental responsibility",
    questions: [
      { type: "recollection", question: "What actions do you take to reduce your environmental impact?" },
      { type: "preference", question: "Would you pay more for environmentally friendly products? Why or why not?" },
      { type: "stance", question: "Is environmental protection primarily an individual responsibility or a government duty?" },
      { type: "policy", question: "Should single-use plastics be banned? What would be the consequences?" }
    ]
  },
  {
    id: "INT_036",
    topic: "Public Speaking",
    description: "Questions about communication skills",
    questions: [
      { type: "recollection", question: "Describe a time when you had to speak in front of a group. How did it go?" },
      { type: "preference", question: "Do you prefer expressing yourself in writing or through speaking?" },
      { type: "stance", question: "Is public speaking an essential skill for success in today's world?" },
      { type: "policy", question: "Should public speaking be taught more extensively in schools?" }
    ]
  },
  {
    id: "INT_037",
    topic: "Gender Roles",
    description: "Questions about societal expectations",
    questions: [
      { type: "recollection", question: "How have views about gender roles changed in your community during your lifetime?" },
      { type: "preference", question: "Do you believe household responsibilities should be shared equally? Why?" },
      { type: "stance", question: "Are traditional gender roles helpful or harmful to society?" },
      { type: "policy", question: "Should there be policies to encourage more gender balance in different professions?" }
    ]
  },
  {
    id: "INT_038",
    topic: "Friendship",
    description: "Questions about relationships",
    questions: [
      { type: "recollection", question: "Tell me about a friendship that has been important to you. What makes it valuable?" },
      { type: "preference", question: "Do you prefer having many acquaintances or a few close friends?" },
      { type: "stance", question: "Can online friendships be as meaningful as in-person relationships?" },
      { type: "policy", question: "Should schools implement programs to help students develop social skills and friendships?" }
    ]
  },
  {
    id: "INT_039",
    topic: "Celebrating Achievements",
    description: "Questions about recognition and success",
    questions: [
      { type: "recollection", question: "Describe an achievement you are proud of. How did you celebrate it?" },
      { type: "preference", question: "Do you prefer private recognition or public celebration of achievements?" },
      { type: "stance", question: "Is celebrating small achievements as important as celebrating major ones?" },
      { type: "policy", question: "Should schools give awards for effort as well as achievement?" }
    ]
  },
  {
    id: "INT_040",
    topic: "Role Models",
    description: "Questions about influential figures",
    questions: [
      { type: "recollection", question: "Who has been a role model in your life? What qualities do you admire in them?" },
      { type: "preference", question: "Do you prefer role models you know personally or public figures?" },
      { type: "stance", question: "Should celebrities be held to higher standards as role models?" },
      { type: "policy", question: "Should schools teach students about diverse role models from different backgrounds?" }
    ]
  },

  // WORK AND CAREER TOPICS (41-50)
  {
    id: "INT_041",
    topic: "Career Goals",
    description: "Questions about professional aspirations",
    questions: [
      { type: "recollection", question: "What career path are you interested in? How did you develop this interest?" },
      { type: "preference", question: "Is salary or job satisfaction more important when choosing a career?" },
      { type: "stance", question: "Is it better to have a stable career or pursue your passion, even if it's risky?" },
      { type: "policy", question: "Should universities be required to provide career placement services?" }
    ]
  },
  {
    id: "INT_042",
    topic: "Leadership",
    description: "Questions about leading others",
    questions: [
      { type: "recollection", question: "Describe a time when you took on a leadership role. What did you learn?" },
      { type: "preference", question: "Do you prefer leading a team or contributing as a team member?" },
      { type: "stance", question: "Are leaders born with natural abilities, or can leadership be taught?" },
      { type: "policy", question: "Should companies provide leadership training for all employees?" }
    ]
  },
  {
    id: "INT_043",
    topic: "Work-Life Balance",
    description: "Questions about balancing responsibilities",
    questions: [
      { type: "recollection", question: "How do you balance your work or studies with personal time?" },
      { type: "preference", question: "Would you prefer a high-paying job with long hours or a moderate income with more free time?" },
      { type: "stance", question: "Is achieving work-life balance possible in today's competitive environment?" },
      { type: "policy", question: "Should there be a maximum number of hours employees can work per week?" }
    ]
  },
  {
    id: "INT_044",
    topic: "Entrepreneurship",
    description: "Questions about starting businesses",
    questions: [
      { type: "recollection", question: "Have you ever had an idea for a business or product? Tell me about it." },
      { type: "preference", question: "Would you rather start your own business or work for an established company?" },
      { type: "stance", question: "Do entrepreneurs contribute more to society than employees of large companies?" },
      { type: "policy", question: "Should governments provide more support for young entrepreneurs?" }
    ]
  },
  {
    id: "INT_045",
    topic: "Teamwork",
    description: "Questions about collaboration",
    questions: [
      { type: "recollection", question: "Describe a successful team project you participated in. What made it work well?" },
      { type: "preference", question: "Do you prefer working independently or as part of a team? Why?" },
      { type: "stance", question: "Is teamwork always more productive than individual work?" },
      { type: "policy", question: "Should schools assign more group projects to prepare students for the workplace?" }
    ]
  },
  {
    id: "INT_046",
    topic: "Internships",
    description: "Questions about work experience",
    questions: [
      { type: "recollection", question: "Have you completed an internship or work experience? What did you learn?" },
      { type: "preference", question: "Would you prefer a paid internship in an unrelated field or an unpaid one in your chosen career?" },
      { type: "stance", question: "Should unpaid internships be allowed, or should all work be compensated?" },
      { type: "policy", question: "Should internships be a required part of every college curriculum?" }
    ]
  },
  {
    id: "INT_047",
    topic: "Feedback and Criticism",
    description: "Questions about receiving feedback",
    questions: [
      { type: "recollection", question: "Describe a time when you received constructive criticism. How did you respond?" },
      { type: "preference", question: "Do you prefer direct feedback or more diplomatic suggestions for improvement?" },
      { type: "stance", question: "Is honest criticism more valuable than encouragement and praise?" },
      { type: "policy", question: "Should performance reviews at work include feedback from colleagues as well as supervisors?" }
    ]
  },
  {
    id: "INT_048",
    topic: "Job Interviews",
    description: "Questions about the hiring process",
    questions: [
      { type: "recollection", question: "Describe a job or school interview you had. How did you prepare for it?" },
      { type: "preference", question: "Do you prefer formal interviews or casual conversations when being evaluated?" },
      { type: "stance", question: "Do job interviews accurately assess a candidate's ability to perform the job?" },
      { type: "policy", question: "Should companies use alternative methods like skills tests instead of traditional interviews?" }
    ]
  },
  {
    id: "INT_049",
    topic: "Networking",
    description: "Questions about professional connections",
    questions: [
      { type: "recollection", question: "Has networking ever helped you personally or professionally? Describe the situation." },
      { type: "preference", question: "Do you prefer networking at events or connecting with people online?" },
      { type: "stance", question: "Is professional success more about who you know or what you know?" },
      { type: "policy", question: "Should universities help students build professional networks before graduation?" }
    ]
  },
  {
    id: "INT_050",
    topic: "Changing Careers",
    description: "Questions about career transitions",
    questions: [
      { type: "recollection", question: "Have you or someone you know changed careers? What motivated the change?" },
      { type: "preference", question: "Would you be willing to start over in a new field if you were unhappy in your current job?" },
      { type: "stance", question: "Is it better to build expertise in one field or have experience in multiple areas?" },
      { type: "policy", question: "Should employers support employees who want to transition to different roles within the company?" }
    ]
  },
];

// Export combined count for verification
export const SPEAKING_CONTENT_SUMMARY = {
  listenRepeatScenarios: listenRepeatScenarios.length,
  listenRepeatTotalSentences: listenRepeatScenarios.length * 7,
  interviewTopics: interviewTopics.length,
  interviewTotalQuestions: interviewTopics.length * 4,
  totalContent: listenRepeatScenarios.length + interviewTopics.length,
};
