"use client";

import React, { useEffect, useState } from "react";

export default function LocalNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  const navLinks = [
    { label: "Overview", href: "#overview" },
    { label: "The Problem", href: "#highlights" },
    { label: "How It Works", href: "#final-cut-pro" },
    { label: "Visual Direction", href: "#pixelmator-pro" },
    { label: "Why FLOXA", href: "#logic-pro" },
    { label: "Who It's For", href: "#visual-productivity" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled || mobileMenuOpen
          ? "bg-[#020806]/92 backdrop-blur-md border-[#4dffa0]/20 shadow-[0_4px_24px_rgba(2,8,6,0.85)]"
          : "bg-[#020806]/65 backdrop-blur-md border-[#4dffa0]/10"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-14 sm:h-15 flex items-center justify-between">
        {/* Product Brand */}
        <a
          href="#overview"
          onClick={closeMenu}
          className="text-[#e8f5ef] hover:text-[#4dffa0] transition-colors flex items-center gap-2 group"
        >
          <span className="text-xl sm:text-2xl md:text-3xl font-pavelt tracking-normal group-hover:text-[#4dffa0] transition-colors">Floxa</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#4dffa0] shadow-[0_0_8px_#4dffa0]" />
        </a>

        {/* Desktop / Tablet Links & Electric Mint Pill CTA */}
        <div className="flex items-center space-x-3 sm:space-x-5 text-[12px]">
          <div className="hidden lg:flex items-center space-x-6 text-[#89aca0]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#4dffa0] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Electric Mint Pill Button */}
          <a
            href="https://floxa.flumenx.in/login"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-gradient-to-r from-[#4dffa0] via-[#38e88f] to-[#1fd879] hover:brightness-105 text-[#02140a] text-[12px] font-semibold px-4 py-1.5 rounded-full transition-all duration-200 active:scale-95 shadow-[0_0_18px_rgba(77,255,160,0.35)] whitespace-nowrap"
          >
            <span>Try it free</span>
            <sup className="text-[9px] ml-0.5">2</sup>
          </a>

          {/* Mobile / Tablet Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 rounded-lg text-[#89aca0] hover:text-[#e8f5ef] focus:outline-none transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile / Tablet Dropdown Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-[#06160f]/95 backdrop-blur-xl border-b border-[#4dffa0]/20 ${
          mobileMenuOpen ? "max-h-80 opacity-100 py-3" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="text-sm font-medium text-[#89aca0] hover:text-[#4dffa0] py-1 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
