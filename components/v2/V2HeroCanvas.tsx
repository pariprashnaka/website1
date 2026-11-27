"use client";
import { useEffect, useRef } from "react";

/** Ambient background: three soft, slowly-drifting light blobs on black. */
export default function V2HeroCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = 0, H = 0, t = 0, animId = 0;

    const resize = () => { W = canvas.width = canvas.offsetWidth; H = canvas.height = canvas.offsetHeight; };

    const blobs = [
      { x: 0.32, y: 0.38, r: 0.42, hue: "232,115,26", speed: 0.00018, phase: 0 },
      { x: 0.68, y: 0.62, r: 0.38, hue: "245,196,154", speed: 0.00013, phase: 2 },
      { x: 0.52, y: 0.2, r: 0.3, hue: "255,255,255", speed: 0.00021, phase: 4 },
    ];

    const draw = () => {
      t++;
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, W, H);

      blobs.forEach((b) => {
        const bx = (b.x + Math.sin(t * b.speed + b.phase) * 0.06) * W;
        const by = (b.y + Math.cos(t * b.speed * 0.8 + b.phase) * 0.05) * H;
        const r = b.r * Math.max(W, H);
        const g = ctx.createRadialGradient(bx, by, 0, bx, by, r);
        g.addColorStop(0, `rgba(${b.hue},0.16)`);
        g.addColorStop(1, `rgba(${b.hue},0)`);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(bx, by, r, 0, Math.PI * 2);
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };

    const onResize = () => resize();
    window.addEventListener("resize", onResize);
    resize();
    draw();
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
