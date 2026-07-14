---
title: "Why We Moved a Client Off Netlify's Free Tier — And What Actually Broke"
description: "Bandwidth limits on free hosting tiers catch growing sites off guard. Here's what migrating a live production site to Cloudflare Workers actually involved, including the parts that weren't in the tutorial."
date: "2026-06-15"
author: "Nexora Systems"
tags: ["Cloud Engineering", "Web Development"]
---

Most guides on migrating hosting providers assume you're doing it before launch, on a blank project, with no traffic and no risk. That's not the situation most small businesses are actually in. More often, a site has been live for months, has real visitors, real leads coming through a contact form, and a bandwidth cap that's suddenly closer than anyone expected.

That was the actual starting point for a recent migration: a React-based business site on Netlify's free tier, serving product pages, blog content, and a contact form actively generating leads. The free tier's bandwidth ceiling wasn't a hypothetical anymore — it was a live constraint on a site that couldn't afford downtime.

## The real requirements weren't just "move the files"

On paper, migrating a static React site sounds simple: build it, upload it somewhere else, point the domain there. In practice, three things had to survive the move without a single day of disruption:

- **Client-side routing.** The site used React Router with clean URLs like `/about` and `/blog`. Plenty of hosts serve a single `index.html` correctly for the root but 404 on direct navigation to a sub-route unless you configure it explicitly.
- **SEO signals already in place.** Meta tags, Open Graph data, a sitemap, and search rankings that had taken months to build. A sloppy migration resets all of that.
- **Zero downtime during DNS cutover.** The business was actively getting inquiries through the site. Even a few hours of a broken contact form has a real cost.

## What Cloudflare Workers actually solved

The move landed on Cloudflare Workers rather than another static host, mainly for two reasons: no bandwidth ceiling to worry about again, and DNS-level control that made the cutover safer to stage gradually rather than all at once.

The practical steps looked like this:

1. Deploy the existing build to a `workers.dev` subdomain first, fully separate from the live domain, and verify every route worked — including direct navigation to deep links, not just clicking through from the homepage.
2. Confirm the contact form, analytics, and any third-party scripts still fired correctly on the new host before touching DNS at all.
3. Only then repoint the custom domain, understanding that DNS propagation isn't instant — it can take anywhere from thirty minutes to 48 hours depending on the resolver, which means there's a window where some visitors hit the old host and some hit the new one.
4. Keep the old host's deployment untouched during that window as a fallback, rather than tearing it down immediately.

## What we'd tell you before you do this yourself

If you're running a small business site on a free hosting tier and started worrying about bandwidth limits, the honest advice is: don't wait until you hit the cap to plan the move. Bandwidth overages on free tiers tend to mean the site simply stops serving requests, not a graceful warning email a week in advance.

And if client-side routing is involved, test every route directly — not just by clicking through the site — before you consider the migration done. That's the step that's easy to skip and the one most likely to quietly break something a visitor finds before you do.

---

*If you're on a growth-stage business site and outgrowing your current hosting, [we can walk through what a safe migration actually looks like](/contact).*
