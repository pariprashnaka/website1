import BlogBarChart from "@/components/blog/BlogBarChart";
import BlogCallout from "@/components/blog/BlogCallout";
import BlogCompareTable from "@/components/blog/BlogCompareTable";

export default function InventoryBlindSpotsCharts() {
  return (
    <div className="my-10 flex flex-col gap-2">
      <BlogCallout type="stat">
        Inventory distortion — phantom stock and overstock combined — costs the global retail industry over $1.77 trillion every year, according to the National Retail Federation. Most of it is preventable with real-time tracking.
      </BlogCallout>
      <BlogBarChart
        title="Inventory Accuracy: Manual Tracking vs Automated Systems"
        bars={[
          { label: "Manual / spreadsheet tracking (average)", value: 63, unit: "%" },
          { label: "Average performer with software", value: 74, unit: "%" },
          { label: "Best-in-class with automated system", value: 97, unit: "%" },
        ]}
        max={100}
        color="#3B82F6"
        note="Source: Auburn University RFID Lab (accuracy improvement data); Aberdeen Group (best-in-class vs average performer benchmarks). The 34-point gap between manual and best-in-class is not theoretical — it shows up directly in stockout rates and carrying costs."
      />
      <BlogBarChart
        title="Annual Cost of Inventory Problems — US Retail (USD Billions)"
        bars={[
          { label: "Overstock (dead stock, carrying cost)", value: 471, unit: "B" },
          { label: "Stockouts (lost sales, emergency orders)", value: 634, unit: "B" },
          { label: "Shrinkage (theft, damage, admin error)", value: 112, unit: "B" },
        ]}
        max={700}
        color="#EF4444"
        note="Source: IHL Group retail inventory distortion research. Figures represent US retail only. Global figures are approximately 3x these numbers."
      />
      <BlogCompareTable
        title="Blind Spot Type — Impact and Fix"
        headers={["Blind Spot", "What It Looks Like", "What It Costs"]}
        rows={[
          { feature: "Phantom inventory", values: ["System says 50 units, shelf has 12", "Failed orders, customer trust loss"] },
          { feature: "Dead stock", values: ["Products sitting unsold for 90+ days", "Tied-up capital, storage cost, write-offs"] },
          { feature: "Receiving errors", values: ["Wrong quantities logged on arrival", "Compounding discrepancies over time"] },
          { feature: "Location blindness", values: ["Product exists but can't be found", "Staff time wasted, pick errors, delays"] },
        ]}
        note="All four types are addressable with real-time inventory tracking. The first step is knowing which one is hurting your business most."
      />
      <BlogCallout type="tip">
        The businesses that see the fastest ROI from inventory systems are not the largest ones — they're the ones where a single stockout or overstock event has the highest operational impact. If one bad inventory decision costs you a significant customer or forces an emergency order, the maths usually favour a system within the first year.
      </BlogCallout>
      <BlogBarChart
        title="Customer Behaviour After a Stockout Event"
        bars={[
          { label: "Do not return to the business", value: 65, unit: "%" },
          { label: "Buy from a competitor instead", value: 48, unit: "%" },
          { label: "Leave a negative review", value: 21, unit: "%" },
        ]}
        max={80}
        color="#F59E0B"
        note="Source: Salesforce consumer research, 2022. Stockout impact extends well beyond the immediate lost sale — the customer relationship cost is typically larger and less visible on the balance sheet."
      />
    </div>
  );
}
