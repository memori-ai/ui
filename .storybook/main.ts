import type { StorybookConfig } from '@storybook/react-vite'
import { withoutVitePlugins } from '@storybook/builder-vite'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-docs',
    '@storybook/addon-onboarding',
    '@storybook/addon-a11y',
    '@storybook/addon-vitest',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  async viteFinal(config) {
    // Remove dts plugin during Storybook builds to avoid api-extractor errors
    // Storybook doesn't need TypeScript declaration files
    config.plugins = await withoutVitePlugins(config.plugins, [
      'vite-plugin-dts',
    ])
    return config
  },
}
export default config
