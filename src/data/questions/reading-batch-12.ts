
import { AcademicQuestion } from "./reading-2026";

export const batch12Passages: AcademicQuestion[] = [
    {
        id: "batch12_topic1_doppler",
        taskType: "academic",
        title: "The Physics of Sound and Light: The Doppler Effect",
        passage: `
**Rhetorical Structure:** Phenomenon/Application
**Dominant TOEFL Skill:** Factual Information

You hear the Doppler Effect every time an ambulance passes you. As it approaches, the siren sounds high-pitched (*neeee*). As it passes and drives away, the pitch instantly drops (*doooo*). This shift in frequency caused by motion is the *Doppler Effect*.

Sound travels as waves. As the ambulance moves *towards* you, it chases its own sound waves. [A] It squashes the waves together, shortening the wavelength. Shorter wavelength = Higher Frequency (High Pitch).
As it moves *away*, it runs away from the waves, stretching them out. Longer wavelength = Lower Frequency (Low Pitch).

This applies to light as well. Light is a wave.
If a star moves towards Earth, its light waves are squashed towards the blue end of the spectrum (*Blueshift*).
If a star moves away, its light is stretched towards the red end (*Redshift*).

Edwin Hubble used this in the 1920s. [B] He looked at distant galaxies and saw they were all Redshifted. This meant they were all moving away from us.
Furthermore, the farther away they were, the bigger the Redshift (moving faster).
This proved the Universe is Expanding. [C]

We scan use it for weather. "Doppler Radar" bounces radio waves off rain clouds. By measuring the frequency shift of the returning wave, it can tell if the rain is moving towards us or away, allowing meteorologists to detect tornadoes (rotation). [D]
    `.trim(),
        questions: [
            {
                id: "batch12_topic1_doppler_Q1",
                question: "How does Doppler Radar allow meteorologists to detect tornadoes?",
                options: [
                    "By taking a picture of the cloud.",
                    "By measuring the frequency shift of radio waves bouncing off rain to detect if it is moving towards or away (rotation).",
                    "By measuring the temperature.",
                    "By measuring the thunder."
                ],
                correctAnswer: "B",
                explanation: "The text states: 'By measuring the frequency shift... it can tell if the rain is moving towards us or away, allowing meteorologists to detect tornadoes (rotation).'"
            }
        ]
    },
    {
        id: "batch12_topic2_french_revolution_terror",
        taskType: "academic",
        title: "The French Revolution: The Reign of Terror",
        passage: `
**Rhetorical Structure:** Cause-Effect/Paradox
**Dominant TOEFL Skill:** Inference

The French Revolution began in 1789 with high ideals: "Liberty, Equality, Fraternity." But by 1793, it had descended into the *Reign of Terror* (La Terreur), a bloodbath where the revolutionary government executed huge numbers of its own citizens. How did a movement for freedom end in tyranny?

The driving force was paranoia. The new Republic was at war with all of Europe (Austria, Prussia, Britain) and faced civil war at home (Vendée rebellion). [A] The radical Jacobins, led by Maximilien Robespierre, believed the only way to save the Revolution was to eliminate all "enemies within."

They set up the Committee of Public Safety. They suspended the constitution. "Terror," Robespierre said, "is nothing other than justice: prompt, severe, inflexible." [B]

The Guillotine became the symbol of this efficiency. It was egalitarian—it killed the King and the peasant with the same blade. (Previously, nobles were beheaded, commoners hanged).

The definition of "enemy" expanded absurdly. [C] First it was aristocrats. Then priests. Then hoarding merchants. Then moderate revolutionaries who weren't radical *enough*. You could be executed for not being enthusiastic enough.

The Terror ate its children. Eventually, the Convention turned on Robespierre himself. [D] In July 1794 (Thermidor), he was arrested and guillotined. The fever broke. The Revolution proved a grim political law: absolute purity in politics usually leads to absolute violence.
    `.trim(),
        questions: [
            {
                id: "batch12_topic2_french_revolution_terror_Q1",
                question: "According to the passage, why did the 'Reign of Terror' eventually spiral out of control?",
                options: [
                    "The King escaped.",
                    "The Guillotine broke.",
                    "The definition of 'enemy' expanded absurdly to include even moderate revolutionaries who weren't enthusiastic enough.",
                    "Robespierre resigned."
                ],
                correctAnswer: "C",
                explanation: "The passage notes: 'The definition of \"enemy\" expanded absurdly. First it was aristocrats... Then moderate revolutionaries... You could be executed for not being enthusiastic enough.'"
            }
        ]
    },
    {
        id: "batch12_topic3_microbiome",
        taskType: "academic",
        title: "The Human Microbiome and the Gut-Brain Axis",
        passage: `
**Rhetorical Structure:** Discovery/Interaction
**Dominant TOEFL Skill:** Prose Summary

You are not alone. Your body contains about 30 trillion human cells, but it hosts about 39 trillion microbial cells (bacteria, viruses, fungi). Collectively, this is the *Human Microbiome*. Most live in the gut. For years, medicine ignored them as freeloaders or pathogens. Now, we realize they are a "forgotten organ."

The most surprising discovery is the *Gut-Brain Axis*. Your stomach talks to your brain. [A]

The gut produces 90% of the body's Serotonin (the happiness neurotransmitter). Bacteria manufacture it. If your gut flora is damaged (e.g., by antibiotics or poor diet), serotonin levels drop, which is linked to depression and anxiety.

The Vagus Nerve connects the gut directly to the brain. [B] Bacteria can send chemical signals up this highway.
Studies in mice show that if you take gut bacteria from an "anxious" mouse and transplant it into a "brave" mouse, the brave mouse becomes anxious. Personality is partly bacterial.

This changes how we view disease. Obesity, autism, and Parkinson's are now being linked to microbiome dysbiosis (imbalance). [C]
We used to try to kill bacteria (Antibiotics). Now we are trying to grow them (Probiotics/Prebiotics). The future of psychiatry might not be Prozac, but a "Psychobiotic" yogurt—healing the mind by healing the gut. [D]
    `.trim(),
        questions: [
            {
                id: "batch12_topic3_microbiome_Q1",
                question: "What is the 'Gut-Brain Axis' described in the text?",
                options: [
                    "A bone in the spine.",
                    "The connection between the stomach and brain where gut bacteria can influence mood and serotonin levels.",
                    "A type of disease.",
                    "A new medicine."
                ],
                correctAnswer: "B",
                explanation: "The text explains: 'The Gut-Brain Axis. Your stomach talks to your brain... Bacteria manufacture [Serotonin]... Bacteria can send chemical signals up this highway.'"
            }
        ]
    },
    {
        id: "batch12_topic4_heros_journey",
        taskType: "academic",
        title: "Joseph Campbell and the Monomyth: The Hero's Journey",
        passage: `
**Rhetorical Structure:** Theory/Structure
**Dominant TOEFL Skill:** Sentence Insertion

In 1949, mythologist Joseph Campbell published *The Hero with a Thousand Faces*. He argued that all great myths, from Gilgamesh to the Odyssey to the Buddha, share the same underlying structure. He called this the *Monomyth* or "Hero's Journey."

The pattern has three main acts: Separation, Initiation, and Return. [A]

1.  **The Call to Adventure:** The hero starts in the ordinary world. Something calls them to leave (a message, a disaster). They often refuse the call at first (fear).
2.  **Crossing the Threshold:** They leave the known world and enter the "Special World" (magic, danger). They meet a Mentor (Obi-Wan, Gandalf). [B]
3.  **The Ordeal:** They face a series of trials. They descend into the "Belly of the Whale" (Death/Underworld). They face their greatest fear and are "reborn."
4.  **The Return:** The hero comes back to the ordinary world, but they are changed. They bring a "Elixir" (knowledge/treasure) to save their people. [C]

Campbell believed this story is universal because it is a metaphor for growing up. We all leave the safety of childhood, face the scary world, and return as adults.

George Lucas famously used Campbell’s book as a blueprint to write *Star Wars*. [D] Luke Skywalker is the perfect Campbellian hero. The theory is now a standard tool for Hollywood screenwriters, ensuring that modern blockbusters resonate with the ancient patterns of the human psyche.
    `.trim(),
        questions: [
            {
                id: "batch12_topic4_heros_journey_Q1",
                question: "Why did Joseph Campbell believe the 'Hero's Journey' is a universal story structure?",
                options: [
                    "Because everyone likes Star Wars.",
                    "It is a metaphor for growing up: leaving the safety of childhood, facing trials, and returning as an adult.",
                    "Because ancient writers copied each other.",
                    "It is the easiest way to write."
                ],
                correctAnswer: "B",
                explanation: "The passage states: 'Campbell believed this story is universal because it is a metaphor for growing up. We all leave the safety of childhood... and return as adults.'"
            }
        ]
    },
    {
        id: "batch12_topic5_gold_standard",
        taskType: "academic",
        title: "Monetary Policy: Gold Standard vs. Fiat Currency",
        passage: `
**Rhetorical Structure:** Comparison/Debate
**Dominant TOEFL Skill:** Negative Factual Information

For most of history, money was "commodity money." A gold coin was valuable because it *was* gold. As paper money developed, it was backed by gold. Under the *Gold Standard* (19th century), a \$20 bill was just a claim check. You could walk into a bank and exchange it for \$20 worth of actual gold.

Pros of Gold:
It prevents inflation. The government cannot print more money than it has gold in the vault. [A] It creates stable prices and disciplined government spending.

Cons of Gold:
It is inflexible. If the economy grows but the gold supply doesn't (because no new mines are found), you get *Deflation* (prices drop). Deflation is deadly because it kills investment (why build a factory if prices will be lower next year?).
Also, in a crisis (war/depression), you cannot print money to stimulate the economy. This is why nations abandoned gold during the Great Depression. [B]

Today, we use *Fiat Currency* (from Latin *fiat*, "let it be done"). [C]
The Dollar or Euro involves paper (or digital digits) that has *no* intrinsic value. It is not backed by anything but "The Full Faith and Credit" of the government.

It is valuable simply because we all agree it is valuable and the government demands taxes in it.
This allows Central Banks to control the money supply—printing in bad times, tightening in good times. [D] While "Gold Bugs" fear this leads to hyperinflation (printing to infinity), modern economists argue that Fiat flexibility is essential to manage the complex, massive global economy.
    `.trim(),
        questions: [
            {
                id: "batch12_topic5_gold_standard_Q1",
                question: "What is a major disadvantage of the 'Gold Standard' mentioned in the passage?",
                options: [
                    "Gold is too heavy.",
                    "It causes inflation.",
                    "It is inflexible; the government cannot print money to stimulate the economy in a crisis, which can lead to deflation.",
                    "It makes gold cheap."
                ],
                correctAnswer: "C",
                explanation: "The text notes: 'Cons... It is inflexible... Also, in a crisis (war/depression), you cannot print money to stimulate the economy.'"
            }
        ]
    },
    {
        id: "batch12_topic6_volcanoes",
        taskType: "academic",
        title: "Geology of Volcanoes: Shield vs. Stratovolcanoes",
        passage: `
**Rhetorical Structure:** Comparison/Cause-Effect
**Dominant TOEFL Skill:** Vocabulary in Context

Not all volcanoes are created equal. Their shape and explosiveness depend on one thing: the chemistry of their magma, specifically the *Silica* content.

**Shield Volcanoes** (e.g., Mauna Loa in Hawaii). [A]
These have low-silica magma (basalt). It is hot, runny, and fluid. Gases can easily bubble out of it.
When it erupts, it doesn't explode; it flows. The lava travels for miles before cooling. This builds a broad, gently sloping mountain that looks like a warrior's shield laid on the ground.
These are usually found at "Hot Spots" or divergent boundaries. They are generally safe to watch (tourists go there).

**Stratovolcanoes** (Composite Volcanoes) (e.g., Mt. Fuji, Mt. St. Helens). [B]
These have high-silica magma (andesite/rhyolite). It is thick, sticky, and viscous (like peanut butter).
Gases (water vapor, $CO_2$) get trapped inside the sticky magma. The pressure builds up until... BOOM.
They erupt explosively, blasting ash and rock (pyroclastic flows) high into the air. The lava doesn't flow far, so it piles up steep and tall. [C]
These are found at Convergent boundaries (Subduction Zones), where wet ocean crust melts.

The shape tells you the danger. [D] If it's a gentle hill, bring your camera. If it's a beautiful, steep cone, run.
    `.trim(),
        questions: [
            {
                id: "batch12_topic6_volcanoes_Q1",
                question: "What determines whether a volcano will be a gentle 'Shield' or an explosive 'Stratovolcano'?",
                options: [
                    "Height.",
                    "Location.",
                    "The Silica content of the magma (low silica flows; high silica explodes).",
                    "The weather."
                ],
                correctAnswer: "C",
                explanation: "The passage explains: 'Their shape and explosiveness depend on... the chemistry of their magma, specifically the *Silica* content.'"
            }
        ]
    },
    {
        id: "batch12_topic7_water_chemistry",
        taskType: "academic",
        title: "The Bizarre Chemistry of Water: Hydrogen Bonding",
        passage: `
**Rhetorical Structure:** Phenomenon/Explanation
**Dominant TOEFL Skill:** Inference

Water ($H_2O$) is the weirdest molecule in the universe. It breaks almost every rule of chemistry. If it behaved "normally," Earth would be a dead rock. The secret is its stickiness, caused by *Hydrogen Bonds*.

Water is a "Polar Molecule." The Oxygen atom hogs the electrons, making it slightly negative. The Hydrogen atoms are left slightly positive. The positive moves of one molecule attract the negative moves of another. [A] They stick together like weak magnets.

This explains its superpowers:
1.  **High Boiling Point:** Similar molecules (like Hydrogen Sulfide) are gas at room temperature. Water is liquid because the H-bonds hold it together. It takes a huge amount of heat energy to break them (turn to steam).
2.  **Universal Solvent:** Because it has both + and - ends, it can rip apart almost any ionic compound (like salt) or polar substance. [B] This allows it to carry nutrients in blood.

3.  **Ice Density Anomaly:** This is the big one.
Almost every substance gets denser when it freezes (solid). Solids sink.
Water *expands* when it freezes. [C] The H-bonds force the molecules into a rigid, open hexagonal crystal structure that takes up *more* space than the liquid.
Therefore, Ice is less dense than water. Ice floats.

Why does this matter? If ice sank, lakes and oceans would freeze from the bottom up. They would freeze solid, killing all fish. [D] Because ice floats, it forms an insulating layer on top, keeping the water below liquid. Life survived the ice ages because of this chemical quirk.
    `.trim(),
        questions: [
            {
                id: "batch12_topic7_water_chemistry_Q1",
                question: "Why does ice float on liquid water?",
                options: [
                    "Ice is lighter than air.",
                    "Water expands when it freezes because Hydrogen bonds force molecules into a rigid, open structure that is less dense.",
                    "Fish push it up.",
                    "It is magic."
                ],
                correctAnswer: "B",
                explanation: "The text states: 'Water *expands* when it freezes. The H-bonds force the molecules into a rigid, open hexagonal crystal structure that takes up *more* space... Ice is less dense.'"
            }
        ]
    },
    {
        id: "batch12_topic8_airplane_invention",
        taskType: "academic",
        title: "The Wright Brothers vs. Samuel Langley: The Problem of Control",
        passage: `
**Rhetorical Structure:** Comparison/Problem-Solution
**Dominant TOEFL Skill:** Prose Summary

In 1903, the race to build the first airplane was between two groups.
Group A: Samuel Langley. Secretary of the Smithsonian. Famous scientist. \$50,000 government grant.
Group B: Orville and Wilbur Wright. Bicycle mechanics from Ohio. High school dropouts. Self-funded.

Langley focused on *Power*. He built a massive engine and a stable, flat-winged plane (The Aerodrome). [A] He believed if he pushed it fast enough, it would fly like an arrow. His pilot just sat there. It crashed into the Potomac River immediately.

The Wrights focused on *Control*. [B] They realized a plane is not an arrow; it is a bicycle. It is inherently unstable. The pilot needs to balance it constantly.
They observed birds twisting their wingtips to turn. They invented "Wing Warping" (precursor to ailerons).
They built a wind tunnel to test wing shapes (airfoils) because the textbook data was wrong.

On Dec 17, 1903, at Kitty Hawk, the Wright Flyer flew. It was underpowered and ugly, but it was *controllable*. [C]

The difference was philosophy. Langley tried to built a stable machine and launch it. The Wrights tried to learn how to fly a glider first, then added an engine. [D] They solved the "Three-Axis Control" problem (Pitch, Roll, Yaw), which remains the standard for every plane flying today. History proved that control is more important than power.
    `.trim(),
        questions: [
            {
                id: "batch12_topic8_airplane_invention_Q1",
                question: "Why did the Wright Brothers succeed in flying while Samuel Langley failed?",
                options: [
                    "They had more money.",
                    "They focused on 'Control' (using wing warping to balance unstable aircraft) rather than just 'Power'.",
                    "They had a better engine.",
                    "Langley was sick."
                ],
                correctAnswer: "B",
                explanation: "The passage argues: 'The Wrights focused on *Control*... They realized a plane... is inherently unstable... History proved that control is more important than power.'"
            }
        ]
    },
    {
        id: "batch12_topic9_bystander_effect",
        taskType: "academic",
        title: "The Bystander Effect: The Murder of Kitty Genovese",
        passage: `
**Rhetorical Structure:** Narrative/Analysis
**Dominant TOEFL Skill:** Sentence Insertion

In 1964, Kitty Genovese was stabbed to death outside her apartment in Queens, New York. The attack lasted 30 minutes. Early newspaper reports claimed that 38 neighbors watched from their windows, heard her screams, and did nothing. No one called the police. This incident (though later found to be exaggerated) launched the psychological study of the *Bystander Effect*.

Why do people fail to help? It is not apathy; it is *Diffusion of Responsibility*.

If you are the only witness to an accident, you feel 100% of the pressure to help. You act.
If there are 10 witnesses, you feel only 10% of the pressure. [A] You think, "Someone else will call 911. Someone else is a doctor."
If everyone thinks this, no one acts.

Social Psychologists Latané and Darley proved this in lab experiments. [B] A subject put in a room alone would report smoke coming under the door instantly. A subject in a room with 3 other passive actors would ignore the smoke. They didn't want to look foolish or break the social norm of "keeping cool."

The "Pluralistic Ignorance" occurs when we look to others to see how to react. [C] I see you not panicking, so I assume it's not an emergency. You look at me not panicking, and assume the same. We all stand there while the building burns.

To break the Bystander Effect, you must personalize the responsibility. [D] Don't yell "Help!" Yell "You in the red shirt, call 911!" By pointing at one person, you remove the diffusion and force them to act.
    `.trim(),
        questions: [
            {
                id: "batch12_topic9_bystander_effect_Q1",
                question: "What is 'Diffusion of Responsibility' in the context of the Bystander Effect?",
                options: [
                    "People are lazy.",
                    "When many witnesses are present, each person feels less pressure to act because they assume someone else will.",
                    "People are afraid of the police.",
                    "People don't care about others."
                ],
                correctAnswer: "B",
                explanation: "The text explains: 'If there are 10 witnesses, you feel only 10% of the pressure. You think, \"Someone else will call 911.\"' "
            }
        ]
    },
    {
        id: "batch12_topic10_moon_formation",
        taskType: "academic",
        title: "The Giant Impact Hypothesis: Origin of the Moon",
        passage: `
**Rhetorical Structure:** Hypothesis/Evidence
**Dominant TOEFL Skill:** Factual Information

Where did the Moon come from? Pre-Apollo theories were weak.
1.  **Capture Theory:** Earth grabbed a passing asteroid. (Physics makes this hard; it would likely just zip past).
2.  **Fission Theory:** Early Earth spun so fast a chunk flew off. (Earth doesn't spin that fast).
3.  **Co-Accretion:** They formed side-by-side from the same dust. (If so, they should have the same iron core. But the Moon has a tiny iron core).

After the Apollo astronauts brought back moon rocks, a new theory emerged: The *Giant Impact Hypothesis* (or Theia Impact).

4.5 billion years ago, a Mars-sized planet named "Theia" crashed into the proto-Earth. [A]
It was a glancing blow, not head-on.
The impact melted both worlds. Theia was destroyed. Its iron core sank into Earth's core (making Earth magnetic).
However, the lighter rock from Theia's mantle and Earth's crust was blasted into orbit as a ring of molten debris. [B]

Over a few million years, this debris ring clumped together to form the Moon.

**Evidence:**
1.  **Composition:** Moon rocks are nearly identical to Earth's mantle chemical signature (Oxygen isotopes). [C] They are twins.
2.  **Dryness:** Moon rocks are bone-dry. The heat of the impact boiled off all the water and volatiles.
3.  **Small Core:** Because the Moon formed from the *crust/mantle* debris (not the core), it is mostly rock, with very little iron.

It was a lucky cataclysm. [D] Without the Moon stabilizing Earth's tilt, our seasons would be chaotic, and life might never have evolved.
    `.trim(),
        questions: [
            {
                id: "batch12_topic10_moon_formation_Q1",
                question: "What evidence most strongly supports the 'Giant Impact Hypothesis' for the Moon's origin?",
                options: [
                    "The Moon is made of cheese.",
                    "Moon rocks have a chemical signature (Oxygen isotopes) identical to Earth's mantle, suggesting they came from the same source.",
                    "The Moon is perfectly round.",
                    "Historical records."
                ],
                correctAnswer: "B",
                explanation: "The passage lists: 'Evidence... Moon rocks are nearly identical to Earth's mantle chemical signature... They are twins.'"
            }
        ]
    },
    {
        id: "batch12_topic11_caste_system",
        taskType: "academic",
        title: "The Caste System: Religious Hierarchy in India",
        passage: `
**Rhetorical Structure:** Definition/Structure
**Dominant TOEFL Skill:** Vocabulary in Context

The *Caste System* is a social hierarchy that structured Indian society for 3,000 years. It is often misunderstood as just "class," but it is deeply religious, rooted in Hindu concepts of *Karma* (action) and *Dharma* (duty).

The system divides society into four main *Varnas* (Colors/Categories):
1.  **Brahmins:** Priests and teachers. (The Head).
2.  **Kshatriyas:** Warriors and rulers. (The Arms).
3.  **Vaishyas:** Merchants and farmers. (The Thighs).
4.  **Shudras:** Laborers and servants. (The Feet). [A]

Below these are the *Dalits* ("Untouchables"), who did the polluting work (cleaning toilets, handling dead bodies). They were outside the system.

One is born into a caste. [B] You cannot change it in this life. It dictates who you marry (endogamy), what you eat, and what job you do.
The justification is Reincarnation. If you are born a Shudra, it is because of bad Karma in a past life. If you follow your Dharma (duty) well in this life, you might be born a Brahmin in the next. This made the system incredibly stable; rebelling against your station was rebelling against the universe.

The British colonialists solidified and codified the system for administrative convenience. [C]
After Independence (1947), the Indian Constitution formally abolished "Untouchability" and set up affirmative action (Reservations) for lower castes.

However, caste remains a potent social force, especially in rural areas and in politics ("Vote Bank" politics). [D] While the economic lines are blurring (a Dalit can be a billionaire), the social lines (marriage) remain rigid.
    `.trim(),
        questions: [
            {
                id: "batch12_topic11_caste_system_Q1",
                question: "What religious concept justified the rigidity of the Indian Caste System?",
                options: [
                    "Forgiveness.",
                    "Reincarnation and Karma; one's caste is determined by actions in a past life.",
                    "Charity.",
                    "Meditation."
                ],
                correctAnswer: "B",
                explanation: "The text states: 'The justification is Reincarnation... If you are born a Shudra, it is because of bad Karma in a past life.'"
            }
        ]
    },
    {
        id: "batch12_topic12_gothic_revival",
        taskType: "academic",
        title: "Gothic Revival: The Architecture of Moral Tradition",
        passage: `
**Rhetorical Structure:** Context/Symbolism
**Dominant TOEFL Skill:** Rhetorical Purpose

In the 19th century, architecture went back in time. After the rationality and symmetry of the Neoclassical style (think White House, Greek columns), the Victorians fell in love with *Gothic Revival*. They started building pointed arches, gargoyles, and stained glass again. Why? It was a reaction against the Industrial Revolution.

Thinkers like John Ruskin and Augustus Pugin hated the factory age. They saw it as ugly, dirty, and soulless. [A] They idealized the Middle Ages as a time of faith, community, and craftsmanship.
To them, Greek (Classical) architecture was "Pagan." Gothic was "Christian."

When the British Houses of Parliament burned down in 1834, the government held a competition. They stipulated the new design must be "Gothic or Elizabethan." [B] They chose Charles Barry and Pugin's Gothic design (Big Ben).
This was a national statement. It said: "Britain is an ancient, organic, Christian monarchy," distinct from the republican, revolutionary, Classical style of America or France.

The style spread to universities (Yale, Princeton, Oxford). [C] The "Collegiate Gothic" style was meant to make new colleges look old and wise instantly.

Gothic Revival was romantic. [D] It valued asymmetry, height, and mystery over logic. It was an attempt to use stone to anchor a rapidly changing modern world to a fantasized, stable past.
    `.trim(),
        questions: [
            {
                id: "batch12_topic12_gothic_revival_Q1",
                question: "Why did the Victorian British favor 'Gothic Revival' architecture for the new Houses of Parliament?",
                options: [
                    "It was cheaper.",
                    "It was a reaction against the Industrial Revolution, symbolizing a return to the moral and Christian values of the Middle Ages.",
                    "They liked ghosts.",
                    "They ran out of bricks."
                ],
                correctAnswer: "B",
                explanation: "The passage explains: 'Thinkers... hated the factory age... They idealized the Middle Ages as a time of faith... Gothic was \"Christian\".'"
            }
        ]
    },
    {
        id: "batch12_topic13_meiji_restoration",
        taskType: "academic",
        title: "The Meiji Restoration: Japan’s Rapid Modernization",
        passage: `
**Rhetorical Structure:** Problem-Solution/Change
**Dominant TOEFL Skill:** Negative Factual Information

In 1853, U.S. Commodore Matthew Perry sailed his "Black Ships" into Tokyo Bay and demanded Japan open to trade. Japan, ruled by the Shogun and the Samurai, had been isolated for 250 years. They had no navy. They realized they were defenseless against Western technology.

This crisis led to the *Meiji Restoration* of 1868. [A]
A group of young samurai overthrew the Shogun and "restored" power to the Emperor (Meiji). But their goal wasn't to go back; it was to modernize fast. Their slogan: "Rich Country, Strong Army."

They systematically copied the West to survive the West.
*   They copied the British Navy.
*   They copied the German Army and Constitution.
*   They copied the American education system.
*   They copied the French police.

They abolished the Samurai class. [B] They banned the topknot sword. They instituted conscription (a peasant army).

They industrialized at breakneck speed. The government built factories (silk, steel, shipyards) and then sold them to private powerful families (*Zaibatsu* like Mitsubishi). [C]

Within 40 years, Japan went from a medieval feudal state to a Great Power.
In 1905, Japan shocked the world by defeating Russia in the Russo-Japanese War. [D] It was the first time an Asian nation had defeated a European power in modern war. The Meiji Restoration remains the most successful example of state-directed modernization in history.
    `.trim(),
        questions: [
            {
                id: "batch12_topic13_meiji_restoration_Q1",
                question: "What was the primary strategy of the Meiji Restoration leaders in Japan?",
                options: [
                    "To isolate Japan forever.",
                    "To return to traditional Samurai ways.",
                    "To rapidly modernize by copying Western technology and institutions to strengthen the nation.",
                    "To surrender to the US."
                ],
                correctAnswer: "C",
                explanation: "The text states: 'But their goal wasn't to go back; it was to modernize fast... They systematically copied the West to survive the West.'"
            }
        ]
    },
    {
        id: "batch12_topic14_ac_vs_dc",
        taskType: "academic",
        title: "The War of the Currents: AC vs. DC",
        passage: `
**Rhetorical Structure:** Conflict/Comparison
**Dominant TOEFL Skill:** Inference

In the late 1880s, a commercial battle raged over how to electrify the world.
Thomas Edison championed **Direct Current (DC)**.
Nikola Tesla and George Westinghouse championed **Alternating Current (AC)**.

**Direct Current (DC):** Electrons flow in one direction (like water in a hose). [A]
*Pro:* It works well for motors and lights.
*Con:* It cannot travel far. Due to resistance in the wires, voltage drops over distance. Edison implied power stations every 2 miles. It was a local solution.

**Alternating Current (AC):** Electrons wiggle back and forth. They don't actually "travel" far; they just push energy down the line.
*Pro:* You can use a *Transformer* to step up the voltage to massive levels (e.g., 100,000 Volts). High voltage travels hundreds of miles with very little loss. Then you step it down to safe levels at the house. [B]
*Con:* It was considered dangerous (high voltage risks).

Edison played dirty. To prove AC was deadly, he publicly electrocuted animals (cats, dogs, and Topsy the elephant) using AC. He even lobbied for the Electric Chair to use AC, calling it "being Westinghoused." [C]

Edison lost. The physics favored AC. The ability to transmit power from Niagara Falls to New York City (long distance) was the killer app. [D] Today, our grid is AC. However, DC is making a comeback in our pockets—phones, laptops, and LEDs all run on DC (using batteries), requiring the "brick" on your charger to convert the wall's AC back to DC.
    `.trim(),
        questions: [
            {
                id: "batch12_topic14_ac_vs_dc_Q1",
                question: "Why did Alternating Current (AC) eventually win the 'War of the Currents' against Direct Current (DC)?",
                options: [
                    "It was safer.",
                    "It could be transformed to high voltages for efficient long-distance transmission.",
                    "Edison liked it.",
                    "It was invented by American companies."
                ],
                correctAnswer: "B",
                explanation: "The passage notes: 'AC... You can use a *Transformer* to step up the voltage... High voltage travels hundreds of miles... The ability to transmit power... was the killer app.'"
            }
        ]
    },
    {
        id: "batch12_topic15_enzymes",
        taskType: "academic",
        title: "Enzymes: Biological Catalysts and the Lock-and-Key Model",
        passage: `
**Rhetorical Structure:** Definition/Analogy
**Dominant TOEFL Skill:** Factual Information

Life is a chemical fire, but it burns at 37°C. Normally, chemical reactions require heat to get started (Activation Energy). You have to light the match. If the body used heat to start reactions, we would cook ourselves. Instead, we use *Enzymes*.

An enzyme is a protein catalyst. [A] It speeds up a reaction (by millions of times) without being consumed by it. It lowers the activation energy.

How? The classic explanation is the *Lock and Key Model*.
The enzyme has a specific shape, like a lock.
The molecule it works on (the Substrate) has a shape like a key.
Only the specific key fits the specific lock. [B]
Example: Lactase is the enzyme (lock). Lactose (milk sugar) is the substrate (key). If you have the enzyme, it grabs the sugar and snaps it in two (digestion).
If you lack the enzyme shape (Lactose Intolerance), the key doesn't fit, and the sugar isn't digested.

A more modern update is the "Induced Fit Model." [C] The enzyme is like a glove; when the hand (substrate) enters, the glove hugs it tighter to facilitate the reaction.

Enzymes are sensitive. [D] If you get a high fever (high temperature) or change the pH, the protein unravels (*denatures*). The shape of the lock melts. The key no longer fits. This is why high fevers are deadly—your chemical machinery literally warp and stop working.
    `.trim(),
        questions: [
            {
                id: "batch12_topic15_enzymes_Q1",
                question: "How do enzymes function as biological catalysts?",
                options: [
                    "They add heat to the body.",
                    "They lower the 'Activation Energy' required for a reaction to start, often fitting specific molecules like a lock and key.",
                    "They slow down reactions.",
                    "They eat the chemicals."
                ],
                correctAnswer: "B",
                explanation: "The text explains: 'It speeds up a reaction... It lowers the activation energy... The enzyme has a specific shape, like a lock.'"
            }
        ]
    },
    {
        id: "batch12_topic16_abstract_expressionism",
        taskType: "academic",
        title: "Abstract Expressionism: Jackson Pollock and Action Painting",
        passage: `
**Rhetorical Structure:** Context/technique
**Dominant TOEFL Skill:** Rhetorical Purpose

After World War II, the center of the art world shifted from Paris to New York. A new movement emerged: *Abstract Expressionism*. It was the first specifically American art movement to achieve global dominance. Its star was Jackson Pollock.

Pollock abandoned the easel. He put the canvas on the floor. [A] He didn't use brushes to touch the canvas. He used sticks, trowels, and cans to *drip*, splash, and pour paint from above.

Critics called him "Jack the Dripper."
To the casual eye, it looked like a mess. "My kid could do that."
But Pollock was not painting an image; he was painting an *event*. [B]
This is "Action Painting." The painting is a record of the physical choreography of the artist moving around the canvas.

It was influenced by Surrealism (Automantism) and Jazz. It was improvised but controlled.
Fractal analysis of Pollock's work shows it is not random; it has consistent patterns. [C]

Why did it become famous? It matched the Cold War zeitgeist.
1.  It was "Freedom." Unlike Soviet Realism (which was propaganda), this art was wild, individualistic, and uncensored. The CIA actually covertly funded exhibitions of it to prove American cultural liberty.
2.  It was "Sublime." [D] Like the atomic bomb, it dissolved form into pure energy and chaos. It captured the anxiety of the age.
    `.trim(),
        questions: [
            {
                id: "batch12_topic16_abstract_expressionism_Q1",
                question: "What was the focus of Jackson Pollock's 'Action Painting' style?",
                options: [
                    "Capturing realistic faces.",
                    "Painting landscapes.",
                    "The physical event and choreography of painting itself, rather than the final image.",
                    "Using tiny brushes."
                ],
                correctAnswer: "C",
                explanation: "The passage notes: 'Pollock was not painting an image; he was painting an *event*... The painting is a record of the physical choreography.'"
            }
        ]
    },
    {
        id: "batch12_topic17_byzantine_justinian",
        taskType: "academic",
        title: "The Byzantine Empire: Justinian and the Hagia Sophia",
        passage: `
**Rhetorical Structure:** Narrative/Legacy
**Dominant TOEFL Skill:** Sentence Insertion

When Rome fell in 476 AD, the Roman Empire didn't end. The Eastern half, based in Constantinople (Byzantium), survived for another 1,000 years. The greatest of the Byzantine emperors was Justinian I (reigned 527-565).

Justinian had two ambitions: Restore the Empire's land and Restore the Law.

He reconquered Italy and North Africa from the barbarians, briefly reuniting the Mediterranean. [A] But his wars were expensive and exhausted the state.

His lasting legacy was legal. He commissioned the *Corpus Juris Civilis* (Code of Justinian). He took centuries of messy Roman laws and cleaned them up into a logical system. [B] This Code became the basis for "Civil Law," which is still used today in most of Europe, Latin America, and parts of Asia.

His architectural legacy is the *Hagia Sophia* (Holy Wisdom).
It was impossible. He wanted a massive dome over a square base. [C]
Engineers Isidore and Anthemius used "Pendentives" (curved triangles) to channel the weight of the circular dome onto four massive square piers.
The result was a dome that seemed to "hang by a golden chain from heaven."

The interior was filled with gold mosaics. It was designed to overwhelm the viewer with divine light. [D] When the Ottomans conquered the city in 1453 turning it into a mosque, even they were too impressed to destroy it, using it as the model for the Blue Mosque.
    `.trim(),
        questions: [
            {
                id: "batch12_topic17_byzantine_justinian_Q1",
                question: "What architectural innovation allowed the Hagia Sophia to have a massive round dome over a square base?",
                options: [
                    "Steel beams.",
                    "Pendentives (curved triangles) that channel the weight onto piers.",
                    "Magic.",
                    "Wooden poles."
                ],
                correctAnswer: "B",
                explanation: "The text states: 'Engineers... used \"Pendentives\" (curved triangles) to channel the weight of the circular dome onto four massive square piers.'"
            }
        ]
    },
    {
        id: "batch12_topic18_cultural_lag",
        taskType: "academic",
        title: "Sociology: Ogburn's Theory of Cultural Lag",
        passage: `
**Rhetorical Structure:** Theory/Example
**Dominant TOEFL Skill:** Prose Summary

Technology moves fast. Culture moves slow. This gap creates social problems. In 1922, sociologist William Ogburn coined the term *Cultural Lag*.

Ogburn divided culture into two parts:
1.  **Material Culture:** Things, technology, factories, gadgets.
2.  **Non-Material Culture:** Values, laws, customs, religion.

Ogburn argued that Material Culture usually changes *first*. [A]
Non-Material Culture struggles to catch up. The period of maladjustment is the "Lag."

Example 1: The Industrial Revolution.
Material: Factories were built (1800s). Dangerous machines.
Non-Material: Laws regarding child labor and workmen's compensation didn't exist yet. The law (culture) assumed a farm economy. It took decades for the laws (unions, safety regulations) to "catch up" to the machine. [B]

Example 2: The Internet (Modern).
Material: We have smartphones and social media.
Non-Material: We don't have settled etiquette or laws about cyber-bullying, privacy, or "sexting." We are using space-age tools with stone-age rules. [C]

Ogburn was a technological determinist. He believed technology is the primary driver of social change. [D] The friction of history is the sound of our values dragging behind our inventions.
    `.trim(),
        questions: [
            {
                id: "batch12_topic18_cultural_lag_Q1",
                question: "What is the core concept of Ogburn's 'Cultural Lag' theory?",
                options: [
                    "Culture changes faster than technology.",
                    "Material culture (technology) changes faster than Non-Material culture (laws/values), causing social friction.",
                    "Society never changes.",
                    "Fashion lags behind industry."
                ],
                correctAnswer: "B",
                explanation: "The passage explains: 'Material Culture usually changes *first*. Non-Material Culture struggles to catch up. The period of maladjustment is the \"Lag\".'"
            }
        ]
    },
    {
        id: "batch12_topic19_stealth_tech",
        taskType: "academic",
        title: "The Engineering of Stealth: Controlling Radar Cross Section",
        passage: `
**Rhetorical Structure:** Mechanism/Design
**Dominant TOEFL Skill:** Factual Information

In modern aerial warfare, being invisible is better than being fast. *Stealth Technology* aims to make an aircraft invisible to Radar. It doesn't mean the plane is transparent to the eye; it means it has a tiny *Radar Cross Section* (RCS). The F-117 Nighthawk is the size of a house but looks like a marble to a radar operator.

Radar works by sending out a radio ping. If the ping hits an object and bounces back, you see a blip. Stealth relies on two principles: Deflection and Absorption.

**1. Deflection (Shape):**
Standard planes are round (aerodynamic). [A] Round shapes scatter radar waves in all directions, including back to the sender.
Stealth planes are faceted (flat, angular plates) or curved in specific mathematical shapes.
When a radar wave hits a flat, angled panel, it bounces off *away* from the sender. Like a mirror tilted at an angle, the reflection doesn't go back to the flashlight.
This forces the plane to be aerodynamically unstable (requiring computers to fly), but invisible. [B]

**2. Absorption (Material):**
The skin of the plane is coated in Radar Absorbent Material (RAM). [C]
This material (often containing iron balls) traps the radio wave and converts its energy into heat. It acts like a black hole for radar.

Stealth is an arms race. New "low-frequency" radars can detect stealth shapes. [D] But for now, the ability to strike without warning (as seen in the Gulf War) remains the premium asset of air superiority.
    `.trim(),
        questions: [
            {
                id: "batch12_topic19_stealth_tech_Q1",
                question: "How does the principle of 'Deflection' work in stealth aircraft design?",
                options: [
                    "The plane absorbs the radar.",
                    "The plane flies faster than radar.",
                    "Flat, angled surfaces bounce radar waves away from the sender instead of back to them.",
                    "The plane is transparent."
                ],
                correctAnswer: "C",
                explanation: "The text notes: 'When a radar wave hits a flat, angled panel, it bounces off *away* from the sender... reflection doesn't go back.'"
            }
        ]
    },
    {
        id: "batch12_topic20_rna_world",
        taskType: "academic",
        title: "Origin of Life: The RNA World Hypothesis",
        passage: `
**Rhetorical Structure:** Problem-Solution/Hypothesis
**Dominant TOEFL Skill:** Inference

The "Chicken and Egg" problem of molecular biology is this:
*   DNA holds the instructions to make Proteins.
*   But Proteins (enzymes) are needed to read DNA and make more DNA.
*   Which came first? The Code (DNA) or the Machine (Protein)?

If you need DNA to make Protein, and Protein to make DNA, life couldn't start.

The solution is the *RNA World Hypothesis*.
RNA is similar to DNA, but single-stranded.
In the 1980s, scientists discovered that RNA can do *both* jobs.
1.  **Storage:** RNA can store genetic information (like DNA).
2.  **Catalyst:** RNA can fold into shapes and act like an enzyme (called a *Ribozyme*). [A]

Therefore, early life didn't need DNA or Proteins. It was just RNA.
RNA molecules floated in the primordial soup. They copied themselves (acting as their own reproductive machine). [B]

Over millions of years, RNA "invented" Proteins to be better machines (more stable).
Then it "invented" DNA to be better storage (double-stranded is safer).
RNA stepped back to become the middle-man (mRNA) between the two. [C]

Evidence? The Ribosome—the most ancient machine in all cells that builds proteins—is made of RNA. [D] At the heart of every cell in your body, the boss is still an RNA molecule, a fossil from the dawn of life.
    `.trim(),
        questions: [
            {
                id: "batch12_topic20_rna_world_Q1",
                question: "According to the 'RNA World Hypothesis,' why was RNA likely the first molecule of life?",
                options: [
                    "It is blue.",
                    "It can do both jobs: store genetic information (like DNA) and act as a catalyst (like Protein).",
                    "It is found in space.",
                    "It is indestructible."
                ],
                correctAnswer: "B",
                explanation: "The passage states: 'RNA can do *both* jobs... Storage... and Catalyst... Therefore, early life didn't need DNA or Proteins. It was just RNA.'"
            }
        ]
    }
];
