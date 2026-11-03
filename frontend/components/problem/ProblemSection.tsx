"use client";

import React from "react";

const problems = [
  {
    number: "01",
    title: "Unclear Client Briefs",
    desc: "Clients may have ideas but struggle to explain exactly what they want.",
    icon: (
      <svg className="w-6 h-6 text-[#ff453a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    tag: "Communication Gap",
  },
  {
    number: "02",
    title: "Scattered Inspiration",
    desc: "References, preferences, and ideas can be difficult to organize across chats and emails.",
    icon: (
      <svg className="w-6 h-6 text-[#ff9f0a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    tag: "Disorganized Assets",
  },
  {
    number: "03",
    title: "Different Creative Expectations",
    desc: "The designer and client may imagine completely different outcomes without realizing it.",
    icon: (
      <svg className="w-6 h-6 text-[#bf5af2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    tag: "Mismatched Vision",
  },
  {
    number: "04",
    title: "Too Much Guesswork",
    desc: "Without enough context, designers may need to make assumptions before the creative process even begins.",
    icon: (
      <svg className="w-6 h-6 text-[#2997ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    tag: "Unnecessary Revisions",
  },
];

export default function ProblemSection() {
  return (
    <section id="the-problem" className="pt-16 pb-20 sm:pt-24 sm:pb-28 bg-black text-white relative select-none border-t border-white/[0.06]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Eyebrow & Header */}
        <div className="mb-12 sm:mb-16 max-w-3xl">
          <div className="text-xs sm:text-sm font-semibold text-[#ff453a] uppercase tracking-wider mb-3">
            The Problem
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-[54px] font-semibold tracking-tight text-white mb-6 leading-[1.08]">
            Great Design Needs<br />
            More Than a Good Brief.
          </h2>
          <p className="text-base sm:text-lg md:text-[19px] text-[#a1a1a6] leading-relaxed font-normal">
            Starting a design project without understanding the brand can lead to confusion, mismatched expectations, and unnecessary revisions.
          </p>
        </div>

        {/* 4 Problem Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-16">
          {problems.map((item, idx) => (
            <div
              key={idx}
              className="rounded-[24px] sm:rounded-[28px] bg-[#161617] border border-white/[0.08] p-6 sm:p-7 flex flex-col justify-between shadow-2xl transition-all duration-300 hover:border-white/20 hover:-translate-y-1"
            >
              <div>
                {/* Top header row with icon and tag */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-xs font-mono text-white/40">
                    {item.number}
                  </span>
                </div>

                <span className="text-[11px] font-semibold tracking-wider uppercase text-white/40 block mb-2">
                  {item.tag}
                </span>

                <h3 className="text-xl sm:text-[22px] font-semibold text-white tracking-tight mb-3">
                  {item.title}
                </h3>

                <p className="text-sm sm:text-[15px] text-[#a1a1a6] leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.05] flex items-center justify-between text-xs text-white/30">
                <span>Bottleneck</span>
                <span>Requires Discovery</span>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Statement Callout Banner */}
        <div className="rounded-[24px] sm:rounded-[32px] bg-gradient-to-r from-white/[0.06] via-white/[0.03] to-white/[0.06] border border-white/10 p-8 sm:p-12 text-center backdrop-blur-md">
          <p className="text-xs font-semibold tracking-widest text-[#2997ff] uppercase mb-3">
            Core Realization
          </p>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white tracking-tight max-w-3xl mx-auto leading-snug">
            &ldquo;Before creating a brand identity, understand the brand behind it.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}

