---
title: "What Is Phishing, and How Can Your Business Avoid It?"
description: "Phishing is the leading cause of small business data breaches — accounting for a third of all incidents, according to breach data. Here's exactly how it works, and the specific patterns that give it away."
date: "2026-07-19"
author: "Nexora Systems"
tags: ["Security"]
charts: "PhishingExplainedCharts"
---

Phishing is the single most common way small businesses actually get breached — it accounts for roughly a third of all reported small business data breaches, more than any other attack type, according to breach data compiled from real incident reports. It is also, mechanically, one of the simplest attacks to understand once someone actually explains it properly — which is exactly why understanding the mechanism, not just the warning signs, makes such a large practical difference.

---

## What Phishing Actually Is

Phishing is an attempt to trick someone into handing over sensitive information — a password, banking details, access to a system — by impersonating someone or something trustworthy, usually through email. The name is a deliberate pun on "fishing": the attacker casts out a message, often to many people at once, and waits to see who takes the bait.

The mechanism does not rely on breaking through technical security. It relies on convincing a person to voluntarily do something that bypasses that security entirely — clicking a link that leads to a fake login page, opening an attachment that installs malicious software, or simply replying with the requested information directly. This is precisely why phishing remains so effective even as technical defences improve: it targets human judgment under time pressure, not a technical vulnerability a firewall can block.

---

## Why Small Businesses Specifically Are Targeted This Way

Verizon's Data Breach Investigations Report found that small businesses receive targeted malicious email at a higher rate than any other organisation size category — roughly one in every 323 emails sent to a small business is a targeted attack. This is not a coincidence of small businesses being easier to find; it reflects a specific, deliberate targeting pattern.

Small businesses frequently rely on email to authorise real transactions — approving a vendor payment, confirming a bank detail change, signing off on a purchase — without the layered, formal verification process a larger organisation might have. That exact trust pattern is what a specific, more targeted form of phishing called business email compromise is built to exploit: an email that looks like it comes from a real supplier, a real colleague, or a real executive, asking for something that looks like a completely normal business request.

---

## The Different Shapes Phishing Actually Takes

**Broad, untargeted phishing.** The same generic message sent to thousands of addresses at once — a fake delivery notification, a fake account security alert — relying purely on volume, since even a very low response rate across a large enough number of attempts produces real results for the attacker.

**Spear phishing.** A targeted version aimed at a specific person, using real, researched details — your actual name, your actual company, sometimes even the name of a real colleague or vendor — to make the message far more convincing than a generic attempt.

**Business email compromise.** A specific, financially-focused variant where the attacker impersonates a real business relationship — a supplier requesting updated payment details, an executive requesting an urgent transfer — timed and worded to create pressure that discourages the normal pause-and-verify step.

**Smishing and vishing.** The same underlying deception delivered by text message or phone call instead of email, exploiting the same trust and urgency mechanisms through a different channel.

---

## The Patterns That Actually Give Phishing Away

**Urgency that discourages verification.** A message insisting on immediate action — before you have time to call and confirm — is a deliberate design choice, not a coincidence. Legitimate requests involving money or sensitive access can almost always tolerate a two-minute phone call to verify first.

**A sender address that looks almost right, but isn't quite.** A close misspelling of a real domain, or a display name that says one thing while the actual email address underneath says another, is one of the most reliable technical tells — checking the actual address, not just the name shown, catches a large share of attempts.

**A request that doesn't match how this normally happens.** If a vendor who has always invoiced through one specific process suddenly asks for payment through a different method, or a colleague who never emails about banking details suddenly does, the deviation from the normal pattern is itself the warning sign.

**Links that don't go where the text claims.** Hovering over a link before clicking — without clicking — reveals the actual destination, which frequently does not match the domain the message claims to be from.

**Generic greetings on a message claiming to be personal.** A message claiming urgent, personal relevance that opens with "Dear Customer" rather than your actual name is a real, if imperfect, signal that it was sent at scale rather than genuinely written for you.

---

## What Actually Reduces Phishing Risk in Practice

**A verification habit for anything involving money or access, independent of how convincing the message looks.** A short phone call to a known, previously-verified number — not a number provided in the suspicious message itself — catches business email compromise attempts that are otherwise extremely difficult to distinguish from the real thing by reading alone.

