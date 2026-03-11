"use client";

import { Code2, Server, Shield } from "lucide-react";

export default function FeatureX402() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 text-sm font-mono text-blue-500 mb-4">
              <span className="w-6 h-px bg-blue-500" />
              01
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Complete x402
              <br />
              Standard Support
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              One line of code to accept on-chain payments. Currently supports
              TRON and BNB Chain, with more chains coming soon.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: Code2, label: "Client SDKs" },
                { icon: Server, label: "Server SDKs" },
                { icon: Shield, label: "Facilitator" },
              ].map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-50 border border-gray-100 text-sm font-medium text-gray-700"
                >
                  <Icon className="w-4 h-4 text-blue-500" />
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Code Illustration */}
          <div className="relative animate-slide-in">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-100/50 to-purple-100/50 rounded-3xl blur-2xl" />
            <div className="relative code-block rounded-2xl overflow-hidden shadow-2xl">
              {/* Tab bar */}
              <div className="flex items-center gap-0 bg-[#1a1a2e] px-4 pt-3">
                <button className="px-4 py-2 text-xs font-medium text-white bg-[#2d2d3f] rounded-t-lg border-t border-x border-white/5">
                  <span className="inline-block w-2 h-2 rounded-full bg-red-400 mr-2" />
                  TRON
                </button>
                <button className="px-4 py-2 text-xs font-medium text-slate-500 hover:text-slate-300 transition-colors">
                  <span className="inline-block w-2 h-2 rounded-full bg-amber-400 mr-2" />
                  BNB Chain
                </button>
              </div>

              {/* Code content */}
              <div className="p-6 font-mono text-sm leading-7">
                <div>
                  <span className="text-purple-400">import</span>{" "}
                  <span className="text-amber-300">{"{ "}</span>
                  <span className="text-blue-300">payWithX402</span>
                  <span className="text-amber-300">{" }"}</span>{" "}
                  <span className="text-purple-400">from</span>{" "}
                  <span className="text-emerald-400">
                    &apos;@bankofai/sdk&apos;
                  </span>
                </div>
                <div className="mt-4">
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-blue-300">payment</span>{" "}
                  <span className="text-slate-400">=</span>{" "}
                  <span className="text-purple-400">await</span>{" "}
                  <span className="text-amber-300">payWithX402</span>
                  <span className="text-slate-300">({"{"}</span>
                </div>
                <div className="pl-6">
                  <span className="text-blue-300">chain</span>
                  <span className="text-slate-400">:</span>{" "}
                  <span className="text-emerald-400">&apos;tron&apos;</span>
                  <span className="text-slate-400">,</span>
                </div>
                <div className="pl-6">
                  <span className="text-blue-300">amount</span>
                  <span className="text-slate-400">:</span>{" "}
                  <span className="text-amber-300">10</span>
                  <span className="text-slate-400">,</span>
                </div>
                <div className="pl-6">
                  <span className="text-blue-300">token</span>
                  <span className="text-slate-400">:</span>{" "}
                  <span className="text-emerald-400">&apos;USDT&apos;</span>
                  <span className="text-slate-400">,</span>
                </div>
                <div className="pl-6">
                  <span className="text-blue-300">to</span>
                  <span className="text-slate-400">:</span>{" "}
                  <span className="text-emerald-400">
                    &apos;TXk8r...9Fq&apos;
                  </span>
                </div>
                <div>
                  <span className="text-slate-300">{"})"}</span>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="text-emerald-400/70 text-xs">
                    ✓ Payment confirmed in 3s
                  </span>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -right-3 top-1/2 -translate-y-1/2 bg-white rounded-xl shadow-xl px-3 py-2 flex items-center gap-2 animate-float">
                <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                  <span className="text-emerald-600 text-xs">✓</span>
                </div>
                <div className="text-xs">
                  <div className="font-semibold text-gray-900">x402</div>
                  <div className="text-gray-400">Standard</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
