"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";

export default function Magnetic({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    el.style.transform = `translate(${x * 0.18}px, ${y * 0.35}px)`;
  }
  function handleLeave() {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`${className?.includes("hidden") ? "" : "inline-block"} ${className ?? ""}`}
      style={{ willChange: "transform", transition: "transform .35s cubic-bezier(.2,.8,.2,1)" }}
    >
      {children}
    </div>
  );
}
