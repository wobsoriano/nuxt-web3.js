// @ts-expect-error: Resolved by Nuxt
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(async () => {
  const Web3 = await import('web3').then(r => r.default || r) as any
  return {
    provide: {
      Web3,
    },
  }
})

declare module '#app' {
  interface NuxtApp {
    $Web3: typeof import('web3')
  }
}
