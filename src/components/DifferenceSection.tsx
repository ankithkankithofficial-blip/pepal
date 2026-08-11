import React from 'react';
import { Product } from '../types';

interface DifferenceSectionProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onOpenQuickView: (product: Product) => void;
}

export const DifferenceSection: React.FC<DifferenceSectionProps> = ({
  product,
  onAddToCart,
  onOpenQuickView,
}) => {
  return (
    <section
      id="difference-section"
      className="bg-black text-white font-sans py-24 px-6 md:px-12 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto space-y-16 text-center">
        {/* Top Header */}
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white max-w-3xl mx-auto leading-tight">
            What makes PEPAL different makes it better
          </h2>
        </div>

        {/* Center Stadium / Pill Capsule Container with Bottle */}
        <div className="relative w-full max-w-4xl mx-auto flex items-center justify-center">
          <div className="w-full bg-[#dcdcdc] rounded-[80px] sm:rounded-[120px] md:rounded-[140px] py-12 sm:py-16 md:py-20 px-8 flex items-center justify-center shadow-2xl relative overflow-hidden group transition-transform duration-500 hover:scale-[1.01]">
            {/* Soft backdrop glow inside pill */}
            <div className="absolute inset-0 bg-radial from-white/60 via-transparent to-transparent pointer-events-none" />

            {/* Product Image inside Capsule */}
            <img
              src={product.image}
              alt={product.name}
              referrerPolicy="no-referrer"
              onClick={() => onOpenQuickView(product)}
              className="relative z-10 h-60 sm:h-80 md:h-96 w-auto object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.35)] transition-transform duration-300 group-hover:scale-105 cursor-pointer"
            />
          </div>
        </div>

        {/* Bottom Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start text-left max-w-4xl mx-auto pt-4">
          {/* Left Text */}
          <div className="md:col-span-5 space-y-3">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
              No leaks. No plastic. Just purity.
            </h3>
          </div>

          {/* Right Text + Action */}
          <div className="md:col-span-7 space-y-6">
            <p className="text-slate-300 text-xs sm:text-sm font-normal leading-relaxed">
              We believe better water starts with thoughtful design. From the materials we choose to the way each product fits into your daily routine, PEPAL brings together quality, simplicity, and a more considered approach to everyday hydration.
            </p>

            <div>
              <button
                onClick={() => onOpenQuickView(product)}
                className="bg-white hover:bg-slate-200 text-black font-sans font-bold text-xs uppercase tracking-wider px-7 py-3 rounded-full transition-all shadow-md active:scale-95 cursor-pointer"
              >
                DISCOVER THE DIFFERENCE
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Centered CTA */}
        <div className="pt-8 flex justify-center">
          <button
            onClick={() => onAddToCart(product)}
            className="bg-white hover:bg-slate-200 text-black font-sans font-bold text-xs uppercase tracking-widest px-8 py-3.5 rounded-full shadow-lg transition-transform active:scale-95 cursor-pointer"
          >
            SHOP NOW
          </button>
        </div>
      </div>
    </section>
  );
};
