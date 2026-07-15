---
title: "Batch and Expiry Tracking Software for Pharma and FMCG Distributors"
description: "Batch and expiry tracking is a compliance requirement, not a nice-to-have, for pharmaceutical and FMCG distributors. Here's what genuine tracking software needs to do and where manual systems fail."
date: "2026-07-16"
author: "Nexora Systems"
tags: ["ERP Solutions", "Business Automation"]
charts: "BatchExpiryCharts"
---

For pharmaceutical and FMCG distributors, batch and expiry tracking is not an optional inventory feature — it is a regulatory and safety requirement with real consequences for getting it wrong, ranging from regulatory penalties to genuinely dangerous outcomes if expired stock reaches a customer.

Despite this, a meaningful number of distributors in this space still manage batch and expiry data through spreadsheets or the memory of a warehouse supervisor. This article covers what proper batch and expiry tracking software actually needs to do, the specific failure patterns that cause real problems, and how to evaluate whether your current system genuinely meets the requirement or just appears to.

---

## Why This Is Different From Standard Inventory Tracking

Standard inventory tracking answers one question: how many units of a product do we have. Batch tracking answers a more specific question: of the units we have, which batch did each one come from, when was it manufactured, when does it expire, and — critically — can we trace every unit that left our warehouse back to its source batch if a recall or quality issue arises.

This last capability, traceability, is the part that distinguishes genuine batch tracking software from inventory software that simply has a batch number field. A field that stores a batch number is not the same as a system that can answer, instantly, which customers received units from a specific batch if that batch needs to be recalled.

---

## What Genuine Batch and Expiry Tracking Requires

### Batch-Level Stock Segregation

Stock of the same product from different batches needs to be tracked as distinct entities within the system, not pooled into a single count. This matters because different batches have different expiry dates, and the system needs to know exactly how many units of each specific batch remain.

### First-Expiry-First-Out Enforcement

The system should actively guide dispatch decisions toward the batch with the nearest expiry date, rather than leaving this to a warehouse worker's memory or a manual check. This is one of the most operationally valuable features, because it directly reduces expired stock write-offs.

### Expiry Alerts With Meaningful Lead Time

Alerts for approaching expiry need to fire with enough lead time to actually act — reroute stock to a faster-moving channel, offer a promotional discount, or return to supplier where applicable — not a last-minute notification when the stock is already unsellable.

### Full Forward and Backward Traceability

Given a batch number, the system should be able to show every customer who received units from that batch. Given a customer's order, the system should be able to show which batch or batches fulfilled it. This bidirectional traceability is what makes a genuine recall process possible.

### Batch-Specific Documentation

For pharmaceutical distributors specifically, batch records often need to be linked to specific compliance documentation — certificates of analysis, manufacturer batch records — accessible at the batch level, not stored separately and manually cross-referenced.

### Automatic Expiry-Based Stock Blocking

Expired stock should be automatically prevented from being included in available-to-sell counts and blocked from dispatch, rather than relying on a human to notice and manually exclude it.

---

## Where Manual and Basic Systems Fail

**Expiry tracked in a separate spreadsheet from stock counts.** When expiry data lives outside the core inventory system, it inevitably falls out of sync — a spreadsheet updated weekly cannot reflect a system where stock moves daily.

**No enforcement of first-expiry-first-out.** Even when expiry dates are recorded, if dispatch does not actively prioritise older batches, warehouse staff working quickly under normal pressure will often pick whatever is most accessible rather than what expires soonest.

**Traceability that requires manual investigation.** If answering "which customers received batch X" requires someone to manually search through paper or spreadsheet records, a recall response that should take hours can take days — a meaningfully worse outcome in a genuine safety situation.

**Expiry alerts that fire too late to act on.** An alert generated a week before expiry gives almost no room to do anything productive with soon-to-expire stock. Genuine systems configure alert lead time based on how long it realistically takes to act — weeks or months depending on the product category.

---

## Compliance Context for Indian Distributors

