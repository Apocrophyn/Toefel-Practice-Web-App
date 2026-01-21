# TOEFL Practice Web App

A comprehensive TOEFL preparation platform featuring Reading, Listening, Speaking, and Writing sections with AI-powered evaluations.

## Features

- **Reading**: 20+ batches of academic passages with multiple-choice and "complete the word" tasks.
- **Listening**: Real-time audio playback with practice scenarios (Conversations, Announcements, Academic Talks).
- **Speaking**: Voice recording for "Listen & Repeat" and "Interview" tasks with AI evaluation.
- **Writing**: timed tasks for "Build a Sentence", "Email Writing", and "Academic Discussion".
- **Dashboard**: Track your progress across all sections.

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS with Glassmorphism aesthetics
- **Database/Auth**: Supabase
- **AI**: OpenAI (GPT-4o for evaluation, TTS for audio)
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Apocrophyn/Toefel-Practice-Web-App.git
   cd Toefel-Practice-Web-App
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Environment Setup**:
   Create a `.env.local` file in the root directory and fill in the values from `.env.example`:
   ```bash
   cp .env.example .env.local
   ```

4. **Run development server**:
   ```bash
   npm run dev
   ```

## Deployment on Vercel

1. Connect your GitHub repository to Vercel.
2. Add the following Environment Variables in the Vercel dashboard:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `OPENAI_API_KEY`
   - `NEXT_PUBLIC_APP_URL`
3. Deploy!

## License

MIT
