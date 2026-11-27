"use client";
import { useEffect, useRef } from "react";

export default function V2HeroCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = 0, H = 0, animId = 0;
    const N = 80;
    const ORANGE = "rgba(232,115,26,";

    type Particle = { x: number; y: number; r: number; vx: number; vy: number; a: number; life: number };
    let particles: Particle[] = [];

    const resize = () => {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    };

    const mk = (): Particle => ({
      x: Math.random() * W, y: Math.random() * H,
      r: Math.random() * 1.5 + 0.3,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      a: Math.random(), life: Math.random(),
    });

    const init = () => { particles = Array.from({ length: N }, mk); };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      const bg = ctx.createRadialGradient(W * 0.65, H * 0.4, 0, W * 0.65, H * 0.4, W * 0.7);
      bg.addColorStop(0, "rgba(38,14,4,0.95)");
      bg.addColorStop(1, "rgba(6,6,8,1)");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, W, H);

      for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 140) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = ORANGE + 0.06 * (1 - d / 140) + ")";
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      particles.forEach(p => {
        p.life += 0.004;
        p.a = (Math.sin(p.life) + 1) / 2;
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = ORANGE + p.a * 0.6 + ")";
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };

    const onResize = () => { resize(); init(); };
    window.addEventListener("resize", onResize);
    resize(); init(); draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", onResize); };
  }, []);

  return (
    <canvas
      ref={ref}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      aria-hidden="true"
    />
  );
}
