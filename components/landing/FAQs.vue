<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div class="lg:max-w-2xl lg:mx-auto lg:text-center">
        <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          {{ $t('landing.faqs.title') }}
        </h2>
        <p class="mt-4 text-gray-500 dark:text-gray-300">
          {{ $t('landing.faqs.description') }}
        </p>
      </div>
      <div class="mt-20">
        <UAccordion :items="faqItems" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { useNuxtApp } from '#app'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const { $config } = useNuxtApp()
const { t } = useI18n()

const faqItems = computed(() => 
  $config.landing.faqs.map(faq => ({
    label: faq.question,
    content: faq.answer
  }))
)
</script>
