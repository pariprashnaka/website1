import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { foundingNote, values, whyUs } from "@/lib/content";
import { v2Href } from "@/components/v2/v2-nav-data";

export const metadata: Metadata = {
  title: "About — SystemFriendly Labs",
  description: "Why SystemFriendly Labs exists, how we work, and what we value.",
  alternates: { canonical: "/about" },
};

export default function V2About() {
  return (
    <main>
      <section className="v2-page-hero">
        <p className="v2-chapter-kicker">About</p>
        <h1 className="v2-page-h1">Software that<br /><em>fits you.</em></h1>
        <p className="v2-page-sub">{foundingNote}</p>
      </section>
      <section className="v2-uc-list">
        {values.map((v) => (
          <article key={v.title} className="v2-uc-row">
            <h2 className="v2-uc-problem">{v.title}</h2>
            <div className="v2-uc-body"><p>{v.desc}</p></div>
          </article>
        ))}
        {whyUs.map((v) => (
          <article key={v.num} className="v2-uc-row">
            <h2 className="v2-uc-problem">{v.title}</h2>
            <div className="v2-uc-body"><p>{v.desc}</p></div>
          </article>
        ))}
        <div className="v2-uc-links" style={{ padding: "40px 0 80px" }}>
          <Link href={v2Href("/contact")}>Talk to us →</Link>
        </div>
      </section>
    </main>
  );
}
