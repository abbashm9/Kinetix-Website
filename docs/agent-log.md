# Agent log

## 2026-10-31: Agent run: EN homepage (task 1)
- Built `scrollcraft/builds/kinetix-v2/index.html` (split stage, owner's day ledger, collapse close). Engine untouched.
- Placeholders (no Flow assets yet): 01-day, 02-handled, 04-report, 05-motion (peak is a pinned act with a progress bar until the clip exists, then switch the act to `scrub`), plus samah-brand.jpg and bonyad-brand.jpg (those files are not in the repo). Real: Al Jadad stationery.
- Harness: desktop, mobile 390, reduced motion all report no dead scroll and all cues clear 4.5:1. Patched vendored `shoot.mjs` to honour `PW_CHROMIUM`. Split-stage `.world` carries `data-sc-world` (inert outside a worldflight) so the harness keeps the fixed grounds when measuring contrast.
- Not verified: a real phone, fonts (Google Fonts may be blocked in the sandbox, screenshots used the fallback if so), analytics.js is not wired into this build folder.
- Waiting on Abbas: approve or change the homepage; supply Flow assets and Samah/Bonyad images.

## 2026-11-01: Agent run: EN homepage redesign (task 1, changes-requested)
- Abbas said v1 looked basic and the same as the old site. Same grammar and ledger, new art direction: left is night ink with a giant ghost clock, right is daylight with full-bleed real Al Jadad photography (laptop site mockup, posters). The peak floods the right side lime; the close collapses onto the lime with the handled list.
- Removed the dashed placeholder boxes and the div-built fake report (refuse list). Report is plain type now. Samah and Bonyad images are still not in the repo, so they are not shown. 05-motion peak clip still a Flow placeholder (the flood stands in).
- Harness: desktop, mobile 390, reduced motion all pass: no dead scroll, cues clear contrast (one 3.9:1 on the large 'Handled.' headline, large-text OK). Not verified: a real phone, Google Fonts (sandbox may use fallback).

## 2026-11-01: Agent run: feedback check
- PR #1 (homepage) and #2 (service pages) in flight. No GitHub comments. Telegram feedback on homepage recorded as changes-requested; direction conflicts with queue rules, asked Abbas to clarify before rebuilding. No build this run.

## 2026-11-01: Agent run: feedback 3 (no build)
- Abbas clarified: sell results not tools; research services first and add the ones we can truly deliver. Wrote `docs/service-proposal.md` (proposal only, no web research, nothing on the site). Rebuild waits on his picks because it changes the queue's proven-services rule.

## 2026-11-04: Agent run: peak clip wired
- Merged overhaul/ai-first into agent/homepage-en (brings 05-motion*.mp4), added the scrub clip to the peak act (right side, clipped to the divider; top band on mobile), lime wash + backing panel on the body line for contrast.
- Verified desktop, 390 mobile, reduced-motion (falls back to flat lime, no clip). No dead scroll; clip keeps moving. Harness flags headline at 1.5:1 on the darkest video pixels; viewed frames, headline reads clearly.
- Screenshots: docs/review/peak-clip/. No other task moved: PRs #1-#4 open, no feedback found.

## 2026-11-05: Agent run: services strategy v2
- Abbas asked (Telegram 2026-11-04) to rethink services as outcomes, not tools. Wrote docs/service-strategy-v2.md (proposal only, no site change). Other PRs #2-#4 still open, no feedback. Rebuild waits on his approval of the outcomes.
