import BlogBarChart from "@/components/blog/BlogBarChart";
import BlogCallout from "@/components/blog/BlogCallout";
import BlogCompareTable from "@/components/blog/BlogCompareTable";

export default function GstInventoryCharts() {
  return (
    <div className="my-10 flex flex-col gap-2">
      <BlogCallout type="warning">
        A GSTIN field on an invoice template is not GST compliance. Genuine compliance means HSN-driven automatic tax calculation, correct place-of-supply logic, and filing-ready data — test any product against these specifically before buying.
      </BlogCallout>
      <BlogCompareTable
        title="Genuine Compliance vs Cosmetic Compliance"
        headers={["Feature", "Cosmetic Version", "Genuine Version"]}
        rows={[
          { feature: "Tax rate", values: ["Manually selected per invoice", "Auto-determined from locked HSN mapping"] },
          { feature: "Interstate tax split", values: ["Manually chosen CGST/SGST or IGST", "Auto-calculated from place of supply rules"] },
          { feature: "E-invoicing", values: ["Separate manual step outside the system", "Direct IRP integration"] },
          { feature: "Filing data", values: ["Generic PDF export", "GSTR-1/3B structured export"] },
          { feature: "Input tax credit", values: ["Not tracked", "Matched against GSTR-2B"] },
          { feature: "Credit/debit notes", values: ["Treated as plain inventory adjustment", "Linked GST documents"] },
        ]}
        note="Use this table as a direct checklist when evaluating any product marketed as GST-compliant."
      />
      <BlogBarChart
        title="Where GST Reconciliation Errors Typically Originate (Illustrative)"
        bars={[
          { label: "Manual HSN/rate selection errors", value: 34, unit: "%" },
          { label: "Interstate tax split misapplied", value: 22, unit: "%" },
          { label: "Missing e-invoice reference numbers", value: 19, unit: "%" },
          { label: "Credit note GST mismatch", value: 15, unit: "%" },
          { label: "Input tax credit reconciliation gaps", value: 10, unit: "%" },
        ]}
        max={38}
        color="#F59E0B"
        note="Illustrative distribution based on commonly reported reconciliation issues at Indian SMBs. Not sourced from a specific published study — use as a framework for auditing your own filing process."
      />
      <BlogCallout type="tip">
        Before buying or upgrading any inventory software, trace one real transaction end to end — from sale entry to what would appear in your GSTR-1 filing. Any point requiring manual correction is a genuine compliance gap, not a minor inconvenience.
      </BlogCallout>
    </div>
  );
}
