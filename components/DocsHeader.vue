<template>
  <header class="fixed top-0 z-50 w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex items-center">
          <NuxtLink to="/" class="flex items-center space-x-2">
            <Icon name="heroicons:cube" class="w-8 h-8 text-primary-600" />
            <span class="text-xl font-bold text-gray-900 dark:text-white">
              {{ siteName }}
            </span>
          </NuxtLink>
          <nav class="hidden md:ml-8 md:flex md:space-x-8">
            <NuxtLink
              :to="localePath('/docs')"
              class="text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 text-sm font-medium"
              active-class="text-primary-600 dark:text-primary-400"
            >
              Documentation
            </NuxtLink>
          </nav>
        </div>
        <div class="flex items-center space-x-4">
          <LanguageSwitcher />
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useNuxtApp, useLocalePath } from '#app';

const { $config } = useNuxtApp();
const localePath = useLocalePath();
const siteName = $config.site.name;
</script>
