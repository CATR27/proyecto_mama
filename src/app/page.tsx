"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroHeader from "@/components/HeroHeader";
import PhotoGallery from "@/components/PhotoGallery";
import MemoryTimeline from "@/components/MemoryTimeline";
import LoveLetter from "@/components/LoveLetter";
import ReasonsGrid from "@/components/ReasonsGrid";
import MusicPlayer from "@/components/MusicPlayer";
import Footer from "@/components/Footer";

export default function Home() {
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  const toggleMusic = () => {
    setIsPlayingMusic((prev) => !prev);
  };

  return (
    <div className="min-h-screen flex flex-col relative selection:bg-rose-200 selection:text-rose-900">
      {/* Sticky Header Navigation */}
      <Navbar isPlayingMusic={isPlayingMusic} toggleMusic={toggleMusic} />

      {/* Main Content Sections */}
      <main className="flex-grow space-y-12">
        <HeroHeader />
        <PhotoGallery />
        <MemoryTimeline />
        <LoveLetter />
        <ReasonsGrid />
      </main>

      {/* Floating Audio Player */}
      <MusicPlayer isPlaying={isPlayingMusic} onToggle={toggleMusic} />

      {/* Footer */}
      <Footer />
    </div>
  );
}
