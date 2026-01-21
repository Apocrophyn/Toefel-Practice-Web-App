"use client";

import { motion } from "framer-motion";
import { BookOpen, Clock, ChevronRight, PenTool, ChevronLeft } from "lucide-react";
import type { ReadingQuestionItem, CompleteWordsQuestion } from "@/data/questions/reading-2026";

interface ReadingSectionProps {
    questions: ReadingQuestionItem[];
    currentIndex: number;
    answers: Record<string, any>;
    timeLeft: number;
    moduleNumber: 1 | 2;
    onAnswerChange: (answers: Record<string, any>) => void;
    onPrevious: () => void;
    onNext: () => void;
    onFinish: () => void;
}

export function ReadingSection({
    questions,
    currentIndex,
    answers,
    timeLeft,
    moduleNumber,
    onAnswerChange,
    onPrevious,
    onNext,
    onFinish,
}: ReadingSectionProps) {
    const currentQ = questions[currentIndex];

    // EXACT COPY from ReadingPractice.tsx line 238-255
    const renderTextWithFormatting = (text: string) => {
        if (!text) return null;

        // Split by ** delimiters
        const parts = text.split(/(\*\*.*?\*\*)/g);

        return parts.map((part, i) => {
            if (part.startsWith('**') && part.endsWith('**')) {
                return (
                    <strong key={i} className="text-white font-bold">
                        {part.substring(2, part.length - 2)}
                    </strong>
                );
            }
            return <span key={i}>{part}</span>;
        });
    };

    // EXACT COPY from ReadingPractice.tsx line 490-567
    const renderCompleteWords = (question: CompleteWordsQuestion) => {
        const userBlanks = (answers[question.id] as Record<number, string>) || {};

        // Build elements with inline inputs
        let lastIndex = 0;
        const elements: JSX.Element[] = [];

        question.blanks.forEach((blank, idx) => {
            const partial = blank.partialWord;
            const start = question.passage.indexOf(partial, lastIndex);
            if (start !== -1) {
                // Add text before
                elements.push(<span key={`txt-${idx}`}>{renderTextWithFormatting(question.passage.substring(lastIndex, start))}</span>);

                // Calculate correct number of underscores based on answer length
                const prefix = partial.replace(/_+/g, '');
                const neededLetters = blank.answer.length - prefix.length;
                const underscoreCount = neededLetters > 0 ? neededLetters : (partial.match(/_/g) || []).length;
                const userAnswer = userBlanks[blank.position] || "";

                // Create visual spacing boxes for each missing letter
                const visualBoxes: JSX.Element[] = [];
                for (let i = 0; i < underscoreCount; i++) {
                    const charValue = userAnswer[prefix.length + i] || '';
                    visualBoxes.push(
                        <span
                            key={`box-${idx}-${i}`}
                            className={`inline-block w-7 h-9 border-b-2 ${charValue
                                ? 'border-cyan-400 bg-cyan-500/10'
                                : 'border-slate-600 bg-slate-800/30'
                                } text-center leading-9 text-white font-medium transition-all duration-200`}
                            title={`Letter ${i + 1} of ${underscoreCount}`}
                        >
                            {charValue}
                        </span>
                    );
                }

                elements.push(
                    <span key={`input-${idx}`} className="inline-flex items-baseline mx-1 relative group">
                        <span className="text-cyan-400 font-semibold">{prefix}</span>
                        <span className="inline-flex gap-0.5 mx-1 cursor-text">
                            {visualBoxes}
                        </span>
                        <input
                            type="text"
                            maxLength={underscoreCount}
                            className="absolute left-0 top-0 w-full h-full opacity-0 cursor-text z-10"
                            value={userAnswer.slice(prefix.length) || ''}
                            onChange={(e) => {
                                const fullWord = prefix + e.target.value.toLowerCase();
                                const newBlanks = { ...userBlanks, [blank.position]: fullWord };
                                onAnswerChange({ ...answers, [question.id]: newBlanks });
                            }}
                            placeholder=""
                            aria-label={`Complete the word: ${prefix} (${underscoreCount} letters)`}
                        />
                        <span className="absolute -top-7 left-0 text-xs text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none bg-slate-900 px-2 py-1 rounded">
                            Click to type • {underscoreCount} {underscoreCount === 1 ? 'letter' : 'letters'}
                        </span>
                    </span>
                );
                lastIndex = start + partial.length;
            }
        });
        // Add remaining text
        elements.push(<span key="txt-end">{renderTextWithFormatting(question.passage.substring(lastIndex))}</span>);

        return (
            <div className="leading-loose text-lg text-slate-300">
                {elements}
                <div className="mt-6 p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
                    <p className="text-sm text-cyan-300 mb-2">💡 Tip: Click on the blank spaces to type your answers</p>
                    <p className="text-xs text-slate-400">Each box represents one letter. The number of boxes shows how many letters you need to type.</p>
                </div>
            </div>
        );
    };

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
    };

    if (!currentQ) {
        return (
            <div className="h-full flex items-center justify-center">
                <div className="glass-panel rounded-2xl p-8 text-center">
                    <p className="text-white">Loading questions...</p>
                </div>
            </div>
        );
    }

    // Determine task type for display
    const taskType = currentQ.taskType === "complete_words" ? "complete_words" : currentQ.taskType;
    const passageContent = currentQ.passage || "";

    // EXACT COPY of layout from ReadingPractice.tsx lines 639-777
    return (
        <div className="min-h-[calc(100vh-4rem)]">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 px-4 py-2 glass-card rounded-xl">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                            <BookOpen className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-sm font-medium text-white">Reading Module {moduleNumber}</span>
                    </div>
                    <span className="text-sm text-slate-400">
                        Question {currentIndex + 1} of {questions.length}
                    </span>
                </div>
                <div className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all ${timeLeft < 60
                        ? "bg-red-500/20 border border-red-500/30 text-red-400"
                        : "glass-card text-white"
                    }`}>
                    <Clock className={`w-4 h-4 ${timeLeft < 60 ? "animate-pulse" : ""}`} />
                    <span className="font-mono text-sm font-medium">{formatTime(timeLeft)}</span>
                </div>
            </div>

            {/* Progress Bar */}
            <div className="h-1.5 bg-slate-800/50 rounded-full mb-6 overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
                    className="h-full bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"
                    transition={{ duration: 0.5 }}
                />
            </div>

            {/* Content Area - EXACT COPY from ReadingPractice */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[calc(100vh-12rem)]">
                {/* Left Panel: Passage */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="glass-panel rounded-2xl p-6 overflow-y-auto"
                >
                    <div className="flex items-center gap-2 mb-4">
                        <div className={`px-3 py-1 rounded-full text-xs font-medium ${taskType === "academic"
                            ? "bg-purple-500/20 text-purple-400"
                            : taskType === "complete_words"
                                ? "bg-cyan-500/20 text-cyan-400"
                                : "bg-emerald-500/20 text-emerald-400"
                            }`}>
                            {taskType === "complete_words"
                                ? "COMPLETE THE WORDS"
                                : taskType.replace('_', ' ').toUpperCase()}
                        </div>
                    </div>

                    {taskType === "complete_words" ? (
                        renderCompleteWords(currentQ as CompleteWordsQuestion)
                    ) : (
                        <div className="prose prose-invert prose-sm max-w-none text-slate-300 whitespace-pre-wrap leading-relaxed">
                            {renderTextWithFormatting(passageContent)}
                        </div>
                    )}
                </motion.div>

                {/* Right Panel: Question & Navigation */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    key={currentQ.id}
                    className="glass-panel rounded-2xl flex flex-col h-full overflow-hidden"
                >
                    {/* Scrollable Content Area */}
                    <div className="flex-1 overflow-y-auto p-6">
                        {taskType === "complete_words" ? (
                            <div className="h-full flex flex-col items-center justify-center text-center p-4">
                                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mb-4">
                                    <PenTool className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Complete the Passage</h3>
                                <p className="text-slate-400 mb-4">
                                    Type the missing letters in the input boxes to complete the words.
                                    Use context clues from the passage!
                                </p>

                                {/* Show blank status */}
                                <div className="mt-4 p-4 rounded-xl bg-white/5 border border-white/10 w-full max-w-sm">
                                    <p className="text-sm text-slate-400 mb-2">Blanks to complete:</p>
                                    <div className="space-y-2">
                                        {(currentQ as CompleteWordsQuestion).blanks.map((blank, idx) => {
                                            const userBlanks = (answers[currentQ.id] as Record<number, string>) || {};
                                            const userAnswer = userBlanks[blank.position] || "";
                                            const hasInput = userAnswer.length > blank.partialWord.replace(/_/g, '').length;

                                            return (
                                                <div key={idx} className="flex items-center justify-between text-sm">
                                                    <span className="text-slate-300">{blank.partialWord}</span>
                                                    <span className={hasInput ? "text-emerald-400" : "text-slate-600"}>
                                                        {hasInput ? "✓" : "○"}
                                                    </span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className="flex justify-between items-start mb-6">
                                    <h3 className="text-lg font-semibold text-white">
                                        {currentQ.taskType === "academic" && currentQ.questions[0]?.question}
                                        {currentQ.taskType === "daily_life" && currentQ.questions[0]?.question}
                                    </h3>
                                </div>

                                <div className="space-y-3">
                                    {(currentQ.taskType === "academic" || currentQ.taskType === "daily_life") && currentQ.questions[0]?.options.map((option: string, idx: number) => {
                                        const letter = String.fromCharCode(65 + idx);
                                        const isSelected = answers[currentQ.id] === letter;
                                        return (
                                            <button
                                                key={idx}
                                                onClick={() => onAnswerChange({ ...answers, [currentQ.id]: letter })}
                                                className={`w-full text-left p-4 rounded-xl border transition-all ${isSelected
                                                    ? "bg-cyan-500/20 border-cyan-500 text-white"
                                                    : "bg-white/5 border-transparent hover:bg-white/10 text-slate-300"
                                                    }`}
                                            >
                                                <span className="font-bold mr-3">{letter}.</span>
                                                {option}
                                            </button>
                                        );
                                    })}
                                </div>
                            </>
                        )}
                    </div>

                    {/* Fixed Navigation Footer */}
                    <div className="p-6 border-t border-white/10 bg-slate-900/20 flex items-center justify-between mt-auto">
                        <button
                            onClick={onPrevious}
                            disabled={currentIndex === 0}
                            className="flex items-center gap-2 text-slate-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed px-3 py-2 rounded-lg hover:bg-white/5 transition-colors"
                            title="Previous Question"
                        >
                            <ChevronLeft className="w-4 h-4" /> Previous
                        </button>

                        <div className="text-xs text-slate-500 font-medium hidden sm:block">
                            Question {currentIndex + 1} of {questions.length}
                        </div>

                        {currentIndex < questions.length - 1 ? (
                            <button
                                onClick={onNext}
                                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white rounded-lg shadow-lg shadow-cyan-500/20 transition-all"
                                title="Next Question"
                            >
                                Next <ChevronRight className="w-4 h-4" />
                            </button>
                        ) : (
                            <button
                                onClick={onFinish}
                                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-400 hover:to-green-400 text-white rounded-lg shadow-lg shadow-emerald-500/20 transition-all"
                                title="Finish Module"
                            >
                                Finish Module {moduleNumber} <ChevronRight className="w-4 h-4" />
                            </button>
                        )}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
