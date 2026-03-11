# Bank of AI

On-chain payments, identities, and DeFi for AI agents. Starting with TRON & BNB Chain — expanding to all chains.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page.

## Tech Stack

- **Next.js 16** with App Router
- **Tailwind CSS v4** for styling
- **Lucide React** for icons
- **Framer Motion** for animations
- **TypeScript**

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles & animations
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Landing page
└── components/
    ├── Header.tsx        # Navigation header
    ├── Hero.tsx          # Hero section
    ├── FeatureX402.tsx   # x402 payment standard feature
    ├── FeatureIdentity.tsx   # On-chain identity feature
    ├── FeatureAsset.tsx      # Asset management feature
    ├── FeatureOpenClaw.tsx   # OpenClaw integration feature
    ├── MCPServers.tsx    # MCP Server ecosystem
    ├── LiveDemo.tsx      # Live demo chat windows
    └── Footer.tsx        # Footer
```
