"use client";

import { Bell, Search } from "lucide-react";
import type { User } from "@/types/database";

interface DashboardHeaderProps {
  user: User | null;
}

export function DashboardHeader({ user }: DashboardHeaderProps) {
  return (
    <header className="sticky top-0 z-30 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800">
      <div className="flex items-center justify-between h-16 px-4 lg:px-8">
        {/* Search (placeholder) */}
        <div className="flex-1 max-w-md hidden md:block">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500" />
            <input
              type="text"
              placeholder="Search questions, tests..."
              className="w-full pl-10 pr-4 py-2 bg-neutral-900 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4 ml-auto lg:ml-0">
          {/* Subscription badge */}
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-neutral-800 rounded-full">
            <span className="text-xs font-medium text-neutral-300">
              {user?.subscription_tier === "free" ? "Free Plan" : "Premium"}
            </span>
            {user?.subscription_tier === "free" && (
              <span className="text-xs font-medium text-primary-400 hover:text-primary-300 cursor-pointer">
                Upgrade
              </span>
            )}
          </div>

          {/* Notifications */}
          <button className="relative p-2 text-neutral-400 hover:text-white transition-colors">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-primary-500 rounded-full" />
          </button>

          {/* User avatar (mobile) */}
          <div className="lg:hidden w-9 h-9 bg-neutral-700 rounded-full flex items-center justify-center">
            <span className="text-white font-semibold text-sm">
              {user?.full_name?.[0]?.toUpperCase() || user?.email?.[0]?.toUpperCase() || "U"}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
