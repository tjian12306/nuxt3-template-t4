export interface LandingHero {
  title: string
  subtitle?: string
  description: string
  backgroundImage?: string
  cta: {
    primary: {
      text: string
      href: string
      variant?: "solid" | "outline"
    }
    secondary?: {
      text: string
      href: string
      variant?: "solid" | "outline"
    }
  }
}

export interface LandingFeature {
  icon: string
  title: string
  description: string
  href?: string
}

export interface LandingTestimonial {
  name: string
  role: string
  company?: string
  content: string
  avatar: string
  rating?: number
}

export interface LandingFAQ {
  question: string
  answer: string
}

export interface LandingPricingPlan {
  name: string
  description: string
  price: number | string
  period: string
  currency?: string
  featured?: boolean
  cta: string
  features: string[]
  badge?: string
}

export interface LandingStats {
  value: string
  label: string
  description?: string
  icon?: string
}

export interface LandingTeamMember {
  name: string
  role: string
  bio?: string
  avatar: string
  social?: {
    twitter?: string
    linkedin?: string
    github?: string
    email?: string
  }
}

export interface LandingTimelineItem {
  year: string
  title: string
  description: string
  icon?: string
}

export interface LandingPartner {
  name: string
  logo: string
  href?: string
}

export interface LandingGalleryItem {
  image: string
  title?: string
  description?: string
  category?: string
}

export interface LandingCTA {
  title: string
  description: string
  backgroundImage?: string
  cta: {
    text: string
    href: string
  }
}

export interface LandingNewsletter {
  title: string
  description: string
  placeholder: string
  buttonText: string
  successMessage: string
}

export interface LandingContact {
  title: string
  description: string
  info: {
    address?: string
    phone?: string
    email?: string
  }
  form: {
    nameLabel: string
    emailLabel: string
    messageLabel: string
    submitText: string
    successMessage: string
  }
}

export interface LandingPageData {
  hero: LandingHero
  features?: LandingFeature[]
  testimonials?: LandingTestimonial[]
  faqs?: LandingFAQ[]
  pricing?: LandingPricingPlan[]
  stats?: LandingStats[]
  team?: LandingTeamMember[]
  timeline?: LandingTimelineItem[]
  partners?: LandingPartner[]
  gallery?: LandingGalleryItem[]
  cta?: LandingCTA
  newsletter?: LandingNewsletter
  contact?: LandingContact
}
