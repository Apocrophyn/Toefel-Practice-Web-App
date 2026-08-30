// TOEFL iBT 2026 - Listening expansion bank 2
//
// Authored to the 2026 audio lengths, which are far shorter than the pre-2026
// test and than this repository's legacy bank:
//   Listen to a Conversation  - 20-30 s, ~50-85 spoken words, 2 speakers, 2 items
//   Listen to an Announcement - 20-30 s, 40-85 words, 1 speaker, 2 items
//   Listen to an Academic Talk - 60-90 s, 100-250 words, 1 speaker, 4 items
// The legacy conversations run 111-172 words (roughly a minute of audio), which
// is the single biggest reason the Listening section did not feel like the exam.
//
// Audio plays once. Questions render only after playback completes.

import type {
  ConversationScenario,
  AnnouncementScenario,
  AcademicTalkScenario,
} from "@/data/questions/listening-massive";

export const conversationScenarios2026: ConversationScenario[] = [
  {
    id: "CV_N001",
    context: "Poster session moved",
    setting: "Campus corridor",
    speakers: [
      { role: "Man", voice: "male_student" },
      { role: "Woman", voice: "female_student" },
    ],
    transcript: `Man: Hey, did you get the email about the poster session? They moved it to Thursday.
Woman: Thursday? I have my lab until five. When does it start?
Man: Four-thirty. But you can set up any time after three, so put your poster up early and nobody minds if you arrive late.
Woman: Oh, that helps. I'll print it tomorrow morning.`,
    questions: [
      {
        question: "Why does the man speak to the woman?",
        options: [
          "To tell her the poster session has moved",
          "To ask her to print his poster",
          "To invite her to join his lab",
          "To warn her she missed the deadline",
        ],
        correctAnswer: "A",
        explanation: "He opens by telling her the session was moved to Thursday.",
      },
      {
        question: "What will the woman most likely do?",
        options: [
          "Cancel her lab session",
          "Put her poster up before her lab",
          "Ask for an extension",
          "Arrive at four-thirty",
        ],
        correctAnswer: "B",
        explanation: "She learns she can set up after three, and says she will print it in the morning.",
      },
    ],
  },
  {
    id: "CV_N002",
    context: "Returning a library book",
    setting: "University library desk",
    speakers: [
      { role: "Student", voice: "female_student" },
      { role: "Librarian", voice: "male_academic" },
    ],
    transcript: `Student: I think this one's overdue. Is there a fine?
Librarian: Let me check. No, you're fine, it was due yesterday and there's a one-day grace period.
Student: Oh, good. Can I borrow it again?
Librarian: Not straight away, someone's reserved it. I can put you next in the queue if you like.
Student: Yes please. How long is the wait usually?
Librarian: About a fortnight. We'll email you the moment it comes back in.`,
    questions: [
      {
        question: "What is the student's main concern?",
        options: [
          "Finding a different book",
          "Renewing her library card",
          "Whether she owes a fine",
          "The library's opening hours",
        ],
        correctAnswer: "C",
        explanation: "Her first question is whether there is a fine for the overdue book.",
      },
      {
        question: "Why can't the student borrow the book again immediately?",
        options: [
          "It is damaged",
          "She has reached her borrowing limit",
          "It must be returned to another branch",
          "Another person has reserved it",
        ],
        correctAnswer: "D",
        explanation: "The librarian says someone has reserved it and offers to add her to the queue.",
      },
    ],
  },
  {
    id: "CV_N003",
    context: "Group project scheduling",
    setting: "Study area",
    speakers: [
      { role: "Woman", voice: "female_student_2" },
      { role: "Man", voice: "male_student_2" },
    ],
    transcript: `Woman: We still need a time to rehearse the presentation. Are you free Friday afternoon?
Man: Friday's bad, I work at the bookshop from two. Could we do Thursday evening instead?
Woman: I could, but Priya can't do evenings. What about Friday morning, before your shift?
Man: That works. Ten o'clock?
Woman: Ten's fine. I'll book the small room on the second floor and send Priya the details tonight.
Man: Great, I'll bring the slides on a memory stick.`,
    questions: [
      {
        question: "What are the speakers trying to arrange?",
        options: [
          "A time to rehearse their presentation",
          "A visit to the bookshop",
          "A meeting with their professor",
          "A replacement for Priya",
        ],
        correctAnswer: "A",
        explanation: "The woman opens by saying they need a time to rehearse the presentation.",
      },
      {
        question: "Why is Thursday evening rejected?",
        options: [
          "The man has a shift then",
          "Priya is not available in the evening",
          "The room is already booked",
          "The presentation is on Thursday",
        ],
        correctAnswer: "B",
        explanation: "The woman says she could do Thursday evening but Priya cannot do evenings.",
      },
    ],
  },
  {
    id: "CV_N004",
    context: "Bicycle repair",
    setting: "Campus bike shop",
    speakers: [
      { role: "Man", voice: "male_student" },
      { role: "Woman", voice: "female_academic" },
    ],
    transcript: `Man: The back brake's rubbing. Is that something you can do today?
Woman: Today's fully booked, I'm afraid. If you leave it, I can look at it first thing tomorrow.
Man: I need it to get to placement in the morning.
Woman: Then take it as it is. Riding with a rubbing brake is safe enough, it'll just slow you down.`,
    questions: [
      {
        question: "What is the man's problem?",
        options: [
          "His bicycle has been stolen",
          "He cannot afford the repair",
          "His brake is rubbing",
          "He has missed his placement",
        ],
        correctAnswer: "C",
        explanation: "He states the back brake is rubbing and asks whether it can be fixed today.",
      },
      {
        question: "What does the woman advise him to do?",
        options: [
          "Leave the bicycle overnight",
          "Replace the brake himself",
          "Cancel his placement",
          "Ride it as it is for now",
        ],
        correctAnswer: "D",
        explanation: "Because he needs it in the morning, she tells him to take it as it is since it is safe.",
      },
    ],
  },
  {
    id: "CV_N005",
    context: "Changing a module",
    setting: "Registry office",
    speakers: [
      { role: "Student", voice: "male_student_2" },
      { role: "Officer", voice: "female_academic" },
    ],
    transcript: `Student: I'd like to swap from Economic History to Statistics.
Officer: You can, but the swap deadline was Friday. You'd need your tutor to sign a late form.
Student: Is that likely to be approved?
Officer: Usually, if you haven't missed much. Statistics has only had two sessions so far.
Student: That's a relief. Where do I find the form?
Officer: It's on the student portal, under Module Changes. Bring it back signed and I'll process it.`,
    questions: [
      {
        question: "What does the student want to do?",
        options: [
          "Change from one module to another",
          "Withdraw from the course",
          "Meet his tutor",
          "Extend an assignment deadline",
        ],
        correctAnswer: "A",
        explanation: "He asks to swap from Economic History to Statistics.",
      },
      {
        question: "What does the officer suggest about his chances?",
        options: [
          "The swap is impossible now",
          "Approval is likely because little has been missed",
          "He should wait until next term",
          "He must repeat the first session",
        ],
        correctAnswer: "B",
        explanation: "She says such requests are usually approved if not much has been missed, and Statistics has only run twice.",
      },
    ],
  },
  {
    id: "CV_N006",
    context: "Noisy flat",
    setting: "Apartment hallway",
    speakers: [
      { role: "Woman", voice: "female_student" },
      { role: "Man", voice: "male_student_2" },
    ],
    transcript: `Woman: Sorry to knock so late. The music's coming through the wall and I've got an exam at nine.
Man: Oh no, I had no idea it carried. I'll turn it down now.
Woman: Thanks. It's mostly the bass.
Man: Right, I'll move the speaker off the floor. That usually helps.
Woman: I'd really appreciate it. Sorry again for knocking so late.
Man: Don't worry about it. Just tell me next time, I'd rather know.`,
    questions: [
      {
        question: "Why does the woman knock on the man's door?",
        options: [
          "To borrow something for her exam",
          "To complain about the building",
          "To ask him to reduce the noise",
          "To invite him to a party",
        ],
        correctAnswer: "C",
        explanation: "She explains the music comes through the wall and she has an early exam.",
      },
      {
        question: "What does the man say he will do?",
        options: [
          "Stop playing music entirely",
          "Ask the building manager for advice",
          "Use headphones from now on",
          "Move the speaker off the floor",
        ],
        correctAnswer: "D",
        explanation: "After she mentions the bass, he says he will move the speaker off the floor.",
      },
    ],
  },
  {
    id: "CV_N007",
    context: "Lost student card",
    setting: "Reception desk",
    speakers: [
      { role: "Man", voice: "male_student" },
      { role: "Woman", voice: "female_student_2" },
    ],
    transcript: `Man: I've lost my student card. Can I get a replacement here?
Woman: Yes, but there's a ten-pound charge and it takes two working days.
Man: I need library access before then.
Woman: I can issue a temporary pass that works on the library doors. Bring some photo ID.
Man: I've got my driving licence with me. Does the pass work on the labs too?
Woman: No, just the library. The labs need the permanent card.`,
    questions: [
      {
        question: "What is the man's problem?",
        options: [
          "He has lost his student card",
          "He cannot pay the replacement fee",
          "The library is closed",
          "He forgot his photo ID",
        ],
        correctAnswer: "A",
        explanation: "He opens by saying he has lost his student card.",
      },
      {
        question: "What does the woman offer?",
        options: [
          "A refund of the charge",
          "A temporary pass for the library",
          "Immediate replacement of the card",
          "Access to a different building",
        ],
        correctAnswer: "B",
        explanation: "She offers a temporary pass that works on the library doors if he brings photo ID.",
      },
    ],
  },
  {
    id: "CV_N008",
    context: "Buying a train ticket",
    setting: "Station ticket office",
    speakers: [
      { role: "Woman", voice: "female_student" },
      { role: "Man", voice: "male_academic" },
    ],
    transcript: `Woman: A return to Leeds, coming back Sunday.
Man: Off-peak return is twenty-eight pounds. If you travel after nine-thirty it's the same price, so there's no advantage in the early train.
Woman: Then I'll take the ten o'clock.
Man: Good choice, it's usually quieter.
Woman: Do I need to reserve a seat?
Man: Not on that service, but I'd get there five minutes early. It fills up from the front.`,
    questions: [
      {
        question: "What does the woman want to buy?",
        options: [
          "A single ticket to Leeds",
          "A monthly travel pass",
          "A return ticket to Leeds",
          "A seat reservation only",
        ],
        correctAnswer: "C",
        explanation: "She asks for a return to Leeds, coming back Sunday.",
      },
      {
        question: "Why does she choose the ten o'clock train?",
        options: [
          "It is cheaper than the early train",
          "It arrives sooner",
          "It is the only train available",
          "The price is the same and it is quieter",
        ],
        correctAnswer: "D",
        explanation: "The man explains the price is identical after nine-thirty and notes the later train is usually quieter.",
      },
    ],
  },
  {
    id: "CV_N009",
    context: "Cafeteria change",
    setting: "Dining hall queue",
    speakers: [
      { role: "Man", voice: "male_student_2" },
      { role: "Woman", voice: "female_student" },
    ],
    transcript: `Man: Have they stopped doing the hot breakfast?
Woman: Only on weekdays. They said not enough people were coming before nine.
Man: That's a shame, I had it most mornings.
Woman: There's still the counter upstairs. It opens at eight and it's the same price.
Man: I didn't know that was open in the mornings.
Woman: It only started last term. The queue's shorter too, most people don't realise it's there.`,
    questions: [
      {
        question: "What has changed in the dining hall?",
        options: [
          "Hot breakfast is no longer served on weekdays",
          "Prices have increased",
          "The hall now opens at nine",
          "The upstairs counter has closed",
        ],
        correctAnswer: "A",
        explanation: "The woman explains hot breakfast stopped on weekdays because of low attendance.",
      },
      {
        question: "What does the woman suggest?",
        options: [
          "Arriving before nine o'clock",
          "Using the counter upstairs",
          "Eating breakfast at home",
          "Waiting until the weekend",
        ],
        correctAnswer: "B",
        explanation: "She points out the upstairs counter opens at eight at the same price.",
      },
    ],
  },
  {
    id: "CV_N010",
    context: "Printing a dissertation",
    setting: "Print shop",
    speakers: [
      { role: "Woman", voice: "female_student_2" },
      { role: "Man", voice: "male_student" },
    ],
    transcript: `Woman: I need two bound copies by Friday. Is that possible?
Man: Binding takes a full day, so I'd need the file by Wednesday afternoon at the latest.
Woman: I can send it Tuesday night.
Man: Perfect. Use PDF, and check the margins — anything under two centimetres gets cut by the binding.
Woman: Good to know. Does that include the page numbers?
Man: It does, so move those up as well if they're close to the edge.`,
    questions: [
      {
        question: "What does the woman need?",
        options: [
          "Advice on formatting her margins",
          "A refund for a previous order",
          "Two bound copies by Friday",
          "An extension to her deadline",
        ],
        correctAnswer: "C",
        explanation: "She asks whether two bound copies by Friday are possible.",
      },
      {
        question: "What does the man warn her about?",
        options: [
          "The shop closes on Wednesday",
          "PDF files cannot be printed",
          "Binding costs extra at short notice",
          "Narrow margins will be cut off",
        ],
        correctAnswer: "D",
        explanation: "He tells her to check margins because anything under two centimetres gets cut by the binding.",
      },
    ],
  },
];

