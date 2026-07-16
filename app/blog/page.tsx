import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import BlogList from "@/components/BlogList";
import { getAllPostsMeta, getAllTags } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Real experience from building SaaS, ERP, and AI systems, plus complex topics explained simply — written so a student and a CEO can both actually understand it.",
  alternates: { canonical: "/blog" },
};

export default async function BlogIndexPage({
  searchParams,
}: {
  searchParams: Promise<{ tag?: string }>;
}) {
  const { tag } = await searchParams;
  const allPosts = getAllPostsMeta();
  const tags = getAllTags();

  return (
    <>
      <section className="px-8 pt-[120px] pb-[72px] border-b" style={{ borderColor: "var(--color-border)" }}>
        <div className="max-w-[1240px] mx-auto">
          <div className="mono text-[12px] mb-5 load-in" style={{ color: "var(--color-text-muted)" }}>
            <Link href="/" style={{ color: "var(--color-text-muted)" }}>Home</Link> / Blog
          </div>
          <span className="eyebrow load-in">Blog</span>
          <h1 className="text-[clamp(32px,4.6vw,52px)] leading-[1.1] max-w-[760px] mt-4 load-in">Things we&apos;ve learned, explained the way we wish someone had explained them to us.</h1>
          <p className="text-[16px] max-w-[600px] mt-4.5 leading-[1.6] load-in" style={{ color: "var(--color-text-muted)" }}>
            Real experience and honest observations from building SaaS, ERP, and AI systems — plus the newer, more confusing topics broken down simply. Whether you&apos;re a student trying to understand this world or a CEO trying to make a decision, you should be able to read any of these and actually walk away understanding it.
          </p>
        </div>
      </section>

      <section className="px-8 py-[100px]">
        <div className="max-w-[900px] mx-auto">
          <Reveal>
            <BlogList posts={allPosts} tags={tags} initialTag={tag} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
