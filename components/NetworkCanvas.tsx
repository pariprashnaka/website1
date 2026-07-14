"use client";

import { useEffect, useRef } from "react";

type Node = { x: number; y: number; vx: number; vy: number; r: number };
type Pulse = { a: Node; b: Node; t: number };

export default function NetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let W = 0, H = 0;
    const DPR = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      const rect = canvas!.getBoundingClientRect();
      W = rect.width; H = rect.height;
      canvas!.width = W * DPR; canvas!.height = H * DPR;
      ctx!.setTransform(DPR, 0, 0, DPR, 0, 0);
    }
    resize();
    window.addEventListener("resize", resize);

    const NODE_COUNT = 16;
    let nodes: Node[] = [];
    function initNodes() {
      nodes = [];
      for (let i = 0; i < NODE_COUNT; i++) {
        nodes.push({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - 0.5) * 0.12, vy: (Math.random() - 0.5) * 0.12, r: Math.random() * 1.6 + 1.4 });
      }
    }
    initNodes();
    const t0 = setTimeout(initNodes, 50);

    const mouse = { x: W / 2, y: H / 2 };
    const parent = canvas.parentElement;
    function onMove(e: MouseEvent) {
      const rect = canvas!.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    }
    parent?.addEventListener("mousemove", onMove);

    const MAX_DIST = 190;
    let pulses: Pulse[] = [];
    let frame = 0;
    let raf = 0;

    function draw() {
      frame++;
      ctx!.clearRect(0, 0, W, H);
      nodes.forEach((n) => {
        if (!reduceMotion) {
          n.x += n.vx; n.y += n.vy;
          if (n.x < 0 || n.x > W) n.vx *= -1;
          if (n.y < 0 || n.y > H) n.vy *= -1;
        }
      });
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < MAX_DIST) {
            const alpha = (1 - d / MAX_DIST) * 0.35;
            ctx!.strokeStyle = `rgba(59,130,246,${alpha})`;
            ctx!.lineWidth = 1;
            ctx!.beginPath(); ctx!.moveTo(a.x, a.y); ctx!.lineTo(b.x, b.y); ctx!.stroke();
          }
        }
        const dx = mouse.x - nodes[i].x, dy = mouse.y - nodes[i].y;
        const dm = Math.hypot(dx, dy);
        if (dm < 220 && !reduceMotion) { nodes[i].x += dx * 0.0009; nodes[i].y += dy * 0.0009; }
      }
      nodes.forEach((n) => {
        ctx!.beginPath(); ctx!.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx!.fillStyle = "#00D4FF"; ctx!.globalAlpha = 0.85; ctx!.fill(); ctx!.globalAlpha = 1;
      });
      if (!reduceMotion && frame % 70 === 0 && nodes.length > 1) {
        const a = nodes[Math.floor(Math.random() * nodes.length)];
        const candidates = nodes.filter((n) => Math.hypot(n.x - a.x, n.y - a.y) < MAX_DIST && n !== a);
        if (candidates.length) pulses.push({ a, b: candidates[Math.floor(Math.random() * candidates.length)], t: 0 });
      }
      pulses.forEach((p) => { p.t += 0.018; });
      pulses = pulses.filter((p) => p.t < 1);
      pulses.forEach((p) => {
        const x = p.a.x + (p.b.x - p.a.x) * p.t, y = p.a.y + (p.b.y - p.a.y) * p.t;
        ctx!.beginPath(); ctx!.arc(x, y, 2, 0, Math.PI * 2); ctx!.fillStyle = "#3B82F6"; ctx!.fill();
      });
      raf = requestAnimationFrame(draw);
    }
    raf = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      parent?.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      clearTimeout(t0);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute pointer-events-none opacity-90"
      style={{ top: "-140px", right: "-160px", width: "760px", height: "760px" }}
      aria-hidden="true"
    />
  );
}
