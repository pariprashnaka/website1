"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, X, ChevronLeft, ChevronRight } from "lucide-react";
import type { PostMeta } from "@/lib/blog";

const PAGE_SIZE = 12;

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
  const [page, setPage] = useState(1);

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

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  function setTag(t: string) {
    setActiveTag(t);
    setPage(1);
    router.replace(t ? `/blog?tag=${encodeURIComponent(t)}` : "/blog", { scroll: false });
  }

  function handleQueryChange(value: string) {
    setQuery(value);
    setPage(1);
  }

  function clearAll() {
    setQuery("");
    setTag("");
  }

  function goToPage(p: number) {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const hasFilter = query.trim() || activeTag;

  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div
          className="flex items-center gap-3 flex-1 px-4 py-3 rounded-xl border"
          style={{ background: "var(--color-card)", borderColor: "var(--color-border)" }}
        >
          <Search size={16} color="var(--color-text-muted)" className="flex-shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => handleQueryChange(e.target.value)}
            placeholder="Search articles…"
            className="flex-1 bg-transparent outline-none text-[14px]"
            style={{ color: "var(--color-text-white)" }}
          />
          {query && (
            <button onClick={() => handleQueryChange("")} aria-label="Clear search">
              <X size={14} color="var(--color-text-muted)" />
            </button>
          )}
        </div>

        <div className="flex items-center gap-2 text-[12.5px] mono" style={{ color: "var(--color-text-muted)" }}>
          <span>{filtered.length} article{filtered.length !== 1 ? "s" : ""}</span>
          {hasFilter && (
            <button
              onClick={clearAll}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-colors hover:text-[var(--color-text-white)]"
              style={{ borderColor: "var(--color-border)", border: "1px solid" }}
            >
              <X size={11} /> Clear
            </button>
          )}
        </div>
      </div>

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

      {filtered.length === 0 ? (
        <div className="py-16 text-center" style={{ color: "var(--color-text-muted)" }}>
          <p className="text-[15px] mb-2">No articles match your search.</p>
          <button onClick={clearAll} className="text-[13px]" style={{ color: "var(--color-accent-cyan)" }}>
            Clear filters
          </button>
        </div>
      ) : (
        <>
          <div className="flex flex-col gap-0 border rounded-xl overflow-hidden" style={{ borderColor: "var(--color-border)", boxShadow: "0 16px 38px -20px rgba(15,23,42,0.18)" }}>
            {paginated.map((post, i) => (
              <BlogListRow key={post.slug} post={post} index={(page - 1) * PAGE_SIZE + i} total={paginated.length} onTagClick={setTag} />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-8">
              <button
                onClick={() => goToPage(page - 1)}
                disabled={page === 1}
                aria-label="Previous page"
                className="w-[36px] h-[36px] rounded-lg flex items-center justify-center border transition-colors disabled:opacity-30 disabled:cursor-not-allowed hover:border-cyan-400"
                style={{ borderColor: "var(--color-border)" }}
              >
                <ChevronLeft size={16} color="var(--color-text-soft)" />
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1)
                .filter((p) => p === 1 || p === totalPages || Math.abs(p - page) <= 1)
                .reduce<(number | "ellipsis")[]>((acc, p, i, arr) => {
                  if (i > 0 && p - (arr[i - 1] as number) > 1) acc.push("ellipsis");
                  acc.push(p);
                  return acc;
                }, [])
                .map((p, i) =>
                  p === "ellipsis" ? (
                    <span key={`e-${i}`} className="mono text-[12px] px-1" style={{ color: "var(--color-text-muted)" }}>…</span>
                  ) : (
                    <button
                      key={p}
                      onClick={() => goToPage(p)}
                      className="w-[36px] h-[36px] rounded-lg flex items-center justify-center mono text-[12.5px] border transition-colors"
                      style={
                        p === page
                          ? { borderColor: "var(--color-accent-cyan)", color: "var(--color-text-white)", background: "rgba(0,212,255,0.08)" }
                          : { borderColor: "var(--color-border)", color: "var(--color-text-muted)" }
                      }
                    >
                      {p}
                    </button>
                  )
                )}

              <button
                onClick={() => goToPage(page + 1)}
                disabled={page === totalPages}
                aria-label="Next page"
                className="w-[36px] h-[36px] rounded-lg flex items-center justify-center border transition-colors disabled:opacity-30 disabled:cursor-not-allowed hover:border-cyan-400"
                style={{ borderColor: "var(--color-border)" }}
              >
                <ChevronRight size={16} color="var(--color-text-soft)" />
              </button>
            </div>
          )}
        </>
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
      <div
        className="mono text-[11px] pt-1 flex-shrink-0 w-[28px] text-right hidden md:block"
        style={{ color: "var(--color-text-muted)" }}
      >
        {String(index + 1).padStart(2, "0")}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-4">
          <h3
            className="text-[15.5px] font-medium leading-[1.35] group-hover:text-[var(--color-text-white)] transition-colors"
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
          <span className="mono text-[11px]" style={{ color: "var(--color-text-muted)" }}>Updated {date}</span>
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

      <div
        className="flex-shrink-0 pt-1 transition-transform group-hover:translate-x-1 hidden md:block"
        style={{ color: "var(--color-text-muted)" }}
      >
        →
      </div>
    </div>
  );
}
