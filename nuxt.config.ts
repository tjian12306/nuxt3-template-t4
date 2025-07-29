import { defineNuxtConfig } from "nuxt/config"

export default defineNuxtConfig({
  // 添加兼容性日期
  compatibilityDate: "2025-07-29",

  devtools: { enabled: true },

  modules: ["@nuxt/ui", "@nuxt/content", "@nuxt/image", "@nuxtjs/i18n", "@pinia/nuxt", "nuxt-icon"],

  // CSS configuration
  css: ["~/assets/css/main.css"],

  // UI configuration
  ui: {
    global: true,
    icons: ["heroicons", "lucide"],
  },

  // Icon configuration
  icon: {
    serverBundle: {
      collections: ["heroicons", "lucide"],
    },
  },

  // Content configuration
  content: {
    highlight: {
      theme: {
        default: "github-light",
        dark: "github-dark",
      },
    },
    locales: ["en", "zh"],
    defaultLocale: "en",
  },

  // Image configuration
  image: {
    quality: 80,
    format: ["webp"],
  },

  // i18n configuration
  i18n: {
    locales: [
      { code: "en", iso: "en-US", name: "English", file: "en.json" },
      { code: "zh", iso: "zh-CN", name: "中文", file: "zh.json" },
    ],
    defaultLocale: "en",
    langDir: "locales/",
    strategy: "prefix_except_default",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
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

  // Runtime config
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "http://localhost:3000",
    },
  },

  // TypeScript configuration
  typescript: {
    typeCheck: true,
  },

  // Nitro configuration for SEO
  nitro: {
    prerender: {
      routes: ["/sitemap.xml", "/robots.txt"],
    },
  },
})
