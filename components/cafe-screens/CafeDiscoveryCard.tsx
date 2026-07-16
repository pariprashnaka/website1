export default function CafeDiscoveryCard() {
  const cafes = [
    { name: "Brew & Bean", distance: "0.4 km", open: true },
    { name: "The Roast House", distance: "0.9 km", open: true },
    { name: "Café Milano", distance: "1.2 km", open: false },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center p-4">
      <div className="mono text-[10px] uppercase tracking-[.06em] mb-3" style={{ color: "var(--color-text-muted)" }}>
        Nearby Cafés
      </div>
      <div className="flex flex-col gap-1.5">
        {cafes.map((c) => (
          <div key={c.name} className="flex items-center justify-between px-2.5 py-1.5 rounded-md" style={{ background: "var(--color-bg-secondary)" }}>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: c.open ? "#22C55E" : "var(--color-border-strong)" }} />
              <span className="text-[10.5px]" style={{ color: "var(--color-text-white)" }}>{c.name}</span>
            </div>
            <span className="text-[9.5px]" style={{ color: "var(--color-text-muted)" }}>{c.distance}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
