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
    <footer className="bg-[#010504] text-[#89aca0] text-[12px] leading-relaxed border-t border-[#4dffa0]/15 pt-12 pb-16 select-none relative">
      <div className="max-w-[1024px] mx-auto px-4">
        {/* Footnotes List */}
        <div className="border-b border-[#4dffa0]/15 pb-8 mb-8">
          <ol className="space-y-3 list-decimal list-inside text-[#89aca0]">
            {(showAllFootnotes ? footnotes : footnotes.slice(0, 4)).map((note, idx) => (
              <li key={idx} className="pl-1">
                {note}
              </li>
            ))}
          </ol>
          {footnotes.length > 4 && (
            <button
              onClick={() => setShowAllFootnotes(!showAllFootnotes)}
              className="mt-3 text-[#4dffa0] hover:underline cursor-pointer"
            >
              {showAllFootnotes ? "Show less" : `Show ${footnotes.length - 4} more footnotes`}
            </button>
          )}
        </div>

        {/* Brand Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#4dffa0]/15">
          <div className="flex items-center gap-3">
            <span className="text-[#e8f5ef] font-pavelt text-2xl sm:text-3xl tracking-normal">Floxa</span>
            <span className="text-[11px] text-[#4dffa0] border border-[#4dffa0]/25 bg-[#4dffa0]/10 px-2 py-0.5 rounded-md">by FlumenX</span>
          </div>
          <p className="text-xs text-[#6ee7b7] font-medium tracking-wide">
            Clarity Before Creation.
          </p>
        </div>

        {/* Bottom Legal & Regional info */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[11px] text-[#89aca0]">
          <div>
            Copyright © 2026 FLOXA by FlumenX. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <a href="#overview" className="hover:text-[#4dffa0] transition-colors">Home</a>
            <span className="text-white/20">|</span>
            <a href="#final-cut-pro" className="hover:text-[#4dffa0] transition-colors">How It Works</a>
            <span className="text-white/20">|</span>
            <a href="#pixelmator-pro" className="hover:text-[#4dffa0] transition-colors">Features</a>
            <span className="text-white/20">|</span>
            <a href="#logic-pro" className="hover:text-[#4dffa0] transition-colors">Why FLOXA</a>
            <span className="text-white/20">|</span>
            <a href="https://floxa.flumenx.in/login" target="_blank" rel="noopener noreferrer" className="hover:text-[#4dffa0] transition-colors">Contact & Login</a>
            <span className="text-white/20">|</span>
            <a href="#" className="hover:text-[#4dffa0] transition-colors">Privacy Policy</a>
            <span className="text-white/20">|</span>
            <a href="#" className="hover:text-[#4dffa0] transition-colors">Terms of Use</a>
          </div>

          <div className="text-[#e8f5ef] font-medium">
            India
          </div>
        </div>
      </div>
    </footer>
  );
}
