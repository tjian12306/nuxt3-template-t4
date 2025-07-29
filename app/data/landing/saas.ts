import type { LandingPageData } from "~/types/landing"

export const saasLandingData: LandingPageData = {
  hero: {
    title: "Scale Your SaaS Business",
    subtitle: "The Complete Solution",
    description:
      "Everything you need to build, launch, and scale your SaaS application. From authentication to payments, we've got you covered.",
    backgroundImage: "/placeholder.svg?height=600&width=1200",
    cta: {
      primary: {
        text: "Start Free Trial",
        href: "/signup",
        variant: "solid",
      },
      secondary: {
        text: "View Pricing",
        href: "/pricing",
        variant: "outline",
      },
    },
  },
  features: [
    {
      icon: "heroicons:user-group",
      title: "User Management",
      description: "Complete user authentication, roles, and permissions system.",
    },
    {
      icon: "heroicons:credit-card",
      title: "Payment Processing",
      description: "Integrated billing and subscription management with Stripe.",
    },
    {
      icon: "heroicons:chart-bar",
      title: "Analytics Dashboard",
      description: "Real-time analytics and insights to grow your business.",
    },
    {
      icon: "heroicons:cog-6-tooth",
      title: "API Management",
      description: "RESTful APIs with rate limiting and comprehensive documentation.",
    },
  ],
  stats: [
    {
      value: "500+",
      label: "SaaS Companies",
      description: "Trust our platform",
    },
    {
      value: "$2M+",
      label: "Revenue Processed",
      description: "Through our platform",
    },
    {
      value: "99.99%",
      label: "Uptime",
      description: "Guaranteed reliability",
    },
  ],
  pricing: [
    {
      name: "Startup",
      description: "Perfect for early-stage startups",
      price: 49,
      period: "month",
      currency: "$",
      cta: "Start Trial",
      features: ["Up to 1,000 users", "Basic analytics", "Email support", "API access"],
    },
    {
      name: "Growth",
      description: "For growing businesses",
      price: 149,
      period: "month",
      currency: "$",
      featured: true,
      cta: "Start Trial",
      features: [
        "Up to 10,000 users",
        "Advanced analytics",
        "Priority support",
        "Custom integrations",
        "White-label options",
      ],
    },
    {
      name: "Enterprise",
      description: "For large organizations",
      price: "Custom",
      period: "month",
      cta: "Contact Sales",
      features: [
        "Unlimited users",
        "Custom analytics",
        "Dedicated support",
        "On-premise deployment",
        "Custom development",
      ],
    },
  ],
}
