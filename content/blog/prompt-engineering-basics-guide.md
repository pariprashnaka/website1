---
title: "Prompt Engineering Basics: How to Get Better Results From AI Tools"
description: "Most prompt engineering advice online is outdated for the models available today. Here's what research actually shows still works, backed by real studies, not folk wisdom."
date: "2026-07-16"
author: "SystemFriendly Labs"
tags: ["AI Solutions"]
charts: "PromptEngineeringCharts"
---

A specific piece of advice has been repeated in nearly every prompt engineering guide for the last few years: always give the model several examples of what you want before asking your real question. It is one of the most confidently repeated rules in this entire space. It is also, according to more recent research on today's stronger models, less true than it used to be — and understanding why tells you something genuinely useful about how to actually get good results from AI tools right now, not in 2022.

This article covers what prompt engineering actually is, the specific techniques with real research behind them, and — because this changes faster than most guides acknowledge — what has actually changed about which techniques still matter as the underlying models have gotten stronger.

---

## What Prompt Engineering Actually Means

Prompt engineering is the practice of structuring what you ask an AI model in a way that reliably produces better, more accurate, more usable output. It sits somewhere between writing a clear instruction to a very literal colleague and understanding a few specific, tested patterns that measurably change how the model responds.

It is not a mystical skill, and it does not require a technical background. The core of it is genuinely just clear, specific communication, layered with a handful of techniques that research has shown produce measurably better results for certain kinds of tasks.

---

## The Foundational Technique: Being Specific

Before any advanced technique, the single highest-leverage thing you can do is be concrete rather than vague. "Write something about our product" produces a generic, unusable result almost every time. "Write a 150-word product description for a stainless steel water bottle, aimed at office workers, emphasising that it keeps drinks cold for 24 hours, in a friendly but not overly casual tone" gives the model almost everything it needs to produce something genuinely usable on the first attempt.

This sounds almost too simple to be worth stating, and yet it is consistently the difference between people who find AI tools genuinely useful and people who conclude the tools "don't really work" after a handful of vague, disappointing attempts.

---

## Few-Shot Prompting: Giving Examples

Few-shot prompting — providing a small number of example input-output pairs before your actual request — was introduced and popularised by OpenAI's own 2020 research paper on GPT-3, titled "Language Models are Few-Shot Learners." The technique works by showing the model the pattern you want through demonstration rather than description, which is often easier and more reliable than trying to describe a format in words alone.

This remains genuinely useful, particularly for getting a consistent output format — if you want every response structured exactly the same way, showing two or three examples of that exact structure is usually more reliable than describing the structure abstractly.

---

## Chain-of-Thought Prompting: Asking the Model to Show Its Reasoning

Chain-of-thought prompting, introduced in a 2022 research paper by Wei and colleagues at Google, involves prompting the model to work through a problem step by step rather than jumping straight to a final answer. The original research demonstrated a dramatic effect on complex reasoning tasks — on the GSM8K math word problem benchmark, a large model given eight chain-of-thought examples achieved more than a 40 percentage point improvement in accuracy over standard prompting, a genuinely large effect by research standards.

The simplest version of this technique doesn't even require examples — simply adding an instruction like "think through this step by step before giving your final answer" measurably improves performance on tasks that benefit from explicit reasoning, a version of the technique sometimes called zero-shot chain-of-thought.

---

## What's Actually Changed: The Nuance Most Guides Skip

Here is the part that most prompt engineering content written a year or two ago does not reflect, because the underlying research is genuinely recent. A 2025 study examining chain-of-thought prompting on newer, stronger models found that adding traditional few-shot chain-of-thought examples did not improve reasoning performance compared to simply using zero-shot chain-of-thought — asking the model to reason step by step without providing worked examples first. The researchers found the examples' primary remaining function was aligning the output format with what was expected, not actually improving the underlying reasoning.

A separate, related line of research examining what specifically makes chain-of-thought prompting effective found that the exact content of your examples — the specific numbers, names, or entities used — mattered far less than the consistent pattern and structure of the examples. In other words, the model was learning "here is the shape of the task," not memorising anything from the specific example content itself.

The practical implication: for many tasks on current-generation models, a clear instruction to reason step by step accomplishes most of what a full set of worked examples used to be necessary for. Examples still earn their place when you specifically need consistent formatting, or when the task itself is genuinely unusual enough that describing it in words alone is not covering what you mean. They are not the universal necessity that earlier prompt engineering advice sometimes suggested.

---

## Practical Techniques Worth Using

**Give the model a role when it changes how it should respond.** Asking the model to respond "as an experienced accountant reviewing this for compliance issues" versus simply asking it to review a document can shift the framing and depth of the response in a genuinely useful way — this works because it narrows the space of plausible responses toward the specific expertise and tone implied by the role.

