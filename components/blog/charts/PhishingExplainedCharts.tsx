import BlogCallout from "@/components/blog/BlogCallout";
import BlogCompareTable from "@/components/blog/BlogCompareTable";

export default function PhishingExplainedCharts() {
  return (
    <div className="my-10 flex flex-col gap-2">
      <BlogCallout type="stat">
        Phishing accounts for roughly 33.8% of all small business data breaches — more than any other single attack type, according to breach data analysis.
      </BlogCallout>
      <BlogCompareTable
        title="Phishing Types — Quick Reference"
        headers={["Type", "Target", "Primary Defence"]}
        rows={[
          { feature: "Broad phishing", values: ["Mass, untargeted", "Basic awareness, spam filtering"] },
          { feature: "Spear phishing", values: ["Specific individual", "Verification habit, awareness training"] },
          { feature: "Business email compromise", values: ["Financial transactions", "Independent phone verification"] },
          { feature: "Smishing / Vishing", values: ["Individuals, via SMS/call", "Same verification habit, different channel"] },
        ]}
        note="Business email compromise specifically exploits the trust pattern small businesses use to authorise real payments over email."
      />
      <BlogCallout type="tip">
        Never verify a suspicious request using contact details provided in the message itself. Call a known, previously-verified number instead — this single habit catches the majority of business email compromise attempts.
      </BlogCallout>
    </div>
  );
}
