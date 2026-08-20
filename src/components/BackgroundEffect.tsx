"use client";

import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function BackgroundEffect() {
  const { scrollY } = useScroll();

  // Smooth springs strictly on vertical Y axis only
  const smoothScrollY = useSpring(scrollY, { stiffness: 70, damping: 20 });
  const y1 = useTransform(smoothScrollY, [0, 2000], [0, 150]);
  const y2 = useTransform(smoothScrollY, [0, 2000], [0, -100]);
  const y3 = useTransform(smoothScrollY, [0, 2000], [0, 100]);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize, { passive: true });

    // Adaptive particle count
    const isMobile = width < 768;
    const particleCount = isMobile ? 20 : 40;
    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      opacity: number;
      opacitySpeed: number;
      color: string;
      isHeart: boolean;
    }> = [];

    const colors = [
      "rgba(244, 63, 94, ", // Rose
      "rgba(251, 113, 133, ", // Light Rose
      "rgba(253, 164, 175, ", // Pale Pink
      "rgba(251, 191, 36, ", // Amber Gold
    ];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 1,
        speedY: -(Math.random() * 0.35 + 0.1),
        speedX: (Math.random() - 0.5) * 0.1,
        opacity: Math.random() * 0.6 + 0.2,
        opacitySpeed: (Math.random() * 0.006 + 0.003) * (Math.random() > 0.5 ? 1 : -1),
        color: colors[Math.floor(Math.random() * colors.length)],
        isHeart: Math.random() < 0.2,
      });
    }

    const drawHeart = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number) => {
      ctx.beginPath();
      const topCurveHeight = size * 0.3;
      ctx.moveTo(x, y + topCurveHeight);
      ctx.bezierCurveTo(x, y, x - size / 2, y, x - size / 2, y + topCurveHeight);
      ctx.bezierCurveTo(x - size / 2, y + (size + topCurveHeight) / 2, x, y + size, x, y + size);
      ctx.bezierCurveTo(x, y + size, x + size / 2, y + (size + topCurveHeight) / 2, x + size / 2, y + topCurveHeight);
      ctx.bezierCurveTo(x + size / 2, y, x, y, x, y + topCurveHeight);
      ctx.closePath();
      ctx.fill();
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX;
        p.opacity += p.opacitySpeed;

        if (p.opacity > 0.8 || p.opacity < 0.15) {
          p.opacitySpeed = -p.opacitySpeed;
        }

        if (p.y < -20) {
          p.y = height + 20;
          p.x = Math.random() * width;
        }
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;

        ctx.fillStyle = `${p.color}${p.opacity})`;
        ctx.shadowBlur = p.size * 2;
        ctx.shadowColor = `${p.color}0.6)`;

        if (p.isHeart) {
          drawHeart(ctx, p.x, p.y, p.size * 2.2);
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden -z-20 max-w-full">
      {/* Deep Obsidian Background */}
      <div className="absolute inset-0 bg-[#09050d] w-full h-full" />

      {/* Moving Ambient Glowing Orbs with strictly vertical Y parallax */}
      <motion.div
        style={{ y: y1 }}
        className="absolute -top-[10%] left-0 right-0 mx-auto w-[300px] sm:w-[500px] md:w-[600px] h-[300px] sm:h-[500px] md:h-[600px] rounded-full bg-gradient-to-tr from-rose-900/30 via-pink-900/20 to-purple-900/15 blur-[80px] sm:blur-[120px] animate-pulse-glow"
      />

      <motion.div
        style={{ y: y2 }}
        className="absolute top-[35%] right-0 w-[280px] sm:w-[480px] md:w-[550px] h-[280px] sm:h-[480px] md:h-[550px] rounded-full bg-gradient-to-bl from-rose-950/35 via-amber-900/15 to-pink-950/25 blur-[90px] sm:blur-[130px] animate-pulse-glow"
      />

      <motion.div
        style={{ y: y3 }}
        className="absolute top-[70%] left-0 w-[300px] sm:w-[500px] md:w-[600px] h-[300px] sm:h-[500px] md:h-[600px] rounded-full bg-gradient-to-tr from-purple-950/30 via-rose-900/18 to-fuchsia-950/20 blur-[90px] sm:blur-[130px] animate-pulse-glow"
      />

      {/* Subtle Mesh Grid Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(244,63,94,0.05)_1px,transparent_1px)] [background-size:24px_24px] sm:[background-size:32px_32px] opacity-70 w-full h-full" />

      {/* Interactive Particle Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-80" />
    </div>
  );
}
