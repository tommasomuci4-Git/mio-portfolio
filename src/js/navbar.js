/* ============================================================
   NAVBAR.JS — Scroll-aware + active section highlight
   ============================================================ */

export function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  // ─── Scroll: aggiunge classe --scrolled dopo 80px ───
  const onScroll = () => {
    if (window.scrollY > 80) {
      navbar.classList.add('navbar--scrolled');
    } else {
      navbar.classList.remove('navbar--scrolled');
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // check iniziale

  // ─── Active section highlight via IntersectionObserver ───
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.navbar__link[href^="#"]');
  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.getAttribute('id');
        navLinks.forEach((link) => {
          const matches = link.getAttribute('href') === `#${id}`;
          link.classList.toggle('navbar__link--active', matches);
        });
      });
    },
    {
      rootMargin: '-40% 0px -55% 0px', // attiva quando la sezione è a centro viewport
      threshold: 0,
    }
  );

  sections.forEach((s) => observer.observe(s));
}
