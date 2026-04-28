import type { Preview } from '@storybook/react-vite'
import type { Decorator } from '@storybook/react'
import React from 'react'

import { MemoriI18nProvider } from '../src/i18n/MemoriI18nProvider'
import '../src/styles.css'

// Decorator to sync Storybook background control with component theme
const withTheme: Decorator = (Story, context) => {
  // Apply theme based on Storybook background control
  const background =
    context.globals.backgrounds?.value ||
    context.parameters.backgrounds?.default ||
    'light'
  const root = document.documentElement

  // Remove both theme attributes/classes
  root.removeAttribute('data-theme')
  root.classList.remove('dark')

  // Apply dark theme if background is dark
  if (background === 'dark') {
    root.setAttribute('data-theme', 'dark')
    root.classList.add('dark')
  }

  return React.createElement(Story)
}

/** Same provider as consuming apps: bundled `memoriI18n` with all `table.*` locales. */
const withI18n: Decorator = Story => {
  return React.createElement(
    MemoriI18nProvider,
    null,
    React.createElement(Story),
  )
}

const style = document.createElement('style')
style.textContent = `
  body {
    color: var(--memori-text-color);
  }
`
document.head.appendChild(style)

const preview: Preview = {
  initialGlobals: {
    backgrounds: {
      value: 'light',
    },
  },
  parameters: {
    backgrounds: {
      options: {
        // 👇 Default options
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
      test: 'todo',
    },
  },
  decorators: [withI18n, withTheme],
}

export default preview
