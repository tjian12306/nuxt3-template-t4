export interface ImageData {
  url: string,
  alt?: string,
}

export interface LandingHero {
  title: string
  subtitle?: string
  description: string
  backgroundImage?: ImageData
  illustrationImage?: ImageData
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
}

export interface LandingFeatures {
  title: string
  subtitle: string
  description: string
  features: LandingFeature[]
  href?: string
}

export interface LandingTestimonial {
  name: string
  role: string
  company?: string
  content: string
  avatar: ImageData
  rating?: number
}

export interface LandingTestimonials {
  title: string
  description: string
  backgroundImage?: ImageData
  testimonials: LandingTestimonial[]
}

export interface LandingFAQ {
  question: string
  answer: string
}

export interface LandingFAQs {
  title: string
  description: string
  faqs: LandingFAQ[]
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

export interface LandingPricingPlans {
  title: string
  subtitle?: string
  description?: string
  plans?: LandingPricingPlan[]
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
  avatar: ImageData
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
  logo: ImageData
  href?: string
}

export interface LandingGalleryItem {
  image: ImageData
  title?: string
  description?: string
  category?: string
}

export interface LandingCTA {
  title: string
  description: string
  backgroundImage?: ImageData
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
  features?: LandingFeatures
  testimonials?: LandingTestimonials
  faqs?: LandingFAQs
  pricing?: LandingPricingPlans
  stats?: LandingStats[]
  team?: LandingTeamMember[]
  timeline?: LandingTimelineItem[]
  partners?: LandingPartner[]
  gallery?: LandingGalleryItem[]
  cta?: LandingCTA
  newsletter?: LandingNewsletter
  contact?: LandingContact
}
