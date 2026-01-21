
import { AcademicQuestion } from "./reading-2026";

export const batch19Passages: AcademicQuestion[] = [
    {
        id: "batch19_topic1_harmonic_motion",
        taskType: "academic",
        title: "Simple Harmonic Motion: Pendulums and Springs",
        passage: `
**Rhetorical Structure:** Principle/Limitation
**Dominant TOEFL Skill:** Factual Information

A pendulum swinging or a spring bouncing are examples of *Simple Harmonic Motion* (SHM).
The defining trait is a "Restoring Force."
When you pull a pendulum away from the center (equilibrium), Gravity pulls it back.
When you pull a spring, Elasticity pulls it back.
The force is proportional to the distance ($F = -kx$). The further you pull, the harder it snaps back. [A]

Galileo discovered the magic of the pendulum in a cathedral. He watched a chandelier swing. He timed it with his pulse.
He found that the *Period* (time for one swing) depends only on the **Length** of the string.
It does *not* depend on the Mass (weight). A heavy bob and a light bob swing at the same rhythm. [B]
It does *not* depend on the Amplitude (how wide the swing is), as long as the angle is small.

This is why pendulums made great clocks (Grandfather Clocks). They act as a constant timekeeper.

However, SHM assumes "no friction."
In reality, air resistance creates *Damping*. The energy is lost to heat. The swings get smaller and smaller until it stops. [C] To keeps a clock running, you need a mechanism (weights/gears) to give it a tiny push every swing to fight damping.
Also, if the angle is too big (>15 degrees), the math breaks (it becomes chaotic). [D]
    `.trim(),
        questions: [
            {
                id: "batch19_topic1_harmonic_motion_Q1",
                question: "Why is a pendulum's period independent of its mass?",
                options: [
                    "Because heavier things fall faster.",
                    "Because gravity acts on all mass equally, so a heavy bob and a light bob swing at the same rhythm.",
                    "It depends on the color.",
                    "Air resistance stops it."
                ],
                correctAnswer: "B",
                explanation: "The passage states: 'It does *not* depend on the Mass (weight). A heavy bob and a light bob swing at the same rhythm.'"
            }
        ]
    },
    {
        id: "batch19_topic2_aztec_tenochtitlan",
        taskType: "academic",
        title: "The Aztec Empire and Tenochtitlan",
        passage: `
**Rhetorical Structure:** Description/Fall
**Dominant TOEFL Skill:** Inference

The Aztec capital, *Tenochtitlan*, was an engineering marvel. Built in 1325 on an island in Lake Texcoco (now Mexico City), it was larger and cleaner than any city in Europe at the time (200,000 people).

Because they lived on a lake, they invented *Chinampas* ("Floating Gardens"). [A]
They wove reeds together and piled mud on top to create artificial islands.
These were hyper-fertile (7 crops a year).
They used canals for transport (like Venice).

The center was the Templo Mayor, where they practiced human sacrifice.
They believed the Sun God (Huitzilopochtli) needed blood to fight the darkness every night. If they stopped sacrificing, the sun would die. [B]
This required constant war ("Flower Wars") to capture prisoners for the altar.
This made the Aztecs hated by their neighbors (Tlaxcalans).

When Hernán Cortés arrived in 1519, he had only 500 men. He couldn't defeat the Aztecs alone.
But he found the Tlaxcalans. He united the native enemies of the Aztecs. [C]
Also, Smallpox arrived with the Spanish. It killed the Emperor Cuitláhuac and 40% of the population.

The city fell in 1521. The Spanish drained the lake and built Mexico City on top. Today, the soft lakebed soil causes the modern city to sink inches every year. [D]
    `.trim(),
        questions: [
            {
                id: "batch19_topic2_aztec_tenochtitlan_Q1",
                question: "Why did the Aztecs practice 'Flower Wars'?",
                options: [
                    "To grow flowers.",
                    "To alleviate the need for constant human sacrifice by capturing live prisoners for the altar to feed the Sun God.",
                    "To practice for the Olympics.",
                    "To collect gold."
                ],
                correctAnswer: "B",
                explanation: "The text explains: 'This required constant war (\"Flower Wars\") to capture prisoners for the altar.'"
            }
        ]
    },
    {
        id: "batch19_topic3_sleep_biology",
        taskType: "academic",
        title: "The Biology of Sleep: REM and NREM",
        passage: `
**Rhetorical Structure:** Process/Function
**Dominant TOEFL Skill:** Classification

We spend 33% of our lives asleep. Why? It isn't just to save energy (you only save 100 calories). It is for brain maintenance. Sleep has cycles, roughly 90 minutes long, alternating between NREM (Non-Rapid Eye Movement) and REM.

**NREM (Deep Sleep):**
Stages 1-3.
The brain waves slow down (Delta Waves).
This is physical repair. Growth hormone is released. Muscles rebuild.
Crucially, the "Glymphatic System" turns on. The brain cells shrink, and cerebrospinal fluid washes through to flush out toxins (like Beta-Amyloid, which causes Alzheimer's). [A]

**REM (Dream Sleep):**
Rapid Eye Movement.
The brain is hyper-active. It looks awake on a scan.
But the body is paralyzed ("Atonia") so you don't act out your dreams. [B]
This is emotional/memory processing. The brain takes the day's memories and moves them from short-term (Hippocampus) to long-term storage (Cortex). It deletes the junk.

The cycle changes.
Early night: Mostly Deep Sleep (Physical fix).
Late night (morning): Mostly REM (Mental fix). [C]
If you wake up an hour early, you cut off your REM. You will be grumpy and forgetful.

Sleep deprivation is torture. Rats die after 2 weeks without sleep (faster than starvation). [D] The brain effectively poisons itself.
    `.trim(),
        questions: [
            {
                id: "batch19_topic3_sleep_biology_Q1",
                question: "What is the primary function of the 'Glymphatic System' during NREM sleep?",
                options: [
                    "To dream.",
                    "It flushes out toxins like Beta-Amyloid from the brain by shrinking brain cells and allowing cerebrospinal fluid to wash through.",
                    "To build muscle.",
                    "To digest food."
                ],
                correctAnswer: "B",
                explanation: "The passage notes: 'The \"Glymphatic System\" turns on... cerebrospinal fluid washes through to flush out toxins.'"
            }
        ]
    },
    {
        id: "batch19_topic4_magical_realism",
        taskType: "academic",
        title: "Magical Realism: Gabriel García Márquez",
        passage: `
**Rhetorical Structure:** Definition/Style
**Dominant TOEFL Skill:** Vocabulary in Context

*Magical Realism* is a literary genre closely associated with Latin America (the "Boom" of the 1960s). Its master was Gabriel García Márquez (*One Hundred Years of Solitude*).

It is NOT Fantasy (like *Harry Potter*).
In Fantasy, magic is a surprise. A wizard enters the real world, and people say "Wow, magic!"
In Magical Realism, the magic is mundane. It is treated as a normal part of daily life. [A]

Example: In *100 Years*, a character (Remedios the Beauty) floats into the sky while folding sheets.
The family doesn't scream. They just complain that she took the expensive sheets with her. [B]
Or it rains for 4 years straight. No one panics; they just fix the roof.

Why write this way?
Márquez said reality in Latin America *is* crazy. Dictators, colonial history, Catholic miracles, and indigenous myths blend together.
Rational realism (European style) couldn't capture the "outsized" reality of the tropics. [C]

Paradoxically, by adding magic, he makes the political critique sharper. The "Banana Massacre" in the book (where the army kills strikers and erases the memory) feels surreal, but it successfully depicts the real gaslighting of authoritarian history. [D]
    `.trim(),
        questions: [
            {
                id: "batch19_topic4_magical_realism_Q1",
                question: "How does Magical Realism differ from Fantasy according to the passage?",
                options: [
                    "It has wizards.",
                    "In Magical Realism, magic is treated as a mundane part of daily life, whereas in Fantasy, it is a surprise.",
                    "It is set in space.",
                    "It is always scary."
                ],
                correctAnswer: "B",
                explanation: "The diagnosis is: 'In Fantasy, magic is a surprise... In Magical Realism, the magic is mundane. It is treated as a normal part of daily life.'"
            }
        ]
    },
    {
        id: "batch19_topic5_creative_destruction",
        taskType: "academic",
        title: "Economics: Schumpeter and Creative Destruction",
        passage: `
**Rhetorical Structure:** Theory/Paradox
**Dominant TOEFL Skill:** Prose Summary

Capitalism is usually described as a system of equilibrium. Joseph Schumpeter (1942) disagreed. He saw it as a "perennial gale of *Creative Destruction*."

For an economy to grow, the old must die.
The car didn't just add to the horse-and-buggy industry; it annihilated it. The blacksmiths, whip-makers, and stable boys lost their jobs. This was the "Destruction." [A]
But the car created new jobs: mechanics, gas stations, road builders. This was the "Creation."
The net result was higher productivity and wealth.

Schumpeter argued that the hero of capitalism is not the Owner, but the **Entrepreneur**.
The Entrepreneur introduces an innovation (tech or method) that disrupts the status quo. [B]
This disruption creates a temporary monopoly (super-profits).
Eventually, competitors copy it, profits fall, and equilibrium returns until the next disruption.

Implication:
Trying to save dying industries (Bailouts) is bad. [C] It stops progress. You are freezing the system in the past. To have iPhones, you must let Kodak and Nokia fail.
Pain is necessary for growth.
However, this is cold comfort to the blacksmith. [D] This tension—efficiency vs. social stability—is the central conflict of modern economic policy.
    `.trim(),
        questions: [
            {
                id: "batch19_topic5_creative_destruction_Q1",
                question: "According to Schumpeter, why is 'Creative Destruction' necessary for economic growth?",
                options: [
                    "It creates chaos.",
                    "Because new innovations must replace old industries to increase productivity, even though it causes temporary unemployment.",
                    "To save horses.",
                    "To lower taxes."
                ],
                correctAnswer: "B",
                explanation: "The text argues: 'For an economy to grow, the old must die... The net result was higher productivity and wealth.'"
            }
        ]
    },
    {
        id: "batch19_topic6_grand_canyon_stratigraphy",
        taskType: "academic",
        title: "Geology: Stratigraphy of the Grand Canyon",
        passage: `
**Rhetorical Structure:** Chronology/Observation
**Dominant TOEFL Skill:** Factual Information

The Grand Canyon is not just a big hole; it is a book of history. By looking at the layers of rock exposed by the Colorado River, we can read 2 billion years of Earth's past. This is *Stratigraphy*.

Principle of Superposition: The rock on the bottom is the oldest. The rock on top is the youngest.

**The Layers (Top to Bottom):**
1.  **Kaibab Limestone (Top):** 270 million years old. Contains fossils of sea shells and sharks.
    Conclusion: This desert was once a warm, shallow ocean. [A]
2.  **Coconino Sandstone:** Below the limestone. Massive cross-bedded petrified dunes.
    Conclusion: Before the ocean, it was a giant Sahara-like desert.
3.  **Hermit Shale:** Mud/Silt with fern fossils.
    Conclusion: It was a swampy river delta. [B]

**The Great Unconformity:**
Deep down, there is a gap.
The Tapeats Sandstone (500 MYA, Cambrian) sits directly on top of the Vishnu Schist (1.7 BYA, Precambrian).
1.2 billion years are missing! [C]
Where did the rock go? It was eroded away before the sandstone was laid down. It is like tearing 100 pages out of the middle of the book.

The Canyon itself is young. The river only started cutting it about 6 million years ago. [D] It carved through the ancient cake like a knife.
    `.trim(),
        questions: [
            {
                id: "batch19_topic6_grand_canyon_stratigraphy_Q1",
                question: "What is the significance of the 'Great Unconformity' in the Grand Canyon?",
                options: [
                    "It is a big hole.",
                    "It represents a gap in the geological record where 1.2 billion years of rock layers are missing, likely eroded away.",
                    "It is a river.",
                    "It is a fossil."
                ],
                correctAnswer: "B",
                explanation: "The passage notes: '1.2 billion years are missing!... It is like tearing 100 pages out of the middle of the book.'"
            }
        ]
    },
    {
        id: "batch19_topic7_polymers_nylon",
        taskType: "academic",
        title: "The Age of Plastics: Polymers and Nylon",
        passage: `
**Rhetorical Structure:** Innovation/Process
**Dominant TOEFL Skill:** Inference

A *Polymer* (Greek: "Many Parts") is a giant molecule made of repeating small units (Monomers) linked in a chain. DNA and proteins are natural polymers. In the 20th century, we learned to synthesize them. This created the Plastic Age.

The breakthrough was *Nylon*.
Invented by Wallace Carothers at DuPont in 1935.
He reacted a diamine with an acid. They fused to form a long strong chain (Polyamide). [A]

It was the first truly synthetic fiber (Rayon was made from wood pulp). Nylon was made from "coal, water, and air."
It was strong and elastic.
DuPont targeted the women's hosiery market (Silk stockings were expensive and ripped).
"Nylons" went on sale in 1940. They sold 64 million pairs in the first year. [B]

Then WWII started.
Nylon was drafted. All production went to the military.
Parachutes, ropes, tents, tires. Silk came from Japan (the enemy). We needed a domestic substitute. [C]
Nylon won the war.

After the war, the technology exploded.
Polyesters, Polyethylene, PVC.
Plastic is cheap, sterile, and durable.
Paradox: Its durability is its curse. A plastic bottle lasts 450 years. [D] We built a disposable culture out of an indestructible material.
    `.trim(),
        questions: [
            {
                id: "batch19_topic7_polymers_nylon_Q1",
                question: "Why did DuPont originally invent Nylon?",
                options: [
                    "To build tents.",
                    "To create a synthetic substitute for expensive silk stockings.",
                    "To make bombs.",
                    "To save whales."
                ],
                correctAnswer: "B",
                explanation: "The text states: 'DuPont targeted the women's hosiery market (Silk stockings were expensive and ripped).'"
            }
        ]
    },
    {
        id: "batch19_topic8_atomic_bomb",
        taskType: "academic",
        title: "The Manhattan Project: Physics at War",
        passage: `
**Rhetorical Structure:** Project/Dilemma
**Dominant TOEFL Skill:** Negative Factual Information

In 1939, Einstein wrote to FDR warning that Nazi Germany might build a nuclear bomb. The US responded with the *Manhattan Project*, a secret effort to build it first. Led by physicist J. Robert Oppenheimer and General Leslie Groves.

The Physics: Nuclear Fission.
If you hit a Uranium-235 atom with a neutron, it splits.
It releases energy + 2 more neutrons.
If those 2 neutrons hit 2 more atoms -> 4 neutrons -> 8 -> 16.
A Chain Reaction. [A]

The Challenge: Enrichment.
Natural Uranium is mostly U-238 (useless for bombs). Only 0.7% is U-235.
They act the same chemically. You can't separate them with acid.
You have to use the tiny weight difference.
They built massive centrifuges at Oak Ridge, Tennessee. It consumed 10% of the US electricity supply. [B]

The Test: Trinity (July 1945).
New Mexico desert.
They imploded a Plutonium core.
It worked. Oppenheimer recalled the Hindu scripture: "Now I am become Death, the destroyer of worlds." [C]

The Choice:
Germany had already surrendered. The target was Japan.
Truman dropped two bombs (Hiroshima/Nagasaki).
He argued it prevented an invasion that would cost 1 million lives.
Critics argue Japan was already defeated and it was a warning shot to the Soviets.
Regardless, it ended the age of Total War and began the Cold War. [D]
    `.trim(),
        questions: [
            {
                id: "batch19_topic8_atomic_bomb_Q1",
                question: "What was the main scientific challenge in building the atomic bomb?",
                options: [
                    "Finding Uranium.",
                    "Enriching Uranium to separate the rare U-235 isotope from the common U-238, which are chemically identical.",
                    "Building the case.",
                    "Hiring scientists."
                ],
                correctAnswer: "B",
                explanation: "The text explains: 'The Challenge: Enrichment... You can't separate them with acid. You have to use the tiny weight difference.'"
            }
        ]
    },
    {
        id: "batch19_topic9_attachment_theory",
        taskType: "academic",
        title: "Attachment Theory: John Bowlby and Mary Ainsworth",
        passage: `
**Rhetorical Structure:** Theory/Experiment
**Dominant TOEFL Skill:** Sentence Insertion

In the 1940s, psychology assumed that babies love their mothers simply because mothers provide food (Cupboard Love). John Bowlby disagreed. He argued babies have an innate, evolutionary drive to seek emotional proximity for safety. This is *Attachment Theory*.

Mary Ainsworth tested this with the "Strange Situation" experiment (1970).
A mother and baby enter a room. A stranger enters. The mother leaves. The baby cries. The mother returns.
How the baby reacts to the *return* defines the Attachment Style.

1.  **Secure Attachment (60%):** Baby cries when Mom leaves, but is quickly soothed when she returns. Mom is a "Secure Base." [A]
    Result: Independent, healthy adults.
2.  **Anxious-Resistant:** Baby is clingy. When Mom returns, the baby wants a hug but *also pushes her away*. They are angry. They don't trust she will stay.
    Result: Needy adults. [B]
3.  **Avoidant:** Baby doesn't care when Mom leaves and ignores her when she returns. They have learned that crying doesn't work. They shut down needs.
    Result: Emotionally distant adults.

This proved that early childhood interactions wire the brain for future relationships. [C]
It is not about food. Harry Harlow showed that baby monkeys preferred a "Cloth Mother" (soft/warm) that gave no milk over a "Wire Mother" that gave milk. [D] We need love more than calories.
    `.trim(),
        questions: [
            {
                id: "batch19_topic9_attachment_theory_Q1",
                question: "How does a child with 'Secure Attachment' react in the 'Strange Situation' experiment?",
                options: [
                    "They ignore the mother.",
                    "They cry when the mother leaves but are quickly soothed when she returns, using her as a secure base.",
                    "They hit the mother.",
                    "They sleep."
                ],
                correctAnswer: "B",
                explanation: "The passage describes: 'Baby cries when Mom leaves, but is quickly soothed when she returns. Mom is a \"Secure Base.\"' "
            }
        ]
    },
    {
        id: "batch19_topic10_drake_equation",
        taskType: "academic",
        title: "The Drake Equation: Are We Alone?",
        passage: `
**Rhetorical Structure:** Formula/Analysis
**Dominant TOEFL Skill:** Prose Summary

In 1961, astronomer Frank Drake wrote an equation to estimate the number of active, communicative extraterrestrial civilizations in the Milky Way galaxy ($N$).

$N = R_* \times f_p \times n_e \times f_l \times f_i \times f_c \times L$

It breaks a huge guess into small, manageable guesses.
1.  **$R_*$:** Rate of star formation. (We know this: 7 per year).
2.  **$f_p$:** Fraction of stars with planets. (We know this now: almost 100%).
3.  **$n_e$:** Planets in the "Goldilocks Zone" (Habitable). (Maybe 1 in 5). [A]
4.  **$f_l$:** Chance of Life starting. (Unknown).
5.  **$f_i$:** Chance of *Intelligence* evolving. (Unknown. Dinosaurs lived for 160 million years without building radios. Maybe intelligence is rare?).
6.  **$f_c$:** Chance of Technology.
7.  **$L$:** The big one. **Length of time** a civilization survives. [B]

If civilizations destroy themselves quickly (nuclear war/climate change) -> $L$ is small (100 years). Then $N = 0$. We are alone.
If civilizations survive for millions of years -> $L$ is big. Then $N$ is thousands. The galaxy is buzzing.

This is the *Fermi Paradox*: If the math says aliens should be everywhere, "Where is everybody?" [C]
Maybe we are the first.
Maybe there is a "Great Filter" that kills everyone before they get to space.
Maybe they are listening but following a "Prime Directive" not to talk to the primitives (us). [D]
    `.trim(),
        questions: [
            {
                id: "batch19_topic10_drake_equation_Q1",
                question: "What is the 'Fermi Paradox' in relation to extraterrestrial life?",
                options: [
                    "Aliens are green.",
                    "The contradiction that while the Drake Equation suggests aliens should be common, we have found no evidence of them ('Where is everybody?').",
                    "Space is infinite.",
                    "Time travel is impossible."
                ],
                correctAnswer: "B",
                explanation: "The text defines it: 'If the math says aliens should be everywhere, \"Where is everybody?\"'"
            }
        ]
    },
    {
        id: "batch19_topic11_cannibalism",
        taskType: "academic",
        title: "Anthropology of Cannibalism: Survival vs. Ritual",
        passage: `
**Rhetorical Structure:** Distinction/Cultural Context
**Dominant TOEFL Skill:** Vocabulary in Context

Cannibalism (Anthropophagy) is the ultimate taboo in the West. We associate it with starvation or madness. Anthropologists distinguish between two very different types.

**1. Survival Cannibalism:**
The Donner Party (1846) or the Rugby Team in the Andes (1972).
People eat only to prevent death. It is shameful. [A] It creates trauma. It is an act of desperation, not culture.

**2. Ritual (Social) Cannibalism:**
This is part of an organized belief system.
*   **Endocannibalism:** Eating your own group.
    The Wari’ people of Brazil ate their dead ancestors.
    It was an act of love. Leaving the body to rot in the cold ground was considered cruel and disrespectful. By eating them, they kept the spirit warm and within the community. [B]
    (This stopped because it spread Kuru/Prions - Batch 17).
*   **Exocannibalism:** Eating enemies.
    The Aztecs or Fijian warriors.
    This is about power. By eating the heart of a brave enemy, you absorb his courage (Mana). [C] It is the ultimate humiliation of the foe.

Western explorers often exaggerated these accounts (like Columbus and the "Caribs") to justify conquest. "They are savages, so we must civilize/enslave them." [D] Modern anthropology argues it was rare, but definitely existed as a complex cultural practice, not just hunger.
    `.trim(),
        questions: [
            {
                id: "batch19_topic11_cannibalism_Q1",
                question: "What is the difference between Endocannibalism and Exocannibalism as described in the passage?",
                options: [
                    "One is cooked, one is raw.",
                    "Endocannibalism involves eating one's own dead out of love/respect, while Exocannibalism involves eating enemies to absorb their power.",
                    "One is day, one is night.",
                    "One is for men, one for women."
                ],
                correctAnswer: "B",
                explanation: "The text distinguishes: 'Endocannibalism: Eating your own group... act of love' vs 'Exocannibalism: Eating enemies... about power.'"
            }
        ]
    },
    {
        id: "batch19_topic12_art_deco",
        taskType: "academic",
        title: "Art Deco: The Jazz Age Skycrapers",
        passage: `
**Rhetorical Structure:** Style/Symbolism
**Dominant TOEFL Skill:** Rhetorical Purpose

In the 1920s and 30s ("The Roaring Twenties"), a new style emerged: *Art Deco*. It was the visual language of the Machine Age. It represented speed, luxury, and the future.

Unlike the curvy, organic Art Nouveau (Batch 16), Art Deco was geometric.
Sharp angles. Zigzags. Sunbursts. [A]
Materials were shiny: Chrome, Glass, Aluminum, Bakelite.

The classic example is the **Chrysler Building** in New York.
The spire looks like a radiator grill or hubcaps.
The gargoyles are hood ornaments (Eagles). [B]
It celebrated the Automobile as a god.

Art Deco combined ancient motifs (King Tut’s tomb was discovered in 1922) with modern tech. You see Egyptian pyramids mixed with robot aesthetics (Metropolis).

It peaked during the Great Depression. It was Escapist. [C] Hollywood cinemas were built as Art Deco palaces to let people dream.
By WWII, it looked too frivolous and expensive. It was replaced by the stark, severe International Style (Bauhaus). [D] But for a brief moment, it captured the optimism of a world that thought technology would solve everything.
    `.trim(),
        questions: [
            {
                id: "batch19_topic12_art_deco_Q1",
                question: "What technological invention does the Chrysler Building's Art Deco style celebrate?",
                options: [
                    "The Airplane.",
                    "The Automobile, with its spire resembling a radiator grill and gargoyles shaped like hood ornaments.",
                    "The Radio.",
                    "The Toaster."
                ],
                correctAnswer: "B",
                explanation: "The passage notes: 'The classic example is the **Chrysler Building**... The spire looks like a radiator grill... It celebrated the Automobile as a god.'"
            }
        ]
    },
    {
        id: "batch19_topic13_haitian_revolution",
        taskType: "academic",
        title: "The Haitian Revolution: Freedom from Below",
        passage: `
**Rhetorical Structure:** Narrative/Uniqueness
**Dominant TOEFL Skill:** Factual Information

The French Revolution (1789) said "All men are free." Did that include slaves in the colonies?
Haiti (Saint-Domingue) was the richest colony in the world, producing 40% of Europe's sugar. It ran on the brutal labor of 500,000 African slaves, controlled by 30,000 whites.

In 1791, the slaves rose up. They burned the plantations.
They found a genius leader: **Toussaint Louverture**.
A former slave, he disciplined the chaotic rebels into an army.
He played the empires against each other. He fought for Spain, then for France (when France abolished slavery), then against Britain. [A]

Napoleon seized power in France. He wanted slavery back. He sent an invasion fleet to Haiti. [B]
Toussaint was captured and died in a French prison.
But his lieutenant, Jean-Jacques Dessalines, continued the fight.
The French army was destroyed by Guerilla warfare and Yellow Fever.

In 1804, Haiti declared independence.
It was the **only** successful slave revolt in history leading to a state.
It was the second independent republic in the Americas (after the US).

But the world punished them.
The US (Thomas Jefferson) was terrified of a black republic inspiring their own slaves. They embargoed Haiti. [C]
France demanded a massive indemnity (reparations) for the "lost property" (slaves). Haiti spent 100 years paying it off, crippling its economy. [D]
    `.trim(),
        questions: [
            {
                id: "batch19_topic13_haitian_revolution_Q1",
                question: "Why was the Haitian Revolution historically unique?",
                options: [
                    "It was short.",
                    "It was the only successful slave revolt in history that led to the founding of an independent state.",
                    "It used robots.",
                    "It failed."
                ],
                correctAnswer: "B",
                explanation: "The text states: 'It was the **only** successful slave revolt in history leading to a state.'"
            }
        ]
    },
    {
        id: "batch19_topic14_faradays_law",
        taskType: "academic",
        title: "Michael Faraday and Electromagnetic Induction",
        passage: `
**Rhetorical Structure:** Discovery/Application
**Dominant TOEFL Skill:** Sentence Insertion

In 1831, electricity and magnetism were seen as separate curiosities. Michael Faraday united them. He discovered that *movement* creates electricity.

Oersted had already shown that electricity creates magnetism (an electromagnet).
Faraday asked: Can magnetism create electricity?
He put a magnet inside a coil of wire. Nothing happened.
He pulled the magnet **out**. The current needle jumped. [A]
He pushed it **in**. The needle jumped the other way.

Conclusion: A *Changing* Magnetic Field induces an electric current. This is **Faraday's Law of Induction**.
If the magnet sits still, nothing happens. You need change (motion).

This invention is the **Generator**. [B]
Every power plant today (Coal, Nuclear, Hydro) is just a fancy way to spin a magnet inside a coil of wire.
Steam spins the turbine -> Turbine spins magnet -> Magnet pushes electrons -> Lights on.

It also works in reverse: The **Motor**.
Put electricity into a wire in a magnetic field -> The wire moves. [C]

Faraday was uneducated (a bookbinder's apprentice). He didn't know math. He visualized "Field Lines"—invisible rubber bands filling space. [D] Later, Maxwell turned these pictures into the equations that govern the modern world.
    `.trim(),
        questions: [
            {
                id: "batch19_topic14_faradays_law_Q1",
                question: "What condition is necessary for a magnetic field to induce an electric current in a wire?",
                options: [
                    "The magnet must be cold.",
                    "Exposure to a *changing* magnetic field, which requires motion (relative movement between the magnet and wire).",
                    "The wire must be gold.",
                    "It must be Tuesday."
                ],
                correctAnswer: "B",
                explanation: "The conclusion is: 'Conclusion: A *Changing* Magnetic Field induces an electric current... You need change (motion).'"
            }
        ]
    },
    {
        id: "batch19_topic15_mimicry",
        taskType: "academic",
        title: "Biological Mimicry: Batesian vs. Müllerian",
        passage: `
**Rhetorical Structure:** Comparison/Strategy
**Dominant TOEFL Skill:** Classification

"Don't eat me." Animals say this in two ways:
1.  Hiding (Camouflage).
2.  Advertising (Aposematism). Bright colors (Red/Yellow/Black) warn predators: "I am poisonous." (e.g., Poison Dart Frog, Wasp).

Mimicry is when a tasty animal steals that advertisement.

**Batesian Mimicry (The Fake):**
A harmless species evolves to look like a dangerous one.
The Hoverfly (tasty) looks exactly like a Wasp (sting). [A]
Birds avoid the Hoverfly because they learned not to eat Wasps.
Conditions: The Model (Wasp) must be more common than the Mimic. If there are too many fakes, the birds learn the lie and start eating them.

**Müllerian Mimicry (The Co-op):**
Two *dangerous* species evolve to look like *each other*.
The Monarch Butterfly (toxic) and the Viceroy Butterfly (also toxic) look the same. [B]
Why?
It makes learning easier for the predator.
If a bird has to learn "Don't eat Pattern A" AND "Don't eat Pattern B," more butterflies die during the lesson.
If they share Pattern A, the bird learns faster. They share the cost of educating the predator. [C]

A third rare type is **Aggressive Mimicry**.
The predator mimics the harmless thing.
The Firefly "Femme Fatale."
Female *Photuris* fireflies mimic the flash pattern of female *Photinus* fireflies. The *Photinus* male comes looking for love, and the *Photuris* female eats him. [D]
    `.trim(),
        questions: [
            {
                id: "batch19_topic15_mimicry_Q1",
                question: "What is the key advantage of 'Müllerian Mimicry', where two dangerous species look alike?",
                options: [
                    "They can date each other.",
                    "It educates predators faster because they only have to learn one warning pattern to avoid both species.",
                    "They save money on paint.",
                    "They are sisters."
                ],
                correctAnswer: "B",
                explanation: "The explanation is: 'If they share Pattern A, the bird learns faster. They share the cost of educating the predator.'"
            }
        ]
    },
    {
        id: "batch19_topic16_surrealism_dali",
        taskType: "academic",
        title: "Surrealism: Salvador Dalí and the Unconscious",
        passage: `
**Rhetorical Structure:** Theory/Technique
**Dominant TOEFL Skill:** Inference

Surrealism (1920s) was influenced by Sigmund Freud. Freud said our civilized self is a mask; the truth lies in the *Unconscious* (Dreams). Surrealists wanted to paint the dream.

Salvador Dalí was the showman of the movement.
His method: "Paranoiac-Critical Method." he would induce hallucinations by staring at objects until they morphed, or by waking up constantly.

*The Persistence of Memory* (1931).
The Melting Clocks. [A]
Hard objects (watches) become soft (cheese).
Time, which is rigid in real life, becomes fluid and meaningless in the dream world.
Ants crawl on the gold watch (symbol of decay).

Dalí said, "I don't do drugs. I *am* drugs." [B]

René Magritte (Belgian) was different. He was quiet and logical.
*The Treachery of Images*.
A painting of a pipe with the words "Ceci n'est pas une pipe" (This is not a pipe).
It is true. You cannot smoke it. It is a *painting* of a pipe. [C]
He challenged the relationship between the object, the image, and the word.

Surrealism matters because it liberated art from logic. [D] It allowed artists to explore the irrational, the nightmare, and the bizarre, influencing everything from advertising to music videos today.
    `.trim(),
        questions: [
            {
                id: "batch19_topic16_surrealism_dali_Q1",
                question: "How does the 'Paranoiac-Critical Method' used by Salvador Dalí enable artistic creation?",
                options: [
                    "By using computers.",
                    "It involves inducing self-imposed hallucinations or delirium to access the unconscious mind and 'paint the dream'.",
                    "By copying others.",
                    "By taking photos."
                ],
                correctAnswer: "B",
                explanation: "The text explains: 'His method: \"Paranoiac-Critical Method.\" he would induce hallucinations...'"
            }
        ]
    },
    {
        id: "batch19_topic17_silk_road_polo",
        taskType: "academic",
        title: "The Silk Road and Marco Polo",
        passage: `
**Rhetorical Structure:** Narrative/Observation
**Dominant TOEFL Skill:** Negative Factual Information

The Silk Road was not a road. It was a network of caravan tracks connecting China to Rome (and later Venice). Few people traveled the whole thing; goods were handed off like a relay baton.
Marco Polo (1254-1324) was the exception.

The Venetian merchant traveled to China (Yuan Dynasty) with his father. He stayed for 17 years, serving Kublai Khan (the Mongol Emperor).
When he returned to Italy, he was thrown in a Genoese prison (war).
He dictated his story to a cellmate. *The Travels of Marco Polo*.

Europeans didn't believe him. They called it *Il Milione* (The Million Lies).
He described:
1.  **Paper Money:** People trading burned bark for silk? Crazy. [A]
2.  **Coal:** "Black stones that burn longer than wood." Unknown in Europe.
3.  **Post System:** The Khan had stations with fresh horses every 25 miles, allowing messages to fly across the empire.

He didn't mention tea, chopsticks, or the Great Wall (which was in ruins then, see Batch 17). This led some to doubt he ever went. [B]
But modern historians confirm his details on salt taxes and geography are accurate.

His book changed the world.
It inspired Christopher Columbus. [C]
Columbus carried a copy of Polo's book (with notes in the margin) when he sailed West in 1492. He was looking for Polo's "Cipangu" (Japan) and the Khan's court. He found America instead. [D]
    `.trim(),
        questions: [
            {
                id: "batch19_topic17_silk_road_polo_Q1",
                question: "Why did many Europeans in Marco Polo's time doubt the truthfulness of his book 'The Travels'?",
                options: [
                    "It was too short.",
                    "He described things they had never seen (paper money, black stones burning) and omitted things they expected (tea, Great Wall), leading them to call it 'The Million Lies'.",
                    "He wrote in Chinese.",
                    "He was French."
                ],
                correctAnswer: "B",
                explanation: "The passage notes: 'Europeans didn't believe him. They called it *Il Milione*... He described: Paper Money... He didn't mention tea...'"
            }
        ]
    },
    {
        id: "batch19_topic18_mosaic_melting_pot",
        taskType: "academic",
        title: "Sociology of Immigration: Melting Pot vs. Mosaic",
        passage: `
**Rhetorical Structure:** Comparison/Metaphor
**Dominant TOEFL Skill:** Prose Summary

How should immigrants integrate? There are two competing models.

**The Melting Pot (Assimilation):**
Associated with the USA (historically).
Immigrants jump into the pot. They melt down. They lose their distinct shape (language/customs).
They blend with others to create a new alloy: "The American." [A]
Motto: *E Pluribus Unum* (Out of many, one).
Goal: Homogeneity and Unity.
Critique: It forces people to erase their heritage. (e.g., forbidding German language in schools).

**The Cultural Mosaic (Multiculturalism):**
Associated with Canada.
Immigrants are tiles in a mosaic.
Each tile keeps its own color and shape. They don't melt.
Together, they form a picture. [B]
Motto: "Unity in Diversity."
Goal: Retention of identity.
Critique: It creates "balkanization" (fragmentation). If everyone lives in separate ethnic enclaves, do they share any common values?

Sociologists now suggest a third model: **The Salad Bowl**. [C]
You are mixed together (like lettuce and tomatoes). You touch, but you stay distinct. But the "Dressing" (Law/Constitution) covers everyone.
The debate continues as globalization increases migration. Is a nation a soup or a salad? [D]
    `.trim(),
        questions: [
            {
                id: "batch19_topic18_mosaic_melting_pot_Q1",
                question: "What is the main criticism of the 'Melting Pot' model of assimilation?",
                options: [
                    "It is too hot.",
                    "It forces immigrants to lose their distinct cultural heritage and identity in favor of homogeneity.",
                    "It is hungry.",
                    "It creates mosaics."
                ],
                correctAnswer: "B",
                explanation: "The critique is: 'It forces people to erase their heritage. (e.g., forbidding German language in schools).'"
            }
        ]
    },
    {
        id: "batch19_topic19_panama_canal",
        taskType: "academic",
        title: "Engineering the Panama Canal: The Water Bridge",
        passage: `
**Rhetorical Structure:** Problem-Solution/Process
**Dominant TOEFL Skill:** Factual Information

To sail from New York to San Francisco, you had to go 13,000 miles around South America (Cape Horn). The Panama Canal (1914) cut that to 5,000 miles. But digging a ditch across Panama was impossible.

The French tried first (1881). They tried a "Sea-Level Canal" (like Suez).
They failed.
Problem 1: The Culebra Cut. The mountains kept sliding into the ditch.
Problem 2: Mosquitoes (Yellow Fever/Malaria) killed 22,000 workers.

The Americans took over (1904).
Solution 1: **Sanitation.** Dr. William Gorgas drained the swamps and put screens on windows. He proved mosquitoes carried the disease. Once the bugs died, the work could start. [A]
Solution 2: **Locks.**
Instead of digging down to sea level, they decided to lift the ships *over* the mountains.
They dammed the Chagres River to create a massive artificial lake (Gatun Lake) 85 feet above sea level. [B]

The System:
1.  Ship enters locks on Atlantic side.
2.  Gravity fills the chamber with water. Ship rises. (3 steps).
3.  Ship sails across Gatun Lake.
4.  Ship enters locks on Pacific side. Water drains out. Ship lowers. [C]

The Canal is a bridge of water.
Crucially, it uses no pumps. The water form the lake does all the work (gravity).
However, each ship uses 52 million gallons of fresh water, which is flushed into the ocean. [D] droughts now threaten the canal's capacity, as the lake level drops too low to float the big ships.
    `.trim(),
        questions: [
            {
                id: "batch19_topic19_panama_canal_Q1",
                question: "What was the primary sanitation measure taken by Dr. William Gorgas to allow the Panama Canal's construction?",
                options: [
                    "Washing hands.",
                    "He eradicated mosquitoes by draining swamps and installing screens, proving they carried Yellow Fever and Malaria.",
                    "Using soap.",
                    "Building hospitals."
                ],
                correctAnswer: "B",
                explanation: "The text states: 'Solution 1: **Sanitation.** Dr. William Gorgas drained the swamps... He proved mosquitoes carried the disease.'"
            }
        ]
    },
    {
        id: "batch19_topic20_horse_evolution",
        taskType: "academic",
        title: "Evolution of the Horse: From Forest to Plains",
        passage: `
**Rhetorical Structure:** Chronology/Adaptation
**Dominant TOEFL Skill:** Inference

The Classic textbook example of evolution is the Horse. We have a nearly perfect fossil record showing a straight line of change over 55 million years.

**1. Eohippus (Dawn Horse):**
Size of a fox.
Lived in forests (browsing leaves).
Feet: 4 toes on front, 3 on back. Padded feet (like a dog) to walk on soft forest floor. [A]
Teeth: Low crowns for soft leaves.

**2. Mesohippus (Middle Horse):**
Climate Change: The forests dried up. Grasslands spread (Batch 10 Savanna).
The horse got bigger (Sheep size).
Feet: 3 toes. The middle toe is getting bigger.

**3. Equus (Modern Horse):**
Lived on open plains.
Traits needed: Speed (to escape predators) and durability (to eat tough grass).
Feet: The side toes disappeared. The middle toe became a single **Hoof**. [B]
This is a rigid spring. It makes the leg lighter and faster.
Teeth: "Hypsodont" (High Crowned). Grass has silica (sand) inside it. It wears teeth down like sandpaper.
The horse evolved teeth that keep erupting (growing) throughout life to compensate for the wear. [C]

The horse actually evolved in North America, spread to Asia, and then went extinct in America 10,000 years ago (Climate/Humans?). [D] The Spanish brought them back in 1493, returning the horse to its evolutionary cradle.
    `.trim(),
        questions: [
            {
                id: "batch19_topic20_horse_evolution_Q1",
                question: "How did the change in environment from forest to grassland affect the physical evolution of the horse?",
                options: [
                    "They got smaller.",
                    "They evolved from small, multi-toed browsers to large, single-hoofed grazers adapted for speed and eating tough grass.",
                    "They grew wings.",
                    "They started swimming."
                ],
                correctAnswer: "B",
                explanation: "The passage tracks the change: 'Forests dried up... The horse got bigger... The middle toe became a single **Hoof**... to escape predators and eat tough grass.'"
            }
        ]
    }
];
