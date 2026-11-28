import BlogBarChart from "@/components/blog/BlogBarChart";
import BlogCallout from "@/components/blog/BlogCallout";
import BlogCompareTable from "@/components/blog/BlogCompareTable";
import BlogKeyNumbers from "@/components/blog/BlogKeyNumbers";

export default function GstRatesCharts() {
  return (
    <div className="my-10 flex flex-col gap-2">
      <BlogKeyNumbers
        items={[
          { number: "22 Sep 2025", label: "Date the new GST rates took effect" },
          { number: "12% + 28%", label: "Slabs removed" },
          { number: "5% / 18%", label: "Standard rates now" },
          { number: "40%", label: "New rate for a short list of sin and luxury goods" },
        ]}
      />
      <BlogBarChart
        title="Rate Cut on Example Goods (percentage points)"
        bars={[
          { label: "Butter and ghee (18% to 5%)", value: 13, unit: " pts" },
          { label: "Air conditioners and TVs (28% to 18%)", value: 10, unit: " pts" },
          { label: "Cheese and utensils (12% to 5%)", value: 7, unit: " pts" },
          { label: "Paneer and UHT milk (5% to 0%)", value: 5, unit: " pts" },
        ]}
        max={14}
        color="#3fe0c5"
        note="Examples from Tally Solutions' summary of the 22 September 2025 changes. Aerated and sugary drinks moved the other way, from 28% to 40%."
      />
      <BlogCompareTable
        title="Item Master Audit: Where Wrong Rates Hide"
        headers={["Where", "What goes wrong", "Check"]}
        rows={[
          { feature: "Item master", values: ["Rate edited by hand, not updated", "Same HSN code should show the same rate"] },
          { feature: "Price lists and combos", values: ["Items at different rates billed as one", "Split the invoice by rate"] },
          { feature: "Purchase invoices", values: ["Input credit differs from expectation", "Reconcile with GSTR-2B"] },
          { feature: "Tax-inclusive prices", values: ["Rate cut silently changes your margin", "Reprice deliberately"] },
        ]}
      />
      <BlogCallout type="warning">
        Start with your 50 highest-selling items. A wrong rate on a fast mover repeats on every invoice.
      </BlogCallout>
    </div>
  );
}
