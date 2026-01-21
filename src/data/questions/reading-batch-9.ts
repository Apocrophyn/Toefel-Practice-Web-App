
import { AcademicQuestion } from "./reading-2026";

export const batch9Passages: AcademicQuestion[] = [
    {
        id: "batch9_topic1_tsunamis",
        taskType: "academic",
        title: "Physics of Tsunamis: The Propagation of Seismic Sea Waves",
        passage: `
**Rhetorical Structure:** Mechanism/Contrast
**Dominant TOEFL Skill:** Factual Information

A tsunami is often mistakenly called a "tidal wave." It has nothing to do with tides (which are caused by the moon's gravity). A tsunami is a series of waves caused by the displacement of a large volume of water, usually by an undersea earthquake or landslide. The physics of a tsunami differs fundamentally from that of a normal wind-driven wave.

Wind waves happen at the surface. Their energy is limited to the top few meters of the ocean. [A] A tsunami involves the movement of the *entire* water column, from the seafloor to the surface.

In deep water, a tsunami is almost invisible. It travels at jetliner speeds (500 mph) but has a very long wavelength (100 miles) and a very low amplitude (maybe 1 foot high). [B] A ship at sea wouldn't even feel it pass.

The danger arises when the wave approaches shallow water near the coast. This is "Shoaling." As the depth decreases, the friction with the seabed slows the front of the wave down. However, the back of the wave is still moving at 500 mph. The water piles up. [C] The wavelength compresses, and the energy is forced upward, causing the wave height to grow from 1 foot to 50 or 100 feet.

When it hits land, it doesn't break like a surfer's wave. It surges like a rapidly rising tide that doesn't stop. [D] It pushes inland with the weight of the ocean behind it, destroying buildings through hydrostatic force and debris impact.
    `.trim(),
        questions: [
            {
                id: "batch9_topic1_tsunamis_Q1",
                question: "What happens during the process of 'Shoaling' as a tsunami approaches the coast?",
                options: [
                    "The wave disappears.",
                    "The wave turns into ice.",
                    "Friction with the seabed slows the front of the wave, compressing the energy and forcing the wave height to grow dramatically.",
                    "The wave reverses direction."
                ],
                correctAnswer: "C",
                explanation: "The text explains: 'As the depth decreases, the friction with the seabed slows the front... The wavelength compresses, and the energy is forced upward, causing the wave height to grow.'"
            }
        ]
    },
    {
        id: "batch9_topic2_hanseatic_league",
        taskType: "academic",
        title: "The Hanseatic League: A Medieval Mercantile Superpower",
        passage: `
**Rhetorical Structure:** Chronology/Organization
**Dominant TOEFL Skill:** Inference

In the late Middle Ages (13th-17th centuries), the Baltic and North Seas were dominated not by a King or Emperor, but by a corporation: the *Hanseatic League* (Hansa). It was a confederation of merchant guilds and market towns (like Lübeck, Hamburg, and Danzig) that banded together to protect their economic interests.

The League arose to solve the problem of piracy and feudal taxes. [A] By traveling in convoys and hiring their own mercenaries, the Hansa merchants could safely transport timber, fur, wax, and dried fish across danger zones.

They established "Kontors" (foreign trading posts) in cities like London (the Steelyard) and Novgorod. These were cities within cities, governed by Hansa law, not local law. [B]

The League was not a government. It had no army or constitution. It enforced its will through the "Blockade." If a King tried to tax them unfairly, the League would stop all trade with his kingdom. [C] For a medieval economy dependent on imported salt or grain, this was devastating. They once brought the King of Denmark to his knees simply by refusing to sell him herring.

The decline of the League came with the Rise of the Nation-State. [D] As centralized monarchies in Sweden and England grew powerful, they forced the merchants to submit to royal authority. The discovery of the Americas also shifted trade routes to the Atlantic, leaving the Baltic backwater behind.
    `.trim(),
        questions: [
            {
                id: "batch9_topic2_hanseatic_league_Q1",
                question: "How did the Hanseatic League exert power over kingdoms that opposed them?",
                options: [
                    "They declared war using their own army.",
                    "They used the 'Blockade,' stopping all trade with the kingdom to starve its economy.",
                    "They bribed the King.",
                    "They kidnapped the Queen."
                ],
                correctAnswer: "B",
                explanation: "The passage notes: 'It enforced its will through the \"Blockade.\"... For a medieval economy dependent on imported salt or grain, this was devastating.'"
            }
        ]
    },
    {
        id: "batch9_topic3_mimicry",
        taskType: "academic",
        title: "Biological Mimicry: Batesian vs. Müllerian Strategies",
        passage: `
**Rhetorical Structure:** Classification/Comparison
**Dominant TOEFL Skill:** Sentence Insertion

In the animal kingdom, looking dangerous is often as good as being dangerous. This is the principle of *Mimicry*. Evolutionary biologists distinguish between two primary forms: Batesian and Müllerian.

*Batesian Mimicry* involves a liar. [A] A harmless species (the mimic) evolves to look like a dangerous or toxic species (the model). The classic example is the Viceroy butterfly, which looks nearly identical to the toxic Monarch butterfly.

Birds learn to avoid the Monarch because it tastes terrible. By looking like the Monarch, the tasty Viceroy gains protection. [B] This strategy only works if the mimics are rare. If there are too many liars, the predators will realize the signal is fake and start eating both.

*Müllerian Mimicry* involves honest cooperation. [C] Two or more harmful species evolve to look like *each other*. For example, many different species of stinging bees and wasps share the same yellow-and-black striped pattern.

This is mutual reinforcement. A predator only has to learn the lesson once ("Yellow stripes = pain"). By sharing the same warning signal, the bees share the cost of educating the predator. Fewer individuals of each species are sacrificed to teach the young birds what not to eat.

In Batesian mimicry, the mimic is a parasite on the model's reputation. In Müllerian mimicry, it is a syndicate of shared defense. [D]
    `.trim(),
        questions: [
            {
                id: "batch9_topic3_mimicry_Q1",
                question: "What is the key difference between Batesian and Müllerian mimicry?",
                options: [
                    "Batesian mimicry happens in water; Müllerian happens on land.",
                    "Batesian mimicry involves a harmless liar mimicking a dangerous species; Müllerian involves multiple dangerous species looking alike for shared benefit.",
                    "Batesian mimicry involves plants; Müllerian involves animals.",
                    "There is no difference."
                ],
                correctAnswer: "B",
                explanation: "The passage compares them: 'Batesian Mimicry involves a liar [harmless mimicking harmful]... Müllerian Mimicry involves honest cooperation [harmful mimicking harmful].'"
            }
        ]
    },
    {
        id: "batch9_topic4_southern_gothic",
        taskType: "academic",
        title: "William Faulkner and the Southern Gothic Tradition",
        passage: `
**Rhetorical Structure:** Context/Style
**Dominant TOEFL Skill:** Rhetorical Purpose

Southern Gothic is a subgenre of American literature that uses macabre, ironic scenarios to explore the social values of the American South. Unlike the traditional Gothic (castles and ghosts), Southern Gothic features decaying plantations and damaged characters. The giant of this genre is William Faulkner.

Faulkner set his novels (like *The Sound and the Fury*) in the fictional Yoknapatawpha County, Mississippi. [A] His central theme was the "burden of the past." The South, defeated in the Civil War, was haunted by the ghosts of slavery and lost aristocracy.

His characters are often grotesque—mentally unstable or physically deformed—representing the moral decay of the culture. [B] In "A Rose for Emily," a woman sleeps next to the corpse of her lover for decades, a symbol of the South refusing to let go of dead traditions.

Stylistically, Faulkner was a modernist. He used "Stream of Consciousness," recording the chaotic, non-linear thoughts of his characters. [C] He famously used long, winding sentences that spanned pages, mimicking the way memory spirals and overlaps.

Southern Gothic exposes the myth of the "genteel South." [D] Behind the white columns and polite manners, Faulkner revealed violence, racism, and madness. He showed that the past is never dead. It's not even past.
    `.trim(),
        questions: [
            {
                id: "batch9_topic4_southern_gothic_Q1",
                question: "What theme is central to William Faulkner's 'Southern Gothic' literature?",
                options: [
                    "The future of technology.",
                    "The 'burden of the past,' specifically the haunting legacy of the Civil War and slavery.",
                    "Romance in New York City.",
                    "Space exploration."
                ],
                correctAnswer: "B",
                explanation: "The text states: 'His central theme was the \"burden of the past.\" The South... was haunted by the ghosts of slavery and lost aristocracy.'"
            }
        ]
    },
    {
        id: "batch9_topic5_inflation_types",
        taskType: "academic",
        title: "Economics of Inflation: Demand-Pull vs. Cost-Push",
        passage: `
**Rhetorical Structure:** Cause-Effect/Classification
**Dominant TOEFL Skill:** Prose Summary

Inflation is a general increase in prices and a fall in the purchasing power of money. Economists generally categorize the causes of inflation into two types: *Demand-Pull* and *Cost-Push*.

*Demand-Pull* inflation is often described as "too much money chasing too few goods." [A] This happens when the economy is booming. Consumers have cash and want to buy cars and houses. If the factories cannot produce cars fast enough to meet this demand, they raise prices.

Governments can cause this by printing too much money or lowering interest rates excessively. It is the inflation of prosperity (or over-heating).

*Cost-Push* inflation is the inflation of scarcity. [B] It happens when the cost of production rises, forcing companies to raise prices to maintain profit margins. The classic example is the Oil Shock of the 1970s. When the price of oil tripled, it cost more to transport food, manufacture plastic, and heat homes. Every business had to charge more.

This is more dangerous because it often leads to "Stagflation"—stagnant growth (unemployment) combined with inflation. [C] In Demand-Pull, people are at least employed. In Cost-Push, people lose jobs *and* prices go up.

Central Banks (like the Federal Reserve) fight inflation by raising interest rates. [D] This makes borrowing expensive, which cools down demand. It is a bitter medicine—deliberately slowing the economy to save the currency.
    `.trim(),
        questions: [
            {
                id: "batch9_topic5_inflation_types_Q1",
                question: "Why is 'Cost-Push' inflation considered more dangerous than 'Demand-Pull' inflation?",
                options: [
                    "It only happens in poor countries.",
                    "It leads to 'Stagflation,' where high prices combine with job losses and stagnant growth.",
                    "It makes money worth more.",
                    "It cannot be stopped."
                ],
                correctAnswer: "B",
                explanation: "The passage explains: 'This is more dangerous because it often leads to \"Stagflation\"... In Cost-Push, people lose jobs *and* prices go up.'"
            }
        ]
    },
    {
        id: "batch9_topic6_plateaus",
        taskType: "academic",
        title: "Geological Formation of Plateaus: Uplift vs. Volcanism",
        passage: `
**Rhetorical Structure:** Comparison/Process
**Dominant TOEFL Skill:** Factual Information

A plateau is a flat, elevated landform that rises sharply above the surrounding area on at least one side. They cover 45% of the Earth's land surface. Geologically, they are formed by two very different processes: Dissection/Uplift and Volcanism.

*Uplifted Plateaus* (like the Colorado Plateau) are created by tectonic forces. [A] Massive sections of the crust are pushed upward by the mantle, but crucially, they remain horizontal. They don't fold into mountains.

Once lifted, water attacks. Rivers cut deep canyons into the flat tableland. This is why the Grand Canyon exists—it is a river cutting into an uplifted plateau. The mesa and buttes (flat-topped hills) are the remnants of the original plateau surface that haven't been eroded yet.

*Volcanic Plateaus* (like the Deccan Traps in India or the Columbia Plateau in the US) are built from the top down. [B] They are formed by "flood basalts." Instead of a volcano exploding, massive fissures open in the ground, and runny lava pours out like water.

This lava spreads over thousands of square miles, filling in valleys and depressions. [C] It cools into a flat sheet of basalt. Layer after layer builds up over millions of years, creating a flat, high plain of rock.

Both types effect the climate. [D] The Tibetan Plateau (caused by the collision of India and Asia) is so massive it physically blocks weather systems, creating the Monsoons that water half of humanity.
    `.trim(),
        questions: [
            {
                id: "batch9_topic6_plateaus_Q1",
                question: "How are 'Volcanic Plateaus' like the Deccan Traps formed?",
                options: [
                    "By earthquakes pushing land up.",
                    "By 'flood basalts,' where runny lava pours from fissures and builds up in flat layers.",
                    "By wind erosion.",
                    "By meteors."
                ],
                correctAnswer: "B",
                explanation: "The text states: 'They are formed by \"flood basalts.\"... runny lava pours out like water... It cools into a flat sheet... Layer after layer builds up.'"
            }
        ]
    },
    {
        id: "batch9_topic7_vulcanization",
        taskType: "academic",
        title: "Charles Goodyear and the Vulcanization of Rubber",
        passage: `
**Rhetorical Structure:** Problem-Solution/Narrative
**Dominant TOEFL Skill:** Negative Factual Information

Natural rubber (latex) comes from the sap of the *Hevea* tree. Indigenous Americans used it for balls and waterproofing. When Europeans discovered it, they found it had a fatal flaw. It was unstable. In the winter, it froze and cracked like glass. In the summer, it melted into a sticky, smelly goo. It was useless for industry.

Charles Goodyear, an American inventor, spent years trying to stabilize rubber. He was obsessed, often impoverished and in and out of debtors' prison. [A] He mixed rubber with everything—magnesia, lime, nitric acid—with no success.

The breakthrough happened by accident in 1839. [B] Goodyear dropped a mixture of rubber and *sulfur* onto a hot stove. Instead of melting, the rubber charred and hardened. It stayed flexible but dry. He had discovered *Vulcanization* (named after Vulcan, the god of fire).

Chemically, the sulfur atoms form "cross-links" or bridges between the long polymer chains of the rubber. [C] Imagine the rubber molecules are spaghetti. Uncooked, they slide past each other (gooey). The sulfur acts like staples connecting the noodles. They can still stretch, but the staples pull them back into shape.

Goodyear patented it, but died in debt, fighting lawsuits. [D] However, his invention made the Industrial Revolution mobile. Without vulcanized rubber, there are no gaskets for steam engines, no belts for factories, and most importantly, no tires for the automobile.
    `.trim(),
        questions: [
            {
                id: "batch9_topic7_vulcanization_Q1",
                question: "What chemical process occurs during the 'Vulcanization' of rubber?",
                options: [
                    "Rubber is boiled in water.",
                    "Sulfur atoms form 'cross-links' between rubber molecules, stabilizing them.",
                    "Rubber is frozen.",
                    "Rubber is mixed with oil."
                ],
                correctAnswer: "B",
                explanation: "The passage explains: 'the sulfur atoms form \"cross-links\" or bridges between the long polymer chains... The sulfur acts like staples connecting the noodles.'"
            }
        ]
    },
    {
        id: "batch9_topic8_radio_invention",
        taskType: "academic",
        title: "The Invention of Radio: Marconi vs. Tesla",
        passage: `
**Rhetorical Structure:** Conflict/Chronology
**Dominant TOEFL Skill:** Inference

Who invented the radio? The textbook answer is Guglielmo Marconi. The legal answer is Nikola Tesla. The history of wireless communication is a story of rivalry and patent law.

Marconi was a practical businessman. In the 1890s, he took the theories of Heinrich Hertz (radio waves) and built a device to transmit Morse code wirelessly. [A] He saw it as a "wireless telegraph" for ships. In 1901, he famously transmitted the letter "S" across the Atlantic. He won the Nobel Prize.

However, Marconi used 17 of Tesla's patents to build his machine. [B] Tesla had demonstrated the technology years earlier, in 1893. Tesla's vision was grander; he wanted to transmit voice and power wirelessly to the world.

The US Patent Office initially supported Tesla. But in 1904, they suddenly reversed their decision and awarded the patent to Marconi. [C] Historians suspect influence from Marconi's wealthy backers (including Thomas Edison and Andrew Carnegie).

Tesla died penniless. Marconi died rich.

However, in 1943, months after Tesla's death, the US Supreme Court overturned Marconi's patent and ruled that Tesla was the true father of radio. [D] This was partly strategic—the US government was being sued by the Marconi company for using radio in WWI, and by invalidating the patent (crediting the dead Tesla), they avoided paying royalties.
    `.trim(),
        questions: [
            {
                id: "batch9_topic8_radio_invention_Q1",
                question: "Why did the US Supreme Court eventually rule that Nikola Tesla was the true inventor of radio?",
                options: [
                    "Because Tesla was American.",
                    "Because Marconi admitted he stole it.",
                    "Because Tesla had demonstrated the technology years before Marconi, and Marconi's device used Tesla's patents.",
                    "Because Edison testified for Tesla."
                ],
                correctAnswer: "C",
                explanation: "The text notes: 'Tesla had demonstrated the technology years earlier... Marconi used 17 of Tesla's patents... the US Supreme Court... ruled that Tesla was the true father of radio.'"
            }
        ]
    },
    {
        id: "batch9_topic9_attachment_theory",
        taskType: "academic",
        title: "Bowlby’s Attachment Theory: The Secure Base",
        passage: `
**Rhetorical Structure:** Theory/Experiment
**Dominant TOEFL Skill:** Vocabulary in Context

For years, psychologists believed babies loved their mothers simply because the mother provided food ("Cupboard Love"). In the 1950s, John Bowlby and Mary Ainsworth challenged this, proposing *Attachment Theory*. They argued that the need for emotional closeness is an innate evolutionary drive, distinct from hunger.

Bowlby observed war orphans. Children who were fed and safe but lacked a primary caregiver often withered, suffering from "failure to thrive." [A] He realized the mother provides a "Secure Base" from which the child can explore the world.

Ainsworth developed the "Strange Situation" experiment to test this. A mother and child enter a room. A stranger enters. The mother leaves. The mother returns.

The key is how the child reacts upon *return*. [B]
1.  **Secure Attachment:** The child is upset when mom leaves but happy and easily soothed when she returns. This implies the parent is consistent and responsive.
2.  **Insecure-Avoidant:** The child doesn't care when mom leaves or returns. This implies the parent is emotionally unavailable; the child has learned not to ask for comfort.
3.  **Insecure-Anxious:** The child is hysterical when mom leaves and angry/clingy when she returns. [C] This implies inconsistent parenting.

These early patterns became blueprints for adult relationships. Research suggests that securely attached children grow up to have stable marriages, while insecure children struggle with trust or intimacy. [D] Attachment proved that love is not a luxury for a developing brain; it is a nutrient.
    `.trim(),
        questions: [
            {
                id: "batch9_topic9_attachment_theory_Q1",
                question: "In the 'Strange Situation' experiment, what behavior indicates a 'Secure Attachment'?",
                options: [
                    "The child ignores the mother completely.",
                    "The child hits the mother.",
                    "The child is upset when the mother leaves but is easily comforted and happy when she returns.",
                    "The child cries the entire time."
                ],
                correctAnswer: "C",
                explanation: "The passage describes it: 'Secure Attachment: The child is upset when mom leaves but happy and easily soothed when she returns.'"
            }
        ]
    },
    {
        id: "batch9_topic10_quasars",
        taskType: "academic",
        title: "Quasars: The Brightest Objects in the Universe",
        passage: `
**Rhetorical Structure:** Discovery/Explanation
**Dominant TOEFL Skill:** Sentence Insertion

In the 1950s, radio astronomers detected strong radio sources in the sky that looked like stars (points of light) rather than galaxies (fuzzy blobs). They called them "Quasi-stellar radio sources," or *Quasars*. When they analyzed the light spectrum, they were shocked.

The light was "Redshifted" enormously. [A] In astronomy, Redshift indicates an object is moving away from us. Due to the expansion of the universe, the faster it moves, the farther away it is. The redshift showed these objects were billions of light-years away.

To be visible from that distance, they had to be brighter than an entire galaxy of 100 billion stars. Yet, they were tiny—about the size of our solar system. [B] How could so much energy fit in such a small box?

The answer is a *Supermassive Black Hole*. A Quasar is the nucleus of a young, active galaxy. [C] At the center, a black hole (millions of times the mass of the sun) is feeding. As gas and dust spiral into the drain, they form an accretion disk. Friction heats this disk to millions of degrees, blasting out jets of radiation.

We are seeing the death screams of matter as it falls into the abyss.

Quasars are time machines. [D] Because they are far away, we see them as they were billions of years ago. They were common in the early universe when galaxies were colliding and full of gas fuel. Today, most galaxies (like our Milky Way) have "starved" black holes that are quiet. Quasars are the violent adolescence of the cosmos.
    `.trim(),
        questions: [
            {
                id: "batch9_topic10_quasars_Q1",
                question: "What is the source of the immense energy emitted by a Quasar?",
                options: [
                    "A giant star burning hydrogen.",
                    "A fleet of alien spaceships.",
                    "A supermassive black hole at the center of a young galaxy feeding on gas and dust.",
                    "The collision of two planets."
                ],
                correctAnswer: "C",
                explanation: "The text states: 'The answer is a *Supermassive Black Hole*... As gas and dust spiral into the drain... Friction heats this disk... blasting out jets of radiation.'"
            }
        ]
    },
    {
        id: "batch9_topic11_inuit_adaptation",
        taskType: "academic",
        title: "Inuit Adaptations to the Arctic Environment",
        passage: `
**Rhetorical Structure:** Problem-Solution/Culture
**Dominant TOEFL Skill:** Factual Information

The Inuit, inhabiting the Arctic coasts of Canada, Alaska, and Greenland, survived for millennia in one of the earth's most hostile environments. Their success relied on sophisticated technological and physiological adaptations to the cold.

Technologically, they mastered insulation. The parka was a marvel for engineering. [A] Made of caribou skin, the fur is hollow (trapping air). The Inuit wore two layers: the inner layer with fur facing *in* (against the skin) and the outer layer with fur facing *out*. This double-glazing effect is superior to modern synthetic expedition gear.

Shelter was equally ingenious. The *Igloo* (snow house) utilizes the insulating properties of snow. [B] Even when it is -40°C outside, body heat and a seal-oil lamp can raise the interior temperature to near freezing (0°C). A melt-water seal forms on the inner wall, making it windproof.

Diet was the paradox. The Arctic has almost no plants. [C] The Inuit diet was nearly 100% meat (seal, whale, caribou). Normally, this causes scurvy (Vitamin C deficiency). However, the Inuit ate much of the meat raw (*Inuit* means "eaters of raw meat"). Cooking destroys Vitamin C. Raw whale skin (*muktuk*) is rich in it.

Physiologically, the Inuit body type—compact and stocky—minimizes surface area to retain heat (Allen’s Rule). [D] They also have a genetic adaptation that allows specialized fat metabolism, generating more body heat ("brown fat") than people from warmer climates. They are a testament to human plasticity.
    `.trim(),
        questions: [
            {
                id: "batch9_topic11_inuit_adaptation_Q1",
                question: "How did the traditional Inuit diet prevent scurvy despite the lack of plant foods?",
                options: [
                    "They took vitamins.",
                    "They ate moss.",
                    "They ate meat (especially whale skin) raw, which preserved the Vitamin C that cooking would destroy.",
                    "They traded for oranges."
                ],
                correctAnswer: "C",
                explanation: "The passage explains: 'However, the Inuit ate much of the meat raw... Cooking destroys Vitamin C. Raw whale skin (*muktuk*) is rich in it.'"
            }
        ]
    },
    {
        id: "batch9_topic12_art_deco",
        taskType: "academic",
        title: "Art Deco: The Aesthetic of the Machine Age",
        passage: `
**Rhetorical Structure:** Description/Context
**Dominant TOEFL Skill:** Rhetorical Purpose

Art Deco emerged in France in the 1920s and dominated design until World War II. It was the visual language of the "Roaring Twenties" and the Jazz Age. Unlike the floral, organic curves of the previous style (Art Nouveau), Art Deco was geometric, sleek, and streamlined.

It celebrated the *Machine*. [A] Its motifs were sunbursts, zigzags, and stepped forms (like ziggurats). It used expensive, modern materials: aluminum, chrome, stainless steel, lacquer, and inlaid wood. It was the style of luxury ocean liners and fast trains.

The most famous example is the Chrysler Building in New York. [B] Its stainless steel spire, with its repeating sunburst arches, looks like a car radiator grill. It symbolizes speed and capitalism.

Art Deco was also global and eclectic. It absorbed influences from the discovery of King Tut’s tomb (Egyptian motifs) and Aztec architecture. [C]

Interestingly, Art Deco survived the Depression. In the 1930s, it evolved into "Streamline Moderne." The expensive materials were replaced by cheaper concrete and glass blocks, but the shape became even more aerodynamic. Toasters, radios, and diners were designed with curved corners and speed lines, suggesting motion even when standing still. [D] It was an optimistic style, promising a frictionless, technological future.
    `.trim(),
        questions: [
            {
                id: "batch9_topic12_art_deco_Q1",
                question: "What was the main aesthetic inspiration for the 'Art Deco' style?",
                options: [
                    "Nature and flowers.",
                    "The Machine Age, featuring geometric shapes, speed lines, and modern materials.",
                    "Medieval castles.",
                    "Rural farm life."
                ],
                correctAnswer: "B",
                explanation: "The text states: 'It celebrated the *Machine*. Its motifs were sunbursts, zigzags, and stepped forms... It used expensive, modern materials.'"
            }
        ]
    },
    {
        id: "batch9_topic13_vikings",
        taskType: "academic",
        title: "The Vikings: Raiders or Traders?",
        passage: `
**Rhetorical Structure:** Debate/Re-evaluation
**Dominant TOEFL Skill:** Negative Factual Information

History is written by the victims. The monks of Lindisfarne, whose monastery was sacked in 793 CE, described the Vikings (Norsemen) as bloodthirsty barbarians sent by Satan. This one-dimensional image of "rape and pillage" dominated history for centuries. Modern archaeology, however, reveals a more complex reality: the Vikings were primarily farmers, explorers, and sophisticated merchants.

The Viking expansion was driven by demographics and technology. Scandinavia had limited farmland. [A] The invention of the Longship—shallow-draft, symmetrical, capable of sailing rivers and oceans—gave them mobility.

While they did raid, they also built a trade network connecting Baghdad to Newfoundland. [B] In York (Jorvik) and Dublin, they established thriving market cities. They traded amber, furs, and walrus ivory for silk and silver. Excavations show they were skilled craftsmen (combs, jewelry) and had a complex legal system (*Thing* assemblies).

They were also the greatest explorers of the age. [C] Leif Erikson reached North America (Vinland) 500 years before Columbus. They settled Iceland and Greenland.

The assimilation of the Vikings was rapid. In France, they were given land (Normandy) to stop them from raiding. Within a few generations, these "Northmen" became the "Normans," speaking French and building cathedrals, eventually conquering England in 1066. [D] The Viking Age didn't end with a defeat; it ended because they successfully integrated into the Europe they helped build.
    `.trim(),
        questions: [
            {
                id: "batch9_topic13_vikings_Q1",
                question: "What does modern archaeology reveal about the Vikings that challenges the traditional 'barbarian' stereotype?",
                options: [
                    "They didn't have ships.",
                    "They were primarily farmers and sophisticated merchants who built a vast trade network.",
                    "They were actually Romans.",
                    "They never left Scandinavia."
                ],
                correctAnswer: "B",
                explanation: "The passage argues: 'Modern archaeology, however, reveals a more complex reality: the Vikings were primarily farmers, explorers, and sophisticated merchants.'"
            }
        ]
    },
    {
        id: "batch9_topic14_soundproofing",
        taskType: "academic",
        title: "Acoustics: The Physics of Soundproofing",
        passage: `
**Rhetorical Structure:** Problem-Solution/Mechanism
**Dominant TOEFL Skill:** Sequence/Ordering

Sound is vibration. It travels through air (and walls) as a mechanical wave. To stop sound from entering or leaving a room (soundproofing), you must interrupt this energy transfer. Architects use four principles: Mass, Damping, Decoupling, and Absorption.

**1. Mass:** The heavier the wall, the harder it is to shake. [A] A thick concrete wall blocks more sound than a thin wood one. However, mass alone is inefficient (you need huge thickness to double the blocking).

**2. Damping:** This dissipates the energy. A specialized glue ("Green Glue") is sandwiched between two layers of drywall. [B] When the sound hits the wall, the friction in the glue converts the vibration into tiny amounts of heat. The wall acts like a shock absorber.

**3. Decoupling:** This is the most effective method. Sound travels easily through solid studs. If the drywall on both sides is nailed to the same stud, the sound bridges across. [C] Decoupling involves building a "room within a room" or using resilient clips so the two walls don't touch. The vibration cannot jump the gap.

**4. Absorption:** This handles the sound *inside* the room (echo). [D] Fluffy materials like fiberglass or foam catch the sound waves and stop them from bouncing. While absorption makes a room sound better (less echo), it does *not* stop sound from leaving (soundproofing). You need mass and decoupling to stop the noise; you need foam to tune the tone.
    `.trim(),
        questions: [
            {
                id: "batch9_topic14_soundproofing_Q1",
                question: "In soundproofing, what does the principle of 'Decoupling' involve?",
                options: [
                    "Making the wall thicker.",
                    "Adding foam to the room.",
                    "Separating the two sides of a wall physically so vibration cannot travel through the studs.",
                    "Turning down the volume."
                ],
                correctAnswer: "C",
                explanation: "The text explains: 'Decoupling involves building a \"room within a room\" or using resilient clips so the two walls don't touch. The vibration cannot jump the gap.'"
            }
        ]
    },
    {
        id: "batch9_topic15_antibiotic_resistance",
        taskType: "academic",
        title: "The Mechanism of Antibiotic Resistance",
        passage: `
**Rhetorical Structure:** Cause-Effect/Process
**Dominant TOEFL Skill:** Prose Summary

The discovery of Penicillin by Alexander Fleming in 1928 was a miracle. Bacterial infections that were once death sentences became curable. However, Fleming himself warned that misuse would lead to failure. He was right. We are now facing the crisis of *Antibiotic Resistance*.

Antibiotics work by attacking specific bacterial machinery (e.g., destroying the cell wall). Bacteria reproduce rapidly. [A] In a population of billions, a few will naturally have a random mutation that protects them from the drug.

When you take an antibiotic, you kill the 99.9% of normal bacteria. But the 0.1% of mutants survive. [B] With the competition dead, these "superbugs" multiply and take over. This is Natural Selection in fast-forward.

What makes it terrifying is "Horizontal Gene Transfer." [C] Bacteria act like open-source coders. A resistant bacterium can swap DNA (plasmids) with a non-resistant neighbor—even of a different species. They "teach" each other how to beat the drug.

Overuse drives this. Doctors prescribing antibiotics for viral flus (which drugs don't kill) or farmers feeding antibiotics to livestock to fatten them up introduce the selection pressure. [D] We are running out of weapons. If we lose antibiotics, simple surgeries or cuts could once again become fatal.
    `.trim(),
        questions: [
            {
                id: "batch9_topic15_antibiotic_resistance_Q1",
                question: "How does 'Horizontal Gene Transfer' contribute to the crisis of antibiotic resistance?",
                options: [
                    "It makes bacteria grow larger.",
                    "It allows bacteria to swap DNA (plasmids) with neighbors, transferring resistance traits without reproducing.",
                    "It kills the bacteria.",
                    "It makes antibiotics stronger."
                ],
                correctAnswer: "B",
                explanation: "The passage notes: 'A resistant bacterium can swap DNA (plasmids) with a non-resistant neighbor... They \"teach\" each other how to beat the drug.'"
            }
        ]
    },
    {
        id: "batch9_topic16_surrealism",
        taskType: "academic",
        title: "Surrealism: Resolving the Dream and Reality",
        passage: `
**Rhetorical Structure:** Theory/Art
**Dominant TOEFL Skill:** Vocabulary in Context

Founded in Paris in 1924 by André Breton, *Surrealism* was more than an art style; it was a revolution. Influenced by the psychoanalysis of Sigmund Freud, the Surrealists believed that the "rational" mind was oppressive and responsible for the horrors of WWI. They sought to unlock the *Unconscious*—the realm of dreams and irrational desires.

Their aim was to merge the dream world and the waking world into a "Super-Realism" (Sur-realism).

Salvador Dalí is the icon of the movement. [A] His "Paranoiac-Critical Method" involved inducing a state of hallucination to access subconscious images. His painting *The Persistence of Memory* (melting clocks) renders the impossible with photographic precision. The melting clocks likely symbolize the irrelevance of time in the dream state.

René Magritte took a more intellectual approach. [B] His work questioned the nature of perception. In *The Treachery of Images*, he painted a realistic pipe and wrote "This is not a pipe" (*Ceci n'est pas une pipe*) under it. He was right: it is a *painting* of a pipe. You cannot smoke it. He forced the viewer to separate the object from the representation.

Surrealism used distinct techniques like "Automantism" (doodling without thinking) to bypass the censor of the conscious brain. [C]

The movement influenced film, advertising, and fashion. [D] It validated the weird. It taught the 20th century that the irrational is not just nonsense; it is a deeper layer of truth waiting to be decoded.
    `.trim(),
        questions: [
            {
                id: "batch9_topic16_surrealism_Q1",
                question: "What was the philosophical goal of the Surrealist movement?",
                options: [
                    "To paint realistic landscapes.",
                    "To unlock the Unconscious and merge the dream world with reality.",
                    "To stop the war.",
                    "To sell more products."
                ],
                correctAnswer: "B",
                explanation: "The text states: 'They sought to unlock the *Unconscious*—the realm of dreams... Their aim was to merge the dream world and the waking world.'"
            }
        ]
    },
    {
        id: "batch9_topic17_louisiana_purchase",
        taskType: "academic",
        title: "The Diplomacy of the Louisiana Purchase",
        passage: `
**Rhetorical Structure:** Narrative/Cause-Effect
**Dominant TOEFL Skill:** Inference

In 1803, the United States doubled in size overnight. President Thomas Jefferson purchased the Louisiana Territory from France for \$15 million—about 4 cents an acre. It is considered the greatest real estate deal in history. But it almost didn't happen. It was a result of events in Haiti.

Napoleon Bonaparte dreamed of a renewed French Empire in North America. He needed Louisiana to provide food for the lucrative sugar island of Saint-Domingue (Haiti). [A]

However, in 1791, the slaves of Haiti revolted, led by Toussaint Louverture. [B] Napoleon sent massive armies to crush the rebellion, but they were defeated by guerrilla warfare and Yellow Fever. By 1802, Napoleon had lost 50,000 troops.

He gave up on the Americas. Without Haiti, Louisiana was useless to him. Also, he was about to go to war with Britain again and needed fast cash. [C]

When Jefferson’s diplomats arrived in Paris, they only wanted to buy the city of New Orleans (to control the Mississippi River trade). To their shock, Napoleon offered them the *entire* territory.

Jefferson hesitated. He was a "Strict Constructionist"—he believed the President could only do what the Constitution explicitly said. The Constitution said nothing about buying land. [D] He struggled with his conscience but ultimately prized the pragmatism of expansion over legal purity. He signed the deal, opening the way for Westward Expansion and the rise of the US as a continental power.
    `.trim(),
        questions: [
            {
                id: "batch9_topic17_louisiana_purchase_Q1",
                question: "Why did Napoleon agree to sell the entire Louisiana Territory to the United States?",
                options: [
                    "He liked Thomas Jefferson.",
                    "He lost the colony of Haiti to a slave revolt and needed cash for war with Britain.",
                    "He didn't know the land was there.",
                    "He wanted to move to America."
                ],
                correctAnswer: "B",
                explanation: "The passage explains: 'He gave up on the Americas. Without Haiti, Louisiana was useless to him. Also, he was about to go to war with Britain again and needed fast cash.'"
            }
        ]
    },
    {
        id: "batch9_topic18_chicago_school",
        taskType: "academic",
        title: "The Chicago School of Sociology and Urban Ecology",
        passage: `
**Rhetorical Structure:** Theory/Analogy
**Dominant TOEFL Skill:** Sentence Insertion

In the early 20th century, Chicago was the fastest-growing city in the world, a chaotic mix of immigrants, industry, and crime. It became the laboratory for the "Chicago School" of Sociology. Thinkers like Robert Park and Ernest Burgess proposed a radical new way to study cities: *Urban Ecology*.

They argued that a city acts like a biological ecosystem. [A] Just as plants compete for space in a forest, social groups compete for space in the city.

Burgess developed the "Concentric Zone Model." He pictured the city as a target with rings:
1.  **The Loop:** The central business district.
2.  **Zone in Transition:** Factories and slums. This is where new immigrants land. It is disorganized and high-crime.
3.  **Working Class Zone:** Stable housing for those who escaped the slums.
4.  **Residential Zone:** Middle-class suburbs. [B]

The theory was that groups move outward as they assimilate and get richer ("Succession"). A Polish immigrant arrives in Zone 2, works hard, and moves to Zone 3. A new group takes his place in Zone 2.

They also proposed "Social Disorganization Theory." [C] They found that crime remained high in the Zone in Transition (Zone 2) regardless of *who* lived there—Irish, Italians, or Poles. When a group moved out, their crime rate dropped.

This proved that crime was not inherent to the *people* (ethnicity/biology), but to the *place* (environment). [D] Poverty, overcrowding, and transience broke down social controls. The Chicago School shifted the blame for social ills from the individual to structure of the city itself.
    `.trim(),
        questions: [
            {
                id: "batch9_topic18_chicago_school_Q1",
                question: "What was the key conclusion of the 'Social Disorganization Theory' proposed by the Chicago School?",
                options: [
                    "Some ethnic groups are more criminal than others.",
                    "Crime is inherent to the 'place' (environment/poverty), not the specific 'people' living there.",
                    "Cities are bad for health.",
                    "More police reduce crime."
                ],
                correctAnswer: "B",
                explanation: "The text states: 'This proved that crime was not inherent to the *people*... but to the *place* (environment).'"
            }
        ]
    },
    {
        id: "batch9_topic19_dams",
        taskType: "academic",
        title: "The Engineering of Dams: Gravity vs. Arch",
        passage: `
**Rhetorical Structure:** Comparison/Constraint
**Dominant TOEFL Skill:** Factual Information

Dams are among the largest structures built by humans, designed to hold back the immense force of water. Engineers use two primary designs based on how they resist this push: the *Gravity Dam* and the *Arch Dam*.

The *Gravity Dam* relies on sheer weight. [A] It is a massive triangle of concrete. It is wider at the bottom because water pressure increases with depth. The dam pushes down harder than the water pushes forward. It uses friction with the ground to stop from sliding. The Grand Coulee Dam is a classic example. It is brute force engineering.

The *Arch Dam* relies on shape. [B] It curves upstream (convex). When the water hits the arch, the force is directed sideways into the canyon walls. It works like a stone bridge turned on its side. Because the canyon walls take the load, the dam itself can be incredibly thin and elegant.

The constraint for an Arch Dam is geology. [C] You need a narrow canyon with solid rock walls. If the rock is weak, the dam would push the canyon apart and collapse. The Hoover Dam is a hybrid (Arch-Gravity), using both weight and curve.

Dams are controversial. [D] While they provide renewable hydroelectric power and irrigation control (turning deserts like California into farms), they destroy river ecosystems. They block salmon migration and trap sediment (silt) behind the wall, starving the delta downstream. The modern era has seen a shift toward removing dams to restore natural river flow.
    `.trim(),
        questions: [
            {
                id: "batch9_topic19_dams_Q1",
                question: "What geological conditions are necessary to build an 'Arch Dam'?",
                options: [
                    "A wide, flat river.",
                    "A sandy bottom.",
                    "A narrow canyon with solid rock walls to support the sideways thrust of the water.",
                    "A location near the ocean."
                ],
                correctAnswer: "C",
                explanation: "The passage notes: 'You need a narrow canyon with solid rock walls. If the rock is weak, the dam would push the canyon apart.'"
            }
        ]
    },
    {
        id: "batch9_topic20_horse_evolution",
        taskType: "academic",
        title: "The Evolution of the Horse: From Eohippus to Equus",
        passage: `
**Rhetorical Structure:** Chronology/Trend
**Dominant TOEFL Skill:** Inference

The evolution of the horse is one of the most complete chapters in the fossil record, documenting a clear response to a changing climate: the shift from Forest to Grassland.

50 million years ago, the ancestor *Eohippus* ("Dawn Horse") lived in the dense forests of North America. [A] It was the size of a dog (12 inches high). It had arched back, 4 toes on front feet, and low-crowned teeth. It was a browser, eating soft leaves and fruit, hiding in the bushes.

As the climate cooled and dried (roughly 20 million years ago), the forests shrank and were replaced by open savannas (grasslands). This new environment selected for two traits: Speed and Grinding.

In the open, there is nowhere to hide. You must outrun the predator. [B] The horse's legs grew longer. Crucially, the side toes lifted off the ground and disappeared, leaving only the middle toe (the hoof). Running on one toe is energy-efficient for high speeds. *Merychippus* represents this transition.

The diet changed to grass. Grass is tough; it contains silica (sand) which wears down teeth. [C] The horse evolved massive, high-crowned molars that grow continuously throughout life to replace the worn surface.

The modern horse (*Equus*) appeared about 4 million years ago. Ironically, horses went extinct in the Americas 10,000 years ago (likely due to human hunting). [D] They were reintroduced by the Spanish Conquistadors in the 1500s, reclaiming the grasslands that had shaped their anatomy.
    `.trim(),
        questions: [
            {
                id: "batch9_topic20_horse_evolution_Q1",
                question: "What environmental change drove the evolution of the horse from Eohippus to Equus?",
                options: [
                    "The Ice Age.",
                    "The shift from dense forests to open grasslands (savannas).",
                    "The drying up of oceans.",
                    "The rise of mountains."
                ],
                correctAnswer: "B",
                explanation: "The text explains: 'the shift from Forest to Grassland... This new environment selected for two traits: Speed and Grinding.'"
            }
        ]
    }
];
