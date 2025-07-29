<template>
  <div>
    <LandingHero :data="landingData.hero" />
    <LandingStats v-if="landingData.stats" :data="landingData.stats" />
    <LandingFeatures v-if="landingData.features" :data="landingData.features" />
    <LandingTestimonials v-if="landingData.testimonials" :data="landingData.testimonials" />
    <LandingPricing v-if="landingData.pricing" :data="landingData.pricing" />
    <LandingFAQs v-if="landingData.faqs" :data="landingData.faqs" />
    <LandingNewsletter v-if="landingData.newsletter" :data="landingData.newsletter" />
    <LandingCTA v-if="landingData.cta" :data="landingData.cta" />
  </div>
</template>

<script setup>
import { homeLandingData } from '~/data/landing/home'
import { definePageMeta } from '#imports'
import { useSeoMeta } from '#imports'

definePageMeta({
  layout: 'landing'
})

const landingData = homeLandingData

// SEO
useSeoMeta({
  title: landingData.hero.title,
  description: landingData.hero.description,
  ogTitle: landingData.hero.title,
  ogDescription: landingData.hero.description,
  ogImage: '/og-image.jpg',
  twitterCard: 'summary_large_image'
})
</script>
