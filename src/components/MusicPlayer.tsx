"use client";

import React, { useEffect, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";

interface MusicPlayerProps {
  isPlaying: boolean;
  onToggle: () => void;
}

export default function MusicPlayer({ isPlaying, onToggle }: MusicPlayerProps) {
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscillatorIntervalRef = useRef<any>(null);

  // Soft ambient lullaby synthesizer as background audio fallback
  useEffect(() => {
    if (isPlaying) {
      try {
        const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
        if (!audioCtxRef.current) {
          audioCtxRef.current = new AudioCtx();
        }

        const notes = [261.63, 329.63, 392.0, 523.25, 440.0, 349.23]; // C E G C A F
        let noteIndex = 0;

        oscillatorIntervalRef.current = setInterval(() => {
          if (!audioCtxRef.current || audioCtxRef.current.state === "suspended") {
            audioCtxRef.current?.resume();
          }

          if (audioCtxRef.current) {
            const osc = audioCtxRef.current.createOscillator();
            const gain = audioCtxRef.current.createGain();

            osc.type = "sine";
            osc.frequency.setValueAtTime(notes[noteIndex], audioCtxRef.current.currentTime);
            gain.gain.setValueAtTime(0.03, audioCtxRef.current.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.0001, audioCtxRef.current.currentTime + 2.5);

            osc.connect(gain);
            gain.connect(audioCtxRef.current.destination);

            osc.start();
            osc.stop(audioCtxRef.current.currentTime + 2.5);

            noteIndex = (noteIndex + 1) % notes.length;
          }
        }, 1800);
      } catch (e) {
        console.log("Web Audio API not allowed without user interaction");
      }
    } else {
      if (oscillatorIntervalRef.current) {
        clearInterval(oscillatorIntervalRef.current);
      }
    }

    return () => {
      if (oscillatorIntervalRef.current) {
        clearInterval(oscillatorIntervalRef.current);
      }
    };
  }, [isPlaying]);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        onClick={onToggle}
        className={`group flex items-center gap-3 px-5 py-3.5 rounded-full shadow-2xl backdrop-blur-2xl transition-all cursor-pointer border ${
          isPlaying
            ? "bg-rose-600/90 text-white border-rose-400/80 shadow-[0_0_25px_rgba(244,63,94,0.6)] animate-pulse"
            : "bg-[#160a22]/85 text-rose-300 border-rose-500/30 hover:bg-[#251034] hover:text-white shadow-black/80"
        }`}
      >
        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
          {isPlaying ? (
            <Volume2 className="w-4 h-4 text-white" />
          ) : (
            <VolumeX className="w-4 h-4 text-rose-400" />
          )}
        </div>
        <div className="text-left hidden sm:block">
          <p className="text-xs font-bold leading-tight">
            {isPlaying ? "Música Suave" : "Activar Música"}
          </p>
          <p className="text-[10px] text-rose-300/80">
            {isPlaying ? "Reproduciendo" : "Fondo Relax"}
          </p>
        </div>
      </button>
    </div>
  );
}
