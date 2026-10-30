"use client";

import React, { useEffect, useState } from "react";

export default function LocalNav() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky local nav once scrolling past the initial hero space
      setIsVisible(window.scrollY > 240);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b ${
        isVisible
          ? "opacity-100 translate-y-0 bg-black/80 backdrop-blur-md border-white/[0.08] pointer-events-auto"
          : "opacity-0 -translate-y-2 pointer-events-none border-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-13 flex items-center justify-between">
        {/* Product Brand */}
        <a
          href="#overview"
          className="text-base sm:text-lg font-semibold tracking-tight text-white hover:text-white/80 transition-colors flex items-center gap-2"
        >
          <span>Apple Creator Studio</span>
        </a>

        {/* Local Links & White Pill CTA */}
        <div className="flex items-center space-x-6 text-[12px]">
          <div className="hidden md:flex items-center space-x-6 text-white/70">
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

          {/* White Pill Button matching Apple screenshot */}
          <a
            href="https://apps.apple.com/in/app-bundle/id1868448255"
            className="inline-flex items-center justify-center bg-white hover:bg-[#e8e8ed] text-black text-[12px] font-normal px-4 py-1.5 rounded-full transition-all duration-150 active:scale-95 shadow-sm"
          >
            <span>Try it free</span>
            <sup className="text-[9px] ml-0.5">2</sup>
          </a>
        </div>
      </div>
    </nav>
  );
}
