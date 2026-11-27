"use client";
import { useEffect, useRef } from "react";

type CanvasType = "inventory" | "lims" | "pulse";

export default function V2ProductCanvas({ type }: { type: CanvasType }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = 0, H = 0, t = 0, animId = 0;

    const resize = () => { W = canvas.width = canvas.offsetWidth; H = canvas.height = canvas.offsetHeight; };

    const drawInventory = () => {
      t += 0.008;
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = "#080810"; ctx.fillRect(0, 0, W, H);
      const g = ctx.createRadialGradient(W/2, H/2, 0, W/2, H/2, W*0.6);
      g.addColorStop(0, "rgba(232,115,26,0.12)"); g.addColorStop(1, "transparent");
      ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
      const bars = 7, bw = 28, gap = 20;
      const sx = (W - bars * (bw + gap)) / 2;
      for (let i = 0; i < bars; i++) {
        const ph = i * 0.6;
        const h = (Math.sin(t + ph) * 0.3 + 0.65) * H * 0.5;
        const x = sx + i * (bw + gap), y = H * 0.75 - h;
        const alpha = 0.15 + 0.1 * Math.sin(t + ph);
        ctx.fillStyle = `rgba(232,115,26,${alpha})`; ctx.fillRect(x, y, bw, h);
        ctx.fillStyle = `rgba(232,115,26,${alpha * 2})`; ctx.fillRect(x, y, bw, 3);
      }
      for (let row = 1; row < 4; row++) {
        ctx.beginPath(); ctx.moveTo(W*0.1, H*0.25*row); ctx.lineTo(W*0.9, H*0.25*row);
        ctx.strokeStyle = "rgba(255,255,255,0.04)"; ctx.lineWidth = 1; ctx.stroke();
      }
    };

    const drawLIMS = () => {
      t += 0.015;
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = "#060810"; ctx.fillRect(0, 0, W, H);
      const g = ctx.createRadialGradient(W/2, H/2, 0, W/2, H/2, W*0.6);
      g.addColorStop(0, "rgba(37,211,102,0.08)"); g.addColorStop(1, "transparent");
      ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);

      const drawLine = (alpha: number, lw: number) => {
        ctx.beginPath(); ctx.moveTo(0, H/2);
        for (let x = 0; x < W; x++) {
          const beat = (x/W * 3 + t) % 1;
          let y = H/2;
          if (beat < 0.05)       y -= H*0.08*(beat/0.05);
          else if (beat < 0.1)   y -= H*0.08*((0.1-beat)/0.05);
          else if (beat < 0.15)  y += H*0.15*((beat-0.1)/0.05);
          else if (beat < 0.2)   y += H*0.15*((0.2-beat)/0.05);
          else if (beat < 0.25)  y -= H*0.25*((beat-0.15)/0.1);
          else if (beat < 0.35)  y -= H*0.25*((0.35-beat)/0.1);
          else if (beat < 0.4)   y -= H*0.08*((beat-0.35)/0.05);
          else if (beat < 0.45)  y -= H*0.08*((0.45-beat)/0.05);
          ctx.lineTo(x, y);
        }
        ctx.strokeStyle = `rgba(37,211,102,${alpha})`; ctx.lineWidth = lw; ctx.stroke();
      };
      drawLine(0.5, 1.5); drawLine(0.12, 8);
    };

    const drawPulse = () => {
      t += 0.012;
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = "#080608"; ctx.fillRect(0, 0, W, H);
      const g = ctx.createRadialGradient(W/2, H/2, 0, W/2, H/2, W*0.6);
      g.addColorStop(0, "rgba(232,115,26,0.1)"); g.addColorStop(1, "transparent");
      ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
      for (let i = 0; i < 3; i++) {
        const phase = (t + i * 0.6) % (Math.PI * 2);
        const r = (Math.sin(phase) * 0.5 + 0.5) * Math.min(W, H) * 0.35;
        const alpha = (1 - Math.sin(phase) * 0.5 - 0.5) * 0.15;
        ctx.beginPath(); ctx.arc(W/2, H/2, r, 0, Math.PI*2);
        ctx.strokeStyle = `rgba(232,115,26,${alpha})`; ctx.lineWidth = 1; ctx.stroke();
      }
      const cs = 60;
      ctx.fillStyle = "rgba(232,115,26,0.07)";
      ctx.fillRect(W/2 - cs*0.4, H/2 - cs, cs*0.8, cs*2);
      ctx.fillRect(W/2 - cs, H/2 - cs*0.4, cs*2, cs*0.8);
    };

    const drawFn = type === "inventory" ? drawInventory : type === "lims" ? drawLIMS : drawPulse;
    const loop = () => { drawFn(); animId = requestAnimationFrame(loop); };

    const onResize = () => resize();
    window.addEventListener("resize", onResize);
    resize(); loop();
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", onResize); };
  }, [type]);

  return (
    <canvas
      ref={ref}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      aria-hidden="true"
    />
  );
}
