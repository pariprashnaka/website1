"use client";
import { useEffect, useRef, useState } from "react";
import { Link } from "@/i18n/navigation";

export type StackItem = { slug: string; label: string; title: string; short: string; detail: string; tags: string[]; href: string };

/** Left: a stack that assembles layer by layer. Right: the services, from the foundation up. */
export default function V2ServiceStack({ items }: { items: StackItem[] }) {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.i));
        });
      },
      { rootMargin: "-42% 0px -48% 0px" }
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const n = items.length;
  return (
    <div className="v2-svc">
      <div className="v2-svc-rail" aria-hidden="true">
        <p className="v2-svc-count">Layer {active + 1} of {n}</p>
        <ol className="v2-svc-stack">
          {[...items].map((it, i) => ({ it, i })).reverse().map(({ it, i }) => (
            <li key={it.slug} className={i === active ? "on" : i < active ? "done" : "todo"} style={{ ["--i" as string]: i }}>
              <span>{it.label}</span>
            </li>
          ))}
        </ol>
      </div>
      <div className="v2-svc-panels">
        {items.map((it, i) => (
          <article key={it.slug} data-i={i} ref={(el) => { refs.current[i] = el; }} className={`v2-svc-panel${i === active ? " on" : ""}`} id={it.slug}>
            <p className="v2-svc-num">{String(i + 1).padStart(2, "0")} · {it.label}</p>
            <h3>{it.title}</h3>
            <p className="v2-svc-short">{it.short}</p>
            <p className="v2-svc-detail">{it.detail}</p>
            <ul className="v2-svc-tags">{it.tags.map((t) => <li key={t}>{t}</li>)}</ul>
            <Link href={it.href} className="v2-svc-more">Explore {it.title} →</Link>
          </article>
        ))}
      </div>
    </div>
  );
}
