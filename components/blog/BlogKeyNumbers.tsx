export default function BlogKeyNumbers({
  items,
}: {
  items: { number: string; label: string; color?: string }[];
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${Math.min(items.length, 2)}, 1fr)`,
        gap: 12,
        margin: "28px 0",
      }}
    >
      {items.map((item) => (
        <div
          key={item.label}
          style={{
            borderRadius: 12,
            border: "1px solid var(--color-border)",
            background: "var(--color-card)",
            padding: "18px 16px",
            textAlign: "center",
            boxShadow: "0 2px 12px -4px rgba(15,23,42,0.10)",
          }}
        >
          <div
            style={{
              fontSize: 28,
              fontWeight: 800,
              fontFamily: "var(--font-display, sans-serif)",
              color: item.color || "var(--color-accent-blue)",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              marginBottom: 6,
            }}
          >
            {item.number}
          </div>
          <div
            style={{
              fontSize: 11,
              color: "var(--color-text-muted)",
              lineHeight: 1.4,
              fontFamily: "var(--font-mono, monospace)",
              textTransform: "uppercase",
              letterSpacing: "0.04em",
            }}
          >
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
}
