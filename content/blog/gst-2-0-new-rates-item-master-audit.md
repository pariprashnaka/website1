---
title: "GST 2.0 Over a Year On: How to Audit Your Item Master and Billing Rates"
description: "GST moved to new slabs on 22 September 2025, with 12% and 28% removed. Here is how to check that your item master, invoices and stock rates are still right."
date: "2026-11-26"
author: "SystemFriendly Labs"
tags: ["GST & Tax"]
charts: "GstRatesCharts"
image: "/blog/gst.svg"
imageAlt: "Stepped bars showing GST slabs of 0, 5, 18 and 40 percent"
---

On 22 September 2025, following the GST Council's 56th meeting, India's GST structure changed. The 12% and 28% slabs were removed. Most goods and services moved to 5% or 18%, with 0% for some essentials and a new 40% rate for a short list of sin and luxury goods.

More than a year later, the question for a business owner is no longer "what changed?" It is "is every rate in my system still correct?" A single wrong rate on a fast-moving item can quietly distort invoices, input credit and margins for months.

## What changed, in one table

| Item | Rate before | Rate after |
|---|---|---|
| Butter, ghee, biscuits, juices, shampoo | 18% | 5% |
| Cheese, utensils, footwear and textiles | 12% | 5% |
| Paneer, UHT milk, chapati | 5% | 0% |
| Air conditioners, TVs, dishwashers, cement | 28% | 18% |
| Aerated and sugary drinks | 28% | 40% |

These are examples from Tally's published summary of the changes. The notified rate schedules are the final word for any specific product.

## Why old rates linger

Rates go wrong in three places:

- **The item master.** Each product carries an HSN code and a rate. If the rate was edited by hand rather than driven by the code, some items escape the update.
- **Price lists and bundles.** A combo of items at different old rates may now straddle two new rates, and the invoice split has to follow.
- **Purchase side.** Supplier invoices now carry new rates, so the input credit you expect on stock bought before and after the change may not match your assumptions.

## A practical audit

1. **Export your item master** with HSN code, rate and last-edited date.
2. **Sort by HSN, not by name.** Items with the same code should have the same rate. Any mismatch is a bug.
3. **Check the high-volume lines first.** Your top 50 sellers carry most of the risk.
4. **Compare a sample of sales and purchase invoices** from before and after 22 September 2025 against the notified rates.
5. **Review price lists.** Where prices are tax-inclusive, a rate cut changes your margin unless you reprice.
6. **Reconcile with GSTR-2B** so the credit you claim matches what suppliers filed.

## Where software helps

Rate updates are exactly the kind of change that spreadsheets and manual billing miss. A GST-aware system computes CGST, SGST and IGST on every invoice and updates payables as goods are received, so a rate is maintained in one place instead of on every bill. That is the approach of the [SF Inventory System](/products/sf-inventory-system).

## Frequently asked questions

**What are the GST slabs now?**
The standard rates are 5% and 18%, with 0% for certain essentials and 40% for a short list of sin and luxury goods. The 12% and 28% slabs were removed.

**When did the new rates start?**
On 22 September 2025.

**Did soft drinks get cheaper?**
No. Aerated, caffeinated and sugar-added drinks moved from 28% to 40%.

**What should I check first?**
Your highest-selling items, matched by HSN code, against the notified rate schedule.

## Sources

- [Tally Solutions — New GST rates effective 22 September 2025](https://tallysolutions.com/gst/new-gst-rates-september-2025-business-impact/)
- [EY India — GST Council announces major rate rationalisation](https://www.ey.com/en_in/technical/alerts-hub/2025/09/gst-council-announces-major-rate-rationalization-and-trade-facilitation-measures)
- [Press Information Bureau — GST rate reforms](https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/sep/doc202594628401.pdf)

*This article is general information, not tax advice. Rates depend on the exact product and HSN code. Verify against the official notifications or with your chartered accountant.*
