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
        // Externalize React and related packages (including sub-paths)
        if (
          id === 'react' ||
          id === 'react-dom' ||
          id === 'react/jsx-runtime' ||
          id === 'react/jsx-dev-runtime' ||
          id === 'react-compiler-runtime' ||
          id.startsWith('react-compiler-runtime/')
        ) {
          return true
        }
        // Externalize sub-packages of dependencies
        if (
          id.startsWith('@base-ui/') ||
          id.startsWith('@headlessui/') ||
          id.startsWith('react-aria-components') ||
          id.startsWith('react-i18next') ||
          id.startsWith('i18next') ||
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
      // Rimuovi React Compiler per evitare problemi con il bundle della libreria
      // Le app che consumano la libreria possono applicare le ottimizzazioni
    }),
  ],
})
