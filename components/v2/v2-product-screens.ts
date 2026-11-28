// Screenshot slots per product. Drop images at public/screenshots/<slug>/<n>.png (or .webp/.jpg),
// n = 1..4. A slot with no file shows a neutral placeholder frame.
export type Screen = { n: number; title: string; caption: string };

export const PRODUCT_SCREENS: Record<string, Screen[]> = {
  "sf-inventory-system": [
    { n: 1, title: "Dashboard", caption: "Today's sales, stock health and profit in one live view." },
    { n: 2, title: "GST invoice", caption: "CGST, SGST and IGST calculated automatically on every bill." },
    { n: 3, title: "Stock by warehouse", caption: "Real-time quantities, low-stock alerts and stock ageing." },
    { n: 4, title: "Purchase orders", caption: "Supplier orders, receipts and payables in one flow." },
  ],
  "sf-lims": [
    { n: 1, title: "Lab queue", caption: "Every sample and its live status, from collection to report." },
    { n: 2, title: "Result entry", caption: "Reference ranges and auto-flagging, with analyzer results flowing in." },
    { n: 3, title: "Patient report", caption: "Clean reports delivered to the patient on WhatsApp." },
    { n: 4, title: "Billing", caption: "GST-compliant test orders, payments and receipts." },
  ],
  "smart-cafe-platform": [
    { n: 1, title: "Order dashboard", caption: "Dine-in, takeaway and delivery orders tracked in real time." },
    { n: 2, title: "Menu & pricing", caption: "Edit items and prices once; every outlet stays in sync." },
    { n: 3, title: "Customer ordering", caption: "Guests order directly from the café, with no middleman." },
    { n: 4, title: "Sales analytics", caption: "What sells, when, and to whom." },
  ],
  "smart-hrms-platform": [
    { n: 1, title: "Workforce overview", caption: "Headcount, attendance and leave at a glance." },
    { n: 2, title: "Payroll run", caption: "Salaries and statutory deductions, computed automatically." },
    { n: 3, title: "Attendance", caption: "Biometric attendance feeding straight into payroll." },
    { n: 4, title: "Employee portal", caption: "Payslips, leave and requests, self-service." },
  ],
  "smart-agriculture-platform": [
    { n: 1, title: "Farm overview", caption: "Every plot and its current condition on one screen." },
    { n: 2, title: "Soil health", caption: "Soil monitoring with alerts when something drifts." },
    { n: 3, title: "Recommendations", caption: "Crop and irrigation guidance from combined data sources." },
    { n: 4, title: "Carbon reporting", caption: "Carbon accounting and MRV reports." },
  ],
  "drone-tea-estate": [
    { n: 1, title: "Crop health map", caption: "Aerial imagery showing where the crop needs attention." },
    { n: 2, title: "Spray plan", caption: "AI-assisted plans, flown with GPS-guided precision." },
    { n: 3, title: "Mission log", caption: "Digital records of every flight for compliance." },
    { n: 4, title: "Estate analytics", caption: "Results across blocks and seasons." },
  ],
};
