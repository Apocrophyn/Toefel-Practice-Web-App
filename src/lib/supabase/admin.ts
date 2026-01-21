import { createClient } from '@supabase/supabase-js';
import { publicEnv, serverEnv } from '@/lib/env';
import type { Database } from '@/types/database';

/**
 * Creates a Supabase client with admin privileges using the service role key.
 *
 * IMPORTANT: This client bypasses Row Level Security (RLS) and should only be
 * used in secure server-side contexts like:
 * - API route handlers
 * - Server actions
 * - Background jobs
 *
 * NEVER expose this client or its responses directly to the client without
 * proper sanitization.
 *
 * Usage:
 * ```ts
 * import { createAdminClient } from '@/lib/supabase/admin';
 *
 * export async function POST(request: Request) {
 *   const supabase = createAdminClient();
 *   // Perform admin operations...
 * }
 * ```
 */
export function createAdminClient() {
  return createClient<Database>(
    publicEnv.supabaseUrl,
    serverEnv.supabaseServiceRoleKey,
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    }
  );
}
