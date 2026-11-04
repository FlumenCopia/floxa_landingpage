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
    <div className="min-h-screen bg-[#020806] text-[#e8f5ef] flex flex-col font-sans selection:bg-[#4dffa0]/30 selection:text-white">
      {/* Sticky Local Nav */}
      <LocalNav />

      {/* Main Page Content */}
      <main className="flex-1 w-full flex flex-col">
        {/* 3. Hero Section: "All yours for the making" + Interactive App Showcase */}
        <HeroSection />

        {/* 4. Highlights Section: "Meet your all-star team of creative apps" */}
        <HighlightsSection />

        {/* 5. Subscriptions / Pricing: "One powerful collection. One smart subscription" */}
        <PricingSection />

        {/* 6. Final Cut Pro: "The ultimate video creation experience" */}
        <FinalCutProSection />

        {/* 7. Pixelmator Pro: "Creative imaging and design. Made for everyone" */}
        <PixelmatorProSection />

        {/* 8. Logic Pro: "The fast track to the final mix. Wherever you go" */}
        <LogicProSection />


        {/* 9. Keynote, Pages, Numbers, Freeform: "Go from idea to done. In a snap" */}
        <ProductivitySection />

        {/* 10. FAQ Accordion: "Questions? Answers." */}
        <FaqSection />
      </main>

      {/* 11. Official Apple Footer */}
      <FooterSection />
    </div>
  );
}
