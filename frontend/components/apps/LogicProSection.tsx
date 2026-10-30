"use client";

import React, { useRef, useState, useEffect } from "react";
import AppIcon from "../ui/AppIcon";

const logicCards = [
  {
    title: "Music production with AI Session Players.",
    desc: "Produce with a full band of musicians that can lay down polished synth, bass, keyboard and drums that adapt in real time to your musical style.",
    footnote: "11",
    image: "/images/logic_pro/riff__b0nup5be041y_large.png",
  },
  {
    title: "From idea to final master, fast.",
    desc: "Supercharge your workflow with intelligent tools, like Stem Splitter and Mastering Assistant, to help you fine-tune your creative process so you can produce, refine and finish in no time.",
    image: "/images/logic_pro/automate__dc7dllcycve6_large.jpg",
  },
  {
    title: "Record drafts on the go.",
    desc: "Voice Memos lets you record anywhere using your iPhone, iPad, Mac or Apple Watch. Then bring your recording straight into Logic Pro to take your music to the next level.",
    image: "/images/logic_pro/voice_memos__qlpfg2k6e9m6_large.png",
  },
  {
    title: "Beat-making tools.",
    desc: "Build custom drum kits with any samples or instruments, then easily reshape melodies and rhythms with Step Sequencer and craft the perfect beat.",
    image: "/images/logic_pro/beat_making__mpza109xwp2m_large.png",
  },
  {
    title: "Massive Sound Library.",
    desc: "From loops to samples to patches, get thousands of royalty-free sounds in an ever-growing collection, so you can build tracks without boundaries.",
    image: "/images/logic_pro/library__blk2gs8ihb6q_large.jpg",
  },
  {
    title: "Instruments and effects.",
    desc: "Dial up authentic vintage keyboards or powerful modern synths to give your tracks a distinctive vibe. And explore a complete suite of effect plug-ins for detailed sound shaping and mixing.",
    image: "/images/logic_pro/effects__f26m02zok0ey_large.png",
  },
];

export default function LogicProSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    if (selectedImage) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const offset = direction === "left" ? -580 : 580;
      scrollContainerRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <section id="logic-pro" className="py-20 md:py-28 bg-black text-white relative select-none">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        {/* Cinematic Hero Visual Banner (Commented out) */}
        {/*
        <div className="relative w-full max-w-[1180px] mx-auto mb-16 sm:mb-20 overflow-hidden flex items-center justify-center">
          <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />

          <img
            src="/images/logic_pro/hero_endframe__chfdpsnstqeu_xlarge.jpg"
            srcSet="
              /images/logic_pro/hero_endframe__chfdpsnstqeu_large.jpg 1068w,
              /images/logic_pro/hero_endframe__chfdpsnstqeu_xlarge.jpg 1440w
            "
            sizes="(max-width: 1068px) 100vw, 1200px"
            alt="Logic Pro screen, interface for sequencing beats with turquoise, navy, and purple buttons"
            className="w-full h-auto max-h-[580px] object-contain select-none pointer-events-none filter drop-shadow-2xl"
          />
        </div>
        */}

        {/* App Section Header */}
        <div className="mb-14 sm:mb-16 max-w-2xl">
          {/* App Icon (Commented out)
          <div className="mb-4">
            <AppIcon name="logic-pro" size={40} />
          </div>
          */}

          <div className="text-lg sm:text-xl font-semibold text-[#ff9f0a] tracking-tight mb-2">
            Logic Pro
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-[48px] font-semibold tracking-tight text-white mb-6 leading-[1.1]">
            The fast track to the final mix.<br />
            Wherever you&nbsp;go.
          </h2>

          <p className="text-base sm:text-lg md:text-[19px] text-[#a1a1a6] leading-relaxed mb-6 font-normal">
            Create with intelligent Session Players, cutting-edge beat-making tools and a massive Sound Library — seamlessly across Mac and iPad.<sup>10</sup> Logic Pro <strong className="text-white font-semibold">makes music production easier than ever.</strong>
          </p>
        </div>

        {/* Feature Cards Horizontal Scroll Slider */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-4 pt-2 -mx-6 px-6"
          >
            {logicCards.map((card, idx) => (
              <div
                key={idx}
                className="w-[84vw] sm:w-[580px] md:w-[640px] shrink-0 flex flex-col group"
              >
                {/* Big Rounded Media Tile Card */}
                <div
                  onClick={() => setSelectedImage({ src: card.image, title: card.title })}
                  className="relative w-full h-[320px] sm:h-[400px] md:h-[440px] rounded-[24px] sm:rounded-[28px] bg-[#121316] border border-white/[0.08] overflow-hidden flex items-center justify-center p-3 sm:p-5 shadow-2xl transition-all duration-300 group-hover:border-white/25 cursor-pointer"
                  title="Click to view full image"
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-contain object-center filter drop-shadow-2xl select-none pointer-events-none transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = "none";
                    }}
                  />
                  {/* Subtle expand indicator icon */}
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/70 opacity-0 group-hover:opacity-100 transition-opacity shadow-md pointer-events-none">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                  </div>
                </div>

                {/* Caption Text Below Card */}
                <div className="mt-5 px-1 max-w-[620px]">
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
          <div className="flex items-center justify-end gap-3 mt-6">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors shadow-sm"
              aria-label="Previous Logic Pro item"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors shadow-sm"
              aria-label="Next Logic Pro item"
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
