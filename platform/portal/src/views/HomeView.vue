<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { AulaMeta } from '@/types/aulas'
import AulaCard from '@/components/AulaCard.vue'

const aulas = ref<AulaMeta[]>([])
const loading = ref(true)
const error = ref('')

onMounted(async () => {
  try {
    const res = await fetch('/aulas.json')
    if (!res.ok) throw new Error('aulas.json não encontrado')
    aulas.value = await res.json()
  } catch (e) {
    error.value = 'Não foi possível carregar as aulas.'
    console.error(e)
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="min-h-dvh bg-neural-900 px-4 py-8 sm:px-6">
    <!-- Header -->
    <header class="max-w-4xl mx-auto mb-8">
      <p class="text-neural-accent text-sm font-mono mb-1">Senac · Técnico em IA</p>
      <h1 class="text-2xl sm:text-3xl font-bold text-white">Aulas</h1>
    </header>

    <!-- Loading -->
    <div v-if="loading" class="max-w-4xl mx-auto grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="n in 6" :key="n"
        class="h-36 rounded-2xl bg-neural-800 animate-pulse"
      />
    </div>

    <!-- Error -->
    <div v-else-if="error" class="max-w-4xl mx-auto text-center py-16">
      <p class="text-red-400">{{ error }}</p>
    </div>

    <!-- Empty -->
    <div v-else-if="!aulas.length" class="max-w-4xl mx-auto text-center py-16">
      <p class="text-gray-500">Nenhuma aula disponível ainda.</p>
    </div>

    <!-- Grid de aulas -->
    <main v-else class="max-w-4xl mx-auto grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <AulaCard v-for="aula in aulas" :key="aula.slug" :aula="aula" />
    </main>
  </div>
</template>
