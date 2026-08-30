#!/usr/bin/env node
/**
 * One-shot migration of the incumbent markup onto the Concourse world.
 *
 * The hue remap lives in tailwind.config.ts, so colours are already correct by
 * the time this runs. What this fixes is *form* — the shapes the old look was
 * made of, which no palette swap can rescue:
 *
 *   · decorative gradient fields  → flat painted plates, or a quiet steel wash
 *   · rainbow icon tiles          → the black glass indicator plate
 *   · coloured halos and glows    → deleted; a board has offset shadows
 *   · gradient text               → amber, because emphasis is weight and size
 *   · pillowy radii (xl / 2xl)    → machined 2–3px corners
 *
 * The rule that keeps the accent honest: a *solid* accent field is an action
 * (dark label on amber), while a *tinted* accent field was only ever a
 * background wash and becomes neutral steel — amber is reserved for things
 * that are live or clickable.
 */

import { readFileSync, writeFileSync } from "node:fs";

const HUES =
  "slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose|primary|secondary|accent|white|black|transparent|current";

const ACCENT = new Set([
  "cyan", "sky", "blue", "indigo", "violet", "purple", "fuchsia", "pink",
  "amber", "orange", "yellow", "primary", "accent",
]);
const GOOD = new Set(["emerald", "green", "teal", "lime", "secondary"]);
const BAD = new Set(["red", "rose"]);

const VARIANT =
  "(?:hover:|group-hover:|focus:|focus-visible:|active:|disabled:|dark:|sm:|md:|lg:|xl:)*";

/** What a gradient field becomes, given its `from-` hue and alpha. */
function fieldFor(hue, alpha) {
  if (GOOD.has(hue))
    return { cls: alpha ? `bg-platform-500/${alpha}` : "bg-platform-500", dark: false };
  if (BAD.has(hue))
    return { cls: alpha ? `bg-signal-500/${alpha}` : "bg-signal-500", dark: false };
  if (ACCENT.has(hue)) {
    // A tint was never an action — it was a wash. Washes go quiet.
    return alpha
      ? { cls: "bg-steel-900/70", dark: false }
      : { cls: "bg-amber-400", dark: true };
  }
  return { cls: alpha ? `bg-steel-800/${alpha}` : "bg-steel-800", dark: false };
}

const files = process.argv.slice(2);
let touched = 0;

for (const file of files) {
  const src = readFileSync(file, "utf8");

  const out = src.replace(
    /(className\s*=\s*\{?)(['"`])([\s\S]*?)\2/g,
    (_whole, head, quote, body) => {
      let s = body;

      // --- 1. Gradient text is refused: emphasis is weight and size. --------
      if (/bg-clip-text/.test(s) && /text-transparent/.test(s)) {
        s = s
          .replace(/\bbg-gradient-to-[a-z]+\b/g, "")
          .replace(
            new RegExp(
              `\\b${VARIANT}(?:from|via|to)-(?:${HUES})(?:-\\d{2,3})?(?:\\/\\d+)?\\b`,
              "g",
            ),
            "",
          )
          .replace(/\bbg-clip-text\b/g, "")
          .replace(/\btext-transparent\b/g, "text-amber-400");
      }

      // --- 2. Gradient fields become plates, washes, or glass ---------------
      if (/\bbg-gradient-to-[a-z]+\b/.test(s)) {
        const from = s.match(
          new RegExp(`\\bfrom-(${HUES})(?:-(\\d{2,3}))?(?:\\/(\\d+))?\\b`),
        );
        const hue = from ? from[1] : "slate";
        const alpha = from ? from[3] : undefined;

        // A small square with a radius, holding an icon, is an icon tile. In
        // this world that object is the round black glass indicator plate.
        const w = s.match(/\bw-(\d+)\b/);
        const h = s.match(/\bh-(\d+)\b/);
        const isIconTile =
          !alpha &&
          w &&
          h &&
          w[1] === h[1] &&
          Number(w[1]) <= 24 &&
          /\brounded-/.test(s);

        const { cls, dark } = fieldFor(hue, alpha);

        s = s
          .replace(/\bbg-gradient-to-[a-z]+\b/g, "")
          .replace(
            new RegExp(
              `\\b${VARIANT}(?:from|via|to)-(?:${HUES})(?:-\\d{2,3})?(?:\\/\\d+)?\\b`,
              "g",
            ),
            "",
          );

        if (isIconTile) {
          s = `glass-plate ${s.replace(/\brounded-(?:sm|md|lg|xl|2xl|3xl)\b/g, "rounded-full")}`;
        } else {
          s = `${cls} ${s}`;
          if (dark) s = s.replace(/\btext-white\b/g, "text-concourse-deep");
        }
      }

      // --- 3. Coloured halos are decoration, not depth ----------------------
      s = s
        .replace(
          new RegExp(
            `\\b${VARIANT}shadow-(?:${HUES})(?:-\\d{2,3})?(?:\\/\\d+)?\\b`,
            "g",
          ),
          "",
        )
        .replace(
          new RegExp(`\\b${VARIANT}drop-shadow-(?:sm|md|lg|xl|2xl)\\b`, "g"),
          "",
        )
        .replace(
          /\b(?:heading-glow|text-glow-cyan|text-glow-purple|icon-glow|icon-glow-purple|border-glow|border-glow-purple)\b/g,
          "",
        );

      // --- 4. Radii: this world is machined, not pillowy --------------------
      s = s
        .replace(/\brounded-(?:2xl|3xl|xl)\b/g, "rounded-panel")
        .replace(/\brounded-(?:lg|md)\b/g, "rounded-flap");

      // --- 5. Sweep orphaned variant prefixes left by the deletions ---------
      s = s.replace(
        /\b(?:hover|group-hover|focus|focus-visible|active|disabled|dark|sm|md|lg|xl):(?=\s|$)/g,
        "",
      );

      // --- 6. Tidy the class list ------------------------------------------
      s = s
        .replace(/[ \t]{2,}/g, " ")
        .replace(/ +\n/g, "\n")
        .replace(/ +$/g, "");

      return `${head}${quote}${s}${quote}`;
    },
  );

  if (out !== src) {
    writeFileSync(file, out);
    touched += 1;
    console.log(`  migrated  ${file}`);
  }
}

console.log(`\n${touched} file(s) migrated onto the Concourse world.`);
