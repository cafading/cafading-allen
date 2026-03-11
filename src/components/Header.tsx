"use client";

import { useState } from "react";
import { ChevronDown, ExternalLink } from "lucide-react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#06060a]/70 backdrop-blur-2xl border-b border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
            <svg viewBox="0 0 20 20" fill="none" className="w-4.5 h-4.5">
              <path
                d="M10 2L18 18H2L10 2Z"
                fill="white"
                opacity="0.9"
              />
              <path d="M10 8L14 16H6L10 8Z" fill="#6366f1" opacity="0.5" />
            </svg>
          </div>
          <span className="text-base font-bold tracking-tight text-white">
            BANK OF AI
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-1">
          {["Products", "Developers", "Community"].map((item) => (
            <button
              key={item}
              className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-slate-400 hover:text-white rounded-lg hover:bg-white/[0.04] transition-all duration-200"
            >
              {item}
              <ChevronDown className="w-3.5 h-3.5 opacity-50" />
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#"
            className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-slate-400 hover:text-white rounded-lg hover:bg-white/[0.04] transition-all duration-200"
          >
            Docs
            <ExternalLink className="w-3 h-3 opacity-50" />
          </a>
          <a
            href="#"
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-white/[0.08] hover:bg-white/[0.12] rounded-lg border border-white/[0.06] hover:border-white/[0.1] transition-all duration-200"
          >
            Get Started
          </a>
        </div>

        <button
          className="md:hidden p-2 rounded-lg hover:bg-white/[0.04] transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <div className="w-5 h-4 flex flex-col justify-between">
            <span
              className={`block h-0.5 bg-white rounded-full transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`}
            />
            <span
              className={`block h-0.5 bg-white rounded-full transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 bg-white rounded-full transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
            />
          </div>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-[#06060a]/95 backdrop-blur-2xl border-t border-white/[0.04] px-6 py-4">
          {["Products", "Developers", "Community", "Docs"].map((item) => (
            <button
              key={item}
              className="block w-full text-left py-3 text-sm font-medium text-slate-400 hover:text-white transition-colors"
            >
              {item}
            </button>
          ))}
          <a
            href="#"
            className="block mt-3 px-4 py-2.5 text-sm font-medium text-white bg-white/[0.08] rounded-lg border border-white/[0.06] text-center"
          >
            Get Started
          </a>
        </div>
      )}
    </header>
  );
}
