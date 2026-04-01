# CLAUDE.md — Portfolio Tommaso Muci

## Workflow obbligatorio — Researcher · Reviewer · QA
Per ogni file rilevante eseguire il pipeline:
**Researcher** (Explore) → **Reviewer** (Plan) → **QA** (general-purpose)

| Agente | File | Quando |
|---|---|---|
| Researcher | [.claude/subagents/researcher.md](.claude/subagents/researcher.md) | PRIMA di scrivere |
| Reviewer | [.claude/subagents/reviewer.md](.claude/subagents/reviewer.md) | DOPO aver scritto |
| QA | [.claude/subagents/qa.md](.claude/subagents/qa.md) | SEMPRE, ultimo step |

---

## Riferimenti critici
- **Design system (palette, token CSS, pattern):** [.claude/03-design-system.md](.claude/03-design-system.md)
- **Contenuti e dati personali:** [.claude/04-content.md](.claude/04-content.md)

---

## Stack
- **Build:** Vite + Vanilla HTML/CSS/JS — NO framework, NO Tailwind
- **Animazioni scroll:** GSAP + ScrollTrigger (`npm install gsap`)
- **Form contatti:** Formspree (free tier)
- **Deploy:** Vercel (auto da GitHub)
- **Comandi:** `npm run dev` · `npm run build` · `npm run preview`

---

## Struttura file chiave
```
index.html          ← unico HTML, tutte le sezioni inline
src/main.js         ← importa tutti i CSS e inizializza tutti i moduli JS
src/styles/         ← un file CSS per sezione + base.css + layout.css
src/js/             ← un modulo JS per funzionalità (navbar, vignettes, ecc.)
src/assets/         ← fonts/, images/, svg/
```

---

## Regole CSS
- Tutti i valori da custom property in `base.css` — mai hardcoded
- Naming BEM-lite: `.sezione__elemento--modificatore`
- Mobile-first: breakpoint con `min-width`
- `prefers-reduced-motion` obbligatorio per ogni animazione
- Glassmorphism: `backdrop-filter: blur(20px)` + `border: 1px solid var(--color-border)`
- Gradient border: pseudo-element `::before` con `background: var(--gradient-primary)`

---

## Regole JS
- Ogni modulo esporta `export function initNomeModulo() {}`
- Null-check prima di ogni `querySelector`
- GSAP importato da npm (`import { gsap } from 'gsap'`), non CDN
- ScrollTrigger: sempre `once: true` (non ri-triggera su scroll-up)
- `prefers-reduced-motion`: skip tutte le animazioni GSAP se attivo

---

## Regole HTML
- Un solo `<h1>` (nome Tommaso Muci nella Hero)
- Ogni sezione: `<section id="nome">` con `id` uguale al link navbar
- `alt` su tutte le `<img>`
- `lang="it"` su `<html>`

---

## Sezioni del sito (ordine)
1. Navbar — logo TM, link, hamburger mobile
2. Hero — nome, tagline, avatar SVG, CTA Contattami / Scopri di più
3. Chi sono — bio + vignetta computer
4. Cosa faccio — 3 card (Vacation Rental / Web Dev & AI / Fisioterapia) + vignetta ingranaggio
5. Skills — icone devicons: VS Code, Claude, GitHub, HTML5, CSS3, JavaScript
6. Timeline — stile cartoon anni '90, 4 tappe (UNICA sezione illustrativa)
7. Progetti — card: Sogno Salento, ORIGINERESELL, placeholder futuri
8. Blog/Note — 3 card placeholder
9. Curiosità — 4 fun facts
10. Obiettivi futuri — lista goal + vignetta lampadina
11. Contatti — form Formspree + email + GitHub + Instagram + vignetta telefono

---

## Fasi di sviluppo
- [x] Fase 0: Setup Vite + GSAP + struttura cartelle
- [ ] Fase 1: index.html skeleton + base.css + layout.css + Navbar
- [ ] Fase 2: Hero + Chi sono + Cosa faccio + GSAP
- [ ] Fase 3: Skills + Progetti + Blog
- [ ] Fase 4: Timeline cartoon anni '90
- [ ] Fase 5: Vignette + Curiosità + Obiettivi + Contatti
- [ ] Fase 6: Polish + Lighthouse >90 + reduced-motion
- [ ] Fase 7: Deploy Vercel + SEO + dominio

---

## Deploy
```bash
npm run build   # genera dist/
# Connetti repo GitHub a Vercel → auto-deploy su push a main
# Dominio: Cloudflare Registrar (.it o .dev) → DNS Vercel
```
SEO checklist: `<title>`, `<meta description>`, Open Graph, canonical, sitemap.xml, robots.txt
