/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { name, peerDependencies, dependencies } from './package.json'
import react from '@vitejs/plugin-react'

const packageName = name.replaceAll('@', '').replaceAll(/[/.]/g, '-')

export default defineConfig({
  build: {
    cssCodeSplit: false,
    lib: {
      entry: 'src/index.ts',
      name,
      cssFileName: packageName,
      fileName: format => `${packageName}.${format}.js`,
    },
    rollupOptions: {
      external: id => {
        // Externalize peer dependencies
        if (Object.keys(peerDependencies).includes(id)) {
          return true
        }
        // Externalize all dependencies
        if (Object.keys(dependencies).includes(id)) {
          return true
        }
        // Externalize React and related packages
        if (
          id === 'react' ||
          id === 'react-dom' ||
          id === 'react/jsx-runtime' ||
          id === 'react/jsx-dev-runtime' ||
          id.startsWith('use-sync-external-store')
        ) {
          return true
        }
        // Externalize sub-packages of dependencies (e.g., @base-ui/react/input, @base-ui/react/button)
        // This handles deep imports from these packages
        if (
          id.startsWith('@base-ui/') ||
          id.startsWith('@headlessui/') ||
          id.startsWith('react-aria-components') ||
          id.startsWith('react-i18next') ||
          id.startsWith('lucide-react') ||
          id === 'classnames' ||
          id.startsWith('classnames/')
        ) {
          return true
        }
        return false
      },
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'ReactJsxRuntime',
          'react/jsx-dev-runtime': 'ReactJsxDevRuntime',
        },
      },
    },
  },
  plugins: [
    dts({
      insertTypesEntry: true,
      include: ['src/**/*.ts', 'src/**/*.tsx'],
      exclude: [
        '**/*.test.ts',
        '**/*.test.tsx',
        '**/*.stories.ts',
        '**/*.stories.tsx',
      ],
    }),
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
})
