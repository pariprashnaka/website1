import BlogBarChart from "@/components/blog/BlogBarChart";
import BlogCallout from "@/components/blog/BlogCallout";
import BlogCompareTable from "@/components/blog/BlogCompareTable";

export default function ErpVsCrmCharts() {
  return (
    <div className="my-10 flex flex-col gap-2">
      <BlogCallout type="stat">
        Over 60% of ERP implementations that fail do so not because of technology problems but because the wrong system was chosen for the actual business problem.
      </BlogCallout>
      <BlogBarChart
        title="Typical Implementation Timeline — ERP vs CRM vs Custom (Weeks)"
        bars={[
          { label: "CRM — standard product", value: 6, unit: " weeks" },
          { label: "Custom software — focused scope", value: 20, unit: " weeks" },
          { label: "ERP — mid-market product", value: 32, unit: " weeks" },
          { label: "ERP — enterprise product", value: 52, unit: " weeks" },
        ]}
        max={60}
        color="#7C3AED"
        note="Illustrative timelines for Indian SMB implementations. Actual timelines vary with scope, data migration complexity, and team availability."
      />
      <BlogBarChart
        title="Typical Annual Cost Range for Indian SMBs (Rs Lakh)"
        bars={[
          { label: "CRM — entry tier", value: 2, unit: "L/yr" },
          { label: "CRM — mid tier", value: 6, unit: "L/yr" },
          { label: "ERP — SMB product", value: 5, unit: "L/yr" },
          { label: "ERP — mid-market", value: 18, unit: "L/yr" },
          { label: "Custom — one-time build", value: 15, unit: "L one-time" },
        ]}
        max={25}
        color="#00D4FF"
        note="Approximate ranges. Custom software cost is one-time; ERP and CRM costs shown are annual subscriptions."
      />
      <BlogCallout type="tip">
        Before evaluating any ERP or CRM, write down the specific operational problem in one sentence. If it is about data moving slowly between departments, evaluate ERP. If it is about losing track of customers and deals, evaluate CRM. If neither fits cleanly, a targeted custom solution is likely the right starting point.
      </BlogCallout>
      <BlogCompareTable
        title="Choosing the Right System — Decision Guide"
        headers={["Your Situation", "Recommended Starting Point"]}
        rows={[
          { feature: "Sales team losing track of leads and follow-ups", values: ["CRM"] },
          { feature: "Inventory and accounts not talking to each other", values: ["ERP or integrated accounting tool"] },
          { feature: "Customer complaints about order delays and errors", values: ["ERP or custom order management"] },
          { feature: "No visibility into which customers are about to churn", values: ["CRM"] },
          { feature: "GST reconciliation taking days every quarter", values: ["ERP or custom accounting integration"] },
          { feature: "Industry-specific compliance requirements", values: ["Custom software"] },
          { feature: "Multi-location stock visibility gaps", values: ["ERP or custom inventory system"] },
          { feature: "Dealer or distributor portal needed", values: ["Custom software"] },
          { feature: "Standard workflows and limited budget", values: ["Off-the-shelf CRM or ERP"] },
        ]}
        note="This is a starting point, not a definitive answer. The right system depends on the specific details of your operation."
      />
    </div>
  );
}
