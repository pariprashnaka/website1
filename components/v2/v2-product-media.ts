/** Video backgrounds available per product slug (files live in /public/videos). */
const VIDEOS: Record<string, string> = {
  "sf-inventory-system": "/videos/inventory-web.mp4",
  "sf-lims": "/videos/lims-web.mp4",
  "smart-cafe-platform": "/videos/cafe-web.mp4",
  "smart-hrms-platform": "/videos/hrms-product-web.mp4",
  "smart-agriculture-platform": "/videos/agri-web.mp4",
  "drone-tea-estate": "/videos/drone-web.mp4",
};

export const productVideo = (slug: string): string | null => VIDEOS[slug] ?? null;
