/**
 * Supabase Client Exports
 *
 * This module provides different Supabase client configurations
 * for different use cases:
 *
 * - `createClient` from './client' - For Client Components (browser)
 * - `createClient` from './server' - For Server Components, Route Handlers, Server Actions
 * - `createAdminClient` from './admin' - For admin operations (bypasses RLS)
 * - `updateSession` from './middleware' - For middleware session management
 *
 * Usage Examples:
 *
 * In a Client Component:
 * ```tsx
 * 'use client';
 * import { createClient } from '@/lib/supabase/client';
 * const supabase = createClient();
 * ```
 *
 * In a Server Component:
 * ```tsx
 * import { createClient } from '@/lib/supabase/server';
 * const supabase = await createClient();
 * ```
 *
 * In an API Route:
 * ```ts
 * import { createAdminClient } from '@/lib/supabase/admin';
 * const supabase = createAdminClient();
 * ```
 */

export { createClient as createBrowserClient } from './client';
export { createClient as createServerClient } from './server';
export { createAdminClient } from './admin';
export { updateSession } from './middleware';