**Regular, realistic phishing awareness training**, ideally including simulated phishing tests rather than a single one-time presentation, since recognising these patterns is a skill that fades without practice.

**Multi-factor authentication**, so that even if a password is successfully phished, it alone is not enough to grant access.

**A clear, blame-free internal process for reporting a suspected phishing attempt**, so employees who click something they shouldn't report it immediately rather than staying quiet out of embarrassment — the speed of reporting often matters more than preventing every single click.

---

## Phishing Types — Quick Reference

| Type | Target | Delivery | Primary Defence |
|---|---|---|---|
| Broad phishing | Mass, untargeted | Email | Basic awareness, spam filtering |
| Spear phishing | Specific individual | Email | Verification habit, awareness training |
| Business email compromise | Financial transactions | Email | Independent phone verification |
| Smishing / Vishing | Individuals | SMS / phone call | Same verification habit, different channel |

---

## Case Study: A Manufacturing Business in Coimbatore

A precision components manufacturer in Coimbatore, mid-sized team, working with several long-standing overseas raw material suppliers.

**The situation.** An email arrived that appeared to come from an existing, trusted supplier's accounts team, requesting that future payments be redirected to a new bank account due to what it described as an internal banking transition.

**What happened.** The finance team member handling the request noticed the sender's actual email address was subtly different from the supplier's genuine domain — a single character substitution easy to miss at a glance but confirmable on close inspection.

**The verification.** Rather than replying to the email to confirm — which would have gone directly back to the attacker — the team called the supplier's accounts contact directly, using the phone number already on file from previous genuine correspondence, not any number included in the suspicious email.

**The outcome.** The supplier confirmed no such banking change had been requested. The email was a business email compromise attempt, and the redirected payment — a substantial sum — was never sent.

**The lesson.** The catch depended on two specific habits: checking the actual sender address rather than just the display name, and verifying through an independently sourced contact method rather than anything provided in the message itself.

---

## Common Questions

**Is phishing only a problem over email?**
Email remains the most common channel, but the same underlying technique — impersonation plus urgency — appears over text message (smishing) and phone calls (vishing) as well. The defence is the same regardless of channel: verify independently before acting.

**Can good spam filtering alone solve this?**
Spam filtering meaningfully reduces the volume that reaches an inbox, but it cannot catch everything, particularly well-crafted spear phishing and business email compromise attempts that are specifically designed to look legitimate. Technical filtering and human awareness need to work together.

**Why do phishing attacks still work on people who know what phishing is?**
Because the technique specifically exploits urgency and time pressure to short-circuit careful thought, not a genuine lack of knowledge. Even well-informed people can be caught by a well-timed, well-crafted attempt when they are moving quickly — which is exactly why a consistent verification habit matters more than knowledge alone.

**What should an employee do if they think they've already clicked something malicious?**
Report it immediately to whoever manages your systems, without worrying about looking careless — the speed of reporting significantly affects how much damage can be contained, and a blame-free reporting culture is what actually gets people to report quickly rather than staying quiet.

**Is business email compromise really different from regular phishing?**
Yes, meaningfully — while regular phishing often aims to steal login credentials broadly, business email compromise is specifically financially targeted, impersonating a real business relationship to redirect an actual payment, and tends to be more carefully researched and harder to distinguish from a genuine request.

---

## Key Takeaways

Phishing is the leading cause of small business data breaches, accounting for roughly a third of all reported incidents — more than any other single attack type — and it works by exploiting human trust and urgency rather than breaking technical defences directly.

Small businesses are specifically targeted at a higher rate than larger organisations, receiving malicious email at roughly one in every 323 messages, in part because they frequently authorise real transactions over email without the layered verification larger organisations use.

The most reliable defence is not just recognising warning signs in a message — it's a consistent habit of verifying anything involving money or access through an independently sourced contact method, never through the contact details provided in the suspicious message itself.

If you're trying to reduce phishing risk in your business, particularly around anything touching payments or sensitive data, [talk to us](/contact). We can help you think through practical, low-cost defences that actually match how your team really works.
