"use client";

import React, { useState } from "react";
import { MOM_DATA } from "@/data/momData";
import { Mail, Heart, Sparkles, CheckCircle2 } from "lucide-react";
import confetti from "canvas-confetti";

export default function LoveLetter() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleLetter = () => {
    const nextState = !isOpen;
    setIsOpen(nextState);

    if (nextState) {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.7 },
        colors: ["#e11d48", "#fda4af", "#f59e0b"],
      });
    }
  };

  return (
    <section id="carta" className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      {/* Section Header */}
      <div className="text-center space-y-4 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-100 text-rose-700 text-xs font-semibold uppercase tracking-wider">
          <Mail className="w-3.5 h-3.5" />
          <span>Palabras del Corazón</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-slate-900">
          Una Carta Especial <span className="gradient-text-rose">Para Ti</span>
        </h2>
        <p className="text-slate-600 max-w-md mx-auto text-base">
          Haz clic en el sobre para abrir nuestra dedicatoria especial.
        </p>
      </div>

      {/* Envelope & Letter Container */}
      <div className="relative flex justify-center">
        {!isOpen ? (
          /* Sealed Envelope View */
          <div
            onClick={toggleLetter}
            className="w-full max-w-md bg-gradient-to-br from-rose-500 via-pink-500 to-rose-600 rounded-3xl p-8 sm:p-12 text-white text-center shadow-xl shadow-rose-300/60 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 cursor-pointer relative overflow-hidden group border border-rose-300/40"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />

            {/* Stamp/Heart Badge */}
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 group-hover:scale-110 transition-transform">
              <Heart className="w-8 h-8 fill-white animate-pulse" />
            </div>

            <h3 className="font-serif text-2xl font-bold mb-2">
              Para la Mamá más Amada
            </h3>
            <p className="text-rose-100 text-sm mb-6">
              Guardado con cariño en este sobre especial
            </p>

            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-rose-600 font-semibold text-sm shadow-md group-hover:bg-rose-50 transition-colors">
              <Sparkles className="w-4 h-4" />
              <span>Abrir Carta de Amor</span>
            </div>
          </div>
        ) : (
          /* Open Letter Paper View */
          <div className="w-full bg-amber-50/70 border border-amber-200/70 rounded-3xl p-6 sm:p-12 shadow-xl shadow-rose-900/5 backdrop-blur-md space-y-6 relative animate-fade-in">
            {/* Stamp Top Right */}
            <div className="absolute top-6 right-6 w-14 h-14 rounded-2xl bg-rose-100 border border-rose-300 flex items-center justify-center text-rose-600 font-serif font-bold text-xs rotate-6 shadow-sm">
              <div className="text-center">
                <Heart className="w-4 h-4 fill-current mx-auto mb-0.5" />
                <span>AMOR</span>
              </div>
            </div>

            {/* Salutation */}
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-rose-900">
              {MOM_DATA.letter.salutation}
            </h3>

            {/* Paragraphs */}
            <div className="space-y-4 text-slate-700 font-serif text-lg leading-relaxed">
              {MOM_DATA.letter.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Signature & Closing */}
            <div className="pt-6 border-t border-rose-200/60 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
              <div>
                <p className="text-sm text-slate-500 font-serif italic mb-1">
                  {MOM_DATA.letter.closing}
                </p>
                <p className="font-serif text-2xl font-bold text-rose-700">
                  {MOM_DATA.letter.signature}
                </p>
              </div>

              {/* Close / Fold button */}
              <button
                onClick={toggleLetter}
                className="px-4 py-2 bg-white hover:bg-rose-50 text-rose-700 text-sm font-semibold rounded-full border border-rose-200 shadow-sm transition-colors"
              >
                Cerrar Carta
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
