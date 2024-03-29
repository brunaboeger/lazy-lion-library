/** @type { import('@storybook/vue3-vite').StorybookConfig } */

import '../src/plugins/fontawesome';

const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {
      docgen: 'vue-component-meta'
    }
  },
  docs: {
    autodocs: 'tag',
    defaultName: 'Documentation',
  },
  staticDirs: ['../src/plugins']
}
export default config
