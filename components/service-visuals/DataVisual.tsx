export default function DataVisual() {
  const stages = ["Messy inputs", "Clean pipeline", "Dashboard"];
  return (
    <div className="w-full h-full flex flex-col justify-center p-6">
      <div className="mono text-[10px] uppercase tracking-[.06em] mb-4" style={{ color: "var(--color-text-muted)" }}>From raw data to answers</div>
      <div className="flex flex-col gap-2">
        {stages.map((s, i) => (
          <div key={s} className="flex items-center gap-3">
            <div className="w-[22px] h-[22px] rounded-md flex items-center justify-center flex-shrink-0 mono text-[10px] font-semibold" style={{ background: i === stages.length - 1 ? "rgba(0,212,255,0.15)" : "rgba(124,58,237,0.12)", color: i === stages.length - 1 ? "var(--color-accent-cyan)" : "var(--color-accent-purple)" }}>{i + 1}</div>
            <span className="text-[12.5px]" style={{ color: "var(--color-text-white)" }}>{s}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
