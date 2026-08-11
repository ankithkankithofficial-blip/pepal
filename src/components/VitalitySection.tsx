import React from 'react';
import { Product } from '../types';

interface VitalitySectionProps {
  product: Product;
  onAddToCart: (p: Product) => void;
  onOpenQuickView: (p: Product) => void;
}

export const VitalitySection: React.FC<VitalitySectionProps> = ({
  product,
  onAddToCart,
}) => {
  return (
    <section
      id="vitality-system"
      className="relative min-h-screen w-full bg-[#0e221b] text-white font-sans flex items-center justify-center py-16 px-6 md:px-16 overflow-hidden selection:bg-[#c5a059] selection:text-black"
    >
      {/* Rich Film Grain Texture Overlay */}
      <div className="absolute inset-0 opacity-50 pointer-events-none mix-blend-overlay z-0">
        <svg className="w-full h-full">
          <filter id="vitalityNoise">
            <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
            <feComponentTransfer>
              <feFuncR type="linear" slope="1.5" />
              <feFuncG type="linear" slope="1.5" />
              <feFuncB type="linear" slope="1.5" />
            </feComponentTransfer>
          </filter>
          <rect width="100%" height="100%" fill="#808080" filter="url(#vitalityNoise)" />
        </svg>
      </div>

      {/* Background Ambient Lighting & Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(24,57,45,0.7),transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#c5a059]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column Content */}
        <div className="lg:col-span-6 space-y-6 text-left">
          <h2 className="text-4xl sm:text-6xl md:text-6xl lg:text-7xl font-bold font-sans tracking-tight text-[#c5a059] leading-[1.05] drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
            Purity Meets Perfection
          </h2>
          <p className="font-sans text-xs sm:text-sm text-white/80 max-w-md leading-relaxed">
            Elevate your daily ritual with thoughtful design, timeless aesthetics, and understated luxury crafted for every moment.
          </p>
          <div className="pt-4">
            <button
              onClick={() => onAddToCart(product)}
              className="bg-[#c5a059] hover:bg-[#d4af37] text-[#0e221b] font-sans font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded-full shadow-lg transition-transform active:scale-95 cursor-pointer"
            >
              Shop Collection
            </button>
          </div>
        </div>

        {/* Right Column Product Showcase Image featuring the two Pepal bottles */}
        <div className="lg:col-span-6 flex justify-center items-center">
          <div className="relative w-full max-w-lg aspect-[4/3] flex items-center justify-center">
            <img
              src={product.image}
              alt="PEPAL Executive Twin Bottle Set"
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain object-center drop-shadow-[0_25px_60px_rgba(0,0,0,0.6)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};


