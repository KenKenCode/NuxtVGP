// nuxt.config.ts
import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  css: [
    'vuetify/styles',              // Vuetify's built-in styles
    '@/assets/styles/main.scss'    // Your custom SCSS file
  ],

  build: {
    transpile: ['vuetify'],         // Needed to transpile Vuetify components
  },

  imports: {
    dirs: ['./stores'],             // Auto-import Pinia stores
  },

  apollo: {
    autoImports: true,
    proxyCookies: true,
    clients: {
      default: {
        httpEndpoint: 'https://spacex-production.up.railway.app/',
      },
    },
  },

  vite: {
    optimizeDeps: {
      include: ['graphql-tag'],     // Helps avoid dependency issues
    },
    plugins: [vuetify({ autoImport: true })], // Vuetify plugin
  },

  modules: [
    '@nuxtjs/apollo',
    ['@pinia/nuxt', {
      autoImports: ['defineStore', 'acceptHMRUpdate'],
      devtools: true,
    }],
  ],

  compatibilityDate: '2024-11-11',
})
