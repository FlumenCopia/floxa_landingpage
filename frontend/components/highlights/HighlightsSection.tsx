"use client";

import React, { useState, useEffect, useRef } from "react";
import { FeaturesGreenHorizons } from "../ui/GreenHorizons";

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
    accentColor: "#0A130E",
    headline: "Every client has a vision. FLOXA helps bring it into focus.",
    image: "/images/floxa_screens/dashboard_clean.png",
  },
  {
    id: "final-cut",
    tabTitle: "Client Briefs",
    accentText: "Unclear Client Briefs",
    accentColor: "#00B377",
    headline: "become clear creative direction when the right questions are asked.",
    image: "/images/floxa_screens/discovery_step5_clean.png",
  },
  {
    id: "pixelmator",
    tabTitle: "Inspiration",
    accentText: "Scattered Inspiration",
    accentColor: "#00B377",
    headline: "is organized into coherent brand preferences and creative expectations.",
    image: "/images/floxa_screens/ai_suite_clean.png",
  },
  {
    id: "logic-pro",
    tabTitle: "Expectations",
    accentText: "Creative Expectations",
    accentColor: "#00B377",
    headline: "are aligned so designer and client share the same vision from day one.",
    image: "/images/floxa_screens/analytics_clean.png",
  },
  {
    id: "productivity",
    tabTitle: "Brand Discovery",
    accentText: "",
    accentColor: "#00B377",
    headline: "Less guessing. Better understanding. A clearer creative starting point.",
    image: "/images/floxa_screens/client_login_clean.png",
  },
];

