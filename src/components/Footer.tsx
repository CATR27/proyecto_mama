"use client";

import React from "react";
import Image from "next/image";
import { Heart, ArrowUp, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const triggerLoveExplosion = () => {
    confetti({
      particleCount: 140,
      spread: 95,
      origin: { y: 0.75 },
      colors: ["#f43f5e", "#fb7185", "#fda4af", "#fbbf24", "#ffffff"],
    });
  };

  return (
    <footer className="bg-gradient-to-b from-[#09050d] via-[#15071e] to-[#050208] text-white pt-24 pb-14 border-t border-rose-500/20 relative overflow-hidden z-10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-9 relative z-10">
        {/* Creative Final Signature Photo - 100% Complete & Uncropped */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 35 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-[280px] sm:max-w-[340px] md:max-w-[380px] w-full mx-auto group"
        >
          {/* Ambient Glowing Halo behind the complete photo */}
          <div className="absolute -inset-3 bg-gradient-to-tr from-rose-600 via-pink-500 to-amber-400 rounded-[2.5rem] opacity-60 blur-2xl group-hover:opacity-85 transition-opacity duration-700 animate-pulse-glow" />

          {/* Photo Frame matching exact 4:5 natural aspect ratio for zero cropping */}
          <div className="relative aspect-[4/5] w-full rounded-[2.2rem] overflow-hidden border-2 border-rose-400/80 shadow-[0_0_55px_rgba(244,63,94,0.45)] bg-[#0d0515]">
            <Image
              src="/photos/foto finall.png"
              alt="Foto Final - Con todo mi amor"
              fill
              sizes="(max-width: 768px) 90vw, 380px"
              className="object-contain sm:object-cover group-hover:scale-104 transition-transform duration-1000 ease-out"
              unoptimized
            />

            {/* Subtle Gradient Vignette at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#09050d]/40 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Floating Interactive Heart Reaction Badge */}
          <motion.button
            whileHover={{ scale: 1.15, rotate: 6 }}
            whileTap={{ scale: 0.9 }}
            onClick={triggerLoveExplosion}
            title="¡Toca para enviar una explosión de amor!"
            className="absolute -bottom-3 -right-3 sm:-bottom-2 sm:-right-2 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-rose-600 to-pink-500 text-white flex items-center justify-center shadow-[0_0_30px_rgba(244,63,94,0.8)] border-2 border-white/40 cursor-pointer z-20 group/btn"
          >
            <Heart className="w-7 h-7 sm:w-8 sm:h-8 fill-current text-white animate-pulse" />
          </motion.button>
        </motion.div>

        {/* Heartfelt Closing Dedication */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="space-y-3 max-w-lg mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#180b24]/90 border border-rose-500/30 text-rose-300 text-xs font-semibold uppercase tracking-widest backdrop-blur-xl">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Para Siempre Juntos</span>
          </div>

          <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Te Amo Infinitamente, <br className="hidden sm:inline" />
            <span className="gradient-text-rose-vibrant">Mamá</span>
          </h3>

          <p className="text-rose-100/90 text-sm sm:text-base leading-relaxed font-light px-2">
            Un regalo de tu hijo Carlitos, para recordarte siempre lo inmensamente especial que eres en mi vida.
          </p>
        </motion.div>

        {/* Back to top button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="pt-2 flex items-center justify-center"
        >
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-[#180a24]/90 hover:bg-rose-600/30 text-rose-200 hover:text-white text-xs sm:text-sm font-semibold backdrop-blur-xl transition-all cursor-pointer border border-rose-500/35 shadow-lg hover:scale-105 active:scale-95"
          >
            <ArrowUp className="w-4 h-4 text-rose-400" />
            <span>Volver Arriba</span>
          </button>
        </motion.div>

        {/* Bottom Credits / Signature */}
        <div className="pt-8 border-t border-rose-500/15 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div className="flex items-center gap-1.5 text-rose-300">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Para la mejor mamá • De tu hijo Carlitos</span>
          </div>
          <div>
            <span className="text-rose-300/90 font-medium">Con todo mi corazón ❤️</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
