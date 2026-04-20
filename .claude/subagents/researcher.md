# Subagent: Researcher

**Tipo:** `Explore`
**Posizione nel pipeline:** 1° — PRIMA di scrivere o modificare qualsiasi componente.

## Pipeline
```
[Researcher ← sei qui] → Reviewer → QA → ✅ Componente pronto
```

## Quando usarlo
| Situazione | Usare Researcher? |
|---|---|
| Nuovo componente (Hero, About, Skills...) | Sì |
| Modifica significativa a un componente | Sì |
| Fix semplice (testo, colore, spacing) | No — vai diretto al QA |

## Scopo
Raccogliere tutte le informazioni necessarie prima di scrivere codice React.
Evita di duplicare pattern o classi già esistenti nel progetto.

## Cosa deve sempre cercare

1. **Token Tailwind custom** — legge `src/index.css` per le variabili `@theme`
2. **Componenti esistenti** — legge `src/components/` per pattern riutilizzabili
3. **ThemeContext** — legge `src/context/ThemeContext.jsx` per capire come usare `useTheme()`
4. **Asset disponibili** — controlla `public/` e `src/assets/` per immagini già presenti
5. **Classi dark mode** — pattern `dark:` già usati in altri componenti

## Prompt template
```
Sei un agente Researcher per il portfolio React di Tommaso Muci.
Progetto: C:/Users/Tommaso/OneDrive/Documenti/GitHub/mio-portfolio

Devo scrivere/modificare: [NOME COMPONENTE]

Esplora il codebase e riportami:
1. Token CSS custom in src/index.css (@theme)
2. Pattern Tailwind già usati in altri componenti src/components/
3. Come viene usato useTheme() negli altri componenti
4. Asset disponibili in public/ e src/assets/

NON scrivere codice. Riporta solo dati trovati e path file.
```

## Output atteso
- Token `@theme` disponibili
- Classi Tailwind + dark: già usate con esempi
- Pattern props/hooks riutilizzabili
- Asset disponibili con path

## Prossimo step
Passa l'output al **Reviewer** → `.claude/subagents/reviewer.md`
