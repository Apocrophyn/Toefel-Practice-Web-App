"use client";

import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { usePublishToStrip } from "./strip";
import { GlassPlate, Lamp, BoardButton } from "./Hardware";
import { FlapText } from "./Flap";

/* ---------------------------------------------------------------------------
   SectionBrief — the manifest a section posts before it boards.

   Every practice section used to open on the same stack of identical
   icon-heading-text cards. On a departure board that information is a ruled
   manifest: fixed columns, one row per fact, a lamp where a fact carries
   state. Rows scan in a second; cards never did.
   --------------------------------------------------------------------------- */

export interface ManifestRow {
  /** Left column — the field name, in board caps. */
  field: string;
  /** Centre column — the value, in flap lettering. */
  value: string;
  /** Right column — the qualifier, in plain reading type. */
  note?: string;
}

export interface TaskRow {
  name: string;
  detail: string;
  icon?: LucideIcon;
}

export interface RouteRow {
  condition: string;
  destination: string;
  detail: string;
  state: "cleared" | "live";
}

export function SectionBrief({
  icon,
  title,
  standfirst,
  manifest,
  tasks,
  routes,
  routesTitle = "Routing",
  action,
  onAction,
  footnote,
  children,
}: {
  icon: LucideIcon;
  title: string;
  standfirst: string;
  manifest: ManifestRow[];
  tasks?: TaskRow[];
  routes?: RouteRow[];
  routesTitle?: string;
  action: string;
  onAction: () => void;
  footnote?: string;
  children?: ReactNode;
}) {
  // The forward action belongs on the departure strip, at its right edge.
  usePublishToStrip({ action: { label: action, onClick: onAction } });

  return (
    <div className="glass-panel mx-auto max-w-4xl">
      {/* Header plate */}
      <div className="steel-grain flex items-start gap-4 border-b border-steel-800 px-6 py-6 sm:px-8">
        <GlassPlate icon={icon} size="lg" live />
        <div className="min-w-0 pt-0.5">
          <h1 className="board-name text-[26px] leading-none text-ivory sm:text-[30px]">
            {title}
          </h1>
          <p className="mt-2 text-[13px] leading-relaxed text-steel-400">
            {standfirst}
          </p>
        </div>
      </div>

      {/* Manifest: field · value · note */}
      <div className="px-6 pb-2 pt-5 sm:px-8">
        <p className="board-label pb-3">Manifest</p>
        <dl className="divide-y divide-steel-800/80 border-y border-steel-800">
          {manifest.map((row) => (
            <div
              key={row.field}
              className="grid grid-cols-[minmax(88px,1fr)_auto] items-center gap-x-6 gap-y-2 py-3 sm:grid-cols-[140px_max-content_1fr]"
            >
              <dt className="board-label">{row.field}</dt>
              <dd className="justify-self-end sm:justify-self-start">
                <FlapText value={row.value} size="sm" />
              </dd>
              {row.note ? (
                <dd className="col-span-2 text-[13px] leading-snug text-steel-400 sm:col-span-1">
                  {row.note}
                </dd>
              ) : (
                <dd className="hidden sm:block" />
              )}
            </div>
          ))}
        </dl>
      </div>

      {/* Tasks */}
      {tasks?.length ? (
        <div className="px-6 pb-2 pt-6 sm:px-8">
          <p className="board-label pb-3">Tasks on this board</p>
          <ul className="divide-y divide-steel-800/80 border-y border-steel-800">
            {tasks.map((task) => (
              <li key={task.name} className="flex items-start gap-4 py-3.5">
                {task.icon ? (
                  <GlassPlate icon={task.icon} size="sm" className="mt-0.5" />
                ) : (
                  <Lamp state="off" className="mt-2" />
                )}
                <div className="min-w-0 flex-1 sm:flex sm:items-center sm:gap-6">
                  <span className="board-name block text-[13px] text-ivory sm:w-[200px] sm:shrink-0">
                    {task.name}
                  </span>
                  <span className="mt-1 block text-[13px] leading-snug text-steel-400 sm:mt-0">
                    {task.detail}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {/* Routing rule — where this section sends you next, and on what. */}
      {routes?.length ? (
        <div className="px-6 pb-2 pt-6 sm:px-8">
          <p className="board-label pb-3">{routesTitle}</p>
          <ul className="divide-y divide-steel-800/80 border-y border-steel-800">
            {routes.map((route) => (
              <li
                key={route.destination}
                className="flex flex-wrap items-center gap-x-4 gap-y-2 py-3.5"
              >
                <FlapText value={route.condition} size="sm" />
                <ArrowRight
                  className="h-3.5 w-3.5 shrink-0 text-steel-600"
                  strokeWidth={2}
                  aria-hidden
                />
                {/* Colour never labels a category here — the lamp carries the
                    state and the name is simply the name. */}
                <span className="board-name text-[13px] text-ivory">
                  {route.destination}
                </span>
                <span className="text-[13px] text-steel-400">{route.detail}</span>
                <Lamp state={route.state} className="ml-auto" />
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {children}

      {/* Departure control */}
      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-steel-800 bg-concourse-deep px-6 py-5 sm:px-8">
        <p className="max-w-sm text-[12px] leading-relaxed text-steel-500">
          {footnote ??
            "The clock starts as soon as you board. You can leave the section at any time from the board on the left."}
        </p>
        <BoardButton
          onClick={onAction}
          size="lg"
          iconRight={ArrowRight}
          className="lg:hidden"
        >
          {action}
        </BoardButton>
      </div>
    </div>
  );
}
