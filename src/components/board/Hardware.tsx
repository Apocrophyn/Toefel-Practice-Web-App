"use client";

import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

/* ---------------------------------------------------------------------------
   GlassPlate — the only circle on a board of rectangles.

   A black glass lens seated in the flap: refracting rim, one top-lit specular
   arc, deep inner shadow. It replaces the rainbow gradient icon tile entirely.
   When its row is live, the lens catches the amber of that row's own lamp.
   --------------------------------------------------------------------------- */

const PLATE_SIZES = {
  sm: "w-8 h-8",
  md: "w-10 h-10",
  lg: "w-14 h-14",
  xl: "w-20 h-20",
} as const;

const ICON_SIZES = {
  sm: "w-[15px] h-[15px]",
  md: "w-[18px] h-[18px]",
  lg: "w-6 h-6",
  xl: "w-9 h-9",
} as const;

export function GlassPlate({
  icon: Icon,
  size = "md",
  live = false,
  tone,
  className = "",
  children,
}: {
  icon?: LucideIcon;
  size?: keyof typeof PLATE_SIZES;
  live?: boolean;
  tone?: "ivory" | "amber" | "platform" | "signal";
  className?: string;
  children?: ReactNode;
}) {
  const paint =
    tone === "platform"
      ? "text-platform-400"
      : tone === "signal"
        ? "text-signal-400"
        : tone === "amber" || live
          ? "text-amber-400"
          : "text-steel-200";

  return (
    <span
      className={`glass-plate ${live ? "glass-plate-live" : ""} ${PLATE_SIZES[size]}
        grid shrink-0 place-items-center ${className}`}
    >
      {Icon ? (
        <Icon
          className={`${ICON_SIZES[size]} ${paint} relative z-10`}
          strokeWidth={1.75}
          aria-hidden
        />
      ) : (
        <span className={`relative z-10 ${paint}`}>{children}</span>
      )}
    </span>
  );
}

/* ---------------------------------------------------------------------------
   Lamp — a board lamp is never decorative. It means the row is live, cleared,
   or cancelled, and nothing else.
   --------------------------------------------------------------------------- */

export function Lamp({
  state = "off",
  className = "",
  label,
}: {
  state?: "off" | "live" | "cleared" | "cancelled";
  className?: string;
  label?: string;
}) {
  const skin =
    state === "live"
      ? "lamp animate-lamp-pulse"
      : state === "cleared"
        ? "lamp lamp-platform"
        : state === "cancelled"
          ? "lamp lamp-signal"
          : "lamp lamp-dark";

  return (
    <span className={`${skin} ${className}`} role={label ? "img" : undefined} aria-label={label} aria-hidden={label ? undefined : true} />
  );
}

/* ---------------------------------------------------------------------------
   BoardRow — every list on this board is the same object: fixed columns, a
   ruled baseline, a lamp at the right edge. Sections, questions, attempts and
   score lines are all rows; only their column content differs.
   --------------------------------------------------------------------------- */

export function BoardRow({
  name,
  meta,
  icon,
  live = false,
  state = "off",
  onClick,
  className = "",
  right,
}: {
  name: string;
  meta?: string;
  icon?: LucideIcon;
  live?: boolean;
  state?: "off" | "live" | "cleared" | "cancelled";
  onClick?: () => void;
  className?: string;
  right?: ReactNode;
}) {
  const Tag = onClick ? "button" : "div";

  return (
    <Tag
      onClick={onClick}
      aria-current={live ? "true" : undefined}
      /* The lit face is painted directly rather than borrowed from `.flap`:
         a flap's seam belongs to a single character cell, and stretching it
         across a whole row draws a line straight through the row's content. */
      className={`group flex w-full items-center gap-3 px-3 py-2.5 text-left
        rounded-flap border transition-[background-color,border-color] duration-150
        ${
          live
            ? "border-amber-800/60 bg-flap-lit shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
            : "border-transparent hover:bg-steel-900/70 hover:border-steel-800"
        } ${className}`}
    >
      {icon ? <GlassPlate icon={icon} size="md" live={live} /> : null}

      <span className="min-w-0 flex-1">
        <span
          className={`block truncate font-board text-[13px] font-bold uppercase tracking-[0.12em]
            ${live ? "text-ivory" : "text-steel-300 group-hover:text-ivory"}`}
        >
          {name}
        </span>
        {meta ? (
          <span className="mt-0.5 block truncate text-[11px] tracking-[0.04em] text-steel-500">
            {meta}
          </span>
        ) : null}
      </span>

      {right}

      <Lamp state={live ? "live" : state} className="shrink-0" />
    </Tag>
  );
}

