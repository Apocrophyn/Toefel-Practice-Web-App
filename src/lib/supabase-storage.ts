// Supabase Storage Integration for Audio Files
// Handles uploading and retrieving audio files for speaking and listening sections

import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Storage bucket names
const AUDIO_BUCKET = "audio";
const TTS_CACHE_BUCKET = "tts-cache";

// ==========================================
// SPEAKING SECTION - User Recordings
// ==========================================

export interface UploadResult {
    success: boolean;
    url?: string;
    path?: string;
    error?: string;
}

/**
 * Upload a user's speaking response audio file
 * @param audioBlob - The recorded audio blob
 * @param userId - The user's ID
 * @param taskId - The speaking task ID
 * @param attemptId - The test attempt ID
 */
export async function uploadSpeakingResponse(
    audioBlob: Blob,
    userId: string,
    taskId: string,
    attemptId: string
): Promise<UploadResult> {
    try {
        const fileName = `speaking/${userId}/${attemptId}/${taskId}_${Date.now()}.webm`;

        const { data, error } = await supabase.storage
            .from(AUDIO_BUCKET)
            .upload(fileName, audioBlob, {
                contentType: "audio/webm",
                upsert: false,
            });

        if (error) {
            console.error("Upload error:", error);
            return { success: false, error: error.message };
        }

        // Get public URL
        const { data: urlData } = supabase.storage
            .from(AUDIO_BUCKET)
            .getPublicUrl(fileName);

        return {
            success: true,
            url: urlData.publicUrl,
            path: data.path,
        };
    } catch (error) {
        console.error("Upload error:", error);
        return {
            success: false,
            error: error instanceof Error ? error.message : "Upload failed",
        };
    }
}

/**
 * Get a signed URL for a speaking response (for private buckets)
 * @param path - The file path in storage
 * @param expiresIn - URL expiration time in seconds (default 1 hour)
 */
export async function getSpeakingResponseUrl(
    path: string,
    expiresIn: number = 3600
): Promise<string | null> {
    try {
        const { data, error } = await supabase.storage
            .from(AUDIO_BUCKET)
            .createSignedUrl(path, expiresIn);

        if (error) {
            console.error("Get URL error:", error);
            return null;
        }

        return data.signedUrl;
    } catch (error) {
        console.error("Get URL error:", error);
        return null;
    }
}

/**
 * Delete a speaking response
 * @param path - The file path to delete
 */
export async function deleteSpeakingResponse(path: string): Promise<boolean> {
    try {
        const { error } = await supabase.storage
            .from(AUDIO_BUCKET)
            .remove([path]);

        if (error) {
            console.error("Delete error:", error);
            return false;
        }

        return true;
    } catch (error) {
        console.error("Delete error:", error);
        return false;
    }
}

// ==========================================
// LISTENING SECTION - TTS Audio Caching
// ==========================================

/**
 * Generate a cache key for TTS audio
 */
export function generateTTSCacheKey(text: string, voice: string): string {
    // Create a hash of the text + voice for consistent caching
    const hashInput = `${text}|${voice}`;
    let hash = 0;
    for (let i = 0; i < hashInput.length; i++) {
        const char = hashInput.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32-bit integer
    }
    return `tts_${Math.abs(hash).toString(16)}`;
}

/**
 * Check if TTS audio is cached in Supabase storage
 * @param cacheKey - The cache key for the audio
 */
export async function getCachedTTSAudio(cacheKey: string): Promise<string | null> {
    try {
        const { data } = supabase.storage
            .from(TTS_CACHE_BUCKET)
            .getPublicUrl(`${cacheKey}.mp3`);

        // Try to fetch to verify it exists
        const response = await fetch(data.publicUrl, { method: "HEAD" });
        if (response.ok) {
            return data.publicUrl;
        }
        return null;
    } catch (error) {
        return null;
    }
}

/**
 * Cache TTS audio in Supabase storage
 * @param cacheKey - The cache key for the audio
 * @param audioBlob - The audio blob to cache
 */
export async function cacheTTSAudio(
    cacheKey: string,
    audioBlob: Blob
): Promise<UploadResult> {
    try {
        const fileName = `${cacheKey}.mp3`;

        const { data, error } = await supabase.storage
            .from(TTS_CACHE_BUCKET)
            .upload(fileName, audioBlob, {
                contentType: "audio/mpeg",
                upsert: true, // Update if exists
            });

        if (error) {
            console.error("Cache upload error:", error);
            return { success: false, error: error.message };
        }

        const { data: urlData } = supabase.storage
            .from(TTS_CACHE_BUCKET)
            .getPublicUrl(fileName);

        return {
            success: true,
            url: urlData.publicUrl,
            path: data.path,
        };
    } catch (error) {
        console.error("Cache upload error:", error);
        return {
            success: false,
            error: error instanceof Error ? error.message : "Cache upload failed",
        };
    }
}

