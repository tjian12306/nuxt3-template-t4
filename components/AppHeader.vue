<template>
  <header class="bg-white dark:bg-gray-800 shadow">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <div class="flex-shrink-0 flex items-center">
            <NuxtLink to="/" class="flex items-center space-x-2">
              <Icon name="heroicons:cube" class="w-8 h-8 text-primary-600" />
              <span class="text-xl font-bold text-gray-900 dark:text-white">
                {{ site.name }}
              </span>
            </NuxtLink>
          </div>
          <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
            <NuxtLink
              v-for="item in navigation.main"
              :key="item.name"
              :to="localePath(item.href)"
              class="border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 hover:text-gray-700 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              active-class="border-primary-500 text-gray-900 dark:text-white"
            >
              {{ item.name }}
            </NuxtLink>
          </div>
        </div>
        <div class="flex items-center space-x-4">
          <LanguageSwitcher />
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { useNuxtApp, useLocalePath } from '#app'

const { $config } = useNuxtApp()
const localePath = useLocalePath()

const navigation = $config.navigation
const site = $config.site
</script>
