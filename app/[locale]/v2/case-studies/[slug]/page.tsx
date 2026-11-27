import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { caseStudies } from "@/lib/content";
import { v2Href } from "@/components/v2/v2-nav-data";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = caseStudies.find((x) => x.slug === slug);
  if (!c) return {};
  return { title: `${c.title} — SystemFriendly Labs`, description: c.summary, alternates: { canonical: `/case-studies/${c.slug}` } };
}

export default async function V2CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = caseStudies.find((x) => x.slug === slug);
  if (!c) notFound();
  return (
    <main>
      <section className="v2-page-hero">
        <Link href={v2Href("/case-studies")} className="v2-post-back">← All case studies</Link>
        <p className="v2-chapter-kicker">{c.industry}</p>
        <h1 className="v2-page-h1">{c.title}</h1>
        <p className="v2-page-sub">{c.scale}</p>
      </section>

      <section className="v2-cs-block">
        <p className="v2-chapter-kicker">The situation</p>
        <p className="v2-cs-lead">{c.situation}</p>
      </section>

      <section className="v2-cs-block">
        <p className="v2-chapter-kicker">What was broken</p>
        <div className="v2-cs-grid">
          {c.problems.map((p) => (
            <div key={p.title}><h3>{p.title}</h3><p>{p.description}</p></div>
          ))}
        </div>
      </section>

      <section className="v2-cs-block">
        <p className="v2-chapter-kicker">What we built</p>
        <p className="v2-cs-lead">{c.solution}</p>
      </section>

      <section className="v2-cs-block">
        <p className="v2-chapter-kicker">What changed</p>
        <div className="v2-cs-grid">
          {c.results.map((r) => (
            <div key={r.title}><h3>{r.title}</h3><p>{r.description}</p></div>
          ))}
        </div>
        <p className="v2-cs-note">{c.industryContextNote}</p>
      </section>

      <section className="v2-chapter v2-cta-chapter">
        <p className="v2-chapter-kicker">Similar problem?</p>
        <h2 className="v2-chapter-h2">Tell us what you&rsquo;re<br /><em>dealing with.</em></h2>
        <Link href={v2Href("/contact")} className="v2-cta-link v2-cta-static">Talk to us</Link>
      </section>
    </main>
  );
}
