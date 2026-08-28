# TOEFL iBT 2026 — format reference

This directory is the reference material behind the exam engine. Read it before changing
anything about how a test is assembled, timed or scored.

| File | What it is |
|---|---|
| `ets-official-blueprint.md` | Extract of the official ETS *TOEFL iBT Test: 2026 Update — Test Blueprint and Specifications* PDF: item counts, raw points, timings, CEFR targets, stimulus limits. This is the authority. |
| `item-mechanics.md` | What a test taker actually sees and does per task type — interaction models, timers, audio rules, sample items. Sourced from ETS plus prep publishers, with a confidence level and source on every claim. |
| `format-fidelity-audit.md` | Audit of this codebase against the blueprint, plus the remediation status and the known remaining gaps. |

## Where the code lives

| Concern | File |
|---|---|
| Canonical spec (item counts, timings, scoring, mechanics constants) | `src/data/toefl-2026-blueprint.ts` |
| Form assembly plans and integrity checks | `src/lib/toefl/form-builder.ts` |
| Reading form assembly | `src/lib/toefl/reading-form.ts` |
| Complete the Words C-test generator | `src/lib/toefl/c-test.ts` |
| Raw points → 1–6 bands, score report | `src/lib/toefl/scoring.ts` |

## The one rule

**ETS counts items, not stimuli.** One Complete-the-Words paragraph is ten items, one
academic passage is five, one conversation is two, one academic talk is four. Selecting a
number of *stimuli* and accepting whatever item count falls out is how this platform ended
up delivering a 20-item Reading section against a real 50. Everything in `form-builder.ts`
is expressed in items for that reason.

## Regenerating content

```bash
python3 scripts/content/strip-authoring-metadata.py      # idempotent
python3 scripts/content/strip-insert-sentence-markers.py # idempotent
python3 scripts/content/extract-ctest-paragraphs.py      # rewrites the C-test stimulus bank
```
