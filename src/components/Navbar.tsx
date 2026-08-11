import React, { useState } from 'react';
import { ShoppingCart, ChevronDown, Menu, X } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onSelectSection: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart, onSelectSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Collections', id: 'our-collections', hasChevron: true },
    { name: 'Shop', id: 'vitality-system', hasChevron: false },
    { name: 'Benefits', id: 'smart-vessel', hasChevron: false },
    { name: 'About', id: 'founders-story', hasChevron: false },
    { name: 'Contact', id: 'contact', hasChevron: false },
  ];

  return (
    <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
      {/* Floating Frosted Pill Navbar matching Reference Image 2 */}
      <div className="bg-[#2a2a2a]/60 backdrop-blur-md border border-white/10 rounded-2xl md:rounded-full px-6 py-3.5 flex items-center justify-between shadow-2xl transition-all">
        {/* Brand Logo - PEPAL */}
        <button
          onClick={() => onSelectSection('hero')}
          className="flex items-center gap-2 group text-left"
        >
          <img 
            src={logoImg} 
            alt="PEPAL" 
            className="h-7 md:h-8 w-auto mix-blend-screen group-hover:opacity-80 transition-opacity" 
          />
        </button>

        {/* Center Desktop Navigation - Exactly 5 options */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-white/90">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => onSelectSection(link.id)}
              className="hover:text-white transition-colors flex items-center gap-1.5 py-1 text-sm font-sans"
            >
              <span>{link.name}</span>
              {link.hasChevron && (
                <ChevronDown className="w-3.5 h-3.5 opacity-70 stroke-[1.5]" />
              )}
            </button>
          ))}
        </nav>

        {/* Right Action: Circular Cart Icon as shown in Reference Image 2 */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenCart}
            className="relative w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all flex items-center justify-center shadow-inner"
            aria-label="Cart"
          >
            <ShoppingCart className="w-4 h-4 text-white stroke-[1.75]" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#d4af37] text-black font-bold text-[10px] flex items-center justify-center shadow">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 bg-[#121212]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 space-y-4 shadow-2xl text-white">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => {
                onSelectSection(link.id);
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 text-base font-medium border-b border-white/10 hover:text-[#d4af37] transition-colors flex items-center justify-between"
            >
              <span>{link.name}</span>
              {link.hasChevron && <ChevronDown className="w-4 h-4 opacity-50" />}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

