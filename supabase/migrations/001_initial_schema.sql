-- ==========================================
-- TOEFL Practice Platform - Database Schema
-- ==========================================
-- This migration creates the initial database schema for the TOEFL practice platform.
-- Run this in your Supabase SQL Editor or via Supabase CLI.
-- ==========================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ==========================================
-- CUSTOM TYPES (ENUMS)
-- ==========================================

-- Difficulty levels for questions
CREATE TYPE difficulty_level AS ENUM ('easy', 'medium', 'hard');

-- CEFR language proficiency levels
CREATE TYPE cefr_level AS ENUM ('A1', 'A2', 'B1', 'B2', 'C1', 'C2');

-- Test sections
CREATE TYPE section_type AS ENUM ('reading', 'listening', 'speaking', 'writing');

-- Test types
CREATE TYPE test_type AS ENUM ('full_mock', 'reading', 'listening', 'speaking', 'writing');

-- Test attempt status
CREATE TYPE test_status AS ENUM ('in_progress', 'completed', 'abandoned');

-- Subscription tiers
CREATE TYPE subscription_tier AS ENUM ('free', 'premium', 'pro');

-- User proficiency level
CREATE TYPE user_level AS ENUM ('beginner', 'intermediate', 'advanced');

-- ==========================================
-- TABLES
-- ==========================================

-- Users table (extends Supabase auth.users)
CREATE TABLE public.users (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT NOT NULL,
    full_name TEXT,
    avatar_url TEXT,
    current_level user_level,
    target_score DECIMAL(2,1) CHECK (target_score >= 1.0 AND target_score <= 6.0),
    test_date DATE,
    subscription_tier subscription_tier DEFAULT 'free',
    subscription_expires_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    last_login_at TIMESTAMPTZ
);

-- Test attempts table
CREATE TABLE public.test_attempts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
    test_type test_type NOT NULL,
    status test_status DEFAULT 'in_progress',

    -- Scores (1.0 to 6.0 scale, 0.5 increments)
    overall_score DECIMAL(2,1) CHECK (overall_score >= 1.0 AND overall_score <= 6.0),
    reading_score DECIMAL(2,1) CHECK (reading_score >= 1.0 AND reading_score <= 6.0),
    listening_score DECIMAL(2,1) CHECK (listening_score >= 1.0 AND listening_score <= 6.0),
    speaking_score DECIMAL(2,1) CHECK (speaking_score >= 1.0 AND speaking_score <= 6.0),
    writing_score DECIMAL(2,1) CHECK (writing_score >= 1.0 AND writing_score <= 6.0),

    -- Statistics
    total_questions INTEGER DEFAULT 0,
    correct_answers INTEGER DEFAULT 0,
    time_spent_seconds INTEGER,
    adaptive_difficulty difficulty_level,

    -- Detailed data (JSON)
    section_details JSONB,
    ai_feedback JSONB,

    -- Timestamps
    started_at TIMESTAMPTZ DEFAULT NOW(),
    completed_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- User answers table
CREATE TABLE public.user_answers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    attempt_id UUID NOT NULL REFERENCES public.test_attempts(id) ON DELETE CASCADE,
    question_id TEXT NOT NULL,
    section section_type NOT NULL,

    -- Answer data
    user_answer TEXT,
    correct_answer TEXT,
    is_correct BOOLEAN,

    -- Timing
    time_spent_seconds INTEGER,

    -- AI evaluation (for speaking/writing)
    ai_score DECIMAL(2,1) CHECK (ai_score >= 1.0 AND ai_score <= 6.0),
    ai_feedback JSONB,

    -- Audio URL (for speaking responses)
    audio_url TEXT,

    -- Timestamps
    answered_at TIMESTAMPTZ DEFAULT NOW(),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Questions table
