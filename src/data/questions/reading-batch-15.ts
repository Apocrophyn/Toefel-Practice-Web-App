
import { AcademicQuestion } from "./reading-2026";

export const batch15Passages: AcademicQuestion[] = [
    {
        id: "batch15_topic1_photoelectric_effect",
        taskType: "academic",
        title: "Einstein's Nobel: The Photoelectric Effect",
        passage: `
**Rhetorical Structure:** Problem-Solution/Paradigm Shift
**Dominant TOEFL Skill:** Inference

Albert Einstein is famous for Relativity ($E=mc^2$), but he won his Nobel Prize for the *Photoelectric Effect* (1905). This discovery proved Quantum Mechanics.

The setup: Shine a light on a metal plate. Electrons pop off. This creates a current.
Classic Wave Theory Prediction:
*   Make the light *brighter* (more intensity) -> Electrons should pop off faster (more energy).
*   The *color* (frequency) shouldn't matter.

The Reality:
*   Red light (low frequency): No electrons popped off. Even if the light was blindingly bright. Nothing. [A]
*   Blue light (high frequency): Electrons popped off instantly. Even if the light was dim.

This broke physics.
Einstein's Solution: Light is not a continuous wave. It is a stream of particles (*Photons*).
Each photon carries a specific packet of energy determined by its frequency ($E=hf$). [B]

*   Red photons are "weak" bullets. They bounce off the electron. Even a million weak bullets won't dislodge it.
*   Blue photons are "strong" bullets. One single hit knocks the electron loose. [C]

This proved that energy is *quantized*. It comes in chunks.
This discovery is the basis for solar panels (photovoltaics). [D] Sunlight hits the silicon, knocks electrons loose, and they flow into your house as electricity.
    `.trim(),
        questions: [
            {
                id: "batch15_topic1_photoelectric_effect_Q1",
                question: "How did Einstein's explanation of the Photoelectric Effect challenge the classical Wave Theory of light?",
                options: [
                    "It showed light moves slower than sound.",
                    "It proved that the energy of light depends on its frequency (color) rather than its intensity (brightness), implying light is made of particles.",
                    "It proved light is a liquid.",
                    "It showed red light is stronger than blue light."
                ],
                correctAnswer: "B",
                explanation: "The passage notes: 'Classic Wave Theory Prediction: Make the light *brighter*... The Reality: Red light (low frequency): No electrons popped off... This proved that energy is *quantized*.'"
            }
        ]
    },
    {
        id: "batch15_topic2_cuban_missile_crisis",
        taskType: "academic",
        title: "The Cuban Missile Crisis: Thirteen Days in October",
        passage: `
**Rhetorical Structure:** Chronology/Diplomacy
**Dominant TOEFL Skill:** Factual Information

In October 1962, the world stood closer to nuclear war than at any other moment in history. U-2 spy planes discovered Soviet nuclear missiles being built in Cuba, 90 miles from Florida. They could hit Washington DC in 20 minutes.

President Kennedy (JFK) had two bad options.
1.  Airstrike/Invasion: The military (Generals LeMay) wanted to bomb the sites. We now know this would have triggered WWIII; the Soviets already had tactical nukes on the beach ready to fire. [A]
2.  Do Nothing: Show weakness.

JFK chose a middle path: A *Blockade* (he called it a "Quarantine" because a blockade is an act of war). The US Navy ringed the island to stop Soviet ships.

The crisis peaked on Oct 27 ("Black Saturday"). A U-2 was shot down. A Soviet submarine (B-59) was depth-charged by the US Navy. The captain ordered a nuclear torpedo launch. [B] He was vetoed by his second-in-command, Vasili Arkhipov. One man saved the world.

The resolution was a secret deal.
Publicly: Khrushchev agreed to remove missiles from Cuba if the US promised not to invade Cuba. [C]
Privately: JFK agreed to remove US Jupiter missiles from Turkey (on the Soviet border) 6 months later.

Both sides claimed victory.
The crisis led to the "Red Phone" hotline between DC and Moscow and the first Nuclear Test Ban Treaty (1963). [D] It taught leaders that in the nuclear age, you must give your enemy a face-saving way out.
    `.trim(),
        questions: [
            {
                id: "batch15_topic2_cuban_missile_crisis_Q1",
                question: "What was the secret component of the agreement that resolved the Cuban Missile Crisis?",
                options: [
                    "The US paid the Soviets money.",
                    "The US agreed to remove its Jupiter missiles from Turkey 6 months later.",
                    "Cuba became a US state.",
                    "Khrushchev resigned."
                ],
                correctAnswer: "B",
                explanation: "The text states: 'Privately: JFK agreed to remove US Jupiter missiles from Turkey (on the Soviet border) 6 months later.'"
            }
        ]
    },
    {
        id: "batch15_topic3_pheromones",
        taskType: "academic",
        title: "Chemical Communication: Pheromones in Social Insects",
        passage: `
**Rhetorical Structure:** Classification/Mechanism
**Dominant TOEFL Skill:** Sentence Insertion

Ants and bees don't talk, but they are never silent. They speak in smells. *Pheromones* are chemicals released by an animal that change the behavior of other members of the same species.

There are different "words" in this chemical language:
1.  **Trail Pheromones:** An ant finds sugar. On the way home, it presses its abdomen to the ground, leaving a scent trail. Other ants follow it. [A] As more ants use the path, they add more scent, making the highway stronger. If the food runs out, they stop marking, and the trail evaporates.
2.  **Alarm Pheromones:** If you crush a bee, it releases a smell like bananas (Isoamyl acetate). This triggers a "rage response" in other bees. They swarm the area to attack. [B]
3.  **Primer Pheromones:** These cause long-term physiological changes. The Queen Bee releases "Queen Substance." If the workers lick it, it suppresses their ovaries so they can't lay eggs. [C] It forces them to remain sterile workers. If the Queen dies, the substance disappears, and the workers start laying eggs or raising a new queen.

Humans? We have lost most of our smell brain (olfactory bulb). While some studies suggest we can smell fear or ovulation, our chemical communication is vestigial compared to the symphony of odors that rules the insect world. [D]
    `.trim(),
        questions: [
            {
                id: "batch15_topic3_pheromones_Q1",
                question: "What is the function of 'Primer Pheromones' in a beehive?",
                options: [
                    "To tell bees where flowers are.",
                    "To cause long-term physiological changes, such as suppressing the ovaries of worker bees so they cannot lay eggs.",
                    "To warn of danger.",
                    "To kill enemies."
                ],
                correctAnswer: "B",
                explanation: "The passage explains: 'Primer Pheromones: These cause long-term physiological changes... it suppresses their ovaries so they can't lay eggs.'"
            }
        ]
    },
    {
        id: "batch15_topic4_dystopian",
        taskType: "academic",
        title: "Dystopian Literature: Orwell vs. Huxley",
        passage: `
**Rhetorical Structure:** Comparison/Contrast
**Dominant TOEFL Skill:** Prose Summary

The 20th century produced two definitive visions of the nightmare future: George Orwell’s *1984* and Aldous Huxley’s *Brave New World*. Both fear the loss of freedom, but they fear different methods of control.

**Orwell (1949)** feared pain.
In *1984*, the state (Big Brother) controls people through fear, torture, and surveillance (Telescreens).
Information is banned. Books are burned.
The boot stamping on a human face forever. [A]
It is a prison.

**Huxley (1932)** feared pleasure.
In *Brave New World*, the state controls people through distraction and drug-induced happiness (*Soma*).
Information is not banned; it is swamped by a flood of irrelevance (trivia, porn, gossip).
People don't read books because they are too busy watching "Feelies" (sensory movies). [B]
It is a pleasure cruise where no one wants to escape.

Postman (in *Amusing Ourselves to Death*) argued Huxley was right.
The Soviet Union was Orwellian. But the modern West is Huxleyan. [C]
We were not conquered by a dictator; we were sedated by our entertainment. We learned to love our oppression because it came in HD with surround sound. [D]
    `.trim(),
        questions: [
            {
                id: "batch15_topic4_dystopian_Q1",
                question: "How does the method of control in Huxley's 'Brave New World' differ from Orwell's '1984'?",
                options: [
                    "Orwell feared too much freedom.",
                    "Huxley feared control through pleasure and distraction, whereas Orwell feared control through pain and fear.",
                    "Huxley wanted to ban books.",
                    "Orwell used drugs."
                ],
                correctAnswer: "B",
                explanation: "The text contrasts them: 'Orwell... feared pain... Huxley... feared pleasure... the state controls people through distraction and drug-induced happiness.'"
            }
        ]
    },
    {
        id: "batch15_topic5_outsourcing",
        taskType: "academic",
        title: "Economics: Outsourcing and Comparative Advantage",
        passage: `
**Rhetorical Structure:** Theory/Application
**Dominant TOEFL Skill:** Negative Factual Information

In the 1990s, "Outsourcing" became a buzzword. Companies moved factories from the US to China or call centers to India. This is driven by David Ricardo's theory of *Comparative Advantage* (1817).

Ricardo argued that even if Country A is better at making *everything* than Country B, they should still trade.
Example: The US is better at writing Software and sewing T-shirts than Vietnam.
But the US is *way* better at Software (value \$100/hr) than T-shirts (value \$5/hr).
Therefore, the US should stop making shirts and focus entirely on software. It should let Vietnam make the shirts. [A]
The US "sacrifices" the shirt industry to maximize its software profits.

Benefits:
Global efficiency involves cheaper goods. A T-shirt costs \$5 at Walmart instead of \$20. This raises the standard of living for poor shoppers. [B]
It brings jobs to developing nations, lifting millions out of poverty (e.g., China's rise).

Costs:
It creates "Rust Belts." The US factory workers lose their jobs. Theory says they should "retrain" to be software engineers, but in reality, a 50-year-old mill worker cannot easily switch. [C]
It creates dependency and supply chain fragility. If a pandemic hits and borders close, you realize you can't make your own masks or chips. [D]
    `.trim(),
        questions: [
            {
                id: "batch15_topic5_outsourcing_Q1",
                question: "Based on Ricardo's theory of Comparative Advantage, why should the US outsource T-shirt manufacturing even if it is better at making them?",
                options: [
                    "Because T-shirts are hard to make.",
                    "To focus its resources on higher-value industries (like software) where its advantage is even greater.",
                    "Because Americans hate T-shirts.",
                    "Because shipping is free."
                ],
                correctAnswer: "B",
                explanation: "The passage argues: 'The US \"sacrifices\" the shirt industry to maximize its software profits... even if Country A is better at making *everything*... they should still trade.'"
            }
        ]
    },
    {
        id: "batch15_topic6_burgess_shale",
        taskType: "academic",
        title: "The Burgess Shale and the Cambrian Explosion",
        passage: `
**Rhetorical Structure:** Discovery/Evolution
**Dominant TOEFL Skill:** Inference

For 3 billion years, life on Earth was microscopic (bacteria/algae). Then, 540 million years ago, in a flash, all major animal body plans appeared. This is the *Cambrian Explosion*. The evidence comes from a fossil site in Canada: the *Burgess Shale*.

Discovered by Charles Walcott in 1909, the shale is unique because it captured *soft-bodied* animals. [A]
Usually, only bones and shells fossilize. But here, mudslides buried marine creatures instantly in oxygen-free mud, preserving eyes, guts, and tentacles.

The creatures are alien nightmares.
*   *Opabinia:* Had 5 eyes and a vacuum-cleaner nozzle.
*   *Hallucigenia:* Walked on spikes (though later we realized we held it upside down).
*   *Anomalocaris:* A giant shrimp-predator.

Stephen Jay Gould (in *Wonderful Life*) argued this shows the role of "Contingency" (Luck). [B]
The Burgess Shale shows dozens of body plans. Only a few survived to become modern Phylums (e.g., *Pikaia*, a tiny worm, is the ancestor of all Vertebrates/Chordates).
If you rewound the tape of life and played it again, *Pikaia* might die, and humans would never exist. [C] We might be intelligent descendents of the 5-eyed Opabinia.

Other scientists disagree, arguing that "Convergent Evolution" means intelligence would evolve regardless of the body shape. [D] But the Shale proves that nature's initial experiment was far wilder than the stable world we see today.
    `.trim(),
        questions: [
            {
                id: "batch15_topic6_burgess_shale_Q1",
                question: "Why is the Burgess Shale fossil site considered so unique and important?",
                options: [
                    "It contains dinosaur bones.",
                    "It preserved soft-bodied animals (eyes, guts) that usually decay, revealing the diversity of the Cambrian Explosion.",
                    "It is in Canada.",
                    "It proved humans lived with dinosaurs."
                ],
                correctAnswer: "B",
                explanation: "The text states: 'the shale is unique because it captured *soft-bodied* animals... preserving eyes, guts, and tentacles.'"
            }
        ]
    },
    {
        id: "batch15_topic7_radioactivity_halflife",
        taskType: "academic",
        title: "Radioactivity and Radiometric Dating",
        passage: `
**Rhetorical Structure:** Mechanism/Application
**Dominant TOEFL Skill:** Factual Information

Some atoms are unstable. Their nuclei are too crowded with protons and neutrons. To get comfortable, they vomit out particles. This is *Radioactivity*. The rate at which they do this is constant and predicts time famously.

We measure this using *Half-Life*.
Half-life is the time it takes for 50% of the sample to decay. [A]
It is a statistical probability. We don't know *which* atom will pop, but we know clearly that in 1 hour, half will be gone.

Example: Carbon-14 (Half-life: 5,730 years).
Living things take in C-14 from the air (plants) or food.
When you die, you stop eating. Your C-14 supply is locked.
It starts to decay into Nitrogen.
*   in 5,730 years: You have 50% left.
*   in 11,460 years: You have 25% left. [B]
*   in 17,000 years: You have 12.5% left.

By measuring the ratio of C-14 to C-12 in a bone, we know when the animal died.

Limit: After 50,000 years, there isn't enough C-14 left to measure.
For older things (Dinosaurs or Earth rocks), we use Uranium-Lead dating (Half-life: 4.5 billion years). [C]
This is how we know the Earth is 4.5 billion years old. We found uranium rocks where exactly 50% had turned to lead. [D] It is the clock that never stops ticking.
    `.trim(),
        questions: [
            {
                id: "batch15_topic7_radioactivity_halflife_Q1",
                question: "What limitation does Carbon-14 dating have?",
                options: [
                    "It only works on metal.",
                    "It creates radiation.",
                    "It only works on living things and is effective only up to about 50,000 years because the C-14 eventually runs out.",
                    "It is too expensive."
                ],
                correctAnswer: "C",
                explanation: "The text notes: 'Limit: After 50,000 years, there isn't enough C-14 left to measure. For older things... we use Uranium-Lead.'"
            }
        ]
    },
    {
        id: "batch15_topic8_laser",
        taskType: "academic",
        title: "The Invention of the Laser: Light Amplification",
        passage: `
**Rhetorical Structure:** Mechanism/Acronym
**Dominant TOEFL Skill:** Vocabulary in Context

LASER stands for "Light Amplification by Stimulated Emission of Radiation." Invented in 1960 (by T.H. Maiman), it produces light unlike anything in nature.

Normal light (Lightbulb) is:
1.  **Incoherent:** Waves are out of sync (jumbled).
2.  **Polychromatic:** Many colors (white).
3.  **Divergent:** Spreads out like a cone.

Laser light is:
1.  **Coherent:** All waves march in perfect step (soldiers).
2.  **Monochromatic:** One specific color (frequency). [A]
3.  **Collimated:** A tight beam that doesn't spread.

How?
You trap atoms in a mirror tube (gain medium).
You pump energy in (flash lamp). The electrons jump to a high energy orbit (Excited State).
When one electron drops back down, it emits a photon. [B]
This photon hits a neighbor atom, stimulating it to drop and emit a *clone* photon—same direction, same color.
This chain reaction (avalanche) bounces back and forth between the mirrors, getting stronger and stronger.
One mirror is "half-silvered," allowing a tiny bit of the light to escape as the beam. [C]

Lasers are used for eye surgery (LASIK), bar code scanners, and fiber optics. [D] It was famously called "a solution looking for a problem" when invented; now it is the infrastructure of the digital world.
    `.trim(),
        questions: [
            {
                id: "batch15_topic8_laser_Q1",
                question: "What property of Laser light describes waves that march in perfect step with each other?",
                options: [
                    "Polychromatic.",
                    "Divergent.",
                    "Coherent.",
                    "Incoherent."
                ],
                correctAnswer: "C",
                explanation: "The passage lists: 'Laser light is: Coherent: All waves march in perfect step (soldiers).'"
            }
        ]
    },
    {
        id: "batch15_topic9_groupthink",
        taskType: "academic",
        title: "The Bay of Pigs and the Psychology of Groupthink",
        passage: `
**Rhetorical Structure:** Case Study/Theory
**Dominant TOEFL Skill:** Prose Summary

In 1961, the US tried to invade Cuba (Bay of Pigs) to overthrow Castro using CIA-trained exiles. It was a fiasco. The plan was flawed, the maps were wrong, and the air support failed. President JFK asked, "How could we have been so stupid?"

Psychologist Irving Janis analyzed this and coined the term *Groupthink*.
It occurs when a group of smart people makes dumb decisions because they value *Harmony* over *Accuracy*.

Symptoms of Groupthink:
1.  **Illusion of Invulnerability:** "We are the best government, we can't fail." [A]
2.  **Self-Censorship:** Dissenters keep quiet. If you think the plan is bad, you don't speak up because you don't want to look like a traitor or a downer.
3.  **Mindguards:** People who suppress negative information to protect the leader.

In the Bay of Pigs meetings, no one wanted to tell JFK "This is crazy." They reinforced each other's bad assumptions. [B]

JFK learned. During the Cuban Missile Crisis (1962), he changed the rules. [C]
*   He absented himself from meetings so people wouldn't just agree with the Boss.
*   He appointed a "Devil's Advocate" (his brother Bobby) whose specific job was to attack every plan.
*   He brought in outside experts.

This "Conflict" saved the world. It proved that good decision-making requires friction, not polite agreement. [D]
    `.trim(),
        questions: [
            {
                id: "batch15_topic9_groupthink_Q1",
                question: "According to Irving Janis, what causes 'Groupthink'?",
                options: [
                    "Low intelligence.",
                    "When a group values Harmony and agreement over Accuracy, leading to irrational decisions.",
                    "Too much conflict.",
                    "Speaking too loudly."
                ],
                correctAnswer: "B",
                explanation: "The text defines it: 'It occurs when a group of smart people makes dumb decisions because they value *Harmony* over *Accuracy*.'"
            }
        ]
    },
    {
        id: "batch15_topic10_solar_wind",
        taskType: "academic",
        title: "The Solar Wind and the Heliosphere",
        passage: `
**Rhetorical Structure:** Phenomenon/Protection
**Dominant TOEFL Skill:** Sentence Insertion

Space is not empty. It is filled with the *Solar Wind*.
The Sun is so hot that it boils off its own atmosphere. A stream of charged particles (protons/electrons) blasts out in all directions at 400 km/s.

This wind hits everything.
On Earth, our magnetic field (Magnetosphere) deflects it. [A] The particles are funneled to the poles, creating the Auroras.
On Mars, which lost its magnetic field, the solar wind stripped away the atmosphere, turning a wet planet into a dry desert.

The Solar Wind creates a giant bubble around the solar system called the *Heliosphere*. [B]
This bubble pushes back against the "Interstellar Medium" (the gas between stars).
It acts as a shield. It blocks 70% of high-energy Cosmic Rays (from exploding stars/supernovas) from entering the solar system. Without the Heliosphere, radiation levels on Earth would be dangerous.

In 2012, Voyager 1 crossed the "Heliopause"—the edge of the bubble. [C]
It measured a sudden jump in plasma density. It had left the Sun's protection and entered interstellar space.
The Sun, therefore, doesn't just give us light; it gives us a magnetic umbrella that shelters us from the radioactive rain of the galaxy. [D]
    `.trim(),
        questions: [
            {
                id: "batch15_topic10_solar_wind_Q1",
                question: "What important protective function does the Heliosphere perform for the solar system?",
                options: [
                    "It keeps the planets warm.",
                    "It acts as a shield, blocking high-energy Cosmic Rays from interstellar space.",
                    "It generates light.",
                    "It stops asteroids."
                ],
                correctAnswer: "B",
                explanation: "The passage states: 'It acts as a shield. It blocks 70% of high-energy Cosmic Rays... Without the Heliosphere, radiation levels on Earth would be dangerous.'"
            }
        ]
    },
    {
        id: "batch15_topic11_ghost_dance",
        taskType: "academic",
        title: "The Ghost Dance Movement: 1890",
        passage: `
**Rhetorical Structure:** Narrative/Tragedy
**Dominant TOEFL Skill:** Inference

By 1890, the Native American tribes of the Great Plains (Sioux/Lakota) were desperate. They were confined to reservations, starving (ration cuts), and the Buffalo were gone. In this moment of despair, a new religion swept the plains: The *Ghost Dance*.

It was started by a Paiute prophet named Wovoka. [A] He preached a syncretic messianic message (mixing Jesus with native tradition).
He claimed that if the Indians lived peacefully and performed the Ghost Dance (a circle dance), the world would be renewed.
*   The white men would disappear (or be buried under new earth).
*   The ancestors (ghosts) would return to life.
*   The Buffalo would return.

It was a peaceful revitalization movement. [B]
However, the US government and settlers panicked. They misinterpreted the dance as a war preparation. They saw hundreds of Indians dancing for days until they fainted.

The Lakota also believed in "Ghost Shirts"—garments painted with symbols they thought were bulletproof. [C]

The hysteria led the Army to try to arrest Sitting Bull (he was killed).
Then, the 7th Cavalry intercepted a band of dancers at **Wounded Knee Creek**.
A gun went off accidentally. The soldiers opened fire with Hotchkiss cannons. 300 men, women, and children were massacred.

Wounded Knee marked the end of the Indian Wars. [D] The Ghost Dance died with the dancers, proving that the US government feared Native spiritual independence as much as their military resistance.
    `.trim(),
        questions: [
            {
                id: "batch15_topic11_ghost_dance_Q1",
                question: "Why did the US government mistakenly view the Ghost Dance as a threat?",
                options: [
                    "Because it involved guns.",
                    "They misinterpreted the peaceful religious revitalization movement as a preparation for war.",
                    "Because the Indians were dancing at night.",
                    "Because it was too loud."
                ],
                correctAnswer: "B",
                explanation: "The passage notes: 'They misinterpreted the dance as a war preparation. They saw hundreds of Indians dancing for days until they fainted.'"
            }
        ]
    },
    {
        id: "batch15_topic12_neoclassicism",
        taskType: "academic",
        title: "Neoclassicism: The Architecture of Democracy",
        passage: `
**Rhetorical Structure:** Context/Symbolism
**Dominant TOEFL Skill:** Rhetorical Purpose

Why does Washington DC look like Rome? Why do banks have Greek columns? This style is *Neoclassicism*.
Rising in the mid-18th century (concurrent with the Enlightenment), it was a rejection of the frilly, decorative Rococo style of the Kings (Versailles).

Neoclassicism emphasized:
*   Symmetry.
*   Simple geometry.
*   Grandeur.
*   Columns (Doric, Ionic, Corinthian).

It was political. [A] Use of Roman/Greek forms linked the new nations (US and Revolutionary France) to the ancient democracies of Athens and the Roman Republic.
Thomas Jefferson, who designed the Virginia Capitol and Monticello, loved this style. [B] He believed buildings should educate. A courthouse looking like a Roman Temple tells the citizen: "Here lies Law and Reason, not the whim of a King."

It also implied permanence. [C] A bank built like the Parthenon says, "Your money is safe; we are as solid as history."

However, it can be oppressive. Hitler and Stalin also loved Neoclassicism (Totalitarian Architecture). [D] They liked the "Grandeur" part—making the individual feel tiny and the State feel huge. The style that was born to celebrate freedom was easily twisted to celebrate power.
    `.trim(),
        questions: [
            {
                id: "batch15_topic12_neoclassicism_Q1",
                question: "Why did early American leaders like Thomas Jefferson favor Neoclassical architecture for government buildings?",
                options: [
                    "It was cheap to build.",
                    "It allowed them to visually link the new nation to the ancient democracies of Greece and Rome, symbolizing law and reason.",
                    "It used local bricks.",
                    "It looked like British castles."
                ],
                correctAnswer: "B",
                explanation: "The text explains: 'Use of Roman/Greek forms linked the new nations... to the ancient democracies... A courthouse looking like a Roman Temple tells the citizen: \"Here lies Law and Reason.\"' "
            }
        ]
    },
    {
        id: "batch15_topic13_thirty_years_war",
        taskType: "academic",
        title: "The Thirty Years' War and the Treaty of Westphalia",
        passage: `
**Rhetorical Structure:** Cause-Effect/Change
**Dominant TOEFL Skill:** Negative Factual Information

The Thirty Years' War (1618–1648) was the deadliest religious war in European history. It started as a fight between Catholics and Protestants in the Holy Roman Empire (Germany). It killed 8 million people (20% of Germany's population).

It began with the "Defenestration of Prague" (Protestants threw Catholic officials out a window). [A]
It escalated because foreign powers intervened.
*   Spain/Austria backed the Catholics.
*   Sweden/France backed the Protestants.
(Ideally, Catholic France should have backed Catholics, but Cardinal Richelieu hated the Austrian Habsburgs more than he hated Protestants. Politics trumped Religion.) [B]

The war was brutal. Armies were mercenary swarms that looted and burned villages to pay themselves.

It ended with the **Peace of Westphalia** (1648). This treaty changed the world.
It established the principle of *National Sovereignty*.
Before: The Pope or Emperor could tell a King what to do.
After: *Cuius regio, eius religio* (Whose realm, his religion). The King decides the religion of his own state. No outside power can interfere in the internal affairs of a sovereign state. [C]

This created the "Westphalian System" of nation-states that we live in today. [D] It ended the dream of a unified Christian Europe and created the modern map of independent countries.
    `.trim(),
        questions: [
            {
                id: "batch15_topic13_thirty_years_war_Q1",
                question: "What principle established by the Treaty of Westphalia created the modern international system?",
                options: [
                    "Universal Human Rights.",
                    "National Sovereignty (Cuius regio, eius religio), meaning no outside power can interfere in a state's internal affairs.",
                    "The United Nations.",
                    "Free Trade."
                ],
                correctAnswer: "B",
                explanation: "The passage states: 'It established the principle of *National Sovereignty*... No outside power can interfere in the internal affairs of a sovereign state.'"
            }
        ]
    },
    {
        id: "batch15_topic14_fluid_dynamics",
        taskType: "academic",
        title: "Fluid Dynamics: Laminar vs. Turbulent Flow",
        passage: `
**Rhetorical Structure:** Comparison/Transition
**Dominant TOEFL Skill:** Vocabulary in Context

Fluids (liquids and gases) move in two distinct ways. The switch between them is the most difficult problem in physics.

**Laminar Flow:** [A]
Smooth, orderly, layered.
Imagine honey pouring or a slow river. The fluid moves in parallel sheets (laminae). The particles follow smooth paths (streamlines). Friction is low.
It is predictable.

**Turbulent Flow:** [B]
Chaotic, mixing, swirling.
Imagine white-water rapids or smoke rising from a cigarette (it starts straight/laminar, then twists).
The fluid creates vortices (eddies). Friction/Drag is high.
It is unpredictable.

The number that predicts the switch is the *Reynolds Number* ($Re$).
$Re = \frac{\text{Inertial Forces}}{\text{Viscous Forces}}$ (Speed vs Stickiness).
*   Low $Re$ (Slow, sticky): Laminar. (Bacteria swimming in water feel like humans swimming in syrup).
*   High $Re$ (Fast, watery): Turbulent. [C]

Engineers fight this.
*   Airplanes want Laminar flow over wings to reduce drag (fuel save).
*   Golf balls want Turbulent flow! [D] The dimples create a tiny layer of turbulence that helps the air stick to the ball longer, reducing the wake, allowing it to fly farther. Sometimes chaos is useful.
    `.trim(),
        questions: [
            {
                id: "batch15_topic14_fluid_dynamics_Q1",
                question: "According to the passage, why do golf balls have dimples?",
                options: [
                    "To look cool.",
                    "To create a layer of turbulent flow that reduces the wake and drag, allowing the ball to fly farther.",
                    "To make them lighter.",
                    "To help them float."
                ],
                correctAnswer: "B",
                explanation: "The text explains: 'The dimples create a tiny layer of turbulence that helps the air stick to the ball longer, reducing the wake, allowing it to fly farther.'"
            }
        ]
    },
    {
        id: "batch15_topic15_immune_t_b_cells",
        taskType: "academic",
        title: "Adaptive Immunity: B-Cells and T-Cells",
        passage: `
**Rhetorical Structure:** Process/Distinction
**Dominant TOEFL Skill:** Prose Summary

Your immune system has two defensive lines: Innate (Skin/Fever) and Adaptive. The Adaptive system is the sniper team. It learns and remembers specific enemies. The key players are White Blood Cells called Lymphocytes: B-Cells and T-Cells.

**B-Cells (Bone Marrow):** The Archers.
They do *Humoral Immunity* (fighting in the fluids).
Wandering B-cells find a virus. They check if it matches their specific receptor.
If yes, they turn into Plasma Cells and fire millions of *Antibodies*. [A]
Antibodies are like sticky tags. They cover the virus, neutralizing it or marking it for macrophages (eaters) to destroy. They don't kill; they tag.

**T-Cells (Thymus):** The Infantry.
They do *Cell-Mediated Immunity* (fighting inside cells).
If a virus is *hiding inside* your own cell, antibodies can't reach it.
*Killer T-Cells* (CD8) inspect your cells. If a cell shows a "virus flag" on its window (MHC), the T-Cell knows it's infected. [B]
It docks and injects poison, killing the *entire cell* to stop the virus factory.

**Helper T-Cells (CD4):** The Generals. [C]
They don't kill. They coordinate the war. They tell B-Cells to shoot and Killer T-Cells to attack.
HIV is deadly because it specifically kills the Helper T-Cells. Without the General, the Archers and Infantry stand around doing nothing, and the patient dies of a minor cold. [D]
    `.trim(),
        questions: [
            {
                id: "batch15_topic15_immune_t_b_cells_Q1",
                question: "What is the specific role of Killer T-Cells (CD8) in the immune system?",
                options: [
                    "To eat bacteria.",
                    "To inspect body cells for 'intracellular' infections (viruses hiding inside) and destroy the infected cells.",
                    "To make antibodies.",
                    "To carry oxygen."
                ],
                correctAnswer: "B",
                explanation: "The passage notes: 'Killer T-Cells (CD8) inspect your cells. If a cell shows a \"virus flag\"... It docks and injects poison, killing the *entire cell*.'"
            }
        ]
    },
    {
        id: "batch15_topic16_rococo",
        taskType: "academic",
        title: "Rococo: The Art of Pleasure",
        passage: `
**Rhetorical Structure:** Description/Reaction
**Dominant TOEFL Skill:** Reference

After the death of Louis XIV (the stern Sun King) in 1715, the French aristocracy relaxed. They wanted fun, intimacy, and romance. The style they invented is *Rococo* (from *rocaille*, shell-work).

Baroque (the previous style) was dark, heavy, dramatic, and religious.
Rococo was light, pastel, asymmetrical, and secular. [A]

The painting *The Swing* by Fragonard is the epitome.
It shows a girl on a swing in a lush garden, kicking off her shoe. A young lover hides in the bushes looking up her dress. An old bishop pushes the swing, clueless.
It is pink, fluffy, and erotic. The subject is not God or War; it is Flirtation. [B]

Interior design was key. Rooms became smaller (salons) for private conversation. Walls were covered in mirrors, gold curves, and floral patterns to dissolve the corners. [C]

Philosophers (Enlightenment) hated it. Diderot called it frivolous.
The Revolutionaries (1789) saw it as proof of the moral rot of the Aristocracy. "They are playing on swings while the peasants starve." [D]
Rococo is beautiful, but it is the art of a class that was about to be guillotined.
    `.trim(),
        questions: [
            {
                id: "batch15_topic16_rococo_Q1",
                question: "How did the Rococo art style differ from the preceding Baroque style?",
                options: [
                    "It was darker and more religious.",
                    "It was lighter, pastel-colored, asymmetrical, and focused on secular themes like pleasure and flirtation.",
                    "It was abstract.",
                    "It used only black and white."
                ],
                correctAnswer: "B",
                explanation: "The passage contrasts them: 'Baroque... was dark, heavy, dramatic, and religious. Rococo was light, pastel, asymmetrical, and secular.'"
            }
        ]
    },
    {
        id: "batch15_topic17_dust_bowl",
        taskType: "academic",
        title: "The Dust Bowl: An Ecological Catastrophe",
        passage: `
**Rhetorical Structure:** Cause-Effect/Human Error
**Dominant TOEFL Skill:** Sentence Insertion

The Dust Bowl (1930s) was the worst man-made ecological disaster in US history. It turned the Southern Plains (Oklahoma, Texas) into a wasteland. It wasn't just bad weather; it was bad farming.

**Cause 1: The Great Plow-Up.**
During WWI, wheat prices spiked. The government said "Wheat will win the war."
Farmers bought tractors and plowed up millions of acres of native Buffalo Grass. [A]
The grass had deep roots that held the soil together and retained moisture. The wheat had shallow roots.

**Cause 2: Drought.**
In 1931, the rain stopped.
Without the grass roots, the soil turned to powder.
When the wind blew, there was nothing to anchor the dirt.

**The Black Blizzards:**
Massive dust storms rolled across the plains, blocking the sun.
Static electricity in the storms was so high it shorted out cars.
People died of "Dust Pneumonia" (mud in the lungs). [B]

**The Effect:**
3.5 million people fled. The "Okies" migrated to California (as seen in *The Grapes of Wrath*), where they were treated as refugees. [C]

**The Solution:**
FDR created the Soil Conservation Service.
They taught contour plowing (to stop runoff).
They planted "Shelterbelts" (200 million trees) to break the wind. [D]
It proved that you cannot fight the biome. If you treat semi-arid grassland like wet farmland, the land will blow away.
    `.trim(),
        questions: [
            {
                id: "batch15_topic17_dust_bowl_Q1",
                question: "What agricultural practice significantly contributed to the Dust Bowl disaster?",
                options: [
                    "Planting too many trees.",
                    "The 'Great Plow-Up' of native Buffalo Grass, which destroyed the deep roots that held the soil together.",
                    "Using too much water.",
                    "Farming at night."
                ],
                correctAnswer: "B",
                explanation: "The text explains: 'Farmers bought tractors and plowed up millions of acres of native Buffalo Grass... The grass had deep roots that held the soil together.'"
            }
        ]
    },
    {
        id: "batch15_topic18_stratification_marx_weber",
        taskType: "academic",
        title: "Social Stratification: Marx vs. Weber",
        passage: `
**Rhetorical Structure:** Comparison/Theory
**Dominant TOEFL Skill:** Factual Information

Sociologists agree society is stratified (layered). But what determines your layer? The two giants of sociology, Karl Marx and Max Weber, disagreed.

**Marx (One Dimension):**
For Marx, it was all about **Economics** (Class).
You are defined by your relationship to the "Means of Production" (Factories/Land).
1.  **Bourgeoisie:** The Owners. They have capital.
2.  **Proletariat:** The Workers. They have only labor to sell. [A]
History is a binary struggle between these two. Money is the only power.

**Weber (Three Dimensions):**
Weber argued Marx was too simple. "Man does not live by bread alone."
He proposed the "Three P's":
1.  **Property (Class):** Wealth (Marx was right here).
2.  **Prestige (Status):** Social honor/respect.
    A priest or a poet might be poor (low Class) but highly respected (high Status). A drug dealer might be rich (high Class) but despised (low Status). [B]
3.  **Power (Party):** Political influence. The ability to get your way. A bureaucrat might have average pay but huge power over laws.

Weber's model explains complexity. [C] It explains why a rich lottery winner is not accepted into high society (New Money vs Old Money). It explains why a professor is middle-class but has high status. Stratification is a multidimensional puzzle. [D]
    `.trim(),
        questions: [
            {
                id: "batch15_topic18_stratification_marx_weber_Q1",
                question: "How did Max Weber's view of social stratification differ from Karl Marx's?",
                options: [
                    "Weber thought everyone was equal.",
                    "Weber argued that stratification is multidimensional (Class, Status, Power), whereas Marx focused solely on Economics (Class).",
                    "Weber ignored money.",
                    "Marx liked capitalism."
                ],
                correctAnswer: "B",
                explanation: "The passage notes: 'Weber argued Marx was too simple... He proposed the \"Three P's\": Property... Prestige... Power... Stratification is a multidimensional puzzle.'"
            }
        ]
    },
    {
        id: "batch15_topic19_pantheon_dome",
        taskType: "academic",
        title: "Engineering the Pantheon: The Unreinforced Dome",
        passage: `
**Rhetorical Structure:** Problem-Solution/Legacy
**Dominant TOEFL Skill:** Negative Factual Information

The Pantheon in Rome (built 126 AD) is nearly 2,000 years old, yet it possesses the world's largest *unreinforced* concrete dome. "Unreinforced" means no steel bars inside (rebar). Concrete is strong when you squeeze it (Compression) but weak when you stretch it (Tension). A dome naturally stretches at the bottom edge (Hoop Stress). It should crack and collapse. How does it stand?

The Romans used three tricks of physics.

1.  **Stepped Rings:** The outside of the dome is covered in heavy step-rings. These act as weights, pushing downwards to counteract the outward thrust. [A]
2.  **Lightweight Aggregate:** The concrete mix changes as you go up.
    *   Base: Heavy basalt rock.
    *   Middle: Brick.
    *   Top: Pumice (volcanic air-stone). The top is incredibly light. [B]
3.  **Coffering:** The inside ceiling has square cutouts (coffers). This reduces the thickness and weight of the dome without sacrificing structural stiffness.
4.  **The Oculus:** The hole in the center. [C]
    It is not just for light. By leaving the center open, they removed the heaviest part of the dome (the keystone). There is zero weight at the weakest point.

The result is a perfect sphere (the height equals the width). [D] Michelangelo studied it to build the St. Peter's dome, admitting his design was the "sister" of the Pantheon, but not its equal.
    `.trim(),
        questions: [
            {
                id: "batch15_topic19_pantheon_dome_Q1",
                question: "What is the structural function of the 'Oculus' (the hole in the center) of the Pantheon's dome?",
                options: [
                    "To let rain in.",
                    "To remove the heaviest part of the dome (the keystone) at its weakest point, reducing weight to zero.",
                    "To look at stars.",
                    "To improve acoustics."
                ],
                correctAnswer: "B",
                explanation: "The text states: 'By leaving the center open, they removed the heaviest part of the dome (the keystone). There is zero weight at the weakest point.'"
            }
        ]
    },
    {
        id: "batch15_topic20_altruism_kin",
        taskType: "academic",
        title: "The Evolution of Altruism: Kin Selection",
        passage: `
**Rhetorical Structure:** Theory/Paradox
**Dominant TOEFL Skill:** Inference

Darwin's theory of "Survival of the Fittest" implies selfishness. If I have food, I should eat it to survive. If I give it to you, I am less likely to survive. Yet, nature is full of *Altruism*. Bees die for the hive. Birds scream to warn the flock, attracting the hawk to themselves. Why?

In the 1960s, W.D. Hamilton proposed *Kin Selection* (Hamilton's Rule).
Evolution doesn't care about the *Individual*; it cares about the *Gene*.

I share 50% of my genes with my brother.
I share 12.5% with my cousin.
Hamilton's equation: $rB > C$.
(Relatedness x Benefit to Recipient > Cost to Actor).

If I sacrifice my life (Cost = 1) to save 3 brothers (Benefit = 3 x 0.5 = 1.5), my genes win! [A]
1.5 > 1.
The "Altruistic Gene" survives in the brothers, even if the individual body dies.

Biologist J.B.S. Haldane famously joked, "I would lay down my life for two brothers or eight cousins." [B]

This explains Eusociality (Ants/Bees).
In hives, sisters are super-related (75%). [C] It is mathematically better for a worker ant to help the Queen make more sisters than to have her own babies.
Altruism is practically selfishness at the genetic level. [D]
    `.trim(),
        questions: [
            {
                id: "batch15_topic20_altruism_kin_Q1",
                question: "According to Hamilton's Rule (Kin Selection), why does altruism exist in nature?",
                options: [
                    "Because animals are nice.",
                    "Because helping relatives (who share your genes) allows your genes to survive, even if the individual dies.",
                    "Because animals are confused.",
                    "It is a mistake."
                ],
                correctAnswer: "B",
                explanation: "The passage explains: 'Evolution... cares about the *Gene*... If I sacrifice my life... to save 3 brothers... my genes win!'"
            }
        ]
    }
];
