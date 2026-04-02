/* ============================================================
   SCROLL-SNAP.JS — Snap magnetico via JS per mobile
   Aspetta che lo scroll (momentum incluso) si fermi,
   poi scatta alla sezione più vicina.
   ============================================================ */

export function initScrollSnap() {
  if (!window.matchMedia('(hover: none)').matches) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  const sections = [...document.querySelectorAll('.hero, .section')]
  if (!sections.length) return

  let snapTimer  = null
  let isSnapping = false

  // Sezione il cui inizio è più vicino al punto di riferimento (top 55% viewport)
  function getNearestSection() {
    const ref = window.scrollY + window.innerHeight * 0.55

    return sections.reduce((nearest, section) => {
      const distNearest = Math.abs(nearest.offsetTop - ref)
      const distSection = Math.abs(section.offsetTop - ref)
      return distSection < distNearest ? section : nearest
    })
  }

  function snapTo(section) {
    if (isSnapping) return
    // Non fare nulla se siamo già esattamente su questa sezione
    if (Math.abs(section.offsetTop - window.scrollY) < 8) return

    isSnapping = true
    section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    // Blocca nuovi snap per 700ms (durata animazione)
    setTimeout(() => { isSnapping = false }, 700)
  }

  // Dopo ogni scroll, aspetta 90ms di silenzio poi scatta
  window.addEventListener('scroll', () => {
    if (isSnapping) return
    clearTimeout(snapTimer)
    snapTimer = setTimeout(() => {
      snapTo(getNearestSection())
    }, 150)
  }, { passive: true })
}
