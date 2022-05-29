import { resolve } from 'path'
import { fileURLToPath } from 'url'
import { defineNuxtConfig } from 'nuxt'
import MyModule from '..'

export default defineNuxtConfig({
  modules: [
    MyModule, '@nuxt/content'
  ],
  content: {
    // https://content.nuxtjs.org/api/configuration
    base: '@dc/objects/dist/runtime/components'
  },
  myModule: {
    addPlugin: true
  }
})
