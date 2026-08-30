"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Headphones,
  Mic,
  PenTool,
  GraduationCap,
  History,
  Menu,
  X,
  Type,
} from "lucide-react";
import { ReadingPractice } from "@/components/practice/ReadingPractice";
import { ListeningPractice } from "@/components/practice/ListeningPractice";
import { SpeakingPractice } from "@/components/practice/SpeakingPractice";
import { WritingPractice } from "@/components/practice/WritingPractice";
import { FullTestSection } from "@/components/practice/FullTestSection";
import { HistorySection } from "@/components/sections/HistorySection";
import { WordSpeedrun } from "@/components/games/WordSpeedrun";
import {
  FlapText,
  FlapClock,
  GlassPlate,
  Lamp,
  BoardRow,
  BoardButton,
  BoardStripProvider,
  useBoardStrip,
} from "@/components/board";
import { ArrowRight } from "lucide-react";
import { OvertureMark } from "@/components/brand/Logo";

type Section =
  | "reading"
  | "listening"
  | "speaking"
  | "writing"
  | "fulltest"
  | "history"
  | "games";

interface BoardEntry {
  id: Section;
  name: string;
  meta: string;
  icon: typeof BookOpen;
  /** The line the departure strip reads out when this row is boarding. */
  strip: string;
}

const BOARD: Record<"practice" | "assessment" | "training" | "record", BoardEntry[]> = {
  practice: [
    {
      id: "reading",
      name: "Reading",
      meta: "Gate 1 · 50 items · adaptive",
      icon: BookOpen,
      strip: "Complete the Words · Daily Life · Academic Text",
    },
    {
      id: "listening",
      name: "Listening",
      meta: "Gate 2 · 47 items · adaptive",
      icon: Headphones,
      strip: "Choose a Response · Conversation · Announcement · Lecture",
    },
    {
      id: "writing",
      name: "Writing",
      meta: "Gate 3 · 12 items",
      icon: PenTool,
      strip: "Build a Sentence · Write an Email · Academic Discussion",
    },
    {
      id: "speaking",
      name: "Speaking",
      meta: "Gate 4 · 11 items",
      icon: Mic,
      strip: "Listen and Repeat · Take an Interview",
    },
  ],
  assessment: [
    {
      id: "fulltest",
      name: "Full Test",
      meta: "All gates · 83–89 min",
      icon: GraduationCap,
      strip: "Four sections back to back, under one clock",
    },
  ],
  training: [
    {
      id: "games",
      name: "Word Speedrun",
      meta: "Open · untimed drill",
      icon: Type,
      strip: "Vocabulary against the clock",
    },
  ],
  record: [
    {
      id: "history",
      name: "History",
      meta: "Posted results",
      icon: History,
      strip: "Every attempt, posted back to the board",
    },
  ],
};

const ALL_ENTRIES = [
  ...BOARD.practice,
  ...BOARD.assessment,
  ...BOARD.training,
  ...BOARD.record,
];

const GROUPS: { label: string; entries: BoardEntry[] }[] = [
  { label: "Practice", entries: BOARD.practice },
  { label: "Assessment", entries: BOARD.assessment },
  { label: "Training", entries: BOARD.training },
  { label: "Record", entries: BOARD.record },
];

/** A real wall clock, the way a concourse has one. Set after mount so the
 *  server and the client never disagree about the time. */
function useLocalTime() {
  const [now, setNow] = useState<string | null>(null);

  useEffect(() => {
    const read = () =>
      setNow(
        new Date().toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }),
      );
    read();
    const id = setInterval(read, 15000);
    return () => clearInterval(id);
  }, []);

  return now;
}

/**
 * The right edge of the departure strip. It shows the running clock at display
 * scale when a section has published one, the concourse wall clock when none
 * is running, and the section's forward action beside it.
 */
function StripInstruments() {
  const { clock, clockLabel, action } = useBoardStrip();
  const local = useLocalTime();
  const running = typeof clock === "number";

  return (
    <div className="flex shrink-0 items-center gap-4 sm:gap-6">
      <div className="text-right">
        <p className="board-label pb-1.5 text-right">
          {running ? (clockLabel ?? "Time remaining") : "Local"}
        </p>
        {running ? (
          <FlapClock seconds={clock} size="xl" />
        ) : (
          <FlapText
            value={local ?? "--:--"}
            size="xl"
            tone="steel"
            label={local ?? ""}
          />
        )}
      </div>

      {action ? (
        <BoardButton
          onClick={action.onClick}
          size="lg"
          iconRight={ArrowRight}
          className="hidden lg:inline-flex"
        >
          {action.label}
        </BoardButton>
      ) : null}
    </div>
  );
}

