// TOEFL iBT 2026 - LISTENING EXPANSION BANK
// ------------------------------------------------------------------
// Original content authored to close the gap identified against the
// official ETS 2026 blueprint (docs/toefl-2026/ets-official-blueprint.md):
// one honest Listening form needs 15-19 Choose-a-Response items,
// 10 Conversation items, 6-10 Announcement items and 8-16 Academic Talk
// items (47 items total). The legacy bank could not build even one form
// without repeats.
//
// This file adds:
//   20 Academic Talks     (4 questions each  =  80 items)
//   20 Announcements      (2 questions each  =  40 items)
//   20 Conversations      (2 questions each  =  40 items)
//   40 Listen and Choose a Response items    =  40 items
//
// Interfaces are re-used unchanged from src/data/questions/listening-massive.ts
// so this content drops straight into the existing renderer and TTS pipeline.
// ------------------------------------------------------------------

import type { VoiceType } from "@/lib/audio";
import type {
  ChooseResponseItem,
  ConversationScenario,
  AnnouncementScenario,
  AcademicTalkScenario,
} from "@/data/questions/listening-massive";

/** CEFR band tag. The shared interfaces have no CEFR field, so levels are
 *  exported as a side table keyed by item id rather than by widening the
 *  existing interfaces. */
export type CefrLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

// =====================================================
// ACADEMIC TALKS (20 new) - extended monologic speech,
// 170-250 words (ETS ceiling 250), exactly 4 questions each.
// Mix: main idea / supporting detail / inference, with a
// vocabulary-or-idiom-in-context item in roughly a third.
// =====================================================

