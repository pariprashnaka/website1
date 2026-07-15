import BlogBarChart from "@/components/blog/BlogBarChart";
import BlogCallout from "@/components/blog/BlogCallout";
import BlogCompareTable from "@/components/blog/BlogCompareTable";

export default function PromptEngineeringCharts() {
  return (
    <div className="my-10 flex flex-col gap-2">

      <BlogBarChart
        title="Chain-of-Thought Prompting Effect on Math Reasoning (GSM8K Benchmark)"
        bars={[
          { label: "Standard prompting", value: 18, unit: "% accuracy*" },
          { label: "8-shot chain-of-thought prompting", value: 58, unit: "% accuracy*" },
        ]}
        max={65}
        color="#7C3AED"
        note="*Approximate figures illustrating the >40 percentage point absolute improvement reported for PaLM 540B on the GSM8K benchmark. Source: Wei et al., 'Chain-of-Thought Prompting Elicits Reasoning in Large Language Models,' Google Research, 2022."
      />

      <BlogCallout type="warning">
        A widely repeated rule — always give the model several examples before your real question — is less true than it used to be. 2025 research on newer, stronger models found few-shot chain-of-thought examples did not improve reasoning versus a simple zero-shot instruction to &quot;think step by step,&quot; with examples mattering mainly for output format, not reasoning quality.
      </BlogCallout>

      <BlogCompareTable
        title="Quick Reference — Which Technique to Use"
        headers={["Your Situation", "Technique"]}
        rows={[
          { feature: "Getting vague or generic responses", values: ["Add specific, concrete detail to the request"] },
          { feature: "Need consistent formatting across outputs", values: ["Few-shot examples showing the exact format"] },
          { feature: "Task requires genuine multi-step reasoning", values: ["Chain-of-thought — even a simple 'think step by step'"] },
          { feature: "Response involves specific facts or data", values: ["Provide source material directly, don't rely on recall"] },
        ]}
        note="Techniques sourced from Brown et al. 2020 (few-shot prompting, OpenAI) and Wei et al. 2022 (chain-of-thought prompting, Google Research), with 2025 nuance from subsequent research on newer models."
      />

    </div>
  );
}
