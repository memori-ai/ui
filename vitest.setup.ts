// Import jest-dom matchers for Vitest
// Using the vitest-specific import ensures proper type integration
import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import { afterEach, beforeAll } from 'vitest'

// Set React act environment to prevent scheduler warnings
;(globalThis as any).IS_REACT_ACT_ENVIRONMENT = true

// Cleanup after each test
afterEach(async () => {
  cleanup()
  // Give React scheduler time to flush pending work
  await new Promise(resolve => setTimeout(resolve, 0))
})

beforeAll(() => {
  // Mock window.matchMedia for jsdom
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: (query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: () => {}, // deprecated
      removeListener: () => {}, // deprecated
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => false,
    }),
  })

  // Mock IntersectionObserver
  global.IntersectionObserver = class IntersectionObserver {
    constructor() {}
    disconnect() {}
    observe() {}
    takeRecords() {
      return []
    }
    unobserve() {}
  } as any

  // Mock ResizeObserver
  global.ResizeObserver = class ResizeObserver {
    constructor() {}
    disconnect() {}
    observe() {}
    unobserve() {}
  } as any
})
