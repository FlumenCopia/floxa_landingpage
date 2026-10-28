"use client";

import React from "react";

const pricingTiers = [
  {
    id: "new-subscriber",
    title: "New subscriber",
    badge: "1 month free",
    priceText: "₹399 per month or ₹3,999 per year after your free trial.",
    footnote: "2",
    details: "Get full access to all apps and features. Cancel anytime.",
    icon: (
      <svg className="w-10 h-10 text-white" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="22" stroke="url(#p-grad-1)" strokeWidth="3" />
        <path d="M18 24 L22 28 L30 18" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <defs>
          <linearGradient id="p-grad-1" x1="0" y1="0" x2="48" y2="48">
            <stop offset="0%" stopColor="#2997ff" />
            <stop offset="100%" stopColor="#bf5af2" />
          </linearGradient>
        </defs>
      </svg>
    ),
    popular: true,
  },
  {
    id: "student",
    title: "Students and educators",
    badge: "1 month free",
    priceText: "₹199 per month or ₹1,999 per year after your free trial.",
    footnote: "3",
    details: "Special education pricing. College student and teacher verification required.",
    icon: (
      <svg className="w-10 h-10 text-white" viewBox="0 0 48 48" fill="none">
        <path d="M24 10 L40 18 L24 26 L8 18 Z" stroke="#30d158" strokeWidth="3" strokeLinejoin="round" />
        <path d="M14 22 V32 C14 36 24 40 24 40 C24 40 34 36 34 32 V22" stroke="#30d158" strokeWidth="3" />
        <path d="M40 18 V30" stroke="#30d158" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
    popular: false,
  },
  {
    id: "apple-device",
    title: "New devices",
    badge: "3 months free",
    priceText: "Try Apple Creator Studio with an iPad or Mac purchase.",
    footnote: "4",
    details: "Available when you purchase an eligible new Mac or iPad model.",
    icon: (
      <svg className="w-10 h-10 text-white" viewBox="0 0 48 48" fill="none">
        <rect x="8" y="12" width="22" height="28" rx="3" stroke="#ff9f0a" strokeWidth="3" />
        <rect x="22" y="18" width="18" height="22" rx="2" stroke="#ffffff" strokeWidth="2.5" />
      </svg>
    ),
    popular: false,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-black text-white relative">
      <div className="max-w-[1024px] mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white leading-tight">
            One powerful collection.<br />
            <span className="text-[#86868b]">One smart subscription.</span>
          </h2>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingTiers.map((tier) => (
            <div
              key={tier.id}
              className={`relative rounded-3xl bg-[#161617] border p-8 flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] hover:border-white/20 shadow-xl ${
                tier.popular ? "border-[#0071e3]/60 ring-1 ring-[#0071e3]/40" : "border-white/[0.08]"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#0071e3] text-[11px] font-semibold tracking-wide uppercase text-white shadow-md">
                  Most Popular
                </div>
              )}

              <div>
                {/* Icon Wrapper */}
                <div className="w-14 h-14 rounded-2xl bg-white/[0.06] border border-white/10 flex items-center justify-center mb-6">
                  {tier.icon}
                </div>

                {/* Card Title */}
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">
                  {tier.title}
                </h3>

                {/* Free trial highlight */}
                <div className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  {tier.badge}
                </div>

                {/* Price Copy */}
                <p className="text-sm text-[#86868b] leading-relaxed mb-4">
                  {tier.priceText}
                  <sup className="text-xs text-[#2997ff] ml-0.5">{tier.footnote}</sup>
                </p>

                <p className="text-xs text-neutral-400 mb-8">{tier.details}</p>
              </div>

              {/* CTA Button */}
              <a
                href="https://apps.apple.com/in/app-bundle/id1868448255"
                className={`w-full text-center py-3 rounded-full text-sm font-medium transition-all duration-200 active:scale-95 ${
                  tier.popular
                    ? "bg-[#0071e3] hover:bg-[#0077ed] text-white shadow-lg shadow-blue-500/20"
                    : "bg-white/10 hover:bg-white/20 text-white"
                }`}
              >
                Try it free
              </a>
            </div>
          ))}
        </div>

        {/* Family Sharing Note */}
        <div className="mt-12 text-center text-xs sm:text-sm text-[#86868b] max-w-xl mx-auto">
          Standard subscription can be shared with up to 5 family members via Family Sharing.
        </div>
      </div>
    </section>
  );
}
