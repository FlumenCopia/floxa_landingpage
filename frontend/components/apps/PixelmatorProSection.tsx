"use client";

import React, { useRef } from "react";
import AppIcon from "../ui/AppIcon";

const pixelmatorCards = [
  {
    title: "Speed up your workflow.",
    desc: "Intelligent features automate image edits like background removal, image repair, detail enhancement, colour adjustment and more.",
    image: "https://www.apple.com/v/apple-creator-studio/a/images/overview/pixelmator/workflow__dq3l5g6b3i2q_large.jpg",
  },
  {
    title: "Layering without limits.",
    desc: "Use simple building blocks — shape, text, video and image layers — to create virtually anything you can imagine. Add effects, adjust composition and experiment freely with non-destructive editing, knowing every change is reversible.",
    image: "https://www.apple.com/in/apple-creator-studio/images/overview/pixelmator/editing__cbb1s547a8qa_large.jpg",
  },
  {
    title: "Stunning templates and mock-ups.",
    desc: "Start working from professionally crafted templates and beautiful mock-ups for social media and print.",
    image: "https://www.apple.com/v/apple-creator-studio/a/images/overview/pixelmator/templates__dtsfh52oryye_large.jpg",
  },
  {
    title: "Typographic control.",
    desc: "Use any font and customise your text with everything from sophisticated styles to curved paths. Preview it live and save your favourite styles as presets.",
    image: "https://www.apple.com/in/apple-creator-studio/images/overview/pixelmator/typography__brgultxp6xua_large.jpg",
  },
  {
    title: "Fully optimised for touch on iPad.",
    desc: "Use natural gestures for fast, fluid onscreen interactions. And with Apple Pencil, you can edit with even more precision, so your creative work is smooth and intuitive.",
    image: "https://www.apple.com/in/apple-creator-studio/images/overview/pixelmator/ipad__bj8z0llszo1y_large.jpg",
  },
];

export default function PixelmatorProSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const offset = direction === "left" ? -420 : 420;
      scrollContainerRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <section id="pixelmator-pro" className="py-24 bg-black text-white relative">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* App Section Header */}
        <div className="mb-12 max-w-3xl">
          <div className="mb-4">
            <AppIcon name="pixelmator" size={64} />
          </div>

          <h3 className="text-xl sm:text-2xl font-semibold pixelmator-gradient tracking-tight mb-2">
            Pixelmator Pro
          </h3>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white mb-6 leading-[1.08]">
            Creative imaging and design.<br />
            Made for everyone.
          </h2>

          <p className="text-lg sm:text-xl text-[#86868b] leading-relaxed mb-6">
            Edit and design using intelligent tools that <strong className="text-white font-semibold">bring your vision to life.</strong> From social posts to billboards, Pixelmator&nbsp;Pro simplifies every step of your projects. Effortlessly customise vector designs or typography, then let powerful features help your imagination take shape.
          </p>

          <a
            href="https://www.apple.com/in/pixelmator-pro/"
            className="inline-flex items-center gap-1.5 text-[#2997ff] hover:text-[#52aaff] text-base font-normal group transition-colors"
          >
            <span>Learn more about Pixelmator&nbsp;Pro</span>
            <span className="group-hover:translate-x-1 transition-transform">›</span>
          </a>
        </div>

        {/* Feature Cards Horizontal Scroll Slider */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-4 pt-2 -mx-4 px-4"
          >
            {pixelmatorCards.map((card, idx) => (
              <div
                key={idx}
                className="w-[320px] sm:w-[400px] md:w-[440px] shrink-0 rounded-3xl bg-[#161617] border border-white/[0.08] overflow-hidden flex flex-col justify-between hover:border-white/20 transition-all duration-300 shadow-xl"
              >
                <div className="p-6 sm:p-8">
                  <h4 className="text-xl sm:text-2xl font-semibold text-white mb-3">
                    {card.title}
                  </h4>
                  <p className="text-sm sm:text-base text-[#86868b] leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="relative h-60 sm:h-72 w-full bg-[#121214] flex items-center justify-center p-3 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="max-h-full max-w-full object-contain filter drop-shadow-md rounded-xl transition-transform duration-500 hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = "none";
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Paddle Navigation Buttons */}
          <div className="flex items-center justify-end gap-3 mt-6">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              aria-label="Previous Pixelmator Pro item"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              aria-label="Next Pixelmator Pro item"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
