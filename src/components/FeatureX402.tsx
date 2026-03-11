"use client";

import { Code2, Server, Shield, Zap } from "lucide-react";

export default function FeatureX402() {
  return (
    <section className="relative py-32 px-6">
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left: Text */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-3 text-sm font-mono text-blue-400/80 mb-6">
              <span className="w-8 h-px bg-gradient-to-r from-blue-500 to-transparent" />
              01
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-[1.1]">
              Complete x402
              <br />
              <span className="text-slate-500">Standard Support</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-lg">
              One line of code to accept on-chain payments. Gasless,
              signature-based payments with zero protocol fees — only network costs.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: Code2, label: "Client SDKs" },
                { icon: Server, label: "Server SDKs" },
                { icon: Shield, label: "Facilitator" },
                { icon: Zap, label: "Zero Fees" },
              ].map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl glass-card text-sm font-medium text-slate-300"
                >
                  <Icon className="w-4 h-4 text-blue-400" />
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Code Illustration */}
          <div className="relative animate-slide-in">
            <div className="absolute -inset-8 bg-blue-500/[0.03] rounded-3xl blur-3xl" />
            <div className="relative code-block rounded-2xl overflow-hidden glow-blue">
              {/* Window controls + tabs */}
              <div className="flex items-center gap-0 bg-[#0a0a12] px-4 pt-4 pb-0">
                <div className="flex items-center gap-1.5 mr-6">
                  <span className="w-2.5 h-2.5 rounded-full bg-white/[0.06]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/[0.06]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/[0.06]" />
                </div>
                <button className="px-4 py-2.5 text-xs font-medium text-white bg-white/[0.06] rounded-t-lg border-t border-x border-white/[0.04]">
                  <span className="inline-block w-2 h-2 rounded-full bg-red-400 mr-2 shadow-sm shadow-red-400/50" />
                  TRON
                </button>
                <button className="px-4 py-2.5 text-xs font-medium text-slate-500 hover:text-slate-300 transition-colors">
                  <span className="inline-block w-2 h-2 rounded-full bg-amber-400 mr-2" />
                  BNB Chain
                </button>
              </div>

              {/* Code content */}
              <div className="p-6 font-mono text-[13px] leading-8">
                <div className="text-slate-500 text-xs mb-4">{"// One-line payment with x402"}</div>
                <div>
                  <span className="text-purple-400">import</span>{" "}
                  <span className="text-slate-500">{"{ "}</span>
                  <span className="text-blue-300">payWithX402</span>
                  <span className="text-slate-500">{" }"}</span>{" "}
                  <span className="text-purple-400">from</span>{" "}
                  <span className="text-emerald-400">&apos;@bankofai/sdk&apos;</span>
                </div>
                <div className="h-3" />
                <div>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-blue-300">payment</span>{" "}
                  <span className="text-slate-500">=</span>{" "}
                  <span className="text-purple-400">await</span>{" "}
                  <span className="text-amber-300">payWithX402</span>
                  <span className="text-slate-400">({"{"}</span>
                </div>
                <div className="pl-6">
                  <span className="text-blue-300">chain</span>
                  <span className="text-slate-500">:</span>{" "}
                  <span className="text-emerald-400">&apos;tron&apos;</span>
                  <span className="text-slate-500">,</span>
                </div>
                <div className="pl-6">
                  <span className="text-blue-300">amount</span>
                  <span className="text-slate-500">:</span>{" "}
                  <span className="text-amber-300">10</span>
                  <span className="text-slate-500">,</span>
                </div>
                <div className="pl-6">
                  <span className="text-blue-300">token</span>
                  <span className="text-slate-500">:</span>{" "}
                  <span className="text-emerald-400">&apos;USDT&apos;</span>
                  <span className="text-slate-500">,</span>
                </div>
                <div className="pl-6">
                  <span className="text-blue-300">to</span>
                  <span className="text-slate-500">:</span>{" "}
                  <span className="text-emerald-400">&apos;TXk8r...9Fq&apos;</span>
                </div>
                <div>
                  <span className="text-slate-400">{"})"}</span>
                </div>
                <div className="h-3" />
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400/50" />
                  <span className="text-emerald-400/60 text-xs">
                    ✓ Payment confirmed in 3s
                  </span>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -right-4 top-1/3 glass-card rounded-xl px-4 py-3 animate-float shadow-xl shadow-black/20">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                  <span className="text-emerald-400 text-sm">✓</span>
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">x402</div>
                  <div className="text-[10px] text-slate-500">Standard</div>
                </div>
              </div>
            </div>

            {/* Floating fee badge */}
            <div className="absolute -left-4 bottom-12 glass-card rounded-xl px-4 py-3 animate-float-delayed shadow-xl shadow-black/20">
              <div className="flex items-center gap-2.5">
                <Zap className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-medium text-slate-300">Zero Protocol Fees</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
