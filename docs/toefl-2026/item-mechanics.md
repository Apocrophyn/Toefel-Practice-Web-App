# TOEFL iBT 2026 — Item-Level Mechanics & On-Screen UI

**Research date:** August 2026
**Purpose:** Replicate the enhanced TOEFL iBT (live since 21 Jan 2026) faithfully in a practice web app.
**Scope:** Interaction models, timers, audio behaviour, and realistic sample items. NOT a re-derivation of the ETS blueprint.

> **How to read confidence labels**
> - **High** = stated by ETS directly, or corroborated by 3+ independent reputable sources.
> - **Medium** = 2 reputable sources agree, no contradiction found.
> - **Low** = single source, or sources conflict, or I am inferring. Marked ⚠️.
>
> ⚠️ **Sourcing caveat.** ETS does not publish a public interaction spec. Several high-ranking "TOEFL 2026" sites (prepex.ai, toeflmocktests.com, prepdrills.com, master-toefl.com, englishaidol.com, fluentprep.online) appear to be AI-generated SEO content and confidently state numbers that contradict each other. I have weighted **ets.org**, **Magoosh**, **TestGlider**, **LingoLeap**, **My Speaking Score**, and **testsucceed.com** highest, and flagged every disagreement. **`toeflresources.com` (Michael Goodine) returned HTTP 403 on every direct fetch attempt** — his content is represented here only via search-engine snippets, which is why a few facts stay at medium confidence.
> I was also **unable to retrieve any r/TOEFL or r/ToeflAdvice first-hand test reports** — reddit.com is blocked to the fetch tool in this environment and site-restricted searches returned nothing usable. **No claim below is backed by a verified first-hand test-taker report.** This is the single biggest gap in this research; see "Open Questions" at the end.

---

## 0. Overall Test Flow

### Mechanics

| Item | Finding | Confidence |
|---|---|---|
| **Section order** | **Reading → Listening → Writing → Speaking** | **High** — ets.org content-structure table lists them in this order; Magoosh's 2026 changes page independently confirms "Reading, Listening, Writing, and then Speaking". |
| **Break** | **None.** "There are no scheduled breaks during the TOEFL iBT test." The old 10-minute break between Listening and Speaking is gone. Unscheduled breaks do not stop the clock. | **High** (ets.org) |
| **Adaptivity** | Reading and Listening only. Two stages: Module 1 (routing, same for everyone) → Module 2 (easier or harder). Writing and Speaking are **not** adaptive. Adapts on **section-level** performance, not per-question. | **High** |
| **Total time** | ~1h50m–2h wall clock including directions; ~90 min of scored content. ETS says "allow approximately two hours… As the test adapts, test time and items may vary." | **High** |
| **System / mic check** | At a test centre: invigilator seats you, demonstrates headset volume, provides scratch paper. The **tutorial section is the audio check** — "that is your one chance to flag a hardware problem." At home: a separate pre-test check (camera, mic, browser, network) via the "At Home Check-In" link up to 15 min before. Note: at-home takers see on-screen headset-check instructions that they are told to **ignore**, because headsets are not permitted at home. | **Medium** |
| **Note-taking** | **Allowed throughout all four sections.** Centre-provided pencil + scratch paper (or small whiteboard); you may not bring your own; must be surrendered at the end; may not be used before/between sections. | **High** |
| **Volume control** | Between sections, section directions appear and you adjust headphone volume. | **Medium** |

### Official ETS section table (verbatim structure)

| Section | Items | Base time | Task types |
|---|---|---|---|
| Reading | up to **50** | ~30 min | Complete the Words; Read in Daily Life; Read an Academic Passage |
| Listening | up to **47** | ~29 min | Listen and Choose a Response; Listen to a Conversation; Listen to an Announcement; Listen to an Academic Talk |
| Writing | up to **12** | ~23 min | Build a Sentence; Write an Email; Write for an Academic Discussion |
| Speaking | up to **11** | ~8 min | Listen and Repeat; Take an Interview |

**⚠️ This contradicts the current `CLAUDE.md` project brain in three material ways:**
1. `CLAUDE.md` says Speaking comes **before** Writing. **It does not.** Writing is third, Speaking is last.
2. `CLAUDE.md` says Reading is "approximately 20 questions total". **It is up to 50 items.** (This is consistent once you realise each Complete-the-Words *blank* is its own scored item: ~10 blanks × 2–5 passages already gets you to 20–50.)
3. `CLAUDE.md` lists Speaking as 4 tasks including "Integrated Speaking 1 / 2" (read+listen→summarise, listen→opinion). **Those integrated tasks no longer exist.** 2026 Speaking is only **Listen and Repeat (7 items) + Take an Interview (4 items) = 11 items.** Likewise Writing has no "integrated writing"; the old independent essay is gone too.

**Confidence: High** on all three corrections (ets.org + Magoosh + TestGlider agree).

---

# READING

---

## 1. Complete the Words

### Mechanics

**This is a classic C-test.** That is the single most important finding for implementation — the item is *algorithmically generated*, not hand-authored.

- **Generation rule:** You get a short academic paragraph. **The first sentence is left completely intact.** Starting from the **second sentence**, the **second half of every second word is deleted**. (High confidence — stated in identical terms by TestGlider and LingoLeap, and LingoLeap explicitly names it "C-test format".)
- **Result:** exactly **10 incomplete words per paragraph**. (High — TestGlider, LingoLeap, college-council, testsucceed, prepdrills all say 10.)
- **Paragraph length:** ~**70–100 words** (most sources say 70–80). Topic is academic — typically defining or explaining a concept from science, history, social science.
- **Rendering:** the visible stem is followed by **underscores** and an inline text input. Sources describe it as "a small inline text box" / "type the missing letters". The stem is typically the **first 3–5 letters**.
- **⚠️ Does the number of underscores equal the number of missing letters?** **Sources conflict.** testsucceed states "Each underscore represents one missing letter. Count them and match your guess to the length." But LingoLeap's own worked example renders `calen_____` → *calendars* (4 letters missing, 5 underscores) and `obser_____` → *observations*, `regu_____` → *regular*, which uses a **fixed-width** underscore run regardless of the answer length. **Confidence: Low.** For a build, I'd render a fixed-width blank and **not** promise letter-count signalling — assuming letter-count signalling and being wrong makes your app materially easier than the real test.
- **Input type:** **free text field**, not per-character boxes. (Medium — every source describes typing letters into a box; none describes character cells.)
- **Auto-advance between blanks:** **Not documented anywhere.** ⚠️ Inference: because it is a standard C-test with variable-length answers, per-character auto-advance is unlikely; Tab/click navigation is the safe assumption. **Confidence: Low.**
- **Partial credit:** **None.** Each blank is scored 1/0. Spelling must be exactly right, including endings and doubled letters. **No penalty for a wrong answer**, so always guess. (High)
- **Number of tasks per test:** ~**2–5 Complete the Words paragraphs**. (Medium — testsucceed/college-council; not confirmed by ETS.)
- **Navigation:** not documented for Reading. ⚠️ Inference: within an adaptive module you can likely move among reading items, but this is unverified. **Low.**

### Timing

- No published per-item timer. The **Reading section as a whole is ~30 min base** and adapts.
- Recommended pace from prep sources: **2–3 min per paragraph**, i.e. ~10–15 s per blank. (One outlier, prepdrills, says 30–40 s per blank, which is inconsistent with a 30-min section containing up to 50 items — treat as wrong.)
- **Confidence: Medium** (pacing advice, not a hard exam timer).

