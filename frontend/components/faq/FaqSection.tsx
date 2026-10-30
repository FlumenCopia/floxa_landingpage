"use client";

import React, { useState } from "react";

const faqData = [
  {
    q: "How do I download Floxa?",
    a: "You can download all the apps included in Floxa from the App Store. It comes with Final Cut Pro, Logic Pro and Pixelmator Pro as well as Motion, Compressor, MainStage and other tools. You also get premium content with powerful intelligence in Keynote, Pages, Numbers and Freeform.",
  },
  {
    q: "Which apps are included in Floxa?",
    a: "Floxa gives subscribers access to a suite of creative apps designed for video, music, and image editing and creation. You can make videos in Final Cut Pro, Motion and Compressor; produce music in Logic Pro and MainStage; and edit photos or graphics in Pixelmator Pro. And while Keynote, Pages, Numbers and Freeform remain free for everyone, a Floxa subscription offers premium templates, a library of high-quality, royalty-free photos and graphics, and powerful intelligence features.",
  },
  {
    q: "Can I still use my existing versions of Final Cut Pro, Logic Pro, Pixelmator Pro, MainStage, Motion and Compressor?",
    a: "Yes. If you already own Final Cut Pro, Logic Pro, Pixelmator Pro, MainStage, Motion or Compressor, you can continue using them. These standalone Mac apps are also available for one-time purchase and re-download from the App Store, so you can keep working with the tools you have.",
  },
  {
    q: "Will I still be able to use Keynote, Pages, Numbers and Freeform for free?",
    a: "Yes. You can continue using Keynote, Pages, Numbers and Freeform for free. And while these apps remain free for everyone, a Floxa subscription offers premium templates, a library of high-quality, royalty-free photos and graphics, and powerful intelligence features.",
  },
  {
    q: "What happens to projects and content I created if my subscription ends?",
    a: "All the projects and content you create with an active subscription to Floxa — including any images you generate or add from the Content Hub — remain licensed in the context of your original creation. Projects in Final Cut Pro, Logic Pro and Pixelmator Pro remain on all your devices, and you can copy or share them to any other device. To open or edit a project, you need to be an active subscriber. Keynote, Pages, Numbers and Freeform documents remain unchanged and can be edited; however, no new edits using paid features will be possible.",
  },
  {
    q: "Which hardware and OS version do I need to use Floxa?",
    a: "For the optimal experience, full functionality is available with macOS, iPadOS and iOS and later. Floxa requires an Apple Account and internet connection to subscribe. Final Cut Pro requires a Mac with macOS 15.6 or later or an iPad with Apple M1 chip or later. Logic Pro requires macOS 15.6 or later, a Mac with Apple silicon, and an iPad with Apple A12 Bionic chip or later. Pixelmator Pro requires a Mac or an iPad with Apple M1 chip or later. Keynote, Pages and Numbers require macOS 15.6 or later, iPadOS 18 or later, iOS 18 or later.",
  },
  {
    q: "Can I share Floxa with my family?",
    a: "Yes, a standard Floxa subscription can be shared with up to five other family members using Family Sharing. Educator and student subscriptions are for individual use and cannot be shared through Family Sharing.",
  },
  {
    q: "What are the requirements for using the intelligence features in Floxa?",
    a: "Floxa includes intelligence features that are exclusive to subscribers. For system requirements and usage limits for Floxa intelligence features, see support.apple.com. For additional Apple Intelligence features that may be available, see support.apple.com for geographic and language availability and system requirements.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 sm:py-32 bg-black text-white border-t border-white/[0.08]">
      <div className="max-w-[980px] mx-auto px-6 sm:px-8">
        <h2 className="text-4xl sm:text-5xl md:text-[56px] lg:text-[64px] font-bold tracking-tight text-white mb-12 sm:mb-16">
          Questions? Answers.
        </h2>

        <div className="w-full">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="border-b border-[#333336]">
                <button
                  onClick={() => toggle(idx)}
                  className="w-full py-6 sm:py-8 flex items-center justify-between text-left group cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-[19px] sm:text-[22px] md:text-[25px] font-semibold text-white tracking-tight pr-6 sm:pr-8 leading-snug group-hover:text-neutral-200 transition-colors">
                    {item.q}
                  </span>
                  <svg
                    className={`w-5 h-5 sm:w-6 sm:h-6 text-[#86868b] shrink-0 transition-transform duration-300 ease-out group-hover:text-white ${
                      isOpen ? "rotate-180 text-white" : ""
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-out ${
                    isOpen ? "max-h-[600px] opacity-100 pb-7" : "max-h-0 opacity-0 pb-0"
                  }`}
                >
                  <p className="text-[16px] sm:text-[18px] md:text-[19px] text-[#a1a1a6] leading-relaxed pr-6 sm:pr-14">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

