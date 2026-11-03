"use client";

import React from "react";

const audiences = [
  {
    role: "Freelance Brand Identity Designers",
    tagline: "Independent Creators",
    desc: "Understand your clients better and establish a clearer direction before creating logos and visual identities.",
    benefit: "Eliminate endless revision rounds and price with strategic authority.",
    icon: (
      <svg className="w-6 h-6 text-[#2997ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    role: "Branding Studios & Creative Agencies",
    tagline: "Multi-disciplinary Teams",
    desc: "Bring more structure to client discovery and help teams work from a shared understanding of the brand.",
    benefit: "Standardize client onboarding across account managers and design leads.",
    icon: (
      <svg className="w-6 h-6 text-[#ff375f]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    role: "Brand Consultants",
    tagline: "Strategy Practitioners",
    desc: "Organize discovery conversations and gather insights that support brand strategy and identity projects.",
    benefit: "Capture rich strategic rationale that informs verbal and visual guidelines.",
    icon: (
      <svg className="w-6 h-6 text-[#ff9f0a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    role: "Creative Professionals",
    tagline: "Visual Builders",
    desc: "Build a better foundation for creative projects by understanding the people and ideas behind each brand.",
    benefit: "Create purposeful work grounded in real business and audience context.",
    icon: (
      <svg className="w-6 h-6 text-[#30d158]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
];

export default function AudienceSection() {
  return (
    <section id="who-its-for" className="pt-16 pb-20 sm:pt-24 sm:pb-28 bg-black text-white relative select-none border-t border-white/[0.06]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16 max-w-3xl">
          <div className="text-xs sm:text-sm font-semibold text-[#ff9f0a] uppercase tracking-wider mb-3">
            Who Is FLOXA For?
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-[54px] font-semibold tracking-tight text-white mb-6 leading-[1.08]">
            Made for People<br />
            Who Build Brands.
          </h2>
          <p className="text-base sm:text-lg md:text-[19px] text-[#a1a1a6] leading-relaxed font-normal">
            For those who bring brands to life — whether working solo or leading design engagements across teams.
          </p>
        </div>

        {/* 4 Audience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {audiences.map((item, idx) => (
            <div
              key={idx}
              className="rounded-[26px] sm:rounded-[30px] bg-[#161617] border border-white/[0.08] p-7 sm:p-9 flex flex-col justify-between shadow-2xl transition-all duration-300 hover:border-white/20 hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-white/60">
                    {item.tagline}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight mb-3">
                  {item.role}
                </h3>

                <p className="text-base text-[#a1a1a6] leading-relaxed mb-6 font-normal">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06]">
                <p className="text-xs sm:text-sm font-medium text-white/80 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#30d158]" />
                  <span>{item.benefit}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

