import { fileURLToPath } from 'url'
import { resolve } from 'pathe'
import { addImports, addPlugin, defineNuxtModule, useLogger } from '@nuxt/kit'
import Web3 from 'web3'

const logger = useLogger('nuxt-web3.js')

export default defineNuxtModule({
  meta: {
    name: 'nuxt-web3.js',
    configKey: 'web3',
  },
  setup(_options, nuxt) {
    const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))
    nuxt.options.build.transpile.push(runtimeDir)
    addPlugin(resolve(runtimeDir, 'plugin'))

    addImports([
      { name: 'useWeb3', from: resolve(runtimeDir, 'composables') },
    ])

    logger.success(`Web3 module successfully installed. Visit https://web3js.readthedocs.io/en/v${Web3.version} for more info.`)
  },
})
