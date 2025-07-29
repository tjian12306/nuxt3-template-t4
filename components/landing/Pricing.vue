<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div class="sm:text-center">
        <h2 class="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
          {{ title }}
        </h2>
        <p class="mt-4 text-lg text-gray-500 dark:text-gray-300">
          {{ description }}
        </p>
      </div>

      <div class="mt-16 space-y-4 sm:mt-20 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3">
        <div
          v-for="(plan, index) in plans"
          :key="index"
          class="border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm divide-y divide-gray-200 dark:divide-gray-700"
          :class="plan.featured ? 'border-primary-500 shadow-lg' : ''"
        >
          <div class="p-6">
            <h3 class="text-lg leading-6 font-medium text-gray-900 dark:text-white">
              {{ plan.name }}
            </h3>
            <p class="mt-4 text-sm text-gray-500 dark:text-gray-400">
              {{ plan.description }}
            </p>
            <p class="mt-8">
              <span class="text-4xl font-extrabold text-gray-900 dark:text-white">
                ${{ plan.price }}
              </span>
              <span class="text-base font-medium text-gray-500 dark:text-gray-400">
                /{{ plan.period }}
              </span>
            </p>
            <UButton
              :variant="plan.featured ? 'solid' : 'outline'"
              :color="plan.featured ? 'primary' : 'gray'"
              class="mt-8 w-full"
              size="lg"
            >
              {{ plan.cta }}
            </UButton>
          </div>
          <div class="pt-6 pb-8 px-6">
            <h4 class="text-sm font-medium text-gray-900 dark:text-white tracking-wide uppercase">
              What's included
            </h4>
            <ul class="mt-6 space-y-4">
              <li
                v-for="feature in plan.features"
                :key="feature"
                class="flex space-x-3"
              >
                <Icon name="heroicons:check" class="flex-shrink-0 h-5 w-5 text-green-500" />
                <span class="text-sm text-gray-500 dark:text-gray-400">
                  {{ feature }}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const title = t('landing.pricing.title')
const description = t('landing.pricing.description')

const plans = [
  {
    name: 'Starter',
    description: 'Perfect for small projects',
    price: 0,
    period: 'month',
    cta: 'Get Started',
    featured: false,
    features: [
      'Up to 5 pages',
      'Basic components',
      'Email support'
    ]
  },
  {
    name: 'Pro',
    description: 'Best for growing businesses',
    price: 29,
    period: 'month',
    cta: 'Start Free Trial',
    featured: true,
    features: [
      'Unlimited pages',
      'All components',
      'Priority support',
      'Custom themes'
    ]
  },
  {
    name: 'Enterprise',
    description: 'For large organizations',
    price: 99,
    period: 'month',
    cta: 'Contact Sales',
    featured: false,
    features: [
      'Everything in Pro',
      'Custom development',
      'Dedicated support',
      'SLA guarantee'
    ]
  }
]
</script>
