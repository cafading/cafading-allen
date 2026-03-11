import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeatureX402 from "@/components/FeatureX402";
import FeatureIdentity from "@/components/FeatureIdentity";
import FeatureAsset from "@/components/FeatureAsset";
import FeatureOpenClaw from "@/components/FeatureOpenClaw";
import MCPServers from "@/components/MCPServers";
import LiveDemo from "@/components/LiveDemo";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeatureX402 />
        <FeatureIdentity />
        <FeatureAsset />
        <FeatureOpenClaw />
        <MCPServers />
        <LiveDemo />
      </main>
      <Footer />
    </>
  );
}
