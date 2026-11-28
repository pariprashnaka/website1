"use client";
import { useEffect, useState } from "react";

export default function V2Beliefs({ items }: { items: { k: string; d: string }[] }) {
  const [a, setA] = useState(0);
  const [hold, setHold] = useState(false);
  useEffect(() => {
    if (hold || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setTimeout(() => setA((x) => (x + 1) % items.length), 6000);
    return () => clearTimeout(t);
  }, [a, hold, items.length]);
  const n = (i: number) => String(i + 1).padStart(2, "0");
  return (
    <div className="v2-bel" onMouseEnter={() => setHold(true)} onMouseLeave={() => setHold(false)}>
      <ul className="v2-bel-list" role="tablist" aria-label="What we believe">
        {items.map((it, i) => (
          <li key={it.k}>
            <button type="button" role="tab" aria-selected={a === i} className={a === i ? "on" : ""} onClick={() => { setA(i); setHold(true); }} onFocus={() => setA(i)}>
              <em>{n(i)}</em><span>{it.k}</span>
              {a === i && !hold && <i className="v2-bel-bar" key={a} />}
            </button>
          </li>
        ))}
      </ul>
      <div className="v2-bel-panel" aria-live="polite">
        <div className="v2-bel-num" aria-hidden="true">{n(a)}</div>
        <p key={a} className="v2-bel-text">{items[a].d}</p>
        <p key={`t${a}`} className="v2-bel-title">{items[a].k}</p>
      </div>
    </div>
  );
}
