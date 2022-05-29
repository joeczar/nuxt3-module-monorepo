import { resolve, join } from 'path'
import { fileURLToPath } from 'url'
import { defineNuxtModule, addPlugin, createResolver, addComponentsDir, addAutoImport, resolveModule, extendPages } from '@nuxt/kit'

export interface ModuleOptions {
  addPlugin: boolean
}
const resolvePath = (p: string) => resolve(join(__dirname, p))
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
  async setup (options, nuxt) {
    const { resolve } = createResolver(import.meta.url)
    const resolveRuntimeModule = (path: string) => resolveModule(path, { paths: resolve('./runtime') })

    console.log('defineNuxtModule', { options })

    if (options.addPlugin) {
      const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))
      nuxt.options.build.transpile.push(runtimeDir)
      addPlugin(resolve(runtimeDir, 'plugin'))
    }
    // Add composables
    addAutoImport([
      { name: 'useTheme', as: 'useTheme', from: resolveRuntimeModule('./composables/theme') }
    ])

    // Register components
    await addComponentsDir({
      path: resolve('./runtime/components'),
      prefix: 'o'
    })
  }
})
