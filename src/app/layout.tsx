import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BANK OF AI — On-chain Payments, Identities & DeFi for AI Agents",
  description:
    "On-chain payments, identities, and DeFi for AI agents. Starting with TRON & BNB Chain — expanding to all chains.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-[#06060a] text-slate-200`}
      >
        {children}
      </body>
    </html>
  );
}
