/* ============================================================
   PARTICLES.JS — Stelle/punti luminosi nello sfondo
   ============================================================ */

export function initParticles() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  const canvas = document.querySelector('.particles-canvas')
  if (!canvas) return

  const ctx = canvas.getContext('2d')
  let W = canvas.width  = window.innerWidth
  let H = canvas.height = window.innerHeight

  // Ridimensiona al resize
  window.addEventListener('resize', () => {
    W = canvas.width  = window.innerWidth
    H = canvas.height = window.innerHeight
  }, { passive: true })

  // Crea particelle
  const COUNT = Math.min(80, Math.floor((W * H) / 18000))
  const particles = Array.from({ length: COUNT }, () => ({
    x:  Math.random() * W,
    y:  Math.random() * H,
    r:  Math.random() * 1.2 + 0.3,
    vx: (Math.random() - 0.5) * 0.15,
    vy: (Math.random() - 0.5) * 0.15,
    o:  Math.random() * 0.5 + 0.1,
  }))

  function draw() {
    ctx.clearRect(0, 0, W, H)
    for (const p of particles) {
      p.x += p.vx
      p.y += p.vy
      // Wrap around
      if (p.x < 0) p.x = W
      if (p.x > W) p.x = 0
      if (p.y < 0) p.y = H
      if (p.y > H) p.y = 0

      ctx.beginPath()
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(148, 163, 184, ${p.o})`
      ctx.fill()
    }
    requestAnimationFrame(draw)
  }

  draw()
}
