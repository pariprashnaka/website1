type Row = { feature: string; values: string[] };
export default function BlogCompareTable({ title, headers, rows, highlightCol, note }: {
  title: string; headers: string[]; rows: Row[]; highlightCol?: number; note?: string;
}) {
  return (
    <div className="my-8 rounded-xl border overflow-hidden" style={{ borderColor: "var(--color-border)" }}>
      {title && <div className="px-5 py-3.5 border-b text-[13.5px] font-medium" style={{ background: "var(--color-bg-secondary)", borderColor: "var(--color-border)", color: "var(--color-text-white)", fontFamily: "var(--font-display)" }}>{title}</div>}
      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: "var(--color-card)" }}>
              {headers.map((h, i) => (
                <th key={h} style={{ padding: "12px 16px", textAlign: "left", fontSize: 12, fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.06em", color: i === highlightCol ? "var(--color-accent-cyan)" : "var(--color-text-muted)", borderBottom: "1px solid var(--color-border)", background: i === highlightCol ? "rgba(0,212,255,0.05)" : undefined }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => (
              <tr key={row.feature} style={{ borderBottom: ri < rows.length - 1 ? "1px solid var(--color-border)" : undefined }}>
                <td style={{ padding: "12px 16px", fontSize: 14, fontWeight: 500, color: "var(--color-text-white)" }}>{row.feature}</td>
                {row.values.map((v, vi) => (
                  <td key={vi} style={{ padding: "12px 16px", fontSize: 13.5, color: "var(--color-text-soft)", background: vi + 1 === highlightCol ? "rgba(0,212,255,0.03)" : undefined }}>{v}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {note && <div className="px-5 py-3 text-[11px] border-t" style={{ color: "var(--color-text-muted)", borderColor: "var(--color-border)" }}>{note}</div>}
    </div>
  );
}
