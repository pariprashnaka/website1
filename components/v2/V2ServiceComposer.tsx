"use client";
import { useMemo, useState } from "react";
import { Link } from "@/i18n/navigation";

export type CompItem = { slug: string; label: string; title: string; short: string; href: string };

const EDGES: [string, string, string][] = [
  ["cloud", "data", "Secure, scalable storage"],
  ["cloud", "saas", "Runs reliably at any scale"],
  ["data", "ai", "Your data feeds the models"],
  ["data", "erp", "One source of truth"],
  ["data", "saas", "Tenant-aware data"],
  ["erp", "crm", "Orders and customer history together"],
  ["erp", "automation", "Approvals and reminders run themselves"],
  ["crm", "automation", "Follow-ups go out on time"],
  ["ai", "automation", "Smart decisions inside workflows"],
  ["erp", "web", "Staff screens in the browser"],
  ["erp", "mobile", "Floor and field staff on phones"],
  ["saas", "web", "The product your customers use"],
  ["saas", "mobile", "Your product in their pocket"],
];
const PRESETS: { name: string; pick: string[] }[] = [
  { name: "Shop or trading business", pick: ["erp", "crm", "mobile", "data"] },
  { name: "Lab or clinic", pick: ["erp", "automation", "data", "mobile"] },
  { name: "Café or restaurant chain", pick: ["erp", "crm", "web", "mobile"] },
  { name: "New software product", pick: ["cloud", "saas", "web", "mobile", "data"] },
  { name: "Add AI to what we have", pick: ["data", "ai", "automation", "cloud"] },
];

const C = 300, R = 215;

export default function V2ServiceComposer({ items }: { items: CompItem[] }) {
  const [sel, setSel] = useState<string[]>(["erp", "automation", "mobile"]);
  const toggle = (s: string) => setSel((o) => (o.includes(s) ? o.filter((x) => x !== s) : [...o, s]));

  const pos = useMemo(() => {
    const m: Record<string, { x: number; y: number }> = {};
    items.forEach((it, i) => {
      const a = (-90 + (360 / items.length) * i) * (Math.PI / 180);
      m[it.slug] = { x: C + R * Math.cos(a), y: C + R * Math.sin(a) };
    });
    return m;
  }, [items]);

  const active = EDGES.filter(([a, b]) => sel.includes(a) && sel.includes(b));
  const order = items.filter((i) => sel.includes(i.slug));
  const label = (s: string) => items.find((i) => i.slug === s)?.label ?? s;

  return (
    <div className="v2-cmp">
      <div className="v2-cmp-presets">
        <span>Start from</span>
        {PRESETS.map((p) => (
          <button key={p.name} type="button" onClick={() => setSel(p.pick)}>{p.name}</button>
        ))}
        <button type="button" className="clear" onClick={() => setSel([])}>Clear</button>
      </div>

      <div className="v2-cmp-grid">
        <div className="v2-cmp-viz">
          <svg viewBox="0 0 600 600" role="img" aria-label="Diagram of the selected layers and how they connect">
            <circle cx={C} cy={C} r={R} className="v2-cmp-ring" />
            {sel.map((s) => (
              <line key={`c${s}`} x1={C} y1={C} x2={pos[s].x} y2={pos[s].y} className="v2-cmp-spoke" />
            ))}
            {active.map(([a, b]) => (
              <line key={a + b} x1={pos[a].x} y1={pos[a].y} x2={pos[b].x} y2={pos[b].y} className="v2-cmp-flow" />
            ))}
            <g className="v2-cmp-core">
              <circle cx={C} cy={C} r="52" />
              <text x={C} y={C - 4} textAnchor="middle">Your</text>
              <text x={C} y={C + 16} textAnchor="middle">business</text>
            </g>
            {items.map((it) => {
              const p = pos[it.slug];
              const on = sel.includes(it.slug);
              return (
                <g key={it.slug} className={`v2-cmp-node${on ? " on" : ""}`} transform={`translate(${p.x} ${p.y})`} onClick={() => toggle(it.slug)}>
                  <circle r="40" />
                  <text textAnchor="middle" dy="5">{it.label}</text>
                </g>
              );
            })}
          </svg>
        </div>

        <div className="v2-cmp-side">
          <p className="v2-chapter-kicker">Pick your layers</p>
          <div className="v2-cmp-chips" role="group" aria-label="Choose the layers you need">
            {items.map((it) => (
              <button key={it.slug} type="button" aria-pressed={sel.includes(it.slug)} className={sel.includes(it.slug) ? "on" : ""} onClick={() => toggle(it.slug)}>
                {it.label}
              </button>
            ))}
          </div>

          {order.length === 0 ? (
            <p className="v2-cmp-empty">Choose at least one layer, or start from a template above.</p>
          ) : (
            <>
              <h3 className="v2-cmp-h">What we would build, in order</h3>
              <ol className="v2-cmp-order">
                {order.map((it) => (
                  <li key={it.slug}><b>{it.title}</b><span>{it.short}</span><Link href={it.href}>Read more →</Link></li>
                ))}
              </ol>
              <h3 className="v2-cmp-h">How they connect <em>({active.length})</em></h3>
              {active.length === 0 ? (
                <p className="v2-cmp-empty">Add a second layer to see them connect.</p>
              ) : (
                <ul className="v2-cmp-links">
                  {active.map(([a, b, t]) => (<li key={a + b}><b>{label(a)} ↔ {label(b)}</b> {t}</li>))}
                </ul>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
