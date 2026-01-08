/**
 * @memori.ai/ui - Vite Configuration for Library Build
 *
 * This configuration properly bundles React components with CSS extraction.
 * Copy this file to your @memori.ai/ui repository as vite.config.ts
 */

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'
import { peerDependencies, dependencies } from './package.json'

export default defineConfig({
  plugins: [
    react({
      // Enable React Compiler if you want (optional)
      // babel: {
      //   plugins: [['babel-plugin-react-compiler', {}]],
      // },
    }),
    dts({
      include: ['src'],
      // Rollup declaration files into a single index.d.ts
      rollupTypes: true,
      // Insert type references for CSS files
      insertTypesEntry: true,
    }),
  ],

  build: {
    // Library mode configuration
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'MemoriUI',
      formats: ['es', 'cjs'],
      fileName: format => {
        if (format === 'es') return 'memori-ai-ui.es.js'
        if (format === 'cjs') return 'memori-ai-ui.cjs.js'
        return `memori-ai-ui.${format}.js`
      },
    },

    rollupOptions: {
      // Don't bundle peer dependencies or dependencies
      external: [
        'react/jsx-runtime',
        ...Object.keys(peerDependencies || {}),
        ...Object.keys(dependencies || {}),
      ],
      output: {
        // Provide global variables for UMD build (if needed)
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime',
        },
        // Control CSS output filename
        assetFileNames: assetInfo => {
          if (assetInfo.name?.endsWith('.css')) {
            return 'memori-ai-ui.css'
          }
          return assetInfo.name ?? '[name][extname]'
        },
        // Preserve module structure for tree-shaking
        preserveModules: false,
      },
    },

    // CRITICAL: Bundle all CSS into a single file
    cssCodeSplit: false,

    // Generate sourcemaps for easier debugging
    sourcemap: true,

    // Minify for production
    minify: 'esbuild',

    // Target modern browsers
    target: 'es2020',

    // Output directory
    outDir: 'dist',

    // Clean output directory before build
    emptyOutDir: true,
  },

  css: {
    // CSS Modules configuration (if you use .module.css files)
    modules: {
      localsConvention: 'camelCase',
      generateScopedName: '[name]__[local]___[hash:base64:5]',
    },
    // PostCSS configuration
    postcss: {
      plugins: [
        // Add autoprefixer, cssnano, etc. if needed
      ],
    },
  },

  // Resolve configuration
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
})
