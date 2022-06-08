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

// Default provider for server
const provider = new Web3.providers.HttpProvider('PROVIDER_HOST')
// Use window.ethereum or default provider
const web3 = new Web3(Web3.givenProvider || provider)

const balance = await web3.eth.getBalance(walletAddress)
</script>
```

## Composables

- `useWeb3()` - Returns the main class of Web3.
- `useWeb3Utils` - Returns the Web3 utility functions.
- `useWeb3Providers` - Returns the current available providers.
- `useWeb3Modules` - Returns an object with the classes of all major sub modules.
- `useWeb3GivenProvider` - Returns the given provider by the (browser) environment.

For Nuxt 2 version, use https://github.com/fzn0x/nuxt-web3.

## License

MIT
