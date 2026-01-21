
import { AcademicQuestion } from "./reading-2026";

export const batch4Passages: AcademicQuestion[] = [
    {
        id: "batch4_topic1_optimal_foraging",
        taskType: "academic",
        title: "Optimal Foraging Theory: Energy trade-offs in Animal Behavior",
        passage: `
**Rhetorical Structure:** Theory/Application
**Dominant TOEFL Skill:** Inference

In evolutionary biology, survival breaks down to a simple economic equation: energy in versus energy out. Animals must consume more calories than they expend finding food. *Optimal Foraging Theory* (OFT) is a mathematical model used to predict how an animal behaves when searching for food. It assumes that natural selection has favored strategies that maximize the net energy intake per unit of time.

Consider a shorebird, the oystercatcher, feeding on mussels. [A] Not all mussels are equal. Large mussels contain more calories, but they have thicker shells that take longer and require more energy to hammer open. Small mussels are easy to open but offer little caloric reward. OFT predicts the bird will ignore the very small mussels (waste of time) and the very large mussels (too much effort). Instead, it selects the intermediate size—the "profitability" sweet spot where the ratio of caloric gain to handling time is highest. Observations confirm this: oystercatchers are remarkably consistent in choosing mussels of a specific, medium size range.

The theory also addresses "patch time allocation." Food is often distributed in patches (e.g., a bush with berries). [B] As an animal forages in a patch, the food becomes scarcer, and it takes longer to find the next berry. This is the law of diminishing returns. When should the animal leave?

The "Marginal Value Theorem" suggests the animal should leave the patch when its rate of intake drops below the average rate for the entire habitat. If the animal stays too long, it wastes time searching an empty bush. If it leaves too early, it wastes time traveling to a new bush. [C]

Critics argue that OFT is too simplistic because it focuses solely on energy. In reality, animals must also avoid predators. A foraging deer might choose a patch with *less* food but *more* cover to avoid wolves. [D] Thus, real-world behavior is often a trade-off between optimal foraging and optimal safety.
    `.trim(),
        questions: [
            {
                id: "batch4_topic1_optimal_foraging_Q1",
                question: "According to Optimal Foraging Theory, why do oystercatchers prefer medium-sized mussels?",
                options: [
                    "They are easier to see in the water.",
                    "They provide the best balance between energy gained and energy spent opening them.",
                    "The large mussels are poisonous.",
                    "The small mussels do not taste as good."
                ],
                correctAnswer: "B",
                explanation: "The passage explains that they select the 'profitability sweet spot where the ratio of caloric gain to handling time is highest.'"
            }
        ]
    },
    {
        id: "batch4_topic2_hagia_sophia",
        taskType: "academic",
        title: "Structural Dynamics of the Dome of Hagia Sophia",
        passage: `
**Rhetorical Structure:** Problem-Solution/Description
**Dominant TOEFL Skill:** Factual Information

When Emperor Justinian I commissioned the Hagia Sophia in Constantinople (532 CE), he demanded a structure that would surpass all others in antiquity. The resulting edifice, designed by the geometricians Anthemius of Tralles and Isidore of Miletus, featured a revolutionary central dome 102 feet in diameter. The architectural challenge was immense: how to place a massive circular dome on top of a square base without heavy walls to support it.

The Romans (like in the Pantheon) had placed domes on circular walls (drums). The solution in the Hagia Sophia was the *pendentive*. A pendentive is a triangular segment of a sphere. [A] Imagine a dome resting on four arches arranged in a square. The spaces between the arches are curved triangles. These pendentives channel the weight of the circular dome down into the four massive corner piers. This lifts the dome effectively into "mid-air," creating the illusion that it is suspended from heaven by a golden chain.

However, the laws of physics were unforgiving. A dome exerts intense lateral thrust—it pushes outwards. During construction, the dome began to push the main piers apart. [B] The architects had to hastily add buttresses. Even so, the first dome collapsed during an earthquake in 558 CE.

Isidore the Younger (nephew of the original architect) rebuilt it with a steeper profile (ribbed dome). By making the dome taller, he directed more of the force downwards (vertical) rather than outwards (lateral). [C] He also added 40 windows at the base of the dome. While this ring of light dematerialized the structure, making the dome appear to float, it also served a structural purpose: it reduced the weight of the dome where the stresses were highest.

The result is a masterpiece of "dematerialization." [D] The walls are pierced with so many windows that the heavy masonry seems to dissolve in light. The Hagia Sophia remained the largest cathedral in the world for nearly a thousand years, a testament to the daring application of geometry to stone.
    `.trim(),
        questions: [
            {
                id: "batch4_topic2_hagia_sophia_Q1",
                question: "How did the architectural feature known as the 'pendentive' solve the main challenge of the Hagia Sophia?",
                options: [
                    "It allowed light to enter through the dome.",
                    "It allowed a circular dome to be supported by a square base by channeling weight to the corners.",
                    "It reduced the cost of materials significantly.",
                    "It strengthened the foundation against earthquakes."
                ],
                correctAnswer: "B",
                explanation: "The passage describes the pendentive as a 'triangular segment of a sphere' that channels the weight of the circular dome 'down into the four massive corner piers.'"
            }
        ]
    },
    {
        id: "batch4_topic3_plate_tectonics_ring_of_fire",
        taskType: "academic",
        title: "Subduction Zones and Volcanism in the Pacific Ring of Fire",
        passage: `
**Rhetorical Structure:** Cause-Effect/Process
**Dominant TOEFL Skill:** Sentence Insertion

The "Ring of Fire" is a horseshoe-shaped belt roughly 40,000 km long surrounding the Pacific Ocean, home to 75% of the world's active volcanoes and 90% of its earthquakes. This intense geological activity is not random; it is the direct result of Plate Tectonics, specifically the process of *subduction*.

The Earth's lithosphere is broken into rigid plates. The floor of the Pacific Ocean constitutes several oceanic plates (like the Pacific Plate and Nazca Plate) that are moving outwards. [A] When a dense oceanic plate collides with a lighter continental plate (like the South American Plate), the heavy oceanic plate is forced to slide *underneath* the continent and sink into the Earth's mantle. This collision zone is a trench. The Peru-Chile Trench, for example, marks the boundary where the Nazca plate dives under the Andes.

As the descending plate sinks to depths of about 100 km, it encounters intense heat and pressure. Crucially, the oceanic plate is water-logged; it carries seawater trapped in its minerals. [B] As the plate heats up, this water is released into the overlying mantle wedge. In geology, water acts as a "flux"—it lowers the melting point of rock (just as salt lowers the melting point of ice).

This superheated, water-rich mantle rock melts, creating magma. Because magma is less dense than the surrounding solid rock, it rises toward the surface like a bubble in honey. [C] When it punches through the continental crust, it erupts, forming a chain of volcanoes parallel to the trench. The Andes Mountains, the Cascades, and the Japanese archipelago are all volcanic arcs created by this subduction factory.

The process is violent. The subducting plate does not slide smoothly; it gets stuck due to friction. Stress builds up for centuries until the rock snaps, releasing the energy as a megathrust earthquake. [D] The 2011 Tohoku earthquake in Japan and the 1960 Valdivia earthquake were both caused by the sudden slippage of these subduction zones, triggering tsunamis that raced across the same ocean basin created by the plates themselves.
    `.trim(),
        questions: [
            {
                id: "batch4_topic3_plate_tectonics_ring_of_fire_Q1",
                question: "What role does water play in the creation of magma in subduction zones?",
                options: [
                    "It cools the rock, causing it to crack.",
                    "It acts as a flux, lowering the melting point of the mantle rock.",
                    "It mixes with lava to create obsidian.",
                    "It puts out the fire in the mantle."
                ],
                correctAnswer: "B",
                explanation: "The passage states: 'In geology, water acts as a \"flux\"—it lowers the melting point of rock... This superheated, water-rich mantle rock melts, creating magma.'"
            }
        ]
    },
    {
        id: "batch4_topic4_gold_standard",
        taskType: "academic",
        title: "The Economics of the Gold Standard vs. Fiat Currency",
        passage: `
**Rhetorical Structure:** Comparison/Contrast
**Dominant TOEFL Skill:** Negative Factual Information

For most of the 19th and early 20th centuries, the international monetary system was based on the *Gold Standard*. Under this system, a country’s paper currency was directly convertible into a fixed amount of gold. A US dollar, for example, was legally defined as 23.22 grains of pure gold. Governments could only print more money if they acquired more gold reserves. This system provided extraordinary stability for international trade, as exchange rates were fixed. A merchant in London knew exactly what a French Franc was worth in pounds, reducing uncertainty.

However, the Gold Standard acted as a "golden feta." [A] It prevented governments from using monetary policy to fight recessions. In a recession, a central bank ideally wants to expand the money supply (print money) and lower interest rates to stimulate spending. Under the Gold Standard, this was impossible. If a country printed paper money unbacked by gold, people would lose faith and rush to the banks to exchange paper for gold (a run), depleting the reserves.

This rigidity exacerbated the Great Depression. As the economy collapsed in 1929, central banks were forced to *raise* interest rates to protect their gold supplies, effectively strangling the economy when it needed to breathe. [B]

The modern alternative is *Fiat Currency* (from the Latin *fiat*, "let it be done"). A fiat currency, like the modern Dollar or Euro, has no intrinsic value. It is not backed by a metal. Its value derives entirely from government decree and public trust in the state's economic stability.

The primary advantage of fiat money is flexibility. [C] Central banks (like the Federal Reserve) can control the money supply to manage inflation and employment. During the 2008 financial crisis or the COVID-19 pandemic, governments pumped trillions of dollars into the economy to prevent total collapse—an action that would have been physically impossible under a Gold Standard.

The downside, critics argue, is the risk of hyperinflation. [D] Without the discipline of a physical anchor like gold, reckless governments can print excessive money to pay debts, devaluing the currency and destroying savings (as seen in Zimbabwe or Weimar Germany). The modern consensus, however, favors the managed risks of fiat money over the rigid straitjacket of gold.
    `.trim(),
        questions: [
            {
                id: "batch4_topic4_gold_standard_Q1",
                question: "According to the passage, how did the Gold Standard worsen the Great Depression?",
                options: [
                    "It prevented countries from trading with each other.",
                    "It forced central banks to raise interest rates to protect gold reserves instead of stimulating the economy.",
                    "It caused the price of gold to drop too low.",
                    "It encouraged people to hoard paper money."
                ],
                correctAnswer: "B",
                explanation: "The text explains: 'Central banks were forced to *raise* interest rates to protect their gold supplies, effectively strangling the economy when it needed to breathe.'"
            }
        ]
    },
    {
        id: "batch4_topic5_bystander_effect",
        taskType: "academic",
        title: "The Bystander Effect and Diffusion of Responsibility",
        passage: `
**Rhetorical Structure:** Phenomenon/Explanation
**Dominant TOEFL Skill:** Prose Summary

In 1964, a young woman named Kitty Genovese was murdered in Queens, New York. Early (and sensationalized) news reports claimed that 38 witnesses saw or heard the attack, yet no one called the police or intervened. While the details of the Genovese case were later challenged, the story triggered a wave of social psychological research that identified a counter-intuitive phenomenon: the *Bystander Effect*. This theory posits that the greater the number of people present during an emergency, the *less* likely any single individual is to help.

The primary psychological mechanism driving this is *Diffusion of Responsibility*. [A] If a person witnesses a seizure or an accident alone, the burden of action falls 100% on them. They feel a direct personal pressure to act. However, if there are ten other witnesses, the responsibility is mentally divided. Each person thinks, "Someone else has probably called 911," or "Someone else, perhaps a doctor, is better qualified to help." Since everyone assumes someone else is acting, no one acts.

A second mechanism is *Pluralistic Ignorance*. In ambiguous situations (e.g., seeing smoke coming from a room), humans look to others to define reality. [B] If everyone else is appearing calm and doing nothing, the individual concludes that the situation is not an emergency. Everyone is essentially fooling everyone else into inaction by trying to appear composed.

Research by Darley and Latané confirmed this in controlled experiments. When placed in a room filling with smoke, 75% of lone participants reported it. When placed in a group of three, only 38% reported it. [C]

The Bystander Effect is not about apathy; it is about social cues. [D] The most effective way to break the paralysis is for the victim to assign responsibility directly. Pointing to a specific person and shouting, "You in the blue shirt, call an ambulance!" shatters the diffusion. It places 100% of the burden back on one individual, triggering the impulse to help that the crowd had suppressed.
    `.trim(),
        questions: [
            {
                id: "batch4_topic5_bystander_effect_Q1",
                question: "What is the psychological concept of 'Diffusion of Responsibility'?",
                options: [
                    "The idea that leaders should share power with the group.",
                    "The tendency for individuals in a group to feel less personal pressure to act because they assume others will.",
                    "The feeling of guilt after failing to help someone.",
                    "The spread of rumors through a crowd."
                ],
                correctAnswer: "B",
                explanation: "The passage defines it: 'If there are ten other witnesses... Each person thinks... \"Someone else has probably called 911\"... Since everyone assumes someone else is acting, no one acts.'"
            }
        ]
    },
    {
        id: "batch4_topic6_oil_paint_renaissance",
        taskType: "academic",
        title: "The Tech Transition from Tempera to Oil Paint in the Renaissance",
        passage: `
**Rhetorical Structure:** Contrast/Change
**Dominant TOEFL Skill:** Vocabulary in Context

The glories of the Northern Renaissance, typified by the hyper-realistic works of Jan van Eyck, were made possible by a technological shift in art materials: the transition from *egg tempera* to *oil paint*. For centuries, tempera was the standard medium. It consisted of pigments mixed with egg yolk. While durable, tempera had severe limitations. It dried almost instantly. This meant artists had to work in short, hatched strokes. Blending colors smoothly was nearly impossible, and the final image was flat and opaque.

Oil paint, created by suspending pigments in linseed or walnut oil, offered a radically different chemistry. [A] Its defining characteristic is a slow drying time. Oil paint stays wet for days. This allowed artists to blend colors directly on the canvas, creating seamless gradations of tone (sfumato) that mimicked the soft curve of a cheek or the fold of a velvet robe. There were no harsh lines.

Furthermore, oil paint is translucent. Tempera is opaque; it covers what is underneath. Oil paint can be applied in thin, transparent layers called *glazes*. By painting a glaze of red over a base of blue, an artist could create a deep, glowing purple that seemed to be lit from within. [B] This led to a revolution in the depiction of light and texture. Van Eyck used these optical properties to paint metals that gleamed, jewels that refracted light, and eyes that had depth.

The versatility of oil also allowed for corrections. [C] If a tempera artist made a mistake, they had to scrape the plaster off. An oil painter could simply wipe the wet paint away or paint over it the next day. This encouraged experimentation and complexity.

The shift moved south to Italy, where Venetian painters like Titian exploited oil’s texture. [D] They began using thick, impasto brushstrokes, giving the painting a physical presence. The transition was not immediate—painters like Botticelli stuck to tempera—but the visual superiority of oil in capturing the natural world eventually rendered the egg-based medium obsolete, defining the "look" of Western art for the next 500 years.
    `.trim(),
        questions: [
            {
                id: "batch4_topic6_oil_paint_renaissance_Q1",
                question: "What was a major technical advantage of oil paint over egg tempera regarding the artistic process?",
                options: [
                    "It was cheaper to produce.",
                    "It dried very slowly, allowing artists to blend colors directly on the canvas.",
                    "It was brighter and more opaque.",
                    "It could be used on paper as well as wood."
                ],
                correctAnswer: "B",
                explanation: "The passage notes: 'Its defining characteristic is a slow drying time... This allowed artists to blend colors directly on the canvas, creating seamless gradations.'"
            }
        ]
    },
    {
        id: "batch4_topic7_protein_synthesis",
        taskType: "academic",
        title: "The Central Dogma: Transcription and Translation in Protein Synthesis",
        passage: `
**Rhetorical Structure:** Process/Sequence
**Dominant TOEFL Skill:** Factual Information

The "Central Dogma" of molecular biology explains the flow of genetic information within a biological system. It states that information flows in one direction: from DNA to RNA to Protein. This process, by which the genetic code is converted into the functional molecules of life, occurs in two distinct stages: *transcription* and *translation*.

The first step, *transcription*, occurs inside the nucleus. DNA is the master blueprint, precious and permanent. It never leaves the safe vault of the nucleus. [A] To build a protein, the cell must make a temporary copy of the relevant gene. An enzyme called RNA polymerase unzips the DNA double helix and reads the sequence of bases (A, C, G, T). It constructs a complementary strand of Messenger RNA (mRNA). In this RNA copy, the base Uracil (U) replaces Thymine (T). This mRNA strand is the "message"—a portable set of instructions.

Once the mRNA is processed, it exits the nucleus and travels to the cytoplasm, the factory floor of the cell. Here, *translation* begins. The mRNA attaches to a ribosome, the cellular machine that builds proteins. [B] The ribosome reads the RNA code in groups of three letters, called *codons*. Each codon specifies a single amino acid (e.g., the codon "AUG" codes for Methionine).

The amino acids are delivered to the ribosome by Transfer RNA (tRNA) molecules. [C] Each tRNA acts as an adapter: one end carries a specific amino acid, and the other end has an "anticodon" that matches the codon on the mRNA. As the ribosome moves down the mRNA strand, tRNAs click into place, dropping off their amino acids one by one. The ribosome bonds these amino acids together into a growing chain.

When the ribosome hits a "STOP" codon, the chain is released. [D] This polypeptide chain then folds into a complex 3D shape to become a functional protein—hemoflobin to carry oxygen, insulin to regulate sugar, or keratin to make hair. Thus, the Central Dogma describes the translation of a chemical language (nucleotides) into the physical machinery of life (amino acids).
    `.trim(),
        questions: [
            {
                id: "batch4_topic7_protein_synthesis_Q1",
                question: "In the process of translation, what is the function of Transfer RNA (tRNA)?",
                options: [
                    "To unzip the DNA helix.",
                    "To carry specific amino acids to the ribosome and match them with the mRNA codon.",
                    "To destroy the used mRNA.",
                    "To folded the protein into its final shape."
                ],
                correctAnswer: "B",
                explanation: "The text explains: 'Each tRNA acts as an adapter: one end carries a specific amino acid, and the other end has an \"anticodon\" that matches the codon on the mRNA.'"
            }
        ]
    },
    {
        id: "batch4_topic8_galaxy_classification",
        taskType: "academic",
        title: "The Hubble Tuning Fork: Classification of Galactic Morphologies",
        passage: `
**Rhetorical Structure:** Classification/Evolution
**Dominant TOEFL Skill:** Sentence Insertion

In the 1920s, astronomer Edwin Hubble demonstrated that the "nebulae" seen in telescopes were not gas clouds inside our Milky Way, but separate "island universes" or galaxies millions of light-years away. Faced with a zoo of different galactic shapes, Hubble developed a classification scheme known as the "Hubble Tuning Fork" diagram, which remains the standard taxonomy for galaxies today. He divided galaxies into three broad classes: Elliptical, Spiral, and Irregular.

*Elliptical* galaxies (designated E) occupy the "handle" of the tuning fork. They appear as smooth, featureless blobs of light, ranging from spherical (E0) to cigar-shaped (E7). [A] These galaxies are structurally boring: they contain very little gas and dust. Without gas, they cannot form new stars. Consequently, ellipticals are populated almost entirely by old, red stars. They are essentially "dead" galaxies, often the result of collisions where the gas was stripped away.

*Spiral* galaxies form the two prongs of the fork. They are flat, rotating disks with a central bulge. They are rich in gas and dust, particularly in the spiral arms, which function as stellar nurseries. [B] The arms appear blue because they are filled with hot, young, short-lived stars. Hubble split spirals into two forks: "Normal Spirals" (S), where the arms wind directly from the center, and "Barred Spirals" (SB), where a straight bar of stars cuts through the center, with arms winding from the ends of the bar. (We now know the Milky Way is a Barred Spiral).

*Irregular* galaxies (Irr) fit nowhere on the fork. They have chaotic, undefined shapes. [C] These are often small galaxies engaging in gravitational interactions or mergers, ripped apart by the tidal forces of larger neighbors. The Magellanic Clouds play this role as satellites of the Milky Way.

Hubble originally believed the Tuning Fork represented an evolutionary timeline—that galaxies started as simple spheres (Ellipticals) and flattened out into complex Spirals. [D] Modern astronomy has proven the exact opposite. Galaxies likely start as spirals and, through gravity and mergers over billions of years, collide to form massive, unstructured Ellipticals. The tuning fork is not a timeline of birth, but a diagram of galactic aging and death.
    `.trim(),
        questions: [
            {
                id: "batch4_topic8_galaxy_classification_Q1",
                question: "Why do Elliptical galaxies typically not form new stars?",
                options: [
                    "Because they are too small.",
                    "Because they contain very little gas and dust, which are the raw materials for stars.",
                    "Because they spin too fast.",
                    "Because they are too old and cold."
                ],
                correctAnswer: "B",
                explanation: "The passage states: 'These galaxies are structurally boring: they contain very little gas and dust. Without gas, they cannot form new stars.'"
            }
        ]
    },
    {
        id: "batch4_topic9_haiku_sonnet",
        taskType: "academic",
        title: "Comparative Poetics: The Haiku vs. The Sonnet",
        passage: `
**Rhetorical Structure:** Comparison/Analysis
**Dominant TOEFL Skill:** Rhetorical Purpose

Poetry in every culture seeks to distill human experience, but the structural constraints chosen by a culture reveal much about its aesthetic values. Two of the most rigid and enduring forms—the Japanese *haiku* and the European *sonnet*—illustrate a fundamental contrast between brevity and elaboration, and between nature and argument.

The *haiku* is a monument to minimalism. Structurally, it consists of 17 distinct sounds (or *on*, often mistranslated as syllables) arranged in a 5-7-5 pattern. [A] The thematic focus is almost exclusively on nature and the specific moment. A classic haiku usually contains a *kigo* (seasonal word) that anchors the poem in time (e.g., "frog" implies spring). The goal is the "aha" moment—a flash of insight where two images are juxtaposed without explanation. Basho’s famous poem—"Old pond / Frog jumps in / Sound of water"—does not tell the reader *how* to feel. It simply presents the sensory evidence and leaves the emotional resonance to the reader's silence. It is an art of omission.

In contrast, the *sonnet* (specifically the Petrarchan or Shakespearean form) is a machine for argumentation. [B] Consisting of 14 lines of iambic pentameter, it is roomy enough to develop a complex thought. The structure typically sets up a problem or question in the first section (the octave or first three quatrains) and then delivers a resolution or twist in the final section (the sestet or couplet). This pivot point is called the *volta* (turn).

For example, Shakespeare’s Sonnet 18 ("Shall I compare thee to a summer's day?") spends 12 lines listing the ways summer is imperfect (it's too hot, it ends too soon), and then the final couplet delivers the logical conclusion: "So long as men can breathe... / So long lives this, and this gives life to thee." The poem is a logical proof in verse. [C]

Where the haiku captures a fleeting sensation, the sonnet constructs an enduring monument. The haiku reflects a Zen Buddhist acceptance of transience; the sonnet reflects a Renaissance humanist desire to defeat time through art. [D] Both forms use restriction to force creativity, but one compresses the world into a drop of water, while the other builds a fortress against mortality.
    `.trim(),
        questions: [
            {
                id: "batch4_topic9_haiku_sonnet_Q1",
                question: "How does the structure of a Petrarchan or Shakespearean sonnet support its function as a 'machine for argumentation'?",
                options: [
                    "It is short enough to be memorized easily.",
                    "It uses rhyme to make the argument sound more convincing.",
                    "It has a two-part structure (problem/resolution) pivoting on a 'volta'.",
                    "It uses difficult words to show off the poet's intelligence."
                ],
                correctAnswer: "C",
                explanation: "The passage explains: 'The structure typically sets up a problem... and then delivers a resolution... This pivot point is called the *volta* (turn).'"
            }
        ]
    },
    {
        id: "batch4_topic10_easter_island_collapse",
        taskType: "academic",
        title: "The Collapse of Rapa Nui (Easter Island): Ecocide vs. Ethnocide",
        passage: `
**Rhetorical Structure:** Debate/Re-evaluation
**Dominant TOEFL Skill:** Inference

The desolate landscape of Rapa Nui, famous for its massive stone statues (*moai*), has long served as the world's premier cautionary tale of environmental suicide, or "ecocide." The standard narrative, popularized by Jared Diamond, posits that the islanders, in a competitive mania to build larger and larger statues, chopped down every last tree on the island to transport the stone giants. [A] The resulting deforestation led to soil erosion, crop failure, civil war, and cannibalism. By the time Europeans arrived in 1722, the civilization had supposedly destroyed itself through reckless resource consumption.

However, recent archaeological and palynological (pollen study) evidence has challenged this "ecocide" model, suggesting the collapse was not self-inflicted but external—an "ethnocide" caused by contact.

It is undeniable that the island was deforested. Pollen records show Rapa Nui was once covered in millions of giant palm trees. But did humans cut them all down? The new culprit is the Polynesian rat (*Rattus exulans*). [B] Introduced by the first settlers (perhaps as food), the rats had no natural predators. They multiplied into the millions and devoured the palm nuts (seeds), preventing the forest from regenerating. The trees died of old age and rat predation, not just axes.

Furthermore, the "civil war" evidence is weak. The obsidian "spear points" found in large numbers might actually be agricultural tools for scraping taro. The toppled statues, previously seen as evidence of internal revolt, may have been taken down carefully by the islanders themselves as their belief systems evolved, not destroyed in rage.

The real collapse aligns perfectly with European arrival. [C] Dutch, Spanish, and Peruvian ships brought smallpox, tuberculosis, and syphilis to a population with no immunity. Even worse, Peruvian slavers in the 1860s kidnapped 1,500 islanders—including the King and the literate priesthood—taking them to work in guano mines. The knowledge of the script (*Rongorongo*) and the culture died with them.

The new theory suggests the Rapa Nui people were actually resilient survivors who adapted to a deforested island by using "rock mulching" (lithic mulch) to fertilize crops. [D] They didn't destroy their own world; it was destroyed for them by invasive species—first rats, then microbes and slavers.
    `.trim(),
        questions: [
            {
                id: "batch4_topic10_easter_island_collapse_Q1",
                question: "According to the 'ethnocide' theory, what was the primary cause of deforestation on Rapa Nui?",
                options: [
                    "Humans cutting trees to transport statues.",
                    "A massive fire caused by lightning.",
                    "The introduction of Polynesian rats that ate the palm seeds.",
                    "A change in climate that dried out the soil."
                ],
                correctAnswer: "C",
                explanation: "The passage states: 'The new culprit is the Polynesian rat... They multiplied into the millions and devoured the palm nuts... preventing the forest from regenerating.'"
            }
        ]
    },
    {
        id: "batch4_topic11_thermodynamics_entropy",
        taskType: "academic",
        title: "The Second Law of Thermodynamics and the Concept of Entropy",
        passage: `
**Rhetorical Structure:** Definition/Implication
**Dominant TOEFL Skill:** Prose Summary

Thermodynamics is the branch of physics dealing with heat, work, and energy. While the First Law (Conservation of Energy) states that energy cannot be created or destroyed, it allows for processes that we never see in real life. For example, the First Law allows for a shattered cup to reassemble itself and jump back onto a table, as long as the sound and heat energy released during the break is converted back into kinetic energy. We know this doesn't happen. The "Arrow of Time" is defined by the *Second Law of Thermodynamics*.

The Second Law states that in any isolated system, the total *entropy* always increases. [A] Entropy is often described as a measure of "disorder" or "randomness," but a more accurate definition is the dispersal of energy. Energy naturally tends to spread out. Heat flows from a hot coffee cup to the cool air, never from the cool air to the hot cup. The heat energy disperses.

Consider a bedroom. There are infinite ways for a room to be messy (high entropy), but very few ways for it to be perfectly organized (low entropy). [B] Random movements (like living in the room) will naturally move the system from organized to messy. To reverse this—to clean the room—requires an input of work. You must expend energy to lower the entropy of the room. But crucially, the energy you burn to clean the room releases heat into the universe. So, while the *room's* entropy goes down, the *universe's* entropy goes up. You cannot win.

This law has profound cosmological implications. As the universe expands and ages, energy continues to spread out. [C] Stars burn their fuel and die, radiating heat into the void. Eventually, all matter will reach the same uniform temperature. No energy will flow, because there are no temperature differences to drive work.

This theoretical end state is known as the "Heat Death" of the universe. [D] It represents a state of maximum entropy—total disorder and total darkness. Life, in this context, is a temporary resistance—a local pocket of order maintaining itself by consuming energy and exporting entropy to the surroundings, swimming upstream against the inevitable current of the Second Law.
    `.trim(),
        questions: [
            {
                id: "batch4_topic11_thermodynamics_entropy_Q1",
                question: "Why does the act of cleaning a messy room ultimately increase the entropy of the universe?",
                options: [
                    "Because the room will just get messy again.",
                    "Because the energy expended to clean the room releases heat, which increases total disorder.",
                    "Because cleaning creates trash that goes to a landfill.",
                    "Because order is an illusion."
                ],
                correctAnswer: "B",
                explanation: "The passage explains: 'the energy you burn to clean the room releases heat into the universe. So, while the *room's* entropy goes down, the *universe's* entropy goes up.'"
            }
        ]
    },
    {
        id: "batch4_topic12_gentrification",
        taskType: "academic",
        title: "Gentrification and Urban Displacement: Economic Revitalization vs. Social Equity",
        passage: `
**Rhetorical Structure:** Process/Debate
**Dominant TOEFL Skill:** Inference

Gentrification is a controversial urban process where a historically disinvested (often low-income or minority) neighborhood experiences an influx of affluent residents and capital investment. The term was coined in 1964 by Ruth Glass to describe changes in London, likening the arrival of the middle class ("gentry") to a social invasion. The process typically follows a predictable lifecycle, triggering a fierce debate between those who see it as "revitalization" and those who see it as "displacement."

The cycle often begins with "pioneer" artists and students seeking cheap rent. [A] These groups move into dilapidated industrial areas or working-class districts. Their presence creates a "cultural capital"—hip cafes, galleries, and a vibrant street life. This "bohemian" atmosphere makes the neighborhood attractive to real estate developers and white-collar professionals who want the urban aesthetic without the urban grit.

As wealthier residents move in, property values and rents soar. Landlords, realizing they can charge higher market rates, may evict long-term, low-income tenants or let buildings deteriorate to force them out. [B] Local businesses—the bodega or the laundromat—are replaced by high-end boutiques and gourmet restaurants that the original residents cannot afford. This is the "displacement" phase. The original community loses not just its homes, but its social fabric and history.

Proponents of gentrification argue it reduces crime, improves infrastructure, and increases the tax base. [C] A decaying neighborhood with boarded-up windows is transformed into a safe, green, economically productive district. They argue that concentrated poverty is bad for cities and that mixing incomes creates better schools and services.

However, critics argue that the benefits rarely trickle down to the original residents; they are simply pushed to the outer suburbs, further from jobs and transit. The "revitalization" is for the newcomers, not the incumbents. [D] Modern urban planning seeks "equitable development" strategies—such as rent control, community land trusts, and inclusionary zoning (requiring new luxury buildings to include affordable units)—to mitigate the brutality of the market and allow a neighborhood to improve without removing the people who built it.
    `.trim(),
        questions: [
            {
                id: "batch4_topic12_gentrification_Q1",
                question: "What characterizes the 'displacement' phase of gentrification?",
                options: [
                    "Artists moving into abandoned warehouses.",
                    "The government tearing down old buildings.",
                    "Rising rents and property values forcing original low-income residents and businesses to leave.",
                    "New parks and schools being built."
                ],
                correctAnswer: "C",
                explanation: "The passage describes it: 'Landlords... evict long-term, low-income tenants... This is the \"displacement\" phase.'"
            }
        ]
    },
    {
        id: "batch4_topic13_polymerization",
        taskType: "academic",
        title: "The Chemistry of Polymerization and the Age of Plastics",
        passage: `
**Rhetorical Structure:** Mechanism/Impact
**Dominant TOEFL Skill:** Factual Information

The 20th century is often called the "Plastic Age." The materials that define modern life—nylon, polyester, polyethylene, PVC—are all synthetic *polymers*. A polymer (from Greek *poly*, "many"; *mer*, "part") is a massive molecule built by repeating the same small molecular unit, called a *monomer*, thousands of times. The chemical reaction that links these monomers together is called *polymerization*.

There are two primary methods of polymerization: "Addition" and "Condensation."

In *Addition Polymerization*, the monomer contains a double bond between carbon atoms. [A] To start the reaction, a catalyst (like a free radical) breaks this double bond. The carbon atom, now desperate to bond, grabs the carbon atom of a neighboring monomer. This chain reaction zips down the line, linking monomers instantly like a line of holding hands. This is how *polyethylene* is made from ethylene gas. By tweaking the pressure, chemists can make Low-Density Polyethylene (LDPE) for flexible grocery bags or High-Density Polyethylene (HDPE) for rigid milk jugs.

In *Condensation Polymerization*, two different monomers react and join by ejecting a small molecule, usually water. [B] This is how *Nylon* is made. It forms strong fibers because the chains can hydrogen-bond to each other. This strength allowed nylon to replace silk in parachutes and stockings during WWII.

The revolutionary property of plastics is their plasticity—the ability to be molded into any shape—and their durability. [C] Unlike wood or metal, polymers are impervious to rot and rust. They are light, cheap, and effective insulators.

However, the chemical stability that makes plastic so useful is precisely what makes it an environmental nightmare. The bonds in synthetic polymers are not recognized by bacteria. [D] Nature has no enzymatic "knife" to cut these chains. Consequently, a plastic bottle does not biodegrade; it simply photo-degrades, breaking into smaller and smaller *microplastics* over centuries. These particles pervade the food chain, from plankton to humans. The challenge for 21st-century chemistry is to invent "biopolymers" that have the durability of commercial plastics but contain a chemical "self-destruct switch" triggered by composting conditions.
    `.trim(),
        questions: [
            {
                id: "batch4_topic13_polymerization_Q1",
                question: "Why do synthetic plastics persist in the environment for centuries?",
                options: [
                    "Because they are too heavy to float.",
                    "Because their chemical bonds are not recognized by bacterial enzymes, preventing biodegradation.",
                    "Because animals do not eat them.",
                    "Because they are made of oil."
                ],
                correctAnswer: "B",
                explanation: "The text explains: 'The bonds in synthetic polymers are not recognized by bacteria. Nature has no enzymatic \"knife\" to cut these chains.'"
            }
        ]
    },
    {
        id: "batch4_topic14_piano_history",
        taskType: "academic",
        title: "Bartolomeo Cristofori and the Invention of the Piano",
        passage: `
**Rhetorical Structure:** Problem-Solution/Evolution
**Dominant TOEFL Skill:** Sentence Insertion

In the year 1700, the musical world was dominated by two keyboard instruments: the harpsichord and the clavichord. Both had fatal flaws. The harpsichord was loud and brilliant, suitable for concert halls, but it lacked nuance. Its strings were *plucked* by a quill mechanism. No matter how gently or forcefully the player hit the key, the volume was the same. It had no "dynamics." The clavichord, on the other hand, struck the strings with a metal blade (tangent) and was capable of subtle expression, but it was whisper-quiet, useless for anything but a small room. [A] Musicians needed a hybrid: an instrument with the power of the harpsichord and the expressiveness of the clavichord.

Bartolomeo Cristofori, the keeper of instruments for the Medici court in Florence, solved this engineering puzzle with the invention of the *gravicembalo col piano e forte* ("harpsichord with soft and loud"), or simply, the *piano*.

The core innovation was the "hammer action." Cristofori replaced the plucking quill with a leather-covered hammer. When the key was pressed, the hammer swung up to strike the string. [B] Crucially, the harder the key was pressed, the faster the hammer moved, and the louder the sound. This gave the player total dynamic control.

However, a simple hammer had a problem: if it stayed touching the string, it would dampen the vibration immediately, killing the sound. Cristofori invented the "escapement" mechanism. [C] This complex series of levers allowed the hammer to strike the string and then immediately bounce *back* slightly, even while the player was still holding the key down. This allowed the string to ring freely. A separate damper would stop the sound only when the key was released.

The invention was initially ignored in Italy but championed in Germany. [D] It underwent massive evolution. The industrial revolution brought cast-iron frames (allowing for higher string tension and massive volume) and felt hammers (creating a mellower tone). By the time of Beethoven, the piano had become the king of instruments, capable of replacing an entire orchestra, a status it owes to Cristofori’s mechanical genius in uncoupling the hammer from the key.
    `.trim(),
        questions: [
            {
                id: "batch4_topic14_piano_history_Q1",
                question: "What problem did Cristofori's 'escapement' mechanism solve?",
                options: [
                    "It made the piano louder.",
                    "It allowed the hammer to bounce back from the string so it wouldn't dampen the vibration.",
                    "It made the keys easier to press.",
                    "It allowed the piano to stay in tune longer."
                ],
                correctAnswer: "B",
                explanation: "The passage states: 'This... allowed the hammer to strike the string and then immediately bounce *back* slightly... This allowed the string to ring freely.'"
            }
        ]
    },
    {
        id: "batch4_topic15_ocean_acidification",
        taskType: "academic",
        title: "The Chemical Process and Ecological Impact of Ocean Acidification",
        passage: `
**Rhetorical Structure:** Cause-Effect/Chemical Process
**Dominant TOEFL Skill:** Vocabulary in Context

Climate change discussions usually focus on the warming of the atmosphere ("The Greenhouse Effect"). However, a silent, equally deadly parallel process is occurring in the seas: Ocean Acidification, often termed "global warming's evil twin." Since the Industrial Revolution, the ocean has absorbed approximately 30% of the carbon dioxide ($CO_2$) emitted by humans. While this has slowed atmospheric warming, it is fundamentally altering the chemistry of the seawater.

The chemistry is straightforward. When $CO_2$ dissolves in seawater ($H_2O$), it forms carbonic acid ($H_2CO_3$). [A] This acid releases hydrogen ions ($H^+$), which lowers the pH of the water (making it more acidic). The ocean's pH has already dropped by 0.1 units, which represents a 30% increase in acidity (since the pH scale is logarithmic).

The primary victims of this shift are "calcifying organisms"—creatures that build shells or skeletons out of calcium carbonate ($CaCO_3$). This group includes corals, oysters, clams, sea urchins, and crucial plankton like pteropods.

Calcium carbonate formation relies on carbonate ions. However, the excess hydrogen ions introduced by the acid bind greedily to the available carbonate ions to form bicarbonate. [B] This effectively steals the building blocks from the organisms. They have to spend far more metabolic energy to build their shells, leaving less energy for growth and reproduction. In extreme scenarios (high acidity), existing shells can literally begin to dissolve. [C]

Pteropods (sea butterflies) are the "canary in the coal mine." These tiny swimming snails are the base of the food web in the polar oceans, eaten by salmon, mackerel, and whales. Surveys show their shells are already pitting and dissolving in the Southern Ocean. [D] If the pteropod population collapses, the entire marine food web could crash. Acidification is not a future prediction; it is a measurable, present-day chemical reality that threatens to erode the biological foundation of the ocean.
    `.trim(),
        questions: [
            {
                id: "batch4_topic15_ocean_acidification_Q1",
                question: "How does ocean acidification primarily harm calcifying organisms like corals and oysters?",
                options: [
                    "The acid burns their skin.",
                    "The hydrogen ions bind to carbonate ions, reducing the material available to build shells.",
                    "It makes the water too hot for them.",
                    "It kills the plankton they eat."
                ],
                correctAnswer: "B",
                explanation: "The passage explains: 'the excess hydrogen ions... bind greedily to the available carbonate ions... This effectively steals the building blocks from the organisms.'"
            }
        ]
    },
    {
        id: "batch4_topic16_pidgins_creoles",
        taskType: "academic",
        title: "Language Contact: The Evolution from Pidgin to Creole",
        passage: `
**Rhetorical Structure:** Definition/Evolution
**Dominant TOEFL Skill:** Negative Factual Information

When specific groups of people who do not share a common language are forced into contact—typically through trade, plantation slavery, or colonization—a linguistic necessity arises: they must communicate. The result is the formation of a *pidgin*. A pidgin is a simplified, makeshift language. It is nobody's mother tongue. It has a limited vocabulary (mostly drawn from the dominant "superstrate" language, like English or French) and a stripped-down grammar (often from the local "substrate" languages). It is purely a utilitarian tool for business or survival.

However, a remarkable transformation occurs when a pidgin is spoken by a community for an extended period. [A] If children are born into a community where the pidgin is the primary mode of adult communication, they acquire it as their native language. But children's brains are "grammar machines." They do not accept the broken, chaotic structure of the pidgin. Instinctively, they inject complexity into it. They regularize the grammar, expand the vocabulary, and create a fully functional, expressive language. This new native language is called a *Creole*.

Haitian Kreyòl and Tok Pisin (Papua New Guinea) are examples of Creoles. They are not "broken" versions of French or English; they are distinct languages with their own rigid rules. [B] For example, while English verbs change form (go/went/gone), Creoles often use invariant verb stems and indicate tense with particles (markers) placed before the verb.

The study of Creoles (Creolistics) has fueled the debate about "Universal Grammar." [C] Linguist Derek Bickerton noted that Creoles formed in widely separated parts of the world (Hawaii, Caribbean, West Africa) share nearly identical grammatical structures—structures that don't exist in the parent languages. He argued that this supports the idea of an innate "language bioprogram" in the human brain. When the input is fragmented (pidgin), the child's brain fills in the gaps using default, hard-wired settings.

Thus, a Creole is a testament to the human instinct for language. [D] It demonstrates that language is not just something we learn from our environment; it is something we actively create. A pidgin is a language of survival; a Creole is a language of life.
    `.trim(),
        questions: [
            {
                id: "batch4_topic16_pidgins_creoles_Q1",
                question: "What distinguishes a Creole language from a Pidgin language?",
                options: [
                    "A Creole has no grammar rules.",
                    "A Creole is a fully complex native language developed by children from a Pidgin.",
                    "A Creole is an ancient language that is dying out.",
                    "A Creole is only spoken by adults."
                ],
                correctAnswer: "B",
                explanation: "The text states: 'If children are born into a community where the pidgin is the primary... they acquire it as their native language... They regularize the grammar... This new native language is called a *Creole*.'"
            }
        ]
    },
    {
        id: "batch4_topic17_silk_road",
        taskType: "academic",
        title: "The Silk Road: A Conduit for Technology and Disease",
        passage: `
**Rhetorical Structure:** Analysis/Synthesis
**Dominant TOEFL Skill:** Prose Summary

The Silk Road was never a single road, nor was it primarily about silk. It was a shifting network of caravan tracks stretching 4,000 miles from Han Dynasty China to the Mediterranean Roman Empire. While it facilitated the exchange of luxury goods (silk, jade, glass, spices), its most profound historical impact lies in the "invisible cargo" it carried: technologies, religions, and pathogens. It was the internet of the ancient world.

Technologically, the flow was predominantly East-to-West. [A] The three inventions that Francis Bacon claimed changed the world—paper, gunpowder, and the compass—all migrated from China to Europe via these routes. Paper making, a guarded Chinese secret, was reportedly transmitted to the Islamic world after the Battle of Talas (751 CE), where Chinese papermakers were captured. From Baghdad, it spread to Spain and Italy, eventually enabling the European printing revolution. Without the Silk Road, the Renaissance might have famously lacked the paper to print its ideas on.

Religiously, the road was a two-way street. Buddhism traveled from India to China and Japan along the trade hubs of the Taklamakan Desert. [B] Manichaeism and Nestorian Christianity moved East. The merchants were the missionaries. Monasteries (like the Mogao Caves) sprang up as rest stops, becoming repositories of diverse cultural texts.

However, the connectivity came with a biological price. The same networks that carried silk carried the flea-infested rats that harbored *Yersinia pestis*—the Bubonic Plague. [C] The "Black Death" of the 14th century, which wiped out a third of Europe's population, moved along the Mongol-protected trade routes. The Mongol Empire's *Pax Mongolica* made the road safe for travel, inadvertently creating a superhighway for the pandemic.

Historically, the decline of the Silk Road was triggered by the rise of maritime trade. [D] When Portuguese explorers like Vasco da Gama discovered sea routes to India in 1498, the dangerous, slow, and tax-heavy overland trek became obsolete. The center of the world shifted from the Central Asian steppes to the Atlantic and Indian Oceans, leaving the great caravan cities like Samarkand to fade into romantic memory.
    `.trim(),
        questions: [
            {
                id: "batch4_topic17_silk_road_Q1",
                question: "Why does the passage refer to the Silk Road as the 'internet of the ancient world'?",
                options: [
                    "Because it was very fast.",
                    "Because it facilitated the transmission of 'invisible cargo' like ideas, technologies, and diseases.",
                    "Because people used it to send letters.",
                    "Because it connected everyone in the world."
                ],
                correctAnswer: "B",
                explanation: "The passage explains: 'its most profound historical impact lies in the \"invisible cargo\" it carried: technologies, religions, and pathogens.'"
            }
        ]
    },
    {
        id: "batch4_topic18_cambrian_explosion",
        taskType: "academic",
        title: "The Cambrian Explosion and the Sudden Appearance of Body Plans",
        passage: `
**Rhetorical Structure:** Phenomenon/Hypotheses
**Dominant TOEFL Skill:** Inference

For the first 3.5 billion years of life on Earth, the oceans were populated primarily by simple, single-celled organisms and, later, soft-bodied creatures like sponges and jellyfish (the Ediacaran biota). Then, in a geological heartbeat—a span of roughly 20-25 million years around 541 million years ago—nearly every major animal phylum (body plan) appeared in the fossil record. This event, known as the *Cambrian Explosion*, is the most significant diversification event in evolutionary history. The question is: why then?

The sheer variety is evident in the Burgess Shale fossils in Canada. [A] We see the first hard parts: shells, exoskeletons, claws, and teeth. Creatures like *Anomalocaris* (a giant predatory shrimp) and *Opabinia* (with five eyes and a vacuum-nozzle proboscis) evolved. We see the first ancestors of vertebrates (chordates).

One hypothesis for the trigger is *environmental*. Oxygen levels in the ocean may have finally crossed a critical threshold. [B] Active, mobile, predatory lifestyles require huge amounts of energy, which requires oxygen. With more oxygen, animals could grow larger and build collagen (connective tissue) and shells.

Another hypothesis is *ecological*: the "Arms Race." The evolution of vision may have sparked it. Once a predator evolved an eye, it could spot prey. The prey had to evolve armor (shells) or speed to survive. The predator then evolved crushing claws to break the shells. [C] This feedback loop of adaptation and counter-adaptation drove hyper-rapid evolution.

A third hypothesis is *genetic*. The evolution of Hox genes—the "architect genes" that control the layout of the body (head here, tail there, leg here)—may have reached a level of complexity that allowed for endless tinkering. [D] Once the genetic toolkit for building a body was complete, evolution could rapidly experiment with different designs. Regardless of the cause, the Cambrian Explosion set the stage; essentially all animal life today is a variation on the themes established in that burst of creativity half a billion years ago.
    `.trim(),
        questions: [
            {
                id: "batch4_topic18_cambrian_explosion_Q1",
                question: "What is the 'Arms Race' hypothesis regarding the Cambrian Explosion?",
                options: [
                    "Animals started fighting over territory.",
                    "The evolution of predators (and vision) forced prey to evolve defenses like shells, driving rapid diversification.",
                    "Different species competed for the most oxygen.",
                    "Aliens introduced new weapons."
                ],
                correctAnswer: "B",
                explanation: "The passage describes it: 'Once a predator evolved an eye... The prey had to evolve armor (shells)... This feedback loop... drove hyper-rapid evolution.'"
            }
        ]
    },
    {
        id: "batch4_topic19_multiple_intelligences",
        taskType: "academic",
        title: "Howard Gardner’s Theory of Multiple Intelligences",
        passage: `
**Rhetorical Structure:** Theory/Critique
**Dominant TOEFL Skill:** Rhetorical Purpose

For most of the 20th century, intelligence was viewed as a single, general cognitive ability ($g$-factor), quantifiable by a singular metric: the IQ test. This test primarily measured logical-mathematical and linguistic skills. In 1983, psychologist Howard Gardner challenged this monolithic view with his theory of *Multiple Intelligences* (MI). Gardner argued that "intelligence" is not a single entity, but a set of relatively autonomous capacities or "computational devices."

Gardner initially proposed seven intelligences (later adding an eighth). [A] Beyond the traditional *Linguistic* and *Logical-Mathematical* types, he identified:
*   *Spatial* (visualizing the world, used by architects).
*   *Musical* (discerning rhythm and pitch).
*   *Bodily-Kinesthetic* (controlling motion, used by dancers/surgeons).
*   *Interpersonal* (understanding others, social skill).
*   *Intrapersonal* (understanding oneself).
*   *Naturalist* (categorizing the environment).

Gardner supported his theory with data from brain damage patients. He noted that a stroke might destroy a person's ability to speak (Linguistic) but leave their ability to paint (Spatial) or sing (Musical) perfectly intact. [B] This separation of function in the brain suggested separate biological bases for these skills.

The theory revolutionized education. Teachers moved away from pure lectures (which favor linguistic students) to using "differentiated instruction"—using music, art, and group work to engage different intelligences. It democratized the concept of being "smart."

However, MI theory is controversial among psychometricians (scientists who measure psychological traits). [C] Critics argue that Gardner's "intelligences" are merely "talents" or "personality traits." They point out that valid tests show a high correlation between skills: people who are good at math *tend* to also be good at language. This supports the existence of a general $g$-factor underlying all performance. They argue Gardner widened the definition of intelligence so much that it became meaningless. [D] despite the lack of hard empirical evidence, MI remains a dominant framework in pedagogy because it offers a more holistic, humanistic view of potential.
    `.trim(),
        questions: [
            {
                id: "batch4_topic19_multiple_intelligences_Q1",
                question: "What evidence did Howard Gardner use to support his theory of separate intelligences?",
                options: [
                    "IQ test scores.",
                    "Brain damage case studies where one ability was lost while others remained intact.",
                    "Surveys of teachers.",
                    "The success of musicians in math class."
                ],
                correctAnswer: "B",
                explanation: "The text notes: 'He noted that a stroke might destroy a person's ability to speak... but leave their ability to paint... perfectly intact.'"
            }
        ]
    },
    {
        id: "batch4_topic20_suspension_bridges",
        taskType: "academic",
        title: "The Engineering Principles of Suspension Bridges",
        passage: `
**Rhetorical Structure:** Mechanism/Physics
**Dominant TOEFL Skill:** Factual Information

When spanning vast distances—like the Golden Gate Strait or the Verrazzano-Narrows—traditional beam or arch bridges are structurally impossible or economically ruinous. The only solution is the *suspension bridge*. This elegant structure operates on a principle of tension (pulling) rather than compression (pushing).

The anatomy of a suspension bridge is distinct. It consists of two massive towers primarily in compression, carrying the weight down to the bedrock. [A] Draped over these towers are two enormous main cables, typically made of thousands of strands of high-tensile steel wire spun together. From these main cables, smaller vertical "suspender cables" hang down to hold up the deck (the road).

The physics is a balancing act. The deck hangs from the suspenders. The suspenders pull down on the main cable. The main cable pulls down on the towers (compression) and pulls *inward* on the anchorages. [B] The anchorages are massive concrete blocks at the ends of the bridge, buried deep in the earth. Their job is to resist the immense tension of the cables trying to pull out of the ground. The entire road is effectively trying to pull the two shores together.

The enemy of the suspension bridge is not weight, but wind. Because the deck is flexible and hangs freely, it acts like an airplane wing. [C] If the wind hits it at the wrong angle, it can induce "aeroelastic flutter." The bridge begins to twist and oscillate. If the frequency of the wind matches the natural resonant frequency of the bridge, the motion amplifies violently.

This was illustrated by the catastrophe of the Tacoma Narrows Bridge ("Galloping Gertie") in 1940. The deck was a solid plate that caught the wind. It twisted itself apart in a 40mph wind. [D] Modern suspension bridges solve this by using open trusses that allow wind to pass through, or by shaping the deck aerodynamically to slice the wind, ensuring stability even in a hurricane.
    `.trim(),
        questions: [
            {
                id: "batch4_topic20_suspension_bridges_Q1",
                question: "How do modern engineers prevent suspension bridges from twisting in the wind like the Tacoma Narrows Bridge?",
                options: [
                    "By making the bridge much heavier.",
                    "By using open trusses or aerodynamic decks to allow wind to pass through.",
                    "By anchoring the bridge loosely.",
                    "By closing the bridge on windy days."
                ],
                correctAnswer: "B",
                explanation: "The passage states: 'Modern suspension bridges... us[e] open trusses that allow wind to pass through, or by shaping the deck aerodynamically.'"
            }
        ]
    }
];
