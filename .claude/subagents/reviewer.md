# Subagent: Reviewer

**Tipo:** `Plan`
**Posizione nel pipeline:** 2° — DOPO che il file è stato scritto, prima del QA.
**Trigger:** file grande/complesso o file medio (vedi tabella sotto).

## Pipeline completo
```
Researcher → [Reviewer ← sei qui] → QA → ✅ File pronto
```

## Quando usarlo
| Situazione | Usare Reviewer? |
|---|---|
| File grande/complesso (hero, timeline, vignette, index.html) | Sì |
| File medio (CSS sezione, modulo JS) | Sì |
| Fix semplice (colore, testo, spacing) | No — vai diretto al QA |

## Scopo
Verificare che il file rispetti tutte le convenzioni e regole del progetto.
Non suggerisce miglioramenti fuori scope — segnala solo violazioni reali.

## Checklist obbligatoria

### CSS
- [ ] Usa token da `--color-*`, `--space-*`, `--font-*`, ecc. — nessun valore hardcoded
- [ ] Naming BEM-lite: `.sezione__elemento--modificatore`
- [ ] Mobile-first: breakpoint con `min-width`, non `max-width`
- [ ] `prefers-reduced-motion` rispettato per ogni animazione/transition
- [ ] Nessun `!important` non giustificato
- [ ] Nessun colore/font scritto direttamente (es. `color: #fff` → `color: var(--color-text)`)
- [ ] Glass card usa `backdrop-filter` + `border: 1px solid var(--color-border)`
- [ ] Gradient border usa pseudo-element `::before` (pattern in `.claude/03-design-system.md`)

### JavaScript
- [ ] Ogni file esporta una funzione `initNomeModulo()`
- [ ] Nessun `document.write`, `eval`, o `innerHTML` con dati utente non sanitizzati
- [ ] Event listener aggiunti su elementi che esistono (controllare se null prima)
- [ ] GSAP importato da `gsap` e `gsap/ScrollTrigger` (non CDN)
- [ ] `once: true` su tutti i ScrollTrigger (non si ri-triggera su scroll-up)

### HTML (solo se il file è index.html)
- [ ] Ogni sezione ha `id` corrispondente al link navbar
- [ ] Headings gerarchici (un solo `<h1>`, poi `<h2>`, poi `<h3>`)
- [ ] Attributi `alt` su tutte le `<img>`
- [ ] `lang="it"` sull'elemento `<html>`
- [ ] Font preconnect in `<head>` prima del link Google Fonts
- [ ] Meta description presente
- [ ] Open Graph tags presenti

### Contenuti
- [ ] Testi allineati a `.claude/04-content.md`
- [ ] Dati personali corretti (nome: Tommaso Muci, email, GitHub, Instagram)
- [ ] Nessun testo in inglese dove non previsto

## Prompt template
```
Sei un agente Reviewer per il portfolio di Tommaso Muci.
Progetto: c:/Users/samu-/OneDrive/Desktop/mio-portfolio

Revisiona il file: [NOME FILE]
[INCOLLA CONTENUTO DEL FILE]

Controlla la checklist in .claude/subagents/reviewer.md.
Regole CSS: .claude/06-css-conventions.md
Regole animazioni: .claude/07-animations.md

Riporta SOLO i problemi trovati con: riga, problema, fix suggerito.
Se tutto è corretto, scrivi: "✅ Nessun problema trovato."
```

## Output atteso
- `Riga X — [problema] → [fix]`
- Oppure: `✅ Nessun problema trovato.`

## Prossimo step
Passa l'output (e il file corretto) al **QA** → `.claude/subagents/qa.md`
