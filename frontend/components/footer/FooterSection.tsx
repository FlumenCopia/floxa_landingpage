"use client";

import React, { useState } from "react";
import { FooterGreenHorizons } from "../ui/GreenHorizons";

const footnotes = [
  "FLOXA by FlumenX helps creative professionals understand brands before design begins. Clarity Before Creation.",
  "New subscribers get started with structured brand discovery tools at floxa.flumenx.in.",
  "Student and educator plans require verification and are for eligible creative students only.",
  "Terms and conditions apply to all client discovery workspaces and links.",
  "Client discovery links are mobile-optimized and compatible with all modern browsers.",
  "Discovery summaries and briefs remain permanently accessible in your project archive.",
];

export default function FooterSection() {
  const [showAllFootnotes, setShowAllFootnotes] = useState(false);

  return (
    <footer className="bg-[#030A06] text-slate-400 text-[12px] leading-relaxed select-none relative overflow-hidden">
      {/* Sweeping Green Color Horizons in Footer */}
      <FooterGreenHorizons />

      {/* 1. Pre-Footer Elevated CTA Banner matching Reference Photo */}
      <div className="relative w-full border-t border-[#00E599]/20 pt-16 pb-16 sm:pt-20 sm:pb-20 overflow-hidden z-10">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
              Ready to elevate your<br className="hidden sm:inline" /> branding workflow?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-2">
              Start your journey with FLOXA today.
            </p>
          </div>

          <div className="w-full md:w-auto flex justify-center">
            <a
              href="https://floxa.flumenx.in/login"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full xs:w-auto inline-flex items-center justify-center gap-2 bg-[#00E599] hover:bg-[#05f0a2] text-[#03140C] font-semibold text-sm sm:text-base px-8 py-3.5 rounded-full transition-all duration-200 active:scale-95 shadow-[0_0_24px_rgba(0,229,153,0.4)] whitespace-nowrap"
            >
              <span>Get Started</span>
              <span className="text-base">→</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 pb-14 border-t border-white/[0.08] pt-10 relative z-10">
        {/* Brand Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/[0.08]">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-3">
              <span className="text-white font-pavelt text-2xl sm:text-3xl tracking-normal">
                Floxa
              </span>
              <span className="text-[11px] text-[#00E599] border border-[#00E599]/30 bg-[#00E599]/10 px-2 py-0.5 rounded-md">
                by FlumenX
              </span>
            </div>
            <p className="text-xs text-slate-400 font-normal">
              Create. Collaborate. Deliver.
            </p>
          </div>
          <p className="text-xs text-[#00E599] font-medium tracking-wide">
            Clarity Before Creation.
          </p>
        </div>

        {/* Footnotes List */}
        <div className="border-b border-white/[0.08] pb-6 mb-6">
          <ol className="space-y-2 list-decimal list-inside text-slate-400 text-[11px]">
            {(showAllFootnotes ? footnotes : footnotes.slice(0, 3)).map((note, idx) => (
              <li key={idx} className="pl-1">
                {note}
              </li>
            ))}
          </ol>
          {footnotes.length > 3 && (
            <button
              onClick={() => setShowAllFootnotes(!showAllFootnotes)}
              className="mt-2 text-[#00E599] hover:underline cursor-pointer text-[11px]"
            >
              {showAllFootnotes ? "Show less" : `Show ${footnotes.length - 3} more footnotes`}
            </button>
          )}
        </div>

        {/* Bottom Legal & Regional info */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            Copyright © 2026 FLOXA by FlumenX. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <a href="#overview" className="hover:text-[#00E599] transition-colors">Home</a>
            <span className="text-white/20">|</span>
            <a href="#final-cut-pro" className="hover:text-[#00E599] transition-colors">How It Works</a>
            <span className="text-white/20">|</span>
            <a href="#highlights" className="hover:text-[#00E599] transition-colors">Features</a>
            <span className="text-white/20">|</span>
            <a href="#pricing" className="hover:text-[#00E599] transition-colors">Pricing</a>
            <span className="text-white/20">|</span>
            <a href="#faq" className="hover:text-[#00E599] transition-colors">FAQ</a>
            <span className="text-white/20">|</span>
            <a href="#" className="hover:text-[#00E599] transition-colors">Privacy Policy</a>
            <span className="text-white/20">|</span>
            <a href="#" className="hover:text-[#00E599] transition-colors">Terms of Service</a>
          </div>

          <div className="text-slate-300 font-medium">
            India
          </div>
        </div>
      </div>
    </footer>
  );
}
