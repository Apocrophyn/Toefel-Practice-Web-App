
import { AcademicQuestion } from "./reading-2026";

export const batch11Passages: AcademicQuestion[] = [
    {
        id: "batch11_topic1_entropy_enthalpy",
        taskType: "academic",
        title: "Thermodynamics: Entropy vs. Enthalpy",
        passage: `
**Rhetorical Structure:** Comparison/Contrast
**Dominant TOEFL Skill:** Factual Information

In chemistry, predicting whether a reaction will happen spontaneously requires balancing two opposing forces: *Enthalpy* ($\Delta H$) and *Entropy* ($\Delta S$).

Enthalpy refers to heat content. Systems prefer to release heat (exothermic). [A] A ball rolling down a hill releases potential energy; similarly, atoms prefer to bond in ways that release energy. A negative $\Delta H$ (releasing heat) is favorable.

Entropy refers to disorder or randomness. Systems prefer to become messy. [B] A clean room naturally becomes dirty; it takes work to keep it clean. Smoke spreads out; it never gathers back into the wood. A positive $\Delta S$ (increasing disorder) is favorable.

The conflict arises when these two forces fight.
Consider ice melting at room temperature.
*   Enthalpy says "No." Melting requires absorbing heat (endothermic). The ice "wants" to stay cold and solid.
*   Entropy says "Yes." Liquid water is more disordered than solid ice crystal. The molecules "want" to move freely.

Who wins? It depends on Temperature ($T$). [C]
The equation for Gibbs Free Energy is $\Delta G = \Delta H - T\Delta S$.
If $T$ is high, the Entropy term ($T\Delta S$) becomes dominant. The desire to be disordered overpowers the desire to stay cold. [D] So, at high temperatures, Entropy wins and the ice melts. At low temperatures, Enthalpy wins and water freezes. The universe is a constant tug-of-war between the drive for low energy and the drive for high chaos.
    `.trim(),
        questions: [
            {
                id: "batch11_topic1_entropy_enthalpy_Q1",
                question: "According to the passage, when does Entropy win over Enthalpy to cause ice to melt?",
                options: [
                    "At absolute zero.",
                    "At high temperatures, where the Term 'TΔS' becomes dominant.",
                    "When the pressure is low.",
                    "When the ice is crushed."
                ],
                correctAnswer: "B",
                explanation: "The text states: 'If T is high, the Entropy term... becomes dominant... So, at high temperatures, Entropy wins and the ice melts.'"
            }
        ]
    },
    {
        id: "batch11_topic2_maritime_silk_road",
        taskType: "academic",
        title: "The Maritime Silk Road: The Shift to the Sea",
        passage: `
**Rhetorical Structure:** Cause-Effect/Change
**Dominant TOEFL Skill:** Inference

While the overland Silk Road via Central Asia gets all the romance, by the Song Dynasty (960–1279), the primary route for global trade had shifted to the "Maritime Silk Road." Ships replaced camels. This shift was driven by technology and economics.

Technologically, the invention of the magnetic compass, the stern-post rudder, and watertight bulkheads made Chinese junks the most advanced ships in the world. [A] They could carry massive loads.

Economically, a camel can carry 500 lbs. A ship can carry 500 *tons*. [B]
For heavy, bulk goods like ceramics (porcelain) and iron, land travel was impossibly expensive. You could only make a profit carrying light, high-value items like silk or spices on a camel. Ships allowed mass trade in everyday goods. "China" (dishes) became "china" because ships made it cheap enough to export globally.

The route connected China to India, the Persian Gulf, and East Africa. [C]
Admiral Zheng He's voyages in the 15th century were the zenith of this network. His "Treasure Ships" were 400 feet long.

However, the Ming Dynasty later banned private sea trade (Haijin) to fight piracy. [D] This policy blunder left the ocean open for the Portuguese and Dutch to take over in the 16th century, leading to European dominance of the seas for the next 400 years.
    `.trim(),
        questions: [
            {
                id: "batch11_topic2_maritime_silk_road_Q1",
                question: "What technological advantage did Chinese junks have that enabled the Maritime Silk Road?",
                options: [
                    "Steam engines.",
                    "The magnetic compass, stern-post rudder, and watertight bulkheads.",
                    "GPS navigation.",
                    "Steel hulls."
                ],
                correctAnswer: "B",
                explanation: "The passage lists: 'Technologically, the invention of the magnetic compass, the stern-post rudder, and watertight bulkheads made Chinese junks the most advanced ships.'"
            }
        ]
    },
    {
        id: "batch11_topic3_epigenetics",
        taskType: "academic",
        title: "Epigenetics: Beyond the DNA Sequence",
        passage: `
**Rhetorical Structure:** Paradigm Shift/Mechanism
**Dominant TOEFL Skill:** Prose Summary

For decades, biology followed a strict dogma: "DNA is Destiny." Your genes are written in stone at conception, and you cannot change them. *Epigenetics* overturns this. It studies changes in gene *expression* that do not involve changes to the underlying DNA sequence. Your genes are the hardware; epigenetics is the software.

The primary mechanism is *DNA Methylation*. [A] A small chemical tag (methyl group) attaches to a gene. This acts like a switch. It turns the gene "Off." The gene is still there, but it is silenced.

Crucially, these tags can be added or removed by *environment* and *lifestyle*. [B]
Stress, diet, and toxins can alter your methylation patterns.
If a queen bee is fed Royal Jelly, it turns *on* the genes for ovaries and large size. If a worker bee eats normal pollen, those genes stay switched off. Same DNA, different outcome.

Most shockingly, these tags can be inherited. [C]
In the "Dutch Hunger Winter" study, women who were starved during WWII gave birth to babies who were prone to obesity and diabetes decades later. The famine had toggled their genes to "hoard calories." Even their grandchildren showed effects.

This suggests a Lamarckian twist to evolution: the experiences of the parents (famine, trauma) can leave a biological scar on the children. [D] We are not just guardians of our DNA; we are its editors.
    `.trim(),
        questions: [
            {
                id: "batch11_topic3_epigenetics_Q1",
                question: "What does the 'Dutch Hunger Winter' study suggest about inheritance?",
                options: [
                    "Genes never change.",
                    "Diet has no effect on health.",
                    "Environmental trauma (like famine) can leave biological marks (epigenetic tags) that are inherited by children and grandchildren.",
                    "Only eye color is inherited."
                ],
                correctAnswer: "C",
                explanation: "The text explains: 'The famine had toggled their genes... Even their grandchildren showed effects. This suggests a Lamarckian twist to evolution.'"
            }
        ]
    },
    {
        id: "batch11_topic4_lost_generation",
        taskType: "academic",
        title: "Hemingway and the Lost Generation in Paris",
        passage: `
**Rhetorical Structure:** Context/Style
**Dominant TOEFL Skill:** Rhetorical Purpose

The "Lost Generation" refers to the cohort of writers who came of age during World War I and established their literary reputations in the 1920s. The term, popularized by Ernest Hemingway, captures the sense of aimlessness and disillusionment felt by survivors of the useless slaughter of the trenches.

Many, like Hemingway and F. Scott Fitzgerald, became expatriates in Paris. [A] They felt America was puritanical and materialistic. Paris offered cheap wine, sexual freedom, and art.

Hemingway’s style—the "Iceberg Theory"—was a direct reaction to the war. [B]
Pre-war literature (like Victorian novels) was flowery and abstract, using words like "glory," "honor," and "sacred." The war proved these words were lies.
Hemingway stripped language down to the bone. He used simple nouns and verbs. He avoided adjectives.

He believed that, like an iceberg, the dignity of movement lies in what is *under* the water. You don't describe the emotion; you describe the action, and the emotion is felt by the reader.

In *The Sun Also Rises*, the characters drink and travel, but never talk about their trauma. [C] The silence is the point. They are "lost" not because they are wandering, but because the old moral compass—faith in God and Country—had been destroyed by mustard gas. [D] They had to create a new code of conduct based on stoic endurance.
    `.trim(),
        questions: [
            {
                id: "batch11_topic4_lost_generation_Q1",
                question: "What is Hemingway's 'Iceberg Theory' of writing?",
                options: [
                    "Stories should be set in winter.",
                    "Writers should use as many adjectives as possible.",
                    "The dignity of the story lies in what is unsaid (under the water); describing action rather than emotion.",
                    "Characters should talk constantly."
                ],
                correctAnswer: "C",
                explanation: "The passage notes: 'You don't describe the emotion; you describe the action... the dignity of movement lies in what is *under* the water.'"
            }
        ]
    },
    {
        id: "batch11_topic5_gini_index",
        taskType: "academic",
        title: "Measurements of Inequality: The Gini Coefficient",
        passage: `
**Rhetorical Structure:** Definition/Analysis
**Dominant TOEFL Skill:** Sentence Insertion

How do we measure fairness? In economics, the standard metric for income inequality is the *Gini Coefficient*. Developed by Conrado Gini in 1912, it is a number between 0 and 1 (or 0 and 100).

A Gini of 0 represents "Perfect Equality." Everyone has exactly the same income.
A Gini of 1 represents "Perfect Inequality." One person has *all* the income; everyone else has zero.

Real countries fall in the middle. [A] The Nordic countries (Sweden, Norway) are low, around 0.25. They have high taxes and strong welfare states.
The United States is relatively high for a developed nation, around 0.48. [B]
Developing nations like South Africa or Brazil often exceed 0.60.

The Gini is derived from the *Lorenz Curve*. [C] If you plot the cumulative percentage of the population against the cumulative percentage of income, a straight 45-degree line is perfect equality. The Lorenz curve bows underneath it. The Gini is the area of the gap between the straight line and the bowed curve. The bigger the belly of the curve, the higher the inequality.

Critics argue the Gini is flawed because it ignores wealth (assets like houses/stocks) and only measures income. [D] A retired millionaire might have zero "income" but be rich. Despite this, it remains the primary tool for debating whether the gap between the rich and poor is growing to dangerous levels.
    `.trim(),
        questions: [
            {
                id: "batch11_topic5_gini_index_Q1",
                question: "What does a Gini Coefficient of 1 represent in economics?",
                options: [
                    "Perfect Equality (everyone earns the same).",
                    "A booming economy.",
                    "Perfect Inequality (one person has all the income).",
                    "High inflation."
                ],
                correctAnswer: "C",
                explanation: "The text defines it: 'A Gini of 1 represents \"Perfect Inequality.\" One person has *all* the income; everyone else has zero.'"
            }
        ]
    },
    {
        id: "batch11_topic6_glaciers",
        taskType: "academic",
        title: "Geology of Glaciers: Erosion and Landforms",
        passage: `
**Rhetorical Structure:** Process/Landscape
**Dominant TOEFL Skill:** Vocabulary in Context

A glacier is a river of ice. It forms when snow accumulates faster than it melts, compressing into solid ice that flows downhill under its own weight. While they move slowly (inches per day), glaciers are the most powerful erosive force on Earth, capable of carving entire mountain ranges.

Rivers carve "V-shaped" valleys. Glaciers carve "U-shaped" valleys. [A] The ice fills the entire valley floor and sides, scouring it into a wide, steep-walled trough. Yosemite Valley is a classic U-shaped glacial trough.

The debris (rocks/sand) picked up by the glacier acts as the cutting tool. [B] The glacier acts like a giant sheet of sandpaper. It polishes the bedrock (glacial polish) and scratches it (striations), which tell geologists the direction the ice moved.

When the glacier melts (retreats), it drops its load. This pile of unsorted rocks is called a *Moraine*. [C] A "Terminal Moraine" marks the furthest point the glacier reached. Long Island, New York, is essentially a giant terminal moraine left by the Laurentide Ice Sheet 20,000 years ago.

If a U-shaped valley is close to the coast and gets flooded by the sea, it becomes a *Fjord*. [D] These deep, narrow harbors (common in Norway) are the drowned ghosts of the Ice Age.
    `.trim(),
        questions: [
            {
                id: "batch11_topic6_glaciers_Q1",
                question: "What is a 'Fjord'?",
                options: [
                    "A type of volcano.",
                    "A U-shaped glacial valley that has been flooded by the sea.",
                    "A pile of rocks.",
                    "A frozen river."
                ],
                correctAnswer: "B",
                explanation: "The passage states: 'If a U-shaped valley is close to the coast and gets flooded by the sea, it becomes a *Fjord*.'"
            }
        ]
    },
    {
        id: "batch11_topic7_batteries",
        taskType: "academic",
        title: "Electrochemistry: How a Galvanic Cell Works",
        passage: `
**Rhetorical Structure:** Mechanism/Process
**Dominant TOEFL Skill:** Factual Information

A battery is a device that converts chemical energy into electrical energy. The basic unit is the *Galvanic Cell* (named after Luigi Galvani). It relies on a "Redox" reaction—Reduction and Oxidation.

Oxidation is the *loss* of electrons. Reduction is the *gain* of electrons. (Mnemonic: OIL RIG).

A simple battery has two metal electrodes: an Anode (e.g., Zinc) and a Cathode (e.g., Copper), sitting in an electrolyte solution. [A]
The Zinc wants to get rid of electrons (oxidize) more than the Copper does.
So, Zinc atoms shed electrons and dissolve into the liquid as ions ($Zn^{2+}$).
The loose electrons travel through the wire to the Copper side. This flow of electrons is *Electricity*.

When the electrons reach the Copper electrode, they grab Copper ions from the solution and plate them onto the solid metal (reduction). [B]

However, if positive Zinc ions build up on one side and negative electrons leave, the charge imbalance would stop the flow instantly. [C]
The solution is the *Salt Bridge*. It connects the two liquids. It allows ions to flow back and forth to balance the charge, completing the circuit.

When the Zinc is all dissolved, the battery is "dead." [D]
A *rechargeable* battery (Lithium-ion) works by using electricity to force the reaction in reverse, pushing the electrons back to the unstable side, ready to flow down the hill again.
    `.trim(),
        questions: [
            {
                id: "batch11_topic7_batteries_Q1",
                question: "What is the specific function of the 'Salt Bridge' in a simple battery?",
                options: [
                    "To generate heat.",
                    "To allow ions to flow back and forth to balance the charge, preventing the reaction from stopping.",
                    "To hold the battery together.",
                    "To store the electrons."
                ],
                correctAnswer: "B",
                explanation: "The text explains: 'It allows ions to flow back and forth to balance the charge, completing the circuit.'"
            }
        ]
    },
    {
        id: "batch11_topic8_arpanet",
        taskType: "academic",
        title: "Origins of the Internet: ARPANET and Packet Switching",
        passage: `
**Rhetorical Structure:** Problem-Solution/History
**Dominant TOEFL Skill:** Negative Factual Information

The Internet was born out of Cold War paranoia. In the 1960s, the US military (ARPA) needed a communications network that could survive a nuclear attack. The existing telephone network was centralized. If you bombed the main switchboard, the whole network died. They needed a decentralized network.

The breakthrough idea was *Packet Switching*. [A]
In a phone call, you "rent" a continuous line. If silence happens, the line is wasted.
In Packet Switching, data is chopped into small chunks (packets). Each packet is labeled with an address. The packets are thrown into the network and can take *different routes* to get to the destination, where they are reassembled.
If one city is nuked, the packets simply flow around the hole.

The first node of ARPANET was installed at UCLA in 1969. [B] The first message ever sent was "LO." (They tried to type "LOGIN," but the system crashed after two letters).

By the 1970s, universities linked up. They needed a common language. Vint Cerf and Bob Kahn invented *TCP/IP* (Transmission Control Protocol). [C] This allowed different types of computers to talk to each other. It is the "handshake" of the internet.

It wasn't until 1989 that Tim Berners-Lee invented the *World Wide Web* (a way to organize information using hyperlinks). [D] The Internet is the road; the Web is the trucks driving on it. But the indestructible road was built by the military to survive the apocalypse.
    `.trim(),
        questions: [
            {
                id: "batch11_topic8_arpanet_Q1",
                question: "Why did the US military originally create ARPANET (the precursor to the Internet)?",
                options: [
                    "To share cat videos.",
                    "To create a decentralized communications network that could survive a nuclear attack.",
                    "To help universities save money.",
                    "To spy on citizens."
                ],
                correctAnswer: "B",
                explanation: "The passage notes: 'needed a communications network that could survive a nuclear attack... They needed a decentralized network.'"
            }
        ]
    },
    {
        id: "batch11_topic9_flow_state",
        taskType: "academic",
        title: "Positive Psychology: Csikszentmihalyi’s 'Flow' State",
        passage: `
**Rhetorical Structure:** theory/condition
**Dominant TOEFL Skill:** Prose Summary

Psychologist Mihaly Csikszentmihalyi spent his career asking: "When are people most happy?" He discovered that it wasn't when they were relaxing or consuming. It was when they were struggling. He coined the term *Flow* (or "The Zone") to describe this state of optimal experience.

low is a state of deep absorption in an activity. [A] You lose track of time. You lose your sense of self (ego). The action and awareness merge.

The key condition for Flow is the balance between **Challenge** and **Skill**.
*   If the challenge is too high and skill is low = **Anxiety**.
*   If the challenge is too low and skill is high = **Boredom**.
*   If both match at a high level = **Flow**. [B]

A video game is a flow machine. It gets harder exactly as you get better. If it stayed easy, you'd quit.

Csikszentmihalyi found that Flow is autotelic (rewarding in itself). A painter enters flow not for the money, but for the act of painting. [C]

This challenges the idea that "leisure" is the goal of life. People report more flow at work than on vacation. [D] The passive consumption of TV creates "apathy," the opposite of flow. Happiness, therefore, is an active state of mastery, not a passive state of pleasure.
    `.trim(),
        questions: [
            {
                id: "batch11_topic9_flow_state_Q1",
                question: "According to Csikszentmihalyi, what combination of factors creates the 'Flow' state?",
                options: [
                    "Low skill and low challenge.",
                    "High skill and low challenge.",
                    "When high challenge is matched by high skill.",
                    "Relaxing on the beach."
                ],
                correctAnswer: "C",
                explanation: "The text states: 'If both match at a high level = **Flow**.'"
            }
        ]
    },
    {
        id: "batch11_topic10_big_bang_cmb",
        taskType: "academic",
        title: "Evidence for the Big Bang: The Cosmic Microwave Background",
        passage: `
**Rhetorical Structure:** Discovery/Evidence
**Dominant TOEFL Skill:** Inference

In the 1940s, there were two competing theories of the universe: The "Steady State" (it has always existed) and the "Big Bang" (it started in an explosion). The Big Bang theory made a specific prediction: the heat from the explosion should still be there.

The early universe was a hot, dense fog of plasma. [A] As it expanded, it cooled. The light from that early fire should still be traveling through space, but stretched by expansion into invisible microwaves.

In 1964, two radio astronomers, Penzias and Wilson, built a sensitive antenna in New Jersey. They heard a persistent hiss. [B] It came from everywhere, day and night. They thought it was pigeon poop on the antenna. They cleaned it. The hiss remained.

They had accidentally discovered the *Cosmic Microwave Background* (CMB). It is the afterglow of creation. [C] It corresponds to a temperature of 2.7 Kelvin, exactly what the Big Bang math predicted.

This killed the Steady State theory. The universe had a beginning.

Later satellites (COBE, Planck) mapped this noise. It is not perfectly smooth. There are tiny fluctuations. [D] These tiny clumps of higher density became the seeds that gravity pulled together to form the first galaxies. Without those imperfections in the baby universe, we would not exist.
    `.trim(),
        questions: [
            {
                id: "batch11_topic10_big_bang_cmb_Q1",
                question: "What was the significance of the discovery of the 'Cosmic Microwave Background' (CMB)?",
                options: [
                    "It proved aliens exist.",
                    "It disproved the Big Bang.",
                    "It confirmed the Big Bang theory by detecting the predicted heat afterglow of the early universe.",
                    "It showed the universe is shrinking."
                ],
                correctAnswer: "C",
                explanation: "The passage explains: 'It is the afterglow of creation... This killed the Steady State theory. The universe had a beginning.'"
            }
        ]
    },
    {
        id: "batch11_topic11_hunter_gatherers",
        taskType: "academic",
        title: "The 'Original Affluent Society': Re-evaluating Hunter-Gatherers",
        passage: `
**Rhetorical Structure:** Theory/Counter-Intuitive
**Dominant TOEFL Skill:** Rhetorical Purpose

The traditional view of Hunter-Gatherer life (the Paleolithic) was Hobbesian: "nasty, brutish, and short." We assumed they lived on the edge of starvation, working constantly to find food. The Agricultural Revolution was seen as our rescue.

In the 1960s, anthropologist Marshall Sahlins challenged this with his theory of the "Original Affluent Society." [A]

He studied modern foragers like the !Kung (Bushmen) of the Kalahari. He found they only worked 15-20 hours a week to meet their nutritional needs. [B] The rest of the time they spent sleeping, gossiping, and playing.

In contrast, modern industrial humans work 40+ hours, plus commute.

Sahlins argued that "Affluence" (being rich) has two paths:
1.  **Galbraithean Way:** Want much, produce much (Modern).
2.  **Zen Way:** Want little. (Forager).

If your wants are few and easily met, you are rich. [C] The hunter-gatherers had no desire to hoard stuff because they were nomadic—carrying stuff is a burden.

However, critics note that while they had free time, they had high infant mortality and no medicine. [D] Sahlins may have romanticized the "Noble Savage." Yet, the theory forces us to question if "Progress" has actually improved our quality of life or just increased our workload.
    `.trim(),
        questions: [
            {
                id: "batch11_topic11_hunter_gatherers_Q1",
                question: "Why did Marshall Sahlins call hunter-gatherers the 'Original Affluent Society'?",
                options: [
                    "They had lots of gold.",
                    "They lived in palaces.",
                    "Because their wants were limited and easily met, allowing them to work far fewer hours than modern humans.",
                    "Because they farmed efficiently."
                ],
                correctAnswer: "C",
                explanation: "The text states: 'He found they only worked 15-20 hours a week... If your wants are few and easily met, you are rich.'"
            }
        ]
    },
    {
        id: "batch11_topic12_brutalism",
        taskType: "academic",
        title: "Brutalism: The Ethics of Concrete Architecture",
        passage: `
**Rhetorical Structure:** Context/Style
**Dominant TOEFL Skill:** Vocabulary in Context

Brutalism is perhaps the most hated architectural style in history. Emerging in the 1950s, it is characterized by massive, fortress-like structures made of raw, unpainted concrete. People call it "ugly," "soviet," and "soulless." But the architects (like Le Corbusier) had a noble, ethical agenda.

The name comes from the French *béton brut*, meaning "raw concrete." [A] It was about *Honesty*.

After WWII, Europe was in ruins. Architects wanted to rebuild society without the lies of the past. No more fake marble columns. No more decoration. [B] They wanted to show the materials as they were. If a building was held up by concrete, you should see the concrete, rough textures and all.

It was also about *Socialism*. Concrete was cheap and democratic. [C] Brutalism was used for public housing, universities, and government buildings. It was meant to project strength and permanence for the welfare state.

The style failed not because of the philosophy, but because of the weather. [D] In rainy England, raw concrete stains and streaks. It looks depressing and dystopian (think *A Clockwork Orange*). It became a symbol of bureaucratic oppression rather than liberation. Today, however, it is seeing a hipster revival, appreciated for its sculptural power and "monumental" weight.
    `.trim(),
        questions: [
            {
                id: "batch11_topic12_brutalism_Q1",
                question: "What was the core ethical philosophy behind 'Brutalism' in architecture?",
                options: [
                    "To be as ugly as possible.",
                    "Honesty of materials; showing the raw concrete ('béton brut') without decoration or lies.",
                    "To use expensive marble.",
                    "To mimic Greek temples."
                ],
                correctAnswer: "B",
                explanation: "The passage notes: 'It was about *Honesty*... They wanted to show the materials as they were.'"
            }
        ]
    },
    {
        id: "batch11_topic13_spanish_flu",
        taskType: "academic",
        title: "The 1918 Influenza Pandemic: The Forgotten Plague",
        passage: `
**Rhetorical Structure:** Narrative/Anomaly
**Dominant TOEFL Skill:** Factual Information

The 1918 Flu Pandemic (misnamed the "Spanish Flu") killed 50 to 100 million people—more than WWI itself. It is the greatest medical holocaust in history. Yet, for decades, it was forgotten by history books.

It was uniquely terrifying because of its target. [A] Normal flu kills the weak: the very young and the very old (a "U-shaped" curve). The 1918 flu killed the strong: healthy adults aged 20-40 (a "W-shaped" curve).

The cause was a "Cytokine Storm." [B] The virus provoked an immune system reaction. The *stronger* your immune system, the stronger the reaction. The body attacked the virus so violently that it filled the lungs with fluid, drowning the patient. Young adults had the strongest immune systems, so they died fastest.

Why "Spanish"? Spain was neutral in WWI. [C] The combatant nations (US, UK, Germany) censored the news to keep up morale. They didn't report the plague. Spain had a free press, so they reported it. The world assumed it started in Spain. In reality, it likely started in Kansas.

The movement of troops spread it globally. [D] It killed faster often within 24 hours of first symptoms. It fundamentally created the modern public health system, but its lesson—that a virus travels as fast as humans do—remains our primary threat today.
    `.trim(),
        questions: [
            {
                id: "batch11_topic13_spanish_flu_Q1",
                question: "Why did the 1918 Flu kill so many healthy young adults compared to normal flus?",
                options: [
                    "They didn't wash their hands.",
                    "Their strong immune systems triggered a 'Cytokine Storm' that drowned their lungs in fluid.",
                    "They were malnourished.",
                    "The virus only targeted young people."
                ],
                correctAnswer: "B",
                explanation: "The text explains: 'The virus provoked an immune system reaction. The *stronger* your immune system, the stronger the reaction... Young adults... died fastest.'"
            }
        ]
    },
    {
        id: "batch11_topic14_semiconductors",
        taskType: "academic",
        title: "Semiconductors: The Physics of Doping",
        passage: `
**Rhetorical Structure:** Mechanism/Process
**Dominant TOEFL Skill:** Sentence Insertion

Materials are typically conductors (copper) or insulators (rubber). A *Semiconductor* (Silicon) is strictly in the middle. It conducts electricity poorly. This mediocrity makes it the most useful material on earth, because its conductivity can be *controlled*.

Pure Silicon is a crystal lattice. Each atom shares 4 electrons with neighbors. It is stable and boring. To make it work, we must introduce an impurity. This is called *Doping*.

**N-Type Doping:** If we add Phosphorus (which has 5 electrons), there is one extra electron floating around. [A] This electron is free to move. The material becomes Negative (N-type) and conducts current.

**P-Type Doping:** If we add Boron (which has 3 electrons), there is a hole (a missing electron). [B] This "hole" acts like a positive charge. Electrons jump into the hole, leaving a new hole behind. The "hole" moves. The material becomes Positive (P-type).

The magic happens when you touch N-type and P-type together: a *P-N Junction*. [C]
Current can flow one way (forward), but not the other (reverse). It acts as a one-way valve (Diode).

By stacking them (N-P-N), you create a *Transistor*. [D] You can use a small current in the middle to block or allow a huge current across the whole thing. It is a switch. This simple atomic sandwich is the bit (1 or 0) of every computer.
    `.trim(),
        questions: [
            {
                id: "batch11_topic14_semiconductors_Q1",
                question: "In semiconductor physics, what is the effect of 'P-Type Doping'?",
                options: [
                    "It makes the silicon conductive by adding extra electrons.",
                    "It creates 'holes' (missing electrons) that act as mobile positive charges.",
                    "It melts the silicon.",
                    "It turns silicon into gold."
                ],
                correctAnswer: "B",
                explanation: "The passage states: 'If we add Boron... there is a hole... This \"hole\" acts like a positive charge... The material becomes Positive (P-type).'"
            }
        ]
    },
    {
        id: "batch11_topic15_virus_bacteria",
        taskType: "academic",
        title: "Microbiology: The Difference Between Viruses and Bacteria",
        passage: `
**Rhetorical Structure:** Comparison/Contrast
**Dominant TOEFL Skill:** Negative Factual Information

People often confuse viruses and bacteria ("germs"), but biologically, they are as different as a rock and a giraffe.

**Bacteria** are life. [A] They are single-celled organisms. They eat, they respire, they move, and they reproduce on their own (fission). They are complex machines with organelles. You can kill them with antibiotics (which break their machinery). Most are harmless or beneficial (gut flora); only a few cause disease.

**Viruses** are... ambiguous. They are *not* alive by the standard definition. [B] They are just a snippet of genetic code (DNA or RNA) wrapped in a protein box. They cannot eat. They cannot reproduce on their own. They are "obligate parasites."

A virus is information waiting for a reader. It floats until it touches a cell. [C] It injects its code. The cell reads the code and is hijacked. The cell stops its normal job and becomes a virus factory, churning out copies until it pops.

This explains why antibiotics don't work on the flu. [D] You cannot "kill" a virus because it isn't alive. Antibiotics poison bacterial walls; viruses have no walls and no metabolism to poison. To stop a virus, you need antivirals (which gum up the copying mechanism) or vaccines (which teach the body to destroy the box before it opens).
    `.trim(),
        questions: [
            {
                id: "batch11_topic15_virus_bacteria_Q1",
                question: "Why are antibiotics ineffective against viruses?",
                options: [
                    "Viruses are too small.",
                    "Viruses run away.",
                    "Viruses are not alive and lack the cell walls or metabolism that antibiotics target.",
                    "Antibiotics only work on weekends."
                ],
                correctAnswer: "B",
                explanation: "The text explains: 'You cannot \"kill\" a virus because it isn't alive. Antibiotics poison bacterial walls; viruses have no walls and no metabolism.'"
            }
        ]
    },
    {
        id: "batch11_topic16_cubism",
        taskType: "academic",
        title: "Cubism: Picasso and the End of Perspective",
        passage: `
**Rhetorical Structure:** Theory/Style
**Dominant TOEFL Skill:** Prose Summary

For 500 years, since the Renaissance, Western art was obsessed with *Linear Perspective*. The canvas was a window: it attempted to create the illusion of 3D depth on a 2D surface from a single, fixed viewpoint.

In 1907, Pablo Picasso and Georges Braque broke the window. They invented *Cubism*.

They argued that perspective is a lie. [A] We don't see objects from one fixed point; we move around them. Our mind creates a composite image of the front, back, and sides.

Cubism attempts to paint the "concept" of the object, not the "view." [B] In a Cubist portrait, you might see the nose in profile but the eyes looking straight at you. You see the coffee cup from the side and the top simultaneously. It fractures the object into geometric planes (cubes).

They were influenced by Paul Cézanne and African masks. [C]

The movement evolved. "Analytical Cubism" (early) was grey and difficult to decipher—it looked like broken glass. "Synthetic Cubism" (later) introduced collage—sticking newspaper and wallpaper onto the canvas.

This was the first abstract art. [D] It stated that a painting is not a mirror of reality; it is a reality in itself. It paved the way for pure abstraction (Mondrian, Pollock), proving that art didn't need to look like "things" to convey truth.
    `.trim(),
        questions: [
            {
                id: "batch11_topic16_cubism_Q1",
                question: "How did Cubism challenge the traditional art of the Renaissance?",
                options: [
                    "It used more colors.",
                    "It rejected 'Linear Perspective' and the single fixed viewpoint, showing objects from multiple angles simultaneously.",
                    "It only painted cubes.",
                    "It refused to use paint."
                ],
                correctAnswer: "B",
                explanation: "The passage notes: 'They argued that perspective is a lie... Cubism attempts to paint the \"concept\"... You see the coffee cup from the side and the top simultaneously.'"
            }
        ]
    },
    {
        id: "batch11_topic17_space_race",
        taskType: "academic",
        title: "The Geopolitics of the Space Race: Sputnik",
        passage: `
**Rhetorical Structure:** Cause-Effect/Context
**Dominant TOEFL Skill:** Inference

The Space Race was not about exploration; it was about missiles. The same rocket that puts a human in orbit can put a nuclear warhead in New York. On October 4, 1957, the Soviet Union launched *Sputnik 1*, the first artificial satellite. It was a metal beach ball that did nothing but beep.

But that beep terrified America. [A] It meant the Soviets were ahead. It resulted in the "Sputnik Crisis." The US public felt vulnerable. If they have a rocket powerful enough to go to space, they can nuke us.

The US government panicked. The result was massive investment.
1.  **NASA:** Formed in 1958 to organize the chaotic US efforts.
2.  **Education:** The NDEA (National Defense Education Act) poured billions into science and math education. [B] If you learned calculus in the 1960s, it was because of Sputnik.

The race culminated in the Apollo Moon Landing (1969). [C] Ironically, the moon was a strategic dead end. It had no military value. But the *prestige* was everything. By landing on the moon, the US proved its system (Capitalism/Democracy) was technologically superior to Communism.

Once the point was proved, the funding dried up. [D] The Space Race ended not with a treaty, but with a handshake in orbit (Apollo-Soyuz, 1975), turning the cosmos from a battleground back into a frontier.
    `.trim(),
        questions: [
            {
                id: "batch11_topic17_space_race_Q1",
                question: "What was a major educational consequence of the 'Sputnik Crisis' in the US?",
                options: [
                    "Schools stopped teaching science.",
                    "The NDEA poured billions into science and math education to catch up with the Soviets.",
                    "Russian became a mandatory language.",
                    "School days became shorter."
                ],
                correctAnswer: "B",
                explanation: "The text states: 'The NDEA (National Defense Education Act) poured billions into science and math education.'"
            }
        ]
    },
    {
        id: "batch11_topic18_deviance",
        taskType: "academic",
        title: "Sociology of Deviance: Labeling Theory",
        passage: `
**Rhetorical Structure:** Theory/Paradox
**Dominant TOEFL Skill:** Prose Summary

What makes an act "criminal" or "deviant"? Is it the act itself, or the reaction to it? *Labeling Theory* (Howard Becker, 1963) argues the latter. It states that deviance is not a quality of the behavior, but a consequence of the rules applied by others.

Becker famously said, "The deviant is one to whom that label has been successfully applied."

Consider two teenagers smoking marijuana. [A]
Teen A (middle class, suburban) is caught by police. The officer calls his parents and lets him go with a warning ("Boys will be boys"). He is not labeled. He grows up to be a lawyer.
Teen B (poor, urban) is caught. He is arrested, charged, and labeled a "criminal" or "junkie."

Once the label is applied, it becomes a *Self-Fulfilling Prophecy*. [B]
Teen B is treated effectively as a criminal. He can't get a job. Respectable people shun him. His only friends are other "criminals." He is forced into secondary deviance (more crime) to survive. The system created the criminal.

This is the concept of "Master Status." [C] The label overrides all other identities. You are no longer a "father" or "mechanic"; you are a "Felon."

Critics argue Labeling Theory ignores moral responsibility—murder is wrong regardless of the label. [D] However, the theory was crucial in reforming juvenile justice, emphasizing diversion programs to avoid branding young people with permanent "scarlet letters."
    `.trim(),
        questions: [
            {
                id: "batch11_topic18_deviance_Q1",
                question: "According to 'Labeling Theory,' what happens when a person is successfully labeled a deviant?",
                options: [
                    "They become famous.",
                    "The label becomes a 'Self-Fulfilling Prophecy' or 'Master Status,' forcing them into further deviance to survive.",
                    "They convert to religion.",
                    "Nothing happens."
                ],
                correctAnswer: "B",
                explanation: "The passage explains: 'Once the label is applied, it becomes a *Self-Fulfilling Prophecy*... He is forced into secondary deviance... The system created the criminal.'"
            }
        ]
    },
    {
        id: "batch11_topic19_high_speed_rail",
        taskType: "academic",
        title: "Transportation Engineering: The Physics of Maglev Trains",
        passage: `
**Rhetorical Structure:** Mechanism/Advantage
**Dominant TOEFL Skill:** Factual Information

Traditional high-speed trains (like the TGV or Shinkansen) have a physical limit. They run on steel wheels. At speeds over 350 km/h, the friction, vibration, and noise become unmanageable. The wheels slip; the pantograph (power cable) sparks. To go faster, you must eliminate contact. You need *Maglev* (Magnetic Levitation).

Maglev uses electromagnets to lift and propel the train. There are no wheels, no axles, no engine. The train floats 10mm to 100mm above the guideway.

**Levitation:** [A] Powerful magnets on the track repel magnets on the train. (Recall that like poles repel). Ideally, superconductors are used (see Batch 8) to create strong enough fields.

**Propulsion:** The track itself is the motor. [B] It is a "Linear Motor." By rapidly switching the polarity of the magnets in the track (North-South-North), the magnetic field pulls the train from the front and pushes it from behind. The wave of magnetism surfs the train forward.

**Advantages:**
1.  **Speed:** The Shanghai Maglev hits 430 km/h. The Japan L0 Series hit 603 km/h.
2.  **Maintenance:** No friction means no wear and tear on bits. [C]
3.  **Climbing:** Maglevs can climb steeper hills than wheel-trains (which rely on grip).

**Disadvantages:**
Cost. [D] You aren't just building a track; you are building a massive, precision-engineered machine that stretches for hundreds of miles. The infrastructure cost is 2-3x that of standard rail, which is why, despite the tech being 50 years old, few lines exist.
    `.trim(),
        questions: [
            {
                id: "batch11_topic19_high_speed_rail_Q1",
                question: "What is the primary disadvantage of Maglev trains described in the passage?",
                options: [
                    "They are too slow.",
                    "They are too loud.",
                    "The astronomical cost of infrastructure.",
                    "They are dangerous."
                ],
                correctAnswer: "C",
                explanation: "The text notes: 'Disadvantages: Cost... The infrastructure cost is 2-3x that of standard rail.'"
            }
        ]
    },
    {
        id: "batch11_topic20_eye_evolution",
        taskType: "academic",
        title: "Convergent Evolution: The Evolution of the Eye",
        passage: `
**Rhetorical Structure:** Argument/Evidence
**Dominant TOEFL Skill:** Inference

Creationists often pointed to the Human Eye as proof of God. "What good is half an eye?" they asked. It seemed too complex (Irreducible Complexity) to have evolved by chance. Darwin himself admitted only that the thought of the eye made him "shudder." However, evolutionary biology has solved the puzzle. The eye didn't evolve once; it evolved independently at least 40 times. This is *Convergent Evolution*.

The steps are clear in living animals today.
1.  **Photoreceptor:** A simple patch of light-sensitive cells (Euglena). It can tell light from dark. [A]
2.  **Cup Eye:** If the patch dents into a cup shape (Planaria worm), you can tell direction. The cup casts a shadow.
3.  **Pinhole Eye:** If the opening narrows (Nautilus), it creates a focused image, though dim. No lens needed.
4.  **Lens Eye:** A clear slime covers the hole to protect it. [B] If the slime hardens, it bends light (refraction), focusing the image brightly. This is the eye of the Human and the Octopus.

Crucially, the Human Eye and the Octopus Eye look identical but are built differently. [C]
In humans, the nerve fibers are *in front* of the retina, creating a Blind Spot. It’s a "bad design" left over from our fish ancestors.
In octopuses, the nerves are *behind* the retina. No blind spot.

They arrived at the same solution (camera eye) from different starting points because physics dictates that a lens is the best way to form an image. [D] Evolution is pragmatic; it finds the best engineering solution given the available parts.
    `.trim(),
        questions: [
            {
                id: "batch11_topic20_eye_evolution_Q1",
                question: "What is a key difference between the Human eye and the Octopus eye?",
                options: [
                    "Octopuses have no eyes.",
                    "The Human eye has nerve fibers *in front* of the retina (creating a blind spot), while the Octopus eye has them *behind*.",
                    "The Octopus eye uses a mirror instead of a lens.",
                    "The Human eye is square."
                ],
                correctAnswer: "B",
                explanation: "The passage compares them: 'In humans, the nerve fibers are *in front*... creating a Blind Spot... In octopuses, the nerves are *behind*... No blind spot.'"
            }
        ]
    }
];
