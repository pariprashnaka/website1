import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { products } from "@/lib/content";
import { v2Href } from "@/components/v2/v2-nav-data";
import { productVideo } from "@/components/v2/v2-product-media";

export const metadata: Metadata = {
  title: "Products — SystemFriendly Labs",
  description:
    "Inventory, laboratory, café, HR and agriculture platforms built on one architecture and shaped around how each industry actually works.",
  alternates: { canonical: "/products" },
};

export default function V2ProductsPage() {
  return (
    <main>
      <section className="v2-page-hero">
        <p className="v2-chapter-kicker">Products</p>
        <h1 className="v2-page-h1">
          Software that fits<br /><em>the work.</em>
        </h1>
        <p className="v2-page-sub">
          {products.length} platforms, one architecture underneath. Each is built around how its
          industry really operates, then proven in production.
        </p>
      </section>

      <section className="v2-prod-list">
        {products.map((p, i) => {
          const video = productVideo(p.slug);
          return (
            <article key={p.slug} className={`v2-prod-row${i % 2 ? " flip" : ""}`}>
              <div className="v2-prod-copy">
                <p className="v2-chapter-kicker">{p.tag}</p>
                <h2 className="v2-prod-name">{p.name}</h2>
                <p className="v2-prod-pitch">{p.pitch}</p>
                <ul className="v2-prod-feats">
                  {p.features.slice(0, 3).map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <Link href={v2Href(`/products/${p.slug}`)} className="v2-cta-link v2-cta-static">
                  Explore {p.name}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </Link>
              </div>
              <div className="v2-prod-visual" aria-hidden="true">
                {video ? (
                  <video src={video} autoPlay muted loop playsInline preload="metadata" />
                ) : (
                  <span className="v2-prod-mono">{p.name.replace(/^(SF|Smart)\s+/, "").slice(0, 2)}</span>
                )}
              </div>
            </article>
          );
        })}
      </section>

      <section className="v2-chapter v2-cta-chapter">
        <p className="v2-chapter-kicker">Don&rsquo;t see your industry?</p>
        <h2 className="v2-chapter-h2">
          The platform was never<br /><em>built for just these.</em>
        </h2>
        <Link href={v2Href("/contact")} className="v2-cta-link v2-cta-static">
          Tell us what you&rsquo;re building
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </Link>
      </section>
    </main>
  );
}
