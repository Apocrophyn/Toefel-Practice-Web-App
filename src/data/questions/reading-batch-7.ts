
import { AcademicQuestion } from "./reading-2026";

export const batch7Passages: AcademicQuestion[] = [
    {
        id: "batch7_topic1_siphons",
        taskType: "academic",
        title: "The Physics of Siphons: Gravity or Atmospheric Pressure?",
        passage: `
**Rhetorical Structure:** Debate/Mechanism
**Dominant TOEFL Skill:** Factual Information

A siphon is a U-shaped tube used to move liquid from a higher container to a lower container, traveling over a hump higher than the liquid itself. It seems to defy gravity. For centuries, physicists debated *how* it worked. The "Chain Model" (gravity) competed with the "Atmospheric Push" model.

The consensus for years was that atmospheric pressure drove the siphon. [A] The air pushes down on the liquid in the top reservoir. Since the outlet tube is longer and heavier, the liquid falls out, creating a vacuum at the top of the hump. Atmospheric pressure then pushes the liquid up the inlet tube to fill that vacuum, just like drinking through a straw.

However, recently, physicists proved this wrong by running a siphon in a vacuum chamber. It still worked. If atmospheric pressure were the key, it shouldn't work in a vacuum.

This supports the "Chain Model." [B] Imagine the liquid is a steel chain sliding over a pulley. The chain on the long side is heavier than the chain on the short side. The heavy side pulls the light side up and over.

But liquid isn't a solid chain; it can break apart. For the siphon to work like a chain, the liquid molecules must stick together. This is *cohesion*. [C] Water molecules attract each other (hydrogen bonding). As the water falls down the long leg of the tube, it pulls the water behind it.

The limit of a siphon is determined by gravity and cohesion. [D] If the hump is too high (over 10 meters for water), the weight of the water column becomes so great that it overcomes the cohesive tension. The water column snaps (cavitation), bubbles form, and the siphon breaks.
    `.trim(),
        questions: [
            {
                id: "batch7_topic1_siphons_Q1",
                question: "According to the passage, why does a siphon fail if the hump exceeds 10 meters?",
                options: [
                    "The atmospheric pressure becomes too high.",
                    "The water freezes.",
                    "The weight of the water column overcomes the cohesive tension, causing the liquid column to snap (cavitate).",
                    "The tube melts."
                ],
                correctAnswer: "C",
                explanation: "The text explains: 'If the hump is too high... the weight of the water column becomes so great that it overcomes the cohesive tension. The water column snaps.'"
            }
        ]
    },
    {
        id: "batch7_topic2_samurai_evolution",
        taskType: "academic",
        title: "The Evolution of the Samurai: From Servants to Rulers",
        passage: `
**Rhetorical Structure:** Chronology/Social Change
**Dominant TOEFL Skill:** Inference

The popular image of the samurai is a stoic warrior adhering to *Bushido* (the Way of the Warrior). However, the class evolved drastically over 700 years. The word "samurai" comes from the verb *saburau*, meaning "to serve." Originally, in the Heian Period (794–1185), they were merely armed guards for the aristocracy. They were servants, looked down upon by the cultured court status.

Their rise to power began when the central government lost control of the provinces. [A] Landowners needed private protection. The samurai clans became the *de facto* police and tax collectors. By the 12th century, during the Kamakura Shogunate, they had usurped the aristocracy, becoming the ruling class of Japan.

During the Warring States period (Sengoku, 1467–1603), the samurai were practical, brutal soldiers. [B] Treachery was common. The idealized code of honor did not yet exist; victory was the only code.

The major shift occurred during the Edo Period (1603–1867), a time of prolonged peace. [C] The samurai were a warrior class with no wars to fight. They transformed into bureaucrats and administrators. They managed the towns, schools, and tea ceremonies.

It was *during* this peace that the code of *Bushido* was formalized. [D] Ideally, a samurai was supposed to be a blend of *bun* (culture/writing) and *bu* (martial arts). Paradoxically, the samurai became most obsessed with death and swordsmanship exactly when they stopped fighting, turning the sword into a symbol of spiritual discipline rather than a tool of war.
    `.trim(),
        questions: [
            {
                id: "batch7_topic2_samurai_evolution_Q1",
                question: "How did the role of the Samurai change during the peaceful Edo Period?",
                options: [
                    "They became farmers.",
                    "They transformed from warriors into bureaucrats and administrators.",
                    "They were all executed.",
                    "They became pirates."
                ],
                correctAnswer: "B",
                explanation: "The passage notes: 'The samurai were a warrior class with no wars to fight. They transformed into bureaucrats and administrators.'"
            }
        ]
    },
    {
        id: "batch7_topic3_sleep_biology",
        taskType: "academic",
        title: "The Biology of Sleep: NREM vs. REM Cycles",
        passage: `
**Rhetorical Structure:** Classification/Function
**Dominant TOEFL Skill:** Prose Summary

Sleep is not a single "off" state; it is a complex, active cycling between two distinct modes: Non-Rapid Eye Movement (NREM) and Rapid Eye Movement (REM). A typical human cycles through these stages every 90 minutes.

NREM sleep is divided into stages. Stage 1 is light sleep (dozing). Stage 2 is deeper. Stage 3 (Slow Wave Sleep) is deep, restorative sleep. [A] During Stage 3, the brain waves slow down to massive, rhythmic pulses (Delta waves). Physiologically, this is when the body heals. Growth hormone is released, muscles repair, and the immune system recharges.

REM sleep is the paradox. [B] The brain waves look almost exactly like the waking brain—fast and chaotic. Heart rate and breathing become irregular. This is when dreaming occurs. To prevent us from acting out our dreams, the brainstem paralyzes the voluntary muscles (atonia).

The function of REM is cognitive. It is essential for emotional regulation and memory consolidation. [C] While NREM strengthens "declarative" memories (facts), REM strengthens "procedural" memories (skills) and integrates new information with old associations. This is the "sleep on it" effect—the brain is solving problems while you dream.

Sleep deprivation is selectively dangerous. If you are deprived of NREM, you feel physically wrecked. [D] If you are deprived of REM (e.g., by alcohol or certain drugs), you feel anxious, irritable, and unable to concentrate. The body prioritizes; if you stay up all night, the next night your brain will skip the light stages and "rebound" directly into deep REM, proving it is a biological necessity, not a luxury.
    `.trim(),
        questions: [
            {
                id: "batch7_topic3_sleep_biology_Q1",
                question: "What is the primary cognitive function of REM sleep?",
                options: [
                    "To repair muscles.",
                    "To release growth hormone.",
                    "To consolidate procedural memories (skills) and regulate emotions.",
                    "To slow down brain waves."
                ],
                correctAnswer: "C",
                explanation: "The text states: 'The function of REM is cognitive. It is essential for emotional regulation and memory consolidation... REM strengthens \"procedural\" memories.'"
            }
        ]
    },
    {
        id: "batch7_topic4_harlem_renaissance",
        taskType: "academic",
        title: "Langston Hughes and the Voice of the Harlem Renaissance",
        passage: `
**Rhetorical Structure:** Context/Style
**Dominant TOEFL Skill:** Rhetorical Purpose

The Harlem Renaissance (1920s) was a cultural explosion in African American art, music, and literature, centered in the Harlem neighborhood of New York City. It marked the first time Black artists garnered mainstream attention and respect. At the forefront was the poet Langston Hughes, often called the "Poet Laureate of Harlem."

Hughes differed from his contemporaries like Countee Cullen. [A] Cullen wanted to be a "poet," not a "Negro poet"; he used classical European forms (sonnets) and high diction. Hughes, however, embraced his identity. He wanted to capture the rhythm of the street.

Hughes invented "Jazz Poetry." [B] He incorporated the syncopated rhythms of jazz and blues into his verse. His poems were meant to be read aloud, with pauses and beats. In "The Weary Blues," he replicates the mournful sound of a piano player.

He also focused on the working class. [C] While other intellectuals focused on the "Talented Tenth" (the elite), Hughes wrote about busboys, maids, and sailors. He celebrated their resilience and humor ("I laugh / And eat well / And grow strong").

His work was a declaration of aesthetic independence. [D] In his essay "The Negro Artist and the Racial Mountain," he wrote, "We younger Negro artists who create now intend to express our individual dark-skinned selves without fear or shame." Use of dialect and jazz was not a limitation; it was a source of power, defining a new American voice that refused to whisper.
    `.trim(),
        questions: [
            {
                id: "batch7_topic4_harlem_renaissance_Q1",
                question: "How did Langston Hughes's poetry differ from that of his contemporary, Countee Cullen?",
                options: [
                    "Hughes wrote only in French.",
                    "Hughes used classical sonnet forms.",
                    "Hughes embraced the vernacular and jazz rhythms, while Cullen preferred European classical forms.",
                    "Hughes avoided writing about race."
                ],
                correctAnswer: "C",
                explanation: "The passage compares them: 'Cullen... used classical European forms... Hughes, however, embraced his identity... [and] incorporated the syncopated rhythms of jazz.'"
            }
        ]
    },
    {
        id: "batch7_topic5_opportunity_cost",
        taskType: "academic",
        title: "Economics: The Concept of Opportunity Cost",
        passage: `
**Rhetorical Structure:** Definition/Application
**Dominant TOEFL Skill:** Sentence Insertion

The most fundamental concept in economics is not money; it is *Scarcity*. Because resources (time, money, land) are limited, every choice involves a trade-off. To get something, you must give up something else. This lost value is the *Opportunity Cost*.

Opportunity Cost is defined as the value of the *next best alternative* foregone. [A] It is not the sum of *all* alternatives, just the best one.

Example: You have \$20. You can go to the movies (Option A) or buy a book (Option B). You choose the movies. The financial cost is \$20. The *Opportunity Cost* is the book you didn't read.

This applies to time, which is the ultimate scarce resource. [B] If a lawyer who earns \$500 an hour decides to spend the afternoon painting her fence, the cost is not just the paint. It is the \$2000 she could have earned working. Therefore, it is "cheaper" for her to hire a painter for \$200. This explains "comparative advantage."

Governments face this constantly ("Guns vs. Butter"). [C] Every billion dollars spent on a battleship is a billion not spent on schools or hospitals. The true cost of the battleship is the uneducated children.

Ignoring opportunity cost leads to the "Sunk Cost Fallacy." [D] People continue watching a bad movie because they "already paid for the ticket." An economist would say: leave. The money is gone (sunk). Staying costs you time (opportunity cost). The rational move is to minimize further loss.
    `.trim(),
        questions: [
            {
                id: "batch7_topic5_opportunity_cost_Q1",
                question: "How does the passage define 'Opportunity Cost'?",
                options: [
                    "The price you pay for a ticket.",
                    "The value of the *next best alternative* that is foregone when making a choice.",
                    "The sum of all possible choices.",
                    "The money lost in the stock market."
                ],
                correctAnswer: "B",
                explanation: "The text defines it: 'Opportunity Cost is defined as the value of the *next best alternative* foregone.'"
            }
        ]
    },
    {
        id: "batch7_topic6_grand_canyon_geology",
        taskType: "academic",
        title: "Geology of the Grand Canyon: Erosion and Uplift",
        passage: `
**Rhetorical Structure:** Process/Sequence
**Dominant TOEFL Skill:** Factual Information

The Grand Canyon is often described as a layer cake of geological time, exposing rocks that are nearly 2 billion years old. How was this mile-deep gash carved? It required a "perfect storm" of two geological events: The Uplift of the Colorado Plateau and the Downcutting of the Colorado River.

Around 70 million years ago, tectonic forces (the Laramide Orogeny) pushed the flat sedimentary rock layers of the region upward. [A] Crucially, they rose flat, like an elevator, rather than tilting or folding. This created the high "Colorado Plateau," lifting the rocks thousands of feet above sea level.

Water seeks sea level. The higher the land, the steeper the river's path, and the more energy it has to cut. [B] The Colorado River acted like a liquid saw. Fueled by snowmelt from the Rockies, it carried massive amounts of abrasive sediment (sand and pebbles). It wasn't the water that did the cutting; it was the grit suspended in the water, scouring the bedrock like sandpaper.

While the river cut *down* (vertical erosion), the canyon got *wide* through weathering. [C] Rain, ice, and gravity ate away at the canyon walls. Water seeped into cracks, froze, expanded, and shattered the rock (frost wedging), causing landslides that widened the majestic vistas we see today.

The process is relatively recent. [D] While the rocks are ancient, the canyon itself is young—carved mostly in the last 6 million years. It is a testament to the power of water acting on uplifted stone.
    `.trim(),
        questions: [
            {
                id: "batch7_topic6_grand_canyon_geology_Q1",
                question: "What two geological factors were essential for the formation of the Grand Canyon?",
                options: [
                    "A massive earthquake and a volcanic eruption.",
                    "The tectonic uplift of the Colorado Plateau and the erosive downcutting of the Colorado River.",
                    "A meteor strike and a flood.",
                    "Wind erosion and acid rain."
                ],
                correctAnswer: "B",
                explanation: "The passage states: 'It required a \"perfect storm\" of two geological events: The Uplift of the Colorado Plateau and the Downcutting of the Colorado River.'"
            }
        ]
    },
    {
        id: "batch7_topic7_soap_chemistry",
        taskType: "academic",
        title: "The Chemistry of Soap: Saponification and Micelles",
        passage: `
**Rhetorical Structure:** Mechanism/Chemistry
**Dominant TOEFL Skill:** Vocabulary in Context

Water is the universal solvent, but there is one thing it cannot clean: oil. Water is polar (has a charge); oil is non-polar. As the saying goes, they don't mix. To clean a greasy plate (or skin), we need a mediator. That mediator is *Soap*.

Soap is created through a chemical reaction called *saponification*. [A] Fats (triglycerides) are mixed with a strong base (alkali), usually Lye (Sodium Hydroxide). The lye breaks the fat molecules apart, creating soap salts.

The magic of a soap molecule lies in its structure. It is "amphiphilic" (loving both). [B] It has a head that is hydrophilic (loves water) and a long tail that is hydrophobic (hates water, loves oil).

When you wash your hands, the soap molecules swarm the grease. [C] Their hydrophobic tails burrow into the oil to get away from the water, while their hydrophilic heads stick out into the water. They surround the oil droplet, forming a sphere called a *micelle*.

The oil is now trapped inside the micelle. The outside of the sphere is covered in water-loving heads. [D] This trick makes the grease "soluble" in water. When you rinse, the water grabs the outside of the micelles and washes them away, carrying the trapped grease with them. Soap doesn't destroy dirt; it simply packages it for transport.
    `.trim(),
        questions: [
            {
                id: "batch7_topic7_soap_chemistry_Q1",
                question: "How does a soap 'micelle' clean grease?",
                options: [
                    "It burns the fat.",
                    "It traps the oil inside a sphere with water-loving heads on the outside, allowing it to be washed away by water.",
                    "It turns the water into oil.",
                    "It freezes the dirt."
                ],
                correctAnswer: "B",
                explanation: "The text explains: 'The oil is now trapped inside the micelle. The outside of the sphere is covered in water-loving heads... This trick makes the grease \"soluble\" in water.'"
            }
        ]
    },
    {
        id: "batch7_topic8_gutenberg_press",
        taskType: "academic",
        title: "Gutenberg and the Moveable Type Revolution in Europe",
        passage: `
**Rhetorical Structure:** Narrative/Impact
**Dominant TOEFL Skill:** Negative Factual Information

Before 1440, books in Europe were rare luxury items. They were hand-copied by monks in scriptoriums. A single Bible could take a year to copy. This bottleneck on information kept literacy low and authority centralized. Johannes Gutenberg, a goldsmith from Mainz, Germany, broke this bottleneck with the invention of the *printing press*.

Gutenberg did not invent printing (the Chinese had woodblock printing centuries earlier). [A] His genius was the *combination* of technologies.
1.  **Moveable Type:** Instead of craving a whole page of wood, he cast individual metal letters (matrices). This allowed him to rearrange the letters infinitely.
2.  **Oil-Based Ink:** Water-based ink ran off the metal type; he developed a sticky, oil-varnish ink that adhered perfectly.
3.  **The Press:** He adapted the screw press used for making wine and olive oil to apply even, massive pressure.

The result was the Gutenberg Bible (1455). [B] It was beautiful, but more importantly, it was reproducible. A team could print pages faster in a day than a monk could write in a lifetime.

The impact was explosive. [C] By 1500, there were 20 million books in Europe. Prices plummeted. Knowledge was democratized.

This fueled the *Reformation*. Martin Luther’s "95 Theses" would have remained a local complaint in a manuscript; thanks to the press, they were printed and spread across Germany in two weeks. [D] It became impossible for the Church to control the narrative. The press created the "public sphere"—a space where ideas could be debated by the masses, the precondition for modern democracy and science.
    `.trim(),
        questions: [
            {
                id: "batch7_topic8_gutenberg_press_Q1",
                question: "What was Johannes Gutenberg's primary innovation?",
                options: [
                    "He invented paper.",
                    "He invented the alphabet.",
                    "He combined moveable metal type, oil-based ink, and a screw press into a practical system.",
                    "He wrote the Bible."
                ],
                correctAnswer: "C",
                explanation: "The passage states: 'His genius was the *combination* of technologies... Moveable Type... Oil-Based Ink... The Press.'"
            }
        ]
    },
    {
        id: "batch7_topic9_maslow_hierarchy",
        taskType: "academic",
        title: "Maslow’s Hierarchy of Needs: Motivation and Self-Actualization",
        passage: `
**Rhetorical Structure:** Theory/Structure
**Dominant TOEFL Skill:** Prose Summary

In 1943, psychologist Abraham Maslow proposed a theory of human motivation that remains one of the most famous models in psychology: the *Hierarchy of Needs*. Often depicted as a pyramid, it suggests that human needs are arranged in a specific order of prepotency. We must satisfy the lower, basic needs before we can be motivated by higher, psychological needs.

At the base are the **Physiological Needs**: food, water, sleep, warmth. [A] If you are starving, you don't care about art or status; you care about bread.

Once these are met, we move up to **Safety Needs**: security, law, order, freedom from fear.

Next are **Social Needs** (Love/Belonging): friendship, intimacy, family. [B]

Then come **Esteem Needs**: achievement, mastery, respect from others.

At the very peak is **Self-Actualization**. [C] This is the desire to become the most that one can be. It is the pursuit of creativity, morality, and problem-solving. Maslow argued that only a small percentage of people reach this state because life keeps pulling us back down to deal with lower deficits.

Critics argue the hierarchy is too rigid. The "starving artist" creates masterpieces despite being hungry and unsafe, violating the order. [D] Also, the model is Western-centric (individualistic). In collectivist cultures (like Japan or China), social belonging may rank higher than self-esteem. Despite this, the model provides a useful framework for understanding why a student who is hungry or bullied (Safety) cannot focus on learning (Self-Actualization).
    `.trim(),
        questions: [
            {
                id: "batch7_topic9_maslow_hierarchy_Q1",
                question: "Why do critics argue that Maslow's Hierarchy of Needs is culturally biased?",
                options: [
                    "Because it was written in English.",
                    "Because it assumes individual self-actualization is the highest goal, whereas collectivist cultures may prioritize social belonging.",
                    "Because the pyramid shape is Egyptian.",
                    "Because it is too old."
                ],
                correctAnswer: "B",
                explanation: "The passage notes: 'Also, the model is Western-centric (individualistic). In collectivist cultures... social belonging may rank higher than self-esteem.'"
            }
        ]
    },
    {
        id: "batch7_topic10_solar_flares",
        taskType: "academic",
        title: "Solar Flares and Coronal Mass Ejections",
        passage: `
**Rhetorical Structure:** Phenomenon/Effect
**Dominant TOEFL Skill:** Inference

The Sun is not a calm ball of light; it is a magnetic storm. Its surface is twisted by differential rotation (the equator spins faster than the poles), which tangles the sun's magnetic field lines like rubber bands. When these lines snap and reconnect, they release explosive energy, creating *Solar Flares*.

A flare is a sudden flash of brightness, releasing x-rays and UV radiation. [A] This radiation reaches Earth in 8 minutes (speed of light). It ionizes the upper atmosphere, which can block high-frequency radio communications used by airplanes and GPS.

Often associated with flares is a larger, slower beast: the *Coronal Mass Ejection* (CME). [B] This is a massive cloud of plasma (charged particles) hurled into space. Unlike the light, the CME travels slower, taking 1 to 3 days to reach Earth.

When a CME strikes Earth's magnetic field (magnetosphere), it causes a "Geomagnetic Storm." [C] The magnetic field rattles and compresses. This dumps energy into the atmosphere, creating beautiful Auroras (Northern Lights) much further south than usual.

However, CMEs are dangerous to technology. The moving magnetic fields induce electric currents in long conductors—like power lines. [D] In 1989, a CME induced a current that melted transformers in Quebec, causing a widespread blackout. A "super-flare," like the Carrington Event of 1859, occurring today would be catastrophic, potentially destroying satellite networks and power grids globally, sending modern civilization back to the pre-electric age for months.
    `.trim(),
        questions: [
            {
                id: "batch7_topic10_solar_flares_Q1",
                question: "What is the primary danger posed by a Coronal Mass Ejection (CME) hitting Earth?",
                options: [
                    "It causes skin cancer.",
                    "It induces electric currents in power lines, potentially melting transformers and causing blackouts.",
                    "It makes the weather hotter.",
                    "It stops the tides."
                ],
                correctAnswer: "B",
                explanation: "The text explains: 'The moving magnetic fields induce electric currents in long conductors—like power lines... In 1989, a CME... melted transformers.'"
            }
        ]
    },
    {
        id: "batch7_topic11_cargo_cults",
        taskType: "academic",
        title: "Anthropology of 'Cargo Cults' in Melanesia",
        passage: `
**Rhetorical Structure:** Narrative/Analysis
**Dominant TOEFL Skill:** Rhetorical Purpose

During and after World War II, anthropologists in the Pacific Islands (Melanesia) observed a fascinating religious phenomenon dubbed "Cargo Cults." The islanders, having seen the US military arrive with massive amounts of material wealth ("cargo")—canned food, clothes, trucks—developed rituals to summon more cargo after the soldiers left.

They built mock airstrips out of cleared bush. [A] They built control towers out of bamboo and wore headphones made of coconuts. They marched in formation with wooden rifles. They were mimicking the behavior of the soldiers, believing that these rituals were the *cause* of the cargo's arrival.

Westerners initially dismissed this as ignorance or madness. Anthropologists, however, saw it as a logical, rational attempt to understand the world. [B] The islanders had no concept of industrial manufacturing. To them, the goods didn't come from a factory; they came from the ancestors or the gods. The white men were merely the intermediaries who knew the secret rituals (talking into radios, marching) to get the gods to send the stuff.

Therefore, to get the cargo, one must copy the ritual. It was a form of "sympathetic magic."

Furthermore, it was a political movement. [C] The cults were often anti-colonial. They believed the cargo was meant for *them* (the ancestors sent it), but the white colonizers had intercepted it. The rituals were an attempt to bypass the colonizers and reclaim their inheritance and dignity.

Thus, a Cargo Cult is not about greed; it is about social justice and understanding a sudden, inexplicable disparity in wealth. [D]
    `.trim(),
        questions: [
            {
                id: "batch7_topic11_cargo_cults_Q1",
                question: "How do anthropologists view the rituals of the Melanesian 'Cargo Cults'?",
                options: [
                    "As evidence of madness.",
                    "As a rational attempt to use 'sympathetic magic' to replicate the conditions that brought wealth.",
                    "As a mockery of soldiers.",
                    "As a game."
                ],
                correctAnswer: "B",
                explanation: "The passage states: 'Anthropologists, however, saw it as a logical, rational attempt... Therefore, to get the cargo, one must copy the ritual. It was a form of \"sympathetic magic\".'"
            }
        ]
    },
    {
        id: "batch7_topic12_frank_lloyd_wright",
        taskType: "academic",
        title: "Frank Lloyd Wright and Organic Architecture",
        passage: `
**Rhetorical Structure:** Theory/Example
**Dominant TOEFL Skill:** Vocabulary in Context

Frank Lloyd Wright, America's most famous architect, rebelled against the European style of building "boxes" that sat *on* the landscape. He championed "Organic Architecture." His philosophy was simple: a building should grow naturally *out* of its environment, interpreting nature rather than dominating it.

This style is epitomized in his "Prairie School" houses. [A] Designed for the flat midwestern plains, they featured low, horizontal lines, hugging the ground. They had overhanging eaves to provide shade and shelter, mimicking the canopy of a tree. He used local materials—wood and stone—leaving them unpainted to reveal their natural texture.

His masterpiece, *Fallingwater* (1935), pushes this to the limit. [B] Built over a waterfall in Pennsylvania, the house doesn't just look at the falls; it is anchored in the bedrock of the stream. Concrete cantilevered terraces float over the rushing water, mimicking the layers of sedimentary rock.

Wright also destroyed the "box" interior. [C] European houses had distinct, closed rooms (kitchen, dining, parlor). Wright invented the "Open Floor Plan." He removed walls, allowing space to flow fluidly from room to room, merging the interior with the exterior through walls of glass.

He was a control freak. He designed the furniture, the rugs, and even the clothes of the owners to ensure they fit the aesthetic. [D] Organic architecture was a "gesamtkunstwerk" (total work of art), aiming to integrate human habitation so seamlessly with the natural world that the boundary disappeared.
    `.trim(),
        questions: [
            {
                id: "batch7_topic12_frank_lloyd_wright_Q1",
                question: "What is the central philosophy of Frank Lloyd Wright's 'Organic Architecture'?",
                options: [
                    "Buildings should be made only of glass.",
                    "Buildings should be tall and impressive.",
                    "A building should grow naturally out of its environment, interpreting nature rather than dominating it.",
                    "All rooms must have doors."
                ],
                correctAnswer: "C",
                explanation: "The text explains: 'His philosophy was simple: a building should grow naturally *out* of its environment, interpreting nature rather than dominating it.'"
            }
        ]
    },
    {
        id: "batch7_topic13_silk_production",
        taskType: "academic",
        title: "Sericulture: The Secret History of Silk Production",
        passage: `
**Rhetorical Structure:** Process/History
**Dominant TOEFL Skill:** Factual Information

Silk, the "Queen of Textiles," is unique among natural fibers. Cotton and linen are plant fibers; wool is animal hair. Silk is a protein secretion—a filament produced by the silkworm (*Bombyx mori*) to build its cocoon. For 3,000 years, the process of making it, *Sericulture*, was the most guarded state secret in Imperial China.

The process is labor-intensive. The moths lay eggs, which hatch into larvae. [A] These voracious caterpillars feed exclusively on fresh mulberry leaves—and they must be fed every few hours, day and night. After a month of gorging, they spin a cocoon.

The cocoon is the prize. It consists of a single continuous thread of raw silk, often 900 meters (half a mile) long. [B] To harvest it, the farmer must kill the pupa inside before it hatches. If the moth chews its way out, it cuts the thread, ruining the silk. The cocoons are boiled to kill the pupa and dissolve the sericin (a sticky gum) holding the threads together.

The threads from several cocoons are then unwound and twisted together to make a strand strong enough for weaving.

China maintained a monopoly by executing anyone who tried to smuggle silkworm eggs or mulberry seeds out of the country. [C] The monopoly was finally broken in 552 CE, according to legend, by two Nestorian monks who smuggled eggs inside their hollow bamboo walking sticks to Constantinople.

This act of industrial espionage changed the global economy, bringing the luxury fabric to the Mediterranean and ending China's exclusive hold on the material that named the world's most famous trade route. [D]
    `.trim(),
        questions: [
            {
                id: "batch7_topic13_silk_production_Q1",
                question: "Why must the silkworm pupa be killed before harvesting the silk cocoon?",
                options: [
                    "To eat the pupa.",
                    "Because if the moth hatches, it chews through the cocoon, cutting the continuous thread.",
                    "To prevent the moth from laying eggs.",
                    "Because the pupa is poisonous."
                ],
                correctAnswer: "B",
                explanation: "The passage notes: 'If the moth chews its way out, it cuts the thread, ruining the silk.'"
            }
        ]
    },
    {
        id: "batch7_topic14_gyroscopes",
        taskType: "academic",
        title: "The Physics of Gyroscopes and Angular Momentum",
        passage: `
**Rhetorical Structure:** Mechanism/Principle
**Dominant TOEFL Skill:** Sentence Insertion

A gyroscope is essentially a spinning wheel or disc in which the axis of rotation is free to assume any orientation. While they look like toys, they are critical for navigation in airplanes, submarines, and the Hubble Space Telescope. Their behavior is governed by the principle of *Conservation of Angular Momentum*.

Angular momentum is the rotational equivalent of forward momentum. [A] Just as a moving train doesn't want to stop or turn (inertia), a spinning wheel resists any change to its axis of rotation. It wants to stay pointing in the same direction. This is "Rigidity in Space." This is why a spinning top stays upright while a stationary one falls over.

If you try to push the axis of a spinning gyroscope, it reacts strangely. It doesn't move in the direction you push. It moves at a 90-degree angle to the push. [B] This phenomenon is called *Precession*.

Because of Rigidity in Space, a gyroscope is a perfect compass. [C] Once you spin it up and point it at a star (or North), it will stay pointed there, regardless of how the airplane banks, climbs, or turns around it. It is independent of the vehicle's motion.

Modern navigation systems use "Ring Laser Gyroscopes," which use light instead of spinning wheels to detect rotation, but the principle ensures that a pilot flying in pitch black clouds knows exactly which way is up and which way is north. [D]
    `.trim(),
        questions: [
            {
                id: "batch7_topic14_gyroscopes_Q1",
                question: "What does the principle of 'Rigidity in Space' refer to in a gyroscope?",
                options: [
                    "The material is very hard.",
                    "The spinning wheel resists changing its axis of rotation, effectively pointing in a fixed direction.",
                    "It cannot move through space.",
                    "It is heavy."
                ],
                correctAnswer: "B",
                explanation: "The text states: 'a spinning wheel resists any change to its axis of rotation. It wants to stay pointing in the same direction. This is \"Rigidity in Space\".'"
            }
        ]
    },
    {
        id: "batch7_topic15_prions",
        taskType: "academic",
        title: "Prions: The Infectious Proteins Behind Mad Cow Disease",
        passage: `
**Rhetorical Structure:** Definition/Anomaly
**Dominant TOEFL Skill:** Inference

For decades, the "Germ Theory" of disease held that all infectious agents must contain genetic material (DNA or RNA) to replicate. Bacteria, viruses, fungi—they all have genes. In the 1980s, neurologist Stanley Prusiner overturned this dogma with the discovery of the *Prion* (Proteinaceous Infectious Particle).

A prion is a zombie protein. It has no DNA. It is a misfolded version of a normal protein found in the brain ($PrP^C$). [A] The dangerous version ($PrP^{Sc}$) is chemically identical but folded into a different shape—like a paperclip bent into a knot.

The horror of the prion is its ability to replicate without genes. [B] When a prion touches a normal protein, it forces the normal protein to refold into the prion shape. It converts the good guys into zombies. This triggers a chain reaction. The prions clump together, forming plaques that kill neurons, turning the brain into a sponge (Spongiform Encephalopathy).

This is the cause of Mad Cow Disease (BSE) in cattle, Scrapie in sheep, and Creutzfeldt-Jakob Disease (CJD) in humans. [C]

Prions are terrifyingly resilient. They are not alive, so they cannot be "killed." [D] They survive boiling, radiation, and disinfectants. Reusable surgical instruments used on a patient with CJD remain infectious even after sterilization. Prusiner’s discovery proved that a simple change in 3D geometry can be as deadly as a virus, expanding the definition of infection.
    `.trim(),
        questions: [
            {
                id: "batch7_topic15_prions_Q1",
                question: "How do Prions replicate despite having no DNA?",
                options: [
                    "They split in half like bacteria.",
                    "They force normal proteins to refold into the misshapen prion shape upon contact.",
                    "They steal DNA from cells.",
                    "They only replicate in dead bodies."
                ],
                correctAnswer: "B",
                explanation: "The passage explains: 'When a prion touches a normal protein, it forces the normal protein to refold into the prion shape. It converts the good guys into zombies.'"
            }
        ]
    },
    {
        id: "batch7_topic16_fresco_michelangelo",
        taskType: "academic",
        title: "The Technique of Fresco Painting and the Sistine Chapel",
        passage: `
**Rhetorical Structure:** Process/Challenge
**Dominant TOEFL Skill:** Vocabulary in Context

When Michelangelo painted the ceiling of the Sistine Chapel (1508–1512), he used the technique of *Buon Fresco* ("True Fresh"). This is one of the most difficult and permanent painting methods in history, involving painting directly onto wet plaster.

The process is a race against time. The artist applies a layer of wet lime plaster, called the *intonaco*, to the wall. [A] He can only lay as much plaster as he can paint in one day (a section called a *giornata*).

The pigments are mixed only with water. When the artist applies the paint to the wet plaster, a chemical reaction occurs. The lime in the plaster reacts with the carbon dioxide in the air to form calcium carbonate (limestone). [B] The pigment is not just "on" the wall; it becomes chemically locked *inside* the crystal lattice of the stone wall.

This means mistakes are fatal. [C] You cannot erase. You cannot paint over it. If you make a mistake, you must hack the plaster off the wall with a hammer and start over the next day.

Furthermore, colors change as the plaster dries. Michelangelo had to predict what the colors would look like weeks later.

Working on the ceiling added physical torture. Michelangelo did not lie on his back; he stood on a scaffold, craning his neck back for four years. [D] Paint dripped into his eyes. Despite the agony, the fresco technique is why the colors remain vibrant 500 years later—they are not paint, they are part of the building itself.
    `.trim(),
        questions: [
            {
                id: "batch7_topic16_fresco_michelangelo_Q1",
                question: "Why is 'Buon Fresco' considered such a permanent painting technique?",
                options: [
                    "Because it uses oil paint.",
                    "Because the pigment becomes chemically locked inside the crystal lattice of the limestone wall as it dries.",
                    "Because it is covered in glass.",
                    "Because it is painted on wood."
                ],
                correctAnswer: "B",
                explanation: "The text notes: 'The pigment is not just \"on\" the wall; it becomes chemically locked *inside* the crystal lattice of the stone wall.'"
            }
        ]
    },
    {
        id: "batch7_topic17_pony_express",
        taskType: "academic",
        title: "The Pony Express: A Brief Experiment in High-Speed Communication",
        passage: `
**Rhetorical Structure:** Narrative/Obsolescence
**Dominant TOEFL Skill:** Negative Factual Information

The Pony Express is an icon of the American West, a symbol of rugged individualism. Yet, as a business, it was a failure that lasted only 18 months (1860–1861). Its purpose was to bridge the communication gap between the East Coast and California, a gap that previously took a stagecoach 24 days to cross. The Pony Express cut this to 10 days.

The system was a relay race. [A] The route was 1,900 miles long. Stations were placed every 10 miles (the limit of a horse at full gallop). A rider would sprint 10 miles, jump off his horse, throw the mail bag (*mochila*) onto a fresh horse, and take off again. He would switch horses 7-8 times before handing the bag to a new rider.

Weight was the enemy. Riders had to be young, skinny (under 125 lbs), and lightly armed. "Orphans preferred" was the famous recruitment slogan. [B]

The service was a technical success—it delivered Lincoln's inaugural address in record time—but a financial disaster. It was expensive to maintain 150 stations and 400 horses in the hostile wilderness.

What killed it wasn't bandits or Indians; it was technology. [C] The Transcontinental Telegraph was being built parallel to the route. On October 24, 1861, the telegraph line was completed. A message could travel instantly. Two days later, the Pony Express announced its closure.

It serves as a classic case of a "bridge technology"—an innovative optimization of an old method (horses) that was instantly rendered obsolete by a paradigm shift (electricity). [D]
    `.trim(),
        questions: [
            {
                id: "batch7_topic17_pony_express_Q1",
                question: "What effectively ended the Pony Express after only 18 months?",
                options: [
                    "The Civil War.",
                    "A shortage of horses.",
                    "The completion of the Transcontinental Telegraph.",
                    "The death of the owner."
                ],
                correctAnswer: "C",
                explanation: "The passage states: 'On October 24, 1861, the telegraph line was completed. A message could travel instantly... [this] instantly rendered [it] obsolete.'"
            }
        ]
    },
    {
        id: "batch7_topic18_third_place",
        taskType: "academic",
        title: "Ray Oldenburg and the Sociology of the 'Third Place'",
        passage: `
**Rhetorical Structure:** Theory/Social Criticism
**Dominant TOEFL Skill:** Prose Summary

In his book *The Great Good Place* (1989), sociologist Ray Oldenburg argued that for a healthy society, individuals need three distinct realms. The "First Place" is the home (domestic, private). The "Second Place" is the workplace (economic, productive). The "Third Place" is the anchor of community life—places like cafes, bookstores, barber shops, and pubs.

Oldenburg identified key characteristics of a Third Place. [A] It must be "neutral ground" where people can come and go freely. It must be a "leveler"—social status does not matter; the CEO talks to the plumber. Conversation is the main activity. It must be accessible (walkable) and have "regulars" who set the tone but welcome strangers.

The function of the Third Place is vital for democracy. [B] It is where public opinion is formed, where news is swapped, and where social glue is hardened. It creates "civic engagement."

Oldenburg warned that in modern suburban America (see Urban Sprawl), Third Places are vanishing. [C] We have replaced the local pub with the private media room and the corner store with the drive-thru. We move between home and work without pausing to connect. This "shuttle life" creates loneliness and political polarization, as we rarely interact with people outside our immediate circle.

Starbucks famously adopted the "Third Place" concept as its business model, aiming to be that spot between work and home. [D] However, critics argue that a corporate chain, where you pay \$5 for coffee and stare at a laptop with noise-canceling headphones, fails the "conversation" test, offering the illusion of community without the connection.
    `.trim(),
        questions: [
            {
                id: "batch7_topic18_third_place_Q1",
                question: "According to Ray Oldenburg, what is a key characteristic of a 'Third Place'?",
                options: [
                    "You must pay to enter.",
                    "It is a 'leveler' where social status does not matter and conversation is the main activity.",
                    "It is for family members only.",
                    "It is a place for sleeping."
                ],
                correctAnswer: "B",
                explanation: "The passage identifies it: 'It must be a \"leveler\"—social status does not matter... Conversation is the main activity.'"
            }
        ]
    },
    {
        id: "batch7_topic19_roman_aqueducts",
        taskType: "academic",
        title: "Engineering the Roman Aqueducts: Gravity and Siphons",
        passage: `
**Rhetorical Structure:** Problem-Solution/Constraint
**Dominant TOEFL Skill:** Factual Information

Rome was a city of water, consuming as much water per capita as a modern city. Supplying this to a million people required the famous *aqueducts*. While the stone arches are iconic, they represent only a fraction of the system; most aqueducts were underground tunnels. The engineering challenge was maintaining a constant, precise gradient.

The water moved entirely by gravity. There were no pumps. [A] The source had to be higher than the city. The aqueduct had to slope downward efficiently—too steep, and the water would erode the channel; too flat, and the water would stagnate. The ideal gradient was roughly 1 foot of drop for every 4,000 feet of length. This required surveying tools of incredible precision (the *chorobates*).

Overcoming valleys was the hard part. The standard solution was the bridge (tiers of arches). [B] The Pont du Gard in France allows the water to cross the river Gardon at a height of 160 feet.

However, for very deep and wide valleys, a bridge was impossible. Here, the Romans used the *inverted siphon*. [C] They piped the water down into the valley in lead pipes, across the bottom, and up the other side. As long as the receiving end was slightly lower than the starting end, the water would push itself up the hill (seeking its own level).

The pressure in these siphons was immense. The lead pipes were reinforced with stone or concrete blocks to prevent them from bursting. [D] While expensive to build, these gravity-fed systems were robust. They required no fuel and little maintenance, flowing continuously for centuries, a feat of sustainable infrastructure unrivaled until the 19th century.
    `.trim(),
        questions: [
            {
                id: "batch7_topic19_roman_aqueducts_Q1",
                question: "Why did Roman engineers use 'inverted siphons' in their aqueduct systems?",
                options: [
                    "To make the water flow faster.",
                    "To cross deep valleys where building a bridge was impossible or too expensive.",
                    "To filter the water.",
                    "To hide the water from enemies."
                ],
                correctAnswer: "B",
                explanation: "The text explains: 'However, for very deep and wide valleys, a bridge was impossible. Here, the Romans used the *inverted siphon*.'"
            }
        ]
    },
    {
        id: "batch7_topic20_birds_dinosaurs",
        taskType: "academic",
        title: "The Evolution of Birds: The Legacy of Archaeopteryx",
        passage: `
**Rhetorical Structure:** Evidence/Consensus
**Dominant TOEFL Skill:** Inference

The question "Where did birds come from?" was solved by a single fossil discovered in Bavaria in 1861, just two years after Darwin published *On the Origin of Species*. The fossil was *Archaeopteryx lithographica*.

It was a perfect "transitional fossil" (missing link). It had the unmistakable feathers of a bird, but it also had the teeth, claws, and long bony tail of a reptile. [A] It was a dinosaur with wings.

Modern paleontology has confirmed that birds are not just related to dinosaurs; they *are* dinosaurs. Specifically, they are the only surviving lineage of the Theropod dinosaurs (the group that includes T-Rex and Velociraptor).

Evidence shows that feathers evolved long before flight. [B] Many flightless dinosaurs had feathers for insulation or display (mating rituals). Flight was an "exaptation"—a trait that evolved for one purpose (warmth) and was later co-opted for another (flying).

The skeleton confirms the link. Birds and Theropods share a "wishbone" (furcula), hollow bones, and a unique 3-fingered hand structure.

The mass extinction event 66 million years ago (the asteroid) killed all the non-avian dinosaurs. [C] The small, feathered, beaked ancestors of modern birds survived, possibly because their beaks allowed them to eat seeds when vegetation died off.

So, when you see a chicken or a sparrow, you are looking at a highly modified, shrunken Velociraptor. [D] The Age of Dinosaurs never ended; it just took to the sky.
    `.trim(),
        questions: [
            {
                id: "batch7_topic20_birds_dinosaurs_Q1",
                question: "What conclusion did scientists draw from the discovery of the *Archaeopteryx* fossil?",
                options: [
                    "That dinosaurs could swim.",
                    "That birds evolved from Theropod dinosaurs, as the fossil showed both feathers and reptilian features.",
                    "That the fossil was a fake.",
                    "That birds existed before dinosaurs."
                ],
                correctAnswer: "B",
                explanation: "The passage states: 'It was a perfect \"transitional fossil\"... It was a dinosaur with wings... [Proving] birds are not just related to dinosaurs; they *are* dinosaurs.'"
            }
        ]
    }
];
