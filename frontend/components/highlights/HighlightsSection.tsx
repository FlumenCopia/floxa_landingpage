"use client";

import React, { useState, useEffect, useRef } from "react";

interface HighlightItem {
  id: string;
  tabTitle: string;
  accentText: string;
  accentColor: string;
  headline: string;
  image: string;
  image2x?: string;
}

const highlightItems: HighlightItem[] = [
  {
    id: "creative-apps",
    tabTitle: "Floxa",
    accentText: "",
    accentColor: "#ffffff",
    headline: "Endless creativity. Unlimited possibilities. One suite deal.",
    image: "/images/highlights/creative_apps__bzylnonwi81y_large_2x.jpg",
    image2x: "/images/highlights/creative_apps__bzylnonwi81y_large_2x.jpg",
  },
  {
    id: "final-cut",
    tabTitle: "Final Cut Pro",
    accentText: "Final Cut Pro",
    accentColor: "#2997ff",
    headline: "gives you smarter, faster ways to craft and cut captivating videos.",
    image: "/images/highlights/final_cut__fe9c0hwz9ca6_large_2x.png",
    image2x: "/images/highlights/final_cut__fe9c0hwz9ca6_large_2x.png",
  },
  {
    id: "pixelmator",
    tabTitle: "Pixelmator Pro",
    accentText: "Pixelmator Pro",
    accentColor: "#ff375f",
    headline: "brings intelligent photo editing and graphic design tools to all your projects.",
    image: "/images/highlights/pixelmator_pro__fwhiit2m7kea_large_2x.png",
    image2x: "/images/highlights/pixelmator_pro__fwhiit2m7kea_large_2x.png",
  },
  {
    id: "logic-pro",
    tabTitle: "Logic Pro",
    accentText: "Logic Pro",
    accentColor: "#ff9f0a",
    headline: "puts a complete professional recording studio at your fingertips.",
    image: "/images/highlights/logic_pro__d6r8d5d4756u_large_2x.png",
    image2x: "/images/highlights/logic_pro__d6r8d5d4756u_large_2x.png",
  },
  {
    id: "productivity",
    tabTitle: "Productivity Apps",
    accentText: "",
    accentColor: "#30d158",
    headline: "Intelligent features and premium content amp up productivity in Keynote, Pages, Numbers and Freeform.",
    image: "/images/highlights/apps__caiq4numczxy_large_2x.png",
    image2x: "/images/highlights/apps__caiq4numczxy_large_2x.png",
  },
];

