---
title: "Ransomware Explained: What Small Businesses Need to Know"
description: "In November 2022, ransomware took down AIIMS Delhi — India's premier hospital — for over two weeks, and even encrypted its backup server. Here's what actually happened, and the specific lesson every business should take from it."
date: "2026-07-19"
author: "SystemFriendly Labs"
tags: ["Security"]
charts: "RansomwareExplainedCharts"
---

On the morning of November 23, 2022, servers at AIIMS Delhi — India's most prominent government hospital, handling over 1.5 million outpatients a year — began failing. Within hours, the hospital's entire digital system was down: registration, billing, lab reports, appointment scheduling, all of it. For the next several days, staff ran the hospital on paper, the way it operated decades earlier, while investigators from Delhi Police, CERT-In, and the National Investigation Agency worked to understand what had happened.

It was ransomware, attributed to the LockBit group, with an alleged demand of roughly 200 crore rupees — about 24.5 million dollars — in cryptocurrency. The hospital's systems stayed down for more than two weeks. But the single detail from this incident worth remembering above all the others is this: when the recovery team first tried to restore data from the backup server, they found the backup server had also been compromised.

That detail is not a footnote. It is the entire lesson this article is built around.

---

## What Ransomware Actually Is

Ransomware is malicious software that encrypts a victim's files and systems, making them completely inaccessible, and then demands payment — typically in cryptocurrency — in exchange for the decryption key needed to restore access. It does not steal your data in the traditional sense; it locks you out of your own systems and holds the key hostage. Many modern ransomware operations add a second layer of pressure on top of this: before encrypting anything, they quietly copy sensitive data out first, then threaten to publish or sell it publicly if the ransom isn't paid — meaning even a business with genuinely solid backups can still face pressure to pay, specifically to prevent a data leak rather than to restore access.

The mechanism of how it gets in generally follows familiar paths — a successful phishing email, a stolen or guessed password on a system exposed to the internet, or an unpatched software vulnerability. Once inside, the software spreads through connected systems, seeking out and encrypting as much as it can reach — including, as the AIIMS case demonstrates directly, backup systems that are connected to the same network as everything else.

---

## Why the Backup Detail in the AIIMS Case Matters So Much

Most conventional security advice treats backups as the safety net — the thing that makes ransomware survivable even if prevention fails, since you can simply restore from a clean backup rather than pay. That advice is only true if the backup is genuinely protected from the same attack that compromised everything else.

Industry research on ransomware behaviour backs this up directly: one widely cited analysis found that 96 percent of ransomware attacks specifically target backup locations as part of the attack, precisely because attackers know a working, accessible backup is the one thing that eliminates their leverage. If your backup lives on the same network, accessible through the same credentials, as your primary systems, it is not meaningfully separate from what the ransomware is already attacking — it is simply another target on the same network, which is exactly what happened at AIIMS.

---

## What a Genuinely Resilient Backup Actually Looks Like

The security industry's standard answer to this is commonly called the 3-2-1 strategy: keep at least three copies of your data, on at least two different types of storage media, with at least one copy stored somewhere genuinely offline or physically separate from your main network. For a small or mid-sized business, implementing this properly is not typically a large expense — a real, tested version of this strategy is often achievable for a few hundred dollars a year, which is a genuinely small cost set against the alternative.

The word "tested" in that sentence matters as much as "offline." A backup that has never actually been restored is a backup you are assuming works, not one you know works — and the worst possible moment to discover a backup doesn't actually restore cleanly is during a real incident, under real pressure, with real money on the line.

---

## The Real, Current Numbers Worth Knowing

Ransomware economics have shifted measurably in recent years, and the direction of that shift is worth understanding. According to Verizon's 2025 Data Breach Investigations Report, the median ransom payment has actually dropped to around 115,000 dollars, down from roughly 150,000 dollars the year before. At the same time, the same research found that 64 percent of ransomware victims now refuse to pay entirely, up sharply from about half two years earlier — a meaningful shift toward businesses having genuine alternatives to paying, which is largely a function of more organisations having backups that actually work when tested.

This matters because it reframes the real decision a business ends up facing. Paying a ransom does not guarantee the decryption key actually works, does not undo the fact that your data may have already been copied and could still be leaked regardless of payment, and directly funds further attacks. A business with a genuinely tested, properly isolated backup has a real alternative path that does not depend on trusting a criminal organisation to hold up its end of an extortion demand.

---

## What to Actually Do Before an Attack, Not During One

