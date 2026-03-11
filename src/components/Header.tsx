"use client";

import { useState } from "react";
import { ChevronDown, Search, Globe } from "lucide-react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100/80">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 relative">
            <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
              <path
                d="M16 2L28 28H4L16 2Z"
                fill="url(#logo-grad)"
                stroke="#1e293b"
                strokeWidth="1"
              />
              <path d="M16 10L22 24H10L16 10Z" fill="white" opacity="0.6" />
              <defs>
                <linearGradient id="logo-grad" x1="4" y1="28" x2="28" y2="2">
                  <stop stopColor="#3b82f6" />
                  <stop offset="1" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span className="text-lg font-bold tracking-tight text-gray-900">
            BANK OF AI
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {["Components", "Developers", "Community"].map((item) => (
            <button
              key={item}
              className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              {item}
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <Search className="w-4 h-4 text-gray-500" />
          </button>
          <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium text-gray-600">
            <Globe className="w-4 h-4" />
            EN
          </button>
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <div className="w-5 h-4 flex flex-col justify-between">
            <span
              className={`block h-0.5 bg-gray-900 transition-all ${mobileOpen ? "rotate-45 translate-y-1.5" : ""}`}
            />
            <span
              className={`block h-0.5 bg-gray-900 transition-all ${mobileOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 bg-gray-900 transition-all ${mobileOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
            />
          </div>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4">
          {["Components", "Developers", "Community"].map((item) => (
            <button
              key={item}
              className="block w-full text-left py-3 text-sm font-medium text-gray-600 hover:text-gray-900"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
