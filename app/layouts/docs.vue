<template>
  <div class="min-h-screen bg-white dark:bg-gray-900">
    <!-- <DocsHeader /> -->
    <div class="flex">
      <!-- Sidebar -->
      <aside class="hidden lg:block w-64 fixed inset-y-0 pt-16 bg-gray-50 dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 overflow-y-auto">
        <!-- <DocsNavigation /> -->
      </aside>

      <!-- Main content -->
      <main class="lg:pl-64 pt-16 flex-1">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <slot />
        </div>
      </main>
    </div>
  </div>
</template>
