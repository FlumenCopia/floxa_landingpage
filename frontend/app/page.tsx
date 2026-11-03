import LocalNav from "../components/navbar/LocalNav";
import HeroSection from "../components/hero/HeroSection";
import ProblemSection from "../components/problem/ProblemSection";
import ExperienceSection from "../components/experience/ExperienceSection";
import HowItWorksSection from "../components/howitworks/HowItWorksSection";
import FeaturesSection from "../components/features/FeaturesSection";
import AudienceSection from "../components/audience/AudienceSection";
import WhyFloxaSection from "../components/whyfloxa/WhyFloxaSection";
import FinalCtaSection from "../components/cta/FinalCtaSection";
import FaqSection from "../components/faq/FaqSection";
import FooterSection from "../components/footer/FooterSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-[#f5f5f7] flex flex-col font-sans selection:bg-[#0071e3]/30">
      {/* Sticky Local Nav */}
      <LocalNav />

      {/* Main Page Content */}
      <main className="flex-1 w-full flex flex-col">
        {/* Section 1: Hero Section */}
        <HeroSection />

        {/* Section 2: The Problem */}
        <ProblemSection />

        {/* Section 3: Introducing FLOXA / The Experience */}
        <ExperienceSection />

        {/* Section 4: How It Works */}
        <HowItWorksSection />

        {/* Section 5: Key Features */}
        <FeaturesSection />

        {/* Section 6: Who Is FLOXA For? */}
        <AudienceSection />

        {/* Section 7: Why FLOXA? */}
        <WhyFloxaSection />

        {/* Section 8: Final Call to Action */}
        <FinalCtaSection />

        {/* Section 9: FAQ Accordion */}
        <FaqSection />
      </main>

      {/* Section 10: Official FLOXA Footer */}
      <FooterSection />
    </div>
  );
}
