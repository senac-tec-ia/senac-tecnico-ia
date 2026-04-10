<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { marked } from 'marked'
import { RouterLink, RouterView, useRoute } from 'vue-router'

const WORKER = 'https://lms-senac-tecnico-ia.leo-zn-97.workers.dev'
const route = useRoute()
const professorMessage = ref('')

const isAulaPage = computed(() => route.name === 'aula' || route.path.startsWith('/aula/'))

onMounted(async () => {
  try {
    const res = await fetch(`${WORKER}/api/message`)
    if (res.ok) {
      const data = await res.json()
      professorMessage.value = data.message ?? ''
    }
  } catch {}
})
</script>

<template>
  <div class="min-h-dvh bg-neural-900">
    <header
      v-if="!isAulaPage"
      class="sticky top-0 z-20 bg-neural-900/95 backdrop-blur-sm border-b border-neural-700 px-4 pt-5 pb-0 sm:px-6"
    >
      <div class="max-w-4xl mx-auto">
        <div class="flex justify-center sm:justify-between items-center mb-6">
        <div>
        <p class="text-neural-accent text-xs font-mono mb-0.5">Senac · Técnico em IA</p>
        <h1 class="text-xl sm:text-2xl font-bold text-white mb-3">Portal do Aluno</h1></div><div
          v-if="professorMessage"
          class="mb-3 rounded-xl border border-neural-accent/30 bg-neural-800/60 px-4 py-3"
        >
          <p class="text-neural-accent text-xs font-mono uppercase tracking-widest mb-1">Mensagem do professor</p>
          <div class="text-sm text-gray-200 leading-relaxed" v-html="marked.parse(professorMessage)" />
        </div>
      </div>

        <nav class="flex gap-1">
          <RouterLink
            to="/"
            class="px-4 py-2 text-sm font-medium transition border-b-2"
            :class="route.path === '/' ? 'text-white border-neural-accent' : 'text-gray-400 hover:text-white border-transparent'"
          >Aulas</RouterLink>
          <RouterLink
            to="/avaliacoes"
            class="px-4 py-2 text-sm font-medium transition border-b-2"
            :class="route.path === '/avaliacoes' ? 'text-white border-neural-accent' : 'text-gray-400 hover:text-white border-transparent'"
          >Avaliações</RouterLink>
        </nav>
      </div>
    </header>

    <div :class="isAulaPage ? '' : 'px-4 py-6 sm:px-6'">
      <RouterView />
    </div>
  </div>
</template>
