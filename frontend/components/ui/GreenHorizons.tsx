"use client";

import React from "react";

/**
 * Sweeping Green Color Horizon Silk Waves for the Hero section.
 * Massive, luminous emerald/mint waves with 3D gradient shading matching the reference image.
 */
export function HeroGreenHorizons() {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 w-screen h-full inset-y-0 pointer-events-none overflow-hidden select-none z-0">
      {/* Radiant ambient emerald glows */}
      <div className="absolute -top-28 right-0 w-[800px] h-[700px] bg-gradient-to-bl from-[#00E599]/40 via-[#10B981]/30 to-transparent rounded-full blur-[110px]" />
      <div className="absolute bottom-0 right-0 w-[750px] h-[600px] bg-gradient-to-tl from-[#00E599]/35 via-[#059669]/25 to-transparent rounded-full blur-[100px]" />
      <div className="absolute bottom-10 left-0 w-[600px] h-[500px] bg-gradient-to-tr from-[#00E599]/25 via-[#047857]/18 to-transparent rounded-full blur-[90px]" />

      {/* Volumetric Green Silk Horizon Ribbon Shapes */}
      <svg
        className="absolute inset-0 w-full h-full object-cover"
        viewBox="0 0 1600 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="hero-silk-main" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#021A10" stopOpacity="0.0" />
            <stop offset="25%" stopColor="#059669" stopOpacity="0.5" />
            <stop offset="55%" stopColor="#10B981" stopOpacity="0.8" />
            <stop offset="85%" stopColor="#00E599" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#6EE7B7" stopOpacity="0.75" />
          </linearGradient>

          <linearGradient id="hero-silk-layer2" x1="20%" y1="0%" x2="90%" y2="100%">
            <stop offset="0%" stopColor="#00E599" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#10B981" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#047857" stopOpacity="0.15" />
          </linearGradient>

          <linearGradient id="hero-crest-line" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#00E599" stopOpacity="0.0" />
            <stop offset="35%" stopColor="#00E599" stopOpacity="1" />
            <stop offset="70%" stopColor="#6EE7B7" stopOpacity="1" />
            <stop offset="100%" stopColor="#00E599" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Layer 1: Giant bottom-right sweeping silk wave */}
        <path
          d="M 600,900 C 820,740 1080,580 1320,420 C 1460,310 1560,200 1680,130 L 1700,900 Z"
          fill="url(#hero-silk-main)"
          opacity="0.9"
        />

        {/* Layer 2: Folded silk ribbon arching across right side */}
        <path
          d="M 850,900 C 1070,790 1260,660 1430,490 C 1530,380 1620,260 1690,160 L 1690,900 Z"
          fill="url(#hero-silk-layer2)"
          opacity="0.75"
        />

        {/* Glowing Silk Crest Ridge Lines */}
        <path
          d="M 600,900 C 820,740 1080,580 1320,420 C 1460,310 1560,200 1680,130"
          stroke="url(#hero-crest-line)"
          strokeWidth="5"
          filter="drop-shadow(0 0 18px rgba(0,229,153,0.95))"
        />

        <path
          d="M 760,900 C 990,760 1200,610 1380,460 C 1500,360 1600,260 1680,180"
          stroke="url(#hero-crest-line)"
          strokeWidth="2.5"
          opacity="0.85"
        />

        {/* Top-Right swooping ribbon */}
        <path
          d="M 1680,30 C 1420,110 1160,270 980,440 C 840,570 700,710 480,840"
          stroke="url(#hero-crest-line)"
          strokeWidth="3.5"
          filter="drop-shadow(0 0 16px rgba(0,229,153,0.85))"
          opacity="0.7"
        />
      </svg>
    </div>
  );
}

/**
 * Volumetric Green Silk Waves specifically for the WORKFLOW section!
 * Recreates the huge, prominent, glowing emerald silk waves on the left (behind the dark card)
 * and on the right (behind the checklist) exactly as seen in the reference screenshot!
 */
