/**
 * Content bank validator.
 *
 * Checks every exam-shaped item against the ETS 2026 stimulus limits and against
 * the item-quality rules a real test follows: four distinct options, a key that
 * exists among them, no duplicated stems, and an answer-key distribution close
 * to uniform so the bank cannot be gamed without reading.
 *
 * Run: node scripts/content/validate-banks.js  (after `npx tsc -p tsconfig.validate.json`)
 */
const path = require("path");
const OUT = process.env.VALIDATE_OUT || "/tmp/validate";

function load(p) { return require(path.join(OUT, p)); }

const problems = [];
const note = (...a) => problems.push(a.join(" | "));

function checkChoice(id, q, bank) {
  if (!q.options || q.options.length !== 4) note(bank, id, `options=${q.options && q.options.length}`);
  else if (new Set(q.options).size !== 4) note(bank, id, "duplicate options");
  if (q.correctAnswer === undefined) note(bank, id, "no correctAnswer");
}

function keyIndex(q) {
  if (/^[A-D]$/.test(q.correctAnswer)) return "ABCD".indexOf(q.correctAnswer);
  return q.options ? q.options.indexOf(q.correctAnswer) : -1;
}

function report(label, dist, total) {
  const pct = Object.fromEntries(Object.entries(dist).map(([k, v]) => [k, ((v / total) * 100).toFixed(0) + "%"]));
  const max = Math.max(...Object.values(dist)), min = Math.min(...Object.values(dist));
  const skew = total ? (max - min) / total : 0;
  console.log(`  ${label.padEnd(26)} n=${String(total).padStart(4)}  keys ${JSON.stringify(pct)}${skew > 0.15 ? "  *** SKEWED ***" : ""}`);
  if (skew > 0.15) note(label, "answer key skew", (skew * 100).toFixed(0) + "%");
}

console.log("READING");
const RB = load("data/questions/2026/reading-bank.js");
{
  const dist = { A: 0, B: 0, C: 0, D: 0 }; let n = 0; const seenItems = new Set(); const wc = [];
  for (const s of RB.allAcademicPassageSets) {
    const words = s.passage.trim().split(/\s+/).length; wc.push(words);
    if (words > 200) note("academic", s.id, `passage ${words} words > 200 ceiling`);
    if (words < 120) note("academic", s.id, `passage only ${words} words`);
    if (s.questions.length !== 5) note("academic", s.id, `questions=${s.questions.length}`);
    if (/\*\*|Rhetorical Structure|Dominant TOEFL Skill|\[[A-D]\]/.test(s.passage)) note("academic", s.id, "authoring markup in passage");
    const stemsInSet = new Set();
    for (const q of s.questions) {
      checkChoice(q.id, q, "academic");
      // A shared stem like "What is the main idea of the passage?" is normal
      // across passages; what must not repeat is the same stem twice in one set,
      // or a fully identical item (same stem AND same options) anywhere.
      if (stemsInSet.has(q.question)) note("academic", q.id, "duplicate stem within set");
      stemsInSet.add(q.question);
      const fingerprint = q.question + "||" + (q.options || []).join("|");
      if (seenItems.has(fingerprint)) note("academic", q.id, "identical item appears twice in bank");
      seenItems.add(fingerprint);
      const i = keyIndex(q); if (i < 0) note("academic", q.id, "key not among options"); else dist["ABCD"[i]]++;
      n++;
    }
  }
  wc.sort((a, b) => a - b);
  console.log(`  passages ${RB.allAcademicPassageSets.length}, words ${wc[0]}-${wc[wc.length - 1]}`);
  report("Read an Academic Passage", dist, n);
}

