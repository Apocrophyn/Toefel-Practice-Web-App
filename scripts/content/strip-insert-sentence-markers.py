#!/usr/bin/env python3
"""Remove orphaned insert-a-sentence markers from reading passages.

The pre-2026 Reading section had an "insert a sentence" item type: the passage
carried [A] [B] [C] [D] (or square glyphs) marking candidate insertion points.
That item type was removed in the 2026 update, and no question in this bank
references the markers any more - but the markers were still inside the passage
text, so a test taker saw a literal "[B]" floating in the prose.

Idempotent.
"""
import re, glob, os, sys

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
QUESTIONS = os.path.join(ROOT, "src", "data", "questions")

MARKER = re.compile(r"\s*(?:\[[A-D]\]|■|▪)\s*")


def main() -> int:
    total = 0
    files = 0
    for path in sorted(glob.glob(os.path.join(QUESTIONS, "**", "*.ts"), recursive=True)):
        src = open(path, encoding="utf-8").read()
        changed_here = 0

        def fix_passage(m: "re.Match[str]") -> str:
            nonlocal changed_here
            body = m.group(2)
            n = len(MARKER.findall(body))
            if not n:
                return m.group(0)
            changed_here += n
            # Collapse the marker and the whitespace around it back to one space.
            return f"{m.group(1)}{MARKER.sub(' ', body)}{m.group(3)}"

        out = re.sub(r"(passage:\s*`)(.*?)(`)", fix_passage, src, flags=re.S)
        out = re.sub(r'(passage:\s*")((?:[^"\\]|\\.)*)(")', fix_passage, out)

        if changed_here:
            open(path, "w", encoding="utf-8").write(out)
            total += changed_here
            files += 1
    print(f"removed {total} insert-sentence markers from {files} files")
    return 0


if __name__ == "__main__":
    sys.exit(main())
