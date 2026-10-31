// Lists which photographs from the site are still missing from /public/images.
// Run with: npm run check:images
import { existsSync, readFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const sources = ['app/data/menu.ts', 'app/data/site.ts']
const found = new Set()

for (const file of sources) {
  const body = readFileSync(resolve(root, file), 'utf8')
  for (const match of body.matchAll(/['"`](\/images\/[^'"`]+\.(?:jpg|jpeg|png|webp))['"`]/g)) {
    found.add(match[1])
  }
}

const missing = [...found].filter((p) => !existsSync(resolve(root, 'public', p.slice(1)))).sort()

if (missing.length === 0) {
  console.log(`All ${found.size} photographs are in place.`)
} else {
  console.log(`${missing.length} of ${found.size} photographs still need to be added to /public:\n`)
  for (const p of missing) console.log('  public' + p)
  console.log('\nUntil then the site shows a tasteful placeholder in their place.')
  process.exitCode = 0
}
