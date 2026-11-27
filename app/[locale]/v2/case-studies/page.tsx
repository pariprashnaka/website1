import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { caseStudies } from "@/lib/content";
import { v2Href } from "@/components/v2/v2-nav-data";

export const metadata: Metadata = {
  title: "Case Studies — SystemFriendly Labs",
  description: "How real businesses replaced paper trails and guesswork with connected systems built by SystemFriendly Labs.",
  alternates: { canonical: "/case-studies" },
};

export default function V2CaseStudies() {
  return (
    <main>
      <section className="v2-page-hero">
        <p className="v2-chapter-kicker">Case studies</p>
        <h1 className="v2-page-h1">Proof,<br /><em>not promises.</em></h1>
        <p className="v2-page-sub">Real operations, the problems they started with, and what changed.</p>
      </section>
      <section className="v2-uc-list">
        {caseStudies.map((c) => (
          <article key={c.slug} className="v2-uc-row">
            <h2 className="v2-uc-problem">{c.title}</h2>
            <div className="v2-uc-body">
              <p className="v2-cs-meta">{c.industry} · {c.scale}</p>
              <p>{c.summary}</p>
              <div className="v2-uc-links">
                <Link href={v2Href(`/case-studies/${c.slug}`)}>Read the case study →</Link>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
