<template>
  <div>
    <LandingHero :data="landingData.hero" />
    <LandingStats v-if="landingData.stats" :data="landingData.stats" />
    <LandingFeatures v-if="landingData.features" :data="landingData.features" />
    <LandingPricing v-if="landingData.pricing" :data="landingData.pricing" />
  </div>
</template>

<script setup lang="ts">
import { saasLandingData } from '~/data/landing/saas'
import { definePageMeta, useSeoMeta } from '#imports'

const landingData = saasLandingData

// SEO
useSeoMeta({
  title: `${landingData.hero.title} - SaaS Solution`,
  description: landingData.hero.description,
  ogTitle: landingData.hero.title,
  ogDescription: landingData.hero.description
})

definePageMeta({
  layout: 'landing'
})
</script>
