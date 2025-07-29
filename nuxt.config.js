import { defineNuxtConfig } from "nuxt"

// 如果 TypeScript 版本还有问题，可以尝试使用 JavaScript 版本
export default defineNuxtConfig({
  compatibilityDate: "2025-07-29",
  devtools: { enabled: true },

  modules: ["@nuxt/ui", "@nuxt/content", "@nuxt/image", "@nuxtjs/i18n", "@pinia/nuxt", "nuxt-icon"],

  css: ["~/assets/css/main.css"],

  ui: {
    global: true,
    icons: ["heroicons"],
  },

  content: {
    highlight: {
      theme: {
        default: "github-light",
        dark: "github-dark",
      },
    },
  },

  i18n: {
    locales: [
      { code: "en", iso: "en-US", name: "English", file: "en.json" },
      { code: "zh", iso: "zh-CN", name: "中文", file: "zh.json" },
    ],
    defaultLocale: "en",
    langDir: "locales/",
    strategy: "prefix_except_default",
  },

  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "http://localhost:3000",
    },
  },

  typescript: {
    typeCheck: false,
  },
})
