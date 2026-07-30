"use client";

import { useEffect, useRef } from "react";
import { useLiteMode, useReducedMotion } from "@/hooks/useReducedMotion";

/** High-performance Canvas 2D particle background — paused when hidden, reduced, or in lite mode */
export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const liteMode = useLiteMode();
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (liteMode || reducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId = 0;
    let particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }> = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      // Calculate particle density based on screen area to keep performance stable across devices
      const count = Math.min(Math.floor((canvas.width * canvas.height) / 16000), 100);
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * 0.25,
          speedY: (Math.random() - 0.5) * 0.25,
          opacity: Math.random() * 0.35 + 0.1,
        });
      }
    };

    window.addEventListener("resize", resize, { passive: true });
    resize();

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99, 102, 241, ${p.opacity})`;
        ctx.fill();

        p.x += p.speedX;
        p.y += p.speedY;

        // Wrap around boundaries
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
      }

      animationId = requestAnimationFrame(draw);
    };

    animationId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, [liteMode, reducedMotion]);

  if (liteMode || reducedMotion) {
    return (
      <div
        className="particle-fallback position-fixed top-0 start-0 w-100 h-100"
        style={{ zIndex: 0, pointerEvents: "none" }}
        aria-hidden="true"
      />
    );
  }

  return (
    <canvas
      ref={canvasRef}
      className="position-fixed top-0 start-0 w-100 h-100"
      style={{ zIndex: 0, pointerEvents: "none" }}
      aria-hidden="true"
    />
  );
}
