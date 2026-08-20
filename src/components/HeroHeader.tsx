"use client";

import React from "react";
import { Heart, Sparkles, Image, Mail, ArrowDown } from "lucide-react";
import { MOM_DATA } from "@/data/momData";
import confetti from "canvas-confetti";

export default function HeroHeader() {
  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#e11d48", "#f43f5e", "#fda4af", "#fbbf24", "#ffffff"],
    });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Decorative Blur Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-rose-200/50 via-pink-200/40 to-amber-100/30 rounded-full blur-3xl -z-10 animate-pulse-glow" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-rose-300/30 rounded-full blur-2xl -z-10 animate-float" />
      <div className="absolute top-20 right-10 w-80 h-80 bg-amber-200/30 rounded-full blur-2xl -z-10 animate-float-delayed" />

      {/* Floating Animated Hearts */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[15%] left-[8%] animate-float text-rose-300/60">
          <Heart className="w-8 h-8 fill-current" />
        </div>
        <div className="absolute top-[40%] right-[12%] animate-float-delayed text-pink-300/60">
          <Heart className="w-10 h-10 fill-current" />
        </div>
        <div className="absolute bottom-[20%] left-[15%] animate-float text-rose-400/40">
          <Sparkles className="w-7 h-7" />
        </div>
        <div className="absolute top-[25%] right-[25%] animate-float-delayed text-amber-300/50">
          <Sparkles className="w-6 h-6" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-8 relative">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-100/80 border border-rose-200/80 text-rose-700 text-xs sm:text-sm font-semibold tracking-wide shadow-sm backdrop-blur-md animate-fade-in">
          <Sparkles className="w-4 h-4 text-rose-500 animate-spin-slow" />
          <span>{MOM_DATA.header.badge}</span>
        </div>

        {/* Hero Title */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-slate-900 leading-[1.15]">
          Para la mejor <br className="hidden sm:inline" />
          <span className="gradient-text-rose relative inline-block">
            Mamá del Universo
            <svg
              className="absolute -bottom-2 left-0 w-full h-3 text-rose-400/40"
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
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
          {MOM_DATA.header.subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href="#galeria"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-2xl font-semibold shadow-lg shadow-rose-300/50 hover:shadow-xl hover:shadow-rose-400/60 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
          >
            <Image className="w-5 h-5" />
            <span>Explorar Galería de Fotos</span>
          </a>

          <a
            href="#carta"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 bg-white/80 hover:bg-white text-rose-900 border border-rose-200/80 rounded-2xl font-semibold shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer backdrop-blur-md"
          >
            <Mail className="w-5 h-5 text-rose-500" />
            <span>Leer Carta Especial</span>
          </a>

          <button
            onClick={triggerConfetti}
            title="¡Enviar amor!"
            className="p-4 bg-rose-100 hover:bg-rose-200 text-rose-600 rounded-2xl border border-rose-300/60 transition-transform active:scale-95 cursor-pointer"
          >
            <Heart className="w-6 h-6 fill-rose-500 animate-bounce" />
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-10">
          {MOM_DATA.header.stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card p-5 rounded-2xl text-center space-y-1 hover:border-rose-300 transition-colors"
            >
              <div className="text-3xl sm:text-4xl font-serif font-extrabold text-rose-600">
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="pt-8 flex justify-center">
          <a
            href="#galeria"
            className="p-3 text-rose-400 hover:text-rose-600 transition-colors animate-bounce"
            aria-label="Desplazar abajo"
          >
            <ArrowDown className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
