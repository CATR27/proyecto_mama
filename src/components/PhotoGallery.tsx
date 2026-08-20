"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MOM_DATA, PhotoItem } from "@/data/momData";
import { Sparkles, Maximize2, X, ChevronLeft, ChevronRight, Calendar, Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function PhotoGallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todas");
  const [activePhoto, setActivePhoto] = useState<PhotoItem | null>(null);

  const categories = ["Todas", "Celebraciones", "Sonrisas", "Familia", "Recuerdos"];

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
    <section id="galeria" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      {/* Section Header with Parallax Reveal */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-4 mb-14"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#180b24]/90 border border-rose-500/30 text-rose-300 text-xs font-semibold uppercase tracking-wider shadow-lg shadow-rose-950/60 backdrop-blur-xl">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Álbum de Recuerdos</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
          Galería de <span className="gradient-text-rose-vibrant">Momentos Felices</span>
        </h2>

        <p className="text-slate-300 max-w-xl mx-auto text-base sm:text-lg">
          Cada fotografía guarda una historia, una sonrisa y un abrazo grabado en el corazón.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 pt-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all cursor-pointer border ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-rose-600 to-pink-600 text-white border-rose-400/50 shadow-lg shadow-rose-900/50 scale-105"
                  : "bg-[#14081f]/80 text-slate-300 hover:text-white hover:bg-rose-950/40 border-rose-500/20 backdrop-blur-md"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Grid of Photos with Scroll Reveal */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredPhotos.map((photo, index) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            onClick={() => setActivePhoto(photo)}
            className="group relative rounded-3xl overflow-hidden dark-glass-card dark-glass-card-hover cursor-pointer bg-[#12071d]/90 shadow-2xl"
          >
            {/* Image Container */}
            <div className="relative aspect-[4/3] w-full bg-[#0d0515] overflow-hidden">
              <Image
                src={photo.src}
                alt={photo.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-108 transition-transform duration-700 brightness-95 group-hover:brightness-105"
                unoptimized
              />

              {/* Overlay Gradient on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#09050d] via-[#09050d]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-rose-600/90 text-white border border-rose-400/40 backdrop-blur-md shadow-md">
                    {photo.category}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <Maximize2 className="w-4 h-4 text-rose-300" />
                  </div>
                </div>

                <h3 className="font-serif text-lg font-bold text-white drop-shadow-md line-clamp-1">
                  {photo.title}
                </h3>

                {photo.date && (
                  <div className="flex items-center gap-1.5 text-xs text-rose-300 mt-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{photo.date}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Content info below image */}
            <div className="p-5 space-y-1.5 bg-[#14081f]/80 backdrop-blur-md border-t border-rose-500/15">
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-base font-bold text-white group-hover:text-rose-300 transition-colors line-clamp-1">
                  {photo.title}
                </h3>
                <Heart className="w-4 h-4 text-rose-400 opacity-60 group-hover:opacity-100 group-hover:fill-rose-500 transition-all flex-shrink-0" />
              </div>
              <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                {photo.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
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
              className="max-w-4xl w-full bg-[#14081f] rounded-3xl overflow-hidden shadow-2xl border border-rose-500/30 flex flex-col md:flex-row max-h-[90vh]"
            >
              {/* Image Preview */}
              <div className="relative flex-1 min-h-[320px] md:min-h-[520px] bg-black flex items-center justify-center">
                <Image
                  src={activePhoto.src}
                  alt={activePhoto.title}
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>

              {/* Photo Sidebar */}
              <div className="w-full md:w-80 p-6 bg-[#160a24] text-white flex flex-col justify-between space-y-6 border-t md:border-t-0 md:border-l border-rose-500/20">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r from-rose-600 to-pink-600 text-white border border-rose-400/30">
                      {activePhoto.category}
                    </span>
                    {activePhoto.date && (
                      <span className="text-xs text-slate-400 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-rose-400" />
                        {activePhoto.date}
                      </span>
                    )}
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-white">
                    {activePhoto.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {activePhoto.description}
                  </p>
                </div>

                {/* Navigation Controls inside info on mobile */}
                <div className="flex items-center justify-between pt-4 border-t border-rose-500/20">
                  <div className="flex items-center gap-2 text-xs text-rose-300">
                    <Heart className="w-4 h-4 text-rose-500 fill-current" />
                    <span>
                      {currentIndex + 1} de {filteredPhotos.length}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 sm:hidden">
                    <button
                      onClick={handlePrev}
                      className="p-2 rounded-lg bg-[#251238] text-white"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={handleNext}
                      className="p-2 rounded-lg bg-[#251238] text-white"
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
