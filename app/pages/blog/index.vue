<template>
  <div>
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        {{ $t('blog.title') }}
      </h1>
      <p class="text-xl text-gray-600 dark:text-gray-400">
        {{ $t('blog.description') }}
      </p>
    </div>

    <!-- Categories Filter -->
    <div class="mb-8">
      <div class="flex flex-wrap gap-2">
        <UButton
          v-for="category in categories"
          :key="category"
          :variant="selectedCategory === category ? 'solid' : 'outline'"
          size="sm"
          @click="selectedCategory = category"
        >
          {{ category }}
        </UButton>
      </div>
    </div>

    <!-- Blog Posts Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <article
        v-for="post in filteredPosts"
        :key="post._path"
        class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
      >
        <NuxtLink :to="localePath(post._path)">
          <div v-if="post.image" class="aspect-w-16 aspect-h-9">
            <NuxtImg
              :src="post.image"
              :alt="post.title"
              class="w-full h-48 object-cover"
            />
          </div>
          
          <div class="p-6">
            <div class="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
              <time :datetime="post.publishedAt">
                {{ formatDate(post.publishedAt) }}
              </time>
              <span v-if="post.category" class="mx-2">•</span>
              <span v-if="post.category" class="text-primary-600 dark:text-primary-400">
                {{ post.category }}
              </span>
            </div>
            
            <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2">
              {{ post.title }}
            </h2>
            
            <p class="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
              {{ post.description }}
            </p>
            
            <div class="flex items-center justify-between">
              <div v-if="post.author" class="flex items-center">
                <NuxtImg
                  v-if="post.author.avatar"
                  :src="post.author.avatar"
                  :alt="post.author.name"
                  class="w-8 h-8 rounded-full mr-2"
                />
                <span class="text-sm text-gray-700 dark:text-gray-300">
                  {{ post.author.name }}
                </span>
              </div>
              
              <div v-if="post.tags" class="flex flex-wrap gap-1">
                <span
                  v-for="tag in post.tags.slice(0, 2)"
                  :key="tag"
                  class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </NuxtLink>
      </article>
    </div>

    <!-- Pagination -->
    <div v-if="totalPages > 1" class="mt-12 flex justify-center">
      <UPagination
        v-model="currentPage"
        :page-count="postsPerPage"
        :total="filteredPosts.length"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { definePageMeta, useI18n, useLocalePath, ref, computed } from '#imports'

definePageMeta({
  layout: 'docs'
})

const { locale } = useI18n()
const localePath = useLocalePath()

// Fetch blog posts using @nuxt/content
const posts = await queryCollection('blog')
  .where({ _locale: locale.value })
  .sort({ publishedAt: -1 })
  .find()

const selectedCategory = ref('All')
const currentPage = ref(1)
const postsPerPage = 9

// Get unique categories
const categories = computed(() => {
  const cats = ['All', ...new Set(posts.map(post => post.category).filter(Boolean))]
  return cats
})

// Filter posts by category
const filteredPosts = computed(() => {
  let filtered = posts
  if (selectedCategory.value !== 'All') {
    filtered = posts.filter(post => post.category === selectedCategory.value)
  }
  
  // Pagination
  const start = (currentPage.value - 1) * postsPerPage
  const end = start + postsPerPage
  return filtered.slice(start, end)
})

const totalPages = computed(() => {
  const filtered = selectedCategory.value === 'All' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory.value)
  return Math.ceil(filtered.length / postsPerPage)
})

// Format date
const formatDate = (date) => {
  return new Date(date).toLocaleDateString(locale.value, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// SEO
useSeoMeta({
  title: 'Blog - Nuxt 3 Template',
  description: 'Latest articles, tutorials, and insights about web development'
})
</script>
