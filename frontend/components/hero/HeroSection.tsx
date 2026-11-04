"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";

interface AppItem {
  id: string;
  name: string;
  suite: string;
  tagline: string;
  bgImage: string;
  accentColor: string;
  glowColor: string;
  tintClass: string;
  anchor: string;
  status: "available" | "coming-soon";
  isHighlighted?: boolean;
}

// 3 Floxa suite products: Floxa for Design (highlighted) + Coming Soon suites
const appList: AppItem[] = [
  {
    id: "floxa-design",
    name: "Floxa for Design",
    suite: "Design",
    tagline: "Brand Discovery & Strategy",
    bgImage: "/images/floxa/banner1.png",
    accentColor: "#4dffa0",
    glowColor: "rgba(77, 255, 160, 0.6)",
    tintClass: "from-[#4dffa0]/15 to-black/60",
    anchor: "#highlights",
    status: "available",
    isHighlighted: true,
  },
  {
    id: "floxa-work",
    name: "Floxa for Work",
    suite: "Work",
    tagline: "Collaborative Workspace",
    bgImage: "/images/floxa/banner2.png",
    accentColor: "#818cf8",
    glowColor: "rgba(129, 140, 248, 0.4)",
    tintClass: "from-[#6366f1]/20 to-black/70",
    anchor: "#overview",
    status: "coming-soon",
  },
  {
    id: "floxa-marketing",
    name: "Floxa for Digital Marketing",
    suite: "Marketing",
    tagline: "Campaigns & Growth",
    bgImage: "/images/floxa/banner3.png",
    accentColor: "#f472b6",
    glowColor: "rgba(244, 114, 182, 0.4)",
    tintClass: "from-[#ec4899]/20 to-black/70",
    anchor: "#overview",
    status: "coming-soon",
  },
];

