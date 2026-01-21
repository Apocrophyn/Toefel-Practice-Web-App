
import { AcademicQuestion } from "./reading-2026";

export const batch16Passages: AcademicQuestion[] = [
    {
        id: "batch16_topic1_refraction",
        taskType: "academic",
        title: "The Physics of Light: Refraction and Dispersion",
        passage: `
**Rhetorical Structure:** Mechanism/Phenomenon
**Dominant TOEFL Skill:** Factual Information

Light travels at 300,000 km/s in a vacuum. But when it enters a denser medium (like glass or water), it slows down. This change in speed causes the light ray to bend. This bending is called *Refraction*.

Think of a car driving from pavement (fast) into mud (slow). [A] If it hits the mud at an angle, the front right wheel hits the mud first and slows down. The left wheel is still on the pavement, moving fast. This causes the car to pivot or turn into the mud. Light does the same thing.

Snell’s Law calculates exactly how much it bends based on the "Refractive Index" of the material. Diamond has a very high index (2.42), meaning it slows light down a lot, bending it sharply. This causes the "sparkle" as light traps inside.

But not all colors slow down equally.
Blue light (high frequency) interacts more with the glass atoms than Red light.
Blue slows down *more* than Red.
Therefore, Blue bends *more*. [B]

This separation of colors is called *Dispersion*.
Isaac Newton proved this with a prism. White light enters, and a rainbow exits. [C]
A rainbow in the sky is just millions of raindrops acting as tiny prisms. Sunlight enters the drop, refracts (separates), reflects off the back of the drop, and refracts again as it leaves, sending the spectrum into your eye. [D]
    `.trim(),
        questions: [
            {
                id: "batch16_topic1_refraction_Q1",
                question: "Why does blue light bend more than red light when passing through a prism?",
                options: [
                    "Because blue light is hotter.",
                    "Because blue light has a higher frequency and interacts more with the material, slowing down more than red light.",
                    "Because red light is faster in a vacuum.",
                    "Because prisms prefer blue."
                ],
                correctAnswer: "B",
                explanation: "The passage notes: 'Blue light (high frequency) interacts more... Blue slows down *more* than Red. Therefore, Blue bends *more*.'"
            }
        ]
    },
    {
        id: "batch16_topic2_tokugawa_sakoku",
        taskType: "academic",
        title: "The Tokugawa Shogunate and Sackoku (Closed Country)",
        passage: `
**Rhetorical Structure:** Policy/Consequence
**Dominant TOEFL Skill:** Negative Factual Information

In 1600, Tokugawa Ieyasu won the Battle of Sekigahara and unified Japan after a century of civil war. The Tokugawa Shogunate ruled for 260 years of peace (The Edo Period). To maintain stability, they enacted a radical policy: *Sakoku* ("Locked Country").

They feared two things:
1.  **Christianity:** Catholic missionaries (Jesuits) were converting Japanese lords. The Shogun saw this as a "Fifth Column"—loyalty to the Pope over the Shogun.
2.  **Gunpowder:** Foreign trade meant foreign weapons, which could help rebellious lords.

The Edicts of 1635 and 1639 were strict. [A]
*   No Japanese could leave Japan. (Penalty: Death).
*   No Japanese living abroad could return. (Penalty: Death).
*   All Europeans were expelled, except the Dutch.

Why the Dutch? They were Protestants and businessmen. They didn't care about spreading religion; they just wanted money. [B]
The Dutch were confined to a tiny artificial island in Nagasaki harbor called *Dejima*. They were the only window to the outside world.

Japanese scholars studied "Rangaku" (Dutch Learning)—Western medicine and astronomy—through this tiny keyhole. [C]

The isolation created a unique, pressure-cooker culture. Without foreign wars or influence, Japanese art (Ukiyo-e), theater (Kabuki), and tea ceremony flourished. [D] It was a golden age of internal culture, but it meant Japan missed the Industrial Revolution, creating the vulnerability that Commodore Perry exploited in 1853.
    `.trim(),
        questions: [
            {
                id: "batch16_topic2_tokugawa_sakoku_Q1",
                question: "Why did the Tokugawa Shogunate expel all Europeans except the Dutch?",
                options: [
                    "The Dutch had better weapons.",
                    "Because the Dutch were Protestants interested only in trade, unlike the Catholic Jesuits who tried to convert the population.",
                    "The Dutch were allies of China.",
                    "The Shogun liked Dutch cheese."
                ],
                correctAnswer: "B",
                explanation: "The text states: 'Why the Dutch? They were Protestants and businessmen. They didn't care about spreading religion; they just wanted money.'"
            }
        ]
    },
    {
        id: "batch16_topic3_bioluminescence",
        taskType: "academic",
        title: "Bioluminescence: Living Light",
        passage: `
**Rhetorical Structure:** Mechanism/Function
**Dominant TOEFL Skill:** Vocabulary in Context

Fireflies, anglerfish, and glowing mushrooms all share a superpower: *Bioluminescence*. It is "cold light"—light produced without heat (unlike a lightbulb, which wastes 90% of energy as heat).

The chemistry involves two molecules: *Luciferin* (the fuel) and *Luciferase* (the enzyme/spark).
When Luciferin reacts with Oxygen, catalyzed by Luciferase, it releases a photon. [A]

Why do animals do it?
1.  **Hunting:** The Deep Sea Anglerfish dangles a glowing lure in front of its mouth. In the pitch-black abyss, curiosity kills the prey.
2.  **Defense:** Some squid shoot a cloud of glowing goo instead of ink. The bright flash blinds the predator, allowing the squid to escape.
3.  **Camouflage:** Counter-illumination. [B] Sharks look up to see the silhouette of prey against the sunlight surface. Some fish have lights on their *bellies* that match the brightness of the sun, making them invisible from below.

We use it in medicine. [C] Scientists isolated the Green Fluorescent Protein (GFP) from jellyfish. We can splice this gene into cancer cells in mice. The tumor glows green under UV light. This allows doctors to track the spread of cancer or see if a drug is working in real-time. [D]
    `.trim(),
        questions: [
            {
                id: "batch16_topic3_bioluminescence_Q1",
                question: "How do some sharks use bioluminescence for camouflage (Counter-illumination)?",
                options: [
                    "They blind their prey.",
                    "They have lights on their bellies that match the sunlight from above, making them invisible to prey looking up.",
                    "They look like rocks.",
                    "They change color to match the sand."
                ],
                correctAnswer: "B",
                explanation: "The passage explains: 'Sharks look up... Some fish have lights on their *bellies* that match the brightness of the sun, making them invisible from below.'"
            }
        ]
    },
    {
        id: "batch16_topic4_picaresque_don_quixote",
        taskType: "academic",
        title: "The Picaresque Novel and Don Quixote",
        passage: `
**Rhetorical Structure:** Definition/Example
**Dominant TOEFL Skill:** Prose Summary

The *Picaresque* novel emerged in Spain in the 16th century. The name comes from *picaro* (rogue/rascal). Unlike the "Chivalric Romance" (about noble knights), the picaresque is about a low-class anti-hero surviving by his wits in a corrupt society.

Characteristics:
*   First-person narrative.
*   Episodic plot (no grand arc, just one adventure after another).
*   Satire of social classes. [A]

Cervantes' *Don Quixote* (1605) is often called the first modern novel. It plays with these tropes.
Quixote is a noble who reads too many Knight romances and goes crazy. He *thinks* he is a Chivalric hero, but the world around him is Picaresque—dirty inns, prostitutes, and windmills. [B]

He is accompanied by Sancho Panza, a peasant who represents reality.
Quixote sees a giant; Sancho sees a windmill.
Quixote sees a helmet of Mambrino; Sancho sees a barber's basin.

The novel is a "Meta-Commentary." [C] It mocks the old style (Romance) by smashing it against the new style (Realism).
However, it is not just a joke. Quixote’s delusion is noble. He chooses to see the world not as it is (corrupt), but as it *should* be. [D] He imposes poetry onto prose.
    `.trim(),
        questions: [
            {
                id: "batch16_topic4_picaresque_don_quixote_Q1",
                question: "How does the character of Sancho Panza contrast with Don Quixote?",
                options: [
                    "Sancho reads too many books.",
                    "Sancho represents reality (seeing windmills), while Quixote represents delusion and idealism (seeing giants).",
                    "Sancho is a knight.",
                    "Quixote is the servant."
                ],
                correctAnswer: "B",
                explanation: "The text contrasts them: 'Quixote sees a giant; Sancho sees a windmill. Quixote sees a helmet... Sancho sees a barber's basin.'"
            }
        ]
    },
    {
        id: "batch16_topic5_paradox_of_thrift",
        taskType: "academic",
        title: "Keynesian Economics: The Paradox of Thrift",
        passage: `
**Rhetorical Structure:** Theory/Paradox
**Dominant TOEFL Skill:** Sentence Insertion

Common sense says: "Saving money is good." If a family saves, they are safer.
However, John Maynard Keynes (1936) argued that what is good for the *Individual* can be bad for the *Whole Economy*. This is the *Paradox of Thrift*.

Imagine a Recession hits. People get scared. [A] They stop spending and start saving.
*   Individual: Smart move.
*   Economy: Disaster.

My spending is your income. (I buy bread -> Baker gets paid).
If everyone stops spending, businesses lose revenue.
Businesses fire workers.
The fired workers have zero income, so they spend *nothing*.
The recession gets worse. [B]

Keynes argued that by trying to save, the aggregate demand falls so much that total savings actually *decrease* (because everyone loses their jobs).

This justifies Government Stimulus. [C]
When the private sector saves (hiding money under the mattress), the Government must step in and *spend* (Deficit Spending).
The government buys bridges and roads to put money back into the Baker's pocket, so the cycle can restart. [D]
Critiques: Austrians/Monetarists argue that savings are needed for Investment (Capital), and printing money just causes inflation. But in a crisis, the Paradox explains why "belt-tightening" can suffocate the patient.
    `.trim(),
        questions: [
            {
                id: "batch16_topic5_paradox_of_thrift_Q1",
                question: "According to the Paradox of Thrift, why can increasing individual savings be bad for the overall economy during a recession?",
                options: [
                    "Banks will run out of money.",
                    "Because if everyone saves and stops spending, businesses lose income and fire workers, causing total savings to actually decrease.",
                    "Inflation will rise.",
                    "People become greedy."
                ],
                correctAnswer: "B",
                explanation: "The passage argues: 'My spending is your income... If everyone stops spending... Businesses fire workers... The recession gets worse.'"
            }
        ]
    },
    {
        id: "batch16_topic6_desert_geology",
        taskType: "academic",
        title: "Geology of Deserts: Aeolian Processes",
        passage: `
**Rhetorical Structure:** Mechanism/Classification
**Dominant TOEFL Skill:** Factual Information

In deserts, water is rare, so the wind (*Aeolian* processes) becomes the master sculptor. Wind erodes in two ways: Deflation and Abrasion.

**Deflation:** The wind picks up fine particles (clay/silt) and blows them away, leaving the heavy rocks behind. This creates a "Desert Pavement"—a hard, rocky surface that protects the ground from further erosion. [A]
The blown-away dust can travel continents. The nutrient-rich dust from the Sahara feeds the Amazon Rainforest.

**Abrasion:** The wind carries sand grains. It acts like a sandblaster. But sand is heavy; it only flies about 1 meter high.
Therefore, desert rocks (Ventifacts) are often eroded at the bottom but not the top, creating "Mushroom Rocks." [B]

**Deposition (Dunes):** When the wind slows down, it drops the sand. Dunes migrate.
*   **Barchan Dunes:** Crescent-shaped. Tips point downwind. Form where sand is scarce.
*   **Star Dunes:** Have multiple arms. Form where wind changes direction constantly. [C]

The finest dust (silt) travels furthest and settles as *Loess*.
Loess deposits (like in the Yellow River valley of China) are incredibly fertile but unstable. [D] They pack together but crumble easily, leading to massive landslides and yellow rivers.
    `.trim(),
        questions: [
            {
                id: "batch16_topic6_desert_geology_Q1",
                question: "What is 'Desert Pavement' and how is it formed?",
                options: [
                    "It is a road built by Bedouins.",
                    "A hard, rocky surface formed when wind removes all fine particles (deflation), leaving only heavy rocks behind.",
                    "It is made of concrete.",
                    "It is caused by rain."
                ],
                correctAnswer: "B",
                explanation: "The passage explains: 'Deflation: The wind picks up fine particles... leaving the heavy rocks behind. This creates a \"Desert Pavement\".'"
            }
        ]
    },
    {
        id: "batch16_topic7_carbon_allotropes",
        taskType: "academic",
        title: "Carbon Allotropes: Diamond vs. Graphite",
        passage: `
**Rhetorical Structure:** Comparison/Structure
**Dominant TOEFL Skill:** Inference

Carbon is the Lego block of the universe. It can form radically different substances depending on how the atoms connect. These different forms are *Allotropes*. The two most famous are Diamond and Graphite. Chemically, they are identical (100% Carbon). Structurally, they are opposites.

**Diamond:** [A]
Each carbon atom bonds to 4 other carbon atoms in a 3D pyramid (Tetrahedron).
This is a rigid, strong network.
*   Hardest natural substance.
*   Insulator (Electricity cannot flow because all electrons are locked in bonds).
*   Transparent.

**Graphite (Pencil Lead):** [B]
Each carbon atom bonds to 3 others in a flat 2D sheet (Hexagons, like chicken wire).
The sheets are not bonded to each other; they just slide on top of each other (held by weak Van der Waals forces).
*   Soft (when you write, you are peeling off sheets of carbon).
*   Conductor (The 4th electron is free to run around the sheet). [C]
*   Opaque/Black.

Graphene is a single layer of graphite. It is the strongest material ever discovered (200x stronger than steel). [D]
Buckyballs (C60) are soccer-ball shapes.
Carbon Nanotubes are rolled-up graphene.
The future of materials science lies in rearranging the geometry of this one simple element.
    `.trim(),
        questions: [
            {
                id: "batch16_topic7_carbon_allotropes_Q1",
                question: "Why is Graphite an electrical conductor while Diamond is an insulator, even though both are made of pure carbon?",
                options: [
                    "Graphite contains metal.",
                    "In Graphite, each atom bonds to only 3 others, leaving a 4th electron free to move, whereas Diamond bonds all 4 electrons rigidly.",
                    "Diamond is too hard.",
                    "Graphite is black."
                ],
                correctAnswer: "B",
                explanation: "The passage states: 'Diamond... Insulator... Graphite... Conductor (The 4th electron is free to run around the sheet).'"
            }
        ]
    },
    {
        id: "batch16_topic8_anesthesia",
        taskType: "academic",
        title: "The Surgery Revolution: The Invention of Anesthesia",
        passage: `
**Rhetorical Structure:** Contrast/Narrative
**Dominant TOEFL Skill:** Negative Factual Information

Before 1846, surgery was torture. Speed was the only mercy. A leg amputation had to be done in 30 seconds. Patients were held down by strong men. They often died from "Surgical Shock" (pain-induced trauma).

The discovery of Anesthesia (Greek: "Without Sensation") changed medicine forever.

Nitrous Oxide (Laughing Gas) and Ether were known, but used only for parties ("Ether Frolics"). [A] They were considered toys.

In 1846, dentist William Morton successfully used **Ether** to remove a tumor from a patient's neck at Massachusetts General Hospital.
The patient woke up and said, "I felt no pain."
The surgeon, Dr. Warren, turned to the audience and said, "Gentlemen, this is no humbug." [B]

Impact:
1.  **Time:** Surgeons could slow down. They could be precise. They could wash their hands. (Before, speed prevented hygiene).
2.  **Scope:** They could operate deep inside the body (abdomen/brain), which was impossible before due to writhing patients. [C]

Queen Victoria used Chloroform for childbirth in 1853, making it socially acceptable (the Church had argued pain was God's punishment for Eve's sin). [D]
Anesthesia is arguably the greatest humanitarian gift of American medicine to the world.
    `.trim(),
        questions: [
            {
                id: "batch16_topic8_anesthesia_Q1",
                question: "How did the invention of anesthesia fundamentally change the practice of surgery?",
                options: [
                    "It made surgeries faster.",
                    "It allowed surgeons to prioritize precision over speed, enabling deeper and more complex operations and better hygiene.",
                    "It allowed patients to sleep forever.",
                    "It made doctors rich."
                ],
                correctAnswer: "B",
                explanation: "The list includes: 'Time: Surgeons could slow down... Scope: They could operate deep inside the body... which was impossible before.'"
            }
        ]
    },
    {
        id: "batch16_topic9_operant_conditioning",
        taskType: "academic",
        title: "B.F. Skinner and Operant Conditioning",
        passage: `
**Rhetorical Structure:** Theory/Mechanism
**Dominant TOEFL Skill:** Classification

Behaviorism was the dominant psychology of the mid-20th century. While Pavlov studied "Classical Conditioning" (drooling at a bell), B.F. Skinner studied *Operant Conditioning*. The difference is Agency. In Pavlov, the dog is passive. In Skinner, the animal *operates* on the environment to get a reward.

Skinner Box: A cage with a lever and a food dispenser.
A rat runs around. Accidentally hits lever. Food pellet drops.
Rat learns: Lever = Food.
Rat hits lever again.

4 Types of Conditioning:
1.  **Positive Reinforcement:** Add something Good. (Give cookie). Behavior increases. [A]
2.  **Negative Reinforcement:** Remove something Bad. (Stop the loud noise). Behavior increases. (Note: Negative reinforcement is *not* punishment. It is relief).
3.  **Positive Punishment:** Add something Bad. (Shock). Behavior decreases. [B]
4.  **Negative Punishment:** Remove something Good. (Take away toy). Behavior decreases.

Skinner found that **Positive Reinforcement** is the most effective for teaching. Punishment only suppresses behavior temporarily and causes fear.

He also found "Variable Ratio" schedules are addictive. [C]
If the lever gives food *every* time, the rat gets bored.
If the lever gives food *randomly* (like a Slot Machine), the rat hits it obsessively forever.
This is the psychology behind gambling and social media likes. [D]
    `.trim(),
        questions: [
            {
                id: "batch16_topic9_operant_conditioning_Q1",
                question: "According to Skinner, why is a 'Variable Ratio' schedule (like a slot machine) so addictive?",
                options: [
                    "Because rats love gambling.",
                    "Because the reward is unpredictable, leading to obsessive behavior to get the next 'win'.",
                    "Because the lever is shiny.",
                    "Because the food tastes better."
                ],
                correctAnswer: "B",
                explanation: "The text notes: 'If the lever gives food *randomly* (like a Slot Machine), the rat hits it obsessively forever.'"
            }
        ]
    },
    {
        id: "batch16_topic10_asteroids",
        taskType: "academic",
        title: "The Main Asteroid Belt: Ceres and Vesta",
        passage: `
**Rhetorical Structure:** Description/Formation
**Dominant TOEFL Skill:** Factual Information

Between Mars and Jupiter lies the "Asteroid Belt." In Sci-Fi movies (like *Star Wars*), this is a dense field of rocks you have to dodge. In reality, it is mostly empty space. You could fly through it a billion times and never hit anything. The average distance between asteroids is 600,000 miles.

What is it? It is a failed planet. [A]
In the early solar system, dust tried to clump together to form a planet here.
However, Jupiter’s massive gravity kept stirring the pot. It pulled the rocks apart every time they tried to coalesce. "Orbital Resonance" prevented accretion.

The largest object is **Ceres** (940 km wide). It is round, so we classify it as a "Dwarf Planet." It has water ice and possibly a subsurface ocean. [B]

The second largest is **Vesta**. It is a lumpy asteroid. It has a massive crater at the south pole. We have found pieces of Vesta *on Earth*. [C] Meteorites called HEDs match Vesta's heavy metal spectrum precisely.

The belt is a time capsule. Earth's rocks have been melted and recycled by volcanoes. Asteroids are the original, pristine bricks of the solar system, unchanged for 4.5 billion years. [D] Mining them (for platinum and water) is the next frontier of space economics.
    `.trim(),
        questions: [
            {
                id: "batch16_topic10_asteroids_Q1",
                question: "Why does the asteroid belt exist between Mars and Jupiter?",
                options: [
                    "Aliens destroyed a planet there.",
                    "It is a failed planet; Jupiter's massive gravity prevented the rocks from clumping together to form a single world.",
                    "The Sun blew it up.",
                    "It is dust from comets."
                ],
                correctAnswer: "B",
                explanation: "The passage states: 'It is a failed planet... Jupiter’s massive gravity kept stirring the pot. It pulled the rocks apart every time they tried to coalesce.'"
            }
        ]
    },
    {
        id: "batch16_topic11_shamanism",
        taskType: "academic",
        title: "Anthropology of Shamanism: The Universal Healer",
        passage: `
**Rhetorical Structure:** Definition/Commonality
**Dominant TOEFL Skill:** Prose Summary

"Shaman" is a word from the Tungus people of Siberia, but anthropologists use it to describe a religious figure found in hunter-gatherer societies globally, from the Amazon to the Artic.

A Shaman is distinct from a Priest.
*   **Priest:** institutional, learns from a book/tradition, performs standard rituals for a congregation.
*   **Shaman:** charismatic, learns from personal experience/spirits, enters a *Trance* to travel to other worlds. [A]

The core function is healing. Illness is viewed as spiritual (e.g., "Soul Loss"). The Shaman enters an altered state of consciousness (using drums, fasting, or psychedelics) to travel to the Spirit World. There, they bargain with spirits to retrieve the patient's lost soul. [B]

The "Shamanic Illness."
Getting the job is not a choice. It is a calling. Usually, the young shaman gets very sick (psychologically or physically). [C] They cure themselves by mastering the spirits. This "Wounded Healer" archetype gives them empathy.

Mircea Eliade called Shamanism the "Archaic Techniques of Ecstasy." [D] It represents the oldest form of human religion, focused on the direct, individual experience of the divine rather than dogma.
    `.trim(),
        questions: [
            {
                id: "batch16_topic11_shamanism_Q1",
                question: "How does a Shaman primarily differ from a Priest according to the passage?",
                options: [
                    "Shamans wear robes.",
                    "A Shaman relies on direct personal experience and trance states to visit the spirit world, whereas a Priest relies on institutional authority and standard rituals.",
                    "Priests are older.",
                    "Shamans are rich."
                ],
                correctAnswer: "B",
                explanation: "The text contrasts them: 'Priest: institutional... Shaman: charismatic, learns from personal experience... enters a *Trance*'."
            }
        ]
    },
    {
        id: "batch16_topic12_art_nouveau_gaudi",
        taskType: "academic",
        title: "Art Nouveau and Antoni Gaudí",
        passage: `
**Rhetorical Structure:** Style/Biography
**Dominant TOEFL Skill:** Vocabulary in Context

At the turn of the 20th century (1890-1910), a new style swept Europe: *Art Nouveau* (New Art). It was a rebellion against the grey industrial factories. It wanted to bring nature back into the city.

Key Trait: The "Whiplash Line." [A] Curved, organic, flowing lines. No straight angles (nature has no straight lines). Think of flower stems, vines, and insect wings.

The genius of this style was Antoni Gaudí in Barcelona.
His masterpiece is the *Sagrada Família* basilica.
It looks like it was grown, not built. The towers look like wet sandcastles or termite mounds.
Inside, the columns branch out like trees to hold up the ceiling (forest canopy). [B]

Gaudí despised drawings. He used weighted strings to design arches. He hung strings upside down with weights. Gravity pulled them into a natural curve (Catenary Arch). He then looked at the reflection in a mirror to see the building right-side up. [C] This ensured the stone was usually in perfect compression.

Art Nouveau was short-lived. It was too expensive (hand-carved). [D] It was replaced by the machine-friendly Art Deco (Batch 9) and Bauhaus (Batch 13). But Gaudí stands as the ultimate example of Biophilic Design—architecture that mimics the logic of life.
    `.trim(),
        questions: [
            {
                id: "batch16_topic12_art_nouveau_gaudi_Q1",
                question: "What is the defining visual characteristic of Art Nouveau, as exemplified by Gaudí?",
                options: [
                    "It uses only squares.",
                    "The 'Whiplash Line'—curved, organic lines inspired by nature, avoiding straight angles.",
                    "It is black and white.",
                    "It looks like machinery."
                ],
                correctAnswer: "B",
                explanation: "The passage notes: 'Key Trait: The \"Whiplash Line.\" Curved, organic, flowing lines. No straight angles (nature has no straight lines).'"
            }
        ]
    },
    {
        id: "batch16_topic13_spanish_armada",
        taskType: "academic",
        title: "The Spanish Armada: 1588",
        passage: `
**Rhetorical Structure:** Narrative/Cause-Effect
**Dominant TOEFL Skill:** Inference

In 1588, King Philip II of Spain launched "The Most Fortunate Armada" to conquer England.
Motivations:
1.  **Religion:** Philip (Catholic) wanted to dethrone Elizabeth I (Protestant) and restore England to Rome.
2.  **Piracy:** English "Sea Dogs" (Drake) were stealing Spanish gold from the Americas. [A]

The Armada had 130 massive ships. The English fleet was smaller but faster.
The Spanish strategy: Get close, grapple, and board. (Soldier fighting).
The English strategy: Stay away and fire cannons. (Naval fighting). [B]

The Turning Point: The Battle of Gravelines.
The Spanish anchored off Calais. The English sent in "Fireships" (burning hulks) at night.
Panic. The Spanish cut their anchors to escape. They broke formation.
The English ships swarmed in, pounding the disorganized Spanish with superior gunnery.

The Disaster: The Protestant Wind.
The Spanish fled North, around Scotland, to get home.
A massive storm hit. [C] Without anchors, dozens of chips smashed into the Irish rocks.
Only 67 ships returned to Spain.

The Result:
It saved Protestantism in England.
It marked the beginning of the end of Spanish naval dominance and the rise of the Royal Navy. [D] It proved that in modern naval warfare, agility and firepower beat size and troop count.
    `.trim(),
        questions: [
            {
                id: "batch16_topic13_spanish_armada_Q1",
                question: "What strategic advantage did the English fleet have over the Spanish Armada?",
                options: [
                    "They had more soldiers.",
                    "They used faster ships and long-range cannons to fight from a distance, avoiding the Spanish strategy of grappling and boarding.",
                    "They had dragons.",
                    "The Spanish surrendered."
                ],
                correctAnswer: "B",
                explanation: "The text states: 'The English strategy: Stay away and fire cannons... It proved that... agility and firepower beat size and troop count.'"
            }
        ]
    },
    {
        id: "batch16_topic14_chaos_theory",
        taskType: "academic",
        title: "Chaos Theory: The Butterfly Effect",
        passage: `
**Rhetorical Structure:** Theory/Paradox
**Dominant TOEFL Skill:** Sentence Insertion

Classical Physics (Newton) is deterministic. If you know the position and speed of every ball on a pool table, you can predict the future perfectly.
In the 1960s, meteorologist Edward Lorenz found that nature doesn't work like that. He discovered *Chaos Theory*.

He was running a weather simulation on a computer.
He paused it. He typed in the numbers from the previous run to restart it.
But instead of 0.506127, he typed 0.506 (rounding off). [A]
He expected the result to be almost the same.
Instead, the weather was completely different. A tiny change in the input caused a massive change in the output.

He called this the *Butterfly Effect*: "Does the flap of a butterfly’s wings in Brazil set off a tornado in Texas?"

Systems that are "Sensitive to Initial Conditions" are Chaotic.
Weather is chaotic. [B]
This is why we cannot predict the weather more than 10 days out. The errors compound exponentially.

However, Chaos is not "Random." It has a hidden pattern.
If you plot the chaotic behavior, it forms a shape called a "Strange Attractor" (Lorenz Attractor), which looks like a butterfly. [C]
The system never repeats exactly, but it stays within boundaries.

This applies to the Stock Market and Heartbeats. A healthy heart beat is actually slightly chaotic (flexible). [D] A perfectly regular heart beat is a sign of impending failure. Chaos is the signature of life.
    `.trim(),
        questions: [
            {
                id: "batch16_topic14_chaos_theory_Q1",
                question: "What is the 'Butterfly Effect' in Chaos Theory?",
                options: [
                    "Butterflies cause tornadoes.",
                    "The idea that in chaotic systems (like weather), a tiny change in initial conditions can result in a massive difference in the final outcome.",
                    "Insects are dangerous.",
                    "Weather is random."
                ],
                correctAnswer: "B",
                explanation: "The passage defines it: 'A tiny change in the input caused a massive change in the output... Does the flap of a butterfly’s wings... set off a tornado?'"
            }
        ]
    },
    {
        id: "batch16_topic15_photosynthesis_c3_c4",
        taskType: "academic",
        title: "Botany: C3 vs. C4 Photosynthesis",
        passage: `
**Rhetorical Structure:** Comparison/Adaptation
**Dominant TOEFL Skill:** Factual Information

Plants eat $CO_2$. But in hot weather, they face a dilemma. To get $CO_2$, they must open their pores (stomata). If they open their pores, water escapes (transpiration) and they dry out.
Nature evolved two strategies: C3 and C4.

**C3 Plants (Standard):**
Wheat, Rice, Trees. (85% of plants).
They fix carbon directly into a 3-carbon molecule.
Problem: Their enzyme (Rubisco) is sloppy. When it is hot, Rubisco accidentally grabs Oxygen instead of $CO_2$. [A] This is "Photorespiration." It wastes energy. C3 plants suffer in the heat.

**C4 Plants (Turbocharged):**
Corn, Sugarcane. (Tropical grasses).
They fix carbon into a 4-carbon molecule.
They use a physical trick. They move the $CO_2$ into a special inner chamber ("Bundle Sheath") before feeding it to Rubisco. [B]
This inner chamber is gas-tight. It concentrates the $CO_2$.
Rubisco is flooded with pure $CO_2$, so it never grabs Oxygen.
Efficiency skyrockets.

**CAM Plants (Night Shift):**
Cacti.
They only open their pores *at night* when it is cool. They store the $CO_2$ in acid batteries. [C] During the day, they close pores and use the stored gas.

Why don't all plants use C4? It costs more energy to build the special machinery. [D] C3 is cheaper in cool, wet climates. C4 is the winner in hot, bright, dry climates.
    `.trim(),
        questions: [
            {
                id: "batch16_topic15_photosynthesis_c3_c4_Q1",
                question: "Why do C4 plants (like corn) perform better in hot climates than standard C3 plants?",
                options: [
                    "They don't need water.",
                    "They use a special inner chamber to concentrate CO2, preventing the enzyme Rubisco from accidentally grabbing Oxygen (photorespiration).",
                    "They grow at night.",
                    "They eat insects."
                ],
                correctAnswer: "B",
                explanation: "The text explains: 'They move the $CO_2$ into a special inner chamber... Rubisco is flooded with pure $CO_2$, so it never grabs Oxygen.'"
            }
        ]
    },
    {
        id: "batch16_topic16_pre_raphaelites",
        taskType: "academic",
        title: "The Pre-Raphaelite Brotherhood",
        passage: `
**Rhetorical Structure:** Reaction/Style
**Dominant TOEFL Skill:** Rhetorical Purpose

In 1848, a group of young British painters (Rossetti, Millais, Hunt) formed a secret society: The *Pre-Raphaelite Brotherhood* (PRB). They hated the Royal Academy.

They believed art had gone downhill since Raphael (the Renaissance master). [A] They felt Raphael and Michelangelo were too "artificial"—too many dramatic poses and muddy colors. They wanted to go back to the art *before* Raphael (Medieval/Early Renaissance).

Their Manifesto:
1.  **Truth to Nature:** Paint exactly what you see. If you paint a rock, go outside and paint a real rock. Don't invent it.
2.  **Bright Color:** Use pure white canvases and jewel-like colors. (Academy art was typically brown and dark, "The Brown Sauce").
3.  **Serious Subjects:** Literature, Shakespeare, Arthurian Legend, Bible. No generic genre scenes. [B]

Example: Millais' *Ophelia*. He painted a girl drowning in a river. He spent months painting the actual riverbank to get every flower legally botanically correct. The model (Lizzie Siddal) lay in a bathtub of water for weeks; the lamps went out, the water got cold, and she got pneumonia. [C]

They were shocked the public. Dickens called them "hideous."
But they influenced the "Arts and Crafts" movement. [D] Their obsession with medieval romance and beauty was a protest against the ugliness of the Victorian industrial city.
    `.trim(),
        questions: [
            {
                id: "batch16_topic16_pre_raphaelites_Q1",
                question: "What was the main goal of the Pre-Raphaelite Brotherhood?",
                options: [
                    "To paint faster.",
                    "To return art to the intense colors, detailed observation of nature, and serious subjects of the period before Raphael, whom they considered 'artificial'.",
                    "To use more brown paint.",
                    "To copy photographs."
                ],
                correctAnswer: "B",
                explanation: "The passage notes: 'They wanted to go back to the art *before* Raphael... Truth to Nature... Bright Color... Serious Subjects.'"
            }
        ]
    },
    {
        id: "batch16_topic17_petrodollar",
        taskType: "academic",
        title: "Geopolitics: The Rise of the Petrodollar",
        passage: `
**Rhetorical Structure:** Cause-Effect/System
**Dominant TOEFL Skill:** Prose Summary

In 1971, President Nixon took the US off the Gold Standard (Batch 12). The dollar had no backing. It risked becoming worthless. The US needed a new way to force the world to hold dollars. They found it in Saudi Arabia.

In 1974, the US cut a deal with the House of Saud.
The Deal:
1.  US provides military protection to the Saudi Royal Family forever.
2.  Saudi Arabia agrees to price all oil sales exclusively in **US Dollars**. [A]

This created the *Petrodollar*.
Since every country needs oil, every country needs dollars to buy it.
Japan needs oil -> Japan must sell Toyotas to the US to earn dollars -> Japan pays Saudi Arabia.
Saudi Arabia gets the dollars. What do they do with them? They invest them back into US Treasury Bonds (recycling). [B]

Effect:
This creates artificial demand for the Dollar.
It allows the US to run massive deficits (printing money) without crashing the currency, because the world absorbs the supply to buy oil. [C]
It is the "Exorbitant Privilege."

Critiques:
It entangles the US in Middle Eastern wars. [D]
Rivals (China, Russia) are now trying to break this system ("De-dollarization") by trading oil in Yuan or Rubles, threatening the pillar of American economic hegemony.
    `.trim(),
        questions: [
            {
                id: "batch16_topic17_petrodollar_Q1",
                question: "How does the 'Petrodollar' system primarily benefit the US economy?",
                options: [
                    "It makes oil cheaper.",
                    "It creates constant global demand for US dollars (since oil is priced in dollars), allowing the US to print money and run deficits without crashing its currency.",
                    "It stops wars.",
                    "It creates gold."
                ],
                correctAnswer: "B",
                explanation: "The text explains: 'This creates artificial demand for the Dollar... It allows the US to run massive deficits... because the world absorbs the supply to buy oil.'"
            }
        ]
    },
    {
        id: "batch16_topic18_panopticon",
        taskType: "academic",
        title: "Michel Foucault and the Panopticon",
        passage: `
**Rhetorical Structure:** Theory/Metaphor
**Dominant TOEFL Skill:** Inference

The *Panopticon* was a prison design proposed by Jeremy Bentham in 1791.
Layout: A circular prison with cells on the rim. In the center is a Guard Tower.
The Guard can see into every cell. The prisoners cannot see into the Tower (blinds/lighting).

Crucial Point: The prisoner never knows if the guard is watching. He *might* be watching.
Therefore, the prisoner must behave *as if* he is being watched at all times. [A]
Eventually, the guard doesn't need to be there. The prisoner internalizes the gaze. He polices himself.

French philosopher Michel Foucault (in *Discipline and Punish*, 1975) used this as a metaphor for modern society.
We live in a Panopticon.
Schools, hospitals, factories, and offices are designed to observe and normalize behavior. [B]

In the Digital Age, this is literal.
The Internet is the new Tower. The NSA, Google, and your Boss can see your data. [C]
You don't know if they are looking right now. But you know they *could*. So you self-censor. You act "normal."
Power is no longer a King with a sword; power is invsible surveillance that forces conformity from the inside out. [D]
    `.trim(),
        questions: [
            {
                id: "batch16_topic18_panopticon_Q1",
                question: "According to Michel Foucault, how does the 'Panopticon' prison design function as a metaphor for modern society?",
                options: [
                    "Prisons are round.",
                    "Unlike a King who uses force, modern power relies on invisible surveillance (or the threat of it) to make people police themselves.",
                    "We are all in jail.",
                    "Guards are everywhere."
                ],
                correctAnswer: "B",
                explanation: "The passage argues: 'The prisoner internalizes the gaze... Power is no longer a King with a sword; power is invsible surveillance.'"
            }
        ]
    },
    {
        id: "batch16_topic19_space_shuttle",
        taskType: "academic",
        title: "Engineering the Space Shuttle: The Reusable Heat Shield",
        passage: `
**Rhetorical Structure:** Problem-Solution/Constraint
**Dominant TOEFL Skill:** Negative Factual Information

The Apollo capsules (Moon) were single-use. They re-entered Earth's atmosphere protected by an "Ablative" heat shield—a resin that burned away, carrying the heat with it. The Space Shuttle (STS) was designed to be reusable—a "Space Truck." It couldn't burn away its skin every time.

It needed a *Thermal Protection System* (TPS) that was light, reusable, and could withstand 1,600°C.
They used Silica Ceramic Tiles (LI-900).

These tiles were 90% air (to be light).
They were incredible insulators. You could take a glowing red-hot tile out of an oven and pick it up by the corners with your bare hands instantly. The heat couldn't travel to your fingers. [A]

However, they were fragile. They were like Styrofoam. You could crush them with a finger.
They couldn't be bolted on (bolts conduct heat). They had to be *glued* on to the aluminum skin. 24,000 individual tiles. [B]
Each tile had a unique shape. If one fell off, you had to make a custom replacement.

This fragility was fatal. [C]
In 2003, the Shuttle *Columbia* was destroyed because a piece of foam fell off the tank during launch and punched a hole in the fragile tiles on the wing edge. Upon re-entry, the plasma gas entered the wing and melted the ship.
The Shuttle proved that "Reusable" does not always mean "Cheaper" or "Safer" if the maintenance is complex. [D]
    `.trim(),
        questions: [
            {
                id: "batch16_topic19_space_shuttle_Q1",
                question: "Why were the Space Shuttle's silica ceramic tiles considered a fatal design flaw despite being excellent insulators?",
                options: [
                    "They were too heavy.",
                    "They were incredibly fragile (like Styrofoam) and had to be glued on individually, making maintenance complex and leading to the Columbia disaster.",
                    "They melted easily.",
                    "They were too expensive."
                ],
                correctAnswer: "B",
                explanation: "The text explains: 'However, they were fragile... This fragility was fatal... The Shuttle proved that \"Reusable\" does not always mean \"Cheaper\"... if the maintenance is complex.'"
            }
        ]
    },
    {
        id: "batch16_topic20_sexual_selection",
        taskType: "academic",
        title: "Sexual Selection: The Peacock's Tail",
        passage: `
**Rhetorical Structure:** Theory/Paradox
**Dominant TOEFL Skill:** Factual Information

Natural Selection (Survival of the Fittest) explains why a deer has fast legs (to escape wolves). But it cannot explain why a Peacock has a massive, colorful tail.
The tail is heavy. It makes the bird slow. It attracts tigers. It is bad for survival.
Darwin solved this with *Sexual Selection*.

Evolution has two goals:
1.  Survive.
2.  Reproduce.
If you live to 100 but have no kids, your genes die.
If you live to 2 and have 10 kids, your genes win. [A]

The Peacock's tail is an advertisement to the Peahen (Female).
It says: "Look at me. I am so healthy and strong that I can survive *despite* dragging this heavy rug around." [B]
It is the *Handicap Principle* (Amotz Zahavi).
A weak male couldn't fake a big tail; he would die. Only a genetically superior male can afford the cost. It is an honest signal of quality.

Females prefer the big tail. So, big-tail genes get passed on.
This creates a "Runaway Process." The tails get bigger and bigger until the survival cost (getting eaten by tigers) outweighs the mating benefit. [C]

This explains human behavior too. Why do men buy Ferraris? It is a costly signal of resources, useless for transport but useful for status display. [D]
    `.trim(),
        questions: [
            {
                id: "batch16_topic20_sexual_selection_Q1",
                question: "According to the 'Handicap Principle', why do Peahens prefer Peacocks with massive, heavy tails?",
                options: [
                    "Because they are colorful.",
                    "Because the heavy tail is a 'costly signal' that proves the male is genetically superior enough to survive despite the handicap.",
                    "Because it scares away tigers.",
                    "Because they like feathers."
                ],
                correctAnswer: "B",
                explanation: "The passage explains: 'It is the *Handicap Principle*... Only a genetically superior male can afford the cost. It is an honest signal of quality.'"
            }
        ]
    }
];
