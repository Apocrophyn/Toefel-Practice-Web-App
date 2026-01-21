/**
 * Environment Configuration
 *
 * This module provides type-safe access to environment variables.
 * It validates that required variables are present and provides
 * defaults where appropriate.
 *
 * IMPORTANT:
 * - NEXT_PUBLIC_* variables are exposed to the browser
 * - Non-prefixed variables are server-side only
 * - Never import server-side variables in client components
 */

// ===========================================
// CLIENT-SIDE ENVIRONMENT VARIABLES
// ===========================================
// These are safe to use in both client and server components

export const publicEnv = {
  // Supabase
  supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  supabaseAnonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',

  // App
  appUrl: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',

  // Analytics (optional)
  gaId: process.env.NEXT_PUBLIC_GA_ID,

  // Stripe (optional)
  stripePublishableKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,

  // Check if Supabase is configured
  isSupabaseConfigured: Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  ),
} as const;

// ===========================================
// SERVER-SIDE ENVIRONMENT VARIABLES
// ===========================================
// These should ONLY be used in:
// - Server Components
// - Route Handlers (API routes)
// - Server Actions
// - Middleware

export const serverEnv = {
  // Supabase (service role for admin operations)
  supabaseServiceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY || '',

  // OpenAI
  openaiApiKey: process.env.OPENAI_API_KEY || '',

  // Stripe (optional)
  stripeSecretKey: process.env.STRIPE_SECRET_KEY,
  stripeWebhookSecret: process.env.STRIPE_WEBHOOK_SECRET,

  // App
  nodeEnv: process.env.NODE_ENV || 'development',

  // Sentry (optional)
  sentryDsn: process.env.SENTRY_DSN,
} as const;

// ===========================================
// VALIDATION
// ===========================================
// Validate required environment variables at startup

const requiredPublicVars = [
  'NEXT_PUBLIC_SUPABASE_URL',
  'NEXT_PUBLIC_SUPABASE_ANON_KEY',
] as const;

const requiredServerVars = [
  'SUPABASE_SERVICE_ROLE_KEY',
  'OPENAI_API_KEY',
] as const;

/**
 * Validates that all required environment variables are set.
 * Call this in your app's entry point during development.
 */
export function validateEnv(isServer: boolean = false): void {
  const missing: string[] = [];

  // Check public vars (always required)
  for (const varName of requiredPublicVars) {
    if (!process.env[varName]) {
      missing.push(varName);
    }
  }

  // Check server vars (only in server context)
  if (isServer) {
    for (const varName of requiredServerVars) {
      if (!process.env[varName]) {
        missing.push(varName);
      }
    }
  }

  if (missing.length > 0) {
    throw new Error(
      `Missing required environment variables:\n${missing.map(v => `  - ${v}`).join('\n')}\n\n` +
      `Please check your .env.local file or Vercel environment settings.`
    );
  }
}

// ===========================================
// TYPE DEFINITIONS
// ===========================================

export type PublicEnv = typeof publicEnv;
export type ServerEnv = typeof serverEnv;
