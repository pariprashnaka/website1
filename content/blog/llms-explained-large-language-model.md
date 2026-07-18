---
title: "LLMs Explained: What a Large Language Model Actually Is"
description: "No hand-waving, no hype. A grounded explanation of how large language models actually work, where the technology came from, and what that means for how you should think about them."
date: "2026-07-16"
author: "SystemFriendly Labs"
tags: ["AI Solutions"]
charts: "LlmExplainedCharts"
---

There is a specific moment worth knowing about if you want to actually understand large language models rather than just use them: 2017, a research paper out of Google called "Attention Is All You Need," and a design decision that turned out to change nearly everything that followed. Almost every LLM in use today — the one behind whichever AI tool you used this morning — is a descendant of the idea in that paper.

This article explains what a large language model actually is, grounded in that real history rather than analogy and hand-waving, written so that whether you last touched a computer science textbook in college or you're a CEO who just wants to stop nodding along in meetings, you walk away actually understanding it.

---

## The One-Sentence Version, and Why It's Not Cheating

A large language model is, at its core, a system trained to predict the next piece of text in a sequence, given everything that came before it. That's it. That is genuinely the foundational mechanism — not a simplification that hides the real complexity elsewhere.

What makes this one-sentence description feel inadequate is that "predicting the next word" sounds too simple to produce what these systems actually do — write working code, explain a legal document, hold a coherent conversation about your business's specific situation. The gap between the mechanism and the output is real, and understanding why that gap exists is the actual substance of understanding LLMs.

---

## Tokens, Not Words

Before the prediction mechanism makes sense, one detail matters: LLMs do not process whole words. Text is broken into smaller units called tokens — sometimes a whole word, often a word fragment, sometimes a single character depending on the language and context. "Understanding" might become "under" and "standing" as two tokens, for instance.

Everything the model does — reading your input, generating its output — happens at the level of these tokens, converted into numerical representations the underlying mathematics can actually operate on. This is worth knowing because it explains some otherwise confusing LLM behaviour, like why these systems can occasionally stumble on precise character-counting tasks — the model isn't reasoning about individual letters the way you are, it's reasoning about tokens that don't always map cleanly onto them.

---

## The 2017 Breakthrough: Attention

Before 2017, the leading approach to processing language with neural networks worked through text sequentially, one word at a time, in order — similar to how you might read a sentence left to right, holding what came before in short-term memory as you go. This works, but it struggles with long-range relationships: a pronoun early in a long paragraph referring back to a noun much earlier gets harder for the model to connect correctly the further apart they are.

The transformer architecture, introduced in that 2017 Google paper, solved this with a mechanism called self-attention. Instead of processing tokens strictly in order, the model looks at all tokens in the input simultaneously and calculates how much every token should "attend to," or weight the relevance of, every other token — regardless of distance between them. A pronoun at the end of a paragraph can directly and immediately weigh its relationship to a noun at the beginning, without having to carry that relationship forward step by step through everything in between.

This had two enormous practical consequences. First, it made models dramatically better at understanding long-range context and relationships in text. Second — and this turned out to matter just as much — because the model no longer needed to process tokens strictly in sequence, this calculation could be massively parallelised across modern computing hardware, which is a large part of why it became possible to train models at the scale we now call "large" language models at all.

---

## What "Large" Actually Refers To

"Large" refers primarily to the number of parameters in the model — the internal numerical values, adjusted during training, that collectively encode everything the model has learned about patterns in language. More parameters generally mean a model can represent more nuanced patterns, though not in a simple straight line — architecture, training data quality, and training technique all matter enormously alongside raw size.

For a concrete, publicly documented reference point: when OpenAI released GPT-3 in 2020, the company's own published research paper disclosed it had 175 billion parameters, a genuinely enormous jump from prior models at the time. Current frontier models from major labs generally do not publicly disclose exact parameter counts, so treat any specific number you see for a current model with real scepticism unless it comes directly from the lab that built it.

---

## Training: Two Distinct Phases

**Pre-training** is where the bulk of what a model "knows" comes from. The model is shown enormous quantities of text and trained, essentially, to get progressively better at the next-token prediction task described earlier — repeated across a scale of data most people have no intuitive reference point for. This phase is where the model develops its broad grasp of language, facts, and patterns of reasoning that show up across huge amounts of text.

**Fine-tuning and alignment** happens after pre-training, and is where a raw, unrefined next-token predictor gets shaped into something that behaves like a genuinely useful assistant — trained further on more specific data and human feedback to be more helpful, follow instructions properly, and avoid harmful or unhelpful outputs. This second phase is a significant part of why a model directly after pre-training behaves very differently from the polished product you actually interact with.

---

## Why LLMs Get Things Wrong Sometimes

