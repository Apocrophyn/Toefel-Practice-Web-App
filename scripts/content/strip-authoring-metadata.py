#!/usr/bin/env python3
"""Move authoring notes out of on-screen passage text.

400 academic reading passages began with

    **Rhetorical Structure:** Problem-Solution
    **Dominant TOEFL Skill:** Inference

inside the `passage` template literal, so a test taker saw the item's own answer
strategy printed above the passage. This lifts those two lines into dedicated
metadata fields (kept for skill tagging and analytics) and leaves `passage`
containing only what should be rendered.

Idempotent: running it again is a no-op.
"""
import re, glob, os, sys

ROOT = os.path.join(os.path.dirname(__file__), "..", "..", "src", "data", "questions")
HEADER = re.compile(
    r'(?P<indent>[ \t]*)passage:\s*`\s*\n?'
    r'[ \t]*\*\*Rhetorical Structure:\*\*[ \t]*(?P<rs>[^\n]*)\n'
    r'[ \t]*\*\*Dominant TOEFL Skill:\*\*[ \t]*(?P<ds>[^\n]*)\n+'
)

def esc(v: str) -> str:
    return v.strip().replace("\\", "\\\\").replace('"', '\\"')

def main() -> int:
    changed_files = 0
    changed_items = 0
    for path in sorted(glob.glob(os.path.join(ROOT, "reading-batch-*.ts"))):
        src = open(path, encoding="utf-8").read()

        def repl(m: "re.Match[str]") -> str:
            nonlocal changed_items
            changed_items += 1
            ind = m.group("indent")
            return (
                f'{ind}rhetoricalStructure: "{esc(m.group("rs"))}",\n'
                f'{ind}dominantSkill: "{esc(m.group("ds"))}",\n'
                f'{ind}passage: `\n'
            )

        out = HEADER.sub(repl, src)
        if out != src:
            open(path, "w", encoding="utf-8").write(out)
            changed_files += 1
    print(f"stripped authoring metadata from {changed_items} passages across {changed_files} files")
    return 0

if __name__ == "__main__":
    sys.exit(main())
