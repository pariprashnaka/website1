import BlogCallout from "@/components/blog/BlogCallout";
import BlogCompareTable from "@/components/blog/BlogCompareTable";

export default function HallucinationsCharts() {
  return (
    <div className="my-10 flex flex-col gap-2">

      <BlogCallout type="stat">
        In Mata v. Avianca (S.D.N.Y., 2023), lawyers were fined $5,000 after submitting a legal brief citing six court cases entirely fabricated by ChatGPT. When directly asked to confirm the cases were real, the AI assured them they were. Similar hallucinated-citation cases have continued appearing in courts through 2026.
      </BlogCallout>

      <BlogCompareTable
        title="Hallucination Risk by Task Type"
        headers={["Task", "Risk Level", "Why"]}
        rows={[
          { feature: "Summarising a document you provided", values: ["Low", "Working from real source material"] },
          { feature: "General, well-documented knowledge", values: ["Low", "Consistently represented in training data"] },
          { feature: "Specific statistics or figures", values: ["High", "Easy to generate a plausible number that isn't real"] },
          { feature: "Legal, academic, or medical citations", values: ["High", "Names and sources are easy to fabricate convincingly"] },
          { feature: "Asking AI to verify its own claim", values: ["High", "Tends to confirm fabrications for the same reason it made them"] },
        ]}
        note="Use this as a practical guide for where to apply extra verification, not a reason to distrust AI tools across the board."
      />

      <BlogCallout type="warning">
        Never treat an AI tool&apos;s own confirmation of its previous answer as verification. If you ask it to double-check a fact it already generated, a confident &quot;yes, that&apos;s correct&quot; carries no more weight than the original claim.
      </BlogCallout>

    </div>
  );
}
