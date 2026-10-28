"use client";

import React, { useRef } from "react";
import AppIcon from "../ui/AppIcon";

const fcpCards = [
  {
    title: "Start-to-finish performance.",
    desc: "Shoot pro-level footage with complete control in Final Cut Camera on iPhone. Then edit on iPad or Mac with powerful and approachable tools and effects, fine-tune the audio and share your finished story — all in one seamless flow.",
    image: "https://www.apple.com/v/apple-creator-studio/a/images/overview/final_cut/performance__bl64dj5mbevm_large.jpg",
  },
  {
    title: "Instantly find the moment you’re looking for.",
    desc: "Track down a shot without scrubbing through footage using Visual Search and locate the perfect sound bite with only a few keywords using Transcript Search.",
    image: "https://www.apple.com/v/apple-creator-studio/a/images/overview/final_cut/instant__e39ichvbco02_large.jpg",
  },
  {
    title: "Video editing with speed and flexibility.",
    desc: "The Magnetic Timeline lets you move and trim freely while maintaining synchronisation so you can explore endless creative possibilities. Connected Clips and storylines hold your edit together.",
    image: "https://www.apple.com/in/apple-creator-studio/images/overview/final_cut/devices__frevx0bf0eqa_large.jpg",
  },
  {
    title: "Perfect timing, every time.",
    desc: "Beat Detection matches your music’s rhythm so you can align clips effortlessly and keep your edits in sync with the beat.",
    image: "https://www.apple.com/v/apple-creator-studio/a/images/overview/final_cut/edit__cw1sr34faok2_large.jpg",
  },
  {
    title: "Beautiful, customisable graphics.",
    desc: "Add professionally designed motion graphics to your project with Motion in Apple Creator Studio, or select graphics from third-party providers like MotionVFX, FxFactory and more.",
    image: "https://www.apple.com/v/apple-creator-studio/a/images/overview/final_cut/graphics__ggu9cihv99u2_large.jpg",
  },
  {
    title: "Fast delivery.",
    desc: "Quickly batch export files that are optimised for any size — from your iPhone screen to the big screen. You can even use Compressor to customise export settings using a variety of pro formats.",
    image: "https://www.apple.com/v/apple-creator-studio/a/images/overview/final_cut/delivery__f66kogmgc3yy_large.jpg",
  },
];

export default function FinalCutProSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const offset = direction === "left" ? -420 : 420;
      scrollContainerRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <section id="final-cut-pro" className="py-24 bg-black text-white relative">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* App Section Header */}
        <div className="mb-12 max-w-3xl">
          <div className="mb-4">
            <AppIcon name="final-cut" size={64} />
          </div>

          <h3 className="text-xl sm:text-2xl font-semibold final-cut-gradient tracking-tight mb-2">
            Final Cut Pro
          </h3>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white mb-6 leading-[1.08]">
            The ultimate video creation experience.
          </h2>

          <p className="text-lg sm:text-xl text-[#86868b] leading-relaxed mb-6">
            <strong className="text-white font-semibold">Craft with power and precision</strong> using Final&nbsp;Cut&nbsp;Pro on Mac and iPad. With intuitive tools designed to elevate every frame, your vision moves from concept to cinematic story at the speed of thought.
          </p>

          <a
            href="https://www.apple.com/in/final-cut-pro/"
            className="inline-flex items-center gap-1.5 text-[#2997ff] hover:text-[#52aaff] text-base font-normal group transition-colors"
          >
            <span>Learn more about Final&nbsp;Cut&nbsp;Pro</span>
            <span className="group-hover:translate-x-1 transition-transform">›</span>
          </a>
        </div>

        {/* Feature Cards Horizontal Scroll Slider */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-4 pt-2 -mx-4 px-4"
          >
            {fcpCards.map((card, idx) => (
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
              aria-label="Previous Final Cut Pro item"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              aria-label="Next Final Cut Pro item"
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
