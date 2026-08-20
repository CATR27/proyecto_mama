"use client";

import React, { useState, useEffect } from "react";
import { Heart, Image, BookOpen, Sparkles, Volume2, VolumeX, Menu, X } from "lucide-react";
import confetti from "canvas-confetti";

interface NavbarProps {
  isPlayingMusic: boolean;
  toggleMusic: () => void;
}

export default function Navbar({ isPlayingMusic, toggleMusic }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.2 },
      colors: ["#e11d48", "#fda4af", "#f59e0b", "#ffffff"],
    });
  };

  const navLinks = [
    { name: "Inicio", href: "#hero", icon: Heart },
    { name: "Galería", href: "#galeria", icon: Image },
    { name: "Recuerdos", href: "#timeline", icon: BookOpen },
    { name: "Carta", href: "#carta", icon: Sparkles },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-md shadow-lg shadow-rose-900/5 py-3 border-b border-rose-100"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo / Title */}
        <a
          href="#hero"
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-rose-500 to-pink-400 flex items-center justify-center text-white shadow-md shadow-rose-300/50 group-hover:scale-110 transition-transform">
            <Heart className="w-5 h-5 fill-current animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-lg text-rose-950 tracking-tight leading-none group-hover:text-rose-600 transition-colors">
              Para Mamá
            </span>
            <span className="text-[10px] text-rose-500 font-semibold tracking-wider uppercase">
              Con Todo Nuestro Amor
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-white/60 p-1.5 rounded-full border border-rose-100/80 shadow-sm backdrop-blur-sm">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-slate-700 hover:text-rose-600 hover:bg-rose-50/80 rounded-full transition-all"
              >
                <Icon className="w-4 h-4 text-rose-400" />
                <span>{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Music Toggle Button */}
          <button
            onClick={toggleMusic}
            title={isPlayingMusic ? "Mute Música" : "Reproducir Música de Fondo"}
            className={`p-2.5 rounded-full border transition-all flex items-center justify-center ${
              isPlayingMusic
                ? "bg-rose-500 text-white border-rose-600 shadow-md shadow-rose-300 animate-pulse"
                : "bg-white/80 text-rose-700 border-rose-200 hover:bg-rose-50"
            }`}
          >
            {isPlayingMusic ? (
              <Volume2 className="w-4 h-4" />
            ) : (
              <VolumeX className="w-4 h-4" />
            )}
          </button>

          {/* Celebratory Button */}
          <button
            onClick={triggerConfetti}
            className="hidden sm:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 text-white rounded-full font-medium text-sm shadow-md shadow-rose-300/60 hover:shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <Sparkles className="w-4 h-4 animate-spin-slow" />
            <span>¡Celebrar!</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-700 hover:text-rose-600 rounded-lg"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-rose-100 px-4 pt-3 pb-6 space-y-3 shadow-xl">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium text-slate-800 hover:bg-rose-50 hover:text-rose-600 transition-all"
              >
                <Icon className="w-5 h-5 text-rose-500" />
                <span>{link.name}</span>
              </a>
            );
          })}
          <button
            onClick={() => {
              triggerConfetti();
              setMobileMenuOpen(false);
            }}
            className="w-full flex items-center justify-center gap-2 py-3 bg-rose-500 text-white rounded-xl font-medium shadow-md shadow-rose-200"
          >
            <Sparkles className="w-5 h-5" />
            <span>¡Lluvia de Amor & Confeti!</span>
          </button>
        </div>
      )}
    </header>
  );
}
