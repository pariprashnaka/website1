export default function SmartAgriculturePlatformDiagram() {
  const inputs = ["IoT Soil Sensors", "Satellite Imagery", "Weather Stations", "Field Observations"];
  const outputs = ["Dashboards & Alerts", "AI Recommendations", "Reports by Region"];

  return (
    <div className="w-full h-full flex items-center justify-center p-5 md:p-6">
      <svg viewBox="0 0 720 260" className="w-full h-auto" role="img" aria-label="Diagram showing multiple data sources feeding into a central analytics engine, producing dashboards, recommendations, and reports">
        {inputs.map((label, i) => {
          const y = 30 + i * 62;
          return (
            <g key={label}>
              <rect x="10" y={y} width="180" height="42" rx="8" fill="var(--color-bg-secondary)" stroke="var(--color-accent-blue)" strokeWidth="1.2" />
              <text x="100" y={y + 26} textAnchor="middle" fontSize="11.5" fill="var(--color-text-white)">{label}</text>
              <line x1="190" y1={y + 21} x2="280" y2="130" stroke="var(--color-accent-blue)" strokeWidth="1" opacity="0.5" />
            </g>
          );
        })}

        <rect x="280" y="90" width="160" height="80" rx="10" fill="rgba(0,212,255,0.08)" stroke="var(--color-accent-cyan)" strokeWidth="1.5" />
        <text x="360" y="122" textAnchor="middle" fontSize="12.5" fontWeight="600" fill="var(--color-text-white)">Analytics</text>
        <text x="360" y="140" textAnchor="middle" fontSize="12.5" fontWeight="600" fill="var(--color-text-white)">Engine</text>
        <text x="360" y="158" textAnchor="middle" fontSize="9.5" fill="var(--color-text-muted)">AI + ML models</text>

        {outputs.map((label, i) => {
          const y = 40 + i * 70;
          return (
            <g key={label}>
              <line x1="440" y1="130" x2="530" y2={y + 21} stroke="var(--color-accent-purple)" strokeWidth="1" opacity="0.5" />
              <rect x="530" y={y} width="180" height="42" rx="8" fill="var(--color-bg-secondary)" stroke="var(--color-accent-purple)" strokeWidth="1.2" />
              <text x="620" y={y + 26} textAnchor="middle" fontSize="11.5" fill="var(--color-text-white)">{label}</text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
