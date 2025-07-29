<template>
  <footer class="bg-gray-50 dark:bg-gray-800">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        <div class="space-y-8 xl:col-span-1">
          <NuxtLink to="/" class="flex items-center space-x-2">
            <UIcon name="heroicons:cube" class="w-8 h-8 text-primary-600" />
            <span class="text-xl font-bold text-gray-900 dark:text-white">
              {{ $config.site.name }}
            </span>
          </NuxtLink>
          <p class="text-gray-500 dark:text-gray-400 text-base">
            {{ $config.site.description }}
          </p>
          <div class="flex space-x-6">
            <a href="#" class="text-gray-400 hover:text-gray-500">
              <UIcon name="heroicons:envelope" class="h-6 w-6" />
            </a>
            <a href="#" class="text-gray-400 hover:text-gray-500">
              <UIcon name="lucide:github" class="h-6 w-6" />
            </a>
            <a href="#" class="text-gray-400 hover:text-gray-500">
              <UIcon name="lucide:twitter" class="h-6 w-6" />
            </a>
          </div>
        </div>
        <div class="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 class="text-sm font-semibold text-gray-400 dark:text-gray-300 tracking-wider uppercase">
                {{ $t('footer.company') }}
              </h3>
              <ul class="mt-4 space-y-4">
                <li v-for="item in navigation.footer" :key="item.name">
                  <NuxtLink
                    :to="localePath(item.href)"
                    class="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  >
                    {{ item.name }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
            <div class="mt-12 md:mt-0">
              <h3 class="text-sm font-semibold text-gray-400 dark:text-gray-300 tracking-wider uppercase">
                Resources
              </h3>
              <ul class="mt-4 space-y-4">
                <li>
                  <NuxtLink
                    :to="localePath('/docs')"
                    class="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  >
                    Documentation
                  </NuxtLink>
                </li>
                <li>
                  <a href="#" class="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                    Support
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-12 border-t border-gray-200 dark:border-gray-700 pt-8">
        <p class="text-base text-gray-400 dark:text-gray-500 xl:text-center">
          &copy; {{ new Date().getFullYear() }} {{ $config.site.name }}. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useNuxtApp, useLocalePath, useI18n } from '#app'

const { $config } = useNuxtApp()
const localePath = useLocalePath()
const { t } = useI18n()

const navigation = $config.navigation
</script>
