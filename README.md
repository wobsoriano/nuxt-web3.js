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

// or any wallet that injects an Ethereum Provider into the browser or window
if (process.client) {
  const web3 = new Web3(window.ethereum)
}
</script>
```

## License

MIT
