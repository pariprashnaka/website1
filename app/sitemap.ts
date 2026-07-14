import type { MetadataRoute } from "next";
import { getAllPostsMeta } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://nexorasystems.com";
  const routes = ["", "/services", "/products", "/case-studies", "/blog", "/about", "/contact"];
  const staticEntries = routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
  }));
  const blogEntries = getAllPostsMeta().map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
  }));
  return [...staticEntries, ...blogEntries];
}
