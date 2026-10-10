"use client";
import React, { useState, useEffect } from "react";
import { MomoMascot } from "./MomoMascot";
import { ShoppingCart, Menu as MenuIcon, X, Heart } from "lucide-react";
import { getCartFromStorage, getCartCount } from "@/lib/cart";

interface NavbarProps { onOpenCart: () => void; }

export const Navbar: React.FC<NavbarProps> = ({ onOpenCart }) => {
  const [cartCount, setCartCount] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const updateCount = () => setCartCount(getCartCount(getCartFromStorage()));

  useEffect(() => {
    updateCount();
    window.addEventListener("jashu_cart_updated", updateCount);
    window.addEventListener("storage", updateCount);
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("jashu_cart_updated", updateCount);
      window.removeEventListener("storage", updateCount);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-3 z-40 px-4 sm:px-8 max-w-7xl mx-auto w-full">
      <nav className={`bg-white/95 backdrop-blur-md border-2 border-mint-200/80 rounded-full px-5 py-2.5 sm:px-6 sm:py-3 shadow-cute-card flex items-center justify-between transition-all duration-300 ${scrolled ? "shadow-lg border-mint-300" : ""}`}>
        <button onClick={() => scrollTo("hero")} className="flex items-center gap-2.5 group cursor-pointer">
          <MomoMascot size={38} className="group-hover:rotate-12 transition-transform" />
          <div className="flex items-center gap-1">
            <span className="font-bubble text-xl sm:text-2xl font-black text-mint-900 group-hover:text-blush-600 transition-colors">JASHU</span>
            <span className="font-bubble text-xl sm:text-2xl font-black text-blush-500">MOMOS</span>
            <Heart className="w-3.5 h-3.5 fill-blush-400 text-blush-400 animate-pulse hidden sm:inline-block" />
          </div>
        </button>

        <div className="hidden md:flex items-center gap-1 bg-mint-50/80 p-1.5 rounded-full border border-mint-100">
          {["hero", "menu", "story"].map((id, i) => (
            <button key={id} onClick={() => scrollTo(id)}
              className="px-5 py-2 rounded-full font-bubble font-bold text-sm text-mint-900 hover:text-blush-600 hover:bg-white transition-all">
              {["Home", "Menu", "Our Story"][i]}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button onClick={onOpenCart}
            className="relative flex items-center gap-2 bg-gradient-to-r from-blush-400 to-blush-500 hover:from-blush-500 hover:to-blush-600 text-white font-bubble font-bold text-sm px-4 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-cute-pink active:scale-95 transition-all cursor-pointer">
            <ShoppingCart className="w-4 h-4" />
            <span>Cart</span>
            <span className="bg-white text-blush-600 font-extrabold text-xs px-2 py-0.5 rounded-full min-w-[20px] text-center">{cartCount}</span>
          </button>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2 rounded-full text-mint-900 hover:bg-mint-100 transition-colors">
            {mobileOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="md:hidden mt-2 bg-white/98 backdrop-blur-md border-2 border-mint-200 rounded-3xl p-5 shadow-xl flex flex-col gap-3">
          {[["hero","🏠 Home"],["menu","🥟 Menu"],["story","💚 Our Story"]].map(([id, label]) => (
            <button key={id} onClick={() => scrollTo(id)}
              className="w-full text-left font-bubble font-bold text-base text-mint-900 hover:text-blush-600 p-3 rounded-2xl hover:bg-mint-50 transition-colors">
              {label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};
