export interface AulaMeta {
  slug: string
  dirName: string
  numero: string
  data: string
  titulo: string
  ucs: string[]
  tipo: 'normal' | 'reposicao-sabado'
  status: 'draft' | 'em-planejamento' | 'published'
}