**Specify format explicitly.** If you need a table, a numbered list, a specific word count, or a particular structure, say so directly rather than hoping the model infers it. This is one of the most reliable, low-effort improvements available.

**Break complex requests into smaller steps.** Rather than asking for an entire complex document in one prompt, asking for an outline first, reviewing it, then asking for each section, generally produces more accurate, more controllable results than a single large request — particularly for anything where structure matters as much as content.

**Provide the actual source material, don't ask the model to recall facts.** As covered in [our explanation of how LLMs actually work](/blog/llms-explained-large-language-model), models generate statistically plausible text rather than retrieving verified facts. For anything involving specific data — numbers, dates, technical specifications — paste the actual source material into the prompt rather than asking the model to remember or look it up.

**Iterate rather than expecting perfection on the first attempt.** Treating the first response as a draft to refine, rather than a final answer to accept or reject, consistently produces better outcomes than starting over with a completely different prompt each time something isn't quite right.

---

## A Quick Reference: What to Use When

| Your Situation | Technique to Use |
|---|---|
| Getting a vague or generic response | Add specific, concrete detail to the request |
| Need consistent formatting across many outputs | Few-shot examples showing the exact format |
| Task requires genuine multi-step reasoning | Chain-of-thought — even a simple "think step by step" instruction |
| Response tone or framing feels off | Assign a specific role or perspective |
| Request involves specific facts, numbers, or data | Provide the source material directly, don't rely on model recall |
| Complex, multi-part output | Break into an outline first, then generate section by section |

---

## Case Study: A Legal Documentation Team Refining Their Approach

An operations team at a mid-sized services business in Gurugram was using an LLM tool to draft first versions of standard client contracts, but found the outputs inconsistent — sometimes missing required clauses, sometimes structured differently between similar documents.

**The problem.** Prompts were short and generic — "draft a service agreement for this client" — leaving the model to infer structure, required clauses, and formatting each time, with no consistency mechanism in place.

**The fix.** The team built a small library of two or three example contracts showing the exact clause structure and formatting they wanted, and paired that with an explicit instruction to reason through which standard clauses applied given the specific engagement details before drafting — a combination of few-shot examples for format consistency and chain-of-thought instruction for the substantive reasoning about which clauses were actually needed.

**The outcome.** Draft consistency improved substantially, and the specific error of missing required clauses dropped close to zero, since the step-by-step reasoning instruction meant the model explicitly worked through clause applicability before drafting rather than jumping straight to a formatted document.

---

## Common Questions

**Do I need to learn special syntax or commands to prompt AI tools well?**
No — modern LLMs respond to plain, clear natural language. There is no special syntax required. The skill is in clarity and specificity, not in learning a technical command language.

**Is chain-of-thought prompting still worth using given the newer research?**
Yes, particularly the simple version — explicitly asking the model to reason step by step before answering. What has changed is that elaborate worked examples matter less than they used to for reasoning quality specifically, though they still help with output format consistency.

**How long should a good prompt be?**
As long as it needs to be to convey what actually matters, and no longer. A short, specific prompt beats a long, vague one. A long prompt with genuinely relevant context and constraints beats a short one that leaves out details the model needs.

**Should I trust the first response I get, or always ask for revisions?**
Treat the first response as a strong first draft rather than a final answer, particularly for anything consequential. Reviewing and iterating consistently produces better results than accepting the first output at face value.

**Does prompt engineering advice go out of date?**
Yes, and this is worth taking seriously — this article itself reflects research current as of when it was written. As models improve, some techniques become less necessary and new ones emerge. Treat any prompt engineering guide, including this one, as reflecting a snapshot of current understanding rather than permanent rules.

---

## Key Takeaways

Prompt engineering is fundamentally about clear, specific communication, layered with a small number of techniques — few-shot examples and chain-of-thought reasoning — that have genuine research backing for the specific problems they solve.

Few-shot prompting, from OpenAI's 2020 research, remains most valuable for enforcing consistent output format. Chain-of-thought prompting, from Google's 2022 research, remains valuable for genuine multi-step reasoning tasks, with the original research showing improvements exceeding 40 percentage points on complex reasoning benchmarks.

What has genuinely changed with newer, stronger models is the relative importance of elaborate worked examples for reasoning tasks specifically — 2025 research indicates a simple instruction to reason step by step often accomplishes what a full set of examples used to be needed for.

The single highest-leverage habit, more than any specific technique, is being concrete and specific rather than vague, and providing real source material for anything involving actual facts rather than relying on the model's recall.

If you're trying to get more consistent, reliable results from AI tools in your business workflows, [talk to us](/contact). We can help you design the actual prompting approach for your specific use case, not just hand you a generic list of tips.
