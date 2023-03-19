import en from './locales/en-US.json'
import uk from './locales/uk-UA.json'
import ru from './locales/ru-RU.json'

import eslintPlugin from 'vite-plugin-eslint'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-swiper',
    'nuxt-icons',
    '@nuxtjs/i18n',
    '@nuxt/image-edge',
    '@pinia/nuxt',
    '@nuxtjs/sanity',
    '@vueuse/motion/nuxt',
  ],
  image: {
    provider: 'sanity',
    sanity: {
      projectId: 'lh08fn64',
    },
  },
  sanity: {
    projectId: 'lh08fn64',
    dataset: 'production',
    apiVersion: '2023-03-07',
    minimal: true,
  },
  vite: {
    plugins: [eslintPlugin()],
  },
  css: ['~/assets/css/tailwind.css'],
  i18n: {
    baseUrl: 'https://rihterb.pp.ua',
    // baseUrl: 'http://localhost:3000',
    defaultLocale: 'uk',
    detectBrowserLanguage: {
      alwaysRedirect: true, // TODO: find a way to avoid redirection when visiting another locales page manually
      fallbackLocale: 'en',
      useCookie: false, // TODO: find out why locale switching doesn't work properly
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
    locales: [
      {
        name: 'English',
        iso: 'en-US',
        code: 'en',
        isCatchallLocale: true,
      },
      {
        name: 'Українська',
        iso: 'uk-UA',
        code: 'uk',
      },
      {
        name: 'Українська також нахуй росію',
        iso: 'ru-RU',
        code: 'ru',
      },
    ],
    vueI18n: {
      legacy: false,
      locale: 'uk',
      fallbackLocale: 'en',
      availableLocales: ['en', 'uk', 'ru'],
      messages: { en, uk, ru },
    },
  },
})