// ==========================================
// STORAGE BUCKET SETUP
// ==========================================

/**
 * Create the required storage buckets (run once during setup)
 * This should be run from a server-side admin context
 */
export async function setupStorageBuckets(): Promise<void> {
    // Note: This requires service role key, not anon key
    // Should be run from a setup script or admin panel

    const buckets = [
        {
            name: AUDIO_BUCKET,
            options: {
                public: false,
                fileSizeLimit: 10485760, // 10MB
                allowedMimeTypes: ["audio/webm", "audio/mp3", "audio/wav", "audio/mpeg"],
            },
        },
        {
            name: TTS_CACHE_BUCKET,
            options: {
                public: true,
                fileSizeLimit: 5242880, // 5MB
                allowedMimeTypes: ["audio/mpeg", "audio/mp3"],
            },
        },
    ];

    for (const bucket of buckets) {
        const { error } = await supabase.storage.createBucket(bucket.name, bucket.options);
        if (error && !error.message.includes("already exists")) {
            console.error(`Failed to create bucket ${bucket.name}:`, error);
        } else {
            console.log(`Bucket ${bucket.name} ready`);
        }
    }
}

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

/**
 * Get all speaking responses for a user
 * @param userId - The user's ID
 */
export async function getUserSpeakingResponses(userId: string): Promise<string[]> {
    try {
        const { data, error } = await supabase.storage
            .from(AUDIO_BUCKET)
            .list(`speaking/${userId}`, {
                limit: 100,
                sortBy: { column: "created_at", order: "desc" },
            });

        if (error) {
            console.error("List error:", error);
            return [];
        }

        return data.map((file) => file.name);
    } catch (error) {
        console.error("List error:", error);
        return [];
    }
}

/**
 * Calculate storage usage for a user
 * @param userId - The user's ID
 */
export async function getUserStorageUsage(userId: string): Promise<{
    fileCount: number;
    totalBytes: number;
}> {
    try {
        const { data, error } = await supabase.storage
            .from(AUDIO_BUCKET)
            .list(`speaking/${userId}`, {
                limit: 1000,
            });

        if (error) {
            console.error("List error:", error);
            return { fileCount: 0, totalBytes: 0 };
        }

        const totalBytes = data.reduce((sum, file) => {
            // Note: file.metadata may contain size info
            return sum + (file.metadata?.size || 0);
        }, 0);

        return {
            fileCount: data.length,
            totalBytes,
        };
    } catch (error) {
        console.error("Storage usage error:", error);
        return { fileCount: 0, totalBytes: 0 };
    }
}

// ==========================================
// DATABASE FUNCTIONS
// ==========================================

/**
 * Save speaking response metadata to database
 */
export async function saveSpeakingResponseMetadata(
    attemptId: string,
    questionId: string,
    audioUrl: string,
    aiScore?: number,
    aiFeedback?: object
): Promise<boolean> {
    try {
        const { error } = await supabase
            .from("user_answers")
            .insert({
                attempt_id: attemptId,
                question_id: questionId,
                section: "speaking",
                audio_url: audioUrl,
                ai_score: aiScore,
                ai_feedback: aiFeedback,
                answered_at: new Date().toISOString(),
            });

        if (error) {
            console.error("Save metadata error:", error);
            return false;
        }

        return true;
    } catch (error) {
        console.error("Save metadata error:", error);
        return false;
    }
}

/**
 * Get speaking responses for an attempt
 */
export async function getSpeakingResponsesForAttempt(
    attemptId: string
): Promise<Array<{
    questionId: string;
    audioUrl: string;
    aiScore: number | null;
    aiFeedback: object | null;
}>> {
    try {
        const { data, error } = await supabase
            .from("user_answers")
            .select("question_id, audio_url, ai_score, ai_feedback")
            .eq("attempt_id", attemptId)
            .eq("section", "speaking");

        if (error) {
            console.error("Get responses error:", error);
            return [];
        }

        return data.map((row) => ({
            questionId: row.question_id,
            audioUrl: row.audio_url,
            aiScore: row.ai_score,
            aiFeedback: row.ai_feedback,
        }));
    } catch (error) {
        console.error("Get responses error:", error);
        return [];
    }
}
