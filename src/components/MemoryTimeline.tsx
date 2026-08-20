"use client";

import React from "react";
import { MOM_DATA } from "@/data/momData";
import { Heart, Sparkles, Coffee, Smile, BookOpen } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Heart,
  Sparkles,
  Coffee,
  Smile,
};

export default function MemoryTimeline() {
  return (
    <section id="timeline" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="text-center space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-100 text-rose-700 text-xs font-semibold uppercase tracking-wider">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Línea del Tiempo</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-slate-900">
          Momentos <span className="gradient-text-rose">Inolvidables</span>
        </h2>
        <p className="text-slate-600 max-w-lg mx-auto text-base">
          Detalles y vivencias que hacen que nuestro camino a tu lado sea una historia maravillosa.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Central Vertical Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-rose-300 via-pink-400 to-rose-200 -translate-x-1/2" />

        <div className="space-y-12">
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
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white border-2 border-rose-500 flex items-center justify-center text-rose-500 shadow-md shadow-rose-200 z-10">
                  <Icon className="w-5 h-5 fill-rose-50" />
                </div>

                {/* Content Card */}
                <div
                  className={`ml-12 md:ml-0 md:w-[45%] ${
                    isEven ? "md:text-right md:pr-8" : "md:pl-8"
                  }`}
                >
                  <div className="glass-card p-6 rounded-2xl space-y-3 glass-card-hover bg-white/90">
                    <div
                      className={`flex items-center gap-2 ${
                        isEven ? "md:justify-end" : "justify-start"
                      }`}
                    >
                      <span className="px-3 py-1 rounded-full bg-rose-100 text-rose-700 text-xs font-bold">
                        {item.year}
                      </span>
                      <span className="text-xs font-medium text-slate-500">
                        • {item.tag}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
