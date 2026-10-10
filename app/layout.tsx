import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JASHU MOMOS — Little Momos, Big Happiness! 🥟💗",
  description: "100% Veg momos — Phatka, Chaptale, Kurkure, Steam Momos and Num Num Combo by JASHU MOMOS.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-gradient-to-b from-mint-50 via-cream-100 to-mint-50/50 text-mint-950 antialiased selection:bg-blush-200 selection:text-blush-900">
        {children}
      </body>
    </html>
  );
}
