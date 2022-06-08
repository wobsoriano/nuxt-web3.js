import Web3 from 'web3'
// @ts-expect-error: Resolved by Nuxt
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(async () => {
  return {
    provide: {
      Web3,
      utils: Web3.utils,
    },
  }
})

declare module '#app' {
  interface NuxtApp {
    $Web3: typeof Web3
    $utils: typeof Web3.utils
  }
}
