type Bar = { label: string; value: number; unit?: string };

export default function BlogBarChart({
  title, bars, max, color = "#00D4FF", note,
}: {
  title: string; bars: Bar[]; max: number; color?: string; note?: string;
}) {
  const BAR_H = 36, LABEL_W = 220, CHART_W = 420, GAP = 12;
  const H = bars.length * (BAR_H + GAP) + 60;
  return (
    <div className="my-8 rounded-xl border p-6" style={{ background: "var(--color-card)", borderColor: "var(--color-border)" }}>
      <div className="text-[13.5px] font-medium mb-5" style={{ color: "var(--color-text-white)", fontFamily: "var(--font-display)" }}>{title}</div>
      <svg viewBox={`0 0 ${LABEL_W + CHART_W + 60} ${H}`} width="100%" role="img" aria-label={title}>
        {bars.map((bar, i) => {
          const y = i * (BAR_H + GAP) + 10;
          const barW = (bar.value / max) * CHART_W;
          return (
            <g key={bar.label}>
              <text x={LABEL_W - 8} y={y + BAR_H / 2 + 5} textAnchor="end" fontSize="12" fill="#94a3b8">{bar.label}</text>
              <rect x={LABEL_W} y={y} width={barW} height={BAR_H} rx="4" fill={color} opacity="0.85" />
              <text x={LABEL_W + barW + 8} y={y + BAR_H / 2 + 5} fontSize="12" fontWeight="600" fill="#f8fafc">{bar.value}{bar.unit ?? ""}</text>
            </g>
          );
        })}
      </svg>
      {note && <div className="text-[11px] mt-3" style={{ color: "var(--color-text-muted)" }}>{note}</div>}
    </div>
  );
}
