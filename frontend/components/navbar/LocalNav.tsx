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
      suppressHydrationWarning
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${isScrolled || mobileMenuOpen
          ? "bg-[#030A06]/92 backdrop-blur-md border-[#00E599]/20 shadow-[0_4px_24px_rgba(3,10,6,0.85)]"
          : "bg-[#030A06]/70 backdrop-blur-md border-white/[0.08]"
        }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
        {/* Product Brand */}
        <a
          href="#overview"
          onClick={closeMenu}
          className="text-white hover:text-[#00E599] transition-colors flex items-center gap-2 group"
        >
          <span className="text-xl sm:text-2xl md:text-3xl font-pavelt tracking-normal group-hover:text-[#00E599] transition-colors">
            Floxa
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#00E599] shadow-[0_0_8px_#00E599]" />
        </a>

        {/* Desktop / Tablet Links & Electric Mint Pill CTA */}
        <div className="flex items-center space-x-3 sm:space-x-6 text-[13px]">
          <div className="hidden lg:flex items-center space-x-6 text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#00E599] transition-colors font-normal"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Smooth Emerald Pill Button */}
          <a
            href="https://floxa.flumenx.in/login"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#00B377] hover:bg-[#00A36C] text-white text-[13px] font-semibold px-4 sm:px-5 py-1.5 sm:py-2 rounded-full transition-all duration-200 active:scale-95 shadow-[0_2px_10px_rgba(0,179,119,0.22)] hover:shadow-[0_4px_14px_rgba(0,179,119,0.32)] whitespace-nowrap"
          >
            <span>Try it free</span>
            <sup className="text-[9px] ml-0.5">2</sup>
          </a>

          {/* Mobile / Tablet Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 rounded-lg text-slate-300 hover:text-white focus:outline-none transition-colors"
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
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-[#030A06]/98 backdrop-blur-xl border-b border-[#00E599]/20 ${mobileMenuOpen ? "max-h-[500px] opacity-100 py-4" : "max-h-0 opacity-0 py-0"
          }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="text-sm font-medium text-slate-300 hover:text-[#00E599] py-1.5 transition-colors"
            >
              {link.label}
            </a>
          ))}

          <div className="pt-2 border-t border-white/[0.08]">
            <a
              href="https://floxa.flumenx.in/login"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="w-full inline-flex items-center justify-center bg-[#00B377] hover:bg-[#00A36C] text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-[0_4px_14px_rgba(0,179,119,0.22)] transition-all"
            >
              <span>Try it free</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
