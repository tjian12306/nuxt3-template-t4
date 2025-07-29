<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <div class="flex">
      <!-- Sidebar -->
      <aside class="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0">
        <div class="flex flex-col flex-grow bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
          <div class="flex items-center flex-shrink-0 px-4 py-4">
            <NuxtLink to="/" class="flex items-center space-x-2">
              <Icon name="heroicons:cube" class="w-8 h-8 text-primary-600" />
              <span class="text-xl font-bold text-gray-900 dark:text-white">
                {{ $config.site.name }}
              </span>
            </NuxtLink>
          </div>
          <nav class="flex-1 px-4 pb-4 space-y-1">
            <SidebarNavigation />
          </nav>
        </div>
      </aside>

      <!-- Main content -->
      <div class="lg:pl-64 flex flex-col flex-1">
        <div class="sticky top-0 z-10 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 lg:hidden">
          <div class="flex items-center justify-between px-4 py-2">
            <button @click="toggleSidebar" class="text-gray-500 hover:text-gray-600">
              <Icon name="heroicons:bars-3" class="w-6 h-6" />
            </button>
            <ThemeSwitcher />
          </div>
        </div>
        
        <main class="flex-1">
          <div class="py-6">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <slot />
            </div>
          </div>
        </main>
      </div>
    </div>

    <!-- Mobile sidebar -->
    <USlideover v-model="sidebarOpen" side="left">
      <div class="p-4">
        <div class="flex items-center justify-between mb-6">
          <NuxtLink to="/" class="flex items-center space-x-2">
            <Icon name="heroicons:cube" class="w-8 h-8 text-primary-600" />
            <span class="text-xl font-bold">{{ $config.site.name }}</span>
          </NuxtLink>
          <UButton
            icon="heroicons:x-mark"
            variant="ghost"
            @click="sidebarOpen = false"
          />
        </div>
        <SidebarNavigation @navigate="sidebarOpen = false" />
      </div>
    </USlideover>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const sidebarOpen = ref(false)

const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value
}
</script>
