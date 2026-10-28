"use client";

import React, { useState, useEffect } from "react";
import VideoModal from "../ui/VideoModal";

interface HighlightItem {
  id: string;
  tabTitle: string;
  accentText: string;
  accentColor: string;
  headline: string;
  image: string;
  image2x?: string;
}

const highlightItems: HighlightItem[] = [
  {
    id: "creative-apps",
    tabTitle: "Apple Creator Studio",
    accentText: "",
    accentColor: "#ffffff",
    headline: "Endless creativity. Unlimited possibilities. One suite deal.",
    image: "https://www.apple.com/v/apple-creator-studio/a/images/overview/highlights/creative_apps__bzylnonwi81y_large.jpg",
    image2x: "https://www.apple.com/v/apple-creator-studio/a/images/overview/highlights/creative_apps__bzylnonwi81y_large_2x.jpg",
  },
  {
    id: "final-cut",
    tabTitle: "Final Cut Pro",
    accentText: "Final Cut Pro",
    accentColor: "#2997ff",
    headline: "gives you smarter, faster ways to craft and cut captivating videos.",
    image: "https://www.apple.com/in/apple-creator-studio/images/overview/highlights/final_cut__fe9c0hwz9ca6_large.jpg",
    image2x: "https://www.apple.com/in/apple-creator-studio/images/overview/highlights/final_cut__fe9c0hwz9ca6_large_2x.jpg",
  },
  {
    id: "pixelmator",
    tabTitle: "Pixelmator Pro",
    accentText: "Pixelmator Pro",
    accentColor: "#ff375f",
    headline: "lets everyone edit images and create striking graphics using powerful intelligence.",
    image: "https://www.apple.com/in/apple-creator-studio/images/overview/highlights/pixelmator__ec2adx2gleky_large.jpg",
    image2x: "https://www.apple.com/in/apple-creator-studio/images/overview/highlights/pixelmator__ec2adx2gleky_large_2x.jpg",
  },
  {
    id: "logic-pro",
    tabTitle: "Logic Pro",
    accentText: "Logic Pro",
    accentColor: "#ff9f0a",
    headline: "helps you produce music and perfect audio — bringing brilliance to every beat.",
    image: "https://www.apple.com/v/apple-creator-studio/a/images/overview/highlights/logic_pro__djsdokna5umq_large.jpg",
    image2x: "https://www.apple.com/v/apple-creator-studio/a/images/overview/highlights/logic_pro__djsdokna5umq_large_2x.jpg",
  },
  {
    id: "productivity",
    tabTitle: "Productivity Apps",
    accentText: "",
    accentColor: "#30d158",
    headline: "Intelligent features and premium content amp up productivity in Keynote, Pages, Numbers and Freeform.",
    image: "https://www.apple.com/in/apple-creator-studio/images/overview/highlights/apps__caiq4numczxy_large.jpg",
    image2x: "https://www.apple.com/in/apple-creator-studio/images/overview/highlights/apps__caiq4numczxy_large_2x.jpg",
  },
];

