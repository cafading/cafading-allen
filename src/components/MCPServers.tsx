"use client";

import { Github, BookOpen, ExternalLink } from "lucide-react";

const servers = [
  {
    name: "TRON-MCP-Server",
    description:
      "Core TRON blockchain operations — transfers, balance queries, contract calls, and account management for AI agents.",
    tags: ["Transfer", "Balance", "Contract", "Account"],
    color: "from-red-500 to-rose-600",
    iconBg: "bg-red-50",
    iconColor: "text-red-500",
    tagColor: "bg-red-50 text-red-600",
  },
  {
    name: "SUK-MCP-Server",
    description:
      "SunSwap DEX integration — token swaps, liquidity management, price queries, and pool analytics for AI agents.",
    tags: ["Swap", "Liquidity", "Price", "Pools"],
    color: "from-orange-500 to-amber-600",
    iconBg: "bg-orange-50",
    iconColor: "text-orange-500",
    tagColor: "bg-orange-50 text-orange-600",
  },
  {
    name: "JustLend-MCP-Server",
    description:
      "JustLend protocol integration — lending, borrowing, deposit management, and yield optimization for AI agents.",
    tags: ["Lend", "Borrow", "Deposit", "Yield"],
    color: "from-blue-500 to-indigo-600",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-500",
    tagColor: "bg-blue-50 text-blue-600",
  },
  {
    name: "TronScan-MCP-Server",
    description:
      "TronScan explorer integration — on-chain data queries, transaction tracking, statistics analytics, and token info for AI agents.",
    tags: ["Query", "Tracking", "Analytics", "Tokens"],
    color: "from-emerald-500 to-teal-600",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-500",
    tagColor: "bg-emerald-50 text-emerald-600",
  },
];

export default function MCPServers() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            MCP Server Ecosystem
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Ready-to-use MCP servers that let AI agents interact with TRON DeFi
            protocols — plug in and go.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {servers.map((server) => (
            <div
              key={server.name}
              className="group bg-white rounded-2xl border border-gray-100 p-6 card-hover shadow-sm hover:shadow-lg"
            >
              <div className="flex items-start gap-4 mb-4">
                <div
                  className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${server.color} flex items-center justify-center shadow-md shrink-0`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-6 h-6 text-white"
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
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {server.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                    {server.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-5">
                {server.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`px-2.5 py-1 rounded-md text-[11px] font-semibold ${server.tagColor}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <a
                  href="#"
                  className="flex items-center gap-1.5 text-xs font-medium text-gray-500 hover:text-gray-900 transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  GitHub
                </a>
                <a
                  href="#"
                  className="flex items-center gap-1.5 text-xs font-medium text-gray-500 hover:text-gray-900 transition-colors"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  Docs
                </a>
                <a
                  href="#"
                  className="flex items-center gap-1.5 text-xs font-medium text-gray-500 hover:text-blue-600 transition-colors ml-auto"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
