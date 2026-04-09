<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { marked } from 'marked'
import type { AulaMeta } from '@/types/aulas'
import AulaCard from '@/components/AulaCard.vue'

const WORKER = 'https://lms-senac-tecnico-ia.leo-zn-97.workers.dev'

const aulas = ref<AulaMeta[]>([])
const loading = ref(true)
const error = ref('')
const professorMessage = ref('')

onMounted(async () => {
  try {
    const [aulasRes, msgRes] = await Promise.all([
      fetch('/aulas.json'),
      fetch(`${WORKER}/api/message`),
    ])
    if (!aulasRes.ok) throw new Error('aulas.json nao encontrado')
    aulas.value = await aulasRes.json()
    if (msgRes.ok) {
      const data = await msgRes.json()
      professorMessage.value = data.message ?? ''
    }
  } catch (e) {
    error.value = 'Nao foi possivel carregar as aulas.'
    console.error(e)
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="min-h-dvh bg-neural-900 px-4 py-8 sm:px-6">
    <header class="max-w-4xl mx-auto mb-8">
      <p class="text-neural-accent text-sm font-mono mb-1">Senac · Tecnico em IA</p>
      <h1 class="text-2xl sm:text-3xl font-bold text-white">Aulas</h1>
    </header>

    <div
      v-if="professorMessage"
      class="max-w-4xl mx-auto mb-8 rounded-2xl border border-neural-accent/30 bg-neural-800/60 px-5 py-4"
    >
      <p class="text-neural-accent text-xs font-mono uppercase tracking-widest mb-2">Mensagem do professor</p>
      <div
        class="prose prose-invert prose-sm max-w-none text-gray-200"
        v-html="marked.parse(professorMessage)"
      />
    </div>

    <div v-if="loading" class="max-w-4xl mx-auto grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <div v-for="n in 6" :key="n" class="h-36 rounded-2xl bg-neural-800 animate-pulse" />
    </div>

    <div v-else-if="error" class="max-w-4xl mx-auto text-center py-16">
      <p class="text-red-400">{{ error }}</p>
    </div>

    <div v-else-if="!aulas.length" class="max-w-4xl mx-auto text-center py-16">
      <p class="text-gray-500">Nenhuma aula disponivel ainda.</p>
    </div>

    <main v-else class="max-w-4xl mx-auto grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <AulaCard v-for="aula in aulas" :key="aula.slug" :aula="aula" />
    </main>
  </div>
</template>