const CT = load("lib/toefl/c-test.js");
const CP = load("data/questions/2026/c-test-paragraphs.js");
{
  let ok = 0, rejected = 0;
  for (const p of CP.cTestParagraphs) {
    const item = CT.generateCTest(p.text, p.id);
    if (!item) { rejected++; continue; }
    ok++;
    if (item.blanks.length !== 10) note("complete_the_words", p.id, `blanks=${item.blanks.length}`);
    const words = p.text.trim().split(/\s+/).length;
    if (words < 70 || words > 100) note("complete_the_words", p.id, `paragraph ${words} words`);
    for (const b of item.blanks) {
      const re = new RegExp("\\b" + b.answer.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "\\b", "i");
      if (re.test(item.template)) note("complete_the_words", p.id, `answer "${b.answer}" visible in passage`);
    }
    if (item.template.split(/(?<=[.!?])\s+/)[0].includes("{{")) note("complete_the_words", p.id, "first sentence gapped");
  }
  console.log(`  Complete the Words         n=${ok * 10} gaps from ${ok} paragraphs (${rejected} rejected)`);
}

console.log("LISTENING");
const LB = load("data/questions/2026/listening-bank.js");
{
  const spec = {
    chooseResponseBank: ["Listen and Choose a Response", 3, 16, 1, false],
    conversationBank: ["Listen to a Conversation", 50, 85, 2, true],
    announcementBank: ["Listen to an Announcement", 40, 85, 2, false],
    academicTalkBank: ["Listen to an Academic Talk", 100, 250, 4, false],
  };
  for (const [bank, [label, lo, hi, nq, dialogue]] of Object.entries(spec)) {
    const dist = { A: 0, B: 0, C: 0, D: 0 }; let n = 0;
    for (const x of LB[bank]) {
      const raw = x.transcript || x.audioText || "";
      const spoken = dialogue
        ? raw.split("\n").filter((l) => l.includes(":")).map((l) => l.split(":").slice(1).join(":")).join(" ")
        : raw;
      const w = spoken.trim().split(/\s+/).length;
      if (w < lo || w > hi) note(label, x.id, `${w} words, target ${lo}-${hi}`);
      const qs = x.questions || [x];
      if (x.questions && x.questions.length !== nq) note(label, x.id, `questions=${x.questions.length}`);
      for (const q of qs) {
        checkChoice(x.id, q, label);
        const i = keyIndex(q); if (i < 0) note(label, x.id, "key not among options"); else dist["ABCD"[i]]++;
        n++;
      }
    }
    report(label, dist, n);
  }
}

console.log("WRITING");
const BAS = load("data/questions/2026/build-a-sentence.js");
{
  for (const it of BAS.buildASentenceItems) {
    const tiles = BAS.bankTiles(it);
    if (tiles.length < 5 || tiles.length > 7) note("Build a Sentence", it.id, `tiles=${tiles.length}, target 5-7`);
    if (!it.context) note("Build a Sentence", it.id, "no context prompt");
    const slots = BAS.openSlots(it);
    const good = {}; slots.forEach((s) => (good[s] = it.parts[s]));
    if (!BAS.scoreBuildASentence(it, good)) note("Build a Sentence", it.id, "correct placement does not score");
    for (const s of slots) if (!tiles.includes(it.parts[s])) note("Build a Sentence", it.id, `missing tile ${it.parts[s]}`);
    for (const d of it.distractors) if (it.parts.includes(d)) note("Build a Sentence", it.id, `distractor is also an answer: ${d}`);
  }
  console.log(`  Build a Sentence           n=${BAS.buildASentenceItems.length} items`);
}

/**
 * Write an Email, Write for an Academic Discussion, Read in Daily Life and the
 * two Speaking tasks used to have no coverage here at all, which is why the
 * email bank could sit at a one-line scenario with zero bullet points through
 * two rounds of remediation. Anything a form can deliver is checked.
 */
