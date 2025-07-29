<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <UNotifications />
  </div>
</template>

<script setup>
import { useHead, useNuxtApp, onMounted } from '#app'
import { useTheme } from '~/composables/useTheme'

// Global head configuration
useHead({
  htmlAttrs: {
    lang: () => useNuxtApp().$i18n?.locale.value || 'en'
  }
})

// Initialize theme
const { initialize } = useTheme()
onMounted(() => {
  initialize()
})
</script>
