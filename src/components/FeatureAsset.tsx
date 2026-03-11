"use client";

import { TrendingUp, ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function FeatureAsset() {
  return (
    <section className="relative py-32 px-6">
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left: Text */}
          <div>
            <div className="inline-flex items-center gap-3 text-sm font-mono text-emerald-400/80 mb-6">
              <span className="w-8 h-px bg-gradient-to-r from-emerald-500 to-transparent" />
              03
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-[1.1]">
              On-chain Asset
              <br />
              <span className="text-slate-500">Management</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-lg">
              AI agents autonomously lend, swap, and earn yield via MCP
              toolkits and SDKs — plugged into the leading DeFi protocols.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "JustLend", color: "text-blue-400 border-blue-500/20 bg-blue-500/5" },
                { label: "SunSwap", color: "text-orange-400 border-orange-500/20 bg-orange-500/5" },
                { label: "PancakeSwap", color: "text-cyan-400 border-cyan-500/20 bg-cyan-500/5" },
                { label: "Lista", color: "text-purple-400 border-purple-500/20 bg-purple-500/5" },
              ].map(({ label, color }) => (
                <span
                  key={label}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold border ${color}`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60" />
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Asset Dashboard */}
          <div className="relative">
            <div className="absolute -inset-8 bg-emerald-500/[0.02] rounded-3xl blur-3xl" />
            <div className="relative glass-card rounded-2xl overflow-hidden">
              {/* Header */}
              <div className="p-5 border-b border-white/[0.04]">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-slate-500 font-medium uppercase tracking-wider mb-1">
                      Portfolio Value
                    </div>
                    <div className="text-2xl font-bold text-white">
                      $24,892.54
                    </div>
                  </div>
                  <div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold border border-emerald-500/20">
                    <ArrowUpRight className="w-3 h-3" />
                    +12.4%
                  </div>
                </div>
              </div>

              {/* Mini chart */}
              <div className="px-5 py-4 border-b border-white/[0.04]">
                <svg
                  viewBox="0 0 400 80"
                  className="w-full h-16"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="chart-fill-dark" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#10b981" stopOpacity="0.1" />
                      <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0 60 Q50 55 100 40 T200 30 T300 20 T400 15 V80 H0 Z"
                    fill="url(#chart-fill-dark)"
                  />
                  <path
                    d="M0 60 Q50 55 100 40 T200 30 T300 20 T400 15"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <circle cx="400" cy="15" r="3" fill="#10b981">
                    <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" />
                  </circle>
                </svg>
              </div>

              {/* Asset list */}
              <div className="p-5 space-y-2">
                {[
                  { name: "USDT", chain: "TRON", amount: "15,200.00", change: "+2.1%", up: true, color: "bg-emerald-500" },
                  { name: "TRX", chain: "TRON", amount: "4,892.30", change: "+8.5%", up: true, color: "bg-red-500" },
                  { name: "BNB", chain: "BSC", amount: "3,100.24", change: "-1.2%", up: false, color: "bg-amber-500" },
                  { name: "USDC", chain: "BSC", amount: "1,700.00", change: "+0.1%", up: true, color: "bg-blue-500" },
                ].map((asset) => (
                  <div
                    key={asset.name + asset.chain}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-white/[0.03] transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-lg ${asset.color}/20 flex items-center justify-center text-xs font-bold`}
                        style={{
                          backgroundColor: `color-mix(in srgb, currentColor 10%, transparent)`,
                        }}
                      >
                        <span className={`${asset.color.replace('bg-', 'text-').replace('500', '400')}`}>
                          {asset.name[0]}
                        </span>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white">
                          {asset.name}
                        </div>
                        <div className="text-[10px] text-slate-500">
                          {asset.chain}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-slate-200">
                        ${asset.amount}
                      </div>
                      <div
                        className={`text-[10px] font-medium flex items-center gap-0.5 justify-end ${asset.up ? "text-emerald-400" : "text-red-400"}`}
                      >
                        {asset.up ? (
                          <ArrowUpRight className="w-2.5 h-2.5" />
                        ) : (
                          <ArrowDownRight className="w-2.5 h-2.5" />
                        )}
                        {asset.change}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating yield badge */}
            <div className="absolute -right-4 top-12 glass-card rounded-xl px-4 py-3 animate-float shadow-xl shadow-black/20">
              <div className="flex items-center gap-2.5">
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                <div>
                  <div className="text-xs font-semibold text-white">APY 8.2%</div>
                  <div className="text-[10px] text-slate-500">JustLend</div>
                </div>
              </div>
            </div>

            {/* Floating swap badge */}
            <div className="absolute -left-6 bottom-16 glass-card rounded-xl px-4 py-3 animate-float-delayed shadow-xl shadow-black/20">
              <div className="flex items-center gap-2.5">
                <svg viewBox="0 0 16 16" className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 2v12M12 14V2M4 6l-2-2 2-2M12 10l2 2-2 2" />
                </svg>
                <span className="text-xs font-medium text-slate-300">Auto Swap</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