### On-screen directions

Best available wording (testsucceed): *"Read a passage with missing letters in words. Fill in the missing letters to complete the words correctly."*
goarno phrasing: *"You will read a short passage where some words are missing letters. Using the context of the passage, complete each partially deleted word by typing in the missing letters."*
**Confidence: Low** on exact ETS wording — no source reproduces the official screen text.

### Sample items

**Sample A — Calendars** *(reproduced from LingoLeap; correct C-test shape: sentence 1 intact)*

> A calendar is a system for organizing time into units such as days and months. Early calen\_\_\_\_\_ often used obser\_\_\_\_\_ of the Moon because its pha\_\_\_\_\_ repeat in a regu\_\_\_\_\_ cycle.

Answers: calendars, observations, phases, regular

**Sample B — Coral reefs** *(goarno)*

> Coral reefs sust\_\_\_ immense mar\_\_\_ biodiversity, serv\_\_\_ as habit\_\_\_ for thous\_\_\_\_ of spec\_\_\_. These comp\_\_\_ structures are for\_\_\_ by small organisms kno\_\_\_ as polyps.

Answers: sustain, marine, serving, habitats, thousands, species, complex, formed, known

**Sample C — Prehistoric life** *(testsucceed, abridged)*

> We mi\_\_t think th\_t prehistoric peo\_\_\_ concentrated on\_\_ on ba\_\_\_ survival…

Answers: might, that, people, only, basic

**Sample D — a correctly-generated example I built to the C-test rule** *(illustrative, flagged as constructed)*

> Sleep plays a critical role in how the brain stores new information. During dee\_ sleep, the bra\_\_ replays pat\_\_\_\_\_ of activity th\_\_ occurred while a per\_\_\_ was awake. This proc\_\_\_ appears to stre\_\_\_\_\_\_ the connections bet\_\_\_\_ neurons, mak\_\_\_ memories more sta\_\_\_ over time.

Answers: deep, brain, patterns, that, person, process, strengthen, between, making, stable

**Observed ETS topic pool (TestGlider):** The Rosetta Stone, Bioluminescence, Caffeine, Plate Tectonics, Human Perception.

---

## 2. Read in Daily Life

### Mechanics

- **Stimulus formats confirmed across sources:** emails, notices / bulletin-board postings, text-message chains (SMS threads), schedules, menus, invoices & bills, advertisements & leaflets, forms, social-media posts, campus/institutional announcements, bank notices.
  - testsucceed's official-style samples render the stimulus as an **image** of the artefact (a bank notice, a farmer's-market social post, an art-workshop notice) rather than plain text — i.e. **the visual formatting is part of the item.** TestGlider similarly stresses "information presented in nonlinear formats."
  - **Build implication:** this is not a plain-text renderer. You need styled artefact components (email chrome, SMS bubbles, a table for schedules, a card for social posts). **Confidence: Medium-High.**
- **Length:** **15–150 words.** Very short. (High — TestGlider, college-council, prepdrills agree.)
- **Questions per set:** **2 or 3**, "depending on length." Shorter artefacts (a sign, a short SMS) get 2; longer ones (a multi-paragraph email, a notice with conditions) get 3. (High — testsucceed samples all show 2; goarno/TestGlider/Goodine snippets say "two or three"; goarno's practice bank shows 3-question sets.)
- **Answer options:** **4 (a/b/c/d), printed text.** (High — every testsucceed sample and goarno sample shows 4.)
- **Question types actually used:** main purpose of the text; intended audience; specific factual detail (deadline, price, room, time, condition); "what should the reader do"; meaning of a phrase in context; simple inference; **NOT/EXCEPT** questions ("Which benefit is NOT mentioned?").
  - **Pronoun-referent questions: no evidence found.** That is an old-format Reading question type; I found no 2026 source listing it for Daily Life. ⚠️ Assume absent.
- **Distractor design:** sources emphasise traps built on small function words — *not, only, may, must, optional, required*. Worth encoding in your item-authoring guidelines.

### Timing

- No per-item timer. Prep guidance: **60–90 seconds per complete set.** **Confidence: Medium.**

### On-screen directions

No source reproduces official wording. Working paraphrase: *"Read the text and answer the questions."*
**Confidence: Low.**

### Sample items

**Sample Set 1 — Notice (2 questions)**

> **LIBRARY STUDY ROOMS**
> Study rooms on floors 1 and 2 may be booked online for up to two hours per day. Bookings are not required for the open reading area on the third floor. Rooms not claimed within 10 minutes of the booking start time will be released to other students.

1. What is true about the third-floor reading area?
   a) It must be booked at least a day in advance.
   b) **You can use it without booking.** ✓
   c) It is limited to two hours per day.
   d) It is only open to graduate students.
2. What happens if a student arrives 15 minutes late for a booking?
   a) They are charged a fee.
   b) Their booking is extended.
   c) **The room may be given to someone else.** ✓
   d) They must rebook for the following day.

