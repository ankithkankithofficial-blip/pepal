import React, { useState, useEffect } from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import { Product } from '../types';
import heroBottle from '../assets/hero-bottle-wide.png';

interface HeroSectionProps {
  product: Product;
  onAddToCart: (p: Product) => void;
  onSelectSection: (id: string) => void;
  onOpenQuickView: (p: Product) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  product,
  onAddToCart,
  onSelectSection,
}) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full text-white font-mono flex flex-col justify-between pt-28 pb-8 px-6 md:px-12 overflow-hidden selection:bg-white selection:text-black"
      style={{
        backgroundColor: '#080808',
        backgroundImage: `url(${heroBottle})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Subtle top and bottom fades to blend seamlessly if page is scrolled */}
      <div className="absolute inset-x-0 top-0 h-40 pointer-events-none bg-gradient-to-b from-[#080808] to-transparent z-[1]" />
      <div className="absolute inset-x-0 bottom-0 h-40 pointer-events-none bg-gradient-to-t from-[#080808] to-transparent z-[1]" />

      {/* Dark overlay to ensure text legibility */}
      <div className="absolute inset-0 pointer-events-none z-[0]" style={{ backgroundColor: 'rgba(8,8,8,0.2)' }} />

      {/* Subtle green glow matching the bottle lighting */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_50%_at_50%_55%,_rgba(13,56,34,0.15)_0%,_transparent_70%)] z-[2]" />

      {/* Main Center Section */}
      <div className="relative z-10 my-auto flex flex-col items-center justify-center text-center py-12">
        {/* Headline: Wellness in Every Drop */}
        <h1
          style={{
            backgroundPosition: `${(scrollY * 0.25) % 200}% center`,
            transform: `translateY(${Math.min(scrollY * 0.12, 25)}px)`,
            opacity: Math.max(1 - scrollY / 700, 0.3),
          }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-sans tracking-tight select-none leading-none mb-2 md:-mb-6 animated-gradient-text transition-transform duration-75 ease-out"
        >
          Wellness in Every Drop
        </h1>

        {/* Center Showcase Area - Clean Minimal Blank Gradient */}
        <div className="relative w-full max-w-4xl h-[35vh] min-h-[260px] md:h-[45vh] my-6 flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Ambient Aura glow */}
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-tr from-emerald-500/10 via-amber-400/15 to-emerald-800/10 blur-3xl pointer-events-none" />
            <div className="absolute w-40 h-40 sm:w-56 sm:h-56 rounded-full bg-gradient-to-bl from-white/10 via-amber-200/5 to-transparent blur-2xl pointer-events-none" />
          </div>
        </div>

        {/* Center Pill Form matching Reference Image 1 */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md mx-auto relative z-20 mt-4"
        >
          {submitted ? (
            <div className="px-6 py-3 rounded-full border border-white/30 bg-white/10 text-white font-mono text-xs md:text-sm text-center backdrop-blur-md">
              ✓ Ticket Claimed. Welcome to Pepal.
            </div>
          ) : (
            <div className="flex items-center gap-2 px-5 py-3 rounded-full border border-white/20 bg-white/5 hover:border-white/40 focus-within:border-white/60 transition-all backdrop-blur-md">
              <Mail className="w-4 h-4 text-white/50 shrink-0" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email to claim ticket & explore."
                className="w-full bg-transparent text-white placeholder-white/40 font-mono text-xs md:text-sm focus:outline-none"
                required
              />
              <button
                type="submit"
                className="text-white/70 hover:text-white transition-colors shrink-0 p-1"
                aria-label="Submit"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

