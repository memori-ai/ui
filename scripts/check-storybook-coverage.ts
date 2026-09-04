#!/usr/bin/env bun
/**
 * Fails if a public UI component export has no colocated `*.stories.tsx`.
 * Allowlists providers, hooks, i18n bags, and helpers (see ALLOWLIST).
 */
import { readdirSync, existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

const ROOT = join(import.meta.dir, '..')
const INDEX = join(ROOT, 'src/index.ts')
const COMPONENTS = join(ROOT, 'src/components')

/** Public names that are not expected to have a dedicated story file. */
const ALLOWLIST = new Set([
  // Alert compound / managers — covered by Alert.stories
  'AlertProvider',
  'AlertViewport',
  'useAlertManager',
  'createAlertOptions',
  // Field compound
  'FieldGroup',
  // Providers / hooks / theme
  'MemoriUIProvider',
  'PortalContainerProvider',
  'ThemeProvider',
  'usePortalContainer',
  'useMemoriTheme',
  'useTheme',
  'MemoriI18nProvider',
  'memoriI18n',
  'addMemoriTableToI18n',
  // i18n locale bags
  'tableEn',
  'tableIt',
  'tableEs',
  'tableFr',
  'tableDe',
  'MEMORI_TABLE_LOCALES',
  'expandableEn',
  'expandableIt',
  'expandableEs',
  'expandableFr',
  'expandableDe',
  'MEMORI_EXPANDABLE_LOCALES',
  'alertEn',
  'alertIt',
  'alertEs',
  'alertFr',
  'alertDe',
  'MEMORI_ALERT_LOCALES',
  // Table helpers
  'getDetailedPaginationPadding',
  'getPaginationWindowItems',
  'PAGINATION_DETAILED_SLOT_COUNT',
  'PAGINATION_LEADING_BLOCK_SIZE',
])

function parseExportedValues(source: string): string[] {
  const names = new Set<string>()
  const blockRe = /export\s*\{([^}]+)\}/g
  let m: RegExpExecArray | null
  while ((m = blockRe.exec(source))) {
    const body = m[1] ?? ''
    for (const part of body.split(',')) {
      const trimmed = part.trim()
      if (!trimmed || trimmed.startsWith('type ')) continue
      const asMatch = trimmed.match(/^(\w+)\s+as\s+(\w+)$/)
      const name = asMatch?.[2] ?? trimmed.split(/\s+/)[0]
      if (name && !name.startsWith('type')) names.add(name)
    }
  }
  const singleRe = /export\s+(?:const|function|class)\s+(\w+)/g
  while ((m = singleRe.exec(source))) {
    if (m[1]) names.add(m[1])
  }
  return [...names]
}

function componentDirFor(exportName: string): string | null {
  const direct = join(COMPONENTS, exportName)
  if (existsSync(direct) && readdirSync(direct).some(f => f.endsWith('.tsx'))) {
    return direct
  }
  return null
}

function hasStories(dir: string): boolean {
  return readdirSync(dir).some(
    f => f.endsWith('.stories.tsx') || f.endsWith('.stories.ts'),
  )
}

const source = readFileSync(INDEX, 'utf8')
const exported = parseExportedValues(source)
const missing: string[] = []

for (const name of exported) {
  if (ALLOWLIST.has(name)) continue
  const dir = componentDirFor(name)
  if (!dir) {
    // Not a component folder export — skip (types-only blocks already filtered)
    continue
  }
  if (!hasStories(dir)) {
    missing.push(`${name} → expected *.stories.tsx in src/components/${name}/`)
  }
}

if (missing.length) {
  console.error('Storybook coverage check failed:\n')
  for (const line of missing) console.error(`  - ${line}`)
  console.error(
    `\nAdd stories or allowlist the export in scripts/check-storybook-coverage.ts.`,
  )
  process.exit(1)
}

console.log(
  `Storybook coverage OK (${exported.length} exports checked, ${ALLOWLIST.size} allowlisted).`,
)
