import Web3 from 'web3'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      web3: new Web3(),
      Web3,
    },
  }
})

declare module '#app' {
  interface NuxtApp {
    $Web3: typeof Web3
    $web3: Web3
  }
}
