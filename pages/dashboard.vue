<template>
  <div>
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white">
        {{ $t('nav.dashboard') }}
      </h1>
      <p class="mt-2 text-gray-600 dark:text-gray-400">
        Welcome to your dashboard
      </p>
    </div>

    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <UCard
        v-for="stat in stats"
        :key="stat.name"
        class="overflow-hidden"
      >
        <template #header>
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <Icon :name="stat.icon" class="h-8 w-8 text-primary-600" />
            </div>
            <div class="ml-5 w-0 flex-1">
              <dl>
                <dt class="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                  {{ stat.name }}
                </dt>
                <dd class="text-lg font-medium text-gray-900 dark:text-white">
                  {{ stat.value }}
                </dd>
              </dl>
            </div>
          </div>
        </template>
      </UCard>
    </div>

    <div class="mt-8">
      <UCard>
        <template #header>
          <h3 class="text-lg font-medium text-gray-900 dark:text-white">
            Recent Activity
          </h3>
        </template>
        <div class="space-y-4">
          <div
            v-for="activity in activities"
            :key="activity.id"
            class="flex items-center space-x-4"
          >
            <div class="flex-shrink-0">
              <div class="h-8 w-8 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center">
                <Icon :name="activity.icon" class="h-4 w-4 text-primary-600" />
              </div>
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-gray-900 dark:text-white">
                {{ activity.title }}
              </p>
              <p class="text-sm text-gray-500 dark:text-gray-400">
                {{ activity.description }}
              </p>
            </div>
            <div class="flex-shrink-0 text-sm text-gray-500 dark:text-gray-400">
              {{ activity.time }}
            </div>
          </div>
        </div>
      </UCard>
    </div>
  </div>
</template>

<script setup>
import { definePageMeta, useI18n, useSeoMeta } from '#imports'

definePageMeta({
  layout: 'sidebar'
})

const { t } = useI18n()

const stats = [
  {
    name: 'Total Users',
    value: '1,234',
    icon: 'heroicons:users'
  },
  {
    name: 'Revenue',
    value: '$12,345',
    icon: 'heroicons:currency-dollar'
  },
  {
    name: 'Orders',
    value: '567',
    icon: 'heroicons:shopping-cart'
  }
]

const activities = [
  {
    id: 1,
    title: 'New user registered',
    description: 'John Doe joined the platform',
    time: '2 hours ago',
    icon: 'heroicons:user-plus'
  },
  {
    id: 2,
    title: 'Order completed',
    description: 'Order #1234 has been completed',
    time: '4 hours ago',
    icon: 'heroicons:check-circle'
  },
  {
    id: 3,
    title: 'Payment received',
    description: 'Payment of $299 received',
    time: '6 hours ago',
    icon: 'heroicons:credit-card'
  }
]

// SEO
useSeoMeta({
  title: 'Dashboard - Nuxt 3 Template',
  description: 'Dashboard overview and statistics'
})
</script>
