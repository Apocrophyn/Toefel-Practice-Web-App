
import { AcademicQuestion } from "./reading-2026";

export const batch18Passages: AcademicQuestion[] = [
    {
        id: "batch18_topic1_momentum",
        taskType: "academic",
        title: "Physics of Momentum: Conservation and Safety",
        passage: `
**Rhetorical Structure:** Principle/Application
**Dominant TOEFL Skill:** Factual Information

Momentum ($p$) is "mass in motion." The formula is $p = mv$ (mass $\times$ velocity).
It is a vector (has direction).
Newton's law of **Conservation of Momentum** says: In a closed system, total momentum never changes.

Imagine a car crash.
A 1000kg car moving at 20 m/s hits a stationary truck (2000kg).
Before crash: Total Momentum = $(1000 \times 20) + (2000 \times 0) = 20,000$.
After crash: The wreckage locks together. The mass is now 3000kg.
The velocity *must* change to keep momentum at 20,000.
$3000 \times V = 20,000$.
$V = 6.6$ m/s. The wreckage slides forward slowly. [A]

The danger is not momentum; it is the *Change in Momentum* (Impulse).
Impulse = Force $\times$ Time.
To stop a driver (change his momentum to zero), you must apply a force.
If you stop him instantly (hit windshield), Time is small (0.01s), so Force is Huge (Death).
If you stop him slowly (Airbag), Time is large (0.1s), so Force is Small (Survival). [B]

Airbags and Crumple Zones extend the *Time* of impact. By buying milliseconds, they reduce the G-force to survivable levels. [C] Physics dictates you cannot erase the energy, but you can spread it out. [D]
    `.trim(),
        questions: [
            {
                id: "batch18_topic1_momentum_Q1",
                question: "How do airbags reduce the risk of injury during a car crash according to the physics principle of Impulse?",
                options: [
                    "They are soft.",
                    "They increase the time it takes to stop the passenger, which decreases the force applied to their body.",
                    "They stop the car faster.",
                    "They reduce the mass of the car."
                ],
                correctAnswer: "B",
                explanation: "The passage explains: 'Airbags... extend the *Time* of impact... so Force is Small (Survival).'"
            }
        ]
    },
    {
        id: "batch18_topic2_ottoman_janissaries",
        taskType: "academic",
        title: "The Ottoman Janissaries: Slave Soldiers",
        passage: `
**Rhetorical Structure:** Rise and Fall/Institution
**Dominant TOEFL Skill:** Inference

The Ottoman Empire (1299-1922) was unique because its elite army and government were run by slaves. These were the *Janissaries* (New Soldiers).

System: *Devshirme* (Blood Tax).
Every few years, Ottoman agents went to Christian villages in the Balkans. They took the strongest boys (aged 8-14).
These boys were converted to Islam, circumcised, and trained in strict discipline. [A]
The smartest became Viziers (Ministers). The strongest became Janissaries.

They were "Slaves of the Sultan." They could not marry or own businesses. Their only loyalty was to the Sultan. This prevented the rise of rival noble families (who threatened European kings). [B]
Results: The Ottomans had the first professional standing army in Europe since Rome. They conquered Constantinople (1453).

Decline:
In the 1600s, standards slipped. Janissaries were allowed to marry. They started businesses (coffee shops). They enrolled their sons (nepotism).
They became a corrupt political mafia. [C] When Sultans tried to modernize the army, the Janissaries rioted and killed the Sultans.
They went from being the Sultan's sword to the Sultan's cage.
In 1826, Sultan Mahmud II finally crushed them (The Auspicious Incident), blasting their barracks with cannons to clear the way for reform. [D]
    `.trim(),
        questions: [
            {
                id: "batch18_topic2_ottoman_janissaries_Q1",
                question: "Why did the Janissary corps eventually become a threat to the Ottoman Sultans?",
                options: [
                    "They were too weak.",
                    "They gained too much power, engaged in corruption and business, and violently resisted any attempts to modernize the army.",
                    "They wanted to be Christians again.",
                    "They allied with Russia."
                ],
                correctAnswer: "B",
                explanation: "The text states: 'They became a corrupt political mafia... When Sultans tried to modernize... the Janissaries rioted and killed the Sultans.'"
            }
        ]
    },
    {
        id: "batch18_topic3_pigeons_magnetoreception",
        taskType: "academic",
        title: "Animal Navigation: Magnetoreception in Pigeons",
        passage: `
**Rhetorical Structure:** Mystery/Hypothesis
**Dominant TOEFL Skill:** Vocabulary in Context

Homing pigeons can find their way home from 1,000 miles away, even if transported in a dark box. How? They use a "Map and Compass" system. The compass is the Sun (by day) and Stars (by night). But what if it is cloudy? They use the Earth's magnetic field.

This sense is called *Magnetoreception*.
For years, scientists argued about the mechanism.

Theory 1: The Beak.
We found iron-rich crystals (Magnetite) in the nerve endings of the upper beak. [A]
We thought these acted like a compass needle, physically pulling the nerve to signal "North."
However, recent studies showed these might just be immune cells (macrophages) scavenging iron, not sensors.

Theory 2: The Eye (Quantum Physics).
A protein in the pigeon's eye called *Cryptochrome* is sensitive to blue light.
When light hits it, it creates a "Radical Pair" of entangled electrons. [B]
The spin of these electrons is affected by the magnetic field.
Essentially, the bird might *see* the magnetic field as a shading or color overlay on its vision. [C]

They also use smell (Olfactory Map) to recognize local landmarks near the loft.
It is a redundant system. If the magnets fail, they use the sun. If the sun fails, they use smell. [D]
    `.trim(),
        questions: [
            {
                id: "batch18_topic3_pigeons_magnetoreception_Q1",
                question: "According to the 'Quantum Physics' theory (Theory 2), how do pigeons sense the Earth's magnetic field?",
                options: [
                    "With their beak.",
                    "A protein in the eye called Cryptochrome likely allows them to 'see' the magnetic field as a visual pattern overlaid on their normal vision.",
                    "With their ears.",
                    "By smelling iron."
                ],
                correctAnswer: "B",
                explanation: "The passage suggests: 'A protein in the pigeon's eye called Cryptochrome... the bird might *see* the magnetic field as a shading or color overlay.'"
            }
        ]
    },
    {
        id: "batch18_topic4_beat_generation",
        taskType: "academic",
        title: "The Beat Generation: Jack Kerouac and Spontaneity",
        passage: `
**Rhetorical Structure:** Context/Style
**Dominant TOEFL Skill:** Rhetorical Purpose

In the 1950s—the era of the grey flannel suit, suburbs, and conformity—a group of writers rebelled. They were the *Beat Generation* (Beat down / Beatific). Jack Kerouac, Allen Ginsberg, and William Burroughs.

They sought "It"—intensity, ecstasy, and truth. Usually found through Jazz, drugs, Sex, and Buddhism.

Kerouac's *On the Road* (1957) is the Bible of the movement.
It tells of road trips across America with his wild friend Neal Cassady (Dean Moriarty).
Kerouac wrote it in three weeks on a single 120-foot scroll of paper so he wouldn't have to interrupt his flow to change pages. [A]

His style: "Spontaneous Bop Prosody."
He wanted to write like a Jazz musician plays saxophone—improvising, breathless, no editing.
"First thought, best thought." [B]

Critics hated it. Capote sneered, "That's not writing, that's typing."
But it electrified the youth. It birthed the Counter-Culture. The Beats became the Hippies of the 60s. [C]
They introduced Eastern spirituality (Zen) to the American mainstream.
They validated the idea that life is a search for meaning, not just a search for a mortgage. [D]
    `.trim(),
        questions: [
            {
                id: "batch18_topic4_beat_generation_Q1",
                question: "What was Jack Kerouac's primary goal with his 'Spontaneous Bop Prosody' writing style?",
                options: [
                    "To write perfectly grammatically.",
                    "To write with the improvisation and continuous flow of a Jazz musician, without pausing to edit or revise.",
                    "To use as many words as possible.",
                    "To copy Shakespeare."
                ],
                correctAnswer: "B",
                explanation: "The text explains: 'He wanted to write like a Jazz musician plays saxophone—improvising, breathless, no editing.'"
            }
        ]
    },
    {
        id: "batch18_topic5_ubi",
        taskType: "academic",
        title: "Economics: The Debate Over Universal Basic Income (UBI)",
        passage: `
**Rhetorical Structure:** Argument/Counter-Argument
**Dominant TOEFL Skill:** Prose Summary

As Artificial Intelligence (AI) and automation threaten to erase millions of jobs (truck drivers, cashiers), economists are revisiting a radical idea: *Universal Basic Income*.
Idea: The government gives every citizen a flat monthly check (e.g., \$1000), regardless of whether they work or are rich. No strings attached.

Arguments For:
1.  **Poverty Floor:** It eliminates extreme poverty instantly. No one starves.
2.  **Freedom:** If you aren't desperate for survival, you can take risks. You can start a business, go back to school, or care for elderly parents. [A]
3.  **Efficiency:** It replaces the nightmare bureaucracy of Welfare (food stamps, housing vouchers) with a simple cash transfer.

Arguments Against:
1.  **Cost:** It is astronomically expensive (trillions/year). It would require massive tax hikes.
2.  **Inflation:** If everyone has more money, prices might just go up (Rent increases by \$1000). [B]
3.  **Work Ethic:** Critics fear people will stop working and play video games.

Pilot studies (Finland, Stockton) show mixed results. People generally *don't* quit their jobs (except new mothers and students). Mental health improves. [C]
History: Even Milton Friedman (conservative) supported a version called "Negative Income Tax." It is an idea that crosses the left-right divide, proposing a capitalist solution to a post-work future. [D]
    `.trim(),
        questions: [
            {
                id: "batch18_topic5_ubi_Q1",
                question: "What is a major economic concern raised by critics of Universal Basic Income (UBI)?",
                options: [
                    "People will work too hard.",
                    "Inflation; if everyone receives extra money, landlords and businesses might simply raise prices, negating the benefit.",
                    "Governments will run out of paper.",
                    "Robots will get rich."
                ],
                correctAnswer: "B",
                explanation: "The text lists 'Inflation' as a key argument against: 'If everyone has more money, prices might just go up.'"
            }
        ]
    },
    {
        id: "batch18_topic6_caves",
        taskType: "academic",
        title: "Karst Topography: How Caves Form",
        passage: `
**Rhetorical Structure:** Process/Chemistry
**Dominant TOEFL Skill:** Sentence Insertion

Caves are not usually formed by physical erosion (like rivers); they are formed by chemical dissolution. This landscape is called *Karst*.

It happens in Limestone (Calcium Carbonate). [A]
Rainwater absorbs $CO_2$ from the air and soil, becoming weak Carbonic Acid.
This acid seeps into the cracks of the limestone bedrock.
It eats the rock ($CaCO_3 + Acid \rightarrow Dissolved Calcium$).
Over thousands of years, the cracks widen into tunnels and caverns.

Once the cave is hollow (and filled with air), the process reverses to create decorations (*Speleothems*).
Water drips from the ceiling.
As the drop hangs there, it loses $CO_2$ to the cave air (degassing).
This makes the water less acidic. It can no longer hold the calcium.
It deposits a tiny ring of Calcite. [B]

*   **Stalactites:** Hang tight from the Ceiling. (C = Ceiling).
*   **Stalagmites:** Grow might effectively from the Ground. (G = Ground). [C]
When they meet, they form a **Column**.

This process is slow—about 1 inch per century.
If you touch a formation, the oil from your finger prevents the water from sticking, stopping the growth forever. [D] Caves are living geological galleries.
    `.trim(),
        questions: [
            {
                id: "batch18_topic6_caves_Q1",
                question: "How are speleothems (like stalactites) formed in limestone caves?",
                options: [
                    "By wind erosion.",
                    "When water drips from the ceiling, it loses CO2 (degassing), becoming less acidic and depositing a tiny ring of calcite.",
                    "By lava.",
                    "By bats."
                ],
                correctAnswer: "B",
                explanation: "The text explains: 'As the drop hangs there, it loses CO_2... This makes the water less acidic... It deposits a tiny ring of Calcite.'"
            }
        ]
    },
    {
        id: "batch18_topic7_fermentation",
        taskType: "academic",
        title: "Biochemistry: Fermentation and Civilization",
        passage: `
**Rhetorical Structure:** Process/History
**Dominant TOEFL Skill:** Negative Factual Information

Humans settled down to farm 10,000 years ago. Was it for bread or beer? Some anthropologists argue for beer. *Fermentation* is the metabolic process that makes both possible. It is how yeast makes energy *without* Oxygen (Anaerobic).

Yeast is a fungus. It eats sugar (Glucose).
Reaction: $Sugar \\rightarrow Alcohol (Ethanol) + CO_2$.

In **Beer/Wine:**
We want the Alcohol. The $CO_2$ is either kept (fizzy beer) or vented (still wine). [A]
The alcohol kills bacteria, making beer safer to drink than water in the ancient world.

In **Bread:**
We want the $CO_2$. The gas bubbles get trapped in the gluten dough, making it rise (leaven).
The alcohol burns off during baking. [B]

Pasteur (1857) discovered yeast was alive. Before that, it was magic.
Bacteria perform a different fermentation: Lactic Acid.
$Sugar \\rightarrow Lactic Acid$.
This turns milk into Yogurt/Cheese and cabbage into Kimchi/Sauerkraut. [C]
The acid preserves the food by killing spoilage microbes.

Fermentation was humanity's first biotechnology. [D] It allowed us to store calories (grain/milk) for the winter without refrigerators, enabling civilization to survive lean times.
`.trim(),
        questions: [
            {
                id: "batch18_topic7_fermentation_Q1",
                question: "Why was fermentation crucial for the survival of early civilizations according to the passage?",
                options: [
                    "It tasted good.",
                    "It acted as the first biotechnology, allowing humans to preserve calories (grain/milk) for winter without refrigeration.",
                    "It made people sleep.",
                    "It was religious."
                ],
                correctAnswer: "B",
                explanation: "The conclusion states: 'It allowed us to store calories... for the winter without refrigerators, enabling civilization to survive lean times.'"
            }
        ]
    },
    {
        id: "batch18_topic8_contraceptive_pill",
        taskType: "academic",
        title: "The Pill: Gregory Pincus and the Sexual Revolution",
        passage: `
**Rhetorical Structure:** Innovation/Societal Impact
**Dominant TOEFL Skill:** Inference

In the 1950s, Margaret Sanger (activist) and Katharine McCormick (millionaire) funded a biologist named Gregory Pincus to create a "magic pill" to stop pregnancy. The result, Enovid (approved 1960), changed human history more than any war.

Mechanism:
The Pill contains synthetic hormones (Progesterone/Estrogen).
They trick the brain (Pituitary Gland) into thinking the woman is *already pregnant*. [A]
The brain stops sending the signal to release an egg (Ovulation).
No egg = No baby.

It was the first medicine taken by *healthy* people for a social purpose.
Social Impact:
1.  **Education/Career:** Women could delay marriage. They flooded into universities and the workforce (law, medicine). [B] The "Gender Pay Gap" began to close (slowly).
2.  **The Sexual Revolution:** It decoupled Sex from Reproduction. Pre-marital sex became less risky.
3.  **Family Size:** Birth rates plummeted. Families invested more resources in fewer children.

It faced resistance. The Catholic Church (Humanae Vitae, 1968) forbade it.
Some states banned it for unmarried women until 1972. [C]

Medical side effects (blood clots) were discovered later, leading to lower-dose versions. [D] But "The Pill" remains the only drug simply known by a capital letter, a testament to its singular power.
    `.trim(),
        questions: [
            {
                id: "batch18_topic8_contraceptive_pill_Q1",
                question: "How does the contraceptive pill prevent pregnancy?",
                options: [
                    "It kills viruses.",
                    "It uses synthetic hormones to trick the brain into thinking the body is already pregnant, thus stopping the release of an egg (ovulation).",
                    "It changes DNA.",
                    "It removes the uterus."
                ],
                correctAnswer: "B",
                explanation: "The mechanism is described: 'They trick the brain... into thinking the woman is *already pregnant*. The brain stops sending the signal to release an egg.'"
            }
        ]
    },
    {
        id: "batch18_topic9_maslow",
        taskType: "academic",
        title: "Maslow’s Hierarchy of Needs",
        passage: `
**Rhetorical Structure:** Theory/Structure
**Dominant TOEFL Skill:** Classification

In 1943, Abraham Maslow proposed a theory of human motivation. He didn't focus on sick people (like Freud); he focused on high-achievers. He pictured needs as a **Pyramid**. You must satisfy the bottom layers before you can worry about the top.

Level 1 (Base): **Physiological.** Food, water, sleep. If you are starving, you don't care about art. [A]
Level 2: **Safety.** Shelter, security, law.
Level 3: **Love/Belonging.** Friends, family, intimacy.
Level 4: **Esteem.** Respect, status, accomplishment.
Level 5 (Top): **Self-Actualization.** Achieving your full potential. Creativity, morality. "What a man can be, he must be." [B]

The Insight:
If a person is acting crazy or aggressive, look at their unmet needs. A hungry child cannot learn algebra (Level 5 task).
Corporations use this. A paycheck covers Level 1/2. But to keep talent, they must offer community (Level 3) and recognition (Level 4). [C]

Critiques:
It is Western-centric. In some cultures (Collectivist), belonging (Level 3) comes *before* individual safety or esteem.
The "Starving Artist" violates the rules: they sacrifice food (Level 1) for Art (Level 5). [D] Maslow acknowledged this, noting the hierarchy isn't rigid, but general.
    `.trim(),
        questions: [
            {
                id: "batch18_topic9_maslow_Q1",
                question: "What is a major critique of Maslow's Hierarchy of Needs regarding the 'Starving Artist'?",
                options: [
                    "Artists are rich.",
                    "They violate the hierarchy by prioritizing Self-Actualization (Level 5) over basic Physiological needs like food (Level 1).",
                    "Art is not a need.",
                    "Maslow hated art."
                ],
                correctAnswer: "B",
                explanation: "The text notes: 'The \"Starving Artist\" violates the rules: they sacrifice food (Level 1) for Art (Level 5).'"
            }
        ]
    },
    {
        id: "batch18_topic10_sun_life_cycle",
        taskType: "academic",
        title: "Stellar Evolution: The Future of the Sun",
        passage: `
**Rhetorical Structure:** Chronology/Future
**Dominant TOEFL Skill:** Factual Information

The Sun is a middle-aged star (4.5 billion years old). It is a "Main Sequence" star, burning Hydrogen into Helium. It has enough fuel for another 5 billion years. Then things get interesting.

Phase 1: **Red Giant.**
When the Hydrogen runs out, the core collapses under gravity. This heats up a shell of hydrogen outside the core.
The outer layers of the Sun will expand massively. [A]
It will grow to swallow Mercury, Venus, and possibly Earth. The horizon will be a wall of fire.

Phase 2: **Helium Flash.**
The core gets hot enough to fuse Helium into Carbon. It stabilizes briefly.

Phase 3: **Planetary Nebula.**
The Sun is not big enough to explode (Supernova). It will gently shed its outer layers into space, creating a beautiful glowing cloud. [B]

Phase 4: **White Dwarf.**
The only thing left is the core. A ball of carbon the size of Earth but with the mass of the Sun.
It is incredibly dense (one teaspoon = 5 tons). [C]
It has no fuel. It just glows from leftover heat.

Phase 5: **Black Dwarf.**
Over trillions of years, the White Dwarf cools down and goes dark. A cold diamond floating in the void. [D] Since the universe is not old enough yet (13.8 billion years), no Black Dwarfs exist today.
    `.trim(),
        questions: [
            {
                id: "batch18_topic10_sun_life_cycle_Q1",
                question: "Why do 'Black Dwarfs' not yet exist in the universe?",
                options: [
                    "They are invisible.",
                    "Because the universe is only 13.8 billion years old, which is not enough time for a White Dwarf to cool down completely.",
                    "They exploded.",
                    "Black holes ate them."
                ],
                correctAnswer: "B",
                explanation: "The passage states: 'Since the universe is not old enough yet (13.8 billion years), no Black Dwarfs exist today.'"
            }
        ]
    },
    {
        id: "batch18_topic11_rites_of_passage",
        taskType: "academic",
        title: "Anthropology: Arnold van Gennep and Rites of Passage",
        passage: `
**Rhetorical Structure:** Theory/Process
**Dominant TOEFL Skill:** Vocabulary in Context

In 1909, ethnographer Arnold van Gennep noticed a pattern in how societies handle life changes (birth, puberty, marriage, death). He called these rituals *Rites of Passage*.

They all follow a 3-stage structure:
1.  **Separation:** The person is removed from their old identity/group.
    Example: A recruit gets his head shaved and leaves home for Bootcamp. He is no longer a civilian. [A]
2.  **Liminality (The Threshold):** The middle stage.
    They are "betwixt and between." They have no status.
    Often involves pain, hazing, or trials. (e.g., The vision quest, fraternity initiation).
    This creates *Communitas*—an intense bond with fellow initiates. They are all equal in the mud. [B]
3.  **Incorporation (Re-aggregation):** The person re-enters society with a *new* identity.
    Example: The graduation ceremony. You move the tassel. You are now a "Graduate." [C]

Societies need these rituals to map the social clock. If we skip them, people feel lost. (The "Peter Pan Syndrome" of endless adolescence might be due to a lack of clear rituals marking adulthood). [D] Van Gennep showed that transitions are dangerous, and rituals build the bridge to get us safely to the other side.
    `.trim(),
        questions: [
            {
                id: "batch18_topic11_rites_of_passage_Q1",
                question: "What is the function of the 'Liminality' (Threshold) stage in a Rite of Passage?",
                options: [
                    "To cut hair.",
                    "It is the transitional phase where the initiate has no status, often undergoing trials, which fosters a deep bond of equality (Communitas) with fellow initiates.",
                    "To give gifts.",
                    "To eat food."
                ],
                correctAnswer: "B",
                explanation: "The passage describes it: 'They are \"betwixt and between.\"... This creates *Communitas*—an intense bond with fellow initiates.'"
            }
        ]
    },
    {
        id: "batch18_topic12_deconstructivism_gehry",
        taskType: "academic",
        title: "Deconstructivism: Frank Gehry and the Guggenheim Bilbao",
        passage: `
**Rhetorical Structure:** Style/Impact
**Dominant TOEFL Skill:** Prose Summary

In the 1980s, architecture went crazy. *Deconstructivism* emerged. It rejected the perfect boxes of Modernism (Bauhaus). It wanted to take the building apart and put it back together wrong.

Frank Gehry is the master.
His style looks like an explosion frozen in time.
He uses titanium, steel, and chain-link fencing.

The **Guggenheim Museum Bilbao** (Spain, 1997) changed the world.
Bilbao was a dying industrial rust-belt city. They hired Gehry to build an art museum.
He built a shimmering, curvy, metallic flower. [A]
It has no straight lines.
To build it, he had to use CATIA—software designed for fighter jets—because traditional blueprints couldn't describe the shapes. [B]

The "Bilbao Effect":
The building was so famous that millions of tourists flocked to see it. It single-handedly revived the city's economy.
Suddenly, every city wanted a "Starchitet" to build a weird icon to put them on the map. [C]

Critics say Deconstructivism is just sculpture, not architecture. It ignores function (curved walls are hard to hang art on). But Gehry argued that in a chaotic world, boxes are a lie; chaos is the truth. [D]
    `.trim(),
        questions: [
            {
                id: "batch18_topic12_deconstructivism_gehry_Q1",
                question: "Why was the Guggenheim Museum Bilbao economically significant?",
                options: [
                    "It was cheap to build.",
                    "It created the 'Bilbao Effect,' where a single iconic building by a 'Starchitet' revitalized a dying industrial city's economy through tourism.",
                    "It was made of gold.",
                    "It was a factory."
                ],
                correctAnswer: "B",
                explanation: "The text explains the 'Bilbao Effect': 'The building was so famous that millions of tourists flocked to see it. It single-handedly revived the city's economy.'"
            }
        ]
    },
    {
        id: "batch18_topic13_mongols_genghis",
        taskType: "academic",
        title: "The Mongol Empire: Brutality and Pax Mongolica",
        passage: `
**Rhetorical Structure:** Perspective/Contrast
**Dominant TOEFL Skill:** Negative Factual Information

Genghis Khan (Temujin) united the Mongol tribes in 1206. In 25 years, he conquered more land than Rome did in 400 years. The Mongol Empire became the largest contiguous land empire in history.

Their Success:
1.  **Horses:** A Mongol warrior had 3-4 horses. He could travel 100 miles a day. (Armies usually move 10).
2.  **Archery:** The composite bow could kill at 300 yards. They could shoot while riding backward (Parthian Shot). [A]
3.  **Terror:** If a city surrendered, they were spared. If they resisted, everyone was killed. This reputation meant the next ten cities surrendered without a fight.

The Paradox: **Pax Mongolica** (Mongol Peace).
Once they conquered the Silk Road, they made it safe.
A maiden with a pot of gold could walk from the Black Sea to China unharmed. [B]
Trade flourished. Ideas traveled.
Gunpowder, paper, and the compass moved from China to Europe.
They were religiously tolerant (Genghis prayed with Christians, Muslims, and Buddhists). [C]

However, the trade routes also carried the Black Death (Plague). [D] The bacteria Yersinia pestis hitched a ride on Mongol supply trains, eventually killing half of Europe. The Mongols connected the world, for better and for worse.
    `.trim(),
        questions: [
            {
                id: "batch18_topic13_mongols_genghis_Q1",
                question: "What was the 'Pax Mongolica' and how did it affect trade?",
                options: [
                    "A war against trade.",
                    "It was a period of stability enforced by the Mongols that made the Silk Road safe, allowing trade, ideas, and technologies to flow freely between East and West.",
                    "A tax on silk.",
                    "A religious law."
                ],
                correctAnswer: "B",
                explanation: "The passage notes: 'Once they conquered the Silk Road, they made it safe... Trade flourished. Ideas traveled.'"
            }
        ]
    },
    {
        id: "batch18_topic14_surface_tension",
        taskType: "academic",
        title: "Surface Tension: How Water Striders Walk on Water",
        passage: `
**Rhetorical Structure:** Phenomenon/Explanation
**Dominant TOEFL Skill:** Factual Information

You fill a glass of water to the rim, and then add a few more drops. The water bulges up over the rim, forming a dome, but doesn't spill. This skin is *Surface Tension*.

Water molecules love each other (Cohesion, H-bonds).
Inside the glass, a water molecule is pulled in all directions by neighbors. Forces cancel out.
But at the *surface*, there are no neighbors above. [A]
The molecule is pulled only *down* and *sideways*.
This creates a net inward force that tightens the surface like a stretched rubber sheet.

Insects like the **Water Strider** exploit this.
They don't float (buoyancy); they stand.
Their legs are covered in microscopic hairs that trap air bubbles (Hydrophobic).
They distribute their weight so they don't break the "rubber sheet." [B]
You can see dimples where their feet push the water down.

Soap breaks this (Surfactant).
If you add a drop of soap to the pond, it disrupts the H-bonds.
The "skin" snaps. [C]
The Water Strider sinks instantly and drowns.

This is also why rain forms drops (spheres). The surface tension pulls the water into the shape with the smallest surface area: a sphere. [D]
    `.trim(),
        questions: [
            {
                id: "batch18_topic14_surface_tension_Q1",
                question: "Why can Water Striders walk on water?",
                options: [
                    "They are lighter than air.",
                    "Their legs are hydrophobic and they distribute their weight to avoid breaking the surface tension skin, which acts like a stretched rubber sheet.",
                    "They swim very fast.",
                    "They have boots."
                ],
                correctAnswer: "B",
                explanation: "The text states: 'Their legs are covered in microscopic hairs that trap air bubbles (Hydrophobic). They distribute their weight so they don't break the \"rubber sheet.\"' "
            }
        ]
    },
    {
        id: "batch18_topic15_telomeres",
        taskType: "academic",
        title: "Telomeres: The Hayflick Limit and Aging",
        passage: `
**Rhetorical Structure:** Problem-Solution (Biological)
**Dominant TOEFL Skill:** Sentence Insertion

Why do we age? Why can't cells divide forever?
In 1961, Leonard Hayflick discovered that normal human cells can only divide about 50 times (The Hayflick Limit). Then they go senescent (zombie mode) and die.

The clock is the *Telomere*.
Telomeres are the plastic tips at the end of shoelaces (Chromosomes). [A] They protect the DNA from fraying.
Every time a cell divides and copies its DNA, the copy machine misses a tiny bit at the end.
The Telomere gets shorter.
Snippet by snippet, the protective cap wears down.
When it's gone, the cell starts eating into valuable genes. The cell shuts down to prevent cancer. [B]

This is Aging.

But Cancer cells are immortal. How?
They activate an enzyme called *Telomerase*.
Telomerase rebuilds the tips. [C] It resets the clock.
Embryonic stem cells also have Telomerase (because babies need to grow).
Most adult cells turn it *off* to prevent cancer.

The dilemma:
If we find a drug to turn Telomerase ON, we might cure aging. (Immortality).
But we might also give everyone super-cancer. [D] Evolution chose death over cancer.
    `.trim(),
        questions: [
            {
                id: "batch18_topic15_telomeres_Q1",
                question: "What is the 'Hayflick Limit' in relation to cell division?",
                options: [
                    "The speed of light.",
                    "The observation that normal human cells can only divide about 50 times before their Telomeres wear down and they stop dividing to prevent cancer.",
                    "The number of cells in the body.",
                    "The size of a cell."
                ],
                correctAnswer: "B",
                explanation: "The passage defines it: 'Leonard Hayflick discovered that normal human cells can only divide about 50 times (The Hayflick Limit).'"
            }
        ]
    },
    {
        id: "batch18_topic16_hudson_river_school",
        taskType: "academic",
        title: "The Hudson River School: Painting the American Sublime",
        passage: `
**Rhetorical Structure:** Style/Symbolism
**Dominant TOEFL Skill:** Rhetorical Purpose

In the mid-19th century, America was looking for an identity. Europe had cathedrals; America had Wilderness. The *Hudson River School* (Thomas Cole, Frederic Church) was an art movement that celebrated nature as the face of God.

They painted landscapes: The Catskills, Niagara Falls, the Yosemite Valley.
The paintings were massive. You felt small standing in front of them.
This feeling is the **Sublime**—a mix of awe and terror. [A]

Themes:
1.  **Light:** "Luminism." A golden, divine glow.
2.  **Man is Small:** Tiny figures are often shown in the corner, overwhelmed by giant trees or mountains. [B]
3.  **The Course of Empire:** Thomas Cole warned that civilization destroys nature. He painted a series showing a city rising from the wild, becoming an empire, and then falling into ruin.

It was propaganda for Manifest Destiny.
By showing the West as a glorious Eden, they encouraged expansion.
But they were also proto-conservationists. [C] They documented the wilderness before the railroads and sawmills destroyed it. Their art helped convince Lincoln to create the first protected parkland (Yosemite Grant, 1864). [D]
    `.trim(),
        questions: [
            {
                id: "batch18_topic16_hudson_river_school_Q1",
                question: "How did the Hudson River School artists contribute to the conservation movement in the United States?",
                options: [
                    "They chopped down trees.",
                    "Their paintings documented the wilderness before industrial destruction and helped convince President Lincoln to create the first protected parkland (Yosemite Grant).",
                    "They built railroads.",
                    "They were politicians."
                ],
                correctAnswer: "B",
                explanation: "The passage notes: 'But they were also proto-conservationists... Their art helped convince Lincoln to create the first protected parkland.'"
            }
        ]
    },
    {
        id: "batch18_topic17_gold_rush",
        taskType: "academic",
        title: "The California Gold Rush: The 49ers",
        passage: `
**Rhetorical Structure:** Event/Demographics
**Dominant TOEFL Skill:** Negative Factual Information

In Jan 1848, James Marshall found gold at Sutter's Mill in California.
News spread. "Gold! Gold from the American River!"
In 1849, 90,000 people flooded into California. The *49ers*.
They came from the East Coast (by boat around Cape Horn) and from China, Australia, and Mexico.

Impact:
1.  **Population:** San Francisco went from a village of 200 people to a city of 36,000 in two years. [A]
2.  **Diversity:** California became the most diverse place on earth.
3.  **Genocide:** The Native American population was hunted down and enslaved to clear the land.

Economics:
Few miners got rich. It was a lottery.
The people who got rich were the merchants "mining the miners."
Levi Strauss sold denim pants (Levi's) that wouldn't rip. [B]
Sam Brannan bought all the shovels in the city for \$1 and sold them for \$15.

Law and Order:
There was no government. It was the Wild West.
Vigilante gangs ruled San Francisco.
Racism led to the Chinese Exclusion Act later on. [C]

California became a state in 1850. The Gold Rush fast-forwarded American history, skipping the "territory" phase. It shifted the center of gravity to the Pacific. [D] It cemented the American Dream: the idea that you can go West and reinvent yourself overnight with a lucky strike.
    `.trim(),
        questions: [
            {
                id: "batch18_topic17_gold_rush_Q1",
                question: "According to the passage, what was a significant demographic impact of the California Gold Rush?",
                options: [
                    "Everyone left California.",
                    "San Francisco's population exploded from 200 to 36,000 in two years, making California the most diverse place on earth.",
                    "Only men moved there.",
                    "It became a desert."
                ],
                correctAnswer: "B",
                explanation: "The text states: 'San Francisco went from a village of 200 people to a city of 36,000... California became the most diverse place on earth.'"
            }
        ]
    },
    {
        id: "batch18_topic18_glass_ceiling",
        taskType: "academic",
        title: "Sociology: The Glass Ceiling",
        passage: `
**Rhetorical Structure:** Metaphor/Evidence
**Dominant TOEFL Skill:** Vocabulary in Context

The *Glass Ceiling* is a metaphor used to represent an invisible barrier that prevents a given demographic (typically women) from rising beyond a certain level in a hierarchy.
You can *see* the top (CEO office), but you hit your head when you try to get there.

It is distinct from the "Sticky Floor" (keeping women in low-wage jobs) or the "Glass Cliff" (promoting women to leadership only when the company is failing and likely to crash). [A]

Causes:
1.  **Implicit Bias:** We unconsciously associate "Leader" with "Male/Tall/Deep Voice."
2.  **The Old Boys' Club:** Networking happens on the golf course or at late-night drinks. If women are excluded (or go home to kids), they lose connections. [B]
3.  **The Motherhood Penalty:** Women take maternity leave. Men don't. Women are seen as "distracted." Fathers are often actually given a "Fatherhood Bonus" (paid more because they are "providers").

The "Queen Bee Syndrome."
Sometimes, a woman who breaks the ceiling *doesn't* help other women up. She pulls the ladder up. [C] She feels she had to survive a tough male world, so the young women should too.

Progress is slow. In the Fortune 500, women CEOs are still rare (<10%). [D] The ceiling is cracking, but the shards are sharp.
    `.trim(),
        questions: [
            {
                id: "batch18_topic18_glass_ceiling_Q1",
                question: "What is the 'Queen Bee Syndrome' described in the text?",
                options: [
                    "Women who like bees.",
                    "A phenomenon where a woman who breaks through the glass ceiling prevents other women from advancing, 'pulling the ladder up' behind her.",
                    "Top female CEOs.",
                    "A disease."
                ],
                correctAnswer: "B",
                explanation: "The passage explains: 'Sometimes, a woman who breaks the ceiling *doesn't* help other women up. She pulls the ladder up.'"
            }
        ]
    },
    {
        id: "batch18_topic19_towers_buttressed_core",
        taskType: "academic",
        title: "Engineering Skyscrapers: The Buttressed Core",
        passage: `
**Rhetorical Structure:** Problem-Solution/Design
**Dominant TOEFL Skill:** Factual Information

For 100 years, skyscrapers used a steel frame (like the Empire State Building).
Limit: ~400 meters. Go higher, and the wind makes it sway too much. You get spacesick.
To build the *Burj Khalifa* (828 meters), engineer Bill Baker invented a new system: The *Buttressed Core*.

Imagine a "Y" shape.
Center: A hexagonal concrete core (Spine).
Wings: Three wings stick out from the center. [A]

The wings prop each other up.
If the wind hits Wing A, Wing B and C act as tripods to stop it falling.
It acts like a rocket fin.

Vortex Shedding:
The wind is the enemy. It creates vortices (whirlwinds) that shake the building (Resonance).
The Burj Khalifa changes shape as it goes up. It steps back in a spiral. [B]
The wind is "confused." It never organizes into a coherent vortex. The forces cancel out.

Result:
It is rigid.
It uses surprisingly little material. [C]
It enables the "Supertall" era. The Kingdom Tower (Jeddah) plans to use this aiming for 1000m. The limit now is not structure, but elevators (how fast can you go before ears pop?). [D]
    `.trim(),
        questions: [
            {
                id: "batch18_topic19_towers_buttressed_core_Q1",
                question: "How does the 'Buttressed Core' design of the Burj Khalifa handle wind forces?",
                options: [
                    "It is solid concrete.",
                    "It uses a central hexagonal core supported by three wings that act as tripods, and its spiraling shape confuses the wind to prevent vortex shedding.",
                    "It is flexible like bamboo.",
                    "It uses fans."
                ],
                correctAnswer: "B",
                explanation: "The text describes: 'Wings: Three wings stick out... act as tripods... The Burj Khalifa changes shape... The wind is \"confused.\"' "
            }
        ]
    },
    {
        id: "batch18_topic20_foxp2_language",
        taskType: "academic",
        title: "Evolution of Language: The FOXP2 Gene",
        passage: `
**Rhetorical Structure:** Discovery/Significance
**Dominant TOEFL Skill:** Inference

Language is the superpower of Homo sapiens. No other animal has grammar. When did it evolve? The discovery of the *FOXP2* gene gave us a clue.

In the 1990s, scientists studied the "KE Family" in London. Half the family had a severe speech disorder. They couldn't move their mouths to form words (Dyspraxia) and struggled with grammar.
Genetic analysis found a mutation in one specific gene: FOXP2 on Chromosome 7. [A]

This was the "Language Gene" (oversimplified, but important).
It builds the neural circuits in the brain that control fine motor movements of the mouth and sequence processing (grammar).

We checked other animals.
Chimps have FOXP2, but it is slightly different (2 amino acids different).
Mice have it too (for squeaking).
It seems FOXP2 is an ancient gene for "vocalization."

About 200,000 years ago (when humans appeared), our version mutated to the "Super-Speech" version. [B]
Neanderthals? We checked their DNA. They had the *human* version. [C]
This implies Neanderthals could speak. They weren't grunting brutes.

This gene is a "Transcription Factor"—it controls dozens of other genes. [D] It unlocked the hardware for speech, allowing culture to explode.
    `.trim(),
        questions: [
            {
                id: "batch18_topic20_foxp2_language_Q1",
                question: "What does the presence of the human version of the FOXP2 gene in Neanderthal DNA imply?",
                options: [
                    "They were silent.",
                    "It implies that Neanderthals likely had the capacity for complex speech and language, contradicting the view of them as silent brutes.",
                    "They were related to mice.",
                    "They could fly."
                ],
                correctAnswer: "B",
                explanation: "The passage states: 'Neanderthals... had the *human* version. This implies Neanderthals could speak.'"
            }
        ]
    }
];
