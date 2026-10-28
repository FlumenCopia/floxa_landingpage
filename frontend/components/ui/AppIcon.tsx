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
    case "final-cut":
      return (
        <div
          style={{ width: size, height: size }}
          className={`relative rounded-[22%] bg-gradient-to-br from-[#1c1c1e] to-[#2c2c2e] p-[10%] shadow-2xl ring-1 ring-white/15 flex items-center justify-center overflow-hidden transition-transform hover:scale-105 ${className}`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a84ff]/30 via-[#bf5af2]/20 to-transparent" />
          {/* Clapperboard representation */}
          <svg viewBox="0 0 100 100" className="w-full h-full relative z-10" fill="none">
            <rect x="16" y="24" width="68" height="52" rx="8" fill="#1e1e24" stroke="#ffffff" strokeWidth="3" />
            {/* Clapper top */}
            <path d="M16 38 L84 38" stroke="#ffffff" strokeWidth="3" />
            <path d="M26 24 L38 38 M44 24 L56 38 M62 24 L74 38" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
            {/* Film stripes inside */}
            <rect x="24" y="46" width="52" height="22" rx="4" fill="url(#fcp-stripes)" />
            <defs>
              <linearGradient id="fcp-stripes" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#0071e3" />
                <stop offset="50%" stopColor="#bf5af2" />
                <stop offset="100%" stopColor="#ff375f" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      );

    case "logic-pro":
      return (
        <div
          style={{ width: size, height: size }}
          className={`relative rounded-[22%] bg-gradient-to-br from-[#1f1a28] to-[#14121a] p-[10%] shadow-2xl ring-1 ring-white/15 flex items-center justify-center overflow-hidden transition-transform hover:scale-105 ${className}`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#ff9f0a]/25 via-[#ff453a]/20 to-transparent" />
          <svg viewBox="0 0 100 100" className="w-full h-full relative z-10" fill="none">
            {/* Knob dial */}
            <circle cx="50" cy="50" r="32" fill="#24212b" stroke="#ff9f0a" strokeWidth="4" />
            <circle cx="50" cy="50" r="22" fill="#181520" />
            <line x1="50" y1="26" x2="50" y2="38" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
            {/* Frequency bars */}
            <rect x="22" y="66" width="6" height="12" rx="3" fill="#30d158" />
            <rect x="33" y="58" width="6" height="20" rx="3" fill="#ffd60a" />
            <rect x="44" y="50" width="6" height="28" rx="3" fill="#ff9f0a" />
            <rect x="55" y="54" width="6" height="24" rx="3" fill="#ff453a" />
            <rect x="66" y="62" width="6" height="16" rx="3" fill="#bf5af2" />
          </svg>
        </div>
      );

    case "pixelmator":
      return (
        <div
          style={{ width: size, height: size }}
          className={`relative rounded-[22%] bg-gradient-to-br from-[#2a1728] to-[#181120] p-[10%] shadow-2xl ring-1 ring-white/15 flex items-center justify-center overflow-hidden transition-transform hover:scale-105 ${className}`}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-[#ff375f]/30 via-[#ffd60a]/20 to-[#30d158]/20" />
          <svg viewBox="0 0 100 100" className="w-full h-full relative z-10" fill="none">
            {/* Artist palette with radiant colors */}
            <path
              d="M50 18 C30 18, 16 32, 16 52 C16 68, 28 80, 44 80 C50 80, 52 74, 52 70 C52 66, 54 62, 60 62 C74 62, 84 56, 84 42 C84 28, 68 18, 50 18 Z"
              fill="#251a2a"
              stroke="#ffffff"
              strokeWidth="2.5"
            />
            <circle cx="34" cy="36" r="6" fill="#ff375f" />
            <circle cx="52" cy="30" r="6" fill="#ff9f0a" />
            <circle cx="68" cy="40" r="6" fill="#ffd60a" />
            <circle cx="34" cy="54" r="6" fill="#30d158" />
            <circle cx="70" cy="72" r="5" fill="#0a84ff" />
          </svg>
        </div>
      );

    case "keynote":
      return (
        <div
          style={{ width: size, height: size }}
          className={`relative rounded-[22%] bg-gradient-to-br from-[#0a84ff] to-[#0055b3] p-[12%] shadow-2xl ring-1 ring-white/20 flex items-center justify-center overflow-hidden transition-transform hover:scale-105 ${className}`}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
            {/* Lectern / Presentation lamp */}
            <path d="M50 20 L50 68" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" />
            <path d="M30 32 L70 32" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" />
            <path d="M34 68 L66 68" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" />
            <circle cx="50" cy="22" r="8" fill="#ffd60a" />
          </svg>
        </div>
      );

    case "pages":
      return (
        <div
          style={{ width: size, height: size }}
          className={`relative rounded-[22%] bg-gradient-to-br from-[#ff9f0a] to-[#d66b00] p-[12%] shadow-2xl ring-1 ring-white/20 flex items-center justify-center overflow-hidden transition-transform hover:scale-105 ${className}`}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
            {/* Fountain pen feather */}
            <path
              d="M68 22 C68 22, 42 36, 36 60 L32 74 L46 70 C70 64, 84 38, 84 38 Z"
              fill="#ffffff"
            />
            <path d="M36 60 L68 22" stroke="#d66b00" strokeWidth="3" />
          </svg>
        </div>
      );

    case "numbers":
      return (
        <div
          style={{ width: size, height: size }}
          className={`relative rounded-[22%] bg-gradient-to-br from-[#30d158] to-[#1b8c35] p-[12%] shadow-2xl ring-1 ring-white/20 flex items-center justify-center overflow-hidden transition-transform hover:scale-105 ${className}`}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
            {/* Bar chart */}
            <rect x="22" y="54" width="14" height="26" rx="4" fill="#ffffff" />
            <rect x="43" y="38" width="14" height="42" rx="4" fill="#ffffff" />
            <rect x="64" y="22" width="14" height="58" rx="4" fill="#ffffff" />
          </svg>
        </div>
      );

    case "freeform":
      return (
        <div
          style={{ width: size, height: size }}
          className={`relative rounded-[22%] bg-gradient-to-br from-[#ff375f] via-[#bf5af2] to-[#5e5ce6] p-[12%] shadow-2xl ring-1 ring-white/20 flex items-center justify-center overflow-hidden transition-transform hover:scale-105 ${className}`}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
            {/* Freeform doodle ribbons */}
            <path
              d="M24 64 C20 40, 48 30, 48 50 C48 70, 76 60, 74 34"
              stroke="#ffffff"
              strokeWidth="7"
              strokeLinecap="round"
            />
            <circle cx="30" cy="30" r="5" fill="#ffd60a" />
            <rect x="65" y="65" width="10" height="10" rx="3" fill="#ffffff" transform="rotate(25 70 70)" />
          </svg>
        </div>
      );

    case "motion":
      return (
        <div
          style={{ width: size, height: size }}
          className={`relative rounded-[22%] bg-gradient-to-br from-[#1f1e24] to-[#121117] p-[12%] shadow-2xl ring-1 ring-white/15 flex items-center justify-center overflow-hidden transition-transform hover:scale-105 ${className}`}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
            <circle cx="50" cy="50" r="30" stroke="#bf5af2" strokeWidth="4" strokeDasharray="6 4" />
            <circle cx="50" cy="50" r="16" fill="#bf5af2" />
          </svg>
        </div>
      );

    case "compressor":
      return (
        <div
          style={{ width: size, height: size }}
          className={`relative rounded-[22%] bg-gradient-to-br from-[#1f1e24] to-[#121117] p-[12%] shadow-2xl ring-1 ring-white/15 flex items-center justify-center overflow-hidden transition-transform hover:scale-105 ${className}`}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
            <rect x="24" y="24" width="52" height="52" rx="10" stroke="#0a84ff" strokeWidth="4" />
            <path d="M38 42 L50 54 L62 42" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="50" y1="28" x2="50" y2="52" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" />
          </svg>
        </div>
      );

    case "mainstage":
      return (
        <div
          style={{ width: size, height: size }}
          className={`relative rounded-[22%] bg-gradient-to-br from-[#1f1e24] to-[#121117] p-[12%] shadow-2xl ring-1 ring-white/15 flex items-center justify-center overflow-hidden transition-transform hover:scale-105 ${className}`}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
            {/* Stage spotlight rays */}
            <path d="M50 20 L25 78 L75 78 Z" fill="#ff453a" fillOpacity="0.4" stroke="#ff453a" strokeWidth="2" />
            <circle cx="50" cy="74" r="7" fill="#ffffff" />
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
