"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mic,
  MicOff,
  Play,
  Square,
  ChevronRight,
  RotateCcw,
  CheckCircle,
  Volume2,
  Clock,
  AlertCircle,
  Sparkles,
  Zap,
  Trophy,
  Headphones,
  MessageSquare,
  Image as ImageIcon,
  Loader2,
} from "lucide-react";
import { SectionBrief } from "@/components/board";
import { LISTEN_AND_REPEAT, SECTIONS, TAKE_AN_INTERVIEW } from "@/data/toefl-2026-blueprint";
import {
  listenRepeatScenarios,
  interviewTopics,
  type ListenRepeatScenario,
  type InterviewTopic,
} from "@/data/questions/speaking-massive";
import { generateAudio, evaluateSpeaking, type SpeakingEvaluationResult } from "@/lib/audio";

type PracticeState = "setup" | "listen_repeat" | "interview" | "recording" | "evaluating" | "feedback" | "review";

type TaskType = "listen_repeat" | "interview";

interface SentenceProgress {
  index: number;
  audioPlayed: boolean;
  recorded: boolean;
  audioBlob?: Blob;
  score: number | null;
  transcript: string;
  evaluationResult?: SpeakingEvaluationResult | null;
}

interface InterviewAnswer {
  questionIndex: number;
  audioBlob: Blob | null;
  audioUrl: string | null;
  score: number | null;
  evaluationResult: SpeakingEvaluationResult | null;
}

