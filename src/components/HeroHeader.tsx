"use client";

import React, { useRef } from "react";
import { Heart, Sparkles, Image, Mail, ArrowDown } from "lucide-react";
import { MOM_DATA } from "@/data/momData";
import confetti from "canvas-confetti";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroHeader() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax transform values
  const yHero = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const yStats = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.85], [1, 0.1]);
  const scaleHero = useTransform(scrollYProgress, [0, 1], [1, 0.94]);

  const triggerConfetti = () => {
    confetti({
      particleCount: 110,
      spread: 85,
      origin: { y: 0.6 },
      colors: ["#f43f5e", "#fb7185", "#fda4af", "#fbbf24", "#ffffff"],
    });
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Floating Animated Hearts in Parallax */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <motion.div
          animate={{ y: [0, -18, 0], rotate: [0, 8, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[18%] left-[8%] text-rose-500/30 drop-shadow-[0_0_15px_rgba(244,63,94,0.4)]"
        >
          <Heart className="w-10 h-10 fill-current" />
        </motion.div>

        <motion.div
          animate={{ y: [0, -22, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[42%] right-[10%] text-pink-400/35 drop-shadow-[0_0_20px_rgba(251,113,133,0.5)]"
        >
          <Heart className="w-12 h-12 fill-current" />
        </motion.div>

        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[22%] left-[12%] text-amber-400/30 drop-shadow-[0_0_12px_rgba(251,191,36,0.4)]"
        >
          <Sparkles className="w-8 h-8" />
        </motion.div>

        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute top-[28%] right-[22%] text-rose-400/25 drop-shadow-[0_0_15px_rgba(244,63,94,0.3)]"
        >
          <Sparkles className="w-7 h-7" />
        </motion.div>
      </div>

      <motion.div
        style={{ y: yHero, opacity: opacityHero, scale: scaleHero }}
        className="max-w-4xl mx-auto text-center space-y-8 relative z-10"
      >
        {/* Glowing Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#180a24]/85 border border-rose-500/40 text-rose-300 text-xs sm:text-sm font-semibold tracking-wide shadow-lg shadow-rose-950/60 backdrop-blur-xl"
        >
          <Sparkles className="w-4 h-4 text-amber-400 animate-spin-slow" />
          <span>{MOM_DATA.header.badge}</span>
        </motion.div>

        {/* Hero Title with Ambient Glow */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.12]"
        >
          Para la mejor <br className="hidden sm:inline" />
          <span className="gradient-text-rose-vibrant relative inline-block drop-shadow-[0_0_35px_rgba(244,63,94,0.35)]">
            Mamá del Universo
            <svg
              className="absolute -bottom-2 left-0 w-full h-3 text-rose-500/60"
              viewBox="0 0 100 20"
              preserveAspectRatio="none"
            >
              <path
                d="M0 15 Q 50 0, 100 15"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              />
            </svg>
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed drop-shadow-sm"
        >
          {MOM_DATA.header.subtitle}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <a
            href="#galeria"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-gradient-to-r from-rose-600 via-pink-600 to-rose-500 text-white rounded-2xl font-semibold shadow-xl shadow-rose-900/50 hover:shadow-rose-600/60 hover:-translate-y-1 active:translate-y-0 transition-all cursor-pointer border border-rose-400/30 group"
          >
            <Image className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>Explorar Galería de Fotos</span>
          </a>

          <a
            href="#carta"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#1a0c28]/80 hover:bg-[#251038] text-rose-200 border border-rose-500/30 rounded-2xl font-semibold shadow-lg hover:shadow-rose-900/40 hover:-translate-y-1 transition-all cursor-pointer backdrop-blur-xl"
          >
            <Mail className="w-5 h-5 text-rose-400" />
            <span>Leer Carta Especial</span>
          </a>

          <button
            onClick={triggerConfetti}
            title="¡Enviar amor!"
            className="p-4 bg-[#1f0d30]/90 hover:bg-rose-500/30 text-rose-400 hover:text-rose-200 rounded-2xl border border-rose-500/40 transition-all active:scale-95 cursor-pointer shadow-lg shadow-rose-950/50 group"
          >
            <Heart className="w-6 h-6 fill-rose-500 group-hover:scale-125 transition-transform" />
          </button>
        </motion.div>

        {/* Stats Grid with Parallax and Glowing Borders */}
        <motion.div
          style={{ y: yStats }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-10"
        >
          {MOM_DATA.header.stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="dark-glass-card p-5 rounded-2xl text-center space-y-1.5 dark-glass-card-hover group"
            >
              <div className="text-3xl sm:text-4xl font-serif font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-300 group-hover:from-rose-300 group-hover:to-amber-200 transition-colors drop-shadow-[0_0_15px_rgba(244,63,94,0.3)]">
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <div className="pt-8 flex justify-center">
          <a
            href="#galeria"
            className="p-3 text-rose-400 hover:text-rose-300 transition-colors animate-bounce cursor-pointer"
            aria-label="Desplazar abajo"
          >
            <ArrowDown className="w-6 h-6 drop-shadow-[0_0_8px_rgba(244,63,94,0.6)]" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
