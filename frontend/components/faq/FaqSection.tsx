"use client";

import React, { useState } from "react";

const faqData = [
  {
    q: "What is FLOXA?",
    a: "FLOXA by FlumenX is a brand discovery platform designed for freelance brand identity designers, branding studios, and creative professionals. It provides a structured discovery workflow to help designers understand client vision, brand personality, goals, and visual direction before design begins.",
  },
  {
    q: "Why is brand discovery necessary before design?",
    a: "Starting a project without understanding the brand leads to unclear briefs, scattered inspiration, mismatched expectations, and unnecessary revision cycles. FLOXA puts discovery at the beginning of the process, ensuring client and designer share a clear creative direction from day one.",
  },
  {
    q: "How do clients interact with FLOXA?",
    a: "You create a project and share a personalized discovery link. Clients walk through an intuitive, guided experience to communicate their vision, preferences, brand values, and expectations seamlessly across any device.",
  },
  {
    q: "What kind of insights does FLOXA gather?",
    a: "FLOXA gathers structured insights about brand personality, target audience, business goals, competitor differentiation, aesthetic preferences, and creative expectations.",
  },
  {
    q: "Who is FLOXA made for?",
    a: "FLOXA is made for independent freelance brand identity designers, branding studios, creative agencies, and brand consultants who want to bring more clarity and structure to their client engagements.",
  },
  {
    q: "How does FLOXA fit into my existing design workflow?",
    a: "FLOXA operates at Step Zero. The insights collected during brand discovery provide a validated foundation and clear creative brief before you open Figma, Illustrator, or your sketchbook.",
  },
  {
    q: "How do I get started with FLOXA?",
    a: "You can get started immediately by visiting floxa.flumenx.in. Set up your first project, share the discovery link with your client, and start your creative work with clarity.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="pt-6 pb-10 sm:pt-10 sm:pb-14 md:pt-14 md:pb-16 bg-[#020806] text-[#e8f5ef] border-t border-[#4dffa0]/15 relative">
      <div className="max-w-[980px] mx-auto px-6 sm:px-8">
        {/* Eyebrow in Rose Gold */}
        <div className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#e0a899] mb-2 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#e0a899]" />
          Common Inquiries
        </div>

        <h2 className="text-2xl sm:text-4xl md:text-[44px] font-semibold tracking-tight text-[#e8f5ef] mb-6 sm:mb-8">
          Questions? <span className="rosegold-gradient-text">Answers.</span>
        </h2>

        <div className="w-full">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="border-b border-[#4dffa0]/15">
                <button
                  onClick={() => toggle(idx)}
                  className="w-full py-6 sm:py-7 flex items-center justify-between text-left group cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className={`text-base sm:text-lg md:text-[21px] font-semibold tracking-tight pr-4 sm:pr-8 leading-snug transition-colors ${
                    isOpen ? "text-[#e0a899]" : "text-[#e8f5ef] group-hover:text-[#e0a899]"
                  }`}>
                    {item.q}
                  </span>
                  <svg
                    className={`w-5 h-5 sm:w-6 sm:h-6 text-[#89aca0] shrink-0 transition-transform duration-300 ease-out group-hover:text-[#e0a899] ${
                      isOpen ? "rotate-180 text-[#e0a899]" : ""
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
                  <p className="text-[15px] sm:text-[17px] md:text-[18px] text-[#89aca0] leading-relaxed pr-2 sm:pr-10">
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
