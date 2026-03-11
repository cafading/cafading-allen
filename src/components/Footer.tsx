"use client";

import { Github, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <svg viewBox="0 0 20 20" fill="none" className="w-3.5 h-3.5">
                  <path d="M10 2L18 18H2L10 2Z" fill="white" opacity="0.9" />
                  <path d="M10 8L14 16H6L10 8Z" fill="#6366f1" opacity="0.5" />
                </svg>
              </div>
              <span className="text-base font-bold tracking-tight text-white">
                BANK OF AI
              </span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">
              On-chain payments, identities, and DeFi for AI agents.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-wider text-slate-600 mb-5">
              Product
            </h4>
            <ul className="space-y-3.5">
              {["x402 Payments", "On-chain Identity", "Asset Management", "OpenClaw Extension"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-slate-500 hover:text-white transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Developers */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-wider text-slate-600 mb-5">
              Developers
            </h4>
            <ul className="space-y-3.5">
              {["Documentation", "MCP Servers", "SDK Reference", "API Guide"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-slate-500 hover:text-white transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-wider text-slate-600 mb-5">
              Community
            </h4>
            <ul className="space-y-3.5">
              {["GitHub", "Discord", "Twitter", "Blog"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-slate-500 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/[0.04] flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-slate-600">
            © 2025 Bank of AI. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <a
              href="#"
              className="p-2.5 rounded-lg hover:bg-white/[0.04] transition-colors duration-200"
            >
              <Github className="w-4 h-4 text-slate-600 hover:text-white transition-colors" />
            </a>
            <a
              href="#"
              className="p-2.5 rounded-lg hover:bg-white/[0.04] transition-colors duration-200"
            >
              <Twitter className="w-4 h-4 text-slate-600 hover:text-white transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
