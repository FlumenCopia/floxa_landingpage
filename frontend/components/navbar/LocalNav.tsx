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
    { label: "The Problem", href: "#the-problem" },
    { label: "The Experience", href: "#the-experience" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Features", href: "#features" },
    { label: "Who It's For", href: "#who-its-for" },
    { label: "Why FLOXA", href: "#why-floxa" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled || mobileMenuOpen
          ? "bg-black/90 backdrop-blur-md border-white/[0.08] shadow-lg"
          : "bg-black/60 backdrop-blur-md border-white/[0.05]"
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 h-14 sm:h-15 flex items-center justify-between">
        {/* Product Brand */}
        <a
          href="#overview"
          onClick={closeMenu}
          className="text-white hover:text-white/80 transition-colors flex items-center gap-2 group"
        >
          <span className="text-xl sm:text-2xl md:text-[26px] font-pavelt tracking-normal">FLOXA</span>
          <span className="text-[11px] font-medium text-white/40 tracking-wider uppercase border border-white/10 px-1.5 py-0.5 rounded-md hidden xs:inline group-hover:border-white/20 transition-colors">
            by FlumenX
          </span>
        </a>

        {/* Desktop / Tablet Links & White Pill CTA */}
        <div className="flex items-center space-x-3 sm:space-x-5 text-[12px]">
          <div className="hidden lg:flex items-center space-x-5 xl:space-x-6 text-white/70">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* White Pill Button */}
          <a
            href="https://floxa.flumenx.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white hover:bg-[#e8e8ed] text-black text-[12px] font-medium px-4 py-1.5 rounded-full transition-all duration-150 active:scale-95 shadow-sm whitespace-nowrap"
          >
            <span>Get Started</span>
          </a>

          {/* Mobile / Tablet Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 rounded-lg text-white/80 hover:text-white focus:outline-none transition-colors"
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
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-black/95 backdrop-blur-xl border-b border-white/[0.08] ${
          mobileMenuOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <div className="max-w-[1240px] mx-auto px-6 flex flex-col space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="text-sm font-medium text-white/80 hover:text-white py-1 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
