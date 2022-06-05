import Web3 from 'web3'

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
