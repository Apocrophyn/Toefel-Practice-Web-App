# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: international students, roughly 18–30, preparing for the TOEFL iBT under the format that takes effect January 21, 2026. They practice alone, at a desk, usually on a laptop, in sessions of 20–90 minutes, often at night and often close to a booked test date. English is not their first language, so every label, instruction, and error message is read carefully and literally.

Secondary (inferred from PDP.md, not yet confirmed by the user): working professionals preparing for immigration or certification; English instructors and test-prep centers.

## Product Purpose

A practice platform that reproduces the 2026 TOEFL iBT exactly — its four sections, its task types, its timing, and its multistage adaptive structure — and returns a score plus rubric-aligned feedback immediately after each attempt. Success is a learner who arrives at the real exam with no surprises about format, and who can see which of their four section scores is holding their band down.

## Positioning

Exam-shape fidelity to the *new* format, plus instant AI evaluation of Speaking and Writing. The 2026 format (1–6 band scale, 67–85 minute test, Complete-the-Words, Listen-and-Repeat, Build-a-Sentence, Academic Discussion, adaptive Module 1 → Module 2) is different enough from the legacy 0–120 iBT that legacy practice material is actively misleading. This product's claim is that practicing here feels like the real 2026 test, not like a generic English quiz.

## Operating Context

The app is a single-page workspace with a persistent left sidebar and one active section at a time. Seven destinations:

- **Reading** — adaptive: Module 1 (mixed) → interim report → Module 2 easy or hard track. Task types: Complete the Words (inline letter inputs inside a passage), Read in Daily Life, Read an Academic Text.
- **Listening** — audio-driven, single playback, no replay. Conversations, announcements, academic lectures. Also adaptive across two modules.
- **Speaking** — microphone capture in the browser. Listen and Repeat, Take an Interview, two integrated tasks. Prep countdown → auto-start recording → response countdown → auto-stop → AI evaluation.
- **Writing** — timed text entry with a live word counter, spell-check disabled. Build a Sentence, Write an Email, Academic Discussion.
- **Full Test** — the four sections run back to back under one coordinated timer.
- **History** — past attempts and scores.
- **Vocab Game** (Word Speedrun) — the one deliberately playful surface.

Recurring on-screen states that the design must carry well: a running countdown timer, a "question X of Y", a live recording indicator with an audio level, an "Evaluating…" wait of several seconds, correct/incorrect review, and a score report on the 1–6 band scale.

## Capabilities and Constraints

- Next.js 14 App Router, React 18, TypeScript, Tailwind CSS, Framer Motion, Lucide icons, Recharts, Zustand.
- Supabase for auth and storage; OpenAI for Speaking/Writing evaluation and for TTS.
- Question bank ships as TypeScript modules under `src/data/questions/` — no CMS.
- `src/components/landing/*`, `src/components/dashboard/*`, and `src/components/auth/*` exist in the tree but are **not mounted** by `src/app/page.tsx`. The live surface is the sidebar workspace only.
- Scores use the 2026 **1–6 band scale** in half-point steps. A legacy 0–120 mapping exists in the docs for the 2026–2028 transition.
- Deployed on Vercel.

## Brand Commitments

Name: "TOEFL Practice" / TOEFL iBT 2026 Practice Platform. No logo asset, wordmark, or brand palette has been supplied. The product is not affiliated with ETS and must not imply that it is.

The user has explicitly asked for one visual device to be preserved in the revamp: **section icons sit on a dark "liquid glass" circular plate.**

## Evidence on Hand

Real: the full question bank (20 batches each for reading, writing, complete-the-words; listening and speaking sets), the working adaptive engine, working audio recording and playback, working OpenAI evaluation routes, `claude.md` and `PDP.md` as internal specifications.

Absent and **not to be invented**: user counts, testimonials, score-improvement statistics, customer logos, press, pricing that has been charged, uptime or accuracy benchmarks, ETS endorsement. The PDP's revenue and user numbers are targets, not facts, and may not appear in the interface as claims.

## Product Principles

1. **The format is the product.** Anything on screen that would not exist in the real 2026 exam should not compete with what would.
2. **A timer is a fact, not a threat.** Countdown, progress, and remaining-question state are always readable at a glance and never dramatized.
3. **Read for a second-language reader.** Plain instructions, generous type, no idiom in UI copy.
4. **Feedback earns the wait.** After a Speaking or Writing attempt, the score and the rubric breakdown are the payoff; they get the strongest moment on the page.
5. **Claim nothing that has not happened.** No fabricated proof anywhere in the interface.

## Accessibility & Inclusion

Target is WCAG 2.1 AA (stated in `claude.md`, not yet audited). Concretely required by this audience: keyboard-reachable answer controls, visible focus, contrast that survives a laptop screen at night, no meaning carried by color alone in correct/incorrect review, and volume control on every audio task.
