#!/usr/bin/env python3
"""Harvest Complete the Words stimuli from the academic reading bank.

The 2026 Complete the Words task needs 70-100 word academic paragraphs whose
first sentence can stand alone as topic-setting context. The existing academic
passages are far too long to serve as reading stimuli under the 2026 spec
(median 234 words against a ~200 ceiling), but their individual paragraphs are
exactly the right size for this task, so they are recycled here rather than
discarded.

Emits src/data/questions/2026/c-test-paragraphs.ts. Items are generated from
these paragraphs at runtime by src/lib/toefl/c-test.ts, so there is one
implementation of the C-test rule rather than a generator and a baked copy that
can drift apart.
"""
import re, glob, os, sys, json

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.abspath(os.path.join(HERE, "..", ".."))
QUESTIONS = os.path.join(ROOT, "src", "data", "questions")
OUT = os.path.join(QUESTIONS, "2026", "c-test-paragraphs.ts")

MIN_WORDS, MAX_WORDS = 70, 100
SENTENCE_SPLIT = re.compile(r'(?<=[.!?])\s+(?=[A-Z"\'(])')


def clean(text: str) -> str:
    text = text.replace("**", "")
    text = re.sub(r"\s+", " ", text).strip()
    return text


def usable(p: str) -> bool:
    n = len(p.split())
    if not (MIN_WORDS <= n <= MAX_WORDS):
        return False
    if len(SENTENCE_SPLIT.split(p)) < 3:
        return False
    # Skip paragraphs that lean on list punctuation or maths - they do not read
    # as continuous prose once gapped.
    if p.count(":") > 1 or "—" in p[:40] or re.search(r"\d{4}s?\b.*\d{4}s?\b", p):
        return False
    # Needs enough long content words to yield ten gaps.
    long_words = [w for w in re.findall(r"[A-Za-z][A-Za-z'-]{3,}", p)]
    return len(long_words) >= 30


def topic_from(title: str) -> str:
    return clean(title)[:80]


def main() -> int:
    seen = set()
    out = []
    for path in sorted(glob.glob(os.path.join(QUESTIONS, "reading-batch-*.ts"))):
        src = open(path, encoding="utf-8").read()
        for m in re.finditer(r'title:\s*"((?:[^"\\]|\\.)*)".*?passage:\s*`(.*?)`', src, re.S):
            title, passage = m.group(1), m.group(2)
            for para in passage.split("\n\n"):
                p = clean(para)
                if not usable(p):
                    continue
                key = p[:60].lower()
                if key in seen:
                    continue
                seen.add(key)
                out.append({"topic": topic_from(title), "text": p})

    out.sort(key=lambda x: x["topic"])
    for i, item in enumerate(out, 1):
        item["id"] = f"CTW_{i:04d}"

    os.makedirs(os.path.dirname(OUT), exist_ok=True)
    with open(OUT, "w", encoding="utf-8") as fh:
        fh.write(
            "// GENERATED FILE - do not edit by hand.\n"
            "// Regenerate: python3 scripts/content/extract-ctest-paragraphs.py\n"
            "//\n"
            "// Source paragraphs for the Reading section's \"Complete the Words\" task.\n"
            "// Items are produced from these at runtime by generateCTest() in\n"
            "// src/lib/toefl/c-test.ts, which applies the official C-test rule:\n"
            "// first sentence intact, then the back half of every second word deleted,\n"
            "// ten gaps per paragraph.\n\n"
            "export interface CTestParagraph {\n"
            "  id: string;\n"
            "  /** Subject the paragraph is drawn from, for topic-spread when building a form. */\n"
            "  topic: string;\n"
            "  text: string;\n"
            "}\n\n"
            "export const cTestParagraphs: CTestParagraph[] = [\n"
        )
        for item in out:
            fh.write("  {\n")
            fh.write(f'    id: {json.dumps(item["id"])},\n')
            fh.write(f'    topic: {json.dumps(item["topic"], ensure_ascii=False)},\n')
            fh.write(f'    text: {json.dumps(item["text"], ensure_ascii=False)},\n')
            fh.write("  },\n")
        fh.write("];\n")

    print(f"wrote {len(out)} paragraphs -> {os.path.relpath(OUT, ROOT)}")
    if out:
        lens = sorted(len(o["text"].split()) for o in out)
        print(f"  word counts: min={lens[0]} median={lens[len(lens)//2]} max={lens[-1]}")
        print(f"  distinct topics: {len({o['topic'] for o in out})}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
