"use client";

import { Fingerprint, ShieldCheck, Key } from "lucide-react";

export default function FeatureIdentity() {
  return (
    <section className="py-24 px-6 bg-gray-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <div className="inline-flex items-center gap-2 text-sm font-mono text-blue-500 mb-4">
              <span className="w-6 h-px bg-blue-500" />
              02
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              On-chain Identity
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              Register and manage AI agent identities on TRON and BNB Chain.
              Built on the ERC-6551 standard for composable accounts.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: Fingerprint, label: "Unique Identity" },
                { icon: ShieldCheck, label: "Verifiable" },
                { icon: Key, label: "Self-Sovereign" },
              ].map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-gray-100 text-sm font-medium text-gray-700 shadow-sm"
                >
                  <Icon className="w-4 h-4 text-purple-500" />
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Identity Card Illustration */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-purple-100/60 to-blue-100/60 rounded-3xl blur-2xl" />
            <div className="relative">
              {/* Main identity card */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-50 to-transparent rounded-bl-full" />

                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center shadow-lg shadow-purple-500/20">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-7 h-7 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      AI Agent #1024
                    </h3>
                    <span className="inline-flex items-center gap-1 text-xs text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full font-medium mt-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      Verified
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  {/* TRON Address */}
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100">
                    <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center shrink-0">
                      <span className="text-red-500 text-xs font-bold">T</span>
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">
                        TRON
                      </div>
                      <div className="text-xs font-mono text-gray-700 truncate">
                        TXk8rLGsKaDeAbhzy3nprBe6kRp9Fq
                      </div>
                    </div>
                  </div>

                  {/* BNB Address */}
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100">
                    <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center shrink-0">
                      <span className="text-amber-600 text-xs font-bold">
                        B
                      </span>
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">
                        BNB Chain
                      </div>
                      <div className="text-xs font-mono text-gray-700 truncate">
                        0x7a3b...e8f2c941d5
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div className="text-xs text-gray-400">ERC-6551 TBA</div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-blue-400" />
                    <div className="w-2 h-2 rounded-full bg-purple-400" />
                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -left-6 top-1/4 bg-white rounded-xl shadow-lg px-3 py-2 animate-float border border-gray-100">
                <div className="flex items-center gap-2">
                  <Fingerprint className="w-4 h-4 text-purple-500" />
                  <span className="text-xs font-medium text-gray-700">
                    DID Registered
                  </span>
                </div>
              </div>

              <div className="absolute -right-4 bottom-8 bg-white rounded-xl shadow-lg px-3 py-2 animate-float-delayed border border-gray-100">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span className="text-xs font-medium text-gray-700">
                    On-chain
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
