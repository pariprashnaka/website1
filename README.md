# SystemFriendly Labs — website1

Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 + Framer Motion.

## Setup on your Mac

```bash
cd ~/Documents/website1
npm install
npm run dev
```

Then open http://localhost:3000

## Structure

- `app/` — routes (App Router). Each folder under `app/` is a page: `/`, `/services`, `/products`, `/case-studies`, `/about`, `/contact`.
- `app/api/contact/route.ts` — handles the contact form POST. Currently logs to console and returns success — wire this up to a real email service (Resend, SendGrid) or CRM webhook before going live.
- `components/` — all reusable UI pieces (Nav, Footer, ContactForm, ServiceIcon, NetworkCanvas, etc.)
- `lib/content.ts` — all site copy (services, case studies, products, testimonials, FAQs) lives here as typed data. Edit this file to update content without touching component code.
- `app/globals.css` — design tokens (colors, the panel/chip/btn utility classes) ported from the original HTML prototype.
- `app/sitemap.ts` / `app/robots.ts` — auto-generated sitemap.xml and robots.txt via Next.js conventions.

## Before deploying

1. Replace the placeholder domain `systemfriendly.com` in `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts` with your real domain.
2. Wire `app/api/contact/route.ts` to an actual email/CRM service.
3. Replace the CSS placeholder art in case studies/products (`.case-image`, `.product-visual`) with real screenshots — swap the div for a Next.js `<Image>` component.
4. Fill in real social links in `components/Footer.tsx` and `components/Nav.tsx`.
5. Update testimonials in `lib/content.ts` once you have client approval — they're currently marked "PENDING CLIENT APPROVAL".

## Deploying

This is a standard Next.js app — deploys cleanly to Vercel (`vercel deploy`) or any Node hosting that supports Next.js.