**Sample Set 2 — Email (3 questions)** *(structure from goarno's "Oakville Maker Collab" item)*

> **From:** membership@oakvillemaker.org
> **To:** you
> **Subject:** Welcome to Oakville Maker Collab!
>
> Hi Priya,
> Your membership is now active. Your key card gives you access to the workshop from 9 a.m. to 9 p.m., seven days a week.
> As a member you'll receive our weekly digest of member projects, and you can reserve equipment up to seven days ahead through the member portal.
> One important note: **before your first visit you must complete the online safety orientation.** Your key card will not unlock the machine room until we have your completion certificate on file.
> — The Collab Team

1. What must the member do before entering the machine room?
2. Which benefit is NOT mentioned in the email?
3. What can be inferred about the workshop's hours?
(4 options each.)

**Sample Set 3 — Text message thread (2 questions)**

> **Sam** — Hey, are we still meeting for the group project at 4?
> **Dana** — I can't make 4, the lab ran over. Could we do 5:30 instead?
> **Sam** — 5:30 works, but the study room is booked from 6. Maybe the café on Hill St?
> **Dana** — Perfect. I'll bring the printouts. Can you bring the laptop?
> **Sam** — Sure. See you there.

1. Why does Dana suggest a different time?
2. What is Sam asked to do?

**Observed ETS-style topic pool (TestGlider):** "Vietnam Project", "Midtown Bridge", "Clinic Hours", "Holiday Extravaganza", "Home Renovation".

---

## 3. Read an Academic Passage

### Mechanics

- **The old 10-question / 700-word format is GONE.** Explicitly confirmed: *"the passage is now short, not the long 700-word text older guides describe."* **Confidence: High.**
- **Passage length:** ~**200 words** (TestGlider, college-council, prepdrills all say ~200). testsucceed's own samples run **250–280 words**. So plan for **200–280**. **Confidence: High** that it's short; **Medium** on the exact band.
- **Questions per passage:** ⚠️ **Sources conflict.**
  - **5 questions** — TestGlider, college-council, prepdrills (up to 5). This is the majority position.
  - **3 questions** — testsucceed's published samples show 3.
  - **Resolution:** likely **3–5, varying with passage length and module**. I'd build for a variable 3–5 and default to 5. **Confidence: Medium.**
- **Answer options:** **4, printed text, single-select.** All samples across all sources. **Confidence: High.**
- **Question formats present:** main idea / main topic; factual detail; **inference**; **vocabulary in context**; author's purpose / rhetorical purpose; relationships between ideas; organisation.
- **Question formats REMOVED (high confidence, and important for a build):**
  - ❌ **Insert-a-sentence** (the "click on a ▪ square to add this sentence") — gone.
  - ❌ **Prose summary / drag-to-bucket table completion** (the old 2-point multi-select summary) — gone.
  - ❌ **Multi-select "choose 2 of 5"** — no evidence it survives.
  - ❌ Reference/pronoun questions — no evidence.
  - **All 2026 Reading questions are single-select 4-option multiple choice** (plus the typed Complete-the-Words blanks). college-council states main idea/detail/inference/vocab/purpose "replace 'insert sentence' and 'prose summary' formats."
  - ✅ **NOT/EXCEPT** questions do still appear (seen in Daily Life samples; plausible in academic passages).
- **Topics:** science, history, business, art, social studies. No background knowledge required.

### Timing

- No per-passage timer; the ~30-min Reading section is the only clock. Reading total is **35–48 questions across two adaptive modules** per prepdrills (vs ETS's "up to 50" ceiling) — consistent. **Confidence: Medium.**

### On-screen directions

testsucceed-style: *"Read the passage and answer the questions."* Official wording unverified. **Confidence: Low.**

### Sample passage

**"The Winner's Curse"** *(topic taken from TestGlider's observed pool; passage written to spec — flagged as constructed, ~210 words)*

> When several bidders compete for an item whose true value is uncertain, economists have observed a curious pattern: the person who wins the auction often ends up worse off than the people who lost it. This outcome is known as the winner's curse.
>
> The logic is straightforward. Each bidder forms a private estimate of what the item is worth. Some estimates will be too low, some too high, and a few will be roughly accurate. Because the auction is won by whoever bids the most, the winner is, almost by definition, the bidder whose estimate was the most optimistic. If the average of all estimates is close to the item's real value, then the highest estimate is systematically above it. The winner therefore tends to overpay.
>
> The effect was first documented in the 1970s among oil companies bidding for offshore drilling rights. Firms that won the most tracts were not the most profitable; several found that the oil recovered was worth less than what they had paid for the lease.
>
> Experienced bidders can protect themselves by "shading" their bids — deliberately bidding below their own estimate, and shading further as the number of competitors grows. Yet the curse persists, in part because bidders rarely adjust for the simple fact that winning itself is evidence that they were too optimistic.

1. What is the main idea of the passage?
   a) Auctions with many bidders produce fairer prices.
   b) **The bidder who wins an auction has often overestimated the item's value.** ✓
   c) Oil companies were the first to use sealed-bid auctions.
   d) Bidders should avoid auctions where value is uncertain.
2. According to the passage, why is the winning bid likely to be too high?
   a) Bidders deliberately inflate their offers to intimidate rivals.
   b) **The winner is the bidder whose estimate was the most optimistic.** ✓
   c) Auctioneers set reserve prices above true value.
   d) The number of bidders drives the true value upward.
3. The word "shading" in the last paragraph is closest in meaning to
   a) concealing   b) **reducing** ✓   c) delaying   d) repeating
4. What does the passage suggest about the oil companies of the 1970s?
   a) They stopped bidding for offshore rights.
   b) They had more accurate estimates than other industries.
   c) **Winning more leases did not make them more profitable.** ✓
   d) They colluded to keep bids low.
5. Why does the author mention the number of competitors in the final paragraph?
   a) To argue that auctions should limit participation.
   b) To show that large auctions are more efficient.
   c) **To explain a factor that should make bidders shade their bids further.** ✓
   d) To contrast oil auctions with art auctions.

---

# LISTENING

## Cross-cutting listening rules (apply to all four task types)

| Question | Answer | Confidence |
|---|---|---|
| **Does audio play once?** | **Yes — once, always, no replay button, no pause.** The old "listen again" replay sub-question is **abolished**. | **High** (unanimous) |
| **Questions before or after audio?** | **After.** You do not see the questions while listening. | **High** (Magoosh explicit; TestGlider/goarno consistent) |
| **Are answer options printed text?** | **Yes — 4 printed options, single-select, for every listening task including Choose a Response.** | **High** ⚠️ *see conflict below* |
| **Is a visual of the speaker shown?** | **A static contextual image**, not video. Confirmed for Speaking's Listen-and-Repeat (location-themed images: zoo, library, museum). For Listening tasks, sources describe context images but nobody documents video. ⚠️ Treat as static image / no video. | **Medium-Low** |
| **Note-taking?** | Allowed (scratch paper). Prep sources say it's not worth it for Choose-a-Response / short conversations / announcements (20–30 s audio), and **is** worth it for Academic Talks. | **High** (allowed) / Medium (advice) |
| **Can you go back?** | **No — "You cannot replay the audio or go back to previous questions."** | **Medium-High** (testsucceed explicit) |

> ⚠️ **Resolved conflict — answer options for "Listen and Choose a Response."**
> Magoosh's listening-practice page was summarised as "four **audio** answer choices presented after the prompt." **Every other source contradicts this**, including three that state it explicitly: TestGlider ("Short spoken question/statement + **4 written response options**"), master-toefl ("4 text options on screen"), and testsucceed (renders 4 printed a/b/c/d options in all samples). A search-snippet source states it most plainly: *"You will only HEAR the first sentence, but you will be able to read the answer choices."*
> **Verdict: the stimulus is audio-only (never printed); the 4 options are printed text. Build it that way.** Confidence: **High.**

---

## 4. Listen and Choose a Response

### Mechanics

- You hear **one short utterance from one speaker** — a question or a statement, ~1 sentence, roughly **3–5 seconds** of audio. **It is never shown in text.**
- You then read **4 printed options** and select the most natural, socially appropriate reply.
- Tests: literal + implied meaning, socially appropriate response, and **intonation/stress interpretation** (so your TTS/audio must carry real prosody — a flat synthetic read breaks the construct).
- **Items per set: ~8.** **Sets per test: usually 2–3** (one per adaptive module, sometimes more). So roughly **8–16 items** of this type per test. **Confidence: Medium** (testsucceed; master-toefl says ~8 in Module 1).
- 1 point each, no partial credit, no back-navigation, no replay.

### Timing

- **~20–30 seconds per item**, covering listening + answering. Magoosh says "roughly 30 seconds per question." **Confidence: Medium.**
- ⚠️ Unclear whether there is a hard per-item timer or just the section clock. Given the section is 47 items in 29 min (~37 s/item average), a per-item cap is plausible but unconfirmed. **Low.**

### On-screen directions

testsucceed: *"Listen carefully and select the most appropriate response. This task tests your ability to understand context and choose the most natural reply."*
master-toefl paraphrase: *"Listen to one sentence spoken aloud; select the most appropriate response from four choices."*
**Confidence: Low** on exact ETS wording.

### Sample items (5)

**1.** 🔊 *(Woman)* "Didn't I just see you in the library an hour ago?"
- a) Yes, you can find it in the reference section.
- b) I don't think I'll have enough time to do that.
- c) Actually, I think I can get there a little earlier.
- d) **As a matter of fact, I was returning a book.** ✓

**2.** 🔊 *(Man)* "I'm afraid I'm not available this evening."
- a) Oh, that's too early.
- b) **How about tomorrow night then?** ✓
- c) She arrived this afternoon.
- d) No, that's not necessary.

