<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { marked } from 'marked'
import { RouterLink } from 'vue-router'
import type { AulaMeta } from '@/types/aulas'
import AulaCard from '@/components/AulaCard.vue'

const WORKER = 'https://lms-senac-tecnico-ia.leo-zn-97.workers.dev'

const aulas = ref<AulaMeta[]>([])
const loading = ref(true)
const error = ref('')
const professorMessage = ref('')
const ucAtiva = ref<string | null>(null)

const ucsDisponiveis = computed(() => {
  const set = new Set<string>()
  aulas.value.forEach(a => a.ucs.forEach(uc => set.add(uc)))
  return [...set].sort((a, b) => Number(a) - Number(b))
})

const aulasFiltradas = computed(() =>
  ucAtiva.value ? aulas.value.filter(a => a.ucs.includes(ucAtiva.value!)) : aulas.value
)

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
    <header class="max-w-4xl mx-auto mb-6">
      <p class="text-neural-accent text-sm font-mono mb-1">Senac · Tecnico em IA</p>
      <h1 class="text-2xl sm:text-3xl font-bold text-white mb-4">Portal do Aluno</h1>
      <!-- Tab nav -->
      <nav class="flex gap-1 border-b border-neural-700">
        <RouterLink
          to="/"
          class="px-4 py-2 text-sm font-medium rounded-t-lg transition"
          :class="$route.path === '/' ? 'bg-neural-800 text-white border border-b-neural-800 border-neural-700 -mb-px' : 'text-gray-400 hover:text-white'"
        >Aulas</RouterLink>
        <RouterLink
          to="/avaliacoes"
          class="px-4 py-2 text-sm font-medium rounded-t-lg transition"
          :class="$route.path === '/avaliacoes' ? 'bg-neural-800 text-white border border-b-neural-800 border-neural-700 -mb-px' : 'text-gray-400 hover:text-white'"
        >Avaliações</RouterLink>
      </nav>
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

    <div v-if="!loading && ucsDisponiveis.length" class="max-w-4xl mx-auto mb-4 flex flex-wrap gap-2">
      <button
        @click="ucAtiva = null"
        :class="ucAtiva === null ? 'bg-neural-accent text-neural-900 font-semibold' : 'bg-neural-800 text-gray-400 hover:text-white hover:bg-neural-700'"
        class="px-3 py-1 rounded-full text-xs transition"
      >Todas</button>
      <button
        v-for="uc in ucsDisponiveis" :key="uc"
        @click="ucAtiva = ucAtiva === uc ? null : uc"
        :class="ucAtiva === uc ? 'bg-neural-accent text-neural-900 font-semibold' : 'bg-neural-800 text-gray-400 hover:text-white hover:bg-neural-700'"
        class="px-3 py-1 rounded-full text-xs transition"
      >UC{{ uc }}</button>
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
      <AulaCard v-for="aula in aulasFiltradas" :key="aula.slug" :aula="aula" />
    </main>
  </div>
</template>