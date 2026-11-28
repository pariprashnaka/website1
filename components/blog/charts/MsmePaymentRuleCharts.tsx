import BlogBarChart from "@/components/blog/BlogBarChart";
import BlogCallout from "@/components/blog/BlogCallout";
import BlogCompareTable from "@/components/blog/BlogCompareTable";
import BlogKeyNumbers from "@/components/blog/BlogKeyNumbers";

export default function MsmePaymentRuleCharts() {
  return (
    <div className="my-10 flex flex-col gap-2">
      <BlogKeyNumbers
        items={[
          { number: "15 days", label: "Payment limit with no written agreement" },
          { number: "45 days", label: "Longest allowed with a written agreement" },
          { number: "3×", label: "Compound interest at three times the RBI bank rate on late payment" },
          { number: "1 Apr 2024", label: "Date the tax rule took effect" },
        ]}
      />
      <BlogBarChart
        title="Maximum Days to Pay a Micro or Small Supplier"
        bars={[
          { label: "No written agreement", value: 15, unit: " days" },
          { label: "Written agreement (maximum)", value: 45, unit: " days" },
        ]}
        max={45}
        color="#3fe0c5"
        note="Source: Section 15, MSMED Act, 2006, as summarised by Tally Solutions."
      />
      <BlogCompareTable
        title="MSME Classification (from 1 April 2025)"
        headers={["Category", "Investment up to", "Turnover up to"]}
        rows={[
          { feature: "Micro", values: ["₹2.5 crore", "₹10 crore"] },
          { feature: "Small", values: ["₹25 crore", "₹100 crore"] },
          { feature: "Medium (not covered by the 45-day rule)", values: ["₹125 crore", "₹500 crore"] },
        ]}
        note="Both limits must be met and export turnover is excluded. Confirm a supplier's status from its Udyam certificate."
      />
      <BlogCompareTable
        title="What Happens If You Pay Late"
        headers={["Situation", "Tax effect"]}
        rows={[
          { feature: "Paid within the deadline", values: ["Deductible in the year of the expense"] },
          { feature: "Unpaid on 31 March, past the deadline", values: ["Disallowed that year and added to taxable income"] },
          { feature: "Paid later", values: ["Deductible in the year you actually pay"] },
        ]}
      />
      <BlogCallout type="warning">
        A standard 60-day credit period no longer works for covered suppliers. Track due dates invoice by invoice, and review all payables before 31 March.
      </BlogCallout>
    </div>
  );
}
