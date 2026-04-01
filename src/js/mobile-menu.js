/* ============================================================
   MOBILE-MENU.JS — Hamburger toggle
   ============================================================ */

export function initMobileMenu() {
  const hamburger  = document.querySelector('.navbar__hamburger');
  const mobileMenu = document.querySelector('.navbar__mobile');
  if (!hamburger || !mobileMenu) return;

  let isOpen = false;

  const toggle = () => {
    isOpen = !isOpen;
    hamburger.classList.toggle('navbar__hamburger--open', isOpen);
    mobileMenu.classList.toggle('navbar__mobile--open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
    // blocca scroll body quando menu aperto
    document.body.style.overflow = isOpen ? 'hidden' : '';
  };

  hamburger.addEventListener('click', toggle);

  // Chiude cliccando un link del menu mobile
  mobileMenu.querySelectorAll('.navbar__mobile-link').forEach((link) => {
    link.addEventListener('click', () => {
      if (isOpen) toggle();
    });
  });

  // Chiude premendo Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen) toggle();
  });
}
