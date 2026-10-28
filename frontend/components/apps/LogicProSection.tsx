"use client";

import React, { useRef } from "react";
import AppIcon from "../ui/AppIcon";

const logicCards = [
  {
    title: "Music production with AI Session Players.",
    desc: "Produce with a full band of musicians that can lay down polished synth, bass, keyboard and drums that adapt in real time to your musical style.",
    image: "https://www.apple.com/v/apple-creator-studio/a/images/overview/logic_pro/riff__b0nup5be041y_large.jpg",
  },
  {
    title: "From idea to final master, fast.",
    desc: "Supercharge your workflow with intelligent tools, like Stem Splitter and Mastering Assistant, to help you fine-tune your creative process so you can produce, refine and finish in no time.",
    image: "https://www.apple.com/v/apple-creator-studio/a/images/overview/logic_pro/automate__dc7dllcycve6_large.jpg",
  },
  {
    title: "Record drafts on the go.",
    desc: "Voice Memos lets you record anywhere using your iPhone, iPad, Mac or Apple Watch. Then bring your recording straight into Logic Pro to take your music to the next level.",
    image: "https://www.apple.com/in/apple-creator-studio/images/overview/logic_pro/voice_memos__qlpfg2k6e9m6_large.jpg",
  },
  {
    title: "Beat-making tools.",
    desc: "Build custom drum kits with any samples or instruments, then easily reshape melodies and rhythms with Step Sequencer and craft the perfect beat.",
    image: "https://www.apple.com/in/apple-creator-studio/images/overview/logic_pro/beat_making__mpza109xwp2m_large.jpg",
  },
  {
    title: "Massive Sound Library.",
    desc: "From loops to samples to patches, get thousands of royalty-free sounds in an ever-growing collection, so you can build tracks without boundaries.",
    image: "https://www.apple.com/v/apple-creator-studio/a/images/overview/logic_pro/library__blk2gs8ihb6q_large.jpg",
  },
  {
    title: "Instruments and effects.",
    desc: "Dial up authentic vintage keyboards or powerful modern synths to give your tracks a distinctive vibe. And explore a complete suite of effect plug-ins for detailed sound shaping and mixing.",
    image: "https://www.apple.com/v/apple-creator-studio/a/images/overview/logic_pro/effects__f26m02zok0ey_large.jpg",
  },
];

export default function LogicProSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const offset = direction === "left" ? -420 : 420;
      scrollContainerRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <section id="logic-pro" className="py-24 bg-black text-white relative">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* App Section Header */}
        <div className="mb-12 max-w-3xl">
          <div className="mb-4">
            <AppIcon name="logic-pro" size={64} />
          </div>

          <h3 className="text-xl sm:text-2xl font-semibold logic-gradient tracking-tight mb-2">
            Logic Pro
          </h3>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white mb-6 leading-[1.08]">
            The fast track to the final mix.<br />
            Wherever you&nbsp;go.
          </h2>

          <p className="text-lg sm:text-xl text-[#86868b] leading-relaxed mb-6">
            Create with intelligent Session Players, cutting-edge beat-making tools and a massive Sound Library — seamlessly across Mac and iPad.<sup>10</sup> Logic Pro <strong className="text-white font-semibold">makes music production easier than ever.</strong>
          </p>

          <a
            href="https://www.apple.com/in/logic-pro/"
            className="inline-flex items-center gap-1.5 text-[#2997ff] hover:text-[#52aaff] text-base font-normal group transition-colors"
          >
            <span>Learn more about Logic&nbsp;Pro</span>
            <span className="group-hover:translate-x-1 transition-transform">›</span>
          </a>
        </div>

        {/* Feature Cards Horizontal Scroll Slider */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-4 pt-2 -mx-4 px-4"
          >
            {logicCards.map((card, idx) => (
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
              aria-label="Previous Logic Pro item"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
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
