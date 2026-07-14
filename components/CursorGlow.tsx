"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;
    function onMove(e: MouseEvent) {
      if (ref.current) ref.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%,-50%)`;
    }
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 pointer-events-none z-[1]"
      style={{
        width: 480,
        height: 480,
        background: "radial-gradient(circle, rgba(59,130,246,0.10), transparent 70%)",
        mixBlendMode: "screen",
      }}
      aria-hidden="true"
    />
  );
}
