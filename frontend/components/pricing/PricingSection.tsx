"use client";

import React from "react";

const pricingCards = [
  {
    id: "new-subscriber",
    title: "New subscriber",
    trial: "1 month free",
    description: "₹399 per month or ₹3999 per year after your free trial. Get complete brand discovery tools.",
    footnote: "2",
    isFeatured: true,
    icon: (
      <svg className="w-6 h-6 text-[#e0a899] fill-current" viewBox="0 0 24 24">
        {/* Person with stars icon */}
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        <path d="M19.5 2.5l.8 1.7 1.7.8-1.7.8-.8 1.7-.8-1.7-1.7-.8 1.7-.8z" />
        <path d="M17 9l.5 1 1 .5-1 .5-.5 1-.5-1-1-.5 1-.5z" />
      </svg>
    ),
  },
  {
    id: "students-educators",
    title: "Students and\neducators",
    trial: "1 month free",
    description: "₹199 per month or ₹1999 per year after your free trial. Special pricing for design students.",
    footnote: "3",
    icon: (
      <svg className="w-7 h-7 text-[#4dffa0] fill-current" viewBox="0 0 24 24">
        {/* Graduation cap icon */}
        <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
      </svg>
    ),
  },
  {
    id: "new-devices",
    title: "New devices",
    trial: "3 months free",
    description: "Try Floxa with an iPad or Mac purchase. Clarity before creation.",
    footnote: "4",
    icon: (
      <svg className="w-7 h-7 text-[#e0a899] fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="1.8">
        {/* Laptop & iPad outline icon */}
        <rect x="2" y="5" width="13" height="9" rx="1.5" />
        <path d="M1 16h15" strokeLinecap="round" />
        <rect x="13" y="8" width="8" height="11" rx="1.5" fill="#06160f" />
        <line x1="17" y1="17" x2="17" y2="17.01" strokeLinecap="round" strokeWidth="2.5" />
      </svg>
    ),
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="pt-4 pb-8 sm:pt-8 sm:pb-12 md:pt-14 md:pb-16 bg-[#020806] text-[#e8f5ef] relative">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        {/* Eyebrow in Rose Gold */}
        <div className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#e0a899] mb-2 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#e0a899]" />
          Plans & Pricing
        </div>

        {/* Left-aligned Section Headline */}
        <div className="mb-4 sm:mb-6 max-w-3xl">
          <h2 className="text-2xl sm:text-4xl md:text-[44px] font-semibold tracking-tight text-[#e8f5ef] leading-[1.12]">
            One powerful collection.<br />
            <span className="rosegold-gradient-text">One smart subscription.</span>
          </h2>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {pricingCards.map((card) => (
            <div
              key={card.id}
              className={`rounded-[24px] sm:rounded-[32px] bg-[#06160f]/90 border p-6 sm:p-8 md:p-7 lg:p-9 flex flex-col justify-between min-h-[320px] sm:min-h-[360px] shadow-2xl transition-all duration-300 ${
                card.isFeatured
                  ? "border-[#e0a899]/50 shadow-[0_0_35px_rgba(224,168,153,0.12)]"
                  : "border-[#4dffa0]/18 hover:border-[#e0a899]/35"
              }`}
            >
              <div>
                {/* Clean Top Icon */}
                <div className="mb-6 h-8 flex items-center">
                  {card.icon}
                </div>

                {/* Card Title */}
                <h3 className="text-2xl sm:text-[26px] font-semibold text-[#e8f5ef] leading-tight mb-6 whitespace-pre-line">
                  {card.title}
                </h3>

                {/* Trial & Price Body Copy */}
                <div className="space-y-1">
                  <p className="text-sm sm:text-base font-semibold text-[#4dffa0]">
                    {card.trial}
                  </p>
                  <p className="text-sm sm:text-[15px] text-[#89aca0] font-normal leading-relaxed">
                    {card.description}
                    <sup className="text-[10px] ml-0.5">{card.footnote}</sup>
                  </p>
                </div>
              </div>

              {/* Left-aligned Rose Gold Pill Button */}
              <div className="mt-8 pt-2">
                <a
                  href="https://floxa.flumenx.in/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-[#fce0d8] via-[#e0a899] to-[#c47c6a] hover:brightness-105 text-[#170a07] text-sm font-semibold px-5 py-2 sm:px-6 sm:py-2.5 rounded-full transition-all duration-200 active:scale-95 shadow-[0_0_18px_rgba(224,168,153,0.3)]"
                >
                  <span>Try it free</span>
                  <sup className="text-[10px] ml-0.5">2</sup>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
