import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Tag } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (index: number, qty: number) => void;
  onRemoveItem: (index: number) => void;
  onProceedToCheckout: (finalTotal: number, discountAmount: number) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
}) => {
  if (!isOpen) return null;

  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoApplied, setPromoApplied] = useState(false);

  const subtotal = items.reduce((sum, item) => {
    const itemPrice = item.product.price + (item.engravingText ? 15 : 0);
    return sum + itemPrice * item.quantity;
  }, 0);

  const applyPromo = () => {
    if (promoCode.toUpperCase() === 'PEPAL10' || promoCode.toUpperCase() === 'STARTUP10') {
      setDiscountPercent(0.1);
      setPromoApplied(true);
    } else {
      alert('Use promo code PEPAL10 for 10% VIP Discount!');
    }
  };

  const discountAmount = subtotal * discountPercent;
  const finalTotal = subtotal - discountAmount;
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden font-sans">
      {/* Blurred Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10">
        {/* White Order Drawer Card matching reference design */}
        <div className="w-screen max-w-md bg-white text-slate-900 shadow-2xl flex flex-col justify-between h-full border-l border-slate-100 relative">
          
          {/* Header */}
          <div className="p-6 pb-4 flex items-center justify-between border-b border-slate-100">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#23403C] shrink-0" />
              <div>
                <h2 className="text-xl font-bold text-slate-900 tracking-tight leading-none">
                  My Order
                </h2>
                <p className="text-xs text-slate-400 font-medium mt-1">
                  Quick Express Delivery
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="bg-slate-100 text-slate-700 text-xs px-3 py-1 rounded-full font-bold">
                {totalItems} {totalItems === 1 ? 'Item' : 'Items'}
              </span>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-800 transition-colors cursor-pointer"
                aria-label="Close cart"
              >
                <ArrowRight className="w-5 h-5 text-[#23403C]" />
              </button>
            </div>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center text-slate-400 space-y-3 py-20">
                <div className="w-16 h-16 rounded-2xl bg-[#23403C]/10 flex items-center justify-center text-[#23403C]">
                  <ShoppingBag className="w-7 h-7" />
                </div>
                <div className="space-y-1">
                  <p className="text-base font-bold text-slate-900">Your cart is empty</p>
                  <p className="text-xs text-slate-400 max-w-[200px] mx-auto">
                    Explore our bottles and add items to your order.
                  </p>
                </div>
              </div>
            ) : (
              items.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-3.5 rounded-2xl bg-slate-50/80 border border-slate-100 transition-all hover:bg-slate-100/60"
                >
                  {/* Light tinted Product Thumbnail Box */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#23403C]/10 p-2 flex items-center justify-center shrink-0">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      referrerPolicy="no-referrer"
                      className="h-full w-auto object-contain drop-shadow-sm"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0 space-y-1 text-left">
                    <h3 className="font-bold text-sm text-slate-900 truncate">
                      {item.product.name}
                    </h3>
                    <p className="text-xs text-slate-400 font-medium">
                      Cap: {item.selectedCapacity} {item.engravingText && `• "${item.engravingText}"`}
                    </p>

                    {/* Quantity Modifier */}
                    <div className="flex items-center gap-2 pt-1">
                      <div className="flex items-center border border-slate-200 rounded-lg bg-white shadow-2xs">
                        <button
                          onClick={() => onUpdateQuantity(idx, Math.max(1, item.quantity - 1))}
                          className="p-1 text-slate-400 hover:text-slate-900 transition-colors"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-2 text-xs font-bold text-slate-900 min-w-[18px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(idx, item.quantity + 1)}
                          className="p-1 text-slate-400 hover:text-slate-900 transition-colors"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Price & Remove */}
                  <div className="flex flex-col items-end justify-between h-full space-y-4">
                    <span className="font-bold text-sm text-slate-900">
                      ${((item.product.price + (item.engravingText ? 15 : 0)) * item.quantity).toFixed(2)}
                    </span>
                    <button
                      onClick={() => onRemoveItem(idx)}
                      className="text-slate-300 hover:text-red-500 p-1 transition-colors cursor-pointer"
                      title="Remove item"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Subtotal & Checkout */}
          {items.length > 0 && (
            <div className="p-6 pt-4 border-t border-slate-100 bg-white space-y-4">
              {/* Promo Code Entry */}
              <div className="flex gap-2 text-xs">
                <div className="relative flex-1">
                  <Tag className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    placeholder="Promo Code (PEPAL10)"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs focus:outline-none focus:border-[#23403C]"
                  />
                </div>
                <button
                  onClick={applyPromo}
                  className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold transition-colors"
                >
                  Apply
                </button>
              </div>

              {promoApplied && (
                <div className="text-xs font-medium text-emerald-600 flex justify-between">
                  <span>VIP 10% Discount:</span>
                  <span>-${discountAmount.toFixed(2)}</span>
                </div>
              )}

              {/* Total Row */}
              <div className="flex items-center justify-between pt-1">
                <span className="text-sm font-bold text-slate-900">Total:</span>
                <span className="text-xl font-extrabold text-[#23403C] tracking-tight">
                  ${finalTotal.toFixed(2)}
                </span>
              </div>

              {/* Primary Checkout Button with exact requested color #23403C */}
              <button
                onClick={() => onProceedToCheckout(finalTotal, discountAmount)}
                className="w-full py-4 rounded-2xl bg-[#23403C] hover:bg-[#1a312e] active:scale-[0.99] text-white font-bold text-sm tracking-wide transition-all shadow-md shadow-[#23403C]/20 cursor-pointer flex items-center justify-center gap-2"
              >
                Checkout
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
