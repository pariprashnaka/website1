import type { MetadataRoute } from "next";
import { getAllPostsMeta } from "@/lib/blog";
import { caseStudies } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://systemfriendly.com";
  const routes = ["", "/services", "/products", "/case-studies", "/blog", "/about", "/contact", "/privacy", "/terms"];
  const staticEntries = routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
  }));
  const blogEntries = getAllPostsMeta().map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
  }));
  const caseStudyEntries = caseStudies.map((c) => ({
    url: `${base}/case-studies/${c.slug}`,
    lastModified: new Date(),
  }));
  return [...staticEntries, ...blogEntries, ...caseStudyEntries];
}
