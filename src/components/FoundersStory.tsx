import React from 'react';
import { MapPin, Mail, Phone, Globe } from 'lucide-react';

export const FoundersStory: React.FC = () => {
  return (
    <section id="founders-story" className="py-24 bg-[#030d07] relative border-b border-[#c5a059]/20 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column - Founder Letter */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <h2 className="font-sans text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
              Crafted with Purpose, <br />
              <span className="gold-gradient-text font-semibold">Engineered for Perfection</span>
            </h2>

            <div className="space-y-4 text-slate-300 font-sans text-sm sm:text-base leading-relaxed">
              <p>
                "At PEPAL, we believe hydration should never be an afterthought. In a world saturated with single-use plastic and synthetic materials, we set out to build the ultimate vessel—one that marries ancient Indian botanical wisdom with modern thermal optics."
              </p>
              <p>
                "From our headquarters in Kochi, Kerala, every PEPAL vessel is individually inspected, weight-balanced, and hand-finished. We are proud to present our Batch #01 flagship collection to discerning individuals worldwide."
              </p>
            </div>

            <div className="pt-4 border-t border-[#c5a059]/20 flex items-center justify-between font-sans">
              <div>
                <div className="font-sans text-xl font-bold gold-gradient-text">Rahul Jain</div>
                <div className="text-xs text-slate-400 font-sans">Founder & CEO, PEPAL</div>
              </div>
              <div className="text-right font-sans">
                <div className="text-xs text-[#d4af37]">Kochi, Kerala, India</div>
                <div className="text-[10px] text-slate-500">Global Shipping Available</div>
              </div>
            </div>
          </div>

          {/* Right Column - Official Contact Details */}
          <div className="lg:col-span-5 relative">
            <div className="p-8 rounded-3xl bg-gradient-to-b from-[#0a2316] via-[#06170d] to-[#020a05] border border-[#c5a059]/40 shadow-2xl space-y-6 font-sans">
              
              {/* Card Header */}
              <div className="border-b border-[#c5a059]/20 pb-6 flex items-center justify-between">
                <div>
                  <div className="font-sans text-3xl font-bold tracking-[0.2em] gold-gradient-text">
                    PEPAL
                  </div>
                  <div className="text-[10px] font-sans text-slate-400 tracking-widest uppercase mt-1 font-semibold">
                    OFFICIAL HEADQUARTERS
                  </div>
                </div>
                <div className="w-12 h-12 rounded-full bg-[#0e311f] border border-[#c5a059]/50 flex items-center justify-center font-sans font-bold text-xl text-[#fceabb]">
                  P
                </div>
              </div>

              {/* Direct Details */}
              <div className="space-y-4 font-sans text-xs text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#d4af37] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-semibold">Address:</span>
                    <p className="text-slate-400 mt-0.5 leading-relaxed">
                      34/549, A, NH Bypass Road, Service Rd, opposite Hotel Highway Garden, Padivattom, Edappally, Kochi, Kerala 682024
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
                  <div>
                    <span className="text-white font-semibold">Phone / WhatsApp:</span>
                    <a href="tel:+917012142912" className="text-[#fceabb] hover:underline ml-2">
                      +91 7012142912
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
                  <div>
                    <span className="text-white font-semibold">Founder Email:</span>
                    <a href="mailto:rahja@pepal.co.in" className="text-[#fceabb] hover:underline ml-2">
                      rahja@pepal.co.in
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Globe className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
                  <div>
                    <span className="text-white font-semibold">Official Website:</span>
                    <span className="text-[#fceabb] ml-2">PEPAL.co.in</span>
                  </div>
                </div>
              </div>

              {/* Verified Trust Badge */}
              <div className="pt-4 border-t border-[#c5a059]/20 flex items-center justify-between text-[11px] font-sans text-emerald-400 font-medium">
                <span>✓ Verified Enterprise Founder</span>
                <span>Batch #01 Direct</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

