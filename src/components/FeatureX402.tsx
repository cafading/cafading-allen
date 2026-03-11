"use client";

export default function FeatureX402() {
  return (
    <section className="py-28 px-6">
      <div className="section-line" />
      <div className="max-w-7xl mx-auto pt-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-mono text-zinc-500 mb-4 block">01</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Complete x402 Standard Support
            </h2>
            <p className="text-zinc-400 text-base leading-relaxed mb-6 max-w-md">
              One line of code to accept on-chain payments. Currently supports
              TRON and BNB Chain, with more chains coming soon.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Client SDKs", "Server SDKs", "Facilitator"].map((t) => (
                <span key={t} className="px-3 py-1.5 rounded-md glass text-xs font-medium text-zinc-300">{t}</span>
              ))}
            </div>
          </div>

          <div className="code-block rounded-xl overflow-hidden">
            <div className="flex items-center bg-white/[0.02] px-4 py-3 border-b border-white/[0.04]">
              <div className="flex gap-1.5 mr-4">
                <span className="w-2.5 h-2.5 rounded-full bg-white/[0.06]" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/[0.06]" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/[0.06]" />
              </div>
              <span className="text-[11px] text-zinc-500 font-mono">payment.ts</span>
            </div>
            <div className="p-5 font-mono text-[13px] leading-7">
              <div>
                <span className="text-purple-400">import</span>
                <span className="text-zinc-500">{" { "}</span>
                <span className="text-blue-300">payWithX402</span>
                <span className="text-zinc-500">{" } "}</span>
                <span className="text-purple-400">from</span>{" "}
                <span className="text-emerald-400">&apos;@bankofai/sdk&apos;</span>
              </div>
              <div className="h-2" />
              <div>
                <span className="text-purple-400">const</span>{" "}
                <span className="text-blue-300">payment</span>{" "}
                <span className="text-zinc-500">=</span>{" "}
                <span className="text-purple-400">await</span>{" "}
                <span className="text-amber-300">payWithX402</span>
                <span className="text-zinc-400">({"{"}</span>
              </div>
              <div className="pl-5">
                <span className="text-blue-300">chain</span>
                <span className="text-zinc-500">: </span>
                <span className="text-emerald-400">&apos;tron&apos;</span>
                <span className="text-zinc-500">,</span>
              </div>
              <div className="pl-5">
                <span className="text-blue-300">amount</span>
                <span className="text-zinc-500">: </span>
                <span className="text-amber-300">10</span>
                <span className="text-zinc-500">,</span>
              </div>
              <div className="pl-5">
                <span className="text-blue-300">token</span>
                <span className="text-zinc-500">: </span>
                <span className="text-emerald-400">&apos;USDT&apos;</span>
                <span className="text-zinc-500">,</span>
              </div>
              <div className="pl-5">
                <span className="text-blue-300">to</span>
                <span className="text-zinc-500">: </span>
                <span className="text-emerald-400">&apos;TXk8r...9Fq&apos;</span>
              </div>
              <div><span className="text-zinc-400">{"})"}</span></div>
              <div className="h-2" />
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span className="text-emerald-400/60 text-xs">✓ Payment confirmed in 3s</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
