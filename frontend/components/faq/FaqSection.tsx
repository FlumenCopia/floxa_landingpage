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
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
        <section
          id="faq"
          className="pt-12 pb-16 sm:pt-16 sm:pb-20 md:pt-20 md:pb-24 bg-[#F8FAFB] text-[#0A130E] border-t border-[#E2ECE6] relative z-20 select-none"
        >
          <div className="max-w-[980px] mx-auto px-5 sm:px-8 relative z-20">
            {/* Eyebrow in Floxa Emerald */}
            <div className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#00B377] mb-2">
              Common Inquiries
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-[44px] font-bold tracking-tight text-[#0A130E] mb-8 sm:mb-10">
              Questions? <span className="text-[#00B377]">Answers.</span>
            </h2>

              <div className="w-full divide-y divide-[#E2ECE6]">
                {faqData.map((item, idx) => {
                  const isOpen = openIndex === idx;

                  return (
                      <div key={idx} className="relative z-10">
                        <button
                          type="button"
                          onClick={() => toggle(idx)}
                          className="w-full py-5 sm:py-6 flex items-center justify-between text-left group cursor-pointer focus:outline-none touch-manipulation transition-colors duration-150 active:opacity-70"
                          aria-expanded={isOpen}
                        >
                            <span
                              className={`text-base sm:text-lg md:text-[20px] font-semibold tracking-tight pr-4 sm:pr-8 leading-snug transition-colors duration-200 ${isOpen
                                  ? "text-[#00B377]"
                                  : "text-[#0A130E] group-hover:text-[#00B377]"
                                }`}
                            >
                              {item.q}
                            </span>
                                  < div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen
                                  ? "bg-[#E6FBF2] text-[#00B377] rotate-180"
                                  : "bg-slate-100 text-slate-400 group-hover:text-[#00B377] group-hover:bg-[#E6FBF2]"
                                }`}
                            >
                            <svg
                              className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-current"
                              viewBox="0 0 24 24"
                              fill="none"
                              strokeWidth="2.4"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polyline points="6 9 12 15 18 9" />
                            </svg>
                          </div>
                        </button>

                        {/* Animated Accordion Drawer using direct inline height styles */}
                        <div
                          className="overflow-hidden transition-all duration-300 ease-in-out"
                          style={{
                            maxHeight: isOpen ? "800px" : "0px",
                            opacity: isOpen ? 1 : 0,
                            paddingBottom: isOpen ? "1.5rem" : "0px",
                          }}
                        >
                            <p className="text-[14px] sm:text-[16px] text-[#526058] leading-relaxed pr-2 sm:pr-10 select-text">
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
