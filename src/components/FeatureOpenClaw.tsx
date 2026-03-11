"use client";

const nodes = [
  { label: "OpenClaw", sub: "AI Agent", x: "left-0 top-0", gradient: "from-indigo-500 to-purple-600" },
  { label: "Extension", sub: "Plugin", x: "right-0 top-0", gradient: "from-violet-500 to-fuchsia-600" },
  { label: "Payments", sub: "x402", x: "left-0 bottom-0", gradient: "from-emerald-500 to-teal-600" },
  { label: "Identities", sub: "DeFi", x: "right-0 bottom-0", gradient: "from-amber-500 to-orange-600" },
];

const lines = [
  { x2: 55, y2: 55 },
  { x2: 345, y2: 55 },
  { x2: 55, y2: 245 },
  { x2: 345, y2: 245 },
];

export default function FeatureOpenClaw() {
  return (
    <section className="py-28 px-6">
      <div className="section-line" />
      <div className="max-w-7xl mx-auto pt-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="flex justify-center">
              <div className="relative w-[400px] h-[300px]">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300" fill="none">
                  {lines.map((l, i) => (
                    <line key={i} x1="200" y1="150" x2={l.x2} y2={l.y2} stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="4 4" />
                  ))}
                </svg>

                {nodes.map((n) => (
                  <div key={n.label} className={`absolute ${n.x} w-[100px]`}>
                    <div className="glass rounded-xl p-3 text-center">
                      <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${n.gradient} flex items-center justify-center mx-auto mb-2`}>
                        <span className="text-white text-[11px] font-bold">{n.label[0]}</span>
                      </div>
                      <div className="text-[11px] font-semibold text-white">{n.label}</div>
                      <div className="text-[9px] text-zinc-500">{n.sub}</div>
                    </div>
                  </div>
                ))}

                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120px]">
                  <div className="bg-gradient-to-br from-blue-500/90 to-indigo-600/90 rounded-xl p-4 text-center border border-white/10">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 mx-auto mb-1.5" fill="none">
                      <path d="M12 2L22 22H2L12 2Z" fill="white" opacity="0.9" />
                      <path d="M12 9L17 20H7L12 9Z" fill="#6366f1" opacity="0.4" />
                    </svg>
                    <div className="text-[11px] font-bold text-white">Bank of AI</div>
                    <div className="text-[9px] text-blue-200/70">Core</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-sm font-mono text-zinc-500 mb-4 block">04</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Drop-in OpenClaw Integration
            </h2>
            <p className="text-zinc-400 text-base leading-relaxed mb-6 max-w-md">
              An extension that gives any OpenClaw agent full banking
              capabilities — payments, identities, DeFi — out of the box.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Plug & Play", "Modular"].map((t) => (
                <span key={t} className="px-3 py-1.5 rounded-md glass text-xs font-medium text-zinc-300">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
