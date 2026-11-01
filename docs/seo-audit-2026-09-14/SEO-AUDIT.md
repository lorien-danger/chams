# Cham’s SEO audit: “dam kings beach” and “chams”

**Updated 14 September 2026.** The objective is visibility for two specific searches: **dam kings beach** and **chams**, with Australia as the initial measurement market. This report replaces the earlier assumption that wholesale leads were the main objective. The public tone and visual identity remain unchanged.

The best first opportunity is **“dam kings beach” → `/community/`**. That page already appears in public search discovery and contains the relevant material, but its old title and main heading did not name the subject. **“chams” → `/`** is more competitive and ambiguous: it overlaps with established company names and dictionary/encyclopedia subjects. Clear brand identity and independent references will matter more than adding the word repeatedly.

There is no charge for organic Google inclusion, and this plan needs no advertising, paid SEO subscription or purchased links. Neither payment nor these changes can guarantee first place.[^1] Rank and search-volume baselines remain unknown until Search Console is inspected. Public search observations are evidence of discovery and competing interpretations, not a controlled Google rank report.

## Current delivery status

- **Prepared and built locally:** keyword-focused homepage/community titles and descriptions, an exact-topic community H1 and introduction, a homepage link to that page, and homepage WebSite structured data with “Chams” as an alternate name.
- **Prepared and tested locally:** a contact delivery Worker with a fixed private recipient, field validation, rate limiting, generic failure responses, and permanent bare-domain redirects. Six server test groups pass. The form now waits for server acceptance before showing success.
- **Configured in Cloudflare:** verified private destination and forwarding rules for the public office/trade aliases. Cloudflare added MX records, but its status remains **misconfigured** because the existing SPF record conflicts. Delivery is **not yet verified**.
- **Pending:** explicit approval for the SPF replacement, completing mail DNS, live deployment and end-to-end delivery checks. The Mac was locked when browser review was attempted, so a new visual review could not be performed.
- **Not accessed:** Search Console query history, Google-selected canonicals, indexing reports or a complete backlink inventory.

The original crawl and performance figures below are a **pre-change baseline**, not post-deployment results. See [ACTION-PLAN.md](ACTION-PLAN.md) for the working checklist, [PAGE-INVENTORY.md](PAGE-INVENTORY.md) for all 22 sitemap pages and [PERFORMANCE.md](PERFORMANCE.md) for the three mobile lab reports.

## Evidence and coverage

The audit fetched all 22 main-sitemap URLs, 15 additional routing/discovery URLs and domain variants, and 97 unique same-host resources or additional linked URLs. It inspected source templates, public HTML, canonical tags, headings, images, structured data, internal links, forms, robots, sitemaps, error responses and mobile PageSpeed results. The raw HTTP evidence is preserved in [crawl-evidence.json](crawl-evidence.json).

The keyword follow-up searched the exact phrase, the unquoted phrase, a site-exclusion version, “chams”, “chams Australia”, brand-restricted queries and named competitors. Results can vary by location, date and query interpretation. No search volumes, difficulty scores, backlink totals, predicted traffic or current Google positions have been invented.

## Keyword research and competitive assessment

| Search | Observation | Implication | Confidence |
|---|---|---|---|
| dam kings beach | Cham’s existing community page was returned for the exact phrase. Other results included incidental adjacency in a long public document. | Strengthen the existing destination first; it is already discoverable. | High for observation; medium for the opportunity inference |
| dam kings beach, excluding this site | The search did not establish a substantial competing exact-topic website. | A promising narrow target, but this does not prove zero competitors or meaningful demand. | Limited by search coverage |
| chams | Results encompass unrelated dictionary/encyclopedia subjects and organisations. | A title rewrite alone will not resolve broad search intent in every country. | High |
| chams Australia | Australian company-name records and unrelated subjects appear. | Australian targeting is still ambiguous; separate the exact query from longer brand variants. | High |
| chams + company names | Chams HoldCo has an established independent website, investor material and related companies. | Competing brands have extensive identity signals; avoid conflating this site with them. | High for presence, unknown comparative link strength |

