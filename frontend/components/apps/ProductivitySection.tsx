"use client";

import React, { useRef } from "react";
import AppIcon from "../ui/AppIcon";

const productivityCards = [
  {
    title: "Freelance Brand Identity Designers.",
    desc: "Understand your clients better and establish a clearer direction before creating logos and visual identities.",
    appAvailability: "For Independent Designers",
    image: "/images/productivity/slides__fqpujht4t4mm_large.png",
  },
  {
    title: "Branding Studios & Creative Agencies.",
    desc: "Bring more structure to client discovery and help teams work from a shared understanding of the brand.",
    appAvailability: "For Creative Teams",
    image: "/images/productivity/imagery__fomaia2g1yye_large.jpg",
  },
  {
    title: "Brand Consultants & Strategists.",
    desc: "Organize discovery conversations and gather insights that support brand strategy and identity projects.",
    appAvailability: "For Brand Strategists",
    image: "/images/productivity/templates__dtsfh52oryye_large.jpg",
  },
  {
    title: "Creative Professionals.",
    desc: "Build a better foundation for creative projects by understanding the people and ideas behind each brand.",
    appAvailability: "For Creative Practitioners",
    image: "/images/productivity/clean_up__bqwo4cyihtea_large.png",
  },
  {
    title: "A Clearer Creative Starting Point.",
    desc: "Use discovery insights to approach the design process with more context, direction, and client alignment.",
    appAvailability: "For All Brand Projects",
    image: "/images/productivity/magic_fill__eipdlug12o02_large.png",
  },
];

export default function ProductivitySection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const offset = direction === "left" ? -580 : 580;
      scrollContainerRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <section id="visual-productivity" className="pt-4 pb-6 sm:pt-6 sm:pb-8 md:pt-10 md:pb-12 bg-black text-white relative select-none">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        {/* Cinematic Hero Visual Banner */}
        <div className="relative w-full max-w-[1268px] mx-auto mb-3 sm:mb-5 flex items-center justify-center">
          <img
            src="/images/productivity/hero__d78ra8ka1sa6_large.jpg"
            srcSet="
              /images/productivity/hero__d78ra8ka1sa6_medium_2x.png 1068w,
              /images/productivity/hero__d78ra8ka1sa6_large_2x.png 1440w
            "
            sizes="(max-width: 1068px) 100vw, 1268px"
            alt="iPad Pro, iPhone, and MacBook Pro showcasing FLOXA brand discovery tools"
            className="w-full h-auto object-contain select-none pointer-events-none"
          />
        </div>

        {/* Header with productivity apps */}
        <div className="mb-3 sm:mb-5 max-w-2xl">
          <div className="text-lg sm:text-xl font-semibold text-[#30d158] tracking-tight mb-2">
            Who It&apos;s For
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-[48px] font-semibold tracking-tight text-white mb-6 leading-[1.1]">
            Made for people who<br />
            build brands.
          </h2>

          <p className="text-base sm:text-lg md:text-[19px] text-[#a1a1a6] leading-relaxed mb-6 font-normal">
            <strong className="text-white font-semibold">
              For those who bring brands to life.
            </strong>{" "}
            Build a better foundation for creative projects by understanding the people and ideas behind each brand. FLOXA gives designers and studios a structured way to discover client needs before creative execution begins.
          </p>
        </div>

        {/* Feature Cards Horizontal Scroll Slider */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pb-4 pt-2 -mx-4 px-4 sm:-mx-6 sm:px-6"
          >
            {productivityCards.map((card, idx) => (
              <div
                key={idx}
                className="w-[85vw] max-w-[340px] xs:w-[82vw] xs:max-w-[420px] sm:w-[520px] md:w-[600px] shrink-0 flex flex-col group snap-start"
              >
                {/* Big Rounded Media Tile Card */}
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

                {/* Caption Text Below Card */}
                <div className="mt-4 sm:mt-5 px-1 max-w-[620px]">
                  <p className="text-sm sm:text-[15px] md:text-base text-[#a1a1a6] leading-relaxed font-normal mb-1">
                    <strong className="text-white font-semibold">
                      {card.title}{" "}
                    </strong>
                    {card.desc}
                  </p>
                  <span className="text-xs text-white/40 font-medium">
                    {card.appAvailability}
                  </span>
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
