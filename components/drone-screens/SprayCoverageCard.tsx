export default function SprayCoverageCard() {
  const checklist = [
    { label: "Field mapped via drone survey", done: true },
    { label: "Stress zones identified", done: true },
    { label: "Spray mission planned", done: true },
    { label: "GPS-guided execution", done: false },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center p-5">
      <div className="mono text-[10.5px] uppercase tracking-[.06em] mb-4" style={{ color: "var(--color-text-muted)" }}>
        Mission Workflow
      </div>
      <div className="flex flex-col gap-2.5">
        {checklist.map((item) => (
          <div key={item.label} className="flex items-center gap-2.5">
            <div
              className="w-[16px] h-[16px] rounded-full flex-shrink-0"
              style={{
                background: item.done ? "var(--color-accent-cyan)" : "var(--color-bg-secondary)",
                border: item.done ? "none" : "1px solid var(--color-border-strong)",
              }}
            />
            <span className="text-[10.5px]" style={{ color: item.done ? "var(--color-text-white)" : "var(--color-text-muted)" }}>
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
