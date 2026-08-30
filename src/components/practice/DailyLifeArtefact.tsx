"use client";

import { Mail } from "lucide-react";

/**
 * Read in Daily Life — artefact renderer.
 *
 * The visual formatting of the stimulus is part of what this task measures. ETS
 * describes the input as short practical texts drawn from social and
 * navigational contexts — an email, a text thread, a notice, a menu, a schedule
 * — and locating a fact inside a table of shuttle times is a different reading
 * skill from locating it inside a paragraph. Rendering every artefact as one
 * flat `whitespace-pre-wrap` block, which is what this app did, removes that
 * skill from the task and makes the whole section feel like prose comprehension.
 *
 * The bank stores each artefact as plain text with the conventions its author
 * used: `From:/To:/Subject:` headers on emails, an ALL-CAPS opening line as the
 * banner, ALL-CAPS lines ending in a colon as section headings, `- ` for list
 * items, `Label: value` for fields, and ` | ` for inline columns. This component
 * parses those conventions back into structure rather than requiring all 30
 * stimuli to be re-authored into a bespoke schema.
 *
 * Spec: READ_IN_DAILY_LIFE in src/data/toefl-2026-blueprint.ts
 */

type Block =
  | { kind: "banner"; text: string }
  | { kind: "heading"; text: string }
  | { kind: "list"; items: string[] }
  | { kind: "field"; label: string; value: string }
  | { kind: "columns"; cells: string[] }
  | { kind: "paragraph"; text: string };

/** `From:`, `To:`, `Subject:` and friends, in the order they appear. */
const EMAIL_HEADER = /^(From|To|Cc|Subject|Date|Sent|Re)\s*:\s*(.*)$/i;

/** A short all-caps line — the artefact's title, or a section heading. */
const isShouted = (line: string) =>
  /[A-Z]/.test(line) && line === line.toUpperCase() && line.replace(/[^A-Za-z]/g, "").length > 1;

/** `Hours: Mon-Fri 7 AM - 8 PM` — a label/value pair on one line. */
const FIELD = /^([A-Z][A-Za-z /&'-]{1,28})\s*:\s*(.+)$/;

/** Cells separated by a pipe, the way the bank writes an inline table row. */
const hasColumns = (line: string) => line.split("|").length >= 2 && !line.includes("://");

function parse(passage: string): { headers: [string, string][]; blocks: Block[] } {
  const lines = passage.replace(/\r/g, "").split("\n");
  const headers: [string, string][] = [];
  const blocks: Block[] = [];

  // Email chrome only counts when it sits at the very top of the artefact.
  let cursor = 0;
  while (cursor < lines.length) {
    const match = lines[cursor].match(EMAIL_HEADER);
    if (!match) break;
    headers.push([match[1], match[2].trim()]);
    cursor += 1;
  }

  let pendingList: string[] = [];
  let pendingParagraph: string[] = [];

  const flushList = () => {
    if (pendingList.length) blocks.push({ kind: "list", items: pendingList });
    pendingList = [];
  };
  const flushParagraph = () => {
    if (pendingParagraph.length) blocks.push({ kind: "paragraph", text: pendingParagraph.join(" ") });
    pendingParagraph = [];
  };
  const flush = () => {
    flushList();
    flushParagraph();
  };

  let seenAnyBlock = false;

  for (const raw of lines.slice(cursor)) {
    const line = raw.trim();

    if (!line) {
      flush();
      continue;
    }

    if (line.startsWith("-") || line.startsWith("•") || line.startsWith("*")) {
      flushParagraph();
      pendingList.push(line.replace(/^[-•*]\s*/, ""));
      continue;
    }

    flushList();

    if (isShouted(line)) {
      flushParagraph();
      // The first shouted line is the artefact's banner; later ones divide it.
      blocks.push({ kind: seenAnyBlock ? "heading" : "banner", text: line.replace(/:$/, "") });
      seenAnyBlock = true;
      continue;
    }

    if (hasColumns(line)) {
      flushParagraph();
      blocks.push({ kind: "columns", cells: line.split("|").map((c) => c.trim()).filter(Boolean) });
      seenAnyBlock = true;
      continue;
    }

    const field = line.match(FIELD);
    // A "field" is only a field when the value is short; a long value is prose
    // that happens to open with a capitalised clause and a colon.
    if (field && field[2].split(/\s+/).length <= 12) {
      flushParagraph();
      blocks.push({ kind: "field", label: field[1], value: field[2] });
      seenAnyBlock = true;
      continue;
    }

    pendingParagraph.push(line);
    seenAnyBlock = true;
  }

  flush();
  return { headers, blocks };
}

export function DailyLifeArtefact({
  passage,
  category,
}: {
  passage: string;
  /** The artefact's genre, e.g. "Campus Email" or "Cafe Menu". Shown as a tab. */
  category?: string;
}) {
  const { headers, blocks } = parse(passage);
  const isEmail = headers.length > 0;

  return (
    <div className="rounded-panel border border-steel-700/60 bg-steel-900/40 overflow-hidden">
      {/* Genre tab — the artefact announces what kind of document it is, the way
          a real one does by simply looking like itself. */}
      {category && (
        <div className="flex items-center gap-2 px-4 py-2 border-b border-steel-700/60 bg-steel-800/50">
          {isEmail && <Mail className="w-3.5 h-3.5 text-amber-400" />}
          <span className="font-board text-[11px] uppercase tracking-[0.14em] text-steel-400">
            {category}
          </span>
        </div>
      )}

      {isEmail && (
        <dl className="px-4 py-3 border-b border-steel-700/60 bg-steel-800/25 text-sm">
          {headers.map(([label, value]) => (
            <div key={label} className="flex gap-3 py-0.5">
              <dt className="w-16 shrink-0 text-steel-500">{label}</dt>
              <dd className="m-0 text-steel-200">{value}</dd>
            </div>
          ))}
        </dl>
      )}

      <div className="px-5 py-4 space-y-3 text-[15px] leading-relaxed text-steel-300">
        {blocks.map((block, i) => {
          switch (block.kind) {
            case "banner":
              return (
                <h4
                  key={i}
                  className="font-board text-sm font-bold uppercase tracking-[0.1em] text-white m-0"
                >
                  {block.text}
                </h4>
              );
            case "heading":
              return (
                <h5
                  key={i}
                  className="font-board text-[11px] font-bold uppercase tracking-[0.14em] text-amber-400 m-0 pt-1"
                >
                  {block.text}
                </h5>
              );
            case "list":
              return (
                <ul key={i} className="m-0 space-y-1 pl-0 list-none">
                  {block.items.map((item, j) => (
                    <li key={j} className="flex gap-2.5">
                      <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-steel-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              );
            case "field":
              return (
                <div key={i} className="flex gap-3 border-b border-steel-800/70 pb-1.5">
                  <span className="w-32 shrink-0 text-steel-500">{block.label}</span>
                  <span className="text-steel-200">{block.value}</span>
                </div>
              );
            case "columns":
              return (
                <div key={i} className="flex flex-wrap gap-x-6 gap-y-1 text-steel-200">
                  {block.cells.map((cell, j) => (
                    <span key={j}>{cell}</span>
                  ))}
                </div>
              );
            default:
              return (
                <p key={i} className="m-0">
                  {block.text}
                </p>
              );
          }
        })}
      </div>
    </div>
  );
}
