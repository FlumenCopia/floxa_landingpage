"use client";

import React, { useState } from "react";

const faqData = [
  {
    q: "How do I download Apple Creator Studio?",
    a: "You can download all the apps included in Apple Creator Studio from the App Store. It comes with Final Cut Pro, Logic Pro and Pixelmator Pro as well as Motion, Compressor, MainStage and other tools. You also get premium content with powerful intelligence in Keynote, Pages, Numbers and Freeform.",
  },
  {
    q: "Which apps are included in Apple Creator Studio?",
    a: "Apple Creator Studio gives subscribers access to a suite of creative apps designed for video, music, and image editing and creation. You can make videos in Final Cut Pro, Motion and Compressor; produce music in Logic Pro and MainStage; and edit photos or graphics in Pixelmator Pro. And while Keynote, Pages, Numbers and Freeform remain free for everyone, an Apple Creator Studio subscription offers premium templates, a library of high-quality, royalty-free photos and graphics, and powerful intelligence features.",
  },
  {
    q: "Can I still use my existing versions of Final Cut Pro, Logic Pro, Pixelmator Pro, MainStage, Motion and Compressor?",
    a: "Yes. If you already own Final Cut Pro, Logic Pro, Pixelmator Pro, MainStage, Motion or Compressor, you can continue using them. These standalone Mac apps are also available for one-time purchase and re-download from the App Store, so you can keep working with the tools you have.",
  },
  {
    q: "Will I still be able to use Keynote, Pages, Numbers and Freeform for free?",
    a: "Yes. You can continue using Keynote, Pages, Numbers and Freeform for free. And while these apps remain free for everyone, an Apple Creator Studio subscription offers premium templates, a library of high-quality, royalty-free photos and graphics, and powerful intelligence features.",
  },
  {
    q: "What happens to projects and content I created if my subscription ends?",
    a: "All the projects and content you create with an active subscription to Apple Creator Studio — including any images you generate or add from the Content Hub — remain licensed in the context of your original creation. Projects in Final Cut Pro, Logic Pro and Pixelmator Pro remain on all your devices, and you can copy or share them to any other device. To open or edit a project, you need to be an active subscriber. Keynote, Pages, Numbers and Freeform documents remain unchanged and can be edited; however, no new edits using paid features will be possible.",
  },
  {
    q: "Which hardware and OS version do I need to use Apple Creator Studio?",
    a: "For the optimal experience, full functionality is available with macOS, iPadOS and iOS and later. Apple Creator Studio requires an Apple Account and internet connection to subscribe. Final Cut Pro requires a Mac with macOS 15.6 or later or an iPad with Apple M1 chip or later. Logic Pro requires macOS 15.6 or later, a Mac with Apple silicon, and an iPad with Apple A12 Bionic chip or later. Pixelmator Pro requires a Mac or an iPad with Apple M1 chip or later. Keynote, Pages and Numbers require macOS 15.6 or later, iPadOS 18 or later, iOS 18 or later.",
  },
  {
    q: "Can I share Apple Creator Studio with my family?",
    a: "Yes, a standard Apple Creator Studio subscription can be shared with up to five other family members using Family Sharing. Educator and student subscriptions are for individual use and cannot be shared through Family Sharing.",
  },
  {
    q: "What are the requirements for using the intelligence features in Apple Creator Studio?",
    a: "Apple Creator Studio includes intelligence features that are exclusive to subscribers. For system requirements and usage limits for Apple Creator Studio intelligence features, see support.apple.com. For additional Apple Intelligence features that may be available, see support.apple.com for geographic and language availability and system requirements.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-black text-white border-t border-white/[0.08]">
      <div className="max-w-[800px] mx-auto px-4">
        <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white mb-12">
          Questions? Answers.
        </h2>

        <div className="divide-y divide-white/10">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="py-6 transition-colors">
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between text-left group"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg sm:text-xl font-medium text-white group-hover:text-neutral-300 transition-colors pr-6">
                    {item.q}
                  </span>
                  <span
                    className={`shrink-0 w-8 h-8 rounded-full bg-white/[0.06] flex items-center justify-center text-white/80 transition-transform duration-300 ${
                      isOpen ? "rotate-45 bg-white/20 text-white" : ""
                    }`}
                  >
                    <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div className="mt-4 pr-10 text-sm sm:text-base text-[#86868b] leading-relaxed animate-fade-in">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
