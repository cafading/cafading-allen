"use client";

import { Github, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-14">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                <path d="M12 2L22 22H2L12 2Z" fill="url(#fg)" />
                <path d="M12 9L17 20H7L12 9Z" fill="white" opacity="0.4" />
                <defs><linearGradient id="fg" x1="2" y1="22" x2="22" y2="2"><stop stopColor="#3b82f6" /><stop offset="1" stopColor="#8b5cf6" /></linearGradient></defs>
              </svg>
              <span className="text-sm font-bold text-white">BANK OF AI</span>
            </div>
            <p className="text-[13px] text-zinc-500 leading-relaxed">On-chain payments, identities, and DeFi for AI agents.</p>
          </div>
          {[
            { title: "Product", links: ["x402 Payments", "On-chain Identity", "Asset Management", "OpenClaw Extension"] },
            { title: "Developers", links: ["Documentation", "MCP Servers", "SDK Reference", "API Guide"] },
            { title: "Community", links: ["GitHub", "Discord", "Twitter", "Blog"] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="text-[11px] font-semibold uppercase tracking-wider text-zinc-600 mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}><a href="#" className="text-[13px] text-zinc-500 hover:text-white transition-colors">{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-6 border-t border-white/[0.04] flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-[13px] text-zinc-600">© 2025 Bank of AI. All rights reserved.</span>
          <div className="flex gap-1">
            <a href="#" className="p-2 rounded-md hover:bg-white/[0.04] transition-colors"><Github className="w-4 h-4 text-zinc-600 hover:text-white" /></a>
            <a href="#" className="p-2 rounded-md hover:bg-white/[0.04] transition-colors"><Twitter className="w-4 h-4 text-zinc-600 hover:text-white" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
