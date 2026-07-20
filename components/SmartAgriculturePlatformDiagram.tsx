"use client";

export default function SmartAgriculturePlatformDiagram() {
  const hub = { x: 210, y: 160, r: 34 };

  const inputs = [
    { label: "Soil sensors", y: 30, color: "var(--color-warning)" },
    { label: "Weather stations", y: 100, color: "var(--color-accent-blue)" },
    { label: "Satellite imagery", y: 220, color: "var(--color-accent-purple)" },
    { label: "Field observations", y: 290, color: "var(--color-success)" },
  ].map((n) => ({ ...n, x: 15, w: 95, h: 40 }));

  const outputs = [
    { label: "Irrigation", y: 30, color: "var(--color-accent-cyan)" },
    { label: "Fertilizer", y: 100, color: "var(--color-warning)" },
    { label: "Planting", y: 220, color: "var(--color-success)" },
    { label: "Pest-risk", y: 290, color: "#EF4444" },
  ].map((n) => ({ ...n, x: 315, w: 95, h: 40 }));

  const inKeyframes = inputs
    .map((n, i) => {
      const startX = n.x + n.w;
      const startY = n.y + n.h / 2;
      const dur = (2.2 + i * 0.3).toFixed(2);
      return `
        .agri-in-${i} { animation: agriIn${i} ${dur}s linear infinite; }
        @keyframes agriIn${i} {
          0% { transform: translate(${startX}px, ${startY}px); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translate(${hub.x}px, ${hub.y}px); opacity: 0; }
        }
      `;
    })
    .join("\n");

  const outKeyframes = outputs
    .map((n, i) => {
      const endX = n.x;
      const endY = n.y + n.h / 2;
      const dur = (2.2 + i * 0.3).toFixed(2);
      return `
        .agri-out-${i} { animation: agriOut${i} ${dur}s linear infinite; }
        @keyframes agriOut${i} {
          0% { transform: translate(${hub.x}px, ${hub.y}px); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translate(${endX}px, ${endY}px); opacity: 0; }
        }
      `;
    })
    .join("\n");

  return (
    <div className="w-full h-full flex flex-col justify-center p-5">
      <div className="mono text-[10px] uppercase tracking-[.08em] mb-3" style={{ color: "var(--color-text-muted)" }}>
        Disconnected inputs, one intelligent hub
      </div>
      <svg viewBox="0 0 420 330" preserveAspectRatio="xMidYMid meet" className="w-full h-full">
        <defs>
          <style>{inKeyframes}{outKeyframes}</style>
        </defs>

        {inputs.map((n, i) => (
          <line key={i} x1={n.x + n.w} y1={n.y + n.h / 2} x2={hub.x} y2={hub.y} stroke="var(--color-border-strong)" strokeWidth="1.3" opacity="0.4" />
        ))}
        {outputs.map((n, i) => (
          <line key={i} x1={hub.x} y1={hub.y} x2={n.x} y2={n.y + n.h / 2} stroke="var(--color-accent-cyan)" strokeWidth="1.3" opacity="0.35" />
        ))}

        {inputs.map((n, i) => (
          <circle key={i} className={`agri-in-${i}`} r="4" fill={n.color} />
        ))}
        {outputs.map((n, i) => (
          <circle key={i} className={`agri-out-${i}`} r="4" fill={n.color} />
        ))}

        <circle cx={hub.x} cy={hub.y} r={hub.r} fill="var(--color-card)" stroke="rgba(0,212,255,0.4)" strokeWidth="1.6" />
        <text x={hub.x} y={hub.y - 4} textAnchor="middle" fontSize="9" fontWeight="700" fontFamily="var(--font-display)" fill="var(--color-text-white)">The</text>
        <text x={hub.x} y={hub.y + 9} textAnchor="middle" fontSize="9" fontWeight="700" fontFamily="var(--font-display)" fill="var(--color-text-white)">Platform</text>

        {inputs.map((n, i) => (
          <g key={i}>
            <rect x={n.x} y={n.y} width={n.w} height={n.h} rx="8" fill="var(--color-card)" stroke="var(--color-border)" strokeWidth="1.2" />
            <rect x={n.x} y={n.y} width="3.5" height={n.h} rx="1.7" fill={n.color} />
            <text x={n.x + 10} y={n.y + n.h / 2 + 3.5} fontSize="8.3" fontWeight="600" fontFamily="var(--font-display)" fill="var(--color-text-white)">{n.label}</text>
          </g>
        ))}

        {outputs.map((n, i) => (
          <g key={i}>
            <rect x={n.x} y={n.y} width={n.w} height={n.h} rx="8" fill="var(--color-card)" stroke="var(--color-border)" strokeWidth="1.2" />
            <rect x={n.x} y={n.y} width="3.5" height={n.h} rx="1.7" fill={n.color} />
            <text x={n.x + 10} y={n.y + n.h / 2 + 3.5} fontSize="8.3" fontWeight="600" fontFamily="var(--font-display)" fill="var(--color-text-white)">{n.label}</text>
          </g>
        ))}
      </svg>
    </div>
  );
}
