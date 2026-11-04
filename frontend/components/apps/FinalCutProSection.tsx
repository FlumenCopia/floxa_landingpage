"use client";

import React, { useRef, useState, useEffect } from "react";

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
    <section id="final-cut-pro" className="pt-4 pb-6 sm:pt-8 sm:pb-10 md:pt-14 md:pb-14 bg-[#020806] text-[#e8f5ef] relative select-none">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8">
        {/* App Section Header */}
        <div className="mb-6 sm:mb-8 max-w-2xl">
          {/* Eyebrow in Rose Gold */}
          <div className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#e0a899] mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e0a899]" />
            How It Works
          </div>

          {/* Main Headline */}
          <h2 className="text-2xl sm:text-4xl md:text-[48px] font-semibold tracking-tight text-[#e8f5ef] mb-6 leading-[1.1]">
            From client ideas to<br />
            <span className="rosegold-gradient-text">creative clarity.</span>
          </h2>

          {/* Narrative Body Copy */}
          <p className="text-base sm:text-lg md:text-[19px] text-[#89aca0] leading-relaxed mb-6 font-normal">
            <strong className="text-[#e8f5ef] font-semibold">A collection of thoughts can become a clearer creative vision</strong> when the right questions are asked. FLOXA puts brand discovery at the beginning of the process, helping designers understand the client&apos;s vision before moving into visual execution.
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
                {/* Normal Stylish Media Card Tile - Clean, zero iPhone bezel */}
                <div className="relative w-full aspect-[16/9.5] sm:aspect-[16/9] rounded-[20px] sm:rounded-[26px] bg-[#05130c] border border-[#4dffa0]/18 overflow-hidden flex items-center justify-center p-2.5 sm:p-3 shadow-xl transition-all duration-300 group-hover:border-[#e0a899]/45 group-hover:shadow-[0_0_28px_rgba(77,255,160,0.15)] group-hover:-translate-y-1">
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
                  <p className="text-sm sm:text-[15px] md:text-base text-[#89aca0] leading-relaxed font-normal">
                    <strong className="text-[#e8f5ef] font-semibold">
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
              className="w-10 h-10 rounded-full bg-[#06160f] hover:bg-[#081c13] border border-[#4dffa0]/20 text-[#e0a899] flex items-center justify-center transition-colors shadow-md"
              aria-label="Previous item"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full bg-[#06160f] hover:bg-[#081c13] border border-[#4dffa0]/20 text-[#e0a899] flex items-center justify-center transition-colors shadow-md"
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
              <h3 className="text-base sm:text-lg font-semibold text-[#e8f5ef]">
                {selectedCard.title}
              </h3>
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
