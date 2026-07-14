import Link from "next/link";
import type { PostMeta } from "@/lib/blog";

export default function BlogCard({ post }: { post: PostMeta }) {
  const date = new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
  return (
    <Link href={`/blog/${post.slug}`} className="panel p-7 block transition-all hover:-translate-y-1">
      <div className="flex items-center gap-3 mono text-[11px] mb-4" style={{ color: "var(--color-text-muted)" }}>
        <span>{date}</span>
        <span>·</span>
        <span>{post.readingTime}</span>
      </div>
      <h3 className="text-[17px] mb-2.5 leading-[1.3]">{post.title}</h3>
      <p className="text-[14px] leading-[1.6] mb-4" style={{ color: "var(--color-text-muted)" }}>{post.description}</p>
      <div>{post.tags.map((t) => <span key={t} className="chip">{t}</span>)}</div>
    </Link>
  );
}
