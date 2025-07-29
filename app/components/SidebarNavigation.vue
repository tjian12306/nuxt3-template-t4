<template>
  <nav class="space-y-1">
    <NuxtLink
      v-for="item in navigation"
      :key="item.name"
      :to="localePath(item.href)"
      class="group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors"
      :class="[
        $route.path === item.href
          ? 'bg-primary-100 dark:bg-primary-900 text-primary-900 dark:text-primary-100'
          : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'
      ]"
      @click="$emit('navigate')"
    >
      <UIcon :name="item.icon" class="mr-3 h-5 w-5" />
      {{ item.name }}
    </NuxtLink>
  </nav>
</template>

<script setup lang="ts">
import { useLocalePath } from '#app'
defineEmits(['navigate'])

const localePath = useLocalePath()

const navigation = [
  {
    name: 'Dashboard',
    href: '/dashboard',
    icon: 'heroicons:home'
  },
  {
    name: 'Analytics',
    href: '/analytics',
    icon: 'heroicons:chart-bar'
  },
  {
    name: 'Users',
    href: '/users',
    icon: 'heroicons:users'
  },
  {
    name: 'Settings',
    href: '/settings',
    icon: 'heroicons:cog-6-tooth'
  }
]
</script>
