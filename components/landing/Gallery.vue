<template>
  <section class="py-16 bg-gray-50 dark:bg-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
          {{ title }}
        </h2>
        <p v-if="description" class="mt-4 text-lg text-gray-500 dark:text-gray-300">
          {{ description }}
        </p>
      </div>

      <!-- Category Filter -->
      <div v-if="categories.length > 1" class="flex justify-center mb-8">
        <div class="flex space-x-2">
          <button
            v-for="category in categories"
            :key="category"
            :class="selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-white text-gray-900 border border-gray-300'"
            size="sm"
            @click="selectedCategory = category"
          >
            {{ category }}
          </button>
        </div>
      </div>

      <!-- Gallery Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(item, index) in filteredItems"
          :key="index"
          class="group relative overflow-hidden rounded-lg bg-white dark:bg-gray-900 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <div class="aspect-w-16 aspect-h-9">
            <img
              :src="item.image"
              :alt="item.title || 'Gallery image'"
              class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <div v-if="item.title || item.description" class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 v-if="item.title" class="text-lg font-semibold mb-2">
                {{ item.title }}
              </h3>
              <p v-if="item.description" class="text-sm opacity-90">
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
import { ref, computed } from 'vue'

const props = defineProps({
  data: Array,
  title: String,
  description: String
})

const selectedCategory = ref('All')

const categories = computed(() => {
  const cats = ['All', ...new Set(props.data.map(item => item.category).filter(Boolean))]
  return cats
})

const filteredItems = computed(() => {
  if (selectedCategory.value === 'All') {
    return props.data
  }
  return props.data.filter(item => item.category === selectedCategory.value)
})
</script>
