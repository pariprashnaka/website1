export default function AiVisual() {
  const items = ["Narrow, well-defined task", "Real system integration", "Clear human handoff"];
  return (
    <div className="w-full h-full flex flex-col justify-center p-6">
      <div className="mono text-[10px] uppercase tracking-[.06em] mb-4" style={{ color: "var(--color-text-muted)" }}>Where it fits</div>
      <div className="flex flex-col gap-3">
        {items.map((s) => (
          <div key={s} className="flex items-center gap-3">
            <div className="w-[20px] h-[20px] rounded-full flex items-center justify-center flex-shrink-0 text-[11px]" style={{ background: "rgba(124,58,237,0.15)", color: "var(--color-accent-purple)" }}>&#10003;</div>
            <span className="text-[12.5px]" style={{ color: "var(--color-text-white)" }}>{s}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
