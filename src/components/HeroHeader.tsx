"use client";

import React, { useRef } from "react";
import { Heart, Sparkles, Image, Mail, ArrowDown } from "lucide-react";
import { MOM_DATA } from "@/data/momData";
import confetti from "canvas-confetti";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function HeroHeader() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 20 });

  // Responsive Parallax transform values (gentle on mobile, deep on desktop)
  const yHero = useTransform(smoothProgress, [0, 1], [0, 90]);
  const yStats = useTransform(smoothProgress, [0, 1], [0, 45]);
  const opacityHero = useTransform(smoothProgress, [0, 0.85], [1, 0.15]);
  const scaleHero = useTransform(smoothProgress, [0, 1], [1, 0.96]);

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
      className="relative min-h-[88vh] sm:min-h-[92vh] flex items-center justify-center pt-24 sm:pt-28 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden transform-gpu"
    >
      {/* Floating Animated Hearts in Parallax */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <motion.div
          animate={{ y: [0, -14, 0], rotate: [0, 6, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[16%] left-[6%] sm:left-[8%] text-rose-500/25 drop-shadow-[0_0_15px_rgba(244,63,94,0.4)]"
        >
          <Heart className="w-8 sm:w-10 h-8 sm:h-10 fill-current" />
        </motion.div>

        <motion.div
          animate={{ y: [0, -18, 0], rotate: [0, -8, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[38%] right-[6%] sm:right-[10%] text-pink-400/30 drop-shadow-[0_0_20px_rgba(251,113,133,0.5)]"
        >
          <Heart className="w-9 sm:w-12 h-9 sm:h-12 fill-current" />
        </motion.div>

        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[20%] left-[8%] sm:left-[12%] text-amber-400/25 drop-shadow-[0_0_12px_rgba(251,191,36,0.4)]"
        >
          <Sparkles className="w-6 sm:w-8 h-6 sm:h-8" />
        </motion.div>
      </div>

      <motion.div
        style={{ y: yHero, opacity: opacityHero, scale: scaleHero }}
        className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 relative z-10"
      >
        {/* Glowing Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#180a24]/85 border border-rose-500/40 text-rose-300 text-xs sm:text-sm font-semibold tracking-wide shadow-lg shadow-rose-950/60 backdrop-blur-xl"
        >
          <Sparkles className="w-4 h-4 text-amber-400 animate-spin-slow" />
          <span>{MOM_DATA.header.badge}</span>
        </motion.div>

        {/* Hero Title with Ambient Glow */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="font-serif text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.15]"
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
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed px-2"
        >
          {MOM_DATA.header.subtitle}
        </motion.p>

        {/* Stats Grid with Parallax and Glowing Borders */}
        <motion.div
          style={{ y: yStats }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-6 sm:pt-10"
        >
          {MOM_DATA.header.stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="dark-glass-card p-4 sm:p-5 rounded-2xl text-center space-y-1 dark-glass-card-hover group"
            >
              <div className="text-2xl sm:text-4xl font-serif font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-300 group-hover:from-rose-300 group-hover:to-amber-200 transition-colors drop-shadow-[0_0_15px_rgba(244,63,94,0.3)]">
                {stat.number}
              </div>
              <div className="text-[11px] sm:text-sm font-medium text-slate-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <div className="pt-6 sm:pt-8 flex justify-center">
          <a
            href="#galeria"
            className="p-2 sm:p-3 text-rose-400 hover:text-rose-300 transition-colors animate-bounce cursor-pointer"
            aria-label="Desplazar abajo"
          >
            <ArrowDown className="w-5 sm:w-6 h-5 sm:h-6 drop-shadow-[0_0_8px_rgba(244,63,94,0.6)]" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
