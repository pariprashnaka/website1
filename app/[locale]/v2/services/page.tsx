import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { services, process, stack } from "@/lib/content";
import { v2Href } from "@/components/v2/v2-nav-data";
import V2ServiceStack from "@/components/v2/V2ServiceStack";

export const metadata: Metadata = {
  title: "Services — SystemFriendly Labs",
  description: "Cloud, data, SaaS, ERP, CRM, automation, AI, web and mobile: every layer of the software your business runs on, built from the ground up by senior engineers.",
  alternates: { canonical: "/services" },
};

// foundation first: the stack is built from the ground up
const ORDER: [string, string][] = [
  ["cloud", "Cloud"], ["data", "Data"], ["saas", "SaaS"], ["erp", "ERP"], ["crm", "CRM"],
  ["automation", "Automation"], ["ai", "AI"], ["web", "Web"], ["mobile", "Mobile"],
];

export default function V2Services() {
  const items = ORDER.map(([slug, label]) => {
    const s = services.find((x) => x.slug === slug)!;
    return { slug, label, title: s.title, short: s.short, detail: s.detail, tags: s.tags, href: v2Href(`/services/${slug}`) };
  });

  return (
    <main>
      <section className="v2-page-hero">
        <p className="v2-chapter-kicker">Services</p>
        <h1 className="v2-page-h1">Every system is a stack.<br /><em>We build it from the ground up.</em></h1>
        <p className="v2-page-sub">Scroll down and watch it assemble: from the cloud underneath to the app in your customer&rsquo;s hand.</p>
      </section>

      <V2ServiceStack items={items} />

      <section className="v2-steps">
        <p className="v2-chapter-kicker">How we work</p>
        <h2 className="v2-chapter-h2 v2-left">Five steps, no surprises.</h2>
        <ol className="v2-steps-list">
          {process.map((p) => (
            <li key={p.idx}><span>{p.idx}</span><h3>{p.title}</h3><p>{p.desc}</p></li>
          ))}
        </ol>
      </section>

      <section className="v2-steps">
        <p className="v2-chapter-kicker">Our toolbox</p>
        <h2 className="v2-chapter-h2 v2-left">Tools we trust in production.</h2>
        <div className="v2-svc-tools">
          {stack.map((g) => (
            <div key={g.group}>
              <h3>{g.group}</h3>
              <ul>{g.items.map((i) => <li key={i}>{i}</li>)}</ul>
            </div>
          ))}
        </div>
      </section>

      <section className="v2-chapter v2-cta-chapter">
        <p className="v2-chapter-kicker">Next step</p>
        <h2 className="v2-chapter-h2">Tell us what you&rsquo;re building.<br /><em>We&rsquo;ll tell you the layers.</em></h2>
        <Link href={v2Href("/contact")} className="v2-cta-link v2-cta-static">
          Talk to us
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
        </Link>
      </section>
    </main>
  );
}
