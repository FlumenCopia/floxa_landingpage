"use client";

import React from "react";

interface AppIconProps {
  name:
    | "final-cut"
    | "logic-pro"
    | "pixelmator"
    | "keynote"
    | "pages"
    | "numbers"
    | "freeform"
    | "motion"
    | "compressor"
    | "mainstage"
    | "apple";
  size?: number;
  className?: string;
}

export default function AppIcon({ name, size = 64, className = "" }: AppIconProps) {
  switch (name) {
    case "numbers":
      return (
        <div
          style={{ width: size, height: size }}
          className={`relative rounded-[24%] bg-[#121316] p-[14%] shadow-2xl ring-1 ring-white/10 ring-inset flex items-center justify-center overflow-hidden transition-transform duration-300 ${className}`}
        >
          {/* Subtle green edge glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#30d158]/20 via-transparent to-white/5 pointer-events-none" />
          <svg viewBox="0 0 100 100" className="w-full h-full relative z-10" fill="none">
            {/* 3 Neon green bars */}
            <rect x="18" y="24" width="16" height="52" rx="4" fill="url(#num-green-bar)" />
            <rect x="42" y="44" width="16" height="32" rx="4" fill="url(#num-green-bar)" />
            <rect x="66" y="16" width="16" height="60" rx="4" fill="url(#num-green-bar)" />
            {/* Bottom green bar */}
            <rect x="14" y="82" width="72" height="6" rx="3" fill="#30d158" className="drop-shadow-[0_0_8px_rgba(48,209,88,0.8)]" />
            <defs>
              <linearGradient id="num-green-bar" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#34c759" />
                <stop offset="100%" stopColor="#248a3d" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      );

    case "motion":
      return (
        <div
          style={{ width: size, height: size }}
          className={`relative rounded-[24%] bg-[#141217] p-[12%] shadow-2xl ring-1 ring-white/10 ring-inset flex items-center justify-center overflow-hidden transition-transform duration-300 ${className}`}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-[#bf5af2]/20 via-transparent to-white/5 pointer-events-none" />
          <svg viewBox="0 0 100 100" className="w-full h-full relative z-10" fill="none">
            {/* Glowing magenta ribbon curve forming motion loop */}
            <path
              d="M22 76 C20 46, 32 24, 46 44 C56 60, 64 26, 78 40"
              stroke="#bf5af2"
              strokeWidth="9"
              strokeLinecap="round"
              className="drop-shadow-[0_0_10px_rgba(191,90,242,0.8)]"
            />
            {/* Orb on right */}
            <circle cx="78" cy="40" r="8" fill="#d98ff7" className="drop-shadow-[0_0_12px_rgba(217,143,247,0.9)]" />
          </svg>
        </div>
      );

    case "freeform":
      return (
        <div
          style={{ width: size, height: size }}
          className={`relative rounded-[24%] bg-[#121618] p-[12%] shadow-2xl ring-1 ring-white/10 ring-inset flex items-center justify-center overflow-hidden transition-transform duration-300 ${className}`}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-[#32ade6]/20 via-transparent to-white/5 pointer-events-none" />
          <svg viewBox="0 0 100 100" className="w-full h-full relative z-10" fill="none">
            {/* Translucent cyan rounded glass background shape */}
            <rect x="22" y="24" width="46" height="46" rx="14" fill="#1b4958" fillOpacity="0.7" stroke="#32ade6" strokeWidth="1.5" />
            <circle cx="44" cy="54" r="26" fill="#143c4a" fillOpacity="0.5" />
            {/* Bright glowing neon cyan squiggle ribbon */}
            <path
              d="M16 54 Q32 32 46 56 T76 44 T90 52"
              stroke="#64d2ff"
              strokeWidth="8"
              strokeLinecap="round"
              className="drop-shadow-[0_0_10px_rgba(100,210,255,0.9)]"
            />
          </svg>
        </div>
      );

    case "keynote":
      return (
        <div
          style={{ width: size, height: size }}
          className={`relative rounded-[24%] bg-[#111419] p-[12%] shadow-2xl ring-1 ring-white/10 ring-inset flex items-center justify-center overflow-hidden transition-transform duration-300 ${className}`}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0a84ff]/25 via-transparent to-white/5 pointer-events-none" />
          <svg viewBox="0 0 100 100" className="w-full h-full relative z-10" fill="none">
            {/* Glowing blue lectern presentation lamp */}
            <rect x="24" y="24" width="52" height="32" rx="8" fill="url(#keynote-blue)" className="drop-shadow-[0_0_12px_rgba(10,132,255,0.7)]" />
            <circle cx="50" cy="40" r="9" stroke="#64d2ff" strokeWidth="2.5" fill="none" opacity="0.6" />
            <line x1="50" y1="40" x2="50" y2="34" stroke="#64d2ff" strokeWidth="2.5" strokeLinecap="round" />
            {/* Stand */}
            <path d="M50 56 L50 78" stroke="#64d2ff" strokeWidth="5" strokeLinecap="round" />
            <path d="M34 78 L66 78" stroke="#64d2ff" strokeWidth="5.5" strokeLinecap="round" />
            <defs>
              <linearGradient id="keynote-blue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2997ff" />
                <stop offset="100%" stopColor="#0062cc" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      );

    case "final-cut":
      return (
        <div
          style={{ width: size, height: size }}
          className={`relative rounded-[24%] bg-[#151219] p-[12%] shadow-2xl ring-1 ring-white/10 ring-inset flex items-center justify-center overflow-hidden transition-transform duration-300 ${className}`}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-[#bf5af2]/25 via-transparent to-white/5 pointer-events-none" />
          <svg viewBox="0 0 100 100" className="w-full h-full relative z-10" fill="none">
            {/* Purple Clapperboard */}
            <rect x="18" y="32" width="64" height="48" rx="8" fill="url(#fcp-purple)" className="drop-shadow-[0_0_12px_rgba(191,90,242,0.7)]" />
            {/* Clapper top arm */}
            <path d="M18 36 L82 24" stroke="#d98ff7" strokeWidth="6" strokeLinecap="round" />
            <path d="M22 36 L78 36" stroke="#ffffff" strokeWidth="3" opacity="0.8" />
            <defs>
              <linearGradient id="fcp-purple" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#bf5af2" />
                <stop offset="100%" stopColor="#682594" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      );

    case "logic-pro":
      return (
        <div
          style={{ width: size, height: size }}
          className={`relative rounded-[24%] bg-[#121318] p-[12%] shadow-2xl ring-1 ring-white/10 ring-inset flex items-center justify-center overflow-hidden transition-transform duration-300 ${className}`}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-[#2997ff]/20 via-transparent to-white/5 pointer-events-none" />
          <svg viewBox="0 0 100 100" className="w-full h-full relative z-10" fill="none">
            {/* Outer dial ring */}
            <circle cx="50" cy="50" r="34" fill="#1b1e28" stroke="#2997ff" strokeWidth="3.5" className="drop-shadow-[0_0_10px_rgba(41,151,255,0.7)]" />
            <circle cx="50" cy="50" r="22" fill="#141720" />
            <circle cx="50" cy="50" r="4" fill="#64d2ff" className="drop-shadow-[0_0_6px_rgba(100,210,255,0.9)]" />
          </svg>
        </div>
      );

    case "pages":
      return (
        <div
          style={{ width: size, height: size }}
          className={`relative rounded-[24%] bg-[#171311] p-[12%] shadow-2xl ring-1 ring-white/10 ring-inset flex items-center justify-center overflow-hidden transition-transform duration-300 ${className}`}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-[#ff9f0a]/25 via-transparent to-white/5 pointer-events-none" />
          <svg viewBox="0 0 100 100" className="w-full h-full relative z-10" fill="none">
            {/* Angled orange fountain pen */}
            <path
              d="M68 22 C68 22, 42 42, 34 68 L30 76 L40 72 C64 64, 78 32, 78 32 Z"
              fill="url(#pages-orange)"
              className="drop-shadow-[0_0_12px_rgba(255,159,10,0.8)]"
            />
            {/* Stroke line below */}
            <path d="M34 82 L70 82" stroke="#ff9f0a" strokeWidth="5.5" strokeLinecap="round" className="drop-shadow-[0_0_8px_rgba(255,159,10,0.8)]" />
            <defs>
              <linearGradient id="pages-orange" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#ffb340" />
                <stop offset="100%" stopColor="#d66b00" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      );

    case "compressor":
      return (
        <div
          style={{ width: size, height: size }}
          className={`relative rounded-[24%] bg-[#171511] p-[12%] shadow-2xl ring-1 ring-white/10 ring-inset flex items-center justify-center overflow-hidden transition-transform duration-300 ${className}`}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-[#ffd60a]/25 via-transparent to-white/5 pointer-events-none" />
          <svg viewBox="0 0 100 100" className="w-full h-full relative z-10" fill="none">
            {/* Golden squeeze weights top and bottom */}
            <ellipse cx="50" cy="28" rx="20" ry="10" fill="url(#comp-gold)" />
            <ellipse cx="50" cy="72" rx="20" ry="10" fill="url(#comp-gold)" />
            {/* Squeeze bracket */}
            <path
              d="M30 40 C36 40, 44 48, 44 50 C44 52, 36 60, 30 60 C24 60, 24 40, 30 40 Z"
              fill="url(#comp-gold)"
            />
            <path
              d="M70 40 C64 40, 56 48, 56 50 C56 52, 64 60, 70 60 C76 60, 76 40, 70 40 Z"
              fill="url(#comp-gold)"
            />
            <path
              d="M26 38 C38 42, 44 48, 44 50 C44 52, 38 58, 26 62 M74 38 C62 42, 56 48, 56 50 C56 52, 62 58, 74 62"
              stroke="#ffd60a"
              strokeWidth="5"
              strokeLinecap="round"
              className="drop-shadow-[0_0_10px_rgba(255,214,10,0.8)]"
            />
            <defs>
              <linearGradient id="comp-gold" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ffe470" />
                <stop offset="100%" stopColor="#bf9000" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      );

    case "mainstage":
      return (
        <div
          style={{ width: size, height: size }}
          className={`relative rounded-[24%] bg-[#121617] p-[12%] shadow-2xl ring-1 ring-white/10 ring-inset flex items-center justify-center overflow-hidden transition-transform duration-300 ${className}`}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-[#30d158]/20 via-transparent to-white/5 pointer-events-none" />
          <svg viewBox="0 0 100 100" className="w-full h-full relative z-10" fill="none">
            {/* Vertical slider track */}
            <rect x="47" y="22" width="6" height="56" rx="3" fill="#205048" />
            {/* Teal rounded slider knob */}
            <rect x="28" y="40" width="44" height="20" rx="9" fill="url(#main-teal)" className="drop-shadow-[0_0_10px_rgba(48,209,180,0.8)]" />
            {/* Level indicator dots */}
            <circle cx="68" cy="30" r="3" fill="#64d2ff" />
            <circle cx="68" cy="70" r="3" fill="#64d2ff" />
            <defs>
              <linearGradient id="main-teal" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#66e0c6" />
                <stop offset="100%" stopColor="#1e8a75" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      );

    case "pixelmator":
      return (
        <div
          style={{ width: size, height: size }}
          className={`relative rounded-[24%] bg-[#171215] p-[12%] shadow-2xl ring-1 ring-white/10 ring-inset flex items-center justify-center overflow-hidden transition-transform duration-300 ${className}`}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-[#ff375f]/25 via-transparent to-white/5 pointer-events-none" />
          <svg viewBox="0 0 100 100" className="w-full h-full relative z-10" fill="none">
            {/* Stacked isometric red diamond layers */}
            <path d="M50 78 L20 60 L50 42 L80 60 Z" fill="#7a142c" stroke="#ff375f" strokeWidth="2" />
            <path d="M50 64 L20 46 L50 28 L80 46 Z" fill="#b81d3f" stroke="#ff453a" strokeWidth="2" />
            <path
              d="M50 50 L20 32 L50 14 L80 32 Z"
              fill="#ff375f"
              stroke="#ff6987"
              strokeWidth="2.5"
              className="drop-shadow-[0_0_10px_rgba(255,55,95,0.8)]"
            />
          </svg>
        </div>
      );

    case "apple":
    default:
      return (
        <svg
          style={{ width: size, height: size }}
          viewBox="0 0 170 170"
          className={`fill-current ${className}`}
        >
          <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.04-7.66-7.83-11.91-14.34-7.24-11.23-12.87-23.75-16.89-37.58-4.01-13.82-6.02-26.7-6.02-38.64 0-16.27 4.2-29.35 12.6-39.24 8.4-9.88 18.66-14.88 30.77-14.99 4.58 0 9.87 1.25 15.87 3.75 6 2.5 9.84 3.76 11.51 3.76 1.45 0 5.37-1.29 11.75-3.88 6.38-2.58 11.69-3.76 15.93-3.52 11.23.59 20.47 4.67 27.71 12.24-9.84 5.99-14.65 14.28-14.42 24.87.23 8.35 3.51 15.34 9.84 20.97 6.33 5.63 13.9 8.89 22.7 9.77-2.35 7.4-5.38 15.03-9.08 22.88zm-39.29-106.69c0-6.75 2.45-13.06 7.35-17.93 4.9-4.87 10.82-7.63 17.76-8.28.12 1.06.18 2.01.18 2.83 0 6.63-2.6 13.04-7.8 18.23-5.2 5.18-11.41 8.08-18.63 8.68-.24-1.18-.86-2.36-.86-3.53z" />
        </svg>
      );
  }
}
