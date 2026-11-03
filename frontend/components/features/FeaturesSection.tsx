"use client";

import React, { useState } from "react";

const features = [
  {
    id: "structured-discovery",
    badge: "Core Workflow",
    title: "Structured Brand Discovery",
    desc: "Collect meaningful client information through an organized discovery process.",
    detail: "Replace unstructured email threads and chaotic Notion docs with a cohesive, beautifully paced brand questionnaire.",
    accent: "#2997ff",
    span: "lg:col-span-8",
  },
  {
    id: "brand-personality",
    badge: "Emotional DNA",
    title: "Understand Brand Personality",
    desc: "Explore the qualities, values, and emotions a brand wants to communicate.",
    detail: "Map archetypes, temperament, and voice to craft an identity that resonates on an emotional level.",
    accent: "#ff375f",
    span: "lg:col-span-4",
  },
  {
    id: "visual-preferences",
    badge: "Aesthetic Direction",
    title: "Discover Visual Preferences",
    desc: "Understand the client's visual references, preferred styles, and creative expectations.",
    detail: "Clarify preferences on minimalism, typography moods, color warmth, and visual energy before sketching.",
    accent: "#ff9f0a",
    span: "lg:col-span-4",
  },
  {
    id: "goals-expectations",
    badge: "Strategic Alignment",
    title: "Align Goals and Expectations",
    desc: "Create a shared understanding of what the brand needs to communicate and achieve.",
    detail: "Eliminate hidden assumptions and unite stakeholders on target milestones and key brand messaging.",
    accent: "#30d158",
    span: "lg:col-span-4",
  },
  {
    id: "creative-starting-point",
    badge: "Design Foundation",
    title: "A Clearer Creative Starting Point",
    desc: "Use discovery insights to approach the design process with more context and direction.",
    detail: "Produce work that is backed by client rationale, streamlining approvals and building lasting client trust.",
    accent: "#bf5af2",
    span: "lg:col-span-4",
  },
];

export default function FeaturesSection() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section id="features" className="pt-16 pb-20 sm:pt-24 sm:pb-28 bg-black text-white relative select-none border-t border-white/[0.06]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16 max-w-3xl">
          <div className="text-xs sm:text-sm font-semibold text-[#30d158] uppercase tracking-wider mb-3">
            Key Features
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-[54px] font-semibold tracking-tight text-white mb-6 leading-[1.08]">
            Everything Starts<br />
            with Understanding.
          </h2>
          <p className="text-base sm:text-lg md:text-[19px] text-[#a1a1a6] leading-relaxed font-normal">
            Built around better brand discovery — equipping designers with clarity, structure, and actionable insights.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6">
          {features.map((item) => {
            const isHovered = hoveredCard === item.id;
            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredCard(item.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`rounded-[28px] sm:rounded-[32px] bg-[#161617] border p-7 sm:p-9 flex flex-col justify-between shadow-2xl transition-all duration-300 relative overflow-hidden ${
                  item.span
                } ${
                  isHovered
                    ? "border-white/25 -translate-y-1"
                    : "border-white/[0.08]"
                }`}
              >
                {/* Accent glow on hover */}
                <div
                  className="absolute -top-24 -right-24 w-52 h-52 rounded-full blur-[80px] pointer-events-none transition-opacity duration-500"
                  style={{
                    backgroundColor: item.accent,
                    opacity: isHovered ? 0.15 : 0.05,
                  }}
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className="text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full border"
                      style={{
                        color: item.accent,
                        borderColor: `${item.accent}40`,
                        backgroundColor: `${item.accent}10`,
                      }}
                    >
                      {item.badge}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-white/20" />
                  </div>

                  <h3 className="text-2xl sm:text-[26px] font-semibold text-white tracking-tight mb-3">
                    {item.title}
                  </h3>

                  <p className="text-base text-white/90 font-medium mb-3">
                    {item.desc}
                  </p>

                  <p className="text-sm text-[#a1a1a6] leading-relaxed">
                    {item.detail}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-white/40 relative z-10">
                  <span>Available in FLOXA</span>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#30d158]" />
                    <span className="text-white/60">Live Product</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note from Product Requirements */}
        <div className="mt-10 text-center">
          <p className="text-xs text-white/40 tracking-wide">
            Designed specifically for modern brand discovery workflows.
          </p>
        </div>
      </div>
    </section>
  );
}

