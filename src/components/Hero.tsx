"use client";

import { ArrowRight, Github, BookOpen } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-16 min-h-screen flex items-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-[#06060a]" />
      <div className="absolute inset-0 mesh-gradient" />
      <div className="absolute inset-0 hero-grid opacity-40" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-[15%] w-[500px] h-[500px] bg-blue-600/[0.07] rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-[10%] w-[400px] h-[400px] bg-purple-600/[0.06] rounded-full blur-[100px]" />
      <div className="absolute top-[60%] left-[50%] w-[300px] h-[300px] bg-cyan-500/[0.04] rounded-full blur-[80px]" />

      {/* Floating geometric shapes */}
      <div className="absolute top-32 right-[18%] w-2 h-2 bg-blue-400/40 rotate-45 animate-float" />
      <div className="absolute top-[45%] left-[12%] w-1.5 h-1.5 bg-purple-400/30 rounded-full animate-float-delayed" />
      <div className="absolute bottom-[30%] right-[22%] w-3 h-3 border border-blue-400/20 rotate-12 animate-float-slow" />
      <div className="absolute top-[35%] right-[8%] w-1 h-8 bg-gradient-to-b from-blue-400/20 to-transparent rounded-full animate-float-delayed" />
      <div className="absolute bottom-[40%] left-[8%] w-2 h-2 bg-cyan-400/25 rounded-full animate-float" />

      <div className="relative w-full max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="text-center max-w-4xl mx-auto">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-card text-sm text-slate-300 mb-10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            Live on TRON &amp; BNB Chain
          </div>

          {/* Main heading */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-white mb-8 leading-[0.9]">
            BANK OF
            <br />
            <span className="gradient-text">AI</span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-12 leading-relaxed">
            On-chain payments, identities, and DeFi for AI agents.
            <br className="hidden md:block" />
            Starting with{" "}
            <span className="text-red-400 font-medium">TRON</span> &amp;{" "}
            <span className="text-amber-400 font-medium">BNB Chain</span> —
            expanding to all chains.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <a
              href="#"
              className="group flex items-center gap-2.5 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white rounded-xl font-medium text-sm shadow-xl shadow-blue-500/20 hover:shadow-blue-500/30 transition-all duration-300"
            >
              <Github className="w-4.5 h-4.5" />
              View on GitHub
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
            </a>
            <a
              href="#"
              className="group flex items-center gap-2.5 px-8 py-4 glass-card hover:bg-white/[0.06] text-white rounded-xl font-medium text-sm transition-all duration-300"
            >
              <BookOpen className="w-4.5 h-4.5 text-slate-400" />
              Read the Docs
            </a>
          </div>

          {/* Stats row */}
          <div className="flex items-center justify-center gap-8 md:gap-16">
            {[
              { value: "4", label: "MCP Servers", color: "text-blue-400" },
              { value: "2", label: "Blockchains", color: "text-purple-400" },
              { value: "x402", label: "Standard", color: "text-cyan-400" },
              { value: "ERC-6551", label: "Identity", color: "text-emerald-400" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className={`text-xl md:text-2xl font-bold ${stat.color} mb-1`}>
                  {stat.value}
                </div>
                <div className="text-[11px] md:text-xs text-slate-500 font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Chain badges */}
          <div className="flex items-center justify-center gap-4 mt-16">
            <div className="flex items-center gap-2.5 px-4 py-2 rounded-full glass-card">
              <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center">
                <span className="text-red-400 text-[10px] font-bold">T</span>
              </div>
              <span className="text-sm text-slate-400 font-medium">TRON</span>
            </div>
            <div className="w-px h-4 bg-white/[0.06]" />
            <div className="flex items-center gap-2.5 px-4 py-2 rounded-full glass-card">
              <div className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center">
                <span className="text-amber-400 text-[10px] font-bold">B</span>
              </div>
              <span className="text-sm text-slate-400 font-medium">BNB Chain</span>
            </div>
            <div className="w-px h-4 bg-white/[0.06]" />
            <div className="flex items-center gap-2.5 px-4 py-2 rounded-full glass-card">
              <div className="w-6 h-6 rounded-full bg-slate-500/20 flex items-center justify-center">
                <span className="text-slate-400 text-[10px] font-bold">+</span>
              </div>
              <span className="text-sm text-slate-500 font-medium">More Soon</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#06060a] to-transparent" />
    </section>
  );
}
