"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import AppIcon from "../ui/AppIcon";

interface AppItem {
  id: string;
  name: string;
  icon:
    | "numbers"
    | "motion"
    | "freeform"
    | "keynote"
    | "final-cut"
    | "pixelmator"
    | "logic-pro"
    | "pages"
    | "compressor"
    | "mainstage";
  anchor: string;
}

// Exactly matching Floxa's app suite carousel order
const appList: AppItem[] = [
  { id: "freeform", name: "Freeform", icon: "freeform", anchor: "#visual-productivity" },
  { id: "keynote", name: "Keynote", icon: "keynote", anchor: "#visual-productivity" },
  { id: "final-cut", name: "Final Cut Pro", icon: "final-cut", anchor: "#final-cut-pro" },
  { id: "pixelmator", name: "Pixelmator Pro", icon: "pixelmator", anchor: "#pixelmator-pro" },
  { id: "logic-pro", name: "Logic Pro", icon: "logic-pro", anchor: "#logic-pro" },
  { id: "pages", name: "Pages", icon: "pages", anchor: "#visual-productivity" },
  { id: "compressor", name: "Compressor", icon: "compressor", anchor: "#final-cut-pro" },
  { id: "mainstage", name: "MainStage", icon: "mainstage", anchor: "#logic-pro" },
  { id: "numbers", name: "Numbers", icon: "numbers", anchor: "#visual-productivity" },
  { id: "motion", name: "Motion", icon: "motion", anchor: "#final-cut-pro" },
];

