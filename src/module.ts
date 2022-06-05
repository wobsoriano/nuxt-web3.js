import { resolve } from 'pathe'
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill'
import { defineNuxtModule, extendViteConfig } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'nuxt-web3.js',
    configKey: 'web3',
  },
  setup(_options, nuxt) {
    nuxt.hook('vite:extendConfig', (clientConfig, { isClient }) => {
      // Use dist in prod - higher size
      if (isClient && process.env.NODE_ENV === 'production') {
        clientConfig.resolve.alias = {
          ...clientConfig.resolve.alias,
          web3: resolve(__dirname, './node_modules/web3/dist/web3.min.js'),
        }
      }
    })

    extendViteConfig((config) => {
      config.optimizeDeps = config.optimizeDeps || {}
      config.optimizeDeps.esbuildOptions = config.optimizeDeps.esbuildOptions || {}
      config.optimizeDeps.esbuildOptions.define = config.optimizeDeps.esbuildOptions.define || {}
      config.optimizeDeps.esbuildOptions.define.global = 'globalThis'

      // Add global/module polyfills
      config.optimizeDeps.esbuildOptions.plugins = config.optimizeDeps.esbuildOptions.plugins || []
      config.optimizeDeps.esbuildOptions.plugins.push(
        NodeGlobalsPolyfillPlugin({
          process: true,
          buffer: true,
        }),
        NodeModulesPolyfillPlugin(),
      )
    })
  },
})
