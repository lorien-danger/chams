# Cham’s Performance Evidence

Three public mobile PageSpeed tests were completed on 14 September 2026. These are single lab runs, not a real-user Core Web Vitals assessment. All three reports displayed “No Data” in their real-user section. Test conditions: emulated Moto G Power, Slow 4G, initial page load, Lighthouse 13.4.1, HeadlessChromium 151.0.7922.173.

| Metric | Homepage | Products catalogue | Pepperoni product |
|---|---:|---:|---:|
| Performance | 88 | 85 | 86 |
| Accessibility | 95 | 92 | 95 |
| Best practices | 100 | 100 | 100 |
| Basic SEO checks | 100 | 100 | 100 |
| FCP | 3.0 s | 2.9 s | 2.9 s |
| LCP | 3.0 s | 3.6 s | 3.5 s |
| TBT | 0 ms | 0 ms | 0 ms |
| CLS | 0 | 0 | 0 |
| Speed Index | 3.4 s | 3.2 s | 3.3 s |
| Estimated responsive-image savings | 460 KiB | 830 KiB | 199 KiB |
| Estimated render-blocking savings | 1,650 ms | 1,500 ms | 1,490 ms |

Scores and displayed rounded metrics were read from the reports. Estimated savings are not guarantees and cannot be summed into a forecast. TBT is not INP. The 100 SEO score covers basic checks, not keyword fit, authority, business accuracy or ranking probability.

## Original reports

- [Homepage mobile report](https://pagespeed.web.dev/analysis/https-www-chams-com-au/cxi8olrco2?form_factor=mobile), captured 12:29 PM Australia/Sydney.
- [Catalogue mobile report](https://pagespeed.web.dev/analysis/https-www-chams-com-au-products/9k22o25c0i?form_factor=mobile), captured 12:32 PM Australia/Sydney.
- [Pepperoni mobile report](https://pagespeed.web.dev/analysis/https-www-chams-com-au-products-pepperoni/xvbffg8vxn?form_factor=mobile), captured 12:32 PM Australia/Sydney.

Public PageSpeed report URLs may expire or require a rerun. This document retains the observed results.

## Measured bottlenecks

**Homepage:** the LCP element was `h1.hero-title`, the main headline. The report identified the Google Fonts CSS request and the site CSS as render-blocking. The font request includes six font families, several with multiple weights. Focus on necessary weights/families and earlier text rendering.

**Pepperoni:** the LCP element was the main pepperoni AVIF image. The report explicitly flagged `loading="lazy"` and the missing `fetchpriority="high"`. It recorded a resource load delay of 1,410 ms in the LCP breakdown. The requested image was discoverable in the initial HTML.

**Catalogue:** the LCP element was the factory-shelves AVIF image in the introduction. It had the same lazy-loading/priority findings and a reported load delay of 1,350 ms. The catalogue had the largest estimated responsive-image opportunity of the three templates.

LCP breakdown values and simulated headline metrics are distinct Lighthouse presentations and should not be combined as a new timing calculation. They support prioritisation of discovery, fonts and image dimensions.

All three reports flagged missing explicit image width/height and contrast issues. The catalogue additionally flagged heading sequence. The existing aspect-ratio containers helped preserve layout: observed lab CLS was zero.

## Image verification

The live homepage browser selected AVIF images. Public fetch sizes include:

| Asset | PNG fallback | AVIF | WebP |
|---|---:|---:|---:|
| Founder portrait | 1,963,001 bytes | 63,148 bytes | 71,090 bytes |
| Pepperoni | 2,087,465 bytes | 130,375 bytes | 125,776 bytes |
| Hot soppressa | 2,234,174 bytes | 149,570 bytes | 145,780 bytes |

These are individual response-body sizes, not total page transfer sizes. Modern formats already work; responsive widths and image priority are the next improvements. Source: [crawl-evidence.json](crawl-evidence.json) and browser image inspection.

## Limits and follow-up

The unauthenticated PageSpeed API returned a quota error, preserved in `pagespeed-mobile.json`; the browser-based PageSpeed service completed the three tests above. No API failure is being treated as a website error.

Manual browser inspection used desktop rendering. The attempted mobile viewport override did not produce a verified narrow viewport, so manual mobile layout/interaction acceptance remains outstanding. Shared responsive CSS exists in the source, but that alone is not proof that every mobile layout is correct.

After fixes, repeat these three templates with equivalent settings. Run more than one comparison if results vary materially. Obtain field data from Search Console/CrUX when available. See [Google’s Web Vitals reference](https://web.dev/articles/vitals) and [LCP optimisation guidance](https://web.dev/articles/optimize-lcp).
