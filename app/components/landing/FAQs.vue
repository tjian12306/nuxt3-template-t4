<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div class="lg:max-w-2xl lg:mx-auto lg:text-center">
        <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          {{ $t('faqs.title') }}
        </h2>
        <p class="mt-4 text-gray-500 dark:text-gray-300">
          {{ $t('faqs.description') }}
        </p>
      </div>
      <div class="mt-20">
        <UAccordion :items="faqItems" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from '#i18n'
import { computed } from 'vue'
import type { LandingFAQs } from '~/types/landing'

const { t } = useI18n()

const props = defineProps({
  data: {
    type: Object as PropType<LandingFAQs>,
    required: true,
  },
})

const faqItems = computed(() => props.data.faqs)
</script>
