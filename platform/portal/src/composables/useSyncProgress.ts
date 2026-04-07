import { onMounted, onUnmounted } from 'vue'
import { getUserId } from './useProgress'

const SYNC_INTERVAL_MS = 30_000
const API_URL = '/api/sync'

/** Envia o estado completo de progresso de uma aula para o Worker (idempotente) */
async function syncPayload(payload: {
  aulaId: string
  progresso: number
  respostas: Record<string, string>
}) {
  try {
    await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId: getUserId(),
        aulaId: payload.aulaId,
        progresso: payload.progresso,
        respostas: payload.respostas,
      }),
      keepalive: true,  // garante envio mesmo em beforeunload
    })
  } catch {
    // Silencioso — localStorage é a fonte de verdade
  }
}

/**
 * Composable de sync em batch.
 * - Sync periódico a cada 30s
 * - Sync no beforeunload
 * - Exposição de `syncNow()` para chamar em eventos pontuais (completar exercício, etc.)
 */
export function useSyncProgress(getPayload: () => {
  aulaId: string
  progresso: number
  respostas: Record<string, string>
}) {
  let interval: ReturnType<typeof setInterval>

  async function syncNow() {
    await syncPayload(getPayload())
  }

  function onBeforeUnload() {
    syncPayload(getPayload())  // fire and forget com keepalive
  }

  onMounted(() => {
    interval = setInterval(syncNow, SYNC_INTERVAL_MS)
    window.addEventListener('beforeunload', onBeforeUnload)
  })

  onUnmounted(() => {
    clearInterval(interval)
    window.removeEventListener('beforeunload', onBeforeUnload)
  })

  return { syncNow }
}
