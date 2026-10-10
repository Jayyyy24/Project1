"use client";
import React, { useState } from "react";
import Image from "next/image";
import { CheckCircle2, Sparkles, Heart, ShoppingBag, Gift } from "lucide-react";
import { NUM_NUM_COMBO } from "@/data/menu";

interface ComboSectionProps {
  onAddToCart: (item: { id: string; name: string; price: number; quantity: number; image: string; description: string; isCombo: boolean }) => void;
}

export const ComboSection: React.FC<ComboSectionProps> = ({ onAddToCart }) => {
  const [testPrice, setTestPrice] = useState<number | null>(NUM_NUM_COMBO.price);
  const [adding, setAdding] = useState(false);

  const handleAdd = () => {
    if (testPrice === null) return;
    setAdding(true);
    onAddToCart({ id: NUM_NUM_COMBO.id, name: NUM_NUM_COMBO.name, price: testPrice, quantity: 1, image: NUM_NUM_COMBO.image, description: NUM_NUM_COMBO.description, isCombo: true });
    setTimeout(() => setAdding(false), 500);
  };

  return (
    <section id="combo" className="py-12 sm:py-16 px-4 sm:px-8 max-w-7xl mx-auto">
      <div className="relative bg-gradient-to-br from-mint-100/90 via-cream-100 to-blush-100/80 border-2 border-mint-200 rounded-4xl sm:rounded-5xl p-6 sm:p-10 lg:p-12 shadow-cute-card overflow-hidden">
        <div className="absolute top-4 right-6 text-blush-400 opacity-60"><Sparkles className="w-8 h-8" /></div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative bg-white p-3 sm:p-4 rounded-3xl sm:rounded-4xl shadow-xl border-4 border-white/90 overflow-hidden group">
              <div className="relative aspect-[16/9] sm:aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden bg-mint-50">
                <Image src={NUM_NUM_COMBO.image} alt="Num Num Combo with all momo varieties, coffee and coke" fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
              <div className="absolute top-6 left-6 bg-blush-500 text-white font-bubble text-xs sm:text-sm font-extrabold px-3.5 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 border-2 border-white">
                <Gift className="w-4 h-4" /><span>6 Items Mega Feast</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="inline-flex items-center gap-1.5 bg-blush-100 border border-blush-200 text-blush-600 font-bubble text-xs font-bold px-3 py-1 rounded-full mb-3 shadow-sm">
              <Heart className="w-3.5 h-3.5 fill-blush-500 text-blush-500" /><span>Signature Combo Pack</span>
            </div>
            <h2 className="font-bubble text-3xl sm:text-4xl lg:text-5xl font-black text-mint-950 mb-3 tracking-tight">{NUM_NUM_COMBO.name} 💗</h2>
            <p className="font-sans text-base sm:text-lg text-mint-900/80 mb-6 font-medium leading-relaxed">{NUM_NUM_COMBO.description}</p>

            <div className="w-full bg-white/90 border border-mint-200/90 rounded-3xl p-5 mb-6 shadow-sm">
              <h3 className="font-bubble text-sm font-extrabold text-mint-900 mb-3 uppercase tracking-wider">What&apos;s Included:</h3>
              <div className="grid grid-cols-2 gap-2.5">
                {NUM_NUM_COMBO.includedItems.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 font-bubble text-xs sm:text-sm text-mint-950 font-bold bg-mint-50/70 px-3 py-2 rounded-xl border border-mint-100">
                    <CheckCircle2 className="w-4 h-4 text-mint-600 flex-shrink-0" /><span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-2">
              {testPrice !== null ? (
                <div className="flex items-baseline gap-1.5">
                  <span className="font-bubble text-sm text-mint-800 font-bold">Combo Price:</span>
                  <span className="font-bubble text-3xl sm:text-4xl font-black text-mint-950">₹{testPrice}</span>
                </div>
              ) : (
                <div className="inline-flex items-center gap-2 bg-blush-100 border-2 border-blush-300 text-blush-700 font-bubble text-sm font-extrabold px-4 py-2.5 rounded-2xl shadow-sm">
                  <Sparkles className="w-4 h-4 text-blush-500 animate-spin" /><span>Combo price coming soon! 💖</span>
                </div>
              )}
              {testPrice !== null ? (
                <button onClick={handleAdd} disabled={adding}
                  className={`flex items-center justify-center gap-2 font-bubble font-bold text-base px-8 py-3.5 rounded-full shadow-3d-pink active:translate-y-1 active:shadow-none cursor-pointer transition-all ${adding ? "bg-mint-600 text-white shadow-none" : "bg-blush-500 hover:bg-blush-600 text-white"}`}>
                  <ShoppingBag className="w-5 h-5" /><span>{adding ? "Combo Added! 😋" : "Add Combo to Cart"}</span>
                </button>
              ) : (
                <button onClick={() => setTestPrice(999)}
                  className="font-bubble text-xs text-mint-800 hover:text-blush-600 underline font-semibold cursor-pointer bg-white/80 px-3 py-2 rounded-xl border border-mint-200">
                  ⚙️ Set Test Price (₹999)
                </button>
              )}
            </div>
            {testPrice !== null && (
              <button onClick={() => setTestPrice(null)} className="mt-2 text-xs font-sans text-mint-700 hover:underline cursor-pointer">
                Reset to &quot;Coming Soon&quot; mode
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
