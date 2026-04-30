#!/usr/bin/env python3
"""
Cria o Google Forms da Av.2 automaticamente.

SETUP (uma vez só):
1. Acesse: https://console.cloud.google.com/apis/credentials
2. Crie um OAuth 2.0 Client ID (tipo: Desktop App)
3. Baixe o JSON e salve como 'credentials.json' NESTA MESMA PASTA
4. Instale as dependências:
      pip install google-auth-oauthlib google-auth-httplib2 google-api-python-client

RODAR:
    python criar_forms_av2.py

Na primeira execução abre o navegador para autorizar. Depois salva o token
localmente e não pede mais.
"""

import json
import os
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request
from googleapiclient.discovery import build

SCOPES = ["https://www.googleapis.com/auth/forms.body"]
CREDS_FILE = os.path.join(os.path.dirname(__file__), "credentials.json")
TOKEN_FILE = os.path.join(os.path.dirname(__file__), "token_forms.json")

# ── Questões ──────────────────────────────────────────────────────────────────

QUESTOES = [
    {
        "titulo": "Q1 · HARDWARE — Você está escrevendo um trabalho no Word há 30 minutos. O computador desliga de repente antes de salvar. Por que o arquivo foi perdido?",
        "opcoes": [
            "O HD apagou o arquivo automaticamente para liberar espaço",
            "O SSD não suporta arquivos do Word sem conexão com a internet",
            "O arquivo estava na RAM, que é volátil — ela perde todos os dados quando o computador desliga",
            "O Windows deletou o arquivo por segurança ao detectar desligamento abrupto",
        ],
        "correta": 2,
    },
    {
        "titulo": "Q2 · HARDWARE — A CPU segue um ciclo para executar qualquer instrução. Pense assim: primeiro ela BUSCA a instrução na memória, depois ENTENDE o que precisa fazer, depois FAZ, depois GUARDA o resultado. Qual alternativa representa essa ordem?",
        "opcoes": [
            "Fetch → Decode → Execute → Store (buscar → decodificar → executar → armazenar)",
            "Execute → Fetch → Store → Decode",
            "Decode → Fetch → Execute → Store",
            "Store → Execute → Decode → Fetch",
        ],
        "correta": 0,
    },
    {
        "titulo": "Q3 · HARDWARE — Um modelo de IA está sendo treinado. O PyTorch divide os dados em lotes (batches) e processa vários ao mesmo tempo na GPU. Esse comportamento é possível por causa de:",
        "opcoes": [
            "Fetch-decode-execute — ciclo de instrução sequencial da CPU",
            "Pipeline paralelo na GPU — os CUDA cores processam múltiplos dados simultaneamente",
            "Cache da CPU — dados guardados temporariamente para acesso rápido",
            "Virtualização — emulação de hardware por software",
        ],
        "correta": 1,
    },
    {
        "titulo": "Q4 · HARDWARE — Qual dos itens abaixo é SOFTWARE e não hardware?",
        "opcoes": [
            "Placa de vídeo (GPU)",
            "Pente de memória RAM",
            "Sistema operacional Windows",
            "Processador (CPU)",
        ],
        "correta": 2,
    },
    {
        "titulo": "Q5 · TRANSFORMAÇÃO DIGITAL — Uma empresa tradicional de varejo decide usar IA para recomendar produtos personalizados, automação de estoque e atendimento via chatbot. Isso é um exemplo de:",
        "opcoes": [
            "Digitalização — apenas converter documentos físicos em PDF",
            "Transformação Digital — uso estratégico de tecnologia para mudar processos e o modelo de negócio",
            "Marketing digital — usar redes sociais para divulgar produtos",
            "Automação industrial — uso de robôs físicos na linha de produção",
        ],
        "correta": 1,
    },
    {
        "titulo": "Q6 · LGPD — O caso Serasa Experian envolveu o uso de dados de 223 milhões de brasileiros sem o consentimento deles. Qual artigo da LGPD foi diretamente violado?",
        "opcoes": [
            "Art. 3º — que define o território de aplicação da lei",
            "Art. 12º — que trata de anonimização de dados",
            "Art. 7º — que exige base legal explícita para o tratamento de dados pessoais",
            "Art. 20º — que regula decisões automatizadas",
        ],
        "correta": 2,
    },
    {
        "titulo": "Q7 · SEGURANÇA — Você recebe um e-mail do 'Banco Real' dizendo que sua conta será bloqueada se você não clicar em um link e confirmar sua senha. Esse tipo de ataque se chama:",
        "opcoes": [
            "Ransomware — sequestro de arquivos por criptografia",
            "Phishing — tentativa de enganar o usuário para roubar dados por e-mail ou mensagem falsa",
            "Brute force — tentativas automáticas de adivinhar sua senha",
            "SQL Injection — injeção de código malicioso em bancos de dados",
        ],
        "correta": 1,
    },
    {
        "titulo": "Q8 · FERRAMENTAS IA — Qual dos exemplos abaixo representa corretamente o uso de IA como ferramenta no ambiente de trabalho, seguindo boas práticas?",
        "opcoes": [
            "Copiar integralmente um texto gerado pelo ChatGPT e entregar como trabalho próprio sem revisão",
            "Usar IA para fazer todas as decisões da empresa sem nenhuma supervisão humana",
            "Usar o Copilot para sugerir um trecho de código e revisar o resultado antes de usar",
            "Proibir qualquer uso de IA para evitar riscos de segurança",
        ],
        "correta": 2,
    },
    {
        "titulo": 'Q9 · PYTHON — Analise o código:\n\nnota = input("Qual sua nota? ")   # usuário digita: 8\nprint(nota + 2)\n\nO que acontece ao rodar esse código?',
        "opcoes": [
            "Imprime 10",
            "Imprime 82",
            "Erro — input() sempre retorna texto (str); não dá pra somar com número sem converter antes com int() ou float()",
            "Imprime 8.2",
        ],
        "correta": 2,
    },
    {
        "titulo": 'Q10 · PYTHON — Trace o código e diga o que ele imprime:\n\nprecisao = 78\nif precisao >= 90:\n    print("Excelente")\nelif precisao >= 75:\n    print("Bom")\nelif precisao >= 60:\n    print("Atenção")\nelse:\n    print("Retreinar")',
        "opcoes": ["Excelente", "Bom", "Atenção", "Retreinar"],
        "correta": 1,
    },
    {
        "titulo": 'Q11 · PYTHON — No TokenLab você calculou tokens com o código abaixo. Sabendo que "Olá, mundo!" tem 11 caracteres, qual valor é impresso?\n\ntexto = "Olá, mundo!"\ntokens = len(texto) // 4\nprint(tokens)',
        "opcoes": ["2.75", "2", "3", "11"],
        "correta": 1,
    },
    {
        "titulo": "Q12 · PYTHON — Qual é o valor de 'total' quando o print for executado?\n\ntotal = 0\nfor i in range(1, 5):\n    total = total + i\nprint(total)",
        "opcoes": ["10", "15", "6", "4"],
        "correta": 0,
    },
    {
        "titulo": 'Q13 · INGLÊS — Leia o trecho:\n\n"The data breach exposed 223 million CPF numbers from Brazilian citizens."\n\nO que significa DATA BREACH no contexto acima?',
        "opcoes": [
            "Proteção de dados pessoais",
            "Acordo de privacidade entre empresas",
            "Vazamento de dados — acesso não autorizado que expõe informações pessoais",
            "Criptografia de arquivos sensíveis",
        ],
        "correta": 2,
    },
    {
        "titulo": "Q14 · INGLÊS — Qual das frases abaixo usa corretamente o termo CONSENT no contexto da LGPD?",
        "opcoes": [
            "The company gave consent to all users automatically.",
            "Serasa did not obtain the users' consent before using their personal data.",
            "Consent means the government approved the data collection.",
            "Users must pay for consent to use digital services.",
        ],
        "correta": 1,
    },
    {
        "titulo": 'Q15 · INGLÊS — Leia o trecho:\n\n"To train a deep learning model, you need a large dataset and significant GPU processing power. The model learns by adjusting weights through backpropagation."\n\nO que este trecho descreve?',
        "opcoes": [
            "Como instalar o Python no computador",
            "Como criar um banco de dados relacional",
            "O processo de treinamento de um modelo de deep learning usando GPU",
            "Como configurar a rede Wi-Fi de um servidor",
        ],
        "correta": 2,
    },
    {
        "titulo": 'Q16 · INGLÊS — Leia o trecho:\n\n"Companies must ensure compliance with the LGPD to avoid fines of up to 2% of their annual revenue."\n\nO que significa COMPLIANCE no contexto acima?',
        "opcoes": [
            "Acesso ilegal a dados de usuários",
            "Cancelamento de contratos com empresas estrangeiras",
            "Armazenamento de dados em nuvem",
            "Conformidade legal — estar em acordo com as normas e leis aplicáveis",
        ],
        "correta": 3,
    },
]