**3.** 🔊 *(Woman)* "Where's the nearest bus stop?"
- a) I nearly missed the bus.
- b) Every 30 minutes.
- c) **I can help you find it.** ✓
- d) I'll take the subway instead.

**4.** 🔊 *(Man)* "Do you think we should print the report or submit it online?"
- a) The printer is out of paper.
- b) Reports are usually long.
- c) **Submitting it online might be faster.** ✓
- d) I printed something yesterday.

**5.** 🔊 *(Woman, rising incredulous intonation)* "You finished the whole assignment already?"
- a) It's due next Thursday.
- b) **I know — I couldn't believe it either.** ✓
- c) You should start earlier next time.
- d) The assignment is about climate policy.

*(Item 5 illustrates the intonation-dependent subtype: the same words with flat intonation would take a different reply.)*

---

## 5. Listen to a Conversation

### Mechanics

- **Audio length: 20–30 seconds.** Very short — this is not the old 3-minute campus conversation. **Confidence: High** (Magoosh, master-toefl, testsucceed timings of 0:19–0:28 all agree).
- **Speakers: 2** (typically one male, one female).
- **Setting:** campus **and** general daily life — neighbours discussing a noise complaint, classmates sorting out a schedule, family members making a plan, student ↔ staff.
- **Questions per conversation: 2.** **Confidence: High** (unanimous).
- **Options: 4, printed.**
- **Question types:** purpose of the conversation; key detail; speaker attitude; implied meaning; what a speaker will probably do next.
- Questions appear **after** the audio; audio plays once.

### Timing

No published per-item timer; ~20–30 s audio + 2 questions. Budget **~60–75 s per conversation set**. **Confidence: Low** (inferred from section math).

### On-screen directions

testsucceed: *"Listen carefully to the content and answer the questions that follow."* **Confidence: Low.**

### Sample item

🔊 **Conversation (2 speakers, ~26 s)**

> **Man:** Hey, did you get the email about the poster session? They moved it to Thursday.
> **Woman:** Thursday? I have my lab until five. When does it start?
> **Man:** Four-thirty, but they said you can set up any time after three. If you get your poster on the board early, nobody minds if you show up a bit late.
> **Woman:** Oh, that helps. I'll print it tomorrow morning and put it up before lab.

1. Why does the man contact the woman?
   a) To ask her to print his poster
   b) **To tell her about a change to the poster session** ✓
   c) To invite her to join his lab group
   d) To warn her that the deadline has passed
2. What will the woman most likely do?
   a) Cancel her lab session
   b) Ask for an extension on the poster
   c) **Put up her poster before her lab starts** ✓
   d) Attend the session from four-thirty

---

## 6. Listen to an Announcement

### Mechanics

- **Audio length: 20–30 seconds**, or expressed in words, **40–85 words**. **Confidence: High** (Magoosh 20–30 s; TestGlider 40–85 words; testsucceed samples 0:20–0:30).
- **Speakers: 1.**
- **Setting:** campus or public — museum staff announcing an exhibit, transit worker describing a service change, campus employee giving building instructions, career-centre notice, club meeting, policy change.
- **Questions per announcement: 2.** **Confidence: High.**
- **Options: 4, printed.**
- **Question types:** main idea / purpose of the announcement; key practical detail (time, room, date, requirement); what listeners are asked to do; simple inference.
- Practical details (numbers, days, rooms, names) are the primary target — note-taking pays off here more than in conversations.

### Timing

Budget **~60–75 s per announcement set**. **Confidence: Low** (inferred).

### On-screen directions

testsucceed: *"Listen carefully to the content and answer the questions that follow."* **Confidence: Low.**

### Sample item

🔊 **Announcement (1 speaker, ~25 s)**

> Attention, everyone. The career centre workshop originally scheduled for the Hartley Building has been moved to Room 210 in the Student Union. Space is limited this term, so please register at the front desk by Thursday — walk-ins can't be accommodated. And don't forget to bring your student ID; you won't be able to enter the session without it.

1. What is the main purpose of the announcement?
   a) To cancel the career centre workshop
   b) **To inform listeners about a room change and registration requirements** ✓
   c) To recruit volunteers for the Student Union
   d) To explain how to obtain a student ID
2. What are listeners asked to do?
   a) Arrive early at the Hartley Building
   b) Email the career centre before Thursday
   c) **Register by Thursday and bring a student ID** ✓
   d) Sign in as a walk-in at Room 210

---

## 7. Listen to an Academic Talk

### Mechanics

- **Audio length: 100–250 words, roughly 60–90 seconds.** The 250-word figure in the ETS blueprint is the **upper bound**, not the norm. **Confidence: High** (TestGlider "100–250 words"; Magoosh "60–90 seconds"; master-toefl "~90 seconds").
- **Speakers: 1** (instructor / lecturer).
- **Questions per talk: 4.** **Confidence: High** (Magoosh, TestGlider, goarno all say 4).
  - ⚠️ master-toefl says 5. Single outlier; **go with 4.**
- **Options: 4, printed.**
- **Question types:** main topic; specific detail; **why does the speaker mention X** (rhetorical purpose/organisation); inference; speaker attitude.
- **Structure of the talk** (useful for content generation): hook or relatable example → definition/explanation of the concept → one or more illustrative examples → brief conclusion. **The speaker always defines technical terms in context** — no background knowledge is required.
- **Topics:** psychology, economics, history, biology, art & music, sociology.
- Note-taking is genuinely useful here; audio still plays only once.

### Timing

~90 s audio + 4 questions ≈ **3–3.5 min per talk set**. **Confidence: Low** (inferred).

### Sample item

🔊 **Academic Talk (~1 min, ~200 words)** — *reproduced from goarno's practice bank (Structural Coloration), transcript abridged in source*

> When you look at a bright blue t-shirt, you're seeing colour created by chemical pigments — molecules that absorb some wavelengths of light and reflect others. Over time, ultraviolet light breaks down those molecular bonds, which is why dyed fabrics fade. But there's a second way to make colour, and it doesn't fade at all. It's called structural colour, and it comes from the physical shape of a surface rather than from any pigment.
> Let's look at the Morpho butterfly, famous for its brilliant, iridescent blue wings. There is no blue pigment anywhere in those wings. Instead, the scales are covered in microscopic ridges spaced at just the right distance to reflect blue wavelengths and cancel out the rest. Here's the striking part: if you grind a Morpho wing into a powder, the blue disappears entirely — you get a dull brown dust — because you've destroyed the structure that was producing the colour.
> Researchers are now trying to copy this. Because structural colours can last indefinitely and need no dye, they're being explored for new types of paints, cosmetics, and digital screens…

1. What is the main topic of the talk?
   a) How chemical pigments are manufactured for clothing
   b) **The physical mechanisms behind structural coloration** ✓
   c) Why butterfly populations are losing their natural colours
   d) The environmental dangers of using toxic dyes
2. According to the speaker, why do traditional chemical pigments fade over time?
   a) Their physical ridges collapse under pressure
   b) They are easily washed away by environmental moisture
   c) **Ultraviolet light breaks down their molecular bonds** ✓
   d) They absorb too much blue light over their lifespan
3. What happens if the wings of a Morpho butterfly are ground into a powder?
   a) The powder retains a bright, iridescent blue colour
   b) **The powder becomes dull because the physical structure is destroyed** ✓
   c) The powder releases a toxic chemical dye into the air
   d) The powder reflects all wavelengths of light equally
