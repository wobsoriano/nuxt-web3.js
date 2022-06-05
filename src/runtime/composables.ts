import type Web3 from 'web3'
// @ts-expect-error: Resolved by Nuxt
import { useNuxtApp } from '#app'

export function useWeb3(): typeof Web3 {
  const { $Web3 } = useNuxtApp()
  return $Web3
}
