#!/usr/bin/env bash
# setup-cloudflare.sh — Configura banco D1 e faz deploy do Worker
#
# Pré-requisitos:
#   1. wrangler instalado: npm install -g wrangler
#   2. Autenticado: wrangler login
#   3. Executar a partir da raiz do monorepo: bash platform/scripts/setup-cloudflare.sh
#
# O que este script faz:
#   1. Cria o banco D1 "lms-progress" e captura o UUID retornado
#   2. Atualiza platform/wrangler.toml com o UUID real
#   3. Solicita o domínio do Cloudflare Pages e atualiza wrangler.toml
#   4. Aplica o schema SQL ao banco D1
#   5. Faz deploy do Worker
#   6. Exibe o curl de teste para validar o endpoint

set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
PLATFORM_DIR="$REPO_ROOT/platform"
WRANGLER_TOML="$PLATFORM_DIR/wrangler.toml"

echo "========================================"
echo " Setup Cloudflare D1 + Worker"
echo " Plataforma LMS — Técnico em IA (SENAC)"
echo "========================================"
echo ""

# 1. Verificar autenticação
echo "[1/5] Verificando autenticação wrangler..."
if ! wrangler whoami &>/dev/null; then
  echo "  ❌ Não autenticado. Execute: wrangler login"
  exit 1
fi
echo "  ✅ Autenticado como: $(wrangler whoami 2>/dev/null | grep -oP '(?<=Account: ).*' || echo '(conta Cloudflare)')"
echo ""

# 2. Criar banco D1
echo "[2/5] Criando banco D1 'lms-progress'..."
D1_OUTPUT=$(cd "$PLATFORM_DIR" && wrangler d1 create lms-progress 2>&1)
echo "$D1_OUTPUT"

DB_UUID=$(echo "$D1_OUTPUT" | grep -oP 'database_id\s*=\s*"\K[0-9a-f-]{36}')
if [[ -z "$DB_UUID" ]]; then
  echo ""
  echo "  ⚠️  Não foi possível extrair o UUID automaticamente."
  read -rp "  Cole manualmente o database_id aqui: " DB_UUID
fi
echo ""
echo "  ✅ database_id = $DB_UUID"
echo ""

# 3. Atualizar wrangler.toml
echo "[3/5] Atualizando platform/wrangler.toml..."

# Substituir database_id
sed -i "s|database_id   = \"SUBSTITUIR_PELO_ID_REAL\"|database_id   = \"$DB_UUID\"|" "$WRANGLER_TOML"

# Solicitar domínio
echo ""
echo "  Informe o domínio do Cloudflare Pages."
echo "  Exemplos:"
echo "    senac-lms.pages.dev           (Cloudflare Pages gratuito)"
echo "    lms.senac-ia.com.br           (domínio customizado)"
echo ""
read -rp "  Domínio: " CF_DOMAIN
sed -i "s|zone_name = \"seudominio.com\"|zone_name = \"$CF_DOMAIN\"|" "$WRANGLER_TOML"

echo "  ✅ wrangler.toml atualizado"
echo ""

# 4. Aplicar schema
echo "[4/5] Aplicando schema SQL ao banco D1..."
cd "$PLATFORM_DIR"
wrangler d1 execute lms-progress --file=worker/schema.sql
echo "  ✅ Schema aplicado"
echo ""

# 5. Deploy do Worker
echo "[5/5] Fazendo deploy do Worker..."
wrangler deploy worker/src/index.ts
echo ""

# 6. Exibir worker URL e curl de teste
WORKER_URL="https://lms-senac-tecnico-ia.workers.dev"
echo "========================================"
echo " ✅ Setup concluído!"
echo "========================================"
echo ""
echo "Worker URL: $WORKER_URL"
echo ""
echo "Teste de validação (deve retornar {\"ok\":true}):"
echo ""
echo "  curl -X POST $WORKER_URL/api/sync \\"
echo "    -H 'Content-Type: application/json' \\"
echo "    -d '{\"userId\":\"test-uuid\",\"aulaId\":\"a11-ucxx-09abr\",\"progresso\":0.5,\"respostas\":{}}'"
echo ""
echo "Verificar banco D1:"
echo "  cd platform && wrangler d1 execute lms-progress --command 'SELECT * FROM progress LIMIT 5'"
echo ""
echo "⚠️  Próximos passos:"
echo "  1. Commitar platform/wrangler.toml com o UUID real"
echo "  2. Configurar secrets no GitHub (ISSUE-4):"
echo "     CLOUDFLARE_API_TOKEN  — token com permissão 'Cloudflare Pages: Edit'"
echo "     CLOUDFLARE_ACCOUNT_ID — Account ID no Cloudflare Dashboard"