const WM = load("data/questions/writing-massive.js");
{
  const words = (t) => t.trim().split(/\s+/).length;
  let emailWordsLo = Infinity, emailWordsHi = 0;
  for (const t of WM.emailTasks) {
    // ETS: exactly three bullets, and all three must be addressed to score well.
    if (!Array.isArray(t.bullets) || t.bullets.length !== 3) {
      note("Write an Email", t.id, `bullets=${t.bullets ? t.bullets.length : 0}, must be exactly 3`);
    }
    const w = words(t.situation || "");
    emailWordsLo = Math.min(emailWordsLo, w); emailWordsHi = Math.max(emailWordsHi, w);
    if (w < 70 || w > 115) note("Write an Email", t.id, `situation ${w} words, target 70-110`);
    if (!t.recipient) note("Write an Email", t.id, "no named recipient");
    if (!t.recipientRole) note("Write an Email", t.id, "no stated relationship to set register");
    // 7:00 on its own clock, per the blueprint.
    if (t.timeLimit !== 420) note("Write an Email", t.id, `timeLimit=${t.timeLimit}s, blueprint is 420s`);
    const prompt = WM.emailPromptText(t);
    for (const b of t.bullets || []) {
      if (!prompt.includes(b)) note("Write an Email", t.id, "bullet missing from flattened prompt sent to the grader");
    }
  }
  console.log(`  Write an Email             n=${WM.emailTasks.length} items, situations ${emailWordsLo}-${emailWordsHi} words, 3 bullets each`);

  let profLo = Infinity, profHi = 0;
  for (const t of WM.academicDiscussionTasks) {
    // ETS: a professor's post and EXACTLY TWO named students with opposing views.
    if (!t.professor || !t.professor.name || !t.professor.message) note("Academic Discussion", t.id, "no professor post");
    else {
      const w = words(t.professor.message);
      profLo = Math.min(profLo, w); profHi = Math.max(profHi, w);
      if (w < 50 || w > 100) note("Academic Discussion", t.id, `professor post ${w} words, target 60-85`);
    }
    if (!Array.isArray(t.students) || t.students.length !== 2) {
      note("Academic Discussion", t.id, `students=${t.students ? t.students.length : 0}, must be exactly 2`);
    }
    for (const st of t.students || []) {
      if (!st.name) note("Academic Discussion", t.id, "student post has no name");
      const w = words(st.message || "");
      if (w < 30 || w > 75) note("Academic Discussion", t.id, `student post ${w} words, target 40-60`);
    }
    if (t.minWords !== 100) note("Academic Discussion", t.id, `minWords=${t.minWords}, directions state 100`);
    if (t.timeLimit !== 600) note("Academic Discussion", t.id, `timeLimit=${t.timeLimit}s, blueprint is 600s`);
  }
  console.log(`  Academic Discussion        n=${WM.academicDiscussionTasks.length} items, professor posts ${profLo}-${profHi} words, 2 students each`);
}

console.log("READ IN DAILY LIFE");
const RBL = load("data/questions/reading-bank.js");
{
  const dist = { A: 0, B: 0, C: 0, D: 0 }; let n = 0; const sizes = {};
  let lo = Infinity, hi = 0;
  for (const set of RBL.dailyLifeQuestions) {
    const w = set.passage.trim().split(/\s+/).length;
    lo = Math.min(lo, w); hi = Math.max(hi, w);
    // ETS stimulus range for this task is 15-150 words.
    if (w < 15 || w > 150) note("Read in Daily Life", set.id, `${w} words, target 15-150`);
    // ETS delivers this task in 2-item and 3-item sets only.
    if (![2, 3].includes(set.questions.length)) note("Read in Daily Life", set.id, `items=${set.questions.length}, must be 2 or 3`);
    sizes[set.questions.length] = (sizes[set.questions.length] || 0) + 1;
    if (!set.category) note("Read in Daily Life", set.id, "no category to drive the artefact renderer");
    for (const q of set.questions) {
      checkChoice(set.id, q, "Read in Daily Life");
      const i = keyIndex(q); if (i < 0) note("Read in Daily Life", set.id, "key not among options"); else dist["ABCD"[i]]++;
      n++;
    }
  }
  console.log(`  sets ${RBL.dailyLifeQuestions.length}, words ${lo}-${hi}, set sizes ${JSON.stringify(sizes)}`);
  report("Read in Daily Life", dist, n);
}

