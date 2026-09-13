// Conversión one-off de las fotos originales del mockup a WebP optimizado.
// Uso: node scripts/convert-images.mjs
import sharp from 'sharp'
import { mkdir } from 'node:fs/promises'
import path from 'node:path'

const SRC_DIR = path.resolve('src/assets/design-originals')
const OUT_DIR = path.resolve('src/assets')

const images = [
  { file: 'joaquin-gym.jpg', maxWidth: 1600, quality: 82 },
  { file: 'joaquin-sprint.jpeg', maxWidth: 1000, quality: 78 },
  { file: 'joaquin-lsit.jpeg', maxWidth: 1000, quality: 78 },
]

await mkdir(OUT_DIR, { recursive: true })

for (const { file, maxWidth, quality } of images) {
  const inputPath = path.join(SRC_DIR, file)
  const outputPath = path.join(OUT_DIR, file.replace(/\.jpe?g$/i, '.webp'))
  const meta = await sharp(inputPath).metadata()
  const resizeWidth = meta.width && meta.width > maxWidth ? maxWidth : undefined

  await sharp(inputPath)
    .resize({ width: resizeWidth })
    .webp({ quality })
    .toFile(outputPath)

  console.log(`✓ ${file} -> ${path.relative(process.cwd(), outputPath)}`)
}
