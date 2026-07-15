import BlogBarChart from "@/components/blog/BlogBarChart";
import BlogCallout from "@/components/blog/BlogCallout";
import BlogCompareTable from "@/components/blog/BlogCompareTable";

export default function ExcelVsCustomInventoryCharts() {
  return (
    <div className="my-10 flex flex-col gap-2">
      <BlogCallout type="stat">
        Businesses that switch from spreadsheet-based to structured inventory systems typically report a 60–80% reduction in daily reconciliation time within the first 90 days of operation.
      </BlogCallout>
      <BlogBarChart
        title="Daily Time Spent on Inventory Tasks — Before vs. After Custom Software"
        bars={[
          { label: "Excel consolidation (before)", value: 110, unit: " min" },
          { label: "Stockout investigation (before)", value: 45, unit: " min" },
          { label: "GST prep per quarter (before)", value: 180, unit: " min" },
          { label: "System reconciliation (after)", value: 8, unit: " min" },
          { label: "Stockout investigation (after)", value: 5, unit: " min" },
          { label: "GST prep per quarter (after)", value: 25, unit: " min" },
        ]}
        max={200}
        color="#3B82F6"
        note="Illustrative figures based on reported outcomes from distribution businesses in the ₹5–15 crore annual turnover range."
      />
      <BlogBarChart
        title="Annual Benefit Breakdown — Custom Inventory Software (Mid-Sized Distributor)"
        bars={[
          { label: "Reconciliation labour savings", value: 85, unit: "k₹/yr" },
          { label: "Stockout loss reduction", value: 140, unit: "k₹/yr" },
          { label: "Overstock capital release", value: 120, unit: "k₹/yr" },
          { label: "GST compliance time saving", value: 40, unit: "k₹/yr" },
        ]}
        max={160}
        color="#00D4FF"
        note="Annual benefit estimates for a mid-sized distributor (₹8–12 crore turnover, 3 locations, 800 SKUs). Illustrative ranges only."
      />
      <BlogCallout type="tip">
        Before evaluating any software, spend one week logging exactly how many hours your team spends on inventory-related administrative tasks. That number, multiplied by your team cost, is your ROI baseline.
      </BlogCallout>
      <BlogCompareTable
        title="Total Cost of Ownership — Excel vs. Custom Inventory Software (3-Year View)"
        headers={["Cost Category", "Excel (3 years)", "Custom Software (3 years)"]}
        rows={[
          { feature: "Software / licence cost", values: ["₹0", "₹5–12 lakh (one-time)"] },
          { feature: "Daily reconciliation labour", values: ["₹2.4–4.8 lakh", "₹0.2–0.4 lakh"] },
          { feature: "Stockout / error losses", values: ["₹1.5–6 lakh (estimated)", "₹0.2–0.8 lakh"] },
          { feature: "GST compliance labour", values: ["₹0.6–1.2 lakh", "₹0.1–0.2 lakh"] },
          { feature: "Maintenance / updates", values: ["Human time (ongoing)", "₹0.3–0.6 lakh"] },
          { feature: "Total (3-year estimate)", values: ["₹4.5–12 lakh", "₹5.8–14 lakh"] },
        ]}
        highlightCol={2}
        note="Custom software typically breaks even by month 12–18 when error-related losses are included."
      />
    </div>
  );
}
