"use client";

import { ArrowRight, Github, BookOpen } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-16 min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-[#09090b]" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/[0.04] rounded-full blur-[120px]" />

      <div className="relative w-full max-w-5xl mx-auto px-6 py-24 md:py-32 text-center">
        <div className="animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass text-[13px] text-zinc-400 mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Live on TRON &amp; BNB Chain
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl lg:text-[112px] font-extrabold tracking-tighter text-white leading-none mb-8 animate-fade-in-d1">
          BANK OF <span className="gradient-text">AI</span>
        </h1>

        <p className="max-w-xl mx-auto text-lg text-zinc-400 leading-relaxed mb-12 animate-fade-in-d2">
          On-chain payments, identities, and DeFi for AI agents.
          {" "}Starting with{" "}
          <span className="text-red-400">TRON</span> &amp;{" "}
          <span className="text-amber-400">BNB Chain</span> — expanding to all chains.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 animate-fade-in-d3">
          <a
            href="#"
            className="group flex items-center gap-2 px-6 py-3 bg-white text-zinc-900 rounded-lg font-medium text-sm hover:bg-zinc-100 transition-colors"
          >
            <Github className="w-4 h-4" />
            View on GitHub
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href="#"
            className="flex items-center gap-2 px-6 py-3 glass text-white rounded-lg font-medium text-sm hover:bg-white/[0.06] transition-colors"
          >
            <BookOpen className="w-4 h-4 text-zinc-400" />
            Read the Docs
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#09090b] to-transparent" />
    </section>
  );
}
