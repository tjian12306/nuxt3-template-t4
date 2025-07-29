<template>
  <section class="py-12 bg-white dark:bg-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">
          {{ title }}
        </h2>
        <p v-if="description" class="mt-2 text-gray-500 dark:text-gray-400">
          {{ description }}
        </p>
      </div>

      <div class="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6">
        <div
          v-for="(partner, index) in data"
          :key="index"
          class="col-span-1 flex justify-center items-center animate-fade-in"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <component
            :is="partner.href ? 'a' : 'div'"
            :href="partner.href"
            :target="partner.href ? '_blank' : undefined"
            :rel="partner.href ? 'noopener noreferrer' : undefined"
            class="flex items-center justify-center h-16 grayscale hover:grayscale-0 transition-all duration-300"
          >
            <NuxtImg
              :src="partner.logo"
              :alt="partner.name"
              class="max-h-12 w-auto"
            />
          </component>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  data: Array,
  title: String,
  description: String
})
</script>
