-- Run this in Supabase SQL Editor to fix TTS caching

-- Policy: Allow service role to manage TTS cache
CREATE POLICY "Service role can manage TTS cache"
ON storage.objects FOR ALL
TO service_role
USING (bucket_id = 'tts-cache');

-- Policy: Allow anon to insert TTS cache (for API routes)
CREATE POLICY "API can insert TTS cache"
ON storage.objects FOR INSERT
TO anon
WITH CHECK (bucket_id = 'tts-cache');

-- Policy: Allow public read access to TTS cache
CREATE POLICY "Public read access to TTS cache"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'tts-cache');
