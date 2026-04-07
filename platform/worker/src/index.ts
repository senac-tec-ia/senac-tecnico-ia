/**
 * Cloudflare Worker — API de sync de progresso
 * POST /api/sync  — persiste progresso e respostas no D1
 */

interface Env {
  DB: D1Database
}

interface SyncPayload {
  userId: string       // UUID gerado pelo cliente, armazenado no localStorage
  aulaId: string       // slug da aula (ex: a11-uc07-01-02-09abr)
  progresso: number    // 0.0 a 1.0
  respostas: Record<string, string>
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url)

    // CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders() })
    }

    if (request.method === 'POST' && url.pathname === '/api/sync') {
      return handleSync(request, env)
    }

    return new Response('Not found', { status: 404 })
  },
}

async function handleSync(request: Request, env: Env): Promise<Response> {
  let body: SyncPayload

  try {
    body = await request.json()
  } catch {
    return jsonResponse({ error: 'Invalid JSON' }, 400)
  }

  const { userId, aulaId, progresso, respostas } = body

  if (!userId || !aulaId || typeof progresso !== 'number') {
    return jsonResponse({ error: 'Missing required fields: userId, aulaId, progresso' }, 422)
  }

  // Upsert progress
  await env.DB.prepare(`
    INSERT INTO progress (user_id, aula_slug, progresso, updated_at)
    VALUES (?, ?, ?, unixepoch())
    ON CONFLICT (user_id, aula_slug)
    DO UPDATE SET progresso = excluded.progresso, updated_at = excluded.updated_at
  `).bind(userId, aulaId, progresso).run()

  // Upsert respostas em batch
  if (respostas && typeof respostas === 'object') {
    const entries = Object.entries(respostas)
    for (const [questaoId, resposta] of entries) {
      await env.DB.prepare(`
        INSERT INTO respostas (user_id, aula_slug, questao_id, resposta, updated_at)
        VALUES (?, ?, ?, ?, unixepoch())
        ON CONFLICT (user_id, aula_slug, questao_id)
        DO UPDATE SET resposta = excluded.resposta, updated_at = excluded.updated_at
      `).bind(userId, aulaId, questaoId, resposta).run()
    }
  }

  return jsonResponse({ ok: true })
}

function corsHeaders(): Record<string, string> {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  }
}

function jsonResponse(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json', ...corsHeaders() },
  })
}
