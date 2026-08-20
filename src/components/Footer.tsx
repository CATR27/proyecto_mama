"use client";

import React from "react";
import { Heart, ArrowUp, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const triggerLoveExplosion = () => {
    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.8 },
      colors: ["#e11d48", "#f43f5e", "#fda4af", "#ffffff"],
    });
  };

  return (
    <footer className="bg-gradient-to-b from-rose-900 via-slate-950 to-slate-950 text-white pt-16 pb-12 border-t border-rose-800/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
        {/* Heart Icon Button */}
        <button
          onClick={triggerLoveExplosion}
          className="w-16 h-16 rounded-full bg-rose-500 hover:bg-rose-600 text-white flex items-center justify-center mx-auto shadow-lg shadow-rose-500/40 hover:scale-110 active:scale-95 transition-all cursor-pointer group"
        >
          <Heart className="w-8 h-8 fill-current group-hover:animate-ping" />
        </button>

        <div className="space-y-2">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight">
            Te Amamos Infinitamente, Mamá
          </h3>
          <p className="text-rose-200 text-sm max-w-md mx-auto">
            Creado para recordarte cada día lo importante, valiosa y amada que eres en nuestras vidas.
          </p>
        </div>

        {/* Back to top */}
        <div className="pt-4 flex items-center justify-center gap-4">
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-rose-100 text-xs font-semibold backdrop-blur-md transition-colors cursor-pointer border border-white/10"
          >
            <ArrowUp className="w-4 h-4" />
            <span>Volver Arriba</span>
          </button>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-rose-400" />
            <span>Proyecto Mami • Celebración & Amor</span>
          </div>
          <div>
            <span>Hecho con ❤️ en Next.js & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
