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

// 4 Floxa suite products: Floxa for Design (highlighted) + Coming Soon suites (Work, Digital Marketing, Learning)
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
  {
    id: "floxa-learning",
    name: "Floxa for Learning",
    suite: "Learning",
    tagline: "Skills & Brand Academy",
    bgImage: "/images/floxa/banner2.png",
    accentColor: "#fbbf24",
    glowColor: "rgba(251, 191, 36, 0.4)",
    tintClass: "from-[#f59e0b]/20 to-black/70",
    anchor: "#overview",
    status: "coming-soon",
  },
];

export default function HeroSection() {
  const [isPaused, setIsPaused] = useState(false);
  const [baseSpacing, setBaseSpacing] = useState(215);

  useEffect(() => {
    const updateSpacing = () => {
      const width = window.innerWidth;
      if (width < 440) {
        setBaseSpacing(115);
      } else if (width < 640) {
        setBaseSpacing(145);
      } else if (width < 1024) {
        setBaseSpacing(185);
      } else {
        setBaseSpacing(215);
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
      className="relative pt-16 pb-20 sm:pt-26 sm:pb-18 overflow-hidden bg-[#020806] text-center select-none"
    >
      {/* Ambient Floxa Emerald & Seafoam Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[480px] bg-gradient-to-b from-[#4dffa0]/10 via-[#6ee7b7]/5 to-transparent pointer-events-none blur-3xl z-0" />

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
            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#06160f]/90 hover:bg-[#081c13] border border-[#4dffa0]/20 text-[#e8f5ef] hover:text-white flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] active:scale-95 shadow-lg ${
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

        {/* Main Headline with Opening Staggered Reveal and Rose Gold Accent */}
        <h1
          className={`text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-semibold tracking-tight text-[#e8f5ef] mb-8 sm:mb-12 leading-[1.06] transition-all duration-1000 delay-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            hasOpened
              ? "opacity-100 translate-y-0 filter-none"
              : "opacity-0 translate-y-8 blur-sm"
          }`}
        >
          Great brands begin<br />
          <span className="rosegold-gradient-text">before design.</span>
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
          className={`relative w-full max-w-[1100px] h-[210px] xs:h-[230px] sm:h-[265px] md:h-[285px] flex items-center justify-center overflow-hidden cursor-grab active:cursor-grabbing my-3 sm:my-5 transition-opacity duration-1000 delay-300 ${
            hasOpened ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Subtle side vignettes to merge seamlessly into Floxa Obsidian background */}
          <div className="absolute left-0 top-0 bottom-0 w-10 sm:w-20 bg-gradient-to-r from-[#020806] via-[#020806]/85 to-transparent z-30 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-10 sm:w-20 bg-gradient-to-l from-[#020806] via-[#020806]/85 to-transparent z-30 pointer-events-none" />

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
              const targetScale = isCenter ? 1.12 : Math.max(0.82, 1 - Math.abs(offset) * 0.12);
              const scale = hasOpened ? targetScale : 0.6;
              const opacity = hasOpened
                ? isCenter
                  ? 1
                  : Math.abs(offset) === 1
                    ? 0.82
                    : 0.55
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
                  {/* Clean, Authentic Floxa Product Card */}
                  <div className="transition-transform duration-300 hover:scale-105 active:scale-95 relative">
                    <div
                      className={`relative w-[110px] h-[122px] xs:w-[128px] xs:h-[140px] sm:w-[155px] sm:h-[168px] md:w-[172px] md:h-[185px] rounded-[22px] xs:rounded-[26px] sm:rounded-[30px] md:rounded-[34px] overflow-hidden select-none transition-all duration-500 bg-gradient-to-b from-[#06150e] via-[#040e09] to-[#020704] ${
                        app.isHighlighted && isCenter
                          ? "border border-[#4dffa0]/90 shadow-[0_8px_32px_rgba(77,255,160,0.22),0_2px_8px_rgba(0,0,0,0.9)]"
                          : app.isHighlighted
                          ? "border border-[#4dffa0]/50 shadow-[0_6px_20px_rgba(77,255,160,0.15)]"
                          : "border border-white/10 hover:border-white/20 shadow-[0_6px_20px_rgba(0,0,0,0.6)]"
                      }`}
                    >
                      {/* Subtle Floxa Liquid Silk Texture Watermark */}
                      <img
                        src={app.bgImage}
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-screen pointer-events-none select-none"
                      />

                      {/* Card Inner Content */}
                      <div className="relative z-10 w-full h-full flex flex-col items-center justify-between py-3 sm:py-4 px-2.5 sm:px-3">
                        {/* Top Suite Label */}
                        <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/[0.05] border border-white/[0.08]">
                          <span
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ backgroundColor: app.accentColor }}
                          />
                          <span className="text-[8.5px] xs:text-[9.5px] sm:text-[11px] font-semibold tracking-wider uppercase text-[#e8f5ef]">
                            {app.suite}
                          </span>
                        </div>

                        {/* Center Section: FLOXA Logo + Center Coming Soon Badge */}
                        <div className="relative w-full flex items-center justify-center my-auto py-1">
                          <img
                            src="/images/floxa/floxa_logo.png"
                            alt="FLOXA"
                            className={`w-[78%] h-auto object-contain transition-opacity duration-300 filter drop-shadow-md select-none ${
                              app.status === "coming-soon" ? "opacity-30" : "opacity-100"
                            }`}
                          />

                          {/* Refined Center Coming Soon Badge */}
                          {app.status === "coming-soon" && (
                            <div className="absolute inset-0 flex items-center justify-center z-20">
                              <span className="backdrop-blur-md bg-[#020806]/90 border border-[#6ee7b7]/35 text-[#6ee7b7] font-semibold tracking-wider uppercase text-[8px] xs:text-[9px] sm:text-[10px] px-3 py-1 rounded-full shadow-lg flex items-center gap-1.5 whitespace-nowrap">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#4dffa0]" />
                                <span>Coming Soon</span>
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Bottom Status Indicator */}
                        <div className="min-h-[16px] flex items-center justify-center">
                          {app.status === "available" && (
                            <span className="flex items-center gap-1.5 text-[8.5px] xs:text-[9.5px] sm:text-[10.5px] font-semibold tracking-wider text-[#4dffa0] uppercase">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#4dffa0] animate-pulse" />
                              Active
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
          <p className="text-base sm:text-lg md:text-[19px] text-[#89aca0] leading-relaxed font-normal">
            <strong className="text-[#e8f5ef] font-semibold">
              Every brand has a story.
            </strong>{" "}
            FLOXA helps designers understand that story before turning ideas into creative work. Discover your client&apos;s brand personality, vision, goals, and preferences through a more structured brand discovery process. Before the logo. Before the colours. Before the first creative idea.<sup>1</sup> By FlumenX.
          </p>
        </div>

        {/* "Try it free" Electric Mint Pill Button with Opening Slide Up */}
        <div
          className={`transition-all duration-1000 delay-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            hasOpened ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95"
          }`}
        >
          <a
            href="https://floxa.flumenx.in/login"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-gradient-to-r from-[#4dffa0] via-[#38e88f] to-[#1fd879] hover:brightness-105 text-[#02140a] text-sm sm:text-base font-semibold px-6 py-2.5 sm:px-7 sm:py-3 rounded-full transition-all duration-200 active:scale-95 shadow-[0_0_24px_rgba(77,255,160,0.4)]"
          >
            <span>Try it free</span>
            <sup className="text-[10px] ml-0.5">2</sup>
          </a>
        </div>
      </div>
    </section>
  );
}
