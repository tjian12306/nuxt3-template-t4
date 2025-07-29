<template>
  <div>
    <ContentDoc v-slot="{ doc }">
      <article class="prose prose-lg max-w-none">
        <!-- Article Header -->
        <header class="mb-8 not-prose">
          <div v-if="doc.image" class="mb-8">
            <NuxtImg
              :src="doc.image"
              :alt="doc.title"
              class="w-full h-64 md:h-96 object-cover rounded-lg"
            />
          </div>
          
          <div class="flex items-center text-sm text-gray-500 mb-4">
            <time :datetime="doc.publishedAt">
              {{ formatDate(doc.publishedAt) }}
            </time>
            <span v-if="doc.category" class="mx-2">•</span>
            <span v-if="doc.category" class="text-primary-600">
              {{ doc.category }}
            </span>
            <span v-if="doc.readingTime" class="mx-2">•</span>
            <span v-if="doc.readingTime">{{ doc.readingTime }} min read</span>
          </div>
          
          <h1 class="text-4xl font-bold text-gray-900 mb-4">
            {{ doc.title }}
          </h1>
          
          <p v-if="doc.description" class="text-xl text-gray-600 mb-6">
            {{ doc.description }}
          </p>
          
          <div v-if="doc.author" class="flex items-center mb-6">
            <NuxtImg
              v-if="doc.author.avatar"
              :src="doc.author.avatar"
              :alt="doc.author.name"
              class="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <p class="font-medium text-gray-900">
                {{ doc.author.name }}
              </p>
              <p v-if="doc.author.bio" class="text-sm text-gray-500">
                {{ doc.author.bio }}
              </p>
            </div>
          </div>
          
          <div v-if="doc.tags" class="flex flex-wrap gap-2 mb-8">
            <span
              v-for="tag in doc.tags"
              :key="tag"
              class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800"
            >
              {{ tag }}
            </span>
          </div>
        </header>

        <!-- Article Content -->
        <ContentRenderer :value="doc" />

        <!-- Article Footer -->
        <footer class="mt-12 pt-8 border-t border-gray-200 not-prose">
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-4">
              <span class="text-sm text-gray-500">Share this article:</span>
              <div class="flex space-x-2">
                <UButton
                  :to="`https://twitter.com/intent/tweet?text=${encodeURIComponent(doc.title)}&url=${encodeURIComponent(currentUrl)}`"
                  target="_blank"
                  variant="outline"
                  size="sm"
                  icon="lucide:twitter"
                />
                <UButton
                  :to="`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`"
                  target="_blank"
                  variant="outline"
                  size="sm"
                  icon="lucide:linkedin"
                />
              </div>
            </div>
          </div>
        </footer>
      </article>
    </ContentDoc>

    <!-- Related Posts -->
    <section v-if="relatedPosts.length > 0" class="mt-16">
      <h2 class="text-2xl font-bold text-gray-900 mb-8">
        {{ $t('blog.relatedPosts') }}
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <article
          v-for="post in relatedPosts"
          :key="post._path"
          class="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <NuxtLink :to="localePath(post._path)">
            <div v-if="post.image" class="aspect-w-16 aspect-h-9">
              <NuxtImg
                :src="post.image"
                :alt="post.title"
                class="w-full h-32 object-cover"
              />
            </div>
            <div class="p-4">
              <h3 class="font-semibold text-gray-900 mb-2 line-clamp-2">
                {{ post.title }}
              </h3>
              <p class="text-sm text-gray-600 line-clamp-2">
                {{ post.description }}
              </p>
            </div>
          </NuxtLink>
        </article>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { definePageMeta, useI18n, useLocalePath, useRoute, computed } from '#imports'

definePageMeta({
  layout: 'docs'
})

const { locale } = useI18n()
const localePath = useLocalePath()
const route = useRoute()

// Get current URL for sharing
const currentUrl = computed(() => {
  if (process.client) {
    return window.location.href
  }
  return ''
})

// Fetch related posts using @nuxt/content
const { data: relatedPosts } = await queryCollection('blog')
  .where({ 
    _locale: locale.value,
    _path: { $ne: route.path }
  })
  .limit(3)
  .find()

// Format date
const formatDate = (date) => {
  return new Date(date).toLocaleDateString(locale.value, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>
