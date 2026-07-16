export default function PayrollBreakdownCard() {
  const lines = [
    { label: "Basic + Allowances", value: "₹58,000" },
    { label: "PF deduction", value: "-₹2,400" },
    { label: "ESI deduction", value: "-₹610" },
    { label: "TDS", value: "-₹3,100" },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center p-4">
      <div className="mono text-[10px] uppercase tracking-[.06em] mb-3" style={{ color: "var(--color-text-muted)" }}>
        Salary Slip — Illustrative
      </div>
      <div className="flex flex-col gap-1.5">
        {lines.map((l) => (
          <div key={l.label} className="flex items-center justify-between">
            <span className="text-[10.5px]" style={{ color: "var(--color-text-muted)" }}>{l.label}</span>
            <span className="text-[10.5px] mono" style={{ color: "var(--color-text-white)" }}>{l.value}</span>
          </div>
        ))}
        <div className="flex items-center justify-between mt-1.5 pt-1.5" style={{ borderTop: "1px solid var(--color-border)" }}>
          <span className="text-[11px] font-medium" style={{ color: "var(--color-text-white)" }}>Net Pay</span>
          <span className="text-[11px] mono font-medium" style={{ color: "var(--color-accent-cyan)" }}>₹51,890</span>
        </div>
      </div>
    </div>
  );
}
