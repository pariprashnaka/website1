"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import type { PostMeta } from "@/lib/blog";

export default function BlogCard({ post }: { post: PostMeta }) {
  const router = useRouter();
  const date = new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });

  return (
    <div
      onClick={() => router.push(`/blog/${post.slug}`)}
      className="panel p-7 block transition-all hover:-translate-y-1 cursor-pointer"
    >
      <div className="flex items-center gap-3 mono text-[11px] mb-4" style={{ color: "var(--color-text-muted)" }}>
        <span>{date}</span>
        <span>·</span>
        <span>{post.readingTime}</span>
      </div>
      <h3 className="text-[17px] mb-2.5 leading-[1.3]">{post.title}</h3>
      <p className="text-[14px] leading-[1.6] mb-4" style={{ color: "var(--color-text-muted)" }}>{post.description}</p>
      <div className="flex flex-wrap gap-0">
        {post.tags.map((t) => (
          <Link
            key={t}
            href={`/blog?tag=${encodeURIComponent(t)}`}
            onClick={(e) => e.stopPropagation()}
            className="chip"
          >
            {t}
          </Link>
        ))}
      </div>
    </div>
  );
}
