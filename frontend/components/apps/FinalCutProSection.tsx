"use client";

import React, { useRef, useState, useEffect } from "react";
import { WorkflowGreenHorizons, BodyGreenHorizons } from "../ui/GreenHorizons";

const fcpCards = [
  {
    title: "01 — Create your project.",
    desc: "Set up a project and prepare for the brand discovery process with customized inquiry modules and structured client questions.",
    image: "/images/floxa_screens/dashboard_clean.png",
  },
  {
    title: "02 — Invite your client.",
    desc: "Share the discovery link and let your client communicate their vision, preferences, and expectations in an intuitive guided flow.",
    image: "/images/floxa_screens/client_login_clean.png",
  },
  {
    title: "03 — Discover the brand.",
    desc: "Gather insights about brand personality, target audience, business goals, competitors, and visual direction before sketching.",
    image: "/images/floxa_screens/discovery_step5_clean.png",
  },
  {
    title: "04 — Start with clarity.",
    desc: "Use the information collected to build a stronger foundation for your creative work, logos, and visual brand identity.",
    image: "/images/floxa_screens/ai_suite_clean.png",
  },
  {
    title: "Align goals and expectations.",
    desc: "Create a shared understanding of what the brand needs to communicate and achieve so everyone is aligned on day one.",
    image: "/images/floxa_screens/analytics_clean.png",
  },
  {
    title: "A clearer creative starting point.",
    desc: "Use discovery insights to approach the design process with more context, direction, and confidence. Clarity before creation.",
    image: "/images/floxa_screens/fluid_silk_clean.png",
  },
];

