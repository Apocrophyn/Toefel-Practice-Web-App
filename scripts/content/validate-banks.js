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
