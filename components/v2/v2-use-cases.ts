/**
 * Problem-first use cases. Every claim maps to a feature already listed on the
 * product's own page (lib/content.ts) or to a published case study.
 */
export type Audience = "shop" | "lab" | "cafe" | "employer" | "farm";
export type UseCase = {
  short: string;
  shelf: "stock" | "lab" | "cafe" | "people";
  who: Audience;
  blogSlug?: string;
  blogLabel?: string;
  problem: string;
  change: string;
  productSlug: string;
  caseStudySlug?: string;
};

export const USE_CASES: UseCase[] = [
  {
    short: "Stock blind spots",
    shelf: "stock",
    who: "shop",
    blogSlug: "inventory-management-warehouse-blind-spots",
    blogLabel: "Where warehouse blind spots hide",
    problem: "We don't know what's in stock until someone counts it.",
    change:
      "Every sale deducts stock the moment it happens, across every warehouse and branch, with low-stock alerts before shelves run out.",
    productSlug: "sf-inventory-system",
    caseStudySlug: "plastic-container-manufacturer",
  },
  {
    short: "The GST scramble",
    shelf: "stock",
    who: "shop",
    blogSlug: "gst-2-0-new-rates-item-master-audit",
    blogLabel: "GST 2.0: audit your item master",
    problem: "GST filing is a month-end scramble through registers and spreadsheets.",
    change:
      "Invoices compute CGST, SGST and IGST automatically, and purchases update payables as goods are received, so the numbers are ready when you need them.",
    productSlug: "sf-inventory-system",
  },
  {
    short: "Expiry surprises",
    shelf: "stock",
    who: "shop",
    blogSlug: "batch-expiry-tracking-pharma-fmcg",
    blogLabel: "Batch and expiry tracking explained",
    problem: "Batches expire and nobody notices until it's too late.",
    change:
      "Batch and serial tracking with expiry management and stock ageing shows what to sell, move or write off first.",
    productSlug: "sf-inventory-system",
  },
  {
    short: "Lost samples",
    shelf: "lab",
    who: "lab",
    blogSlug: "dpdp-rules-2025-small-business-compliance-checklist",
    blogLabel: "Protecting patient data under the DPDP rules",
    problem: "Samples get mislabelled and results go missing between desks.",
    change:
      "Every patient gets a unique ID at registration, and every sample moves through a live lab queue with its status visible to everyone.",
    productSlug: "sf-lims",
  },
  {
    short: "Typed-in results",
    shelf: "lab",
    who: "lab",
    problem: "Results are typed in by hand from the analyzer, and mistakes slip through.",
    change:
      "Analyzer results flow in over HL7 straight to the patient report, checked against ICMR reference ranges with critical values flagged.",
    productSlug: "sf-lims",
    caseStudySlug: "pathology-lab-machine-integration",
  },
  {
    short: "Reagents run dry",
    shelf: "lab",
    who: "lab",
    problem: "Reagents run out mid-shift and billing misses tests.",
    change:
      "Reagent stock is deducted as samples are collected, with first-expiry-first-out, and every test order flows into GST-compliant billing.",
    productSlug: "sf-lims",
  },
  {
    short: "Commission bleed",
    shelf: "cafe",
    who: "cafe",
    blogSlug: "zomato-swiggy-commission-cafe-direct-ordering",
    blogLabel: "What a café really pays the apps",
    problem: "We pay a commission to food apps on every order.",
    change:
      "Customers order directly from your café for dine-in, takeaway or delivery, and you keep the customer relationship and the margin.",
    productSlug: "smart-cafe-platform",
  },
  {
    short: "Flying blind",
    shelf: "cafe",
    who: "cafe",
    problem: "As an owner, I can't see what's happening across my outlets.",
    change:
      "One dashboard shows live orders, sales and operations across every location, so problems surface the same day.",
    productSlug: "smart-cafe-platform",
    caseStudySlug: "seven-cafe-chain",
  },
  {
    short: "Payroll patchwork",
    shelf: "people",
    who: "employer",
    blogSlug: "new-labour-codes-payroll-hr-checklist-india",
    blogLabel: "The new labour codes, explained",
    problem: "Attendance, leave and payroll live in three different tools.",
    change:
      "Biometric attendance, leave and payroll stay in sync, with statutory deductions handled for you and employees getting self-service access.",
    productSlug: "smart-hrms-platform",
  },
  {
    short: "Scattered field data",
    shelf: "people",
    who: "farm",
    problem: "Field data comes from sensors, satellites and notebooks that never meet.",
    change:
      "Soil, weather, satellite and field data land in one validated place, with alerts and recommendations built on top.",
    productSlug: "smart-agriculture-platform",
  },
];
