'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon, Laptop, ChevronDown } from 'lucide-react';

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-lg bg-slate-800/20 border border-slate-700/40 animate-pulse" />
    );
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <div className="relative">
      {/* Main Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all backdrop-blur-md bg-slate-200/80 hover:bg-slate-300/80 dark:bg-white/10 dark:hover:bg-white/20 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-white/15 shadow-sm"
        aria-label="Select Theme Mode"
      >
        <div className="relative w-4 h-4 flex items-center justify-center">
          {isDark ? (
            <Moon className="w-4 h-4 text-sky-400 animate-in spin-in-90 duration-300" />
          ) : (
            <Sun className="w-4 h-4 text-amber-500 animate-in spin-in-90 duration-300" />
          )}
        </div>
        <span className="hidden sm:inline capitalize text-[11px] font-bold">
          {theme === 'system' ? 'System' : isDark ? 'Dark' : 'Light'}
        </span>
        <ChevronDown className={`w-3 h-3 text-slate-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Theme Dropdown Selector */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-32 rounded-xl bg-white dark:bg-[#051826] border border-slate-200 dark:border-white/15 shadow-xl z-50 p-1 space-y-0.5 text-xs text-slate-700 dark:text-slate-200 animate-in fade-in slide-in-from-top-2 duration-200">
            <button
              onClick={() => {
                setTheme('light');
                setIsOpen(false);
              }}
              className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg font-medium transition-colors ${
                theme === 'light'
                  ? 'bg-sky-50 dark:bg-white/10 text-[#0a66a0] dark:text-sky-400 font-bold'
                  : 'hover:bg-slate-100 dark:hover:bg-white/5'
              }`}
            >
              <Sun className="w-3.5 h-3.5 text-amber-500" />
              <span>Light</span>
            </button>

            <button
              onClick={() => {
                setTheme('dark');
                setIsOpen(false);
              }}
              className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg font-medium transition-colors ${
                theme === 'dark'
                  ? 'bg-sky-50 dark:bg-white/10 text-[#0a66a0] dark:text-sky-400 font-bold'
                  : 'hover:bg-slate-100 dark:hover:bg-white/5'
              }`}
            >
              <Moon className="w-3.5 h-3.5 text-sky-400" />
              <span>Dark</span>
            </button>

            <button
              onClick={() => {
                setTheme('system');
                setIsOpen(false);
              }}
              className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg font-medium transition-colors ${
                theme === 'system'
                  ? 'bg-sky-50 dark:bg-white/10 text-[#0a66a0] dark:text-sky-400 font-bold'
                  : 'hover:bg-slate-100 dark:hover:bg-white/5'
              }`}
            >
              <Laptop className="w-3.5 h-3.5 text-emerald-500" />
              <span>System</span>
            </button>
          </div>
        </>
      )}
    </div>
  );
}
