import { defineNuxtConfig } from 'nuxt'
import Module from '../src/module'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [Module],
  typescript: {
    strict: true,
  },
})
