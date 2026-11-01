# Action plan: “dam kings beach” and “chams”

Updated 14 September 2026. Read the [revised audit](SEO-AUDIT.md) for evidence, sources and the 90-day strategy. This checklist replaces the previous wholesale-keyword backlog. Target Australia first; measure other countries separately. No paid tool, advertising campaign or service upgrade is required.

## Prepared in this workspace

- [x] Homepage title/description explicitly identify Chams and its connection with the community page.
- [x] Homepage WebSite structured data supplies Cham’s as the preferred name and Chams as an alternate.
- [x] Community title, H1 and introduction focus on Dam Kings Beach.
- [x] Homepage links directly to the existing `/community/` destination with descriptive wording.
- [x] Contact form fields are named/validated; visible success waits for server acceptance; failures preserve the message.
- [x] Fixed-recipient server Worker, restricted sender, generic errors, rate limit, honeypot and body limits implemented.
- [x] Bare-domain permanent redirect implemented in the same Worker without changing TLS settings.
- [x] Six server test groups pass, Astro production build passes and Worker dry-run bundling passes.

## Cloudflare setup and release

- [x] Identify the existing chams Pages project and zone.
- [x] Verify the private destination in Cloudflare.
- [x] Save forwarding rules for office@chams.com.au and trade@chams.com.au.
- [x] Enable Email Routing; authoritative DNS now publishes Cloudflare MX records.
- [ ] **Owner approval required:** replace `v=spf1 -all` with `v=spf1 include:_spf.mx.cloudflare.net ~all` and finish required mail DNS. Automatic approval review rejected the follow-up DNS mutation. Forwarding status is currently misconfigured and delivery is not verified.
- [ ] Complete mail DNS and verify Cloudflare reports a healthy configuration. Preserve the existing Google verification TXT record and unrelated DNS.
- [ ] Deploy the contact/redirect Worker using a temporary private configuration outside the repository. Keep its recipient binding restricted.
- [ ] Verify HTTP and HTTPS bare-domain URLs redirect to HTTPS www with path/query preserved.
- [ ] Test email-service acceptance and confirm a test message reaches the inbox. Test both aliases independently when a suitable authorised test sender is available.
- [ ] Deploy the built Pages site and check the live homepage/community metadata, form and discovery routes.
- [ ] Perform browser checks at desktop and narrow widths. Browser control was unavailable while the Mac was locked.

The private inbox must never be placed in public files or this checklist. Forwarding does not make replies sent from a personal Gmail identity private; outbound domain-identity setup is a separate step.

## First week after release

| Priority | Work | Done when |
|---|---|---|
| 1 | Inspect homepage and community URLs in Search Console | Index/crawl status and Google-selected canonicals recorded |
| 2 | Review the existing sitemap and manual-action/security reports | Processing/exclusions understood; issues addressed if present |
| 3 | Establish exact-query baselines | Australia/Web impressions, clicks, CTR, average position and landing pages recorded for each target |
| 4 | Request recrawling once for the two changed URLs | Requests submitted; do not mistake submission for indexing |
| 5 | Check the external damkingsbeach.org link | Destination/purpose confirmed by owner or link revised appropriately |
| 6 | Review existing controlled profiles/projects | Useful, accurate links point to `/` or `/community/` as appropriate |

## Weeks 2–4

- [ ] Add one substantive, approved improvement to the community page if it answers a missing visitor question. Retain the established URL.
- [ ] Inspect new query data before altering more titles. Keep exact queries separate from longer variants.
- [ ] Share the site only where relevant and permitted; no automated outreach or manufactured backlinks.
- [ ] Address font delivery and oversized image variants after the target pages are settled. Baseline mobile PageSpeed performance is 85–88, with LCP 3.0–3.6 seconds; no real-user field data was available.

## Weeks 5–12

- [ ] Compare equal 28-day periods and country/device segments; use longer windows for sparse data.
- [ ] If a page is absent, diagnose index/canonical/crawl status first.
- [ ] If the wrong page ranks, sharpen content/internal-link focus before creating a duplicate URL.
- [ ] If impressions grow but clicks do not, inspect the actual search result and its title/snippet promise.
- [ ] If “chams” remains ambiguous, strengthen consistent independent brand references; do not add unrelated topics or repeat the keyword excessively.
- [ ] Record which changes preceded movement, while avoiding claims that a single edit caused it.

## Success criteria

The practical aims are sustained visibility and search visits for the two named terms. Top three for Dam Kings Beach and page one for Chams in Australia are measurable ambitions, not guaranteed results or dated commitments. Current positions and search demand are unknown without Search Console. Do not report a good score for basic SEO checks, an exact-phrase web search result or a long-tail ranking as proof of achieving either objective.
