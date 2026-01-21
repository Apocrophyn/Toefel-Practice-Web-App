
import { AcademicQuestion } from "./reading-2026";

export const batch17Passages: AcademicQuestion[] = [
    {
        id: "batch17_topic1_friction",
        taskType: "academic",
        title: "Physics of Friction: Static vs. Kinetic",
        passage: `
**Rhetorical Structure:** Comparison/Experiment
**Dominant TOEFL Skill:** Factual Information

Friction is the force that opposes motion. Without it, you couldn't walk (your feet would slide backward). There are two main types: *Static* (Stationary) and *Kinetic* (Moving).

Try to push a heavy box.
At first, you push, but it doesn't move. You are fighting **Static Friction**.
The microscopic bumps on the floor and the box are interlocked like Velcro.
As you push harder, the friction pushes back harder, matching you exactly.
Finally, you reach the limit ("Breakaway Point"). The box lurches forward. [A]

Now the box is sliding. You are fighting **Kinetic Friction**.
Crucially, Kinetic Friction is *weaker* than Static Friction.
Once it is moving, it is easier to keep moving. [B]
This is because the bumps don't have time to fully settle into each other; they skip over the top.

This explains "Anti-Lock Brakes" (ABS) in cars.
If you slam the brakes and lock the wheels, the tire slides on the road (Kinetic Friction). Result: Long stopping distance, no steering.
ABS pumps the brakes rapidly. The wheel rolls, stops, rolls, stops.
It keeps the tire in the *Static* zone (grip). [C] Static grip is stronger than sliding grip. You stop faster and can still steer. [D]
    `.trim(),
        questions: [
            {
                id: "batch17_topic1_friction_Q1",
                question: "Why do Anti-Lock Brakes (ABS) pump the brakes rapidly instead of locking the wheels?",
                options: [
                    "To save brake fluid.",
                    "To keep the tires rolling in the 'static friction' zone, which provides stronger grip and steering control than sliding (kinetic friction).",
                    "To cool down the tires.",
                    "To make noise."
                ],
                correctAnswer: "B",
                explanation: "The text explains: 'It keeps the tire in the *Static* zone (grip). Static grip is stronger than sliding grip.'"
            }
        ]
    },
    {
        id: "batch17_topic2_qing_cixi",
        taskType: "academic",
        title: "The Empress Dowager Cixi and the Fall of the Qing",
        passage: `
**Rhetorical Structure:** Narrative/Assessment
**Dominant TOEFL Skill:** Inference

History has painted Empress Dowager Cixi of China as a dragon lady—a power-hungry tyrant who killed the reformers and doomed the dynasty. Modern historians are revising this view.

She started as a low-ranking concubine. She rose to power by producing the Emperor's only son. When the Emperor died (1861), she staged a coup and ruled as Regent "from behind the curtain" for 47 years. [A]

She faced an impossible situation. China was being carved up by foreign powers (Opium Wars) and torn apart by internal rebellion (Taiping Rebellion).
She supported the "Self-Strengthening Movement"—modernizing the army and building railroads—but she was cautious. She feared that too much Westernization would destroy the Manchu identity. [B]

Her biggest mistake was the *Boxer Rebellion* (1900). A peasant movement attacked foreigners. Cixi, hoping to drive the foreigners out, supported the Boxers.
It backfired. The Eight-Nation Alliance invaded Beijing. Cixi had to flee the Forbidden City dressed as a peasant. [C]

China was forced to pay a massive indemnity.
In her final years, Cixi ironically became a radical reformer. She abolished foot binding, revamped the education system, and promised a Constitution. [D] She died in 1908 (one day after the Emperor... suspiciously). The Dynasty fell three years later (1911), not because she did nothing, but perhaps because she tried to do too much, too late.
    `.trim(),
        questions: [
            {
                id: "batch17_topic2_qing_cixi_Q1",
                question: "How do modern historians' views of Empress Dowager Cixi differ from the traditional view?",
                options: [
                    "They think she was a man.",
                    "Traditionally seen as a tyrant who destroyed China, she is now recognized as a pragmatic ruler who attempted significant reforms in her later years.",
                    "They think she was British.",
                    "They ignore her."
                ],
                correctAnswer: "B",
                explanation: "The passage notes: 'Modern historians are revising this view... In her final years, Cixi ironically became a radical reformer.'"
            }
        ]
    },
    {
        id: "batch17_topic3_wood_wide_web",
        taskType: "academic",
        title: "Mycorrhizal Networks: The Wood Wide Web",
        passage: `
**Rhetorical Structure:** Discovery/Analogy
**Dominant TOEFL Skill:** Vocabulary in Context

Trees look solitary. But underground, they are connected in a massive social network. This is the *Wood Wide Web*, made of fungi.

The relationship is symbiotic (Mutualism).
Threads of fungus (*Mycelium*) attach to the tree roots.
*   The Tree gives the Fungus sugar (from photosynthesis).
*   The Fungus gives the Tree minerals (Phosphorus/Nitrogen) that it mines from the soil. [A]

But the fungus connects *different* trees together.
Dr. Suzanne Simard discovered that trees use this network to communicate.
*   **Resource Sharing:** An old "Mother Tree" (large, lots of sun) sends excess sugar to saplings growing in the shade. [B] Without this lifeline, the babies would die.
*   **Warning Systems:** If a tree is attacked by aphids, it sends chemical signals through the fungus. Neighbors pick up the signal and start producing toxins *before* the aphids arrive. [C]

Cross-species sharing also occurs. Birch trees in summer send food to Fir trees. In winter (when Birch have no leaves), the Fir sends food back.
This challenges the Darwinian view of the forest as a purely competitive arena ("survival of the fittest"). It suggests the forest acts like a single super-organism, cooperating to ensure collective survival. [D]
    `.trim(),
        questions: [
            {
                id: "batch17_topic3_wood_wide_web_Q1",
                question: "What is the primary function of the 'Wood Wide Web' described in the passage?",
                options: [
                    "To trap insects.",
                    "It is a network of underground fungi that connects trees, allowing them to share resources (like sugar) and warn each other of danger.",
                    "To kill other plants.",
                    "To store water."
                ],
                correctAnswer: "B",
                explanation: "The text states: 'Threads of fungus... connect *different* trees together... Resource Sharing... Warning Systems.'"
            }
        ]
    },
    {
        id: "batch17_topic4_epistolary_novel",
        taskType: "academic",
        title: "The Epistolary Novel: Terror in Documents",
        passage: `
**Rhetorical Structure:** Style/Function
**Dominant TOEFL Skill:** Rhetorical Purpose

An *Epistolary Novel* is a story told through documents: letters (*epistles*), diary entries, newspaper clippings, or ship logs. This format was popular in the 18th century (*Dangerous Liaisons*) and 19th century horror.

Why use it? It creates *Verisimilitude* (the appearance of truth).
It feels like you are reading real evidence in a police file.

*Dracula* (Bram Stoker, 1897) is the classic example.
We don't get an omniscient narrator telling us "Dracula is scary."
We get Jonathan Harker's journal: "May 4th. The Castle is on a precipice..."
We read Mina’s letters. We read Dr. Seward’s asylum notes. [A]

This creates suspense via *limited perspective*. Jonathan doesn't know what the reader knows. We want to scream "Get out!" but he can't hear us.

Also, the "Found Footage" effect.
In *Frankenstein* (Mary Shelley), the story is a letter from Captain Walton to his sister. He found a dying Victor Frankenstein on the ice. Victor tells his story. The monster tells Victor his story. [B] It is a Russian Doll of narratives.

Modern versions include *World War Z* (oral history interviews) or *The Martian* (video logs). [C]
The format works because it is subjective. It highlights that truth is fragmented; everyone sees a different part of the monster. [D]
    `.trim(),
        questions: [
            {
                id: "batch17_topic4_epistolary_novel_Q1",
                question: "How does the epistolary format (documents/letters) contribute to the suspense in a horror novel like 'Dracula'?",
                options: [
                    "It makes the book shorter.",
                    "It limits the reader's perspective to what the characters know, creating verifiable suspense when the reader knows danger is approaching but the character does not.",
                    "It uses pictures.",
                    "It is scary because it is old."
                ],
                correctAnswer: "B",
                explanation: "The passage explains: 'It creates suspense via *limited perspective*... We want to scream \"Get out!\" but he can't hear us.'"
            }
        ]
    },
    {
        id: "batch17_topic5_efficient_market",
        taskType: "academic",
        title: "Economics: The Efficient Market Hypothesis (EMH)",
        passage: `
**Rhetorical Structure:** Theory/Debate
**Dominant TOEFL Skill:** Sentence Insertion

Can you beat the Stock Market?
Eugene Fama (Nobel Prize winner) says No.
His *Efficient Market Hypothesis* (1970) states that stock prices already reflect *all available information*.

If Apple announces a new iPhone, millions of investors analyze it instantly. They buy or sell. The price adjusts immediately to the "fair value."
By the time you read the news, it is too late. The price has moved. [A]

Three forms of EMH:
1.  **Weak:** Past prices don't predict future prices. (Looking at charts is useless).
2.  **Semi-Strong:** Public news is already priced in. (Reading the Wall Street Journal is useless).
3.  **Strong:** Even *insider* information is priced in. (The market is psychic). [B]

Implication:
Picking individual stocks is gambling. You cannot consistently outperform the market average (S&P 500).
A monkey throwing darts at a stock list will do as well as a Harvard fund manager.
Therefore, you should just buy the whole market (Index Funds) and hold. [C]

Critique:
Warren Buffett. He has consistently beaten the market for 50 years.
Bubbles (like the Dot-com crash or 2008 Housing Crisis). If humans were rational calculators, bubbles wouldn't exist.
Behavioral Economics argues that humans are emotional (fear/greed), so prices effectively are often *wrong*. Finding these errors is how Buffett gets rich. [D]
    `.trim(),
        questions: [
            {
                id: "batch17_topic5_efficient_market_Q1",
                question: "What is the core argument of the Efficient Market Hypothesis (EMH) regarding stock picking?",
                options: [
                    "You should buy Apple stock.",
                    "Picking individual stocks is pointless because prices already reflect all available information, so you cannot consistently beat the market.",
                    "The market is always wrong.",
                    "Monkeys are good investors."
                ],
                correctAnswer: "B",
                explanation: "The text states: 'Picking individual stocks is gambling. You cannot consistently outperform the market... prices already reflect *all available information*.'"
            }
        ]
    },
    {
        id: "batch17_topic6_mohs_scale",
        taskType: "academic",
        title: "Geology: Mineral Hardness and the Mohs Scale",
        passage: `
**Rhetorical Structure:** Classification/Application
**Dominant TOEFL Skill:** Factual Information

In 1812, Friedrich Mohs created a qualitative scale to characterize the scratch resistance of minerals. It is not linear; it is ordinal (a ranking). The *Mohs Scale* runs from 1 (Softest) to 10 (Hardest).

The Test: If Mineral A can scratch Mineral B, A is harder.

**The Scale:**
1.  **Talc:** Baby powder. Scratched by a fingernail. [A]
2.  **Gypsum:** Drywall. Use fingernail.
3.  **Calcite:** Scratched by a copper coin.
4.  **Fluorite:**
5.  **Apatite:** Scratched by a knife/glass.
6.  **Orthoclase Feldspar:** Scratches glass. (Dust is mostly feldspar/silica, which is hardness 7. This is why you shouldn't wipe a car with a dry cloth; the dust scratches the paint). [B]
7.  **Quartz:** Common sand.
8.  **Topaz:**
9.  **Corundum:** Ruby/Sapphire.
10. **Diamond:** Only clarity scratches a diamond. [C]

Note the jump. Corundum (9) is twice as hard as Topaz (8).
But Diamond (10) is **4x** harder than Corundum. The gap between 9 and 10 is huge. [D]

Geologists use this in the field. If you find a mystery white rock:
*   Scratch it with your fingernail. If yes -> Gypsum.
*   Scratch it with a knife. If yes -> Calcite.
*   Scratch glass with it. If yes -> Quartz.
It is a primitive but effective way to identify the chemistry of the earth.
    `.trim(),
        questions: [
            {
                id: "batch17_topic6_mohs_scale_Q1",
                question: "Why is the distinction between Mohs hardness 9 (Corundum) and 10 (Diamond) significant?",
                options: [
                    "They are the same hardness.",
                    "The scale is non-linear; while Corundum is 9, Diamond is actually 4 times harder than Corundum, representing a massive jump in hardness.",
                    "Corundum is harder than Diamond.",
                    "Diamond is soft."
                ],
                correctAnswer: "B",
                explanation: "The passage emphasizes: 'The scale is not linear... Diamond (10) is **4x** harder than Corundum. The gap between 9 and 10 is huge.'"
            }
        ]
    },
    {
        id: "batch17_topic7_soap_chemistry",
        taskType: "academic",
        title: "Chemistry of Soap: Micelles and Saponification",
        passage: `
**Rhetorical Structure:** Problem-Solution/Mechanism
**Dominant TOEFL Skill:** Prose Summary

Water and Oil don't mix. Water is Polar. Oil is Non-Polar. If you have grease on your hands, water just slides off. You need an intermediary: *Soap*.

Soap is made by boiling Fat (Triglycerides) with a strong Base (Lye/NaOH). This reaction is *Saponification*. Ancient Romans made it from goat fat and wood ash.

The soap molecule is a hybrid.
*   **Head:** Hydrophilic (Loves water). Charged.
*   **Tail:** Hydrophobic (Hates water, Loves oil). Long carbon chain. [A]

When you wash:
1.  The Hydrophobic tails burrow into the grease blob on your skin to hide from the water.
2.  The Hydrophilic heads stay on the outside, facing the water.
3.  They form a sphere called a *Micelle*. [B]
    The grease is trapped inside the sphere.
    The outside of the sphere is water-loving.

So, the water can now promote the sphere and wash it away. [C]
Soap acts as an *Emulsifier*, bridging the gap between the two worlds.

Detergents work the same way but are synthetic (from petroleum). Unlike soap, they don't form "scum" in hard water (calcium). [D] Soap has saved more lives than penicillin by simply physically removing pathogens from our skin.
    `.trim(),
        questions: [
            {
                id: "batch17_topic7_soap_chemistry_Q1",
                question: "How does a soap molecule clean grease from skin?",
                options: [
                    "It burns the grease.",
                    "Its hydrophobic tail attaches to the grease, while its hydrophilic head faces the water, forming a sphere (micelle) that traps the grease and allows it to be washed away.",
                    "It turns grease into water.",
                    "It makes the water hot."
                ],
                correctAnswer: "B",
                explanation: "The text details the mechanism: 'The Hydrophobic tails burrow into the grease... The Hydrophilic heads stay on the outside... forming a sphere called a *Micelle*.'"
            }
        ]
    },
    {
        id: "batch17_topic8_paper_invention",
        taskType: "academic",
        title: "Cai Lun and the Invention of Paper",
        passage: `
**Rhetorical Structure:** Innovation/Comparison
**Dominant TOEFL Skill:** Negative Factual Information

Before paper, writing was expensive.
*   Egyptians used *Papyrus* (reeds). It cracked when folded.
*   Europeans used *Parchment* (animal skin). It was durable but wildly expensive (one Bible required 300 sheep skins). [A]
*   Chinese used Bamboo slips (heavy) or Silk (expensive).

In 105 AD, Cai Lun, a eunuch in the Han Dynasty court, invented *Paper*.
Method:
He took cheap waste materials—tree bark, hemp, old rags, fishing nets.
He boiled them into a mush (pulp).
He pounded the fibers to separate them.
He dipped a screen into the water, lifting a thin layer of fibers. [B]
He dried the sheet.

Result: A material that was light, foldable, and cheap. Using garbage to preserve wisdom.

The secret was guarded for centuries.
In 751 AD, at the Battle of Talas, the Abbasid Caliphate (Arabs) captured Chinese papermakers. [C]
The technology spread to Baghdad (Golden Age of Islam), then via Spain to Europe.
By the time Gutenberg arrived (1450), paper mills were ready to feed his press. [D] Without cheap paper, the printing press would have been useless (you can't print mass books on sheepskin). Cai Lun is arguably the most influential inventor in history alongside Gutenberg.
    `.trim(),
        questions: [
            {
                id: "batch17_topic8_paper_invention_Q1",
                question: "Why was the invention of paper critical to the success of the Printing Press?",
                options: [
                    "Paper is prettier.",
                    "Because previous materials like parchment (sheepskin) were too expensive for mass production, whereas paper provided a cheap, abundant medium for books.",
                    "The press couldn't print on skin.",
                    "Paper doesn't burn."
                ],
                correctAnswer: "B",
                explanation: "The passage argues: 'Without cheap paper, the printing press would have been useless (you can't print mass books on sheepskin).'"
            }
        ]
    },
    {
        id: "batch17_topic9_confirmation_bias",
        taskType: "academic",
        title: "Cognitive Psychology: Confirmation Bias",
        passage: `
**Rhetorical Structure:** Theory/Paradox
**Dominant TOEFL Skill:** Inference

The human brain is not a computer designed for truth; it is a lawyer designed for winning arguments. We suffer from *Confirmation Bias*. We interpret new evidence as confirmation of one’s existing theories.

Mechanism:
1.  **Search:** We Google questions that confirm our view. ("Why is keto good?" vs "Is keto safe?").
2.  **Interpretation:** If we see ambiguous data, we twist it to fit.
    Example: A sports fan sees a referee call. If it hurts his team, he sees "Corruption." If it helps his team, he sees "Justice." Same call. [A]
3.  **Memory:** We remember the hits and forget the misses. A psychic predicts 10 things. 1 happens. We say "Wow!" We forget the 9 failures. [B]

This bias protects our Ego. Being wrong feels physically painful (Cognitive Dissonance).
It explains political polarization. Two people can watch the same news clip and draw opposite conclusions. [C]

Francis Bacon (founder of the Scientific Method) warned about this in 1620.
Science is the only tool we have to fight it. Science demands we try to *falsify* our own theory. [D] We must look for the Black Swan. If we don't, we are just telling ourselves comfortable lies.
    `.trim(),
        questions: [
            {
                id: "batch17_topic9_confirmation_bias_Q1",
                question: "According to the passage, how does the scientific method counter Confirmation Bias?",
                options: [
                    "By proving everything is true.",
                    "By demanding that scientists try to *falsify* their own theories (look for evidence that proves them wrong) rather than just looking for confirmation.",
                    "By ignoring evidence.",
                    "By using computers."
                ],
                correctAnswer: "B",
                explanation: "The text states: 'Science demands we try to *falsify* our own theory. We must look for the Black Swan.'"
            }
        ]
    },
    {
        id: "batch17_topic10_nebulae",
        taskType: "academic",
        title: "Nebulae: Stellar Nurseries and Graveyards",
        passage: `
**Rhetorical Structure:** Classification/Cycle
**Dominant TOEFL Skill:** Vocabulary in Context

A *Nebula* (Latin for "Mist") is a distinct body of interstellar clouds (gas and dust). They are the most beautiful objects in the universe. They mark the beginning and end of stars.

**1. Emission Nebulae (Nurseries):**
The Orion Nebula.
Huge clouds of Hydrogen. Violent young stars born inside light up the gas (ionize it), making it glow pink/red. [A]
Gravity pulls the dust together. Clumps form. Pressure rises. Fusion ignites. A star is born.

**2. Reflection Nebulae:**
The Pleiades.
Blue and ghostly. The dust reflects the light of nearby stars (like smoke reflecting a flashlight). [B]

**3. Planetary Nebulae (Graveyards):**
The Ring Nebula.
Misleading name (nothing to do with planets).
When a Sun-like star dies, it gently puffs off its outer layers. The core remains as a White Dwarf. The gas glows in a colorful expanding ring. [C]

**4. Supernova Remnants:**
The Crab Nebula.
Violent death. Massive star explodes. The debris is blasted out at 10% light speed.

This is the "Galactic Recycling" system. [D]
The dead stars enrich the clouds with heavy metals (created in their cores). The new stars (and their planets) are formed from this enriched dust. The iron in your blood came from a nebula.
    `.trim(),
        questions: [
            {
                id: "batch17_topic10_nebulae_Q1",
                question: "What is the primary role of 'Emission Nebulae' like the Orion Nebula?",
                options: [
                    "They hide black holes.",
                    "They are stellar nurseries where gas and dust collapse under gravity to form new stars.",
                    "They are dead stars.",
                    "They reflect light."
                ],
                correctAnswer: "B",
                explanation: "The passage classifies them: 'Emission Nebulae (Nurseries)... Gravity pulls the dust together... A star is born.'"
            }
        ]
    },
    {
        id: "batch17_topic11_gift_mauss",
        taskType: "academic",
        title: "Marcel Mauss and 'The Gift'",
        passage: `
**Rhetorical Structure:** Theory/Implication
**Dominant TOEFL Skill:** Prose Summary

In 1925, sociologist Marcel Mauss published *The Gift*. He studied "primitive" economies (like the Potlatch) and argued that there is no such thing as a "Free Gift."

Every gift comes with a hidden string: **Reciprocity**.
The "Triple Obligation":
1.  **To Give:** You must be generous to show status.
2.  **To Receive:** You cannot refuse a gift. (Refusing means war or rejecting the relationship). [A]
3.  **To Reciprocate:** You must give back in the future.

The gift creates a social bond (Debt).
If I buy you lunch, you "owe" me. We are connected until you pay me back. [B]
If I just paid you cash for a service, the transaction is over. We are strangers again.
Therefore, Gift Economies create strong communities. Market Economies create efficient strangers.

The "Poison of the Gift."
In some languages, "Gift" and "Poison" are the same word.
If I give you a gift so big you can *never* repay it (e.g., the Potlatch Chief giving away a mountain of blankets), I have defeated you. [C] I have established dominance. You are permanently in my debt aka my subordinate.
Charity can be this way. The rich giver gets power; the poor receiver loses dignity. [D] Mauss showed that generosity is often a form of power play.
    `.trim(),
        questions: [
            {
                id: "batch17_topic11_gift_mauss_Q1",
                question: "According to Marcel Mauss, how can a large gift (like in Potlatch) act as a weapon or 'poison'?",
                options: [
                    "It physically poisons them.",
                    "By creating an unpayable debt, the giver establishes permanent dominance and superiority over the receiver.",
                    "It is too heavy to carry.",
                    "It is cursed."
                ],
                correctAnswer: "B",
                explanation: "The text explains: 'If I give you a gift so big you can *never* repay it... I have defeated you. I have established dominance.'"
            }
        ]
    },
    {
        id: "batch17_topic12_fallingwater",
        taskType: "academic",
        title: "Frank Lloyd Wright and Fallingwater",
        passage: `
**Rhetorical Structure:** Description/Philosophy
**Dominant TOEFL Skill:** Rhetorical Purpose

Frank Lloyd Wright is the father of "Organic Architecture." He believed buildings should grow out of the land, not sit on top of it. His masterpiece is *Fallingwater* (1935) in Pennsylvania.

The client, Edgar Kaufmann, owned a plot of land with a waterfall and a stream called Bear Run.
He asked Wright to build a house *across* from the falls so he could look at them.
Wright said No. "I want you to live *with* the waterfall, not just to look at it." [A]

He built the house directly *over* the falls.
He used cantilevers (huge horizontal trays) made of reinforced concrete that projected out over the water without columns below. [B]
The sound of water is everywhere in the house.
The stone walls used local rock quarried on site, so the house matches the cliff.
The glass meets the stone directly (no frames) to dissolve the barrier between inside and outside.

Functionally, it was a nightmare. The roof leaked. The cantilevers sagged (they didn't put enough steel in, despite engineers warning Wright). [C] It cost fortunes to repair.
But aesthetically, it is the greatest house of the 20th century. [D] It proved that modernism didn't have to be a cold glass box (Bauhaus); it could be romantic and part of nature.
    `.trim(),
        questions: [
            {
                id: "batch17_topic12_fallingwater_Q1",
                question: "Why did Frank Lloyd Wright insist on building 'Fallingwater' directly over the waterfall instead of across from it?",
                options: [
                    "He didn't like the view.",
                    "He wanted the clients to live *with* the waterfall and experience it constantly, rather than just looking at it like a picture.",
                    "It was cheaper.",
                    "He made a mistake."
                ],
                correctAnswer: "B",
                explanation: "The passage notes: 'Wright said No. \"I want you to live *with* the waterfall, not just to look at it.\"'"
            }
        ]
    },
    {
        id: "batch17_topic13_russian_revolution",
        taskType: "academic",
        title: "1917: The Two Russian Revolutions",
        passage: `
**Rhetorical Structure:** Chronology/Contrast
**Dominant TOEFL Skill:** Sentence Insertion

We often speak of "The Russian Revolution," but it was actually two distinct events in 1917: February and October.

**February Revolution (The Chaos):**
WWI was going badly. Russians were starving.
Women in Petrograd started a bread riot. Workers joined.
The Tsar (Nicholas II) ordered the army to shoot them.
The soldiers refused and joined the crowd. [A]
The Tsar abdicated. The 300-year Romanov dynasty ended in a week.
Result: A "Provisional Government" took over. They were moderates/liberals. They wanted democracy.
Fatal Mistake: They decided to *keep fighting WWI* to honor treaties. The people wanted peace.

**October Revolution (The Coup):**
Vladimir Lenin and the Bolsheviks (Communists) promised "Peace, Land, and Bread."
They were a small, disciplined party. [B]
They infiltrated the "Soviets" (worker councils).
On the night of October 25, they seized the Winter Palace. It was almost bloodless. They simply walked in and arrested the Ministers.

But holding power was bloody.
This triggered the *Russian Civil War* (Reds vs. Whites). [C] The Bolsheviks killed the Tsar and his family. They established the USSR as a totalitarian state.
February was a spontaneous uprising for freedom. October was a calculated takeover for ideology. [D]
    `.trim(),
        questions: [
            {
                id: "batch17_topic13_russian_revolution_Q1",
                question: "What is the key difference between the February Revolution and the October Revolution of 1917 described in the text?",
                options: [
                    "February was in winter.",
                    "February was a spontaneous popular uprising for freedom, while October was a calculated coup by the Bolshevik party for ideology.",
                    "October was peaceful.",
                    "The Tsar led the October Revolution."
                ],
                correctAnswer: "B",
                explanation: "The conclusion states: 'February was a spontaneous uprising for freedom. October was a calculated takeover for ideology.'"
            }
        ]
    },
    {
        id: "batch17_topic14_buoyancy",
        taskType: "academic",
        title: "Archimedes’ Principle: Why Steel Ships Float",
        passage: `
**Rhetorical Structure:** Principle/Paradox
**Dominant TOEFL Skill:** Factual Information

The King of Syracuse suspected his new gold crown was fake (silver inside). He asked Archimedes to prove it without melting it. Archimedes realized the solution while taking a bath. He noticed the water level rose when he got in. He yelled "Eureka!" (I found it).

**Archimedes' Principle:**
The Buoyant Force (upward push) is equal to the **Weight of the Fluid Displaced**. [A]

If I push a beach ball under water, it pushes away 5 lbs of water. The water pushes back with 5 lbs of force. Since the ball weighs almost nothing, it shoots up.

**Why does a steel ship float?**
Steel is denser than water. A solid block of steel sinks.
But a ship is not a solid block. It is a shell filled with *air*.
The ship is huge. It displaces a massive amount of water (say, 50,000 tons).
Therefore, the ocean pushes up with 50,000 tons of force. [B]
As long as the total weight of the Steel + Cargo is less than 50,000 tons, it floats.

If you poke a hole in the hull (Titanic), water rushes in. The air escapes.
The ship loses its volume. It displaces less water. [C]
The buoyant force drops. The weight remains the same. The ship sinks.
Submarines control this deliberately. ballast tanks fill with water to sink (dive) and pump air in to rise. [D]
    `.trim(),
        questions: [
            {
                id: "batch17_topic14_buoyancy_Q1",
                question: "Why does a steel ship float while a solid block of steel sinks, according to Archimedes' Principle?",
                options: [
                    "The ship uses magnets.",
                    "The ship encloses a large volume of air, causing it to displace a weight of water equal to its own massive weight.",
                    "Steel floats in salt water.",
                    "The ship has an engine."
                ],
                correctAnswer: "B",
                explanation: "The text explains: 'But a ship is not a solid block. It is a shell filled with *air*... It displaces a massive amount of water... Therefore, the ocean pushes up.'"
            }
        ]
    },
    {
        id: "batch17_topic15_prions",
        taskType: "academic",
        title: "Prions: The Zombie Proteins",
        passage: `
**Rhetorical Structure:** Definition/Anomaly
**Dominant TOEFL Skill:** Negative Factual Information

We know pathogens: Viruses (DNA/RNA), Bacteria (Cells), Fungus.
In the 1980s, Stanley Prusiner discovered a new one that violated the rules of biology: The *Prion* (Proteinaceous Infectious Particle). It has **no DNA**. It has no RNA. It is just a protein.

How can a protein reproduce?
Prions are misfolded proteins in the brain. [A]
Normal protein (PrP-C) = Alpha Helix shape (Good).
Prion (PrP-Sc) = Beta Sheet shape (Bad).

When a Prion touches a Normal protein, it force-hugs it and twists it into the Prion shape.
One becomes two. Two become four. A chain reaction.
The Prions clump together, killing neurons and turning the brain into a sponge (Swiss cheese).

Diseases:
*   **Mad Cow Disease (BSE):** Cows ate brain tissue of other cows.
*   **Kuru:** Fore tribe in PNG ate the brains of ancestors (cannibalism). [B]
*   **Creutzfeldt-Jakob Disease (CJD):** Human version.

Prions are terrifying because they are indestructible.
You can boil them, soak them in formaldehyde, or blast them with radiation. They don't die (because they aren't alive). [C]
Prusiner was laughed at for years ("Biology Dogma says you need DNA!"). He won the Nobel Prize in 1997. Prions show that information can be transmitted by shape alone, not just by genetic code. [D]
    `.trim(),
        questions: [
            {
                id: "batch17_topic15_prions_Q1",
                question: "Why were Prions considered a violation of biological dogma when first discovered?",
                options: [
                    "They were too small.",
                    "They are infectious proteins that reproduce and transmit disease without having any DNA or RNA (genetic material).",
                    "They only affect cows.",
                    "They are invisible."
                ],
                correctAnswer: "B",
                explanation: "The passage states: 'It has **no DNA**. It has no RNA. It is just a protein... Prusiner was laughed at... \"Biology Dogma says you need DNA!\"'"
            }
        ]
    },
    {
        id: "batch17_topic16_dada",
        taskType: "academic",
        title: "Dadaism: The Art of Anti-Art",
        passage: `
**Rhetorical Structure:** Context/Provocation
**Dominant TOEFL Skill:** Inference

World War I (1914-1918) shattered European confidence. Technology and Logic had produced machine guns and trenches. Millions died for nothing.
In Zurich (neutral Switzerland), a group of artists decided that if Logic leads to War, the only solution is *Nonsense*.
They founded *Dada*. (The name was chosen by stabbing a knife into a dictionary; it means "Hobby Horse" in French, or nothing).

Dada was not a style; it was an attitude.
It mocked authority, tradition, and the art market. [A]
They wrote nonsense poems. They wore cardboard costumes.

Marcel Duchamp is the icon.
In 1917, he submitted a porcelain urinal to an art exhibition. He signed it "R. Mutt" and titled it *Fountain*. [B]
The judges hid it.
Duchamp asked: "What makes Art?"
*   Is it skill? No (he bought the urinal).
*   Is it beauty? No.
*   It is **Choice**. The artist *chose* this object. By placing it in a gallery, he changed its meaning.

This is the "Readymade."
Dada destroyed the idea that art must be a craft. It paved the way for Conceptual Art. [C]
The movement self-destructed in 1922. As soon as Dada became "accepted" by the public, it had to die, because it existed only to offend. It then morphed into Surrealism. [D]
    `.trim(),
        questions: [
            {
                id: "batch17_topic16_dada_Q1",
                question: "Why did the Dada movement eventually self-destruct in 1922?",
                options: [
                    "They ran out of paint.",
                    "Because it existed primarily to shock/offend; once it became accepted and popular, it lost its fundamental purpose.",
                    "The artists were arrested.",
                    "It was too expensive."
                ],
                correctAnswer: "B",
                explanation: "The passage notes: 'As soon as Dada became \"accepted\" by the public, it had to die, because it existed only to offend.'"
            }
        ]
    },
    {
        id: "batch17_topic17_great_wall",
        taskType: "academic",
        title: "The Great Wall of China: Myth and Reality",
        passage: `
**Rhetorical Structure:** Correction/History
**Dominant TOEFL Skill:** Factual Information

The Great Wall is the symbol of China.
Myth: It is one single continuous wall built by Qin Shi Huang (200 BC), visible from the Moon.
Reality: It is a disconnected series of fortifications built over 2,000 years, and you cannot see it from the Moon (it's too thin, like a hair).

1.  **Qin Dynasty (221 BC):** The First Emperor linked existing earthen walls. These were mounds of rammed earth. [A] Little survives today.
2.  **Han Dynasty:** Extended it west to protect the Silk Road. They used reeds and gravel.
3.  **Ming Dynasty (1368-1644):** This is the wall you see on postcards. [B]
    After the Mongols were expelled, the Ming wanted to ensure they never returned.
    They built with stone and brick. They added watchtowers and cannon platforms.

Function:
It wasn't just a fence to stop armies. (Armies can climb walls).
It was a **Communication Highway**.
Smoke signals (wolf dung smoke) could send a message ("Invaders!") from the border to Beijing in hours. [C]
It was also a Customs border to tax trade.

Did it work?
No. The Mongols (Genghis Khan) went around it.
The Manchus (Qing) were let through the gates by a traitor general.
Psychologically, it represents the Chinese desire for order and separation from the "Barbarians." [D] But historically, walls rarely stop a determined enemy.
    `.trim(),
        questions: [
            {
                id: "batch17_topic17_great_wall_Q1",
                question: "Historically, what was the primary failure of the Great Wall of China as a defensive structure?",
                options: [
                    "It was too short.",
                    "It failed to stop determined invaders; the Mongols went around it, and the Manchus were let through by a traitor.",
                    "It collapsed.",
                    "It had too many doors."
                ],
                correctAnswer: "B",
                explanation: "The text states: 'Did it work? No. The Mongols... went around it. The Manchus... were let through... walls rarely stop a determined enemy.'"
            }
        ]
    },
    {
        id: "batch17_topic18_third_place",
        taskType: "academic",
        title: "Sociology: Ray Oldenburg and 'The Third Place'",
        passage: `
**Rhetorical Structure:** Concept/Importance
**Dominant TOEFL Skill:** Vocabulary in Context

In his book *The Great Good Place* (1989), Ray Oldenburg argued that a healthy society needs three places:
1.  **First Place:** Home. (Private, Family).
2.  **Second Place:** Work. (Productive, Hierarchy).
3.  **Third Place:** The Pub, the Cafe, the Barber Shop, the Main Street Park. [A]

Characteristics of a Third Place:
*   **Neutral Ground:** Anyone can come. No one "owns" it.
*   **Leveler:** Status doesn't matter. The CEO and the plumber chat as equals.
*   **Conversation is the main activity.**
*   **Regulars:** You see familiar faces.
*   **Playful:** It is not serious like work.

Oldenburg warned that America is losing its Third Places. [B]
Suburban sprawl (Zoning) separates houses from shops. You have to drive everywhere.
We moved from the "Front Porch" (social) to the "Back Deck" (private).
We watch TV alone instead of going to the pub.

The result is loneliness and correct polarization. [C]
Third Places are the "Living Room of Society." They are where democracy happens. Steps are taken to rebuild them (Starbucks tries to *be* a Third Place, but it is corporate). [D] Real Third Places grow organically, not by design.
    `.trim(),
        questions: [
            {
                id: "batch17_topic18_third_place_Q1",
                question: "According to Ray Oldenburg, why are 'Third Places' (pubs, cafes, parks) essential for a healthy society?",
                options: [
                    "They sell coffee.",
                    "They are neutral grounds where status doesn't matter and people from different walks of life talk, acting as the 'Living Room of Society'.",
                    "They are workplaces.",
                    "They are quiet."
                ],
                correctAnswer: "B",
                explanation: "The passage notes: 'Leveler: Status doesn't matter... Third Places are the \"Living Room of Society.\"' "
            }
        ]
    },
    {
        id: "batch17_topic19_tacoma_narrows",
        taskType: "academic",
        title: "Engineering Failure: The Tacoma Narrows Bridge",
        passage: `
**Rhetorical Structure:** Case Study/Phenomenon
**Dominant TOEFL Skill:** Cause and Effect

In 1940, the Tacoma Narrows Bridge (Suspension) in Washington opened. It was sleek and thin.
Drivers noticed it moved. They called it "Galloping Gertie."
Four months later, in a moderate wind (40 mph), it twisted violently and collapsed into the water.
It was caught on film.

Why?
Engineers initially thought the wind pushed it over.
Wrong. It was **Aeroelastic Flutter** (Resonance). [A]

Every object has a "Natural Frequency" (like a wine glass).
The bridge's deck was solid (not a truss). It acted like an airplane wing.
The wind hit it, causing it to twist slightly.
This twist changed the aerodynamics, catching more wind, which pushed it back. [B]
The wind fed energy into the bridge *at the exact right rhythm* (like pushing a child on a swing).
The amplitude grew and grew until the steel snapped.

Lesson Learned:
Modern suspension bridges use **open trusses** (so wind blows *through*, not against). [C]
They use fairings (shapes to disrupt wind).
This disaster changed Civil Engineering from Static (forces) to Dynamic (vibrations). [D]
    `.trim(),
        questions: [
            {
                id: "batch17_topic19_tacoma_narrows_Q1",
                question: "What was the actual cause of the collapse of the Tacoma Narrows Bridge ('Galloping Gertie')?",
                options: [
                    "It was hit by a truck.",
                    "Aeroelastic Flutter (Resonance), where the wind's energy matched the bridge's natural frequency, causing violent twisting.",
                    "The steel was rusty.",
                    "An earthquake."
                ],
                correctAnswer: "B",
                explanation: "The text explains: 'It was **Aeroelastic Flutter** (Resonance)... The wind fed energy into the bridge *at the exact right rhythm*.'"
            }
        ]
    },
    {
        id: "batch17_topic20_birds_dinosaurs",
        taskType: "academic",
        title: "Evolution: Archaeopteryx and the Dinosaur-Bird Link",
        passage: `
**Rhetorical Structure:** Discovery/Evidence
**Dominant TOEFL Skill:** Sentence Insertion

In 1859, Darwin published *The Origin of Species*. Critics yelled: "Where are the missing links?"
Two years later (1861), in a limestone quarry in Germany, miners found a feather. Then a skeleton.
*Archaeopteryx* ("Ancient Wing").

It was the perfect "transitional fossil."
It lived 150 million years ago (Jurassic).

**Dinosaur traits:**
*   Teeth (Birds have beaks). [A]
*   Long bony tail (Birds have a stump).
*   Claws on wings.
*   Solid bones.

**Bird traits:**
*   Flight Feathers (asymmetrical). [B]
*   Wishbone (furcula).

It proved birds evolved from small, meat-eating dinosaurs (Theropods, like Velociraptor).
Modern discoveries in China (Liaoning) confirm this. [C] We found Velociraptor cousins covered in fuzz/feathers. *T. rex* might have had feathers as a baby.

Why feathers?
Originally for warmth (insulation).
Then for display (sexual selection).
Finally for flight (exaptation). [D]
Dinosaurs didn't go extinct. You eat one for Thanksgiving.
    `.trim(),
        questions: [
            {
                id: "batch17_topic20_birds_dinosaurs_Q1",
                question: "What theory regarding the origin of flight feathers is supported by modern dinosaur discoveries?",
                options: [
                    "They were for swimming.",
                    "Exaptation: Feathers evolved first for warmth (insulation) or sexual display, and were only later adapted for flight.",
                    "They were for fighting.",
                    "They were accidental."
                ],
                correctAnswer: "B",
                explanation: "The passage lists: 'Originally for warmth... Then for display... Finally for flight (exaptation).'"
            }
        ]
    }
];
