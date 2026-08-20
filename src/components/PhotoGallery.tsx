"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { MOM_DATA, PhotoItem } from "@/data/momData";
import { Maximize2, X, ChevronLeft, ChevronRight, Calendar, Heart, ZoomIn, Sparkles } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import confetti from "canvas-confetti";

// Dedicated Scroll-Illuminated Photo Component (Illuminates automatically on scroll in mobile/responsive & desktop)
function ScrollIlluminatedPhoto({
  photo,
  index,
  likes,
  onOpen,
}: {
  photo: PhotoItem;
  index: number;
  likes: number;
  onOpen: () => void;
}) {
  const cardRef = useRef<HTMLDivElement | null>(null);

  // Scroll tracking across viewport for automatic illumination on scroll
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start 90%", "end 10%"],
  });

  // Dynamic illumination values as user scrolls past each photo
  const scale = useTransform(scrollYProgress, [0, 0.45, 0.55, 1], [0.95, 1.02, 1.02, 0.95]);
  const brightness = useTransform(
    scrollYProgress,
    [0, 0.35, 0.5, 0.65, 1],
    ["brightness(0.85)", "brightness(1.1)", "brightness(1.15)", "brightness(1.1)", "brightness(0.85)"]
  );
  const borderAlpha = useTransform(
    scrollYProgress,
    [0, 0.35, 0.5, 0.65, 1],
    [
      "rgba(244, 63, 94, 0.2)",
      "rgba(244, 63, 94, 0.75)",
      "rgba(251, 113, 133, 0.9)",
      "rgba(244, 63, 94, 0.75)",
      "rgba(244, 63, 94, 0.2)",
    ]
  );
  const boxShadow = useTransform(
    scrollYProgress,
    [0, 0.35, 0.5, 0.65, 1],
    [
      "0 10px 30px -5px rgba(0, 0, 0, 0.5)",
      "0 0 45px rgba(244, 63, 94, 0.45)",
      "0 0 65px rgba(244, 63, 94, 0.65)",
      "0 0 45px rgba(244, 63, 94, 0.45)",
      "0 10px 30px -5px rgba(0, 0, 0, 0.5)",
    ]
  );

  const isOdd = index % 2 !== 0;

  return (
    <motion.div
      ref={cardRef}
      style={{
        scale,
        borderColor: borderAlpha,
        boxShadow,
      }}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, delay: (index % 2) * 0.1 }}
      onClick={onOpen}
      className={`group relative rounded-[2.5rem] overflow-hidden cursor-pointer transition-all duration-300 border bg-[#12071d] ${
        isOdd ? "md:mt-12" : ""
      }`}
    >
      {/* Vertical Image Aspect Ratio (3:4 portrait) with dynamic scroll brightness */}
      <motion.div
        style={{ filter: brightness }}
        className="relative aspect-[3/4] w-full bg-[#0d0515] overflow-hidden"
      >
        <Image
          src={photo.src}
          alt={photo.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover group-hover:scale-108 transition-transform duration-1000 ease-out"
          unoptimized
        />

        {/* Ambient Cinematic Vignette / Glass Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#09050d] via-[#09050d]/25 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-500" />

        {/* Floating Top Category Badge & Zoom Button */}
        <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10">
          <span className="text-xs font-semibold px-4 py-1.5 rounded-full bg-[#09050d]/80 text-rose-300 border border-rose-500/40 backdrop-blur-xl shadow-lg">
            {photo.category}
          </span>

          <div className="w-11 h-11 rounded-full bg-[#09050d]/75 backdrop-blur-xl border border-white/25 flex items-center justify-center text-white group-hover:bg-rose-600 group-hover:scale-110 transition-all shadow-lg">
            <Maximize2 className="w-4 h-4 text-rose-200 group-hover:text-white" />
          </div>
        </div>

        {/* Bottom Story Content */}
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

          <p className="text-sm text-slate-300/95 leading-relaxed font-light line-clamp-3 group-hover:text-slate-100 transition-colors">
            {photo.description}
          </p>

          <div className="pt-2 flex items-center justify-between">
            <span className="text-rose-400 text-xs font-semibold tracking-wide flex items-center gap-1.5">
              <ZoomIn className="w-3.5 h-3.5" />
              Toca para ampliar
            </span>

            {likes > 0 && (
              <span className="inline-flex items-center gap-1 text-xs text-rose-300 bg-rose-950/70 px-3 py-1 rounded-full border border-rose-500/40 shadow-sm">
                <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
                {likes}
              </span>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function PhotoGallery() {
  const [activePhoto, setActivePhoto] = useState<PhotoItem | null>(null);
  const [likedPhotos, setLikedPhotos] = useState<Record<string, number>>({});

  const photos = MOM_DATA.photos;

  const currentIndex = activePhoto
    ? photos.findIndex((p) => p.id === activePhoto.id)
    : -1;

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      setActivePhoto(photos[currentIndex - 1]);
    } else {
      setActivePhoto(photos[photos.length - 1]);
    }
  }, [currentIndex, photos]);

  const handleNext = useCallback(() => {
    if (currentIndex < photos.length - 1) {
      setActivePhoto(photos[currentIndex + 1]);
    } else {
      setActivePhoto(photos[0]);
    }
  }, [currentIndex, photos]);

  // Keyboard navigation & Escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activePhoto) return;
      if (e.key === "Escape") {
        setActivePhoto(null);
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    if (activePhoto) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activePhoto, handleNext, handlePrev]);

  const handleHeartPhoto = (e: React.MouseEvent, photoId: string) => {
    e.stopPropagation();
    setLikedPhotos((prev) => ({
      ...prev,
      [photoId]: (prev[photoId] || 0) + 1,
    }));

    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ["#f43f5e", "#fda4af", "#fbbf24"],
    });
  };

  return (
    <section id="galeria" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative z-10">
      {/* Section Header with Warm Emotional Message */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-4 mb-16"
      >
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#180b24]/90 border border-rose-500/30 text-rose-300 text-xs sm:text-sm font-semibold tracking-wide shadow-lg shadow-rose-950/60 backdrop-blur-xl">
          <Heart className="w-4 h-4 fill-rose-500 text-rose-500 animate-pulse" />
          <span>Momentos que Llevo en el Alma</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
          Nuestros Recuerdos <span className="gradient-text-rose-vibrant">Juntos</span>
        </h2>

        <p className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg font-light leading-relaxed">
          Cada una de estas fotos guarda un pedacito de mi felicidad a tu lado. Gracias por llenar mi vida de sonrisas, abrazos y momentos inolvidables, mami.
        </p>
      </motion.div>

      {/* Vertical Cinematic Photo Showcase (Scroll-Illuminated on Mobile & Desktop) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
        {photos.map((photo, index) => (
          <ScrollIlluminatedPhoto
            key={photo.id}
            photo={photo}
            index={index}
            likes={likedPhotos[photo.id] || 0}
            onOpen={() => setActivePhoto(photo)}
          />
        ))}
      </div>

      {/* ULTRA-CREATIVE LUXURY CINEMATIC MODAL */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActivePhoto(null)}
            className="fixed inset-0 z-[100] bg-[#050208]/90 backdrop-blur-2xl flex items-center justify-center p-3 sm:p-6 overflow-y-auto cursor-pointer"
          >
            {/* Floating Top Bar with Glowing Close & Controls */}
            <div className="fixed top-4 right-4 sm:top-6 sm:right-6 z-[120] flex items-center gap-3">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActivePhoto(null);
                }}
                className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-rose-600/90 hover:bg-rose-500 text-white font-semibold text-sm shadow-[0_0_25px_rgba(244,63,94,0.6)] border border-rose-400/50 backdrop-blur-xl transition-all cursor-pointer hover:scale-105 active:scale-95"
              >
                <span>Cerrar</span>
                <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
              </button>
            </div>

            {/* Left Nav Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="fixed left-3 sm:left-6 top-1/2 -translate-y-1/2 z-[110] p-4 rounded-full bg-[#160a22]/80 hover:bg-rose-600 text-white transition-all cursor-pointer border border-rose-500/30 shadow-[0_0_30px_rgba(0,0,0,0.8)] hover:scale-110 active:scale-95 backdrop-blur-xl"
              title="Anterior (Flecha Izquierda)"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>

            {/* Right Nav Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="fixed right-3 sm:right-6 top-1/2 -translate-y-1/2 z-[110] p-4 rounded-full bg-[#160a22]/80 hover:bg-rose-600 text-white transition-all cursor-pointer border border-rose-500/30 shadow-[0_0_30px_rgba(0,0,0,0.8)] hover:scale-110 active:scale-95 backdrop-blur-xl"
              title="Siguiente (Flecha Derecha)"
            >
              <ChevronRight className="w-7 h-7" />
            </button>

            {/* Modal Body Container */}
            <motion.div
              initial={{ scale: 0.92, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.92, y: 30, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-[#12071d]/95 rounded-[2.5rem] overflow-hidden shadow-[0_0_90px_rgba(244,63,94,0.35)] border border-rose-500/40 my-auto cursor-default flex flex-col"
            >
              {/* Top Accent Neon Glow Line */}
              <div className="h-1.5 w-full bg-gradient-to-r from-rose-500 via-pink-400 to-amber-400 shadow-[0_0_15px_rgba(244,63,94,0.8)]" />

              {/* Main Photo Showcase Area */}
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] max-h-[62vh] bg-[#08030c] flex items-center justify-center overflow-hidden">
                <Image
                  src={activePhoto.src}
                  alt={activePhoto.title}
                  fill
                  className="object-contain p-2 sm:p-4"
                  unoptimized
                />
              </div>

              {/* Interactive Footer & Story Card inside Modal */}
              <div className="p-6 sm:p-8 bg-gradient-to-b from-[#160a24] to-[#0d0515] border-t border-rose-500/20 space-y-5">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2.5">
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r from-rose-600 to-pink-600 text-white border border-rose-400/30">
                        {activePhoto.category}
                      </span>
                      {activePhoto.date && (
                        <span className="text-xs text-amber-300/90 font-medium flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {activePhoto.date}
                        </span>
                      )}
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      {activePhoto.title}
                    </h3>
                  </div>

                  {/* Reaction Button with Hearts / Confetti */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={(e) => handleHeartPhoto(e, activePhoto.id)}
                      className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#251034] hover:bg-rose-600/40 text-rose-300 hover:text-white border border-rose-500/40 shadow-lg transition-all cursor-pointer active:scale-95 group"
                    >
                      <Heart className="w-5 h-5 fill-rose-500 text-rose-500 group-hover:scale-125 transition-transform" />
                      <span className="text-sm font-semibold">
                        {likedPhotos[activePhoto.id] ? `Amado (${likedPhotos[activePhoto.id]})` : "¡Enviar Amor!"}
                      </span>
                    </button>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                  {activePhoto.description}
                </p>

                {/* Mini Thumbnail Navigation Strip */}
                <div className="pt-3 border-t border-rose-500/15 flex items-center justify-between">
                  <span className="text-xs text-rose-300 font-medium">
                    Foto {currentIndex + 1} de {photos.length}
                  </span>

                  <div className="flex items-center gap-2 overflow-x-auto py-1 max-w-[260px] sm:max-w-md">
                    {photos.map((p, idx) => (
                      <button
                        key={p.id}
                        onClick={() => setActivePhoto(p)}
                        className={`relative w-10 h-10 rounded-xl overflow-hidden flex-shrink-0 border-2 transition-all cursor-pointer ${
                          p.id === activePhoto.id
                            ? "border-rose-400 scale-110 shadow-[0_0_12px_rgba(244,63,94,0.7)]"
                            : "border-transparent opacity-50 hover:opacity-100"
                        }`}
                      >
                        <Image src={p.src} alt={p.title} fill className="object-cover" unoptimized />
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => setActivePhoto(null)}
                    className="text-xs text-slate-400 hover:text-rose-300 transition-colors cursor-pointer hidden sm:block"
                  >
                    Presiona [Esc] para salir
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
