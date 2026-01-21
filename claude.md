# TOEFL iBT 2026 Practice Platform — Project Brain

**Version:** 1.0
**Last Updated:** January 13, 2026
**Status:** Planning Phase

---

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [TOEFL 2026 Exam Breakdown](#toefl-2026-exam-breakdown)
3. [Feature List](#feature-list)
4. [User Flows](#user-flows)
5. [System Architecture](#system-architecture)
6. [Adaptive Practice Logic](#adaptive-practice-logic)
7. [AI Evaluation System](#ai-evaluation-system)
8. [Scoring System](#scoring-system)
9. [Content Strategy](#content-strategy)
10. [UI/UX Guidelines](#uiux-guidelines)
11. [Development Roadmap](#development-roadmap)
12. [Technical Stack Recommendations](#technical-stack-recommendations)
13. [Database Schema](#database-schema)
14. [API Design](#api-design)
15. [Risks & Mitigations](#risks--mitigations)
16. [Success Metrics](#success-metrics)

---

## 🎯 Project Overview

### Purpose

Create a **comprehensive, exam-accurate TOEFL iBT practice platform** that mirrors the new 2026 format, providing students with realistic test preparation through adaptive practice, AI-powered evaluation, and detailed performance analytics.

### Target Users

**Primary Users:**
- International students preparing for university admission (ages 18-30)
- Working professionals seeking immigration or certification
- Self-study learners aiming for scores of 4.5+ (1-6 scale)

**Secondary Users:**
- English language instructors
- Test preparation centers
- Academic counselors

### Value Proposition

**Why This Platform Wins:**

1. **Exam Accuracy** — Exact replication of TOEFL 2026 format (adaptive, new task types, timing)
2. **AI-Powered Evaluation** — Instant scoring for Speaking & Writing using advanced NLP models
3. **Adaptive Difficulty** — Personalized practice that adjusts to user performance
4. **Comprehensive Analytics** — Detailed insights into strengths/weaknesses by skill
5. **Affordable Access** — Free tier + premium features (vs. $200+ official practice tests)

### Core Differentiators

- **Multistage adaptive simulation** (first platform to replicate 2026 adaptive format)
- **Dual scoring** (1-6 band + 0-120 legacy mapping during transition period)
- **AI Speech Analysis** using models trained on ETS rubrics
- **Microlearning modules** for targeted skill improvement
- **Progress tracking** with predictive score modeling

---

## 📖 TOEFL 2026 Exam Breakdown

**Source:** [ETS Official Updates](https://www.ets.org/toefl/test-takers/ibt/upcoming-updates-jan-2026.html)

**Effective Date:** January 21, 2026

### Total Test Duration
**67-85 minutes** (down from 116 minutes in old format)

### Scoring System
- **New Scale:** 1–6 bands (half-point increments: 1.0, 1.5, 2.0... 6.0)
- **Transition Period:** January 2026 - January 2028 (dual scores: 1-6 + 0-120)
- **Post-2028:** Only 1-6 band scores
- **Overall Score:** Average of four sections, rounded to nearest 0.5

---

### 1️⃣ Reading Section

**Duration:** 18-27 minutes (adaptive)
**Format:** Multistage adaptive (Module 1 → Module 2 based on performance)

#### Task Types

| Task Type | Description | Example |
|-----------|-------------|---------|
| **Complete the Words** | Fill in missing letters in passages | "The st_dent attended the lect_re" |
| **Read in Daily Life** | Short practical texts (emails, announcements, campus notices) | Email about dorm policy changes |
| **Read an Academic Text** | Traditional academic passages with comprehension questions | Passage on photosynthesis with 5-7 questions |

#### Adaptive Logic
- **Module 1:** Same difficulty for all test-takers
- **Module 2:**
  - **Hard Track:** Academic-heavy content (CEFR C1-C2)
  - **Easy Track:** Daily life content (CEFR B1-B2)

#### Question Count
- Approximately 20 questions total across both modules

---

### 2️⃣ Listening Section

**Duration:** 18-27 minutes (adaptive)
**Format:** Multistage adaptive (Module 1 → Module 2 based on performance)

#### Task Types

| Task Type | Description | Duration |
|-----------|-------------|----------|
| **Listen and Choose a Response** | Hear a question, choose appropriate reply | 30-45 sec per item |
| **Listen to a Conversation** | Campus conversations (student-advisor, roommates) | 2-3 min |
| **Listen to an Announcement** | Campus announcements, event notices | 1-2 min |
| **Listen to an Academic Lecture** | Traditional lecture with comprehension questions | 3-5 min |

#### Adaptive Logic
- **Module 1:** Baseline difficulty
- **Module 2:**
  - **Hard Track:** Complex academic lectures with inference questions
  - **Easy Track:** Conversational campus scenarios

#### Audio Specs
- **Format:** MP3/WAV, 44.1kHz
- **Playback:** Single listen per item (no replay)
- **Volume Control:** User-adjustable

---

### 3️⃣ Speaking Section

**Duration:** ~8 minutes total
**Format:** 4 tasks (non-adaptive)

#### Task Types

| Task | Description | Prep Time | Response Time | Scoring Focus |
|------|-------------|-----------|---------------|---------------|
| **Listen and Repeat** | Repeat 7 sentences about campus/daily life | None | Immediate | Pronunciation, fluency |
| **Take an Interview** | Answer 4 questions about a given topic | None | 45 sec each | Spontaneity, coherence, vocabulary |
| **Integrated Speaking 1** | Read + Listen → Summarize | 30 sec | 60 sec | Integration, clarity |
| **Integrated Speaking 2** | Listen → Express opinion | 20 sec | 60 sec | Organization, reasoning |

#### Recording Specs
- **Format:** WAV/WebM, 16kHz minimum
- **Input:** Microphone (browser-based capture)
- **Processing:** Real-time VAD (Voice Activity Detection)

#### Scoring Criteria (AI Analysis)
1. **Delivery** (Pronunciation, fluency, pacing)
2. **Language Use** (Grammar, vocabulary range)
3. **Topic Development** (Coherence, logical flow, completeness)

---

### 4️⃣ Writing Section

**Duration:** ~23 minutes total
**Format:** 3 tasks (non-adaptive)

#### Task Types

| Task | Description | Time | Word Count | Scoring Focus |
|------|-------------|------|------------|---------------|
| **Build a Sentence** | Grammar/syntax construction (5-7 items) | 5 min | N/A | Grammatical accuracy |
| **Write an Email** | Practical email (request, complaint, inquiry) | 8 min | 80-120 words | Appropriateness, clarity, organization |
| **Writing for an Academic Discussion** | Contribute to online discussion forum | 10 min | 100+ words | Critical thinking, support, coherence |

#### Input Specs
- **Format:** Plain text (rich text editor with word count)
- **Spell Check:** Disabled (exam-like conditions)
- **Copy/Paste:** Disabled

#### Scoring Criteria (AI Analysis)
1. **Grammar & Usage** (Sentence structure, verb forms, articles)
2. **Mechanics** (Spelling, punctuation, capitalization)
3. **Organization** (Logical flow, transitions)
4. **Development** (Support, detail, examples)
5. **Appropriateness** (Tone, register for email task)

---

## 🎁 Feature List

### MVP Features (Phase 1)

#### Core Functionality
- [ ] **User Authentication**
  - Email/password signup
  - Social OAuth (Google, Facebook)
  - Guest mode (limited features)

- [ ] **Section-Wise Practice**
  - Practice each section independently
  - Choose difficulty level (Easy/Medium/Hard)
  - Timer with pause functionality
  - Instant results with scoring

- [ ] **Full Mock Test**
  - Complete 67-85 minute simulated test
  - Adaptive Reading & Listening modules
  - Auto-save progress every 30 seconds
  - Score report with section breakdown

- [ ] **Basic AI Evaluation**
  - Speaking: Pronunciation + fluency scoring
  - Writing: Grammar + mechanics scoring
  - Sample answer comparisons

- [ ] **Progress Dashboard**
  - Score history (last 10 attempts)
  - Section-wise performance graph
  - Estimated band level (1-6 scale)

- [ ] **Question Bank**
  - Minimum 500 questions across all sections
  - Reading: 100 passages
  - Listening: 80 audio files
  - Speaking: 50 prompts
  - Writing: 60 prompts

#### Technical Requirements
- [ ] Responsive web app (desktop + tablet optimized)
- [ ] Audio playback with progress bar
- [ ] Microphone recording (browser-based)
- [ ] Real-time word counter
- [ ] Auto-submit on timer expiration

---

### Phase 2 Features (Beta)

#### Enhanced Learning
- [ ] **Detailed AI Feedback**
  - Speaking: Phoneme-level pronunciation analysis
  - Writing: Contextual grammar suggestions
  - Content relevance scoring
  - Rubric-aligned detailed feedback (3 criteria per response)

- [ ] **Adaptive Practice Engine**
  - Difficulty adjusts based on rolling performance
  - Personalized question recommendations
  - Weak area identification with targeted drills

- [ ] **Study Plans**
  - Pre-built 2-week, 4-week, 8-week plans
  - Custom plan builder (target score + timeline)
  - Daily practice reminders

- [ ] **Analytics Upgrade**
  - Skill heatmap (20+ micro-skills)
  - Time management analysis
  - Peer comparison (anonymous)
  - Score prediction model (ML-based)

- [ ] **Content Expansion**
  - 1,500+ total questions
  - Video explanations for difficult questions
  - Vocabulary builder (context-based learning)

#### Community Features
- [ ] Discussion forums (study groups)
- [ ] Peer review for writing tasks
- [ ] Leaderboards (optional opt-in)

---

### Phase 3 Features (Full Launch)

#### Advanced AI
- [ ] **Speaking Coach**
  - Real-time pronunciation feedback during practice
  - Accent reduction training
  - Pacing & pauses optimization

- [ ] **Writing Mentor**
  - Sentence rephrasing suggestions
  - Style improvement (academic vs conversational)
  - Plagiarism detection

- [ ] **Personalized Learning Paths**
  - Adaptive curriculum based on diagnostic test
  - Spaced repetition for vocabulary
  - Mastery-based progression (unlock system)

#### Premium Features
- [ ] **Live Tutoring Integration**
  - 1-on-1 sessions with certified instructors
  - Group workshops (Speaking practice)
  - Essay review service

- [ ] **Score Guarantee Program**
  - Money-back if target score not achieved
  - Requires completion of assigned practice volume

- [ ] **Institutional Dashboard**
  - Bulk accounts for language centers
  - Instructor oversight tools
  - Custom content creation

#### Technical Enhancements
- [ ] Mobile apps (iOS + Android)
- [ ] Offline mode (download practice sets)
- [ ] Multi-language interface (10+ languages)
- [ ] Accessibility (WCAG 2.1 AA compliance)

---

### Future Expansion Ideas

- **TOEFL Junior** and **TOEFL Essentials** practice
- **AI Study Buddy** (chatbot for Q&A)
- **VR Speaking Practice** (simulated interview scenarios)
- **Integration with university application platforms**
- **Corporate B2B product** (employee English assessment)
- **API for third-party integrations**

---

## 🔄 User Flows

### Flow 1: New User Onboarding

```
1. Landing Page → [Sign Up Button]
2. Registration Form
   - Email + Password
   - OR Social OAuth
   - Age verification (13+)
3. Welcome Survey (Optional, skippable)
   - Current English level (Self-assessment)
   - Target score
   - Test date (if scheduled)
   - Study hours per week
4. Diagnostic Test Prompt
   - "Take a 15-min diagnostic to personalize your experience"
   - [Start Diagnostic] or [Skip for Now]
5. Dashboard (First Visit)
   - Tutorial overlay (highlight key features)
   - Suggested first action: "Try a Reading practice set"
```

**Exit Points:**
- Email verification required before full access
- Guest users: Limited to 2 practice sets before signup

---

### Flow 2: Section Practice Mode

```
1. Dashboard → [Practice] tab
2. Section Selection
   - Reading / Listening / Speaking / Writing
3. Configuration Screen
   - Difficulty: Easy / Medium / Hard
   - Number of questions: 5 / 10 / 20
   - Timed mode: ON/OFF
4. Instructions Screen
   - Task type overview
   - Keyboard shortcuts
   - [Begin Practice]
5. Practice Session
   - Question → Answer → [Next]
   - Timer (if enabled) — visible countdown
   - Progress bar (Question X of Y)
   - [Pause] button → Pause modal
6. Review Screen (After completion)
   - Score breakdown
   - Correct/Incorrect answers
   - Detailed explanations
   - Time spent per question
   - [Retry] or [Try Another Set] or [Back to Dashboard]
7. Auto-save to Progress History
```

**Special Handling:**
- **Speaking/Writing:** Show "Evaluating..." spinner (3-10 sec)
- **Audio tasks:** Volume check before starting
- **Unsaved progress:** Warning modal on browser close

---

### Flow 3: Full Mock Test

```
1. Dashboard → [Full Mock Test]
2. Pre-Test Checklist
   - ✓ Quiet environment
   - ✓ 90 minutes available
   - ✓ Headphones + microphone tested
   - ✓ Stable internet connection
   - [Start Test] (disabled until all checks confirmed)
3. System Check
   - Audio playback test
   - Microphone recording test
   - [Continue]
4. Test Session (Sequential)
   a. Reading Module 1 → Module 2 (adaptive)
   b. Listening Module 1 → Module 2 (adaptive)
   c. Optional 5-min break (skippable)
   d. Speaking (4 tasks)
   e. Writing (3 tasks)
5. Submission Confirmation
   - "You've completed the test. Scores typically available in 2 min."
   - [View Preliminary Scores] (Reading/Listening only)
6. Processing Screen
   - "Evaluating Speaking & Writing..." (progress bar)
   - Estimated wait: 5 minutes
7. Complete Score Report
   - Overall band: X.X / 6.0
   - Section scores with graphs
   - Performance analysis
   - [Download PDF] [Share] [Retake]
8. Suggested Next Steps
   - "Your weakest area is Listening — Try this practice set"
```

**Technical Requirements:**
- Auto-save every 30 seconds to prevent data loss
- Session recovery if connection drops
- No back navigation (mimics real test)

---

### Flow 4: Results & Analytics

```
1. Dashboard → [My Progress]
2. Overview Tab
   - Current overall band estimate
   - Line graph: Score history (last 10 tests)
   - Total practice time
   - Questions completed
3. Section Deep-Dive
   - Click any section → Detailed view
   - Skill breakdown (e.g., Reading: Inference, Vocabulary, Main Idea)
   - Accuracy rate per skill
   - Time efficiency metrics
4. AI Insights Panel
   - "Your pronunciation improved 12% this week"
   - "Focus on transition words in writing"
   - Recommended practice tasks
5. Compare Feature
   - Select two test attempts → Side-by-side comparison
   - Highlight improvements/declines
6. Export Options
   - Download CSV (all attempts)
   - Print score report
   - Share badge on social media
```

---

## 🏗️ System Architecture

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                         CLIENT LAYER                        │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐     │
│  │ Web App      │  │ Mobile App   │  │ Admin Panel  │     │
│  │ (React/Vue)  │  │ (React Native)│  │ (React)      │     │
│  └──────────────┘  └──────────────┘  └──────────────┘     │
└─────────────────────────────────────────────────────────────┘
                              ↕ HTTPS/WebSocket
┌─────────────────────────────────────────────────────────────┐
│                      API GATEWAY LAYER                      │
│                    (Nginx / AWS API Gateway)                │
│              Rate Limiting | Authentication | Logging        │
└─────────────────────────────────────────────────────────────┘
                              ↕
┌─────────────────────────────────────────────────────────────┐
│                     APPLICATION LAYER                       │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐     │
│  │ Auth Service │  │ Test Engine  │  │ AI Eval      │     │
│  │ (Node/Django)│  │ (Node/Python)│  │ Service      │     │
│  └──────────────┘  └──────────────┘  │ (Python/ML)  │     │
│  ┌──────────────┐  ┌──────────────┐  └──────────────┘     │
│  │ Analytics    │  │ Content Mgmt │  ┌──────────────┐     │
│  │ Service      │  │ Service      │  │ Notification │     │
│  └──────────────┘  └──────────────┘  │ Service      │     │
│                                       └──────────────┘     │
└─────────────────────────────────────────────────────────────┘
                              ↕
┌─────────────────────────────────────────────────────────────┐
│                        DATA LAYER                           │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐     │
│  │ PostgreSQL   │  │ MongoDB      │  │ Redis        │     │
│  │ (User, Tests)│  │ (Content)    │  │ (Cache/Queue)│     │
│  └──────────────┘  └──────────────┘  └──────────────┘     │
│  ┌──────────────┐  ┌──────────────┐                       │
│  │ S3/Cloud     │  │ Elasticsearch│                       │
│  │ Storage      │  │ (Search)     │                       │
│  │ (Audio/Media)│  └──────────────┘                       │
│  └──────────────┘                                          │
└─────────────────────────────────────────────────────────────┘
                              ↕
┌─────────────────────────────────────────────────────────────┐
│                     EXTERNAL SERVICES                       │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐     │
│  │ OpenAI API   │  │ AWS Polly    │  │ Stripe       │     │
│  │ (AI Eval)    │  │ (TTS)        │  │ (Payments)   │     │
│  └──────────────┘  └──────────────┘  └──────────────┘     │
│  ┌──────────────┐  ┌──────────────┐                       │
│  │ SendGrid     │  │ Google       │                       │
│  │ (Email)      │  │ Analytics    │                       │
│  └──────────────┘  └──────────────┘                       │
└─────────────────────────────────────────────────────────────┘
```

---

### Component Details

#### 1. Frontend Layer

**Technology:** React.js + TypeScript + TailwindCSS

**Key Components:**
- **TestInterface:** Question renderer (adaptive layouts per task type)
- **AudioPlayer:** Custom player with waveform visualization
- **AudioRecorder:** WebRTC-based recording with real-time monitoring
- **Timer:** Countdown with visual/audio alerts
- **RichTextEditor:** Custom editor for writing tasks (no spell check)
- **DashboardCharts:** D3.js visualizations for analytics

**State Management:** Redux Toolkit / Zustand

**Routing:** React Router v6

**Build Tool:** Vite

---

#### 2. Backend Layer

**Primary Stack:** Node.js + Express.js / Python FastAPI

**Microservices:**

##### Auth Service
- **Tech:** Node.js + Passport.js + JWT
- **Functions:**
  - User registration/login
  - OAuth integration
  - Session management
  - Role-based access control (User, Admin, Instructor)

##### Test Engine Service
- **Tech:** Node.js + TypeScript
- **Functions:**
  - Adaptive test logic (module selection)
  - Question randomization
  - Timer management
  - Progress tracking
  - Answer validation (Reading/Listening)

##### AI Evaluation Service
- **Tech:** Python 3.11 + FastAPI
- **Functions:**
  - Speech-to-text (Whisper API / Google Speech-to-Text)
  - Speaking evaluation (custom model + GPT-4)
  - Writing evaluation (grammar API + GPT-4)
  - Rubric-based scoring
  - Feedback generation

##### Analytics Service
- **Tech:** Python + Pandas + NumPy
- **Functions:**
  - Score calculation (1-6 band + 0-120 mapping)
  - Performance analysis
  - Weak area detection (ML clustering)
  - Predictive modeling (XGBoost)

##### Content Management Service
- **Tech:** Node.js + MongoDB
- **Functions:**
  - Question CRUD operations
  - Difficulty tagging
  - Content versioning
  - Media file management

---

#### 3. Database Design

**User Data:** PostgreSQL (relational)
- Users table
- Test_attempts table
- User_answers table
- Subscriptions table

**Content Data:** MongoDB (document-based)
- Questions collection (flexible schema per task type)
- Audio_files collection
- Explanations collection

**Cache:** Redis
- Session storage
- Leaderboard data
- Frequently accessed questions

**Search:** Elasticsearch
- Full-text search for question content
- User search in admin panel

---

#### 4. Media Handling

**Audio Storage:** AWS S3 / Cloudflare R2
- **Listening files:** MP3, 128kbps, stereo
- **Speaking recordings:** WAV, 16kHz, mono
- **CDN:** CloudFront for global delivery

**Processing Pipeline:**
1. User uploads recording → Pre-signed S3 URL
2. Lambda function triggers on upload
3. Audio normalization (ffmpeg)
4. Speech-to-text transcription
5. AI evaluation
6. Results stored in DB
7. Webhook notification to frontend

---

#### 5. AI Evaluation Architecture

##### Speaking Evaluation Pipeline

```
Audio Input (WAV)
    ↓
[Speech-to-Text] (Whisper API / Google Speech-to-Text)
    ↓
Transcript + Audio Features
    ↓
[Multi-Model Analysis]
    ├─→ Pronunciation Model (phoneme accuracy)
    ├─→ Fluency Analyzer (pauses, hesitations, speech rate)
    ├─→ Grammar Checker (LanguageTool API)
    └─→ Content Scorer (GPT-4 with custom rubric)
    ↓
[Scoring Engine] (weighted average)
    ↓
Band Score (1-6) + Detailed Feedback
```

**Models Used:**
- **ASR:** OpenAI Whisper Large-v3
- **Pronunciation:** Custom model trained on TOEFL Speaking samples
- **Fluency:** Rule-based + acoustic features (pitch, energy)
- **Content:** GPT-4o with few-shot prompting

**Scoring Weights:**
- Pronunciation: 30%
- Fluency: 30%
- Grammar: 20%
- Content: 20%

##### Writing Evaluation Pipeline

```
Text Input
    ↓
[Preprocessing] (tokenization, cleaning)
    ↓
[Multi-Model Analysis]
    ├─→ Grammar & Mechanics (LanguageTool + GPT-4)
    ├─→ Organization Analyzer (coherence, transitions)
    ├─→ Vocabulary Scorer (diversity, appropriateness)
    └─→ Content Relevance (prompt adherence, development)
    ↓
[Scoring Engine]
    ↓
Band Score (1-6) + Feedback with Highlights
```

**Models Used:**
- **Grammar:** LanguageTool API + Custom rules
- **Content:** GPT-4o with TOEFL Writing rubric
- **Organization:** Sentence embeddings (SBERT) for coherence analysis

**Scoring Weights:**
- Grammar & Mechanics: 35%
- Organization: 25%
- Vocabulary: 20%
- Content Development: 20%

---

## 🎚️ Adaptive Practice Logic

### Reading & Listening Adaptive Engine

**Goal:** Replicate ETS's multistage adaptive format

#### Module 1 (Baseline)
- **Difficulty:** Medium (CEFR B2)
- **Question Count:** 10 questions
- **Content Mix:** 50% academic, 50% daily life
- **Performance Tracking:**
  - Correct answers
  - Time per question
  - Confidence indicators (if user rates difficulty)

#### Module 2 Selection Logic

```python
def select_module_2(module_1_performance):
    correct_answers = module_1_performance.correct_count
    total_questions = module_1_performance.total_count
    accuracy = correct_answers / total_questions

    avg_time = module_1_performance.avg_time_per_question
    expected_time = module_1_performance.expected_avg_time

    # Primary criterion: Accuracy
    if accuracy >= 0.70:
        difficulty = "hard"
    elif accuracy >= 0.50:
        difficulty = "medium"  # Rare, usually binary choice
    else:
        difficulty = "easy"

    # Secondary adjustment: Speed
    if avg_time < expected_time * 0.7:
        # User is fast — potentially increase difficulty
        if difficulty == "medium":
            difficulty = "hard"
    elif avg_time > expected_time * 1.3:
        # User is slow — potentially decrease difficulty
        if difficulty == "medium":
            difficulty = "easy"

    return select_question_set(difficulty)
```

#### Hard Track
- **Difficulty:** CEFR C1-C2
- **Content:** 80% academic (sciences, humanities, social studies)
- **Question Types:** Inference, vocabulary in context, rhetorical purpose
- **Passage Length:** 350-450 words

#### Easy Track
- **Difficulty:** CEFR B1-B2
- **Content:** 80% daily life (emails, schedules, campus conversations)
- **Question Types:** Factual, vocabulary, main idea
- **Passage Length:** 200-300 words

#### Scoring Implications
- **Hard track correct:** Higher contribution to final score
- **Easy track correct:** Lower contribution to final score
- **Final score:** Weighted average considering difficulty

---

### Speaking & Writing Practice Adaptation

**Note:** These sections are **not adaptive during the test**, but the platform offers adaptive **practice recommendations**.

#### Personalized Task Selection

```python
def recommend_next_practice(user_history):
    weak_areas = identify_weak_skills(user_history)
    # weak_areas = ["pronunciation", "grammar", "organization"]

    task_priorities = {
        "pronunciation": ["listen_and_repeat", "shadowing_exercises"],
        "grammar": ["build_sentence", "grammar_drills"],
        "organization": ["structured_writing", "outline_practice"]
    }

    recommended_tasks = []
    for skill in weak_areas[:2]:  # Top 2 weaknesses
        recommended_tasks.extend(task_priorities[skill])

    return recommended_tasks

def adjust_difficulty(skill, recent_scores):
    avg_score = mean(recent_scores[-5:])  # Last 5 attempts

    if avg_score >= 5.0:
        return "advanced"
    elif avg_score >= 3.5:
        return "intermediate"
    else:
        return "beginner"
```

---

## 🤖 AI Evaluation System

### Speaking Evaluation — Detailed Breakdown

#### 1. Pronunciation Analysis

**Phoneme-Level Scoring:**
- ASR model generates phoneme timestamps
- Compare to expected phonemes (from transcript dictionary)
- Calculate phoneme error rate (PER)

**Metrics:**
- **Accuracy:** % of phonemes correctly pronounced
- **Common errors:** List of mispronounced sounds (e.g., /θ/ → /s/)
- **Stress patterns:** Word-level stress accuracy

**Feedback Example:**
```
Pronunciation: 4.0 / 6.0
- Good: Clear articulation of vowels
- Needs work: "th" sound in "thought" → practice /θ/
- Suggestion: Try this exercise: [Link to /θ/ drills]
```

#### 2. Fluency Analysis

**Acoustic Features:**
- **Speech rate:** Words per minute (WPM)
- **Pauses:** Frequency and duration of silent gaps
- **Hesitations:** Filler words ("um", "uh"), repetitions
- **Pacing:** Variance in speech rate (too fast/slow sections)

**Scoring Logic:**
- **Optimal WPM:** 140-160 (native speaker range)
- **Pause penalty:** Pauses >2 seconds or >5 pauses/minute
- **Filler penalty:** >3 fillers/minute

**Feedback Example:**
```
Fluency: 3.5 / 6.0
- Speech rate: 128 WPM (slightly slow — target 140-160)
- Pauses: 4 long pauses detected (reduce anxiety, practice pacing)
- Fillers: 7 "um"s in 60 seconds (try silent pauses instead)
```

#### 3. Language Use (Grammar & Vocabulary)

**Grammar Evaluation:**
- ASR transcript → LanguageTool API
- Error categorization (subject-verb agreement, tenses, articles)
- Error density (errors per 100 words)

**Vocabulary Evaluation:**
- **Lexical diversity:** Type-token ratio (TTR)
- **Academic vocabulary:** % of Academic Word List (AWL) words
- **Sophistication:** Average word frequency rank

**Feedback Example:**
```
Language Use: 4.5 / 6.0
- Grammar: 2 errors detected
  • "He go to school" → "He goes to school"
- Vocabulary: Good range (45% diverse words)
- Tip: Use more transition words ("furthermore", "however")
```

#### 4. Topic Development

**Content Scoring (GPT-4 Evaluation):**

**Prompt Template:**
```
You are a TOEFL Speaking evaluator. Rate the following response on a 1-6 scale based on:
1. Completeness (fully addresses the prompt)
2. Coherence (logical flow of ideas)
3. Support (examples, details, reasoning)
4. Relevance (stays on topic)

Prompt: [Original speaking task]
Transcript: [User's response]

Provide:
- Score (1.0 to 6.0)
- Brief justification (2-3 sentences)
- One specific improvement suggestion
```

**Feedback Example:**
```
Topic Development: 5.0 / 6.0
- You fully addressed the question with clear reasoning
- Strong example about your university experience
- Improvement: Add one more supporting detail to strengthen your argument
```

#### Overall Speaking Score Calculation

```python
def calculate_speaking_score(pronunciation, fluency, language, content):
    weighted_score = (
        pronunciation * 0.30 +
        fluency * 0.30 +
        language * 0.20 +
        content * 0.20
    )
    # Round to nearest 0.5
    return round(weighted_score * 2) / 2
```

---

### Writing Evaluation — Detailed Breakdown

#### 1. Grammar & Mechanics

**Grammar Checking:**
- LanguageTool API (rule-based)
- Custom TOEFL-specific rules (common ESL errors)
- GPT-4 for contextual errors (idiomatic expressions)

**Mechanics:**
- Spelling errors (Hunspell dictionary)
- Punctuation (missing commas, run-ons)
- Capitalization (proper nouns, sentence starts)

**Error Categorization:**
- **Critical:** Changes meaning (e.g., verb tense errors)
- **Major:** Affects clarity (e.g., missing articles)
- **Minor:** Stylistic (e.g., comma splices)

**Feedback Example:**
```
Grammar & Mechanics: 4.0 / 6.0
Errors detected: 5
- Line 2: "The students was studying" → "were studying" [Critical]
- Line 5: Missing comma after introductory phrase [Minor]
- Line 8: "alot" → "a lot" [Major]

Tip: Review subject-verb agreement rules for plural subjects.
```

#### 2. Organization

**Coherence Analysis:**
- **Paragraph structure:** Introduction, body, conclusion detection
- **Transitions:** Count and quality of linking words
- **Sentence variety:** Mix of simple, compound, complex sentences
- **Logical flow:** Sentence embeddings (SBERT) to detect topic shifts

**Scoring Logic:**
- **High coherence:** Smooth transitions, clear topic sentences, logical progression
- **Medium coherence:** Some abrupt shifts, weak transitions
- **Low coherence:** Disconnected ideas, no clear structure

**Feedback Example:**
```
Organization: 5.0 / 6.0
- Clear introduction and conclusion
- Good use of transitions ("However", "For example")
- Suggestion: Strengthen topic sentence in paragraph 2
```

#### 3. Vocabulary

**Metrics:**
- **Lexical diversity:** TTR (target: >0.6 for 100+ word essays)
- **Academic vocabulary:** AWL word percentage (target: >10%)
- **Sophistication:** Average word frequency (prefer less common words)
- **Appropriateness:** Register analysis (formal vs informal)

**Feedback Example:**
```
Vocabulary: 4.5 / 6.0
- Good variety (68% unique words)
- Strong academic terms: "significant", "demonstrates", "consequently"
- Improvement: Avoid repetition of "very" (4 times) — use "extremely", "highly"
```

#### 4. Content Development

**GPT-4 Evaluation Prompt:**
```
You are a TOEFL Writing evaluator. Rate this essay on a 1-6 scale based on:
1. Prompt adherence (directly answers the question)
2. Development (depth of ideas, examples, details)
3. Clarity (easy to understand, no ambiguity)
4. Critical thinking (analysis, not just description)

Prompt: [Original writing task]
Essay: [User's response]

Provide:
- Score (1.0 to 6.0)
- 2-3 strengths
- 2-3 areas for improvement
```

**Feedback Example:**
```
Content Development: 5.5 / 6.0
Strengths:
- Strong thesis statement with clear position
- Relevant personal example (university project)
- Good balance of description and analysis

Improvements:
- Add one counterargument to strengthen your position
- Expand on the implications of your conclusion
```

#### Overall Writing Score Calculation

```python
def calculate_writing_score(grammar, organization, vocabulary, content):
    weighted_score = (
        grammar * 0.35 +
        organization * 0.25 +
        vocabulary * 0.20 +
        content * 0.20
    )
    return round(weighted_score * 2) / 2
```

---

### AI Model Training & Fine-Tuning

**For Production Quality:**

1. **Collect Training Data**
   - Partner with language schools for annotated responses
   - Use publicly available TOEFL sample answers
   - Synthetic data generation (GPT-4 → human verification)

2. **Fine-Tune Models**
   - **Speaking:** Fine-tune Whisper on ESL accents (Chinese, Spanish, Arabic)
   - **Scoring:** Train classification model on 10k+ scored responses
   - **Feedback:** Curate template library (500+ feedback variations)

3. **Continuous Improvement**
   - Collect user feedback on AI scores
   - A/B test different evaluation prompts
   - Periodically re-calibrate against human raters

---

## 📊 Scoring System

### 1-6 Band Scale Definition

| Band | CEFR | Description | Example Performance |
|------|------|-------------|---------------------|
| **6.0** | C2 | Highly proficient | Near-native fluency, sophisticated vocabulary, complex grammar with rare errors |
| **5.5** | C1+ | Very proficient | Fluent with minor errors, strong academic vocabulary, clear organization |
| **5.0** | C1 | Proficient | Generally fluent, occasional hesitations, good range of vocabulary, mostly accurate grammar |
| **4.5** | B2+ | Upper-intermediate plus | Communicates effectively with some errors, adequate vocabulary, clear but simple structures |
| **4.0** | B2 | Upper-intermediate | Expresses ideas but with noticeable errors, limited vocabulary range, basic organization |
| **3.5** | B1+ | Intermediate plus | Basic communication, frequent errors, repetitive vocabulary, simple sentences |
| **3.0** | B1 | Intermediate | Limited expression, many errors affecting clarity, very basic vocabulary |
| **2.5** | A2+ | Elementary plus | Very limited communication, constant errors, minimal vocabulary |
| **2.0** | A2 | Elementary | Almost no effective communication, severe errors throughout |
| **1.5** | A1+ | Beginner plus | Memorized phrases only, incomprehensible for most part |
| **1.0** | A1 | Beginner | No functional language ability |

### Score Mapping: 1-6 Band ↔ 0-120 Scale

**Transition Period (2026-2028):** Display both scores

| Section Band | Legacy Score (0-30) | Overall Band | Legacy Total (0-120) |
|--------------|---------------------|--------------|----------------------|
| 6.0 | 30 | 6.0 | 120 |
| 5.5 | 27-29 | 5.5 | 110-119 |
| 5.0 | 24-26 | 5.0 | 96-109 |
| 4.5 | 21-23 | 4.5 | 84-95 |
| 4.0 | 18-20 | 4.0 | 72-83 |
| 3.5 | 15-17 | 3.5 | 60-71 |
| 3.0 | 12-14 | 3.0 | 48-59 |
| 2.5 | 9-11 | 2.5 | 36-47 |
| 2.0 | 6-8 | 2.0 | 24-35 |
| 1.5 | 3-5 | 1.5 | 12-23 |
| 1.0 | 0-2 | 1.0 | 0-11 |

**Formula:**
```python
def band_to_legacy_range(band_score):
    # Approximate mapping
    legacy_min = (band_score - 1) * 24
    legacy_max = legacy_min + 23
    return (max(0, legacy_min), min(120, legacy_max))
```

---

### Section Score Calculation

#### Reading & Listening (Auto-Scored)

```python
def calculate_section_score(correct, total, difficulty_level):
    # Base accuracy
    raw_accuracy = correct / total

    # Difficulty multipliers (adaptive consideration)
    multipliers = {
        "easy": 0.85,
        "medium": 1.0,
        "hard": 1.15
    }

    adjusted_score = raw_accuracy * multipliers[difficulty_level] * 6.0

    # Cap at 6.0
    return min(round(adjusted_score * 2) / 2, 6.0)
```

#### Speaking & Writing (AI-Scored)

Already covered in [AI Evaluation System](#ai-evaluation-system) section.

---

### Overall Score Calculation

```python
def calculate_overall_score(reading, listening, speaking, writing):
    section_scores = [reading, listening, speaking, writing]
    average = sum(section_scores) / 4

    # Round to nearest 0.5
    overall = round(average * 2) / 2

    return overall

# Example:
# Reading: 5.0, Listening: 4.5, Speaking: 4.0, Writing: 5.5
# Average: (5.0 + 4.5 + 4.0 + 5.5) / 4 = 4.75 → rounds to 5.0
```

---

### Score Report Components

**Displayed Information:**

1. **Overall Band Score** (large, prominent)
2. **Section Scores** (bar chart)
3. **CEFR Level** (e.g., "B2 - Upper Intermediate")
4. **Legacy Score Equivalent** (during transition period)
5. **Percentile Ranking** (compared to platform users)
6. **Strengths & Weaknesses** (AI-generated summary)
7. **Improvement Suggestions** (3-5 actionable tips)
8. **Score History Graph** (last 10 attempts)
9. **Predicted Score Range** (ML model prediction: "You're likely to score 4.5-5.0 on test day")

**Downloadable PDF Report:**
- Header with user name, test date, test ID
- All above components in printable format
- Detailed rubric breakdown per task
- QR code linking to online version

---

## 📚 Content Strategy

### Question Bank Structure

**Total Questions (MVP):** 500+

| Section | Task Type | Count | Difficulty Distribution |
|---------|-----------|-------|-------------------------|
| **Reading** | Complete the Words | 50 | 20 Easy / 20 Med / 10 Hard |
| | Read in Daily Life | 30 | 15 Easy / 10 Med / 5 Hard |
| | Academic Text (passages) | 40 passages | 10 Easy / 20 Med / 10 Hard |
| **Listening** | Choose a Response | 40 | 15 Easy / 15 Med / 10 Hard |
| | Conversation | 25 | 10 Easy / 10 Med / 5 Hard |
| | Announcement | 20 | 10 Easy / 8 Med / 2 Hard |
| | Academic Lecture | 30 | 5 Easy / 15 Med / 10 Hard |
| **Speaking** | Listen and Repeat | 50 | 20 Easy / 20 Med / 10 Hard |
| | Interview Questions | 40 | 15 Easy / 15 Med / 10 Hard |
| | Integrated Tasks | 30 | 10 Easy / 15 Med / 5 Hard |
| **Writing** | Build a Sentence | 60 | 25 Easy / 25 Med / 10 Hard |
| | Email Prompts | 30 | 10 Easy / 15 Med / 5 Hard |
| | Academic Discussion | 30 | 10 Easy / 15 Med / 5 Hard |

---

### Content Creation Guidelines

#### 1. Reading Content

**Complete the Words:**
- Passages: 50-100 words
- Missing letters: 8-12 per passage
- Topics: campus life, announcements, instructions
- Difficulty factors:
  - Easy: Common words (3-5 letters)
  - Hard: Academic vocabulary (7+ letters)

**Read in Daily Life:**
- Formats: Emails, texts, schedules, notices
- Length: 80-150 words
- Questions: 3-5 per text (factual, inference)
- Real-world scenarios: dorm policies, event invitations, course changes

**Academic Text:**
- Formats: Textbook excerpts, research summaries, essays
- Length: 300-450 words
- Questions: 6-8 per passage (main idea, detail, inference, vocabulary, purpose)
- Topics: Biology, History, Psychology, Environmental Science, Literature, Technology
- Difficulty factors:
  - Easy: Clear structure, concrete examples, common academic words
  - Hard: Abstract concepts, dense information, rare vocabulary

---

#### 2. Listening Content

**Audio Production Standards:**
- **Speakers:** Native English speakers (North American accent for consistency)
- **Recording:** Professional studio quality (no background noise)
- **Script length:**
  - Conversations: 200-300 words (2-3 min)
  - Announcements: 100-150 words (1-2 min)
  - Lectures: 400-600 words (3-5 min)

**Content Types:**

**Conversations:**
- Student ↔ Advisor (course selection, major changes)
- Student ↔ Librarian (research help)
- Student ↔ Roommate (living arrangements)
- Student ↔ Professor (assignment clarification)

**Announcements:**
- Campus events (career fair, guest speakers)
- Policy changes (parking, dining hall hours)
- Weather alerts
- Club meetings

**Lectures:**
- Mini-lectures on academic topics (same as reading topics)
- Include: Introduction, main points (2-3), examples, conclusion
- Natural speech patterns (some pauses, filler words, self-corrections)

---

#### 3. Speaking Content

**Prompts Design:**

**Listen and Repeat:**
- Sentences: 8-15 words
- Topics: Campus directions, course descriptions, daily routines
- Phonetic variety: Include challenging sounds (/θ/, /ð/, /r/, /l/)

**Interview Questions:**
- Personal: "Describe your favorite place to study. Why do you like it?"
- Opinion: "Do you prefer online or in-person classes? Explain."
- Hypothetical: "If you could visit any country, which would you choose and why?"
- Experience: "Tell me about a time you overcame a challenge."

**Integrated Tasks:**
- Task 1: Read short passage (75 words) + Listen to conversation → Summarize the problem and solutions
- Task 2: Listen to short lecture (90 seconds) → Explain the main concept using the example from the lecture

---

#### 4. Writing Content

**Prompts Design:**

**Build a Sentence:**
- Provide: 3-5 words + structural cue
- Example: Words: "students / library / study" → Write a sentence using present continuous tense
- Grammar focus: Verb tenses, prepositions, articles, conditionals

**Email Prompts:**
- Scenarios:
  - Request: Ask professor for deadline extension
  - Complaint: Report maintenance issue in dorm
  - Inquiry: Ask about club membership requirements
  - Thank you: Thank mentor for career advice
- Evaluation criteria: Tone (polite, formal), clarity, completeness

**Academic Discussion:**
- Format: Professor posts question, 2 classmate responses provided, student adds their view
- Topics:
  - Education: "Should universities require internships for graduation?"
  - Technology: "Is social media beneficial or harmful for society?"
  - Environment: "What's the best way to reduce plastic waste on campus?"
  - Culture: "Should students study abroad during their degree?"

---

### Difficulty Tagging System

**Each question must have:**

```json
{
  "question_id": "R_AC_047",
  "section": "reading",
  "task_type": "academic_text",
  "difficulty": "hard",
  "cefr_level": "C1",
  "skills_tested": ["inference", "vocabulary_in_context", "author_purpose"],
  "topic": "environmental_science",
  "avg_time_seconds": 120,
  "correct_rate": 0.42,
  "passage_word_count": 380,
  "metadata": {
    "created_date": "2026-01-10",
    "last_updated": "2026-01-10",
    "reviewed_by": "content_team_member_3",
    "version": 1
  }
}
```

---

### Content Quality Assurance

**Pre-Launch Checklist:**

1. **Accuracy Review**
   - All correct answers verified by 2+ TOEFL instructors
   - Explanations clear and pedagogically sound
   - No ambiguous questions

2. **Diversity Check**
   - Topics balanced (no overrepresentation of one subject)
   - Cultural neutrality (no US-centric bias)
   - Speaker diversity (gender, accent variation in audio)

3. **Technical QA**
   - Audio files tested on multiple devices
   - Transcripts match audio exactly
   - Images (if any) load correctly
   - Timer values accurate

4. **Plagiarism Screening**
   - All content original or properly licensed
   - Paraphrased sources cited in internal docs

---

### Content Expansion Plan

**Phase 2 (Beta):**
- Add 1,000 more questions (total 1,500)
- Introduce 10 full mock test sets (unique questions per set)
- Create 50 video explanations (most-missed questions)

**Phase 3 (Full Launch):**
- 3,000+ total questions
- Weekly new question releases (10-15 per week)
- User-submitted questions (vetted by instructors)
- Content API for third-party integrations

---

## 🎨 UI/UX Guidelines

### Design Principles

1. **Clarity Over Aesthetics** — Every element serves a function
2. **Reduce Cognitive Load** — One task visible at a time
3. **Exam Authenticity** — UI mimics official TOEFL interface (simple, distraction-free)
4. **Instant Feedback** — Never leave users wondering if an action worked
5. **Accessibility First** — WCAG 2.1 AA compliance from day one

---

### Visual Design System

**Color Palette:**

```
Primary: #2563EB (Blue — trust, professionalism)
Secondary: #10B981 (Green — success, progress)
Accent: #F59E0B (Amber — warnings, highlights)
Error: #EF4444 (Red — errors, alerts)
Neutral: #6B7280 (Gray — text, borders)

Background: #FFFFFF (White)
Surface: #F9FAFB (Light gray)
Text Primary: #111827 (Almost black)
Text Secondary: #6B7280 (Medium gray)
```

**Typography:**

```
Headings: Inter (weights: 600, 700)
Body: Inter (weights: 400, 500)
Monospace (code, timers): JetBrains Mono

Font Sizes:
- Heading 1: 32px
- Heading 2: 24px
- Heading 3: 20px
- Body: 16px
- Small: 14px
- Timer: 28px (monospace)
```

**Spacing System:**
- Base unit: 4px
- Common spacings: 8px, 12px, 16px, 24px, 32px, 48px

---

### Key UI Components

#### 1. Test Interface Layout

```
┌─────────────────────────────────────────────────────────┐
│  TOEFL Practice                Section: Reading  [?]    │
│  Question 5 of 20               Time: 15:32       [||]  │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  [Question Panel - Left 60%]    [Tools Panel - 20%]    │
│                                                         │
│  Passage text here...            [ ] Mark for Review   │
│                                  [ ] Hide Time         │
│  Lorem ipsum dolor sit amet...   [🔊] Volume (Listen)  │
│                                                         │
│  Question text here...                                  │
│  What is the main purpose...?                           │
│                                                         │
│  ○ Option A                                             │
│  ○ Option B                                             │
│  ○ Option C                                             │
│  ○ Option D                                             │
│                                                         │
├─────────────────────────────────────────────────────────┤
│              [← Previous]      [Next →]                 │
└─────────────────────────────────────────────────────────┘
```

**Key Features:**
- **Timer:** Always visible (top-right), countdown format (MM:SS)
- **Progress bar:** Visual indicator (5 of 20 questions)
- **Pause button:** Accessible but requires confirmation modal
- **Passage scrolling:** Independent scroll for long texts
- **Question highlighting:** Selected answer visually distinct

---

#### 2. Audio Player (Listening & Integrated Tasks)

```
┌────────────────────────────────────────┐
│  🔊 Conversation 1                     │
│  ▶️  ━━━━━●─────────  02:15 / 03:40    │
│  [Volume: ▂▃▅▆▇ 80%]                   │
│                                        │
│  ⚠️  You can only listen ONCE          │
│  Audio will play automatically         │
│                                        │
│  [▶️ Play Now]                          │
└────────────────────────────────────────┘
```

**Features:**
- Auto-play when task begins (user can't skip ahead)
- Waveform visualization (optional, for engagement)
- Volume control (but no rewind/fast-forward)
- Transcript reveal ONLY after answering (for review mode)

---

#### 3. Microphone Recorder (Speaking)

```
┌────────────────────────────────────────┐
│  Speaking Task 2 of 4                  │
│  Preparation Time: 00:25               │
│                                        │
│  Question: Do you prefer studying      │
│  alone or in groups? Explain why.      │
│                                        │
│  [Notes area - type here]              │
│                                        │
├────────────────────────────────────────┤
│  Recording will begin automatically    │
│  in 25 seconds                         │
└────────────────────────────────────────┘

[After prep time ends]

┌────────────────────────────────────────┐
│  🔴 RECORDING                           │
│  Response Time: 00:38 / 00:45          │
│                                        │
│  ▂▃▅▇▅▃▂ [Audio Level Visualizer]     │
│                                        │
│  Speak clearly into your microphone    │
│                                        │
│  [Stop Early] ← Only if finished       │
└────────────────────────────────────────┘
```

**Features:**
- **Preparation timer:** Counts down, then auto-starts recording
- **Response timer:** Visual countdown (red zone at <10 seconds)
- **Audio level indicator:** Real-time feedback (too quiet = warning)
- **Auto-stop:** Recording ends when time expires
- **Playback:** User can listen to their recording before submitting (practice mode only)

---

#### 4. Writing Interface

```
┌──────────────────────────────────────────────────────────┐
│  Writing Task: Write an Email          Time: 07:32       │
├──────────────────────────────────────────────────────────┤
│  Prompt:                                                 │
│  Your roommate plays loud music late at night. Write     │
│  an email to politely ask them to reduce the volume.     │
│                                                          │
├──────────────────────────────────────────────────────────┤
│  [Writing Area]                         Words: 47 / 80+  │
│                                                          │
│  Dear Alex,                                              │
│                                                          │
│  I hope you're doing well. I wanted to talk to you      │
│  about the music volume late at night. I have early     │
│  classes and...                                          │
│                                                          │
│  [Blinking cursor]                                       │
│                                                          │
│                                                          │
│                                                          │
├──────────────────────────────────────────────────────────┤
│  [Cut] [Copy] [Paste] [Undo] [Redo]    [Submit Answer]  │
└──────────────────────────────────────────────────────────┘
```

**Features:**
- **Word counter:** Live update (target range shown: "80-120 words")
- **No spell check:** Red squiggles disabled (exam conditions)
- **Minimal formatting:** Plain text only (no bold, italics, colors)
- **Auto-save:** Every 10 seconds (draft recovery)
- **Disabled features:** Right-click spell suggestions, browser extensions

---

#### 5. Results Dashboard

**Score Card:**
```
┌────────────────────────────────────────┐
│         Your TOEFL Score               │
│                                        │
│            ⭐ 4.5 / 6.0                 │
│         B2 - Upper Intermediate        │
│                                        │
│  (Legacy: ~84-95 / 120)                │
│                                        │
│  ▓▓▓▓▓▓▓▓░░░░  75th Percentile         │
└────────────────────────────────────────┘

Section Breakdown:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Reading      ▓▓▓▓▓▓▓▓▓░  5.0 / 6.0
Listening    ▓▓▓▓▓▓▓░░░  4.0 / 6.0
Speaking     ▓▓▓▓▓▓▓▓░░  4.5 / 6.0
Writing      ▓▓▓▓▓▓▓▓▓▓  5.0 / 6.0
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 Detailed Analysis →
📄 Download PDF Report
🔁 Retake Test
```

**Detailed Analysis Page:**
- **Strengths:** "Your reading comprehension is excellent (5.0)"
- **Weaknesses:** "Listening needs work — focus on note-taking skills"
- **Skill heatmap:** 20+ micro-skills color-coded (green = strong, red = weak)
- **Question review:** See all questions, your answers, correct answers, explanations
- **Time analysis:** "You spent 2 min on Q5 (avg: 1 min) — practice time management"

---

### Responsive Design

**Breakpoints:**
- Desktop: 1280px+ (primary target)
- Tablet: 768px - 1279px (practice mode only, no full tests)
- Mobile: <768px (dashboard and results only, no tests)

**Why no mobile testing?**
- Official TOEFL not mobile-compatible
- Typing/speaking on mobile unrealistic
- Focus on desktop experience for exam authenticity

---

### Accessibility Features

**WCAG 2.1 AA Compliance:**

1. **Keyboard Navigation**
   - Tab order logical (question → options → next button)
   - Shortcuts: Arrow keys for navigation, Enter to submit
   - Escape to pause

2. **Screen Reader Support**
   - ARIA labels on all interactive elements
   - Reading passages: Proper heading hierarchy (H1, H2, H3)
   - Alt text for images (if used in questions)

3. **Visual Accessibility**
   - High contrast mode toggle
   - Font size adjustment (+2 levels)
   - Color-blind friendly palette (no red-green only distinctions)

4. **Audio Accommodations**
   - Closed captions for listening (review mode only, not during test)
   - Transcript download option
   - Volume range: 0-150% (boost for hearing impaired)

5. **Extra Time Option**
   - 1.5x time multiplier (users can request via settings)
   - Disability documentation upload (honor system for MVP)

---

### Animation & Transitions

**Principle:** Smooth but fast (no unnecessary delays)

- **Page transitions:** 150ms fade
- **Button hover:** 100ms scale (1.0 → 1.02)
- **Modal open:** 200ms slide-up
- **Timer:** No animation (performance critical)
- **Success feedback:** Confetti animation (results page only)

---

## 🗓️ Development Roadmap

### Phase 1: MVP (Months 1-3)

**Goal:** Launch core practice platform with section-wise tests and basic AI evaluation

#### Month 1: Foundation
**Week 1-2: Setup & Architecture**
- [ ] Project setup (repo, CI/CD, environments)
- [ ] Database schema design & implementation
- [ ] Auth system (email/password, OAuth)
- [ ] Basic frontend shell (routing, layout)

**Week 3-4: Reading & Listening**
- [ ] Question renderer (adaptive layouts)
- [ ] Audio player component
- [ ] Timer system
- [ ] Answer submission & auto-scoring
- [ ] Create 200 R&L questions

#### Month 2: Speaking & Writing + AI
**Week 5-6: Recording & Writing Tools**
- [ ] Microphone recorder (WebRTC)
- [ ] Audio upload to S3
- [ ] Writing interface (rich text editor)
- [ ] Word counter, auto-save

**Week 7-8: AI Evaluation v1**
- [ ] Integrate OpenAI Whisper (speech-to-text)
- [ ] Speaking scoring (basic: fluency + pronunciation)
- [ ] Writing scoring (grammar API + GPT-4)
- [ ] Generate feedback templates

#### Month 3: Full Test & Dashboard
**Week 9-10: Mock Test Flow**
- [ ] Sequential section navigation
- [ ] Adaptive logic implementation (R&L modules)
- [ ] Progress saving & recovery
- [ ] Full test timer coordination

**Week 11-12: Dashboard & Launch Prep**
- [ ] Score report generation
- [ ] Progress charts (D3.js)
- [ ] User settings page
- [ ] Beta testing (50 users)
- [ ] Bug fixes & polish

**MVP Launch Checklist:**
- [ ] 500+ questions across all sections
- [ ] AI evaluation functional (80%+ accuracy)
- [ ] 3 full mock tests available
- [ ] Payment integration (Stripe)
- [ ] Privacy policy, terms of service
- [ ] SEO optimization (meta tags, sitemap)

---

### Phase 2: Beta (Months 4-6)

**Goal:** Enhance AI, add adaptive practice, improve analytics

#### Month 4: AI Enhancement
- [ ] Phoneme-level pronunciation analysis
- [ ] Contextual grammar checking (advanced)
- [ ] Content relevance scoring (ML model)
- [ ] Rubric-aligned detailed feedback
- [ ] A/B test AI models (compare GPT-4 vs fine-tuned)

#### Month 5: Adaptive Practice
- [ ] Build adaptive recommendation engine
- [ ] Skill heatmap implementation
- [ ] Personalized study plans (2/4/8 weeks)
- [ ] Daily practice reminders (email + push)

#### Month 6: Content & Community
- [ ] Add 1,000 more questions (total 1,500)
- [ ] Video explanations (top 50 questions)
- [ ] Discussion forums (Reddit-style)
- [ ] Peer review system (writing)
- [ ] Leaderboards (optional)

**Beta Launch Goals:**
- 1,000+ registered users
- 10,000+ practice sessions completed
- 4.5+ star rating (user feedback)
- <2% error rate in AI scoring (vs human raters)

---

### Phase 3: Full Launch (Months 7-12)

**Goal:** Scale to 10k+ users, add mobile apps, premium features

#### Months 7-8: Advanced Features
- [ ] Real-time speaking coach
- [ ] Sentence rephrasing tool (writing)
- [ ] Score prediction ML model
- [ ] Spaced repetition vocabulary system
- [ ] Mastery-based unlock system

#### Months 9-10: Mobile & Expansion
- [ ] React Native apps (iOS + Android)
- [ ] Offline mode (download practice sets)
- [ ] 10+ language interface support
- [ ] Institutional dashboard (B2B)
- [ ] Live tutoring marketplace integration

#### Months 11-12: Monetization & Growth
- [ ] Freemium model refinement (5 free tests → paywall)
- [ ] Score guarantee program
- [ ] Affiliate partnerships (language schools)
- [ ] Content API (third-party integrations)
- [ ] SEO content strategy (100+ blog posts)

**Year 1 Success Metrics:**
- 50,000+ registered users
- 10,000+ paying subscribers
- $500k ARR
- 4.8+ star rating (app stores)
- Featured in ETS official prep resources (aspirational)

---

## 💻 Technical Stack Recommendations

### Frontend
**Framework:** React 18 + TypeScript
**Styling:** TailwindCSS + HeadlessUI
**State Management:** Zustand (lightweight, simple)
**Charts:** D3.js / Recharts
**Audio:** Howler.js (advanced audio control)
**Recording:** RecordRTC (WebRTC wrapper)
**Rich Text:** Lexical (Facebook's modern editor)
**Forms:** React Hook Form + Zod (validation)
**Testing:** Vitest + React Testing Library

**Why React?**
- Massive ecosystem, hiring advantage
- Excellent TypeScript support
- React Native for mobile (code sharing)

---

### Backend
**Primary:** Node.js 20 + Express.js / Fastify
**AI Services:** Python 3.11 + FastAPI (separate microservice)
**Task Queue:** BullMQ (Redis-based, for async AI jobs)
**WebSocket:** Socket.io (real-time progress updates)
**Cron Jobs:** Node-cron (daily reminders, score processing)

**Why Node.js?**
- Shared language with frontend (TypeScript)
- Excellent async handling (critical for media uploads)
- Fast for I/O-bound tasks

**Why Python for AI?**
- Best ML/NLP library support (Transformers, spaCy, NLTK)
- OpenAI SDK, speech recognition libraries
- Easy integration with Jupyter (experimentation)

---

### Database
**User Data:** PostgreSQL 16 (ACID compliance, relational)
**Content:** MongoDB (flexible schema for varied question types)
**Cache:** Redis 7 (sessions, leaderboards, rate limiting)
**Search:** Elasticsearch / Meilisearch (question search, admin panel)

**Schema Separation:**
- **PostgreSQL:** users, test_attempts, subscriptions, payments
- **MongoDB:** questions, audio_metadata, explanations, feedback_templates
- **Redis:** session tokens, quiz state (temp), rate limits

---

### Media & Storage
**File Storage:** AWS S3 / Cloudflare R2
**CDN:** CloudFront / Cloudflare CDN
**Audio Processing:** FFmpeg (normalization, format conversion)
**Image Optimization:** Sharp (if images added later)

**Folder Structure (S3):**
```
/audio/
  /listening/
    /conversations/
    /lectures/
    /announcements/
  /speaking/
    /prompts/  (pre-recorded instructions)
    /user-responses/  (user recordings)
/exports/
  /score-reports/  (PDFs)
```

---

### AI & ML
**Speech-to-Text:** OpenAI Whisper API / Google Speech-to-Text
**LLM:** OpenAI GPT-4o (evaluation, feedback generation)
**Grammar:** LanguageTool API (open-source, self-hosted option)
**Pronunciation:** Custom model (Wav2Vec2 fine-tuned) OR SpeechAce API
**Embeddings:** OpenAI text-embedding-3-small (similarity checks)

**Cost Optimization:**
- Cache common AI responses (Redis)
- Batch API requests where possible
- Use GPT-4o-mini for non-critical tasks (feedback templates)

---

### DevOps
**Hosting:** AWS / Google Cloud / DigitalOcean
**Containers:** Docker + Docker Compose (local dev)
**Orchestration:** Kubernetes (production) OR Railway (simpler alternative)
**CI/CD:** GitHub Actions
**Monitoring:** Sentry (errors), Datadog (metrics), LogRocket (session replay)
**Logging:** Winston (Node) + structured JSON logs → CloudWatch

---

### Payment & Auth
**Payments:** Stripe (subscriptions, one-time purchases)
**Auth:** NextAuth.js / Passport.js
**OAuth Providers:** Google, Facebook
**2FA:** Optional (Authy API or TOTP)

---

### Testing Strategy
**Unit Tests:** Vitest (backend), Jest (legacy)
**Integration Tests:** Supertest (API endpoints)
**E2E Tests:** Playwright (critical user flows)
**Load Testing:** k6 (simulate 1000+ concurrent users)
**AI Testing:** Custom eval suite (compare AI scores to human raters)

---

## 🗄️ Database Schema

### PostgreSQL Tables

#### users
```sql
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255), -- Null for OAuth users
    full_name VARCHAR(255),
    oauth_provider VARCHAR(50), -- 'google', 'facebook', null
    oauth_id VARCHAR(255),
    role VARCHAR(50) DEFAULT 'user', -- 'user', 'admin', 'instructor'
    current_level VARCHAR(10), -- 'beginner', 'intermediate', 'advanced'
    target_score DECIMAL(2,1), -- 1.0 to 6.0
    test_date DATE,
    created_at TIMESTAMP DEFAULT NOW(),
    last_login TIMESTAMP,
    is_active BOOLEAN DEFAULT true,
    subscription_tier VARCHAR(50) DEFAULT 'free', -- 'free', 'premium', 'pro'
    subscription_expires_at TIMESTAMP
);

CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_subscription ON users(subscription_tier, subscription_expires_at);
```

#### test_attempts
```sql
CREATE TABLE test_attempts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    test_type VARCHAR(50) NOT NULL, -- 'full_mock', 'reading_practice', 'listening_practice', etc.
    status VARCHAR(50) DEFAULT 'in_progress', -- 'in_progress', 'completed', 'abandoned'

    -- Scores
    overall_score DECIMAL(2,1),
    reading_score DECIMAL(2,1),
    listening_score DECIMAL(2,1),
    speaking_score DECIMAL(2,1),
    writing_score DECIMAL(2,1),

    -- Legacy scores (transition period)
    legacy_overall_score INT, -- 0-120
    legacy_reading_score INT, -- 0-30
    legacy_listening_score INT,
    legacy_speaking_score INT,
    legacy_writing_score INT,

    -- Metadata
    total_questions INT,
    correct_answers INT,
    time_spent_seconds INT,
    adaptive_difficulty VARCHAR(50), -- 'easy', 'medium', 'hard' (for Module 2)

    started_at TIMESTAMP DEFAULT NOW(),
    completed_at TIMESTAMP,

    -- Raw data (JSON for flexibility)
    section_details JSONB, -- Detailed breakdown per section
    ai_feedback JSONB, -- Speaking/Writing AI feedback

    created_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_attempts_user ON test_attempts(user_id, completed_at DESC);
CREATE INDEX idx_attempts_status ON test_attempts(status);
```

#### user_answers
```sql
CREATE TABLE user_answers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    attempt_id UUID REFERENCES test_attempts(id) ON DELETE CASCADE,
    question_id VARCHAR(100) NOT NULL, -- References MongoDB question._id

    -- Answer data
    user_answer TEXT, -- Selected option OR written text OR audio file URL
    correct_answer TEXT,
    is_correct BOOLEAN,

    -- Timing
    time_spent_seconds INT,
    answered_at TIMESTAMP DEFAULT NOW(),

    -- AI scoring (for Speaking/Writing)
    ai_score DECIMAL(2,1),
    ai_feedback JSONB,

    -- Metadata
    question_difficulty VARCHAR(50),
    skills_tested TEXT[] -- Array: ['inference', 'vocabulary']
);

CREATE INDEX idx_answers_attempt ON user_answers(attempt_id);
CREATE INDEX idx_answers_question ON user_answers(question_id);
```

#### subscriptions
```sql
CREATE TABLE subscriptions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    stripe_subscription_id VARCHAR(255) UNIQUE,
    tier VARCHAR(50) NOT NULL, -- 'premium', 'pro'
    status VARCHAR(50), -- 'active', 'canceled', 'past_due'
    current_period_start TIMESTAMP,
    current_period_end TIMESTAMP,
    cancel_at_period_end BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_subscriptions_user ON subscriptions(user_id);
CREATE INDEX idx_subscriptions_stripe ON subscriptions(stripe_subscription_id);
```

---

### MongoDB Collections

#### questions
```json
{
  "_id": "R_AC_047",
  "section": "reading",
  "task_type": "academic_text",
  "difficulty": "hard",
  "cefr_level": "C1",

  "content": {
    "passage": "Photosynthesis is the process by which...",
    "question": "What is the main purpose of paragraph 2?",
    "options": [
      "To describe the chemical process",
      "To compare two theories",
      "To provide historical context",
      "To introduce a counterargument"
    ],
    "correct_answer": "A",
    "explanation": "Paragraph 2 focuses on explaining the chemical reactions..."
  },

  "metadata": {
    "topic": "biology",
    "skills_tested": ["main_idea", "author_purpose"],
    "avg_time_seconds": 90,
    "correct_rate": 0.65,
    "times_used": 1247,
    "created_at": "2026-01-10T00:00:00Z",
    "version": 1
  }
}
```

#### audio_files
```json
{
  "_id": "L_CONV_023",
  "section": "listening",
  "task_type": "conversation",
  "difficulty": "medium",

  "audio": {
    "url": "https://cdn.example.com/audio/listening/conversations/L_CONV_023.mp3",
    "duration_seconds": 142,
    "transcript": "Student: Hi, I'm having trouble finding sources for my research paper...",
    "speakers": ["Student (Female)", "Librarian (Male)"]
  },

  "questions": [
    {
      "id": "L_CONV_023_Q1",
      "question": "What is the student's main problem?",
      "options": ["Can't find books", "Deadline is too soon", "Topic is too broad", "Professor rejected outline"],
      "correct_answer": "C",
      "explanation": "The student says 'I have too many angles to cover'..."
    }
  ],

  "metadata": {
    "topic": "library_research",
    "setting": "university_library",
    "created_at": "2026-01-08T00:00:00Z"
  }
}
```

#### speaking_prompts
```json
{
  "_id": "S_INT_015",
  "section": "speaking",
  "task_type": "interview",
  "difficulty": "medium",

  "prompt": {
    "topic": "hobbies",
    "question": "What is your favorite hobby and why do you enjoy it?",
    "prep_time_seconds": 0,
    "response_time_seconds": 45
  },

  "rubric": {
    "delivery_criteria": "Clear pronunciation, natural pacing, minimal hesitations",
    "language_use_criteria": "Accurate grammar, varied vocabulary, appropriate transitions",
    "topic_development_criteria": "Fully answers question, provides examples, logical organization"
  },

  "sample_responses": [
    {
      "score": 6.0,
      "transcript": "My favorite hobby is photography because it allows me to...",
      "notes": "Excellent fluency, sophisticated vocabulary, detailed examples"
    },
    {
      "score": 4.0,
      "transcript": "I like to playing guitar. It is very fun and I can relax...",
      "notes": "Some grammar errors, limited vocabulary, basic development"
    }
  ]
}
```

---

### Redis Data Structures

```
# Session storage
session:{user_id} → JSON {token, expires_at, ...}

# Rate limiting
rate_limit:{user_id}:api_calls → Counter (expires in 60s)

# Quiz state (temporary, during test)
quiz_state:{attempt_id} → JSON {current_question, answers, time_remaining, ...}

# Leaderboards (sorted sets)
leaderboard:weekly → ZADD {user_id: score}

# Cache (frequently accessed questions)
question:{question_id} → JSON (expires in 1 hour)
```

---

## 🔌 API Design

### RESTful Endpoints

**Base URL:** `https://api.toeflpractice.com/v1`

#### Authentication

```
POST   /auth/register
POST   /auth/login
POST   /auth/logout
POST   /auth/refresh
GET    /auth/me
POST   /auth/oauth/google
POST   /auth/oauth/facebook
POST   /auth/forgot-password
POST   /auth/reset-password
```

#### Tests

```
GET    /tests                      # List available test types
POST   /tests/start                # Start new test attempt
GET    /tests/:attempt_id          # Get test details
PATCH  /tests/:attempt_id/answer   # Submit answer
POST   /tests/:attempt_id/pause    # Pause test
POST   /tests/:attempt_id/resume   # Resume test
POST   /tests/:attempt_id/submit   # Submit entire test
GET    /tests/:attempt_id/results  # Get scores & feedback
```

#### Questions

```
GET    /questions/:question_id     # Get single question
POST   /questions/random           # Get random questions (practice mode)
  Body: {section: "reading", difficulty: "medium", count: 10}
```

#### User Progress

```
GET    /users/me/progress          # Dashboard data
GET    /users/me/attempts          # Test history
GET    /users/me/stats             # Detailed analytics
GET    /users/me/weak-areas        # AI-identified weak skills
GET    /users/me/recommendations   # Personalized practice suggestions
```

#### AI Evaluation

```
POST   /ai/evaluate/speaking       # Submit audio file for evaluation
  Body: {audio_url, question_id, attempt_id}

POST   /ai/evaluate/writing        # Submit text for evaluation
  Body: {text, question_id, attempt_id}
```

#### Payments

```
GET    /subscriptions/plans        # Available subscription tiers
POST   /subscriptions/checkout     # Create Stripe checkout session
POST   /subscriptions/cancel       # Cancel subscription
GET    /subscriptions/status       # Current subscription status
```

---

### WebSocket Events (Real-time)

**Endpoint:** `wss://api.toeflpractice.com/ws`

**Client → Server:**
```
{
  "event": "test:answer_submitted",
  "data": {
    "attempt_id": "uuid",
    "question_id": "R_AC_047",
    "answer": "B",
    "time_spent": 78
  }
}
```

**Server → Client:**
```
{
  "event": "test:ai_evaluation_complete",
  "data": {
    "question_id": "S_INT_015",
    "score": 4.5,
    "feedback": {...}
  }
}
```

**Events:**
- `test:started`
- `test:question_loaded`
- `test:answer_submitted`
- `test:ai_evaluation_started`
- `test:ai_evaluation_complete`
- `test:time_warning` (5 min remaining)
- `test:completed`

---

### Example API Flows

#### Flow: Start Reading Practice

**Request:**
```http
POST /tests/start
Authorization: Bearer {token}
Content-Type: application/json

{
  "test_type": "reading_practice",
  "difficulty": "medium",
  "question_count": 10,
  "timed": true
}
```

**Response:**
```json
{
  "attempt_id": "550e8400-e29b-41d4-a716-446655440000",
  "test_type": "reading_practice",
  "total_questions": 10,
  "time_limit_seconds": 600,
  "first_question": {
    "question_id": "R_DL_012",
    "section": "reading",
    "task_type": "daily_life",
    "content": {
      "passage": "Email text here...",
      "question": "What is the main purpose of this email?",
      "options": ["A", "B", "C", "D"]
    }
  },
  "started_at": "2026-01-13T10:00:00Z"
}
```

---

#### Flow: Submit Speaking Response

**Request:**
```http
POST /ai/evaluate/speaking
Authorization: Bearer {token}
Content-Type: application/json

{
  "attempt_id": "550e8400-e29b-41d4-a716-446655440000",
  "question_id": "S_INT_015",
  "audio_url": "https://s3.amazonaws.com/.../user_response.wav",
  "duration_seconds": 43
}
```

**Response (Immediate):**
```json
{
  "status": "processing",
  "estimated_time_seconds": 10,
  "job_id": "eval_job_12345"
}
```

**Response (After processing, via WebSocket):**
```json
{
  "event": "test:ai_evaluation_complete",
  "data": {
    "question_id": "S_INT_015",
    "score": 4.5,
    "feedback": {
      "overall": "Good response with clear pronunciation and relevant content.",
      "pronunciation": {
        "score": 4.5,
        "details": "Generally clear, minor issues with 'th' sounds"
      },
      "fluency": {
        "score": 4.0,
        "details": "Some hesitations, consider practicing pacing"
      },
      "language_use": {
        "score": 4.5,
        "details": "Good grammar, varied vocabulary"
      },
      "content": {
        "score": 5.0,
        "details": "Fully addressed question with strong example"
      }
    },
    "transcript": "My favorite hobby is photography because it allows me to..."
  }
}
```

---

## ⚠️ Risks & Mitigations

### 1. Content Accuracy Risk

**Risk:** Questions/answers contain errors, reducing trust
**Impact:** High — Users rely on accurate practice
**Likelihood:** Medium

**Mitigation:**
- [ ] All questions reviewed by 2+ TOEFL instructors before publishing
- [ ] User reporting system ("Report an error" button)
- [ ] Monthly content audits
- [ ] Version control for questions (track changes)
- [ ] Hire certified TOEFL trainer as advisor

---

### 2. AI Evaluation Accuracy Risk

**Risk:** AI scores deviate significantly from human raters
**Impact:** High — Core value proposition
**Likelihood:** Medium-High (especially in MVP)

**Mitigation:**
- [ ] Validate AI scores against 1,000+ human-rated samples (target: 85%+ correlation)
- [ ] A/B test different models (GPT-4 vs fine-tuned model)
- [ ] Confidence scores (flag low-confidence evaluations for human review)
- [ ] Transparent disclaimers ("AI-generated feedback, for practice only")
- [ ] Continuous model retraining based on user feedback

---

### 3. Audio Latency & Quality Risk

**Risk:** Listening audio lags, recording fails on certain devices
**Impact:** Medium — Affects user experience
**Likelihood:** Medium

**Mitigation:**
- [ ] CDN for audio delivery (CloudFront/Cloudflare)
- [ ] Adaptive bitrate streaming for slow connections
- [ ] Browser compatibility checks (warn unsupported browsers)
- [ ] Fallback: Download audio files for offline playback
- [ ] Pre-flight audio test (volume check, mic test before test starts)

---

### 4. Scalability Risk

**Risk:** Platform crashes under high load (e.g., viral growth)
**Impact:** High — Loss of users, reputation damage
**Likelihood:** Low (gradual growth expected)

**Mitigation:**
- [ ] Horizontal scaling (containerized services, Kubernetes)
- [ ] Auto-scaling for AI services (AWS Lambda for evaluation jobs)
- [ ] Database read replicas (PostgreSQL)
- [ ] Redis caching for frequently accessed data
- [ ] Load testing before launch (k6: simulate 10k+ users)

---

### 5. Copyright & Legal Risk

**Risk:** Content inadvertently infringes TOEFL/ETS trademarks or copyrights
**Impact:** Critical — Potential lawsuit, forced shutdown
**Likelihood:** Low (with proper diligence)

**Mitigation:**
- [ ] All content original or properly licensed
- [ ] Legal review of platform name, branding, content
- [ ] Disclaimers: "Not affiliated with ETS or TOEFL"
- [ ] Avoid copying exact question formats from official materials
- [ ] Fair use policy for discussing exam structure

---

### 6. Data Privacy Risk

**Risk:** User data breach (PII, recordings)
**Impact:** Critical — GDPR fines, loss of trust
**Likelihood:** Low (with proper security)

**Mitigation:**
- [ ] GDPR & CCPA compliance (data deletion, export)
- [ ] Encrypt PII (passwords hashed with bcrypt, emails encrypted at rest)
- [ ] Minimal data collection (no unnecessary PII)
- [ ] Regular security audits (penetration testing)
- [ ] SOC 2 compliance (Phase 3 goal)

---

### 7. Payment Fraud Risk

**Risk:** Chargebacks, stolen credit cards
**Impact:** Medium — Financial loss
**Likelihood:** Low

**Mitigation:**
- [ ] Stripe Radar (fraud detection)
- [ ] Velocity checks (limit trials per card)
- [ ] Require email verification before payment
- [ ] Monitor for suspicious patterns (same IP, multiple accounts)

---

### 8. User Retention Risk

**Risk:** Low engagement after first test
**Impact:** High — Affects growth & revenue
**Likelihood:** Medium

**Mitigation:**
- [ ] Gamification (streaks, badges, levels)
- [ ] Daily practice reminders (email + push)
- [ ] Progress visualization (show improvement over time)
- [ ] Social features (share scores, compete with friends)
- [ ] Personalized content (weak area recommendations)

---

## 📈 Success Metrics

### Phase 1 (MVP Launch)

**User Acquisition:**
- 1,000 registered users in Month 1
- 50% organic (SEO, word-of-mouth), 50% paid (ads)

**Engagement:**
- 30% DAU/MAU ratio (daily active / monthly active)
- Average 3 practice sessions per week per user
- 70% completion rate for started tests

**Product Quality:**
- AI evaluation accuracy: 80%+ correlation with human raters
- <1% error rate in questions (user reports)
- 4.0+ star rating (if app launched)

**Revenue:**
- 100 paying users (10% conversion from free)
- $10k MRR (monthly recurring revenue)

---

### Phase 2 (Beta)

**User Growth:**
- 10,000 registered users
- 1,000 monthly active users

**Engagement:**
- Average session length: 25+ minutes
- 60% of users complete at least one full mock test
- 40% return rate (users come back after 7 days)

**Product Quality:**
- AI evaluation accuracy: 85%+
- 4.5+ star rating
- <0.5% critical bugs

**Revenue:**
- 1,000 paying users
- $50k MRR
- 20% conversion rate (free → paid)

---

### Phase 3 (Full Launch)

**User Growth:**
- 50,000 registered users
- 10,000 monthly active users
- Featured in top "TOEFL prep" search results

**Engagement:**
- Average 5 practice sessions per week
- 50% of users show measurable score improvement (0.5+ band increase)
- 30% DAU/MAU

**Product Quality:**
- AI evaluation accuracy: 90%+
- 4.8+ star rating
- <0.1% critical bugs

**Revenue:**
- 5,000 paying users
- $250k MRR
- Partnerships with 10+ language institutions

**Market Position:**
- Top 3 TOEFL practice platforms (by traffic)
- Recognized by ETS (informal acknowledgment or listing)

---

## 📚 References & Sources

**TOEFL 2026 Format Updates:**
- [ETS Official Updates](https://www.ets.org/toefl/test-takers/ibt/upcoming-updates-jan-2026.html)
- [New TOEFL Changes 2026 - BestMyTest](https://www.bestmytest.com/blog/new-toefl-format-changes)
- [TOEFL 2026 Updates - AcadFly](https://www.acadfly.com/blogs/toefl-updates)
- [TOEFL Scoring Updates - Study.com](https://study.com/resources/new-toefl-scoring-updates.html)
- [Magoosh TOEFL 2026 Changes](https://toefl.magoosh.com/toefl-2026-changes)

**AI Evaluation Platforms:**
- [My Speaking Score](https://www.myspeakingscore.com/) — Uses ETS SpeechRater
- [LingoLeap](https://lingoleap.ai/) — AI-powered TOEFL prep
- [TestGlider](https://www.testglider.com/toefl/en) — Free AI practice tests
- [TOEFL TestReady (Official)](https://www.ets.org/toefl/test-takers/ibt/prepare/toefl-testready.html)

**Best Practices:**
- WCAG 2.1 Accessibility Guidelines
- Stripe Payment Integration Docs
- OpenAI Whisper API Documentation
- LanguageTool Grammar API

---

## 🚀 Next Steps — What to Build First

### Immediate Actions (This Week)

1. **Project Setup**
   - [ ] Create GitHub repo (public or private)
   - [ ] Initialize frontend (React + Vite + TypeScript)
   - [ ] Initialize backend (Node.js + Express + TypeScript)
   - [ ] Set up PostgreSQL & MongoDB (local Docker containers)
   - [ ] Configure Redis (local)
   - [ ] Create `.env.example` files

2. **Database Setup**
   - [ ] Write SQL migrations for PostgreSQL tables
   - [ ] Create MongoDB collections with sample documents
   - [ ] Seed database with 20 sample questions (5 per section)

3. **Auth System (MVP)**
   - [ ] Implement user registration (email + password)
   - [ ] Implement login (JWT tokens)
   - [ ] Protected routes middleware

4. **First Feature: Reading Practice**
   - [ ] Question renderer component (React)
   - [ ] Timer component (countdown)
   - [ ] Answer submission API endpoint
   - [ ] Auto-scoring logic (Reading only, simple correct/incorrect)
   - [ ] Results display (score + correct answers)

**Goal:** By end of Week 1, users can sign up and take a 5-question Reading practice test.

---

### Month 1 Priority

**Core Loop:**
1. User signs up →
2. Selects "Reading Practice" →
3. Answers 10 questions →
4. Sees score + explanations →
5. Dashboard shows progress

**What NOT to build yet:**
- AI evaluation (use placeholder scores)
- Adaptive difficulty (all questions medium)
- Mobile app
- Payment system
- Advanced analytics

**Focus on:**
- Solid authentication
- Clean question rendering
- Accurate auto-scoring (R&L)
- Smooth user flow (no bugs)

---

### How Another Developer Should Continue

**If you're a developer picking up this project:**

1. **Read this entire `claude.md` file** (yes, all of it)
2. **Check existing code:**
   - `/frontend` — React app
   - `/backend` — Node.js API
   - `/ai-service` — Python AI evaluation (may not exist yet)
3. **Run locally:**
   ```bash
   docker-compose up  # Starts databases
   cd frontend && npm install && npm run dev
   cd backend && npm install && npm run dev
   ```
4. **Find open tasks:**
   - Check GitHub Issues (tagged by phase)
   - See `ROADMAP.md` (if created)
5. **Follow conventions:**
   - TypeScript strict mode
   - ESLint + Prettier configured
   - Commit messages: `feat:`, `fix:`, `docs:`
6. **Test before pushing:**
   - Run `npm test` (unit tests)
   - Manually test in browser (critical flows)
7. **Ask questions:**
   - Open GitHub Discussion or contact project lead

---

### Folder Structure (Recommended)

```
toefl-practice-platform/
├── frontend/
│   ├── src/
│   │   ├── components/    (Reusable UI components)
│   │   ├── pages/         (Route pages: Dashboard, Test, Results)
│   │   ├── hooks/         (Custom React hooks)
│   │   ├── store/         (Zustand store)
│   │   ├── api/           (API client functions)
│   │   ├── types/         (TypeScript types)
│   │   └── utils/         (Helper functions)
│   ├── public/
│   ├── package.json
│   └── vite.config.ts
│
├── backend/
│   ├── src/
│   │   ├── routes/        (Express routes)
│   │   ├── controllers/   (Business logic)
│   │   ├── models/        (Database models)
│   │   ├── middleware/    (Auth, error handling)
│   │   ├── services/      (External APIs, AI calls)
│   │   └── utils/         (Helper functions)
│   ├── tests/
│   ├── package.json
│   └── tsconfig.json
│
├── ai-service/
│   ├── app/
│   │   ├── main.py        (FastAPI app)
│   │   ├── evaluation/    (Speaking, Writing evaluators)
│   │   ├── models/        (ML model loading)
│   │   └── utils/
│   ├── requirements.txt
│   └── Dockerfile
│
├── content/
│   ├── questions/         (JSON files for questions)
│   ├── audio/             (Raw audio files before S3 upload)
│   └── scripts/           (Content generation scripts)
│
├── docs/
│   ├── API.md             (API documentation)
│   ├── ARCHITECTURE.md    (System design)
│   └── CONTRIBUTING.md
│
├── docker-compose.yml     (Local dev environment)
├── .github/
│   └── workflows/         (CI/CD pipelines)
├── README.md
└── claude.md              (THIS FILE)
```

---

## ✅ Definition of Done

**This project will be considered "complete" (Phase 1) when:**

- [ ] 500+ high-quality questions across all sections
- [ ] Users can take section-wise practice tests
- [ ] Users can take full mock tests (67-85 min, adaptive)
- [ ] AI evaluation works for Speaking & Writing (80%+ accuracy)
- [ ] Score reports display 1-6 band + legacy scores
- [ ] Dashboard shows progress history & analytics
- [ ] Payment system integrated (Stripe)
- [ ] Mobile-responsive design (desktop + tablet)
- [ ] Accessibility: WCAG 2.1 AA compliant
- [ ] Security: HTTPS, encrypted data, auth tested
- [ ] Performance: <3s page load, <10s AI evaluation
- [ ] Deployed to production (AWS/Vercel/Railway)
- [ ] Domain configured (e.g., toeflpractice.com)
- [ ] Privacy policy, terms, GDPR compliance
- [ ] Beta tested by 50+ users with feedback incorporated
- [ ] 4.0+ star average rating from beta testers

---

## 🎉 Final Notes

**This platform is designed to be:**
- **Exam-accurate** — Mirrors real TOEFL 2026 format
- **AI-powered** — Instant, detailed feedback for Speaking & Writing
- **User-friendly** — Clean, distraction-free interface
- **Scalable** — Architecture supports 100k+ users
- **Developer-ready** — Clear roadmap, schema, and instructions

**You now have everything you need to build this platform.**

**Next step:** Open your code editor and start with the [Immediate Actions](#immediate-actions-this-week).

Good luck building the future of TOEFL practice.

---

**Document End** — Last updated: January 13, 2026
