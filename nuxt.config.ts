import { defineNuxtConfig } from "nuxt"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxt/test-utils",
    "@nuxt/ui",
    "@nuxtjs/i18n",
    "@pinia/nuxt",
  ],

  css: ["~/assets/css/main.css"],

  i18n: {
    locales: [
      { code: "en", language: "en-US" },
      { code: "zh", language: "zh-CN" },
    ],
    defaultLocale: "en",
    strategy: "prefix_except_default",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
    },
  },

  ui: {
    fonts: false,
  },

  content: {
    highlight: {
      theme: {
        default: "github-light",
        dark: "github-dark",
      },
    },
  },

  image: {
    quality: 80,
    format: ["webp"],
  },

  // Runtime config for deployment
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "https://your-domain.com",
    },
  },

  // Nitro configuration for deployment
  nitro: {
    preset: "vercel",
    prerender: {
      routes: ["/sitemap.xml", "/robots.txt"],
    },
  },

  // App configuration
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Nuxt 3 Modern Template",
      meta: [{ name: "description", content: "Modern, modular Nuxt 3 website template" }],
    },
  },
})
