import satori from 'satori'
import { Resvg } from '@resvg/resvg-js'
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import { createElement as h } from 'react'
import { PRODUCTS } from '../src/products.js'

const __dir = dirname(fileURLToPath(import.meta.url))
const root  = resolve(__dir, '..')
const OUT   = resolve(root, 'public/assets/og')

const C = {
  cream:   '#F2E7CB',
  blue:    '#1B3A66',
  blueInk: '#0E1E38',
  tan:     '#C9B98F',
}

function loadFont(fontsourceSlug, weight) {
  const path = resolve(root, `node_modules/@fontsource/${fontsourceSlug}/files/${fontsourceSlug}-latin-${weight}-normal.woff`)
  return readFileSync(path)
}

function fileToDataUrl(filePath, mime) {
  return `data:${mime};base64,${readFileSync(filePath).toString('base64')}`
}

function logoDataUrl(svgPath, renderWidth) {
  const png = new Resvg(readFileSync(svgPath, 'utf8'), { fitTo: { mode: 'width', value: renderWidth } }).render().asPng()
  return `data:image/png;base64,${png.toString('base64')}`
}

async function renderProduct(product, fonts, logoUrl) {
  const imgPath = resolve(root, 'public', product.image.slice(1))
  if (!existsSync(imgPath)) {
    console.warn(`  skip ${product.slug}: image not found`)
    return null
  }
  const productImg = fileToDataUrl(imgPath, 'image/png')

  // Logo is 1600:879 — at 180px wide the height is ~99px
  const el = h('div', { style: { display: 'flex', width: 1200, height: 630, backgroundColor: C.cream } },

    // Left: product photo, nearly full bleed
    h('div', {
      style: {
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        width: 620, height: 630, padding: 24, flexShrink: 0,
        backgroundColor: C.cream,
      },
    },
      h('img', { src: productImg, style: { objectFit: 'contain', maxWidth: '100%', maxHeight: '100%' } })
    ),

    // Right: blue panel
    h('div', {
      style: {
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        flex: 1, padding: '52px 56px', backgroundColor: C.blue,
      },
    },
      // Spacer matching logo height (132px wide, 1366:715 ratio ≈ 69px tall) so text appears centred
      h('div', { style: { height: 69 } }),

      // Category + name block
      h('div', { style: { display: 'flex', flexDirection: 'column', gap: 12 } },
        h('div', {
          style: {
            fontFamily: 'Barlow Condensed', fontWeight: 700, fontSize: 18,
            letterSpacing: '0.18em', textTransform: 'uppercase',
            color: 'rgba(242,231,203,0.50)',
          },
        }, product.cat),
        h('div', {
          style: {
            fontFamily: 'Big Shoulders Display', fontWeight: 900,
            fontSize: 96, lineHeight: 0.88,
            textTransform: 'uppercase', color: C.cream,
            letterSpacing: '-0.01em',
          },
        }, product.name),
      ),

      // Logo at bottom
      h('img', { src: logoUrl, style: { width: 132, objectFit: 'contain', objectPosition: 'left bottom' } }),
    ),
  )

  const svg = await satori(el, { width: 1200, height: 630, fonts })
  return new Resvg(svg).render().asPng()
}

async function renderDefault(fonts, logoUrl) {
  // Logo is 1600:879 — at 360px height the width is ~654px
  const el = h('div', {
    style: {
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      width: 1200, height: 630, backgroundColor: C.blue, gap: 36,
    },
  },
    h('img', { src: logoUrl, style: { height: 360, objectFit: 'contain' } }),
    h('div', {
      style: {
        fontFamily: 'Barlow Condensed', fontWeight: 700, fontSize: 18,
        letterSpacing: '0.22em', textTransform: 'uppercase',
        color: 'rgba(242,231,203,0.45)',
      },
    }, 'Family-Owned Smallgoods · Lismore NSW · Est. 1987'),
  )

  const svg = await satori(el, { width: 1200, height: 630, fonts })
  return new Resvg(svg).render().asPng()
}

async function main() {
  console.log('Generating OG images...')
  mkdirSync(OUT, { recursive: true })

  const fonts = [
    { name: 'Big Shoulders Display', data: loadFont('big-shoulders-display', 900), weight: 900, style: 'normal' },
    { name: 'Barlow Condensed',       data: loadFont('barlow-condensed', 700),       weight: 700, style: 'normal' },
  ]

  const creamLogo   = logoDataUrl(resolve(root, 'public/assets/logos/chams-full-cream.svg'), 700)
  const logoForBlue = logoDataUrl(resolve(root, 'public/assets/logos/chams-main-cream.svg'), 500)

  const defPng = await renderDefault(fonts, creamLogo)
  writeFileSync(resolve(OUT, 'default.png'), defPng)
  console.log('  ✓ default')

  for (const product of PRODUCTS) {
    const png = await renderProduct(product, fonts, logoForBlue)
    if (!png) continue
    writeFileSync(resolve(OUT, `product-${product.slug}.png`), png)
    console.log(`  ✓ ${product.slug}`)
  }

  console.log(`Done — ${PRODUCTS.length + 1} images → public/assets/og/`)
}

main().catch(err => { console.error(err); process.exit(1) })
