/**
 * Supabase Database Types
 *
 * These types are used with the Supabase client for type-safe database operations.
 * Update these when you make changes to your database schema.
 *
 * To regenerate these types automatically, run:
 * npx supabase gen types typescript --project-id your-project-id > src/types/database.ts
 */

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      users: {
        Row: {
          id: string;
          email: string;
          full_name: string | null;
          avatar_url: string | null;
          current_level: 'beginner' | 'intermediate' | 'advanced' | null;
          target_score: number | null;
          test_date: string | null;
          subscription_tier: 'free' | 'premium' | 'pro';
          subscription_expires_at: string | null;
          created_at: string;
          updated_at: string;
          last_login_at: string | null;
        };
        Insert: {
          id: string;
          email: string;
          full_name?: string | null;
          avatar_url?: string | null;
          current_level?: 'beginner' | 'intermediate' | 'advanced' | null;
          target_score?: number | null;
          test_date?: string | null;
          subscription_tier?: 'free' | 'premium' | 'pro';
          subscription_expires_at?: string | null;
          created_at?: string;
          updated_at?: string;
          last_login_at?: string | null;
        };
        Update: {
          id?: string;
          email?: string;
          full_name?: string | null;
          avatar_url?: string | null;
          current_level?: 'beginner' | 'intermediate' | 'advanced' | null;
          target_score?: number | null;
          test_date?: string | null;
          subscription_tier?: 'free' | 'premium' | 'pro';
          subscription_expires_at?: string | null;
          created_at?: string;
          updated_at?: string;
          last_login_at?: string | null;
        };
      };
      test_attempts: {
        Row: {
          id: string;
          user_id: string;
          test_type: 'full_mock' | 'reading' | 'listening' | 'speaking' | 'writing';
          status: 'in_progress' | 'completed' | 'abandoned';
          overall_score: number | null;
          reading_score: number | null;
          listening_score: number | null;
          speaking_score: number | null;
          writing_score: number | null;
          total_questions: number;
          correct_answers: number | null;
          time_spent_seconds: number | null;
          adaptive_difficulty: 'easy' | 'medium' | 'hard' | null;
          section_details: Json | null;
          ai_feedback: Json | null;
          started_at: string;
          completed_at: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          test_type: 'full_mock' | 'reading' | 'listening' | 'speaking' | 'writing';
          status?: 'in_progress' | 'completed' | 'abandoned';
          overall_score?: number | null;
          reading_score?: number | null;
          listening_score?: number | null;
          speaking_score?: number | null;
          writing_score?: number | null;
          total_questions?: number;
          correct_answers?: number | null;
          time_spent_seconds?: number | null;
          adaptive_difficulty?: 'easy' | 'medium' | 'hard' | null;
          section_details?: Json | null;
          ai_feedback?: Json | null;
          started_at?: string;
          completed_at?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          test_type?: 'full_mock' | 'reading' | 'listening' | 'speaking' | 'writing';
          status?: 'in_progress' | 'completed' | 'abandoned';
          overall_score?: number | null;
          reading_score?: number | null;
          listening_score?: number | null;
          speaking_score?: number | null;
          writing_score?: number | null;
          total_questions?: number;
          correct_answers?: number | null;
          time_spent_seconds?: number | null;
          adaptive_difficulty?: 'easy' | 'medium' | 'hard' | null;
          section_details?: Json | null;
          ai_feedback?: Json | null;
          started_at?: string;
          completed_at?: string | null;
          created_at?: string;
        };
      };
      user_answers: {
        Row: {
          id: string;
          attempt_id: string;
          question_id: string;
          section: 'reading' | 'listening' | 'speaking' | 'writing';
          user_answer: string | null;
          correct_answer: string | null;
          is_correct: boolean | null;
          time_spent_seconds: number | null;
          ai_score: number | null;
          ai_feedback: Json | null;
          audio_url: string | null;
          answered_at: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          attempt_id: string;
          question_id: string;
          section: 'reading' | 'listening' | 'speaking' | 'writing';
          user_answer?: string | null;
          correct_answer?: string | null;
          is_correct?: boolean | null;
          time_spent_seconds?: number | null;
          ai_score?: number | null;
          ai_feedback?: Json | null;
          audio_url?: string | null;
          answered_at?: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          attempt_id?: string;
          question_id?: string;
          section?: 'reading' | 'listening' | 'speaking' | 'writing';
          user_answer?: string | null;
          correct_answer?: string | null;
          is_correct?: boolean | null;
          time_spent_seconds?: number | null;
          ai_score?: number | null;
          ai_feedback?: Json | null;
          audio_url?: string | null;
          answered_at?: string;
          created_at?: string;
        };
      };
      questions: {
        Row: {
          id: string;
          section: 'reading' | 'listening' | 'speaking' | 'writing';
          task_type: string;
          difficulty: 'easy' | 'medium' | 'hard';
          cefr_level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
          content: Json;
          metadata: Json | null;
          is_active: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          section: 'reading' | 'listening' | 'speaking' | 'writing';
          task_type: string;
          difficulty: 'easy' | 'medium' | 'hard';
          cefr_level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
          content: Json;
          metadata?: Json | null;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          section?: 'reading' | 'listening' | 'speaking' | 'writing';
          task_type?: string;
          difficulty?: 'easy' | 'medium' | 'hard';
          cefr_level?: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
          content?: Json;
          metadata?: Json | null;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      difficulty_level: 'easy' | 'medium' | 'hard';
      cefr_level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
      section_type: 'reading' | 'listening' | 'speaking' | 'writing';
      test_type: 'full_mock' | 'reading' | 'listening' | 'speaking' | 'writing';
      test_status: 'in_progress' | 'completed' | 'abandoned';
      subscription_tier: 'free' | 'premium' | 'pro';
      user_level: 'beginner' | 'intermediate' | 'advanced';
    };
  };
};

// Helper types for easier usage
export type User = Database['public']['Tables']['users']['Row'];
export type NewUser = Database['public']['Tables']['users']['Insert'];
export type UserUpdate = Database['public']['Tables']['users']['Update'];

export type TestAttempt = Database['public']['Tables']['test_attempts']['Row'];
export type NewTestAttempt = Database['public']['Tables']['test_attempts']['Insert'];
export type TestAttemptUpdate = Database['public']['Tables']['test_attempts']['Update'];

export type UserAnswer = Database['public']['Tables']['user_answers']['Row'];
export type NewUserAnswer = Database['public']['Tables']['user_answers']['Insert'];
export type UserAnswerUpdate = Database['public']['Tables']['user_answers']['Update'];

export type Question = Database['public']['Tables']['questions']['Row'];
export type NewQuestion = Database['public']['Tables']['questions']['Insert'];
export type QuestionUpdate = Database['public']['Tables']['questions']['Update'];

// Section type
export type Section = 'reading' | 'listening' | 'speaking' | 'writing';

// Difficulty type
export type Difficulty = 'easy' | 'medium' | 'hard';

// Test status type
export type TestStatus = 'in_progress' | 'completed' | 'abandoned';

// Subscription tier type
export type SubscriptionTier = 'free' | 'premium' | 'pro';
