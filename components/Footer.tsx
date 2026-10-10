"use client";
import React from "react";
import { MomoMascot } from "./MomoMascot";
import { MapPin, Clock, Phone, MessageSquare, Instagram, Heart } from "lucide-react";
import { SITE_CONFIG } from "@/data/site-config";

export const Footer: React.FC = () => {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="bg-gradient-to-b from-mint-50/50 via-mint-100/60 to-mint-200/40 border-t-2 border-mint-200/80 pt-12 pb-8 px-4 sm:px-8 mt-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-10 border-b border-mint-200/80">

          {/* Brand */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-2.5 mb-3">
              <MomoMascot size={40} />
              <span className="font-bubble text-2xl font-black tracking-tight text-mint-950">
                JASHU <span className="text-blush-500">MOMOS</span>
              </span>
            </div>
            <p className="font-sans text-sm text-mint-900/80 mb-6 max-w-sm font-medium leading-relaxed">
              {SITE_CONFIG.tagline} Made with friendship, served with happiness!
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a href={`https://wa.me/${SITE_CONFIG.whatsappNumber}`} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bubble text-xs font-bold px-4 py-2.5 rounded-full shadow-sm transition-all">
                <MessageSquare className="w-4 h-4" /><span>WhatsApp Order</span>
              </a>
              <a href={`https://instagram.com/${SITE_CONFIG.instagramHandle}`} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 text-white font-bubble text-xs font-bold px-4 py-2.5 rounded-full shadow-sm transition-all">
                <Instagram className="w-4 h-4" /><span>Instagram</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 flex flex-col">
            <h3 className="font-bubble text-base font-extrabold text-mint-950 mb-4 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2.5 font-bubble text-sm text-mint-900 font-semibold">
              {[["hero","🏠 Home"],["menu","🥟 Momo Menu"],["combo","💗 Num Num Combo"],["story","💚 Our Story"]].map(([id, label]) => (
                <li key={id}>
                  <button onClick={() => scrollTo(id)} className="hover:text-blush-600 transition-colors cursor-pointer">{label}</button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4 flex flex-col">
            <h3 className="font-bubble text-base font-extrabold text-mint-950 mb-4 uppercase tracking-wider">Find Our Shop</h3>
            <div className="space-y-3 font-sans text-xs sm:text-sm text-mint-900 font-medium">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blush-500 mt-0.5 flex-shrink-0" />
                <div><span className="font-bubble font-bold text-mint-950 block">Our Location</span><span>{SITE_CONFIG.location}</span></div>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-mint-600 mt-0.5 flex-shrink-0" />
                <div><span className="font-bubble font-bold text-mint-950 block">Opening Hours</span><span>{SITE_CONFIG.openingHours}</span></div>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-blush-500 mt-0.5 flex-shrink-0" />
                <div><span className="font-bubble font-bold text-mint-950 block">Contact Us</span><span>{SITE_CONFIG.contactPhone}</span></div>
              </div>
            </div>
          </div>

        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-bubble text-xs text-mint-900/70 font-semibold text-center">
          <div className="flex items-center gap-1">
            <span>© {SITE_CONFIG.copyrightYear} {SITE_CONFIG.name}. All rights reserved.</span>
            <Heart className="w-3.5 h-3.5 fill-blush-400 text-blush-400 inline" />
          </div>
          <p>Cute pastel momo website built with love and Next.js</p>
        </div>
      </div>
    </footer>
  );
};
