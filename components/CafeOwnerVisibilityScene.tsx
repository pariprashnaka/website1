"use client";

export default function CafeOwnerVisibilityScene() {
  const ownerX = 55;
  const ownerY = 150;
  const inboxX = ownerX + 35;
  const inboxY = ownerY - 15;

  const chaosPoints = [
    { x: 190, y: 40 }, { x: 250, y: 75 }, { x: 220, y: 130 },
    { x: 260, y: 175 }, { x: 200, y: 220 }, { x: 240, y: 250 },
    { x: 160, y: 260 },
  ];
  const activeBeforeIndices = [0, 2, 4, 6];

  const orderPoints = Array.from({ length: 7 }).map((_, i) => ({
    x: 190 + (i % 3) * 45,
    y: 55 + Math.floor(i / 3) * 60,
  }));

  const beforeKeyframes = chaosPoints
    .map((p, i) => {
      if (!activeBeforeIndices.includes(i)) return "";
      const dur = (2.6 + i * 0.35).toFixed(2);
      return `
        .cafe-broken-${i} { animation: cafeBroken${i} ${dur}s ease-in-out infinite; }
        @keyframes cafeBroken${i} {
          0% { transform: translate(${p.x}px, ${p.y}px); opacity: 0; }
          12% { opacity: 1; }
          85% { opacity: 1; }
          100% { transform: translate(${inboxX}px, ${inboxY}px); opacity: 0; }
        }
      `;
    })
    .join("\n");

  const afterKeyframes = orderPoints
    .map((p, i) => {
      const dur = (2.4 + i * 0.3).toFixed(2);
      return `
        .cafe-complete-${i} { animation: cafeComplete${i} ${dur}s linear infinite; }
        @keyframes cafeComplete${i} {
          0% { transform: translate(${p.x}px, ${p.y}px); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translate(${inboxX}px, ${inboxY}px); opacity: 0; }
        }
      `;
    })
    .join("\n");

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="rounded-xl border p-5" style={{ borderColor: "var(--color-border)", background: "var(--color-bg-secondary)" }}>
        <div className="mono text-[10px] uppercase tracking-[.08em] mb-3" style={{ color: "#EF4444" }}>Before — 4 of 7 outlets reporting, and broken</div>
        <svg viewBox="0 0 300 300" preserveAspectRatio="xMidYMid meet" className="w-full aspect-square">
          <defs>
            <style>{beforeKeyframes}</style>
          </defs>

          {chaosPoints.map((p, i) => {
            const isActive = activeBeforeIndices.includes(i);
            return (
              <line
                key={i}
                x1={p.x} y1={p.y}
                x2={inboxX} y2={inboxY}
                stroke="var(--color-border-strong)"
                strokeWidth="1"
                strokeDasharray={isActive ? undefined : "2 4"}
                opacity={isActive ? 0.55 : 0.25}
              />
            );
          })}

          {chaosPoints.map((p, i) => {
            const isActive = activeBeforeIndices.includes(i);
            return (
              <rect
                key={i}
                x={p.x - 10} y={p.y - 8} width="20" height="16" rx="3"
                fill="var(--color-card)"
                stroke="var(--color-border-strong)"
                strokeWidth="1.3"
                opacity={isActive ? 1 : 0.4}
              />
            );
          })}

          {activeBeforeIndices.map((i) => (
            <g key={i} className={`cafe-broken-${i}`}>
              <rect x="-7" y="-5" width="7" height="8" rx="1" fill="#EF4444" opacity="0.85" transform="rotate(-6)" />
              <rect x="1" y="-2" width="7" height="8" rx="1" fill="#EF4444" opacity="0.85" transform="rotate(8)" />
            </g>
          ))}

          <circle cx={inboxX} cy={inboxY} r="3.5" fill="var(--color-border-strong)" />
          <circle cx={ownerX} cy={ownerY - 25} r="16" fill="var(--color-text-muted)" opacity="0.6" />
          <path d={`M${ownerX - 24} ${ownerY + 30} Q${ownerX - 24} ${ownerY - 2} ${ownerX} ${ownerY - 2} Q${ownerX + 24} ${ownerY - 2} ${ownerX + 24} ${ownerY + 30} Z`} fill="var(--color-text-muted)" opacity="0.6" />
        </svg>
      </div>

      <div className="rounded-xl border p-5" style={{ borderColor: "rgba(0,212,255,0.3)", background: "rgba(0,212,255,0.05)" }}>
        <div className="mono text-[10px] uppercase tracking-[.08em] mb-3" style={{ color: "var(--color-accent-cyan)" }}>After — all 7 outlets reporting, complete</div>
        <svg viewBox="0 0 300 300" preserveAspectRatio="xMidYMid meet" className="w-full aspect-square">
          <defs>
            <style>{afterKeyframes}</style>
          </defs>

          {orderPoints.map((p, i) => (
            <line key={i} x1={p.x} y1={p.y} x2={inboxX} y2={inboxY} stroke="var(--color-accent-cyan)" strokeWidth="1.2" opacity="0.35" />
          ))}

          {orderPoints.map((p, i) => (
            <path key={i} d={`M${p.x - 11} ${p.y - 8} h8 l3 3 h9 v13 h-20 z`} fill="var(--color-card)" stroke="var(--color-success)" strokeWidth="1.3" />
          ))}

          {orderPoints.map((p, i) => (
            <rect key={i} className={`cafe-complete-${i}`} x="-6" y="-4.5" width="12" height="9" rx="1.5" fill="var(--color-success)" />
          ))}

          <circle cx={inboxX} cy={inboxY} r="3.5" fill="var(--color-success)" />
          <circle cx={ownerX} cy={ownerY - 25} r="16" fill="var(--color-accent-cyan)" opacity="0.7" />
          <path d={`M${ownerX - 24} ${ownerY + 30} Q${ownerX - 24} ${ownerY - 2} ${ownerX} ${ownerY - 2} Q${ownerX + 24} ${ownerY - 2} ${ownerX + 24} ${ownerY + 30} Z`} fill="var(--color-accent-cyan)" opacity="0.7" />
        </svg>
      </div>
    </div>
  );
}
