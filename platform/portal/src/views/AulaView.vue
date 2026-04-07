<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const slug = computed(() => route.params.slug as string)
// A aula Slidev foi buildada em /<slug>/ — usamos iframe para embeddá-la
const aulaUrl = computed(() => `/${slug.value}/`)

function goBack() {
  router.push('/')
}
</script>

<template>
  <div class="fixed inset-0 bg-neural-900 flex flex-col">
    <!-- Barra de navegação -->
    <header class="flex-none flex items-center gap-3 px-4 py-3 bg-neural-800/80 backdrop-blur border-b border-neural-600 safe-top">
      <button
        class="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors
               px-3 py-1.5 rounded-lg hover:bg-neural-700 active:scale-95"
        @click="goBack"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M10 3L5 8l5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Aulas
      </button>
      <span class="text-xs text-gray-500 font-mono truncate">{{ slug }}</span>
    </header>

    <!-- Iframe fullscreen da aula Slidev -->
    <iframe
      :src="aulaUrl"
      :title="`Aula ${slug}`"
      class="flex-1 w-full border-none"
      allow="fullscreen"
      loading="lazy"
    />
  </div>
</template>
