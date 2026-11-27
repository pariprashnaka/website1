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
      { label: "SF Inventory System", href: "/products/sf-inventory-system", desc: "Stock, GST billing, suppliers" },
      { label: "SF LIMS", href: "/products/sf-lims", desc: "Pathology labs, sample to report" },
      { label: "Smart Café Platform", href: "/products/smart-cafe-platform", desc: "Direct ordering and operations" },
      { label: "All products", href: "/products" },
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
      { label: "SF Inventory System", href: "/products/sf-inventory-system" },
      { label: "SF LIMS", href: "/products/sf-lims" },
      { label: "Smart Café Platform", href: "/products/smart-cafe-platform" },
      { label: "Use cases", href: "/use-cases" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "SaaS Development", href: "/services/saas" },
      { label: "ERP Solutions", href: "/services/erp" },
      { label: "AI Solutions", href: "/services/ai" },
      { label: "Cloud Engineering", href: "/services/cloud" },
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
