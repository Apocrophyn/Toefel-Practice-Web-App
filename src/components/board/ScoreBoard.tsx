"use client";

import type { ReactNode } from "react";
import { FlapText } from "./Flap";
import { Lamp } from "./Hardware";

/* ---------------------------------------------------------------------------
   ScoreBoard — a result is a departure time, posted back to the board.

   The band score is the one value that matters when a section ends, so it gets
   the display cells and nothing on the screen comes near its scale. Everything
   else is a ruled result row: field, value, qualifier, lamp.

   This replaces the hero-metric template — a big number over a row of matching
   stat tiles — which said everything was equally important and so said nothing.
   --------------------------------------------------------------------------- */

export interface ResultRow {
  field: string;
  value: string;
  note?: string;
  state?: "off" | "live" | "cleared" | "cancelled";
}

/** The 1–6 band scale as published for the 2026 format. */
const CEFR: [number, string][] = [
  [6, "C2 · Highly proficient"],
  [5.5, "C1+ · Very proficient"],
  [5, "C1 · Proficient"],
  [4.5, "B2+ · Upper-intermediate plus"],
  [4, "B2 · Upper-intermediate"],
  [3.5, "B1+ · Intermediate plus"],
  [3, "B1 · Intermediate"],
  [2.5, "A2+ · Elementary plus"],
  [2, "A2 · Elementary"],
  [1.5, "A1+ · Beginner plus"],
  [1, "A1 · Beginner"],
];

export function bandDescriptor(band: number): string {
  return CEFR.find(([b]) => band >= b)?.[1] ?? CEFR[CEFR.length - 1][1];
}

export function ScoreBoard({
  section,
  band,
  rows,
  children,
  actions,
  footnote,
}: {
  /** The section that just closed, e.g. "Reading". */
  section: string;
  /** Band score on the 2026 scale, in half steps. */
  band: number;
  rows: ResultRow[];
  children?: ReactNode;
  actions?: ReactNode;
  footnote?: string;
}) {
  const printed = band.toFixed(1);

  return (
    <div className="glass-panel mx-auto max-w-3xl">
      <div className="steel-grain flex items-center gap-3 border-b border-steel-800 px-6 py-3 sm:px-8">
        <Lamp state="cleared" />
        <span className="board-label text-ivory">{section} · posted</span>
      </div>

      {/* The one consequential value. */}
      <div className="board-recess flex flex-col items-center gap-5 px-6 py-10 sm:px-8">
        <p className="board-label">Band score</p>
        <FlapText value={printed} size="display" tone="amber" label={printed} />
        <div className="text-center">
          <p className="board-name text-[13px] text-steel-300">of 6.0</p>
          <p className="mt-1.5 text-[13px] text-steel-400">{bandDescriptor(band)}</p>
        </div>
      </div>

      {/* Result rows. */}
      <dl className="divide-y divide-steel-800/80 border-y border-steel-800">
        {rows.map((row) => (
          <div
            key={row.field}
            className="grid grid-cols-[1fr_auto_auto] items-center gap-x-5 px-6 py-3.5 sm:grid-cols-[160px_max-content_1fr_auto] sm:px-8"
          >
            <dt className="board-label">{row.field}</dt>
            <dd className="justify-self-end sm:justify-self-start">
              <FlapText value={row.value} size="sm" />
            </dd>
            <dd className="col-span-2 pt-1 text-[13px] text-steel-400 sm:col-span-1 sm:pt-0">
              {row.note ?? ""}
            </dd>
            <dd className="hidden sm:block">
              <Lamp state={row.state ?? "off"} />
            </dd>
          </div>
        ))}
      </dl>

      {children ? <div className="border-t border-steel-800">{children}</div> : null}

      {(actions || footnote) && (
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-steel-800 bg-concourse-deep px-6 py-5 sm:px-8">
          {footnote ? (
            <p className="max-w-sm text-[12px] leading-relaxed text-steel-500">
              {footnote}
            </p>
          ) : (
            <span />
          )}
          <div className="flex flex-wrap gap-3">{actions}</div>
        </div>
      )}
    </div>
  );
}
