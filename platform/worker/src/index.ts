/**
 * Cloudflare Worker — API LMS
 * POST /api/sync           — persiste progresso (público)
 * POST /api/auth/login     — autentica admin, retorna JWT
 * GET  /api/message        — busca mensagem do professor (público)
 * PUT  /api/message        — atualiza mensagem (requer JWT admin)
 */

interface Env {
  DB: D1Database
  ADMIN_USERNAME: string   // wrangler secret
  ADMIN_PASSWORD: string   // wrangler secret
  JWT_SECRET: string       // wrangler secret
}

interface SyncPayload {
  userId: string
  aulaId: string
  progresso: number
  respostas: Record<string, string>
}

// ---------------------------------------------------------------------------
// JWT (HS256 via Web Crypto — sem deps externas)
// ---------------------------------------------------------------------------

async function importKey(secret: string): Promise<CryptoKey> {
  return crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign', 'verify'],
  )
}

function b64url(buf: ArrayBuffer): string {
  return btoa(String.fromCharCode(...new Uint8Array(buf)))
    .replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
}

function decodeB64url(str: string): Uint8Array {
  const b64 = str.replace(/-/g, '+').replace(/_/g, '/')
  return Uint8Array.from(atob(b64), c => c.charCodeAt(0))
}

async function signJwt(payload: Record<string, unknown>, secret: string): Promise<string> {
  const header = b64url(new TextEncoder().encode(JSON.stringify({ alg: 'HS256', typ: 'JWT' })))
  const body   = b64url(new TextEncoder().encode(JSON.stringify(payload)))
  const key    = await importKey(secret)
  const sig    = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(`${header}.${body}`))
  return `${header}.${body}.${b64url(sig)}`
}

async function verifyJwt(token: string, secret: string): Promise<Record<string, unknown> | null> {
  const parts = token.split('.')
  if (parts.length !== 3) return null
  const key = await importKey(secret)
  const valid = await crypto.subtle.verify(
    'HMAC', key,
    decodeB64url(parts[2]),
    new TextEncoder().encode(`${parts[0]}.${parts[1]}`),
  )
  if (!valid) return null
  try {
    const payload = JSON.parse(new TextDecoder().decode(decodeB64url(parts[1])))
    if (payload.exp && Date.now() / 1000 > payload.exp) return null
    return payload
  } catch { return null }
}

// Comparação em tempo constante p/ prevenir timing attacks
async function safeEqual(a: string, b: string): Promise<boolean> {
  const ka = await crypto.subtle.importKey('raw', new TextEncoder().encode(a), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign'])
  const kb = await crypto.subtle.importKey('raw', new TextEncoder().encode(b), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign'])
  const sentinel = new Uint8Array(32)
  const [sa, sb] = await Promise.all([
    crypto.subtle.sign('HMAC', ka, sentinel),
    crypto.subtle.sign('HMAC', kb, sentinel),
  ])
  const ua = new Uint8Array(sa), ub = new Uint8Array(sb)
  let diff = 0
  for (let i = 0; i < ua.length; i++) diff |= ua[i] ^ ub[i]
  return diff === 0
}

// ---------------------------------------------------------------------------
// Router
// ---------------------------------------------------------------------------

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url)

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders() })
    }

    if (request.method === 'POST' && url.pathname === '/api/sync') {
      return handleSync(request, env)
    }

    if (request.method === 'POST' && url.pathname === '/api/auth/login') {
      return handleLogin(request, env)
    }

    if (request.method === 'GET' && url.pathname === '/api/message') {
      return handleGetMessage(env)
    }

    if (request.method === 'PUT' && url.pathname === '/api/message') {
      return handlePutMessage(request, env)
    }

    return new Response('Not found', { status: 404 })
  },
}

// ---------------------------------------------------------------------------
// Handlers
// ---------------------------------------------------------------------------

async function handleLogin(request: Request, env: Env): Promise<Response> {
  let body: { username?: string; password?: string }
  try { body = await request.json() } catch { return jsonResponse({ error: 'Invalid JSON' }, 400) }

  const { username, password } = body
  if (!username || !password) return jsonResponse({ error: 'Missing credentials' }, 400)

  const userOk = await safeEqual(username, env.ADMIN_USERNAME ?? '')
  const passOk = await safeEqual(password, env.ADMIN_PASSWORD ?? '')

  if (!userOk || !passOk) {
    return jsonResponse({ error: 'Invalid credentials' }, 401)
  }

  const token = await signJwt(
    { sub: username, role: 'admin', exp: Math.floor(Date.now() / 1000) + 86400 },
    env.JWT_SECRET ?? '',
  )

  return jsonResponse({ token })
}

async function handleGetMessage(env: Env): Promise<Response> {
  const row = await env.DB.prepare(
    `SELECT value FROM site_config WHERE key = 'professor_message'`
  ).first<{ value: string }>()
  return jsonResponse({ message: row?.value ?? '' })
}

async function handlePutMessage(request: Request, env: Env): Promise<Response> {
  const authHeader = request.headers.get('Authorization') ?? ''
  const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : ''
  const payload = await verifyJwt(token, env.JWT_SECRET ?? '')
  if (!payload || payload.role !== 'admin') {
    return jsonResponse({ error: 'Unauthorized' }, 401)
  }

  let body: { message?: string }
  try { body = await request.json() } catch { return jsonResponse({ error: 'Invalid JSON' }, 400) }

  if (typeof body.message !== 'string') return jsonResponse({ error: 'message must be a string' }, 422)

  // Sanitização básica: limitar tamanho
  const message = body.message.slice(0, 5000)

  await env.DB.prepare(`
    INSERT INTO site_config (key, value, updated_at)
    VALUES ('professor_message', ?, unixepoch())
    ON CONFLICT (key) DO UPDATE SET value = excluded.value, updated_at = excluded.updated_at
  `).bind(message).run()

  return jsonResponse({ ok: true })
}

async function handleSync(request: Request, env: Env): Promise<Response> {
  let body: SyncPayload
  try { body = await request.json() } catch { return jsonResponse({ error: 'Invalid JSON' }, 400) }

  const { userId, aulaId, progresso, respostas } = body
  if (!userId || !aulaId || typeof progresso !== 'number') {
    return jsonResponse({ error: 'Missing required fields: userId, aulaId, progresso' }, 422)
  }

  await env.DB.prepare(`
    INSERT INTO progress (user_id, aula_slug, progresso, updated_at)
    VALUES (?, ?, ?, unixepoch())
    ON CONFLICT (user_id, aula_slug)
    DO UPDATE SET progresso = excluded.progresso, updated_at = excluded.updated_at
  `).bind(userId, aulaId, progresso).run()

  if (respostas && typeof respostas === 'object') {
    for (const [questaoId, resposta] of Object.entries(respostas)) {
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

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function corsHeaders(): Record<string, string> {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  }
}

function jsonResponse(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json', ...corsHeaders() },
  })
}

