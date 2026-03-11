"use client";

import { Puzzle, CreditCard, UserCheck, Layers, Sparkles } from "lucide-react";

export default function FeatureOpenClaw() {
  return (
    <section className="relative py-32 px-6">
      <div className="absolute inset-0 mesh-gradient opacity-40" />
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left: Text */}
          <div>
            <div className="inline-flex items-center gap-3 text-sm font-mono text-indigo-400/80 mb-6">
              <span className="w-8 h-px bg-gradient-to-r from-indigo-500 to-transparent" />
              04
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-[1.1]">
              Drop-in OpenClaw
              <br />
              <span className="text-slate-500">Integration</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-lg">
              An extension that gives any OpenClaw agent full banking
              capabilities — payments, identities, DeFi — out of the box.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: Puzzle, label: "Plug & Play" },
                { icon: Layers, label: "Modular" },
                { icon: Sparkles, label: "Auto-Config" },
              ].map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl glass-card text-sm font-medium text-slate-300"
                >
                  <Icon className="w-4 h-4 text-indigo-400" />
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Integration Diagram */}
          <div className="relative">
            <div className="absolute -inset-8 bg-indigo-500/[0.03] rounded-3xl blur-3xl" />
            <div className="relative">
              <div className="flex items-center justify-center">
                <div className="relative">
                  {/* Connection lines */}
                  <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 400 320"
                    fill="none"
                  >
                    {[
                      { x2: 60, y2: 60 },
                      { x2: 340, y2: 60 },
                      { x2: 60, y2: 260 },
                      { x2: 340, y2: 260 },
                    ].map((line, i) => (
                      <g key={i}>
                        <line
                          x1="200"
                          y1="160"
                          x2={line.x2}
                          y2={line.y2}
                          stroke="url(#line-grad)"
                          strokeWidth="1"
                          strokeDasharray="6 4"
                          className="animate-dash"
                        />
                        <circle r="3" fill="#818cf8" opacity="0.8">
                          <animateMotion
                            dur={`${2.5 + i * 0.5}s`}
                            repeatCount="indefinite"
                            path={`M200,160 L${line.x2},${line.y2}`}
                          />
                        </circle>
                      </g>
                    ))}
                    <defs>
                      <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#6366f1" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#6366f1" stopOpacity="0.1" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <div className="w-[400px] h-[320px] relative">
                    {/* Top-left: OpenClaw */}
                    <div className="absolute left-0 top-0 w-[120px]">
                      <div className="glass-card-hover rounded-2xl p-4 text-center">
                        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mx-auto mb-2.5 shadow-lg shadow-indigo-500/20">
                          <Puzzle className="w-5 h-5 text-white" />
                        </div>
                        <div className="text-xs font-bold text-white">OpenClaw</div>
                        <div className="text-[9px] text-slate-500 mt-0.5">AI Agent</div>
                      </div>
                    </div>

                    {/* Top-right: Extension */}
                    <div className="absolute right-0 top-0 w-[120px]">
                      <div className="glass-card-hover rounded-2xl p-4 text-center">
                        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-600 flex items-center justify-center mx-auto mb-2.5 shadow-lg shadow-violet-500/20">
                          <Layers className="w-5 h-5 text-white" />
                        </div>
                        <div className="text-xs font-bold text-white">Extension</div>
                        <div className="text-[9px] text-slate-500 mt-0.5">Plugin</div>
                      </div>
                    </div>

                    {/* Center: Bank of AI */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[140px]">
                      <div className="bg-gradient-to-br from-blue-500/90 to-indigo-600/90 rounded-2xl p-5 text-center animate-pulse-glow backdrop-blur-sm border border-white/10">
                        <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center mx-auto mb-2.5 backdrop-blur-sm">
                          <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none">
                            <path d="M16 2L28 28H4L16 2Z" fill="white" opacity="0.9" />
                            <path d="M16 10L22 24H10L16 10Z" fill="#6366f1" opacity="0.5" />
                          </svg>
                        </div>
                        <div className="text-xs font-bold text-white">Bank of AI</div>
                        <div className="text-[9px] text-blue-200/80 mt-0.5">Core Engine</div>
                      </div>
                    </div>

                    {/* Bottom-left: Payments */}
                    <div className="absolute left-0 bottom-0 w-[120px]">
                      <div className="glass-card-hover rounded-2xl p-4 text-center">
                        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mx-auto mb-2.5 shadow-lg shadow-emerald-500/20">
                          <CreditCard className="w-5 h-5 text-white" />
                        </div>
                        <div className="text-xs font-bold text-white">Payments</div>
                        <div className="text-[9px] text-slate-500 mt-0.5">x402</div>
                      </div>
                    </div>

                    {/* Bottom-right: Identities */}
                    <div className="absolute right-0 bottom-0 w-[120px]">
                      <div className="glass-card-hover rounded-2xl p-4 text-center">
                        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mx-auto mb-2.5 shadow-lg shadow-amber-500/20">
                          <UserCheck className="w-5 h-5 text-white" />
                        </div>
                        <div className="text-xs font-bold text-white">Identities</div>
                        <div className="text-[9px] text-slate-500 mt-0.5">DeFi</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
