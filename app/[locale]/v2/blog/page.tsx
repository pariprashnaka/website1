import type { Metadata } from "next";
import V2BlogList from "@/components/v2/V2BlogList";
import { getAllPostsMeta, getAllTags } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — SystemFriendly Labs",
  description:
    "Practical writing on AI, automation, ERP and building software that fits how a business actually runs.",
  alternates: { canonical: "/blog" },
};

const fmt = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric", timeZone: "UTC" });

export default function V2BlogPage() {
  const posts = getAllPostsMeta().map((p) => ({
    slug: p.slug,
    title: p.title,
    description: p.description,
    dateLabel: fmt(p.date),
    readingTime: p.readingTime,
    tags: p.tags,
    image: p.image,
    imageAlt: p.imageAlt,
  }));

  return (
    <main>
      <section className="v2-page-hero v2-blog-hero">
        <p className="v2-chapter-kicker">Blog</p>
        <h1 className="v2-page-h1">
          Notes from<br /><em>the build.</em>
        </h1>
        <p className="v2-page-sub">
          Plain-language writing on AI, automation, ERP and the software behind running a business.
        </p>
      </section>
      <V2BlogList posts={posts} tags={getAllTags()} />
    </main>
  );
}
