"use client";

import { Github, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
                <path
                  d="M16 2L28 28H4L16 2Z"
                  fill="url(#footer-logo-grad)"
                />
                <path
                  d="M16 10L22 24H10L16 10Z"
                  fill="white"
                  opacity="0.3"
                />
                <defs>
                  <linearGradient
                    id="footer-logo-grad"
                    x1="4"
                    y1="28"
                    x2="28"
                    y2="2"
                  >
                    <stop stopColor="#3b82f6" />
                    <stop offset="1" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="text-base font-bold tracking-tight">
                BANK OF AI
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              On-chain payments, identities, and DeFi for AI agents.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-4">
              Product
            </h4>
            <ul className="space-y-3">
              {["x402 Payments", "On-chain Identity", "Asset Management", "OpenClaw Extension"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-slate-400 hover:text-white transition-colors"
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
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-4">
              Developers
            </h4>
            <ul className="space-y-3">
              {["Documentation", "MCP Servers", "SDK Reference", "API Guide"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-slate-400 hover:text-white transition-colors"
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
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-4">
              Community
            </h4>
            <ul className="space-y-3">
              {["GitHub", "Discord", "Twitter", "Blog"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-slate-500">
            © 2026 Bank of AI. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="p-2 rounded-lg hover:bg-slate-800 transition-colors"
            >
              <Github className="w-4 h-4 text-slate-500 hover:text-white" />
            </a>
            <a
              href="#"
              className="p-2 rounded-lg hover:bg-slate-800 transition-colors"
            >
              <Twitter className="w-4 h-4 text-slate-500 hover:text-white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
