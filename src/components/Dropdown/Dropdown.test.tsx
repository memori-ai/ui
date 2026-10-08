import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { expect, it } from 'vitest'

const styles = readFileSync(
  join(dirname(fileURLToPath(import.meta.url)), 'styles.css'),
  'utf8',
)

it('gives Dropdown.Item a hover fill that reads on the popup', () => {
  const match = styles.match(
    /\.memori-dropdown__item:hover:not\(\[data-disabled\]\),[\s\S]*?\{([^}]*)\}/,
  )
  const body = match?.[1] ?? ''
  expect(body).toContain('background-color:')
  expect(body).not.toContain('--memori-main-background')
  expect(body).toContain('var(--memori-text-color)')
  expect(body).toContain('var(--memori-secondary-background)')
  expect(styles).not.toContain('memori-dropdown--mobile')
})
