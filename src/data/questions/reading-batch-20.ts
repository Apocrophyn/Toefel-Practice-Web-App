
import { AcademicQuestion } from "./reading-2026";

export const batch20Passages: AcademicQuestion[] = [
    {
        id: "batch20_topic1_sound_resonance",
        taskType: "academic",
        title: "Physics of Music: Timbre and Resonance",
        passage: `
**Rhetorical Structure:** Definition/Distinction
**Dominant TOEFL Skill:** Vocabulary in Context

A middle C on a piano and a middle C on a violin have the same *Pitch* (Frequency: 261 Hz) and *Loudness* (Amplitude). Yet, they sound completely different. Why?
This quality is *Timbre* (Tone Color).

It happens because objects don't vibrate at just one frequency. They vibrate at a *Fundamental Frequency* (the main note) plus a series of *Overtones* (Harmonics). [A]
*   Piano: Strong 2nd and 3rd harmonics.
*   Violin: Strong high-frequency harmonics (sawtooth wave).
*   Flute: Almost pure sine wave (weak harmonics).
Your ear adds them up to identify the instrument.

Resonance amplifies this.
A violin body is a wooden box full of air.
When the string vibrates, the air inside vibrates too.
The shape of the box is tuned to amplify specific frequencies. [B]
A Stradivarius violin is famous because the wood and varnish create a uniquely beautiful set of resonances.

Soldiers marching on a bridge break step. Why?
If they march in unison at the bridge's *Resonant Frequency*, the bridge will start to swing. The swings get bigger and bigger until it snaps (see Tacoma Narrows, Batch 17). [C] Resonance is the power of adding small pushes at the right time. [D]
    `.trim(),
        questions: [
            {
                id: "batch20_topic1_sound_resonance_Q1",
                question: "Why do soldiers break step when crossing a bridge?",
                options: [
                    "To respect the bridge.",
                    "To avoid matching the bridge's resonant frequency, which could cause the bridge to swing violently and collapse.",
                    "To confuse the enemy.",
                    "They are tired."
                ],
                correctAnswer: "B",
                explanation: "The passage warns: 'If they march in unison at the bridge's *Resonant Frequency*, the bridge will start to swing... until it snaps.'"
            }
        ]
    },
    {
        id: "batch20_topic2_suffragettes",
        taskType: "academic",
        title: "The Suffragettes: Deeds Not Words",
        passage: `
**Rhetorical Structure:** Narrative/Tactics
**Dominant TOEFL Skill:** Inference

The fight for Women's Suffrage (Right to Vote) was not polite. In the UK, the *Suffragettes* (led by Emmeline Pankhurst) were radicals. Their motto: "Deeds, not Words."

They tired of asking nicely.
Tactics:
1.  **Arson:** They burned down empty buildings and mailboxes.
2.  **Hunger Strikes:** When arrested, they refused to eat. The government, terrified of a martyr dying in prison, force-fed them with tubes. This was torture and turned public opinion against the government. [AB]
3.  **The Cat and Mouse Act:** The government released starving women, let them recover, then re-arrested them.

The turning point was WWI (1914).
The Suffragettes paused their campaign to support the war effort. Women worked in munitions factories ("Canaries"—their skin turned yellow from TNT). [C]
They proved they could do "men's work."
The argument "Women are too fragile for politics" collapsed.
In 1918, women over 30 got the vote. In 1928, equal to men (21).

In the US, Alice Paul copied these militant tactics (picketing the White House during wartime). President Wilson finally caved, leading to the 19th Amendment (1920). [D] The victory was won not by logic, but by disruption.
    `.trim(),
        questions: [
            {
                id: "batch20_topic2_suffragettes_Q1",
                question: "What impact did the hunger strikes have on the government during the Suffragette campaign?",
                options: [
                    "The government ignored them.",
                    "The force-feeding of hunger strikers turned public opinion against the government, as it was viewed as torture.",
                    "The government gave them food.",
                    "The women gave up."
                ],
                correctAnswer: "B",
                explanation: "The text notes: 'This was torture and turned public opinion against the government.'"
            }
        ]
    },
    {
        id: "batch20_topic3_brain_plasticity",
        taskType: "academic",
        title: "Neuroscience: Neuroplasticity and Phantom Limbs",
        passage: `
**Rhetorical Structure:** Paradigm Shift/Phenomenon
**Dominant TOEFL Skill:** Prose Summary

Old dogma: The adult brain is fixed ("hard-wired"). If you lose neurons, they are gone forever.
New science: The brain is *Plastic*. It rewires itself constantly based on experience.

Case Study: **Phantom Limb Pain**.
A soldier loses an arm. He still feels the arm clenching in pain.
Why?
The "arm map" in the brain (Somatosensory Cortex) is still there, but it gets no signals from the missing hand.
The *Face* map is right next to the Hand map.
The Face map invades the quiet territory.
When the soldier shaves his face, the nerves cross-fire, and he feels it in his missing thumb. [A]

V.S. Ramachandran cured this with the **Mirror Box**.
He put a mirror next to the good arm. The soldier looks in the mirror. It looks like he has two arms.
He moves his good hand. The reflection moves.
The brain sees the "phantom" moving and relaxing. It updates the map. The pain vanishes. [B]

Plasticity also explains learning. "Neurons that fire together, wire together." [C]
London Taxi drivers (who memorize 25,000 streets) have a physically larger Hippocampus (memory center) than normal people. The brain grows like a muscle. [D]
    `.trim(),
        questions: [
            {
                id: "batch20_topic3_brain_plasticity_Q1",
                question: "How did the 'Mirror Box' therapy help cure phantom limb pain?",
                options: [
                    "It used lasers.",
                    "It tricked the brain into 'seeing' the missing limb move and relax by reflecting the good limb, allowing the brain to update its internal map.",
                    "It numbed the arm.",
                    "It used drugs."
                ],
                correctAnswer: "B",
                explanation: "The solution: 'The brain sees the \"phantom\" moving and relaxing. It updates the map. The pain vanishes.'"
            }
        ]
    },
    {
        id: "batch20_topic4_southern_gothic",
        taskType: "academic",
        title: "Southern Gothic: Faulkner and O'Connor",
        passage: `
**Rhetorical Structure:** Style/Theme
**Dominant TOEFL Skill:** Rhetorical Purpose

Gothic literature (Dracula) features castles and monsters. *Southern Gothic* moves the horror to the American South. The monsters are not vampires; they are history, racism, and madness.

William Faulkner (*The Sound and the Fury*) and Flannery O'Connor (*A Good Man is Hard to Find*) are the giants.

Themes:
1.  **Decay:** The crumbling plantation house. The impoverished aristocratic family living in squalor. [A] It represents the South unable to move on after the Civil War.
2.  **The Grotesque:** Characters are physically or mentally broken. (A man with a wooden leg, an idiot, a refreshing misfit). This outer damage reflects inner moral rot. [B]
3.  **The Past:** "The past is never dead. It's not even past." (Faulkner). The characters are haunted by the sins of their ancestors (slavery).

O'Connor used violence to shock characters into grace. In her stories, a grandmother only realizes her own hypocrisy when a serial killer puts a gun to her head. [C]
The genre suggests that underneath the polite manners and sweet tea of the South lies a swamp of trauma that refuses to stay buried. [D]
    `.trim(),
        questions: [
            {
                id: "batch20_topic4_southern_gothic_Q1",
                question: "What is a common theme in Southern Gothic literature regarding characters?",
                options: [
                    "They are perfect heroes.",
                    "Characters are often 'Grotesque,' appearing physically or mentally broken to reflect inner moral struggles.",
                    "They are vampires.",
                    "They are rich."
                ],
                correctAnswer: "B",
                explanation: "Theme 2: '**The Grotesque:** Characters are physically or mentally broken... This outer damage reflects inner moral rot.'"
            }
        ]
    },
    {
        id: "batch20_topic5_game_theory",
        taskType: "academic",
        title: "Game Theory: The Prisoner's Dilemma",
        passage: `
**Rhetorical Structure:** Scenario/Implication
**Dominant TOEFL Skill:** Sentence Insertion

*Game Theory* studies strategic decision making. The most famous example is the **Prisoner's Dilemma**.

Two criminals (A and B) are arrested. They are in separate rooms.
The police offer a deal:
*   If A betrays B, and B stays silent: A goes free, B gets 10 years.
*   If both betray each other: Both get 5 years.
*   If both stay silent (Cooperates): Both get 1 year. [A]

The Rational Choice:
Look at it from A's perspective.
*   If B stays silent, I should betray (I go free vs 1 year).
*   If B betrays me, I *must* betray (5 years vs 10 years).
No matter what B does, my best move is to **Betray** (Defect).

B thinks the same way.
Result: Both betray. Both get 5 years.
If they had trusted each other, they would have got 1 year.
Individual rationality leads to collective stupidity. [B]

This explains:
*   **Arms Races:** Why do countries build nukes? If I disarm and you don't, I die. So we both build them and waste money.
*   **Price Wars:** Why do airlines cut prices until they go bankrupt?
To solve it, you need an enforcer (Mafia boss/International Treaty) to punish betrayal, or "Repeated Games" where reputation matters. [C] Without trust, math dictates conflict. [D]
    `.trim(),
        questions: [
            {
                id: "batch20_topic5_game_theory_Q1",
                question: "In the Prisoner's Dilemma, why is 'Betrayal' considered the rational individual choice?",
                options: [
                    "It is nicer.",
                    "Because betraying yields a better individual outcome regardless of what the other prisoner does (going free vs. 1 year, or 5 years vs. 10 years).",
                    "The police force them.",
                    "They are friends."
                ],
                correctAnswer: "B",
                explanation: "The logic: 'No matter what B does, my best move is to **Betray** (Defect).'"
            }
        ]
    },
    {
        id: "batch20_topic6_plate_tectonics_wegener",
        taskType: "academic",
        title: "Continental Drift: Alfred Wegener's Vindication",
        passage: `
**Rhetorical Structure:** Hypothesis/Rejection/Proof
**Dominant TOEFL Skill:** Negative Factual Information

In 1912, Alfred Wegener looked at a map. He noticed South America fit into Africa like a puzzle piece. He proposed *Continental Drift*.
He argued all continents were once a supercontinent (Pangaea) and drifted apart.

Evidence:
1.  **Fossils:** He found the same lizard (*Mesosaurus*) in Brazil and Africa. It couldn't swim the ocean. [A]
2.  **Rocks:** The Appalachian Mountains (US) match the mountains in Scotland. They are the same range, torn in half.
3.  **Climate:** He found tropical coal deposits in Antarctica (it must have been near the equator once).

The scientific community laughed him out of the room.
Why? He had no **Mechanism**. [B]
He couldn't explain *how* massive continents plowed through the solid ocean floor. He guessed "Centrifugal Force." Physicists proved that was impossible. He died in a blizzard in Greenland, considered a failure.

Vindication (1960s):
We mapped the ocean floor. We found the *Mid-Atlantic Ridge*.
Magma rises here, creating new crust. The floor spreads (Seafloor Spreading).
The continents don't plow through the floor; they ride on top of the moving floor plates like a conveyor belt. [C]
Heat form the core (Convection Currents) drives the belt.
Wegener was right about *what* happened, but wrong about *how*. [D] Today, Plate Tectonics is the unifying theory of geology.
    `.trim(),
        questions: [
            {
                id: "batch20_topic6_plate_tectonics_wegener_Q1",
                question: "Why was Alfred Wegener's theory of Continental Drift initially rejected by the scientific community?",
                options: [
                    "He was German.",
                    "Because he lacked a plausible mechanism to explain *how* continents could move through the solid ocean floor.",
                    "His map was wrong.",
                    "He wasn't a geologist."
                ],
                correctAnswer: "B",
                explanation: "The text states: 'Why? He had no **Mechanism**. He couldn't explain *how* massive continents plowed through...'"
            }
        ]
    },
    {
        id: "batch20_topic7_combustion",
        taskType: "academic",
        title: "Chemistry of Fire: The Fire Triangle",
        passage: `
**Rhetorical Structure:** Principles/Application
**Dominant TOEFL Skill:** Factual Information

Fire works. It is a chemical reaction (Rapid Oxidation). To have fire, you need three things simultaneously. The **Fire Triangle**.
1.  **Fuel:** Something to burn (Wood, Gas).
2.  **Oxygen:** From the air (usually >16%).
3.  **Heat:** Activation energy to start the reaction. [A]

If you remove **one** side of the triangle, the fire dies.

Application (Firefighting):
*   **Water:** Removes the **Heat**. It cools the fuel below the ignition point. [B]
*   **Foam/Blanket:** Removes the **Oxygen**. It smothers the fire.
*   **Firebreak:** (Cutting trees in a forest). Removes the **Fuel**.

There is a fourth element: The **Chemical Chain Reaction**. (The Fire Tetrahedron).
Halon gas extinguishers work by interrupting the chemical bonding process, stopping the fire without water or foam. [C]

Backdraft:
If a fire in a closed room uses up all the oxygen, it smolders (hot, lots of fuel, no oxygen).
If you open the door -> a rush of Oxygen enters -> BOOM.
The Triangle is completed instantly and explosively. [D] Firefighters must ventilate the roof first to let the heat out before opening the door.
    `.trim(),
        questions: [
            {
                id: "batch20_topic7_combustion_Q1",
                question: "How does a Halon gas fire extinguisher put out a fire?",
                options: [
                    "It freezes the fire.",
                    "It interrupts the chemical chain reaction (the fourth element of the 'Fire Tetrahedron') without damaging electronics.",
                    "It sucks out the air.",
                    "It makes the fuel wet."
                ],
                correctAnswer: "B",
                explanation: "The passage notes: 'Halon gas extinguishers work by interrupting the chemical bonding process...'"
            }
        ]
    },
    {
        id: "batch20_topic8_clock_invention",
        taskType: "academic",
        title: "The Mechanical Clock: Measuring Eternity",
        passage: `
**Rhetorical Structure:** Innovation/Impact
**Dominant TOEFL Skill:** Inference

Time used to be natural. You woke with the sun. You slept when it was dark. Hours varied (summer hours were longer). The invention of the mechanical clock converted time into a commodity: measurable, standard, and saleable.

The key invention was the **Escapement** (late 13th century).
A weight falls (gravity) to spin gears.
But if it just falls, the gears spin uncontrollably fast. You need a brake.
The Escapement catches the gear, holds it, and releases it. *Tick. Tock.* [A]
It divides continuous time into discrete units.

Monasteries spurred the invention. Monks needed to pray at exact times (Matins, Vespers) regardless of the sun. The first clocks were alarms to ring bells. [B]

Impact:
1.  **Labor:** You could now pay people by the hour. "Time is Money."
2.  **Science:** You could measure speed and duration for experiments (Galileo).
3.  **Navigation:** To find Longitude at sea, you need a clock that works on a rocking boat (Chronometer, Harrison, 1760). [C]

Lewis Mumford argued the clock, not the steam engine, was the key machine of the Industrial Age. [D] It synchronized humanity, turning us into cogs in a global machine.
    `.trim(),
        questions: [
            {
                id: "batch20_topic8_clock_invention_Q1",
                question: "According to Lewis Mumford, what was the key impact of the mechanical clock on society?",
                options: [
                    "It made people late.",
                    "It synchronized humanity and turned time into a measurable, saleable commodity, becoming the key machine of the Industrial Age.",
                    "It helped monks pray.",
                    "It looked nice."
                ],
                correctAnswer: "B",
                explanation: "Mumford argued: 'It synchronized humanity, turning us into cogs in a global machine.'"
            }
        ]
    },
    {
        id: "batch20_topic9_milgram",
        taskType: "academic",
        title: "The Milgram Experiment: Obedience to Authority",
        passage: `
**Rhetorical Structure:** Experiment/Result
**Dominant TOEFL Skill:** Prose Summary

In 1961, after the Nazi trials, Stanley Milgram asked: "Could it happen here?" Were Nazis monsters, or just following orders?
He designed a scary experiment at Yale.

Roles:
*   Teacher (Subject).
*   Learner (Actor).
*   Experimenter (White lab coat).

The Teacher asks the Learner questions. If wrong, the Teacher gives an "Electric Shock." (Fake, but the Teacher thinks it's real).
The shocks go from 15V ("Slight") to 450V ("XXX").
As shocks increase, the Learner screams, begs, and then plays dead. [A]

The Teacher wants to stop. He looks at the Experimenter.
The Experimenter says calmly: "The experiment requires that you continue. You have no choice."

Result:
Milgram thought 1% would go to 450V (Psychopaths).
Reality: **65%** went all the way to 450V. [B]
They were sweating and trembling, but they obeyed.

Conclusion:
Evil is not always a character trait. It is a situation.
People enter an "Agentic State." They view themselves as instruments of the authority. "I am just doing my job. He is responsible." [C]
This "Banality of Evil" (Arendt) suggests that under the right pressure, normal people can do terrible things. [D]
    `.trim(),
        questions: [
            {
                id: "batch20_topic9_milgram_Q1",
                question: "What unexpected result did the Milgram Experiment reveal about human nature?",
                options: [
                    "People are naturally good.",
                    "That 65% of ordinary people would administer potentially lethal shocks to a stranger if ordered to do so by an authority figure.",
                    "People hate electricity.",
                    "People are brave."
                ],
                correctAnswer: "B",
                explanation: "The result: 'Reality: **65%** went all the way to 450V... They obeyed.'"
            }
        ]
    },
    {
        id: "batch20_topic10_black_body_planck",
        taskType: "academic",
        title: "The Ultraviolet Catastrophe and Max Planck",
        passage: `
**Rhetorical Structure:** Paradox/Resolution
**Dominant TOEFL Skill:** Vocabulary in Context

In 1900, Physics was perfect. Except for one "small cloud." We couldn't explain how hot objects glow.
A "Black Body" is an idealized object that absorbs all light. When heated, it glows (Red hot -> White hot).

Classical Physics predicted that as you heat it, it should emit infinite energy at high frequencies (UV/X-ray). This was the **Ultraviolet Catastrophe**.
According to the math, opening your oven should blast you with X-rays and destroy the universe. [A]
This obviously doesn't happen.

Max Planck solved it by a desperate guess.
He assumed energy is not a continuous wave (like water).
He assumed energy comes in packets (chunks). He called them *Quanta*.
$E = hf$ (Energy = Planck's Constant $\times$ Frequency).

High frequency light (UV) costs a lot of energy to make. [B]
It is "expensive." The oven doesn't have enough energy to buy the "UV Packet." It can only afford the "Infrared/Red Packet."
So the curve drops off. The catastrophe is avoided.

Planck didn't believe his own idea. He thought it was just a math trick. [C]
But Einstein took it seriously and built Quantum Mechanics.
Everything digital (lasers, chips, MRIs) comes from this one trick to fix a lightbulb theory. [D]
    `.trim(),
        questions: [
            {
                id: "batch20_topic10_black_body_planck_Q1",
                question: "How did Max Planck resolve the 'Ultraviolet Catastrophe'?",
                options: [
                    "He turned off the oven.",
                    "By proposing that energy is not continuous but comes in discrete packets called 'Quanta', which prevents infinite energy emission at high frequencies.",
                    "He used a mirror.",
                    "He discovered X-rays."
                ],
                correctAnswer: "B",
                explanation: "The solution: 'He assumed energy comes in packets (chunks). He called them *Quanta*... The catastrophe is avoided.'"
            }
        ]
    },
    {
        id: "batch20_topic11_cargo_cults",
        taskType: "academic",
        title: "Anthropology of Religion: Cargo Cults",
        passage: `
**Rhetorical Structure:** Phenomenon/Interpretation
**Dominant TOEFL Skill:** Inference

During WWII, American troops landed on remote islands in Melanesia. They brought "Cargo"—tinned food, Jeeps, radios, Coca-Cola.
The indigenous islanders were amazed. They saw the soldiers didn't make these things (they didn't fish or farm). They just marched in lines, raised flags, and the Cargo fell from the sky (planes). [A]

Conclusion: The Cargo comes from the Gods/Ancestors. The Americans know the correct ritual (Marching/Flags) to summon it.

When the war ended, the Americans left. The Cargo stopped.
The islanders built "Cargo Cults."
They built bamboo airplanes. They built control towers out of wood. They carved headphones out of coconuts.
They marched with painted sticks (rifles). [B]
They were trying to perform the ritual to call the planes back.

Westerners laughed. But Anthropologists explain it is rational.
If you don't know engineering/economics, this is a logical Cause-Effect theory.
Ritual A -> Reward B.

We all have Cargo Cults. We follow rituals (diets, dress codes, investment fads) hoping for a result we don't fully understand. [D]
    `.trim(),
        questions: [
            {
                id: "batch20_topic11_cargo_cults_Q1",
                question: "How did anthropologists interpret the 'Cargo Cults' of Melanesia, contrary to the initial Western view?",
                options: [
                    "They thought they were crazy.",
                    "They saw them as a rational attempt to summon wealth through ritual, and a political critique of colonization to reclaim dignity.",
                    "They thought they were spies.",
                    "They joined the cult."
                ],
                correctAnswer: "B",
                explanation: "The text explains: 'Anthropologists explain it is rational... It is also a political critique... The Cult was a way to reclaim dignity.'"
            }
        ]
    },
    {
        id: "batch20_topic12_postmodern_architecture",
        taskType: "academic",
        title: "Postmodern Architecture: 'Less is a Bore'",
        passage: `
**Rhetorical Structure:** Reaction/Style
**Dominant TOEFL Skill:** Comparative

Modernism (Bauhaus/Mies van der Rohe) said: "Less is More." Buildings should be glass boxes. Pure, functional, honest.
By the 1970s, people were bored. The cities looked generic.
Robert Venturi declared: "**Less is a Bore.**"
This launched *Postmodernism* (PoMo).

Style:
*   Mix history with fun.
*   Use decoration (which Modernists hate).
*   Use irony and humor.

Example: The **Portland Building** (Michael Graves).
It looks like a giant wrapped present with ribbons. It has fake columns and bright pastel colors. [A]
Example: The **AT&T Building** (Philip Johnson).
It looks like a standard skyscraper, but the top is a Chippendale Cabinet (a broken pediment). [B]

Critics called it "Las Vegas" architecture—tacky and shallow.
But PoMo argued that buildings should speak to the public, not just to elite logic. They should have "Context."
A library should look like a library (maybe have columns), not a factory. [C]

The **Piazza d'Italia** in New Orleans creates a neon-lit fake Roman ruin. It acknowledges that history is a playground. [D]
    `.trim(),
        questions: [
            {
                id: "batch20_topic12_postmodern_architecture_Q1",
                question: "What is a defining characteristic of Postmodern architecture as opposed to Modernism?",
                options: [
                    "It is invisible.",
                    "It rejects the strict 'Less is More' philosophy, embracing decoration, historical references, and specific context ('Less is a Bore').",
                    "It uses only wood.",
                    "It is always black."
                ],
                correctAnswer: "B",
                explanation: "The contrast: 'Modernism... said: \"Less is More.\"... Postmodernism... Style: Mix history with fun. Use decoration.'"
            }
        ]
    },
    {
        id: "batch20_topic13_appeasement",
        taskType: "academic",
        title: "Appeasement: The Munich Agreement of 1938",
        passage: `
**Rhetorical Structure:** Event/Analysis
**Dominant TOEFL Skill:** Negative Factual Information

"Appeasement" is now a dirty word, meaning cowardice. But in 1938, it meant "Peace keeping."
Context: WWI had killed 20 million. Britain and France were terrified of another war. They would do *anything* to avoid it.

Hitler demanded the **Sudetenland** (a German-speaking part of Czechoslovakia).
British PM Neville Chamberlain flew to Munich to meet Hitler.
Hitler promised: "This is my last territorial demand."
Chamberlain agreed. He gave Hitler the land (without asking the Czechs). [A]
Chamberlain returned to London waving a paper: "Peace for our time." He was a hero.

Why?
People forget that many British nobles were sympathetic to Germany, or feared Stalin (Communism) more. They saw Hitler as a buffer against Russia. [B]
Also, Britain was not ready to fight. They needed time to build Spitfires.

The Betrayal:
Six months later, Hitler broke the promise and took the *rest* of Czechoslovakia.
Then he invaded Poland. War started anyway.

Lesson:
However, historians argue that if war started in 1938, Britain might have lost. The delay allowed the RAF to prepare for the Battle of Britain. [D] It was a moral failure, but perhaps a strategic necessity.
    `.trim(),
        questions: [
            {
                id: "batch20_topic13_appeasement_Q1",
                question: "What was the result of the Munich Agreement of 1938?",
                options: [
                    "Peace forever.",
                    "Britain gave Hitler the Sudetenland in exchange for peace, but Hitler broke the promise six months later and eventually started WWII.",
                    "Germany surrendered.",
                    "Churchill became King."
                ],
                correctAnswer: "B",
                explanation: "The outcome: 'Chamberlain agreed. He gave Hitler the land... Six months later, Hitler broke the promise... War started anyway.'"
            }
        ]
    },
    {
        id: "batch20_topic14_superconductivity",
        taskType: "academic",
        title: "Superconductivity: The Resistance is Zero",
        passage: `
**Rhetorical Structure:** Phenomenon/Application
**Dominant TOEFL Skill:** Factual Information

In a normal wire (Copper), electrons bump into atoms. This friction is *Resistance*. It creates heat. (This is how toasters work). It also wastes 10% of our electricity grid.

In 1911, H.K. Onnes cooled mercury to near absolute zero (-270°C).
Resistance dropped to **Zero**. Not "small." Zero.
This is *Superconductivity*.
You can start a current flowing in a loop, walk away for a year, come back, and it is still flowing. [A] Perpetual motion (almost).

Meissner Effect:
Superconductors hate magnetic fields. They expel them.
If you put a magnet on top of a superconductor, it *Levitates* (Quantum Locking). [B]

Mechanism (BCS Theory):
In the cold, electrons pair up (Cooper Pairs). They move like a single wave, weaving through the atoms without touching them.

Constraint:
It only works at extremely low temperatures. Cooling with Liquid Helium is expensive.
The Holy Grail is a **Room Temperature Superconductor**. [C]
If we find one:
*   Lossless power grids (Solar in Sahara powering London).
*   MRI machines in every doctor's office. [D]
    `.trim(),
        questions: [
            {
                id: "batch20_topic14_superconductivity_Q1",
                question: "What is the 'Meissner Effect' observed in superconductors?",
                options: [
                    "It gets hot.",
                    "The expulsion of magnetic fields, causing a magnet placed above a superconductor to levitate (Quantum Locking).",
                    "It turns into liquid.",
                    "It conducts sound."
                ],
                correctAnswer: "B",
                explanation: "The definition: 'Meissner Effect: Superconductors hate magnetic fields. They expel them... it *Levitates*.'"
            }
        ]
    },
    {
        id: "batch20_topic15_vitamins",
        taskType: "academic",
        title: "The Discovery of Vitamins: Ending the Hidden Hunger",
        passage: `
**Rhetorical Structure:** Problem-Solution/Discovery
**Dominant TOEFL Skill:** Sentence Insertion

For centuries, sailors died of **Scurvy**. Their gums bled, teeth fell out, and old wounds opened up.
In 1747, James Lind ran the first clinical trial. He gave some sailors vinegar, some seawater, and some **Limes**.
The Lime group was cured.
Conclusion: Citrus prevents Scurvy. (Hence "Limeys" for British sailors). [A]

But they didn't know *why*. They thought it was acid.
In the 1890s, Christiaan Eijkman studied **Beriberi** (nerve damage) in chickens.
Chickens eating polished white rice got sick. Chickens eating brown rice (husk) stayed healthy.
There was a "Vital Amine" in the husk. -> Vitamin.

Concept of "Micronutrients":
We need Macros (Carbs, Protein, Fat) for energy.
We need Micros (Vitamins A, B, C, D) as *Catalysts*.
You only need tiny amounts, but without them, the machinery breaks.
*   Vitamin C makes Collagen (glue for skin). No C = You fall apart (Scurvy). [B]
*   Vitamin D absorbs Calcium. No D = Soft bones (Rickets).

Fortification:
In the 20th century, governments started adding vitamins to food.
*   Iodine in Salt (prevents Goiter/Brain damage). [C]
*   Folic Acid in Flour (prevents birth defects).
*   Vitamin D in Milk.
This ended nearly all deficiency diseases in the developed world. It is the cheapest public health miracle in history. [D]
    `.trim(),
        questions: [
            {
                id: "batch20_topic15_vitamins_Q1",
                question: "How did the concept of 'Micronutrients' change our understanding of diet?",
                options: [
                    "We need to eat more.",
                    "It showed that besides energy (calories), the body needs tiny amounts of catalysts (Vitamins) to function, otherwise machinery breaks (e.g., Scurvy).",
                    "Water is key.",
                    "Sugar is good."
                ],
                correctAnswer: "B",
                explanation: "The concept: 'We need Micros (Vitamins...) as *Catalysts*. You only need tiny amounts, but without them, the machinery breaks.'"
            }
        ]
    },
    {
        id: "batch20_topic16_minimalism_art",
        taskType: "academic",
        title: "Minimalism: Donald Judd and The Box",
        passage: `
**Rhetorical Structure:** Theory/Reaction
**Dominant TOEFL Skill:** Prose Summary

In the 1960s, Abstract Expressionism (Pollock's drips) was emotional and messy.
*Minimalism* swung the pendulum the other way. Cool, industrial, silent.

Artists like Donald Judd and Dan Flavin removed:
*   Subject matter (no stories).
*   Analogy (it doesn't "look like" a landscape).
*   The Artist's Hand (no brushstrokes).

Judd made metal boxes. He ordered them from a factory. He stacked them on a wall.
He said: "It is what it is." Specific Objects.
The point is the *presence* of the object in the space. You focus on the light, the scale, and the material. [A]

Frank Stella (painter): "What you see is what you see."
He painted black stripes. Nothing else.

Why?
They wanted to purify art. To strip away the deception of illusion. [B]
If you paint a tree, you are lying (it's 2D canvas, not a tree).
If you put a metal box on the floor, it is true. It is a box.

Critiques: "Is this art?"
It forces the viewer to deal with their own boredom and awareness. [C]
It influenced design (Apple, IKEA). The "Minimalist" aesthetic of clean lines and white space comes directly from these factory-made boxes. [D]
    `.trim(),
        questions: [
            {
                id: "batch20_topic16_minimalism_art_Q1",
                question: "What philosophy did Minimalist artists like Donald Judd and Frank Stella propose?",
                options: [
                    "Art should tell a story.",
                    "They wanted to remove illusion and metaphor from art, presenting 'Specific Objects' that are exactly what they appear to be ('What you see is what you see').",
                    "Art must be expensive.",
                    "Art must use oil paint."
                ],
                correctAnswer: "B",
                explanation: "The philosophy: 'They wanted to purify art. To strip away the deception of illusion... It is what it is.'"
            }
        ]
    },
    {
        id: "batch20_topic17_black_death",
        taskType: "academic",
        title: "The Black Death: 1347-1351",
        passage: `
**Rhetorical Structure:** Cause-Effect/Transformation
**Dominant TOEFL Skill:** Factual Information

The Black Death (Bubonic Plague) killed 30-60% of Europe's population in 4 years.
Cause: *Yersinia pestis* bacteria. Carried by fleas. On rats. On Genoese trading ships from the Crimea (Batch 13/18).

Symptoms: Buboes (swollen lymph nodes), black spots, death in 3 days.

Short-Term Horror:
Society collapsed. Parents abandoned children.
Flagellants whipped themselves to appease God.
Jews were blamed (poisoning wells) and massacred. [A]

Long-Term Revolution (The Silver Lining):
1.  **Labor Shortage:** Half the peasants died.
    Suddenly, labor was scarce. The survivors could demand higher wages.
    The Feudal System (Serfdom) collapsed. Peasants became free workers. [B]
2.  **The Church:** Many good priests died (tending the sick). The Church replaced them with uneducated/corrupt men. Faith in the Church's power to protect crumbled, paving the way for the Reformation. [C]
3.  **Technology:** Expensive labor incentivized labor-saving machines (Printing Press).

The Plague ended the Middle Ages. [D] By thinning the herd, it concentrated wealth and freedom in the survivors, setting the stage for the Renaissance.
    `.trim(),
        questions: [
            {
                id: "batch20_topic17_black_death_Q1",
                question: "How did the Black Death contribute to the end of the Feudal System?",
                options: [
                    "It killed the King.",
                    "The massive loss of life created a labor shortage, allowing surviving peasants to demand higher wages and freedom.",
                    "The rats ate the castles.",
                    "It made it cold."
                ],
                correctAnswer: "B",
                explanation: "The result: 'Suddenly, labor was scarce. The survivors could demand higher wages. The Feudal System (Serfdom) collapsed.'"
            }
        ]
    },
    {
        id: "batch20_topic18_second_shift",
        taskType: "academic",
        title: "Sociology: Arlie Hochschild and 'The Second Shift'",
        passage: `
**Rhetorical Structure:** Problem/Inequality
**Dominant TOEFL Skill:** Vocabulary in Context

In the 1970s and 80s, women entered the workforce in droves. Feminism promised equality. Arlie Hochschild's study *The Second Shift* (1989) revealed a hidden inequality.

She found that after working a full 9-to-5 job (The First Shift), women came home to work another job: Cooking, cleaning, childcare (The Second Shift).
Men tended to do "intermittent" chores (fixing the car, mowing the lawn).
Women did "daily" chores (dinner, laundry). [A]

Consequences:
1.  **The Leisure Gap:** Men had more free time to sleep or watch TV. Women were chronically exhausted ("The Stalled Revolution").
2.  **Marital Tension:** Resentment over dirty dishes became the #1 predictor of divorce.

Strategies:
*   **Supermom:** The woman tries to do it all perfectly. Result: Burnout.
*   **Cutting Back:** The woman reduces her career ambition to manage Home. (The Glass Ceiling again). [B]
*   **Outsourcing:** Hiring nannies/cleaners. (Fixes the problem for the rich woman by shifting the burden to a poorer woman). [C]

Things have improved (Millennial dads do more), but the "Mental Load" (remembering birthdays, scheduling doctors) still falls disproportionately on women. [D]
    `.trim(),
        questions: [
            {
                id: "batch20_topic18_second_shift_Q1",
                question: "What did Arlie Hochschild's study 'The Second Shift' reveal about gender roles?",
                options: [
                    "Men work harder.",
                    "That women who entered the workforce still performed the majority of household chores and childcare, leading to a 'leisure gap'.",
                    "Women like cleaning.",
                    "Men like cooking."
                ],
                correctAnswer: "B",
                explanation: "The finding: 'Women came home to work another job: Cooking, cleaning, childcare (The Second Shift)... Result: The Leisure Gap.'"
            }
        ]
    },
    {
        id: "batch20_topic19_iot",
        taskType: "academic",
        title: "The Internet of Things (IoT): Connection Everywhere",
        passage: `
**Rhetorical Structure:** Definition/Risk
**Dominant TOEFL Skill:** Inference

The Internet (Web 1.0) connected computers.
Social Media (Web 2.0) connected people.
The **Internet of Things** (IoT) connects *objects*.

Toasters, lightbulbs, cars, and pacemakers now have chips and Wi-Fi.
Why? Data and Control.
*   **Smart Home:** Your thermostat learns when you leave and lowers the heat to save money. Your fridge orders milk when you run low. [A]
*   **Industry 4.0:** A jet engine reports its own vibration in real-time to the mechanic before it breaks. (Predictive Maintenance).

The Problem: **Security**.
A computer has antivirus. A "Smart Toaster" does not.
It has cheap, weak code.
Hackers can use these devices as a "Botnet."
In 2016 (Mirai Botnet), hackers took over 300,000 webcams and DVRs to crash the internet (DDoS attack). [B]

Worse: Physical harm.
If a hacker crashes your computer, you lose data.
If a hacker hacks your Smart Car or Pacemaker, you lose your life. [C]

Privacy: Your robotic vacuum maps your house. Your Smart TV listens to your conversations. [D] IoT turns the physical world into a surveillance device, forcing us to trade privacy for convenience.
    `.trim(),
        questions: [
            {
                id: "batch20_topic19_iot_Q1",
                question: "What is a major security risk associated with the Internet of Things (IoT) mentioned in the passage?",
                options: [
                    "The internet is slow.",
                    "IoT devices often have weak security, allowing hackers to use them in 'Botnets' for cyberattacks or to cause physical harm (e.g., hacking cars).",
                    "Aliens can see us.",
                    "It uses too much electricity."
                ],
                correctAnswer: "B",
                explanation: "The risk: 'Security... Hackers can use these devices as a \"Botnet\"... hacking your Smart Car... you lose your life.'"
            }
        ]
    },
    {
        id: "batch20_topic20_bipedalism",
        taskType: "academic",
        title: "Human Evolution: Why Walk on Two Legs?",
        passage: `
**Rhetorical Structure:** Hypothesis/Comparison
**Dominant TOEFL Skill:** Sentence Insertion

Bipedalism (walking on two legs) is weird. It makes us slow. It gives us back pain (bad spine design). It makes childbirth dangerous (narrow hips). Yet, it was the *first* human trait to evolve (4 million years ago in *Australopithecus*), long before big brains. Why?

Theory 1: **The Savannah Hypothesis.**
The forests shrank. We had to walk across open grass.
Standing up allowed us to see predators over the tall grass. [A]

Theory 2: **Thermoregulation.**
Standing up reduces the surface area hit by the hot noon sun (only shoulders/head).
It exposes the body to the cooling breeze higher up.
This allowed us to forage at noon when lions were sleeping.

Theory 3: **Energy Efficiency.**
Chimps (Knuckle-walking) burn lots of energy.
Human walking (inverted pendulum) is incredibly efficient. We can walk for miles on very few calories.
This is the **Persistence Hunting** theory. We chased antelope until they died of heat exhaustion. [B]

Theory 4: **Freeing the Hands.**
If you don't need hands to walk, you can carry things.
Food. Babies. And crucially: **Tools**. [C]
Once hands were free, we could make stone axes. This drove the evolution of the brain (to use the tools).
Bipedalism freed the hands, and the hands built the mind. [D]
    `.trim(),
        questions: [
            {
                id: "batch20_topic20_bipedalism_Q1",
                question: "According to the 'Freeing the Hands' theory, what was the crucial evolutionary advantage of walking on two legs?",
                options: [
                    "To kick enemies.",
                    "It freed the hands to carry food, babies, and tools, which in turn drove the evolution of the brain.",
                    "To reach high fruit.",
                    "To look taller."
                ],
                correctAnswer: "B",
                explanation: "The theory: 'If you don't need hands to walk, you can carry things... And crucially: **Tools**... This drove the evolution of the brain.'"
            }
        ]
    }
];
