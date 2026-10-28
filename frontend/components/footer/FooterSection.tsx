"use client";

import React, { useState } from "react";
import AppIcon from "../ui/AppIcon";

const footnotes = [
  "Some features of Apple Creator Studio require an Apple Intelligence–capable device. For a list of Apple Intelligence availability and technical requirements, see support.apple.com.",
  "New subscribers only. Plan renews at ₹399/month or ₹3999/year based on plan selected. Plan automatically renews until cancelled. Terms apply.",
  "New subscribers only. Plan automatically renews at ₹199/month or ₹1999/year based on plan selected until cancelled. College students and educators only. Verification is required. Terms apply. Limited-time offer; offer may end at any time.",
  "New and qualified returning subscribers only. Plan renews at ₹399/month or ₹3999/year based on plan selected. Only one offer per Apple Account and only one offer per family if you’re part of a Family Sharing group.",
  "Final Cut Camera is available on the App Store. Requires iPhone XS or later running iOS 18.6 or later, with some features requiring newer models.",
  "Visual Search requires a Mac with Apple silicon or an iPad with Apple M1 chip or later. Available only in US English.",
  "Transcript Search in Final Cut Pro requires a Mac with Apple silicon or an iPad with Apple M1 chip or later. Available only in US English.",
  "Some content, including motion graphics, templates and plug-ins, is made available by third parties and is subject to their terms and conditions.",
  "Apple Pencil is sold separately.",
  "Requires that your iPad and Mac are signed in with the same Apple Account.",
  "Session Players require iPad with Apple M1 chip or later or Mac with Apple silicon.",
];

export default function FooterSection() {
  const [showAllFootnotes, setShowAllFootnotes] = useState(false);

  return (
    <footer className="bg-[#161617] text-[#86868b] text-[12px] leading-relaxed border-t border-white/[0.08] pt-12 pb-16">
      <div className="max-w-[1024px] mx-auto px-4">
        {/* Footnotes List */}
        <div className="border-b border-white/[0.08] pb-8 mb-8">
          <ol className="space-y-3 list-decimal list-inside text-[#86868b]">
            {(showAllFootnotes ? footnotes : footnotes.slice(0, 4)).map((note, idx) => (
              <li key={idx} className="pl-1">
                {note}
              </li>
            ))}
          </ol>
          {footnotes.length > 4 && (
            <button
              onClick={() => setShowAllFootnotes(!showAllFootnotes)}
              className="mt-3 text-[#2997ff] hover:underline"
            >
              {showAllFootnotes ? "Show less" : `Show ${footnotes.length - 4} more footnotes`}
            </button>
          )}
        </div>

        {/* Breadcrumb Path */}
        <nav aria-label="Breadcrumbs" className="flex items-center gap-2 mb-8 text-[12px] text-white/70">
          <a href="https://www.apple.com/in/" className="hover:text-white transition-colors">
            <AppIcon name="apple" size={14} />
          </a>
          <span>›</span>
          <span className="text-white">Apple Creator Studio</span>
        </nav>

        {/* 5-Column Directory */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 border-b border-white/[0.08] pb-12 mb-8">
          {/* Col 1 */}
          <div className="space-y-6">
            <div>
              <h4 className="text-white font-medium mb-3 text-[12px]">Shop and Learn</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Store</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mac</a></li>
                <li><a href="#" className="hover:text-white transition-colors">iPad</a></li>
                <li><a href="#" className="hover:text-white transition-colors">iPhone</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Watch</a></li>
                <li><a href="#" className="hover:text-white transition-colors">AirPods</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Accessories</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-3 text-[12px]">Apple Wallet</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Wallet</a></li>
              </ul>
            </div>
          </div>

          {/* Col 2 */}
          <div className="space-y-6">
            <div>
              <h4 className="text-white font-medium mb-3 text-[12px]">Account</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Manage Your Apple Account</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Apple Store Account</a></li>
                <li><a href="#" className="hover:text-white transition-colors">iCloud.com</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-3 text-[12px]">Entertainment</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Apple TV+</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Apple Music</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Apple Arcade</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Apple Podcasts</a></li>
              </ul>
            </div>
          </div>

          {/* Col 3 */}
          <div className="space-y-6">
            <div>
              <h4 className="text-white font-medium mb-3 text-[12px]">Apple Store</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Find a Store</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Genius Bar</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Today at Apple</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Apple Camp</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Apple Trade In</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Order Status</a></li>
              </ul>
            </div>
          </div>

          {/* Col 4 */}
          <div className="space-y-6">
            <div>
              <h4 className="text-white font-medium mb-3 text-[12px]">For Business</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Apple and Business</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shop for Business</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-3 text-[12px]">For Education</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Apple and Education</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shop for Education</a></li>
              </ul>
            </div>
          </div>

          {/* Col 5 */}
          <div className="space-y-6">
            <div>
              <h4 className="text-white font-medium mb-3 text-[12px]">Apple Values</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Accessibility</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Environment</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-3 text-[12px]">About Apple</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Newsroom</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Apple Leadership</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Career Opportunities</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Investors</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Regional info */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[11px] text-[#86868b]">
          <div>
            Copyright © 2026 Apple Inc. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Sales Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Legal</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Site Map</a>
          </div>

          <div className="text-white/80 font-medium">
            India
          </div>
        </div>
      </div>
    </footer>
  );
}
