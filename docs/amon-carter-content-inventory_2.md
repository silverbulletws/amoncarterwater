# Amon Carter Lake WSC — Content Inventory & Build Spec

Source: Wayback Machine captures of amoncarterwater.com (homepage capture 02 Apr 2025; interior pages captured Jul–Nov 2019). Compiled 20 Aug 2026.

**Read this first:** the old site was WordPress. The footer says "Copyright © 2019," posts carry bylines ("Published June 27, 2018 | By Kathy"), pages end with "Posted in Emergency Alerts, General News, News and Updates," and there's an RSS feed. Interior pages froze around 2019. Only the homepage kept getting hand-edited after that. So interior content is roughly seven years stale and every number on it must be re-verified before it goes live.

---

## Old site map

Primary nav: Home · Applications · News and Updates · Water Quality · Rates and Fees · Links · Contact Us

Plus WordPress category archives and one-off pages:
- `/category/alerts/` — Emergency Alerts
- `/category/generalnews/` — General News
- `/category/news/` — News and Updates
- `/service-application/`
- `/transfer-application/`
- `/bank-draft-application/`
- `/ccr2017/` and similar per-year CCR post pages
- attachment pages (e.g. `sample_bill`) — WordPress junk URLs

**The three news categories are the same content three times.** Every post was filed into all three, so the archives are near-identical. That is a taxonomy that never got used as designed. Collapse to one.

---

## Page-by-page

### Home
**Was:** an endless single column — live incident log at top, then emergency-alert signup, then CCR links, then board roster image, then a rate-increase letter, then service area + map, then delinquency notice, then 911-address reminder, then Facebook link, then office hours.

**Disposition:** demolish and redistribute. Homepage keeps: system status, the two phone numbers, office hours, and four or five task links (pay/start/transfer/report a leak). Everything else moves to a real page.

---

### Emergency Alerts / General News / News and Updates
**Was:** three category archives holding the same posts. The Aug 2019 archive shows the identical pattern as March 2025 — a reverse-chronological run of timestamped updates through a City of Bowie main transmission line leak, ending in "FINAL UPDATE ... Its been found, and sealed!"

**Two things worth lifting:**
1. **"All systems A-OK"** — rendered in green, buried mid-page. They already invented the status indicator. Keep the phrase; give it the top of the page.
2. **The voice.** "Bad news folks." "Miracles DO happen!" "PLEASE TELL YOUR NEIGHBORS!" That is a real person talking to their neighbors and it is better communication than anything on the four peer sites. Do not corporate-ize it.

**Disposition:** collapse three categories into one **Notices** feed with a status banner on top. Status is a current state (Normal / Advisory / Boil Water / Outage), not a scroll.

---

### Applications
**Was:** the hub. Three PDFs — Application for Service, Bank Draft authorization, Transfer Form — plus a Terms of Service link and an Adobe Reader note.

Key constraints stated on the page:
- Application for Service is a **4-page document mandated by the State of Texas**; details on p.1, rules of agreement on pp.2–4, **signature on p.4**. "We MUST have a signed application on file at the Business Office."
- Bank Draft: drafts processed **around the 10th of each month**, bill arrives before that, applicant must **attach a VOIDED blank check** and mail it in.
- Transfer: $25 administrative fee to the new owner.

**Disposition:** split into three task pages — Start Service, Transfer Service, Bank Draft. See the forms note below; these three are not equally easy to digitize.

---

### Rates and Fees
**Was, as of the 2019 capture:**

| Item | 2019 figure |
|---|---|
| New install, 3/4" line — labor/installation | $500.00 |
| New install — refundable deposit (returned when selling/leaving property) | $200.00 |
| New install — meter, piping, valves, hardware, license fees, inspections | $295.00 |
| **3/4" total to start service** | **$995.00** |
| 1" line installation | $1,195.00 |
| 2" line installation | $3,365.00 |
| Membership transfer admin fee | $25.00 |
| Monthly minimum (includes first 2,000 gal) | $32.00 |
| Overage per 1,000 gal | $4.50 (city charges them $4.59) |