const featureGrid = [
  {
    title: "Brand Discovery",
    desc: "Understand your client's vision and goals.",
    icon: (
      <svg className="w-5 h-5 text-[#00B377]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Brand DNA",
    desc: "Define what makes the brand unique.",
    icon: (
      <svg className="w-5 h-5 text-[#00B377]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 004 11m0 0a8 8 0 00.125 1.4" />
      </svg>
    ),
  },
  {
    title: "Moodboards",
    desc: "Explore creative inspirations.",
    icon: (
      <svg className="w-5 h-5 text-[#00B377]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
    ),
  },
  {
    title: "Creative Concepts",
    desc: "Design and present stunning concepts.",
    icon: (
      <svg className="w-5 h-5 text-[#00B377]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
      </svg>
    ),
  },
  {
    title: "Client Collaboration",
    desc: "Get approvals with ease.",
    icon: (
      <svg className="w-5 h-5 text-[#00B377]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Project Management",
    desc: "Track progress, meet deadlines.",
    icon: (
      <svg className="w-5 h-5 text-[#00B377]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
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

  // Touch and Mouse Drag Handlers
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
    <section id="highlights" className="pt-16 pb-16 sm:pt-20 sm:pb-24 md:pt-24 md:pb-28 bg-[#F8FAFB] text-[#0A130E] overflow-hidden relative select-none">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 relative z-10 mb-16 sm:mb-24">
        {/* 1. Powerful Features Grid matching Reference Photo */}
        <div className="relative mb-16">
          {/* Volumetric Green Color Horizon Silk Waves in Background directly behind the 6 cards */}
          <FeaturesGreenHorizons />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          {/* Left: Heading & Intro */}
          <div className="lg:col-span-5 flex flex-col text-left">
            <div className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#00B377] mb-2">
              POWERFUL FEATURES —
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[46px] font-bold tracking-tight text-[#0A130E] mb-5 leading-[1.08]">
              Everything you need to bring brands to life.
            </h2>

            <p className="text-base sm:text-lg text-[#526058] leading-relaxed mb-8">
              From discovery to delivery, FLOXA helps you manage your creative workflow effortlessly. Less guessing, better understanding, and a clear creative direction.
            </p>

            <div>
              <a
                href="#final-cut-pro"
                className="w-full xs:w-auto inline-flex items-center justify-center gap-2 bg-[#00E599] hover:bg-[#05f0a2] text-[#03140C] font-semibold text-sm sm:text-base px-7 py-3 rounded-full shadow-[0_4px_18px_rgba(0,229,153,0.3)] transition-all active:scale-95"
              >
                <span>Explore Features</span>
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Right: 2x3 Grid of Feature Cards matching Photo */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {featureGrid.map((feat, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-[#E2ECE6] p-4 sm:p-5 shadow-sm hover:shadow-md hover:border-[#00B377]/40 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-[#E6FBF2] flex items-center justify-center mb-3">
                  {feat.icon}
                </div>
                <h3 className="text-sm sm:text-base font-bold text-[#0A130E] mb-1">
                  {feat.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#526058] leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

        {/* 2. Interactive Discovery Screens Gallery */}
        <div className="pt-8 border-t border-[#E2ECE6]">
          <div className="mb-6 max-w-2xl">
            <div className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#00B377] mb-2">
              THE PROBLEM & THE SOLUTION
            </div>

            <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#0A130E] leading-[1.15]">
              Great design needs <span className="text-[#00B377]">more than a good brief.</span>
            </h3>
          </div>
        </div>
      </div>

      {/* Peek Carousel / Slider Container with centered active card */}
      <div
        className="relative w-full overflow-hidden flex flex-col items-center cursor-grab active:cursor-grabbing touch-pan-y z-10"
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
                  className={`shrink-0 mr-5 rounded-[24px] sm:rounded-[36px] bg-white border overflow-hidden transition-all duration-700 flex flex-col justify-between h-[360px] xs:h-[390px] sm:h-[480px] md:h-[580px] relative pointer-events-auto ${
                    isActive
                      ? "opacity-100 scale-100 z-20 border-[#00E599] shadow-[0_14px_45px_rgba(0,179,119,0.12)]"
                      : "opacity-45 hover:opacity-75 scale-[0.97] z-10 cursor-pointer border-[#E2ECE6] shadow-sm hover:border-[#00B377]/40"
                  }`}
                >
                  {/* Card Caption / Heading */}
                  <div className="p-5 sm:p-7 md:p-9 pb-2 sm:pb-3 z-20 max-w-2xl">
                    <p className="text-base xs:text-lg sm:text-xl md:text-2xl font-bold leading-snug text-[#0A130E] tracking-tight">
                      {item.id === "creative-apps" ? (
                        <>
                          Every client has a vision.{" "}
                          <span className="text-[#526058] block sm:inline">FLOXA helps bring it into focus.</span>
                        </>
                      ) : item.id === "productivity" ? (
                        <>
                          Less guessing. Better understanding.{" "}
                          <span className="text-[#00B377]">A clearer creative starting point.</span>
                        </>
                      ) : (
                        <>
                          <span className="text-[#00B377] font-bold">
                            {item.accentText}
                          </span>{" "}
                          <span className="text-[#0A130E]">{item.headline}</span>
                        </>
                      )}
                    </p>
                  </div>

                  {/* Artwork Area */}
                  <div className="relative w-full flex-1 min-h-0 flex items-center justify-center px-4 sm:px-8 pb-4 sm:pb-8 pt-1 overflow-hidden pointer-events-none">
                    <div className="w-full h-full bg-[#F4F8F5] rounded-xl sm:rounded-2xl border border-[#E8EFEA] p-2 sm:p-4 flex items-center justify-center">
                      <img
                        src={item.image}
                        alt={item.tabTitle}
                        className="w-full h-full max-h-full max-w-full object-contain object-center rounded-lg sm:rounded-xl filter drop-shadow-md select-none transition-transform duration-700 ease-out"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Floating Capsule Controller (Dots Navigation + Pause/Play) */}
        <div
          className="relative mt-4 sm:mt-6 z-30 flex items-center justify-center pointer-events-auto"
          onMouseDown={(e) => e.stopPropagation()}
          onTouchStart={(e) => e.stopPropagation()}
        >
          <div className="bg-white/95 backdrop-blur-xl border border-[#E2ECE6] px-4 sm:px-5 py-2.5 rounded-full flex items-center gap-3 sm:gap-4 shadow-md">
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
                        ? "w-6 sm:w-8 bg-[#00E599] shadow-[0_0_8px_rgba(0,229,153,0.6)]"
                        : "w-2 sm:w-2.5 bg-slate-200 hover:bg-slate-300"
                    }`}
                    aria-label={`Slide ${idx + 1}: ${item.tabTitle}`}
                  />
                );
              })}
            </div>

            <div className="w-px h-3.5 sm:h-4 bg-slate-200" />

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#F1F6F3] hover:bg-[#E2ECE6] border border-[#E2ECE6] text-[#0A130E] flex items-center justify-center transition-colors shadow-sm cursor-pointer"
              aria-label={isPlaying ? "Pause highlights gallery" : "Play highlights gallery"}
            >
              {isPlaying ? (
                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                  <rect x="6" y="4" width="3.5" height="16" rx="1" />
                  <rect x="14.5" y="4" width="3.5" height="16" rx="1" />
                </svg>
              ) : (
                <svg className="w-3 h-3 fill-current ml-0.5" viewBox="0 0 24 24">
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
