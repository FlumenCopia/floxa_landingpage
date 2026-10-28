"use client";

import React, { useRef } from "react";
import AppIcon from "../ui/AppIcon";

const productivityCards = [
  {
    title: "Quickly put together presenter notes.",
    desc: "Generate notes for any slide using insights from your entire presentation. They’re added to your existing notes and can be easily fine-tuned with Writing Tools.",
    appAvailability: "Available in Keynote, Pages, Numbers and Freeform",
    image: "https://www.apple.com/v/apple-creator-studio/a/images/overview/productivity/slides__fqpujht4t4mm_large.jpg",
  },
  {
    title: "Advanced image creation and editing.",
    desc: "Make and remix images, illustrations and graphic elements right in your documents. Super Resolution lets you upscale images while preserving details and Auto Crop gives you suggestions for the best look.",
    appAvailability: "Available in Keynote, Pages, Numbers and Freeform",
    image: "https://www.apple.com/v/apple-creator-studio/a/images/overview/productivity/imagery__fomaia2g1yye_large.jpg",
  },
  {
    title: "Get a head start with beautiful templates and themes.",
    desc: "All you need to create everything from event posters to storyboard decks, with multiple layouts and full customisation.",
    appAvailability: "Available in Keynote, Pages and Numbers",
    image: "https://www.apple.com/v/apple-creator-studio/a/images/overview/productivity/templates__dtsfh52oryye_large.jpg",
  },
  {
    title: "Clean up your slides.",
    desc: "Refine and deliver presentation-ready designs with ease. Keynote can automatically correct layout, typography and alignment issues with a single tap or click.",
    appAvailability: "Available in Keynote in beta",
    image: "https://www.apple.com/in/apple-creator-studio/images/overview/productivity/clean_up__bqwo4cyihtea_large.jpg",
  },
  {
    title: "Complete your sheet with Magic Fill.",
    desc: "Get suggested contents or generate formulas for empty cells based on recognised patterns in nearby data.",
    appAvailability: "Available in Numbers",
    image: "https://www.apple.com/v/apple-creator-studio/a/images/overview/productivity/magic_fill__eipdlug12o02_large.jpg",
  },
];

export default function ProductivitySection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const offset = direction === "left" ? -420 : 420;
      scrollContainerRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <section id="visual-productivity" className="py-24 bg-black text-white relative">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Header with 4 productivity app icons */}
        <div className="mb-12 max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <AppIcon name="keynote" size={52} />
            <AppIcon name="pages" size={52} />
            <AppIcon name="numbers" size={52} />
            <AppIcon name="freeform" size={52} />
          </div>

          <h3 className="text-xl sm:text-2xl font-semibold tracking-tight mb-2">
            <span className="keynote-gradient">Keynote, </span>
            <span className="pages-gradient">Pages, </span>
            <span className="numbers-gradient">Numbers, </span>
            <span className="freeform-gradient">Freeform</span>
          </h3>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white mb-6 leading-[1.08]">
            Go from idea to done.<br />
            In a snap.
          </h2>

          <p className="text-lg sm:text-xl text-[#86868b] leading-relaxed mb-6">
            Powerful features that build on Apple&nbsp;Intelligence help you{" "}
            <strong className="text-white font-semibold">
              get more done in Keynote, Pages, Numbers and Freeform.<sup>1</sup>
            </strong>{" "}
            As an Apple Creator Studio subscriber, you get access to a wide range of high-quality content and new AI capabilities to help with your projects.
          </p>
        </div>

        {/* Feature Cards Horizontal Scroll Slider */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-4 pt-2 -mx-4 px-4"
          >
            {productivityCards.map((card, idx) => (
              <div
                key={idx}
                className="w-[320px] sm:w-[400px] md:w-[440px] shrink-0 rounded-3xl bg-[#161617] border border-white/[0.08] overflow-hidden flex flex-col justify-between hover:border-white/20 transition-all duration-300 shadow-xl"
              >
                <div className="p-6 sm:p-8">
                  <h4 className="text-xl sm:text-2xl font-semibold text-white mb-3">
                    {card.title}
                  </h4>
                  <p className="text-sm sm:text-base text-[#86868b] leading-relaxed mb-4">
                    {card.desc}
                  </p>
                  <span className="inline-block text-xs font-medium text-white/50 tracking-wide">
                    {card.appAvailability}
                  </span>
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
              aria-label="Previous Productivity item"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              aria-label="Next Productivity item"
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
