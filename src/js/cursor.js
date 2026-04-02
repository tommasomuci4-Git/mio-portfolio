/* ============================================================
   CURSOR.JS — Cursore custom animato (dot + ring)
   ============================================================ */

export function initCursor() {
  // Solo su dispositivi con mouse (no touch)
  if (window.matchMedia('(hover: none)').matches) return

  const dot  = document.querySelector('.cursor__dot')
  const ring = document.querySelector('.cursor__ring')
  if (!dot || !ring) return

  let mouseX = 0, mouseY = 0
  let ringX  = 0, ringY  = 0

  // Segui il mouse — dot istantaneo
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX
    mouseY = e.clientY
    dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`
  })

  // Ring: segue con ritardo (lerp)
  function animateRing() {
    ringX += (mouseX - ringX) * 0.12
    ringY += (mouseY - ringY) * 0.12
    ring.style.transform = `translate(${ringX}px, ${ringY}px)`
    requestAnimationFrame(animateRing)
  }
  animateRing()

  // Hover su elementi cliccabili → ring si ingrandisce
  const clickables = document.querySelectorAll('a, button, [role="button"], .hero__card')
  clickables.forEach(el => {
    el.addEventListener('mouseenter', () => {
      ring.classList.add('cursor__ring--hover')
      dot.classList.add('cursor__dot--hover')
    })
    el.addEventListener('mouseleave', () => {
      ring.classList.remove('cursor__ring--hover')
      dot.classList.remove('cursor__dot--hover')
    })
  })

  // Click: breve animazione di shrink
  document.addEventListener('mousedown', () => ring.classList.add('cursor__ring--click'))
  document.addEventListener('mouseup',   () => ring.classList.remove('cursor__ring--click'))

  // Nascondi quando esce dalla finestra
  document.addEventListener('mouseleave', () => {
    dot.style.opacity  = '0'
    ring.style.opacity = '0'
  })
  document.addEventListener('mouseenter', () => {
    dot.style.opacity  = '1'
    ring.style.opacity = '1'
  })

  // ─── Scroll progress bar ───
  const progressBar = document.querySelector('.scroll-progress')
  if (progressBar) {
    window.addEventListener('scroll', () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      const pct   = total > 0 ? (window.scrollY / total) * 100 : 0
      progressBar.style.width = `${pct}%`
    }, { passive: true })
  }

  // ─── Gradient che segue il mouse ───
  const glow = document.querySelector('.mouse-glow')
  if (glow) {
    let glowTargetX = window.innerWidth / 2
    let glowTargetY = window.innerHeight / 2
    let glowX = glowTargetX
    let glowY = glowTargetY

    document.addEventListener('mousemove', (e) => {
      glowTargetX = e.clientX
      glowTargetY = e.clientY
    })

    function animateGlow() {
      glowX += (glowTargetX - glowX) * 0.06
      glowY += (glowTargetY - glowY) * 0.06
      glow.style.background = `radial-gradient(700px circle at ${glowX}px ${glowY}px, rgba(59,130,246,0.13) 0%, transparent 70%)`
      requestAnimationFrame(animateGlow)
    }
    animateGlow()
  }
}
