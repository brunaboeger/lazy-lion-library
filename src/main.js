import './assets/scss/app.scss'

import { createApp } from 'vue'

import App from './App.vue'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import './plugins/fontawesome'

const app = createApp(App)

app.component('font-awesome', FontAwesomeIcon)

app.mount('#app')
