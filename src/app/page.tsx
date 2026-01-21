"use client";

import { useState } from "react";
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
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { ReadingPractice } from "@/components/practice/ReadingPractice";
import { ListeningPractice } from "@/components/practice/ListeningPractice";
import { SpeakingPractice } from "@/components/practice/SpeakingPractice";
import { WritingPractice } from "@/components/practice/WritingPractice";
import { FullTestSection } from "@/components/practice/FullTestSection";
import { HistorySection } from "@/components/sections/HistorySection";
import { WordSpeedrun } from "@/components/games/WordSpeedrun";

type Section = "reading" | "listening" | "speaking" | "writing" | "fulltest" | "history" | "games";

const navItems = [
  { id: "reading" as Section, name: "Reading", icon: BookOpen, gradient: "from-amber-400 to-orange-500", glow: "rgba(251, 191, 36, 0.5)" },
  { id: "listening" as Section, name: "Listening", icon: Headphones, gradient: "from-pink-400 to-rose-500", glow: "rgba(244, 114, 182, 0.5)" },
  { id: "speaking" as Section, name: "Speaking", icon: Mic, gradient: "from-violet-400 to-purple-500", glow: "rgba(167, 139, 250, 0.5)" },
  { id: "writing" as Section, name: "Writing", icon: PenTool, gradient: "from-cyan-400 to-teal-500", glow: "rgba(34, 211, 238, 0.5)" },
  { id: "fulltest" as Section, name: "Full Test", icon: GraduationCap, gradient: "from-emerald-400 to-green-500", glow: "rgba(52, 211, 153, 0.5)" },
  { id: "history" as Section, name: "History", icon: History, gradient: "from-slate-400 to-gray-500", glow: "rgba(148, 163, 184, 0.5)" },
  { id: "games" as Section, name: "Vocab Game", icon: Sparkles, gradient: "from-yellow-400 to-orange-500", glow: "rgba(251, 191, 36, 0.5)" },
];

export default function HomePage() {
  const [activeSection, setActiveSection] = useState<Section>("reading");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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

  const handleNavClick = (id: Section) => {
    setActiveSection(id);
    setIsSidebarOpen(false);
  };

  const NavButton = ({ item, index, delayOffset = 0 }: { item: typeof navItems[0]; index: number; delayOffset?: number }) => {
    const isActive = activeSection === item.id;
    const Icon = item.icon;

    return (
      <button
        key={item.id}
        onClick={() => handleNavClick(item.id)}
        className={`group relative flex items-center gap-3 w-full px-4 py-3.5 rounded-xl transition-all duration-300 ${isActive
            ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30"
            : "hover:bg-white/5 border border-transparent"
          }`}
        style={{
          boxShadow: isActive ? `0 0 30px ${item.glow}` : "none",
        }}
      >
        <div
          className={`relative w-10 h-10 rounded-lg bg-gradient-to-br ${item.gradient} flex items-center justify-center transition-all duration-300 ${isActive ? "shadow-lg" : "group-hover:shadow-md"
            }`}
          style={{
            boxShadow: isActive ? `0 8px 20px ${item.glow}` : undefined,
          }}
        >
          <Icon className="w-5 h-5 text-white" />
        </div>
        <span className={`font-medium transition-colors ${isActive ? "text-white" : "text-slate-400 group-hover:text-white"}`}>
          {item.name}
        </span>
        {isActive && (
          <div className="ml-auto">
            <ChevronRight className="w-4 h-4 text-cyan-400" />
          </div>
        )}
      </button>
    );
  };

  const sidebarContent = (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="p-6 border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-cyan-500/25">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div className="absolute -top-1 -right-1">
              <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
            </div>
          </div>
          <div>
            <h1 className="font-bold text-lg text-white tracking-tight">
              TOEFL <span className="text-gradient">Practice</span>
            </h1>
            <p className="text-xs text-slate-400">2026 Format</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        <p className="px-3 py-2 text-[10px] font-semibold text-slate-500 uppercase tracking-widest">
          Practice Sections
        </p>
        {navItems.slice(0, 4).map((item, index) => (
          <NavButton key={item.id} item={item} index={index} />
        ))}

        <div className="pt-6 mt-4">
          <p className="px-3 py-2 text-[10px] font-semibold text-slate-500 uppercase tracking-widest">
            Full Assessment
          </p>
          {navItems.slice(4, 5).map((item, index) => (
            <NavButton key={item.id} item={item} index={index} delayOffset={0.2} />
          ))}
        </div>

        <div className="pt-6 mt-4">
          <p className="px-3 py-2 text-[10px] font-semibold text-slate-500 uppercase tracking-widest">
            Games & Fun
          </p>
          {navItems.slice(6).map((item, index) => (
            <NavButton key={item.id} item={item} index={index} delayOffset={0.3} />
          ))}
        </div>

        <div className="pt-6 mt-4">
          <p className="px-3 py-2 text-[10px] font-semibold text-slate-500 uppercase tracking-widest">
            Your Progress
          </p>
          {navItems.slice(5, 6).map((item, index) => (
            <NavButton key={item.id} item={item} index={index} delayOffset={0.25} />
          ))}
        </div>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-white/5">
        <div className="glass-card rounded-xl p-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <p className="text-xs font-medium text-white">TOEFL iBT 2026</p>
          </div>
          <p className="text-[10px] text-slate-400 leading-relaxed">
            Practice with the latest exam format. Band Score: 1-6 Scale
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-950 overflow-hidden">
      {/* Animated Gradient Orbs Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Primary cyan orb */}
        <div
          className="absolute top-0 left-1/4 h-[800px] w-[800px] rounded-full blur-3xl animate-float opacity-20 orb-cyan"
        />
        {/* Purple orb */}
        <div
          className="absolute top-1/3 right-0 h-[600px] w-[600px] rounded-full blur-3xl animate-float-slow opacity-15 orb-purple"
          style={{ animationDelay: "-2s" }}
        />
        {/* Teal orb */}
        <div
          className="absolute bottom-0 left-1/2 h-[700px] w-[700px] rounded-full blur-3xl animate-pulse-glow opacity-10 orb-teal"
        />
        {/* Additional ambient glow */}
        <div
          className="absolute top-1/2 left-0 h-[500px] w-[500px] rounded-full blur-3xl animate-float opacity-10 orb-purple"
          style={{ animationDelay: "-4s" }}
        />
      </div>

      {/* Mobile Menu Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        onClick={() => setIsSidebarOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 p-3 glass-button rounded-xl"
      >
        <Menu className="w-5 h-5 text-white" />
      </motion.button>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex lg:flex-col lg:w-72 lg:fixed lg:inset-y-0 glass-sidebar z-20">
        {sidebarContent}
      </aside>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSidebarOpen(false)}
              className="lg:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            />
            <motion.aside
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="lg:hidden fixed inset-y-0 left-0 z-50 w-72 glass-sidebar"
            >
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                onClick={() => setIsSidebarOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-lg hover:bg-white/10 transition-colors z-10"
              >
                <X className="w-5 h-5 text-slate-400" />
              </motion.button>
              {sidebarContent}
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="lg:pl-72 relative z-10">
        <div className="min-h-screen p-4 lg:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {renderSection()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