export function SpeakingPractice() {
  // Core state
  const [state, setState] = useState<PracticeState>("setup");
  const [currentTask, setCurrentTask] = useState<TaskType>("listen_repeat");

  // Listen & Repeat state
  const [currentScenario, setCurrentScenario] = useState<ListenRepeatScenario | null>(null);
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [sentenceProgress, setSentenceProgress] = useState<SentenceProgress[]>([]);

  // Promise tracking for speedy evaluation
  const evaluationPromisesRef = useRef<Promise<void>[]>([]);

  // Interview state
  const [currentInterview, setCurrentInterview] = useState<InterviewTopic | null>(null);
  const [interviewIndex, setInterviewIndex] = useState(0);
  const [interviewAnswers, setInterviewAnswers] = useState<InterviewAnswer[]>([]);

  // Audio state
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [isLoadingAudio, setIsLoadingAudio] = useState(false);
  const [audioError, setAudioError] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Recording state
  // TOEFL 2026 Format: Listen & Repeat = 12 seconds, Interview = 45 seconds
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  /**
   * The response window for the CURRENT item.
   *
   * Listen and Repeat is tiered by item index on the real test —
   * 8/8/10/10/10/12/12 seconds — because the sentences get longer as the set
   * goes on. This screen used to hold a flat 12 s for all seven, which gives a
   * test taker 50% more time than the exam allows on items 1 and 2 and trains
   * the wrong pacing. The full mock test already tiered it; only this
   * section-practice screen did not.
   */
  const [maxRecordingTime, setMaxRecordingTime] = useState<number>(
    LISTEN_AND_REPEAT.responseWindowSeconds[0]
  );
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const recordingTimerRef = useRef<NodeJS.Timeout | null>(null);
  const isStartingRecording = useRef(false);
  const audioFinishedRef = useRef(false);

  // Audio stage control
  const [currentStage, setCurrentStage] = useState<"waiting" | "playing" | "preparing" | "recording">("waiting");
  const [prepTime, setPrepTime] = useState(0);
  const [prepTimeMax, setPrepTimeMax] = useState(15);
  const prepTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Evaluation state
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [currentEvaluation, setCurrentEvaluation] = useState<SpeakingEvaluationResult | null>(null);

  // Overall progress
  const [overallScores, setOverallScores] = useState<number[]>([]);

  // Total Section Timer (TOEFL 2026 Format: 8 Minutes)
  const [totalTimeLeft, setTotalTimeLeft] = useState(480);
  const totalTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      if (recordingTimerRef.current) {
        clearInterval(recordingTimerRef.current);
      }
      if (mediaRecorderRef.current && mediaRecorderRef.current.state === "recording") {
        mediaRecorderRef.current.stop();
      }
    };
  }, []);

  // Start practice session
  const startPractice = () => {
    // Select random scenario and interview topic
    const randomScenario = listenRepeatScenarios[Math.floor(Math.random() * listenRepeatScenarios.length)];
    const randomInterview = interviewTopics[Math.floor(Math.random() * interviewTopics.length)];

    setCurrentScenario(randomScenario);
    setCurrentInterview(randomInterview);
    setSentenceIndex(0);
    setInterviewIndex(0);

    // Initialize progress tracking
    setSentenceProgress(randomScenario.sentences.map((_, i) => ({
      index: i,
      audioPlayed: false,
      recorded: false,
      score: null,
      transcript: "",
    })));

    setInterviewAnswers(randomInterview.questions.map((_, i) => ({
      questionIndex: i,
      audioBlob: null,
      audioUrl: null,
      score: null,
      evaluationResult: null,
    })));

    setCurrentTask("listen_repeat");
    setState("listen_repeat");
    setOverallScores([]);
    setMaxRecordingTime(LISTEN_AND_REPEAT.responseWindowSeconds[0]);
    setTotalTimeLeft(SECTIONS.speaking.timing.totalSeconds ?? 8 * 60);

    // Reset internal state to prevents bugs on restart
    evaluationPromisesRef.current = [];
    chunksRef.current = [];
    setCurrentStage("waiting");
  };

  // Global Section Timer Logic
  useEffect(() => {
    if (state === "listen_repeat" || state === "interview") {
      // Pause timer during loading to avoid penalizing network speed
      if (!isLoadingAudio && !totalTimerRef.current) {
        totalTimerRef.current = setInterval(() => {
          setTotalTimeLeft(prev => {
            if (prev <= 1) {
              if (totalTimerRef.current) clearInterval(totalTimerRef.current);
              return 0;
            }
            return prev - 1;
          });
        }, 1000);
      } else if (isLoadingAudio && totalTimerRef.current) {
        clearInterval(totalTimerRef.current);
        totalTimerRef.current = null;
      }
    } else {
      if (totalTimerRef.current) {
        clearInterval(totalTimerRef.current);
        totalTimerRef.current = null;
      }
    }

    return () => {
      if (totalTimerRef.current) clearInterval(totalTimerRef.current);
    };
  }, [state, isLoadingAudio]);

  // Play audio using OpenAI TTS
  const playAudio = useCallback(async (text: string, voice: string = "narrator") => {
    setIsLoadingAudio(true);
    setAudioError(null);

    try {
      const audioUrl = await generateAudio(text, { voice: voice as any });

      if (audioRef.current) {
        audioRef.current.pause();
      }

      audioRef.current = new Audio(audioUrl);

      audioRef.current.onplay = () => {
        setIsPlayingAudio(true);
        setIsLoadingAudio(false);
        setCurrentStage("playing");
      };

      audioRef.current.onended = () => {
        setIsPlayingAudio(false);
        // Mark that audio has finished - this is the trigger for recording
        audioFinishedRef.current = true;

        // Mark sentence as played
        if (currentTask === "listen_repeat") {
          setSentenceProgress(prev => {
            const updated = [...prev];
            if (updated[sentenceIndex]) {
              updated[sentenceIndex] = { ...updated[sentenceIndex], audioPlayed: true };
            }
            return updated;
          });
        }

        // Transition to recording stage - recording will start via useEffect
        setCurrentStage("recording");
      };

      audioRef.current.onerror = (e) => {
        console.error("Audio playback error:", e);
        setAudioError("Failed to play audio. Please try again.");
        setIsLoadingAudio(false);
        setIsPlayingAudio(false);
      };

      await audioRef.current.play();
    } catch (error) {
      setIsLoadingAudio(false);
      setAudioError("Failed to generate audio. Please check your connection.");
      console.error("Audio error:", error);
    }
  }, [currentTask, sentenceIndex]);

  // Preparation Timer
  const startPrepTimer = (duration: number) => {
    setCurrentStage("preparing");
    setPrepTime(duration);
    setPrepTimeMax(duration);

    if (prepTimerRef.current) clearInterval(prepTimerRef.current);

    prepTimerRef.current = setInterval(() => {
      setPrepTime(prev => {
        if (prev <= 1) {
          if (prepTimerRef.current) clearInterval(prepTimerRef.current);
          startRecording();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  // Start recording
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream, {
        mimeType: "audio/webm;codecs=opus",
      });

      chunksRef.current = [];
      mediaRecorderRef.current = mediaRecorder;

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(chunksRef.current, { type: "audio/webm" });
        stream.getTracks().forEach(track => track.stop());

        // Handle the recording based on task type
        if (currentTask === "listen_repeat") {
          await handleListenRepeatRecording(audioBlob);
        } else {
          await handleInterviewRecording(audioBlob);
        }
      };

      mediaRecorder.start();
      setIsRecording(true);
      setCurrentStage("recording");
      setRecordingTime(0);

      // Start recording timer
      recordingTimerRef.current = setInterval(() => {
        setRecordingTime(prev => {
          if (prev >= maxRecordingTime - 1) {
            stopRecording();
            return maxRecordingTime;
          }
          return prev + 1;
        });
      }, 1000);

    } catch (error) {
      console.error("Recording error:", error);
      setAudioError("Could not access microphone. Please check permissions.");
    }
  };

  // Stop recording
  const stopRecording = () => {
    if (recordingTimerRef.current) {
      clearInterval(recordingTimerRef.current);
      recordingTimerRef.current = null;
    }

    if (mediaRecorderRef.current && mediaRecorderRef.current.state === "recording") {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      // CRITICAL: Reset audioFinished to prevent recording trigger from firing again
      // before goToNext() is called via the onstop handler
      audioFinishedRef.current = false;
    }
  };

  // Handle Listen & Repeat recording - start background evaluation
  const handleListenRepeatRecording = async (audioBlob: Blob) => {
    if (!currentScenario) return;

    // Save index locally for the closure
    const currentIndex = sentenceIndex;
    const sentenceText = currentScenario.sentences[currentIndex];

    // Update progress - mark as recorded immediately
    setSentenceProgress(prev => {
      const updated = [...prev];
      updated[currentIndex] = {
        ...updated[currentIndex],
        recorded: true,
        audioBlob,
        score: null,
        transcript: "",
      };
      return updated;
    });

    // Start background evaluation
    const evalPromise = (async () => {
      try {
        const result = await evaluateSpeaking(
          audioBlob,
          "repeat",
          "Repeat the sentence accurately",
          sentenceText,
          10
        );

        setSentenceProgress(prev => {
          const updated = [...prev];
          updated[currentIndex] = {
            ...updated[currentIndex],
            score: result.overall_score,
            transcript: result.transcript,
            evaluationResult: result,
          };
          return updated;
        });
      } catch (error) {
        console.error(`Error background evaluating sentence ${currentIndex}:`, error);
        setSentenceProgress(prev => {
          const updated = [...prev];
          updated[currentIndex] = {
            ...updated[currentIndex],
            score: 0,
            transcript: "Evaluation failed.",
            evaluationResult: null,
          };
          return updated;
        });
      }
    })();

    evaluationPromisesRef.current.push(evalPromise);

    // Move to next sentence or task immediately
    goToNext();
  };

  // Auto-trigger audio on state change
  useEffect(() => {
    if (state === "listen_repeat" && currentScenario) {
      const progress = sentenceProgress[sentenceIndex];
      // Safety check: ensure progress exists and we're in waiting stage
      if (progress && !progress.recorded && !isPlayingAudio && !isLoadingAudio && currentStage === "waiting" && !audioFinishedRef.current) {
        playAudio(currentScenario.sentences[sentenceIndex], currentScenario.voice);
      }
    } else if (state === "interview" && currentInterview) {
      // Safety check: ensure question exists
      const question = currentInterview.questions[interviewIndex];
      if (question && !isPlayingAudio && !isLoadingAudio && currentStage === "waiting" && !audioFinishedRef.current) {
        playAudio(question.question, "interviewer");
      }
    }
  }, [state, sentenceIndex, interviewIndex, currentScenario, currentInterview, currentStage, sentenceProgress, isPlayingAudio, isLoadingAudio, playAudio]);

  // Trigger recording ONLY when audio has finished and stage is recording
  useEffect(() => {
    // Only start recording if:
    // 1. Stage is recording
    // 2. Audio has actually finished (ref is true)
    // 3. Not already recording
    // 4. Not in the process of starting
    // 5. Audio is not playing or loading
    if (
      currentStage === "recording" &&
      audioFinishedRef.current &&
      !isRecording &&
      !isStartingRecording.current &&
      !isPlayingAudio &&
      !isLoadingAudio
    ) {
      isStartingRecording.current = true;
      startRecording().finally(() => {
        isStartingRecording.current = false;
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentStage, isRecording, isPlayingAudio, isLoadingAudio]);

  // Handle Interview recording - start background evaluation
  const handleInterviewRecording = async (audioBlob: Blob) => {
    if (!currentInterview) return;

    const currentIndex = interviewIndex;
    const questionObj = currentInterview.questions[currentIndex];
    const audioUrl = URL.createObjectURL(audioBlob);

    // Update answers - mark as recorded
    setInterviewAnswers(prev => {
      const updated = [...prev];
      updated[currentIndex] = {
        ...updated[currentIndex],
        audioBlob,
        audioUrl,
        score: null,
        evaluationResult: null,
      };
      return updated;
    });

    // Start background evaluation
    const evalPromise = (async () => {
      try {
        const result = await evaluateSpeaking(
          audioBlob,
          "interview",
          questionObj.question,
          undefined,
          45
        );

        setInterviewAnswers(prev => {
          const updated = [...prev];
          updated[currentIndex] = {
            ...updated[currentIndex],
            score: result.overall_score,
            evaluationResult: result,
          };
          return updated;
        });
      } catch (error) {
        console.error(`Error background evaluating interview ${currentIndex}:`, error);
        setInterviewAnswers(prev => {
          const updated = [...prev];
          updated[currentIndex] = {
            ...updated[currentIndex],
            score: 0,
            evaluationResult: null,
          };
          return updated;
        });
      }
    })();

    evaluationPromisesRef.current.push(evalPromise);

    // Move to next question or finish
    goToNext();
  };

  // Move to next item
  const goToNext = () => {
    // Clear any timers
    if (prepTimerRef.current) clearInterval(prepTimerRef.current);
    if (recordingTimerRef.current) {
      clearInterval(recordingTimerRef.current);
      recordingTimerRef.current = null;
    }

    // Stop any ongoing recording
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === "recording") {
      // Don't trigger onstop handler since we're moving to next
      mediaRecorderRef.current.onstop = null;
      mediaRecorderRef.current.stop();
      mediaRecorderRef.current = null;
    }

    // Reset recording state
    setIsRecording(false);
    isStartingRecording.current = false;
    audioFinishedRef.current = false;  // Reset so next question waits for audio
    setCurrentStage("waiting");

    if (currentTask === "listen_repeat" && currentScenario) {
      if (sentenceIndex < currentScenario.sentences.length - 1) {
        const next = sentenceIndex + 1;
        setSentenceIndex(next);
        setState("listen_repeat");
        setCurrentEvaluation(null);
        // Tiered by item index: 8/8/10/10/10/12/12 seconds.
        setMaxRecordingTime(
          LISTEN_AND_REPEAT.responseWindowSeconds[next] ??
            LISTEN_AND_REPEAT.responseWindowSeconds[LISTEN_AND_REPEAT.responseWindowSeconds.length - 1]
        );
      } else {
        // Move to interview task
        setCurrentTask("interview");
        setState("interview");
        setCurrentEvaluation(null);
        setMaxRecordingTime(TAKE_AN_INTERVIEW.responseSeconds);
      }
    } else if (currentTask === "interview" && currentInterview) {
      if (interviewIndex < currentInterview.questions.length - 1) {
        setInterviewIndex(prev => prev + 1);
        setState("interview");
        setCurrentEvaluation(null);
      } else {
        // All recordings complete - now evaluate everything
        evaluateAllRecordings();
      }
    }
  };

  // Evaluate all recordings at the end (awaits pending ones)
  const evaluateAllRecordings = async () => {
    setState("evaluating");
    setIsEvaluating(true);

    try {
      // Wait for all background evaluations to finish
      await Promise.all(evaluationPromisesRef.current);

      // Short delay to ensure state updates have settled
      await new Promise(resolve => setTimeout(resolve, 800));

      // Collect all scores for the final average
      const allScores: number[] = [];

      // Use functional updates or just wait for the latest state
      // Actually, it's safer to re-derive from current state since we just settled promises
      setState("review");
    } catch (error) {
      console.error("Evaluation error:", error);
      setState("review");
    } finally {
      setIsEvaluating(false);
    }
  };

  // Calculate overall score (average of all valid scores)
  const calculateOverallScore = () => {
    const scores = [
      ...sentenceProgress.map(p => p.score),
      ...interviewAnswers.map(a => a.score)
    ].filter((s): s is number => s !== null && s > 0);

    if (scores.length === 0) return 0;
    const avg = scores.reduce((a, b) => a + b, 0) / scores.length;
    return Math.round(avg * 2) / 2; // Round to nearest 0.5
  };

  // Format time
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  // Get score color
  const getScoreColor = (score: number) => {
    if (score >= 5) return "text-platform-400";
    if (score >= 4) return "text-amber-400";
    if (score >= 3) return "text-amber-400";
    return "text-signal-400";
  };

  // ==================== SETUP SCREEN ====================
  if (state === "setup") {
    return (
      <SectionBrief
        icon={Mic}
        title="Speaking"
        standfirst="Eleven items recorded through your microphone, then scored on delivery, language use and topic development. The 2026 section has no integrated tasks and no preparation time."
        manifest={[
          { field: "Duration", value: "~8", note: "Minutes across all eleven items" },
          { field: "Items", value: "11", note: "7 Listen and Repeat, then a 4-question interview" },
          { field: "Preparation", value: "NONE", note: "Recording begins the moment a task opens" },
          { field: "Scoring", value: "1–6", note: "AI band score on delivery, language use and topic development" },
        ]}
        tasks={[
          { name: "Listen and Repeat", detail: "Repeat seven sentences as accurately as you can", icon: Volume2 },
          { name: "Take an Interview", detail: "Four questions on one theme, forty-five seconds for each", icon: MessageSquare },
        ]}
        action="Start speaking"
        onAction={startPractice}
        footnote="Your browser will ask for microphone access. Recording stops on its own when the response clock runs out."
      />
    );
  }

  // ==================== LISTEN & REPEAT TASK ====================
  if (state === "listen_repeat" && currentScenario) {
    const currentSentence = currentScenario.sentences[sentenceIndex];
    const progress = sentenceProgress[sentenceIndex];

    return (
      <div className="min-h-[calc(100vh-4rem)]">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 glass-card rounded-panel">
              <div className="glass-plate w-8 h-8 rounded-full flex items-center justify-center">
                <Volume2 className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-medium text-white">Listen & Repeat</span>
            </div>
            <span className="text-sm text-steel-400">
              Sentence {sentenceIndex + 1} of {currentScenario.sentences.length}
            </span>
          </div>

          <div className={`flex items-center gap-2 px-4 py-2 glass-card rounded-panel border transition-colors ${totalTimeLeft < 60 ? "border-signal-500/50 text-signal-400" : "border-white/5 text-white"}`}>
            <Clock className={`w-4 h-4 ${totalTimeLeft < 60 ? "text-signal-400" : "text-amber-400"}`} />
            <span className="text-sm font-bold font-mono">
              Section Time: {formatTime(totalTimeLeft)}
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="h-1.5 bg-steel-800/50 rounded-full mb-6 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${((sentenceIndex + 1) / currentScenario.sentences.length) * 100}%` }}
            className="bg-amber-400 h-full rounded-full"
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>

        {/* Visual Context */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-panel rounded-panel p-6 mb-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <ImageIcon className="w-5 h-5 text-amber-400" />
            <h3 className="font-semibold text-white">{currentScenario.context}</h3>
          </div>
          <p className="text-sm text-steel-400 mb-4">{currentScenario.description}</p>

          {/* Placeholder for visual context */}
          <div className="w-full h-48 bg-steel-800/50 rounded-panel flex items-center justify-center border border-steel-700/50">
            <div className="text-center">
              <ImageIcon className="w-12 h-12 text-steel-600 mx-auto mb-2" />
              <p className="text-xs text-steel-500">{currentScenario.imageDescription}</p>
            </div>
          </div>
        </motion.div>

        {/* Audio & Recording Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-panel rounded-panel p-6"
        >
          {/* Step 1: Listen */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStage === "preparing" || currentStage === "recording" ? "bg-platform-500" : "bg-amber-500"}`}>
                {currentStage === "preparing" || currentStage === "recording" ? <CheckCircle className="w-4 h-4 text-white" /> : <span className="text-white text-sm font-bold">1</span>}
              </div>
              <h4 className="font-medium text-white">Listen to the sentence</h4>
            </div>

            <div className={`p-6 rounded-panel border flex items-center flex-col gap-4 transition-all ${currentStage === "playing" ? "bg-amber-500/10 border-amber-500/30" : "bg-steel-800/30 border-steel-700/50"
 }`}>
              {isLoadingAudio ? (
                <div className="flex flex-col items-center gap-2">
                  <Loader2 className="w-8 h-8 text-amber-400 animate-spin" />
                  <p className="text-xs text-steel-400">Fetching transcription and generating audio...</p>
                </div>
              ) : currentStage === "playing" ? (
                <div className="flex flex-col items-center gap-2">
                  <div className="flex items-center gap-2 text-amber-400">
                    <Volume2 className="w-6 h-6 animate-pulse" />
                    <span className="font-bold">Playing Prompt</span>
                  </div>
                  <div className="w-48 h-1.5 bg-steel-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-amber-500"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 5 }} // Approximation
                    />
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-2 text-platform-500">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-sm">Audio Finished</span>
                </div>
              )}
            </div>
          </div>

          {/* Step 2: Prepare or Record */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStage === "recording" ? "bg-platform-500" : "bg-steel-600"
 }`}>
                {currentStage === "recording" ? <CheckCircle className="w-4 h-4 text-white" /> : <span className="text-white text-sm font-bold">2</span>}
              </div>
              <h4 className="font-medium text-white">
                Speak Now
              </h4>
            </div>

            {currentStage === "recording" ? (
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-signal-500 flex items-center justify-center animate-pulse">
                    <Mic className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-mono text-white mb-2">
                    {formatTime(recordingTime)} / {formatTime(maxRecordingTime)}
                  </p>
                  <p className="text-sm text-steel-400">
                    Recording &mdash; this item allows {maxRecordingTime} seconds
                  </p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={stopRecording}
                  className="w-full px-6 py-4 bg-signal-500 hover:bg-signal-400 text-white font-medium rounded-panel flex items-center justify-center gap-2"
                >
                  <Square className="w-5 h-5" />
                  Stop Recording
                </motion.button>
              </div>
            ) : (
              <div className="p-6 rounded-panel bg-steel-800/30 border border-steel-700/50 text-center grayscale opacity-50">
                <p className="text-sm text-steel-500 italic">Waiting for audio to finish...</p>
              </div>
            )}
          </div>

          {audioError && (
            <div className="mt-4 p-3 bg-signal-500/10 border border-signal-500/30 rounded-panel flex items-center gap-2 text-signal-400 text-sm">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              {audioError}
            </div>
          )}
        </motion.div>
      </div>
    );
  }

  // ==================== INTERVIEW TASK ====================
  if (state === "interview" && currentInterview) {
    const currentQuestionObj = currentInterview.questions[interviewIndex];
    const currentQuestion = currentQuestionObj.question;

    return (
      <div className="min-h-[calc(100vh-4rem)]">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 glass-card rounded-panel">
              <div className="glass-plate w-8 h-8 rounded-full flex items-center justify-center">
                <MessageSquare className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-medium text-white">Interview</span>
            </div>
            <span className="text-sm text-steel-400">
              Question {interviewIndex + 1} of {currentInterview.questions.length}
            </span>
          </div>

          <div className={`flex items-center gap-2 px-4 py-2 glass-card rounded-panel border transition-colors ${totalTimeLeft < 60 ? "border-signal-500/50 text-signal-400" : "border-white/5 text-white"}`}>
            <Clock className={`w-4 h-4 ${totalTimeLeft < 60 ? "text-signal-400" : "text-amber-400"}`} />
            <span className="text-sm font-bold font-mono">
              Section Time: {formatTime(totalTimeLeft)}
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="h-1.5 bg-steel-800/50 rounded-full mb-6 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${((interviewIndex + 1) / currentInterview.questions.length) * 100}%` }}
            className="bg-amber-400 h-full rounded-full"
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>

        {/* Topic */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-panel rounded-panel p-6 mb-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <MessageSquare className="w-5 h-5 text-amber-400" />
            <h3 className="font-semibold text-white">{currentInterview.topic}</h3>
          </div>

          <div className="p-4 bg-amber-500/10 border border-amber-500/30 rounded-panel">
            <p className="text-lg text-white font-medium">{currentQuestion}</p>
          </div>

          <p className="mt-4 text-sm text-steel-400">
            You have <strong className="text-amber-400">45 seconds</strong> to answer. There is no preparation time.
          </p>
        </motion.div>

        {/* Stages Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-panel rounded-panel p-6"
        >
          {isLoadingAudio ? (
            <div className="flex flex-col items-center justify-center p-8 gap-4 border border-amber-500/20 rounded-panel bg-amber-500/5">
              <Loader2 className="w-8 h-8 text-amber-500 animate-spin" />
              <p className="text-sm text-steel-400">Loading interviewer's question...</p>
            </div>
          ) : currentStage === "playing" ? (
            <div className="flex flex-col items-center justify-center p-8 gap-4 border border-amber-500/20 rounded-panel bg-amber-500/5">
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-amber-500/20 flex items-center justify-center border border-amber-500/30">
                  <Volume2 className="w-8 h-8 text-amber-400 animate-pulse" />
                </div>
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-amber-500"
                  initial={{ scale: 1, opacity: 0.5 }}
                  animate={{ scale: 1.5, opacity: 0 }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                />
              </div>
              <p className="text-sm font-bold text-amber-400 uppercase tracking-widest">Listening to Question</p>
            </div>
          ) : currentStage === "recording" ? (
            <div className="space-y-6">
              <div className="flex flex-col items-center justify-center p-4">
                <div className="w-20 h-20 rounded-full bg-signal-500 flex items-center justify-center animate-pulse mb-6 shadow-lg">
                  <Mic className="w-10 h-10 text-white" />
                </div>

                <p className={`text-4xl font-mono font-bold mb-2 ${recordingTime >= maxRecordingTime - 5 ? "text-signal-400" : "text-white"}`}>
                  {formatTime(recordingTime)} / {formatTime(maxRecordingTime)}
                </p>
                <div className="w-full max-w-sm h-2.5 bg-steel-800 rounded-full overflow-hidden relative border border-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(recordingTime / maxRecordingTime) * 100}%` }}
                    className={`h-full rounded-full ${recordingTime >= maxRecordingTime - 5 ? "bg-signal-500" : "bg-amber-500"}`}
                    transition={{ duration: 1, ease: 'linear' }}
                  />
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={stopRecording}
                className="w-full px-6 py-4 bg-signal-500 hover:bg-signal-400 text-white font-bold rounded-panel flex items-center justify-center gap-3 transition-all shadow-lg"
              >
                <Square className="w-5 h-5 fill-current" />
                Stop Recording
              </motion.button>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center p-8 gap-4 border border-steel-700 rounded-panel bg-steel-800/20 grayscale opacity-40">
              <div className="w-12 h-12 rounded-full bg-steel-700 flex items-center justify-center">
                <Play className="w-6 h-6 text-steel-500" />
              </div>
              <p className="text-xs text-steel-500 font-medium italic">Preparing task interface...</p>
            </div>
          )}
        </motion.div>

        {audioError && (
          <div className="mt-4 p-3 bg-signal-500/10 border border-signal-500/30 rounded-panel flex items-center gap-2 text-signal-400 text-sm">
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            {audioError}
          </div>
        )}
      </div>
    );
  }

  // ==================== EVALUATING STATE ====================
  if (state === "evaluating") {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-panel rounded-panel p-8 text-center max-w-md"
        >
          <div className="glass-plate w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center">
            <Loader2 className="w-10 h-10 text-white animate-spin" />
          </div>
          <h2 className="text-xl font-bold text-white mb-2">Evaluating All Responses</h2>
          <p className="text-steel-400">
            Our AI is analyzing all your recordings. This may take a moment...
          </p>
        </motion.div>
      </div>
    );
  }



  // ==================== REVIEW STATE ====================
  if (state === "review") {
    const overallScore = calculateOverallScore();

    return (
      <div className="min-h-[calc(100vh-4rem)]">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-panel rounded-panel p-8 mb-6"
        >
          {/* Score Header */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="glass-plate inline-flex items-center justify-center w-20 h-20 rounded-full mb-4 shadow-lg"
            >
              <Trophy className="w-10 h-10 text-white" />
            </motion.div>
            <h1 className="text-3xl font-bold text-white mb-2">Speaking Practice Complete!</h1>
            <p className="text-steel-400">Here's your performance summary</p>
          </div>

          {/* Score Display */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="glass-card rounded-panel p-6 text-center"
            >
              <p className={`text-4xl font-bold mb-1 ${getScoreColor(overallScore)}`}>
                {overallScore.toFixed(1)}
              </p>
              <p className="text-sm text-steel-400">Overall Band Score</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="glass-card rounded-panel p-6 text-center"
            >
              <p className="text-4xl font-bold text-white mb-1">
                {sentenceProgress.filter(p => p.recorded).length}
              </p>
              <p className="text-sm text-steel-400">Sentences Repeated</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="glass-card rounded-panel p-6 text-center"
            >
              <p className="text-4xl font-bold text-white mb-1">
                {interviewAnswers.filter(a => a.score !== null).length}
              </p>
              <p className="text-sm text-steel-400">Questions Answered</p>
            </motion.div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setState("setup")}
              className="bg-amber-400 flex items-center justify-center gap-2 px-6 py-3 text-concourse-deep rounded-panel shadow-lg font-board uppercase tracking-[0.14em] font-bold"
            >
              <RotateCcw className="w-5 h-5" />
              Practice Again
            </motion.button>
          </div>
        </motion.div>

        {/* Detail Review */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="glass-panel rounded-panel p-6"
        >
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            Response Details
          </h2>

          {/* Listen & Repeat Results */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-amber-400 mb-4 px-2">Listen & Repeat</h3>
            <div className="space-y-4">
              {sentenceProgress.map((progress, index) => (
                <div key={index} className="glass-card rounded-panel overflow-hidden border border-white/5">
                  <div className="p-4 flex items-center justify-between bg-white/[0.02]">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${progress.recorded ? "bg-platform-500/20" : "bg-steel-700"}`}>
                        {progress.recorded ? <CheckCircle className="w-4 h-4 text-platform-400" /> : <span className="text-xs text-steel-500">{index + 1}</span>}
                      </div>
                      <span className="text-sm font-medium text-white">Sentence {index + 1}</span>
                    </div>
                    {progress.score !== null && (
                      <div className="flex items-center gap-3">
                        <span className={`text-lg font-bold ${getScoreColor(progress.score)}`}>{progress.score.toFixed(1)}</span>
                      </div>
                    )}
                  </div>

                  {progress.evaluationResult && (
                    <div className="p-4 border-t border-white/5 space-y-4">
                      <div>
                        <p className="text-[10px] uppercase tracking-wider text-steel-500 font-bold mb-1">Target Text</p>
                        <p className="text-sm text-steel-300 italic">"{currentScenario?.sentences[index]}"</p>
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-wider text-steel-500 font-bold mb-1">Your Transcription</p>
                        <p className="text-sm text-white">"{progress.transcript}"</p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                        <div className="p-3 rounded-flap bg-platform-500/5 border border-platform-500/10">
                          <p className="text-[10px] uppercase tracking-wider text-platform-500 font-bold mb-2 flex items-center gap-1">
                            <CheckCircle className="w-3 h-3" /> Strengths
                          </p>
                          <ul className="text-xs text-steel-300 space-y-1">
                            {progress.evaluationResult.feedback.strengths?.slice(0, 2).map((s: string, i: number) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-platform-500 mt-1">•</span>
                                {s}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="p-3 rounded-flap bg-signal-500/5 border border-signal-500/10">
                          <p className="text-[10px] uppercase tracking-wider text-signal-500 font-bold mb-2 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> Improvements
                          </p>
                          <ul className="text-xs text-steel-300 space-y-1">
                            {progress.evaluationResult.feedback.improvements?.slice(0, 2).map((s: string, i: number) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-signal-500 mt-1">•</span>
                                {s}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Interview Results */}
          <div>
            <h3 className="text-lg font-semibold text-amber-400 mb-4 px-2">Interview</h3>
            <div className="space-y-4">
              {interviewAnswers.map((answer, index) => (
                <div key={index} className="glass-card rounded-panel overflow-hidden border border-white/5">
                  <div className="p-4 flex items-center justify-between bg-white/[0.02]">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${answer.score !== null ? "bg-platform-500/20" : "bg-steel-700"}`}>
                        {answer.score !== null ? <CheckCircle className="w-4 h-4 text-platform-400" /> : <span className="text-xs text-steel-500">{index + 1}</span>}
                      </div>
                      <span className="text-sm font-medium text-white">Question {index + 1}</span>
                    </div>
                    {answer.score !== null && (
                      <span className={`text-lg font-bold ${getScoreColor(answer.score)}`}>{answer.score.toFixed(1)}</span>
                    )}
                  </div>

                  {answer.evaluationResult && (
                    <div className="p-4 border-t border-white/5 space-y-4">
                      <div>
                        <p className="text-[10px] uppercase tracking-wider text-steel-500 font-bold mb-1">Question</p>
                        <p className="text-sm text-steel-300 italic">"{currentInterview?.questions?.[index]?.question || "Question unavailable"}"</p>
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-wider text-steel-500 font-bold mb-1">AI Feedback</p>
                        <p className="text-sm text-white leading-relaxed">{answer.evaluationResult.feedback?.fluency_notes || "Feedback pending..."}</p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                        <div className="p-3 rounded-flap bg-platform-500/5 border border-platform-500/10">
                          <p className="text-[10px] uppercase tracking-wider text-platform-500 font-bold mb-1 flex items-center gap-1">
                            <CheckCircle className="w-3 h-3" /> Key Strengths
                          </p>
                          <ul className="text-xs text-steel-300 space-y-1">
                            {answer.evaluationResult.feedback?.strengths?.map((s: string, i: number) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-platform-500 mt-1">•</span>
                                {s}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="p-3 rounded-flap bg-amber-500/5 border border-amber-500/10">
                          <p className="text-[10px] uppercase tracking-wider text-amber-500 font-bold mb-1 flex items-center gap-1">
                            <Sparkles className="w-3 h-3" /> Points to Improve
                          </p>
                          <ul className="text-xs text-steel-300 space-y-1">
                            {answer.evaluationResult.feedback?.improvements?.map((s: string, i: number) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-amber-500 mt-1">•</span>
                                {s}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  return null;
}
