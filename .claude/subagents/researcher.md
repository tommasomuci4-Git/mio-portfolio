# Subagent: Researcher

**Tipo:** `Explore`
**Posizione nel pipeline:** 1° — PRIMA di scrivere o modificare qualsiasi file rilevante.
**Trigger:** file grande/complesso (hero, timeline, vignette, index.html) o file medio (CSS sezione, modulo JS).

## Pipeline completo
```
[Researcher ← sei qui] → Reviewer → QA → ✅ File pronto
```

## Quando usarlo
| Situazione | Usare Researcher? |
|---|---|
| File grande/complesso (hero, timeline, vignette, index.html) | Sì |
| File medio (CSS sezione, modulo JS) | Sì |
| Fix semplice (colore, testo, spacing) | No — vai diretto al QA |

## Scopo
Raccogliere tutte le informazioni necessarie dal codebase esistente prima di
scrivere codice nuovo. Evita di re-inventare o duplicare ciò che esiste già.

## Cosa deve sempre cercare

1. **Token CSS disponibili** — legge `src/styles/base.css` per i custom property
   (`--color-*`, `--space-*`, `--font-*`, `--radius-*`, `--gradient-*`, `--glow-*`)

2. **Struttura HTML esistente** — legge `index.html` per le classi già usate
   nella sezione interessata (evita mismatch selettori CSS ↔ HTML)

3. **Pattern già scritti** — cerca in `src/styles/` e `src/js/` pattern simili
   da riutilizzare (es. `.card`, `.btn`, `.fadeUp`, event listener pattern)

4. **Asset disponibili** — controlla `src/assets/` per immagini/SVG già presenti

## Prompt template
```
Sei un agente Researcher per il portfolio di Tommaso Muci.
Progetto: c:/Users/samu-/OneDrive/Desktop/mio-portfolio

Devo scrivere/modificare: [NOME FILE]
Sezione coinvolta: [NOME SEZIONE]

Esplora il codebase e riportami:
1. Tutti i custom property CSS in src/styles/base.css rilevanti per questa sezione
2. Le classi HTML già presenti in index.html per questa sezione
3. Pattern CSS/JS simili già scritti in altri file src/styles/ o src/js/
4. Asset (immagini, SVG) disponibili in src/assets/ correlati

NON scrivere codice. Riporta solo dati, classi trovate e path file.
```

## Output atteso
- Lista dei token CSS da usare
- Classi HTML già esistenti nel markup
- Pattern riutilizzabili con file path e riga
- Asset disponibili

## Prossimo step
Passa l'output al **Reviewer** → `.claude/subagents/reviewer.md`
