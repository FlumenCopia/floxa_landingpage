"use client";

import React from "react";
import FrontTabCard from "./FrontTabCard";
import { HeroGreenHorizons } from "../ui/GreenHorizons";

export default function HeroSection() {
  return (
    <section
      id="overview"
      className="relative pt-24 pb-20 sm:pt-32 sm:pb-28 overflow-hidden bg-[#030A06] select-none"
    >
      {/* 1. Sweeping Green Color Horizons Background Waves matching Reference Photo */}
      <HeroGreenHorizons />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 2-Column Hero: Left Copy + Right 3D Front Tab Card with Suite Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Headline, Narrative & Action Buttons */}
          <div className="lg:col-span-5 flex flex-col text-left">
            {/* Main Headline */}
            <h1 className="text-[32px] xs:text-4xl sm:text-5xl md:text-[56px] lg:text-[62px] font-bold tracking-tight text-white mb-4 sm:mb-6 leading-[1.08]">
              All your branding projects, in{" "}
              <span className="text-[#00E599] drop-shadow-[0_0_25px_rgba(0,229,153,0.45)]">
                one place.
              </span>
            </h1>

            {/* Narrative Body Copy */}
            <p className="text-[15px] sm:text-base md:text-lg text-slate-300 leading-relaxed mb-6 sm:mb-8 max-w-xl">
              Collaborate, create and deliver stunning brand experiences with FLOXA. Understand your client&apos;s story, brand personality, goals, and visual direction before design begins.
            </p>

              {/* Primary Action Button */}
              <div>
                <a
                  href="https://floxa.flumenx.in/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full xs:w-auto inline-flex items-center justify-center gap-2 bg-[#00E599] hover:bg-[#05f0a2] text-[#03140C] text-sm sm:text-base font-semibold px-8 py-3.5 sm:py-3.5 rounded-full transition-all duration-200 active:scale-95 shadow-[0_0_24px_rgba(0,229,153,0.45)] whitespace-nowrap"
                >
                  <span>Start Your Project</span>
                  <span className="text-base">→</span>
                </a>
              </div>
            </div>

            {/* Right Column: The Showing Card / Front Tab with 3D Depth */}
            <div className="lg:col-span-7 flex justify-center lg:justify-end">
              <FrontTabCard />
            </div>
          </div>
        </div>
    </section>
  );
}
