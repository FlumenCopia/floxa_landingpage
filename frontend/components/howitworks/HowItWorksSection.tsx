"use client";

import React, { useState } from "react";

const steps = [
  {
    step: "01",
    title: "Create Your Project",
    desc: "Set up a project and prepare for the brand discovery process.",
    detail: "Name your client engagement, configure custom inquiry parameters, and get your personalized workspace ready in seconds.",
    badge: "Quick Setup",
    icon: (
      <svg className="w-6 h-6 text-[#2997ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>
    ),
    preview: {
      header: "New Project Creation",
      item1: "Project Name: Apex Brand Identity",
      item2: "Industry: FinTech & Web3",
      item3: "Discovery Scope: Full Brand Strategy + Visual System",
    },
  },
  {
    step: "02",
    title: "Invite Your Client",
    desc: "Share the discovery link and let your client communicate their vision, preferences, and expectations.",
    detail: "Send an interactive link. Your client enjoys an intuitive, guided experience designed to draw out authentic thoughts without overwhelm.",
    badge: "Seamless Sharing",
    icon: (
      <svg className="w-6 h-6 text-[#bf5af2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
      </svg>
    ),
    preview: {
      header: "Unique Discovery Link",
      item1: "floxa.flumenx.in/d/apex-identity-2026",
      item2: "Status: Active & Waiting for Client Input",
      item3: "Device Friendly: Mobile, Tablet & Desktop ready",
    },
  },
  {
    step: "03",
    title: "Discover the Brand",
    desc: "Gather insights about brand personality, audience, goals, competitors, and visual direction.",
    detail: "FLOXA structures inputs into clear modules: emotional character, visual preference moodboards, audience archetypes, and market whitespace.",
    badge: "Deep Insights",
    icon: (
      <svg className="w-6 h-6 text-[#ff9f0a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    preview: {
      header: "Brand Intelligence Matrix",
      item1: "Values: Transparency, Innovation, Trust",
      item2: "Competitor Differentiation: Clean vs Cluttered",
      item3: "Style Sentiment: Monospace, Serif Header, Deep Obsidian",
    },
  },
  {
    step: "04",
    title: "Start with Clarity",
    desc: "Use the information collected to build a stronger foundation for your creative work.",
    detail: "Enter the design phase with complete confidence. No misaligned concepts. No wasted revision cycles. Just pure creative momentum.",
    badge: "Creative Execution",
    icon: (
      <svg className="w-6 h-6 text-[#30d158]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    preview: {
      header: "Creative Brief Synthesis",
      item1: "Designer Alignment: 100% Validated",
      item2: "Next Action: Initial Identity Concepts",
      item3: "Revision Risk: Minimal",
    },
  },
];

export default function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="how-it-works" className="pt-16 pb-20 sm:pt-24 sm:pb-28 bg-black text-white relative select-none border-t border-white/[0.06]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16 max-w-3xl">
          <div className="text-xs sm:text-sm font-semibold text-[#bf5af2] uppercase tracking-wider mb-3">
            How It Works
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-[54px] font-semibold tracking-tight text-white mb-6 leading-[1.08]">
            From Client Ideas to<br />
            Creative Clarity.
          </h2>
          <p className="text-base sm:text-lg md:text-[19px] text-[#a1a1a6] leading-relaxed font-normal">
            A frictionless, four-step journey transforming scattered client thoughts into actionable brand strategy.
          </p>
        </div>

        {/* 4 Steps Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-12">
          {steps.map((item, idx) => {
            const isCurrent = activeStep === idx;
            return (
              <div
                key={item.step}
                onClick={() => setActiveStep(idx)}
                className={`rounded-[26px] bg-[#161617] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 cursor-pointer border ${
                  isCurrent
                    ? "border-white/30 shadow-2xl -translate-y-1 bg-[#1a1a1c]"
                    : "border-white/[0.08] hover:border-white/15"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl sm:text-3xl font-mono font-semibold text-white/90">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center">
                      {item.icon}
                    </div>
                  </div>

                  <span className="text-[11px] font-semibold tracking-wider uppercase text-white/40 block mb-2">
                    {item.badge}
                  </span>

                  <h3 className="text-xl font-semibold text-white tracking-tight mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#a1a1a6] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs">
                  <span className={isCurrent ? "text-white font-medium" : "text-white/40"}>
                    {isCurrent ? "Active Step" : "Click to view"}
                  </span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isCurrent ? "translate-x-1 text-white" : "text-white/30"
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Detail Card for Selected Step */}
        <div className="rounded-[28px] sm:rounded-[32px] bg-[#161617] border border-white/[0.08] p-6 sm:p-8 md:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-xs font-medium text-white/80">
                <span>Step {steps[activeStep].step} Spotlight</span>
                <span>•</span>
                <span>{steps[activeStep].badge}</span>
              </div>

              <h4 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                {steps[activeStep].title}
              </h4>

              <p className="text-base sm:text-lg text-[#a1a1a6] leading-relaxed">
                {steps[activeStep].detail}
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-black/70 border border-white/10 p-5 shadow-inner">
                <div className="text-xs font-mono text-white/40 pb-3 border-b border-white/[0.08] mb-3 flex items-center justify-between">
                  <span>{steps[activeStep].preview.header}</span>
                  <span className="w-2 h-2 rounded-full bg-[#30d158]" />
                </div>
                <div className="space-y-2 text-xs sm:text-sm">
                  <div className="p-2.5 rounded-lg bg-white/[0.04] text-white/80 border border-white/[0.04]">
                    {steps[activeStep].preview.item1}
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/[0.04] text-white/80 border border-white/[0.04]">
                    {steps[activeStep].preview.item2}
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/[0.04] text-white/80 border border-white/[0.04]">
                    {steps[activeStep].preview.item3}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://floxa.flumenx.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white hover:bg-[#e8e8ed] text-black text-sm sm:text-base font-medium px-7 py-3 rounded-full transition-all duration-150 active:scale-95 shadow-md"
          >
            <span>Explore the FLOXA Experience</span>
            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

