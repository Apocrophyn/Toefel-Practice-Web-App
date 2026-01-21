
import { AcademicQuestion } from "./reading-2026";

export const batch14Passages: AcademicQuestion[] = [
    {
        id: "batch14_topic1_coriolis",
        taskType: "academic",
        title: "Meteorology: The Coriolis Effect",
        passage: `
**Rhetorical Structure:** Mechanism/Effect
**Dominant TOEFL Skill:** Factual Information

If you throw a ball from the North Pole to the Equator, it will not travel in a straight line relative to the ground. It will curve to the right (West). This is the *Coriolis Effect*. It is caused by the rotation of the Earth.

The Earth spins faster at the Equator (1000 mph) than near the poles (slow). [A]
When air moves from the North (slow) towards the Equator (fast), the ground beneath it speeds up. The air "lags behind" the spinning ground. To an observer on the ground, the wind seems to curve.

This curvature dictates global weather patterns.
In the Northern Hemisphere, it causes air to curve right.
In the Southern Hemisphere, it causes air to curve left.

This spins hurricanes. [B]
Low pressure sucks air in. As the air rushes in, Coriolis spins it.
Northern hurricanes spin Counter-Clockwise.
Southern Cyclones spin Clockwise.
Interestingly, at the exact Equator, there is no Coriolis effect. [C] That is why hurricanes never cross the equator. It acts as a force field.

It also affects snipers targeting over long distances (>1000 yards). [D] The bullet is in the air long enough for the Earth to rotate underneath it. The shooter must aim slightly left or right to compensate for the planet moving the target.
    `.trim(),
        questions: [
            {
                id: "batch14_topic1_coriolis_Q1",
                question: "According to the passage, why do hurricanes never cross the Equator?",
                options: [
                    "It is too hot there.",
                    "The ocean is too shallow.",
                    "At the exact Equator, there is no Coriolis effect to spin the storm, acting as a force field.",
                    "Hurricanes are afraid of the line."
                ],
                correctAnswer: "C",
                explanation: "The text states: 'Interestingly, at the exact Equator, there is no Coriolis effect. That is why hurricanes never cross the equator.'"
            }
        ]
    },
    {
        id: "batch14_topic2_berlin_airlift",
        taskType: "academic",
        title: "The Berlin Airlift: Operation Vittles",
        passage: `
**Rhetorical Structure:** Problem-Solution/Hypothesis
**Dominant TOEFL Skill:** Negative Factual Information

In 1948, the Soviet Union imposed a blockade on West Berlin. The city was an island of democracy deep inside Soviet East Germany. Stalin cut off all roads, rails, and canals. He wanted to starve the city into submission. The 2 million citizens had food for only 36 days.

The US and UK faced a dilemma.
*   Option A: Attack the blockade (Risk WWIII).
*   Option B: Surrender Berlin. (Loss of credibility).
*   Option C: Fly over it. [A]

General Lucius Clay proposed an "Air Bridge." Critics said it was impossible. To feed 2 million people required 4,000 tons of supplies *per day*. Coal, flour, milk.

They built a rhythm. Planes landed every 3 minutes, 24 hours a day, at Tempelhof Airport. [B] Pilots flew on instruments in bad weather. German civilians helped unload planes in record time.
At the peak (The Easter Parade), they delivered 12,941 tons in one day—more than the trains used to carry.

It wasn't just food. "The Candy Bomber" (Gail Halvorsen) dropped chocolate on tiny parachutes for the kids. This was a PR coup. [C] It turned the Germans (former enemies) into friends and victims, and the Soviets into cruel jailers.

Stalin realized the blockade had failed. [D] It was making NATO stronger. He lifted it in May 1949. The Airlift proved that logistics could be a weapon of war, winning a battle without firing a shot.
    `.trim(),
        questions: [
            {
                id: "batch14_topic2_berlin_airlift_Q1",
                question: "What was the strategic impact of the 'Candy Bomber' during the Berlin Airlift?",
                options: [
                    "He made children fat.",
                    "It was a PR coup that won the hearts of the German people, turning former enemies into friends.",
                    "The candy poisoned the Soviets.",
                    "He dropped bombs instead."
                ],
                correctAnswer: "B",
                explanation: "The passage notes: 'This was a PR coup. It turned the Germans (former enemies) into friends... and the Soviets into cruel jailers.'"
            }
        ]
    },
    {
        id: "batch14_topic3_extremophiles",
        taskType: "academic",
        title: "Extremophiles: Life on the Edge",
        passage: `
**Rhetorical Structure:** Definition/Classification
**Dominant TOEFL Skill:** Vocabulary in Context

We used to think life required sunlight, mild temperatures, and fresh water. We were wrong. We have found *Extremophiles*—organisms that thrive in conditions that would kill a human instantly. This suggests life might exist on harsh planets like Mars or Europa.

1.  **Thermophiles:** Heat lovers. Found in Yellowstone's boiling geysers and deep-sea Hydrothermal Vents (120°C). [A] Their proteins don't cook (denature) because they have extra sulfur bonds (disulfide bridges) acting like staples.
2.  **Halophiles:** Salt lovers. Found in the Dead Sea. They pump potassium into their cells to balance the osmotic pressure so they don't shrivel up.
3.  **Acidophiles:** Acid lovers. Found in mine drainage (pH 0). They pump protons *out* of their bodies constantly.

The champion is the **Tardigrade** (Water Bear). It is a "Poly-extremophile." [B]
It can survive boiling, freezing, varying radiation, and the vacuum of space.
Its trick is *Cryptobiosis*. It dries itself out into a lifeless "Tun." It replaces the water in its cells with a sugar glass.
In this state, it is indistinguishable from death. [C]
Add water 10 years later, and it reanimates.

The discovery of extremophiles birthed the field of Astrobiology. [D] If life can survive in boiling acid on Earth, why not in the subsurface oceans of Enceladus?
    `.trim(),
        questions: [
            {
                id: "batch14_topic3_extremophiles_Q1",
                question: "How does the Tardigrade (Water Bear) survive extreme environments like space?",
                options: [
                    "It wears a tiny spacesuit.",
                    "It uses 'Cryptobiosis' to dry out, replacing its cellular water with a sugar glass.",
                    "It freezes itself.",
                    "It eats sulfur."
                ],
                correctAnswer: "B",
                explanation: "The text explains: 'Its trick is *Cryptobiosis*. It dries itself out... It replaces the water in its cells with a sugar glass.'"
            }
        ]
    },
    {
        id: "batch14_topic4_postcolonial_achebe",
        taskType: "academic",
        title: "Chinua Achebe and Post-Colonial Literature",
        passage: `
**Rhetorical Structure:** Contrast/Purpose
**Dominant TOEFL Skill:** Rhetorical Purpose

Before 1958, most novels about Africa were written by Europeans (e.g., Joseph Conrad's *Heart of Darkness*). They depicted Africans as savages or scenery, lacking language and soul. Chinua Achebe, a Nigerian, wrote *Things Fall Apart* to "write back" to the Empire.

The novel tells the story of Okonkwo, a proud Igbo warrior, and the destruction of his village by British missionaries and colonialists.

Achebe’s revolution was stylistic. [A] He wrote in English, but "Africanized" it. He infused the text with Igbo proverbs ("Proverbs are the palm-oil with which words are eaten"). He showed that the Igbo culture was complex, having its own justice system, religion, and philosophy long before the white man arrived.

It was not a paradise. He shows the harshness (twins were killed). [B] But it was a functioning society.

The title (from Yeats) implies chaos. When the British arrive, they don't bring order; they bring disorder. They split the clan. [C]
The tragedy is that Okonkwo cannot adapt. He is a rigid traditionalist. When he kills a messenger and his people don't rise up, he realizes his world is dead. He hangs himself.

Achebe forced the West to see Africans as humans with history. [D] He is the father of African Literature, proving that until the lions have their own historians, the history of the hunt will always glorify the hunter.
    `.trim(),
        questions: [
            {
                id: "batch14_topic4_postcolonial_achebe_Q1",
                question: "In 'Things Fall Apart', how did Chinua Achebe use language to challenge colonial narratives?",
                options: [
                    "He wrote in French.",
                    "He wrote in English but 'Africanized' it using Igbo proverbs to show the complexity of his culture.",
                    "He used only simple words.",
                    "He didn't use dialogue."
                ],
                correctAnswer: "B",
                explanation: "The text states: 'Achebe’s revolution was stylistic. He wrote in English, but \"Africanized\" it. He infused the text with Igbo proverbs.'"
            }
        ]
    },
    {
        id: "batch14_topic5_dutch_disease",
        taskType: "academic",
        title: "Economics: The Resource Curse (Dutch Disease)",
        passage: `
**Rhetorical Structure:** Cause-Effect/Paradox
**Dominant TOEFL Skill:** Prose Summary

Finding gold or oil should make a country rich. Often, it creates poverty. This paradox is called the *Resource Curse*, or "Dutch Disease" (named after the Netherland's economic crisis in the 1960s after finding natural gas).

How does it work?
1.  **Currency Appreciation:** You discover oil. You sell it to the world. Foreign currency floods in. This makes your local currency stronger. [A]
2.  **Export Death:** A strong currency makes your *other* exports (cars, clothes, agriculture) expensive for foreigners to buy.
    *   If a Dutch tulip costs 1 Euro ($1), and the Euro rises to $2, now the tulip costs $2. Americans stop buying Dutch tulips.
    *   The manufacturing and farming sectors collapse. You become a "One-Trick Pony" economy. [B]

3.  **Corruption:** The government doesn't need to tax the people (because it has oil money). If you don't tax people, you don't listen to them. Democracy weakens. Dictatorships thrive on oil (petrostates). [C]

4.  **Volatility:** When the oil price crashes (as it always does), the economy has no other legs to stand on. Collapse follows.

To avoid this, countries like Norway built a "Sovereign Wealth Fund." [D] They took the oil money and invested it abroad, keeping it out of the local economy to prevent inflation, saving it for the future. They cured the disease by hiding the medicine.
    `.trim(),
        questions: [
            {
                id: "batch14_topic5_dutch_disease_Q1",
                question: "What is the primary mechanism by which 'Dutch Disease' harms a country's economy?",
                options: [
                    "The flowers die.",
                    "A resource boom causes the currency to appreciate (get stronger), making other exports too expensive and killing the manufacturing sector.",
                    "People stop working.",
                    "The government taxes too much."
                ],
                correctAnswer: "B",
                explanation: "The passage explains: 'A strong currency makes your *other* exports... expensive... The manufacturing and farming sectors collapse.'"
            }
        ]
    },
    {
        id: "batch14_topic6_ring_of_fire",
        taskType: "academic",
        title: "Geology: The Pacific Ring of Fire",
        passage: `
**Rhetorical Structure:** Description/Cause
**Dominant TOEFL Skill:** Factual Information

The "Ring of Fire" is a horseshoe-shaped belt around the Pacific Ocean where 90% of the world's earthquakes and 75% of its volcanoes occur. It includes the Andes, the Cascades, Alaska, Japan, Philippines, and New Zealand.

The cause is *Plate Tectonics*, specifically **Subduction**.
The floor of the Pacific Ocean (Pacific Plate) is expanding at the center. [A] This pushes the edges of the plate outward.
The Pacific Plate is crashing into the continents around it (North American, Eurasian plates).

Because the oceanic rock is dense (basalt) and the continental rock is light (granite), the ocean plate slides *under* the continent. This is subduction. [B]

As the plate sinks deep into the mantle:
1.  **Earthquakes:** The friction is immense. The plates lock and snap, causing mega-thrust quakes (like Japan 2011).
2.  **Volcanoes:** The sinking plate carries water. When it gets hot, the water boils out. [C] This water lowers the melting point of the hot rocks above it (flux melting). Magma rises to the surface, punching through the continent to form volcanoes (like Mt. Fuji or Mt. Rainier).

It is a geologic factory. [D] It destroys old crust and creates new mountains, constantly reshaping the rim of the Pacific basin.
    `.trim(),
        questions: [
            {
                id: "batch14_topic6_ring_of_fire_Q1",
                question: "How does 'Subduction' lead to the formation of volcanoes in the Ring of Fire?",
                options: [
                    "The plates rub together to make sparks.",
                    "The sinking plate carries water, which boils out and lowers the melting point of rocks, creating rising magma.",
                    "The ocean catches fire.",
                    "The mountains are heavy."
                ],
                correctAnswer: "B",
                explanation: "The text notes: 'The sinking plate carries water. When it gets hot, the water boils out... This water lowers the melting point... Magma rises.'"
            }
        ]
    },
    {
        id: "batch14_topic7_nitrogen_cycle",
        taskType: "academic",
        title: "The Haber Process: Bread from Air",
        passage: `
**Rhetorical Structure:** Problem-Solution/Impact
**Dominant TOEFL Skill:** Inference

Nitrogen is essential for life (DNA, proteins). Though the air is 78% Nitrogen ($N_2$), plants cannot use it. The triple bond holding the two Nitrogen atoms together is too strong. Plants need "fixed" nitrogen (Ammonia/Nitrates). Historically, we relied on lightning or bacteria to fix it, or we used manure (guano). By 1900, the world was running out of manure. Scientists predicted mass starvation.

In 1909, Fritz Haber (German chemist) solved it. He invented a way to turn air into fertilizer.
The *Haber-Bosch Process*.

Reaction: $N_2 + 3H_2 \rightarrow 2NH_3$ (Ammonia).
Conditions: High Temperature (400°C) and High Pressure (200 atm) with an Iron catalyst. [A]

The high pressure forces the gas molecules together. The catalyst weakens the bond.
It worked. Suddenly, we could make unlimited fertilizer.

The Impact:
Populations exploded. Today, 50% of the nitrogen in your body came from a Haber factory. [B] Without it, the Earth could support only 4 billion people, not 8 billion.

The Dark Side:
1.  **War:** Ammonia is also used to make explosives (TNT). Haber helped Germany prolong WWI despite the blockade cutting off nitrate imports. [C]
2.  **Pollution:** The excess fertilizer runs off fields into the ocean, creating "Dead Zones" (algal blooms) where nothing can live.

Haber is a tragic figure. A Jew who developed poison gas for Germany in WWI, he was later exiled by the Nazis. [D] He saved billions from hunger and killed millions with weapons, the duality of modern chemistry.
    `.trim(),
        questions: [
            {
                id: "batch14_topic7_nitrogen_cycle_Q1",
                question: "Aside from fertilizer, what was a negative consequence of the Haber-Bosch process mentioned in the text?",
                options: [
                    "It made bread taste bad.",
                    "It allowed Germany to produce explosives (TNT) to prolong WWI.",
                    "It killed all the plants.",
                    "It made the air breathable."
                ],
                correctAnswer: "B",
                explanation: "The passage lists: 'The Dark Side... War: Ammonia is also used to make explosives (TNT). Haber helped Germany prolong WWI.'"
            }
        ]
    },
    {
        id: "batch14_topic8_microprocessor",
        taskType: "academic",
        title: "The Invention of the Microprocessor: The Intel 4004",
        passage: `
**Rhetorical Structure:** Invention/Impact
**Dominant TOEFL Skill:** Sentence Insertion

Before 1971, computers were big. A "CPU" was a fridge-sized cabinet filled with multiple circuit boards. If you wanted to build a calculator, you designed a custom set of chips for it. It was rigid.

In 1969, a Japanese calculator company (Busicom) came to Intel. They wanted Intel to design 12 custom chips for their new device.
Intel engineer Ted Hoff looked at it and said, "This is too complex." [A]
He proposed a radical idea: Instead of 12 "hard-wired" chips (one for add, one for display, etc.), why not build **one** chip that can do *everything* if you give it the right instructions (software)?

This was the *General Purpose Microprocessor*.
Federico Faggin designed the silicon using the new "Silicon Gate Technology."

The result was the *Intel 4004* (released 1971).
It was tiny (fingernail size). It had 2,300 transistors. It was as powerful as the room-sized ENIAC from 1946. [B]

Crucially, it was *programmable*.
The same chip could run a calculator, a traffic light, or a washing machine. You didn't need to redesign the hardware; you just changed the code. [C]

This detached hardware from logic.
It launched the PC revolution. Moore's Law took over, doubling the transistor count every two years. [D] Today's chips have billions of transistors, but they still follow the architecture of the little 4004—a universal brain waiting for software to tell it what to be.
    `.trim(),
        questions: [
            {
                id: "batch14_topic8_microprocessor_Q1",
                question: "What was the revolutionary innovation of the Intel 4004 chip?",
                options: [
                    "It was the biggest chip ever made.",
                    "It was a 'General Purpose' chip that could perform any task by changing the software, rather than the hardware.",
                    "It used vacuum tubes.",
                    "It was made of wood."
                ],
                correctAnswer: "B",
                explanation: "The text states: 'He proposed a radical idea... why not build **one** chip that can do *everything*... You didn't need to redesign the hardware; you just changed the code.'"
            }
        ]
    },
    {
        id: "batch14_topic9_learned_helplessness",
        taskType: "academic",
        title: "Martin Seligman and Learned Helplessness",
        passage: `
**Rhetorical Structure:** Experiment/Application
**Dominant TOEFL Skill:** Prose Summary

In 1967, psychologist Martin Seligman discovered a phenomenon that explains depression. He was studying conditioning in dogs.

**Phase 1:** He put dogs in a harness.
Group A: Got mild shocks, but could stop them by pressing a lever. (Control).
Group B: Got shocks, but the lever did nothing. The shocks were random and unstoppable. They had no control.

**Phase 2:** He put the dogs in a "Shuttle Box." It had a low fence. [A] To escape the shock, all the dog had to do was jump over the fence.
Group A (Control) jumped immediately.
Group B (No Control) did something heartbreaking. They laid down and whined. They accepted the shock. They didn't even *try* to jump.

They had learned that *Action is Futile*. This is *Learned Helplessness*.

Seligman realized this applies to humans. [B]
If a person faces repeated trauma (abuse, failure, poverty) that they cannot control, their brain is rewired. They stop trying. Even when an opportunity to escape appears (a job, a lifeline), they don't take it. They believe "Nothing I do matters."

This creates a cycle of depression.
The cure is "Learned Optimism." [C] Cognitive Behavioral Therapy (CBT) involves teaching the patient that their actions *do* have consequences, breaking the belief of powerlessness by small wins. [D]
    `.trim(),
        questions: [
            {
                id: "batch14_topic9_learned_helplessness_Q1",
                question: "In Seligman's experiment, why did the dogs in Group B refuse to jump the fence?",
                options: [
                    "They were tired.",
                    "They had 'Learned Helplessness' from previous unstoppable shocks, believing that action was futile.",
                    "The fence was too high.",
                    "They liked the shocks."
                ],
                correctAnswer: "B",
                explanation: "The passage explains: 'They had learned that *Action is Futile*. This is *Learned Helplessness*... They stopped trying.'"
            }
        ]
    },
    {
        id: "batch14_topic10_gamma_ray_bursts",
        taskType: "academic",
        title: "Gamma Ray Bursts: The Most Powerful Explosions",
        passage: `
**Rhetorical Structure:** Mystery/Discovery
**Dominant TOEFL Skill:** Factual Information

In the 1960s, the US launched Vela satellites to detect Soviet nuclear tests. They didn't find nukes. They found random, massive flashes of Gamma Rays coming from outer space. These were *Gamma Ray Bursts* (GRBs).

For decades, they were a mystery. They lasted seconds.
The energy was absurd. In 10 seconds, a GRB releases more energy than our Sun will produce in its entire 10-billion-year life. [A]

What causes them?
There are two types:
1.  **Long Bursts (>2 secs):** The death of a massive star (Hypernova). The core collapses into a black hole, shooting jets of energy out the poles at 99.9% light speed. We only see the GRB if the jet is pointed *directly at us* (like a sniper rifle). [B]
2.  **Short Bursts (<2 secs):** The collision of two Neutron Stars. (This also creates Gold and Platinum).

Are they a threat? Yes.
If a GRB occurred in our Milky Way, pointed at Earth, it would strip our Ozone layer in seconds. [C]
Solar radiation would then kill all surface life.
Some scientists believe the Ordovician Extinction (450 mya) was caused by a GRB.

Fortunately, they are rare in our galaxy. Most occur in distant, chaotic galaxies. But they serve as a reminder that the universe is a shooting gallery. [D]
    `.trim(),
        questions: [
            {
                id: "batch14_topic10_gamma_ray_bursts_Q1",
                question: "What astrophysical event causes a 'Long Burst' Gamma Ray Burst?",
                options: [
                    "Aliens taking a photo.",
                    "The death of a massive star (Hypernova) collapsing into a black hole.",
                    "Two planets crashing.",
                    "The sun sneezing."
                ],
                correctAnswer: "B",
                explanation: "The text states: 'Long Bursts (>2 secs): The death of a massive star (Hypernova). The core collapses into a black hole.'"
            }
        ]
    },
    {
        id: "batch14_topic11_terracotta_warriors",
        taskType: "academic",
        title: "The Terracotta Army: Qin Shi Huang's Afterlife",
        passage: `
**Rhetorical Structure:** Description/Purpose
**Dominant TOEFL Skill:** Negative Factual Information

In 1974, farmers digging a well in Xi'an, China, found a clay head. They had stumbled upon the greatest archaeological find of the 20th century: the tomb of Qin Shi Huang, the First Emperor of China (died 210 BCE).

The Emperor was obsessed with immortality. He unified China, built the Great Wall, and standardized writing. But he feared death. He spent 38 years building his mausoleum.

The *Terracotta Army* consists of 8,000 life-sized soldiers, 130 chariots, and 520 horses. [A]

Remarkably, no two faces are alike. [B]
originally, we thought they used a single mold. Scanning shows they used "modular production." They had standard types of ears, noses, and eyes, which craftsmen mixed and matched, then hand-carved details to create individual personalities.

They were not grey. [C] They were originally painted in bright colors (red, blue, purple). The paint peeled off instantly when exposed to modern air (oxidation).

Their purpose was literal. The Emperor believed the afterlife was a physical place. He needed an army to protect him from the spirits of the enemies he had killed.

The tomb itself remains unopened. Ancient records say it has rivers of flowing mercury. Soil tests confirm high mercury levels. [D] Archaeologists are afraid to open it—not because of curses, but because we lack the technology to preserve what's inside (like the paint) before it disintegrates.
    `.trim(),
        questions: [
            {
                id: "batch14_topic11_terracotta_warriors_Q1",
                question: "What did scientific analysis reveal about the original appearance of the Terracotta Warriors?",
                options: [
                    "They were covered in gold.",
                    "They were painted in bright colors (red, blue, purple) that disintegrated upon exposure to air.",
                    "They were made of plastic.",
                    "They were invisible."
                ],
                correctAnswer: "B",
                explanation: "The passage notes: 'They were originally painted in bright colors... The paint peeled off instantly when exposed to modern air.'"
            }
        ]
    },
    {
        id: "batch14_topic12_leed_design",
        taskType: "academic",
        title: "Sustainable Architecture: The LEED Standard",
        passage: `
**Rhetorical Structure:** Problem-Solution/Criteria
**Dominant TOEFL Skill:** Vocabulary in Context

Buildings consume 40% of the world's energy (heating, cooling, lighting). To fix climate change, we must fix buildings. The global standard for green building is **LEED** (Leadership in Energy and Environmental Design).

It is a points system. If you get enough points, you get Certified, Silver, Gold, or Platinum.

Categories:
1.  **Site:** Don't build on wetlands. Build near public transport (to reduce car use). [A]
2.  **Water:** Use low-flow toilets. Collect rainwater for landscaping (Greywater).
3.  **Energy:** This is the big one. Use high-insulation windows (Triple Glazing). Use LED lights. Install solar panels.
4.  **Materials:** Use recycled steel. Use local wood (to reduce shipping emissions). [B]
5.  **Indoor Quality:** Use non-toxic paints (Low VOC) so people don't breathe fumes.

Critiques:
Some argue LEED is "Greenwashing." [C]
You can get points for a bike rack, but still build a glass box in the desert that requires massive AC. A bike rack shouldn't offset bad physics.

However, it changed the market. It made "Green" cool and profitable. Tenants pay higher rent for LEED buildings because their utility bills are lower and the air is better. [D] It moved sustainability from a hippie niche to a corporate requirement.
    `.trim(),
        questions: [
            {
                id: "batch14_topic12_leed_design_Q1",
                question: "What is a criticism of the LEED green building certification mentioned in the text?",
                options: [
                    "It is too easy.",
                    "It encourages 'Greenwashing', where minor features like bike racks can offset major inefficiencies like poor design.",
                    "It uses too much paper.",
                    "It stops construction."
                ],
                correctAnswer: "B",
                explanation: "The text states: 'Some argue LEED is \"Greenwashing.\" You can get points for a bike rack, but still build a glass box in the desert.'"
            }
        ]
    },
    {
        id: "batch14_topic13_crusades_first",
        taskType: "academic",
        title: "The First Crusade: Faith and Geopolitics",
        passage: `
**Rhetorical Structure:** Cause-Effect/Motivation
**Dominant TOEFL Skill:** Inference

In 1095, Pope Urban II gave a speech at Clermont that set Europe on fire. He called for a holy war to recapture Jerusalem from the Muslims (Seljuk Turks). The response was "Deus Vult" (God Wills It).

The motivations were complex.
1.  **Religious:** True belief. People believed going on Crusade would wash away all their sins (Plenary Indulgence). It was a ticket to Heaven. [A]
2.  **Political:** The Pope wanted to reunite the Church (split in 1054) and show he was the boss of all Kings.
3.  **Social:** Europe was violent. Knights were constantly fighting each other. The Pope wanted to export this violence. "Stop fighting your brothers; go fight the infidel." [B]

The First Crusade was the only "successful" one.
Despite terrible leadership, starvation, and no supply lines, they captured Jerusalem in 1099.
The victory was due to Muslim disunity. The local Sultans were fighting each other and ignored the "Franks" until it was too late. [C]

The Crusaders massacred the inhabitants of Jerusalem (Muslims and Jews). They established "Crusader States."
These states lasted 200 years but were secluded islands in a hostile sea. They relied on Italian merchants for supplies (Venice/Genoa), which kickstarted the trade that would eventually lead to the Renaissance. [D] The Crusades failed to hold the Holy Land, but they succeeded in reconnecting Europe to the wider world.
    `.trim(),
        questions: [
            {
                id: "batch14_topic13_crusades_first_Q1",
                question: "What was a social motivation for the Pope to call the First Crusade?",
                options: [
                    "To make money.",
                    "To export violence by sending fighting knights out of Europe to fight a common enemy ('Stop fighting your brothers').",
                    "To find gold.",
                    "To learn Arabic."
                ],
                correctAnswer: "B",
                explanation: "The passage explains: 'The Pope wanted to export this violence. \"Stop fighting your brothers; go fight the infidel.\"' "
            }
        ]
    },
    {
        id: "batch14_topic14_dark_energy",
        taskType: "academic",
        title: "Dark Energy: The Accelerating Universe",
        passage: `
**Rhetorical Structure:** Discovery/Implication
**Dominant TOEFL Skill:** Sentence Insertion

In 1998, two teams of astronomers were observing Type Ia Supernovae. These exploding stars are "Standard Candles"—they always explode with the exact same brightness. By measuring how dim they look, we know exactly how far away they are. We can measure the history of the universe's expansion.

Everyone expected the expansion to be *slowing down*. Gravity pulls things together. The Big Bang pushed things apart; gravity should be braking it.

The data was shocking. The expansion is *speeding up*. [A]
The farther away the galaxy, the faster it is running away.

There must be a force pushing the universe apart, overcoming gravity. We call it *Dark Energy*.
We don't know what it is. It seems to be a property of space itself. [B]
As space expands, more dark energy appears. It is a runaway feedback loop.
More space -> More Dark Energy -> Faster Expansion -> More Space.

It makes up 68% of the universe. (Dark Matter is 27%, Normal Matter is 5%).
This implies a lonely future. [C]
Eventually, galaxies will be pushed apart so fast that light cannot cross the gap. The sky will go black. We will be alone in our galaxy.
This overturned the "Big Crunch" theory (that the universe would snap back). The universe will end in a "Big Freeze"—cold, dark, and empty. [D]
    `.trim(),
        questions: [
            {
                id: "batch14_topic14_dark_energy_Q1",
                question: "What surprising discovery did astronomers make in 1998 regarding the universe?",
                options: [
                    "It is shrinking.",
                    "It is stopping.",
                    "The expansion of the universe is accelerating (speeding up) due to Dark Energy.",
                    "The universe is square."
                ],
                correctAnswer: "C",
                explanation: "The text notes: 'The data was shocking. The expansion is *speeding up*... There must be a force... We call it *Dark Energy*.'"
            }
        ]
    },
    {
        id: "batch14_topic15_stem_cells",
        taskType: "academic",
        title: "Stem Cells: Pluripotency and Regenerative Medicine",
        passage: `
**Rhetorical Structure:** Definition/Ethics
**Dominant TOEFL Skill:** Factual Information

You started as a single cell. That cell divided to become brain, heart, skin, and bone. How?
At the beginning, cells are *Stem Cells*. They are "undifferentiated." They are blank slates.

There are grades of potential:
1.  **Totipotent:** Can become *anything* (including the placenta). The fertilized egg.
2.  **Pluripotent:** Can become any body part (heart, nerve), but not placenta. [A] (Embryonic Stem Cells).
3.  **Multipotent:** Can become a few things. (Adult Stem Cells). e.g., Bone marrow cells can become red blood cells or white blood cells, but not brain cells.

The medical dream is to use Pluripotent cells to grow new organs. [B]
Paralyzed? Grow new nerves.
Diabetes? Grow new pancreas cells.

The controversy:
Getting Pluripotent cells originally required destroying a human embryo (Blastocyst). This raised huge ethical issues.
In 2006, Shinya Yamanaka solved this. He invented **iPS Cells** (Induced Pluripotent Stem Cells). [C]
He took a normal skin cell and added 4 genes (Yamanaka Factors) that "reset" the clock. The skin cell turned back into a Stem Cell.

This bypassed the ethical problem. No embryos needed.
It also solved rejection. You can use the patient's own skin to grow their own new heart. The body won't attack it. [D]
    `.trim(),
        questions: [
            {
                id: "batch14_topic15_stem_cells_Q1",
                question: "Why are Induced Pluripotent Stem Cells (iPS) considered a major medical breakthrough?",
                options: [
                    "They are cheaper.",
                    "They allow the creation of stem cells from skin without destroying embryos, solving the ethical dilemma.",
                    "They glow in the dark.",
                    "They are faster to grow."
                ],
                correctAnswer: "B",
                explanation: "The passage states: 'He took a normal skin cell... This bypassed the ethical problem. No embryos needed.'"
            }
        ]
    },
    {
        id: "batch14_topic16_pop_art",
        taskType: "academic",
        title: "Pop Art: Andy Warhol and the Commodification of Art",
        passage: `
**Rhetorical Structure:** Reaction/Style
**Dominant TOEFL Skill:** Rhetorical Purpose

In the 1960s, Abstract Expressionism (Pollock) was the serious, high-brow art form. It was deep and angsty. *Pop Art* was a reaction against this. It was shallow, bright, and fun. It embraced the commercial culture that High Art hated.

Andy Warhol is the King of Pop.
He painted Soup Cans, Coca-Cola bottles, and Marilyn Monroe.
His point: In America, the richest consumer buys the same thing as the poorest. [A] "A Coke is a Coke," said Warhol. "Liz Taylor drinks Coke, and you can drink Coke, too."

He removed the "Artist's Hand."
Classically, the brushstroke is the signature of the genius.
Warhol used *Silk Screen Printing*. It is a mechanical process. He could churn out 50 Marilyns in a day. [B]
He called his studio "The Factory." He treated art as a product, like a soup can.

Critics called it "Selling Out." Warhol said, "Making money is art." [C]

Pop Art forced us to look at our visual environment. We are bombarded by ads and logos. Pop Art says: This *is* our landscape. It is not Nature anymore; it is Brand.
By repeating an image (Marilyn) over and over, he showed how celebrity works: the person disappears, and only the icon remains. [D]
    `.trim(),
        questions: [
            {
                id: "batch14_topic16_pop_art_Q1",
                question: "What message was Andy Warhol conveying by painting mass-produced items like Coke bottles?",
                options: [
                    "That he was thirsty.",
                    "That consumer culture is democratic; the rich and poor consume the exact same products.",
                    "That Coke is bad for you.",
                    "That he couldn't paint people."
                ],
                correctAnswer: "B",
                explanation: "The text explains: 'His point: In America, the richest consumer buys the same thing as the poorest. \"A Coke is a Coke.\"' "
            }
        ]
    },
    {
        id: "batch14_topic17_apartheid",
        taskType: "academic",
        title: "Apartheid: The Architecture of Segregation",
        passage: `
**Rhetorical Structure:** Problem-Solution/Resolution
**Dominant TOEFL Skill:** Prose Summary

*Apartheid* (Afrikaans for "Apart-ness") was the legal system of racial segregation in South Africa from 1948 to 1994. It was not just racism; it was a total social engineering project designed to ensure white minority rule over a black majority.

Mechanism:
1.  **Population Registration Act:** Classified every human as White, Black, Colored (mixed), or Indian.
2.  **Group Areas Act:** Split the land. Whites (15% of people) got 87% of the land (the best farming/cities). Blacks got the "Bantustans"—barren homelands. [A]
3.  **Pass Laws:** Blacks could not enter "White areas" (cities) without a Pass Book showing they had a job there. If you forgot your pass, you went to jail.

Resistance was led by the ANC (African National Congress) and Nelson Mandela.
After the Sharpeville Massacre (1960), the ANC turned to armed struggle. Mandela was imprisoned for 27 years. [B]

The system collapsed due to two pressures:
1.  **Internal:** The townships (Soweto) became ungovernable due to constant protests.
2.  **External:** The world imposed sanctions. South Africa was banned from the Olympics and global banking. The economy tanked. [C]

In 1990, President F.W. de Klerk realized the game was up. He released Mandela.
They negotiated a transition to democracy.
In 1994, Mandela was elected President.
Instead of revenge, he set up the "Truth and Reconciliation Commission" (TRC). [D] Victims told their stories, and perpetrators got amnesty if they confessed. It wasn't perfect Justice, but it bought Peace.
    `.trim(),
        questions: [
            {
                id: "batch14_topic17_apartheid_Q1",
                question: "What was the purpose of the 'Group Areas Act' in Apartheid South Africa?",
                options: [
                    "To build parks.",
                    "To allocate 87% of the land to the white minority and force blacks into barren 'Bantustans'.",
                    "To improve farming.",
                    "To integrate schools."
                ],
                correctAnswer: "B",
                explanation: "The passage notes: 'Split the land. Whites... got 87% of the land... Blacks got the \"Bantustans\"—barren homelands.'"
            }
        ]
    },
    {
        id: "batch14_topic18_mcdonaldization",
        taskType: "academic",
        title: "George Ritzer and the McDonaldization of Society",
        passage: `
**Rhetorical Structure:** Theory/Application
**Dominant TOEFL Skill:** Inference

In 1993, sociologist George Ritzer published *The McDonaldization of Society*. He updated Max Weber’s theory of "Rationalization." He argued that the principles of the fast-food restaurant are taking over every sector of society: education, medicine, travel, and dating.

The 4 Principles:
1.  **Efficiency:** The fastest way from Point A to Point B. (The Drive-Thru). In healthcare, this is the 10-minute doctor visit.
2.  **Calculability:** Quantity equals Quality. "The Big Mac." We want *more* for *less*. [A] We assume a 500-page book is better than a 200-page one. GPA scores measure "student value" by a number.
3.  **Predictability:** No surprises. A Big Mac tastes the same in Paris as in Peoria. [B] In movies, we prefer sequels and formulaic plots because we know what we are getting.
4.  **Control:** Replacing humans with non-human technology. Soda fountains that shut off automatically. Scantron tests.

The result is "The Irrationality of Rationality." [C]
By trying to be hyper-efficient, we create dehumanizing systems.
Efficient farming (factory farms) creates bad food.
Efficient travel (package tours) destroys the adventure.
Ritzer warns we are trapping ourselves in an "Iron Cage" of bureaucracy where creativity and humanity are squeezed out by the algorithm. [D]
    `.trim(),
        questions: [
            {
                id: "batch14_topic18_mcdonaldization_Q1",
                question: "What does George Ritzer mean by 'Calculability' in the McDonaldization theory?",
                options: [
                    "Using calculators.",
                    "The belief that Quantity equals Quality (bigger is better), and everything must be measured.",
                    "Counting money.",
                    "Being good at math."
                ],
                correctAnswer: "B",
                explanation: "The text states: 'Calculability: Quantity equals Quality... We want *more* for *less*... GPA scores measure \"student value\" by a number.'"
            }
        ]
    },
    {
        id: "batch14_topic19_desalination",
        taskType: "academic",
        title: "Engineering Desalination: Reverse Osmosis",
        passage: `
**Rhetorical Structure:** Process/Trace
**Dominant TOEFL Skill:** Factual Information

97% of Earth's water is salt water. As freshwater sources dry up (aquifers), we turn to the ocean. *Desalination* is the process of removing salt. The standard modern method is *Reverse Osmosis* (RO).

Normal Osmosis: [A]
Imagine a tank with a semi-permeable membrane in the middle. Salt water on the left, fresh water on the right.
Nature wants to balance the concentration. Fresh water flows *into* the salt side to dilute it.

Reverse Osmosis:
We want the opposite. We want to push the pure water *out* of the salt water.
To do this, we must apply pressure—massive pressure (1000 psi). [B]
We use pumps to smash the salt water against the membrane.
The membrane has microscopic pores (0.0001 microns).
Water molecules ($H_2O$) are tiny. They pass through.
Salt ions ($Na^+$, $Cl^-$) and bacteria are big. They get blocked.

The result is pure water on one side and ultra-salty Brine on the other.

Problems:
1.  **Energy:** Pumping to 1000 psi takes huge electricity. It is expensive. [C]
2.  **Brine:** You create tons of toxic sludge (brine). If you dump it back in the ocean, it sinks (it's heavy) and kills sea life.

Countries like Israel and Saudi Arabia rely on RO for 50%+ of their water. [D] The challenge is to power these plants with solar energy to make them sustainable.
    `.trim(),
        questions: [
            {
                id: "batch14_topic19_desalination_Q1",
                question: "Why is Reverse Osmosis (RO) an expensive method for desalinating water?",
                options: [
                    "The filters are made of gold.",
                    "It requires massive amounts of energy (electricity) to generate the 1000 psi pressure needed.",
                    "Salt is heavy.",
                    "Water doesn't like to move."
                ],
                correctAnswer: "B",
                explanation: "The passage notes: 'To do this, we must apply pressure... Pumping to 1000 psi takes huge electricity. It is expensive.'"
            }
        ]
    },
    {
        id: "batch14_topic20_symbiosis",
        taskType: "academic",
        title: "Symbiosis: The Spectrum of Interaction",
        passage: `
**Rhetorical Structure:** Classification/Nuance
**Dominant TOEFL Skill:** Vocabulary in Context

Symbiosis means "living together." It is not always friendly. It is a spectrum of interactions between species.

1.  **Mutualism (+/+):** Both benefit.
    Example: Clownfish and Anemone. The Anemone stings predators to protect the fish. The fish poop feeds the Anemone. [A]
    Example: Your Gut Bacteria (see Batch 12).

2.  **Commensalism (+/0):** One benefits, the other doesn't care.
    Example: Remora fish on a Shark. The Remora gets a free ride and eats scraps. The Shark loses nothing (but gains nothing).
    example: Birds nesting in a tree. [B]

3.  **Parasitism (+/-):** One benefits, the other is harmed.
    Example: Ticks, Tapeworms. A "Smart" parasite doesn't kill the host immediately (like Ebola); it keeps it alive to feed longer (like the Common Cold).

The lines are blurry. [C]
The Oxpecker bird eats ticks off a Rhino. (Mutualism).
But if there are no ticks, the bird pecks the Rhino's skin to drink blood. (Parasitism).
The relationship changes based on context.

Evolutionary theory ("The Red Queen Hypothesis") suggests parasites drive evolution. [D] The host must constantly evolve defenses, and the parasite must evolve offenses, just to stay in the same place. Sex itself may have evolved as a way to shuffle gene decks to stay one step ahead of parasites.
    `.trim(),
        questions: [
            {
                id: "batch14_topic20_symbiosis_Q1",
                question: "How does the relationship between the Oxpecker and Rhino demonstrate the complexity of symbiosis?",
                options: [
                    "They are best friends.",
                    "The relationship shifts from Mutualism (eating ticks) to Parasitism (drinking blood) depending on the availability of ticks.",
                    "The Rhino eats the bird.",
                    "They ignore each other."
                ],
                correctAnswer: "B",
                explanation: "The text gives the example: 'Oxpecker... eats ticks... (Mutualism). But if there are no ticks, the bird pecks the Rhino's skin to drink blood. (Parasitism).'"
            }
        ]
    }
];
