---
title: "AI Hallucinations Explained: Why AI Tools Sometimes Get Things Wrong"
description: "A real court case, a $5,000 fine, and six lawyers' careers on the line — grounded in an actual documented incident, here's why AI tools confidently make things up, and how to protect yourself from it."
date: "2026-07-17"
author: "Nexora Systems"
tags: ["AI Solutions"]
charts: "HallucinationsCharts"
---

In 2023, two New York lawyers submitted a legal filing citing six court cases to support their argument. There was one serious problem: none of the six cases existed. Their legal research had been done using ChatGPT, which had generated case names, judges, dates, and even convincing quotations for rulings that had never happened. When the opposing lawyers and the court itself could not locate any of the cited cases, the presiding judge, P. Kevin Castel, ordered the lawyers to produce copies. What came back was more fabricated content. The lawyers were eventually fined five thousand dollars and became a cautionary tale cited in courtrooms worldwide — including in similar AI-hallucination cases that have continued appearing through 2026.

This is not a hypothetical warning story. It happened, it is a matter of public record, and it is one of the clearest real illustrations of what this article is about: AI hallucination, the phenomenon where an AI tool generates false information with exactly the same confidence it uses for accurate information.

---

## What "Hallucination" Actually Means Here

The term sounds dramatic, borrowed loosely from human psychology, but the underlying mechanism is not mysterious once you understand how these systems actually work. As [our explanation of large language models](/blog/llms-explained-large-language-model) covers in more depth, an AI language model is fundamentally a system that predicts statistically likely text based on patterns learned from enormous amounts of training data — it is not a system that looks up verified facts in a database.

When you ask an AI tool a question it has good information about, this prediction process produces accurate, useful answers, because the statistically likely continuation genuinely matches reality. When you ask about something the model has limited, unclear, or no real information about, the same prediction process still runs — and it still produces confident, fluent, plausible-sounding text. The model has no separate mechanism that flags "I am now making this up" versus "I actually know this." Both come out sounding equally certain.

---

## The Exam Student Analogy

Here is the comparison that makes this click for most people. Imagine a student sitting a written exam who does not know the answer to a specific question. A poorly prepared student might leave the answer blank. A different kind of student — one trained specifically to always produce something, because a blank answer guarantees zero marks — writes something that sounds plausible, uses the right vocabulary, follows the expected structure of a good answer, and hopes it is close enough to get partial credit.

An AI language model behaves somewhat like that second student, but without the awareness that it is guessing. It has learned, from enormous amounts of training text, what a confident, well-structured, plausible-sounding answer looks like for nearly any kind of question — including legal citations, technical specifications, historical dates, and statistics. When it does not have solid information to draw on, it still produces something in that same confident, well-structured style, because that is the pattern it has learned to generate. The lawyers in the case above asked ChatGPT directly whether the cases were real, and it assured them they were — for the same underlying statistical reasons that generated the fake cases in the first place. The model was not lying in the way a person lies. It genuinely has no internal mechanism for knowing the difference between a real case it has accurate information about and a fabricated one that merely sounds like the real thing.

---

## Where Hallucination Risk Is Actually Highest

Not all AI-generated content carries equal risk. Understanding where the risk concentrates lets you apply appropriate caution without needing to distrust every single response.

**Specific citations, case law, and references.** Exactly the category that caused the incident above. Names, dates, and sources are easy for a model to generate in a plausible format without the underlying thing actually existing.

**Precise numbers and statistics.** A model can generate a specific-sounding percentage or figure that fits the pattern of a real statistic without it being drawn from any actual source.

**Very recent events.** Anything that happened after a model's training data was collected, or that is simply obscure enough to be thinly represented in training data, is a higher-risk area for confident-sounding fabrication.

**Niche or highly specialised technical details.** The more specific and less commonly discussed a topic is, the less real information the model likely has to draw from, even though its fluency does not visibly degrade.

**Anything the model is asked to confirm about itself.** As the incident above demonstrates, asking an AI tool to verify its own previous claim is not a reliable check — it tends to confidently confirm its own fabrication for the same reasons it generated the fabrication in the first place.

---

## Where Hallucination Risk Is Genuinely Low

**Well-established general knowledge.** Widely documented facts that appear consistently across enormous amounts of training data are represented reliably.

**Tasks that do not depend on specific factual recall.** Drafting, summarising provided text, rephrasing, and brainstorming do not require the model to retrieve a specific fact correctly — the risk profile is fundamentally different from a task asking "what is the exact figure for X."

**Content you provide directly as source material.** When you paste the actual document, data, or specification into your prompt and ask the model to work from it, the risk of fabrication drops significantly, because the model is working from real information you supplied rather than generating from memory.

---

## Practical Ways to Protect Yourself

