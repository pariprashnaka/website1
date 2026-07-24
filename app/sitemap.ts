import type { MetadataRoute } from "next";
import { getAllPostsMeta } from "@/lib/blog";
import { caseStudies } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://systemfriendly.com";

  const staticRoutes: { route: string; changeFrequency: "daily" | "weekly" | "monthly"; priority: number }[] = [
    { route: "",              changeFrequency: "daily",   priority: 1.0 },
    { route: "/services",    changeFrequency: "weekly",  priority: 0.9 },
    { route: "/products",    changeFrequency: "weekly",  priority: 0.9 },
    { route: "/case-studies",changeFrequency: "weekly",  priority: 0.8 },
    { route: "/blog",        changeFrequency: "daily",   priority: 0.8 },
    { route: "/about",       changeFrequency: "monthly", priority: 0.7 },
    { route: "/contact",     changeFrequency: "monthly", priority: 0.7 },
    { route: "/privacy",     changeFrequency: "monthly", priority: 0.3 },
    { route: "/terms",       changeFrequency: "monthly", priority: 0.3 },
  ];

  const staticEntries = staticRoutes.map(({ route, changeFrequency, priority }) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));

  const blogEntries = getAllPostsMeta().map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const caseStudyEntries = caseStudies.map((c) => ({
    url: `${base}/case-studies/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticEntries, ...blogEntries, ...caseStudyEntries];
}
