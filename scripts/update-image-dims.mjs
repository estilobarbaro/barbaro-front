/**
 * scripts/update-image-dims.mjs
 * ─────────────────────────────────────────────────────────────
 * Scans all MDX files in src/content/gallery/ and src/content/services/
 * that reference a LOCAL image (/images/...), reads its real pixel
 * dimensions with sharp, and writes imageWidth + imageHeight back
 * into the MDX frontmatter automatically.
 *
 * Run once whenever you add or replace images:
 *   npm run update-image-dims
 */

import sharp from 'sharp'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')

const MDX_DIRS = [
  path.join(ROOT, 'src/content/gallery'),
  path.join(ROOT, 'src/content/services'),
]

/** Extract frontmatter field value from raw MDX string */
function getFrontmatterField(raw, field) {
  const match = raw.match(new RegExp(`^${field}:\\s*["']?([^"'\\r\\n]+)["']?`, 'm'))
  return match ? match[1].trim() : null
}

/** Set or replace a frontmatter field in raw MDX string */
function setFrontmatterField(raw, field, value) {
  const pattern = new RegExp(`^(${field}:\\s*).*$`, 'm')
  if (pattern.test(raw)) {
    return raw.replace(pattern, `$1${value}`)
  }
  // Field doesn't exist — insert before closing ---
  return raw.replace(/^(---\s*\n)([\s\S]*?)(^---)/m, (_, open, body, close) => {
    return `${open}${body}${field}: ${value}\n${close}`
  })
}

async function processMdxFile(filePath) {
  let raw = fs.readFileSync(filePath, 'utf8')

  // Only process MDX with a local image reference
  const imageSrc =
    getFrontmatterField(raw, 'imageSrc') ||
    getFrontmatterField(raw, 'image')

  if (!imageSrc || !imageSrc.startsWith('/images/')) {
    console.log(`  ⏭  ${path.basename(filePath)} — no local image, skipping`)
    return
  }

  const absoluteImagePath = path.join(ROOT, 'public', imageSrc)
  if (!fs.existsSync(absoluteImagePath)) {
    console.warn(`  ⚠  ${path.basename(filePath)} — image not found: ${absoluteImagePath}`)
    return
  }

  const { width, height } = await sharp(absoluteImagePath).metadata()
  if (!width || !height) {
    console.warn(`  ⚠  ${path.basename(filePath)} — could not read dimensions`)
    return
  }

  const orientation = width > height ? 'landscape' : width < height ? 'portrait' : 'square'

  // Update frontmatter
  raw = setFrontmatterField(raw, 'imageWidth', width)
  raw = setFrontmatterField(raw, 'imageHeight', height)
  raw = setFrontmatterField(raw, 'imageOrientation', orientation)

  fs.writeFileSync(filePath, raw, 'utf8')
  console.log(`  ✅ ${path.basename(filePath).padEnd(40)} ${width}×${height}  [${orientation}]`)
}

async function main() {
  console.log('\n🖼  Updating image dimensions in MDX frontmatter...\n')

  for (const dir of MDX_DIRS) {
    if (!fs.existsSync(dir)) {
      console.log(`  ⏭  ${dir} — directory not found, skipping`)
      continue
    }

    const files = fs.readdirSync(dir).filter(f => f.endsWith('.mdx'))
    console.log(`📁 ${path.relative(ROOT, dir)} (${files.length} files)`)

    for (const file of files) {
      await processMdxFile(path.join(dir, file))
    }
    console.log()
  }

  console.log('✨ Done!\n')
}

main().catch(err => {
  console.error('❌ Error:', err.message)
  process.exit(1)
})
