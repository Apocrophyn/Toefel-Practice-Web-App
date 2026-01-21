
import { AcademicQuestion } from "./reading-2026";

export const batch6Passages: AcademicQuestion[] = [
    {
        id: "batch6_topic1_rainbows",
        taskType: "academic",
        title: "The Physics of Rainbows: Refraction, Reflection, and Dispersion",
        passage: `
**Rhetorical Structure:** Mechanism/Condition
**Dominant TOEFL Skill:** Factual Information

A rainbow is not an object; it is an optical phenomenon caused by the interaction of sunlight and water droplets. For a rainbow to appear, specific geometric conditions must be met: the sun must be behind the observer, and rain must be in front. The phenomenon relies on three physical processes: refraction, internal reflection, and dispersion.

As a ray of sunlight enters a spherical raindrop, it slows down and bends. [A] This is *refraction*. Because white light is composed of different colors (wavelengths), and different wavelengths bend at slightly different angles, the light separates. Violet light bends the most; red light bends the least. This separation is called *dispersion*.

Once the light is inside the drop, it travels to the back surface. [B] Instead of passing through, it bounces off the back wall like a mirror. This is *internal reflection*.

Finally, the light exits the front of the drop. As it leaves, it refracts again, spreading the colors further apart. [C] The light exits at a precise angle of roughly 42 degrees relative to the incoming sunlight. This constant angle is why the rainbow forms a circular arc.

We see a band of colors because different drops send different colors to our eyes. [D] Higher drops direct red light to the eye, while lower drops direct violet light. Thus, a rainbow is a mosaic of light from millions of individual prisms.
    `.trim(),
        questions: [
            {
                id: "batch6_topic1_rainbows_Q1",
                question: "According to the passage, why does a rainbow appear as a band of separated colors?",
                options: [
                    "Because the sun is blinking.",
                    "Because different raindrops at different heights send different wavelengths (colors) to the observer's eye.",
                    "Because the wind blows the colors apart.",
                    "Because the water is dirty."
                ],
                correctAnswer: "B",
                explanation: "The passage explains: 'We see a band of colors because different drops send different colors to our eyes. Higher drops direct red light... while lower drops direct violet light.'"
            }
        ]
    },
    {
        id: "batch6_topic2_potato_history",
        taskType: "academic",
        title: "The Impact of the Potato on European Demographics",
        passage: `
**Rhetorical Structure:** Cause-Effect/History
**Dominant TOEFL Skill:** Inference

The introduction of the potato to Europe from the Andes in the 16th century is a prime example of the "Columbian Exchange." Initially viewed with suspicion (it was thought to cause leprosy because it grew underground), the potato eventually revolutionized European agriculture and fueled a massive population boom.

The potato’s advantage over traditional grains (wheat, rye) was caloric density. [A] A single acre of potatoes could yield four times the calories of an acre of wheat. Furthermore, potatoes were nutritious, providing ample carbohydrates and vitamins. This allowed farmers to support larger families on smaller plots of land.

The vegetable was particularly embraced in Ireland. [B] Under British rule, Irish Catholics were pushed onto marginal, rocky land. The potato thrived in this cool, wet soil where wheat would rot. By 1840, the potato had become a monoculture—the sole food source for one-third of the population.

This dependence proved fatal. [C] In 1845, a fungus called *Phytophthora infestans* (potato blight) arrived from America. Because all Irish potatoes were genetically identical clones, they had no resistance. The crop turned to black slime. The resulting Great Famine killed one million people and forced another million to emigrate, permanently altering the demographics of both Ireland and the United States.

The potato illustrates the double-edged sword of agricultural simplification: it offers efficiency and growth, but creates vulnerability to biological catastrophe. [D]
    `.trim(),
        questions: [
            {
                id: "batch6_topic2_potato_history_Q1",
                question: "How did the biological nature of the Irish potato crop contribute to the Great Famine?",
                options: [
                    "The potatoes were poisonous.",
                    "The potatoes were too small to eat.",
                    "Because all potatoes were genetically identical clones, the entire crop had zero resistance to the blight fungus.",
                    "The soil was too dry for potatoes."
                ],
                correctAnswer: "C",
                explanation: "The text states: 'Because all Irish potatoes were genetically identical clones, they had no resistance. The crop turned to black slime.'"
            }
        ]
    },
    {
        id: "batch6_topic3_flashbulb_memory",
        taskType: "academic",
        title: "The Psychology of Flashbulb Memories: Accuracy vs. Confidence",
        passage: `
**Rhetorical Structure:** Theory/Counter-Evidence
**Dominant TOEFL Skill:** Prose Summary

A "Flashbulb Memory" is a highly detailed, exceptionally vivid 'snapshot' of the moment and circumstances in which a piece of surprising and consequential (or emotionally arousing) news was heard. The term was coined by Brown and Kulik in 1977, focusing on the assassination of JFK. Most people feel they remember exactly where they were, who they were with, and what they were wearing during such events (e.g., 9/11 or the Moon Landing).

Brown and Kulik proposed that these memories are created by a special neural mechanism—a "Now Print!" mechanism—that permanently records the scene like a photograph. [A] This implies that flashbulb memories are immune to the decay and distortion that affect normal memories.

However, subsequent research has challenged the *accuracy* of these memories. [B] Neisser and Harsch (1992) interviewed students immediately after the Challenger explosion and then again three years later. They found that while the students remained 100% *confident* in their memories, their accounts had changed drastically. They remembered being in different places with different people.

The "Flashbulb" metaphor is therefore misleading. The memory is not a photograph; it is a reconstruction. [C] The vividness comes from the emotional intensity and the fact that we rehearse the story repeatedly. We tell others "Where were you?" and in retelling, we unknowingly edit and overwrite the original memory.

Thus, flashbulb memories exhibit a unique paradox: they are no more accurate than regular memories, but we *believe* in them far more fervently. [D] They tell us less about the past event and more about the human need to anchor personal identity to public history.
    `.trim(),
        questions: [
            {
                id: "batch6_topic3_flashbulb_memory_Q1",
                question: "What did the study by Neisser and Harsch reveal about 'Flashbulb Memories'?",
                options: [
                    "They are perfectly accurate, like a photograph.",
                    "They fade away completely after a year.",
                    "While people remain highly *confident* in them, their *accuracy* declines significantly over time.",
                    "Only women have them."
                ],
                correctAnswer: "C",
                explanation: "The passage notes: 'while the students remained 100% *confident* in their memories, their accounts had changed drastically.'"
            }
        ]
    },
    {
        id: "batch6_topic4_gothic_cathedrals",
        taskType: "academic",
        title: "Structural Innovations of Gothic Architecture: The Flying Buttress",
        passage: `
**Rhetorical Structure:** Problem-Solution/Description
**Dominant TOEFL Skill:** Vocabulary in Context

The transition from Romanesque to Gothic architecture in the 12th century was driven by a theological desire: "Height is Light." Architects wanted to build churches that reached for the heavens and were filled with divine light. However, the existing Romanesque style used thick, heavy walls to support the roof, which meant windows had to be small and few. To build higher and open up the walls for stained glass, engineers needed a new structural system.

The vertical weight of a stone roof pushes the walls outward (lateral thrust). [A] If you cut a hole in the wall for a window, the wall collapses. The Gothic solution was the *Flying Buttress*.

A buttress is a support built against a wall. A *flying* buttress is an external arch that springs from a detached pier and meets the wall at the point of maximum stress. [B] It effectively props up the building from the outside, like a kickstand.

This external skeleton meant the walls no longer had to carry the weight of the roof. The weight was transferred through the flying buttresses to the ground. [C] Consequently, the walls could be dissolved. They could be replaced by vast sheets of colored glass.

Combined with the *Pointed Arch* (which directs weight more vertically than a round arch) and the *Ribbed Vault* (which lightens the ceiling), the flying buttress allowed cathedrals like Notre-Dame and Chartres to rise to dizzying heights. [D] The stone seemed to defy gravity, creating an interior space that felt miraculous, achieving the "dematerialization" of stone into light.
    `.trim(),
        questions: [
            {
                id: "batch6_topic4_gothic_cathedrals_Q1",
                question: "What was the primary structural function of the 'Flying Buttress'?",
                options: [
                    "To decorate the outside of the church.",
                    "To collect rainwater.",
                    "To transfer the lateral weight of the roof to the ground, allowing for thinner walls and larger windows.",
                    "To prevent birds from nesting."
                ],
                correctAnswer: "C",
                explanation: "The text explains: 'It effectively props up the building from the outside... This [structure] meant the walls no longer had to carry the weight of the roof... Consequently, the walls could be dissolved.'"
            }
        ]
    },
    {
        id: "batch6_topic5_cicada_cycles",
        taskType: "academic",
        title: "The Evolutionary Logic of Periodical Cicadas",
        passage: `
**Rhetorical Structure:** Phenomenon/Hypothesis
**Dominant TOEFL Skill:** Sentence Insertion

Periodical cicadas (genus *Magicicada*) are one of nature's great mysteries. These insects spend almost their entire lives underground as nymphs, feeding on tree roots. Then, in a synchronized mass emergence, they surface, molt, mate, lay eggs, and die, all within a few weeks. Most remarkably, their life cycles are exclusively prime numbers: 13 years or 17 years. Why these specific, long intervals?

The leading hypothesis is "Predator Satiation." [A] By emerging in billions—densities can reach 1.5 million per acre—the cicadas overwhelm their predators. Birds, squirrels, and wasps eat until they are full, but they cannot make a dent in the swarm. The remaining cicadas survive to breed. It is safety in numbers on a massive scale.

But why prime numbers? This is likely a mathematical defense against "cycling predators." [B] Suppose a predator species has a population boom every 2, 4, or 5 years. If cicadas emerged every 12 years, they would coincide with 2-year, 3-year, 4-year, and 6-year predator cycles. By choosing a large prime number like 17, they minimize the chance of synchronization. A predator with a 5-year cycle will only meet the 17-year cicada once every 85 years (5 x 17).

This prevents predators from evolving to specialize on cicadas. [C] The cicada emerges so rarely that no predator can depend on it as a food source.

The mechanism for this internal clock is thought to be molecular, linked to the tree's seasonal sap flow. [D] The nymphs "count" the years by sensing the changes in the root fluid. When the count reaches 17, the genetic alarm goes off, triggering the invasion.
    `.trim(),
        questions: [
            {
                id: "batch6_topic5_cicada_cycles_Q1",
                question: "Why do scientists believe periodical cicadas evolved life cycles of prime numbers (13 and 17 years)?",
                options: [
                    "To match the sun spots.",
                    "To minimize the chance of synchronizing with the population cycles of predators.",
                    "Because they need that long to grow wings.",
                    "Because prime numbers are lucky."
                ],
                correctAnswer: "B",
                explanation: "The passage states: 'By choosing a large prime number like 17, they minimize the chance of synchronization... This prevents predators from evolving to specialize on cicadas.'"
            }
        ]
    },
    {
        id: "batch6_topic6_tulip_mania",
        taskType: "academic",
        title: "Dutch Tulip Mania: The First Economic Bubble",
        passage: `
**Rhetorical Structure:** Narrative/Analysis
**Dominant TOEFL Skill:** Factual Information

In the mid-1630s, the Dutch Republic was the wealthiest nation in Europe. Its citizens, flushed with cash from the spice trade, developed an obsession with a new luxury import: the tulip. This obsession spiraled into "Tulip Mania," generally considered the first recorded speculative bubble in history.

The tulip was prized for its intense color, specifically the "broken" patterns of stripes (actually caused by a virus). [A] As demand rose, prices skyrocketed. It wasn't just botanists buying; it was chimney sweeps, maids, and aristocrats. People sold their houses and land to buy tulip bulbs, hoping to sell them for a profit the next week.

At the peak in the winter of 1636-37, a single bulb of the *Semper Augustus* variety sold for the price of a luxury mansion in Amsterdam. [B] A futures market developed, where people bought and sold contracts for bulbs that were still in the ground ("wind trade").

The crash came in February 1637. At an auction in Haarlem, a seller failed to find a buyer. Panic spread instantly. [C] Everyone realized the prices were detached from reality—it was just an onion, after all. Prices collapsed by 90% in days.

While popular history depicts this as a national catastrophe that bankrupted the Netherlands, economic historians now argue the damage was contained. [D] The "futures" contracts were mostly informal bets among friends in taverns, and few were actually enforced by courts. The Dutch economy kept growing. However, Tulip Mania remains a potent psychological symbol of the "greater fool theory"—the belief that you can pay too much for something as long as there is a greater fool willing to pay even more.
    `.trim(),
        questions: [
            {
                id: "batch6_topic6_tulip_mania_Q1",
                question: "Why do modern economic historians argue that the damage from the 'Tulip Mania' crash was contained?",
                options: [
                    "Because the government bailed everyone out.",
                    "Because the tulips ultimately grew back.",
                    "Because most of the high-value 'futures' contracts were informal bets between individuals and were never legally enforced.",
                    "Because rich people didn't buy tulips."
                ],
                correctAnswer: "C",
                explanation: "The text notes: 'The \"futures\" contracts were mostly informal bets among friends in taverns, and few were actually enforced by courts. The Dutch economy kept growing.'"
            }
        ]
    },
    {
        id: "batch6_topic7_ozone_cfc",
        taskType: "academic",
        title: "Chemistry of the Stratosphere: CFCs and Ozone Depletion",
        passage: `
**Rhetorical Structure:** Process/Cause-Effect
**Dominant TOEFL Skill:** Sequence/Ordering

Ozone ($O_3$) is a paradox. At ground level, it is a pollutant that burns the lungs. In the stratosphere (10-50 km up), it is a shield. The "Ozone Layer" absorbs 98% of the sun's harmful ultraviolet (UV) radiation, making life on land possible. In the 1970s, scientists Mario Molina and Sherwood Rowland discovered that this shield was being eaten by man-made chemicals called Chlorofluorocarbons (CFCs).

CFCs were used in fridges, spray cans, and air conditioners. They were prized for being inert (chemically stable). [A] But this stability allowed them to drift, unreacted, all the way up to the stratosphere.

Once high in the atmosphere, the harsh UV radiation breaks the CFC molecule apart, releasing a Chlorine atom ($Cl$). [B] This Chlorine atom is a serial killer. It attacks an Ozone molecule ($O_3$), stealing one oxygen atom to form Chlorine Monoxide ($ClO$) and leaving behind normal Oxygen ($O_2$), which blocks no UV radiation.

The $ClO$ then collides with a free oxygen atom. [C] This collision releases the Chlorine atom back into the wild, free to attack another Ozone molecule. This is a "catalytic cycle." One single Chlorine atom can destroy 100,000 Ozone molecules before it is finally removed from the atmosphere.

This discovery led to the discovery of the "Ozone Hole" over Antarctica and the 1987 Montreal Protocol, a global treaty phasing out CFCs. [D] It remains the most successful international environmental agreement in history, proving that science can identify a planetary threat and diplomacy can solve it.
    `.trim(),
        questions: [
            {
                id: "batch6_topic7_ozone_cfc_Q1",
                question: "What happens when a CFC molecule reaches the stratosphere?",
                options: [
                    "It floats away into space.",
                    "It freezes into ice.",
                    "UV radiation breaks it apart, releasing a Chlorine atom that destroys Ozone.",
                    "It turns into oxygen."
                ],
                correctAnswer: "C",
                explanation: "The passage explains: 'Once high in the atmosphere, the harsh UV radiation breaks the CFC molecule apart, releasing a Chlorine atom ($Cl$). This Chlorine atom... attacks an Ozone molecule.'"
            }
        ]
    },
    {
        id: "batch6_topic8_potlatch",
        taskType: "academic",
        title: "The Potlatch Ceremony: Economic Redistribution in Indigenous NW Cultures",
        passage: `
**Rhetorical Structure:** Definition/Function
**Dominant TOEFL Skill:** Negative Factual Information

Among the indigenous peoples of the Pacific Northwest Coast (such as the Kwakwaka'wakw and Haida), social status was not determined by how much wealth one *possessed*, but by how much one could *give away*. This principle was enacted through the *Potlatch* (from the Chinook word for "to give").

A potlatch is a massive feast and gift-giving ceremony. [A] A chief invites guests from other clans. He feeds them and showers them with blankets, copper shields, canoes, and food. The more he gives, the greater his prestige (__mana__). If a chief gives away everything he owns and bankrupts himself, he gains the highest status of all.

This system served several functions. Economically, it was a redistribution mechanism. [B] It prevented the hoarding of wealth and ensured that resources (like salmon or cedar) circulated through the community. If one clan had a bad fishing year, they would be supported by the gifts from a neighbor's potlatch.

Socially, it validated hierarchy. Witnesses were required to remember the gifts; accepting a gift signaled acceptance of the giver's rank. [C]

In the late 19th century, the Canadian government banned the potlatch, seeing it as "wasteful" and contrary to the values of capitalism and private property. [D] Missionaries believed it encouraged idleness. The ban forced the ceremony underground for decades until it was repealed in 1951. Today, the potlatch has been revitalized, serving again as the central legal and economic institution of the culture, proving that wealth can be defined by generosity rather than accumulation.
    `.trim(),
        questions: [
            {
                id: "batch6_topic8_potlatch_Q1",
                question: "What was the primary way a Chief gained status in the Potlatch ceremony?",
                options: [
                    "By fighting other chiefs.",
                    "By giving away wealth and resources to his guests.",
                    "By hoarding the most blankets.",
                    "By building the biggest house."
                ],
                correctAnswer: "B",
                explanation: "The text states: 'social status was not determined by how much wealth one *possessed*, but by how much one could *give away*... If a chief gives away everything... he gains the highest status of all.'"
            }
        ]
    },
    {
        id: "batch6_topic9_transistor",
        taskType: "academic",
        title: "The Invention of the Transistor: The Switch That Changed the World",
        passage: `
**Rhetorical Structure:** Problem-Solution/Impact
**Dominant TOEFL Skill:** Inference

Before 1947, electronics relied on *vacuum tubes*. These were glass bulbs, like lightbulbs, that controlled the flow of electricity. They were used in radios and the first computers (ENIAC). However, tubes were bulky, fragile, generated immense heat, and burned out frequently. A computer using 18,000 tubes filled a room and broke down every few hours. The world hit a "complexity barrier."

The solution came from Bell Labs scientists Shockley, Bardeen, and Brattain. They invented the *transistor*. [A]

A transistor is a semiconductor device (usually made of silicon) that creates a solid-state switch. It has no moving parts and no glass bulb. It relies on the quantum properties of silicon crystals doped with impurities. A tiny electrical current applied to the "gate" can control a much larger current flowing through the device. [B] It can act as a switch (1 or 0) or an amplifier (making a signal louder).

The impact was immediate. Transistors were tiny, generated no heat, almost never broke, and cost pennies. [C] This allowed radios to shrink from furniture-sized cabinets to pocket-sized devices ("transistor radios").

More importantly, it allowed for *miniaturization*. Thousands, then millions, then billions of transistors could be etched onto a single chip (an Integrated Circuit). [D] Moore's Law—the observation that the number of transistors on a chip doubles every two years—is simply the story of shrinking this switch. Today, a modern smartphone processor contains over 15 billion transistors, a density of logic impossible with the vacuum tube.
    `.trim(),
        questions: [
            {
                id: "batch6_topic9_transistor_Q1",
                question: "How did the transistor overcome the 'complexity barrier' faced by vacuum tube computers?",
                options: [
                    "It was made of gold.",
                    "It was a tiny, solid-state device that generated no heat and was extremely reliable.",
                    "It used more electricity to run faster.",
                    "It was larger and easier to see."
                ],
                correctAnswer: "B",
                explanation: "The passage notes: 'Transistors were tiny, generated no heat, almost never broke... This allowed for *miniaturization*.'"
            }
        ]
    },
    {
        id: "batch6_topic10_fungi_foxfire",
        taskType: "academic",
        title: "Bioluminescence in Fungi: The Mystery of Foxfire",
        passage: `
**Rhetorical Structure:** Description/Hypothesis
**Dominant TOEFL Skill:** Rhetorical Purpose

While fireflies are the most famous light-emitters, the forest floor harbors a more ghostly glow: *Foxfire*. This bacterial-green luminescence is produced by certain species of wood-rotting fungi, particularly the Honey Mushroom (*Armillaria*). The light is emitted from the mycelium (the root-like network) and the fruiting body (mushroom). For centuries, Aristotle and others noted this "cold fire" on damp wood, but the biological reason for it remained a puzzle. Why would a mushroom waste energy glowing?

The chemical mechanism is similar to fireflies—luciferin and luciferase—but the evolutionary *function* is different.

One hypothesis is that the light attracts grazers. [A] Insects (like beetles and flies) see the light at night, land on the mushroom, and eat parts of it. In the process, they get covered in spores. When they fly away, they disperse the spores to new locations. It is a visual lure for dissemination.

Recent experiments support this. Artificial LED mushrooms placed in the forest attracted far more insects than dark control traps. [B]

Another hypothesis suggests the light is a warning signal (aposematism), telling animals that the fungus is toxic. [C] Or perhaps it is simply a metabolic byproduct—accidental chemistry used to detoxify peroxides produced during the digestion of wood, with the light being just waste energy.

Whatever the reason, Foxfire is a sign of a forest's health. [D] It indicates active decomposition, the recycling of dead trees into soil, illuminated by the faint, eerie breathing of the fungal network.
    `.trim(),
        questions: [
            {
                id: "batch6_topic10_fungi_foxfire_Q1",
                question: "According to the 'dissemination' hypothesis, why do some mushrooms glow (Foxfire)?",
                options: [
                    "To scare away predators.",
                    "To attract insects that will eat the mushroom and spread its spores.",
                    "To photosynthesize at night.",
                    "To keep the mushroom warm."
                ],
                correctAnswer: "B",
                explanation: "The text explains: 'Insects... see the light... eat parts of it. In the process, they get covered in spores. When they fly away, they disperse the spores.'"
            }
        ]
    },
    {
        id: "batch6_topic11_panama_canal",
        taskType: "academic",
        title: "The Construction of the Panama Canal: Engineering and Epidemiology",
        passage: `
**Rhetorical Structure:** Problem-Solution/History
**Dominant TOEFL Skill:** Factual Information

The dream of slicing the Americas in half to connect the Atlantic and Pacific Oceans dates back to the Spanish conquistadors. However, the French attempt in the 1880s failed catastrophically, defeated not by the rock, but by the jungle. 22,000 workers died, mostly from Yellow Fever and Malaria. When the United States took over the project in 1904, they realized that before they could dig the dirt, they had to kill the disease.

The Chief Sanitary Officer, Dr. William Gorgas, implemented a military-style campaign against the *mosquito*. [A] At the time, the "miasma theory" (bad air) was still popular, but Gorgas believed the new "germ theory" that mosquitoes were the vector.

He fumigated every house in Panama City. He drained swamps. [B] He poured oil on every puddle and pond to suffocate mosquito larvae. He screened windows and isolated the sick. It was the most expensive public health campaign in history. It worked. The transmission rate plummeted, and the workforce survived.

With the health crisis solved, the engineering could begin. The challenge was the Continental Divide. Instead of digging a distinct sea-level ditch (like the Suez Canal), Chief Engineer John Stevens designed a lock system. [C] They dammed the Chagres River to create a massive artificial lake (Gatun Lake) 85 feet above sea level.

Ships would be lifted up by three giant concrete locks, sail across the lake, and be lowered down the other side. [D] This reduced the amount of excavation required. Completed in 1914, the canal remains a testament to the fact that civil engineering is often dependent on biological engineering.
    `.trim(),
        questions: [
            {
                id: "batch6_topic11_panama_canal_Q1",
                question: "What crucial step did Dr. William Gorgas take before the construction of the Panama Canal could succeed?",
                options: [
                    "He designed the lock system.",
                    "He negotiated with the Panamanian government.",
                    "He implemented a massive campaign to eradicate mosquitoes, stopping Yellow Fever and Malaria.",
                    "He brought in steam shovels."
                ],
                correctAnswer: "C",
                explanation: "The passage states: 'Gorgas implemented a military-style campaign against the *mosquito*... The transmission rate plummeted, and the workforce survived.'"
            }
        ]
    },
    {
        id: "batch6_topic12_black_body",
        taskType: "academic",
        title: "The Ultraviolet Catastrophe and the Birth of Quantum Physics",
        passage: `
**Rhetorical Structure:** Paradox/Resolution
**Dominant TOEFL Skill:** Sentence Insertion

At the end of the 19th century, physics seemed complete. Newton's laws explained motion; Maxwell's equations explained light. However, there was one annoying loose end: the problem of "Black Body Radiation." A black body is an idealized object that absorbs all radiation. When heated, it emits light. As it gets hotter, the color shifts from red to yellow to blue (shorter wavelengths).

Classical physics predicted that as the wavelength got shorter (ultraviolet), the energy emitted should increase towards infinity. [A] This prediction was called the "Ultraviolet Catastrophe." It was absurd. If it were true, a toaster would emit enough X-rays to kill you every time you made breakfast.

The experimental data showed that the energy peaked and then dropped off in the UV range. Classical theory failed to match reality.

In 1900, German physicist Max Planck solved the problem with a desperate mathematical trick. [B] He assumed that energy was not a continuous stream (like water), but came in discrete little chunks or packets. He called these packets *quanta*.

He proposed the equation $E = hf$, where Energy equals a constant ($h$) times the frequency. This meant that high-frequency light (UV) required *large* chunks of energy. [C] At normal temperatures, there isn't enough thermal energy to create these huge chunks, so they aren't emitted. This suppresses the "catastrophe" and matches the curve perfectly.

Planck didn't believe his own idea was physical; he thought it was just math. [D] But Einstein took it seriously, proving that light *is* made of particles (photons). This moment—the quantization of energy—was the birth of Quantum Mechanics, the theory that rules the modern world.
    `.trim(),
        questions: [
            {
                id: "batch6_topic12_black_body_Q1",
                question: "How did Max Planck resolve the 'Ultraviolet Catastrophe'?",
                options: [
                    "By discovering the electron.",
                    "By assuming that energy is emitted in discrete packets (quanta) rather than a continuous stream.",
                    "By proving that light is a wave.",
                    "By cooling the black body down."
                ],
                correctAnswer: "B",
                explanation: "The text explains: 'He assumed that energy was not a continuous stream... but came in discrete little chunks... He called these packets *quanta*.'"
            }
        ]
    },
    {
        id: "batch6_topic13_magical_realism",
        taskType: "academic",
        title: "Magical Realism: Unveiling Reality through the Impossible",
        passage: `
**Rhetorical Structure:** Definition/Style
**Dominant TOEFL Skill:** Vocabulary in Context

Magical Realism is a literary genre often associated with Latin American authors like Gabriel García Márquez and Jorge Luis Borges. It is frequently misunderstood as fantasy. In fantasy (like *Harry Potter*), the magic is a separate world or a violation of natural law that surprises the characters. In Magical Realism, the supernatural is treated as mundane—a normal part of daily life.

In Márquez’s *One Hundred Years of Solitude*, a character ascends to heaven while folding laundry. [A] The neighbors don't scream; they are just annoyed that she took the sheets. A priest levitates after drinking hot chocolate. The tone is journalistic and matter-of-fact.

The purpose of this style is not escapism. It is a response to the post-colonial reality of Latin America. [B] In a continent marked by dictatorships, civil wars, and extreme geography, "rational" realism felt inadequate to describe the absurdity of existence. History itself felt unbelievable.

By blending the mythic with the realistic, these authors seek to reveal the *deeper* truth of a culture. [C] For an indigenous community, spirits and ancestors are not "fantasy"; they are present realities. Magical Realism validates this worldview.

It creates a "defamiliarization" effect. [D] By making the impossible seem normal, it forces the reader to look at the *normal* (poverty, violence, love) with fresh eyes, seeing the strangeness and wonder in the everyday. It suggests that reality is too complex to be captured by facts alone.
    `.trim(),
        questions: [
            {
                id: "batch6_topic13_magical_realism_Q1",
                question: "How does the genre of Magical Realism differ from Fantasy?",
                options: [
                    "Magical realism has no magic.",
                    "In Magical Realism, supernatural events are treated as mundane and normal parts of daily life.",
                    "Magical Realism is always scary.",
                    "Fantasy is only for children."
                ],
                correctAnswer: "B",
                explanation: "The passage states: 'In Magical Realism, the supernatural is treated as mundane—a normal part of daily life... The neighbors don't scream.'"
            }
        ]
    },
    {
        id: "batch6_topic14_transform_faults",
        taskType: "academic",
        title: "Plate Boundaries: The Mechanics of Transform Faults",
        passage: `
**Rhetorical Structure:** Classification/Mechanism
**Dominant TOEFL Skill:** Factual Information

Tectonic plates interact in three ways: they crash together (Convergent), pull apart (Divergent), or slide past each other. This third type is known as a *Transform Boundary* or Strike-Slip Fault. The most famous example is the San Andreas Fault in California.

Unlike convergent boundaries, which create volcanoes and mountains, or divergent boundaries, which create new ocean floor, transform boundaries are "conservative." [A] No crust is created or destroyed. There is no magma. There is only friction.

The Pacific Plate is moving northwest relative to the North American Plate at a rate of about 5 cm per year (the speed fingernails grow). [B] However, rock is not smooth. The edges of the plates are rough and jagged. They lock together.

As the plates try to move, stress builds up at the "locking point." The rock bends elastically, storing energy like a stretched rubber band. [C] Eventually, the stress exceeds the strength of the rock. *Snap*. The plates slip violently to catch up to where they should be. This release of elastic energy sends out shockwaves: an earthquake.

Because the fault is shallow and vertical, transform earthquakes can be devastatingly close to the surface. [D] The offset can be visible: fences and roads are suddenly sliced and shifted by several meters. These faults act as the "relief valves" of the planetary heat engine, accommodating the lateral motion of the jigsaw puzzle of the Earth's crust.
    `.trim(),
        questions: [
            {
                id: "batch6_topic14_transform_faults_Q1",
                question: "Why are Transform Boundaries (like the San Andreas Fault) considered 'conservative'?",
                options: [
                    "Because they move slowly.",
                    "Because no crust is created or destroyed; plates simply slide past each other.",
                    "Because they don't cause earthquakes.",
                    "Because they occur in the ocean."
                ],
                correctAnswer: "B",
                explanation: "The text explains: 'No crust is created or destroyed. There is no magma. There is only friction.'"
            }
        ]
    },
    {
        id: "batch6_topic15_urban_sprawl",
        taskType: "academic",
        title: "The Sociology and Economics of Urban Sprawl",
        passage: `
**Rhetorical Structure:** Cause-Effect/Problem
**Dominant TOEFL Skill:** Prose Summary

After World War II, a new form of human settlement emerged in the United States: the Suburb. Driven by the automobile, cheap gasoline, and government housing loans (GI Bill), cities exploded outwards. This low-density, car-dependent expansion is known as *Urban Sprawl*.

Sprawl is defined by "single-use zoning." [A] In a traditional city, a shop might be downstairs and an apartment upstairs. In sprawl, housing, shopping, and work are rigorously separated into distinct zones. You live in a subdivision, shop in a strip mall, and work in an office park. None are within walking distance of each other.

The car is mandatory. This has profound social consequences. [B] Critics argue it leads to social isolation. The "public sphere"—the sidewalk, the park, the square—disappears. People move from a private garage to a private car to a private office. Interaction with neighbors declines ("bowling alone").

Economically, sprawl is expensive. Running pipes, power lines, and roads to spread-out houses costs far more per capita than in a dense city. [C] Often, the tax revenue from low-density housing doesn't cover the maintenance cost of the infrastructure, leading to a "Ponzi scheme" style of growth where cities must keep expanding just to pay for the old roads.

Environmentally, it increases carbon emissions due to driving and replaces wetlands with pavement (impermeable surfaces), worsening flooding. [D] "New Urbanism" is a design movement attempting to reverse this, advocating for walkable, mixed-use, dense neighborhoods that recover the efficiency and community of the traditional town.
    `.trim(),
        questions: [
            {
                id: "batch6_topic15_urban_sprawl_Q1",
                question: "What is the defining characteristic of zoning in areas of 'Urban Sprawl'?",
                options: [
                    "Mixed-use buildings where you can live and work.",
                    "Single-use zoning where housing, shopping, and work are strictly separated.",
                    "No zoning laws at all.",
                    "High-density skyscrapers."
                ],
                correctAnswer: "B",
                explanation: "The passage defines it as: 'single-use zoning... In sprawl, housing, shopping, and work are rigorously separated into distinct zones.'"
            }
        ]
    },
    {
        id: "batch6_topic16_ukiyo_e",
        taskType: "academic",
        title: "Ukiyo-e: The Floating World of Japanese Woodblock Prints",
        passage: `
**Rhetorical Structure:** Description/Influence
**Dominant TOEFL Skill:** Inference

During the Edo period (1603–1867), Japan was isolated and peaceful. A wealthy merchant class emerged in Tokyo (Edo) who sought entertainment. They frequented the theater (Kabuki) and the pleasure quarters. The art form that captured this hedonistic lifestyle was *Ukiyo-e*, meaning "pictures of the floating world."

Unlike the aristocratic painting schools that focused on nature and landscapes, Ukiyo-e was pop art. [A] It depicted actors, courtesans, and city life. It was mass-produced using woodblock printing.

The process involved a team. The artist (like Hokusai or Hiroshige) drew the design on paper. A carver pasted the paper to a cherry wood block and carved away the white space, leaving the lines raised. [B] A printer then inked the block and pressed the paper. For color prints, a separate block had to be carved for *each* color. To print a complex image with 10 colors required perfect alignment (registration) of 10 different blocks.

This medium allowed for bold, flat colors and dynamic compositions. [C]

When Japan opened to the West in the 1850s, these cheap prints flooded Europe, often used as wrapping paper for pottery. European artists were stunned. They had never seen perspective like this—no vanishing point, cropped figures, diagonal rain.

This sparked *Japonisme*. Impressionists like Monet and Van Gogh were deeply influenced. [D] Van Gogh copied Ukiyo-e prints in oil paint. The flat colors and outlining of the Japanese prints helped liberate Western art from the obsession with photographic realism, paving the way for Modernism.
    `.trim(),
        questions: [
            {
                id: "batch6_topic16_ukiyo_e_Q1",
                question: "How did Ukiyo-e prints influence Western artists like Van Gogh?",
                options: [
                    "They taught them how to carve wood.",
                    "They introduced new aesthetic principles like flat colors, bold outlines, and unusual cropping.",
                    "They showed them how to draw Japanese characters.",
                    "They made art cheaper."
                ],
                correctAnswer: "B",
                explanation: "The text notes: 'The flat colors and outlining of the Japanese prints helped liberate Western art from the obsession with photographic realism.'"
            }
        ]
    },
    {
        id: "batch6_topic17_marathon_glycogen",
        taskType: "academic",
        title: "Physiology of Endurance: The 'Wall' in Marathon Running",
        passage: `
**Rhetorical Structure:** Mechanism/Metabolism
**Dominant TOEFL Skill:** Factual Information

The marathon (26.2 miles) is a unique physiological test because it sits right at the limit of human carbohydrate storage. The body has two primary fuel sources: fat and carbohydrates (glycogen). Fat is abundant; even a lean runner has enough fat to run for days. Glycogen, stored in the liver and muscles, is limited.

The body prefers glycogen. It burns clean and fast. [A] However, the average human can store only about 2,000 calories of glycogen. Running a mile burns roughly 100 calories. Do the math: 2,000 calories gets you 20 miles. The race is 26.2 miles long.

At mile 20, the tank runs dry. This is "The Wall" (bonking). [B] The brain, which relies exclusively on glucose, goes into panic mode. It forces the body to slow down. The body must switch to burning fat.

Burning fat is less efficient. It requires more oxygen to produce the same amount of ATP. [C] The runner feels like they are running through mud. Mental focus collapses.

To avoid the wall, elite runners use "carb-loading" before the race to max out storage, and consume glucose gels *during* the race to drip-feed the engine. [D] Training also helps; it teaches the body to become "metabolically flexible," burning a higher percentage of fat at higher speeds, sparing the precious glycogen for the final sprint.
    `.trim(),
        questions: [
            {
                id: "batch6_topic17_marathon_glycogen_Q1",
                question: "What is the physiological cause of 'The Wall' that marathon runners experience around mile 20?",
                options: [
                    "Dehydration.",
                    "Lactic acid buildup.",
                    " depletion of glycogen stores, forcing the body to switch to inefficient fat burning.",
                    "Overheating."
                ],
                correctAnswer: "C",
                explanation: "The passage explains: 'At mile 20, the tank runs dry... The body must switch to burning fat. Burning fat is less efficient... The runner feels like they are running through mud.'"
            }
        ]
    },
    {
        id: "batch6_topic18_troy_schliemann",
        taskType: "academic",
        title: "Heinrich Schliemann and the Discovery of Troy",
        passage: `
**Rhetorical Structure:** Narrative/Critique
**Dominant TOEFL Skill:** Negative Factual Information

For centuries, the Trojan War described in Homer's *Iliad* was considered pure myth. Serious historians believed Troy was a fable, like Atlantis. Heinrich Schliemann, a wealthy German businessman and amateur archaeologist, believed otherwise. He took Homer literally. In 1870, with the *Iliad* in one hand and a shovel in the other, he went to Hissarlik in Turkey.

He dug. To the world's shock, he found walls. [A] He found fire-scarred ruins. He found distinct layers of cities built on top of each other. And he found gold—the "Priam's Treasure." He announced he had found the city of Troy.

Schliemann was a pioneer, but he was a terrible archaeologist. [B] In his haste to find the "Homeric" layer, he used dynamite to blast through the upper layers, inadvertently destroying centuries of history. He dug right *past* the Troy of the Trojan War (Troy VI or VIIa) down to a much older Early Bronze Age city (Troy II). The gold he found belonged to a king who died a thousand years before Agamemnon.

He also smuggled the gold out of Turkey, causing a diplomatic scandal. [C]

Despite his destructive methods and lies (he salted the site with artifacts), Schliemann’s contribution was monumental. [D] He proved that the Greek Age of Heroes had a basis in fact. He discovered the Mycenaean civilization. He showed that archaeology could be used to verify literature, turning the spade into a time machine.
    `.trim(),
        questions: [
            {
                id: "batch6_topic18_troy_schliemann_Q1",
                question: "What was the main criticism of Heinrich Schliemann's excavation of Troy?",
                options: [
                    "He dug in the wrong country.",
                    "He used destructive methods (dynamite) and dug past the relevant historical layers.",
                    "He didn't find any gold.",
                    "He never published his findings."
                ],
                correctAnswer: "B",
                explanation: "The text states: 'he was a terrible archaeologist. In his haste... he used dynamite... inadvertently destroying centuries of history. He dug right *past* the Troy of the Trojan War.'"
            }
        ]
    },
    {
        id: "batch6_topic19_pulsars",
        taskType: "academic",
        title: "Pulsars: The Lighthouses of the Universe",
        passage: `
**Rhetorical Structure:** Definition/Discovery
**Dominant TOEFL Skill:** Sentence Insertion

In 1967, graduate student Jocelyn Bell noticed a strange signal in her radio telescope data: a regular, rhythmic pulse occurring every 1.33 seconds. It was so precise it seemed artificial. Her supervisor jokingly labeled it LGM-1 ("Little Green Men"). It wasn't aliens; it was a *Pulsar*.

A pulsar is a type of *Neutron Star*. When a massive star explodes as a supernova, its core collapses. [A] If the core is between 1.4 and 3 solar masses, it is crushed into a ball of neutrons only 20 km wide. It is ultra-dense; a teaspoon would weigh a billion tons.

Inheriting the angular momentum of the original star, this tiny ball spins incredibly fast—some rotate hundreds of times per second (Millisecond Pulsars). [B] It also has a ferocious magnetic field. This field funnels beams of radiation (radio waves, X-rays) out of the magnetic poles.

If the magnetic pole is not aligned with the rotation axis, the beam sweeps across the sky like a lighthouse beam. [C] Every time the beam sweeps past Earth, we detect a pulse. *Blip... blip... blip*.

Pulsars are the most accurate clocks in the universe, rivaling atomic clocks. [D] Astronomers use them to test Einstein's theory of relativity and to map the galaxy. The discovery revolutionized high-energy astrophysics, proving that matter can exist in states of extreme density previously thought impossible.
    `.trim(),
        questions: [
            {
                id: "batch6_topic19_pulsars_Q1",
                question: "Why do we detect a regular 'pulse' from a Pulsar?",
                options: [
                    "The star is growing and shrinking.",
                    "Aliens are sending signals.",
                    "A beam of radiation from the rotating star sweeps past Earth like a lighthouse beam.",
                    "The star is binary."
                ],
                correctAnswer: "C",
                explanation: "The passage explains: 'the beam sweeps across the sky like a lighthouse beam. Every time the beam sweeps past Earth, we detect a pulse.'"
            }
        ]
    },
    {
        id: "batch6_topic20_chomsky_linguistics",
        taskType: "academic",
        title: "Noam Chomsky and the Theory of Universal Grammar",
        passage: `
**Rhetorical Structure:** Theory/Contrast
**Dominant TOEFL Skill:** Prose Summary

In the 1950s, the dominant theory of language acquisition was *Behaviorism* (B.F. Skinner). Behaviorists argued that the mind is a "blank slate" (tabula rasa) and that children learn language entirely through imitation and reinforcement. They say "cookie," get a cookie, and learn the word. Noam Chomsky, a linguist at MIT, destroyed this theory with a simple observation: children say things they have never heard.

Chomsky noted the "Poverty of the Stimulus." [A] The language children hear is often fragmentary and full of errors, yet every healthy child produces perfect, complex grammar by age 4. They intuitively understand rules they were never taught. For example, a child knows to say "I goed" instead of "I went." This is an error, but it is a *smart* error—they are applying the rule for past tense (-ed) to an irregular make. They are not imitating; they are computing.

Chomsky proposed that humans are born with an innate "Language Acquisition Device" (LAD) in the brain. [B] This biological module contains *Universal Grammar*—a set of structural rules shared by all human languages. All languages have nouns and verbs; all have ways to make questions. The child just needs to set the "switches" for their specific local language (e.g., English = Subject-Verb-Object).

This sparked the "Cognitive Revolution." [C] It shifted psychology from studying behavior to studying the mind's internal structure.

While modern linguistics has moved beyond some of Chomsky's strict models, his core insight remains: language is not a cultural invention like writing; it is a biological instinct, as natural to humans as flying is to birds. [D]
    `.trim(),
        questions: [
            {
                id: "batch6_topic20_chomsky_linguistics_Q1",
                question: "What is the 'Poverty of the Stimulus' argument used by Chomsky?",
                options: [
                    "Children need more toys to learn.",
                    "Children learn language only by imitating their parents.",
                    "Children produce complex grammar they have never heard, suggesting innate biological rules.",
                    "Schools do not teach language well enough."
                ],
                correctAnswer: "C",
                explanation: "The text states: 'children say things they have never heard... they intuitively understand rules they were never taught... They are not imitating; they are computing.'"
            }
        ]
    }
];
