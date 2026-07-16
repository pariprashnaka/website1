export default function CloudVisual() {
  return (
    <div className="w-full h-full flex flex-col justify-center p-6">
      <div className="mono text-[10px] uppercase tracking-[.06em] mb-4" style={{ color: "var(--color-text-muted)" }}>Traffic spike handled</div>
      <div className="flex items-end justify-center gap-2 h-[70px]">
        {[1, 1, 1, 2, 2, 2].map((scale, i) => (
          <div
            key={i}
            className="rounded-sm"
            style={{
              width: "16px",
              height: `${28 * scale}px`,
              background: i < 3 ? "var(--color-border-strong)" : "var(--color-accent-cyan)",
              opacity: i < 3 ? 0.5 : 0.85,
            }}
          />
        ))}
      </div>
      <div className="flex justify-center gap-2 mt-2">
        <span className="mono text-[9px]" style={{ color: "var(--color-text-muted)" }}>baseline</span>
        <span className="mono text-[9px]" style={{ color: "var(--color-accent-cyan)" }}>scaled automatically</span>
      </div>
    </div>
  );
}
