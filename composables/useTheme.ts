import { ref, computed, readonly } from "vue"

export const useTheme = () => {
  const theme = ref("light")
  const colorScheme = ref("primary")

  const themes = computed(() => [
    { key: "light", name: "Light", icon: "heroicons:sun" },
    { key: "dark", name: "Dark", icon: "heroicons:moon" },
    { key: "system", name: "System", icon: "heroicons:computer-desktop" },
  ])

  const colorSchemes = computed(() => ["primary", "emerald", "blue", "purple"])

  const setTheme = (newTheme: string) => {
    theme.value = newTheme

    if (process.client) {
      localStorage.setItem("theme", newTheme)
      applyTheme(newTheme)
    }
  }

  const setColorScheme = (newScheme: string) => {
    colorScheme.value = newScheme

    if (process.client) {
      localStorage.setItem("colorScheme", newScheme)
      applyColorScheme(newScheme)
    }
  }

  const applyTheme = (themeValue: string) => {
    if (!process.client) return

    const root = document.documentElement

    if (themeValue === "dark") {
      root.classList.add("dark")
    } else if (themeValue === "light") {
      root.classList.remove("dark")
    } else {
      // System theme
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      if (prefersDark) {
        root.classList.add("dark")
      } else {
        root.classList.remove("dark")
      }
    }
  }

  const applyColorScheme = (scheme: string) => {
    if (!process.client) return

    const root = document.documentElement
    const colors = getColorValues(scheme)

    Object.entries(colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-primary-${key}`, value)
    })
  }

  const getColorValues = (scheme: string) => {
    const colorMaps = {
      primary: {
        50: "239 246 255",
        100: "219 234 254",
        200: "191 219 254",
        300: "147 197 253",
        400: "96 165 250",
        500: "59 130 246",
        600: "37 99 235",
        700: "29 78 216",
        800: "30 64 175",
        900: "30 58 138",
        950: "23 37 84",
      },
      emerald: {
        50: "236 253 245",
        100: "209 250 229",
        200: "167 243 208",
        300: "110 231 183",
        400: "52 211 153",
        500: "16 185 129",
        600: "5 150 105",
        700: "4 120 87",
        800: "6 95 70",
        900: "6 78 59",
        950: "2 44 34",
      },
      blue: {
        50: "239 246 255",
        100: "219 234 254",
        200: "191 219 254",
        300: "147 197 253",
        400: "96 165 250",
        500: "59 130 246",
        600: "37 99 235",
        700: "29 78 216",
        800: "30 64 175",
        900: "30 58 138",
        950: "23 37 84",
      },
      purple: {
        50: "250 245 255",
        100: "243 232 255",
        200: "233 213 255",
        300: "196 181 253",
        400: "167 139 250",
        500: "139 92 246",
        600: "124 58 237",
        700: "109 40 217",
        800: "91 33 182",
        900: "76 29 149",
        950: "46 16 101",
      },
    }

    return colorMaps[scheme as keyof typeof colorMaps] || colorMaps.primary
  }

  const initialize = () => {
    if (!process.client) return

    const savedTheme = localStorage.getItem("theme") || "system"
    const savedColorScheme = localStorage.getItem("colorScheme") || "primary"

    theme.value = savedTheme
    colorScheme.value = savedColorScheme

    applyTheme(savedTheme)
    applyColorScheme(savedColorScheme)

    // Listen for system theme changes
    if (savedTheme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
      mediaQuery.addEventListener("change", () => applyTheme("system"))
    }
  }

  return {
    theme: readonly(theme),
    colorScheme: readonly(colorScheme),
    themes,
    colorSchemes,
    setTheme,
    setColorScheme,
    initialize,
  }
}