export default function HighlightsSection() {
  const [currentIndex, setCurrentIndex] = useState(2);
  const [isPlaying, setIsPlaying] = useState(true);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % highlightItems.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 40) {
      setCurrentIndex((prev) => (prev + 1) % highlightItems.length);
      setIsPlaying(false);
    } else if (diff < -40) {
      setCurrentIndex((prev) => (prev - 1 + highlightItems.length) % highlightItems.length);
      setIsPlaying(false);
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section className="pt-10 pb-12 sm:pt-14 sm:pb-16 md:pt-16 md:pb-18 bg-black text-white overflow-hidden relative select-none">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 mb-6 sm:mb-8">
        {/* Section Header Row */}
        <div>
          <h2 className="text-2xl sm:text-4xl md:text-[44px] font-semibold tracking-tight text-white leading-[1.12] max-w-2xl">
            Meet your all-star team<br />
            of creative apps.
          </h2>
        </div>
      </div>

      {/* Peek Carousel / Slider Container with centered active card */}
      <div
        className="relative w-full overflow-hidden flex flex-col items-center"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Track containing all cards with responsive translation */}
        <div className="w-full flex items-center overflow-x-hidden py-3 sm:py-4">
          <div
            className="flex items-center transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
            style={{
              transform: `translateX(calc(50vw - (min(86vw, 980px) / 2) - ${currentIndex} * (min(86vw, 980px) + 20px)))`,
            }}
          >
            {highlightItems.map((item, idx) => {
              const isActive = idx === currentIndex;

              return (
                <div
                  key={item.id}
                  onClick={() => {
                    if (!isActive) {
                      setCurrentIndex(idx);
                      setIsPlaying(false);
                    }
                  }}
                  style={{
                    width: "min(86vw, 980px)",
                  }}
                  className={`shrink-0 mr-5 rounded-[24px] sm:rounded-[36px] bg-[#161617] border border-white/[0.08] overflow-hidden transition-all duration-700 flex flex-col justify-between shadow-2xl h-[440px] xs:h-[490px] sm:h-[580px] md:h-[640px] relative ${
                    isActive
                      ? "opacity-100 scale-100 z-20 cursor-default"
                      : "opacity-40 hover:opacity-60 scale-[0.96] z-10 cursor-pointer"
                  }`}
                >
                  {/* Card Caption / Heading */}
                  <div className="p-5 sm:p-7 md:p-9 pb-2 sm:pb-3 z-20 max-w-2xl">
                    <p className="text-base xs:text-lg sm:text-xl md:text-2xl font-semibold leading-snug text-white tracking-tight">
                      {item.id === "creative-apps" ? (
                        <>
                          Endless creativity. Unlimited possibilities.{" "}
                          <span className="text-white/80 block sm:inline">One suite deal.</span>
                        </>
                      ) : item.id === "productivity" ? (
                        <>
                          Intelligent features and premium content amp up productivity in{" "}
                          <span className="keynote-gradient">Keynote, </span>
                          <span className="pages-gradient">Pages, </span>
                          <span className="numbers-gradient">Numbers </span>
                          and <span className="freeform-gradient">Freeform.</span>
                        </>
                      ) : (
                        <>
                          <span style={{ color: item.accentColor }} className="font-semibold">
                            {item.accentText}
                          </span>{" "}
                          {item.headline}
                        </>
                      )}
                    </p>
                  </div>

                  {/* Device / Artwork Area - Full image visible without clipping */}
                  <div className="relative w-full flex-1 min-h-0 flex items-center justify-center px-3 sm:px-6 pb-3 sm:pb-6 pt-1 overflow-hidden">
                    <img
                      src={item.image}
                      srcSet={item.image2x ? `${item.image} 1x, ${item.image2x} 2x` : undefined}
                      alt={item.tabTitle}
                      className="w-full h-full max-h-full max-w-full object-contain filter drop-shadow-2xl select-none pointer-events-none transition-transform duration-700 ease-out"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Floating Capsule Controller (Dots Navigation + Pause/Play) */}
        <div className="relative mt-3 sm:mt-5 z-30 flex items-center justify-center">
          <div className="bg-[#1d1d1f]/90 backdrop-blur-xl border border-white/10 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full flex items-center gap-3 sm:gap-4 shadow-2xl">
            {/* Timed Dots Navigation */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              {highlightItems.map((item, idx) => {
                const isActive = idx === currentIndex;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setCurrentIndex(idx);
                      setIsPlaying(false);
                    }}
                    className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 p-0.5 ${
                      isActive
                        ? "w-6 sm:w-8 bg-white"
                        : "w-2 sm:w-2.5 bg-white/40 hover:bg-white/70"
                    }`}
                    aria-label={`Slide ${idx + 1}: ${item.tabTitle}`}
                  />
                );
              })}
            </div>

            {/* Subtle Divider */}
            <div className="w-px h-3.5 sm:h-4 bg-white/20" />

            {/* Play/Pause Button */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#2c2c2e] hover:bg-[#3a3a3c] text-white flex items-center justify-center transition-colors shadow-sm"
              aria-label={isPlaying ? "Pause highlights gallery" : "Play highlights gallery"}
            >
              {isPlaying ? (
                <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-current" viewBox="0 0 24 24">
                  <rect x="6" y="4" width="3.5" height="16" rx="1" />
                  <rect x="14.5" y="4" width="3.5" height="16" rx="1" />
                </svg>
              ) : (
                <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-current ml-0.5" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
