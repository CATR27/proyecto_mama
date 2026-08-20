"use client";

import React from "react";
import { Heart, ArrowUp, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const triggerLoveExplosion = () => {
    confetti({
      particleCount: 130,
      spread: 95,
      origin: { y: 0.8 },
      colors: ["#f43f5e", "#fb7185", "#fda4af", "#fbbf24", "#ffffff"],
    });
  };

  return (
    <footer className="bg-gradient-to-b from-[#09050d] via-[#120619] to-[#050208] text-white pt-20 pb-12 border-t border-rose-500/20 relative overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
        {/* Heart Icon Button with Neon Glow */}
        <motion.button
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          onClick={triggerLoveExplosion}
          className="w-18 h-18 rounded-full bg-gradient-to-tr from-rose-600 to-pink-500 text-white flex items-center justify-center mx-auto shadow-[0_0_35px_rgba(244,63,94,0.6)] border border-rose-300/40 cursor-pointer group"
        >
          <Heart className="w-9 h-9 fill-current group-hover:animate-ping" />
        </motion.button>

        <div className="space-y-2">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Te Amamos Infinitamente, Mamá
          </h3>
          <p className="text-rose-200/70 text-sm max-w-md mx-auto">
            Creado para recordarte cada día lo importante, valiosa y amada que eres en nuestras vidas.
          </p>
        </div>

        {/* Back to top */}
        <div className="pt-4 flex items-center justify-center gap-4">
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#180a24]/80 hover:bg-rose-600/30 text-rose-200 text-xs font-semibold backdrop-blur-xl transition-all cursor-pointer border border-rose-500/30 shadow-lg"
          >
            <ArrowUp className="w-4 h-4 text-rose-400" />
            <span>Volver Arriba</span>
          </button>
        </div>

        <div className="pt-8 border-t border-rose-500/15 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-rose-400" />
            <span>Proyecto Mami • Celebración & Amor</span>
          </div>
          <div>
            <span>Hecho con ❤️ en Next.js, Framer Motion & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