Given the actual mechanism — predicting statistically likely next tokens based on patterns in training data — a few well-known LLM limitations stop being mysterious and start being logical consequences of how the system fundamentally works.

**It can state incorrect things confidently.** The model is generating text that is statistically plausible given its training, not looking up verified facts from a database. When the plausible-sounding continuation happens to be wrong, the model has no separate internal mechanism flagging that as false — this is the behaviour commonly called hallucination.

**It can be inconsistent between sessions or rephrased questions.** Because generation involves an element of probability rather than a fixed lookup, slightly different phrasing of the same underlying question can lead to a different path through possible next tokens, and therefore a different answer.

**It reflects patterns in its training data, including biases and gaps.** The model's sense of what's likely or typical is shaped entirely by what it was trained on. Where that training data is skewed, sparse, or dated on a particular topic, the model's output on that topic inherits those same limitations.

---

## LLM Architecture Family Tree

| Architecture Type | How It Works | Common Use |
|---|---|---|
| Encoder-only | Reads and understands input, does not generate new text | Classification, sentiment analysis |
| Decoder-only | Generates text token by token based on prior context | Most modern conversational LLMs |
| Encoder-decoder | Reads input fully, then generates a related but distinct output | Translation, summarisation |

Most of the LLMs people interact with day to day for conversation and general assistance are decoder-only architectures, optimised specifically for generating fluent, contextually appropriate continuations of text.

---

## Case Study: A Marketing Team Misunderstanding What Their Tool Could Verify

A mid-sized retail business in Hyderabad had been using an LLM-based writing tool to draft product descriptions and had started asking it to include specific technical specifications pulled from memory rather than from the actual product sheets, assuming the tool was retrieving verified data.

**The problem.** Several product listings went live with specification errors — plausible-sounding numbers that were subtly wrong, generated because the model was predicting statistically likely specifications for that product category rather than looking up the actual documented values, which it had no access to and no mechanism for verifying.

**The fix.** The team's workflow was changed so the LLM tool only ever received actual product specification sheets as direct input for any listing involving technical claims, using the model purely to draft language around verified data rather than to recall or generate the data itself.

**The lesson.** The underlying mechanism — next-token prediction based on training patterns, not fact retrieval — was the entire explanation for what went wrong. Once the team understood that distinction, the fix was straightforward: never ask the model to be the source of a fact it cannot verify against something you gave it directly.

---

## Common Questions

**Is an LLM the same thing as artificial intelligence in general?**
No — an LLM is one specific type of AI system, built for language tasks using the transformer architecture described above. Artificial intelligence is a much broader field including many approaches that are not language models at all, such as computer vision systems or traditional statistical machine learning.

**Why do different LLMs give different answers to the same question?**
Differences in training data, model architecture details, parameter count, and the specific alignment and fine-tuning process each lab uses all contribute. Since generation also involves an element of probability rather than a fixed lookup, even the same model can occasionally give somewhat different answers to an identical question asked twice.

**Does a bigger model always mean a better model?**
Not in a simple straight line. Parameter count matters, but training data quality, architecture refinements, and fine-tuning technique have all been shown to meaningfully affect real-world performance independent of raw size — which is part of why newer, smaller models frequently outperform older, larger ones on many tasks.

**Can an LLM actually understand what it's saying, or is it just predicting patterns?**
This is a genuinely unresolved question that AI researchers themselves debate, and reasonable people disagree on how to define "understanding" in this context. What is not in dispute is the underlying mechanism — next-token prediction based on learned patterns — which is verifiable and well documented, whatever position you take on the philosophical question layered on top of it.

**How much does the training data itself matter compared to the architecture?**
Both matter substantially, and they interact — a superior architecture trained on poor-quality data will underperform a solid architecture trained on carefully curated, high-quality data. Increasingly, data quality and curation have become as significant a competitive factor between labs as raw architectural innovation.

---

## Key Takeaways

A large language model is fundamentally a next-token prediction system, trained on enormous quantities of text to get progressively better at predicting what comes next given everything that came before.

The 2017 transformer architecture and its self-attention mechanism is the specific breakthrough that made modern LLMs possible, by allowing models to weigh relationships between all parts of an input simultaneously rather than processing strictly in sequence.

Training happens in two distinct phases — pre-training, where the bulk of the model's knowledge comes from, and fine-tuning, where it gets shaped into a genuinely useful, well-behaved assistant.

Understanding the actual mechanism explains, rather than mystifies, well-known LLM limitations: confident incorrect statements, inconsistency between similar questions, and inherited bias from training data are all direct consequences of how the system fundamentally works, not unexplainable quirks.

If you're trying to work out where LLM-based tools genuinely fit in your business, and where their real limitations mean you need a different approach, [talk to us](/contact). We'll give you an honest, technically grounded read rather than either the hype or the dismissal.
