import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import BlogCard from "@/components/BlogCard";
import { getAllPostsMeta, getAllTags } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Engineering notes and operating lessons from building and shipping enterprise software.",
};

export default async function BlogIndexPage({
  searchParams,
}: {
  searchParams: Promise<{ tag?: string }>;
}) {
  const { tag } = await searchParams;
  const allPosts = getAllPostsMeta();
  const tags = getAllTags();
  const posts = tag ? allPosts.filter((p) => p.tags.includes(tag)) : allPosts;

  return (
    <>
      <section className="px-8 pt-[120px] pb-[72px] border-b" style={{ borderColor: "var(--color-border)" }}>
        <div className="max-w-[1240px] mx-auto">
          <div className="mono text-[12px] mb-5 load-in" style={{ color: "var(--color-text-muted)" }}>
            <Link href="/" style={{ color: "var(--color-text-muted)" }}>Home</Link> / Blog
          </div>
          <span className="eyebrow load-in">Blog</span>
          <h1 className="text-[clamp(32px,4.6vw,52px)] leading-[1.1] max-w-[720px] mt-4 load-in">Notes from building enterprise software.</h1>
          <p className="text-[16px] max-w-[560px] mt-4.5 leading-[1.6] load-in" style={{ color: "var(--color-text-muted)" }}>
            What we&apos;ve learned shipping SaaS, ERP, and AI systems — written for the people making the same decisions we did.
          </p>
        </div>
      </section>

      <section className="px-8 py-[100px]">
        <div className="max-w-[1240px] mx-auto">
          {tags.length > 0 && (
            <Reveal className="mb-10 flex gap-2 flex-wrap">
              <Link href="/blog" className="chip" style={!tag ? { borderColor: "var(--color-accent-cyan)", color: "var(--color-text-white)" } : undefined}>
                All
              </Link>
              {tags.map((t) => (
                <Link
                  key={t}
                  href={`/blog?tag=${encodeURIComponent(t)}`}
                  className="chip"
                  style={tag === t ? { borderColor: "var(--color-accent-cyan)", color: "var(--color-text-white)" } : undefined}
                >
                  {t}
                </Link>
              ))}
            </Reveal>
          )}

          {posts.length === 0 ? (
            <Reveal>
              <p style={{ color: "var(--color-text-muted)" }}>No posts yet{tag ? ` tagged "${tag}"` : ""}. Check back soon.</p>
            </Reveal>
          ) : (
            <Reveal>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {posts.map((p) => <BlogCard key={p.slug} post={p} />)}
              </div>
            </Reveal>
          )}
        </div>
      </section>
    </>
  );
}
