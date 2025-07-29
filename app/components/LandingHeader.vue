<template>
  <header class="relative bg-white dark:bg-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="flex justify-between items-center py-6 md:justify-start md:space-x-10">
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <NuxtLink to="/" class="flex items-center space-x-2">
            <UIcon name="heroicons:cube" class="w-8 h-8 text-primary-600" />
            <span class="text-xl font-bold text-gray-900 dark:text-white">
              {{ appConfig.site.name }}
            </span>
          </NuxtLink>
        </div>

        <div class="-mr-2 -my-2 md:hidden">
          <UButton
            icon="heroicons:bars-3"
            variant="ghost"
            @click="mobileMenuOpen = true"
          />
        </div>

        <nav class="hidden md:flex space-x-10">
          <NuxtLink
            v-for="item in navigation.main"
            :key="item.name"
            :to="localePath(item.href)"
            class="text-base font-medium text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            {{ item.name }}
          </NuxtLink>
        </nav>

        <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0 space-x-4">
          <CommonLanguageSwitcher />
          <CommonThemeSwitcher />
          <NuxtLink :to="localePath('/dashboard')" size="sm">
            Get Started
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <USlideover v-model="mobileMenuOpen" side="left" class="md:hidden">
          <UButton
            icon="heroicons:x-mark"
            variant="ghost"
            @click="mobileMenuOpen = false"
          />

      <template #content>
      <div class="p-6">
        <div class="flex items-center justify-between">
          <NuxtLink to="/" class="flex items-center space-x-2">
            <UIcon name="heroicons:cube" class="w-8 h-8 text-primary-600" />
            <span class="text-xl font-bold">{{ appConfig.site.name }}</span>
          </NuxtLink>

        </div>
        <div class="mt-6">
          <nav class="grid gap-y-8">
            <NuxtLink
              v-for="item in navigation.main"
              :key="item.name"
              :to="localePath(item.href)"
              class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 dark:hover:bg-gray-800"
              @click="mobileMenuOpen = false"
            >
              <span class="ml-3 text-base font-medium text-gray-900 dark:text-white">
                {{ item.name }}
              </span>
            </NuxtLink>
          </nav>
          <div class="mt-6 flex flex-col space-y-4">
            <CommonLanguageSwitcher />
            <CommonThemeSwitcher />
            <NuxtLink :to="localePath('/dashboard')" class="w-full">
              Get Started
            </NuxtLink>
          </div>
        </div>
      </div>
    </template>
    </USlideover>
  </header>
</template>

<script setup lang="ts">
const appConfig = useAppConfig()
const localePath = useLocalePath()
const mobileMenuOpen = ref(false)

const navigation = appConfig.navigation
</script>
