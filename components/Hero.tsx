"use client";
import React from "react";
import Image from "next/image";
import { Sparkles, Utensils, Heart, ArrowRight, Leaf } from "lucide-react";
import { MomoMascot } from "./MomoMascot";

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="pt-6 pb-12 md:pt-10 md:pb-16 px-4 sm:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="relative bg-gradient-to-br from-mint-50 via-cream-100 to-blush-50 border-2 border-mint-200/90 rounded-4xl sm:rounded-5xl p-6 sm:p-10 lg:p-14 shadow-cute-card">
        <div className="absolute top-6 right-8 text-blush-400 opacity-60 animate-bounce pointer-events-none hidden sm:block">
          <Sparkles className="w-8 h-8" />
        </div>
        <div className="absolute bottom-8 left-8 opacity-60 pointer-events-none hidden sm:block"><span className="text-2xl">🌱</span></div>
        <div className="absolute top-1/2 left-4 text-blush-300 opacity-40 pointer-events-none"><Heart className="w-5 h-5 fill-blush-300" /></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left z-10">

            {/* VEG + Tagline badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 mb-4">
              <div className="inline-flex items-center gap-2 bg-emerald-100 border-2 border-emerald-400 text-emerald-900 font-bubble text-xs sm:text-sm font-black px-4 py-1.5 rounded-full shadow-sm">
                <span className="w-3.5 h-3.5 rounded-sm border-2 border-emerald-700 bg-white flex items-center justify-center p-0.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-600" />
                </span>
                <span>🌿 100% VEG MOMOS ONLY</span>
              </div>
              <div className="inline-flex items-center gap-1.5 bg-white/90 border border-blush-200 text-mint-900 font-bubble text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                <span>Fresh Momos, Happy Hearts! 🥟</span>
              </div>
            </div>

            {/* Heading */}
            <div className="relative mb-4">
              <h1 className="font-bubble text-3xl sm:text-5xl lg:text-6xl font-black text-mint-950 leading-tight">
                Little Momos,{" "}
                <span className="relative inline-block text-blush-500">
                  Big Happiness!
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-blush-300" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <path d="M 0 10 Q 50 20 100 10" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round"/>
                  </svg>
                </span>
              </h1>
              <div className="absolute -top-6 -right-8 hidden sm:block">
                <MomoMascot size={45} className="rotate-12 animate-pulse" />
              </div>
            </div>

            <p className="font-sans text-base sm:text-lg text-mint-900/80 mb-8 max-w-lg leading-relaxed font-medium">
              Hot, tasty and 100% vegetarian. Your favourite veg momo cravings start here!
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 w-full sm:w-auto">
              <button onClick={() => scrollTo("menu")}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blush-500 hover:bg-blush-600 active:translate-y-1 text-white font-bubble font-bold text-base px-7 py-3.5 rounded-full shadow-3d-pink hover:shadow-cute-pink transition-all duration-200 cursor-pointer">
                <Utensils className="w-5 h-5" /><span>Order Veg Momos</span><Heart className="w-4 h-4 fill-white" />
              </button>
              <button onClick={() => scrollTo("menu")}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white hover:bg-mint-50 text-mint-800 font-bubble font-bold text-base px-7 py-3.5 rounded-full border-2 border-mint-300 shadow-cute-card transition-all duration-200 cursor-pointer">
                <span>Explore Menu</span><ArrowRight className="w-4 h-4 text-mint-600" />
              </button>
            </div>

            <div className="mt-8 pt-6 border-t border-mint-200/60 flex items-center gap-6 text-xs sm:text-sm font-bubble font-semibold text-mint-800">
              <div className="flex items-center gap-1.5"><span className="text-emerald-600 font-bold">🟢</span> 100% Pure Veg Kitchen</div>
              <div className="flex items-center gap-1.5"><span className="text-blush-500 font-bold">✓</span> Fiery Red Chutney</div>
              <div className="flex items-center gap-1.5"><span className="text-blush-500 font-bold">✓</span> Made Fresh Daily</div>
            </div>
          </div>

          {/* Hero image */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-tr from-mint-200 to-blush-200 rounded-full blur-2xl opacity-70 animate-pulse" />
            <div className="relative group w-full max-w-lg bg-white p-3 sm:p-4 rounded-3xl sm:rounded-4xl shadow-xl border-4 border-white/80 transform hover:-rotate-1 transition-all duration-300">
              <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl aspect-[4/3] bg-mint-100">
                <Image src="/images/hero-steamer.jpg" alt="Fresh Steamed Veg Momos in Bamboo Steamer" fill priority
                  className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>
              <div className="absolute -bottom-4 -left-4 sm:left-4 bg-white/95 border-2 border-emerald-300 px-4 py-2 rounded-2xl shadow-cute-green flex items-center gap-2">
                <span className="w-4 h-4 rounded-sm border-2 border-emerald-600 bg-white flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-emerald-600" />
                </span>
                <div>
                  <p className="font-bubble text-xs font-bold text-mint-950">100% Fresh Veg Filling</p>
                  <p className="font-sans text-[11px] text-emerald-700 font-semibold">Served with fiery chilli chutney</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-emerald-600 text-white font-bubble text-xs font-extrabold px-3.5 py-1.5 rounded-full shadow-lg flex items-center gap-1 border-2 border-white">
                <Leaf className="w-3.5 h-3.5" /><span>Pure Veg Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
