import { defineNuxtConfig } from 'nuxt'
import Icons from 'unplugin-icons/vite'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      testUrl: '',
    },
  },
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
  // doc https://v3.nuxtjs.org/getting-started/quick-start#prerequisites
  typescript: {
    shim: false,
  },
  modules: ['nuxt-windicss'],
  // doc https://windicss.org/integrations/vite.html#design-in-devtools
  css: ['virtual:windi.css', 'virtual:windi-devtools'],
  windicss: {
    analyze: true,
  },
  vite: {
    plugins: [
      Icons({
        autoInstall: true,
      }),
    ],
  },
})
