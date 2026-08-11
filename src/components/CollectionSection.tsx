import React, { useState } from 'react';
import { Product } from '../types';
import { ArrowRight } from 'lucide-react';
import bottleFull from '../assets/bottle-full.png';

interface CollectionSectionProps {
  products: Product[];
  onOpenQuickView: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const CollectionSection: React.FC<CollectionSectionProps> = ({
  products,
  onOpenQuickView,
  onAddToCart,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const collections = [
    {
      id: 'minerals',
      title: 'Natural Minerals',
      product: products[0],
      description:
        'PEPAL brings natural mineral considerations into your everyday hydration routine, combining thoughtful water solutions with carefully selected materials to create a more refined and considered way to enjoy your water throughout the day.',
      sizes: '375ml | 800ml',
    },
    {
      id: 'alkaline',
      title: 'Alkaline Balance',
      product: products[1] || products[0],
      description:
        'PEPAL One and SpringStone work together as a simple, considered approach to alkaline water, bringing a mineral-focused element to everyday hydration while keeping the experience practical, portable and easy to incorporate into your daily routine.',
      sizes: '550ml | 750ml',
    },
    {
      id: 'convenience',
      title: 'Everyday Convenience',
      product: products[2] || products[0],
      description:
        'From taking PEPAL One with you throughout the day to maintaining your PEPAL Silk with convenient replacement filters, every product is designed around real everyday routines, making better water experiences simple to use, maintain and enjoy.',
      sizes: '500ml & 750ml',
    },
    {
      id: 'materials',
      title: 'Premium Materials',
      product: products[3] || products[0],
      description:
        'From clear glass and refined metal components to carefully considered finishes, PEPAL focuses on materials that feel as good as they look, bringing together durability, functionality and a premium aesthetic across every part of the product experience.',
      sizes: '600ml | 800ml',
    },
  ];

  const current = collections[activeIndex];

  return (
    <section
      id="our-collections"
      className="bg-[#f4f4f6] text-slate-900 font-sans py-20 px-4 sm:px-8 md:px-12 w-full relative overflow-hidden border-t border-b border-slate-200/80"
    >
      <div className="max-w-[1400px] mx-auto space-y-10">
        {/* Top Header Label */}
        <div className="pl-0 md:pl-2">
          <span className="text-[11px] font-sans font-semibold tracking-widest text-slate-400 uppercase">
            OUR COLLECTIONS
          </span>
        </div>

        {/* Main Grid: Left Tabs, Center Bottle, Right Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Interactive Tab List (Shifted slightly left) */}
          <div className="lg:col-span-5 space-y-6 text-left lg:-ml-3">
            <div className="flex flex-col space-y-5">
              {collections.map((item, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveIndex(idx)}
                    className="group text-left focus:outline-none cursor-pointer transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`text-2xl sm:text-3xl md:text-4xl lg:text-[2.2rem] transition-all duration-300 ${
                          isActive
                            ? 'text-black font-medium tracking-tight'
                            : 'text-slate-300 hover:text-slate-500 font-normal'
                        }`}
                      >
                        {item.title}
                      </span>
                      {isActive && (
                        <span className="text-black text-2xl sm:text-3xl md:text-4xl transition-opacity duration-300 font-normal">
                          →
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Center Column: Active Bottle Image Display (Larger image height) */}
          <div className="lg:col-span-4 flex items-center justify-center min-h-[420px] sm:min-h-[520px] relative py-4">
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Subtle background pedestal blur */}
              <div className="absolute w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-slate-300/25 blur-3xl pointer-events-none" />
              
              <img
                key={current.id}
                src={bottleFull}
                alt={current.product.name}
                referrerPolicy="no-referrer"
                onClick={() => onOpenQuickView(current.product)}
                className="relative z-10 h-[380px] sm:h-[480px] md:h-[540px] lg:h-[580px] w-auto max-w-full object-contain drop-shadow-[0_25px_40px_rgba(0,0,0,0.18)] transition-all duration-500 ease-out hover:scale-[1.03] cursor-pointer"
              />
            </div>
          </div>

          {/* Right Column: Detailed Description & Collection Actions (Bigger description text) */}
          <div className="lg:col-span-3 space-y-8 text-left pl-0 lg:pl-2">
            <div className="space-y-6">
              <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed font-normal max-w-md">
                {current.description}
              </p>

              <div>
                <button
                  onClick={() => onOpenQuickView(current.product)}
                  className="inline-flex items-center gap-2 text-black font-sans font-semibold text-sm sm:text-base tracking-tight hover:opacity-75 transition-opacity cursor-pointer group"
                >
                  <span>→ Explore collection</span>
                </button>
              </div>
            </div>

            {/* Bottom Size Thumbnails & Spec Indicator */}
            <div className="pt-6 border-t border-slate-200/80 flex items-center gap-4">
              <div className="flex items-end gap-2 bg-white/80 backdrop-blur-sm p-2 rounded-xl border border-slate-200/60 shadow-sm">
                <img
                  src={bottleFull}
                  alt={current.product.name}
                  referrerPolicy="no-referrer"
                  className="h-10 w-auto object-contain"
                />
                <img
                  src={bottleFull}
                  alt={current.product.name}
                  referrerPolicy="no-referrer"
                  className="h-7 w-auto object-contain opacity-70"
                />
              </div>

              <div className="space-y-0.5">
                <span className="block text-[12px] font-bold text-slate-800">
                  PEPAL {current.title.split(' ')[0]}
                </span>
                <span className="block text-[11px] text-slate-500 font-medium">
                  {current.sizes}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
