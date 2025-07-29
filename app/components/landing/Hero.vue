<template>
  <section class="relative bg-white dark:bg-gray-900 overflow-hidden">
    <!-- Background Image -->
    <div v-if="data.backgroundImage" class="absolute inset-0">
      <NuxtImg
        v-if="data.backgroundImage"
        :src="data.backgroundImage.url"
        :alt="data.backgroundImage.alt"
        class="w-full h-full object-cover opacity-10"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-purple-600/20"></div>
    </div>

    <div class="relative max-w-7xl mx-auto">
      <div class="relative z-10 pb-8 bg-white dark:bg-gray-900 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
        <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <div class="sm:text-center lg:text-left">
            <div v-if="data.subtitle" class="mb-4">
              <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200">
                {{ data.subtitle }}
              </span>
            </div>
            
            <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              <span class="block xl:inline animate-fade-in">{{ data.title }}</span>
            </h1>
            
            <p class="mt-3 text-base text-gray-500 dark:text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 animate-slide-up">
              {{ data.description }}
            </p>
            
            <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start animate-slide-up" style="animation-delay: 0.2s">
              <div class="rounded-md shadow">
                <button
                  :to="localePath(data.cta.primary.href)"
                  :variant="data.cta.primary.variant || 'solid'"
                  size="lg"
                  class="w-full flex items-center justify-center px-8 py-3 text-base font-medium"
                >
                  {{ data.cta.primary.text }}
                </button>
              </div>
              
              <div v-if="data.cta.secondary" class="mt-3 sm:mt-0 sm:ml-3">
                <button
                  :to="localePath(data.cta.secondary.href)"
                  :variant="data.cta.secondary.variant || 'outline'"
                  size="lg"
                  class="w-full flex items-center justify-center px-8 py-3 text-base font-medium"
                >
                  {{ data.cta.secondary.text }}
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    
    <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <NuxtImg
        v-if="data.illustrationImage"
        class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
        :src="data.illustrationImage.url"
        :alt="data.illustrationImage.alt"
        loading="eager"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})

const localePath = (href) => href // Mock implementation for demonstration purposes
</script>
