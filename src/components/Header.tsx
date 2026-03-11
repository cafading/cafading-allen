"use client";

import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#09090b]/80 backdrop-blur-xl border-b border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
            <path d="M12 2L22 22H2L12 2Z" fill="url(#hg)" />
            <path d="M12 9L17 20H7L12 9Z" fill="white" opacity="0.4" />
            <defs>
              <linearGradient id="hg" x1="2" y1="22" x2="22" y2="2">
                <stop stopColor="#3b82f6" />
                <stop offset="1" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
          </svg>
          <span className="text-[15px] font-bold tracking-tight text-white">
            BANK OF AI
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-1">
          {["Products", "Developers", "Community"].map((item) => (
            <a
              key={item}
              href="#"
              className="px-4 py-2 text-[13px] font-medium text-zinc-400 hover:text-white rounded-lg transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="px-4 py-2 text-[13px] font-medium text-zinc-400 hover:text-white transition-colors">
            Docs
          </a>
          <a href="#" className="px-4 py-2 text-[13px] font-medium text-white bg-white/[0.06] hover:bg-white/[0.1] rounded-lg border border-white/[0.06] transition-colors">
            Get Started
          </a>
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <div className="w-5 h-3.5 flex flex-col justify-between">
            <span className={`block h-px bg-white transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[6px]" : ""}`} />
            <span className={`block h-px bg-white transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block h-px bg-white transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[6px]" : ""}`} />
          </div>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-[#09090b]/95 backdrop-blur-xl border-t border-white/[0.04] px-6 py-3">
          {["Products", "Developers", "Community", "Docs"].map((item) => (
            <a key={item} href="#" className="block py-3 text-sm text-zinc-400 hover:text-white transition-colors">{item}</a>
          ))}
        </div>
      )}
    </header>
  );
}
