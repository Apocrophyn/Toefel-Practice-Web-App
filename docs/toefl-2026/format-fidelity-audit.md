# Codebase audit vs. official ETS 2026 blueprint
Date: 2026-08-28. Baseline commit: f338241 (branch == origin/main; prior session committed nothing).

## Summary
The app already uses 2026-era task-type names, but the **test construction, item counts,
timings, item shapes and scoring are not the official exam**. It behaves like a generic
practice quiz wearing TOEFL 2026 labels.

## A. Structural gaps (blocking "exam-accurate" claim)

| Area | App today | ETS 2026 official | Verdict |
|---|---|---|---|
| Reading items | 20 (10 router + 10 module 2) | **50** (30 Complete the Words + 5–15 Daily Life + 5–15 Academic) | wrong |
| Reading time | 18 + 18/9 min | router 18–21 min + module **9 min** | module-2 hard time 2x too long |
| Reading mix | CW 20% / daily 30% / academic 50% | CW **60%** (30/50) | inverted |
| Listening items | pooled ad hoc | **47** (CR 15–19, Conv 10, Ann 6–10, Talk 8–16) | wrong |
| Listening time | ad hoc | router 18 min + lower 7 / upper 11 min | wrong |
| Writing items | 5–7 build-a-sentence + email + discussion | **10** BaS + 1 email + 1 discussion, 23 min | wrong |
| Speaking items | 7 repeat + 4 interview | 7 + 4 | **correct** |
| Section scoring | `(x/5)*30`, `(x/100)*30` ad hoc | raw points R 35 / L 35 / W 20 / S 55 -> band 1.0–6.0 by 0.5 | wrong |
| Overall score | not computed | mean of 4 section bands | missing |
| Adaptive routing | threshold 0.60 accuracy, invented | two-stage router -> lower/upper module | unverified/invented |

## B. Content defects (measured, not estimated)

Scripted over `src/data/questions/`:

1. **400 reading passages leak authoring metadata into the on-screen passage text.**
   Passages literally begin with `**Rhetorical Structure:** Problem-Solution` /
   `**Dominant TOEFL Skill:** Inference`. A real test taker would see the answer strategy
   printed above the passage. This alone destroys exam realism.
2. **65% of reading passages exceed the ETS 200-word ceiling** (median 220, max 630 words).
   ETS: "Easier texts typically contain 15–50 words, while more complex texts may extend to
   200 words." The long passages are old-format (pre-2026) TOEFL passages.
3. **400 academic passages carry exactly 1 question each.** Real sets carry multiple items
   per passage; a 250-word passage for a single question is not the exam's shape and burns
   the whole time budget.
4. **548 / 3524 (15.6%) Complete-the-Words blanks have an underscore count that does not
   equal the number of missing letters** (e.g. `phy_____` -> `physics` shows 5 blanks for 4
   letters). The full-test renderer papers over this by deriving box count from the answer,
   but the underlying data lies and the standalone practice renderer must be checked.
5. **Complete-the-Words blanks per paragraph range 8–27**; the exam uses ~10 per paragraph.

## C. Content volume vs. one faithful full test

| Task | Pool | Needed per test | Non-overlapping tests |
|---|---|---|---|
| Listen and Choose a Response | 40 items | 15–19 | ~2 |
| Listen to a Conversation | 20 scenarios (40 items) | 10 items | ~4 |
| Listen to an Announcement | 10 scenarios (20 items) | 6–10 items | ~2–3 |
| **Listen to an Academic Talk** | **5 scenarios (20 items)** | 8–16 items | **~1** |
| Build a Sentence | 50 | 10 | 5 |
| Write an Email | 30 | 1 | 30 |
| Write for an Academic Discussion | 30 | 1 | 30 |
| Listen and Repeat | 50 sets | 1 set (7) | 50 |
| Take an Interview | 50 topics | 1 topic (4) | 50 |

Academic Talks are the binding constraint: only 5 exist, a single form needs 2–4.

## D. Things the app already gets right
- Task-type taxonomy matches ETS naming for all four sections.
- Speaking = exactly 7 Listen-and-Repeat + 4 Interview items, no integrated tasks
  (`claude.md` in the repo is WRONG here: it claims 4 speaking tasks including two
  integrated tasks, which is the pre-2026 format. The code is right, the doc is stale.)
- Listening audio lengths sit inside ETS ranges (utterances 5–15 words, conversations
  ~137 words, announcements ~95, talks ~180; ETS ceiling 250).
- All multiple choice items use 4 options consistently.
- Two-stage adaptive scaffolding exists in `ReadingSessionManager`, just mis-parameterised.

## E. Stale docs
`claude.md` (project brain) describes the OLD format for Speaking (4 tasks with two
integrated tasks) and Writing (integrated writing). Both were removed in the 2026 update.
It also states Reading/Listening are "18-27 minutes, ~20 questions" (actual: 50 and 47
items). This doc has been steering the build wrong and must be corrected.

---

# Remediation status — 2026-08-28

## Fixed in this change

### Structure and timing
- **Section order corrected to Reading → Listening → Writing → Speaking.** The app ran
  Speaking before Writing, which is the pre-2026 order.
