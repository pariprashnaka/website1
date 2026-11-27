import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { products } from "@/lib/content";
import { BreadcrumbSchema, ProductSchema } from "@/components/SchemaScript";
import Reveal from "@/components/Reveal";
import Magnetic from "@/components/Magnetic";
import ProductDiagramRenderer from "@/components/ProductDiagramRenderer";
import ScreenRenderer from "@/components/ScreenRenderer";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = products.find((p) => p.slug === slug);
  if (!p) return {};
  return {
    title: `${p.name} | ${p.tag}`,
    description: p.pitch,
    robots: { index: true, follow: true },
    alternates: {
      canonical: `/products/${p.slug}`,
      languages: {
        "en": `/products/${p.slug}`,
        "hi": `/hi/products/${p.slug}`,
      },
    },
    keywords: p.features.slice(0, 8),
    openGraph: {
      title: `${p.name} | SystemFriendly Labs`,
      description: p.pitch,
      url: `https://systemfriendly.com/products/${p.slug}`,
      siteName: "SystemFriendly Labs",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${p.name} | SystemFriendly Labs`,
      description: p.pitch,
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug } = await params;
  const p = products.find((p) => p.slug === slug);
  if (!p) notFound();

  const accent = p.slug.startsWith("sf-")
    ? "var(--color-accent-blue)"
    : p.slug.includes("cafe")
    ? "var(--color-accent-blue)"
    : p.slug.includes("hrms")
    ? "var(--color-accent-purple)"
    : p.slug.includes("agri")
    ? "#22C55E"
    : "var(--color-accent-blue)";

  const displayName = p.name.startsWith("SF ") ? (
    <>
      <span>SF </span>
      <span style={{ color: "#E8820C" }}>{p.name.slice(3)}</span>
    </>
  ) : (
    p.name
  );

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Products", href: "/products" },
          { name: p.name, href: `/products/${p.slug}` },
        ]}
      />
      <ProductSchema
        name={p.name}
        description={p.pitch}
        url={`/products/${p.slug}`}
        features={p.features}
        os={p.slug.includes("lims") || p.slug.includes("inventory") ? "Web, Android" : "Web"}
      />

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
            <Link href="/" style={{ color: "var(--color-text-muted)" }}>Home</Link>
            {" / "}
            <Link href="/products" style={{ color: "var(--color-text-muted)" }}>Products</Link>
            {" / "}
            {p.name}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
            <div>
              <div
                className="mono text-[11px] uppercase tracking-[.06em] mb-3.5 load-in"
                style={{ color: accent }}
              >
                {p.tag}
              </div>
              <h1
                className="text-[clamp(28px,4vw,48px)] leading-[1.15] mb-4 load-in"
              >
                {displayName}
              </h1>
              <p
                className="text-[15px] leading-[1.65] mb-6 load-in"
                style={{ color: "var(--color-text-muted)" }}
              >
                {p.pitch}
              </p>
              <div className="flex items-center gap-4 flex-wrap load-in">
                <Magnetic>
                  <Link href="/contact" className="btn btn-primary">
                    Request a demo
                  </Link>
                </Magnetic>
                {p.caseStudySlug && (
                  <Link
                    href={`/case-studies/${p.caseStudySlug}`}
                    className="mono text-[13px] font-medium"
                    style={{ color: accent }}
                  >
                    See the real case study →
                  </Link>
                )}
              </div>
            </div>

            <div
              className={`product-visual ${
                p.diagram === "CafeOwnerVisibilityScene"
                  ? "aspect-auto sm:aspect-[4/3]"
                  : "aspect-[4/3]"
              } rounded-2xl overflow-hidden relative flex items-center justify-center mono text-[12px] load-in`}
              style={{
                border: "1px solid var(--color-border)",
                color: "var(--color-text-muted)",
                boxShadow: "0 16px 40px -20px rgba(15,23,42,0.18)",
              }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-[3px] z-10"
                style={{ background: accent }}
              />
              <ProductDiagramRenderer diagram={p.diagram} />
            </div>
          </div>
        </div>
      </section>

      {/* Detail cards */}
      <section
        className="px-8"
        style={{
          paddingTop: "clamp(64px, 9vw, 110px)",
          paddingBottom: "clamp(64px, 9vw, 110px)",
        }}
      >
        <div className="max-w-[1240px] mx-auto">
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <Detail title="Overview" text={p.overview} accent={accent} />
              <Detail title="Problem" text={p.problem} accent={accent} />
              <Detail title="Solution" text={p.solution} accent={accent} />
              <Detail title="Results" text={p.results} accent={accent} />
            </div>

            {/* Feature chips */}
            <div className="mt-4">
              {p.features.map((f) => (
                <span key={f} className="chip">
                  {f}
                </span>
              ))}
            </div>

            {/* Screen cards */}
            {p.screens && p.screens.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                {p.screens.map((screenName, i) => (
                  <div
                    key={i}
                    className="aspect-[16/10] rounded-lg overflow-hidden mono text-[10px] flex items-center justify-center"
                    style={{
                      border: "1px solid var(--color-border)",
                      background: "var(--color-card)",
                      color: "var(--color-text-muted)",
                      boxShadow: "0 8px 22px -14px rgba(15,23,42,0.14)",
                    }}
                  >
                    <ScreenRenderer name={screenName} />
                  </div>
                ))}
              </div>
            )}
          </Reveal>
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
              <span className="eyebrow">Interested in {p.name}?</span>
              <h2 className="text-[clamp(26px,3.6vw,38px)] mt-4 mb-4">
                Let&apos;s see if it fits your operation.
              </h2>
              <p
                className="max-w-[480px] mx-auto mb-8 text-[15px]"
                style={{ color: "var(--color-text-muted)" }}
              >
                Every product started as a client engagement. We can adapt it,
                or build something new entirely.
              </p>
              <div className="flex gap-3.5 justify-center flex-wrap">
                <Magnetic>
                  <Link href="/contact" className="btn btn-primary">
                    Request a demo
                  </Link>
                </Magnetic>
                <Magnetic>
                  <Link href="/products" className="btn btn-ghost">
                    See all products
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

function Detail({
  title,
  text,
  accent,
}: {
  title: string;
  text: string;
  accent: string;
}) {
  return (
    <div
      className="p-6.5 rounded-xl"
      style={{
        background: "var(--color-card)",
        border: "1px solid var(--color-border)",
        boxShadow: "0 8px 24px -16px rgba(15,23,42,0.14)",
      }}
    >
      <h5
        className="mono text-[11px] uppercase tracking-[.06em] mb-2.5"
        style={{ color: accent }}
      >
        {title}
      </h5>
      <p
        className="text-[14px] leading-[1.6]"
        style={{ color: "var(--color-text-muted)" }}
      >
        {text}
      </p>
    </div>
  );
}