export default function HeroSection() {
  const [isPaused, setIsPaused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0); // Starts on Freeform matching Apple's showcase
  const [hasOpened, setHasOpened] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Drag interaction refs
  const trackRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const currentDragOffset = useRef(0);
  const [dragOffset, setDragOffset] = useState(0);

  // Trigger opening animation on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setHasOpened(true);
    }, 120);
    return () => clearTimeout(timer);
  }, []);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % appList.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + appList.length) % appList.length);
  }, []);

  const goToSlide = (idx: number) => {
    setActiveIndex(idx);
  };

  // Autoplay interval tied to isPaused state and only after opening animation finishes
  useEffect(() => {
    if (isPaused || !hasOpened) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      nextSlide();
    }, 2800);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, hasOpened, nextSlide]);

  // Touch and Mouse Drag Handlers
  const handleTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
    isDragging.current = true;
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    startX.current = clientX;
    currentDragOffset.current = 0;
  };

  const handleTouchMove = (e: React.TouchEvent | React.MouseEvent) => {
    if (!isDragging.current) return;
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const diff = clientX - startX.current;
    currentDragOffset.current = diff;
    setDragOffset(diff);
  };

  const handleTouchEnd = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const threshold = 60;
    if (currentDragOffset.current < -threshold) {
      nextSlide();
    } else if (currentDragOffset.current > threshold) {
      prevSlide();
    }
    setDragOffset(0);
    currentDragOffset.current = 0;
  };

  return (
    <section
      id="overview"
      className="relative pt-16 pb-20 sm:pt-20 sm:pb-28 overflow-hidden bg-black text-center select-none"
    >
      <div className="max-w-[1280px] mx-auto px-4 relative z-10 flex flex-col items-center">
        {/* Top Header Row with Animated Wordmark and Floating Pause Button */}
        <div className="w-full flex items-center justify-between mb-4 px-2 sm:px-6 relative">
          <div className="w-10 h-10 hidden sm:block" />

          {/* Centered Wordmark with Opening Scale, Glow, and Shimmer Animation */}
          <div
            className={`flex items-center justify-center gap-2 mx-auto cursor-pointer transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              hasOpened
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 -translate-y-5 scale-90"
            }`}
          >
            <span className="text-3xl sm:text-5xl font-pavelt tracking-normal apple-wordmark-shimmer">
              Floxa
            </span>
          </div>

          {/* Right Floating Play/Pause Button */}
          <button
            onClick={() => setIsPaused(!isPaused)}
            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#1d1d1f] hover:bg-[#2d2d30] border border-white/10 text-white/80 hover:text-white flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] active:scale-95 shadow-lg ${
              hasOpened ? "opacity-100 scale-100" : "opacity-0 scale-75"
            }`}
            aria-label={isPaused ? "Play hero swiper" : "Pause hero swiper"}
          >
            {isPaused ? (
              <svg className="w-3.5 h-3.5 fill-current ml-0.5" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            ) : (
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <rect x="6" y="4" width="3.5" height="16" rx="1" />
                <rect x="14.5" y="4" width="3.5" height="16" rx="1" />
              </svg>
            )}
          </button>
        </div>

        {/* Main Headline with Opening Staggered Reveal and Soft Blur */}
        <h1
          className={`text-4xl sm:text-6xl md:text-7xl lg:text-[80px] font-semibold tracking-tight text-white mb-8 sm:mb-12 leading-[1.06] transition-all duration-1000 delay-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            hasOpened
              ? "opacity-100 translate-y-0 filter-none"
              : "opacity-0 translate-y-8 blur-sm"
          }`}
        >
          All yours for the making.
        </h1>

        {/* Official Apple Curved App Icons Swiper / Carousel with Opening Fan-Out Animation */}
        <div
          ref={trackRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleTouchStart}
          onMouseMove={handleTouchMove}
          onMouseUp={handleTouchEnd}
          onMouseLeave={handleTouchEnd}
          className={`relative w-full max-w-[1100px] h-[210px] sm:h-[240px] flex items-center justify-center overflow-hidden cursor-grab active:cursor-grabbing my-2 sm:my-4 transition-opacity duration-1000 delay-300 ${
            hasOpened ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Subtle side vignettes to merge seamlessly into black background */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-r from-black via-black/85 to-transparent z-30 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-l from-black via-black/85 to-transparent z-30 pointer-events-none" />

          {/* Icons Carousel Track */}
          <div className="relative w-full h-full flex items-center justify-center">
            {appList.map((app, idx) => {
              // Calculate circular offset relative to activeIndex (-4 to +5)
              let offset = (idx - activeIndex) % appList.length;
              if (offset > appList.length / 2) offset -= appList.length;
              if (offset < -appList.length / 2) offset += appList.length;

              // Only render visible icons within range [-3, 3]
              const isVisible = Math.abs(offset) <= 3;
              if (!isVisible) return null;

              const isCenter = offset === 0;

              // Spacing per icon slot
              const baseSpacing = 145; // desktop pixel spacing
              const targetTranslateX = offset * baseSpacing + dragOffset;
              
              // On initial opening, elements fan out smoothly from center
              const translateX = hasOpened ? targetTranslateX : 0;

              // Dynamic scale and opacity matching Apple's depth curve
              const targetScale = isCenter ? 1.08 : Math.max(0.78, 1 - Math.abs(offset) * 0.12);
              const scale = hasOpened ? targetScale : 0.6;
              const opacity = hasOpened
                ? isCenter
                  ? 1
                  : Math.abs(offset) === 1
                  ? 0.75
                  : Math.abs(offset) === 2
                  ? 0.35
                  : 0.15
                : 0;

              return (
                <div
                  key={app.id}
                  onClick={() => goToSlide(idx)}
                  className="absolute flex flex-col items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer"
                  style={{
                    transform: `translateX(${translateX}px) scale(${scale})`,
                    opacity: opacity,
                    zIndex: isCenter ? 20 : 10 - Math.abs(offset),
                  }}
                >
                  {/* The Squircle Icon with Neon Edge Glow */}
                  <div className="transition-transform duration-300 hover:scale-105 active:scale-95">
                    <AppIcon
                      name={app.icon}
                      size={120}
                      className="w-[96px] h-[96px] sm:w-[124px] sm:h-[124px] select-none pointer-events-none filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.8)]"
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active App Text Label - Centered directly below the middle icon */}
          <div
            className={`absolute bottom-1 z-40 flex items-center justify-center pointer-events-none transition-all duration-700 delay-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              hasOpened ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
          >
            <span className="text-xs sm:text-[13px] font-normal tracking-wide text-white/90 capitalize transition-opacity duration-300">
              {appList[activeIndex].name}
            </span>
          </div>
        </div>

        {/* Narrative Copy with Opening Slide Up */}
        <div
          className={`max-w-[760px] mx-auto px-4 mt-6 sm:mt-8 mb-8 text-center transition-all duration-1000 delay-600 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            hasOpened ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-base sm:text-lg md:text-[19px] text-[#a1a1a6] leading-relaxed font-normal">
            <strong className="text-white font-semibold">
              The apps you need for everything you want to create.
            </strong>{" "}
            Craft your stories with video in Final&nbsp;Cut&nbsp;Pro. Reimagine images in Pixelmator&nbsp;Pro. Produce your best music in Logic&nbsp;Pro. Supercharge productivity with premium content in Keynote, Pages, Numbers and Freeform. Boost workflows with AI features that build on Apple&nbsp;Intelligence.<sup>1</sup> And with Family Sharing, up to five other people can enjoy your subscription&nbsp;too.
          </p>
        </div>

        {/* "Try it free" White Pill Button with Opening Slide Up */}
        <div
          className={`transition-all duration-1000 delay-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            hasOpened ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95"
          }`}
        >
          <a
            href="https://floxa.flumenx.in/"
            className="inline-flex items-center justify-center bg-white hover:bg-[#e8e8ed] text-black text-sm sm:text-base font-normal px-5 py-2 sm:px-6 sm:py-2.5 rounded-full transition-all duration-150 active:scale-95 shadow-md"
          >
            <span>Try it free</span>
            <sup className="text-[10px] ml-0.5">2</sup>
          </a>
        </div>
      </div>
    </section>
  );
}
