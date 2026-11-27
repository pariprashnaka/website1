"use client";
import { useEffect } from "react";

/**
 * Renderless client component: builds the inventory bar chart into its
 * SVG group, then observes every .v2-chapter (and the platform graph svg)
 * and adds the "in" class once scrolled into view, which the CSS uses to
 * run each chapter's reveal animation.
 */
export default function V2Reveal() {
  useEffect(() => {
    const invBars = document.getElementById("v2-inv-bars");
    if (invBars) {
      const heights = [38, 66, 24, 80, 50, 92, 34];
      const w = 400 / heights.length;
      heights.forEach((h, i) => {
        const x = i * w + w * 0.22, bw = w * 0.56, y = 140 - h, bh = h;
        const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        rect.setAttribute("class", "v2-bar-fill");
        rect.setAttribute("x", String(x));
        rect.setAttribute("y", String(y));
        rect.setAttribute("width", String(bw));
        rect.setAttribute("height", String(bh));
        rect.setAttribute("rx", "3");
        (rect.style as CSSStyleDeclaration).transitionDelay = `${0.15 + i * 0.06}s`;
        invBars.appendChild(rect);
      });
      const linePath = heights
        .map((h, i) => `${i === 0 ? "M" : "L"}${i * w + w * 0.5},${140 - h}`)
        .join(" ");
      document.getElementById("v2-inv-line")?.setAttribute("d", linePath);
    }

    const graphSvg = document.getElementById("v2-graph-svg");
    if (graphSvg) {
      const io1 = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { graphSvg.classList.add("in"); io1.disconnect(); }
        });
      }, { threshold: 0.4 });
      io1.observe(graphSvg);
    }

    const chapters = document.querySelectorAll(".v2-chapter");
    const observers: IntersectionObserver[] = [];
    chapters.forEach((ch) => {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { ch.classList.add("in"); io.disconnect(); }
        });
      }, { threshold: 0.35 });
      io.observe(ch);
      observers.push(io);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return null;
}
