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

---

# Remediation status — round 2

The first round fixed structure, timing and scoring. This round fixes the
*content and interaction* defects that made individual items feel unlike the exam.

## Measured defects found and fixed

| Defect | Measured before | After |
|---|---|---|
| Academic passages with a single question | **400 of 400** | 24 sets, **5 items each** (120 items) |
| Academic passages over the 200-word ceiling | **302 of 400 (75%)** | 0 — bank runs 161–178 words |
| Conversations longer than 2026 audio | **20 of 20** (111–172 words) | 0 — bank runs 57–73 words |
| Announcements longer than 2026 audio | **9 of 10** (85–107 words) | 0 — bank runs 50–58 words |
| Build a Sentence items with a context prompt | **0 of 50** | 60 of 60 |
| Build a Sentence items with multi-word chunk tiles | **0 of 50** | 60 of 60 |
| Build a Sentence items with distractor tiles | **0 of 50** | 60 of 60 |
| Build a Sentence tile counts outside ETS 5–7 | **15 of 50** | 0 |
| Listening answer-key skew | **B 57 / D 22** | 25% each across all four task types |

## Build a Sentence is now the real task

It was "read scrambled words, type the sentence into a textarea". The exam is a
word-bank-to-slot assembly, so that is what it is now:

- every item opens with a **context line** the sentence must answer
- tiles are **multi-word chunks** ("showed us around", "would like"), not single words
- items carry **distractor tiles** and **pre-locked slots**
- **click-to-place and drag** both work; clicking a placed tile returns it
- scored **all-or-nothing** and **machine-scored locally** — it no longer goes to the
  AI writing evaluator, which was scoring a grammar item as if it were an essay
- a **single pooled 6:50 clock** covers all ten items, and moving between items
  inside the block no longer restarts the timer

## Sections now run on the same engine as the full test

`ReadingPractice`, `ListeningPractice` and `WritingPractice` previously had their
own item counts, timings and routing thresholds. All three now draw from the
blueprint: the same `LISTENING_PLAN` / `READING_PLAN` item counts, the same
`routeToModule` threshold, the same `moduleSeconds` timings, and the same banks.

Two further defects were fixed in `ReadingPractice` specifically:
- Complete the Words was scored **all-or-nothing per paragraph**, so nine correct
  gaps out of ten scored zero. It is now one point per gap.
- The on-screen tip still told students "the number of boxes shows how many
  letters you need to type", which had become untrue once the answer-length leak
  was closed, and would have taught a strategy that fails on test day.

## Content that is deliberately excluded

The legacy conversations and announcements are **not** offered to the exam engine.
They are roughly a minute of audio each against a 20–30 second target, and shipping
them would make Listening feel like the pre-2026 test. They remain in
`listening-massive.ts` for extended listening practice. The legacy academic talks
(171–189 words) and single-response items (5–15 words) ARE inside spec and are kept.

Likewise the 400 legacy long passages are not offered as reading stimuli. They are
the source of Complete the Words paragraphs, which is what they are well suited to.

## Regression suite

`npm run validate:content` compiles the banks and asserts, on every run:

- academic passages within the word ceiling, exactly 5 items, no authoring markup
- every C-test paragraph yields exactly 10 gaps, never gaps the first sentence, and
  never gaps a word that appears intact elsewhere in the same paragraph (including
  as a possessive or inside a hyphenated compound)
- every listening stimulus inside its task's published word range, correct item count
- every MCQ has 4 distinct options with a key that exists among them
- answer-key distribution within 15% of uniform per task type
- Build a Sentence: 5–7 tiles, context present, correct placement scores, distractors
  are never answers
- 80 assembled reading forms are each exactly 50 items split 30/10/10 with no repeats

## Still outstanding

1. **Read in Daily Life renders as prose.** The artefact layout (email chrome, SMS
   bubbles, menus, schedules) is part of the construct. The 29 existing sets are
   correct in length (77–110 words) and item count (2–3), but a genre-aware renderer
   and genre-varied stimuli are still needed.
2. **Bank depth.** Two non-overlapping Listening forms and four Reading forms.
   Adding conversations and announcements is the cheapest way to raise that.
3. **Band conversion remains a documented estimate** — ETS does not publish the
   raw-to-band table.

---

# Remediation status — round 3

Rounds 1 and 2 fixed structure, timing, scoring and the item shapes. This round
audits what a test taker actually **sees and is told**, which is where the
remaining divergences had collected: the app was still advertising a task type
that does not exist in 2026, and the two banks nobody had validated were the two
that were furthest off spec.

## Measured defects found and fixed

| Defect | Measured before | After |
|---|---|---|
| Speaking tasks advertised in the UI | **4**, including two integrated tasks that do not exist in 2026 | 2 (Listen and Repeat, Take an Interview) |
| Write an Email prompts carrying the required three bullets | **0 of 30** | 30 of 30 |
| Write an Email situation length | ~30–50 words | 75–91 words (ETS 70–110) |
| Write an Email timer in the bank | 480 s | 420 s, per the blueprint |
| Read in Daily Life answer-key distribution | **A 2% / B 42% / C 48% / D 8%** | 26 / 26 / 24 / 24 |
| Read in Daily Life rendered as its artefact genre | 0 of 30 | 30 of 30 |
| C-test paragraphs printing raw Markdown or LaTeX | **137 of 270** | 0 |
| Listen and Repeat response window in section practice | flat 12 s on all 7 items | tiered 8/8/10/10/10/12/12 |
| Banks with no validator coverage | email, discussion, daily life, speaking | all covered |

## The phantom Speaking tasks

