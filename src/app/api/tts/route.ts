import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { getCachedTTSAudio, cacheTTSAudio, generateTTSCacheKey } from "@/lib/supabase-storage";

/**
 * Constructed on first request, not at module scope. The OpenAI SDK throws when
 * no key is present, and Next collects page data for every route at build time,
 * so a module-scope client made the production build fail on any machine
 * without OPENAI_API_KEY set.
 */
let openaiClient: OpenAI | null = null;

function getOpenAI(): OpenAI {
  if (!openaiClient) {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) throw new Error("OPENAI_API_KEY is not configured");
    openaiClient = new OpenAI({ apiKey });
  }
  return openaiClient;
}

// Voice mapping for different speaker types
const voiceMap: Record<string, "alloy" | "echo" | "fable" | "onyx" | "nova" | "shimmer"> = {
  narrator: "onyx",
  female_student: "nova",
  male_student: "echo",
  female_student_2: "shimmer",
  male_student_2: "fable",
  female_academic: "shimmer",
  male_academic: "fable",
  professor: "onyx",
  interviewer: "alloy",
  guide: "shimmer",
  alloy: "alloy",
  echo: "echo",
  fable: "fable",
  onyx: "onyx",
  nova: "nova",
  shimmer: "shimmer",
};

// In-memory cache as fallback (24 hours)
const audioCache = new Map<string, { buffer: Buffer; timestamp: number }>();
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours

// Clean up expired cache entries
setInterval(() => {
  const now = Date.now();
  Array.from(audioCache.entries()).forEach(([key, value]) => {
    if (now - value.timestamp > CACHE_DURATION) {
      audioCache.delete(key);
    }
  });
}, 60 * 60 * 1000); // Clean every hour

export async function POST(request: NextRequest) {
  try {
    const { text, voice = "narrator", speed = 1.0 } = await request.json();

    if (!text || typeof text !== "string") {
      return NextResponse.json(
        { error: "Text is required" },
        { status: 400 }
      );
    }

    // Select voice
    const selectedVoice = voiceMap[voice] || "onyx";

    // Generate cache key
    const cacheKey = generateTTSCacheKey(text, selectedVoice);

    // 1. Check Supabase storage first (permanent cache)
    console.log(`[TTS] Checking Supabase cache for: ${cacheKey}`);
    const cachedUrl = await getCachedTTSAudio(cacheKey);

    if (cachedUrl) {
      console.log(`[TTS] ✅ Found in Supabase cache, fetching...`);
      try {
        const response = await fetch(cachedUrl);
        if (response.ok) {
          const audioBuffer = await response.arrayBuffer();
          console.log(`[TTS] ✅ Serving from Supabase cache (${audioBuffer.byteLength} bytes)`);
          return new NextResponse(audioBuffer, {
            headers: {
              "Content-Type": "audio/mpeg",
              "Cache-Control": "public, max-age=31536000", // Cache for 1 year
            },
          });
        }
      } catch (error) {
        console.log(`[TTS] ⚠️ Supabase cache fetch failed, will regenerate`);
      }
    }

    // 2. Check in-memory cache (fallback)
    const memoryCacheKey = `${text}_${selectedVoice}_${speed}`;
    const cached = audioCache.get(memoryCacheKey);
    if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
      console.log(`[TTS] ✅ Serving from memory cache`);
      return new NextResponse(new Uint8Array(cached.buffer), {
        headers: {
          "Content-Type": "audio/mpeg",
          "Cache-Control": "public, max-age=3600",
        },
      });
    }

    // 3. Generate new audio via OpenAI
    console.log(`[TTS] 🔄 Generating new audio via OpenAI...`);
    const mp3Response = await getOpenAI().audio.speech.create({
      model: "tts-1-hd",
      voice: selectedVoice,
      input: text,
      speed: Math.max(0.25, Math.min(4.0, speed)),
    });

    const audioBuffer = Buffer.from(await mp3Response.arrayBuffer());
    console.log(`[TTS] ✅ Generated ${audioBuffer.length} bytes`);

    // 4. Save to Supabase for permanent caching
    console.log(`[TTS] 💾 Saving to Supabase...`);
    const audioBlob = new Blob([audioBuffer], { type: "audio/mpeg" });
    const uploadResult = await cacheTTSAudio(cacheKey, audioBlob);

    if (uploadResult.success) {
      console.log(`[TTS] ✅ Saved to Supabase: ${uploadResult.url}`);
    } else {
      console.log(`[TTS] ⚠️ Supabase save failed: ${uploadResult.error}`);
    }

    // 5. Also save to memory cache
    audioCache.set(memoryCacheKey, {
      buffer: audioBuffer,
      timestamp: Date.now(),
    });

    return new NextResponse(audioBuffer, {
      headers: {
        "Content-Type": "audio/mpeg",
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch (error) {
    console.error("TTS API Error:", error);

    if (error instanceof Error) {
      return NextResponse.json(
        { error: `TTS generation failed: ${error.message}` },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: "TTS generation failed" },
      { status: 500 }
    );
  }
}

// GET endpoint for simple text-to-speech (useful for testing)
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const text = searchParams.get("text");
  const voice = searchParams.get("voice") || "narrator";
  const speed = parseFloat(searchParams.get("speed") || "1.0");

  if (!text) {
    return NextResponse.json(
      { error: "Text parameter is required" },
      { status: 400 }
    );
  }

  // Create a POST request internally
  const postRequest = new NextRequest(request.url, {
    method: "POST",
    body: JSON.stringify({ text, voice, speed }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return POST(postRequest);
}
