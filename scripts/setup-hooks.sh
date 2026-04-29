#!/usr/bin/env bash
# setup-hooks.sh — Instala o pre-commit hook no .git/hooks/
# Rodar uma vez após clonar o repositório: npm run setup:hooks

ROOT="$(git rev-parse --show-toplevel)"
HOOK="$ROOT/.git/hooks/pre-commit"

cat > "$HOOK" << 'EOF'
#!/usr/bin/env bash
ROOT="$(git rev-parse --show-toplevel)"
LINT="$ROOT/scripts/lint-slides.mjs"
STAGED_SLIDES=$(git diff --cached --name-only --diff-filter=ACM | grep 'slides\.md$')

if [ -z "$STAGED_SLIDES" ]; then
  exit 0
fi

echo "🔍 Lint de slides staged..."

FAILED=0
for file in $STAGED_SLIDES; do
  node "$LINT" "$file"
  if [ $? -ne 0 ]; then
    FAILED=1
  fi
done

if [ $FAILED -ne 0 ]; then
  echo ""
  echo "❌ Lint falhou — corrigir os erros acima antes de commitar."
  echo "   Para pular (não recomendado): git commit --no-verify"
  exit 1
fi

exit 0
EOF

chmod +x "$HOOK"
echo "✅ Hook pre-commit instalado em $HOOK"