console.log("SPEAKING");
const SM = load("data/questions/speaking-massive.js");
{
  for (const sc of SM.listenRepeatScenarios) {
    // A Listen and Repeat set is exactly the 7 items ETS delivers.
    if (sc.sentences.length !== 7) note("Listen and Repeat", sc.id, `sentences=${sc.sentences.length}, must be 7`);
    // A static contextual image of the location accompanies the audio.
    if (!sc.imageDescription) note("Listen and Repeat", sc.id, "no context image description");
    sc.sentences.forEach((sentence, i) => {
      const w = sentence.trim().split(/\s+/).length;
      // Length ramps across the set; the published windows are 8/8/10/10/10/12/12s.
      if (w < 4 || w > 16) note("Listen and Repeat", sc.id, `sentence ${i + 1} is ${w} words`);
    });
    // The set must ramp: the last two sentences should not be shorter than the first two.
    const head = sc.sentences.slice(0, 2).reduce((a, x) => a + x.split(/\s+/).length, 0) / 2;
    const tail = sc.sentences.slice(5).reduce((a, x) => a + x.split(/\s+/).length, 0) / 2;
    if (tail < head) note("Listen and Repeat", sc.id, `does not ramp: opens at ${head.toFixed(1)} words, closes at ${tail.toFixed(1)}`);
  }
  console.log(`  Listen and Repeat          n=${SM.listenRepeatScenarios.length} sets of 7`);

  const ESCALATION = ["recollection", "preference", "stance", "policy"];
  for (const t of SM.interviewTopics) {
    // Four questions on ONE theme, escalating in cognitive demand.
    if (t.questions.length !== 4) note("Take an Interview", t.id, `questions=${t.questions.length}, must be 4`);
    const types = t.questions.map((q) => q.type);
    if (types.join(",") !== ESCALATION.join(",")) {
      note("Take an Interview", t.id, `escalation is ${types.join(">")}, expected ${ESCALATION.join(">")}`);
    }
    if (!t.topic) note("Take an Interview", t.id, "no shared theme");
  }
  console.log(`  Take an Interview          n=${SM.interviewTopics.length} themed sets of 4`);
}

console.log("FORM ASSEMBLY");
const RF = load("lib/toefl/reading-form.js");
{
  let forms = 0, failed = 0;
  for (let seed = 1; seed <= 40; seed++) {
    for (const track of ["lower", "upper"]) {
      const f = RF.buildReadingRouter(seed);
      const m2 = RF.buildReadingSecondModule(f, track);
      const all = [...f.router.items, ...m2.items];
      const c = { complete_words: 0, daily_life: 0, academic: 0 };
      for (const it of all) c[it.taskType] += it.taskType === "complete_words" ? it.blanks.length : it.questions.length;
      const total = c.complete_words + c.daily_life + c.academic;
      const ids = all.map((i) => i.id);
      forms++;
      if (total !== 50 || c.complete_words !== 30 || c.daily_life !== 10 || c.academic !== 10
        || new Set(ids).size !== ids.length || f.router.shortfall.length || m2.shortfall.length) {
        failed++;
        if (failed <= 3) note("reading form", `seed ${seed} ${track}`, JSON.stringify(c), ...f.router.shortfall, ...m2.shortfall);
      }
    }
  }
  console.log(`  reading forms              ${forms - failed}/${forms} assembled to 50 items (30/10/10)`);
}

console.log();
if (problems.length) {
  console.log(`FAILED - ${problems.length} problem(s):`);
  problems.slice(0, 40).forEach((p) => console.log("  " + p));
  process.exit(1);
}
console.log("All content bank checks passed.");
