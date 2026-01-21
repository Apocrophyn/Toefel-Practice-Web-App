"use client";

import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Timer,
    Trophy,
    Zap,
    RotateCcw,
    ChevronRight,
    BrainCircuit,
    CheckCircle2,
    XCircle,
    Star,
    Target,
    TrendingUp,
    Award,
    ArrowRight
} from "lucide-react";
import { ACADEMIC_DICTIONARY, type GameWord } from "@/data/dictionary";

// Game constants
const INITIAL_TIME = 60;
const TIME_BONUS = {
    easy: 3,
    medium: 5,
    hard: 8
};

interface GameState {
    isPlaying: boolean;
    score: number;
    timeRemaining: number;
    currentWordIndex: number;
    wordsAttempted: number;
    wordsCorrect: number;
    combo: number;
    maxCombo: number;
    difficulty: 'easy' | 'medium' | 'hard' | 'mixed';
    history: { word: string; definition: string; isCorrect: boolean; userTyped: string }[];
}

export function WordSpeedrun() {
    const [gameState, setGameState] = useState<State>("idle");
    const [game, setGame] = useState<GameState>({
        isPlaying: false,
        score: 0,
        timeRemaining: INITIAL_TIME,
        currentWordIndex: 0,
        wordsAttempted: 0,
        wordsCorrect: 0,
        combo: 0,
        maxCombo: 0,
        difficulty: 'mixed',
        history: []
    });

    const [currentWord, setCurrentWord] = useState<GameWord | null>(null);
    const [userInput, setUserInput] = useState<string>("");
    const [blankIndices, setBlankIndices] = useState<number[]>([]);
    const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
    const hiddenInputRef = useRef<HTMLInputElement>(null);

    // Refs to avoid closure staleness in setTimeouts
    const userInputRef = useRef("");
    const currentWordRef = useRef<GameWord | null>(null);
    const blankIndicesRef = useRef<number[]>([]);
    const feedbackRef = useRef<'correct' | 'incorrect' | null>(null);

    useEffect(() => { userInputRef.current = userInput; }, [userInput]);
    useEffect(() => { currentWordRef.current = currentWord; }, [currentWord]);
    useEffect(() => { blankIndicesRef.current = blankIndices; }, [blankIndices]);
    useEffect(() => { feedbackRef.current = feedback; }, [feedback]);

    type State = "idle" | "playing" | "finished";

    // Prepare a new word
    const prepareWord = useCallback((word: GameWord) => {
        const text = word.word.trim();
        const len = text.length;
        let blanksCount = Math.max(2, Math.floor(len * 0.4));

        if (word.difficulty === 'easy') blanksCount = Math.max(2, Math.floor(len * 0.3));
        if (word.difficulty === 'hard') blanksCount = Math.max(3, Math.floor(len * 0.6));

        const indices: number[] = [];
        while (indices.length < blanksCount) {
            const idx = Math.floor(Math.random() * len);
            if (!indices.includes(idx)) {
                indices.push(idx);
            }
        }

        const sortedIndices = indices.sort((a, b) => a - b);
        setBlankIndices(sortedIndices);
        setUserInput("");
        setCurrentWord({ ...word, word: text });
        setFeedback(null);

        // Speed focus
        setTimeout(() => hiddenInputRef.current?.focus(), 10);
    }, []);

    const getRandomWord = useCallback((difficulty: string) => {
        const pool = difficulty === 'mixed'
            ? ACADEMIC_DICTIONARY
            : ACADEMIC_DICTIONARY.filter(w => w.difficulty === difficulty);
        return pool[Math.floor(Math.random() * pool.length)];
    }, []);

    const startGame = (difficulty: 'easy' | 'medium' | 'hard' | 'mixed') => {
        const firstWord = getRandomWord(difficulty);
        setGame({
            isPlaying: true,
            score: 0,
            timeRemaining: INITIAL_TIME,
            currentWordIndex: 0,
            wordsAttempted: 0,
            wordsCorrect: 0,
            combo: 0,
            maxCombo: 0,
            difficulty,
            history: []
        });
        prepareWord(firstWord);
        setGameState("playing");
    };

    const handleFinish = useCallback(() => {
        setGameState("finished");
        setGame(prev => ({ ...prev, isPlaying: false }));
    }, []);

    // Timer logic
    useEffect(() => {
        if (gameState !== "playing" || game.timeRemaining <= 0) {
            if (game.timeRemaining <= 0 && gameState === "playing") {
                handleFinish();
            }
            return;
        }

        const timer = setInterval(() => {
            setGame(prev => ({
                ...prev,
                timeRemaining: Math.max(0, prev.timeRemaining - 1)
            }));
        }, 1000);

        return () => clearInterval(timer);
    }, [gameState, game.timeRemaining, handleFinish]);

    const checkWord = useCallback((forceValue?: string) => {
        const wordToCompare = currentWordRef.current;
        const inputToCompare = forceValue ?? userInputRef.current;
        const indicesToCompare = blankIndicesRef.current;

        if (!wordToCompare || feedbackRef.current) return;

        // Construct what the full word would look like based on user input for blanks
        const constructedWord = wordToCompare.word.split('').map((char, i) => {
            const bIdx = indicesToCompare.indexOf(i);
            if (bIdx !== -1) {
                return (inputToCompare[bIdx] || "").toLowerCase();
            }
            return char.toLowerCase();
        }).join('');

        const isCorrect = constructedWord === wordToCompare.word.toLowerCase();

        if (isCorrect) {
            setFeedback('correct');
            const bonus = TIME_BONUS[wordToCompare.difficulty as keyof typeof TIME_BONUS] || 5;
            const points = 100 + (game.combo * 10) + (wordToCompare.difficulty === 'hard' ? 50 : wordToCompare.difficulty === 'medium' ? 20 : 0);

            setTimeout(() => {
                setGame(prev => ({
                    ...prev,
                    score: prev.score + points,
                    timeRemaining: prev.timeRemaining + bonus,
                    wordsCorrect: prev.wordsCorrect + 1,
                    wordsAttempted: prev.wordsAttempted + 1,
                    combo: prev.combo + 1,
                    maxCombo: Math.max(prev.maxCombo, prev.combo + 1),
                    history: [...prev.history, {
                        word: wordToCompare.word,
                        definition: wordToCompare.definition,
                        isCorrect: true,
                        userTyped: constructedWord
                    }]
                }));
                prepareWord(getRandomWord(game.difficulty));
            }, 300);
        } else {
            setFeedback('incorrect');
            setTimeout(() => {
                setGame(prev => ({
                    ...prev,
                    wordsAttempted: prev.wordsAttempted + 1,
                    combo: 0,
                    history: [...prev.history, {
                        word: wordToCompare.word,
                        definition: wordToCompare.definition,
                        isCorrect: false,
                        userTyped: constructedWord
                    }]
                }));
                prepareWord(getRandomWord(game.difficulty));
            }, 1000); // Give user a moment to see the correction
        }
    }, [game.combo, game.difficulty, getRandomWord, prepareWord]);

    const handleHiddenInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (feedback) return;

        const val = e.target.value;
        const cleaned = val.replace(/[^a-zA-Z]/g, '').toLowerCase();

        if (cleaned.length <= blankIndices.length) {
            setUserInput(cleaned);

            // Auto-check if last letter reached
            if (cleaned.length === blankIndices.length && cleaned.length > 0) {
                // Pass direct value to avoid state delay
                setTimeout(() => checkWord(cleaned), 50);
            }
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && userInput.length > 0) {
            checkWord();
        }
    };

    // Keep hidden input focused
    useEffect(() => {
        if (gameState !== "playing") return;

        const forceFocus = () => {
            if (feedbackRef.current) return;
            hiddenInputRef.current?.focus();
        };
        window.addEventListener("click", forceFocus);
        forceFocus();

        return () => window.removeEventListener("click", forceFocus);
    }, [gameState]);

    // UI Components
    const SetupView = () => (
        <div className="flex flex-col items-center justify-center space-y-8 p-8 max-w-2xl mx-auto">
            <div className="text-center space-y-4">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="inline-flex p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 mb-4"
                >
                    <Zap className="w-12 h-12 text-cyan-400 icon-glow" />
                </motion.div>
                <h1 className="text-5xl font-bold tracking-tight text-white heading-glow">
                    Vocabulary <span className="text-gradient">Speedrun</span>
                </h1>
                <p className="text-slate-400 text-lg">
                    Master academic vocabulary in a thrilling race against time. Complete as many words as you can!
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                {[
                    { id: 'easy', label: 'Easy', icon: Star, color: 'text-green-400', bg: 'bg-green-500/10', border: 'border-green-500/20' },
                    { id: 'medium', label: 'Medium', icon: Target, color: 'text-yellow-400', bg: 'bg-yellow-500/10', border: 'border-yellow-500/20' },
                    { id: 'hard', label: 'Hard', icon: Trophy, color: 'text-red-400', bg: 'bg-red-500/10', border: 'border-red-500/20' },
                    { id: 'mixed', label: 'Mixed', icon: BrainCircuit, color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/20' }
                ].map((level) => (
                    <motion.button
                        key={level.id}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => startGame(level.id as any)}
                        className={`flex items-center p-6 rounded-2xl glassmorphism ${level.border} group transition-all`}
                    >
                        <div className={`p-3 rounded-xl ${level.bg} ${level.color} mr-4 group-hover:scale-110 transition-transform`}>
                            <level.icon size={24} />
                        </div>
                        <div className="text-left">
                            <div className="font-bold text-lg text-white">{level.label}</div>
                            <div className="text-xs text-slate-500 uppercase tracking-widest">Difficulty</div>
                        </div>
                        <ChevronRight className="ml-auto text-slate-600 group-hover:text-white transition-colors" />
                    </motion.button>
                ))}
            </div>
        </div>
    );

    const PlayingView = () => (
        <div className="flex flex-col items-center justify-start min-h-[500px] w-full max-w-4xl mx-auto p-4 md:p-8">
            <div className="grid grid-cols-3 w-full mb-12 gap-4">
                <div className="glass-card p-4 rounded-2xl flex items-center space-x-3 md:space-x-4">
                    <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                        <Timer size={20} className="md:w-6 md:h-6" />
                    </div>
                    <div>
                        <div className="text-lg md:text-2xl font-mono font-bold text-white leading-none">
                            {game.timeRemaining}s
                        </div>
                        <div className="text-[10px] uppercase tracking-tighter text-slate-500 font-bold">Time</div>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <div className="text-3xl md:text-5xl font-black text-white heading-glow">
                        {game.score.toLocaleString()}
                    </div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-cyan-400 font-bold">Score</div>
                </div>

                <div className="glass-card p-4 rounded-2xl flex items-center space-x-3 md:space-x-4">
                    <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                        <Zap size={20} className="md:w-6 md:h-6" />
                    </div>
                    <div>
                        <div className="text-lg md:text-2xl font-mono font-bold text-white leading-none">
                            {game.combo}x
                        </div>
                        <div className="text-[10px] uppercase tracking-tighter text-slate-500 font-bold">Combo</div>
                    </div>
                </div>
            </div>

            <div className="w-full text-center space-y-12">
                <div className="space-y-6">
                    <p className="text-slate-200 text-xl md:text-2xl font-medium max-w-3xl mx-auto italic leading-relaxed">
                        &ldquo;{currentWord?.definition}&rdquo;
                    </p>
                    <div className="inline-flex items-center space-x-4 px-4 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/50 backdrop-blur-md">
                        <span className="text-xs font-black text-cyan-400 uppercase tracking-widest">{currentWord?.partOfSpeech}</span>
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-600"></div>
                        <span className="text-xs font-black text-slate-400 uppercase tracking-widest">{currentWord?.category}</span>
                    </div>
                </div>

                <input
                    ref={hiddenInputRef}
                    type="text"
                    value={userInput}
                    onChange={handleHiddenInputChange}
                    onKeyDown={handleKeyDown}
                    className="absolute opacity-0 pointer-events-none"
                    autoFocus
                />

                <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 no-select relative">
                    {currentWord?.word.split("").map((char, i) => {
                        const isBlank = blankIndices.includes(i);
                        const blankIdxInSequence = blankIndices.indexOf(i);
                        const userChar = isBlank ? (userInput[blankIdxInSequence] || "") : char;
                        const isCurrent = isBlank && userInput.length === blankIdxInSequence;

                        return (
                            <div
                                key={`${currentWord?.word}-${i}`}
                                className={`
                                    relative w-10 h-14 md:w-14 md:h-18 lg:w-16 lg:h-20 
                                    flex items-center justify-center rounded-2xl 
                                    text-2xl md:text-4xl lg:text-5xl font-black transition-all duration-150
                                    ${isBlank
                                        ? isCurrent
                                            ? 'bg-slate-800 border-2 border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.2)]'
                                            : 'bg-slate-900/50 border-2 border-slate-800 text-white'
                                        : 'bg-transparent border-2 border-transparent text-slate-600'
                                    }
                                    ${feedback === 'correct' && isBlank ? 'bg-green-500/20 border-green-500 text-green-400 scale-105' : ''}
                                    ${feedback === 'incorrect' && isBlank ? 'bg-red-500/20 border-red-500 text-red-400' : ''}
                                `}
                            >
                                {feedback === 'incorrect' && isBlank ? currentWord.word[i] : userChar}
                                {isCurrent && !feedback && (
                                    <motion.div
                                        animate={{ opacity: [0, 1, 0] }}
                                        transition={{ duration: 0.8, repeat: Infinity }}
                                        className="absolute bottom-3 w-1/3 h-1 bg-cyan-400 rounded-full"
                                    />
                                )}
                            </div>
                        );
                    })}
                </div>

                <div className="h-8">
                    <AnimatePresence>
                        {feedback === 'incorrect' && (
                            <motion.div
                                initial={{ y: 10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -10, opacity: 0 }}
                                className="text-red-400 font-bold uppercase tracking-widest text-sm"
                            >
                                Incorrect! The word was: <span className="text-white border-b border-red-500">{currentWord?.word}</span>
                            </motion.div>
                        )}
                        {feedback === 'correct' && (
                            <motion.div
                                initial={{ y: 10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -10, opacity: 0 }}
                                className="text-green-400 font-bold uppercase tracking-widest text-sm"
                            >
                                Perfect! +100 Points
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <div className="pt-4">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => checkWord()}
                        className="px-10 py-4 rounded-2xl glass-button font-black text-white tracking-[0.2em] uppercase flex items-center space-x-3 mx-auto"
                    >
                        <span>Submit Word</span>
                        <ArrowRight size={20} />
                    </motion.button>
                </div>
            </div>
        </div>
    );

    const FinishedView = () => (
        <div className="flex flex-col items-center justify-center space-y-12 p-8 max-w-5xl mx-auto w-full">
            <div className="text-center space-y-4">
                <motion.div
                    initial={{ scale: 0, rotate: -20 }}
                    animate={{ scale: 1, rotate: 0 }}
                    className="p-6 inline-block rounded-3xl bg-yellow-500/10 border border-yellow-500/20 mb-4"
                >
                    <Trophy className="w-20 h-20 text-yellow-400 icon-glow" />
                </motion.div>
                <h2 className="text-6xl font-black text-white uppercase tracking-tighter text-gradient">Session Complete!</h2>
                <p className="text-slate-400 text-xl font-medium tracking-wide">Excellent work on your vocabulary practice.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
                {[
                    { label: 'Total Score', value: game.score.toLocaleString(), icon: Award, color: 'text-cyan-400' },
                    { label: 'Accuracy', value: `${game.wordsAttempted > 0 ? Math.round((game.wordsCorrect / game.wordsAttempted) * 100) : 0}%`, icon: Target, color: 'text-blue-400' },
                    { label: 'Words Mastered', value: `${game.wordsCorrect}/${game.wordsAttempted}`, icon: CheckCircle2, color: 'text-green-400' },
                    { label: 'Best Combo', value: `${game.maxCombo}x`, icon: Zap, color: 'text-purple-400' }
                ].map((stat, i) => (
                    <div key={i} className="glass-card p-8 rounded-3xl flex flex-col items-center space-y-3 border-glow shadow-2xl bg-slate-900/40">
                        <stat.icon className={`w-10 h-10 ${stat.color} mb-2`} />
                        <div className="text-4xl font-black text-white leading-none">{stat.value}</div>
                        <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">{stat.label}</div>
                    </div>
                ))}
            </div>

            <div className="w-full glassmorphism rounded-[2.5rem] p-10 border-slate-800 bg-slate-900/20">
                <div className="flex items-center justify-between mb-8">
                    <h3 className="text-white font-black uppercase tracking-[0.3em] text-sm flex items-center">
                        <TrendingUp className="mr-3 text-cyan-400" size={20} />
                        Detailed Session Review
                    </h3>
                </div>

                <div className="max-h-[400px] overflow-y-auto pr-4 custom-scrollbar">
                    <div className="space-y-4">
                        {game.history.map((h, i) => (
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.05 }}
                                key={i}
                                className={`flex flex-col md:flex-row md:items-center justify-between p-6 rounded-2xl border ${h.isCorrect ? 'bg-green-500/5 border-green-500/20' : 'bg-red-500/5 border-red-500/20'} transition-all hover:bg-slate-800/30 group`}
                            >
                                <div className="flex items-center space-x-4">
                                    <div className={`p-2 rounded-lg ${h.isCorrect ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}`}>
                                        {h.isCorrect ? <CheckCircle2 size={24} /> : <XCircle size={24} />}
                                    </div>
                                    <div>
                                        <div className="text-2xl font-black text-white group-hover:text-cyan-400 transition-colors uppercase tracking-tight">{h.word}</div>
                                        <div className="text-sm text-slate-500 font-medium italic mt-1 line-clamp-1">&ldquo;{h.definition}&rdquo;</div>
                                    </div>
                                </div>
                                {!h.isCorrect && (
                                    <div className="mt-4 md:mt-0 text-right">
                                        <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">You typed blanks:</div>
                                        <div className="text-red-400 font-mono font-bold line-through opacity-60">
                                            {h.userTyped.split('').filter((_, idx) => blankIndices.includes(idx)).join('')}
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setGameState("idle")}
                className="px-14 py-6 rounded-3xl glass-button font-black text-white tracking-[0.3em] uppercase flex items-center space-x-4 shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
            >
                <RotateCcw size={24} />
                <span>Restart Speedrun</span>
            </motion.button>
        </div>
    );

    return (
        <div className="relative min-h-screen pt-24 pb-12 overflow-hidden bg-slate-950">
            <div className="absolute top-1/4 -left-20 w-[40rem] h-[40rem] orb-cyan opacity-[0.05] animate-pulse blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 -right-20 w-[40rem] h-[40rem] orb-purple opacity-[0.05] animate-pulse blur-[120px] pointer-events-none" />

            <div className="relative z-10 container mx-auto px-4">
                {gameState === "idle" && <SetupView />}
                {gameState === "playing" && <PlayingView />}
                {gameState === "finished" && <FinishedView />}
            </div>

            <style jsx global>{`
                .no-select {
                    user-select: none;
                    -webkit-user-select: none;
                }
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: rgba(255, 255, 255, 0.02);
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(34, 211, 238, 0.2);
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(34, 211, 238, 0.4);
                }
            `}</style>
        </div>
    );
}
