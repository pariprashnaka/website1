import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { services, process } from "@/lib/content";
import { v2Href } from "@/components/v2/v2-nav-data";
import V2ServiceComposer from "@/components/v2/V2ServiceComposer";

export const metadata: Metadata = {
  title: "Services — SystemFriendly Labs",
  description: "Compose the system you need from nine layers: cloud, data, SaaS, ERP, CRM, automation, AI, web and mobile.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/services" },
};

const ORDER: [string, string][] = [
  ["cloud", "Cloud"], ["data", "Data"], ["saas", "SaaS"], ["erp", "ERP"], ["crm", "CRM"],
  ["automation", "Automation"], ["ai", "AI"], ["web", "Web"], ["mobile", "Mobile"],
];

export default function V2ServicesB() {
  const items = ORDER.map(([slug, label]) => {
    const s = services.find((x) => x.slug === slug)!;
    return { slug, label, title: s.title, short: s.short, href: v2Href(`/services/${slug}`) };
  });
  return (
    <main>
      <section className="v2-page-hero">
        <p className="v2-chapter-kicker">Services</p>
        <h1 className="v2-page-h1">Compose your system.<br /><em>See how it fits together.</em></h1>
        <p className="v2-page-sub">Pick the layers you need. We&rsquo;ll show how they connect, and what we&rsquo;d build first.</p>
      </section>

      <V2ServiceComposer items={items} />

      <section className="v2-steps">
        <p className="v2-chapter-kicker">How we work</p>
        <h2 className="v2-chapter-h2 v2-left">Five steps, no surprises.</h2>
        <ol className="v2-steps-list">
          {process.map((p) => (<li key={p.idx}><span>{p.idx}</span><h3>{p.title}</h3><p>{p.desc}</p></li>))}
        </ol>
      </section>

      <section className="v2-chapter v2-cta-chapter">
        <p className="v2-chapter-kicker">Next step</p>
        <h2 className="v2-chapter-h2">Got your stack in mind?<br /><em>Let&rsquo;s talk it through.</em></h2>
        <Link href={v2Href("/contact")} className="v2-cta-link v2-cta-static">
          Talk to us
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
        </Link>
      </section>
    </main>
  );
}
