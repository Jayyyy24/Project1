"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";

interface ToastProps { message: string | null; onClose: () => void; }

export const Toast: React.FC<ToastProps> = ({ message }) => (
  <AnimatePresence>
    {message && (
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.9 }}
        transition={{ duration: 0.25 }}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-white border-2 border-blush-300 px-5 py-3.5 rounded-2xl shadow-cute-pink text-mint-900"
      >
        <div className="w-9 h-9 rounded-xl bg-blush-100 flex items-center justify-center text-blush-600 flex-shrink-0">
          <ShoppingBag className="w-5 h-5" />
        </div>
        <p className="font-bubble text-sm font-semibold text-mint-950">{message}</p>
      </motion.div>
    )}
  </AnimatePresence>
);
