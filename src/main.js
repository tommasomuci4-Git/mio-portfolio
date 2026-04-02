/* ============================================================
   MAIN.JS — Entry point: importa CSS + inizializza moduli
   ============================================================ */

// ─── CSS (ordine importante) ───
import './styles/base.css'
import './styles/layout.css'
import './styles/navbar.css'
import './styles/hero.css'
import './styles/chi-sono.css'
import './styles/progetti.css'
import './styles/contatti.css'
import './styles/cursor.css'
import './styles/mobile.css'    /* deve essere l'ultimo — massima priorità */

// ─── Moduli JS ───
import { initNavbar }      from './js/navbar.js'
import { initMobileMenu }  from './js/mobile-menu.js'
import { initAnimations }  from './js/animations.js'
import { initContactForm } from './js/contact-form.js'
import { initCursor }      from './js/cursor.js'

// ─── Init al DOMContentLoaded ───
document.addEventListener('DOMContentLoaded', () => {
  initNavbar()
  initMobileMenu()
  initAnimations()
  initContactForm()
  initCursor()
})
