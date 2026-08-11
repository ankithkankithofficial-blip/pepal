import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, ShieldCheck, CheckCircle2, Sparkles, CreditCard, Lock, Package, ArrowLeft } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  totalAmount: number;
  discountAmount: number;
  onOrderComplete: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  totalAmount,
  discountAmount,
  onOrderComplete,
}) => {
  if (!isOpen) return null;

  const [step, setStep] = useState<'form' | 'success'>('form');
  const [fullName, setFullName] = useState('Rahul Jain');
  const [email, setEmail] = useState('rahja@pepal.co.in');
  const [address, setAddress] = useState('34/549, A, NH Bypass Road, Edappally');
  const [city, setCity] = useState('Kochi');
  const [country, setCountry] = useState('India');
  const [cardNumber, setCardNumber] = useState('•••• •••• •••• 8821');
  const [orderNumber, setOrderNumber] = useState('');

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedOrder = 'PEPAL-2026-' + Math.floor(100000 + Math.random() * 900000);
    setOrderNumber(generatedOrder);
    setStep('success');
    onOrderComplete();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl rounded-3xl bg-[#07180f] border border-[#c5a059]/40 text-white p-6 sm:p-8 shadow-2xl space-y-6 my-8 my-auto">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-[#0d2a1b] border border-[#c5a059]/30 text-slate-300 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'form' ? (
          <form onSubmit={handlePlaceOrder} className="space-y-6 text-left">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#d4af37]">
                <Lock className="w-3.5 h-3.5" />
                <span>256-BIT ENCRYPTED LUXURY CHECKOUT</span>
              </div>
              <h2 className="font-serif text-3xl font-bold text-white">Complete Your Order</h2>
              <p className="text-xs text-slate-300 font-sans">
                Enter your delivery details to lock in your Batch #01 pre-order allocation.
              </p>
            </div>

            {/* Order summary mini banner */}
            <div className="p-4 rounded-2xl bg-[#0a2014] border border-[#c5a059]/20 flex justify-between items-center text-xs font-mono">
              <div>
                <span className="text-slate-400">Order Items ({items.length}):</span>
                <div className="font-bold text-white mt-0.5">
                  {items.map((i) => i.product.name).join(', ')}
                </div>
              </div>
              <div className="text-right">
                <span className="text-slate-400">Total:</span>
                <div className="font-bold text-[#fceabb] text-base">${totalAmount.toFixed(2)}</div>
              </div>
            </div>

            {/* Form Fields */}
            <div className="space-y-4 font-mono text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 mb-1">FULL NAME</label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#040e08] border border-[#c5a059]/30 text-white focus:outline-none focus:border-[#d4af37]"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 mb-1">EMAIL ADDRESS</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#040e08] border border-[#c5a059]/30 text-white focus:outline-none focus:border-[#d4af37]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-300 mb-1">STREET ADDRESS</label>
                <input
                  type="text"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#040e08] border border-[#c5a059]/30 text-white focus:outline-none focus:border-[#d4af37]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 mb-1">CITY / REGION</label>
                  <input
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#040e08] border border-[#c5a059]/30 text-white focus:outline-none focus:border-[#d4af37]"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 mb-1">COUNTRY</label>
                  <input
                    type="text"
                    required
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#040e08] border border-[#c5a059]/30 text-white focus:outline-none focus:border-[#d4af37]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-300 mb-1 flex items-center justify-between">
                  <span>PAYMENT METHOD</span>
                  <span className="text-[#d4af37]">TEST MODE (PRE-FULFILLED)</span>
                </label>
                <div className="relative">
                  <CreditCard className="w-4 h-4 text-[#d4af37] absolute left-3 top-3" />
                  <input
                    type="text"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-[#040e08] border border-[#c5a059]/30 text-white focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-full bg-gradient-to-r from-[#d4af37] via-[#fceabb] to-[#c5a059] text-black font-display font-bold text-sm tracking-wider hover:brightness-110 shadow-xl flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-black" />
              <span>PAY & AUTHORIZE ${totalAmount.toFixed(2)}</span>
            </button>
          </form>
        ) : (
          <div className="text-center space-y-6 py-6">
            <div className="w-20 h-20 rounded-full bg-[#0d3822] border-2 border-[#d4af37] text-[#fceabb] flex items-center justify-center mx-auto shadow-2xl animate-bounce">
              <CheckCircle2 className="w-10 h-10 text-emerald-400" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono text-[#d4af37] uppercase tracking-widest">
                PRE-ORDER CONFIRMED
              </span>
              <h2 className="font-serif text-3xl font-bold text-white">Thank You for Choosing PEPAL!</h2>
              <p className="text-xs font-mono text-emerald-400">ORDER NO: {orderNumber}</p>
              <p className="text-slate-300 font-sans text-sm max-w-md mx-auto">
                A confirmation receipt and express tracking link have been dispatched to <span className="text-white font-mono">{email}</span>. Your luxury hydration vessel is being inspected and prepared for shipment.
              </p>
            </div>

            {/* Founder Note from PDF details */}
            <div className="p-4 rounded-2xl bg-[#0a2014] border border-[#c5a059]/30 text-left font-serif text-xs space-y-2">
              <div className="text-[#d4af37] font-bold">MESSAGE FROM FOUNDER RAHUL JAIN:</div>
              <p className="text-slate-300 italic">
                "Welcome to the PEPAL inner circle. We created PEPAL to reimagine daily hydration into a ritual of purity, design, and wellness. We can't wait for you to experience your vessel."
              </p>
              <div className="text-[10px] font-mono text-slate-400 text-right">— Rahul Jain, Founder, PEPAL (Kochi, Kerala)</div>
            </div>

            <button
              onClick={onClose}
              className="px-8 py-3 rounded-full bg-[#0d2a1b] border border-[#c5a059]/40 text-xs font-mono text-[#fceabb] hover:bg-[#153e28] transition-all"
            >
              RETURN TO HOME
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
