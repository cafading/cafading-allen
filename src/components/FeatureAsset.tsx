"use client";

import { ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function FeatureAsset() {
  const assets = [
    { name: "USDT", chain: "TRON", amount: "15,200.00", change: "+2.1%", up: true, color: "bg-emerald-500/15 text-emerald-400" },
    { name: "TRX", chain: "TRON", amount: "4,892.30", change: "+8.5%", up: true, color: "bg-red-500/15 text-red-400" },
    { name: "BNB", chain: "BSC", amount: "3,100.24", change: "-1.2%", up: false, color: "bg-amber-500/15 text-amber-400" },
    { name: "USDC", chain: "BSC", amount: "1,700.00", change: "+0.1%", up: true, color: "bg-blue-500/15 text-blue-400" },
  ];

  return (
    <section className="py-28 px-6">
      <div className="section-line" />
      <div className="max-w-7xl mx-auto pt-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-mono text-zinc-500 mb-4 block">03</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              On-chain Asset Management
            </h2>
            <p className="text-zinc-400 text-base leading-relaxed mb-6 max-w-md">
              AI agents autonomously lend, swap, and earn yield via MCP Server
              and Skills — plugged into the leading DeFi protocols.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                { label: "JustLend", c: "text-blue-400 border-blue-500/15 bg-blue-500/5" },
                { label: "SunSwap", c: "text-orange-400 border-orange-500/15 bg-orange-500/5" },
                { label: "PancakeSwap", c: "text-cyan-400 border-cyan-500/15 bg-cyan-500/5" },
                { label: "Lista", c: "text-purple-400 border-purple-500/15 bg-purple-500/5" },
              ].map(({ label, c }) => (
                <span key={label} className={`px-3 py-1 rounded-full text-xs font-medium border ${c}`}>{label}</span>
              ))}
            </div>
          </div>

          <div className="glass rounded-xl overflow-hidden">
            <div className="p-5 border-b border-white/[0.04]">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-zinc-500 uppercase tracking-wider mb-1">Portfolio Value</div>
                  <div className="text-2xl font-bold text-white">$24,892.54</div>
                </div>
                <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium">
                  <ArrowUpRight className="w-3 h-3" /> +12.4%
                </span>
              </div>
            </div>
            <div className="px-5 py-3 border-b border-white/[0.04]">
              <svg viewBox="0 0 400 60" className="w-full h-12" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="af" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.08" />
                    <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M0 45Q50 42 100 32T200 24T300 16T400 12V60H0Z" fill="url(#af)" />
                <path d="M0 45Q50 42 100 32T200 24T300 16T400 12" fill="none" stroke="#10b981" strokeWidth="1.5" />
              </svg>
            </div>
            <div className="p-4 space-y-1">
              {assets.map((a) => (
                <div key={a.name + a.chain} className="flex items-center justify-between py-2.5 px-2 rounded-lg hover:bg-white/[0.02] transition-colors">
                  <div className="flex items-center gap-3">
                    <div className={`w-7 h-7 rounded-md flex items-center justify-center text-[11px] font-bold ${a.color}`}>{a.name[0]}</div>
                    <div>
                      <div className="text-sm font-medium text-white">{a.name}</div>
                      <div className="text-[10px] text-zinc-500">{a.chain}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-zinc-200">${a.amount}</div>
                    <div className={`text-[10px] font-medium flex items-center gap-0.5 justify-end ${a.up ? "text-emerald-400" : "text-red-400"}`}>
                      {a.up ? <ArrowUpRight className="w-2.5 h-2.5" /> : <ArrowDownRight className="w-2.5 h-2.5" />}
                      {a.change}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
