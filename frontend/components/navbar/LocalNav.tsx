"use client";

import React, { useEffect, useState } from "react";

export default function LocalNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-11 z-40 transition-colors duration-200 border-b ${
        scrolled
          ? "bg-black/80 backdrop-blur-md border-white/[0.08]"
          : "bg-black/40 backdrop-blur-sm border-transparent"
      }`}
    >
      <div className="max-w-[1024px] mx-auto px-4 h-13 flex items-center justify-between">
        {/* Product Brand */}
        <a
          href="#overview"
          className="text-lg sm:text-xl font-semibold tracking-tight text-white hover:text-white/80 transition-colors flex items-center gap-2"
        >
          <span>Apple Creator Studio</span>
        </a>

        {/* Local Links & CTA */}
        <div className="flex items-center space-x-6 text-[12px]">
          <div className="hidden sm:flex items-center space-x-5 text-white/70">
            <a href="#overview" className="hover:text-white transition-colors">
              Overview
            </a>
            <a href="#pricing" className="hover:text-white transition-colors">
              Pricing
            </a>
            <a href="#final-cut-pro" className="hover:text-white transition-colors">
              Final Cut Pro
            </a>
            <a href="#pixelmator-pro" className="hover:text-white transition-colors">
              Pixelmator Pro
            </a>
            <a href="#logic-pro" className="hover:text-white transition-colors">
              Logic Pro
            </a>
            <a href="#faq" className="hover:text-white transition-colors">
              FAQ
            </a>
          </div>

          {/* Try It Free Button */}
          <a
            href="#pricing"
            className="inline-flex items-center justify-center bg-[#0071e3] hover:bg-[#0077ed] text-white text-[12px] font-normal px-4 py-1.5 rounded-full transition-all duration-150 active:scale-95 shadow-sm"
          >
            Try it free
          </a>
        </div>
      </div>
    </nav>
  );
}
