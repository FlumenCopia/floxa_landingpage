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
    headline: "Every client has a vision. FLOXA helps bring it into focus.",
    image: "/images/floxa_screens/dashboard_clean.png",
  },
  {
    id: "final-cut",
    tabTitle: "Client Briefs",
    accentText: "Unclear Client Briefs",
    accentColor: "#6ee7b7",
    headline: "become clear creative direction when the right questions are asked.",
    image: "/images/floxa_screens/discovery_step5_clean.png",
  },
  {
    id: "pixelmator",
    tabTitle: "Inspiration",
    accentText: "Scattered Inspiration",
    accentColor: "#4dffa0",
    headline: "is organized into coherent brand preferences and creative expectations.",
    image: "/images/floxa_screens/ai_suite_clean.png",
  },
  {
    id: "logic-pro",
    tabTitle: "Expectations",
    accentText: "Creative Expectations",
    accentColor: "#a7f3d0",
    headline: "are aligned so designer and client share the same vision from day one.",
    image: "/images/floxa_screens/analytics_clean.png",
  },
  {
    id: "productivity",
    tabTitle: "Brand Discovery",
    accentText: "",
    accentColor: "#4dffa0",
    headline: "Less guessing. Better understanding. A clearer creative starting point.",
    image: "/images/floxa_screens/client_login_clean.png",
  },
];