4. Why does the speaker mention new types of paints, cosmetics, and digital screens?
   a) To list products that currently rely heavily on chemical pigments
   b) To highlight the historical uses of butterfly wings in art
   c) **To illustrate potential practical applications of structural coloration** ✓
   d) To argue that modern manufacturing is becoming more expensive

*(Note the Q4 pattern — "Why does the speaker mention X" — this is the surviving rhetorical-purpose type and should be ~1 of every 4 talk questions.)*

---

# WRITING

*Writing is the **third** section, ~23 min, up to 12 items: 10 × Build a Sentence + 1 email + 1 discussion.*

---

## 8. Build a Sentence

### Mechanics — **the single most build-critical item type**

- **The interaction is word-order assembly from a word bank into blank slots.**
- **⚠️ Drag-and-drop vs click-to-place: sources conflict.**
  - Magoosh: *"you drag words from the bank into the blanks"* — drag-and-drop.
  - prepex: *"click and drag words into order"* — drag.
  - testsucceed: *"click or tap word chunks from the word bank to place them into boxes"* — click-to-place / tap.
  - **Resolution:** almost certainly **both are supported** (a tap target is required for tablet/accessibility, and ETS interfaces are typically click-to-place with drag as an affordance). **Build both: click-to-place as primary, drag as enhancement.** Confidence: **Medium** that both work; **High** that at minimum one of them does.
