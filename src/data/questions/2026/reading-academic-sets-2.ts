// TOEFL iBT 2026 - Reading: "Read an Academic Passage" (bank 2)
//
// Authored against the ETS 2026 stimulus limits: 160-200 words (ceiling 200),
// exactly 5 single-select 4-option items per passage, covering main idea, key
// detail, inferred meaning and either vocabulary-in-context or rhetorical
// purpose. No insert-a-sentence, prose-summary or multi-select formats - those
// were removed in the 2026 update.
//
// The legacy bank carried ONE question per ~230-word passage, which is neither
// the exam's shape nor an efficient use of a test taker's reading time.
//
// Encoding: `correctAnswer` holds the FULL TEXT of the correct option, matching
// one entry of `options` exactly, as in reading-academic-sets.ts.

import type { AcademicPassageSet } from "@/data/questions/2026/reading-academic-sets";

export const academicPassageSets2: AcademicPassageSet[] = [
  {
    id: "AP_009",
    taskType: "read_an_academic_passage",
    topic: "Lichen as an environmental indicator",
    domain: "life sciences",
    title: "Reading the Air Through Lichens",
    passage: `A lichen is not a single organism. It is a partnership between a fungus, which provides structure and anchors the whole to a surface, and an alga or bacterium, which produces food through photosynthesis. Because a lichen has no roots and no protective outer skin, it takes in water and dissolved gases directly from the air across its entire surface.

That absence of a barrier makes lichens unusually sensitive to what the air carries. Sulphur dioxide, released when coal burns, dissolves into the moisture held in a lichen and damages the photosynthetic partner. Species differ in how much they can tolerate, and the bushy, branching forms are among the first to disappear.

Surveyors have used this pattern for more than a century. By recording which species grow on trees and walls at different distances from a city centre, they can map air quality without instruments. In several European cities, lichens returned to districts they had abandoned once coal use declined, and the sequence of their return tracked the fall in measured sulphur levels closely.`,
    wordCount: 174,
    difficulty: "medium",
    cefr: "B2",
    questions: [
      {
        id: "AP_009_Q1",
        question: "What is the main idea of the passage?",
        options: [
          "The structure of lichens makes them useful for measuring air quality.",
          "Lichens are a partnership between a fungus and a photosynthetic partner.",
          "Coal burning has been the main source of urban air pollution.",
          "Surveyors prefer lichen mapping to instrument-based measurement.",
        ],
        correctAnswer: "The structure of lichens makes them useful for measuring air quality.",
        explanation: "The passage introduces the lichen's structure only to explain why it is sensitive to air, then devotes the rest to its use as an indicator.",
        skill: "main_idea",
      },
      {
        id: "AP_009_Q2",
        question: "According to the passage, why do lichens absorb pollutants so readily?",
        options: [
          "They grow only on trees and walls in urban districts.",
          "They have no roots and no protective outer layer.",
          "Their fungal partner actively draws gases out of the air.",
          "They store water for long periods between rainfalls.",
        ],
        correctAnswer: "They have no roots and no protective outer layer.",
        explanation: "The passage says a lichen 'has no roots and no protective outer skin' and so takes in water and gases directly across its surface.",
        skill: "detail",
      },
      {
        id: "AP_009_Q3",
        question: "What does the passage say about the bushy, branching lichen forms?",
        options: [
          "They tolerate sulphur dioxide better than other forms.",
          "They grow only at a distance from city centres.",
          "They are among the first species to disappear.",
          "They contain bacteria rather than algae.",
        ],
        correctAnswer: "They are among the first species to disappear.",
        explanation: "The passage states that the bushy, branching forms 'are among the first to disappear'.",
        skill: "detail",
      },
      {
        id: "AP_009_Q4",
        question: "What can be inferred about a district where bushy lichens are growing again?",
        options: [
          "Its trees and walls have recently been cleaned.",
          "Coal is still the main fuel used there.",
          "Instruments there have stopped recording pollution.",
          "Its air is likely to carry less sulphur dioxide than before.",
        ],
        correctAnswer: "Its air is likely to carry less sulphur dioxide than before.",
        explanation: "Since these forms vanish first under sulphur dioxide and returned as coal use declined, their return implies lower sulphur levels.",
        skill: "inference",
      },
      {
        id: "AP_009_Q5",
        question: "The word \"tolerate\" in the passage is closest in meaning to",
        options: [
          "withstand",
          "produce",
          "detect",
          "release",
        ],
        correctAnswer: "withstand",
        explanation: "The sentence contrasts species by how much sulphur dioxide they can survive, so 'tolerate' means withstand.",
        skill: "vocabulary",
      },
    ],
  },
  {
    id: "AP_010",
    taskType: "read_an_academic_passage",
    topic: "Roman concrete durability",
    domain: "physical sciences",
    title: "Why Some Roman Concrete Has Lasted",
    passage: `Modern concrete is expected to last perhaps a century. Some Roman harbour structures have stood in seawater for two thousand years, and for a long time this contrast was attributed simply to the quality of Roman workmanship.

Analysis of the material itself suggests a different explanation. Roman builders mixed volcanic ash with lime and seawater. As the mixture set, seawater continued to percolate through it, dissolving components of the ash and allowing rare interlocking crystals to grow inside the cracks that formed. The very process that destroys modern concrete, in which water penetrates and corrodes the steel reinforcement within, instead strengthened the Roman material over time.

This does not make Roman concrete straightforwardly superior. It cures slowly, cannot bear the loads that reinforced concrete carries, and depends on a volcanic ash that is not available everywhere. Its interest to engineers lies elsewhere: it demonstrates that a material can be designed to react with its environment rather than to resist it, and several laboratories are now testing cements built on that principle.`,
    wordCount: 171,
    difficulty: "hard",
    cefr: "C1",
    questions: [
      {
        id: "AP_010_Q1",
        question: "What is the main purpose of the passage?",
        options: [
          "To argue that Roman concrete should replace modern concrete.",
          "To explain why Roman marine concrete has endured and what that suggests.",
          "To describe how Roman builders quarried volcanic ash.",
          "To compare the harbours of several ancient civilisations.",
        ],
        correctAnswer: "To explain why Roman marine concrete has endured and what that suggests.",
        explanation: "The passage explains the chemical reason for the material's durability and then draws a design lesson from it.",
        skill: "main_idea",
      },
      {
        id: "AP_010_Q2",
        question: "According to the passage, what happens when seawater percolates through Roman concrete?",
        options: [
          "The mixture hardens immediately and stops absorbing water.",
          "Steel reinforcement inside the concrete begins to corrode.",
          "Interlocking crystals grow inside the cracks that form.",
          "The volcanic ash is washed out of the mixture.",
        ],
        correctAnswer: "Interlocking crystals grow inside the cracks that form.",
        explanation: "The passage says seawater dissolved components of the ash and allowed 'rare interlocking crystals to grow inside the cracks'.",
        skill: "detail",
      },
      {
        id: "AP_010_Q3",
        question: "Which limitation of Roman concrete does the passage mention?",
        options: [
          "It cannot be used in seawater.",
          "It requires steel reinforcement to set properly.",
          "It loses strength after roughly a century.",
          "It cannot bear the loads reinforced concrete carries.",
        ],
        correctAnswer: "It cannot bear the loads reinforced concrete carries.",
        explanation: "The passage lists slow curing, limited load capacity and restricted ash supply as limitations.",
        skill: "detail",
      },
      {
        id: "AP_010_Q4",
        question: "What can be inferred about modern reinforced concrete?",
        options: [
          "Its steel reinforcement makes water penetration damaging rather than helpful.",
          "It was developed by studying Roman harbour structures.",
          "It cures more slowly than Roman concrete does.",
          "It contains volcanic ash in place of lime.",
        ],
        correctAnswer: "Its steel reinforcement makes water penetration damaging rather than helpful.",
        explanation: "The passage contrasts the two: in modern concrete water penetrates and corrodes the steel within, which is what destroys it.",
        skill: "inference",
      },
      {
        id: "AP_010_Q5",
        question: "Why does the author mention laboratories testing new cements?",
        options: [
          "To show that Roman methods are being copied exactly.",
          "To illustrate the practical value of the design principle described.",
          "To argue that volcanic ash should be mined more widely.",
          "To question whether the analysis of Roman concrete is correct.",
        ],
        correctAnswer: "To illustrate the practical value of the design principle described.",
        explanation: "The laboratories are offered as evidence that the principle - reacting with the environment rather than resisting it - is useful now.",
        skill: "rhetorical_purpose",
      },
    ],
  },
  {
    id: "AP_011",
    taskType: "read_an_academic_passage",
    topic: "Tree rings and climate history",
    domain: "earth and environmental science",
    title: "What Tree Rings Record",
    passage: `Cut across the trunk of a temperate tree and the growth rings are clearly visible. Each ring represents one year: a pale band formed in spring, when growth is rapid, and a darker, denser band formed later in the season.

The width of a ring depends on conditions during that growing season. In a cool, wet summer a tree may add a broad ring; in a drought year the ring may be very narrow. Because all the trees in one area experience the same weather, their patterns of wide and narrow rings match. That shared pattern allows a sample from a living tree to be matched against a sample from an older beam, and the older beam against something older still, extending an unbroken record backwards for thousands of years.

The method has limits. Tropical trees, growing in a climate without a strong annual cycle, often produce no clear rings at all. And a ring records the conditions that limited growth in that place, which may be rainfall in one region and temperature in another.`,
    wordCount: 175,
    difficulty: "medium",
    cefr: "B2",
    questions: [
      {
        id: "AP_011_Q1",
        question: "What is the main idea of the passage?",
        options: [
          "Tree rings form because growth slows later in the season.",
          "Tropical forests are more difficult to study than temperate forests.",
          "Tree rings preserve a datable record of past growing conditions, within limits.",
          "Drought is the single most important influence on tree growth.",
        ],
        correctAnswer: "Tree rings preserve a datable record of past growing conditions, within limits.",
        explanation: "The passage explains what rings record, how the record is extended, and where the method breaks down.",
        skill: "main_idea",
      },
      {
        id: "AP_011_Q2",
        question: "According to the passage, what does the width of a ring depend on?",
        options: [
          "The age of the tree when the ring formed.",
          "The density of the darker band beside it.",
          "The species of tree being sampled.",
          "Conditions during that growing season.",
        ],
        correctAnswer: "Conditions during that growing season.",
        explanation: "The passage states directly that ring width 'depends on conditions during that growing season'.",
        skill: "detail",
      },
      {
        id: "AP_011_Q3",
        question: "Why can samples be matched to one another?",
        options: [
          "Trees in one area share the same pattern of wide and narrow rings.",
          "Every tree adds exactly one pale and one dark band each year.",
          "Older beams are always cut from the same species.",
          "Rings become narrower as a tree grows older.",
        ],
        correctAnswer: "Trees in one area share the same pattern of wide and narrow rings.",
        explanation: "Because all trees in an area experience the same weather, their wide-and-narrow patterns match, which is what allows cross-matching.",
        skill: "detail",
      },
      {
        id: "AP_011_Q4",
        question: "What can be inferred about a narrow ring in a region where rainfall limits growth?",
        options: [
          "The tree was unusually old that year.",
          "That growing season was probably unusually dry.",
          "The sample came from a tropical species.",
          "The ring was formed early in the spring.",
        ],
        correctAnswer: "That growing season was probably unusually dry.",
        explanation: "Ring width tracks the limiting factor; where rainfall is limiting, a narrow ring points to a dry season.",
        skill: "inference",
      },
      {
        id: "AP_011_Q5",
        question: "The word \"unbroken\" in the passage is closest in meaning to",
        options: [
          "accurate",
          "ancient",
          "continuous",
          "detailed",
        ],
        correctAnswer: "continuous",
        explanation: "The record extends backwards without gaps because each sample overlaps the next, so 'unbroken' means continuous.",
        skill: "vocabulary",
      },
    ],
  },
  {
    id: "AP_012",
    taskType: "read_an_academic_passage",
    topic: "The printing press and standardisation",
    domain: "history",
    title: "Print and the Fixing of Texts",
    passage: `Before printing, every copy of a book was made by hand. A scribe working from an existing manuscript introduced small changes: a misread word, a skipped line, an unmarked correction of what looked like an error. Over several generations of copying, two versions of the same work could differ substantially.

Printing did not eliminate error. A compositor could set a word wrongly, and if the mistake went unnoticed it appeared in every copy of the run. What changed was that error stopped accumulating. Each printed copy in a given edition was identical to the others, so a reader in one city and a reader in another could refer to the same page and find the same words.

This had consequences beyond convenience. Scholars could cite a passage precisely and expect a correspondent to locate it. Errors, once identified, could be corrected in a later edition and the correction distributed widely. The reliability of the text, rather than the eloquence of the copyist, became the standard by which a book was judged.`,
    wordCount: 171,
    difficulty: "medium",
    cefr: "B2",
    questions: [
      {
        id: "AP_012_Q1",
        question: "What is the main idea of the passage?",
        options: [
          "Printing removed all errors from books.",
          "Scribes were less careful than compositors.",
          "Books became cheaper once printing was introduced.",
          "Printing made copies identical, which changed how texts could be used.",
        ],
        correctAnswer: "Printing made copies identical, which changed how texts could be used.",
        explanation: "The passage contrasts accumulating manuscript error with identical printed copies and traces what that identity made possible.",
        skill: "main_idea",
      },
      {
        id: "AP_012_Q2",
        question: "According to the passage, what happened to an error made by a compositor?",
        options: [
          "It appeared in every copy of that print run.",
          "It was corrected by the next scribe in the sequence.",
          "It made the whole edition unusable.",
          "It was always noticed before printing finished.",
        ],
        correctAnswer: "It appeared in every copy of that print run.",
        explanation: "The passage says that if a compositor's mistake went unnoticed 'it appeared in every copy of the run'.",
        skill: "detail",
      },
      {
        id: "AP_012_Q3",
        question: "What does the passage say scholars could now do?",
        options: [
          "Produce manuscripts more quickly than before.",
          "Cite a passage precisely and expect it to be found.",
          "Judge a book by the eloquence of its copyist.",
          "Print corrections without issuing a new edition.",
        ],
        correctAnswer: "Cite a passage precisely and expect it to be found.",
        explanation: "The passage states that scholars could cite precisely and expect a correspondent to locate the passage.",
        skill: "detail",
      },
      {
        id: "AP_012_Q4",
        question: "What can be inferred about two manuscript copies of the same work made a century apart?",
        options: [
          "They were checked against each other before use.",
          "They contained no errors of any kind.",
          "They were likely to differ from each other in places.",
          "They were produced by the same scribe.",
        ],
        correctAnswer: "They were likely to differ from each other in places.",
        explanation: "The passage says small changes accumulated over generations of copying, so widely separated copies would differ.",
        skill: "inference",
      },
      {
        id: "AP_012_Q5",
        question: "Why does the author mention a reader in one city and a reader in another?",
        options: [
          "To show that books travelled slowly between cities.",
          "To argue that printing began in a single place.",
          "To contrast urban and rural literacy.",
          "To illustrate what identical copies made possible.",
        ],
        correctAnswer: "To illustrate what identical copies made possible.",
        explanation: "The example concretely illustrates the consequence of identical copies: two distant readers see the same words on the same page.",
        skill: "rhetorical_purpose",
      },
    ],
  },
  {
    id: "AP_013",
    taskType: "read_an_academic_passage",
    topic: "Sleep and memory consolidation",
    domain: "psychology",
    title: "What the Brain Does With New Memories",
    passage: `A memory formed during the day is not yet stable. In the hours after learning, the brain reworks it, and much of that work happens during sleep.

Recordings from sleeping animals show that patterns of neural activity produced while an animal explored a maze are replayed afterwards, compressed into short bursts. Disrupting these bursts impairs performance the following day even when total sleep time is unchanged, which suggests the replay itself matters rather than rest in general.

Human studies point the same way. Participants who sleep between learning a word list and being tested recall more than participants who stay awake for the same interval, and the advantage is larger for material that has been organised into a structure than for isolated items.

The effect is not uniform across the night. Deep slow-wave sleep, concentrated in the early hours, appears to favour factual material, while later stages appear to favour skills and procedures. A shortened night therefore does not simply reduce consolidation evenly; it removes more of one kind than the other.`,
    wordCount: 172,
    difficulty: "hard",
    cefr: "C1",
    questions: [
      {
        id: "AP_013_Q1",
        question: "What is the main idea of the passage?",
        options: [
          "Sleep actively reworks new memories, and different stages favour different material.",
          "Sleeping longer always improves memory for every kind of material.",
          "Neural replay has been observed only in animals, not in humans.",
          "Factual learning is more important than skill learning.",
        ],
        correctAnswer: "Sleep actively reworks new memories, and different stages favour different material.",
        explanation: "The passage argues that sleep does active work on memory and that the work differs by sleep stage.",
        skill: "main_idea",
      },
      {
        id: "AP_013_Q2",
        question: "According to the passage, what happens when replay bursts are disrupted?",
        options: [
          "Total sleep time is reduced.",
          "Performance the next day is impaired.",
          "The animal cannot enter slow-wave sleep.",
          "Memories become more strongly organised.",
        ],
        correctAnswer: "Performance the next day is impaired.",
        explanation: "The passage states that disrupting the bursts impairs next-day performance even when total sleep time is unchanged.",
        skill: "detail",
      },
      {
        id: "AP_013_Q3",
        question: "What does the passage say about organised material in human studies?",
        options: [
          "It is recalled equally well with or without sleep.",
          "It is consolidated only during later sleep stages.",
          "It shows a larger sleep advantage than isolated items.",
          "It takes longer to learn in the first place.",
        ],
        correctAnswer: "It shows a larger sleep advantage than isolated items.",
        explanation: "The passage says the advantage 'is larger for material that has been organised into a structure than for isolated items'.",
        skill: "detail",
      },
      {
        id: "AP_013_Q4",
        question: "What can be inferred about someone who sleeps only the last few hours of a normal night?",
        options: [
          "They would consolidate no memories at all.",
          "They would show no neural replay during that sleep.",
          "They would recall isolated items better than organised ones.",
          "They would lose proportionally more consolidation of factual material.",
        ],
        correctAnswer: "They would lose proportionally more consolidation of factual material.",
        explanation: "Deep slow-wave sleep favouring factual material is concentrated early, so missing the early hours removes more factual consolidation.",
        skill: "inference",
      },
      {
        id: "AP_013_Q5",
        question: "Why does the author mention that total sleep time was unchanged?",
        options: [
          "To show that the animals were not simply tired.",
          "To explain why the study used animals rather than humans.",
          "To argue that sleep length does not matter at all.",
          "To indicate that the study lasted a full night.",
        ],
        correctAnswer: "To show that the animals were not simply tired.",
        explanation: "Holding sleep time constant isolates replay as the cause, ruling out general rest or tiredness.",
        skill: "rhetorical_purpose",
      },
    ],
  },
  {
    id: "AP_014",
    taskType: "read_an_academic_passage",
    topic: "Coral bleaching",
    domain: "life sciences",
    title: "Why Corals Turn White",
    passage: `A reef-building coral is an animal, but most of its food does not come from hunting. Tiny algae live inside its tissues, capture sunlight, and pass sugars to their host. The algae also give the coral its colour.

When the surrounding water grows too warm, this arrangement breaks down. The algae begin producing substances that harm the coral, and the coral expels them. Without the algae the white skeleton shows through the transparent tissue, which is why the process is called bleaching.

A bleached coral is not dead. If the water cools within a few weeks, algae can recolonise the tissue and the coral may recover, though it often grows more slowly and reproduces less for some time afterwards. If warm conditions persist, the coral starves.

What has changed in recent decades is not that warm spells occur but how often they occur. Reefs that once had a decade to rebuild between events now face them every few years, and recovery is rarely complete before the next one begins.`,
    wordCount: 169,
    difficulty: "medium",
    cefr: "B1",
    questions: [
      {
        id: "AP_014_Q1",
        question: "What is the main idea of the passage?",
        options: [
          "Corals are animals rather than plants.",
          "Bleaching happens when warm water breaks the coral's partnership with algae.",
          "Bleached corals always die within a few weeks.",
          "Algae are more important to reefs than corals are.",
        ],
        correctAnswer: "Bleaching happens when warm water breaks the coral's partnership with algae.",
        explanation: "The passage explains the partnership, how heat breaks it, and what follows.",
        skill: "main_idea",
      },
      {
        id: "AP_014_Q2",
        question: "According to the passage, where do the algae live?",
        options: [
          "On the surface of the coral's skeleton.",
          "In the water immediately around the reef.",
          "Inside the coral's tissues.",
          "In the sediment beneath the reef.",
        ],
        correctAnswer: "Inside the coral's tissues.",
        explanation: "The passage says tiny algae 'live inside its tissues'.",
        skill: "detail",
      },
      {
        id: "AP_014_Q3",
        question: "Why does a bleached coral appear white?",
        options: [
          "The algae inside it change colour when heated.",
          "Warm water removes pigment from the seawater.",
          "The coral produces a white substance to protect itself.",
          "Its white skeleton shows through the transparent tissue.",
        ],
        correctAnswer: "Its white skeleton shows through the transparent tissue.",
        explanation: "The passage states that without the algae 'the white skeleton shows through the transparent tissue'.",
        skill: "detail",
      },
      {
        id: "AP_014_Q4",
        question: "What can be inferred about reefs facing warm spells every few years?",
        options: [
          "They are likely to be in progressively worse condition over time.",
          "They will adapt fully to the new temperatures.",
          "They no longer contain any algae.",
          "They recover faster than reefs with longer gaps.",
        ],
        correctAnswer: "They are likely to be in progressively worse condition over time.",
        explanation: "Recovery is 'rarely complete before the next one begins', so damage accumulates across events.",
        skill: "inference",
      },
      {
        id: "AP_014_Q5",
        question: "The word \"expels\" in the passage is closest in meaning to",
        options: [
          "absorbs",
          "drives out",
          "feeds",
          "shelters",
        ],
        correctAnswer: "drives out",
        explanation: "The coral gets rid of the algae that have begun to harm it, so 'expels' means drives out.",
        skill: "vocabulary",
      },
    ],
  },
  {
    id: "AP_015",
    taskType: "read_an_academic_passage",
    topic: "Urban heat islands",
    domain: "earth and environmental science",
    title: "Why Cities Stay Warmer at Night",
    passage: `On a summer evening, the centre of a large city can be several degrees warmer than the countryside around it. The difference is smallest at midday and largest a few hours after sunset.

Three factors combine to produce it. Dark paving and roofing absorb more sunlight than vegetation does, and the materials store that heat in their mass, releasing it slowly through the night. Tall buildings create narrow streets whose walls radiate heat towards one another instead of towards the open sky, so the trapped heat escapes more slowly. And because rainwater is carried away through drains rather than held in soil and leaves, cities lose the cooling that evaporation provides in rural areas.

The consequences are practical. Warm nights prevent buildings from shedding the heat they gained during the day, so cooling demand rises, which in turn releases more waste heat into the streets. Plantings and lighter surfaces reduce the effect measurably, but only where they replace the dark, sealed surfaces that cause it in the first place.`,
    wordCount: 169,
    difficulty: "medium",
    cefr: "B2",
    questions: [
      {
        id: "AP_015_Q1",
        question: "What is the main purpose of the passage?",
        options: [
          "To argue that cities should be smaller than they are.",
          "To compare summer and winter temperatures in cities.",
          "To explain what causes the urban heat island effect and why it matters.",
          "To describe how rainwater drainage systems are built.",
        ],
        correctAnswer: "To explain what causes the urban heat island effect and why it matters.",
        explanation: "The passage identifies three causes and then sets out practical consequences.",
        skill: "main_idea",
      },
      {
        id: "AP_015_Q2",
        question: "According to the passage, when is the temperature difference largest?",
        options: [
          "At midday.",
          "Just before sunrise.",
          "During rainfall.",
          "A few hours after sunset.",
        ],
        correctAnswer: "A few hours after sunset.",
        explanation: "The passage says the difference is 'smallest at midday and largest a few hours after sunset'.",
        skill: "detail",
      },
      {
        id: "AP_015_Q3",
        question: "How do narrow streets contribute to the effect?",
        options: [
          "Their walls radiate heat towards one another rather than the sky.",
          "They prevent sunlight from reaching the ground.",
          "They channel rainwater directly into drains.",
          "They increase the amount of vegetation per building.",
        ],
        correctAnswer: "Their walls radiate heat towards one another rather than the sky.",
        explanation: "The passage explains that walls radiate heat towards one another instead of towards the open sky.",
        skill: "detail",
      },
      {
        id: "AP_015_Q4",
        question: "What can be inferred about a city district that keeps its soil and trees?",
        options: [
          "It would have no need for drainage systems.",
          "It would show a smaller night-time temperature difference.",
          "It would be warmer than the surrounding countryside.",
          "It would absorb more sunlight than a paved district.",
        ],
        correctAnswer: "It would show a smaller night-time temperature difference.",
        explanation: "Evaporation from soil and leaves provides cooling that sealed surfaces remove, so keeping them lessens the effect.",
        skill: "inference",
      },
      {
        id: "AP_015_Q5",
        question: "Why does the author mention rising cooling demand?",
        options: [
          "To argue that air conditioning should be banned.",
          "To explain how buildings are constructed.",
          "To show that the effect reinforces itself.",
          "To compare energy costs between cities.",
        ],
        correctAnswer: "To show that the effect reinforces itself.",
        explanation: "Cooling demand rises because nights are warm, and that demand releases more waste heat - a feedback loop.",
        skill: "rhetorical_purpose",
      },
    ],
  },
  {
    id: "AP_016",
    taskType: "read_an_academic_passage",
    topic: "Domestication of the horse",
    domain: "archaeology",
    title: "Tracing the First Ridden Horses",
    passage: `Establishing when horses were first ridden is harder than it sounds. Bones alone rarely settle the question, because a ridden horse and a hunted horse may look much the same on excavation.

Several kinds of indirect evidence have been used. Wear on the second premolar can indicate a bit held in the mouth, though similar wear can arise from other causes. Residues of mare's milk in pottery show that herds were managed for their products, which implies control but not riding. More recently, changes to the shape of the vertebrae and hip sockets in some skeletons have been read as the signature of a body repeatedly subjected to a rider's weight.

None of these lines is decisive on its own, and each has been challenged. Their value is that they fail independently: the objections raised against bit wear do not apply to skeletal loading, and those raised against loading do not apply to milk residues. Where several converge on the same period and region, the case becomes considerably stronger than any single strand.`,
    wordCount: 173,
    difficulty: "hard",
    cefr: "C1",
    questions: [
      {
        id: "AP_016_Q1",
        question: "What is the main idea of the passage?",
        options: [
          "Horse bones cannot be dated accurately by any method.",
          "Mare's milk residues prove that horses were ridden.",
          "Riding began later than archaeologists once believed.",
          "Several independent lines of weak evidence together make a stronger case for early riding.",
        ],
        correctAnswer: "Several independent lines of weak evidence together make a stronger case for early riding.",
        explanation: "The passage reviews indirect evidence and argues that convergence among independently weak lines is what carries the case.",
        skill: "main_idea",
      },
      {
        id: "AP_016_Q2",
        question: "According to the passage, what can wear on the second premolar indicate?",
        options: [
          "That a bit was held in the horse's mouth.",
          "That the horse was used for milk production.",
          "That the horse carried a rider's weight.",
          "That the horse was hunted rather than kept.",
        ],
        correctAnswer: "That a bit was held in the horse's mouth.",
        explanation: "The passage says such wear 'can indicate a bit held in the mouth', while noting other causes exist.",
        skill: "detail",
      },
      {
        id: "AP_016_Q3",
        question: "What do residues of mare's milk in pottery show?",
        options: [
          "That horses were ridden over long distances.",
          "That herds were managed for their products.",
          "That pottery was invented for storing milk.",
          "That horses were kept indoors during winter.",
        ],
        correctAnswer: "That herds were managed for their products.",
        explanation: "The passage says the residues show herds were managed for their products, implying control but not riding.",
        skill: "detail",
      },
      {
        id: "AP_016_Q4",
        question: "What can be inferred about a site where only bit wear has been found?",
        options: [
          "Riding certainly took place there.",
          "The horses there were hunted rather than kept.",
          "The case for riding there is weaker than at a site with several kinds of evidence.",
          "The site must be older than sites with milk residues.",
        ],
        correctAnswer: "The case for riding there is weaker than at a site with several kinds of evidence.",
        explanation: "The passage's argument is that no single line is decisive; strength comes from convergence.",
        skill: "inference",
      },
      {
        id: "AP_016_Q5",
        question: "The phrase \"fail independently\" in the passage is closest in meaning to",
        options: [
          "have all been disproved",
          "were discovered separately",
          "cannot be tested at all",
          "are weak for unrelated reasons",
        ],
        correctAnswer: "are weak for unrelated reasons",
        explanation: "The passage explains that objections to one line do not apply to the others, so their weaknesses are unrelated.",
        skill: "vocabulary",
      },
    ],
  },
  {
    id: "AP_017",
    taskType: "read_an_academic_passage",
    topic: "Perspective in Renaissance painting",
    domain: "art history",
    title: "The Vanishing Point",
    passage: `Painters before the fifteenth century represented depth by convention. Figures further away were drawn smaller, and objects were stacked up the picture surface, but there was no single rule governing how much smaller a distant figure should be.

Linear perspective supplied that rule. Lines that run away from the viewer are drawn converging on a single point, and the rate at which objects shrink follows from their distance along those lines. The result is a picture that behaves like a view through a window from one fixed position.

The technique spread quickly, partly because it could be taught. A painter did not need to judge depth by eye; the construction could be laid out with a ruler before any paint was applied.

It also imposed a cost. A perspective picture assumes one viewer standing in one place, and figures at the edges of a wide composition become noticeably distorted. Some painters accepted the distortion, and others quietly broke the rule where it would have been conspicuous, adjusting a figure so that it looked right rather than measured right.`,
    wordCount: 178,
    difficulty: "medium",
    cefr: "B2",
    questions: [
      {
        id: "AP_017_Q1",
        question: "What is the main idea of the passage?",
        options: [
          "Linear perspective gave painters a teachable rule for depth, with limitations.",
          "Painters before the fifteenth century could not represent depth at all.",
          "Perspective made painting more difficult to learn.",
          "Distortion at the edges of paintings was never noticed.",
        ],
        correctAnswer: "Linear perspective gave painters a teachable rule for depth, with limitations.",
        explanation: "The passage explains what perspective supplied, why it spread, and what it cost.",
        skill: "main_idea",
      },
      {
        id: "AP_017_Q2",
        question: "According to the passage, how did earlier painters show that a figure was distant?",
        options: [
          "By converging lines on a single point.",
          "By drawing it smaller and higher on the picture surface.",
          "By using a ruler to lay out the construction.",
          "By placing it at the edge of the composition.",
        ],
        correctAnswer: "By drawing it smaller and higher on the picture surface.",
        explanation: "The passage says distant figures were drawn smaller and objects stacked up the picture surface.",
        skill: "detail",
      },
      {
        id: "AP_017_Q3",
        question: "Why did the technique spread quickly?",
        options: [
          "It required less paint than earlier methods.",
          "It removed all distortion from wide compositions.",
          "It could be taught and laid out with a ruler.",
          "It allowed pictures to be viewed from any position.",
        ],
        correctAnswer: "It could be taught and laid out with a ruler.",
        explanation: "The passage says it spread partly because it could be taught and constructed with a ruler before painting.",
        skill: "detail",
      },
      {
        id: "AP_017_Q4",
        question: "What can be inferred about a painter who adjusted a figure to 'look right rather than measured right'?",
        options: [
          "They had not learned how perspective works.",
          "They were painting a narrow rather than a wide composition.",
          "They were working before the fifteenth century.",
          "They judged the viewer's impression more important than the construction.",
        ],
        correctAnswer: "They judged the viewer's impression more important than the construction.",
        explanation: "Breaking the rule where distortion would be conspicuous puts the viewer's impression above geometric correctness.",
        skill: "inference",
      },
      {
        id: "AP_017_Q5",
        question: "The word \"conspicuous\" in the passage is closest in meaning to",
        options: [
          "noticeable",
          "expensive",
          "traditional",
          "accurate",
        ],
        correctAnswer: "noticeable",
        explanation: "Painters broke the rule where distortion would stand out to a viewer, so 'conspicuous' means noticeable.",
        skill: "vocabulary",
      },
    ],
  },
  {
    id: "AP_018",
    taskType: "read_an_academic_passage",
    topic: "Vertical farming economics",
    domain: "economics",
    title: "Counting the Cost of Growing Indoors",
    passage: `Vertical farms grow crops in stacked trays under artificial light, in buildings that can sit inside a city. The arguments made for them are consistent: yields per square metre are high, water use is a fraction of field agriculture, and produce reaches shops within hours of harvest.

The difficulty is electricity. Sunlight is free, and replacing it is the dominant operating cost, typically far exceeding labour and rent combined. That cost scales with the light a crop needs, which is why the commercially viable list is short. Leafy greens and herbs need relatively little light, spoil quickly in transport, and sell at a high price per kilogram. Wheat needs a great deal of light and sells for very little.

This explains a pattern that has puzzled some observers: vertical farms have expanded steadily while remaining confined to a narrow set of crops. They are not a partial step towards growing staple grains indoors. They occupy the specific niche where a high-value, light-cheap, transport-sensitive crop makes the electricity bill worth paying.`,
    wordCount: 170,
    difficulty: "hard",
    cefr: "C1",
    questions: [
      {
        id: "AP_018_Q1",
        question: "What is the main idea of the passage?",
        options: [
          "Vertical farming will eventually replace field agriculture.",
          "The cost of artificial light confines vertical farming to a narrow set of crops.",
          "Vertical farms use less water than field agriculture.",
          "Wheat could be grown indoors if buildings were larger.",
        ],
        correctAnswer: "The cost of artificial light confines vertical farming to a narrow set of crops.",
        explanation: "The passage identifies electricity as the dominant cost and shows how it determines which crops are viable.",
        skill: "main_idea",
      },
      {
        id: "AP_018_Q2",
        question: "According to the passage, what is the dominant operating cost of a vertical farm?",
        options: [
          "Rent for the building.",
          "Labour.",
          "Electricity for lighting.",
          "Transport to shops.",
        ],
        correctAnswer: "Electricity for lighting.",
        explanation: "The passage says replacing sunlight is the dominant operating cost, exceeding labour and rent combined.",
        skill: "detail",
      },
      {
        id: "AP_018_Q3",
        question: "Which properties make leafy greens suitable for vertical farming?",
        options: [
          "They need a great deal of light but grow very fast.",
          "They can be stored for long periods after harvest.",
          "They sell for very little but grow in large quantities.",
          "They need little light, spoil quickly, and sell at a high price per kilogram.",
        ],
        correctAnswer: "They need little light, spoil quickly, and sell at a high price per kilogram.",
        explanation: "The passage lists exactly these three properties for leafy greens and herbs.",
        skill: "detail",
      },
      {
        id: "AP_018_Q4",
        question: "What can be inferred about a crop that stores well and sells cheaply?",
        options: [
          "It would be a poor candidate for vertical farming.",
          "It would be the most profitable crop to grow indoors.",
          "It would need less electricity than leafy greens.",
          "It would reach shops within hours of harvest.",
        ],
        correctAnswer: "It would be a poor candidate for vertical farming.",
        explanation: "The viable niche requires high value and transport sensitivity; a cheap, storable crop has neither.",
        skill: "inference",
      },
      {
        id: "AP_018_Q5",
        question: "Why does the author mention wheat?",
        options: [
          "To show that vertical farms will soon grow staple grains.",
          "To give a contrasting example that explains the crop limitation.",
          "To argue that wheat prices should rise.",
          "To describe how much water wheat requires.",
        ],
        correctAnswer: "To give a contrasting example that explains the crop limitation.",
        explanation: "Wheat is the counter-example: high light demand and low price, the opposite of the viable niche.",
        skill: "rhetorical_purpose",
      },
    ],
  },
  {
    id: "AP_019",
    taskType: "read_an_academic_passage",
    topic: "Antibiotic resistance",
    domain: "life sciences",
    title: "How Resistance Spreads",
    passage: `When a population of bacteria is exposed to an antibiotic, most cells die. A few survive because a chance mutation makes them less vulnerable, and those few multiply into a population that the drug no longer controls. This much follows directly from natural selection.

Bacteria have a second route that plants and animals lack. Small rings of DNA called plasmids can be passed directly from one bacterium to another, including between different species. A resistance gene that arose in a harmless gut bacterium can therefore appear in a dangerous one without any shared ancestry.

This is why resistance can emerge faster than the ordinary pace of mutation suggests. A gene that took a long time to arise once may then move rapidly through unrelated populations.

It also explains why using antibiotics in one setting affects others. A gene selected for on a farm can reach a hospital by way of the bacteria that travel between them, and the selection pressure that produced it need never have been applied in the hospital at all.`,
    wordCount: 173,
    difficulty: "medium",
    cefr: "B2",
    questions: [
      {
        id: "AP_019_Q1",
        question: "What is the main idea of the passage?",
        options: [
          "Antibiotics kill most but not all bacteria in a population.",
          "Plasmids are found only in harmless gut bacteria.",
          "Resistance spreads both by selection and by direct gene transfer between bacteria.",
          "Hospitals use more antibiotics than farms do.",
        ],
        correctAnswer: "Resistance spreads both by selection and by direct gene transfer between bacteria.",
        explanation: "The passage sets out the selection route, then the plasmid route, and draws consequences from the second.",
        skill: "main_idea",
      },
      {
        id: "AP_019_Q2",
        question: "According to the passage, what is a plasmid?",
        options: [
          "A type of antibiotic used on farms.",
          "A mutation that makes a bacterium less vulnerable.",
          "A species of harmless gut bacterium.",
          "A small ring of DNA that can pass between bacteria.",
        ],
        correctAnswer: "A small ring of DNA that can pass between bacteria.",
        explanation: "The passage defines plasmids as 'small rings of DNA' passed directly between bacteria.",
        skill: "detail",
      },
      {
        id: "AP_019_Q3",
        question: "What does the passage say bacteria can do that plants and animals cannot?",
        options: [
          "Pass genes directly between different species.",
          "Survive exposure to antibiotics.",
          "Reproduce by natural selection.",
          "Mutate in response to their environment.",
        ],
        correctAnswer: "Pass genes directly between different species.",
        explanation: "The passage introduces plasmid transfer as 'a second route that plants and animals lack'.",
        skill: "detail",
      },
      {
        id: "AP_019_Q4",
        question: "What can be inferred about restricting antibiotic use in hospitals alone?",
        options: [
          "It would eliminate resistance within the hospital entirely.",
          "It would not by itself prevent resistant genes from arriving there.",
          "It would increase the rate of mutation in gut bacteria.",
          "It would have no effect on any bacterial population.",
        ],
        correctAnswer: "It would not by itself prevent resistant genes from arriving there.",
        explanation: "A gene selected on a farm can reach a hospital without selection pressure ever being applied there.",
        skill: "inference",
      },
      {
        id: "AP_019_Q5",
        question: "The word \"vulnerable\" in the passage is closest in meaning to",
        options: [
          "common",
          "active",
          "susceptible",
          "visible",
        ],
        correctAnswer: "susceptible",
        explanation: "The surviving cells are less easily harmed by the drug, so 'vulnerable' means susceptible.",
        skill: "vocabulary",
      },
    ],
  },
  {
    id: "AP_020",
    taskType: "read_an_academic_passage",
    topic: "Standardised time zones",
    domain: "history",
    title: "Why Clocks Were Synchronised",
    passage: `For most of history each town kept its own time, set by the sun. When the sun stood highest, it was noon. A town thirty kilometres to the east reached noon a couple of minutes earlier, and nobody was inconvenienced by the difference.

Railways changed that. A timetable has to state one departure time, and a train crossing many towns in a day passes through many local noons. Early railway companies solved the problem privately, running their whole network on the time kept at a single city and printing conversion tables for passengers.

The result was confusion rather than order, because neighbouring companies chose different reference cities. A station served by two lines might display two clocks showing different times, and a passenger changing trains had to work out which applied.

Standard time zones resolved this by dividing the world into bands, each an hour apart, within which every clock agrees. The cost was that clock noon and solar noon no longer coincide except along one line in each band.`,
    wordCount: 170,
    difficulty: "medium",
    cefr: "B1",
    questions: [
      {
        id: "AP_020_Q1",
        question: "What is the main idea of the passage?",
        options: [
          "Local time was more accurate than standard time.",
          "Railway companies refused to cooperate with one another.",
          "Solar noon is the only correct definition of noon.",
          "Railways created a timekeeping problem that standard time zones solved.",
        ],
        correctAnswer: "Railways created a timekeeping problem that standard time zones solved.",
        explanation: "The passage traces the problem from local time through railway confusion to time zones.",
        skill: "main_idea",
      },
      {
        id: "AP_020_Q2",
        question: "According to the passage, how did early railway companies handle the problem?",
        options: [
          "They ran their network on one city's time and printed conversion tables.",
          "They adopted the world's first standard time zones.",
          "They asked each town to change its clocks.",
          "They published timetables without departure times.",
        ],
        correctAnswer: "They ran their network on one city's time and printed conversion tables.",
        explanation: "The passage says companies ran their whole network on a single city's time and printed conversion tables.",
        skill: "detail",
      },
      {
        id: "AP_020_Q3",
        question: "Why might a station display two clocks showing different times?",
        options: [
          "Because solar noon and clock noon differed there.",
          "Because it was served by two companies using different reference cities.",
          "Because one clock was kept as a spare.",
          "Because passengers preferred to see both.",
        ],
        correctAnswer: "Because it was served by two companies using different reference cities.",
        explanation: "The passage explains that neighbouring companies chose different reference cities, so a shared station showed both.",
        skill: "detail",
      },
      {
        id: "AP_020_Q4",
        question: "What can be inferred about a town at the eastern edge of a time zone?",
        options: [
          "It would keep the same time as towns in the next zone.",
          "It would have no need for a railway timetable.",
          "Its clock noon would come noticeably after its solar noon.",
          "Its solar noon and clock noon would coincide exactly.",
        ],
        correctAnswer: "Its clock noon would come noticeably after its solar noon.",
        explanation: "Clock and solar noon coincide only along one line in each band; further east, the sun peaks before clock noon.",
        skill: "inference",
      },
      {
        id: "AP_020_Q5",
        question: "Why does the author mention that nobody was inconvenienced by the difference?",
        options: [
          "To argue that time zones were unnecessary.",
          "To explain how sundials were constructed.",
          "To criticise early railway companies.",
          "To show that local time worked adequately before railways.",
        ],
        correctAnswer: "To show that local time worked adequately before railways.",
        explanation: "The point establishes that the problem only appeared once railways required a single stated time.",
        skill: "rhetorical_purpose",
      },
    ],
  },
  {
    id: "AP_021",
    taskType: "read_an_academic_passage",
    topic: "Migration navigation in birds",
    domain: "life sciences",
    title: "How Migrating Birds Find Their Way",
    passage: `A young warbler making its first migration has never seen the route, yet it departs in roughly the correct direction and covers thousands of kilometres.

Experiments in planetariums showed that some species orient by the pattern of stars, and specifically by the point around which the sky appears to rotate rather than by any individual constellation. Birds raised under an artificial sky rotating about a different star oriented with respect to that star instead.

Other work established a magnetic sense. Birds placed in cages surrounded by coils that shifted the local magnetic field changed their preferred direction accordingly, and did so even in complete darkness.

Neither system alone is sufficient. Stars are unavailable under cloud, and the magnetic field gives direction but not position. What the evidence suggests is a set of partly redundant systems that are calibrated against one another, with the bird weighting whichever cue is currently reliable. That redundancy is probably the point: a single mechanism would fail on the first overcast night.`,
    wordCount: 166,
    difficulty: "hard",
    cefr: "C1",
    questions: [
      {
        id: "AP_021_Q1",
        question: "What is the main idea of the passage?",
        options: [
          "Birds use several partly redundant navigation systems calibrated against one another.",
          "Birds navigate using stars alone.",
          "Young birds must be taught their migration route by adults.",
          "The magnetic sense is more reliable than star orientation.",
        ],
        correctAnswer: "Birds use several partly redundant navigation systems calibrated against one another.",
        explanation: "The passage presents two systems, notes each is insufficient, and argues for calibrated redundancy.",
        skill: "main_idea",
      },
      {
        id: "AP_021_Q2",
        question: "According to the passage, what did planetarium experiments show?",
        options: [
          "Birds recognise individual constellations by shape.",
          "Birds orient by the point around which the sky rotates.",
          "Birds cannot orient without a magnetic field.",
          "Birds prefer to migrate on clear nights.",
        ],
        correctAnswer: "Birds orient by the point around which the sky rotates.",
        explanation: "The passage specifies orientation by the rotational point, not by any individual constellation.",
        skill: "detail",
      },
      {
        id: "AP_021_Q3",
        question: "What happened when birds were placed in cages surrounded by coils?",
        options: [
          "They stopped attempting to migrate.",
          "They oriented only when stars were visible.",
          "They changed their preferred direction, even in darkness.",
          "They lost their magnetic sense permanently.",
        ],
        correctAnswer: "They changed their preferred direction, even in darkness.",
        explanation: "The passage says they changed preferred direction accordingly and did so even in complete darkness.",
        skill: "detail",
      },
      {
        id: "AP_021_Q4",
        question: "What can be inferred about a bird migrating under continuous cloud?",
        options: [
          "It would be unable to travel in any direction.",
          "It would navigate more accurately than on a clear night.",
          "It would use individual constellations instead.",
          "It would rely more heavily on its magnetic sense.",
        ],
        correctAnswer: "It would rely more heavily on its magnetic sense.",
        explanation: "Stars are unavailable under cloud, and the bird weights whichever cue is currently reliable.",
        skill: "inference",
      },
      {
        id: "AP_021_Q5",
        question: "The word \"redundant\" in the passage is closest in meaning to",
        options: [
          "overlapping",
          "unnecessary",
          "inherited",
          "imprecise",
        ],
        correctAnswer: "overlapping",
        explanation: "The systems duplicate each other's function so one can cover for another, which is overlapping rather than useless.",
        skill: "vocabulary",
      },
    ],
  },
  {
    id: "AP_022",
    taskType: "read_an_academic_passage",
    topic: "The Bantu expansion",
    domain: "history",
    title: "Tracing a Long Migration",
    passage: `Between roughly three and one thousand years ago, related languages spread across a vast area of sub-Saharan Africa. The pattern is not disputed; its mechanism has been.

An older account treated the spread as a migration of farmers displacing hunter-gatherers, with iron tools and cultivated crops giving the incomers a decisive advantage. Language, technology and population were assumed to travel together.

More recent work has complicated each link in that chain. Iron working appears in some regions before the associated languages and after them in others, which is difficult to reconcile with a single advancing front. Genetic studies show substantial continuity with earlier populations in several areas, implying absorption rather than replacement. And the crops best suited to the wetter forest zones were not the ones the earliest speakers cultivated.

What remains is a slower and less uniform picture: a long process in which languages moved sometimes with people and sometimes without them, at different rates in different environments, and in which the receiving populations were participants rather than simply displaced.`,
    wordCount: 171,
    difficulty: "hard",
    cefr: "C2",
    questions: [
      {
        id: "AP_022_Q1",
        question: "What is the main purpose of the passage?",
        options: [
          "To establish when the Bantu languages first appeared.",
          "To revise an older explanation of how these languages spread.",
          "To argue that iron working was invented in sub-Saharan Africa.",
          "To describe the crops grown in forest zones.",
        ],
        correctAnswer: "To revise an older explanation of how these languages spread.",
        explanation: "The passage states the pattern is undisputed and then dismantles the older mechanism in favour of a revised one.",
        skill: "main_idea",
      },
      {
        id: "AP_022_Q2",
        question: "According to the passage, what did the older account assume?",
        options: [
          "That languages spread without any movement of people.",
          "That hunter-gatherers adopted the incoming languages voluntarily.",
          "That language, technology and population travelled together.",
          "That iron working arrived long after the languages.",
        ],
        correctAnswer: "That language, technology and population travelled together.",
        explanation: "The passage says language, technology and population 'were assumed to travel together'.",
        skill: "detail",
      },
      {
        id: "AP_022_Q3",
        question: "What do genetic studies indicate?",
        options: [
          "Complete replacement of earlier populations.",
          "That crops moved faster than people did.",
          "That iron working began in the forest zones.",
          "Substantial continuity with earlier populations.",
        ],
        correctAnswer: "Substantial continuity with earlier populations.",
        explanation: "The passage reports substantial genetic continuity, implying absorption rather than replacement.",
        skill: "detail",
      },
      {
        id: "AP_022_Q4",
        question: "What can be inferred about the timing of iron working relative to the languages?",
        options: [
          "It was not consistent across regions.",
          "It always preceded the arrival of the languages.",
          "It occurred at the same time everywhere.",
          "It has not been dated in any region.",
        ],
        correctAnswer: "It was not consistent across regions.",
        explanation: "Iron working appears before the languages in some regions and after them in others.",
        skill: "inference",
      },
      {
        id: "AP_022_Q5",
        question: "Why does the author mention crops suited to wetter forest zones?",
        options: [
          "To show that farming was impossible in forests.",
          "To weaken the claim that incoming farmers had a decisive advantage everywhere.",
          "To explain how crops were first domesticated.",
          "To argue that forests were uninhabited.",
        ],
        correctAnswer: "To weaken the claim that incoming farmers had a decisive advantage everywhere.",
        explanation: "If the earliest speakers did not grow the crops suited to the forest, the assumed agricultural advantage does not hold there.",
        skill: "rhetorical_purpose",
      },
    ],
  },
  {
    id: "AP_023",
    taskType: "read_an_academic_passage",
    topic: "Sound absorption in concert halls",
    domain: "physical sciences",
    title: "Designing a Room to Be Heard In",
    passage: `When a note is played in a hall, the listener hears it twice: once directly and again as it returns from the walls, floor and ceiling. The time it takes for those reflections to fade is the hall's reverberation time.

Too short a reverberation time and music sounds dry and thin, because notes stop before the next begins. Too long and successive notes overlap into a blur, so that rapid passages become indistinct. The preferred value differs by purpose: speech needs a short reverberation time so that consonants stay separable, while orchestral music is usually judged best somewhat longer.

This is why a hall built for one use often disappoints in another. The materials that give a concert hall its warmth are the same ones that make a lecture delivered there difficult to follow.

Modern halls address the conflict with movable panels and curtains that change the absorbing surface area, allowing the same room to be tuned to a value appropriate to the evening's programme.`,
    wordCount: 165,
    difficulty: "medium",
    cefr: "B2",
    questions: [
      {
        id: "AP_023_Q1",
        question: "What is the main idea of the passage?",
        options: [
          "Concert halls should never be used for lectures.",
          "Shorter reverberation times are always preferable.",
          "Reverberation time must suit the use a hall is put to.",
          "Movable panels are cheaper than building two halls.",
        ],
        correctAnswer: "Reverberation time must suit the use a hall is put to.",
        explanation: "The passage defines reverberation time, shows different uses need different values, and describes tuning for that reason.",
        skill: "main_idea",
      },
      {
        id: "AP_023_Q2",
        question: "According to the passage, what happens when reverberation time is too long?",
        options: [
          "Notes stop before the next one begins.",
          "Consonants become easier to separate.",
          "The direct sound is not heard at all.",
          "Successive notes overlap into a blur.",
        ],
        correctAnswer: "Successive notes overlap into a blur.",
        explanation: "The passage says too long a time makes successive notes overlap so that rapid passages become indistinct.",
        skill: "detail",
      },
      {
        id: "AP_023_Q3",
        question: "Why does speech need a short reverberation time?",
        options: [
          "So that consonants stay separable.",
          "So that the room sounds warmer.",
          "So that rapid passages sound clearer.",
          "So that fewer panels are required.",
        ],
        correctAnswer: "So that consonants stay separable.",
        explanation: "The passage states that speech needs a short reverberation time so consonants stay separable.",
        skill: "detail",
      },
      {
        id: "AP_023_Q4",
        question: "What can be inferred about adding heavy curtains to a hall?",
        options: [
          "It would make orchestral music sound warmer.",
          "It would shorten the hall's reverberation time.",
          "It would increase the number of reflections.",
          "It would have no effect on how the hall sounds.",
        ],
        correctAnswer: "It would shorten the hall's reverberation time.",
        explanation: "Curtains increase absorbing surface area, and absorption is what makes reflections fade sooner.",
        skill: "inference",
      },
      {
        id: "AP_023_Q5",
        question: "The word \"indistinct\" in the passage is closest in meaning to",
        options: [
          "quiet",
          "rapid",
          "unclear",
          "pleasant",
        ],
        correctAnswer: "unclear",
        explanation: "Overlapping notes blur together so that the passage cannot be clearly made out.",
        skill: "vocabulary",
      },
    ],
  },
  {
    id: "AP_024",
    taskType: "read_an_academic_passage",
    topic: "Behavioural economics of defaults",
    domain: "economics",
    title: "The Power of the Default Option",
    passage: `Standard economic models assume that a person facing a choice compares the options and selects the one they prefer. On that view, the option presented first, or selected in advance, should make no difference.

It makes a large one. Where enrolment in a workplace pension is automatic unless an employee opts out, participation rates are typically far higher than where the employee must actively opt in, even though the effort involved in either case is a single form.

Several explanations have been offered. Filling in a form has a small but real cost in attention. A pre-selected option may be read as advice about what a sensible person would do. And a choice already made is felt as a possession, so changing it registers as a loss in a way that declining to act does not.

The practical implication is uncomfortable. Whoever sets the default exercises real influence over outcomes, and there is no neutral way to present a choice: some option has to come first.`,
    wordCount: 166,
    difficulty: "medium",
    cefr: "B2",
    questions: [
      {
        id: "AP_024_Q1",
        question: "What is the main idea of the passage?",
        options: [
          "Workplace pensions are the best way to encourage saving.",
          "People always prefer whichever option requires less effort.",
          "Economic models accurately describe how people choose.",
          "Default options strongly affect choices, which standard models do not predict.",
        ],
        correctAnswer: "Default options strongly affect choices, which standard models do not predict.",
        explanation: "The passage sets up the standard prediction, shows it fails for defaults, and draws an implication.",
        skill: "main_idea",
      },
      {
        id: "AP_024_Q2",
        question: "According to the passage, what does the standard model predict about presentation order?",
        options: [
          "That it should make no difference to the choice.",
          "That the first option will usually be chosen.",
          "That people will always opt out of pensions.",
          "That effort determines the outcome.",
        ],
        correctAnswer: "That it should make no difference to the choice.",
        explanation: "The passage says on the standard view the option presented first should make no difference.",
        skill: "detail",
      },
      {
        id: "AP_024_Q3",
        question: "Which explanation for the default effect does the passage give?",
        options: [
          "Employees are not told that opting out is possible.",
          "A pre-selected option may be read as advice.",
          "Automatic enrolment costs employers less.",
          "Forms are deliberately made difficult to complete.",
        ],
        correctAnswer: "A pre-selected option may be read as advice.",
        explanation: "The passage lists attention cost, the option being read as advice, and loss aversion.",
        skill: "detail",
      },
      {
        id: "AP_024_Q4",
        question: "What can be inferred about an organisation that wants to avoid influencing a choice?",
        options: [
          "It should require everyone to opt in.",
          "It should remove the choice entirely.",
          "It cannot fully do so, because some option must be presented first.",
          "It should present all options in alphabetical order.",
        ],
        correctAnswer: "It cannot fully do so, because some option must be presented first.",
        explanation: "The passage concludes that there is 'no neutral way to present a choice: some option has to come first'.",
        skill: "inference",
      },
      {
        id: "AP_024_Q5",
        question: "Why does the author mention that the effort is a single form in either case?",
        options: [
          "To argue that forms should be abolished.",
          "To explain how pension schemes are administered.",
          "To suggest that opting out is harder than opting in.",
          "To show that effort alone cannot explain the difference in participation.",
        ],
        correctAnswer: "To show that effort alone cannot explain the difference in participation.",
        explanation: "Holding effort constant rules out the simplest explanation and makes the default effect the thing needing explanation.",
        skill: "rhetorical_purpose",
      },
    ],
  },
];
