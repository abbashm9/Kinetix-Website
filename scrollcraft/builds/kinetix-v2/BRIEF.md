# Kinetix v2 — homepage overhaul brief

Interviewed 2026-10-29 (Abbas, in chat). Answers verbatim where given; Q4 and Q7 delegated.

## Interview answers

1. **Vibe:** "apple vibe for website very chick techy"
2. **Journey:** "first relibale partner, creative services tools, last great opportunity to enhance business"
3. **Energy:** "when we talk about our experties should calm but when we talk about potentials results should intense"
4. **Feeling / one moment:** "i explained this in my previous answers" → derived from Q5: the visitor should feel *understood*. Peak = the moment their own daily problem is named back to them, then solved in one plain line.
5. **Signature seed:** "being clear, talking about real issues business oweners face on daily basis approchable solutions, giving feeling we understand them"
6. **Aesthetic:** "apple style" → premium-minimal, explicitly asked for. Light canvas (Apple product-page white/near-white), not the dark-with-one-accent default.
7. **Structure:** "you choose" → distinct scenes (see grammar).
8. **Assets:** "nothing excepts aljadad website, samah other branding project we did files in branding folder" → real: Al Jadad site screenshots, Samah Shamsaldeen + Bonyad brand packages (logos, mockups, guidelines). Everything else generated in Google Flow from the Flow brief (`FLOW-BRIEF.md`).
9. **Language:** bilingual EN + AR at launch. `/` English, `/ar/` Arabic (RTL), hreflang pair.

## Hard constraints (from AIOS decisions, not the interview)

- Market: GCC, KSA in particular. Kuwait-based is a fact, not the headline.
- Services listed = proven only: Content Engine, Meta ads management, brand identity, websites, AI-powered monthly reporting, plus **AI Inbox Assistant (pilot)** — see below.
- No prices on the homepage. Prices live only in articles (+50% table, `decisions/log.md` 2026-10-29).
- No invented stats. The old +312% ROI / 50+ brands / 5.0 rating go. No counter without a real number.
- Vendors → abbas@kinetixkw.com. Clients → WhatsApp (prefilled opener already shipped).
- Brand: Kinetix wordmark Outfit 800, no period; icon OR wordmark, never both.
- Arabic copy: dialect guide read before every Arabic line; Gulf-neutral white Arabic for KSA readers, not heavy Kuwaiti.

## AI service — the simpler version (Abbas, 2026-10-29)

Full "AI employee" (Noor) stays off: needs client WhatsApp numbers, lead-form access, booking, per-message billing, never run live.
Listed instead: **AI Inbox Assistant** — answers the questions a business gets every day (prices, hours, location, services) from the client's own FAQ, on a **website chat widget**, and forwards real leads to the owner's WhatsApp/email. One integration (an embed script). No WhatsApp API, no Meta App Review, no booking, no client credentials. Runs on Kinetix's own site first as the live proof; labelled "pilot" until it does.

## Grammar: Split stage (2.7)

The interview's own spine is a two-sided argument: *what the owner deals with every day* vs. *what it looks like handled*. Q5 (real daily issues, approachable solutions) is a comparison. Split stage is the only grammar where the comparison IS the page.

Why the other seven lost:
- Filmic one-shot: one continuous film can't hold "problem left, fix right" side by side; also the default every prior build used.
- Chaptered editorial: long-form reading; Apple product pages are the opposite, short lines and big space.
- Live surface: needs a real working product to operate; the AI assistant isn't live yet, faking it breaks the honesty rule.
- Continuous world: for physical journeys; agency services have no geography.
- Typographic poster: works for one manifesto line; we need to show work (Samah, Bonyad, Al Jadad).
- Gallery / catalog: three real projects isn't a range; it would look thin.
- Rhythmic cutlist: energy/streetwear; contradicts "calm about expertise."

## Signature move: "The owner's day" ledger

Left column carries a running **day clock** (08:12 → 23:40) of real owner problems, one per act: "08:12 Nobody replied to the DM from last night." / "14:30 Ads are running. Nobody knows if they work." Right column answers each in one plain line with the actual deliverable. As the visitor scrolls, each solved problem gets struck through on the left and **stamped as a line in a small fixed "handled today" list** at the right edge. At the close the divider collapses left, the problems column folds away, and the list of handled items is what's left: their day, handled. Bespoke JS in the page, driven off `--sc-p`. No numbers invented: it lists tasks, not stats.

## Journey (Abbas's order)

1. **Reliable partner** — calm. Who we are in one line, real work behind it.
2. **Creative services + tools** — calm. What we do, each service as a problem/fix pair.
3. **The opportunity** — intense. What the business looks like with it handled.

## Feeling curve

1. **Recognition** — hero split 50/50: left "Your day", right "Handled." Both readable at once. The visitor sees their own morning on the left.
2. **Trust** — calm. Real brand work (Samah, Bonyad) revealed on the right as the left names "Your brand looks different on every post."
3. **Being understood** — calm, slower. Content, ads, website problems named exactly how owners say them; each fix one line. *(This is where they feel understood.)*
4. **Relief** — the reporting act: "Ads are running. Nobody knows if they work" → one clean monthly report.
5. **Possibility (PEAK)** — intense. The divider starts moving on its own; the right side widens with every scroll tick, the opportunity copy grows, the generated "business in motion" clip scrubs. Largest scroll span on the page.
6. **Resolve** — collapse. Left folds away, the "handled today" ledger stands complete, one CTA: WhatsApp us. Vendors line underneath, small.

**Peak sentence a visitor would tell a friend:** "The page listed every annoying thing in my day, ticked them off one by one, and at the end my whole day was just... handled."

**Tell-someone sentence:** It's the site where your own to-do list gets crossed off while you scroll.

**Authored silence:** a 0.6vh pause after act 4 (right column empty, only the clock advancing) before the peak, so the peak lands. Not dead scroll.

## Score

| Act | Beat | Device | Why |
|---|---|---|---|
| 1 Recognition | Reliable partner | `pin` (split hero) | Both sides must be readable at once; the format explains itself |
| 2 Trust | Reliable partner | `reveal` per side | Real brand work wipes in on the right as the problem lands left |
| 3 Understood | Services | `kinetic` (line-by-line) | Problems typed out one line at a time, calm pace |
| 4 Relief | Tools | `parallax` | Report mockup layers settle into place |
| 5 Possibility (peak) | Opportunity | `scrub` (single Flow clip) + divider driven by `--sc-p` | Only video on the page; gets the most scroll room |
| 6 Resolve | Commit | `pin` + collapse | Divider travels to the edge, one column, one action |

Five device families, no repeats in a row, one scrub. Target length ~10vh, 6 acts. (Note: inside the 6-7 act band the registry flags; registry is empty so the gate passes. Revisit if a second build lands here.)

## Fingerprint gate

Registry empty (first build). Passes by default. Row appended after verification.
