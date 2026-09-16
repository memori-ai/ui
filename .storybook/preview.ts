import type { Preview, Decorator } from '@storybook/react-vite'
import React from 'react'

import { MemoriI18nProvider } from '../src/i18n/MemoriI18nProvider'
import { memoriI18n } from '../src/i18n/i18n'
import { MemoriUIProvider } from '../src/theme/MemoriUIProvider'
import type { Theme } from '../src/theme/useTheme'
import '../src/styles.css'

type BrandPreset = 'default' | 'purple' | 'teal' | 'coral'
type BrandHook = '--memori-primary-color' | '--memori-secondary-color'

const BRAND_HOOK_KEYS = [
  '--memori-primary-color',
  '--memori-secondary-color',
] as const satisfies readonly BrandHook[]

const BRAND_PRESETS: Record<BrandPreset, Partial<Record<BrandHook, string>>> = {
  default: {},
  purple: {
    '--memori-primary-color': 'oklch(51.55% 0.1653 307.99deg)',
    '--memori-secondary-color': 'oklch(65% 0.12 280deg)',
  },
  teal: {
    '--memori-primary-color': 'oklch(55% 0.12 185deg)',
    '--memori-secondary-color': 'oklch(70% 0.08 200deg)',
  },
  coral: {
    '--memori-primary-color': 'oklch(62% 0.18 35deg)',
    '--memori-secondary-color': 'oklch(72% 0.1 50deg)',
  },
}

/**
 * Brand hooks must be set on `:root` / `documentElement` — the same selector
 * that defines `--memori-primary` / `--memori-secondary`. Setting them only on a
 * nested wrapper does not re-resolve those aliases (inherited computed values).
 */
function applyBrandHooks(vars: Partial<Record<BrandHook, string>>) {
  const root = document.documentElement
  for (const key of BRAND_HOOK_KEYS) {
    const value = vars[key]
    if (value) {
      root.style.setProperty(key, value)
    } else {
      root.style.removeProperty(key)
    }
  }
}

function resolveThemeFromContext(context: {
  globals?: Record<string, unknown>
  parameters?: Record<string, unknown>
}): Theme {
  const backgrounds = context.globals?.backgrounds as
    | { value?: string }
    | string
    | undefined
  const background =
    (typeof backgrounds === 'string' ? backgrounds : backgrounds?.value) ||
    (context.parameters?.backgrounds as { default?: string } | undefined)
      ?.default ||
    'light'
  return background === 'dark' ? 'dark' : 'light'
}

const withThemeAndProviders: Decorator = (Story, context) => {
  const theme = resolveThemeFromContext(context)
  const root = document.documentElement

  root.removeAttribute('data-theme')
  root.classList.remove('dark')
  if (theme === 'dark') {
    root.setAttribute('data-theme', 'dark')
    root.classList.add('dark')
  }

  const brand = (
    typeof context.globals?.brand === 'string'
      ? context.globals.brand
      : 'default'
  ) as BrandPreset
  applyBrandHooks(BRAND_PRESETS[brand] ?? BRAND_PRESETS.default)

  return React.createElement(StorybookProviders, {
    theme,
    children: React.createElement(Story),
  })
}

function StorybookProviders({
  theme,
  children,
}: {
  theme: Theme
  children: React.ReactNode
}) {
  return React.createElement(
    MemoriI18nProvider,
    { i18n: memoriI18n },
    React.createElement(
      MemoriUIProvider,
      { theme },
      React.createElement(
        'div',
        {
          style: {
            color: 'var(--memori-text-color)',
            minHeight: '100%',
          },
        },
        children,
      ),
    ),
  )
}

const preview: Preview = {
  globalTypes: {
    brand: {
      description: 'Override --memori-primary-color / --memori-secondary-color',
      toolbar: {
        title: 'Brand',
        icon: 'paintbrush',
        items: [
          { value: 'default', title: 'Default tokens' },
          { value: 'purple', title: 'Purple' },
          { value: 'teal', title: 'Teal' },
          { value: 'coral', title: 'Coral' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    backgrounds: {
      value: 'light',
    },
    brand: 'default',
  },
  parameters: {
    backgrounds: {
      options: {
        dark: { name: 'Dark', value: 'oklch(32.1% 0 0deg)' },
        light: { name: 'Light', value: 'oklch(97.1% 0 0deg)' },
      },
      default: 'light',
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'error',
    },
    options: {
      storySort: {
        order: [
          'Azioni e navigazione',
          'Overlay',
          'Form',
          'Feedback',
          'Contenuto',
          'Infrastruttura',
          'Esempi',
          '*',
        ],
      },
    },
  },
  decorators: [withThemeAndProviders],
}

export default preview
