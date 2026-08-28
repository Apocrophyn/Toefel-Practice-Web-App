// TOEFL iBT 2026 — Reading: "Read an Academic Passage"
//
// Exam-exact replacement bank. Authored against the official ETS 2026 blueprint
// (docs/toefl-2026/ets-official-blueprint.md) and src/data/toefl-2026-blueprint.ts:
//   - Stimulus ceiling: 200 words ("more complex texts may extend to 200 words").
//   - Text stays visible while the test taker answers, so items may probe any part of it.
//   - Task measures main ideas, key details, inferred meanings, idea relationships and
//     rhetorical structures -> each set carries exactly 5 items covering those skills.
//   - Complexity calibrated to Flesch-Kincaid: medium 7.4-10.5, high 10.5-20.0.
//
// Encoding note: `correctAnswer` stores the FULL TEXT of the correct option and must
// match one entry of `options` exactly. This mirrors src/data/questions/reading-bank.ts
// so the existing renderer works unchanged.

export type AcademicSkill =
  | "main_idea"
  | "detail"
  | "inference"
  | "vocabulary"
  | "rhetorical_purpose";

export type AcademicCefr = "B1" | "B2" | "C1" | "C2";

export type AcademicDifficulty = "medium" | "hard";

export interface AcademicPassageQuestion {
  id: string;
  question: string;
  options: string[];
  /** Full text of the correct option. Matches one entry of `options` exactly. */
  correctAnswer: string;
  explanation: string;
  skill: AcademicSkill;
}

export interface AcademicPassageSet {
  id: string;
  taskType: "read_an_academic_passage";
  /** Specific subject of the passage. Unique across the bank. */
  topic: string;
  /** Broad academic domain the topic belongs to. */
  domain: string;
  title: string;
  passage: string;
  wordCount: number;
  difficulty: AcademicDifficulty;
  cefr: AcademicCefr;
  questions: AcademicPassageQuestion[];
}