- **Tile content: MIXED — single words AND multi-word chunks.** Magoosh explicitly names chunks like *"personal favorites"* and *"would like"*; testsucceed samples show chunks like *"showed us around"*, *"a different department"*, *"will be"*. **Do not build a single-word-only tokenizer.** **Confidence: High.**
- **Tile count: 5–7 chunks per item** (testsucceed: "5–7 word chunks"; prepex: "5–7 scrambled words"; Magoosh's worked example has 7). **Confidence: High.**
- **Distractor tiles: YES, sometimes.** *"Sometimes there are more options than blanks, which means you will not use every word."* (Magoosh). **Confidence: Medium** — single strong source, but it materially changes the data model (tiles ≠ blanks).
- **Prefilled/locked words: YES, sometimes.** Some items have words "already locked in position within the sentence" (Magoosh); prepex shows `"I'm"` prefilled and `"you a"` prefilled. **Confidence: Medium.**
- **Each item has a CONTEXT PROMPT.** Every sample shows a preceding statement or question that your assembled sentence must respond to — e.g. *"I just got out of a job interview."* → build *"Do you think they will offer you a position?"* **This is not a bare scramble; it is a contextualised response.** **Confidence: High.**
- **Number of items: 10.** (ETS Writing = 12 items total = 10 + email + discussion.) ⚠️ testsucceed says "around 6–12"; prepex says ~9. **10 is the best-supported figure** (Magoosh, study.com, writing-30 all say 10). **Confidence: High.**
- **Correct orders: essentially one.** Scoring is **all-or-nothing per item** — "Every word must be in the correct position, or you get zero points" (1.0 or 0.0). Machine-scored. ⚠️ In practice a few items may accept 2 orderings (e.g. adverb placement), but no source documents alternates. **Build a set-of-accepted-orderings field anyway** — cheap insurance. **Confidence: High** on all-or-nothing; **Low** on whether alternates exist.
- **Navigation:** **not documented.** ⚠️ No source states whether you can return to earlier Build-a-Sentence items within the pooled timer. Given the timer is pooled across all 10, back-navigation is plausible. **Confidence: Low — treat as an open question.**
- **Grammar patterns targeted:** subject-verb-object order, **question inversion** (statement vs question is a heavy focus), embedded/indirect questions (*"Do you know if…"*, *"whether…"*), relative clauses, passive voice, verb form/tense.

### Timing

- **⚠️ Sources conflict, but there's a clear winner.**
  - **6 min 50 s pooled across all 10 items (~41 s/item)** — Magoosh **and** study.com. **This is the best-supported figure.**
  - 5 min 50 s (~35 s/item) — a single search snippet. Likely a transcription error of 6:50.
  - "roughly 6–8 min" / "~45 s per sentence" — testsucceed, vaguer.
- **Verdict: a single pooled 6:50 timer for the whole 10-item block, NOT a per-item timer.** **Confidence: Medium-High.**
- The remaining Writing budget: Email **7 min**, Academic Discussion **10 min** → 6:50 + 7 + 10 ≈ **23:50**, which reconciles almost exactly with the ~23-min section. **This arithmetic is strong corroboration for all three timings.**

### On-screen directions

testsucceed: *"Arrange the words to create a grammatically correct and meaningful sentence that responds to the question."* **Confidence: Low** on exact ETS wording, **High** on intent.

### Sample items (5)

**1.** Context: *"What was the highlight of your trip?"*
Tiles: `were` · `the` · `was` · `old city` · `showed us around` · `who` · `tour guides`
→ **"The tour guides who showed us around the old city were fantastic."**
*(Note: `was` is a distractor — 7 tiles, 6 used.)*

**2.** Context: *"I heard Anna got a promotion."*
Tiles: `a different department` · `if` · `moving to` · `know` · `do` · `you`
→ **"Do you know if she will be moving to a different department?"**
*(⚠️ As printed by the source, `she will be` is not in the tile list — implying it is **prefilled** in the template. Good illustration of the prefilled mechanic.)*

**3.** Context: *"We're planning a trip to the mountains next weekend."*
Tiles: `the cabins` · `available` · `whether` · `can` · `will be` · `you`
→ **"Can you tell me whether the cabins will be available?"**
*(`tell me` prefilled.)*

**4.** Context: *"I am signing up for a cooking class this weekend."*
Tiles: `will` · `you` · `what` · `recipes` · `learn`
→ **"What recipes will you learn?"**

**5.** Context: *"How was your holiday in Japan?"*
Tiles: `we` · `visited` · `were` · `places` · `absolutely` · `amazing` · `The`
→ **"The places we visited were absolutely amazing."**

**Bonus (Magoosh's worked example).** Blanks: 7. Bank: `the` · `topics` · `were` · `do` · `useful` · `you` · `know` · `if`
→ **"Do you know if the topics were useful?"**

---

## 9. Write an Email

### Mechanics

- **Prompt structure (highly consistent — 3 parts):**
  1. **Scenario** — a realistic situation, ~**90 words**, establishing context (school, work, or daily life).
  2. **Recipient** — a named person whose relationship to you dictates the register (professor = formal; friend = casual; manager = semi-formal).
  3. **Three bullet points** specifying exactly what the email must cover. **All three must be addressed** — this is a scored criterion.
- **Interface:** plain text box + **live word counter on screen**.
- **Scoring:** 0–5, on four criteria: **purposeful communication** (all three bullets), **social conventions & register/tone**, **language accuracy** (grammar + vocabulary range), **mechanics** (spelling, punctuation).

### Timing

- **7 minutes**, its own dedicated timer. **Confidence: High** (Magoosh, study.com, college-council agree).
- **Word count: ⚠️ ETS sets NO official word count.** Reach120 states this explicitly: *"ETS sets no word count for this task."* Prep targets cluster at **80–120 words** (study.com, Reach120) or **100–120** (Magoosh). **Build the counter, but display a soft target range, not a hard gate.** **Confidence: High** on "no official count", **Medium** on the 80–120 practice target.

### On-screen directions

No source reproduces the official wording. Working paraphrase, consistent with all descriptions:
*"Read the situation below and write an email in response. Be sure to address all of the points listed. You have 7 minutes."*
**Confidence: Low.**

### Sample prompts (2)

**Sample 1 — Poetry magazine submission** *(from testsucceed's sample set)*

> A literary magazine you enjoy, *Fieldstone Review*, has put out a call for reader poetry submissions. You submitted two poems through their online form last week, but the site displayed an error message after you clicked "submit," and you never received a confirmation email. You want to find out whether your poems were received.
>
> Write an email to the magazine's submissions editor, Ms. Owens. In your email:
> - explain what you enjoy about the publication
> - describe the technical problem you experienced when submitting
> - ask her to confirm whether your submission was received

**Sample 2 — Public speaking workshop** *(structure from Magoosh's described example)*

> Last month you attended a public speaking workshop organised by your university's career centre. The centre has emailed all participants asking for feedback so they can improve future sessions. You found parts of the workshop genuinely useful, but you felt one important area was not covered.
>
> Write an email to the workshop coordinator, Mr. Alvarez. In your email:
> - describe which part of the workshop you found most useful
> - explain what topic you think was missing
> - suggest a workshop you would like the career centre to offer next term

---

## 10. Write for an Academic Discussion

### Mechanics

- **This task survives largely unchanged from the pre-2026 test.** If you already have an implementation, it mostly carries over.
- **Layout — 3 stacked posts + your reply box:**
  1. **Professor's post** — a short scenario framing a debate and posing a question. ~**70–75 words**.
  2. **Two student posts** (named classmates), each ~**50 words**, presenting **two different viewpoints**. **Confidence: High** — it is exactly **2** student responses, unanimous across sources.
  3. **Your response box** with a **live word counter**.
- **Requirement:** state and support your own opinion **and** engage with the classmates' ideas by name.
- **Scoring:** 0–5 on purposeful communication, contribution to the discussion, language accuracy, mechanics.

### Timing

- **10 minutes**, its own timer, starting the moment the prompt appears (reading time is inside the 10 min). **Confidence: High.**
- **Word count: "at least 100 words"** is the stated minimum in the on-screen directions; practical target **120–130**. **Confidence: High.**

### On-screen directions (this one IS quotable)

> *"Express and support your opinion. Make a contribution to the discussion in your own words. An effective response will contain at least 100 words."*

**Confidence: Medium-High** — reproduced verbatim by Magoosh, and consistent with the pre-2026 official wording.

### Sample item

> **Your professor is teaching a class on urban planning. Write a post responding to the professor's question.**
> In your response you should:
> - express and support your personal opinion
> - make a contribution to the discussion in your own words
>
> *An effective response will contain at least 100 words.*

**Dr. Nakamura**
> We have been discussing the design of public spaces in cities. Some urban planners argue that cities should prioritize green spaces such as parks and gardens because they improve residents' physical and mental health. Others believe that cities should focus on building community centers and cultural venues because these spaces strengthen social connections. Which type of public space do you think cities should prioritize? Why?

**Tanya**
> I think green spaces are more important. Parks give people a place to exercise, relax, and enjoy nature, which are all essential for well-being. In crowded cities, having access to trees and open areas can reduce stress and improve air quality for everyone.

**Marco**
> I believe community centers should be the priority. These spaces bring people together through events, classes, and shared activities. While parks are nice, they do not create the same level of social interaction that a well-designed community space can offer.

*[Your response — text box with word counter — 10:00 timer]*

---

# SPEAKING

*Speaking is the **LAST** section, ~8 min, 11 items: 7 × Listen and Repeat + 4 × Take an Interview. **There are no integrated (read+listen) speaking tasks any more.***

---

## 11. Listen and Repeat

### Mechanics

- **You hear each sentence ONCE.** No replay, no second play. **Confidence: High** (unanimous — MSS, goarno, testsucceed, TestGlider).
- **The sentence is NEVER shown in print.** Audio only. *"There is no text on the screen and no time to prepare."* **Confidence: High.**
- **A static contextual IMAGE is shown** — location-themed, matching the scenario (zoo, library, museum, gym, hotel). This is a real UI element. **Confidence: Medium** (My Speaking Score states it explicitly; testsucceed's sample scenarios corroborate the themes).
- **A beep signals the start of recording.** Recording begins automatically the instant the audio ends + beep. There is **no prep time** and **no manual start button**. **Confidence: High.**
- **7 sentences per task**, all bound to **one coherent scenario** — the framing is that a supervisor/guide is orienting you at a location, and you repeat what they say.
- **Scoring:** AI-scored **0–5** per item, on exactness of repetition + intelligibility. 5 = exact repetition, full intelligibility, no missing or changed words. Individual item scores are not reported; only the section band.
- **⚠️ Recording auto-stops at the window end** and auto-advances to the next sentence. (Implied by "responses automatically progressing through the task"; no manual stop documented.) **Confidence: Low-Medium.**

### Timing — **response window grows with sentence length**

| Sentences | Response window |
|---|---|
| 1–2 | **8 seconds** |
| 3–5 | **10 seconds** |
| 6–7 | **12 seconds** |

**Confidence: Medium-High** — this exact 8/10/12 table is given identically by My Speaking Score, goarno, and search snippets. testsucceed says "approximately 10 seconds per sentence," which is the average of that table and is compatible.

### Sentence-length ramp

| Items | Typical length |
|---|---|
| 1–2 | **5–7 words** — short, simple phrases |
| 3–5 | **8–10 words** — longer, more content words |
| 6–7 | **11–14 words** — complex clauses, heavier information load |

**Confidence: Medium** (Reach120 gives the word bands; My Speaking Score gives the same qualitative ramp; the two verified 7-sentence sets below empirically match).

### On-screen directions (quotable)

> *"Listen to your supervisor and repeat what she says. Repeat only once."*

**Confidence: Medium** (testsucceed reproduces this; it matches the "workplace/venue orientation" framing of every observed sample set).

### Sample sets — 2 full sets of 7, showing the ramp

**Set A — Municipal public library** *(verified, from ListenInEnglish's TOEFL-2026 bank)*

| # | Sentence | Words | Window |
|---|---|---|---|
| 1 | "Welcome to the municipal public library." | 6 | 8 s |
| 2 | "The information desk is located near the main entrance." | 9 | 8 s |
| 3 | "Fiction and non-fiction books are arranged by section along these shelves." | 11 | 10 s |
| 4 | "Public computers are available on the right side of the room." | 11 | 10 s |
| 5 | "Quiet study areas are located on the upper floor." | 9 | 10 s |
| 6 | "Please keep your voice low and silence your mobile devices." | 10 | 12 s |
| 7 | "If you need assistance, a librarian will be happy to help you." | 12 | 12 s |

**Set B — Dinosaur museum exhibit** *(verified, same bank)*

| # | Sentence | Words | Window |
|---|---|---|---|
| 1 | "This exhibit features a Tyrannosaurus rex skeleton." | 7 | 8 s |
| 2 | "The bones you see here are carefully reconstructed from fossils." | 10 | 8 s |
| 3 | "The display shows how large and powerful this dinosaur was." | 10 | 10 s |
| 4 | "Information panels explain when and where the fossils were discovered." | 10 | 10 s |
| 5 | "Please stay behind the barrier and do not touch the exhibit." | 11 | 10 s |
| 6 | "Interactive screens nearby provide more details about its behavior." | 9 | 12 s |
| 7 | "Museum guides are available if you would like further information." | 10 | 12 s |

**Set C — Airport orientation** *(from My Speaking Score; shows a steeper ramp)*
1. "Welcome to the international airport." (5)
2. "Baggage claim is straight ahead." (5)
3. "You will find restrooms near every main gate." (8)
4. "Please have your boarding passes and identification ready for security." (10)
5. "Carry-on liquids must be placed in clear plastic bags." (9)
6. "Do not leave your luggage unattended at any time." (9)
7. "If your flight is delayed, you may receive updates through the airline's mobile app." (14)

**Other observed scenario themes:** zoo greeter, campus gym, hotel front desk, university library.
⚠️ Note the ramp is real but **noisy** — Set B is nearly flat at 9–11 words. Don't over-engineer a strict monotonic length curve; bind item index → response window instead, which *is* strictly tiered.

---

## 12. Take an Interview

### Mechanics

- **An interviewer appears on screen.** testsucceed: *"An interviewer appears on the screen and asks you questions."* The framing is a **simulated online research interview**: *"You will have a short online interview with a researcher. The researcher will ask you some questions."*
  - ⚠️ **Whether this is full motion video or a static avatar/photo is NOT confirmed.** MSS says "video of interviewer"; goarno refers only to an "interviewer voice"; Reach120 mentions no video. **Confidence: Low-Medium on video specifically; Medium-High that some visual representation of the interviewer is present.** Safest build: a video-call-style frame with a speaking avatar/photo.
  - Interviewer accents vary: **North American, British, Australian, or New Zealand.** (goarno) — worth replicating.
- **Prep time: NONE.** *"There is no preparation time; you speak right after the question ends."* Recording starts the instant the question audio ends. **Confidence: High** (unanimous).
- **Response time: 45 seconds per question.** **Confidence: High** (unanimous across MSS, goarno, testsucceed, Reach120). Guidance is to speak for **at least 20 s**.
- **4 questions, ALL on ONE shared theme.** *"All questions are linked to one theme"* (e.g. commuting, urban life, decision-making, studying). **Confidence: High.** This matters: your item bank should be authored as *themed sets of 4*, not as 4 independent prompts.
- **YES, they escalate from concrete to abstract.** Confirmed by three sources with near-identical 4-stage models:

  | Q | Cognitive demand | Pattern |
  |---|---|---|
  | 1 | Lowest | **Personal recall / experience** — "Tell me about a time you…", "Where do you currently…" |
  | 2 | Moderate | **Preference / reaction** — "Which do you prefer, and why?" |
  | 3 | High | **Opinion with support** — "Some people say X. Do you agree? Why?" |
  | 4 | Highest | **Prediction / policy / analysis** — "What effect would X have?", "What should cities do?" |

- **Question delivery:** audio, **and** on-screen text of the question (Reach120: "Audio and on-screen text"). ⚠️ Single source. **Confidence: Low.** If in doubt, show the text — it's the more forgiving choice and matches the video-interview metaphor.
- **Note-taking:** ⚠️ MSS states "No note-taking allowed" for this task, which conflicts with the general rule that scratch paper is available throughout. With 0 s prep and 45 s response, note-taking is moot in practice. **Confidence: Low.**
- **Scoring:** 0–5 per response on **Fluency, Intelligibility, Language Use, Organization (incl. Relevancy)**. (My Speaking Score — the ETS SpeechRater-adjacent source, so this is the most credible rubric mapping available.)

### Timing

- 4 × 45 s = 3 min of speech. Plus 7 Listen-and-Repeat responses (8–12 s each ≈ 70 s) plus question audio and directions → reconciles with the **~8 min** Speaking section. **Confidence: High** (the arithmetic closes).

### On-screen directions (quotable)

> *"You will have a short online interview with a researcher. The researcher will ask you some questions."*

**Confidence: Medium** (testsucceed reproduces this framing verbatim).

### Sample sets — 3 themed sets of 4

**Set 1 — Commuting** *(from My Speaking Score)*
1. Do you think it is important to live close to your school or work? Why?
2. Some people prefer to travel by car, and others prefer public transportation. Which do you prefer, and why?
3. What are some ways to make commuting more enjoyable?
4. In some cities, fewer people are commuting than in the past. What effects could this have on local businesses? Give both a positive and a negative example.

**Set 2 — Urban life** *(from testsucceed)*
1. Where do you currently live — a large city, a small town, or somewhere else?
2. How do you feel when you visit a big city for the first time?
3. Some people say that life in cities is more interesting than life in small towns. Do you agree? Why or why not?
4. If a city government had money to spend, should it invest in more public parks or in more public transportation? Explain your recommendation.

**Set 3 — Decision-making** *(from My Speaking Score)*
1. Think about an important decision you made recently. What was it, and what factors did you consider?
2. Some people make decisions quickly based on intuition, while others take their time and analyse every detail. Which approach do you usually take, and why?
3. Sometimes people face decisions where both options seem equally good. What strategies can help someone choose in that kind of situation?
4. In today's world, people often face "decision overload" — too many options in everyday life. How do you think this affects people, and what can they do to make better choices?

**Set 4 — Studying** *(from Reach120; note this set does NOT escalate cleanly — a weaker source)*
1. What subject do you enjoy studying the most, and why?
2. How do you usually prepare for exams?
3. Do you prefer studying alone or in a group? Explain your preference.
4. Describe a time when studying was particularly challenging for you.

---

# Summary: what this changes for the build

## Interaction models you must implement (none of these are plain MCQ)

1. **C-test typed-blank renderer** (Complete the Words) — inline text inputs inside flowing prose, 10 per paragraph, generated by the "second half of every second word from sentence 2" rule. This is *generatable*, which is a huge content-cost win: any 70–100-word academic paragraph becomes an item automatically.
2. **Word-bank → slot assembly widget** (Build a Sentence) — must support **multi-word chunk tiles**, **distractor tiles (tiles > slots)**, **prefilled/locked slots**, and **both click-to-place and drag**. All-or-nothing scoring.
3. **Styled artefact renderer** (Read in Daily Life) — email chrome, SMS bubbles, notices, menus, schedules, social posts. Layout is part of the construct.
4. **Zero-prep auto-start audio recorder** with **per-item response windows** (8/10/12 s for Listen and Repeat; 45 s for Interview) and **beep-triggered auto-start / auto-stop / auto-advance**. There is no "start recording" button.
5. **Video-call-style interviewer frame** for Take an Interview.

## Timer architecture

- **Not one timer per section.** You need: section clock **+** a **pooled 6:50 block timer** for the 10 Build-a-Sentence items **+** a **dedicated 7:00** email timer **+** a **dedicated 10:00** discussion timer **+** **per-item hard windows** in Speaking.
- Writing arithmetic that validates the model: 6:50 + 7:00 + 10:00 ≈ 23:50 ≈ the ~23-min section.

## Audio rules (hard constraints)

- **Every listening and speaking audio plays exactly once.** No replay, no pause, no scrub bar. The old "listen again" replay question is abolished.
- **Questions render only AFTER audio completes.** Never show options during playback.
- **Listen and Choose a Response: stimulus is audio-only and never printed; the 4 options ARE printed.**
- **No back-navigation in Listening.**

## Content model changes

- Reading is **up to 50 items**, not ~20 — because each C-test blank is a scored item.
- Academic reading passages are **~200–280 words with 3–5 questions**, not 700 words with 10.
- Listening audio is **20–30 s** for conversations/announcements and **60–90 s / 100–250 words** for academic talks — an order of magnitude shorter than the old format.
- **All Reading and Listening questions are single-select, 4-option MC.** Insert-a-sentence, prose summary, drag-to-table, and multi-select are **gone**.
- Interview items must be authored as **themed sets of 4 with an escalating concrete→abstract arc**, not as standalone prompts.
- Listen-and-Repeat items must be authored as **scenario-bound sets of 7** with an increasing length ramp, plus a matching location image.

---

# Open questions / lowest-confidence items

These are the things I could not nail down, ordered by how much they'd hurt if you guessed wrong:

1. **Does the Complete-the-Words blank signal the number of missing letters?** Sources directly contradict each other. Affects difficulty calibration materially. → **Recommend: fixed-width blank, no letter-count signal.**
2. **Build a Sentence: can you navigate back within the pooled 6:50?** Undocumented anywhere. → Recommend allowing it (pooled timer implies it), but flag for user testing.
3. **Is the Take an Interview interviewer full video, or a static avatar?** And is the question text shown on screen? Single-source claims both ways.
4. **Is there a hard per-item timer in Listening**, or only the section clock? Unresolved.
5. **Auto-advance behaviour on typed blanks and on Speaking recordings** — inferred, not documented.
6. **Exact ETS on-screen directions wording** for 7 of the 9 task types. Only Academic Discussion and Listen-and-Repeat have credible verbatim quotes. → **Highest-value next step: obtain the official ETS Interactive Sampler / TOEFL TestReady 2026 sample test and transcribe the directions screens directly.**
7. **No first-hand test-taker reports were obtainable.** Everything here is prep-publisher and ETS documentation. Reddit (r/TOEFL, r/ToeflAdvice) is the obvious gap — worth a manual pass by a human, since those threads would settle #1–#5 quickly.
8. **Academic passage question count (3 vs 5)** — unresolved; build variable.

---

# Sources

**Official**
- ETS — TOEFL iBT Test Content and Structure: https://www.in.ets.org/toefl/institutions/ibt/about/content-structure.html
- ETS — TOEFL iBT About/Content: https://www.ets.org/toefl/test-takers/ibt/about/content.html
- ETS — At-Home Test Day: https://www.ets.org/toefl/test-takers/ibt/test-day/at-home-test-day.html
- ETS — At Home Testing Equipment Check: https://www.ets.org/at-home-equipment-check.html

**Established prep publishers**
- Magoosh — Build a Sentence: https://magoosh.com/toefl/toefl-build-a-sentence/
- Magoosh — Write an Email: https://magoosh.com/toefl/toefl-write-an-email/
- Magoosh — Academic Discussion: https://magoosh.com/toefl/toefl-academic-discussion/
- Magoosh — Writing Practice (all types): https://magoosh.com/toefl/toefl-writing-practice/
- Magoosh — Listening Practice (all types): https://magoosh.com/toefl/toefl-listening-practice/
- Magoosh — TOEFL 2026 Changes: https://toefl.magoosh.com/toefl-2026-changes
- TestGlider — Reading study hub: https://www.testglider.com/toefl/en/study/reading
- TestGlider — Complete the Words: https://www.testglider.com/toefl/en/study/reading/questions/R_COMPLETE_WORDS
- TestGlider — Listening study hub: https://www.testglider.com/toefl/en/study/listening
- LingoLeap — Complete the Words (C-test): https://lingoleap.ai/toefl/reading-complete-the-words
- My Speaking Score — Speaking 2026 hub: https://www.myspeakingscore.com/toefl-speaking-2026
- My Speaking Score — Listen & Repeat scoring: https://www.myspeakingscore.com/blog/the-new-listen-and-repeat-task-in-the-enhanced-toefl-speaking-section-what-it-is-and-how-its-scored
- My Speaking Score — Interview task: https://www.myspeakingscore.com/blog/the-new-toefl-speaking-test-2026----interview-task

**Sample-item banks**
- testsucceed — Reading samples: https://testsucceed.com/materials/tests/toefl_new/en/samples/toefl-2026-new-reading-samples.html
- testsucceed — Listening samples: https://testsucceed.com/materials/tests/toefl_new/en/samples/toefl-2026-new-listening-samples.html
- testsucceed — Writing samples: https://testsucceed.com/materials/tests/toefl_new/en/samples/toefl-2026-new-writing-samples.html
- testsucceed — Speaking samples: https://testsucceed.com/materials/tests/toefl_new/en/samples/toefl-2026-new-speaking-samples.html
- testsucceed — Complete the Words: https://testsucceed.com/materials/tests/toefl_new/en/description/reading/toefl-2026-new-reading-task1-complete-the-words.html
- testsucceed — Listen and Choose a Response: https://testsucceed.com/materials/tests/toefl_new/en/description/listening/toefl-2026-new-listen-and-choose-reponse.html
- testsucceed — Listen and Repeat: https://testsucceed.com/materials/tests/toefl_new/en/description/speaking/toefl-2026-new-listen-and-repeat.html
- testsucceed — Take an Interview: https://testsucceed.com/materials/tests/toefl_new/en/description/speaking/toefl-2026-new-take-an-interview.html
- testsucceed — Build a Sentence: https://testsucceed.com/materials/tests/toefl_new/en/description/writing/toefl-2026-new-writing-description.html
- ListenInEnglish — Listen and Repeat set 01: https://www.listeninenglish.com/toefl2026-speaking1-test01.php
- ListenInEnglish — Listen and Repeat set 02: https://www.listeninenglish.com/toefl2026-speaking1-test02.php
- ListenInEnglish — Choose a Response test 01: https://www.listeninenglish.com/toefl2026-listening1-test01.php
- goarno — Academic Talk practice bank: https://goarno.io/blog/academic-talk-practice-questions-with-answers-toefl-new-format/
- goarno — Read in Daily Life practice bank: https://goarno.io/blog/read-in-daily-life-practice-questions-with-answers-toefl-new-format/
- goarno — Complete the Words practice bank: https://goarno.io/blog/complete-the-words-practice-questions-with-answers-toefl-new-format/
- goarno — task guides (Build a Sentence, Daily Life, Academic Passage, Academic Talk, Announcement, Listen & Repeat, Interview): https://goarno.io/blog/

**Lower-weight / cross-check only** (treat with caution; several appear AI-generated)
- college-council — Reading tasks: https://college-council.com/en/blog/toefl-2026-reading-new-tasks-strategies
- college-council — Writing tasks: https://college-council.com/en/blog/toefl-2026-writing-new-tasks-guide
- prepdrills — Reading guide: https://prepdrills.com/blog/toefl-2026-reading-guide/
- master-toefl — Listening: https://master-toefl.com/listening.html
- master-toefl — Complete the Words: https://master-toefl.com/reading/complete-the-words.html
- prepex — Build a Sentence: https://prepex.ai/toefl/2026/writing/build-sentence
- Reach120 — Speaking guide: https://www.reach120.com/blog/toefl-2026-speaking-complete-guide
- Reach120 — Email template: https://www.reach120.com/blog/toefl-write-an-email-template-2026

**Blocked (HTTP 403 — represented only via search snippets)**
- toeflresources.com (Michael Goodine) — all pages
- study.com/toefl/* — all pages
- bestmytest.com/blog/new-toefl-format-changes
- reddit.com — not fetchable in this environment
