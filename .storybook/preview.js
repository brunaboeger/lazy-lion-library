/** @type { import('@storybook/vue3').Preview } */

import '../src/assets/scss/app.scss';
import '@fontsource/material-icons';
import '../src/plugins/fontawesome.js';

import { setup } from '@storybook/vue3';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

setup((app) => {
  app.component('font-awesome', FontAwesomeIcon);
})

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      }
    },
  },

  globalTypes: {
    locale: {
      name: 'Locale',
      description: 'Change the language of the app',
      toolbar: {
        icon: 'globe',
        dynamicTitle: true,
        items: [ { value: 'pt-BR', title: 'Brazilian Portuguese', left: '🏴'} ],
      },
    },
  },

  layout: 'centered',
}

 

export default preview
