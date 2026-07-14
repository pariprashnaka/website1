"use client";

import { useState } from "react";

export default function Faq({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState(0);

  return (
    <div>
      {items.map((item, i) => (
        <div key={item.q} className={`faq-item border-b ${open === i ? "open" : ""}`} style={{ borderColor: "var(--color-border)" }}>
          <button
            onClick={() => setOpen(open === i ? -1 : i)}
            className="w-full flex items-center justify-between py-6 text-left font-display font-medium text-[15.5px] cursor-pointer"
            style={{ color: "var(--color-text-white)" }}
            aria-expanded={open === i}
          >
            {item.q}
            <span className="faq-plus" aria-hidden="true" />
          </button>
          <div className="faq-a text-[14px] leading-[1.65]" style={{ color: "var(--color-text-muted)" }}>
            {item.a}
          </div>
        </div>
      ))}
    </div>
  );
}
