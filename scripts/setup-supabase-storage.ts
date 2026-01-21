// Supabase Storage Setup Script
// Run this once to create the required storage buckets

import { config } from "dotenv";
import { createClient } from "@supabase/supabase-js";

// Load environment variables from .env.local
config({ path: ".env.local" });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

if (!supabaseUrl || !supabaseServiceKey) {
    console.error("❌ Missing environment variables!");
    console.error("Required: NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY");
    process.exit(1);
}

// Create admin client with service role key
const supabase = createClient(supabaseUrl, supabaseServiceKey, {
    auth: {
        autoRefreshToken: false,
        persistSession: false,
    },
});

async function setupStorageBuckets() {
    console.log("🚀 Setting up Supabase storage buckets...\n");

    // Bucket 1: audio (private - for user speaking responses)
    console.log("📦 Creating 'audio' bucket...");
    const { data: audioBucket, error: audioError } = await supabase.storage.createBucket("audio", {
        public: false,
        fileSizeLimit: 10485760, // 10MB
        allowedMimeTypes: ["audio/webm", "audio/mp3", "audio/wav", "audio/mpeg"],
    });

    if (audioError) {
        if (audioError.message.includes("already exists")) {
            console.log("✅ 'audio' bucket already exists");
        } else {
            console.error("❌ Error creating 'audio' bucket:", audioError.message);
        }
    } else {
        console.log("✅ 'audio' bucket created successfully");
    }

    // Bucket 2: tts-cache (public - for cached TTS audio)
    console.log("\n📦 Creating 'tts-cache' bucket...");
    const { data: ttsBucket, error: ttsError } = await supabase.storage.createBucket("tts-cache", {
        public: true,
        fileSizeLimit: 5242880, // 5MB
        allowedMimeTypes: ["audio/mpeg", "audio/mp3"],
    });

    if (ttsError) {
        if (ttsError.message.includes("already exists")) {
            console.log("✅ 'tts-cache' bucket already exists");
        } else {
            console.error("❌ Error creating 'tts-cache' bucket:", ttsError.message);
        }
    } else {
        console.log("✅ 'tts-cache' bucket created successfully");
    }

    console.log("\n🎉 Storage setup complete!");
    console.log("\n📝 Next steps:");
    console.log("1. Set up storage policies in Supabase dashboard (see below)");
    console.log("2. Test the Speaking section to verify audio recording works");
    console.log("3. Test the Listening section to verify TTS audio works");
}

// Run setup
setupStorageBuckets()
    .then(() => {
        console.log("\n" + "=".repeat(60));
        console.log("STORAGE POLICIES TO ADD IN SUPABASE DASHBOARD");
        console.log("=".repeat(60));
        console.log("\nGo to: Supabase Dashboard → Storage → Policies\n");

        console.log("For 'audio' bucket:");
        console.log("─".repeat(60));
        console.log(`
-- Policy 1: Allow authenticated users to upload their own audio
CREATE POLICY "Users can upload their own audio"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (
  bucket_id = 'audio' AND 
  (storage.foldername(name))[1] = 'speaking' AND
  auth.uid()::text = (storage.foldername(name))[2]
);

-- Policy 2: Allow authenticated users to view their own audio
CREATE POLICY "Users can view their own audio"
ON storage.objects FOR SELECT
TO authenticated
USING (
  bucket_id = 'audio' AND
  (storage.foldername(name))[1] = 'speaking' AND
  auth.uid()::text = (storage.foldername(name))[2]
);

-- Policy 3: Allow authenticated users to delete their own audio
CREATE POLICY "Users can delete their own audio"
ON storage.objects FOR DELETE
TO authenticated
USING (
  bucket_id = 'audio' AND
  (storage.foldername(name))[1] = 'speaking' AND
  auth.uid()::text = (storage.foldername(name))[2]
);
`);

        console.log("\nFor 'tts-cache' bucket:");
        console.log("─".repeat(60));
        console.log(`
-- Policy: Allow public read access to TTS cache
CREATE POLICY "Public read access to TTS cache"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'tts-cache');

-- Policy: Allow service role to manage TTS cache
CREATE POLICY "Service role can manage TTS cache"
ON storage.objects FOR ALL
TO service_role
USING (bucket_id = 'tts-cache');
`);

        console.log("\n" + "=".repeat(60));
        process.exit(0);
    })
    .catch((error) => {
        console.error("\n❌ Setup failed:", error);
        process.exit(1);
    });
