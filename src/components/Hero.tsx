"use client";

import { ArrowRight, Github, BookOpen } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />

      <div className="absolute inset-0 hero-grid opacity-30" />

      <div className="absolute top-20 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500/8 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl" />

      {/* Floating geometric shapes */}
      <div className="absolute top-32 right-[15%] w-3 h-3 bg-blue-400/30 rotate-45 animate-float" />
      <div className="absolute top-48 left-[20%] w-2 h-2 bg-purple-400/40 rounded-full animate-float-delayed" />
      <div className="absolute bottom-32 right-[25%] w-4 h-4 border border-blue-400/20 rotate-12 animate-float" />
      <div className="absolute bottom-48 left-[15%] w-2.5 h-2.5 bg-amber-400/30 rounded-full animate-float-delayed" />

      <div className="relative max-w-7xl mx-auto px-6 py-28 md:py-40 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-blue-300 mb-8 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Live on TRON &amp; BNB Chain
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6">
          BANK OF{" "}
          <span className="relative">
            <span className="gradient-text">AI</span>
            <svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 100 8"
              fill="none"
            >
              <path
                d="M0 6C20 2 40 1 50 3C60 5 80 2 100 4"
                stroke="url(#underline-grad)"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="underline-grad" x1="0" y1="0" x2="100" y2="0">
                  <stop stopColor="#3b82f6" />
                  <stop offset="0.5" stopColor="#8b5cf6" />
                  <stop offset="1" stopColor="#ec4899" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-12 leading-relaxed">
          On-chain payments, identities, and DeFi for AI agents.
          <br className="hidden md:block" />
          Starting with{" "}
          <span className="text-red-400 font-medium">TRON</span> &amp;{" "}
          <span className="text-amber-400 font-medium">BNB Chain</span> —
          expanding to all chains.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#"
            className="group flex items-center gap-2.5 px-7 py-3.5 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl font-medium text-sm shadow-lg shadow-blue-500/25 transition-all hover:shadow-blue-500/40"
          >
            <Github className="w-4.5 h-4.5" />
            View on GitHub
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href="#"
            className="group flex items-center gap-2.5 px-7 py-3.5 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 rounded-xl font-medium text-sm backdrop-blur-sm transition-all"
          >
            <BookOpen className="w-4.5 h-4.5" />
            Read the Docs
          </a>
        </div>

        {/* Chain logos */}
        <div className="flex items-center justify-center gap-8 mt-16 opacity-50">
          <div className="flex items-center gap-2 text-slate-500 text-sm">
            <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center text-[10px] font-bold text-red-400">
              T
            </div>
            TRON
          </div>
          <div className="w-px h-4 bg-slate-700" />
          <div className="flex items-center gap-2 text-slate-500 text-sm">
            <div className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center text-[10px] font-bold text-amber-400">
              B
            </div>
            BNB Chain
          </div>
          <div className="w-px h-4 bg-slate-700" />
          <div className="flex items-center gap-2 text-slate-500 text-sm">
            <div className="w-6 h-6 rounded-full bg-slate-500/20 flex items-center justify-center text-[10px] font-bold text-slate-400">
              +
            </div>
            More Soon
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