/* ---------------------------------------------------------------------------
   Panel / Sheet — the two content containers this world has.

   Panel is board hardware: framed, ruled, holds controls and status.
   Sheet is the achromatic reading field: colour is confined to its rules and
   lamps so a 400-word academic passage is never read off a tinted ground.
   --------------------------------------------------------------------------- */

export function Panel({
  children,
  className = "",
  as: Tag = "section",
}: {
  children: ReactNode;
  className?: string;
  as?: "section" | "div" | "aside" | "article";
}) {
  return <Tag className={`glass-panel ${className}`}>{children}</Tag>;
}

export function Sheet({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`sheet ${className}`}>{children}</div>;
}

/* ---------------------------------------------------------------------------
   BoardButton — the accent is the control. Amber is a solid painted field
   with the concourse's own black as its label, exactly like a lamp housing;
   it is never a glow and never a gradient.
   --------------------------------------------------------------------------- */

export function BoardButton({
  children,
  onClick,
  variant = "primary",
  size = "md",
  disabled,
  type = "button",
  className = "",
  icon: Icon,
  iconRight: IconRight,
}: {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "steel" | "quiet" | "danger";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  type?: "button" | "submit";
  className?: string;
  icon?: LucideIcon;
  iconRight?: LucideIcon;
}) {
  const sizing =
    size === "lg"
      ? "h-14 px-7 text-[14px]"
      : size === "sm"
        ? "h-8 px-3.5 text-[11px]"
        : "h-11 px-5 text-[12px]";

  const skin = {
    primary:
      "bg-amber-400 text-concourse-deep border-amber-300 hover:bg-amber-300 active:bg-amber-500 shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_6px_18px_-10px_rgba(242,169,59,0.8)]",
    steel:
      "bg-steel-900 text-ivory border-steel-700 hover:border-amber-600 hover:bg-steel-800",
    quiet:
      "bg-transparent text-steel-300 border-steel-800 hover:text-ivory hover:border-steel-600",
    danger:
      "bg-signal-500 text-ivory border-signal-400 hover:bg-signal-400 hover:text-concourse-deep",
  }[variant];

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex items-center justify-center gap-2 rounded-flap border
        font-board font-bold uppercase tracking-[0.16em]
        transition-[background-color,border-color,color] duration-150
        disabled:cursor-not-allowed disabled:border-steel-800 disabled:bg-steel-900
        disabled:text-steel-600 disabled:shadow-none
        ${sizing} ${skin} ${className}`}
    >
      {Icon ? <Icon className="h-4 w-4" strokeWidth={2} aria-hidden /> : null}
      {children}
      {IconRight ? <IconRight className="h-4 w-4" strokeWidth={2} aria-hidden /> : null}
    </button>
  );
}

/* ---------------------------------------------------------------------------
   SectionHead — the departure strip that tops every section: the name in flap
   cells, the task line beneath it, and room at the right edge for the clock
   and the primary action.
   --------------------------------------------------------------------------- */

export function BoardRule({ className = "" }: { className?: string }) {
  return <div className={`rule-h w-full ${className}`} aria-hidden />;
}
