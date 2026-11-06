"use client";

import React, { useState } from "react";

interface SuiteTab {
  id: string;
  shortLabel: string;
  fullLabel: string;
  tagline: string;
  description: string;
  status: "available" | "coming-soon";
  accentColor: string;
  icon: React.ReactNode;
}

const suiteTabs: SuiteTab[] = [
  {
    id: "floxa-design",
    shortLabel: "Floxa for Design",
    fullLabel: "Floxa for Design",
    tagline: "Brand Discovery & Creative Strategy",
    description: "Understand your client's vision, brand personality, goals, and visual direction before design begins.",
    status: "available",
    accentColor: "#00E599",
    icon: (
      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
      </svg>
    ),
  },
  {
    id: "floxa-dm",
    shortLabel: "Floxa for DM",
    fullLabel: "Floxa for Digital Marketing",
    tagline: "Campaigns & Growth Workflows",
    description: "Multi-channel marketing campaigns, brand asset distribution, social strategy, and growth analytics.",
    status: "coming-soon",
    accentColor: "#F472B6",
    icon: (
      <svg className="w-3.5 h-3.5 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
  },
  {
    id: "floxa-work",
    shortLabel: "Floxa for Work",
    fullLabel: "Floxa for Work",
    tagline: "Collaborative Team Workspace",
    description: "Team collaboration, project milestone tracking, client presentation decks, and approval workflows.",
    status: "coming-soon",
    accentColor: "#818CF8",
    icon: (
      <svg className="w-3.5 h-3.5 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
      </svg>
    ),
  },
  {
    id: "floxa-it",
    shortLabel: "Floxa for IT",
    fullLabel: "Floxa for IT",
    tagline: "Developer APIs & Infrastructure",
    description: "Design-to-code pipelines, headless brand asset APIs, enterprise SSO, and developer tooling.",
    status: "coming-soon",
    accentColor: "#38BDF8",
    icon: (
      <svg className="w-3.5 h-3.5 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    id: "floxa-learning",
    shortLabel: "Floxa for Learning",
    fullLabel: "Floxa for Learning",
    tagline: "Brand Academy & Skill Building",
    description: "Masterclasses in brand discovery, creative frameworks, client management, and verified certification.",
    status: "coming-soon",
    accentColor: "#FBBF24",
    icon: (
      <svg className="w-3.5 h-3.5 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
  },
];

const projects = [
  {
    id: "brand-identity",
    title: "Brand Identity",
    status: "In Progress",
    statusColor: "text-[#00E599]",
    statusBg: "bg-[#00E599]/15 border-[#00E599]/30",
    image: "/images/floxa_screens/fluid_silk_clean.png",
    category: "Identity & Visual Strategy",
  },
  {
    id: "website-redesign",
    title: "Website Redesign",
    status: "Review Pending",
    statusColor: "text-[#FBBF24]",
    statusBg: "bg-[#FBBF24]/15 border-[#FBBF24]/30",
    image: "/images/productivity/imagery__fomaia2g1yye_large.jpg",
    category: "UX/UI Architecture",
  },
  {
    id: "product-branding",
    title: "Product Branding",
    status: "Completed",
    statusColor: "text-[#34D399]",
    statusBg: "bg-[#34D399]/15 border-[#34D399]/30",
    image: "/images/floxa_screens/ai_suite_clean.png",
    category: "Packaging & 3D Assets",
  },
];

export default function FrontTabCard() {
  const [activeTabId, setActiveTabId] = useState<string>("floxa-design");

  const activeSuite = suiteTabs.find((s) => s.id === activeTabId) || suiteTabs[0];

  return (
    <div className="relative w-full max-w-[700px] lg:max-w-[740px] mx-auto select-none group">
      {/* Luminous Green Glow Behind the Front Tab Frame */}
      <div className="absolute -inset-2 bg-gradient-to-r from-[#00E599]/40 via-[#00B377]/25 to-[#00E599]/35 rounded-[28px] sm:rounded-[34px] blur-xl sm:blur-2xl opacity-80 group-hover:opacity-100 transition duration-700 pointer-events-none" />

      {/* 3D Floating Tablet/Monitor Chassis matching Reference Photo */}
      <div
        className="relative rounded-[22px] xs:rounded-[26px] sm:rounded-[30px] p-1.5 xs:p-2 sm:p-2.5 bg-gradient-to-b from-[#0B251A] via-[#05170F] to-[#020A06] border border-[#00E599]/50 shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_35px_rgba(0,229,153,0.22)] transition-all duration-700 ease-out sm:[transform:perspective(1400px)_rotateY(-6deg)_rotateX(4deg)] sm:hover:[transform:perspective(1400px)_rotateY(0deg)_rotateX(0deg)]"
      >
        {/* Inner Screen Surface */}
        <div className="relative rounded-[18px] xs:rounded-[20px] sm:rounded-[24px] bg-[#030D08] border border-white/[0.08] overflow-hidden flex flex-col">
          {/* Top Window Navigation Bar with FLOXA Brand + Search */}
          <div className="h-10 sm:h-12 px-2.5 sm:px-4 bg-[#05170F]/90 border-b border-white/[0.08] flex items-center justify-between gap-2 sm:gap-3">
            {/* Left: FLOXA Logo */}
            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              <span className="font-pavelt text-white text-xs sm:text-base tracking-wider font-bold">
                FLOXA
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E599] shadow-[0_0_6px_#00E599]" />
            </div>

            {/* Center: Search Bar */}
            <div className="flex-1 max-w-[170px] xs:max-w-[220px] sm:max-w-[280px]">
              <div className="w-full h-6 sm:h-8 px-2 sm:px-3 rounded-full bg-white/[0.06] border border-white/[0.1] flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-[11px] text-slate-400">
                <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span className="truncate">Search {activeSuite.shortLabel.replace("Floxa for ", "")}...</span>
              </div>
            </div>

            {/* Right: User / Status Indicator */}
            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              <span className="hidden md:inline-block text-[10px] font-semibold text-[#00E599] bg-[#00E599]/10 border border-[#00E599]/25 px-2 py-0.5 rounded-full">
                Active
              </span>
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-tr from-[#00E599] to-[#00B377] text-[#03140C] font-bold text-[9px] sm:text-[10px] flex items-center justify-center">
                FX
              </div>
            </div>
          </div>

          {/* Top Small Tabs Strip inside the Screen */}
          <div className="px-2 sm:px-3 py-1.5 bg-[#020A06] border-b border-white/[0.08] flex items-center gap-1 sm:gap-2 overflow-x-auto no-scrollbar touch-pan-x">
            {suiteTabs.map((tab) => {
              const isActive = activeTabId === tab.id;
              const isAvailable = tab.status === "available";

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTabId(tab.id)}
                  className={`flex items-center gap-1.5 px-2 sm:px-3 py-1 rounded-full text-[9.5px] sm:text-[11px] font-medium whitespace-nowrap transition-all cursor-pointer shrink-0 ${
                    isActive
                      ? "bg-[#00E599] text-[#03140C] font-semibold shadow-[0_0_12px_rgba(0,229,153,0.4)]"
                      : "bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/[0.08]"
                  }`}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full shrink-0"
                    style={{
                      backgroundColor: isActive ? "#03140C" : tab.accentColor,
                    }}
                  />
                  <span>{tab.shortLabel}</span>

                  {!isAvailable && (
                    <span
                      className={`text-[8px] sm:text-[8.5px] uppercase tracking-wider px-1 sm:px-1.5 py-0.2 rounded font-semibold ${
                        isActive
                          ? "bg-[#03140C]/20 text-[#03140C]"
                          : "bg-white/[0.08] text-[#00E599] border border-[#00E599]/30"
                      }`}
                    >
                      Soon
                    </span>
                  )}

                  {isAvailable && (
                    <span
                      className={`text-[8px] sm:text-[8.5px] uppercase tracking-wider px-1 sm:px-1.5 py-0.2 rounded font-semibold ${
                        isActive
                          ? "bg-[#03140C]/20 text-[#03140C]"
                          : "bg-[#00E599]/15 text-[#00E599]"
                      }`}
                    >
                      Live
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Main App Workspace: Collapsible Responsive Sidebar + Dynamic Panel */}
          <div className="flex min-h-[280px] xs:min-h-[300px] sm:min-h-[350px]">
            {/* Left Sidebar: Icon-Rail on mobile (< sm), expanding to full width on tablet/desktop (>= sm) */}
            <div className="w-10 xs:w-11 sm:w-[155px] p-1.5 sm:p-2.5 bg-[#030E09]/80 border-r border-white/[0.06] flex flex-col justify-between shrink-0">
              <div className="space-y-1">
                <div className="hidden sm:block px-2 py-1 text-[9px] font-semibold uppercase tracking-wider text-slate-500">
                  Suites
                </div>
                {suiteTabs.map((tab) => {
                  const isActive = activeTabId === tab.id;
                  const isAvailable = tab.status === "available";

                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTabId(tab.id)}
                      title={tab.shortLabel}
                      className={`w-full flex items-center justify-center sm:justify-between p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg text-[10px] sm:text-[11px] font-medium transition-all text-left cursor-pointer ${
                        isActive
                          ? "bg-[#00E599] text-[#03140C] font-semibold shadow-[0_0_12px_rgba(0,229,153,0.35)]"
                          : "text-slate-400 hover:text-white hover:bg-white/[0.05]"
                      }`}
                    >
                      <div className="flex items-center gap-1.5 truncate">
                        <span className={isActive ? "text-[#03140C]" : "text-slate-400"}>
                          {tab.icon}
                        </span>
                        <span className="hidden sm:inline truncate">{tab.shortLabel.replace("Floxa for ", "")}</span>
                      </div>

                      <div className="hidden sm:flex items-center">
                        {!isAvailable ? (
                          <span
                            className={`text-[7.5px] px-1 py-0.2 rounded uppercase font-semibold shrink-0 ml-1 ${
                              isActive
                                ? "bg-[#03140C]/20 text-[#03140C]"
                                : "bg-white/[0.06] text-[#00E599]"
                            }`}
                          >
                            Soon
                          </span>
                        ) : (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00E599] animate-pulse shrink-0 ml-1" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Bottom Cloud Status */}
              <div className="pt-2 border-t border-white/[0.06] flex items-center justify-center sm:justify-start px-0.5 sm:px-1">
                <div className="flex items-center gap-1.5 text-[9px] text-slate-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00E599]" />
                  <span className="hidden sm:inline">FLOXA Core v2.4</span>
                </div>
              </div>
            </div>

            {/* Right Panel: Dynamic Content based on selected Tab */}
            <div className="flex-1 p-2.5 xs:p-3 sm:p-4 flex flex-col justify-between overflow-hidden">
              {/* If "Floxa for Design" is active -> Show Live Project Showcase */}
              {activeTabId === "floxa-design" ? (
                <>
                  {/* Header Row */}
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <h3 className="text-white font-bold text-xs sm:text-sm tracking-tight">
                        Your Projects
                      </h3>
                      <span className="text-[9px] sm:text-[10px] px-1.5 py-0.2 rounded-full bg-white/[0.08] text-slate-300">
                        3 Active
                      </span>
                    </div>

                    <a
                      href="#highlights"
                      className="text-[10px] sm:text-[11px] font-medium text-[#00E599] hover:underline flex items-center gap-1"
                    >
                      <span>View all</span>
                      <span>→</span>
                    </a>
                  </div>

                  {/* 3 Project Showing Cards: Mobile horizontal layout, desktop vertical cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 flex-1 items-stretch">
                    {projects.map((proj) => (
                      <div
                        key={proj.id}
                        className="group/card rounded-xl sm:rounded-2xl bg-[#061810]/90 border border-white/[0.08] hover:border-[#00E599]/50 overflow-hidden flex flex-row sm:flex-col items-center sm:items-stretch transition-all duration-300 hover:shadow-[0_8px_20px_rgba(0,0,0,0.6)]"
                      >
                        {/* Project Thumbnail Image */}
                        <div className="relative w-[72px] xs:w-[84px] sm:w-full h-14 xs:h-16 sm:h-auto sm:aspect-[4/3] bg-[#020A06] overflow-hidden shrink-0 flex items-center justify-center">
                          <img
                            src={proj.image}
                            alt={proj.title}
                            className="w-full h-full object-cover object-center group-hover/card:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#061810] via-transparent to-transparent opacity-80" />
                        </div>

                        {/* Card Meta & Status */}
                        <div className="p-2 sm:p-2.5 flex flex-col justify-between flex-1 min-w-0">
                          <div>
                            <h4 className="text-white font-semibold text-[11px] sm:text-xs truncate">
                              {proj.title}
                            </h4>
                            <p className="text-[9px] text-slate-400 truncate">
                              {proj.category}
                            </p>
                          </div>

                          <div className="mt-1 sm:mt-2 flex items-center justify-between">
                            <span
                              className={`text-[8px] sm:text-[9px] font-medium px-1.5 sm:px-2 py-0.5 rounded-full border ${proj.statusBg} ${proj.statusColor}`}
                            >
                              {proj.status}
                            </span>
                            <span className="text-[9px] sm:text-[10px] text-slate-500 hidden xs:inline">
                              Updated
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Bottom Quick Action Strip inside Front Tab */}
                  <div className="mt-2.5 sm:mt-3 pt-2 border-t border-white/[0.06] flex items-center justify-between text-[9px] sm:text-[10px] text-slate-400">
                    <span className="flex items-center gap-1.5 truncate">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00E599] animate-pulse shrink-0" />
                      <span className="truncate">Synced with FLOXA Cloud</span>
                    </span>
                    <span className="text-[#00E599] font-medium shrink-0 ml-2">3 connected</span>
                  </div>
                </>
              ) : (
                /* Coming Soon View for Floxa for DM, Work, IT, Learning */
                <div className="flex-1 flex flex-col items-center justify-center text-center p-3 sm:p-6 rounded-2xl bg-[#061810]/60 border border-white/[0.06] relative overflow-hidden">
                  <div
                    className="absolute w-44 sm:w-48 h-44 sm:h-48 rounded-full blur-3xl pointer-events-none opacity-20"
                    style={{ backgroundColor: activeSuite.accentColor }}
                  />

                  {/* Icon Badge */}
                  <div
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center mb-2 sm:mb-3 shadow-lg border shrink-0"
                    style={{
                      backgroundColor: `${activeSuite.accentColor}15`,
                      borderColor: `${activeSuite.accentColor}35`,
                      color: activeSuite.accentColor,
                    }}
                  >
                    {activeSuite.icon}
                  </div>

                  <h3 className="text-white font-bold text-xs sm:text-base mb-0.5 sm:mb-1">
                    {activeSuite.fullLabel}
                  </h3>
                  <p
                    className="text-[11px] sm:text-xs font-semibold mb-2 truncate max-w-xs"
                    style={{ color: activeSuite.accentColor }}
                  >
                    {activeSuite.tagline}
                  </p>

                  <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white/[0.08] border border-white/[0.15] mb-2 sm:mb-3 shadow-md">
                    <span
                      className="w-1.5 h-1.5 rounded-full animate-ping"
                      style={{ backgroundColor: activeSuite.accentColor }}
                    />
                    <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-white">
                      Coming Soon
                    </span>
                  </div>

                  <p className="text-[10px] sm:text-xs text-slate-400 max-w-sm mb-3 leading-relaxed line-clamp-2 sm:line-clamp-none">
                    {activeSuite.description}
                  </p>

                  <button
                    onClick={() => setActiveTabId("floxa-design")}
                    className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-semibold text-[#00E599] hover:underline cursor-pointer"
                  >
                    <span>← Switch back to Floxa for Design (Live)</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
