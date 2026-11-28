import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { services } from "@/lib/content";
import { v2Href } from "@/components/v2/v2-nav-data";

export const metadata: Metadata = {
  title: "Services — SystemFriendly Labs",
  description: "SaaS, ERP, AI, mobile, web, CRM, automation, cloud and data engineering by senior engineers, at fixed scope and price.",
  alternates: { canonical: "/services" },
};

export default function V2Services() {
  return (
    <main>
      <section className="v2-page-hero">
        <p className="v2-chapter-kicker">Services</p>
        <h1 className="v2-page-h1">Built properly,<br /><em>owned by you.</em></h1>
        <p className="v2-page-sub">Senior engineers, fixed scope, full source handed over.</p>
      </section>
      <section className="v2-uc-list">
        {services.map((s) => (
          <article key={s.slug} className="v2-uc-row">
            <h2 className="v2-uc-problem">{s.title}</h2>
            <div className="v2-uc-body">
              <p>{s.short}</p>
              <div className="v2-uc-links">
                <Link href={v2Href(`/services/${s.slug}`)}>Read more →</Link>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
