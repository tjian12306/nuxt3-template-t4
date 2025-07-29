<template>
  <section class="py-12 bg-primary-600">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
        <div
          v-for="(stat, index) in data"
          :key="index"
          class="text-center animate-fade-in"
          :style="{ animationDelay: index * 0.1 + 's' }"
        >
          <div v-if="stat.icon" class="flex justify-center mb-2">
            <Icon :name="stat.icon" class="h-8 w-8 text-primary-200" />
          </div>
          <div class="text-3xl font-bold text-white">{{ stat.value }}</div>
          <div class="text-lg font-medium text-primary-200">{{ stat.label }}</div>
          <div v-if="stat.description" class="text-sm text-primary-300 mt-1">
            {{ stat.description }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Icon from '~/components/Icon.vue'

const props = defineProps({
  data: Array
})
</script>
