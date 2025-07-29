<template>
  <section class="bg-primary-600">
    <div class="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
        <span class="block">{{ title }}</span>
      </h2>
      <p class="mt-4 text-lg leading-6 text-primary-200">
        {{ description }}
      </p>
      <UButton
        :to="ctaLink"
        size="lg"
        color="white"
        variant="solid"
        class="mt-8 w-full sm:w-auto"
      >
        {{ ctaText }}
      </UButton>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: 'Ready to get started?'
  },
  description: {
    type: String,
    default: 'Start building amazing websites today.'
  },
  ctaText: {
    type: String,
    default: 'Get Started'
  },
  ctaLink: {
    type: String,
    default: '/dashboard'
  }
})
</script>