export const announcementScenarios2026: AnnouncementScenario[] = [
  {
    id: "AN_N001",
    context: "Workshop room change",
    setting: "Career centre",
    voice: "narrator",
    transcript: `Attention, everyone. The career centre workshop originally scheduled for the Hartley Building has been moved to Room 210 in the Student Union. Space is limited this term, so please register at the front desk by Thursday; walk-ins can't be accommodated. And don't forget to bring your student ID. You won't be able to enter the session without it.`,
    questions: [
      {
        question: "What is the main purpose of the announcement?",
        options: [
          "To announce a room change and registration requirements",
          "To cancel the career centre workshop",
          "To recruit volunteers for the Student Union",
          "To explain how to obtain a student ID",
        ],
        correctAnswer: "A",
        explanation: "The speaker announces the new room and then states the registration and ID requirements.",
      },
      {
        question: "What are listeners asked to do?",
        options: [
          "Arrive early at the Hartley Building",
          "Register by Thursday and bring a student ID",
          "Email the career centre before Thursday",
          "Sign in as a walk-in at Room 210",
        ],
        correctAnswer: "B",
        explanation: "Registration by Thursday at the front desk and bringing a student ID are both stated requirements.",
      },
    ],
  },
  {
    id: "AN_N002",
    context: "Laboratory safety briefing",
    setting: "Chemistry building",
    voice: "female_academic",
    transcript: `Before we begin, a reminder about the new bench rules. Safety glasses must be worn from the moment you enter, not just while you're working. Bags now go in the lockers outside; nothing on the floor by the benches. And if you break glassware, don't clear it yourself. Report it and we'll deal with it.`,
    questions: [
      {
        question: "What is the speaker mainly doing?",
        options: [
          "Explaining an experiment",
          "Announcing a change of room",
          "Reminding listeners of laboratory rules",
          "Describing how to use lockers",
        ],
        correctAnswer: "C",
        explanation: "The speaker introduces the talk as 'a reminder about the new bench rules' and lists them.",
      },
      {
        question: "What should students do if they break glassware?",
        options: [
          "Clear it up immediately",
          "Place it in a locker",
          "Wear safety glasses before touching it",
          "Report it and leave it",
        ],
        correctAnswer: "D",
        explanation: "The speaker says not to clear it yourself, but to report it so staff can deal with it.",
      },
    ],
  },
  {
    id: "AN_N003",
    context: "Library closure",
    setting: "University library",
    voice: "narrator",
    transcript: `The library will close at six this Friday rather than midnight while the heating system is replaced. Group study rooms are unaffected and can be booked as normal. If you need overnight access, the twenty-four hour reading room in the east wing stays open throughout, though printing there is card-only.`,
    questions: [
      {
        question: "Why will the library close early on Friday?",
        options: [
          "For heating system replacement work",
          "For a scheduled inspection",
          "Because of low weekend demand",
          "To allow staff training",
        ],
        correctAnswer: "A",
        explanation: "The speaker states the early closure is while the heating system is replaced.",
      },
      {
        question: "What is true of the twenty-four hour reading room?",
        options: [
          "It will also close at six",
          "It stays open but printing is card-only",
          "It must be booked in advance",
          "It is located in the west wing",
        ],
        correctAnswer: "B",
        explanation: "The announcement says the east wing reading room stays open throughout, with card-only printing.",
      },
    ],
  },
  {
    id: "AN_N004",
    context: "Field trip logistics",
    setting: "Geography department",
    voice: "male_academic",
    transcript: `A few practical points about Saturday's field trip. The coach leaves from the main gate at seven sharp; it will not wait. Bring waterproofs regardless of the forecast, since the site has no shelter. Lunch is provided, but tell me today if you have dietary requirements, because the caterer needs numbers by this evening.`,
    questions: [
      {
        question: "What is the main purpose of this announcement?",
        options: [
          "To describe the site the group will visit",
          "To explain why the trip was postponed",
          "To give practical instructions for a field trip",
          "To ask for volunteers to drive",
        ],
        correctAnswer: "C",
        explanation: "The speaker frames it as 'a few practical points' and gives departure, clothing and catering instructions.",
      },
      {
        question: "Why must students report dietary requirements today?",
        options: [
          "The coach has limited space",
          "The site has no shelter",
          "Lunch must be paid for in advance",
          "The caterer needs numbers this evening",
        ],
        correctAnswer: "D",
        explanation: "The speaker says to report them today because the caterer needs numbers by this evening.",
      },
    ],
  },
  {
    id: "AN_N005",
    context: "Shuttle service change",
    setting: "Campus transport",
    voice: "narrator",
    transcript: `From Monday the campus shuttle will run every twenty minutes instead of every ten. The change affects weekday services only; weekend timetables stay the same. If the reduced frequency makes you late for a scheduled class, speak to your department rather than to transport services, as they can arrange alternative travel support.`,
    questions: [
      {
        question: "What change is being announced?",
        options: [
          "The shuttle will run less frequently on weekdays",
          "The shuttle will stop running on weekends",
          "The shuttle will follow a new route",
          "The shuttle will become free of charge",
        ],
        correctAnswer: "A",
        explanation: "The frequency drops from every ten to every twenty minutes on weekdays only.",
      },
      {
        question: "Who should a student contact if the change makes them late for class?",
        options: [
          "Transport services",
          "Their department",
          "The shuttle driver",
          "The student union",
        ],
        correctAnswer: "B",
        explanation: "The announcement directs students to speak to their department rather than transport services.",
      },
    ],
  },
  {
    id: "AN_N006",
    context: "Museum exhibit opening",
    setting: "City museum",
    voice: "guide",
    transcript: `Welcome. The textile gallery reopens today after eighteen months of conservation work. Photography is permitted without flash, and the light levels are deliberately low to protect the dyes, so allow your eyes a moment to adjust. Handling boxes with sample fabrics are on the far wall, and those you are very welcome to touch.`,
    questions: [
      {
        question: "What is the speaker announcing?",
        options: [
          "The closure of the textile gallery",
          "A new photography policy for the whole museum",
          "The reopening of the textile gallery",
          "The start of conservation work",
        ],
        correctAnswer: "C",
        explanation: "The speaker says the gallery reopens today after eighteen months of conservation.",
      },
      {
        question: "Why are the light levels low?",
        options: [
          "To allow flash photography",
          "To reduce energy costs",
          "To highlight the handling boxes",
          "To protect the dyes",
        ],
        correctAnswer: "D",
        explanation: "The speaker explains the low light is deliberate, to protect the dyes.",
      },
    ],
  },
  {
    id: "AN_N007",
    context: "Exam room change",
    setting: "Examinations office",
    voice: "female_academic",
    transcript: `Candidates for Thursday's statistics paper: the venue has changed from the Sports Hall to Lecture Theatre C. Your seat number stays the same and will be displayed at the door. Arrive fifteen minutes early, as latecomers cannot be admitted once the paper has started. Calculators will be provided; do not bring your own.`,
    questions: [
      {
        question: "What has changed about Thursday's exam?",
        options: [
          "The venue",
          "The date",
          "The seat numbering system",
          "The subject of the paper",
        ],
        correctAnswer: "A",
        explanation: "The announcement states the venue moved from the Sports Hall to Lecture Theatre C.",
      },
      {
        question: "What are candidates told about calculators?",
        options: [
          "They must bring their own",
          "They will be provided",
          "They are not permitted at all",
          "They may be shared between candidates",
        ],
        correctAnswer: "B",
        explanation: "The speaker says calculators will be provided and students should not bring their own.",
      },
    ],
  },
  {
    id: "AN_N008",
    context: "Club fair",
    setting: "Student union",
    voice: "female_student_2",
    transcript: `Just a quick notice about the club fair on Wednesday. It's in the main hall from eleven to three, and there are over sixty societies with stalls this year. You can sign up on the day, but membership fees have to be paid online afterwards; the stalls can't take cash or cards. Bring a bag for the leaflets.`,
    questions: [
      {
        question: "What is the announcement mainly about?",
        options: [
          "A change to society membership fees",
          "The closure of the main hall",
          "Practical details of the club fair",
          "How to start a new society",
        ],
        correctAnswer: "C",
        explanation: "The speaker gives the time, place, scale and payment arrangements for the fair.",
      },
      {
        question: "How must membership fees be paid?",
        options: [
          "In cash at the stall",
          "By card at the stall",
          "At the student union office",
          "Online after the fair",
        ],
        correctAnswer: "D",
        explanation: "The speaker says fees have to be paid online afterwards because stalls cannot take cash or cards.",
      },
    ],
  },
  {
    id: "AN_N009",
    context: "Building maintenance",
    setting: "Halls of residence",
    voice: "narrator",
    transcript: `Residents of Block C: the water supply will be switched off on Tuesday between nine and one while a valve is replaced. Kitchens and bathrooms in Block C will be unusable during that window. Blocks A and B are unaffected, and their ground-floor kitchens will be open to Block C residents for the morning.`,
    questions: [
      {
        question: "What will happen on Tuesday morning?",
        options: [
          "The water supply to Block C will be switched off",
          "Block C will be closed to residents",
          "All three blocks will lose water",
          "A new kitchen will open in Block C",
        ],
        correctAnswer: "A",
        explanation: "The announcement states the water will be off in Block C from nine to one while a valve is replaced.",
      },
      {
        question: "What arrangement is offered to Block C residents?",
        options: [
          "A refund on their rent",
          "Use of ground-floor kitchens in Blocks A and B",
          "Temporary accommodation elsewhere",
          "Bottled water delivered to their rooms",
        ],
        correctAnswer: "B",
        explanation: "The speaker says the ground-floor kitchens in the unaffected blocks will be open to Block C residents.",
      },
    ],
  },
  {
    id: "AN_N010",
    context: "Volunteer recruitment",
    setting: "Community centre",
    voice: "male_student_2",
    transcript: `We're looking for volunteers for the reading scheme that runs in local primary schools. It's one hour a week during term, and no teaching experience is needed; there's a short training session first. What we do ask is that you commit for the full term, because the children are matched to the same reader each week.`,
    questions: [
      {
        question: "What is the speaker mainly doing?",
        options: [
          "Describing a new primary school",
          "Announcing a change to the training schedule",
          "Recruiting volunteers for a reading scheme",
          "Explaining how children are assessed",
        ],
        correctAnswer: "C",
        explanation: "The speaker opens by saying they are looking for volunteers for the reading scheme.",
      },
      {
        question: "Why must volunteers commit for a full term?",
        options: [
          "Training takes a whole term to complete",
          "Schools require a term's notice",
          "Volunteers are paid at the end of term",
          "Children are matched to the same reader each week",
        ],
        correctAnswer: "D",
        explanation: "The speaker explains the commitment is needed because children are matched to the same reader weekly.",
      },
    ],
  },
];

