import { ref } from 'vue'

const USER_ID_KEY = 'lms_user_id'

/** Retorna (ou cria) o UUID persistente do aluno no localStorage */
export function getUserId(): string {
  let id = localStorage.getItem(USER_ID_KEY)
  if (!id) {
    id = crypto.randomUUID()
    localStorage.setItem(USER_ID_KEY, id)
  }
  return id
}

export interface AulaProgress {
  aulaId: string
  progresso: number      // 0.0 a 1.0
  respostas: Record<string, string>
  ultimaAtualizacao: number  // timestamp ms
}

const STORAGE_KEY = 'lms_progress'

function loadAll(): Record<string, AulaProgress> {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '{}')
  } catch {
    return {}
  }
}

function saveAll(data: Record<string, AulaProgress>) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}

export function useProgress(aulaId: string) {
  const all = loadAll()

  const progress = ref<AulaProgress>(
    all[aulaId] ?? {
      aulaId,
      progresso: 0,
      respostas: {},
      ultimaAtualizacao: Date.now(),
    }
  )

  function save() {
    progress.value.ultimaAtualizacao = Date.now()
    const all = loadAll()
    all[aulaId] = progress.value
    saveAll(all)
  }

  function setProgresso(value: number) {
    progress.value.progresso = Math.min(1, Math.max(0, value))
    save()
  }

  function setResposta(questaoId: string, resposta: string) {
    progress.value.respostas[questaoId] = resposta
    save()
  }

  return { progress, setProgresso, setResposta }
}

/** Retorna o progresso de todas as aulas (para o HomeView exibir badges) */
export function useAllProgress() {
  return ref(loadAll())
}
