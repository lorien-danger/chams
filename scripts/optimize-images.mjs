import sharp from 'sharp'
import { readdirSync, existsSync, mkdirSync, statSync } from 'fs'
import { resolve, dirname, basename, extname, join } from 'path'
import { fileURLToPath } from 'url'

const __dir = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dir, '..')
const PHOTO_DIRS = [
  resolve(root, 'public/assets/photos'),
  resolve(root, 'public/assets/photos/products'),
]
const FORMATS = [
  { ext: 'avif', opts: { quality: 65 } },
  { ext: 'webp', opts: { quality: 78 } },
]

function collectImages(dir) {
  const files = []
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) continue
    if (/\.(png|jpe?g)$/i.test(entry.name)) {
      files.push(join(dir, entry.name))
    }
  }
  return files
}

async function main() {
  let converted = 0
  let skipped = 0

  for (const dir of PHOTO_DIRS) {
    if (!existsSync(dir)) continue
    const images = collectImages(dir)

    for (const src of images) {
      const name = basename(src, extname(src))
      const srcMtime = statSync(src).mtimeMs

      for (const fmt of FORMATS) {
        const dest = join(dirname(src), `${name}.${fmt.ext}`)
        if (existsSync(dest) && statSync(dest).mtimeMs >= srcMtime) {
          skipped++
          continue
        }
        await sharp(src)[fmt.ext](fmt.opts).toFile(dest)
        converted++
      }
    }
  }

  console.log(`Image optimization: ${converted} generated, ${skipped} up-to-date`)
}

main().catch(err => { console.error(err); process.exit(1) })
