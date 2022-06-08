import type Web3 from 'web3'
// @ts-expect-error: Resolved by Nuxt
import { useNuxtApp } from '#app'

export function useWeb3(): typeof Web3 {
  const { $Web3 } = useNuxtApp()
  return $Web3
}

export function useWeb3Utils(): typeof Web3.utils {
  const { $utils } = useNuxtApp()
  return $utils
}

export function useWeb3Providers(): typeof Web3.providers {
  const { $providers } = useNuxtApp()
  return $providers
}

export function useWeb3Modules(): typeof Web3.modules {
  const { $modules } = useNuxtApp()
  return $modules
}

export function useWeb3GivenProvider(): typeof Web3.givenProvider {
  const { $givenProvider } = useNuxtApp()
  return $givenProvider
}
