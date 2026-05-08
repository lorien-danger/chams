import satori from 'satori'
import { Resvg } from '@resvg/resvg-js'
import { readFileSync, writeFileSync, mkdirSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import { createElement as h } from 'react'
import { PRODUCTS } from '../src/products.js'

const __dir = dirname(fileURLToPath(import.meta.url))
const root  = resolve(__dir, '..')
const OUT   = resolve(root, 'public/assets')

const W = 1190
const H = 1684

const C = {
  cream:   '#F2E7CB',
  bone:    '#FAF4E2',
  blue:    '#1B3A66',
  blueInk: '#0E1E38',
  red:     '#B83A28',
  stone:   '#5A5147',
  grain:   '#8C8174',
  tan:     '#C9B98F',
  white:   '#FFFFFF',
}

const PRICING = {
  'hot-soppressa':       [{ fmt: '250 g retail vac pack',       unit: '$12.50', case_qty: '20', case_price: '$225.00' },
                          { fmt: '1 kg whole',                  unit: '$38.00', case_qty: '6',  case_price: '$210.00' },
                          { fmt: 'Sliced 100 g deli pack',      unit: '$7.80',  case_qty: '30', case_price: '$210.00' }],
  'mild-soppressa':      [{ fmt: '250 g retail vac pack',       unit: '$12.50', case_qty: '20', case_price: '$225.00' },
                          { fmt: '1 kg whole',                  unit: '$38.00', case_qty: '6',  case_price: '$210.00' },
                          { fmt: 'Sliced 100 g deli pack',      unit: '$7.80',  case_qty: '30', case_price: '$210.00' }],
  'traditional-salami':  [{ fmt: '1 kg whole',                  unit: '$32.00', case_qty: '8',  case_price: '$230.00' },
                          { fmt: '500 g half',                  unit: '$18.00', case_qty: '12', case_price: '$195.00' },
                          { fmt: 'Sliced 150 g deli pack',      unit: '$9.50',  case_qty: '24', case_price: '$205.00' },
                          { fmt: 'Bulk 5 kg (hospitality)',     unit: '$135.00',case_qty: '2',  case_price: '$250.00' }],
  'cacciatore':          [{ fmt: '4 × 80 g retail pack',        unit: '$14.00', case_qty: '16', case_price: '$200.00' },
                          { fmt: '20-pack box (hospitality)',   unit: '$62.00', case_qty: '4',  case_price: '$225.00' }],
  'pepperoni':           [{ fmt: '200 g sliced retail pack',    unit: '$9.50',  case_qty: '24', case_price: '$205.00' },
                          { fmt: '1.5 kg whole stick',          unit: '$52.00', case_qty: '6',  case_price: '$285.00' },
                          { fmt: 'Pre-sliced 2 kg bulk',        unit: '$64.00', case_qty: '4',  case_price: '$235.00' }],
  'pancetta':            [{ fmt: '200 g rolled (retail)',        unit: '$11.00', case_qty: '20', case_price: '$198.00' },
                          { fmt: '200 g flat (retail)',          unit: '$11.00', case_qty: '20', case_price: '$198.00' },
                          { fmt: '2 kg whole slab',             unit: '$78.00', case_qty: '4',  case_price: '$285.00' }],
  'pickled-peppers':     [{ fmt: '500 g glass jar (retail)',    unit: '$8.50',  case_qty: '12', case_price: '$92.00' },
                          { fmt: '2 L catering jar',            unit: '$22.00', case_qty: '6',  case_price: '$120.00' }],
  'marinated-artichokes':[{ fmt: '500 g glass jar (retail)',    unit: '$10.50', case_qty: '12', case_price: '$114.00' },
                          { fmt: '2 L catering jar',            unit: '$28.00', case_qty: '6',  case_price: '$152.00' }],
  'giardiniera':         [{ fmt: '500 g glass jar (retail)',    unit: '$8.00',  case_qty: '12', case_price: '$86.00' },
                          { fmt: '2 L catering jar',            unit: '$20.00', case_qty: '6',  case_price: '$108.00' }],
}

function loadFont(slug, weight) {
  return readFileSync(resolve(root, `node_modules/@fontsource/${slug}/files/${slug}-latin-${weight}-normal.woff`))
}

function logoDataUrl(svgPath, renderWidth) {
  const png = new Resvg(readFileSync(svgPath, 'utf8'), { fitTo: { mode: 'width', value: renderWidth } }).render().asPng()
  return `data:image/png;base64,${png.toString('base64')}`
}

// ── Cover page (unchanged) ──────────────────────────────────────────────────

function coverPage(logoUrl) {
  return h('div', {
    style: {
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      width: W, height: H, backgroundColor: C.blue, padding: 80,
    },
  },
    h('img', { src: logoUrl, style: { width: 500, objectFit: 'contain' } }),
    h('div', {
      style: {
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, marginTop: 60,
      },
    },
      h('div', {
        style: {
          fontFamily: 'Big Shoulders Display', fontWeight: 900, fontSize: 72,
          textTransform: 'uppercase', color: C.cream, letterSpacing: '-0.01em',
          lineHeight: 1, textAlign: 'center',
        },
      }, 'Product Spec Sheet'),
      h('div', {
        style: {
          fontFamily: 'Barlow Condensed', fontWeight: 700, fontSize: 22,
          letterSpacing: '0.18em', textTransform: 'uppercase',
          color: 'rgba(242,231,203,0.50)', textAlign: 'center',
        },
      }, 'Trade & Wholesale · 2026'),
    ),
    h('div', {
      style: {
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
        marginTop: 80, borderTop: `2px solid rgba(242,231,203,0.2)`, paddingTop: 40, width: 500,
      },
    },
      h('div', {
        style: {
          fontFamily: 'Barlow Condensed', fontWeight: 700, fontSize: 16,
          letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(242,231,203,0.45)',
        },
      }, "Cham's Small Meats & Preservatives Pty Ltd"),
      h('div', {
        style: {
          fontFamily: 'Barlow Condensed', fontWeight: 400, fontSize: 16,
          letterSpacing: '0.08em', color: 'rgba(242,231,203,0.35)',
        },
      }, '12 Industrial Drive, Lismore NSW 2480'),
      h('div', {
        style: {
          fontFamily: 'Barlow Condensed', fontWeight: 400, fontSize: 16,
          letterSpacing: '0.08em', color: 'rgba(242,231,203,0.35)',
        },
      }, '02 6621 4488 · trade@chams.com.au'),
    ),
  )
}

// ── Header + footer helpers ─────────────────────────────────────────────────

function pageHeader(logoUrl, pageLabel) {
  return h('div', {
    style: {
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      paddingBottom: 16, borderBottom: `2px solid ${C.blue}`, marginBottom: 28,
    },
  },
    h('img', { src: logoUrl, style: { height: 36, objectFit: 'contain' } }),
    h('div', {
      style: {
        fontFamily: 'Barlow Condensed', fontWeight: 700, fontSize: 12,
        letterSpacing: '0.16em', textTransform: 'uppercase', color: C.grain,
      },
    }, pageLabel),
  )
}

function pageFooter() {
  return h('div', {
    style: {
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      borderTop: `1px solid ${C.tan}`, paddingTop: 14,
    },
  },
    h('div', {
      style: { fontFamily: 'Barlow Condensed', fontWeight: 400, fontSize: 12, color: C.grain, letterSpacing: '0.04em' },
    }, "Cham's Small Meats & Preservatives Pty Ltd · ABN 38 614 720 991"),
    h('div', {
      style: { fontFamily: 'Barlow Condensed', fontWeight: 400, fontSize: 12, color: C.grain, letterSpacing: '0.04em' },
    }, 'Prices ex-GST · Effective Jan 2026 · trade@chams.com.au · 02 6621 4499'),
  )
}

// ── Product block (condensed) ───────────────────────────────────────────────

function productBlock(product) {
  const pricing = PRICING[product.slug] || []

  const labelStyle = {
    fontFamily: 'Barlow Condensed', fontWeight: 700, fontSize: 11,
    letterSpacing: '0.14em', textTransform: 'uppercase', color: C.blue,
  }
  const valueStyle = {
    fontFamily: 'Barlow Condensed', fontWeight: 400, fontSize: 13, color: C.stone, lineHeight: 1.35,
  }

  function infoRow(label, value) {
    return h('div', { style: { display: 'flex', gap: 12, padding: '6px 0' } },
      h('div', { style: { ...labelStyle, width: 110, flexShrink: 0 } }, label),
      h('div', { style: valueStyle }, value),
    )
  }

  // Pricing table header
  const thStyle = {
    fontFamily: 'Barlow Condensed', fontWeight: 700, fontSize: 11,
    letterSpacing: '0.12em', textTransform: 'uppercase', color: C.blue,
  }
  const tdStyle = {
    fontFamily: 'Barlow Condensed', fontWeight: 400, fontSize: 13, color: C.stone,
  }
  const tdBoldStyle = {
    fontFamily: 'Barlow Condensed', fontWeight: 700, fontSize: 13, color: C.blueInk,
  }

  return h('div', {
    style: {
      display: 'flex', flexDirection: 'column', marginBottom: 8,
    },
  },
    // Title row
    h('div', {
      style: {
        display: 'flex', alignItems: 'baseline', gap: 16,
        borderTop: `3px solid ${C.blue}`, paddingTop: 12, marginBottom: 4,
      },
    },
      h('div', {
        style: {
          fontFamily: 'Big Shoulders Display', fontWeight: 900, fontSize: 34,
          textTransform: 'uppercase', color: C.blueInk, lineHeight: 1,
        },
      }, product.name),
      h('div', {
        style: {
          fontFamily: 'Barlow Condensed', fontWeight: 700, fontSize: 13,
          letterSpacing: '0.12em', textTransform: 'uppercase', color: C.red,
        },
      }, product.cat),
      h('div', { style: { flex: 1 } }),
      h('div', {
        style: {
          fontFamily: 'Barlow Condensed', fontWeight: 700, fontSize: 12,
          letterSpacing: '0.1em', textTransform: 'uppercase',
          color: C.cream, backgroundColor: C.blue,
          padding: '4px 12px', borderRadius: 3,
        },
      }, product.weight),
    ),

    // Two-column: specs left, pricing right
    h('div', {
      style: { display: 'flex', gap: 32, marginTop: 10 },
    },
      // Left: specs
      h('div', {
        style: { flex: 1, display: 'flex', flexDirection: 'column' },
      },
        infoRow('Ingredients', product.ingredients),
        infoRow('Curing', product.curing),
        infoRow('Storage', product.storage),
      ),

      // Right: pricing table
      h('div', {
        style: { width: 420, flexShrink: 0, display: 'flex', flexDirection: 'column' },
      },
        // Table header
        h('div', {
          style: {
            display: 'flex', padding: '6px 0', borderBottom: `1px solid ${C.tan}`, gap: 8,
          },
        },
          h('div', { style: { ...thStyle, flex: 1 } }, 'Format'),
          h('div', { style: { ...thStyle, width: 70, textAlign: 'right' } }, 'Unit'),
          h('div', { style: { ...thStyle, width: 50, textAlign: 'center' } }, 'Case'),
          h('div', { style: { ...thStyle, width: 80, textAlign: 'right' } }, 'Case Price'),
        ),
        // Rows
        ...pricing.map(row =>
          h('div', {
            style: {
              display: 'flex', padding: '5px 0', borderBottom: `1px solid rgba(201,185,143,0.4)`, gap: 8,
            },
          },
            h('div', { style: { ...tdStyle, flex: 1 } }, row.fmt),
            h('div', { style: { ...tdBoldStyle, width: 70, textAlign: 'right' } }, row.unit),
            h('div', { style: { ...tdStyle, width: 50, textAlign: 'center' } }, row.case_qty),
            h('div', { style: { ...tdBoldStyle, width: 80, textAlign: 'right' } }, row.case_price),
          )
        ),
      ),
    ),
  )
}

// ── Content pages ───────────────────────────────────────────────────────────

function contentPage(products, logoUrl, pageNum, totalPages, sectionTitle) {
  return h('div', {
    style: {
      display: 'flex', flexDirection: 'column',
      width: W, height: H, backgroundColor: C.cream, padding: '48px 56px',
    },
  },
    pageHeader(logoUrl, `Page ${pageNum} of ${totalPages}`),

    // Section title
    sectionTitle ? h('div', {
      style: {
        fontFamily: 'Barlow Condensed', fontWeight: 700, fontSize: 14,
        letterSpacing: '0.18em', textTransform: 'uppercase', color: C.red,
        marginBottom: 20,
      },
    }, sectionTitle) : null,

    // Products
    ...products.map(p => productBlock(p)),

    // Footer
    h('div', { style: { flex: 1 } }),
    pageFooter(),
  )
}

// ── Terms page ──────────────────────────────────────────────────────────────

function termsPage(logoUrl, pageNum, totalPages) {
  const sectionStyle = { marginBottom: 28, display: 'flex', flexDirection: 'column', gap: 6 }
  const headStyle = {
    fontFamily: 'Big Shoulders Display', fontWeight: 900, fontSize: 24,
    textTransform: 'uppercase', color: C.blueInk, lineHeight: 1,
  }
  const bodyStyle = {
    fontFamily: 'Barlow Condensed', fontWeight: 400, fontSize: 15, color: C.stone, lineHeight: 1.5,
  }

  return h('div', {
    style: {
      display: 'flex', flexDirection: 'column',
      width: W, height: H, backgroundColor: C.cream, padding: '48px 56px',
    },
  },
    pageHeader(logoUrl, `Page ${pageNum} of ${totalPages}`),

    h('div', {
      style: {
        fontFamily: 'Big Shoulders Display', fontWeight: 900, fontSize: 44,
        textTransform: 'uppercase', color: C.blueInk, lineHeight: 1,
        borderTop: `3px solid ${C.blue}`, paddingTop: 14, marginBottom: 32,
      },
    }, 'Trade Terms & Ordering'),

    h('div', { style: { display: 'flex', gap: 48 } },
      h('div', { style: { flex: 1, display: 'flex', flexDirection: 'column' } },
        h('div', { style: sectionStyle },
          h('div', { style: headStyle }, 'Minimum Order'),
          h('div', { style: bodyStyle }, 'First order: $500 ex-GST. Subsequent orders: $300 ex-GST. No minimum on individual SKUs within an order.'),
        ),
        h('div', { style: sectionStyle },
          h('div', { style: headStyle }, 'Payment Terms'),
          h('div', { style: bodyStyle }, '14 days from invoice for approved accounts. New accounts: payment on first order, then 14-day terms on application. Direct deposit or cheque.'),
        ),
        h('div', { style: sectionStyle },
          h('div', { style: headStyle }, 'Delivery'),
          h('div', { style: bodyStyle }, 'Weekly delivery Lismore–Byron–Tweed catchment (no charge on orders over $300). Cold-chain freight statewide via refrigerated courier — freight at cost, quoted per order.'),
        ),
        h('div', { style: sectionStyle },
          h('div', { style: headStyle }, 'Shelf Life'),
          h('div', { style: bodyStyle }, 'All cured meats: minimum 90 days from production (vacuum-sealed, refrigerated 0–4°C). Preservatives: minimum 12 months unopened. Exact dates printed on all packs.'),
        ),
      ),
      h('div', { style: { flex: 1, display: 'flex', flexDirection: 'column' } },
        h('div', { style: sectionStyle },
          h('div', { style: headStyle }, 'Returns'),
          h('div', { style: bodyStyle }, 'Damaged or defective goods replaced at no charge. Notify within 48 hours of delivery. Temperature-compromised goods must be reported on receipt.'),
        ),
        h('div', { style: sectionStyle },
          h('div', { style: headStyle }, 'Pricing'),
          h('div', { style: bodyStyle }, 'All prices ex-GST. Pricing reviewed annually (January). 30 days written notice for any price changes. Volume discounts available on application for accounts over $2,000/month.'),
        ),
        h('div', { style: sectionStyle },
          h('div', { style: headStyle }, 'Quality & Certification'),
          h('div', { style: bodyStyle }, 'HACCP-certified facility. All products manufactured under NSW Food Authority licence. Batch-traceable from raw material to dispatch. Spec sheets and allergen declarations available on request.'),
        ),
        h('div', { style: sectionStyle },
          h('div', { style: headStyle }, 'Contact'),
          h('div', { style: bodyStyle }, 'Trade enquiries: trade@chams.com.au\nPhone: 02 6621 4499 (Mon–Fri, 7am–4pm)\nAddress: 12 Industrial Drive, Lismore NSW 2480'),
        ),
      ),
    ),

    h('div', { style: { flex: 1 } }),
    pageFooter(),
  )
}

// ── Render + assemble ───────────────────────────────────────────────────────

async function renderPage(element, fonts) {
  const svg = await satori(element, { width: W, height: H, fonts })
  return new Resvg(svg, { fitTo: { mode: 'width', value: W * 2 } }).render().asPng()
}

async function main() {
  console.log('Generating spec sheet PDF...')

  const fonts = [
    { name: 'Big Shoulders Display', data: loadFont('big-shoulders-display', 900), weight: 900, style: 'normal' },
    { name: 'Barlow Condensed', data: loadFont('barlow-condensed', 700), weight: 700, style: 'normal' },
    { name: 'Barlow Condensed', data: loadFont('barlow-condensed', 400), weight: 400, style: 'normal' },
  ]

  const creamLogo = logoDataUrl(resolve(root, 'public/assets/logos/chams-full-cream.svg'), 700)
  const blueLogo  = logoDataUrl(resolve(root, 'public/assets/logos/chams-main-blue.svg'), 400)

  // Group products by category
  const salami = PRODUCTS.filter(p => p.cat === 'Salami & Soppressa')
  const cured  = PRODUCTS.filter(p => p.cat === 'Cured Cuts')
  const preserv = PRODUCTS.filter(p => p.cat === 'Preservatives')

  const totalPages = 4 // salami, cured+preserv, terms (we'll count after layout)

  const pages = []

  console.log('  rendering cover...')
  pages.push(await renderPage(coverPage(creamLogo), fonts))

  console.log('  rendering salami & soppressa...')
  pages.push(await renderPage(contentPage(salami, blueLogo, 1, totalPages, 'Salami & Soppressa'), fonts))

  console.log('  rendering cured cuts & preservatives...')
  pages.push(await renderPage(contentPage([...cured, ...preserv], blueLogo, 2, totalPages, 'Cured Cuts & Preservatives'), fonts))

  console.log('  rendering terms...')
  pages.push(await renderPage(termsPage(blueLogo, 3, totalPages), fonts))

  // Build PDF
  const PDFDocument = (await import('pdfkit')).default
  const A4_W = 595.28
  const A4_H = 841.89

  const doc = new PDFDocument({ size: 'A4', margin: 0 })
  const chunks = []
  doc.on('data', c => chunks.push(c))

  for (let i = 0; i < pages.length; i++) {
    if (i > 0) doc.addPage()
    doc.image(pages[i], 0, 0, { width: A4_W, height: A4_H })
  }

  doc.end()
  await new Promise(res => doc.on('end', res))

  const pdf = Buffer.concat(chunks)
  writeFileSync(resolve(OUT, 'chams-spec-sheet.pdf'), pdf)
  console.log(`Done — ${pages.length} pages → public/assets/chams-spec-sheet.pdf`)
}

main().catch(err => { console.error(err); process.exit(1) })
