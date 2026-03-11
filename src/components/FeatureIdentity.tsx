"use client";

export default function FeatureIdentity() {
  return (
    <section className="py-28 px-6">
      <div className="section-line" />
      <div className="max-w-7xl mx-auto pt-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Illustration first on desktop */}
          <div className="order-2 lg:order-1">
            <div className="glass rounded-xl p-6">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </div>
                <div>
                  <div className="text-base font-semibold text-white">AI Agent #1024</div>
                  <div className="inline-flex items-center gap-1.5 text-[11px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full mt-1">
                    <span className="w-1 h-1 rounded-full bg-emerald-400" />
                    Verified
                  </div>
                </div>
              </div>

              <div className="space-y-2.5">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                  <div className="w-8 h-8 rounded-md bg-red-500/10 flex items-center justify-center shrink-0">
                    <span className="text-red-400 text-[11px] font-bold">T</span>
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] text-zinc-500 uppercase tracking-wider">TRON</div>
                    <div className="text-xs font-mono text-zinc-300 truncate">TXk8rLGsKaDeAbhzy3nprBe6kRp9Fq</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                  <div className="w-8 h-8 rounded-md bg-amber-500/10 flex items-center justify-center shrink-0">
                    <span className="text-amber-400 text-[11px] font-bold">B</span>
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] text-zinc-500 uppercase tracking-wider">BNB Chain</div>
                    <div className="text-xs font-mono text-zinc-300 truncate">0x7a3b...e8f2c941d5</div>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/[0.04] flex items-center justify-between">
                <span className="text-[11px] font-mono text-zinc-500">ERC-6551 TBA</span>
                <div className="flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400/50" />
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400/50" />
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/50" />
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <span className="text-sm font-mono text-zinc-500 mb-4 block">02</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              On-chain Identity
            </h2>
            <p className="text-zinc-400 text-base leading-relaxed mb-6 max-w-md">
              Register and manage AI agent identities on TRON and BNB Chain.
              Built on the 8004 standard.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Unique Identity", "Verifiable", "Self-Sovereign"].map((t) => (
                <span key={t} className="px-3 py-1.5 rounded-md glass text-xs font-medium text-zinc-300">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
