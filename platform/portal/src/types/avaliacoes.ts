export interface AvaliacaoMeta {
  id: string
  titulo: string
  tipo: string
  prazo: string
  prazoLabel: string
  ucs: string[]
  status: 'published' | 'em-planejamento'
}
