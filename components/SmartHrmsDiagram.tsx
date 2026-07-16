export default function SmartHrmsDiagram() {
  const modules = [
    { label: "Payroll & Compliance", color: "var(--color-accent-blue)" },
    { label: "Attendance & Leave", color: "var(--color-accent-cyan)" },
    { label: "Recruitment & Onboarding", color: "var(--color-accent-purple)" },
    { label: "Performance Management", color: "var(--color-accent-blue)" },
    { label: "Employee Self-Service", color: "var(--color-accent-cyan)" },
    { label: "Workforce Analytics", color: "var(--color-accent-purple)" },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center p-4 md:p-6">
      <div className="text-center mb-3">
        <div className="text-[13px] md:text-[14px] font-semibold" style={{ color: "var(--color-text-white)" }}>Smart HRMS Platform</div>
        <div className="mono text-[9px] md:text-[9.5px]" style={{ color: "var(--color-text-muted)" }}>One system, every HR function</div>
      </div>
      <div className="grid grid-cols-2 gap-1.5 md:gap-2">
        {modules.map((m) => (
          <div
            key={m.label}
            className="text-[10px] md:text-[11px] px-2 py-2 rounded-md text-center leading-tight truncate"
            style={{ background: "var(--color-bg-secondary)", border: `1px solid ${m.color}`, color: "var(--color-text-white)" }}
          >
            {m.label}
          </div>
        ))}
      </div>
    </div>
  );
}
