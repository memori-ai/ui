import React from 'react'
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Button } from './Button'

const styles = readFileSync(
  join(dirname(fileURLToPath(import.meta.url)), 'styles.css'),
  'utf8',
)

function ruleBody(
  selector: string,
  terminator: 'brace' | 'list' = 'brace',
): string {
  let from = 0
  while (from < styles.length) {
    const start = styles.indexOf(selector, from)
    if (start < 0) return ''
    const after = styles.slice(start + selector.length)
    const matches =
      terminator === 'brace' ? /^\s*\{/.test(after) : /^\s*[,{]/.test(after)
    if (matches) {
      const open = styles.indexOf('{', start)
      const close = styles.indexOf('}', open)
      return styles.slice(open + 1, close)
    }
    from = start + selector.length
  }
  return ''
}

describe('Button states', () => {
  it('sets the primary hover surface to --memori-primary-hover', () => {
    const hover = ruleBody(
      '.memori-button--primary:hover:not(:disabled, .memori-button--disabled)',
    )
    expect(hover).toContain('background-color: var(--memori-primary-hover)')
    expect(hover).not.toContain('scale(')
  })

  it('keeps the primary active surface on --memori-primary-active', () => {
    const active = ruleBody(
      '.memori-button--primary:active:not(:disabled, .memori-button--disabled)',
      'list',
    )
    expect(active).toContain('background-color: var(--memori-primary-active)')
  })

  it('scales only primary, secondary and danger, and leaves circle and icon-only still', () => {
    const compact = styles.replace(/\s+/g, '')
    expect(styles).not.toMatch(
      /\.memori-button:hover:not\(:disabled, \.memori-button--disabled\)\s*\{[^}]*scale\(1\.015\)/,
    )
    expect(compact).toContain(
      '.memori-button--primary:hover:not(:disabled,.memori-button--disabled,.memori-button--circle,.memori-button--icon-only)',
    )
    expect(compact).toContain(
      '.memori-button--secondary:hover:not(:disabled,.memori-button--disabled,.memori-button--circle,.memori-button--icon-only)',
    )
    expect(compact).toContain(
      '.memori-button--danger:hover:not(:disabled,.memori-button--disabled,.memori-button--circle,.memori-button--icon-only',
    )
    expect(styles).toContain('transform: scale(1.015)')
    expect(styles).toContain('transform: scale(0.98)')

    const still = [
      '.memori-button--ghost:hover:not(:disabled, .memori-button--disabled)',
      '.memori-button--link:hover:not(:disabled, .memori-button--disabled)',
      '.memori-button--toolbar:hover:not(:disabled, .memori-button--disabled)',
      '.memori-button--circle:hover:not(:disabled, .memori-button--disabled)',
      '.memori-button--icon-only:hover:not(:disabled, .memori-button--disabled)',
    ]
    for (const selector of still) {
      const body = ruleBody(selector, 'list')
      expect(body).toContain('transform: none')
      expect(body).not.toContain('scale(')
    }
  })

  it('uses one disabled treatment for :disabled and .memori-button--disabled', () => {
    const shared = ruleBody(
      '.memori-button:disabled,\n    .memori-button--disabled',
    )
    expect(shared).toContain('opacity: 0.6')
    expect(styles).not.toContain('opacity: 0.65')
    expect(styles).not.toContain('opacity: 0.35')
    expect(styles).not.toContain('opacity: 0.3')
  })

  it('paints toolbar active with --memori-icon-active-bg', () => {
    const active = ruleBody('.memori-button--toolbar.memori-button--active')
    expect(active).toContain('background-color: var(--memori-icon-active-bg)')
    expect(active).not.toContain('--memori-main-background')
  })

  it('paints toolbar recording as a neutral gray stop', () => {
    render(
      <Button
        variant="toolbar"
        recording
      >
        Mic
      </Button>,
    )
    const button = screen.getByRole('button', { name: 'Mic' })
    expect(button).toHaveClass('memori-button--toolbar')
    expect(button).toHaveClass('memori-button--recording')

    const recording = ruleBody(
      '.memori-button--toolbar.memori-button--recording',
    )
    expect(recording).toContain(
      'background-color: color-mix(in oklch, var(--memori-text-color) 8%, var(--memori-secondary-background))',
    )
    expect(recording).toContain('color: var(--memori-text-color)')
    expect(recording).not.toContain('--memori-error')
    expect(recording).not.toContain('--memori-icon-recording-bg')
  })

  it('paints disabled toolbar, primary, and outline as solid gray chips without a shadow', () => {
    const toolbar = ruleBody(
      '.memori-button--toolbar.memori-button--disabled',
      'list',
    )
    const primary = ruleBody(
      '.memori-button.memori-button--primary:disabled',
      'list',
    )
    const outline = ruleBody(
      '.memori-button.memori-button--outline:disabled',
      'list',
    )
    const gray =
      'background-color: color-mix(in oklch, var(--memori-text-color) 8%, var(--memori-secondary-background))'

    expect(toolbar).toContain(gray)
    expect(toolbar).toContain('opacity: 1')
    expect(toolbar).toContain('box-shadow: none')
    expect(toolbar).toContain('color: var(--memori-icon-button-icon)')
    expect(primary).toContain(gray)
    expect(primary).toContain('opacity: 1')
    expect(primary).toContain('box-shadow: none')
    expect(primary).toContain('color: var(--memori-icon-button-icon)')
    expect(outline).toBe(primary)
  })

  it('gives inverse its own hover and active surfaces', () => {
    render(<Button variant="inverse">On dark</Button>)
    expect(screen.getByRole('button', { name: 'On dark' })).toHaveClass(
      'memori-button--inverse',
    )

    const hover = ruleBody(
      '.memori-button--inverse:hover:not(:disabled, .memori-button--disabled)',
    )
    const active = ruleBody(
      '.memori-button--inverse:active:not(:disabled, .memori-button--disabled)',
      'list',
    )
    const rest = ruleBody('.memori-button--inverse')
    expect(rest).toContain('color: var(--memori-surface-contrast)')
    expect(rest).not.toContain('--memori-primary-content')
    expect(hover).toContain(
      'background-color: color-mix(in oklch, var(--memori-surface-contrast), transparent 88%)',
    )
    expect(active).toContain(
      'background-color: color-mix(in oklch, var(--memori-surface-contrast), transparent 72%)',
    )
    expect(hover).not.toContain('--memori-primary-content')
    expect(active).not.toContain('--memori-primary-content')
    expect(active).not.toEqual(hover)
  })

  it('marks a disabled button once, for the attribute and the class', () => {
    render(<Button disabled>Off</Button>)
    const button = screen.getByRole('button', { name: 'Off' })
    expect(button).toBeDisabled()
    expect(button).toHaveClass('memori-button--disabled')
  })

  it('marks toolbar active from the active prop', () => {
    render(
      <Button
        variant="toolbar"
        active
      >
        Tools
      </Button>,
    )
    const button = screen.getByRole('button', { name: 'Tools' })
    expect(button).toHaveClass('memori-button--toolbar')
    expect(button).toHaveClass('memori-button--active')
  })

  it('renders a circle without a scale class', () => {
    render(
      <Button
        variant="primary"
        shape="circle"
        aria-label="Add"
        icon={<span aria-hidden>＋</span>}
      />,
    )
    const button = screen.getByRole('button', { name: 'Add' })
    expect(button).toHaveClass('memori-button--circle')
    expect(button.className).not.toMatch(/scale/)
  })
})
