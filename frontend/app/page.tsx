import LocalNav from "../components/navbar/LocalNav";
import HeroSection from "../components/hero/HeroSection";
import HighlightsSection from "../components/highlights/HighlightsSection";
import PricingSection from "../components/pricing/PricingSection";
import FinalCutProSection from "../components/apps/FinalCutProSection";
import PixelmatorProSection from "../components/apps/PixelmatorProSection";
import LogicProSection from "../components/apps/LogicProSection";
import ProductivitySection from "../components/apps/ProductivitySection";
import FaqSection from "../components/faq/FaqSection";
import FooterSection from "../components/footer/FooterSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8FAFB] text-[#0A130E] flex flex-col font-sans selection:bg-[#00E599]/30 selection:text-black">
      {/* Sticky Navigation */}
      <LocalNav />

      {/* Main Page Content */}
      <main className="flex-1 w-full flex flex-col">
        {/* Hero Section (Dark Obsidian Theme with Mint Aurora Mesh) */}
        <HeroSection />

        {/* Highlights Section (Clean Light Theme with Mint Accents) */}
        <HighlightsSection />

        {/* Pricing Section (Clean Light Theme with Featured Green Border) */}
        <PricingSection />

        {/* How It Works Section */}
        <FinalCutProSection />

        {/* Key Features & Interactive Color Experience */}
        <PixelmatorProSection />

        {/* Why FLOXA Section */}
        <LogicProSection />

        {/* Who It's For Section */}
        <ProductivitySection />

        {/* FAQ Accordion Section */}
        <FaqSection />
      </main>

      {/* Elevated CTA Banner & Dark Obsidian Footer matching Reference */}
      <FooterSection />
    </div>
  );
}
