"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MOM_DATA, PhotoItem } from "@/data/momData";
import { Sparkles, Maximize2, X, ChevronLeft, ChevronRight, Calendar, Heart } from "lucide-react";

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
    <section id="galeria" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center space-y-4 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-100/90 text-rose-700 text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Álbum de Recuerdos</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-slate-900">
          Galería de <span className="gradient-text-rose">Momentos Felices</span>
        </h2>
        <p className="text-slate-600 max-w-xl mx-auto text-base sm:text-lg">
          Cada fotografía guarda una historia, una sonrisa y un abrazo grabado en el corazón.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
                selectedCategory === category
                  ? "bg-rose-500 text-white shadow-md shadow-rose-200"
                  : "bg-white text-slate-600 hover:bg-rose-50 hover:text-rose-600 border border-rose-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Photos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPhotos.map((photo) => (
          <div
            key={photo.id}
            onClick={() => setActivePhoto(photo)}
            className="group relative rounded-2xl overflow-hidden glass-card glass-card-hover cursor-pointer bg-white shadow-md"
          >
            {/* Image Container */}
            <div className="relative aspect-[4/3] w-full bg-rose-50 overflow-hidden">
              <Image
                src={photo.src}
                alt={photo.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-rose-500/90 text-white backdrop-blur-sm">
                    {photo.category}
                  </span>
                  <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="font-serif text-lg font-bold line-clamp-1">{photo.title}</h3>
                {photo.date && (
                  <div className="flex items-center gap-1.5 text-xs text-rose-200 mt-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{photo.date}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Content info below image */}
            <div className="p-4 space-y-1 bg-white">
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-base font-bold text-slate-800 group-hover:text-rose-600 transition-colors">
                  {photo.title}
                </h3>
                <Heart className="w-4 h-4 text-rose-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-xs text-slate-500 line-clamp-2">{photo.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in">
          {/* Close Button */}
          <button
            onClick={() => setActivePhoto(null)}
            className="absolute top-5 right-5 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-10"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-10 hidden sm:block"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-10 hidden sm:block"
          >
            <ChevronRight className="w-7 h-7" />
          </button>

          {/* Modal Container */}
          <div className="max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex flex-col md:flex-row max-h-[90vh]">
            {/* Image Preview */}
            <div className="relative flex-1 min-h-[300px] md:min-h-[500px] bg-black flex items-center justify-center">
              <Image
                src={activePhoto.src}
                alt={activePhoto.title}
                fill
                className="object-contain"
                unoptimized
              />
            </div>

            {/* Photo Sidebar */}
            <div className="w-full md:w-80 p-6 bg-slate-900 text-white flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-rose-500 text-white">
                    {activePhoto.category}
                  </span>
                  {activePhoto.date && (
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
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
              <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <Heart className="w-4 h-4 text-rose-500 fill-current" />
                  <span>
                    {currentIndex + 1} de {filteredPhotos.length}
                  </span>
                </div>

                <div className="flex items-center gap-2 sm:hidden">
                  <button
                    onClick={handlePrev}
                    className="p-2 rounded-lg bg-slate-800 text-white"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-2 rounded-lg bg-slate-800 text-white"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
