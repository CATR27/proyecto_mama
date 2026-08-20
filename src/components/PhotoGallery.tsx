"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MOM_DATA, PhotoItem } from "@/data/momData";
import { Sparkles, Maximize2, X, ChevronLeft, ChevronRight, Calendar, Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function PhotoGallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todas");
  const [activePhoto, setActivePhoto] = useState<PhotoItem | null>(null);

  const categories = ["Todas", "Familia", "Celebraciones", "Sonrisas", "Recuerdos"];

  const filteredPhotos =
    selectedCategory === "Todas"
      ? MOM_DATA.photos
      : MOM_DATA.photos.filter((p) => p.category === selectedCategory);

  const currentIndex = activePhoto
    ? filteredPhotos.findIndex((p) => p.id === activePhoto.id)
    : -1;

  const handlePrev = () => {
    if (currentIndex > 0) {
      setActivePhoto(filteredPhotos[currentIndex - 1]);
    } else {
      setActivePhoto(filteredPhotos[filteredPhotos.length - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex < filteredPhotos.length - 1) {
      setActivePhoto(filteredPhotos[currentIndex + 1]);
    } else {
      setActivePhoto(filteredPhotos[0]);
    }
  };

  return (
    <section id="galeria" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative z-10">
      {/* Section Header with Parallax Reveal */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-4 mb-20"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#180b24]/90 border border-rose-500/30 text-rose-300 text-xs font-semibold uppercase tracking-widest shadow-lg shadow-rose-950/60 backdrop-blur-xl">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Colección Fotográfica</span>
        </div>

        <h2 className="font-serif text-4xl sm:text-6xl font-bold text-white tracking-tight">
          Momentos en <span className="gradient-text-rose-vibrant">Retrato</span>
        </h2>

        <p className="text-slate-300 max-w-xl mx-auto text-base sm:text-lg">
          Desliza para revivir cada recuerdo en un formato vertical editorial de alta definición.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 pt-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all cursor-pointer border ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-rose-600 to-pink-600 text-white border-rose-400/60 shadow-lg shadow-rose-900/60 scale-105"
                  : "bg-[#14081f]/80 text-slate-300 hover:text-white hover:bg-rose-950/40 border-rose-500/20 backdrop-blur-md"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Vertical Cinematic Photo Showcase (Editorial Layout) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
        {filteredPhotos.map((photo, index) => {
          const isOdd = index % 2 !== 0;

          return (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 70, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: (index % 2) * 0.15, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setActivePhoto(photo)}
              className={`group relative rounded-[2.5rem] overflow-hidden cursor-pointer shadow-2xl transition-all duration-700 hover:shadow-[0_0_50px_rgba(244,63,94,0.4)] border border-rose-500/20 hover:border-rose-400/60 ${
                isOdd ? "md:mt-12" : ""
              }`}
            >
              {/* Vertical Image Aspect Ratio (3:4 portrait) */}
              <div className="relative aspect-[3/4] w-full bg-[#0d0515] overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-108 transition-transform duration-1000 ease-out brightness-90 group-hover:brightness-105"
                  unoptimized
                />

                {/* Ambient Cinematic Vignette / Glass Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#09050d] via-[#09050d]/30 to-transparent opacity-85 group-hover:opacity-75 transition-opacity duration-500" />

                {/* Floating Top Category Badge */}
                <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10">
                  <span className="text-xs font-semibold px-4 py-1.5 rounded-full bg-[#09050d]/80 text-rose-300 border border-rose-500/30 backdrop-blur-xl shadow-lg">
                    {photo.category}
                  </span>

                  <div className="w-11 h-11 rounded-full bg-[#09050d]/70 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white group-hover:bg-rose-600 group-hover:scale-110 transition-all shadow-lg">
                    <Maximize2 className="w-4 h-4 text-rose-200 group-hover:text-white" />
                  </div>
                </div>

                {/* Bottom Story Content (Pure Photography Aesthetics) */}
                <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10 z-10 space-y-3">
                  {photo.date && (
                    <div className="flex items-center gap-2 text-xs font-medium text-amber-300/90 tracking-wider uppercase">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{photo.date}</span>
                    </div>
                  )}

                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white group-hover:text-rose-200 transition-colors drop-shadow-[0_2px_15px_rgba(0,0,0,0.8)] leading-tight">
                    {photo.title}
                  </h3>

                  <p className="text-sm text-slate-300/90 leading-relaxed font-light line-clamp-3 group-hover:text-slate-100 transition-colors">
                    {photo.description}
                  </p>

                  <div className="pt-2 flex items-center gap-2 text-rose-400 text-xs font-semibold tracking-wide">
                    <Heart className="w-4 h-4 fill-current animate-pulse" />
                    <span>Toca para ver en pantalla completa</span>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Lightbox Modal for Full Resolution */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#09050d]/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6"
          >
            {/* Close Button */}
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-6 right-6 p-3.5 rounded-full bg-white/10 hover:bg-rose-600 text-white transition-all cursor-pointer z-20 border border-white/10 shadow-lg"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Previous Button */}
            <button
              onClick={handlePrev}
              className="absolute left-6 top-1/2 -translate-y-1/2 p-3.5 rounded-full bg-white/10 hover:bg-rose-600 text-white transition-all cursor-pointer z-20 hidden sm:block border border-white/10 shadow-lg"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-6 top-1/2 -translate-y-1/2 p-3.5 rounded-full bg-white/10 hover:bg-rose-600 text-white transition-all cursor-pointer z-20 hidden sm:block border border-white/10 shadow-lg"
            >
              <ChevronRight className="w-7 h-7" />
            </button>

            {/* Modal Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-5xl w-full bg-[#12071d] rounded-3xl overflow-hidden shadow-[0_0_80px_rgba(244,63,94,0.3)] border border-rose-500/30 flex flex-col md:flex-row max-h-[92vh]"
            >
              {/* Image Preview */}
              <div className="relative flex-1 min-h-[350px] md:min-h-[580px] bg-black flex items-center justify-center">
                <Image
                  src={activePhoto.src}
                  alt={activePhoto.title}
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>

              {/* Photo Sidebar */}
              <div className="w-full md:w-88 p-8 bg-[#160a24] text-white flex flex-col justify-between space-y-6 border-t md:border-t-0 md:border-l border-rose-500/20">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold px-3.5 py-1 rounded-full bg-gradient-to-r from-rose-600 to-pink-600 text-white border border-rose-400/30">
                      {activePhoto.category}
                    </span>
                    {activePhoto.date && (
                      <span className="text-xs text-slate-400 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-rose-400" />
                        {activePhoto.date}
                      </span>
                    )}
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight">
                    {activePhoto.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed font-light">
                    {activePhoto.description}
                  </p>
                </div>

                {/* Navigation Controls inside info on mobile */}
                <div className="flex items-center justify-between pt-5 border-t border-rose-500/20">
                  <div className="flex items-center gap-2 text-xs text-rose-300 font-medium">
                    <Heart className="w-4 h-4 text-rose-500 fill-current" />
                    <span>
                      {currentIndex + 1} de {filteredPhotos.length}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 sm:hidden">
                    <button
                      onClick={handlePrev}
                      className="p-2.5 rounded-xl bg-[#251238] text-white"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={handleNext}
                      className="p-2.5 rounded-xl bg-[#251238] text-white"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
