// Audio utilities for TOEFL practice platform
// Handles TTS requests with caching

const audioCache = new Map<string, string>();

export type VoiceType =
  | "narrator"        // Deep, authoritative - for announcements/lectures
  | "female_student"   // Warm, friendly (Main)
  | "male_student"     // Natural, conversational (Main)
  | "female_student_2" // Higher pitch, energetic
  | "male_student_2"   // Clear, professional
  | "female_academic"  // Clear, articulate (Professor/Scholar)
  | "male_academic"    // Authoritative, academic (Professor/Scholar)
  | "professor"       // Expressive, clear
  | "interviewer"     // Neutral, professional
  | "guide";          // Soft, welcoming - for tour/orientation

interface TTSOptions {
  voice?: VoiceType;
  speed?: number;
  useCache?: boolean;
}

// Generate cache key from text and options
function getCacheKey(text: string, options: TTSOptions): string {
  return `${text}|${options.voice || "narrator"}|${options.speed || 1.0}`;
}

// Generate audio from text using OpenAI TTS API
export async function generateAudio(
  text: string,
  options: TTSOptions = {}
): Promise<string> {
  const { voice = "narrator", speed = 1.0, useCache = true } = options;

  // Check cache first
  const cacheKey = getCacheKey(text, options);
  if (useCache && audioCache.has(cacheKey)) {
    return audioCache.get(cacheKey)!;
  }

  try {
    const response = await fetch("/api/tts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text, voice, speed }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || "Failed to generate audio");
    }

    // Get audio blob and create URL
    const audioBlob = await response.blob();
    const audioUrl = URL.createObjectURL(audioBlob);

    // Cache the URL
    if (useCache) {
      audioCache.set(cacheKey, audioUrl);
    }

    return audioUrl;
  } catch (error) {
    console.error("Audio generation error:", error);
    throw error;
  }
}

// Pre-generate multiple audio clips in parallel
export async function preloadAudio(
  texts: Array<{ text: string; options?: TTSOptions }>
): Promise<Map<string, string>> {
  const results = new Map<string, string>();

  const promises = texts.map(async ({ text, options = {} }) => {
    try {
      const url = await generateAudio(text, options);
      results.set(text, url);
    } catch (error) {
      console.error(`Failed to preload audio for: ${text.substring(0, 50)}...`);
    }
  });

  await Promise.all(promises);
  return results;
}

// Clean up cached audio URLs to prevent memory leaks
export function clearAudioCache(): void {
  audioCache.forEach((url) => {
    URL.revokeObjectURL(url);
  });
  audioCache.clear();
}

// Revoke a specific audio URL
export function revokeAudioUrl(url: string): void {
  URL.revokeObjectURL(url);
  // Remove from cache if present
  for (const [key, value] of Array.from(audioCache.entries())) {
    if (value === url) {
      audioCache.delete(key);
      break;
    }
  }
}

// Speaking evaluation types
export interface SpeakingEvaluationResult {
  overall_score: number;
  delivery_score: number;
  language_score: number;
  content_score: number;
  feedback: {
    strengths: string[];
    improvements: string[];
    pronunciation_notes: string;
    fluency_notes: string;
    grammar_notes: string;
    vocabulary_notes: string;
  };
  transcript_accuracy: number | null;
  word_count: number;
  speech_rate_wpm: number;
  transcript: string;
}

// Evaluate speaking response using AI
export async function evaluateSpeaking(
  audioBlob: Blob,
  taskType: "repeat" | "interview",
  prompt: string,
  expectedText?: string,
  duration?: number
): Promise<SpeakingEvaluationResult> {
  const formData = new FormData();
  formData.append("audio", audioBlob, "recording.webm");
  formData.append("taskType", taskType);
  formData.append("prompt", prompt);
  if (expectedText) {
    formData.append("expectedText", expectedText);
  }
  if (duration) {
    formData.append("duration", duration.toString());
  }

  const response = await fetch("/api/evaluate/speaking", {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Failed to evaluate speaking");
  }

  return response.json();
}

// Audio player state management
export interface AudioPlayerState {
  isPlaying: boolean;
  isLoading: boolean;
  hasPlayed: boolean;
  progress: number;
  error: string | null;
}

// Create a managed audio player
export function createAudioPlayer(onStateChange: (state: AudioPlayerState) => void) {
  let audio: HTMLAudioElement | null = null;
  let state: AudioPlayerState = {
    isPlaying: false,
    isLoading: false,
    hasPlayed: false,
    progress: 0,
    error: null,
  };

  const updateState = (updates: Partial<AudioPlayerState>) => {
    state = { ...state, ...updates };
    onStateChange(state);
  };

  return {
    async play(audioUrl: string, allowReplay = false) {
      if (state.hasPlayed && !allowReplay) {
        return; // TOEFL rule: can only play once
      }

      updateState({ isLoading: true, error: null });

      try {
        if (audio) {
          audio.pause();
          audio.src = "";
        }

        audio = new Audio(audioUrl);

        audio.onloadeddata = () => {
          updateState({ isLoading: false });
        };

        audio.onplay = () => {
          updateState({ isPlaying: true, progress: 0 });
        };

        audio.ontimeupdate = () => {
          if (audio && audio.duration) {
            updateState({ progress: (audio.currentTime / audio.duration) * 100 });
          }
        };

        audio.onended = () => {
          updateState({ isPlaying: false, hasPlayed: true, progress: 100 });
        };

        audio.onerror = () => {
          updateState({
            isLoading: false,
            isPlaying: false,
            error: "Failed to play audio"
          });
        };

        await audio.play();
      } catch (error) {
        updateState({
          isLoading: false,
          error: error instanceof Error ? error.message : "Failed to play audio"
        });
      }
    },

    pause() {
      if (audio) {
        audio.pause();
        updateState({ isPlaying: false });
      }
    },

    stop() {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
        updateState({ isPlaying: false, progress: 0 });
      }
    },

    reset() {
      if (audio) {
        audio.pause();
        audio.src = "";
        audio = null;
      }
      updateState({
        isPlaying: false,
        isLoading: false,
        hasPlayed: false,
        progress: 0,
        error: null,
      });
    },

    getState() {
      return state;
    },
  };
}
