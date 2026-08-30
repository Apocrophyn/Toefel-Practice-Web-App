#!/usr/bin/env python3
"""Even out which letter is correct across a question bank.

A bank where one letter is right twice as often as another is exploitable: a
test taker who notices can raise their score without reading the item. The
combined listening bank sat at B=57 / D=22 before this ran.

MCQ distractor order carries no meaning, so the fix is to rotate each item's
options until the key lands on a target letter assigned round-robin. Nothing
about the item changes except which position the correct option occupies.

Idempotent in effect: rerunning re-derives the same assignment from item order.
"""
import re, sys, os, glob
from collections import Counter

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))

# Matches an options array followed by a letter-encoded correctAnswer.
BLOCK = re.compile(
    r'(options:\s*\[)(.*?)(\],\s*\n\s*correctAnswer:\s*")([A-D])(")',
    re.S,
)
STRING = re.compile(r'"(?:[^"\\]|\\.)*"')


def rebalance(path: str) -> tuple[int, Counter]:
    src = open(path, encoding="utf-8").read()
    counter = Counter()
    index = [0]

    def fix(m: "re.Match[str]") -> str:
        head, body, mid, letter, tail = m.groups()
        options = STRING.findall(body)
        if len(options) != 4:
            counter[letter] += 1
            return m.group(0)

        key = "ABCD".index(letter)
        target = index[0] % 4
        index[0] += 1

        rest = [o for i, o in enumerate(options) if i != key]
        reordered = rest[:target] + [options[key]] + rest[target:]

        indent = re.match(r"\s*", body.lstrip("\n")).group(0) if body.strip() else "      "
        rendered = "\n" + "".join(f"{indent}{o},\n" for o in reordered) + indent[:-2]
        counter["ABCD"[target]] += 1
        return f'{head}{rendered}{mid}{"ABCD"[target]}{tail}'

    out = BLOCK.sub(fix, src)
    if out != src:
        open(path, "w", encoding="utf-8").write(out)
    return index[0], counter


def main() -> int:
    targets = sys.argv[1:] or [
        "src/data/questions/listening-massive.ts",
        "src/data/questions/2026/listening-expansion-2026.ts",
    ]
    total = Counter()
    for rel in targets:
        path = os.path.join(ROOT, rel)
        if not os.path.exists(path):
            print(f"skip (missing): {rel}")
            continue
        n, counter = rebalance(path)
        total.update(counter)
        print(f"{rel}: {n} items rebalanced -> {dict(sorted(counter.items()))}")
    print(f"combined: {dict(sorted(total.items()))}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
