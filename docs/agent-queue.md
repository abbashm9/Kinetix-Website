# Agent queue — Kinetix website v2

The scheduled cloud build agent works from this file. Top-down: take the first task marked
`todo` (or `changes-requested`), finish it, update its status here, commit.

Spec: `scrollcraft/builds/kinetix-v2/BRIEF.md`. Visual asset brief: `scrollcraft/builds/kinetix-v2/FLOW-BRIEF.md`.
Skill method: scroll-craft (split-stage grammar, signature "owner's day" ledger). Read `CLAUDE.md` in repo root.

Statuses: `todo` → `in-progress` → `awaiting-approval` (PR open, Abbas pinged) → `approved` (merged by Abbas) / `changes-requested` (feedback in the Feedback line) / `blocked` (says on what).

## Rules that never change

- Work on `agent/<task-slug>` branches cut from `overhaul/ai-first`. PR into `overhaul/ai-first`. **Never push to `main`, never merge your own PR.** `main` is production on Vercel.
- Every visual change needs Abbas's approval on real screenshots (desktop 1440 + mobile 390) sent to Telegram. Never ask him to review markdown.
- Services listed = proven only: Content Engine, Meta ads management, brand identity, websites, AI-powered monthly reporting, AI Inbox Assistant **(pilot)**. Never mention AI employees, Noor, WhatsApp bots, booking automation, cyber security.
- No prices on the homepage or service pages. Prices only in articles, from the table below.
- No invented numbers. No stat counters, no "50+ brands", no ROI claims, no star ratings.
- Market: GCC, Saudi Arabia first. Don't headline Kuwait.
- No em dashes in visible copy. Kinetix wordmark is Outfit 800, no period; icon OR wordmark, never both.
- Arabic: Gulf-neutral white Arabic readable in Riyadh. Read `docs/arabic-rules.md` before writing any Arabic line. Check verb gender on every line.
- No text baked into images. All words in real markup.
- Missing Flow assets → use a neutral placeholder block with the asset filename on it, and keep going. Never generate substitute imagery.
- Vendors / partnerships line: abbas@kinetixkw.com. Client CTA: the existing WhatsApp link (analytics.js prefills it, don't hardcode text).

## Article prices (KWD, +50% on the Sept draft; articles only)

| Package | Price |
|---|---|
| Presence (12-15 posts/mo, captions, design, report) | from 420/mo |
| Growth (Presence + Meta ads management + full report) | from 675/mo |
| Growth + SEO | **pending Abbas** — leave out until decided |
| Content Engine add-on (25-30 posts/mo, video-heavy) | +270/mo |
| Brand identity | from 525 |
| Brand identity + website | from 1,050 |
| Website only | from 675 |
| Meta ads management, standalone | from 225/mo |

Show SAR equivalents next to KWD in any KSA-facing article (1 KWD ≈ 12.2 SAR; round to nearest 50).

## Tasks

1. **EN homepage, structure + copy + signature move** — `awaiting-approval` (PR `agent/homepage-en` into `overhaul/ai-first`, screenshots in `docs/review/homepage-en/`)
   Build `scrollcraft/builds/kinetix-v2/index.html` per BRIEF.md: 6 acts, split-stage grammar, divider as chrome, "owner's day" clock + handled ledger, collapse close. Real copy, placeholders for Flow assets. Run scroll-craft Step 5 harness (desktop, mobile, reduced-motion). Approval needed: yes (contact sheet + 6 act screenshots).
   Feedback: —

2. **Swap in Flow assets** — `blocked` (on Abbas generating the assets from FLOW-BRIEF.md into `scrollcraft/builds/kinetix-v2/raw/`)
   Encode with scroll-craft `encode.sh` (desktop + mobile), downscale stills, re-run harness. Approval needed: yes.

3. **AR homepage (`/ar/`, RTL)** — `todo` (after 1 is approved)
   Same structure mirrored for RTL; the divider and collapse direction flip. hreflang pair both ways. Approval needed: yes.

4. **Service pages rewrite** — `todo`
   Rewrite to proven services only, EN + AR: content-engine, meta-ads, brand-identity, web-development, ai-reporting, ai-inbox-assistant (pilot label). Each: problem in the owner's words → what we deliver → real proof (Samah / Bonyad / Al Jadad site) → WhatsApp CTA. Old pages not on this list (cyber-security, photography, google-business, seo, social-media, paid-advertising, ai-automation): list them in the PR with a proposed 308 redirect target each; **don't delete or redirect until Abbas approves**. Approval needed: yes.

5. **Pricing article (EN + AR)** — `todo`
   "How much does a marketing agency cost in Saudi Arabia and the GCC (2026)", using the price table above, with FAQ section + FAQPage schema. Link from website-cost-kuwait article. Approval needed: yes.

6. **Three cost articles (EN + AR)** — `todo`
   Social media management cost GCC; brand identity cost GCC; website cost Saudi Arabia. Same format as website-cost-kuwait.html (the page ChatGPT cites). FAQ + schema each. Approval needed: yes.

7. **llms.txt, schema, sitemap, hreflang** — `todo` (after 4)
   Rewrite llms.txt around the proven menu + GCC/KSA. Organization/ProfessionalService schema areaServed = SA, KW, AE, QA, BH, OM. Remove old stats from content.json. Add every new page to sitemap.xml. Approval needed: no (text-only, but list the diff in the PR).

8. **AI Inbox Assistant pilot widget** — `blocked` (on Abbas approving an LLM API key in Vercel env + monthly spend cap)
   Website chat widget answering only from `docs/kinetix-faq.md`, forwarding real leads to WhatsApp/email, vendors to abbas@kinetixkw.com. Vercel serverless function. Approval needed: yes.

## Abbas-only (agent can't do these)

- Generate Flow assets (task 2).
- Bing Webmaster Tools: add kinetixkw.com, submit sitemap, enable IndexNow.
- Decide Growth + SEO tier (rename + ~900 KWD recommended).
- Final merge of `overhaul/ai-first` → `main` (= going live).
