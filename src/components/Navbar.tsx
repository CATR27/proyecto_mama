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
      particleCount: 90,
      spread: 80,
      origin: { y: 0.2 },
      colors: ["#f43f5e", "#fb7185", "#fda4af", "#fbbf24", "#ffffff"],
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
          ? "bg-[#09050d]/85 backdrop-blur-xl py-3 border-b border-rose-500/20 shadow-2xl shadow-rose-950/40"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo / Title */}
        <a
          href="#hero"
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-rose-600 via-pink-500 to-rose-400 flex items-center justify-center text-white shadow-lg shadow-rose-500/40 group-hover:scale-110 group-hover:shadow-rose-400/60 transition-all">
            <Heart className="w-5 h-5 fill-current animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-lg text-white tracking-tight leading-none group-hover:text-rose-400 transition-colors">
              Para Mamá
            </span>
            <span className="text-[10px] text-rose-400 font-semibold tracking-widest uppercase">
              De tu hijo Carlitos ❤️
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-[#160b22]/70 p-1.5 rounded-full border border-rose-500/25 shadow-inner backdrop-blur-md">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-rose-500/20 rounded-full transition-all"
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
            className={`p-2.5 rounded-full border transition-all flex items-center justify-center cursor-pointer ${
              isPlayingMusic
                ? "bg-rose-600 text-white border-rose-400 shadow-lg shadow-rose-500/50 animate-pulse"
                : "bg-[#180c25]/80 text-rose-300 border-rose-500/30 hover:bg-rose-500/20 hover:text-white"
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
            className="hidden sm:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-rose-600 via-pink-600 to-rose-500 text-white rounded-full font-medium text-sm shadow-lg shadow-rose-600/40 hover:shadow-rose-500/60 hover:scale-105 active:scale-95 transition-all cursor-pointer border border-rose-400/40"
          >
            <Sparkles className="w-4 h-4 animate-spin-slow" />
            <span>¡Celebrar!</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white rounded-lg"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0d0615]/95 backdrop-blur-2xl border-b border-rose-500/30 px-4 pt-3 pb-6 space-y-3 shadow-2xl">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium text-slate-200 hover:bg-rose-500/20 hover:text-white transition-all border border-transparent hover:border-rose-500/30"
              >
                <Icon className="w-5 h-5 text-rose-400" />
                <span>{link.name}</span>
              </a>
            );
          })}
          <button
            onClick={() => {
              triggerConfetti();
              setMobileMenuOpen(false);
            }}
            className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-rose-600 to-pink-600 text-white rounded-xl font-medium shadow-lg shadow-rose-900/60"
          >
            <Sparkles className="w-5 h-5" />
            <span>¡Lluvia de Amor & Confeti!</span>
          </button>
        </div>
      )}
    </header>
  );
}
