<template>
  <section class="py-16 bg-gray-50 dark:bg-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-2xl mx-auto text-center">
        <h2 class="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
          {{ data.title }}
        </h2>
        <p class="mt-4 text-lg text-gray-500 dark:text-gray-300">
          {{ data.description }}
        </p>

        <form @submit.prevent="handleSubmit" class="mt-8 sm:flex sm:max-w-md sm:mx-auto">
          <div class="min-w-0 flex-1">
            <UInput
              v-model="email"
              type="email"
              :placeholder="data.placeholder"
              required
              class="w-full"
              :disabled="loading"
            />
          </div>
          <div class="mt-3 sm:mt-0 sm:ml-3 sm:flex-shrink-0">
            <UButton
              type="submit"
              :loading="loading"
              :disabled="loading"
              class="w-full"
            >
              {{ data.buttonText }}
            </UButton>
          </div>
        </form>

        <div v-if="message" class="mt-4">
          <p :class="success ? 'text-green-600' : 'text-red-600'">
            {{ message }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps({
  data: Object
})

let email = ''
let loading = false
let message = ''
let success = false

const handleSubmit = async () => {
  loading = true
  message = ''

  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Here you would typically call your newsletter API
    // await $fetch('/api/newsletter', { method: 'POST', body: { email: email.value } })
    
    message = props.data.successMessage
    success = true
    email = ''
  } catch (error) {
    message = 'Something went wrong. Please try again.'
    success = false
  } finally {
    loading = false
  }
}
</script>
