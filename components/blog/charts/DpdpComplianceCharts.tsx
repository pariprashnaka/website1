import BlogBarChart from "@/components/blog/BlogBarChart";
import BlogCallout from "@/components/blog/BlogCallout";
import BlogCompareTable from "@/components/blog/BlogCompareTable";
import BlogKeyNumbers from "@/components/blog/BlogKeyNumbers";

export default function DpdpComplianceCharts() {
  return (
    <div className="my-10 flex flex-col gap-2">
      <BlogKeyNumbers
        items={[
          { number: "₹250 cr", label: "Maximum penalty for failing to keep reasonable security safeguards" },
          { number: "90 days", label: "Maximum time to act on an access, correction or erasure request" },
          { number: "12–18 mo", label: "Phased rollout window from 14 November 2025" },
          { number: "4", label: "Members on the digital Data Protection Board of India" },
        ]}
      />
      <BlogBarChart
        title="Maximum Penalties Under the DPDP Act (₹ crore)"
        bars={[
          { label: "Failure to keep reasonable security safeguards", value: 250, unit: " cr" },
          { label: "Failure to notify the Board and individuals of a breach", value: 200, unit: " cr" },
          { label: "Violating children's data obligations", value: 200, unit: " cr" },
          { label: "Any other violation", value: 50, unit: " cr" },
        ]}
        max={250}
        color="#e8731a"
        note="Ceilings set by the Act, as summarised by the Press Information Bureau. Actual penalties depend on the Board's assessment of each case."
      />
      <BlogCompareTable
        title="Where Personal Data Hides in a Typical Small Business"
        headers={["Where it lives", "Typical risk", "Fix"]}
        rows={[
          { feature: "Shared spreadsheets", values: ["Everyone can open and copy it", "Move to a system with role-based access"] },
          { feature: "WhatsApp groups and staff phones", values: ["No record of who saw what", "Share through the system, not chat"] },
          { feature: "Paper registers", values: ["Cannot be searched or erased on request", "Digitise, then restrict access"] },
          { feature: "Vendor software", values: ["You may not know where data is stored", "Ask the vendor about storage and safeguards"] },
        ]}
      />
      <BlogCallout type="warning">
        Security and breach handling carry the highest penalties. If you can only do one thing this quarter, work out who can see your customer data today, and remove everyone who does not need to.
      </BlogCallout>
    </div>
  );
}
