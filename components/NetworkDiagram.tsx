"use client";

import { useEffect, useRef } from "react";

const NODES = [
  { key: "browser", x: 30,  y: 90,  w: 150, h: 80, title: "Browser",   subtitle: "Client",     color: "#3B82F6" },
  { key: "gateway", x: 245, y: 60,  w: 160, h: 80, title: "Gateway",   subtitle: "Routing",    color: "#3B82F6" },
  { key: "auth",    x: 460, y: 90,  w: 150, h: 80, title: "Auth",      subtitle: "OAuth",      color: "#22C55E" },
  { key: "erp",     x: 30,  y: 270, w: 150, h: 80, title: "ERP",       subtitle: "Business",   color: "#F59E0B" },
  { key: "ai",      x: 250, y: 245, w: 150, h: 80, title: "AI Engine", subtitle: "Inference",  color: "#7C3AED" },
  { key: "crm",     x: 460, y: 270, w: 150, h: 80, title: "CRM",       subtitle: "Customers",  color: "#EF4444" },
  { key: "db",      x: 120, y: 490, w: 170, h: 90, title: "Database",  subtitle: "PostgreSQL", color: "#3B82F6" },
  { key: "queue",   x: 360, y: 490, w: 170, h: 90, title: "Queue",     subtitle: "Events",     color: "#22C55E" },
];

const EDGES: [string, string][] = [
  ["browser", "gateway"], ["gateway", "auth"], ["gateway", "erp"], ["gateway", "ai"], ["gateway", "crm"],
  ["erp", "db"], ["ai", "db"], ["ai", "queue"], ["crm", "queue"], ["db", "queue"],
];

const LABELS = ["GET", "POST", "AI", "SQL", "SYNC", "AUTH"];

// Compute center of each node
const centers: Record<string, { x: number; y: number }> = {};
NODES.forEach((n) => { centers[n.key] = { x: n.x + n.w / 2, y: n.y + n.h / 2 }; });

export default function NetworkDiagram() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Cursor-tracking tilt — only touches transform, never SVG content, safe for hydration
  useEffect(() => {
    let mouseX = 0, mouseY = 0;
    function onMouseMove(e: MouseEvent) {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 10;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 8;
      if (containerRef.current) {
        containerRef.current.style.transform = `perspective(1400px) rotateX(${-mouseY}deg) rotateY(${mouseX}deg)`;
      }
    }
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full aspect-square rounded-[32px] overflow-hidden nd-wrap"
    >
      <svg viewBox="0 0 640 640" width="100%" height="100%">
        {/* Grid */}
        <g opacity="0.5">
          {Array.from({ length: 33 }).map((_, i) => (
            <line key={`gx${i}`} x1={i * 20} y1={0} x2={i * 20} y2={640} stroke="var(--nd-grid)" strokeWidth={0.6} />
          ))}
          {Array.from({ length: 33 }).map((_, i) => (
            <line key={`gy${i}`} x1={0} y1={i * 20} x2={640} y2={i * 20} stroke="var(--nd-grid)" strokeWidth={0.6} />
          ))}
        </g>

        {/* Edges */}
        {EDGES.map(([a, b], i) => (
          <line
            key={`e${i}`}
            x1={centers[a].x} y1={centers[a].y}
            x2={centers[b].x} y2={centers[b].y}
            stroke="#3B82F6" strokeWidth={3} opacity={0.2}
          />
        ))}

        {/* Animated packets */}
        {EDGES.map(([a, b], i) => (
          <circle key={`p${i}`} r={4} fill="#3B82F6">
            <animateMotion
              dur={`${2.6 + i * 0.3}s`}
              repeatCount="indefinite"
              path={`M${centers[a].x},${centers[a].y} L${centers[b].x},${centers[b].y}`}
            />
          </circle>
        ))}

        {/* Labels — travel along with the dots */}
        {EDGES.map(([a, b], i) => (
          <text key={`l${i}`} fontSize={10} fontFamily="Inter" fontWeight={700} fill="#3B82F6" dx={8} dy={-8}>
            <animateMotion
              dur={`${2.6 + i * 0.3}s`}
              repeatCount="indefinite"
              path={`M${centers[a].x},${centers[a].y} L${centers[b].x},${centers[b].y}`}
              rotate="auto"
            />
            {LABELS[i % LABELS.length]}
          </text>
        ))}

        {/* Node cards */}
        {NODES.map((n) => (
          <g key={n.key}>
            <rect x={n.x + 4} y={n.y + 6} width={n.w} height={n.h} rx={16} fill="#3B82F6" opacity={0.08} />
            <rect x={n.x} y={n.y} width={n.w} height={n.h} rx={16} fill="var(--nd-card)" stroke="var(--nd-border)" strokeWidth={1} />
            <rect x={n.x} y={n.y} width={6} height={n.h} rx={6} fill={n.color} />
            <text x={n.x + 18} y={n.y + 30} fontSize={17} fontFamily="Inter" fontWeight={700} fill="var(--nd-title)">{n.title}</text>
            <text x={n.x + 18} y={n.y + 52} fontSize={12} fontFamily="Inter" fill="var(--nd-sub)">{n.subtitle}</text>
          </g>
        ))}
      </svg>
    </div>
  );
}
