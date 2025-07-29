<template>
  <UDropdown :items="items" :popper="{ placement: 'bottom-end' }">
    <UButton
      :label="currentLocale.name"
      trailing-icon="heroicons:chevron-down"
      variant="ghost"
    />
  </UDropdown>
</template>

<script setup lang="ts">
import { useI18n, useSwitchLocalePath } from '#imports'
import { computed } from 'vue'

const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const currentLocale = computed(() => {
  return locales.value.find(l => l.code === locale.value)
})

const items = computed(() => [
  locales.value.map(localeOption => ({
    label: localeOption.name,
    to: switchLocalePath(localeOption.code)
  }))
])
</script>
