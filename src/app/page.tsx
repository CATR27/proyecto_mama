"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import BackgroundEffect from "@/components/BackgroundEffect";
import HeroHeader from "@/components/HeroHeader";
import PhotoGallery from "@/components/PhotoGallery";
import MemoryTimeline from "@/components/MemoryTimeline";
import LoveLetter from "@/components/LoveLetter";
import ReasonsGrid from "@/components/ReasonsGrid";
import MusicPlayer from "@/components/MusicPlayer";
import Footer from "@/components/Footer";

export default function Home() {
  const [isPlayingMusic, setIsPlayingMusic] = useState(true);

  const toggleMusic = () => {
    setIsPlayingMusic((prev) => !prev);
  };

  return (
    <div className="min-h-screen flex flex-col relative selection:bg-rose-500/30 selection:text-rose-200 bg-[#09050d] text-slate-100">
      {/* Dynamic Animated Ambient Background with Parallax Orbs & Canvas Particles */}
      <BackgroundEffect />

      {/* Sticky Header Navigation */}
      <Navbar isPlayingMusic={isPlayingMusic} toggleMusic={toggleMusic} />

      {/* Main Content Sections with Parallax & Scroll Reveal */}
      <main className="flex-grow space-y-16 sm:space-y-24 relative z-10">
        <HeroHeader />
        <PhotoGallery />
        <MemoryTimeline />
        <LoveLetter />
        <ReasonsGrid />
      </main>

      {/* Floating Audio Player with Autoplay & Interaction Fallback */}
      <MusicPlayer
        isPlaying={isPlayingMusic}
        onToggle={toggleMusic}
        setIsPlaying={setIsPlayingMusic}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
