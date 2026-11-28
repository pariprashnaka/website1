import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { foundingNote, values, whyUs, products, services, process } from "@/lib/content";
import { v2Href } from "@/components/v2/v2-nav-data";
import V2HeroCanvas from "@/components/v2/V2HeroCanvas";
import V2Reveal from "@/components/v2/V2Reveal";
import V2Manifest from "@/components/v2/V2Manifest";

export const metadata: Metadata = {
  title: "About — SystemFriendly Labs",
  description: "SystemFriendly Labs builds software for real operations, from Buxar, Bihar. Why we exist, what we refuse to do, and how we work.",
  alternates: { canonical: "/about" },
};

const MANIFEST =
  "Most software is built for a demo. We build for a Tuesday afternoon, a power cut, and a staff member who has never used an app. If it does not survive the shop floor, the lab bench and the ward round, it is not finished.";

const NO = [
  "Slide decks about progress",
  "Features nobody asked for",
  "Contracts you cannot read",
  "Promises we cannot keep",
  "Software that needs a manual to log in",
];

const FACTS: [string, string][] = [
  [String(products.length), "products on one platform"],
  [String(services.length), "service layers to build on"],
  ["1", "hidden fees or lock-in"],
  ["0", "slide decks about progress"],
];

export default function V2About() {
  return (
    <main>
      <V2Reveal />
      <section className="v2-contact-hero">
        <V2HeroCanvas />
        <div className="v2-contact-inner">
          <p className="v2-chapter-kicker">About</p>
          <h1 className="v2-page-h1">Software that<br /><em>fits you.</em></h1>
          <p className="v2-page-sub">Built in Buxar, Bihar, for businesses the big platforms forgot.</p>
        </div>
      </section>

      <section className="v2-ab-sec">
        <V2Manifest text={MANIFEST} />
      </section>

      <section className="v2-ab-sec v2-ab-where">
        <div className="v2-ab-pin" aria-hidden="true"><i /><i /><i /></div>
        <div>
          <p className="v2-chapter-kicker">Where we build from</p>
          <h2 className="v2-chapter-h2 v2-left">Buxar, Bihar.<br /><em>Not Silicon Valley.</em></h2>
          <p className="v2-ab-p">{foundingNote}</p>
          <p className="v2-ab-p">We live among the shops, labs, clinics and factories we build for. That is why the software is fast on a weak connection, speaks plain language and respects how a real day runs.</p>
        </div>
      </section>

      <section className="v2-ab-sec">
        <p className="v2-chapter-kicker">What we refuse to do</p>
        <ul className="v2-ab-no">
          {NO.map((t, i) => (<li key={t} style={{ ["--d" as string]: `${i * 0.18}s` }}><s>{t}</s></li>))}
        </ul>
      </section>

      <section className="v2-ab-sec">
        <p className="v2-chapter-kicker">What we believe</p>
        <div className="v2-ab-cards">
          {[...values.map((v) => ({ k: v.title, d: v.desc })), ...whyUs.map((v) => ({ k: v.title, d: v.desc }))].map((c, i) => (
            <article key={c.k} className="v2-ab-card">
              <span>{String(i + 1).padStart(2, "0")}</span>
              <h3>{c.k}</h3>
              <p>{c.d}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="v2-ab-sec">
        <p className="v2-chapter-kicker">By the numbers</p>
        <ul className="v2-ab-facts">
          {FACTS.map(([n, t]) => (<li key={t}><b>{n}</b><span>{t}</span></li>))}
        </ul>
      </section>

      <section className="v2-ab-sec">
        <p className="v2-chapter-kicker">How we work</p>
        <ol className="v2-ab-flow">
          {process.map((p) => (<li key={p.idx}><i>{p.idx}</i><h3>{p.title}</h3><p>{p.desc}</p></li>))}
        </ol>
      </section>

      <section className="v2-chapter v2-cta-chapter">
        <p className="v2-chapter-kicker">Early, on purpose</p>
        <h2 className="v2-chapter-h2">Be one of the first.<br /><em>Shape what we build.</em></h2>
        <Link href={v2Href("/contact")} className="v2-cta-link v2-cta-static">
          Talk to us
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
        </Link>
      </section>
    </main>
  );
}
