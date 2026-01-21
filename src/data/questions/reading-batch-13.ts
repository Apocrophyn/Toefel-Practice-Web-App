
import { AcademicQuestion } from "./reading-2026";

export const batch13Passages: AcademicQuestion[] = [
    {
        id: "batch13_topic1_black_holes",
        taskType: "academic",
        title: "Black Holes: Event Horizons and Spaghettification",
        passage: `
**Rhetorical Structure:** Definition/Phenomenon
**Dominant TOEFL Skill:** Vocabulary in Context

A black hole is an object so dense that its escape velocity exceeds the speed of light. Since nothing can travel faster than light, nothing—not even information—can escape.

The boundary of no return is called the *Event Horizon*. [A] It is not a solid surface; it is a mathematical point in space. Once you cross it, all paths lead inward. To escape would require moving backwards in time.

If you fell into a stellar-mass black hole, you would experience *Spaghettification*. [B]
Gravity gets stronger the closer you are to the center.
If you fall feet-first, your feet are slightly closer to the singularity than your head.
The gravitational pull on your feet is millions of times stronger than on your head.
This "tidal force" stretches you vertically into a long, thin noodle (spaghetti) and compresses you horizontally. You would be ripped apart before you even crossed the horizon.

At the center lies the *Singularity*. [C] Here, matter is crushed to infinite density and zero volume. The laws of physics (General Relativity) break down. We simply don't know what happens there. It is a divide by zero error in the universe's code. [D]
    `.trim(),
        questions: [
            {
                id: "batch13_topic1_black_holes_Q1",
                question: "According to the description of 'Spaghettification', why would an astronaut be stretched apart falling into a black hole?",
                options: [
                    "Because of the heat.",
                    "Because the gravitational pull on their feet is immensely stronger than on their head due to the gradient.",
                    "Because they are spinning too fast.",
                    "Because light pushes them."
                ],
                correctAnswer: "B",
                explanation: "The text explains: 'The gravitational pull on your feet is millions of times stronger than on your head. This \"tidal force\" stretches you vertically.'"
            }
        ]
    },
    {
        id: "batch13_topic2_zulu_kingdom",
        taskType: "academic",
        title: "Shaka Zulu and the Mfecane",
        passage: `
**Rhetorical Structure:** Narrative/Military Strategy
**Dominant TOEFL Skill:** Factual Information

In the early 19th century, Southern Africa was transformed by the rise of the Zulu Kingdom under Shaka Zulu (reigned 1816–1828). Often called the "Black Napoleon," Shaka revolutionized tribal warfare.

Before Shaka, battles were largely ceremonial. Warriors threw long spears (assegai) from a distance and retreated. Casualties were low.

Shaka introduced the *Iklwa*. [A] This was a short stabbing spear. It forced his warriors to fight close-quarters, hand-to-hand. He also introduced the tall cowhide shield to hook the enemy's shield aside.
He drilled his troops relentlessly, forcing them to run barefoot over thorns to toughen their feet, discarding sandals for speed.

He organized the army into the "Buffalo Horns" formation. [B]
1.  **The Chest:** The main force attacks the center.
2.  **The Horns:** Fast runners flank the enemy on both sides to encircle them.
3.  **The Loins:** Reserves wait behind the chest.

This total war machine crushed neighbors. [C] The resulting chaos was the *Mfecane* ("The Crushing"). Displaced tribes fled Shaka, attacking other tribes in a domino effect that depopulated vast regions.

While Shaka was a brilliant general, he was a brutal tyrant who was eventually assassinated by his half-brothers. [D] However, he created a unified Zulu nation that was strong enough, decades later, to defeat the British Empire at the Battle of Isandlwana.
    `.trim(),
        questions: [
            {
                id: "batch13_topic2_zulu_kingdom_Q1",
                question: "How did Shaka Zulu revolutionize tribal warfare in Southern Africa?",
                options: [
                    "He used guns.",
                    "He introduced the short stabbing spear (*Iklwa*) and the 'Buffalo Horns' formation for close-quarters combat.",
                    "He rode horses.",
                    "He built castles."
                ],
                correctAnswer: "B",
                explanation: "The passage notes: 'Shaka introduced the *Iklwa*... It forced his warriors to fight close-quarters... He organized the army into the \"Buffalo Horns\" formation.'"
            }
        ]
    },
    {
        id: "batch13_topic3_invasive_cane_toads",
        taskType: "academic",
        title: "Invasive Species: The Cane Toad Disaster",
        passage: `
**Rhetorical Structure:** Problem-Solution-Fail
**Dominant TOEFL Skill:** Cause and Effect

The Cane Toad (*Rhinella marina*) is the textbook example of biological control gone wrong. In the 1930s, Australian sugar cane farmers were plagued by the Cane Beetle, which ate the crop roots. They looked for a solution.

They heard about a giant toad from South America that ate beetles. [A] In 1935, they imported 102 toads and released them in Queensland.

It was a disaster on multiple levels.
1.  **Wrong Habitat:** The beetles lived high on the cane stalks. The toads couldn't climb. They never met. The toads didn't eat the beetles. [B]
2.  **Reproduction:** The toads bred explosively. A female lays 30,000 eggs at a time. Without natural predators, their population hit 200 million.
3.  **Toxicity:** The toad has poison glands on its shoulders. Australian predators (crocodiles, quolls, snakes) had never seen a toad. They ate them and died instantly.

The toads are now spreading west across the continent, an unstoppable "grey wave," wiping out native predators. [C]

Scientists hope that evolution will intervene. Some snakes are evolving smaller heads (so they can't eat big toads) or learning to avoid them. [D] The lesson remains: ecosystems are complex web; pulling one string (introducing a species) often unravels the whole knot.
    `.trim(),
        questions: [
            {
                id: "batch13_topic3_invasive_cane_toads_Q1",
                question: "Why failed the biological control attempt using Cane Toads against Cane Beetles?",
                options: [
                    "The toads ate too much cane.",
                    "The toads died.",
                    "The toads couldn't climb the stalks to reach the beetles, so they never met.",
                    "The beetles fought back."
                ],
                correctAnswer: "C",
                explanation: "The text explains: 'The beetles lived high on the cane stalks. The toads couldn't climb. They never met. The toads didn't eat the beetles.'"
            }
        ]
    },
    {
        id: "batch13_topic4_scifi_wells_verne",
        taskType: "academic",
        title: "Science Fiction Origins: Jules Verne vs. H.G. Wells",
        passage: `
**Rhetorical Structure:** Comparison/Theme
**Dominant TOEFL Skill:** Inference

Science Fiction (Sci-Fi) has two fathers: Jules Verne (French) and H.G. Wells (British). They wrote at the same time (late 19th century) but represented opposite philosophies.

**Jules Verne** (*20,000 Leagues Under the Sea*, *Around the World in 80 Days*) was the optimist. He was an engineer at heart. [A]
He cared about *how* it worked. He did the math for the moon gun. He described the technology of the submarine.
His stories were about human adventure and mastery over nature. Science was the hero.

**H.G. Wells** (*The War of the Worlds*, *The Time Machine*) was the pessimist/sociologist. He didn't care how the Time Machine worked; he cared about *where* it went. [B]
He used sci-fi to critique society.
In *The Time Machine*, the future humans have evolved into two species: the Eloi (useless aristocrats) and Morlocks (cannibal workers). It was a critique of the British class system.
In *War of the Worlds*, the Martians have superior technology but no morality. Science was the threat.

Verne hated Wells' work. He said, "I make use of physics. He invents. I go to the moon in a cannonball. He goes to Mars in an airship, which he constructs of a metal that does away with the law of gravitation. That's all very pretty, but show me this metal. Let him produce it." [C]

Verne predicted the submarine and the helicopter. Wells predicted the tank and the atomic bomb. [D] Verne gave us the gadgets; Wells gave us the anxiety.
    `.trim(),
        questions: [
            {
                id: "batch13_topic4_scifi_wells_verne_Q1",
                question: "What is the key difference between the science fiction of Jules Verne and H.G. Wells?",
                options: [
                    "Verne wrote in English, Wells in French.",
                    "Verne was an optimistic engineer focused on 'how' it worked; Wells was a pessimist using sci-fi to critique society.",
                    "Verne wrote about Mars; Wells wrote about the Moon.",
                    "Wells hated science."
                ],
                correctAnswer: "B",
                explanation: "The passage contrasts them: 'Verne... was the optimist... He cared about *how* it worked... Wells... was the pessimist/sociologist... He used sci-fi to critique society.'"
            }
        ]
    },
    {
        id: "batch13_topic5_blockchain",
        taskType: "academic",
        title: "Cryptocurrency and the Blockchain Ledger",
        passage: `
**Rhetorical Structure:** Mechanism/Analogy
**Dominant TOEFL Skill:** Prose Summary

Digital money has a problem called "Double Spending." If I send you a digital mp3 file, I still have a copy. Money can't work like that. If I send you a digital dollar, I must not have it anymore. Traditionally, a Bank solves this. The Bank keeps a central ledger verifying who owns what.

Bitcoin (2009) solved this without a Bank using *Blockchain*.

A Blockchain is a "Distributed Ledger." [A] Imagine a Google Doc that everyone can read, but no one can delete.
Instead of one bank having the list of transactions, *thousands* of computers (nodes) have the identical list.

When I pay you:
1.  I announce the transaction to the network.
2.  The computers (miners) compete to bundle this transaction into a "Block" by solving a hard math puzzle.
3.  The winner adds the Block to the chain of previous blocks. [B]
4.  Everyone updates their copy of the ledger.

It is secure because of the "Chain." Each block contains a digital fingerprint (Hash) of the block before it. [C] If a hacker tries to change a record in 2015, it changes the fingerprint. That breaks the link to 2016, which breaks 2017... The whole chain collapses. The network sees the broken chain and rejects it.

To hack it, you would need to control 51% of all the computing power in the world simultaneously. [D] This "Trustless" system allows strangers to trade value without a middleman.
    `.trim(),
        questions: [
            {
                id: "batch13_topic5_blockchain_Q1",
                question: "How does Bitcoin's 'Blockchain' solve the double-spending problem without a bank?",
                options: [
                    "It prints paper money.",
                    "It uses a central server.",
                    "It uses a 'Distributed Ledger' where thousands of computers verify and record transactions in a secure chain.",
                    "It relies on the government."
                ],
                correctAnswer: "C",
                explanation: "The text explains: 'Bitcoin (2009) solved this without a Bank using *Blockchain*... Instead of one bank having the list... *thousands* of computers (nodes) have the identical list.'"
            }
        ]
    },
    {
        id: "batch13_topic6_earthquakes",
        taskType: "academic",
        title: "Seismology: P-Waves and S-Waves",
        passage: `
**Rhetorical Structure:** Comparison/Utilization
**Dominant TOEFL Skill:** Factual Information

When an earthquake strikes, it releases energy in waves. Seismologists classify them into Body Waves (underground) and Surface Waves. The Body Waves arrive first and tell us where the quake is. There are two types: P-Waves and S-Waves.

**P-Waves (Primary Waves):** [A]
These are longitudinal (compressional). They move like a slinky being pushed. They push and pull rock.
They are the *fastest* waves (6 km/s). They arrive first.
Crucially, they can travel through solids *and* liquids.

**S-Waves (Secondary Waves):** [B]
These are transverse (shear). They move like a rope being whipped up and down. They shake the ground sideways.
They are slower (3.5 km/s).
Crucially, they *cannot* travel through liquids. The shear energy just dissipates.

This difference saved us from being hollow.
In the early 20th century, scientists noticed that P-waves went straight through the Earth, but S-waves disappeared on the other side (The S-Wave Shadow Zone). [C]
The only explanation: The center of the Earth is liquid.
The S-waves hit the liquid Outer Core and stopped. The P-waves hit it and refracted (bent).

By measuring the time gap between the P-Wave and S-Wave arrival, you can calculate the distance to the epicenter (like counting seconds between lightning and thunder). [D]
    `.trim(),
        questions: [
            {
                id: "batch13_topic6_earthquakes_Q1",
                question: "What did the behavior of S-Waves reveal about the Earth's interior?",
                options: [
                    "The Earth is flat.",
                    "The Earth is hollow.",
                    "The Earth's outer core is liquid, because S-Waves cannot travel through liquid.",
                    "The Earth is made of cheese."
                ],
                correctAnswer: "C",
                explanation: "The passage notes: 'S-waves disappeared on the other side... The only explanation: The center of the Earth is liquid... Crucially, they *cannot* travel through liquids.'"
            }
        ]
    },
    {
        id: "batch13_topic7_chocolate",
        taskType: "academic",
        title: "The Chemistry of Chocolate: Crystalization and Tempering",
        passage: `
**Rhetorical Structure:** Problem-Solution/Process
**Dominant TOEFL Skill:** Sentence Insertion

Making chocolate is not just cooking; it is materials science. Cocoa butter is a polymorphic fat—it can crystallize in six different shapes (Forms I through VI). Only one shape tastes good.

*   Forms I-IV are unstable and melt too easily (in your hand, messy).
*   Form VI is too hard and waxy.
*   **Form V** is the Goldilocks crystal. It is shiny, snaps when you break it, and melts exactly at body temperature (34°C). [A]

The goal of the chocolatier is to force all the fat molecules to line up in Form V. This process is called *Tempering*.

It involves a precise temperature curve.
1.  **Melt:** Heat the chocolate to 45°C to destroy all crystal structures. It is pure liquid.
2.  **Cool:** Cool it to 27°C. [B] This allows both Form IV (bad) and Form V (good) crystals to form. It is now a mix.
3.  **Cheating:** Re-heat it slightly to 31°C.
Crucially, 31°C is hot enough to melt the bad Form IV crystals, but cool enough that the good Form V crystals survive. [C]

Now you have a liquid with only good seed crystals floating in it. When you cool it down completely, the rest of the chocolate uses those seeds as a template and crystallizes into perfect glossy chocolate.

If you skip this (Untempered chocolate), the cocoa butter separates. It rises to the surface as ugly white streaks called "Bloom," and the texture is crumbly. [D]
    `.trim(),
        questions: [
            {
                id: "batch13_topic7_chocolate_Q1",
                question: "Why is it necessary to 'Temper' chocolate?",
                options: [
                    "To make it sweeter.",
                    "To force the cocoa butter to crystallize into the stable 'Form V' structure, ensuring shine and snap.",
                    "To remove the fat.",
                    "To cook it."
                ],
                correctAnswer: "B",
                explanation: "The text states: 'The goal... is to force all the fat molecules to line up in Form V... It is shiny, snaps when you break it, and melts exactly at body temperature.'"
            }
        ]
    },
    {
        id: "batch13_topic8_camera",
        taskType: "academic",
        title: "The Invention of Photography: The Daguerreotype",
        passage: `
**Rhetorical Structure:** Invention/Impact
**Dominant TOEFL Skill:** Negative Factual Information

For centuries, artists used the *Camera Obscura*—a dark room with a hole that projected an image onto a wall—to trace reality. But they couldn't "fix" the image. It disappeared when the light stopped. The race in the 19th century was to freeze the shadow.

In 1839, Louis Daguerre in France announced the *Daguerreotype*.
It was a mirror having a memory.

The process was dangerous and difficult. [A]
1.  Take a silver-plated copper sheet.
2.  Expose it to Iodine fumes (toxic) to make it light-sensitive.
3.  Put it in the camera and expose it for minutes. (Sitters had to be clamped in iron braces to stop them from moving).
4.  Develop it over hot Mercury fumes (highly toxic). [B]

The result was a unique positive image on metal. It was incredibly sharp.
However, it had downsides:
*   It was a mirror image (reversed).
*   It was a "one-off." There was no negative, so you couldn't make copies. To get a copy, you had to take a photo of the photo. [C]

Simultaneously, in England, William Henry Fox Talbot invented the *Calotype*, which used paper negatives. It was fuzzy, but reproducable.

Daguerre won the PR war initially. The French government bought the patent and gave it "free to the world" (except England). [D] This caused "Daguerreotypomania." Suddenly, regular people could see what their ancestors looked like. History became visual.
    `.trim(),
        questions: [
            {
                id: "batch13_topic8_camera_Q1",
                question: "What was a significant limitation of the Daguerreotype process?",
                options: [
                    "It was blurry.",
                    "It produced a single image on metal (a one-off) with no negative, so it couldn't be easily copied.",
                    "It was too cheap.",
                    "It was digital."
                ],
                correctAnswer: "B",
                explanation: "The passage lists downsides: 'It was a \"one-off.\" There was no negative, so you couldn't make copies.'"
            }
        ]
    },
    {
        id: "batch13_topic9_forgetting_curve",
        taskType: "academic",
        title: "Ebbinghaus and the Forgetting Curve",
        passage: `
**Rhetorical Structure:** Experiment/Trend
**Dominant TOEFL Skill:** Inference

In 1885, German psychologist Hermann Ebbinghaus ran a grueling experiment on the only subject he could find: himself. He wanted to scientifically map memory. He memorized thousands of "nonsense syllables" (like WID, ZOF, KAF) to avoid using old associations. He tested how long he could remember them.

He discovered the *Forgetting Curve*.

Memory does not fade linearly. It decays exponentially. [A]
*   20 minutes after learning: He forgot 40%.
*   1 hour later: He forgot 60%.
*   1 day later: He retained only 33%.
Most forgetting happens immediately after learning.

However, he found a fix: *Spaced Repetition*. [B]
If he reviewed the material just as he was about to forget it, the decay curve flattened.
Review 1 (Day 1): Restores memory to 100%.
Review 2 (Day 3): The forgetting is slower now.
Review 3 (Day 10): It sticks.

To memorize effectively, you shouldn't cram (massed practice). You should space it out. [C] Spacing effect suggests that struggling to retrieve the memory strengthens the neural pathway.

This research led to the "Primacy and Recency Effect." We remember the first things in a list (Primacy) and the last things (Recency). We forget the middle. [D] Ebbinghaus turned the vague art of studying into a measurable science.
    `.trim(),
        questions: [
            {
                id: "batch13_topic9_forgetting_curve_Q1",
                question: "According to Ebbinghaus, what is the 'Spacing Effect'?",
                options: [
                    "Learning works best when you cram.",
                    "Memory decays instantly.",
                    "Reviewing material at spaced intervals (Spaced Repetition) flattens the forgetting curve and strengthens memory.",
                    "You should study while sleeping."
                ],
                correctAnswer: "C",
                explanation: "The text explains: 'If he reviewed the material just as he was about to forget it, the decay curve flattened... You should space it out.'"
            }
        ]
    },
    {
        id: "batch13_topic10_exoplanets",
        taskType: "academic",
        title: "Hunting Exoplanets: The Transit Method",
        passage: `
**Rhetorical Structure:** Problem-Solution/Method
**Dominant TOEFL Skill:** Prose Summary

Finding a planet around another star (*Exoplanet*) is like trying to see a firefly next to a searchlight from New York to LA. The star is a billion times brighter than the planet. You can't just take a photo (usually). Astronomers use indirect tricks. The most successful is the *Transit Method*.

This method relies on luck. We need the solar system to be aligned edge-on to Earth. [A]
If the planet passes *in front* of the star (transits), it blocks a tiny fraction of the starlight.

The telescope (like the Kepler Space Telescope) stares at 150,000 stars simultaneously, measuring their brightness every minute.
It looks for a dip. [B]
*   The dip must be periodic (e.g., every 365 days) -> telling us the Orbital Period (Year).
*   The depth of the dip (how much light is blocked) -> tells us the *Size* of the planet.
A big dip = Jupiter. A tiny dip = Earth.

By combining this with the "Wobble Method" (Radial Velocity), which measures the star's mass, we can get density.
If we have Size + Mass = Density. [C]
Density tells us if it is a Gas Giant or a Rocky World.

Kepler found thousands of planets. It proved that planets are common; most stars have them. [D] It revolutionized our place in the universe, showing that solar systems are the rule, not the exception.
    `.trim(),
        questions: [
            {
                id: "batch13_topic10_exoplanets_Q1",
                question: "How does the 'Transit Method' allow astronomers to find exoplanets?",
                options: [
                    "By listening for radio signals.",
                    "By detecting the tiny periodic dip in a star's brightness when a planet passes in front of it.",
                    "By seeing the planet reflect light.",
                    "By sending a probe."
                ],
                correctAnswer: "B",
                explanation: "The passage notes: 'If the planet passes *in front* of the star (transits), it blocks a tiny fraction of the starlight... It looks for a dip.'"
            }
        ]
    },
    {
        id: "batch13_topic11_taboo_pollution",
        taskType: "academic",
        title: "Anthropology of Taboo: Mary Douglas and 'Pollution'",
        passage: `
**Rhetorical Structure:** Theory/Definition
**Dominant TOEFL Skill:** Rhetorical Purpose

Why are pork and lobster considered "unclean" in the Bible (Leviticus)? Why are bodily fluids considered gross? Anthropologist Mary Douglas, in her classic book *Purity and Danger* (1966), argued it has nothing to do with hygiene. It has to do with *Order*.

She defined "Dirt" as "Matter out of place." [A]
Soil in the garden is not dirty. Soil on your dinner plate is dirty.
Hair on your head is beautiful. Hair in your soup is disgusting.
It is the *location* that makes it pollution.

Societies create categories to make sense of the world. "Holy" means "Whole" or "Complete." Things that fit their category are clean.
Things that cross boundaries or are hybrids are dangerous/taboo. [B]

In Leviticus:
*   Land animals should have hooves and eat grass (Cows). Clean.
*   Sea animals should have fins and scales (Fish). Clean.
*   Pigs have hooves but don't eat grass (they are omnivores). They are hybrids. Dirty. [C]
*   Lobsters live in the sea but climb like spiders (no fins). Dirty.

They defy the classification system. They are cognitive monsters.

Douglas argued that rituals of cleaning are not just about scrubbing; they are about restoring order to the universe. [D] By rejecting the "impure," the society defines its boundaries and reinforces its identity. Taboo is the fence around the social order.
    `.trim(),
        questions: [
            {
                id: "batch13_topic11_taboo_pollution_Q1",
                question: "According to Mary Douglas, why are certain animals like pigs considered 'unclean' in Leviticus?",
                options: [
                    "They are dirty animals.",
                    "They carry disease.",
                    "They fit imperfectly into the society's classification system (e.g., hooves but don't eat grass), making them 'cognitive monsters'.",
                    "They are scary."
                ],
                correctAnswer: "C",
                explanation: "The text states: 'Because they defy the classification system... Pigs have hooves but don't eat grass... They are hybrids. Dirty.'"
            }
        ]
    },
    {
        id: "batch13_topic12_bauhaus",
        taskType: "academic",
        title: "The Bauhaus: Form Follows Function",
        passage: `
**Rhetorical Structure:** Theory/Style
**Dominant TOEFL Skill:** Factual Information

The Bauhaus was a German art school (1919-1933) founded by Walter Gropius that changed the look of the modern world. Its philosophy was radical: Art and Technology should be unified.

Before the Bauhaus, "Art" meant painting/sculpture, and "Craft" meant making chairs/kettles. Gropius erased the line. [A] He believed an artist could design a teapot, and it should be mass-produced in a factory.

The core mantra was "**Form Follows Function**."
A building or object should look like what it does.
*   No decoration. No fake columns. No floral patterns.
*   Honest materials (steel, glass, concrete).
*   Simple geometric shapes and primary colors. [B]

Marcel Breuer designed the "Wassily Chair" using bent steel tubes (like bicycle handlebars). It was light, cheap, and strong.
Marianne Brandt designed teapots that looked like industrial machines.

The Nazis hated the Bauhaus. [C] They saw it as "degenerate" and communist because it rejected German tradition. They closed the school in 1933.

The irony is that this persecution spread the style. The faculty (Gropius, Mies van der Rohe) fled to America. They became heads of architecture at Harvard and Chicago. They built the glass skyscrapers that define the American skyline. [D] The curvy, decorative Victorian world was replaced by the square, functional Bauhaus world.
    `.trim(),
        questions: [
            {
                id: "batch13_topic12_bauhaus_Q1",
                question: "What was the central design philosophy of the Bauhaus school?",
                options: [
                    "More decoration is better.",
                    "Form Follows Function; objects should be simple, honest, and mass-producible.",
                    "Art is only for the rich.",
                    "Use gold and marble."
                ],
                correctAnswer: "B",
                explanation: "The passage states: 'The core mantra was \"**Form Follows Function**.\" A building or object should look like what it does... No decoration.'"
            }
        ]
    },
    {
        id: "batch13_topic13_opium_wars",
        taskType: "academic",
        title: "The Opium Wars: Free Trade vs. National Sovereignty",
        passage: `
**Rhetorical Structure:** Cause-Effect/Conflict
**Dominant TOEFL Skill:** Negative Factual Information

In the 18th century, Britain had a trade imbalance. They loved Chinese tea, silk, and porcelain. But China (Qing Dynasty) didn't want anything Britain made. China only accepted Silver payment. Britain was bleeding silver.

To fix this, the British East India Company started smuggling *Opium* (grown in India) into China. [A]
It was illegal, but profitable. By 1830, millions of Chinese were addicted. The trade balance flipped; silver flowed out of China.

The Chinese Emperor appointed Commissioner Lin Zexu to stop it. Lin was incorruptible. He confiscated 20,000 chests of British opium and dissolved it in lime in the sea. He wrote a letter to Queen Victoria asking her to stop the drug traffic. [B]

Britain responded with war. They framed it as a defense of "Free Trade" and "Property Rights" (the destroyed opium).
The *First Opium War* (1839-42) was a massacre. The British iron steamshine *Nemesis* destroyed the wooden Chinese junks.

The resulting *Treaty of Nanking* was the first "Unequal Treaty." [C]
1.  China had to pay for the destroyed opium.
2.  China had to open 5 ports to trade.
3.  China ceded Hong Kong to Britain.
4.  Extraterritoriality: British citizens in China were immune to Chinese law.

This began China's "Century of Humiliation." [D] It shattered the image of Chinese superiority and paved the way for the collapse of the imperial system in 1911.
    `.trim(),
        questions: [
            {
                id: "batch13_topic13_opium_wars_Q1",
                question: "Why did the British interfere in the Chinese economy by smuggling Opium?",
                options: [
                    "They wanted to help Chinese farmers.",
                    "To fix a massive trade imbalance caused by Britain's thirst for tea and China's refusal to buy British goods.",
                    "To win a bet.",
                    "They had too much opium."
                ],
                correctAnswer: "B",
                explanation: "The text explains: 'Britain had a trade imbalance... Britain was bleeding silver. To fix this, the British East India Company started smuggling *Opium*.'"
            }
        ]
    },
    {
        id: "batch13_topic14_quantum_tunneling",
        taskType: "academic",
        title: "Quantum Tunneling: Walking Through Walls",
        passage: `
**Rhetorical Structure:** Phenomenon/Application
**Dominant TOEFL Skill:** Sentence Insertion

In classical physics, if you roll a ball at a hill, and the ball doesn't have enough energy to reach the top, it will roll back. It cannot pass the barrier. In Quantum Mechanics, the ball can simply appear on the other side. This is *Quantum Tunneling*.

It happens because particles (electrons) act like waves.
A wave doesn't have a specific location; it is spread out. [A] The "Probability Wave" describes where the electron *might* be.
When the electron hits the barrier, the wave tail extends slightly through the barrier to the other side.
There is a non-zero probability that the electron is actually over there. Occasionally, it just *is*.

This is not just theory; it is why the Sun shines. [B]
In the Sun, protons try to fuse. But protons are both positive. They repel each other (Coulomb Barrier).
The Sun is not hot enough to overcome this repulsion with speed alone.
However, because of tunneling, occasionally protons "cheat" the barrier and fuse anyway. Without tunneling, the Sun would be cold.

We use it in technology. [C]
Flash Drives (SSD) use tunneling to trap electrons in memory cells to store data.
Scanning Tunneling Microscopes (STM) use a needle tip so close to a surface that electrons tunnel across the gap, creating an image of individual atoms.

It is a reminder that the solid rules of our macroscopic world are just statistical averages of the ghostly, probabilistic quantum world. [D]
    `.trim(),
        questions: [
            {
                id: "batch13_topic14_quantum_tunneling_Q1",
                question: "How does Quantum Tunneling enable the Sun to produce energy?",
                options: [
                    "It makes the Sun spin.",
                    "It allows protons to overcome the electrical repulsion barrier and fuse, even though they lack the energy to do so normally.",
                    "It cools the Sun down.",
                    "It creates gravity."
                ],
                correctAnswer: "B",
                explanation: "The passage states: 'because of tunneling, occasionally protons \"cheat\" the barrier and fuse anyway. Without tunneling, the Sun would be cold.'"
            }
        ]
    },
    {
        id: "batch13_topic15_vaccination_herd",
        taskType: "academic",
        title: "Vaccination and the Logic of Herd Immunity",
        passage: `
**Rhetorical Structure:** Concept/Mechanism
**Dominant TOEFL Skill:** Vocabulary in Context

A vaccine works by training the immune system. We inject a weakened pathogen or a protein (Antigen) which cannot cause disease but looks like the enemy. The body produces antibodies and "Memory Cells." If the real virus strikes later, the body is pre-armed and destroys it instantly.

However, vaccines don't just protect the individual; they protect the community via *Herd Immunity*.

Viruses need hosts to spread. [A] If I am infected, I might pass it to 2 people ($R_0 = 2$).
If everyone around me is vaccinated, the virus hits a "dead end." It cannot jump. The chain of transmission is broken.

This protects the vulnerable—babies, chemo patients, the elderly—who *cannot* be vaccinated. They rely on the "Herd" to be a shield. [B]

The threshold depends on contagiousness.
For Measles (extremely contagious, $R_0 = 15$), you need 95% of the population vaccinated to stop the spread.
For Polio, you need about 80%.

If the rate drops below the threshold (due to hesitancy), the holes in the shield get big enough for the virus to find the vulnerable. [C] Outbreaks return.

Smallpox is the only human disease we have eradicated completely (1980). [D] We did it through "Ring Vaccination"—finding cases and vaccinating everyone in a ring around them until the virus had nowhere left to go. It proved that biology is a numbers game.
    `.trim(),
        questions: [
            {
                id: "batch13_topic15_vaccination_herd_Q1",
                question: "How does 'Herd Immunity' protect vulnerable individuals who cannot be vaccinated?",
                options: [
                    "They take extra vitamins.",
                    "If enough people are immune, the virus hits a 'dead end' and cannot effectively spread to reach the vulnerable.",
                    "The virus becomes weaker.",
                    "They wear masks."
                ],
                correctAnswer: "B",
                explanation: "The text explains: 'If everyone around me is vaccinated, the virus hits a \"dead end.\"... This protects the vulnerable... who *cannot* be vaccinated.'"
            }
        ]
    },
    {
        id: "batch13_topic16_renaissance_art",
        taskType: "academic",
        title: "The Renaissance Shift: Perspective and Humanism",
        passage: `
**Rhetorical Structure:** Contrast/Change
**Dominant TOEFL Skill:** Prose Summary

Medieval Art (pre-1400) looks "flat" to modern eyes. The size of a figure represented their importance, not their distance. Jesus was huge; the trees were tiny. The background was gold leaf, symbolizing heaven, not a real sky. The Renaissance changed this by introducing *Linear Perspective* and *Humanism*.

**Linear Perspective** (invented by Brunelleschi) is a mathematical system. [A]
It uses a "Vanishing Point" on the horizon. Parallel lines converge at this point.
This creates the illusion of 3D depth on a flat wall.
Masaccio’s *The Holy Trinity* looks like a hole in the wall. The viewer is forced to stand in a specific spot. It invites the viewer *into* the scene.

**Humanism** was the philosophical shift.
Focus moved from God to Man. "Protagoras: Man is the measure of all things."
Artists like Michelangelo and Da Vinci studied anatomy by dissecting corpses. [B] They painted muscles, veins, and weight.
Even religious figures (Mary, Jesus) were painted as real humans with emotions, set in real landscapes under blue skies.

This secularization of art meant that a portrait of a rich merchant (Mona Lisa) became as valuable as an icon of a Saint. [C] The individual ego emerged. Artists began signing their work (Medieval artists were anonymous). [D] Art became a window into the natural world, rather than a door to the super-natural.
    `.trim(),
        questions: [
            {
                id: "batch13_topic16_renaissance_art_Q1",
                question: "What was the significance of 'Linear Perspective' in Renaissance art?",
                options: [
                    "It made paintings brighter.",
                    "It used a mathematical system with a vanishing point to create the illusion of 3D depth on a flat surface.",
                    "It banned religious themes.",
                    "It used only black and white."
                ],
                correctAnswer: "B",
                explanation: "The passage defines it: 'Linear Perspective... uses a \"Vanishing Point\"... This creates the illusion of 3D depth on a flat wall.'"
            }
        ]
    },
    {
        id: "batch13_topic17_titanic",
        taskType: "academic",
        title: "The Titanic and the Birth of Safety Regulations",
        passage: `
**Rhetorical Structure:** Cause-Effect/Regulation
**Dominant TOEFL Skill:** Inference

The sinking of the RMS *Titanic* in 1912 was a tragedy of hubris, but it was also the catalyst for modern safety. The ship was "unsinkable" because of its 16 watertight compartments. It could stay afloat with 4 flooded. The iceberg sliced 5.

The death toll (1,500) was high not just because it sank, but because of regulatory failure.
1.  **Lifeboats:** The Titanic carried boats for only 1,178 people (half the passengers). [A]
    *According to the law* of 1894, this was legal! The law based lifeboat capacity on the *tonnage* of the ship, not the number of humans. The law was written for smaller ships 20 years earlier. It hadn't caught up to the super-liners (Cultural Lag).
2.  **Radio:** The *Californian* was only 10 miles away and saw the flares. But its radio operator had gone to sleep. There was no 24-hour watch requirement. [B]

The aftermath was the SOLAS Treaty (Safety of Life at Sea), 1914.
*   **Boats:** Ships must carry lifeboats for *everyone* on board.
*   **Drills:** Crew must practice lifeboat drills (Titanic crew didn't know how to lower them).
*   **Radio:** 24-hour radio watch is mandatory. [C]
*   **Ice Patrol:** The International Ice Patrol was formed to monitor icebergs.

Today, maritime travel is incredibly safe because every rule in the book is written in the blood of the Titanic victims. [D]
    `.trim(),
        questions: [
            {
                id: "batch13_topic17_titanic_Q1",
                question: "Why was it legal for the Titanic to carry lifeboats for only half its passengers?",
                options: [
                    "Because it was unsinkable.",
                    "The law was outdated, basing lifeboat capacity on the ship's tonnage rather than the number of people.",
                    "Passengers didn't want lifeboats.",
                    "Lifeboats were too expensive."
                ],
                correctAnswer: "B",
                explanation: "The text states: 'The law based lifeboat capacity on the *tonnage* of the ship, not the number of humans... The law was written for smaller ships.'"
            }
        ]
    },
    {
        id: "batch13_topic18_nuclear_family",
        taskType: "academic",
        title: "Sociology of the Family: The Rise and Fall of the Nuclear Family",
        passage: `
**Rhetorical Structure:** Historical Trend/Critique
**Dominant TOEFL Skill:** Factual Information

The *Nuclear Family*—Dad (breadwinner), Mom (homemaker), and kids living in a separate house—is often seen as the "traditional" structure. Sociologists argue it is actually a weird historical anomaly, specific to the 1950s West.

For most of human history, the "traditional" family was the *Extended Family*. [A] Grandparents, aunts, and cousins lived together or next door. They shared childcare and resources. In an agricultural society, you needed the labor.

The Industrial Revolution broke this. Factories required mobility. You had to move to the city for a job. You couldn't take the whole clan. The family shrank to the core unit: The Nuclear Family. [B]

The 1950s economic boom in the US made this idealized model possible. One income could support a house and car.

However, this structure is fragile.
It lacks the "village" support network. If the parents divorce or lose a job, there is no safety net of kin.
It isolates the elderly in nursing homes and the children in daycares. [C]

Since the 1970s, the model has declined due to economic shifts (requiring two incomes) and changing values (divorce, cohabitation). [D] We are seeing a return to multi-generational living (due to rent costs) and "Chosen Families" (friends networks), suggesting the Nuclear Family may have been a temporary blip.
    `.trim(),
        questions: [
            {
                id: "batch13_topic18_nuclear_family_Q1",
                question: "Why do sociologists consider the 'Nuclear Family' (parents and children only) to be a fragile structure?",
                options: [
                    "It is too big.",
                    "It lacks the safety net and shared resources of the 'Extended Family' or village.",
                    "People don't like each other.",
                    "It is too expensive."
                ],
                correctAnswer: "B",
                explanation: "The passage argues: 'However, this structure is fragile. It lacks the \"village\" support network... If the parents divorce... there is no safety net of kin.'"
            }
        ]
    },
    {
        id: "batch13_topic19_gps_relativity",
        taskType: "academic",
        title: "How GPS Works: Einstein in Your Pocket",
        passage: `
**Rhetorical Structure:** Mechanism/Proof
**Dominant TOEFL Skill:** Sentence Insertion

The Global Positioning System (GPS) consists of 24+ satellites orbiting Earth. To find your location, your phone listens to signals from at least 4 satellites. It measures how long the signal took to arrive. Since radio waves travel at the speed of light ($c$), Time = Distance. By triangulating these distances, it pinpoints you.

The precision required is insane. Light travels 300,000 km/s. An error of 0.000001 seconds (1 microsecond) means an error of 300 meters on the ground.

To work, GPS must account for Einstein's Theories of Relativity. [A]
1.  **Special Relativity:** The satellites are moving fast (14,000 km/h). Moving clocks tick *slower* (Time Dilation). This slows the satellite clocks by 7 microseconds a day.
2.  **General Relativity:** The satellites are far from Earth's gravity. Clocks in weak gravity tick *faster*. [B] This speeds them up by 45 microseconds a day.

Net result: The satellite clocks run fast by 38 microseconds per day (45 - 7).
38 microseconds = 11 kilometers of error. [C]

If engineers ignored Einstein, GPS would fail in minutes. You would be driving in the ocean.
The satellites have atomic clocks that are programmed to tick slightly slower to offset these relativistic effects perfectly. [D] It is the only everyday technology that relies on the warping of spacetime to function.
    `.trim(),
        questions: [
            {
                id: "batch13_topic19_gps_relativity_Q1",
                question: "Why must GPS satellites adjust their clocks to account for General Relativity?",
                options: [
                    "Because space is cold.",
                    "Because gravity is weaker in orbit, causing clocks to tick faster than on Earth.",
                    "Because they move fast.",
                    "Because of solar flares."
                ],
                correctAnswer: "B",
                explanation: "The text states: 'General Relativity: The satellites are far from Earth's gravity. Clocks in weak gravity tick *faster*.'"
            }
        ]
    },
    {
        id: "batch13_topic20_whale_evolution",
        taskType: "academic",
        title: "The Evolution of Whales: Return to the Sea",
        passage: `
**Rhetorical Structure:** Chronology/Trend
**Dominant TOEFL Skill:** Inference

Whales are mammals. They breathe air, have warm blood, and nurse young. This implies their ancestors lived on land. The fossil record of the transition from land-mammal to sea-monster is stunningly complete.

It started 50 million years ago with *Pakicetus* ("Pakistan Whale"). [A] It looked like a wolf with hooves. It lived near rivers. We know it's a whale ancestor because of a unique bone structure in its inner ear (the involucrum) found only in cetaceans.

Next came *Ambulocetus* ("Walking Whale"). It looked like a furry crocodile. It had webbed feet and could walk on land and swim.

Then *Basilosaurus* (35 mya). It was fully aquatic, 60 feet long, and snake-like. Crucially, it still had tiny, useless hind legs protecting from its body. [B] Vestigial limbs.

The physiological changes were drastic.
1.  **Nostrils:** Migrated from the nose tip to the top of the head (Blowhole) to breathe while swimming.
2.  **Kidneys:** Evolved to filter out salt water (since they drink the ocean).
3.  **Sonar:** Developed Echolocation to hunt in dark water. [C]

Why go back? The ocean was an empty niche. The dinosaurs (marine reptiles) were dead. There was free food and no competition. The whales returned to the womb of life, but they brought their mammalian toolkit with them. [D]
    `.trim(),
        questions: [
            {
                id: "batch13_topic20_whale_evolution_Q1",
                question: "How do scientists know that *Pakicetus* was an early ancestor of whales?",
                options: [
                    "It looked like a fish.",
                    "It had a unique bone structure in its inner ear (involucrum) found only in whales.",
                    "It had fins.",
                    "It was found in the ocean."
                ],
                correctAnswer: "B",
                explanation: "The passage notes: 'We know it's a whale ancestor because of a unique bone structure in its inner ear (the involucrum) found only in cetaceans.'"
            }
        ]
    }
];
