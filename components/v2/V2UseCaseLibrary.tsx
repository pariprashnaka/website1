"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link } from "@/i18n/navigation";
import { v2Href } from "./v2-nav-data";
import type { Audience, UseCase } from "./v2-use-cases";

export type Book = UseCase & { productName: string };

const SHELVES: { id: UseCase["shelf"]; title: string; blurb: string }[] = [
  { id: "stock", title: "The Stockroom Shelf", blurb: "Counts, bills and best-before dates" },
  { id: "lab", title: "The Lab Shelf", blurb: "Samples, machines and reagents" },
  { id: "cafe", title: "The Café Shelf", blurb: "Orders, margins and many outlets" },
  { id: "people", title: "The People & Fields Shelf", blurb: "Payroll and crops" },
];
const WHO: { id: Audience | "all"; label: string }[] = [
  { id: "all", label: "Show everything" },
  { id: "shop", label: "I run a shop or distribution" },
  { id: "lab", label: "I run a lab" },
  { id: "cafe", label: "I run a café" },
  { id: "employer", label: "I employ people" },
  { id: "farm", label: "I work with land" },
];
const COLORS = ["#e8731a", "#3fe0c5", "#f5c49a", "#b57cf0", "#5b8def", "#f0c14b", "#ef6f8e", "#7bd88f", "#e8731a", "#3fe0c5"];
const RANKS: [number, string][] = [[10, "Head Librarian"], [6, "Operator"], [3, "Regular"], [1, "Curious"], [0, "Browser"]];
const KEY = "sfl_library_read";

