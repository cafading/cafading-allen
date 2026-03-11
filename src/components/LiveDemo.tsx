"use client";

import { Send, Bot, User } from "lucide-react";

interface Msg { role: "user" | "agent"; content: string; type?: "action" | "status" | "info"; }

const tronMsgs: Msg[] = [
  { role: "user", content: "Check TRX Balance" },
  { role: "agent", content: "Current Balance: 4,892 TRX ($489.20)", type: "info" },
  { role: "user", content: "Transfer 10 TRX to Txm...7Kpq" },
  { role: "agent", content: "✓ Sent 10 TRX to Txm...7Kpq", type: "action" },
  { role: "user", content: "Check My USDT Balance" },
  { role: "agent", content: "Current Balance: 15,200 USDT", type: "info" },
];

const bnbMsgs: Msg[] = [
  { role: "user", content: "Retrieve Market Data from https://bankofai.io" },
  { role: "agent", content: "← HTTP 402: Payment of $0.01 required", type: "status" },
  { role: "agent", content: "Processing payment to unlock resource...", type: "action" },
  { role: "agent", content: "✓ Payment Confirmed: $0.01 USDT (BNB Chain)", type: "action" },
  { role: "agent", content: "BNB $612.78 | TRX $0.108 | MKR $3,300\nVolume 24h: ↑ Trend Bullish", type: "info" },
];

function Chat({ title, subtitle, messages, gradient }: { title: string; subtitle: string; messages: Msg[]; gradient: string }) {
  return (
    <div className="glass rounded-xl overflow-hidden flex flex-col">
      <div className="px-4 py-3.5 border-b border-white/[0.04] flex items-center gap-3">
        <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center`}>
          <Bot className="w-4 h-4 text-white" />
        </div>
        <div>
          <div className="text-[13px] font-semibold text-white">{title}</div>
          <div className="text-[10px] text-zinc-500">{subtitle}</div>
        </div>
        <div className="ml-auto flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span className="text-[10px] text-emerald-400/80">Online</span>
        </div>
      </div>

      <div className="flex-1 p-3.5 space-y-2.5 max-h-[320px] overflow-y-auto">
        {messages.map((m, i) => (
          <div key={i} className={`flex items-start gap-2 ${m.role === "user" ? "flex-row-reverse" : ""}`}>
            <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${m.role === "user" ? "bg-blue-500/15" : "bg-white/[0.04]"}`}>
              {m.role === "user" ? <User className="w-2.5 h-2.5 text-blue-400" /> : <Bot className="w-2.5 h-2.5 text-zinc-500" />}
            </div>
            <div className={`max-w-[80%] px-3 py-2 rounded-xl text-[12px] leading-relaxed whitespace-pre-line ${
              m.role === "user" ? "bg-blue-500/90 text-white rounded-br-sm"
                : m.type === "action" ? "bg-emerald-500/8 text-emerald-300 border border-emerald-500/10 rounded-bl-sm"
                : m.type === "status" ? "bg-amber-500/8 text-amber-300 border border-amber-500/10 rounded-bl-sm"
                : "bg-white/[0.03] text-zinc-300 border border-white/[0.04] rounded-bl-sm"
            }`}>{m.content}</div>
          </div>
        ))}
      </div>

      <div className="p-3.5 border-t border-white/[0.04]">
        <div className="flex items-center gap-2 bg-white/[0.02] rounded-lg px-3 py-2 border border-white/[0.04]">
          <input type="text" placeholder="Message..." className="flex-1 bg-transparent text-sm text-zinc-300 placeholder-zinc-600 outline-none" readOnly />
          <button className="w-7 h-7 rounded-md bg-blue-500/70 flex items-center justify-center">
            <Send className="w-3 h-3 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function LiveDemo() {
  return (
    <section className="py-28 px-6">
      <div className="section-line" />
      <div className="max-w-7xl mx-auto pt-28">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Live Demo</h2>
          <p className="text-zinc-400 text-base max-w-lg mx-auto">
            OpenClaw + BANK OF AI — real interactions on TRON and BNB Chain.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          <Chat title="TRON Agent" subtitle="TRON Network" messages={tronMsgs} gradient="from-red-500 to-rose-600" />
          <Chat title="BNB Chain Agent" subtitle="BNB Chain Market" messages={bnbMsgs} gradient="from-amber-500 to-orange-600" />
        </div>
      </div>
    </section>
  );
}
