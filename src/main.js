/* ============================================================
   MAIN.JS — Entry point: importa CSS + inizializza moduli
   ============================================================ */

// ─── CSS (ordine importante) ───
import './styles/base.css'
import './styles/layout.css'
import './styles/navbar.css'
import './styles/hero.css'
import './styles/chi-sono.css'
import './styles/skills.css'
import './styles/progetti.css'
import './styles/obiettivi.css'
import './styles/contatti.css'
import './styles/cursor.css'
import './styles/mobile.css'    /* deve essere l'ultimo — massima priorità */

// ─── Moduli JS ───
import { initNavbar }      from './js/navbar.js'
import { initMobileMenu }  from './js/mobile-menu.js'
import { initAnimations }  from './js/animations.js'
import { initContactForm } from './js/contact-form.js'
import { initCursor }      from './js/cursor.js'
import { initTyping }      from './js/typing.js'
import { initParticles }   from './js/particles.js'

// ─── Forza sempre partenza dall'hero al caricamento ───
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual'
}
window.scrollTo(0, 0)

// ─── Init al DOMContentLoaded ───
document.addEventListener('DOMContentLoaded', () => {
  initNavbar()
  initMobileMenu()
  initAnimations()
  initContactForm()
  initCursor()
  initTyping()
  initParticles()
})
