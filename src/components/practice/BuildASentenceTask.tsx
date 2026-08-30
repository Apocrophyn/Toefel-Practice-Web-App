"use client";

/**
 * Build a Sentence — word-bank-to-slot assembly.
 *
 * The real task is not a textarea. Tiles (often multi-word chunks) are placed
 * into a fixed number of slots, some slots arrive locked, and the bank can hold
 * more tiles than there are slots. Both click-to-place and drag work: click is
 * primary because it is the accessible path and what the exam's own interface
 * leads with, drag is layered on top.
 *
 * Spec: BUILD_A_SENTENCE in src/data/toefl-2026-blueprint.ts
 */

import { useCallback, useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { RotateCcw, X } from "lucide-react";
import {
  bankTiles,
  openSlots,
  type BuildASentenceItem,
} from "@/data/questions/2026/build-a-sentence";

/** A tile in the bank, kept distinct by index so duplicate texts stay separable. */
interface Tile {
  key: string;
  text: string;
}

export interface BuildASentenceTaskProps {
  item: BuildASentenceItem;
  /** Slot index -> tile text. Owned by the parent so answers survive navigation. */
  placed: Record<number, string | null>;
  onChange: (placed: Record<number, string | null>) => void;
  /** Review mode reveals the correct ordering and disables interaction. */
  revealAnswer?: boolean;
  disabled?: boolean;
}

export function BuildASentenceTask({
  item,
  placed,
  onChange,
  revealAnswer = false,
  disabled = false,
}: BuildASentenceTaskProps) {
  const [selectedTile, setSelectedTile] = useState<Tile | null>(null);

  const tiles = useMemo<Tile[]>(() => {
    // Shuffle once per item, deterministically, so the bank order is stable
    // across re-renders but not simply the answer order.
    const source = bankTiles(item);
    const seeded = source
      .map((text, i) => ({ text, sort: hash(`${item.id}:${text}:${i}`) }))
      .sort((a, b) => a.sort - b.sort);
    return seeded.map((t, i) => ({ key: `${item.id}-t${i}`, text: t.text }));
  }, [item]);

  const slots = useMemo(() => openSlots(item), [item]);

  useEffect(() => {
    setSelectedTile(null);
  }, [item.id]);

  const usedTexts = useMemo(() => {
    const counts = new Map<string, number>();
    slots.forEach((slot) => {
      const text = placed[slot];
      if (text) counts.set(text, (counts.get(text) ?? 0) + 1);
    });
    return counts;
  }, [placed, slots]);

  /** A tile is spent when every copy of its text is already sitting in a slot. */
  const isTileUsed = useCallback(
    (tile: Tile) => {
      const totalCopies = tiles.filter((t) => t.text === tile.text).length;
      const placedCopies = usedTexts.get(tile.text) ?? 0;
      const indexAmongSameText = tiles.filter((t) => t.text === tile.text).findIndex((t) => t.key === tile.key);
      return indexAmongSameText < placedCopies && placedCopies <= totalCopies;
    },
    [tiles, usedTexts]
  );

  const placeInSlot = useCallback(
    (slot: number, text: string) => {
      if (disabled || revealAnswer) return;
      onChange({ ...placed, [slot]: text });
      setSelectedTile(null);
    },
    [disabled, revealAnswer, onChange, placed]
  );

  const clearSlot = useCallback(
    (slot: number) => {
      if (disabled || revealAnswer) return;
      const next = { ...placed };
      delete next[slot];
      onChange(next);
    },
    [disabled, revealAnswer, onChange, placed]
  );

  const handleSlotClick = useCallback(
    (slot: number) => {
      if (disabled || revealAnswer) return;
      if (placed[slot]) {
        clearSlot(slot);
        return;
      }
      if (selectedTile) placeInSlot(slot, selectedTile.text);
    },
    [disabled, revealAnswer, placed, selectedTile, clearSlot, placeInSlot]
  );

  const handleTileClick = useCallback(
    (tile: Tile) => {
      if (disabled || revealAnswer || isTileUsed(tile)) return;
      if (selectedTile?.key === tile.key) {
        setSelectedTile(null);
        return;
      }
      // Clicking a tile with no selection drops it into the first empty slot,
      // which is the fastest path and matches how the exam's interface behaves.
      const firstEmpty = slots.find((s) => !placed[s]);
      if (firstEmpty !== undefined) {
        placeInSlot(firstEmpty, tile.text);
      } else {
        setSelectedTile(tile);
      }
    },
    [disabled, revealAnswer, isTileUsed, selectedTile, slots, placed, placeInSlot]
  );

  const reset = useCallback(() => {
    if (disabled || revealAnswer) return;
    onChange({});
    setSelectedTile(null);
  }, [disabled, revealAnswer, onChange]);

  const assembled = item.parts
    .map((part, i) => (item.lockedIndices.includes(i) ? part : placed[i] ?? null))
    .filter(Boolean)
    .join(" ");

  const allFilled = slots.every((s) => placed[s]);

  return (
    <div className="space-y-5">
      {/* The line the sentence has to answer. This is what makes the item a
          contextualised response rather than a bare scramble. */}
      <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/50">
        <p className="text-xs uppercase tracking-wide text-slate-500 mb-1">You hear</p>
        <p className="text-slate-200">{item.context}</p>
      </div>

      <p className="text-sm text-slate-400">
        Arrange the words to create a grammatically correct and meaningful sentence that
        responds to the question.
      </p>

      {/* Slots */}
      <div
        className="flex flex-wrap items-center gap-2 p-4 min-h-[5rem] rounded-xl bg-slate-900/60 border-2 border-dashed border-slate-700"
        role="list"
        aria-label="Sentence"
      >
        {item.parts.map((part, i) => {
          const locked = item.lockedIndices.includes(i);
          if (locked) {
            return (
              <span
                key={`locked-${i}`}
                role="listitem"
                className="px-3 py-2 rounded-lg bg-slate-700/60 text-slate-300 font-medium border border-slate-600"
                title="Already placed for you"
              >
                {part}
              </span>
            );
          }
          const text = revealAnswer ? part : placed[i];
          const correct = revealAnswer || placed[i] === part;
          return (
            <button
              key={`slot-${i}`}
              role="listitem"
              type="button"
              onClick={() => handleSlotClick(i)}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault();
                const dropped = e.dataTransfer.getData("text/plain");
                if (dropped) placeInSlot(i, dropped);
              }}
              disabled={disabled}
              aria-label={text ? `Slot ${i + 1}, contains ${text}. Click to remove.` : `Empty slot ${i + 1}`}
              className={`px-3 py-2 rounded-lg font-medium transition-all min-w-[4.5rem] ${
                text
                  ? revealAnswer
                    ? "bg-emerald-500/20 border border-emerald-500/40 text-emerald-200"
                    : correct
                      ? "bg-cyan-500/20 border border-cyan-500/40 text-white"
                      : "bg-cyan-500/20 border border-cyan-500/40 text-white"
                  : selectedTile
                    ? "bg-slate-800 border-2 border-cyan-500/60 text-slate-500 animate-pulse"
                    : "bg-slate-800 border border-slate-700 text-slate-600"
              }`}
            >
              {text ?? "    "}
            </button>
          );
        })}
      </div>

      {/* Word bank */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs uppercase tracking-wide text-slate-500">Word bank</p>
          <button
            type="button"
            onClick={reset}
            disabled={disabled || revealAnswer}
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white disabled:opacity-40 transition-colors"
          >
            <RotateCcw className="w-3 h-3" /> Reset
          </button>
        </div>
        <div className="flex flex-wrap gap-2 p-4 rounded-xl bg-slate-800/30 border border-slate-700/50">
          {tiles.map((tile) => {
            const used = isTileUsed(tile);
            const selected = selectedTile?.key === tile.key;
            return (
              <motion.button
                key={tile.key}
                type="button"
                draggable={!used && !disabled && !revealAnswer}
                onDragStart={(e) => {
                  (e as unknown as React.DragEvent).dataTransfer.setData("text/plain", tile.text);
                }}
                onClick={() => handleTileClick(tile)}
                disabled={used || disabled || revealAnswer}
                whileTap={{ scale: 0.96 }}
                className={`px-3 py-2 rounded-lg font-medium transition-all cursor-grab active:cursor-grabbing ${
                  used
                    ? "bg-slate-800/40 border border-slate-800 text-slate-600 line-through cursor-default"
                    : selected
                      ? "bg-cyan-500 text-white border border-cyan-400 shadow-lg shadow-cyan-500/30"
                      : "bg-slate-700/70 border border-slate-600 text-white hover:border-cyan-500/50"
                }`}
              >
                {tile.text}
              </motion.button>
            );
          })}
        </div>
        <p className="mt-2 text-xs text-slate-500">
          Click a word to place it, or drag it into a space. Click a placed word to take it back.
          Not every word is used.
        </p>
      </div>

      {(allFilled || revealAnswer) && (
        <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/50">
          <p className="text-xs uppercase tracking-wide text-slate-500 mb-1">Your sentence</p>
          <p className="text-white">{revealAnswer ? item.sentence : tidy(assembled)}</p>
        </div>
      )}
    </div>
  );
}

/** Join chunks into readable prose: no space before terminal punctuation. */
function tidy(text: string): string {
  return text.replace(/\s+([.?!,;:])/g, "$1").trim();
}

/** Small stable string hash, used only to give the bank a fixed shuffled order. */
function hash(input: string): number {
  let h = 2166136261;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}
