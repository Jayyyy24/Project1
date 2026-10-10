"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Menu } from "@/components/Menu";
import { ComboSection } from "@/components/ComboSection";
import { OurStory } from "@/components/OurStory";
import { CartDrawer } from "@/components/CartDrawer";
import { Toast } from "@/components/Toast";
import { Footer } from "@/components/Footer";
import { addToCart } from "@/lib/cart";
import { MenuItem } from "@/data/menu";

export default function Home() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };

  const handleAddToCart = (item: { id: string; name: string; price: number; quantity: number; image: string; description?: string; isCombo?: boolean }) => {
    addToCart(item);
    showToast(`Added ${item.quantity}x ${item.name} to your basket! 🥟`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onOpenCart={() => setIsCartOpen(true)} />

      <main className="flex-1">
        <Hero />

        <div className="flex items-center justify-center gap-2 py-4 text-mint-300">
          <span className="w-16 h-0.5 bg-gradient-to-r from-transparent via-mint-200 to-transparent" />
          <span className="text-sm">✨ 🥟 ✨</span>
          <span className="w-16 h-0.5 bg-gradient-to-r from-transparent via-mint-200 to-transparent" />
        </div>

        <Menu
          onAddToCart={(product: MenuItem, qty: number) =>
            handleAddToCart({ id: product.id, name: product.name, price: product.price, quantity: qty, image: product.image, description: product.description })
          }
        />

        <ComboSection onAddToCart={handleAddToCart} />

        <OurStory />
      </main>

      <Footer />
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <Toast message={toast} onClose={() => setToast(null)} />
    </div>
  );
}
