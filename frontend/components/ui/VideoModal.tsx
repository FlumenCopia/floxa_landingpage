"use client";

import React, { useEffect } from "react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

export default function VideoModal({ isOpen, onClose, title = "Apple Creator Studio — Launch Film" }: VideoModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/90 backdrop-blur-xl animate-fade-in">
      <div className="relative w-full max-w-5xl bg-[#161617] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
            <span className="ml-2 text-sm font-medium text-white/80">{title}</span>
          </div>
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white p-1 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Video / Interactive Player simulation */}
        <div className="relative aspect-video bg-black flex items-center justify-center group overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/30 via-blue-900/20 to-red-900/30 animate-pulse" />
          
          <img
            src="https://www.apple.com/v/apple-creator-studio/a/images/overview/meta/apple_creator_studio__8fowap956lem_og.png?202607030118"
            alt="Apple Creator Studio Film Preview"
            className="w-full h-full object-cover opacity-80"
          />

          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center gap-4 text-center px-6">
            <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md ring-1 ring-white/40 flex items-center justify-center text-white pl-1 shadow-2xl">
              <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <h4 className="text-2xl font-semibold text-white">Apple Creator Studio</h4>
            <p className="text-white/70 max-w-md text-sm">
              Watch how creators transform video, audio, and visual ideas with Final Cut Pro, Logic Pro, and Pixelmator Pro.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
