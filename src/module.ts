import { fileURLToPath } from 'url'
import { resolve } from 'pathe'
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill'
import { addImports, addPlugin, defineNuxtModule, extendViteConfig, useLogger } from '@nuxt/kit'
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

    nuxt.hook('vite:extendConfig', (config) => {
      config.define = config.define || {}
      config.define['process.env.NODE_DEBUG'] = JSON.stringify(process.env.NODE_DEBUG)
    })

    extendViteConfig((config) => {
      config.optimizeDeps = config.optimizeDeps || {}
      config.optimizeDeps.esbuildOptions = config.optimizeDeps.esbuildOptions || {}
      config.optimizeDeps.esbuildOptions.define = config.optimizeDeps.esbuildOptions.define || {}

      // Node.js global to browser globalThis
      config.optimizeDeps.esbuildOptions.define.global = 'globalThis'

      // Enable esbuild polyfill plugins
      config.optimizeDeps.esbuildOptions.plugins?.push(
        NodeGlobalsPolyfillPlugin({
          process: true,
          buffer: true,
        }),
        NodeModulesPolyfillPlugin(),
      )
    })

    addImports([
      { name: 'useWeb3', from: resolve(runtimeDir, 'composables') },
    ])

    logger.success(`Web3 module successfully installed. Visit https://web3js.readthedocs.io/en/v${Web3.version} for more info.`)
  },
})
