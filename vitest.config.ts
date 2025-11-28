import { defineConfig } from 'vitest/config'
import { playwright } from '@vitest/browser-playwright'
import react from '@vitejs/plugin-react'

const isCI = process.env.CI === 'true'

export default defineConfig({
  // @ts-expect-error - Type mismatch between vite and vitest plugin types
  plugins: [react()],
  test: isCI
    ? {
        environment: 'jsdom',
      }
    : {
        browser: {
          enabled: true,
          provider: playwright(),
          instances: [{ browser: 'chromium' }],
        },
      },
})