export default function V2UseCaseLibrary({ books }: { books: Book[] }) {
  const [read, setRead] = useState<string[]>([]);
  const [open, setOpen] = useState<number | null>(null);
  const [who, setWho] = useState<Audience | "all">("all");
  const [loaded, setLoaded] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(KEY);
      if (raw) setRead(JSON.parse(raw));
    } catch {}
    setLoaded(true);
  }, []);

  const mark = useCallback((id: string) => {
    setRead((prev) => {
      if (prev.includes(id)) return prev;
      const next = [...prev, id];
      try { window.localStorage.setItem(KEY, JSON.stringify(next)); } catch {}
      return next;
    });
  }, []);

  const openBook = (i: number) => {
    lastFocus.current = document.activeElement as HTMLElement | null;
    setOpen(i);
    mark(books[i].short);
  };
  const close = useCallback(() => {
    setOpen(null);
    lastFocus.current?.focus?.();
  }, []);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  const count = read.length;
  const total = books.length;
  const rank = RANKS.find(([n]) => count >= n)![1];
  const nextRank = [...RANKS].reverse().find(([n]) => n > count);
  const done = loaded && count >= total;
  const pct = Math.round((count / total) * 100);

  const surprise = () => {
    const unread = books.map((b, i) => ({ b, i })).filter(({ b }) => !read.includes(b.short));
    const pool = unread.length ? unread : books.map((b, i) => ({ b, i }));
    openBook(pool[Math.floor(Math.random() * pool.length)].i);
  };

  const confetti = useMemo(
    () => Array.from({ length: 36 }, (_, i) => ({ left: (i * 97) % 100, delay: (i % 9) * 0.12, dur: 2.2 + (i % 5) * 0.35, color: COLORS[i % COLORS.length], rot: (i * 53) % 360 })),
    []
  );

  const b = open !== null ? books[open] : null;

  return (
    <div className="v2-lib">
      <div className="v2-lib-card" aria-live="polite">
        <div className="v2-lib-rank">
          <span className="v2-lib-rank-label">Your reader rank</span>
          <strong>{rank}</strong>
        </div>
        <div className="v2-lib-meter" role="progressbar" aria-valuemin={0} aria-valuemax={total} aria-valuenow={count} aria-label="Books read">
          <span style={{ width: `${pct}%` }} />
        </div>
        <div className="v2-lib-stats">
          <span>{count} / {total} books read</span>
          <span>{count * 10} XP</span>
          <span>{nextRank ? `${nextRank[0] - count} more for “${nextRank[1]}”` : "Max rank. Respect."}</span>
        </div>
        <button type="button" className="v2-lib-surprise" onClick={surprise}>🎲 Surprise me</button>
      </div>

      <div className="v2-lib-who" role="group" aria-label="Filter the shelves">
        {WHO.map((w) => (
          <button key={w.id} type="button" className={who === w.id ? "on" : ""} aria-pressed={who === w.id} onClick={() => setWho(w.id)}>
            {w.label}
          </button>
        ))}
      </div>

      {SHELVES.map((sh) => (
        <section key={sh.id} className="v2-lib-shelf" aria-label={sh.title}>
          <header>
            <h2>{sh.title}</h2>
            <p>{sh.blurb}</p>
          </header>
          <div className="v2-lib-row">
            {books.map((bk, i) =>
              bk.shelf !== sh.id ? null : (
                <button
                  key={bk.short}
                  type="button"
                  className={`v2-lib-spine${read.includes(bk.short) ? " read" : ""}${who !== "all" && bk.who !== who ? " dim" : ""}`}
                  style={{ ["--c" as string]: COLORS[i % COLORS.length], ["--h" as string]: `${210 + ((i * 37) % 70)}px`, ["--w" as string]: `${58 + ((i * 13) % 22)}px`, ["--t" as string]: `${((i % 3) - 1) * 1.2}deg` }}
                  onClick={() => openBook(i)}
                  aria-label={`Open: ${bk.short}${read.includes(bk.short) ? " (read)" : ""}`}
                >
                  <span className="v2-lib-band" aria-hidden="true" />
                  <span className="v2-lib-title">{bk.short}</span>
                  <span className="v2-lib-ribbon" aria-hidden="true">✓</span>
                </button>
              )
            )}
          </div>
          <div className="v2-lib-plank" aria-hidden="true" />
        </section>
      ))}

      {done && (
        <div className="v2-lib-win">
          <div className="v2-lib-confetti" aria-hidden="true">
            {confetti.map((c, i) => (
              <i key={i} style={{ left: `${c.left}%`, background: c.color, animationDelay: `${c.delay}s`, animationDuration: `${c.dur}s`, transform: `rotate(${c.rot}deg)` }} />
            ))}
          </div>
          <p className="v2-chapter-kicker">Achievement unlocked</p>
          <h2 className="v2-chapter-h2">You read the <em>whole library.</em></h2>
          <p className="v2-page-sub">Head Librarian. Now tell us which headache is yours, and we&rsquo;ll add the next book.</p>
          <Link href={v2Href("/contact")} className="v2-cta-link v2-cta-static">Add your story</Link>
        </div>
      )}

      {b && (
        <div className="v2-lib-modal" role="dialog" aria-modal="true" aria-label={b.short} onClick={(e) => { if (e.target === e.currentTarget) close(); }}>
          <div className="v2-lib-book" style={{ ["--c" as string]: COLORS[open! % COLORS.length] }}>
            <button ref={closeRef} type="button" className="v2-lib-close" onClick={close} aria-label="Close book">✕</button>
            <div className="v2-lib-page left">
              <p className="v2-lib-chapter">Chapter {String(open! + 1).padStart(2, "0")} · The headache</p>
              <h3>{b.problem}</h3>
              <p className="v2-lib-xp">+10 XP collected</p>
            </div>
            <div className="v2-lib-page right">
              <p className="v2-lib-chapter">The fix</p>
              <p className="v2-lib-fix">{b.change}</p>
              <div className="v2-lib-links">
                <Link href={v2Href(`/products/${b.productSlug}`)}>{b.productName} →</Link>
                {b.caseStudySlug && <Link href={v2Href(`/case-studies/${b.caseStudySlug}`)}>Read the real story →</Link>}
                {b.blogSlug && <Link href={v2Href(`/blog/${b.blogSlug}`)}>Further reading: {b.blogLabel} →</Link>}
              </div>
              <div className="v2-lib-turn">
                <button type="button" onClick={() => setOpen((open! + books.length - 1) % books.length)} aria-label="Previous book">← Prev</button>
                <button type="button" onClick={() => { const n = (open! + 1) % books.length; setOpen(n); mark(books[n].short); }} aria-label="Next book">Next →</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
