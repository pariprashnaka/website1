import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { services, process } from "@/lib/content";
import { v2Href } from "@/components/v2/v2-nav-data";

type P = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) return {};
  return { title: `${s.title} — SystemFriendly Labs`, description: s.short, alternates: { canonical: `/services/${s.slug}` } };
}

export default async function V2Service({ params }: P) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) notFound();
  return (
    <main>
      <section className="v2-page-hero">
        <p className="v2-chapter-kicker">Services</p>
        <h1 className="v2-page-h1">{s.title}</h1>
        <p className="v2-page-sub">{s.short}</p>
      </section>
      <section className="v2-uc-list">
        <article className="v2-uc-row">
          <h2 className="v2-uc-problem">What we do</h2>
          <div className="v2-uc-body">
            <p>{s.detail}</p>
            <p>{s.tags.join(" · ")}</p>
          </div>
        </article>
        <article className="v2-uc-row">
          <h2 className="v2-uc-problem">How we work</h2>
          <div className="v2-uc-body">
            {process.map((p) => (<p key={p.idx}><strong>{p.title}.</strong> {p.desc}</p>))}
            <div className="v2-uc-links">
              <Link href={v2Href("/contact")}>Talk to us →</Link>
              <Link href={v2Href("/services")}>All services</Link>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
