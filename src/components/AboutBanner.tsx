import React from 'react';

export const AboutBanner: React.FC = () => {
  return (
    <section
      id="about-pepal"
      className="relative w-full bg-[#f8f9fa] text-slate-900 font-sans py-28 px-6 sm:px-12 md:px-16 overflow-hidden flex flex-col items-center justify-center text-center border-t border-slate-200/80"
    >
      {/* Background High-Key Mountain / Natural Mineral Backdrop */}
      <div className="absolute inset-0 z-0 opacity-15 mix-blend-multiply pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=2000"
          alt="Glacier mountains"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter grayscale contrast-125"
        />
      </div>

      {/* Subtle Gold / Water Lighting Aura */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(197,160,89,0.12),transparent_70%)] pointer-events-none z-0" />

      {/* High-Key Film Grain Texture */}
      <div className="absolute inset-0 opacity-40 pointer-events-none mix-blend-overlay z-0">
        <svg className="w-full h-full">
          <filter id="aboutNoise">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" fill="#808080" filter="url(#aboutNoise)" />
        </svg>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto space-y-6">
        <span className="text-[11px] font-sans font-semibold tracking-[0.25em] text-slate-500 uppercase block">
          ABOUT PEPAL
        </span>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-slate-950 leading-[1.15]">
          Purity, precision and elegance in every drop.
        </h2>

        <div className="pt-4">
          <a
            href="#smart-vessel"
            className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-slate-900 text-white font-sans text-xs sm:text-sm font-medium hover:bg-black transition-all shadow-sm hover:shadow-md cursor-pointer"
          >
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
};
