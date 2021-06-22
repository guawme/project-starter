import { createApp, defineAsyncComponent } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

// import "tailwindcss/tailwind.css"

import { IonicVue } from '@ionic/vue';

// Unifying Tailwind and Ionic
import '@ionic/vue/css/core.css'
import "tailwindcss/base.css"
import '@ionic/vue/css/structure.css'
import '@ionic/vue/css/typography.css'
import '@ionic/vue/css/display.css'
import "tailwindcss/components.css"
import "tailwindcss/utilities.css"

import './styles/variables.css'

import './registerServiceWorker'

import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import es from './locales/es.json'

const i18n = createI18n({
    globalInjection: true,
    legacy: true,
    locale: 'es', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages: {
      en,
      es,
    },
  })

const app = createApp(App)
  .use(IonicVue)
  .use(router)
  .use(store)
  .use(i18n)

  app.component(
    'HelloWorld',
    defineAsyncComponent(() =>
      import(/* webpackChunkName: "helloWorld" */ '@/components/HelloWorld')
    )
  )

router.isReady().then(() => {
    app.mount('#app')
})
