/**
 * Problem-first use cases. Every claim maps to a feature already listed on the
 * product's own page (lib/content.ts) or to a published case study.
 */
export type UseCase = {
  problem: string;
  change: string;
  productSlug: string;
  caseStudySlug?: string;
};

export const USE_CASES: UseCase[] = [
  {
    problem: "We don't know what's in stock until someone counts it.",
    change:
      "Every sale deducts stock the moment it happens, across every warehouse and branch, with low-stock alerts before shelves run out.",
    productSlug: "sf-inventory-system",
    caseStudySlug: "plastic-container-manufacturer",
  },
  {
    problem: "GST filing is a month-end scramble through registers and spreadsheets.",
    change:
      "Invoices compute CGST, SGST and IGST automatically, and purchases update payables as goods are received, so the numbers are ready when you need them.",
    productSlug: "sf-inventory-system",
  },
  {
    problem: "Batches expire and nobody notices until it's too late.",
    change:
      "Batch and serial tracking with expiry management and stock ageing shows what to sell, move or write off first.",
    productSlug: "sf-inventory-system",
  },
  {
    problem: "Samples get mislabelled and results go missing between desks.",
    change:
      "Every patient gets a unique ID at registration, and every sample moves through a live lab queue with its status visible to everyone.",
    productSlug: "sf-lims",
  },
  {
    problem: "Results are typed in by hand from the analyzer, and mistakes slip through.",
    change:
      "Analyzer results flow in over HL7 straight to the patient report, checked against ICMR reference ranges with critical values flagged.",
    productSlug: "sf-lims",
    caseStudySlug: "pathology-lab-machine-integration",
  },
  {
    problem: "Reagents run out mid-shift and billing misses tests.",
    change:
      "Reagent stock is deducted as samples are collected, with first-expiry-first-out, and every test order flows into GST-compliant billing.",
    productSlug: "sf-lims",
  },
  {
    problem: "We pay a commission to food apps on every order.",
    change:
      "Customers order directly from your café for dine-in, takeaway or delivery, and you keep the customer relationship and the margin.",
    productSlug: "smart-cafe-platform",
  },
  {
    problem: "As an owner, I can't see what's happening across my outlets.",
    change:
      "One dashboard shows live orders, sales and operations across every location, so problems surface the same day.",
    productSlug: "smart-cafe-platform",
    caseStudySlug: "seven-cafe-chain",
  },
  {
    problem: "Attendance, leave and payroll live in three different tools.",
    change:
      "Biometric attendance, leave and payroll stay in sync, with statutory deductions handled for you and employees getting self-service access.",
    productSlug: "smart-hrms-platform",
  },
  {
    problem: "Field data comes from sensors, satellites and notebooks that never meet.",
    change:
      "Soil, weather, satellite and field data land in one validated place, with alerts and recommendations built on top.",
    productSlug: "smart-agriculture-platform",
  },
];
