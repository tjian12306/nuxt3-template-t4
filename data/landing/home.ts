import type { LandingPageData } from "~/types/landing"

export const homeLandingData: LandingPageData = {
  hero: {
    title: "Build Amazing Websites",
    subtitle: "The Modern Way",
    description:
      "Create modern, fast, and beautiful websites with our comprehensive Nuxt 3 template. Everything you need to get started.",
    backgroundImage: "/placeholder.svg?height=600&width=1200",
    cta: {
      primary: {
        text: "Get Started",
        href: "/dashboard",
        variant: "solid",
      },
      secondary: {
        text: "View Demo",
        href: "/demo",
        variant: "outline",
      },
    },
  },
  features: [
    {
      icon: "heroicons:rocket-launch",
      title: "Lightning Fast",
      description: "Built with Nuxt 3 for optimal performance and SEO optimization out of the box.",
    },
    {
      icon: "heroicons:paint-brush",
      title: "Beautiful Design",
      description: "Modern UI components with Tailwind CSS and comprehensive dark mode support.",
    },
    {
      icon: "heroicons:globe-alt",
      title: "Multi-language",
      description: "Built-in internationalization support with route-based language switching.",
    },
    {
      icon: "heroicons:device-phone-mobile",
      title: "Mobile First",
      description: "Fully responsive design that works perfectly on all devices and screen sizes.",
    },
    {
      icon: "heroicons:code-bracket",
      title: "Developer Friendly",
      description: "TypeScript support, auto-imports, and excellent developer experience.",
    },
    {
      icon: "heroicons:shield-check",
      title: "Production Ready",
      description: "Optimized for production with SEO, performance, and security best practices.",
    },
  ],
  stats: [
    {
      value: "10k+",
      label: "Downloads",
      description: "Active users worldwide",
      icon: "heroicons:arrow-trending-up",
    },
    {
      value: "99.9%",
      label: "Uptime",
      description: "Reliable performance",
      icon: "heroicons:server",
    },
    {
      value: "24/7",
      label: "Support",
      description: "Always here to help",
      icon: "heroicons:chat-bubble-left-right",
    },
    {
      value: "50+",
      label: "Components",
      description: "Ready to use",
      icon: "heroicons:cube",
    },
  ],
  testimonials: [
    {
      name: "Sarah Johnson",
      role: "CEO",
      company: "TechCorp",
      content:
        "This template saved us weeks of development time. The code quality is exceptional and the documentation is comprehensive.",
      avatar: "/placeholder.svg?height=64&width=64",
      rating: 5,
    },
    {
      name: "Mike Chen",
      role: "Lead Developer",
      company: "StartupXYZ",
      content:
        "Clean architecture, excellent TypeScript support, and amazing performance. Highly recommended for any serious project.",
      avatar: "/placeholder.svg?height=64&width=64",
      rating: 5,
    },
    {
      name: "Emily Davis",
      role: "UI/UX Designer",
      company: "DesignStudio",
      content: "Beautiful design system that's easy to customize. The dark mode implementation is flawless.",
      avatar: "/placeholder.svg?height=64&width=64",
      rating: 5,
    },
  ],
  pricing: [
    {
      name: "Starter",
      description: "Perfect for small projects and personal use",
      price: 0,
      period: "month",
      currency: "$",
      cta: "Get Started",
      features: ["Up to 5 pages", "Basic components", "Email support", "Community access"],
    },
    {
      name: "Professional",
      description: "Best for growing businesses and teams",
      price: 29,
      period: "month",
      currency: "$",
      featured: true,
      badge: "Most Popular",
      cta: "Start Free Trial",
      features: [
        "Unlimited pages",
        "All components",
        "Priority support",
        "Custom themes",
        "Advanced analytics",
        "Team collaboration",
      ],
    },
    {
      name: "Enterprise",
      description: "For large organizations with custom needs",
      price: "Custom",
      period: "month",
      cta: "Contact Sales",
      features: [
        "Everything in Professional",
        "Custom development",
        "Dedicated support",
        "SLA guarantee",
        "On-premise deployment",
        "Custom integrations",
      ],
    },
  ],
  faqs: [
    {
      question: "What technologies are included in this template?",
      answer:
        "The template includes Nuxt 3, Vue 3, TypeScript, Tailwind CSS, Pinia for state management, and various Nuxt modules for content, images, and internationalization.",
    },
    {
      question: "Is the template mobile responsive?",
      answer:
        "Yes, all components are built with a mobile-first approach and are fully responsive across all device sizes.",
    },
    {
      question: "Can I customize the design and colors?",
      answer:
        "The template includes a comprehensive theme system with multiple color schemes and easy customization options.",
    },
    {
      question: "Do you provide support and updates?",
      answer:
        "Yes, we provide regular updates and comprehensive documentation. Premium plans include priority support.",
    },
  ],
  newsletter: {
    title: "Stay Updated",
    description: "Get the latest updates, tips, and exclusive content delivered to your inbox.",
    placeholder: "Enter your email address",
    buttonText: "Subscribe",
    successMessage: "Thank you for subscribing! Check your email for confirmation.",
  },
  cta: {
    title: "Ready to Build Something Amazing?",
    description: "Join thousands of developers who are already building with our template.",
    backgroundImage: "/placeholder.svg?height=400&width=1200",
    cta: {
      text: "Get Started Today",
      href: "/dashboard",
    },
  },
}