export default function FinalCutProSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedCard, setSelectedCard] = useState<(typeof fcpCards)[0] | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedCard(null);
    };
    if (selectedCard) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedCard]);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const offset = direction === "left" ? -580 : 580;
      scrollContainerRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <section id="final-cut-pro" className="pt-14 pb-16 sm:pt-20 sm:pb-24 md:pt-24 md:pb-28 bg-[#F8FAFB] text-[#0A130E] relative select-none overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* 1. Workflow Split Showcase matching Reference Photo (Front Tab Card on Left, Narrative & Checklist on Right) */}
        <div className="relative mb-16 sm:mb-24">
          {/* Volumetric Green Color Silk Wave Horizons directly behind Workflow card and text */}
          <WorkflowGreenHorizons />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          {/* Left: Workflow Front Tab Showing Card */}
          <div className="lg:col-span-7">
            <div className="relative rounded-[24px] sm:rounded-[30px] p-4 sm:p-5 bg-gradient-to-b from-[#071F15] via-[#04140D] to-[#020A06] border border-[#00E599]/40 shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_35px_rgba(0,229,153,0.18)]">
              {/* Top Greeting Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/[0.08] mb-4">
                <div>
                  <h4 className="text-white font-bold text-sm sm:text-base">
                    Welcome back!
                  </h4>
                  <p className="text-slate-400 text-xs">
                    Let&apos;s create something amazing together.
                  </p>
                </div>

                <a
                  href="https://floxa.flumenx.in/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 bg-[#00E599] hover:bg-[#05f0a2] text-[#03140C] font-semibold text-xs px-3.5 py-1.5 rounded-full shadow-[0_0_12px_rgba(0,229,153,0.35)] transition-all self-start sm:self-auto"
                >
                  <span>+ Create Project</span>
                </a>
              </div>

              {/* Search Bar inside card */}
              <div className="mb-4">
                <div className="w-full h-8 px-3 rounded-lg bg-white/[0.06] border border-white/[0.1] flex items-center gap-2 text-xs text-slate-400">
                  <svg className="w-3.5 h-3.5 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <span>Search projects, briefs, assets...</span>
                </div>
              </div>

              {/* 3 Project Showing Cards inside Front Tab - Horizontal on mobile, 3-col on tablet/desktop */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
                <div className="rounded-xl bg-[#081F15]/90 border border-white/[0.08] overflow-hidden flex flex-row sm:flex-col items-center sm:items-stretch">
                  <div className="w-[72px] xs:w-[84px] sm:w-full h-14 xs:h-16 sm:h-auto sm:aspect-[4/3] bg-[#020A06] overflow-hidden shrink-0">
                    <img
                      src="/images/floxa_screens/fluid_silk_clean.png"
                      alt="Brand Identity"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-2.5 sm:p-2.5 flex-1 min-w-0">
                    <h5 className="text-white font-semibold text-xs truncate">Brand Identity</h5>
                    <span className="inline-block mt-1 text-[9px] font-medium px-2 py-0.5 rounded-full bg-[#00E599]/15 text-[#00E599] border border-[#00E599]/30">
                      In Progress
                    </span>
                  </div>
                </div>

                <div className="rounded-xl bg-[#081F15]/90 border border-white/[0.08] overflow-hidden flex flex-row sm:flex-col items-center sm:items-stretch">
                  <div className="w-[72px] xs:w-[84px] sm:w-full h-14 xs:h-16 sm:h-auto sm:aspect-[4/3] bg-[#020A06] overflow-hidden shrink-0">
                    <img
                      src="/images/productivity/imagery__fomaia2g1yye_large.jpg"
                      alt="Website Redesign"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-2.5 sm:p-2.5 flex-1 min-w-0">
                    <h5 className="text-white font-semibold text-xs truncate">Website Redesign</h5>
                    <span className="inline-block mt-1 text-[9px] font-medium px-2 py-0.5 rounded-full bg-[#FBBF24]/15 text-[#FBBF24] border border-[#FBBF24]/30">
                      Review Pending
                    </span>
                  </div>
                </div>

                <div className="rounded-xl bg-[#081F15]/90 border border-white/[0.08] overflow-hidden flex flex-row sm:flex-col items-center sm:items-stretch">
                  <div className="w-[72px] xs:w-[84px] sm:w-full h-14 xs:h-16 sm:h-auto sm:aspect-[4/3] bg-[#020A06] overflow-hidden shrink-0">
                    <img
                      src="/images/floxa_screens/ai_suite_clean.png"
                      alt="Product Branding"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-2.5 sm:p-2.5 flex-1 min-w-0">
                    <h5 className="text-white font-semibold text-xs truncate">Product Branding</h5>
                    <span className="inline-block mt-1 text-[9px] font-medium px-2 py-0.5 rounded-full bg-[#34D399]/15 text-[#34D399] border border-[#34D399]/30">
                      Completed
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Workflow Narrative & Checklist matching Photo */}
          <div className="lg:col-span-5 flex flex-col text-left relative z-10">
            <div className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#00B377] mb-2 font-bold">
              WORKFLOW
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-[42px] font-bold tracking-tight text-[#0A130E] mb-4 leading-[1.12]">
              A seamless creative workflow, from start to finish.
            </h2>

            <p className="text-base sm:text-lg text-[#374151] leading-relaxed mb-6 font-normal">
              Experience a smooth and intuitive process designed for modern creative teams. FLOXA unifies discovery, alignment, and delivery in one cohesive environment.
            </p>

            {/* 3 Green Checkmarks matching Photo */}
            <div className="space-y-3.5 mb-8">
              {[
                "Create & Manage Projects",
                "Collaborate in Real-Time",
                "Get Approvals & Deliver",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#E6FBF2] text-[#00B377] border border-[#00E599]/30 flex items-center justify-center shrink-0 shadow-sm">
                    <svg className="w-3.5 h-3.5 stroke-current fill-none" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[15px] sm:text-base font-bold text-[#0A130E] tracking-tight">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Pill CTA Button */}
            <div>
              <a
                href="#highlights"
                className="w-full xs:w-auto inline-flex items-center justify-center gap-2 bg-[#00E599] hover:bg-[#05f0a2] text-[#03140C] font-semibold text-sm px-7 py-3 rounded-full shadow-[0_4px_18px_rgba(0,229,153,0.3)] transition-all active:scale-95"
              >
                <span>See How It Works</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

        {/* 2. Structured Discovery Stages (6 Step Horizontal Slider) */}
        <div className="relative pt-8 border-t border-[#E2ECE6]">
          <BodyGreenHorizons />
          <div className="mb-8 max-w-2xl">
            <div className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#00B377] mb-2">
              HOW IT WORKS
            </div>

            <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#0A130E] mb-4 leading-[1.12]">
              From client ideas to <span className="text-[#00B377]">creative clarity.</span>
            </h3>

            <p className="text-base text-[#526058] leading-relaxed">
              <strong className="text-[#0A130E] font-semibold">A collection of thoughts can become a clearer creative vision</strong> when the right questions are asked. FLOXA puts brand discovery at the beginning of the process.
            </p>
          </div>

          {/* Caption Tile Gallery Slider */}
          <div className="relative">
            <div
              ref={scrollContainerRef}
              className="flex gap-5 sm:gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pb-4 pt-2 -mx-4 px-4 sm:-mx-6 sm:px-6"
            >
              {fcpCards.map((card, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedCard(card)}
                  className="w-[84vw] xs:w-[78vw] sm:w-[420px] md:w-[480px] lg:w-[520px] max-w-[92vw] sm:max-w-none shrink-0 flex flex-col group snap-start cursor-pointer"
                >
                  {/* Media Card Tile */}
                  <div className="relative w-full aspect-[16/9.5] sm:aspect-[16/9] rounded-[22px] sm:rounded-[26px] bg-[#F4F8F5] border border-[#E2ECE6] overflow-hidden flex items-center justify-center p-3 sm:p-4 shadow-sm transition-all duration-300 group-hover:border-[#00B377]/50 group-hover:shadow-[0_10px_30px_rgba(0,179,119,0.1)] group-hover:-translate-y-1">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-contain object-center rounded-xl sm:rounded-2xl select-none pointer-events-none transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = "none";
                      }}
                    />
                  </div>

                  {/* Caption Text placed BELOW the card */}
                  <div className="mt-4 sm:mt-5 px-1 max-w-[520px]">
                    <p className="text-sm sm:text-[15px] md:text-base text-[#526058] leading-relaxed font-normal">
                      <strong className="text-[#0A130E] font-bold">
                        {card.title}{" "}
                      </strong>
                      {card.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Paddle Navigation Buttons */}
            <div className="flex items-center justify-end gap-3 mt-4">
              <button
                onClick={() => scroll("left")}
                className="w-11 h-11 rounded-full bg-white hover:bg-[#F4F8F5] border border-[#E2ECE6] text-[#0A130E] hover:text-[#00B377] flex items-center justify-center transition-colors shadow-sm cursor-pointer"
                aria-label="Previous item"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-11 h-11 rounded-full bg-white hover:bg-[#F4F8F5] border border-[#E2ECE6] text-[#0A130E] hover:text-[#00B377] flex items-center justify-center transition-colors shadow-sm cursor-pointer"
                aria-label="Next item"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Full Resolution Screenshot Lightbox Modal */}
      {selectedCard && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-8 animate-fadeIn"
          onClick={() => setSelectedCard(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-white border border-[#E2ECE6] rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#E2ECE6] mb-3 px-2">
              <h3 className="text-base sm:text-lg font-bold text-[#0A130E]">
                {selectedCard.title}
              </h3>
              <button
                onClick={() => setSelectedCard(null)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close image preview"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="relative w-full max-h-[75vh] flex items-center justify-center overflow-hidden rounded-xl bg-[#F4F8F5] p-3">
              <img
                src={selectedCard.image}
                alt={selectedCard.title}
                className="w-full h-auto max-h-[72vh] object-contain object-center rounded-lg shadow-md"
              />
            </div>

            <p className="mt-3 text-xs sm:text-sm text-[#526058] px-2">
              {selectedCard.desc}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
