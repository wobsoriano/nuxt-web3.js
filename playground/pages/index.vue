<script setup lang="ts">
const $Web3 = useWeb3()
const runtimeConfig = useRuntimeConfig()

const walletAddress = '0x0320DE3378dCDE180758ad2D41C0e1C6dCbB441D'

const provider = new $Web3.providers.HttpProvider(runtimeConfig.public.provider.host)
const web3 = new $Web3($Web3.givenProvider ?? provider)
// const web3 = new $Web3(provider)

const balance = await web3.eth.getBalance(walletAddress)
</script>

<template>
  <div>
    Balance: {{ balance }}
  </div>
</template>
