"use client";

import React, { useRef, useState, useEffect } from "react";

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
    <section id="visual-productivity" className="pt-4 pb-6 sm:pt-8 sm:pb-10 md:pt-14 md:pb-14 bg-[#020806] text-[#e8f5ef] relative select-none">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Normal Stylish Cinematic Hero Visual Showcase Card */}
        <div className="relative w-full max-w-[1240px] mx-auto mb-8 sm:mb-12 rounded-[22px] sm:rounded-[32px] overflow-hidden border border-[#4dffa0]/18 bg-[#05130c] shadow-[0_16px_50px_rgba(0,0,0,0.85)] flex items-center justify-center p-2 sm:p-4">
          <img
            src="/images/floxa_screens/discovery_step5_clean.png"
            alt="FLOXA Client Brand Discovery Flow"
            className="w-full h-auto max-h-[520px] object-contain object-center rounded-xl sm:rounded-2xl select-none pointer-events-none filter drop-shadow-2xl"
          />
        </div>

        {/* Header */}
        <div className="mb-6 sm:mb-8 max-w-2xl">
          {/* Eyebrow in Electric Mint */}
          <div className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#4dffa0] mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4dffa0]" />
            Who It&apos;s For
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-[48px] font-semibold tracking-tight text-[#e8f5ef] mb-6 leading-[1.1]">
            Made for people who<br />
            <span className="rosegold-gradient-text">build brands.</span>
          </h2>

          <p className="text-base sm:text-lg md:text-[19px] text-[#89aca0] leading-relaxed mb-6 font-normal">
            <strong className="text-[#e8f5ef] font-semibold">
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
                {/* Normal Stylish Media Card Tile - Clean, zero iPhone bezel */}
                <div className="relative w-full aspect-[16/9.5] sm:aspect-[16/9] rounded-[20px] sm:rounded-[26px] bg-[#05130c] border border-[#4dffa0]/18 overflow-hidden flex items-center justify-center p-2.5 sm:p-3 shadow-xl transition-all duration-300 group-hover:border-[#4dffa0]/45 group-hover:shadow-[0_0_28px_rgba(77,255,160,0.18)] group-hover:-translate-y-1">
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
                  <p className="text-sm sm:text-[15px] md:text-base text-[#89aca0] leading-relaxed font-normal mb-1">
                    <strong className="text-[#e8f5ef] font-semibold">
                      {card.title}{" "}
                    </strong>
                    {card.desc}
                  </p>
                  <span className="text-xs text-[#6ee7b7] font-medium tracking-wide">
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
              className="w-10 h-10 rounded-full bg-[#06160f] hover:bg-[#081c13] border border-[#4dffa0]/20 text-[#4dffa0] flex items-center justify-center transition-colors shadow-md"
              aria-label="Previous item"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full bg-[#06160f] hover:bg-[#081c13] border border-[#4dffa0]/20 text-[#4dffa0] flex items-center justify-center transition-colors shadow-md"
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 sm:p-8 animate-fadeIn"
          onClick={() => setSelectedCard(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-[#06160f] border border-[#4dffa0]/30 rounded-2xl sm:rounded-3xl p-3 sm:p-5 shadow-[0_0_60px_rgba(77,255,160,0.2)] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 border-b border-[#4dffa0]/15 mb-3 px-2">
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-[#e8f5ef]">
                  {selectedCard.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#6ee7b7]">
                  {selectedCard.appAvailability}
                </p>
              </div>
              <button
                onClick={() => setSelectedCard(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close image preview"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Image Viewport */}
            <div className="relative w-full max-h-[75vh] flex items-center justify-center overflow-hidden rounded-xl bg-black/60 p-2">
              <img
                src={selectedCard.image}
                alt={selectedCard.title}
                className="w-full h-auto max-h-[72vh] object-contain object-center rounded-lg shadow-2xl"
              />
            </div>

            <p className="mt-3 text-xs sm:text-sm text-[#89aca0] px-2">
              {selectedCard.desc}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
