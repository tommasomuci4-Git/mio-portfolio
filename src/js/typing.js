/* ============================================================
   TYPING.JS — Typing animation sul tagline
   ============================================================ */

export function initTyping() {
  const el = document.querySelector('.hero__tagline-typed')
  if (!el) return

  // Salta se reduced-motion attivo
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    el.textContent = 'web developer freelance.'
    return
  }

  const phrases = [
    'web developer freelance.',
    'builder digitale.',
    'gestore di case vacanze.',
    'appassionato di AI & automazione.',
  ]

  let phraseIndex = 0
  let charIndex   = 0
  let deleting    = false

  function tick() {
    const current = phrases[phraseIndex]

    if (deleting) {
      charIndex--
      el.textContent = current.slice(0, charIndex)
    } else {
      charIndex++
      el.textContent = current.slice(0, charIndex)
    }

    let delay = deleting ? 40 : 80

    if (!deleting && charIndex === current.length) {
      // Pausa alla fine della parola
      delay = 1800
      deleting = true
    } else if (deleting && charIndex === 0) {
      deleting = false
      phraseIndex = (phraseIndex + 1) % phrases.length
      delay = 400
    }

    setTimeout(tick, delay)
  }

  // Cursore lampeggiante via CSS
  el.classList.add('hero__tagline-typed--cursor')
  setTimeout(tick, 800)
}
