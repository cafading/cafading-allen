"use client";

import { Puzzle, CreditCard, UserCheck, Layers } from "lucide-react";

export default function FeatureOpenClaw() {
  return (
    <section className="py-24 px-6 bg-gray-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <div className="inline-flex items-center gap-2 text-sm font-mono text-blue-500 mb-4">
              <span className="w-6 h-px bg-blue-500" />
              04
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Drop-in OpenClaw
              <br />
              Integration
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              An extension that gives any OpenClaw agent full banking
              capabilities — payments, identities, DeFi — out of the box.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: Puzzle, label: "Plug & Play" },
                { icon: Layers, label: "Modular" },
              ].map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-gray-100 text-sm font-medium text-gray-700 shadow-sm"
                >
                  <Icon className="w-4 h-4 text-indigo-500" />
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Integration Diagram */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-indigo-100/50 to-purple-100/50 rounded-3xl blur-2xl" />
            <div className="relative">
              {/* Central hub */}
              <div className="flex items-center justify-center">
                <div className="relative">
                  {/* Connection lines using SVG */}
                  <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 400 320"
                    fill="none"
                  >
                    {/* Lines from center to outer nodes */}
                    <line
                      x1="200"
                      y1="160"
                      x2="60"
                      y2="60"
                      stroke="#c7d2fe"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                    />
                    <line
                      x1="200"
                      y1="160"
                      x2="340"
                      y2="60"
                      stroke="#c7d2fe"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                    />
                    <line
                      x1="200"
                      y1="160"
                      x2="60"
                      y2="260"
                      stroke="#c7d2fe"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                    />
                    <line
                      x1="200"
                      y1="160"
                      x2="340"
                      y2="260"
                      stroke="#c7d2fe"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                    />
                    {/* Animated dots on lines */}
                    <circle r="3" fill="#6366f1">
                      <animateMotion
                        dur="3s"
                        repeatCount="indefinite"
                        path="M200,160 L60,60"
                      />
                    </circle>
                    <circle r="3" fill="#6366f1">
                      <animateMotion
                        dur="3s"
                        repeatCount="indefinite"
                        path="M200,160 L340,60"
                      />
                    </circle>
                    <circle r="3" fill="#6366f1">
                      <animateMotion
                        dur="3s"
                        repeatCount="indefinite"
                        path="M200,160 L60,260"
                      />
                    </circle>
                    <circle r="3" fill="#6366f1">
                      <animateMotion
                        dur="3s"
                        repeatCount="indefinite"
                        path="M200,160 L340,260"
                      />
                    </circle>
                  </svg>

                  {/* Grid layout for the diagram */}
                  <div className="w-[400px] h-[320px] relative">
                    {/* Top-left: OpenClaw */}
                    <div className="absolute left-0 top-0 w-28">
                      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-3 text-center card-hover">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mx-auto mb-2 shadow-md">
                          <Puzzle className="w-5 h-5 text-white" />
                        </div>
                        <div className="text-xs font-bold text-gray-900">
                          OpenClaw
                        </div>
                        <div className="text-[9px] text-gray-400">
                          AI Agent
                        </div>
                      </div>
                    </div>

                    {/* Top-right: Extension */}
                    <div className="absolute right-0 top-0 w-28">
                      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-3 text-center card-hover">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-600 flex items-center justify-center mx-auto mb-2 shadow-md">
                          <Layers className="w-5 h-5 text-white" />
                        </div>
                        <div className="text-xs font-bold text-gray-900">
                          Extension
                        </div>
                        <div className="text-[9px] text-gray-400">Plugin</div>
                      </div>
                    </div>

                    {/* Center: Bank of AI */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-36">
                      <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-xl p-4 text-center animate-pulse-glow">
                        <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mx-auto mb-2 backdrop-blur-sm">
                          <svg
                            viewBox="0 0 32 32"
                            className="w-7 h-7"
                            fill="none"
                          >
                            <path
                              d="M16 2L28 28H4L16 2Z"
                              fill="white"
                              opacity="0.9"
                            />
                            <path
                              d="M16 10L22 24H10L16 10Z"
                              fill="#6366f1"
                              opacity="0.6"
                            />
                          </svg>
                        </div>
                        <div className="text-xs font-bold text-white">
                          Bank of AI
                        </div>
                        <div className="text-[9px] text-blue-200">
                          Core Engine
                        </div>
                      </div>
                    </div>

                    {/* Bottom-left: Payments */}
                    <div className="absolute left-0 bottom-0 w-28">
                      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-3 text-center card-hover">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mx-auto mb-2 shadow-md">
                          <CreditCard className="w-5 h-5 text-white" />
                        </div>
                        <div className="text-xs font-bold text-gray-900">
                          Payments
                        </div>
                        <div className="text-[9px] text-gray-400">x402</div>
                      </div>
                    </div>

                    {/* Bottom-right: Identities */}
                    <div className="absolute right-0 bottom-0 w-28">
                      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-3 text-center card-hover">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mx-auto mb-2 shadow-md">
                          <UserCheck className="w-5 h-5 text-white" />
                        </div>
                        <div className="text-xs font-bold text-gray-900">
                          Identities
                        </div>
                        <div className="text-[9px] text-gray-400">DeFi</div>
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
