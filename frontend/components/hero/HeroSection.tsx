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

// 3 Floxa suite products matching the original layout:
// Floxa for Design (highlighted center), Floxa for Work, and Floxa for Digital Marketing
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

// Tripled list for seamless infinite physical sliding:
// Set 0: indices 0..2
// Set 1: indices 3..5 (Starts at index 3: Floxa for Design centered)
// Set 2: indices 6..8
const loopedAppList = [...appList, ...appList, ...appList];

export default function HeroSection() {
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);

  // Virtual index in loopedAppList (starts at index 3: Floxa for Design)
  const [virtualIndex, setVirtualIndex] = useState(3);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Responsive dimensions for 3-card presentation
  const [dimensions, setDimensions] = useState({
    cardWidth: 174,
    cardHeight: 190,
    gap: 36,
  });

  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth;
      if (width < 440) {
        setDimensions({ cardWidth: 124, cardHeight: 138, gap: 16 });
      } else if (width < 640) {
        setDimensions({ cardWidth: 144, cardHeight: 158, gap: 22 });
      } else if (width < 1024) {
        setDimensions({ cardWidth: 162, cardHeight: 176, gap: 28 });
      } else {
        setDimensions({ cardWidth: 174, cardHeight: 190, gap: 36 });
      }
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const step = dimensions.cardWidth + dimensions.gap;

  // Drag interaction state & refs
  const trackRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const currentDragOffset = useRef(0);
  const hasMoved = useRef(false);
  const [dragOffset, setDragOffset] = useState(0);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Trigger opening animation on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setHasOpened(true);
    }, 120);
    return () => clearTimeout(timer);
  }, []);

  // Slide advancement
  const nextSlide = useCallback(() => {
    setIsTransitioning(true);
    setVirtualIndex((prev) => prev + 1);
  }, []);

  const prevSlide = useCallback(() => {
    setIsTransitioning(true);
    setVirtualIndex((prev) => prev - 1);
  }, []);

  // Autoplay loop: runs when not paused, not hovered, not dragged, and after opening
  useEffect(() => {
    if (isPaused || isHovered || !hasOpened) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      nextSlide();
    }, 3200);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, isHovered, hasOpened, nextSlide]);

  // Seamless Infinite Loop Normalization:
  // When a transition completes and index is outside middle set [3..5],
  // instantly shift back to middle set with transition: none so it is 100% invisible.
  const handleTransitionEnd = (e: React.TransitionEvent<HTMLDivElement>) => {
    if (e.target !== trackRef.current) return;

    if (virtualIndex >= 6) {
      setIsTransitioning(false);
      setVirtualIndex((prev) => prev - 3);
    } else if (virtualIndex < 3) {
      setIsTransitioning(false);
      setVirtualIndex((prev) => prev + 3);
    }
  };

  // Touch & Mouse Drag Handlers for 1:1 smooth track movement
  const handleTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
    isDragging.current = true;
    hasMoved.current = false;
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    startX.current = clientX;
    currentDragOffset.current = 0;
  };

  const handleTouchMove = (e: React.TouchEvent | React.MouseEvent) => {
    if (!isDragging.current) return;
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const diff = clientX - startX.current;
    if (Math.abs(diff) > 5) {
      hasMoved.current = true;
    }
    currentDragOffset.current = diff;
    setDragOffset(diff);
  };

  const handleTouchEnd = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const threshold = 45;
    setIsTransitioning(true);
    if (currentDragOffset.current < -threshold) {
      setVirtualIndex((prev) => prev + 1);
    } else if (currentDragOffset.current > threshold) {
      setVirtualIndex((prev) => prev - 1);
    }
    setDragOffset(0);
    currentDragOffset.current = 0;
  };

  const handleCardClick = (idx: number) => {
    if (hasMoved.current) return;
    setIsTransitioning(true);
    setVirtualIndex(idx);
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

        {/* Main Headline with Opening Reveal and Emerald Accent */}
        <h1
          className={`text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-semibold tracking-tight text-[#e8f5ef] mb-8 sm:mb-12 leading-[1.06] transition-all duration-1000 delay-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            hasOpened
              ? "opacity-100 translate-y-0 filter-none"
              : "opacity-0 translate-y-8 blur-sm"
          }`}
        >
          Great brands begin<br />
          <span className="mint-gradient-text">before design.</span>
        </h1>

        {/* 3-Card Carousel Stage: Exactly 3 cards visible (Left, Center, Right) */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            if (isDragging.current) handleTouchEnd();
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleTouchStart}
          onMouseMove={handleTouchMove}
          onMouseUp={handleTouchEnd}
          className={`relative w-full max-w-[820px] h-[220px] xs:h-[240px] sm:h-[280px] md:h-[305px] flex items-center justify-center overflow-hidden cursor-grab active:cursor-grabbing my-3 sm:my-5 transition-opacity duration-1000 delay-300 ${
            hasOpened ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Subtle side vignettes to merge outer cards smoothly into Floxa Obsidian background */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 md:w-28 bg-gradient-to-r from-[#020806] via-[#020806]/85 to-transparent z-40 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 md:w-28 bg-gradient-to-l from-[#020806] via-[#020806]/85 to-transparent z-40 pointer-events-none" />

          {/* Continuous Conveyor Track: Only 3 cards visible, moving in unison without crossover glitches */}
          <div
            ref={trackRef}
            onTransitionEnd={handleTransitionEnd}
            style={{
              display: "flex",
              alignItems: "center",
              gap: `${dimensions.gap}px`,
              position: "absolute",
              left: "0",
              top: "50%",
              transform: `translate3d(calc(50% - ${
                virtualIndex * step + dimensions.cardWidth / 2
              }px + ${dragOffset}px), -50%, 0)`,
              transition: isTransitioning
                ? "transform 650ms cubic-bezier(0.16, 1, 0.3, 1)"
                : "none",
              willChange: "transform",
            }}
          >
            {loopedAppList.map((app, idx) => {
              const distance = Math.abs(idx - virtualIndex);
              const isCenter = distance === 0;

              // Only distance 0 (center) and distance 1 (left & right) are visible
              let scale = 0.72;
              let opacity = 0;
              let zIndex = 1;

              if (distance === 0) {
                scale = 1.1;
                opacity = 1;
                zIndex = 30;
              } else if (distance === 1) {
                scale = 0.88;
                opacity = 0.75;
                zIndex = 20;
              } else {
                scale = 0.72;
                opacity = 0;
                zIndex = 1;
              }

              return (
                <div
                  key={`${app.id}-${idx}`}
                  onClick={() => handleCardClick(idx)}
                  className="shrink-0 flex flex-col items-center justify-center cursor-pointer transition-all duration-500 ease-out"
                  style={{
                    width: `${dimensions.cardWidth}px`,
                    height: `${dimensions.cardHeight}px`,
                    transform: `scale(${scale})`,
                    opacity: opacity,
                    zIndex: zIndex,
                    pointerEvents: distance <= 1 ? "auto" : "none",
                  }}
                >
                  {/* Clean, Authentic Floxa Product Card (Zero fake AI shine, authentic obsidian surface) */}
                  <div
                    className={`relative w-full h-full rounded-[22px] xs:rounded-[26px] sm:rounded-[30px] md:rounded-[34px] overflow-hidden select-none transition-all duration-500 bg-gradient-to-b from-[#06160f] via-[#04100b] to-[#020806] ${
                      isCenter && app.isHighlighted
                        ? "border border-[#4dffa0]/90 shadow-[0_8px_32px_rgba(77,255,160,0.25),0_2px_8px_rgba(0,0,0,0.9)]"
                        : isCenter
                        ? "border border-[#4dffa0]/50 shadow-[0_6px_24px_rgba(77,255,160,0.15)]"
                        : "border border-white/10 hover:border-white/20 shadow-[0_6px_20px_rgba(0,0,0,0.6)]"
                    }`}
                  >
                    {/* Subtle Floxa Liquid Silk Texture Background */}
                    <img
                      src={app.bgImage}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-screen pointer-events-none select-none"
                    />

                    {/* Card Inner Content */}
                    <div className="relative z-10 w-full h-full flex flex-col items-center justify-between py-3 sm:py-4 px-2.5 sm:px-3">
                      {/* Top Suite Label */}
                      <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/[0.05] border border-white/[0.08]">
                        <span
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: app.accentColor }}
                        />
                        <span className="text-[8.5px] xs:text-[9.5px] sm:text-[10.5px] font-semibold tracking-wider uppercase text-[#e8f5ef]">
                          {app.suite}
                        </span>
                      </div>

                      {/* Center Section: FLOXA Logo + Center Coming Soon Badge */}
                      <div className="relative w-full flex items-center justify-center my-auto py-1">
                        <img
                          src="/images/floxa/floxa_logo.png"
                          alt="FLOXA"
                          className={`w-[78%] h-auto object-contain transition-opacity duration-300 filter drop-shadow-md select-none ${
                            app.status === "coming-soon" ? "opacity-35" : "opacity-100"
                          }`}
                        />

                        {/* Refined Center Coming Soon Badge */}
                        {app.status === "coming-soon" && (
                          <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                            <span className="backdrop-blur-md bg-[#020806]/85 border border-[#6ee7b7]/30 text-[#6ee7b7] font-semibold tracking-wider uppercase text-[8px] xs:text-[8.5px] sm:text-[9.5px] px-3 py-1 rounded-full shadow-lg flex items-center gap-1.5 whitespace-nowrap">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#4dffa0]" />
                              <span>Coming Soon</span>
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Bottom Status Indicator (No 'Floxa Universe' text line) */}
                      <div className="min-h-[16px] flex items-center justify-center">
                        {app.status === "available" && (
                          <span className="flex items-center gap-1.5 text-[8.5px] xs:text-[9.5px] sm:text-[10px] font-semibold tracking-wider text-[#4dffa0] uppercase">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#4dffa0] animate-pulse" />
                            Active
                          </span>
                        )}
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
          className={`max-w-[760px] mx-auto px-4 mt-5 sm:mt-7 mb-8 text-center transition-all duration-1000 delay-600 ease-[cubic-bezier(0.16,1,0.3,1)] ${
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
