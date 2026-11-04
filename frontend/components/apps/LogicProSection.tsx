"use client";

import React, { useRef, useState, useEffect } from "react";
import AppIcon from "../ui/AppIcon";

const logicCards = [
  {
    title: "A discovery-first approach to branding.",
    desc: "Placing deep inquiry at step zero turns branding from an aesthetic gamble into an intentional, strategic discipline.",
    image: "/images/logic_pro/riff__b0nup5be041y_large.png",
  },
  {
    title: "A structured way to understand client needs.",
    desc: "Guided prompts help clients articulate complex ideas clearly, avoiding vague feedback like 'make it pop'.",
    image: "/images/logic_pro/automate__dc7dllcycve6_large.jpg",
  },
  {
    title: "Better visibility into personality & preferences.",
    desc: "Uncover nuanced aesthetics, emotional tones, and reference benchmarks with high accuracy.",
    image: "/images/logic_pro/voice_memos__qlpfg2k6e9m6_large.png",
  },
  {
    title: "A shared foundation for alignment.",
    desc: "Create documented consensus early on, so both parties share identical expectations before design commences.",
    image: "/images/logic_pro/beat_making__mpza109xwp2m_large.png",
  },
  {
    title: "A more intentional starting point.",
    desc: "Enter Illustrator, Figma, or your sketchbook with confident creative direction rooted in verified insights.",
    image: "/images/logic_pro/library__blk2gs8ihb6q_large.jpg",
  },
  {
    title: "Don't just take a brief. Discover the brand.",
    desc: "Creative work is more than making something look good. It's about understanding what the brand stands for.",
    image: "/images/logic_pro/effects__f26m02zok0ey_large.png",
  },
];

export default function LogicProSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null);

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
    <section id="logic-pro" className="pt-4 pb-6 sm:pt-6 sm:pb-8 md:pt-10 md:pb-12 bg-black text-white relative select-none">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        {/* App Section Header */}
        <div className="mb-3 sm:mb-5 max-w-2xl">
          <div className="text-lg sm:text-xl font-semibold text-[#ff9f0a] tracking-tight mb-2">
            Why FLOXA
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-[48px] font-semibold tracking-tight text-white mb-6 leading-[1.1]">
            Less Guesswork.<br />
            More Creative Clarity.
          </h2>

          <p className="text-base sm:text-lg md:text-[19px] text-[#a1a1a6] leading-relaxed mb-6 font-normal">
            Great creative work begins with the right questions. FLOXA puts brand discovery at the beginning of the process, helping designers understand the client&apos;s vision before moving into visual execution. <strong className="text-white font-semibold">Better questions. Clearer direction. Stronger foundations.</strong>
          </p>
        </div>

        {/* Feature Cards Horizontal Scroll Slider */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pb-4 pt-2 -mx-4 px-4 sm:-mx-6 sm:px-6"
          >
            {logicCards.map((card, idx) => (
              <div
                key={idx}
                className="w-[85vw] max-w-[340px] xs:w-[82vw] xs:max-w-[420px] sm:w-[520px] md:w-[600px] shrink-0 flex flex-col group snap-start"
              >
                {/* Big Rounded Media Tile Card */}
                <div
                  onClick={() => setSelectedImage({ src: card.image, title: card.title })}
                  className="relative w-full h-[210px] xs:h-[250px] sm:h-[340px] md:h-[420px] rounded-[20px] sm:rounded-[28px] bg-[#121316] border border-white/[0.08] overflow-hidden flex items-center justify-center p-3 sm:p-5 shadow-2xl transition-all duration-300 group-hover:border-white/25 cursor-pointer"
                  title="Click to view full image"
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-contain object-center filter drop-shadow-2xl select-none pointer-events-none transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = "none";
                    }}
                  />
                  {/* Subtle expand indicator icon */}
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/70 opacity-0 group-hover:opacity-100 transition-opacity shadow-md pointer-events-none">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                  </div>
                </div>

                {/* Caption Text Below Card */}
                <div className="mt-4 sm:mt-5 px-1 max-w-[620px]">
                  <p className="text-sm sm:text-[15px] md:text-base text-[#a1a1a6] leading-relaxed font-normal">
                    <strong className="text-white font-semibold">
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
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors shadow-sm"
              aria-label="Previous item"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors shadow-sm"
              aria-label="Next item"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Full-view Lightbox Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl max-h-[90vh] bg-[#161617] rounded-2xl border border-white/10 p-3 sm:p-6 overflow-hidden flex flex-col items-center shadow-2xl"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              aria-label="Close full view"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-w-full max-h-[75vh] object-contain rounded-lg"
            />
            <p className="mt-3 text-sm sm:text-base font-medium text-white/90 text-center">
              {selectedImage.title}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