- **Scheduled break removed.** The app inserted a 5-minute break after Listening; the 2026
  test has no scheduled breaks.
- **Reading rebuilt to 50 items** (30 Complete the Words + 10 Daily Life + 10 Academic),
  split 33 router / 17 second module, against the previous 20.
- **Listening rebuilt to 47 items** on both routes (router 29 + second module 18), against
  roughly 32. Task totals land inside every published ETS range on both routes.
- **Reading second-module time corrected to 9 minutes** on both routes (was 18 for the
  hard track). Listening second module now 7 min lower / 11 min upper.
- **Writing rebuilt to 12 items**: ten Build a Sentence items on a single pooled 6:50
  clock, then a 7:00 email and a 10:00 discussion. The app previously delivered ONE
  Build a Sentence item on a 60-second timer.
- **Speaking response windows corrected**: Listen and Repeat is now tiered 8/8/10/10/10/12/12
  seconds by item index instead of a flat 10; the interview is 45 s per question.

### Scoring
- **Raw-point scoring engine added** (`src/lib/toefl/scoring.ts`) implementing the ETS
  ceilings — Reading 35, Listening 35, Writing 20, Speaking 55 — and converting once to a
  1.0–6.0 band. Replaces ad-hoc conversions like `(score / 5) * 30` and `(score / 100) * 30`
  applied to values on different scales.
- **Complete the Words is now scored per blank.** It was all-or-nothing per paragraph, so
  19 correct answers out of 20 scored zero. Each gap is its own scored item, as on the exam.
- **Adaptive routing now routes on points, not on steps answered.** A ten-gap paragraph
  previously counted the same as one multiple-choice question in the routing decision.
- Overall score = mean of the four section bands on the same half-point scale.

### Item mechanics
- **Complete the Words is now generated as a C-test** (`src/lib/toefl/c-test.ts`): first
  sentence intact, back half of every second word deleted, exactly 10 gaps per 70–100 word
  paragraph — the rule the real task uses.
- **The answer-length leak is closed.** Both the full-test and the standalone reading
  renderer drew one character box per missing letter, and the practice renderer additionally
  displayed "Click to type • N letters". A fixed-width blank with a free-text field replaces it.
- Generated items are verified to never gap a word that appears intact elsewhere in the same
  paragraph, and never to gap the first sentence.

### Content
- **400 passages no longer print their own answer strategy.** Every academic passage began
  with `**Rhetorical Structure:** …` / `**Dominant TOEFL Skill:** …` inside the visible text.
  Moved to non-rendered metadata fields.
- **1,541 orphaned insert-a-sentence markers removed** (`[A] [B] [C] [D]`) from passage text.
  That item type was removed in 2026 and no question referenced them, but they rendered.
- **261 exam-shaped Complete the Words items** now generatable (2,610 scored gaps, ~87
  non-overlapping forms) from harvested 70–100 word academic paragraphs.
- **8 exam-shaped academic passage sets** added (161–173 words, 5 items each, verified even
  answer-key distribution) against the ETS 200-word ceiling.
- **5 additional academic talks** added; the bank could previously not fill one form's
  8–16 talk items without repeating a lecture inside the same sitting.

### Build
- **Production build fixed.** `next build` failed on any machine without `OPENAI_API_KEY`
  and `NEXT_PUBLIC_SUPABASE_URL` because the OpenAI and Supabase clients were constructed at
  module scope and Next collects page data for every route at build time. Both are now
  created lazily on first use.

## Still outstanding

These are known gaps, not oversights:

1. **Build a Sentence is still a plain word scramble.** The real task uses a context prompt
   plus a word bank of 5–7 tiles that may be multi-word chunks, sometimes with distractor
   tiles and prefilled slots, placed by click or drag. The bank stores `scrambledWords:
   string[]` with no context line, and the UI has no tile/slot widget. This is the largest
   remaining interaction gap — see `BUILD_A_SENTENCE` in the blueprint for the target.
2. **Read in Daily Life renders as prose.** The artefact's layout (email chrome, SMS bubbles,
   menus, schedules) is part of the construct; a genre-aware renderer is needed.
3. **Listening stimulus lengths are long.** Conversations average ~137 words against a real
   20–30 s (~50–85 word) target, and the bank has no 2026-length replacements yet.
4. **Content volume.** The reading academic bank has 8 exam-shaped sets (4 forms' worth) and
   the talk bank 10 talks; the intended targets were 24 and 25. The authoring agents were
   terminated by an account spend limit partway through.
5. **Section practice components** (`ReadingPractice`, `ListeningPractice`, `SpeakingPractice`,
   `WritingPractice`) still use the legacy per-section configuration. Only the full mock test
   runs on the new blueprint-driven engine. The Complete-the-Words answer-length leak was
   fixed in `ReadingPractice` as well, but its item counts and timings are not yet blueprint-driven.
6. **Band conversion is calibrated, not official.** ETS does not publish the raw-to-band
   table. `BAND_CUTS` is documented as an estimate and surfaced to the user as such.
7. **No first-hand test-taker reports were obtainable.** Reddit was not reachable from the
   research environment, so every mechanic is sourced from ETS plus prep publishers. Items
   marked low-confidence in `item-mechanics.md` should be re-verified against real reports.
