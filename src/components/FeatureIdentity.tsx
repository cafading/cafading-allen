"use client";

import { Fingerprint, ShieldCheck, Key } from "lucide-react";

export default function FeatureIdentity() {
  return (
    <section className="relative py-32 px-6">
      <div className="absolute inset-0 mesh-gradient opacity-50" />
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left: Identity Card Illustration */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-8 bg-purple-500/[0.03] rounded-3xl blur-3xl" />
            <div className="relative">
              {/* Main identity card */}
              <div className="glass-card rounded-2xl p-6 relative overflow-hidden glow-purple">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-purple-500/[0.06] to-transparent rounded-bl-full" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-500/[0.04] to-transparent rounded-tr-full" />

                <div className="flex items-start gap-4 mb-6 relative">
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
                    <h3 className="text-lg font-bold text-white">
                      AI Agent #1024
                    </h3>
                    <span className="inline-flex items-center gap-1.5 text-[11px] text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full font-medium mt-1.5 border border-emerald-500/20">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
                      </span>
                      Verified
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  {/* TRON Address */}
                  <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.04] hover:bg-white/[0.05] transition-colors">
                    <div className="w-9 h-9 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0 border border-red-500/10">
                      <span className="text-red-400 text-xs font-bold">T</span>
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">
                        TRON
                      </div>
                      <div className="text-xs font-mono text-slate-300 truncate">
                        TXk8rLGsKaDeAbhzy3nprBe6kRp9Fq
                      </div>
                    </div>
                  </div>

                  {/* BNB Address */}
                  <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.04] hover:bg-white/[0.05] transition-colors">
                    <div className="w-9 h-9 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0 border border-amber-500/10">
                      <span className="text-amber-400 text-xs font-bold">B</span>
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">
                        BNB Chain
                      </div>
                      <div className="text-xs font-mono text-slate-300 truncate">
                        0x7a3b...e8f2c941d5
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-white/[0.04] flex items-center justify-between">
                  <div className="text-xs text-slate-500 font-mono">ERC-6551 TBA</div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-blue-400/60" />
                    <div className="w-2 h-2 rounded-full bg-purple-400/60" />
                    <div className="w-2 h-2 rounded-full bg-emerald-400/60" />
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -left-6 top-1/4 glass-card rounded-xl px-4 py-3 animate-float shadow-xl shadow-black/20">
                <div className="flex items-center gap-2">
                  <Fingerprint className="w-4 h-4 text-purple-400" />
                  <span className="text-xs font-medium text-slate-300">
                    DID Registered
                  </span>
                </div>
              </div>

              <div className="absolute -right-4 bottom-8 glass-card rounded-xl px-4 py-3 animate-float-delayed shadow-xl shadow-black/20">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-medium text-slate-300">On-chain</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Text */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-3 text-sm font-mono text-purple-400/80 mb-6">
              <span className="w-8 h-px bg-gradient-to-r from-purple-500 to-transparent" />
              02
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-[1.1]">
              On-chain
              <br />
              <span className="text-slate-500">Identity</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-lg">
              Register and manage AI agent identities on TRON and BNB Chain.
              Built on the ERC-6551 standard with NFT-based ownership and
              built-in reputation systems.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: Fingerprint, label: "Unique Identity" },
                { icon: ShieldCheck, label: "Verifiable" },
                { icon: Key, label: "Self-Sovereign" },
              ].map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl glass-card text-sm font-medium text-slate-300"
                >
                  <Icon className="w-4 h-4 text-purple-400" />
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
