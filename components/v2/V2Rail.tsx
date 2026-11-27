"use client";
import { useEffect, useRef } from "react";

const CHAPTERS = [
  { id: "ch-hero",     label: "Home" },
  { id: "ch-problem",  label: "Why SFL" },
  { id: "ch-products", label: "Products" },
  { id: "ch-proof",    label: "Proof" },
  { id: "ch-origin",   label: "Story" },
  { id: "ch-cta",      label: "Start" },
];

export default function V2Rail() {
  const dotsRef = useRef<HTMLButtonElement[]>([]);

  useEffect(() => {
    const update = () => {
      const mid = window.innerHeight / 2;
      let active = 0;
      CHAPTERS.forEach(({ id }, i) => {
        const el = document.getElementById(id);
        if (!el) return;
        const r = el.getBoundingClientRect();
        if (r.top <= mid && r.bottom >= mid) active = i;
        else if (r.top <= 0 && r.bottom >= 0) active = i;
      });
      dotsRef.current.forEach((d, i) => d?.classList.toggle("active", i === active));
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div className="v2-rail">
      {CHAPTERS.map(({ id, label }, i) => (
        <button
          key={id}
          ref={(el) => { if (el) dotsRef.current[i] = el; }}
          className="v2-rail-dot"
          data-label={label}
          onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })}
          aria-label={label}
        />
      ))}
    </div>
  );
}
