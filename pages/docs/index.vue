<template>
  <div>
    <ContentDoc />
  </div>
</template>

<script setup>
import { definePageMeta, useSeoMeta } from '#imports'

definePageMeta({
  layout: 'docs'
})

// SEO
useSeoMeta({
  title: 'Documentation - Nuxt 3 Template',
  description: 'Complete documentation for the Nuxt 3 template'
})
</script>
