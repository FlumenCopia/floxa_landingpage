"use client";

import React, { useState } from "react";
import AppIcon from "../ui/AppIcon";

const navLinks = [
  { name: "Store", href: "https://www.apple.com/in/shop/goto/store" },
  { name: "Mac", href: "https://www.apple.com/in/mac/" },
  { name: "iPad", href: "https://www.apple.com/in/ipad/" },
  { name: "iPhone", href: "https://www.apple.com/in/iphone/" },
  { name: "Watch", href: "https://www.apple.com/in/watch/" },
  { name: "AirPods", href: "https://www.apple.com/in/airpods/" },
  { name: "TV & Home", href: "https://www.apple.com/in/home/" },
  { name: "Entertainment", href: "https://www.apple.com/in/entertainment/" },
  { name: "Accessories", href: "https://www.apple.com/in/shop/goto/buy_accessories" },
  { name: "Support", href: "https://support.apple.com/en-in/" },
];

export default function GlobalNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/[0.08] text-xs">
      <div className="max-w-[1024px] mx-auto px-4 h-11 flex items-center justify-between">
        {/* Apple Logo */}
        <a
          href="https://www.apple.com/in/"
          className="text-white/80 hover:text-white transition-opacity"
          aria-label="Apple Home"
        >
          <AppIcon name="apple" size={16} />
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center space-x-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[#cccccc] hover:text-white transition-colors tracking-tight text-[12px] font-normal"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Action Icons: Search & Bag & Mobile Hamburger */}
        <div className="flex items-center space-x-6">
          {/* Search Button */}
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="text-white/80 hover:text-white transition-colors"
            aria-label="Search apple.com"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 16 16">
              <path d="M15.5 14l-3.9-3.9c.8-1 1.4-2.3 1.4-3.6 0-3-2.5-5.5-5.5-5.5S2 3.5 2 6.5s2.5 5.5 5.5 5.5c1.3 0 2.6-.6 3.6-1.4l3.9 3.9.5-.5zM3.5 6.5c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z" />
            </svg>
          </button>

          {/* Bag Button */}
          <a
            href="https://www.apple.com/in/shop/goto/bag"
            className="text-white/80 hover:text-white transition-colors"
            aria-label="Shopping Bag"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 16 16">
              <path d="M12.5 4h-2V3a2.5 2.5 0 00-5 0v1h-2C2.7 4 2 4.7 2 5.5v8c0 .8.7 1.5 1.5 1.5h9c.8 0 1.5-.7 1.5-1.5v-8c0-.8-.7-1.5-1.5-1.5zM6.5 3a1.5 1.5 0 013 0v1h-3V3zm6 10.5h-9v-8h2v1h1v-1h3v1h1v-1h2v8z" />
            </svg>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white/80 hover:text-white p-1"
            aria-label="Toggle navigation menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Expandable Search Input Tray */}
      {searchOpen && (
        <div className="border-t border-white/10 bg-black/95 px-4 py-3 animate-fade-in">
          <div className="max-w-[700px] mx-auto flex items-center gap-3">
            <svg className="w-4 h-4 text-neutral-400 fill-current" viewBox="0 0 16 16">
              <path d="M15.5 14l-3.9-3.9c.8-1 1.4-2.3 1.4-3.6 0-3-2.5-5.5-5.5-5.5S2 3.5 2 6.5s2.5 5.5 5.5 5.5c1.3 0 2.6-.6 3.6-1.4l3.9 3.9.5-.5zM3.5 6.5c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z" />
            </svg>
            <input
              type="text"
              placeholder="Search apple.com"
              className="w-full bg-transparent text-sm text-white focus:outline-none placeholder:text-neutral-500"
              autoFocus
            />
            <button
              onClick={() => setSearchOpen(false)}
              className="text-xs text-neutral-400 hover:text-white"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-black/95 px-6 py-6 space-y-4 animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-lg font-medium text-[#e0e0e0] hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
