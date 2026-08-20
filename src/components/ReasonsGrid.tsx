"use client";

import React from "react";
import { MOM_DATA } from "@/data/momData";
import {
  HeartHandshake,
  ShieldCheck,
  Home,
  Sun,
  Gift,
  Star,
  Heart,
} from "lucide-react";
import { motion } from "framer-motion";

const iconMap: Record<string, React.ElementType> = {
  HeartHandshake,
  ShieldCheck,
  Home,
  Sun,
  Gift,
  Star,
};

export default function ReasonsGrid() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-4 mb-16"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#180b24]/90 border border-rose-500/30 text-rose-300 text-xs font-semibold uppercase tracking-wider shadow-lg backdrop-blur-xl">
          <Heart className="w-3.5 h-3.5 fill-current text-rose-400" />
          <span>Infinitos Motivos</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
          ¿Por qué te <span className="gradient-text-rose-vibrant">Amo Tanto</span>?
        </h2>

        <p className="text-slate-300 max-w-lg mx-auto text-base">
          Sobran las razones por las que eres la persona más importante para mí en esta vida.
        </p>
      </motion.div>

      {/* Grid with Staggered Scroll Reveal */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {MOM_DATA.reasons.map((reason, index) => {
          const Icon = iconMap[reason.icon] || Heart;

          return (
            <motion.div
              key={reason.id}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: index * 0.09 }}
              className="dark-glass-card p-8 rounded-3xl space-y-4 dark-glass-card-hover bg-[#140820]/80 relative group overflow-hidden"
            >
              {/* Top Accent Icon with Ambient Glow */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-600 via-pink-600 to-rose-500 text-white flex items-center justify-center shadow-lg shadow-rose-900/60 group-hover:scale-110 group-hover:shadow-rose-600/50 transition-all border border-rose-400/30">
                <Icon className="w-7 h-7" />
              </div>

              <div className="space-y-2">
                <h3 className="font-serif text-xl font-bold text-white group-hover:text-rose-300 transition-colors">
                  {reason.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  {reason.description}
                </p>
              </div>

              {/* Decorative heart watermark */}
              <Heart className="absolute -bottom-5 -right-5 w-28 h-28 text-rose-500/[0.05] pointer-events-none group-hover:text-rose-500/[0.12] group-hover:scale-110 transition-all" />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
