import { resolve, join } from 'path'
import { fileURLToPath } from 'url'
import { defineNuxtModule, addPlugin } from '@nuxt/kit'

export interface ModuleOptions {
  addPlugin: boolean
}

export default defineNuxtModule({
  meta: {
    name: '@dc/objects',
    configKey: 'dc_objects',
    compatability: {
      nuxt: '^3.0.0',
      bridge: false
    }
  },
  defaults: {
    addPlugin: true
  },
  hooks: {
    'components:dirs'(dirs) {
      // Add ./components dir to the list
      dirs.push({
        path: join(__dirname, 'components'),
        prefix: 'o'
      })
      console.log('defineNuxtModule', { dirs })
    }
  },
  setup (options, nuxt) {
    if (options.addPlugin) {
      const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))
      nuxt.options.build.transpile.push(runtimeDir)
      addPlugin(resolve(runtimeDir, 'plugin'))
    }
  }
})
