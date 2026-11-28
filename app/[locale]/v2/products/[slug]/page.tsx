import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { products } from "@/lib/content";
import { v2Href } from "@/components/v2/v2-nav-data";
import { productVideo } from "@/components/v2/v2-product-media";
import V2LazyVideo from "@/components/v2/V2LazyVideo";
import { PRODUCT_SCREENS } from "@/components/v2/v2-product-screens";
import { USE_CASES } from "@/components/v2/v2-use-cases";
import fs from "node:fs";
import path from "node:path";

const WHO: Record<string, string> = { shop: "Shops & traders", lab: "Labs & clinics", cafe: "Cafés & restaurants", employer: "Employers & HR teams", farm: "Farms & estates" };
const STEPS = [
  { t: "See it on your data", d: "A 30-minute demo using your own products, tests, menu or staff list, not a canned slideshow." },
  { t: "Set up & import", d: "We configure the system around how you already work and bring in your existing records." },
  { t: "Train your team", d: "Your people learn on real day-to-day tasks until they are comfortable." },
  { t: "Go live & stay supported", d: "Launch with us beside you, and keep support after launch." },
];

function shotSrc(slug: string, n: number): string | null {
  for (const ext of ["png", "webp", "jpg"]) {
    if (fs.existsSync(path.join(process.cwd(), "public", "screenshots", slug, `${n}.${ext}`))) return `/screenshots/${slug}/${n}.${ext}`;
  }
  return null;
}

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
  const screens = (PRODUCT_SCREENS[p.slug] ?? []).map((x) => ({ ...x, src: shotSrc(p.slug, x.n) }));
  const cases = USE_CASES.filter((u) => u.productSlug === p.slug).slice(0, 6);
  const audiences = Array.from(new Set(USE_CASES.filter((u) => u.productSlug === p.slug).map((u) => WHO[u.who]).filter(Boolean)));
  const others = products.filter((x) => x.slug !== p.slug).slice(0, 3);

  return (
    <main>
      <section className={`v2-page-hero v2-product-hero${video ? " v2-chapter--video" : ""}`}>
        {video && (
          <>
            <V2LazyVideo className="v2-chapter-video" src={video} />
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
          {audiences.length > 0 && (
            <ul className="v2-who">
              <li className="v2-who-k">Built for</li>
              {audiences.map((a) => <li key={a}>{a}</li>)}
            </ul>
          )}
        </div>
      </section>

      {screens.length > 0 && (
        <section className="v2-shots" aria-label={`${p.name} screens`}>
          <p className="v2-chapter-kicker">Inside the product</p>
          <h2 className="v2-chapter-h2 v2-left">See what you&rsquo;re getting.</h2>
          <div className="v2-shot-tabs">
            {screens.map((x, i) => (
              <input key={`r${x.n}`} type="radio" name="shot" id={`shot${x.n}`} defaultChecked={i === 0} className="v2-shot-radio" />
            ))}
            <div className="v2-shot-labels">
              {screens.map((x) => (<label key={x.n} htmlFor={`shot${x.n}`}>{x.title}</label>))}
            </div>
            <div className="v2-shot-panels">
              {screens.map((x) => (
                <figure key={x.n} className={`v2-shot-panel v2-shot-p${x.n}`}>
                  <div className="v2-shot-frame">
                    <div className="v2-shot-bar"><i /><i /><i /><span>{p.name}</span></div>
                    {x.src ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={x.src} alt={`${p.name}: ${x.title}`} loading="lazy" />
                    ) : (
                      <div className="v2-shot-ph" aria-hidden="true"><b /><b /><b /><b /><b /><b /></div>
                    )}
                  </div>
                  <figcaption><strong>{x.title}.</strong> {x.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

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
          {p.features.map((f, i) => (
            <li key={f}><span className="v2-feat-n">{String(i + 1).padStart(2, "0")}</span>{f}</li>
          ))}
        </ul>
      </section>

      {cases.length > 0 && (
        <section className="v2-solves">
          <p className="v2-chapter-kicker">Problems it solves</p>
          <h2 className="v2-chapter-h2 v2-left">Real headaches, fixed.</h2>
          <div className="v2-solves-grid">
            {cases.map((u) => (
              <article key={u.short} className="v2-solve">
                <h3>{u.short}</h3>
                <p className="v2-solve-p">{u.problem}</p>
                <p className="v2-solve-c">{u.change}</p>
              </article>
            ))}
          </div>
          <Link href={v2Href("/use-cases")} className="v2-cta-link v2-cta-static">
            Browse the full problem library
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </Link>
        </section>
      )}

      <section className="v2-steps">
        <p className="v2-chapter-kicker">Getting started</p>
        <h2 className="v2-chapter-h2 v2-left">From first call to daily use.</h2>
        <ol className="v2-steps-list">
          {STEPS.map((x, i) => (
            <li key={x.t}><span>{i + 1}</span><h3>{x.t}</h3><p>{x.d}</p></li>
          ))}
        </ol>
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
