import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'Lazy Lion Library',
    brandImage: '/logo.png',

    // colorPrimary: '#6AE98B',
    // colorSecondary: '#00C8D5',
    // appBg: '#F0F0F0',
    // appBorderColor: '#b9c0c3',
    // appBorderRadius: 4,
    // appContentBg: '#FFFFFF',
    // barBg: '#FFD700',
    // barTextColor: '#FFFFFF',
    // textColor: '#120B1E',
    // fontCode: 'monospace',
  }),
});

// export default create({
//   base: 'light',
  // Typography
//   fontBase: '"Open Sans", sans-serif',
//   fontCode: 'monospace',

//   brandTitle: 'My custom Storybook',
//   brandUrl: 'https://example.com',
//   brandImage: 'https://storybook.js.org/images/placeholders/350x150.png',
//   brandTarget: '_self',

  //
//   colorPrimary: '#3A10E5',
//   colorSecondary: '#585C6D',

  // UI
//   appBg: '#ffffff',
//   appContentBg: '#ffffff',
//   appPreviewBg: '#ffffff',
//   appBorderColor: '#585C6D',
//   appBorderRadius: 4,

  // Text colors
//   textColor: '#10162F',
//   textInverseColor: '#ffffff',

  // Toolbar default and active colors
//   barTextColor: '#9E9E9E',
//   barSelectedColor: '#585C6D',
//   barHoverColor: '#585C6D',
//   barBg: '#ffffff',

  // Form colors
//   inputBg: '#ffffff',
//   inputBorder: '#10162F',
//   inputTextColor: '#10162F',
//   inputBorderRadius: 2,
// });