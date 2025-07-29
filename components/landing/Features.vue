<template>
  <section class="py-12 bg-gray-50 dark:bg-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <h2 class="text-base text-primary-600 font-semibold tracking-wide uppercase">
          {{ $t('landing.features.subtitle') }}
        </h2>
        <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          {{ $t('landing.features.title') }}
        </p>
        <p class="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 lg:mx-auto">
          {{ $t('landing.features.description') }}
        </p>
      </div>

      <div class="mt-10">
        <div class="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
          <div
            v-for="(feature, index) in features"
            :key="index"
            class="relative animate-fade-in"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
              <Icon :name="feature.icon" class="h-6 w-6" />
            </div>
            <p class="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">
              {{ feature.title }}
            </p>
            <p class="mt-2 ml-16 text-base text-gray-500 dark:text-gray-300">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useNuxtApp } from '#app'
import { useI18n } from '#i18n'

const { $config } = useNuxtApp()
const { t } = useI18n()

const features = $config.landing.features
</script>
