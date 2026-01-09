import type { StorybookConfig } from '@storybook/react-vite'
import { mergeConfig } from 'vite'

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
    return mergeConfig(config, {
      plugins: config.plugins?.filter(
        plugin =>
          !(
            plugin &&
            typeof plugin === 'object' &&
            'name' in plugin &&
            plugin.name === 'vite-plugin-dts'
          ),
      ),
    })
  },
}
export default config