export default function HeroSection() {
  const [isPaused, setIsPaused] = useState(false);
  const [baseSpacing, setBaseSpacing] = useState(165);

  useEffect(() => {
    const updateSpacing = () => {
      const width = window.innerWidth;
      if (width < 440) {
        setBaseSpacing(100);
      } else if (width < 640) {
        setBaseSpacing(130);
      } else if (width < 1024) {
        setBaseSpacing(160);
      } else {
        setBaseSpacing(190);
      }
    };
    updateSpacing();
    window.addEventListener("resize", updateSpacing);
    return () => window.removeEventListener("resize", updateSpacing);
  }, []);

  const [activeIndex, setActiveIndex] = useState(0); // Starts on Floxa for Design
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
    }, 3200);

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
      className="relative pt-16 pb-20 sm:pt-26 sm:pb-18 overflow-hidden bg-black text-center select-none"
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
          className={`text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-semibold tracking-tight text-white mb-8 sm:mb-12 leading-[1.06] transition-all duration-1000 delay-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            hasOpened
              ? "opacity-100 translate-y-0 filter-none"
              : "opacity-0 translate-y-8 blur-sm"
          }`}
        >
          Great brands begin<br />
          before design.
        </h1>

        {/* Curved App Icons Swiper / Carousel with Opening Fan-Out Animation */}
        <div
          ref={trackRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleTouchStart}
          onMouseMove={handleTouchMove}
          onMouseUp={handleTouchEnd}
          onMouseLeave={handleTouchEnd}
          className={`relative w-full max-w-[1100px] h-[190px] xs:h-[210px] sm:h-[240px] md:h-[250px] flex items-center justify-center overflow-hidden cursor-grab active:cursor-grabbing my-2 sm:my-4 transition-opacity duration-1000 delay-300 ${
            hasOpened ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Subtle side vignettes to merge seamlessly into black background */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-r from-black via-black/85 to-transparent z-30 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-l from-black via-black/85 to-transparent z-30 pointer-events-none" />

          {/* Icons Carousel Track */}
          <div className="relative w-full h-full flex items-center justify-center">
            {appList.map((app, idx) => {
              // Calculate circular offset relative to activeIndex
              let offset = (idx - activeIndex) % appList.length;
              if (offset > appList.length / 2) offset -= appList.length;
              if (offset < -appList.length / 2) offset += appList.length;

              // Render visible icons within range [-2, 2]
              const isVisible = Math.abs(offset) <= 2;
              if (!isVisible) return null;

              const isCenter = offset === 0;

              // Spacing per icon slot
              const targetTranslateX = offset * baseSpacing + dragOffset;

              // On initial opening, elements fan out smoothly from center
              const translateX = hasOpened ? targetTranslateX : 0;

              // Dynamic scale and opacity matching Apple's depth curve
              const targetScale = isCenter ? 1.12 : Math.max(0.78, 1 - Math.abs(offset) * 0.16);
              const scale = hasOpened ? targetScale : 0.6;
              const opacity = hasOpened
                ? isCenter
                  ? 1
                  : Math.abs(offset) === 1
                    ? 0.75
                    : 0.35
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
                  {/* The Official Floxa Squircle Icon */}
                  <div className="transition-transform duration-300 hover:scale-105 active:scale-95 relative">
                    <div
                      className={`relative w-[86px] h-[86px] xs:w-[100px] xs:h-[100px] sm:w-[120px] sm:h-[120px] md:w-[132px] md:h-[132px] rounded-[24%] overflow-hidden select-none transition-all duration-500 ${
                        app.isHighlighted && isCenter
                          ? "ring-2 ring-[#4dffa0] shadow-[0_0_36px_rgba(77,255,160,0.65),0_12px_28px_rgba(0,0,0,0.9)]"
                          : app.isHighlighted
                          ? "ring-1.5 ring-[#4dffa0]/70 shadow-[0_0_22px_rgba(77,255,160,0.4),0_8px_20px_rgba(0,0,0,0.8)]"
                          : "ring-1 ring-white/15 shadow-[0_12px_24px_rgba(0,0,0,0.8)]"
                      }`}
                      style={{ background: "#050706" }}
                    >
                      {/* Fluid Metallic Liquid Silk Wallpaper from Floxa */}
                      <img
                        src={app.bgImage}
                        alt={app.name}
                        className="absolute inset-0 w-full h-full object-cover scale-110 pointer-events-none select-none"
                      />

                      {/* Colored Atmospheric Vignette */}
                      <div className={`absolute inset-0 bg-gradient-to-b ${app.tintClass} pointer-events-none`} />

                      {/* Apple Specular Glass Reflection */}
                      <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-black/60 pointer-events-none" />

                      {/* Inner Glass Edge Bevel */}
                      <div className="absolute inset-0 rounded-[24%] ring-1 ring-inset ring-white/10 pointer-events-none" />

                      {/* Floxa Icon Card Content */}
                      <div className="relative z-10 w-full h-full flex flex-col items-center justify-between py-2.5 sm:py-3.5 px-2">
                        {/* Top Suite Label */}
                        <span
                          className="text-[7.5px] xs:text-[8.5px] sm:text-[9.5px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full"
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.65)",
                            color: app.accentColor,
                            border: `1px solid ${app.accentColor}55`,
                          }}
                        >
                          {app.suite}
                        </span>

                        {/* Center Section: Logo + Middle "Coming Soon" Badge */}
                        <div className="relative w-full flex flex-col items-center justify-center my-auto py-0.5">
                          {/* FLOXA Logo (dimmed slightly for Coming Soon suites to provide contrast for center badge) */}
                          <div
                            className={`w-[84%] flex items-center justify-center transition-opacity duration-300 ${
                              app.status === "coming-soon" ? "opacity-30" : "opacity-100"
                            }`}
                          >
                            <img
                              src="/images/floxa/floxa_logo.png"
                              alt="FLOXA"
                              className="w-full h-auto object-contain filter drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]"
                            />
                          </div>

                          {/* Center Frosted Glass "Coming Soon" Badge right in the middle of the icon */}
                          {app.status === "coming-soon" && (
                            <div className="absolute inset-0 flex items-center justify-center z-20">
                              <span className="backdrop-blur-md bg-black/85 border border-white/25 text-white/95 font-semibold tracking-wider uppercase text-[7.5px] xs:text-[8.5px] sm:text-[9.5px] px-2.5 py-1 rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.8)] flex items-center gap-1.5 whitespace-nowrap scale-100 hover:scale-105 transition-transform">
                                <svg
                                  className="w-2.5 h-2.5 text-white/70 shrink-0"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <circle cx="12" cy="12" r="9" strokeWidth="2" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 7v5l3 2" />
                                </svg>
                                <span>Coming Soon</span>
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Bottom Status / Edition Indicator */}
                        <div className="flex items-center gap-1">
                          {app.status === "available" ? (
                            <span className="flex items-center gap-1 text-[7.5px] xs:text-[8px] sm:text-[9px] font-semibold tracking-wider text-[#4dffa0] uppercase">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#4dffa0] animate-pulse" />
                              Active
                            </span>
                          ) : (
                            <span className="text-[7px] xs:text-[7.5px] sm:text-[8px] font-medium tracking-wider text-white/40 uppercase">
                              Floxa Universe
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
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
              Every brand has a story.
            </strong>{" "}
            FLOXA helps designers understand that story before turning ideas into creative work. Discover your client&apos;s brand personality, vision, goals, and preferences through a more structured brand discovery process. Before the logo. Before the colours. Before the first creative idea.<sup>1</sup> By FlumenX.
          </p>
        </div>

        {/* "Try it free" White Pill Button with Opening Slide Up */}
        <div
          className={`transition-all duration-1000 delay-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            hasOpened ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95"
          }`}
        >
          <a
            href="https://floxa.flumenx.in/login"
            target="_blank"
            rel="noopener noreferrer"
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
