# Subagent: Reviewer

**Tipo:** `Plan`
**Posizione nel pipeline:** 2° — DOPO che il componente è stato scritto, prima del QA.

## Pipeline
```
Researcher → [Reviewer ← sei qui] → QA → ✅ Componente pronto
```

## Checklist obbligatoria

### React
- [ ] Nessun prop inutilizzato
- [ ] `key` presente su tutti i `.map()`
- [ ] `useEffect` con dependency array corretto
- [ ] Nessun `useEffect` per cose che si possono calcolare direttamente
- [ ] Nomi componenti in PascalCase, funzioni/variabili in camelCase

### Tailwind + Dark Mode
- [ ] Ogni elemento visivo ha la coppia `text-*` + `dark:text-*`
- [ ] Ogni sfondo ha la coppia `bg-*` + `dark:bg-*`
- [ ] Nessun colore hardcoded inline (no `style={{ color: '#fff' }}`)
- [ ] Classi responsive presenti dove necessario (`md:`, `lg:`)

### Accessibilità
- [ ] `alt` su tutte le `<img>`
- [ ] `aria-label` su bottoni icon-only
- [ ] `<section>` ha `id` corrispondente al link navbar
- [ ] Heading gerarchici corretti (nessun salto da h2 a h4)

### Animazioni (Framer Motion)
- [ ] `prefers-reduced-motion` rispettato (usa `useReducedMotion()`)
- [ ] Nessuna animazione che blocca l'interazione utente

### Contenuto
- [ ] Testi in italiano (salvo sezioni con label in inglese tipo "About", "Skills")
- [ ] Dati personali corretti (nome: Tommaso Muci, email: tommasomuci4@gmail.com)
- [ ] Nessun testo placeholder rimasto nel componente finale

## Prompt template
```
Sei un agente Reviewer per il portfolio React di Tommaso Muci.

Revisiona il componente: [NOME FILE]
[INCOLLA IL CODICE]

Controlla la checklist in .claude/subagents/reviewer.md.
Riporta SOLO i problemi trovati: riga, problema, fix suggerito.
Se tutto è corretto: "✅ Nessun problema trovato."
```

## Prossimo step
Passa l'output al **QA** → `.claude/subagents/qa.md`
