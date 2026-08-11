import React from 'react';
import { Instagram, Linkedin, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="w-full font-sans">
      {/* Top Main Footer: Light Ice-Blue Section */}
      <div className="bg-[#e5f3fb] text-slate-900 py-20 px-8 sm:px-12 md:px-16 w-full">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Heading & Social Icons */}
          <div className="md:col-span-6 space-y-6 text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-slate-950">
              Follow our journey
            </h2>

            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-md bg-transparent border border-slate-700/60 flex items-center justify-center text-slate-800 hover:text-black hover:border-black transition-colors cursor-pointer"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-md bg-transparent border border-slate-700/60 flex items-center justify-center text-slate-800 hover:text-black hover:border-black transition-colors cursor-pointer"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-md bg-transparent border border-slate-700/60 flex items-center justify-center text-slate-800 hover:text-black hover:border-black transition-colors cursor-pointer"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Columns: Collections & Company */}
          <div className="md:col-span-6 grid grid-cols-2 gap-8 text-left text-xs sm:text-sm">
            
            {/* Column 1: COLLECTIONS */}
            <div className="space-y-4">
              <h3 className="text-[11px] font-bold text-slate-900 tracking-wider uppercase font-sans">
                COLLECTIONS
              </h3>
              <ul className="space-y-3 font-normal text-slate-700">
                <li className="hover:text-black transition-colors cursor-pointer">Glass bottle</li>
                <li className="hover:text-black transition-colors cursor-pointer">Recycled Titanium</li>
                <li className="hover:text-black transition-colors cursor-pointer">Executive Twin Duo</li>
                <li className="hover:text-black transition-colors cursor-pointer">PEPAL+ Smart UV</li>
                <li className="hover:text-black transition-colors cursor-pointer pt-1 font-medium">All collections</li>
              </ul>
            </div>

            {/* Column 2: COMPANY */}
            <div className="space-y-4">
              <h3 className="text-[11px] font-bold text-slate-900 tracking-wider uppercase font-sans">
                COMPANY
              </h3>
              <ul className="space-y-3 font-normal text-slate-700">
                <li className="hover:text-black transition-colors cursor-pointer">About</li>
                <li className="hover:text-black transition-colors cursor-pointer">Sustainability</li>
                <li className="hover:text-black transition-colors cursor-pointer">Events & Collaboration</li>
                <li className="hover:text-black transition-colors cursor-pointer">Where to find us</li>
                <li className="hover:text-black transition-colors cursor-pointer">Contact PEPAL</li>
                <li className="hover:text-black transition-colors cursor-pointer">Visit PEPAL India</li>
                <li className="hover:text-black transition-colors cursor-pointer">FAQs</li>
              </ul>
            </div>

          </div>

        </div>
      </div>

      {/* Bottom Legal Strip: White Section */}
      <div className="bg-white py-6 px-8 sm:px-12 md:px-16 w-full border-t border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="text-2xl font-black tracking-[0.25em] text-slate-950 uppercase font-sans">
            PEPAL
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-8 text-[11px] font-bold tracking-wider text-slate-900 uppercase">
            <a href="#terms" className="hover:underline transition-all">
              TERMS AND CONDITIONS
            </a>
            <a href="#privacy" className="hover:underline transition-all">
              PRIVACY NOTICE
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};


