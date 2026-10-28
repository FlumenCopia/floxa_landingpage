"use client";

import React, { useState, useEffect } from "react";
import AppIcon from "../ui/AppIcon";

const appList: Array<{
  id: string;
  name: string;
  iconName: "final-cut" | "pixelmator" | "logic-pro" | "keynote" | "pages" | "numbers" | "freeform" | "motion" | "compressor" | "mainstage";
  category: string;
  role: string;
}> = [
  { id: "final-cut", name: "Final Cut Pro", iconName: "final-cut", category: "Video", role: "Pro video editing & storytelling" },
  { id: "pixelmator", name: "Pixelmator Pro", iconName: "pixelmator", category: "Design", role: "AI-powered image & vector creation" },
  { id: "logic-pro", name: "Logic Pro", iconName: "logic-pro", category: "Audio", role: "Next-gen music production & mastering" },
  { id: "keynote", name: "Keynote", iconName: "keynote", category: "Productivity", role: "Presentation slides with AI notes" },
  { id: "pages", name: "Pages", iconName: "pages", category: "Productivity", role: "Documents with smart templates" },
  { id: "numbers", name: "Numbers", iconName: "numbers", category: "Productivity", role: "Spreadsheets with Magic Fill" },
  { id: "freeform", name: "Freeform", iconName: "freeform", category: "Productivity", role: "Infinite visual brainstorming" },
  { id: "motion", name: "Motion", iconName: "motion", category: "Motion", role: "Cinematic titles & effects" },
  { id: "compressor", name: "Compressor", iconName: "compressor", category: "Video", role: "Customized batch export" },
  { id: "mainstage", name: "MainStage", iconName: "mainstage", category: "Audio", role: "Live sound on stage" },
];

export default function HeroSection() {
  const [activeAppIndex, setActiveAppIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveAppIndex((prev) => (prev + 1) % appList.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const activeApp = appList[activeAppIndex];

  return (
    <section id="overview" className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden bg-black text-center">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-purple-600/15 via-blue-500/10 to-red-500/15 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-[1024px] mx-auto px-4 relative z-10 flex flex-col items-center">
        {/* Eyebrow Wordmark badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/10 mb-6 backdrop-blur-sm">
          <AppIcon name="apple" size={14} className="text-white" />
          <span className="text-xs sm:text-sm font-medium tracking-wide text-white/90">
            Creator Studio
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-white mb-6 leading-[1.05]">
          All yours for the&nbsp;making.
        </h1>

        {/* Dynamic App Carousel / Showcase */}
        <div className="w-full max-w-4xl my-8 md:my-12">
          {/* Main App Stage */}
          <div className="relative rounded-3xl bg-gradient-to-b from-[#1c1c1e] to-[#121214] border border-white/10 p-6 sm:p-10 shadow-2xl flex flex-col items-center justify-center overflow-hidden">
            {/* Top decorative gradient sheen */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

            {/* Spotlight Icon Preview */}
            <div className="relative my-4 flex flex-col items-center animate-fade-in">
              <div className="relative transform transition-transform duration-500 hover:scale-105">
                <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl" />
                <AppIcon name={activeApp.iconName} size={96} className="relative z-10 shadow-2xl" />
              </div>

              <div className="mt-5 text-center">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#2997ff]">
                  {activeApp.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-semibold text-white mt-1">
                  {activeApp.name}
                </h3>
                <p className="text-sm sm:text-base text-[#86868b] mt-1 max-w-md">
                  {activeApp.role}
                </p>
              </div>
            </div>

            {/* App Icons Strip */}
            <div className="w-full mt-8 pt-6 border-t border-white/[0.08] flex items-center justify-between sm:justify-center gap-2 sm:gap-4 overflow-x-auto no-scrollbar pb-2">
              {appList.map((app, index) => {
                const isActive = index === activeAppIndex;
                return (
                  <button
                    key={app.id}
                    onClick={() => {
                      setActiveAppIndex(index);
                      setIsPlaying(false);
                    }}
                    className={`flex flex-col items-center gap-1.5 p-2 rounded-xl transition-all duration-300 ${
                      isActive
                        ? "scale-110 opacity-100 ring-2 ring-[#0071e3]/80 bg-white/[0.06]"
                        : "opacity-45 hover:opacity-80 scale-95"
                    }`}
                    title={app.name}
                  >
                    <AppIcon name={app.iconName} size={36} />
                    <span className="text-[10px] text-white/80 font-medium truncate max-w-[55px] hidden sm:block">
                      {app.name.split(" ")[0]}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Play/Pause gallery controller button */}
            <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white flex items-center justify-center transition-colors ring-1 ring-white/10"
                aria-label={isPlaying ? "Pause auto carousel" : "Play auto carousel"}
              >
                {isPlaying ? (
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <rect x="6" y="4" width="4" height="16" rx="1" />
                    <rect x="14" y="4" width="4" height="16" rx="1" />
                  </svg>
                ) : (
                  <svg className="w-3.5 h-3.5 fill-current ml-0.5" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Narrative Intro Copy */}
        <p className="text-lg sm:text-xl md:text-2xl text-[#86868b] leading-relaxed max-w-3xl font-normal text-center mb-8">
          <strong className="text-white font-semibold">
            The apps you need for everything you want to create.
          </strong>{" "}
          Craft your stories with video in Final&nbsp;Cut&nbsp;Pro. Reimagine images in Pixelmator&nbsp;Pro. Produce your best music in Logic&nbsp;Pro. Supercharge productivity with premium content in Keynote, Pages, Numbers and Freeform. Boost workflows with AI features that build on Apple&nbsp;Intelligence.<sup>1</sup> And with Family Sharing, up to five other people can enjoy your subscription&nbsp;too.
        </p>

        {/* Primary CTA */}
        <div>
          <a
            href="#pricing"
            className="inline-flex items-center gap-1.5 bg-[#0071e3] hover:bg-[#0077ed] text-white text-base sm:text-lg font-medium px-7 py-3 rounded-full transition-all duration-200 active:scale-95 shadow-lg shadow-blue-500/20"
          >
            <span>Try it free</span>
            <sup className="text-xs">2</sup>
          </a>
        </div>
      </div>
    </section>
  );
}
