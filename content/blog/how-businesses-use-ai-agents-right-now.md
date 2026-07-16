---
title: "How Businesses Are Actually Using AI Agents Right Now"
description: "Klarna's agent does the work of 853 people. JPMorgan runs 450+ agents daily. But MIT found 95% of AI pilots deliver no measurable financial result. Here's the real picture, not the highlight reel."
date: "2026-07-17"
author: "Nexora Systems"
tags: ["AI Solutions"]
charts: "AiAgentsRealUseCharts"
---

Klarna's customer service AI agent now does the work equivalent to 853 full-time employees, saving the company an estimated 60 million dollars, according to the company's own disclosures. JPMorgan runs more than 450 distinct AI agent use cases in production every single day. General Mills has booked over 20 million dollars in savings since 2024 from an AI system that autonomously evaluates more than 5,000 daily shipments and adjusts routing without waiting for human sign-off.

Those are real numbers from real, named companies — not vendor demo statistics. But here is the other real number worth knowing before reading any further: MIT research published in August 2025 found that 95 percent of generative AI pilot projects deliver no measurable financial result at all. Both of these facts are true simultaneously, and understanding why is the actual substance of this article — not another list of things AI agents could theoretically do, but an honest picture of where they are genuinely working right now, where they are quietly failing, and what any of this means if you are not a company the size of JPMorgan.

---

## The Gap Between "Trying" and "Working"

Research from McKinsey, surveying nearly 2,000 organisations across 105 countries in mid-2025, found that 62 percent of businesses are at least experimenting with agentic AI in some form — 23 percent report having scaled an agent somewhere in the business, and 39 percent are still experimenting. That sounds like broad adoption. The more revealing number sits underneath it: within any single business function, no more than 10 percent of organisations report having actually scaled an agent there. Agentic AI is real, but it is deployed in narrow pockets, not sweeping across entire businesses the way the surrounding conversation sometimes implies.

Gartner's own senior analyst Anushree Verma put it plainly in her firm's research: most agentic AI projects right now are early-stage experiments or proof of concepts, often driven by hype and frequently misapplied. Gartner's own projection is that more than 40 percent of agentic AI projects will be cancelled before the end of 2027. This is not an anti-AI conclusion — it is the honest backdrop against which the real, working examples below should be read.

---

## Where It Is Genuinely Working, With Names Attached

**Customer service, at Klarna.** The buy-now-pay-later company's AI agent handles a volume of customer service work equivalent to 853 full-time staff, with the company reporting roughly 60 million dollars in savings. This is the most commonly cited agentic AI deployment publicly, in part because Klarna disclosed real figures rather than leaving it to speculation.

**Financial services, at JPMorgan.** The bank runs over 450 distinct agentic AI use cases in production daily, including a system that generates investment banking presentations in around 30 seconds — work that previously consumed hours of a junior analyst's time. The scale here reflects a large institution with substantial engineering resources, but the underlying use case — automating a specific, well-defined, repetitive document-generation task — is the same shape of problem smaller businesses have too, just at different scale.

**Supply chain and logistics, at General Mills and Walmart.** General Mills' system evaluates more than 5,000 daily shipments, assessing routing, timing, and vendor performance autonomously, flagging exceptions for human review rather than requiring approval on every decision — and has produced over 20 million dollars in savings since fiscal 2024. Walmart's supply chain agent processes data from 4,700 stores and fulfilment centres, making autonomous replenishment decisions without a per-decision human approval loop.

**Field operations, at DHL.** DHL Supply Chain deployed voice and email AI agents across regions for appointment scheduling, driver follow-up calls, and warehouse coordination — according to the company's own November 2025 announcement, these agents autonomously handle phone and email interactions that previously required a person on the line for every call.

**Specialised industrial work, at Siemens.** In March 2026, Siemens introduced a domain-scoped AI agent for semiconductor and circuit board design workflows — described in the company's own materials as an agent that plans and orchestrates work spanning design, verification, and manufacturing sign-off within that specific engineering domain, rather than a general-purpose assistant.

---

## What These Real Deployments Have in Common

Looking across the examples above, a consistent pattern emerges that separates the ones that actually shipped from the 95 percent of pilots that produced no measurable result.

**Narrow, well-defined scope.** None of these are "AI that runs the business." Each one handles a specific, bounded category of task — customer service tickets, shipment routing, appointment scheduling — not an open-ended mandate.

**Deep integration with real, live systems.** These agents read from and write to actual operational systems — a CRM, an ERP, a logistics platform — rather than operating in isolation and requiring a human to act on their output manually.

**A defined point where a human takes over.** Every example above includes some form of exception handling or escalation — General Mills flags exceptions for human review rather than automating every decision with equal confidence. This handoff logic is not an afterthought; it is frequently the specific design decision that determines whether a deployment is trusted enough to reach production at all.

**Mature underlying data and infrastructure.** A recurring finding across multiple 2026 industry studies is that the primary cause of failed agent pilots is not model quality — it is legacy system integration and inconsistent underlying data. An agent cannot make a reliable autonomous decision from data that is itself unreliable.

---

## What This Actually Means If You Are Not JPMorgan

The honest translation for a smaller business is not "you need what Klarna has." It is that the same underlying pattern — narrow scope, real system integration, a clear human handoff point — applies regardless of company size, and the starting point should be proportionate to your actual scale.