The Speaking board, the landing board and the format panel all listed
**"Integrated task 1 — read, then listen, then summarise"** and
**"Integrated task 2 — listen, then give your own view"**. Both are pre-2026
tasks and both were removed in the 2026 update. The *engine* never delivered
them — it has always run 7 + 4 — so this was purely a promise the UI made and
the test did not keep, which is the worst kind of fidelity bug: a student
budgets preparation time for a task that will not appear.

Removed from `src/app/page.tsx`, `SpeakingPractice.tsx` and
`landing/TestFormatSection.tsx`.

## Write an Email was missing the part it is scored on

The ETS prompt has three load-bearing parts: a ~90-word situation, a **named
recipient whose relationship sets the register**, and **exactly three bullet
points**, all of which must be addressed to score in the upper bands.

The bank had none of them. It stored a one-line internal label
(`"Address noise issue with roommate"` — the user's own example), a 30–50 word
situation, and no bullets at all. `WritingPractice` rendered **only that
one-line label**, so a student practising the email task saw a fragment of a
prompt and was then scored by a grader that had never seen the bullets either,
because only the label was forwarded to it.

All 30 prompts were rewritten to the ETS shape, `EmailTask` now carries
`situation` / `recipient` / `recipientRole` / `bullets`, both renderers show the
full prompt, and `emailPromptText()` flattens it for the grader. The evaluation
rubric in `api/evaluate/writing` now checks the three bullets individually and
reports coverage, because "addressed all three points" is the single largest
driver of the 0–5 score on this task.

## The two unvalidated banks were the two worst

`validate:content` covered reading, listening and Build a Sentence. It did not
cover Write an Email, Write for an Academic Discussion, Read in Daily Life or
either Speaking task — and those are exactly where the defects had survived two
rounds of remediation. The validator now covers all of them, and the first run
of the new checks immediately surfaced an exploitable one:

**Read in Daily Life answer keys sat at A 2% / B 42% / C 48% / D 8%.** A test
taker who always guessed B or C scored roughly 90% on that task without reading
a single artefact. The existing `balance-answer-keys.py` had silently skipped
this bank because it only understands letter-valued keys
(`correctAnswer: "B"`), and the daily-life sets store the key as option text.
`balance-daily-life-keys.py` handles the text-valued form; the bank is now
26/26/24/24.

## Read in Daily Life now renders as an artefact

The artefact's layout is part of the construct — locating a departure time in a
shuttle timetable is not the same reading skill as locating it in a paragraph —
and all 30 stimuli were rendering through one flat `whitespace-pre-wrap` block.

`DailyLifeArtefact.tsx` parses the conventions the bank was already written in
(`From:/To:/Subject:` chrome, ALL-CAPS banners and section headings, `- ` list
items, `Label: value` fields, ` | ` columns) into real structure. Verified
against all 30 stimuli with zero character loss: 28 banners, 70 headings, 74
lists, 35 fields, 3 column rows and 2 emails with header chrome.

## Markdown and LaTeX were printing inside reading passages

The Complete the Words paragraphs are harvested from the legacy passage bank,
which was authored in Markdown. 125 of 270 paragraphs contained italic markers
and 12 contained inline LaTeX, and the renderer only understands `**bold**`, so
test takers were shown `*Photons*`, `($E=hf$)` and `* Red photons are "weak"
bullets.` inside what is supposed to be a plain academic paragraph.

`sanitizeParagraph()` in `c-test.ts` normalises emphasis, inline code, headings,
simple chemical formulae (`$CO_2$` → `CO2`) and flattened list markers, and
`generateCTest` now **rejects** any paragraph still carrying markup rather than
mangling a real formula into something that reads like a typo. 257 clean
paragraphs remain, against the 3 a form needs.

## Two engines, two different routing thresholds

`ReadingPractice` routed to the second module on the blueprint's 0.65 cut but
labelled the result "cleared"/"cancelled" on the legacy
`READING_CONFIG.HARD_TRACK_THRESHOLD` of 0.60, so a 62% score was routed down
and reported as cleared. Both now read `ROUTING.upperModuleThreshold`.

The legacy `ReadingSessionManager` — a second, wrong adaptive engine selecting
10 items per module against a 50-item section — was dead code and has been
removed, along with the stale constants in `READING_CONFIG` that described the
pre-2026 section.

## Copy corrected against the blueprint

| Claim | Was | Now |
|---|---|---|
| Total test time | 67–85 min | 83–89 min (ETS 1:23–1:29) |
| Reading duration | 18–27 min | 27–30 min (router 18–21 + 9) |
| Listening duration | 18–27 min | 25–29 min (router 18 + 7/11) |
| Section order on the board | R, L, **Speaking**, **Writing** | R, L, **Writing**, **Speaking** |
| Speaking | "Gate 3 · 4 tasks" | "Gate 4 · 11 items" |
| Writing | "Gate 4 · 3 tasks" | "Gate 3 · 12 items" |
| Build a Sentence brief | "5 grammar tasks · ~5 min" | "10 items on one pooled 6:50 clock" |

## Still outstanding

1. **Bank depth.** Two non-overlapping Listening forms and four Reading forms.
   Conversations and announcements remain the cheapest way to raise that.
2. **Band conversion remains a documented estimate** — ETS does not publish the
   raw-to-band table, and this is surfaced to the user as an estimate.
3. **Genre variety in Read in Daily Life.** The renderer now handles email
   chrome, notices, flyers, menus and timetables. The bank has no SMS/chat
   thread stimuli, which ETS does use; the renderer would need a thread layout
   to support them.
4. **No first-hand test-taker reports.** Unchanged from round 1: every
   interaction mechanic is sourced from ETS plus prep publishers.
