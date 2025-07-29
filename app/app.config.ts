export default defineAppConfig({
  theme: {
    colors: ["primary", "emerald", "blue", "purple"],
    default: "primary",
  },

    // Site configuration
  site: {
    name: "Nuxt 3 Template",
    description: "Modern, modular Nuxt 3 website template",
    url: "https://your-domain.com",
    logo: "/logo.svg",
  },

// Navigation configuration
  navigation: {
    main: [
      { name: "Home", href: "/" },
      { name: "Dashboard", href: "/dashboard" },
      { name: "Docs", href: "/docs" },
    ],
    footer: [
      { name: "About", href: "/about" },
      { name: "Contact", href: "/contact" },
      { name: "Privacy", href: "/privacy" },
    ],
  },
})
