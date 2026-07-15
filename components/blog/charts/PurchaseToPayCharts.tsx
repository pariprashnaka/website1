import BlogBarChart from "@/components/blog/BlogBarChart";
import BlogCallout from "@/components/blog/BlogCallout";
import BlogCompareTable from "@/components/blog/BlogCompareTable";

export default function PurchaseToPayCharts() {
  return (
    <div className="my-10 flex flex-col gap-2">
      <BlogCallout type="info">
        Purchase-to-pay automation for most Indian SMBs is not one comprehensive project. The right starting point depends entirely on where your specific pain actually is.
      </BlogCallout>
      <BlogCompareTable
        title="Where to Start — Priority Framework"
        headers={["Your Situation", "Recommended First Step"]}
        rows={[
          { feature: "Frequent invoice-to-order mismatches", values: ["Three-way matching"] },
          { feature: "High invoice volume, manual entry", values: ["Invoice data extraction"] },
          { feature: "No visibility into purchasing decisions", values: ["Structured requisition-to-PO"] },
          { feature: "Multiple approvers, unclear audit trail", values: ["Payment approval workflow"] },
          { feature: "Payments frequently late or early", values: ["Automated payment scheduling"] },
        ]}
        note="Automate the step causing the most measurable pain first, not the step that appears first in the purchase-to-pay chain."
      />
      <BlogBarChart
        title="Typical Time Cost of Manual Purchase-to-Pay Steps (Weekly Hours, Illustrative)"
        bars={[
          { label: "Manual invoice data entry", value: 8, unit: " hrs/wk" },
          { label: "Manual three-way matching", value: 5, unit: " hrs/wk" },
          { label: "Informal purchase coordination", value: 4, unit: " hrs/wk" },
          { label: "Payment approval chasing", value: 3, unit: " hrs/wk" },
        ]}
        max={10}
        color="#3B82F6"
        note="Illustrative estimates for a mid-sized distribution business processing moderate weekly purchase volume. Actual time cost scales with supplier count and transaction volume."
      />
      <BlogCallout type="tip">
        Review your last three months of supplier invoices against purchase orders and delivery records before deciding where to automate. If you find discrepancies you hadn&apos;t previously noticed, three-way matching is very likely your highest-value starting point.
      </BlogCallout>
    </div>
  );
}
