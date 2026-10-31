"use client";

import React, { useRef } from "react";
import AppIcon from "../ui/AppIcon";

const fcpCards = [
  {
    title: "Start-to-finish performance.",
    desc: "Shoot pro-level footage with complete control in Final Cut Camera on iPhone. Then edit on iPad or Mac with powerful and approachable tools and effects, fine-tune the audio and share your finished story — all in one seamless flow.",
    footnote: "5",
    image: "/images/final_cut/performance__bl64dj5mbevm_large.png",
    imageWide: true,
  },
  {
    title: "Instantly find the moment you’re looking for.",
    desc: "Track down a shot without scrubbing through footage using Visual Search and locate the perfect sound bite with only a few keywords using Transcript Search.",
    footnote: "6, 7",
    image: "/images/final_cut/instant__e39ichvbco02_large.png",
    imageWide: true,
  },
  {
    title: "Video editing with speed and flexibility.",
    desc: "The Magnetic Timeline lets you move and trim freely while maintaining synchronisation so you can explore endless creative possibilities. Connected Clips and storylines hold your edit together. Multicam helps you cut the perfect interview. And Auditions let you find the best take.",
    image: "/images/final_cut/devices__frevx0bf0eqa_large.png",
    imageWide: true,
  },
  {
    title: "Perfect timing, every time.",
    desc: "Beat Detection matches your music’s rhythm so you can align clips effortlessly and keep your edits in sync with the beat.",
    image: "/images/final_cut/edit__cw1sr34faok2_large.png",
    imageWide: true,
  },
  {
    title: "Beautiful, customisable graphics.",
    desc: "Add professionally designed motion graphics to your project with Motion in Floxa, or select graphics from third-party providers like MotionVFX, FxFactory and more.",
    footnote: "8",
    image: "/images/final_cut/graphics__ggu9cihv99u2_large.png",
    imageWide: true,
  },
  {
    title: "Fast delivery.",
    desc: "Quickly batch export files that are optimised for any size — from your iPhone screen to the big screen. You can even use Compressor to customise export settings using a variety of pro formats.",
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
        {/* Cinematic Hero Visual Banner (Commented out) */}
        {/*
        <div className="relative w-full max-w-[1180px] mx-auto mb-16 sm:mb-20 overflow-hidden flex items-center justify-center">
          <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />

          <img
            src="/images/final_cut/hero_statics_endframe__d5km437k2zqu_xlarge.jpg"
            srcSet="
              /images/final_cut/hero_statics_endframe__d5km437k2zqu_large.jpg 1068w,
              /images/final_cut/hero_statics_endframe__d5km437k2zqu_xlarge.jpg 1440w
            "
            sizes="(max-width: 1068px) 100vw, 1200px"
            alt="Video timeline of a person in a silver outfit in front of a blue and magenta background, Final Cut Pro trim controls"
            className="w-full h-auto max-h-[580px] object-contain select-none pointer-events-none filter drop-shadow-2xl"
          />
        </div>
        */}

        {/* App Section Header matching Screenshot 1 */}
        <div className="mb-3 sm:mb-5 max-w-2xl">
          {/* App Chiclet Icon (Commented out)
          <div className="mb-4">
            <AppIcon name="final-cut" size={40} />
          </div>
          */}

          {/* Eyebrow in vibrant purple */}
          <div className="text-lg sm:text-xl font-semibold text-[#bf5af2] tracking-tight mb-2">
            Final Cut Pro
          </div>

          {/* Main Headline */}
          <h2 className="text-2xl sm:text-4xl md:text-[48px] font-semibold tracking-tight text-white mb-6 leading-[1.1]">
            The ultimate video<br />
            creation experience.
          </h2>

          {/* Narrative Body Copy */}
          <p className="text-base sm:text-lg md:text-[19px] text-[#a1a1a6] leading-relaxed mb-6 font-normal">
            <strong className="text-white font-semibold">Craft with power and precision</strong> using Final&nbsp;Cut&nbsp;Pro on Mac and iPad. With intuitive tools designed to elevate every frame, your vision moves from concept to cinematic story at the speed of thought.
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
          <div className="flex items-center justify-end gap-3 mt-4">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors shadow-sm"
              aria-label="Previous Final Cut Pro item"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors shadow-sm"
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
