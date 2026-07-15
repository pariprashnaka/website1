"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, X } from "lucide-react";
import type { PostMeta } from "@/lib/blog";

export default function BlogList({
  posts,
  tags,
  initialTag,
}: {
  posts: PostMeta[];
  tags: string[];
  initialTag?: string;
}) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState(initialTag ?? "");

  const filtered = useMemo(() => {
    let result = posts;
    if (activeTag) result = result.filter((p) => p.tags.includes(activeTag));
    if (query.trim()) {
      const q = query.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
      );
    }
    return result;
  }, [posts, activeTag, query]);

  function setTag(t: string) {
    setActiveTag(t);
    router.replace(t ? `/blog?tag=${encodeURIComponent(t)}` : "/blog", { scroll: false });
  }

  function clearAll() {
    setQuery("");
    setTag("");
  }

  const hasFilter = query.trim() || activeTag;

  return (
    <>
      {/* Search + filter bar */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div
          className="flex items-center gap-3 flex-1 px-4 py-3 rounded-xl border"
          style={{ background: "var(--color-card)", borderColor: "var(--color-border)" }}
        >
          <Search size={16} color="var(--color-text-muted)" className="flex-shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles…"
            className="flex-1 bg-transparent outline-none text-[14px]"
            style={{ color: "var(--color-text-white)" }}
          />
          {query && (
            <button onClick={() => setQuery("")} aria-label="Clear search">
              <X size={14} color="var(--color-text-muted)" />
            </button>
          )}
        </div>

        <div className="flex items-center gap-2 text-[12.5px] mono" style={{ color: "var(--color-text-muted)" }}>
          <span>{filtered.length} article{filtered.length !== 1 ? "s" : ""}</span>
          {hasFilter && (
            <button
              onClick={clearAll}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-colors hover:text-white"
              style={{ borderColor: "var(--color-border)", border: "1px solid" }}
            >
              <X size={11} /> Clear
            </button>
          )}
        </div>
      </div>

      {/* Tag filter pills */}
      {tags.length > 0 && (
        <div className="flex gap-2 flex-wrap mb-8">
          <button
            onClick={() => setTag("")}
            className="chip transition-all"
            style={!activeTag ? { borderColor: "var(--color-accent-cyan)", color: "var(--color-text-white)" } : undefined}
          >
            All
          </button>
          {tags.map((t) => (
            <button
              key={t}
              onClick={() => setTag(t === activeTag ? "" : t)}
              className="chip transition-all"
              style={activeTag === t ? { borderColor: "var(--color-accent-cyan)", color: "var(--color-text-white)" } : undefined}
            >
              {t}
            </button>
          ))}
        </div>
      )}

      {/* Results */}
      {filtered.length === 0 ? (
        <div className="py-16 text-center" style={{ color: "var(--color-text-muted)" }}>
          <p className="text-[15px] mb-2">No articles match your search.</p>
          <button onClick={clearAll} className="text-[13px]" style={{ color: "var(--color-accent-cyan)" }}>
            Clear filters
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-0 border rounded-xl overflow-hidden" style={{ borderColor: "var(--color-border)" }}>
          {filtered.map((post, i) => (
            <BlogListRow key={post.slug} post={post} index={i} total={filtered.length} onTagClick={setTag} />
          ))}
        </div>
      )}
    </>
  );
}

function BlogListRow({
  post,
  index,
  total,
  onTagClick,
}: {
  post: PostMeta;
  index: number;
  total: number;
  onTagClick: (t: string) => void;
}) {
  const router = useRouter();
  const date = new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });

  return (
    <div
      onClick={() => router.push(`/blog/${post.slug}`)}
      className="flex items-start gap-6 px-6 py-5 cursor-pointer transition-colors group"
      style={{
        borderBottom: index < total - 1 ? "1px solid var(--color-border)" : undefined,
        background: "var(--color-bg-primary)",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.background = "var(--color-card)")}
      onMouseLeave={(e) => (e.currentTarget.style.background = "var(--color-bg-primary)")}
    >
      {/* Row number */}
      <div
        className="mono text-[11px] pt-1 flex-shrink-0 w-[28px] text-right hidden md:block"
        style={{ color: "var(--color-text-muted)" }}
      >
        {String(index + 1).padStart(2, "0")}
      </div>

      {/* Main content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-4">
          <h3
            className="text-[15.5px] font-medium leading-[1.35] group-hover:text-white transition-colors"
            style={{ color: "var(--color-text-soft)" }}
          >
            {post.title}
          </h3>
          <div
            className="mono text-[11px] flex-shrink-0 pt-0.5 hidden md:block"
            style={{ color: "var(--color-text-muted)" }}
          >
            {post.readingTime}
          </div>
        </div>

        <p className="text-[13px] leading-[1.5] mt-1.5 line-clamp-2" style={{ color: "var(--color-text-muted)" }}>
          {post.description}
        </p>

        <div className="flex items-center gap-3 mt-3 flex-wrap">
          <span className="mono text-[11px]" style={{ color: "var(--color-text-muted)" }}>{date}</span>
          {post.tags.map((t) => (
            <Link
              key={t}
              href={`/blog?tag=${encodeURIComponent(t)}`}
              onClick={(e) => { e.stopPropagation(); onTagClick(t); }}
              className="mono text-[11px] px-2 py-0.5 rounded border transition-colors hover:border-cyan-400"
              style={{ borderColor: "var(--color-border)", color: "var(--color-text-muted)" }}
            >
              {t}
            </Link>
          ))}
        </div>
      </div>

      {/* Arrow */}
      <div
        className="flex-shrink-0 pt-1 transition-transform group-hover:translate-x-1 hidden md:block"
        style={{ color: "var(--color-text-muted)" }}
      >
        →
      </div>
    </div>
  );
}
