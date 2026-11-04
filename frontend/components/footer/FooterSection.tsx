"use client";

import React, { useState } from "react";

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
    <footer className="bg-[#161617] text-[#86868b] text-[12px] leading-relaxed border-t border-white/[0.08] pt-12 pb-16 select-none">
      <div className="max-w-[1024px] mx-auto px-4">
        {/* Footnotes List */}
        <div className="border-b border-white/[0.08] pb-8 mb-8">
          <ol className="space-y-3 list-decimal list-inside text-[#86868b]">
            {(showAllFootnotes ? footnotes : footnotes.slice(0, 4)).map((note, idx) => (
              <li key={idx} className="pl-1">
                {note}
              </li>
            ))}
          </ol>
          {footnotes.length > 4 && (
            <button
              onClick={() => setShowAllFootnotes(!showAllFootnotes)}
              className="mt-3 text-[#2997ff] hover:underline cursor-pointer"
            >
              {showAllFootnotes ? "Show less" : `Show ${footnotes.length - 4} more footnotes`}
            </button>
          )}
        </div>

        {/* Brand Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/[0.08]">
          <div className="flex items-center gap-3">
            <span className="text-white font-pavelt text-2xl sm:text-3xl tracking-normal">Floxa</span>
            <span className="text-[11px] text-white/50 border border-white/10 px-2 py-0.5 rounded-md">by FlumenX</span>
          </div>
          <p className="text-xs text-[#a1a1a6]">
            Clarity Before Creation.
          </p>
        </div>

        {/* Bottom Legal & Regional info */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[11px] text-[#86868b]">
          <div>
            Copyright © 2026 FLOXA by FlumenX. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <a href="#overview" className="hover:text-white transition-colors">Home</a>
            <span>|</span>
            <a href="#final-cut-pro" className="hover:text-white transition-colors">How It Works</a>
            <span>|</span>
            <a href="#pixelmator-pro" className="hover:text-white transition-colors">Features</a>
            <span>|</span>
            <a href="#logic-pro" className="hover:text-white transition-colors">Why FLOXA</a>
            <span>|</span>
            <a href="https://floxa.flumenx.in/login" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Contact & Login</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
          </div>

          <div className="text-white/80 font-medium">
            India
          </div>
        </div>
      </div>
    </footer>
  );
}
