import { defineConfig } from 'vitest/config'
import { playwright } from '@vitest/browser-playwright'
import react from '@vitejs/plugin-react'

const isCI = process.env.CI === 'true'

export default defineConfig({
  plugins: [react()],
  test: isCI
    ? {
        environment: 'happy-dom',
        setupFiles: './vitest.setup.ts',
        globals: true,
      }
    : {
        browser: {
          enabled: true,
          provider: playwright(),
          instances: [{ browser: 'chromium' }],
        },
        setupFiles: './vitest.setup.ts',
        globals: true,
      },
})
