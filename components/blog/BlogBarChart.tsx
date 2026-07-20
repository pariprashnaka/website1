type Bar = { label: string; value: number; unit?: string };

export default function BlogBarChart({
  title,
  bars,
  max,
  color = "#00D4FF",
  note,
}: {
  title: string;
  bars: Bar[];
  max: number;
  color?: string;
  note?: string;
}) {
  return (
    <div className="my-8 rounded-xl border p-6" style={{ background: "var(--color-card)", borderColor: "var(--color-border)" }}>
      <div className="text-[13.5px] font-medium mb-5" style={{ color: "var(--color-text-white)", fontFamily: "var(--font-display)" }}>{title}</div>
      <div className="flex flex-col gap-4">
        {bars.map((bar) => {
          const pct = Math.min(100, (bar.value / max) * 100);
          return (
            <div key={bar.label} className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3">
              <div className="text-[12px] sm:text-right sm:w-[38%] sm:flex-shrink-0 leading-tight" style={{ color: "var(--color-text-muted)" }}>
                {bar.label}
              </div>
              <div className="flex items-center gap-2.5 flex-1 min-w-0">
                <div className="flex-1 h-[28px] rounded-md overflow-hidden" style={{ background: "var(--color-bg-secondary)" }}>
                  <div
                    className="h-full rounded-md flex items-center transition-all"
                    style={{ width: `${pct}%`, background: color, opacity: 0.85, minWidth: pct > 0 ? "8px" : "0" }}
                  />
                </div>
                <div className="text-[12px] font-semibold flex-shrink-0" style={{ color: "var(--color-text-white)" }}>
                  {bar.value}{bar.unit ?? ""}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {note && <div className="text-[11px] mt-4 leading-relaxed" style={{ color: "var(--color-text-muted)" }}>{note}</div>}
    </div>
  );
}
