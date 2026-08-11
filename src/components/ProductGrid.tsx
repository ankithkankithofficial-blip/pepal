import React, { useState } from 'react';
import { Product } from '../types';
import { ShoppingBag, Eye, Star, Sparkles, Check, Flame, Shield, Filter } from 'lucide-react';

interface ProductGridProps {
  products: Product[];
  onAddToCart: (p: Product) => void;
  onOpenQuickView: (p: Product) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  onAddToCart,
  onOpenQuickView,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All 4 Products' },
    { id: 'glass', label: 'Pure Glass Gold' },
    { id: 'smart', label: 'Smart Vessel P2' },
    { id: 'terracotta', label: 'Terracotta System' },
    { id: 'onyx', label: 'Onyx Titanium' },
  ];

  const filteredProducts =
    activeCategory === 'all'
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section id="products-grid" className="py-28 bg-[#06110a] relative border-b border-[#c5a059]/20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0a2618] border border-[#c5a059]/30 text-xs font-mono text-[#fceabb]">
              <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>THE PEPAL 2026 COLLECTION</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white tracking-tight">
              Luxury Smart Hydration <br />
              <span className="gold-gradient-text italic font-normal">Four Masterpieces</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[#d4af37] text-black font-bold shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                    : 'bg-[#0b1f13] border border-[#c5a059]/20 text-slate-300 hover:text-white hover:border-[#c5a059]/50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 4 Products Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative rounded-3xl bg-gradient-to-b from-[#0a2014] to-[#040f09] border border-[#c5a059]/25 hover:border-[#d4af37] transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl hover:shadow-[0_15px_40px_rgba(0,0,0,0.8)]"
            >
              {/* Top Badge */}
              <div className="p-5 pb-0 flex items-center justify-between z-10">
                <span className="px-3 py-1 rounded-full bg-[#11311f] border border-[#c5a059]/30 text-[10px] font-mono text-[#fceabb] font-semibold">
                  {product.badge || 'Luxury Edition'}
                </span>
                <div className="flex items-center gap-1 text-xs font-mono text-[#d4af37]">
                  <Star className="w-3.5 h-3.5 fill-[#d4af37]" />
                  <span>{product.rating}</span>
                  <span className="text-slate-400">({product.reviewCount})</span>
                </div>
              </div>

              {/* Product Image Frame */}
              <div className="relative aspect-square my-4 mx-5 rounded-2xl overflow-hidden bg-[#030d07] border border-[#c5a059]/15 group-hover:border-[#c5a059]/40 transition-all">
                <img
                  src={product.image}
                  alt={product.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500"
                />

                {/* Quick Hover Actions Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 p-4 backdrop-blur-xs">
                  <button
                    onClick={() => onOpenQuickView(product)}
                    className="p-3 rounded-full bg-[#0a2216] border border-[#d4af37] text-[#fceabb] hover:bg-[#d4af37] hover:text-black transition-all shadow-lg"
                    title="Quick View & Specs"
                  >
                    <Eye className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => onAddToCart(product)}
                    className="p-3 rounded-full bg-[#d4af37] text-black hover:bg-white transition-all shadow-lg"
                    title="Add to Cart"
                  >
                    <ShoppingBag className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Details & Pricing */}
              <div className="p-6 pt-0 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#fceabb] transition-colors leading-tight">
                    {product.name}
                  </h3>
                  <p className="text-xs text-slate-400 font-sans mt-1 line-clamp-2">
                    {product.tagline}
                  </p>
                </div>

                {/* Materials list */}
                <div className="flex flex-wrap gap-1 text-[10px] font-mono text-[#d4af37]/80">
                  {product.materials.slice(0, 2).map((m, idx) => (
                    <span key={idx} className="bg-[#0b2b1a] px-2 py-0.5 rounded border border-[#c5a059]/20">
                      {m}
                    </span>
                  ))}
                </div>

                {/* Price & Stock */}
                <div className="pt-3 border-t border-[#c5a059]/15 flex items-center justify-between">
                  <div>
                    <div className="text-xl font-bold font-mono text-[#fceabb]">${product.price}</div>
                    {product.originalPrice && (
                      <div className="text-[10px] font-mono text-slate-400 line-through">
                        ${product.originalPrice}
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() => onAddToCart(product)}
                    className="px-4 py-2 rounded-full bg-gradient-to-r from-[#0e2f1e] to-[#13422a] border border-[#c5a059]/40 text-xs font-mono text-[#fceabb] font-semibold hover:border-[#d4af37] hover:bg-[#195234] transition-all"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