# ── Auth ───────────────────────────────────────────────────────────────────────

def get_credentials():
    creds = None
    if os.path.exists(TOKEN_FILE):
        creds = Credentials.from_authorized_user_file(TOKEN_FILE, SCOPES)
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file(CREDS_FILE, SCOPES)
            creds = flow.run_local_server(port=0)
        with open(TOKEN_FILE, "w") as f:
            f.write(creds.to_json())
    return creds

# ── Montar requests de batchUpdate ────────────────────────────────────────────

def montar_requests(questoes):
    reqs = []
    for idx, q in enumerate(questoes):
        reqs.append({
            "createItem": {
                "item": {
                    "title": q["titulo"],
                    "questionItem": {
                        "question": {
                            "required": True,
                            "grading": {
                                "pointValue": 1,
                                "correctAnswers": {
                                    "answers": [{"value": q["opcoes"][q["correta"]]}]
                                },
                            },
                            "choiceQuestion": {
                                "type": "RADIO",
                                "options": [{"value": o} for o in q["opcoes"]],
                            },
                        }
                    },
                },
                "location": {"index": idx},
            }
        })
    return reqs

# ── Main ───────────────────────────────────────────────────────────────────────

def main():
    if not os.path.exists(CREDS_FILE):
        print("❌ credentials.json não encontrado nesta pasta.")
        print("   Baixe em: https://console.cloud.google.com/apis/credentials")
        return

    print("🔐 Autenticando com Google...")
    creds = get_credentials()
    service = build("forms", "v1", credentials=creds)

    print("📋 Criando Forms...")
    form = service.forms().create(body={
        "info": {"title": "Av.2 — Quiz Geral · Técnico em IA · A19"}
    }).execute()
    form_id = form["formId"]

    print(f"   Forms criado: {form_id}")
    print("❓ Adicionando 16 questões...")

    service.forms().batchUpdate(
        formId=form_id,
        body={"requests": montar_requests(QUESTOES)}
    ).execute()

    print("⚙️  Ativando modo Quiz...")
    service.forms().batchUpdate(
        formId=form_id,
        body={"requests": [{"updateSettings": {
            "settings": {"quizSettings": {"isQuiz": True}},
            "updateMask": "quizSettings"
        }}]}
    ).execute()

    print()
    print("✅ PRONTO!")
    print(f"   Editar : https://docs.google.com/forms/d/{form_id}/edit")
    print(f"   Alunos : https://docs.google.com/forms/d/{form_id}/viewform")
    print()
    print("⚠️  Revise no Forms: configure prazo (30/04 9h35), colete e-mail, limite 1 resposta.")


if __name__ == "__main__":
    main()
