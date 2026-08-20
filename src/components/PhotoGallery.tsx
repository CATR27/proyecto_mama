"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { MOM_DATA, PhotoItem } from "@/data/momData";
import { Heart } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import confetti from "canvas-confetti";

// Dedicated Scroll-Illuminated Photo Portrait Component
function ScrollIlluminatedPhoto({
  photo,
  index,
}: {
  photo: PhotoItem;
  index: number;
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

  const triggerLove = (e: React.MouseEvent) => {
    e.stopPropagation();
    confetti({
      particleCount: 45,
      spread: 60,
      origin: { y: 0.8 },
      colors: ["#f43f5e", "#fda4af", "#fbbf24"],
    });
  };

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
      className={`group relative rounded-[2.5rem] overflow-hidden transition-all duration-300 border bg-[#12071d] select-none ${
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
          className="object-cover group-hover:scale-106 transition-transform duration-1000 ease-out"
          unoptimized
        />

        {/* Ambient Cinematic Vignette / Glass Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#09050d] via-[#09050d]/35 to-transparent opacity-85 group-hover:opacity-75 transition-opacity duration-500" />

        {/* Top Heart Badge */}
        <div className="absolute top-6 right-6 z-10">
          <button
            onClick={triggerLove}
            title="¡Te amo mamá!"
            className="w-11 h-11 rounded-full bg-[#09050d]/80 backdrop-blur-xl border border-rose-500/40 flex items-center justify-center text-rose-400 hover:text-white hover:bg-rose-600 transition-all shadow-lg active:scale-90 cursor-pointer"
          >
            <Heart className="w-5 h-5 fill-rose-500 text-rose-500" />
          </button>
        </div>

        {/* Bottom Love Message from Carlitos */}
        <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-10 z-10 space-y-2.5">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white group-hover:text-rose-200 transition-colors drop-shadow-[0_2px_15px_rgba(0,0,0,0.8)] leading-tight">
            {photo.title}
          </h3>

          <p className="text-sm sm:text-base text-rose-100/90 leading-relaxed font-light drop-shadow-md">
            {photo.description}
          </p>

          <div className="pt-2 flex items-center gap-1.5 text-rose-300/80 text-xs font-medium">
            <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500 animate-pulse" />
            <span>De tu hijo Carlitos con todo mi amor</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function PhotoGallery() {
  const photos = MOM_DATA.photos;

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

      {/* Vertical Cinematic Photo Showcase (Scroll-Illuminated, Pure Gallery View Without Modal) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
        {photos.map((photo, index) => (
          <ScrollIlluminatedPhoto
            key={photo.id}
            photo={photo}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