**Build and genuinely test an isolated backup strategy**, following the 3-2-1 principle, with at least one copy an attacker who has breached your main network cannot also reach.

**Patch known vulnerabilities promptly.** A meaningful share of ransomware incidents exploit vulnerabilities that already had a published fix available — the gap between the fix existing and it being applied is exactly where these attacks land.

**Reduce how easily one compromised account can spread.** Limiting what any single set of credentials can access — rather than one login opening every system — slows down exactly the kind of network-wide spread that reached the AIIMS backup server.

**Have a written incident response plan specifically for ransomware**, covering who to contact, what to isolate immediately, and how you'll communicate with customers and staff — decided calmly in advance, not improvised during an active incident.

---

## What Ransomware Recovery Actually Looks Like Without a Backup

**Option one: pay, with no guarantee.** Even after payment, there is no enforceable guarantee the decryption key provided actually works, that all your data is genuinely restored, or that stolen data won't still be leaked or sold regardless.

**Option two: rebuild from scratch.** Without a usable backup, recovery can mean manually reconstructing critical records and systems — precisely the manual, paper-based operation AIIMS was forced into for over two weeks, at one of the best-resourced medical institutions in the country.

**Option three: restore from a genuinely isolated, tested backup.** This is the only option that does not depend on either paying a criminal organisation or losing meaningful data permanently — which is exactly why the backup strategy matters more than almost any other single defence against this specific threat.

---

## Ransomware Defence — Quick Reference

| Measure | What It Actually Does |
|---|---|
| 3-2-1 backup strategy, genuinely offline copy | Removes the attacker's core leverage — you can recover without paying |
| Regular backup restoration testing | Confirms the backup actually works before you're forced to rely on it |
| Prompt patching of known vulnerabilities | Closes the entry points ransomware most commonly exploits |
| Limited access per account | Slows the spread once a single account is compromised |
| Written incident response plan | Turns a chaotic first 24 hours into a calmer, faster recovery |

---

## Common Questions

**If we pay the ransom, will we definitely get our data back?**
No — there is no enforceable guarantee. Some victims who pay receive a working decryption key; others do not, or receive one that only partially works. Payment also does not undo the risk that stolen data is leaked or sold regardless, if the attacker had already copied it before encrypting.

**Is a cloud backup automatically safe from ransomware?**
Not automatically — if your cloud backup is continuously synced and accessible through the same credentials as your main systems, it can be encrypted along with everything else, the same underlying problem the AIIMS backup server experienced. A genuinely resilient cloud backup needs some form of isolation or version history that an attacker with access to your main systems cannot also destroy.

**How quickly does ransomware typically spread once it's inside a network?**
This varies, but industry research indicates ransomware is commonly deployed within days of initial access in a large share of incidents, meaning the time between an attacker getting in and the attack actually executing can be short — which is part of why prevention and rapid detection both matter, not just recovery planning.

**Is ransomware only a risk for large organisations like hospitals?**
No — small and mid-sized businesses are frequently targeted specifically because they typically have weaker defences and less formal backup discipline than large institutions, despite still holding data and access valuable enough to make the attack worthwhile for the attacker.

**What's the very first thing to do if we suspect an active ransomware attack right now?**
Disconnect affected systems from the network immediately to limit further spread, and contact your incident response plan's designated contacts — if you don't have a plan, prioritise isolating the affected systems and getting knowledgeable help involved as quickly as possible, rather than attempting to handle it alone under pressure.

---

## Key Takeaways

Ransomware encrypts a victim's systems and demands payment for the decryption key, and increasingly also threatens to leak stolen data regardless of whether the ransom is paid — meaning backups alone don't eliminate every form of pressure, but they remain the single most effective defence against losing access to your own systems.

The AIIMS Delhi attack in November 2022 is real, extensively documented, and contains the single most important lesson in this entire topic: the hospital's backup server was compromised in the same attack, because it was not genuinely isolated from the systems being attacked.

Real, current data shows ransom payments trending down and refusal-to-pay rates trending up — a shift substantially driven by more organisations having backups that are actually tested and genuinely isolated, not just assumed to work.

The 3-2-1 backup strategy — three copies, two storage types, one genuinely offline — is achievable for a small business at real, modest cost, and is the specific defence that would have changed the outcome of the AIIMS incident.

If you're trying to assess whether your business's current backup strategy would actually survive a real ransomware incident, [talk to us](/contact). We'll give you a straight, practical read — not after you need it, but before.
