export interface GameWord {
    word: string;
    definition: string;
    partOfSpeech: string;
    difficulty: 'easy' | 'medium' | 'hard';
    category: string;
}

export const ACADEMIC_DICTIONARY: GameWord[] = [
    // Easy
    { word: "analyze", definition: "To examine something in detail to understand it better.", partOfSpeech: "verb", difficulty: "easy", category: "Scientific" },
    { word: "theory", definition: "A system of ideas intended to explain something.", partOfSpeech: "noun", difficulty: "easy", category: "Scientific" },
    { word: "benefit", definition: "An advantage or profit gained from something.", partOfSpeech: "noun", difficulty: "easy", category: "General" },
    { word: "factor", definition: "A circumstance, fact, or influence that contributes to a result.", partOfSpeech: "noun", difficulty: "easy", category: "General" },
    { word: "impact", definition: "The action of one object coming forcibly into contact with another; a strong effect.", partOfSpeech: "noun", difficulty: "easy", category: "General" },
    { word: "policy", definition: "A course or principle of action adopted or proposed by an organization.", partOfSpeech: "noun", difficulty: "easy", category: "General" },
    { word: "source", definition: "A place, person, or thing from which something originates.", partOfSpeech: "noun", difficulty: "easy", category: "General" },
    { word: "design", definition: "A plan or drawing produced to show the look and function of an object.", partOfSpeech: "noun", difficulty: "easy", category: "Arts" },
    { word: "method", definition: "A particular procedure for accomplishing or approaching something.", partOfSpeech: "noun", difficulty: "easy", category: "General" },
    { word: "period", definition: "A length or portion of time.", partOfSpeech: "noun", difficulty: "easy", category: "History" },

    // Medium
    { word: "attribute", definition: "A quality or feature regarded as a characteristic or inherent part of someone or something.", partOfSpeech: "noun", difficulty: "medium", category: "General" },
    { word: "compensate", definition: "Give someone something, typically money, in recognition of loss, suffering, or injury.", partOfSpeech: "verb", difficulty: "medium", category: "Economics" },
    { word: "dimension", definition: "A measurable extent of some kind, such as length, breadth, depth, or height.", partOfSpeech: "noun", difficulty: "medium", category: "Scientific" },
    { word: "hypothesis", definition: "A proposed explanation made on the basis of limited evidence as a starting point for further investigation.", partOfSpeech: "noun", difficulty: "medium", category: "Scientific" },
    { word: "implement", definition: "Put a decision, plan, agreement, etc., into effect.", partOfSpeech: "verb", difficulty: "medium", category: "General" },
    { word: "perspective", definition: "A particular attitude toward or way of regarding something; a point of view.", partOfSpeech: "noun", difficulty: "medium", category: "Arts" },
    { word: "substantial", definition: "Of considerable importance, size, or worth.", partOfSpeech: "adjective", difficulty: "medium", category: "General" },
    { word: "underlie", definition: "Be the cause or basis of something.", partOfSpeech: "verb", difficulty: "medium", category: "General" },
    { word: "variable", definition: "An element, feature, or factor that is liable to vary or change.", partOfSpeech: "noun", difficulty: "medium", category: "Scientific" },
    { word: "adequate", definition: "Satisfactory or acceptable in quality or quantity.", partOfSpeech: "adjective", difficulty: "medium", category: "General" },
    { word: "pragmatic", definition: "Dealing with things sensibly and realistically based on practical considerations.", partOfSpeech: "adjective", difficulty: "medium", category: "General" },
    { word: "integrity", definition: "The quality of being honest and having strong moral principles.", partOfSpeech: "noun", difficulty: "medium", category: "General" },
    { word: "empathy", definition: "The ability to understand and share the feelings of another.", partOfSpeech: "noun", difficulty: "medium", category: "General" },
    { word: "resilient", definition: "Able to withstand or recover quickly from difficult conditions.", partOfSpeech: "adjective", difficulty: "medium", category: "General" },
    { word: "innovate", definition: "Introducing new methods, ideas, or products.", partOfSpeech: "verb", difficulty: "medium", category: "Business" },

    // Hard
    { word: "ambiguous", definition: "Open to more than one interpretation; having a double meaning.", partOfSpeech: "adjective", difficulty: "hard", category: "Linguistics" },
    { word: "collaborate", definition: "Work jointly on an activity, especially to produce or create something.", partOfSpeech: "verb", difficulty: "hard", category: "General" },
    { word: "deteriorate", definition: "Become progressively worse.", partOfSpeech: "verb", difficulty: "hard", category: "Scientific" },
    { word: "equilibrium", definition: "A state in which opposing forces or influences are balanced.", partOfSpeech: "noun", difficulty: "hard", category: "Scientific" },
    { word: "fluctuate", definition: "Rise and fall irregularly in number or amount.", partOfSpeech: "verb", difficulty: "hard", category: "Economics" },
    { word: "infrastructure", definition: "The basic physical and organizational structures and facilities needed for the operation of a society.", partOfSpeech: "noun", difficulty: "hard", category: "Economics" },
    { word: "manifestation", definition: "An event, action, or object that clearly shows or embodies something.", partOfSpeech: "noun", difficulty: "hard", category: "General" },
    { word: "nomenclature", definition: "The devising or choosing of names for things, especially in science.", partOfSpeech: "noun", difficulty: "hard", category: "Scientific" },
    { word: "paradigm", definition: "A typical example or pattern of something; a model.", partOfSpeech: "noun", difficulty: "hard", category: "General" },
    { word: "scrutinize", definition: "Examine or inspect closely and thoroughly.", partOfSpeech: "verb", difficulty: "hard", category: "General" },
    { word: "ubiquitous", definition: "Present, appearing, or found everywhere.", partOfSpeech: "adjective", difficulty: "hard", category: "General" },
    { word: "vulnerable", definition: "Susceptible to physical or emotional attack or harm.", partOfSpeech: "adjective", difficulty: "hard", category: "General" },
    { word: "exacerbate", definition: "Make a problem, bad situation, or negative feeling worse.", partOfSpeech: "verb", difficulty: "hard", category: "General" },
    { word: "reconcile", definition: "Restore friendly relations between.", partOfSpeech: "verb", difficulty: "hard", category: "General" },
    { word: "tenacious", definition: "Tending to keep a firm hold of something; clinging closely.", partOfSpeech: "adjective", difficulty: "hard", category: "General" },
    { word: "vicarious", definition: "Experienced in the imagination through the feelings or actions of another.", partOfSpeech: "adjective", difficulty: "hard", category: "General" },
    { word: "meticulous", definition: "Showing great attention to detail; very careful and precise.", partOfSpeech: "adjective", difficulty: "hard", category: "General" },
    { word: "empirical", definition: "Based on observation or experience rather than theory.", partOfSpeech: "adjective", difficulty: "hard", category: "Scientific" },
    { word: "hierarchy", definition: "A system in which members are ranked according to status.", partOfSpeech: "noun", difficulty: "hard", category: "General" },
    { word: "intrinsic", definition: "Belonging naturally; essential.", partOfSpeech: "adjective", difficulty: "hard", category: "General" }
];
