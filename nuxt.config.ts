import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  rootDir: 'output',

  css: [
    'vuetify/styles',
    '@/assets/styles/main.scss',
  ],

  build: {
    transpile: ['vuetify'],
  },

  imports: {
    dirs: ['./stores'],
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
      include: ['graphql-tag'],
    },
    plugins: [
      vuetify({ autoImport: true }) // ✅ Vite Vuetify plugin
    ],
  },

  modules: [
    '@nuxtjs/apollo',
    ['@pinia/nuxt', {
      autoImports: ['defineStore', 'acceptHMRUpdate'],
      devtools: true,
    }],
    '@nuxtjs/tailwindcss'
  ],

  compatibilityDate: '2024-11-11',
})
