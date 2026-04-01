# 03 — Design System

## Palette — Dark Giovanile/Sfarzosa
La palette è dark ma vivace, con gradient viola→fucsia come accento principale.

```css
:root {
  /* Sfondi */
  --color-bg:        #09090f;   /* quasi nero con tinta blu */
  --color-surface:   #111128;   /* card background */
  --color-surface-2: #1a1a35;   /* surface elevata, hover */
  --color-border:    rgba(255,255,255,0.08);

  /* Accenti */
  --color-accent:   #7c3aed;   /* violet */
  --color-accent-2: #c026d3;   /* fuchsia */
  --color-accent-3: #22d3ee;   /* cyan (tech/contrasto) */
  --color-pink:     #ec4899;   /* pink */

  /* Gradiente principale (usato su heading, bottoni, border) */
  --gradient-primary: linear-gradient(135deg, #7c3aed 0%, #c026d3 50%, #ec4899 100%);
  --gradient-cyan:    linear-gradient(135deg, #7c3aed 0%, #22d3ee 100%);
  --gradient-text:    linear-gradient(135deg, #a78bfa 0%, #e879f9 50%, #f472b6 100%);

  /* Testo */
  --color-text:       #f0f0ff;
  --color-text-muted: #7070a0;

  /* Glow */
  --glow-violet: 0 0 30px rgba(124,58,237,0.45);
  --glow-pink:   0 0 30px rgba(192,38,211,0.45);
  --glow-cyan:   0 0 30px rgba(34,211,238,0.35);
  --shadow-card: 0 4px 40px rgba(0,0,0,0.6);
}
```

## Tipografia
| Variabile | Font | Uso |
|---|---|---|
| `--font-heading` | Plus Jakarta Sans | H1–H4, nome, titoli card |
| `--font-body` | Inter | Paragrafi, descrizioni |
| `--font-mono` | JetBrains Mono | Label skills, snippet |
| `--font-cartoon` | Fredoka One | SOLO sezione timeline |

### Scale tipografica
```css
/* Headings */
h1 { font-size: clamp(2.5rem, 6vw, 5rem); font-weight: 800; }
h2 { font-size: clamp(1.8rem, 4vw, 3rem);  font-weight: 700; }
h3 { font-size: clamp(1.2rem, 2.5vw, 1.6rem); font-weight: 600; }
```

## Spaziature
```css
--space-xs:  0.25rem   /* 4px  */
--space-sm:  0.5rem    /* 8px  */
--space-md:  1rem      /* 16px */
--space-lg:  1.5rem    /* 24px */
--space-xl:  2.5rem    /* 40px */
--space-2xl: 5rem      /* 80px */
--space-3xl: 8rem      /* 128px */
```

## Border radius
```css
--radius-sm:   6px
--radius-md:   12px
--radius-lg:   20px
--radius-xl:   32px
--radius-full: 9999px
```

## Effetti speciali

### Gradient text (headings principali)
```css
.gradient-text {
  background: var(--gradient-text);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

### Glassmorphism card
```css
.glass-card {
  background: rgba(17, 17, 40, 0.6);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: var(--radius-lg);
}
```

### Gradient border on hover
```css
.card { position: relative; }
.card::before {
  content: '';
  position: absolute;
  inset: -1px;
  border-radius: inherit;
  background: var(--gradient-primary);
  z-index: -1;
  opacity: 0;
  transition: opacity 0.3s;
}
.card:hover::before { opacity: 1; }
```

### Glow button
```css
.btn--primary {
  background: var(--gradient-primary);
  box-shadow: var(--glow-violet);
  transition: box-shadow 0.3s, transform 0.2s;
}
.btn--primary:hover {
  box-shadow: var(--glow-pink);
  transform: translateY(-2px);
}
```
