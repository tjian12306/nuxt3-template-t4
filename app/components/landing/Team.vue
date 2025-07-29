<template>
  <section class="py-16 bg-white dark:bg-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 class="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
          {{ title }}
        </h2>
        <p class="mt-4 text-lg text-gray-500 dark:text-gray-300">
          {{ description }}
        </p>
      </div>

      <div class="mt-16">
        <div class="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div
            v-for="(member, index) in data"
            :key="index"
            class="text-center animate-fade-in"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <div class="space-y-4">
              <NuxtImg
                :src="member.avatar"
                :alt="member.name"
                class="mx-auto h-32 w-32 rounded-full object-cover"
              />
              <div class="space-y-2">
                <h3 class="text-lg font-medium text-gray-900 dark:text-white">
                  {{ member.name }}
                </h3>
                <p class="text-primary-600 dark:text-primary-400">
                  {{ member.role }}
                </p>
                <p v-if="member.bio" class="text-sm text-gray-500 dark:text-gray-400">
                  {{ member.bio }}
                </p>
              </div>
              
              <div v-if="member.social" class="flex justify-center space-x-3">
                <a
                  v-if="member.social.twitter"
                  :href="member.social.twitter"
                  class="text-gray-400 hover:text-gray-500"
                >
                  <UIcon name="lucide:twitter" class="h-5 w-5" />
                </a>
                <a
                  v-if="member.social.linkedin"
                  :href="member.social.linkedin"
                  class="text-gray-400 hover:text-gray-500"
                >
                  <UIcon name="lucide:linkedin" class="h-5 w-5" />
                </a>
                <a
                  v-if="member.social.github"
                  :href="member.social.github"
                  class="text-gray-400 hover:text-gray-500"
                >
                  <UIcon name="lucide:github" class="h-5 w-5" />
                </a>
                <a
                  v-if="member.social.email"
                  :href="`mailto:${member.social.email}`"
                  class="text-gray-400 hover:text-gray-500"
                >
                  <UIcon name="heroicons:envelope" class="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps({
  data: Array,
  title: String,
  description: String
})
</script>
