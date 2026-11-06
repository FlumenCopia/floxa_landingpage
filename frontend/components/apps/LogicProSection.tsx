"use client";

import React, { useRef, useState, useEffect } from "react";
import { BodyGreenHorizons } from "../ui/GreenHorizons";

const logicCards = [
  {
    title: "A discovery-first approach to branding.",
    desc: "Placing deep inquiry at step zero turns branding from an aesthetic gamble into an intentional, strategic discipline.",
    image: "/images/floxa_screens/dashboard_clean.png",
  },
  {
    title: "A structured way to understand client needs.",
    desc: "Guided prompts help clients articulate complex ideas clearly, avoiding vague feedback like 'make it pop'.",
    image: "/images/floxa_screens/discovery_step5_clean.png",
  },
  {
    title: "Better visibility into personality & preferences.",
    desc: "Uncover nuanced aesthetics, emotional tones, and reference benchmarks with high accuracy.",
    image: "/images/floxa_screens/ai_suite_clean.png",
  },
  {
    title: "A shared foundation for alignment.",
    desc: "Create documented consensus early on, so both parties share identical expectations before design commences.",
    image: "/images/floxa_screens/analytics_clean.png",
  },
  {
    title: "A more intentional starting point.",
    desc: "Enter Illustrator, Figma, or your sketchbook with confident creative direction rooted in verified insights.",
    image: "/images/floxa_screens/fluid_silk_clean.png",
  },
  {
    title: "Don't just take a brief. Discover the brand.",
    desc: "Creative work is more than making something look good. It's about understanding what the brand stands for.",
    image: "/images/floxa_screens/client_login_clean.png",
  },
];

export default function LogicProSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string; desc: string } | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    if (selectedImage) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const offset = direction === "left" ? -580 : 580;
      scrollContainerRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <section id="logic-pro" className="pt-12 pb-14 sm:pt-16 sm:pb-20 md:pt-20 md:pb-24 bg-white text-[#0A130E] relative select-none overflow-hidden">
      {/* Green Color Horizon Silk Waves in Background */}
      <BodyGreenHorizons />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* App Section Header */}
        <div className="mb-8 sm:mb-10 max-w-2xl">
          {/* Eyebrow in Floxa Emerald */}
          <div className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#00B377] mb-2">
            Why FLOXA
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-[48px] font-bold tracking-tight text-[#0A130E] mb-5 leading-[1.12]">
            Less Guesswork.<br />
            <span className="text-[#00B377]">More Creative Clarity.</span>
          </h2>

          <p className="text-base sm:text-lg md:text-[19px] text-[#526058] leading-relaxed mb-6 font-normal">
            Great creative work begins with the right questions. FLOXA puts brand discovery at the beginning of the process, helping designers understand the client&apos;s vision before moving into visual execution. <strong className="text-[#0A130E] font-semibold">Better questions. Clearer direction. Stronger foundations.</strong>
          </p>
        </div>

        {/* Feature Cards Horizontal Scroll Slider */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex gap-5 sm:gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pb-4 pt-2 -mx-4 px-4 sm:-mx-6 sm:px-6"
          >
            {logicCards.map((card, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedImage({ src: card.image, title: card.title, desc: card.desc })}
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

      {/* Full Resolution Screenshot Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-8 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-white border border-[#E2ECE6] rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 border-b border-[#E2ECE6] mb-3 px-2">
              <h3 className="text-base sm:text-lg font-bold text-[#0A130E]">
                {selectedImage.title}
              </h3>
              <button
                onClick={() => setSelectedImage(null)}
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
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[72vh] object-contain object-center rounded-lg shadow-md"
              />
            </div>

            <p className="mt-3 text-xs sm:text-sm text-[#526058] px-2">
              {selectedImage.desc}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
