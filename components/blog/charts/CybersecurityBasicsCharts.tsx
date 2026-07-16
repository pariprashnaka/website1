import BlogCallout from "@/components/blog/BlogCallout";
import BlogCompareTable from "@/components/blog/BlogCompareTable";

export default function CybersecurityBasicsCharts() {
  return (
    <div className="my-10 flex flex-col gap-2">
      <BlogCallout type="warning">
        The claim that &quot;60% of small businesses close within six months of a cyberattack&quot; was officially disavowed by the National Cyber Security Alliance in 2022 — they confirmed they never produced this statistic and recommend against its continued use.
      </BlogCallout>
      <BlogCallout type="stat">
        Small businesses receive targeted malicious email at a higher rate than any other organisation size — roughly 1 in every 323 emails. Source: Verizon Data Breach Investigations Report.
      </BlogCallout>
      <BlogCompareTable
        title="Cybersecurity Basics — Cost vs Impact"
        headers={["Measure", "Cost", "Impact"]}
        rows={[
          { feature: "Multi-factor authentication", values: ["Free to low-cost", "High — blocks most account-takeover attempts"] },
          { feature: "Isolated, tested backups", values: ["Low ongoing cost", "High — the difference between an incident and a disaster"] },
          { feature: "Employee phishing awareness", values: ["Low", "High — email is the most common initial attack path"] },
          { feature: "Written incident response plan", values: ["Free (your own time)", "Saves an average of $2.66M per breach (IBM 2025)"] },
        ]}
        note="Source: IBM Cost of a Data Breach Report 2025, Verizon Data Breach Investigations Report."
      />
    </div>
  );
}
