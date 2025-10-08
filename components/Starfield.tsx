"use client";
import { useEffect, useRef } from "react";

export default function Starfield() {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let raf = 0;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const stars = Array.from({ length: 140 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      z: Math.random() * 0.6 + 0.4,
      r: Math.random() * 1.2 + 0.3,
      tw: Math.random() * Math.PI * 2,
      sp: Math.random() * 0.2 + 0.05,
    }));

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      const grad = ctx.createLinearGradient(0, 0, width, height);
      grad.addColorStop(0, "#0a0b1a");
      grad.addColorStop(1, "#1b0b2e");
      ctx.fillStyle = grad as any;
      ctx.fillRect(0, 0, width, height);

      for (const s of stars) {
        s.tw += s.sp;
        const alpha = 0.4 + Math.sin(s.tw) * 0.3;
        ctx.beginPath();
        ctx.fillStyle = `rgba(200, 220, 255, ${alpha * s.z})`;
        ctx.arc(s.x, s.y, s.r * s.z, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    }

    function onResize() {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }
    window.addEventListener("resize", onResize);
    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className="fixed inset-0 -z-10 opacity-80 [filter:saturate(120%)]"
      aria-hidden
    />
  );
}
