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
      { label: "SF Inventory System", href: "/products/sf-inventory-system", desc: "Stock, GST billing, suppliers" },
      { label: "SF LIMS", href: "/products/sf-lims", desc: "Pathology labs, sample to report" },
      { label: "SFHMS", href: "/products/sfhms", desc: "Hospitals and clinics, booking to billing" },
      { label: "Smart Café Platform", href: "/products/smart-cafe-platform", desc: "Direct ordering and operations" },
      { label: "Smart HRMS Platform", href: "/products/smart-hrms-platform", desc: "Attendance, leave, payroll" },
      { label: "Smart Agriculture Platform", href: "/products/smart-agriculture-platform", desc: "Soil, weather, satellite data" },
      { label: "Drone-as-a-Service", href: "/products/drone-tea-estate", desc: "Aerial services for tea estates" },
    ],
  },
  { label: "Use Cases", href: "/use-cases" },
  { label: "Services", href: "/services" },
  {
    label: "Resources",
    href: "/case-studies",
    children: [
      { label: "Case Studies", href: "/case-studies", desc: "Real operations, real results" },
      { label: "Blog", href: "/blog", desc: "Articles and data on running operations" },
    ],
  },
  {
    label: "Company",
    href: "/about",
    children: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
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
      { label: "SFHMS", href: "/products/sfhms" },
      { label: "Smart Café Platform", href: "/products/smart-cafe-platform" },
      { label: "Smart HRMS Platform", href: "/products/smart-hrms-platform" },
      { label: "Smart Agriculture Platform", href: "/products/smart-agriculture-platform" },
      { label: "Drone-as-a-Service", href: "/products/drone-tea-estate" },
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
