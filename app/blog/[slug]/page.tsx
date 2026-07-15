import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import BlogContent from "@/components/BlogContent";
import BlogCard from "@/components/BlogCard";
import { getAllPostsMeta, getPostBySlug, getRelatedPosts } from "@/lib/blog";

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
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

// Safely loads a chart component — returns null on any error so content always renders
async function loadCharts(name?: string): Promise<React.ComponentType | null> {
  if (!name) return null;
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const mod: any = await import(`@/components/blog/charts/${name}`);
    if (typeof mod?.default === "function") return mod.default;
    return null;
  } catch {
    console.warn(`[blog] chart component not found: ${name}`);
    return null;
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post);
  const date = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const ChartComponent = await loadCharts(post.charts);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.description,
            datePublished: post.date,
            dateModified: post.date,
            author: { "@type": "Organization", name: post.author },
          }),
        }}
      />

      {/* Header */}
      <section
        className="px-8 pt-[120px] pb-16 border-b"
        style={{ borderColor: "var(--color-border)" }}
      >
        <div className="max-w-[760px] mx-auto">
          <div
            className="mono text-[12px] mb-5 load-in"
            style={{ color: "var(--color-text-muted)" }}
          >
            <Link href="/" style={{ color: "var(--color-text-muted)" }}>
              Home
            </Link>{" "}
            /{" "}
            <Link href="/blog" style={{ color: "var(--color-text-muted)" }}>
              Blog
            </Link>{" "}
            / {post.title}
          </div>
          <div className="flex gap-2 flex-wrap mb-5 load-in">
            {post.tags.map((t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ))}
          </div>
          <h1
            className="text-[clamp(30px,4.2vw,46px)] leading-[1.15] load-in"
          >
            {post.title}
          </h1>
          <div
            className="flex items-center gap-3 mono text-[12.5px] mt-6 load-in"
            style={{ color: "var(--color-text-muted)" }}
          >
            <span>{post.author}</span>
            <span>·</span>
            <span>{date}</span>
            <span>·</span>
            <span>{post.readingTime}</span>
          </div>
        </div>
      </section>

      {/* Article body — always renders regardless of chart status */}
      <section className="px-8 py-16">
        <div className="max-w-[760px] mx-auto">
          <BlogContent html={post.contentHtml} />

          {/* Charts render below the article body, isolated from it */}
          {ChartComponent !== null && (
            <Reveal>
              <div className="mt-12 pt-10 border-t" style={{ borderColor: "var(--color-border)" }}>
                <div
                  className="mono text-[11px] uppercase tracking-[.08em] mb-6"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {"// DATA & CHARTS"}
                </div>
                <ChartComponent />
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* Related posts */}
      {related.length > 0 && (
        <section
          className="px-8 py-[100px] border-t"
          style={{ borderColor: "var(--color-border)" }}
        >
          <div className="max-w-[1240px] mx-auto">
            <Reveal className="max-w-[640px] mb-10">
              <span className="section-num mono">{"// RELATED"}</span>
              <h2 className="text-[clamp(24px,3vw,32px)] mt-4">
                More like this.
              </h2>
            </Reveal>
            <Reveal>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {related.map((p) => (
                  <BlogCard key={p.slug} post={p} />
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="px-8 py-[100px]">
        <div className="max-w-[1240px] mx-auto">
          <Reveal>
            <div
              className="rounded-[20px] py-14 px-12 text-center border"
              style={{
                background:
                  "radial-gradient(ellipse at top, rgba(59,130,246,0.10), transparent 60%), var(--color-bg-secondary)",
                borderColor: "var(--color-border)",
              }}
            >
              <h2 className="text-[24px] mb-4">Facing this problem yourself?</h2>
              <Link href="/contact" className="btn btn-primary">
                Start a project
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