Page also carried a hand-annotated sample bill diagram explaining meter readings, due date, and late charge.

**⚠️ These numbers are wrong now.** The homepage rate letter (Oct 2023) describes a base rate of $55.00. Do not publish the 2019 table. Pull the current tariff — ACLWSC adopted a new tariff 08 May 2024 and filed it with the PUC the next day, so the authoritative version is in the PUC Interchange under their docket, not on any archived page.

**Disposition:** rebuild from the current tariff. Keep the sample-bill explainer concept — it's genuinely useful — but redraw it.

---

### Water Quality
**Was:** CCR explainer (community Public Water Systems must publish annual drinking water quality reports; CCRs are finalized mid-following-year, generally by end of June), a link to EPA's Safe Drinking Water page, a stale 2012 TWDB announcement about waterdatafortexas.org, and a good photograph of the lake.

**Disposition:** keep and modernize. Drop the 2012 TWDB item. CCR archive lives here. **The lake photo is the single best image asset on the whole old site — grab the highest-resolution capture of it.**

Note: an Aug 2019 post describes a **lead and copper exceedance** in routine testing requiring state-mandated member notification. Whatever the current situation, the new site needs a clean, dignified place to publish required public notices — that's a regulatory function, not a blog post.

---

### Links
**Was:** City of Bowie · Lake Amon Carter info (Texas Parks & Wildlife) · lake level and precipitation (USGS / TWDB) · TCEQ · Texas Water Conservation Association · Texas Water Matters · Texas Water Smart · The Bowie News · USDA.

**Disposition:** kill the page; fold the two or three members actually use into the footer. Every link needs re-checking — several are seven years old.

---

### Contact Us
**Was:**
- Business office: **(940) 872-5505**, hours **9:00–11:00 AM Tu/We/Th**
- Emergency: **(940) 841-2961**
- Mail: **P.O. Box 512, Bowie, Texas 76230**
- Contact form: First/Last name, email, phone, message, plus a math-question captcha
- A broken image where a map or photo used to be

