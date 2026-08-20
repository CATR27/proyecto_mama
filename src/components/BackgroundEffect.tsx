"use client";

import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function BackgroundEffect() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 2000], [0, 400]);
  const y2 = useTransform(scrollY, [0, 2000], [0, -300]);
  const y3 = useTransform(scrollY, [0, 2000], [0, 250]);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Particle system: glowing stars and slow floating hearts
    const particleCount = 45;
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
      "rgba(217, 70, 239, ", // Fuchsia
    ];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2.5 + 1,
        speedY: -(Math.random() * 0.4 + 0.15),
        speedX: (Math.random() - 0.5) * 0.2,
        opacity: Math.random() * 0.7 + 0.2,
        opacitySpeed: (Math.random() * 0.008 + 0.004) * (Math.random() > 0.5 ? 1 : -1),
        color: colors[Math.floor(Math.random() * colors.length)],
        isHeart: Math.random() < 0.25,
      });
    }

    const drawHeart = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number) => {
      ctx.beginPath();
      const topCurveHeight = size * 0.3;
      ctx.moveTo(x, y + topCurveHeight);
      // top left curve
      ctx.bezierCurveTo(x, y, x - size / 2, y, x - size / 2, y + topCurveHeight);
      // bottom left curve
      ctx.bezierCurveTo(x - size / 2, y + (size + topCurveHeight) / 2, x, y + size, x, y + size);
      // bottom right curve
      ctx.bezierCurveTo(x, y + size, x + size / 2, y + (size + topCurveHeight) / 2, x + size / 2, y + topCurveHeight);
      // top right curve
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

        if (p.opacity > 0.85 || p.opacity < 0.15) {
          p.opacitySpeed = -p.opacitySpeed;
        }

        if (p.y < -20) {
          p.y = height + 20;
          p.x = Math.random() * width;
        }
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;

        ctx.fillStyle = `${p.color}${p.opacity})`;
        ctx.shadowBlur = p.size * 3;
        ctx.shadowColor = `${p.color}0.8)`;

        if (p.isHeart) {
          drawHeart(ctx, p.x, p.y, p.size * 2.5);
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
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-20">
      {/* Deep Obsidian Background */}
      <div className="absolute inset-0 bg-[#09050d]" />

      {/* Moving Ambient Glowing Orbs with Parallax */}
      <motion.div
        style={{ y: y1 }}
        className="absolute -top-[15%] left-[10%] w-[650px] h-[650px] rounded-full bg-gradient-to-tr from-rose-900/35 via-pink-900/25 to-purple-900/20 blur-[130px] animate-pulse-glow"
      />

      <motion.div
        style={{ y: y2 }}
        className="absolute top-[35%] right-[-5%] w-[700px] h-[700px] rounded-full bg-gradient-to-bl from-rose-950/40 via-amber-900/15 to-pink-950/30 blur-[140px] animate-pulse-glow"
      />

      <motion.div
        style={{ y: y3 }}
        className="absolute top-[70%] left-[-10%] w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-purple-950/40 via-rose-900/20 to-fuchsia-950/25 blur-[150px] animate-pulse-glow"
      />

      {/* Subtle Mesh Grid Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(244,63,94,0.06)_1px,transparent_1px)] [background-size:32px_32px] opacity-70" />

      {/* Interactive Particle Canvas (Floating Stars & Hearts) */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-80" />
    </div>
  );
}
