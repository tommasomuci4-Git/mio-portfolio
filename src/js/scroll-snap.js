/* ============================================================
   SCROLL-SNAP.JS — Snap manuale via JS per mobile
   CSS scroll-snap su iOS frena il momentum → usiamo JS
   ============================================================ */

export function initScrollSnap() {
  // Solo mobile (touch), desktop usa CSS scroll-snap
  if (!window.matchMedia('(hover: none)').matches) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  const sections = [...document.querySelectorAll('.hero, .section')]
  if (!sections.length) return

  let snapTimer     = null
  let isSnapping    = false
  let touchStartY   = 0
  let touchStartTime = 0

  // Trova la sezione target in base alla posizione scroll attuale
  function getTarget(direction) {
    const scrollY   = window.scrollY
    const vpH       = window.innerHeight

    // Trova la sezione corrente (quella che contiene il top del viewport)
    let currentIdx = 0
    for (let i = 0; i < sections.length; i++) {
      if (sections[i].offsetTop <= scrollY + vpH * 0.35) {
        currentIdx = i
      }
    }

    if (direction === 'down' && currentIdx < sections.length - 1) {
      return sections[currentIdx + 1]
    }
    if (direction === 'up' && currentIdx > 0) {
      return sections[currentIdx - 1]
    }
    return sections[currentIdx]
  }

  function snapTo(section) {
    if (isSnapping) return
    isSnapping = true
    section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setTimeout(() => { isSnapping = false }, 600)
  }

  // Registra touch start
  window.addEventListener('touchstart', (e) => {
    touchStartY    = e.touches[0].clientY
    touchStartTime = Date.now()
  }, { passive: true })

  // Al rilascio del dito: calcola direzione e velocità
  window.addEventListener('touchend', (e) => {
    if (isSnapping) return

    const deltaY   = touchStartY - e.changedTouches[0].clientY
    const deltaT   = Date.now() - touchStartTime
    const velocity = Math.abs(deltaY) / deltaT  // px/ms

    // Ignora micro-swipe (tocco accidentale)
    if (Math.abs(deltaY) < 20) return

    // Swipe veloce → vai alla sezione successiva/precedente
    if (velocity > 0.3) {
      const dir = deltaY > 0 ? 'down' : 'up'
      snapTo(getTarget(dir))
      return
    }

    // Swipe lento → aspetta che il momentum finisca, poi snap alla più vicina
    if (snapTimer) clearTimeout(snapTimer)
    snapTimer = setTimeout(() => {
      snapTo(getTarget('stay'))
    }, 120)
  }, { passive: true })
}