Also, from a 2019 notice: the billing office moved to **607-A Lindsey St** (across Lindsey from Allsup's, near Lindsey and 59N, same building as Modern Hair Salon). Verify this is still current.

**Disposition:** rebuild. Emergency number gets visual priority over the office number — six office hours a week means most urgent contact happens outside them.

---

## Content that must come from outside the archive

| Item | Where to get it |
|---|---|
| Current rates and fees | PUC Interchange — tariff adopted 08 May 2024 |
| Consumer Confidence Reports | TCEQ has copies; the corp should also have its own |
| Application for Service (4-page, state-mandated) | Try Wayback for the PDF URL; otherwise the office's own file |
| Bank Draft form | Same |
| Transfer Form | Same |
| Current board roster | Provided — 2026 roster |
| Drought contingency plan | Referenced on the old site, never captured |
| Service area map | Old homepage had a green-shaded map image; a proper one likely exists in PUC/CCN filings |

---

## Reusable assets

- Lake Amon Carter photograph (Water Quality page) — best image on the site
- "All systems A-OK" as the normal-status phrase
- The sample-bill explainer concept
- Facebook page: facebook.com/ACLWSC — second notification channel, already established
- The Homeserve warranty-letter warning — a recurring member concern, good FAQ material

---

## Proposed new structure

```
Home              status banner · emergency + office numbers · task links · latest notice
Notices           one feed, replacing three categories · required public notices live here
Start Service     rates to connect · what's required · the form
My Account        billing explainer · bank draft · transfer service · pay
Water Quality     CCR archive · testing explainer · required notices
Service Area      map · what's in, what's out
About             board · meetings · what a member-owned WSC is
Contact           emergency first · office hours · form
```

---

## A note on replacing the PDFs with fillable forms

The three forms are not one problem. They're three:

**Transfer Form** — easiest. Names, addresses, a $25 fee. Digitize freely.

**Application for Service** — the 4-page state-mandated document with a signature on page 4 and a requirement that a signed copy stay on file at the business office. A web form with e-signature is workable, but the corp needs to end up holding a retrievable, signed record that satisfies whoever asks for it. Worth one question to their attorney before building, not after.

**Bank Draft** — the one to be careful with. It carries a bank routing and account number, which is ACH credential data. This must not run through an ordinary contact-form-to-email pipeline; email is plaintext at rest and the corp would be storing members' banking details in a mailbox. Either use a payment processor that handles the authorization on their infrastructure, or keep this one on paper for now. Do not let this become the form that ships first because it looks like the other two.

---

## RECOVERED — harvest these now (added 21 Aug 2026)

**The old site's content is still sitting in search-engine caches, and it is NEWER than the Wayback captures.** Cached copies show `Copyright © 2026`, a Water Quality page announcing the **2025 CCR**, a homepage link to the **2024 CCR**, and a post thanking members for the Annual Public Meeting and congratulating the new board. Caches expire. Pull everything reachable this week.

### Corporation identifiers
| | |
|---|---|
| TCEQ Public Water System No. | **1690023** |
| PUC CCN No. | **12793** |
| County | Montague |
| EIN (Form 990 filings) | 752565122 |
| Office email | info@amoncarterwater.com |
| Facebook | facebook.com/ACLWSC (~378 followers) |

### Direct asset URLs found in cached content
- Service area / coverage map: `amoncarterwater.com/wp-content/uploads/2020/06/coveragemap.jpg`
- Bank draft application: `amoncarterwater.com/wp-content/uploads/2012/05/bank_draft_application.pdf`

The WordPress uploads folder is organized by year/month, so other PDFs likely follow the same pattern. Try these before assuming anything is lost.

### Where to get the two documents
- **CCRs** — TCEQ Drinking Water Watch, searchable by PWS No. 1690023. The 2024 and 2025 reports were both published; the corporation should also hold its own copies.
- **Tariff (adopted 08 May 2024)** — PUC Interchange, Control Number **56520**. The Interchange blocks automated retrieval, so this one has to be pulled by hand from a browser.

### Corrected rates guidance
The cached Rates and Fees page **still shows $32.00/month and $995.00 to connect** — the same figures as 2019, despite the 2023 letter announcing a $55.00 base rate. So the published rates have been wrong for years. Cached copy also carries tariff language the Wayback capture doesn't have: three inspections by the corporation's own inspector required before service per TCEQ, a $25.00 non-disclosure fee, and Standard vs. Non-Standard Service investigation terms with cost estimates quoted within ten working days. **Build the rates page from the tariff, not from any version of the website.**

### ⚠️ Correction to the service-area guidance above
Earlier note said to be careful with the old "we don't serve outside our area" language. That was too soft. In its own May 2024 filing in Docket 56520, the corporation stated that during the tariff development it became clear it had **made a mistake in the refusal of service by not following the stated guidelines**, and that it intended to serve the development under the new tariff. The old site's service-area language now contradicts the corporation's own position on the record. **Do not carry it over in any form.** The new Service Area page should describe the CCN and the Standard vs. Non-Standard Service process from the tariff — not a "we're full" message.

### Usable background (Lake Amon G. Carter)
Six miles south of Bowie on Big Sandy Creek. Dam completed August 1956; a 500-acre extension added 1985, the two connected by a twenty-foot tunnel. Roughly 1,848 surface acres, max depth about 50 feet, conservation pool at 920 feet. Named for the Fort Worth publisher and philanthropist Amon G. Carter. Good About-page material — the old site had no origin story at all.

Also worth keeping from the live homepage: the corporation describes its water as **"Superior-rated"** (a TCEQ designation) and explains that it purchases water from the City of Bowie and delivers it through its own lines and equipment to each member's meter.

---

## Open questions

1. Who posts a notice, from what device, at 9 PM on a Sunday?
2. Is 607-A Lindsey St still the office?
3. Is the physical office staffed at all right now, or is it phone-only during the transition?
4. Does the corp want the Facebook page and the site status to update together?
5. What is the current status of the Deweber / Prairie Branch PUC matter — does it constrain how the service area page is worded?
