import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SmartSection } from './components/SmartSection';
import { VitalitySection } from './components/VitalitySection';
import { DifferenceSection } from './components/DifferenceSection';
import { CustomizationBanner } from './components/CustomizationBanner';
import { CollectionSection } from './components/CollectionSection';
import { AboutBanner } from './components/AboutBanner';
import { ProductModal } from './components/ProductModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { Footer } from './components/Footer';

import { PRODUCTS } from './data/products';
import { Product, CartItem } from './types';
import { CheckCircle2, Sparkles } from 'lucide-react';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([
    {
      product: PRODUCTS[0],
      quantity: 1,
      selectedCapacity: '500 ml',
      selectedColor: 'Emerald Gold',
    },
  ]);
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedProductForModal, setSelectedProductForModal] = useState<Product | null>(null);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [checkoutTotal, setCheckoutTotal] = useState(0);
  const [checkoutDiscount, setCheckoutDiscount] = useState(0);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  const handleAddToCart = (
    product: Product,
    capacity?: string,
    color?: string,
    engraving?: string
  ) => {
    const selectedCap = capacity || product.capacityOptions[0];
    const selectedCol = color || product.colors[0].name;

    setCart((prev) => {
      const existingIdx = prev.findIndex(
        (item) =>
          item.product.id === product.id &&
          item.selectedCapacity === selectedCap &&
          item.selectedColor === selectedCol &&
          item.engravingText === engraving
      );

      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += 1;
        return updated;
      } else {
        return [
          ...prev,
          {
            product,
            quantity: 1,
            selectedCapacity: selectedCap,
            selectedColor: selectedCol,
            engravingText: engraving,
          },
        ];
      }
    });

    showToast(`Added ${product.name} to Cart!`);
  };

  const handleUpdateQuantity = (index: number, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveItem(index);
      return;
    }
    setCart((prev) => {
      const updated = [...prev];
      updated[index].quantity = newQty;
      return updated;
    });
  };

  const handleRemoveItem = (index: number) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const handleProceedToCheckout = (finalTotal: number, discountAmount: number) => {
    setCheckoutTotal(finalTotal);
    setCheckoutDiscount(discountAmount);
    setCartOpen(false);
    setCheckoutOpen(true);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#08130d] text-slate-100 font-sans antialiased overflow-x-hidden selection:bg-[#d4af37] selection:text-black">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-24 right-6 z-50 bg-[#0d3822] border border-[#d4af37] text-[#fceabb] px-5 py-3 rounded-2xl shadow-2xl font-mono text-xs flex items-center gap-2 animate-bounce">
          <Sparkles className="w-4 h-4 text-[#d4af37]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Navigation Bar */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setCartOpen(true)}
        onSelectSection={scrollToSection}
      />

      {/* Main Sections */}
      <main>
        {/* Section 1: Hero ("Wellness in Every Drop") */}
        <HeroSection
          product={PRODUCTS[0]}
          onAddToCart={(p) => handleAddToCart(p)}
          onSelectSection={scrollToSection}
          onOpenQuickView={(p) => setSelectedProductForModal(p)}
        />

        {/* Section 2: Smart Hydration ("Because you deserve better hydration.") */}
        <SmartSection
          product={PRODUCTS[1]}
          onAddToCart={(p) => handleAddToCart(p)}
          onOpenQuickView={(p) => setSelectedProductForModal(p)}
        />

        {/* Our Collections Interactive Section (VOSS style) */}
        <CollectionSection
          products={PRODUCTS}
          onAddToCart={(p) => handleAddToCart(p)}
          onOpenQuickView={(p) => setSelectedProductForModal(p)}
        />

        {/* Section 3: Terracotta Vitality ("FUEL YOUR LIFE") */}
        <VitalitySection
          product={PRODUCTS[2]}
          onAddToCart={(p) => handleAddToCart(p)}
          onOpenQuickView={(p) => setSelectedProductForModal(p)}
        />

        {/* Section 4: What Makes PEPAL Different */}
        <DifferenceSection
          product={PRODUCTS[3] || PRODUCTS[0]}
          onAddToCart={(p) => handleAddToCart(p)}
          onOpenQuickView={(p) => setSelectedProductForModal(p)}
        />

        {/* Section 5: Customization Banner ("Your PEPAL, your way.") */}
        <CustomizationBanner />

        {/* Section 6: About PEPAL Banner (Mountain/Purity backdrop) */}
        <AboutBanner />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Drawers */}
      <ProductModal
        product={selectedProductForModal}
        onClose={() => setSelectedProductForModal(null)}
        onAddToCart={handleAddToCart}
      />

      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onProceedToCheckout={handleProceedToCheckout}
      />

      <CheckoutModal
        isOpen={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        items={cart}
        totalAmount={checkoutTotal}
        discountAmount={checkoutDiscount}
        onOrderComplete={() => setCart([])}
      />
    </div>
  );
}
