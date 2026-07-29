import BlogBarChart from "@/components/blog/BlogBarChart";
import BlogCallout from "@/components/blog/BlogCallout";
import BlogCompareTable from "@/components/blog/BlogCompareTable";

export default function InventorySMBCharts() {
  return (
    <div className="my-10 flex flex-col gap-2">
      <BlogCallout type="stat">
        43% of small businesses track inventory manually or not at all, according to Wasp Barcode Technologies. For a 10-SKU business, this is manageable. For a business with hundreds of products across multiple locations, it's a slow-motion crisis.
      </BlogCallout>
      <BlogBarChart
        title="How Small Businesses Currently Track Inventory"
        bars={[
          { label: "Manual / spreadsheet tracking", value: 43, unit: "%" },
          { label: "Basic software (no real-time sync)", value: 28, unit: "%" },
          { label: "Integrated real-time system", value: 18, unit: "%" },
          { label: "No formal tracking at all", value: 11, unit: "%" },
        ]}
        max={50}
        color="#7C3AED"
        note="Source: Wasp Barcode Technologies, State of Small Business Report. The 43% manual tracking figure has remained broadly consistent across multiple survey years, suggesting this is a structural characteristic of small business operations, not a transitional phase."
      />
      <BlogCompareTable
        title="Inventory Management Solution Types — At a Glance"
        headers={["Solution Type", "Typical Cost (INR)", "Right For"]}
        rows={[
          { feature: "SaaS / subscription (self-managed)", values: ["₹3,000–₹15,000/month", "Simple businesses, few SKUs, single location"] },
          { feature: "Configured + implemented solution", values: ["₹1–5 lakh one-time + subscription", "Most growing SMBs with real complexity"] },
          { feature: "Custom-built system", values: ["₹5–20 lakh+", "Unusual processes, deep integration needs"] },
        ]}
        note="Most SMBs get more value from a well-implemented standard system than a poorly-implemented custom one. The implementation quality matters more than the software brand."
      />
      <BlogBarChart
        title="Typical Payback Period After Inventory System Implementation"
        bars={[
          { label: "Single location, under 500 SKUs", value: 6, unit: "months" },
          { label: "Multi-location, 500–2000 SKUs", value: 12, unit: "months" },
          { label: "Complex operations, 2000+ SKUs", value: 18, unit: "months" },
        ]}
        max={24}
        color="#22C55E"
        note="Illustrative estimates based on reported SMB implementation outcomes. Actual payback depends on severity of pre-existing inventory problems, implementation quality, and staff adoption. Businesses with frequent stockouts or overstock write-offs typically see faster returns."
      />
      <BlogCallout type="tip">
        The single most common implementation failure is configuring software before mapping the actual process. Every business has quirks in how they receive goods, handle returns, or manage seasonal demand. Software configured without accounting for those specifics will have gaps from day one — and your team will start working around it, which recreates the exact problem you were trying to solve.
      </BlogCallout>
      <BlogBarChart
        title="Where SMBs Report the Most Time Wasted in Inventory Operations"
        bars={[
          { label: "Manual stock counts and reconciliation", value: 34, unit: "%" },
          { label: "Chasing suppliers for delivery confirmation", value: 27, unit: "%" },
          { label: "Investigating discrepancies after the fact", value: 22, unit: "%" },
          { label: "Cross-location stock status calls", value: 17, unit: "%" },
        ]}
        max={40}
        color="#F59E0B"
        note="Source: Illustrative estimates based on reported SMB operational pain points across inventory management research. All four categories are directly addressable by real-time inventory systems with barcode scanning and multi-location sync."
      />
    </div>
  );
}
