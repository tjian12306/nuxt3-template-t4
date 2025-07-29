<template>
  <UDropdown :items="items" :popper="{ placement: 'bottom-end' }">
    <UButton
      :icon="currentTheme.icon"
      variant="ghost"
      :aria-label="$t('theme.switch')"
    />
  </UDropdown>
</template>

<script setup lang="ts">
import { useTheme } from '~/composables/useTheme'
import { useI18n } from '#imports'
import { computed } from 'vue'

const { theme, setTheme, themes } = useTheme()
const { t } = useI18n()

const items = computed(() => [
  themes.value.map(themeOption => ({
    label: t(`theme.${themeOption.key}`),
    icon: themeOption.icon,
    click: () => setTheme(themeOption.key)
  }))
])

const currentTheme = computed(() => {
  return themes.value.find(t => t.key === theme.value) || themes.value[0]
})
</script>
