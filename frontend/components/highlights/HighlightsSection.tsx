"use client";

import React, { useState, useEffect } from "react";
import VideoModal from "../ui/VideoModal";

const highlightCards = [
  {
    id: "creative-apps",
    tabTitle: "Apple Creator Studio",
    headline: "Endless creativity. Unlimited possibilities. One suite deal.",
    highlightText: "One suite deal.",
    image: "https://www.apple.com/v/apple-creator-studio/a/images/overview/highlights/creative_apps__bzylnonwi81y_large.jpg",
    appColor: "#ffffff",
  },
  {
    id: "final-cut",
    tabTitle: "Final Cut Pro",
    headline: "gives you smarter, faster ways to craft and cut captivating videos.",
    highlightText: "Final Cut Pro",
    image: "https://www.apple.com/in/apple-creator-studio/images/overview/highlights/final_cut__fe9c0hwz9ca6_large.jpg",
    appColor: "#2997ff",
  },
  {
    id: "pixelmator",
    tabTitle: "Pixelmator Pro",
    headline: "lets everyone edit images and create striking graphics using powerful intelligence.",
    highlightText: "Pixelmator Pro",
    image: "https://www.apple.com/in/apple-creator-studio/images/overview/highlights/pixelmator__ec2adx2gleky_large.jpg",
    appColor: "#ff375f",
  },
  {
    id: "logic-pro",
    tabTitle: "Logic Pro",
    headline: "helps you produce music and perfect audio — bringing brilliance to every beat.",
    highlightText: "Logic Pro",
    image: "https://www.apple.com/v/apple-creator-studio/a/images/overview/highlights/logic_pro__djsdokna5umq_large.jpg",
    appColor: "#ff9f0a",
  },
  {
    id: "productivity",
    tabTitle: "Productivity Apps",
    headline: "Intelligent features and premium content amp up productivity in Keynote, Pages, Numbers and Freeform.",
    highlightText: "Keynote, Pages, Numbers and Freeform",
    image: "https://www.apple.com/in/apple-creator-studio/images/overview/highlights/apps__caiq4numczxy_large.jpg",
    appColor: "#30d158",
  },
];

export default function HighlightsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % highlightCards.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const currentCard = highlightCards[currentIndex];

  return (
    <section className="py-20 bg-black text-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white max-w-xl leading-[1.1]">
            Meet your all-star team of creative&nbsp;apps.
          </h2>

          {/* Watch Film Button */}
          <button
            onClick={() => setVideoModalOpen(true)}
            className="inline-flex items-center gap-2.5 text-[#2997ff] hover:text-[#52aaff] text-base sm:text-lg font-normal transition-colors group self-start md:self-auto"
          >
            <span>Watch the film</span>
            <span className="w-6 h-6 rounded-full bg-[#2997ff]/20 text-[#2997ff] flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg className="w-3.5 h-3.5 fill-current ml-0.5" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </button>
        </div>

        {/* Highlight Card Gallery Showcase */}
        <div className="relative rounded-3xl bg-[#161617] border border-white/[0.08] overflow-hidden shadow-2xl min-h-[500px] sm:min-h-[580px] flex flex-col justify-between">
          {/* Card Top Caption */}
          <div className="p-6 sm:p-10 md:p-12 z-20 max-w-2xl">
            <p className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight text-white">
              {currentCard.id === "creative-apps" ? (
                <>
                  Endless creativity. Unlimited possibilities.{" "}
                  <span className="text-white/80 block sm:inline">One suite deal.</span>
                </>
              ) : currentCard.id === "productivity" ? (
                <>
                  Intelligent features and premium content amp up productivity in{" "}
                  <span className="final-cut-gradient">Keynote, </span>
                  <span className="pages-gradient">Pages, </span>
                  <span className="numbers-gradient">Numbers </span>
                  and <span className="freeform-gradient">Freeform.</span>
                </>
              ) : (
                <>
                  <span style={{ color: currentCard.appColor }} className="font-bold">
                    {currentCard.highlightText}
                  </span>{" "}
                  {currentCard.headline}
                </>
              )}
            </p>
          </div>

          {/* High-res Apple media presentation */}
          <div className="relative w-full h-[320px] sm:h-[400px] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-gradient-to-t from-[#161617] via-transparent to-transparent z-10 pointer-events-none" />
            <img
              key={currentCard.id}
              src={currentCard.image}
              alt={currentCard.tabTitle}
              className="max-h-full max-w-full object-contain filter drop-shadow-2xl transition-all duration-700 animate-fade-in"
              onError={(e) => {
                // Graceful fallback if network blocks external asset
                (e.target as HTMLElement).style.display = "none";
              }}
            />
          </div>

          {/* Bottom Navigation Toolbar: Dots & Play/Pause */}
          <div className="p-4 sm:p-6 bg-black/40 backdrop-blur-md border-t border-white/[0.06] flex items-center justify-between z-20">
            {/* Dots navigation */}
            <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar">
              {highlightCards.map((card, idx) => (
                <button
                  key={card.id}
                  onClick={() => {
                    setCurrentIndex(idx);
                    setIsPlaying(false);
                  }}
                  className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? "w-8 sm:w-10 bg-white"
                      : "w-2 sm:w-2.5 bg-white/30 hover:bg-white/60"
                  }`}
                  aria-label={`Go to slide ${idx + 1}: ${card.tabTitle}`}
                />
              ))}
            </div>

            {/* Play / Pause Toggle Button */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              aria-label={isPlaying ? "Pause highlights gallery" : "Play highlights gallery"}
            >
              {isPlaying ? (
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <rect x="6" y="4" width="4" height="16" rx="1" />
                  <rect x="14" y="4" width="4" height="16" rx="1" />
                </svg>
              ) : (
                <svg className="w-3.5 h-3.5 fill-current ml-0.5" viewBox="0 0 24 24">
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
