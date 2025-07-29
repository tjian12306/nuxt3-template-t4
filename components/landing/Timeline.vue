<template>
  <section class="py-16 bg-gray-50 dark:bg-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
          {{ title }}
        </h2>
        <p class="mt-4 text-lg text-gray-500 dark:text-gray-300">
          {{ description }}
        </p>
      </div>

      <div class="relative">
        <!-- Timeline line -->
        <div class="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>

        <div class="space-y-12">
          <div
            v-for="(item, index) in data"
            :key="index"
            class="relative flex items-center animate-fade-in"
            :style="{ animationDelay: `${index * 0.2}s` }"
            :class="index % 2 === 0 ? 'justify-start' : 'justify-end'"
          >
            <!-- Timeline dot -->
            <div class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-gray-800"></div>

            <!-- Content -->
            <div
              class="w-5/12 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg"
              :class="index % 2 === 0 ? 'mr-auto' : 'ml-auto'"
            >
              <div class="flex items-center mb-3">
                <Icon v-if="item.icon" :name="item.icon" class="h-6 w-6 text-primary-600 mr-3" />
                <span class="text-sm font-semibold text-primary-600 bg-primary-100 dark:bg-primary-900 px-3 py-1 rounded-full">
                  {{ item.year }}
                </span>
              </div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {{ item.title }}
              </h3>
              <p class="text-gray-600 dark:text-gray-300">
                {{ item.description }}
              </p>
            </div>
          </div>
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
