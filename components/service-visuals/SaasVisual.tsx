export default function SaasVisual() {
  const steps = ["Architecture & data model", "Core build & auth", "Billing & multi-tenancy", "Launch & scale"];
  return (
    <div className="w-full h-full flex flex-col justify-center p-6">
      <div className="mono text-[10px] uppercase tracking-[.06em] mb-4" style={{ color: "var(--color-text-muted)" }}>How it&apos;s built</div>
      <div className="flex flex-col gap-2.5">
        {steps.map((s, i) => (
          <div key={s} className="flex items-center gap-3">
            <div className="w-[22px] h-[22px] rounded-md flex items-center justify-center flex-shrink-0 mono text-[10px] font-semibold" style={{ background: "rgba(0,212,255,0.12)", color: "var(--color-accent-cyan)" }}>{i + 1}</div>
            <span className="text-[12.5px]" style={{ color: "var(--color-text-white)" }}>{s}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
