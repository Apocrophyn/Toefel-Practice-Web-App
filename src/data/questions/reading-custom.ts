
import { ReadingQuestionItem, CompleteWordsQuestion, DailyLifeQuestion, AcademicQuestion } from "./reading-2026";

// --------------------------------------------------------------------------------
// CUSTOM CURATED READING CONTENT (Official 2026 Style)
// --------------------------------------------------------------------------------

// --- COMPLETE THE WORDS (Short Paragraphs ~80-100 words) ---

const cw_01: CompleteWordsQuestion = {
    id: "RD_CUST_CW_01",
    taskType: "complete_words",
    passage: "The invention of the printing press in the 15th century by Johannes Gutenberg was a revolu_____ moment in history. Before this, books were copied by h___, making them rare and expensive. The press allowed for the mass produ_____ of literature, spreading knowledge across Europe. This directly contributed to the Renais_____, as ideas could be shared faster than ever before.",
    blanks: [
        { position: 0, partialWord: "revolu_____", answer: "revolutionary" },
        { position: 1, partialWord: "h___", answer: "hand" },
        { position: 2, partialWord: "produ_____", answer: "production" },
        { position: 3, partialWord: "Renais_____", answer: "Renaissance" }
    ]
};

const cw_02: CompleteWordsQuestion = {
    id: "RD_CUST_CW_02",
    taskType: "complete_words",
    passage: "Photosynthesis is the process by which green plants create their own f___. Using sunlight, water, and carbon dioxide, they produce glucose and oxygen. This process takes place in the chloro_____, which contains the pigment chlorophyll. Without photosynthesis, the Earth's atmos_____ would not contain enough oxygen to support animal l___.",
    blanks: [
        { position: 0, partialWord: "f___", answer: "food" },
        { position: 1, partialWord: "chloro_____", answer: "chloroplasts" },
        { position: 2, partialWord: "atmos_____", answer: "atmosphere" },
        { position: 3, partialWord: "l___", answer: "life" }
    ]
};

const cw_03: CompleteWordsQuestion = {
    id: "RD_CUST_CW_03",
    taskType: "complete_words",
    passage: "In economics, the law of supply and demand explains how prices are deter_____. When demand for a product is high but supply is low, the price typically ri___. Conversely, if there is a surplus of goods, sellers must lower prices to attract b_____. This constant fluctuation helps reach market equili_____.",
    blanks: [
        { position: 0, partialWord: "deter_____", answer: "determined" },
        { position: 1, partialWord: "ri___", answer: "rises" },
        { position: 2, partialWord: "b_____", answer: "buyers" },
        { position: 3, partialWord: "equili_____", answer: "equilibrium" }
    ]
};

const cw_04: CompleteWordsQuestion = {
    id: "RD_CUST_CW_04",
    taskType: "complete_words",
    passage: "Impressionism was an art movement that originated in France in the late 19th c______. Artists like Monet and Renoir focused on capturing the immediate sensation of a scene, particularly the effect of l____. Instead of precise, realistic details, they used short, thick strokes of p____ to create vibration and movement on the canvas.",
    blanks: [
        { position: 0, partialWord: "c______", answer: "century" },
        { position: 1, partialWord: "l____", answer: "light" },
        { position: 2, partialWord: "p____", answer: "paint" }
    ]
};

const cw_05: CompleteWordsQuestion = {
    id: "RD_CUST_CW_05",
    taskType: "complete_words",
    passage: "The immune system is the body's defense against infec_____. It consists of a complex network of cells and proteins that defend the body against foreign invaders like bacteria and v______. When the system detects a pathogen, it produces anti______ to destroy it and remembers the invader for future protection.",
    blanks: [
        { position: 0, partialWord: "infec_____", answer: "infection" },
        { position: 1, partialWord: "v______", answer: "viruses" },
        { position: 2, partialWord: "anti______", answer: "antibodies" }
    ]
};

// --- DAILY LIFE (Emails, Notices) ---

