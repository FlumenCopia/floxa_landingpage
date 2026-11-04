"use client";

import React, { useRef } from "react";
import AppIcon from "../ui/AppIcon";

const fcpCards = [
  {
    title: "01 — Create your project.",
    desc: "Set up a project and prepare for the brand discovery process with customized inquiry modules and structured client questions.",
    image: "/images/final_cut/performance__bl64dj5mbevm_large.png",
    imageWide: true,
  },
  {
    title: "02 — Invite your client.",
    desc: "Share the discovery link and let your client communicate their vision, preferences, and expectations in an intuitive guided flow.",
    image: "/images/final_cut/instant__e39ichvbco02_large.png",
    imageWide: true,
  },
  {
    title: "03 — Discover the brand.",
    desc: "Gather insights about brand personality, target audience, business goals, competitors, and visual direction before sketching.",
    image: "/images/final_cut/devices__frevx0bf0eqa_large.png",
    imageWide: true,
  },
  {
    title: "04 — Start with clarity.",
    desc: "Use the information collected to build a stronger foundation for your creative work, logos, and visual brand identity.",
    image: "/images/final_cut/edit__cw1sr34faok2_large.png",
    imageWide: true,
  },
  {
    title: "Align goals and expectations.",
    desc: "Create a shared understanding of what the brand needs to communicate and achieve so everyone is aligned on day one.",
    image: "/images/final_cut/graphics__ggu9cihv99u2_large.png",
    imageWide: true,
  },
  {
    title: "A clearer creative starting point.",
    desc: "Use discovery insights to approach the design process with more context, direction, and confidence. Clarity before creation.",
    image: "/images/final_cut/delivery__f66kogmgc3yy_large.png",
    imageWide: false,
  },
];

export default function FinalCutProSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const offset = direction === "left" ? -580 : 580;
      scrollContainerRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <section id="final-cut-pro" className="pt-4 pb-6 sm:pt-6 sm:pb-8 md:pt-10 md:pb-12 bg-black text-white relative select-none">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        {/* App Section Header matching Screenshot 1 */}
        <div className="mb-3 sm:mb-5 max-w-2xl">
          {/* Eyebrow in vibrant purple */}
          <div className="text-lg sm:text-xl font-semibold text-[#bf5af2] tracking-tight mb-2">
            How It Works
          </div>

          {/* Main Headline */}
          <h2 className="text-2xl sm:text-4xl md:text-[48px] font-semibold tracking-tight text-white mb-6 leading-[1.1]">
            From client ideas to<br />
            creative clarity.
          </h2>

          {/* Narrative Body Copy */}
          <p className="text-base sm:text-lg md:text-[19px] text-[#a1a1a6] leading-relaxed mb-6 font-normal">
            <strong className="text-white font-semibold">A collection of thoughts can become a clearer creative vision</strong> when the right questions are asked. FLOXA puts brand discovery at the beginning of the process, helping designers understand the client&apos;s vision before moving into visual execution.
          </p>
        </div>

        {/* Caption Tile Gallery Slider matching Screenshot 2 */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pb-4 pt-2 -mx-4 px-4 sm:-mx-6 sm:px-6"
          >
            {fcpCards.map((card, idx) => (
              <div
                key={idx}
                className="w-[85vw] max-w-[340px] xs:w-[82vw] xs:max-w-[420px] sm:w-[520px] md:w-[600px] shrink-0 flex flex-col group snap-start"
              >
                {/* 1. Big Rounded Media Tile Card */}
                <div className="relative w-full h-[210px] xs:h-[250px] sm:h-[340px] md:h-[400px] rounded-[20px] sm:rounded-[28px] bg-[#161617] border border-white/[0.08] overflow-hidden flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:border-white/15">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover object-center filter drop-shadow-md select-none pointer-events-none transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = "none";
                    }}
                  />
                </div>

                {/* 2. Caption Text placed BELOW the card matching user screenshot */}
                <div className="mt-4 sm:mt-5 px-1 max-w-[620px]">
                  <p className="text-sm sm:text-[15px] md:text-base text-[#a1a1a6] leading-relaxed font-normal">
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
          <div className="flex items-center justify-end gap-3 mt-4">
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
