import BlogBarChart from "@/components/blog/BlogBarChart";
import BlogCallout from "@/components/blog/BlogCallout";
import BlogCompareTable from "@/components/blog/BlogCompareTable";

export default function ErpManufacturingCharts() {
  return (
    <div className="my-10 flex flex-col gap-2">
      <BlogCallout type="stat">
        A common pattern in manufacturing ERP evaluations: businesses that cannot confidently state their per-unit production cost before implementation frequently discover at least one product line priced at or below actual cost once accurate costing data becomes available.
      </BlogCallout>
      <BlogCompareTable
        title="ERP Product Categories for Indian Manufacturers"
        headers={["Category", "Typical Fit", "Approximate Cost"]}
        rows={[
          { feature: "Lightweight cloud ERP", values: ["Small manufacturers, straightforward BOMs, single site", "Rs 1-5 lakh/year"] },
          { feature: "Mid-market ERP", values: ["Growing manufacturers, moderate complexity", "Rs 5-20 lakh implementation + subscription"] },
          { feature: "Enterprise ERP", values: ["Large multi-site, complex regulatory needs", "Rs 25 lakh+ implementation"] },
          { feature: "Custom-built", values: ["Requirements standard ERP does not fit well", "Rs 8-30 lakh, no ongoing licence"] },
        ]}
        note="Illustrative ranges based on typical Indian market implementations. Actual cost depends heavily on user count, module scope, and implementation partner."
      />
      <BlogBarChart
        title="Where Manufacturing ERP Value Typically Shows Up Over Time"
        bars={[
          { label: "Inventory visibility (month 1-2)", value: 20, unit: "%*" },
          { label: "Production planning structure (month 2-4)", value: 25, unit: "%*" },
          { label: "Procurement-production alignment (month 3-6)", value: 20, unit: "%*" },
          { label: "Reliable per-run costing (month 6-12)", value: 35, unit: "%*" },
        ]}
        max={40}
        color="#7C3AED"
        note="*Illustrative distribution of when different ERP capabilities typically become reliable and valuable, not a guaranteed timeline. Costing value specifically requires a full production cycle of consistent data entry to mature."
      />
      <BlogCallout type="warning">
        ERP implementations fail more often from underestimating organisational change than from software problems. Define your processes and assign clear internal ownership before configuration begins — not during.
      </BlogCallout>
    </div>
  );
}
