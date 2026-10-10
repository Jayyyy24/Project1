"use client";
import React from "react";
import { MENU_ITEMS, MenuItem } from "@/data/menu";
import { ProductCard } from "./ProductCard";
import { Leaf } from "lucide-react";

interface MenuProps { onAddToCart: (p: MenuItem, qty: number) => void; }

export const Menu: React.FC<MenuProps> = ({ onAddToCart }) => (
  <section id="menu" className="py-12 sm:py-16 px-4 sm:px-8 max-w-7xl mx-auto">
    <div className="text-center mb-10 sm:mb-12">
      <div className="inline-flex items-center gap-1.5 bg-emerald-100 border border-emerald-300 text-emerald-800 font-bubble text-xs font-extrabold px-3.5 py-1 rounded-full mb-3 shadow-sm">
        <Leaf className="w-3.5 h-3.5 text-emerald-600" /><span>🌿 100% Pure Veg Menu 🌿</span>
      </div>
      <h2 className="font-bubble text-3xl sm:text-4xl lg:text-5xl font-black text-mint-950 mb-3 tracking-tight">Our Momo Menu</h2>
      <p className="font-sans text-base sm:text-lg text-mint-900/75 max-w-md mx-auto font-medium">Pick your favourite plate of 100% vegetarian momo happiness!</p>
      <div className="flex items-center justify-center gap-2 mt-4 text-mint-400">
        <span className="w-12 h-0.5 bg-mint-200 rounded-full" /><span className="text-lg">🍃</span><span className="w-12 h-0.5 bg-mint-200 rounded-full" />
      </div>
    </div>
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
      {MENU_ITEMS.map(p => <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} />)}
    </div>
  </section>
);
