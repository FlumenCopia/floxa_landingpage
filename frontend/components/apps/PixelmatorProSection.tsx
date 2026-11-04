"use client";

import React, { useRef } from "react";
import AppIcon from "../ui/AppIcon";
import PixelmatorColorPicker from "./PixelmatorColorPicker";

const pixelmatorCards = [
  {
    title: "Structured brand discovery.",
    desc: "Collect meaningful client information through an organized discovery process that eliminates guesswork.",
    image: "/images/pixelmator/workflow__dq3l5g6b3i2q_large.jpg",
  },
  {
    title: "Understand brand personality.",
    desc: "Explore the qualities, values, and emotions a brand wants to communicate to the world before designing.",
    image: "/images/pixelmator/editing__cbb1s547a8qa_large.png",
  },
  {
    title: "Discover visual preferences.",
    desc: "Understand the client's visual references, preferred styles, and creative expectations before the first concept.",
    image: "/images/pixelmator/templates__dtsfh52oryye_large.png",
  },
  {
    title: "Align goals and expectations.",
    desc: "Create a shared understanding of what the brand needs to communicate and achieve across all touchpoints.",
    image: "/images/pixelmator/typography__brgultxp6xua_large.png",
  },
  {
    title: "A clearer creative starting point.",
    desc: "Use discovery insights to approach the design process with more context, direction, and client alignment.",
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
    <section id="pixelmator-pro" className="pt-4 pb-12 sm:pt-6 sm:pb-16 md:pt-8 md:pb-18 bg-black text-white relative select-none">
      {/* 1. Dynamic Interactive Color Picker Hero matching user request */}
      <div className="w-full max-w-[1536px] mx-auto px-2 sm:px-6 lg:px-8 mb-6 sm:mb-8">
        <PixelmatorColorPicker />
      </div>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8">
        {/* 2. App Section Header */}
        <div className="mb-8 sm:mb-10 max-w-2xl">
          <div className="text-base sm:text-xl font-semibold text-[#ff375f] tracking-tight mb-2">
            Key Features
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-[48px] font-semibold tracking-tight text-white mb-4 sm:mb-6 leading-[1.1]">
            Everything starts with understanding.<br className="hidden sm:inline" />{" "}
            Built for brand discovery.
          </h2>

          <p className="text-sm sm:text-lg md:text-[19px] text-[#a1a1a6] leading-relaxed mb-6 font-normal">
            Understand the client&apos;s visual references, preferred styles, and creative expectations. <strong className="text-white font-semibold">Bring client insights together</strong> into an organized discovery process so you can approach the design process with more context and direction.
          </p>
        </div>

        {/* 3. Feature Cards Horizontal Scroll Slider */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pb-4 pt-2 -mx-4 px-4 sm:-mx-6 sm:px-6 md:-mx-8 md:px-8"
          >
            {pixelmatorCards.map((card, idx) => (
              <div
                key={idx}
                className="w-[78vw] max-w-[280px] xs:w-[78vw] xs:max-w-[310px] sm:w-[330px] md:w-[360px] lg:w-[380px] shrink-0 flex flex-col group snap-start"
              >
                {/* Rounded Media Tile Card */}
                <div className="relative w-full h-[230px] xs:h-[270px] sm:h-[350px] md:h-[400px] lg:h-[420px] rounded-[20px] sm:rounded-[28px] bg-[#161617] border border-white/[0.08] overflow-hidden flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:border-white/15">
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
              aria-label="Previous item"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors shadow-sm"
              aria-label="Next item"
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
