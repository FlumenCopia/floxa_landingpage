"use client";

import React, { useState, useEffect } from "react";

interface DiscoveryCard {
  id: string;
  tag: string;
  title: string;
  summary: string;
  status: string;
  color: string;
  icon: React.ReactNode;
  tags: string[];
}

const discoveryPillars: DiscoveryCard[] = [
  {
    id: "personality",
    tag: "Brand Personality",
    title: "The Visionary Archetype",
    summary: "Bold, forward-thinking, and uncompromisingly authentic. Inspiring creators worldwide.",
    status: "Captured in Discovery",
    color: "#2997ff",
    icon: (
      <svg className="w-5 h-5 text-[#2997ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    tags: ["Progressive", "Articulate", "High Impact"],
  },
  {
    id: "visual-direction",
    tag: "Visual Preferences",
    title: "Minimal High-Contrast Aesthetic",
    summary: "Monochrome foundations with electric neon accents, spacious layouts, and Swiss typography.",
    status: "Client Aligned",
    color: "#ff375f",
    icon: (
      <svg className="w-5 h-5 text-[#ff375f]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    tags: ["Clean", "Architectural", "Editorial"],
  },
  {
    id: "vision-goals",
    tag: "Vision & Goals",
    title: "Category Disruption",
    summary: "Redefining the creative onboarding standard. Transitioning from ambiguous briefs to deep clarity.",
    status: "Core Objective",
    color: "#30d158",
    icon: (
      <svg className="w-5 h-5 text-[#30d158]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    tags: ["01 Create", "02 Invite", "03 Discover", "04 Direct"],
  },
  {
    id: "audience",
    tag: "Target Audience",
    title: "Designers & Creative Studios",
    summary: "Freelance brand identity designers, boutique branding agencies, and design consultants.",
    status: "Primary Persona",
    color: "#ff9f0a",
    icon: (
      <svg className="w-5 h-5 text-[#ff9f0a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    tags: ["Identity", "Typography", "Strategy"],
  },
];

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasOpened(true);
    }, 120);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isPaused || !hasOpened) return;
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % discoveryPillars.length);
    }, 3800);
    return () => clearInterval(interval);
  }, [isPaused, hasOpened]);

  return (
    <section
      id="overview"
      className="relative pt-24 pb-20 sm:pt-32 sm:pb-28 overflow-hidden bg-black text-center select-none"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#0071e3]/15 via-[#bf5af2]/10 to-transparent blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center">
        {/* Brand Eyebrow Pill */}
        <div
          className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 backdrop-blur-md mb-6 transition-all duration-700 ${
            hasOpened ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-[#0071e3] animate-pulse" />
          <span className="text-[12px] sm:text-[13px] font-medium text-white/90 tracking-wide">
            FLOXA by FlumenX
          </span>
          <span className="text-white/30">•</span>
          <span className="text-[12px] sm:text-[13px] font-medium text-white/60">
            Clarity Before Creation
          </span>
        </div>

        {/* Wordmark with Opening Scale & Shimmer */}
        <div
          className={`flex items-center justify-center gap-2 mb-4 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            hasOpened ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-5 scale-90"
          }`}
        >
          <span className="text-4xl sm:text-6xl md:text-7xl font-pavelt tracking-normal apple-wordmark-shimmer">
            FLOXA
          </span>
        </div>

        {/* Main Headline */}
        <h1
          className={`text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-semibold tracking-tight text-white mb-6 leading-[1.08] max-w-4xl transition-all duration-1000 delay-150 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            hasOpened ? "opacity-100 translate-y-0 filter-none" : "opacity-0 translate-y-8 blur-sm"
          }`}
        >
          Great Brands Begin<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/60">
            Before Design.
          </span>
        </h1>

        {/* Narrative Subhead */}
        <div
          className={`max-w-[760px] mx-auto px-4 mb-8 text-center transition-all duration-1000 delay-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            hasOpened ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-base sm:text-lg md:text-[20px] text-[#a1a1a6] leading-relaxed font-normal">
            <strong className="text-white font-semibold">Every brand has a story.</strong> FLOXA helps designers understand that story before turning ideas into creative work. Discover your client&apos;s brand personality, vision, goals, and preferences through a more structured brand discovery process.
          </p>
          <p className="text-sm sm:text-base text-white/50 mt-3 font-normal tracking-wide">
            Before the logo. Before the colours. Before the first creative idea.
          </p>
        </div>

        {/* CTA Buttons Row */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-14 transition-all duration-1000 delay-450 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            hasOpened ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95"
          }`}
        >
          <a
            href="https://floxa.flumenx.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-white hover:bg-[#e8e8ed] text-black text-sm sm:text-base font-medium px-7 py-3 rounded-full transition-all duration-150 active:scale-95 shadow-lg shadow-white/10"
          >
            <span>Get Started with FLOXA</span>
            <svg className="w-4 h-4 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>

          <a
            href="#how-it-works"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-white/[0.08] hover:bg-white/[0.14] text-white text-sm sm:text-base font-normal px-6 py-3 rounded-full border border-white/10 transition-all duration-150 active:scale-95 backdrop-blur-md"
          >
            <span>See How It Works</span>
          </a>
        </div>

        {/* Interactive Visual Showcase: Brand Discovery Interactive Deck */}
        <div
          className={`w-full max-w-[1040px] transition-all duration-1000 delay-600 ${
            hasOpened ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Deck Container Card with Glassmorphic Apple Border */}
          <div className="relative rounded-[28px] sm:rounded-[36px] bg-[#161617]/90 border border-white/[0.12] p-5 sm:p-8 md:p-10 shadow-2xl backdrop-blur-xl overflow-hidden text-left">
            {/* Top Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-white/[0.08]">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                </div>
                <span className="text-xs sm:text-[13px] text-white/50 font-mono tracking-tight pl-2 border-l border-white/10">
                  FLOXA Discovery Canvas · Live Preview
                </span>
              </div>

              {/* Pause/Play Interactive Deck */}
              <button
                onClick={() => setIsPaused(!isPaused)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white flex items-center justify-center transition-colors"
                aria-label={isPaused ? "Resume discovery walkthrough" : "Pause discovery walkthrough"}
              >
                {isPaused ? (
                  <svg className="w-3 h-3 fill-current ml-0.5" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                ) : (
                  <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                    <rect x="6" y="4" width="3.5" height="16" rx="1" />
                    <rect x="14.5" y="4" width="3.5" height="16" rx="1" />
                  </svg>
                )}
              </button>
            </div>

            {/* Pillars Selection Tabs */}
            <div className="flex items-center gap-2 sm:gap-3 py-6 overflow-x-auto no-scrollbar">
              {discoveryPillars.map((pillar, idx) => {
                const isActive = activeTab === idx;
                return (
                  <button
                    key={pillar.id}
                    onClick={() => {
                      setActiveTab(idx);
                      setIsPaused(true);
                    }}
                    className={`shrink-0 px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-2 border ${
                      isActive
                        ? "bg-white text-black border-white shadow-md scale-[1.02]"
                        : "bg-white/[0.04] text-white/60 border-white/[0.08] hover:text-white hover:bg-white/[0.08]"
                    }`}
                  >
                    <span>{pillar.tag}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Pillar Card Stage */}
            <div className="relative rounded-2xl bg-black/60 border border-white/[0.08] p-6 sm:p-8 transition-all duration-500 min-h-[220px] flex flex-col justify-between">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                <div className="max-w-xl">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="p-1.5 rounded-lg bg-white/5 border border-white/10">
                      {discoveryPillars[activeTab].icon}
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-white/50">
                      {discoveryPillars[activeTab].tag}
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-[#0071e3]/20 text-[#2997ff] border border-[#0071e3]/30">
                      {discoveryPillars[activeTab].status}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white tracking-tight mb-2">
                    {discoveryPillars[activeTab].title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#a1a1a6] leading-relaxed">
                    {discoveryPillars[activeTab].summary}
                  </p>
                </div>

                {/* Tags / Insights Badges */}
                <div className="flex md:flex-col flex-wrap gap-2 shrink-0 md:items-end">
                  {discoveryPillars[activeTab].tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-white/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom discovery timeline indicator */}
              <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-white/40">
                <span>Phase: Pre-Design Brand Discovery</span>
                <span>Clarity Score: 98% Aligned</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
