<template>
  <nav class="p-6">
    <div class="space-y-8">
      <div>
        <h3 class="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
          Getting Started
        </h3>
        <ul class="mt-4 space-y-2">
          <li>
            <NuxtLink
              :to="localePath('/docs')"
              class="block px-3 py-2 text-sm text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
              active-class="bg-primary-100 dark:bg-primary-900 text-primary-900 dark:text-primary-100"
            >
              Introduction
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              :to="localePath('/docs/installation')"
              class="block px-3 py-2 text-sm text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
              active-class="bg-primary-100 dark:bg-primary-900 text-primary-900 dark:text-primary-100"
            >
              Installation
            </NuxtLink>
          </li>
        </ul>
      </div>
      <div>
        <h3 class="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
          Components
        </h3>
        <ul class="mt-4 space-y-2">
          <li>
            <NuxtLink
              :to="localePath('/docs/components')"
              class="block px-3 py-2 text-sm text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
              active-class="bg-primary-100 dark:bg-primary-900 text-primary-900 dark:text-primary-100"
            >
              Overview
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useLocalePath } from '#app'
const localePath = useLocalePath()
</script>
