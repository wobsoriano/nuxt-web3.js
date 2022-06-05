<script setup lang="ts">
const { $Web3 } = useNuxtApp()

const ethEnabled = async () => {
  try {
    const testnet = 'https://mainnet.infura.io/v3/'
    const walletAddress = '0x57a44b7942bc7B512BE4A1E7dA3d4F0705212453'

    const web3 = new $Web3(new $Web3.providers.HttpProvider(testnet))
    // const web3 = new $Web3((window as any).ethereum)
    const balance = await web3.eth.getBalance(walletAddress) // Will give value
    return balance
  }
  catch (e) {
    console.log('Error', e)
  }
}

onMounted(async () => {
  if (window.hasOwnProperty('ethereum')) {
    const result = await ethEnabled()
    console.log(result)
  }
})

const result = await ethEnabled()
console.log(result)
</script>

<template>
  <div>
    hello world
  </div>
</template>
