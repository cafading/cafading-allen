"use client";

import { Send, Bot, User } from "lucide-react";

interface ChatMessage {
  role: "user" | "agent";
  content: string;
  type?: "action" | "status" | "info";
}

const tronMessages: ChatMessage[] = [
  { role: "user", content: "Check TRX Balance" },
  { role: "agent", content: "Current Balance: 4,892 TRX ($489.20)", type: "info" },
  { role: "user", content: "Transfer 10 TRX to Txm...7Kpq" },
  { role: "agent", content: "✓ Sent 10 TRX to Txm...7Kpq", type: "action" },
  { role: "user", content: "Check My USDT Balance" },
  { role: "agent", content: "Current Balance: 15,200 USDT", type: "info" },
];

const bnbMessages: ChatMessage[] = [
  { role: "user", content: "Retrieve Market Data from https://bankofai.io" },
  { role: "agent", content: "← HTTP 402: Payment of $0.01 required", type: "status" },
  { role: "agent", content: "Processing payment to unlock resource...", type: "action" },
  { role: "agent", content: "✓ Payment Confirmed: $0.01 USDT (BNB Chain Mainnet)", type: "action" },
  { role: "agent", content: "Market Update:", type: "info" },
  {
    role: "agent",
    content: "BNB $612.78 | TRX $0.108 | MKR $3,300\nVolume 24h: ↑ Trend Bullish",
    type: "info",
  },
];

function ChatWindow({
  title,
  subtitle,
  messages,
  accentGradient,
}: {
  title: string;
  subtitle: string;
  messages: ChatMessage[];
  accentGradient: string;
}) {
  return (
    <div className="glass-card rounded-2xl overflow-hidden flex flex-col h-full">
      {/* Chat header */}
      <div className="px-5 py-4 border-b border-white/[0.04] flex items-center gap-3">
        <div
          className={`w-10 h-10 rounded-xl bg-gradient-to-br ${accentGradient} flex items-center justify-center shadow-lg`}
        >
          <Bot className="w-5 h-5 text-white" />
        </div>
        <div>
          <div className="text-sm font-bold text-white">{title}</div>
          <div className="text-[10px] text-slate-500">{subtitle}</div>
        </div>
        <div className="ml-auto flex items-center gap-1.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          <span className="text-[10px] text-emerald-400 font-medium">Online</span>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 space-y-3 overflow-y-auto max-h-[360px]">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex items-start gap-2.5 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
          >
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
                msg.role === "user"
                  ? "bg-blue-500/20 border border-blue-500/20"
                  : "bg-white/[0.05] border border-white/[0.06]"
              }`}
            >
              {msg.role === "user" ? (
                <User className="w-3 h-3 text-blue-400" />
              ) : (
                <Bot className="w-3 h-3 text-slate-400" />
              )}
            </div>
            <div
              className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl text-xs leading-relaxed whitespace-pre-line ${
                msg.role === "user"
                  ? "bg-blue-500/90 text-white rounded-br-sm"
                  : msg.type === "action"
                    ? "bg-emerald-500/10 text-emerald-300 border border-emerald-500/15 rounded-bl-sm"
                    : msg.type === "status"
                      ? "bg-amber-500/10 text-amber-300 border border-amber-500/15 rounded-bl-sm"
                      : "bg-white/[0.04] text-slate-300 border border-white/[0.04] rounded-bl-sm"
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-4 border-t border-white/[0.04]">
        <div className="flex items-center gap-2 bg-white/[0.03] rounded-xl px-4 py-2.5 border border-white/[0.04]">
          <input
            type="text"
            placeholder="Message..."
            className="flex-1 bg-transparent text-sm text-slate-300 placeholder-slate-600 outline-none"
            readOnly
          />
          <button className="w-8 h-8 rounded-lg bg-blue-500/80 hover:bg-blue-500 flex items-center justify-center transition-colors">
            <Send className="w-3.5 h-3.5 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function LiveDemo() {
  return (
    <section className="relative py-32 px-6">
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-card text-sm text-blue-300 font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400" />
            </span>
            Interactive Preview
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Live Demo
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            OpenClaw + BANK OF AI — real interactions on TRON and BNB Chain.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <ChatWindow
            title="BANK OF AI Agent — TRON"
            subtitle="TRON Network Operations"
            messages={tronMessages}
            accentGradient="from-red-500 to-rose-600"
          />
          <ChatWindow
            title="BANK OF AI Agent — BNB Chain"
            subtitle="BNB Chain Market Data"
            messages={bnbMessages}
            accentGradient="from-amber-500 to-orange-600"
          />
        </div>
      </div>
    </section>
  );
}