const dl_01: DailyLifeQuestion = {
    id: "RD_CUST_DL_01",
    taskType: "daily_life",
    passage: `From: Campus IT Services
Subject: Urgent: Network Maintenance

Dear Students and Faculty,

This is a reminder that the university wireless network (EduRoam) will be undergoing scheduled maintenance this Saturday, November 12, from 2:00 AM to 6:00 AM. During this window, internet access will be unavailable in all dormitories and the main library.

The computer labs in the Science Building will remain online via wired connections if you have urgent deadlines. We apologize for the inconvenience as we upgrade our security firewalls.`,
    questions: [
        {
            id: "DL_01_Q1",
            question: "Why will the internet be unavailable?",
            options: ["The network is broken", "Scheduled maintenance and upgrades", "A storm caused an outage", "The university is closing"],
            correctAnswer: "B",
            explanation: "The text states the network will be 'undergoing scheduled maintenance'."
        },
        {
            id: "DL_01_Q2",
            question: "Where can students go if they need internet during the outage?",
            options: ["The Main Library", "The Dormitories", "The Science Building computer labs", "A local coffee shop"],
            correctAnswer: "C",
            explanation: "The text states: 'The computer labs in the Science Building will remain online'."
        }
    ]
};

const dl_02: DailyLifeQuestion = {
    id: "RD_CUST_DL_02",
    taskType: "daily_life",
    passage: `To: Residents of Oak Hall
From: Housing Office
Subject: End of Semester Checkout Procedures

As the semester ends, please remember the following checkout rules:
1. All personal items must be removed from your room by 12:00 PM on Friday, May 20.
2. Room keys must be returned to the front desk. A lost key fee of $50 applies.
3. Furniture must be returned to its original arrangement.
4. Trash must be taken to the dumpsters outside.

Failure to follow these steps may result in a fine deducted from your housing deposit.`,
    questions: [
        {
            id: "DL_02_Q1",
            question: "What is the deadline for moving out?",
            options: ["Friday at Midnight", "Friday at Noon", "Saturday Morning", "Thursday Evening"],
            correctAnswer: "B",
            explanation: "The text specifies: '12:00 PM on Friday, May 20'."
        },
        {
            id: "DL_02_Q2",
            question: "What happens if a student loses their key?",
            options: ["They cannot leave", "They are charged $50", "They fail the semester", "They must buy a new lock"],
            correctAnswer: "B",
            explanation: "The text states: 'A lost key fee of $50 applies'."
        }
    ]
};

const dl_03: DailyLifeQuestion = {
    id: "RD_CUST_DL_03",
    taskType: "daily_life",
    passage: `NOTICE: Volunteer Opportunity
    
The City Animal Shelter is looking for weekend volunteers. 
Roles include:
- Walking dogs
- Cleaning cages
- Assisting with adoption events

No experience is needed, but you must be at least 18 years old and able to commit to 4 hours per week. An orientation session occupies the first Saturday of every month.

Interested? Email volunteer@cityshelter.org`,
    questions: [
        {
            id: "DL_03_Q1",
            question: "What is a requirement to volunteer?",
            options: ["You must own a pet", "You must have experience", "You must be 18 or older", "You must work every day"],
            correctAnswer: "C",
            explanation: "The text states: 'you must be at least 18 years old'."
        },
        {
            id: "DL_03_Q2",
            question: "How often must volunteers work?",
            options: ["4 hours per week", "4 hours per month", "Every Saturday", "Whenever they want"],
            correctAnswer: "A",
            explanation: "The text states: 'commit to 4 hours per week'."
        }
    ]
};

// --- ACADEMIC PASSAGES (200 words, Short & Dense) ---

const ac_01: AcademicQuestion = {
    id: "RD_CUST_AC_01",
    taskType: "academic",
    title: "The Rosetta Stone",
    passage: `The Rosetta Stone is one of the most important archaeological discoveries in history. Found in 1799 by French soldiers in Egypt, it is a stele inscribed with a decree issued at Memphis in 196 BC. The key feature of the stone is that the same decree is written in three different scripts: the top text is in Ancient Egyptian hieroglyphs, the middle portion is in Demotic script, and the lowest is in Ancient Greek.

Because Ancient Greek was a language known to scholars, the stone provided the key to deciphering the other two scripts. Before this discovery, Egyptian hieroglyphs were a mystery; no one had been able to read them for over a thousand years. Jean-François Champollion, a French scholar, eventually cracked the code in 1822. He realized that the hieroglyphs recorded the sound of the Egyptian language and were not just symbolic pictures. This breakthrough opened up the entire history of ancient Egypt to the modern world, allowing historians to read the inscriptions on tombs, temples, and papyrus scrolls that had previously been silent.`,
    questions: [
        {
            id: "AC_01_Q1",
            question: "Why was the Rosetta Stone so valuable to historians?",
            options: ["It was made of solid gold", "It allowed them to decipher Egyptian hieroglyphs", "It contained a secret map of Memphis", "It was written by a famous Pharaoh"],
            correctAnswer: "B",
            explanation: "The passage states: 'the stone provided the key to deciphering the other two scripts' and 'opened up the entire history of ancient Egypt'."
        },
        {
            id: "AC_01_Q2",
            question: "What did Jean-François Champollion realize about hieroglyphs?",
            options: ["They were just pictures", "They were meaningless decoration", "They recorded the sound of the language", "They were identical to Greek"],
            correctAnswer: "C",
            explanation: "He realized 'the hieroglyphs recorded the sound of the Egyptian language and were not just symbolic pictures'."
        }
    ]
};

