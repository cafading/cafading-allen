"use client";

import { Github, BookOpen } from "lucide-react";

const servers = [
  {
    name: "TRON-MCP-Server",
    desc: "Core TRON blockchain operations — transfers, balance queries, contract calls, and account management.",
    tags: ["Transfer", "Balance", "Contract", "Account"],
    color: "text-red-400 bg-red-500/10 border-red-500/10",
    gradient: "from-red-500 to-rose-600",
  },
  {
    name: "SUN-MCP-Server",
    desc: "SunSwap DEX integration — token swaps, liquidity management, price queries, and pool analytics.",
    tags: ["Swap", "Liquidity", "Price", "Pools"],
    color: "text-orange-400 bg-orange-500/10 border-orange-500/10",
    gradient: "from-orange-500 to-amber-600",
  },
  {
    name: "JustLend-MCP-Server",
    desc: "JustLend protocol — lending, borrowing, deposit management, and yield optimization.",
    tags: ["Lend", "Borrow", "Deposit", "Yield"],
    color: "text-blue-400 bg-blue-500/10 border-blue-500/10",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    name: "TronScan-MCP-Server",
    desc: "TronScan explorer — on-chain data queries, transaction tracking, and token info.",
    tags: ["Query", "Tracking", "Analytics", "Tokens"],
    color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/10",
    gradient: "from-emerald-500 to-teal-600",
  },
];

export default function MCPServers() {
  return (
    <section className="py-28 px-6">
      <div className="section-line" />
      <div className="max-w-7xl mx-auto pt-28">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">MCP Server Ecosystem</h2>
          <p className="text-zinc-400 text-base max-w-lg mx-auto">
            Ready-to-use MCP servers for AI agents to interact with TRON DeFi protocols.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {servers.map((s) => (
            <div key={s.name} className="glass rounded-xl p-5 hover:bg-white/[0.04] transition-colors">
              <div className="flex items-start gap-3.5 mb-4">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${s.gradient} flex items-center justify-center shrink-0`}>
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
                    <path d="M3.27 6.96L12 12.01l8.73-5.05" />
                    <path d="M12 22.08V12" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white mb-1">{s.name}</h3>
                  <p className="text-[13px] text-zinc-400 leading-relaxed">{s.desc}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {s.tags.map((tag) => (
                  <span key={tag} className={`px-2 py-0.5 rounded text-[10px] font-semibold border ${s.color}`}>{tag}</span>
                ))}
              </div>
              <div className="flex items-center gap-4 pt-3 border-t border-white/[0.04]">
                <a href="#" className="flex items-center gap-1.5 text-xs text-zinc-500 hover:text-white transition-colors">
                  <Github className="w-3.5 h-3.5" /> GitHub
                </a>
                <a href="#" className="flex items-center gap-1.5 text-xs text-zinc-500 hover:text-white transition-colors">
                  <BookOpen className="w-3.5 h-3.5" /> Docs
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
