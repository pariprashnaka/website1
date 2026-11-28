import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { products } from "@/lib/content";
import { v2Href } from "@/components/v2/v2-nav-data";
import { USE_CASES, slugOf } from "@/components/v2/v2-use-cases";
import V2UseCaseLibrary from "@/components/v2/V2UseCaseLibrary";

export const metadata: Metadata = {
  title: "Use Cases — The Problem Library | SystemFriendly Labs",
  description:
    "SystemFriendly Labs' problem library: real operational headaches in inventory and GST billing, pathology labs, cafés, HR and payroll, and agriculture, and how each is solved in production.",
  alternates: { canonical: "/use-cases" },
};

const nameOf = (slug: string) => products.find((p) => p.slug === slug)?.name ?? slug;

const SHELF_TITLES: Record<string, string> = {
  stock: "Inventory, billing and GST problems",
  lab: "Pathology lab problems",
  cafe: "Café and restaurant problems",
  people: "HR, attendance and payroll problems",
  fields: "Agriculture and tea estate problems",
};

export default function V2UseCasesPage() {
  const books = USE_CASES.map((u) => ({ ...u, productName: nameOf(u.productSlug) }));
  const ld = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Use Cases — The Problem Library",
    description: "Operational problems SystemFriendly Labs solves for Indian businesses, with the product and case study behind each.",
    publisher: { "@type": "Organization", name: "SystemFriendly Labs", url: "https://systemfriendly.com" },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: books.length,
      itemListElement: books.map((b, i) => ({ "@type": "ListItem", position: i + 1, name: b.problem })),
    },
  };
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <section className="v2-page-hero">
        <p className="v2-chapter-kicker">Use cases</p>
        <h1 className="v2-page-h1">
          The Problem<br /><em>Library.</em>
        </h1>
        <p className="v2-page-sub">
          {books.length} real operational headaches that SystemFriendly <span className="v2-labs">Labs</span> has solved for Indian businesses. Pick a book, read how it ended, and try to collect them all.
        </p>
      </section>

      <V2UseCaseLibrary books={books} />

      <details className="v2-lib-seo v2-lib-fold">
        <summary>Prefer a list? Read every use case as text</summary>
        <p>
          SystemFriendly <span className="v2-labs">Labs</span> builds cloud software for Indian businesses: the SF Inventory System for retail, trading and
          GST billing, SF LIMS for pathology labs, the Smart Caf&eacute; Platform, the Smart HRMS Platform, and agriculture
          platforms and services. Each use case below names the problem, what changes, and the product that does it.
        </p>
        {(["stock", "lab", "cafe", "people", "fields"] as const).map((sh) => (
          <div key={sh}>
            <h3>{SHELF_TITLES[sh]}</h3>
            <ul>
              {books.filter((b) => b.shelf === sh).map((b) => (
                <li key={b.short} id={slugOf(b.short)}>
                  <h4>{b.problem}</h4>
                  <p>{b.change}</p>
                  <Link href={v2Href(`/products/${b.productSlug}`)}>{b.productName} by SystemFriendly <span className="v2-labs">Labs</span></Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </details>

      <section className="v2-chapter v2-cta-chapter">
        <p className="v2-chapter-kicker">Not on the shelf?</p>
        <h2 className="v2-chapter-h2">
          Describe your problem.<br /><em>We&rsquo;ll tell you honestly</em> if we can help.
        </h2>
        <Link href={v2Href("/contact")} className="v2-cta-link v2-cta-static">Talk to us</Link>
      </section>
    </main>
  );
}