export const academicPassageSets: AcademicPassageSet[] = [
  {
    id: "AP_001",
    taskType: "read_an_academic_passage",
    topic: "Honeybee communication",
    domain: "life sciences",
    title: "How Honeybees Share Directions",
    passage: `When a honeybee returns to the hive after finding a rich patch of flowers, it does not simply rest. Inside the dark hive, the bee walks a short straight line across the vertical comb, shaking its body from side to side, and then loops back to repeat the movement. Other workers crowd around it and follow the pattern closely.

The details of this dance carry information. The direction of the straight run, measured against gravity, indicates the direction of the flowers relative to the sun. The length of the run indicates distance: a longer run means a longer flight. Bees that have followed the dance then leave the hive and search in the area it describes.

Researchers tested this by moving a feeder to new locations and watching how the dance changed. The pattern shifted in a predictable way each time, and the recruits arrived near the new feeder rather than the old one. The dance therefore works as a compact set of instructions rather than as a general signal of excitement.`,
    wordCount: 0,
    difficulty: "medium",
    cefr: "B2",
    questions: [
      {
        id: "AP_001_Q1",
        question: "What is the main idea of the passage?",
        options: [
          "Honeybees rest inside the hive after returning from a long flight.",
          "A returning bee's dance tells other workers where to find flowers.",
          "Honeybees use gravity rather than the sun to find their way home.",
          "Researchers have been unable to explain why honeybees dance.",
        ],
        correctAnswer: "A returning bee's dance tells other workers where to find flowers.",
        explanation:
          "The passage says the details of the dance carry information about direction and distance, and that the dance works as a compact set of instructions.",
        skill: "main_idea",
      },
      {
        id: "AP_001_Q2",
        question: "According to the passage, what does the length of the straight run indicate?",
        options: [
          "How many flowers are growing in the patch",
          "The angle of the sun above the horizon",
          "How many workers should leave the hive",
          "How far away the flowers are",
        ],
        correctAnswer: "How far away the flowers are",
        explanation:
          "The passage states that the length of the run indicates distance, and that a longer run means a longer flight.",
        skill: "detail",
      },
      {
        id: "AP_001_Q3",
        question: "According to the passage, the direction of the straight run is measured against",
        options: ["gravity.", "the hive entrance.", "the shape of the comb.", "the other workers."],
        correctAnswer: "gravity.",
        explanation:
          "The passage says the direction of the straight run is measured against gravity and indicates where the flowers lie relative to the sun.",
        skill: "detail",
      },
      {
        id: "AP_001_Q4",
        question: "It can be inferred from the passage that the inside of the hive",
        options: [
          "contains flowers that workers have carried home.",
          "is too crowded for a bee to move freely.",
          "gives the bees no view of the sun.",
          "is warmer than the air outside.",
        ],
        correctAnswer: "gives the bees no view of the sun.",
        explanation:
          "The hive is described as dark, and direction has to be encoded against gravity rather than the sun itself, which implies the sun cannot be seen from inside.",
        skill: "inference",
      },
      {
        id: "AP_001_Q5",
        question: "Why does the author mention moving a feeder to new locations?",
        options: [
          "To show that bees prefer feeders to natural flowers",
          "To explain why some recruits fail to find the food",
          "To describe how a hive is constructed",
          "To show how the accuracy of the dance was tested",
        ],
        correctAnswer: "To show how the accuracy of the dance was tested",
        explanation:
          "The feeder was moved so that researchers could see whether the dance changed predictably; the recruits then arrived near the new feeder.",
        skill: "rhetorical_purpose",
      },
    ],
  },
  {
    id: "AP_002",
    taskType: "read_an_academic_passage",
    topic: "Density of water and ice",
    domain: "physical sciences",
    title: "Water and the Behaviour of Ice",
    passage: `Most liquids become denser as they cool. Their molecules slow down, move closer together and pack more tightly, so the solid form sinks in the liquid form. Water behaves in this way too, but only down to about four degrees Celsius. Below that temperature it begins to expand again, and when it freezes it expands sharply.

The reason lies in the shape of the water molecule and in the weak bonds between one molecule and the next. As water cools toward freezing, these bonds lock the molecules into an open, six-sided arrangement with wide gaps inside it. The same number of molecules then occupies more room, so ice is about nine percent less dense than the water around it.

This unusual property has large effects. Ice forms at the surface of a lake rather than at the bottom, and the layer that forms slows the further cooling of the water below it. Fish and other organisms can therefore pass the winter in liquid water beneath the ice.`,
    wordCount: 0,
    difficulty: "medium",
    cefr: "B1",
    questions: [
      {
        id: "AP_002_Q1",
        question: "The passage is mainly concerned with",
        options: [
          "why ice is less dense than liquid water and what follows from that.",
          "the freezing points of several common liquids.",
          "the way fish survive in cold lakes.",
          "how molecules move in warm liquids.",
        ],
        correctAnswer: "why ice is less dense than liquid water and what follows from that.",
        explanation:
          "The passage explains the open six-sided arrangement that makes ice less dense and then describes the consequences for lakes and the organisms in them.",
        skill: "main_idea",
      },
      {
        id: "AP_002_Q2",
        question: "According to the passage, water stops becoming denser at about",
        options: [
          "zero degrees Celsius.",
          "nine degrees Celsius.",
          "four degrees Celsius.",
          "the moment it freezes.",
        ],
        correctAnswer: "four degrees Celsius.",
        explanation:
          "The passage says water behaves like other liquids only down to about four degrees Celsius, below which it begins to expand again.",
        skill: "detail",
      },
      {
        id: "AP_002_Q3",
        question: "According to the passage, ice is about nine percent",
        options: [
          "warmer than the surrounding water.",
          "less dense than the water around it.",
          "harder than most other solids.",
          "thicker at the edges of a lake.",
        ],
        correctAnswer: "less dense than the water around it.",
        explanation:
          "The passage states directly that the open arrangement makes ice about nine percent less dense than the water around it.",
        skill: "detail",
      },
      {
        id: "AP_002_Q4",
        question: 'In the passage, the word "open" is closest in meaning to',
        options: ["unprotected.", "undecided.", "welcoming.", "widely spaced."],
        correctAnswer: "widely spaced.",
        explanation:
          "The arrangement is described as open, with wide gaps inside it, so the molecules are spaced far apart.",
        skill: "vocabulary",
      },
      {
        id: "AP_002_Q5",
        question: "It can be inferred that a lake would freeze from the bottom upward if",
        options: [
          "ice were denser than liquid water.",
          "the air above it were much colder.",
          "the lake were deeper than usual.",
          "no fish were living in the water.",
        ],
        correctAnswer: "ice were denser than liquid water.",
        explanation:
          "The passage links surface freezing to ice being less dense than water; reversing that relationship would make the solid sink instead.",
        skill: "inference",
      },
    ],
  },
  {
    id: "AP_003",
    taskType: "read_an_academic_passage",
    topic: "River delta formation",
    domain: "earth and environmental science",
    title: "The Formation of River Deltas",
    passage: `A river carries sediment, made up of sand, silt and clay that it has stripped from the land upstream. As long as the current is fast, the water keeps these particles suspended. When the river meets a lake or a sea the current slows abruptly and loses the energy needed to carry its load. The heaviest grains settle first and the finest travel farthest, and over time the deposits build outward into a fan of new land called a delta.

The shape of a delta depends on the balance between the river and the body of water it enters. Where waves are weak and tides are small, the river dominates and the delta pushes out in long fingers. Where waves are strong, they rework the sediment into smooth beaches and the delta takes on a rounded front.

Deltas are among the most fertile places on earth, because each flood renews the soil. They are also among the most fragile, since dams upstream can starve them of the sediment that sustains them.`,
    wordCount: 0,
    difficulty: "medium",
    cefr: "B2",
    questions: [
      {
        id: "AP_003_Q1",
        question: "What is the passage mainly about?",
        options: [
          "The crops that are grown on fertile floodplains",
          "The effect of tides on ocean beaches",
          "How deltas form and what determines their shape",
          "The reasons dams are built on large rivers",
        ],
        correctAnswer: "How deltas form and what determines their shape",
        explanation:
          "The first paragraph explains how sediment is deposited to build a delta and the second explains what governs its shape.",
        skill: "main_idea",
      },
      {
        id: "AP_003_Q2",
        question: "According to the passage, what happens when a river reaches a lake or a sea?",
        options: [
          "Its current slows and it drops the sediment it was carrying.",
          "Its channel becomes deeper and narrower.",
          "Its water becomes clearer further upstream.",
          "Its sediment dissolves in the salt water.",
        ],
        correctAnswer: "Its current slows and it drops the sediment it was carrying.",
        explanation:
          "The passage says the current slows abruptly and loses the energy needed to carry its load, so the particles settle.",
        skill: "detail",
      },
      {
        id: "AP_003_Q3",
        question: "According to the passage, deltas with long finger-like extensions form where",
        options: [
          "tides are unusually strong.",
          "the river carries only clay.",
          "floods occur very rarely.",
          "waves are weak and tides are small.",
        ],
        correctAnswer: "waves are weak and tides are small.",
        explanation:
          "The passage states that where waves are weak and tides are small the river dominates and the delta pushes out in long fingers.",
        skill: "detail",
      },
      {
        id: "AP_003_Q4",
        question: "It can be inferred from the passage that a delta below a large dam is likely to",
        options: [
          "receive more silt every year.",
          "grow more slowly or begin to shrink.",
          "develop much stronger tides.",
          "support a greater number of fish.",
        ],
        correctAnswer: "grow more slowly or begin to shrink.",
        explanation:
          "The passage warns that dams upstream can starve a delta of the sediment that sustains it, and deltas are built by that sediment.",
        skill: "inference",
      },
      {
        id: "AP_003_Q5",
        question: "Why does the author mention that the heaviest grains settle first?",
        options: [
          "To argue that sand is more valuable than clay",
          "To show that rivers flow faster near the sea",
          "To explain how sediment becomes sorted as a delta builds",
          "To describe the depth of the seabed offshore",
        ],
        correctAnswer: "To explain how sediment becomes sorted as a delta builds",
        explanation:
          "The detail is paired with the statement that the finest particles travel farthest, which describes how the deposits are sorted across the fan.",
        skill: "rhetorical_purpose",
      },
    ],
  },
  {
    id: "AP_004",
    taskType: "read_an_academic_passage",
    topic: "Spread of papermaking",
    domain: "history",
    title: "The Spread of Papermaking",
    passage: `Paper was first made in East Asia from plant fibres that were beaten in water, lifted on a screen and dried into a thin sheet. For several centuries the technique remained regional. It travelled westward slowly, carried by merchants and by craftworkers who moved between cities, and mills appeared first in Central Asia, then in the Middle East and eventually around the Mediterranean.

Wherever it arrived, papermaking was adapted to local materials. Where the traditional fibres were scarce, workers used linen and cotton rags collected from households, which produced a strong, smooth sheet. Hammers driven by water power replaced beating by hand, and production rose.

The consequences reached well beyond writing. Paper was far cheaper than parchment, which was made from animal skin and required many animals for a single large book. Records that had once been kept only for the most important transactions could now be kept routinely, and administrations, merchants and schools all expanded their use of written documents.`,
    wordCount: 0,
    difficulty: "medium",
    cefr: "B2",
    questions: [
      {
        id: "AP_004_Q1",
        question: "What is the main idea of the passage?",
        options: [
          "Paper replaced parchment because it lasted longer.",
          "Water power was the most important invention of the period.",
          "Merchants continued to prefer parchment for important records.",
          "Papermaking spread westward, was adapted locally and had wide effects.",
        ],
        correctAnswer: "Papermaking spread westward, was adapted locally and had wide effects.",
        explanation:
          "The three paragraphs trace the westward movement of the technique, its adaptation to local materials, and its consequences for record keeping.",
        skill: "main_idea",
      },
      {
        id: "AP_004_Q2",
        question:
          "According to the passage, papermakers in some regions used linen and cotton rags because",
        options: [
          "the rags were stronger than any other material.",
          "the traditional fibres were hard to obtain.",
          "parchment had been forbidden by law.",
          "households were required to supply them.",
        ],
        correctAnswer: "the traditional fibres were hard to obtain.",
        explanation:
          "The passage says rags were used where the traditional fibres were scarce; their strength is a result, not the reason.",
        skill: "detail",
      },
      {
        id: "AP_004_Q3",
        question: "According to the passage, what replaced the beating of fibres by hand?",
        options: [
          "Screens of woven wire",
          "Chemical treatment of the pulp",
          "Hammers driven by water power",
          "Drying in specially heated rooms",
        ],
        correctAnswer: "Hammers driven by water power",
        explanation:
          "The passage states that hammers driven by water power replaced beating by hand and that production rose as a result.",
        skill: "detail",
      },
      {
        id: "AP_004_Q4",
        question: "It can be inferred from the passage that parchment was expensive mainly because",
        options: [
          "it required large numbers of animals.",
          "it could be produced in only one region.",
          "it was taxed by most administrations.",
          "it took much longer to write on.",
        ],
        correctAnswer: "it required large numbers of animals.",
        explanation:
          "Parchment is described as made from animal skin, with many animals needed for a single large book, which explains its cost relative to paper.",
        skill: "inference",
      },
      {
        id: "AP_004_Q5",
        question: 'In the passage, the word "routinely" is closest in meaning to',
        options: ["in secret.", "as a matter of course.", "at great expense.", "with official approval."],
        correctAnswer: "as a matter of course.",
        explanation:
          "The contrast is with records kept only for the most important transactions, so routinely means as an ordinary and regular practice.",
        skill: "vocabulary",
      },
    ],
  },
  {
    id: "AP_005",
    taskType: "read_an_academic_passage",
    topic: "Adoption of oil paint",
    domain: "art history",
    title: "The Adoption of Oil Paint",
    passage: `Before oil became common, painters in many workshops mixed their pigments with egg yolk. The resulting paint dried within minutes. It produced clear, luminous colour, but it forced the painter to work in small strokes and made blending one tone into another difficult once the surface had set.

Oil, usually pressed from linseed, dries slowly by reacting with the air rather than by evaporating. A painter could return to the same passage over several days, softening an edge, adjusting a shadow, or laying a thin transparent layer over a dried one so that light passed through it and returned from below. Colours gained depth, and surfaces could imitate velvet, metal and skin.

The change altered the practice of painting as much as its appearance. A composition could be revised while the work was under way, and the finished picture no longer had to be planned in full before the first stroke. Workshops also found that oil paint held up better on canvas, which was lighter and easier to transport than a wooden panel.`,
    wordCount: 0,
    difficulty: "medium",
    cefr: "B2",
    questions: [
      {
        id: "AP_005_Q1",
        question: "What is the main idea of the passage?",
        options: [
          "Oil paint changed both the look of paintings and the way they were made.",
          "Egg-based paint produced brighter colour than oil paint could.",
          "Canvas replaced wooden panels for reasons of cost alone.",
          "Linseed oil was difficult for most workshops to obtain.",
        ],
        correctAnswer: "Oil paint changed both the look of paintings and the way they were made.",
        explanation:
          "The passage describes new visual effects and then states that the change altered the practice of painting as much as its appearance.",
        skill: "main_idea",
      },
      {
        id: "AP_005_Q2",
        question: "According to the passage, oil paint dries by",
        options: [
          "evaporating quickly in warm air.",
          "soaking into the surface of the canvas.",
          "hardening under a strong light.",
          "reacting with the air.",
        ],
        correctAnswer: "reacting with the air.",
        explanation:
          "The passage says oil dries slowly by reacting with the air rather than by evaporating.",
        skill: "detail",
      },
      {
        id: "AP_005_Q3",
        question: "According to the passage, one disadvantage of egg-based paint was that it",
        options: [
          "produced dull and lifeless colour.",
          "made blending one tone into another difficult.",
          "could not be used on wooden panels.",
          "darkened badly within a few years.",
        ],
        correctAnswer: "made blending one tone into another difficult.",
        explanation:
          "The passage notes that the paint dried within minutes and that blending was difficult once the surface had set.",
        skill: "detail",
      },
      {
        id: "AP_005_Q4",
        question: "It can be inferred that painters using egg-based paint had to",
        options: [
          "work only in strong daylight.",
          "avoid painting human figures.",
          "plan a composition carefully in advance.",
          "use canvas rather than a wooden panel.",
        ],
        correctAnswer: "plan a composition carefully in advance.",
        explanation:
          "The passage says that with oil a composition could be revised while work was under way and no longer had to be planned in full beforehand, which implies the earlier method required such planning.",
        skill: "inference",
      },
      {
        id: "AP_005_Q5",
        question: "Why does the author mention velvet, metal and skin?",
        options: [
          "To list the materials from which pigments were made",
          "To identify subjects that workshops refused to paint",
          "To explain why canvas was easier to transport",
          "To give examples of surfaces that oil paint could convincingly imitate",
        ],
        correctAnswer: "To give examples of surfaces that oil paint could convincingly imitate",
        explanation:
          "The three materials follow the statement that colours gained depth, illustrating what the new medium could reproduce.",
        skill: "rhetorical_purpose",
      },
    ],
  },
  {
    id: "AP_006",
    taskType: "read_an_academic_passage",
    topic: "Shell middens",
    domain: "archaeology",
    title: "Reading a Shell Midden",
    passage: `Along many coastlines there are low mounds made almost entirely of discarded shells. These deposits, called middens, accumulated where people gathered shellfish, ate them and threw the empty shells aside, often over hundreds or thousands of years. To a passing visitor a midden may look like a natural bank of broken shell, but its contents are ordered by time, with the oldest material at the bottom.

Because shell is rich in calcium carbonate, water moving through the mound stays slightly alkaline. Bone, antler and fish scales, which decay quickly in most acidic soils, are preserved here in unusual detail. Middens therefore hold evidence that is simply missing from many inland sites.

The shells themselves also record the seasons. Like trees, many species add growth bands, and the outermost band shows the time of year at which the animal was collected. By sampling shells from several layers, researchers can determine whether a shore was visited all year or only in particular months, and whether that pattern changed.`,
    wordCount: 0,
    difficulty: "medium",
    cefr: "B2",
    questions: [
      {
        id: "AP_006_Q1",
        question: "What is the main idea of the passage?",
        options: [
          "Shell middens are natural formations shaped by waves.",
          "Shellfish were the main food of all coastal peoples.",
          "Middens preserve and organise evidence about coastal life in the past.",
          "Calcium carbonate makes coastal soils more acidic.",
        ],
        correctAnswer: "Middens preserve and organise evidence about coastal life in the past.",
        explanation:
          "The passage stresses that a midden is ordered by time, preserves fragile material and records the seasons of collection.",
        skill: "main_idea",
      },
      {
        id: "AP_006_Q2",
        question: "According to the passage, why is bone unusually well preserved in a midden?",
        options: [
          "The mounds remain permanently dry.",
          "The shells keep the water passing through slightly alkaline.",
          "The bone was deliberately buried by the inhabitants.",
          "Salt from the sea prevents all decay.",
        ],
        correctAnswer: "The shells keep the water passing through slightly alkaline.",
        explanation:
          "The passage links the calcium carbonate in shell to alkaline water, and contrasts this with the acidic soils in which bone decays quickly.",
        skill: "detail",
      },
      {
        id: "AP_006_Q3",
        question: "According to the passage, the outermost growth band of a shell indicates",
        options: [
          "the season in which the animal was collected.",
          "the depth of water in which the animal lived.",
          "the age of the midden as a whole.",
          "the species to which the shellfish belongs.",
        ],
        correctAnswer: "the season in which the animal was collected.",
        explanation:
          "The passage states that the outermost band shows the time of year at which the animal was collected.",
        skill: "detail",
      },
      {
        id: "AP_006_Q4",
        question: "It can be inferred from the passage that inland sites of a similar age",
        options: [
          "contain more shell than coastal sites do.",
          "are usually much larger than middens.",
          "were occupied only during the summer.",
          "often lack surviving bone and antler.",
        ],
        correctAnswer: "often lack surviving bone and antler.",
        explanation:
          "Bone and antler decay quickly in acidic soils and middens hold evidence that is missing from many inland sites.",
        skill: "inference",
      },
      {
        id: "AP_006_Q5",
        question: "Why does the author compare shells to trees?",
        options: [
          "To suggest that middens formed inside forests",
          "To explain that both are made of carbonate",
          "To introduce the idea that shells add growth bands",
          "To argue that both decay at the same rate",
        ],
        correctAnswer: "To introduce the idea that shells add growth bands",
        explanation:
          "The comparison is used to establish that many shellfish species, like trees, lay down bands that can be read.",
        skill: "rhetorical_purpose",
      },
    ],
  },
  {
    id: "AP_007",
    taskType: "read_an_academic_passage",
    topic: "The spacing effect in learning",
    domain: "psychology",
    title: "Spacing and Memory",
    passage: `Students preparing for an examination often study a topic in one long session. The material feels familiar by the end, and that feeling is easily mistaken for learning. Tests given several days later usually tell a different story.

In a typical experiment, two groups study the same set of items for the same total number of minutes. One group works in a single block; the other spreads the same minutes across several days. Immediately afterwards, the group that worked in one block often performs slightly better. After a week, the group that spread its study performs far better, and the gap grows as the delay increases.

One explanation is that a small amount of forgetting is useful. When time passes between sessions, the learner has to retrieve the material rather than simply read it again, and each successful retrieval strengthens the memory. Studying without a break offers no such opportunity, because the information is still fully available in mind. Difficulty during practice, on this view, is not a sign of failure.`,
    wordCount: 0,
    difficulty: "medium",
    cefr: "B1",
    questions: [
      {
        id: "AP_007_Q1",
        question: "What is the main idea of the passage?",
        options: [
          "A single long study session is the most efficient way to prepare.",
          "Spreading study over time produces better long-term memory.",
          "Examinations are a poor way of measuring what has been learned.",
          "Forgetting always damages performance on a later test.",
        ],
        correctAnswer: "Spreading study over time produces better long-term memory.",
        explanation:
          "The experiment described shows the spaced group performing far better after a week, and the passage explains why.",
        skill: "main_idea",
      },
      {
        id: "AP_007_Q2",
        question:
          "According to the passage, immediately after studying, the group that worked in one block",
        options: [
          "performed slightly better.",
          "performed a great deal worse.",
          "performed exactly the same.",
          "refused to take the test.",
        ],
        correctAnswer: "performed slightly better.",
        explanation:
          "The passage says the massed group often performs slightly better immediately afterwards, and only later falls behind.",
        skill: "detail",
      },
      {
        id: "AP_007_Q3",
        question:
          "According to the passage, what happens to the difference between the two groups as more time passes?",
        options: [
          "It disappears entirely.",
          "It reverses a second time.",
          "It stays exactly the same.",
          "It becomes larger.",
        ],
        correctAnswer: "It becomes larger.",
        explanation:
          "The passage states that the gap grows as the delay increases.",
        skill: "detail",
      },
      {
        id: "AP_007_Q4",
        question:
          "It can be inferred that the feeling of familiarity at the end of a long session",
        options: [
          "proves that the material has been learned.",
          "occurs only in weaker students.",
          "is an unreliable guide to later performance.",
          "is caused by anxiety about the test.",
        ],
        correctAnswer: "is an unreliable guide to later performance.",
        explanation:
          "The passage says the feeling is easily mistaken for learning and that later tests tell a different story.",
        skill: "inference",
      },
      {
        id: "AP_007_Q5",
        question: 'In the passage, the word "retrieve" is closest in meaning to',
        options: [
          "bring back to mind.",
          "write down carefully.",
          "look up a second time.",
          "explain to another person.",
        ],
        correctAnswer: "bring back to mind.",
        explanation:
          "Retrieval is contrasted with simply reading the material again, so it refers to recalling it from memory.",
        skill: "vocabulary",
      },
    ],
  },
  {
    id: "AP_008",
    taskType: "read_an_academic_passage",
    topic: "Origins of money",
    domain: "economics",
    title: "From Barter to Money",
    passage: `In an economy without money, every exchange requires that two people each want what the other has to offer. A baker who needs shoes must find a shoemaker who happens to want bread, and who wants it today rather than next month. Economists call this requirement the double coincidence of wants, and it makes trade slow and limits how far it can spread.

A commodity that everyone is willing to accept solves the problem. Grain, salt, cattle and metal have all served in this role. The baker sells bread for the accepted commodity and later exchanges it for shoes; the shoemaker need never want bread at all.

Useful money has particular physical properties. It should not spoil, so that value can be stored; it should be divisible, so that small purchases are possible; and it should be reasonably scarce, since if too much of it circulates each unit will buy less. Metals meet these conditions well, which is one reason they were adopted so widely.`,
    wordCount: 0,
    difficulty: "medium",
    cefr: "B2",
    questions: [
      {
        id: "AP_008_Q1",
        question: "What is the main idea of the passage?",
        options: [
          "Metal is the only material that has ever served as money.",
          "Bakers and shoemakers rarely traded with one another.",
          "Economies based on barter grow faster than those using money.",
          "Money removes an obstacle that limits barter.",
        ],
        correctAnswer: "Money removes an obstacle that limits barter.",
        explanation:
          "The passage sets out the double coincidence of wants as a limit on barter and then shows how an accepted commodity solves it.",
        skill: "main_idea",
      },
      {
        id: "AP_008_Q2",
        question: "According to the passage, the double coincidence of wants means that",
        options: [
          "prices must be agreed before any exchange.",
          "two goods must be of roughly equal weight.",
          "each trader must want what the other is offering.",
          "an exchange must be completed on the same day.",
        ],
        correctAnswer: "each trader must want what the other is offering.",
        explanation:
          "The passage defines the term immediately after stating that every exchange requires that two people each want what the other has to offer.",
        skill: "detail",
      },
      {
        id: "AP_008_Q3",
        question: "According to the passage, why should money be divisible?",
        options: [
          "So that it can be stored for long periods",
          "So that small purchases are possible",
          "So that it can be carried easily",
          "So that it will not lose its value",
        ],
        correctAnswer: "So that small purchases are possible",
        explanation:
          "The passage lists divisibility and gives its reason directly: so that small purchases are possible.",
        skill: "detail",
      },
      {
        id: "AP_008_Q4",
        question:
          "It can be inferred from the passage that if a commodity used as money became very plentiful,",
        options: [
          "each unit of it would buy less.",
          "trade would stop completely.",
          "barter would become impossible.",
          "it would begin to spoil faster.",
        ],
        correctAnswer: "each unit of it would buy less.",
        explanation:
          "The passage says money should be reasonably scarce, since if too much of it circulates each unit will buy less.",
        skill: "inference",
      },
      {
        id: "AP_008_Q5",
        question: "Why does the author mention grain, salt, cattle and metal?",
        options: [
          "To show which goods were the hardest to transport",
          "To give examples of commodities that have served as money",
          "To explain why bread had little value",
          "To compare farming with mining",
        ],
        correctAnswer: "To give examples of commodities that have served as money",
        explanation:
          "The list follows the claim that a commodity everyone accepts solves the problem, and illustrates what such commodities have been.",
        skill: "rhetorical_purpose",
      },
    ],
  },
];
