import { resolve } from 'path'
import { fileURLToPath } from 'url'
import { addPluginTemplate, addServerHandler, addTemplate, addVitePlugin, defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'nuxt-web3.js',
    configKey: 'web3',
  },
  setup(_options, nuxt) {
  //  const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))
  //   nuxt.options.build.transpile.push(runtimeDir, '/_nuxt/node_modules/node-stdlib-browser/helpers/esbuild/shim.js')

    //   addServerHandler({
    //     route: '/_polyfill/web3',
    //     handler: resolve(runtimeDir, 'server')
    //   })

    // nuxt.options.app.head.script.push({
    //   type: 'module',
    //   id: 'web3_polyfill',
    //   children: `
    //     import process from 'process';
    //     import { Buffer } from 'buffer';
    //     import EventEmitter from 'events';
    //     import util from 'util';
    //     console.log(util.callbackify);
    //     window.util = util;
    //     window.Buffer = Buffer;
    //     window.process = process;
    //     window.EventEmitter = EventEmitter;
    //   `
    // })
  },
})
