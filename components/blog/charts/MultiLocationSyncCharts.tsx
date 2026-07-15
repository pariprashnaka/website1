import BlogBarChart from "@/components/blog/BlogBarChart";
import BlogCallout from "@/components/blog/BlogCallout";
import BlogCompareTable from "@/components/blog/BlogCompareTable";

export default function MultiLocationSyncCharts() {
  return (
    <div className="my-10 flex flex-col gap-2">
      <BlogCallout type="warning">
        A system that syncs stock between locations overnight is not real-time multi-location inventory. For any business with meaningful daily transaction volume, every location operates on stale data for the entire business day.
      </BlogCallout>
      <BlogCompareTable
        title="Multi-Location Capability — Basic Tool vs Genuine System"
        headers={["Capability", "Basic Inventory Tool", "Genuine Multi-Location System"]}
        rows={[
          { feature: "Stock visibility", values: ["Manual check or delayed sync", "Real-time, single shared ledger"] },
          { feature: "Transfers", values: ["Manual entry at both ends", "Structured dispatch-to-receipt tracking"] },
          { feature: "Reorder points", values: ["Single rule for all locations", "Per-location configurable"] },
          { feature: "Conflict handling", values: ["None — risk of overselling", "Locking mechanism prevents double-allocation"] },
        ]}
        note="Use this as a direct checklist against any multi-location inventory product you evaluate."
      />
      <BlogBarChart
        title="Sync Frequency vs Stockout/Overselling Risk (Illustrative)"
        bars={[
          { label: "Real-time sync", value: 5, unit: "% risk" },
          { label: "15-minute sync interval", value: 15, unit: "% risk" },
          { label: "Hourly sync", value: 30, unit: "% risk" },
          { label: "Daily/overnight sync", value: 60, unit: "% risk" },
        ]}
        max={65}
        color="#EF4444"
        note="Illustrative relative risk levels, not measured percentages. Actual risk depends heavily on transaction volume and how close to stockout your inventory typically runs."
      />
      <BlogCallout type="tip">
        Before evaluating new software, audit your current sync frequency honestly and map how often stock actually transfers between your locations. That gives you the real requirement to evaluate any product against, rather than buying based on feature lists alone.
      </BlogCallout>
    </div>
  );
}
