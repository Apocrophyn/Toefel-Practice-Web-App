"use client";

import { useId } from "react";

/* ---------------------------------------------------------------------------
   OVERTURE — the identity.

   The mark is the letter O, cut clean across its middle by the same seam that
   runs through every flap on the board.

   It says three true things at once with one shape:
   · It is the O of the wordmark, so the mark and the name are the same object
     and the lockup reads O-VERTURE with no redundancy.
   · It is a split-flap leaf — the seam, the upper leaf, the lower leaf — which
     is the material this whole interface is built from.
   · "Overture" descends from the Latin *apertura*, an opening. The mark is
     literally an opening: a ring with light coming through it.

   Construction rules, so it survives everywhere:
   · A single circle on a 32-unit grid, stroked at 6.4 units, with a 3.2-unit
     horizontal band masked out through the centre. Two numbers define it.
   · No gradients, no effects, no rounding that smears. It renders identically
     at 16px, at 512px, embroidered, or stamped in one colour.
   · The silhouette is the logo: two stacked arcs. Filled solid black it is
     still legible as an O, and as nothing else in this category.
   · Colour is never load-bearing. When used, the upper leaf takes amber —
     the leaf that moves — because amber in this product only ever means live.
   --------------------------------------------------------------------------- */

const R = 10.9;
const STROKE = 6.4;
const SEAM_TOP = 14.4;
const SEAM_H = 3.2;

export function OvertureMark({
  className = "",
  duotone = false,
  title,
}: {
  className?: string;
  /** Amber on the upper leaf. Decorative only — the mark is whole in one colour. */
  duotone?: boolean;
  title?: string;
}) {
  // Masks are document-global in SVG, so every instance needs its own ids.
  const uid = useId().replace(/:/g, "");
  const seam = `ov-seam-${uid}`;
  const upper = `ov-upper-${uid}`;

  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      fill="none"
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      <defs>
        {/* The seam: a band of nothing straight through the middle. */}
        <mask id={seam}>
          <rect width="32" height="32" fill="#fff" />
          <rect y={SEAM_TOP} width="32" height={SEAM_H} fill="#000" />
        </mask>
        {/* Everything above the seam — the leaf that turns. */}
        <mask id={upper}>
          <rect width="32" height={SEAM_TOP} fill="#fff" />
        </mask>
      </defs>

      <g mask={`url(#${seam})`}>
        <circle
          cx="16"
          cy="16"
          r={R}
          stroke="currentColor"
          strokeWidth={STROKE}
          fill="none"
        />
        {duotone ? (
          <g mask={`url(#${upper})`}>
            <circle
              cx="16"
              cy="16"
              r={R}
              stroke="#F2A93B"
              strokeWidth={STROKE}
              fill="none"
            />
          </g>
        ) : null}
      </g>
    </svg>
  );
}

/**
 * The lockup. The mark *is* the O, so the wordmark only has to carry the rest
 * of the letters — the name assembles itself out of the logo.
 */
export function OvertureLockup({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-baseline ${className}`}>
      <span className="sr-only">Overture</span>
      <OvertureMark
        className="h-[1.05em] w-[1.05em] self-center text-ivory"
        duotone
      />
      <span
        aria-hidden
        className="font-board font-bold uppercase tracking-[0.24em] text-ivory"
      >
        verture
      </span>
    </span>
  );
}