export const academicTalkScenarios2026: AcademicTalkScenario[] = [
  {
    id: "AT_N001",
    topic: "Structural colour",
    subject: "biology",
    voice: "female_academic",
    transcript: `When you look at a bright blue shirt, you're seeing colour made by pigment — molecules that absorb some wavelengths and reflect others. Over time, ultraviolet light breaks those molecules apart, which is why dyed fabric fades. But there's a second way to make colour, and it doesn't fade at all.
It's called structural colour, and it comes from the shape of a surface rather than from any pigment. Take the Morpho butterfly, famous for those brilliant blue wings. There is no blue pigment anywhere in them. Instead the scales are covered in microscopic ridges, spaced at just the right distance to reflect blue and cancel out everything else.
Here's the striking part. If you grind a Morpho wing into powder, the blue disappears completely — you get a dull brown dust — because you've destroyed the structure that was producing the colour.
Researchers are trying to copy this now, for paints and cosmetics and displays, precisely because a colour that comes from shape rather than chemistry doesn't fade.`,
    questions: [
      {
        question: "What is the talk mainly about?",
        options: [
          "The physical basis of structural colour",
          "How pigments are manufactured for clothing",
          "Why butterfly populations are declining",
          "The dangers of ultraviolet light",
        ],
        correctAnswer: "A",
        explanation: "The speaker contrasts pigment with structural colour and spends the talk explaining the latter.",
      },
      {
        question: "According to the speaker, why does dyed fabric fade?",
        options: [
          "Its ridges collapse under pressure",
          "Ultraviolet light breaks the pigment molecules apart",
          "It is washed too frequently",
          "It absorbs too much blue light",
        ],
        correctAnswer: "B",
        explanation: "The speaker states that ultraviolet light breaks those molecules apart, which is why dyed fabric fades.",
      },
      {
        question: "What happens when a Morpho wing is ground into powder?",
        options: [
          "It keeps its bright blue colour",
          "It releases a chemical dye",
          "It becomes dull brown because the structure is destroyed",
          "It reflects all wavelengths equally",
        ],
        correctAnswer: "C",
        explanation: "Grinding destroys the ridges that produce the colour, leaving dull brown dust.",
      },
      {
        question: "Why does the speaker mention paints, cosmetics and displays?",
        options: [
          "To list products that currently use pigments",
          "To argue that manufacturing is too expensive",
          "To describe historical uses of butterfly wings",
          "To show practical applications of structural colour",
        ],
        correctAnswer: "D",
        explanation: "They are given as the reason researchers are trying to copy the effect.",
      },
    ],
  },
  {
    id: "AT_N002",
    topic: "The winner's curse",
    subject: "economics",
    voice: "male_academic",
    transcript: `Here's a pattern economists noticed in auctions, and it's a bit counter-intuitive. When several bidders compete for something whose true value nobody knows for certain, the person who wins often ends up worse off than the people who lost. It's called the winner's curse.
The logic is simple once you see it. Every bidder forms a private estimate of what the item is worth. Some estimates are too low, some too high, a few about right. Now — the auction is won by whoever bids the most. So the winner is, almost by definition, the bidder whose estimate was the most optimistic. If the average estimate is close to the real value, the highest one sits above it. The winner overpays.
This was first documented among oil companies bidding for offshore drilling rights in the nineteen-seventies. The firms that won the most tracts weren't the most profitable ones. Several found the oil was worth less than they'd paid for the lease.
Experienced bidders protect themselves by shading their bids — deliberately bidding below their own estimate, and shading further as more competitors join. Yet the curse persists, partly because bidders rarely adjust for the simple fact that winning is itself evidence they were too optimistic.`,
    questions: [
      {
        question: "What is the main idea of the talk?",
        options: [
          "The winner of an auction has often overestimated the value",
          "Auctions with many bidders produce fairer prices",
          "Oil companies invented the sealed-bid auction",
          "Bidders should avoid auctions entirely",
        ],
        correctAnswer: "A",
        explanation: "The speaker defines the winner's curse and explains why the winning bid tends to be too high.",
      },
      {
        question: "According to the speaker, why is the winning bid likely to be too high?",
        options: [
          "Bidders inflate offers to intimidate rivals",
          "The winner is the most optimistic estimator",
          "Auctioneers set high reserve prices",
          "More bidders raise an item's true value",
        ],
        correctAnswer: "B",
        explanation: "The winner is by definition whoever estimated highest, and the highest estimate sits above the average.",
      },
      {
        question: "What does the speaker say about oil companies in the 1970s?",
        options: [
          "They stopped bidding for drilling rights",
          "They had unusually accurate estimates",
          "Winning more tracts did not make them more profitable",
          "They agreed to keep bids low",
        ],
        correctAnswer: "C",
        explanation: "The firms that won the most tracts were not the most profitable, and several overpaid.",
      },
      {
        question: "What does 'shading' a bid mean, as the speaker uses it?",
        options: [
          "Concealing a bid from competitors",
          "Delaying a bid until the last moment",
          "Repeating a previous bid",
          "Bidding below one's own estimate",
        ],
        correctAnswer: "D",
        explanation: "The speaker defines shading as deliberately bidding below your own estimate.",
      },
    ],
  },
  {
    id: "AT_N003",
    topic: "Why bridges sway",
    subject: "engineering",
    voice: "professor",
    transcript: `I want to talk about a failure that turned out to be more useful than a success. When the Millennium Bridge in London opened, it began to sway sideways almost immediately, and it was closed within two days.
The obvious explanation — that people were marching in step — turned out to be backwards. Nobody started in step. What happened was this: a small sideways movement, from wind or just from an uneven crowd, made walking slightly awkward. People instinctively adjusted their footing to stay balanced, and that adjustment happened to push the bridge in the direction it was already moving. Which made the sway larger. Which made more people adjust.
So the crowd didn't cause the movement and then amplify it. The movement recruited the crowd. Engineers call this synchronous lateral excitation, and the important point is that it only appears above a threshold number of pedestrians. Below that, nothing happens at all — which is exactly why the bridge passed its design checks.
The fix was straightforward once the mechanism was understood: dampers that absorb sideways energy. But the diagnosis is what mattered, and it changed how footbridges are assessed everywhere.`,
    questions: [
      {
        question: "What is the main purpose of the talk?",
        options: [
          "To explain the mechanism behind a bridge's sway and why it was missed",
          "To describe how dampers are manufactured",
          "To argue that the Millennium Bridge should not have been built",
          "To compare footbridges in different cities",
        ],
        correctAnswer: "A",
        explanation: "The speaker explains the feedback mechanism and why design checks did not catch it.",
      },
      {
        question: "According to the speaker, what actually caused the sway to grow?",
        options: [
          "Pedestrians deliberately marching in step",
          "Walkers adjusting their footing in a way that reinforced the motion",
          "Strong winds acting on the bridge deck",
          "A fault in the bridge's foundations",
        ],
        correctAnswer: "B",
        explanation: "People adjusted their footing to stay balanced, and that adjustment pushed the bridge the way it was already moving.",
      },
      {
        question: "Why did the bridge pass its design checks?",
        options: [
          "The checks were carried out incorrectly",
          "Dampers had already been installed",
          "The effect only appears above a threshold number of pedestrians",
          "The bridge was tested only in still air",
        ],
        correctAnswer: "C",
        explanation: "The speaker says the effect appears only above a threshold crowd size, so nothing shows below it.",
      },
      {
        question: "What does the speaker suggest was most valuable about the episode?",
        options: [
          "The speed of the repair",
          "The decision to close the bridge",
          "The design of the original structure",
          "The diagnosis of the mechanism",
        ],
        correctAnswer: "D",
        explanation: "The speaker says the fix was straightforward but 'the diagnosis is what mattered'.",
      },
    ],
  },
  {
    id: "AT_N004",
    topic: "How languages lose sounds",
    subject: "linguistics",
    voice: "female_academic",
    transcript: `If you compare English with German, you'll notice something odd about words like 'night' and 'Nacht', or 'light' and 'Licht'. English has a silent 'gh' exactly where German has a sound. That spelling isn't a mistake — it's a fossil. English used to have that sound too.
Sound change tends to work like this. A sound in a difficult position gets weakened, then reduced further, then disappears, and the spelling stays behind because writing is conservative. The whole process can take a few centuries.
What's interesting is that it's regular. It doesn't affect one word and skip another at random; it affects every word where the sound sits in the same environment. That regularity is what makes historical reconstruction possible. If you know the rule, you can work backwards from modern forms to earlier ones you have no written record of.
There are exceptions, of course. Very frequent words sometimes resist a change, and borrowings that arrived after a change had finished never underwent it at all. But those exceptions have explanations, and that's rather the point — they're not random either.`,
    questions: [
      {
        question: "What is the talk mainly about?",
        options: [
          "How and why sounds disappear from languages, and why that matters",
          "Differences between English and German vocabulary",
          "Why English spelling should be reformed",
          "How new words are borrowed between languages",
        ],
        correctAnswer: "A",
        explanation: "The speaker describes the process of sound loss and its regularity, then its use in reconstruction.",
      },
      {
        question: "According to the speaker, why does English keep the silent 'gh' in spelling?",
        options: [
          "Because the sound is still pronounced in some dialects",
          "Because writing is conservative and lags behind speech",
          "Because it was borrowed from German",
          "Because it distinguishes words that sound alike",
        ],
        correctAnswer: "B",
        explanation: "The speaker says the spelling stays behind because writing is conservative.",
      },
      {
        question: "Why is the regularity of sound change important?",
        options: [
          "It makes languages easier to learn",
          "It prevents new words from being borrowed",
          "It allows earlier forms to be reconstructed",
          "It explains why spelling is difficult",
        ],
        correctAnswer: "C",
        explanation: "The speaker says regularity is what makes historical reconstruction possible.",
      },
      {
        question: "What does the speaker say about exceptions?",
        options: [
          "They occur completely at random",
          "They only occur in German",
          "They disprove the idea of regular change",
          "They have explanations, such as word frequency or late borrowing",
        ],
        correctAnswer: "D",
        explanation: "Frequent words may resist change and late borrowings never underwent it - the exceptions are explicable.",
      },
    ],
  },
  {
    id: "AT_N005",
    topic: "Salt marshes and coastal defence",
    subject: "earth science",
    voice: "male_academic",
    transcript: `When we think about defending a coastline, we tend to think about walls. But there's a growing case for doing part of the job with mud and grass.
A salt marsh sits between the sea and the land, and it does two things a wall doesn't. First, the vegetation drags on incoming water — friction, essentially — so a wave crossing a hundred metres of marsh arrives at the shore substantially smaller. Second, the marsh traps sediment. As sea level rises, a healthy marsh can build itself upward, which no concrete structure does.
There's a catch, and it's an important one. That upward growth depends on a sediment supply. Where rivers have been dammed upstream, the sediment never arrives, and the marsh drowns in place rather than keeping pace.
So marshes aren't a replacement for engineered defences everywhere. What the evidence supports is something narrower and more useful: where sediment is available, a marsh in front of a wall lets you build a lower, cheaper wall — and unlike the wall, the marsh gets better with age rather than worse.`,
    questions: [
      {
        question: "What is the main idea of the talk?",
        options: [
          "Salt marshes can reduce wave energy and build upward, where sediment allows",
          "Salt marshes should replace all sea walls",
          "Dams upstream are the main cause of coastal flooding",
          "Concrete defences are cheaper than natural ones",
        ],
        correctAnswer: "A",
        explanation: "The speaker sets out two advantages, states the sediment condition, and gives a narrow conclusion.",
      },
      {
        question: "According to the speaker, how does marsh vegetation reduce wave size?",
        options: [
          "By absorbing water into the soil",
          "By creating friction that drags on incoming water",
          "By reflecting waves back out to sea",
          "By trapping sediment on the wave surface",
        ],
        correctAnswer: "B",
        explanation: "The speaker describes the vegetation dragging on the water - friction - so waves arrive smaller.",
      },
      {
        question: "What happens to a marsh where rivers have been dammed upstream?",
        options: [
          "It grows upward more quickly",
          "It traps more sediment than usual",
          "It drowns because sediment does not arrive",
          "It becomes a permanent wall",
        ],
        correctAnswer: "C",
        explanation: "Without sediment supply the marsh cannot build upward and drowns in place.",
      },
      {
        question: "What is the speaker's overall conclusion?",
        options: [
          "Marshes are effective on every coastline",
          "Sea walls should be removed entirely",
          "Sediment supply is impossible to restore",
          "Marshes let you build a lower, cheaper wall where sediment is available",
        ],
        correctAnswer: "D",
        explanation: "The speaker calls the supportable claim 'narrower and more useful' and states exactly this.",
      },
    ],
  },
];
