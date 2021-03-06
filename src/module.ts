import { fileURLToPath } from 'url'
import { resolve } from 'pathe'
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill'
import { addAutoImport, addPlugin, defineNuxtModule, extendViteConfig, useLogger } from '@nuxt/kit'
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

    nuxt.hook('vite:extendConfig', (clientConfig, { isClient }) => {
      // TODO: Do not use dist in prod - big bundle size
      if (isClient && process.env.NODE_ENV === 'production')
        clientConfig.resolve.alias.web3 = resolve('./node_modules/web3/dist/web3.min.js')

      // Fix callbackify errors on development
      clientConfig.resolve.alias.util = 'util2'
    })

    extendViteConfig((config) => {
      config.optimizeDeps = config.optimizeDeps || {}
      config.optimizeDeps.esbuildOptions = config.optimizeDeps.esbuildOptions || {}

      // Node.js global to browser globalThis
      config.optimizeDeps.esbuildOptions.define = {
        ...config.optimizeDeps.esbuildOptions.define,
        global: 'globalThis',
      }

      // Enable esbuild polyfill plugins
      config.optimizeDeps.esbuildOptions.plugins = [
        ...config.optimizeDeps.esbuildOptions.plugins || [],
        NodeGlobalsPolyfillPlugin({
          process: true,
          buffer: true,
        }),
        NodeModulesPolyfillPlugin(),
      ]
    })

    addAutoImport([
      { name: 'useWeb3', from: resolve(runtimeDir, 'composables') },
    ])

    logger.success(`Web3 module successfully installed. Visit https://web3js.readthedocs.io/en/v${Web3.version} for more info.`)
  },
})
