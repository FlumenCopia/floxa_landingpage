"use client";

import React, { useState } from "react";

const pillars = [
  {
    id: "vision",
    step: "Pillar 01",
    title: "Discover the Vision",
    headline: "Understand what the client wants the brand to communicate.",
    detail:
      "Cut through surface-level buzzwords. Explore core motivations, long-term business goals, and the fundamental market impact your client aims to deliver.",
    accent: "#2997ff",
    previewData: {
      type: "Vision Framework",
      question: "What should people feel when encountering your brand?",
      clientInput: '"Unfiltered confidence, effortless modernism, and quiet luxury."',
      outcome: "High-value, premium positioning with bold minimalism.",
    },
  },
  {
    id: "personality",
    step: "Pillar 02",
    title: "Explore the Personality",
    headline: "Uncover the values, qualities, and emotions that define the brand.",
    detail:
      "Go beyond basic demographics. Map the emotional tone, archetype, temperament, and authentic voice that will guide every typographic and visual choice.",
    accent: "#bf5af2",
    previewData: {
      type: "Personality Spectrum",
      question: "Which archetypal tone best describes the character?",
      clientInput: '"70% Innovator / 30% Sage — analytical yet deeply inspiring."',
      outcome: "Swiss grid typography with vibrant technical accents.",
    },
  },
  {
    id: "direction",
    step: "Pillar 03",
    title: "Find the Direction",
    headline: "Bring client insights together to establish a stronger starting point.",
    detail:
      "Consolidate fragmented inspirations, audience expectations, and aesthetic preferences into one unified, structured discovery brief.",
    accent: "#30d158",
    previewData: {
      type: "Creative Direction Blueprint",
      question: "Core aesthetic benchmark and styling boundaries?",
      clientInput: '"Dark mode elegance, editorial serif accents, purposeful whitespace."',
      outcome: "Zero creative guesswork before opening Illustrator or Figma.",
    },
  },
];

export default function ExperienceSection() {
  const [activePillar, setActivePillar] = useState(0);

  return (
    <section id="the-experience" className="pt-16 pb-20 sm:pt-24 sm:pb-28 bg-black text-white relative select-none border-t border-white/[0.06]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16 max-w-3xl">
          <div className="text-xs sm:text-sm font-semibold text-[#2997ff] uppercase tracking-wider mb-3">
            Introducing FLOXA
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-[54px] font-semibold tracking-tight text-white mb-6 leading-[1.08]">
            Meet FLOXA. Your Starting Point<br />
            for Brand Discovery.
          </h2>
          <p className="text-base sm:text-lg md:text-[19px] text-[#a1a1a6] leading-relaxed font-normal mb-4">
            FLOXA helps creative professionals gather and organize the information they need to understand a brand before design begins.
          </p>
          <p className="text-sm sm:text-base text-white/60 leading-relaxed font-normal">
            From brand personality and target audience to visual preferences and business goals, FLOXA helps bring important client insights into one structured discovery process.
          </p>
        </div>

        {/* 3 Pillar Tabs Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {pillars.map((item, idx) => {
            const isActive = activePillar === idx;
            return (
              <button
                key={item.id}
                onClick={() => setActivePillar(idx)}
                className={`text-left p-6 rounded-[24px] border transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-[#161617] border-white/20 shadow-xl"
                    : "bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04] hover:border-white/10"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-white/40">
                    {item.step}
                  </span>
                  <div
                    className="w-2.5 h-2.5 rounded-full transition-transform duration-300"
                    style={{
                      backgroundColor: item.accent,
                      transform: isActive ? "scale(1.2)" : "scale(1)",
                    }}
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white tracking-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#a1a1a6] line-clamp-2">
                  {item.headline}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Pillar Interactive Stage */}
        <div className="rounded-[28px] sm:rounded-[36px] bg-[#161617] border border-white/[0.08] p-6 sm:p-10 md:p-12 shadow-2xl relative overflow-hidden">
          {/* Subtle Ambient Radial Glow */}
          <div
            className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none opacity-20 transition-all duration-700"
            style={{ backgroundColor: pillars[activePillar].accent }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Detail Copy */}
            <div className="lg:col-span-6 space-y-4">
              <span
                className="text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full border"
                style={{
                  color: pillars[activePillar].accent,
                  borderColor: `${pillars[activePillar].accent}40`,
                  backgroundColor: `${pillars[activePillar].accent}15`,
                }}
              >
                {pillars[activePillar].step}
              </span>

              <h3 className="text-2xl sm:text-4xl font-semibold text-white tracking-tight leading-tight">
                {pillars[activePillar].title}
              </h3>

              <p className="text-lg sm:text-xl text-white/90 font-medium leading-relaxed">
                {pillars[activePillar].headline}
              </p>

              <p className="text-sm sm:text-base text-[#a1a1a6] leading-relaxed">
                {pillars[activePillar].detail}
              </p>

              <div className="pt-4 flex items-center gap-2 text-xs font-medium text-white/60">
                <svg className="w-4 h-4 text-[#30d158]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Automated client prompt structure</span>
              </div>
            </div>

            {/* Right Interactive Mockup Simulation */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl bg-black/80 border border-white/10 p-6 sm:p-7 shadow-2xl space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] text-xs font-mono text-white/40">
                  <span>FLOXA · {pillars[activePillar].previewData.type}</span>
                  <span className="text-[#30d158]">Client Completed</span>
                </div>

                <div>
                  <label className="text-xs font-medium text-white/50 block mb-1.5 uppercase tracking-wider">
                    Discovery Prompt
                  </label>
                  <p className="text-sm sm:text-base text-white font-medium bg-white/[0.04] p-3 rounded-xl border border-white/5">
                    {pillars[activePillar].previewData.question}
                  </p>
                </div>

                <div>
                  <label className="text-xs font-medium text-white/50 block mb-1.5 uppercase tracking-wider">
                    Structured Client Response
                  </label>
                  <p className="text-sm text-[#2997ff] italic bg-[#0071e3]/10 p-3 rounded-xl border border-[#0071e3]/20">
                    {pillars[activePillar].previewData.clientInput}
                  </p>
                </div>

                <div className="pt-2">
                  <label className="text-xs font-medium text-white/50 block mb-1.5 uppercase tracking-wider">
                    Designer Clarity Output
                  </label>
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-white/[0.05] border border-white/10 text-xs sm:text-sm text-white/90">
                    <svg className="w-4 h-4 text-[#30d158] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{pillars[activePillar].previewData.outcome}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Bar */}
        <div className="mt-8 text-center">
          <p className="text-sm sm:text-base font-medium text-white/70 tracking-wide">
            Less guessing. Better understanding. <span className="text-white font-semibold">A clearer creative direction.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

