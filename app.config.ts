import { defineAppConfig } from "nuxt3" // Importing the defineAppConfig function

export default defineAppConfig({
  // Theme configuration
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

  // Landing page configuration
  landing: {
    hero: {
      title: "Build Amazing Websites",
      description: "Create modern, fast, and beautiful websites with our Nuxt 3 template",
      cta: {
        primary: "Get Started",
        secondary: "Learn More",
      },
    },
    features: [
      {
        icon: "heroicons:rocket-launch",
        title: "Fast Performance",
        description: "Built with Nuxt 3 for optimal performance and SEO",
      },
      {
        icon: "heroicons:paint-brush",
        title: "Beautiful Design",
        description: "Modern UI components with Tailwind CSS and dark mode",
      },
      {
        icon: "heroicons:globe-alt",
        title: "Multi-language",
        description: "Built-in internationalization support",
      },
    ],
    faqs: [
      {
        question: "What is included in this template?",
        answer: "This template includes Nuxt 3, Tailwind CSS, multi-language support, and more.",
      },
      {
        question: "Is it mobile responsive?",
        answer: "Yes, all components are fully responsive and mobile-friendly.",
      },
    ],
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
