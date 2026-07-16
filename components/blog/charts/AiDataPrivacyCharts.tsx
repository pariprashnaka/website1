import BlogCallout from "@/components/blog/BlogCallout";
import BlogCompareTable from "@/components/blog/BlogCompareTable";

export default function AiDataPrivacyCharts() {
  return (
    <div className="my-10 flex flex-col gap-2">
      <BlogCallout type="warning">
        In April 2023, Samsung engineers leaked confidential source code and internal meeting notes to ChatGPT in three separate incidents within twenty days — all well-intentioned, none malicious. Samsung responded with a company-wide ban and a 1,024-byte prompt limit.
      </BlogCallout>
      <BlogCompareTable
        title="Companies That Restricted AI Tools After Data Exposure Concerns"
        headers={["Company", "Response"]}
        rows={[
          { feature: "Samsung", values: ["Company-wide ban on generative AI, 1,024-byte prompt limit"] },
          { feature: "Amazon", values: ["Warned staff against sharing code or confidential information"] },
          { feature: "JPMorgan Chase", values: ["Restricted use over regulatory concerns"] },
          { feature: "Bank of America, Citigroup, Deutsche Bank, Wells Fargo, Goldman Sachs", values: ["Followed with similar restrictions"] },
          { feature: "Italy (Garante regulator)", values: ["Temporarily banned ChatGPT nationally, March 2023"] },
        ]}
        note="Sourced from Bloomberg, Forbes, and CIO Dive reporting on the 2023 Samsung ChatGPT incident and subsequent industry response."
      />
      <BlogCallout type="stat">
        Cybersecurity firm Cyberhaven found that roughly 3.1% of employees at monitored companies had submitted confidential company data to an AI tool — estimating a 100,000-employee company could see this happen hundreds of times per week.
      </BlogCallout>
    </div>
  );
}