export default function HomePage() {
  const [activeSection, setActiveSection] = useState<Section>("reading");
  const [isRailOpen, setIsRailOpen] = useState(false);

  const active = ALL_ENTRIES.find((e) => e.id === activeSection) ?? ALL_ENTRIES[0];

  const renderSection = () => {
    switch (activeSection) {
      case "reading":
        return <ReadingPractice />;
      case "listening":
        return <ListeningPractice />;
      case "speaking":
        return <SpeakingPractice />;
      case "writing":
        return <WritingPractice />;
      case "fulltest":
        return <FullTestSection />;
      case "games":
        return <WordSpeedrun />;
      case "history":
        return <HistorySection />;
      default:
        return <ReadingPractice />;
    }
  };

  const rail = (
    <div className="flex h-full flex-col">
      {/* Brand plate — the mark seated in the lens, the name in flap cells. */}
      <div className="steel-grain border-b border-steel-800 px-5 py-5">
        <div className="flex items-center gap-3">
          <GlassPlate size="lg">
            <OvertureMark className="h-7 w-7 text-ivory" duotone title="Overture" />
          </GlassPlate>
          <div className="min-w-0">
            <FlapText value="OVERTURE" size="sm" className="mb-2" />
            <p className="board-label text-steel-400">TOEFL iBT 2026 · Band 1–6</p>
          </div>
        </div>
      </div>

      {/* Column headers, the way a departure board captions its columns. */}
      <div
        className="flex items-center gap-3 border-b border-steel-800 bg-concourse-deep px-5 py-2"
        aria-hidden
      >
        <span className="board-label flex-1">Section</span>
        <span className="board-label">Live</span>
      </div>

      <nav className="flex-1 overflow-y-auto px-2 py-3" aria-label="Practice sections">
        {GROUPS.map((group, gi) => (
          <div key={group.label} className={gi > 0 ? "mt-5" : ""}>
            <p className="board-label px-3 pb-2 pt-1">{group.label}</p>
            <ul className="space-y-0.5">
              {group.entries.map((entry) => (
                <li key={entry.id}>
                  <BoardRow
                    name={entry.name}
                    meta={entry.meta}
                    icon={entry.icon}
                    live={activeSection === entry.id}
                    onClick={() => {
                      setActiveSection(entry.id);
                      setIsRailOpen(false);
                    }}
                  />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      {/* Status strip. States a fact about the format, claims nothing else. */}
      <div className="steel-grain border-t border-steel-800 px-5 py-4">
        <div className="mb-2 flex items-center gap-2">
          <Lamp state="live" />
          <span className="board-label text-amber-400">Board live</span>
        </div>
        <p className="text-[11px] leading-relaxed text-steel-500">
          Overture is built to the TOEFL iBT format effective 21 January 2026.
          It is not affiliated with ETS.
        </p>
      </div>
    </div>
  );

  return (
    <BoardStripProvider>
    <div className="concourse-ground min-h-screen overflow-x-hidden">
      {/* Rail toggle, mobile only. */}
      <button
        onClick={() => setIsRailOpen(true)}
        aria-label="Open the section board"
        className="glass-button fixed left-4 top-4 z-50 grid h-11 w-11 place-items-center lg:hidden"
      >
        <Menu className="h-5 w-5 text-ivory" strokeWidth={2} />
      </button>

      {/* The board rail. */}
      <aside className="glass-sidebar fixed inset-y-0 z-20 hidden w-[286px] lg:flex lg:flex-col">
        {rail}
      </aside>

      <AnimatePresence>
        {isRailOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.14 }}
              onClick={() => setIsRailOpen(false)}
              className="fixed inset-0 z-40 bg-concourse-deep/85 lg:hidden"
            />
            <motion.aside
              initial={{ x: -286 }}
              animate={{ x: 0 }}
              exit={{ x: -286 }}
              transition={{ duration: 0.22, ease: [0.2, 0.9, 0.25, 1] }}
              className="glass-sidebar fixed inset-y-0 left-0 z-50 w-[286px] lg:hidden"
            >
              <button
                onClick={() => setIsRailOpen(false)}
                aria-label="Close the section board"
                className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-flap border border-steel-800 text-steel-400 transition-colors hover:border-steel-600 hover:text-ivory"
              >
                <X className="h-4 w-4" strokeWidth={2} />
              </button>
              {rail}
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      <main className="relative z-10 lg:pl-[286px]">
        {/* Departure strip — what is boarding, and on what. */}
        <header className="steel-grain sticky top-0 z-30 border-b border-steel-800">
          <div className="flex items-center gap-5 px-4 py-4 pl-[68px] lg:px-8 lg:pl-8">
            <div className="min-w-0 flex-1">
              <FlapText
                value={active.name.toUpperCase()}
                size="lg"
                live
                label={active.name}
              />
              <p className="mt-2 truncate text-[12px] tracking-[0.05em] text-steel-400">
                {active.strip}
              </p>
            </div>

            <StripInstruments />
          </div>
        </header>

        <div className="p-4 lg:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            >
              {renderSection()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
    </BoardStripProvider>
  );
}
