import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  css: [
    'vuetify/styles',
  ],

  nitro: {
    externals: {
      external: ['graphql']
    }
  },

  build: {
    transpile: ['vuetify'],
  },

  imports: {
    dirs: ['~/stores'], // ⛳ more reliable path resolution than relative './stores'
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
      vuetify({ autoImport: true }),
    ],
  },

  modules: [
    '@nuxtjs/apollo',
    '@nuxtjs/tailwindcss',
    ['@pinia/nuxt', {
      autoImports: ['defineStore', 'acceptHMRUpdate'],
      devtools: true,
    }],
  ],

  compatibility: {
    date: '2024-11-11', // ✅ Updated for Nuxt 3.17+ syntax
  },
})
