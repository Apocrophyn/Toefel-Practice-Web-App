import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

/**
 * Build the OpenAI client on first use, not at module load.
 *
 * Next.js imports every route module during "Collecting page data" at build
 * time, so constructing the client here made the whole build depend on
 * OPENAI_API_KEY being present in the *build* environment. Where it was not —
 * a clean checkout, CI, or a deploy whose key is only exposed to runtime — the
 * SDK threw "Missing credentials" and the build failed before it ever reached
 * the page it was collecting.
 *
 * Deferring construction keeps the key a runtime concern: the build never
 * needs it, and a request made without it returns a clear 503 instead.
 */
let client: OpenAI | null = null;

function getOpenAI(): OpenAI {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new MissingOpenAIKeyError();
  }
  client ??= new OpenAI({ apiKey });
  return client;
}

class MissingOpenAIKeyError extends Error {
  constructor() {
    super("OPENAI_API_KEY is not configured on the server.");
    this.name = "MissingOpenAIKeyError";
  }
}

// TOEFL Writing Evaluation Rubric
const WRITING_RUBRIC = `You are an expert TOEFL Writing evaluator following ETS scoring guidelines.

SCORING SCALE (1-6 bands, use half-point increments: 1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0, 5.5, 6.0):

**6.0 (Highly Proficient - C2 CEFR)**
- Grammar: Virtually no errors, sophisticated sentence structures
- Vocabulary: Precise, varied, academic, idiomatic
- Organization: Seamless flow, clear structure, excellent transitions
- Content: Fully developed ideas, strong support, insightful analysis

**5.0-5.5 (Proficient - C1 CEFR)**
- Grammar: Minor errors, varied sentence structures
- Vocabulary: Strong range, appropriate word choice, some sophistication
- Organization: Clear structure, good transitions, logical flow
- Content: Well-developed ideas, relevant support, clear reasoning

**4.0-4.5 (Upper-Intermediate - B2 CEFR)**
- Grammar: Some errors but meaning clear, adequate sentence variety
- Vocabulary: Adequate range, occasional inappropriate choices
- Organization: Basic structure, simple transitions, generally coherent
- Content: Ideas developed but may lack depth, adequate support

**3.0-3.5 (Intermediate - B1 CEFR)**
- Grammar: Frequent errors affecting clarity, limited sentence variety
- Vocabulary: Limited range, repetitive, basic word choice
- Organization: Weak structure, few transitions, some incoherence
- Content: Underdeveloped ideas, weak support, unclear reasoning

**Below 3.0**
- Severe errors throughout, minimal coherence, inadequate development

TASK-SPECIFIC CRITERIA:

**Build a Sentence:**
- Grammatical accuracy (verb tenses, subject-verb agreement, word order)
- Natural sentence structure
- Appropriate word forms (nouns, verbs, adjectives, adverbs)

**Write an Email:**
- Appropriateness (polite, professional tone)
- Clarity (clear purpose and request)
- Organization (greeting, body, closing)
- Completeness (addresses all parts of the scenario)

**Academic Discussion:**
- Critical thinking (analysis, not just description)
- Support (evidence, examples, reasoning)
- Coherence (logical flow, clear position)
- Engagement (responds to prompt and/or other students)`;

export interface WritingEvaluationResult {
  overall_score: number;
  grammar_score: number;
  vocabulary_score: number;
  organization_score: number;
  content_score: number;
  feedback: {
    strengths: string[];
    improvements: string[];
    grammar_notes: string;
    vocabulary_notes: string;
    organization_notes: string;
    content_notes: string;
  };
  word_count: number;
  task_specific_feedback?: {
    appropriateness?: string; // For emails
    bullet_coverage?: string; // For emails - which of the three required points were addressed
    critical_thinking?: string; // For academic discussion
    sentence_accuracy?: string; // For build sentence
  };
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { text, taskType, prompt, expectedAnswer, minWords, maxWords } = body;

    if (!text || typeof text !== "string") {
      return NextResponse.json(
        { error: "Text is required" },
        { status: 400 }
      );
    }

    if (!taskType || !["build_sentence", "email", "academic_discussion"].includes(taskType)) {
      return NextResponse.json(
        { error: "Valid taskType is required (build_sentence, email, academic_discussion)" },
        { status: 400 }
      );
    }

    // Word count
    const wordCount = text.trim().split(/\s+/).length;

    // Build evaluation prompt based on task type
    let evaluationPrompt = "";