export function WorkflowGreenHorizons() {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 w-screen h-full inset-y-0 pointer-events-none overflow-hidden select-none z-0">
      {/* 1. LEFT FLANK: Green Silk Wave behind the "Welcome back!" card.
          On mobile (< lg), positioned at top-0 behind the card with soft bounds so it never covers the text below!
          On desktop (lg+), full height spanning the left column. */}
      <div className="absolute left-0 top-0 lg:top-1/2 lg:-translate-y-1/2 w-[90vw] max-w-[560px] lg:w-[55vw] lg:max-w-[760px] lg:min-w-[500px] h-[460px] lg:h-[780px] pointer-events-none">
        {/* Soft volumetric ambient green shade background */}
        <div className="absolute -left-20 top-0 lg:top-1/2 lg:-translate-y-1/2 w-[480px] lg:w-[620px] h-[440px] lg:h-[680px] bg-gradient-to-r from-[#00E599]/40 via-[#10B981]/25 to-transparent rounded-full blur-[85px]" />

        {/* 3D Organic Curved Silk Wave Shape */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 700 780"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="wf-left-silk-1" x1="0%" y1="20%" x2="100%" y2="80%">
              <stop offset="0%" stopColor="#00E599" stopOpacity="0.85" />
              <stop offset="35%" stopColor="#10B981" stopOpacity="0.75" />
              <stop offset="70%" stopColor="#059669" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#047857" stopOpacity="0.0" />
            </linearGradient>

            <linearGradient id="wf-left-silk-2" x1="10%" y1="0%" x2="90%" y2="100%">
              <stop offset="0%" stopColor="#6EE7B7" stopOpacity="0.8" />
              <stop offset="35%" stopColor="#00E599" stopOpacity="0.65" />
              <stop offset="70%" stopColor="#059669" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#022C22" stopOpacity="0.0" />
            </linearGradient>

            <linearGradient id="wf-left-crest" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#A7F3D0" stopOpacity="0.95" />
              <stop offset="35%" stopColor="#00E599" stopOpacity="1" />
              <stop offset="75%" stopColor="#10B981" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#047857" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Broad Wave Body 1 - Sweeping in from left edge */}
          <path
            d="M -50,80 C 200,100 420,230 500,430 C 560,570 520,700 370,780 L -50,780 Z"
            fill="url(#wf-left-silk-1)"
          />

          {/* Overlapping Wave Body 2 - Folded silk curve */}
          <path
            d="M -50,200 C 160,220 350,330 420,490 C 470,600 430,710 300,780 L -50,780 Z"
            fill="url(#wf-left-silk-2)"
          />

          {/* Luminous Glowing Wave Crest Line 1 */}
          <path
            d="M -50,80 C 200,100 420,230 500,430 C 560,570 520,700 370,780"
            stroke="url(#wf-left-crest)"
            strokeWidth="5"
            filter="drop-shadow(0 0 18px rgba(0,229,153,0.85))"
          />

          {/* Echo Wave Crest Line 2 */}
          <path
            d="M -50,200 C 160,220 350,330 420,490 C 470,600 430,710 300,780"
            stroke="url(#wf-left-crest)"
            strokeWidth="2.5"
            opacity="0.8"
          />
        </svg>
      </div>

      {/* 2. RIGHT FLANK: Sweeping Green Silk Wave in desktop right margin.
          HIDDEN ON MOBILE (lg:block only) to guarantee 100% crisp contrast and readability
          for "A seamless creative workflow...", checklist items, and CTA button! */}
      <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[55vw] max-w-[720px] min-w-[480px] h-[780px] pointer-events-none">
        {/* Ambient green shade bloom */}
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[620px] h-[680px] bg-gradient-to-l from-[#00E599]/35 via-[#10B981]/22 to-transparent rounded-full blur-[85px]" />

        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 700 780"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="wf-right-silk" x1="100%" y1="10%" x2="0%" y2="90%">
              <stop offset="0%" stopColor="#00E599" stopOpacity="0.75" />
              <stop offset="40%" stopColor="#10B981" stopOpacity="0.55" />
              <stop offset="75%" stopColor="#059669" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#047857" stopOpacity="0.0" />
            </linearGradient>

            <linearGradient id="wf-right-crest" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#A7F3D0" stopOpacity="0.9" />
              <stop offset="40%" stopColor="#00E599" stopOpacity="0.95" />
              <stop offset="80%" stopColor="#10B981" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#047857" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Wave Body sweeping from right edge inward, smoothly fading */}
          <path
            d="M 750,40 C 510,120 300,280 230,480 C 170,640 220,740 360,820 L 750,820 Z"
            fill="url(#wf-right-silk)"
          />

          {/* Glowing Crest Line */}
          <path
            d="M 750,40 C 510,120 300,280 230,480 C 170,640 220,740 360,820"
            stroke="url(#wf-right-crest)"
            strokeWidth="5"
            filter="drop-shadow(0 0 18px rgba(0,229,153,0.85))"
          />

          <path
            d="M 750,150 C 550,220 370,360 300,520 C 250,640 290,720 420,800"
            stroke="url(#wf-right-crest)"
            strokeWidth="2.5"
            opacity="0.7"
          />
        </svg>
      </div>
    </div>
  );
}

/**
 * Sweeping Green Color Horizon Silk Waves for the Powerful Features & Highlights Section.
 * Recreates the big translucent green wave curving behind the 6 cards on the right.
 */
export function FeaturesGreenHorizons() {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 w-screen h-full inset-y-0 pointer-events-none overflow-hidden select-none z-0">
      {/* Top Right large green silk shade bloom - visible on tablet and desktop */}
      <div className="hidden sm:block absolute -top-10 right-0 w-[55vw] max-w-[760px] lg:min-w-[500px] h-[780px] pointer-events-none">
        <div className="absolute -right-20 top-0 w-[620px] h-[650px] bg-gradient-to-bl from-[#00E599]/35 via-[#10B981]/22 to-transparent rounded-full blur-[90px]" />

        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 750 780"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="feat-silk" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#00E599" stopOpacity="0.8" />
              <stop offset="35%" stopColor="#10B981" stopOpacity="0.6" />
              <stop offset="75%" stopColor="#059669" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#047857" stopOpacity="0.0" />
            </linearGradient>

            <linearGradient id="feat-crest" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#6EE7B7" stopOpacity="0.95" />
              <stop offset="45%" stopColor="#00E599" stopOpacity="0.95" />
              <stop offset="90%" stopColor="#10B981" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          <path
            d="M 800,30 C 550,110 340,280 260,480 C 200,630 250,730 380,780 L 800,780 Z"
            fill="url(#feat-silk)"
          />

          <path
            d="M 800,30 C 550,110 340,280 260,480 C 200,630 250,730 380,780"
            stroke="url(#feat-crest)"
            strokeWidth="5"
            filter="drop-shadow(0 0 18px rgba(0,229,153,0.85))"
          />
        </svg>
      </div>

      {/* Mid Left green shade bloom - desktop only */}
      <div className="hidden lg:block absolute top-1/2 left-0 w-[50vw] max-w-[650px] min-w-[450px] h-[700px] pointer-events-none">
        <div className="absolute -left-20 top-0 w-[550px] h-[600px] bg-gradient-to-tr from-[#00E599]/30 via-[#059669]/18 to-transparent rounded-full blur-[90px]" />

        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 650 700"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="feat-left-silk" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00E599" stopOpacity="0.75" />
              <stop offset="40%" stopColor="#10B981" stopOpacity="0.55" />
              <stop offset="80%" stopColor="#059669" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#047857" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          <path
            d="M -50,120 C 180,160 340,290 400,460 C 440,570 390,650 280,700 L -50,700 Z"
            fill="url(#wf-left-silk-1)"
            opacity="0.7"
          />
          <path
            d="M -50,120 C 180,160 340,290 400,460 C 440,570 390,650 280,700"
            stroke="url(#feat-crest)"
            strokeWidth="4"
            filter="drop-shadow(0 0 16px rgba(0,229,153,0.8))"
          />
        </svg>
      </div>
    </div>
  );
}

