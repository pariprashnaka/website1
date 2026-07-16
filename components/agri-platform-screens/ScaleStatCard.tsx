export default function ScaleStatCard() {
  const tiers = [
    { label: "Single farm", detail: "One monitored location" },
    { label: "Plantation / district", detail: "Multiple sites, one dashboard" },
    { label: "State / national programme", detail: "Thousands of connected devices" },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center p-4">
      <div className="mono text-[9.5px] uppercase tracking-[.06em] mb-3" style={{ color: "var(--color-text-muted)" }}>
        Built to Scale
      </div>
      <div className="flex flex-col gap-2.5">
        {tiers.map((t, i) => (
          <div key={t.label} className="flex items-start gap-2.5">
            <div
              className="w-[18px] h-[18px] rounded-full flex items-center justify-center flex-shrink-0 mono text-[9px] font-semibold mt-0.5"
              style={{ background: "rgba(0,212,255,0.12)", color: "var(--color-accent-cyan)", border: "1px solid rgba(0,212,255,0.3)" }}
            >
              {i + 1}
            </div>
            <div>
              <div className="text-[10.5px] font-medium" style={{ color: "var(--color-text-white)" }}>{t.label}</div>
              <div className="text-[9px]" style={{ color: "var(--color-text-muted)" }}>{t.detail}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
