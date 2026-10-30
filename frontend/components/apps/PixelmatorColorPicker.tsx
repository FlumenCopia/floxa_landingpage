"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";

export default function PixelmatorColorPicker() {
  // Angle in degrees. -90deg is 12 o'clock. Initial angle is -105deg (11:30), matching reference image
  const [angle, setAngle] = useState(-105);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const wheelRef = useRef<HTMLDivElement>(null);

  // Normalized clock angle starting from 12 o'clock (0deg = Red at 12 o'clock)
  const clockAngle = (angle + 90 + 360) % 360;
  const hueRotation = clockAngle;

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

  // Calculate pointer position on the color ring track (radius = 29.5%)
  const radiusPercent = 29.5;
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
          src="/images/pixelmator/hero_endframe__chfdpsnstqeu_xlarge.jpg"
          srcSet="
            /images/pixelmator/hero_endframe__chfdpsnstqeu_large.png 1068w,
            /images/pixelmator/hero_endframe__chfdpsnstqeu_xlarge.png 1440w
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
          {/* Outer circular translucent plate with subtle border */}
          <div className="absolute inset-0 rounded-full bg-[#161617]/85 backdrop-blur-md shadow-2xl border border-white/10" />

          {/* Left Pink Arc and Right White Arc matching Apple reference UI */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 200 200"
          >
            {/* Left Pink/Magenta Arc */}
            <path
              d="M 49.5,27.9 A 88 88 0 0 0 49.5,172.1"
              fill="none"
              stroke="#ff2d55"
              strokeWidth="3.5"
              strokeLinecap="round"
              className="drop-shadow-[0_0_4px_rgba(255,45,85,0.4)]"
            />
            {/* Right White/Silver Arc */}
            <path
              d="M 150.5,27.9 A 88 88 0 0 1 150.5,172.1"
              fill="none"
              stroke="rgba(240,240,245,0.85)"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
          </svg>

          {/* 3D Depth Colored Donut Wheel */}
          <div
            className="absolute w-[74%] h-[74%] rounded-full shadow-[0_4px_24px_rgba(0,0,0,0.6)] overflow-hidden"
            style={{
              maskImage: "radial-gradient(transparent 56%, black 58%)",
              WebkitMaskImage: "radial-gradient(transparent 56%, black 58%)",
            }}
          >
            {/* Conic Gradient Base matching Apple Color Palette */}
            <div
              className="w-full h-full"
              style={{
                background:
                  "conic-gradient(from 0deg, #ff0033 0%, #ff5500 12%, #ffcc00 25%, #28cd41 40%, #00e5ff 52%, #0066ff 66%, #5856d6 78%, #ff2d55 90%, #ff0033 100%)",
              }}
            />
            {/* 3D Inward Depth / Funnel Cone Shadow Overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at center, rgba(0,0,0,0.7) 56%, rgba(0,0,0,0.3) 76%, transparent 92%, rgba(255,255,255,0.1) 100%)",
              }}
            />
          </div>

          {/* Center Dark Aperture with Crosshair */}
          <div className="relative w-[42%] h-[42%] rounded-full bg-[#161617] border border-white/[0.08] flex items-center justify-center shadow-[inset_0_2px_8px_rgba(0,0,0,0.9)]">
            {/* Crosshair indicator */}
            <div className="relative w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center text-white/50 pointer-events-none">
              <div className="absolute w-full h-[1px] bg-white/40" />
              <div className="absolute h-full w-[1px] bg-white/40" />
            </div>
          </div>

          {/* The Interactive White Color Pointer Dot */}
          <div
            className="absolute w-5 h-5 sm:w-6 sm:h-6 md:w-[24px] md:h-[24px] rounded-full bg-white shadow-[0_2px_6px_rgba(0,0,0,0.7),0_0_10px_rgba(255,255,255,0.9)] border border-black/10 pointer-events-none transition-transform duration-75 group-hover:scale-110"
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
