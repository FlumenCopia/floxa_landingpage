"use client";

import React from "react";

const reasons = [
  {
    title: "A discovery-first approach to branding.",
    desc: "Placing deep inquiry at step zero turns branding from an aesthetic gamble into an intentional, strategic discipline.",
  },
  {
    title: "A structured way to understand client needs.",
    desc: "Guided prompts help clients articulate complex ideas clearly, avoiding vague feedback like 'make it pop'.",
  },
  {
    title: "Better visibility into brand personality and preferences.",
    desc: "Uncover nuanced aesthetics, emotional tones, and reference benchmarks with high accuracy.",
  },
  {
    title: "A shared foundation for client and designer alignment.",
    desc: "Create documented consensus early on, so both parties share identical expectations before design commences.",
  },
  {
    title: "A more intentional starting point for creative work.",
    desc: "Enter Illustrator, Figma, or your sketchbook with confident creative direction rooted in verified insights.",
  },
];

export default function WhyFloxaSection() {
  return (
    <section id="why-floxa" className="pt-16 pb-20 sm:pt-24 sm:pb-28 bg-black text-white relative select-none border-t border-white/[0.06]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16 max-w-3xl">
          <div className="text-xs sm:text-sm font-semibold text-[#2997ff] uppercase tracking-wider mb-3">
            Why FLOXA?
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-[54px] font-semibold tracking-tight text-white mb-6 leading-[1.08]">
            Less Guesswork.<br />
            More Creative Clarity.
          </h2>
          <p className="text-lg sm:text-xl text-white/90 font-medium mb-4">
            Better Questions. Clearer Direction. Stronger Foundations.
          </p>
          <p className="text-base sm:text-lg text-[#a1a1a6] leading-relaxed font-normal">
            Great creative work begins with the right questions. Creative work is more than making something look good. It&apos;s about understanding what the brand stands for, who it speaks to, and what it wants to communicate. FLOXA puts brand discovery at the beginning of the process, helping designers understand the client&apos;s vision before moving into visual execution.
          </p>
        </div>

        {/* 5 Reasons Grid / List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-16">
          {reasons.map((item, idx) => (
            <div
              key={idx}
              className={`rounded-[26px] bg-[#161617] border border-white/[0.08] p-7 sm:p-8 flex flex-col justify-between shadow-2xl transition-all duration-300 hover:border-white/20 hover:-translate-y-1 ${
                idx === 3 || idx === 4 ? "lg:col-span-1" : ""
              }`}
            >
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-8 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center text-xs font-mono font-semibold text-[#2997ff]">
                    0{idx + 1}
                  </div>
                  <span className="text-xs font-medium text-white/40 uppercase tracking-wider">
                    Core Advantage
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-semibold text-white tracking-tight mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-[#a1a1a6] leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.05] flex items-center gap-2 text-xs text-[#30d158]">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Built into FLOXA Discovery</span>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Quote Banner */}
        <div className="rounded-[28px] sm:rounded-[36px] bg-[#161617] border border-white/10 p-8 sm:p-14 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0071e3]/10 via-transparent to-[#bf5af2]/10 pointer-events-none" />
          <span className="text-xs font-mono uppercase tracking-widest text-white/40 block mb-3">
            Brand Philosophy
          </span>
          <p className="text-2xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight leading-tight max-w-3xl mx-auto mb-4">
            &ldquo;Don&apos;t just take a brief. Discover the brand behind it.&rdquo;
          </p>
          <p className="text-sm sm:text-base text-white/60 font-medium">
            FLOXA — Clarity Before Creation.
          </p>
        </div>
      </div>
    </section>
  );
}

