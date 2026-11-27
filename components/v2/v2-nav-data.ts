/**
 * Single source of truth for the v2 site structure (nav + footer).
 * V2_BASE is "/v2" while the redesign lives beside the old site.
 * When v2 replaces the old site at the root, set it to "".
 */
export const V2_BASE = "/v2";

export const v2Href = (path: string) => `${V2_BASE}${path}` || "/";

export type NavLeaf = { label: string; href: string; desc?: string };
export type NavItem = { label: string; href: string; children?: NavLeaf[] };

export const NAV: NavItem[] = [
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "Platform overview", href: "/products", desc: "One architecture under every product" },
      { label: "InventoryCloud", href: "/products/inventorycloud", desc: "Stock, billing and ERP sync" },
      { label: "LabFlow LIMS", href: "/products/labflow-lims", desc: "Sample to certificate, audit-ready" },
      { label: "SF Pulse HMS", href: "/products/sf-pulse", desc: "Hospital operations in one picture" },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    children: [
      { label: "Manufacturing", href: "/industries/manufacturing" },
      { label: "Pharma & Labs", href: "/industries/pharma-labs" },
      { label: "Healthcare", href: "/industries/healthcare" },
      { label: "Retail & F&B", href: "/industries/retail-fnb" },
      { label: "All industries", href: "/industries" },
    ],
  },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  {
    label: "Company",
    href: "/about",
    children: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export const NAV_CTA = { label: "Talk to us", href: "/contact" };

export const FOOTER_COLUMNS: { title: string; links: NavLeaf[] }[] = [
  {
    title: "Products",
    links: [
      { label: "Platform", href: "/products" },
      { label: "InventoryCloud", href: "/products/inventorycloud" },
      { label: "LabFlow LIMS", href: "/products/labflow-lims" },
      { label: "SF Pulse HMS", href: "/products/sf-pulse" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "SaaS Development", href: "/services/saas-development" },
      { label: "ERP Solutions", href: "/services/erp-solutions" },
      { label: "AI Solutions", href: "/services/ai-solutions" },
      { label: "Cloud Engineering", href: "/services/cloud-engineering" },
      { label: "All services", href: "/services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Blog", href: "/blog" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Contact", href: "/contact" },
    ],
  },
];
