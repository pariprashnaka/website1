"use client";

export default function SmartHrmsDiagram() {
  const steps = [
    { label: "Recruitment", sub: "Job postings to induction", x: 20, y: 20, color: "var(--color-accent-blue)" },
    { label: "Attendance & Leave", sub: "Biometric-linked tracking", x: 235, y: 95, color: "var(--color-success)" },
    { label: "Payroll & Compliance", sub: "PF, ESI, PT, TDS automated", x: 20, y: 170, color: "var(--color-warning)" },
    { label: "Performance", sub: "KRAs, KPIs, appraisals", x: 235, y: 245, color: "var(--color-accent-purple)" },
    { label: "Self-Service", sub: "Slips, records, requests", x: 20, y: 320, color: "var(--color-accent-cyan)" },
  ];

  const curves = steps.slice(0, -1).map((s, i) => {
    const next = steps[i + 1];
    const midY = (s.y + next.y) / 2;
    const bulge = s.x < next.x ? 40 : -40;
    return { id: `hrms-path-${i}`, d: `M${s.x + 90},${s.y + 24} Q${(s.x + next.x) / 2 + bulge},${midY} ${next.x},${next.y + 24}` };
  });

  return (
    <div className="w-full h-full flex flex-col justify-center p-5">
      <div className="mono text-[10px] uppercase tracking-[.08em] mb-3" style={{ color: "var(--color-text-muted)" }}>
        One system, the full employee journey
      </div>
      <svg viewBox="0 0 340 385" preserveAspectRatio="xMidYMid meet" className="w-full h-full">
        <defs>
          {curves.map((c) => (
            <path key={c.id} id={c.id} d={c.d} fill="none" />
          ))}
        </defs>

        {curves.map((c) => (
          <use key={c.id} href={`#${c.id}`} stroke="var(--color-border-strong)" strokeWidth="1.4" fill="none" opacity="0.5" />
        ))}

        {curves.map((c, i) => (
          <circle key={c.id} r="4" fill={steps[i + 1].color}>
            <animateMotion dur={`${2.6 + i * 0.4}s`} repeatCount="indefinite" rotate="auto">
              <mpath href={`#${c.id}`} />
            </animateMotion>
          </circle>
        ))}

        {steps.map((s) => (
          <g key={s.label}>
            <rect x={s.x} y={s.y} width="88" height="48" rx="9" fill="var(--color-card)" stroke="var(--color-border)" strokeWidth="1.3" />
            <rect x={s.x} y={s.y} width="4" height="48" rx="2" fill={s.color} />
            <text x={s.x + 13} y={s.y + 20} fontSize="9.5" fontWeight="700" fontFamily="var(--font-display)" fill="var(--color-text-white)">{s.label}</text>
            <text x={s.x + 13} y={s.y + 34} fontSize="7" fontFamily="var(--font-mono)" fill="var(--color-text-muted)">{s.sub}</text>
          </g>
        ))}
      </svg>
    </div>
  );
}