The equivalent starting points for a growing Indian business look more like: an agent that handles routine, high-volume customer queries and hands off anything unusual to a person, rather than a Klarna-scale customer service overhaul. A system that flags shipment or delivery exceptions for review rather than autonomously re-routing your entire logistics operation. Document processing that extracts and files routine invoice data, escalating anything it is not confident about, rather than a fully autonomous accounts department.

[Our earlier explanation of what actually makes something an agent, versus a well-dressed chatbot](/blog/ai-agent-vs-chatbot-explained), covers the practical test worth applying to any vendor pitching you an "AI agent" solution at any scale.

---

## Real Production Agent Deployments — Quick Reference

| Company | Industry | What the Agent Does | Reported Outcome |
|---|---|---|---|
| Klarna | Fintech / customer service | Handles customer service interactions end to end | Work equivalent to 853 FTEs, ~$60M saved |
| JPMorgan | Financial services | Generates investment banking presentations, 450+ other use cases | Presentation generation cut from hours to ~30 seconds |
| General Mills | CPG / supply chain | Evaluates and adjusts shipment routing and vendor performance | $20M+ saved since fiscal 2024 |
| Walmart | Retail / supply chain | Autonomous replenishment decisions across stores | 4,700 stores and fulfilment centres connected |
| DHL Supply Chain | Logistics | Voice and email agents for scheduling and coordination | Autonomous handling of phone/email interactions at scale |
| Siemens | Industrial / engineering | Domain-scoped agent for chip and circuit board design workflows | Multi-step design-to-manufacturing orchestration |

---

## Case Study: A Freight Forwarder in Ludhiana Starting Small

A freight forwarding and customs clearance business in Ludhiana, team of 26, handling shipment coordination for manufacturing clients exporting across India and abroad.

**The situation.** The business had read about large-scale agentic AI deployments and initially considered a broad "AI transformation" of its dispatch and coordination function — closely mirroring the ambitious, unscoped approach that industry data shows fails most often.

**The narrower approach taken instead.** Rather than a sweeping overhaul, the business identified one specific, high-volume, well-defined task: confirming delivery appointment windows with recipients by phone and email, a task consuming significant coordinator time daily and prone to scheduling conflicts when done manually under time pressure. A voice and messaging agent was scoped specifically for this task, integrated directly with the business's existing dispatch system, with any call it could not confidently resolve — an unusual request, a dispute, a complex rescheduling — handed off directly to a human coordinator.

**The outcome.** Routine appointment confirmations, which previously consumed several hours of coordinator time daily across the team, now run largely without manual intervention, with coordinators handling only the exceptions the system correctly identifies it cannot resolve alone.

**The lesson.** The business deliberately avoided the ambitious, broad-scope approach that the McKinsey and MIT research above shows fails most often, and instead mirrored the actual pattern behind the real production deployments described earlier — narrow scope, real system integration, and a clearly defined human handoff.

---

## Common Questions

**Are these large companies representative of what's actually possible, or exceptions?**
They are genuine, verified deployments, but they also reflect organisations with significant engineering resources and mature underlying data infrastructure. The pattern behind why they worked — narrow scope, real integration, clear handoff — is what is genuinely replicable at smaller scale, not the specific size or budget of the deployment itself.

**Why do 95 percent of AI pilots fail to show financial results, according to the MIT research cited?**
The research and subsequent industry analysis point primarily to two causes: pilots that remain isolated demonstrations never connected to real operational systems, and scope that is too broad or vague to produce a measurable outcome. The production examples in this article succeeded specifically by avoiding both of those traps.

**Should a small business wait until the technology matures further before considering this?**
Not necessarily — the technology underlying narrow, well-scoped agent deployments is genuinely mature today, as the real examples above demonstrate. The caution is less about waiting for better technology and more about avoiding the common failure pattern of starting with too broad a scope.

**How do we know if our business has "mature enough" data and systems for this?**
A reasonable test: if the task you want to automate currently requires a person to check multiple disconnected sources or rely on institutional memory to complete it, your data is not yet ready for autonomous agent handling of that specific task — that gap needs addressing first, independent of which AI tool you eventually choose.

**What's the realistic first step for a business our size?**
Identify one specific, high-volume, well-defined task — not an entire department — where the rules for handling it are genuinely clear enough to specify, and where you can define exactly when the system should hand off to a human. Start there, measure it properly, and expand only once it is genuinely working.

---

## Key Takeaways

AI agents are genuinely working in production at real, named companies — Klarna, JPMorgan, General Mills, Walmart, DHL, and Siemens all have publicly disclosed deployments with measurable outcomes, not vendor marketing claims.

At the same time, MIT research found 95 percent of generative AI pilots deliver no measurable financial result, and Gartner expects more than 40 percent of agentic AI projects to be cancelled by the end of 2027 — both of these facts are true at once, and the difference between success and failure follows a consistent, identifiable pattern.

That pattern — narrow scope, deep integration with real systems, and a clearly defined point where a human takes over — is what separates the real production deployments in this article from the pilots that quietly stall.

The lesson for a smaller business is not to replicate JPMorgan's scale, but to replicate the same underlying discipline at a scale that actually fits your operation.

If you're evaluating whether an AI agent genuinely fits a specific process in your business, [talk to us](/contact). We'll help you scope it narrowly and honestly, based on what's actually working in production right now, not what's being pitched in a demo.
