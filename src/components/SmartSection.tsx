import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Product } from '../types';
import bottleTop from '../assets/bottle-top.png';

interface SmartSectionProps {
  product: Product;
  onAddToCart: (p: Product) => void;
  onOpenQuickView: (p: Product) => void;
}

export const SmartSection: React.FC<SmartSectionProps> = ({
  product,
  onAddToCart,
}) => {
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll progress for section 2 to drive smooth rising bottle animation
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'center center'],
  });

  const bottleY = useTransform(scrollYProgress, [0, 1], [180, 0]);
  const bottleScale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const bottleOpacity = useTransform(scrollYProgress, [0, 0.6, 1], [0.2, 0.9, 1]);

  return (
    <section
      ref={sectionRef}
      id="smart-vessel"
      className="relative min-h-screen w-full bg-gradient-to-b from-[#c5a059] via-[#b68d40] to-[#9e792c] text-[#140f07] font-sans flex flex-col justify-between py-16 px-6 md:px-16 overflow-hidden selection:bg-[#140f07] selection:text-white"
    >
      {/* Rich Film Grain Texture Overlay */}
      <div className="absolute inset-0 opacity-60 pointer-events-none mix-blend-overlay z-0">
        <svg className="w-full h-full">
          <filter id="smartNoise">
            <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
            <feComponentTransfer>
              <feFuncR type="linear" slope="1.5" />
              <feFuncG type="linear" slope="1.5" />
              <feFuncB type="linear" slope="1.5" />
            </feComponentTransfer>
          </filter>
          <rect width="100%" height="100%" fill="#808080" filter="url(#smartNoise)" />
        </svg>
      </div>

      {/* Background Ambient Lighting & Details */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(252,234,187,0.35),transparent_65%)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#fceabb]/20 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Absolute, enlarged bottle pushed much lower */}
      <motion.div
        style={{ y: bottleY, scale: bottleScale, opacity: bottleOpacity }}
        className="absolute inset-x-0 -bottom-[25vh] mx-auto w-full max-w-[1000px] h-[100vh] flex items-end justify-center z-[5] pointer-events-none"
      >
        <img
          src={bottleTop}
          alt="Eco Pulse Smart Water Bottle"
          referrerPolicy="no-referrer"
          className="w-full h-full object-contain object-bottom drop-shadow-[0_30px_70px_rgba(0,0,0,0.5)]"
        />
      </motion.div>

      {/* Text Content - Moved higher to the top */}
      <div className="relative z-20 max-w-6xl mx-auto w-full flex-1 flex flex-col items-center justify-start pt-0 md:pt-2">
        {/* Display Headline */}
        <div className="w-full text-center z-20">
          <h2 className="font-sans font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-[#140f07] leading-[1.05] drop-shadow-sm">
            Because you deserve better hydration.
          </h2>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="relative z-20 max-w-6xl mx-auto w-full mt-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-[#1a1309]/80 backdrop-blur-md border border-[#fceabb]/20 rounded-2xl p-5 shadow-2xl">
          <p className="text-[#fceabb] font-sans text-xs sm:text-sm max-w-md leading-relaxed text-left font-normal">
            The smart water bottle that monitors water quality and keeps you feeling your best every day.
          </p>
          <button
            onClick={() => onAddToCart(product)}
            className="bg-[#fceabb] hover:bg-white text-[#1a1309] font-sans font-bold px-8 py-3 rounded-xl text-xs uppercase tracking-wider transition-all shadow-md shrink-0 cursor-pointer w-full sm:w-auto"
          >
            Order now
          </button>
        </div>
      </div>
    </section>
  );
};


