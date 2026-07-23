"use client";

import { useEffect, useRef, useState } from "react";

type NodeDef = { key: string; x: number; y: number; w: number; h: number; title: string; subtitle: string; color: string };

const NODES: NodeDef[] = [
  { key: "browser", x: 30, y: 90, w: 150, h: 80, title: "Browser", subtitle: "Client", color: "#3B82F6" },
  { key: "gateway", x: 245, y: 60, w: 160, h: 80, title: "Gateway", subtitle: "Routing", color: "#3B82F6" },
  { key: "auth", x: 460, y: 90, w: 150, h: 80, title: "Auth", subtitle: "OAuth", color: "#22C55E" },
  { key: "erp", x: 30, y: 270, w: 150, h: 80, title: "ERP", subtitle: "Business", color: "#F59E0B" },
  { key: "ai", x: 250, y: 245, w: 150, h: 80, title: "AI Engine", subtitle: "Inference", color: "#7C3AED" },
  { key: "crm", x: 460, y: 270, w: 150, h: 80, title: "CRM", subtitle: "Customers", color: "#EF4444" },
  { key: "db", x: 120, y: 490, w: 170, h: 90, title: "Database", subtitle: "PostgreSQL", color: "#3B82F6" },
  { key: "queue", x: 360, y: 490, w: 170, h: 90, title: "Queue", subtitle: "Events", color: "#22C55E" },
];

const EDGES: [string, string][] = [
  ["browser", "gateway"], ["gateway", "auth"], ["gateway", "erp"], ["gateway", "ai"], ["gateway", "crm"],
  ["erp", "db"], ["ai", "db"], ["ai", "queue"], ["crm", "queue"], ["db", "queue"],
];

const LABELS = ["GET", "POST", "AI", "SQL", "SYNC", "AUTH"];