/**
 * Universal Green Silk Wave Horizons for general body sections.
 */
export function BodyGreenHorizons() {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 w-screen h-full inset-y-0 pointer-events-none overflow-hidden select-none z-0">
      <div className="absolute top-10 right-0 w-[700px] h-[700px] bg-gradient-to-bl from-[#00E599]/32 via-[#10B981]/22 to-transparent rounded-full blur-[100px]" />
      <div className="absolute top-1/3 left-0 w-[700px] h-[700px] bg-gradient-to-tr from-[#00E599]/30 via-[#059669]/18 to-transparent rounded-full blur-[110px]" />
      <div className="absolute top-2/3 right-0 w-[750px] h-[750px] bg-gradient-to-tl from-[#00E599]/35 via-[#10B981]/22 to-transparent rounded-full blur-[115px]" />
    </div>
  );
}

/**
 * Green Color Horizons for the Footer CTA section.
 * Positioned in the upper banner area to illuminate the CTA while keeping
 * the lower legal, navigation, and footnotes text crisp on pure dark obsidian.
 */
export function FooterGreenHorizons() {
  return (
      <div className="absolute left-1/2 -translate-x-1/2 w-screen h-[380px] top-0 pointer-events-none overflow-hidden select-none z-0">
        {/* Mobile Ambient Aura (Smooth & Zero Line Clutter) */}
        <div className="lg:hidden absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[280px] h-[280px] bg-gradient-to-bl from-[#00B377]/25 to-transparent rounded-full blur-[80px]" />
          <div className="absolute bottom-10 left-0 w-[240px] h-[240px] bg-gradient-to-tr from-[#00B377]/18 to-transparent rounded-full blur-[70px]" />
        </div>

        {/* Desktop Horizon Silk Waves & Glowing Ambience */}
        <div className="hidden lg:block absolute inset-0 pointer-events-none">
          <div className="absolute top-4 right-0 w-[700px] h-[320px] bg-gradient-to-l from-[#00B377]/25 via-[#10B981]/15 to-transparent rounded-full blur-[100px]" />
          <div className="absolute top-12 left-0 w-[550px] h-[280px] bg-gradient-to-r from-[#00B377]/18 via-[#059669]/12 to-transparent rounded-full blur-[90px]" />

          <svg
            className="absolute inset-0 w-full h-full object-cover"
            viewBox="0 0 1600 380"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="footer-silk-wave" x1="0%" y1="50%" x2="100%" y2="50%">
                <stop offset="0%" stopColor="#00B377" stopOpacity="0.0" />
                <stop offset="30%" stopColor="#00B377" stopOpacity="0.65" />
                <stop offset="70%" stopColor="#34D399" stopOpacity="0.75" />
                <stop offset="100%" stopColor="#00B377" stopOpacity="0.15" />
              </linearGradient>

              <linearGradient id="footer-silk-fill" x1="50%" y1="0%" x2="50%" y2="100%">
                <stop offset="0%" stopColor="#00B377" stopOpacity="0.18" />
                <stop offset="60%" stopColor="#059669" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#030A06" stopOpacity="0.0" />
              </linearGradient>
            </defs>

            {/* Flows safely below the heading & button (y >= 280) */}
            <path
              d="M -100,340 C 350,300 750,330 1150,290 C 1350,270 1520,285 1700,295 L 1700,380 L -100,380 Z"
              fill="url(#footer-silk-fill)"
            />

            <path
              d="M -100,340 C 350,300 750,330 1150,290 C 1350,270 1520,285 1700,295"
              stroke="url(#footer-silk-wave)"
              strokeWidth="2.5"
              filter="drop-shadow(0 0 10px rgba(0,179,119,0.35))"
            />
          </svg>
        </div>
      </div>
      );
}