Pharmaceutical distributors in India operate under Drugs and Cosmetics Rules requiring specific record-keeping for batch traceability, and state drug licensing authorities can audit these records. FMCG distributors, while regulated less stringently for individual batch traceability, face significant commercial risk from expired stock reaching retail shelves, along with FSSAI requirements around food safety for the FMCG food category specifically.

The regulatory floor differs by category, but the operational case for proper batch tracking is strong regardless — expired stock write-offs are a direct, measurable cost that batch tracking software genuinely reduces.

---

## Case Study: A Pharmaceutical Sub-Distributor in Kanpur

A pharmaceutical sub-distributor in Kanpur supplying to approximately 400 retail pharmacies, team of 18, warehouse handling roughly 1,200 SKUs across multiple manufacturers.

**The problem.** Batch and expiry data was recorded at goods receipt in a spreadsheet, cross-referenced manually against the inventory system's plain stock count during dispatch. This created two specific recurring issues: dispatch staff occasionally sent older stock alongside newer stock without a systematic check, and a genuine recall notice from one manufacturer required three full days of manual spreadsheet searching to identify which pharmacies had received the affected batch.

**The fix.** A custom batch tracking layer was built into their existing inventory system, enforcing first-expiry-first-out at the point of dispatch, with full batch-to-customer traceability queryable instantly rather than requiring manual search. Expiry alerts were configured with a 90-day lead time for their typical product mix, giving genuine time to act on slow-moving stock approaching expiry.

**The outcome.** Expired stock write-offs dropped significantly in the first two quarters after implementation, attributed directly to consistent first-expiry-first-out dispatch. A subsequent recall event was resolved in under two hours of system query time rather than days of manual investigation — a meaningfully different outcome both operationally and in terms of regulatory responsiveness.

**The cost.** The batch tracking implementation was in the Rs 5 to 7 lakh range, built as an addition to their existing inventory system rather than a full replacement, with an eight-week implementation timeline.

---

## Common Questions

**Is batch tracking legally required, or just good practice?**
For pharmaceutical distributors, batch record-keeping is a regulatory requirement under Drugs and Cosmetics Rules, subject to audit by state drug licensing authorities. For FMCG distributors, the direct legal requirement is less stringent for most product categories, but FSSAI compliance for food products has its own traceability expectations, and the commercial risk of expired stock reaching shelves is significant regardless of the regulatory floor.

**Can we add batch tracking to our existing system, or do we need to replace it?**
In many cases, batch tracking can be added as a layer on top of an existing inventory system rather than requiring full replacement, particularly if the existing system's core stock management is otherwise working well. The case study above is an example of this approach.

**How much lead time should expiry alerts have?**
This depends on your specific product category and how long it realistically takes to act on soon-to-expire stock — reroute it, discount it, or return it to the supplier where applicable. Fast-moving categories may need only a few weeks of lead time; slower-moving or seasonal categories often need several months.

**What does genuine traceability actually require technically?**
At minimum, every dispatch transaction needs to record which specific batch or batches fulfilled it, linked to the customer record. Querying in the reverse direction — given a batch, list every customer who received it — needs to be a direct database query, not a manual cross-reference process.

**Does this apply to smaller distributors, or only larger operations?**
The regulatory requirements and safety considerations apply regardless of distributor size. Smaller distributors sometimes assume batch tracking is only necessary at larger scale, but a recall event or compliance audit does not scale down its requirements based on business size.

---

## Key Takeaways

Batch and expiry tracking for pharmaceutical and FMCG distributors is a regulatory and safety requirement, not an optional inventory feature. Genuine tracking requires batch-level stock segregation, enforced first-expiry-first-out dispatch, meaningful-lead-time expiry alerts, and full bidirectional traceability between batches and customers.

Manual and basic systems fail specifically at traceability speed and dispatch enforcement — the parts that matter most in an actual recall or compliance audit situation.

Batch tracking can often be added to an existing inventory system as a targeted layer rather than requiring a full replacement, particularly when the underlying stock management is otherwise sound.

If you're evaluating whether your current batch and expiry tracking would genuinely hold up under a recall or compliance audit, [talk to us](/contact). We'll help you assess the gap honestly and work out what level of investment actually closes it.
