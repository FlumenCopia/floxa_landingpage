"use client";

import React, { useState } from "react";
import AppIcon from "../ui/AppIcon";

export default function HeroSection() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section
      id="overview"
      className="relative pt-16 pb-20 sm:pt-20 sm:pb-28 overflow-hidden bg-black text-center select-none"
    >
      <div className="max-w-[1280px] mx-auto px-4 relative z-10 flex flex-col items-center">
        {/* Top Header Row with Wordmark and Floating Pause Button */}
        <div className="w-full flex items-center justify-between mb-4 px-2 sm:px-6 relative">
          <div className="w-10 h-10 hidden sm:block" /> {/* Spacer to balance pause button */}

          {/* Centered Wordmark */}
          <div className="flex items-center justify-center gap-2 text-white mx-auto">
            <AppIcon name="apple" size={24} className="text-white" />
            <span className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
              Creator Studio
            </span>
          </div>

          {/* Right Floating Play/Pause Button */}
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#1d1d1f] hover:bg-[#2d2d30] border border-white/10 text-white/80 hover:text-white flex items-center justify-center transition-all duration-200 active:scale-95 shadow-lg"
            aria-label={isPaused ? "Play hero animation" : "Pause hero animation"}
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

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[80px] font-semibold tracking-tight text-white mb-6 sm:mb-8 leading-[1.06]">
          All yours for the making.
        </h1>

        {/* Hero App Icons Showcase Image */}
        <div className="relative w-full max-w-[1100px] my-4 sm:my-8 flex items-center justify-center overflow-hidden">
          {/* Subtle side vignettes to merge seamlessly into black background */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />

          {/* Apple's official Hero Endframe Image */}
          <img
            src="https://www.apple.com/in/apple-creator-studio/images/overview/welcome/hero_endframe__chfdpsnstqeu_large.jpg"
            srcSet="
              https://www.apple.com/in/apple-creator-studio/images/overview/welcome/hero_endframe__chfdpsnstqeu_small_2x.jpg 734w,
              https://www.apple.com/in/apple-creator-studio/images/overview/welcome/hero_endframe__chfdpsnstqeu_medium_2x.jpg 1068w,
              https://www.apple.com/in/apple-creator-studio/images/overview/welcome/hero_endframe__chfdpsnstqeu_large_2x.jpg 1440w
            "
            sizes="(max-width: 734px) 100vw, (max-width: 1068px) 95vw, 1100px"
            alt="Apple Creator Studio app icons, Final Cut Pro, Pixelmator Pro, Logic Pro, Pages, Compressor, MainStage, Numbers, Motion, Freeform, Keynote"
            className="w-full h-auto max-h-[460px] object-contain select-none pointer-events-none transition-transform duration-700"
            style={{
              filter: "drop-shadow(0 20px 40px rgba(0, 0, 0, 0.8))",
            }}
          />
        </div>

        {/* Narrative Copy */}
        <div className="max-w-[760px] mx-auto px-4 mt-4 sm:mt-6 mb-8 text-center">
          <p className="text-base sm:text-lg md:text-[19px] text-[#a1a1a6] leading-relaxed font-normal">
            <strong className="text-white font-semibold">
              The apps you need for everything you want to create.
            </strong>{" "}
            Craft your stories with video in Final&nbsp;Cut&nbsp;Pro. Reimagine images in Pixelmator&nbsp;Pro. Produce your best music in Logic&nbsp;Pro. Supercharge productivity with premium content in Keynote, Pages, Numbers and Freeform. Boost workflows with AI features that build on Apple&nbsp;Intelligence.<sup>1</sup> And with Family Sharing, up to five other people can enjoy your subscription&nbsp;too.
          </p>
        </div>

        {/* "Try it free" White Pill Button */}
        <div>
          <a
            href="https://apps.apple.com/in/app-bundle/id1868448255"
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
