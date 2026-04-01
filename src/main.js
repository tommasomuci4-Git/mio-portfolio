/* ============================================================
   MAIN.JS — Entry point: importa CSS + inizializza moduli
   ============================================================ */

// ─── CSS (ordine importante) ───
import './styles/base.css'
import './styles/layout.css'
import './styles/navbar.css'
import './styles/hero.css'
import './styles/chi-sono.css'
import './styles/cosa-faccio.css'
import './styles/skills.css'
import './styles/timeline.css'
import './styles/progetti.css'
import './styles/blog.css'
import './styles/curiosita.css'
import './styles/obiettivi.css'
import './styles/contatti.css'
import './styles/vignettes.css'
import './styles/mobile.css'    /* deve essere l'ultimo — massima priorità */

// ─── Moduli JS ───
import { initNavbar }      from './js/navbar.js'
import { initMobileMenu }  from './js/mobile-menu.js'
import { initAnimations }  from './js/animations.js'
import { initVignettes }   from './js/vignettes.js'
import { initTimeline }    from './js/timeline.js'
import { initContactForm } from './js/contact-form.js'

// ─── Init al DOMContentLoaded ───
document.addEventListener('DOMContentLoaded', () => {
  initNavbar()
  initMobileMenu()
  initAnimations()
  initVignettes()
  initTimeline()
  initContactForm()
})
