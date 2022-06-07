# nuxt-web3.js

[![Version](https://img.shields.io/npm/v/nuxt-web3.js?style=flat&colorA=000000&colorB=000000)](https://www.npmjs.com/package/nuxt-web3.js)

Nuxt 3 module for Web3.js.

## Installation

```bash
npm install nuxt-web3.js
```

## Usage

```ts
export default defineNuxtConfig({
  modules: ['nuxt-web3.js'],
})
```

```html
<script setup lang="ts">
const Web3 = useWeb3()

const provider = new Web3.providers.HttpProvider('PROVIDER_HOST')
const web3 = new Web3(provider)
</script>
```

TIP: When using browser/window based providers, you can use `globalThis` and provide a default provider to fix `window is not defined` errors.

```html
<script setup lang="ts">
const Web3 = useWeb3()

// Default provider for server
const provider = new Web3.providers.HttpProvider('PROVIDER_HOST')
// Use window.ethereum or default provider
const web3 = new Web3((globalThis.window as any)?.ethereum ?? provider)

const balance = await web3.eth.getBalance(walletAddress)
</script>
```

## License

MIT
