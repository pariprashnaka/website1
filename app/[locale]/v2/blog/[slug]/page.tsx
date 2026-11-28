import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { ArticleSchema, BreadcrumbSchema } from "@/components/SchemaScript";
import { getAllPostsMeta, getPostBySlug, getRelatedPosts } from "@/lib/blog";
import { v2Href } from "@/components/v2/v2-nav-data";

export async function generateStaticParams() {
  return getAllPostsMeta().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    authors: [{ name: "SystemFriendly Labs", url: "https://systemfriendly.com/about" }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: ["SystemFriendly Labs"],
      url: `https://systemfriendly.com/blog/${post.slug}`,
      siteName: "SystemFriendly Labs",
      images: post.image ? [{ url: post.image, width: 1200, height: 630, alt: post.imageAlt ?? post.title }] : undefined,
    },
    twitter: { card: "summary_large_image", title: post.title, description: post.description, images: post.image ? [post.image] : undefined },
  };
}

// Loads an article's chart component; returns null on any error so the article always renders.
async function loadCharts(name?: string): Promise<React.ComponentType | null> {
  if (!name) return null;
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const mod: any = await import(`@/components/blog/charts/${name}`);
    return typeof mod?.default === "function" ? mod.default : null;
  } catch {
    console.warn(`[blog] chart component not found: ${name}`);
    return null;
  }
}

const fmt = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });

export default async function V2BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();
  const related = getRelatedPosts(post);
  const ChartComponent = await loadCharts(post.charts);

  return (
    <main>
      <ArticleSchema title={post.title} description={post.description} url={`/blog/${post.slug}`} datePublished={post.date} />
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog" },
          { name: post.title, href: `/blog/${post.slug}` },
        ]}
      />

      <header className="v2-post-head">
        <Link href={v2Href("/blog")} className="v2-post-back">← All articles</Link>
        <div className="v2-post-tags">
          {post.tags.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        <h1 className="v2-post-title">{post.title}</h1>
        <p className="v2-post-desc">{post.description}</p>
        <p className="v2-post-meta">
          {post.author} · {fmt(post.date)} · {post.readingTime}
        </p>
      </header>

      {post.image && (
        <figure className="v2-post-cover">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={post.image} alt={post.imageAlt ?? post.title} width={1200} height={630} />
        </figure>
      )}

      <article className="v2-article" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />

      {ChartComponent && (
        <section className="v2-charts">
          <p className="v2-chapter-kicker">Data &amp; charts</p>
          <ChartComponent />
        </section>
      )}

      <section className="v2-post-cta">
        <p className="v2-chapter-kicker">Working on something similar?</p>
        <h2 className="v2-chapter-h2">
          Tell us what you&rsquo;re<br /><em>trying to build.</em>
        </h2>
        <Link href={v2Href("/contact")} className="v2-cta-link v2-cta-static">
          Talk to us
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </Link>
      </section>

      {related.length > 0 && (
        <section className="v2-more">
          <p className="v2-chapter-kicker">Keep reading</p>
          <div className="v2-more-grid">
            {related.map((r) => (
              <Link key={r.slug} href={v2Href(`/blog/${r.slug}`)} className="v2-more-card">
                <span>{r.tags[0] ?? "Article"}</span>
                <strong>{r.title}</strong>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
