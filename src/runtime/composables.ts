import type Web3 from 'web3'
import { useNuxtApp } from '#app'

export function useWeb3(): typeof Web3 {
  const { $Web3 } = useNuxtApp()
  // @ts-expect-error: Internal
  return $Web3
}
