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
  {
    role: "user",
    content: "Transfer 10 TRX to Txm...7Kpq",
  },
  {
    role: "agent",
    content: "✓ Sent 10 TRX to Txm...7Kpq",
    type: "action",
  },
  {
    role: "user",
    content: "Check My USDT Balance",
  },
  {
    role: "agent",
    content: "Current Balance: 15,200 USDT",
    type: "info",
  },
];

const bnbMessages: ChatMessage[] = [
  {
    role: "user",
    content: "Retrieve Market Data from https://bankofai.io",
  },
  {
    role: "agent",
    content: "← HTTP 402: Payment of $0.01 required",
    type: "status",
  },
  {
    role: "agent",
    content: "Processing payment to unlock resource...",
    type: "action",
  },
  {
    role: "agent",
    content: "✓ Payment Confirmed: $0.01 USDT (BNB Chain Mainnet)",
    type: "action",
  },
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
  accentColor,
}: {
  title: string;
  subtitle: string;
  messages: ChatMessage[];
  accentColor: string;
}) {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden flex flex-col h-full">
      {/* Chat header */}
      <div
        className={`px-5 py-4 border-b border-gray-100 flex items-center gap-3`}
      >
        <div
          className={`w-10 h-10 rounded-xl bg-gradient-to-br ${accentColor} flex items-center justify-center shadow-md`}
        >
          <Bot className="w-5 h-5 text-white" />
        </div>
        <div>
          <div className="text-sm font-bold text-gray-900">{title}</div>
          <div className="text-[10px] text-gray-400">{subtitle}</div>
        </div>
        <div className="ml-auto flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[10px] text-emerald-600 font-medium">
            Online
          </span>
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
              className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${msg.role === "user" ? "bg-blue-100" : "bg-gray-100"}`}
            >
              {msg.role === "user" ? (
                <User className="w-3 h-3 text-blue-600" />
              ) : (
                <Bot className="w-3 h-3 text-gray-600" />
              )}
            </div>
            <div
              className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl text-xs leading-relaxed whitespace-pre-line ${
                msg.role === "user"
                  ? "bg-blue-500 text-white rounded-br-sm"
                  : msg.type === "action"
                    ? "bg-emerald-50 text-emerald-700 border border-emerald-100 rounded-bl-sm"
                    : msg.type === "status"
                      ? "bg-amber-50 text-amber-700 border border-amber-100 rounded-bl-sm"
                      : "bg-gray-50 text-gray-700 border border-gray-100 rounded-bl-sm"
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-4 border-t border-gray-100">
        <div className="flex items-center gap-2 bg-gray-50 rounded-xl px-4 py-2.5 border border-gray-100">
          <input
            type="text"
            placeholder="Message..."
            className="flex-1 bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none"
            readOnly
          />
          <button className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center hover:bg-blue-600 transition-colors">
            <Send className="w-3.5 h-3.5 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function LiveDemo() {
  return (
    <section className="py-24 px-6 bg-gray-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-sm text-blue-600 font-medium mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            Interactive Preview
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Live Demo
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            OpenClaw + BANK OF AI — real interactions on TRON and BNB Chain.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <ChatWindow
            title="BANK OF AI Agent — TRON"
            subtitle="TRON Network Operations"
            messages={tronMessages}
            accentColor="from-red-500 to-rose-600"
          />
          <ChatWindow
            title="BANK OF AI Agent — BNB Chain"
            subtitle="BNB Chain Market Data"
            messages={bnbMessages}
            accentColor="from-amber-500 to-orange-600"
          />
        </div>
      </div>
    </section>
  );
}
