"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";

export default function PixelmatorColorPicker() {
  // Angle in degrees. -90deg is 12 o'clock (top center), matching the screenshot
  const [angle, setAngle] = useState(-90);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const wheelRef = useRef<HTMLDivElement>(null);

  // Compute hue rotation offset relative to -90deg (top = magenta = 0deg hue-shift)
  const normalizedAngle = (angle + 360) % 360;
  // Top (-90 or 270) corresponds to hue 0
  const hueRotation = (normalizedAngle - 270 + 360) % 360;

  // Auto-rotation animation loop
  useEffect(() => {
    if (!isAutoPlaying || isDragging) return;

    const interval = setInterval(() => {
      setAngle((prev) => (prev + 1.2) % 360);
    }, 30);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isDragging]);

  // Handle pointer coordinate to angle
  const updateAngleFromPointer = useCallback((clientX: number, clientY: number) => {
    if (!wheelRef.current) return;
    const rect = wheelRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const dx = clientX - centerX;
    const dy = clientY - centerY;
    const deg = Math.atan2(dy, dx) * (180 / Math.PI);
    setAngle(deg);
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    setIsAutoPlaying(false);
    updateAngleFromPointer(e.clientX, e.clientY);
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (isDragging) {
      updateAngleFromPointer(e.clientX, e.clientY);
    }
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    (e.target as HTMLElement).releasePointerCapture?.(e.pointerId);
  };

  // Calculate pointer position on the color ring circle (radius = 38%)
  const radiusPercent = 37.5;
  const rad = (angle * Math.PI) / 180;
  const pointerX = 50 + radiusPercent * Math.cos(rad);
  const pointerY = 50 + radiusPercent * Math.sin(rad);

  return (
    <div className="relative w-full mx-auto overflow-hidden flex flex-col items-center justify-center select-none">
      {/* Top and Bottom Vignettes for smooth blending into black */}
      <div className="absolute top-0 inset-x-0 h-20 sm:h-32 bg-gradient-to-b from-black to-transparent z-20 pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-28 sm:h-40 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none" />

      {/* Main Visual Stage */}
      <div className="relative w-full h-[480px] sm:h-[620px] md:h-[720px] lg:h-[820px] xl:h-[900px] flex items-center justify-center overflow-hidden">
        {/* Background Flower Image with Dynamic Live Hue Rotation */}
        <img
          src="https://www.apple.com/v/apple-creator-studio/a/images/overview/pixelmator/hero_endframe__chfdpsnstqeu_xlarge.jpg"
          srcSet="
            https://www.apple.com/v/apple-creator-studio/a/images/overview/pixelmator/hero_endframe__chfdpsnstqeu_large.jpg 1068w,
            https://www.apple.com/v/apple-creator-studio/a/images/overview/pixelmator/hero_endframe__chfdpsnstqeu_xlarge.jpg 1440w
          "
          sizes="(max-width: 1068px) 100vw, 1500px"
          alt="Textured floral object dynamically changing colors in Pixelmator Pro"
          className="absolute inset-0 w-full h-full object-contain scale-110 sm:scale-120 md:scale-130 lg:scale-135 filter transition-[filter] duration-75 pointer-events-none"
          style={{
            filter: `hue-rotate(${hueRotation}deg) saturate(1.15)`,
          }}
        />

        {/* Center Color Wheel Dial Overlay */}
        <div
          ref={wheelRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          className="relative z-30 w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] md:w-[440px] md:h-[440px] lg:w-[490px] lg:h-[490px] rounded-full cursor-grab active:cursor-grabbing flex items-center justify-center touch-none group"
          title="Drag or click anywhere on the color wheel to change the background color"
        >
          {/* Outer circular shadow and subtle glass backing */}
          <div className="absolute inset-0 rounded-full bg-black/60 backdrop-blur-md shadow-2xl border border-white/10" />

          {/* Rainbow Spectrum Ring (conic gradient) */}
          <div
            className="absolute w-[75%] h-[75%] rounded-full shadow-inner"
            style={{
              background:
                "conic-gradient(from 270deg, #ff0055 0%, #ff5500 15%, #ffbb00 30%, #00dd55 45%, #00bbff 65%, #7700ff 82%, #ff0055 100%)",
              maskImage: "radial-gradient(transparent 58%, black 60%)",
              WebkitMaskImage: "radial-gradient(transparent 58%, black 60%)",
            }}
          />

          {/* Center Dark Aperture with Crosshair */}
          <div className="relative w-[44%] h-[44%] rounded-full bg-[#161617]/95 border border-white/10 flex items-center justify-center shadow-inner">
            {/* Crosshair indicator */}
            <div className="relative w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center text-white/50">
              <div className="absolute w-full h-[1.5px] bg-white/40" />
              <div className="absolute h-full w-[1.5px] bg-white/40" />
            </div>
          </div>

          {/* The Interactive White Color Pointer Dot */}
          <div
            className="absolute w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-white shadow-[0_0_16px_rgba(255,255,255,1),0_2px_8px_rgba(0,0,0,0.8)] border border-black/20 pointer-events-none transition-transform duration-75 group-hover:scale-110"
            style={{
              left: `${pointerX}%`,
              top: `${pointerY}%`,
              transform: "translate(-50%, -50%)",
            }}
          />
        </div>
      </div>

      {/* Interactive Helper & Auto-Play / Pause Toggle */}
      <div className="relative z-30 mt-3 flex items-center gap-3">
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-xs text-white/80 hover:text-white transition-all duration-150 backdrop-blur-md shadow-sm"
        >
          {isAutoPlaying ? (
            <>
              <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                <rect x="6" y="4" width="3.5" height="16" rx="1" />
                <rect x="14.5" y="4" width="3.5" height="16" rx="1" />
              </svg>
              <span>Pause Color Cycle</span>
            </>
          ) : (
            <>
              <svg className="w-3 h-3 fill-current ml-0.5" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              <span>Auto Cycle Colors</span>
            </>
          )}
        </button>

        <span className="text-[11px] text-white/40 hidden sm:inline">
          Drag the white pointer on the color wheel to change hues
        </span>
      </div>
    </div>
  );
}
