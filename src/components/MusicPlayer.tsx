"use client";

import React, { useEffect, useRef } from "react";
import { Volume2, VolumeX, Music } from "lucide-react";

interface MusicPlayerProps {
  isPlaying: boolean;
  onToggle: () => void;
}

export default function MusicPlayer({ isPlaying, onToggle }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.6;
      if (isPlaying) {
        audioRef.current.play().catch((err) => {
          console.log("Audio autoplay restricted:", err);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  return (
    <>
      {/* Native HTML5 Audio Element for music.mp3 */}
      <audio
        ref={audioRef}
        src="/music.mp3"
        loop
        preload="auto"
      />

      {/* Floating Ambient Music Control Pill */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={onToggle}
          className={`group flex items-center gap-3 px-5 py-3.5 rounded-full shadow-2xl backdrop-blur-2xl transition-all cursor-pointer border ${
            isPlaying
              ? "bg-rose-600/90 text-white border-rose-400/80 shadow-[0_0_30px_rgba(244,63,94,0.6)]"
              : "bg-[#160a22]/85 text-rose-300 border-rose-500/30 hover:bg-[#251034] hover:text-white shadow-black/80 hover:scale-105"
          }`}
          title={isPlaying ? "Pausar música de fondo" : "Reproducir música de fondo"}
        >
          <div className="relative w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
            {isPlaying ? (
              <Volume2 className="w-4 h-4 text-white animate-pulse" />
            ) : (
              <VolumeX className="w-4 h-4 text-rose-400" />
            )}
          </div>

          <div className="text-left hidden sm:block">
            <div className="flex items-center gap-1.5">
              <p className="text-xs font-bold leading-tight">
                {isPlaying ? "Música de Fondo" : "Activar Música"}
              </p>
              {isPlaying && (
                <div className="flex items-end gap-0.5 h-3">
                  <span className="w-0.5 bg-white rounded-full animate-bounce [animation-delay:-0.3s] h-3" />
                  <span className="w-0.5 bg-white rounded-full animate-bounce [animation-delay:-0.15s] h-2" />
                  <span className="w-0.5 bg-white rounded-full animate-bounce h-3" />
                </div>
              )}
            </div>
            <p className="text-[10px] text-rose-200/80">
              {isPlaying ? "Reproduciendo canción" : "Toca para escuchar"}
            </p>
          </div>
        </button>
      </div>
    </>
  );
}
