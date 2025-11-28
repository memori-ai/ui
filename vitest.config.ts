import { defineConfig } from 'vitest/config'
import { playwright } from '@vitest/browser-playwright'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // @ts-expect-error - Type mismatch between vite and vitest plugin types
  plugins: [react()],
  test: {
    browser: {
      enabled: true,
      provider: playwright(),
      instances: [{ browser: 'chromium' }],
    },
    // More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
    // projects: [
    //   {
    //     extends: true,
    //     test: {
    //       name: 'unit',
    //     },
    //   },
    //   {
    //     extends: true,
    //     plugins: [
    //       // The plugin will run tests for the stories defined in your Storybook config
    //       // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
    //       storybookTest({
    //         configDir: `${import.meta.dirname}/.storybook`,
    //       }),
    //     ],
    //     test: {
    //       name: 'storybook',
    //       browser: {
    //         enabled: true,
    //         headless: true,
    //         provider: playwright({}),
    //         instances: [
    //           {
    //             browser: 'chromium',
    //           },
    //         ],
    //       },
    //       setupFiles: ['.storybook/vitest.setup.ts'],
    //     },
    //   },
    // ],
  },
})
