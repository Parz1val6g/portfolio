# Auto-Translation System

## 🎯 Objetivo

Sistema automático que traduz conteúdo do site (projetos GitHub + textos) usando API gratuita e guarda num ficheiro JSON.

## 📁 Ficheiros

- `scripts/auto-translate.js` - Script Node.js principal
- `assets/data/translations.json` - Traduções guardadas
- `scripts/package.json` - Configuração npm

## 🚀 Como Usar

### 1. Executar Script Manualmente

```bash
cd scripts
node auto-translate.js
```

### 2. Ou via npm

```bash
cd scripts
npm run translate
```

### 3. Quando Executar

- Quando adicionas novo projeto ao GitHub
- Quando adicionas novo texto ao site sem tradução
- Periodicamnete (ex: 1x por semana)

## ⚙️ Como Funciona

1. **Fetch GitHub**: Obtém todos os projetos da organização
2. **Detecta Idioma**: Verifica se descrição é PT ou EN
3. **Traduz Novos**: Apenas traduz projetos sem tradução
4. **Guarda JSON**: Salva em `translations.json`
5. **Site Carrega**: `controls.js` carrega traduções ao iniciar

## 🌐 API Usada

**MyMemory Translation API**

- ✅ Gratuita
- ✅ 5,000 palavras/dia
- ✅ Sem API key
- ✅ Boa qualidade

## 📊 Estrutura JSON

```json
{
  "projects": {
    "pt": {
      "NomeRepo": "Descrição em português"
    },
    "en": {
      "NomeRepo": "Description in English"
    }
  },
  "site": {
    "pt": {},
    "en": {}
  },
  "lastUpdate": "2025-12-12T17:30:00Z"
}
```

## 🔄 GitHub Actions (Opcional)

Podes criar `.github/workflows/translate.yml`:

```yaml
name: Auto-Translate
on:
  schedule:
    - cron: "0 0 * * 0" # Semanalmente
  workflow_dispatch: # Manual

jobs:
  translate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: cd scripts && node auto-translate.js
      - uses: stefanzweifel/git-auto-commit-action@v4
        with:
          commit_message: "chore: update translations"
```

## 💡 Vantagens

- ✅ Utilizadores não chamam API (carregamento instantâneo)
- ✅ Traduções versionadas no Git
- ✅ 100% gratuito
- ✅ Execução simples
- ✅ Expandível para todo o site
