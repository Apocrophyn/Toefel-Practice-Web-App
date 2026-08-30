#!/usr/bin/env node
/**
 * Second Concourse pass: typography and chip form.
 *
 * The first pass fixed material and colour. This one fixes voice — the two
 * places the old look survives a palette change:
 *
 *   · an accent-filled button still labelled in body sans, when every other
 *     control on the board speaks in condensed caps;
 *   · a soft capsule chip, when this board tags things with a hard-cornered
 *     cell. Round objects on this board are lamps and glass plates only.
 */

import { readFileSync, writeFileSync } from "node:fs";

const BOARD_VOICE = "font-board uppercase tracking-[0.14em] font-bold";

const files = process.argv.slice(2);
let touched = 0;

for (const file of files) {
  const src = readFileSync(file, "utf8");

  const out = src.replace(
    /(className\s*=\s*\{?)(['"`])([\s\S]*?)\2/g,
    (_w, head, quote, body) => {
      let s = body;

      // --- Accent-filled controls speak in the board's voice ---------------
      const isFilledControl =
        /\bbg-(?:amber-400|platform-500|signal-500)\b/.test(s) &&
        /\b(?:py-\d|h-\d{1,2})\b/.test(s) &&
        /\bpx-\d/.test(s) &&
        !/\bfont-board\b/.test(s);

      if (isFilledControl) {
        s = s
          .replace(/\bfont-(?:medium|semibold|bold)\b/g, "")
          .replace(/\btext-(?:xs|sm|base|lg)\b/g, "text-[12px]");
        s = `${s} ${BOARD_VOICE}`;
      }

      // --- Capsule chips become board cells ---------------------------------
      // A chip is small padded text with a pill radius. A lamp or a glass
      // plate is a fixed square, and neither is touched here.
      const isChip =
        /\brounded-full\b/.test(s) &&
        /\bpx-\d/.test(s) &&
        /\btext-(?:xs|\[1[0-4]px\])\b/.test(s) &&
        !/\bglass-plate\b/.test(s) &&
        !/\bw-\d{1,2} h-\d{1,2}\b/.test(s);

      if (isChip) {
        s = s.replace(/\brounded-full\b/g, "rounded-flap");
        if (!/\bfont-board\b/.test(s)) s = `${s} font-board uppercase tracking-[0.14em]`;
      }

      return `${head}${quote}${s.replace(/[ \t]{2,}/g, " ").replace(/ +$/g, "")}${quote}`;
    },
  );

  if (out !== src) {
    writeFileSync(file, out);
    touched += 1;
    console.log(`  polished  ${file}`);
  }
}

console.log(`\n${touched} file(s) polished.`);