    if (taskType === "build_sentence") {
      evaluationPrompt = `
TASK: Build a Sentence (Grammar & Structure)

PROMPT: ${prompt}

EXPECTED ANSWER: ${expectedAnswer || "Not provided"}

STUDENT'S ANSWER: "${text}"

Evaluate this sentence based on:
1. Grammatical accuracy (verb tenses, subject-verb agreement, word order, articles, prepositions)
2. Natural English sentence structure
3. Appropriate word forms and usage
4. Whether it conveys the intended meaning

Provide detailed feedback on any errors and how to correct them.

IMPORTANT: Return your evaluation as a valid JSON object with this EXACT structure:
{
  "overall_score": <number between 1.0 and 6.0 in 0.5 increments>,
  "grammar_score": <number between 1.0 and 6.0>,
  "vocabulary_score": <number between 1.0 and 6.0>,
  "organization_score": <number between 1.0 and 6.0>,
  "content_score": <number between 1.0 and 6.0>,
  "feedback": {
    "strengths": ["<strength1>", "<strength2>"],
    "improvements": ["<improvement1>", "<improvement2>"],
    "grammar_notes": "<specific grammar feedback>",
    "vocabulary_notes": "<vocabulary feedback>",
    "organization_notes": "<organization feedback>",
    "content_notes": "<content feedback>"
  },
  "task_specific_feedback": {
    "sentence_accuracy": "<detailed analysis of sentence correctness>"
  }
}`;
    } else if (taskType === "email") {
      evaluationPrompt = `
TASK: Write an Email (Functional Writing)

SCENARIO: ${prompt}

WORD COUNT TARGET: ${minWords}-${maxWords} words
ACTUAL WORD COUNT: ${wordCount} words

STUDENT'S EMAIL:
"${text}"

Evaluate this email as an ETS rater would score the 2026 "Write an Email" task,
which is worth 5 raw points.

The single most important criterion is COVERAGE OF THE THREE BULLET POINTS listed
in the prompt above. Check each bullet individually and say in content_notes which
of the three were addressed and which were not. A response that is fluent and
well written but silently drops one of the three bullets cannot score in the top
band; a response that drops two cannot score above the middle of the scale.

Then evaluate:
1. Register (does the tone fit the stated relationship to the named recipient?
   A professor and a roommate are not written to the same way.)
2. Clarity (a clear purpose and a specific, actionable request)
3. Organization (greeting, body, closing appropriate to the register)
4. Grammar and vocabulary (accuracy and range)

The word-count target below is guidance only. ETS publishes no word count for this
task, so do NOT penalise a response purely for falling outside the range.

IMPORTANT: Return your evaluation as a valid JSON object with this EXACT structure:
{
  "overall_score": <number between 1.0 and 6.0 in 0.5 increments>,
  "grammar_score": <number between 1.0 and 6.0>,
  "vocabulary_score": <number between 1.0 and 6.0>,
  "organization_score": <number between 1.0 and 6.0>,
  "content_score": <number between 1.0 and 6.0>,
  "feedback": {
    "strengths": ["<strength1>", "<strength2>"],
    "improvements": ["<improvement1>", "<improvement2>"],
    "grammar_notes": "<specific grammar feedback>",
    "vocabulary_notes": "<vocabulary feedback>",
    "organization_notes": "<organization feedback>",
    "content_notes": "<content feedback>"
  },
  "task_specific_feedback": {
    "appropriateness": "<analysis of register against the stated relationship to the recipient>",
    "bullet_coverage": "<state for each of the three bullets whether it was addressed>"
  }
}`;
    } else if (taskType === "academic_discussion") {
      evaluationPrompt = `
TASK: Writing for an Academic Discussion

DISCUSSION PROMPT: ${prompt}

WORD COUNT TARGET: ${minWords}+ words (maximum ${maxWords} words)
ACTUAL WORD COUNT: ${wordCount} words

STUDENT'S POST:
"${text}"

Evaluate this discussion post based on:
1. Critical thinking (analysis, reasoning, not just description)
2. Support (evidence, examples, logical reasoning)
3. Coherence (clear position, logical flow, organization)
4. Engagement (addresses the prompt, contributes meaningfully)
5. Grammar and vocabulary (academic appropriateness)

IMPORTANT: Return your evaluation as a valid JSON object with this EXACT structure:
{
  "overall_score": <number between 1.0 and 6.0 in 0.5 increments>,
  "grammar_score": <number between 1.0 and 6.0>,
  "vocabulary_score": <number between 1.0 and 6.0>,
  "organization_score": <number between 1.0 and 6.0>,
  "content_score": <number between 1.0 and 6.0>,
  "feedback": {
    "strengths": ["<strength1>", "<strength2>"],
    "improvements": ["<improvement1>", "<improvement2>"],
    "grammar_notes": "<specific grammar feedback>",
    "vocabulary_notes": "<vocabulary feedback>",
    "organization_notes": "<organization feedback>",
    "content_notes": "<content feedback>"
  },
  "task_specific_feedback": {
    "critical_thinking": "<analysis of reasoning depth and engagement>"
  }
}`;
    }

    // Call GPT-4o for evaluation
    console.log(`[Writing Eval] Evaluating ${taskType} task...`);

    const completion = await getOpenAI().chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: WRITING_RUBRIC,
        },
        {
          role: "user",
          content: evaluationPrompt,
        },
      ],
      temperature: 0.3, // Lower temperature for consistent evaluation
      response_format: { type: "json_object" },
    });

    const result = completion.choices[0].message.content;
    if (!result) {
      throw new Error("No response from AI");
    }

    const evaluation = JSON.parse(result);

    // Add word count to response
    const response: WritingEvaluationResult = {
      ...evaluation,
      word_count: wordCount,
    };

    console.log(`[Writing Eval] ✅ Completed - Score: ${response.overall_score}`);

    return NextResponse.json(response);
  } catch (error) {
    console.error("Writing Evaluation Error:", error);

    // A server with no key configured is a deployment problem, not a bad
    // request — say so plainly rather than reporting a generic failure.
    if (error instanceof MissingOpenAIKeyError) {
      return NextResponse.json(
        {
          error:
            "This server has no OPENAI_API_KEY configured, so AI evaluation is unavailable.",
        },
        { status: 503 }
      );
    }

    if (error instanceof Error) {
      return NextResponse.json(
        { error: `Writing evaluation failed: ${error.message}` },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: "Writing evaluation failed" },
      { status: 500 }
    );
  }
}
