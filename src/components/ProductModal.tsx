import React, { useState } from 'react';
import { Product } from '../types';
import { X, Star, ShieldCheck, Truck, RotateCcw, Check, ShoppingBag, Sparkles } from 'lucide-react';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (p: Product, capacity: string, color: string, engraving: string) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose, onAddToCart }) => {
  if (!product) return null;

  const [selectedCapacity, setSelectedCapacity] = useState(product.capacityOptions[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0].name);
  const [engravingText, setEngravingText] = useState('');
  const [activeTab, setActiveTab] = useState<'overview' | 'specs' | 'materials'>('overview');
  const [addedToast, setAddedToast] = useState(false);

  const handleAdd = () => {
    onAddToCart(product, selectedCapacity, selectedColor, engravingText);
    setAddedToast(true);
    setTimeout(() => {
      setAddedToast(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl rounded-3xl bg-[#07180f] border border-[#c5a059]/40 text-white p-6 sm:p-8 shadow-2xl space-y-6 my-8 my-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-[#0d2a1b] border border-[#c5a059]/30 text-slate-300 hover:text-white hover:border-[#d4af37]"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Left Column - Large Image Preview */}
          <div className="md:col-span-6 space-y-4">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-[#c5a059]/30 bg-[#040e08]">
              <img
                src={product.image}
                alt={product.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/80 border border-[#c5a059]/40 text-xs font-mono text-[#fceabb]">
                {product.badge || 'Luxury Edition'}
              </span>
            </div>

            {/* Micro badges */}
            <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-mono text-slate-300">
              <div className="p-2 rounded-xl bg-[#0c2417] border border-[#c5a059]/20 flex flex-col items-center gap-1">
                <Truck className="w-4 h-4 text-[#d4af37]" />
                <span>Free Express Air</span>
              </div>
              <div className="p-2 rounded-xl bg-[#0c2417] border border-[#c5a059]/20 flex flex-col items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
                <span>Lifetime Warranty</span>
              </div>
              <div className="p-2 rounded-xl bg-[#0c2417] border border-[#c5a059]/20 flex flex-col items-center gap-1">
                <RotateCcw className="w-4 h-4 text-[#d4af37]" />
                <span>30-Day Guarantee</span>
              </div>
            </div>
          </div>

          {/* Right Column - Product Configurator & Purchasing */}
          <div className="md:col-span-6 space-y-6 text-left">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#d4af37] mb-1">
                <div className="flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-[#d4af37]" />
                  <span className="font-bold">{product.rating}</span>
                </div>
                <span>•</span>
                <span>{product.reviewCount} Verified Luxury Buyer Reviews</span>
              </div>

              <h2 className="font-serif text-3xl font-bold text-white">{product.name}</h2>
              <p className="text-xs font-sans text-slate-300 mt-1">{product.tagline}</p>

              <div className="flex items-baseline gap-3 mt-3">
                <span className="text-3xl font-mono font-bold text-[#fceabb]">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-sm font-mono text-slate-400 line-through">${product.originalPrice}</span>
                )}
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                  Batch #1 Available ({product.stockCount} Left)
                </span>
              </div>
            </div>

            {/* Configurator 1: Capacity Picker */}
            <div className="space-y-2">
              <label className="text-xs font-mono text-slate-300 uppercase">SELECT VESSEL CAPACITY:</label>
              <div className="flex gap-3 font-mono text-xs">
                {product.capacityOptions.map((cap) => (
                  <button
                    key={cap}
                    onClick={() => setSelectedCapacity(cap)}
                    className={`flex-1 py-2.5 rounded-xl border transition-all ${
                      selectedCapacity === cap
                        ? 'bg-[#d4af37] text-black font-bold border-[#d4af37]'
                        : 'bg-[#091f13] border-[#c5a059]/20 text-slate-300 hover:border-[#c5a059]/50'
                    }`}
                  >
                    {cap}
                  </button>
                ))}
              </div>
            </div>

            {/* Configurator 2: Custom 24K Gold Monogram Engraving */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <label className="text-slate-300 uppercase flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>24K GOLD MONOGRAM ENGRAVING (OPTIONAL):</span>
                </label>
                <span className="text-[#d4af37]">+ $15</span>
              </div>
              <input
                type="text"
                maxLength={8}
                value={engravingText}
                onChange={(e) => setEngravingText(e.target.value.toUpperCase())}
                placeholder="e.g. RJ / PEPAL"
                className="w-full px-4 py-2.5 rounded-xl bg-[#05110b] border border-[#c5a059]/30 text-white font-mono text-xs focus:outline-none focus:border-[#d4af37]"
              />
            </div>

            {/* Tabs for Overview, Specs, Materials */}
            <div className="border-t border-[#c5a059]/20 pt-4 space-y-3">
              <div className="flex gap-4 border-b border-[#c5a059]/20 pb-2 text-xs font-mono">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`${activeTab === 'overview' ? 'text-[#fceabb] font-bold border-b-2 border-[#d4af37]' : 'text-slate-400'}`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab('specs')}
                  className={`${activeTab === 'specs' ? 'text-[#fceabb] font-bold border-b-2 border-[#d4af37]' : 'text-slate-400'}`}
                >
                  Tech Specs
                </button>
                <button
                  onClick={() => setActiveTab('materials')}
                  className={`${activeTab === 'materials' ? 'text-[#fceabb] font-bold border-b-2 border-[#d4af37]' : 'text-slate-400'}`}
                >
                  Materials
                </button>
              </div>

              {activeTab === 'overview' && (
                <p className="text-xs text-slate-300 leading-relaxed font-sans">{product.description}</p>
              )}

              {activeTab === 'specs' && (
                <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                  {product.techSpecs.map((spec, idx) => (
                    <div key={idx} className="p-2 rounded bg-[#0a2115] border border-[#c5a059]/15">
                      <div className="text-[10px] text-slate-400">{spec.label}</div>
                      <div className="font-semibold text-white">{spec.value}</div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'materials' && (
                <ul className="space-y-1.5 text-xs font-sans text-slate-300">
                  {product.materials.map((mat, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#d4af37]" />
                      <span>{mat}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* CTA Add button */}
            <button
              onClick={handleAdd}
              className="w-full py-4 rounded-full bg-gradient-to-r from-[#d4af37] via-[#fceabb] to-[#c5a059] text-black font-display font-bold text-sm tracking-wider hover:brightness-110 shadow-lg flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4 text-black" />
              <span>{addedToast ? 'ADDED TO CART!' : `CONFIRM & ADD TO CART — $${product.price + (engravingText ? 15 : 0)}`}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