const ac_02: AcademicQuestion = {
    id: "RD_CUST_AC_02",
    taskType: "academic",
    title: "Biofuels",
    passage: `Biofuels are renewable energy sources derived from biological material, such as plants or agricultural waste. Unlike fossil fuels (coal, oil, and gas) which take millions of years to form, biofuels can be produced quickly. The two most common types are ethanol, often made from corn or sugarcane, and biodiesel, made from vegetable oils or animal fats.

Advocates argue that biofuels are cleaner than fossil fuels because the plants absorb carbon dioxide as they grow, balancing out the emissions when the fuel is burned. This theoretically makes them "carbon neutral." However, critics point out significant drawbacks. Producing biofuels requires vast amounts of land and water, potentially displacing food crops and driving up food prices globally. Furthermore, the clearing of forests to plant fuel crops can actually release more sequestered carbon than the fuel saves. Thus, while biofuels offer a renewable alternative, their environmental impact is complex and debated.`,
    questions: [
        {
            id: "AC_02_Q1",
            question: "Why are biofuels considered potentially 'carbon neutral'?",
            options: ["They do not release any smoke when burned", "The plants absorb CO2 while growing", "They are made in factories", "They break down ozone"],
            correctAnswer: "B",
            explanation: "The text says plants 'absorb carbon dioxide as they grow, balancing out the emissions'."
        },
        {
            id: "AC_02_Q2",
            question: "What is a major criticism of biofuel production mentioned in the passage?",
            options: ["It produces toxic waste", "It is too expensive to manufacture", "It can displace food crops and raise prices", "It damages car engines"],
            correctAnswer: "C",
            explanation: "Critics point out it 'requires vast amounts of land... potentially displacing food crops and driving up food prices'."
        }
    ]
};

const ac_03: AcademicQuestion = {
    id: "RD_CUST_AC_03",
    taskType: "academic",
    title: "Urban Heat Islands",
    passage: `An urban heat island (UHI) involves an urban area or metropolitan area that is significantly warmer than its surrounding rural areas due to human activities. The temperature difference is usually larger at night than during the day, and is most apparent when winds are weak. UHI is most noticeable during the summer and winter. The main cause of the urban heat island effect is the modification of land surfaces. Waste heat generated by energy usage is a secondary contributor.

As a population center grows, it tends to expand its area and increase its average temperature. The term "heat island" refers to the fact that the city is like a warm island in a cool "sea" of rural greenery. Concrete and asphalt absorb more of the sun's heat than trees and soil do, and they release it slowly at night. This can lead to increased energy consumption for air conditioning, higher pollution levels, and heat-related illness among residents.`,
    questions: [
        {
            id: "AC_03_Q1",
            question: "What is the primary cause of the Urban Heat Island effect?",
            options: ["Global warming", "Waste heat from cars", "Modification of land surfaces", "Lack of wind"],
            correctAnswer: "C",
            explanation: "The passage states: 'The main cause... is the modification of land surfaces.'"
        },
        {
            id: "AC_03_Q2",
            question: "When is the temperature difference between urban and rural areas usually largest?",
            options: ["During the day", "At night", "During spring", "During a storm"],
            correctAnswer: "B",
            explanation: "The text says: 'The temperature difference is usually larger at night'."
        }
    ]
};

// --- EXPORT CONTENT ---

export const customReadingQuestions: ReadingQuestionItem[] = [
    cw_01, cw_02, cw_03, cw_04, cw_05,
    dl_01, dl_02, dl_03,
    ac_01, ac_02, ac_03
];
