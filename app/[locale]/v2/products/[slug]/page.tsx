import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { products } from "@/lib/content";
import { v2Href } from "@/components/v2/v2-nav-data";
import { productVideo } from "@/components/v2/v2-product-media";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = products.find((x) => x.slug === slug);
  if (!p) return {};
  return {
    title: `${p.name} — ${p.tag}`,
    description: p.pitch,
    alternates: { canonical: `/products/${p.slug}` },
    openGraph: {
      title: `${p.name} | SystemFriendly Labs`,
      description: p.pitch,
      url: `https://systemfriendly.com/products/${p.slug}`,
      siteName: "SystemFriendly Labs",
      type: "website",
    },
  };
}

export default async function V2ProductDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = products.find((x) => x.slug === slug);
  if (!p) notFound();
  const video = productVideo(p.slug);
  const others = products.filter((x) => x.slug !== p.slug).slice(0, 3);

  return (
    <main>
      <section className={`v2-page-hero v2-product-hero${video ? " v2-chapter--video" : ""}`}>
        {video && (
          <>
            <video className="v2-chapter-video" src={video} autoPlay muted loop playsInline preload="metadata" aria-hidden="true" />
            <div className="v2-chapter-scrim" />
          </>
        )}
        <p className="v2-chapter-kicker">{p.tag}</p>
        <h1 className="v2-page-h1">{p.name}</h1>
        <p className="v2-page-sub">{p.pitch}</p>
        <Link href={v2Href("/contact")} className="v2-cta-link v2-cta-static">
          Book a demo
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </Link>
      </section>

      <section className="v2-prose-wrap">
        <div className="v2-prose">
          <p className="v2-chapter-kicker">Overview</p>
          <p className="v2-prose-lead">{p.overview}</p>
        </div>
      </section>

      <section className="v2-split">
        <div>
          <p className="v2-chapter-kicker">The problem</p>
          <p className="v2-prose-body">{p.problem}</p>
        </div>
        <div>
          <p className="v2-chapter-kicker">How it works</p>
          <p className="v2-prose-body">{p.solution}</p>
        </div>
      </section>

      <section className="v2-feature-wrap">
        <p className="v2-chapter-kicker">What&rsquo;s inside</p>
        <h2 className="v2-chapter-h2 v2-left">Everything in one system.</h2>
        <ul className="v2-feature-grid">
          {p.features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </section>

      <section className="v2-prose-wrap">
        <div className="v2-prose">
          <p className="v2-chapter-kicker">In production</p>
          <p className="v2-prose-lead">{p.results}</p>
          {p.caseStudySlug && (
            <Link href={v2Href(`/case-studies/${p.caseStudySlug}`)} className="v2-cta-link v2-cta-static">
              Read the case study
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          )}
        </div>
      </section>

      <section className="v2-more">
        <p className="v2-chapter-kicker">More products</p>
        <div className="v2-more-grid">
          {others.map((o) => (
            <Link key={o.slug} href={v2Href(`/products/${o.slug}`)} className="v2-more-card">
              <span>{o.tag}</span>
              <strong>{o.name}</strong>
            </Link>
          ))}
        </div>
      </section>

      <section className="v2-chapter v2-cta-chapter">
        <p className="v2-chapter-kicker">Next step</p>
        <h2 className="v2-chapter-h2">
          See {p.name}<br /><em>on your own data.</em>
        </h2>
        <Link href={v2Href("/contact")} className="v2-cta-link v2-cta-static">
          Book a 30-minute demo
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </Link>
      </section>
    </main>
  );
}
