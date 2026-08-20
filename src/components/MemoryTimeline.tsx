"use client";

import React from "react";
import { MOM_DATA } from "@/data/momData";
import { Heart, Sparkles, Coffee, Smile, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

const iconMap: Record<string, React.ElementType> = {
  Heart,
  Sparkles,
  Coffee,
  Smile,
};

export default function MemoryTimeline() {
  return (
    <section id="timeline" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto relative z-10 overflow-hidden">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-3 sm:space-y-4 mb-16 sm:mb-20"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#180b24]/90 border border-rose-500/30 text-rose-300 text-xs font-semibold uppercase tracking-wider shadow-lg backdrop-blur-xl">
          <BookOpen className="w-3.5 h-3.5 text-rose-400" />
          <span>Línea del Tiempo</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
          Momentos <span className="gradient-text-rose-vibrant">Inolvidables</span>
        </h2>

        <p className="text-slate-300 max-w-lg mx-auto text-sm sm:text-base font-light px-2">
          Detalles y recuerdos que hacen que mi camino a tu lado como tu hijo sea la experiencia más hermosa.
        </p>
      </motion.div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Central Vertical Neon Line */}
        <div className="absolute left-3.5 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-rose-500 via-pink-500 to-amber-500 -translate-x-1/2 shadow-[0_0_15px_rgba(244,63,94,0.8)]" />

        <div className="space-y-12 sm:space-y-16">
          {MOM_DATA.timeline.map((item, index) => {
            const Icon = iconMap[item.iconName] || Heart;
            const isEven = index % 2 === 0;

            return (
              <div
                key={item.id}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Node Icon on Line */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="absolute left-3.5 md:left-1/2 -translate-x-1/2 w-9 sm:w-11 h-9 sm:h-11 rounded-full bg-[#12071d] border-2 border-rose-400 flex items-center justify-center text-rose-400 shadow-[0_0_20px_rgba(244,63,94,0.5)] z-10 group"
                >
                  <Icon className="w-4 sm:w-5 h-4 sm:h-5 group-hover:scale-115 transition-transform" />
                </motion.div>

                {/* Content Card with strictly vertical scroll reveal */}
                <motion.div
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`ml-9 sm:ml-12 md:ml-0 md:w-[45%] ${
                    isEven ? "md:text-right md:pr-10" : "md:pl-10"
                  }`}
                >
                  <div className="dark-glass-card p-5 sm:p-7 rounded-3xl space-y-2.5 sm:space-y-3 dark-glass-card-hover bg-[#140820]/90">
                    <div
                      className={`flex items-center gap-2.5 ${
                        isEven ? "md:justify-end" : "justify-start"
                      }`}
                    >
                      <span className="px-3 py-1 rounded-full bg-rose-600/30 text-rose-300 border border-rose-500/30 text-xs font-bold shadow-inner">
                        {item.year}
                      </span>
                      <span className="text-xs font-medium text-amber-300/80">
                        • {item.tag}
                      </span>
                    </div>

                    <h3 className="font-serif text-lg sm:text-xl font-bold text-white group-hover:text-rose-300 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