export default function HighlightsSection() {
  // Start on Pixelmator Pro (index 2) exactly matching user's screenshot
  const [currentIndex, setCurrentIndex] = useState(2);
  const [isPlaying, setIsPlaying] = useState(true);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % highlightItems.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <section className="py-20 md:py-28 bg-black text-white overflow-hidden relative select-none">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8 mb-10 sm:mb-14">
        {/* Section Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h2 className="text-4xl sm:text-6xl md:text-[64px] font-semibold tracking-tight text-white leading-[1.08] max-w-2xl">
            Meet your all-star team<br />
            of creative apps.
          </h2>

          {/* "Watch the film" Trigger */}
          <button
            onClick={() => setVideoModalOpen(true)}
            className="inline-flex items-center gap-2 text-[#2997ff] hover:text-[#52aaff] text-base sm:text-lg font-normal transition-colors group self-start md:self-auto"
          >
            <span>Watch the film</span>
            <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center transition-transform group-hover:scale-110">
              <svg className="w-2.5 h-2.5 fill-current ml-0.5" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </button>
        </div>
      </div>

      {/* Peek Carousel / Slider Container with centered active card */}
      <div className="relative w-full overflow-hidden flex flex-col items-center">
        {/* Track containing all cards with exact Apple translation */}
        <div className="w-full flex items-center overflow-x-hidden py-4">
          <div
            className="flex items-center transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
            style={{
              transform: `translateX(calc(50vw - (min(82vw, 980px) / 2) - ${currentIndex} * (min(82vw, 980px) + 24px)))`,
            }}
          >
            {highlightItems.map((item, idx) => {
              const isActive = idx === currentIndex;

              return (
                <div
                  key={item.id}
                  onClick={() => {
                    if (!isActive) {
                      setCurrentIndex(idx);
                      setIsPlaying(false);
                    }
                  }}
                  style={{
                    width: "min(82vw, 980px)",
                  }}
                  className={`shrink-0 mr-6 rounded-[28px] sm:rounded-[36px] bg-[#161617] border border-white/[0.08] overflow-hidden transition-all duration-700 flex flex-col justify-between shadow-2xl h-[520px] sm:h-[600px] md:h-[640px] relative ${
                    isActive
                      ? "opacity-100 scale-100 z-20 cursor-default"
                      : "opacity-40 hover:opacity-60 scale-[0.96] z-10 cursor-pointer"
                  }`}
                >
                  {/* Card Caption / Heading */}
                  <div className="p-7 sm:p-11 md:p-12 z-20 max-w-xl">
                    <p className="text-xl sm:text-2xl md:text-[32px] font-semibold leading-snug text-white tracking-tight">
                      {item.id === "creative-apps" ? (
                        <>
                          Endless creativity. Unlimited possibilities.{" "}
                          <span className="text-white/80 block sm:inline">One suite deal.</span>
                        </>
                      ) : item.id === "productivity" ? (
                        <>
                          Intelligent features and premium content amp up productivity in{" "}
                          <span className="keynote-gradient">Keynote, </span>
                          <span className="pages-gradient">Pages, </span>
                          <span className="numbers-gradient">Numbers </span>
                          and <span className="freeform-gradient">Freeform.</span>
                        </>
                      ) : (
                        <>
                          <span style={{ color: item.accentColor }} className="font-semibold">
                            {item.accentText}
                          </span>{" "}
                          {item.headline}
                        </>
                      )}
                    </p>
                  </div>

                  {/* Device / Artwork Area */}
                  <div className="relative w-full flex-1 flex items-end justify-center px-4 pb-2 sm:pb-6 overflow-hidden">
                    <img
                      src={item.image}
                      srcSet={item.image2x ? `${item.image} 1x, ${item.image2x} 2x` : undefined}
                      alt={item.tabTitle}
                      className="max-h-[340px] sm:max-h-[430px] md:max-h-[460px] w-auto max-w-full object-contain object-bottom filter drop-shadow-2xl select-none pointer-events-none transition-transform duration-700 ease-out"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Floating Capsule Controller (Dots Navigation + Pause/Play) */}
        <div className="relative mt-4 sm:mt-6 z-30 flex items-center justify-center">
          <div className="bg-[#1d1d1f]/90 backdrop-blur-xl border border-white/10 px-4 py-2.5 rounded-full flex items-center gap-4 shadow-2xl">
            {/* Timed Dots Navigation */}
            <div className="flex items-center gap-2">
              {highlightItems.map((item, idx) => {
                const isActive = idx === currentIndex;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setCurrentIndex(idx);
                      setIsPlaying(false);
                    }}
                    className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 ${
                      isActive
                        ? "w-7 sm:w-8 bg-white"
                        : "w-2 sm:w-2.5 bg-white/40 hover:bg-white/70"
                    }`}
                    aria-label={`Slide ${idx + 1}: ${item.tabTitle}`}
                  />
                );
              })}
            </div>

            {/* Subtle Divider */}
            <div className="w-px h-4 bg-white/20" />

            {/* Play/Pause Button */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-7 h-7 rounded-full bg-[#2c2c2e] hover:bg-[#3a3a3c] text-white flex items-center justify-center transition-colors shadow-sm"
              aria-label={isPlaying ? "Pause highlights gallery" : "Play highlights gallery"}
            >
              {isPlaying ? (
                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                  <rect x="6" y="4" width="3.5" height="16" rx="1" />
                  <rect x="14.5" y="4" width="3.5" height="16" rx="1" />
                </svg>
              ) : (
                <svg className="w-3 h-3 fill-current ml-0.5" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
        title="Apple Creator Studio Launch Film"
      />
    </section>
  );
}
