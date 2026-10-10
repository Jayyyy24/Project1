"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Plus, Minus, ShoppingBag } from "lucide-react";
import { MenuItem } from "@/data/menu";

interface ProductCardProps { product: MenuItem; onAddToCart: (p: MenuItem, qty: number) => void; }

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const [qty, setQty] = useState(1);
  const [adding, setAdding] = useState(false);

  const handleAdd = () => {
    setAdding(true);
    onAddToCart(product, qty);
    setTimeout(() => setAdding(false), 500);
  };

  return (
    <div className="group bg-cream-100 border-2 border-mint-200/90 hover:border-blush-300 rounded-3xl p-3.5 sm:p-4 shadow-cute-card hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full relative overflow-hidden transform hover:-translate-y-1">
      {product.badge && (
        <div className="absolute top-6 left-6 z-10 bg-white/95 border border-blush-200 text-blush-600 font-bubble text-[11px] sm:text-xs font-bold px-2.5 py-1 rounded-full shadow-sm">
          {product.badge}
        </div>
      )}
      <div>
        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-3.5 bg-mint-100 border border-mint-100">
          <Image src={product.image} alt={product.name} fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 25vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-2 right-2 bg-white/90 p-1 rounded-lg shadow-sm border border-emerald-300 flex items-center justify-center">
            <span className="w-3.5 h-3.5 rounded-sm border-2 border-emerald-600 bg-white flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-emerald-600" />
            </span>
          </div>
        </div>
        <div className="flex items-start justify-between gap-1 mb-1">
          <h3 className="font-bubble text-base sm:text-lg lg:text-xl font-bold text-mint-950 leading-tight group-hover:text-blush-600 transition-colors">{product.name}</h3>
          {product.spicyLevel && product.spicyLevel > 1 && (
            <span className="text-xs flex">{"🌶️".repeat(product.spicyLevel)}</span>
          )}
        </div>
        <p className="font-sans text-xs sm:text-sm text-mint-900/70 mb-3 line-clamp-2 min-h-[36px]">{product.description}</p>
      </div>

      <div className="pt-2 border-t border-mint-200/60 mt-auto">
        <div className="flex items-baseline justify-between mb-3">
          <span className="font-bubble text-xs text-mint-700 font-semibold">Price:</span>
          <div className="flex items-baseline gap-0.5">
            <span className="font-bubble text-xs font-bold text-blush-600">₹</span>
            <span className="font-bubble text-xl sm:text-2xl font-black text-mint-950">{product.price}</span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between bg-white border border-mint-200 rounded-full px-2 py-1">
            <button onClick={() => setQty(q => Math.max(1, q - 1))}
              className="w-7 h-7 rounded-full bg-mint-100 hover:bg-mint-200 text-mint-900 flex items-center justify-center cursor-pointer">
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="font-bubble text-sm font-extrabold text-mint-950 min-w-[20px] text-center">{qty}</span>
            <button onClick={() => setQty(q => q + 1)}
              className="w-7 h-7 rounded-full bg-mint-100 hover:bg-mint-200 text-mint-900 flex items-center justify-center cursor-pointer">
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>
          <button onClick={handleAdd} disabled={adding}
            className={`w-full flex items-center justify-center gap-1.5 font-bubble font-bold text-xs sm:text-sm py-2.5 sm:py-3 px-3 rounded-full transition-all duration-200 shadow-3d-pink active:translate-y-1 active:shadow-none cursor-pointer ${adding ? "bg-mint-600 text-white shadow-none" : "bg-blush-500 hover:bg-blush-600 text-white"}`}>
            <ShoppingBag className="w-4 h-4" />
            <span>{adding ? "Added! 😋" : "Add to Cart"}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
