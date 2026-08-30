#!/usr/bin/env python3
"""Even out which option position is correct in the Read in Daily Life bank.

`balance-answer-keys.py` only understands items whose key is stored as a LETTER
(`correctAnswer: "B"`). The daily-life sets store the key as the option TEXT
(`correctAnswer: "Tuesday morning"`), so that script silently skipped them and
the skew went unnoticed until the validator was extended to cover this task.

Measured before this ran: A 2% / B 42% / C 48% / D 8%. A test taker who always
guessed B or C would score 90% on this task without reading a single artefact.

The fix reorders each item's options so the correct one lands on a position
assigned round-robin. Distractor order carries no meaning, so nothing about the
item changes except where the answer sits. `correctAnswer` is left untouched
because it stores the text, not the position.

Idempotent in effect: the assignment is re-derived from item order every run.
"""
import os
import re
import sys
from collections import Counter

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
TARGET = "src/data/questions/reading-bank.ts"

BLOCK = re.compile(
    r'(options:\s*\[)(.*?)(\],\s*\n\s*correctAnswer:\s*)("(?:[^"\\]|\\.)*")',
    re.S,
)
STRING = re.compile(r'"(?:[^"\\]|\\.)*"')


def rebalance_region(src: str, start: int, end: int) -> tuple[str, int, Counter]:
    counter: Counter = Counter()
    index = [0]

    def fix(m: "re.Match[str]") -> str:
        head, body, mid, answer = m.groups()
        options = STRING.findall(body)
        if len(options) != 4 or answer not in options:
            counter["?"] += 1
            return m.group(0)

        key = options.index(answer)
        target = index[0] % 4
        index[0] += 1

        rest = [o for i, o in enumerate(options) if i != key]
        reordered = rest[:target] + [options[key]] + rest[target:]

        # Preserve the source layout. Most of this bank writes the options array
        # on one line; re-emitting it multi-line with a guessed indent produced
        # column-zero garbage the first time this ran.
        if "\n" in body:
            indent = re.match(r"[ \t]*", body.lstrip("\n")).group(0) or "          "
            rendered = "\n" + "".join(f"{indent}{o},\n" for o in reordered) + indent[:-2]
        else:
            rendered = ", ".join(reordered)
        counter["ABCD"[target]] += 1
        return f"{head}{rendered}{mid}{answer}"

    region = BLOCK.sub(fix, src[start:end])
    return src[:start] + region + src[end:], index[0], counter


def main() -> int:
    path = os.path.join(ROOT, TARGET)
    src = open(path, encoding="utf-8").read()

    start = src.index("export const dailyLifeQuestions")
    end = src.index("export const academicQuestions")

    out, n, counter = rebalance_region(src, start, end)
    if out != src:
        open(path, "w", encoding="utf-8").write(out)
    print(f"{TARGET} (Read in Daily Life): {n} items -> {dict(sorted(counter.items()))}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
