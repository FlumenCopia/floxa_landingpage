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
}

const suiteTabs: SuiteTab[] = [
  {
    id: "floxa-design",
    shortLabel: "Floxa for Design",
    fullLabel: "Floxa for Design",
    tagline: "Brand Discovery & Creative Strategy",
    description: "Understand your client's vision, brand personality, goals, and visual direction before design begins.",
    status: "available",
    accentColor: "#00B377",
  },
  {
    id: "floxa-dm",
    shortLabel: "Floxa for DM",
    fullLabel: "Floxa for Digital Marketing",
    tagline: "Campaigns & Growth Workflows",
    description: "Multi-channel marketing campaigns, brand asset distribution, social strategy, and growth analytics.",
    status: "coming-soon",
    accentColor: "#F472B6",
  },
  {
    id: "floxa-work",
    shortLabel: "Floxa for Work",
    fullLabel: "Floxa for Work",
    tagline: "Collaborative Team Workspace",
    description: "Team collaboration, project milestone tracking, client presentation decks, and approval workflows.",
    status: "coming-soon",
    accentColor: "#818CF8",
  },
  {
    id: "floxa-it",
    shortLabel: "Floxa for IT",
    fullLabel: "Floxa for IT",
    tagline: "Developer APIs & Infrastructure",
    description: "Design-to-code pipelines, headless brand asset APIs, enterprise SSO, and developer tooling.",
    status: "coming-soon",
    accentColor: "#38BDF8",
  },
  {
    id: "floxa-learning",
    shortLabel: "Floxa for Learning",
    fullLabel: "Floxa for Learning",
    tagline: "Brand Academy & Skill Building",
    description: "Masterclasses in brand discovery, creative frameworks, client management, and verified certification.",
    status: "coming-soon",
    accentColor: "#FBBF24",
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
      {/* Smooth Ambient Glow Behind the Front Tab Frame */}
      <div className="absolute -inset-2 bg-gradient-to-r from-[#00B377]/25 via-[#009E66]/15 to-[#00B377]/20 rounded-[28px] sm:rounded-[34px] blur-xl sm:blur-2xl opacity-75 group-hover:opacity-100 transition duration-700 pointer-events-none" />

      {/* 3D Floating Tablet/Monitor Chassis matching Reference Photo */}
      <div
        className="relative rounded-[22px] xs:rounded-[26px] sm:rounded-[30px] p-1.5 xs:p-2 sm:p-2.5 bg-gradient-to-b from-[#0B251A] via-[#05170F] to-[#020A06] border border-[#00B377]/35 shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_24px_rgba(0,179,119,0.12)] transition-all duration-700 ease-out sm:[transform:perspective(1400px)_rotateY(-6deg)_rotateX(4deg)] sm:hover:[transform:perspective(1400px)_rotateY(0deg)_rotateX(0deg)]"
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
              <span className="w-1.5 h-1.5 rounded-full bg-[#00B377] shadow-[0_0_4px_#00B377]" />
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
                <span className="hidden md:inline-block text-[10px] font-semibold text-[#00B377] bg-[#00B377]/10 border border-[#00B377]/25 px-2 py-0.5 rounded-full">
                  Active
                </span>
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-tr from-[#00B377] to-[#009E66] text-white font-bold text-[9px] sm:text-[10px] flex items-center justify-center">
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
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-medium whitespace-nowrap transition-all cursor-pointer shrink-0 ${isActive
                          ? "bg-[#00B377] text-white font-medium shadow-[0_2px_8px_rgba(0,179,119,0.25)]"
                          : "bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/[0.08]"
                  }`}
                  >
                    <span>{tab.shortLabel}</span>

                    {!isAvailable && (
                      <span
                        className={`text-[8px] sm:text-[8.5px] uppercase tracking-wider px-1.5 py-0.2 rounded font-semibold ${isActive
                              ? "bg-black/20 text-white"
                              : "bg-white/[0.08] text-[#00B377] border border-[#00B377]/30"
                          }`}
                      >
                        Soon
                      </span>
                    )}

                    {isAvailable && (
                      <span
                        className={`text-[8px] sm:text-[8.5px] uppercase tracking-wider px-1.5 py-0.2 rounded font-semibold ${isActive
                              ? "bg-black/20 text-white"
                              : "bg-[#00B377]/15 text-[#00B377]"
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
              {/* Left Sidebar: Clean suite labels on mobile and desktop */}
              <div className="w-16 xs:w-20 sm:w-[155px] p-1.5 sm:p-2.5 bg-[#030E09]/80 border-r border-white/[0.06] flex flex-col justify-between shrink-0">
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
                        className={`w-full flex items-center justify-between px-2 py-1.5 sm:px-2.5 sm:py-1.5 rounded-lg text-[10px] sm:text-[11px] font-medium transition-all text-left cursor-pointer ${isActive
                              ? "bg-[#00B377] text-white font-medium shadow-[0_2px_8px_rgba(0,179,119,0.25)]"
                              : "text-slate-400 hover:text-white hover:bg-white/[0.05]"
                      }`}
                      >
                        <span className="truncate">{tab.shortLabel.replace("Floxa for ", "")}</span>

                        <div className="hidden sm:flex items-center">
                          {!isAvailable ? (
                            <span
                              className={`text-[7.5px] px-1 py-0.2 rounded uppercase font-semibold shrink-0 ml-1 ${isActive
                                    ? "bg-black/20 text-white"
                                    : "bg-white/[0.06] text-[#00B377]"
                                }`}
                            >
                              Soon
                            </span>
                          ) : (
                            <span
                              className={`text-[7.5px] px-1 py-0.2 rounded uppercase font-semibold shrink-0 ml-1 ${isActive
                                    ? "bg-black/20 text-white"
                                    : "bg-[#00B377]/20 text-[#00B377]"
                                }`}
                            >
                              Live
                            </span>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Bottom Cloud Status */}
                <div className="pt-2 border-t border-white/[0.06] flex items-center justify-center sm:justify-start px-0.5 sm:px-1">
                  <div className="flex items-center gap-1.5 text-[9px] text-slate-400">
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
                        className="text-[10px] sm:text-[11px] font-medium text-[#00B377] hover:underline flex items-center gap-1"
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
                          className="group/card rounded-xl sm:rounded-2xl bg-[#061810]/90 border border-white/[0.08] hover:border-[#00B377]/50 overflow-hidden flex flex-row sm:flex-col items-center sm:items-stretch transition-all duration-300 hover:shadow-[0_8px_20px_rgba(0,0,0,0.6)]"
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
                      <span className="truncate">Synced with FLOXA Cloud</span>
                      <span className="text-[#00B377] font-medium shrink-0 ml-2">3 connected</span>
                    </div>
                  </>
                ) : (
                  /* Coming Soon View for Floxa for DM, Work, IT, Learning */
                  <div className="flex-1 flex flex-col items-center justify-center text-center p-3 sm:p-6 rounded-2xl bg-[#061810]/60 border border-white/[0.06] relative overflow-hidden">
                    <div
                      className="absolute w-44 sm:w-48 h-44 sm:h-48 rounded-full blur-3xl pointer-events-none opacity-20"
                      style={{ backgroundColor: activeSuite.accentColor }}
                    />

                    <h3 className="text-white font-bold text-xs sm:text-base mb-0.5 sm:mb-1">
                      {activeSuite.fullLabel}
                    </h3>
                    <p
                      className="text-[11px] sm:text-xs font-semibold mb-2 truncate max-w-xs"
                      style={{ color: activeSuite.accentColor }}
                    >
                      {activeSuite.tagline}
                    </p>

                    <div className="inline-flex items-center px-3 py-0.5 rounded-full bg-white/[0.08] border border-white/[0.15] mb-2 sm:mb-3 shadow-md">
                      <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-white">
                        Coming Soon
                      </span>
                    </div>

                    <p className="text-[10px] sm:text-xs text-slate-400 max-w-sm mb-3 leading-relaxed line-clamp-2 sm:line-clamp-none">
                      {activeSuite.description}
                    </p>

                    <button
                      onClick={() => setActiveTabId("floxa-design")}
                      className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-semibold text-[#00B377] hover:underline cursor-pointer"
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
