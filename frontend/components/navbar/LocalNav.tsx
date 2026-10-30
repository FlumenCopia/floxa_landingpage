"use client";

import React, { useEffect, useState } from "react";

export default function LocalNav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-black/85 backdrop-blur-md border-white/[0.08] shadow-lg"
          : "bg-black/60 backdrop-blur-md border-white/[0.05]"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-12 sm:h-13 flex items-center justify-between">
        {/* Product Brand */}
        <a
          href="#overview"
          className="text-white hover:text-white/80 transition-colors flex items-center gap-2"
        >
          <span className="text-xl sm:text-2xl font-pavelt tracking-normal">Floxa</span>
        </a>

        {/* Local Links & White Pill CTA */}
        <div className="flex items-center space-x-4 sm:space-x-6 text-[12px]">
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

          {/* White Pill Button */}
          <a
            href="https://floxa.flumenx.in/"
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
