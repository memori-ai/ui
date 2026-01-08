import type { Preview } from '@storybook/react-vite'
import type { Decorator } from '@storybook/react'
import React from 'react'

import '../src/styles.css'

const preview: Preview = {
  parameters: {
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

  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: [
          { value: 'light', title: 'Light', icon: 'circlehollow' },
          { value: 'dark', title: 'Dark', icon: 'circle' },
        ],
        dynamicTitle: true,
      },
    },
  },

  decorators: [
    ((Story, context) => {
      const { theme } = context.globals

      React.useEffect(() => {
        const root = document.documentElement

        // Remove both theme attributes/classes
        root.removeAttribute('data-theme')
        root.classList.remove('dark')

        if (theme === 'dark') {
          root.setAttribute('data-theme', 'dark')
          root.classList.add('dark')
        }
      }, [theme])

      return Story()
    }) as Decorator,
  ],
}

export default preview
