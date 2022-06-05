<script setup lang="ts">
const $Web3 = useWeb3()
const runtimeConfig = useRuntimeConfig()

const walletAddress = '0x57a44b7942bc7B512BE4A1E7dA3d4F0705212453'

const web3 = new $Web3(new $Web3.providers.HttpProvider(runtimeConfig.public.provider.host))
// const web3 = new $Web3((window as any).ethereum)
const balance = await web3.eth.getBalance(walletAddress) // Will give value
</script>

<template>
  <div>
    hello world
  </div>
</template>
