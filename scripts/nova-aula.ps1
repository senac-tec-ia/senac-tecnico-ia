param(
    [Parameter(Mandatory = $true, Position = 0)]
    [string]$Nome,
    [string]$Org = "senac-tec-ia",
    [switch]$Privado
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

$Root      = Split-Path $PSScriptRoot -Parent
$Template  = Join-Path $Root "neural-slides-template"
$Destino   = Join-Path $Root $Nome
$NomeLower = $Nome.ToLower()

Write-Host ""
Write-Host "=======================================" -ForegroundColor Cyan
Write-Host "  Nova Aula: $Nome  ->  $Org/$Nome" -ForegroundColor Cyan
Write-Host "=======================================" -ForegroundColor Cyan
Write-Host ""

if (Test-Path $Destino) {
    Write-Error "Pasta '$Nome' ja existe em $Root."
    exit 1
}
if (-not (Test-Path $Template)) {
    Write-Error "neural-slides-template nao encontrado em $Root."
    exit 1
}
if (-not (Get-Command "gh" -ErrorAction SilentlyContinue)) {
    Write-Error "GitHub CLI (gh) nao esta instalado ou nao esta no PATH."
    exit 1
}

# 1. Copiar template
Write-Host "[1/6] Copiando neural-slides-template -> $Nome..." -ForegroundColor Yellow

$ExcluirPastas   = @(".github", ".git", "node_modules", "dist", ".slidev")
$ExcluirArquivos = @("AULAS-DADAS.md", "PROJETO-AULAS-1-TRIMESTRE.md", "package-lock.json")

New-Item -ItemType Directory -Path $Destino | Out-Null

Get-ChildItem $Template -Recurse -Force | ForEach-Object {
    $rel    = $_.FullName.Substring($Template.Length).TrimStart('\', '/')
    $partes = $rel.Split([IO.Path]::DirectorySeparatorChar)
    if ($partes[0] -in $ExcluirPastas) { return }
    if ($_.Name -in $ExcluirArquivos)  { return }
    $destPath = Join-Path $Destino $rel
    if ($_.PSIsContainer) {
        New-Item -ItemType Directory -Path $destPath -Force | Out-Null
    } else {
        Copy-Item $_.FullName -Destination $destPath -Force
    }
}
Write-Host "    OK -- $((Get-ChildItem $Destino -Recurse -File).Count) arquivos copiados" -ForegroundColor Green

# 2. Ajustar package.json
Write-Host "[2/6] Configurando package.json..." -ForegroundColor Yellow

$pkgPath = Join-Path $Destino "package.json"
$pkg     = Get-Content $pkgPath -Raw -Encoding UTF8 | ConvertFrom-Json
$pkg.name        = $NomeLower
$pkg.description = "Aula $Nome - Tecnico em Inteligencia Artificial SENAC"
$pkg | ConvertTo-Json -Depth 10 | Set-Content $pkgPath -Encoding UTF8
Write-Host "    OK -- name: $NomeLower" -ForegroundColor Green

# 3. Ajustar meta.yaml
Write-Host "[3/6] Configurando meta.yaml..." -ForegroundColor Yellow

$metaPath = Join-Path $Destino "meta.yaml"
if (Test-Path $metaPath) {
    $meta = Get-Content $metaPath -Raw -Encoding UTF8
    $meta = $meta -replace '(?m)^aula:\s*.+$',  "aula: `"$Nome`""
    $meta = $meta -replace '(?m)^data:\s*.+$',   'data: "TBD"'
    $meta = $meta -replace '(?m)^status:\s*.+$', 'status: "em-planejamento"'
    Set-Content $metaPath $meta -Encoding UTF8
    Write-Host "    OK" -ForegroundColor Green
} else {
    Write-Host "    (meta.yaml nao encontrado -- pulando)" -ForegroundColor DarkGray
}

# 4. Limpar slides.md
Write-Host "[4/6] Limpando slides.md..." -ForegroundColor Yellow

# Derivar label da aula: A09 -> "Aula 09", A10 -> "Aula 10"
if ($Nome -match '^A(\d+)') {
    $AulaLabel = "Aula $($Matches[1].PadLeft(2, '0'))"
} else {
    $AulaLabel = $Nome
}

$DataHoje = (Get-Date -Format "dd 'de' MMMM 'de' yyyy" -Culture "pt-BR")
$slidesContent = @"
---
# $Nome
# ──────────────────────────────────────────────────────────────
theme: ./
colorSchema: dark
title: "Técnico em IA — $AulaLabel"
author: Leonardo Zanini
courseTitle: Técnico em Inteligência Artificial
aulaNum: "$AulaLabel"
bgPreset: palette
layout: cover
# ──────────────────────────────────────────────────────────────
---

<!-- SLIDE 1 — Capa -->

# $Nome
## Conteúdo a definir

*$DataHoje*

> Use @produtor-aula para gerar os slides desta aula.
"@
[System.IO.File]::WriteAllText((Join-Path $Destino "slides.md"), $slidesContent, [System.Text.Encoding]::UTF8)
Write-Host "    OK" -ForegroundColor Green

# 5. Registrar scripts no package.json raiz
Write-Host "[5/6] Registrando scripts no package.json raiz..." -ForegroundColor Yellow

$rootPkgPath = Join-Path $Root "package.json"
$rootPkg     = Get-Content $rootPkgPath -Raw -Encoding UTF8 | ConvertFrom-Json

$rootPkg.scripts | Add-Member -NotePropertyName "dev:$NomeLower"    -NotePropertyValue "npm run dev --workspace=$NomeLower"    -Force
$rootPkg.scripts | Add-Member -NotePropertyName "build:$NomeLower"  -NotePropertyValue "npm run build --workspace=$NomeLower"  -Force
$rootPkg.scripts | Add-Member -NotePropertyName "export:$NomeLower" -NotePropertyValue "npm run export --workspace=$NomeLower" -Force

$workspaces = @($rootPkg.workspaces)
if ("A*" -notin $workspaces) {
    $rootPkg.workspaces = $workspaces + "A*"
}
$rootPkg | ConvertTo-Json -Depth 10 | Set-Content $rootPkgPath -Encoding UTF8
Write-Host "    OK -- dev:$NomeLower, build:$NomeLower, export:$NomeLower" -ForegroundColor Green

# 6. Criar repo GitHub + push
Write-Host "[6/6] Criando repositorio $Org/$Nome no GitHub..." -ForegroundColor Yellow

$visibility = if ($Privado) { "--private" } else { "--public" }

Push-Location $Destino
try {
    git init -b main | Out-Null
    git add . | Out-Null
    git commit -m "init: $Nome criada a partir do neural-slides-template" | Out-Null
    gh repo create "$Org/$Nome" $visibility `
        --description "Aula $Nome - Tecnico em IA SENAC" `
        --source . `
        --remote origin `
        --push
    Write-Host "    OK" -ForegroundColor Green
} finally {
    Pop-Location
}

# 7. Remover .git interno para que o repo pai rastreie os arquivos normalmente
Write-Host "[7/6] Removendo .git interno de $Nome (evita gitlink no repo pai)..." -ForegroundColor Yellow
Remove-Item -Recurse -Force (Join-Path $Destino ".git")
Write-Host "    OK -- $Nome sera rastreada como pasta normal pelo workspace" -ForegroundColor Green

Write-Host ""
Write-Host "=======================================" -ForegroundColor Green
Write-Host "  Concluido!" -ForegroundColor Green
Write-Host "=======================================" -ForegroundColor Green
Write-Host "  Local:  $Destino"
Write-Host "  Remoto: https://github.com/$Org/$Nome"
Write-Host ""
Write-Host "Proximos passos:" -ForegroundColor Cyan
Write-Host "  1. @planejador-trimestre  ->  planejar conteudo de $Nome"
Write-Host "  2. npm run dev:$NomeLower  ->  abrir Slidev"
Write-Host "  3. @atualizador-pos-aula  ->  registrar a aula apos ministrar"
Write-Host ""