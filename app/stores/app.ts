import { defineStore, ref, readonly } from "pinia"

export const useAppStore = defineStore("app", () => {
  const sidebarOpen = ref(false)
  const loading = ref(false)

  const toggleSidebar = () => {
    sidebarOpen.value = !sidebarOpen.value
  }

  const setLoading = (value: boolean) => {
    loading.value = value
  }

  return {
    sidebarOpen: readonly(sidebarOpen),
    loading: readonly(loading),
    toggleSidebar,
    setLoading,
  }
})
