"use client";

import { useRef, useState } from "react";
import type { ReactNode } from "react";

export default function TiltCard({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("");
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const px = x / rect.width;
    const py = y / rect.height;

    const rotateX = (0.5 - py) * 14;
    const rotateY = (px - 0.5) * 14;

    setTransform(
      `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02,1.02,1.02)`
    );
    setGlowPos({ x: px * 100, y: py * 100 });
  }

  function handleMouseLeave() {
    setTransform("perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)");
  }

  return (
    <div style={{ perspective: "900px" }}>
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="rounded-xl border p-7 relative overflow-hidden"
        style={{
          borderColor: "var(--color-border)",
          background: "var(--color-card)",
          transform: transform || "perspective(900px) rotateX(0deg) rotateY(0deg)",
          transition: transform ? "transform 0.06s ease-out" : "transform 0.5s cubic-bezier(0.2,0.8,0.2,1)",
          transformStyle: "preserve-3d",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${glowPos.x}% ${glowPos.y}%, rgba(0,212,255,0.12), transparent 60%)`,
            transform: "translateZ(1px)",
          }}
        />
        <div style={{ transform: "translateZ(40px)", position: "relative" }}>{children}</div>
      </div>
    </div>
  );
}
