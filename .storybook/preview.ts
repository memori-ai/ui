import type { Preview } from '@storybook/react-vite'
import type { Decorator } from '@storybook/react'
import React from 'react'

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

const style = document.createElement('style')
style.textContent = `
  :root {
    --memori-label-color: #141414;
  }
  :root.dark {
    --memori-label-color: #fff;
  }

  body {
    color: var(--memori-label-color);
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
        dark: { name: 'Dark', value: '#191919' },
        light: { name: 'Light', value: '#fff' },
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
  decorators: [withTheme],
}

export default preview
