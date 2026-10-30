"use client";

import React, { useRef } from "react";
import AppIcon from "../ui/AppIcon";
import PixelmatorColorPicker from "./PixelmatorColorPicker";

const pixelmatorCards = [
  {
    title: "Speed up your workflow.",
    desc: "Intelligent features automate image edits like background removal, image repair, detail enhancement, colour adjustment and more.",
    image: "/images/pixelmator/workflow__dq3l5g6b3i2q_large.jpg",
  },
  {
    title: "Layering without limits.",
    desc: "Use simple building blocks — shape, text, video and image layers — to create virtually anything you can imagine. Add effects, adjust composition and experiment freely with non-destructive editing, knowing every change is reversible.",
    image: "/images/pixelmator/editing__cbb1s547a8qa_large.png",
  },
  {
    title: "Stunning templates and mock-ups.",
    desc: "Start working from professionally crafted templates and beautiful mock-ups for social media and print.",
    image: "/images/pixelmator/templates__dtsfh52oryye_large.png",
  },
  {
    title: "Typographic control.",
    desc: "Use any font and customise your text with everything from sophisticated styles to curved paths. Preview it live and save your favourite styles as presets.",
    image: "/images/pixelmator/typography__brgultxp6xua_large.png",
  },
  {
    title: "Fully optimised for touch on iPad.",
    desc: "Use natural gestures for fast, fluid onscreen interactions. And with Apple Pencil, you can edit with even more precision, so your creative work is smooth and intuitive.",
    footnote: "9",
    image: "/images/pixelmator/ipad__bj8z0llszo1y_large.png",
  },
];

export default function PixelmatorProSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const offset = direction === "left" ? -400 : 400;
      scrollContainerRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <section id="pixelmator-pro" className="py-12 sm:py-20 md:py-28 bg-black text-white relative select-none">
      {/* 1. Dynamic Interactive Color Picker Hero matching user request */}
      <div className="w-full max-w-[1536px] mx-auto px-2 sm:px-6 lg:px-8 mb-10 sm:mb-16 md:mb-20">
        <PixelmatorColorPicker />
      </div>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8">
        {/* 2. App Section Header */}
        <div className="mb-10 sm:mb-16 max-w-2xl">
          {/* App Icon (Commented out)
          <div className="mb-4">
            <AppIcon name="pixelmator" size={40} />
          </div>
          */}

          <div className="text-base sm:text-xl font-semibold text-[#ff375f] tracking-tight mb-2">
            Pixelmator Pro
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-[68px] font-semibold tracking-tight text-white mb-4 sm:mb-6 leading-[1.08] sm:leading-[1.06]">
            Creative imaging and design.<br className="hidden sm:inline" />{" "}
            Made for everyone.
          </h2>

          <p className="text-sm sm:text-lg md:text-[19px] text-[#a1a1a6] leading-relaxed mb-6 font-normal">
            Edit and design using intelligent tools that <strong className="text-white font-semibold">bring your vision to life.</strong> From social posts to billboards, Pixelmator&nbsp;Pro simplifies every step of your projects. Effortlessly customise vector designs or typography, then let powerful features help your imagination take shape.
          </p>
        </div>

        {/* 3. Feature Cards Horizontal Scroll Slider */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-4 pt-2 -mx-4 px-4 sm:-mx-6 sm:px-6 md:-mx-8 md:px-8"
          >
            {pixelmatorCards.map((card, idx) => (
              <div
                key={idx}
                className="w-[78vw] max-w-[300px] sm:w-[330px] md:w-[360px] lg:w-[380px] shrink-0 flex flex-col group"
              >
                {/* Rounded Media Tile Card */}
                <div className="relative w-full h-[260px] sm:h-[350px] md:h-[400px] lg:h-[420px] rounded-[20px] sm:rounded-[28px] bg-[#161617] border border-white/[0.08] overflow-hidden flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:border-white/15">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover object-center filter drop-shadow-md select-none pointer-events-none transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = "none";
                    }}
                  />
                </div>

                {/* Caption Text Below Card */}
                <div className="mt-4 px-0.5">
                  <p className="text-sm sm:text-[15px] text-[#a1a1a6] leading-[1.38] font-normal">
                    <strong className="text-white font-semibold">
                      {card.title}{" "}
                    </strong>
                    {card.desc}
                    {card.footnote && (
                      <sup className="text-[10px] ml-0.5 text-white/70">
                        {card.footnote}
                      </sup>
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Paddle Navigation Buttons */}
          <div className="flex items-center justify-end gap-3 mt-6">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors shadow-sm"
              aria-label="Previous Pixelmator Pro item"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors shadow-sm"
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
