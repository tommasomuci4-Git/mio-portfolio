/* ============================================================
   MOBILE-MENU.JS — Hamburger toggle
   ============================================================ */

export function initMobileMenu() {
  const hamburger = document.querySelector('.navbar__hamburger');
  const mobileMenu = document.querySelector('.navbar__mobile');
  const backdrop  = document.querySelector('.navbar__backdrop');
  if (!hamburger || !mobileMenu) return;

  let isOpen = false;

  const close = () => {
    if (!isOpen) return;
    isOpen = false;
    hamburger.classList.remove('navbar__hamburger--open');
    mobileMenu.classList.remove('navbar__mobile--open');
    backdrop?.classList.remove('navbar__backdrop--open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  const open = () => {
    isOpen = true;
    hamburger.classList.add('navbar__hamburger--open');
    mobileMenu.classList.add('navbar__mobile--open');
    backdrop?.classList.add('navbar__backdrop--open');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };

  hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    isOpen ? close() : open();
  });

  // Chiude toccando il backdrop (visuale)
  backdrop?.addEventListener('click', close);

  // Chiude toccando qualsiasi punto fuori dal drawer — funziona in ogni sezione
  document.addEventListener('click', (e) => {
    if (!isOpen) return;
    if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
      close();
    }
  });

  // Chiude cliccando un link
  mobileMenu.querySelectorAll('.navbar__mobile-link').forEach((link) => {
    link.addEventListener('click', close);
  });

  // Chiude premendo Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });
}
