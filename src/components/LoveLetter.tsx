"use client";

import React, { useState } from "react";
import { MOM_DATA } from "@/data/momData";
import { Mail, Heart, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";
import { motion, AnimatePresence } from "framer-motion";

export default function LoveLetter() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleLetter = () => {
    const nextState = !isOpen;
    setIsOpen(nextState);

    if (nextState) {
      confetti({
        particleCount: 90,
        spread: 75,
        origin: { y: 0.7 },
        colors: ["#f43f5e", "#fb7185", "#fda4af", "#fbbf24", "#ffffff"],
      });
    }
  };

  return (
    <section id="carta" className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto relative z-10">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-4 mb-14"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#180b24]/90 border border-rose-500/30 text-rose-300 text-xs font-semibold uppercase tracking-wider shadow-lg backdrop-blur-xl">
          <Mail className="w-3.5 h-3.5 text-rose-400" />
          <span>Palabras del Corazón</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
          Una Carta Especial <span className="gradient-text-rose-vibrant">Para Ti</span>
        </h2>

        <p className="text-slate-300 max-w-md mx-auto text-base">
          Haz clic en el sobre para abrir mi dedicatoria especial para ti.
        </p>
      </motion.div>

      {/* Envelope & Letter Container with Scroll Reveal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="relative flex justify-center"
      >
        <AnimatePresence mode="wait">
          {!isOpen ? (
            /* Sealed Envelope View */
            <motion.div
              key="sealed"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              onClick={toggleLetter}
              className="w-full max-w-md bg-gradient-to-br from-[#280c2f] via-[#1a0823] to-[#360e33] rounded-3xl p-8 sm:p-12 text-white text-center shadow-[0_0_50px_rgba(244,63,94,0.25)] hover:shadow-[0_0_60px_rgba(244,63,94,0.45)] hover:scale-[1.02] transition-all duration-300 cursor-pointer relative overflow-hidden group border border-rose-500/40"
            >
              {/* Background Glow Pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(rgba(244,63,94,0.15)_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

              {/* Glowing Stamp Badge */}
              <div className="w-18 h-18 rounded-full bg-rose-600/30 border-2 border-rose-400/60 backdrop-blur-xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 group-hover:scale-110 shadow-[0_0_25px_rgba(244,63,94,0.6)] transition-all">
                <Heart className="w-9 h-9 fill-rose-400 text-rose-300 animate-pulse" />
              </div>

              <h3 className="font-serif text-2xl font-bold mb-2 text-white drop-shadow-md">
                Para la Mamá más Amada
              </h3>

              <p className="text-rose-200/80 text-sm mb-7">
                De tu hijo Carlitos, con todo mi amor
              </p>

              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-rose-600 to-pink-600 text-white font-semibold text-sm shadow-lg shadow-rose-900/60 group-hover:shadow-rose-600/50 transition-all border border-rose-400/30">
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Abrir Carta de Amor</span>
              </div>
            </motion.div>
          ) : (
            /* Open Letter Paper View with Dark Velvet / Gold Glow */
            <motion.div
              key="opened"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="w-full bg-[#180a22]/90 border border-rose-500/35 rounded-3xl p-6 sm:p-12 shadow-[0_0_50px_rgba(244,63,94,0.2)] backdrop-blur-2xl space-y-6 relative"
            >
              {/* Stamp Top Right */}
              <div className="absolute top-6 right-6 w-16 h-16 rounded-2xl bg-rose-950/80 border border-rose-400/50 flex items-center justify-center text-rose-300 font-serif font-bold text-xs rotate-6 shadow-lg shadow-rose-950/80">
                <div className="text-center">
                  <Heart className="w-4 h-4 fill-current mx-auto mb-0.5 text-rose-400" />
                  <span className="tracking-widest">AMOR</span>
                </div>
              </div>

              {/* Salutation */}
              <h3 className="font-serif text-2xl sm:text-3xl font-bold gradient-text-rose-vibrant">
                {MOM_DATA.letter.salutation}
              </h3>

              {/* Paragraphs */}
              <div className="space-y-4 text-slate-200 font-serif text-lg leading-relaxed font-normal">
                {MOM_DATA.letter.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* Signature & Closing */}
              <div className="pt-6 border-t border-rose-500/20 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
                <div>
                  <p className="text-sm text-slate-400 font-serif italic mb-1">
                    {MOM_DATA.letter.closing}
                  </p>
                  <p className="font-serif text-2xl font-bold text-rose-400 drop-shadow-[0_0_12px_rgba(244,63,94,0.4)]">
                    {MOM_DATA.letter.signature}
                  </p>
                </div>

                {/* Close / Fold button */}
                <button
                  onClick={toggleLetter}
                  className="px-5 py-2.5 bg-[#251034] hover:bg-rose-600/30 text-rose-300 hover:text-white text-sm font-semibold rounded-full border border-rose-500/30 shadow-md transition-all cursor-pointer"
                >
                  Cerrar Carta
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