**Verify anything specific and consequential against an independent, authoritative source.** This is the single most important habit. For the lawyers in the case above, this would have meant checking each cited case in an actual legal database — the one step that would have prevented the entire situation.

**Never treat the AI's own confirmation as verification.** If you ask an AI tool to double-check its own previous answer, a confident "yes, that's correct" is not meaningful evidence, for the reasons explained above.

**Give the model real source material rather than asking it to recall facts from memory.** If you need the model to work with specific data, numbers, or documents, provide them directly in your prompt rather than trusting the model's memory of them.

**Apply more scrutiny as stakes rise.** A hallucinated fact in a casual brainstorm costs little. A hallucinated fact in a legal filing, a medical context, a financial report, or a public-facing business claim carries real consequences — scale your verification effort to match what is actually at risk.

**Treat AI-generated citations and references as a starting point for your own search, not a finished fact.** If a tool tells you "according to a 2024 study," search for that study yourself before repeating the claim anywhere that matters.

---

## Hallucination Risk by Task Type

| Task | Risk Level | Why |
|---|---|---|
| Summarising a document you provided | Low | Working from real source material, not recalling from memory |
| Drafting or rephrasing text | Low | Does not depend on specific factual recall |
| General, well-documented knowledge | Low | Consistently represented across enormous training data |
| Specific statistics or figures | High | Easy to generate a plausible-looking number that isn't real |
| Legal, academic, or medical citations | High | Names, dates, and sources are easy to fabricate convincingly |
| Very recent events | High | Limited or no reliable training data available |
| Asking the AI to verify its own previous claim | High | Confirms fabrications for the same reason it generated them |

---

## What Happened After the Case Above

The consequences extended well beyond the initial five-thousand-dollar fine. The court required the lawyers to personally notify every judge who had been falsely cited in their filing — an unusual and reputationally damaging remedy. The case became required reading in legal ethics education, referenced in bar association guidance, and cited by courts handling similar incidents that have continued to occur since, including several documented cases into 2026 involving different lawyers, different courts, and the same underlying failure: trusting AI-generated content without independent verification.

The lesson generalises well beyond the legal profession. Any business context where a specific, verifiable claim matters — a compliance filing, a client-facing report, a technical specification — carries the same underlying risk if AI-generated content is used without appropriate verification.

---

## Common Questions

**Does this mean AI tools are unreliable and shouldn't be trusted?**
Not as a blanket conclusion. AI tools are genuinely reliable for a wide range of tasks, particularly ones that do not depend on precise factual recall. The point is not to distrust everything, but to understand specifically which categories of output carry real fabrication risk and apply verification proportionate to the stakes involved.

**Will this problem eventually be solved as AI models improve?**
Models have genuinely improved at reducing hallucination rates over time, and techniques like retrieval-augmented generation — where a model is connected to a real, searchable knowledge source rather than relying purely on memory — meaningfully reduce the risk for many use cases. However, the fundamental mechanism described in this article is inherent to how these models generate text, so verification remains a sound practice rather than a temporary workaround.

**How do I know if a specific AI tool is more or less prone to hallucination?**
This varies by tool and by the specific task. Tools built with retrieval capability — able to search real, current sources before answering — generally hallucinate less on fact-heavy questions than tools relying purely on trained-in memory. For anything consequential, the safest assumption is to verify regardless of which tool you are using.

**Is this specific to ChatGPT, or does it apply to all AI language models?**
The underlying mechanism — generating statistically plausible text rather than retrieving verified facts — is common to all large language models, not specific to any one product. The incident described in this article happened to involve ChatGPT because of when it occurred, but the same category of risk applies across AI language tools generally.

**What should a business do to prevent this kind of mistake internally?**
Establish a clear internal practice: anything AI-generated that will be used in a client-facing document, a compliance filing, or any context where a specific fact matters gets independently verified before it goes out, the same way you would verify a junior team member's unchecked first draft on anything consequential.

---

## Key Takeaways

AI hallucination is not a rare glitch — it is a predictable consequence of how language models actually work, generating statistically plausible text rather than retrieving verified facts, with no internal distinction between confident accuracy and confident fabrication.

The 2023 Mata v. Avianca case, where lawyers were sanctioned for submitting a legal brief containing six fabricated court cases generated by ChatGPT, is real, documented, and remains a live pattern — similar incidents have continued to occur into 2026.

Hallucination risk concentrates specifically around citations, precise statistics, recent events, and niche technical details — and is significantly lower for tasks like summarising material you directly provided.

The single most effective protection is straightforward: verify anything specific and consequential against an independent source, and never treat the AI's own confirmation of its previous claim as genuine verification.

If you're building AI-assisted workflows into your business and want to think through where verification actually needs to sit in the process, [talk to us](/contact). We can help you design it properly rather than discovering the gap the way the lawyers in this article did.
