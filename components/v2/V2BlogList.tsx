"use client";
import { useMemo, useState } from "react";
import { Link } from "@/i18n/navigation";
import { v2Href } from "./v2-nav-data";

export type V2BlogItem = {
  slug: string;
  title: string;
  description: string;
  dateLabel: string;
  readingTime: string;
  tags: string[];
};

const ALL = "All";

export default function V2BlogList({ posts, tags }: { posts: V2BlogItem[]; tags: string[] }) {
  const [tag, setTag] = useState(ALL);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter(
      (p) =>
        (tag === ALL || p.tags.includes(tag)) &&
        (!q || p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q))
    );
  }, [posts, tag, query]);

  const featured = tag === ALL && !query.trim() ? filtered[0] : undefined;
  const rest = featured ? filtered.slice(1) : filtered;

  return (
    <div className="v2-blog">
      <div className="v2-blog-tools">
        <div className="v2-blog-tags" role="group" aria-label="Filter by topic">
          {[ALL, ...tags].map((t) => (
            <button key={t} className={t === tag ? "on" : ""} aria-pressed={t === tag} onClick={() => setTag(t)}>
              {t}
            </button>
          ))}
        </div>
        <label className="v2-blog-search">
          <span className="v2-sr">Search articles</span>
          <input
            type="search"
            placeholder="Search articles"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
      </div>

      {featured && (
        <Link href={v2Href(`/blog/${featured.slug}`)} className="v2-blog-featured">
          <span className="v2-blog-meta">Latest · {featured.dateLabel} · {featured.readingTime}</span>
          <h2>{featured.title}</h2>
          <p>{featured.description}</p>
          <span className="v2-blog-read">Read article →</span>
        </Link>
      )}

      {rest.length > 0 ? (
        <div className="v2-blog-grid">
          {rest.map((p) => (
            <Link key={p.slug} href={v2Href(`/blog/${p.slug}`)} className="v2-blog-card">
              <span className="v2-blog-meta">{p.tags[0] ?? "Article"} · {p.readingTime}</span>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <span className="v2-blog-date">{p.dateLabel}</span>
            </Link>
          ))}
        </div>
      ) : (
        !featured && <p className="v2-blog-empty">No articles match that. Try another topic or clear the search.</p>
      )}
    </div>
  );
}
