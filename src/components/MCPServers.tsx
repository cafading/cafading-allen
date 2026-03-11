"use client";

import { Github, BookOpen, ExternalLink } from "lucide-react";

const servers = [
  {
    name: "TRON-MCP-Server",
    description:
      "Core TRON blockchain operations — transfers, balance queries, contract calls, and account management for AI agents.",
    tags: ["Transfer", "Balance", "Contract", "Account"],
    gradient: "from-red-500 to-rose-600",
    glowColor: "rgba(239, 68, 68, 0.06)",
    tagColor: "text-red-400 bg-red-500/10 border-red-500/10",
  },
  {
    name: "SUK-MCP-Server",
    description:
      "SunSwap DEX integration — token swaps, liquidity management, price queries, and pool analytics for AI agents.",
    tags: ["Swap", "Liquidity", "Price", "Pools"],
    gradient: "from-orange-500 to-amber-600",
    glowColor: "rgba(249, 115, 22, 0.06)",
    tagColor: "text-orange-400 bg-orange-500/10 border-orange-500/10",
  },
  {
    name: "JustLend-MCP-Server",
    description:
      "JustLend protocol integration — lending, borrowing, deposit management, and yield optimization for AI agents.",
    tags: ["Lend", "Borrow", "Deposit", "Yield"],
    gradient: "from-blue-500 to-indigo-600",
    glowColor: "rgba(59, 130, 246, 0.06)",
    tagColor: "text-blue-400 bg-blue-500/10 border-blue-500/10",
  },
  {
    name: "TronScan-MCP-Server",
    description:
      "TronScan explorer integration — on-chain data queries, transaction tracking, statistics analytics, and token info for AI agents.",
    tags: ["Query", "Tracking", "Analytics", "Tokens"],
    gradient: "from-emerald-500 to-teal-600",
    glowColor: "rgba(16, 185, 129, 0.06)",
    tagColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/10",
  },
];

export default function MCPServers() {
  return (
    <section className="relative py-32 px-6">
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 text-sm font-mono text-cyan-400/80 mb-6">
            <span className="w-8 h-px bg-gradient-to-r from-cyan-500 to-transparent" />
            ECOSYSTEM
            <span className="w-8 h-px bg-gradient-to-l from-cyan-500 to-transparent" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            MCP Server Ecosystem
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Ready-to-use MCP servers that let AI agents interact with TRON DeFi
            protocols — plug in and go.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {servers.map((server) => (
            <div
              key={server.name}
              className="group glass-card-hover rounded-2xl p-6 relative overflow-hidden"
            >
              {/* Subtle glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{ background: `radial-gradient(ellipse at center, ${server.glowColor}, transparent 70%)` }}
              />

              <div className="relative">
                <div className="flex items-start gap-4 mb-5">
                  <div
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${server.gradient} flex items-center justify-center shadow-lg shrink-0`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-5.5 h-5.5 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
                      <path d="M7.5 4.21l4.5 2.6 4.5-2.6" />
                      <path d="M7.5 19.79V14.6L3 12" />
                      <path d="M21 12l-4.5 2.6v5.19" />
                      <path d="M3.27 6.96L12 12.01l8.73-5.05" />
                      <path d="M12 22.08V12" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {server.name}
                    </h3>
                    <p className="text-sm text-slate-400 mt-1.5 leading-relaxed">
                      {server.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-5">
                  {server.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold border ${server.tagColor}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-white/[0.04]">
                  <a
                    href="#"
                    className="flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-white transition-colors duration-200"
                  >
                    <Github className="w-3.5 h-3.5" />
                    GitHub
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-white transition-colors duration-200"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    Docs
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-blue-400 transition-colors duration-200 ml-auto"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
