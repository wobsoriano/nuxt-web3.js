import { defineNuxtConfig } from 'nuxt'
import Module from '../src/module'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [Module],
  typescript: {
    strict: true,
  },
  runtimeConfig: {
    public: {
      provider: {
        host: `https://mainnet.infura.io/v3/${process.env.INFURA_ID}`,
      },
    },
  },
})