export default function NetworkDiagram() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    if (typeof window === 'undefined') return false;
    return document.documentElement.getAttribute('data-theme') === 'dark';
  });

  useEffect(() => {
    const update = () => setIsDarkTheme(document.documentElement.getAttribute("data-theme") === "dark");
    const observer = new MutationObserver(update);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const isDark = isDarkTheme;
    const cardBg = isDark ? "#111827" : "#FFFFFF";
    const cardStroke = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)";
    const gridStroke = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)";
    const titleColor = isDark ? "#F8FAFC" : "#111827";
    const subtitleColor = isDark ? "#64748B" : "#6B7280";

    const NS = "http://www.w3.org/2000/svg";
    const W = 640, H = 580;

    function E(name: string, attrs: Record<string, string | number> = {}) {
      const el = document.createElementNS(NS, name);
      for (const k in attrs) el.setAttribute(k, String(attrs[k]));
      return el;
    }

    const svg = E("svg", { viewBox: "0 0 640 640", width: "100%", height: "100%", preserveAspectRatio: "xMidYMid meet" });
    container.innerHTML = "";
    container.appendChild(svg);

    const grid = E("g");
    for (let x = 0; x <= W; x += 20) {
      const line = E("line", { x1: x, y1: 0, x2: x, y2: H, "stroke-width": 0.6 });
      line.setAttribute("stroke", gridStroke);
      grid.appendChild(line);
    }
    for (let y = 0; y <= H; y += 20) {
      const line = E("line", { x1: 0, y1: y, x2: W, y2: y, "stroke-width": 0.6 });
      line.setAttribute("stroke", gridStroke);
      grid.appendChild(line);
    }
    svg.appendChild(grid);

    const linksLayer = E("g");
    const glowLayer = E("g");
    const packetsLayer = E("g");
    const cardsLayer = E("g");
    const labelsLayer = E("g");
    svg.appendChild(linksLayer);
    svg.appendChild(glowLayer);
    svg.appendChild(packetsLayer);
    svg.appendChild(labelsLayer);
    svg.appendChild(cardsLayer);

    const nodeCenters: Record<string, { x: number; y: number }> = {};

    NODES.forEach((n) => {
      const g = E("g");
      const shadow = E("rect", { x: n.x + 4, y: n.y + 6, width: n.w, height: n.h, rx: 16 });
      shadow.setAttribute("fill", "#3B82F6");
      shadow.setAttribute("opacity", "0.08");
      g.appendChild(shadow);

      const card = E("rect", { x: n.x, y: n.y, width: n.w, height: n.h, rx: 16 });
      card.setAttribute("fill", cardBg);
      card.setAttribute("stroke", cardStroke);
      g.appendChild(card);

      const stripe = E("rect", { x: n.x, y: n.y, width: 6, height: n.h, rx: 6 });
      stripe.setAttribute("fill", n.color);
      g.appendChild(stripe);

      const title = E("text", { x: n.x + 18, y: n.y + 30, "font-size": 17, "font-family": "Inter", "font-weight": 700 });
      title.setAttribute("fill", titleColor);
      title.textContent = n.title;
      g.appendChild(title);

      const subtitle = E("text", { x: n.x + 18, y: n.y + 52, "font-size": 12, "font-family": "Inter" });
      subtitle.setAttribute("fill", subtitleColor);
      subtitle.textContent = n.subtitle;
      g.appendChild(subtitle);

      cardsLayer.appendChild(g);
      nodeCenters[n.key] = { x: n.x + n.w / 2, y: n.y + n.h / 2 };
    });

    EDGES.forEach(([a, b]) => {
      const line = E("line", { x1: nodeCenters[a].x, y1: nodeCenters[a].y, x2: nodeCenters[b].x, y2: nodeCenters[b].y, "stroke-width": 3 });
      line.setAttribute("stroke", "#3B82F6");
      line.setAttribute("opacity", "0.2");
      linksLayer.appendChild(line);
    });

    const packets = EDGES.map(([a, b], i) => {
      const dot = E("circle", { r: 4 });
      dot.setAttribute("fill", "#3B82F6");
      packetsLayer.appendChild(dot);

      const label = E("text", { "font-size": 10, "font-family": "Inter", "font-weight": 700 });
      label.setAttribute("fill", "#3B82F6");
      label.textContent = LABELS[i % LABELS.length];
      labelsLayer.appendChild(label);

      const glow = E("circle", { r: 8 });
      glow.setAttribute("fill", "#00D4FF");
      glow.setAttribute("opacity", "0.15");
      glowLayer.appendChild(glow);

      return { A: nodeCenters[a], B: nodeCenters[b], dot, label, glow, t: Math.random(), speed: 0.0012 + Math.random() * 0.0015 };
    });

    let mouseX = 0, mouseY = 0;
    function onMouseMove(e: MouseEvent) {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 10;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 8;
    }
    window.addEventListener("mousemove", onMouseMove);

    let raf: number;
    function frame() {
      packets.forEach((p) => {
        p.t += p.speed;
        if (p.t > 1) p.t = 0;
        const x = p.A.x + (p.B.x - p.A.x) * p.t;
        const y = p.A.y + (p.B.y - p.A.y) * p.t;
        p.dot.setAttribute("cx", String(x));
        p.dot.setAttribute("cy", String(y));
        p.glow.setAttribute("cx", String(x));
        p.glow.setAttribute("cy", String(y));
        p.glow.setAttribute("opacity", String(0.08 + 0.12 * Math.sin(p.t * Math.PI)));
        const angle = (Math.atan2(p.B.y - p.A.y, p.B.x - p.A.x) * 180) / Math.PI;
        p.label.setAttribute("transform", `translate(${x + 8},${y - 8}) rotate(${angle})`);
      });
      if (container) {
        container.style.transform = `perspective(1400px) rotateX(${-mouseY}deg) rotateY(${mouseX}deg)`;
      }
      raf = requestAnimationFrame(frame);
    }
    frame();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(raf);
    };
  }, [isDarkTheme]);

  return (
    <div
      ref={containerRef}
      className="w-full aspect-square rounded-[32px] overflow-hidden p-4"
      style={{
        background: isDarkTheme ? "#111827" : "#F8FAFC",
        boxShadow: isDarkTheme ? "0 30px 70px rgba(15,23,42,0.14)" : "0 30px 70px rgba(15,23,42,0.08)"
      }}
    />
  );
}
