"use client";

import React, { useRef, useState, useEffect } from "react";
import { BodyGreenHorizons } from "../ui/GreenHorizons";

const productivityCards = [
  {
    title: "Freelance Brand Identity Designers.",
    desc: "Understand your clients better and establish a clearer direction before creating logos and visual identities.",
    appAvailability: "For Independent Designers",
    image: "/images/floxa_screens/discovery_step5_clean.png",
  },
  {
    title: "Branding Studios & Creative Agencies.",
    desc: "Bring more structure to client discovery and help teams work from a shared understanding of the brand.",
    appAvailability: "For Creative Teams",
    image: "/images/floxa_screens/dashboard_clean.png",
  },
  {
    title: "Brand Consultants & Strategists.",
    desc: "Organize discovery conversations and gather insights that support brand strategy and identity projects.",
    appAvailability: "For Brand Strategists",
    image: "/images/floxa_screens/ai_suite_clean.png",
  },
  {
    title: "Creative Professionals.",
    desc: "Build a better foundation for creative projects by understanding the people and ideas behind each brand.",
    appAvailability: "For Creative Practitioners",
    image: "/images/floxa_screens/client_login_clean.png",
  },
  {
    title: "A Clearer Creative Starting Point.",
    desc: "Use discovery insights to approach the design process with more context, direction, and client alignment.",
    appAvailability: "For All Brand Projects",
    image: "/images/floxa_screens/analytics_clean.png",
  },
];

export default function ProductivitySection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedCard, setSelectedCard] = useState<(typeof productivityCards)[0] | null>(null);

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
    <section id="visual-productivity" className="pt-12 pb-14 sm:pt-16 sm:pb-20 md:pt-20 md:pb-24 bg-[#F8FAFB] text-[#0A130E] relative select-none overflow-hidden">
      {/* Green Color Horizon Silk Waves in Background */}
      <BodyGreenHorizons />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Cinematic Hero Visual Showcase Card */}
        <div className="relative w-full max-w-[1240px] mx-auto mb-8 sm:mb-14 rounded-[20px] sm:rounded-[36px] overflow-hidden border border-[#E2ECE6] bg-white shadow-[0_12px_40px_rgba(0,0,0,0.06)] flex items-center justify-center p-2 xs:p-3 sm:p-6">
          <img
            src="/images/floxa_screens/discovery_step5_clean.png"
            alt="FLOXA Client Brand Discovery Flow"
            className="w-full h-auto max-h-[540px] object-contain object-center rounded-lg xs:rounded-xl sm:rounded-2xl select-none pointer-events-none filter drop-shadow-md"
          />
        </div>

        {/* Header */}
        <div className="mb-8 sm:mb-10 max-w-2xl">
          {/* Eyebrow in Floxa Emerald */}
          <div className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#00B377] mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00B377]" />
            Who It&apos;s For
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-[48px] font-bold tracking-tight text-[#0A130E] mb-5 leading-[1.12]">
            Made for people who<br />
            <span className="text-[#00B377]">build brands.</span>
          </h2>

          <p className="text-base sm:text-lg md:text-[19px] text-[#526058] leading-relaxed mb-6 font-normal">
            <strong className="text-[#0A130E] font-semibold">
              For those who bring brands to life.
            </strong>{" "}
            Build a better foundation for creative projects by understanding the people and ideas behind each brand. FLOXA gives designers and studios a structured way to discover client needs before creative execution begins.
          </p>
        </div>

        {/* Feature Cards Horizontal Scroll Slider */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex gap-5 sm:gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pb-4 pt-2 -mx-4 px-4 sm:-mx-6 sm:px-6"
          >
            {productivityCards.map((card, idx) => (
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

                {/* Caption Text Below Card */}
                <div className="mt-4 sm:mt-5 px-1 max-w-[520px]">
                  <p className="text-sm sm:text-[15px] md:text-base text-[#526058] leading-relaxed font-normal mb-2">
                    <strong className="text-[#0A130E] font-bold">
                      {card.title}{" "}
                    </strong>
                    {card.desc}
                  </p>
                  <span className="text-xs text-[#00B377] bg-[#E6FBF2] font-semibold px-2.5 py-0.5 rounded-full inline-block">
                    {card.appAvailability}
                  </span>
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
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 border-b border-[#E2ECE6] mb-3 px-2">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#0A130E]">
                  {selectedCard.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#00B377] font-semibold mt-0.5">
                  {selectedCard.appAvailability}
                </p>
              </div>
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

            {/* Modal Image Viewport */}
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