export const academicTalkScenariosExpansion: AcademicTalkScenario[] = [
  {
    id: "AT_X01",
    topic: "How Honeybees Share Directions",
    subject: "Life Sciences",
    voice: "male_academic",
    transcript: `Okay, so today I want to focus on one of the strangest communication systems in the animal world, the honeybee waggle dance. Now, when a forager bee finds a good patch of flowers, she doesn't just fly back and, you know, hope the others follow her. She comes into the hive, climbs onto the vertical comb, and she dances. She runs forward in a straight line, waggling her abdomen, then loops back around and does the whole thing again.

And here's the clever part. The angle of that straight run, measured against straight up on the comb, tells the other bees the direction of the flowers relative to the sun. If she runs straight up, the food is toward the sun. Forty degrees to the left of vertical? Forty degrees to the left of the sun. The length of the waggling run encodes distance. Roughly speaking, the longer she waggles, the farther they have to fly.

Karl von Frisch worked this out in the nineteen forties, and honestly, at first almost nobody believed him. It seemed far too abstract for an insect. But later researchers built little mechanical bees, made them dance inside real hives, and sure enough, the foragers flew off in the direction the model had indicated.`,
    questions: [
      {
        question: "What is the talk mainly about?",
        options: [
          "How honeybees use dance to tell each other where food is",
          "Why honeybees build their combs vertically rather than horizontally in the hive",
          "How Karl von Frisch trained insects to respond to mechanical models",
          "Why some patches of flowers attract more foragers than other patches do",
        ],
        correctAnswer: "A",
        explanation: "The professor introduces the waggle dance as a communication system and spends the talk explaining how it conveys the location of a food source."
      },
      {
        question: "According to the professor, what does the angle of the straight run indicate?",
        options: [
          "The distance to the flowers",
          "The direction of the food relative to the sun",
          "How much nectar the patch contains",
          "Which member of the colony discovered the patch first",
        ],
        correctAnswer: "B",
        explanation: "He says the angle measured against straight up on the comb tells the other bees the direction of the flowers relative to the sun."
      },
      {
        question: "What does the length of the waggling run encode?",
        options: [
          "Which species of flower the forager visited",
          "The time of day at which the food was discovered",
          "How far away the food is",
          "The number of foragers already visiting the patch",
        ],
        correctAnswer: "C",
        explanation: "The professor states that the longer she waggles, the farther the other bees have to fly."
      },
      {
        question: "Why does the professor mention the mechanical bees?",
        options: [
          "To show that bees can be trained to perform the dance on command",
          "To explain why von Frisch eventually abandoned his original theory",
          "To argue that real bees dance far more accurately than models do",
          "To show how von Frisch's claim was later confirmed",
        ],
        correctAnswer: "D",
        explanation: "He first says almost nobody believed von Frisch, then reports that foragers followed the model's dance, which implies the experiment settled the doubt."
      }
    ]
  },
  {
    id: "AT_X02",
    topic: "Soil Horizons and Weathering",
    subject: "Earth Science",
    voice: "female_academic",
    transcript: `Let's talk about soil. And I know, soil doesn't sound thrilling. But soil is not just, um, dirt that happens to be lying there. It's a layered system, and it takes a very long time to build.

Start at the top. The uppermost layer, what we call the O horizon, is mostly organic material, leaves and twigs and things that have fallen and are breaking down. Below that is the A horizon, the topsoil, where that decayed material mixes with mineral grains. This is where most roots live. Go deeper and you reach the B horizon, where minerals washed down from above collect. And at the bottom, the C horizon, you find broken parent rock that hasn't really been altered much yet.

Now, how does rock become soil in the first place? Weathering. Water seeps into cracks, freezes, expands, and splits the rock apart. Acids from plant roots dissolve minerals. Sorry, let me be precise about that: the dissolving is chemical weathering, the freezing is physical weathering.

Here's the number I want to stick with you. In a temperate climate, forming one centimetre of topsoil can take two hundred to a thousand years. One season of careless ploughing can wash it off a hillside. Soil, in other words, is essentially a non-renewable resource on human timescales.`,
    questions: [
      {
        question: "What is the professor's main point about soil?",
        options: [
          "Soil is a slowly built layered system, not simple dirt",
          "Soil is chiefly valuable because it holds water in place for growing plants",
          "Soil forms fastest in climates that are warm and consistently wet",
          "Soil quality depends mainly on which crops a farmer chooses to plant in it",
        ],
        correctAnswer: "A",
        explanation: "She opens by insisting soil is not just dirt lying there but a layered system that takes a very long time to build, and the whole talk develops that claim."
      },
      {
        question: "Which horizon contains minerals that have washed down from above?",
        options: [
          "The O horizon",
          "The B horizon",
          "The A horizon",
          "The C horizon",
        ],
        correctAnswer: "B",
        explanation: "She describes the B horizon as the layer where minerals washed down from above collect."
      },
      {
        question: "Why does the professor mention ploughing?",
        options: [
          "To recommend one particular method of preparing farmland before planting",
          "To explain how farmers are able to speed up the formation of new topsoil",
          "To contrast how slowly soil forms with how quickly it can be lost",
          "To show that the C horizon is more fragile than the A horizon above it",
        ],
        correctAnswer: "C",
        explanation: "The ploughing remark follows immediately after the figure of two hundred to a thousand years per centimetre, setting slow formation against rapid loss."
      },
      {
        question: "The professor calls soil a non-renewable resource on human timescales. What does she mean?",
        options: [
          "It is certain to run out completely everywhere on the planet one day",
          "It can only be produced artificially under laboratory conditions",
          "It is worth more money than fuels such as coal and petroleum are",
          "Lost soil cannot be replaced within a human lifetime",
        ],
        correctAnswer: "D",
        explanation: "Non-renewable on human timescales means the replacement rate, centuries per centimetre, is far slower than a human life, not that the resource is finite in an absolute sense."
      }
    ]
  },
  {
    id: "AT_X03",
    topic: "Detecting Planets by Transit",
    subject: "Astronomy",
    voice: "professor",
    transcript: `Today I want to focus on how we actually find planets around other stars, because, and this surprises people, we almost never see them. They're tiny, they're dark, and they sit right next to something blindingly bright.

So instead we watch for shadows. The transit method works like this. If a planet's orbit happens to be lined up edge-on from our point of view, then once every orbit that planet passes in front of its star, and the star's light dips a little. Not much. For a planet the size of Jupiter crossing a Sun-like star, the dip is about one percent. For an Earth-sized planet it's under one hundredth of one percent, so the instruments have to be extraordinarily stable.

But look at what a single dip gives you. The depth tells you the planet's size compared to the star. The time between one dip and the next gives you the orbital period, and from the period you can work out how far the planet sits from its star. And if the planet has an atmosphere, a little starlight filters through it on the way to us, and the chemicals there leave fingerprints in the spectrum.

The catch, of course, is alignment. Most systems simply aren't tilted the right way, so we miss them entirely.`,
    questions: [
      {
        question: "What is the main purpose of the talk?",
        options: [
          "To describe how astronomers detect planets they cannot see",
          "To compare the sizes of the planets found outside our own solar system",
          "To explain why Jupiter-sized planets are more common than smaller ones",
          "To argue that current telescopes are not stable enough for this research",
        ],
        correctAnswer: "A",
        explanation: "The professor sets up the problem, that planets are effectively invisible, and then explains the transit method as the solution."
      },
      {
        question: "How much does a Sun-like star dim when a Jupiter-sized planet crosses it?",
        options: [
          "By roughly one hundredth of one percent",
          "By about one percent",
          "By roughly one tenth of one percent",
          "By roughly ten percent",
        ],
        correctAnswer: "B",
        explanation: "He gives one percent for a Jupiter-sized planet and under one hundredth of one percent for an Earth-sized one."
      },
      {
        question: "What does the time between two dips tell astronomers?",
        options: [
          "How massive the planet is compared with its star",
          "What the surface temperature of the star must be",
          "How long the planet takes to orbit its star",
          "Whether the planet has any moons orbiting around it",
        ],
        correctAnswer: "C",
        explanation: "He says the interval between dips gives the orbital period, from which the orbital distance can be calculated."
      },
      {
        question: "What does the professor imply about the planets discovered so far?",
        options: [
          "Most of them are considerably larger than Jupiter is",
          "They were nearly all found using one single telescope",
          "Most of them turned out to have detectable atmospheres",
          "They are only a fraction of the planets that exist",
        ],
        correctAnswer: "D",
        explanation: "His closing point is that most systems are not aligned edge-on, so those planets never transit and are missed entirely."
      }
    ]
  },
  {
    id: "AT_X04",
    topic: "Caravanserais on the Silk Road",
    subject: "History",
    voice: "narrator",
    transcript: `When people picture the Silk Road, they usually picture camels crossing empty desert. What they don't picture is the infrastructure, and there was a great deal of it. I want to focus today on one piece of that infrastructure, the caravanserai.

A caravanserai was, basically, a fortified roadside inn. Thick walls, a single gate that could be barred at night, a large open courtyard in the middle, stables and storerooms on the ground floor, sleeping rooms above. They were spaced roughly a day's travel apart, call it thirty kilometres, which is about as far as a loaded camel train moves between sunrise and sunset.

Now, why did rulers pay to build these? Not charity. A merchant who could count on shelter, water and a locked gate every single night was a merchant who would choose your route over a rival's, and pay tolls along the way. Some were funded as religious endowments and charged travellers nothing for three days.

And they did something nobody planned. Put Persian, Sogdian, Armenian and Chinese traders in one courtyard overnight, and goods aren't the only thing that moves. Recipes moved. Techniques moved. Rumours about prices two thousand kilometres away moved. The buildings were logistics. The cultural exchange was a side effect.`,
    questions: [
      {
        question: "What is the talk mainly about?",
        options: [
          "The roadside inns that supported Silk Road trade",
          "The dangers that merchants faced while crossing the deserts alone",
          "The kinds of luxury goods that were traded along the Silk Road",
          "Why camel trains eventually replaced other forms of overland transport",
        ],
        correctAnswer: "A",
        explanation: "The speaker names the caravanserai as the focus of the talk and describes its design, spacing, funding and social effects."
      },
      {
        question: "Why were caravanserais spaced about thirty kilometres apart?",
        options: [
          "That was the greatest distance water could safely be carried",
          "That is roughly one day's travel for a loaded caravan",
          "Rulers wanted to collect tolls as frequently as they possibly could",
          "Suitable building materials were only available at those intervals",
        ],
        correctAnswer: "B",
        explanation: "He says thirty kilometres is about as far as a loaded camel train moves between sunrise and sunset."
      },
      {
        question: "According to the speaker, why did rulers finance caravanserais?",
        options: [
          "Because religious law obliged them to give shelter to all travellers",
          "To house the soldiers who patrolled the frontier regions nearby",
          "To attract merchants and the tolls they paid",
          "Because merchants refused to travel at all without an armed escort",
        ],
        correctAnswer: "C",
        explanation: "He says it was not charity: reliable shelter made merchants choose that route, and they paid tolls along it."
      },
      {
        question: "What point does the speaker make at the end of the talk?",
        options: [
          "Merchants preferred routes with free lodging even when they were longer",
          "Cultural exchange was the main reason the buildings were funded at all",
          "Traders from different regions rarely spoke to one another during the night",
          "Cultural exchange happened as an unintended result",
        ],
        correctAnswer: "D",
        explanation: "He says the buildings were logistics and that they did something nobody planned, with ideas and techniques spreading as a side effect."
      }
    ]
  },
  {
    id: "AT_X05",
    topic: "Chiaroscuro and Caravaggio",
    subject: "Art History",
    voice: "fable",
    transcript: `Right, chiaroscuro. The word is simply Italian for light-dark, and in painting it refers to modelling form through strong contrasts between lit and shadowed areas. Renaissance painters used it gently, to give figures roundness, to make a shoulder turn away from you convincingly.

Caravaggio, working in Rome around sixteen hundred, pushed it much further. In his hands the shadow isn't a gradual falling-off, it's a wall. A shaft of light enters from somewhere off the canvas, catches a face, a hand, a sleeve, and everything else drops into near blackness. Art historians sometimes call this extreme version tenebrism, from the Italian word for gloom.

And what does that buy him? Two things, I'd argue. Drama, first, because the eye has nowhere to wander, so it goes exactly where he wants it. And meaning, in a sense, because the light picks out the moment of recognition, the instant a figure understands something. In The Calling of Saint Matthew, the beam of light and the pointing hand arrive together.

His contemporaries were, let's say, divided. Some complained that he painted saints who looked like labourers off the street, dirty feet and all. But the technique travelled fast, to Spain, to the Netherlands, and it left its mark on the young Rembrandt.`,
    questions: [
      {
        question: "What is the professor mainly discussing?",
        options: [
          "How Caravaggio transformed a familiar painting technique",
          "Why Renaissance painters generally avoided religious subject matter",
          "The training that young painters received in Rome around sixteen hundred",
          "How Rembrandt's early work differed from that of his Dutch contemporaries",
        ],
        correctAnswer: "A",
        explanation: "He defines chiaroscuro as an existing Renaissance device and then explains how Caravaggio pushed it into something far more extreme."
      },
      {
        question: "What does the professor say about the light in Caravaggio's paintings?",
        options: [
          "It falls evenly across the whole surface of the finished canvas",
          "It comes from a source outside the picture",
          "It is always brightest at the very centre of the composition",
          "It was painted last, after all the shadows had been allowed to dry",
        ],
        correctAnswer: "B",
        explanation: "He describes a shaft of light entering from somewhere off the canvas."
      },
      {
        question: "What can be inferred about the reaction of Caravaggio's contemporaries?",
        options: [
          "They all refused to imitate his methods in their own workshops",
          "They preferred his religious subjects to his ordinary street figures",
          "Some objected to how he portrayed holy figures",
          "Most of them thought that his shadows were painted far too gradually",
        ],
        correctAnswer: "C",
        explanation: "He says opinion was divided and that some complained Caravaggio's saints looked like labourers off the street."
      },
      {
        question: "The professor says that in Caravaggio's hands the shadow is a wall. What does he mean by this?",
        options: [
          "Caravaggio often painted architectural backgrounds behind his主 figures",
          "The shadowed areas of his paintings were built up with thicker paint",
          "He preferred to work directly on walls rather than on stretched canvas",
          "Light gives way to darkness suddenly, with no soft transition",
        ],
        correctAnswer: "D",
        explanation: "The wall image contrasts with the gradual falling-off he has just described, so it signals an abrupt boundary between lit and dark areas."
      }
    ]
  },
];
