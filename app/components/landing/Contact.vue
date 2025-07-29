<template>
  <section class="py-16 bg-white dark:bg-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-2xl mx-auto text-center mb-16">
        <h2 class="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
          {{ data.title }}
        </h2>
        <p class="mt-4 text-lg text-gray-500 dark:text-gray-300">
          {{ data.description }}
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Contact Info -->
        <div class="space-y-8">
          <div v-if="data.info.address" class="flex items-start">
            <UIcon name="heroicons:map-pin" class="h-6 w-6 text-primary-600 mt-1 mr-4" />
            <div>
              <h3 class="text-lg font-medium text-gray-900 dark:text-white">Address</h3>
              <p class="mt-1 text-gray-500 dark:text-gray-400">{{ data.info.address }}</p>
            </div>
          </div>

          <div v-if="data.info.phone" class="flex items-start">
            <UIcon name="heroicons:phone" class="h-6 w-6 text-primary-600 mt-1 mr-4" />
            <div>
              <h3 class="text-lg font-medium text-gray-900 dark:text-white">Phone</h3>
              <p class="mt-1 text-gray-500 dark:text-gray-400">{{ data.info.phone }}</p>
            </div>
          </div>

          <div v-if="data.info.email" class="flex items-start">
            <UIcon name="heroicons:envelope" class="h-6 w-6 text-primary-600 mt-1 mr-4" />
            <div>
              <h3 class="text-lg font-medium text-gray-900 dark:text-white">Email</h3>
              <p class="mt-1 text-gray-500 dark:text-gray-400">{{ data.info.email }}</p>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div>
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div>
              <UInput
                v-model="form.name"
                :label="data.form.nameLabel"
                required
                :disabled="loading"
              />
            </div>

            <div>
              <UInput
                v-model="form.email"
                type="email"
                :label="data.form.emailLabel"
                required
                :disabled="loading"
              />
            </div>

            <div>
              <UTextarea
                v-model="form.message"
                :label="data.form.messageLabel"
                rows="4"
                required
                :disabled="loading"
              />
            </div>

            <div>
              <UButton
                type="submit"
                :loading="loading"
                :disabled="loading"
                class="w-full"
              >
                {{ data.form.submitText }}
              </UButton>
            </div>

            <div v-if="message" class="text-center">
              <p :class="success ? 'text-green-600' : 'text-red-600'">
                {{ message }}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps({
  data: Object
})

let form = {
  name: '',
  email: '',
  message: ''
}

let loading = false
let message = ''
let success = false

const handleSubmit = async () => {
  loading = true
  message = ''

  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Here you would typically call your contact API
    // await $fetch('/api/contact', { method: 'POST', body: form })
    
    message = props.data.form.successMessage
    success = true
    form = { name: '', email: '', message: '' }
  } catch (error) {
    message = 'Something went wrong. Please try again.'
    success = false
  } finally {
    loading = false
  }
}
</script>
