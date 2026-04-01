# Subagent: QA

**Tipo:** `general-purpose`
**Posizione nel pipeline:** 3° e ultimo — prima di considerare un file pronto.
**Trigger:** sempre, per qualsiasi file (anche i fix semplici).

## Pipeline completo
```
Researcher → Reviewer → [QA ← sei qui] → ✅ File pronto
```

## Quando usarlo
| Situazione | Usare QA? |
|---|---|
| File grande/complesso (hero, timeline, vignette, index.html) | Sì |
| File medio (CSS sezione, modulo JS) | Sì |
| Fix semplice (colore, testo, spacing) | Sì — è l'unico agente necessario |

## Scopo
Simulare un test end-to-end: verifica che il file funzioni correttamente
nel contesto del progetto, che tutti i collegamenti siano validi e che
il risultato sia visibile/funzionante su mobile e desktop.

## Checklist

### Integrazione con main.js
- [ ] Il CSS è importato in `src/main.js` nell'ordine corretto?
- [ ] La funzione `init*` del modulo JS è importata e chiamata in `main.js`?

### Allineamento HTML ↔ CSS
- [ ] I selettori CSS corrispondono alle classi in `index.html`?
- [ ] Gli `id` usati da JS esistono in `index.html`?

### Asset
- [ ] I path di immagini/SVG puntano a file che esistono fisicamente in `src/assets/`?

### Sintassi
- [ ] Nessun `)` o `}` mancante nel CSS
- [ ] Nessun `import` con path errato nel JS
- [ ] Nessuna variabile JS usata prima di essere dichiarata

### Mobile (375px)
- [ ] Il layout funziona su viewport 375px?
- [ ] Il testo non va fuori dal contenitore?
- [ ] I bottoni sono abbastanza grandi da toccare (min 44px height)?

### Console errors (simulati leggendo il codice)
- [ ] Nessun `querySelector` che potrebbe restituire null senza controllo
- [ ] GSAP ScrollTrigger registrato prima di essere usato

## Prompt template
```
Sei un agente QA per il portfolio di Tommaso Muci.
Progetto: c:/Users/samu-/OneDrive/Desktop/mio-portfolio

Fai il QA del file: [NOME FILE]
[INCOLLA CONTENUTO DEL FILE]

Leggi anche:
- src/main.js (verifica import e init)
- index.html (verifica allineamento selettori)
- src/assets/ (verifica path asset)

Checklist: .claude/subagents/qa.md

Riporta:
  ✅ PASS — [descrizione]
  ❌ FAIL — [problema] → [fix necessario]
```

## Output atteso
```
✅ PASS — Import in main.js presente
✅ PASS — Selettori CSS allineati a index.html
❌ FAIL — Path src/assets/images/sogno.jpg non trovato → rinominare in sogno-salento.jpg
✅ PASS — Layout mobile 375px corretto
```

## Soglia di approvazione
- **0 ❌ FAIL** → file approvato, pronto per commit
- **1+ ❌ FAIL** → correggere e ri-eseguire il QA prima di procedere
