import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/lib/content";
import { BreadcrumbSchema, ProductSchema } from "@/components/SchemaScript";
import Reveal from "@/components/Reveal";
import Magnetic from "@/components/Magnetic";

export const metadata: Metadata = {
  title: "Products",
  description: "SF Inventory System, SF LIMS, Smart Café Platform, Smart HRMS — software products built and maintained by SystemFriendly Labs across retail, diagnostics, food & beverage, and HR.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "/products",
    languages: {
      "en": "/products",
      "hi": "/hi/products",
    },
  },
  keywords: ["inventory management software", "LIMS software", "laboratory information management system", "pathology lab software", "billing software retail", "cloud inventory system", "Smart Café Platform", "HRMS software", "custom software products", "SaaS products"],
  openGraph: {
    title: "Products — SystemFriendly Labs",
    description: "SF Inventory System, SF LIMS, Smart Café Platform, Smart HRMS — software products built and maintained by SystemFriendly Labs.",
    url: "https://systemfriendly.com/products",
    siteName: "SystemFriendly Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Products — SystemFriendly Labs",
    description: "SF Inventory System, SF LIMS, Smart Café Platform, Smart HRMS and more — built by SystemFriendly Labs.",
  },
};

const ACCENTS = [
  "var(--color-accent-blue)",
  "var(--color-accent-purple)",
  "var(--color-warning, #F59E0B)",
];

export default function ProductsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[{ name: "Home", href: "/" }, { name: "Products", href: "/products" }]}
      />
      {products.map((p) => (
        <ProductSchema
          key={p.slug}
          name={p.name}
          description={p.pitch}
          url={`/products/${p.slug}`}
        />
      ))}

      {/* Hero */}
      <section
        className="px-8 pt-[120px] pb-[72px] border-b"
        style={{ borderColor: "var(--color-border)" }}
      >
        <div className="max-w-[1240px] mx-auto">
          <div
            className="mono text-[12px] mb-5 load-in"
            style={{ color: "var(--color-text-muted)" }}
          >
            <Link href="/" style={{ color: "var(--color-text-muted)" }}>Home</Link> / Products
          </div>
          <span className="eyebrow load-in">Products</span>
          <h1 className="text-[clamp(32px,4.6vw,52px)] leading-[1.1] max-w-[720px] mt-4 load-in">
            Platforms we&apos;ve built and keep building on.
          </h1>
          <p
            className="text-[16px] max-w-[560px] mt-4.5 leading-[1.6] load-in"
            style={{ color: "var(--color-text-muted)" }}
          >
            Alongside client engagements, SystemFriendly Labs maintains a set of our own products — built to solve problems we kept seeing across industries.
          </p>
        </div>
      </section>

      {/* Product grid */}
      <section
        className="px-8"
        style={{
          paddingTop: "clamp(64px, 9vw, 110px)",
          paddingBottom: "clamp(64px, 9vw, 110px)",
        }}
      >
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p, i) => {
              const accent = ACCENTS[i % 3];
              const displayName = p.name.startsWith("SF ") ? (
                <>
                  <span>SF </span>
                  <span style={{ color: "#E8820C" }}>{p.name.slice(3)}</span>
                </>
              ) : (
                p.name
              );
              return (
                <Reveal key={p.slug}>
                  <Link
                    href={`/products/${p.slug}`}
                    className="block h-full rounded-2xl border p-7 group transition-shadow duration-300 hover:shadow-xl"
                    style={{
                      borderColor: "var(--color-border)",
                      background: "var(--color-card)",
                      boxShadow: "0 8px 24px -16px rgba(15,23,42,0.12)",
                      textDecoration: "none",
                    }}
                  >
                    {/* accent bar */}
                    <div
                      className="w-8 h-[3px] rounded-full mb-5"
                      style={{ background: accent }}
                    />
                    {/* tag */}
                    <div
                      className="mono text-[10px] uppercase tracking-[.06em] mb-2"
                      style={{ color: accent }}
                    >
                      {p.tag}
                    </div>
                    {/* name */}
                    <h2 className="text-[clamp(18px,2vw,22px)] leading-[1.2] mb-3 font-semibold">
                      {displayName}
                    </h2>
                    {/* pitch */}
                    <p
                      className="text-[13px] leading-[1.6] mb-5"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      {p.pitch.length > 120 ? p.pitch.slice(0, 120) + "…" : p.pitch}
                    </p>
                    {/* feature chips — first 3 */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {p.features.slice(0, 3).map((f) => (
                        <span
                          key={f}
                          className="mono text-[9px] px-2 py-1 rounded-md"
                          style={{
                            background: "var(--color-bg-secondary)",
                            border: "1px solid var(--color-border)",
                            color: "var(--color-text-muted)",
                          }}
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                    {/* CTA */}
                    <div
                      className="mono text-[12px] font-medium group-hover:underline"
                      style={{ color: accent }}
                    >
                      Learn more →
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="px-8"
        style={{
          paddingTop: "clamp(64px, 9vw, 110px)",
          paddingBottom: "clamp(64px, 9vw, 110px)",
        }}
      >
        <div className="max-w-[1240px] mx-auto">
          <Reveal>
            <div
              className="rounded-[20px] py-10 px-6 sm:py-16 sm:px-14 text-center border"
              style={{
                background:
                  "radial-gradient(ellipse at top, rgba(59,130,246,0.10), transparent 60%), var(--color-bg-secondary)",
                borderColor: "var(--color-border)",
              }}
            >
              <span className="eyebrow">Interested in one of these?</span>
              <h2 className="text-[clamp(26px,3.6vw,38px)] mt-4 mb-4">
                Let&apos;s see if it fits your operation.
              </h2>
              <p
                className="max-w-[480px] mx-auto mb-8 text-[15px]"
                style={{ color: "var(--color-text-muted)" }}
              >
                Every product above started as a client engagement. We can adapt any of them, or build something new entirely.
              </p>
              <div className="flex gap-3.5 justify-center flex-wrap">
                <Magnetic>
                  <Link href="/contact" className="btn btn-primary">
                    Request a demo
                  </Link>
                </Magnetic>
                <Magnetic>
                  <Link href="/case-studies" className="btn btn-ghost">
                    See case studies
                  </Link>
                </Magnetic>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
