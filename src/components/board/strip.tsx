"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

/* ---------------------------------------------------------------------------
   The departure strip is the board's authority, so what is running and what
   you do next have to live *on* it, not inside whichever card happens to be
   open. Sections publish their clock and their forward action up here; the
   strip renders the clock at display scale and puts the action at its right
   edge, which is where a concourse board has always kept them.

   This carries display state only. No section's behaviour changes.
   --------------------------------------------------------------------------- */

export interface StripAction {
  label: string;
  onClick: () => void;
}

export interface StripState {
  /** Seconds remaining on whatever is currently running, if anything. */
  clock?: number;
  clockLabel?: string;
  action?: StripAction;
}

interface StripApi extends StripState {
  publish: (state: StripState | null) => void;
}

const StripContext = createContext<StripApi | null>(null);

export function BoardStripProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<StripState>({});

  const api = useMemo<StripApi>(
    () => ({ ...state, publish: (next) => setState(next ?? {}) }),
    [state],
  );

  return <StripContext.Provider value={api}>{children}</StripContext.Provider>;
}

export function useBoardStrip(): StripState {
  return useContext(StripContext) ?? {};
}

/**
 * Publish this screen's clock and forward action to the departure strip, and
 * clear them again when the screen closes.
 */
export function usePublishToStrip(state: StripState | null) {
  const ctx = useContext(StripContext);
  const publish = ctx?.publish;

  // Only the values matter, not the identity of the action closure.
  const key = `${state?.clock ?? ""}|${state?.clockLabel ?? ""}|${state?.action?.label ?? ""}`;
  const latest = useRef(state);
  latest.current = state;

  useEffect(() => {
    if (!publish) return;
    publish(latest.current);
    return () => publish(null);
  }, [publish, key]);
}
