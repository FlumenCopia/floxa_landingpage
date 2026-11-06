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
      <footer className="bg-[#030A06] text-slate-300 text-sm leading-relaxed relative overflow-hidden">
        {/* Sweeping Green Color Horizons in Footer (Positioned safely behind CTA) */}
        <FooterGreenHorizons />

            {/* 1. Pre-Footer Elevated CTA Banner matching Reference Photo */}
            <div className="relative w-full border-t border-[#00B377]/20 py-14 sm:py-16 md:py-20 overflow-hidden z-10">
              <div className="max-w-[1200px] mx-auto px-5 sm:px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 text-center md:text-left">
                <div className="max-w-xl">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
                    Ready to elevate your<br className="hidden sm:inline" /> branding workflow?
                  </h2>
                  <p className="text-slate-300 text-sm sm:text-base mt-2.5 font-normal">
                    Start your journey with FLOXA today.
                  </p>
                </div>

                <div className="w-full md:w-auto flex justify-center md:justify-end shrink-0">
                  <a
                    href="https://floxa.flumenx.in/login"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full xs:w-auto inline-flex items-center justify-center gap-2 bg-[#00B377] hover:bg-[#00A36C] text-white font-semibold text-sm sm:text-base px-8 py-3.5 rounded-full transition-all duration-200 active:scale-95 shadow-[0_4px_16px_rgba(0,179,119,0.25)] hover:shadow-[0_6px_22px_rgba(0,179,119,0.35)] whitespace-nowrap"
                  >
                    <span>Get Started</span>
                    <span className="text-base">→</span>
                  </a>
                </div>
              </div>
            </div>

            {/* 2. Main Footer Body (Deep Dark Obsidian with Crisp Typography) */}
            <div className="max-w-[1200px] mx-auto px-5 sm:px-6 pb-12 sm:pb-14 border-t border-white/[0.1] pt-10 relative z-10">
              {/* Brand Header */}
              <div className="flex flex-col sm:flex-row items-center sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/[0.1] text-center sm:text-left">
                <div className="flex flex-col items-center sm:items-start gap-1.5">
                  <div className="flex items-center gap-3">
                    <span className="text-white font-pavelt text-2xl sm:text-3xl font-bold tracking-normal">
                      FLOXA
                    </span>
                    <span className="text-xs font-semibold text-[#00B377] border border-[#00B377]/40 bg-[#00B377]/12 px-2.5 py-0.5 rounded-full">
                      by FlumenX
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 font-normal">
                    Create. Collaborate. Deliver.
                  </p>
                </div>

                  <p className="text-xs sm:text-sm text-[#00B377] font-semibold tracking-wide">
                    Clarity Before Creation.
                  </p>
                </div>

        {/* Footnotes List */ }
                      < div className = "border-b border-white/[0.1] pb-6 mb-6" >
                      <ol className="space-y-2.5 list-decimal list-outside ml-4 text-slate-300 text-xs sm:text-[13px] leading-relaxed">
                        {(showAllFootnotes ? footnotes : footnotes.slice(0, 3)).map((note, idx) => (
                          <li key={idx} className="pl-1 text-slate-300 font-normal">
                            {note}
                          </li>
                        ))}
          </ol>
                  {footnotes.length > 3 && (
                    <button
                      onClick={() => setShowAllFootnotes(!showAllFootnotes)}
                      className="mt-3 text-[#00B377] hover:text-[#00C47E] font-medium text-xs sm:text-[13px] underline decoration-[#00B377]/40 underline-offset-4 cursor-pointer inline-block transition-colors"
                    >
                      {showAllFootnotes ? "Show less" : `Show ${footnotes.length - 3} more footnotes`}
                    </button>
                  )}
                </div>

                  {/* Bottom Legal, Navigation & Regional info */}
                  <div className="flex flex-col lg:flex-row items-center justify-between gap-5 text-xs sm:text-[13px] text-slate-400 text-center lg:text-left">
                    <div className="order-2 lg:order-1 text-slate-400 font-normal">
                      Copyright © 2026 FLOXA by FlumenX. All rights reserved.
                    </div>

                    <nav aria-label="Footer Navigation" className="flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-5 gap-y-2 order-1 lg:order-2">
                      <a href="#overview" className="text-slate-300 hover:text-white transition-colors">Home</a>
                      <span className="text-white/20 select-none hidden xs:inline">•</span>
                      <a href="#final-cut-pro" className="text-slate-300 hover:text-white transition-colors">How It Works</a>
                      <span className="text-white/20 select-none hidden xs:inline">•</span>
                      <a href="#highlights" className="text-slate-300 hover:text-white transition-colors">Features</a>
                      <span className="text-white/20 select-none hidden xs:inline">•</span>
                      <a href="#pricing" className="text-slate-300 hover:text-white transition-colors">Pricing</a>
                      <span className="text-white/20 select-none hidden xs:inline">•</span>
                      <a href="#faq" className="text-slate-300 hover:text-white transition-colors">FAQ</a>
                      <span className="text-white/20 select-none hidden xs:inline">•</span>
                      <a href="#" className="text-slate-300 hover:text-white transition-colors">Privacy Policy</a>
                      <span className="text-white/20 select-none hidden xs:inline">•</span>
                      <a href="#" className="text-slate-300 hover:text-white transition-colors">Terms of Service</a>
                    </nav>

              <div className="text-slate-300 font-medium flex items-center gap-1.5 order-3">
                <span className="w-2 h-2 rounded-full bg-[#00B377]" />
                <span>India</span>
              </div>
            </div>
          </div>
      </footer>
      );
}
