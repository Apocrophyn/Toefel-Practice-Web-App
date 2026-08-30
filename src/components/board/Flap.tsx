"use client";

import { useEffect, useRef, useState } from "react";

/* ---------------------------------------------------------------------------
   FlapText — the board's one authored motion.

   A value change does not fade or slide. It cascades: each character cell that
   actually changed flips, left to right, one 26ms step apart, exactly the way
   a Solari board resolves a new destination. Cells whose character did not
   change stay dead still, which is what makes the cascade legible.

   Under prefers-reduced-motion the new value simply arrives, whole.
   --------------------------------------------------------------------------- */

type Size = "sm" | "md" | "lg" | "xl" | "display";

const SIZES: Record<Size, string> = {
  sm: "h-[22px] min-w-[15px] text-[13px]",
  md: "h-[30px] min-w-[20px] text-[18px]",
  lg: "h-[44px] min-w-[29px] text-[27px]",
  xl: "h-[64px] min-w-[42px] text-[40px]",
  display: "h-[104px] min-w-[68px] text-[68px]",
};

interface FlapTextProps {
  value: string;
  size?: Size;
  /** Pad to a fixed cell count so the row never reflows as the value changes. */
  cells?: number;
  className?: string;
  /** Amber paint instead of ivory — for a live clock or a boarding row. */
  live?: boolean;
  tone?: "ivory" | "amber" | "platform" | "signal" | "steel";
  label?: string;
}

const TONE: Record<NonNullable<FlapTextProps["tone"]>, string> = {
  ivory: "text-ivory",
  amber: "text-amber-400",
  platform: "text-platform-400",
  signal: "text-signal-400",
  steel: "text-steel-400",
};

export function FlapText({
  value,
  size = "md",
  cells,
  className = "",
  live = false,
  tone,
  label,
}: FlapTextProps) {
  const text = cells ? value.padStart(cells, " ").slice(-cells) : value;
  const chars = text.split("");

  const prev = useRef<string[]>(chars);
  const [gens, setGens] = useState<number[]>(() => chars.map(() => 0));

  useEffect(() => {
    setGens((current) => {
      const next = chars.map((c, i) => {
        const changed = prev.current[i] !== c;
        return changed ? (current[i] ?? 0) + 1 : current[i] ?? 0;
      });
      prev.current = chars;
      return next;
    });
    // `chars` is derived from `text`; comparing the joined string is enough.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  const paint = TONE[tone ?? (live ? "amber" : "ivory")];

  return (
    <span
      className={`inline-flex items-stretch gap-[3px] ${className}`}
      data-board-digits
    >
      {/* Screen readers get the value as plain text; the cells are scenery. */}
      <span className="sr-only">{label ?? value}</span>
      {chars.map((char, i) => (
        <span
          key={i}
          aria-hidden
          className={`flap ${live ? "flap-lit" : ""} ${SIZES[size]} ${paint}
            grid place-items-center px-[3px] font-board font-bold tabular-nums
            leading-none select-none`}
        >
          <span
            key={`${char}-${gens[i] ?? 0}`}
            className={gens[i] ? "flap-flip" : undefined}
            style={{ animationDelay: `${i * 26}ms` }}
          >
            {char === " " ? " " : char}
          </span>
        </span>
      ))}
    </span>
  );
}

/* ---------------------------------------------------------------------------
   FlapClock — mm:ss on the board, with the colon between cells rather than in
   one. Goes amber under two minutes and red under thirty seconds, because a
   concourse board says "delayed" with a lamp, not with a wobble.
   --------------------------------------------------------------------------- */

export function FlapClock({
  seconds,
  size = "lg",
  className = "",
  warnAt = 120,
  criticalAt = 30,
}: {
  seconds: number;
  size?: Size;
  className?: string;
  warnAt?: number;
  criticalAt?: number;
}) {
  const safe = Math.max(0, Math.floor(seconds));
  const mm = String(Math.floor(safe / 60)).padStart(2, "0");
  const ss = String(safe % 60).padStart(2, "0");

  const tone: NonNullable<FlapTextProps["tone"]> =
    safe <= criticalAt ? "signal" : safe <= warnAt ? "amber" : "ivory";

  const colonSize =
    size === "display" ? "text-[52px]" : size === "xl" ? "text-[32px]" : "text-[20px]";

  return (
    <span
      className={`inline-flex items-center gap-[3px] ${className}`}
      role="timer"
      aria-live="off"
    >
      <span className="sr-only">{`${mm} minutes ${ss} seconds remaining`}</span>
      <FlapText value={mm} size={size} tone={tone} label="" />
      <span
        aria-hidden
        className={`${colonSize} font-board font-bold leading-none pb-[0.15em] ${
          tone === "signal"
            ? "text-signal-400"
            : tone === "amber"
              ? "text-amber-400"
              : "text-steel-600"
        }`}
      >
        :
      </span>
      <FlapText value={ss} size={size} tone={tone} label="" />
    </span>
  );
}