The directly relevant observed result is [Cham’s community page](https://www.chams.com.au/community/). Primary examples of unrelated entities include [Chams HoldCo’s site](https://chamsplc.com/), its [investor relations materials](https://www.chamsholdco.com/investor-relations), and [Australian company-name search records](https://abr.business.gov.au/Search/ResultsActive?SearchText=Chamos). These are examples of competing interpretations, not a claim about their exact rank above this site.

**Priority judgement:** put most initial effort into establishing the clearest destination for Dam Kings Beach while improving the homepage’s brand identity. Treat a sustained Australian top-three position for the exact phrase as an ambition to measure; treat the unqualified “chams” query as a longer-term brand-discovery objective. Neither is a forecast. A high position for a phrase with few searches can produce little traffic, so track impressions and clicks as well as position.

## Page and search-intent map

| Target | Preferred page | Prepared title | Main on-page treatment |
|---|---|---|---|
| dam kings beach | `/community/` | Dam Kings Beach — Community at Cham’s | H1 “Dam Kings Beach”; opening explains its connection with Cham’s; existing partnership material and image retained |
| chams | `/` | Chams — Cham’s Small Meats & Preservatives | Clear branded title/eyebrow; existing brand introduction; WebSite name and alternateName; ordinary links to story, range and community |
| chams dam kings beach | `/community/` | Same focused page | Natural connection between both entities, with a descriptive link from the homepage |
| cham’s / chams small meats / chams lismore | `/` | Same homepage | Supporting brand variants, measured separately from the exact “chams” query |

Keep `/community/` as the canonical destination. Its readable subject matter, title and heading can make it relevant without an exact-keyword URL. Creating a second near-duplicate `/dam-kings-beach/` page would split maintenance and internal links. Only move the URL for a substantive information-architecture reason, with a permanent redirect and consistent canonical/sitemap updates. Google describes redirects, canonicals and sitemaps as signals that should agree.[^3]

The homepage now links directly with “Our Dam Kings Beach partnership”. This provides users and crawlers a clear path and context. The community page already links back to the homepage through the common navigation. Do not fill every footer, heading or image description with the phrase.

The homepage’s WebSite markup identifies **Cham’s** as the preferred name and **Chams** as an alternate. This follows [Google’s site-name guidance](https://developers.google.com/search/docs/appearance/site-names). It is a naming signal, not a promised ranking boost. Google also chooses its own title links from several signals; the supplied title may be rewritten. Keep headings and visible text consistent with the page’s purpose, as described in [Google’s title guidance](https://developers.google.com/search/docs/appearance/title-link).

## Content work with the highest likely value

**Dam Kings Beach page:** establish a useful, coherent destination rather than chase a word count. The first implementation reorganises existing material and adds no new events, locations or supporter claims. A later editorial pass could add an original illustrated overview, an approved account of the initiative, and a small set of relevant questions people actually ask. Each addition should clarify something that is absent today. Do not automatically manufacture weekly “updates” or dozens of location pages.

The page currently links to `damkingsbeach.org`. That external domain could not be verified during this research. Do not depend on it as a functioning destination or claim ownership of it. Before promoting that link, check the domain’s purpose and availability with the owner. If it is an existing controlled related project, a useful contextual reference from it may help discovery; buying another domain is not required.

**Homepage:** keep the distinctive design and readable brand introduction. The exact unpunctuated spelling is present in the title/description and alternate-name markup while the normal Cham’s styling remains visible. There is no need to turn the homepage into a keyword glossary or add material about unrelated entities that happen to use “chams”.

**Other pages:** retain the current product/story material because it supports a coherent website and gives visitors something to explore. The audit does not recommend spending the next month building wholesale, stockist or salami-category pages for this objective. Improving them is secondary to the two named destinations and site reliability.

**Images:** existing images can make the community page distinctive. Use descriptive captions and accurate alt text about what is visible; add image dimensions/responsive sizes where appropriate. Do not embed keyword lists in alt attributes. The main performance backlog is below; changing formats again has little value because AVIF/WebP already exist.

## Free discovery and authority plan

Start with links the owner can legitimately control: existing project profiles, relevant personal/project portfolio entries, and any existing related site. Use the brand name for the homepage and the initiative name for the community page when that wording fits the surrounding content. A small number of relevant references is more useful than mass directory submissions.

When sharing the site in a relevant community, use a clear description and a direct destination. Participation should fit that community’s rules and context. Let independent coverage use its own editorial wording. Do not promise links, create accounts impersonating third parties, buy placements for ranking, or send unsolicited outreach automatically. No third-party outreach has been sent.

The plan does not require a Google Business Profile, Maps listing, fabricated review campaign or additional business-directory identities. Those are not prerequisites for ordinary web results. Google’s [spam policies](https://developers.google.com/search/docs/essentials/spam-policies) cover link manipulation, scaled content abuse and doorway pages. Avoid search-click bots, rented links, reciprocal-link quotas and bulk AI article production.

## Technical audit

### 1. Domain consistency — immediate priority

| Requested address | Observed response | Required outcome |
|---|---|---|
| `https://www.chams.com.au/` | 200, correct homepage | Keep as preferred host |
| `http://www.chams.com.au/` | Redirects to HTTPS www; final 200 | Keep |
| `https://chams.com.au/` | 525 response | Valid HTTPS followed by permanent redirect to www |
| `https://chams.com.au/products/pepperoni/` | 525 response | Redirect to the equivalent www product URL |
| `http://chams.com.au/` | 200, “Domain Parked With VentraIP Australia” | Permanent redirect to HTTPS www |

This is an observed availability and routing defect. Its historical impact on Google rankings cannot be quantified without Search Console and link data. It can also lose people who type the bare domain or follow a link using it.

Review the apex domain’s DNS, hosting attachment and TLS configuration. Ensure both hostnames terminate HTTPS correctly, then redirect the non-preferred host to `https://www.chams.com.au`, retaining the path and query string. Use a permanent redirect, ideally one hop. Keep the current canonical hostname to avoid an unnecessary migration. The exact fix depends on the registrar and hosting account configuration, which was not inspected.

Validate all four HTTP/HTTPS and www/non-www combinations for the homepage and representative product URLs. Verify email-related DNS records are preserved. A canonical tag cannot rescue a visitor who receives an error or a parked page. Redirects, canonical annotations and sitemap URLs should consistently point to the same destination.[^3]

### 2. Crawling, rendering and indexing foundations — mostly sound

Confirmed positive findings:

- The declared `robots.txt` allows crawling and points to the working `sitemap.xml`.
- All 22 URLs in that sitemap return 200 and have a self-referencing HTTPS www canonical.
- Each has a unique title, a unique meta description and one H1 in the fetched HTML.
- None of the 22 pages has a detected `noindex` directive in HTML or response headers.
- Product content and links are present in initial HTML; discovery does not depend on a client-side app rendering the catalogue.
- All 16 products are reachable within two ordinary links from the homepage.
- Tested slashless product/catalogue URLs redirect to their slash versions. `/index.html` redirects to `/`.
- The tested tracking-parameter product URL keeps the clean canonical.
- A deliberately missing URL returns a real 404 status.

Recommendations are mainly maintenance. Keep stable product URLs, avoid adding unnecessary parameter-indexable filters, and inspect representative pages in Search Console after changes. Do not block a page in `robots.txt` if Google needs to crawl it to see a new `noindex` directive.

The public API documentation page is in the sitemap and head discovery links but has no normal anchor-link path from the homepage in the crawl. It is not a lost product page. Keeping it indexed is a business choice; removing it from the marketing sitemap is low priority and unlikely to move rankings by itself.

### 3. Sitemaps and error pages — minor cleanup

Two sitemap systems are live: the hand-built `/sitemap.xml` and Astro’s `/sitemap-index.xml` → `/sitemap-0.xml`. They currently contain the same 22 URLs. This is not a duplicate-content penalty or a blocker, but it creates unnecessary maintenance risk when new pages are added. Select one generated source of truth and make the robots declaration and Search Console submission match it.

The explicit `/404` endpoint returns 200 with the error-page body and a canonical to `/404/`. The random missing URL correctly returns 404. Correct the dedicated error route’s status or prevent its indexing; exclude it from sitemaps. This is a small, bounded issue, not evidence that every missing page is a soft 404.

The crawler found one 404 at `/cdn-cgi/l/email-protection` after removing the fragment from a Cloudflare email-obfuscation link. The deployed email-decoding script exists. Verify the final browser email link, but do not count this as a broken product or assume it prevents email delivery.

### 4. Mobile performance and presentation

The homepage’s public Google PageSpeed report is linked in [PERFORMANCE.md](PERFORMANCE.md). The mobile lab run used an emulated Moto G Power, Slow 4G and Lighthouse 13.4.1. It recorded:

| Metric | Homepage result |
|---|---:|
| Performance | 88/100 |
| Accessibility | 95/100 |
| Best practices | 100/100 |
| Basic SEO checks | 100/100 |
| First Contentful Paint | 3.0 s |
| Largest Contentful Paint | 3.0 s |
| Total Blocking Time | 0 ms |
| Cumulative Layout Shift | 0 |
| Speed Index | 3.4 s |

The report showed **no real-user field data**. These lab results do not establish that the site passes Core Web Vitals. Total Blocking Time is not a measurement of real-user INP. Use field data if it becomes available; target LCP ≤2.5 seconds, INP ≤200 milliseconds and CLS ≤0.1 at the 75th percentile.[^4]

The measured homepage LCP element was the **main text heading**, not the portrait. PageSpeed identified render-blocking CSS, including the Google Fonts stylesheet, with an estimated opportunity of 1,650 ms. It estimated 460 KiB of potential image savings through better sizing. These estimates are diagnostic and must not be added together as a guaranteed improvement.

Two additional mobile tests measured **85 performance / 3.6-second LCP for the catalogue**, and **86 performance / 3.5-second LCP for pepperoni**. Both scored 100 on basic SEO checks. Their LCP elements were the introductory factory-shelves image and the main product image respectively; both were explicitly flagged for lazy loading and missing high fetch priority. These results make the image-priority recommendation a measured issue on the catalogue and product templates. The catalogue also had a heading-sequence accessibility finding. Full results and public report links are in [PERFORMANCE.md](PERFORMANCE.md).

The site already serves AVIF/WebP through `picture` elements. The browser selected the 63,148-byte AVIF portrait rather than the 1,963,001-byte PNG fallback. A recommendation to “convert every image to WebP” would miss the existing work. The remaining problem is responsive size selection: images around 1,448 pixels wide are served into much smaller spaces.

Recommended implementation:

1. Reduce the font families and weights requested on every page. Self-host the fonts actually used, or otherwise shorten the font request chain; retain sensible fallbacks and `font-display: swap`. Prioritise the headline font because of the measured text LCP.
2. Generate a small set of responsive image widths, with correct `srcset` and `sizes`. Preserve sufficient resolution for high-density screens.
3. Add a priority option to `ImageBlock.astro`. Currently every photograph uses `loading="lazy"`. Make the genuinely above-the-fold image eager where it matters, especially on product pages; do not mark every image high priority. Retain lazy loading below the fold.[^5]
4. Supply image dimensions while retaining the existing aspect-ratio containers. The lab recorded zero CLS, so missing HTML dimensions are a robustness issue rather than proof of an observed layout shift.
5. Fix the contrast problems identified by PageSpeed. Check mobile contact fields, menu access and product enquiries manually after changes. Desktop rendering was inspected; a reliable manual mobile viewport could not be established in this session, so mobile visual acceptance remains open.

Do not pursue a perfect performance score at the expense of accurate content and functioning enquiries. Google explicitly warns that good page-experience scores do not guarantee top rankings.[^6]

### 5. Structured data and search appearance

The live HTML contains LocalBusiness data on every page and Product data on all 16 product pages. The JSON parsed successfully. The Product objects contain no `offers`, `review` or `aggregateRating`. Google requires at least one of those for product-snippet eligibility. This is an eligibility gap, not an assertion that the product cannot appear in ordinary results.[^7]

For a quote-based wholesale catalogue, do not invent public prices, use zero as a placeholder price, or fabricate ratings to satisfy a validator. Retain accurate descriptive Product markup. Add offers only when the page has a real, visible offer that meets the requirements. Add stable SKU identifiers only if actual SKUs exist; the displayed batch labels should not automatically become permanent SKUs.

Add visible breadcrumbs and matching BreadcrumbList markup when category pages are introduced. Connect the manufacturer to a consistent business identifier. Verify the LocalBusiness name, address, telephone, hours and founding date, and add `sameAs` links only to genuine owned profiles. A separate business name or a different schema type should not be invented for keyword targeting.

FAQ answers may help buyers, but do not spend time adding FAQ markup to chase expanded Google listings: Google’s documentation says the FAQ rich-result feature stopped appearing on **7 May 2026**.[^8]

## Private contact delivery

The public addresses stay **office@chams.com.au** and **trade@chams.com.au**. The destination inbox is stored only in Cloudflare’s private routing/binding settings. It is not added to client JavaScript, HTML, JSON-LD, repository files, public API responses or this report.

The proposed flow is:

1. Visitors email a public alias → Cloudflare forwards to the verified private destination.
2. Visitors submit the form → a same-origin Worker validates the payload → its restricted EMAIL binding sends to the fixed verified destination.
3. The page shows success only after the email service accepts the send. This is provider acceptance, not proof that Gmail placed it in the inbox.

The Worker ignores request-supplied recipients and uses a fixed domain sender. Errors are generic and message contents are not logged by application code. An anonymous per-IP limit of five requests per minute reduces repeated submissions; limits are approximate and per Cloudflare location, and shared networks can hit them. A honeypot and size limits add basic protection. Add a free Turnstile challenge later if actual abuse warrants it.

Cloudflare documents [free forwarding and free sends to verified destinations](https://developers.cloudflare.com/email-service/platform/pricing/). The design does not require sending to arbitrary recipients, an upgraded mail plan, SMTP credentials in the browser or a paid form service. Normal Workers account limits still apply; no paid service or upgrade has been purchased.

**Setup blocker:** the domain’s existing SPF is `v=spf1 -all`. Cloudflare requires `v=spf1 include:_spf.mx.cloudflare.net ~all` for this configuration. Automatic approval review stopped the follow-up DNS mutation pending explicit approval. The configured forwarding rules must not be described as tested delivery while the domain remains misconfigured.

**Reply privacy:** forwarding hides the destination from the website, but replying directly from a personal Gmail identity can reveal it. Do not use personal-address replies or vacation responders for these messages. A separately configured domain sending identity is needed for private outbound replies; this work only implements receiving and internal form notifications. Cloudflare’s [binding restrictions](https://developers.cloudflare.com/email-service/configuration/send-bindings/) keep form notifications addressed to the fixed verified inbox.

## Search Console: the most valuable next data source

Use the existing **Domain property for chams.com.au**, if available. A public Google verification TXT record exists, but that alone does not establish access to a Search Console property. An owner login is still needed. No paid rank tracker is required.

Inspect `/` and `/community/` with URL Inspection. Record indexing status, last crawl, user-declared canonical and Google-selected canonical. Check the live test if indexing or fetch status looks wrong. Inspect sitemap processing, manual actions and security issues. A sitemap entry or HTTP 200 alone is not proof of indexing.[^2]

In Performance → Search results, use Web search and Australia first. Review up to 16 months if data exists, then compare equal 28-day periods. Filter each exact query separately: **chams**, **dam kings beach**. For each, record impressions, clicks, CTR, average position and the landing page. Separate mobile and desktop when there is enough data. Review other countries separately; do not call a worldwide average an Australian rank.

Also inspect variants such as “cham’s”, “chams small meats” and combinations with Dam Kings Beach. These help explain discovery, but never substitute a strong long-tail result for the requested exact-query result. Search Console hides some low-volume queries and aggregates positions, so missing query rows do not prove nobody searched. See [Google’s Performance report documentation](https://support.google.com/webmasters/answer/7576553?hl=en).

After deployment, submit the existing sitemap if needed and request indexing once for the two materially changed URLs. Recrawling can take days or weeks and is not guaranteed to produce inclusion or an improved position. Repeated requests do not accelerate it, according to [Google’s recrawl guidance](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl).

| Weekly record | dam kings beach | chams |
|---|---|---|
| Date range / country / device | Record consistently | Record consistently |
| Intended landing page | `/community/` | `/` |
| Google-selected canonical | Unknown until inspected | Unknown until inspected |
| Impressions / clicks / CTR | Baseline unavailable | Baseline unavailable |
| Average position | Baseline unavailable | Baseline unavailable |
| Notes | Indexing/edits/new relevant references | Indexing/edits/new relevant references |

## Ninety-day game plan

**Days 1–7 — foundations.** Finish the approved email DNS and edge setup; publish tested keyword changes; verify both hostname variants and the contact flow; establish Search Console baselines. Keep the sitemap and preferred host stable. Spend nothing on ads or SEO subscriptions.

**Weeks 2–4 — make the destinations worth finding.** Review the community page for unanswered questions and approve one substantive addition if useful. Confirm the external related-domain link. Add accurate links from any existing controlled project/profile pages where appropriate. Check the two pages’ indexing and landing-page matches, then allow enough time for recrawling before making another title change.

**Weeks 5–8 — follow evidence.** If pages are indexed but the wrong one appears, improve topic focus and internal links. If relevant impressions rise but clicks are weak, compare the actual search result’s title/snippet with its intent. If “chams” remains dominated by unrelated subjects, build clearer independent brand references and useful content, rather than repeat the word more often. Complete font/image performance work after the primary pages are settled.

**Weeks 9–12 — evaluate.** Compare equivalent windows and check how many real impressions support any position change. Low volumes need longer observation. Keep effective titles stable. Choose the next editorial improvement from query evidence. Measure top-three/page-one coverage as objectives, not as guaranteed outcomes or substitutes for actual search visits.

Suggested ongoing effort: 20–30 minutes a week on indexing/query checks, and one focused content or reference improvement every fortnight. A paid tool becomes worth discussing only if it solves a demonstrated information gap; none is needed to start.

## What would change this recommendation?

- **Neither page indexed:** diagnose indexing/canonical/crawl issues first; new articles are not the first response.
- **Wrong page ranks for Dam Kings Beach:** strengthen the intended page’s introduction and links; check duplication before changing URLs.
- **Exact phrase has almost no impressions:** confirm interest and interpretation. High rankings can still yield little traffic; do not invent a volume estimate.
- **Strong Australian brand visibility, weak worldwide visibility:** this may reflect different intent. Report the markets separately.
- **Clicks rise but the site does not retain interest:** improve the actual destination and its onward links. A more aggressive title can worsen that mismatch.
- **Spam reaches the form:** add Turnstile and tune limits based on real abuse. Do not expose the private inbox as a workaround.

## Sources for the technical baseline

[^1]: Google Search Central. [Google Search Essentials](https://developers.google.com/search/docs/essentials), current documentation; [Do you need an SEO?](https://developers.google.com/search/docs/fundamentals/do-i-need-seo), current documentation. Free organic inclusion and no guaranteed first-place ranking.
[^2]: Google Search Central. [How Google Search works](https://developers.google.com/search/docs/fundamentals/how-search-works); [Get your website on Google](https://developers.google.com/search/docs/fundamentals/get-on-google). Crawl/index distinction and limitations of site searches.
[^3]: Google Search Central. [How to specify a canonical URL](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls). Redirect, canonical and sitemap consistency.
[^4]: Google/web.dev. [Web Vitals](https://web.dev/articles/vitals). Core Web Vitals metrics, thresholds and field interpretation.
[^5]: Google/web.dev. [Optimize Largest Contentful Paint](https://web.dev/articles/optimize-lcp). Resource priority and lazy-loading guidance.
[^6]: Google Search Central. [Understanding page experience in Google Search results](https://developers.google.com/search/docs/appearance/page-experience). Limits of performance scores as ranking evidence.
[^7]: Google Search Central. [Product snippet structured data](https://developers.google.com/search/docs/appearance/structured-data/product-snippet), updated 8 September 2026. Required Product properties and rich-result eligibility.
[^8]: Google Search Central. [Documentation updates](https://developers.google.com/search/updates), entries 8 May and 15 June 2026. FAQ rich-result retirement and llms.txt clarification.