CREATE TABLE public.questions (
    id TEXT PRIMARY KEY,
    section section_type NOT NULL,
    task_type TEXT NOT NULL,
    difficulty difficulty_level NOT NULL,
    cefr_level cefr_level NOT NULL,

    -- Question content (flexible JSON schema)
    content JSONB NOT NULL,

    -- Metadata
    metadata JSONB,
    is_active BOOLEAN DEFAULT true,

    -- Timestamps
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ==========================================
-- INDEXES
-- ==========================================

-- Users
CREATE INDEX idx_users_email ON public.users(email);
CREATE INDEX idx_users_subscription ON public.users(subscription_tier, subscription_expires_at);

-- Test attempts
CREATE INDEX idx_test_attempts_user ON public.test_attempts(user_id, started_at DESC);
CREATE INDEX idx_test_attempts_status ON public.test_attempts(status);
CREATE INDEX idx_test_attempts_type ON public.test_attempts(test_type);

-- User answers
CREATE INDEX idx_user_answers_attempt ON public.user_answers(attempt_id);
CREATE INDEX idx_user_answers_question ON public.user_answers(question_id);
CREATE INDEX idx_user_answers_section ON public.user_answers(section);

-- Questions
CREATE INDEX idx_questions_section ON public.questions(section);
CREATE INDEX idx_questions_difficulty ON public.questions(difficulty);
CREATE INDEX idx_questions_active ON public.questions(is_active);
CREATE INDEX idx_questions_section_difficulty ON public.questions(section, difficulty) WHERE is_active = true;

-- ==========================================
-- ROW LEVEL SECURITY (RLS)
-- ==========================================

-- Enable RLS on all tables
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.test_attempts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_answers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.questions ENABLE ROW LEVEL SECURITY;

-- Users policies
CREATE POLICY "Users can view own profile"
    ON public.users FOR SELECT
    USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
    ON public.users FOR UPDATE
    USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile"
    ON public.users FOR INSERT
    WITH CHECK (auth.uid() = id);

-- Test attempts policies
CREATE POLICY "Users can view own test attempts"
    ON public.test_attempts FOR SELECT
    USING (auth.uid() = user_id);

CREATE POLICY "Users can create own test attempts"
    ON public.test_attempts FOR INSERT
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own test attempts"
    ON public.test_attempts FOR UPDATE
    USING (auth.uid() = user_id);

-- User answers policies
CREATE POLICY "Users can view own answers"
    ON public.user_answers FOR SELECT
    USING (
        EXISTS (
            SELECT 1 FROM public.test_attempts
            WHERE test_attempts.id = user_answers.attempt_id
            AND test_attempts.user_id = auth.uid()
        )
    );

CREATE POLICY "Users can create answers for own attempts"
    ON public.user_answers FOR INSERT
    WITH CHECK (
        EXISTS (
            SELECT 1 FROM public.test_attempts
            WHERE test_attempts.id = user_answers.attempt_id
            AND test_attempts.user_id = auth.uid()
        )
    );

CREATE POLICY "Users can update own answers"
    ON public.user_answers FOR UPDATE
    USING (
        EXISTS (
            SELECT 1 FROM public.test_attempts
            WHERE test_attempts.id = user_answers.attempt_id
            AND test_attempts.user_id = auth.uid()
        )
    );

-- Questions policies (public read for active questions)
CREATE POLICY "Anyone can view active questions"
    ON public.questions FOR SELECT
    USING (is_active = true);

-- ==========================================
-- FUNCTIONS & TRIGGERS
-- ==========================================

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger for users table
CREATE TRIGGER update_users_updated_at
    BEFORE UPDATE ON public.users
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Trigger for questions table
CREATE TRIGGER update_questions_updated_at
    BEFORE UPDATE ON public.questions
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Function to handle new user signup (create profile)
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.users (id, email, full_name, avatar_url)
    VALUES (
        NEW.id,
        NEW.email,
        NEW.raw_user_meta_data->>'full_name',
        NEW.raw_user_meta_data->>'avatar_url'
    );
    RETURN NEW;
END;
$$ language 'plpgsql' SECURITY DEFINER;

-- Trigger to create user profile on signup
CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_new_user();

-- Function to calculate overall score
CREATE OR REPLACE FUNCTION calculate_overall_score(
    p_reading DECIMAL,
    p_listening DECIMAL,
    p_speaking DECIMAL,
    p_writing DECIMAL
)
RETURNS DECIMAL AS $$
DECLARE
    v_count INTEGER := 0;
    v_sum DECIMAL := 0;
    v_avg DECIMAL;
BEGIN
    IF p_reading IS NOT NULL THEN
        v_sum := v_sum + p_reading;
        v_count := v_count + 1;
    END IF;

    IF p_listening IS NOT NULL THEN
        v_sum := v_sum + p_listening;
        v_count := v_count + 1;
    END IF;

    IF p_speaking IS NOT NULL THEN
        v_sum := v_sum + p_speaking;
        v_count := v_count + 1;
    END IF;

    IF p_writing IS NOT NULL THEN
        v_sum := v_sum + p_writing;
        v_count := v_count + 1;
    END IF;

    IF v_count = 0 THEN
        RETURN NULL;
    END IF;

    v_avg := v_sum / v_count;

    -- Round to nearest 0.5
    RETURN ROUND(v_avg * 2) / 2;
END;
$$ language 'plpgsql';

-- ==========================================
-- STORAGE BUCKETS
-- ==========================================
-- Note: Run these in a separate query after creating the schema

-- Create bucket for audio files (speaking responses)
-- INSERT INTO storage.buckets (id, name, public) VALUES ('audio', 'audio', false);

-- Create bucket for user avatars
-- INSERT INTO storage.buckets (id, name, public) VALUES ('avatars', 'avatars', true);

-- ==========================================
-- SAMPLE DATA (Optional - for testing)
-- ==========================================
-- Uncomment to insert sample questions

/*
INSERT INTO public.questions (id, section, task_type, difficulty, cefr_level, content, metadata)
VALUES
    (
        'R_DL_001',
        'reading',
        'daily_life',
        'medium',
        'B2',
        '{
            "passage": "Email from University Housing:\n\nDear Students,\n\nStarting next month, the dining hall hours will change. Breakfast will be served from 7:00 AM to 9:00 AM (previously 6:30 AM - 9:30 AM). Lunch remains 11:30 AM - 2:00 PM. Dinner will now end at 7:00 PM instead of 8:00 PM.\n\nThese changes are due to staffing adjustments. We apologize for any inconvenience.\n\nBest regards,\nHousing Office",
            "question": "What time will dinner end starting next month?",
            "options": ["6:30 PM", "7:00 PM", "8:00 PM", "9:00 PM"],
            "correct_answer": "B",
            "explanation": "The email states \"Dinner will now end at 7:00 PM instead of 8:00 PM.\""
        }'::jsonb,
        '{
            "topic": "campus_life",
            "skills_tested": ["detail", "factual"],
            "avg_time_seconds": 60
        }'::jsonb
    );
*/
