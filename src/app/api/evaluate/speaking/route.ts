import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// TOEFL Speaking Rubric based on ETS criteria
const SPEAKING_RUBRIC = `
You are an expert TOEFL Speaking evaluator. Evaluate the response using ETS scoring criteria on a 1-6 band scale (0.5 increments).

SCORING CRITERIA:

For Listen & Repeat tasks:
- Score 6.0: Response is fully intelligible and an exact repetition of the prompt
- Score 5.0-5.5: Response is intelligible with minor variations
- Score 4.0-4.5: Response is mostly intelligible with some errors
- Score 3.0-3.5: Response has noticeable errors affecting intelligibility
- Score 2.0-2.5: Response is difficult to understand
- Score 1.0-1.5: Response is largely unintelligible

For Interview tasks, evaluate:
1. DELIVERY (30%): Pronunciation clarity, natural pacing, fluency, minimal hesitations
2. LANGUAGE USE (30%): Grammar accuracy, vocabulary range, appropriate word choice
3. TOPIC DEVELOPMENT (40%): Relevance, coherence, logical organization, supporting details

Provide your response in this exact JSON format:
{
  "overall_score": <number between 1.0 and 6.0>,
  "delivery_score": <number between 1.0 and 6.0>,
  "language_score": <number between 1.0 and 6.0>,
  "content_score": <number between 1.0 and 6.0>,
  "feedback": {
    "strengths": ["<strength 1>", "<strength 2>"],
    "improvements": ["<area 1>", "<area 2>"],
    "pronunciation_notes": "<specific pronunciation feedback>",
    "fluency_notes": "<specific fluency feedback>",
    "grammar_notes": "<specific grammar feedback>",
    "vocabulary_notes": "<specific vocabulary feedback>"
  },
  "transcript_accuracy": <number 0-100 for repeat tasks, null for interview>,
  "word_count": <number of words spoken>,
  "speech_rate_wpm": <words per minute>
}
`;

interface EvaluationResult {
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

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const audioFile = formData.get("audio") as File | null;
    const taskType = formData.get("taskType") as string; // "repeat" or "interview"
    const prompt = formData.get("prompt") as string; // Original prompt/sentence
    const expectedText = formData.get("expectedText") as string | null; // For repeat tasks
    const duration = parseFloat(formData.get("duration") as string) || 0;

    if (!audioFile) {
      return NextResponse.json(
        { error: "Audio file is required" },
        { status: 400 }
      );
    }

    if (!taskType || !prompt) {
      return NextResponse.json(
        { error: "Task type and prompt are required" },
        { status: 400 }
      );
    }

    // Step 1: Transcribe audio using Whisper
    const transcription = await openai.audio.transcriptions.create({
      file: audioFile,
      model: "whisper-1",
      language: "en",
      response_format: "verbose_json",
    });

    const transcript = transcription.text;
    const words = transcript.split(/\s+/).filter(Boolean);
    const wordCount = words.length;
    const speechRateWpm = duration > 0 ? Math.round((wordCount / duration) * 60) : 0;

    // Step 2: Evaluate using GPT-4
    const evaluationPrompt = taskType === "repeat"
      ? `
Task Type: Listen and Repeat
Original Sentence: "${expectedText || prompt}"
User's Transcript: "${transcript}"
Duration: ${duration} seconds

Evaluate how accurately the user repeated the sentence. Focus on pronunciation accuracy and whether they captured all the words correctly.
`
      : `
Task Type: Interview Question
Question: "${prompt}"
User's Response: "${transcript}"
Duration: ${duration} seconds
Word Count: ${wordCount}
Speech Rate: ${speechRateWpm} WPM (target: 140-160 WPM)

Evaluate the response for content relevance, organization, vocabulary, grammar, and delivery.
`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "system", content: SPEAKING_RUBRIC },
        { role: "user", content: evaluationPrompt }
      ],
      response_format: { type: "json_object" },
      temperature: 0.3,
    });

    const evaluationText = completion.choices[0]?.message?.content;
    if (!evaluationText) {
      throw new Error("No evaluation response from GPT-4");
    }

    const evaluation = JSON.parse(evaluationText);

    // Add transcript to evaluation result
    const result: EvaluationResult = {
      ...evaluation,
      transcript,
      word_count: wordCount,
      speech_rate_wpm: speechRateWpm,
    };

    return NextResponse.json(result, {
      status: 200,
      headers: {
        "Cache-Control": "no-store",
      },
    });

  } catch (error) {
    console.error("Speaking Evaluation Error:", error);

    if (error instanceof OpenAI.APIError) {
      return NextResponse.json(
        { error: `OpenAI API error: ${error.message}` },
        { status: error.status || 500 }
      );
    }

    return NextResponse.json(
      { error: "Failed to evaluate speaking response" },
      { status: 500 }
    );
  }
}
