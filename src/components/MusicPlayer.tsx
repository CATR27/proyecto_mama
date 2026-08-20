"use client";

import React, { useEffect, useRef } from "react";
import { Volume2, VolumeX, Music } from "lucide-react";

interface MusicPlayerProps {
  isPlaying: boolean;
  onToggle: () => void;
}

export default function MusicPlayer({ isPlaying, onToggle }: MusicPlayerProps) {
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscillatorIntervalRef = useRef<any>(null);

  // Simple web audio soft lullaby synthesizer as background audio fallback
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
            gain.gain.setValueAtTime(0.04, audioCtxRef.current.currentTime);
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
        className={`group flex items-center gap-3 px-4 py-3 rounded-full shadow-lg backdrop-blur-md transition-all cursor-pointer border ${
          isPlaying
            ? "bg-rose-500 text-white border-rose-400 shadow-rose-400/40 animate-pulse"
            : "bg-white/90 text-rose-700 border-rose-200 hover:bg-rose-50 shadow-rose-900/10"
        }`}
      >
        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
          {isPlaying ? (
            <Volume2 className="w-4 h-4 text-white" />
          ) : (
            <VolumeX className="w-4 h-4 text-rose-600" />
          )}
        </div>
        <div className="text-left hidden sm:block">
          <p className="text-xs font-bold leading-tight">
            {isPlaying ? "Música Suave" : "Activar Música"}
          </p>
          <p className="text-[10px] opacity-80">
            {isPlaying ? "Reproduciendo" : "Fondo Relax"}
          </p>
        </div>
      </button>
    </div>
  );
}
