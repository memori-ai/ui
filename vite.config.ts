import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { name, peerDependencies } from './package.json'
import react from '@vitejs/plugin-react'

const packageName = name.replaceAll('@', '').replaceAll(/[/.]/g, '-')

// https://vite.dev/config/
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
      external: Object.keys(peerDependencies),
    },
  },
  plugins: [
    dts({
      insertTypesEntry: true,
      include: ['src/**/*.ts', 'src/**/*.tsx'],
    }),
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
})
