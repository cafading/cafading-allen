"use client";

import { TrendingUp, ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function FeatureAsset() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <div className="inline-flex items-center gap-2 text-sm font-mono text-blue-500 mb-4">
              <span className="w-6 h-px bg-blue-500" />
              03
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              On-chain Asset
              <br />
              Management
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              AI agents autonomously lend, swap, and earn yield via MCP
              toolkits and SDKs — plugged into the leading DeFi protocols.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                {
                  label: "JustLend",
                  color: "bg-blue-50 text-blue-700 border-blue-100",
                },
                {
                  label: "SunSwap",
                  color: "bg-orange-50 text-orange-700 border-orange-100",
                },
                {
                  label: "PancakeSwap",
                  color: "bg-cyan-50 text-cyan-700 border-cyan-100",
                },
                {
                  label: "Extra",
                  color: "bg-purple-50 text-purple-700 border-purple-100",
                },
              ].map(({ label, color }) => (
                <span
                  key={label}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border ${color}`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-current opacity-50" />
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Asset Dashboard Illustration */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-emerald-100/50 to-blue-100/50 rounded-3xl blur-2xl" />
            <div className="relative bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              {/* Header */}
              <div className="p-5 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-1">
                      Portfolio Value
                    </div>
                    <div className="text-2xl font-bold text-gray-900">
                      $24,892.54
                    </div>
                  </div>
                  <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-semibold">
                    <ArrowUpRight className="w-3 h-3" />
                    +12.4%
                  </div>
                </div>
              </div>

              {/* Mini chart */}
              <div className="px-5 py-4 border-b border-gray-100">
                <svg
                  viewBox="0 0 400 80"
                  className="w-full h-16"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient
                      id="chart-fill"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#10b981" stopOpacity="0.15" />
                      <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0 60 Q50 55 100 40 T200 30 T300 20 T400 15 V80 H0 Z"
                    fill="url(#chart-fill)"
                  />
                  <path
                    d="M0 60 Q50 55 100 40 T200 30 T300 20 T400 15"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <circle cx="400" cy="15" r="3" fill="#10b981" />
                </svg>
              </div>

              {/* Asset list */}
              <div className="p-5 space-y-3">
                {[
                  {
                    name: "USDT",
                    chain: "TRON",
                    amount: "15,200.00",
                    change: "+2.1%",
                    up: true,
                    color: "bg-emerald-500",
                  },
                  {
                    name: "TRX",
                    chain: "TRON",
                    amount: "4,892.30",
                    change: "+8.5%",
                    up: true,
                    color: "bg-red-500",
                  },
                  {
                    name: "BNB",
                    chain: "BSC",
                    amount: "3,100.24",
                    change: "-1.2%",
                    up: false,
                    color: "bg-amber-500",
                  },
                  {
                    name: "USDC",
                    chain: "BSC",
                    amount: "1,700.00",
                    change: "+0.1%",
                    up: true,
                    color: "bg-blue-500",
                  },
                ].map((asset) => (
                  <div
                    key={asset.name + asset.chain}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-lg ${asset.color} flex items-center justify-center text-white text-xs font-bold shadow-sm`}
                      >
                        {asset.name[0]}
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-900">
                          {asset.name}
                        </div>
                        <div className="text-[10px] text-gray-400">
                          {asset.chain}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-gray-900">
                        ${asset.amount}
                      </div>
                      <div
                        className={`text-[10px] font-medium flex items-center gap-0.5 justify-end ${asset.up ? "text-emerald-500" : "text-red-500"}`}
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

              {/* Floating yield badge */}
              <div className="absolute -right-4 top-12 bg-white rounded-xl shadow-lg px-3 py-2 animate-float border border-gray-100">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-emerald-500" />
                  <div className="text-xs">
                    <div className="font-semibold text-gray-900">APY 8.2%</div>
                    <div className="text-gray-400">JustLend</div>
                  </div>
                </div>
              </div>

              {/* Floating swap badge */}
              <div className="absolute -left-6 bottom-16 bg-white rounded-xl shadow-lg px-3 py-2 animate-float-delayed border border-gray-100">
                <div className="flex items-center gap-2">
                  <svg
                    viewBox="0 0 16 16"
                    className="w-4 h-4 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M4 2v12M12 14V2M4 6l-2-2 2-2M12 10l2 2-2 2" />
                  </svg>
                  <span className="text-xs font-medium text-gray-700">
                    Auto Swap
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
