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
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gradient-to-b from-transparent via-rose-50/50 to-transparent rounded-3xl my-12">
      {/* Section Header */}
      <div className="text-center space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-100 text-rose-700 text-xs font-semibold uppercase tracking-wider">
          <Heart className="w-3.5 h-3.5 fill-current" />
          <span>Infinitos Motivos</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-slate-900">
          ¿Por qué te <span className="gradient-text-rose">Amamos Tanto</span>?
        </h2>
        <p className="text-slate-600 max-w-lg mx-auto text-base">
          Sobran las razones para celebrarte hoy y cada día de la vida.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOM_DATA.reasons.map((reason) => {
          const Icon = iconMap[reason.icon] || Heart;

          return (
            <div
              key={reason.id}
              className="glass-card p-7 rounded-3xl space-y-4 glass-card-hover bg-white/80 border border-rose-100 relative group overflow-hidden"
            >
              {/* Top Accent Icon */}
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-500 to-pink-500 text-white flex items-center justify-center shadow-md shadow-rose-200 group-hover:scale-110 transition-transform">
                <Icon className="w-6 h-6" />
              </div>

              <div className="space-y-2">
                <h3 className="font-serif text-xl font-bold text-slate-900 group-hover:text-rose-600 transition-colors">
                  {reason.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>

              {/* Decorative heart watermark */}
              <Heart className="absolute -bottom-4 -right-4 w-24 h-24 text-rose-100/60 pointer-events-none group-hover:text-rose-200/60 transition-colors" />
            </div>
          );
        })}
      </div>
    </section>
  );
}
