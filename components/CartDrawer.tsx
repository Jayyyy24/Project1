"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Heart, Sparkles } from "lucide-react";
import { getCartFromStorage, updateCartQuantity, removeFromCart, clearCart, getCartTotal, CartItem } from "@/lib/cart";
import { MomoMascot } from "./MomoMascot";

interface CartDrawerProps { isOpen: boolean; onClose: () => void; }

export const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const loadCart = () => setCart(getCartFromStorage());

  useEffect(() => {
    if (isOpen) loadCart();
    window.addEventListener("jashu_cart_updated", loadCart);
    return () => window.removeEventListener("jashu_cart_updated", loadCart);
  }, [isOpen]);

  if (!isOpen) return null;
  const total = getCartTotal(cart);

  const scrollToMenu = () => { onClose(); document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" }); };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="fixed inset-0 bg-mint-950/40 backdrop-blur-sm" onClick={onClose} />
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white border-l-4 border-mint-200 shadow-2xl flex flex-col">

          {/* Header */}
          <div className="p-5 sm:p-6 bg-gradient-to-r from-mint-50 via-cream-100 to-blush-50 border-b border-mint-200 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-2xl bg-blush-100 border border-blush-200 flex items-center justify-center text-blush-600">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-bubble text-xl font-bold text-mint-950 flex items-center gap-1.5">
                  Your Momo Basket <Heart className="w-4 h-4 fill-blush-500 text-blush-500" />
                </h2>
                <p className="font-sans text-xs text-mint-900/70">{cart.length} {cart.length === 1 ? "item" : "items"} selected</p>
              </div>
            </div>
            <button onClick={onClose} className="w-9 h-9 rounded-full bg-white hover:bg-mint-100 text-mint-900 border border-mint-200 flex items-center justify-center cursor-pointer">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-6">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="mb-4 relative">
                  <MomoMascot size={80} className="animate-bounce" />
                  <Sparkles className="w-6 h-6 text-blush-400 absolute -top-2 -right-2" />
                </div>
                <h3 className="font-bubble text-xl font-bold text-mint-950 mb-2">Your cart is empty...</h3>
                <p className="font-sans text-sm text-mint-900/70 max-w-xs mb-6">Time for momos! Pick your favourite plates of happiness now. 🥟</p>
                <button onClick={scrollToMenu}
                  className="flex items-center gap-2 bg-blush-500 hover:bg-blush-600 text-white font-bubble font-bold text-sm px-6 py-3 rounded-full shadow-cute-pink active:scale-95 transition-all cursor-pointer">
                  <span>Explore Menu</span><ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="space-y-4 py-2">
                {cart.map(item => (
                  <div key={item.id} className="flex gap-3.5 bg-cream-100/90 border border-mint-200 rounded-2xl p-3 shadow-sm hover:border-blush-300 transition-colors">
                    <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-mint-50 flex-shrink-0 border border-mint-100">
                      <Image src={item.image} alt={item.name} fill className="object-cover" sizes="80px" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-1">
                          <h4 className="font-bubble text-sm font-bold text-mint-950 leading-tight">{item.name}</h4>
                          <button onClick={() => setCart(removeFromCart(item.id))} className="text-mint-400 hover:text-blush-600 transition-colors p-1">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="font-bubble text-xs text-blush-600 font-extrabold mt-0.5">₹{item.price} each</p>
                      </div>
                      <div className="flex items-center justify-between mt-2 pt-1 border-t border-mint-100">
                        <div className="flex items-center gap-2 bg-white border border-mint-200 rounded-full px-2 py-0.5">
                          <button onClick={() => setCart(updateCartQuantity(item.id, item.quantity - 1))}
                            className="w-5 h-5 rounded-full bg-mint-100 hover:bg-mint-200 text-mint-900 flex items-center justify-center text-xs">
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="font-bubble text-xs font-bold text-mint-950 min-w-[16px] text-center">{item.quantity}</span>
                          <button onClick={() => setCart(updateCartQuantity(item.id, item.quantity + 1))}
                            className="w-5 h-5 rounded-full bg-mint-100 hover:bg-mint-200 text-mint-900 flex items-center justify-center text-xs">
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="font-bubble text-sm font-extrabold text-mint-950">₹{item.price * item.quantity}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cart.length > 0 && (
            <div className="p-5 sm:p-6 bg-gradient-to-br from-mint-50 to-cream-100 border-t-2 border-mint-200 space-y-4">
              <div className="space-y-2 font-sans text-sm">
                <div className="flex justify-between text-mint-900/80 font-medium"><span>Subtotal</span><span className="font-bubble font-bold text-mint-950">₹{total}</span></div>
                <div className="flex justify-between text-mint-900/80 font-medium"><span>Delivery Fee</span><span className="font-bubble font-bold text-mint-600">FREE 🌸</span></div>
                <div className="border-t border-mint-200/80 pt-2 flex justify-between font-bubble text-lg font-black text-mint-950">
                  <span>Grand Total</span><span className="text-blush-600">₹{total}</span>
                </div>
              </div>
              <div className="flex gap-2">
                <button onClick={() => { clearCart(); setCart([]); }}
                  className="w-1/3 py-3 rounded-full border border-mint-300 bg-white hover:bg-mint-100 font-bubble text-xs font-bold text-mint-800 transition-colors cursor-pointer">
                  Clear Cart
                </button>
                <button onClick={() => alert("Thank you for testing JASHU MOMOS! 🥟💗")}
                  className="w-2/3 py-3 rounded-full bg-blush-500 hover:bg-blush-600 text-white font-bubble text-sm font-bold shadow-3d-pink active:translate-y-1 active:shadow-none transition-all cursor-pointer flex items-center justify-center gap-1.5">
                  <span>Checkout (₹{total})</span><ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
