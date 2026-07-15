import BlogCallout from "@/components/blog/BlogCallout";
import BlogCompareTable from "@/components/blog/BlogCompareTable";

export default function LlmExplainedCharts() {
  return (
    <div className="my-10 flex flex-col gap-2">

      <BlogCallout type="info">
        The transformer architecture behind nearly every modern LLM was introduced in a single 2017 research paper by Google researchers, titled &quot;Attention Is All You Need.&quot; Almost everything that followed builds directly on that idea.
      </BlogCallout>

      <BlogCompareTable
        title="LLM Architecture Types"
        headers={["Type", "How It Works", "Common Use"]}
        rows={[
          { feature: "Encoder-only", values: ["Reads and understands input, does not generate new text", "Classification, sentiment analysis"] },
          { feature: "Decoder-only", values: ["Generates text token by token based on prior context", "Most modern conversational LLMs"] },
          { feature: "Encoder-decoder", values: ["Reads input fully, then generates a related but distinct output", "Translation, summarisation"] },
        ]}
        note="Source: NVIDIA's technical glossary on large language models, and standard transformer architecture literature following Vaswani et al., 2017."
      />

      <BlogCallout type="stat">
        When OpenAI publicly released GPT-3 in 2020, the company&apos;s own research paper disclosed the model had 175 billion parameters — a genuinely enormous jump at the time. Current frontier labs generally do not disclose exact parameter counts for their newest models, so treat any specific number you see today with scepticism unless it comes directly from the lab itself.
      </BlogCallout>

      <BlogCallout type="tip">
        LLMs generate statistically plausible text — they do not retrieve verified facts from a database. For anything involving specific numbers, dates, or technical details that must be accurate, paste the actual source material into your prompt rather than asking the model to recall it.
      </BlogCallout>

    </div>
  );
}
