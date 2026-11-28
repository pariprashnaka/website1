import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { products } from "@/lib/content";
import { v2Href } from "@/components/v2/v2-nav-data";
import { USE_CASES } from "@/components/v2/v2-use-cases";
import V2UseCaseLibrary from "@/components/v2/V2UseCaseLibrary";

export const metadata: Metadata = {
  title: "Use Cases — The Problem Library | SystemFriendly Labs",
  description:
    "Real operational problems in inventory, laboratories, cafés, payroll and agriculture, and how each is solved in production. Pick a book, collect them all.",
  alternates: { canonical: "/use-cases" },
};

const nameOf = (slug: string) => products.find((p) => p.slug === slug)?.name ?? slug;

export default function V2UseCasesPage() {
  const books = USE_CASES.map((u) => ({ ...u, productName: nameOf(u.productSlug) }));
  return (
    <main>
      <section className="v2-page-hero">
        <p className="v2-chapter-kicker">Use cases</p>
        <h1 className="v2-page-h1">
          The Problem<br /><em>Library.</em>
        </h1>
        <p className="v2-page-sub">
          {books.length} headaches we have cured. Pick a book, read how it ended, and try to collect them all.
        </p>
      </section>

      <V2UseCaseLibrary books={books} />

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
