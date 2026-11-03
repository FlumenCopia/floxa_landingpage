"use client";

import React from "react";

export default function FooterSection() {
  const footerLinks = [
    { label: "Home", href: "#overview" },
    { label: "The Problem", href: "#the-problem" },
    { label: "The Experience", href: "#the-experience" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Features", href: "#features" },
    { label: "Who It's For", href: "#who-its-for" },
    { label: "Why FLOXA", href: "#why-floxa" },
    { label: "FAQ", href: "#faq" },
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms and Conditions", href: "#" },
    { label: "Contact", href: "https://floxa.flumenx.in/" },
  ];

  return (
    <footer className="bg-[#161617] text-[#86868b] text-[12px] leading-relaxed border-t border-white/[0.08] pt-14 pb-16 select-none">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Brand Mission & Tagline */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-10 border-b border-white/[0.08]">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="text-white font-pavelt text-3xl sm:text-4xl tracking-normal">
                FLOXA
              </span>
              <span className="text-xs font-medium text-white/50 border border-white/10 px-2 py-0.5 rounded-md">
                by FlumenX
              </span>
            </div>
            <p className="text-sm text-[#a1a1a6] max-w-md">
              Helping creative professionals understand brands before design begins.
            </p>
          </div>

          <div className="text-left md:text-right">
            <p className="text-xs text-white/40 uppercase tracking-widest font-mono mb-1">
              Tagline
            </p>
            <p className="text-lg sm:text-xl font-medium text-white">
              Clarity Before Creation.
            </p>
          </div>
        </div>

        {/* Navigation Grid */}
        <div className="py-8 border-b border-white/[0.08]">
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-xs sm:text-sm text-white/70">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[11px] text-[#86868b]">
          <div>
            Copyright © 2026 FLOXA by FlumenX. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            {legalLinks.map((link, idx) => (
              <React.Fragment key={link.label}>
                <a
                  href={link.href}
                  className="hover:text-white transition-colors"
                  {...(link.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {link.label}
                </a>
                {idx < legalLinks.length - 1 && <span className="text-white/20">•</span>}
              </React.Fragment>
            ))}
          </div>

          <div className="text-white/60 font-medium">
            FLOXA Platform
          </div>
        </div>
      </div>
    </footer>
  );
}
