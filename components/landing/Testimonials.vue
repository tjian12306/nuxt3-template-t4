<template>
  <section class="py-16 bg-gray-50 dark:bg-gray-800 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 class="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
          {{ title }}
        </h2>
        <p class="mt-4 text-lg text-gray-500 dark:text-gray-300">
          {{ description }}
        </p>
      </div>

      <div class="mt-16">
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div
            v-for="(testimonial, index) in testimonials"
            :key="index"
            class="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6"
          >
            <div class="flex items-center mb-4">
              <div class="flex-shrink-0">
                <NuxtImg
                  :src="testimonial.avatar"
                  :alt="testimonial.name"
                  class="h-10 w-10 rounded-full"
                />
              </div>
              <div class="ml-3">
                <p class="text-sm font-medium text-gray-900 dark:text-white">
                  {{ testimonial.name }}
                </p>
                <p class="text-sm text-gray-500 dark:text-gray-400">
                  {{ testimonial.role }}
                </p>
              </div>
            </div>
            <p class="text-gray-600 dark:text-gray-300">
              "{{ testimonial.content }}"
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const title = t('landing.testimonials.title')
const description = t('landing.testimonials.description')

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechCorp',
    content: 'This template saved us weeks of development time. Highly recommended!',
    avatar: '/placeholder.svg?height=40&width=40'
  },
  {
    name: 'Mike Chen',
    role: 'Developer',
    content: 'Clean code, great documentation, and excellent performance.',
    avatar: '/placeholder.svg?height=40&width=40'
  },
  {
    name: 'Emily Davis',
    role: 'Designer',
    content: 'Beautiful design system and easy to customize.',
    avatar: '/placeholder.svg?height=40&width=40'
  }
]
</script>
