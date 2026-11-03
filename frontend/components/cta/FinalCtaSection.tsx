"use client";

import React from "react";

export default function FinalCtaSection() {
  return (
    <section className="pt-20 pb-24 sm:pt-28 sm:pb-32 bg-black text-white relative select-none overflow-hidden border-t border-white/[0.06]">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-[#0071e3]/20 via-[#bf5af2]/15 to-transparent blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-[980px] mx-auto px-4 sm:px-6 text-center">
        {/* Brand Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 backdrop-blur-md mb-6">
          <span className="text-xs font-medium text-white/90">FLOXA by FlumenX</span>
          <span className="text-white/30">•</span>
          <span className="text-xs font-medium text-white/60">Clarity Before Creation</span>
        </div>

        {/* Headlines */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white mb-4 leading-[1.08]">
          Before You Create,<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/70">
            Discover.
          </span>
        </h2>

        <p className="text-lg sm:text-2xl text-white/80 font-medium mb-6">
          Your Next Creative Idea Starts Here.
        </p>

        <p className="text-base sm:text-lg md:text-[19px] text-[#a1a1a6] leading-relaxed max-w-2xl mx-auto mb-10 font-normal">
          Your next great brand identity starts with understanding. Discover the vision, explore the possibilities, and begin your creative process with greater clarity.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a
            href="https://floxa.flumenx.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-white hover:bg-[#e8e8ed] text-black text-sm sm:text-base font-medium px-8 py-3.5 rounded-full transition-all duration-150 active:scale-95 shadow-xl shadow-white/10"
          >
            <span>Get Started with FLOXA</span>
            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>

          <a
            href="#how-it-works"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-white/[0.08] hover:bg-white/[0.14] text-white text-sm sm:text-base font-normal px-7 py-3.5 rounded-full border border-white/10 transition-all duration-150 active:scale-95 backdrop-blur-md"
          >
            <span>Learn More About FLOXA</span>
          </a>
        </div>

        <p className="text-xs text-white/40 tracking-wider uppercase font-mono">
          FLOXA is where brand discovery begins.
        </p>
      </div>
    </section>
  );
}

