"use client";

import React, { useRef } from "react";
import AppIcon from "../ui/AppIcon";

const productivityCards = [
  {
    title: "Quickly put together presenter notes.",
    desc: "Generate notes for any slide using insights from your entire presentation. They’re added to your existing notes and can be easily fine-tuned with Writing Tools.",
    appAvailability: "Available in Keynote, Pages, Numbers and Freeform",
    image: "/images/productivity/slides__fqpujht4t4mm_large.jpg",
  },
  {
    title: "Advanced image creation and editing.",
    desc: "Make and remix images, illustrations and graphic elements right in your documents. Super Resolution lets you upscale images while preserving details and Auto Crop gives you suggestions for the best look.",
    footnote: "1",
    appAvailability: "Available in Keynote, Pages, Numbers and Freeform",
    image: "/images/productivity/imagery__fomaia2g1yye_large.jpg",
  },
  {
    title: "Get a head start with beautiful templates and themes.",
    desc: "All you need to create everything from event posters to storyboard decks, with multiple layouts and full customisation.",
    appAvailability: "Available in Keynote, Pages and Numbers",
    image: "/images/productivity/templates__dtsfh52oryye_large.jpg",
  },
  {
    title: "Clean up your slides.",
    desc: "Refine and deliver presentation-ready designs with ease. Keynote can automatically correct layout, typography and alignment issues with a single tap or click.",
    appAvailability: "Available in Keynote in beta",
    image: "/images/productivity/clean_up__bqwo4cyihtea_large.jpg",
  },
  {
    title: "Complete your sheet with Magic Fill.",
    desc: "Get suggested contents or generate formulas for empty cells based on recognised patterns in nearby data.",
    appAvailability: "Available in Numbers",
    image: "/images/productivity/magic_fill__eipdlug12o02_large.jpg",
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
    <section id="visual-productivity" className="py-20 md:py-28 bg-black text-white relative select-none">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        {/* Cinematic Hero Visual Banner */}
        <div className="relative w-full max-w-[1268px] mx-auto mb-16 sm:mb-20 flex items-center justify-center">
          <img
            src="/images/productivity/hero__d78ra8ka1sa6_large.jpg"
            srcSet="
              /images/productivity/hero__d78ra8ka1sa6_medium_2x.jpg 1068w,
              /images/productivity/hero__d78ra8ka1sa6_large_2x.jpg 1440w
            "
            sizes="(max-width: 1068px) 100vw, 1268px"
            alt="iPad Pro 13, iPhone 16, and MacBook Pro showcasing Keynote, Pages, Numbers, and Freeform"
            className="w-full h-auto object-contain select-none pointer-events-none"
          />
        </div>

        {/* Header with productivity apps */}
        <div className="mb-14 sm:mb-16 max-w-2xl">
          {/* App Icons (Commented out)
          <div className="flex items-center gap-3 mb-4">
            <AppIcon name="keynote" size={48} />
            <AppIcon name="pages" size={48} />
            <AppIcon name="numbers" size={48} />
            <AppIcon name="freeform" size={48} />
          </div>
          */}


            <span className="keynote-gradient">Keynote, </span>
            <span className="pages-gradient">Pages, </span>
            <span className="numbers-gradient">Numbers, </span>
            <span className="freeform-gradient">Freeform</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-[68px] font-semibold tracking-tight text-white mb-6 leading-[1.06]">
            Go from idea to done.<br />
            In a snap.
          </h2>

          <p className="text-base sm:text-lg md:text-[19px] text-[#a1a1a6] leading-relaxed mb-6 font-normal">
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
            className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-4 pt-2 -mx-6 px-6"
          >
            {productivityCards.map((card, idx) => (
              <div
                key={idx}
                className="w-[84vw] sm:w-[580px] md:w-[640px] shrink-0 flex flex-col group"
              >
                {/* Big Rounded Media Tile Card */}
                <div className="relative w-full h-[320px] sm:h-[400px] md:h-[420px] rounded-[24px] sm:rounded-[28px] bg-[#161617] border border-white/[0.08] overflow-hidden flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:border-white/15">
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
                <div className="mt-5 px-1 max-w-[620px]">
                  <p className="text-sm sm:text-[15px] md:text-base text-[#a1a1a6] leading-relaxed font-normal mb-1">
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
                  <span className="text-xs text-white/40 font-medium">
                    {card.appAvailability}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Paddle Navigation Buttons */}
          <div className="flex items-center justify-end gap-3 mt-6">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors shadow-sm"
              aria-label="Previous Productivity item"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors shadow-sm"
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
