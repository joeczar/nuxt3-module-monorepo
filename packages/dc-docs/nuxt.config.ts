import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules:['@dc/objects', '@nuxt/content'],
  content: {
    // https://content.nuxtjs.org/api/configuration
    highlight: {
      theme: 'dark-plus',
    }
  }
})
