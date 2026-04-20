# Subagent: QA

**Tipo:** `general-purpose`
**Posizione nel pipeline:** 3° e ultimo — prima di considerare un componente pronto.

## Pipeline
```
Researcher → Reviewer → [QA ← sei qui] → ✅ Componente pronto
```

## Checklist

### Integrazione con App.jsx
- [ ] Il componente è importato in `src/App.jsx`?
- [ ] L'`id` della sezione corrisponde al link in `Navbar.jsx`?

### Import
- [ ] Tutti gli import puntano a file che esistono?
- [ ] `useTheme` importato da `../context/ThemeContext`?
- [ ] Icone `lucide-react` importate correttamente?

### Sintassi JSX
- [ ] Nessun tag non chiuso
- [ ] Nessun `class=` invece di `className=`
- [ ] Nessun `for=` invece di `htmlFor=`

### Mobile (375px)
- [ ] Il layout funziona su viewport 375px?
- [ ] Il testo non va fuori dal contenitore?
- [ ] I bottoni hanno altezza minima 44px (touch target)?
- [ ] Padding laterale presente su mobile?

### Dark mode
- [ ] Il componente è visibile sia in dark che in light?
- [ ] I contrasti sono leggibili in entrambi i temi?

### Performance
- [ ] Nessuna immagine senza `loading="lazy"`?
- [ ] Nessun import di librerie pesanti non necessarie?

## Prompt template
```
Sei un agente QA per il portfolio React di Tommaso Muci.

Fai il QA del componente: [NOME FILE]
[INCOLLA IL CODICE]

Leggi anche:
- src/App.jsx (verifica import e uso)
- src/components/Navbar.jsx (verifica id sezione)

Checklist: .claude/subagents/qa.md

Riporta:
  ✅ PASS — [descrizione]
  ❌ FAIL — [problema] → [fix necessario]
```

## Soglia di approvazione
- **0 ❌ FAIL** → componente approvato
- **1+ ❌ FAIL** → correggere e ri-eseguire il QA
