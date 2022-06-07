import Web3 from 'web3'
// @ts-expect-error: Resolved by Nuxt
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      Web3,
    },
  }
})

declare module '#app' {
  interface NuxtApp {
    $Web3: typeof Web3
  }
}
