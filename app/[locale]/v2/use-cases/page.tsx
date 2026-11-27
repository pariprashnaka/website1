import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { products } from "@/lib/content";
import { v2Href } from "@/components/v2/v2-nav-data";
import { USE_CASES } from "@/components/v2/v2-use-cases";

export const metadata: Metadata = {
  title: "Use Cases — SystemFriendly Labs",
  description:
    "Real operational problems in inventory, laboratories, cafés, HR and agriculture, and how each is solved in production.",
  alternates: { canonical: "/use-cases" },
};

const nameOf = (slug: string) => products.find((p) => p.slug === slug)?.name ?? slug;

export default function V2UseCasesPage() {
  return (
    <main>
      <section className="v2-page-hero">
        <p className="v2-chapter-kicker">Use cases</p>
        <h1 className="v2-page-h1">
          Start with<br /><em>the problem.</em>
        </h1>
        <p className="v2-page-sub">
          These are the situations our clients come to us with. Find yours, and see what changes.
        </p>
      </section>

      <section className="v2-uc-list">
        {USE_CASES.map((u) => (
          <article key={u.problem} className="v2-uc-row">
            <h2 className="v2-uc-problem">{u.problem}</h2>
            <div className="v2-uc-body">
              <p>{u.change}</p>
              <div className="v2-uc-links">
                <Link href={v2Href(`/products/${u.productSlug}`)}>{nameOf(u.productSlug)} →</Link>
                {u.caseStudySlug && (
                  <Link href={v2Href(`/case-studies/${u.caseStudySlug}`)}>Read the case study →</Link>
                )}
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="v2-chapter v2-cta-chapter">
        <p className="v2-chapter-kicker">Not on the list?</p>
        <h2 className="v2-chapter-h2">
          Describe your problem.<br /><em>We&rsquo;ll tell you honestly</em> if we can help.
        </h2>
        <Link href={v2Href("/contact")} className="v2-cta-link v2-cta-static">
          Talk to us
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </Link>
      </section>
    </main>
  );
}
