
import { AcademicQuestion } from "./reading-2026";

export const batch10Passages: AcademicQuestion[] = [
    {
        id: "batch10_topic1_superfluids",
        taskType: "academic",
        title: "Quantum Mechanics on a Macro Scale: Superfluidity",
        passage: `
**Rhetorical Structure:** Phenomenon/Anomaly
**Dominant TOEFL Skill:** Factual Information

We generally understand the states of matter: solid, liquid, gas. But at temperatures approaching absolute zero (0 Kelvin), matter behaves in bizarre ways. One of the strangest is the *Superfluid*. Discovered in Liquid Helium-4 cooled below 2.17 K (the "Lambda Point"), a superfluid is a fluid with zero viscosity.

Viscosity is internal friction; it's what makes honey thick and water thin. [A] A superfluid has no friction. If you stirred a cup of it, it would spin forever.

Its behavior is spooky. If you put it in an open cup, it will creep *up* the sides of the cup, flow over the rim, and drip down the outside until the cup is empty. [B] It forms a "Rollin Film" just one atom thick that defies gravity to escape its container.

It can also pass through microscopic pores that would hold back any normal liquid. This is because the atoms in the fluid have lost their individual identity. [C] They have collapsed into a single quantum state called a Bose-Einstein Condensate. They move in perfect unison.

Superfluids are also perfect heat conductors. [D] If you heat one spot, the heat instantly disperses through the whole volume. Bubbles cannot form because the heat moves too fast to vaporize the liquid locally. It is a "quantum soup" that allows physicists to see quantum mechanics—usually hidden in the subatomic world—with the naked eye.
    `.trim(),
        questions: [
            {
                id: "batch10_topic1_superfluids_Q1",
                question: "According to the passage, how does a 'Superfluid' behave when placed in an open container?",
                options: [
                    "It evaporates instantly.",
                    "It freezes into a solid.",
                    "It defies gravity, creeping up the sides and over the rim until the container is empty.",
                    "It changes color."
                ],
                correctAnswer: "C",
                explanation: "The text states: 'If you put it in an open cup, it will creep *up* the sides of the cup, flow over the rim, and drip down the outside until the cup is empty.'"
            }
        ]
    },
    {
        id: "batch10_topic2_textiles_industrial",
        taskType: "academic",
        title: "The Textile Industry: Spark of the Industrial Revolution",
        passage: `
**Rhetorical Structure:** Cause-Effect/Chronology
**Dominant TOEFL Skill:** Prose Summary

The Industrial Revolution didn't start with steam engines or iron; it started with underwear. Specifically, cotton cloth. In the 1700s, Britain wanted to compete with cheap calico fabrics from India. The bottleneck was spinning. It took 10 spinners to keep one weaver busy.

The solution was a series of inventions in the 18th century.
1.  **The Spinning Jenny (1764):** Invented by James Hargreaves, it allowed one worker to spin 8 threads at once. [A]
2.  **The Water Frame (1769):** Richard Arkwright built a machine powered by a water wheel. This was crucial because it was too big for a cottage; it required a factory. The "factory system" was born.
3.  **The Power Loom (1785):** Edmund Cartwright mechanized the weaving process.

Production exploded. The price of cotton cloth fell by 90%. [B] Suddenly, poor people could afford more than one set of clothes. Hygiene improved.

However, this hunger for cotton revitalized slavery in the American South. [C] The invention of the Cotton Gin by Eli Whitney (1793) made harvesting cotton profitable enough to feed the British machines.

The textile mills also created the urban proletariat. Peasants moved from farms to miserable city slums (Manchester) to work 14-hour days. [D] The Luddites—weavers who smashed the new machines—were not anti-technology; they were fighting for their livelihood. They were the first casualties of automation.
    `.trim(),
        questions: [
            {
                id: "batch10_topic2_textiles_industrial_Q1",
                question: "Why was Richard Arkwright's 'Water Frame' pivotal for the creation of the factory system?",
                options: [
                    "It was small enough to fit in a cottage.",
                    "It was too large and power-hungry for home use, requiring centralized factories.",
                    "It used steam power.",
                    "It broke the cotton threads."
                ],
                correctAnswer: "B",
                explanation: "The passage notes: 'This was crucial because it was too big for a cottage; it required a factory. The \"factory system\" was born.'"
            }
        ]
    },
    {
        id: "batch10_topic3_keystone_wolves",
        taskType: "academic",
        title: "Trophic Cascades: The Reintroduction of Wolves to Yellowstone",
        passage: `
**Rhetorical Structure:** Cause-Effect/Ecosystem
**Dominant TOEFL Skill:** Sequence/Ordering

A *Keystone Species* is an organism that has a disproportionately large effect on its environment relative to its abundance. The classic example is the Grey Wolf in Yellowstone National Park. Wolves were hunted to extinction there by the 1920s. For 70 years, the park had no apex predator. The result was an ecological imbalance.

Without wolves, the Elk population exploded. [A] They had no fear. They grazed lazily along the riverbanks, eating all the young willow and aspen trees. The riverbanks eroded. Beavers, which need willows for food and dams, disappeared. The landscape was degraded.

In 1995, wolves were reintroduced. The effect was a "Trophic Cascade"—a ripple effect down the food chain.

First, the wolves killed elk. But more importantly, they changed the *behavior* of the elk. [B] The "Landscape of Fear" returned. Elk avoided the valleys and riverbanks where they were vulnerable. They retreated to the high ground.

This allowed the willows and aspens to regrow along the streams. [C]
With the trees back, the beavers returned. Beaver dams created ponds, which supported fish, amphibians, and waterfowl. The roots of the trees stabilized the riverbanks, reducing erosion. The physical geography of the river changed.

Scavengers (ravens, bears) also benefitted from the wolf kills. [D] The reintroduction proved that top-down regulation is essential. You cannot remove the top brick of the pyramid without the base crumbling.
    `.trim(),
        questions: [
            {
                id: "batch10_topic3_keystone_wolves_Q1",
                question: "How did the reintroduction of wolves indirectly stabilize the riverbanks in Yellowstone?",
                options: [
                    "Wolves built dams.",
                    "Wolves ate the dirt.",
                    "By scaring elk away from riverbanks, willow trees regrew, and their roots stabilized the soil.",
                    "By chasing away beavers."
                ],
                correctAnswer: "C",
                explanation: "The text explains: 'Elk avoided the valleys... This allowed the willows... to regrow... The roots of the trees stabilized the riverbanks, reducing erosion.'"
            }
        ]
    },
    {
        id: "batch10_topic4_transcendentalism",
        taskType: "academic",
        title: "American Transcendentalism: Paradoxes of Self-Reliance",
        passage: `
**Rhetorical Structure:** Philosophy/Context
**Dominant TOEFL Skill:** Rhetorical Purpose

In the 1830s, centered in Concord, Massachusetts, a philosophical movement emerged that sought to define the American soul: *Transcendentalism*. Led by Ralph Waldo Emerson and Henry David Thoreau, it was a reaction against the rationalism of the 18th century and the rigid dogma of the Unitarian church.

They believed in the inherent goodness of people and nature. Their core tenet was that society and its institutions (religion, political parties) corrupt the purity of the individual. [A] People are at their best when they are "self-reliant" and independent.

Emerson’s essay "Self-Reliance" argued, "Whoso would be a man, must be a nonconformist." He urged Americans to stop imitating European culture and trust their own intuition—the "Oversoul" or divine spark within. [B]

Thoreau took this literally. He moved to a cabin on Walden Pond to live deliberately. [C] In *Walden*, he critiqued the industrial economy, arguing that men had become "tools of their tools." He championed civil disobedience, refusing to pay taxes to a government that supported slavery and the Mexican-American War.

The movement was full of contradictions. They were individualists who formed a tight club. They critiqued the market but were savvy publishers. [D] Yet, their legacy is the bedrock of American identity: the belief that the individual conscience is the highest authority, superior to any law or king.
    `.trim(),
        questions: [
            {
                id: "batch10_topic4_transcendentalism_Q1",
                question: "What did the Transcendentalists believe about the relationship between the individual and society?",
                options: [
                    "Society improves the individual.",
                    "Individuals should conform to social norms.",
                    "Society and institutions corrupt the purity of the individual, who should be 'self-reliant'.",
                    "Government is the highest authority."
                ],
                correctAnswer: "C",
                explanation: "The passage states: 'Their core tenet was that society and its institutions... corrupt the purity of the individual. People are at their best when they are \"self-reliant\".'"
            }
        ]
    },
    {
        id: "batch10_topic5_game_theory",
        taskType: "academic",
        title: "Game Theory and the Prisoner's Dilemma",
        passage: `
**Rhetorical Structure:** Theory/Scenario
**Dominant TOEFL Skill:** Inference

Game Theory is the mathematical study of strategic decision-making. It models conflict and cooperation. The most famous scenario is the *Prisoner's Dilemma*.

Two criminals (A and B) are arrested. The police separate them. They have enough evidence to convict both on a minor charge (1 year jail), but they need a confession for the major charge (3 years).

The offer:
*   If A betrays B (confesses) and B stays silent, A goes free (0 years) and B gets 3 years.
*   If both betray each other, both get 2 years.
*   If both stay silent (cooperate with each other), both get 1 year.

The rational choice for an individual is *always* to betray (Deject). [A]
Think about it from A’s perspective:
*   If B stays silent, I should betray (0 years is better than 1).
*   If B betrays, I *must* betray (2 years is better than 3).
*   Regardless of what B dodes, A is better off betraying.

The result? Both betray. Both get 2 years. [B]

If they had just trusted each other and stayed silent, they would have only got 1 year. The "rational" individual choice leads to a worse collective outcome. This is the Nash Equilibrium.

This explains real-world tragedies like the Arms Race (spending billions on nukes) or pollution. [C] It is cheaper for me to pollute, but if everyone pollutes, we all die. Game theorists study how to break this trap—usually through "repeated games" (reputation) or external enforcement (contracts) that changes the payoff matrix to reward cooperation. [D]
    `.trim(),
        questions: [
            {
                id: "batch10_topic5_game_theory_Q1",
                question: "In the 'Prisoner's Dilemma,' what outcome is known as the 'Nash Equilibrium'?",
                options: [
                    "Both prisoners stay silent.",
                    "One confesses and one stays silent.",
                    "Both prisoners betray each other, leading to a worse collective outcome.",
                    "The police let them both go."
                ],
                correctAnswer: "C",
                explanation: "The text explains: 'The result? Both betray... The \"rational\" individual choice leads to a worse collective outcome. This is the Nash Equilibrium.'"
            }
        ]
    },
    {
        id: "batch10_topic6_liquefaction",
        taskType: "academic",
        title: "Soil Mechanics: The Phenomenon of Liquefaction",
        passage: `
**Rhetorical Structure:** Mechanism/Effect
**Dominant TOEFL Skill:** Factual Information

We think of the ground as solid. However, during an earthquake, certain types of soil can behave like a liquid. This is *Liquefaction*. It causes buildings to sink or tip over intact, as if they were floating in quicksand.

Liquefaction occurs in loose, water-saturated sand or silt. [A] Imagine a bucket of sand filled with water. The sand grains are touching each other, supporting the weight. The water fills the gaps (pores) between them.

When the earthquake shaking starts, the ground moves back and forth rapidly. This shaking tries to compress the sand. [B] It packs the grains tighter. This squeezes the water in the pores. The water pressure shoots up.

If the pressure gets high enough, the water pushes the sand grains apart. They no longer touch. [C] Friction drops to zero. The soil loses all shear strength. It turns into a heavy slurry.

Once the shaking stops, the sand settles, and water erupts on the surface as "sand boils" or mud volcanoes. [D] This was devastating in the 1964 Niigata earthquake in Japan (where apartment blocks tipped over) and in the 2011 Christchurch earthquake. It proves that the danger of a quake is not just the shaking, but what lies beneath the foundation.
    `.trim(),
        questions: [
            {
                id: "batch10_topic6_liquefaction_Q1",
                question: "What physical process causes 'Liquefaction' of soil during an earthquake?",
                options: [
                    "The soil melts due to heat.",
                    "Shaking packs sand grains tight, increasing water pressure until grains are pushed apart and the soil acts like a liquid.",
                    "Water evaporates from the soil.",
                    "Rocks are crushed into sand."
                ],
                correctAnswer: "B",
                explanation: "The passage notes: 'This shaking tries to compress the sand... This squeezes the water... pressure gets high enough... pushes the sand grains apart. They no longer touch.'"
            }
        ]
    },
    {
        id: "batch10_topic7_acids_bases",
        taskType: "academic",
        title: "Chemical Equilibrium: Understanding the pH Scale",
        passage: `
**Rhetorical Structure:** Definition/Scale
**Dominant TOEFL Skill:** Vocabulary in Context

In chemistry, substances are often classified as Acids or Bases. The distinction relies on Hydrogen ions ($H^+$). An acid is a substance that *donates* hydrogen ions (protons). A base is a substance that *accepts* them (often by releasing Hydroxide ions, $OH^-$).

To measure this, we use the pH scale (Potential of Hydrogen). It is logarithmic. [A] A pH of 7 is neutral (pure water). A pH of 1 is a strong acid (stomach acid). A pH of 14 is a strong base (drain cleaner).

Because it is logarithmic, a change of 1 unit represents a 10-fold change in concentration. [B] Lemon juice (pH 2) is not twice as acidic as tomato juice (pH 4); it is $10 times 10$, or 100 times more acidic.

Life requires a strict pH balance. Human blood must stay between 7.35 and 7.45. [C] If it drops to 6.9, you die (acidosis). To maintain this, the body uses *Buffers*.

A buffer is a chemical sponge. It is a solution containing a weak acid and its conjugate base. If you add acid to the blood, the buffer absorbs the extra $H^+$. If you add base, it releases $H+$. [D] This equilibrium allows biological systems to withstand chemical shocks that would otherwise be fatal.
    `.trim(),
        questions: [
            {
                id: "batch10_topic7_acids_bases_Q1",
                question: "What is the function of a 'Buffer' in the human body?",
                options: [
                    "To generate heat.",
                    "To act as a chemical sponge that absorbs excess acid or base, keeping pH stable.",
                    "To digest food.",
                    "To transport oxygen."
                ],
                correctAnswer: "B",
                explanation: "The text states: 'A buffer is a chemical sponge... biological systems to withstand chemical shocks that would otherwise be fatal.'"
            }
        ]
    },
    {
        id: "batch10_topic8_telephone_invention",
        taskType: "academic",
        title: "Bell vs. Gray: The Patent Race for the Telephone",
        passage: `
**Rhetorical Structure:** Narrative/Conflict
**Dominant TOEFL Skill:** Negative Factual Information

On February 14, 1876, one of the most famous coincidences in patent history occurred. Two men, Alexander Graham Bell and Elisha Gray, filed paperwork for the invention of the telephone at the US Patent Office on the same day, within hours of each other.

Bell was a teacher of the deaf. He was trying to invent a "harmonic telegraph" to send multiple messages at once. He realized he could send the human voice. [A]

Gray was a professional electrical engineer. He had developed a similar liquid transmitter.

Bell’s lawyer arrived at the patent office first, in the morning. Gray’s lawyer arrived later. [B] Legend says Bell cut in line or paid off a clerk, but there is no proof. What is true is that Bell’s patent (No. 174,465) became the most valuable single patent in history.

The irony is that Bell hadn't actually built a working model when he filed. He filed a description. [C] Gray had a better technical design. But in patent law, "first to file" usually wins.

Bell famously made the first call ("Mr. Watson, come here!") three days *after* filing. Western Union, the giant telegraph company, initially laughed at the phone as a toy and refused to buy Bell's patent for \$100,000. [D] They later regretted this and hired Gray to build a rival network, sparking a massive legal battle that Bell eventually won.
    `.trim(),
        questions: [
            {
                id: "batch10_topic8_telephone_invention_Q1",
                question: "Why was Alexander Graham Bell awarded the telephone patent over Elisha Gray?",
                options: [
                    "Bell had a better machine.",
                    "Gray didn't want the patent.",
                    "Bell's lawyer reached the patent office first ('first to file'), even though Gray had a better design.",
                    "Bell was famous."
                ],
                correctAnswer: "C",
                explanation: "The passage notes: 'Bell’s lawyer arrived at the patent office first... But in patent law, \"first to file\" usually wins.'"
            }
        ]
    },
    {
        id: "batch10_topic9_stanford_prison",
        taskType: "academic",
        title: "The Stanford Prison Experiment: The Power of Situation",
        passage: `
**Rhetorical Structure:** Experiment/Critique
**Dominant TOEFL Skill:** Prose Summary

In 1971, Philip Zimbardo conducted the *Stanford Prison Experiment* to investigate the psychological effects of perceived power. He converted the basement of the Stanford psychology building into a mock prison. 24 male college students were screened for normality and randomly assigned to be "Guards" or "Prisoners."

The simulation was scheduled for two weeks. It lasted only six days. [A]

The "Guards" were given mirrored sunglasses and batons. They quickly became sadistic. They forced prisoners to clean toilets with their bare hands, stripped them naked, and deprived them of sleep.

The "Prisoners" were dehumanized (called by numbers). They suffered emotional breakdowns. One had to be released quickly due to uncontrollable screaming. [B]

Zimbardo argued this proved the "Power of the Situation." Good people will do evil things if placed in an evil system. [C] It wasn't their personality (they were normal students); it was the *role* they were playing.

However, modern critics argue the study was flawed. Zimbardo acted as the "Prison Warden," actively encouraging the guards to be tough ("Demand Codeing"). [D] It was theater, not science. The participants were acting out the stereotypes they had seen in movies. Despite the ethical and scientific failures, it remains a chilling demonstration of how easily human empathy can be turned off by a uniform.
    `.trim(),
        questions: [
            {
                id: "batch10_topic9_stanford_prison_Q1",
                question: "What did Philip Zimbardo conclude was the main cause of the guards' abusive behavior in his experiment?",
                options: [
                    "The guards were naturally evil people.",
                    "The prisoners provoked them.",
                    "The 'Power of the Situation' and the roles they played, not their personalities.",
                    "Lack of sleep."
                ],
                correctAnswer: "C",
                explanation: "The text explains: 'Zimbardo argued this proved the \"Power of the Situation.\"... It wasn't their personality... it was the *role* they were playing.'"
            }
        ]
    },
    {
        id: "batch10_topic10_dark_matter",
        taskType: "academic",
        title: "Galactic Rotation Curves and the Evidence for Dark Matter",
        passage: `
**Rhetorical Structure:** Phenomenon/Evidence
**Dominant TOEFL Skill:** Sentence Insertion

In the 1970s, astronomer Vera Rubin was studying the rotation of spiral galaxies. According to Newtonian physics and Kepler's laws, the outer edge of a galaxy should spin slower than the center. This is how the Solar System works: Mercury moves fast (47 km/s), while distant Neptune moves slowly (5 km/s) to stay in orbit. The further you are from the mass (the sun), the slower you go.

Rubin found that galaxies don't behave like this. [A] The stars on the outer edge were moving just as fast as the stars near the center. This "Flat Rotation Curve" was impossible.

If the visible stars and gas were the only mass, the outer stars were moving so fast they should have flown off into space. The galaxy should have torn itself apart. [B]

The only explanation was that there was *missing mass*. A huge amount of invisible matter must be surrounding the galaxy (in a halo), providing the extra gravity to hold these high-speed stars in orbit. We call this *Dark Matter*.

It is not dust or gas (which blocks light). It is some exotic particle that does not interact with light at all. [C] We only know it exists because of its gravity. Calculations suggest that Dark Matter makes up 85% of the matter in the universe. The stuff we can see—stars, planets, us—is just the foam on top of a dark ocean. [D]
    `.trim(),
        questions: [
            {
                id: "batch10_topic10_dark_matter_Q1",
                question: "What observation led Vera Rubin to propose the existence of 'Dark Matter'?",
                options: [
                    "She saw a dark cloud in space.",
                    "Stars at the outer edges of galaxies were moving as fast as those at the center, violating Kepler's laws.",
                    "The universe was shrinking.",
                    "Galaxies were colliding."
                ],
                correctAnswer: "B",
                explanation: "The passage states: 'The stars on the outer edge were moving just as fast as the stars near the center... The only explanation was that there was *missing mass*.'"
            }
        ]
    },
    {
        id: "batch10_topic11_maya_calendar",
        taskType: "academic",
        title: "The Maya Calendar System: Cyclical Time",
        passage: `
**Rhetorical Structure:** Description/Structure
**Dominant TOEFL Skill:** Factual Information

The Maya civilization of Mesoamerica developed a concept of time that was vastly more complex than the European linear model. To the Maya, time was cyclical. They used three separate calendar systems simultaneously.

First was the *Tzolkin* ("Divine Count"). [A] It consisted of 260 days, created by interlocking two gears: a cycle of 13 numbers and a cycle of 20 named days. (13 x 20 = 260). This likely related to the human gestation period (9 months). It was used for religious ceremonies.

Second was the *Haab* ("Civil Calendar"). [B] This was a solar year of 365 days. It had 18 months of 20 days, plus a scary 5-day period at the end called *Wayeb* ("The Nameless Days"), considered unlucky.

These two calendars meshed together like cogwheels. A specific date (e.g., 4 Ahau 8 Kumku) would only repeat once every 52 years. This 52-year cycle was a "Calendar Round," causing great anxiety about whether the world would continue.

Third was the *Long Count*. [C] This was a linear count of days beginning at the Maya creation date (August 11, 3114 BCE). It allowed them to record history over millions of years.

The famous "2012 apocalypse" idea came from a misunderstanding of the Long Count. On Dec 21, 2012, the "Baktun" cycle (approx 400 years) simply rolled over, like an odometer reaching 100,000. [D] The Maya didn't predict the end of the world; they predicted a new celebration.
    `.trim(),
        questions: [
            {
                id: "batch10_topic11_maya_calendar_Q1",
                question: "What is a 'Calendar Round' in the Maya time system?",
                options: [
                    "A single day.",
                    "A 52-year cycle where the Tzolkin (religious) and Haab (civil) calendars align.",
                    "The end of the world.",
                    "A month of 20 days."
                ],
                correctAnswer: "B",
                explanation: "The text explains: 'These two calendars meshed together... A specific date... would only repeat once every 52 years. This 52-year cycle was a \"Calendar Round\".'"
            }
        ]
    },
    {
        id: "batch10_topic12_colosseum",
        taskType: "academic",
        title: "Roman Engineering: Crowd Control in the Colosseum",
        passage: `
**Rhetorical Structure:** Problem-Solution/Design
**Dominant TOEFL Skill:** Inference

The Colosseum (Flavian Amphitheater), completed in 80 AD, could hold 50,000 to 80,000 spectators. The engineering challenge was not just keeping the walls up, but managing the flow of this massive crowd. A bottleneck could lead to a stampede and death. The Roman solution was the *Vomitoria*.

The stadium was designed with 80 separate entrances at ground level because it was an ellipse. [A] Each entrance was numbered. The spectator's pottery ticket (*tessera*) listed the entrance number, the section, and the row.

Once inside, a complex system of corridors and stairs separated the social classes. [B] The Senators sat near the arena (marble seats). The knights sat behind them. The plebeians (citizens) were higher up. The women and slaves were at the very top (wooden benches). The architecture physically enforced the social hierarchy; the classes never had to rub shoulders on the stairs.

The *vomitoria* were the wide passageways that spit the crowd out into the seats. [C] The name comes from the Latin *vomere* (to spew forth), not because people were sick.

This system was so efficient that the entire stadium could be filled or emptied in 15 minutes. [D] Modern stadiums still use the exact same design principles (multiple gates, section tunnels), proving that the Romans mastered the physics of human fluid dynamics.
    `.trim(),
        questions: [
            {
                id: "batch10_topic12_colosseum_Q1",
                question: "What was the purpose of the 'Vomitoria' in the Colosseum design?",
                options: [
                    "To serve food.",
                    "To provide a place for sick people.",
                    "To allow massive crowds to exit the stadium rapidly.",
                    "To hold the animals."
                ],
                correctAnswer: "C",
                explanation: "The passage notes: 'The *vomitoria* were the wide passageways that spit the crowd out... This system was so efficient that the entire stadium could be filled or emptied in 15 minutes.'"
            }
        ]
    },
    {
        id: "batch10_topic13_magna_carta",
        taskType: "academic",
        title: "The Magna Carta: The Myth and Reality of 1215",
        passage: `
**Rhetorical Structure:** Historical Context/Legacy
**Dominant TOEFL Skill:** Negative Factual Information

The *Magna Carta* (Great Charter), signed by King John of England in 1215 at Runnymede, is revered as the foundation of modern democracy and human rights. However, the document itself was never intended to be a democratic manifesto. It was a selfish peace treaty between a weak King and angry Barons.

King John was a disaster. He lost Normandy to the French and taxed the Barons heavily to pay for the wars. The Barons rebelled and captured London. They forced John to sign.

The Charter protected the rights of the *nobility*, not the common people. [A] When it says "No free man shall be seized... except by the judgment of his peers," it meant rich landowners. Most of the population were serfs (unfree), so the Charter did nothing for them.

Furthermore, it failed. [B] Pope Innocent III annulled it ten weeks later, calling it "shameful." Civil war broke out (The First Barons' War). The 1215 document was legally dead.

So why does it matter? It was re-issued by John's son (Henry III) to buy support. Over centuries, lawyers (like Edward Coke) re-interpreted it. [C] They took the "Barons' rights" and expanded them to "Everyone's rights." They turned a failed peace treaty into a symbol that *The King is not above the Law*.

This mythical version inspired the American Constitution. [D] The reality of 1215 was a feudal squabble; the legacy is the principle of Due Process.
    `.trim(),
        questions: [
            {
                id: "batch10_topic13_magna_carta_Q1",
                question: "Who were the primary beneficiaries of the Magna Carta when it was signed in 1215?",
                options: [
                    "The common peasants.",
                    "The King.",
                    "The wealthy Barons (nobility).",
                    "The church."
                ],
                correctAnswer: "C",
                explanation: "The text states: 'The Charter protected the rights of the *nobility*, not the common people... it meant rich landowners.'"
            }
        ]
    },
    {
        id: "batch10_topic14_lift_physics",
        taskType: "academic",
        title: "The Physics of Lift: Bernoulli vs. Newtons Third Law",
        passage: `
**Rhetorical Structure:** Debate/Synthesis
**Dominant TOEFL Skill:** Prose Summary

How does an airplane wing (airfoil) generate lift? This is surprisingly controversial. Textbooks often present two competing explanations: The Bernoulli Principle and Newton's Third Law. Both are correct, but often explained poorly.

The **Bernoulli Explanation** focuses on pressure. The wing is curved on top (camber). [A] The popular (and incorrect) "Equal Transit Time" theory says air must travel over the top and bottom in the same amount of time. Since the top path is longer, the air speeds up. Bernoulli's principle says fast air = low pressure. The high pressure on the bottom pushes the wing up.
*Correction:* The air on top *does* go faster, but it doesn't have to meet the bottom air. The "Equal Transit" part is a myth.

The **Newton Explanation** focuses on force. [B] The wing is angled. As it moves, it deflects air *down*. Newton's Third Law (Action/Reaction) says if the wing pushes air down, the air pushes the wing up.

Neither is complete alone. [C] The wing causes the air to turn. This turning creates a pressure difference (Bernoulli) *and* a downwash (Newton). They are two mathematical ways of describing the same physical event: the conservation of momentum.

A flat wing can fly (like a paper plane), proving you don't need a curved top. [D] You just need an Angle of Attack to deflect the wind.
    `.trim(),
        questions: [
            {
                id: "batch10_topic14_lift_physics_Q1",
                question: "Why is the 'Equal Transit Time' theory of lift considered incorrect?",
                options: [
                    "Air doesn't move.",
                    "Air on top goes slower.",
                    "The air on top travels faster, but it does not have to meet the air on the bottom at the same time.",
                    "Wings are not curved."
                ],
                correctAnswer: "C",
                explanation: "The passage corrects this: 'The air on top *does* go faster, but it doesn't have to meet the bottom air. The \"Equal Transit\" part is a myth.'"
            }
        ]
    },
    {
        id: "batch10_topic15_photosynthesis_calvin",
        taskType: "academic",
        title: "Photosynthesis: The Light-Independent Reactions (Calvin Cycle)",
        passage: `
**Rhetorical Structure:** Process/Cycle
**Dominant TOEFL Skill:** Sentence Insertion

Photosynthesis is the process that powers the biosphere. It has two parts: the "Light Reactions" and the "Dark Reactions" (Calvin Cycle). While the Light Reactions capture solar energy to make battery molecules (ATP and NADPH), they do not make food. Sugar is built in the dark.

The *Calvin Cycle* occurs in the stroma (fluid) of the chloroplast. It is a factory for fixing Carbon.

**Step 1: Carbon Fixation.** A simple $CO_2$ molecule from the air is attached to a 5-carbon sugar called RuBP. [A] This reaction is catalyzed by the enzyme *Rubisco*. Rubisco is the most abundant protein on Earth, likely because it is slow and inefficient, so plants need a ton of it.

**Step 2: Reduction.** The cell uses the ATP and NADPH (from the light reactions) to charge up the new carbon chain, converting it into a high-energy sugar called G3P. [B]

**Step 3: Regeneration.** Some of the G3P leaves the cycle to become glucose (food). [C] However, most of it is recycled. It uses more ATP to be rearranged back into RuBP, so the cycle can start again to catch the next $CO_2$.

It takes 6 turns of the cycle to make one glucose molecule. [D] This process is basically "packaged sunlight." The energy in the bonds of the sugar you eat originally came from a photon hitting a leaf and driving this microscopic wheel.
    `.trim(),
        questions: [
            {
                id: "batch10_topic15_photosynthesis_calvin_Q1",
                question: "What is the primary product of the 'Calvin Cycle' (Dark Reactions)?",
                options: [
                    "Oxygen.",
                    "Sunlight.",
                    "Sugar (Glucose), built from Carbon Dioxide.",
                    "Water."
                ],
                correctAnswer: "C",
                explanation: "The text states: 'Sugar is built in the dark... It is a factory for fixing Carbon... to become glucose (food).'"
            }
        ]
    },
    {
        id: "batch10_topic16_impressionism",
        taskType: "academic",
        title: "Impressionism: The Science of Perception",
        passage: `
**Rhetorical Structure:** Theory/Style
**Dominant TOEFL Skill:** Vocabulary in Context

In 1874, a group of rejected artists (Monet, Renoir, Degas) held an exhibition in Paris. A critic, mocking a painting by Monet titled *Impression, Sunrise*, derided them as "Impressionists." He meant it as an insult—that the paintings were unfinished sketches. They wore the name as a badge of honor.

Impressionism was a rebellion against the Academy, which liked historical scenes painted with invisible brushstrokes. The Impressionists were interested in *Light*.

They painted *en plein air* (outdoors), thanks to the invention of paint in tubes. [A] They noticed that shadows are not black; they are colored (often violet or blue), reflecting the sky.

They realized the eye does not see individual leaves on a distant tree; it sees a blur of green. [B] To capture this, they broke the image into short, broken brushstrokes ("taches"). Up close, it is a mess. Step back, and your eye blends the strokes into a coherent image.

They were influenced by photography (capturing a fleeting moment) and Japanese prints (asymmetry). [C]

Monet painted the same haystack or cathedral dozens of times at different hours to show that the "object" doesn't matter; only the light falling on it matters. [D] The haystack is red at sunset, blue in the morning. Impressionism shifted art from painting *things* to painting *perception*.
    `.trim(),
        questions: [
            {
                id: "batch10_topic16_impressionism_Q1",
                question: "Why did Monet paint the same subject multiple times at different times of day?",
                options: [
                    "He couldn't get it right the first time.",
                    "To sell more paintings.",
                    "To show that the object itself matters less than the changing light and perception of it.",
                    "He was bored."
                ],
                correctAnswer: "C",
                explanation: "The passage notes: 'Monet painted the same haystack... to show that the \"object\" doesn't matter; only the light falling on it matters.'"
            }
        ]
    },
    {
        id: "batch10_topic17_berlin_wall",
        taskType: "academic",
        title: "The Berlin Wall: Construction and Fall",
        passage: `
**Rhetorical Structure:** Chronology/Symbolism
**Dominant TOEFL Skill:** Inference

For 28 years, the Berlin Wall was the physical manifestation of the Iron Curtain—the divide between the capitalist West and the communist East. Its construction in 1961 was a desperate act of economic survival by the East German (GDR) government.

Between 1949 and 1961, 2.5 million East Germans fled to the West. [A] Crucially, these were the "best and brightest"—doctors, engineers, and teachers—who could get higher salaries in the West. This "Brain Drain" threatened to collapse the East German economy.

On the night of August 13, 1961, the border was sealed with barbed wire, later replaced by a 12-foot concrete wall complete with guard towers, dogs, and a "Death Strip."

The West called it a prison wall. The East called it the "Anti-Fascist Protection Rampart," claiming it kept Western spies out. [B] This was propaganda; the guns were pointed inward, at their own citizens.

Other than stopping the brain drain, the Wall stabilized the Cold War. It froze the status quo. [C]

It fell on November 9, 1989, due to a bureaucracy error. A GDR official, Günter Schabowski, confused the dates on a press release about relaxing travel restrictions. He announced the borders were open "immediately." [D] Thousands of Berliners rushed the gates. The confused guards, outnumbered and receiving no orders, opened the barriers. The fall was not a military victory, but a peaceful revolution fueled by a clerical mistake.
    `.trim(),
        questions: [
            {
                id: "batch10_topic17_berlin_wall_Q1",
                question: "What was the main economic motivation for East Germany to build the Berlin Wall?",
                options: [
                    "To keep Western spies out.",
                    "To stop the 'Brain Drain' of skilled professionals fleeing to the West.",
                    "To build a shopping mall.",
                    "To attract tourists."
                ],
                correctAnswer: "B",
                explanation: "The text explains: 'Crucially, these were the \"best and brightest\"... This \"Brain Drain\" threatened to collapse the East German economy.'"
            }
        ]
    },
    {
        id: "batch10_topic18_social_capital",
        taskType: "academic",
        title: "Putnam’s 'Bowling Alone' and the Decline of Social Capital",
        passage: `
**Rhetorical Structure:** Theory/Observation
**Dominant TOEFL Skill:** Prose Summary

In 2000, political scientist Robert Putnam published *Bowling Alone*, a study that diagnosed a collapse in American community life. He popularized the term *Social Capital*. Just as physical capital (tools) and human capital (education) increase productivity, Social Capital refers to the networks of relationships among people that enable society to function.

Putnam distinguished between two types:
*   **Bonding Capital:** Ties between people who are alike (family, church groups). It is "superglue."
*   **Bridging Capital:** Ties between people who are different (civil rights movement). It is "WD-40" (lubricant). [A]

He used bowling as a metaphor. The total number of people bowling had increased, but the number of people in "bowling leagues" had plummeted. People were bowling alone.

This trend appeared everywhere: attendance at town meetings, PTA, boy scouts, and dinner parties had all crashed since the 1960s. [B]

Putnam blamed "technological individualizing of leisure" (TV and later the internet) and suburban sprawl. [C] We stay home and watch Friends instead of having friends.

The consequence is a decline in trust. [D] When you don't know your neighbor, you don't trust them. This leads to political polarization and a breakdown of democracy, which relies on the ability of strangers to cooperate.
    `.trim(),
        questions: [
            {
                id: "batch10_topic18_social_capital_Q1",
                question: "What does Robert Putnam mean by the term 'Social Capital'?",
                options: [
                    "Money used for parties.",
                    "The networks of relationships and trust among people that enable society to function.",
                    "Government welfare checks.",
                    "The number of bowling alleys in a city."
                ],
                correctAnswer: "B",
                explanation: "The passage defines it as: 'the networks of relationships among people that enable society to function.'"
            }
        ]
    },
    {
        id: "batch10_topic19_tunnels_tbm",
        taskType: "academic",
        title: "Engineering Tunnels: The TBM vs. Drill-and-Blast",
        passage: `
**Rhetorical Structure:** Comparison/Process
**Dominant TOEFL Skill:** Factual Information

Building a tunnel through a mountain or under a city is one of the toughest challenges in civil engineering. There are two primary methods: The classical "Drill-and-Blast" and the modern "Tunnel Boring Machine" (TBM).

**Drill-and-Blast** is sequential. [A] Engineers drill holes in the rock face, pack them with explosives, blow it up, wait for the dust to settle ("mucking out"), and then reinforce the roof with shotcrete (sprayed concrete). It is slow and jerky. However, it is flexible. You can change shape or direction easily. It is preferred for short tunnels or weird geometries.

**The TBM** is a factory on wheels. [B] It is a massive cylinder, often 100 meters long. The front is a rotating cutterhead with steel discs that grind the rock into chips.
Crucially, the TBM does everything at once. As it chews the rock, it simultaneously erects pre-cast concrete segments behind it to build the tunnel lining. [C]
It pushes itself forward using hydraulic jacks that push off the lining it just built.

TBMs are fast and continuous. They don't disturb the surface (great for cities like London). [D] However, they are astronomically expensive and inflexible. If a TBM gets stuck (like "Bertha" in Seattle), you cannot just back it up. You have to dig a rescue shaft from the surface. They are designated for long, straight runs like the "Chunnel" (Channel Tunnel).
    `.trim(),
        questions: [
            {
                id: "batch10_topic19_tunnels_tbm_Q1",
                question: "What is a major advantage of using a Tunnel Boring Machine (TBM)?",
                options: [
                    "It is very cheap.",
                    "It digs continuously and doesn't disturb the surface, making it ideal for cities.",
                    "It can easily back up if it gets stuck.",
                    "It uses explosives."
                ],
                correctAnswer: "B",
                explanation: "The text notes: 'TBMs are fast and continuous. They don't disturb the surface (great for cities like London).'"
            }
        ]
    },
    {
        id: "batch10_topic20_bipedalism",
        taskType: "academic",
        title: "Human Evolution: The Savanna Hypothesis for Bipedalism",
        passage: `
**Rhetorical Structure:** Hypothesis/Evidence
**Dominant TOEFL Skill:** Inference

The defining characteristic of the Hominin lineage (us) is *Bipedalism*—walking upright on two legs. We did this millions of years before we developed big brains. Why did we stand up? The classic explanation is the *Savanna Hypothesis*.

It suggests that as Africa dried out, the forests receded and were replaced by tall grass savannas. [A] Our ancestors were forced out of the trees.

Walking on two legs offered several advantages in this new open terrain:
1.  **Efficiency:** Bipedal walking burns 75% less energy than knuckle-walking (like chimps) over long distances. We could patrol huge territories for food.
2.  **Thermoregulation:** By standing up, we expose less surface area to the direct overhead sun and more to the cooling breeze. [B] This allowed us to forage in the heat of midday when predators were sleeping.
3.  **Vision:** Standing up allowed us to see over the tall grass to spot lions.

However, new fossil evidence (*Ardipithecus*) challenges this. [C] "Ardi" was a biped who lived in a *woodland*, not a savanna. This suggests we may have started walking upright *in the trees* (walking on branches like gibbons) before we ever hit the ground.

Regardless of the start, bipedalism freed our hands. [D] Once we didn't need hands for walking, we could use them for tools. This feedback loop (Tools -> Better Food -> Bigger Brains) defined our trajectory.
    `.trim(),
        questions: [
            {
                id: "batch10_topic20_bipedalism_Q1",
                question: "According to the 'Savanna Hypothesis', why did human ancestors evolve bipedalism?",
                options: [
                    "To swim better.",
                    "To adapt to the shift from forests to open grasslands, allowing for efficient travel and better visibility.",
                    "To climb trees faster.",
                    "Because of the cold weather."
                ],
                correctAnswer: "B",
                explanation: "The passage suggests: '...forests receded and were replaced by tall grass savannas... Walking on two legs offered several advantages in this new open terrain.'"
            }
        ]
    }
];
