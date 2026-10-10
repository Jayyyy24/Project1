"use client";
import React from "react";
import Image from "next/image";
import { Heart, Sparkles, Smile, Utensils, Leaf } from "lucide-react";
import { SITE_CONFIG } from "@/data/site-config";
import { MomoMascot } from "./MomoMascot";

export const OurStory: React.FC = () => (
  <section id="story" className="py-12 sm:py-16 px-4 sm:px-8 max-w-7xl mx-auto">
    <div className="bg-gradient-to-br from-cream-100 via-mint-50/80 to-blush-50 border-2 border-mint-200/90 rounded-4xl sm:rounded-5xl p-6 sm:p-10 lg:p-14 shadow-cute-card">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

        {/* Story Image */}
        <div className="lg:col-span-6 relative order-1">
          <div className="relative bg-white p-3 sm:p-4 rounded-3xl sm:rounded-4xl shadow-xl border-4 border-white overflow-hidden group transform hover:rotate-1 transition-all duration-300">
            <div className="relative aspect-square sm:aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden bg-mint-50">
              <Image src="/images/jashu-momos-our-story.jpg"
                alt="Orange and white cat co-founders at PURE VEG JASHU MOMOS shop"
                fill className="object-contain group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
            <div className="absolute -bottom-3 right-4 sm:right-6 bg-white border-2 border-emerald-300 px-4 py-2 rounded-2xl shadow-cute-green flex items-center gap-2">
              <MomoMascot size={30} />
              <div>
                <p className="font-bubble text-xs font-bold text-mint-950">Started with Love 💚</p>
                <p className="font-sans text-[11px] text-emerald-700 font-semibold">100% Pure Veg Shop</p>
              </div>
            </div>
          </div>
        </div>

        {/* Story Text */}
        <div className="lg:col-span-6 flex flex-col items-start order-2">
          <div className="inline-flex items-center gap-1.5 bg-emerald-100 border border-emerald-300 text-emerald-800 font-bubble text-xs font-bold px-3.5 py-1 rounded-full mb-3 shadow-sm">
            <Leaf className="w-3.5 h-3.5 text-emerald-600" /><span>Our Story 💚</span>
          </div>
          <h2 className="font-bubble text-3xl sm:text-4xl lg:text-5xl font-black text-mint-950 mb-4 tracking-tight leading-tight">{SITE_CONFIG.ourStoryTitle}</h2>
          <p className="font-sans text-base sm:text-lg text-mint-900/85 mb-3 font-medium leading-relaxed">{SITE_CONFIG.ourStoryText}</p>
          <p className="font-bubble text-base sm:text-xl text-blush-600 font-bold mb-6 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-blush-500 flex-shrink-0" /><span>{SITE_CONFIG.ourStorySubtext}</span>
          </p>
          <div className="grid grid-cols-2 gap-4 w-full pt-2">
            <div className="bg-white/80 border border-mint-200 p-4 rounded-2xl shadow-sm">
              <div className="w-8 h-8 rounded-xl bg-mint-100 text-mint-700 flex items-center justify-center mb-2"><Smile className="w-5 h-5" /></div>
              <h3 className="font-bubble text-sm font-bold text-mint-950">Two Best Friends</h3>
              <p className="font-sans text-xs text-mint-900/70">Co-founded with passion and secret homemade veg momo recipes.</p>
            </div>
            <div className="bg-white/80 border border-emerald-200 p-4 rounded-2xl shadow-sm">
              <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-2"><Utensils className="w-5 h-5" /></div>
              <h3 className="font-bubble text-sm font-bold text-mint-950">100% Veg Ingredients</h3>
              <p className="font-sans text-xs text-mint-900/70">Fresh vegetarian dumplings folded daily with secret spices.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
);