export default function HighlightsSection() {
  const [currentIndex, setCurrentIndex] = useState(2);
  const [isPlaying, setIsPlaying] = useState(true);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const currentDragRef = useRef(0);

  // Auto-play interval
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % highlightItems.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  // Touch and Mouse Drag Handlers with 1:1 real-time drag feedback
  const handleDragStart = (e: React.TouchEvent | React.MouseEvent) => {
    isDraggingRef.current = true;
    setIsDragging(true);
    setIsPlaying(false);
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    startXRef.current = clientX;
    currentDragRef.current = 0;
  };

  const handleDragMove = (e: React.TouchEvent | React.MouseEvent) => {
    if (!isDraggingRef.current) return;
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const diff = clientX - startXRef.current;
    currentDragRef.current = diff;
    setDragOffset(diff);
  };

  const handleDragEnd = () => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    setIsDragging(false);

    const threshold = 60;
    if (currentDragRef.current < -threshold) {
      setCurrentIndex((prev) => (prev + 1) % highlightItems.length);
    } else if (currentDragRef.current > threshold) {
      setCurrentIndex((prev) => (prev - 1 + highlightItems.length) % highlightItems.length);
    }

    setDragOffset(0);
    currentDragRef.current = 0;
  };

  return (
    <section id="highlights" className="pt-4 pb-6 sm:pt-8 sm:pb-8 md:pt-12 md:pb-12 bg-[#020806] text-[#e8f5ef] overflow-hidden relative select-none">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 mb-4 sm:mb-6">
        {/* Eyebrow in Electric Mint */}
        <div className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#4dffa0] mb-2 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#4dffa0]" />
          The Problem
        </div>

        {/* Section Header Row */}
        <div>
          <h2 className="text-2xl sm:text-4xl md:text-[44px] font-semibold tracking-tight text-[#e8f5ef] leading-[1.12] max-w-2xl">
            Great design needs<br />
            <span className="rosegold-gradient-text">more than a good brief.</span>
          </h2>
        </div>
      </div>

      {/* Peek Carousel / Slider Container with centered active card */}
      <div
        className="relative w-full overflow-hidden flex flex-col items-center cursor-grab active:cursor-grabbing touch-pan-y"
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
      >
        {/* Track containing all cards with 1:1 real-time drag feedback */}
        <div className="w-full flex items-center overflow-x-hidden py-1 sm:py-2">
          <div
            className="flex items-center transition-transform ease-[cubic-bezier(0.25,1,0.5,1)]"
            style={{
              transform: `translateX(calc(50vw - (min(86vw, 980px) / 2) - ${currentIndex} * (min(86vw, 980px) + 20px) + ${dragOffset}px))`,
              transitionDuration: isDragging ? "0ms" : "700ms",
            }}
          >
            {highlightItems.map((item, idx) => {
              const isActive = idx === currentIndex;

              return (
                <div
                  key={item.id}
                  onClick={() => {
                    if (Math.abs(currentDragRef.current) < 5) {
                      if (!isActive) {
                        setCurrentIndex(idx);
                        setIsPlaying(false);
                      }
                    }
                  }}
                  style={{
                    width: "min(86vw, 980px)",
                  }}
                  className={`shrink-0 mr-5 rounded-[24px] sm:rounded-[36px] bg-[#06160f]/90 border border-[#4dffa0]/18 overflow-hidden transition-all duration-700 flex flex-col justify-between shadow-2xl h-[360px] xs:h-[390px] sm:h-[480px] md:h-[580px] relative pointer-events-auto ${
                    isActive
                      ? "opacity-100 scale-100 z-20 border-[#4dffa0]/35 shadow-[0_0_35px_rgba(77,255,160,0.12)]"
                      : "opacity-40 hover:opacity-70 scale-[0.96] z-10 cursor-pointer hover:border-[#4dffa0]/40"
                  }`}
                >
                  {/* Card Caption / Heading */}
                  <div className="p-5 sm:p-7 md:p-9 pb-2 sm:pb-3 z-20 max-w-2xl">
                    <p className="text-base xs:text-lg sm:text-xl md:text-2xl font-semibold leading-snug text-[#e8f5ef] tracking-tight">
                      {item.id === "creative-apps" ? (
                        <>
                          Every client has a vision.{" "}
                          <span className="text-[#89aca0] block sm:inline">FLOXA helps bring it into focus.</span>
                        </>
                      ) : item.id === "productivity" ? (
                        <>
                          Less guessing. Better understanding.{" "}
                          <span className="rosegold-gradient-text">A clearer </span>
                          <span className="text-[#4dffa0]">creative </span>
                          <span className="text-[#e8f5ef]">starting point.</span>
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

                  {/* Normal Stylish Artwork Area - Full image visible without clipping */}
                  <div className="relative w-full flex-1 min-h-0 flex items-center justify-center px-4 sm:px-8 pb-4 sm:pb-8 pt-1 overflow-hidden pointer-events-none">
                    <img
                      src={item.image}
                      alt={item.tabTitle}
                      className="w-full h-full max-h-full max-w-full object-contain object-center rounded-xl sm:rounded-2xl filter drop-shadow-2xl select-none transition-transform duration-700 ease-out"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Floating Capsule Controller (Dots Navigation + Pause/Play) */}
        <div
          className="relative mt-2 sm:mt-4 z-30 flex items-center justify-center pointer-events-auto"
          onMouseDown={(e) => e.stopPropagation()}
          onTouchStart={(e) => e.stopPropagation()}
        >
          <div className="bg-[#06160f]/95 backdrop-blur-xl border border-[#4dffa0]/20 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full flex items-center gap-3 sm:gap-4 shadow-2xl">
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
                        ? "w-6 sm:w-8 bg-gradient-to-r from-[#a7f3d0] to-[#4dffa0] shadow-[0_0_8px_rgba(77,255,160,0.5)]"
                        : "w-2 sm:w-2.5 bg-white/25 hover:bg-white/50"
                    }`}
                    aria-label={`Slide ${idx + 1}: ${item.tabTitle}`}
                  />
                );
              })}
            </div>

            {/* Subtle Divider */}
            <div className="w-px h-3.5 sm:h-4 bg-[#4dffa0]/20" />

            {/* Play/Pause Button */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#081c13] hover:bg-[#0c2419] border border-[#4dffa0]/20 text-[#4dffa0] flex items-center justify-center transition-colors shadow-sm cursor-pointer"
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
