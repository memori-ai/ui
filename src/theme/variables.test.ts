import { readFileSync, readdirSync, statSync } from 'node:fs'
import { dirname, join, relative } from 'node:path'
import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'

const SRC_ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const VARIABLES_PATH = join(SRC_ROOT, 'theme/variables.css')

const REQUIRED_TOKENS: Record<string, string> = {
  '--memori-radius-xs': '.5rem',
  '--memori-radius-sm': '.75rem',
  '--memori-radius-md': '1.25rem',
  '--memori-radius-lg': '1.75rem',
  '--memori-radius-full': '9999px',
  '--memori-radius-control': 'var(--memori-radius-sm)',
  '--memori-radius-surface': 'var(--memori-radius-md)',
  '--memori-radius-overlay': 'var(--memori-radius-lg)',
  '--memori-radius-composer': 'var(--memori-radius-md)',
  '--memori-radius-tooltip': 'var(--memori-radius-xs)',
  '--memori-radius-tail': '.375rem',
  '--memori-icon-button-size': '44px',
  '--memori-icon-button-icon-size': '20px',
  '--memori-text-size-xs': '.625rem',
  '--memori-text-size-sm': '.875rem',
  '--memori-text-size-md': '1rem',
  '--memori-text-size-lg': '1.125rem',
  '--memori-text-size-xl': '1.25rem',
  '--memori-text-size-2xl': '1.5rem',
  '--memori-text-size-3xl': '1.75rem',
  '--memori-motion-ease-out': 'cubic-bezier(0.33, 1, 0.68, 1)',
  '--memori-motion-delay-none': '0s',
  '--memori-motion-delay-short': '.4s',
  '--memori-motion-delay-long': '.7s',
  '--memori-motion-duration-loop': '1s',
  '--memori-motion-ease-linear': 'linear',
}

const FORBIDDEN_TOKENS = [
  '--memori-radius-field',
  '--memori-radius-selector',
  '--memori-radius-box',
  '--memori-radius-pill',
  '--memori-text-size-small',
  '--memori-text-size-base',
  '--memori-text-size-large',
  '--memori-text-size-heading',
  '--memori-text-size-heading-large',
  '--memori-text-size-heading-xlarge',
]

const TOKEN_DEF = /(--memori-[a-z0-9-]+)\s*:\s*([^;]+);/g
const BARE_EASE = /var\(--memori-motion-ease\)/
const HARDCODED_LOOP =
  /(?:animation:\s*)?[a-z-]*\s*1s\s+(?:infinite\s+)?linear(?:\s+infinite)?/i

function normalizeValue(value: string): string {
  return value
    .trim()
    .replace(/\s+/g, ' ')
    .replace(/^0\./g, '.')
    .replace(/ 0\./g, ' .')
}

function parseRootTokens(css: string): Map<string, string> {
  const rootBlock = css.match(/:root\s*\{([\s\S]*?)\n\s*\}/)
  if (!rootBlock) {
    throw new Error('Could not find :root block in variables.css')
  }

  const body = rootBlock[1]
  if (!body) {
    throw new Error('Empty :root block in variables.css')
  }

  const tokens = new Map<string, string>()
  for (const match of body.matchAll(TOKEN_DEF)) {
    const name = match[1]
    const value = match[2]
    if (!name || !value) continue
    tokens.set(name, normalizeValue(value))
  }
  return tokens
}

function walkFiles(dir: string, acc: string[] = []): string[] {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    const stat = statSync(full)
    if (stat.isDirectory()) {
      if (entry === '__snapshots__' || entry === 'node_modules') continue
      walkFiles(full, acc)
    } else if (
      /\.(css|tsx|ts|jsx|js|md)$/.test(entry) &&
      !entry.endsWith('.test.ts')
    ) {
      acc.push(full)
    }
  }
  return acc
}

describe('design tokens', () => {
  const css = readFileSync(VARIABLES_PATH, 'utf8')
  const tokens = parseRootTokens(css)

  it('defines the 2.0 radius, type, motion, and icon-button scale', () => {
    for (const [name, value] of Object.entries(REQUIRED_TOKENS)) {
      expect(tokens.get(name), name).toBe(normalizeValue(value))
    }
  })

  it('does not keep compatibility aliases or the duplicate ease token', () => {
    for (const name of FORBIDDEN_TOKENS) {
      expect(tokens.has(name), name).toBe(false)
    }
    expect(tokens.has('--memori-motion-ease')).toBe(false)
  })

  it('does not mention retired tokens in library source', () => {
    const offenders: string[] = []
    for (const file of walkFiles(SRC_ROOT)) {
      const contents = readFileSync(file, 'utf8')
      for (const token of FORBIDDEN_TOKENS) {
        if (contents.includes(token)) {
          offenders.push(`${relative(SRC_ROOT, file)}: ${token}`)
        }
      }
      if (BARE_EASE.test(contents)) {
        offenders.push(`${relative(SRC_ROOT, file)}: var(--memori-motion-ease)`)
      }
    }
    expect(offenders).toEqual([])
  })

  it('uses loop motion tokens instead of hardcoded 1s linear', () => {
    const offenders: string[] = []
    for (const file of walkFiles(SRC_ROOT)) {
      if (!file.endsWith('.css') && !file.endsWith('.tsx')) continue
      const contents = readFileSync(file, 'utf8')
      if (HARDCODED_LOOP.test(contents)) {
        offenders.push(relative(SRC_ROOT, file))
      }
    }
    expect(offenders).toEqual([])
  })
})
