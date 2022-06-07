<script setup lang="ts">
const $Web3 = useWeb3()
const runtimeConfig = useRuntimeConfig()

const walletAddress = '0x57a44b7942bc7B512BE4A1E7dA3d4F0705212453'

const provider = new $Web3.providers.HttpProvider(runtimeConfig.public.provider.host)
const web3 = new $Web3((globalThis.window as any)?.ethereum ?? provider)

const balance = await web3.eth.getBalance(walletAddress)
</script>

<template>
  <div>
    Balance: {{ balance }}
  </div>
</template>
